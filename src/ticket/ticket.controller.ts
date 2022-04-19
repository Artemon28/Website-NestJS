import { Controller, Delete, Get, Post } from "@nestjs/common";
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

  @ApiOperation({
    summary: 'Create ticket'
  })
  @Post()
  public createTicket(dto: CreateTicketDto): Promise<Ticket>{
    return this.ticketService.create(dto);
  }

  @ApiOperation({
    summary: 'Return Seat var'
  })
  @Get()
  public getSeat(): Promise<Seat>{
    return this.ticketService.getSeat();
  }

  @ApiOperation({
    summary: 'Delete this ticket'
  })
  @Delete()
  public removeTicket(): Promise<Ticket>{
    return this.ticketService.removeTicket();
  }

}
