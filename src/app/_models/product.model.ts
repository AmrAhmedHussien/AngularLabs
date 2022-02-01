import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { category } from "./category.model";
import { payementType } from "./payment-type.model";
import { productLang } from "./product-lang.model";
import { tags } from "./tags.model";

export interface Product{
    _id:number,
    data:productLang[],
    price: number,
    discount?: number,
    imagesUrls:String[],
    category:category,
    counter?:number,
    paymentType:payementType[],
    tags:tags[]
}