import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { UsersModule } from './users/users.module'; 
import { AuthModule } from './auth/auth.module';
import { UniversesModule } from './universes/universes.module';
import { UniverseGateway } from './websockets/universe/universe.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes .env variables accessible throughout the app
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // Automatically loads entities
      synchronize: true, // Set to false in production
    }),
    UsersModule,
    AuthModule,
    UniversesModule, // Register the UsersModule
  ],
  controllers: [AppController], // Register the AppController
  providers: [UniverseGateway], // Add any global providers here if needed
})
export class AppModule {}


