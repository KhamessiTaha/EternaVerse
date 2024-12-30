import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Universe } from './entities/universe.entity';
import { CelestialObject } from './entities/celestial-object.entity';
import { Anomaly } from './entities/anomaly.entity';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, Universe, CelestialObject, Anomaly],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User, Universe, CelestialObject, Anomaly]),
  ],
  providers: [UserService],
})
export class AppModule {}
