import type { ObservationBase } from './ObservationBase';
export type chap_core__rest_api_src__v1__routers__analytics__PredictionCreate = {
    name: string;
    geojson?: string | null;
    type?: string | null;
    observations: Array<ObservationBase>;
    modelId: string;
};
