import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  styleUrls: ['./admin-query.component.css'],
})
export class AdminQueryComponent implements OnInit {
  allQueries: any[];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchQueries();
  }

  removeQuery(index: any) {
    //console.log(orderId);
    this.adminService.removeQuery(index).subscribe((data) => {
      if (data) {
        alert('Deleted Successfully');
        this.fetchQueries();
      }
    });
    // this.adminService.getAllQueries().subscribe((data) => {
    //   this.allQueries = data;
    //   console.log(this.allQueries);
    // });
    //this.allQueries = this.adminService.getAllQueries();
    // this.adminService.getAllQueries().subscribe((data) => {
    //   this.allQueries = data;
    //   console.log(this.allQueries);
    // });
  }

  fetchQueries() {
    this.adminService.getAllQueries().subscribe((data) => {
      this.allQueries = data;
      console.log(this.allQueries);
    });
  }
}
