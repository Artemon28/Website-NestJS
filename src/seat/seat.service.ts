import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Seat } from "@prisma/client";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class SeatFactory {
  public async createFromCreateSeatDto(createSeatDto: CreateSeatDto): Promise<Seat> {
    const prisma = new PrismaClient({})
    return await prisma.seat.create({data: {}});
  }
}

@Injectable()
export class SeatService {
  constructor(private prisma: PrismaService) {}

  public create(dto: CreateSeatDto): Promise<Seat> {
    const seatFactory = new SeatFactory();
    return seatFactory.createFromCreateSeatDto(dto);
  }

  public reserve(params: {
    where: Prisma.SeatWhereUniqueInput,
    data: Prisma.SeatUpdateInput,
  }): Promise<Seat> {
    const {where, data} = params;
    return this.prisma.seat.update({
      data,
      where,
    })
  }

  public getSeat(
    seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  ): Promise<Seat | null> {
    return this.prisma.seat.findUnique({
      where: seatWhereUniqueInput,
    });
  }


  public removeSeat(
    seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  ): Promise<Seat | null> {
    return this.prisma.seat.delete({
      where: seatWhereUniqueInput,
    });
  }
}
