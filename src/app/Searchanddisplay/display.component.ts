import {Component,Input} from '@angular/core';

@Component({
    selector:'displayresults',
    templateUrl:'./display.component.html'
})

export class DisplayresultsComponent{
    countries: string[] = ['Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia','India', 'USA', 'UK', 'Spain', 'France', 
 'Greece','Sri Lanka', 'Nepal','China','Japan','Russia', 'Paris','Netherlands',
 'Germany','Switzerland','Mexico','Bolivia','Cuba','Fiji','Russia','Dubai','Abu-dabi',
'Thailand','Hongkong','London','Venice'
];
    result: string[] = [];
    showList: boolean = true;
    
    @Input() finalSearch: string;

ngOnChanges() {
this.result = this.countries.filter(value=> value.startsWith(this.finalSearch));
console.log(this.result.length);
if(this.result.length > 0){
    this.showList= false;
}
}

}