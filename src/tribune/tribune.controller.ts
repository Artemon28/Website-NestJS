import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Sector, Tribune } from "@prisma/client";
import { TribuneService } from "./tribune.service";
import { CreateTribuneDto } from "./dto/create-tribune.dto";

@Controller('tribune')
export class TribuneController {
  constructor(
    private readonly tribuneService: TribuneService,
  ) {}

  @ApiOperation({
    summary: 'Create tribune'
  })
  @ApiResponse({
    status: 201,
    description: 'The tribune have been successfully created.'
  })
  @Post()
  public createTribune(@Body() creatTribuneDto: CreateTribuneDto): Promise<Tribune> {
    return this.tribuneService.create(creatTribuneDto);
  }

  @Put()
  public addSector(sector: Sector): Promise<Tribune> {
    return this.tribuneService.addSector(sector);
  }

  @Get()
  public getSector(id: number): Promise<Sector> {
    return this.tribuneService.getSector(id);
  }

  @Get()
  public getInfo(): string {
    return this.tribuneService.getInfo();
  }
}
