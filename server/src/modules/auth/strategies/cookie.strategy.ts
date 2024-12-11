import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from '@modules/auth/auth.service';
import { JwtPayloadDto } from '@modules/auth/dto';

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies[this.configService.get('COOKIE_SECRET')];
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    });
  }

  /**
   * @description: jwt guard validate
   * @param {JwtPayloadDto} payload
   */
  async validate(payload: JwtPayloadDto): Promise<JwtPayloadDto> {
    return { ...payload };
  }
}
