import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//import {  HostListener } from '@angular/core';
//import { ConnectionService } from '../connection.service';
import { first } from 'rxjs/operators';
import { contactUs } from '../modals/contactus';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SportsService} from '../services/sports.service';
import { AlertService} from '../alert.service';
import { Router, ActivatedRoute } from '@angular/router';

import { HostListener } from '@angular/core';
import { ConnectionService } from '../services/connection.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  disabledSubmitButton: boolean = true;

  contactUs:contactUs;



  //Listener for checking if form is valid or not
  @HostListener('input') oninput() {


    if (this.form.valid) {

      this.disabledSubmitButton = false;
    }
  }




  constructor(
    private formBuilder: FormBuilder, 
    private connectionService: ConnectionService, 
    private sportsService: SportsService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
    
    ) {
    this.form = formBuilder.group({
      'email': ['', Validators.required],
      'query': ['', Validators.required]
      });
   }

   onSubmit() {
     
    this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        
        this.sportsService.addingQuery(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Query sent successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
      
// =======
//   constructor(
//     private fb: FormBuilder,
//     private connectionService: ConnectionService
//   ) {
//     //Contact form builder
//     this.contactForm = fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       query: ['', Validators.required],
//     });
// >>>>>>> master
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  ngOnInit(): void {}
}
