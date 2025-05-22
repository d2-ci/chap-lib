import type { BackTestForecast } from './BackTestForecast';
import type { BackTestMetric } from './BackTestMetric';
export type BackTestFull = {
    datasetId: number;
    modelId: string;
    name?: (string | null);
    created?: (string | null);
    id: number;
    orgUnits?: Array<string>;
    splitPeriods?: Array<string>;
    metrics: Array<BackTestMetric>;
    forecasts: Array<BackTestForecast>;
};
//# sourceMappingURL=BackTestFull.d.ts.map