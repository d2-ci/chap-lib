import type { FeatureTypeRead } from './FeatureTypeRead';
import type { PeriodType } from './PeriodType';
export type ModelSpecRead = {
    name: string;
    supportedPeriodTypes?: PeriodType;
    description?: string;
    author?: string;
    id: number;
    features: Array<FeatureTypeRead>;
    target: FeatureTypeRead;
};
