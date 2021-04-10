import { CategoryPricingEntity } from "./category-pricing-entity";
import { ClickThroughEntity } from "./click-through-entity";
import { CompanyEntity } from "./company-entity";
import { PolicyCurrencyEnum } from "./enums/policy-currency-enum.enum";
import { WholeLifeProductEnum } from "./enums/whole-life-product-enum.enum";
import { FeatureEntity } from "./feature-entity";
import { PremiumEntity } from "./premium-entity";
import { ProductEntity } from "./product-entity";
import { RiderEntity } from "./rider-entity";

export class WholeLifeProductEntity extends ProductEntity {
    productEnum: WholeLifeProductEnum | undefined;

    constructor(productEnum?: WholeLifeProductEnum, productId?: number, productImage?: Uint8Array, productDateCreated?: Date,
        productName?: string, coverageTerm?: number, assuredSum?: number, description?: string,
        isDeleted?: boolean, premiumTerm?: number, averageInterestRate?: number, policyCurrency?: PolicyCurrencyEnum,
        isAvailableToSmoker?: boolean, productCategoryPricing?: CategoryPricingEntity, clickThroughInfo?: ClickThroughEntity,
        company?: CompanyEntity, listOfAdditionalFeatures?: FeatureEntity[], listOfRiders?: RiderEntity[], listOfPremium?: PremiumEntity[],
        listOfSmokerPremium?: PremiumEntity[]) {

        super(productId, productImage, productDateCreated, productName, coverageTerm, assuredSum, description, isDeleted, premiumTerm, averageInterestRate, policyCurrency, isAvailableToSmoker, productCategoryPricing, clickThroughInfo,
            company, listOfAdditionalFeatures, listOfRiders, listOfPremium, listOfSmokerPremium);
        this.productEnum = productEnum;

    }
}
