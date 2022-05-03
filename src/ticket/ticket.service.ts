import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Ticket, User } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { PrismaService } from "../prisma.service";



@Injectable()
export class TicketFactory {
  public async createFromCreateTicketDto(createTicketDto: CreateTicketDto, seatWhereUniqueInput: Prisma.SeatWhereUniqueInput): Promise<Ticket> {
    const prisma = new PrismaClient({})
    return await prisma.ticket.create({
      data: {
        name: createTicketDto.name,
        cost: createTicketDto.cost,
        email: createTicketDto.email,
        seat: {
          connect: { seatNumber: seatWhereUniqueInput.seatNumber },
        },
      }
    });
  }
}

@Injectable()
export class TicketService {

  constructor(private prisma: PrismaService) {}

  public create(
    dto: CreateTicketDto,
    seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  ): Promise<Ticket>{
    const ticketFactory = new TicketFactory();
    return ticketFactory.createFromCreateTicketDto(dto, seatWhereUniqueInput);
  }


  public getTicket(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: ticketWhereUniqueInput,
    });
  }

  public removeTicket(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    return this.prisma.ticket.delete({
      where: ticketWhereUniqueInput,
    });
  }
}
