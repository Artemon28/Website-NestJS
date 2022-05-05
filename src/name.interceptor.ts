import {
  CallHandler,
  ExecutionContext, Get,
  Injectable,
  NestInterceptor, Session
} from "@nestjs/common";
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
    return next.handle().pipe(map((response) => ({ ...response, username: "Artemon28"})));
  }
}