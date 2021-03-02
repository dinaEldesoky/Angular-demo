import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylingDirective } from './Components/Directives/styling.directive';
import { StylingInputDirective } from './Components/Directives/styling-input.directive';
import { FormatInputPipe } from './Components/Pipes/format-input.pipe';
import { NationalIDPipe } from './Components/Pipes/national-id.pipe';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContuctUsComponent } from './Components/contuct-us/contuct-us.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { NewProductsComponent } from './Components/new-products/new-products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FakeApiComponent } from './Components/fake-api/fake-api.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    StylingDirective,
    StylingInputDirective,
    FormatInputPipe,
    NationalIDPipe,
    OrderMasterComponent,
    OrderDetailComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContuctUsComponent,
    ProductDetailComponent,
    PopUpComponent,
    NewProductsComponent,
    FakeApiComponent,
    AdminComponent,
    CreateProductComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
