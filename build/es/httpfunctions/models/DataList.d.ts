import type { DataElement } from './DataElement';
export type DataList = {
    featureId: string;
    dhis2Id: string;
    data: Array<DataElement>;
};
