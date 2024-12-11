import { IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthUserDto } from '@modules/auth/dto/auth.user.dto';

export class JwtPayloadDto {
  @IsObject()
  @Type(() => AuthUserDto)
  payload: AuthUserDto;
  @IsNumber()
  iat: number;
  @IsNumber()
  exp: number;
}
