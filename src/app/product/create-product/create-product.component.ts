import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ClickThroughEntity } from 'src/app/models/click-through-entity';
import { CompanyEntity } from 'src/app/models/company-entity';
import { EndowmentEntity } from 'src/app/models/endowment-entity';
import { EndowmentProductEnum } from 'src/app/models/enums/endowment-product-enum.enum';
import { PolicyCurrencyEnum } from 'src/app/models/enums/policy-currency-enum.enum';
import { TermLifeProductEnum } from 'src/app/models/enums/term-life-product-enum.enum';
import { WholeLifeProductEnum } from 'src/app/models/enums/whole-life-product-enum.enum';
import { FeatureEntity } from 'src/app/models/feature-entity';
import { ProductEntity } from 'src/app/models/product-entity';
import { RiderEntity } from 'src/app/models/rider-entity';
import { TermLifeProductEntity } from 'src/app/models/term-life-product-entity';
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
  policyCurrency: string[] | undefined;

  constructor(private sessionService: SessionService,
    private productService: ProductService,
    private passwordModule: PasswordModule,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService) {
    this.product = new ProductEntity();
    if (this.sessionService.getIsLogin() == true) {
      this.product.company = this.sessionService.getCompany();
    } else {
      this.product.company = null;
    }

    this.product.productId = null;
    this.product.productImage = null;
    this.product.productDateCreated = new Date();
    this.product.listOfAdditionalFeatures = new Array();
    this.product.listOfRiders = new Array();
    this.product.listOfPremium = new Array();
    this.product.listOfSmokerPremium = new Array();
    this.product.productCategoryPricing = null;
    this.product.clickThroughInfo = new ClickThroughEntity();
    this.product.productCategoryPricing = null;
  }

  ngOnInit(): void {
  }

  createProduct(createProductForm: NgForm): void {
    this.submitted = true;
    if (createProductForm.valid) {
      if (this.wholeLifeEnum != undefined) {
        let wholeLifeProd = new WholeLifeProductEntity(this.wholeLifeEnum, this.product.productName, this.product.coverageTerm, this.product.assuredSum, this.product.description, this.product.premiumTerm,
          this.product.averageInterestRate, this.product.policyCurrency, this.product.isAvailableToSmoker, this.product.clickThroughInfo, this.product.company);

        this.productService.createProduct(wholeLifeProd).subscribe(
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

      } else if (this.termLifeEnum != undefined) {

        let termLifeProd = new TermLifeProductEntity(this.termLifeEnum, this.product.productName, this.product.coverageTerm, this.product.assuredSum, this.product.description, this.product.premiumTerm,
          this.product.averageInterestRate, this.product.policyCurrency, this.product.isAvailableToSmoker, this.product.clickThroughInfo, this.product.company);

        this.productService.createProduct(termLifeProd).subscribe(
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

      } else if (this.endowmentEnum != undefined) {
        let endowmentProd = new EndowmentEntity(this.endowmentEnum, this.product.productName, this.product.coverageTerm, this.product.assuredSum, this.product.description, this.product.premiumTerm,
          this.product.averageInterestRate, this.product.policyCurrency, this.product.isAvailableToSmoker, this.product.clickThroughInfo, this.product.company);

        this.productService.createProduct(endowmentProd).subscribe(
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

  handleClickAddFeature(): void {
    this.product?.listOfAdditionalFeatures?.push(new FeatureEntity());
  }

  handleClickAddRider(): void {
    this.product?.listOfRiders?.push(new RiderEntity());
  }

  handleClickRemoveFeature(index: number): void {
    this.product?.listOfAdditionalFeatures?.splice(index, 1);
  }

  handleClickRemoveRider(index: number): void {
    this.product?.listOfRiders?.splice(index, 1);
  }

  clear(): void {
    this.product = new ProductEntity();
  }

}
