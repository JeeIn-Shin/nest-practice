import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateNoticeDto, UpdateNoticeDto } from '../core/dtos';
import { Notice } from '../core/entities';
import { NoticesService } from '../use-cases/notice';

@Controller('notice')
export class NoticesController {
  constructor(private noticesService: NoticesService) {}

  @Get()
  async getAll(): Promise<Notice[]> {
    return this.noticesService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') NoticeId: number) {
    return this.noticesService.findOne(NoticeId);
  }

  @Post()
  createNotice(@Body() createtNoticeDto: CreateNoticeDto) {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month + '-' + day;

    createtNoticeDto.author = 'admin';
    createtNoticeDto.date = dateString;
    return this.noticesService.create(createtNoticeDto);
  }

  @Patch(':id')
  updateNotice(
    @Param('id') NoticeId: number,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return this.noticesService.update(NoticeId, updateNoticeDto);
  }

  @Delete(':id')
  deleteNotice(@Param('id') NoticeId: number) {
    return this.noticesService.remove(NoticeId);
  }
}
