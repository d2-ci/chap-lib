import { SingleSelectFieldProps } from '@dhis2/ui';
import React from 'react';
interface SplitPeriodSelectorProps extends SingleSelectFieldProps {
    splitPeriods: string[];
    setSelectedSplitPeriod: (splitPeriod: string) => void;
    selectedSplitPeriod: string;
}
declare const SplitPeriodSelector: ({ splitPeriods, setSelectedSplitPeriod, selectedSplitPeriod, ...singleSelectFieldProps }: SplitPeriodSelectorProps) => React.JSX.Element;
export default SplitPeriodSelector;
//# sourceMappingURL=SplitPeriodSelector.d.ts.map