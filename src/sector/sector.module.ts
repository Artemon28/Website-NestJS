import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from "./sector.controller";
import { PrismaService } from "../prisma.service";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
  imports: [],
  providers: [SectorService, PrismaService],
  controllers: [SectorController]
})
export class SectorModule {}
