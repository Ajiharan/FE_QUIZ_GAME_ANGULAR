import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private smileAPIUrl: string = 'https://marcconrad.com/uob/smile/api.php';
  constructor(
    private http: HttpClient,
    private toastService: ToastsService,
    private loadingService: LoadingService
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
}
