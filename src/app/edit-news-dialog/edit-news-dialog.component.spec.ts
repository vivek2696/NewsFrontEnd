import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsDialogComponent } from './edit-news-dialog.component';

describe('EditNewsDialogComponent', () => {
  let component: EditNewsDialogComponent;
  let fixture: ComponentFixture<EditNewsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNewsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
