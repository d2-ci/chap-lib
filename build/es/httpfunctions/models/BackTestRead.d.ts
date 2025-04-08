export type BackTestRead = {
    datasetId: number;
    modelId: string;
    name?: (string | null);
    created?: (string | null);
    id: number;
    startDate?: (string | null);
    endDate?: (string | null);
    orgUnitIds?: Array<string>;
};
