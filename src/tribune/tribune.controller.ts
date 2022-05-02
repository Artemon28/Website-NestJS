import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Sector, Tribune } from "@prisma/client";
import { TribuneService } from "./tribune.service";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { CreateSectorDto } from "../sector/dto/create-sector.dto";

@ApiTags('Tribune')
@Controller('/tribune')
export class TribuneController {
  constructor(
    private readonly tribuneService: TribuneService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The tribune have been successfully created.'
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
  public createTribune(@Body() creatTribuneDto: CreateTribuneDto): Promise<Tribune> {
    return this.tribuneService.create(creatTribuneDto);
  }

  @ApiOperation({
    summary: 'add Sector to the tribune'
  })
  @ApiResponse({
    status: 200,
    description: 'sector successfully added to the tribune'
  })
  @ApiResponse({
    status: 404,
    description: 'no tribune with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Put(':id/sector/:sectorId')
  public addSector(@Param('id') id: string, @Param('sectorId') sector: string): Promise<Tribune> {
    return this.tribuneService.addSector({ id: Number(id)}, { id: Number(sector) });
  }


  @ApiOperation({
    summary: 'Get Tribune'
  })
  @ApiResponse({
    status: 200,
    description: 'tribune information received successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no tribune with this number.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Get(':id')
  public getInfo(@Param('id') id: string): Promise<Tribune> {
    return this.tribuneService.getTribune( { id: Number(id) });
  }
}