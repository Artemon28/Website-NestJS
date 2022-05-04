import { ApiProperty } from "@nestjs/swagger";

export class CreateRowDto {
  @ApiProperty()
  readonly rowNumber: number
}