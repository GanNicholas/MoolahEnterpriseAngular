import { CompanyEntity } from "./company-entity";
import { PointOfContactEntity } from "./point-of-contact-entity";

export class CreateCompanyEntityReq {
    companyEntity: CompanyEntity | undefined = new CompanyEntity();
    listOfPointOfContacts: PointOfContactEntity[] | undefined = new Array();

    constructor(companyEntity?: CompanyEntity, listOfPointOfContacts?: PointOfContactEntity[]) {
        this.companyEntity = companyEntity;
        this.listOfPointOfContacts = listOfPointOfContacts;

    }

}
