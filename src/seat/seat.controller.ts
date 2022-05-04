import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Seat } from "@prisma/client";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('Seat')
@UseGuards(RolesGuard)
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
  @Roles('admin')
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
  @Roles('admin')
  @Put(':seatNumber')
  public reserveSeat(@Param('seatNumber', ParseIntPipe) seatNumber: number): Promise<Seat>{
    return this.seatService.reserve({
      where: { seatNumber },
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
  @Roles('admin')
  @Put(':seatNumber')
  public unReserveSeat(@Param('seatNumber', ParseIntPipe) seatNumber: number): Promise<Seat>{
    return this.seatService.reserve({
      where: { seatNumber },
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
  @Roles('admin')
  @Get(':seatNumber')
  public getSeat(@Param('seatNumber', ParseIntPipe) seatNumber: number): Promise<Seat> {
    return this.seatService.getSeat( { seatNumber });
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
  @Roles('admin')
  @Delete(':seatNumber')
  public removeSeat(@Param('seatNumber', ParseIntPipe) seatNumber: number): Promise<Seat>{
    return this.seatService.removeSeat({ seatNumber });
  }
}
