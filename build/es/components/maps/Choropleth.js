import { useContext, useEffect } from 'react';
import { MapContext } from './MapItem';
const Choropleth = ({ period, prediction, geojson, dataElement = 'median', bins, colors, }) => {
    const map = useContext(MapContext);
    useEffect(() => {
        if (geojson.hasOwnProperty('features')) {
            const features = geojson.features.map((feature) => {
                const value = prediction.dataValues.find((d) => d.period === period &&
                    d.orgUnit === feature.id &&
                    d.dataElement === dataElement)?.value;
                const binIndex = bins.findIndex((bin) => value >= bin.startValue && value <= bin.endValue);
                const color = colors[binIndex];
                return {
                    ...feature,
                    properties: {
                        ...feature.properties,
                        value: value || 'No value',
                        color,
                    },
                };
            });
            const config = {
                type: 'choropleth',
                data: features,
                opacity: 0.8,
                hoverLabel: '{name} ({value})',
            };
            map.addLayer(map.createLayer(config));
            map.fitBounds(map.getLayersBounds());
        }
    }, [map, period, prediction, dataElement, geojson, bins]);
    return null;
};
export default Choropleth;
