import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiTourDetailComponent } from './ski-tour-detail.component';

describe('SkiTourDetailComponent', () => {
  let component: SkiTourDetailComponent;
  let fixture: ComponentFixture<SkiTourDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiTourDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiTourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
