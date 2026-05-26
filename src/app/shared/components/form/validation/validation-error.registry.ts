// import { Injectable } from '@angular/core';
//
// import { FieldErrorMap } from './validation-error.types';
//
//
// @Injectable({ providedIn: 'root' })
// export class ValidationErrorRegistry {
//
//   private fieldOverrides = new Map<string, FieldErrorMap>();
//
//   registerField(
//     fieldName: string,
//     errors: FieldErrorMap,
//   ): void {
//     this.fieldOverrides.set(fieldName, errors);
//   }
//
//   getFieldErrors(fieldName: string): FieldErrorMap | null {
//     return this.fieldOverrides.get(fieldName) ?? null;
//   }
//
//   resolve(
//     fieldName: string,
//     errorKey: string,
//   ): string | null {
//
//     const field = this.fieldOverrides.get(fieldName);
//
//     if (field?.[errorKey]) {
//       return field[errorKey];
//     }
//
//     return DEFAULT_VALIDATION_MESSAGES[errorKey] ?? null;
//   }
// }
