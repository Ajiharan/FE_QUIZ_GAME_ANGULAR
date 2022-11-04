import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  constructor(
    private messageService: MessageService,
    private helperService: HelperService,
    private router: Router
  ) {}

  showError(err: any, timer = 3000): void {
    console.log('err', err);
    this.messageService.clear();
    this.messageService.add({
      key: 'custom',
      sticky: true,
      severity: 'error',
      summary: err.error || 'something wrong',
      detail: 'Authentication Error',
      closable: false,
    });
    if (err.status === 403) {
      this.helperService.removeToken();
      this.router.navigateByUrl('signin');
    }
    setTimeout(() => {
      this.messageService.clear('custom');
    }, timer);
  }

  showToast(message: string, timer = 3000): void {
    this.messageService.clear();
    this.messageService.add({
      key: 's',
      sticky: true,
      severity: 'success',
      summary: message,
      closable: false,
    });
    setTimeout(() => {
      this.messageService.clear('s');
    }, timer);
  }
}
