import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibabejelentesComponent } from './hibabejelentes.component';

describe('HibabejelentesComponent', () => {
  let component: HibabejelentesComponent;
  let fixture: ComponentFixture<HibabejelentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HibabejelentesComponent]
    });
    fixture = TestBed.createComponent(HibabejelentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
