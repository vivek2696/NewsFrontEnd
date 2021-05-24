import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './services/connection.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FahrenheitPipe } from './fahrenheit.pipe';
import { MomentPipe } from './moment.pipe';
import { WeatherReportComponent } from './weather-report/weather-report.component';

//import { MaterialModule } from '@angular/material';
//import { MdSelectModule } from '@angular/material';
@NgModule({
  declarations: [
    
    AppComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    WeatherReportComponent,
    LatestNewsComponent,
    ImageSliderComponent,
    HomeComponent,
    ErrorComponent,
    SportsComponent,
    AboutUsComponent,
    ChatComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminHomeComponent,
    FahrenheitPipe,
    MomentPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule, 
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
