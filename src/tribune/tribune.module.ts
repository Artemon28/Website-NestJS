import { Module } from '@nestjs/common';
import { TribuneController } from './tribune.controller';
import { TribuneService } from "./tribune.service";
import { PrismaService } from "../Prisma/prisma.service";

@Module({
    imports: [],
    controllers: [TribuneController],
    providers: [TribuneService, PrismaService]
})
export class TribuneModule {}