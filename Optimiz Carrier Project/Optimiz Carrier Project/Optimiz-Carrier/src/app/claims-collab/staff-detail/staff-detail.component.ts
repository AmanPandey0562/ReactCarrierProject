import { ActivatedRoute} from '@angular/router';
import { StaffManagementService } from './../../services/staff-management.service';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  image: string;
  id: number;
  name: string;
  Email: string;
  JoinedDate:string;
  Status:string;
  userRole:string;
  ClusterGroup:string;
}

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  id!:number;
  displayedColumns: string[] = ['image', 'name', 'id', 'userRole', 'Email','ClusterGroup','JoinedDate','Status','More'];
  dataSource : any;
  constructor(private staffSer:StaffManagementService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.getStaffDetails()
  }

  getStaffDetails(){
    this.staffSer.getStaffManagementDataId(this.id).subscribe((res) => {
      this.dataSource = res;
      // const {data:data1}=this.dataSource
      // console.log(data1)
    });

}
}
