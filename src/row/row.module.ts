import { Module } from "@nestjs/common";
import { RowService } from './row.service';
import { RowController } from "./row.controller";
import { PrismaModule } from "../Prisma/prisma.module";
import { PrismaService } from "../prisma.service";

@Module({
  imports: [],
  providers: [RowService, PrismaService],
  controllers: [RowController]
})
export class RowModule {}
