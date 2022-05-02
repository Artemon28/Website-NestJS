import { Injectable, NotImplementedException } from "@nestjs/common";
import { Prisma, PrismaClient, Sector, Tribune, User } from "@prisma/client";
import { Prisma, Sector, Tribune } from "@prisma/client";
import { CreateTribuneDto } from "./dto/create-tribune.dto";
import { PrismaService } from "../Prisma/prisma.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { PrismaService } from "../prisma.service";

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

  public addSector(params: {
    where: Prisma.TribuneWhereUniqueInput;
    sectorWhereUniqueInput: Prisma.SectorWhereUniqueInput
  }): Promise<Tribune> {
    const { where, sectorWhereUniqueInput } = params;
    return this.prisma.tribune.update({
      data: this.prisma.sector.findUnique({ where: sectorWhereUniqueInput }),
      where,
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
