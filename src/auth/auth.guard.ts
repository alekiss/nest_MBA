import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if(!authHeader) {
      throw new HttpException('Not authorized', 401);
    }
    return true;
  }
}
