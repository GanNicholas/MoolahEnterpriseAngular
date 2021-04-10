import { CategoryPricingEntity } from "./category-pricing-entity";
import { ClickThroughEntity } from "./click-through-entity";
import { CompanyEntity } from "./company-entity";
import { PolicyCurrencyEnum } from "./enums/policy-currency-enum.enum";
import { FeatureEntity } from "./feature-entity";
import { PremiumEntity } from "./premium-entity";
import { RiderEntity } from "./rider-entity";

export class ProductEntity {
    productId: number | undefined | null;
    productImage: Uint8Array | undefined | null;
    productDateCreated: Date | undefined;
    productName: string | undefined;
    coverageTerm: number | undefined;
    assuredSum: number | undefined;
    description: string | undefined;
    isDeleted: boolean | undefined;
    premiumTerm: number | undefined;
    averageInterestRate: number | undefined;
    policyCurrency: PolicyCurrencyEnum | undefined;
    isAvailableToSmoker: boolean | undefined;
    productCategoryPricing: CategoryPricingEntity | undefined;
    clickThroughInfo: ClickThroughEntity | undefined;
    company: CompanyEntity | undefined;
    listOfAdditionalFeatures: FeatureEntity[] | undefined;
    listOfRiders: RiderEntity[] | undefined;
    listOfPremium: PremiumEntity[] | undefined;
    listOfSmokerPremium: PremiumEntity[] | undefined;

    constructor(productImage?: Uint8Array, productDateCreated?: Date,
        productName?: string, coverageTerm?: number, assuredSum?: number, description?: string,
        isDeleted?: boolean, premiumTerm?: number, averageInterestRate?: number, policyCurrency?: PolicyCurrencyEnum,
        isAvailableToSmoker?: boolean, productCategoryPricing?: CategoryPricingEntity, clickThroughInfo?: ClickThroughEntity,
        company?: CompanyEntity) {
            this.productId = null;
            this.productImage = productImage ;
            this.productDateCreated = productDateCreated;
            this.productName = productName;
            this.coverageTerm = coverageTerm;
            this.assuredSum = assuredSum;
            this.description = description;
            this.isDeleted = isDeleted;
            this.premiumTerm = premiumTerm;
            this.averageInterestRate = averageInterestRate;
            this.policyCurrency = policyCurrency;
            this.isAvailableToSmoker = isAvailableToSmoker;
            this.productCategoryPricing = productCategoryPricing;
            this.clickThroughInfo = clickThroughInfo;
            this.company = company;
            this.listOfAdditionalFeatures = new Array();
            this.listOfRiders = new Array();
            this.listOfPremium = new Array();
            this.listOfSmokerPremium = new Array();

    }





}
