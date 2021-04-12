import { PaymentEntity } from "./payment-entity";
import { PointOfContactEntity } from "./point-of-contact-entity";
import { ProductEntity } from "./product-entity";
import { RefundEntity } from "./refund-entity";

export class CompanyEntity {
    companyID : number |undefined;
    profilePic : Uint8Array | undefined | null;
    companyName : string | undefined;
    companyEmail : string | undefined;
    businessRegNumber : string | undefined;
    companyContactNumber : string | undefined;
    warningMessage : string | undefined;
    isVerified : boolean | undefined;
    password : string | undefined;
    verificationDate : Date | undefined;
    creditOwned : bigint | undefined;
    isDeactivated : boolean | undefined;
    isDeleted : boolean | undefined;
    isWarned : boolean | undefined;
    refund : RefundEntity | undefined;
    listOfPointOfContacts : PointOfContactEntity[];
    listOfPayments : PaymentEntity[]| undefined;
    listOfProducts : ProductEntity[] | undefined;
    resetPasswordPathParam : string | undefined | null;
    companyImage : any[];
    companyUrl : string | undefined;
    expiryDateOfPathParam : Date | undefined | null;

    constructor(companyID? : number, profilePic? : Uint8Array, companyName? : string, companyEmail? : string, businessRegNumber? : string,
        companyContactNumber? :string, warningMessage? : string, isVerified ? :boolean, password? : string, verificationDate? : Date,
        creditOwned? : bigint, isDeactivated? : boolean, isDeleted? : boolean, isWarned? : boolean, refund? : RefundEntity,
        listOfPointOfContacts ? : PointOfContactEntity[], listOfPayments ? : PaymentEntity[], listOfProducts ? : ProductEntity[],
        companyImage ? : string, companyUrl ? : string, expiryDateOfPathParam ? : Date){

            this.companyID = companyID;
            this.profilePic = profilePic;
            this.companyName = companyName;
            this.companyEmail = companyEmail;
            this.businessRegNumber = businessRegNumber;
            this.companyContactNumber = companyContactNumber;
            this.warningMessage = warningMessage;
            this.isVerified = isVerified;
            this.password = password;
            this.verificationDate = verificationDate;
            this.creditOwned = creditOwned;
            this.isDeactivated = isDeactivated;
            this.isDeleted = isDeleted;
            this.isWarned = isWarned;
            this.refund = refund;
            this.listOfPointOfContacts = new Array();
            this.listOfPayments = listOfPayments;
            this.listOfProducts = listOfProducts;
            this.companyImage = new Array();
            this.companyUrl = companyUrl;
            this.expiryDateOfPathParam = expiryDateOfPathParam;
    }
}
