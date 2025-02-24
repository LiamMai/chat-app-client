import { AbstractControl } from "@angular/forms";

export const validateSamePassword = (control: AbstractControl) => {
    const password = control.parent?.get('password');
    const confirmPassword = control.parent?.get('confirmPassword');
    return password?.value == confirmPassword?.value ? null : { 'notSame': true };
  }