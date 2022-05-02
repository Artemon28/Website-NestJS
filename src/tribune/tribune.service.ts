import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient, Sector, Tribune } from "@prisma/client";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { PrismaService } from "../Prisma/prisma.service";
import { CreateSectorDto } from "../sector/dto/create-sector.dto";

@Injectable()
export class TribuneFactory {
  public async createFromCreateTribuneDto(createTribuneDto: CreateTribuneDto): Promise<Tribune> {
    const prisma = new PrismaClient({})
    return await prisma.tribune.create({
      data: {
        id: createTribuneDto.id,
        description: createTribuneDto.description,
      },
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
    const res = await this.prisma.tribune.findFirst({
      where: tribuneWhereUniqueInput,
      select: {
        sectors: true,
      },
    })
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
}
