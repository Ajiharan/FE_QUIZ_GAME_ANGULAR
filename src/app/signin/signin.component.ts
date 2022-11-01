import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validInput } from '../lib/validator';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private accountService: AccountService) {}
  signInForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  validInput(control: AbstractControl | null): string | null {
    return validInput(control);
  }

  onSubmit(): void {
    console.log('form', this.signInForm.value);
    this.accountService.signInAccount(
      this.signInForm.value,
      (response: boolean) => {}
    );
  }
}
