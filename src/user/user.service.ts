import { PrismaClient, User, Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "../prisma.service";


@Injectable()
export class UserFactory {
  public async createFromCreateUserDto(createUserDto: CreateUserDto): Promise<User> {
    const prisma = new PrismaClient({})
    return await prisma.user.create({
      data: createUserDto,
    })
  }
}

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  public create(dto: CreateUserDto): Promise<User> {
    const userFactory = new UserFactory();
    return userFactory.createFromCreateUserDto(dto);
  }

  public getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }


  async addUserName(userWhereUniqueInput: Prisma.UserWhereUniqueInput, dto: CreateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: userWhereUniqueInput,
      data: {
        name: dto.name,
      }
    });
  }

  public addTicket(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.user.update({
      where: userWhereUniqueInput,
      data: {
        tickets: {
          connect: {id: ticketWhereUniqueInput.id},
        },
      },
    });
  }

  public removeUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}