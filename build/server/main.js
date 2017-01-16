module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + "-" + {"0":"fe25db3cf57df4a98f15","1":"d4907371af8813bf2880"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(7);

var _compression2 = _interopRequireDefault(_compression);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _RouterContext = __webpack_require__(14);

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _createMemoryHistory = __webpack_require__(15);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _match = __webpack_require__(16);

var _match2 = _interopRequireDefault(_match);

var _template = __webpack_require__(4);

var _template2 = _interopRequireDefault(_template);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientAssets = __webpack_require__(6); // eslint-disable-line import/no-dynamic-require
var app = (0, _express2.default)();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use((0, _compression2.default)());

// Setup the public directory so that we can server static assets.
app.use(_express2.default.static(_path2.default.join(process.cwd(), "build/public")));

// Setup server side routing.
app.get('*', function (request, response) {
  var history = (0, _createMemoryHistory2.default)(request.originalUrl);

  (0, _match2.default)({ routes: _routes2.default, history: history }, function (error, redirectLocation, renderProps) {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, '' + redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // When a React Router route is matched then we render
      // the components and assets into the template.
      response.status(200).send((0, _template2.default)({
        root: (0, _server.renderToString)(_react2.default.createElement(_RouterContext2.default, renderProps)),
        jsBundle: clientAssets.main.js,
        cssBundle: clientAssets.main.css
      }));
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(parseInt("3000", 10));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/nickrutten/Developer/cmd/icc/src/server/index.js');
}();

;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(12);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(5);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('i', { className: _styles2.default.logo }),
    _react2.default.createElement(
      'ul',
      { className: _styles2.default.nav },
      _react2.default.createElement(
        'li',
        { className: _styles2.default.navItem },
        _react2.default.createElement(
          _Link2.default,
          { className: _styles2.default.link, to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: _styles2.default.navItem },
        _react2.default.createElement(
          _Link2.default,
          { className: _styles2.default.link, to: '/tools' },
          'Tools'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.content },
      children
    )
  );
}

App.propTypes = {
  children: _react.PropTypes.node
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/nickrutten/Developer/cmd/icc/src/components/App/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/nickrutten/Developer/cmd/icc/src/components/App/index.js');
}();

;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Route = __webpack_require__(13);

var _Route2 = _interopRequireDefault(_Route);

var _IndexRoute = __webpack_require__(11);

var _IndexRoute2 = _interopRequireDefault(_IndexRoute);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

var importHome = function importHome(nextState, cb) {
  __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, 18)).then(function (module) {
    return cb(null, module.default);
  }).catch(function (e) {
    throw e;
  });
};

var importTools = function importTools(nextState, cb) {
  __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 19)).then(function (module) {
    return cb(null, module.default);
  }).catch(function (e) {
    throw e;
  });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
var routes = _react2.default.createElement(
  _Route2.default,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_IndexRoute2.default, { getComponent: importHome }),
  _react2.default.createElement(_Route2.default, { path: 'tools', getComponent: importTools })
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (false) {
  require('../components/Home'); // eslint-disable-line global-require
  require('../components/Tools'); // eslint-disable-line global-require
}

var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(importHome, 'importHome', '/Users/nickrutten/Developer/cmd/icc/src/routes/index.js');

  __REACT_HOT_LOADER__.register(importTools, 'importTools', '/Users/nickrutten/Developer/cmd/icc/src/routes/index.js');

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/nickrutten/Developer/cmd/icc/src/routes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/nickrutten/Developer/cmd/icc/src/routes/index.js');
}();

;

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(vo) {
  return '\n\n<!DOCTYPE html>\n<html lang="en">\n\n  <head>\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n    <meta charSet=\'utf-8\' />\n    <meta httpEquiv="Content-Language" content="en" />\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <link id="favicon" rel="shortcut icon" href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />\n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">\n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">\n    ' + (vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : '') + '\n\n    <title>Universal React Starter Kyt</title>\n  </head>\n\n  <body>\n    <div id="root"><div>' + vo.root + '</div></div>\n    <script src="' + vo.jsBundle + '"></script>\n  </body>\n\n</html>\n\n';
};

/* eslint-disable prefer-template, max-len */

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/nickrutten/Developer/cmd/icc/src/server/template.js');
}();

;

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = {
	"header": "styles-header--v4bGj",
	"nav": "styles-nav--1K9AX",
	"content": "styles-content--3emNR",
	"navItem": "styles-navItem--2Ex1Q",
	"link": "styles-link--sYCKm",
	"logo": "styles-logo--3U9gT"
};

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = {
	"main": {
		"js": "/main-e6e6ab7e77b88f314618.js",
		"css": "/main-e6e6ab7e77b88f314618.css"
	}
};

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/IndexRoute");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/Link");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/Route");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map