import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, PrismaClient, Ticket } from "@prisma/client";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { PrismaService } from "../prisma.service";


@Injectable()
export class TicketFactory {
  public async createFromCreateTicketDto(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const prisma = new PrismaClient({})
    return await prisma.ticket.create({
      data: {
        id: createTicketDto.id,
        name: createTicketDto.name,
        email: createTicketDto.email,
        cost: createTicketDto.cost,
        userid: createTicketDto.userid,
      },
    });
  }
}

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  // public create(
  //   dto: CreateTicketDto,
  //   seatWhereUniqueInput: Prisma.SeatWhereUniqueInput,
  // ): Promise<Ticket>{
  //   const ticketFactory = new TicketFactory();
  //   ticketFactory.createFromCreateTicketDto(dto);
  //   return this.addSeat({ id: Number(dto.id) }, seatWhereUniqueInput);
  // }

  // private addSeat(ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput, seatWhereUniqueInput: Prisma.SeatWhereUniqueInput): Promise<Ticket>{
  //   this.prisma.ticket.update({
  //     where: ticketWhereUniqueInput,
  //     data: this.prisma.seat.findUnique({ where: seatWhereUniqueInput }), //??????
  //   })
  //   throw new NotImplementedException();
  // }


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
