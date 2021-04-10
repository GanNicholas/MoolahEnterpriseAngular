import { Injectable } from '@angular/core';

import { CreateCompanyEntityReq } from '../models/create-company-entity-req';
import { CompanyEntity } from '../models/company-entity';
import { PointOfContactEntity } from '../models/point-of-contact-entity';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl: string = "/api/Company";

  constructor(private httpClient: HttpClient) { }

  createNewCompany(newCompany: CreateCompanyEntityReq): Observable<number> {
    return this.httpClient.put<number>(this.baseUrl, newCompany, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  login(companyEmail: string, password: string): Observable<CompanyEntity> {
    return this.httpClient.get<CompanyEntity>(this.baseUrl + "/retrieveAllRecordsById?email=" + companyEmail + "&password=" + password).pipe(
      catchError(this.handleError)
    );
  }

  updateCompany(companyEntity: CompanyEntity): Observable<CompanyEntity> {
    
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
