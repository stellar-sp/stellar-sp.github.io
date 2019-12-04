(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div>\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"switchView('showDeployNewSmartProgram')\">Deploy New Smart Program</button>\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"switchView('showWorkersList')\">Workers List</button>\n  </div>\n\n  <div *ngIf=\"showDeployNewSmartProgram\">\n    <h2>New Smart Program</h2>\n\n      <div class=\"form-group\">\n        <label for=\"horizonAddress\">Horizon Address</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ horizonAddress }}\" (input)=\" horizonAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"networkPassphrase\">Network Passphrase</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ networkPassphrase }}\" (input)=\"networkPassphrase = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Base State</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ emptyFileOnIpfsHash }}\" (input)=\"emptyFileOnIpfsHash = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imageAddress\">Image Address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"imageAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imageHash\">Image Hash</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"imageHash = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\" *ngFor=\"let worker of selected_workers; index as i\">\n        <label for=\"executionFee\">worker {{ i+1 }} properties</label>\n\n        <div style=\"display: flex;\">\n          <span style=\"text-align: center; width: 100px;\">public key</span>\n          <input type=\"text\" class=\"form-control\" value=\"{{ worker.public_key }}\" (input)=\"selected_workers[i].public_key = $event.target.value\">\n        </div>\n\n        <div style=\"display: flex;\">\n          <span style=\"text-align: center; width: 100px;\">address</span>\n          <input type=\"text\" class=\"form-control\" value=\"{{ worker.address }}\" (input)=\"selected_workers[i].address = $event.target.value\">\n        </div>\n\n      </div>\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"addEmptyWorkerToSelectedList()\">add another worker</button>\n\n      <div class=\"form-group\" style=\"margin-top: 20px;\">\n        <label for=\"smartAccountKeyPair\">Smart Account Key Pair</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"smartAccountPublicKey\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"smartAccountPrivateKey\">\n        <button class=\"btn btn-outline-secondary mr-2\" (click)=\"generateNewKeyPair()\">Generate New KeyPair</button>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"smartAccountCreatorSeed\">Smart Account Creator Seed</label>\n        <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\" ngbTooltip=\"a secret key needed to pay transaction fee for create smart account\">more info</button>\n        <input type=\"text\" class=\"form-control\" (input)=\"smartAccountCreatorSeed = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"executionFee\">Execution Fee (in stroops)</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ executionFee }}\" (input)=\"executionFee = $event.target.value\">\n      </div>\n\n      <div *ngIf=\"result_message != ''\">\n        <pre>{{ result_message }}</pre>\n      </div>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\n\n  </div>\n\n  <div *ngIf=\"showWorkersList\">\n\n  \t\t<div class=\"container-table100\">\n  \t\t\t<div class=\"wrap-table100\">\n  \t\t\t\t<div class=\"table100 ver1 m-b-110\">\n  \t\t\t\t\t<div class=\"table100-head\">\n  \t\t\t\t\t\t<table>\n  \t\t\t\t\t\t\t<thead>\n  \t\t\t\t\t\t\t\t<tr class=\"row100 head\">\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column1\">availablily</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column2\">address</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column3\">public key</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column4\">network passphrase</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column5\">horizon address</th>\n                    <th class=\"cell100 column6\">ipfs address</th>\n  \t\t\t\t\t\t\t\t</tr>\n  \t\t\t\t\t\t\t</thead>\n  \t\t\t\t\t\t</table>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class=\"table100-body js-pscroll\">\n  \t\t\t\t\t\t<table>\n  \t\t\t\t\t\t\t<tbody>\n\n                  <tr *ngFor=\"let worker of workers\">\n\n                    <td class=\"cell100 column1\">\n                      <span class=\"dot_green\" *ngIf=\"worker.is_up > 0\"></span>\n                      <span class=\"dot_dark\" *ngIf=\"worker.is_up <= 0\"></span>\n                    </td>\n\n                    <td class=\"cell100 column2\">{{ worker.address }}</td>\n                    <td class=\"cell100 column3\">\n                      {{ worker.public_key.slice(0, 20) }}...\n                      <button type=\"button\" class=\"btn btn-link\" (click)=\"copyMessage(worker.public_key)\">Copy this</button>\n                    </td>\n                    <td class=\"cell100 column4\">{{ worker.network_passphrase }}</td>\n                    <td class=\"cell100 column5\">{{ worker.horizon_address }}</td>\n                    <td class=\"cell100 column6\">{{ worker.ipfs_address }}</td>\n                  </tr>\n\n                </tbody>\n  \t\t\t\t\t\t</table>\n  \t\t\t\t\t</div>\n          </div>\n        </div>\n      </div>\n\n      <h2 style=\"margin-top: 150px;\">Add New Worker</h2>\n      <div class=\"form-group\">\n        <label>public key</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerPublicKey = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>horizon address</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ newWorkerHorizon }}\" (input)=\"newWorkerHorizon = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>network passphrase</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ newWorkerNetworkPassphrase }}\" (input)=\"newWorkerNetworkPassphrase = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>ipfs address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerIpfsAddress = $event.target.value\">\n      </div>\n\n      <div *ngIf=\"addNewWorkerResultMessage != ''\">\n        <pre>{{ addNewWorkerResultMessage }}</pre>\n      </div>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewWorker()\">Submit</button>\n  </div>\n\n\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\n\n@font-face {\n  font-family: Lato-Regular;\n  src: url('/assets/fonts/Lato/Lato-Regular.ttf');\n}\n\n@font-face {\n  font-family: Lato-Bold;\n  src: url('/assets/fonts/Lato/Lato-Bold.ttf');\n}\n\nbody, html {\n\tfont-family: sans-serif;\n}\n\niframe {\n\tborder: none !important;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Scroll bar ]*/\n\n.js-pscroll {\n  position: relative;\n  overflow: hidden;\n}\n\n.table100 .ps__rail-y {\n  width: 9px;\n  background-color: transparent;\n  opacity: 1 !important;\n  right: 5px;\n}\n\n.table100 .ps__rail-y::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #ebebeb;\n  border-radius: 5px;\n  width: 100%;\n/*  height: calc(100% - 30px); */\n  left: 0;\n  top: 15px;\n}\n\n.table100 .ps__rail-y .ps__thumb-y {\n  width: 100%;\n  right: 0;\n  background-color: transparent;\n  opacity: 1 !important;\n}\n\n.table100 .ps__rail-y .ps__thumb-y::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #cccccc;\n  border-radius: 5px;\n  width: 100%;\n  /*height: calc(100% - 30px);*/\n  left: 0;\n  top: 15px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Table ]*/\n\n.limiter {\n  width: 1366px;\n  margin: 0 auto;\n}\n\n.container-table100 {\n  width: 100%;\n  /*min-height: 100vh;*/\n  background: #fff;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0px 0px;\n}\n\n.wrap-table100 {\n  width: 1170px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Table ]*/\n\n.table100 {\n  background-color: #fff;\n}\n\ntable {\n  width: 100%;\n}\n\nth, td {\n  font-weight: unset;\n  padding-right: 10px;\n}\n\n.column1 {\n  width: 10%;\n  padding-left: 20px;\n  text-align: center;\n}\n\n.column2 {\n  width: 15%;\n  text-align: center;\n}\n\n.column3 {\n  width: 15%;\n  text-align: center;\n}\n\n.column4 {\n  width: 15%;\n  text-align: center;\n}\n\n.column5 {\n  width: 15%;\n  text-align: center;\n}\n\n.column6 {\n  width: 15%;\n  text-align: center;\n}\n\n.table100-head th {\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n\n.table100-body td {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n/*==================================================================\n[ Fix header ]*/\n\n.table100 {\n  position: relative;\n  padding-top: 60px;\n}\n\n.table100-head {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.table100-body {\n  /*max-height: 585px;*/\n  overflow: auto;\n}\n\n/*==================================================================\n[ Ver1 ]*/\n\n.table100.ver1 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #fff;\n  line-height: 1.4;\n\n  background-color: #6c7ae0;\n}\n\n.table100.ver1 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver1 .table100-body tr:nth-child(even) {\n  background-color: #f8f6ff;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver1 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver1 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver1 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver1 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver2 ]*/\n\n.table100.ver2 .table100-head {\n  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n}\n\n.table100.ver2 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #fa4251;\n  line-height: 1.4;\n\n  background-color: transparent;\n}\n\n.table100.ver2 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver2 .table100-body tr {\n  border-bottom: 1px solid #f2f2f2;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver2 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver2 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver2 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver2 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver3 ]*/\n\n.table100.ver3 {\n  background-color: #393939;\n}\n\n.table100.ver3 th {\n  font-family: Lato-Bold;\n  font-size: 15px;\n  color: #00ad5f;\n  line-height: 1.4;\n  text-transform: uppercase;\n  background-color: #393939;\n}\n\n.table100.ver3 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n  background-color: #222222;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver3 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver3 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver3 .ps__rail-y::before {\n  background-color: #4e4e4e;\n}\n\n.table100.ver3 .ps__rail-y .ps__thumb-y::before {\n  background-color: #00ad5f;\n}\n\n/*==================================================================\n[ Ver4 ]*/\n\n.table100.ver4 {\n  margin-right: -20px;\n}\n\n.table100.ver4 .table100-head {\n  padding-right: 20px;\n}\n\n.table100.ver4 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #4272d7;\n  line-height: 1.4;\n\n  background-color: transparent;\n  border-bottom: 2px solid #f2f2f2;\n}\n\n.table100.ver4 .column1 {\n  padding-left: 7px;\n}\n\n.table100.ver4 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver4 .table100-body tr {\n  border-bottom: 1px solid #f2f2f2;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver4 {\n  overflow: hidden;\n}\n\n.table100.ver4 .table100-body{\n  padding-right: 20px;\n}\n\n.table100.ver4 .ps__rail-y {\n  right: 0px;\n}\n\n.table100.ver4 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver4 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver5 ]*/\n\n.table100.ver5 {\n  margin-right: -30px;\n}\n\n.table100.ver5 .table100-head {\n  padding-right: 30px;\n}\n\n.table100.ver5 th {\n  font-family: Lato-Bold;\n  font-size: 14px;\n  color: #555555;\n  line-height: 1.4;\n  text-transform: uppercase;\n\n  background-color: transparent;\n}\n\n.table100.ver5 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n\n  background-color: #f7f7f7;\n}\n\n.table100.ver5 .table100-body tr {\n  overflow: hidden;\n  border-bottom: 10px solid #fff;\n  border-radius: 10px;\n}\n\n.table100.ver5 .table100-body table {\n  border-collapse: separate;\n  border-spacing: 0 10px;\n}\n\n.table100.ver5 .table100-body td {\n    border: solid 1px transparent;\n    border-style: solid none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.table100.ver5 .table100-body td:first-child {\n    border-left-style: solid;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.table100.ver5 .table100-body td:last-child {\n    border-right-style: solid;\n    border-bottom-right-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.table100.ver5 tr:hover td {\n  background-color: #ebebeb;\n  cursor: pointer;\n}\n\n.table100.ver5 .table100-head th {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver5 {\n  overflow: hidden;\n}\n\n.table100.ver5 .table100-body{\n  padding-right: 30px;\n}\n\n.table100.ver5 .ps__rail-y {\n  right: 0px;\n}\n\n.table100.ver5 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver5 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n.dot_green {\n  height: 15px;\n  width: 15px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dot_dark {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtFQUNFLHlCQUF5QjtFQUN6QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0FBQzlDOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO2VBQ2U7O0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IsZ0NBQWdDO0VBQzlCLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFHQTtVQUNVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFLaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO1VBQ1U7O0FBQ1Y7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFB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QjtFQUNsQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvTGF0by9MYXRvLUJvbGQudHRmJyk7XG59XG5cbmJvZHksIGh0bWwge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaWZyYW1lIHtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIFNjcm9sbCBiYXIgXSovXG4uanMtcHNjcm9sbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IHtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuLyogIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IC5wc19fdGh1bWIteSB7XG4gIHdpZHRoOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLypoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpOyovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBUYWJsZSBdKi9cblxuLmxpbWl0ZXIge1xuICB3aWR0aDogMTM2NnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci10YWJsZTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKm1pbi1oZWlnaHQ6IDEwMHZoOyovXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLndyYXAtdGFibGUxMDAge1xuICB3aWR0aDogMTE3MHB4O1xufVxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBUYWJsZSBdKi9cbi50YWJsZTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLCB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNvbHVtbjEge1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbjIge1xuICB3aWR0aDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4zIHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sdW1uNCB7XG4gIHdpZHRoOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbjUge1xuICB3aWR0aDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW42IHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUxMDAtaGVhZCB0aCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLnRhYmxlMTAwLWJvZHkgdGQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZpeCBoZWFkZXIgXSovXG4udGFibGUxMDAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4udGFibGUxMDAtaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnRhYmxlMTAwLWJvZHkge1xuICAvKm1heC1oZWlnaHQ6IDU4NXB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjEgXSovXG5cbi50YWJsZTEwMC52ZXIxIHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3YWUwO1xufVxuXG4udGFibGUxMDAudmVyMSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi50YWJsZTEwMC52ZXIxIC50YWJsZTEwMC1ib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY2ZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnRhYmxlMTAwLnZlcjEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW8tYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1zLWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi50YWJsZTEwMC52ZXIxIC5wc19fcmFpbC15IHtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnRhYmxlMTAwLnZlcjEgLnBzX19yYWlsLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi50YWJsZTEwMC52ZXIxIC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBWZXIyIF0qL1xuXG4udGFibGUxMDAudmVyMiAudGFibGUxMDAtaGVhZCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50YWJsZTEwMC52ZXIyIHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZhNDI1MTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhYmxlMTAwLnZlcjIgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4udGFibGUxMDAudmVyMiAudGFibGUxMDAtYm9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50YWJsZTEwMC52ZXIyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1vLWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4udGFibGUxMDAudmVyMiAucHNfX3JhaWwteSB7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi50YWJsZTEwMC52ZXIyIC5wc19fcmFpbC15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4udGFibGUxMDAudmVyMiAucHNfX3JhaWwteSAucHNfX3RodW1iLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjMgXSovXG5cbi50YWJsZTEwMC52ZXIzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgdGgge1xuICBmb250LWZhbWlseTogTGF0by1Cb2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDBhZDVmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4udGFibGUxMDAudmVyMyB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGFibGUxMDAudmVyMyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtby1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbXMtYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgLnBzX19yYWlsLXkge1xuICByaWdodDogNXB4O1xufVxuXG4udGFibGUxMDAudmVyMyAucHNfX3JhaWwteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgLnBzX19yYWlsLXkgLnBzX190aHVtYi15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZDVmO1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjQgXSovXG4udGFibGUxMDAudmVyNCB7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI0IC50YWJsZTEwMC1oZWFkIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgdGgge1xuICBmb250LWZhbWlseTogTGF0by1Cb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNDI3MmQ3O1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YyZjJmMjtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLmNvbHVtbjEge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4udGFibGUxMDAudmVyNCAudGFibGUxMDAtYm9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50YWJsZTEwMC52ZXI0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLnRhYmxlMTAwLWJvZHl7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI0IC5wc19fcmFpbC15IHtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLnBzX19yYWlsLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi50YWJsZTEwMC52ZXI0IC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBWZXI1IF0qL1xuLnRhYmxlMTAwLnZlcjUge1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtaGVhZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI1IHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhYmxlMTAwLnZlcjUgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi50YWJsZTEwMC52ZXI1IC50YWJsZTEwMC1ib2R5IHRyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XG59XG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0ZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWhlYWQgdGgge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnRhYmxlMTAwLnZlcjUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keXtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXkge1xuICByaWdodDogMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAucHNfX3JhaWwteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXkgLnBzX190aHVtYi15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4uZG90X2dyZWVuIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZG90X2Rhcmsge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stellar-sdk/dist/stellar-sdk */ "./node_modules/stellar-sdk/dist/stellar-sdk.js");
/* harmony import */ var stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





//import { interval, Subscription } from 'rxjs';
//import { EventSourcePolyfill } from 'ng-event-source';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'webui';
        this.apiUrl = '';
        this.server = null;
        this.horizonAddress = 'https://horizon-testnet.stellar.org';
        this.networkPassphrase = 'Test SDF Network ; September 2015';
        this.showDeployNewSmartProgram = true;
        this.showWorkersList = false;
        this.smartAccountPublicKey = null;
        this.smartAccountPrivateKey = null;
        this.smartAccountCreatorSeed = null;
        this.smartAccountCreator = null;
        this.emptyFileOnIpfsHash = "QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
        this.imageAddress = '';
        this.imageHash = '';
        this.executionFee = '1000';
        this.newWorkerPublicKey = '';
        this.newWorkerAddress = '';
        this.newWorkerHorizon = 'https://horizon-testnet.stellar.org';
        this.newWorkerNetworkPassphrase = 'Test SDF Network ; September 2015';
        this.newWorkerIpfsAddress = '';
        this.workers = [];
        this.result_message = "";
        this.selected_workers = [
            {
                public_key: '',
                address: ''
            }
        ];
        this.addNewWorkerResultMessage = "";
        //subscription: Subscription;
        this.configUrl = 'assets/config.json';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //const source = interval(10000);
            //this.subscription = source.subscribe(val => this.getWorkersList());
            let conf;
            conf = yield this.http.get(this.configUrl).toPromise();
            this.apiUrl = conf.apiUrl;
        });
    }
    onSubmit() {
        var self = this;
        (function main() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                try {
                    self.result_message = new Date().toLocaleString() + " INFO: creating smart account...";
                    var smartAccountCreatorKeyPair = stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].fromSecret(self.smartAccountCreatorSeed);
                    self.server = new stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Server"](self.horizonAddress);
                    self.smartAccountCreator = yield self.server.loadAccount(smartAccountCreatorKeyPair.publicKey());
                    let lastestLedgerPromise;
                    lastestLedgerPromise = yield self.http.get(self.horizonAddress + "/ledgers?order=desc&limit=1").toPromise();
                    var baseReserve = (lastestLedgerPromise._embedded.records[0].base_reserve_in_stroops / 10000000) * 2 + 10;
                    const fee = yield self.server.fetchBaseFee();
                    const createSmartAccountTransaction = new stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["TransactionBuilder"](self.smartAccountCreator, { fee: fee, networkPassphrase: self.networkPassphrase })
                        .addOperation(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].createAccount({
                        destination: self.smartAccountPublicKey,
                        startingBalance: baseReserve + ""
                    }))
                        .setTimeout(0)
                        .build();
                    createSmartAccountTransaction.sign(smartAccountCreatorKeyPair);
                    const createSmartAccountResult = yield self.server.submitTransaction(createSmartAccountTransaction);
                    self.result_message += " done \n";
                    self.result_message += new Date().toLocaleString() + " INFO: setting smart program image specifications... ";
                    var smartProgramSpecOps = [
                        stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'current_state', value: 'QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH' }),
                        stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'smart_program_image_address', value: self.imageAddress }),
                        stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'smart_program_image_hash', value: self.imageHash }),
                        stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'execution_fee', value: self.executionFee }),
                        stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'latest_transaction_changed_state', value: createSmartAccountResult.hash }),
                    ];
                    for (let i = 0; i < self.selected_workers.length; i++) {
                        smartProgramSpecOps.push(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'worker_' + (i + 1) + '_address', value: self.selected_workers[i].address }));
                        smartProgramSpecOps.push(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'worker_' + (i + 1) + '_public_key', value: self.selected_workers[i].public_key }));
                        smartProgramSpecOps.push(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].setOptions({ signer: {
                                ed25519PublicKey: self.selected_workers[i].public_key,
                                weight: 1
                            }
                        }));
                    }
                    const percent51 = parseInt(self.selected_workers.length / 2 + "") + 1;
                    smartProgramSpecOps.push(stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].setOptions({ masterWeight: 0, lowThreshold: percent51, medThreshold: percent51, highThreshold: percent51 }));
                    yield self.signAndSubmit(self, smartProgramSpecOps);
                    self.result_message += "done \n";
                    self.result_message += "conguradulation. you created the smart account successfully";
                }
                catch (error) {
                    console.error(error);
                    self.result_message = error.message;
                }
            });
        })();
    }
    signAndSubmit(self, ops) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var smartAccountKeyPair = stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].fromSecret(self.smartAccountPrivateKey);
            const smartAccount = yield self.server.loadAccount(smartAccountKeyPair.publicKey());
            const fee = yield self.server.fetchBaseFee();
            var txBuilder = new stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["TransactionBuilder"](smartAccount, { fee: fee, networkPassphrase: self.networkPassphrase })
                .setTimeout(0);
            for (let op of ops) {
                txBuilder.addOperation(op);
            }
            var tx = txBuilder.build();
            tx.sign(smartAccountKeyPair);
            const xdr = tx.toEnvelope().toXDR().toString("base64");
            console.log(xdr);
            var submitTxResult = yield self.server.submitTransaction(tx);
            console.log(submitTxResult);
        });
    }
    generateNewKeyPair() {
        var keypair = stellar_sdk_dist_stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].random();
        this.smartAccountPublicKey = keypair.publicKey();
        this.smartAccountPrivateKey = keypair.secret();
    }
    switchView(switchOption) {
        if (switchOption == 'showDeployNewSmartProgram') {
            this.showDeployNewSmartProgram = true;
            this.showWorkersList = false;
        }
        else if (switchOption == 'showWorkersList') {
            this.showDeployNewSmartProgram = false;
            this.showWorkersList = true;
            this.getWorkersList();
        }
    }
    getWorkersList() {
        this.http.get(this.apiUrl).subscribe((data) => {
            console.log(data);
            this.workers = data;
        });
    }
    copyMessage(val) {
        let textarea = null;
        textarea = document.createElement("textarea");
        textarea.style.height = "0px";
        textarea.style.left = "-100px";
        textarea.style.opacity = "0";
        textarea.style.position = "fixed";
        textarea.style.top = "-100px";
        textarea.style.width = "0px";
        document.body.appendChild(textarea);
        // Set and select the value (creating an active Selection range).
        textarea.value = val;
        textarea.select();
        // Ask the browser to copy the current selection to the clipboard.
        let successful = document.execCommand("copy");
        if (successful) {
            // do something
        }
        else {
            // handle the error
        }
        if (textarea && textarea.parentNode) {
            textarea.parentNode.removeChild(textarea);
        }
    }
    addEmptyWorkerToSelectedList() {
        this.selected_workers.push({
            public_key: '',
            address: ''
        });
    }
    addNewWorker() {
        var self = this;
        this.addNewWorkerResultMessage = "adding wokrer...";
        const newWorkerSpec = {
            public_key: this.newWorkerPublicKey,
            address: this.newWorkerAddress,
            horizon_address: this.newWorkerHorizon,
            network_passphrase: this.newWorkerNetworkPassphrase,
            ipfs_address: this.newWorkerIpfsAddress
        };
        this.http.post(this.apiUrl, newWorkerSpec).subscribe((val) => { }, (response) => {
            self.addNewWorkerResultMessage += " done! ";
            self.getWorkersList();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mahdi/workspace/smart_program/webui/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map