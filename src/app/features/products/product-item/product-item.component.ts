import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { productService } from 'src/app/_services/product.service';
import { Product } from '../../../_models/product.model'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!:Product;
  cart!:Product;
  @Output()
  itemAdded: EventEmitter<Product>=new EventEmitter<Product>();
  
  constructor(private productService:productService) { }
  
  onAddToCartPressed(){
    if (!this.product.counter) {
      this.product.counter=0;
    }
    this.product.counter!+=1;
    //this.itemAdded.emit(this.product);
    this.productService.addToCart(this.product);
  }
  ngOnInit(): void {
  }

}
