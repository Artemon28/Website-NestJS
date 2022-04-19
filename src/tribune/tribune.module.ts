import { Module } from '@nestjs/common';
import { TribuneController } from './tribune.controller';
import { TribuneService } from "./tribune.service";

@Module({
    imports: [],
    controllers: [TribuneController],
    providers: [TribuneService]
})
export class TribuneModule {}