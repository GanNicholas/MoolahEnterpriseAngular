import { CreateProductComponent } from './product/create-product/create-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';


import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';

import { IndexComponent } from './index/index/index.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMyCompanyDetailsComponent } from './company/view-my-company-details/view-my-company-details.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { AccessRightErrorComponent } from './access-right-error/access-right-error/access-right-error.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ViewProductDetailsComponent } from './product/view-product-details/view-product-details.component';
import { ViewCurrentPayableComponent } from './view-current-payable/view-current-payable.component';
import { BadgeModule } from 'primeng/badge';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ViewMyCompanyDetailsComponent,
    CreateProductComponent,
    AccessRightErrorComponent,
    ViewProductDetailsComponent,
    ViewCurrentPayableComponent,
    MakePaymentComponent,
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
    ToastModule,
    FileUploadModule,
    ConfirmDialogModule,
    DialogModule,
    SplitButtonModule,
    BadgeModule,
    CalendarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
