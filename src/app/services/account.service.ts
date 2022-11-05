import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';
import { LoadingService } from './loading.service';
import { MasterService } from './master.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = environment.server;

  constructor(
    private http: HttpClient,
    private toastService: ToastsService,
    private loadingService: LoadingService,
    private cookieService: CookieService,
    private helperService: HelperService,
    private masterService: MasterService
  ) {}

  createAccount(data: any, func?: (response: boolean) => void): void {
    this.loadingService.isLoading = true;
    this.http.post(`${this.baseUrl}/user/register`, data).subscribe({
      next: (data) => {
        console.log('data', data);
        this.toastService.showToast('Account sucessfully created');
        this.loadingService.isLoading = false;
        func?.(true);
      },
      error: (err) => {
        console.log('err', err);
        this.toastService.showError(err);
        this.loadingService.isLoading = false;
        func?.(false);
      },
    });
  }

  signInAccount(data: any, func?: (response: boolean) => void): void {
    this.loadingService.isLoading = true;

    this.http.post(`${this.baseUrl}/user/login`, data).subscribe({
      next: (data) => {
        // console.log('data', data);
        this.cookieService.set(
          this.helperService.cookieToken,
          data.toString(),
          2
        );
        this.toastService.showToast('Login Sucessfully');
        this.loadingService.isLoading = false;
        func?.(true);
      },
      error: (err) => {
        this.toastService.showError(err);
        this.loadingService.isLoading = false;
        func?.(false);
      },
    });
  }

  getUser(func: (response: any) => void): void {
    this.http
      .get(`${this.baseUrl}/user/detail`, this.masterService.getHeaders())
      .subscribe({
        next: (data: any) => {
          console.log('data', data);
          func(data);
        },
        error: (err) => {
          this.toastService.showError(err);
        },
      });
  }

  getHighScore(func: (response: any) => void, path = 'board/getScores'): void {
    this.http
      .get(`${this.baseUrl}/${path}`, this.masterService.getHeaders())
      .subscribe({
        next: (data: any) => {
          console.log('data', data);
          func(data);
        },
        error: (err) => {
          this.toastService.showError(err);
        },
      });
  }
}
