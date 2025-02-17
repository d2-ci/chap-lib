import type { FetchRequest } from './FetchRequest';
import type { ObservationBase } from './ObservationBase';
export type DatasetMakeRequest = {
    name: string;
    geojson?: string | null;
    type?: string | null;
    providedData: Array<ObservationBase>;
    dataToBeFetched: Array<FetchRequest>;
};
