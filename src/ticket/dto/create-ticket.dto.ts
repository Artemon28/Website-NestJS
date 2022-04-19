import { Seat } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly email: string
  @ApiProperty()
  readonly id: number
  @ApiProperty()
  readonly cost: number
  @ApiProperty()
  readonly userid: number
  @ApiProperty()
  readonly seat: Seat
}