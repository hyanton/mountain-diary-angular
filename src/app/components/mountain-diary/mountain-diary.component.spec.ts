import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainDiaryComponent } from './mountain-diary.component';

describe('MountainDiaryComponent', () => {
  let component: MountainDiaryComponent;
  let fixture: ComponentFixture<MountainDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
