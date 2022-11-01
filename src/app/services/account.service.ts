import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
    private toastService: ToastsService,
    private loadingService: LoadingService
  ) {}

  createAccount(data: any, func?: (response: boolean) => void): void {
    this.loadingService.isLoading = true;
    this.http.post(`${this.baseUrl}/user/register`, data).subscribe({
      next: (data) => {
        console.log('data', data);
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
}
