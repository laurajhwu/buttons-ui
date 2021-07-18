"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Confirm;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Confirm(props) {
  const {
    disabled,
    text,
    iconEnd,
    iconStart,
    theme,
    size,
    disableOnConfirm,
    onClick
  } = props;
  const [disableConfirm, setDisableConfirm] = (0, _react.useState)(false);

  function handleConfirmDisable(event) {
    disableOnConfirm && setDisableConfirm(true);
    onClick && onClick(event);
  }

  (0, _react.useEffect)(() => {
    if (disableOnConfirm === false) {
      setDisableConfirm(false);
    }
  }, [disableOnConfirm]);
  return /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled || disableConfirm,
    size: size,
    onClick: handleConfirmDisable
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
  }), size !== "small" && /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    theme: theme === null || theme === void 0 ? void 0 : theme.arrow
  }));
}