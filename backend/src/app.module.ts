import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { UsersModule } from './users/users.module'; 
import { AuthModule } from './auth/auth.module';

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
    AuthModule, // Register the UsersModule
  ],
  controllers: [AppController], // Register the AppController
  providers: [], // Add any global providers here if needed
})
export class AppModule {}


