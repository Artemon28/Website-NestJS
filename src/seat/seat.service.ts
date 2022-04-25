import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Seat } from "@prisma/client";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class SeatService {
  constructor() {}

  public create(dto: CreateSeatDto): Promise<Seat> {
    throw new NotImplementedException();
  }

  public reserve(params: {
    where: Prisma.SeatWhereUniqueInput,
    data: Prisma.SeatUpdateInput,
  }): Promise<Seat> {
    const {where, data} = params;
    throw new NotImplementedException();
  }

  public getSeat(
    seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  ): Promise<Seat | null> {
    throw new NotImplementedException();
  }


  public removeSeat(
    seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  ): Promise<Seat | null> {
    throw new NotImplementedException();
  }
}
