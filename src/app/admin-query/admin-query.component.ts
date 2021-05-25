import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  styleUrls: ['./admin-query.component.css'],
})
export class AdminQueryComponent implements OnInit {
  allQueries: any[];
  constructor(
    private adminService: AdminService,
    private querySnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchQueries();
  }

  removeQuery(index: any) {
    this.adminService.removeQuery(index).subscribe((data) => {
      if (data) {
        this.querySnackBar.open("Deleted Successfully",  "", {duration: 5000, verticalPosition: 'top', panelClass: ['regular-snackbar']});
        this.fetchQueries();
      }
    });
  }

  fetchQueries() {
    this.adminService.getAllQueries().subscribe((data) => {
      this.allQueries = data;
    });
  }
}
