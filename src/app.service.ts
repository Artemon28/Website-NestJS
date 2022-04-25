import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getViewName(): string {
    return 'Hello World!';
  }
}
