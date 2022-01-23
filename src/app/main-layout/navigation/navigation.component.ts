import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  constructor(private dashboardService: DashboardService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
  syncData() {
    this.dashboardService.crawData().subscribe(data => {
      console.log(data);

    })
  }
  deleteData() {
    this.dashboardService.deleteAll().subscribe(data => {
      console.log(data);

    })
  }
  

}
