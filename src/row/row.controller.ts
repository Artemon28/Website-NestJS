import { Controller, Get, Post } from "@nestjs/common";
import { Row, Seat } from "@prisma/client";
import { RowService } from "./row.service";
import { CreateRowDto } from "./dto/create-row.dto";

@Controller('row')
export class RowController {
  constructor(
    private readonly rowService: RowService,
  ) {}

  @Post()
  public create(dto: CreateRowDto): Promise<Row>{
    return this.rowService.create(dto);
  }

  @Get()
  public getSeat(id: number): Promise<Seat> {
    return this.rowService.getSeat(id);
  }

}
