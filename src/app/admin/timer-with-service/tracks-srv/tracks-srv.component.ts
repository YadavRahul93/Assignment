import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-tracks-srv',
  templateUrl: './tracks-srv.component.html',
  styleUrls: ['./tracks-srv.component.css']
})
export class TracksSrvComponent implements OnInit {
  trackData: any = [];
  constructor(
    private sharedService: SharedService
  ) {
    this.sharedService.getNumOfPauses().subscribe( data => {
      if(data){
        this.trackData.push(`${data.log} ${data.timestamp}`);
      }
    });

    this.sharedService.getNumOfStarts().subscribe( data => {
      if(data){
        this.trackData.push(`${data.log} ${data.timestamp}`);
      }
    })
   }

  ngOnInit(): void {
  }

  
}
