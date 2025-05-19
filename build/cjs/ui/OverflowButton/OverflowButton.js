"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverflowButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OverflowButton = _ref => {
  let {
    label,
    primary,
    secondary,
    small,
    large,
    disabled,
    onClick: handleClick,
    open: propsOpen,
    icon,
    dataTest,
    component
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const anchorRef = (0, _react.useRef)(null);
  const open = propsOpen !== undefined ? propsOpen : isOpen;
  const toggle = () => {
    if (propsOpen === undefined) {
      setIsOpen(prev => !prev);
    }
    handleClick === null || handleClick === void 0 ? void 0 : handleClick();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: anchorRef
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    title: label !== null && label !== void 0 ? label : _d2I18n.default.t('More'),
    primary: primary,
    secondary: secondary,
    dataTest: dataTest,
    disabled: disabled,
    small: small,
    large: large,
    onClick: toggle,
    icon: icon
  }, label), open && /*#__PURE__*/_react.default.createElement(_ui.Layer, {
    onBackdropClick: toggle
  }, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    reference: anchorRef,
    placement: "bottom-end"
  }, component)));
};
exports.OverflowButton = OverflowButton;