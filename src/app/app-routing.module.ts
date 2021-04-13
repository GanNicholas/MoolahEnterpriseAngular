import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewCurrentPayableComponent } from './view-current-payable/view-current-payable.component';
import { ViewMyCompanyDetailsComponent } from './company/view-my-company-details/view-my-company-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { IndexComponent } from './index/index/index.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ViewProductDetailsComponent } from './product/view-product-details/view-product-details.component';
import { AboutUsComponent } from './aboutus/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'company/createCompany', component: CreateCompanyComponent },
  { path: 'company/viewMyCompanyDetails', component: ViewMyCompanyDetailsComponent },
  { path: 'product/createProduct', component: CreateProductComponent },
  { path: 'viewCurrentPayable', component: ViewCurrentPayableComponent},
  { path: 'makePayment', component: MakePaymentComponent},
  { path: 'makePayment/:id', component: MakePaymentComponent},
  { path: 'product/viewProductDetails', component: ViewProductDetailsComponent },
  { path: 'product/viewProductDetails/:productId', component: ViewProductDetailsComponent },
  { path: 'aboutus/aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
