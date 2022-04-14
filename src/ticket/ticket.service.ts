import { Injectable, NotImplementedException } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@Injectable()
export class TicketService {

  public buyTicket(dto: CreateTicketDto): Promise<Ticket>{
    throw new NotImplementedException();
  }

  public getSeat(id: number): Promise<Seat>{
    throw new NotImplementedException();
  }

  public removeTicket(id: number): Promise<Ticket>{
    throw new NotImplementedException();
  }
}
