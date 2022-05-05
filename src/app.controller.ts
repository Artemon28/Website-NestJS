import { Controller, Get, Post, Render, UseGuards, UseInterceptors, Request, Response } from "@nestjs/common";
import { TimeInterceptor } from './time.interceptor';
import { NameInterceptor } from "./name.interceptor";
import { AuthGuard } from "./auth/auth.guard";
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";
import { AppService } from "./app.service";
import { SessionRequest } from "supertokens-node/framework/express";
import { Session } from './auth/session.decorator';


@Controller()

@UseInterceptors(TimeInterceptor)
export class AppController {

  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  @UseInterceptors(NameInterceptor)
  @Render('index')
  async getIndexPage(){
    return{}
  }
  // async getIndexPage(@Request() req: SessionRequest, @Session() session: Session, @Response({passthrough: true}) res: Response) {
  //   const username = await this.appService.isAuth(session);
  //   return {username: username};
  // }

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
  @Get('login')
  @Render('login')
  getLogin() {
    return {};
  }

  @Get('test')
  @UseGuards(AuthGuard)
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic
    return "magic";
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async postLogout(@Session() session: SessionContainer): Promise<string> {
    await session.revokeSession();

    return "Success! User session revoked";
  }
}