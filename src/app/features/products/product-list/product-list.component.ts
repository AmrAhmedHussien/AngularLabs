import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { productService } from 'src/app/_services/product.service';

import { Product } from '../../../_models/product.model'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productArray!: Product[] 
 

  @Output()
  itemAddedFromProductList:EventEmitter<Product>=new EventEmitter<Product>();
  onItemAdded(ev:Product){
    
    this.itemAddedFromProductList.emit(ev);
  }
  constructor(private productService:productService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productArray=res.product;
      },
      (err)=>{
        console.log(err);
        
      },
      ()=>{}
    )
  }
}
