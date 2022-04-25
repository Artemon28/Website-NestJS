import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from "./sector.controller";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
  imports: [],
  providers: [SectorService],
  controllers: [SectorController]
})
export class SectorModule {}
