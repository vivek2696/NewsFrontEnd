import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { News } from '../modals/sports';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  baseURL = 'http://18.236.77.110/menews/news-json.php';
  public postsData: News[]
  postUrl : string = "http://localhost:3000/sport"; 

  constructor(private http: HttpClient) { }

  getSports(): Observable<News[]>{
    return this.http.get<News[]>(this.postUrl);
    
  }

  addingNews(params) {

    return this.http.post(`${environment.apiUrl}/admin/news`, params);
    
}

addingQuery(params) {
  console.log("entering  adding query")

  return this.http.post(`${environment.apiUrl}/query`, params);
  
}

  getItems(typ: string): Observable<News[]> {
    let items$ = this.http.get(
      `${this.baseURL}?type=${typ}`
    ).map(mapNews);
    return items$
  }

}

function mapNews(response: Response): News[] {
  console.log(response);
  let json = response.json();
  console.log(json);

  var result: News[] = [];
  for (let feed_set of json) {
    for (let feed of feed_set) {
      result.push(toNewsItem(feed));
    }
  }

  console.log(result);
  return result; 
}

function getSrc(img: string): string {
  var regex = /src=['"](.*)['"]\s/g;
  var arr = regex.exec(img);
  // console.log(arr[1]);
  return arr[1];
}

function toNewsItem(json: any): News {
  let item = <News>({
    title: json.title,
    description: json.desc,
    img: getSrc(json.img),
    date: json.date,
    link: json.link[0],
  });
  return item;
}