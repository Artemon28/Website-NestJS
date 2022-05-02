import { Module } from '@nestjs/common';
import { TicketController } from "./ticket.controller";
import { TicketService } from "./ticket.service";
import { PrismaService } from "../prisma.service";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
    controllers: [TicketController],
    providers: [TicketService, PrismaService],
    imports: [],
})
export class TicketModule {}
