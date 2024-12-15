import { Injectable, Logger } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class ChannelService {
  private readonly logger = new Logger(ChannelService.name);

  constructor(private readonly channelRepository: ChannelRepository) {}

  channelList() {
    return this.channelRepository.findChannelList();
  }
}
