import React from 'react';
import { FullPredictionResponseExtended } from '../../../interfaces/Prediction';
interface PredicationChartProps {
    data: FullPredictionResponseExtended;
    predictionTargetName: string;
}
export declare const UncertaintyAreaChart: ({ data, predictionTargetName, }: PredicationChartProps) => React.JSX.Element;
export {};
