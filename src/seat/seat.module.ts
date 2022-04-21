import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from "./seat.controller";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [],
  providers: [SeatService, PrismaService],
  controllers: [SeatController]
})
export class SeatModule {}
