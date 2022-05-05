import { Get, Injectable } from "@nestjs/common";
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { Session } from './auth/session.decorator';

@Injectable()
export class AppService {

  public async isAuth(@Session() session: SessionContainer): Promise<string> {
    if (session !== undefined) {
      let userInfo = await EmailPassword.getUserById(session.getUserId());
      return userInfo.email
    } else {
      return "";
    }
  }

  public getViewName(): string {
    return 'Hello World!';
  }
}
