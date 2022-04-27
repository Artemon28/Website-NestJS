import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from './app.interceptor';

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  @Get(['/', 'index.hbs'])
  @Render('index')
  getIndexPage() {
    return { username: 'Artemon28' };
  }
  @Get(['/', 'account.hbs'])
  @Render('account')
  getAccount() {
    return { username: 'Artemon28' };
  }
  @Get(['/', 'shoppingBag.hbs'])
  @Render('shoppingBag')
  getShoppingBag() {
    return { username: 'Artemon28' };
  }
  @Get(['/', 'tickets.hbs'])
  @Render('tickets')
  getTickets() {
    return { username: 'Artemon28' };
  }
}