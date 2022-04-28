import { Controller, Get, Render, Session, UseGuards, UseInterceptors } from "@nestjs/common";
import { TimeInterceptor } from './time.interceptor';
import { NameInterceptor } from "./name.interceptor";
import { AuthGuard } from "./auth/auth.guard";
import { SessionContainer } from "supertokens-node/recipe/session";

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

  @Get('test')
  @UseGuards(AuthGuard)
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic
    return "magic";
  }
}