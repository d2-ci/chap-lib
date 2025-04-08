import React from 'react';
import { HighChartsData } from '../../../interfaces/Evaluation';
interface ResultPlotProps {
    data: HighChartsData;
    modelName: string;
    syncZoom: boolean;
}
export declare const ResultPlot: ({ data, modelName, syncZoom }: ResultPlotProps) => React.JSX.Element;
export {};
