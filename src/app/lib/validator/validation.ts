import { AbstractControl } from '@angular/forms';

function validInput(control: AbstractControl | null): string | null {
  const formGroup = control?.parent?.controls;

  const controlName =
    Object.keys(formGroup!)?.find(
      (name) => control === control?.parent?.get(name)
    ) || null;

  if (!control?.errors) {
    return null;
  }
  if (!(control.invalid && (control.dirty || control.touched))) {
    return null;
  }
  if (control?.hasError('required')) {
    if (controlName === 'userName') {
      return '*UserName  is required';
    }
    if (controlName === 'password') {
      return '*Password  is required';
    }
    return '*Confirm Password  is required';
  }

  if (control?.hasError('invalidPassword')) {
    return "*Password didn't match";
  }
  return null;
}

export { validInput };
