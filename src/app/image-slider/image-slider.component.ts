import { Component, OnInit } from '@angular/core';
import { NewsInterface } from '../models/news.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  newsList: NewsInterface[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllRegularNews().subscribe((newsArray) => {
      // TODO have to sort based on time for latest news
      //let tempArray = newsArray.sort(a)
      this.newsList = newsArray;
    });
  }
}
