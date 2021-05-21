import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  disabledSubmitButton: boolean = true;

  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {

    if (this.loginForm.valid) {
      this.disabledSubmitButton = false;
      }
  }


  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _router: Router
  ) {

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.invalid){
      alert('Please fill the form!');
      return;
    }
    else{
      //send data to backend!!\
      console.log('sending the information: ', this.loginForm.value);
      this._adminService.login(this.loginForm.value).subscribe(res => {
        if(res){
          this._router.navigate(['/admin-home']);
        }
      }, (error) => {
        alert('Error! '+error.error.msg);
      })
    }
  }

}
