import { Controller, Get, Post, Put } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('processing of seats')
@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
  ) {}

  @ApiOperation({
    summary: 'Create seat'
  })
  @Post()
  public create(dto: CreateSeatDto): Promise<Seat>{
    return this.seatService.create(dto);
  }

  @ApiOperation({
    summary: 'Reserve this seat'
  })
  @Put()
  public reserveSeat(): Promise<Seat>{
    return this.seatService.reserve();
  }

  @ApiOperation({
    summary: 'Return true if this seat is available, either - false'
  })
  @Get()
  public isFree(): boolean {
    return this.seatService.isFree();
  }
}
