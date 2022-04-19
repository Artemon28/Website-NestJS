import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { Row, Sector, Tribune } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('sector')
export class SectorController {
  constructor(
    private readonly sectorService: SectorService,
  ) {}

  @ApiOperation({
    summary: 'Create sector'
  })
  @ApiResponse({
    status: 201,
    description: 'The sector have been successfully created.'
  })
  @Post()
  public createSector(@Body() creatSectorDto: CreateSectorDto): Promise<Sector> {
    return this.sectorService.create(creatSectorDto);
  }

  @Get()
  public getRow(id: number): Promise<Row> {
    return this.sectorService.getRow(id);
  }
}
