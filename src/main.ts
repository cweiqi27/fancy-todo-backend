import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.ALLOWED_CORS });
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX || 'api');
  app.useGlobalInterceptors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
