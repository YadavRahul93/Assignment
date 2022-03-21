import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-timer-page-service',
  templateUrl: './timer-page-service.component.html',
  styleUrls: ['./timer-page-service.component.css']
})
export class TimerPageServiceComponent implements OnInit {
  startCount: number = 0;
  pauseCount: number = 0;

  constructor(
    private sharedService: SharedService
  ) {
    this.sharedService.getNumOfStarts().subscribe(data => {
      if(data){
        this.startCount = data.startCount
      } else{
        this.startCount = 0
      }
    }
    );
    this.sharedService.getNumOfPauses().subscribe(data => {
      if(data){
        this.pauseCount = data.pauseCount
      } else{
        this.pauseCount = 0;
      }
    });
  }

  ngOnInit(): void {
  }

}
