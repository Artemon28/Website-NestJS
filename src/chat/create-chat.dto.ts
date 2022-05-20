import { ApiProperty } from "@nestjs/swagger";

export class CreateChatDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly value: string
}