import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { TimeInterceptor } from './time.interceptor';
import { NameInterceptor } from "./name.interceptor";

@Controller()
@UseInterceptors(TimeInterceptor)

export class AppController {
  @UseInterceptors(NameInterceptor)
  @Get()
  @Render('index')
  getIndexPage() {
    return {};
  }
  @UseInterceptors(NameInterceptor)
  @Get('account')
  @Render('account')
  getAccount() {
    return {};
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