import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'yourSecretKey', // Use an .env variable for security
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy, JwtStrategyService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
