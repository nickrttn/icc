exports.ids = [0];
exports.modules = {

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(21);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tools() {
  return _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      { className: _styles2.default.tool },
      _react2.default.createElement(
        'a',
        { href: 'https://expressjs.com/' },
        'Express'
      ),
      ' - server-side rendering'
    ),
    _react2.default.createElement(
      'li',
      { className: _styles2.default.tool },
      _react2.default.createElement(
        'a',
        { href: 'https://facebook.github.io/react/' },
        'React'
      ),
      ' - component library'
    ),
    _react2.default.createElement(
      'li',
      { className: _styles2.default.tool },
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/reactjs/react-router' },
        'React Router'
      ),
      ' - server and browser routing'
    ),
    _react2.default.createElement(
      'li',
      { className: _styles2.default.tool },
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/css-modules/css-modules' },
        'Sass Modules'
      ),
      ' - CSS Modules with a Sass pre-processor for styles'
    ),
    _react2.default.createElement(
      'li',
      { className: _styles2.default.tool },
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/airbnb/enzyme' },
        'Enzyme'
      ),
      ' - React component testing'
    )
  );
}

var _default = Tools;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tools, 'Tools', '/Users/nickrutten/Developer/cmd/icc/src/components/Tools/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/nickrutten/Developer/cmd/icc/src/components/Tools/index.js');
}();

;

/***/ },

/***/ 21:
/***/ function(module, exports) {

module.exports = {
	"tool": "styles-tool--3Brnj"
};

/***/ }

};;
//# sourceMappingURL=0-fe25db3cf57df4a98f15.js.map