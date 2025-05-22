import React, { ReactNode } from 'react';
export type PillVariant = 'default' | 'destructive' | 'info' | 'warning';
interface PillProps {
    children: ReactNode;
    variant?: PillVariant;
}
export declare const Pill: ({ children, variant }: PillProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Pill.d.ts.map