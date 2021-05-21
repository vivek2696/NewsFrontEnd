import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup;
  disabledSubmitButton: boolean = true;

  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {

    if (this.registerForm.valid) {
      this.disabledSubmitButton = false;
      }
  }


  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _router: Router
  ) {

    this.registerForm = this.fb.group({
      'name': ['', [Validators.required, Validators.pattern("[a-zA-z ]*")]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registerForm.invalid){
      alert('Please fill the form!');
      return;
    }
    else{
      //send data to backend!!
      console.log('sending the information: ', this.registerForm.value);
      this._adminService.register(this.registerForm.value).subscribe(res => {
        if(res){
          alert('Registered Successfully!');
        }
      },(error) => {
        alert('Some Error Occurred!');
      })
    }
  }

}
