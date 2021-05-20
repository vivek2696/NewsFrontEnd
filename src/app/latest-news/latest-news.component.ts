import { Component, Input, OnInit } from '@angular/core';
import { NewsTypeCommunicationService } from '../services/communication/news-type-communication.service';

@Component({
  selector: 'latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  @Input() newsType = '';

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
