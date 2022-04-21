import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Row, Seat, Sector } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateSeatDto } from "../seat/dto/create-seat.dto";

@ApiTags('processing of seats')
@Controller('sector')
export class SectorController {
  constructor(
    private readonly sectorService: SectorService,
  ) {}

  @ApiOperation({
    summary: 'create sector'
  })
  @Post()
  public createSector(@Body() creatSectorDto: CreateSectorDto): Promise<Sector> {
    return this.sectorService.create(creatSectorDto);
  }

  @ApiOperation({
    summary: 'get Sector'
  })
  @Get(':id')
  public getSector(@Param('id') id: string): Promise<Sector> {
    return this.sectorService.getSector({ id: Number(id) });
  }
}
