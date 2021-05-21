import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3300/api';
  private baseUrl2 = 'http://localhost:3400/api/query';
  allQueries: any[];

  constructor(private _http: HttpClient) {}

  login(credentials: any) {
    let loginUrl = this.baseUrl + '/admin/login';
    return this._http.post(loginUrl, credentials);
  }

  register(credentials: any) {
    let registerUrl = this.baseUrl + '/admin/register';
    return this._http.post(registerUrl, credentials);
  }

  getAllQueries() {
    return this._http.get<any[]>(this.baseUrl2);
    //return this.allFoods;
  }

  removeQuery(index: any) {
    console.log(this.baseUrl2 + '/' + index._id);
    return this._http.delete(this.baseUrl2 + '/' + index._id);
  }
}
