import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Optional,
  Self,
  ViewChild,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  NgForm,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import {MatDivider} from '@angular/material/divider';
import {MatOption, MatSelect} from '@angular/material/select';



export interface FormFieldValue {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-custom-form-field-control',
  standalone: true,
  imports: [ReactiveFormsModule, MatSelect, MatDivider, MatOption],
  templateUrl: './search-field.component.html',
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomFormFieldControlComponent,
    },
  ],
})
export class CustomFormFieldControlComponent
  implements MatFormFieldControl<FormFieldValue>, ControlValueAccessor, OnInit, OnDestroy, DoCheck {

  static nextId = 0;

  stateChanges = new Subject<void>();

  @ViewChild('inputEl', { read: ElementRef, static: false })
  inputEl!: ElementRef<HTMLInputElement>;

  form: FormGroup;

  focused = false;
  touched = false;
  disabled = false;

  controlType = 'custom-form-field';

  @HostBinding()
  id = `custom-form-field-${CustomFormFieldControlComponent.nextId++}`;

  @HostBinding('attr.aria-describedby')
  describedBy = '';

  @Input() placeholder = '';
  @Input() required = false;

  constructor(
    private fb: FormBuilder,
    private focusMonitor: FocusMonitor,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() private parentForm: NgForm,
    @Optional() private parentFormGroup: FormGroupDirective,
  ) {

    this.form = this.fb.group({
      query: new FormControl(''),
      scope: new FormControl(''),
    });

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // -----------------------------
  // value
  // -----------------------------

  get value(): FormFieldValue {
    return this.form.getRawValue();
  }

  set value(val: FormFieldValue | null) {
    this.form.setValue(
      val ?? { query: '', scope: '' },
      { emitEvent: false }
    );
  }

  // -----------------------------
  // CVA
  // -----------------------------

  onChange: (v: FormFieldValue) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: FormFieldValue | null): void {
    this.value = value;
    this.stateChanges.next();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    if (isDisabled) {
      this.form.disable({ emitEvent: false });
    } else {
      this.form.enable({ emitEvent: false });
    }

    this.stateChanges.next();
  }

  // -----------------------------
  // MatFormFieldControl
  // -----------------------------

  get empty(): boolean {
    const { query, scope } = this.value;
    return !query && !scope;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(): void {
    this.inputEl?.nativeElement?.focus();
  }

  // -----------------------------
  // lifecycle
  // -----------------------------

  ngOnInit(): void {

    this.form.valueChanges.subscribe(v => {
      this.onChange(v);
      this.stateChanges.next();
    });

    if (this.inputEl) {
      this.focusMonitor.monitor(this.inputEl).subscribe(origin => {
        this.focused = !!origin;

        if (!origin) {
          this.touched = true;
          this.onTouched();
        }

        this.stateChanges.next();
      });
    }
  }

  ngDoCheck(): void {
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.inputEl);
  }

  readonly autofilled: boolean = false;
  readonly disableAutomaticLabeling: boolean = false;
  readonly errorState: boolean = true;
  readonly userAriaDescribedBy: string = '';
}
