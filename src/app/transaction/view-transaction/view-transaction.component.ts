import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MonthlyPaymentEntity } from 'src/app/models/monthly-payment-entity';
import { PaymentService } from 'src/app/services/payment.service';

import { DatePipe, formatDate } from '@angular/common';
import { PaymentWrapper } from 'src/app/models/payment-wrapper';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css'],
  providers: [MessageService],
})
export class ViewTransactionComponent implements OnInit {

  listOfAllSpecificHistoricalTransaction: PaymentWrapper[] = new Array();

  startDate: Date = new Date();
  endDate: Date = new Date();

  sStartDate: string = "";
  sEndDate: string = "";
  constructor(private paymentService: PaymentService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.paymentService.retrieveAllSpecificHistoricalTransaction().subscribe(
      response => {
        this.listOfAllSpecificHistoricalTransaction = response;
        console.log(JSON.stringify(this.listOfAllSpecificHistoricalTransaction));
       //console.log("Retrieved successfully" + this.listOfAllSpecificHistoricalTransaction[0].paymentEntity.paymentId);
       this.listOfAllSpecificHistoricalTransaction.forEach(history => {
         console.log(history.paymentEntity.paymentId);
       });
      },
      error => {
        console.log("Error retrieving products : " + error);
      }
    );
  }
  searchForDate() {

    // if (this.startDate != null) {
    //   this.sStartDate = this.startDate.toDateString();
    // }
    // if (this.endDate != null) {
    //   this.sEndDate = this.endDate.toDateString();
    // }
    // if (this.sStartDate != null && this.sEndDate != null) {
    //   this.paymentService.retrieveSpecificHistoricalTransactions(this.sStartDate, this.sEndDate ).subscribe(
    //     response => {
    //       this.listOfAllSpecificHistoricalTransaction = response;
    //       console.log("Retrieved successfully");

    //     },
    //     error => {
    //       console.log("Error retrieving products : " + error);
    //     }
    //   );
    //}
  }

  getDateString(dateToTransform: Date | null): string {
    if (dateToTransform != null) {
      var temp = dateToTransform.toString();
      temp = temp.substring(0, temp.length - 11);
      var tempDate = new Date(temp);
      console.log(tempDate);
      return formatDate(tempDate, "mediumDate", "en-US");
    }
    return formatDate(Date.now(), "mediumDate", "en-US");
  }


}
