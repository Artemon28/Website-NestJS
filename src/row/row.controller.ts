import { Controller, Get, Param, Post } from "@nestjs/common";
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
  public create(dto: CreateRowDto): Promise<Row>{
    return this.rowService.create(dto);
  }

  @ApiOperation({
    summary: 'Return seat object'
  })
  @Get(':id')
  public getSeat(@Param('id') id: number): Promise<Seat> {
    return this.rowService.getSeat(id);
  }

}
