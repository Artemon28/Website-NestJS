import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { TicketService } from "./ticket.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  @ApiOperation({
    summary: 'Create ticket'
  })
  @Post()
  public createTicket(dto: CreateTicketDto): Promise<Ticket>{
    return this.ticketService.create(dto);
  }

  @ApiOperation({
    summary: 'Return ticket'
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
