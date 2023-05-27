"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _InnerContainer = _interopRequireDefault(require("./InnerContainer"));
var _LabelContainer = _interopRequireDefault(require("./LabelContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const tempTotal = 1000;
const items = [100, 200, 300, 400];
const Container = _ref => {
  let {
    total = 1000,
    items = [100, 200, 300, 400],
    containerStyles = {},
    innerContainerStyles = {},
    labelLinesVisible = true,
    labelLinesContainer = {},
    innerLabelLinesContainer = {},
    hrStyles = {},
    labelStyles = {}
  } = _ref;
  const mainContainerStyles = _objectSpread({
    width: '100%',
    display: "flex",
    border: "1px solid black",
    marginBottom: "10px"
  }, containerStyles);
  const mainInnerContainerStyles = _objectSpread({
    border: "1px solid black",
    display: "flex",
    justifyContent: "center"
  }, innerContainerStyles);
  const mainLabelLinesContainer = _objectSpread({
    width: '100%',
    display: "flex"
  }, labelLinesContainer);
  const mainInnerLabelLinesContainer = _objectSpread({
    display: "flex",
    justifyContent: "space-between",
    borderLeft: "2px solid black",
    borderRight: "1px solid black"
  }, innerLabelLinesContainer);
  const mainHrStyles = _objectSpread({
    width: "100%",
    border: "1px solid #333"
  }, hrStyles);
  const mainLabelStyles = _objectSpread({
    padding: "0px 2px"
  }, labelStyles);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: mainContainerStyles
  }, items === null || items === void 0 ? void 0 : items.map((item, index) => /*#__PURE__*/_react.default.createElement(_InnerContainer.default, {
    key: index,
    item: item,
    total: total,
    mainInnerContainerStyles: mainInnerContainerStyles
  }))), labelLinesVisible && /*#__PURE__*/_react.default.createElement(_LabelContainer.default, {
    items: items,
    total: total,
    mainLabelLinesContainer: mainLabelLinesContainer,
    mainInnerLabelLinesContainer: mainInnerLabelLinesContainer,
    mainHrStyles: mainHrStyles,
    mainLabelStyles: mainLabelStyles
  }));
};
var _default = Container;
exports.default = _default;