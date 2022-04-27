import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response {
  data: number;
}
@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    const now = Date.now();
    return next.handle().pipe(map((response) => ({ ...response, data: Date.now() - now })));
  }
}