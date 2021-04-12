import { MonthlyPaymentEntity } from './../models/monthly-payment-entity';
import { Injectable } from '@angular/core';

import { SessionService } from '../services/session.service';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaymentEntity } from '../models/payment-entity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl: string = "/api/PaymentEntity";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {

  }

  makePayment(paymentId: number | undefined): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + "/makePayment?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword() + "&paymentId=" + paymentId).pipe(
      catchError(this.handleError)
    );
  }

  purchaseMoolahCredit(creditToBuy: number): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + "/purchaseMoolahCredits?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword() + "&creditToBuy=" + creditToBuy).pipe(
      catchError(this.handleError)
    );
  }

  retrieveSpecificHistoricalTransactions(startDate: string, endDate: string): Observable<PaymentEntity[]> {
    return this.httpClient.get<PaymentEntity[]>(this.baseUrl + "/retrieveSpecificHistoricalTransactions?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAllUnpaidMonthlyPayment(): Observable<MonthlyPaymentEntity[]> {
    return this.httpClient.get<MonthlyPaymentEntity[]>(this.baseUrl + "/retrieveAllUnpaidMonthlyPayment?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe(
      catchError(this.handleError)
    );
  }

  retrieveMonthlyPaymentById(id: number): Observable<MonthlyPaymentEntity> {
    return this.httpClient.get<MonthlyPaymentEntity>(this.baseUrl + "/retrieveMonthlyPaymentById?email=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword() + "&id=" + id).pipe(
      catchError(this.handleError)
    );  }

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
