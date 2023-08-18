import { Module } from '@nestjs/common';
import { NoticesModule } from './use-cases/notice/notice.module';
import { NoticeHttpModule } from './use-cases/notice/notice-http.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './frameworks/data-services/pg/model/notice.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Notice],
      synchronize: true,
    }),
    NoticesModule,
    NoticeHttpModule,
  ],
})
export class AppModule {}
