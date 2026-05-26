import { Actions } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AuthActions} from '../../../state/auth/auth.actions';
import {ReqLogin} from '../../data/endpoints/auth-api.interface';
import {ofType} from '@ngrx/effects';
import {filter, firstValueFrom, map, take} from 'rxjs';


export interface IAuthStateFacade{
  login(req: ReqLogin): Promise<boolean>
  getProfile(): Promise<any>
}




export class AuthDataFacade implements IAuthStateFacade {


  constructor(
    private actions$: Actions,
    private store: Store,
    ) {
  }


  login(req: ReqLogin): Promise<boolean>{
    const requestId = crypto.randomUUID();
    this.store.dispatch(AuthActions.login.req({req: req}))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(AuthActions.login.success, AuthActions.login.failure),
        take(1),
        map((action: any) => {
          if (action.type === AuthActions.login.success.type) {
            return true;
          }

          return   action.error;
        })
      )
    );
  }

  getProfile(){
    // const requestId = crypto.randomUUID();
    this.store.dispatch(AuthActions.profile.req())

    return firstValueFrom(
      this.actions$.pipe(
        ofType(AuthActions.profile.success, AuthActions.profile.failure),
        // filter((action: any) => action.requestId === requestId),

        take(1),
        map((action: any)  => {
          if (action.type === AuthActions.profile.success.type) {
            return action.user;
          }

          return  action.error ;
        })
      )
    );
  }

  refresh(){}




}
