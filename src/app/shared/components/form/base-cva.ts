import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseCva<T>
  implements ControlValueAccessor {

  value!: T;

  disabled = false;

  protected onChange = (_: T) => {};
  protected onTouched = () => {};

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
