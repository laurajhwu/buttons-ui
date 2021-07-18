"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ButtonBase = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 16px;\n  border-radius: 10px;\n  border: none;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])));

exports.ButtonBase = ButtonBase;