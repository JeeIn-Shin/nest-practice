import { Module } from '@nestjs/common';
import { NoticesModule } from './use-cases/notice/notice.module';
import { NoticeHttpModule } from './use-cases/notice/notice-http.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './frameworks/data-services/pg/model/notice.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: '',
      password: '',
      database: '',
      entities: [Notice],
      synchronize: true,
    }),
    NoticesModule,
    NoticeHttpModule,
  ],
})
export class AppModule {}
