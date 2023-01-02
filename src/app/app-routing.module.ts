import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import {LoginUserComponent } from './user/components/login-user/login-user.component';
import {SearchComponent } from './search/search/search.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'login-user' , component:LoginUserComponent },
  {path:'Search' , component: SearchComponent},
  {path:"**" , redirectTo:"products" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
