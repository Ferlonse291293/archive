import {IBaseController} from '../model';
import {IBaseSection} from '../model/interfaces/base-section.interface';
import {IDataController} from '../model/interfaces/data-controller.interface';
import {IStateController} from '../model/interfaces/state-controller.interface';
import {IConfigController} from '../model/interfaces/config-controller.interface';


export class BaseController implements IBaseController {
  sections: Record<string, IBaseSection>;
  params: unknown;
  state: IStateController;
  data: IDataController;
  services: any
  constructor(config: IConfigController) {

  }

  protected  preInit(){}
  protected   init() {}
  protected destroy(){

  }

  // protected getService<T>(token: InjectionToken<T>): T {
  //   return this.services.get(token);
  // }

}
