import { Controller, Get } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('maplestory/channel')
export class ChannelController {
  constructor(
    private readonly channelService: ChannelService
  ) {}

  // 채널 리스트
  @Get('/list')
  channelList() {
    return this.channelService.channelList();
  }
}
