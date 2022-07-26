import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SingupComponent
  },
  {
    path:'**',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
