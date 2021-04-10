import { Injectable } from '@angular/core';

import { CompanyEntity } from '../models/company-entity';


@Injectable({
	providedIn: 'root'
})
export class SessionService {

	constructor() { }

	getCompany(): CompanyEntity | null {
		try {
			return JSON.parse(sessionStorage.CompanyEntity);
		}
		catch
		{
			return null;
		}
	}


	setCompany(company: CompanyEntity): void {
		sessionStorage.company = JSON.stringify(company);
	}

	getIsLogin(): boolean {
		if (sessionStorage.isLogin == "true") {
			return true;
		}
		else {
			return false;
		}
	}

	setIsLogin(isLogin: boolean): void {
		sessionStorage.isLogin = isLogin;
	}

	getEmail(): string {
		return sessionStorage.email;
	}

	setEmail(email: string) {
		sessionStorage.email = email;
	}

	getPassword(): string {
		return sessionStorage.password;
	}

	setPassword(password: string) {
		sessionStorage.password = password;
	}

	checkAccessRight(path: string): boolean {
		if (this.getIsLogin()) {
			return true;
		}
		else {
			return false;
		}
	}

}
