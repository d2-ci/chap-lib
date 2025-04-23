import type { FeatureTypeRead } from './FeatureTypeRead';
import type { PeriodType } from './PeriodType';
export type ModelSpecRead = {
    name: string;
    displayName: string;
    supportedPeriodTypes?: PeriodType;
    description?: string;
    author?: string;
    organization?: (string | null);
    organizationLogoUrl?: (string | null);
    sourceUrl?: (string | null);
    contactEmail?: (string | null);
    citationInfo?: (string | null);
    id: number;
    covariates: Array<FeatureTypeRead>;
    target: FeatureTypeRead;
};
