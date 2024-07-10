import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as process from 'process';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, () => {
    console.log(`Running API on port: ${PORT}`);
  });
}
bootstrap();
