"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-ssh";
exports.ids = ["vendor-chunks/is-ssh"];
exports.modules = {

/***/ "../../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** ../../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// Dependencies\nvar protocols = __webpack_require__(/*! protocols */ \"../../../../../.yarn/berry/cache/protocols-npm-2.0.1-e2bc74d1c1-10c0.zip/node_modules/protocols/lib/index.js\");\n\n/**\n * isSsh\n * Checks if an input value is a ssh url or not.\n *\n * @name isSsh\n * @function\n * @param {String|Array} input The input url or an array of protocols.\n * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.\n */\nfunction isSsh(input) {\n\n    if (Array.isArray(input)) {\n        return input.indexOf(\"ssh\") !== -1 || input.indexOf(\"rsync\") !== -1;\n    }\n\n    if (typeof input !== \"string\") {\n        return false;\n    }\n\n    var prots = protocols(input);\n    input = input.substring(input.indexOf(\"://\") + 3);\n    if (isSsh(prots)) {\n        return true;\n    }\n\n    // TODO This probably could be improved :)\n    var urlPortPattern = new RegExp('\\.([a-zA-Z\\\\d]+):(\\\\d+)\\/');\n    return !input.match(urlPortPattern) && input.indexOf(\"@\") < input.indexOf(\":\");\n}\n\nmodule.exports = isSsh;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaXMtc3NoLW5wbS0xLjQuMC1jNmQ3ZWVjMDg3LTEwYzAuemlwL25vZGVfbW9kdWxlcy9pcy1zc2gvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsK0hBQVc7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaG9qb29uL2RvY3MvLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaXMtc3NoLW5wbS0xLjQuMC1jNmQ3ZWVjMDg3LTEwYzAuemlwL25vZGVfbW9kdWxlcy9pcy1zc2gvbGliL2luZGV4LmpzPzFlYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xudmFyIHByb3RvY29scyA9IHJlcXVpcmUoXCJwcm90b2NvbHNcIik7XG5cbi8qKlxuICogaXNTc2hcbiAqIENoZWNrcyBpZiBhbiBpbnB1dCB2YWx1ZSBpcyBhIHNzaCB1cmwgb3Igbm90LlxuICpcbiAqIEBuYW1lIGlzU3NoXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBpbnB1dCBUaGUgaW5wdXQgdXJsIG9yIGFuIGFycmF5IG9mIHByb3RvY29scy5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW5wdXQgaXMgYSBzc2ggdXJsLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNTc2goaW5wdXQpIHtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQuaW5kZXhPZihcInNzaFwiKSAhPT0gLTEgfHwgaW5wdXQuaW5kZXhPZihcInJzeW5jXCIpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvdHMgPSBwcm90b2NvbHMoaW5wdXQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKGlucHV0LmluZGV4T2YoXCI6Ly9cIikgKyAzKTtcbiAgICBpZiAoaXNTc2gocHJvdHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRPRE8gVGhpcyBwcm9iYWJseSBjb3VsZCBiZSBpbXByb3ZlZCA6KVxuICAgIHZhciB1cmxQb3J0UGF0dGVybiA9IG5ldyBSZWdFeHAoJ1xcLihbYS16QS1aXFxcXGRdKyk6KFxcXFxkKylcXC8nKTtcbiAgICByZXR1cm4gIWlucHV0Lm1hdGNoKHVybFBvcnRQYXR0ZXJuKSAmJiBpbnB1dC5pbmRleE9mKFwiQFwiKSA8IGlucHV0LmluZGV4T2YoXCI6XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3NoOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../.yarn/berry/cache/is-ssh-npm-1.4.0-c6d7eec087-10c0.zip/node_modules/is-ssh/lib/index.js\n");

/***/ })

};
;