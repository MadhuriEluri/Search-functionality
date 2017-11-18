import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1.component';
import {SearchbarComponent} from './Searchanddisplay/searchbar.component';
import { DisplayresultsComponent } from './Searchanddisplay/display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    SearchbarComponent,
    DisplayresultsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    Assignment1Component,
    SearchbarComponent,
    DisplayresultsComponent
  ],
})
export class AppModule { }
