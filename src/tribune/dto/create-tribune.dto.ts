import { Sector } from '@prisma/client'
export class CreateTicketDto {
  readonly id: number
  readonly sectors: Sector[]
}