import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Tribune } from "@prisma/client";
import { TribuneService } from "./tribune.service";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('Tribune')
@UseGuards(RolesGuard)
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
  @Roles('admin')
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
  @Roles('admin')
  @Put(':id/sector/:sectorId')
  public addSector(@Param('id', ParseIntPipe) id: number, @Param('sectorId', ParseIntPipe) sector: number): Promise<Tribune> {
    return this.tribuneService.addSector({ id }, { id: sector });
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
  @Roles('admin')
  @Get(':id')
  public getTribune(@Param('id', ParseIntPipe) id: number): Promise<Tribune> {
    return this.tribuneService.getTribune( { id });
  }

  @Get(':id/sectorNumber/:secId')
  public getSector(@Param('id', ParseIntPipe) id: number, @Param('secId', ParseIntPipe) secId: number) {
    return this.tribuneService.getSector({id}, secId);
  }
}