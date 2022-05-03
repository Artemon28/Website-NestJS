import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Sector, Tribune } from "@prisma/client";
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
    summary: 'add Row to the sector'
  })
  @ApiResponse({
    status: 200,
    description: 'row successfully added to the sector'
  })
  @ApiResponse({
    status: 404,
    description: 'no sector with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Put(':id/row/:rowId')
  public addRow(@Param('id') id: string, @Param('rowId') row: string): Promise<Sector> {
    return this.sectorService.addRow({ id: Number(id)}, { id: Number(row) });
  }


  @ApiOperation({
    summary: 'get Sector'
  })
  @ApiResponse({
    status: 200,
    description: 'sector was returned successfully'
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


  @ApiOperation({
    summary: 'delete Sector'
  })
  @ApiResponse({
    status: 200,
    description: 'sector was deleted successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no sector with this number.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Delete(':id')
  public deleteSector(@Param('id') id: string): Promise<Sector> {
    return this.sectorService.deleteSector({ id: Number(id) });
  }
}
