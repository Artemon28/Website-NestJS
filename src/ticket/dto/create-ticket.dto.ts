import { Seat } from "@prisma/client";

export class CreateTicketDto {
  readonly name: string
  readonly email: string
  readonly id: number
  readonly cost: number
  readonly userid: number
  readonly seat: Seat
}