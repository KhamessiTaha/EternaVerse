import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: any) {
    return this.authService.register(user);
  }

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}
