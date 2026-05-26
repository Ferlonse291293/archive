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

import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {AppFieldComponent} from '../field/field.component';
import {BaseFieldComponent} from '../base-field.directive';



type SelectValue = string | number;

type SelectOption = {
  label: string;
  value: SelectValue;
};

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    AppFieldComponent,
  ],
  templateUrl: './select-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSelectFieldComponent),
      multi: true,
    },
  ],
})
export class AppSelectFieldComponent
  extends BaseFieldComponent<SelectValue | SelectValue[]> {

  multiple = input(false);

  options = input<SelectOption[]>([]);

  handle(value: SelectValue | SelectValue[]): void {
    this.value = value;
    this.onChange(value);
  }
}
/*
  <app-select-field
    label="Role"
    formControlName="role"
    [options]="roles"
  />
 */
