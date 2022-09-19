import { SetMetadata } from '@nestjs/common';
import { Permission } from '../../users/entities/enums/permission.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Permission[]) => SetMetadata(ROLES_KEY, roles);