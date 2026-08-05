import {ChangeDetectionStrategy, Component, computed, inject, input, OnInit, output, Signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TextFieldComponent} from '../../../../shared/components/form/text-field/text-field.component';
import {MatButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  AppSelectFieldComponent,
} from '../../../../shared/components/form/select-field/select-field.component';
import {IOption} from '../../../../core/data/endpoints/options/options-api.interface';
import {clientSearchValidator} from './client-form-search.validator';
import {debounceTime, merge, takeUntil} from 'rxjs';

import {Destroy} from '../../../../core/helpers/destroy';
import {MatIcon} from '@angular/material/icon';

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
    AppSelectFieldComponent,
    MatIcon,

  ],
  templateUrl: './client-search-form.component.html',
  styleUrl: './client-search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSearchFormComponent extends Destroy implements OnInit{
  private fb = inject(FormBuilder)
  onSubmit = output<Record<string, string | null>>()
  private translate = inject(TranslateService);
  public departments =  input<IOption[]>([])


  public form:FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.fb.nonNullable.control('', [Validators.minLength(3) ,Validators.maxLength(30)]),
      lastName: this.fb.nonNullable.control('', [Validators.minLength(3) ,Validators.maxLength(30)]),
      code: this.fb.nonNullable.control('', [Validators.minLength(12) ,Validators.maxLength(12)]),
      ipn: this.fb.nonNullable.control('', [Validators.minLength(8) ,Validators.maxLength(16)]),
      type: this.fb.nonNullable.control(''),
      seriesDoc: this.fb.nonNullable.control('', [Validators.minLength(2) ,Validators.maxLength(2)]),
      numberDoc: this.fb.nonNullable.control('', [Validators.minLength(8) ,Validators.maxLength(12)]),
      department: this.fb.nonNullable.control(''),
    }, { validators: clientSearchValidator });

    merge(
      this.form.get('ipn')!.valueChanges,
      this.form.get('code')!.valueChanges,
    ).pipe(
      debounceTime(0),
      takeUntil(this.componentDestroyed)
    ).subscribe(() => {
      const anyKeyFilled = ['ipn', 'code'].filter(f => !!this.form.get(f)?.value);
      const otherFields = Object.keys(this.form.getRawValue()).filter(f => !anyKeyFilled.includes(f));
      otherFields.forEach(f => {
        anyKeyFilled.length > 0
          ? this.form.get(f)?.disable({ emitEvent: false })
          : this.form.get(f)?.enable({ emitEvent: false });
      });
    });
  }
  submit() {
    this.onSubmit.emit(this.validation())
  }


  validation(): Record<string, string | null>{
    const values = {...this.form.value}
    return values
  }

  reset() {
    this.form.reset()
  }

  readonly hints = computed(() => {
    const { ipn, code, firstName, lastName } = this.form.value;

    if (ipn || code) return null; // всё ок, подсказки не нужны

    const hints: string[] = [];

    if (!firstName && !lastName) {
      hints.push('hints.name'); // 'Введите имя или фамилию'
    }

    if (!ipn && !code) {
      hints.push('hints.key'); // 'Или укажите ИПН / Код клиента для точного поиска'
    }
    return hints;
  });

  readonly keyFieldFilled = computed(() => {
    const { ipn, code } = this.form.value;
    return !!ipn || !!code;
  });



}
