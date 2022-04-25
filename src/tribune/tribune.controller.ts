import { Body, Controller, Get, Post, Put } from "@nestjs/common";
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
  @Put()
  public addSector(sector: Sector): Promise<Tribune> {
    return this.tribuneService.addSector(sector);
  }

  @ApiOperation({
    summary: 'Return Sector by id'
  })
  @Get()
  public getSector(id: number): Promise<Sector> {
    return this.tribuneService.getSector(id);
  }

  @ApiOperation({
    summary: 'Show information about tribune'
  })
  @Get()
  public getInfo(): string {
    return this.tribuneService.getInfo();
  }
}