import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from './app.interceptor';

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  @Get(['/', 'index.hbs'])
  @Render('index')
  getIndex() {
    return { isLoggedIn: true };
  }
  @Get(['/', 'account.hbs'])
  @Render('account')
  getAccount() {
    return { isLoggedIn: true };
  }
  @Get(['/', 'shoppingBag.hbs'])
  @Render('shoppingBag')
  getShoppingBag() {
    return { isLoggedIn: true };
  }
  @Get(['/', 'tickets.hbs'])
  @Render('tickets')
  getTickets() {
    return { isLoggedIn: true };
  }
}