import { Row } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSectorDto {
  @ApiProperty()
  readonly rowCnt: number
  @ApiProperty()
  readonly seatCnt: number
}