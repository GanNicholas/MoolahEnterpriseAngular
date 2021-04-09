import { CompanyEntity } from "./company-entity";
import { PaymentEntity } from "./payment-entity";

export class CreditPaymentEntity extends PaymentEntity {
    creditPurchased: bigint | undefined;
    totalPayable: number | undefined;

    constructor(creditPurchased?: bigint, paid?: boolean, dateTransacted?: Date, paymentNumber?: string,
        totalPayable?: number, dateGenerated?: Date, company?: CompanyEntity, paymentId?: number|null ) {
        super(paid, dateTransacted, paymentNumber, dateGenerated, company, paymentId);
        this.creditPurchased = creditPurchased;
        this.totalPayable = totalPayable;
    }


}
