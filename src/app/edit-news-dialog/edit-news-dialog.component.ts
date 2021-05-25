import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INews } from '../Models/News';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-news-dialog',
  templateUrl: './edit-news-dialog.component.html',
  styleUrls: ['./edit-news-dialog.component.css']
})
export class EditNewsDialogComponent implements OnInit {

  editForm: FormGroup;
  editNews: INews;
  submitted: boolean;
  submitting: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditNewsDialogComponent>,
    private _adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public data: INews
  ) { 
    console.log(data);
    this.submitted = false;
    this.submitting = false;
    this.editNews = data;
    this.editForm = this.fb.group({
      title: [this.editNews.title, [Validators.required]],
      description: [this.editNews.description, [Validators.required]],
      url: [this.editNews.url, [Validators.required]],
      image_url: [this.editNews.image_url, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(false);
  }

  get f() { return this.editForm.controls; }

  onEditNews(){
    if(this.editForm.invalid){
      this.submitting = true;
      return;
    }
    else{
      this.submitted = true;
      this._adminService.editNews(this.data._id, this.editForm.value).subscribe(res => {
        if(res){
          this.dialogRef.close(true);
        }
      })
    }
  }

}
