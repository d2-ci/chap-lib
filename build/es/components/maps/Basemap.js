import { useContext, useEffect } from 'react';
import { MapContext } from './MapItem';
const Basemap = () => {
  const map = useContext(MapContext);
  useEffect(() => {
    map.addLayer(map.createLayer({
      type: 'tileLayer',
      url: '//cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }));
  }, [map]);
  return null;
};
export default Basemap;