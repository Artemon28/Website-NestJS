import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Row, Seat } from "@prisma/client";
import { RowService } from "./row.service";
import { CreateRowDto } from "./dto/create-row.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { SeatService } from "../seat/seat.service";
import { CreateSeatDto } from "../seat/dto/create-seat.dto";

@ApiTags('processing of seats')
@Controller('row')
export class RowController {
  constructor(
    private readonly rowService: RowService,
  ) {}

  @ApiOperation({
    summary: 'Create row'
  })
  @Post()
  public create(@Body() createRowDto: CreateRowDto): Promise<Row>{
    return this.rowService.create(createRowDto);
  }

  // @ApiOperation({
  //   summary: 'Return seat object'
  // })
  // @Get(':id')
  // public getSeat(@Param('id') id: number): Promise<Seat> {
  //   return this.rowService.getSeat(id);
  // }


  @ApiOperation({
    summary: 'get row'
  })
  @Get(':id')
  public getSeat(@Param('id') id: string): Promise<Row> {
    return this.rowService.getRow( { id: Number(id)});
  }

  @ApiOperation({
    summary: 'Delete row'
  })
  @Delete(':id')
  public removeSeat(@Param('id') id: string): Promise<Row>{
    return this.rowService.removeRow({ id: Number(id) });
  }
}
