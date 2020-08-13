import 'winston-daily-rotate-file';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Person } from './modules/person/person.entity';
import { PersonModule } from './modules/person/person.module';
import * as morgan from 'morgan';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE_NAME,
      entities: [
        Person,
      ],
      synchronize: true,
      migrations: ['/src/config/migrations/*.ts'],
      cli: {
        migrationsDir: '/src/config/migrations',
      },
      extra: {
        timezone: 'utc',
      },
    }),
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan(''))
      .forRoutes('*');
  }
}
