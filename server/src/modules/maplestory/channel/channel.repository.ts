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
      .select([
        'channel.channel_name',
        'channel.icon',
        'channel.channel_value',
        'channel.channel_type',
      ])
      .orderBy('channel.channel_index', 'ASC')
      .getMany();
  }
}
