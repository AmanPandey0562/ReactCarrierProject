import { StaffManagementService } from './../../services/staff-management.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-new-staff',
  templateUrl: './add-new-staff.component.html',
  styleUrls: ['./add-new-staff.component.css'],
})
export class AddNewStaffComponent implements OnInit {
  staffDetails: any;
  constructor(private staffServi: StaffManagementService) {}

  ngOnInit(): void {}

  newStaff = new FormGroup({
    userRole: new FormControl(''),
    clusterGroup: new FormControl(''),
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    joinedDate: new FormControl(''),
    password: new FormControl(''),
    userStatus: new FormControl(''),
    userImage: new FormControl(''),
  });

  staffData() {
    this.staffDetails = this.newStaff.value;
    this.staffServi.sendStaffData(this.staffDetails).subscribe((res) => {
      console.log(res);
    });
    Swal.fire('New Staff Added');
  }
}
