import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  newsObj: any = { title: '', description: '', image_url: '', createdAt: '' };
  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      console.log(data);
    });

    this.activatedRoute.params.subscribe((params) => {
      console.log(params['name']);
      this.newsService
        .getNewsArticleByURL(params['name'])
        .subscribe((newsData) => {
          this.newsObj = newsData;
          console.log(newsData);
        });
    });
  }
}
