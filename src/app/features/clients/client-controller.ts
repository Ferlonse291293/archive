import {BaseController, IBaseController, IConfigController} from '../../core/base/base-controller';


import {Injector} from '@angular/core';

export class ClientController extends BaseController implements IBaseController{
  constructor(config: IConfigController,injector: Injector) {
    super(config, injector);
  }

}
