import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'update_notice' })
export class UpdateNotice extends BaseEntity {
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

  @CreateDateColumn({ default: new Date() })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
