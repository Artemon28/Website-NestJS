import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Row, Sector } from "@prisma/client";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { PrismaService } from "../prisma.service";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class SectorService {
  constructor(private prisma: PrismaService) {}

  public create(dto: CreateSectorDto): Promise<Sector> {
    throw new NotImplementedException();
  }

  public getSector(
    sectorWhereUniqueInput: Prisma.SectorWhereUniqueInput,
  ): Promise<Sector | null> {
    return this.prisma.sector.findUnique({
      where: sectorWhereUniqueInput,
    });
  }
}
