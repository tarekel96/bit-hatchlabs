"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("./icons.js");

var _buttonModule = _interopRequireDefault(require("./button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A React button component that dynamically changes themes, sizes, and adds arrow icons depending on the props passed to it.
 * Possible theme combinations.
 * Light Mode: primary, primary-disabled, secondary, secondary-disabled, text, text-disabled, text-yellow, text-orange, text-blue, text-aqua
 * Dark Mode: d-primary, d-primary-disabled, d-secondary, d-secondary-disabled, d-text, d-text-disabled
 * @name Button
 * @param children - the content for the button, add text like would normally do for an html button.
 * @param variant {string} - the version of a button. Prepend the version with a "d-" to use the dark version of the button.
 * @param size {string} - the size for a button: "big" or "small".
 * @param leftArrow {boolean} - includes an arrow icon to the left of the content. Arrows are used only with the "text" variant of button.
 * @param rightArrow {boolean} - includes an arrow icon to the right of the content. Arrows are used only with the "text" variant of button.
 * @return - returns a button component with various prop options to change it's styling.
 */
var Button = function Button(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? "button" : _ref$children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "primary" : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      _ref$leftArrow = _ref.leftArrow,
      leftArrow = _ref$leftArrow === void 0 ? false : _ref$leftArrow,
      _ref$rightArrow = _ref.rightArrow,
      rightArrow = _ref$rightArrow === void 0 ? false : _ref$rightArrow;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClick = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "\n        button \n        ".concat(_buttonModule.default[variant + clicked], "\n        ").concat(_buttonModule.default[size], "\n  "),
    onClick: function onClick() {
      setClick("-clicked");
    },
    size: size
  }, /*#__PURE__*/_react.default.createElement("div", null, leftArrow ? /*#__PURE__*/_react.default.createElement(_icons.LeftArrow, {
    styles: _buttonModule.default
  }) : "", /*#__PURE__*/_react.default.createElement("span", {
    className: "button-content"
  }, children), rightArrow ? /*#__PURE__*/_react.default.createElement(_icons.RightArrow, {
    styles: _buttonModule.default
  }) : ""));
};

exports.Button = Button;

//# sourceMappingURL=index.js.map