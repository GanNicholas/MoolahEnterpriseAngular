import { PointOfContactEntity } from "./point-of-contact-entity";

export class CreateCompanyEntityReq {
    companyEmail: string | undefined;
    password: string | undefined;
    companyName: string | undefined;
    businessRegNumber: string | undefined;
    companyContactNumber: string | undefined;
    creditOwned: bigint | undefined;
    companyImage: string | undefined;
    companyUrl: string | undefined;
    listOfPointOfContacts: PointOfContactEntity[] | undefined;

    constructor(companyEmail?: string, password?: string, companyName?: string, businessRegNumber?: string,
        companyContactNumber?: string, companyImage?: string, companyUrl?: string, listOfPointOfContacts?: PointOfContactEntity[]) {
        this.companyEmail = companyEmail;
        this.password = password;
        this.companyName = companyName;
        this.businessRegNumber = businessRegNumber;
        this.companyContactNumber = companyContactNumber;
        this.companyImage = companyImage;
        this.companyUrl = companyUrl;
        this.listOfPointOfContacts = listOfPointOfContacts;

    }

}
