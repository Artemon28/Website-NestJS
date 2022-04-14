import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';

@Module({
  providers: [SectorService]
})
export class SectorModule {}
