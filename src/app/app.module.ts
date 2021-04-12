import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';

import { IndexComponent } from './index/index/index.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessRightErrorComponent } from './access-right-error/access-right-error/access-right-error.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ViewProductDetailsComponent } from './product/view-product-details/view-product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CreateProductComponent,
    AccessRightErrorComponent,
    ViewProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
