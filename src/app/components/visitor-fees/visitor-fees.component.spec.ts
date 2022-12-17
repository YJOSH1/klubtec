import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFeesComponent } from './visitor-fees.component';

describe('VisitorFeesComponent', () => {
  let component: VisitorFeesComponent;
  let fixture: ComponentFixture<VisitorFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
