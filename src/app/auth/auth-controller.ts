import {BaseController, IBaseController, IConfigController} from '../core/base/base-controller';

import {Injector} from '@angular/core';




interface IAuthController extends  IBaseController{

}

export class AuthController extends BaseController implements IAuthController{

  constructor(config: IConfigController,injector: Injector) {
    super(config, injector);
  }

}
