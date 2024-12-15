import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'channel' })
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: String })
  channel_namel: string;

  @Column({ type: String, unique: true })
  chanel_value: string;

  @Column({ type: String })
  icon: string;

  @CreateDateColumn({ type: Date, default: new Date() })
  created_at: Date;

  @UpdateDateColumn({ type: Date })
  updated_at: Date;
}

/**
 * 스카니아, 베라, 루나, 제니스, 크로아, 유니온, 엘리시움, 이노시스, 레드, 오로라, 아케인, 노바, 리부트, 리부트2, 버닝, 버닝2, 버닝3
 */
