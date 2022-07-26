import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsCenterRoutingModule } from './claims-center-routing.module';
import { ClaimsComponent } from './claims/claims.component';
import { OfferComponent } from './offer/offer.component';
import { DraftsComponent } from './drafts/drafts.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/material/material.module';
import { AcceptedOfferComponent } from './accepted-offer/accepted-offer.component';
import { PopUpClaimsComponent } from './pop-up-claims/pop-up-claims.component';
import { LoadgeClaimComponent } from './loadge-claim/loadge-claim.component';
@NgModule({
  declarations: [
    ClaimsComponent,
    OfferComponent,
    DraftsComponent,
    ArchieveComponent,
    AcceptedOfferComponent,
    PopUpClaimsComponent,
    LoadgeClaimComponent
  ],
  imports: [
    CommonModule,
    ClaimsCenterRoutingModule,
    MaterialModule,
    NgChartsModule,ReactiveFormsModule
  ]
})
export class ClaimsCenterModule { }
