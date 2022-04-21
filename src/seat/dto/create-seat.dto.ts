import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty()
  readonly seatNumber: number
  @ApiProperty()
  readonly ticketId: number
  @ApiProperty()
  readonly rowId: number
  @ApiProperty()
  readonly isAvailable: boolean
}