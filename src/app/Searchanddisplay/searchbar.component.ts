import {Component,Output,EventEmitter} from '@angular/core';

@Component({
selector:'searchbar',
templateUrl:'./searchbar.component.html',
styleUrls:['./searchbar.component.css']
})

export class SearchbarComponent {
    value: string ='';
    @Output('searchEmitter') sendValue = new EventEmitter<string>();
    onEnter(value: string) { 
        this.value = value; 
        console.log(this.value);
        this.sendValue.emit(this.value);
       
    }
    sendSearchValue(){
         this.sendValue.emit(this.value);
         console.log(this.value);
    }
   
}