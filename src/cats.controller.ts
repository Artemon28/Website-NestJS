import { LoggingInterceptor } from "./logging.interceptor";
import { UseInterceptors } from "@nestjs/common";

@UseInterceptors(LoggingInterceptor)
export class CatsController {}