import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  createAccount(data: any): void {
    this.http.post(`${this.baseUrl}/user/register`, data).subscribe({
      next: (data) => {
        console.log('data', data);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
