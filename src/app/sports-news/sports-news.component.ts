import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../sports';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})


export class SportsNewsComponent implements OnInit {
  typ: string;
  sub: any;
  news: News[] = [];

  constructor(private route: ActivatedRoute,
    private newsService: SportsService) { }

  ngOnInit() {
    

    this.newsService.getSports().subscribe(posts => {
      this.news = posts
      this.newsService.postsData = posts
    });
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}