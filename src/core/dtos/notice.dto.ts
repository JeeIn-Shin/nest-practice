import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Notice } from '../entities';

export class CreateNoticeDto extends Notice {
  @IsNotEmpty()
  id: any;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  content: any;

  @IsDate()
  date: any;
}

export class UpdateNoticeDto extends CreateNoticeDto {}
