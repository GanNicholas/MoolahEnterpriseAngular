import { Injectable } from '@angular/core';

import { CompanyEntity } from '../models/company-entity';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getCompany(): CompanyEntity | null
		{		
			try
			{
				return JSON.parse(sessionStorage.CompanyEntity);
			}
			catch
			{
				return null;
			}
		}


		setCompany(company: CompanyEntity): void
		{
			sessionStorage.company = JSON.stringify(company);
		}
}
