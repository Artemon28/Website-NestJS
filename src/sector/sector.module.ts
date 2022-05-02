import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from "./sector.controller";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [],
  providers: [SectorService, PrismaService],
  controllers: [SectorController]
})
export class SectorModule {}
