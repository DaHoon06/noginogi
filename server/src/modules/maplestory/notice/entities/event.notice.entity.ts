import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event_notice' })
export class EventNotice extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  notice_id: number;

  @Column()
  date: Date;

  @Column()
  date_event_start: Date;

  @Column()
  date_event_end: Date;
}
