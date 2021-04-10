import { Injectable } from '@angular/core';
import { ProductEntity } from '../models/product-entity';


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

  constructor(private httpClient: HttpClient) {

  }

  createProduct(newProduct: ProductEntity): Observable<number> {
    return this.httpClient.put<number>(this.baseUrl, newProduct, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  retrieveCompanyProducts(): Observable<ProductEntity[]> {
    return this.httpClient.get(ProductEntity[])(this.baseUrl + "/retrieveAllProductsById?email=" + this.sessionService.companyEmail + "&password=" + this.sessionService.password).pipe()(
      catchError(this.handleError)
    )
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
