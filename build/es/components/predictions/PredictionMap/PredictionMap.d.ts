import React from 'react';
import { FullPredictionResponseExtended } from '../../../interfaces/Prediction';
interface PredictionMapProps {
    data: FullPredictionResponseExtended;
    predictionTargetName: string;
}
export declare const PredictionMap: ({ data, predictionTargetName, }: PredictionMapProps) => React.JSX.Element | null;
export {};
