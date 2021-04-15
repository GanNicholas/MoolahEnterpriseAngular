import { Component, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ProductEntity } from '../../models/product-entity';
import { ProductService } from '../../services/product.service';
import { FilterService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {

  products: ProductEntity[];

  totalRecords: number = 0;

  loading: boolean = true;

  categoryTypes: any[];


  constructor(private productService: ProductService, private filterService: FilterService, private datepipe: DatePipe) {
    this.products = new Array();
    this.categoryTypes = new Array();
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

    this.categoryTypes = [
      { label: "ENDOWMENT", value: "ENDOWMENT" },
      { label: "TERMLIFE", value: "TERMLIFE" },
      { label: "WHOLELIFE", value: "WHOLELIFE" }
    ];


  }

  applyFilterGlobal($event: any, stringVal: string, dt: any) {
    console.log("It has been entered Filter successfully!!!");
    dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
    console.log("It has been filterd successfully!!!");

  }


  getDateString(dateToTransform: Date): Date {
    var temp = dateToTransform.toString();
    temp = temp.substring(0, 9);
    var tempDate = new Date(temp);
    console.log(tempDate);
    return this.getDate(formatDate(tempDate, "mediumDate", "en-US"));

  }


  getDate(dateToTransform: string): Date {
    var temp = dateToTransform.toString();
    temp = temp.substring(0, 9);
    console.log("String date: " + temp);
    let tempDate: Date = new Date(temp);
    console.log(tempDate + " Date Type: " + typeof (tempDate));
    return tempDate;
  }

}
