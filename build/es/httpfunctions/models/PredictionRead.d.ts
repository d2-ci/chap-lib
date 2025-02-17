import type { ForecastRead } from './ForecastRead';
export type PredictionRead = {
    datasetId: number;
    estimatorId: string;
    nPeriods: number;
    id: number;
    forecasts: Array<ForecastRead>;
};
