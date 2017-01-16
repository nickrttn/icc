exports.ids = [1];
exports.modules = {

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(20);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'p',
      { className: _styles2.default.paragraph },
      'Welcome to the ',
      _react2.default.createElement(
        'strong',
        null,
        'Universal React Starter-kyt'
      ),
      '. This starter kyt should serve as the base for an advanced, server-rendered React app.'
    ),
    _react2.default.createElement(
      'p',
      { className: _styles2.default.paragraph },
      'Check out the Tools section for an outline of the libraries that are used in this Starter-kyt.'
    )
  );
}

var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/nickrutten/Developer/cmd/icc/src/components/Home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/nickrutten/Developer/cmd/icc/src/components/Home/index.js');
}();

;

/***/ },

/***/ 20:
/***/ function(module, exports) {

module.exports = {
	"paragraph": "styles-paragraph--220JU"
};

/***/ }

};;
//# sourceMappingURL=1-d4907371af8813bf2880.js.map