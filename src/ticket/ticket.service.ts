import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Ticket } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class TicketService {

  constructor() {}

  public create(dto: CreateTicketDto): Promise<Ticket>{
    throw new NotImplementedException();
  }

  public getTicket(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    throw new NotImplementedException();
  }

  public removeTicket(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    throw new NotImplementedException();
  }
}
