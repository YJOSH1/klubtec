import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionFeesComponent } from './competition-fees.component';

describe('CompetitionFeesComponent', () => {
  let component: CompetitionFeesComponent;
  let fixture: ComponentFixture<CompetitionFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
