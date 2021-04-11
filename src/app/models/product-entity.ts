import { CategoryPricingEntity } from "./category-pricing-entity";
import { ClickThroughEntity } from "./click-through-entity";
import { CompanyEntity } from "./company-entity";
import { PolicyCurrencyEnum } from "./enums/policy-currency-enum.enum";
import { FeatureEntity } from "./feature-entity";
import { PremiumEntity } from "./premium-entity";
import { RiderEntity } from "./rider-entity";

export class ProductEntity {
    productId: number | null;
    productImage: Uint8Array | null;
    productDateCreated: Date;
    productName: string | undefined;
    coverageTerm: number | undefined;
    assuredSum: number | undefined;
    description: string | undefined;
    isDeleted: boolean;
    premiumTerm: number | undefined;
    averageInterestRate: number | undefined;
    policyCurrency: PolicyCurrencyEnum | undefined;
    isAvailableToSmoker: boolean | undefined;
    productCategoryPricing: CategoryPricingEntity | null;
    clickThroughInfo: ClickThroughEntity | undefined;
    company: CompanyEntity | null | undefined;
    listOfAdditionalFeatures: FeatureEntity[] = new Array();
    listOfRiders: RiderEntity[] = new Array();
    listOfPremium: PremiumEntity[] = new Array();
    listOfSmokerPremium: PremiumEntity[] = new Array();

    constructor(listOfAdditionalFeatures: FeatureEntity[], listOfRiders: RiderEntity[], listOfPremium: PremiumEntity[], listOfSmokerPremium: PremiumEntity[], productName?: string, coverageTerm?: number, assuredSum?: number, description?: string, premiumTerm?: number, averageInterestRate?: number, policyCurrency?: PolicyCurrencyEnum,
        isAvailableToSmoker?: boolean, clickThroughInfo?: ClickThroughEntity,
        company?: CompanyEntity | null) {
        this.productId = null;
        this.productImage = null;
        this.productDateCreated = new Date();
        this.productName = productName;
        this.coverageTerm = coverageTerm;
        this.assuredSum = assuredSum;
        this.description = description;
        this.isDeleted = false;
        this.premiumTerm = premiumTerm;
        this.averageInterestRate = averageInterestRate;
        this.policyCurrency = policyCurrency;
        this.isAvailableToSmoker = isAvailableToSmoker;
        this.productCategoryPricing = null;
        this.clickThroughInfo = clickThroughInfo;
        this.company = company;
        this.listOfAdditionalFeatures = listOfAdditionalFeatures;
        this.listOfRiders = listOfRiders;
        this.listOfPremium = listOfPremium;
        this.listOfSmokerPremium = listOfSmokerPremium;

    }





}
