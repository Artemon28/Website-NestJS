import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppInterceptor } from "./app.interceptor";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useGlobalInterceptors(new AppInterceptor());
  app.useStaticAssets(join(__dirname, '../../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../../', 'views'));
  const hbs = require('hbs');
  hbs.registerPartials(join(__dirname, '../../', 'views/partials'));
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle('CTicket seller')
    .setDescription('Attributes for selling tickets')
    .setVersion('1.0')
    .addTag('Tribune')
    .addTag('Sector')
    .addTag('Row')
    .addTag('Seat')
    .addTag('Ticket')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();