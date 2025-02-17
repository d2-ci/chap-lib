export type BackTestRead = {
    datasetId: number;
    modelId: string;
    id: number;
    name?: string | null;
    timestamp?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    orgUnitIds?: Array<string>;
};
