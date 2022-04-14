import { Controller, Post } from "@nestjs/common";
import { Row } from "@prisma/client";
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
}
