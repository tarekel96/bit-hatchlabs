"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
 * A simple React button component
 * @name Button
 * @returns {} returns a simple button component with various prop options to change it's styling
 */
function Button(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClick = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "\n        button \n        ".concat(_buttonModule.default[props.version + clicked], "\n        ").concat(_buttonModule.default[props.size], "\n  "),
    onClick: function onClick() {
      setClick("-clicked");
    },
    size: props.size
  }, /*#__PURE__*/_react.default.createElement("div", null, props.leftIcon ? /*#__PURE__*/_react.default.createElement(LeftArrow, null) : "", /*#__PURE__*/_react.default.createElement("span", {
    className: "button-content"
  }, props.content), props.rightIcon ? /*#__PURE__*/_react.default.createElement(RightArrow, null) : ""));
}

Button.propTypes = {
  /**
   * The content for the button
   */
  content: _propTypes.default.string,

  /**
   * The version of a button ie primary, secondary, text, etc.
   * Possible combinations: primary, primary-disabled, secondary, secondary-disabled, text, text-disabled, text-yellow, text-orange, text-blue, text-aqua
   */
  version: _propTypes.default.string,

  /**
   * The size for a button: "big" or "small"
   */
  size: _propTypes.default.string,

  /**
   * Includes an icon to the left of the content
   */
  leftIcon: _propTypes.default.bool,

  /**
   * Includes an icon to the right of the content
   */
  rightIcon: _propTypes.default.bool
};
Button.defaultProps = {
  content: "Content"
};

var LeftArrow = function LeftArrow(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "".concat(_buttonModule.default["icon-left"]),
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.394793 5.65313C0.395581 5.65231 0.396372 5.65149 0.397167 5.65067L5.54272 0.374328C5.73089 0.181376 6.03597 0.181376 6.22414 0.374328C6.41231 0.567279 6.41231 0.880116 6.22414 1.07307L1.8952 5.51205H19.262C19.5315 5.51205 19.75 5.73053 19.75 6.00004C19.75 6.26956 19.5315 6.48804 19.262 6.48804H1.8952L6.22414 10.927C6.41231 11.12 6.41231 11.4328 6.22414 11.6258C6.03597 11.8187 5.73089 11.8187 5.54272 11.6258L0.397167 6.34941C0.396372 6.3486 0.395581 6.34778 0.394793 6.34696C0.305389 6.25851 0.25 6.13575 0.25 6.00004C0.25 5.86434 0.305389 5.74158 0.394793 5.65313Z"
  }));
};

var RightArrow = function RightArrow() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "".concat(_buttonModule.default["icon-right"]),
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.6052 5.64849C19.6044 5.64767 19.6036 5.64685 19.6028 5.64604L14.4573 0.369689C14.2691 0.176738 13.964 0.176738 13.7759 0.369689C13.5877 0.562641 13.5877 0.875477 13.7759 1.06843L18.1048 5.50741H0.737999C0.468485 5.50741 0.25 5.72589 0.25 5.99541C0.25 6.26492 0.468485 6.4834 0.737999 6.4834H18.1048L13.7759 10.9224C13.5877 11.1153 13.5877 11.4282 13.7759 11.6211C13.964 11.8141 14.2691 11.8141 14.4573 11.6211L19.6028 6.34477C19.6036 6.34396 19.6044 6.34314 19.6052 6.34232C19.6946 6.25387 19.75 6.13111 19.75 5.99541C19.75 5.8597 19.6946 5.73694 19.6052 5.64849Z"
  }));
};

//# sourceMappingURL=index.js.map