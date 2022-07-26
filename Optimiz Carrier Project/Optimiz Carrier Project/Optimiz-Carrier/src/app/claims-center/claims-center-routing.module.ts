import { LoadgeClaimComponent } from './loadge-claim/loadge-claim.component';
import { AcceptedOfferComponent } from './accepted-offer/accepted-offer.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { DraftsComponent } from './drafts/drafts.component';
import { OfferComponent } from './offer/offer.component';
import { ClaimsComponent } from './claims/claims.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'claims',component:ClaimsComponent
  },
  {
    path:'offer',component:OfferComponent
  },
  {
    path:'drafts',component:DraftsComponent
  },
  {
    path:'archieve',component:ArchieveComponent
  },
  {
    path:'acceptOffer', component:AcceptedOfferComponent
  },
  {
    path:'loadgeClaim',component:LoadgeClaimComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsCenterRoutingModule { }
