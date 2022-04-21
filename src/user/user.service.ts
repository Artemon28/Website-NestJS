import { Injectable, NotImplementedException, Param, Patch } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient, Ticket, User, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";


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

  async addUserName(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  //здесь мы создадим билет, отправим в него все нужные нам данные, он зарезервирует место
  public buyTicket(tribuneId: number, sectorId: number, rowId: number, seatId: number): Promise<User> {
    throw new NotImplementedException();
  }

  public removeTicket(ticketId: number): Promise<Ticket> {
    throw new NotImplementedException();
  }

  public removeUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}