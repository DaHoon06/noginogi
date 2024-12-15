import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelRepository extends Repository<Channel> {
  constructor(private readonly dataSource: DataSource) {
    super(Channel, dataSource.createEntityManager());
  }

  findChannelList() {
    return this.createQueryBuilder('channel')
      .orderBy('channel_index', 'DESC')
      .getMany();
  }
}
