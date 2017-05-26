webpackJsonp([1],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);
/*var React = require("react");
var ReactDOM = require("react-dom");
require("../css/styles.scss");

class Message extends React.Component {
    render() {
        return ( 
        <div>
            <h1> { this.props.title } </h1>
             <p> { this.props.message } </p>
             </div>
        );
    }
}
ReactDOM.render( <Message title = "Email Hehehehe" message="Đẹp trai nhat nha 2222222" /> , document.getElementById("react-container"));*/

// import '../scss/compo.scss';

document.write("Hiep Nguyen Thien Dep Tra Nhat Nha Hoho Hehe");


// var isProd = process.env.NODE_ENV === 'production'; //true or false
// var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
// var cssProd = ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     loader: ['css-loader', 'sass-loader'],
//     publicPath: '/dist'
// })


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(51)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".main {\n  background-color: green;\n  color: #fff; }\n", ""]);

// exports


/***/ })

},[192]);