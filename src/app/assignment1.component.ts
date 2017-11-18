import { Component } from '@angular/core';

@Component({
  selector: 'assignnment1',
  templateUrl: './assignnment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  title = 'My first angular application';
  onFan = false;
  onLight = false;
  onFanClicked(){
    if(this.onFan===false){
    this.onFan = true;
    }else{
      this.onFan =false;
    }
  }
  onLightClicked(){
    if(this.onLight===false){
    this.onLight = true;   
    }else{
      this.onLight =false;
    }
  }
}