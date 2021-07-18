"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FullScreen;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FullScreen(props) {
  const {
    disabled,
    text,
    iconEnd,
    iconStart,
    theme,
    target,
    children
  } = props;
  const targetRef = (0, _react.useRef)();

  function handleFullScreen() {
    if (!document.fullscreenElement) {
      targetRef.current.requestFullscreen();
    } else if (targetRef.current.webkitRequestFullscreen) {
      targetRef.current.webkitRequestFullscreen();
    } else if (targetRef.current.msRequestFullscreen) {
      targetRef.current.msRequestFullscreen();
    }
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Target, {
    theme: theme === null || theme === void 0 ? void 0 : theme.target
  }, target && target(targetRef)), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled,
    onClick: handleFullScreen
  }, iconStart && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconStart,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "start"
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, {
    theme: theme === null || theme === void 0 ? void 0 : theme.text
  }, text), children, iconEnd && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconEnd,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "end"
  })));
}