import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ContuctUsComponent } from './Components/contuct-us/contuct-us.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { FakeApiComponent } from './Components/fake-api/fake-api.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { NewProductsComponent } from './Components/new-products/new-products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path:'Home' , component: ProductsComponent},
  {path:'Products' , component : OrderMasterComponent},
  {path:'ProductsDetail/:pId' ,component:ProductDetailComponent},
  {path:'PopupProducts/:pId' , component:PopUpComponent},
  {path:'About' ,component :NewProductsComponent},
  {path : 'Contuct' , component :ContuctUsComponent},
  {path : 'Fake' , component :FakeApiComponent},
  {path : 'Admin' , component :AdminComponent},
  {path:'createProduct',component:CreateProductComponent},
  {path:'login',component:LoginFormComponent},
  {path:'' ,redirectTo:'/Home' ,pathMatch:'full'}, 
  {path:"**" , component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
