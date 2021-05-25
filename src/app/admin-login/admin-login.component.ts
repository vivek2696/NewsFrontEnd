import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LoginCommunicationService } from '../services/communication/login-communication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  disabledSubmitButton: boolean = true;
  submitting: boolean;
  submitted: boolean;

  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {
    if (this.loginForm.valid) {
      this.disabledSubmitButton = false;
      }
  }


  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _router: Router,
    private _loginCommunication: LoginCommunicationService,
    private _loginSnackBar: MatSnackBar
  ) {

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    if(this.loginForm.invalid){
      this.submitting = true;
      return;
    }
    else{
      //send data to backend!!\
      this.submitted = true;
      this._adminService.login(this.loginForm.value).subscribe(res => {
        if(res){
          this._loginCommunication.raiseAdminLoginEvent();
          this._loginSnackBar.open("Login Successfull!!","", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']});
          this._router.navigate(['/admin-home']);
        }
      }, (error) => {
        this._loginSnackBar.open("Error! "+error.error.msg,"", {duration: 5000, verticalPosition: 'top', panelClass: ['error-snackbar']});
      })
    }
  }

}
