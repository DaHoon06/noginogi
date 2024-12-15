import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'event_notice' })
export class EventNotice extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column({ unique: true })
  notice_id: number;

  @Column()
  date: Date;

  @Column()
  date_event_start: Date;

  @Column()
  date_event_end: Date;

  @CreateDateColumn({ default: new Date() })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
