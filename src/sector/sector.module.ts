import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from "./sector.controller";

@Module({
  imports: [],
  providers: [SectorService],
  controllers: [SectorController]
})
export class SectorModule {}
