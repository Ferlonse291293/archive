
import {Store} from '@ngrx/store';
import {firstValueFrom, Observable, take} from 'rxjs';
import {IUser} from '../../../shared/models/interfaces/user.interface';
import {AuthSelectors} from '../../../state/auth/auth.selectors';


export interface  IAuthStateFacade{
  getUser$(): Observable<IUser>
  getUser(): Promise<IUser>
}


export class AuthStateFacade{

  constructor(
    private store: Store,
  ) {
  }


  getUser$(): Observable<IUser>{
  return this.store.select(AuthSelectors.user)

  }
  getUser(): Promise<IUser>{
    return firstValueFrom(this.store.select(AuthSelectors.user))
  }




}
