import { ValidationErrors } from '@angular/forms';

export type ValidationErrorKey = string;

export type ValidationMessages = Record<
  ValidationErrorKey,
  string
>;

export type FieldErrorMap = Record<
  string,
  string
>;


