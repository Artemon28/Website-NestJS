import { Injectable, NotImplementedException } from "@nestjs/common";
import { Sector, Tribune } from "@prisma/client";
import { CreateTribuneDto } from "./dto/create-tribune.dto";

@Injectable()
export class TribuneService {
  constructor() {
  }

  public create(dto: CreateTribuneDto): Promise<Tribune> {
    throw new NotImplementedException();
  }

  public addSector(sector: Sector): Promise<Tribune> {
    throw new NotImplementedException();
  }

  public getSector(id: number): Promise<Sector> {
    throw new NotImplementedException();
  }

  public getInfo(): string {
    throw new NotImplementedException();
  }
}
