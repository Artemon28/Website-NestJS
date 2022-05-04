import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Row } from "@prisma/client";
import { RowService } from "./row.service";
import { CreateRowDto } from "./dto/create-row.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('Row')
@UseGuards(RolesGuard)
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
  @Roles('admin')
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
  @Roles('admin')
  @Get(':id')
  public getRow(@Param('id', ParseIntPipe) id: number): Promise<Row> {
    return this.rowService.getRow( { id });
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
  @Put(':id/sector/:seatId')
  public addSector(@Param('id', ParseIntPipe) id: number, @Param('seatId', ParseIntPipe) seatId: number): Promise<Row> {
    return this.rowService.addSeat({ id }, { seatNumber: seatId });
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
  @Roles('admin')
  @Delete(':id')
  public removeSeat(@Param('id', ParseIntPipe) id: number): Promise<Row>{
    return this.rowService.removeRow({ id });
  }
}
