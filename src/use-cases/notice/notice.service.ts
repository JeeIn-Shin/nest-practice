import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notice } from 'src/frameworks/data-services/pg/model/notice.model';

@Injectable()
export class NoticesService {
  constructor(
    @InjectRepository(Notice)
    private noticesRepository: Repository<Notice>,
  ) {}

  findAll(): Promise<Notice[]> {
    return this.noticesRepository.find();
  }

  findOne(id: number): Promise<Notice | null> {
    return this.noticesRepository.findOneBy({ id });
  }

  create(item: Notice): Promise<Notice> {
    return this.noticesRepository.save(item);
  }

  update(id: number, item: Notice) {
    return this.noticesRepository
      .createQueryBuilder()
      .update(Notice)
      .set({
        title: item.title,
        content: item.content,
        date: item.date,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number): Promise<void> {
    await this.noticesRepository.delete(id);
  }
}
