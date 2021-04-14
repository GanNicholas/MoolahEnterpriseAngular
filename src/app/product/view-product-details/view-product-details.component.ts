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
import { MessageService } from 'primeng/api';
import { PolicyCurrencyEnum } from 'src/app/models/enums/policy-currency-enum.enum';
import { EndowmentEntity } from 'src/app/models/endowment-entity';
import { WholeLifeProductEntity } from 'src/app/models/whole-life-product-entity';
import { TermLifeProductEntity } from 'src/app/models/term-life-product-entity';
import { ProductEntityWrapper } from 'src/app/models/product-entity-wrapper';
import { CompanyEntity } from 'src/app/models/company-entity';
import { EndowmentProductEnum } from 'src/app/models/enums/endowment-product-enum.enum';
import { WholeLifeProductEnum } from 'src/app/models/enums/whole-life-product-enum.enum';
import { TermLifeProductEnum } from 'src/app/models/enums/term-life-product-enum.enum';
import { PremiumEntity } from 'src/app/models/premium-entity';
import { RiderEntity } from 'src/app/models/rider-entity';
import { FeatureEntity } from 'src/app/models/feature-entity';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css'],
  providers: [MessageService]
})
export class ViewProductDetailsComponent implements OnInit {
  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;

  productId: string;
  productToView: ProductEntity;
  productEnumType: string;
  productType: string;
  retrieveProductError: boolean;
  isDeleted: boolean = false;


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
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService) {

    if (sessionService.getIsLogin() == false) {
      this.router.navigate(["/index"]);
    }
    this.productId = "";
    this.productToView = new ProductEntity(new Array(), new Array(), new Array(), new Array(), 0, 0, 0, 0);


    this.retrieveProductError = false;
    this.productEnumType = "";
    this.productType = "";

  }

  ngOnInit(): void {

    let prodIdTemp: string | null = this.activatedRoute.snapshot.paramMap.get('productId');
    if (prodIdTemp == null) {
      this.router.navigate(["/index"])
    } else {
      this.productId = prodIdTemp;
      if (this.productId != null) {
        this.productService.retrieveSpecificProductWrapper(parseInt(this.productId)).subscribe(
          response => {
            let productWrapper: ProductEntityWrapper = response;
            this.productToView = productWrapper.product;
            this.productEnumType = productWrapper.productEnum;
            this.productType = productWrapper.productType;
          },
          error => {
            this.retrieveProductError = true;
            console.log("Error for Product Details: " + error);
          }
        );
      }
    }

  }

  deleteProduct() {
    this.productService.deleteProduct(parseInt(this.productId)).subscribe(
      response => {
        this.isDeleted = true;
        this.message = "Product has been successfully deleted!";
        this.messageService.add({ severity: 'success', summary: this.message, detail: 'From Moolah Enterprise' });
      },
      error => {
        this.message = "Error deleting product! Err: " + error;
        this.messageService.add({ severity: 'error', summary: this.message, detail: 'From Moolah Enterprise' });
      }
    );
  }

  backToHome() {
    this.router.navigate(["/index"]);
  }


  updateProduct(updateProductForm: NgForm) {
    console.log("Entered Here");
    if (updateProductForm.valid) {
      console.log("Check form valid");
      if (this.productType == "ENDOWMENTPRODUCT") {
        let endowmentProd: EndowmentEntity = new EndowmentEntity(new Array(), new Array(), new Array(), new Array(), 0, 0, 0, 0);
        if (this.productToView.isAvailableToSmoker == true) {
          endowmentProd = new EndowmentEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, this.productToView.listOfSmokerPremium, this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, (<any>EndowmentProductEnum)[this.productEnumType], this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          endowmentProd.productId = this.productToView.productId;
        } else {
          endowmentProd = new EndowmentEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, new Array(), this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, (<any>EndowmentProductEnum)[this.productEnumType], this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          endowmentProd.productId = this.productToView.productId;
        }

        this.productService.updateEndowmentProduct(endowmentProd).subscribe(
          response => {
            this.message = "Product has been successfully updated! Product: " + this.productToView.productName;
            this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });

            this.companyService.retrieveCompany().subscribe(
              responseInner => {
                let company: CompanyEntity = responseInner;
                this.sessionService.setCompany(company);
                this.message = "Company has been successfully retrieved!";
                this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
              },
              error => {
                this.message = "Error updating company: " + error;
                this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
              }
            );
          },
          error => {
            this.message = "An error has occurred while updating your product: " + error;
            this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

          }
        )
      } else if (this.productType == "WHOLELIFEPRODUCT") {
        let wholeLifeProd: WholeLifeProductEntity = new WholeLifeProductEntity(new Array(), new Array(), new Array(), new Array(), 0, 0, 0, 0);
        if (this.productToView.isAvailableToSmoker == true) {
          console.log("YES smoker");
          wholeLifeProd = new WholeLifeProductEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, this.productToView.listOfSmokerPremium, this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, (<any>WholeLifeProductEnum)[this.productEnumType], this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          wholeLifeProd.productId = this.productToView.productId;
        } else {
          console.log("NO smoker");
          wholeLifeProd = new WholeLifeProductEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, new Array(), this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, (<any>WholeLifeProductEnum)[this.productEnumType], this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          wholeLifeProd.productId = this.productToView.productId;
        }
        console.log("Whole life entry before subscribe");
        this.productService.updateWholeLifeProduct(wholeLifeProd).subscribe(
          response => {
            console.log(JSON.stringify(wholeLifeProd));
            console.log("Whole life entry successful");
            this.message = "Product has been successfully updated! Product: " + this.productToView.productName;
            this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });

            this.companyService.retrieveCompany().subscribe(
              responseInner => {
                let company: CompanyEntity = responseInner;
                this.sessionService.setCompany(company);
                this.message = "Company has been successfully retrieved!";
                this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
              },
              error => {
                this.message = "Error updating company: " + error;
                this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
              }
            );
          },
          error => {
            this.message = "An error has occurred while updating your product: " + error;
            this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

          }
        )

      } else if (this.productType == "TERMLIFEPRODUCT") {
        let termLifeProd: TermLifeProductEntity = new TermLifeProductEntity(new Array(), new Array(), new Array(), new Array(), 0, 0, 0, 0);
        if (this.productToView.isAvailableToSmoker == true) {
          termLifeProd = new TermLifeProductEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, this.productToView.listOfSmokerPremium, this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, (<any>TermLifeProductEnum)[this.productEnumType], this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          termLifeProd.productId = this.productToView.productId;
        } else {
          termLifeProd = new TermLifeProductEntity(this.productToView.listOfAdditionalFeatures, this.productToView.listOfRiders, this.productToView.listOfPremium, new Array(), this.productToView.coverageTerm, this.productToView.assuredSum,
            this.productToView.premiumTerm, this.productToView.averageInterestRate, (<any>TermLifeProductEnum)[this.productEnumType], this.productToView.productName, this.productToView.description, this.productToView.policyCurrency, this.productToView.isAvailableToSmoker,
            this.productToView.clickThroughInfo, this.productToView.company);
          termLifeProd.productId = this.productToView.productId;
        }


        this.productService.updateTermLifeProduct(termLifeProd).subscribe(
          response => {
            this.message = "Product has been successfully updated! Product: " + this.productToView.productName;
            this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });

            this.companyService.retrieveCompany().subscribe(
              responseInner => {
                let company: CompanyEntity = responseInner;
                this.sessionService.setCompany(company);
                this.message = "Company has been successfully retrieved!";
                this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
              },
              error => {
                this.message = "Error updating company: " + error;
                this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
              }
            );
          },
          error => {
            this.message = "An error has occurred while updating your product: " + error;
            this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

          }
        )
      }

    }
  }

  saveProductName() {
    this.toggleProductName = false;
  }

  saveProductDescription() {
    this.toggleProductDescription = false;
  }

  saveCoverageTerm() {
    this.toggleCoverageTerm = false;
  }

  saveAssuredSum() {
    this.toggleAssuredSum = false;
  }

  savePremiumTerm() {
    this.togglePremiumTerm = false;
  }

  saveAverageInterestRate() {
    this.toggleAverageInterestRate = false;
  }

  savePolicyCurrency() {
    this.togglePolicyCurrency = false;
  }

  saveIsAvailableToSmoker() {
    this.toggleIsAvailableToSmoker = false;
  }

  saveAdditionalFeatures() {
    this.toggleAdditionalFeatures = false;
  }

  saveRider() {
    this.toggleRider = false;
  }

  savePremium() {
    this.togglePremium = false;
  }

  saveSmokerPremium() {
    this.toggleSmokerPremium = false;
  }


  selectChangeHandlerCurrency(event: any) {
    //update the ui
    let stringText: string = event.target.value;
    let currency: PolicyCurrencyEnum = (<any>PolicyCurrencyEnum)[stringText];
    this.productToView.policyCurrency = currency;
    console.log("Currency: " + this.productToView.policyCurrency + " type: " + typeof (this.productToView.policyCurrency));
  }

  selectChangeHandlerSmoker(event: any) {
    //update the ui
    if (event.target.value == "true") {
      this.productToView.isAvailableToSmoker = true;
    } else {
      this.productToView.isAvailableToSmoker = false;
    }

    console.log("Smoker boolean: " + this.productToView.isAvailableToSmoker + " type: " + typeof (this.productToView.isAvailableToSmoker));
  }

  handleClickAddFeature(): void {
    this.productToView?.listOfAdditionalFeatures?.push(new FeatureEntity());
  }

  handleClickAddRider(): void {
    this.productToView?.listOfRiders?.push(new RiderEntity());
  }

  handleClickAddPremium(): void {
    this.productToView?.listOfPremium?.push(new PremiumEntity());
  }

  handleClickAddSmokerPremium(): void {
    this.productToView?.listOfSmokerPremium?.push(new PremiumEntity());
  }

  handleClickRemoveFeature(index: number): void {
    this.productToView?.listOfAdditionalFeatures?.splice(index, 1);
  }

  handleClickRemoveRider(index: number): void {
    this.productToView?.listOfRiders?.splice(index, 1);
  }

  handleClickRemovePremium(index: number): void {
    this.productToView?.listOfPremium?.splice(index, 1);
  }

  handleClickRemoveSmokerPremium(index: number): void {
    this.productToView?.listOfSmokerPremium?.splice(index, 1);
  }



}
