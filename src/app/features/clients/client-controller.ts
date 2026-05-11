import {BaseController} from '../../core/base/base-controller';
import {IBaseController} from '../../core/model';
import {clientConfig} from './configs/client-config-controller';

export class ClientController extends BaseController implements IBaseController{
  constructor() {
    super(clientConfig);
  }

}
