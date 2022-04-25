import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Row, Seat } from "@prisma/client";
import { CreateRowDto } from "./dto/create-row.dto";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class RowService {
  constructor() {}

  public create(dto: CreateRowDto): Promise<Row> {
    throw new NotImplementedException();
  }

  public getRow(
    rowWhereUniqueInput: Prisma.RowWhereUniqueInput,
  ): Promise<Row | null> {
    throw new NotImplementedException();
  }


  public removeRow(
    rowWhereUniqueInput: Prisma.RowWhereUniqueInput,
  ): Promise<Row | null> {
    throw new NotImplementedException();
  }
}
