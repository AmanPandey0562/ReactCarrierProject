import { ClaimAnalyticsModule } from './../claim-analytics/claim-analytics.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../Material/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, NgChartsModule,MaterialModule, NgxChartsModule,HttpClientModule,ClaimAnalyticsModule
  ]
})
export class DashboardModule { }
