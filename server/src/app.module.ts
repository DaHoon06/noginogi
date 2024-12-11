import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from '@common/middlewares';
import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from './common.module';

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [AppController],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
