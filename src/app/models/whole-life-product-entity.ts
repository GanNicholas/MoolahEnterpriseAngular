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

    constructor(listOfAdditionalFeatures: FeatureEntity[], listOfRiders: RiderEntity[], listOfPremium: PremiumEntity[], listOfSmokerPremium: PremiumEntity[], productEnum?: WholeLifeProductEnum, productName?: string, coverageTerm?: number, assuredSum?: number, description?: string, premiumTerm?: number, averageInterestRate?: number, policyCurrency?: PolicyCurrencyEnum,
        isAvailableToSmoker?: boolean, clickThroughInfo?: ClickThroughEntity,
        company?: CompanyEntity | null) {

        super(listOfAdditionalFeatures, listOfRiders, listOfPremium, listOfSmokerPremium, productName, coverageTerm, assuredSum, description, premiumTerm, averageInterestRate, policyCurrency, isAvailableToSmoker, clickThroughInfo,
            company);
        this.productEnum = productEnum;

    }
}
