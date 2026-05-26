
import {Store} from '@ngrx/store';
import {Observable, take} from 'rxjs';
import {IUser} from '../../../shared/models/interfaces/user.interface';
import {AuthSelectors} from '../../../state/auth/auth.selectors';

export class AuthStateFacade{

  constructor(
    private store: Store,
  ) {
  }


  getUser$(): Observable<IUser>{
  return this.store.select(AuthSelectors.user)
  }
  getUser(): Observable<IUser>{
    return this.store.select(AuthSelectors.user).pipe(
      take(1)
    )
  }




}
