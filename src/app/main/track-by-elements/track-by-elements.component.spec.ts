import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByElementsComponent } from './track-by-elements.component';

describe('TrackByElementsComponent', () => {
  let component: TrackByElementsComponent;
  let fixture: ComponentFixture<TrackByElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackByElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackByElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
