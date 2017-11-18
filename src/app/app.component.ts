import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchCriteria = '';
  searchValue(value){
    this.searchCriteria = value;
    console.log("Inside App component" + value);
  }
}
