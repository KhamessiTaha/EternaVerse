import { Injectable , UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service'; 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload);
    
    const user = await this.usersService.findById(payload.sub);
    console.log('Found User:', user);
    
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    const result = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    
    console.log('Returning User Object:', result);
    return result;
  }
}
