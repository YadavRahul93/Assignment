import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
@Input() trackData: any = [];
  constructor() { }

  ngOnInit(): void {
    console.log(typeof(this.trackData))
  }

}
