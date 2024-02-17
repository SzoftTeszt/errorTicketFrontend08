import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReportComponent } from './error-report.component';

describe('ErrorReportComponent', () => {
  let component: ErrorReportComponent;
  let fixture: ComponentFixture<ErrorReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorReportComponent]
    });
    fixture = TestBed.createComponent(ErrorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
