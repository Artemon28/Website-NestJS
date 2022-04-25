import { Module } from "@nestjs/common";
import { RowService } from './row.service';
import { RowController } from "./row.controller";
import { PrismaModule } from "../Prisma/prisma.module";

@Module({
  imports: [],
  providers: [RowService],
  controllers: [RowController]
})
export class RowModule {}
