import { LoginServiceService } from './../../services/login-service.service';
import { SnackBarService } from './../../services/snack-bar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signUpForm:any = FormBuilder;
  responseMsg:any;

  constructor(private formBuilder:FormBuilder, private _route:Router, private snackBar:SnackBarService, private dialogRef:MatDialogRef<SingupComponent>, private ngxSer:NgxUiLoaderService, private registerSer:LoginServiceService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }

  handleSubmitButton(){
    this.ngxSer.start();
    var formData = this.signUpForm.value;
    var data = {
      firstName:formData.firstName,
      lastName:formData.lastName,
      email:formData.email,
      password:formData.password,

    }
this.registerSer.sendSignUpData(data).subscribe((res)=>{
  this.ngxSer.stop();
  this.dialogRef.close();
  this.responseMsg = res?.message
  this.snackBar.openSnackBar(this.responseMsg,"");
  this._route.navigate(['/']);
}, (error)=>{
  this.ngxSer.stop();
  if(error.error?.message){
    this.responseMsg = error.error?.message
  } else{
    console.log("error")
  }
  this.snackBar.openSnackBar(this.responseMsg,"")
})
  }

}
