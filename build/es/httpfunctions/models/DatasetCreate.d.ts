import type { FeatureCollectionModel } from './FeatureCollectionModel';
import type { ObservationBase } from './ObservationBase';
export type DatasetCreate = {
    name: string;
    geojson: FeatureCollectionModel;
    type?: (string | null);
    observations: Array<ObservationBase>;
};
