import { Injectable, NotImplementedException } from "@nestjs/common";
import { Row, Seat } from "@prisma/client";
import { CreateRowDto } from "./dto/create-row.dto";

@Injectable()
export class RowService {
  constructor() {
  }
  public create(dto: CreateRowDto): Promise<Row> {
    throw new NotImplementedException();
  }

  public getSeat(id: number): Promise<Seat> {
    throw new NotImplementedException();
  }
}
