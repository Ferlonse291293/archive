import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
} from '@angular/core';

import {
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import {BaseFieldComponent} from '../base-field.directive';
import {MatError, MatFormField, MatHint, MatLabel} from '@angular/material/input';



type RadioValue = string | number;

type RadioOption = {
  label: string;
  value: RadioValue;
};

@Component({
  selector: 'app-radio-field',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioModule,
    MatFormField,
    MatLabel,
    MatError,
    MatHint,
  ],
  templateUrl: './radio-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppRadioFieldComponent),
      multi: true,
    },
  ],
})
export class AppRadioFieldComponent
  extends BaseFieldComponent<RadioValue> {

  options = input<RadioOption[]>([]);

  handle(value: RadioValue): void {
    this.value = value;
    this.onChange(value);
  }
}
/*
  <app-radio-field
    label="Gender"
    formControlName="gender"
    [options]="genders"
  />
 */
