import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from "./ticket.controller";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
    imports: [],
    controllers: [TicketController],
    providers: [TicketService]
})
export class TicketModule {}
