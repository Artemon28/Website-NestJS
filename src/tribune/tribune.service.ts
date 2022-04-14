import { Injectable, NotImplementedException } from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { User } from "@prisma/client";
import { UserFactory } from "../user/user.service";

@Injectable()
export class TribuneService {
  constructor() {
  }
  public create(dto: CreateUserDto): Promise<User> {
    throw new NotImplementedException();
  }

  public getUserName(id: number): string {
    throw new NotImplementedException();
  }
}
