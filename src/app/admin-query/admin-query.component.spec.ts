import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQueryComponent } from './admin-query.component';

describe('AdminQueryComponent', () => {
  let component: AdminQueryComponent;
  let fixture: ComponentFixture<AdminQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
