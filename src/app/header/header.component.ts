import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routerList: any = [
    { route: '/admin/floating-banner', label: 'Banner' },
    { route: '/admin/category', label: 'Category' },
    { route: '/admin/timer', label: 'Timer' },
    { route: '/admin/timer-service', label: 'Service Timer' },
    { route: '/admin/student-data', label: 'Student Report' },
    { route: '/admin/dimension', label: 'Btn Groups' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
