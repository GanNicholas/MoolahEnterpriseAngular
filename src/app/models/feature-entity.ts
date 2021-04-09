export class FeatureEntity {

    featureId : number | undefined;
    featureName : string | undefined;
    featureDescription : string | undefined;

    constructor(featureId ?: number, featureName ?: string, featureDescription ?: string){
        this.featureId = featureId;
        this.featureName = featureName;
        this.featureDescription = featureDescription;
    }

}

