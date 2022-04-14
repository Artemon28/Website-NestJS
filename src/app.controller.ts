import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index') // <= Название вашего представления
  getIndexPage() {
    return { user: 'Hello world!' }; // Модель представления
  }

}