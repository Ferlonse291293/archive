import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export const clientSearchValidator: ValidatorFn = (group: AbstractControl) => {
  const g = group as FormGroup;
  const ipn = g.get('ipn')?.value;
  const code = g.get('code')?.value;
  const firstName = g.get('firstName')?.value;
  const lastName = g.get('lastName')?.value;
  const isValid = !!ipn || !!code || !!firstName || !!lastName;
  return isValid ? null : { requiredAny: true };
};
