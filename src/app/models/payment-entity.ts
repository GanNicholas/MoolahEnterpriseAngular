import { CompanyEntity } from "./company-entity";

export class PaymentEntity {
    paymentId: number | undefined;
    paid: boolean | undefined;
    dateTransacted: Date | undefined;
    paymentNumber: string | undefined;
    dateGenerated: Date | undefined;
    company: CompanyEntity | undefined;

    constructor(paid?: boolean, dateTransacted?: Date, paymentNumber?: string,
        dateGenerated?: Date, company?: CompanyEntity, paymentId?: number) {
        this.paymentId = paymentId;
        this.paid = paid;
        this.dateTransacted = dateTransacted;
        this.paymentNumber = paymentNumber;
        this.dateGenerated = dateGenerated;
        this.company = company;

    }

}
