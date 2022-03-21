import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.css']
})
export class TimerLimitComponent implements OnInit {
  @Output() startDownData = new EventEmitter<{ startCount: number, log: any, timestamp: any }>();
  @Output() pauseDownData = new EventEmitter<{ pauseCount: number, log: any, timestamp: any }>();
  @Output() currTimerData = new EventEmitter<any>();
  @Output() triggerReset = new EventEmitter<any>();
  countdownTime: number = 0;
  noOfStarts: number = 0;
  noOfPauses: number = 0;
  currLog: any;
  isStart: boolean = true;
  err: boolean = false;
  timeDecrement: any;
  isPaused: boolean = false;
  constructor() { }

  ngOnInit(): void { }


  startCountDown(time: any) {
    if (time > 0) {
      this.isStart = false;
      this.isPaused = false;
      this.noOfStarts++
      if (this.countdownTime > 0) {
        this.timeDecrement = setInterval(() => {
          if (!this.isPaused) {
            this.countdownTime--;
            this.currTimerData.emit(this.countdownTime);
            if (this.countdownTime === 0) {
              this.resetCountDown();
            }
          }
        }, 1000)
      } else {
        this.countdownTime = 0;

      }
      this.startDownData.emit({
        startCount: this.noOfStarts,
        log: "Started at ",
        timestamp: new Date()
      });
      console.log("noOfStarts: ", this.startDownData);
    } else {
      this.err = true;
    }
  }


  pauseCountDown(time: any) {
    // console.log.bind("time: ", timeStamp);
    this.isStart = true;
    this.isPaused = true;
    clearInterval(this.timeDecrement);
    this.noOfPauses++;
    this.pauseDownData.emit({
      pauseCount: this.noOfPauses,
      log: "Paused at ",
      timestamp: new Date()
    });
    console.log("noOfPauses: ", this.noOfPauses);
  }


  resetCountDown() {
    clearInterval(this.timeDecrement);
    this.countdownTime = 0;
    this.isStart = true;
    this.triggerReset.emit();
  }

}
// time: number, startCount: number, pauseCount: number, log: any 