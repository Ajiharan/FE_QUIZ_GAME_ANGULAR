import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl: string = environment.server;
  constructor(private helperService: HelperService) {}

  getHeaders(): any {
    let headers = new HttpHeaders();
    headers = headers.append('quiz', this.helperService.getToken());
    return { headers };
  }
}
