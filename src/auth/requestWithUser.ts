import { User as UserEntity } from '../../src/users/entities/user.entity'

export type RequestWithUser = Request & { user: UserEntity }