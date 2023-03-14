import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherReportMainComponent } from './Components/weather-report-main/weather-report-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
