import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { INews } from '../Models/News';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditNewsDialogComponent } from '../edit-news-dialog/edit-news-dialog.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {

  allNews: INews[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _adminService: AdminService,
    private dialog: MatDialog,
    private adminService: AdminService
  ) {
    this.allNews = [];
  }

  ngOnInit() {
    this.fetchAllNews();
  }

  onAddNews(){
    this.router.navigate(['/addNewNews']);
  }

  fetchAllNews(){
    this._adminService.getAllNews().subscribe(res => {
      if(res){
        this.allNews = res;
      }
    })
  }

  onDeleteNews(newsId: string){
    this._adminService.delete(newsId).subscribe(res => {
      if(res){
        console.log('Deleted Successfully!');
        this.fetchAllNews();
      }
    })
  }

  onEditNews(news: INews){
    const dialogRef = this.dialog.open(EditNewsDialogComponent, {
      width: '840px',
      data: news
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        console.log('News Edited sucessfully!');
        this.fetchAllNews();
      }
    });
  } 
}
