import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Permission } from 'src/users/entities/enums/permission.enum';
import { RequestWithUser } from '../requestWithUser';
import { UsersService } from '../../users/users.service';

 
const RoleGuard = (role: Permission): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    
   async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;
      console.log(user)
      return user?.permissions ? user?.permissions.includes(role) : false;
    }
  }
 
  return mixin(RoleGuardMixin);
}
 
export default RoleGuard;