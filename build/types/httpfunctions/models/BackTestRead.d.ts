import type { DataSetMeta } from './DataSetMeta';
export type BackTestRead = {
    datasetId: number;
    modelId: string;
    name?: (string | null);
    created?: (string | null);
    id: number;
    orgUnits?: Array<string>;
    splitPeriods?: Array<string>;
    dataset: DataSetMeta;
};
//# sourceMappingURL=BackTestRead.d.ts.map