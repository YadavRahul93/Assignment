import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/shared/services/functions.service';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-timer-limit-srv',
  templateUrl: './timer-limit-srv.component.html',
  styleUrls: ['./timer-limit-srv.component.css']
})
export class TimerLimitSrvComponent implements OnInit {
  isStart: boolean = true;
  isPaused: boolean = false;
  countdownTime: number = 0;
  err: boolean = false;
  noOfStarts: number = 0;
  noOfPauses: number = 0;
  constructor(
    private functionService: FunctionsService,
    private sharedService: SharedService
  ) {
    this.sharedService.getCountDownTime().subscribe(val => {
      this.countdownTime = val
    }
    )
  }

  ngOnInit(): void {
  }


  triggerCountDown() {
    if (this.countdownTime > 0) {
      this.isStart = false;
      this.isPaused = false;
      this.noOfStarts++;
      this.functionService.startCountDown(this.countdownTime, this.isPaused);
      this.sharedService.sendNumOfStarts({
        startCount: this.noOfStarts,
        log: "Started at ",
        timestamp: new Date()
      });

    } else {
      this.err = true;
    }
  }

  triggerPause() {
    this.isStart = true;
    this.isPaused = true;
    this.noOfPauses++;
    this.functionService.pauseCountDown(this.countdownTime);
    this.sharedService.sendNumOfPuases({
      pauseCount: this.noOfPauses,
      log: "Paused at ",
      timestamp: new Date()
    })

  }

  triggerReset() {
    this.functionService.resetCountDown();
    this.countdownTime = 0;
    this.isStart = true;
  }
}
