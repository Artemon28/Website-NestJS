import { Module } from "@nestjs/common";
import { PrismaModule } from "../Prisma/prisma.module";
import { PrismaService } from "../Prisma/prisma.service";
import { ChatService } from "./chat.service";
import { ChatController } from "./chat.controller";

@Module( {
  imports: [PrismaModule],
  controllers: [ChatController],
  providers: [ChatService, PrismaService  ],
})
export class ChatModule {}