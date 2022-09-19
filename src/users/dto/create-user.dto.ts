import { User } from '../entities/user.entity';
import { Permission } from '../entities/enums/permission.enum';
export class CreateUserDto {

    name: string;


    password: string;


    email: string;


    permission: Permission[];

    phone: string;
}
function Column(arg0: { select: boolean; }) {
    throw new Error('Function not implemented.');
}

