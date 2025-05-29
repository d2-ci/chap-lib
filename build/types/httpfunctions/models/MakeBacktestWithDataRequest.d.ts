import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { FetchRequest } from './FetchRequest';
import type { ObservationBase } from './ObservationBase';
export type MakeBacktestWithDataRequest = {
    name: string;
    type?: (string | null);
    geojson: FeatureCollectionModel;
    providedData: Array<ObservationBase>;
    dataToBeFetched: Array<FetchRequest>;
    modelId: string;
    nPeriods: number;
    nSplits: number;
    stride: number;
};
//# sourceMappingURL=MakeBacktestWithDataRequest.d.ts.map