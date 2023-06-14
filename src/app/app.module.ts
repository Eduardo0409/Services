import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
    ]),
  ],
  declarations: [
    RootComponent, 
    NavbarComponent, 
    HomeComponent, 
    AboutComponent,
  ],
  bootstrap: [RootComponent],
  providers: [TimerService],
})
export class AppModule { }