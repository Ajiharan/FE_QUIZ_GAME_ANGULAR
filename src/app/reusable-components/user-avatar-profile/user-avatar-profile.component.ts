import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-user-avatar-profile',
  templateUrl: './user-avatar-profile.component.html',
  styleUrls: ['./user-avatar-profile.component.scss'],
})
export class UserAvatarProfileComponent implements OnInit {
  @Input() userDetails: any;
  constructor(private helperService: HelperService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.helperService.removeToken();
    this.router.navigateByUrl('signin');
  }
}
