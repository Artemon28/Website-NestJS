import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from './app.interceptor';

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  @Get()
  @Render('index')
  getIndexPage() {
    return { username: 'Artemon28' };
  }
  @Get('account')
  @Render('account')
  getAccount() {
    return { username: 'Artemon28' };
  }
  @Get('shoppingBag')
  @Render('shoppingBag')
  getShoppingBag() {
    return { username: 'Artemon28' };
  }
  @Get('tickets')
  @Render('tickets')
  getTickets() {
    return { username: 'Artemon28' };
  }
}