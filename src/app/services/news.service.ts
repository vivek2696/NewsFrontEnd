import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'http://localhost:3400/api/';
  private baseUrl = 'http://localhost:3400/api/regular-news';

  constructor(private http: HttpClient) {}

  getAllNews() {
    const getNewsURL = this.url + 'regular-news';
    return this.http.get(getNewsURL);
  }

  getNewsArticleByURL(articleURL) {
    const fullArticleURL = this.url + '/news/url/' + articleURL;
    return this.http.get(fullArticleURL);
  }

  getAllRegularNews() {
    return this.http.get<any[]>(this.baseUrl);
  }
}
