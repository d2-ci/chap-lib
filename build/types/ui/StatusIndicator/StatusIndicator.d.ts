import React from 'react';
export type StatusIndicatorVariant = 'default' | 'destructive' | 'info' | 'warning' | 'success';
export type Props = {
    label: string;
    variant?: StatusIndicatorVariant;
    active?: boolean;
};
export declare const StatusIndicator: ({ label, variant, active, }: Props) => React.JSX.Element;
//# sourceMappingURL=StatusIndicator.d.ts.map