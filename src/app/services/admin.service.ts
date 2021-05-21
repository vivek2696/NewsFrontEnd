import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3300/api';

  constructor(
    private _http: HttpClient
  ) { }

  login(credentials: any){
    let loginUrl = this.baseUrl + '/admin/login';
    return this._http.post(loginUrl, credentials);
  }

  register(credentials: any){
    let registerUrl = this.baseUrl + '/admin/register';
    return this._http.post(registerUrl, credentials);
  }


}
