import { Controller, Delete, Get, Post } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { UserService } from "../user/user.service";
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  @Post()
  public buyTicket(dto: CreateTicketDto): Promise<Ticket>{
    return this.ticketService.buyTicket(dto);
  }

  @Get()
  public getSeat(id: number): Promise<Seat>{
    return this.ticketService.getSeat(id);
  }

  @Delete()
  public removeTicket(id: number): Promise<Ticket>{
    return this.ticketService.removeTicket(id);
  }

}
