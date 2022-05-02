import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from "./seat.controller";
import { PrismaService } from "../prisma.service";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
  imports: [],
  providers: [SeatService, PrismaService],
  controllers: [SeatController]
})
export class SeatModule {}
