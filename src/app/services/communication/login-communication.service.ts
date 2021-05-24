import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginCommunicationService {

  adminLoggedIn: EventEmitter<any>;

  constructor() { 
    this.adminLoggedIn = new EventEmitter<any>();
  }

  raiseAdminLoginEvent(){
    this.adminLoggedIn.emit(true);
  }

}
