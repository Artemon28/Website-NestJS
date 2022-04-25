import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiDefaultResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Sector, Tribune } from "@prisma/client";
import { TribuneService } from "./tribune.service";
import { CreateTribuneDto } from "./dto/create-tribune.dto";

@ApiTags('Tribune')
@Controller('/tribune')
export class TribuneController {
  constructor(
    private readonly tribuneService: TribuneService,
  ) {}

  @ApiOperation({
    summary: 'Creating tribune'
  })
  @Post()
  public createTribune(@Body() creatTribuneDto: CreateTribuneDto): Promise<Tribune> {
    return this.tribuneService.create(creatTribuneDto);
  }

  @ApiOperation({
    summary: 'add Sector to the tribune'
  })
  @Put(':id')
  public addSector(@Param('id') id: string, sector: Sector): Promise<Tribune> {
    return this.tribuneService.addSector({
      where: { id: Number(id) },
      sector,
    });
  }


  @ApiOperation({
    summary: 'Get Tribune'
  })
  @Get(':id')
  public getInfo(@Param('id') id: string): Promise<Tribune> {
    return this.tribuneService.getTribune( { id: Number(id) });
  }
}