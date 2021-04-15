import { FileUploadService } from '../../services/fileuploadservice.service';
import { UploadPath } from './../../models/upload-path';
import { FileUploadModule } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { NgForm } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PointOfContactEntity } from 'src/app/models/point-of-contact-entity';
import { CompanyEntity } from './../../models/company-entity';
import { FooterComponent } from './../../footer/footer/footer.component';
import { HeaderComponent } from './../../header/header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-my-company-details',
  templateUrl: './view-my-company-details.component.html',
  styleUrls: ['./view-my-company-details.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ViewMyCompanyDetailsComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;

  toggleCompanyName: boolean = true;
  toggleCompanyEmail: boolean = true;
  toggleCompanyNumber: boolean = true;
  togglePassword: boolean = true;
  togglePoc: boolean = true;
  toggleCompanyUrl: boolean = true;
  company: CompanyEntity;

  oldPassword: string = "";
  newPassword: string = "";
  repeatNewPassword: string = "";
  display: boolean = false;
  dialogDeactivateAccount: boolean = false;

  uploadPath: UploadPath = new UploadPath();
  file: File = new File(new Array(), "");

  constructor(private sessionService: SessionService,
    private companyService: CompanyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private fileUploadService: FileUploadService) {
    if (sessionService.getIsLogin() == false) {
      this.router.navigate(["/index"]);
    }
    this.company = this.sessionService.getCompany();
  }

  ngOnInit(): void {
    this.companyService.retrieveUploadPath().subscribe(
      response => {
        this.uploadPath = response;
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

  showDeactivateDialog() {
    this.dialogDeactivateAccount = true;
  }

  hideDeactiveDialog() {
    this.dialogDeactivateAccount = false;
  }
  enableCompanyNameEdit() {
    this.toggleCompanyName = true;
  }

  saveCompanyNameEdit() {
    this.toggleCompanyName = false;
  }

  enableCompanyEmailEdit() {
    this.toggleCompanyEmail = true;
  }

  saveCompanyEmailEdit() {
    this.toggleCompanyEmail = false;
  }

  enableCompanyNumberEdit() {
    this.toggleCompanyNumber = true;
  }

  saveCompanyNumberEdit() {
    this.toggleCompanyNumber = false;
  }

  enablePasswordEdit() {
    this.togglePassword = true;
  }

  showDialog($event: any) {
    this.display = true;
  }

  handleClickAddPoc() {
    console.log("before push")
    this.company.listOfPointOfContacts.forEach(poc => {
      console.log(poc.pocEmail + "\n");
    });

    this.company.listOfPointOfContacts.push(new PointOfContactEntity());
    this.company.listOfPointOfContacts = [...this.company.listOfPointOfContacts];

    console.log("after push")
    this.company.listOfPointOfContacts.forEach(poc => {
      console.log(poc.pocEmail + "\n");
    });
  }

  handleClickRemovePoc(rowIndex: number) {
    this.company.listOfPointOfContacts.splice(rowIndex, 1);
  }

  enablePocEdit() {
    this.togglePoc = true;
  }

  savePocEdit() {
    this.togglePoc = false;
  }

  enableUrlEdit() {
    this.toggleCompanyUrl = true;
  }

  saveUrlEdit() {
    this.toggleCompanyUrl = false;
  }

  update(updateCompanyForm: NgForm) {
    this.submitted = true;
    if (updateCompanyForm.valid) {
      this.companyService.updateCompany(this.company).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.clear();
          this.sessionService.setCompany(this.company);
          this.messageService.add({ severity: 'success', summary: "Your profile has updated successfully", detail: 'Via MessageService' });
          this.message = "Your profile has updated successfully";

        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating your profile: " + error;
          this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

          console.log('********** UpdateCompanyComponent.ts: ' + error);
        }
      );
    }
  }

  clear() {
    this.toggleCompanyName = true;
    this.toggleCompanyEmail = true;
    this.toggleCompanyNumber = true;
    this.togglePassword = true;
    this.togglePoc = true;
  }

  simpleClone(obj: any) {
    return Object.assign({}, obj);
  }

  trackByRowIndex(index: number, poc: any): number {
    return index;
  }

  confirm(rowIndex: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.handleClickRemovePoc(rowIndex);
      }
    });
  }

  updatePassword(changePasswordForm: NgForm) {
    if (changePasswordForm.valid) {
      this.companyService.updateCompanyPassword(this.company, this.oldPassword, this.newPassword, this.repeatNewPassword).subscribe(
        response => {
          this.company = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.clear();
          this.sessionService.setCompany(this.company);
          this.messageService.add({ severity: 'success', summary: "Your password has changed successfully", detail: 'Via MessageService' });
          this.message = "Your password has changed successfully";

        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating your password: " + error;
          this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });

          console.log('********** UpdateCompanyComponent.ts: ' + error);
        }
      );
    }
  }
  deactiveAccount() {
    this.companyService.deactivateCompany().subscribe(
      response => {
        let refundAmt : any  = response; 
        this.resultSuccess = true;
        this.resultError = false;
        this.messageService.add({ severity: 'success', summary: "You have successfully deactivated your account. We will refund " + refundAmt +" within 5 business days.", detail: 'Via MessageService' });
        this.dialogDeactivateAccount = false;

        this.sessionService.setIsLogin(false);
        this.sessionService.setCompany(null);
        this.sessionService.setEmail("");
        this.sessionService.setPassword("");
        sessionStorage.clear();
        this.router.navigate(["/index"]);
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occurred while deactivating your account: " + error;
        this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
        this.dialogDeactivateAccount = false;
        console.log('********** UpdateCompanyComponent.ts: ' + error);
      }
    );

  }

  onUpload(event: any) {
    console.log("onUpload()");
    this.file = event.files[0];

    this.fileUploadService.uploadFile(this.file).subscribe(
      response => {
        console.log('********** FileUploadComponent.ts: File uploaded successfully: ' + response.status);
      },
      error => {
        console.log('********** FileUploadComponent.ts: ' + error);
      }
    );
  }

}
