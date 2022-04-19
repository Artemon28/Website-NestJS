import { Sector } from '@prisma/client'
import { ApiProperty } from "@nestjs/swagger";
export class CreateTribuneDto {
  @ApiProperty()
  readonly id: number
  @ApiProperty()
  readonly sectors: Sector[]
}