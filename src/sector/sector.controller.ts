import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Row, Sector } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

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
    summary: 'get Row object by id'
  })
  @Get(':id')
  public getRow(@Param('id') id: number): Promise<Row> {
    return this.sectorService.getRow(id);
  }
}
