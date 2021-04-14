import{PaymentEntity} from "./payment-entity";
import{MonthlyPaymentEntity} from "./monthly-payment-entity";


export class PaymentWrapper {
    paymentEntity : PaymentEntity = new PaymentEntity(new Date(), new Date()) ;
    monthlyPaymentEntity : MonthlyPaymentEntity =new MonthlyPaymentEntity(new Date(), new Date());

    constructor(paymentEntity:PaymentEntity, monthlyPaymentEntity:MonthlyPaymentEntity){
        this.monthlyPaymentEntity = monthlyPaymentEntity;
        this.paymentEntity = paymentEntity;
    }
}
