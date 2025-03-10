import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

    getFormErrorMessage(
   { controlName, form, validationMessages}: 
   { controlName: string,
    form: FormGroup,
    validationMessages: any
  }
  ) {
    if (form) {
      const control = form.get(controlName);

      for (const errorKey in control?.errors) {
        if (
          (control.errors.hasOwnProperty(errorKey) && control.dirty) ||
          control.errors.hasOwnProperty(errorKey) && control.dirty && control.touched)
         {
          return validationMessages[controlName][errorKey];
        }
      }
    }

    return '';
  }

}
