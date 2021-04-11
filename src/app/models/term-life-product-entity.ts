import { CategoryPricingEntity } from "./category-pricing-entity";
import { ClickThroughEntity } from "./click-through-entity";
import { CompanyEntity } from "./company-entity";
import { PolicyCurrencyEnum } from "./enums/policy-currency-enum.enum";
import { TermLifeProductEnum } from "./enums/term-life-product-enum.enum";
import { FeatureEntity } from "./feature-entity";
import { PremiumEntity } from "./premium-entity";
import { ProductEntity } from "./product-entity";
import { RiderEntity } from "./rider-entity";

export class TermLifeProductEntity extends ProductEntity {
    productEnum: TermLifeProductEnum | undefined;

    constructor(productEnum?: TermLifeProductEnum, productName?: string, coverageTerm?: number, assuredSum?: number, description?: string, premiumTerm?: number, averageInterestRate?: number, policyCurrency?: PolicyCurrencyEnum,
        isAvailableToSmoker?: boolean, productCategoryPricing?: CategoryPricingEntity, clickThroughInfo?: ClickThroughEntity,
        company?: CompanyEntity) {

        super(productName, coverageTerm, assuredSum, description, premiumTerm, averageInterestRate, policyCurrency, isAvailableToSmoker, productCategoryPricing, clickThroughInfo,
            company);
        this.productEnum = productEnum;

    }

}
