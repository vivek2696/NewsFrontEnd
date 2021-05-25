import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { INews } from '../Models/News';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-new-news-dialog',
  templateUrl: './add-new-news-dialog.component.html',
  styleUrls: ['./add-new-news-dialog.component.css']
})
export class AddNewNewsDialogComponent implements OnInit {

  addForm: FormGroup;
  isSports: FormControl =  new FormControl('', [Validators.required]);
  submitted: boolean;
  submitting: boolean;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewNewsDialogComponent>,
    private _adminService: AdminService
  ) { 
    this.submitted = false;
    this.submitting = false;
    this.addForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required]],
      image_url: ['', [Validators.required]],
      isSports: this.isSports
    })
  }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close(false);
  }

  get f() { return this.addForm.controls; }

  onAddNews(){
    if(this.addForm.invalid){
      this.submitting = true;
      return;
    }
    else{
      this.submitted = true;

      let newNews: INews = {
        _id: '',
        title: this.addForm.value.title,
        description: this.addForm.value.description,
        url: this.addForm.value.url,
        image_url: this.addForm.value.image_url,
        isSports: this.addForm.value.isSports === 'regular'? false : true,
        createdAt: null,
        updatedAt: null,
      }

      this._adminService.addNews(newNews).subscribe(res => {
        if(res){
          this.dialogRef.close(true);
        }
      })
    }
  }

}
