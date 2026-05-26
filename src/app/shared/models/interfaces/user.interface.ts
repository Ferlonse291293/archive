import {UserRole} from '../enums/role.enum';

export interface IUser {
  id: string,
  username: string,
  email: string,
  role: UserRole,
  permissions: string[]
}
