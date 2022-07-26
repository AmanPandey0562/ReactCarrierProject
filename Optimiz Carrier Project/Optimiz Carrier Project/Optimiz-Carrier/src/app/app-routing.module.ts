import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'claimsCollab', loadChildren:()=>import('./claims-collab/claims-collab.module').then(m=>m.ClaimsCollabModule)
  },
  {
    path:'claimsCenter',loadChildren:()=>import('./claims-center/claims-center.module').then(m=>m.ClaimsCenterModule)
  },
  {
    path:'claimAnalytics',loadChildren:()=>import('./claim-analytics/claim-analytics.module').then(m=>m.ClaimAnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
