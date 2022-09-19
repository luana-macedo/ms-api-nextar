import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Permission } from 'src/users/entities/enums/permission.enum';
import { RequestWithUser } from '../requestWithUser';
import { UsersService } from '../../users/users.service';

 
const RoleGuard = (role: Permission): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    constructor(
        private readonly usersService: UsersService) 
        {}
   async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user.email;
      console.log(user)
      const userlog = await this.usersService.findEmail(user)
      console.log(userlog)
      return userlog?.permissions.includes(role);
    }
  }
 
  return mixin(RoleGuardMixin);
}
 
export default RoleGuard;