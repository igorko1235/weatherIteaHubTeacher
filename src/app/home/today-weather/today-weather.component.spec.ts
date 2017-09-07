import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherComponent } from './today-weather.component';

describe('TodayWeatherComponent', () => {
  let component: TodayWeatherComponent;
  let fixture: ComponentFixture<TodayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
