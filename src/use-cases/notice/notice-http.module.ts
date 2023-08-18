import { Module } from '@nestjs/common';
import { NoticesModule } from './notice.module';
import { NoticesService } from './notice.service';
import { NoticesController } from 'src/controllers';

@Module({
  imports: [NoticesModule],
  providers: [NoticesService],
  controllers: [NoticesController],
})
export class NoticeHttpModule {}
