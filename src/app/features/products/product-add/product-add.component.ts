import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { category } from 'src/app/_models/category.model';
import { payementType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodService } from 'src/app/_services/payment-method.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product = {} as Product;
  constructor(private categoryService:CategoryService,private paymentMethods:PaymentMethodService) { }
  getAllCategories():category[]{
    return this.categoryService.getAllCategories();
  }
  paymentType!:payementType[];
  getAllPaymentTypes():payementType[]{
    return this.paymentMethods.getAllPaymentMethods();
  }
  categories!:category[];
  ngOnInit(): void {
    this.categories=this.getAllCategories();
    this.paymentType=this.getAllPaymentTypes();
    this.product={
      _id: 1,
      data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
      price: 100, 
      discount: 10, 
      imagesUrls: ['https://picsum.photos/200/300'], 
      category:{id:1,name:'category1'},
      paymentType:[{id:1,name:'visa'}],
      tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
      counter: 0
  };
  }
  onCheckBoxChanged(i:number){
    console.log( this.paymentType[i]);
    
  }
  onFormSubmit(va:any):void{
    console.log(va);
    
  }
}
