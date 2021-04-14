import { PaymentEntity } from "./payment-entity";
import { MonthlyPaymentEntity } from "./monthly-payment-entity";
import { ProductLineItemEntity } from "./product-line-item-entity";


export class PaymentWrapper {
    paymentEntity: PaymentEntity = new PaymentEntity(new Date(), new Date());
    totalPayable: number = 0;
    listOfProductLineItemEntity: Array<ProductLineItemEntity> = new Array();

    constructor(paymentEntity: PaymentEntity, totalPayable: number, listOfProductLineItemEntity: Array<ProductLineItemEntity>) {
        this.totalPayable = totalPayable;
        this.paymentEntity = paymentEntity;
        this.listOfProductLineItemEntity = listOfProductLineItemEntity;
    }
}
