import { PrismaClient, User, Prisma } from "@prisma/client";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto/create-user.dto";
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

  public async create(dto: CreateUserDto): Promise<User> {

    const user = await this.getUser( {email: dto.email} );
    if (user != null){
      throw new BadRequestException(
        'User with email: ' + dto.email + ' is already exist',
      );
    }
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


  async addUserName(userWhereUniqueInput: Prisma.UserWhereUniqueInput, dto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: userWhereUniqueInput,
      data: dto,
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