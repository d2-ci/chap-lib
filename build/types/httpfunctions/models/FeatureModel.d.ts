import type { LineStringModel } from './LineStringModel';
import type { MultiLineStringModel } from './MultiLineStringModel';
import type { MultiPointModel } from './MultiPointModel';
import type { MultiPolygonModel } from './MultiPolygonModel';
import type { PointModel } from './PointModel';
import type { PolygonModel } from './PolygonModel';
export type FeatureModel = {
    type?: string;
    geometry: (PointModel | MultiPointModel | LineStringModel | MultiLineStringModel | PolygonModel | MultiPolygonModel);
    id?: (string | null);
    properties?: (Record<string, any> | null);
};
//# sourceMappingURL=FeatureModel.d.ts.map