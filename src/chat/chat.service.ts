import { PrismaService } from "../Prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { ChatHistory } from "@prisma/client";
import { CreateChatDto } from "./create-chat.dto";

@Injectable()
export class ChatService {

  constructor(private prisma: PrismaService) {}

  public async create(dto: CreateChatDto): Promise<ChatHistory> {
    const recQty = await this.prisma.chatHistory.count();
    if (recQty > 50){
      const latestRec = await this.prisma.chatHistory.findFirst({
        where: {
          id: {
            gt: 0,
          },
        },
        orderBy: {
          id: 'asc',
        },
      });

      this.prisma.chatHistory.delete({
        where: {id: Number(latestRec.id)}
      })
    }
    return this.prisma.chatHistory.create({ data: dto });
  }

  public getAllRecords(): Promise<ChatHistory[]> {
    return this.prisma.chatHistory.findMany({});
  }
}