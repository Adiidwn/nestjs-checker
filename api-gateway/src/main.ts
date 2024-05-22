import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  setupSwagger(app);
  app.setGlobalPrefix('/api/v1');

  const port = process.env.PORT;

  await app.listen(port);
  console.log('Application is running on: ', port);
}
bootstrap();
