"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = exports.Select = exports.Arrow = exports.Text = exports.Icon = exports.Label = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../ButtonBase/styles");

var _evaiconsOutline = require("@styled-icons/evaicons-outline");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Button = (0, _styledComponents.default)(_styles.ButtonBase)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  pointer-events: ", ";\n  width: 180px;\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: #2d4f57;\n  }\n  position: relative;\n  ", ";\n"])), props => props.disabled ? "#f7f7f7" : "#38636D", props => props.disabled ? "#9b9b9b" : "#B9EFE7", props => props.disabled ? "none" : "auto", props => props.disabled ? "#f7f7f7 !important" : "#719198", props => _objectSpread({}, props.theme || {}));
exports.Button = Button;

const Label = _styledComponents.default.label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  &:hover {\n    cursor: pointer;\n  }\n  ", "\n"])), props => _objectSpread({}, props.theme || {}));

exports.Label = Label;

const Icon = _styledComponents.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: ", ";\n  right: ", ";\n  width: 18px;\n  ", "\n"])), props => props.type === "end" ? "" : "16px", props => props.type === "start" ? "" : "16px", props => _objectSpread({}, props.theme || {}));

exports.Icon = Icon;

const Text = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 12px;\n  ", "\n"])), props => _objectSpread({}, props.theme || {}));

exports.Text = Text;
const Arrow = (0, _styledComponents.default)(_evaiconsOutline.ArrowIosDownwardOutline)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 20px;\n  margin-left: 12px;\n  ", ";\n"])), props => _objectSpread({}, props.theme || {}));
exports.Arrow = Arrow;

const Select = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n\n  ", ";\n"])), props => _objectSpread({}, props.theme || {}));

exports.Select = Select;

const Options = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border: 1px solid #38636d;\n  border-top: transparent;\n  border-radius: 0 0 10px 10px;\n  width: 90%;\n  margin: 0 auto;\n  font-size: 1rem;\n  background-color: white;\n  display: ", ";\n  position: absolute;\n  top: 100%;\n  max-height: 120px;\n  overflow: auto;\n  z-index: 2;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  & > option {\n    padding: 5px 10px;\n    color: #38636d;\n    &:hover {\n      cursor: pointer;\n      background-color: #cdf3ee;\n    }\n    &:last-child {\n      border-radius: 0 0 10px 10px;\n    }\n  }\n\n  ", "\n"])), props => props.show ? "block" : "none", props => _objectSpread({}, props.theme || {}));

exports.Options = Options;