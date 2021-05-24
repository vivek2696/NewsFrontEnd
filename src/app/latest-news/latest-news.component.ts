import { Component, Input, OnInit } from '@angular/core';
import { NewsTypeCommunicationService } from '../services/communication/news-type-communication.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  allNews: any[];

  @Input() newsType = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews();
  }
  fetchNews() {
    this.newsService.getAllRegularNews().subscribe((data) => {
      this.allNews = data.slice(3, data?.length);
      console.log(this.allNews);
    });
  }
}
