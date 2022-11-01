import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { validInput } from '../lib/validator';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(private accountService: AccountService, private router: Router) {}
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.checkPasswordMatch.bind(this)('password'),
    ]),
  });

  validInput(control: AbstractControl | null): string | null {
    return validInput(control);
  }

  checkPasswordMatch(controlName: string): any {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (this.registerForm?.get(controlName)?.value !== control.value) {
        return { invalidPassword: true };
      }
      return null;
    };
  }

  ngOnInit(): void {
    this.subscription.add(
      this.registerForm
        .get('password')
        ?.valueChanges.pipe(distinctUntilChanged())
        .subscribe(() => {
          this.registerForm.get('confirmPassword')?.updateValueAndValidity();
        })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    console.log('form', this.registerForm.value);
    this.accountService.createAccount(
      this.registerForm.value,
      (response: boolean) => {
        if (response) {
          this.router.navigateByUrl('signin');
        }
      }
    );
  }
}
