import { Injectable, NotImplementedException } from "@nestjs/common";
import { Sector } from "@prisma/client";
import { CreateSectorDto } from "./dto/create-sector.dto";

@Injectable()
export class SectorService {
  constructor() {
  }
  public create(dto: CreateSectorDto): Promise<Sector> {
    throw new NotImplementedException();
  }
}
