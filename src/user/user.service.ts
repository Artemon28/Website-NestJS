import { Injectable, NotImplementedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaClient, Ticket, User } from "@prisma/client";


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
  constructor() {
  }

  public create(dto: CreateUserDto): Promise<User> {
    const userFactory = new UserFactory();
    return userFactory.createFromCreateUserDto(dto);
  }

  public getUserName(id: number): string {
    throw new NotImplementedException();
  }

  public addUserName(id: number, name: string): Promise<User> {
    throw new NotImplementedException();
  }

  //здесь мы создадим билет, отправим в него все нужные нам данные, он зарезервирует место
  public buyTicket(tribuneId: number, sectorId: number, rowId: number, seatId: number): Promise<Ticket> {
    throw new NotImplementedException();
  }

  public removeTicket(ticketId: number): Promise<Ticket> {
    throw new NotImplementedException();
  }

  public removeUser(id: number): Promise<User> {
    throw new NotImplementedException();
  }
}