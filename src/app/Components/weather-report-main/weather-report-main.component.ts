import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-weather-report-main',
  templateUrl: './weather-report-main.component.html',
  styleUrls: ['./weather-report-main.component.css']
})

export class WeatherReportMainComponent implements OnInit {
  WeatherData:any;
  countryName:any;
  iconURL:any;
   api= {
    key: "e8c137facdd34df222d27a1522e1c2ce",
    baseurl: "https://api.openweathermap.org/data/2.5/"
  }
  city ='mississauga'
  country='CA'
  getWeatherDataCity(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&units-metric&APPID=e8c137facdd34df222d27a1522e1c2ce').then(response=>response.json())
    .then(data=>{
      console.log(JSON.stringify(data))
      if(data.message==="city not found"){
        alert("Unable to pull location. Please try again.");
      }
      else{
        this.setWeatherData(data);
      }
      //this.setWeatherData(data);
    })
  }

  getWeatherDataCountry(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.city+','+this.country+'&units-metric&APPID=e8c137facdd34df222d27a1522e1c2ce').then(response=>response.json())
    .then(data=>{
      console.log(JSON.stringify(data));
      if(data.message==="city not found"){
      alert("Unable to pull location. Please try again.");
      }
      else{
        this.setWeatherData(data);
      }
    })
  }
  setWeatherData(data: any){
    this.WeatherData=data;
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    let countryName=regionNames.of(this.WeatherData.sys.country);
    this.WeatherData.sys.country=countryName;
    let sunsetTime= new Date(this.WeatherData.sys.sunset*1000)
    this.WeatherData.sunset_time= sunsetTime.toLocaleTimeString();
    let currentDate= new Date();
    this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp-273.15).toFixed(0);
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min-273.15).toFixed(0);
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max-273.15).toFixed(0);
    this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like-273.15).toFixed(0);
    this.WeatherData.date=currentDate.toDateString();
    this.iconURL='https://openweathermap.org/img/wn/'+this.WeatherData.weather[0].icon+'@2x.png';
    
  }
  constructor(){

  }
  ngOnInit() {
    this.getWeatherDataCity();
    console.log(this.WeatherData);
  }
  onEnterCity(event: any){
    this.city=event.target.value;
    this.getWeatherDataCity();
  }
  enterCity(value: any){
    this.city=value;
    console.log(value);
    this.getWeatherDataCity();
  }
  setCountry(data:any){
    this.country=data;
  }
  onEnterCountry(event: any, cityName:string){
    this.city=cityName;
    console.log(this.city);
    if(event.target.value==="USA" || event.target.value==="US" ||event.target.value==="United States"){
      event.target.value="United States of America";
    }
    if(event.target.value==="UK" || event.target.value==="England"){
      event.target.value="United Kingdom";
    }
    fetch('https://restcountries.com/v3.1/name/'+event.target.value).then(response=>response.json())
    .then(response=> this.setCountry(response[0].cca2));
    console.log(this.country);
    this.getWeatherDataCountry();
  }
  enterCountry(event: string, cityName:string){
    this.city=cityName;
    console.log(this.city);
    if(event==="USA" || event==="US" ||event==="United States"){
      event="United States of America";
    }
    if(event==="UK" || event==="England"){
      event="United Kingdom";
    }
    fetch('https://restcountries.com/v3.1/name/'+event).then(response=>response.json())
    .then(response=> this.setCountry(response[0].cca2));
    console.log(this.country);
    this.getWeatherDataCountry();
  }
}

