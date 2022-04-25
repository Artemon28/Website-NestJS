import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Row, Seat } from "@prisma/client";
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
  public getSeat(@Param('id') id: string): Promise<Row> {
    return this.rowService.getRow( { id: Number(id)});
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
