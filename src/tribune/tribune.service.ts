import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Sector, Tribune } from "@prisma/client";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class TribuneService {
  constructor() {}

  public create(dto: CreateTribuneDto): Promise<Tribune> {
    throw new NotImplementedException();
  }

  public addSector(params: {
    where: Prisma.TribuneWhereUniqueInput;
    sector: Sector
  }): Promise<Tribune> {
    const { where, sector } = params;
    throw new NotImplementedException();
  }

  public getTribune(
    tribuneWhereUniqueInput: Prisma.TribuneWhereUniqueInput,
  ): Promise<Tribune | null> {
    throw new NotImplementedException();
  }
}
