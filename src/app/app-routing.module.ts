import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
