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
  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;

  productId: string | null;
  productToView: ProductEntity;
  retrieveProductError: boolean;


  toggleProductName: boolean = true;
  toggleProductDescription: boolean = true;
  toggleCoverageTerm: boolean = true;
  toggleAssuredSum: boolean = true;
  togglePremiumTerm: boolean = true;
  toggleAverageInterestRate: boolean = true;
  togglePolicyCurrency: boolean = true;
  toggleIsAvailableToSmoker: boolean = true;
  toggleAdditionalFeatures: boolean = true;
  toggleRider: boolean = true;
  togglePremium: boolean = true;
  toggleSmokerPremium: boolean = true;


  constructor(private sessionService: SessionService,
    private productService: ProductService,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    if (sessionService.getIsLogin() == false) {
      this.router.navigate(["/index"]);
    }
    this.productId = null;
    this.productToView = new ProductEntity(new Array(), new Array(), new Array(), new Array(), 0, 0, 0, 0);

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

  updateProduct(updateProductForm: NgForm) {

  }

  saveProductName() {
    this.toggleProductName = false;
  }


  


}
