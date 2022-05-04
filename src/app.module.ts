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
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./role/role.guard";

@Module({
  imports: [TicketModule, TribuneModule, UserModule, SectorModule, SeatModule, RowModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService,  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {}
