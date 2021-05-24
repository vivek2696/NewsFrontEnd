import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsTypeCommunicationService {

  newsType: EventEmitter<string>;
  newsLoaded: EventEmitter<boolean>;

  constructor() {
    this.newsType = new EventEmitter<string>();
    this.newsLoaded = new EventEmitter<boolean>();
  }

  raiseNormalNewsTypeEvent(){
    this.newsType.emit('normal');
  }

  raiseSportsNewsTypeEvent(){
    this.newsType.emit('sports');
  }

  raiseNewsLoadedEvent(){
    this.newsLoaded.emit(true);
  }

}
