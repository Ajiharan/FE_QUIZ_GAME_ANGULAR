import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private helperService: HelperService, private router: Router) {}

  canActivate(): boolean {
    if (this.helperService.validTokenCookie()) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
