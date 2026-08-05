import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

import {
  FormsModule,
 ReactiveFormsModule,
} from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import {BaseFieldComponent} from '../base-field.directive';
import { MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';



type SelectValue = string | number;

export type SelectOption = {
  label: string;
  value: SelectValue;
};

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelect, MatOption,
  ],
  styleUrl: '../style-form.scss',
  templateUrl: './select-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class AppSelectFieldComponent extends BaseFieldComponent{
  multiple = input(false);
  options = input<SelectOption[]>([]);
  constructor() {
    super();
  }


}
