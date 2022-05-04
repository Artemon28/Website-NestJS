import { Seat } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
  @ApiProperty()
  @IsString()
  readonly name: string
  @ApiProperty()
  @IsEmail()
  readonly email: string
  @ApiProperty()
  @IsNumber()
  readonly cost: number
}