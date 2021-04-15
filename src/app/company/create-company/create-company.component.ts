import { UploadPath } from './../../models/upload-path';
import { ToastModule } from 'primeng/toast';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { FooterComponent } from './../../footer/footer/footer.component';
import { HeaderComponent } from './../../header/header/header.component';
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
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css'],
  providers: [MessageService],
})
export class CreateCompanyComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;
  createCompanyEntityReq: CreateCompanyEntityReq;
  stringUploadPath: string = "";

  constructor(private router: Router,
    private browserAnimationsModule: BrowserAnimationsModule,
    private companyService: CompanyService,
    private passwordModule: PasswordModule,
    private buttonModule: ButtonModule,
    private inputTextModule: InputTextModule,
    private fileUploadModule: FileUploadModule,
    private messageService: MessageService) {
    this.createCompanyEntityReq = new CreateCompanyEntityReq();
  }

  ngOnInit(): void {
    this.companyService.retrieveUploadPath().subscribe(
      response => {
        let uploadPath: UploadPath = new UploadPath();
        uploadPath = response;
        this.stringUploadPath = 'http://localhost:8080/' + uploadPath.uploadPath;
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while retrieving file upload path: " + error;
        this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

        console.log('********** CreateCompanyComponent.ts: ' + error);
      }
    );
  }

  create(createCompanyForm: NgForm) {
    this.submitted = true;
    if (createCompanyForm.valid) {
      this.companyService.createNewCompany(this.createCompanyEntityReq).subscribe(
        response => {
          let newCompanyId: number = response;
          console.log('********** newCompanyId: ' + newCompanyId);
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Company " + newCompanyId + " created successfully";
          this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new company: " + error;
          this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
          console.log('********** CreateCompanyComponent.ts: ' + error);
        }
      );
    }
  }

  handleClickAdd() {
    this.createCompanyEntityReq.listOfPointOfContacts.push(new PointOfContactEntity());
  }

  handleClickRemove(index: number) {
    this.createCompanyEntityReq.listOfPointOfContacts.splice(index, 1);
  }

  clear() {
    this.createCompanyEntityReq = new CreateCompanyEntityReq();
  }
}
