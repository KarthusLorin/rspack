(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./Something.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>Something
});
class Something {
}
},
"./export.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Sider", {
    enumerable: true,
    get: ()=>_something.default
});
const _something = __webpack_require__.interopRequire(__webpack_require__("./Something.js"));
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _export = __webpack_require__("./export.js");
(0, _export.Sider)();
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);