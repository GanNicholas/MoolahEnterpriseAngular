import { ProductEntity } from "./product-entity";

export class ProductLineItemEntity {
    prodcutLineItemId: number | undefined;
    product : ProductEntity | undefined;
    monthlyClicks : bigint | undefined;
    monthlySubtotalCredit : bigint | undefined;
    fixedSubscriptionCredit : bigint | undefined;

    constructor(prodcutLineItemId ?: number, product ?: ProductEntity, monthlyClicks ?: bigint, 
        monthlySubtotalCredit ?: bigint, fixedSubscriptionCredit ?: bigint){
            this.prodcutLineItemId = prodcutLineItemId;
            this.product = product;
            this.monthlyClicks = monthlyClicks;
            this.monthlySubtotalCredit = monthlySubtotalCredit;
            this.fixedSubscriptionCredit = fixedSubscriptionCredit;
        }
}
