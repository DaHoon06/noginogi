import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
export interface Response<T> {
  data: T;
}

@Injectable()
export class HttpInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor() {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<Response<T>>> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    // 요청된 시간
    const requestId = Date.now().toString();

    const { ip, method, originalUrl, user, body } = req;
    const { statusCode, message } = res;
    const userAgent = req.get('user-agent') || '';

    return next.handle().pipe(tap(async (data) => {}));
  }
}
