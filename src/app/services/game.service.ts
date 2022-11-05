import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';
import { MasterService } from './master.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private smileAPIUrl: string = 'https://marcconrad.com/uob/smile/api.php';
  baseUrl: string = environment.server;
  constructor(
    private http: HttpClient,
    private toastService: ToastsService,
    private loadingService: LoadingService,
    private masterService: MasterService
  ) {}

  getQuestion(func?: (data: any) => void): void {
    this.loadingService.isLoading = true;
    this.http.get(this.smileAPIUrl).subscribe({
      next: (data) => {
        func?.(data);
        this.loadingService.isLoading = false;
      },
      error: (err) => {
        this.loadingService.isLoading = false;
        this.toastService.showError({
          error: 'cannot fetch quaetion from smile api',
        });
      },
    });
  }

  addScore(data: any, func?: (data?: any) => void) {
    this.loadingService.isLoading = true;

    this.http
      .post(
        `${this.baseUrl}/score/addScore`,
        data,
        this.masterService.getHeaders()
      )
      .subscribe({
        next: (data) => {
          func?.(data);
          this.loadingService.isLoading = false;
        },
        error: (err) => {
          this.loadingService.isLoading = false;
          this.toastService.showError(err);
        },
      });
  }
}
