import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportMainComponent } from './weather-report-main.component';

describe('WeatherReportMainComponent', () => {
  let component: WeatherReportMainComponent;
  let fixture: ComponentFixture<WeatherReportMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherReportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
