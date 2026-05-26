import {BaseController} from '../../core/base/base-controller';
import {IBaseController} from '../../core/model';
import {clientConfig} from './configs/client-config-controller';
import {IConfigController} from '../../core/model/interfaces/config-controller.interface';
import {Injector} from '@angular/core';

export class ClientController extends BaseController implements IBaseController{
  constructor(config: IConfigController,injector: Injector) {
    super(config, injector);
  }

}
