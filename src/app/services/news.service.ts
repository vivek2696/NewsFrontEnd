import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'http://localhost:3400/api/';

  constructor(private http: HttpClient) {}

  getAllNews() {
    const getNewsURL = this.url + 'regular-news';
    return this.http.get(getNewsURL);
  }

  getNewsArticleByURL(articleURL) {
    const fullAtricleURL = this.url + '/news/url/' + articleURL;
    return this.http.get(fullAtricleURL);
  }
}
