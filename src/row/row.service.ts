import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Row } from "@prisma/client";
import { CreateRowDto } from "./dto/create-row.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class RowFactory {
  public async createFromCreateRowDto(createRowDto: CreateRowDto): Promise<Row> {
    const prisma = new PrismaClient({})
    return await prisma.row.create({
      data: {
        id: createRowDto.id,
        rowNumber: createRowDto.rowNumber,
        sectorid: createRowDto.sectorId,
      },
    });
  }
}

@Injectable()
export class RowService {

  constructor(private prisma: PrismaService) {}

  public create(dto: CreateRowDto): Promise<Row> {
    const rowFactory = new RowFactory();
    return rowFactory.createFromCreateRowDto(dto);
  }


  public getRow(
    rowWhereUniqueInput: Prisma.RowWhereUniqueInput,
  ): Promise<Row | null> {
    return this.prisma.row.findUnique({
      where: rowWhereUniqueInput,
    });
  }


  public removeRow(
    rowWhereUniqueInput: Prisma.RowWhereUniqueInput,
  ): Promise<Row | null> {
    return this.prisma.row.delete({
      where: rowWhereUniqueInput,
    });
  }
}
