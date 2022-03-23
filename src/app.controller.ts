import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('index') // <= Название вашего представления
  getIndexPage() {
    return { user: 'Hello world!' }; // Модель представления
  }
}
