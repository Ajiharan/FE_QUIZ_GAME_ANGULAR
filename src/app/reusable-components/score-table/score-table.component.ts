import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  @Input() scoreDetail: any;
  @Input() scoreName: string;

  constructor() {}

  ngOnInit(): void {}
}
