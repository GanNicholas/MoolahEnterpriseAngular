import { CompanyEntity } from "./company-entity";
import { PointOfContactEntity } from "./point-of-contact-entity";

export class CreateCompanyEntityReq {
    companyEntity: CompanyEntity | undefined;
    listOfPointOfContacts: PointOfContactEntity[] | undefined;

    constructor(companyEntity?: CompanyEntity, listOfPointOfContacts?: PointOfContactEntity[]) {
        this.companyEntity = companyEntity;
        this.listOfPointOfContacts = listOfPointOfContacts;

    }

}
