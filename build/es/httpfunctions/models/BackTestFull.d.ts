import type { BackTestForecast } from './BackTestForecast';
import type { BackTestMetric } from './BackTestMetric';
export type BackTestFull = {
    datasetId: number;
    modelId: string;
    id: number;
    name?: string | null;
    timestamp?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    orgUnitIds?: Array<string>;
    metrics: Array<BackTestMetric>;
    forecasts: Array<BackTestForecast>;
};
