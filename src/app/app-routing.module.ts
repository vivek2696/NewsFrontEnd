import { NgModule, QueryList } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { WeatherReportComponent } from './weather-report/weather-report.component';
import { AdminQueryComponent } from './admin-query/admin-query.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },

  { path: 'admin-login', component: AdminLoginComponent  },
  { path: 'admin-register', component: AdminRegisterComponent  },
  { path: 'admin-home', component:  AdminHomeComponent},
  { path: 'queryList', component: AdminQueryComponent },
  { path: 'weather', component: WeatherReportComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
