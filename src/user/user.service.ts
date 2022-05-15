import { Injectable, NotImplementedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient, Ticket, User, Prisma } from "@prisma/client";
import { PrismaService } from "../Prisma/prisma.service";



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
    throw new NotImplementedException();
  }

  // async addUserName(id: { id: string }, userDto: { creatUserDto: CreateUserDto }): Promise<User> | null {
  //   return await this.prisma.user.update({
  //     data: {
  //       ...userDto,
  //     },
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  public buyTicket(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ticket: Ticket,
  ): Promise<User | null> {
    throw new NotImplementedException();
  }

  public removeTicket(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ticket: Ticket,
  ): Promise<User | null> {
    throw new NotImplementedException();
  }

  public removeUser(id: string): Promise<User> {
    throw new NotImplementedException();
  }
}