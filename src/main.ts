import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import swaggerConfig from 'src/config/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  swaggerConfig(app);

  await app.listen(port, () => {
    Logger.log(`Server running on the port: ${process.env.PORT}/ - Ambiente: ${process.env.ENVIRONMENT} 😃`);
  });
}

config();
bootstrap();
