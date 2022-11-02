import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss'],
})
export class GameDashboardComponent implements OnInit {
  public userDetails: any;
  constructor(public accountService: AccountService) {
    this.accountService.getUser((data: any) => {
      this.userDetails = data;
    });
  }

  ngOnInit(): void {}
}
