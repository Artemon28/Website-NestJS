import { Injectable, NotImplementedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient, Ticket, User, Prisma } from "@prisma/client";
import { PrismaService } from "../Prisma/prisma.service";


@Injectable()
export class UserFactory {
  public async createFromCreateUserDto(createUserDto: CreateUserDto): Promise<User> {
    const prisma = new PrismaClient({})
    if (createUserDto.name == null){
      return await prisma.user.create({
        data: {
          id: createUserDto.id,
          email: createUserDto.email,
          password: createUserDto.password,
        },
      });
    } else {
      return await prisma.user.create({
        data: {
          id: createUserDto.id,
          name: createUserDto.name,
          email: createUserDto.email,
          password: createUserDto.password,
        },
      });
    }
  }
}

@Injectable()
export class UserService {

  constructor() {}

  public create(dto: CreateUserDto): Promise<User> {
    const userFactory = new UserFactory();
    return userFactory.createFromCreateUserDto(dto);
  }

  public getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    throw new NotImplementedException();
  }

  public addUserName(userWhereUniqueInput: Prisma.UserWhereUniqueInput, name: string): Promise<User> {
    throw new NotImplementedException();
  }

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

  public removeUser(id: number): Promise<User> {
    throw new NotImplementedException();
  }
}