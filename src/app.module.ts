import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { TribuneModule } from './tribune/tribune.module';
import { UserModule } from "./user/user.module";
import { SectorModule } from './sector/sector.module';
import { SeatModule } from './seat/seat.module';
import { RowModule } from './row/row.module';

@Module({
  imports: [TicketModule, TribuneModule, UserModule, SectorModule, SeatModule, RowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
