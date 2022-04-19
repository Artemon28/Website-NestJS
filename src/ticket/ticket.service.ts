import { Injectable, NotImplementedException } from "@nestjs/common";
import { Seat, Ticket } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@Injectable()
export class TicketService {

  public create(dto: CreateTicketDto): Promise<Ticket>{
    throw new NotImplementedException();
  }

  public getSeat(): Promise<Seat>{
    throw new NotImplementedException();
  }

  public removeTicket(): Promise<Ticket>{
    throw new NotImplementedException();
  }
}
