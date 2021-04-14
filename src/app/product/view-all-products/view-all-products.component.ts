import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ProductEntity } from '../../models/product-entity';
import { ProductService } from '../../services/product.service';
import {FilterService} from 'primeng/api';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {

  products: ProductEntity[];

  totalRecords: number = 0;

  loading: boolean = true;



  constructor(private productService: ProductService, private filterService : FilterService) {
    this.products = new Array();
  }

  ngOnInit(): void {
    this.productService.retrieveCompanyProducts().subscribe(
      response => {
        this.products = response;
        this.loading = false;
        console.log("Retrieved successfully" + this.products[0].productName);

      },
      error => {
        console.log("Error retrieving products : " + error);
      }
    );

    this.totalRecords = this.products.length;


  }

  applyFilterGlobal($event: any, stringVal: string, dt: any) {
    console.log("It has been entered Filter successfully!!!");
    dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
    console.log("It has been filterd successfully!!!");

  }







}
