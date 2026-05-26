import {inject, Injectable} from '@angular/core';


import {VALIDATION_MESSAGES} from './validation-mes.';
import {TranslateService} from '@ngx-translate/core';
import {firstValueFrom, take} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ValidationErrorService {
  private translate = inject(TranslateService);

  constructor(

    // private registry: ValidationErrorRegistry,
  ) {}

   mapError(
    key: string,
    value: any,
  ): string {

    switch (key) {

      case 'required':
        return this.getTrans(VALIDATION_MESSAGES.required);

      case 'email':
        return this.getTrans(VALIDATION_MESSAGES.email) ;

      case 'minlength':
        return this.getTrans(VALIDATION_MESSAGES.minlength) + ':' +  value.requiredLength + ' ' + this.getTrans(VALIDATION_MESSAGES.characters);

      case 'maxlength':
        return this.getTrans(VALIDATION_MESSAGES.maxlength) + ':' +  value.requiredLength + ' ' + this.getTrans(VALIDATION_MESSAGES.characters);
      default:
        return 'Invalid field';
    }

  }
  getTrans(key: string){
    return this.translate.instant(key)
  }
}
