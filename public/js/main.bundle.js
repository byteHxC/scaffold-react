webpackJsonp([0],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _css = __webpack_require__(321);

var _localeProvider = __webpack_require__(324);

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _es_ES = __webpack_require__(246);

var _es_ES2 = _interopRequireDefault(_es_ES);

var _App = __webpack_require__(258);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _localeProvider2.default,
    { locale: _es_ES2.default },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = __webpack_require__(259);

var _modal = __webpack_require__(266);

var _modal2 = _interopRequireDefault(_modal);

var _css2 = __webpack_require__(136);

var _button = __webpack_require__(92);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = { visible: false }, _this.showModal = function () {
      _this.setState({
        visible: true
      });
    }, _this.handleOk = function (e) {
      console.log(e);
      _this.setState({
        visible: false
      });
    }, _this.handleCancel = function (e) {
      console.log(e);
      _this.setState({
        visible: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _button2.default,
          { type: 'primary', onClick: this.showModal },
          'Open'
        ),
        _react2.default.createElement(
          _modal2.default,
          {
            title: 'Basic Modal',
            visible: this.state.visible,
            onOk: this.handleOk,
            onCancel: this.handleCancel
          },
          _react2.default.createElement(
            'p',
            null,
            'Some contents...'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Some contents...'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Some contents...'
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ })

},[147]);