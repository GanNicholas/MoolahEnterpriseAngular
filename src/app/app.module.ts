import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';

import { IndexComponent } from './index/index/index.component';
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    InputTextModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
