"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Next;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Next(props) {
  const {
    disabled,
    text,
    iconEnd,
    iconStart,
    theme
  } = props;
  return /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled
  }, iconStart && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconStart,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "start"
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, {
    theme: theme === null || theme === void 0 ? void 0 : theme.text
  }, text), iconEnd && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconEnd,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "end"
  }), /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    theme: theme === null || theme === void 0 ? void 0 : theme.arrow
  }));
}