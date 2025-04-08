import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { FetchRequest } from './FetchRequest';
import type { ObservationBase } from './ObservationBase';
export type MakePredictionRequest = {
    name: string;
    geojson: FeatureCollectionModel;
    type?: (string | null);
    providedData: Array<ObservationBase>;
    dataToBeFetched: Array<FetchRequest>;
    modelId: string;
    metaData?: Record<string, any>;
};
