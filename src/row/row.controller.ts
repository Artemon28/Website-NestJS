import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Row, Seat } from "@prisma/client";
import { RowService } from "./row.service";
import { CreateRowDto } from "./dto/create-row.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Row')
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
