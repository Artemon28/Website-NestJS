import { Injectable, NotImplementedException } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { CreateSeatDto } from "./dto/create-seat.dto";

@Injectable()
export class SeatService {
  constructor() {
  }
  public create(dto: CreateSeatDto): Promise<Seat> {
    throw new NotImplementedException();
  }

  public reserve(): Promise<Seat> {
    throw new NotImplementedException();
  }

  public isFree(): boolean {
    throw new NotImplementedException();
  }
}
