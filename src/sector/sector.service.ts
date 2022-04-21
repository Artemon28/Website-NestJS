import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, Sector } from "@prisma/client";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class SectorService {
  constructor(private prisma: PrismaService) {}

  //по идее мы указываем размер сектора и эта функция создаёт и заполняет ряды
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
