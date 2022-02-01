import { EventEmitter } from "@angular/core";
import { Observable, throttleTime } from "rxjs";
import { Product } from "../_models/product.model";
import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
  })
export class productService {
    itemAdded: EventEmitter<any> = new EventEmitter<any>();
    constructor(private httpClient:HttpClient) { }
    /*productArray: Product[] = [
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: 'https://picsum.photos/200/300', 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 2,
            data:[{id:2,name:'product2',description:'product2 description',lang:{id:1,name:'English'}}],
            price: 200, 
            discount: 20, 
            imageURL: ['https://picsum.photos/200/400'], 
            category:{id:2,name:'category2'},
            paymentType:[{id:2,name:'visa2'}],
            tags:[{id:3,name:'tag4'},{id:4,name:'tag3'}],
            counter: 0
        },
        {
            id: 3,
            data:[{id:1,name:'product3',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 300, 
            discount: 30, 
            imageURL: ['https://picsum.photos/200/400'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: ['https://picsum.photos/200/500'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: ['https://picsum.photos/200/600'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: ['https://picsum.photos/200/700'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: ['https://picsum.photos/200/800'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: ['https://picsum.photos/200/900'], 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
        {
            id: 1,
            data:[{id:1,name:'product1',description:'product1 description',lang:{id:1,name:'English'}}],
            price: 100, 
            discount: 10, 
            imageURL: 'https://picsum.photos/300/300', 
            category:{id:1,name:'category1'},
            paymentType:[{id:1,name:'visa'}],
            tags:[{id:1,name:'tag1'},{id:2,name:'tag2'}],
            counter: 0
        },
    ];*/
    
    cartArray: Product[] = [];

    getAllProducts(): Observable<{product:Product[],numberOfProducts:number}> {
        return this.httpClient.get<{product:Product[],numberOfProducts:number}>(environment.baseUrl+'product');
        
    }
    getProductById(id:string):Observable<Product>{
        return this.httpClient.get<Product>(environment.baseUrl+'product/'+id);
    }
    addToCart(product: Product) {
        if (!this.cartArray.includes(product)) {
            this.cartArray.push(product);
        }



        const res = this.cartArray;
        return res;
    }
    updateProduct(id: number) {

    }
    removeFromCart(i: number) {
        if (this.cartArray[i].counter! > 1) {
            this.cartArray[i].counter!--;
        }
        else {
            this.cartArray.splice(i, 1);
        }
    }
}