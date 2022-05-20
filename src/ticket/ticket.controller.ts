import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { TicketService } from "./ticket.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { Roles } from "../role/role.decorator";
import { RolesGuard } from "../role/role.guard";

@ApiTags('Ticket')
@UseGuards(RolesGuard)
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  @ApiOperation({
    summary: 'Create ticket'
  })
  @ApiResponse({
    status: 201,
    description: 'The ticket have been successfully created.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Roles('AuthUser')
  @Post('/seat/:seatNumber')
  public createTicket(@Body() dto: CreateTicketDto, @Param('seatNumber') seatNumber: string): Promise<Ticket>{
    return this.ticketService.create(dto, {seatNumber: Number(seatNumber)});
  }

  @ApiOperation({
    summary: 'Return ticket'
  })
  @ApiResponse({
    status: 200,
    description: 'user information received successfully'
  })
  @ApiResponse({
    status: 404,
    description: 'no user with this id'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error'
  })
  @Roles('AuthUser')
  @Get(':id')
  public getTicket(@Param('id', ParseIntPipe) id: number): Promise<Ticket>{
    return this.ticketService.getTicket({ id });
  }

  @ApiOperation({
    summary: 'Delete this ticket'
  })
  @Roles('AuthUser')
  @Delete(':id')
  public removeTicket(@Param('id', ParseIntPipe) id: number): Promise<Ticket>{
    return this.ticketService.removeTicket({ id });
  }
}
