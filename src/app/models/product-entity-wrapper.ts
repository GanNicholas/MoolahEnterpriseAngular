import { ProductEntity } from "./product-entity";

export class ProductEntityWrapper {
    product : ProductEntity;
    productEnum : string;
    productType : string;

    constructor(product : ProductEntity, productEnum : string, productType : string){
        this.product = product;
        this.productEnum = productEnum;
        this.productType = productType;
    }
}
