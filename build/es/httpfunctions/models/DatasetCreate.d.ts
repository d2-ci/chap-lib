import type { ObservationBase } from './ObservationBase';
export type DatasetCreate = {
    name: string;
    geojson?: string | null;
    type?: string | null;
    observations: Array<ObservationBase>;
};
