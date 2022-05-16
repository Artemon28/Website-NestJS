import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { TimeInterceptor } from "./time.interceptor";
import supertokens from "supertokens-node";
import { SupertokensExceptionFilter } from "./auth/auth.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.enableCors({
    origin: ['http://localhost:12345/'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());
  app.useGlobalInterceptors(new TimeInterceptor());
  app.useStaticAssets(join(__dirname, '../../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../../', 'views'));
  const hbs = require('hbs');
  hbs.registerPartials(join(__dirname, '../../', 'views/partials'));
  app.setViewEngine('hbs');

  const options = new DocumentBuilder().addCookieAuth('optional-session-id');

  const config = new DocumentBuilder()
    .setTitle('CTicket seller')
    .setDescription('Attributes for selling tickets')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();