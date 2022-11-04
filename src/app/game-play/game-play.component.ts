import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
})
export class GamePlayComponent implements OnInit {
  public userDetails: any;
  public level1Timer: number = 30;
  public level2Timer: number = 25;
  public level3Timer: number = 20;
  public level4Timer: number = 15;

  public livesCount: number = 3;
  public lostLifeCount: number = 0;
  public score: number = 0;

  public queAns: {
    question: string;
    solution: number;
  } | null = null;

  constructor(
    public accountService: AccountService,
    private gameService: GameService
  ) {
    this.accountService.getUser((data: any) => {
      this.userDetails = data;
    });
    this.gameService.getQuestion((data) => {
      this.queAns = data;
      this.startTimer();
    });
  }

  startTimer(): void {
    setInterval(() => {
      --this.level1Timer;
    }, 1000);
  }

  ngOnInit(): void {}

  getLifeArray(): any {
    return new Array(this.livesCount);
  }

  getLostLifeArray(): any {
    return new Array(this.lostLifeCount);
  }
}
