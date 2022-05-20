import { Controller, Get, Post, Render, UseGuards, UseInterceptors } from "@nestjs/common";
import { TimeInterceptor } from './time.interceptor';
import { NameInterceptor } from "./name.interceptor";
import { AuthGuard, OptionalAuthGuard } from "./auth/auth.guard";
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";
import { Session } from './auth/session.decorator';
import EmailPassword from "supertokens-node/recipe/emailpassword";


@Controller()

@UseInterceptors(TimeInterceptor)
export class AppController {
  @Get()
  @UseInterceptors(NameInterceptor)
  @Render('index')
  async getIndexPage() {
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
  @Get('login')
  @Render('login')
  getLogin() {
    return {};
  }
  @Get('chat')
  @Render('chat')
  getChat() {
    return {};
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async postLogout(@Session() session: SessionContainer): Promise<string> {
    await session.revokeSession();
    return "Success! User session revoked";
  }

  @Get('session')
  @UseGuards(OptionalAuthGuard)
  async session_info(@Session() session: SessionContainer): Promise<Object> {
    if (session !== undefined) {
      let userId = session.getUserId();
      let userInfo = await EmailPassword.getUserById(userId);
      return userInfo;
    } else {
      return "";
    }
  }

}