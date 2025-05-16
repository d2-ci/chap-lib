"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MapContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _mapsGl = _interopRequireDefault(require("@dhis2/maps-gl"));
var _MapItemModule = _interopRequireDefault(require("./MapItem.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MapContext = exports.MapContext = /*#__PURE__*/(0, _react.createContext)(null);
const MapItem = _ref => {
  let {
    syncId,
    children
  } = _ref;
  const [map, setMap] = (0, _react.useState)(null);
  const mapEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const map = new _mapsGl.default(mapEl.current);
    map.once('ready', () => setMap(map));
    map.sync(syncId);
    map.resize();
    return () => {
      map.remove();
    };
  }, [mapEl, syncId]);
  return /*#__PURE__*/_react.default.createElement(MapContext.Provider, {
    value: map
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: mapEl,
    className: _MapItemModule.default.mapItem
  }, map && children));
};
var _default = exports.default = MapItem;