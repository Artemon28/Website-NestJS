import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  readonly name: string | null
  readonly email: string
  readonly id: number
}