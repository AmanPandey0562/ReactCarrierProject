import { SingupComponent } from './../singup/singup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  title = 'material-login';
  constructor(private dialog:MatDialog,private login:LoginServiceService) {
  }
  ngOnInit(): void {
  }
  signupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px'
    this.dialog.open(SingupComponent,dialogConfig);
  }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  getLoginInfo(){
    this.login.getLoginData().subscribe((res)=>{
      console.log(res)
      localStorage.setItem('email',res.email)
    })
  }

}
