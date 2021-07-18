"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Upload;

var _react = _interopRequireDefault(require("react"));

var _reactUuid = _interopRequireDefault(require("react-uuid"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Upload(props) {
  const id = (0, _reactUuid.default)();
  const {
    disabled,
    text,
    iconEnd,
    iconStart,
    theme,
    onChange,
    accept,
    children
  } = props;

  function handleOnChange(event) {
    const file = event.target.files[0];

    if (file) {
      onChange && onChange(file);
    } else {
      throw "no file was uploaded";
    }
  }

  return /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, {
    htmlFor: "upload-file".concat(id),
    theme: theme === null || theme === void 0 ? void 0 : theme.label
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
  }), /*#__PURE__*/_react.default.createElement(_styles.FileInput, {
    type: "file",
    accept: accept || "*",
    id: "upload-file".concat(id),
    onChange: handleOnChange
  })));
}