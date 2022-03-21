import {LiveAnnouncer} from '@angular/cdk/a11y';
import {OnInit, Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  class: number;
  section: string;
  hindi: number;
  english: number;
  maths: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {class: 5, name: 'Hydrogen', section: 'A', hindi: 45, english: 31, maths: 33},
  {class: 5, name: 'Helium', section: 'A', hindi: 32, english: 33, maths: 35},
  {class: 5, name: 'Lithium', section: 'A', hindi: 43, english: 32, maths: 37},
  {class: 5, name: 'Beryllium', section: 'B', hindi: 47, english: 33, maths: 40},
  {class: 5, name: 'Boron', section: 'B', hindi: 32, english: 34, maths: 41},
  {class: 5, name: 'Carbon', section: 'B', hindi: 39, english: 35, maths: 44},
  {class: 5, name: 'Nitrogen', section: 'C', hindi: 44, english: 36, maths: 43},
  {class: 5, name: 'Oxygen', section: 'D', hindi: 28, english: 37, maths: 43},
  {class: 5, name: 'Fluorine', section: 'C', hindi: 49, english: 38, maths: 42},
  {class: 5, name: 'Neon', section: 'D', hindi: 40, english: 39, maths: 41},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements AfterViewInit {
  displayedColumns: string[] = ['class', 'name', 'section', 'hindi', 'english', 'maths'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
