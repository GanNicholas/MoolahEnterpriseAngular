import { CreateCompanyEntityReq } from './../../models/create-company-entity-req';
import { CompanyEntity } from './../../models/company-entity';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { NgForm } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PointOfContactEntity } from 'src/app/models/point-of-contact-entity';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;
  createCompanyEntityReq: CreateCompanyEntityReq;

  constructor(private router: Router,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService,
    private passwordModule: PasswordModule,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule) {
    this.createCompanyEntityReq = new CreateCompanyEntityReq(new CompanyEntity, new Array());
  }

  ngOnInit(): void {
  }

  create( createCompanyForm: NgForm) {

    this.submitted = true;
    if (createCompanyForm.valid) {
      this.companyService.createNewCompany(this.createCompanyEntityReq).subscribe(
        response => {
          let newCompanyId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Company " + newCompanyId + " created successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new company: " + error;

          console.log('********** CreateCompanyComponent.ts: ' + error);
        }
      );
    }
  }

  handleClickAdd() {
    this.createCompanyEntityReq?.listOfPointOfContacts?.push(new PointOfContactEntity());
  }

  handleClickRemove(index: number) {
    this.createCompanyEntityReq?.listOfPointOfContacts?.splice(index, 1);
  }

  clear() {
    this.createCompanyEntityReq = new CreateCompanyEntityReq(new CompanyEntity, new Array());
  }
}
