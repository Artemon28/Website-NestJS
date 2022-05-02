import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Sector } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Sector')
@Controller('sector')
export class SectorController {
  constructor(
    private readonly sectorService: SectorService,
  ) {}

  @ApiOperation({
    summary: 'create sector'
  })
  @ApiResponse({
    status: 201,
    description: 'The sector have been successfully created.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Post()
  public createSector(@Body() creatSectorDto: CreateSectorDto): Promise<Sector> {
    return this.sectorService.create(creatSectorDto);
  }

  @ApiOperation({
    summary: 'get Sector'
  })
  @ApiResponse({
    status: 200,
    description: 'tribune information received successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no sector with this number.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Get(':id')
  public getSector(@Param('id') id: string): Promise<Sector> {
    return this.sectorService.getSector({ id: Number(id) });
  }
}
