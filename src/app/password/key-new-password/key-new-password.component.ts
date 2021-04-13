import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-key-new-password',
  templateUrl: './key-new-password.component.html',
  styleUrls: ['./key-new-password.component.css'],
  providers: [MessageService]
})
export class KeyNewPasswordComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;

  newPassword : string = "";
  repeatNewPassword: string = "";
  email: string = "";
  otp: number = 0;


  constructor(private companyService : CompanyService, private messageService : MessageService) { }

  ngOnInit(): void {
  }

  
  keyNewPassword(enterPasswordForm: NgForm){
    this.submitted = true;

    if(enterPasswordForm.valid){
      
      this.companyService.resetCompanyPassword(this.email, this.otp, this.newPassword, this.repeatNewPassword).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Password has successfully been reset!";
          this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "Password has not been updated: " + error;
          console.log(error);
          this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
        }
      );
    }

  }

}
