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

  @Column({ type: 'varchar', length: 255 })
  channel_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  channel_value: string;

  @Column({ type: 'varchar', length: 255 })
  icon: string;

  @Column({ type: 'int', default: 0 })
  channel_index: number;

  @Column({ type: 'varchar', default: '1' })
  channel_type: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}

/**
 * 스카니아, 베라, 루나, 제니스, 크로아, 유니온, 엘리시움, 이노시스, 레드, 오로라, 아케인, 노바, 리부트, 리부트2, 버닝, 버닝2, 버닝3
 *
 * localimage path : http://localhost:8080/public/assets/images/channel/luna.png
 */
