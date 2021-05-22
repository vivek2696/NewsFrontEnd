import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl = 'http://localhost:3400/api/regular-news';

  constructor(private _http: HttpClient) {}

  getAllRegularNews() {
    return this._http.get<any[]>(this.baseUrl);
  }
}
