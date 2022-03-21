import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css']
})
export class TimerPageComponent implements OnInit {
  pauseCount: number = 0;
  startCount: number = 0;
  trackData: any=[];
  timeLeft: any;
  constructor() { }

  ngOnInit(): void {
  }
  getStartData(e:any){
    this.startCount = e.startCount;
    this.trackData.push(`${e.log} ${e.timestamp}`);
  }
  getPauseData(e:any){
    this.pauseCount = e.pauseCount;
    this.trackData.push(`${e.log} ${e.timestamp}`);
  }

  resetEvent(){
    this.startCount = 0;
    this.pauseCount = 0;
    this.timeLeft = 0;
  }
  getcurrTimerData(secs:any){
    this.timeLeft = secs;
  }
}
