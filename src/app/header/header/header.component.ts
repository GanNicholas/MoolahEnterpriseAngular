import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { CompanyService } from 'src/app/services/company.service';

import{CompanyEntity} from '../../models/company-entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  childEvent = new EventEmitter();

  email: string | undefined;
  password: string | undefined;
  loginError: boolean;
  errorMessage: string | undefined;

  items: MenuItem[];


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private compamnyService: CompanyService) {
    this.loginError = false;
    this.items = new Array();
  }




  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'About Us',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Create Company Account',
        icon: 'pi pi-user',
      }
    ];
  }

  staffLogin(): void
	{
		this.sessionService.setEmail(this.email);
		this.sessionService.setPassword(this.password);
					
		this.companyService.login(this.email, this.password).subscribe(
			response => {										
				let company: CompanyEntity = response;
				
				if(company != null)
				{
					this.sessionService.setIsLogin(true);
					this.sessionService.setCurrentStaff(staff);					
					this.loginError = false;
					
					this.childEvent.emit();
					
					this.router.navigate(["/index"]);
				}
				else
				{
					this.loginError = true;
				}
			},
			error => {
				this.loginError = true;
				this.errorMessage = error
			}
		);
	}


  companyLogout(): void
	{
		this.sessionService.setIsLogin(false);
		this.sessionService.setCompany(null);
		
		this.router.navigate(["/index"]);
	}

  getMenuItems(): MenuItem[] {
    return this.items;
  }

  setMenuItems() {
    return this.items;
  }

}
