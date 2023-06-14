import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { MultTableDetalsComponent } from './mult-table-detals/mult-table-detals.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'mult-table', component: MultTableComponent},
      {path: 'mult-table/:n', component: MultTableDetalsComponent},
    ]),
  ],
  declarations: [
    RootComponent, 
    NavbarComponent, 
    MultTableComponent, 
    MultTableDetalsComponent, 
    HomeComponent, 
    AboutComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule { }