import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import {MaterialModule} from '../Material/material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION } from 'ngx-ui-loader';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const ngxUiLoader:NgxUiLoaderConfig={
  text:'Loading...',
  textColor:'#FFFFFF',
  textPosition:'center-center',
  pbColor:'red',
  bgsColor:'red',
  fgsColor:'red',
  fgsType:SPINNER.ballSpinClockwise,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
}
@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule, ReactiveFormsModule,NgxUiLoaderModule.forRoot(ngxUiLoader),MatSnackBarModule
  ]
})
export class AuthModule { }
