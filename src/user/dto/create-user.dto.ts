import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  readonly name: string | null
  @ApiProperty()
  readonly email: string
  @ApiProperty()
  readonly id: number
  @ApiProperty()
  readonly password: string
}