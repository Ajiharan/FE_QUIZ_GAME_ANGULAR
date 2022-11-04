import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public cookieToken: string = 'token';
  constructor(private cookieService: CookieService) {}

  validTokenCookie(): boolean {
    return Boolean(this.cookieService.get(this.cookieToken));
  }

  getToken(): string {
    return this.cookieService.get(this.cookieToken);
  }

  removeToken(): void {
    this.cookieService.deleteAll();
  }
}
