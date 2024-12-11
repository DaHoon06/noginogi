import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from '@modules/auth/auth.service';
import { JwtStrategy, CookieStrategy } from 'modules/auth/strategies';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRED_TIME'),
        },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy, CookieStrategy],
  exports: [AuthService],
})
export class AuthModule {}
