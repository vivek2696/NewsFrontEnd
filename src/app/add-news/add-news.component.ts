import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Addnews } from '../modals/news';
import { SportsService} from '../services/sports.service';
import { AlertService} from '../alert.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})



export class AddNewsComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    addnews:Addnews;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private sportsService: SportsService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            url: ['', Validators.required],
            image_url: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onAdd() {

        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        
        this.sportsService.addingNews(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('News added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
      
    }

    onReset() {
        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
      
    }
}