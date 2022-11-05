import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss'],
})
export class GameDashboardComponent implements OnInit {
  public userDetails: any;
  public highScoreDetail: any;
  public myScoreDetails: any;

  showDialog: boolean = false;
  constructor(public accountService: AccountService, private router: Router) {
    this.accountService.getUser((data: any) => {
      this.userDetails = data;
      this.accountService.getHighScore((data: any) => {
        this.myScoreDetails = data;
      }, `score/getScores/${this.userDetails.user._id}`);
    });
    this.accountService.getHighScore((data: any) => {
      this.highScoreDetail = data;
    });
  }

  ngOnInit(): void {}

  startQuiz(): void {
    this.router.navigateByUrl('quiz');
  }
}
