import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  icon;
  weather;
  main;
  temp;
  apiKey = '';
  url = '';
  data;
  name;

  constructor(private http: HttpClient) { 
    this.getCurrentWeather().subscribe(data => {
      console.log(data);
      this.temp = data.main.temp;
      this.name = data.name;
      console.log(this.temp);
      console.log(this.name);
      this.weather = data.weather[0].main;
      console.log(this.weather);
      this.icon = data.weather[0].icon;
      console.log(this.icon);
  });
  }

  public getCurrentWeather():Observable<any>{
    return this.http.get("http://localhost:3400/api/weather");
  }
  
}
