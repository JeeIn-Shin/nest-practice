import { Module } from '@nestjs/common';
import { Notice } from 'src/frameworks/data-services/pg/model/notice.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Notice])],
  exports: [TypeOrmModule],
})
export class NoticesModule {}
