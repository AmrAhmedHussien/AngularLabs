import { Injectable } from "@angular/core";
import { category } from "../_models/category.model";

import { productService } from "./product.service";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
   
    categories : category[]=[
        {id:1,name:'Arts & Crafts'},
        {id:2,name:'Automotive'},
        {id:3,name:'Baby'},
        {id:4,name:'Books'},
        {id:5,name:'Eletronics'},
        {id:6,name:'Men Fashion'},
        {id:7,name:'Women Fashion'}
    ]
    constructor() {}
    getAllCategories():category[] {
        return this.categories.splice(0);
    }
    getCategoryByID(id:number):category|undefined{
        return this.categories.find(category=>category.id === id);
    }
}