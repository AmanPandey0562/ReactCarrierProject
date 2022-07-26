import { ClaimAnalyticsModule } from './../claim-analytics/claim-analytics.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../Material/material/material.module';
import { ClaimsCollabRoutingModule } from './claims-collab-routing.module';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { StaffPerformanceComponent } from './staff-performance/staff-performance.component';
import { ClusterComponent } from './cluster/cluster.component';
import { AddNewStaffComponent } from './add-new-staff/add-new-staff.component';
import { CreateClusterComponent } from './create-cluster/create-cluster.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
@NgModule({
  declarations: [
    StaffManagementComponent,
    StaffPerformanceComponent,
    ClusterComponent,
    AddNewStaffComponent,
    CreateClusterComponent,
    StaffDetailComponent,
  ],
  imports: [
    CommonModule,
    ClaimsCollabRoutingModule,
    MaterialModule, ReactiveFormsModule,ClaimAnalyticsModule
  ]
})
export class ClaimsCollabModule { }
