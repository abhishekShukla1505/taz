import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnevbarComponent } from './leftnevbar.component';

describe('LeftnevbarComponent', () => {
  let component: LeftnevbarComponent;
  let fixture: ComponentFixture<LeftnevbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftnevbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnevbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
