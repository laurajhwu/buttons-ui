"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconBtn;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBtn(props) {
  const {
    disabled,
    icon,
    theme,
    circle,
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled,
    circle: circle
  }, icon && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: icon,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon
  }), children);
}