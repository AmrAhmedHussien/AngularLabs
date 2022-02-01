import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ProductItemComponent } from 'src/app/features/products/product-item/product-item.component';
import { Product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartIsOpen=false;
  
  constructor(private productService:productService) { }
  theAddedProduct!:Product[];
 
  delete(i:number){
    this.productService.removeFromCart(i);
   
    
  }
  ngOnInit(): void {
    this.theAddedProduct=this.productService.cartArray;
  }

}
