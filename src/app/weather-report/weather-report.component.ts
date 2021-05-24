import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {WeatherService} from '../services/weather.service';
@Component({
  selector: 'weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  weather = "";
  name= "";
  temp;
  icon;
  wind;
  humidity;
 
  constructor(private weatherService:WeatherService,private http: HttpClient, private router: Router) {
     
   }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather().subscribe(data => {
      console.log(data);
      this.weather = this.weatherService.weather;
      this.name = this.weatherService.name;
      this.temp = this.weatherService.temp;
      this.icon = this.weatherService.icon;
      this.wind = this.weatherService.wind;
      this.humidity = this.weatherService.humidity;
    })
  }

}

//2d0f6c1690b52987ab30046afb01bc39
