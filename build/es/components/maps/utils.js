export const getEqualIntervals = (minValue, maxValue, numClasses = 5) => {
  const bins = [];
  const binSize = (maxValue - minValue) / numClasses;
  for (let i = 0; i < numClasses; i++) {
    const startValue = minValue + i * binSize;
    const endValue = i < numClasses - 1 ? startValue + binSize : maxValue;
    bins.push({
      startValue: Math.round(startValue),
      endValue: Math.round(endValue)
    });
  }
  return bins;
};
export const parseOrgUnits = orgUnits => {
  return {
    type: 'FeatureCollections',
    features: orgUnits.map(ou => {
      // get geotype
      let type = 'Point';
      if (ou.ty === 2) {
        type = 'Polygon';
        if (ou.co.substring(0, 4) === '[[[[') {
          type = 'MultiPolygon';
        }
      }
      const geom = {
        type,
        coordinates: JSON.parse(ou.co)
      };
      return {
        type: 'Feature',
        id: ou.id,
        properties: {
          name: ou.na
        },
        geometry: geom
      };
    })
  };
};