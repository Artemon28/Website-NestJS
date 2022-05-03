import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Row } from "@prisma/client";
import { RowService } from "./row.service";
import { CreateRowDto } from "./dto/create-row.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Row')
@Controller('row')
export class RowController {
  constructor(
    private readonly rowService: RowService,
  ) {}

  @ApiOperation({
    summary: 'Create row'
  })
  @ApiResponse({
    status: 201,
    description: 'The row have been successfully created.'
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
  public create(@Body() createRowDto: CreateRowDto): Promise<Row>{
    return this.rowService.create(createRowDto);
  }

  @ApiOperation({
    summary: 'get row'
  })
  @ApiResponse({
    status: 200,
    description: 'row information received successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no row with this number.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Get(':id')
  public getRow(@Param('id') id: string): Promise<Row> {
    return this.rowService.getRow( { id: Number(id)});
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
  @Put(':id/sector/:seatId')
  public addSector(@Param('id') id: string, @Param('seatId') seatId: string): Promise<Row> {
    return this.rowService.addSeat({ id: Number(id)}, { seatNumber: Number(seatId) });
  }


  @ApiOperation({
    summary: 'Delete row'
  })
  @ApiResponse({
    status: 200,
    description: 'row successfully removed'
  })
  @ApiResponse({
    status: 404,
    description: 'no row with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Delete(':id')
  public removeSeat(@Param('id') id: string): Promise<Row>{
    return this.rowService.removeRow({ id: Number(id) });
  }
}
