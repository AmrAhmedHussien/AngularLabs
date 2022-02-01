import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../../../_models/product.model'
import { productService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  constructor(private productService:productService) { }
  @Output()
  onItemAddedFromContainer: EventEmitter<Product>=new EventEmitter<Product>();
  onItemAdded(ev:any){
    this.onItemAddedFromContainer.emit(ev);
    
  }
  ngOnInit(): void {
  }

}
