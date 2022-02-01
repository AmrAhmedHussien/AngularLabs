import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstproject';
  itemLists:Product[]=[];
  counter=1;
  onItemAdd(ev:Product){
   
    
  }
  
}
