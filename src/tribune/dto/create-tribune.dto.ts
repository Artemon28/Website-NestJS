import { Sector } from '@prisma/client'
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateTribuneDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string
}