"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _InnerLabelContainer = _interopRequireDefault(require("./InnerLabelContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LabelContainer = _ref => {
  let {
    items = [],
    total,
    mainInnerLabelLinesContainer,
    mainHrStyles,
    mainLabelStyles,
    mainLabelLinesContainer
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: mainLabelLinesContainer
  }, items === null || items === void 0 ? void 0 : items.map((item, index) => /*#__PURE__*/_react.default.createElement(_InnerLabelContainer.default, {
    key: index,
    item: item,
    total: total,
    mainInnerLabelLinesContainer: mainInnerLabelLinesContainer,
    mainHrStyles: mainHrStyles,
    mainLabelStyles: mainLabelStyles,
    mainLabelLinesContainer: mainLabelLinesContainer
  })));
};
var _default = LabelContainer;
exports.default = _default;