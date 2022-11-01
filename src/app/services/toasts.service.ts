import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  constructor(private messageService: MessageService) {}

  showError(err: any, timer = 3000): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'custom',
      sticky: true,
      severity: 'error',
      summary: err.error,
      detail: 'Authentication Error',
      closable: false,
    });
    setTimeout(() => {
      this.messageService.clear('custom');
    }, timer);
  }
}