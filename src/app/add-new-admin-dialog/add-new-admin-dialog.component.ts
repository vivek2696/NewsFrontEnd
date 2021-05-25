import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';
import { ConfirmPasswordValidator } from '../_helpers/mismatch.validator'

@Component({
  selector: 'app-add-new-admin-dialog',
  templateUrl: './add-new-admin-dialog.component.html',
  styleUrls: ['./add-new-admin-dialog.component.css']
})
export class AddNewAdminDialogComponent implements OnInit {

  addForm: FormGroup;
  isSports: FormControl =  new FormControl('', [Validators.required]);
  submitting: boolean;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewAdminDialogComponent>,
    private _adminService: AdminService
  ) { 
    this.submitted = false;
    this.submitting = false;
  }
  
  get f() { return this.addForm.controls; }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword
    })
  }

  onClose(){
    this.dialogRef.close(false);
  }

  onAddAdmin(){
    if(this.addForm.invalid){
      this.submitting = true;
      return;
    }
    else{
      this.submitted = true;

      this._adminService.register(this.addForm.value).subscribe(res => {
        if(res){
          this.dialogRef.close(true);
        }
      })
    }
  }

}
