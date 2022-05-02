import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { TicketService } from "./ticket.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
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
  @Post()
  public createTicket(dto: CreateTicketDto): Promise<Ticket>{
    return this.ticketService.create(dto);
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
