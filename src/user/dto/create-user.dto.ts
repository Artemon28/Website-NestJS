import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  readonly name: string | null
  @ApiProperty()
  @IsEmail()
  readonly email: string
  @ApiProperty()
  readonly id: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {

}