import { User as UserEntity } from '../entity/users/user.entity'

export type RequestWithUser = Request & { user: UserEntity }