"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectBtn;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SelectBtn(props) {
  const {
    disabled,
    defaultValue,
    iconEnd,
    iconStart,
    theme,
    onSelect,
    options,
    hideOnSelect,
    children
  } = props;
  const [value, setValue] = (0, _react.useState)();
  const [show, setShow] = (0, _react.useState)(false);

  function handleSelect(event) {
    setValue(event.target.innerHTML);

    if (!hideOnSelect && hideOnSelect !== undefined) {
      setShow(false);
    }
  }

  function handleClickButton(event) {
    event.stopPropagation();
    setShow(!show);
  }

  (0, _react.useEffect)(() => {
    if (options) {
      var _options$find;

      setValue(((_options$find = options.find(option => defaultValue === option.value || defaultValue === option.content)) === null || _options$find === void 0 ? void 0 : _options$find.content) || options[0].content);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (onSelect) {
      onSelect(value);
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_styles.Select, {
    theme: theme === null || theme === void 0 ? void 0 : theme.select
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    theme: theme === null || theme === void 0 ? void 0 : theme.button,
    disabled: disabled,
    onClick: handleClickButton
  }, iconStart && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconStart,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "start"
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, {
    theme: theme === null || theme === void 0 ? void 0 : theme.text
  }, value), children, iconEnd && /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    src: iconEnd,
    theme: theme === null || theme === void 0 ? void 0 : theme.icon,
    type: "end"
  }), /*#__PURE__*/_react.default.createElement(_styles.Arrow, {
    theme: theme === null || theme === void 0 ? void 0 : theme.arrow
  })), /*#__PURE__*/_react.default.createElement(_styles.Options, {
    theme: theme === null || theme === void 0 ? void 0 : theme.options,
    show: show
  }, options && options.map(opt => /*#__PURE__*/_react.default.createElement("option", {
    value: opt.value || opt.content,
    key: opt.key,
    onClick: handleSelect
  }, opt.content))));
}