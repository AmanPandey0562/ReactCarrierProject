import { StaffManagementService } from './../../services/staff-management.service';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  image: string;
  id: number;
  name: string;
  email: string;
  joinedDate:string;
  Status:string
}

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
  displayedColumns: string[] = ['image', 'id', 'name', 'email', 'joinedDate','Status','More'];
  dataSource : any;
  constructor(private staffSer:StaffManagementService) { }

  ngOnInit(): void {
    this.staffSer.getStaffManagementData().subscribe((res)=>{
this.dataSource = res;
console.log(res)
    })
  }


}
