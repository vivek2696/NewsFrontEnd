import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAdminDialogComponent } from './add-new-admin-dialog.component';

describe('AddNewAdminDialogComponent', () => {
  let component: AddNewAdminDialogComponent;
  let fixture: ComponentFixture<AddNewAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
