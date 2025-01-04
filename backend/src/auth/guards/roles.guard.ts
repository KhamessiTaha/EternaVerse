import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    console.log('Required Roles:', requiredRoles);

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('User in Request:', user);

    if (!requiredRoles) {
      return true;
    }

    if (!user || !user.role) {
      console.log('No user or role found in request');
      return false;
    }

    const hasRole = requiredRoles.includes(user.role);
    console.log('Has required role:', hasRole);
    return hasRole;
  }
}