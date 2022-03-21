import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css']
})
export class DimensionComponent implements OnInit {
  counts: any = [];
  constructor() {
    this.counts = Array(32).fill(0).map((x,i)=>i);
   }

  ngOnInit(): void {
  }
  callForSubmit(index: any){
    alert(`Button "${index +1}" is clicked!!`)
  }
}
