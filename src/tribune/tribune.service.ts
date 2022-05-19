import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Sector, Tribune } from "@prisma/client";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { PrismaService } from "../Prisma/prisma.service";

@Injectable()
export class TribuneFactory {
  public async createFromCreateTribuneDto(createTribuneDto: CreateTribuneDto): Promise<Tribune> {
    const prisma = new PrismaClient({})
    return await prisma.tribune.create({
      data: createTribuneDto,
    });
  }
}

@Injectable()
export class TribuneService {

  constructor(private prisma: PrismaService) {}

  public create(dto: CreateTribuneDto): Promise<Tribune> {
    const tribuneFactory = new TribuneFactory();
    return tribuneFactory.createFromCreateTribuneDto(dto);
  }

  public async addSector(tribuneWhereUniqueInput: Prisma.TribuneWhereUniqueInput, sectorWhereUniqueInput: Prisma.SectorWhereUniqueInput): Promise<Tribune> {
    return this.prisma.tribune.update({
      where: tribuneWhereUniqueInput,
      data: {
        sectors: {
          connect: {id: sectorWhereUniqueInput.id},
        },
      },
    });
  }


  public getTribune(
    tribuneWhereUniqueInput: Prisma.TribuneWhereUniqueInput,
  ): Promise<Tribune | null> {
      return this.prisma.tribune.findUnique({
        where: tribuneWhereUniqueInput,
      });
    }

  public async getSector(
    tribuneWhereUniqueInput: Prisma.TribuneWhereUniqueInput,
    secId: number,
  ): Promise<Sector> {
    const sectors: Sector[] = await this.prisma.tribune.findUnique({
      where: tribuneWhereUniqueInput,
    }).sectors()
    return sectors[secId - 1];
  }
}
