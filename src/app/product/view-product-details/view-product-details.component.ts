import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from 'src/app/models/product-entity';
import { SessionService } from 'src/app/services/session.service';
import { ProductService } from 'src/app/services/product.service';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {
  productId: string | null;
  productToView: ProductEntity;
  retrieveProductError: boolean;



  constructor(private sessionService: SessionService,
    private productService: ProductService,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) {

    this.productId = null;
    this.productToView = new ProductEntity(new Array(), new Array(), new Array(), new Array(),0,0,0,0);

    this.retrieveProductError = false;

  }

  ngOnInit(): void {

    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');

    if (this.productId != null) {
      this.productService.retrieveSpecificProduct(parseInt(this.productId)).subscribe(
        response => {
          this.productToView = response;
        },
        error => {
          this.retrieveProductError = true;
          console.log("Error for Product Details: " + error);
        }
      );
    }


  }

}
