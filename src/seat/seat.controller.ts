import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
  ) {}

  @ApiOperation({
    summary: 'Create seat'
  })
  @ApiResponse({
    status: 201,
    description: 'The seat have been successfully created.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Post()
  public create(@Body() creatSeatDto: CreateSeatDto): Promise<Seat>{
    return this.seatService.create(creatSeatDto);
  }

  @ApiOperation({
    summary: 'Reserve this seat'
  })
  @ApiResponse({
    status: 200,
    description: 'the seat was successfully reserved'
  })
  @ApiResponse({
    status: 404,
    description: 'no seat with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
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
  @ApiResponse({
    status: 200,
    description: 'the seat was successfully unreserved'
  })
  @ApiResponse({
    status: 404,
    description: 'no seat with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
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
  @ApiResponse({
    status: 200,
    description: 'seat information received successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no seat with this number.'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Get(':seatNumber')
  public getSeat(@Param('seatNumber') seatNumber: string): Promise<Seat> {
    return this.seatService.getSeat( { seatNumber: Number(seatNumber)});
  }

  @ApiOperation({
    summary: 'Delete seat'
  })
  @ApiResponse({
    status: 200,
    description: 'seat successfully removed'
  })
  @ApiResponse({
    status: 404,
    description: 'no seat with this id number'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Delete(':seatNumber')
  public removeSeat(@Param('seatNumber') seatNumber: string): Promise<Seat>{
    return this.seatService.removeSeat({ seatNumber: Number(seatNumber) });
  }
}
