import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Other-Custom-Header'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }));

  await app.listen(3000);
}

bootstrap();
