import { Injectable, NotImplementedException } from "@nestjs/common";
import { Row, Sector } from "@prisma/client";
import { CreateSectorDto } from "./dto/create-sector.dto";

@Injectable()
export class SectorService {
  constructor() {
  }

  //по идее мы указываем размер сектора и эта функция создаёт и заполняет ряды
  public create(dto: CreateSectorDto): Promise<Sector> {
    throw new NotImplementedException();
  }

  public getRow(id: number): Promise<Row> {
    throw new NotImplementedException();
  }
}
