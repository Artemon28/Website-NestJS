import { Sector } from '@prisma/client'
export class CreateTribuneDto {
  readonly id: number
  readonly sectors: Sector[]
}