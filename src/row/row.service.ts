import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Row, Seat, Tribune } from "@prisma/client";
import { CreateRowDto } from "./dto/create-row.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class RowFactory {
  public async createFromCreateRowDto(createRowDto: CreateRowDto): Promise<Row> {
    const prisma = new PrismaClient({});
    return await prisma.row.create({data: createRowDto});
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


  public async addSeat(rowWhereUniqueInput: Prisma.RowWhereUniqueInput, seatWhereUniqueInput: Prisma.SeatWhereUniqueInput): Promise<Row> {
    return this.prisma.row.update({
      where: rowWhereUniqueInput,
      data: {
        seats: {
          connect: {seatNumber: seatWhereUniqueInput.seatNumber},
        },
      },
    });
  }


  public removeRow(
    rowWhereUniqueInput: Prisma.RowWhereUniqueInput,
  ): Promise<Row | null> {
    return this.prisma.row.delete({
      where: rowWhereUniqueInput,
    });
  }



  public async getSeat(
    sectorWhereUniqueInput: Prisma.SectorWhereUniqueInput,
    seatId: number,
  ): Promise<Seat> {
    const seats: Seat[] = await this.prisma.row.findUnique({
      where: sectorWhereUniqueInput,
    }).seats()
    seats.sort(function(a, b){
      return (Number(b.seatNumber < a.seatNumber)) - (Number(a.seatNumber < b.seatNumber));
    });
    return seats[seatId - 1];
  }
}
