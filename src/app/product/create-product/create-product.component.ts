import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CompanyEntity } from 'src/app/models/company-entity';
import { EndowmentProductEnum } from 'src/app/models/enums/endowment-product-enum.enum';
import { TermLifeProductEnum } from 'src/app/models/enums/term-life-product-enum.enum';
import { WholeLifeProductEnum } from 'src/app/models/enums/whole-life-product-enum.enum';
import { ProductEntity } from 'src/app/models/product-entity';
import { WholeLifeProductEntity } from 'src/app/models/whole-life-product-entity';
import { CompanyService } from 'src/app/services/company.service';
import { ProductService } from 'src/app/services/product.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: ProductEntity;
  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;
  wholeLifeEnum: WholeLifeProductEnum | undefined;
  termLifeEnum: TermLifeProductEnum | undefined;
  endowmentEnum: EndowmentProductEnum | undefined;

  constructor(private sessionService: SessionService,
    private productService: ProductService,
    private passwordModule: PasswordModule,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService) {
    this.product = new ProductEntity();
    this.product.company = this.sessionService.getCompany();
    this.product.productId = null;
    this.product.productImage = null;
    this.product.productDateCreated = new Date();
    this.product.listOfAdditionalFeatures = new Array();
    this.product.listOfRiders = new Array();
    this.product.listOfPremium = new Array();
    this.product.listOfSmokerPremium = new Array();
  }

  ngOnInit(): void {
  }

  createProduct(createProductForm: NgForm): void {
    this.submitted = true;
    if (createProductForm.valid) {
      if (this.wholeLifeEnum != undefined) {
        let wholeLifeProd = new WholeLifeProductEntity(this.wholeLifeEnum, this.product.productName, this.product.coverageTerm, this.product.assuredSum, this.product.description, this.product.premiumTerm, 
          this.product.averageInterestRate, this.product.policyCurrency, this.product.isAvailableToSmoker, this.product.productCategoryPricing, this.product.clickThroughInfo, this.product.company);
      } else if (this.termLifeEnum != undefined) {

      } else if (this.endowmentEnum != undefined) {

      }

      this.productService.createProduct(this.product).subscribe(
        response => {
          let productId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Product " + productId + " created successfully";

          this.companyService.retrieveCompany().subscribe(
            responseInner => {
              let company: CompanyEntity = responseInner;
              this.sessionService.setCompany(company);
            },
            error => {
              console.log("Error retrieving company : " + error);
            }
          );
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error occured while created product: " + error;
        }
      );
    }



  }

}
