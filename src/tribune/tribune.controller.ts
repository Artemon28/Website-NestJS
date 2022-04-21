import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Sector, Tribune, User } from "@prisma/client";
import { TribuneService } from "./tribune.service";
import { CreateTribuneDto } from "./dto/create-tribune.dto";

@ApiTags('processing of seats')
@Controller('tribune')
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
  @Put(':id/:sectorId')
  public addSector(@Param('id') id: string, @Param('sectorId') sectorId: number): Promise<Tribune> {
    return this.tribuneService.addSector({
      where: { id: Number(id) },
      sectorWhereUniqueInput: { id: Number(sectorId) },
    });
  }

  @ApiOperation({
    summary: 'Return Sector by id'
  })
  @Get()
  public getSector(id: number): Promise<Sector> {
    return this.tribuneService.getSector(id);
  }

  @ApiOperation({
    summary: 'Get Tribune'
  })
  @Get(':id')
  public getInfo(@Param('id') id: string): Promise<Tribune> {
    return this.tribuneService.getTribune( { id: Number(id) });
  }
}
