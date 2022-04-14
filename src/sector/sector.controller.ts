import { Controller, Post } from "@nestjs/common";
import { Sector } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";

@Controller('sector')
export class SectorController {
  constructor(
    private readonly sectorService: SectorService,
  ) {}

  @Post()
  public create(dto: CreateSectorDto): Promise<Sector>{
    return this.sectorService.create(dto);
  }
}
