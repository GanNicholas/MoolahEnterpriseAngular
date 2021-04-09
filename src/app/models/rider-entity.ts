export class RiderEntity {
    riderId: number | undefined;
    riderName: string | undefined;
    riderPremiumValue: number | undefined;
    riderDescription: string | undefined;

    constructor(riderId?: number, riderName?: string, riderPremiumValue?: number, riderDescription?: string) {
        this.riderId = riderId;
        this.riderName = riderName;
        this.riderPremiumValue = riderPremiumValue;
        this.riderDescription = riderDescription;
    }
}
