import { ViewMyCompanyDetailsComponent } from './company/view-my-company-details/view-my-company-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { IndexComponent } from './index/index/index.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'company/createCompany', component: CreateCompanyComponent },
  { path: 'company/viewMyCompanyDetails', component: ViewMyCompanyDetailsComponent},
  { path: 'product/createProduct', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
