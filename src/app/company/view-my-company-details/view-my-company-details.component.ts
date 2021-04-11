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

@Component({
  selector: 'app-view-my-company-details',
  templateUrl: './view-my-company-details.component.html',
  styleUrls: ['./view-my-company-details.component.css']
})
export class ViewMyCompanyDetailsComponent implements OnInit {

  resultSuccess: boolean = false;
  resultError: boolean = false;
  submitted: boolean = true;
  message: string | undefined;

  company: CompanyEntity;

  constructor(private sessionService: SessionService,
    private companyService: CompanyService) {
    this.company = this.sessionService.getCompany();
    if()
  }

  ngOnInit(): void {
  }

  update(updateCompanyForm : NgForm) {
    this.submitted = true;
    if (updateCompanyForm.valid) {
      this.companyService.updateCompany(this.company).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Your profile has updated successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating your profile: " + error;

          console.log('********** UpdateCompanyComponent.ts: ' + error);
        }
      );
    }
  }
}
