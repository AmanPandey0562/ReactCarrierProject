import { ClaimAnalComponent } from './claim-anal/claim-anal.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'claimAnal',component:ClaimAnalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimAnalyticsRoutingModule { }
