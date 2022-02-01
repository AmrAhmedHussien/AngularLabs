import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home',component:ProductListContainerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'product',children:[
    {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductAddComponent}
  ]},
  
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
