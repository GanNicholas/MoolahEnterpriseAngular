import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {ProductEntity} from '../../models/product-entity';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {

  products: ProductEntity[];

  totalRecords: number = 0;
  
  loading: boolean = true;



  constructor(private productService: ProductService) {
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

  applyFilterGlobal($event : any, stringVal : string) {
    
  
  }

  



  

}
