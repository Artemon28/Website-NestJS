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

@Module({
  imports: [
    TicketModule, TribuneModule, UserModule, SectorModule, SeatModule, RowModule, PrismaModule, AuthModule,
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://5c65e891c63d11ec8aa6f9f72d564744-eu-west-1.aws.supertokens.io:3572",
      apiKey: "vaqPAN94zOYnv=qcI-odesl7emwtUq",
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "artemonweb2",
        apiDomain: "http://localhost:12345",
        websiteDomain: "https://artemonweb2.herokuapp.com",
        apiBasePath: "/api",
        websiteBasePath: "/api"
      },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
