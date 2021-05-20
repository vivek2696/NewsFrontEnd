import { Component, OnInit } from '@angular/core';
import { NewsTypeCommunicationService } from '../services/communication/news-type-communication.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
