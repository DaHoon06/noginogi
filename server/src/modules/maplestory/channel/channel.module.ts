import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { ChannelRepository } from './channel.repository';

@Module({
  imports: [],
  controllers: [ChannelController],
  providers: [ChannelService, ChannelRepository],
  exports: [],
})
export class ChannelModule {}
