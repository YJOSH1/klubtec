import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionFeesComponent } from './components/competition-fees/competition-fees.component';
import { VisitorFeesComponent } from './components/visitor-fees/visitor-fees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionFeesComponent,
    VisitorFeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
