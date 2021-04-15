import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MonthlyPaymentEntity } from 'src/app/models/monthly-payment-entity';
import { PaymentService } from 'src/app/services/payment.service';
import { CreditPaymentEntity } from 'src/app/models/credit-payment-entity';
import { DatePipe, formatDate } from '@angular/common';
import { PaymentEntity } from 'src/app/models/payment-entity';
import { PaymentWrapper } from 'src/app/models/payment-wrapper';
import { ProductLineItemEntity } from 'src/app/models/product-line-item-entity';
import {TabViewModule} from 'primeng/tabview';
@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css'],
  providers: [MessageService],
})
export class ViewTransactionComponent implements OnInit {

  listOfAllSpecificHistoricalTransaction: PaymentWrapper[] = new Array();
  listOfAllSpecificCreditHistoricalTransaction: PaymentWrapper[] = new Array();
  listOfAllSpecificMonthlyHistoricalTransaction: MonthlyPaymentEntity[] = new Array();
  listOfProductLineItem: ProductLineItemEntity[] = new Array();
  listOfCreditPmt: CreditPaymentEntity[] = new Array();
  startDateProductListing: Date = new Date();
  endDateProductListing: Date = new Date();
  startDateCreditPayment: Date = new Date();
  endDateCreditPayment: Date = new Date();
  selectedLineItem: number = 0;
  displayPopUp: boolean = false;
  sStartDate: string = "";
  sEndDate: string = "";


  constructor(private paymentService: PaymentService,
    private messageService: MessageService) {
    
  }

  ngOnInit(): void {

    this.paymentService.retrieveAllSpecificHistoricalTransaction().subscribe(
      response => {
        this.listOfAllSpecificHistoricalTransaction = response;
        console.log(JSON.stringify(this.listOfAllSpecificHistoricalTransaction));
        //  console.log("Retrieved successfully" + this.listOfAllSpecificHistoricalTransaction[0].paymentId);
        this.listOfAllSpecificHistoricalTransaction.forEach(history => {
        });
      },
      error => {
        console.log("Error retrieving products : " + error);
      }
    );
   
      this.paymentService.retrieveAllSpecificMonthlyCreditHistoricalTransaction().subscribe(
        response => {
          this.listOfAllSpecificCreditHistoricalTransaction = response;
          console.log(" credit pmt " + JSON.stringify(this.listOfAllSpecificCreditHistoricalTransaction));
        },
        error => {
          console.log("Error retrieving products : " + error);
        }
      );
    
  }
  searchForTransactionProductListing() {
    this.listOfAllSpecificHistoricalTransaction = new Array();
        
    this.paymentService.retrieveSpecificHistoricalTransactions(this.startDateProductListing, this.endDateProductListing).subscribe(
      response => {
       
        this.listOfAllSpecificHistoricalTransaction = response;
        console.log(JSON.stringify(this.listOfAllSpecificCreditHistoricalTransaction));
      },
      error => {
        console.log("Error retrieving products : " + error);
      }
    );
  }
  searchForTransactionCreditPayment() {
    this.listOfAllSpecificCreditHistoricalTransaction = new Array();
        
    this.paymentService.retrieveAllSpecificCreditHistoricalTransaction(this.startDateCreditPayment, this.endDateCreditPayment).subscribe(
      response => {
       
        this.listOfAllSpecificCreditHistoricalTransaction = response;
        console.log(JSON.stringify(this.listOfAllSpecificCreditHistoricalTransaction));
      },
      error => {
        console.log("Error retrieving products : " + error);
      }
    );
  }

  getDateString(dateToTransform: Date | null): string {
    if (dateToTransform != null) {
      var temp = dateToTransform.toString();
      temp = temp.substring(0, 9);
      var tempDate = new Date(temp);
      console.log(tempDate);
      return formatDate(tempDate, "mediumDate", "en-US");
    }
    return formatDate(Date.now(), "mediumDate", "en-US");
  }

  viewLineItems($event: any, rowIndex: number) {
    console.log("roleindex:" + rowIndex);
    var mp = this.listOfAllSpecificHistoricalTransaction[rowIndex].listOfProductLineItemEntity;
    mp.forEach(element => {
      this.listOfProductLineItem.push(element);
    });
    this.selectedLineItem = rowIndex;
    this.displayPopUp = true;
  }


  clearDialog($event: any) {
    this.selectedLineItem = 0;
    this.displayPopUp = false;
    this.listOfProductLineItem = new Array();
  }


}
