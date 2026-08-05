import {
  computed,
  Directive, effect, inject,
  input, OnInit, Signal, signal,
} from '@angular/core';



import {FormControl, Validators} from '@angular/forms';

import {ValidationErrorService} from './validation/validation-error.service';
import {toSignal} from '@angular/core/rxjs-interop';


@Directive()
export abstract class BaseFieldComponent implements OnInit{
  private validationErrorService =inject(ValidationErrorService)
  label = input.required<string>();
  id= input<string>('');
  placeholder = input<string>('');
  name = input<string>('');
  disabled = input<boolean>(false)
  control = input.required<FormControl<string>>();
  statusControl!: Signal<string>;
  requiredMarked  = input< boolean | null>(null)

    constructor() {
  }

  get errors(): string[]  {
    const errors = this.control().errors;
    if (!errors) {
      return []
    }
    return  Object.entries(errors).map(([key, value]) => this.validationErrorService.mapError(key, value))
  }





  required = computed(() => {
    return this.control().hasValidator(
      Validators.required
    );
  });

  ngOnInit(): void {
  }



}


