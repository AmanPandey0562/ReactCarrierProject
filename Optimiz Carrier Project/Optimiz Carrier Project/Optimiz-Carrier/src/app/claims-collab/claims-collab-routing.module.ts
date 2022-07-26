import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { CreateClusterComponent } from './create-cluster/create-cluster.component';
import { AddNewStaffComponent } from './add-new-staff/add-new-staff.component';
import { ClusterComponent } from './cluster/cluster.component';
import { StaffPerformanceComponent } from './staff-performance/staff-performance.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'staffManagement',
    component: StaffManagementComponent,
  },
  {
    path: 'staffPerformance',
    component: StaffPerformanceComponent,
  },
  {
    path: 'cluster',
    component: ClusterComponent,
  },
  {
    path: 'addNewStaff',
    component: AddNewStaffComponent,
  },
  {
    path: 'createCluster',
    component: CreateClusterComponent,
  },
  {
    path: 'staffDetails/:id',
    component: StaffDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsCollabRoutingModule {}
