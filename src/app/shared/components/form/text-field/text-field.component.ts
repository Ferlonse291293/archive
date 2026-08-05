
import {
  ChangeDetectionStrategy,
  Component

} from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseFieldComponent} from '../base-field.directive';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  standalone: true,
  styleUrl: '../style-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
  ],
})
export class TextFieldComponent extends BaseFieldComponent{






}
