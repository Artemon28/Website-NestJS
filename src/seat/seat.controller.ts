import { Controller, Get, Post, Put } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";

@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
  ) {}

  @Post()
  public create(dto: CreateSeatDto): Promise<Seat>{
    return this.seatService.create(dto);
  }

  @Put()
  public reserveSeat(): Promise<Seat>{
    return this.seatService.reserve();
  }

  @Get()
  public isFree(): boolean {
    return this.seatService.isFree();
  }
}
