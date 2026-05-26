
import {IUser} from '../../shared/models/interfaces/user.interface';



export interface AuthState {
  user: IUser,


}

export const initialClientsState: AuthState = {
  user: {} as IUser,
};



