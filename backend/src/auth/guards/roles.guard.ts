import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // No roles required, allow access
    }
  
    const request = context.switchToHttp().getRequest();
    const user = request.user;
  
    if (!user || !user.role) {
      return false; // Deny access if user or role is undefined
    }
  
    return requiredRoles.includes(user.role);
  }
}
