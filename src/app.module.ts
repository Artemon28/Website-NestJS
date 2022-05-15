import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { TribuneModule } from './tribune/tribune.module';
import { UserModule } from "./user/user.module";
import { SectorModule } from './sector/sector.module';
import { SeatModule } from './seat/seat.module';
import { RowModule } from './row/row.module';
import { PrismaModule } from "./Prisma/prisma.module";
import { AuthModule } from './auth/auth.module';
import { EventsGateway } from "./events/events.gateway";
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [
    TicketModule, TribuneModule, UserModule, SectorModule, SeatModule, RowModule, PrismaModule, ChatModule,
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://788e80b1cbef11ec964f014fe604f8e7-eu-west-1.aws.supertokens.io:3567",
      apiKey: "yWF2-l0=sJqKStBfo7QiCHvnM50oR7",
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "artemonweb2",
        apiDomain: "http://localhost:12345/",
        websiteDomain: "http://localhost:12345/",
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
