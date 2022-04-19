import { ApiProperty } from "@nestjs/swagger";

export class CreateRowDto {
  @ApiProperty()
  readonly id: number
  @ApiProperty()
  readonly rowNumber: number
  @ApiProperty()
  readonly sectorId: number
}