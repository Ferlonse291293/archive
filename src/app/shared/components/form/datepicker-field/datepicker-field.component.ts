import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
} from '@angular/core';

import {
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {BaseFieldComponent} from '../base-field.directive';




@Component({
  selector: 'app-datepicker-field',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,

  ],
  templateUrl: './datepicker-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppDatepickerFieldComponent),
      multi: true,
    },
  ],
})
export class AppDatepickerFieldComponent
  extends BaseFieldComponent<Date | null> {

  handle(value: Date | null): void {
    this.value = value;
    this.onChange(value);
  }
}
/*
  <app-datepicker-field
    label="Birth date"
    formControlName="birthDate"
  />
 */
