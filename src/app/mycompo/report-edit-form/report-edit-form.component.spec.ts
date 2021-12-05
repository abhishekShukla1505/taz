import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEditFormComponent } from './report-edit-form.component';

describe('ReportEditFormComponent', () => {
  let component: ReportEditFormComponent;
  let fixture: ComponentFixture<ReportEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
