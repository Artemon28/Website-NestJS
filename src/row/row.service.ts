import { Injectable, NotImplementedException } from "@nestjs/common";
import { Row } from "@prisma/client";
import { CreateRowDto } from "./dto/create-row.dto";

@Injectable()
export class RowService {
  constructor() {
  }
  public create(dto: CreateRowDto): Promise<Row> {
    throw new NotImplementedException();
  }
}
