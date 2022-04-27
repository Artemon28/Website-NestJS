import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { TimeInterceptor } from './time.interceptor';
import { NameInterceptor } from "./name.interceptor";

@Controller()
@UseInterceptors(TimeInterceptor)
@UseInterceptors(NameInterceptor)
export class AppController {
  @Get()
  @Render('index')
  getIndexPage() {
    return { username: "Artemon28" };
  }
  @Get('account')
  @Render('account')
  getAccount() {
    return { username: "Artemon28" };
  }
  @Get('shoppingBag')
  @Render('shoppingBag')
  getShoppingBag() {
    return {};
  }
  @Get('tickets')
  @Render('tickets')
  getTickets() {
    return {};
  }
}