import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response {
  username: string;
}

@Injectable()
export class NameInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    // const now = next.handle().pipe();
    return next.handle().pipe(map(username => username === null ? false : username ));
  }
}