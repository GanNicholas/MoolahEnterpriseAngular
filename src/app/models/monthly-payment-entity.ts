import { CompanyEntity } from "./company-entity";
import { PaymentEntity } from "./payment-entity";
import { ProductLineItemEntity } from "./product-line-item-entity";

export class MonthlyPaymentEntity extends PaymentEntity {

    listOfProductLineItems : ProductLineItemEntity[] | undefined;
    totalPayable : bigint | undefined;

    constructor(listOfProductLineItems ?: ProductLineItemEntity[], paid?: boolean, dateTransacted ?: Date,
        paymentNumber ?: string, totalPayable ?: bigint, dateGenerated ?: Date, company ?: CompanyEntity, paymentId ?: number|null){
            super(paid, dateTransacted, paymentNumber, dateGenerated, company, paymentId);
            this.listOfProductLineItems = listOfProductLineItems;
            this.totalPayable = totalPayable;
    }
}
