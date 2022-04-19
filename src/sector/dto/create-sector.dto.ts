import { Row } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSectorDto {
  @ApiProperty()
  readonly tribuneId: number
  @ApiProperty()
  readonly id: number
  @ApiProperty()
  readonly rows: Row[]
  @ApiProperty()
  readonly rowCnt: number
  @ApiProperty()
  readonly seatCnt: number
}