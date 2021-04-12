import { Injectable } from '@angular/core';
import { ProductEntity } from '../models/product-entity';
import { SessionService } from '../services/session.service';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "/api/Product";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {

  }

  createProduct(newProduct: ProductEntity): Observable<number> {
    return this.httpClient.put<number>(this.baseUrl +" ?email=" + this.sessionService.getEmail + "&password=" + this.sessionService.getPassword, newProduct, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveCompanyProducts(): Observable<ProductEntity[]> {
    return this.httpClient.get<ProductEntity[]>(this.baseUrl + "/retrieveAllProductsById?email=" + this.sessionService.getEmail + "&password=" + this.sessionService.getPassword).pipe(
      catchError(this.handleError)
    );
  }

  updateCompanyProducts(listOfProduct : ProductEntity[]): Observable<ProductEntity[]>{
    return this.httpClient.post<ProductEntity[]>(this.baseUrl + "?email=" + this.sessionService.getEmail + "&password=" + this.sessionService.getPassword, listOfProduct, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(productId : number) : Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl + "" + productId + "" + this.sessionService.getEmail + "&password=" + this.sessionService.getPassword).pipe(
      catchError(this.handleError)
    );
  }

  retrieveSpecificProduct(productId : number) : Observable<ProductEntity>{
    return this.httpClient.get<ProductEntity>(this.baseUrl + "retrieveProductEntityById?email=" + this.sessionService.getEmail + "&password=" + this.sessionService.getPassword + "&productId=" + productId).pipe(
      catchError(this.handleError)
    );
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