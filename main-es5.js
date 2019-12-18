var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/base64-js/index.js": 
        /*!*****************************************!*\
          !*** ./node_modules/base64-js/index.js ***!
          \*****************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
            var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
            }
            // Support decoding URL-safe base64 strings, as Node.js does.
            // See: https://en.wikipedia.org/wiki/Base64#URL_applications
            revLookup['-'.charCodeAt(0)] = 62;
            revLookup['_'.charCodeAt(0)] = 63;
            function getLens(b64) {
                var len = b64.length;
                if (len % 4 > 0) {
                    throw new Error('Invalid string. Length must be a multiple of 4');
                }
                // Trim off extra bytes after placeholder bytes are found
                // See: https://github.com/beatgammit/base64-js/issues/42
                var validLen = b64.indexOf('=');
                if (validLen === -1)
                    validLen = len;
                var placeHoldersLen = validLen === len
                    ? 0
                    : 4 - (validLen % 4);
                return [validLen, placeHoldersLen];
            }
            // base64 is 4/3 + up to two characters of the original data
            function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
                return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
            }
            function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                // if there are placeholders, only get up to the last complete 4 chars
                var len = placeHoldersLen > 0
                    ? validLen - 4
                    : validLen;
                var i;
                for (i = 0; i < len; i += 4) {
                    tmp =
                        (revLookup[b64.charCodeAt(i)] << 18) |
                            (revLookup[b64.charCodeAt(i + 1)] << 12) |
                            (revLookup[b64.charCodeAt(i + 2)] << 6) |
                            revLookup[b64.charCodeAt(i + 3)];
                    arr[curByte++] = (tmp >> 16) & 0xFF;
                    arr[curByte++] = (tmp >> 8) & 0xFF;
                    arr[curByte++] = tmp & 0xFF;
                }
                if (placeHoldersLen === 2) {
                    tmp =
                        (revLookup[b64.charCodeAt(i)] << 2) |
                            (revLookup[b64.charCodeAt(i + 1)] >> 4);
                    arr[curByte++] = tmp & 0xFF;
                }
                if (placeHoldersLen === 1) {
                    tmp =
                        (revLookup[b64.charCodeAt(i)] << 10) |
                            (revLookup[b64.charCodeAt(i + 1)] << 4) |
                            (revLookup[b64.charCodeAt(i + 2)] >> 2);
                    arr[curByte++] = (tmp >> 8) & 0xFF;
                    arr[curByte++] = tmp & 0xFF;
                }
                return arr;
            }
            function tripletToBase64(num) {
                return lookup[num >> 18 & 0x3F] +
                    lookup[num >> 12 & 0x3F] +
                    lookup[num >> 6 & 0x3F] +
                    lookup[num & 0x3F];
            }
            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i = start; i < end; i += 3) {
                    tmp =
                        ((uint8[i] << 16) & 0xFF0000) +
                            ((uint8[i + 1] << 8) & 0xFF00) +
                            (uint8[i + 2] & 0xFF);
                    output.push(tripletToBase64(tmp));
                }
                return output.join('');
            }
            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
                var parts = [];
                var maxChunkLength = 16383; // must be multiple of 3
                // go through the array every three bytes, we'll deal with trailing stuff later
                for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
                }
                // pad the end with zeros, but make sure to not forget the extra bytes
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    parts.push(lookup[tmp >> 2] +
                        lookup[(tmp << 4) & 0x3F] +
                        '==');
                }
                else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    parts.push(lookup[tmp >> 10] +
                        lookup[(tmp >> 4) & 0x3F] +
                        lookup[(tmp << 2) & 0x3F] +
                        '=');
                }
                return parts.join('');
            }
            /***/ 
        }),
        /***/ "./node_modules/ieee754/index.js": 
        /*!***************************************!*\
          !*** ./node_modules/ieee754/index.js ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            exports.read = function (buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = (nBytes * 8) - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? (nBytes - 1) : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & ((1 << (-nBits)) - 1);
                s >>= (-nBits);
                nBits += eLen;
                for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) { }
                m = e & ((1 << (-nBits)) - 1);
                e >>= (-nBits);
                nBits += mLen;
                for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) { }
                if (e === 0) {
                    e = 1 - eBias;
                }
                else if (e === eMax) {
                    return m ? NaN : ((s ? -1 : 1) * Infinity);
                }
                else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = (nBytes * 8) - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
                var i = isLE ? 0 : (nBytes - 1);
                var d = isLE ? 1 : -1;
                var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                }
                else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    }
                    else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    }
                    else if (e + eBias >= 1) {
                        m = ((value * c) - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    }
                    else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) { }
                e = (e << mLen) | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) { }
                buffer[offset + i - d] |= s * 128;
            };
            /***/ 
        }),
        /***/ "./node_modules/isarray/index.js": 
        /*!***************************************!*\
          !*** ./node_modules/isarray/index.js ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var toString = {}.toString;
            module.exports = Array.isArray || function (arr) {
                return toString.call(arr) == '[object Array]';
            };
            /***/ 
        }),
        /***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
          \*********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */ (function (global) {
                /* eslint-disable no-proto */
                var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
                var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
                var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
                exports.Buffer = Buffer;
                exports.SlowBuffer = SlowBuffer;
                exports.INSPECT_MAX_BYTES = 50;
                /**
                 * If `Buffer.TYPED_ARRAY_SUPPORT`:
                 *   === true    Use Uint8Array implementation (fastest)
                 *   === false   Use Object implementation (most compatible, even IE6)
                 *
                 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
                 * Opera 11.6+, iOS 4.2+.
                 *
                 * Due to various browser bugs, sometimes the Object implementation will be used even
                 * when the browser supports typed arrays.
                 *
                 * Note:
                 *
                 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
                 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
                 *
                 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
                 *
                 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
                 *     incorrect length in some situations.
                
                 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
                 * get the Object implementation, which is slower but behaves correctly.
                 */
                Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
                    ? global.TYPED_ARRAY_SUPPORT
                    : typedArraySupport();
                /*
                 * Export kMaxLength after typed array support is determined.
                 */
                exports.kMaxLength = kMaxLength();
                function typedArraySupport() {
                    try {
                        var arr = new Uint8Array(1);
                        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } };
                        return arr.foo() === 42 && // typed array instances can be augmented
                            typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                            arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
                    }
                    catch (e) {
                        return false;
                    }
                }
                function kMaxLength() {
                    return Buffer.TYPED_ARRAY_SUPPORT
                        ? 0x7fffffff
                        : 0x3fffffff;
                }
                function createBuffer(that, length) {
                    if (kMaxLength() < length) {
                        throw new RangeError('Invalid typed array length');
                    }
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        // Return an augmented `Uint8Array` instance, for best performance
                        that = new Uint8Array(length);
                        that.__proto__ = Buffer.prototype;
                    }
                    else {
                        // Fallback: Return an object instance of the Buffer class
                        if (that === null) {
                            that = new Buffer(length);
                        }
                        that.length = length;
                    }
                    return that;
                }
                /**
                 * The Buffer constructor returns instances of `Uint8Array` that have their
                 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
                 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
                 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
                 * returns a single octet.
                 *
                 * The `Uint8Array` prototype remains unmodified.
                 */
                function Buffer(arg, encodingOrOffset, length) {
                    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                        return new Buffer(arg, encodingOrOffset, length);
                    }
                    // Common case.
                    if (typeof arg === 'number') {
                        if (typeof encodingOrOffset === 'string') {
                            throw new Error('If encoding is specified then the first argument must be a string');
                        }
                        return allocUnsafe(this, arg);
                    }
                    return from(this, arg, encodingOrOffset, length);
                }
                Buffer.poolSize = 8192; // not used by this implementation
                // TODO: Legacy, not needed anymore. Remove in next major version.
                Buffer._augment = function (arr) {
                    arr.__proto__ = Buffer.prototype;
                    return arr;
                };
                function from(that, value, encodingOrOffset, length) {
                    if (typeof value === 'number') {
                        throw new TypeError('"value" argument must not be a number');
                    }
                    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
                        return fromArrayBuffer(that, value, encodingOrOffset, length);
                    }
                    if (typeof value === 'string') {
                        return fromString(that, value, encodingOrOffset);
                    }
                    return fromObject(that, value);
                }
                /**
                 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
                 * if value is a number.
                 * Buffer.from(str[, encoding])
                 * Buffer.from(array)
                 * Buffer.from(buffer)
                 * Buffer.from(arrayBuffer[, byteOffset[, length]])
                 **/
                Buffer.from = function (value, encodingOrOffset, length) {
                    return from(null, value, encodingOrOffset, length);
                };
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    Buffer.prototype.__proto__ = Uint8Array.prototype;
                    Buffer.__proto__ = Uint8Array;
                    if (typeof Symbol !== 'undefined' && Symbol.species &&
                        Buffer[Symbol.species] === Buffer) {
                        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                        Object.defineProperty(Buffer, Symbol.species, {
                            value: null,
                            configurable: true
                        });
                    }
                }
                function assertSize(size) {
                    if (typeof size !== 'number') {
                        throw new TypeError('"size" argument must be a number');
                    }
                    else if (size < 0) {
                        throw new RangeError('"size" argument must not be negative');
                    }
                }
                function alloc(that, size, fill, encoding) {
                    assertSize(size);
                    if (size <= 0) {
                        return createBuffer(that, size);
                    }
                    if (fill !== undefined) {
                        // Only pay attention to encoding if it's a string. This
                        // prevents accidentally sending in a number that would
                        // be interpretted as a start offset.
                        return typeof encoding === 'string'
                            ? createBuffer(that, size).fill(fill, encoding)
                            : createBuffer(that, size).fill(fill);
                    }
                    return createBuffer(that, size);
                }
                /**
                 * Creates a new filled Buffer instance.
                 * alloc(size[, fill[, encoding]])
                 **/
                Buffer.alloc = function (size, fill, encoding) {
                    return alloc(null, size, fill, encoding);
                };
                function allocUnsafe(that, size) {
                    assertSize(size);
                    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) {
                        for (var i = 0; i < size; ++i) {
                            that[i] = 0;
                        }
                    }
                    return that;
                }
                /**
                 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
                 * */
                Buffer.allocUnsafe = function (size) {
                    return allocUnsafe(null, size);
                };
                /**
                 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
                 */
                Buffer.allocUnsafeSlow = function (size) {
                    return allocUnsafe(null, size);
                };
                function fromString(that, string, encoding) {
                    if (typeof encoding !== 'string' || encoding === '') {
                        encoding = 'utf8';
                    }
                    if (!Buffer.isEncoding(encoding)) {
                        throw new TypeError('"encoding" must be a valid string encoding');
                    }
                    var length = byteLength(string, encoding) | 0;
                    that = createBuffer(that, length);
                    var actual = that.write(string, encoding);
                    if (actual !== length) {
                        // Writing a hex string, for example, that contains invalid characters will
                        // cause everything after the first invalid character to be ignored. (e.g.
                        // 'abxxcd' will be treated as 'ab')
                        that = that.slice(0, actual);
                    }
                    return that;
                }
                function fromArrayLike(that, array) {
                    var length = array.length < 0 ? 0 : checked(array.length) | 0;
                    that = createBuffer(that, length);
                    for (var i = 0; i < length; i += 1) {
                        that[i] = array[i] & 255;
                    }
                    return that;
                }
                function fromArrayBuffer(that, array, byteOffset, length) {
                    array.byteLength; // this throws if `array` is not a valid ArrayBuffer
                    if (byteOffset < 0 || array.byteLength < byteOffset) {
                        throw new RangeError('\'offset\' is out of bounds');
                    }
                    if (array.byteLength < byteOffset + (length || 0)) {
                        throw new RangeError('\'length\' is out of bounds');
                    }
                    if (byteOffset === undefined && length === undefined) {
                        array = new Uint8Array(array);
                    }
                    else if (length === undefined) {
                        array = new Uint8Array(array, byteOffset);
                    }
                    else {
                        array = new Uint8Array(array, byteOffset, length);
                    }
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        // Return an augmented `Uint8Array` instance, for best performance
                        that = array;
                        that.__proto__ = Buffer.prototype;
                    }
                    else {
                        // Fallback: Return an object instance of the Buffer class
                        that = fromArrayLike(that, array);
                    }
                    return that;
                }
                function fromObject(that, obj) {
                    if (Buffer.isBuffer(obj)) {
                        var len = checked(obj.length) | 0;
                        that = createBuffer(that, len);
                        if (that.length === 0) {
                            return that;
                        }
                        obj.copy(that, 0, 0, len);
                        return that;
                    }
                    if (obj) {
                        if ((typeof ArrayBuffer !== 'undefined' &&
                            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
                            if (typeof obj.length !== 'number' || isnan(obj.length)) {
                                return createBuffer(that, 0);
                            }
                            return fromArrayLike(that, obj);
                        }
                        if (obj.type === 'Buffer' && isArray(obj.data)) {
                            return fromArrayLike(that, obj.data);
                        }
                    }
                    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
                }
                function checked(length) {
                    // Note: cannot use `length < kMaxLength()` here because that fails when
                    // length is NaN (which is otherwise coerced to zero.)
                    if (length >= kMaxLength()) {
                        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                            'size: 0x' + kMaxLength().toString(16) + ' bytes');
                    }
                    return length | 0;
                }
                function SlowBuffer(length) {
                    if (+length != length) { // eslint-disable-line eqeqeq
                        length = 0;
                    }
                    return Buffer.alloc(+length);
                }
                Buffer.isBuffer = function isBuffer(b) {
                    return !!(b != null && b._isBuffer);
                };
                Buffer.compare = function compare(a, b) {
                    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                        throw new TypeError('Arguments must be Buffers');
                    }
                    if (a === b)
                        return 0;
                    var x = a.length;
                    var y = b.length;
                    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                        if (a[i] !== b[i]) {
                            x = a[i];
                            y = b[i];
                            break;
                        }
                    }
                    if (x < y)
                        return -1;
                    if (y < x)
                        return 1;
                    return 0;
                };
                Buffer.isEncoding = function isEncoding(encoding) {
                    switch (String(encoding).toLowerCase()) {
                        case 'hex':
                        case 'utf8':
                        case 'utf-8':
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                        case 'base64':
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return true;
                        default:
                            return false;
                    }
                };
                Buffer.concat = function concat(list, length) {
                    if (!isArray(list)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    if (list.length === 0) {
                        return Buffer.alloc(0);
                    }
                    var i;
                    if (length === undefined) {
                        length = 0;
                        for (i = 0; i < list.length; ++i) {
                            length += list[i].length;
                        }
                    }
                    var buffer = Buffer.allocUnsafe(length);
                    var pos = 0;
                    for (i = 0; i < list.length; ++i) {
                        var buf = list[i];
                        if (!Buffer.isBuffer(buf)) {
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        }
                        buf.copy(buffer, pos);
                        pos += buf.length;
                    }
                    return buffer;
                };
                function byteLength(string, encoding) {
                    if (Buffer.isBuffer(string)) {
                        return string.length;
                    }
                    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
                        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                        return string.byteLength;
                    }
                    if (typeof string !== 'string') {
                        string = '' + string;
                    }
                    var len = string.length;
                    if (len === 0)
                        return 0;
                    // Use a for loop to avoid recursion
                    var loweredCase = false;
                    for (;;) {
                        switch (encoding) {
                            case 'ascii':
                            case 'latin1':
                            case 'binary':
                                return len;
                            case 'utf8':
                            case 'utf-8':
                            case undefined:
                                return utf8ToBytes(string).length;
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return len * 2;
                            case 'hex':
                                return len >>> 1;
                            case 'base64':
                                return base64ToBytes(string).length;
                            default:
                                if (loweredCase)
                                    return utf8ToBytes(string).length; // assume utf8
                                encoding = ('' + encoding).toLowerCase();
                                loweredCase = true;
                        }
                    }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = false;
                    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                    // property of a typed array.
                    // This behaves neither like String nor Uint8Array in that we set start/end
                    // to their upper/lower bounds if the value passed is out of range.
                    // undefined is handled specially as per ECMA-262 6th Edition,
                    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                    if (start === undefined || start < 0) {
                        start = 0;
                    }
                    // Return early if start > this.length. Done here to prevent potential uint32
                    // coercion fail below.
                    if (start > this.length) {
                        return '';
                    }
                    if (end === undefined || end > this.length) {
                        end = this.length;
                    }
                    if (end <= 0) {
                        return '';
                    }
                    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                    end >>>= 0;
                    start >>>= 0;
                    if (end <= start) {
                        return '';
                    }
                    if (!encoding)
                        encoding = 'utf8';
                    while (true) {
                        switch (encoding) {
                            case 'hex':
                                return hexSlice(this, start, end);
                            case 'utf8':
                            case 'utf-8':
                                return utf8Slice(this, start, end);
                            case 'ascii':
                                return asciiSlice(this, start, end);
                            case 'latin1':
                            case 'binary':
                                return latin1Slice(this, start, end);
                            case 'base64':
                                return base64Slice(this, start, end);
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return utf16leSlice(this, start, end);
                            default:
                                if (loweredCase)
                                    throw new TypeError('Unknown encoding: ' + encoding);
                                encoding = (encoding + '').toLowerCase();
                                loweredCase = true;
                        }
                    }
                }
                // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
                // Buffer instances.
                Buffer.prototype._isBuffer = true;
                function swap(b, n, m) {
                    var i = b[n];
                    b[n] = b[m];
                    b[m] = i;
                }
                Buffer.prototype.swap16 = function swap16() {
                    var len = this.length;
                    if (len % 2 !== 0) {
                        throw new RangeError('Buffer size must be a multiple of 16-bits');
                    }
                    for (var i = 0; i < len; i += 2) {
                        swap(this, i, i + 1);
                    }
                    return this;
                };
                Buffer.prototype.swap32 = function swap32() {
                    var len = this.length;
                    if (len % 4 !== 0) {
                        throw new RangeError('Buffer size must be a multiple of 32-bits');
                    }
                    for (var i = 0; i < len; i += 4) {
                        swap(this, i, i + 3);
                        swap(this, i + 1, i + 2);
                    }
                    return this;
                };
                Buffer.prototype.swap64 = function swap64() {
                    var len = this.length;
                    if (len % 8 !== 0) {
                        throw new RangeError('Buffer size must be a multiple of 64-bits');
                    }
                    for (var i = 0; i < len; i += 8) {
                        swap(this, i, i + 7);
                        swap(this, i + 1, i + 6);
                        swap(this, i + 2, i + 5);
                        swap(this, i + 3, i + 4);
                    }
                    return this;
                };
                Buffer.prototype.toString = function toString() {
                    var length = this.length | 0;
                    if (length === 0)
                        return '';
                    if (arguments.length === 0)
                        return utf8Slice(this, 0, length);
                    return slowToString.apply(this, arguments);
                };
                Buffer.prototype.equals = function equals(b) {
                    if (!Buffer.isBuffer(b))
                        throw new TypeError('Argument must be a Buffer');
                    if (this === b)
                        return true;
                    return Buffer.compare(this, b) === 0;
                };
                Buffer.prototype.inspect = function inspect() {
                    var str = '';
                    var max = exports.INSPECT_MAX_BYTES;
                    if (this.length > 0) {
                        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
                        if (this.length > max)
                            str += ' ... ';
                    }
                    return '<Buffer ' + str + '>';
                };
                Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                    if (!Buffer.isBuffer(target)) {
                        throw new TypeError('Argument must be a Buffer');
                    }
                    if (start === undefined) {
                        start = 0;
                    }
                    if (end === undefined) {
                        end = target ? target.length : 0;
                    }
                    if (thisStart === undefined) {
                        thisStart = 0;
                    }
                    if (thisEnd === undefined) {
                        thisEnd = this.length;
                    }
                    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                        throw new RangeError('out of range index');
                    }
                    if (thisStart >= thisEnd && start >= end) {
                        return 0;
                    }
                    if (thisStart >= thisEnd) {
                        return -1;
                    }
                    if (start >= end) {
                        return 1;
                    }
                    start >>>= 0;
                    end >>>= 0;
                    thisStart >>>= 0;
                    thisEnd >>>= 0;
                    if (this === target)
                        return 0;
                    var x = thisEnd - thisStart;
                    var y = end - start;
                    var len = Math.min(x, y);
                    var thisCopy = this.slice(thisStart, thisEnd);
                    var targetCopy = target.slice(start, end);
                    for (var i = 0; i < len; ++i) {
                        if (thisCopy[i] !== targetCopy[i]) {
                            x = thisCopy[i];
                            y = targetCopy[i];
                            break;
                        }
                    }
                    if (x < y)
                        return -1;
                    if (y < x)
                        return 1;
                    return 0;
                };
                // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
                // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
                //
                // Arguments:
                // - buffer - a Buffer to search
                // - val - a string, Buffer, or number
                // - byteOffset - an index into `buffer`; will be clamped to an int32
                // - encoding - an optional encoding, relevant is val is a string
                // - dir - true for indexOf, false for lastIndexOf
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    // Empty buffer means no match
                    if (buffer.length === 0)
                        return -1;
                    // Normalize byteOffset
                    if (typeof byteOffset === 'string') {
                        encoding = byteOffset;
                        byteOffset = 0;
                    }
                    else if (byteOffset > 0x7fffffff) {
                        byteOffset = 0x7fffffff;
                    }
                    else if (byteOffset < -0x80000000) {
                        byteOffset = -0x80000000;
                    }
                    byteOffset = +byteOffset; // Coerce to Number.
                    if (isNaN(byteOffset)) {
                        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                        byteOffset = dir ? 0 : (buffer.length - 1);
                    }
                    // Normalize byteOffset: negative offsets start from the end of the buffer
                    if (byteOffset < 0)
                        byteOffset = buffer.length + byteOffset;
                    if (byteOffset >= buffer.length) {
                        if (dir)
                            return -1;
                        else
                            byteOffset = buffer.length - 1;
                    }
                    else if (byteOffset < 0) {
                        if (dir)
                            byteOffset = 0;
                        else
                            return -1;
                    }
                    // Normalize val
                    if (typeof val === 'string') {
                        val = Buffer.from(val, encoding);
                    }
                    // Finally, search either indexOf (if dir is true) or lastIndexOf
                    if (Buffer.isBuffer(val)) {
                        // Special case: looking for empty string/buffer always fails
                        if (val.length === 0) {
                            return -1;
                        }
                        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    }
                    else if (typeof val === 'number') {
                        val = val & 0xFF; // Search for a byte value [0-255]
                        if (Buffer.TYPED_ARRAY_SUPPORT &&
                            typeof Uint8Array.prototype.indexOf === 'function') {
                            if (dir) {
                                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                            }
                            else {
                                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                            }
                        }
                        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                    }
                    throw new TypeError('val must be string, number or Buffer');
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                    var indexSize = 1;
                    var arrLength = arr.length;
                    var valLength = val.length;
                    if (encoding !== undefined) {
                        encoding = String(encoding).toLowerCase();
                        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
                            encoding === 'utf16le' || encoding === 'utf-16le') {
                            if (arr.length < 2 || val.length < 2) {
                                return -1;
                            }
                            indexSize = 2;
                            arrLength /= 2;
                            valLength /= 2;
                            byteOffset /= 2;
                        }
                    }
                    function read(buf, i) {
                        if (indexSize === 1) {
                            return buf[i];
                        }
                        else {
                            return buf.readUInt16BE(i * indexSize);
                        }
                    }
                    var i;
                    if (dir) {
                        var foundIndex = -1;
                        for (i = byteOffset; i < arrLength; i++) {
                            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                                if (foundIndex === -1)
                                    foundIndex = i;
                                if (i - foundIndex + 1 === valLength)
                                    return foundIndex * indexSize;
                            }
                            else {
                                if (foundIndex !== -1)
                                    i -= i - foundIndex;
                                foundIndex = -1;
                            }
                        }
                    }
                    else {
                        if (byteOffset + valLength > arrLength)
                            byteOffset = arrLength - valLength;
                        for (i = byteOffset; i >= 0; i--) {
                            var found = true;
                            for (var j = 0; j < valLength; j++) {
                                if (read(arr, i + j) !== read(val, j)) {
                                    found = false;
                                    break;
                                }
                            }
                            if (found)
                                return i;
                        }
                    }
                    return -1;
                }
                Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                    return this.indexOf(val, byteOffset, encoding) !== -1;
                };
                Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                };
                Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                };
                function hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    if (!length) {
                        length = remaining;
                    }
                    else {
                        length = Number(length);
                        if (length > remaining) {
                            length = remaining;
                        }
                    }
                    // must be an even number of digits
                    var strLen = string.length;
                    if (strLen % 2 !== 0)
                        throw new TypeError('Invalid hex string');
                    if (length > strLen / 2) {
                        length = strLen / 2;
                    }
                    for (var i = 0; i < length; ++i) {
                        var parsed = parseInt(string.substr(i * 2, 2), 16);
                        if (isNaN(parsed))
                            return i;
                        buf[offset + i] = parsed;
                    }
                    return i;
                }
                function utf8Write(buf, string, offset, length) {
                    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                }
                function asciiWrite(buf, string, offset, length) {
                    return blitBuffer(asciiToBytes(string), buf, offset, length);
                }
                function latin1Write(buf, string, offset, length) {
                    return asciiWrite(buf, string, offset, length);
                }
                function base64Write(buf, string, offset, length) {
                    return blitBuffer(base64ToBytes(string), buf, offset, length);
                }
                function ucs2Write(buf, string, offset, length) {
                    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                }
                Buffer.prototype.write = function write(string, offset, length, encoding) {
                    // Buffer#write(string)
                    if (offset === undefined) {
                        encoding = 'utf8';
                        length = this.length;
                        offset = 0;
                        // Buffer#write(string, encoding)
                    }
                    else if (length === undefined && typeof offset === 'string') {
                        encoding = offset;
                        length = this.length;
                        offset = 0;
                        // Buffer#write(string, offset[, length][, encoding])
                    }
                    else if (isFinite(offset)) {
                        offset = offset | 0;
                        if (isFinite(length)) {
                            length = length | 0;
                            if (encoding === undefined)
                                encoding = 'utf8';
                        }
                        else {
                            encoding = length;
                            length = undefined;
                        }
                        // legacy write(string, encoding, offset, length) - remove in v0.13
                    }
                    else {
                        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                    }
                    var remaining = this.length - offset;
                    if (length === undefined || length > remaining)
                        length = remaining;
                    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
                        throw new RangeError('Attempt to write outside buffer bounds');
                    }
                    if (!encoding)
                        encoding = 'utf8';
                    var loweredCase = false;
                    for (;;) {
                        switch (encoding) {
                            case 'hex':
                                return hexWrite(this, string, offset, length);
                            case 'utf8':
                            case 'utf-8':
                                return utf8Write(this, string, offset, length);
                            case 'ascii':
                                return asciiWrite(this, string, offset, length);
                            case 'latin1':
                            case 'binary':
                                return latin1Write(this, string, offset, length);
                            case 'base64':
                                // Warning: maxLength not taken into account in base64Write
                                return base64Write(this, string, offset, length);
                            case 'ucs2':
                            case 'ucs-2':
                            case 'utf16le':
                            case 'utf-16le':
                                return ucs2Write(this, string, offset, length);
                            default:
                                if (loweredCase)
                                    throw new TypeError('Unknown encoding: ' + encoding);
                                encoding = ('' + encoding).toLowerCase();
                                loweredCase = true;
                        }
                    }
                };
                Buffer.prototype.toJSON = function toJSON() {
                    return {
                        type: 'Buffer',
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                function base64Slice(buf, start, end) {
                    if (start === 0 && end === buf.length) {
                        return base64.fromByteArray(buf);
                    }
                    else {
                        return base64.fromByteArray(buf.slice(start, end));
                    }
                }
                function utf8Slice(buf, start, end) {
                    end = Math.min(buf.length, end);
                    var res = [];
                    var i = start;
                    while (i < end) {
                        var firstByte = buf[i];
                        var codePoint = null;
                        var bytesPerSequence = (firstByte > 0xEF) ? 4
                            : (firstByte > 0xDF) ? 3
                                : (firstByte > 0xBF) ? 2
                                    : 1;
                        if (i + bytesPerSequence <= end) {
                            var secondByte, thirdByte, fourthByte, tempCodePoint;
                            switch (bytesPerSequence) {
                                case 1:
                                    if (firstByte < 0x80) {
                                        codePoint = firstByte;
                                    }
                                    break;
                                case 2:
                                    secondByte = buf[i + 1];
                                    if ((secondByte & 0xC0) === 0x80) {
                                        tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                                        if (tempCodePoint > 0x7F) {
                                            codePoint = tempCodePoint;
                                        }
                                    }
                                    break;
                                case 3:
                                    secondByte = buf[i + 1];
                                    thirdByte = buf[i + 2];
                                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                                            codePoint = tempCodePoint;
                                        }
                                    }
                                    break;
                                case 4:
                                    secondByte = buf[i + 1];
                                    thirdByte = buf[i + 2];
                                    fourthByte = buf[i + 3];
                                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                                            codePoint = tempCodePoint;
                                        }
                                    }
                            }
                        }
                        if (codePoint === null) {
                            // we did not generate a valid codePoint so insert a
                            // replacement char (U+FFFD) and advance only 1 byte
                            codePoint = 0xFFFD;
                            bytesPerSequence = 1;
                        }
                        else if (codePoint > 0xFFFF) {
                            // encode to utf16 (surrogate pair dance)
                            codePoint -= 0x10000;
                            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
                            codePoint = 0xDC00 | codePoint & 0x3FF;
                        }
                        res.push(codePoint);
                        i += bytesPerSequence;
                    }
                    return decodeCodePointsArray(res);
                }
                // Based on http://stackoverflow.com/a/22747272/680742, the browser with
                // the lowest limit is Chrome, with 0x10000 args.
                // We go 1 magnitude less, for safety
                var MAX_ARGUMENTS_LENGTH = 0x1000;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH) {
                        return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
                    }
                    // Decode in chunks to avoid "call stack size exceeded".
                    var res = '';
                    var i = 0;
                    while (i < len) {
                        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                    }
                    return res;
                }
                function asciiSlice(buf, start, end) {
                    var ret = '';
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i) {
                        ret += String.fromCharCode(buf[i] & 0x7F);
                    }
                    return ret;
                }
                function latin1Slice(buf, start, end) {
                    var ret = '';
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i) {
                        ret += String.fromCharCode(buf[i]);
                    }
                    return ret;
                }
                function hexSlice(buf, start, end) {
                    var len = buf.length;
                    if (!start || start < 0)
                        start = 0;
                    if (!end || end < 0 || end > len)
                        end = len;
                    var out = '';
                    for (var i = start; i < end; ++i) {
                        out += toHex(buf[i]);
                    }
                    return out;
                }
                function utf16leSlice(buf, start, end) {
                    var bytes = buf.slice(start, end);
                    var res = '';
                    for (var i = 0; i < bytes.length; i += 2) {
                        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                    }
                    return res;
                }
                Buffer.prototype.slice = function slice(start, end) {
                    var len = this.length;
                    start = ~~start;
                    end = end === undefined ? len : ~~end;
                    if (start < 0) {
                        start += len;
                        if (start < 0)
                            start = 0;
                    }
                    else if (start > len) {
                        start = len;
                    }
                    if (end < 0) {
                        end += len;
                        if (end < 0)
                            end = 0;
                    }
                    else if (end > len) {
                        end = len;
                    }
                    if (end < start)
                        end = start;
                    var newBuf;
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        newBuf = this.subarray(start, end);
                        newBuf.__proto__ = Buffer.prototype;
                    }
                    else {
                        var sliceLen = end - start;
                        newBuf = new Buffer(sliceLen, undefined);
                        for (var i = 0; i < sliceLen; ++i) {
                            newBuf[i] = this[i + start];
                        }
                    }
                    return newBuf;
                };
                /*
                 * Need to make sure that buffer isn't trying to write out of bounds.
                 */
                function checkOffset(offset, ext, length) {
                    if ((offset % 1) !== 0 || offset < 0)
                        throw new RangeError('offset is not uint');
                    if (offset + ext > length)
                        throw new RangeError('Trying to access beyond buffer length');
                }
                Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert)
                        checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while (++i < byteLength && (mul *= 0x100)) {
                        val += this[offset + i] * mul;
                    }
                    return val;
                };
                Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        checkOffset(offset, byteLength, this.length);
                    }
                    var val = this[offset + --byteLength];
                    var mul = 1;
                    while (byteLength > 0 && (mul *= 0x100)) {
                        val += this[offset + --byteLength] * mul;
                    }
                    return val;
                };
                Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 1, this.length);
                    return this[offset];
                };
                Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 2, this.length);
                    return this[offset] | (this[offset + 1] << 8);
                };
                Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 2, this.length);
                    return (this[offset] << 8) | this[offset + 1];
                };
                Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return ((this[offset]) |
                        (this[offset + 1] << 8) |
                        (this[offset + 2] << 16)) +
                        (this[offset + 3] * 0x1000000);
                };
                Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return (this[offset] * 0x1000000) +
                        ((this[offset + 1] << 16) |
                            (this[offset + 2] << 8) |
                            this[offset + 3]);
                };
                Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert)
                        checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while (++i < byteLength && (mul *= 0x100)) {
                        val += this[offset + i] * mul;
                    }
                    mul *= 0x80;
                    if (val >= mul)
                        val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert)
                        checkOffset(offset, byteLength, this.length);
                    var i = byteLength;
                    var mul = 1;
                    var val = this[offset + --i];
                    while (i > 0 && (mul *= 0x100)) {
                        val += this[offset + --i] * mul;
                    }
                    mul *= 0x80;
                    if (val >= mul)
                        val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 1, this.length);
                    if (!(this[offset] & 0x80))
                        return (this[offset]);
                    return ((0xff - this[offset] + 1) * -1);
                };
                Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 2, this.length);
                    var val = this[offset] | (this[offset + 1] << 8);
                    return (val & 0x8000) ? val | 0xFFFF0000 : val;
                };
                Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 2, this.length);
                    var val = this[offset + 1] | (this[offset] << 8);
                    return (val & 0x8000) ? val | 0xFFFF0000 : val;
                };
                Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return (this[offset]) |
                        (this[offset + 1] << 8) |
                        (this[offset + 2] << 16) |
                        (this[offset + 3] << 24);
                };
                Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return (this[offset] << 24) |
                        (this[offset + 1] << 16) |
                        (this[offset + 2] << 8) |
                        (this[offset + 3]);
                };
                Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, true, 23, 4);
                };
                Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, false, 23, 4);
                };
                Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, true, 52, 8);
                };
                Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                    if (!noAssert)
                        checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, false, 52, 8);
                };
                function checkInt(buf, value, offset, ext, max, min) {
                    if (!Buffer.isBuffer(buf))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (value > max || value < min)
                        throw new RangeError('"value" argument is out of bounds');
                    if (offset + ext > buf.length)
                        throw new RangeError('Index out of range');
                }
                Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var mul = 1;
                    var i = 0;
                    this[offset] = value & 0xFF;
                    while (++i < byteLength && (mul *= 0x100)) {
                        this[offset + i] = (value / mul) & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    this[offset + i] = value & 0xFF;
                    while (--i >= 0 && (mul *= 0x100)) {
                        this[offset + i] = (value / mul) & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 1, 0xff, 0);
                    if (!Buffer.TYPED_ARRAY_SUPPORT)
                        value = Math.floor(value);
                    this[offset] = (value & 0xff);
                    return offset + 1;
                };
                function objectWriteUInt16(buf, value, offset, littleEndian) {
                    if (value < 0)
                        value = 0xffff + value + 1;
                    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
                            (littleEndian ? i : 1 - i) * 8;
                    }
                }
                Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 2, 0xffff, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value & 0xff);
                        this[offset + 1] = (value >>> 8);
                    }
                    else {
                        objectWriteUInt16(this, value, offset, true);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 2, 0xffff, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value >>> 8);
                        this[offset + 1] = (value & 0xff);
                    }
                    else {
                        objectWriteUInt16(this, value, offset, false);
                    }
                    return offset + 2;
                };
                function objectWriteUInt32(buf, value, offset, littleEndian) {
                    if (value < 0)
                        value = 0xffffffff + value + 1;
                    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
                    }
                }
                Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 4, 0xffffffff, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset + 3] = (value >>> 24);
                        this[offset + 2] = (value >>> 16);
                        this[offset + 1] = (value >>> 8);
                        this[offset] = (value & 0xff);
                    }
                    else {
                        objectWriteUInt32(this, value, offset, true);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 4, 0xffffffff, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value >>> 24);
                        this[offset + 1] = (value >>> 16);
                        this[offset + 2] = (value >>> 8);
                        this[offset + 3] = (value & 0xff);
                    }
                    else {
                        objectWriteUInt32(this, value, offset, false);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = 0;
                    var mul = 1;
                    var sub = 0;
                    this[offset] = value & 0xFF;
                    while (++i < byteLength && (mul *= 0x100)) {
                        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                            sub = 1;
                        }
                        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    var sub = 0;
                    this[offset + i] = value & 0xFF;
                    while (--i >= 0 && (mul *= 0x100)) {
                        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                            sub = 1;
                        }
                        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 1, 0x7f, -0x80);
                    if (!Buffer.TYPED_ARRAY_SUPPORT)
                        value = Math.floor(value);
                    if (value < 0)
                        value = 0xff + value + 1;
                    this[offset] = (value & 0xff);
                    return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 2, 0x7fff, -0x8000);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value & 0xff);
                        this[offset + 1] = (value >>> 8);
                    }
                    else {
                        objectWriteUInt16(this, value, offset, true);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 2, 0x7fff, -0x8000);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value >>> 8);
                        this[offset + 1] = (value & 0xff);
                    }
                    else {
                        objectWriteUInt16(this, value, offset, false);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value & 0xff);
                        this[offset + 1] = (value >>> 8);
                        this[offset + 2] = (value >>> 16);
                        this[offset + 3] = (value >>> 24);
                    }
                    else {
                        objectWriteUInt32(this, value, offset, true);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert)
                        checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
                    if (value < 0)
                        value = 0xffffffff + value + 1;
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = (value >>> 24);
                        this[offset + 1] = (value >>> 16);
                        this[offset + 2] = (value >>> 8);
                        this[offset + 3] = (value & 0xff);
                    }
                    else {
                        objectWriteUInt32(this, value, offset, false);
                    }
                    return offset + 4;
                };
                function checkIEEE754(buf, value, offset, ext, max, min) {
                    if (offset + ext > buf.length)
                        throw new RangeError('Index out of range');
                    if (offset < 0)
                        throw new RangeError('Index out of range');
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
                    }
                    ieee754.write(buf, value, offset, littleEndian, 23, 4);
                    return offset + 4;
                }
                Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                    return writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                    return writeFloat(this, value, offset, false, noAssert);
                };
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
                    }
                    ieee754.write(buf, value, offset, littleEndian, 52, 8);
                    return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                    return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                    return writeDouble(this, value, offset, false, noAssert);
                };
                // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
                Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                    if (!start)
                        start = 0;
                    if (!end && end !== 0)
                        end = this.length;
                    if (targetStart >= target.length)
                        targetStart = target.length;
                    if (!targetStart)
                        targetStart = 0;
                    if (end > 0 && end < start)
                        end = start;
                    // Copy 0 bytes; we're done
                    if (end === start)
                        return 0;
                    if (target.length === 0 || this.length === 0)
                        return 0;
                    // Fatal error conditions
                    if (targetStart < 0) {
                        throw new RangeError('targetStart out of bounds');
                    }
                    if (start < 0 || start >= this.length)
                        throw new RangeError('sourceStart out of bounds');
                    if (end < 0)
                        throw new RangeError('sourceEnd out of bounds');
                    // Are we oob?
                    if (end > this.length)
                        end = this.length;
                    if (target.length - targetStart < end - start) {
                        end = target.length - targetStart + start;
                    }
                    var len = end - start;
                    var i;
                    if (this === target && start < targetStart && targetStart < end) {
                        // descending copy from end
                        for (i = len - 1; i >= 0; --i) {
                            target[i + targetStart] = this[i + start];
                        }
                    }
                    else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
                        // ascending copy from start
                        for (i = 0; i < len; ++i) {
                            target[i + targetStart] = this[i + start];
                        }
                    }
                    else {
                        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                    }
                    return len;
                };
                // Usage:
                //    buffer.fill(number[, offset[, end]])
                //    buffer.fill(buffer[, offset[, end]])
                //    buffer.fill(string[, offset[, end]][, encoding])
                Buffer.prototype.fill = function fill(val, start, end, encoding) {
                    // Handle string cases:
                    if (typeof val === 'string') {
                        if (typeof start === 'string') {
                            encoding = start;
                            start = 0;
                            end = this.length;
                        }
                        else if (typeof end === 'string') {
                            encoding = end;
                            end = this.length;
                        }
                        if (val.length === 1) {
                            var code = val.charCodeAt(0);
                            if (code < 256) {
                                val = code;
                            }
                        }
                        if (encoding !== undefined && typeof encoding !== 'string') {
                            throw new TypeError('encoding must be a string');
                        }
                        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                            throw new TypeError('Unknown encoding: ' + encoding);
                        }
                    }
                    else if (typeof val === 'number') {
                        val = val & 255;
                    }
                    // Invalid ranges are not set to a default, so can range check early.
                    if (start < 0 || this.length < start || this.length < end) {
                        throw new RangeError('Out of range index');
                    }
                    if (end <= start) {
                        return this;
                    }
                    start = start >>> 0;
                    end = end === undefined ? this.length : end >>> 0;
                    if (!val)
                        val = 0;
                    var i;
                    if (typeof val === 'number') {
                        for (i = start; i < end; ++i) {
                            this[i] = val;
                        }
                    }
                    else {
                        var bytes = Buffer.isBuffer(val)
                            ? val
                            : utf8ToBytes(new Buffer(val, encoding).toString());
                        var len = bytes.length;
                        for (i = 0; i < end - start; ++i) {
                            this[i + start] = bytes[i % len];
                        }
                    }
                    return this;
                };
                // HELPER FUNCTIONS
                // ================
                var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    // Node strips out invalid characters like \n and \t from the string, base64-js does not
                    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
                    // Node converts strings with length < 2 to ''
                    if (str.length < 2)
                        return '';
                    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                    while (str.length % 4 !== 0) {
                        str = str + '=';
                    }
                    return str;
                }
                function stringtrim(str) {
                    if (str.trim)
                        return str.trim();
                    return str.replace(/^\s+|\s+$/g, '');
                }
                function toHex(n) {
                    if (n < 16)
                        return '0' + n.toString(16);
                    return n.toString(16);
                }
                function utf8ToBytes(string, units) {
                    units = units || Infinity;
                    var codePoint;
                    var length = string.length;
                    var leadSurrogate = null;
                    var bytes = [];
                    for (var i = 0; i < length; ++i) {
                        codePoint = string.charCodeAt(i);
                        // is surrogate component
                        if (codePoint > 0xD7FF && codePoint < 0xE000) {
                            // last char was a lead
                            if (!leadSurrogate) {
                                // no lead yet
                                if (codePoint > 0xDBFF) {
                                    // unexpected trail
                                    if ((units -= 3) > -1)
                                        bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                else if (i + 1 === length) {
                                    // unpaired lead
                                    if ((units -= 3) > -1)
                                        bytes.push(0xEF, 0xBF, 0xBD);
                                    continue;
                                }
                                // valid lead
                                leadSurrogate = codePoint;
                                continue;
                            }
                            // 2 leads in a row
                            if (codePoint < 0xDC00) {
                                if ((units -= 3) > -1)
                                    bytes.push(0xEF, 0xBF, 0xBD);
                                leadSurrogate = codePoint;
                                continue;
                            }
                            // valid surrogate pair
                            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
                        }
                        else if (leadSurrogate) {
                            // valid bmp char, but last char was a lead
                            if ((units -= 3) > -1)
                                bytes.push(0xEF, 0xBF, 0xBD);
                        }
                        leadSurrogate = null;
                        // encode utf8
                        if (codePoint < 0x80) {
                            if ((units -= 1) < 0)
                                break;
                            bytes.push(codePoint);
                        }
                        else if (codePoint < 0x800) {
                            if ((units -= 2) < 0)
                                break;
                            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
                        }
                        else if (codePoint < 0x10000) {
                            if ((units -= 3) < 0)
                                break;
                            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
                        }
                        else if (codePoint < 0x110000) {
                            if ((units -= 4) < 0)
                                break;
                            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
                        }
                        else {
                            throw new Error('Invalid code point');
                        }
                    }
                    return bytes;
                }
                function asciiToBytes(str) {
                    var byteArray = [];
                    for (var i = 0; i < str.length; ++i) {
                        // Node's code seems to be doing this and not & 0x7F..
                        byteArray.push(str.charCodeAt(i) & 0xFF);
                    }
                    return byteArray;
                }
                function utf16leToBytes(str, units) {
                    var c, hi, lo;
                    var byteArray = [];
                    for (var i = 0; i < str.length; ++i) {
                        if ((units -= 2) < 0)
                            break;
                        c = str.charCodeAt(i);
                        hi = c >> 8;
                        lo = c % 256;
                        byteArray.push(lo);
                        byteArray.push(hi);
                    }
                    return byteArray;
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(base64clean(str));
                }
                function blitBuffer(src, dst, offset, length) {
                    for (var i = 0; i < length; ++i) {
                        if ((i + offset >= dst.length) || (i >= src.length))
                            break;
                        dst[i + offset] = src[i];
                    }
                    return i;
                }
                function isnan(val) {
                    return val !== val; // eslint-disable-line no-self-compare
                }
                /* WEBPACK VAR INJECTION */ 
            }.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div>\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"switchView('showDeployNewSmartProgram')\">Deploy New Smart Program</button>\n    <button class=\"btn btn-outline-secondary mr-2\" (click)=\"switchView('showWorkersList')\">Workers List</button>\n  </div>\n\n  <div *ngIf=\"showDeployNewSmartProgram\">\n    <h2>New Smart Program</h2>\n\n      <div class=\"form-group\">\n        <label for=\"horizonAddress\">Horizon Address</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ horizonAddress }}\" (input)=\" horizonAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"networkPassphrase\">Network Passphrase</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ networkPassphrase }}\" (input)=\"networkPassphrase = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Base State</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ emptyFileOnIpfsHash }}\" (input)=\"emptyFileOnIpfsHash = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imageAddress\">Image Address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"imageAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"imageHash\">Image Hash</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"imageHash = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\" *ngFor=\"let worker of selected_workers; index as i\">\n        <label for=\"executionFee\">worker {{ i+1 }} properties</label>\n\n        <div style=\"display: flex;\">\n          <span style=\"text-align: center; width: 100px;\">public key</span>\n          <input type=\"text\" class=\"form-control\" value=\"{{ worker.public_key }}\" (input)=\"selected_workers[i].public_key = $event.target.value\">\n        </div>\n\n        <div style=\"display: flex;\">\n          <span style=\"text-align: center; width: 100px;\">address</span>\n          <input type=\"text\" class=\"form-control\" value=\"{{ worker.address }}\" (input)=\"selected_workers[i].address = $event.target.value\">\n        </div>\n\n      </div>\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"addEmptyWorkerToSelectedList()\">add another worker</button>\n\n      <div class=\"form-group\" style=\"margin-top: 20px;\">\n        <label for=\"smartAccountKeyPair\">Smart Account Key Pair</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"smartAccountPublicKey\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"smartAccountPrivateKey\">\n        <button class=\"btn btn-outline-secondary mr-2\" (click)=\"generateNewKeyPair()\">Generate New KeyPair</button>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"smartAccountCreatorSeed\">Smart Account Creator Seed</label>\n        <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\" ngbTooltip=\"a secret key needed to pay transaction fee for create smart account\">more info</button>\n        <input type=\"text\" class=\"form-control\" (input)=\"smartAccountCreatorSeed = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"executionFee\">Execution Fee (in stroops)</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ executionFee }}\" (input)=\"executionFee = $event.target.value\">\n      </div>\n\n      <div *ngIf=\"result_message != ''\">\n        <pre>{{ result_message }}</pre>\n      </div>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\n\n  </div>\n\n  <div *ngIf=\"showWorkersList\">\n\n  \t\t<div class=\"container-table100\">\n  \t\t\t<div class=\"wrap-table100\">\n  \t\t\t\t<div class=\"table100 ver1 m-b-110\">\n  \t\t\t\t\t<div class=\"table100-head\">\n  \t\t\t\t\t\t<table>\n  \t\t\t\t\t\t\t<thead>\n  \t\t\t\t\t\t\t\t<tr class=\"row100 head\">\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column1\">availablily</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column2\">address</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column3\">public key</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column4\">network passphrase</th>\n  \t\t\t\t\t\t\t\t\t<th class=\"cell100 column5\">horizon address</th>\n                    <th class=\"cell100 column6\">ipfs address</th>\n  \t\t\t\t\t\t\t\t</tr>\n  \t\t\t\t\t\t\t</thead>\n  \t\t\t\t\t\t</table>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class=\"table100-body js-pscroll\">\n  \t\t\t\t\t\t<table>\n  \t\t\t\t\t\t\t<tbody>\n\n                  <tr *ngFor=\"let worker of workers\">\n\n                    <td class=\"cell100 column1\">\n                      <span class=\"dot_green\" *ngIf=\"worker.is_up > 0\"></span>\n                      <span class=\"dot_dark\" *ngIf=\"worker.is_up <= 0\"></span>\n                    </td>\n\n                    <td class=\"cell100 column2\">{{ worker.address }}</td>\n                    <td class=\"cell100 column3\">\n                      {{ worker.public_key.slice(0, 20) }}...\n                      <button type=\"button\" class=\"btn btn-link\" (click)=\"copyMessage(worker.public_key)\">Copy this</button>\n                    </td>\n                    <td class=\"cell100 column4\">{{ worker.network_passphrase }}</td>\n                    <td class=\"cell100 column5\">{{ worker.horizon_address }}</td>\n                    <td class=\"cell100 column6\">{{ worker.ipfs_address }}</td>\n                  </tr>\n\n                </tbody>\n  \t\t\t\t\t\t</table>\n  \t\t\t\t\t</div>\n          </div>\n        </div>\n      </div>\n\n      <h2 style=\"margin-top: 150px;\">Add New Worker</h2>\n      <div class=\"form-group\">\n        <label>public key</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerPublicKey = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerAddress = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>horizon address</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ newWorkerHorizon }}\" (input)=\"newWorkerHorizon = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>network passphrase</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{ newWorkerNetworkPassphrase }}\" (input)=\"newWorkerNetworkPassphrase = $event.target.value\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>ipfs address</label>\n        <input type=\"text\" class=\"form-control\" (input)=\"newWorkerIpfsAddress = $event.target.value\">\n      </div>\n\n      <div *ngIf=\"addNewWorkerResultMessage != ''\">\n        <pre>{{ addNewWorkerResultMessage }}</pre>\n      </div>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addNewWorker()\">Submit</button>\n  </div>\n\n\n</div>\n\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./node_modules/webpack/buildin/global.js": 
        /*!***********************************!*\
          !*** (webpack)/buildin/global.js ***!
          \***********************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var g;
            // This works in non-strict mode
            g = (function () {
                return this;
            })();
            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            }
            catch (e) {
                // This works if the window reference is available
                if (typeof window === "object")
                    g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module.exports = g;
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\n\n@font-face {\n  font-family: Lato-Regular;\n  src: url('/assets/fonts/Lato/Lato-Regular.ttf');\n}\n\n@font-face {\n  font-family: Lato-Bold;\n  src: url('/assets/fonts/Lato/Lato-Bold.ttf');\n}\n\nbody, html {\n\tfont-family: sans-serif;\n}\n\niframe {\n\tborder: none !important;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Scroll bar ]*/\n\n.js-pscroll {\n  position: relative;\n  overflow: hidden;\n}\n\n.table100 .ps__rail-y {\n  width: 9px;\n  background-color: transparent;\n  opacity: 1 !important;\n  right: 5px;\n}\n\n.table100 .ps__rail-y::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #ebebeb;\n  border-radius: 5px;\n  width: 100%;\n/*  height: calc(100% - 30px); */\n  left: 0;\n  top: 15px;\n}\n\n.table100 .ps__rail-y .ps__thumb-y {\n  width: 100%;\n  right: 0;\n  background-color: transparent;\n  opacity: 1 !important;\n}\n\n.table100 .ps__rail-y .ps__thumb-y::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background-color: #cccccc;\n  border-radius: 5px;\n  width: 100%;\n  /*height: calc(100% - 30px);*/\n  left: 0;\n  top: 15px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Table ]*/\n\n.limiter {\n  width: 1366px;\n  margin: 0 auto;\n}\n\n.container-table100 {\n  width: 100%;\n  /*min-height: 100vh;*/\n  background: #fff;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0px 0px;\n}\n\n.wrap-table100 {\n  width: 1170px;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ Table ]*/\n\n.table100 {\n  background-color: #fff;\n}\n\ntable {\n  width: 100%;\n}\n\nth, td {\n  font-weight: unset;\n  padding-right: 10px;\n}\n\n.column1 {\n  width: 10%;\n  padding-left: 20px;\n  text-align: center;\n}\n\n.column2 {\n  width: 15%;\n  text-align: center;\n}\n\n.column3 {\n  width: 15%;\n  text-align: center;\n}\n\n.column4 {\n  width: 15%;\n  text-align: center;\n}\n\n.column5 {\n  width: 15%;\n  text-align: center;\n}\n\n.column6 {\n  width: 15%;\n  text-align: center;\n}\n\n.table100-head th {\n  padding-top: 18px;\n  padding-bottom: 18px;\n}\n\n.table100-body td {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n/*==================================================================\n[ Fix header ]*/\n\n.table100 {\n  position: relative;\n  padding-top: 60px;\n}\n\n.table100-head {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n\n.table100-body {\n  /*max-height: 585px;*/\n  overflow: auto;\n}\n\n/*==================================================================\n[ Ver1 ]*/\n\n.table100.ver1 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #fff;\n  line-height: 1.4;\n\n  background-color: #6c7ae0;\n}\n\n.table100.ver1 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver1 .table100-body tr:nth-child(even) {\n  background-color: #f8f6ff;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver1 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver1 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver1 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver1 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver2 ]*/\n\n.table100.ver2 .table100-head {\n  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\n}\n\n.table100.ver2 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #fa4251;\n  line-height: 1.4;\n\n  background-color: transparent;\n}\n\n.table100.ver2 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver2 .table100-body tr {\n  border-bottom: 1px solid #f2f2f2;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver2 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver2 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver2 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver2 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver3 ]*/\n\n.table100.ver3 {\n  background-color: #393939;\n}\n\n.table100.ver3 th {\n  font-family: Lato-Bold;\n  font-size: 15px;\n  color: #00ad5f;\n  line-height: 1.4;\n  text-transform: uppercase;\n  background-color: #393939;\n}\n\n.table100.ver3 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n  background-color: #222222;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver3 {\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -moz-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -o-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n  -ms-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);\n}\n\n.table100.ver3 .ps__rail-y {\n  right: 5px;\n}\n\n.table100.ver3 .ps__rail-y::before {\n  background-color: #4e4e4e;\n}\n\n.table100.ver3 .ps__rail-y .ps__thumb-y::before {\n  background-color: #00ad5f;\n}\n\n/*==================================================================\n[ Ver4 ]*/\n\n.table100.ver4 {\n  margin-right: -20px;\n}\n\n.table100.ver4 .table100-head {\n  padding-right: 20px;\n}\n\n.table100.ver4 th {\n  font-family: Lato-Bold;\n  font-size: 18px;\n  color: #4272d7;\n  line-height: 1.4;\n\n  background-color: transparent;\n  border-bottom: 2px solid #f2f2f2;\n}\n\n.table100.ver4 .column1 {\n  padding-left: 7px;\n}\n\n.table100.ver4 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n}\n\n.table100.ver4 .table100-body tr {\n  border-bottom: 1px solid #f2f2f2;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver4 {\n  overflow: hidden;\n}\n\n.table100.ver4 .table100-body{\n  padding-right: 20px;\n}\n\n.table100.ver4 .ps__rail-y {\n  right: 0px;\n}\n\n.table100.ver4 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver4 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n/*==================================================================\n[ Ver5 ]*/\n\n.table100.ver5 {\n  margin-right: -30px;\n}\n\n.table100.ver5 .table100-head {\n  padding-right: 30px;\n}\n\n.table100.ver5 th {\n  font-family: Lato-Bold;\n  font-size: 14px;\n  color: #555555;\n  line-height: 1.4;\n  text-transform: uppercase;\n\n  background-color: transparent;\n}\n\n.table100.ver5 td {\n  font-family: Lato-Regular;\n  font-size: 15px;\n  color: #808080;\n  line-height: 1.4;\n\n  background-color: #f7f7f7;\n}\n\n.table100.ver5 .table100-body tr {\n  overflow: hidden;\n  border-bottom: 10px solid #fff;\n  border-radius: 10px;\n}\n\n.table100.ver5 .table100-body table {\n  border-collapse: separate;\n  border-spacing: 0 10px;\n}\n\n.table100.ver5 .table100-body td {\n    border: solid 1px transparent;\n    border-style: solid none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.table100.ver5 .table100-body td:first-child {\n    border-left-style: solid;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.table100.ver5 .table100-body td:last-child {\n    border-right-style: solid;\n    border-bottom-right-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.table100.ver5 tr:hover td {\n  background-color: #ebebeb;\n  cursor: pointer;\n}\n\n.table100.ver5 .table100-head th {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n/*---------------------------------------------*/\n\n.table100.ver5 {\n  overflow: hidden;\n}\n\n.table100.ver5 .table100-body{\n  padding-right: 30px;\n}\n\n.table100.ver5 .ps__rail-y {\n  right: 0px;\n}\n\n.table100.ver5 .ps__rail-y::before {\n  background-color: #ebebeb;\n}\n\n.table100.ver5 .ps__rail-y .ps__thumb-y::before {\n  background-color: #cccccc;\n}\n\n.dot_green {\n  height: 15px;\n  width: 15px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dot_dark {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtFQUNFLHlCQUF5QjtFQUN6QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0FBQzlDOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO2VBQ2U7O0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IsZ0NBQWdDO0VBQzlCLE9BQU87RUFDUCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFHQTtVQUNVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFLaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO1VBQ1U7O0FBQ1Y7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO2VBQ2U7O0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBR0E7U0FDUzs7QUFFVDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjs7RUFFaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxtREFBbUQ7RUFDbkQsc0RBQXNEO0VBQ3RELGlEQUFpRDtFQUNqRCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7U0FDUzs7QUFFVDtFQUNFLDZDQUE2QztFQUM3QyxrREFBa0Q7RUFDbEQscURBQXFEO0VBQ3JELGdEQUFnRDtFQUNoRCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7O0VBRWhCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQSxnREFBZ0Q7O0FBRWhEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsbURBQW1EO0VBQ25ELHNEQUFzRDtFQUN0RCxpREFBaUQ7RUFDakQsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO1NBQ1M7O0FBRVQ7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBR0EsZ0RBQWdEOztBQUVoRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLG1EQUFtRDtFQUNuRCxzREFBc0Q7RUFDdEQsaURBQWlEO0VBQ2pELGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtTQUNTOztBQUNUO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCOztFQUVoQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7U0FDUzs7QUFDVDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7O0VBRXpCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxnREFBZ0Q7O0FBRWhEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvTGF0by9MYXRvLUJvbGQudHRmJyk7XG59XG5cbmJvZHksIGh0bWwge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaWZyYW1lIHtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIFNjcm9sbCBiYXIgXSovXG4uanMtcHNjcm9sbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IHtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuLyogIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IC5wc19fdGh1bWIteSB7XG4gIHdpZHRoOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlMTAwIC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLypoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpOyovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBUYWJsZSBdKi9cblxuLmxpbWl0ZXIge1xuICB3aWR0aDogMTM2NnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci10YWJsZTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKm1pbi1oZWlnaHQ6IDEwMHZoOyovXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuLndyYXAtdGFibGUxMDAge1xuICB3aWR0aDogMTE3MHB4O1xufVxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBUYWJsZSBdKi9cbi50YWJsZTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLCB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNvbHVtbjEge1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbjIge1xuICB3aWR0aDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW4zIHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sdW1uNCB7XG4gIHdpZHRoOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbjUge1xuICB3aWR0aDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW42IHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUxMDAtaGVhZCB0aCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLnRhYmxlMTAwLWJvZHkgdGQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZpeCBoZWFkZXIgXSovXG4udGFibGUxMDAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4udGFibGUxMDAtaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnRhYmxlMTAwLWJvZHkge1xuICAvKm1heC1oZWlnaHQ6IDU4NXB4OyovXG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjEgXSovXG5cbi50YWJsZTEwMC52ZXIxIHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3YWUwO1xufVxuXG4udGFibGUxMDAudmVyMSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi50YWJsZTEwMC52ZXIxIC50YWJsZTEwMC1ib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY2ZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnRhYmxlMTAwLnZlcjEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW8tYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1zLWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi50YWJsZTEwMC52ZXIxIC5wc19fcmFpbC15IHtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnRhYmxlMTAwLnZlcjEgLnBzX19yYWlsLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi50YWJsZTEwMC52ZXIxIC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBWZXIyIF0qL1xuXG4udGFibGUxMDAudmVyMiAudGFibGUxMDAtaGVhZCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50YWJsZTEwMC52ZXIyIHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZhNDI1MTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhYmxlMTAwLnZlcjIgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4udGFibGUxMDAudmVyMiAudGFibGUxMDAtYm9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50YWJsZTEwMC52ZXIyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1vLWJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4udGFibGUxMDAudmVyMiAucHNfX3JhaWwteSB7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi50YWJsZTEwMC52ZXIyIC5wc19fcmFpbC15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4udGFibGUxMDAudmVyMiAucHNfX3JhaWwteSAucHNfX3RodW1iLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjMgXSovXG5cbi50YWJsZTEwMC52ZXIzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgdGgge1xuICBmb250LWZhbWlseTogTGF0by1Cb2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDBhZDVmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4udGFibGUxMDAudmVyMyB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGFibGUxMDAudmVyMyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtby1ib3gtc2hhZG93OiAwIDBweCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbXMtYm94LXNoYWRvdzogMCAwcHggNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgLnBzX19yYWlsLXkge1xuICByaWdodDogNXB4O1xufVxuXG4udGFibGUxMDAudmVyMyAucHNfX3JhaWwteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcbn1cblxuLnRhYmxlMTAwLnZlcjMgLnBzX19yYWlsLXkgLnBzX190aHVtYi15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZDVmO1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIFZlcjQgXSovXG4udGFibGUxMDAudmVyNCB7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI0IC50YWJsZTEwMC1oZWFkIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgdGgge1xuICBmb250LWZhbWlseTogTGF0by1Cb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNDI3MmQ3O1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YyZjJmMjtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLmNvbHVtbjEge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4udGFibGUxMDAudmVyNCAudGFibGUxMDAtYm9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50YWJsZTEwMC52ZXI0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLnRhYmxlMTAwLWJvZHl7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI0IC5wc19fcmFpbC15IHtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjQgLnBzX19yYWlsLXk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi50YWJsZTEwMC52ZXI0IC5wc19fcmFpbC15IC5wc19fdGh1bWIteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBWZXI1IF0qL1xuLnRhYmxlMTAwLnZlcjUge1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtaGVhZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi50YWJsZTEwMC52ZXI1IHRoIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhYmxlMTAwLnZlcjUgdGQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi50YWJsZTEwMC52ZXI1IC50YWJsZTEwMC1ib2R5IHRyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XG59XG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0ZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnRhYmxlMTAwLWhlYWQgdGgge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnRhYmxlMTAwLnZlcjUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUxMDAudmVyNSAudGFibGUxMDAtYm9keXtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXkge1xuICByaWdodDogMHB4O1xufVxuXG4udGFibGUxMDAudmVyNSAucHNfX3JhaWwteTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cblxuLnRhYmxlMTAwLnZlcjUgLnBzX19yYWlsLXkgLnBzX190aHVtYi15OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4uZG90X2dyZWVuIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZG90X2Rhcmsge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var stellar_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stellar-sdk */ "./node_modules/stellar-sdk/lib/index.js");
            /* harmony import */ var stellar_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(http) {
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
                    this.configUrl = 'assets/config.json';
                }
                AppComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var source, conf;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000);
                                    this.subscription = source.subscribe(function (val) { return _this.getWorkersList(); });
                                    return [4 /*yield*/, this.http.get(this.configUrl).toPromise()];
                                case 1:
                                    conf = _a.sent();
                                    this.apiUrl = conf.apiUrl;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AppComponent.prototype.onSubmit = function () {
                    var self = this;
                    (function main() {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                            var smartAccountCreatorKeyPair, _a, lastestLedgerPromise, baseReserve, fee, createSmartAccountTransaction, createSmartAccountResult, smartProgramSpecOps, i, percent51, error_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 6, , 7]);
                                        self.result_message = new Date().toLocaleString() + " INFO: creating smart account...";
                                        smartAccountCreatorKeyPair = stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].fromSecret(self.smartAccountCreatorSeed);
                                        self.server = new stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Server"](self.horizonAddress);
                                        _a = self;
                                        return [4 /*yield*/, self.server.loadAccount(smartAccountCreatorKeyPair.publicKey())];
                                    case 1:
                                        _a.smartAccountCreator = _b.sent();
                                        lastestLedgerPromise = void 0;
                                        return [4 /*yield*/, self.http.get(self.horizonAddress + "/ledgers?order=desc&limit=1").toPromise()];
                                    case 2:
                                        lastestLedgerPromise = _b.sent();
                                        baseReserve = (lastestLedgerPromise._embedded.records[0].base_reserve_in_stroops / 10000000) * 2 + 10;
                                        return [4 /*yield*/, self.server.fetchBaseFee()];
                                    case 3:
                                        fee = _b.sent();
                                        createSmartAccountTransaction = new stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["TransactionBuilder"](self.smartAccountCreator, { fee: fee, networkPassphrase: self.networkPassphrase })
                                            .addOperation(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].createAccount({
                                            destination: self.smartAccountPublicKey,
                                            startingBalance: baseReserve + ""
                                        }))
                                            .setTimeout(0)
                                            .build();
                                        createSmartAccountTransaction.sign(smartAccountCreatorKeyPair);
                                        return [4 /*yield*/, self.server.submitTransaction(createSmartAccountTransaction)];
                                    case 4:
                                        createSmartAccountResult = _b.sent();
                                        self.result_message += " done \n";
                                        self.result_message += new Date().toLocaleString() + " INFO: setting smart program image specifications... ";
                                        smartProgramSpecOps = [
                                            stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'current_state', value: 'QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH' }),
                                            stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'smart_program_image_address', value: self.imageAddress }),
                                            stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'smart_program_image_hash', value: self.imageHash }),
                                            stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'execution_fee', value: self.executionFee }),
                                            stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'latest_transaction_changed_state', value: createSmartAccountResult.hash }),
                                        ];
                                        for (i = 0; i < self.selected_workers.length; i++) {
                                            smartProgramSpecOps.push(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'worker_' + (i + 1) + '_address', value: self.selected_workers[i].address }));
                                            smartProgramSpecOps.push(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].manageData({ name: 'worker_' + (i + 1) + '_public_key', value: self.selected_workers[i].public_key }));
                                            smartProgramSpecOps.push(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].setOptions({ signer: {
                                                    ed25519PublicKey: self.selected_workers[i].public_key,
                                                    weight: 1
                                                }
                                            }));
                                        }
                                        percent51 = parseInt(self.selected_workers.length / 2 + "") + 1;
                                        smartProgramSpecOps.push(stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Operation"].setOptions({ masterWeight: 0, lowThreshold: percent51, medThreshold: percent51, highThreshold: percent51 }));
                                        return [4 /*yield*/, self.signAndSubmit(self, smartProgramSpecOps)];
                                    case 5:
                                        _b.sent();
                                        self.result_message += "done \n";
                                        self.result_message += "conguradulation. you created the smart account successfully";
                                        return [3 /*break*/, 7];
                                    case 6:
                                        error_1 = _b.sent();
                                        console.error(error_1);
                                        self.result_message = error_1.message;
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        });
                    })();
                };
                AppComponent.prototype.signAndSubmit = function (self, ops) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var smartAccountKeyPair, smartAccount, fee, txBuilder, ops_1, ops_1_1, op, tx, xdr, submitTxResult;
                        var e_1, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    smartAccountKeyPair = stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].fromSecret(self.smartAccountPrivateKey);
                                    return [4 /*yield*/, self.server.loadAccount(smartAccountKeyPair.publicKey())];
                                case 1:
                                    smartAccount = _b.sent();
                                    return [4 /*yield*/, self.server.fetchBaseFee()];
                                case 2:
                                    fee = _b.sent();
                                    txBuilder = new stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["TransactionBuilder"](smartAccount, { fee: fee, networkPassphrase: self.networkPassphrase })
                                        .setTimeout(0);
                                    try {
                                        for (ops_1 = __values(ops), ops_1_1 = ops_1.next(); !ops_1_1.done; ops_1_1 = ops_1.next()) {
                                            op = ops_1_1.value;
                                            txBuilder.addOperation(op);
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (ops_1_1 && !ops_1_1.done && (_a = ops_1.return)) _a.call(ops_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    tx = txBuilder.build();
                                    tx.sign(smartAccountKeyPair);
                                    xdr = tx.toEnvelope().toXDR().toString("base64");
                                    console.log(xdr);
                                    return [4 /*yield*/, self.server.submitTransaction(tx)];
                                case 3:
                                    submitTxResult = _b.sent();
                                    console.log(submitTxResult);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AppComponent.prototype.generateNewKeyPair = function () {
                    var keypair = stellar_sdk__WEBPACK_IMPORTED_MODULE_2__["Keypair"].random();
                    this.smartAccountPublicKey = keypair.publicKey();
                    this.smartAccountPrivateKey = keypair.secret();
                };
                AppComponent.prototype.switchView = function (switchOption) {
                    if (switchOption == 'showDeployNewSmartProgram') {
                        this.showDeployNewSmartProgram = true;
                        this.showWorkersList = false;
                    }
                    else if (switchOption == 'showWorkersList') {
                        this.showDeployNewSmartProgram = false;
                        this.showWorkersList = true;
                        this.getWorkersList();
                    }
                };
                AppComponent.prototype.getWorkersList = function () {
                    var _this = this;
                    this.http.get(this.apiUrl).subscribe(function (data) {
                        console.log(data);
                        _this.workers = data;
                    });
                };
                AppComponent.prototype.copyMessage = function (val) {
                    var textarea = null;
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
                    var successful = document.execCommand("copy");
                    if (successful) {
                        // do something
                    }
                    else {
                        // handle the error
                    }
                    if (textarea && textarea.parentNode) {
                        textarea.parentNode.removeChild(textarea);
                    }
                };
                AppComponent.prototype.addEmptyWorkerToSelectedList = function () {
                    this.selected_workers.push({
                        public_key: '',
                        address: ''
                    });
                };
                AppComponent.prototype.addNewWorker = function () {
                    var self = this;
                    this.addNewWorkerResultMessage = "adding wokrer...";
                    var newWorkerSpec = {
                        public_key: this.newWorkerPublicKey,
                        address: this.newWorkerAddress,
                        horizon_address: this.newWorkerHorizon,
                        network_passphrase: this.newWorkerNetworkPassphrase,
                        ipfs_address: this.newWorkerIpfsAddress
                    };
                    this.http.post(this.apiUrl, newWorkerSpec).subscribe(function (val) { }, function (response) {
                        self.addNewWorkerResultMessage += " done! ";
                        self.getWorkersList();
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                }),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/mahdi/workspace/smart_program/webui/front/src/main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!*******************************!*\
          !*** sodium-native (ignored) ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!************************!*\
          !*** crypto (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 4: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map