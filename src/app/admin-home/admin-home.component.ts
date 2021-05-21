import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  allQueries: any[];

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllQueries().subscribe((data) => {
      this.allQueries = data;
      console.log(this.allQueries);
    });
  }

  onRegisterButton() {
    this.router.navigate(['/admin-register']);
  }
}
