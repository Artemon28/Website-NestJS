import { Row } from "@prisma/client";
export class CreateSectorDto {
  readonly tribuneId: number
  readonly id: number
  readonly rows: Row[]
  readonly rowCnt: number
  readonly seatCnt: number
}