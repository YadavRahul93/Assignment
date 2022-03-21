import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-count-down-srv',
  templateUrl: './count-down-srv.component.html',
  styleUrls: ['./count-down-srv.component.css']
})
export class CountDownSrvComponent implements OnInit {
  timerCount: number = 0;
  constructor(
    private sharedService: SharedService
  ) {
    this.sharedService.getCountDownTime().subscribe(val => {
      if(val > 0){
        this.timerCount = val
      } else{
        this.timerCount = 0;
      }
    }
    )
  }

  ngOnInit(): void {
  }

}
