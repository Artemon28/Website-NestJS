import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
  ) {}

  @ApiOperation({
    summary: 'Create seat'
  })
  @Post()
  @Post()
  public create(@Body() creatSeatDto: CreateSeatDto): Promise<Seat>{
    return this.seatService.create(creatSeatDto);
  }

  @ApiOperation({
    summary: 'Reserve this seat'
  })
  @Put(':seatNumber')
  public reserveSeat(@Param('seatNumber') seatNumber: string): Promise<Seat>{
    return this.seatService.reserve({
      where: { seatNumber: Number(seatNumber) },
      data: { isAvailable: true },
    });
  }

  @ApiOperation({
    summary: 'Un Reserve seat'
  })
  @Put(':seatNumber')
  public unReserveSeat(@Param('seatNumber') seatNumber: string): Promise<Seat>{
    return this.seatService.reserve({
      where: { seatNumber: Number(seatNumber) },
      data: { isAvailable: false },
    });
  }

  @ApiOperation({
    summary: 'get seat'
  })
  @Get(':seatNumber')
  public getSeat(@Param('seatNumber') seatNumber: string): Promise<Seat> {
    return this.seatService.getSeat( { seatNumber: Number(seatNumber)});
  }

  @ApiOperation({
    summary: 'Delete seat'
  })
  @Delete(':seatNumber')
  public removeSeat(@Param('seatNumber') seatNumber: string): Promise<Seat>{
    return this.seatService.removeSeat({ seatNumber: Number(seatNumber) });
  }
}
