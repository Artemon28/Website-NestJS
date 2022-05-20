import { ChatService } from "./chat.service";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateChatDto } from "./create-chat.dto";
import { ChatHistory } from "@prisma/client";

@ApiTags('Chat')
@Controller('/chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @Post()
  public createChatRec(@Body() creatChatDto: CreateChatDto): Promise<ChatHistory> {
    return this.chatService.create(creatChatDto);
  }


  @Get(':id')
  public returnAllRec(@Param('id') id: string): Promise<ChatHistory[]> {
    return this.chatService.getAllRecords();
  }

  @Delete()
  public eraseLatset(): Promise<ChatHistory>{
    return this.chatService.delLatest();
  }
}