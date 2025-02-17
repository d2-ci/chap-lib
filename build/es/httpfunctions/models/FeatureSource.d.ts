import type { PeriodType } from './PeriodType';
export type FeatureSource = {
    name: string;
    displayName: string;
    featureType: string;
    provider: string;
    supportedPeriodTypes?: Array<PeriodType>;
};
