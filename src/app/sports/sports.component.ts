import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  allSportsNews: any[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchSportsNews();
  }

  fetchSportsNews() {
    this.newsService.getAllSportsNews().subscribe((data) => {
      this.allSportsNews = data;
      console.log(this.allSportsNews);
    });
  }
}
