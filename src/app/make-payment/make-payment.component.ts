import { MonthlyPaymentEntity } from './../models/monthly-payment-entity';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './..//footer/footer/footer.component';
import { HeaderComponent } from './..//header/header/header.component';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css'],
  providers: [MessageService]
})
export class MakePaymentComponent implements OnInit {

  selectedPaymentId: number = 0;
  selectedPayment: MonthlyPaymentEntity | null = null;

  creditCardNumber: string = "";
  creditCardName: string = "";
  creditCardExp: Date | null = null;
  creditCardCvv: string = "";
  creditToBuy: number = 0;

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private paymentService: PaymentService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.selectedPaymentId = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.paymentService.retrieveMonthlyPaymentById(this.selectedPaymentId).subscribe(
      response => {
        this.selectedPayment = response;
      },
      error => {
        var message = "An error has occurred while retrieving your payment: " + error;
        this.messageService.add({ severity: 'error', summary: message, detail: 'Via MessageService' });
      });
  }

  purchaseMoolahCredit() {
    this.paymentService.purchaseMoolahCredit(this.creditToBuy).subscribe(
      response => {
        var id = response;
        this.messageService.add({ severity: 'success', summary: "Payment successful: " + id, detail: 'Via MessageService' });
      },
      error => {
        var message = "An error has occurred while processing your payment: " + error;
        this.messageService.add({ severity: 'error', summary: message, detail: 'Via MessageService' });
      });
  }
}
