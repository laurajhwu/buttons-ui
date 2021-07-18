"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Target = exports.Text = exports.Icon = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../ButtonBase/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = (0, _styledComponents.default)(_styles.ButtonBase)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  pointer-events: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: #9fd3ce;\n  }\n  ", ";\n"])), props => props.disabled ? "#f7f7f7" : "#B9EFE7", props => props.disabled ? "#9b9b9b" : "#28646e", props => props.disabled ? "none" : "auto", props => props.disabled ? "#f7f7f7 !important" : " #cdf3ee", props => _objectSpread({}, props.theme || {}));
exports.Button = Button;

const Icon = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  margin-right: ", ";\n  width: 18px;\n  ", "\n"])), props => props.type === "start" ? 0 : "12px", props => props.type === "end" ? 0 : "12px", props => _objectSpread({}, props.theme || {}));

exports.Icon = Icon;

const Text = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n\n  ", "\n"])), props => _objectSpread({}, props.theme || {}));

exports.Text = Text;

const Target = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), props => _objectSpread({}, props.theme || {}));

exports.Target = Target;