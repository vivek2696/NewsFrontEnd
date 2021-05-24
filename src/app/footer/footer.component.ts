import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  hideChat = false;

  constructor() {}

  ngOnInit(): void {}

  chatToggle() {
    if (!this.hideChat) this.hideChat = true;
    else this.hideChat = false;
    console.log(this.hideChat);
  }
}
