import { ProductEntity } from "./product-entity";

export class ProductLineItemEntity {
    productLineItemId: number | undefined;
    product : ProductEntity | undefined;
    monthlyClicks : number | undefined;
    monthlySubtotalCredit : number | undefined;
    fixedSubscriptionCredit : number | undefined;

    constructor(productLineItemId ?: number, product ?: ProductEntity, monthlyClicks ?: number,
        monthlySubtotalCredit ?: number, fixedSubscriptionCredit ?: number){
            this.productLineItemId = productLineItemId;
            this.product = product;
            this.monthlyClicks = monthlyClicks;
            this.monthlySubtotalCredit = monthlySubtotalCredit;
            this.fixedSubscriptionCredit = fixedSubscriptionCredit;
        }
}
