import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  submitting: boolean;
  submitted: boolean;

  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService,
    private _contactSnackBar: MatSnackBar
  ) {
    //Contact form builder
    this.contactForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required],
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    if(this.contactForm.invalid){
      this.submitting = true;
      return;
    }
    else{
      this.connectionService.sendMessage(this.contactForm.value).subscribe(
        () => {
          this._contactSnackBar.open("Your message sent successfully!", "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']});
          this.submitting = false;
          this.contactForm.reset();
        },
        (error) => {
          this._contactSnackBar.open("Error Sending Message", "", {duration: 5000, verticalPosition: 'top', panelClass: ['error-snackbar']});
        }
      );
    }
  }

  ngOnInit(): void {}
}
