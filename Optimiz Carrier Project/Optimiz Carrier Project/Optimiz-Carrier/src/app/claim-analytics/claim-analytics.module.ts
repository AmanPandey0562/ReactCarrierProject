import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../Material/material/material.module';
import { ClaimAnalyticsRoutingModule } from './claim-analytics-routing.module';
import { ClaimAnalComponent } from './claim-anal/claim-anal.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { Barchart1Component } from './barchart1/barchart1.component';
import { CargoPiechartComponent } from './cargo-piechart/cargo-piechart.component';
import { ClaimTypePiechartComponent } from './claim-type-piechart/claim-type-piechart.component';
import { OriginPirChartComponent } from './origin-pir-chart/origin-pir-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StatusChartComponent } from './status-chart/status-chart.component';

@NgModule({
  declarations: [
    ClaimAnalComponent,
    BarchartComponent,
    Barchart1Component,
    CargoPiechartComponent,
    ClaimTypePiechartComponent,
    OriginPirChartComponent,
    PieChartComponent,
    StatusChartComponent
  ],
  imports: [
    CommonModule,
    ClaimAnalyticsRoutingModule,MaterialModule,NgChartsModule
  ],
  exports:[
BarchartComponent,Barchart1Component,CargoPiechartComponent,ClaimTypePiechartComponent,OriginPirChartComponent,PieChartComponent,StatusChartComponent
  ]
})
export class ClaimAnalyticsModule { }
