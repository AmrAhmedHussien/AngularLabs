import { Injectable } from '@angular/core';
import { payementType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  paymentMethod:payementType[]=[
    {id:1,name:'visa'},
    {id:2,name:'masterCard'},
    {id:3,name:'paypal'},
    {id:4,name:'American express'},
    {id:5,name:'cash'}
  ];
  constructor() { }
  getAllPaymentMethods(): payementType[]{
    return this.paymentMethod.splice(0);
  }
}
