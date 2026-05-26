import {BaseController} from '../core/base/base-controller';
import {IBaseController} from '../core/model';
import {Injector} from '@angular/core';
import {IConfigController} from '../core/model/interfaces/config-controller.interface';



interface IAuthController extends  IBaseController{

}

export class AuthController extends BaseController implements IAuthController{

  constructor(config: IConfigController,injector: Injector) {
    super(config, injector);
  }

}
