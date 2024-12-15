import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'cashshop_notice' })
export class CashShop extends BaseEntity {
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

  @Column({ nullable: true })
  date_sale_start: Date;

  @Column({ nullable: true })
  date_sale_end: Date;

  @Column()
  ongoing_flag: string;
}
