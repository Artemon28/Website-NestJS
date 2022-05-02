import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, PrismaClient, Sector, Tribune } from "@prisma/client";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { PrismaService } from "../prisma.service";
import { CreateTribuneDto } from "../tribune/dto/create-tribune.dto";
import { TribuneFactory } from "../tribune/tribune.service";

@Injectable()
export class SectorFactory {
  public async createFromCreateSectorDto(createSectorDto: CreateSectorDto): Promise<Sector> {
    const prisma = new PrismaClient({})
    return await prisma.sector.create({
      data: {
        tribuneid: createSectorDto.tribuneId,
        id: createSectorDto.tribuneId,
      },
    });
  }
}

@Injectable()
export class SectorService {
  constructor(private prisma: PrismaService) {}

  public create(dto: CreateSectorDto): Promise<Sector> {
    const sectorFactory = new SectorFactory();
    return sectorFactory.createFromCreateSectorDto(dto);
  }

  public getSector(
    sectorWhereUniqueInput: Prisma.SectorWhereUniqueInput,
  ): Promise<Sector | null> {
    return this.prisma.sector.findUnique({
      where: sectorWhereUniqueInput,
    });
  }
}
