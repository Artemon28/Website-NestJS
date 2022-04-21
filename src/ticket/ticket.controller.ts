import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { TicketService } from "./ticket.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@ApiTags('user and ticket')
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  // @ApiOperation({
  //   summary: 'Create ticket'
  // })
  // @Post()
  // public createTicket(@Body() creatTicketDto: CreateTicketDto, seatNumber: string): Promise<Ticket>{
  //   return this.ticketService.create(creatTicketDto, { id: Number(seatNumber) });
  // }

  @ApiOperation({
    summary: 'Return Seat'
  })
  @Get(':id')
  public getTicket(@Param('id') id: string): Promise<Ticket>{
    return this.ticketService.getTicket({ id: Number(id) });
  }

  @ApiOperation({
    summary: 'Delete this ticket'
  })
  @Delete(':id')
  public removeTicket(@Param('id') id: string): Promise<Ticket>{
    return this.ticketService.removeTicket({ id: Number(id) });
  }
}
