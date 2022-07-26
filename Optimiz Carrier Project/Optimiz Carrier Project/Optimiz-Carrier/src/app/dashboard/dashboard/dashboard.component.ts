import { DashboardServiceService } from './../../services/dashboard-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource :any;
  columnsToDisplay = ['country', 'settled', 'presettled', 'pending','closed','value'];
  constructor(private dashSer:DashboardServiceService) {}
  
  ngOnInit(): void {
    this.dashSer.getUsers().subscribe((res)=>{
      this.dataSource = res;
      
      console.log(this.dataSource.data);
    })
  }
}
