import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNewsDialogComponent } from './add-new-news-dialog.component';

describe('AddNewNewsDialogComponent', () => {
  let component: AddNewNewsDialogComponent;
  let fixture: ComponentFixture<AddNewNewsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewNewsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewNewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
