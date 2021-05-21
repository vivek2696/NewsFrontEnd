import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  HostListener } from '@angular/core';
import { ConnectionService } from '../services/connection.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
  }



  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    //Contact form builder
    this.contactForm = fb.group({
      'contactFormEmail': ['', [Validators.required, Validators.email]],
      'contactFormMessage': ['', Validators.required],
      });
   }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {
  }

}
