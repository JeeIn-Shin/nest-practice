import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('text')
  content: any;

  @Column('date')
  date: any;
}
