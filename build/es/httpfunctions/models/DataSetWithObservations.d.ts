import type { ObservationBase } from './ObservationBase';
export type DataSetWithObservations = {
    name: string;
    geojson?: string | null;
    type?: string | null;
    id: number;
    observations: Array<ObservationBase>;
};
