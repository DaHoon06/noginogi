import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { mapleStoryNoticeEntities } from '@modules/maplestory/notice/entities';
import { Channel } from '@modules/maplestory/channel/entities/channel.entity';

export const typeormConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 5432,
  username: configService.get<string>('DB_USER') || 'local',
  password: configService.get<string>('DB_PASSWORD') || 'local',
  database: configService.get<string>('DB_NAME') || 'local',
  entities: [...mapleStoryNoticeEntities, Channel],
  synchronize: true,
  logging: false,
});
