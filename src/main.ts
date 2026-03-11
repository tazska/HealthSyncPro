import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activa class-validator en todos los endpoints
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       
    forbidNonWhitelisted: true,
  }));

  await app.listen(3000);
  console.log('HealthSync Pro corriendo en http://localhost:3000');
}
bootstrap();