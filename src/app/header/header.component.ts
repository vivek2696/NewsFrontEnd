import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCommunicationService } from '../services/communication/login-communication.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdminLoggedIn: boolean;

  constructor(
    private _loginCommunication: LoginCommunicationService,
    private _router: Router,
  ) {
    this.isAdminLoggedIn = false;
  }

  ngOnInit(): void {
    this._loginCommunication.adminLoggedIn.subscribe(res => {
      if(res){
        this.isAdminLoggedIn = true;
      }
    })
  }

  onLogoClick(){
    if(this.isAdminLoggedIn){
      this._router.navigate(['/admin-home']);
    }
    else{
      this._router.navigate(['/home']);
    }
  }

}
