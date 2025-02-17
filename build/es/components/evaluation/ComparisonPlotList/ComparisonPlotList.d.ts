import React from 'react';
import { EvaluationPerOrgUnit } from '../../../interfaces/Evaluation';
interface ComparisonPlotListProps {
    evaluationPerOrgUnits: EvaluationPerOrgUnit[];
    useVirtuoso?: boolean;
    useVirtuosoWindowScroll?: boolean;
}
export declare const ComparisonPlotList: React.FC<ComparisonPlotListProps>;
export {};
