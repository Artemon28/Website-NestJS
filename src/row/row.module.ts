import { Module } from "@nestjs/common";
import { RowService } from './row.service';
import { RowController } from "./row.controller";

@Module({
  imports: [],
  providers: [RowService],
  controllers: [RowController]
})
export class RowModule {}
