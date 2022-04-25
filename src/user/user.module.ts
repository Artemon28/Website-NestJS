import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModule } from "../Prisma/prisma.module";

@Module( {
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}