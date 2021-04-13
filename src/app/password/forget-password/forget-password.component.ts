import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  providers: [MessageService]

})
export class ForgetPasswordComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;
  email: string = "";


  constructor(private companyService : CompanyService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  enterEmail(enterEmailForm: NgForm){
    this.submitted = true;

    if(enterEmailForm.valid){
      
      this.companyService.sendOTP(this.email).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "An OTP has successfully been sent to your email";
          this.messageService.add({ severity: 'success', summary: this.message, detail: 'Via MessageService' });
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "OTP has failed to send. Please check the email you have inputted!";
          console.log(error);
          this.messageService.add({ severity: 'error', summary: this.message, detail: 'Via MessageService' });
        }
      );
    }

  }
  

  
}
