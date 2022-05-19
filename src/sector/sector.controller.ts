import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Sector, Tribune } from "@prisma/client";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('Sector')
@UseGuards(RolesGuard)
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
  @Roles('admin')
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
  @Roles('admin')
  @Put(':id/row/:rowId')
  public addRow(@Param('id', ParseIntPipe) id: number, @Param('rowId', ParseIntPipe) row: number): Promise<Sector> {
    return this.sectorService.addRow({ id }, { id: row });
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
  @Roles('admin')
  @Get(':id')
  public getSector(@Param('id', ParseIntPipe) id: number): Promise<Sector> {
    return this.sectorService.getSector({ id });
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
  @Roles('admin')
  @Delete(':id')
  public deleteSector(@Param('id', ParseIntPipe) id: number): Promise<Sector> {
    return this.sectorService.deleteSector({ id });
  }


  @Get(':id/rowNumber/:rowId')
  public getRow(@Param('id', ParseIntPipe) id: number, @Param('rowId', ParseIntPipe) rowId: number) {
    return this.sectorService.getRow({id}, rowId);
  }
}
