import React from 'react';
import { EvaluationForSplitPoint } from '../../../interfaces/Evaluation';
interface ComparionPlotWrapperProps {
    evaluations: EvaluationForSplitPoint[];
    splitPeriods: string[];
}
export declare const ComparionPlotWrapper: ({ evaluations, splitPeriods, }: ComparionPlotWrapperProps) => React.JSX.Element;
export {};
