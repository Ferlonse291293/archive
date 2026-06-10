import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  signal,
} from '@angular/core';

import {
  FormsModule,
  NG_VALUE_ACCESSOR, ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import {BaseFieldComponent} from '../base-field.directive';
import {JsonPipe} from '@angular/common';



@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './password-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPasswordFieldComponent extends BaseFieldComponent {

  visible = signal(false);

  toggle(): void {
    this.visible.update(v => !v);
  }
}
