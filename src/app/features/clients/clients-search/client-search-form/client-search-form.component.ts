import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextFieldComponent} from '../../../../shared/components/form/text-field/text-field.component';
import {MatButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-client-search-form',
  standalone: true,
  imports: [
    FormsModule,
    TextFieldComponent,
    MatButton,
    ReactiveFormsModule,
    MatInputModule,
    TranslatePipe,
  ],
  templateUrl: './client-search-form.component.html',
  styleUrl: './client-search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSearchFormComponent {
  private fb = inject(FormBuilder)
  onSubmit = output<Record<string, string | null>>()
  private translate = inject(TranslateService);

  public form = this.fb.group({
    firstName: this.fb.nonNullable.control(''),
    lastName: this.fb.nonNullable.control(''),
    code: this.fb.nonNullable.control(''),
    ipn: this.fb.nonNullable.control(''),
    type: this.fb.nonNullable.control(''),
    seriesDoc: this.fb.nonNullable.control(''),
    numberDoc: this.fb.nonNullable.control(''),
    department: this.fb.nonNullable.control(''),


  });

  submit() {
    this.onSubmit.emit(this.validation())

  }


  validation(): Record<string, string | null>{
    const values = {...this.form.value}
    return values
  }
}
