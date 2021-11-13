import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashtalkComponent } from './trashtalk.component';

describe('TrashtalkComponent', () => {
  let component: TrashtalkComponent;
  let fixture: ComponentFixture<TrashtalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashtalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
