import { CompanyEntity } from "./company-entity";

export class PointOfContactEntity {
    pocId: number | undefined;
    pocName: string | undefined;
    pocMobileNumber: string | undefined;
    pocEmail: string | undefined;
    company: CompanyEntity | undefined;

    constructor(pocId?: number, pocName?: string, pocMobileNumber?: string, pocEmail?: string,
        company?: CompanyEntity) {
        this.pocId = pocId;
        this.pocName = pocName;
        this.pocMobileNumber = pocMobileNumber;
        this.pocEmail = pocEmail;
        this.company = company;
    }
}
