import {
  __commonJS
} from "./chunk-FZ7BPVOU.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code.`);
        }
      }
    }));
  }
});

// node_modules/underscore/underscore-umd.js
var require_underscore_umd = __commonJS({
  "node_modules/underscore/underscore-umd.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("underscore", factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, function() {
        var current = global2._;
        var exports2 = global2._ = factory();
        exports2.noConflict = function() {
          global2._ = current;
          return exports2;
        };
      }());
    })(exports, function() {
      var VERSION = "1.13.6";
      var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
      var ArrayProto = Array.prototype, ObjProto = Object.prototype;
      var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
      var push = ArrayProto.push, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
      var supportsArrayBuffer = typeof ArrayBuffer !== "undefined", supportsDataView = typeof DataView !== "undefined";
      var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeCreate = Object.create, nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
      var _isNaN = isNaN, _isFinite = isFinite;
      var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
      var nonEnumerableProps = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString"
      ];
      var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
      function restArguments(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
          var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
          for (; index < length; index++) {
            rest2[index] = arguments[index + startIndex];
          }
          switch (startIndex) {
            case 0:
              return func.call(this, rest2);
            case 1:
              return func.call(this, arguments[0], rest2);
            case 2:
              return func.call(this, arguments[0], arguments[1], rest2);
          }
          var args = Array(startIndex + 1);
          for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
          }
          args[startIndex] = rest2;
          return func.apply(this, args);
        };
      }
      function isObject(obj) {
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj;
      }
      function isNull(obj) {
        return obj === null;
      }
      function isUndefined(obj) {
        return obj === void 0;
      }
      function isBoolean(obj) {
        return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
      }
      function isElement(obj) {
        return !!(obj && obj.nodeType === 1);
      }
      function tagTester(name) {
        var tag = "[object " + name + "]";
        return function(obj) {
          return toString.call(obj) === tag;
        };
      }
      var isString = tagTester("String");
      var isNumber = tagTester("Number");
      var isDate = tagTester("Date");
      var isRegExp = tagTester("RegExp");
      var isError = tagTester("Error");
      var isSymbol = tagTester("Symbol");
      var isArrayBuffer = tagTester("ArrayBuffer");
      var isFunction = tagTester("Function");
      var nodelist = root.document && root.document.childNodes;
      if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
        isFunction = function(obj) {
          return typeof obj == "function" || false;
        };
      }
      var isFunction$1 = isFunction;
      var hasObjectTag = tagTester("Object");
      var hasStringTagBug = supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8))), isIE11 = typeof Map !== "undefined" && hasObjectTag(/* @__PURE__ */ new Map());
      var isDataView = tagTester("DataView");
      function ie10IsDataView(obj) {
        return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
      }
      var isDataView$1 = hasStringTagBug ? ie10IsDataView : isDataView;
      var isArray = nativeIsArray || tagTester("Array");
      function has$1(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
      }
      var isArguments = tagTester("Arguments");
      (function() {
        if (!isArguments(arguments)) {
          isArguments = function(obj) {
            return has$1(obj, "callee");
          };
        }
      })();
      var isArguments$1 = isArguments;
      function isFinite$1(obj) {
        return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
      }
      function isNaN$1(obj) {
        return isNumber(obj) && _isNaN(obj);
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function createSizePropertyCheck(getSizeProperty) {
        return function(collection) {
          var sizeProperty = getSizeProperty(collection);
          return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
        };
      }
      function shallowProperty(key) {
        return function(obj) {
          return obj == null ? void 0 : obj[key];
        };
      }
      var getByteLength = shallowProperty("byteLength");
      var isBufferLike = createSizePropertyCheck(getByteLength);
      var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
      function isTypedArray(obj) {
        return nativeIsView ? nativeIsView(obj) && !isDataView$1(obj) : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
      }
      var isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);
      var getLength = shallowProperty("length");
      function emulatedSet(keys2) {
        var hash = {};
        for (var l = keys2.length, i = 0; i < l; ++i)
          hash[keys2[i]] = true;
        return {
          contains: function(key) {
            return hash[key] === true;
          },
          push: function(key) {
            hash[key] = true;
            return keys2.push(key);
          }
        };
      }
      function collectNonEnumProps(obj, keys2) {
        keys2 = emulatedSet(keys2);
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;
        var prop = "constructor";
        if (has$1(obj, prop) && !keys2.contains(prop))
          keys2.push(prop);
        while (nonEnumIdx--) {
          prop = nonEnumerableProps[nonEnumIdx];
          if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
            keys2.push(prop);
          }
        }
      }
      function keys(obj) {
        if (!isObject(obj))
          return [];
        if (nativeKeys)
          return nativeKeys(obj);
        var keys2 = [];
        for (var key in obj)
          if (has$1(obj, key))
            keys2.push(key);
        if (hasEnumBug)
          collectNonEnumProps(obj, keys2);
        return keys2;
      }
      function isEmpty(obj) {
        if (obj == null)
          return true;
        var length = getLength(obj);
        if (typeof length == "number" && (isArray(obj) || isString(obj) || isArguments$1(obj)))
          return length === 0;
        return getLength(keys(obj)) === 0;
      }
      function isMatch(object2, attrs) {
        var _keys = keys(attrs), length = _keys.length;
        if (object2 == null)
          return !length;
        var obj = Object(object2);
        for (var i = 0; i < length; i++) {
          var key = _keys[i];
          if (attrs[key] !== obj[key] || !(key in obj))
            return false;
        }
        return true;
      }
      function _$1(obj) {
        if (obj instanceof _$1)
          return obj;
        if (!(this instanceof _$1))
          return new _$1(obj);
        this._wrapped = obj;
      }
      _$1.VERSION = VERSION;
      _$1.prototype.value = function() {
        return this._wrapped;
      };
      _$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
      _$1.prototype.toString = function() {
        return String(this._wrapped);
      };
      function toBufferView(bufferSource) {
        return new Uint8Array(
          bufferSource.buffer || bufferSource,
          bufferSource.byteOffset || 0,
          getByteLength(bufferSource)
        );
      }
      var tagDataView = "[object DataView]";
      function eq(a, b, aStack, bStack) {
        if (a === b)
          return a !== 0 || 1 / a === 1 / b;
        if (a == null || b == null)
          return false;
        if (a !== a)
          return b !== b;
        var type = typeof a;
        if (type !== "function" && type !== "object" && typeof b != "object")
          return false;
        return deepEq(a, b, aStack, bStack);
      }
      function deepEq(a, b, aStack, bStack) {
        if (a instanceof _$1)
          a = a._wrapped;
        if (b instanceof _$1)
          b = b._wrapped;
        var className = toString.call(a);
        if (className !== toString.call(b))
          return false;
        if (hasStringTagBug && className == "[object Object]" && isDataView$1(a)) {
          if (!isDataView$1(b))
            return false;
          className = tagDataView;
        }
        switch (className) {
          case "[object RegExp]":
          case "[object String]":
            return "" + a === "" + b;
          case "[object Number]":
            if (+a !== +a)
              return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
          case "[object Date]":
          case "[object Boolean]":
            return +a === +b;
          case "[object Symbol]":
            return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
          case "[object ArrayBuffer]":
          case tagDataView:
            return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
        }
        var areArrays = className === "[object Array]";
        if (!areArrays && isTypedArray$1(a)) {
          var byteLength = getByteLength(a);
          if (byteLength !== getByteLength(b))
            return false;
          if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
            return true;
          areArrays = true;
        }
        if (!areArrays) {
          if (typeof a != "object" || typeof b != "object")
            return false;
          var aCtor = a.constructor, bCtor = b.constructor;
          if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
            return false;
          }
        }
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
          if (aStack[length] === a)
            return bStack[length] === b;
        }
        aStack.push(a);
        bStack.push(b);
        if (areArrays) {
          length = a.length;
          if (length !== b.length)
            return false;
          while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
              return false;
          }
        } else {
          var _keys = keys(a), key;
          length = _keys.length;
          if (keys(b).length !== length)
            return false;
          while (length--) {
            key = _keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
              return false;
          }
        }
        aStack.pop();
        bStack.pop();
        return true;
      }
      function isEqual(a, b) {
        return eq(a, b);
      }
      function allKeys(obj) {
        if (!isObject(obj))
          return [];
        var keys2 = [];
        for (var key in obj)
          keys2.push(key);
        if (hasEnumBug)
          collectNonEnumProps(obj, keys2);
        return keys2;
      }
      function ie11fingerprint(methods) {
        var length = getLength(methods);
        return function(obj) {
          if (obj == null)
            return false;
          var keys2 = allKeys(obj);
          if (getLength(keys2))
            return false;
          for (var i = 0; i < length; i++) {
            if (!isFunction$1(obj[methods[i]]))
              return false;
          }
          return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
        };
      }
      var forEachName = "forEach", hasName = "has", commonInit = ["clear", "delete"], mapTail = ["get", hasName, "set"];
      var mapMethods = commonInit.concat(forEachName, mapTail), weakMapMethods = commonInit.concat(mapTail), setMethods = ["add"].concat(commonInit, forEachName, hasName);
      var isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
      var isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
      var isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
      var isWeakSet = tagTester("WeakSet");
      function values(obj) {
        var _keys = keys(obj);
        var length = _keys.length;
        var values2 = Array(length);
        for (var i = 0; i < length; i++) {
          values2[i] = obj[_keys[i]];
        }
        return values2;
      }
      function pairs(obj) {
        var _keys = keys(obj);
        var length = _keys.length;
        var pairs2 = Array(length);
        for (var i = 0; i < length; i++) {
          pairs2[i] = [_keys[i], obj[_keys[i]]];
        }
        return pairs2;
      }
      function invert(obj) {
        var result2 = {};
        var _keys = keys(obj);
        for (var i = 0, length = _keys.length; i < length; i++) {
          result2[obj[_keys[i]]] = _keys[i];
        }
        return result2;
      }
      function functions(obj) {
        var names = [];
        for (var key in obj) {
          if (isFunction$1(obj[key]))
            names.push(key);
        }
        return names.sort();
      }
      function createAssigner(keysFunc, defaults2) {
        return function(obj) {
          var length = arguments.length;
          if (defaults2)
            obj = Object(obj);
          if (length < 2 || obj == null)
            return obj;
          for (var index = 1; index < length; index++) {
            var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
            for (var i = 0; i < l; i++) {
              var key = keys2[i];
              if (!defaults2 || obj[key] === void 0)
                obj[key] = source[key];
            }
          }
          return obj;
        };
      }
      var extend = createAssigner(allKeys);
      var extendOwn = createAssigner(keys);
      var defaults = createAssigner(allKeys, true);
      function ctor() {
        return function() {
        };
      }
      function baseCreate(prototype) {
        if (!isObject(prototype))
          return {};
        if (nativeCreate)
          return nativeCreate(prototype);
        var Ctor = ctor();
        Ctor.prototype = prototype;
        var result2 = new Ctor();
        Ctor.prototype = null;
        return result2;
      }
      function create(prototype, props) {
        var result2 = baseCreate(prototype);
        if (props)
          extendOwn(result2, props);
        return result2;
      }
      function clone(obj) {
        if (!isObject(obj))
          return obj;
        return isArray(obj) ? obj.slice() : extend({}, obj);
      }
      function tap(obj, interceptor) {
        interceptor(obj);
        return obj;
      }
      function toPath$1(path) {
        return isArray(path) ? path : [path];
      }
      _$1.toPath = toPath$1;
      function toPath(path) {
        return _$1.toPath(path);
      }
      function deepGet(obj, path) {
        var length = path.length;
        for (var i = 0; i < length; i++) {
          if (obj == null)
            return void 0;
          obj = obj[path[i]];
        }
        return length ? obj : void 0;
      }
      function get(object2, path, defaultValue) {
        var value = deepGet(object2, toPath(path));
        return isUndefined(value) ? defaultValue : value;
      }
      function has(obj, path) {
        path = toPath(path);
        var length = path.length;
        for (var i = 0; i < length; i++) {
          var key = path[i];
          if (!has$1(obj, key))
            return false;
          obj = obj[key];
        }
        return !!length;
      }
      function identity(value) {
        return value;
      }
      function matcher(attrs) {
        attrs = extendOwn({}, attrs);
        return function(obj) {
          return isMatch(obj, attrs);
        };
      }
      function property(path) {
        path = toPath(path);
        return function(obj) {
          return deepGet(obj, path);
        };
      }
      function optimizeCb(func, context, argCount) {
        if (context === void 0)
          return func;
        switch (argCount == null ? 3 : argCount) {
          case 1:
            return function(value) {
              return func.call(context, value);
            };
          case 3:
            return function(value, index, collection) {
              return func.call(context, value, index, collection);
            };
          case 4:
            return function(accumulator, value, index, collection) {
              return func.call(context, accumulator, value, index, collection);
            };
        }
        return function() {
          return func.apply(context, arguments);
        };
      }
      function baseIteratee(value, context, argCount) {
        if (value == null)
          return identity;
        if (isFunction$1(value))
          return optimizeCb(value, context, argCount);
        if (isObject(value) && !isArray(value))
          return matcher(value);
        return property(value);
      }
      function iteratee(value, context) {
        return baseIteratee(value, context, Infinity);
      }
      _$1.iteratee = iteratee;
      function cb(value, context, argCount) {
        if (_$1.iteratee !== iteratee)
          return _$1.iteratee(value, context);
        return baseIteratee(value, context, argCount);
      }
      function mapObject(obj, iteratee2, context) {
        iteratee2 = cb(iteratee2, context);
        var _keys = keys(obj), length = _keys.length, results = {};
        for (var index = 0; index < length; index++) {
          var currentKey = _keys[index];
          results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
        }
        return results;
      }
      function noop() {
      }
      function propertyOf(obj) {
        if (obj == null)
          return noop;
        return function(path) {
          return get(obj, path);
        };
      }
      function times(n, iteratee2, context) {
        var accum = Array(Math.max(0, n));
        iteratee2 = optimizeCb(iteratee2, context, 1);
        for (var i = 0; i < n; i++)
          accum[i] = iteratee2(i);
        return accum;
      }
      function random(min2, max2) {
        if (max2 == null) {
          max2 = min2;
          min2 = 0;
        }
        return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
      }
      var now = Date.now || function() {
        return new Date().getTime();
      };
      function createEscaper(map2) {
        var escaper = function(match) {
          return map2[match];
        };
        var source = "(?:" + keys(map2).join("|") + ")";
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, "g");
        return function(string) {
          string = string == null ? "" : "" + string;
          return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
      }
      var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      var _escape = createEscaper(escapeMap);
      var unescapeMap = invert(escapeMap);
      var _unescape = createEscaper(unescapeMap);
      var templateSettings = _$1.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var noMatch = /(.)^/;
      var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
      function escapeChar(match) {
        return "\\" + escapes[match];
      }
      var bareIdentifier = /^\s*(\w|\$)+\s*$/;
      function template(text, settings, oldSettings) {
        if (!settings && oldSettings)
          settings = oldSettings;
        settings = defaults({}, settings, _$1.templateSettings);
        var matcher2 = RegExp([
          (settings.escape || noMatch).source,
          (settings.interpolate || noMatch).source,
          (settings.evaluate || noMatch).source
        ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
          source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
          index = offset + match.length;
          if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
          } else if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
          } else if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
          }
          return match;
        });
        source += "';\n";
        var argument = settings.variable;
        if (argument) {
          if (!bareIdentifier.test(argument))
            throw new Error(
              "variable is not a bare identifier: " + argument
            );
        } else {
          source = "with(obj||{}){\n" + source + "}\n";
          argument = "obj";
        }
        source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        var render;
        try {
          render = new Function(argument, "_", source);
        } catch (e) {
          e.source = source;
          throw e;
        }
        var template2 = function(data) {
          return render.call(this, data, _$1);
        };
        template2.source = "function(" + argument + "){\n" + source + "}";
        return template2;
      }
      function result(obj, path, fallback) {
        path = toPath(path);
        var length = path.length;
        if (!length) {
          return isFunction$1(fallback) ? fallback.call(obj) : fallback;
        }
        for (var i = 0; i < length; i++) {
          var prop = obj == null ? void 0 : obj[path[i]];
          if (prop === void 0) {
            prop = fallback;
            i = length;
          }
          obj = isFunction$1(prop) ? prop.call(obj) : prop;
        }
        return obj;
      }
      var idCounter = 0;
      function uniqueId(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
      }
      function chain(obj) {
        var instance = _$1(obj);
        instance._chain = true;
        return instance;
      }
      function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc))
          return sourceFunc.apply(context, args);
        var self2 = baseCreate(sourceFunc.prototype);
        var result2 = sourceFunc.apply(self2, args);
        if (isObject(result2))
          return result2;
        return self2;
      }
      var partial = restArguments(function(func, boundArgs) {
        var placeholder = partial.placeholder;
        var bound = function() {
          var position = 0, length = boundArgs.length;
          var args = Array(length);
          for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
          }
          while (position < arguments.length)
            args.push(arguments[position++]);
          return executeBound(func, bound, this, this, args);
        };
        return bound;
      });
      partial.placeholder = _$1;
      var bind = restArguments(function(func, context, args) {
        if (!isFunction$1(func))
          throw new TypeError("Bind must be called on a function");
        var bound = restArguments(function(callArgs) {
          return executeBound(func, bound, context, this, args.concat(callArgs));
        });
        return bound;
      });
      var isArrayLike = createSizePropertyCheck(getLength);
      function flatten$1(input, depth, strict, output) {
        output = output || [];
        if (!depth && depth !== 0) {
          depth = Infinity;
        } else if (depth <= 0) {
          return output.concat(input);
        }
        var idx = output.length;
        for (var i = 0, length = getLength(input); i < length; i++) {
          var value = input[i];
          if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
            if (depth > 1) {
              flatten$1(value, depth - 1, strict, output);
              idx = output.length;
            } else {
              var j = 0, len = value.length;
              while (j < len)
                output[idx++] = value[j++];
            }
          } else if (!strict) {
            output[idx++] = value;
          }
        }
        return output;
      }
      var bindAll = restArguments(function(obj, keys2) {
        keys2 = flatten$1(keys2, false, false);
        var index = keys2.length;
        if (index < 1)
          throw new Error("bindAll must be passed function names");
        while (index--) {
          var key = keys2[index];
          obj[key] = bind(obj[key], obj);
        }
        return obj;
      });
      function memoize(func, hasher) {
        var memoize2 = function(key) {
          var cache = memoize2.cache;
          var address = "" + (hasher ? hasher.apply(this, arguments) : key);
          if (!has$1(cache, address))
            cache[address] = func.apply(this, arguments);
          return cache[address];
        };
        memoize2.cache = {};
        return memoize2;
      }
      var delay = restArguments(function(func, wait, args) {
        return setTimeout(function() {
          return func.apply(null, args);
        }, wait);
      });
      var defer = partial(delay, _$1, 1);
      function throttle(func, wait, options) {
        var timeout, context, args, result2;
        var previous = 0;
        if (!options)
          options = {};
        var later = function() {
          previous = options.leading === false ? 0 : now();
          timeout = null;
          result2 = func.apply(context, args);
          if (!timeout)
            context = args = null;
        };
        var throttled = function() {
          var _now = now();
          if (!previous && options.leading === false)
            previous = _now;
          var remaining = wait - (_now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = _now;
            result2 = func.apply(context, args);
            if (!timeout)
              context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result2;
        };
        throttled.cancel = function() {
          clearTimeout(timeout);
          previous = 0;
          timeout = context = args = null;
        };
        return throttled;
      }
      function debounce(func, wait, immediate) {
        var timeout, previous, args, result2, context;
        var later = function() {
          var passed = now() - previous;
          if (wait > passed) {
            timeout = setTimeout(later, wait - passed);
          } else {
            timeout = null;
            if (!immediate)
              result2 = func.apply(context, args);
            if (!timeout)
              args = context = null;
          }
        };
        var debounced = restArguments(function(_args) {
          context = this;
          args = _args;
          previous = now();
          if (!timeout) {
            timeout = setTimeout(later, wait);
            if (immediate)
              result2 = func.apply(context, args);
          }
          return result2;
        });
        debounced.cancel = function() {
          clearTimeout(timeout);
          timeout = args = context = null;
        };
        return debounced;
      }
      function wrap(func, wrapper) {
        return partial(wrapper, func);
      }
      function negate(predicate) {
        return function() {
          return !predicate.apply(this, arguments);
        };
      }
      function compose() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
          var i = start;
          var result2 = args[start].apply(this, arguments);
          while (i--)
            result2 = args[i].call(this, result2);
          return result2;
        };
      }
      function after(times2, func) {
        return function() {
          if (--times2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function before(times2, func) {
        var memo;
        return function() {
          if (--times2 > 0) {
            memo = func.apply(this, arguments);
          }
          if (times2 <= 1)
            func = null;
          return memo;
        };
      }
      var once = partial(before, 2);
      function findKey(obj, predicate, context) {
        predicate = cb(predicate, context);
        var _keys = keys(obj), key;
        for (var i = 0, length = _keys.length; i < length; i++) {
          key = _keys[i];
          if (predicate(obj[key], key, obj))
            return key;
        }
      }
      function createPredicateIndexFinder(dir) {
        return function(array, predicate, context) {
          predicate = cb(predicate, context);
          var length = getLength(array);
          var index = dir > 0 ? 0 : length - 1;
          for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array))
              return index;
          }
          return -1;
        };
      }
      var findIndex = createPredicateIndexFinder(1);
      var findLastIndex = createPredicateIndexFinder(-1);
      function sortedIndex(array, obj, iteratee2, context) {
        iteratee2 = cb(iteratee2, context, 1);
        var value = iteratee2(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          if (iteratee2(array[mid]) < value)
            low = mid + 1;
          else
            high = mid;
        }
        return low;
      }
      function createIndexFinder(dir, predicateFind, sortedIndex2) {
        return function(array, item, idx) {
          var i = 0, length = getLength(array);
          if (typeof idx == "number") {
            if (dir > 0) {
              i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
              length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
          } else if (sortedIndex2 && idx && length) {
            idx = sortedIndex2(array, item);
            return array[idx] === item ? idx : -1;
          }
          if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), isNaN$1);
            return idx >= 0 ? idx + i : -1;
          }
          for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item)
              return idx;
          }
          return -1;
        };
      }
      var indexOf = createIndexFinder(1, findIndex, sortedIndex);
      var lastIndexOf = createIndexFinder(-1, findLastIndex);
      function find(obj, predicate, context) {
        var keyFinder = isArrayLike(obj) ? findIndex : findKey;
        var key = keyFinder(obj, predicate, context);
        if (key !== void 0 && key !== -1)
          return obj[key];
      }
      function findWhere(obj, attrs) {
        return find(obj, matcher(attrs));
      }
      function each(obj, iteratee2, context) {
        iteratee2 = optimizeCb(iteratee2, context);
        var i, length;
        if (isArrayLike(obj)) {
          for (i = 0, length = obj.length; i < length; i++) {
            iteratee2(obj[i], i, obj);
          }
        } else {
          var _keys = keys(obj);
          for (i = 0, length = _keys.length; i < length; i++) {
            iteratee2(obj[_keys[i]], _keys[i], obj);
          }
        }
        return obj;
      }
      function map(obj, iteratee2, context) {
        iteratee2 = cb(iteratee2, context);
        var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
        for (var index = 0; index < length; index++) {
          var currentKey = _keys ? _keys[index] : index;
          results[index] = iteratee2(obj[currentKey], currentKey, obj);
        }
        return results;
      }
      function createReduce(dir) {
        var reducer = function(obj, iteratee2, memo, initial2) {
          var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
          if (!initial2) {
            memo = obj[_keys ? _keys[index] : index];
            index += dir;
          }
          for (; index >= 0 && index < length; index += dir) {
            var currentKey = _keys ? _keys[index] : index;
            memo = iteratee2(memo, obj[currentKey], currentKey, obj);
          }
          return memo;
        };
        return function(obj, iteratee2, memo, context) {
          var initial2 = arguments.length >= 3;
          return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
        };
      }
      var reduce = createReduce(1);
      var reduceRight = createReduce(-1);
      function filter(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        each(obj, function(value, index, list) {
          if (predicate(value, index, list))
            results.push(value);
        });
        return results;
      }
      function reject(obj, predicate, context) {
        return filter(obj, negate(cb(predicate)), context);
      }
      function every(obj, predicate, context) {
        predicate = cb(predicate, context);
        var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = _keys ? _keys[index] : index;
          if (!predicate(obj[currentKey], currentKey, obj))
            return false;
        }
        return true;
      }
      function some(obj, predicate, context) {
        predicate = cb(predicate, context);
        var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = _keys ? _keys[index] : index;
          if (predicate(obj[currentKey], currentKey, obj))
            return true;
        }
        return false;
      }
      function contains(obj, item, fromIndex, guard) {
        if (!isArrayLike(obj))
          obj = values(obj);
        if (typeof fromIndex != "number" || guard)
          fromIndex = 0;
        return indexOf(obj, item, fromIndex) >= 0;
      }
      var invoke = restArguments(function(obj, path, args) {
        var contextPath, func;
        if (isFunction$1(path)) {
          func = path;
        } else {
          path = toPath(path);
          contextPath = path.slice(0, -1);
          path = path[path.length - 1];
        }
        return map(obj, function(context) {
          var method = func;
          if (!method) {
            if (contextPath && contextPath.length) {
              context = deepGet(context, contextPath);
            }
            if (context == null)
              return void 0;
            method = context[path];
          }
          return method == null ? method : method.apply(context, args);
        });
      });
      function pluck(obj, key) {
        return map(obj, property(key));
      }
      function where(obj, attrs) {
        return filter(obj, matcher(attrs));
      }
      function max(obj, iteratee2, context) {
        var result2 = -Infinity, lastComputed = -Infinity, value, computed;
        if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
          obj = isArrayLike(obj) ? obj : values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value != null && value > result2) {
              result2 = value;
            }
          }
        } else {
          iteratee2 = cb(iteratee2, context);
          each(obj, function(v, index, list) {
            computed = iteratee2(v, index, list);
            if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
              result2 = v;
              lastComputed = computed;
            }
          });
        }
        return result2;
      }
      function min(obj, iteratee2, context) {
        var result2 = Infinity, lastComputed = Infinity, value, computed;
        if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
          obj = isArrayLike(obj) ? obj : values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value != null && value < result2) {
              result2 = value;
            }
          }
        } else {
          iteratee2 = cb(iteratee2, context);
          each(obj, function(v, index, list) {
            computed = iteratee2(v, index, list);
            if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
              result2 = v;
              lastComputed = computed;
            }
          });
        }
        return result2;
      }
      var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
      function toArray(obj) {
        if (!obj)
          return [];
        if (isArray(obj))
          return slice.call(obj);
        if (isString(obj)) {
          return obj.match(reStrSymbol);
        }
        if (isArrayLike(obj))
          return map(obj, identity);
        return values(obj);
      }
      function sample(obj, n, guard) {
        if (n == null || guard) {
          if (!isArrayLike(obj))
            obj = values(obj);
          return obj[random(obj.length - 1)];
        }
        var sample2 = toArray(obj);
        var length = getLength(sample2);
        n = Math.max(Math.min(n, length), 0);
        var last2 = length - 1;
        for (var index = 0; index < n; index++) {
          var rand = random(index, last2);
          var temp = sample2[index];
          sample2[index] = sample2[rand];
          sample2[rand] = temp;
        }
        return sample2.slice(0, n);
      }
      function shuffle(obj) {
        return sample(obj, Infinity);
      }
      function sortBy(obj, iteratee2, context) {
        var index = 0;
        iteratee2 = cb(iteratee2, context);
        return pluck(map(obj, function(value, key, list) {
          return {
            value,
            index: index++,
            criteria: iteratee2(value, key, list)
          };
        }).sort(function(left, right) {
          var a = left.criteria;
          var b = right.criteria;
          if (a !== b) {
            if (a > b || a === void 0)
              return 1;
            if (a < b || b === void 0)
              return -1;
          }
          return left.index - right.index;
        }), "value");
      }
      function group(behavior, partition2) {
        return function(obj, iteratee2, context) {
          var result2 = partition2 ? [[], []] : {};
          iteratee2 = cb(iteratee2, context);
          each(obj, function(value, index) {
            var key = iteratee2(value, index, obj);
            behavior(result2, value, key);
          });
          return result2;
        };
      }
      var groupBy = group(function(result2, value, key) {
        if (has$1(result2, key))
          result2[key].push(value);
        else
          result2[key] = [value];
      });
      var indexBy = group(function(result2, value, key) {
        result2[key] = value;
      });
      var countBy = group(function(result2, value, key) {
        if (has$1(result2, key))
          result2[key]++;
        else
          result2[key] = 1;
      });
      var partition = group(function(result2, value, pass) {
        result2[pass ? 0 : 1].push(value);
      }, true);
      function size(obj) {
        if (obj == null)
          return 0;
        return isArrayLike(obj) ? obj.length : keys(obj).length;
      }
      function keyInObj(value, key, obj) {
        return key in obj;
      }
      var pick = restArguments(function(obj, keys2) {
        var result2 = {}, iteratee2 = keys2[0];
        if (obj == null)
          return result2;
        if (isFunction$1(iteratee2)) {
          if (keys2.length > 1)
            iteratee2 = optimizeCb(iteratee2, keys2[1]);
          keys2 = allKeys(obj);
        } else {
          iteratee2 = keyInObj;
          keys2 = flatten$1(keys2, false, false);
          obj = Object(obj);
        }
        for (var i = 0, length = keys2.length; i < length; i++) {
          var key = keys2[i];
          var value = obj[key];
          if (iteratee2(value, key, obj))
            result2[key] = value;
        }
        return result2;
      });
      var omit = restArguments(function(obj, keys2) {
        var iteratee2 = keys2[0], context;
        if (isFunction$1(iteratee2)) {
          iteratee2 = negate(iteratee2);
          if (keys2.length > 1)
            context = keys2[1];
        } else {
          keys2 = map(flatten$1(keys2, false, false), String);
          iteratee2 = function(value, key) {
            return !contains(keys2, key);
          };
        }
        return pick(obj, iteratee2, context);
      });
      function initial(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
      }
      function first(array, n, guard) {
        if (array == null || array.length < 1)
          return n == null || guard ? void 0 : [];
        if (n == null || guard)
          return array[0];
        return initial(array, array.length - n);
      }
      function rest(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
      }
      function last(array, n, guard) {
        if (array == null || array.length < 1)
          return n == null || guard ? void 0 : [];
        if (n == null || guard)
          return array[array.length - 1];
        return rest(array, Math.max(0, array.length - n));
      }
      function compact(array) {
        return filter(array, Boolean);
      }
      function flatten(array, depth) {
        return flatten$1(array, depth, false);
      }
      var difference = restArguments(function(array, rest2) {
        rest2 = flatten$1(rest2, true, true);
        return filter(array, function(value) {
          return !contains(rest2, value);
        });
      });
      var without = restArguments(function(array, otherArrays) {
        return difference(array, otherArrays);
      });
      function uniq(array, isSorted, iteratee2, context) {
        if (!isBoolean(isSorted)) {
          context = iteratee2;
          iteratee2 = isSorted;
          isSorted = false;
        }
        if (iteratee2 != null)
          iteratee2 = cb(iteratee2, context);
        var result2 = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
          var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
          if (isSorted && !iteratee2) {
            if (!i || seen !== computed)
              result2.push(value);
            seen = computed;
          } else if (iteratee2) {
            if (!contains(seen, computed)) {
              seen.push(computed);
              result2.push(value);
            }
          } else if (!contains(result2, value)) {
            result2.push(value);
          }
        }
        return result2;
      }
      var union = restArguments(function(arrays) {
        return uniq(flatten$1(arrays, true, true));
      });
      function intersection(array) {
        var result2 = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
          var item = array[i];
          if (contains(result2, item))
            continue;
          var j;
          for (j = 1; j < argsLength; j++) {
            if (!contains(arguments[j], item))
              break;
          }
          if (j === argsLength)
            result2.push(item);
        }
        return result2;
      }
      function unzip(array) {
        var length = array && max(array, getLength).length || 0;
        var result2 = Array(length);
        for (var index = 0; index < length; index++) {
          result2[index] = pluck(array, index);
        }
        return result2;
      }
      var zip = restArguments(unzip);
      function object(list, values2) {
        var result2 = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
          if (values2) {
            result2[list[i]] = values2[i];
          } else {
            result2[list[i][0]] = list[i][1];
          }
        }
        return result2;
      }
      function range(start, stop, step) {
        if (stop == null) {
          stop = start || 0;
          start = 0;
        }
        if (!step) {
          step = stop < start ? -1 : 1;
        }
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range2 = Array(length);
        for (var idx = 0; idx < length; idx++, start += step) {
          range2[idx] = start;
        }
        return range2;
      }
      function chunk(array, count) {
        if (count == null || count < 1)
          return [];
        var result2 = [];
        var i = 0, length = array.length;
        while (i < length) {
          result2.push(slice.call(array, i, i += count));
        }
        return result2;
      }
      function chainResult(instance, obj) {
        return instance._chain ? _$1(obj).chain() : obj;
      }
      function mixin(obj) {
        each(functions(obj), function(name) {
          var func = _$1[name] = obj[name];
          _$1.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return chainResult(this, func.apply(_$1, args));
          };
        });
        return _$1;
      }
      each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
        var method = ArrayProto[name];
        _$1.prototype[name] = function() {
          var obj = this._wrapped;
          if (obj != null) {
            method.apply(obj, arguments);
            if ((name === "shift" || name === "splice") && obj.length === 0) {
              delete obj[0];
            }
          }
          return chainResult(this, obj);
        };
      });
      each(["concat", "join", "slice"], function(name) {
        var method = ArrayProto[name];
        _$1.prototype[name] = function() {
          var obj = this._wrapped;
          if (obj != null)
            obj = method.apply(obj, arguments);
          return chainResult(this, obj);
        };
      });
      var allExports = {
        __proto__: null,
        VERSION,
        restArguments,
        isObject,
        isNull,
        isUndefined,
        isBoolean,
        isElement,
        isString,
        isNumber,
        isDate,
        isRegExp,
        isError,
        isSymbol,
        isArrayBuffer,
        isDataView: isDataView$1,
        isArray,
        isFunction: isFunction$1,
        isArguments: isArguments$1,
        isFinite: isFinite$1,
        isNaN: isNaN$1,
        isTypedArray: isTypedArray$1,
        isEmpty,
        isMatch,
        isEqual,
        isMap,
        isWeakMap,
        isSet,
        isWeakSet,
        keys,
        allKeys,
        values,
        pairs,
        invert,
        functions,
        methods: functions,
        extend,
        extendOwn,
        assign: extendOwn,
        defaults,
        create,
        clone,
        tap,
        get,
        has,
        mapObject,
        identity,
        constant,
        noop,
        toPath: toPath$1,
        property,
        propertyOf,
        matcher,
        matches: matcher,
        times,
        random,
        now,
        escape: _escape,
        unescape: _unescape,
        templateSettings,
        template,
        result,
        uniqueId,
        chain,
        iteratee,
        partial,
        bind,
        bindAll,
        memoize,
        delay,
        defer,
        throttle,
        debounce,
        wrap,
        negate,
        compose,
        after,
        before,
        once,
        findKey,
        findIndex,
        findLastIndex,
        sortedIndex,
        indexOf,
        lastIndexOf,
        find,
        detect: find,
        findWhere,
        each,
        forEach: each,
        map,
        collect: map,
        reduce,
        foldl: reduce,
        inject: reduce,
        reduceRight,
        foldr: reduceRight,
        filter,
        select: filter,
        reject,
        every,
        all: every,
        some,
        any: some,
        contains,
        includes: contains,
        include: contains,
        invoke,
        pluck,
        where,
        max,
        min,
        shuffle,
        sample,
        sortBy,
        groupBy,
        indexBy,
        countBy,
        partition,
        toArray,
        size,
        pick,
        omit,
        first,
        head: first,
        take: first,
        initial,
        last,
        rest,
        tail: rest,
        drop: rest,
        compact,
        flatten,
        without,
        uniq,
        unique: uniq,
        union,
        intersection,
        difference,
        unzip,
        transpose: unzip,
        zip,
        object,
        range,
        chunk,
        mixin,
        "default": _$1
      };
      var _ = mixin(allExports);
      _._ = _;
      return _;
    });
  }
});

// node_modules/@redis/client/dist/lib/commands/APPEND.js
var require_APPEND = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/APPEND.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["APPEND", key, value];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BITCOUNT.js
var require_BITCOUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BITCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, range) {
      const args = ["BITCOUNT", key];
      if (range) {
        args.push(range.start.toString(), range.end.toString());
        if (range.mode) {
          args.push(range.mode);
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js
var require_BITFIELD_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, operations) {
      const args = ["BITFIELD_RO", key];
      for (const operation of operations) {
        args.push("GET", operation.encoding, operation.offset.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BITFIELD.js
var require_BITFIELD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BITFIELD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, operations) {
      const args = ["BITFIELD", key];
      for (const options of operations) {
        switch (options.operation) {
          case "GET":
            args.push("GET", options.encoding, options.offset.toString());
            break;
          case "SET":
            args.push("SET", options.encoding, options.offset.toString(), options.value.toString());
            break;
          case "INCRBY":
            args.push("INCRBY", options.encoding, options.offset.toString(), options.increment.toString());
            break;
          case "OVERFLOW":
            args.push("OVERFLOW", options.behavior);
            break;
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/generic-transformers.js
var require_generic_transformers = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/generic-transformers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRangeReply = exports.pushSlotRangesArguments = exports.pushSortArguments = exports.transformFunctionListItemReply = exports.RedisFunctionFlags = exports.transformCommandReply = exports.CommandCategories = exports.CommandFlags = exports.pushOptionalVerdictArgument = exports.pushVerdictArgument = exports.pushVerdictNumberArguments = exports.pushVerdictArguments = exports.pushEvalArguments = exports.evalFirstKeyIndex = exports.transformPXAT = exports.transformEXAT = exports.transformGeoMembersWithReply = exports.GeoReplyWith = exports.pushGeoRadiusStoreArguments = exports.pushGeoRadiusArguments = exports.pushGeoSearchArguments = exports.pushGeoCountArgument = exports.transformLMPopArguments = exports.transformZMPopArguments = exports.transformSortedSetWithScoresReply = exports.transformSortedSetMemberReply = exports.transformSortedSetMemberNullReply = exports.transformStreamsMessagesReply = exports.transformStreamMessagesReply = exports.transformTuplesReply = exports.transformStringNumberInfinityArgument = exports.transformNumberInfinityArgument = exports.transformNumberInfinityNullArrayReply = exports.transformNumberInfinityNullReply = exports.transformNumberInfinityReply = exports.pushScanArguments = exports.transformBooleanArrayReply = exports.transformBooleanReply = void 0;
    function transformBooleanReply(reply) {
      return reply === 1;
    }
    exports.transformBooleanReply = transformBooleanReply;
    function transformBooleanArrayReply(reply) {
      return reply.map(transformBooleanReply);
    }
    exports.transformBooleanArrayReply = transformBooleanArrayReply;
    function pushScanArguments(args, cursor, options) {
      args.push(cursor.toString());
      if (options == null ? void 0 : options.MATCH) {
        args.push("MATCH", options.MATCH);
      }
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.pushScanArguments = pushScanArguments;
    function transformNumberInfinityReply(reply) {
      switch (reply.toString()) {
        case "+inf":
          return Infinity;
        case "-inf":
          return -Infinity;
        default:
          return Number(reply);
      }
    }
    exports.transformNumberInfinityReply = transformNumberInfinityReply;
    function transformNumberInfinityNullReply(reply) {
      if (reply === null)
        return null;
      return transformNumberInfinityReply(reply);
    }
    exports.transformNumberInfinityNullReply = transformNumberInfinityNullReply;
    function transformNumberInfinityNullArrayReply(reply) {
      return reply.map(transformNumberInfinityNullReply);
    }
    exports.transformNumberInfinityNullArrayReply = transformNumberInfinityNullArrayReply;
    function transformNumberInfinityArgument(num) {
      switch (num) {
        case Infinity:
          return "+inf";
        case -Infinity:
          return "-inf";
        default:
          return num.toString();
      }
    }
    exports.transformNumberInfinityArgument = transformNumberInfinityArgument;
    function transformStringNumberInfinityArgument(num) {
      if (typeof num !== "number")
        return num;
      return transformNumberInfinityArgument(num);
    }
    exports.transformStringNumberInfinityArgument = transformStringNumberInfinityArgument;
    function transformTuplesReply(reply) {
      const message = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < reply.length; i += 2) {
        message[reply[i].toString()] = reply[i + 1];
      }
      return message;
    }
    exports.transformTuplesReply = transformTuplesReply;
    function transformStreamMessagesReply(reply) {
      const messages = [];
      for (const [id, message] of reply) {
        messages.push({
          id,
          message: transformTuplesReply(message)
        });
      }
      return messages;
    }
    exports.transformStreamMessagesReply = transformStreamMessagesReply;
    function transformStreamsMessagesReply(reply) {
      if (reply === null)
        return null;
      return reply.map(([name, rawMessages]) => ({
        name,
        messages: transformStreamMessagesReply(rawMessages)
      }));
    }
    exports.transformStreamsMessagesReply = transformStreamsMessagesReply;
    function transformSortedSetMemberNullReply(reply) {
      if (!reply.length)
        return null;
      return transformSortedSetMemberReply(reply);
    }
    exports.transformSortedSetMemberNullReply = transformSortedSetMemberNullReply;
    function transformSortedSetMemberReply(reply) {
      return {
        value: reply[0],
        score: transformNumberInfinityReply(reply[1])
      };
    }
    exports.transformSortedSetMemberReply = transformSortedSetMemberReply;
    function transformSortedSetWithScoresReply(reply) {
      const members = [];
      for (let i = 0; i < reply.length; i += 2) {
        members.push({
          value: reply[i],
          score: transformNumberInfinityReply(reply[i + 1])
        });
      }
      return members;
    }
    exports.transformSortedSetWithScoresReply = transformSortedSetWithScoresReply;
    function transformZMPopArguments(args, keys, side, options) {
      pushVerdictArgument(args, keys);
      args.push(side);
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformZMPopArguments = transformZMPopArguments;
    function transformLMPopArguments(args, keys, side, options) {
      pushVerdictArgument(args, keys);
      args.push(side);
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformLMPopArguments = transformLMPopArguments;
    function pushGeoCountArgument(args, count) {
      if (typeof count === "number") {
        args.push("COUNT", count.toString());
      } else if (count) {
        args.push("COUNT", count.value.toString());
        if (count.ANY) {
          args.push("ANY");
        }
      }
      return args;
    }
    exports.pushGeoCountArgument = pushGeoCountArgument;
    function pushGeoSearchArguments(args, key, from, by, options) {
      args.push(key);
      if (typeof from === "string") {
        args.push("FROMMEMBER", from);
      } else {
        args.push("FROMLONLAT", from.longitude.toString(), from.latitude.toString());
      }
      if ("radius" in by) {
        args.push("BYRADIUS", by.radius.toString());
      } else {
        args.push("BYBOX", by.width.toString(), by.height.toString());
      }
      args.push(by.unit);
      if (options == null ? void 0 : options.SORT) {
        args.push(options.SORT);
      }
      pushGeoCountArgument(args, options == null ? void 0 : options.COUNT);
      return args;
    }
    exports.pushGeoSearchArguments = pushGeoSearchArguments;
    function pushGeoRadiusArguments(args, key, from, radius, unit, options) {
      args.push(key);
      if (typeof from === "string") {
        args.push(from);
      } else {
        args.push(from.longitude.toString(), from.latitude.toString());
      }
      args.push(radius.toString(), unit);
      if (options == null ? void 0 : options.SORT) {
        args.push(options.SORT);
      }
      pushGeoCountArgument(args, options == null ? void 0 : options.COUNT);
      return args;
    }
    exports.pushGeoRadiusArguments = pushGeoRadiusArguments;
    function pushGeoRadiusStoreArguments(args, key, from, radius, unit, destination, options) {
      pushGeoRadiusArguments(args, key, from, radius, unit, options);
      if (options == null ? void 0 : options.STOREDIST) {
        args.push("STOREDIST", destination);
      } else {
        args.push("STORE", destination);
      }
      return args;
    }
    exports.pushGeoRadiusStoreArguments = pushGeoRadiusStoreArguments;
    var GeoReplyWith;
    (function(GeoReplyWith2) {
      GeoReplyWith2["DISTANCE"] = "WITHDIST";
      GeoReplyWith2["HASH"] = "WITHHASH";
      GeoReplyWith2["COORDINATES"] = "WITHCOORD";
    })(GeoReplyWith = exports.GeoReplyWith || (exports.GeoReplyWith = {}));
    function transformGeoMembersWithReply(reply, replyWith) {
      const replyWithSet = new Set(replyWith);
      let index = 0;
      const distanceIndex = replyWithSet.has(GeoReplyWith.DISTANCE) && ++index, hashIndex = replyWithSet.has(GeoReplyWith.HASH) && ++index, coordinatesIndex = replyWithSet.has(GeoReplyWith.COORDINATES) && ++index;
      return reply.map((member) => {
        const transformedMember = {
          member: member[0]
        };
        if (distanceIndex) {
          transformedMember.distance = member[distanceIndex];
        }
        if (hashIndex) {
          transformedMember.hash = member[hashIndex];
        }
        if (coordinatesIndex) {
          const [longitude, latitude] = member[coordinatesIndex];
          transformedMember.coordinates = {
            longitude,
            latitude
          };
        }
        return transformedMember;
      });
    }
    exports.transformGeoMembersWithReply = transformGeoMembersWithReply;
    function transformEXAT(EXAT) {
      return (typeof EXAT === "number" ? EXAT : Math.floor(EXAT.getTime() / 1e3)).toString();
    }
    exports.transformEXAT = transformEXAT;
    function transformPXAT(PXAT) {
      return (typeof PXAT === "number" ? PXAT : PXAT.getTime()).toString();
    }
    exports.transformPXAT = transformPXAT;
    function evalFirstKeyIndex(options) {
      var _a;
      return (_a = options == null ? void 0 : options.keys) == null ? void 0 : _a[0];
    }
    exports.evalFirstKeyIndex = evalFirstKeyIndex;
    function pushEvalArguments(args, options) {
      if (options == null ? void 0 : options.keys) {
        args.push(options.keys.length.toString(), ...options.keys);
      } else {
        args.push("0");
      }
      if (options == null ? void 0 : options.arguments) {
        args.push(...options.arguments);
      }
      return args;
    }
    exports.pushEvalArguments = pushEvalArguments;
    function pushVerdictArguments(args, value) {
      if (Array.isArray(value)) {
        args = args.concat(value);
      } else {
        args.push(value);
      }
      return args;
    }
    exports.pushVerdictArguments = pushVerdictArguments;
    function pushVerdictNumberArguments(args, value) {
      if (Array.isArray(value)) {
        for (const item of value) {
          args.push(item.toString());
        }
      } else {
        args.push(value.toString());
      }
      return args;
    }
    exports.pushVerdictNumberArguments = pushVerdictNumberArguments;
    function pushVerdictArgument(args, value) {
      if (Array.isArray(value)) {
        args.push(value.length.toString(), ...value);
      } else {
        args.push("1", value);
      }
      return args;
    }
    exports.pushVerdictArgument = pushVerdictArgument;
    function pushOptionalVerdictArgument(args, name, value) {
      if (value === void 0)
        return args;
      args.push(name);
      return pushVerdictArgument(args, value);
    }
    exports.pushOptionalVerdictArgument = pushOptionalVerdictArgument;
    var CommandFlags;
    (function(CommandFlags2) {
      CommandFlags2["WRITE"] = "write";
      CommandFlags2["READONLY"] = "readonly";
      CommandFlags2["DENYOOM"] = "denyoom";
      CommandFlags2["ADMIN"] = "admin";
      CommandFlags2["PUBSUB"] = "pubsub";
      CommandFlags2["NOSCRIPT"] = "noscript";
      CommandFlags2["RANDOM"] = "random";
      CommandFlags2["SORT_FOR_SCRIPT"] = "sort_for_script";
      CommandFlags2["LOADING"] = "loading";
      CommandFlags2["STALE"] = "stale";
      CommandFlags2["SKIP_MONITOR"] = "skip_monitor";
      CommandFlags2["ASKING"] = "asking";
      CommandFlags2["FAST"] = "fast";
      CommandFlags2["MOVABLEKEYS"] = "movablekeys";
    })(CommandFlags = exports.CommandFlags || (exports.CommandFlags = {}));
    var CommandCategories;
    (function(CommandCategories2) {
      CommandCategories2["KEYSPACE"] = "@keyspace";
      CommandCategories2["READ"] = "@read";
      CommandCategories2["WRITE"] = "@write";
      CommandCategories2["SET"] = "@set";
      CommandCategories2["SORTEDSET"] = "@sortedset";
      CommandCategories2["LIST"] = "@list";
      CommandCategories2["HASH"] = "@hash";
      CommandCategories2["STRING"] = "@string";
      CommandCategories2["BITMAP"] = "@bitmap";
      CommandCategories2["HYPERLOGLOG"] = "@hyperloglog";
      CommandCategories2["GEO"] = "@geo";
      CommandCategories2["STREAM"] = "@stream";
      CommandCategories2["PUBSUB"] = "@pubsub";
      CommandCategories2["ADMIN"] = "@admin";
      CommandCategories2["FAST"] = "@fast";
      CommandCategories2["SLOW"] = "@slow";
      CommandCategories2["BLOCKING"] = "@blocking";
      CommandCategories2["DANGEROUS"] = "@dangerous";
      CommandCategories2["CONNECTION"] = "@connection";
      CommandCategories2["TRANSACTION"] = "@transaction";
      CommandCategories2["SCRIPTING"] = "@scripting";
    })(CommandCategories = exports.CommandCategories || (exports.CommandCategories = {}));
    function transformCommandReply([name, arity, flags, firstKeyIndex, lastKeyIndex, step, categories]) {
      return {
        name,
        arity,
        flags: new Set(flags),
        firstKeyIndex,
        lastKeyIndex,
        step,
        categories: new Set(categories)
      };
    }
    exports.transformCommandReply = transformCommandReply;
    var RedisFunctionFlags;
    (function(RedisFunctionFlags2) {
      RedisFunctionFlags2["NO_WRITES"] = "no-writes";
      RedisFunctionFlags2["ALLOW_OOM"] = "allow-oom";
      RedisFunctionFlags2["ALLOW_STALE"] = "allow-stale";
      RedisFunctionFlags2["NO_CLUSTER"] = "no-cluster";
    })(RedisFunctionFlags = exports.RedisFunctionFlags || (exports.RedisFunctionFlags = {}));
    function transformFunctionListItemReply(reply) {
      return {
        libraryName: reply[1],
        engine: reply[3],
        functions: reply[5].map((fn) => ({
          name: fn[1],
          description: fn[3],
          flags: fn[5]
        }))
      };
    }
    exports.transformFunctionListItemReply = transformFunctionListItemReply;
    function pushSortArguments(args, options) {
      if (options == null ? void 0 : options.BY) {
        args.push("BY", options.BY);
      }
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      if (options == null ? void 0 : options.GET) {
        for (const pattern of typeof options.GET === "string" ? [options.GET] : options.GET) {
          args.push("GET", pattern);
        }
      }
      if (options == null ? void 0 : options.DIRECTION) {
        args.push(options.DIRECTION);
      }
      if (options == null ? void 0 : options.ALPHA) {
        args.push("ALPHA");
      }
      return args;
    }
    exports.pushSortArguments = pushSortArguments;
    function pushSlotRangeArguments(args, range) {
      args.push(range.start.toString(), range.end.toString());
    }
    function pushSlotRangesArguments(args, ranges) {
      if (Array.isArray(ranges)) {
        for (const range of ranges) {
          pushSlotRangeArguments(args, range);
        }
      } else {
        pushSlotRangeArguments(args, ranges);
      }
      return args;
    }
    exports.pushSlotRangesArguments = pushSlotRangesArguments;
    function transformRangeReply([start, end]) {
      return {
        start,
        end
      };
    }
    exports.transformRangeReply = transformRangeReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/BITOP.js
var require_BITOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BITOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(operation, destKey, key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["BITOP", operation, destKey], key);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BITPOS.js
var require_BITPOS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BITPOS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, bit, start, end, mode) {
      const args = ["BITPOS", key, bit.toString()];
      if (typeof start === "number") {
        args.push(start.toString());
      }
      if (typeof end === "number") {
        args.push(end.toString());
      }
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BLMOVE.js
var require_BLMOVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BLMOVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, sourceDirection, destinationDirection, timeout) {
      return [
        "BLMOVE",
        source,
        destination,
        sourceDirection,
        destinationDirection,
        timeout.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LMPOP.js
var require_LMPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LMPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(keys, side, options) {
      return (0, generic_transformers_1.transformLMPopArguments)(["LMPOP"], keys, side, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BLMPOP.js
var require_BLMPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BLMPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 3;
    function transformArguments(timeout, keys, side, options) {
      return (0, generic_transformers_1.transformLMPopArguments)(["BLMPOP", timeout.toString()], keys, side, options);
    }
    exports.transformArguments = transformArguments;
    var LMPOP_1 = require_LMPOP();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return LMPOP_1.transformReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/BLPOP.js
var require_BLPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BLPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(keys, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BLPOP"], keys);
      args.push(timeout.toString());
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply === null)
        return null;
      return {
        key: reply[0],
        element: reply[1]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/BRPOP.js
var require_BRPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BRPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BRPOP"], key);
      args.push(timeout.toString());
      return args;
    }
    exports.transformArguments = transformArguments;
    var BLPOP_1 = require_BLPOP();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return BLPOP_1.transformReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js
var require_BRPOPLPUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, timeout) {
      return ["BRPOPLPUSH", source, destination, timeout.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZMPOP.js
var require_ZMPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZMPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(keys, side, options) {
      return (0, generic_transformers_1.transformZMPopArguments)(["ZMPOP"], keys, side, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply === null ? null : {
        key: reply[0],
        elements: reply[1].map(generic_transformers_1.transformSortedSetMemberReply)
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/BZMPOP.js
var require_BZMPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BZMPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 3;
    function transformArguments(timeout, keys, side, options) {
      return (0, generic_transformers_1.transformZMPopArguments)(["BZMPOP", timeout.toString()], keys, side, options);
    }
    exports.transformArguments = transformArguments;
    var ZMPOP_1 = require_ZMPOP();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return ZMPOP_1.transformReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js
var require_BZPOPMAX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BZPOPMAX"], key);
      args.push(timeout.toString());
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (!reply)
        return null;
      return {
        key: reply[0],
        value: reply[1],
        score: (0, generic_transformers_1.transformNumberInfinityReply)(reply[2])
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js
var require_BZPOPMIN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BZPOPMIN"], key);
      args.push(timeout.toString());
      return args;
    }
    exports.transformArguments = transformArguments;
    var BZPOPMAX_1 = require_BZPOPMAX();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return BZPOPMAX_1.transformReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/COPY.js
var require_COPY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COPY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, options) {
      const args = ["COPY", source, destination];
      if (options == null ? void 0 : options.destinationDb) {
        args.push("DB", options.destinationDb.toString());
      }
      if (options == null ? void 0 : options.replace) {
        args.push("REPLACE");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/DECR.js
var require_DECR = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DECR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["DECR", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/DECRBY.js
var require_DECRBY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DECRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, decrement) {
      return ["DECRBY", key, decrement.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/DEL.js
var require_DEL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["DEL"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/DUMP.js
var require_DUMP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["DUMP", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EVAL_RO.js
var require_EVAL_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EVAL_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports.IS_READ_ONLY = true;
    function transformArguments(script, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVAL_RO", script], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EVAL.js
var require_EVAL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EVAL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(script, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVAL", script], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js
var require_EVALSHA_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports.IS_READ_ONLY = true;
    function transformArguments(sha1, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVALSHA_RO", sha1], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EVALSHA.js
var require_EVALSHA = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EVALSHA.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(sha1, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVALSHA", sha1], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EXISTS.js
var require_EXISTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["EXISTS"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/EXPIRE.js
var require_EXPIRE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EXPIRE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, seconds, mode) {
      const args = ["EXPIRE", key, seconds.toString()];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/EXPIREAT.js
var require_EXPIREAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EXPIREAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timestamp, mode) {
      const args = [
        "EXPIREAT",
        key,
        (0, generic_transformers_1.transformEXAT)(timestamp)
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js
var require_EXPIRETIME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["EXPIRETIME", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FCALL_RO.js
var require_FCALL_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FCALL_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports.IS_READ_ONLY = true;
    function transformArguments(fn, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["FCALL_RO", fn], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FCALL.js
var require_FCALL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FCALL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(fn, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["FCALL", fn], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOADD.js
var require_GEOADD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, toAdd, options) {
      const args = ["GEOADD", key];
      if (options == null ? void 0 : options.NX) {
        args.push("NX");
      } else if (options == null ? void 0 : options.XX) {
        args.push("XX");
      }
      if (options == null ? void 0 : options.CH) {
        args.push("CH");
      }
      for (const { longitude, latitude, member } of Array.isArray(toAdd) ? toAdd : [toAdd]) {
        args.push(longitude.toString(), latitude.toString(), member);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEODIST.js
var require_GEODIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEODIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member1, member2, unit) {
      const args = ["GEODIST", key, member1, member2];
      if (unit) {
        args.push(unit);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply === null ? null : Number(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOHASH.js
var require_GEOHASH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOHASH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["GEOHASH", key], member);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOPOS.js
var require_GEOPOS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOPOS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["GEOPOS", key], member);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((coordinates) => coordinates === null ? null : {
        longitude: coordinates[0],
        latitude: coordinates[1]
      });
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js
var require_GEORADIUS_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, coordinates, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUS_RO"], key, coordinates, radius, unit, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js
var require_GEORADIUS_RO_WITH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var GEORADIUS_RO_1 = require_GEORADIUS_RO();
    var GEORADIUS_RO_2 = require_GEORADIUS_RO();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_RO_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_RO_2.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, replyWith, options) {
      const args = (0, GEORADIUS_RO_1.transformArguments)(key, coordinates, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUS.js
var require_GEORADIUS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, coordinates, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUS"], key, coordinates, radius, unit, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js
var require_GEORADIUS_WITH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var GEORADIUS_1 = require_GEORADIUS();
    var GEORADIUS_2 = require_GEORADIUS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_2.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, replyWith, options) {
      const args = (0, GEORADIUS_1.transformArguments)(key, coordinates, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js
var require_GEORADIUSBYMEMBER_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUSBYMEMBER_RO"], key, member, radius, unit, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js
var require_GEORADIUSBYMEMBER_RO_WITH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var GEORADIUSBYMEMBER_RO_1 = require_GEORADIUSBYMEMBER_RO();
    var GEORADIUSBYMEMBER_RO_2 = require_GEORADIUSBYMEMBER_RO();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_RO_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_RO_2.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, replyWith, options) {
      const args = (0, GEORADIUSBYMEMBER_RO_1.transformArguments)(key, member, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js
var require_GEORADIUSBYMEMBER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUSBYMEMBER"], key, member, radius, unit, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js
var require_GEORADIUSBYMEMBER_WITH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var GEORADIUSBYMEMBER_1 = require_GEORADIUSBYMEMBER();
    var GEORADIUSBYMEMBER_2 = require_GEORADIUSBYMEMBER();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_2.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, replyWith, options) {
      const args = (0, GEORADIUSBYMEMBER_1.transformArguments)(key, member, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js
var require_GEORADIUSBYMEMBERSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEORADIUSBYMEMBER_1 = require_GEORADIUSBYMEMBER();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_1.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, destination, options) {
      return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(["GEORADIUSBYMEMBER"], key, member, radius, unit, destination, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js
var require_GEORADIUSSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEORADIUS_1 = require_GEORADIUS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_1.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, destination, options) {
      return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(["GEORADIUS"], key, coordinates, radius, unit, destination, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js
var require_GEOSEARCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, from, by, options) {
      return (0, generic_transformers_1.pushGeoSearchArguments)(["GEOSEARCH"], key, from, by, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js
var require_GEOSEARCH_WITH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var GEOSEARCH_1 = require_GEOSEARCH();
    var GEOSEARCH_2 = require_GEOSEARCH();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEOSEARCH_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEOSEARCH_2.IS_READ_ONLY;
    } });
    function transformArguments(key, from, by, replyWith, options) {
      const args = (0, GEOSEARCH_1.transformArguments)(key, from, by, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js
var require_GEOSEARCHSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEOSEARCH_1 = require_GEOSEARCH();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEOSEARCH_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEOSEARCH_1.IS_READ_ONLY;
    } });
    function transformArguments(destination, source, from, by, options) {
      const args = (0, generic_transformers_1.pushGeoSearchArguments)(["GEOSEARCHSTORE", destination], source, from, by, options);
      if (options == null ? void 0 : options.STOREDIST) {
        args.push("STOREDIST");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (typeof reply !== "number") {
        throw new TypeError(`https://github.com/redis/redis/issues/9261`);
      }
      return reply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/GET.js
var require_GET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["GET", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GETBIT.js
var require_GETBIT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GETBIT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, offset) {
      return ["GETBIT", key, offset.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GETDEL.js
var require_GETDEL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GETDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GETDEL", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GETEX.js
var require_GETEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GETEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, mode) {
      const args = ["GETEX", key];
      if ("EX" in mode) {
        args.push("EX", mode.EX.toString());
      } else if ("PX" in mode) {
        args.push("PX", mode.PX.toString());
      } else if ("EXAT" in mode) {
        args.push("EXAT", (0, generic_transformers_1.transformEXAT)(mode.EXAT));
      } else if ("PXAT" in mode) {
        args.push("PXAT", (0, generic_transformers_1.transformPXAT)(mode.PXAT));
      } else {
        args.push("PERSIST");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GETRANGE.js
var require_GETRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GETRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, start, end) {
      return ["GETRANGE", key, start.toString(), end.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/GETSET.js
var require_GETSET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/GETSET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["GETSET", key, value];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HDEL.js
var require_HDEL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return (0, generic_transformers_1.pushVerdictArguments)(["HDEL", key], field);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HEXISTS.js
var require_HEXISTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HEXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return ["HEXISTS", key, field];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/HGET.js
var require_HGET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, field) {
      return ["HGET", key, field];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HGETALL.js
var require_HGETALL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HGETALL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["HGETALL", key];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/HINCRBY.js
var require_HINCRBY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HINCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, increment) {
      return ["HINCRBY", key, field, increment.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js
var require_HINCRBYFLOAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, increment) {
      return ["HINCRBYFLOAT", key, field, increment.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HKEYS.js
var require_HKEYS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HKEYS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HKEYS", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HLEN.js
var require_HLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HLEN", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HMGET.js
var require_HMGET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HMGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, fields) {
      return (0, generic_transformers_1.pushVerdictArguments)(["HMGET", key], fields);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js
var require_HRANDFIELD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["HRANDFIELD", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js
var require_HRANDFIELD_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var HRANDFIELD_1 = require_HRANDFIELD();
    var HRANDFIELD_2 = require_HRANDFIELD();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return HRANDFIELD_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return HRANDFIELD_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, HRANDFIELD_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js
var require_HRANDFIELD_COUNT_WITHVALUES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var HRANDFIELD_COUNT_1 = require_HRANDFIELD_COUNT();
    var HRANDFIELD_COUNT_2 = require_HRANDFIELD_COUNT();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return HRANDFIELD_COUNT_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return HRANDFIELD_COUNT_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, HRANDFIELD_COUNT_1.transformArguments)(key, count),
        "WITHVALUES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/HSCAN.js
var require_HSCAN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HSCAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "HSCAN",
        key
      ], cursor, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply([cursor, rawTuples]) {
      const parsedTuples = [];
      for (let i = 0; i < rawTuples.length; i += 2) {
        parsedTuples.push({
          field: rawTuples[i],
          value: rawTuples[i + 1]
        });
      }
      return {
        cursor: Number(cursor),
        tuples: parsedTuples
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/HSET.js
var require_HSET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HSET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(...[key, value, fieldValue]) {
      const args = ["HSET", key];
      if (typeof value === "string" || typeof value === "number" || Buffer.isBuffer(value)) {
        args.push(convertValue(value), convertValue(fieldValue));
      } else if (value instanceof Map) {
        pushMap(args, value);
      } else if (Array.isArray(value)) {
        pushTuples(args, value);
      } else {
        pushObject(args, value);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function pushMap(args, map) {
      for (const [key, value] of map.entries()) {
        args.push(convertValue(key), convertValue(value));
      }
    }
    function pushTuples(args, tuples) {
      for (const tuple of tuples) {
        if (Array.isArray(tuple)) {
          pushTuples(args, tuple);
          continue;
        }
        args.push(convertValue(tuple));
      }
    }
    function pushObject(args, object) {
      for (const key of Object.keys(object)) {
        args.push(convertValue(key), convertValue(object[key]));
      }
    }
    function convertValue(value) {
      return typeof value === "number" ? value.toString() : value;
    }
  }
});

// node_modules/@redis/client/dist/lib/commands/HSETNX.js
var require_HSETNX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HSETNX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, value) {
      return ["HSETNX", key, field, value];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/HSTRLEN.js
var require_HSTRLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HSTRLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return ["HSTRLEN", key, field];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/HVALS.js
var require_HVALS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HVALS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HVALS", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/INCR.js
var require_INCR = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/INCR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["INCR", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/INCRBY.js
var require_INCRBY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/INCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment) {
      return ["INCRBY", key, increment.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js
var require_INCRBYFLOAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment) {
      return ["INCRBYFLOAT", key, increment.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LCS.js
var require_LCS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LCS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key1, key2) {
      return [
        "LCS",
        key1,
        key2
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js
var require_LCS_IDX_WITHMATCHLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("IDX", "WITHMATCHLEN");
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        matches: reply[1].map(([key1, key2, length]) => ({
          key1: (0, generic_transformers_1.transformRangeReply)(key1),
          key2: (0, generic_transformers_1.transformRangeReply)(key2),
          length
        })),
        length: reply[3]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/LCS_IDX.js
var require_LCS_IDX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LCS_IDX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("IDX");
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        matches: reply[1].map(([key1, key2]) => ({
          key1: (0, generic_transformers_1.transformRangeReply)(key1),
          key2: (0, generic_transformers_1.transformRangeReply)(key2)
        })),
        length: reply[3]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/LCS_LEN.js
var require_LCS_LEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LCS_LEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("LEN");
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LINDEX.js
var require_LINDEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LINDEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, index) {
      return ["LINDEX", key, index.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LINSERT.js
var require_LINSERT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LINSERT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, position, pivot, element) {
      return [
        "LINSERT",
        key,
        position,
        pivot,
        element
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LLEN.js
var require_LLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["LLEN", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LMOVE.js
var require_LMOVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LMOVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, sourceSide, destinationSide) {
      return [
        "LMOVE",
        source,
        destination,
        sourceSide,
        destinationSide
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js
var require_LPOP_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      return ["LPOP", key, count.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPOP.js
var require_LPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["LPOP", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPOS.js
var require_LPOS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPOS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, element, options) {
      const args = ["LPOS", key, element];
      if (typeof (options == null ? void 0 : options.RANK) === "number") {
        args.push("RANK", options.RANK.toString());
      }
      if (typeof (options == null ? void 0 : options.MAXLEN) === "number") {
        args.push("MAXLEN", options.MAXLEN.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js
var require_LPOS_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var LPOS_1 = require_LPOS();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LPOS_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LPOS_1.IS_READ_ONLY;
    } });
    function transformArguments(key, element, count, options) {
      const args = ["LPOS", key, element];
      if (typeof (options == null ? void 0 : options.RANK) === "number") {
        args.push("RANK", options.RANK.toString());
      }
      args.push("COUNT", count.toString());
      if (typeof (options == null ? void 0 : options.MAXLEN) === "number") {
        args.push("MAXLEN", options.MAXLEN.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPUSH.js
var require_LPUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, elements) {
      return (0, generic_transformers_1.pushVerdictArguments)(["LPUSH", key], elements);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LPUSHX.js
var require_LPUSHX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LPUSHX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["LPUSHX", key], element);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LRANGE.js
var require_LRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, start, stop) {
      return [
        "LRANGE",
        key,
        start.toString(),
        stop.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LREM.js
var require_LREM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LREM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count, element) {
      return [
        "LREM",
        key,
        count.toString(),
        element
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LSET.js
var require_LSET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LSET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, index, element) {
      return [
        "LSET",
        key,
        index.toString(),
        element
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LTRIM.js
var require_LTRIM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LTRIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, start, stop) {
      return [
        "LTRIM",
        key,
        start.toString(),
        stop.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MGET.js
var require_MGET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return ["MGET", ...keys];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MIGRATE.js
var require_MIGRATE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MIGRATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(host, port, key, destinationDb, timeout, options) {
      const args = ["MIGRATE", host, port.toString()], isKeyArray = Array.isArray(key);
      if (isKeyArray) {
        args.push("");
      } else {
        args.push(key);
      }
      args.push(destinationDb.toString(), timeout.toString());
      if (options == null ? void 0 : options.COPY) {
        args.push("COPY");
      }
      if (options == null ? void 0 : options.REPLACE) {
        args.push("REPLACE");
      }
      if (options == null ? void 0 : options.AUTH) {
        if (options.AUTH.username) {
          args.push("AUTH2", options.AUTH.username, options.AUTH.password);
        } else {
          args.push("AUTH", options.AUTH.password);
        }
      }
      if (isKeyArray) {
        args.push("KEYS", ...key);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MSET.js
var require_MSET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MSET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(toSet) {
      const args = ["MSET"];
      if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
      } else {
        for (const key of Object.keys(toSet)) {
          args.push(key, toSet[key]);
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MSETNX.js
var require_MSETNX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MSETNX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(toSet) {
      const args = ["MSETNX"];
      if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
      } else {
        for (const key of Object.keys(toSet)) {
          args.push(key, toSet[key]);
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js
var require_OBJECT_ENCODING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "ENCODING", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js
var require_OBJECT_FREQ = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "FREQ", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js
var require_OBJECT_IDLETIME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "IDLETIME", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js
var require_OBJECT_REFCOUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "REFCOUNT", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PERSIST.js
var require_PERSIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PERSIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["PERSIST", key];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/PEXPIRE.js
var require_PEXPIRE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PEXPIRE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, milliseconds, mode) {
      const args = ["PEXPIRE", key, milliseconds.toString()];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js
var require_PEXPIREAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, millisecondsTimestamp, mode) {
      const args = [
        "PEXPIREAT",
        key,
        (0, generic_transformers_1.transformPXAT)(millisecondsTimestamp)
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js
var require_PEXPIRETIME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["PEXPIRETIME", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PFADD.js
var require_PFADD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PFADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFADD", key], element);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/PFCOUNT.js
var require_PFCOUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PFCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFCOUNT"], key);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PFMERGE.js
var require_PFMERGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PFMERGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, source) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFMERGE", destination], source);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PSETEX.js
var require_PSETEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PSETEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, milliseconds, value) {
      return [
        "PSETEX",
        key,
        milliseconds.toString(),
        value
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PTTL.js
var require_PTTL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PTTL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["PTTL", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PUBLISH.js
var require_PUBLISH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PUBLISH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(channel, message) {
      return ["PUBLISH", channel, message];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RENAME.js
var require_RENAME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RENAME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, newKey) {
      return ["RENAME", key, newKey];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RENAMENX.js
var require_RENAMENX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RENAMENX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, newKey) {
      return ["RENAMENX", key, newKey];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js
var require_RPOP_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      return ["RPOP", key, count.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RPOP.js
var require_RPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["RPOP", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js
var require_RPOPLPUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination) {
      return ["RPOPLPUSH", source, destination];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RPUSH.js
var require_RPUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RPUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["RPUSH", key], element);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RPUSHX.js
var require_RPUSHX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RPUSHX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["RPUSHX", key], element);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SADD.js
var require_SADD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SADD", key], members);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCARD.js
var require_SCARD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCARD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SCARD", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SDIFF.js
var require_SDIFF = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SDIFF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SDIFF"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js
var require_SDIFFSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SDIFFSTORE", destination], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SET.js
var require_SET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      const args = [
        "SET",
        key,
        typeof value === "number" ? value.toString() : value
      ];
      if (options == null ? void 0 : options.EX) {
        args.push("EX", options.EX.toString());
      } else if (options == null ? void 0 : options.PX) {
        args.push("PX", options.PX.toString());
      } else if (options == null ? void 0 : options.EXAT) {
        args.push("EXAT", options.EXAT.toString());
      } else if (options == null ? void 0 : options.PXAT) {
        args.push("PXAT", options.PXAT.toString());
      } else if (options == null ? void 0 : options.KEEPTTL) {
        args.push("KEEPTTL");
      }
      if (options == null ? void 0 : options.NX) {
        args.push("NX");
      } else if (options == null ? void 0 : options.XX) {
        args.push("XX");
      }
      if (options == null ? void 0 : options.GET) {
        args.push("GET");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SETBIT.js
var require_SETBIT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SETBIT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, offset, value) {
      return ["SETBIT", key, offset.toString(), value.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SETEX.js
var require_SETEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SETEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, seconds, value) {
      return [
        "SETEX",
        key,
        seconds.toString(),
        value
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SETNX.js
var require_SETNX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SETNX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["SETNX", key, value];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/SETRANGE.js
var require_SETRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SETRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, offset, value) {
      return ["SETRANGE", key, offset.toString(), value];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SINTER.js
var require_SINTER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SINTER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SINTER"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SINTERCARD.js
var require_SINTERCARD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SINTERCARD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys, limit) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["SINTERCARD"], keys);
      if (limit) {
        args.push("LIMIT", limit.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js
var require_SINTERSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SINTERSTORE", destination], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SISMEMBER.js
var require_SISMEMBER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SISMEMBER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, member) {
      return ["SISMEMBER", key, member];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/SMEMBERS.js
var require_SMEMBERS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SMEMBERS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SMEMBERS", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js
var require_SMISMEMBER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return ["SMISMEMBER", key, ...members];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/SMOVE.js
var require_SMOVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SMOVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, member) {
      return ["SMOVE", source, destination, member];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/SORT_RO.js
var require_SORT_RO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SORT_RO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      return (0, generic_transformers_1.pushSortArguments)(["SORT_RO", key], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SORT.js
var require_SORT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SORT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      return (0, generic_transformers_1.pushSortArguments)(["SORT", key], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SORT_STORE.js
var require_SORT_STORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SORT_STORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var SORT_1 = require_SORT();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, options) {
      const args = (0, SORT_1.transformArguments)(source, options);
      args.push("STORE", destination);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SPOP.js
var require_SPOP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      const args = ["SPOP", key];
      if (typeof count === "number") {
        args.push(count.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js
var require_SRANDMEMBER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SRANDMEMBER", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js
var require_SRANDMEMBER_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var SRANDMEMBER_1 = require_SRANDMEMBER();
    var SRANDMEMBER_2 = require_SRANDMEMBER();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return SRANDMEMBER_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, SRANDMEMBER_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SREM.js
var require_SREM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SREM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SREM", key], members);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SSCAN.js
var require_SSCAN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SSCAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "SSCAN",
        key
      ], cursor, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply([cursor, members]) {
      return {
        cursor: Number(cursor),
        members
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/STRLEN.js
var require_STRLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/STRLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["STRLEN", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SUNION.js
var require_SUNION = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SUNION.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SUNION"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js
var require_SUNIONSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SUNIONSTORE", destination], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/TOUCH.js
var require_TOUCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/TOUCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOUCH"], key);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/TTL.js
var require_TTL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/TTL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TTL", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/TYPE.js
var require_TYPE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/TYPE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TYPE", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/UNLINK.js
var require_UNLINK = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/UNLINK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["UNLINK"], key);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/WATCH.js
var require_WATCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/WATCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["WATCH"], key);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XACK.js
var require_XACK = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XACK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, id) {
      return (0, generic_transformers_1.pushVerdictArguments)(["XACK", key, group], id);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XADD.js
var require_XADD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, id, message, options) {
      const args = ["XADD", key];
      if (options == null ? void 0 : options.NOMKSTREAM) {
        args.push("NOMKSTREAM");
      }
      if (options == null ? void 0 : options.TRIM) {
        if (options.TRIM.strategy) {
          args.push(options.TRIM.strategy);
        }
        if (options.TRIM.strategyModifier) {
          args.push(options.TRIM.strategyModifier);
        }
        args.push(options.TRIM.threshold.toString());
        if (options.TRIM.limit) {
          args.push("LIMIT", options.TRIM.limit.toString());
        }
      }
      args.push(id);
      for (const [key2, value] of Object.entries(message)) {
        args.push(key2, value);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js
var require_XAUTOCLAIM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, consumer, minIdleTime, start, options) {
      const args = ["XAUTOCLAIM", key, group, consumer, minIdleTime.toString(), start];
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        nextId: reply[0],
        messages: (0, generic_transformers_1.transformStreamMessagesReply)(reply[1])
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js
var require_XAUTOCLAIM_JUSTID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var XAUTOCLAIM_1 = require_XAUTOCLAIM();
    var XAUTOCLAIM_2 = require_XAUTOCLAIM();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return XAUTOCLAIM_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(...args) {
      return [
        ...(0, XAUTOCLAIM_1.transformArguments)(...args),
        "JUSTID"
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        nextId: reply[0],
        messages: reply[1]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XCLAIM.js
var require_XCLAIM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XCLAIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, consumer, minIdleTime, id, options) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["XCLAIM", key, group, consumer, minIdleTime.toString()], id);
      if (options == null ? void 0 : options.IDLE) {
        args.push("IDLE", options.IDLE.toString());
      }
      if (options == null ? void 0 : options.TIME) {
        args.push("TIME", (typeof options.TIME === "number" ? options.TIME : options.TIME.getTime()).toString());
      }
      if (options == null ? void 0 : options.RETRYCOUNT) {
        args.push("RETRYCOUNT", options.RETRYCOUNT.toString());
      }
      if (options == null ? void 0 : options.FORCE) {
        args.push("FORCE");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformStreamMessagesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js
var require_XCLAIM_JUSTID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var XCLAIM_1 = require_XCLAIM();
    var XCLAIM_2 = require_XCLAIM();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return XCLAIM_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(...args) {
      return [
        ...(0, XCLAIM_1.transformArguments)(...args),
        "JUSTID"
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XDEL.js
var require_XDEL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, id) {
      return (0, generic_transformers_1.pushVerdictArguments)(["XDEL", key], id);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js
var require_XGROUP_CREATE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, id, options) {
      const args = ["XGROUP", "CREATE", key, group, id];
      if (options == null ? void 0 : options.MKSTREAM) {
        args.push("MKSTREAM");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js
var require_XGROUP_CREATECONSUMER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, consumer) {
      return ["XGROUP", "CREATECONSUMER", key, group, consumer];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js
var require_XGROUP_DELCONSUMER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, consumer) {
      return ["XGROUP", "DELCONSUMER", key, group, consumer];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js
var require_XGROUP_DESTROY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group) {
      return ["XGROUP", "DESTROY", key, group];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js
var require_XGROUP_SETID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, id) {
      return ["XGROUP", "SETID", key, group, id];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js
var require_XINFO_CONSUMERS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, group) {
      return ["XINFO", "CONSUMERS", key, group];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return rawReply.map((consumer) => ({
        name: consumer[1],
        pending: consumer[3],
        idle: consumer[5]
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js
var require_XINFO_GROUPS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XINFO", "GROUPS", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return rawReply.map((group) => ({
        name: group[1],
        consumers: group[3],
        pending: group[5],
        lastDeliveredId: group[7]
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js
var require_XINFO_STREAM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XINFO", "STREAM", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const parsedReply = {};
      for (let i = 0; i < rawReply.length; i += 2) {
        switch (rawReply[i]) {
          case "length":
            parsedReply.length = rawReply[i + 1];
            break;
          case "radix-tree-keys":
            parsedReply.radixTreeKeys = rawReply[i + 1];
            break;
          case "radix-tree-nodes":
            parsedReply.radixTreeNodes = rawReply[i + 1];
            break;
          case "groups":
            parsedReply.groups = rawReply[i + 1];
            break;
          case "last-generated-id":
            parsedReply.lastGeneratedId = rawReply[i + 1];
            break;
          case "first-entry":
            parsedReply.firstEntry = rawReply[i + 1] ? {
              id: rawReply[i + 1][0],
              message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
            } : null;
            break;
          case "last-entry":
            parsedReply.lastEntry = rawReply[i + 1] ? {
              id: rawReply[i + 1][0],
              message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
            } : null;
            break;
        }
      }
      return parsedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XLEN.js
var require_XLEN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XLEN", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js
var require_XPENDING_RANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, group, start, end, count, options) {
      const args = ["XPENDING", key, group];
      if (options == null ? void 0 : options.IDLE) {
        args.push("IDLE", options.IDLE.toString());
      }
      args.push(start, end, count.toString());
      if (options == null ? void 0 : options.consumer) {
        args.push(options.consumer);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([id, owner, millisecondsSinceLastDelivery, deliveriesCounter]) => ({
        id,
        owner,
        millisecondsSinceLastDelivery,
        deliveriesCounter
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XPENDING.js
var require_XPENDING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XPENDING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, group) {
      return ["XPENDING", key, group];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        pending: reply[0],
        firstId: reply[1],
        lastId: reply[2],
        consumers: reply[3] === null ? null : reply[3].map(([name, deliveriesCounter]) => ({
          name,
          deliveriesCounter: Number(deliveriesCounter)
        }))
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/XRANGE.js
var require_XRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, start, end, options) {
      const args = ["XRANGE", key, start, end];
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamMessagesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XREAD.js
var require_XREAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XREAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var FIRST_KEY_INDEX = (streams) => {
      return Array.isArray(streams) ? streams[0].key : streams.key;
    };
    exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
    exports.IS_READ_ONLY = true;
    function transformArguments(streams, options) {
      const args = ["XREAD"];
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (typeof (options == null ? void 0 : options.BLOCK) === "number") {
        args.push("BLOCK", options.BLOCK.toString());
      }
      args.push("STREAMS");
      const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
      for (let i = 0; i < streamsArray.length; i++) {
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamsMessagesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XREADGROUP.js
var require_XREADGROUP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XREADGROUP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var FIRST_KEY_INDEX = (_group, _consumer, streams) => {
      return Array.isArray(streams) ? streams[0].key : streams.key;
    };
    exports.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
    exports.IS_READ_ONLY = true;
    function transformArguments(group, consumer, streams, options) {
      const args = ["XREADGROUP", "GROUP", group, consumer];
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (typeof (options == null ? void 0 : options.BLOCK) === "number") {
        args.push("BLOCK", options.BLOCK.toString());
      }
      if (options == null ? void 0 : options.NOACK) {
        args.push("NOACK");
      }
      args.push("STREAMS");
      const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
      for (let i = 0; i < streamsArray.length; i++) {
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamsMessagesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XREVRANGE.js
var require_XREVRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XREVRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, start, end, options) {
      const args = ["XREVRANGE", key, start, end];
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamMessagesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/XSETID.js
var require_XSETID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XSETID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, lastId, options) {
      const args = ["XSETID", key, lastId];
      if (options == null ? void 0 : options.ENTRIESADDED) {
        args.push("ENTRIESADDED", options.ENTRIESADDED.toString());
      }
      if (options == null ? void 0 : options.MAXDELETEDID) {
        args.push("MAXDELETEDID", options.MAXDELETEDID);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/XTRIM.js
var require_XTRIM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/XTRIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, strategy, threshold, options) {
      const args = ["XTRIM", key, strategy];
      if (options == null ? void 0 : options.strategyModifier) {
        args.push(options.strategyModifier);
      }
      args.push(threshold.toString());
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZADD.js
var require_ZADD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members, options) {
      const args = ["ZADD", key];
      if (options == null ? void 0 : options.NX) {
        args.push("NX");
      } else {
        if (options == null ? void 0 : options.XX) {
          args.push("XX");
        }
        if (options == null ? void 0 : options.GT) {
          args.push("GT");
        } else if (options == null ? void 0 : options.LT) {
          args.push("LT");
        }
      }
      if (options == null ? void 0 : options.CH) {
        args.push("CH");
      }
      if (options == null ? void 0 : options.INCR) {
        args.push("INCR");
      }
      for (const { score, value } of Array.isArray(members) ? members : [members]) {
        args.push((0, generic_transformers_1.transformNumberInfinityArgument)(score), value);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZCARD.js
var require_ZCARD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZCARD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["ZCARD", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZCOUNT.js
var require_ZCOUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, min, max) {
      return [
        "ZCOUNT",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZDIFF.js
var require_ZDIFF = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZDIFF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArgument)(["ZDIFF"], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js
var require_ZDIFF_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZDIFF_1 = require_ZDIFF();
    var ZDIFF_2 = require_ZDIFF();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZDIFF_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZDIFF_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZDIFF_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js
var require_ZDIFFSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArgument)(["ZDIFFSTORE", destination], keys);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZINCRBY.js
var require_ZINCRBY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZINCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment, member) {
      return [
        "ZINCRBY",
        key,
        (0, generic_transformers_1.transformNumberInfinityArgument)(increment),
        member
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZINTER.js
var require_ZINTER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZINTER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTER"], keys);
      if (options == null ? void 0 : options.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options == null ? void 0 : options.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js
var require_ZINTER_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZINTER_1 = require_ZINTER();
    var ZINTER_2 = require_ZINTER();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZINTER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZINTER_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZINTER_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js
var require_ZINTERCARD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys, limit) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTERCARD"], keys);
      if (limit) {
        args.push("LIMIT", limit.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js
var require_ZINTERSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTERSTORE", destination], keys);
      if (options == null ? void 0 : options.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options == null ? void 0 : options.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js
var require_ZLEXCOUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, min, max) {
      return [
        "ZLEXCOUNT",
        key,
        min,
        max
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZMSCORE.js
var require_ZMSCORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZMSCORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ZMSCORE", key], member);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityNullArrayReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js
var require_ZPOPMAX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return [
        "ZPOPMAX",
        key
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js
var require_ZPOPMAX_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var ZPOPMAX_1 = require_ZPOPMAX();
    var ZPOPMAX_2 = require_ZPOPMAX();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZPOPMAX_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZPOPMAX_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js
var require_ZPOPMIN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return [
        "ZPOPMIN",
        key
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js
var require_ZPOPMIN_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var ZPOPMIN_1 = require_ZPOPMIN();
    var ZPOPMIN_2 = require_ZPOPMIN();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZPOPMIN_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZPOPMIN_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js
var require_ZRANDMEMBER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["ZRANDMEMBER", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js
var require_ZRANDMEMBER_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZRANDMEMBER_1 = require_ZRANDMEMBER();
    var ZRANDMEMBER_2 = require_ZRANDMEMBER();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANDMEMBER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANDMEMBER_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZRANDMEMBER_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js
var require_ZRANDMEMBER_COUNT_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZRANDMEMBER_COUNT_1 = require_ZRANDMEMBER_COUNT();
    var ZRANDMEMBER_COUNT_2 = require_ZRANDMEMBER_COUNT();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANDMEMBER_COUNT_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANDMEMBER_COUNT_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZRANDMEMBER_COUNT_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGE.js
var require_ZRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      switch (options == null ? void 0 : options.BY) {
        case "SCORE":
          args.push("BYSCORE");
          break;
        case "LEX":
          args.push("BYLEX");
          break;
      }
      if (options == null ? void 0 : options.REV) {
        args.push("REV");
      }
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js
var require_ZRANGE_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZRANGE_1 = require_ZRANGE();
    var ZRANGE_2 = require_ZRANGE();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANGE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANGE_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZRANGE_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js
var require_ZRANGEBYLEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGEBYLEX",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js
var require_ZRANGEBYSCORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGEBYSCORE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js
var require_ZRANGEBYSCORE_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZRANGEBYSCORE_1 = require_ZRANGEBYSCORE();
    var ZRANGEBYSCORE_2 = require_ZRANGEBYSCORE();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANGEBYSCORE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANGEBYSCORE_2.IS_READ_ONLY;
    } });
    function transformArguments(key, min, max, options) {
      return [
        ...(0, ZRANGEBYSCORE_1.transformArguments)(key, min, max, options),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js
var require_ZRANGESTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(dst, src, min, max, options) {
      const args = [
        "ZRANGESTORE",
        dst,
        src,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      switch (options == null ? void 0 : options.BY) {
        case "SCORE":
          args.push("BYSCORE");
          break;
        case "LEX":
          args.push("BYLEX");
          break;
      }
      if (options == null ? void 0 : options.REV) {
        args.push("REV");
      }
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      if (options == null ? void 0 : options.WITHSCORES) {
        args.push("WITHSCORES");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (typeof reply !== "number") {
        throw new TypeError(`Upgrade to Redis 6.2.5 and up (https://github.com/redis/redis/pull/9089)`);
      }
      return reply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZRANK.js
var require_ZRANK = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZRANK", key, member];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZREM.js
var require_ZREM = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZREM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ZREM", key], member);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js
var require_ZREMRANGEBYLEX = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, min, max) {
      return [
        "ZREMRANGEBYLEX",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js
var require_ZREMRANGEBYRANK = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, start, stop) {
      return ["ZREMRANGEBYRANK", key, start.toString(), stop.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js
var require_ZREMRANGEBYSCORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, min, max) {
      return [
        "ZREMRANGEBYSCORE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZREVRANK.js
var require_ZREVRANK = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZREVRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZREVRANK", key, member];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZSCAN.js
var require_ZSCAN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZSCAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "ZSCAN",
        key
      ], cursor, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply([cursor, rawMembers]) {
      const parsedMembers = [];
      for (let i = 0; i < rawMembers.length; i += 2) {
        parsedMembers.push({
          value: rawMembers[i],
          score: (0, generic_transformers_1.transformNumberInfinityReply)(rawMembers[i + 1])
        });
      }
      return {
        cursor: Number(cursor),
        members: parsedMembers
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZSCORE.js
var require_ZSCORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZSCORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZSCORE", key, member];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformNumberInfinityNullReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZUNION.js
var require_ZUNION = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZUNION.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 2;
    exports.IS_READ_ONLY = true;
    function transformArguments(keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZUNION"], keys);
      if (options == null ? void 0 : options.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options == null ? void 0 : options.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js
var require_ZUNION_WITHSCORES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var ZUNION_1 = require_ZUNION();
    var ZUNION_2 = require_ZUNION();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZUNION_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZUNION_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZUNION_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js
var require_ZUNIONSTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZUNIONSTORE", destination], keys);
      if (options == null ? void 0 : options.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options == null ? void 0 : options.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/cluster/commands.js
var require_commands = __commonJS({
  "node_modules/@redis/client/dist/lib/cluster/commands.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var APPEND = require_APPEND();
    var BITCOUNT = require_BITCOUNT();
    var BITFIELD_RO = require_BITFIELD_RO();
    var BITFIELD = require_BITFIELD();
    var BITOP = require_BITOP();
    var BITPOS = require_BITPOS();
    var BLMOVE = require_BLMOVE();
    var BLMPOP = require_BLMPOP();
    var BLPOP = require_BLPOP();
    var BRPOP = require_BRPOP();
    var BRPOPLPUSH = require_BRPOPLPUSH();
    var BZMPOP = require_BZMPOP();
    var BZPOPMAX = require_BZPOPMAX();
    var BZPOPMIN = require_BZPOPMIN();
    var COPY = require_COPY();
    var DECR = require_DECR();
    var DECRBY = require_DECRBY();
    var DEL = require_DEL();
    var DUMP = require_DUMP();
    var EVAL_RO = require_EVAL_RO();
    var EVAL = require_EVAL();
    var EVALSHA_RO = require_EVALSHA_RO();
    var EVALSHA = require_EVALSHA();
    var EXISTS = require_EXISTS();
    var EXPIRE = require_EXPIRE();
    var EXPIREAT = require_EXPIREAT();
    var EXPIRETIME = require_EXPIRETIME();
    var FCALL_RO = require_FCALL_RO();
    var FCALL = require_FCALL();
    var GEOADD = require_GEOADD();
    var GEODIST = require_GEODIST();
    var GEOHASH = require_GEOHASH();
    var GEOPOS = require_GEOPOS();
    var GEORADIUS_RO_WITH = require_GEORADIUS_RO_WITH();
    var GEORADIUS_RO = require_GEORADIUS_RO();
    var GEORADIUS_WITH = require_GEORADIUS_WITH();
    var GEORADIUS = require_GEORADIUS();
    var GEORADIUSBYMEMBER_RO_WITH = require_GEORADIUSBYMEMBER_RO_WITH();
    var GEORADIUSBYMEMBER_RO = require_GEORADIUSBYMEMBER_RO();
    var GEORADIUSBYMEMBER_WITH = require_GEORADIUSBYMEMBER_WITH();
    var GEORADIUSBYMEMBER = require_GEORADIUSBYMEMBER();
    var GEORADIUSBYMEMBERSTORE = require_GEORADIUSBYMEMBERSTORE();
    var GEORADIUSSTORE = require_GEORADIUSSTORE();
    var GEOSEARCH_WITH = require_GEOSEARCH_WITH();
    var GEOSEARCH = require_GEOSEARCH();
    var GEOSEARCHSTORE = require_GEOSEARCHSTORE();
    var GET = require_GET();
    var GETBIT = require_GETBIT();
    var GETDEL = require_GETDEL();
    var GETEX = require_GETEX();
    var GETRANGE = require_GETRANGE();
    var GETSET = require_GETSET();
    var HDEL = require_HDEL();
    var HEXISTS = require_HEXISTS();
    var HGET = require_HGET();
    var HGETALL = require_HGETALL();
    var HINCRBY = require_HINCRBY();
    var HINCRBYFLOAT = require_HINCRBYFLOAT();
    var HKEYS = require_HKEYS();
    var HLEN = require_HLEN();
    var HMGET = require_HMGET();
    var HRANDFIELD_COUNT_WITHVALUES = require_HRANDFIELD_COUNT_WITHVALUES();
    var HRANDFIELD_COUNT = require_HRANDFIELD_COUNT();
    var HRANDFIELD = require_HRANDFIELD();
    var HSCAN = require_HSCAN();
    var HSET = require_HSET();
    var HSETNX = require_HSETNX();
    var HSTRLEN = require_HSTRLEN();
    var HVALS = require_HVALS();
    var INCR = require_INCR();
    var INCRBY = require_INCRBY();
    var INCRBYFLOAT = require_INCRBYFLOAT();
    var LCS_IDX_WITHMATCHLEN = require_LCS_IDX_WITHMATCHLEN();
    var LCS_IDX = require_LCS_IDX();
    var LCS_LEN = require_LCS_LEN();
    var LCS = require_LCS();
    var LINDEX = require_LINDEX();
    var LINSERT = require_LINSERT();
    var LLEN = require_LLEN();
    var LMOVE = require_LMOVE();
    var LMPOP = require_LMPOP();
    var LPOP_COUNT = require_LPOP_COUNT();
    var LPOP = require_LPOP();
    var LPOS_COUNT = require_LPOS_COUNT();
    var LPOS = require_LPOS();
    var LPUSH = require_LPUSH();
    var LPUSHX = require_LPUSHX();
    var LRANGE = require_LRANGE();
    var LREM = require_LREM();
    var LSET = require_LSET();
    var LTRIM = require_LTRIM();
    var MGET = require_MGET();
    var MIGRATE = require_MIGRATE();
    var MSET = require_MSET();
    var MSETNX = require_MSETNX();
    var OBJECT_ENCODING = require_OBJECT_ENCODING();
    var OBJECT_FREQ = require_OBJECT_FREQ();
    var OBJECT_IDLETIME = require_OBJECT_IDLETIME();
    var OBJECT_REFCOUNT = require_OBJECT_REFCOUNT();
    var PERSIST = require_PERSIST();
    var PEXPIRE = require_PEXPIRE();
    var PEXPIREAT = require_PEXPIREAT();
    var PEXPIRETIME = require_PEXPIRETIME();
    var PFADD = require_PFADD();
    var PFCOUNT = require_PFCOUNT();
    var PFMERGE = require_PFMERGE();
    var PSETEX = require_PSETEX();
    var PTTL = require_PTTL();
    var PUBLISH = require_PUBLISH();
    var RENAME = require_RENAME();
    var RENAMENX = require_RENAMENX();
    var RPOP_COUNT = require_RPOP_COUNT();
    var RPOP = require_RPOP();
    var RPOPLPUSH = require_RPOPLPUSH();
    var RPUSH = require_RPUSH();
    var RPUSHX = require_RPUSHX();
    var SADD = require_SADD();
    var SCARD = require_SCARD();
    var SDIFF = require_SDIFF();
    var SDIFFSTORE = require_SDIFFSTORE();
    var SET = require_SET();
    var SETBIT = require_SETBIT();
    var SETEX = require_SETEX();
    var SETNX = require_SETNX();
    var SETRANGE = require_SETRANGE();
    var SINTER = require_SINTER();
    var SINTERCARD = require_SINTERCARD();
    var SINTERSTORE = require_SINTERSTORE();
    var SISMEMBER = require_SISMEMBER();
    var SMEMBERS = require_SMEMBERS();
    var SMISMEMBER = require_SMISMEMBER();
    var SMOVE = require_SMOVE();
    var SORT_RO = require_SORT_RO();
    var SORT_STORE = require_SORT_STORE();
    var SORT = require_SORT();
    var SPOP = require_SPOP();
    var SRANDMEMBER_COUNT = require_SRANDMEMBER_COUNT();
    var SRANDMEMBER = require_SRANDMEMBER();
    var SREM = require_SREM();
    var SSCAN = require_SSCAN();
    var STRLEN = require_STRLEN();
    var SUNION = require_SUNION();
    var SUNIONSTORE = require_SUNIONSTORE();
    var TOUCH = require_TOUCH();
    var TTL = require_TTL();
    var TYPE = require_TYPE();
    var UNLINK = require_UNLINK();
    var WATCH = require_WATCH();
    var XACK = require_XACK();
    var XADD = require_XADD();
    var XAUTOCLAIM_JUSTID = require_XAUTOCLAIM_JUSTID();
    var XAUTOCLAIM = require_XAUTOCLAIM();
    var XCLAIM_JUSTID = require_XCLAIM_JUSTID();
    var XCLAIM = require_XCLAIM();
    var XDEL = require_XDEL();
    var XGROUP_CREATE = require_XGROUP_CREATE();
    var XGROUP_CREATECONSUMER = require_XGROUP_CREATECONSUMER();
    var XGROUP_DELCONSUMER = require_XGROUP_DELCONSUMER();
    var XGROUP_DESTROY = require_XGROUP_DESTROY();
    var XGROUP_SETID = require_XGROUP_SETID();
    var XINFO_CONSUMERS = require_XINFO_CONSUMERS();
    var XINFO_GROUPS = require_XINFO_GROUPS();
    var XINFO_STREAM = require_XINFO_STREAM();
    var XLEN = require_XLEN();
    var XPENDING_RANGE = require_XPENDING_RANGE();
    var XPENDING = require_XPENDING();
    var XRANGE = require_XRANGE();
    var XREAD = require_XREAD();
    var XREADGROUP = require_XREADGROUP();
    var XREVRANGE = require_XREVRANGE();
    var XSETID = require_XSETID();
    var XTRIM = require_XTRIM();
    var ZADD = require_ZADD();
    var ZCARD = require_ZCARD();
    var ZCOUNT = require_ZCOUNT();
    var ZDIFF_WITHSCORES = require_ZDIFF_WITHSCORES();
    var ZDIFF = require_ZDIFF();
    var ZDIFFSTORE = require_ZDIFFSTORE();
    var ZINCRBY = require_ZINCRBY();
    var ZINTER_WITHSCORES = require_ZINTER_WITHSCORES();
    var ZINTER = require_ZINTER();
    var ZINTERCARD = require_ZINTERCARD();
    var ZINTERSTORE = require_ZINTERSTORE();
    var ZLEXCOUNT = require_ZLEXCOUNT();
    var ZMPOP = require_ZMPOP();
    var ZMSCORE = require_ZMSCORE();
    var ZPOPMAX_COUNT = require_ZPOPMAX_COUNT();
    var ZPOPMAX = require_ZPOPMAX();
    var ZPOPMIN_COUNT = require_ZPOPMIN_COUNT();
    var ZPOPMIN = require_ZPOPMIN();
    var ZRANDMEMBER_COUNT_WITHSCORES = require_ZRANDMEMBER_COUNT_WITHSCORES();
    var ZRANDMEMBER_COUNT = require_ZRANDMEMBER_COUNT();
    var ZRANDMEMBER = require_ZRANDMEMBER();
    var ZRANGE_WITHSCORES = require_ZRANGE_WITHSCORES();
    var ZRANGE = require_ZRANGE();
    var ZRANGEBYLEX = require_ZRANGEBYLEX();
    var ZRANGEBYSCORE_WITHSCORES = require_ZRANGEBYSCORE_WITHSCORES();
    var ZRANGEBYSCORE = require_ZRANGEBYSCORE();
    var ZRANGESTORE = require_ZRANGESTORE();
    var ZRANK = require_ZRANK();
    var ZREM = require_ZREM();
    var ZREMRANGEBYLEX = require_ZREMRANGEBYLEX();
    var ZREMRANGEBYRANK = require_ZREMRANGEBYRANK();
    var ZREMRANGEBYSCORE = require_ZREMRANGEBYSCORE();
    var ZREVRANK = require_ZREVRANK();
    var ZSCAN = require_ZSCAN();
    var ZSCORE = require_ZSCORE();
    var ZUNION_WITHSCORES = require_ZUNION_WITHSCORES();
    var ZUNION = require_ZUNION();
    var ZUNIONSTORE = require_ZUNIONSTORE();
    exports.default = {
      APPEND,
      append: APPEND,
      BITCOUNT,
      bitCount: BITCOUNT,
      BITFIELD_RO,
      bitFieldRo: BITFIELD_RO,
      BITFIELD,
      bitField: BITFIELD,
      BITOP,
      bitOp: BITOP,
      BITPOS,
      bitPos: BITPOS,
      BLMOVE,
      blMove: BLMOVE,
      BLMPOP,
      blmPop: BLMPOP,
      BLPOP,
      blPop: BLPOP,
      BRPOP,
      brPop: BRPOP,
      BRPOPLPUSH,
      brPopLPush: BRPOPLPUSH,
      BZMPOP,
      bzmPop: BZMPOP,
      BZPOPMAX,
      bzPopMax: BZPOPMAX,
      BZPOPMIN,
      bzPopMin: BZPOPMIN,
      COPY,
      copy: COPY,
      DECR,
      decr: DECR,
      DECRBY,
      decrBy: DECRBY,
      DEL,
      del: DEL,
      DUMP,
      dump: DUMP,
      EVAL_RO,
      evalRo: EVAL_RO,
      EVAL,
      eval: EVAL,
      EVALSHA,
      evalSha: EVALSHA,
      EVALSHA_RO,
      evalShaRo: EVALSHA_RO,
      EXISTS,
      exists: EXISTS,
      EXPIRE,
      expire: EXPIRE,
      EXPIREAT,
      expireAt: EXPIREAT,
      EXPIRETIME,
      expireTime: EXPIRETIME,
      FCALL_RO,
      fCallRo: FCALL_RO,
      FCALL,
      fCall: FCALL,
      GEOADD,
      geoAdd: GEOADD,
      GEODIST,
      geoDist: GEODIST,
      GEOHASH,
      geoHash: GEOHASH,
      GEOPOS,
      geoPos: GEOPOS,
      GEORADIUS_RO_WITH,
      geoRadiusRoWith: GEORADIUS_RO_WITH,
      GEORADIUS_RO,
      geoRadiusRo: GEORADIUS_RO,
      GEORADIUS_WITH,
      geoRadiusWith: GEORADIUS_WITH,
      GEORADIUS,
      geoRadius: GEORADIUS,
      GEORADIUSBYMEMBER_RO_WITH,
      geoRadiusByMemberRoWith: GEORADIUSBYMEMBER_RO_WITH,
      GEORADIUSBYMEMBER_RO,
      geoRadiusByMemberRo: GEORADIUSBYMEMBER_RO,
      GEORADIUSBYMEMBER_WITH,
      geoRadiusByMemberWith: GEORADIUSBYMEMBER_WITH,
      GEORADIUSBYMEMBER,
      geoRadiusByMember: GEORADIUSBYMEMBER,
      GEORADIUSBYMEMBERSTORE,
      geoRadiusByMemberStore: GEORADIUSBYMEMBERSTORE,
      GEORADIUSSTORE,
      geoRadiusStore: GEORADIUSSTORE,
      GEOSEARCH_WITH,
      geoSearchWith: GEOSEARCH_WITH,
      GEOSEARCH,
      geoSearch: GEOSEARCH,
      GEOSEARCHSTORE,
      geoSearchStore: GEOSEARCHSTORE,
      GET,
      get: GET,
      GETBIT,
      getBit: GETBIT,
      GETDEL,
      getDel: GETDEL,
      GETEX,
      getEx: GETEX,
      GETRANGE,
      getRange: GETRANGE,
      GETSET,
      getSet: GETSET,
      HDEL,
      hDel: HDEL,
      HEXISTS,
      hExists: HEXISTS,
      HGET,
      hGet: HGET,
      HGETALL,
      hGetAll: HGETALL,
      HINCRBY,
      hIncrBy: HINCRBY,
      HINCRBYFLOAT,
      hIncrByFloat: HINCRBYFLOAT,
      HKEYS,
      hKeys: HKEYS,
      HLEN,
      hLen: HLEN,
      HMGET,
      hmGet: HMGET,
      HRANDFIELD_COUNT_WITHVALUES,
      hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
      HRANDFIELD_COUNT,
      hRandFieldCount: HRANDFIELD_COUNT,
      HRANDFIELD,
      hRandField: HRANDFIELD,
      HSCAN,
      hScan: HSCAN,
      HSET,
      hSet: HSET,
      HSETNX,
      hSetNX: HSETNX,
      HSTRLEN,
      hStrLen: HSTRLEN,
      HVALS,
      hVals: HVALS,
      INCR,
      incr: INCR,
      INCRBY,
      incrBy: INCRBY,
      INCRBYFLOAT,
      incrByFloat: INCRBYFLOAT,
      LCS_IDX_WITHMATCHLEN,
      lcsIdxWithMatchLen: LCS_IDX_WITHMATCHLEN,
      LCS_IDX,
      lcsIdx: LCS_IDX,
      LCS_LEN,
      lcsLen: LCS_LEN,
      LCS,
      lcs: LCS,
      LINDEX,
      lIndex: LINDEX,
      LINSERT,
      lInsert: LINSERT,
      LLEN,
      lLen: LLEN,
      LMOVE,
      lMove: LMOVE,
      LMPOP,
      lmPop: LMPOP,
      LPOP_COUNT,
      lPopCount: LPOP_COUNT,
      LPOP,
      lPop: LPOP,
      LPOS_COUNT,
      lPosCount: LPOS_COUNT,
      LPOS,
      lPos: LPOS,
      LPUSH,
      lPush: LPUSH,
      LPUSHX,
      lPushX: LPUSHX,
      LRANGE,
      lRange: LRANGE,
      LREM,
      lRem: LREM,
      LSET,
      lSet: LSET,
      LTRIM,
      lTrim: LTRIM,
      MGET,
      mGet: MGET,
      MIGRATE,
      migrate: MIGRATE,
      MSET,
      mSet: MSET,
      MSETNX,
      mSetNX: MSETNX,
      OBJECT_ENCODING,
      objectEncoding: OBJECT_ENCODING,
      OBJECT_FREQ,
      objectFreq: OBJECT_FREQ,
      OBJECT_IDLETIME,
      objectIdleTime: OBJECT_IDLETIME,
      OBJECT_REFCOUNT,
      objectRefCount: OBJECT_REFCOUNT,
      PERSIST,
      persist: PERSIST,
      PEXPIRE,
      pExpire: PEXPIRE,
      PEXPIREAT,
      pExpireAt: PEXPIREAT,
      PEXPIRETIME,
      pExpireTime: PEXPIRETIME,
      PFADD,
      pfAdd: PFADD,
      PFCOUNT,
      pfCount: PFCOUNT,
      PFMERGE,
      pfMerge: PFMERGE,
      PSETEX,
      pSetEx: PSETEX,
      PTTL,
      pTTL: PTTL,
      PUBLISH,
      publish: PUBLISH,
      RENAME,
      rename: RENAME,
      RENAMENX,
      renameNX: RENAMENX,
      RPOP_COUNT,
      rPopCount: RPOP_COUNT,
      RPOP,
      rPop: RPOP,
      RPOPLPUSH,
      rPopLPush: RPOPLPUSH,
      RPUSH,
      rPush: RPUSH,
      RPUSHX,
      rPushX: RPUSHX,
      SADD,
      sAdd: SADD,
      SCARD,
      sCard: SCARD,
      SDIFF,
      sDiff: SDIFF,
      SDIFFSTORE,
      sDiffStore: SDIFFSTORE,
      SINTER,
      sInter: SINTER,
      SINTERCARD,
      sInterCard: SINTERCARD,
      SINTERSTORE,
      sInterStore: SINTERSTORE,
      SET,
      set: SET,
      SETBIT,
      setBit: SETBIT,
      SETEX,
      setEx: SETEX,
      SETNX,
      setNX: SETNX,
      SETRANGE,
      setRange: SETRANGE,
      SISMEMBER,
      sIsMember: SISMEMBER,
      SMEMBERS,
      sMembers: SMEMBERS,
      SMISMEMBER,
      smIsMember: SMISMEMBER,
      SMOVE,
      sMove: SMOVE,
      SORT_RO,
      sortRo: SORT_RO,
      SORT_STORE,
      sortStore: SORT_STORE,
      SORT,
      sort: SORT,
      SPOP,
      sPop: SPOP,
      SRANDMEMBER_COUNT,
      sRandMemberCount: SRANDMEMBER_COUNT,
      SRANDMEMBER,
      sRandMember: SRANDMEMBER,
      SREM,
      sRem: SREM,
      SSCAN,
      sScan: SSCAN,
      STRLEN,
      strLen: STRLEN,
      SUNION,
      sUnion: SUNION,
      SUNIONSTORE,
      sUnionStore: SUNIONSTORE,
      TOUCH,
      touch: TOUCH,
      TTL,
      ttl: TTL,
      TYPE,
      type: TYPE,
      UNLINK,
      unlink: UNLINK,
      WATCH,
      watch: WATCH,
      XACK,
      xAck: XACK,
      XADD,
      xAdd: XADD,
      XAUTOCLAIM_JUSTID,
      xAutoClaimJustId: XAUTOCLAIM_JUSTID,
      XAUTOCLAIM,
      xAutoClaim: XAUTOCLAIM,
      XCLAIM,
      xClaim: XCLAIM,
      XCLAIM_JUSTID,
      xClaimJustId: XCLAIM_JUSTID,
      XDEL,
      xDel: XDEL,
      XGROUP_CREATE,
      xGroupCreate: XGROUP_CREATE,
      XGROUP_CREATECONSUMER,
      xGroupCreateConsumer: XGROUP_CREATECONSUMER,
      XGROUP_DELCONSUMER,
      xGroupDelConsumer: XGROUP_DELCONSUMER,
      XGROUP_DESTROY,
      xGroupDestroy: XGROUP_DESTROY,
      XGROUP_SETID,
      xGroupSetId: XGROUP_SETID,
      XINFO_CONSUMERS,
      xInfoConsumers: XINFO_CONSUMERS,
      XINFO_GROUPS,
      xInfoGroups: XINFO_GROUPS,
      XINFO_STREAM,
      xInfoStream: XINFO_STREAM,
      XLEN,
      xLen: XLEN,
      XPENDING_RANGE,
      xPendingRange: XPENDING_RANGE,
      XPENDING,
      xPending: XPENDING,
      XRANGE,
      xRange: XRANGE,
      XREAD,
      xRead: XREAD,
      XREADGROUP,
      xReadGroup: XREADGROUP,
      XREVRANGE,
      xRevRange: XREVRANGE,
      XSETID,
      xSetId: XSETID,
      XTRIM,
      xTrim: XTRIM,
      ZADD,
      zAdd: ZADD,
      ZCARD,
      zCard: ZCARD,
      ZCOUNT,
      zCount: ZCOUNT,
      ZDIFF_WITHSCORES,
      zDiffWithScores: ZDIFF_WITHSCORES,
      ZDIFF,
      zDiff: ZDIFF,
      ZDIFFSTORE,
      zDiffStore: ZDIFFSTORE,
      ZINCRBY,
      zIncrBy: ZINCRBY,
      ZINTER_WITHSCORES,
      zInterWithScores: ZINTER_WITHSCORES,
      ZINTER,
      zInter: ZINTER,
      ZINTERCARD,
      zInterCard: ZINTERCARD,
      ZINTERSTORE,
      zInterStore: ZINTERSTORE,
      ZLEXCOUNT,
      zLexCount: ZLEXCOUNT,
      ZMPOP,
      zmPop: ZMPOP,
      ZMSCORE,
      zmScore: ZMSCORE,
      ZPOPMAX_COUNT,
      zPopMaxCount: ZPOPMAX_COUNT,
      ZPOPMAX,
      zPopMax: ZPOPMAX,
      ZPOPMIN_COUNT,
      zPopMinCount: ZPOPMIN_COUNT,
      ZPOPMIN,
      zPopMin: ZPOPMIN,
      ZRANDMEMBER_COUNT_WITHSCORES,
      zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
      ZRANDMEMBER_COUNT,
      zRandMemberCount: ZRANDMEMBER_COUNT,
      ZRANDMEMBER,
      zRandMember: ZRANDMEMBER,
      ZRANGE_WITHSCORES,
      zRangeWithScores: ZRANGE_WITHSCORES,
      ZRANGE,
      zRange: ZRANGE,
      ZRANGEBYLEX,
      zRangeByLex: ZRANGEBYLEX,
      ZRANGEBYSCORE_WITHSCORES,
      zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
      ZRANGEBYSCORE,
      zRangeByScore: ZRANGEBYSCORE,
      ZRANGESTORE,
      zRangeStore: ZRANGESTORE,
      ZRANK,
      zRank: ZRANK,
      ZREM,
      zRem: ZREM,
      ZREMRANGEBYLEX,
      zRemRangeByLex: ZREMRANGEBYLEX,
      ZREMRANGEBYRANK,
      zRemRangeByRank: ZREMRANGEBYRANK,
      ZREMRANGEBYSCORE,
      zRemRangeByScore: ZREMRANGEBYSCORE,
      ZREVRANK,
      zRevRank: ZREVRANK,
      ZSCAN,
      zScan: ZSCAN,
      ZSCORE,
      zScore: ZSCORE,
      ZUNION_WITHSCORES,
      zUnionWithScores: ZUNION_WITHSCORES,
      ZUNION,
      zUnion: ZUNION,
      ZUNIONSTORE,
      zUnionStore: ZUNIONSTORE
    };
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_CAT.js
var require_ACL_CAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_CAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(categoryName) {
      const args = ["ACL", "CAT"];
      if (categoryName) {
        args.push(categoryName);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js
var require_ACL_DELUSER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(username) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ACL", "DELUSER"], username);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js
var require_ACL_DRYRUN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(username, command) {
      return [
        "ACL",
        "DRYRUN",
        username,
        ...command
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js
var require_ACL_GENPASS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(bits) {
      const args = ["ACL", "GENPASS"];
      if (bits) {
        args.push(bits.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js
var require_ACL_GETUSER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(username) {
      return ["ACL", "GETUSER", username];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        flags: reply[1],
        passwords: reply[3],
        commands: reply[5],
        keys: reply[7],
        channels: reply[9],
        selectors: reply[11]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_LIST.js
var require_ACL_LIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LIST"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js
var require_ACL_LOAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LOAD"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js
var require_ACL_LOG_RESET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LOG", "RESET"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_LOG.js
var require_ACL_LOG = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_LOG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(count) {
      const args = ["ACL", "LOG"];
      if (count) {
        args.push(count.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((log) => ({
        count: log[1],
        reason: log[3],
        context: log[5],
        object: log[7],
        username: log[9],
        ageSeconds: Number(log[11]),
        clientInfo: log[13]
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js
var require_ACL_SAVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "SAVE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js
var require_ACL_SETUSER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(username, rule) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ACL", "SETUSER", username], rule);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_USERS.js
var require_ACL_USERS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_USERS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "USERS"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js
var require_ACL_WHOAMI = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "WHOAMI"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ASKING.js
var require_ASKING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ASKING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["ASKING"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/AUTH.js
var require_AUTH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/AUTH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments({ username, password }) {
      if (!username) {
        return ["AUTH", password];
      }
      return ["AUTH", username, password];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js
var require_BGREWRITEAOF = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["BGREWRITEAOF"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/BGSAVE.js
var require_BGSAVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/BGSAVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["BGSAVE"];
      if (options == null ? void 0 : options.SCHEDULE) {
        args.push("SCHEDULE");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js
var require_CLIENT_CACHING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(value) {
      return [
        "CLIENT",
        "CACHING",
        value ? "YES" : "NO"
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js
var require_CLIENT_GETNAME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "GETNAME"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js
var require_CLIENT_GETREDIR = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "GETREDIR"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js
var require_CLIENT_ID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["CLIENT", "ID"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js
var require_CLIENT_KILL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.ClientKillFilters = void 0;
    var ClientKillFilters;
    (function(ClientKillFilters2) {
      ClientKillFilters2["ADDRESS"] = "ADDR";
      ClientKillFilters2["LOCAL_ADDRESS"] = "LADDR";
      ClientKillFilters2["ID"] = "ID";
      ClientKillFilters2["TYPE"] = "TYPE";
      ClientKillFilters2["USER"] = "USER";
      ClientKillFilters2["SKIP_ME"] = "SKIPME";
    })(ClientKillFilters = exports.ClientKillFilters || (exports.ClientKillFilters = {}));
    function transformArguments(filters) {
      const args = ["CLIENT", "KILL"];
      if (Array.isArray(filters)) {
        for (const filter of filters) {
          pushFilter(args, filter);
        }
      } else {
        pushFilter(args, filters);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function pushFilter(args, filter) {
      if (filter === ClientKillFilters.SKIP_ME) {
        args.push("SKIPME");
        return;
      }
      args.push(filter.filter);
      switch (filter.filter) {
        case ClientKillFilters.ADDRESS:
          args.push(filter.address);
          break;
        case ClientKillFilters.LOCAL_ADDRESS:
          args.push(filter.localAddress);
          break;
        case ClientKillFilters.ID:
          args.push(typeof filter.id === "number" ? filter.id.toString() : filter.id);
          break;
        case ClientKillFilters.TYPE:
          args.push(filter.type);
          break;
        case ClientKillFilters.USER:
          args.push(filter.username);
          break;
        case ClientKillFilters.SKIP_ME:
          args.push(filter.skipMe ? "yes" : "no");
          break;
      }
    }
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js
var require_CLIENT_NO_EVICT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(value) {
      return [
        "CLIENT",
        "NO-EVICT",
        value ? "ON" : "OFF"
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js
var require_CLIENT_PAUSE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(timeout, mode) {
      const args = [
        "CLIENT",
        "PAUSE",
        timeout.toString()
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js
var require_CLIENT_SETNAME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(name) {
      return ["CLIENT", "SETNAME", name];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js
var require_CLIENT_TRACKING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode, options) {
      const args = [
        "CLIENT",
        "TRACKING",
        mode ? "ON" : "OFF"
      ];
      if (mode) {
        if (options == null ? void 0 : options.REDIRECT) {
          args.push("REDIRECT", options.REDIRECT.toString());
        }
        if (isBroadcast(options)) {
          args.push("BCAST");
          if (options == null ? void 0 : options.PREFIX) {
            if (Array.isArray(options.PREFIX)) {
              for (const prefix of options.PREFIX) {
                args.push("PREFIX", prefix);
              }
            } else {
              args.push("PREFIX", options.PREFIX);
            }
          }
        } else if (isOptIn(options)) {
          args.push("OPTIN");
        } else if (isOptOut(options)) {
          args.push("OPTOUT");
        }
        if (options == null ? void 0 : options.NOLOOP) {
          args.push("NOLOOP");
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function isBroadcast(options) {
      return (options == null ? void 0 : options.BCAST) === true;
    }
    function isOptIn(options) {
      return (options == null ? void 0 : options.OPTIN) === true;
    }
    function isOptOut(options) {
      return (options == null ? void 0 : options.OPTOUT) === true;
    }
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js
var require_CLIENT_TRACKINGINFO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "TRACKINGINFO"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        flags: new Set(reply[1]),
        redirect: reply[3],
        prefixes: reply[5]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js
var require_CLIENT_UNPAUSE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "UNPAUSE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js
var require_CLIENT_INFO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "INFO"];
    }
    exports.transformArguments = transformArguments;
    var REGEX = /=([^\s]*)/g;
    function transformReply(reply) {
      const [[, id], [, addr], [, laddr], [, fd], [, name], [, age], [, idle], [, flags], [, db], [, sub], [, psub], [, multi], [, qbuf], [, qbufFree], [, argvMem], [, obl], [, oll], [, omem], [, totMem], [, events], [, cmd], [, user], [, redir]] = [...reply.matchAll(REGEX)];
      return {
        id: Number(id),
        addr,
        laddr,
        fd: Number(fd),
        name,
        age: Number(age),
        idle: Number(idle),
        flags,
        db: Number(db),
        sub: Number(sub),
        psub: Number(psub),
        multi: Number(multi),
        qbuf: Number(qbuf),
        qbufFree: Number(qbufFree),
        argvMem: Number(argvMem),
        obl: Number(obl),
        oll: Number(oll),
        omem: Number(omem),
        totMem: Number(totMem),
        events,
        cmd,
        user,
        redir: Number(redir)
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js
var require_CLUSTER_ADDSLOTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(slots) {
      return (0, generic_transformers_1.pushVerdictNumberArguments)(["CLUSTER", "ADDSLOTS"], slots);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js
var require_CLUSTER_ADDSLOTSRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(ranges) {
      return (0, generic_transformers_1.pushSlotRangesArguments)(["CLUSTER", "ADDSLOTSRANGE"], ranges);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js
var require_CLUSTER_BUMPEPOCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "BUMPEPOCH"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js
var require_CLUSTER_COUNT_FAILURE_REPORTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "COUNT-FAILURE-REPORTS", nodeId];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js
var require_CLUSTER_COUNTKEYSINSLOT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(slot) {
      return ["CLUSTER", "COUNTKEYSINSLOT", slot.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js
var require_CLUSTER_DELSLOTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(slots) {
      return (0, generic_transformers_1.pushVerdictNumberArguments)(["CLUSTER", "DELSLOTS"], slots);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js
var require_CLUSTER_DELSLOTSRANGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(ranges) {
      return (0, generic_transformers_1.pushSlotRangesArguments)(["CLUSTER", "DELSLOTSRANGE"], ranges);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js
var require_CLUSTER_FAILOVER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FailoverModes = void 0;
    var FailoverModes;
    (function(FailoverModes2) {
      FailoverModes2["FORCE"] = "FORCE";
      FailoverModes2["TAKEOVER"] = "TAKEOVER";
    })(FailoverModes = exports.FailoverModes || (exports.FailoverModes = {}));
    function transformArguments(mode) {
      const args = ["CLUSTER", "FAILOVER"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js
var require_CLUSTER_FLUSHSLOTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "FLUSHSLOTS"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js
var require_CLUSTER_FORGET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "FORGET", nodeId];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js
var require_CLUSTER_GETKEYSINSLOT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(slot, count) {
      return ["CLUSTER", "GETKEYSINSLOT", slot.toString(), count.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js
var require_CLUSTER_INFO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractLineValue = exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "INFO"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      const lines = reply.split("\r\n");
      return {
        state: extractLineValue(lines[0]),
        slots: {
          assigned: Number(extractLineValue(lines[1])),
          ok: Number(extractLineValue(lines[2])),
          pfail: Number(extractLineValue(lines[3])),
          fail: Number(extractLineValue(lines[4]))
        },
        knownNodes: Number(extractLineValue(lines[5])),
        size: Number(extractLineValue(lines[6])),
        currentEpoch: Number(extractLineValue(lines[7])),
        myEpoch: Number(extractLineValue(lines[8])),
        stats: {
          messagesSent: Number(extractLineValue(lines[9])),
          messagesReceived: Number(extractLineValue(lines[10]))
        }
      };
    }
    exports.transformReply = transformReply;
    function extractLineValue(line) {
      return line.substring(line.indexOf(":") + 1);
    }
    exports.extractLineValue = extractLineValue;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js
var require_CLUSTER_KEYSLOT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(key) {
      return ["CLUSTER", "KEYSLOT", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js
var require_CLUSTER_LINKS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "LINKS"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((peerLink) => ({
        direction: peerLink[1],
        node: peerLink[3],
        createTime: Number(peerLink[5]),
        events: peerLink[7],
        sendBufferAllocated: Number(peerLink[9]),
        sendBufferUsed: Number(peerLink[11])
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js
var require_CLUSTER_MEET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(ip, port) {
      return ["CLUSTER", "MEET", ip, port.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js
var require_CLUSTER_MYID = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "MYID"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js
var require_CLUSTER_NODES = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.RedisClusterNodeLinkStates = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "NODES"];
    }
    exports.transformArguments = transformArguments;
    var RedisClusterNodeLinkStates;
    (function(RedisClusterNodeLinkStates2) {
      RedisClusterNodeLinkStates2["CONNECTED"] = "connected";
      RedisClusterNodeLinkStates2["DISCONNECTED"] = "disconnected";
    })(RedisClusterNodeLinkStates = exports.RedisClusterNodeLinkStates || (exports.RedisClusterNodeLinkStates = {}));
    function transformReply(reply) {
      const lines = reply.split("\n");
      lines.pop();
      const mastersMap = /* @__PURE__ */ new Map(), replicasMap = /* @__PURE__ */ new Map();
      for (const line of lines) {
        const [id, address, flags, masterId, pingSent, pongRecv, configEpoch, linkState, ...slots] = line.split(" "), node = {
          id,
          address,
          ...transformNodeAddress(address),
          flags: flags.split(","),
          pingSent: Number(pingSent),
          pongRecv: Number(pongRecv),
          configEpoch: Number(configEpoch),
          linkState
        };
        if (masterId === "-") {
          let replicas = replicasMap.get(id);
          if (!replicas) {
            replicas = [];
            replicasMap.set(id, replicas);
          }
          mastersMap.set(id, {
            ...node,
            slots: slots.map((slot) => {
              const [fromString, toString] = slot.split("-", 2), from = Number(fromString);
              return {
                from,
                to: toString ? Number(toString) : from
              };
            }),
            replicas
          });
        } else {
          const replicas = replicasMap.get(masterId);
          if (!replicas) {
            replicasMap.set(masterId, [node]);
          } else {
            replicas.push(node);
          }
        }
      }
      return [...mastersMap.values()];
    }
    exports.transformReply = transformReply;
    function transformNodeAddress(address) {
      const indexOfColon = address.lastIndexOf(":"), indexOfAt = address.indexOf("@", indexOfColon), host = address.substring(0, indexOfColon);
      if (indexOfAt === -1) {
        return {
          host,
          port: Number(address.substring(indexOfColon + 1)),
          cport: null
        };
      }
      return {
        host: address.substring(0, indexOfColon),
        port: Number(address.substring(indexOfColon + 1, indexOfAt)),
        cport: Number(address.substring(indexOfAt + 1))
      };
    }
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js
var require_CLUSTER_REPLICAS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "REPLICAS", nodeId];
    }
    exports.transformArguments = transformArguments;
    var CLUSTER_NODES_1 = require_CLUSTER_NODES();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return CLUSTER_NODES_1.transformReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js
var require_CLUSTER_REPLICATE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "REPLICATE", nodeId];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js
var require_CLUSTER_RESET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["CLUSTER", "RESET"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js
var require_CLUSTER_SAVECONFIG = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "SAVECONFIG"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js
var require_CLUSTER_SET_CONFIG_EPOCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(configEpoch) {
      return ["CLUSTER", "SET-CONFIG-EPOCH", configEpoch.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js
var require_CLUSTER_SETSLOT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.ClusterSlotStates = void 0;
    var ClusterSlotStates;
    (function(ClusterSlotStates2) {
      ClusterSlotStates2["IMPORTING"] = "IMPORTING";
      ClusterSlotStates2["MIGRATING"] = "MIGRATING";
      ClusterSlotStates2["STABLE"] = "STABLE";
      ClusterSlotStates2["NODE"] = "NODE";
    })(ClusterSlotStates = exports.ClusterSlotStates || (exports.ClusterSlotStates = {}));
    function transformArguments(slot, state, nodeId) {
      const args = ["CLUSTER", "SETSLOT", slot.toString(), state];
      if (nodeId) {
        args.push(nodeId);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js
var require_CLUSTER_SLOTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "SLOTS"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([from, to, master, ...replicas]) => {
        return {
          from,
          to,
          master: transformNode(master),
          replicas: replicas.map(transformNode)
        };
      });
    }
    exports.transformReply = transformReply;
    function transformNode([ip, port, id]) {
      return {
        ip,
        port,
        id
      };
    }
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js
var require_COMMAND_COUNT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["COMMAND", "COUNT"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js
var require_COMMAND_GETKEYS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(args) {
      return ["COMMAND", "GETKEYS", ...args];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js
var require_COMMAND_GETKEYSANDFLAGS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(args) {
      return ["COMMAND", "GETKEYSANDFLAGS", ...args];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, flags]) => ({
        key,
        flags
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js
var require_COMMAND_INFO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.IS_READ_ONLY = true;
    function transformArguments(commands) {
      return ["COMMAND", "INFO", ...commands];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((command) => command ? (0, generic_transformers_1.transformCommandReply)(command) : null);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js
var require_COMMAND_LIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FilterBy = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    var FilterBy;
    (function(FilterBy2) {
      FilterBy2["MODULE"] = "MODULE";
      FilterBy2["ACLCAT"] = "ACLCAT";
      FilterBy2["PATTERN"] = "PATTERN";
    })(FilterBy = exports.FilterBy || (exports.FilterBy = {}));
    function transformArguments(filter) {
      const args = ["COMMAND", "LIST"];
      if (filter) {
        args.push("FILTERBY", filter.filterBy, filter.value);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/COMMAND.js
var require_COMMAND = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/COMMAND.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["COMMAND"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(generic_transformers_1.transformCommandReply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js
var require_CONFIG_GET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(parameter) {
      return ["CONFIG", "GET", parameter];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js
var require_CONFIG_RESETSTAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CONFIG", "RESETSTAT"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js
var require_CONFIG_REWRITE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["CONFIG", "REWRITE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js
var require_CONFIG_SET = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(...[parameterOrConfig, value]) {
      const args = ["CONFIG", "SET"];
      if (typeof parameterOrConfig === "string") {
        args.push(parameterOrConfig, value);
      } else {
        for (const [key, value2] of Object.entries(parameterOrConfig)) {
          args.push(key, value2);
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/DBSIZE.js
var require_DBSIZE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DBSIZE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["DBSIZE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/DISCARD.js
var require_DISCARD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/DISCARD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["DISCARD"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ECHO.js
var require_ECHO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ECHO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(message) {
      return ["ECHO", message];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FAILOVER.js
var require_FAILOVER = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FAILOVER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["FAILOVER"];
      if (options == null ? void 0 : options.TO) {
        args.push("TO", options.TO.host, options.TO.port.toString());
        if (options.TO.FORCE) {
          args.push("FORCE");
        }
      }
      if (options == null ? void 0 : options.ABORT) {
        args.push("ABORT");
      }
      if (options == null ? void 0 : options.TIMEOUT) {
        args.push("TIMEOUT", options.TIMEOUT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FLUSHALL.js
var require_FLUSHALL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FLUSHALL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.RedisFlushModes = void 0;
    var RedisFlushModes;
    (function(RedisFlushModes2) {
      RedisFlushModes2["ASYNC"] = "ASYNC";
      RedisFlushModes2["SYNC"] = "SYNC";
    })(RedisFlushModes = exports.RedisFlushModes || (exports.RedisFlushModes = {}));
    function transformArguments(mode) {
      const args = ["FLUSHALL"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FLUSHDB.js
var require_FLUSHDB = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FLUSHDB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["FLUSHDB"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js
var require_FUNCTION_DELETE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(library) {
      return ["FUNCTION", "DELETE", library];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js
var require_FUNCTION_DUMP = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "DUMP"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js
var require_FUNCTION_FLUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["FUNCTION", "FLUSH"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js
var require_FUNCTION_KILL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "KILL"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js
var require_FUNCTION_LIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(pattern) {
      const args = ["FUNCTION", "LIST"];
      if (pattern) {
        args.push(pattern);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(generic_transformers_1.transformFunctionListItemReply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js
var require_FUNCTION_LIST_WITHCODE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    var FUNCTION_LIST_1 = require_FUNCTION_LIST();
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(pattern) {
      const args = (0, FUNCTION_LIST_1.transformArguments)(pattern);
      args.push("WITHCODE");
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((library) => ({
        ...(0, generic_transformers_1.transformFunctionListItemReply)(library),
        libraryCode: library[7]
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js
var require_FUNCTION_LOAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(code, options) {
      const args = ["FUNCTION", "LOAD"];
      if (options == null ? void 0 : options.REPLACE) {
        args.push("REPLACE");
      }
      args.push(code);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js
var require_FUNCTION_RESTORE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(dump, mode) {
      const args = ["FUNCTION", "RESTORE", dump];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js
var require_FUNCTION_STATS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "STATS"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      const engines = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < reply[3].length; i++) {
        engines[reply[3][i]] = {
          librariesCount: reply[3][++i][1],
          functionsCount: reply[3][i][3]
        };
      }
      return {
        runningScript: reply[1] === null ? null : {
          name: reply[1][1],
          command: reply[1][3],
          durationMs: reply[1][5]
        },
        engines
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/HELLO.js
var require_HELLO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/HELLO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["HELLO"];
      if (options) {
        args.push(options.protover.toString());
        if (options.auth) {
          args.push("AUTH", options.auth.username, options.auth.password);
        }
        if (options.clientName) {
          args.push("SETNAME", options.clientName);
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        server: reply[1],
        version: reply[3],
        proto: reply[5],
        id: reply[7],
        mode: reply[9],
        role: reply[11],
        modules: reply[13]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/INFO.js
var require_INFO = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(section) {
      const args = ["INFO"];
      if (section) {
        args.push(section);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/KEYS.js
var require_KEYS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/KEYS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(pattern) {
      return ["KEYS", pattern];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LASTSAVE.js
var require_LASTSAVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LASTSAVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["LASTSAVE"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return new Date(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/LOLWUT.js
var require_LOLWUT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LOLWUT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(version, ...optionalArguments) {
      const args = ["LOLWUT"];
      if (version) {
        args.push("VERSION", version.toString(), ...optionalArguments.map(String));
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js
var require_MEMORY_DOCTOR = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "DOCTOR"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js
var require_MEMORY_MALLOC_STATS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "MALLOC-STATS"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js
var require_MEMORY_PURGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "PURGE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js
var require_MEMORY_STATS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "STATS"];
    }
    exports.transformArguments = transformArguments;
    var FIELDS_MAPPING = {
      "peak.allocated": "peakAllocated",
      "total.allocated": "totalAllocated",
      "startup.allocated": "startupAllocated",
      "replication.backlog": "replicationBacklog",
      "clients.slaves": "clientsReplicas",
      "clients.normal": "clientsNormal",
      "aof.buffer": "aofBuffer",
      "lua.caches": "luaCaches",
      "overhead.total": "overheadTotal",
      "keys.count": "keysCount",
      "keys.bytes-per-key": "keysBytesPerKey",
      "dataset.bytes": "datasetBytes",
      "dataset.percentage": "datasetPercentage",
      "peak.percentage": "peakPercentage",
      "allocator.allocated": "allocatorAllocated",
      "allocator.active": "allocatorActive",
      "allocator.resident": "allocatorResident",
      "allocator-fragmentation.ratio": "allocatorFragmentationRatio",
      "allocator-fragmentation.bytes": "allocatorFragmentationBytes",
      "allocator-rss.ratio": "allocatorRssRatio",
      "allocator-rss.bytes": "allocatorRssBytes",
      "rss-overhead.ratio": "rssOverheadRatio",
      "rss-overhead.bytes": "rssOverheadBytes",
      "fragmentation": "fragmentation",
      "fragmentation.bytes": "fragmentationBytes"
    };
    var DB_FIELDS_MAPPING = {
      "overhead.hashtable.main": "overheadHashtableMain",
      "overhead.hashtable.expires": "overheadHashtableExpires"
    };
    function transformReply(rawReply) {
      const reply = {
        db: {}
      };
      for (let i = 0; i < rawReply.length; i += 2) {
        const key = rawReply[i];
        if (key.startsWith("db.")) {
          const dbTuples = rawReply[i + 1], db = {};
          for (let j = 0; j < dbTuples.length; j += 2) {
            db[DB_FIELDS_MAPPING[dbTuples[j]]] = dbTuples[j + 1];
          }
          reply.db[key.substring(3)] = db;
          continue;
        }
        reply[FIELDS_MAPPING[key]] = Number(rawReply[i + 1]);
      }
      return reply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js
var require_MEMORY_USAGE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      const args = ["MEMORY", "USAGE", key];
      if (options == null ? void 0 : options.SAMPLES) {
        args.push("SAMPLES", options.SAMPLES.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js
var require_MODULE_LIST = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["MODULE", "LIST"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js
var require_MODULE_LOAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(path, moduleArgs) {
      const args = ["MODULE", "LOAD", path];
      if (moduleArgs) {
        args.push(...moduleArgs);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js
var require_MODULE_UNLOAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(name) {
      return ["MODULE", "UNLOAD", name];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/MOVE.js
var require_MOVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/MOVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, db) {
      return ["MOVE", key, db.toString()];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/PING.js
var require_PING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["PING"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js
var require_PUBSUB_CHANNELS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(pattern) {
      const args = ["PUBSUB", "CHANNELS"];
      if (pattern) {
        args.push(pattern);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js
var require_PUBSUB_NUMPAT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["PUBSUB", "NUMPAT"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js
var require_PUBSUB_NUMSUB = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.IS_READ_ONLY = true;
    function transformArguments(channels) {
      const args = ["PUBSUB", "NUMSUB"];
      if (channels)
        return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const transformedReply = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply[rawReply[i]] = rawReply[i + 1];
      }
      return transformedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js
var require_RANDOMKEY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["RANDOMKEY"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/READONLY.js
var require_READONLY = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/READONLY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["READONLY"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/READWRITE.js
var require_READWRITE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/READWRITE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["READWRITE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/REPLICAOF.js
var require_REPLICAOF = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/REPLICAOF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(host, port) {
      return ["REPLICAOF", host, port.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js
var require_RESTORE_ASKING = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["RESTORE-ASKING"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/ROLE.js
var require_ROLE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/ROLE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["ROLE"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      switch (reply[0]) {
        case "master":
          return {
            role: "master",
            replicationOffest: reply[1],
            replicas: reply[2].map(([ip, port, replicationOffest]) => ({
              ip,
              port: Number(port),
              replicationOffest: Number(replicationOffest)
            }))
          };
        case "slave":
          return {
            role: "slave",
            master: {
              ip: reply[1],
              port: reply[2]
            },
            state: reply[3],
            dataReceived: reply[4]
          };
        case "sentinel":
          return {
            role: "sentinel",
            masterNames: reply[1]
          };
      }
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/SAVE.js
var require_SAVE = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SAVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["SAVE"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCAN.js
var require_SCAN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.IS_READ_ONLY = true;
    function transformArguments(cursor, options) {
      const args = (0, generic_transformers_1.pushScanArguments)(["SCAN"], cursor, options);
      if (options == null ? void 0 : options.TYPE) {
        args.push("TYPE", options.TYPE);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply([cursor, keys]) {
      return {
        cursor: Number(cursor),
        keys
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js
var require_SCRIPT_DEBUG = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      return ["SCRIPT", "DEBUG", mode];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js
var require_SCRIPT_EXISTS = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(sha1) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SCRIPT", "EXISTS"], sha1);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js
var require_SCRIPT_FLUSH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["SCRIPT", "FLUSH"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js
var require_SCRIPT_KILL = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["SCRIPT", "KILL"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js
var require_SCRIPT_LOAD = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(script) {
      return ["SCRIPT", "LOAD", script];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js
var require_SHUTDOWN = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["SHUTDOWN"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/SWAPDB.js
var require_SWAPDB = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/SWAPDB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(index1, index2) {
      return ["SWAPDB", index1.toString(), index2.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/TIME.js
var require_TIME = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/TIME.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments() {
      return ["TIME"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      const seconds = Number(reply[0]), microseconds = Number(reply[1]), d = new Date(seconds * 1e3 + microseconds / 1e3);
      d.microseconds = microseconds;
      return d;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/client/dist/lib/commands/UNWATCH.js
var require_UNWATCH = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/UNWATCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["UNWATCH"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/WAIT.js
var require_WAIT = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/WAIT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(numberOfReplicas, timeout) {
      return ["WAIT", numberOfReplicas.toString(), timeout.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js
var require_LATENCY_DOCTOR = __commonJS({
  "node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["LATENCY", "DOCTOR"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/client/dist/lib/client/commands.js
var require_commands2 = __commonJS({
  "node_modules/@redis/client/dist/lib/client/commands.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands_1 = require_commands();
    var ACL_CAT = require_ACL_CAT();
    var ACL_DELUSER = require_ACL_DELUSER();
    var ACL_DRYRUN = require_ACL_DRYRUN();
    var ACL_GENPASS = require_ACL_GENPASS();
    var ACL_GETUSER = require_ACL_GETUSER();
    var ACL_LIST = require_ACL_LIST();
    var ACL_LOAD = require_ACL_LOAD();
    var ACL_LOG_RESET = require_ACL_LOG_RESET();
    var ACL_LOG = require_ACL_LOG();
    var ACL_SAVE = require_ACL_SAVE();
    var ACL_SETUSER = require_ACL_SETUSER();
    var ACL_USERS = require_ACL_USERS();
    var ACL_WHOAMI = require_ACL_WHOAMI();
    var ASKING = require_ASKING();
    var AUTH = require_AUTH();
    var BGREWRITEAOF = require_BGREWRITEAOF();
    var BGSAVE = require_BGSAVE();
    var CLIENT_CACHING = require_CLIENT_CACHING();
    var CLIENT_GETNAME = require_CLIENT_GETNAME();
    var CLIENT_GETREDIR = require_CLIENT_GETREDIR();
    var CLIENT_ID = require_CLIENT_ID();
    var CLIENT_KILL = require_CLIENT_KILL();
    var CLIENT_NO_EVICT = require_CLIENT_NO_EVICT();
    var CLIENT_PAUSE = require_CLIENT_PAUSE();
    var CLIENT_SETNAME = require_CLIENT_SETNAME();
    var CLIENT_TRACKING = require_CLIENT_TRACKING();
    var CLIENT_TRACKINGINFO = require_CLIENT_TRACKINGINFO();
    var CLIENT_UNPAUSE = require_CLIENT_UNPAUSE();
    var CLIENT_INFO = require_CLIENT_INFO();
    var CLUSTER_ADDSLOTS = require_CLUSTER_ADDSLOTS();
    var CLUSTER_ADDSLOTSRANGE = require_CLUSTER_ADDSLOTSRANGE();
    var CLUSTER_BUMPEPOCH = require_CLUSTER_BUMPEPOCH();
    var CLUSTER_COUNT_FAILURE_REPORTS = require_CLUSTER_COUNT_FAILURE_REPORTS();
    var CLUSTER_COUNTKEYSINSLOT = require_CLUSTER_COUNTKEYSINSLOT();
    var CLUSTER_DELSLOTS = require_CLUSTER_DELSLOTS();
    var CLUSTER_DELSLOTSRANGE = require_CLUSTER_DELSLOTSRANGE();
    var CLUSTER_FAILOVER = require_CLUSTER_FAILOVER();
    var CLUSTER_FLUSHSLOTS = require_CLUSTER_FLUSHSLOTS();
    var CLUSTER_FORGET = require_CLUSTER_FORGET();
    var CLUSTER_GETKEYSINSLOT = require_CLUSTER_GETKEYSINSLOT();
    var CLUSTER_INFO = require_CLUSTER_INFO();
    var CLUSTER_KEYSLOT = require_CLUSTER_KEYSLOT();
    var CLUSTER_LINKS = require_CLUSTER_LINKS();
    var CLUSTER_MEET = require_CLUSTER_MEET();
    var CLUSTER_MYID = require_CLUSTER_MYID();
    var CLUSTER_NODES = require_CLUSTER_NODES();
    var CLUSTER_REPLICAS = require_CLUSTER_REPLICAS();
    var CLUSTER_REPLICATE = require_CLUSTER_REPLICATE();
    var CLUSTER_RESET = require_CLUSTER_RESET();
    var CLUSTER_SAVECONFIG = require_CLUSTER_SAVECONFIG();
    var CLUSTER_SET_CONFIG_EPOCH = require_CLUSTER_SET_CONFIG_EPOCH();
    var CLUSTER_SETSLOT = require_CLUSTER_SETSLOT();
    var CLUSTER_SLOTS = require_CLUSTER_SLOTS();
    var COMMAND_COUNT = require_COMMAND_COUNT();
    var COMMAND_GETKEYS = require_COMMAND_GETKEYS();
    var COMMAND_GETKEYSANDFLAGS = require_COMMAND_GETKEYSANDFLAGS();
    var COMMAND_INFO = require_COMMAND_INFO();
    var COMMAND_LIST = require_COMMAND_LIST();
    var COMMAND = require_COMMAND();
    var CONFIG_GET = require_CONFIG_GET();
    var CONFIG_RESETASTAT = require_CONFIG_RESETSTAT();
    var CONFIG_REWRITE = require_CONFIG_REWRITE();
    var CONFIG_SET = require_CONFIG_SET();
    var DBSIZE = require_DBSIZE();
    var DISCARD = require_DISCARD();
    var ECHO = require_ECHO();
    var FAILOVER = require_FAILOVER();
    var FLUSHALL = require_FLUSHALL();
    var FLUSHDB = require_FLUSHDB();
    var FUNCTION_DELETE = require_FUNCTION_DELETE();
    var FUNCTION_DUMP = require_FUNCTION_DUMP();
    var FUNCTION_FLUSH = require_FUNCTION_FLUSH();
    var FUNCTION_KILL = require_FUNCTION_KILL();
    var FUNCTION_LIST_WITHCODE = require_FUNCTION_LIST_WITHCODE();
    var FUNCTION_LIST = require_FUNCTION_LIST();
    var FUNCTION_LOAD = require_FUNCTION_LOAD();
    var FUNCTION_RESTORE = require_FUNCTION_RESTORE();
    var FUNCTION_STATS = require_FUNCTION_STATS();
    var HELLO = require_HELLO();
    var INFO = require_INFO();
    var KEYS = require_KEYS();
    var LASTSAVE = require_LASTSAVE();
    var LOLWUT = require_LOLWUT();
    var MEMORY_DOCTOR = require_MEMORY_DOCTOR();
    var MEMORY_MALLOC_STATS = require_MEMORY_MALLOC_STATS();
    var MEMORY_PURGE = require_MEMORY_PURGE();
    var MEMORY_STATS = require_MEMORY_STATS();
    var MEMORY_USAGE = require_MEMORY_USAGE();
    var MODULE_LIST = require_MODULE_LIST();
    var MODULE_LOAD = require_MODULE_LOAD();
    var MODULE_UNLOAD = require_MODULE_UNLOAD();
    var MOVE = require_MOVE();
    var PING = require_PING();
    var PUBSUB_CHANNELS = require_PUBSUB_CHANNELS();
    var PUBSUB_NUMPAT = require_PUBSUB_NUMPAT();
    var PUBSUB_NUMSUB = require_PUBSUB_NUMSUB();
    var RANDOMKEY = require_RANDOMKEY();
    var READONLY = require_READONLY();
    var READWRITE = require_READWRITE();
    var REPLICAOF = require_REPLICAOF();
    var RESTORE_ASKING = require_RESTORE_ASKING();
    var ROLE = require_ROLE();
    var SAVE = require_SAVE();
    var SCAN = require_SCAN();
    var SCRIPT_DEBUG = require_SCRIPT_DEBUG();
    var SCRIPT_EXISTS = require_SCRIPT_EXISTS();
    var SCRIPT_FLUSH = require_SCRIPT_FLUSH();
    var SCRIPT_KILL = require_SCRIPT_KILL();
    var SCRIPT_LOAD = require_SCRIPT_LOAD();
    var SHUTDOWN = require_SHUTDOWN();
    var SWAPDB = require_SWAPDB();
    var TIME = require_TIME();
    var UNWATCH = require_UNWATCH();
    var WAIT = require_WAIT();
    var LATENCY_DOCTOR = require_LATENCY_DOCTOR();
    exports.default = {
      ...commands_1.default,
      ACL_CAT,
      aclCat: ACL_CAT,
      ACL_DELUSER,
      aclDelUser: ACL_DELUSER,
      ACL_DRYRUN,
      aclDryRun: ACL_DRYRUN,
      ACL_GENPASS,
      aclGenPass: ACL_GENPASS,
      ACL_GETUSER,
      aclGetUser: ACL_GETUSER,
      ACL_LIST,
      aclList: ACL_LIST,
      ACL_LOAD,
      aclLoad: ACL_LOAD,
      ACL_LOG_RESET,
      aclLogReset: ACL_LOG_RESET,
      ACL_LOG,
      aclLog: ACL_LOG,
      ACL_SAVE,
      aclSave: ACL_SAVE,
      ACL_SETUSER,
      aclSetUser: ACL_SETUSER,
      ACL_USERS,
      aclUsers: ACL_USERS,
      ACL_WHOAMI,
      aclWhoAmI: ACL_WHOAMI,
      ASKING,
      asking: ASKING,
      AUTH,
      auth: AUTH,
      BGREWRITEAOF,
      bgRewriteAof: BGREWRITEAOF,
      BGSAVE,
      bgSave: BGSAVE,
      CLIENT_CACHING,
      clientCaching: CLIENT_CACHING,
      CLIENT_GETNAME,
      clientGetName: CLIENT_GETNAME,
      CLIENT_GETREDIR,
      clientGetRedir: CLIENT_GETREDIR,
      CLIENT_ID,
      clientId: CLIENT_ID,
      CLIENT_KILL,
      clientKill: CLIENT_KILL,
      "CLIENT_NO-EVICT": CLIENT_NO_EVICT,
      clientNoEvict: CLIENT_NO_EVICT,
      CLIENT_PAUSE,
      clientPause: CLIENT_PAUSE,
      CLIENT_SETNAME,
      clientSetName: CLIENT_SETNAME,
      CLIENT_TRACKING,
      clientTracking: CLIENT_TRACKING,
      CLIENT_TRACKINGINFO,
      clientTrackingInfo: CLIENT_TRACKINGINFO,
      CLIENT_UNPAUSE,
      clientUnpause: CLIENT_UNPAUSE,
      CLIENT_INFO,
      clientInfo: CLIENT_INFO,
      CLUSTER_ADDSLOTS,
      clusterAddSlots: CLUSTER_ADDSLOTS,
      CLUSTER_ADDSLOTSRANGE,
      clusterAddSlotsRange: CLUSTER_ADDSLOTSRANGE,
      CLUSTER_BUMPEPOCH,
      clusterBumpEpoch: CLUSTER_BUMPEPOCH,
      CLUSTER_COUNT_FAILURE_REPORTS,
      clusterCountFailureReports: CLUSTER_COUNT_FAILURE_REPORTS,
      CLUSTER_COUNTKEYSINSLOT,
      clusterCountKeysInSlot: CLUSTER_COUNTKEYSINSLOT,
      CLUSTER_DELSLOTS,
      clusterDelSlots: CLUSTER_DELSLOTS,
      CLUSTER_DELSLOTSRANGE,
      clusterDelSlotsRange: CLUSTER_DELSLOTSRANGE,
      CLUSTER_FAILOVER,
      clusterFailover: CLUSTER_FAILOVER,
      CLUSTER_FLUSHSLOTS,
      clusterFlushSlots: CLUSTER_FLUSHSLOTS,
      CLUSTER_FORGET,
      clusterForget: CLUSTER_FORGET,
      CLUSTER_GETKEYSINSLOT,
      clusterGetKeysInSlot: CLUSTER_GETKEYSINSLOT,
      CLUSTER_INFO,
      clusterInfo: CLUSTER_INFO,
      CLUSTER_KEYSLOT,
      clusterKeySlot: CLUSTER_KEYSLOT,
      CLUSTER_LINKS,
      clusterLinks: CLUSTER_LINKS,
      CLUSTER_MEET,
      clusterMeet: CLUSTER_MEET,
      CLUSTER_MYID,
      clusterMyId: CLUSTER_MYID,
      CLUSTER_NODES,
      clusterNodes: CLUSTER_NODES,
      CLUSTER_REPLICAS,
      clusterReplicas: CLUSTER_REPLICAS,
      CLUSTER_REPLICATE,
      clusterReplicate: CLUSTER_REPLICATE,
      CLUSTER_RESET,
      clusterReset: CLUSTER_RESET,
      CLUSTER_SAVECONFIG,
      clusterSaveConfig: CLUSTER_SAVECONFIG,
      CLUSTER_SET_CONFIG_EPOCH,
      clusterSetConfigEpoch: CLUSTER_SET_CONFIG_EPOCH,
      CLUSTER_SETSLOT,
      clusterSetSlot: CLUSTER_SETSLOT,
      CLUSTER_SLOTS,
      clusterSlots: CLUSTER_SLOTS,
      COMMAND_COUNT,
      commandCount: COMMAND_COUNT,
      COMMAND_GETKEYS,
      commandGetKeys: COMMAND_GETKEYS,
      COMMAND_GETKEYSANDFLAGS,
      commandGetKeysAndFlags: COMMAND_GETKEYSANDFLAGS,
      COMMAND_INFO,
      commandInfo: COMMAND_INFO,
      COMMAND_LIST,
      commandList: COMMAND_LIST,
      COMMAND,
      command: COMMAND,
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_RESETASTAT,
      configResetStat: CONFIG_RESETASTAT,
      CONFIG_REWRITE,
      configRewrite: CONFIG_REWRITE,
      CONFIG_SET,
      configSet: CONFIG_SET,
      DBSIZE,
      dbSize: DBSIZE,
      DISCARD,
      discard: DISCARD,
      ECHO,
      echo: ECHO,
      FAILOVER,
      failover: FAILOVER,
      FLUSHALL,
      flushAll: FLUSHALL,
      FLUSHDB,
      flushDb: FLUSHDB,
      FUNCTION_DELETE,
      functionDelete: FUNCTION_DELETE,
      FUNCTION_DUMP,
      functionDump: FUNCTION_DUMP,
      FUNCTION_FLUSH,
      functionFlush: FUNCTION_FLUSH,
      FUNCTION_KILL,
      functionKill: FUNCTION_KILL,
      FUNCTION_LIST_WITHCODE,
      functionListWithCode: FUNCTION_LIST_WITHCODE,
      FUNCTION_LIST,
      functionList: FUNCTION_LIST,
      FUNCTION_LOAD,
      functionLoad: FUNCTION_LOAD,
      FUNCTION_RESTORE,
      functionRestore: FUNCTION_RESTORE,
      FUNCTION_STATS,
      functionStats: FUNCTION_STATS,
      HELLO,
      hello: HELLO,
      INFO,
      info: INFO,
      KEYS,
      keys: KEYS,
      LASTSAVE,
      lastSave: LASTSAVE,
      LATENCY_DOCTOR,
      latencyDoctor: LATENCY_DOCTOR,
      LOLWUT,
      lolwut: LOLWUT,
      MEMORY_DOCTOR,
      memoryDoctor: MEMORY_DOCTOR,
      "MEMORY_MALLOC-STATS": MEMORY_MALLOC_STATS,
      memoryMallocStats: MEMORY_MALLOC_STATS,
      MEMORY_PURGE,
      memoryPurge: MEMORY_PURGE,
      MEMORY_STATS,
      memoryStats: MEMORY_STATS,
      MEMORY_USAGE,
      memoryUsage: MEMORY_USAGE,
      MODULE_LIST,
      moduleList: MODULE_LIST,
      MODULE_LOAD,
      moduleLoad: MODULE_LOAD,
      MODULE_UNLOAD,
      moduleUnload: MODULE_UNLOAD,
      MOVE,
      move: MOVE,
      PING,
      ping: PING,
      PUBSUB_CHANNELS,
      pubSubChannels: PUBSUB_CHANNELS,
      PUBSUB_NUMPAT,
      pubSubNumPat: PUBSUB_NUMPAT,
      PUBSUB_NUMSUB,
      pubSubNumSub: PUBSUB_NUMSUB,
      RANDOMKEY,
      randomKey: RANDOMKEY,
      READONLY,
      readonly: READONLY,
      READWRITE,
      readwrite: READWRITE,
      REPLICAOF,
      replicaOf: REPLICAOF,
      "RESTORE-ASKING": RESTORE_ASKING,
      restoreAsking: RESTORE_ASKING,
      ROLE,
      role: ROLE,
      SAVE,
      save: SAVE,
      SCAN,
      scan: SCAN,
      SCRIPT_DEBUG,
      scriptDebug: SCRIPT_DEBUG,
      SCRIPT_EXISTS,
      scriptExists: SCRIPT_EXISTS,
      SCRIPT_FLUSH,
      scriptFlush: SCRIPT_FLUSH,
      SCRIPT_KILL,
      scriptKill: SCRIPT_KILL,
      SCRIPT_LOAD,
      scriptLoad: SCRIPT_LOAD,
      SHUTDOWN,
      shutdown: SHUTDOWN,
      SWAPDB,
      swapDb: SWAPDB,
      TIME,
      time: TIME,
      UNWATCH,
      unwatch: UNWATCH,
      WAIT,
      wait: WAIT
    };
  }
});

// browser-external:events
var require_events = __commonJS({
  "browser-external:events"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "events" has been externalized for browser compatibility. Cannot access "events.${key}" in client code.`);
        }
      }
    }));
  }
});

// browser-external:net
var require_net = __commonJS({
  "browser-external:net"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "net" has been externalized for browser compatibility. Cannot access "net.${key}" in client code.`);
        }
      }
    }));
  }
});

// browser-external:tls
var require_tls = __commonJS({
  "browser-external:tls"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "tls" has been externalized for browser compatibility. Cannot access "tls.${key}" in client code.`);
        }
      }
    }));
  }
});

// node_modules/@redis/client/dist/lib/errors.js
var require_errors = __commonJS({
  "node_modules/@redis/client/dist/lib/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ErrorReply = exports.ReconnectStrategyError = exports.RootNodesUnavailableError = exports.SocketClosedUnexpectedlyError = exports.DisconnectsClientError = exports.ClientOfflineError = exports.ClientClosedError = exports.ConnectionTimeoutError = exports.WatchError = exports.AbortError = void 0;
    var AbortError = class extends Error {
      constructor() {
        super("The command was aborted");
      }
    };
    exports.AbortError = AbortError;
    var WatchError = class extends Error {
      constructor() {
        super("One (or more) of the watched keys has been changed");
      }
    };
    exports.WatchError = WatchError;
    var ConnectionTimeoutError = class extends Error {
      constructor() {
        super("Connection timeout");
      }
    };
    exports.ConnectionTimeoutError = ConnectionTimeoutError;
    var ClientClosedError = class extends Error {
      constructor() {
        super("The client is closed");
      }
    };
    exports.ClientClosedError = ClientClosedError;
    var ClientOfflineError = class extends Error {
      constructor() {
        super("The client is offline");
      }
    };
    exports.ClientOfflineError = ClientOfflineError;
    var DisconnectsClientError = class extends Error {
      constructor() {
        super("Disconnects client");
      }
    };
    exports.DisconnectsClientError = DisconnectsClientError;
    var SocketClosedUnexpectedlyError = class extends Error {
      constructor() {
        super("Socket closed unexpectedly");
      }
    };
    exports.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;
    var RootNodesUnavailableError = class extends Error {
      constructor() {
        super("All the root nodes are unavailable");
      }
    };
    exports.RootNodesUnavailableError = RootNodesUnavailableError;
    var ReconnectStrategyError = class extends Error {
      constructor(originalError, socketError) {
        super(originalError.message);
        Object.defineProperty(this, "originalError", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "socketError", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.originalError = originalError;
        this.socketError = socketError;
      }
    };
    exports.ReconnectStrategyError = ReconnectStrategyError;
    var ErrorReply = class extends Error {
      constructor(message) {
        super(message);
        this.stack = void 0;
      }
    };
    exports.ErrorReply = ErrorReply;
  }
});

// node_modules/@redis/client/dist/lib/utils.js
var require_utils = __commonJS({
  "node_modules/@redis/client/dist/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.promiseTimeout = void 0;
    function promiseTimeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    exports.promiseTimeout = promiseTimeout;
  }
});

// node_modules/@redis/client/dist/lib/client/socket.js
var require_socket = __commonJS({
  "node_modules/@redis/client/dist/lib/client/socket.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisSocket_instances;
    var _a;
    var _RedisSocket_initiateOptions;
    var _RedisSocket_isTlsSocket;
    var _RedisSocket_initiator;
    var _RedisSocket_options;
    var _RedisSocket_socket;
    var _RedisSocket_isOpen;
    var _RedisSocket_isReady;
    var _RedisSocket_writableNeedDrain;
    var _RedisSocket_isSocketUnrefed;
    var _RedisSocket_connect;
    var _RedisSocket_createSocket;
    var _RedisSocket_createNetSocket;
    var _RedisSocket_createTlsSocket;
    var _RedisSocket_onSocketError;
    var _RedisSocket_disconnect;
    var _RedisSocket_isCorked;
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require_events();
    var net = require_net();
    var tls = require_tls();
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var RedisSocket = class extends events_1.EventEmitter {
      constructor(initiator, options) {
        super();
        _RedisSocket_instances.add(this);
        _RedisSocket_initiator.set(this, void 0);
        _RedisSocket_options.set(this, void 0);
        _RedisSocket_socket.set(this, void 0);
        _RedisSocket_isOpen.set(this, false);
        _RedisSocket_isReady.set(this, false);
        _RedisSocket_writableNeedDrain.set(this, false);
        _RedisSocket_isSocketUnrefed.set(this, false);
        _RedisSocket_isCorked.set(this, false);
        __classPrivateFieldSet(this, _RedisSocket_initiator, initiator, "f");
        __classPrivateFieldSet(this, _RedisSocket_options, __classPrivateFieldGet(RedisSocket, _a, "m", _RedisSocket_initiateOptions).call(RedisSocket, options), "f");
      }
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisSocket_isOpen, "f");
      }
      get isReady() {
        return __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
      }
      get writableNeedDrain() {
        return __classPrivateFieldGet(this, _RedisSocket_writableNeedDrain, "f");
      }
      reconnectStrategy(retries) {
        if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy) {
          try {
            const retryIn = __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy(retries);
            if (typeof retryIn !== "number" && !(retryIn instanceof Error)) {
              throw new TypeError("Reconnect strategy should return `number | Error`");
            }
            return retryIn;
          } catch (err) {
            this.emit("error", err);
          }
        }
        return Math.min(retries * 50, 500);
      }
      async connect() {
        if (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new Error("Socket already opened");
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, true, "f");
        return __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this);
      }
      writeCommand(args) {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
          throw new errors_1.ClientClosedError();
        }
        for (const toWrite of args) {
          __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, !__classPrivateFieldGet(this, _RedisSocket_socket, "f").write(toWrite), "f");
        }
      }
      disconnect() {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
      }
      async quit(fn) {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        await fn();
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
      }
      cork() {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f") || __classPrivateFieldGet(this, _RedisSocket_isCorked, "f")) {
          return;
        }
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").cork();
        __classPrivateFieldSet(this, _RedisSocket_isCorked, true, "f");
        queueMicrotask(() => {
          var _a2;
          (_a2 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) == null ? void 0 : _a2.uncork();
          __classPrivateFieldSet(this, _RedisSocket_isCorked, false, "f");
        });
      }
      ref() {
        var _a2;
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, false, "f");
        (_a2 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) == null ? void 0 : _a2.ref();
      }
      unref() {
        var _a2;
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, true, "f");
        (_a2 = __classPrivateFieldGet(this, _RedisSocket_socket, "f")) == null ? void 0 : _a2.unref();
      }
    };
    exports.default = RedisSocket;
    _a = RedisSocket, _RedisSocket_initiator = /* @__PURE__ */ new WeakMap(), _RedisSocket_options = /* @__PURE__ */ new WeakMap(), _RedisSocket_socket = /* @__PURE__ */ new WeakMap(), _RedisSocket_isOpen = /* @__PURE__ */ new WeakMap(), _RedisSocket_isReady = /* @__PURE__ */ new WeakMap(), _RedisSocket_writableNeedDrain = /* @__PURE__ */ new WeakMap(), _RedisSocket_isSocketUnrefed = /* @__PURE__ */ new WeakMap(), _RedisSocket_isCorked = /* @__PURE__ */ new WeakMap(), _RedisSocket_instances = /* @__PURE__ */ new WeakSet(), _RedisSocket_initiateOptions = function _RedisSocket_initiateOptions2(options) {
      var _a2, _b2, _c2, _d, _e;
      var _b, _c;
      options != null ? options : options = {};
      if (!options.path) {
        (_a2 = (_b = options).port) != null ? _a2 : _b.port = 6379;
        (_b2 = (_c = options).host) != null ? _b2 : _c.host = "localhost";
      }
      (_c2 = options.connectTimeout) != null ? _c2 : options.connectTimeout = 5e3;
      (_d = options.keepAlive) != null ? _d : options.keepAlive = 5e3;
      (_e = options.noDelay) != null ? _e : options.noDelay = true;
      return options;
    }, _RedisSocket_isTlsSocket = function _RedisSocket_isTlsSocket2(options) {
      return options.tls === true;
    }, _RedisSocket_connect = async function _RedisSocket_connect2(hadError) {
      let retries = 0;
      do {
        if (retries > 0 || hadError) {
          this.emit("reconnecting");
        }
        try {
          __classPrivateFieldSet(this, _RedisSocket_socket, await __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createSocket).call(this), "f");
          __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
          this.emit("connect");
          try {
            await __classPrivateFieldGet(this, _RedisSocket_initiator, "f").call(this);
          } catch (err) {
            __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
            __classPrivateFieldSet(this, _RedisSocket_socket, void 0, "f");
            throw err;
          }
          __classPrivateFieldSet(this, _RedisSocket_isReady, true, "f");
          this.emit("ready");
        } catch (err) {
          const retryIn = this.reconnectStrategy(retries);
          if (retryIn instanceof Error) {
            __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
            this.emit("error", err);
            throw new errors_1.ReconnectStrategyError(retryIn, err);
          }
          this.emit("error", err);
          await (0, utils_1.promiseTimeout)(retryIn);
        }
        retries++;
      } while (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && !__classPrivateFieldGet(this, _RedisSocket_isReady, "f"));
    }, _RedisSocket_createSocket = function _RedisSocket_createSocket2() {
      return new Promise((resolve, reject) => {
        const { connectEvent, socket } = __classPrivateFieldGet(RedisSocket, _a, "m", _RedisSocket_isTlsSocket).call(RedisSocket, __classPrivateFieldGet(this, _RedisSocket_options, "f")) ? __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createTlsSocket).call(this) : __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createNetSocket).call(this);
        if (__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout) {
          socket.setTimeout(__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout, () => socket.destroy(new errors_1.ConnectionTimeoutError()));
        }
        if (__classPrivateFieldGet(this, _RedisSocket_isSocketUnrefed, "f")) {
          socket.unref();
        }
        socket.setNoDelay(__classPrivateFieldGet(this, _RedisSocket_options, "f").noDelay).once("error", reject).once(connectEvent, () => {
          socket.setTimeout(0).setKeepAlive(__classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive !== false, __classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive || 0).off("error", reject).once("error", (err) => __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, err)).once("close", (hadError) => {
            if (!hadError && __classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && __classPrivateFieldGet(this, _RedisSocket_socket, "f") === socket) {
              __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, new errors_1.SocketClosedUnexpectedlyError());
            }
          }).on("drain", () => {
            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
            this.emit("drain");
          }).on("data", (data) => this.emit("data", data));
          resolve(socket);
        });
      });
    }, _RedisSocket_createNetSocket = function _RedisSocket_createNetSocket2() {
      return {
        connectEvent: "connect",
        socket: net.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f"))
      };
    }, _RedisSocket_createTlsSocket = function _RedisSocket_createTlsSocket2() {
      return {
        connectEvent: "secureConnect",
        socket: tls.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f"))
      };
    }, _RedisSocket_onSocketError = function _RedisSocket_onSocketError2(err) {
      __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
      this.emit("error", err);
      if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f"))
        return;
      __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this, true).catch(() => {
      });
    }, _RedisSocket_disconnect = function _RedisSocket_disconnect2() {
      __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
      if (__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
        __classPrivateFieldSet(this, _RedisSocket_socket, void 0, "f");
      }
      this.emit("end");
    };
  }
});

// node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module) {
    "use strict";
    module.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module) {
    "use strict";
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self2.push(arguments[i]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js
var require_buffer = __commonJS({
  "node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BufferComposer = class {
      constructor() {
        Object.defineProperty(this, "chunks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
      }
      write(buffer) {
        this.chunks.push(buffer);
      }
      end(buffer) {
        this.write(buffer);
        return Buffer.concat(this.chunks.splice(0));
      }
      reset() {
        this.chunks = [];
      }
    };
    exports.default = BufferComposer;
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer2 = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
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
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            Buffer2.from(buf).copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
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
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
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
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
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
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
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
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
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
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
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
      var out = "";
      for (var i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
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
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
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
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer2();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js
var require_string = __commonJS({
  "node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var string_decoder_1 = require_string_decoder();
    var StringComposer = class {
      constructor() {
        Object.defineProperty(this, "decoder", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new string_decoder_1.StringDecoder()
        });
        Object.defineProperty(this, "string", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: ""
        });
      }
      write(buffer) {
        this.string += this.decoder.write(buffer);
      }
      end(buffer) {
        const string = this.string + this.decoder.end(buffer);
        this.string = "";
        return string;
      }
      reset() {
        this.string = "";
      }
    };
    exports.default = StringComposer;
  }
});

// node_modules/@redis/client/dist/lib/client/RESP2/decoder.js
var require_decoder = __commonJS({
  "node_modules/@redis/client/dist/lib/client/RESP2/decoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors_1 = require_errors();
    var buffer_1 = require_buffer();
    var string_1 = require_string();
    var Types;
    (function(Types2) {
      Types2[Types2["SIMPLE_STRING"] = 43] = "SIMPLE_STRING";
      Types2[Types2["ERROR"] = 45] = "ERROR";
      Types2[Types2["INTEGER"] = 58] = "INTEGER";
      Types2[Types2["BULK_STRING"] = 36] = "BULK_STRING";
      Types2[Types2["ARRAY"] = 42] = "ARRAY";
    })(Types || (Types = {}));
    var ASCII;
    (function(ASCII2) {
      ASCII2[ASCII2["CR"] = 13] = "CR";
      ASCII2[ASCII2["ZERO"] = 48] = "ZERO";
      ASCII2[ASCII2["MINUS"] = 45] = "MINUS";
    })(ASCII || (ASCII = {}));
    var RESP2Decoder = class {
      constructor(options) {
        Object.defineProperty(this, "options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: options
        });
        Object.defineProperty(this, "cursor", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 0
        });
        Object.defineProperty(this, "type", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "bufferComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new buffer_1.default()
        });
        Object.defineProperty(this, "stringComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new string_1.default()
        });
        Object.defineProperty(this, "currentStringComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.stringComposer
        });
        Object.defineProperty(this, "integer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 0
        });
        Object.defineProperty(this, "isNegativeInteger", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "bulkStringRemainingLength", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "arraysInProcess", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
        Object.defineProperty(this, "initializeArray", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        Object.defineProperty(this, "arrayItemType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
      }
      reset() {
        this.cursor = 0;
        this.type = void 0;
        this.bufferComposer.reset();
        this.stringComposer.reset();
        this.currentStringComposer = this.stringComposer;
      }
      write(chunk) {
        while (this.cursor < chunk.length) {
          if (!this.type) {
            this.currentStringComposer = this.options.returnStringsAsBuffers() ? this.bufferComposer : this.stringComposer;
            this.type = chunk[this.cursor];
            if (++this.cursor >= chunk.length)
              break;
          }
          const reply = this.parseType(chunk, this.type);
          if (reply === void 0)
            break;
          this.type = void 0;
          this.options.onReply(reply);
        }
        this.cursor -= chunk.length;
      }
      parseType(chunk, type, arraysToKeep) {
        switch (type) {
          case Types.SIMPLE_STRING:
            return this.parseSimpleString(chunk);
          case Types.ERROR:
            return this.parseError(chunk);
          case Types.INTEGER:
            return this.parseInteger(chunk);
          case Types.BULK_STRING:
            return this.parseBulkString(chunk);
          case Types.ARRAY:
            return this.parseArray(chunk, arraysToKeep);
        }
      }
      compose(chunk, composer) {
        for (let i = this.cursor; i < chunk.length; i++) {
          if (chunk[i] === ASCII.CR) {
            const reply = composer.end(chunk.subarray(this.cursor, i));
            this.cursor = i + 2;
            return reply;
          }
        }
        const toWrite = chunk.subarray(this.cursor);
        composer.write(toWrite);
        this.cursor = chunk.length;
      }
      parseSimpleString(chunk) {
        return this.compose(chunk, this.currentStringComposer);
      }
      parseError(chunk) {
        const message = this.compose(chunk, this.stringComposer);
        if (message !== void 0) {
          return new errors_1.ErrorReply(message);
        }
      }
      parseInteger(chunk) {
        if (this.isNegativeInteger === void 0) {
          this.isNegativeInteger = chunk[this.cursor] === ASCII.MINUS;
          if (this.isNegativeInteger && ++this.cursor === chunk.length)
            return;
        }
        do {
          const byte = chunk[this.cursor];
          if (byte === ASCII.CR) {
            const integer = this.isNegativeInteger ? -this.integer : this.integer;
            this.integer = 0;
            this.isNegativeInteger = void 0;
            this.cursor += 2;
            return integer;
          }
          this.integer = this.integer * 10 + byte - ASCII.ZERO;
        } while (++this.cursor < chunk.length);
      }
      parseBulkString(chunk) {
        if (this.bulkStringRemainingLength === void 0) {
          const length = this.parseInteger(chunk);
          if (length === void 0)
            return;
          if (length === -1)
            return null;
          this.bulkStringRemainingLength = length;
          if (this.cursor >= chunk.length)
            return;
        }
        const end = this.cursor + this.bulkStringRemainingLength;
        if (chunk.length >= end) {
          const reply = this.currentStringComposer.end(chunk.subarray(this.cursor, end));
          this.bulkStringRemainingLength = void 0;
          this.cursor = end + 2;
          return reply;
        }
        const toWrite = chunk.subarray(this.cursor);
        this.currentStringComposer.write(toWrite);
        this.bulkStringRemainingLength -= toWrite.length;
        this.cursor = chunk.length;
      }
      parseArray(chunk, arraysToKeep = 0) {
        if (this.initializeArray || this.arraysInProcess.length === arraysToKeep) {
          const length = this.parseInteger(chunk);
          if (length === void 0) {
            this.initializeArray = true;
            return void 0;
          }
          this.initializeArray = false;
          this.arrayItemType = void 0;
          if (length === -1) {
            return this.returnArrayReply(null, arraysToKeep);
          } else if (length === 0) {
            return this.returnArrayReply([], arraysToKeep);
          }
          this.arraysInProcess.push({
            array: new Array(length),
            pushCounter: 0
          });
        }
        while (this.cursor < chunk.length) {
          if (!this.arrayItemType) {
            this.arrayItemType = chunk[this.cursor];
            if (++this.cursor >= chunk.length)
              break;
          }
          const item = this.parseType(chunk, this.arrayItemType, arraysToKeep + 1);
          if (item === void 0)
            break;
          this.arrayItemType = void 0;
          const reply = this.pushArrayItem(item, arraysToKeep);
          if (reply !== void 0)
            return reply;
        }
      }
      returnArrayReply(reply, arraysToKeep) {
        if (this.arraysInProcess.length <= arraysToKeep)
          return reply;
        return this.pushArrayItem(reply, arraysToKeep);
      }
      pushArrayItem(item, arraysToKeep) {
        const to = this.arraysInProcess[this.arraysInProcess.length - 1];
        to.array[to.pushCounter] = item;
        if (++to.pushCounter === to.array.length) {
          return this.returnArrayReply(this.arraysInProcess.pop().array, arraysToKeep);
        }
      }
    };
    exports.default = RESP2Decoder;
  }
});

// node_modules/@redis/client/dist/lib/client/RESP2/encoder.js
var require_encoder = __commonJS({
  "node_modules/@redis/client/dist/lib/client/RESP2/encoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CRLF = "\r\n";
    function encodeCommand(args) {
      const toWrite = [];
      let strings = "*" + args.length + CRLF;
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (typeof arg === "string") {
          strings += "$" + Buffer.byteLength(arg) + CRLF + arg + CRLF;
        } else if (arg instanceof Buffer) {
          toWrite.push(strings + "$" + arg.length.toString() + CRLF, arg);
          strings = CRLF;
        } else {
          throw new TypeError("Invalid argument type");
        }
      }
      toWrite.push(strings);
      return toWrite;
    }
    exports.default = encodeCommand;
  }
});

// node_modules/@redis/client/dist/lib/client/commands-queue.js
var require_commands_queue = __commonJS({
  "node_modules/@redis/client/dist/lib/client/commands-queue.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisCommandsQueue_instances;
    var _a;
    var _RedisCommandsQueue_flushQueue;
    var _RedisCommandsQueue_emitPubSubMessage;
    var _RedisCommandsQueue_maxLength;
    var _RedisCommandsQueue_waitingToBeSent;
    var _RedisCommandsQueue_waitingForReply;
    var _RedisCommandsQueue_pubSubState;
    var _RedisCommandsQueue_PUB_SUB_MESSAGES;
    var _RedisCommandsQueue_chainInExecution;
    var _RedisCommandsQueue_decoder;
    var _RedisCommandsQueue_pushPubSubCommand;
    var _RedisCommandsQueue_updatePubSubActiveState;
    var _RedisCommandsQueue_handlePubSubReply;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PubSubUnsubscribeCommands = exports.PubSubSubscribeCommands = void 0;
    var LinkedList = require_yallist();
    var errors_1 = require_errors();
    var decoder_1 = require_decoder();
    var encoder_1 = require_encoder();
    var PubSubSubscribeCommands;
    (function(PubSubSubscribeCommands2) {
      PubSubSubscribeCommands2["SUBSCRIBE"] = "SUBSCRIBE";
      PubSubSubscribeCommands2["PSUBSCRIBE"] = "PSUBSCRIBE";
    })(PubSubSubscribeCommands = exports.PubSubSubscribeCommands || (exports.PubSubSubscribeCommands = {}));
    var PubSubUnsubscribeCommands;
    (function(PubSubUnsubscribeCommands2) {
      PubSubUnsubscribeCommands2["UNSUBSCRIBE"] = "UNSUBSCRIBE";
      PubSubUnsubscribeCommands2["PUNSUBSCRIBE"] = "PUNSUBSCRIBE";
    })(PubSubUnsubscribeCommands = exports.PubSubUnsubscribeCommands || (exports.PubSubUnsubscribeCommands = {}));
    var RedisCommandsQueue = class {
      constructor(maxLength) {
        _RedisCommandsQueue_instances.add(this);
        _RedisCommandsQueue_maxLength.set(this, void 0);
        _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());
        _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());
        _RedisCommandsQueue_pubSubState.set(this, {
          isActive: false,
          subscribing: 0,
          subscribed: 0,
          unsubscribing: 0,
          listeners: {
            channels: /* @__PURE__ */ new Map(),
            patterns: /* @__PURE__ */ new Map()
          }
        });
        _RedisCommandsQueue_chainInExecution.set(this, void 0);
        _RedisCommandsQueue_decoder.set(this, new decoder_1.default({
          returnStringsAsBuffers: () => {
            var _a2;
            return !!((_a2 = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head) == null ? void 0 : _a2.value.returnBuffers) || __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive;
          },
          onReply: (reply) => {
            if (__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_handlePubSubReply).call(this, reply)) {
              return;
            } else if (!__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
              throw new Error("Got an unexpected reply from Redis");
            }
            const { resolve, reject } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();
            if (reply instanceof errors_1.ErrorReply) {
              reject(reply);
            } else {
              resolve(reply);
            }
          }
        }));
        __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
      }
      addCommand(args, options) {
        var _a2;
        if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive && !(options == null ? void 0 : options.ignorePubSubMode)) {
          return Promise.reject(new Error("Cannot send commands in PubSub mode"));
        } else if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
          return Promise.reject(new Error("The queue is full"));
        } else if ((_a2 = options == null ? void 0 : options.signal) == null ? void 0 : _a2.aborted) {
          return Promise.reject(new errors_1.AbortError());
        }
        return new Promise((resolve, reject) => {
          const node = new LinkedList.Node({
            args,
            chainId: options == null ? void 0 : options.chainId,
            returnBuffers: options == null ? void 0 : options.returnBuffers,
            resolve,
            reject
          });
          if (options == null ? void 0 : options.signal) {
            const listener = () => {
              __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);
              node.value.reject(new errors_1.AbortError());
            };
            node.value.abort = {
              signal: options.signal,
              listener
            };
            options.signal.addEventListener("abort", listener, {
              once: true
            });
          }
          if (options == null ? void 0 : options.asap) {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
          } else {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
          }
        });
      }
      subscribe(command, channels, listener, returnBuffers) {
        const channelsToSubscribe = [], listenersMap = command === PubSubSubscribeCommands.SUBSCRIBE ? __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels : __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns;
        for (const channel of Array.isArray(channels) ? channels : [channels]) {
          const channelString = typeof channel === "string" ? channel : channel.toString();
          let listeners = listenersMap.get(channelString);
          if (!listeners) {
            listeners = {
              buffers: /* @__PURE__ */ new Set(),
              strings: /* @__PURE__ */ new Set()
            };
            listenersMap.set(channelString, listeners);
            channelsToSubscribe.push(channel);
          }
          (returnBuffers ? listeners.buffers : listeners.strings).add(listener);
        }
        if (!channelsToSubscribe.length) {
          return Promise.resolve();
        }
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToSubscribe);
      }
      unsubscribe(command, channels, listener, returnBuffers) {
        const listeners = command === PubSubUnsubscribeCommands.UNSUBSCRIBE ? __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels : __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns;
        if (!channels) {
          const size = listeners.size;
          listeners.clear();
          return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, size);
        }
        const channelsToUnsubscribe = [];
        for (const channel of Array.isArray(channels) ? channels : [channels]) {
          const sets = listeners.get(channel);
          if (!sets)
            continue;
          let shouldUnsubscribe;
          if (listener) {
            (returnBuffers ? sets.buffers : sets.strings).delete(listener);
            shouldUnsubscribe = !sets.buffers.size && !sets.strings.size;
          } else {
            shouldUnsubscribe = true;
          }
          if (shouldUnsubscribe) {
            channelsToUnsubscribe.push(channel);
            listeners.delete(channel);
          }
        }
        if (!channelsToUnsubscribe.length) {
          return Promise.resolve();
        }
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command, channelsToUnsubscribe);
      }
      resubscribe() {
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribed = 0;
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribing = 0;
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").unsubscribing = 0;
        const promises = [], { channels, patterns } = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners;
        if (channels.size) {
          promises.push(__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.SUBSCRIBE, [...channels.keys()]));
        }
        if (patterns.size) {
          promises.push(__classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, PubSubSubscribeCommands.PSUBSCRIBE, [...patterns.keys()]));
        }
        if (promises.length) {
          return Promise.all(promises);
        }
      }
      getCommandToSend() {
        const toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        if (!toSend)
          return;
        let encoded;
        try {
          encoded = (0, encoder_1.default)(toSend.args);
        } catch (err) {
          toSend.reject(err);
          return;
        }
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
          resolve: toSend.resolve,
          reject: toSend.reject,
          channelsCounter: toSend.channelsCounter,
          returnBuffers: toSend.returnBuffers
        });
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend.chainId, "f");
        return encoded;
      }
      onReplyChunk(chunk) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").write(chunk);
      }
      flushWaitingForReply(err) {
        var _a2;
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive = false;
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f"))
          return;
        while (((_a2 = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head) == null ? void 0 : _a2.value.chainId) === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
          __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        }
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, void 0, "f");
      }
      flushAll(err) {
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
      }
    };
    exports.default = RedisCommandsQueue;
    _a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_waitingToBeSent = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_waitingForReply = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_pubSubState = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_chainInExecution = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_decoder = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_instances = /* @__PURE__ */ new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue2(queue, err) {
      while (queue.length) {
        queue.shift().reject(err);
      }
    }, _RedisCommandsQueue_emitPubSubMessage = function _RedisCommandsQueue_emitPubSubMessage2(listenersMap, message, channel, pattern) {
      const keyString = (pattern != null ? pattern : channel).toString(), listeners = listenersMap.get(keyString);
      if (!listeners)
        return;
      for (const listener of listeners.buffers) {
        listener(message, channel);
      }
      if (!listeners.strings.size)
        return;
      const channelString = pattern ? channel.toString() : keyString, messageString = channelString === "__redis__:invalidate" ? message === null ? null : message.map((x) => x.toString()) : message.toString();
      for (const listener of listeners.strings) {
        listener(messageString, channelString);
      }
    }, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand2(command, channels) {
      return new Promise((resolve, reject) => {
        const isSubscribe = command === PubSubSubscribeCommands.SUBSCRIBE || command === PubSubSubscribeCommands.PSUBSCRIBE, inProgressKey = isSubscribe ? "subscribing" : "unsubscribing", commandArgs = [command];
        let channelsCounter;
        if (typeof channels === "number") {
          channelsCounter = channels;
        } else {
          commandArgs.push(...channels);
          channelsCounter = channels.length;
        }
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive = true;
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")[inProgressKey] += channelsCounter;
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").push({
          args: commandArgs,
          channelsCounter,
          returnBuffers: true,
          resolve: () => {
            __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")[inProgressKey] -= channelsCounter;
            __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribed += channelsCounter * (isSubscribe ? 1 : -1);
            __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_updatePubSubActiveState).call(this);
            resolve();
          },
          reject: (err) => {
            __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f")[inProgressKey] -= channelsCounter * (isSubscribe ? 1 : -1);
            __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_updatePubSubActiveState).call(this);
            reject(err);
          }
        });
      });
    }, _RedisCommandsQueue_updatePubSubActiveState = function _RedisCommandsQueue_updatePubSubActiveState2() {
      if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribed && !__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribing && !__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").subscribed) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive = false;
      }
    }, _RedisCommandsQueue_handlePubSubReply = function _RedisCommandsQueue_handlePubSubReply2(reply) {
      if (!__classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").isActive || !Array.isArray(reply))
        return false;
      if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).message.equals(reply[0])) {
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.channels, reply[2], reply[1]);
      } else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pMessage.equals(reply[0])) {
        __classPrivateFieldGet(RedisCommandsQueue, _a, "m", _RedisCommandsQueue_emitPubSubMessage).call(RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSubState, "f").listeners.patterns, reply[3], reply[2], reply[1]);
      } else if (__classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).subscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pSubscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).unsubscribe.equals(reply[0]) || __classPrivateFieldGet(RedisCommandsQueue, _a, "f", _RedisCommandsQueue_PUB_SUB_MESSAGES).pUnsubscribe.equals(reply[0])) {
        if (--__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head.value.channelsCounter === 0) {
          __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift().resolve();
        }
      }
      return true;
    };
    _RedisCommandsQueue_PUB_SUB_MESSAGES = { value: {
      message: Buffer.from("message"),
      pMessage: Buffer.from("pmessage"),
      subscribe: Buffer.from("subscribe"),
      pSubscribe: Buffer.from("psubscribe"),
      unsubscribe: Buffer.from("unsubscribe"),
      pUnsubscribe: Buffer.from("punsubscribe")
    } };
  }
});

// node_modules/@redis/client/dist/lib/command-options.js
var require_command_options = __commonJS({
  "node_modules/@redis/client/dist/lib/command-options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCommandOptions = exports.commandOptions = void 0;
    var symbol = Symbol("Command Options");
    function commandOptions(options) {
      options[symbol] = true;
      return options;
    }
    exports.commandOptions = commandOptions;
    function isCommandOptions(options) {
      return (options == null ? void 0 : options[symbol]) === true;
    }
    exports.isCommandOptions = isCommandOptions;
  }
});

// node_modules/@redis/client/dist/lib/commander.js
var require_commander = __commonJS({
  "node_modules/@redis/client/dist/lib/commander.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fCallArguments = exports.transformCommandReply = exports.transformLegacyCommandArguments = exports.transformCommandArguments = exports.attachExtensions = exports.attachCommands = void 0;
    var command_options_1 = require_command_options();
    function attachCommands({ BaseClass, commands, executor }) {
      for (const [name, command] of Object.entries(commands)) {
        BaseClass.prototype[name] = function(...args) {
          return executor.call(this, command, args, name);
        };
      }
    }
    exports.attachCommands = attachCommands;
    function attachExtensions(config) {
      let Commander;
      if (config.modules) {
        Commander = attachWithNamespaces({
          BaseClass: config.BaseClass,
          namespaces: config.modules,
          executor: config.modulesExecutor
        });
      }
      if (config.functions) {
        Commander = attachWithNamespaces({
          BaseClass: Commander != null ? Commander : config.BaseClass,
          namespaces: config.functions,
          executor: config.functionsExecutor
        });
      }
      if (config.scripts) {
        Commander != null ? Commander : Commander = class extends config.BaseClass {
        };
        attachCommands({
          BaseClass: Commander,
          commands: config.scripts,
          executor: config.scriptsExecutor
        });
      }
      return Commander != null ? Commander : config.BaseClass;
    }
    exports.attachExtensions = attachExtensions;
    function attachWithNamespaces({ BaseClass, namespaces, executor }) {
      const Commander = class extends BaseClass {
        constructor(...args) {
          super(...args);
          for (const namespace of Object.keys(namespaces)) {
            this[namespace] = Object.create(this[namespace], {
              self: {
                value: this
              }
            });
          }
        }
      };
      for (const [namespace, commands] of Object.entries(namespaces)) {
        Commander.prototype[namespace] = {};
        for (const [name, command] of Object.entries(commands)) {
          Commander.prototype[namespace][name] = function(...args) {
            return executor.call(this.self, command, args, name);
          };
        }
      }
      return Commander;
    }
    function transformCommandArguments(command, args) {
      let options;
      if ((0, command_options_1.isCommandOptions)(args[0])) {
        options = args[0];
        args = args.slice(1);
      }
      return {
        args: command.transformArguments(...args),
        options
      };
    }
    exports.transformCommandArguments = transformCommandArguments;
    function transformLegacyCommandArguments(args) {
      return args.flat().map((arg) => {
        return typeof arg === "number" || arg instanceof Date ? arg.toString() : arg;
      });
    }
    exports.transformLegacyCommandArguments = transformLegacyCommandArguments;
    function transformCommandReply(command, rawReply, preserved) {
      if (!command.transformReply) {
        return rawReply;
      }
      return command.transformReply(rawReply, preserved);
    }
    exports.transformCommandReply = transformCommandReply;
    function fCallArguments(name, fn, args) {
      const actualArgs = [
        fn.IS_READ_ONLY ? "FCALL_RO" : "FCALL",
        name
      ];
      if (fn.NUMBER_OF_KEYS !== void 0) {
        actualArgs.push(fn.NUMBER_OF_KEYS.toString());
      }
      actualArgs.push(...args);
      return actualArgs;
    }
    exports.fCallArguments = fCallArguments;
  }
});

// node_modules/@redis/client/dist/lib/multi-command.js
var require_multi_command = __commonJS({
  "node_modules/@redis/client/dist/lib/multi-command.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var commander_1 = require_commander();
    var errors_1 = require_errors();
    var RedisMultiCommand = class {
      constructor() {
        Object.defineProperty(this, "queue", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
        Object.defineProperty(this, "scriptsInUse", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: /* @__PURE__ */ new Set()
        });
      }
      static generateChainId() {
        return Symbol("RedisMultiCommand Chain Id");
      }
      addCommand(args, transformReply) {
        this.queue.push({
          args,
          transformReply
        });
      }
      addFunction(name, fn, args) {
        const transformedArguments = (0, commander_1.fCallArguments)(name, fn, fn.transformArguments(...args));
        this.queue.push({
          args: transformedArguments,
          transformReply: fn.transformReply
        });
        return transformedArguments;
      }
      addScript(script, args) {
        const transformedArguments = [];
        if (this.scriptsInUse.has(script.SHA1)) {
          transformedArguments.push("EVALSHA", script.SHA1);
        } else {
          this.scriptsInUse.add(script.SHA1);
          transformedArguments.push("EVAL", script.SCRIPT);
        }
        if (script.NUMBER_OF_KEYS !== void 0) {
          transformedArguments.push(script.NUMBER_OF_KEYS.toString());
        }
        const scriptArguments = script.transformArguments(...args);
        transformedArguments.push(...scriptArguments);
        if (scriptArguments.preserve) {
          transformedArguments.preserve = scriptArguments.preserve;
        }
        this.addCommand(transformedArguments, script.transformReply);
        return transformedArguments;
      }
      exec() {
        if (!this.queue.length) {
          return;
        }
        return [
          { args: ["MULTI"] },
          ...this.queue,
          { args: ["EXEC"] }
        ];
      }
      handleExecReplies(rawReplies) {
        const execReply = rawReplies[rawReplies.length - 1];
        if (execReply === null) {
          throw new errors_1.WatchError();
        }
        return this.transformReplies(execReply);
      }
      transformReplies(rawReplies) {
        return rawReplies.map((reply, i) => {
          const { transformReply, args } = this.queue[i];
          return transformReply ? transformReply(reply, args.preserve) : reply;
        });
      }
    };
    exports.default = RedisMultiCommand;
  }
});

// node_modules/@redis/client/dist/lib/client/multi-command.js
var require_multi_command2 = __commonJS({
  "node_modules/@redis/client/dist/lib/client/multi-command.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisClientMultiCommand_instances;
    var _RedisClientMultiCommand_multi;
    var _RedisClientMultiCommand_executor;
    var _RedisClientMultiCommand_selectedDB;
    var _RedisClientMultiCommand_legacyMode;
    var _RedisClientMultiCommand_defineLegacyCommand;
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands_1 = require_commands2();
    var multi_command_1 = require_multi_command();
    var commander_1 = require_commander();
    var RedisClientMultiCommand = class {
      constructor(executor, legacyMode = false) {
        _RedisClientMultiCommand_instances.add(this);
        _RedisClientMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClientMultiCommand_executor.set(this, void 0);
        Object.defineProperty(this, "v4", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        });
        _RedisClientMultiCommand_selectedDB.set(this, void 0);
        Object.defineProperty(this, "select", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SELECT
        });
        Object.defineProperty(this, "EXEC", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClientMultiCommand_executor, executor, "f");
        if (legacyMode) {
          __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
        }
      }
      static extend(extensions) {
        return (0, commander_1.attachExtensions)({
          BaseClass: RedisClientMultiCommand,
          modulesExecutor: RedisClientMultiCommand.prototype.commandsExecutor,
          modules: extensions == null ? void 0 : extensions.modules,
          functionsExecutor: RedisClientMultiCommand.prototype.functionsExecutor,
          functions: extensions == null ? void 0 : extensions.functions,
          scriptsExecutor: RedisClientMultiCommand.prototype.scriptsExecutor,
          scripts: extensions == null ? void 0 : extensions.scripts
        });
      }
      commandsExecutor(command, args) {
        return this.addCommand(command.transformArguments(...args), command.transformReply);
      }
      SELECT(db, transformReply) {
        __classPrivateFieldSet(this, _RedisClientMultiCommand_selectedDB, db, "f");
        return this.addCommand(["SELECT", db.toString()], transformReply);
      }
      addCommand(args, transformReply) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
      }
      functionsExecutor(fn, args, name) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addFunction(name, fn, args);
        return this;
      }
      scriptsExecutor(script, args) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);
        return this;
      }
      async exec(execAsPipeline = false) {
        if (execAsPipeline) {
          return this.execAsPipeline();
        }
        const commands = __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").exec();
        if (!commands)
          return [];
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, commands, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f"), multi_command_1.default.generateChainId()));
      }
      async execAsPipeline() {
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f")));
      }
    };
    exports.default = RedisClientMultiCommand;
    _RedisClientMultiCommand_multi = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_executor = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_selectedDB = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_instances = /* @__PURE__ */ new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode2() {
      this.v4.addCommand = this.addCommand.bind(this);
      this.addCommand = (...args) => {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand((0, commander_1.transformLegacyCommandArguments)(args));
        return this;
      };
      this.v4.exec = this.exec.bind(this);
      this.exec = (callback) => {
        this.v4.exec().then((reply) => {
          if (!callback)
            return;
          callback(null, reply);
        }).catch((err) => {
          if (!callback) {
            return;
          }
          callback(err);
        });
      };
      for (const name of Object.keys(commands_1.default)) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name);
      }
      for (const name of Object.keys(commands_1.default)) {
        this[name.toLowerCase()] = this[name];
      }
    }, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand2(name) {
      this.v4[name] = this[name].bind(this.v4);
      this[name] = (...args) => this.addCommand(name, ...args);
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisClientMultiCommand,
      commands: commands_1.default,
      executor: RedisClientMultiCommand.prototype.commandsExecutor
    });
  }
});

// node_modules/generic-pool/lib/factoryValidator.js
var require_factoryValidator = __commonJS({
  "node_modules/generic-pool/lib/factoryValidator.js"(exports, module) {
    module.exports = function(factory) {
      if (typeof factory.create !== "function") {
        throw new TypeError("factory.create must be a function");
      }
      if (typeof factory.destroy !== "function") {
        throw new TypeError("factory.destroy must be a function");
      }
      if (typeof factory.validate !== "undefined" && typeof factory.validate !== "function") {
        throw new TypeError("factory.validate must be a function");
      }
    };
  }
});

// node_modules/generic-pool/lib/PoolDefaults.js
var require_PoolDefaults = __commonJS({
  "node_modules/generic-pool/lib/PoolDefaults.js"(exports, module) {
    "use strict";
    var PoolDefaults = class {
      constructor() {
        this.fifo = true;
        this.priorityRange = 1;
        this.testOnBorrow = false;
        this.testOnReturn = false;
        this.autostart = true;
        this.evictionRunIntervalMillis = 0;
        this.numTestsPerEvictionRun = 3;
        this.softIdleTimeoutMillis = -1;
        this.idleTimeoutMillis = 3e4;
        this.acquireTimeoutMillis = null;
        this.destroyTimeoutMillis = null;
        this.maxWaitingClients = null;
        this.min = null;
        this.max = null;
        this.Promise = Promise;
      }
    };
    module.exports = PoolDefaults;
  }
});

// node_modules/generic-pool/lib/PoolOptions.js
var require_PoolOptions = __commonJS({
  "node_modules/generic-pool/lib/PoolOptions.js"(exports, module) {
    "use strict";
    var PoolDefaults = require_PoolDefaults();
    var PoolOptions = class {
      constructor(opts) {
        const poolDefaults = new PoolDefaults();
        opts = opts || {};
        this.fifo = typeof opts.fifo === "boolean" ? opts.fifo : poolDefaults.fifo;
        this.priorityRange = opts.priorityRange || poolDefaults.priorityRange;
        this.testOnBorrow = typeof opts.testOnBorrow === "boolean" ? opts.testOnBorrow : poolDefaults.testOnBorrow;
        this.testOnReturn = typeof opts.testOnReturn === "boolean" ? opts.testOnReturn : poolDefaults.testOnReturn;
        this.autostart = typeof opts.autostart === "boolean" ? opts.autostart : poolDefaults.autostart;
        if (opts.acquireTimeoutMillis) {
          this.acquireTimeoutMillis = parseInt(opts.acquireTimeoutMillis, 10);
        }
        if (opts.destroyTimeoutMillis) {
          this.destroyTimeoutMillis = parseInt(opts.destroyTimeoutMillis, 10);
        }
        if (opts.maxWaitingClients !== void 0) {
          this.maxWaitingClients = parseInt(opts.maxWaitingClients, 10);
        }
        this.max = parseInt(opts.max, 10);
        this.min = parseInt(opts.min, 10);
        this.max = Math.max(isNaN(this.max) ? 1 : this.max, 1);
        this.min = Math.min(isNaN(this.min) ? 0 : this.min, this.max);
        this.evictionRunIntervalMillis = opts.evictionRunIntervalMillis || poolDefaults.evictionRunIntervalMillis;
        this.numTestsPerEvictionRun = opts.numTestsPerEvictionRun || poolDefaults.numTestsPerEvictionRun;
        this.softIdleTimeoutMillis = opts.softIdleTimeoutMillis || poolDefaults.softIdleTimeoutMillis;
        this.idleTimeoutMillis = opts.idleTimeoutMillis || poolDefaults.idleTimeoutMillis;
        this.Promise = opts.Promise != null ? opts.Promise : poolDefaults.Promise;
      }
    };
    module.exports = PoolOptions;
  }
});

// node_modules/generic-pool/lib/Deferred.js
var require_Deferred = __commonJS({
  "node_modules/generic-pool/lib/Deferred.js"(exports, module) {
    "use strict";
    var Deferred = class {
      constructor(Promise2) {
        this._state = Deferred.PENDING;
        this._resolve = void 0;
        this._reject = void 0;
        this._promise = new Promise2((resolve, reject) => {
          this._resolve = resolve;
          this._reject = reject;
        });
      }
      get state() {
        return this._state;
      }
      get promise() {
        return this._promise;
      }
      reject(reason) {
        if (this._state !== Deferred.PENDING) {
          return;
        }
        this._state = Deferred.REJECTED;
        this._reject(reason);
      }
      resolve(value) {
        if (this._state !== Deferred.PENDING) {
          return;
        }
        this._state = Deferred.FULFILLED;
        this._resolve(value);
      }
    };
    Deferred.PENDING = "PENDING";
    Deferred.FULFILLED = "FULFILLED";
    Deferred.REJECTED = "REJECTED";
    module.exports = Deferred;
  }
});

// node_modules/generic-pool/lib/errors.js
var require_errors2 = __commonJS({
  "node_modules/generic-pool/lib/errors.js"(exports, module) {
    "use strict";
    var ExtendableError = class extends Error {
      constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error(message).stack;
        }
      }
    };
    var TimeoutError = class extends ExtendableError {
      constructor(m) {
        super(m);
      }
    };
    module.exports = {
      TimeoutError
    };
  }
});

// node_modules/generic-pool/lib/ResourceRequest.js
var require_ResourceRequest = __commonJS({
  "node_modules/generic-pool/lib/ResourceRequest.js"(exports, module) {
    "use strict";
    var Deferred = require_Deferred();
    var errors = require_errors2();
    function fbind(fn, ctx) {
      return function bound() {
        return fn.apply(ctx, arguments);
      };
    }
    var ResourceRequest = class extends Deferred {
      constructor(ttl, Promise2) {
        super(Promise2);
        this._creationTimestamp = Date.now();
        this._timeout = null;
        if (ttl !== void 0) {
          this.setTimeout(ttl);
        }
      }
      setTimeout(delay) {
        if (this._state !== ResourceRequest.PENDING) {
          return;
        }
        const ttl = parseInt(delay, 10);
        if (isNaN(ttl) || ttl <= 0) {
          throw new Error("delay must be a positive int");
        }
        const age = Date.now() - this._creationTimestamp;
        if (this._timeout) {
          this.removeTimeout();
        }
        this._timeout = setTimeout(
          fbind(this._fireTimeout, this),
          Math.max(ttl - age, 0)
        );
      }
      removeTimeout() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
        this._timeout = null;
      }
      _fireTimeout() {
        this.reject(new errors.TimeoutError("ResourceRequest timed out"));
      }
      reject(reason) {
        this.removeTimeout();
        super.reject(reason);
      }
      resolve(value) {
        this.removeTimeout();
        super.resolve(value);
      }
    };
    module.exports = ResourceRequest;
  }
});

// node_modules/generic-pool/lib/ResourceLoan.js
var require_ResourceLoan = __commonJS({
  "node_modules/generic-pool/lib/ResourceLoan.js"(exports, module) {
    "use strict";
    var Deferred = require_Deferred();
    var ResourceLoan = class extends Deferred {
      constructor(pooledResource, Promise2) {
        super(Promise2);
        this._creationTimestamp = Date.now();
        this.pooledResource = pooledResource;
      }
      reject() {
      }
    };
    module.exports = ResourceLoan;
  }
});

// node_modules/generic-pool/lib/PooledResourceStateEnum.js
var require_PooledResourceStateEnum = __commonJS({
  "node_modules/generic-pool/lib/PooledResourceStateEnum.js"(exports, module) {
    "use strict";
    var PooledResourceStateEnum = {
      ALLOCATED: "ALLOCATED",
      IDLE: "IDLE",
      INVALID: "INVALID",
      RETURNING: "RETURNING",
      VALIDATION: "VALIDATION"
    };
    module.exports = PooledResourceStateEnum;
  }
});

// node_modules/generic-pool/lib/PooledResource.js
var require_PooledResource = __commonJS({
  "node_modules/generic-pool/lib/PooledResource.js"(exports, module) {
    "use strict";
    var PooledResourceStateEnum = require_PooledResourceStateEnum();
    var PooledResource = class {
      constructor(resource) {
        this.creationTime = Date.now();
        this.lastReturnTime = null;
        this.lastBorrowTime = null;
        this.lastIdleTime = null;
        this.obj = resource;
        this.state = PooledResourceStateEnum.IDLE;
      }
      allocate() {
        this.lastBorrowTime = Date.now();
        this.state = PooledResourceStateEnum.ALLOCATED;
      }
      deallocate() {
        this.lastReturnTime = Date.now();
        this.state = PooledResourceStateEnum.IDLE;
      }
      invalidate() {
        this.state = PooledResourceStateEnum.INVALID;
      }
      test() {
        this.state = PooledResourceStateEnum.VALIDATION;
      }
      idle() {
        this.lastIdleTime = Date.now();
        this.state = PooledResourceStateEnum.IDLE;
      }
      returning() {
        this.state = PooledResourceStateEnum.RETURNING;
      }
    };
    module.exports = PooledResource;
  }
});

// node_modules/generic-pool/lib/DefaultEvictor.js
var require_DefaultEvictor = __commonJS({
  "node_modules/generic-pool/lib/DefaultEvictor.js"(exports, module) {
    "use strict";
    var DefaultEvictor = class {
      evict(config, pooledResource, availableObjectsCount) {
        const idleTime = Date.now() - pooledResource.lastIdleTime;
        if (config.softIdleTimeoutMillis > 0 && config.softIdleTimeoutMillis < idleTime && config.min < availableObjectsCount) {
          return true;
        }
        if (config.idleTimeoutMillis < idleTime) {
          return true;
        }
        return false;
      }
    };
    module.exports = DefaultEvictor;
  }
});

// node_modules/generic-pool/lib/DoublyLinkedList.js
var require_DoublyLinkedList = __commonJS({
  "node_modules/generic-pool/lib/DoublyLinkedList.js"(exports, module) {
    "use strict";
    var DoublyLinkedList = class {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      insertBeginning(node) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
          node.prev = null;
          node.next = null;
          this.length++;
        } else {
          this.insertBefore(this.head, node);
        }
      }
      insertEnd(node) {
        if (this.tail === null) {
          this.insertBeginning(node);
        } else {
          this.insertAfter(this.tail, node);
        }
      }
      insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next === null) {
          this.tail = newNode;
        } else {
          node.next.prev = newNode;
        }
        node.next = newNode;
        this.length++;
      }
      insertBefore(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        if (node.prev === null) {
          this.head = newNode;
        } else {
          node.prev.next = newNode;
        }
        node.prev = newNode;
        this.length++;
      }
      remove(node) {
        if (node.prev === null) {
          this.head = node.next;
        } else {
          node.prev.next = node.next;
        }
        if (node.next === null) {
          this.tail = node.prev;
        } else {
          node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
        this.length--;
      }
      static createNode(data) {
        return {
          prev: null,
          next: null,
          data
        };
      }
    };
    module.exports = DoublyLinkedList;
  }
});

// node_modules/generic-pool/lib/DoublyLinkedListIterator.js
var require_DoublyLinkedListIterator = __commonJS({
  "node_modules/generic-pool/lib/DoublyLinkedListIterator.js"(exports, module) {
    "use strict";
    var DoublyLinkedListIterator = class {
      constructor(doublyLinkedList, reverse) {
        this._list = doublyLinkedList;
        this._direction = reverse === true ? "prev" : "next";
        this._startPosition = reverse === true ? "tail" : "head";
        this._started = false;
        this._cursor = null;
        this._done = false;
      }
      _start() {
        this._cursor = this._list[this._startPosition];
        this._started = true;
      }
      _advanceCursor() {
        if (this._started === false) {
          this._started = true;
          this._cursor = this._list[this._startPosition];
          return;
        }
        this._cursor = this._cursor[this._direction];
      }
      reset() {
        this._done = false;
        this._started = false;
        this._cursor = null;
      }
      remove() {
        if (this._started === false || this._done === true || this._isCursorDetached()) {
          return false;
        }
        this._list.remove(this._cursor);
      }
      next() {
        if (this._done === true) {
          return { done: true };
        }
        this._advanceCursor();
        if (this._cursor === null || this._isCursorDetached()) {
          this._done = true;
          return { done: true };
        }
        return {
          value: this._cursor,
          done: false
        };
      }
      _isCursorDetached() {
        return this._cursor.prev === null && this._cursor.next === null && this._list.tail !== this._cursor && this._list.head !== this._cursor;
      }
    };
    module.exports = DoublyLinkedListIterator;
  }
});

// node_modules/generic-pool/lib/DequeIterator.js
var require_DequeIterator = __commonJS({
  "node_modules/generic-pool/lib/DequeIterator.js"(exports, module) {
    "use strict";
    var DoublyLinkedListIterator = require_DoublyLinkedListIterator();
    var DequeIterator = class extends DoublyLinkedListIterator {
      next() {
        const result = super.next();
        if (result.value) {
          result.value = result.value.data;
        }
        return result;
      }
    };
    module.exports = DequeIterator;
  }
});

// node_modules/generic-pool/lib/Deque.js
var require_Deque = __commonJS({
  "node_modules/generic-pool/lib/Deque.js"(exports, module) {
    "use strict";
    var DoublyLinkedList = require_DoublyLinkedList();
    var DequeIterator = require_DequeIterator();
    var Deque = class {
      constructor() {
        this._list = new DoublyLinkedList();
      }
      shift() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.head;
        this._list.remove(node);
        return node.data;
      }
      unshift(element) {
        const node = DoublyLinkedList.createNode(element);
        this._list.insertBeginning(node);
      }
      push(element) {
        const node = DoublyLinkedList.createNode(element);
        this._list.insertEnd(node);
      }
      pop() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.tail;
        this._list.remove(node);
        return node.data;
      }
      [Symbol.iterator]() {
        return new DequeIterator(this._list);
      }
      iterator() {
        return new DequeIterator(this._list);
      }
      reverseIterator() {
        return new DequeIterator(this._list, true);
      }
      get head() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.head;
        return node.data;
      }
      get tail() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.tail;
        return node.data;
      }
      get length() {
        return this._list.length;
      }
    };
    module.exports = Deque;
  }
});

// node_modules/generic-pool/lib/Queue.js
var require_Queue = __commonJS({
  "node_modules/generic-pool/lib/Queue.js"(exports, module) {
    "use strict";
    var DoublyLinkedList = require_DoublyLinkedList();
    var Deque = require_Deque();
    var Queue = class extends Deque {
      push(resourceRequest) {
        const node = DoublyLinkedList.createNode(resourceRequest);
        resourceRequest.promise.catch(this._createTimeoutRejectionHandler(node));
        this._list.insertEnd(node);
      }
      _createTimeoutRejectionHandler(node) {
        return (reason) => {
          if (reason.name === "TimeoutError") {
            this._list.remove(node);
          }
        };
      }
    };
    module.exports = Queue;
  }
});

// node_modules/generic-pool/lib/PriorityQueue.js
var require_PriorityQueue = __commonJS({
  "node_modules/generic-pool/lib/PriorityQueue.js"(exports, module) {
    "use strict";
    var Queue = require_Queue();
    var PriorityQueue = class {
      constructor(size) {
        this._size = Math.max(+size | 0, 1);
        this._slots = [];
        for (let i = 0; i < this._size; i++) {
          this._slots.push(new Queue());
        }
      }
      get length() {
        let _length = 0;
        for (let i = 0, slots = this._slots.length; i < slots; i++) {
          _length += this._slots[i].length;
        }
        return _length;
      }
      enqueue(obj, priority) {
        priority = priority && +priority | 0 || 0;
        if (priority) {
          if (priority < 0 || priority >= this._size) {
            priority = this._size - 1;
          }
        }
        this._slots[priority].push(obj);
      }
      dequeue() {
        for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
          if (this._slots[i].length) {
            return this._slots[i].shift();
          }
        }
        return;
      }
      get head() {
        for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
          if (this._slots[i].length > 0) {
            return this._slots[i].head;
          }
        }
        return;
      }
      get tail() {
        for (let i = this._slots.length - 1; i >= 0; i--) {
          if (this._slots[i].length > 0) {
            return this._slots[i].tail;
          }
        }
        return;
      }
    };
    module.exports = PriorityQueue;
  }
});

// node_modules/generic-pool/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/generic-pool/lib/utils.js"(exports) {
    "use strict";
    function noop() {
    }
    exports.reflector = function(promise) {
      return promise.then(noop, noop);
    };
  }
});

// node_modules/generic-pool/lib/Pool.js
var require_Pool = __commonJS({
  "node_modules/generic-pool/lib/Pool.js"(exports, module) {
    "use strict";
    var EventEmitter = require_events().EventEmitter;
    var factoryValidator = require_factoryValidator();
    var PoolOptions = require_PoolOptions();
    var ResourceRequest = require_ResourceRequest();
    var ResourceLoan = require_ResourceLoan();
    var PooledResource = require_PooledResource();
    var DefaultEvictor = require_DefaultEvictor();
    var Deque = require_Deque();
    var Deferred = require_Deferred();
    var PriorityQueue = require_PriorityQueue();
    var DequeIterator = require_DequeIterator();
    var reflector = require_utils2().reflector;
    var FACTORY_CREATE_ERROR = "factoryCreateError";
    var FACTORY_DESTROY_ERROR = "factoryDestroyError";
    var Pool = class extends EventEmitter {
      constructor(Evictor, Deque2, PriorityQueue2, factory, options) {
        super();
        factoryValidator(factory);
        this._config = new PoolOptions(options);
        this._Promise = this._config.Promise;
        this._factory = factory;
        this._draining = false;
        this._started = false;
        this._waitingClientsQueue = new PriorityQueue2(this._config.priorityRange);
        this._factoryCreateOperations = /* @__PURE__ */ new Set();
        this._factoryDestroyOperations = /* @__PURE__ */ new Set();
        this._availableObjects = new Deque2();
        this._testOnBorrowResources = /* @__PURE__ */ new Set();
        this._testOnReturnResources = /* @__PURE__ */ new Set();
        this._validationOperations = /* @__PURE__ */ new Set();
        this._allObjects = /* @__PURE__ */ new Set();
        this._resourceLoans = /* @__PURE__ */ new Map();
        this._evictionIterator = this._availableObjects.iterator();
        this._evictor = new Evictor();
        this._scheduledEviction = null;
        if (this._config.autostart === true) {
          this.start();
        }
      }
      _destroy(pooledResource) {
        pooledResource.invalidate();
        this._allObjects.delete(pooledResource);
        const destroyPromise = this._factory.destroy(pooledResource.obj);
        const wrappedDestroyPromise = this._config.destroyTimeoutMillis ? this._Promise.resolve(this._applyDestroyTimeout(destroyPromise)) : this._Promise.resolve(destroyPromise);
        this._trackOperation(
          wrappedDestroyPromise,
          this._factoryDestroyOperations
        ).catch((reason) => {
          this.emit(FACTORY_DESTROY_ERROR, reason);
        });
        this._ensureMinimum();
      }
      _applyDestroyTimeout(promise) {
        const timeoutPromise = new this._Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("destroy timed out"));
          }, this._config.destroyTimeoutMillis).unref();
        });
        return this._Promise.race([timeoutPromise, promise]);
      }
      _testOnBorrow() {
        if (this._availableObjects.length < 1) {
          return false;
        }
        const pooledResource = this._availableObjects.shift();
        pooledResource.test();
        this._testOnBorrowResources.add(pooledResource);
        const validationPromise = this._factory.validate(pooledResource.obj);
        const wrappedValidationPromise = this._Promise.resolve(validationPromise);
        this._trackOperation(
          wrappedValidationPromise,
          this._validationOperations
        ).then((isValid) => {
          this._testOnBorrowResources.delete(pooledResource);
          if (isValid === false) {
            pooledResource.invalidate();
            this._destroy(pooledResource);
            this._dispense();
            return;
          }
          this._dispatchPooledResourceToNextWaitingClient(pooledResource);
        });
        return true;
      }
      _dispatchResource() {
        if (this._availableObjects.length < 1) {
          return false;
        }
        const pooledResource = this._availableObjects.shift();
        this._dispatchPooledResourceToNextWaitingClient(pooledResource);
        return false;
      }
      _dispense() {
        const numWaitingClients = this._waitingClientsQueue.length;
        if (numWaitingClients < 1) {
          return;
        }
        const resourceShortfall = numWaitingClients - this._potentiallyAllocableResourceCount;
        const actualNumberOfResourcesToCreate = Math.min(
          this.spareResourceCapacity,
          resourceShortfall
        );
        for (let i = 0; actualNumberOfResourcesToCreate > i; i++) {
          this._createResource();
        }
        if (this._config.testOnBorrow === true) {
          const desiredNumberOfResourcesToMoveIntoTest = numWaitingClients - this._testOnBorrowResources.size;
          const actualNumberOfResourcesToMoveIntoTest = Math.min(
            this._availableObjects.length,
            desiredNumberOfResourcesToMoveIntoTest
          );
          for (let i = 0; actualNumberOfResourcesToMoveIntoTest > i; i++) {
            this._testOnBorrow();
          }
        }
        if (this._config.testOnBorrow === false) {
          const actualNumberOfResourcesToDispatch = Math.min(
            this._availableObjects.length,
            numWaitingClients
          );
          for (let i = 0; actualNumberOfResourcesToDispatch > i; i++) {
            this._dispatchResource();
          }
        }
      }
      _dispatchPooledResourceToNextWaitingClient(pooledResource) {
        const clientResourceRequest = this._waitingClientsQueue.dequeue();
        if (clientResourceRequest === void 0 || clientResourceRequest.state !== Deferred.PENDING) {
          this._addPooledResourceToAvailableObjects(pooledResource);
          return false;
        }
        const loan = new ResourceLoan(pooledResource, this._Promise);
        this._resourceLoans.set(pooledResource.obj, loan);
        pooledResource.allocate();
        clientResourceRequest.resolve(pooledResource.obj);
        return true;
      }
      _trackOperation(operation, set) {
        set.add(operation);
        return operation.then(
          (v) => {
            set.delete(operation);
            return this._Promise.resolve(v);
          },
          (e) => {
            set.delete(operation);
            return this._Promise.reject(e);
          }
        );
      }
      _createResource() {
        const factoryPromise = this._factory.create();
        const wrappedFactoryPromise = this._Promise.resolve(factoryPromise).then((resource) => {
          const pooledResource = new PooledResource(resource);
          this._allObjects.add(pooledResource);
          this._addPooledResourceToAvailableObjects(pooledResource);
        });
        this._trackOperation(wrappedFactoryPromise, this._factoryCreateOperations).then(() => {
          this._dispense();
          return null;
        }).catch((reason) => {
          this.emit(FACTORY_CREATE_ERROR, reason);
          this._dispense();
        });
      }
      _ensureMinimum() {
        if (this._draining === true) {
          return;
        }
        const minShortfall = this._config.min - this._count;
        for (let i = 0; i < minShortfall; i++) {
          this._createResource();
        }
      }
      _evict() {
        const testsToRun = Math.min(
          this._config.numTestsPerEvictionRun,
          this._availableObjects.length
        );
        const evictionConfig = {
          softIdleTimeoutMillis: this._config.softIdleTimeoutMillis,
          idleTimeoutMillis: this._config.idleTimeoutMillis,
          min: this._config.min
        };
        for (let testsHaveRun = 0; testsHaveRun < testsToRun; ) {
          const iterationResult = this._evictionIterator.next();
          if (iterationResult.done === true && this._availableObjects.length < 1) {
            this._evictionIterator.reset();
            return;
          }
          if (iterationResult.done === true && this._availableObjects.length > 0) {
            this._evictionIterator.reset();
            continue;
          }
          const resource = iterationResult.value;
          const shouldEvict = this._evictor.evict(
            evictionConfig,
            resource,
            this._availableObjects.length
          );
          testsHaveRun++;
          if (shouldEvict === true) {
            this._evictionIterator.remove();
            this._destroy(resource);
          }
        }
      }
      _scheduleEvictorRun() {
        if (this._config.evictionRunIntervalMillis > 0) {
          this._scheduledEviction = setTimeout(() => {
            this._evict();
            this._scheduleEvictorRun();
          }, this._config.evictionRunIntervalMillis).unref();
        }
      }
      _descheduleEvictorRun() {
        if (this._scheduledEviction) {
          clearTimeout(this._scheduledEviction);
        }
        this._scheduledEviction = null;
      }
      start() {
        if (this._draining === true) {
          return;
        }
        if (this._started === true) {
          return;
        }
        this._started = true;
        this._scheduleEvictorRun();
        this._ensureMinimum();
      }
      acquire(priority) {
        if (this._started === false && this._config.autostart === false) {
          this.start();
        }
        if (this._draining) {
          return this._Promise.reject(
            new Error("pool is draining and cannot accept work")
          );
        }
        if (this.spareResourceCapacity < 1 && this._availableObjects.length < 1 && this._config.maxWaitingClients !== void 0 && this._waitingClientsQueue.length >= this._config.maxWaitingClients) {
          return this._Promise.reject(
            new Error("max waitingClients count exceeded")
          );
        }
        const resourceRequest = new ResourceRequest(
          this._config.acquireTimeoutMillis,
          this._Promise
        );
        this._waitingClientsQueue.enqueue(resourceRequest, priority);
        this._dispense();
        return resourceRequest.promise;
      }
      use(fn, priority) {
        return this.acquire(priority).then((resource) => {
          return fn(resource).then(
            (result) => {
              this.release(resource);
              return result;
            },
            (err) => {
              this.destroy(resource);
              throw err;
            }
          );
        });
      }
      isBorrowedResource(resource) {
        return this._resourceLoans.has(resource);
      }
      release(resource) {
        const loan = this._resourceLoans.get(resource);
        if (loan === void 0) {
          return this._Promise.reject(
            new Error("Resource not currently part of this pool")
          );
        }
        this._resourceLoans.delete(resource);
        loan.resolve();
        const pooledResource = loan.pooledResource;
        pooledResource.deallocate();
        this._addPooledResourceToAvailableObjects(pooledResource);
        this._dispense();
        return this._Promise.resolve();
      }
      destroy(resource) {
        const loan = this._resourceLoans.get(resource);
        if (loan === void 0) {
          return this._Promise.reject(
            new Error("Resource not currently part of this pool")
          );
        }
        this._resourceLoans.delete(resource);
        loan.resolve();
        const pooledResource = loan.pooledResource;
        pooledResource.deallocate();
        this._destroy(pooledResource);
        this._dispense();
        return this._Promise.resolve();
      }
      _addPooledResourceToAvailableObjects(pooledResource) {
        pooledResource.idle();
        if (this._config.fifo === true) {
          this._availableObjects.push(pooledResource);
        } else {
          this._availableObjects.unshift(pooledResource);
        }
      }
      drain() {
        this._draining = true;
        return this.__allResourceRequestsSettled().then(() => {
          return this.__allResourcesReturned();
        }).then(() => {
          this._descheduleEvictorRun();
        });
      }
      __allResourceRequestsSettled() {
        if (this._waitingClientsQueue.length > 0) {
          return reflector(this._waitingClientsQueue.tail.promise);
        }
        return this._Promise.resolve();
      }
      __allResourcesReturned() {
        const ps = Array.from(this._resourceLoans.values()).map((loan) => loan.promise).map(reflector);
        return this._Promise.all(ps);
      }
      clear() {
        const reflectedCreatePromises = Array.from(
          this._factoryCreateOperations
        ).map(reflector);
        return this._Promise.all(reflectedCreatePromises).then(() => {
          for (const resource of this._availableObjects) {
            this._destroy(resource);
          }
          const reflectedDestroyPromises = Array.from(
            this._factoryDestroyOperations
          ).map(reflector);
          return reflector(this._Promise.all(reflectedDestroyPromises));
        });
      }
      ready() {
        return new this._Promise((resolve) => {
          const isReady = () => {
            if (this.available >= this.min) {
              resolve();
            } else {
              setTimeout(isReady, 100);
            }
          };
          isReady();
        });
      }
      get _potentiallyAllocableResourceCount() {
        return this._availableObjects.length + this._testOnBorrowResources.size + this._testOnReturnResources.size + this._factoryCreateOperations.size;
      }
      get _count() {
        return this._allObjects.size + this._factoryCreateOperations.size;
      }
      get spareResourceCapacity() {
        return this._config.max - (this._allObjects.size + this._factoryCreateOperations.size);
      }
      get size() {
        return this._count;
      }
      get available() {
        return this._availableObjects.length;
      }
      get borrowed() {
        return this._resourceLoans.size;
      }
      get pending() {
        return this._waitingClientsQueue.length;
      }
      get max() {
        return this._config.max;
      }
      get min() {
        return this._config.min;
      }
    };
    module.exports = Pool;
  }
});

// node_modules/generic-pool/index.js
var require_generic_pool = __commonJS({
  "node_modules/generic-pool/index.js"(exports, module) {
    var Pool = require_Pool();
    var Deque = require_Deque();
    var PriorityQueue = require_PriorityQueue();
    var DefaultEvictor = require_DefaultEvictor();
    module.exports = {
      Pool,
      Deque,
      PriorityQueue,
      DefaultEvictor,
      createPool: function(factory, config) {
        return new Pool(DefaultEvictor, Deque, PriorityQueue, factory, config);
      }
    };
  }
});

// browser-external:url
var require_url = __commonJS({
  "browser-external:url"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "url" has been externalized for browser compatibility. Cannot access "url.${key}" in client code.`);
        }
      }
    }));
  }
});

// node_modules/@redis/client/dist/lib/client/index.js
var require_client = __commonJS({
  "node_modules/@redis/client/dist/lib/client/index.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisClient_instances;
    var _RedisClient_options;
    var _RedisClient_socket;
    var _RedisClient_queue;
    var _RedisClient_isolationPool;
    var _RedisClient_v4;
    var _RedisClient_selectedDB;
    var _RedisClient_initiateOptions;
    var _RedisClient_initiateQueue;
    var _RedisClient_initiateSocket;
    var _RedisClient_legacyMode;
    var _RedisClient_defineLegacyCommand;
    var _RedisClient_pingTimer;
    var _RedisClient_setPingTimer;
    var _RedisClient_sendCommand;
    var _RedisClient_subscribe;
    var _RedisClient_unsubscribe;
    var _RedisClient_tick;
    var _RedisClient_destroyIsolationPool;
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands_1 = require_commands2();
    var socket_1 = require_socket();
    var commands_queue_1 = require_commands_queue();
    var multi_command_1 = require_multi_command2();
    var events_1 = require_events();
    var command_options_1 = require_command_options();
    var commander_1 = require_commander();
    var generic_pool_1 = require_generic_pool();
    var errors_1 = require_errors();
    var url_1 = require_url();
    var RedisClient = class extends events_1.EventEmitter {
      constructor(options) {
        super();
        _RedisClient_instances.add(this);
        Object.defineProperty(this, "commandOptions", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: RedisClient.commandOptions
        });
        _RedisClient_options.set(this, void 0);
        _RedisClient_socket.set(this, void 0);
        _RedisClient_queue.set(this, void 0);
        _RedisClient_isolationPool.set(this, void 0);
        _RedisClient_v4.set(this, {});
        _RedisClient_selectedDB.set(this, 0);
        _RedisClient_pingTimer.set(this, void 0);
        Object.defineProperty(this, "select", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SELECT
        });
        Object.defineProperty(this, "subscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SUBSCRIBE
        });
        Object.defineProperty(this, "pSubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PSUBSCRIBE
        });
        Object.defineProperty(this, "unsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.UNSUBSCRIBE
        });
        Object.defineProperty(this, "pUnsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PUNSUBSCRIBE
        });
        Object.defineProperty(this, "quit", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.QUIT
        });
        Object.defineProperty(this, "multi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.MULTI
        });
        __classPrivateFieldSet(this, _RedisClient_options, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateOptions).call(this, options), "f");
        __classPrivateFieldSet(this, _RedisClient_queue, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateQueue).call(this), "f");
        __classPrivateFieldSet(this, _RedisClient_socket, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateSocket).call(this), "f");
        __classPrivateFieldSet(this, _RedisClient_isolationPool, (0, generic_pool_1.createPool)({
          create: async () => {
            const duplicate = this.duplicate({
              isolationPoolOptions: void 0
            }).on("error", (err) => this.emit("error", err));
            await duplicate.connect();
            return duplicate;
          },
          destroy: (client) => client.disconnect()
        }, options == null ? void 0 : options.isolationPoolOptions), "f");
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacyMode).call(this);
      }
      static commandOptions(options) {
        return (0, command_options_1.commandOptions)(options);
      }
      static extend(extensions) {
        const Client = (0, commander_1.attachExtensions)({
          BaseClass: RedisClient,
          modulesExecutor: RedisClient.prototype.commandsExecutor,
          modules: extensions == null ? void 0 : extensions.modules,
          functionsExecutor: RedisClient.prototype.functionsExecuter,
          functions: extensions == null ? void 0 : extensions.functions,
          scriptsExecutor: RedisClient.prototype.scriptsExecuter,
          scripts: extensions == null ? void 0 : extensions.scripts
        });
        if (Client !== RedisClient) {
          Client.prototype.Multi = multi_command_1.default.extend(extensions);
        }
        return Client;
      }
      static create(options) {
        return new (RedisClient.extend(options))(options);
      }
      static parseURL(url) {
        const { hostname, port, protocol, username, password, pathname } = new url_1.URL(url), parsed = {
          socket: {
            host: hostname
          }
        };
        if (protocol === "rediss:") {
          parsed.socket.tls = true;
        } else if (protocol !== "redis:") {
          throw new TypeError("Invalid protocol");
        }
        if (port) {
          parsed.socket.port = Number(port);
        }
        if (username) {
          parsed.username = decodeURIComponent(username);
        }
        if (password) {
          parsed.password = decodeURIComponent(password);
        }
        if (pathname.length > 1) {
          const database = Number(pathname.substring(1));
          if (isNaN(database)) {
            throw new TypeError("Invalid pathname");
          }
          parsed.database = database;
        }
        return parsed;
      }
      get options() {
        return __classPrivateFieldGet(this, _RedisClient_options, "f");
      }
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen;
      }
      get isReady() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isReady;
      }
      get v4() {
        var _a;
        if (!((_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.legacyMode)) {
          throw new Error('the client is not in "legacy mode"');
        }
        return __classPrivateFieldGet(this, _RedisClient_v4, "f");
      }
      duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
          ...__classPrivateFieldGet(this, _RedisClient_options, "f"),
          ...overrides
        });
      }
      async connect() {
        await __classPrivateFieldGet(this, _RedisClient_socket, "f").connect();
      }
      async commandsExecutor(command, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options), redisArgs.preserve);
      }
      sendCommand(args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, args, options);
      }
      async functionsExecuter(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, redisArgs, options), redisArgs.preserve);
      }
      executeFunction(name, fn, args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.fCallArguments)(name, fn, args), options);
      }
      async scriptsExecuter(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, redisArgs, options), redisArgs.preserve);
      }
      async executeScript(script, args, options) {
        var _a, _b;
        const redisArgs = ["EVALSHA", script.SHA1];
        if (script.NUMBER_OF_KEYS !== void 0) {
          redisArgs.push(script.NUMBER_OF_KEYS.toString());
        }
        redisArgs.push(...args);
        try {
          return await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        } catch (err) {
          if (!((_b = (_a = err == null ? void 0 : err.message) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "NOSCRIPT"))) {
            throw err;
          }
          redisArgs[0] = "EVAL";
          redisArgs[1] = script.SCRIPT;
          return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        }
      }
      async SELECT(options, db) {
        if (!(0, command_options_1.isCommandOptions)(options)) {
          db = options;
          options = null;
        }
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ["SELECT", db.toString()], options);
        __classPrivateFieldSet(this, _RedisClient_selectedDB, db, "f");
      }
      SUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_subscribe).call(this, commands_queue_1.PubSubSubscribeCommands.SUBSCRIBE, channels, listener, bufferMode);
      }
      PSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_subscribe).call(this, commands_queue_1.PubSubSubscribeCommands.PSUBSCRIBE, patterns, listener, bufferMode);
      }
      UNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_unsubscribe).call(this, commands_queue_1.PubSubUnsubscribeCommands.UNSUBSCRIBE, channels, listener, bufferMode);
      }
      PUNSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_unsubscribe).call(this, commands_queue_1.PubSubUnsubscribeCommands.PUNSUBSCRIBE, patterns, listener, bufferMode);
      }
      QUIT() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").quit(() => {
          const quitPromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["QUIT"], {
            ignorePubSubMode: true
          });
          __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
          return Promise.all([
            quitPromise,
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this)
          ]);
        });
      }
      executeIsolated(fn) {
        return __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").use(fn);
      }
      MULTI() {
        var _a;
        return new this.Multi(this.multiExecutor.bind(this), (_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.legacyMode);
      }
      async multiExecutor(commands, selectedDB, chainId) {
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
          return Promise.reject(new errors_1.ClientClosedError());
        }
        const promise = Promise.all(commands.map(({ args }) => {
          return __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, { chainId });
        }));
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
        const results = await promise;
        if (selectedDB !== void 0) {
          __classPrivateFieldSet(this, _RedisClient_selectedDB, selectedDB, "f");
        }
        return results;
      }
      async *scanIterator(options) {
        let cursor = 0;
        do {
          const reply = await this.scan(cursor, options);
          cursor = reply.cursor;
          for (const key of reply.keys) {
            yield key;
          }
        } while (cursor !== 0);
      }
      async *hScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.hScan(key, cursor, options);
          cursor = reply.cursor;
          for (const tuple of reply.tuples) {
            yield tuple;
          }
        } while (cursor !== 0);
      }
      async *sScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.sScan(key, cursor, options);
          cursor = reply.cursor;
          for (const member of reply.members) {
            yield member;
          }
        } while (cursor !== 0);
      }
      async *zScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.zScan(key, cursor, options);
          cursor = reply.cursor;
          for (const member of reply.members) {
            yield member;
          }
        } while (cursor !== 0);
      }
      async disconnect() {
        __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(new errors_1.DisconnectsClientError());
        __classPrivateFieldGet(this, _RedisClient_socket, "f").disconnect();
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this);
      }
      ref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").ref();
      }
      unref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").unref();
      }
    };
    exports.default = RedisClient;
    _RedisClient_options = /* @__PURE__ */ new WeakMap(), _RedisClient_socket = /* @__PURE__ */ new WeakMap(), _RedisClient_queue = /* @__PURE__ */ new WeakMap(), _RedisClient_isolationPool = /* @__PURE__ */ new WeakMap(), _RedisClient_v4 = /* @__PURE__ */ new WeakMap(), _RedisClient_selectedDB = /* @__PURE__ */ new WeakMap(), _RedisClient_pingTimer = /* @__PURE__ */ new WeakMap(), _RedisClient_instances = /* @__PURE__ */ new WeakSet(), _RedisClient_initiateOptions = function _RedisClient_initiateOptions2(options) {
      if (options == null ? void 0 : options.url) {
        const parsed = RedisClient.parseURL(options.url);
        if (options.socket) {
          parsed.socket = Object.assign(options.socket, parsed.socket);
        }
        Object.assign(options, parsed);
      }
      if (options == null ? void 0 : options.database) {
        __classPrivateFieldSet(this, _RedisClient_selectedDB, options.database, "f");
      }
      return options;
    }, _RedisClient_initiateQueue = function _RedisClient_initiateQueue2() {
      var _a;
      return new commands_queue_1.default((_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.commandsQueueMaxLength);
    }, _RedisClient_initiateSocket = function _RedisClient_initiateSocket2() {
      var _a;
      const socketInitiator = async () => {
        var _a2, _b, _c, _d, _e;
        const promises = [];
        if (__classPrivateFieldGet(this, _RedisClient_selectedDB, "f") !== 0) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["SELECT", __classPrivateFieldGet(this, _RedisClient_selectedDB, "f").toString()], { asap: true }));
        }
        if ((_a2 = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a2.readonly) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.READONLY.transformArguments(), { asap: true }));
        }
        if ((_b = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _b.name) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.CLIENT_SETNAME.transformArguments(__classPrivateFieldGet(this, _RedisClient_options, "f").name), { asap: true }));
        }
        if (((_c = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _c.username) || ((_d = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _d.password)) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.AUTH.transformArguments({
            username: __classPrivateFieldGet(this, _RedisClient_options, "f").username,
            password: (_e = __classPrivateFieldGet(this, _RedisClient_options, "f").password) != null ? _e : ""
          }), { asap: true }));
        }
        const resubscribePromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").resubscribe();
        if (resubscribePromise) {
          promises.push(resubscribePromise);
        }
        if (promises.length) {
          __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this, true);
          await Promise.all(promises);
        }
      };
      return new socket_1.default(socketInitiator, (_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.socket).on("data", (chunk) => __classPrivateFieldGet(this, _RedisClient_queue, "f").onReplyChunk(chunk)).on("error", (err) => {
        var _a2;
        this.emit("error", err);
        if (__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen && !((_a2 = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a2.disableOfflineQueue)) {
          __classPrivateFieldGet(this, _RedisClient_queue, "f").flushWaitingForReply(err);
        } else {
          __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(err);
        }
      }).on("connect", () => {
        this.emit("connect");
      }).on("ready", () => {
        this.emit("ready");
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this);
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      }).on("reconnecting", () => this.emit("reconnecting")).on("drain", () => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this)).on("end", () => this.emit("end"));
    }, _RedisClient_legacyMode = function _RedisClient_legacyMode2() {
      var _a;
      if (!((_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.legacyMode))
        return;
      __classPrivateFieldGet(this, _RedisClient_v4, "f").sendCommand = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).bind(this);
      this.sendCommand = (...args) => {
        let callback;
        if (typeof args[args.length - 1] === "function") {
          callback = args.pop();
        }
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.transformLegacyCommandArguments)(args)).then((reply) => {
          if (!callback)
            return;
          callback(null, reply);
        }).catch((err) => {
          if (!callback) {
            this.emit("error", err);
            return;
          }
          callback(err);
        });
      };
      for (const name of Object.keys(commands_1.default)) {
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, name);
      }
      for (const name of Object.keys(commands_1.default)) {
        this[name.toLowerCase()] = this[name];
      }
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "SELECT");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "select");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "SUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "subscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "PSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "pSubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "UNSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "unsubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "PUNSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "pUnsubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "QUIT");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "quit");
    }, _RedisClient_defineLegacyCommand = function _RedisClient_defineLegacyCommand2(name) {
      __classPrivateFieldGet(this, _RedisClient_v4, "f")[name] = this[name].bind(this);
      this[name] = (...args) => this.sendCommand(name, ...args);
    }, _RedisClient_setPingTimer = function _RedisClient_setPingTimer2() {
      var _a;
      if (!((_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.pingInterval) || !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
        return;
      clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
      __classPrivateFieldSet(this, _RedisClient_pingTimer, setTimeout(() => {
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
          return;
        this.ping().then((reply) => this.emit("ping-interval", reply)).catch((err) => this.emit("error", err)).finally(() => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer2).call(this));
      }, __classPrivateFieldGet(this, _RedisClient_options, "f").pingInterval), "f");
    }, _RedisClient_sendCommand = function _RedisClient_sendCommand2(args, options) {
      var _a;
      if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
        return Promise.reject(new errors_1.ClientClosedError());
      } else if (options == null ? void 0 : options.isolated) {
        return this.executeIsolated((isolatedClient) => isolatedClient.sendCommand(args, {
          ...options,
          isolated: false
        }));
      } else if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady && ((_a = __classPrivateFieldGet(this, _RedisClient_options, "f")) == null ? void 0 : _a.disableOfflineQueue)) {
        return Promise.reject(new errors_1.ClientOfflineError());
      }
      const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, options);
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      return promise;
    }, _RedisClient_subscribe = function _RedisClient_subscribe2(command, channels, listener, bufferMode) {
      const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(command, channels, listener, bufferMode);
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      return promise;
    }, _RedisClient_unsubscribe = function _RedisClient_unsubscribe2(command, channels, listener, bufferMode) {
      const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(command, channels, listener, bufferMode);
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      return promise;
    }, _RedisClient_tick = function _RedisClient_tick2(force = false) {
      if (__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain || !force && !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady) {
        return;
      }
      __classPrivateFieldGet(this, _RedisClient_socket, "f").cork();
      while (!__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain) {
        const args = __classPrivateFieldGet(this, _RedisClient_queue, "f").getCommandToSend();
        if (args === void 0)
          break;
        __classPrivateFieldGet(this, _RedisClient_socket, "f").writeCommand(args);
      }
    }, _RedisClient_destroyIsolationPool = async function _RedisClient_destroyIsolationPool2() {
      await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").drain();
      await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").clear();
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisClient,
      commands: commands_1.default,
      executor: RedisClient.prototype.commandsExecutor
    });
    RedisClient.prototype.Multi = multi_command_1.default;
  }
});

// node_modules/cluster-key-slot/lib/index.js
var require_lib = __commonJS({
  "node_modules/cluster-key-slot/lib/index.js"(exports, module) {
    var lookup = [
      0,
      4129,
      8258,
      12387,
      16516,
      20645,
      24774,
      28903,
      33032,
      37161,
      41290,
      45419,
      49548,
      53677,
      57806,
      61935,
      4657,
      528,
      12915,
      8786,
      21173,
      17044,
      29431,
      25302,
      37689,
      33560,
      45947,
      41818,
      54205,
      50076,
      62463,
      58334,
      9314,
      13379,
      1056,
      5121,
      25830,
      29895,
      17572,
      21637,
      42346,
      46411,
      34088,
      38153,
      58862,
      62927,
      50604,
      54669,
      13907,
      9842,
      5649,
      1584,
      30423,
      26358,
      22165,
      18100,
      46939,
      42874,
      38681,
      34616,
      63455,
      59390,
      55197,
      51132,
      18628,
      22757,
      26758,
      30887,
      2112,
      6241,
      10242,
      14371,
      51660,
      55789,
      59790,
      63919,
      35144,
      39273,
      43274,
      47403,
      23285,
      19156,
      31415,
      27286,
      6769,
      2640,
      14899,
      10770,
      56317,
      52188,
      64447,
      60318,
      39801,
      35672,
      47931,
      43802,
      27814,
      31879,
      19684,
      23749,
      11298,
      15363,
      3168,
      7233,
      60846,
      64911,
      52716,
      56781,
      44330,
      48395,
      36200,
      40265,
      32407,
      28342,
      24277,
      20212,
      15891,
      11826,
      7761,
      3696,
      65439,
      61374,
      57309,
      53244,
      48923,
      44858,
      40793,
      36728,
      37256,
      33193,
      45514,
      41451,
      53516,
      49453,
      61774,
      57711,
      4224,
      161,
      12482,
      8419,
      20484,
      16421,
      28742,
      24679,
      33721,
      37784,
      41979,
      46042,
      49981,
      54044,
      58239,
      62302,
      689,
      4752,
      8947,
      13010,
      16949,
      21012,
      25207,
      29270,
      46570,
      42443,
      38312,
      34185,
      62830,
      58703,
      54572,
      50445,
      13538,
      9411,
      5280,
      1153,
      29798,
      25671,
      21540,
      17413,
      42971,
      47098,
      34713,
      38840,
      59231,
      63358,
      50973,
      55100,
      9939,
      14066,
      1681,
      5808,
      26199,
      30326,
      17941,
      22068,
      55628,
      51565,
      63758,
      59695,
      39368,
      35305,
      47498,
      43435,
      22596,
      18533,
      30726,
      26663,
      6336,
      2273,
      14466,
      10403,
      52093,
      56156,
      60223,
      64286,
      35833,
      39896,
      43963,
      48026,
      19061,
      23124,
      27191,
      31254,
      2801,
      6864,
      10931,
      14994,
      64814,
      60687,
      56684,
      52557,
      48554,
      44427,
      40424,
      36297,
      31782,
      27655,
      23652,
      19525,
      15522,
      11395,
      7392,
      3265,
      61215,
      65342,
      53085,
      57212,
      44955,
      49082,
      36825,
      40952,
      28183,
      32310,
      20053,
      24180,
      11923,
      16050,
      3793,
      7920
    ];
    var toUTF8Array = function toUTF8Array2(str) {
      var char;
      var i = 0;
      var p = 0;
      var utf8 = [];
      var len = str.length;
      for (; i < len; i++) {
        char = str.charCodeAt(i);
        if (char < 128) {
          utf8[p++] = char;
        } else if (char < 2048) {
          utf8[p++] = char >> 6 | 192;
          utf8[p++] = char & 63 | 128;
        } else if ((char & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          char = 65536 + ((char & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          utf8[p++] = char >> 18 | 240;
          utf8[p++] = char >> 12 & 63 | 128;
          utf8[p++] = char >> 6 & 63 | 128;
          utf8[p++] = char & 63 | 128;
        } else {
          utf8[p++] = char >> 12 | 224;
          utf8[p++] = char >> 6 & 63 | 128;
          utf8[p++] = char & 63 | 128;
        }
      }
      return utf8;
    };
    var generate = module.exports = function generate2(str) {
      var char;
      var i = 0;
      var start = -1;
      var result = 0;
      var resultHash = 0;
      var utf8 = typeof str === "string" ? toUTF8Array(str) : str;
      var len = utf8.length;
      while (i < len) {
        char = utf8[i++];
        if (start === -1) {
          if (char === 123) {
            start = i;
          }
        } else if (char !== 125) {
          resultHash = lookup[(char ^ resultHash >> 8) & 255] ^ resultHash << 8;
        } else if (i - 1 !== start) {
          return resultHash & 16383;
        }
        result = lookup[(char ^ result >> 8) & 255] ^ result << 8;
      }
      return result & 16383;
    };
    module.exports.generateMulti = function generateMulti(keys) {
      var i = 1;
      var len = keys.length;
      var base = generate(keys[0]);
      while (i < len) {
        if (generate(keys[i++]) !== base)
          return -1;
      }
      return base;
    };
  }
});

// node_modules/@redis/client/dist/lib/cluster/cluster-slots.js
var require_cluster_slots = __commonJS({
  "node_modules/@redis/client/dist/lib/cluster/cluster-slots.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisClusterSlots_instances;
    var _RedisClusterSlots_options;
    var _RedisClusterSlots_Client;
    var _RedisClusterSlots_onError;
    var _RedisClusterSlots_nodeByAddress;
    var _RedisClusterSlots_slots;
    var _RedisClusterSlots_discoverNodes;
    var _RedisClusterSlots_runningRediscoverPromise;
    var _RedisClusterSlots_rediscover;
    var _RedisClusterSlots_reset;
    var _RedisClusterSlots_clientOptionsDefaults;
    var _RedisClusterSlots_initiateClient;
    var _RedisClusterSlots_getNodeAddress;
    var _RedisClusterSlots_initiateClientForNode;
    var _RedisClusterSlots_slotClientIterator;
    var _RedisClusterSlots_getSlotClient;
    var _RedisClusterSlots_randomClientIterator;
    var _RedisClusterSlots_getRandomClient;
    var _RedisClusterSlots_destroy;
    Object.defineProperty(exports, "__esModule", { value: true });
    var client_1 = require_client();
    var errors_1 = require_errors();
    var calculateSlot = require_lib();
    var RedisClusterSlots = class {
      constructor(options, onError) {
        _RedisClusterSlots_instances.add(this);
        _RedisClusterSlots_options.set(this, void 0);
        _RedisClusterSlots_Client.set(this, void 0);
        _RedisClusterSlots_onError.set(this, void 0);
        _RedisClusterSlots_nodeByAddress.set(this, /* @__PURE__ */ new Map());
        _RedisClusterSlots_slots.set(this, []);
        _RedisClusterSlots_runningRediscoverPromise.set(this, void 0);
        _RedisClusterSlots_randomClientIterator.set(this, void 0);
        __classPrivateFieldSet(this, _RedisClusterSlots_options, options, "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_Client, client_1.default.extend(options), "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_onError, onError, "f");
      }
      async connect() {
        for (const rootNode of __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes) {
          if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, rootNode))
            return;
        }
        throw new errors_1.RootNodesUnavailableError();
      }
      async rediscover(startWith) {
        if (!__classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f")) {
          __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_rediscover).call(this, startWith).finally(() => __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, void 0, "f")), "f");
        }
        return __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f");
      }
      getSlotMaster(slot) {
        return __classPrivateFieldGet(this, _RedisClusterSlots_slots, "f")[slot].master;
      }
      getClient(firstKey, isReadonly) {
        if (!firstKey) {
          return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getRandomClient).call(this);
        }
        const slot = calculateSlot(firstKey);
        if (!isReadonly || !__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").useReplicas) {
          return this.getSlotMaster(slot).client;
        }
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getSlotClient).call(this, slot);
      }
      getMasters() {
        var _a;
        const masters = [];
        for (const node of __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").values()) {
          if ((_a = node.client.options) == null ? void 0 : _a.readonly)
            continue;
          masters.push(node);
        }
        return masters;
      }
      getNodeByAddress(address) {
        const mappedAddress = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, address);
        return __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").get(mappedAddress ? `${mappedAddress.host}:${mappedAddress.port}` : address);
      }
      quit() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client) => client.quit());
      }
      disconnect() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client) => client.disconnect());
      }
    };
    exports.default = RedisClusterSlots;
    _RedisClusterSlots_options = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_Client = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_onError = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_nodeByAddress = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_slots = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_runningRediscoverPromise = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_randomClientIterator = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_instances = /* @__PURE__ */ new WeakSet(), _RedisClusterSlots_discoverNodes = async function _RedisClusterSlots_discoverNodes2(clientOptions) {
      const client = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClient).call(this, clientOptions);
      await client.connect();
      try {
        await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_reset).call(this, await client.clusterNodes());
        return true;
      } catch (err) {
        __classPrivateFieldGet(this, _RedisClusterSlots_onError, "f").call(this, err);
        return false;
      } finally {
        if (client.isOpen) {
          await client.disconnect();
        }
      }
    }, _RedisClusterSlots_rediscover = async function _RedisClusterSlots_rediscover2(startWith) {
      if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, startWith.options))
        return;
      for (const { client } of __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").values()) {
        if (client === startWith)
          continue;
        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverNodes).call(this, client.options))
          return;
      }
      throw new Error("None of the cluster nodes is available");
    }, _RedisClusterSlots_reset = async function _RedisClusterSlots_reset2(masters) {
      const promises = [], clientsInUse = /* @__PURE__ */ new Set();
      for (const master of masters) {
        const slot = {
          master: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClientForNode).call(this, master, false, clientsInUse, promises),
          replicas: __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").useReplicas ? master.replicas.map((replica) => __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClientForNode).call(this, replica, true, clientsInUse, promises)) : [],
          clientIterator: void 0
        };
        for (const { from, to } of master.slots) {
          for (let i = from; i <= to; i++) {
            __classPrivateFieldGet(this, _RedisClusterSlots_slots, "f")[i] = slot;
          }
        }
      }
      for (const [address, { client }] of __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").entries()) {
        if (clientsInUse.has(address))
          continue;
        promises.push(client.disconnect());
        __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").delete(address);
      }
      await Promise.all(promises);
    }, _RedisClusterSlots_clientOptionsDefaults = function _RedisClusterSlots_clientOptionsDefaults2(options) {
      var _a;
      if (!__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults)
        return options;
      return {
        ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults,
        ...options,
        socket: __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket && (options == null ? void 0 : options.socket) ? {
          ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket,
          ...options.socket
        } : (_a = __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket) != null ? _a : options == null ? void 0 : options.socket
      };
    }, _RedisClusterSlots_initiateClient = function _RedisClusterSlots_initiateClient2(options) {
      return new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, options)).on("error", __classPrivateFieldGet(this, _RedisClusterSlots_onError, "f"));
    }, _RedisClusterSlots_getNodeAddress = function _RedisClusterSlots_getNodeAddress2(address) {
      switch (typeof __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap) {
        case "object":
          return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap[address];
        case "function":
          return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap(address);
      }
    }, _RedisClusterSlots_initiateClientForNode = function _RedisClusterSlots_initiateClientForNode2(nodeData, readonly, clientsInUse, promises) {
      var _a;
      const address = `${nodeData.host}:${nodeData.port}`;
      clientsInUse.add(address);
      let node = __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").get(address);
      if (!node) {
        node = {
          id: nodeData.id,
          client: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateClient).call(this, {
            socket: (_a = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, address)) != null ? _a : {
              host: nodeData.host,
              port: nodeData.port
            },
            readonly
          })
        };
        promises.push(node.client.connect());
        __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").set(address, node);
      }
      return node;
    }, _RedisClusterSlots_slotClientIterator = function* _RedisClusterSlots_slotClientIterator2(slotNumber) {
      const slot = __classPrivateFieldGet(this, _RedisClusterSlots_slots, "f")[slotNumber];
      yield slot.master.client;
      for (const replica of slot.replicas) {
        yield replica.client;
      }
    }, _RedisClusterSlots_getSlotClient = function _RedisClusterSlots_getSlotClient2(slotNumber) {
      const slot = __classPrivateFieldGet(this, _RedisClusterSlots_slots, "f")[slotNumber];
      if (!slot.clientIterator) {
        slot.clientIterator = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_slotClientIterator).call(this, slotNumber);
      }
      const { done, value } = slot.clientIterator.next();
      if (done) {
        slot.clientIterator = void 0;
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getSlotClient2).call(this, slotNumber);
      }
      return value;
    }, _RedisClusterSlots_getRandomClient = function _RedisClusterSlots_getRandomClient2() {
      if (!__classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").size) {
        throw new Error("Cluster is not connected");
      }
      if (!__classPrivateFieldGet(this, _RedisClusterSlots_randomClientIterator, "f")) {
        __classPrivateFieldSet(this, _RedisClusterSlots_randomClientIterator, __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").values(), "f");
      }
      const { done, value } = __classPrivateFieldGet(this, _RedisClusterSlots_randomClientIterator, "f").next();
      if (done) {
        __classPrivateFieldSet(this, _RedisClusterSlots_randomClientIterator, void 0, "f");
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getRandomClient2).call(this);
      }
      return value.client;
    }, _RedisClusterSlots_destroy = async function _RedisClusterSlots_destroy2(fn) {
      const promises = [];
      for (const { client } of __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").values()) {
        promises.push(fn(client));
      }
      await Promise.all(promises);
      __classPrivateFieldGet(this, _RedisClusterSlots_nodeByAddress, "f").clear();
      __classPrivateFieldGet(this, _RedisClusterSlots_slots, "f").splice(0);
    };
  }
});

// node_modules/@redis/client/dist/lib/cluster/multi-command.js
var require_multi_command3 = __commonJS({
  "node_modules/@redis/client/dist/lib/cluster/multi-command.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisClusterMultiCommand_multi;
    var _RedisClusterMultiCommand_executor;
    var _RedisClusterMultiCommand_firstKey;
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands_1 = require_commands();
    var multi_command_1 = require_multi_command();
    var commander_1 = require_commander();
    var _1 = require_cluster();
    var RedisClusterMultiCommand = class {
      constructor(executor, firstKey) {
        _RedisClusterMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClusterMultiCommand_executor.set(this, void 0);
        _RedisClusterMultiCommand_firstKey.set(this, void 0);
        Object.defineProperty(this, "EXEC", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_executor, executor, "f");
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
      }
      static extend(extensions) {
        return (0, commander_1.attachExtensions)({
          BaseClass: RedisClusterMultiCommand,
          modulesExecutor: RedisClusterMultiCommand.prototype.commandsExecutor,
          modules: extensions == null ? void 0 : extensions.modules,
          functionsExecutor: RedisClusterMultiCommand.prototype.functionsExecutor,
          functions: extensions == null ? void 0 : extensions.functions,
          scriptsExecutor: RedisClusterMultiCommand.prototype.scriptsExecutor,
          scripts: extensions == null ? void 0 : extensions.scripts
        });
      }
      commandsExecutor(command, args) {
        var _a;
        const transformedArguments = command.transformArguments(...args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (_a = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) != null ? _a : _1.default.extractFirstKey(command, args, transformedArguments), "f");
        return this.addCommand(void 0, transformedArguments, command.transformReply);
      }
      addCommand(firstKey, args, transformReply) {
        var _a;
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (_a = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) != null ? _a : firstKey, "f");
        __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
      }
      functionsExecutor(fn, args, name) {
        var _a;
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addFunction(name, fn, args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (_a = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) != null ? _a : _1.default.extractFirstKey(fn, args, transformedArguments), "f");
        return this;
      }
      scriptsExecutor(script, args) {
        var _a;
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addScript(script, args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, (_a = __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")) != null ? _a : _1.default.extractFirstKey(script, args, transformedArguments), "f");
        return this;
      }
      async exec(execAsPipeline = false) {
        if (execAsPipeline) {
          return this.execAsPipeline();
        }
        const commands = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").exec();
        if (!commands)
          return [];
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, commands, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f"), multi_command_1.default.generateChainId()));
      }
      async execAsPipeline() {
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")));
      }
    };
    exports.default = RedisClusterMultiCommand;
    _RedisClusterMultiCommand_multi = /* @__PURE__ */ new WeakMap(), _RedisClusterMultiCommand_executor = /* @__PURE__ */ new WeakMap(), _RedisClusterMultiCommand_firstKey = /* @__PURE__ */ new WeakMap();
    (0, commander_1.attachCommands)({
      BaseClass: RedisClusterMultiCommand,
      commands: commands_1.default,
      executor: RedisClusterMultiCommand.prototype.commandsExecutor
    });
  }
});

// node_modules/@redis/client/dist/lib/cluster/index.js
var require_cluster = __commonJS({
  "node_modules/@redis/client/dist/lib/cluster/index.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisCluster_instances;
    var _RedisCluster_options;
    var _RedisCluster_slots;
    var _RedisCluster_Multi;
    var _RedisCluster_execute;
    Object.defineProperty(exports, "__esModule", { value: true });
    var commands_1 = require_commands();
    var cluster_slots_1 = require_cluster_slots();
    var commander_1 = require_commander();
    var events_1 = require_events();
    var multi_command_1 = require_multi_command3();
    var RedisCluster = class extends events_1.EventEmitter {
      constructor(options) {
        super();
        _RedisCluster_instances.add(this);
        _RedisCluster_options.set(this, void 0);
        _RedisCluster_slots.set(this, void 0);
        _RedisCluster_Multi.set(this, void 0);
        Object.defineProperty(this, "multi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.MULTI
        });
        __classPrivateFieldSet(this, _RedisCluster_options, options, "f");
        __classPrivateFieldSet(this, _RedisCluster_slots, new cluster_slots_1.default(options, (err) => this.emit("error", err)), "f");
        __classPrivateFieldSet(this, _RedisCluster_Multi, multi_command_1.default.extend(options), "f");
      }
      static extractFirstKey(command, originalArgs, redisArgs) {
        if (command.FIRST_KEY_INDEX === void 0) {
          return void 0;
        } else if (typeof command.FIRST_KEY_INDEX === "number") {
          return redisArgs[command.FIRST_KEY_INDEX];
        }
        return command.FIRST_KEY_INDEX(...originalArgs);
      }
      static create(options) {
        return new ((0, commander_1.attachExtensions)({
          BaseClass: RedisCluster,
          modulesExecutor: RedisCluster.prototype.commandsExecutor,
          modules: options == null ? void 0 : options.modules,
          functionsExecutor: RedisCluster.prototype.functionsExecutor,
          functions: options == null ? void 0 : options.functions,
          scriptsExecutor: RedisCluster.prototype.scriptsExecutor,
          scripts: options == null ? void 0 : options.scripts
        }))(options);
      }
      duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
          ...__classPrivateFieldGet(this, _RedisCluster_options, "f"),
          ...overrides
        });
      }
      async connect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").connect();
      }
      async commandsExecutor(command, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await this.sendCommand(RedisCluster.extractFirstKey(command, args, redisArgs), command.IS_READ_ONLY, redisArgs, options), redisArgs.preserve);
      }
      async sendCommand(firstKey, isReadonly, args, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, isReadonly, (client) => client.sendCommand(args, options));
      }
      async functionsExecutor(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, args, redisArgs, options), redisArgs.preserve);
      }
      async executeFunction(name, fn, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(fn, originalArgs, redisArgs), fn.IS_READ_ONLY, (client) => client.executeFunction(name, fn, redisArgs, options));
      }
      async scriptsExecutor(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, args, redisArgs, options), redisArgs.preserve);
      }
      async executeScript(script, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, RedisCluster.extractFirstKey(script, originalArgs, redisArgs), script.IS_READ_ONLY, (client) => client.executeScript(script, redisArgs, options));
      }
      MULTI(routing) {
        return new (__classPrivateFieldGet(this, _RedisCluster_Multi, "f"))((commands, firstKey, chainId) => {
          return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, false, (client) => client.multiExecutor(commands, void 0, chainId));
        }, routing);
      }
      getMasters() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasters();
      }
      getSlotMaster(slot) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getSlotMaster(slot);
      }
      quit() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").quit();
      }
      disconnect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").disconnect();
      }
    };
    exports.default = RedisCluster;
    _RedisCluster_options = /* @__PURE__ */ new WeakMap(), _RedisCluster_slots = /* @__PURE__ */ new WeakMap(), _RedisCluster_Multi = /* @__PURE__ */ new WeakMap(), _RedisCluster_instances = /* @__PURE__ */ new WeakSet(), _RedisCluster_execute = async function _RedisCluster_execute2(firstKey, isReadonly, executor) {
      var _a, _b;
      const maxCommandRedirections = (_a = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections) != null ? _a : 16;
      let client = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
      for (let i = 0; ; i++) {
        try {
          return await executor(client);
        } catch (err) {
          if (++i > maxCommandRedirections || !(err instanceof Error)) {
            throw err;
          }
          if (err.message.startsWith("ASK")) {
            const address = err.message.substring(err.message.lastIndexOf(" ") + 1);
            if (((_b = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getNodeByAddress(address)) == null ? void 0 : _b.client) === client) {
              await client.asking();
              continue;
            }
            await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
            const redirectTo = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getNodeByAddress(address);
            if (!redirectTo) {
              throw new Error(`Cannot find node ${address}`);
            }
            await redirectTo.client.asking();
            client = redirectTo.client;
            continue;
          } else if (err.message.startsWith("MOVED")) {
            await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
            client = __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
            continue;
          }
          throw err;
        }
      }
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisCluster,
      commands: commands_1.default,
      executor: RedisCluster.prototype.commandsExecutor
    });
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code.`);
        }
      }
    }));
  }
});

// node_modules/@redis/client/dist/lib/lua-script.js
var require_lua_script = __commonJS({
  "node_modules/@redis/client/dist/lib/lua-script.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptSha1 = exports.defineScript = void 0;
    var crypto_1 = require_crypto();
    function defineScript(script) {
      return {
        ...script,
        SHA1: scriptSha1(script.SCRIPT)
      };
    }
    exports.defineScript = defineScript;
    function scriptSha1(script) {
      return (0, crypto_1.createHash)("sha1").update(script).digest("hex");
    }
    exports.scriptSha1 = scriptSha1;
  }
});

// node_modules/@redis/client/dist/index.js
var require_dist = __commonJS({
  "node_modules/@redis/client/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GeoReplyWith = exports.defineScript = exports.createCluster = exports.commandOptions = exports.createClient = void 0;
    var client_1 = require_client();
    var cluster_1 = require_cluster();
    exports.createClient = client_1.default.create;
    exports.commandOptions = client_1.default.commandOptions;
    exports.createCluster = cluster_1.default.create;
    var lua_script_1 = require_lua_script();
    Object.defineProperty(exports, "defineScript", { enumerable: true, get: function() {
      return lua_script_1.defineScript;
    } });
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "GeoReplyWith", { enumerable: true, get: function() {
      return generic_transformers_1.GeoReplyWith;
    } });
    __exportStar(require_errors(), exports);
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/ADD.js
var require_ADD = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/ADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["BF.ADD", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/EXISTS.js
var require_EXISTS2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/EXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, item) {
      return ["BF.EXISTS", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/INFO.js
var require_INFO2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["BF.INFO", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        capacity: reply[1],
        size: reply[3],
        numberOfFilters: reply[5],
        numberOfInsertedItems: reply[7],
        expansionRate: reply[9]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/INSERT.js
var require_INSERT = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/INSERT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      const args = ["BF.INSERT", key];
      if (options == null ? void 0 : options.CAPACITY) {
        args.push("CAPACITY", options.CAPACITY.toString());
      }
      if (options == null ? void 0 : options.ERROR) {
        args.push("ERROR", options.ERROR.toString());
      }
      if (options == null ? void 0 : options.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      if (options == null ? void 0 : options.NOCREATE) {
        args.push("NOCREATE");
      }
      if (options == null ? void 0 : options.NONSCALING) {
        args.push("NONSCALING");
      }
      args.push("ITEMS");
      return (0, generic_transformers_1.pushVerdictArguments)(args, items);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/LOADCHUNK.js
var require_LOADCHUNK = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/LOADCHUNK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iteretor, chunk) {
      return ["BF.LOADCHUNK", key, iteretor.toString(), chunk];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/MADD.js
var require_MADD = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/MADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      return ["BF.MADD", key, ...items];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/MEXISTS.js
var require_MEXISTS = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/MEXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return ["BF.MEXISTS", key, ...items];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/RESERVE.js
var require_RESERVE = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/RESERVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, errorRate, capacity, options) {
      const args = ["BF.RESERVE", key, errorRate.toString(), capacity.toString()];
      if (options == null ? void 0 : options.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      if (options == null ? void 0 : options.NONSCALING) {
        args.push("NONSCALING");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/SCANDUMP.js
var require_SCANDUMP = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/SCANDUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, iterator) {
      return ["BF.SCANDUMP", key, iterator.toString()];
    }
    exports.transformArguments = transformArguments;
    function transformReply([iterator, chunk]) {
      return {
        iterator,
        chunk
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/bloom/index.js
var require_bloom = __commonJS({
  "node_modules/@redis/bloom/dist/commands/bloom/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ADD = require_ADD();
    var EXISTS = require_EXISTS2();
    var INFO = require_INFO2();
    var INSERT = require_INSERT();
    var LOADCHUNK = require_LOADCHUNK();
    var MADD = require_MADD();
    var MEXISTS = require_MEXISTS();
    var RESERVE = require_RESERVE();
    var SCANDUMP = require_SCANDUMP();
    exports.default = {
      ADD,
      add: ADD,
      EXISTS,
      exists: EXISTS,
      INFO,
      info: INFO,
      INSERT,
      insert: INSERT,
      LOADCHUNK,
      loadChunk: LOADCHUNK,
      MADD,
      mAdd: MADD,
      MEXISTS,
      mExists: MEXISTS,
      RESERVE,
      reserve: RESERVE,
      SCANDUMP,
      scanDump: SCANDUMP
    };
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/INCRBY.js
var require_INCRBY2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/INCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      const args = ["CMS.INCRBY", key];
      if (Array.isArray(items)) {
        for (const item of items) {
          pushIncrByItem(args, item);
        }
      } else {
        pushIncrByItem(args, items);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function pushIncrByItem(args, { item, incrementBy }) {
      args.push(item, incrementBy.toString());
    }
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/INFO.js
var require_INFO3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["CMS.INFO", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        width: reply[1],
        depth: reply[3],
        count: reply[5]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYDIM.js
var require_INITBYDIM = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYDIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, width, depth) {
      return ["CMS.INITBYDIM", key, width.toString(), depth.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYPROB.js
var require_INITBYPROB = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYPROB.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, error, probability) {
      return ["CMS.INITBYPROB", key, error.toString(), probability.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/MERGE.js
var require_MERGE = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/MERGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(dest, src) {
      const args = [
        "CMS.MERGE",
        dest,
        src.length.toString()
      ];
      if (isStringSketches(src)) {
        args.push(...src);
      } else {
        for (const sketch of src) {
          args.push(sketch.name);
        }
        args.push("WEIGHTS");
        for (const sketch of src) {
          args.push(sketch.weight.toString());
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function isStringSketches(src) {
      return typeof src[0] === "string";
    }
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/QUERY.js
var require_QUERY = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/QUERY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["CMS.QUERY", key], items);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/count-min-sketch/index.js
var require_count_min_sketch = __commonJS({
  "node_modules/@redis/bloom/dist/commands/count-min-sketch/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var INCRBY = require_INCRBY2();
    var INFO = require_INFO3();
    var INITBYDIM = require_INITBYDIM();
    var INITBYPROB = require_INITBYPROB();
    var MERGE = require_MERGE();
    var QUERY = require_QUERY();
    exports.default = {
      INCRBY,
      incrBy: INCRBY,
      INFO,
      info: INFO,
      INITBYDIM,
      initByDim: INITBYDIM,
      INITBYPROB,
      initByProb: INITBYPROB,
      MERGE,
      merge: MERGE,
      QUERY,
      query: QUERY
    };
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/ADD.js
var require_ADD2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/ADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.ADD", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/ADDNX.js
var require_ADDNX = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/ADDNX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.ADDNX", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/COUNT.js
var require_COUNT = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.COUNT", key, item];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/DEL.js
var require_DEL2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/DEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.DEL", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/EXISTS.js
var require_EXISTS3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/EXISTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, item) {
      return ["CF.EXISTS", key, item];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/INFO.js
var require_INFO4 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["CF.INFO", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        size: reply[1],
        numberOfBuckets: reply[3],
        numberOfFilters: reply[5],
        numberOfInsertedItems: reply[7],
        numberOfDeletedItems: reply[9],
        bucketSize: reply[11],
        expansionRate: reply[13],
        maxIteration: reply[15]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/INSERT.js
var require_INSERT2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/INSERT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_cuckoo();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      return (0, _1.pushInsertOptions)(["CF.INSERT", key], items, options);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/INSERTNX.js
var require_INSERTNX = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/INSERTNX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_cuckoo();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      return (0, _1.pushInsertOptions)(["CF.INSERTNX", key], items, options);
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/LOADCHUNK.js
var require_LOADCHUNK2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/LOADCHUNK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iterator, chunk) {
      return ["CF.LOADCHUNK", key, iterator.toString(), chunk];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/RESERVE.js
var require_RESERVE2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/RESERVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, capacity, options) {
      const args = ["CF.RESERVE", key, capacity.toString()];
      if (options == null ? void 0 : options.BUCKETSIZE) {
        args.push("BUCKETSIZE", options.BUCKETSIZE.toString());
      }
      if (options == null ? void 0 : options.MAXITERATIONS) {
        args.push("MAXITERATIONS", options.MAXITERATIONS.toString());
      }
      if (options == null ? void 0 : options.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/SCANDUMP.js
var require_SCANDUMP2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/SCANDUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iterator) {
      return ["CF.SCANDUMP", key, iterator.toString()];
    }
    exports.transformArguments = transformArguments;
    function transformReply([iterator, chunk]) {
      return {
        iterator,
        chunk
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/cuckoo/index.js
var require_cuckoo = __commonJS({
  "node_modules/@redis/bloom/dist/commands/cuckoo/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pushInsertOptions = void 0;
    var ADD = require_ADD2();
    var ADDNX = require_ADDNX();
    var COUNT = require_COUNT();
    var DEL = require_DEL2();
    var EXISTS = require_EXISTS3();
    var INFO = require_INFO4();
    var INSERT = require_INSERT2();
    var INSERTNX = require_INSERTNX();
    var LOADCHUNK = require_LOADCHUNK2();
    var RESERVE = require_RESERVE2();
    var SCANDUMP = require_SCANDUMP2();
    var generic_transformers_1 = require_generic_transformers();
    exports.default = {
      ADD,
      add: ADD,
      ADDNX,
      addNX: ADDNX,
      COUNT,
      count: COUNT,
      DEL,
      del: DEL,
      EXISTS,
      exists: EXISTS,
      INFO,
      info: INFO,
      INSERT,
      insert: INSERT,
      INSERTNX,
      insertNX: INSERTNX,
      LOADCHUNK,
      loadChunk: LOADCHUNK,
      RESERVE,
      reserve: RESERVE,
      SCANDUMP,
      scanDump: SCANDUMP
    };
    function pushInsertOptions(args, items, options) {
      if (options == null ? void 0 : options.CAPACITY) {
        args.push("CAPACITY");
        args.push(options.CAPACITY.toString());
      }
      if (options == null ? void 0 : options.NOCREATE) {
        args.push("NOCREATE");
      }
      args.push("ITEMS");
      return (0, generic_transformers_1.pushVerdictArguments)(args, items);
    }
    exports.pushInsertOptions = pushInsertOptions;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/ADD.js
var require_ADD3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/ADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, values) {
      const args = ["TDIGEST.ADD", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/BYRANK.js
var require_BYRANK = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/BYRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, ranks) {
      const args = ["TDIGEST.BYRANK", key];
      for (const rank of ranks) {
        args.push(rank.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/BYREVRANK.js
var require_BYREVRANK = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/BYREVRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, ranks) {
      const args = ["TDIGEST.BYREVRANK", key];
      for (const rank of ranks) {
        args.push(rank.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/CDF.js
var require_CDF = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/CDF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.CDF", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/CREATE.js
var require_CREATE = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/CREATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_t_digest();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      return (0, _1.pushCompressionArgument)(["TDIGEST.CREATE", key], options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/INFO.js
var require_INFO5 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.INFO",
        key
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        comperssion: reply[1],
        capacity: reply[3],
        mergedNodes: reply[5],
        unmergedNodes: reply[7],
        mergedWeight: Number(reply[9]),
        unmergedWeight: Number(reply[11]),
        totalCompression: reply[13]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/MAX.js
var require_MAX = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/MAX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.MAX",
        key
      ];
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/MERGE.js
var require_MERGE2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/MERGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_t_digest();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(destKey, srcKeys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["TDIGEST.MERGE", destKey], srcKeys);
      (0, _1.pushCompressionArgument)(args, options);
      if (options == null ? void 0 : options.OVERRIDE) {
        args.push("OVERRIDE");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/MIN.js
var require_MIN = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/MIN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.MIN",
        key
      ];
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/QUANTILE.js
var require_QUANTILE = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/QUANTILE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, quantiles) {
      const args = [
        "TDIGEST.QUANTILE",
        key
      ];
      for (const quantile of quantiles) {
        args.push(quantile.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/RANK.js
var require_RANK = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/RANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.RANK", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/RESET.js
var require_RESET = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/RESET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["TDIGEST.RESET", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/REVRANK.js
var require_REVRANK = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/REVRANK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.REVRANK", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN.js
var require_TRIMMED_MEAN = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, lowCutPercentile, highCutPercentile) {
      return [
        "TDIGEST.TRIMMED_MEAN",
        key,
        lowCutPercentile.toString(),
        highCutPercentile.toString()
      ];
    }
    exports.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/@redis/bloom/dist/commands/t-digest/index.js
var require_t_digest = __commonJS({
  "node_modules/@redis/bloom/dist/commands/t-digest/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformDoublesReply = exports.transformDoubleReply = exports.pushCompressionArgument = void 0;
    var ADD = require_ADD3();
    var BYRANK = require_BYRANK();
    var BYREVRANK = require_BYREVRANK();
    var CDF = require_CDF();
    var CREATE = require_CREATE();
    var INFO = require_INFO5();
    var MAX = require_MAX();
    var MERGE = require_MERGE2();
    var MIN = require_MIN();
    var QUANTILE = require_QUANTILE();
    var RANK = require_RANK();
    var RESET = require_RESET();
    var REVRANK = require_REVRANK();
    var TRIMMED_MEAN = require_TRIMMED_MEAN();
    exports.default = {
      ADD,
      add: ADD,
      BYRANK,
      byRank: BYRANK,
      BYREVRANK,
      byRevRank: BYREVRANK,
      CDF,
      cdf: CDF,
      CREATE,
      create: CREATE,
      INFO,
      info: INFO,
      MAX,
      max: MAX,
      MERGE,
      merge: MERGE,
      MIN,
      min: MIN,
      QUANTILE,
      quantile: QUANTILE,
      RANK,
      rank: RANK,
      RESET,
      reset: RESET,
      REVRANK,
      revRank: REVRANK,
      TRIMMED_MEAN,
      trimmedMean: TRIMMED_MEAN
    };
    function pushCompressionArgument(args, options) {
      if (options == null ? void 0 : options.COMPRESSION) {
        args.push("COMPRESSION", options.COMPRESSION.toString());
      }
      return args;
    }
    exports.pushCompressionArgument = pushCompressionArgument;
    function transformDoubleReply(reply) {
      switch (reply) {
        case "inf":
          return Infinity;
        case "-inf":
          return -Infinity;
        case "nan":
          return NaN;
        default:
          return parseFloat(reply);
      }
    }
    exports.transformDoubleReply = transformDoubleReply;
    function transformDoublesReply(reply) {
      return reply.map(transformDoubleReply);
    }
    exports.transformDoublesReply = transformDoublesReply;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/ADD.js
var require_ADD4 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/ADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.ADD", key], items);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/COUNT.js
var require_COUNT2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/COUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.COUNT", key], items);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/INCRBY.js
var require_INCRBY3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/INCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      const args = ["TOPK.INCRBY", key];
      if (Array.isArray(items)) {
        for (const item of items) {
          pushIncrByItem(args, item);
        }
      } else {
        pushIncrByItem(args, items);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function pushIncrByItem(args, { item, incrementBy }) {
      args.push(item, incrementBy.toString());
    }
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/INFO.js
var require_INFO6 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.INFO", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        k: reply[1],
        width: reply[3],
        depth: reply[5],
        decay: Number(reply[7])
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT.js
var require_LIST_WITHCOUNT = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.LIST", key, "WITHCOUNT"];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const reply = [];
      for (let i = 0; i < rawReply.length; i++) {
        reply.push({
          item: rawReply[i],
          count: rawReply[++i]
        });
      }
      return reply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/LIST.js
var require_LIST = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.LIST", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/QUERY.js
var require_QUERY2 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/QUERY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.QUERY", key], items);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/RESERVE.js
var require_RESERVE3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/RESERVE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, topK, options) {
      const args = ["TOPK.RESERVE", key, topK.toString()];
      if (options) {
        args.push(options.width.toString(), options.depth.toString(), options.decay.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/bloom/dist/commands/top-k/index.js
var require_top_k = __commonJS({
  "node_modules/@redis/bloom/dist/commands/top-k/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ADD = require_ADD4();
    var COUNT = require_COUNT2();
    var INCRBY = require_INCRBY3();
    var INFO = require_INFO6();
    var LIST_WITHCOUNT = require_LIST_WITHCOUNT();
    var LIST = require_LIST();
    var QUERY = require_QUERY2();
    var RESERVE = require_RESERVE3();
    exports.default = {
      ADD,
      add: ADD,
      COUNT,
      count: COUNT,
      INCRBY,
      incrBy: INCRBY,
      INFO,
      info: INFO,
      LIST_WITHCOUNT,
      listWithCount: LIST_WITHCOUNT,
      LIST,
      list: LIST,
      QUERY,
      query: QUERY,
      RESERVE,
      reserve: RESERVE
    };
  }
});

// node_modules/@redis/bloom/dist/commands/index.js
var require_commands3 = __commonJS({
  "node_modules/@redis/bloom/dist/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bloom_1 = require_bloom();
    var count_min_sketch_1 = require_count_min_sketch();
    var cuckoo_1 = require_cuckoo();
    var t_digest_1 = require_t_digest();
    var top_k_1 = require_top_k();
    exports.default = {
      bf: bloom_1.default,
      cms: count_min_sketch_1.default,
      cf: cuckoo_1.default,
      tDigest: t_digest_1.default,
      topK: top_k_1.default
    };
  }
});

// node_modules/@redis/bloom/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@redis/bloom/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    var commands_1 = require_commands3();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
  }
});

// node_modules/@redis/graph/dist/commands/CONFIG_GET.js
var require_CONFIG_GET2 = __commonJS({
  "node_modules/@redis/graph/dist/commands/CONFIG_GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(configKey) {
      return ["GRAPH.CONFIG", "GET", configKey];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/CONFIG_SET.js
var require_CONFIG_SET2 = __commonJS({
  "node_modules/@redis/graph/dist/commands/CONFIG_SET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(configKey, value) {
      return [
        "GRAPH.CONFIG",
        "SET",
        configKey,
        value.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/DELETE.js
var require_DELETE = __commonJS({
  "node_modules/@redis/graph/dist/commands/DELETE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GRAPH.DELETE", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/EXPLAIN.js
var require_EXPLAIN = __commonJS({
  "node_modules/@redis/graph/dist/commands/EXPLAIN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, query) {
      return ["GRAPH.EXPLAIN", key, query];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/LIST.js
var require_LIST2 = __commonJS({
  "node_modules/@redis/graph/dist/commands/LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments() {
      return ["GRAPH.LIST"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/PROFILE.js
var require_PROFILE = __commonJS({
  "node_modules/@redis/graph/dist/commands/PROFILE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, query) {
      return ["GRAPH.PROFILE", key, query];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/graph/dist/commands/QUERY.js
var require_QUERY3 = __commonJS({
  "node_modules/@redis/graph/dist/commands/QUERY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands4();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(graph, query, options, compact) {
      return (0, _1.pushQueryArguments)(["GRAPH.QUERY"], graph, query, options, compact);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.length === 1 ? {
        headers: void 0,
        data: void 0,
        metadata: reply[0]
      } : {
        headers: reply[0],
        data: reply[1],
        metadata: reply[2]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/graph/dist/commands/RO_QUERY.js
var require_RO_QUERY = __commonJS({
  "node_modules/@redis/graph/dist/commands/RO_QUERY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands4();
    var QUERY_1 = require_QUERY3();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return QUERY_1.FIRST_KEY_INDEX;
    } });
    exports.IS_READ_ONLY = true;
    function transformArguments(graph, query, options, compact) {
      return (0, _1.pushQueryArguments)(["GRAPH.RO_QUERY"], graph, query, options, compact);
    }
    exports.transformArguments = transformArguments;
    var QUERY_2 = require_QUERY3();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return QUERY_2.transformReply;
    } });
  }
});

// node_modules/@redis/graph/dist/commands/SLOWLOG.js
var require_SLOWLOG = __commonJS({
  "node_modules/@redis/graph/dist/commands/SLOWLOG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GRAPH.SLOWLOG", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(logs) {
      return logs.map(([timestamp, command, query, took]) => ({
        timestamp: new Date(Number(timestamp) * 1e3),
        command,
        query,
        took: Number(took)
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/graph/dist/commands/index.js
var require_commands4 = __commonJS({
  "node_modules/@redis/graph/dist/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pushQueryArguments = void 0;
    var CONFIG_GET = require_CONFIG_GET2();
    var CONFIG_SET = require_CONFIG_SET2();
    var DELETE = require_DELETE();
    var EXPLAIN = require_EXPLAIN();
    var LIST = require_LIST2();
    var PROFILE = require_PROFILE();
    var QUERY = require_QUERY3();
    var RO_QUERY = require_RO_QUERY();
    var SLOWLOG = require_SLOWLOG();
    exports.default = {
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_SET,
      configSet: CONFIG_SET,
      DELETE,
      delete: DELETE,
      EXPLAIN,
      explain: EXPLAIN,
      LIST,
      list: LIST,
      PROFILE,
      profile: PROFILE,
      QUERY,
      query: QUERY,
      RO_QUERY,
      roQuery: RO_QUERY,
      SLOWLOG,
      slowLog: SLOWLOG
    };
    function pushQueryArguments(args, graph, query, options, compact) {
      args.push(graph);
      if (typeof options === "number") {
        args.push(query);
        pushTimeout(args, options);
      } else {
        args.push((options == null ? void 0 : options.params) ? `CYPHER ${queryParamsToString(options.params)} ${query}` : query);
        if ((options == null ? void 0 : options.TIMEOUT) !== void 0) {
          pushTimeout(args, options.TIMEOUT);
        }
      }
      if (compact) {
        args.push("--compact");
      }
      return args;
    }
    exports.pushQueryArguments = pushQueryArguments;
    function pushTimeout(args, timeout) {
      args.push("TIMEOUT", timeout.toString());
    }
    function queryParamsToString(params) {
      const parts = [];
      for (const [key, value] of Object.entries(params)) {
        parts.push(`${key}=${queryParamToString(value)}`);
      }
      return parts.join(" ");
    }
    function queryParamToString(param) {
      if (param === null) {
        return "null";
      }
      switch (typeof param) {
        case "string":
          return `"${param.replace(/["\\]/g, "\\$&")}"`;
        case "number":
        case "boolean":
          return param.toString();
      }
      if (Array.isArray(param)) {
        return `[${param.map(queryParamToString).join(",")}]`;
      } else if (typeof param === "object") {
        const body = [];
        for (const [key, value] of Object.entries(param)) {
          body.push(`${key}:${queryParamToString(value)}`);
        }
        return `{${body.join(",")}}`;
      } else {
        throw new TypeError(`Unexpected param type ${typeof param} ${param}`);
      }
    }
  }
});

// node_modules/@redis/graph/dist/graph.js
var require_graph = __commonJS({
  "node_modules/@redis/graph/dist/graph.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Graph_instances;
    var _Graph_client;
    var _Graph_name;
    var _Graph_metadata;
    var _Graph_setMetadataPromise;
    var _Graph_updateMetadata;
    var _Graph_setMetadata;
    var _Graph_cleanMetadataArray;
    var _Graph_getMetadata;
    var _Graph_getMetadataAsync;
    var _Graph_parseReply;
    var _Graph_parseValue;
    var _Graph_parseEdge;
    var _Graph_parseNode;
    var _Graph_parseProperties;
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphValueTypes;
    (function(GraphValueTypes2) {
      GraphValueTypes2[GraphValueTypes2["UNKNOWN"] = 0] = "UNKNOWN";
      GraphValueTypes2[GraphValueTypes2["NULL"] = 1] = "NULL";
      GraphValueTypes2[GraphValueTypes2["STRING"] = 2] = "STRING";
      GraphValueTypes2[GraphValueTypes2["INTEGER"] = 3] = "INTEGER";
      GraphValueTypes2[GraphValueTypes2["BOOLEAN"] = 4] = "BOOLEAN";
      GraphValueTypes2[GraphValueTypes2["DOUBLE"] = 5] = "DOUBLE";
      GraphValueTypes2[GraphValueTypes2["ARRAY"] = 6] = "ARRAY";
      GraphValueTypes2[GraphValueTypes2["EDGE"] = 7] = "EDGE";
      GraphValueTypes2[GraphValueTypes2["NODE"] = 8] = "NODE";
      GraphValueTypes2[GraphValueTypes2["PATH"] = 9] = "PATH";
      GraphValueTypes2[GraphValueTypes2["MAP"] = 10] = "MAP";
      GraphValueTypes2[GraphValueTypes2["POINT"] = 11] = "POINT";
    })(GraphValueTypes || (GraphValueTypes = {}));
    var Graph = class {
      constructor(client, name) {
        _Graph_instances.add(this);
        _Graph_client.set(this, void 0);
        _Graph_name.set(this, void 0);
        _Graph_metadata.set(this, void 0);
        _Graph_setMetadataPromise.set(this, void 0);
        __classPrivateFieldSet(this, _Graph_client, client, "f");
        __classPrivateFieldSet(this, _Graph_name, name, "f");
      }
      async query(query, options) {
        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.query(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
      }
      async roQuery(query, options) {
        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
      }
    };
    exports.default = Graph;
    _Graph_client = /* @__PURE__ */ new WeakMap(), _Graph_name = /* @__PURE__ */ new WeakMap(), _Graph_metadata = /* @__PURE__ */ new WeakMap(), _Graph_setMetadataPromise = /* @__PURE__ */ new WeakMap(), _Graph_instances = /* @__PURE__ */ new WeakSet(), _Graph_updateMetadata = function _Graph_updateMetadata2() {
      var _a;
      __classPrivateFieldSet(this, _Graph_setMetadataPromise, (_a = __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f")) != null ? _a : __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_setMetadata).call(this).finally(() => __classPrivateFieldSet(this, _Graph_setMetadataPromise, void 0, "f")), "f");
      return __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f");
    }, _Graph_setMetadata = async function _Graph_setMetadata2() {
      const [labels, relationshipTypes, propertyKeys] = await Promise.all([
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.labels()"),
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.relationshipTypes()"),
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.propertyKeys()")
      ]);
      __classPrivateFieldSet(this, _Graph_metadata, {
        labels: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, labels.data),
        relationshipTypes: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, relationshipTypes.data),
        propertyKeys: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, propertyKeys.data)
      }, "f");
      return __classPrivateFieldGet(this, _Graph_metadata, "f");
    }, _Graph_cleanMetadataArray = function _Graph_cleanMetadataArray2(arr) {
      return arr.map(([value]) => value);
    }, _Graph_getMetadata = function _Graph_getMetadata2(key, id) {
      var _a, _b;
      return (_b = (_a = __classPrivateFieldGet(this, _Graph_metadata, "f")) == null ? void 0 : _a[key][id]) != null ? _b : __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadataAsync).call(this, key, id);
    }, _Graph_getMetadataAsync = async function _Graph_getMetadataAsync2(key, id) {
      const value = (await __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_updateMetadata).call(this))[key][id];
      if (value === void 0)
        throw new Error(`Cannot find value from ${key}[${id}]`);
      return value;
    }, _Graph_parseReply = async function _Graph_parseReply2(reply) {
      if (!reply.data)
        return reply;
      const promises = [], parsed = {
        metadata: reply.metadata,
        data: reply.data.map((row) => {
          const data = {};
          for (let i = 0; i < row.length; i++) {
            data[reply.headers[i][1]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, row[i], promises);
          }
          return data;
        })
      };
      if (promises.length)
        await Promise.all(promises);
      return parsed;
    }, _Graph_parseValue = function _Graph_parseValue2([valueType, value], promises) {
      switch (valueType) {
        case GraphValueTypes.NULL:
          return null;
        case GraphValueTypes.STRING:
        case GraphValueTypes.INTEGER:
          return value;
        case GraphValueTypes.BOOLEAN:
          return value === "true";
        case GraphValueTypes.DOUBLE:
          return parseFloat(value);
        case GraphValueTypes.ARRAY:
          return value.map((x) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue2).call(this, x, promises));
        case GraphValueTypes.EDGE:
          return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, value, promises);
        case GraphValueTypes.NODE:
          return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, value, promises);
        case GraphValueTypes.PATH:
          return {
            nodes: value[0][1].map(([, node]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, node, promises)),
            edges: value[1][1].map(([, edge]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, edge, promises))
          };
        case GraphValueTypes.MAP:
          const map = {};
          for (let i = 0; i < value.length; i++) {
            map[value[i++]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue2).call(this, value[i], promises);
          }
          return map;
        case GraphValueTypes.POINT:
          return {
            latitude: parseFloat(value[0]),
            longitude: parseFloat(value[1])
          };
        default:
          throw new Error(`unknown scalar type: ${valueType}`);
      }
    }, _Graph_parseEdge = function _Graph_parseEdge2([id, relationshipTypeId, sourceId, destinationId, properties], promises) {
      const edge = {
        id,
        sourceId,
        destinationId,
        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
      };
      const relationshipType = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "relationshipTypes", relationshipTypeId);
      if (relationshipType instanceof Promise) {
        promises.push(relationshipType.then((value) => edge.relationshipType = value));
      } else {
        edge.relationshipType = relationshipType;
      }
      return edge;
    }, _Graph_parseNode = function _Graph_parseNode2([id, labelIds, properties], promises) {
      const labels = new Array(labelIds.length);
      for (let i = 0; i < labelIds.length; i++) {
        const value = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "labels", labelIds[i]);
        if (value instanceof Promise) {
          promises.push(value.then((value2) => labels[i] = value2));
        } else {
          labels[i] = value;
        }
      }
      return {
        id,
        labels,
        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
      };
    }, _Graph_parseProperties = function _Graph_parseProperties2(raw, promises) {
      const parsed = {};
      for (const [id, type, value] of raw) {
        const parsedValue = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, [type, value], promises), key = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "propertyKeys", id);
        if (key instanceof Promise) {
          promises.push(key.then((key2) => parsed[key2] = parsedValue));
        } else {
          parsed[key] = parsedValue;
        }
      }
      return parsed;
    };
  }
});

// node_modules/@redis/graph/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@redis/graph/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Graph = exports.default = void 0;
    var commands_1 = require_commands4();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var graph_1 = require_graph();
    Object.defineProperty(exports, "Graph", { enumerable: true, get: function() {
      return graph_1.default;
    } });
  }
});

// node_modules/@redis/json/dist/commands/ARRAPPEND.js
var require_ARRAPPEND = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRAPPEND.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, ...jsons) {
      const args = ["JSON.ARRAPPEND", key, path];
      for (const json of jsons) {
        args.push((0, _1.transformRedisJsonArgument)(json));
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/ARRINDEX.js
var require_ARRINDEX = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRINDEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, path, json, start, stop) {
      const args = ["JSON.ARRINDEX", key, path, (0, _1.transformRedisJsonArgument)(json)];
      if (start !== void 0 && start !== null) {
        args.push(start.toString());
        if (stop !== void 0 && stop !== null) {
          args.push(stop.toString());
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/ARRINSERT.js
var require_ARRINSERT = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRINSERT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, index, ...jsons) {
      const args = ["JSON.ARRINSERT", key, path, index.toString()];
      for (const json of jsons) {
        args.push((0, _1.transformRedisJsonArgument)(json));
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/ARRLEN.js
var require_ARRLEN = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, path) {
      const args = ["JSON.ARRLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/ARRPOP.js
var require_ARRPOP = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRPOP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, index) {
      const args = ["JSON.ARRPOP", key];
      if (path) {
        args.push(path);
        if (index !== void 0 && index !== null) {
          args.push(index.toString());
        }
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply === null)
        return null;
      if (Array.isArray(reply)) {
        return reply.map(_1.transformRedisJsonNullReply);
      }
      return (0, _1.transformRedisJsonNullReply)(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/json/dist/commands/ARRTRIM.js
var require_ARRTRIM = __commonJS({
  "node_modules/@redis/json/dist/commands/ARRTRIM.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, start, stop) {
      return ["JSON.ARRTRIM", key, path, start.toString(), stop.toString()];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/DEBUG_MEMORY.js
var require_DEBUG_MEMORY = __commonJS({
  "node_modules/@redis/json/dist/commands/DEBUG_MEMORY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 2;
    function transformArguments(key, path) {
      const args = ["JSON.DEBUG", "MEMORY", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/DEL.js
var require_DEL3 = __commonJS({
  "node_modules/@redis/json/dist/commands/DEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.DEL", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/FORGET.js
var require_FORGET = __commonJS({
  "node_modules/@redis/json/dist/commands/FORGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.FORGET", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/GET.js
var require_GET2 = __commonJS({
  "node_modules/@redis/json/dist/commands/GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      let args = ["JSON.GET", key];
      if (options == null ? void 0 : options.path) {
        args = (0, generic_transformers_1.pushVerdictArguments)(args, options.path);
      }
      if (options == null ? void 0 : options.INDENT) {
        args.push("INDENT", options.INDENT);
      }
      if (options == null ? void 0 : options.NEWLINE) {
        args.push("NEWLINE", options.NEWLINE);
      }
      if (options == null ? void 0 : options.SPACE) {
        args.push("SPACE", options.SPACE);
      }
      if (options == null ? void 0 : options.NOESCAPE) {
        args.push("NOESCAPE");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformRedisJsonNullReply;
    } });
  }
});

// node_modules/@redis/json/dist/commands/MGET.js
var require_MGET2 = __commonJS({
  "node_modules/@redis/json/dist/commands/MGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(keys, path) {
      return [
        "JSON.MGET",
        ...keys,
        path
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(_1.transformRedisJsonNullReply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/json/dist/commands/NUMINCRBY.js
var require_NUMINCRBY = __commonJS({
  "node_modules/@redis/json/dist/commands/NUMINCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, by) {
      return ["JSON.NUMINCRBY", key, path, by.toString()];
    }
    exports.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformNumbersReply;
    } });
  }
});

// node_modules/@redis/json/dist/commands/NUMMULTBY.js
var require_NUMMULTBY = __commonJS({
  "node_modules/@redis/json/dist/commands/NUMMULTBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, by) {
      return ["JSON.NUMMULTBY", key, path, by.toString()];
    }
    exports.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _1.transformNumbersReply;
    } });
  }
});

// node_modules/@redis/json/dist/commands/OBJKEYS.js
var require_OBJKEYS = __commonJS({
  "node_modules/@redis/json/dist/commands/OBJKEYS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.OBJKEYS", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/OBJLEN.js
var require_OBJLEN = __commonJS({
  "node_modules/@redis/json/dist/commands/OBJLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.OBJLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/RESP.js
var require_RESP = __commonJS({
  "node_modules/@redis/json/dist/commands/RESP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.RESP", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/SET.js
var require_SET2 = __commonJS({
  "node_modules/@redis/json/dist/commands/SET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, json, options) {
      const args = ["JSON.SET", key, path, (0, _1.transformRedisJsonArgument)(json)];
      if (options == null ? void 0 : options.NX) {
        args.push("NX");
      } else if (options == null ? void 0 : options.XX) {
        args.push("XX");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/STRAPPEND.js
var require_STRAPPEND = __commonJS({
  "node_modules/@redis/json/dist/commands/STRAPPEND.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(...[key, pathOrAppend, append]) {
      const args = ["JSON.STRAPPEND", key];
      if (append !== void 0 && append !== null) {
        args.push(pathOrAppend, (0, _1.transformRedisJsonArgument)(append));
      } else {
        args.push((0, _1.transformRedisJsonArgument)(pathOrAppend));
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/STRLEN.js
var require_STRLEN2 = __commonJS({
  "node_modules/@redis/json/dist/commands/STRLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, path) {
      const args = ["JSON.STRLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/TYPE.js
var require_TYPE2 = __commonJS({
  "node_modules/@redis/json/dist/commands/TYPE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.TYPE", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/json/dist/commands/index.js
var require_commands5 = __commonJS({
  "node_modules/@redis/json/dist/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformNumbersReply = exports.transformRedisJsonNullReply = exports.transformRedisJsonReply = exports.transformRedisJsonArgument = void 0;
    var ARRAPPEND = require_ARRAPPEND();
    var ARRINDEX = require_ARRINDEX();
    var ARRINSERT = require_ARRINSERT();
    var ARRLEN = require_ARRLEN();
    var ARRPOP = require_ARRPOP();
    var ARRTRIM = require_ARRTRIM();
    var DEBUG_MEMORY = require_DEBUG_MEMORY();
    var DEL = require_DEL3();
    var FORGET = require_FORGET();
    var GET = require_GET2();
    var MGET = require_MGET2();
    var NUMINCRBY = require_NUMINCRBY();
    var NUMMULTBY = require_NUMMULTBY();
    var OBJKEYS = require_OBJKEYS();
    var OBJLEN = require_OBJLEN();
    var RESP = require_RESP();
    var SET = require_SET2();
    var STRAPPEND = require_STRAPPEND();
    var STRLEN = require_STRLEN2();
    var TYPE = require_TYPE2();
    exports.default = {
      ARRAPPEND,
      arrAppend: ARRAPPEND,
      ARRINDEX,
      arrIndex: ARRINDEX,
      ARRINSERT,
      arrInsert: ARRINSERT,
      ARRLEN,
      arrLen: ARRLEN,
      ARRPOP,
      arrPop: ARRPOP,
      ARRTRIM,
      arrTrim: ARRTRIM,
      DEBUG_MEMORY,
      debugMemory: DEBUG_MEMORY,
      DEL,
      del: DEL,
      FORGET,
      forget: FORGET,
      GET,
      get: GET,
      MGET,
      mGet: MGET,
      NUMINCRBY,
      numIncrBy: NUMINCRBY,
      NUMMULTBY,
      numMultBy: NUMMULTBY,
      OBJKEYS,
      objKeys: OBJKEYS,
      OBJLEN,
      objLen: OBJLEN,
      RESP,
      resp: RESP,
      SET,
      set: SET,
      STRAPPEND,
      strAppend: STRAPPEND,
      STRLEN,
      strLen: STRLEN,
      TYPE,
      type: TYPE
    };
    function transformRedisJsonArgument(json) {
      return JSON.stringify(json);
    }
    exports.transformRedisJsonArgument = transformRedisJsonArgument;
    function transformRedisJsonReply(json) {
      return JSON.parse(json);
    }
    exports.transformRedisJsonReply = transformRedisJsonReply;
    function transformRedisJsonNullReply(json) {
      if (json === null)
        return null;
      return transformRedisJsonReply(json);
    }
    exports.transformRedisJsonNullReply = transformRedisJsonNullReply;
    function transformNumbersReply(reply) {
      return JSON.parse(reply);
    }
    exports.transformNumbersReply = transformNumbersReply;
  }
});

// node_modules/@redis/json/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@redis/json/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    var commands_1 = require_commands5();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
  }
});

// node_modules/@redis/search/dist/commands/_LIST.js
var require_LIST3 = __commonJS({
  "node_modules/@redis/search/dist/commands/_LIST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments() {
      return ["FT._LIST"];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/ALTER.js
var require_ALTER = __commonJS({
  "node_modules/@redis/search/dist/commands/ALTER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var _1 = require_commands6();
    function transformArguments(index, schema) {
      const args = ["FT.ALTER", index, "SCHEMA", "ADD"];
      (0, _1.pushSchema)(args, schema);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/AGGREGATE.js
var require_AGGREGATE = __commonJS({
  "node_modules/@redis/search/dist/commands/AGGREGATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.pushAggregatehOptions = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = exports.AggregateGroupByReducers = exports.AggregateSteps = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_commands6();
    var AggregateSteps;
    (function(AggregateSteps2) {
      AggregateSteps2["GROUPBY"] = "GROUPBY";
      AggregateSteps2["SORTBY"] = "SORTBY";
      AggregateSteps2["APPLY"] = "APPLY";
      AggregateSteps2["LIMIT"] = "LIMIT";
      AggregateSteps2["FILTER"] = "FILTER";
    })(AggregateSteps = exports.AggregateSteps || (exports.AggregateSteps = {}));
    var AggregateGroupByReducers;
    (function(AggregateGroupByReducers2) {
      AggregateGroupByReducers2["COUNT"] = "COUNT";
      AggregateGroupByReducers2["COUNT_DISTINCT"] = "COUNT_DISTINCT";
      AggregateGroupByReducers2["COUNT_DISTINCTISH"] = "COUNT_DISTINCTISH";
      AggregateGroupByReducers2["SUM"] = "SUM";
      AggregateGroupByReducers2["MIN"] = "MIN";
      AggregateGroupByReducers2["MAX"] = "MAX";
      AggregateGroupByReducers2["AVG"] = "AVG";
      AggregateGroupByReducers2["STDDEV"] = "STDDEV";
      AggregateGroupByReducers2["QUANTILE"] = "QUANTILE";
      AggregateGroupByReducers2["TOLIST"] = "TOLIST";
      AggregateGroupByReducers2["TO_LIST"] = "TOLIST";
      AggregateGroupByReducers2["FIRST_VALUE"] = "FIRST_VALUE";
      AggregateGroupByReducers2["RANDOM_SAMPLE"] = "RANDOM_SAMPLE";
    })(AggregateGroupByReducers = exports.AggregateGroupByReducers || (exports.AggregateGroupByReducers = {}));
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      return pushAggregatehOptions(["FT.AGGREGATE", index, query], options);
    }
    exports.transformArguments = transformArguments;
    function pushAggregatehOptions(args, options) {
      if (options == null ? void 0 : options.VERBATIM) {
        args.push("VERBATIM");
      }
      if (options == null ? void 0 : options.LOAD) {
        args.push("LOAD");
        (0, _1.pushArgumentsWithLength)(args, () => {
          if (Array.isArray(options.LOAD)) {
            for (const load of options.LOAD) {
              pushLoadField(args, load);
            }
          } else {
            pushLoadField(args, options.LOAD);
          }
        });
      }
      if (options == null ? void 0 : options.STEPS) {
        for (const step of options.STEPS) {
          switch (step.type) {
            case AggregateSteps.GROUPBY:
              args.push("GROUPBY");
              if (!step.properties) {
                args.push("0");
              } else {
                (0, generic_transformers_1.pushVerdictArgument)(args, step.properties);
              }
              if (Array.isArray(step.REDUCE)) {
                for (const reducer of step.REDUCE) {
                  pushGroupByReducer(args, reducer);
                }
              } else {
                pushGroupByReducer(args, step.REDUCE);
              }
              break;
            case AggregateSteps.SORTBY:
              (0, _1.pushSortByArguments)(args, "SORTBY", step.BY);
              if (step.MAX) {
                args.push("MAX", step.MAX.toString());
              }
              break;
            case AggregateSteps.APPLY:
              args.push("APPLY", step.expression, "AS", step.AS);
              break;
            case AggregateSteps.LIMIT:
              args.push("LIMIT", step.from.toString(), step.size.toString());
              break;
            case AggregateSteps.FILTER:
              args.push("FILTER", step.expression);
              break;
          }
        }
      }
      (0, _1.pushParamsArgs)(args, options == null ? void 0 : options.PARAMS);
      if (options == null ? void 0 : options.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports.pushAggregatehOptions = pushAggregatehOptions;
    function pushLoadField(args, toLoad) {
      if (typeof toLoad === "string") {
        args.push(toLoad);
      } else {
        args.push(toLoad.identifier);
        if (toLoad.AS) {
          args.push("AS", toLoad.AS);
        }
      }
    }
    function pushGroupByReducer(args, reducer) {
      args.push("REDUCE", reducer.type);
      switch (reducer.type) {
        case AggregateGroupByReducers.COUNT:
          args.push("0");
          break;
        case AggregateGroupByReducers.COUNT_DISTINCT:
        case AggregateGroupByReducers.COUNT_DISTINCTISH:
        case AggregateGroupByReducers.SUM:
        case AggregateGroupByReducers.MIN:
        case AggregateGroupByReducers.MAX:
        case AggregateGroupByReducers.AVG:
        case AggregateGroupByReducers.STDDEV:
        case AggregateGroupByReducers.TOLIST:
          args.push("1", reducer.property);
          break;
        case AggregateGroupByReducers.QUANTILE:
          args.push("2", reducer.property, reducer.quantile.toString());
          break;
        case AggregateGroupByReducers.FIRST_VALUE: {
          (0, _1.pushArgumentsWithLength)(args, () => {
            args.push(reducer.property);
            if (reducer.BY) {
              args.push("BY");
              if (typeof reducer.BY === "string") {
                args.push(reducer.BY);
              } else {
                args.push(reducer.BY.property);
                if (reducer.BY.direction) {
                  args.push(reducer.BY.direction);
                }
              }
            }
          });
          break;
        }
        case AggregateGroupByReducers.RANDOM_SAMPLE:
          args.push("2", reducer.property, reducer.sampleSize.toString());
          break;
      }
      if (reducer.AS) {
        args.push("AS", reducer.AS);
      }
    }
    function transformReply(rawReply) {
      const results = [];
      for (let i = 1; i < rawReply.length; i++) {
        results.push((0, generic_transformers_1.transformTuplesReply)(rawReply[i]));
      }
      return {
        total: rawReply[0],
        results
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/AGGREGATE_WITHCURSOR.js
var require_AGGREGATE_WITHCURSOR = __commonJS({
  "node_modules/@redis/search/dist/commands/AGGREGATE_WITHCURSOR.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var AGGREGATE_1 = require_AGGREGATE();
    var AGGREGATE_2 = require_AGGREGATE();
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return AGGREGATE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return AGGREGATE_2.IS_READ_ONLY;
    } });
    function transformArguments(index, query, options) {
      const args = (0, AGGREGATE_1.transformArguments)(index, query, options);
      args.push("WITHCURSOR");
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        ...(0, AGGREGATE_1.transformReply)(reply[0]),
        cursor: reply[1]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/ALIASADD.js
var require_ALIASADD = __commonJS({
  "node_modules/@redis/search/dist/commands/ALIASADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASADD", name, index];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/ALIASDEL.js
var require_ALIASDEL = __commonJS({
  "node_modules/@redis/search/dist/commands/ALIASDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASDEL", name, index];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/ALIASUPDATE.js
var require_ALIASUPDATE = __commonJS({
  "node_modules/@redis/search/dist/commands/ALIASUPDATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASUPDATE", name, index];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/CONFIG_GET.js
var require_CONFIG_GET3 = __commonJS({
  "node_modules/@redis/search/dist/commands/CONFIG_GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(option) {
      return ["FT.CONFIG", "GET", option];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const transformedReply = /* @__PURE__ */ Object.create(null);
      for (const [key, value] of rawReply) {
        transformedReply[key] = value;
      }
      return transformedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/CONFIG_SET.js
var require_CONFIG_SET3 = __commonJS({
  "node_modules/@redis/search/dist/commands/CONFIG_SET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(option, value) {
      return ["FT.CONFIG", "SET", option, value];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/CREATE.js
var require_CREATE2 = __commonJS({
  "node_modules/@redis/search/dist/commands/CREATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_commands6();
    function transformArguments(index, schema, options) {
      const args = ["FT.CREATE", index];
      if (options == null ? void 0 : options.ON) {
        args.push("ON", options.ON);
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "PREFIX", options == null ? void 0 : options.PREFIX);
      if (options == null ? void 0 : options.FILTER) {
        args.push("FILTER", options.FILTER);
      }
      if (options == null ? void 0 : options.LANGUAGE) {
        args.push("LANGUAGE", options.LANGUAGE);
      }
      if (options == null ? void 0 : options.LANGUAGE_FIELD) {
        args.push("LANGUAGE_FIELD", options.LANGUAGE_FIELD);
      }
      if (options == null ? void 0 : options.SCORE) {
        args.push("SCORE", options.SCORE.toString());
      }
      if (options == null ? void 0 : options.SCORE_FIELD) {
        args.push("SCORE_FIELD", options.SCORE_FIELD);
      }
      if (options == null ? void 0 : options.MAXTEXTFIELDS) {
        args.push("MAXTEXTFIELDS");
      }
      if (options == null ? void 0 : options.TEMPORARY) {
        args.push("TEMPORARY", options.TEMPORARY.toString());
      }
      if (options == null ? void 0 : options.NOOFFSETS) {
        args.push("NOOFFSETS");
      }
      if (options == null ? void 0 : options.NOHL) {
        args.push("NOHL");
      }
      if (options == null ? void 0 : options.NOFIELDS) {
        args.push("NOFIELDS");
      }
      if (options == null ? void 0 : options.NOFREQS) {
        args.push("NOFREQS");
      }
      if (options == null ? void 0 : options.SKIPINITIALSCAN) {
        args.push("SKIPINITIALSCAN");
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "STOPWORDS", options == null ? void 0 : options.STOPWORDS);
      args.push("SCHEMA");
      (0, _1.pushSchema)(args, schema);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/CURSOR_DEL.js
var require_CURSOR_DEL = __commonJS({
  "node_modules/@redis/search/dist/commands/CURSOR_DEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(index, cursorId) {
      return [
        "FT.CURSOR",
        "DEL",
        index,
        cursorId.toString()
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/CURSOR_READ.js
var require_CURSOR_READ = __commonJS({
  "node_modules/@redis/search/dist/commands/CURSOR_READ.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(index, cursor) {
      return [
        "FT.CURSOR",
        "READ",
        index,
        cursor.toString()
      ];
    }
    exports.transformArguments = transformArguments;
    var AGGREGATE_WITHCURSOR_1 = require_AGGREGATE_WITHCURSOR();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return AGGREGATE_WITHCURSOR_1.transformReply;
    } });
  }
});

// node_modules/@redis/search/dist/commands/DICTADD.js
var require_DICTADD = __commonJS({
  "node_modules/@redis/search/dist/commands/DICTADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(dictionary, term) {
      return (0, generic_transformers_1.pushVerdictArguments)(["FT.DICTADD", dictionary], term);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/DICTDEL.js
var require_DICTDEL = __commonJS({
  "node_modules/@redis/search/dist/commands/DICTDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(dictionary, term) {
      return (0, generic_transformers_1.pushVerdictArguments)(["FT.DICTDEL", dictionary], term);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/DICTDUMP.js
var require_DICTDUMP = __commonJS({
  "node_modules/@redis/search/dist/commands/DICTDUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(dictionary) {
      return ["FT.DICTDUMP", dictionary];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/DROPINDEX.js
var require_DROPINDEX = __commonJS({
  "node_modules/@redis/search/dist/commands/DROPINDEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(index, options) {
      const args = ["FT.DROPINDEX", index];
      if (options == null ? void 0 : options.DD) {
        args.push("DD");
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/EXPLAIN.js
var require_EXPLAIN2 = __commonJS({
  "node_modules/@redis/search/dist/commands/EXPLAIN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands6();
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      const args = ["FT.EXPLAIN", index, query];
      (0, _1.pushParamsArgs)(args, options == null ? void 0 : options.PARAMS);
      if (options == null ? void 0 : options.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/EXPLAINCLI.js
var require_EXPLAINCLI = __commonJS({
  "node_modules/@redis/search/dist/commands/EXPLAINCLI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query) {
      return ["FT.EXPLAINCLI", index, query];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/INFO.js
var require_INFO7 = __commonJS({
  "node_modules/@redis/search/dist/commands/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(index) {
      return ["FT.INFO", index];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return {
        indexName: rawReply[1],
        indexOptions: rawReply[3],
        indexDefinition: (0, generic_transformers_1.transformTuplesReply)(rawReply[5]),
        attributes: rawReply[7].map((attribute) => (0, generic_transformers_1.transformTuplesReply)(attribute)),
        numDocs: rawReply[9],
        maxDocId: rawReply[11],
        numTerms: rawReply[13],
        numRecords: rawReply[15],
        invertedSzMb: rawReply[17],
        vectorIndexSzMb: rawReply[19],
        totalInvertedIndexBlocks: rawReply[21],
        offsetVectorsSzMb: rawReply[23],
        docTableSizeMb: rawReply[25],
        sortableValuesSizeMb: rawReply[27],
        keyTableSizeMb: rawReply[29],
        recordsPerDocAvg: rawReply[31],
        bytesPerRecordAvg: rawReply[33],
        offsetsPerTermAvg: rawReply[35],
        offsetBitsPerRecordAvg: rawReply[37],
        hashIndexingFailures: rawReply[39],
        indexing: rawReply[41],
        percentIndexed: rawReply[43],
        gcStats: {
          bytesCollected: rawReply[45][1],
          totalMsRun: rawReply[45][3],
          totalCycles: rawReply[45][5],
          averageCycleTimeMs: rawReply[45][7],
          lastRunTimeMs: rawReply[45][9],
          gcNumericTreesMissed: rawReply[45][11],
          gcBlocksDenied: rawReply[45][13]
        },
        cursorStats: {
          globalIdle: rawReply[47][1],
          globalTotal: rawReply[47][3],
          indexCapacity: rawReply[47][5],
          idnexTotal: rawReply[47][7]
        },
        stopWords: rawReply[49]
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SEARCH.js
var require_SEARCH = __commonJS({
  "node_modules/@redis/search/dist/commands/SEARCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_commands6();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      return (0, _1.pushSearchOptions)(["FT.SEARCH", index, query], options);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      const documents = [];
      for (let i = 1; i < reply.length; i += 2) {
        const tuples = reply[i + 1];
        documents.push({
          id: reply[i],
          value: tuples.length === 2 && tuples[0] === "$" ? JSON.parse(tuples[1]) : (0, generic_transformers_1.transformTuplesReply)(tuples)
        });
      }
      return {
        total: reply[0],
        documents
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/PROFILE_SEARCH.js
var require_PROFILE_SEARCH = __commonJS({
  "node_modules/@redis/search/dist/commands/PROFILE_SEARCH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var SEARCH_1 = require_SEARCH();
    var _1 = require_commands6();
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      const args = ["FT.PROFILE", index, "SEARCH"];
      if (options == null ? void 0 : options.LIMITED) {
        args.push("LIMITED");
      }
      args.push("QUERY", query);
      return (0, _1.pushSearchOptions)(args, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        results: (0, SEARCH_1.transformReply)(reply[0]),
        profile: (0, _1.transformProfile)(reply[1])
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/PROFILE_AGGREGATE.js
var require_PROFILE_AGGREGATE = __commonJS({
  "node_modules/@redis/search/dist/commands/PROFILE_AGGREGATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var AGGREGATE_1 = require_AGGREGATE();
    var _1 = require_commands6();
    exports.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      const args = ["FT.PROFILE", index, "AGGREGATE"];
      if (options == null ? void 0 : options.LIMITED) {
        args.push("LIMITED");
      }
      args.push("QUERY", query);
      (0, AGGREGATE_1.pushAggregatehOptions)(args, options);
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        results: (0, AGGREGATE_1.transformReply)(reply[0]),
        profile: (0, _1.transformProfile)(reply[1])
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SPELLCHECK.js
var require_SPELLCHECK = __commonJS({
  "node_modules/@redis/search/dist/commands/SPELLCHECK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(index, query, options) {
      const args = ["FT.SPELLCHECK", index, query];
      if (options == null ? void 0 : options.DISTANCE) {
        args.push("DISTANCE", options.DISTANCE.toString());
      }
      if (options == null ? void 0 : options.TERMS) {
        if (Array.isArray(options.TERMS)) {
          for (const term of options.TERMS) {
            pushTerms(args, term);
          }
        } else {
          pushTerms(args, options.TERMS);
        }
      }
      if (options == null ? void 0 : options.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
    function pushTerms(args, { mode, dictionary }) {
      args.push("TERMS", mode, dictionary);
    }
    function transformReply(rawReply) {
      return rawReply.map(([, term, suggestions]) => ({
        term,
        suggestions: suggestions.map(([score, suggestion]) => ({
          score: Number(score),
          suggestion
        }))
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SUGADD.js
var require_SUGADD = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(key, string, score, options) {
      const args = ["FT.SUGADD", key, string, score.toString()];
      if (options == null ? void 0 : options.INCR) {
        args.push("INCR");
      }
      if (options == null ? void 0 : options.PAYLOAD) {
        args.push("PAYLOAD", options.PAYLOAD);
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/SUGDEL.js
var require_SUGDEL = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGDEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = void 0;
    function transformArguments(key, string) {
      return ["FT.SUGDEL", key, string];
    }
    exports.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/@redis/search/dist/commands/SUGGET.js
var require_SUGGET = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, prefix, options) {
      const args = ["FT.SUGGET", key, prefix];
      if (options == null ? void 0 : options.FUZZY) {
        args.push("FUZZY");
      }
      if (options == null ? void 0 : options.MAX) {
        args.push("MAX", options.MAX.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/SUGGET_WITHPAYLOADS.js
var require_SUGGET_WITHPAYLOADS = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGGET_WITHPAYLOADS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHPAYLOADS"
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply.push({
          suggestion: rawReply[i],
          payload: rawReply[i + 1]
        });
      }
      return transformedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS.js
var require_SUGGET_WITHSCORES_WITHPAYLOADS = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHSCORES",
        "WITHPAYLOADS"
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 3) {
        transformedReply.push({
          suggestion: rawReply[i],
          score: Number(rawReply[i + 1]),
          payload: rawReply[i + 2]
        });
      }
      return transformedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES.js
var require_SUGGET_WITHSCORES = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHSCORES"
      ];
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply.push({
          suggestion: rawReply[i],
          score: Number(rawReply[i + 1])
        });
      }
      return transformedReply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/search/dist/commands/SUGLEN.js
var require_SUGLEN = __commonJS({
  "node_modules/@redis/search/dist/commands/SUGLEN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["FT.SUGLEN", key];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/SYNDUMP.js
var require_SYNDUMP = __commonJS({
  "node_modules/@redis/search/dist/commands/SYNDUMP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(index) {
      return ["FT.SYNDUMP", index];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/SYNUPDATE.js
var require_SYNUPDATE = __commonJS({
  "node_modules/@redis/search/dist/commands/SYNUPDATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(index, groupId, terms, options) {
      const args = ["FT.SYNUPDATE", index, groupId];
      if (options == null ? void 0 : options.SKIPINITIALSCAN) {
        args.push("SKIPINITIALSCAN");
      }
      return (0, generic_transformers_1.pushVerdictArguments)(args, terms);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/TAGVALS.js
var require_TAGVALS = __commonJS({
  "node_modules/@redis/search/dist/commands/TAGVALS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = void 0;
    function transformArguments(index, fieldName) {
      return ["FT.TAGVALS", index, fieldName];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/search/dist/commands/index.js
var require_commands6 = __commonJS({
  "node_modules/@redis/search/dist/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformProfile = exports.pushSearchOptions = exports.pushParamsArgs = exports.pushSchema = exports.VectorAlgorithms = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = exports.pushArgumentsWithLength = exports.pushSortByArguments = exports.pushSortByProperty = exports.RedisSearchLanguages = void 0;
    var _LIST = require_LIST3();
    var ALTER = require_ALTER();
    var AGGREGATE_WITHCURSOR = require_AGGREGATE_WITHCURSOR();
    var AGGREGATE = require_AGGREGATE();
    var ALIASADD = require_ALIASADD();
    var ALIASDEL = require_ALIASDEL();
    var ALIASUPDATE = require_ALIASUPDATE();
    var CONFIG_GET = require_CONFIG_GET3();
    var CONFIG_SET = require_CONFIG_SET3();
    var CREATE = require_CREATE2();
    var CURSOR_DEL = require_CURSOR_DEL();
    var CURSOR_READ = require_CURSOR_READ();
    var DICTADD = require_DICTADD();
    var DICTDEL = require_DICTDEL();
    var DICTDUMP = require_DICTDUMP();
    var DROPINDEX = require_DROPINDEX();
    var EXPLAIN = require_EXPLAIN2();
    var EXPLAINCLI = require_EXPLAINCLI();
    var INFO = require_INFO7();
    var PROFILESEARCH = require_PROFILE_SEARCH();
    var PROFILEAGGREGATE = require_PROFILE_AGGREGATE();
    var SEARCH = require_SEARCH();
    var SPELLCHECK = require_SPELLCHECK();
    var SUGADD = require_SUGADD();
    var SUGDEL = require_SUGDEL();
    var SUGGET_WITHPAYLOADS = require_SUGGET_WITHPAYLOADS();
    var SUGGET_WITHSCORES_WITHPAYLOADS = require_SUGGET_WITHSCORES_WITHPAYLOADS();
    var SUGGET_WITHSCORES = require_SUGGET_WITHSCORES();
    var SUGGET = require_SUGGET();
    var SUGLEN = require_SUGLEN();
    var SYNDUMP = require_SYNDUMP();
    var SYNUPDATE = require_SYNUPDATE();
    var TAGVALS = require_TAGVALS();
    var generic_transformers_1 = require_generic_transformers();
    exports.default = {
      _LIST,
      _list: _LIST,
      ALTER,
      alter: ALTER,
      AGGREGATE_WITHCURSOR,
      aggregateWithCursor: AGGREGATE_WITHCURSOR,
      AGGREGATE,
      aggregate: AGGREGATE,
      ALIASADD,
      aliasAdd: ALIASADD,
      ALIASDEL,
      aliasDel: ALIASDEL,
      ALIASUPDATE,
      aliasUpdate: ALIASUPDATE,
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_SET,
      configSet: CONFIG_SET,
      CREATE,
      create: CREATE,
      CURSOR_DEL,
      cursorDel: CURSOR_DEL,
      CURSOR_READ,
      cursorRead: CURSOR_READ,
      DICTADD,
      dictAdd: DICTADD,
      DICTDEL,
      dictDel: DICTDEL,
      DICTDUMP,
      dictDump: DICTDUMP,
      DROPINDEX,
      dropIndex: DROPINDEX,
      EXPLAIN,
      explain: EXPLAIN,
      EXPLAINCLI,
      explainCli: EXPLAINCLI,
      INFO,
      info: INFO,
      PROFILESEARCH,
      profileSearch: PROFILESEARCH,
      PROFILEAGGREGATE,
      profileAggregate: PROFILEAGGREGATE,
      SEARCH,
      search: SEARCH,
      SPELLCHECK,
      spellCheck: SPELLCHECK,
      SUGADD,
      sugAdd: SUGADD,
      SUGDEL,
      sugDel: SUGDEL,
      SUGGET_WITHPAYLOADS,
      sugGetWithPayloads: SUGGET_WITHPAYLOADS,
      SUGGET_WITHSCORES_WITHPAYLOADS,
      sugGetWithScoresWithPayloads: SUGGET_WITHSCORES_WITHPAYLOADS,
      SUGGET_WITHSCORES,
      sugGetWithScores: SUGGET_WITHSCORES,
      SUGGET,
      sugGet: SUGGET,
      SUGLEN,
      sugLen: SUGLEN,
      SYNDUMP,
      synDump: SYNDUMP,
      SYNUPDATE,
      synUpdate: SYNUPDATE,
      TAGVALS,
      tagVals: TAGVALS
    };
    var RedisSearchLanguages;
    (function(RedisSearchLanguages2) {
      RedisSearchLanguages2["ARABIC"] = "Arabic";
      RedisSearchLanguages2["BASQUE"] = "Basque";
      RedisSearchLanguages2["CATALANA"] = "Catalan";
      RedisSearchLanguages2["DANISH"] = "Danish";
      RedisSearchLanguages2["DUTCH"] = "Dutch";
      RedisSearchLanguages2["ENGLISH"] = "English";
      RedisSearchLanguages2["FINNISH"] = "Finnish";
      RedisSearchLanguages2["FRENCH"] = "French";
      RedisSearchLanguages2["GERMAN"] = "German";
      RedisSearchLanguages2["GREEK"] = "Greek";
      RedisSearchLanguages2["HUNGARIAN"] = "Hungarian";
      RedisSearchLanguages2["INDONESAIN"] = "Indonesian";
      RedisSearchLanguages2["IRISH"] = "Irish";
      RedisSearchLanguages2["ITALIAN"] = "Italian";
      RedisSearchLanguages2["LITHUANIAN"] = "Lithuanian";
      RedisSearchLanguages2["NEPALI"] = "Nepali";
      RedisSearchLanguages2["NORWEIGAN"] = "Norwegian";
      RedisSearchLanguages2["PORTUGUESE"] = "Portuguese";
      RedisSearchLanguages2["ROMANIAN"] = "Romanian";
      RedisSearchLanguages2["RUSSIAN"] = "Russian";
      RedisSearchLanguages2["SPANISH"] = "Spanish";
      RedisSearchLanguages2["SWEDISH"] = "Swedish";
      RedisSearchLanguages2["TAMIL"] = "Tamil";
      RedisSearchLanguages2["TURKISH"] = "Turkish";
      RedisSearchLanguages2["CHINESE"] = "Chinese";
    })(RedisSearchLanguages = exports.RedisSearchLanguages || (exports.RedisSearchLanguages = {}));
    function pushSortByProperty(args, sortBy) {
      if (typeof sortBy === "string") {
        args.push(sortBy);
      } else {
        args.push(sortBy.BY);
        if (sortBy.DIRECTION) {
          args.push(sortBy.DIRECTION);
        }
      }
    }
    exports.pushSortByProperty = pushSortByProperty;
    function pushSortByArguments(args, name, sortBy) {
      const lengthBefore = args.push(
        name,
        ""
      );
      if (Array.isArray(sortBy)) {
        for (const field of sortBy) {
          pushSortByProperty(args, field);
        }
      } else {
        pushSortByProperty(args, sortBy);
      }
      args[lengthBefore - 1] = (args.length - lengthBefore).toString();
      return args;
    }
    exports.pushSortByArguments = pushSortByArguments;
    function pushArgumentsWithLength(args, fn) {
      const lengthIndex = args.push("") - 1;
      fn(args);
      args[lengthIndex] = (args.length - lengthIndex - 1).toString();
      return args;
    }
    exports.pushArgumentsWithLength = pushArgumentsWithLength;
    var SchemaFieldTypes;
    (function(SchemaFieldTypes2) {
      SchemaFieldTypes2["TEXT"] = "TEXT";
      SchemaFieldTypes2["NUMERIC"] = "NUMERIC";
      SchemaFieldTypes2["GEO"] = "GEO";
      SchemaFieldTypes2["TAG"] = "TAG";
      SchemaFieldTypes2["VECTOR"] = "VECTOR";
    })(SchemaFieldTypes = exports.SchemaFieldTypes || (exports.SchemaFieldTypes = {}));
    var SchemaTextFieldPhonetics;
    (function(SchemaTextFieldPhonetics2) {
      SchemaTextFieldPhonetics2["DM_EN"] = "dm:en";
      SchemaTextFieldPhonetics2["DM_FR"] = "dm:fr";
      SchemaTextFieldPhonetics2["FM_PT"] = "dm:pt";
      SchemaTextFieldPhonetics2["DM_ES"] = "dm:es";
    })(SchemaTextFieldPhonetics = exports.SchemaTextFieldPhonetics || (exports.SchemaTextFieldPhonetics = {}));
    var VectorAlgorithms;
    (function(VectorAlgorithms2) {
      VectorAlgorithms2["FLAT"] = "FLAT";
      VectorAlgorithms2["HNSW"] = "HNSW";
    })(VectorAlgorithms = exports.VectorAlgorithms || (exports.VectorAlgorithms = {}));
    function pushSchema(args, schema) {
      for (const [field, fieldOptions] of Object.entries(schema)) {
        args.push(field);
        if (typeof fieldOptions === "string") {
          args.push(fieldOptions);
          continue;
        }
        if (fieldOptions.AS) {
          args.push("AS", fieldOptions.AS);
        }
        args.push(fieldOptions.type);
        switch (fieldOptions.type) {
          case SchemaFieldTypes.TEXT:
            if (fieldOptions.NOSTEM) {
              args.push("NOSTEM");
            }
            if (fieldOptions.WEIGHT) {
              args.push("WEIGHT", fieldOptions.WEIGHT.toString());
            }
            if (fieldOptions.PHONETIC) {
              args.push("PHONETIC", fieldOptions.PHONETIC);
            }
            if (fieldOptions.WITHSUFFIXTRIE) {
              args.push("WITHSUFFIXTRIE");
            }
            break;
          case SchemaFieldTypes.TAG:
            if (fieldOptions.SEPARATOR) {
              args.push("SEPARATOR", fieldOptions.SEPARATOR);
            }
            if (fieldOptions.CASESENSITIVE) {
              args.push("CASESENSITIVE");
            }
            if (fieldOptions.WITHSUFFIXTRIE) {
              args.push("WITHSUFFIXTRIE");
            }
            break;
          case SchemaFieldTypes.VECTOR:
            args.push(fieldOptions.ALGORITHM);
            pushArgumentsWithLength(args, () => {
              args.push("TYPE", fieldOptions.TYPE, "DIM", fieldOptions.DIM.toString(), "DISTANCE_METRIC", fieldOptions.DISTANCE_METRIC);
              if (fieldOptions.INITIAL_CAP) {
                args.push("INITIAL_CAP", fieldOptions.INITIAL_CAP.toString());
              }
              switch (fieldOptions.ALGORITHM) {
                case VectorAlgorithms.FLAT:
                  if (fieldOptions.BLOCK_SIZE) {
                    args.push("BLOCK_SIZE", fieldOptions.BLOCK_SIZE.toString());
                  }
                  break;
                case VectorAlgorithms.HNSW:
                  if (fieldOptions.M) {
                    args.push("M", fieldOptions.M.toString());
                  }
                  if (fieldOptions.EF_CONSTRUCTION) {
                    args.push("EF_CONSTRUCTION", fieldOptions.EF_CONSTRUCTION.toString());
                  }
                  if (fieldOptions.EF_RUNTIME) {
                    args.push("EF_RUNTIME", fieldOptions.EF_RUNTIME.toString());
                  }
                  break;
              }
            });
            continue;
        }
        if (fieldOptions.SORTABLE) {
          args.push("SORTABLE");
          if (fieldOptions.SORTABLE === "UNF") {
            args.push("UNF");
          }
        }
        if (fieldOptions.NOINDEX) {
          args.push("NOINDEX");
        }
      }
    }
    exports.pushSchema = pushSchema;
    function pushParamsArgs(args, params) {
      if (params) {
        const enrties = Object.entries(params);
        args.push("PARAMS", (enrties.length * 2).toString());
        for (const [key, value] of enrties) {
          args.push(key, typeof value === "number" ? value.toString() : value);
        }
      }
      return args;
    }
    exports.pushParamsArgs = pushParamsArgs;
    function pushSearchOptions(args, options) {
      if (options == null ? void 0 : options.VERBATIM) {
        args.push("VERBATIM");
      }
      if (options == null ? void 0 : options.NOSTOPWORDS) {
        args.push("NOSTOPWORDS");
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "INKEYS", options == null ? void 0 : options.INKEYS);
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "INFIELDS", options == null ? void 0 : options.INFIELDS);
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "RETURN", options == null ? void 0 : options.RETURN);
      if (options == null ? void 0 : options.SUMMARIZE) {
        args.push("SUMMARIZE");
        if (typeof options.SUMMARIZE === "object") {
          if (options.SUMMARIZE.FIELDS) {
            args.push("FIELDS");
            (0, generic_transformers_1.pushVerdictArgument)(args, options.SUMMARIZE.FIELDS);
          }
          if (options.SUMMARIZE.FRAGS) {
            args.push("FRAGS", options.SUMMARIZE.FRAGS.toString());
          }
          if (options.SUMMARIZE.LEN) {
            args.push("LEN", options.SUMMARIZE.LEN.toString());
          }
          if (options.SUMMARIZE.SEPARATOR) {
            args.push("SEPARATOR", options.SUMMARIZE.SEPARATOR);
          }
        }
      }
      if (options == null ? void 0 : options.HIGHLIGHT) {
        args.push("HIGHLIGHT");
        if (typeof options.HIGHLIGHT === "object") {
          if (options.HIGHLIGHT.FIELDS) {
            args.push("FIELDS");
            (0, generic_transformers_1.pushVerdictArgument)(args, options.HIGHLIGHT.FIELDS);
          }
          if (options.HIGHLIGHT.TAGS) {
            args.push("TAGS", options.HIGHLIGHT.TAGS.open, options.HIGHLIGHT.TAGS.close);
          }
        }
      }
      if (options == null ? void 0 : options.SLOP) {
        args.push("SLOP", options.SLOP.toString());
      }
      if (options == null ? void 0 : options.INORDER) {
        args.push("INORDER");
      }
      if (options == null ? void 0 : options.LANGUAGE) {
        args.push("LANGUAGE", options.LANGUAGE);
      }
      if (options == null ? void 0 : options.EXPANDER) {
        args.push("EXPANDER", options.EXPANDER);
      }
      if (options == null ? void 0 : options.SCORER) {
        args.push("SCORER", options.SCORER);
      }
      if (options == null ? void 0 : options.SORTBY) {
        args.push("SORTBY");
        pushSortByProperty(args, options.SORTBY);
      }
      if (options == null ? void 0 : options.LIMIT) {
        args.push("LIMIT", options.LIMIT.from.toString(), options.LIMIT.size.toString());
      }
      if (options == null ? void 0 : options.PARAMS) {
        pushParamsArgs(args, options.PARAMS);
      }
      if (options == null ? void 0 : options.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports.pushSearchOptions = pushSearchOptions;
    function transformProfile(reply) {
      return {
        totalProfileTime: reply[0][1],
        parsingTime: reply[1][1],
        pipelineCreationTime: reply[2][1],
        iteratorsProfile: transformIterators(reply[3][1])
      };
    }
    exports.transformProfile = transformProfile;
    function transformIterators(IteratorsProfile) {
      var res = {};
      for (let i = 0; i < IteratorsProfile.length; i += 2) {
        const value = IteratorsProfile[i + 1];
        switch (IteratorsProfile[i]) {
          case "Type":
            res.type = value;
            break;
          case "Counter":
            res.counter = value;
            break;
          case "Time":
            res.time = value;
            break;
          case "Query type":
            res.queryType = value;
            break;
          case "Child iterators":
            res.childIterators = value.map(transformChildIterators);
            break;
        }
      }
      return res;
    }
    function transformChildIterators(IteratorsProfile) {
      var res = {};
      for (let i = 1; i < IteratorsProfile.length; i += 2) {
        const value = IteratorsProfile[i + 1];
        switch (IteratorsProfile[i]) {
          case "Type":
            res.type = value;
            break;
          case "Counter":
            res.counter = value;
            break;
          case "Time":
            res.time = value;
            break;
          case "Size":
            res.size = value;
            break;
          case "Term":
            res.term = value;
            break;
          case "Child iterators":
            res.childIterators = value.map(transformChildIterators);
            break;
        }
      }
      return res;
    }
  }
});

// node_modules/@redis/search/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@redis/search/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AggregateGroupByReducers = exports.AggregateSteps = exports.VectorAlgorithms = exports.SchemaTextFieldPhonetics = exports.SchemaFieldTypes = exports.default = void 0;
    var commands_1 = require_commands6();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var commands_2 = require_commands6();
    Object.defineProperty(exports, "SchemaFieldTypes", { enumerable: true, get: function() {
      return commands_2.SchemaFieldTypes;
    } });
    Object.defineProperty(exports, "SchemaTextFieldPhonetics", { enumerable: true, get: function() {
      return commands_2.SchemaTextFieldPhonetics;
    } });
    Object.defineProperty(exports, "VectorAlgorithms", { enumerable: true, get: function() {
      return commands_2.VectorAlgorithms;
    } });
    var AGGREGATE_1 = require_AGGREGATE();
    Object.defineProperty(exports, "AggregateSteps", { enumerable: true, get: function() {
      return AGGREGATE_1.AggregateSteps;
    } });
    Object.defineProperty(exports, "AggregateGroupByReducers", { enumerable: true, get: function() {
      return AGGREGATE_1.AggregateGroupByReducers;
    } });
  }
});

// node_modules/@redis/time-series/dist/commands/ADD.js
var require_ADD5 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/ADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timestamp, value, options) {
      const args = [
        "TS.ADD",
        key,
        (0, _1.transformTimestampArgument)(timestamp),
        value.toString()
      ];
      (0, _1.pushRetentionArgument)(args, options == null ? void 0 : options.RETENTION);
      (0, _1.pushEncodingArgument)(args, options == null ? void 0 : options.ENCODING);
      (0, _1.pushChunkSizeArgument)(args, options == null ? void 0 : options.CHUNK_SIZE);
      if (options == null ? void 0 : options.ON_DUPLICATE) {
        args.push("ON_DUPLICATE", options.ON_DUPLICATE);
      }
      (0, _1.pushLabelsArgument)(args, options == null ? void 0 : options.LABELS);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/ALTER.js
var require_ALTER2 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/ALTER.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      const args = ["TS.ALTER", key];
      (0, _1.pushRetentionArgument)(args, options == null ? void 0 : options.RETENTION);
      (0, _1.pushChunkSizeArgument)(args, options == null ? void 0 : options.CHUNK_SIZE);
      (0, _1.pushDuplicatePolicy)(args, options == null ? void 0 : options.DUPLICATE_POLICY);
      (0, _1.pushLabelsArgument)(args, options == null ? void 0 : options.LABELS);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/CREATE.js
var require_CREATE3 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/CREATE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      const args = ["TS.CREATE", key];
      (0, _1.pushRetentionArgument)(args, options == null ? void 0 : options.RETENTION);
      (0, _1.pushEncodingArgument)(args, options == null ? void 0 : options.ENCODING);
      (0, _1.pushChunkSizeArgument)(args, options == null ? void 0 : options.CHUNK_SIZE);
      (0, _1.pushDuplicatePolicy)(args, options == null ? void 0 : options.DUPLICATE_POLICY);
      (0, _1.pushLabelsArgument)(args, options == null ? void 0 : options.LABELS);
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/CREATERULE.js
var require_CREATERULE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/CREATERULE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(sourceKey, destinationKey, aggregationType, bucketDuration, alignTimestamp) {
      const args = [
        "TS.CREATERULE",
        sourceKey,
        destinationKey,
        "AGGREGATION",
        aggregationType,
        bucketDuration.toString()
      ];
      if (alignTimestamp) {
        args.push(alignTimestamp.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/DECRBY.js
var require_DECRBY2 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/DECRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      return (0, _1.transformIncrDecrArguments)("TS.DECRBY", key, value, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/DEL.js
var require_DEL4 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/DEL.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRTS_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRTS_KEY_INDEX = 1;
    function transformArguments(key, fromTimestamp, toTimestamp) {
      return [
        "TS.DEL",
        key,
        (0, _1.transformTimestampArgument)(fromTimestamp),
        (0, _1.transformTimestampArgument)(toTimestamp)
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/DELETERULE.js
var require_DELETERULE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/DELETERULE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(sourceKey, destinationKey) {
      return [
        "TS.DELETERULE",
        sourceKey,
        destinationKey
      ];
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/GET.js
var require_GET3 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/GET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      return (0, _1.pushLatestArgument)(["TS.GET", key], options == null ? void 0 : options.LATEST);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply.length === 0)
        return null;
      return (0, _1.transformSampleReply)(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/INCRBY.js
var require_INCRBY4 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/INCRBY.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      return (0, _1.transformIncrDecrArguments)("TS.INCRBY", key, value, options);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/INFO.js
var require_INFO8 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/INFO.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TS.INFO", key];
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        totalSamples: reply[1],
        memoryUsage: reply[3],
        firstTimestamp: reply[5],
        lastTimestamp: reply[7],
        retentionTime: reply[9],
        chunkCount: reply[11],
        chunkSize: reply[13],
        chunkType: reply[15],
        duplicatePolicy: reply[17],
        labels: reply[19].map(([name, value]) => ({
          name,
          value
        })),
        sourceKey: reply[21],
        rules: reply[23].map(([key, timeBucket, aggregationType]) => ({
          key,
          timeBucket,
          aggregationType
        }))
      };
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/INFO_DEBUG.js
var require_INFO_DEBUG = __commonJS({
  "node_modules/@redis/time-series/dist/commands/INFO_DEBUG.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.FIRST_KEY_INDEX = exports.IS_READ_ONLY = void 0;
    var INFO_1 = require_INFO8();
    var INFO_2 = require_INFO8();
    Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function() {
      return INFO_2.IS_READ_ONLY;
    } });
    Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return INFO_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key) {
      const args = (0, INFO_1.transformArguments)(key);
      args.push("DEBUG");
      return args;
    }
    exports.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const reply = (0, INFO_1.transformReply)(rawReply);
      reply.keySelfName = rawReply[25];
      reply.chunks = rawReply[27].map((chunk) => ({
        startTimestamp: chunk[1],
        endTimestamp: chunk[3],
        samples: chunk[5],
        size: chunk[7],
        bytesPerSample: chunk[9]
      }));
      return reply;
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/MADD.js
var require_MADD2 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MADD.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    function transformArguments(toAdd) {
      const args = ["TS.MADD"];
      for (const { key, timestamp, value } of toAdd) {
        args.push(key, (0, _1.transformTimestampArgument)(timestamp), value.toString());
      }
      return args;
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/MGET.js
var require_MGET3 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MGET.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(filter, options) {
      const args = (0, _1.pushLatestArgument)(["TS.MGET"], options == null ? void 0 : options.LATEST);
      return (0, _1.pushFilterArgument)(args, filter);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, _, sample]) => ({
        key,
        sample: (0, _1.transformSampleReply)(sample)
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/MGET_WITHLABELS.js
var require_MGET_WITHLABELS = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MGET_WITHLABELS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(filter, options) {
      const args = (0, _1.pushWithLabelsArgument)(["TS.MGET"], options == null ? void 0 : options.SELECTED_LABELS);
      return (0, _1.pushFilterArgument)(args, filter);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, labels, sample]) => ({
        key,
        labels: (0, _1.transformLablesReply)(labels),
        sample: (0, _1.transformSampleReply)(sample)
      }));
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/QUERYINDEX.js
var require_QUERYINDEX = __commonJS({
  "node_modules/@redis/time-series/dist/commands/QUERYINDEX.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports.IS_READ_ONLY = true;
    function transformArguments(filter) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TS.QUERYINDEX"], filter);
    }
    exports.transformArguments = transformArguments;
  }
});

// node_modules/@redis/time-series/dist/commands/RANGE.js
var require_RANGE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/RANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, fromTimestamp, toTimestamp, options) {
      return (0, _1.pushRangeArguments)(["TS.RANGE", key], fromTimestamp, toTimestamp, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return (0, _1.transformRangeReply)(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/REVRANGE.js
var require_REVRANGE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/REVRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports.FIRST_KEY_INDEX = 1;
    exports.IS_READ_ONLY = true;
    function transformArguments(key, fromTimestamp, toTimestamp, options) {
      return (0, _1.pushRangeArguments)(["TS.REVRANGE", key], fromTimestamp, toTimestamp, options);
    }
    exports.transformArguments = transformArguments;
    function transformReply(reply) {
      return (0, _1.transformRangeReply)(reply);
    }
    exports.transformReply = transformReply;
  }
});

// node_modules/@redis/time-series/dist/commands/MRANGE.js
var require_MRANGE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeArguments)(["TS.MRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeReply;
    } });
  }
});

// node_modules/@redis/time-series/dist/commands/MRANGE_WITHLABELS.js
var require_MRANGE_WITHLABELS = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MRANGE_WITHLABELS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeWithLabelsArguments)(["TS.MRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeWithLabelsReply;
    } });
  }
});

// node_modules/@redis/time-series/dist/commands/MREVRANGE.js
var require_MREVRANGE = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MREVRANGE.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeArguments)(["TS.MREVRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeReply;
    } });
  }
});

// node_modules/@redis/time-series/dist/commands/MREVRANGE_WITHLABELS.js
var require_MREVRANGE_WITHLABELS = __commonJS({
  "node_modules/@redis/time-series/dist/commands/MREVRANGE_WITHLABELS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeWithLabelsArguments)(["TS.MREVRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeWithLabelsReply;
    } });
  }
});

// node_modules/@redis/time-series/dist/commands/index.js
var require_commands7 = __commonJS({
  "node_modules/@redis/time-series/dist/commands/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pushLatestArgument = exports.transformMRangeWithLabelsReply = exports.transformMRangeReply = exports.transformRangeReply = exports.pushMRangeWithLabelsArguments = exports.pushWithLabelsArgument = exports.pushMRangeArguments = exports.pushFilterArgument = exports.pushMRangeGroupByArguments = exports.pushRangeArguments = exports.TimeSeriesBucketTimestamp = exports.transformSampleReply = exports.transformIncrDecrArguments = exports.pushLabelsArgument = exports.transformLablesReply = exports.pushDuplicatePolicy = exports.pushChunkSizeArgument = exports.pushEncodingArgument = exports.TimeSeriesEncoding = exports.pushRetentionArgument = exports.transformTimestampArgument = exports.TimeSeriesReducers = exports.TimeSeriesDuplicatePolicies = exports.TimeSeriesAggregationType = void 0;
    var ADD = require_ADD5();
    var ALTER = require_ALTER2();
    var CREATE = require_CREATE3();
    var CREATERULE = require_CREATERULE();
    var DECRBY = require_DECRBY2();
    var DEL = require_DEL4();
    var DELETERULE = require_DELETERULE();
    var GET = require_GET3();
    var INCRBY = require_INCRBY4();
    var INFO_DEBUG = require_INFO_DEBUG();
    var INFO = require_INFO8();
    var MADD = require_MADD2();
    var MGET = require_MGET3();
    var MGET_WITHLABELS = require_MGET_WITHLABELS();
    var QUERYINDEX = require_QUERYINDEX();
    var RANGE = require_RANGE();
    var REVRANGE = require_REVRANGE();
    var MRANGE = require_MRANGE();
    var MRANGE_WITHLABELS = require_MRANGE_WITHLABELS();
    var MREVRANGE = require_MREVRANGE();
    var MREVRANGE_WITHLABELS = require_MREVRANGE_WITHLABELS();
    var generic_transformers_1 = require_generic_transformers();
    exports.default = {
      ADD,
      add: ADD,
      ALTER,
      alter: ALTER,
      CREATE,
      create: CREATE,
      CREATERULE,
      createRule: CREATERULE,
      DECRBY,
      decrBy: DECRBY,
      DEL,
      del: DEL,
      DELETERULE,
      deleteRule: DELETERULE,
      GET,
      get: GET,
      INCRBY,
      incrBy: INCRBY,
      INFO_DEBUG,
      infoDebug: INFO_DEBUG,
      INFO,
      info: INFO,
      MADD,
      mAdd: MADD,
      MGET,
      mGet: MGET,
      MGET_WITHLABELS,
      mGetWithLabels: MGET_WITHLABELS,
      QUERYINDEX,
      queryIndex: QUERYINDEX,
      RANGE,
      range: RANGE,
      REVRANGE,
      revRange: REVRANGE,
      MRANGE,
      mRange: MRANGE,
      MRANGE_WITHLABELS,
      mRangeWithLabels: MRANGE_WITHLABELS,
      MREVRANGE,
      mRevRange: MREVRANGE,
      MREVRANGE_WITHLABELS,
      mRevRangeWithLabels: MREVRANGE_WITHLABELS
    };
    var TimeSeriesAggregationType;
    (function(TimeSeriesAggregationType2) {
      TimeSeriesAggregationType2["AVG"] = "AVG";
      TimeSeriesAggregationType2["AVERAGE"] = "AVG";
      TimeSeriesAggregationType2["FIRST"] = "FIRST";
      TimeSeriesAggregationType2["LAST"] = "LAST";
      TimeSeriesAggregationType2["MIN"] = "MIN";
      TimeSeriesAggregationType2["MINIMUM"] = "MIN";
      TimeSeriesAggregationType2["MAX"] = "MAX";
      TimeSeriesAggregationType2["MAXIMUM"] = "MAX";
      TimeSeriesAggregationType2["SUM"] = "SUM";
      TimeSeriesAggregationType2["RANGE"] = "RANGE";
      TimeSeriesAggregationType2["COUNT"] = "COUNT";
      TimeSeriesAggregationType2["STD_P"] = "STD.P";
      TimeSeriesAggregationType2["STD_S"] = "STD.S";
      TimeSeriesAggregationType2["VAR_P"] = "VAR.P";
      TimeSeriesAggregationType2["VAR_S"] = "VAR.S";
      TimeSeriesAggregationType2["TWA"] = "TWA";
    })(TimeSeriesAggregationType = exports.TimeSeriesAggregationType || (exports.TimeSeriesAggregationType = {}));
    var TimeSeriesDuplicatePolicies;
    (function(TimeSeriesDuplicatePolicies2) {
      TimeSeriesDuplicatePolicies2["BLOCK"] = "BLOCK";
      TimeSeriesDuplicatePolicies2["FIRST"] = "FIRST";
      TimeSeriesDuplicatePolicies2["LAST"] = "LAST";
      TimeSeriesDuplicatePolicies2["MIN"] = "MIN";
      TimeSeriesDuplicatePolicies2["MAX"] = "MAX";
      TimeSeriesDuplicatePolicies2["SUM"] = "SUM";
    })(TimeSeriesDuplicatePolicies = exports.TimeSeriesDuplicatePolicies || (exports.TimeSeriesDuplicatePolicies = {}));
    var TimeSeriesReducers;
    (function(TimeSeriesReducers2) {
      TimeSeriesReducers2["AVG"] = "AVG";
      TimeSeriesReducers2["SUM"] = "SUM";
      TimeSeriesReducers2["MIN"] = "MIN";
      TimeSeriesReducers2["MINIMUM"] = "MIN";
      TimeSeriesReducers2["MAX"] = "MAX";
      TimeSeriesReducers2["MAXIMUM"] = "MAX";
      TimeSeriesReducers2["RANGE"] = "range";
      TimeSeriesReducers2["COUNT"] = "COUNT";
      TimeSeriesReducers2["STD_P"] = "STD.P";
      TimeSeriesReducers2["STD_S"] = "STD.S";
      TimeSeriesReducers2["VAR_P"] = "VAR.P";
      TimeSeriesReducers2["VAR_S"] = "VAR.S";
    })(TimeSeriesReducers = exports.TimeSeriesReducers || (exports.TimeSeriesReducers = {}));
    function transformTimestampArgument(timestamp) {
      if (typeof timestamp === "string")
        return timestamp;
      return (typeof timestamp === "number" ? timestamp : timestamp.getTime()).toString();
    }
    exports.transformTimestampArgument = transformTimestampArgument;
    function pushRetentionArgument(args, retention) {
      if (retention) {
        args.push("RETENTION", retention.toString());
      }
      return args;
    }
    exports.pushRetentionArgument = pushRetentionArgument;
    var TimeSeriesEncoding;
    (function(TimeSeriesEncoding2) {
      TimeSeriesEncoding2["COMPRESSED"] = "COMPRESSED";
      TimeSeriesEncoding2["UNCOMPRESSED"] = "UNCOMPRESSED";
    })(TimeSeriesEncoding = exports.TimeSeriesEncoding || (exports.TimeSeriesEncoding = {}));
    function pushEncodingArgument(args, encoding) {
      if (encoding) {
        args.push("ENCODING", encoding);
      }
      return args;
    }
    exports.pushEncodingArgument = pushEncodingArgument;
    function pushChunkSizeArgument(args, chunkSize) {
      if (chunkSize) {
        args.push("CHUNK_SIZE", chunkSize.toString());
      }
      return args;
    }
    exports.pushChunkSizeArgument = pushChunkSizeArgument;
    function pushDuplicatePolicy(args, duplicatePolicy) {
      if (duplicatePolicy) {
        args.push("DUPLICATE_POLICY", duplicatePolicy);
      }
      return args;
    }
    exports.pushDuplicatePolicy = pushDuplicatePolicy;
    function transformLablesReply(reply) {
      const labels = {};
      for (const [key, value] of reply) {
        labels[key] = value;
      }
      return labels;
    }
    exports.transformLablesReply = transformLablesReply;
    function pushLabelsArgument(args, labels) {
      if (labels) {
        args.push("LABELS");
        for (const [label, value] of Object.entries(labels)) {
          args.push(label, value);
        }
      }
      return args;
    }
    exports.pushLabelsArgument = pushLabelsArgument;
    function transformIncrDecrArguments(command, key, value, options) {
      const args = [
        command,
        key,
        value.toString()
      ];
      if ((options == null ? void 0 : options.TIMESTAMP) !== void 0 && (options == null ? void 0 : options.TIMESTAMP) !== null) {
        args.push("TIMESTAMP", transformTimestampArgument(options.TIMESTAMP));
      }
      pushRetentionArgument(args, options == null ? void 0 : options.RETENTION);
      if (options == null ? void 0 : options.UNCOMPRESSED) {
        args.push("UNCOMPRESSED");
      }
      pushChunkSizeArgument(args, options == null ? void 0 : options.CHUNK_SIZE);
      pushLabelsArgument(args, options == null ? void 0 : options.LABELS);
      return args;
    }
    exports.transformIncrDecrArguments = transformIncrDecrArguments;
    function transformSampleReply(reply) {
      return {
        timestamp: reply[0],
        value: Number(reply[1])
      };
    }
    exports.transformSampleReply = transformSampleReply;
    var TimeSeriesBucketTimestamp;
    (function(TimeSeriesBucketTimestamp2) {
      TimeSeriesBucketTimestamp2["LOW"] = "-";
      TimeSeriesBucketTimestamp2["HIGH"] = "+";
      TimeSeriesBucketTimestamp2["MID"] = "~";
    })(TimeSeriesBucketTimestamp = exports.TimeSeriesBucketTimestamp || (exports.TimeSeriesBucketTimestamp = {}));
    function pushRangeArguments(args, fromTimestamp, toTimestamp, options) {
      args.push(transformTimestampArgument(fromTimestamp), transformTimestampArgument(toTimestamp));
      pushLatestArgument(args, options == null ? void 0 : options.LATEST);
      if (options == null ? void 0 : options.FILTER_BY_TS) {
        args.push("FILTER_BY_TS");
        for (const ts of options.FILTER_BY_TS) {
          args.push(transformTimestampArgument(ts));
        }
      }
      if (options == null ? void 0 : options.FILTER_BY_VALUE) {
        args.push("FILTER_BY_VALUE", options.FILTER_BY_VALUE.min.toString(), options.FILTER_BY_VALUE.max.toString());
      }
      if (options == null ? void 0 : options.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (options == null ? void 0 : options.ALIGN) {
        args.push("ALIGN", transformTimestampArgument(options.ALIGN));
      }
      if (options == null ? void 0 : options.AGGREGATION) {
        args.push("AGGREGATION", options.AGGREGATION.type, transformTimestampArgument(options.AGGREGATION.timeBucket));
        if (options.AGGREGATION.BUCKETTIMESTAMP) {
          args.push("BUCKETTIMESTAMP", options.AGGREGATION.BUCKETTIMESTAMP);
        }
        if (options.AGGREGATION.EMPTY) {
          args.push("EMPTY");
        }
      }
      return args;
    }
    exports.pushRangeArguments = pushRangeArguments;
    function pushMRangeGroupByArguments(args, groupBy) {
      if (groupBy) {
        args.push("GROUPBY", groupBy.label, "REDUCE", groupBy.reducer);
      }
      return args;
    }
    exports.pushMRangeGroupByArguments = pushMRangeGroupByArguments;
    function pushFilterArgument(args, filter) {
      args.push("FILTER");
      return (0, generic_transformers_1.pushVerdictArguments)(args, filter);
    }
    exports.pushFilterArgument = pushFilterArgument;
    function pushMRangeArguments(args, fromTimestamp, toTimestamp, filter, options) {
      args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
      args = pushFilterArgument(args, filter);
      return pushMRangeGroupByArguments(args, options == null ? void 0 : options.GROUPBY);
    }
    exports.pushMRangeArguments = pushMRangeArguments;
    function pushWithLabelsArgument(args, selectedLabels) {
      if (!selectedLabels) {
        args.push("WITHLABELS");
      } else {
        args.push("SELECTED_LABELS");
        args = (0, generic_transformers_1.pushVerdictArguments)(args, selectedLabels);
      }
      return args;
    }
    exports.pushWithLabelsArgument = pushWithLabelsArgument;
    function pushMRangeWithLabelsArguments(args, fromTimestamp, toTimestamp, filter, options) {
      args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
      args = pushWithLabelsArgument(args, options == null ? void 0 : options.SELECTED_LABELS);
      args = pushFilterArgument(args, filter);
      return pushMRangeGroupByArguments(args, options == null ? void 0 : options.GROUPBY);
    }
    exports.pushMRangeWithLabelsArguments = pushMRangeWithLabelsArguments;
    function transformRangeReply(reply) {
      return reply.map(transformSampleReply);
    }
    exports.transformRangeReply = transformRangeReply;
    function transformMRangeReply(reply) {
      const args = [];
      for (const [key, _, sample] of reply) {
        args.push({
          key,
          samples: sample.map(transformSampleReply)
        });
      }
      return args;
    }
    exports.transformMRangeReply = transformMRangeReply;
    function transformMRangeWithLabelsReply(reply) {
      const args = [];
      for (const [key, labels, samples] of reply) {
        args.push({
          key,
          labels: transformLablesReply(labels),
          samples: samples.map(transformSampleReply)
        });
      }
      return args;
    }
    exports.transformMRangeWithLabelsReply = transformMRangeWithLabelsReply;
    function pushLatestArgument(args, latest) {
      if (latest) {
        args.push("LATEST");
      }
      return args;
    }
    exports.pushLatestArgument = pushLatestArgument;
  }
});

// node_modules/@redis/time-series/dist/index.js
var require_dist6 = __commonJS({
  "node_modules/@redis/time-series/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeSeriesBucketTimestamp = exports.TimeSeriesReducers = exports.TimeSeriesAggregationType = exports.TimeSeriesEncoding = exports.TimeSeriesDuplicatePolicies = exports.default = void 0;
    var commands_1 = require_commands7();
    Object.defineProperty(exports, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var commands_2 = require_commands7();
    Object.defineProperty(exports, "TimeSeriesDuplicatePolicies", { enumerable: true, get: function() {
      return commands_2.TimeSeriesDuplicatePolicies;
    } });
    Object.defineProperty(exports, "TimeSeriesEncoding", { enumerable: true, get: function() {
      return commands_2.TimeSeriesEncoding;
    } });
    Object.defineProperty(exports, "TimeSeriesAggregationType", { enumerable: true, get: function() {
      return commands_2.TimeSeriesAggregationType;
    } });
    Object.defineProperty(exports, "TimeSeriesReducers", { enumerable: true, get: function() {
      return commands_2.TimeSeriesReducers;
    } });
    Object.defineProperty(exports, "TimeSeriesBucketTimestamp", { enumerable: true, get: function() {
      return commands_2.TimeSeriesBucketTimestamp;
    } });
  }
});

// node_modules/redis/dist/index.js
var require_dist7 = __commonJS({
  "node_modules/redis/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCluster = exports.createClient = void 0;
    var client_1 = require_dist();
    var bloom_1 = require_dist2();
    var graph_1 = require_dist3();
    var json_1 = require_dist4();
    var search_1 = require_dist5();
    var time_series_1 = require_dist6();
    __exportStar(require_dist(), exports);
    __exportStar(require_dist2(), exports);
    __exportStar(require_dist3(), exports);
    __exportStar(require_dist4(), exports);
    __exportStar(require_dist5(), exports);
    __exportStar(require_dist6(), exports);
    var modules = {
      ...bloom_1.default,
      graph: graph_1.default,
      json: json_1.default,
      ft: search_1.default,
      ts: time_series_1.default
    };
    function createClient(options) {
      return (0, client_1.createClient)({
        ...options,
        modules: {
          ...modules,
          ...options == null ? void 0 : options.modules
        }
      });
    }
    exports.createClient = createClient;
    function createCluster(options) {
      return (0, client_1.createCluster)({
        ...options,
        modules: {
          ...modules,
          ...options == null ? void 0 : options.modules
        }
      });
    }
    exports.createCluster = createCluster;
  }
});

// node_modules/classifier/lib/backends/redis.js
var require_redis = __commonJS({
  "node_modules/classifier/lib/backends/redis.js"(exports) {
    var redis = require_dist7();
    var _ = require_underscore_umd()._;
    var RedisBackend = function(options) {
      options = options || {};
      var port = options.port || 6379;
      var host = options.hostname || "localhost";
      var opts = options.options || {};
      this.client = function() {
        var client = redis.createClient(port, host, opts);
        if (options.error) {
          client.on("error", options.error);
        }
        if (options.password) {
          client.auth(options.password, options.error);
        }
        return client;
      };
      var name = options.name || Math.floor(Math.random() * 1e5);
      this.catsKey = "classifier_bayes_cats_" + name;
      this.wordsKey = "classifier_bayes_words_" + name;
      if (options.db) {
        this.client().select(options.db);
      }
    };
    RedisBackend.prototype = {
      async: true,
      key: function(word, cat) {
        return word + "____" + cat;
      },
      pair: function(key) {
        return /(.*)____(.*)/.exec(key).slice(1);
      },
      incCounts: function(catIncs, wordIncs, callback) {
        var client = this.client();
        var multi = client.multi();
        _(catIncs).each(function(inc, cat) {
          multi.hincrby(this.catsKey, cat, inc);
        }, this);
        _(wordIncs).each(function(wordCounts, word) {
          _(wordCounts).each(function(inc, cat) {
            multi.hincrby(this.wordsKey, this.key(word, cat), inc);
          }, this);
        }, this);
        multi.exec(function(err, ret) {
          if (callback) {
            callback(ret);
          }
          client.quit();
        });
      },
      getCats: function(callback) {
        var client = this.client();
        client.hgetall(this.catsKey, function(err, cats) {
          _(cats).each(function(val, cat) {
            cats[cat] = parseInt(val);
          });
          callback(cats);
          client.quit();
        });
      },
      getWordCounts: function(words, cats, callback) {
        var keys = _(words).reduce(function(keys2, word) {
          return keys2.concat(_(cats).map(function(count, cat) {
            return this.key(word, cat);
          }, this));
        }, [], this);
        var that = this;
        var args = [this.wordsKey].concat(keys);
        var client = this.client();
        client.hmget(args, function(err, vals) {
          var counts = {};
          keys.map(function(key, i) {
            var pair = that.pair(key);
            var word = pair[0], cat = pair[1];
            counts[word] = counts[word] ? counts[word] : {};
            counts[word][cat] = parseInt(vals[i]) || 0;
          });
          callback(counts);
          client.quit();
        });
      },
      toJSON: function(callback) {
        var that = this;
        this.getCats(function(cats) {
          var client = that.client();
          client.hgetall(that.wordsKey, function(err, wordCounts) {
            var words = {};
            for (var key in wordCounts) {
              var pair = that.pair(key);
              var word = pair[0], cat = pair[1];
              words[word] = words[word] ? words[word] : {};
              words[word][cat] = parseInt(wordCounts[key]) || 0;
            }
            callback({ cats, words });
            client.quit();
          });
        });
      },
      fromJSON: function(json, callback) {
        this.incCounts(json.cats, json.words, callback);
      }
    };
    exports.RedisBackend = RedisBackend;
  }
});

// node_modules/classifier/lib/backends/localStorage.js
var require_localStorage = __commonJS({
  "node_modules/classifier/lib/backends/localStorage.js"(exports) {
    var _ = require_underscore_umd()._;
    var LocalStorageBackend = function(options) {
      var options = options || {};
      var name = options.name || Math.floor(Math.random() * 1e5);
      this.prefix = "classifier.bayesian." + name;
      if (options.testing) {
        this.storage = {};
      } else {
        this.storage = localStorage;
      }
      this.storage[this.prefix + ".cats"] = "{}";
    };
    LocalStorageBackend.prototype = {
      async: false,
      getCats: function() {
        return JSON.parse(this.storage[this.prefix + ".cats"]);
      },
      setCats: function(cats) {
        this.storage[this.prefix + ".cats"] = JSON.stringify(cats);
      },
      getWordCount: function(word) {
        return JSON.parse(this.storage[this.prefix + ".words." + word] || "{}");
      },
      setWordCount: function(word, counts) {
        this.storage[this.prefix + ".words." + word] = JSON.stringify(counts);
      },
      getWordCounts: function(words) {
        var counts = {};
        words.forEach(function(word) {
          counts[word] = this.getWordCount(word);
        }, this);
        return counts;
      },
      incCounts: function(catIncs, wordIncs) {
        var cats = this.getCats();
        _(catIncs).each(function(inc, cat) {
          cats[cat] = cats[cat] + inc || inc;
        }, this);
        this.setCats(cats);
        _(wordIncs).each(function(incs, word) {
          var wordCounts = this.getWordCount(word);
          _(incs).each(function(inc, cat) {
            wordCounts[cat] = wordCounts[cat] + inc || inc;
          }, this);
          this.setWordCount(word, wordCounts);
        }, this);
      },
      toJSON: function() {
        var words = {};
        var regex = new RegExp("^" + this.prefix + ".words.(.+)$");
        for (var item in this.storage) {
          var match = regex.exec(item);
          if (match) {
            words[match[1]] = JSON.parse(this.storage[item]);
          }
        }
        return {
          cats: JSON.parse(this.storage[this.prefix + ".cats"]),
          words
        };
      },
      fromJSON: function(json) {
        this.incCounts(json.cats, json.words);
      }
    };
    exports.LocalStorageBackend = LocalStorageBackend;
  }
});

// node_modules/classifier/lib/backends/memory.js
var require_memory = __commonJS({
  "node_modules/classifier/lib/backends/memory.js"(exports) {
    var _ = require_underscore_umd()._;
    var MemoryBackend = function() {
      this.catCounts = {};
      this.wordCounts = {};
    };
    MemoryBackend.prototype = {
      async: false,
      incCounts: function(catIncs, wordIncs) {
        _(catIncs).each(function(inc, cat) {
          this.catCounts[cat] = this.catCounts[cat] + inc || inc;
        }, this);
        _(wordIncs).each(function(incs, word) {
          this.wordCounts[word] = this.wordCounts[word] || {};
          _(incs).each(function(inc, cat) {
            this.wordCounts[word][cat] = this.wordCounts[word][cat] + inc || inc;
          }, this);
        }, this);
      },
      getCats: function() {
        return this.catCounts;
      },
      getWordCounts: function(words, cats) {
        return this.wordCounts;
      },
      toJSON: function() {
        return { cats: this.catCounts, words: this.wordCounts };
      },
      fromJSON: function(json) {
        this.catCounts = json.cats;
        this.wordCounts = json.words;
      }
    };
    exports.MemoryBackend = MemoryBackend;
  }
});

// node_modules/classifier/lib/bayesian.js
var require_bayesian = __commonJS({
  "node_modules/classifier/lib/bayesian.js"(exports) {
    var _ = require_underscore_umd()._;
    var Bayesian = function(options) {
      options = options || {};
      this.thresholds = options.thresholds || {};
      this.default = options.default || "unclassified";
      this.weight = options.weight || 1;
      this.assumed = options.assumed || 0.5;
      var backend = options.backend || { type: "memory" };
      switch (backend.type.toLowerCase()) {
        case "redis":
          this.backend = new (require_redis()).RedisBackend(backend.options);
          break;
        case "localstorage":
          this.backend = new (require_localStorage()).LocalStorageBackend(backend.options);
          break;
        default:
          this.backend = new (require_memory()).MemoryBackend();
      }
    };
    Bayesian.prototype = {
      getCats: function(callback) {
        return this.backend.getCats(callback);
      },
      getWordCounts: function(words, cats, callback) {
        return this.backend.getWordCounts(words, cats, callback);
      },
      incDocCounts: function(docs, callback) {
        var wordIncs = {};
        var catIncs = {};
        docs.forEach(function(doc) {
          var cat = doc.cat;
          catIncs[cat] = catIncs[cat] ? catIncs[cat] + 1 : 1;
          var words = this.getWords(doc.doc);
          words.forEach(function(word) {
            wordIncs[word] = wordIncs[word] || {};
            wordIncs[word][cat] = wordIncs[word][cat] ? wordIncs[word][cat] + 1 : 1;
          }, this);
        }, this);
        return this.backend.incCounts(catIncs, wordIncs, callback);
      },
      setThresholds: function(thresholds) {
        this.thresholds = thresholds;
      },
      getWords: function(doc) {
        if (_(doc).isArray()) {
          return doc;
        }
        var words = doc.split(/\W+/);
        return _(words).uniq();
      },
      train: function(doc, cat, callback) {
        this.incDocCounts([{ doc, cat }], function(err, ret) {
          if (callback) {
            callback(ret);
          }
        });
      },
      trainAll: function(data, callback) {
        data = data.map(function(item) {
          return { doc: item.input, cat: item.output };
        });
        this.incDocCounts(data, function(err, ret) {
          if (callback) {
            callback(ret);
          }
        });
      },
      wordProb: function(word, cat, cats, counts) {
        var prob = (counts[cat] || 0) / cats[cat];
        var total = _(cats).reduce(function(sum, p, cat2) {
          return sum + (counts[cat2] || 0);
        }, 0, this);
        return (this.weight * this.assumed + total * prob) / (this.weight + total);
      },
      getCatProbs: function(cats, words, counts) {
        var numDocs = _(cats).reduce(function(sum, count) {
          return sum + count;
        }, 0);
        var probs = {};
        _(cats).each(function(catCount, cat) {
          var catProb = (catCount || 0) / numDocs;
          var docProb = _(words).reduce(function(prob, word) {
            var wordCounts = counts[word] || {};
            return prob * this.wordProb(word, cat, cats, wordCounts);
          }, 1, this);
          probs[cat] = catProb * docProb;
        }, this);
        return probs;
      },
      getProbs: function(doc, callback) {
        var that = this;
        this.getCats(function(cats) {
          var words = that.getWords(doc);
          that.getWordCounts(words, cats, function(counts) {
            var probs = that.getCatProbs(cats, words, counts);
            callback(probs);
          });
        });
      },
      getProbsSync: function(doc) {
        var words = this.getWords(doc);
        var cats = this.getCats();
        var counts = this.getWordCounts(words, cats);
        return this.getCatProbs(cats, words, counts);
      },
      bestMatch: function(probs) {
        var max = _(probs).reduce(function(max2, prob, cat) {
          return max2.prob > prob ? max2 : { cat, prob };
        }, { prob: 0 });
        var category = max.cat || this.default;
        var threshold = this.thresholds[max.cat] || 1;
        _(probs).map(function(prob, cat) {
          if (!(cat == max.cat) && prob * threshold > max.prob) {
            category = this.default;
          }
        }, this);
        return category;
      },
      classify: function(doc, callback) {
        if (!this.backend.async) {
          return this.classifySync(doc);
        }
        var that = this;
        this.getProbs(doc, function(probs) {
          callback(that.bestMatch(probs));
        });
      },
      classifySync: function(doc) {
        var probs = this.getProbsSync(doc);
        return this.bestMatch(probs);
      },
      test: function(data) {
        var error = 0;
        data.forEach(function(datum) {
          var output = this.classify(datum.input);
          error += output == datum.output ? 0 : 1;
        }, this);
        return error / data.length;
      },
      toJSON: function(callback) {
        return this.backend.toJSON(callback);
      },
      fromJSON: function(json, callback) {
        this.backend.fromJSON(json, callback);
        return this;
      }
    };
    exports.Bayesian = Bayesian;
  }
});

// node_modules/language-classifier/memory.json
var require_memory2 = __commonJS({
  "node_modules/language-classifier/memory.json"(exports, module) {
    module.exports = { cats: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, words: { "0": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, "1": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, "2": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, "3": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, "4": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, "5": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, shell: 1 }, "6": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1 }, "7": { "c++": 1, c: 1, css: 1, "objective-c": 1 }, "8": { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, "9": { "c++": 1, css: 1, "objective-c": 1, shell: 1 }, "10": { "c++": 1, c: 1, css: 1, javascript: 1, "objective-c": 1, python: 1 }, "11": { "c++": 1, "objective-c": 1 }, "12": { "c++": 1, css: 1, "objective-c": 1 }, "13": { "c++": 1, "objective-c": 1, shell: 1 }, "14": { "c++": 1, "objective-c": 1 }, "15": { "c++": 1, c: 1, css: 1 }, "16": { "c++": 1, html: 1, "objective-c": 1, python: 1 }, "17": { "c++": 1, css: 1, "objective-c": 1, shell: 1 }, "18": { "c++": 1 }, "19": { "c++": 1, "objective-c": 1 }, "20": { "c++": 1, css: 1, html: 1 }, "21": { "c++": 1, css: 1, "objective-c": 1 }, "22": { "c++": 1, shell: 1 }, "23": { "c++": 1, "objective-c": 1 }, "24": { "c++": 1, c: 1 }, "25": { "c++": 1, css: 1, "objective-c": 1 }, "26": { "c++": 1 }, "27": { "c++": 1 }, "28": { "c++": 1 }, "29": { "c++": 1, "objective-c": 1 }, "30": { "c++": 1, html: 1, shell: 1 }, "31": { "c++": 1, css: 1, "objective-c": 1 }, "32": { "c++": 1, c: 1, css: 1, "objective-c": 1, python: 1 }, "33": { "c++": 1, html: 1, "objective-c": 1, shell: 1 }, "34": { "c++": 1, html: 1 }, "35": { "c++": 1, css: 1 }, "36": { "c++": 1 }, "37": { "c++": 1 }, "38": { "c++": 1 }, "39": { "c++": 1 }, "40": { "c++": 1, css: 1, html: 1 }, "41": { "c++": 1 }, "42": { "c++": 1 }, "43": { "c++": 1 }, "44": { "c++": 1 }, "45": { "c++": 1, css: 1 }, "46": { "c++": 1 }, "47": { "c++": 1, html: 1 }, "48": { "c++": 1 }, "49": { "c++": 1, html: 1 }, "50": { "c++": 1, css: 1 }, "51": { "c++": 1, css: 1 }, "52": { "c++": 1, c: 1 }, "53": { "c++": 1, shell: 1 }, "54": { "c++": 1 }, "55": { "c++": 1, css: 1, shell: 1 }, "56": { "c++": 1 }, "57": { "c++": 1 }, "58": { "c++": 1 }, "59": { "c++": 1 }, "60": { "c++": 1, c: 1, html: 1 }, "61": { "c++": 1 }, "62": { "c++": 1, html: 1 }, "63": { "c++": 1 }, "64": { "c++": 1, "objective-c": 1 }, "65": { css: 1 }, "70": { css: 1 }, "75": { css: 1 }, "80": { "c++": 1, css: 1, shell: 1 }, "81": { css: 1 }, "86": { css: 1 }, "90": { css: 1, "objective-c": 1 }, "95": { css: 1, html: 1 }, "96": { css: 1 }, "97": { css: 1 }, "98": { css: 1 }, "99": { css: 1 }, "100": { css: 1, html: 1, javascript: 1 }, "108": { css: 1 }, "110": { css: 1 }, "111": { css: 1 }, "114": { html: 1 }, "120": { css: 1 }, "131": { css: 1 }, "140": { css: 1, html: 1 }, "144": { html: 1 }, "145": { html: 1 }, "147": { css: 1 }, "150": { shell: 1 }, "160": { css: 1 }, "161": { css: 1 }, "163": { css: 1 }, "167": { css: 1 }, "168": { html: 1 }, "183": { html: 1 }, "193": { css: 1 }, "196": { css: 1 }, "200": { css: 1 }, "202": { javascript: 1 }, "203": { css: 1 }, "204": { javascript: 1 }, "221": { css: 1 }, "222": { css: 1 }, "223": { html: 1 }, "232": { css: 1 }, "240": { css: 1 }, "255": { css: 1, "objective-c": 1 }, "256": { "objective-c": 1 }, "273": { html: 1 }, "300": { css: 1, python: 1 }, "303": { python: 1 }, "312": { html: 1 }, "321": { html: 1 }, "333": { css: 1 }, "369": { html: 1 }, "382": { html: 1 }, "400": { javascript: 1, python: 1 }, "401": { javascript: 1 }, "403": { javascript: 1 }, "404": { javascript: 1 }, "406": { javascript: 1 }, "420": { html: 1 }, "440": { css: 1 }, "444": { css: 1 }, "464": { html: 1 }, "500": { c: 1, css: 1, python: 1 }, "550": { "objective-c": 1 }, "555": { css: 1 }, "579": { html: 1 }, "600": { python: 1 }, "666": { css: 1 }, "777": { css: 1 }, "822": { "c++": 1 }, "888": { css: 1 }, "900": { css: 1 }, "999": { css: 1 }, "1000": { c: 1 }, "1024": { "objective-c": 1, python: 1 }, "1120": { shell: 1 }, "1223": { javascript: 1 }, "1301": { html: 1 }, "1808": { python: 1 }, "2001": { "objective-c": 1 }, "2004": { "objective-c": 1 }, "2008": { ruby: 1 }, "2009": { "c++": 1 }, "2010": { "c++": 1 }, "2011": { "objective-c": 1 }, "2012": { c: 1, html: 1, shell: 1 }, "2045": { "c++": 1 }, "2261": { "objective-c": 1 }, "2500": { c: 1 }, "3128": { python: 1 }, "3464": { "c++": 1 }, "4627": { python: 1 }, "5000": { c: 1 }, "9999": { css: 1 }, "37595": { html: 1 }, "60000": { c: 1 }, "84931": { html: 1 }, "99999": { css: 1 }, "100000": { css: 1 }, "105095": { css: 1 }, "111111": { css: 1 }, "141414": { css: 1 }, "275666": { css: 1 }, "333333": { css: 1 }, "337797": { css: 1 }, "339900": { css: 1 }, "339933": { css: 1 }, "393939": { css: 1 }, "416334": { css: 1 }, "434648": { css: 1 }, "444444": { css: 1 }, "445588": { css: 1 }, "454545": { css: 1 }, "494620": { css: 1 }, "494949": { css: 1 }, "509338": { css: 1 }, "545454": { css: 1 }, "555555": { css: 1 }, "585858": { css: 1 }, "595959": { css: 1 }, "596063": { css: 1 }, "606020": { css: 1 }, "636363": { css: 1 }, "637781": { css: 1 }, "666042": { css: 1 }, "666666": { css: 1 }, "686868": { css: 1 }, "707070": { css: 1 }, "737373": { css: 1 }, "767676": { css: 1 }, "787878": { css: 1 }, "800080": { css: 1 }, "811201": { css: 1 }, "859900": { css: 1 }, "888888": { css: 1 }, "909090": { css: 1 }, "939393": { css: 1 }, "984646": { css: 1 }, "990000": { css: 1 }, "990073": { css: 1 }, "993333": { css: 1 }, "999988": { css: 1 }, "999999": { css: 1 }, "1000000": { c: 1 }, "3600000": { c: 1 }, "5000000": { c: 1 }, "14550850": { html: 1 }, "51654763": { css: 1 }, "60000000": { c: 1 }, "86400000": { c: 1 }, "604800000": { c: 1 }, "1338956357": { html: 1 }, "3600000000": { c: 1 }, "": { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, Copyright: { "c++": 1, c: 1, "objective-c": 1, ruby: 1, shell: 1 }, Joyent: { "c++": 1 }, Inc: { "c++": 1, html: 1, "objective-c": 1 }, and: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, other: { "c++": 1, css: 1, html: 1, "objective-c": 1, python: 1, ruby: 1 }, Node: { "c++": 1, html: 1 }, contributors: { "c++": 1, css: 1, "objective-c": 1 }, Permission: { "c++": 1, shell: 1 }, is: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, hereby: { "c++": 1, "objective-c": 1, shell: 1 }, granted: { "c++": 1, shell: 1 }, free: { "c++": 1, c: 1, "objective-c": 1, shell: 1 }, of: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, charge: { "c++": 1, shell: 1 }, to: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, any: { "c++": 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, person: { "c++": 1, css: 1, shell: 1 }, obtaining: { "c++": 1, shell: 1 }, a: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, copy: { "c++": 1, html: 1, "objective-c": 1, shell: 1 }, this: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, software: { "c++": 1, "objective-c": 1, shell: 1 }, associated: { "c++": 1, "objective-c": 1, shell: 1 }, documentation: { "c++": 1, "objective-c": 1, ruby: 1, shell: 1 }, files: { "c++": 1, css: 1, "objective-c": 1, python: 1, shell: 1 }, the: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, Software: { "c++": 1, shell: 1 }, deal: { "c++": 1, shell: 1 }, in: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, without: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, restriction: { "c++": 1, shell: 1 }, including: { "c++": 1, shell: 1 }, limitation: { "c++": 1, shell: 1 }, rights: { "c++": 1, html: 1, "objective-c": 1, shell: 1 }, use: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, modify: { "c++": 1, shell: 1 }, merge: { "c++": 1, css: 1, javascript: 1, shell: 1 }, publish: { "c++": 1, shell: 1 }, distribute: { "c++": 1, "objective-c": 1, shell: 1 }, sublicense: { "c++": 1, shell: 1 }, or: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, sell: { "c++": 1, shell: 1 }, copies: { "c++": 1, "objective-c": 1, shell: 1 }, permit: { "c++": 1, shell: 1 }, persons: { "c++": 1, shell: 1 }, whom: { "c++": 1, shell: 1 }, furnished: { "c++": 1, shell: 1 }, do: { "c++": 1, c: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, so: { "c++": 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, subject: { "c++": 1, shell: 1 }, following: { "c++": 1, css: 1, "objective-c": 1, shell: 1 }, conditions: { "c++": 1, "objective-c": 1, shell: 1 }, The: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, above: { "c++": 1, "objective-c": 1, shell: 1 }, copyright: { "c++": 1, "objective-c": 1, shell: 1 }, notice: { "c++": 1, css: 1, "objective-c": 1, shell: 1 }, permission: { "c++": 1, "objective-c": 1, shell: 1 }, shall: { "c++": 1, shell: 1 }, be: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, included: { "c++": 1, "objective-c": 1, shell: 1 }, all: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, substantial: { "c++": 1, shell: 1 }, portions: { "c++": 1, shell: 1 }, THE: { "c++": 1, "objective-c": 1, shell: 1 }, SOFTWARE: { "c++": 1, "objective-c": 1, shell: 1 }, IS: { "c++": 1, "objective-c": 1, shell: 1 }, PROVIDED: { "c++": 1, "objective-c": 1, shell: 1 }, AS: { "c++": 1, "objective-c": 1, shell: 1 }, WITHOUT: { "c++": 1, "objective-c": 1, shell: 1 }, WARRANTY: { "c++": 1, shell: 1 }, OF: { "c++": 1, "objective-c": 1, shell: 1 }, ANY: { "c++": 1, "objective-c": 1, shell: 1 }, KIND: { "c++": 1, "objective-c": 1, shell: 1 }, EXPRESS: { "c++": 1, "objective-c": 1, shell: 1 }, OR: { "c++": 1, "objective-c": 1, shell: 1 }, IMPLIED: { "c++": 1, "objective-c": 1, shell: 1 }, INCLUDING: { "c++": 1, "objective-c": 1, shell: 1 }, BUT: { "c++": 1, "objective-c": 1, shell: 1 }, NOT: { "c++": 1, "objective-c": 1, shell: 1 }, LIMITED: { "c++": 1, "objective-c": 1, shell: 1 }, TO: { "c++": 1, "objective-c": 1, shell: 1 }, WARRANTIES: { "c++": 1, "objective-c": 1, shell: 1 }, MERCHANTABILITY: { "c++": 1, "objective-c": 1, shell: 1 }, FITNESS: { "c++": 1, "objective-c": 1, shell: 1 }, FOR: { "c++": 1, "objective-c": 1, shell: 1 }, A: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, PARTICULAR: { "c++": 1, "objective-c": 1, shell: 1 }, PURPOSE: { "c++": 1, "objective-c": 1, shell: 1 }, AND: { "c++": 1, "objective-c": 1, shell: 1 }, NONINFRINGEMENT: { "c++": 1, shell: 1 }, IN: { "c++": 1, "objective-c": 1, shell: 1 }, NO: { "c++": 1, "objective-c": 1, shell: 1 }, EVENT: { "c++": 1, "objective-c": 1, shell: 1 }, SHALL: { "c++": 1, "objective-c": 1, shell: 1 }, AUTHORS: { "c++": 1, shell: 1 }, COPYRIGHT: { "c++": 1, "objective-c": 1, shell: 1 }, HOLDERS: { "c++": 1, "objective-c": 1, shell: 1 }, BE: { "c++": 1, "objective-c": 1, shell: 1 }, LIABLE: { "c++": 1, "objective-c": 1, shell: 1 }, CLAIM: { "c++": 1, shell: 1 }, DAMAGES: { "c++": 1, "objective-c": 1, shell: 1 }, OTHER: { "c++": 1, shell: 1 }, LIABILITY: { "c++": 1, "objective-c": 1, shell: 1 }, WHETHER: { "c++": 1, "objective-c": 1, shell: 1 }, AN: { "c++": 1, shell: 1 }, ACTION: { "c++": 1, shell: 1 }, CONTRACT: { "c++": 1, "objective-c": 1, shell: 1 }, TORT: { "c++": 1, "objective-c": 1, shell: 1 }, OTHERWISE: { "c++": 1, "objective-c": 1, shell: 1 }, ARISING: { "c++": 1, "objective-c": 1, shell: 1 }, FROM: { "c++": 1, shell: 1 }, OUT: { "c++": 1, "objective-c": 1, shell: 1 }, CONNECTION: { "c++": 1, shell: 1 }, WITH: { "c++": 1, shell: 1 }, USE: { "c++": 1, "objective-c": 1, shell: 1 }, DEALINGS: { "c++": 1, shell: 1 }, include: { "c++": 1, c: 1, html: 1, "objective-c": 1, ruby: 1, shell: 1 }, node: { "c++": 1, html: 1 }, h: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, node_buffer: { "c++": 1 }, v8: { "c++": 1 }, profiler: { "c++": 1 }, assert: { "c++": 1, c: 1, "objective-c": 1 }, stdlib: { "c++": 1, c: 1, "objective-c": 1 }, malloc: { "c++": 1, c: 1, "objective-c": 1 }, string: { "c++": 1, c: 1, javascript: 1, "objective-c": 1, python: 1 }, memcpy: { "c++": 1, "objective-c": 1 }, ifdef: { "c++": 1, c: 1, html: 1, "objective-c": 1 }, __POSIX__: { "c++": 1 }, arpa: { "c++": 1 }, inet: { "c++": 1 }, htons: { "c++": 1 }, htonl: { "c++": 1 }, endif: { "c++": 1, c: 1, html: 1, "objective-c": 1 }, define: { "c++": 1, c: 1, "objective-c": 1 }, MIN: { "c++": 1 }, b: { "c++": 1, c: 1, css: 1, "objective-c": 1, ruby: 1 }, BUFFER_CLASS_ID: { "c++": 1 }, "0xBABE": { "c++": 1 }, namespace: { "c++": 1 }, using: { "c++": 1, "objective-c": 1, python: 1, ruby: 1 }, SLICE_ARGS: { "c++": 1 }, start_arg: { "c++": 1 }, end_arg: { "c++": 1 }, if: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, IsInt32: { "c++": 1 }, return: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, ThrowException: { "c++": 1 }, Exception: { "c++": 1, python: 1 }, TypeError: { "c++": 1, python: 1 }, String: { "c++": 1, javascript: 1, ruby: 1 }, New: { "c++": 1, css: 1, html: 1 }, Bad: { "c++": 1 }, argument: { "c++": 1, "objective-c": 1 }, int32_t: { "c++": 1 }, start: { "c++": 1, c: 1 }, Int32Value: { "c++": 1 }, end: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, Error: { "c++": 1, c: 1, javascript: 1, "objective-c": 1, python: 1 }, Must: { "c++": 1 }, have: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, size_t: { "c++": 1, c: 1, "objective-c": 1 }, parent: { "c++": 1, html: 1 }, length_: { "c++": 1 }, cannot: { "c++": 1 }, longer: { "c++": 1, "objective-c": 1 }, than: { "c++": 1, c: 1, "objective-c": 1, shell: 1 }, length: { "c++": 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, static: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1 }, Persistent: { "c++": 1 }, length_symbol: { "c++": 1 }, chars_written_sym: { "c++": 1 }, write_sym: { "c++": 1 }, FunctionTemplate: { "c++": 1 }, Buffer: { "c++": 1, "objective-c": 1 }, constructor_template: { "c++": 1 }, inline: { "c++": 1, css: 1 }, base64_decoded_size: { "c++": 1 }, const: { "c++": 1, c: 1, "objective-c": 1 }, char: { "c++": 1, c: 1, "objective-c": 1 }, src: { "c++": 1, css: 1, html: 1 }, size: { "c++": 1, c: 1, css: 1, javascript: 1, "objective-c": 1, python: 1 }, int: { "c++": 1, c: 1, "objective-c": 1 }, remainder: { "c++": 1 }, special: { "c++": 1, "objective-c": 1, python: 1 }, case: { "c++": 1, c: 1, "objective-c": 1, python: 1, shell: 1 }, byte: { "c++": 1, python: 1 }, input: { "c++": 1, css: 1, html: 1, shell: 1 }, decoded: { "c++": 1 }, else: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, non: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, padded: { "c++": 1, css: 1 }, add: { "c++": 1, c: 1, css: 1, "objective-c": 1, shell: 1 }, extra: { "c++": 1, css: 1, html: 1, "objective-c": 1 }, bytes: { "c++": 1, "objective-c": 1, python: 1 }, check: { "c++": 1, c: 1, css: 1, javascript: 1, "objective-c": 1 }, for: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, trailing: { "c++": 1, javascript: 1, shell: 1 }, padding: { "c++": 1, css: 1 }, ByteLength: { "c++": 1 }, Handle: { "c++": 1, python: 1 }, enum: { "c++": 1, "objective-c": 1 }, encoding: { "c++": 1, "objective-c": 1, python: 1 }, enc: { "c++": 1 }, HandleScope: { "c++": 1 }, scope: { "c++": 1, css: 1 }, UTF8: { "c++": 1, "objective-c": 1 }, Utf8Length: { "c++": 1 }, BASE64: { "c++": 1 }, Utf8Value: { "c++": 1 }, v: { "c++": 1, python: 1, ruby: 1 }, UCS2: { "c++": 1 }, Length: { "c++": 1 }, HEX: { "c++": 1 }, Object: { "c++": 1, javascript: 1, "objective-c": 1 }, get: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, from: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, global: { "c++": 1, css: 1, ruby: 1 }, Local: { "c++": 1 }, Context: { "c++": 1 }, GetCurrent: { "c++": 1 }, Global: { "c++": 1, ruby: 1 }, Value: { "c++": 1 }, bv: { "c++": 1 }, Get: { "c++": 1, ruby: 1 }, NewSymbol: { "c++": 1 }, IsFunction: { "c++": 1 }, Function: { "c++": 1, javascript: 1 }, Cast: { "c++": 1 }, argv: { "c++": 1, c: 1 }, instance: { "c++": 1, "objective-c": 1, python: 1, ruby: 1 }, NewInstance: { "c++": 1 }, Close: { "c++": 1, html: 1 }, arg: { "c++": 1, c: 1, html: 1, "objective-c": 1, ruby: 1 }, Integer: { "c++": 1, "objective-c": 1, python: 1 }, NewFromUnsigned: { "c++": 1 }, GetFunction: { "c++": 1 }, IsEmpty: { "c++": 1 }, NULL: { "c++": 1, c: 1, "objective-c": 1 }, ObjectWrap: { "c++": 1 }, Unwrap: { "c++": 1 }, data: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, python: 1, ruby: 1, shell: 1 }, obj: { "c++": 1, html: 1, javascript: 1 }, buffer: { "c++": 1, "objective-c": 1 }, Replace: { "c++": 1 }, free_callback: { "c++": 1 }, callback: { "c++": 1, javascript: 1 }, void: { "c++": 1, c: 1, html: 1, "objective-c": 1 }, hint: { "c++": 1 }, Arguments: { "c++": 1 }, args: { "c++": 1, c: 1, ruby: 1 }, IsConstructCall: { "c++": 1 }, FromConstructorTemplate: { "c++": 1 }, IsUint32: { "c++": 1 }, ThrowTypeError: { "c++": 1 }, Uint32Value: { "c++": 1 }, kMaxLength: { "c++": 1 }, ThrowRangeError: { "c++": 1 }, new: { "c++": 1, css: 1, html: 1, javascript: 1, python: 1, ruby: 1, shell: 1 }, This: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, ruby: 1 }, wrapper: { "c++": 1, css: 1, html: 1 }, Wrap: { "c++": 1 }, callback_: { "c++": 1 }, handle_: { "c++": 1 }, SetWrapperClassId: { "c++": 1 }, data_: { "c++": 1 }, callback_hint_: { "c++": 1 }, delete: { "c++": 1, css: 1 }, V8: { "c++": 1 }, AdjustAmountOfExternalAllocatedMemory: { "c++": 1 }, static_cast: { "c++": 1 }, intptr_t: { "c++": 1 }, sizeof: { "c++": 1, "objective-c": 1 }, SetIndexedPropertiesToExternalArrayData: { "c++": 1 }, kExternalUnsignedByteArray: { "c++": 1 }, Set: { "c++": 1, c: 1, javascript: 1, python: 1, ruby: 1 }, BinarySlice: { "c++": 1 }, Encode: { "c++": 1, python: 1 }, BINARY: { "c++": 1 }, AsciiSlice: { "c++": 1 }, Utf8Slice: { "c++": 1 }, Ucs2Slice: { "c++": 1 }, uint16_t: { "c++": 1, "objective-c": 1 }, base64_table: { "c++": 1 }, ABCDEFGHIJKLMNOPQRSTUVWXYZ: { "c++": 1 }, abcdefghijklmnopqrstuvwxyz: { "c++": 1 }, "0123456789": { "c++": 1 }, supports: { "c++": 1 }, regular: { "c++": 1, css: 1 }, URL: { "c++": 1, html: 1, python: 1 }, safe: { "c++": 1 }, base64: { "c++": 1 }, unbase64_table: { "c++": 1 }, unbase64: { "c++": 1 }, x: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, uint8_t: { "c++": 1, "objective-c": 1 }, Base64Slice: { "c++": 1 }, n: { "c++": 1, c: 1, css: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, out_len: { "c++": 1 }, out: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, bitbuf: { "c++": 1 }, i: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1 }, index: { "c++": 1, css: 1, javascript: 1, "objective-c": 1, ruby: 1 }, j: { "c++": 1, html: 1 }, c: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, ruby: 1 }, bool: { "c++": 1, css: 1 }, b1_oob: { "c++": 1 }, b2_oob: { "c++": 1 }, while: { "c++": 1, c: 1, "objective-c": 1, python: 1, shell: 1 }, false: { "c++": 1, css: 1, javascript: 1, "objective-c": 1, ruby: 1 }, true: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, "0x03": { "c++": 1 }, "0x0F": { "c++": 1 }, "0x3F": { "c++": 1 }, fill: { "c++": 1, css: 1 }, value: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, ruby: 1 }, Fill: { "c++": 1 }, not: { "c++": 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, number: { "c++": 1, css: 1, "objective-c": 1, python: 1, shell: 1 }, memset: { "c++": 1, "objective-c": 1 }, Undefined: { "c++": 1 }, var: { "c++": 1, css: 1, javascript: 1 }, bytesCopied: { "c++": 1 }, target: { "c++": 1, css: 1, html: 1, "objective-c": 1 }, targetStart: { "c++": 1, "objective-c": 1 }, sourceStart: { "c++": 1, "objective-c": 1 }, sourceEnd: { "c++": 1, "objective-c": 1 }, Copy: { "c++": 1 }, source: { "c++": 1, "objective-c": 1, shell: 1 }, HasInstance: { "c++": 1 }, First: { "c++": 1 }, should: { "c++": 1, html: 1, "objective-c": 1, python: 1 }, ToObject: { "c++": 1 }, target_data: { "c++": 1 }, Data: { "c++": 1, html: 1 }, target_length: { "c++": 1 }, target_start: { "c++": 1 }, source_start: { "c++": 1 }, source_end: { "c++": 1 }, we: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, re: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, done: { "c++": 1, css: 1, "objective-c": 1, shell: 1 }, bounds: { "c++": 1, "objective-c": 1 }, to_copy: { "c++": 1 }, need: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, slightly: { "c++": 1 }, slower: { "c++": 1 }, memmove: { "c++": 1, "objective-c": 1 }, ranges: { "c++": 1 }, might: { "c++": 1, "objective-c": 1 }, overlap: { "c++": 1 }, charsWritten: { "c++": 1 }, utf8Write: { "c++": 1 }, offset: { "c++": 1, css: 1, "objective-c": 1 }, maxLength: { "c++": 1 }, Utf8Write: { "c++": 1 }, IsString: { "c++": 1 }, Argument: { "c++": 1 }, must: { "c++": 1, c: 1, "objective-c": 1, shell: 1 }, s: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, ToString: { "c++": 1 }, Offset: { "c++": 1 }, max_length: { "c++": 1 }, IsUndefined: { "c++": 1 }, p: { "c++": 1, c: 1, css: 1, html: 1, python: 1, shell: 1 }, char_written: { "c++": 1 }, written: { "c++": 1, "objective-c": 1 }, WriteUtf8: { "c++": 1 }, HINT_MANY_WRITES_EXPECTED: { "c++": 1 }, NO_NULL_TERMINATION: { "c++": 1 }, ucs2Write: { "c++": 1 }, Ucs2Write: { "c++": 1 }, Write: { "c++": 1, c: 1 }, asciiWrite: { "c++": 1 }, AsciiWrite: { "c++": 1 }, WriteAscii: { "c++": 1 }, bytesWritten: { "c++": 1 }, base64Write: { "c++": 1 }, Base64Write: { "c++": 1 }, AsciiValue: { "c++": 1 }, d: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, shell: 1 }, dst: { "c++": 1 }, dstEnd: { "c++": 1 }, srcEnd: { "c++": 1 }, remaining: { "c++": 1, c: 1, "objective-c": 1 }, break: { "c++": 1, css: 1, "objective-c": 1, python: 1 }, "0x30": { "c++": 1 }, "0x3C": { "c++": 1 }, BinaryWrite: { "c++": 1 }, DecodeWrite: { "c++": 1 }, nbytes: { "c++": 1 }, byteLength: { "c++": 1 }, utf8: { "c++": 1 }, e: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, ParseEncoding: { "c++": 1 }, MakeFastBuffer: { "c++": 1 }, fast_buffer: { "c++": 1 }, uint32_t: { "c++": 1, "objective-c": 1 }, val: { "c++": 1, c: 1, html: 1, javascript: 1, python: 1 }, IsObject: { "c++": 1 }, GetIndexedPropertiesExternalArrayDataType: { "c++": 1 }, Also: { "c++": 1 }, SlowBuffers: { "c++": 1 }, that: { "c++": 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, are: { "c++": 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, empty: { "c++": 1, css: 1, ruby: 1 }, class: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, RetainedBufferInfo: { "c++": 1 }, public: { "c++": 1, css: 1, javascript: 1 }, RetainedObjectInfo: { "c++": 1 }, virtual: { "c++": 1 }, Dispose: { "c++": 1 }, IsEquivalent: { "c++": 1 }, GetHash: { "c++": 1 }, GetLabel: { "c++": 1 }, GetSizeInBytes: { "c++": 1 }, private: { "c++": 1, css: 1, javascript: 1, "objective-c": 1 }, buffer_: { "c++": 1 }, label: { "c++": 1, css: 1, html: 1, python: 1 }, reinterpret_cast: { "c++": 1 }, WrapperInfo: { "c++": 1 }, class_id: { "c++": 1 }, As: { "c++": 1, html: 1, "objective-c": 1, shell: 1 }, Initialize: { "c++": 1, javascript: 1, ruby: 1 }, sanity: { "c++": 1, "objective-c": 1 }, checks: { "c++": 1, "objective-c": 1 }, T: { "c++": 1 }, Z: { "c++": 1 }, t: { "c++": 1, c: 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, z: { "c++": 1, css: 1, shell: 1 }, r: { "c++": 1, javascript: 1, "objective-c": 1, python: 1 }, NODE_PSYMBOL: { "c++": 1 }, _charsWritten: { "c++": 1 }, InstanceTemplate: { "c++": 1 }, SetInternalFieldCount: { "c++": 1 }, SetClassName: { "c++": 1 }, SlowBuffer: { "c++": 1 }, NODE_SET_PROTOTYPE_METHOD: { "c++": 1 }, binarySlice: { "c++": 1 }, asciiSlice: { "c++": 1 }, base64Slice: { "c++": 1 }, ucs2Slice: { "c++": 1 }, TODO: { "c++": 1, c: 1, ruby: 1 }, utf16Slice: { "c++": 1 }, Utf16Slice: { "c++": 1 }, utf8Slice: { "c++": 1 }, binaryWrite: { "c++": 1 }, NODE_SET_METHOD: { "c++": 1 }, makeFastBuffer: { "c++": 1 }, HeapProfiler: { "c++": 1 }, DefineWrapperClass: { "c++": 1 }, NODE_MODULE: { "c++": 1 }, Marshall: { "c++": 1 }, Clow: { "c++": 1 }, Distributed: { "c++": 1 }, under: { "c++": 1, "objective-c": 1 }, Boost: { "c++": 1 }, License: { "c++": 1, "objective-c": 1, shell: 1 }, Version: { "c++": 1, "objective-c": 1 }, See: { "c++": 1, "objective-c": 1 }, accompanying: { "c++": 1 }, file: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, LICENSE_1_0: { "c++": 1 }, txt: { "c++": 1, shell: 1 }, at: { "c++": 1, css: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, http: { "c++": 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, www: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, boost: { "c++": 1 }, org: { "c++": 1, css: 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, ifndef: { "c++": 1, "objective-c": 1 }, _BOOST_MIME_HPP: { "c++": 1 }, list: { "c++": 1, css: 1, html: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, vector: { "c++": 1 }, iosfwd: { "c++": 1 }, spirit: { "c++": 1 }, qi: { "c++": 1 }, hpp: { "c++": 1 }, fusion: { "c++": 1 }, std_pair: { "c++": 1 }, phoenix: { "c++": 1 }, pulls: { "c++": 1, css: 1 }, Phoenix: { "c++": 1 }, support_istream_iterator: { "c++": 1 }, adapted: { "c++": 1 }, struct: { "c++": 1, c: 1, "objective-c": 1 }, shared_ptr: { "c++": 1 }, format: { "c++": 1, css: 1, "objective-c": 1 }, algorithm: { "c++": 1 }, predicate: { "c++": 1 }, DUMP_MIME_DATA: { "c++": 1 }, mime: { "c++": 1, javascript: 1 }, Errors: { "c++": 1 }, reported: { "c++": 1 }, exception: { "c++": 1, "objective-c": 1 }, mime_parsing_error: { "c++": 1 }, std: { "c++": 1 }, runtime_error: { "c++": 1 }, explicit: { "c++": 1, python: 1 }, msg: { "c++": 1, c: 1, javascript: 1 }, template: { "c++": 1 }, traits: { "c++": 1 }, basic_mime: { "c++": 1 }, detail: { "c++": 1, css: 1 }, k_crlf: { "c++": 1 }, "015": { "c++": 1 }, "012": { "c++": 1 }, k_package_name: { "c++": 1 }, Proposed: { "c++": 1 }, Mime: { "c++": 1 }, k_package_version: { "c++": 1 }, k_content_type_header: { "c++": 1 }, Content: { "c++": 1, javascript: 1, python: 1 }, Type: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, k_mime_version_header: { "c++": 1 }, default_types: { "c++": 1 }, typedef: { "c++": 1, c: 1, "objective-c": 1 }, string_type: { "c++": 1 }, pair: { "c++": 1, javascript: 1 }, header_type: { "c++": 1 }, body_type: { "c++": 1 }, typename: { "c++": 1 }, find_mime_header: { "c++": 1 }, str: { "c++": 1, c: 1, javascript: 1, python: 1 }, searchFor: { "c++": 1 }, operator: { "c++": 1 }, iequals: { "c++": 1 }, first: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, ruby: 1, shell: 1 }, tracer: { "c++": 1 }, fn: { "c++": 1, javascript: 1, python: 1 }, fn_: { "c++": 1 }, cout: { "c++": 1 }, endl: { "c++": 1 }, Parsing: { "c++": 1 }, header: { "c++": 1, css: 1, html: 1, javascript: 1, python: 1 }, phrase_t: { "c++": 1 }, phrase_container_t: { "c++": 1 }, mime_content_type: { "c++": 1 }, type: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, sub_type: { "c++": 1 }, phrases: { "c++": 1 }, phx: { "c++": 1 }, _val: { "c++": 1 }, _1: { "c++": 1 }, Iterator: { "c++": 1 }, Container: { "c++": 1 }, mime_header_parser: { "c++": 1 }, grammar: { "c++": 1 }, base_type: { "c++": 1 }, mime_headerList: { "c++": 1 }, mime_header: { "c++": 1 }, crlf: { "c++": 1 }, token: { "c++": 1, html: 1, "objective-c": 1 }, lit: { "c++": 1 }, char_: { "c++": 1 }, zA: { "c++": 1 }, Z_0: { "c++": 1 }, In: { "c++": 1, "objective-c": 1 }, Classifieds: { "c++": 1 }, "000001": { "c++": 1 }, begins: { "c++": 1 }, with: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, CRLF: { "c++": 1, javascript: 1 }, valuePart: { "c++": 1 }, eps: { "c++": 1 }, valueCont: { "c++": 1 }, contWS: { "c++": 1 }, name: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, ruby: 1, shell: 1 }, part: { "c++": 1, python: 1 }, on_error: { "c++": 1, c: 1 }, fail: { "c++": 1, "objective-c": 1 }, Expecting: { "c++": 1 }, labels: { "c++": 1, css: 1, html: 1 }, _4: { "c++": 1 }, here: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, construct: { "c++": 1 }, _3: { "c++": 1 }, _2: { "c++": 1 }, rule: { "c++": 1, css: 1, html: 1 }, value_type: { "c++": 1 }, read_headers: { "c++": 1 }, begin: { "c++": 1, ruby: 1 }, __func__: { "c++": 1 }, retVal: { "c++": 1 }, mh_parser: { "c++": 1 }, parse: { "c++": 1, javascript: 1, "objective-c": 1, ruby: 1, shell: 1 }, throw: { "c++": 1, "objective-c": 1, python: 1 }, Failed: { "c++": 1 }, headers: { "c++": 1, python: 1 }, Headers: { "c++": 1, html: 1, python: 1 }, const_iterator: { "c++": 1 }, iter: { "c++": 1 }, second: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1 }, idx: { "c++": 1, "objective-c": 1 }, npos: { "c++": 1 }, find: { "c++": 1, python: 1, shell: 1 }, replace: { "c++": 1, javascript: 1, python: 1 }, strlen: { "c++": 1, c: 1, "objective-c": 1 }, structure: { "c++": 1, "objective-c": 1 }, taken: { "c++": 1, "objective-c": 1 }, RFC: { "c++": 1, python: 1 }, ietf: { "c++": 1 }, rfc: { "c++": 1 }, rfc2045: { "c++": 1 }, section: { "c++": 1, css: 1, python: 1 }, mime_content_type_parser: { "c++": 1 }, content_type_header: { "c++": 1 }, sub_part: { "c++": 1 }, phrase: { "c++": 1 }, extension_token: { "c++": 1 }, ws: { "c++": 1, c: 1 }, attribute: { "c++": 1, python: 1 }, line_sep: { "c++": 1 }, comment: { "c++": 1, css: 1, html: 1 }, lexeme: { "c++": 1 }, alias: { "c++": 1, ruby: 1, shell: 1 }, quoted_string: { "c++": 1 }, Xx: { "c++": 1 }, parse_content_type: { "c++": 1 }, theHeader: { "c++": 1 }, ct_parser: { "c++": 1 }, get_ct_value: { "c++": 1 }, ctString: { "c++": 1 }, key: { "c++": 1, css: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, mc: { "c++": 1 }, Couldn: { "c++": 1, shell: 1 }, thing: { "c++": 1, "objective-c": 1 }, later: { "c++": 1, "objective-c": 1, python: 1 }, looking: { "c++": 1 }, boundary: { "c++": 1 }, somevalue: { "c++": 1 }, get_boundary: { "c++": 1 }, Read: { "c++": 1, python: 1 }, body: { "c++": 1, css: 1, html: 1, javascript: 1, python: 1 }, multipart: { "c++": 1, python: 1 }, Return: { "c++": 1, c: 1, javascript: 1, ruby: 1 }, containers: { "c++": 1 }, where: { "c++": 1, "objective-c": 1 }, actual: { "c++": 1, c: 1, python: 1 }, rest: { "c++": 1 }, sub: { "c++": 1, css: 1 }, parts: { "c++": 1, javascript: 1, ruby: 1 }, Note: { "c++": 1, "objective-c": 1 }, can: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, If: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, then: { "c++": 1, "objective-c": 1, shell: 1 }, separator: { "c++": 1, css: 1 }, marker: { "c++": 1 }, abcde: { "c++": 1 }, could: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, separators: { "c++": 1 }, really: { "c++": 1, "objective-c": 1 }, abcdeCRLF: { "c++": 1 }, no: { "c++": 1, css: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, sub_part_t: { "c++": 1 }, sub_parts_t: { "c++": 1 }, bodyContainer: { "c++": 1 }, multipart_body_type: { "c++": 1 }, prolog_is_missing: { "c++": 1 }, body_prolog: { "c++": 1 }, sub_parts: { "c++": 1 }, body_epilog: { "c++": 1 }, Parse: { "c++": 1, javascript: 1, ruby: 1 }, mulitpart: { "c++": 1 }, Either: { "c++": 1 }, boundaryCRLF: { "c++": 1 }, which: { "c++": 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, some: { "c++": 1, ruby: 1, shell: 1 }, sequence: { "c++": 1, "objective-c": 1 }, chars: { "c++": 1, "objective-c": 1 }, I: { "c++": 1, html: 1, "objective-c": 1, shell: 1 }, am: { "c++": 1 }, deliberately: { "c++": 1 }, checking: { "c++": 1 }, termination: { "c++": 1 }, multipart_body_parser: { "c++": 1 }, isMissing: { "c++": 1 }, mimeBody: { "c++": 1 }, m_is_missing: { "c++": 1 }, Thanks: { "c++": 1 }, Michael: { "c++": 1 }, Caisse: { "c++": 1 }, working: { "c++": 1 }, bareSep: { "c++": 1 }, ref: { "c++": 1, css: 1, html: 1 }, sep: { "c++": 1 }, Break: { "c++": 1 }, up: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, python: 1 }, multi: { "c++": 1, ruby: 1 }, into: { "c++": 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, its: { "c++": 1, html: 1, "objective-c": 1, python: 1 }, constituent: { "c++": 1 }, multipart_part_parser: { "c++": 1 }, mimeParts: { "c++": 1 }, terminator: { "c++": 1 }, read_multipart_body: { "c++": 1 }, mp_body: { "c++": 1 }, innerC: { "c++": 1 }, mpBody: { "c++": 1 }, mb_parser: { "c++": 1 }, mp_parser: { "c++": 1 }, back_inserter: { "c++": 1 }, Multipart: { "c++": 1 }, Body: { "c++": 1 }, count: { "c++": 1, css: 1, "objective-c": 1, ruby: 1 }, trailer: { "c++": 1 }, missing: { "c++": 1, shell: 1 }, Prolog: { "c++": 1, html: 1 }, ostream_iterator: { "c++": 1 }, Epilog: { "c++": 1 }, read_simplepart_body: { "c++": 1 }, SinglePart: { "c++": 1 }, FIXME: { "c++": 1 }, Need: { "c++": 1, "objective-c": 1 }, headerList: { "c++": 1 }, write_headers: { "c++": 1 }, ostream: { "c++": 1 }, write_body: { "c++": 1 }, write_boundary: { "c++": 1 }, isLast: { "c++": 1 }, leadingCR: { "c++": 1 }, parse_mime: { "c++": 1 }, default_content_type: { "c++": 1 }, text: { "c++": 1, css: 1, html: 1, javascript: 1, python: 1, shell: 1 }, plain: { "c++": 1, javascript: 1 }, simple_part: { "c++": 1 }, multi_part: { "c++": 1 }, message_part: { "c++": 1 }, part_kind: { "c++": 1 }, Types: { "c++": 1 }, headerEntry: { "c++": 1 }, iterator: { "c++": 1 }, headerIter: { "c++": 1 }, constHeaderIter: { "c++": 1 }, mimePtr: { "c++": 1 }, partList: { "c++": 1 }, partIter: { "c++": 1 }, constPartIter: { "c++": 1 }, Constructors: { "c++": 1 }, destructor: { "c++": 1 }, assignment: { "c++": 1, css: 1 }, swap: { "c++": 1 }, subtype: { "c++": 1 }, m_body_prolog_is_missing: { "c++": 1 }, m_body: { "c++": 1 }, m_body_epilog: { "c++": 1 }, Can: { "c++": 1 }, create: { "c++": 1, css: 1, html: 1, "objective-c": 1, shell: 1 }, w: { "c++": 1, c: 1, css: 1, html: 1, ruby: 1 }, o: { "c++": 1, css: 1, html: 1, ruby: 1 }, We: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, just: { "c++": 1, "objective-c": 1, shell: 1 }, two: { "c++": 1, css: 1, "objective-c": 1 }, Everything: { "c++": 1, html: 1, "objective-c": 1 }, optional: { "c++": 1, css: 1, javascript: 1, shell: 1 }, m_part_kind: { "c++": 1 }, part_kind_from_string_pair: { "c++": 1 }, set_header_value: { "c++": 1 }, theHeaders: { "c++": 1 }, m_default_content_type: { "c++": 1 }, ct: { "c++": 1, javascript: 1 }, found: { "c++": 1, "objective-c": 1, python: 1, ruby: 1 }, find_if: { "c++": 1 }, mct: { "c++": 1 }, m_headers: { "c++": 1 }, rhs: { "c++": 1 }, m_subparts: { "c++": 1 }, shared: { "c++": 1, "objective-c": 1 }, pointers: { "c++": 1, "objective-c": 1 }, subpart_begin: { "c++": 1 }, subpart_end: { "c++": 1 }, push_back: { "c++": 1 }, Simple: { "c++": 1, html: 1 }, based: { "c++": 1, html: 1, javascript: 1, shell: 1 }, efficient: { "c++": 1 }, enough: { "c++": 1 }, optimize: { "c++": 1 }, it: { "c++": 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, temp: { "c++": 1, shell: 1 }, What: { "c++": 1 }, kind: { "c++": 1, "objective-c": 1 }, simple: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, ruby: 1 }, message: { "c++": 1, css: 1, html: 1, "objective-c": 1, shell: 1 }, get_part_kind: { "c++": 1 }, Sub: { "c++": 1 }, information: { "c++": 1, "objective-c": 1, ruby: 1 }, error: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, No: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, example: { "c++": 1, c: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, part_count: { "c++": 1 }, check_subpart_index: { "c++": 1 }, append_part: { "c++": 1 }, newPart: { "c++": 1 }, check_subpart_append: { "c++": 1 }, Reading: { "c++": 1 }, raw: { "c++": 1, python: 1 }, header_begin: { "c++": 1 }, header_end: { "c++": 1 }, Header: { "c++": 1 }, manipulation: { "c++": 1, python: 1 }, tag: { "c++": 1, css: 1, html: 1 }, still: { "c++": 1 }, header_exists: { "c++": 1 }, find_header: { "c++": 1 }, header_value: { "c++": 1 }, make_pair: { "c++": 1 }, get_content_type_header: { "c++": 1 }, get_content_type: { "c++": 1 }, Special: { "c++": 1 }, purpose: { "c++": 1, "objective-c": 1 }, helper: { "c++": 1 }, routine: { "c++": 1 }, append_phrase_to_content_type: { "c++": 1 }, Create: { "c++": 1, html: 1 }, there: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, isn: { "c++": 1, "objective-c": 1 }, one: { "c++": 1, c: 1, css: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, p_found: { "c++": 1 }, already: { "c++": 1, "objective-c": 1, python: 1 }, exists: { "c++": 1, ruby: 1 }, set: { "c++": 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, methods: { "c++": 1, "objective-c": 1 }, body_size: { "c++": 1 }, set_body: { "c++": 1 }, contents: { "c++": 1, css: 1, "objective-c": 1, python: 1, shell: 1 }, sz: { "c++": 1 }, istream: { "c++": 1 }, istream_iterator: { "c++": 1 }, new_body: { "c++": 1 }, set_multipart_prolog_is_missing: { "c++": 1 }, set_body_prolog: { "c++": 1 }, new_body_prolog: { "c++": 1 }, set_body_epilog: { "c++": 1 }, new_body_epilog: { "c++": 1 }, Output: { "c++": 1, c: 1 }, stream_out: { "c++": 1 }, called: { "c++": 1, "objective-c": 1 }, by: { "c++": 1, c: 1, "objective-c": 1, python: 1, shell: 1 }, wrong: { "c++": 1, html: 1, "objective-c": 1 }, Find: { "c++": 1 }, invent: { "c++": 1 }, try: { "c++": 1, html: 1, javascript: 1, python: 1, shell: 1 }, catch: { "c++": 1, javascript: 1, python: 1 }, Make: { "c++": 1, python: 1 }, strings: { "c++": 1, "objective-c": 1 }, more: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, ruby: 1, shell: 1 }, unique: { "c++": 1 }, _NextPart: { "c++": 1 }, "08ld": { "c++": 1 }, clock: { "c++": 1, c: 1 }, prolog: { "c++": 1, "objective-c": 1 }, don: { "c++": 1, "objective-c": 1, python: 1, shell: 1 }, want: { "c++": 1, "objective-c": 1, ruby: 1 }, on: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, front: { "c++": 1 }, subtle: { "c++": 1, css: 1 }, difference: { "c++": 1, "objective-c": 1 }, between: { "c++": 1 }, an: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, zero: { "c++": 1, css: 1, "objective-c": 1 }, comments: { "c++": 1, css: 1, html: 1, shell: 1 }, parser: { "c++": 1, javascript: 1, ruby: 1 }, code: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, python: 1 }, writeCR: { "c++": 1 }, Build: { "c++": 1, python: 1 }, make_simple_part: { "c++": 1 }, retval: { "c++": 1 }, iterators: { "c++": 1 }, stream: { "c++": 1, python: 1 }, last: { "c++": 1, c: 1, css: 1, html: 1, ruby: 1, shell: 1 }, expect: { "c++": 1, "objective-c": 1, python: 1 }, will: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, complicated: { "c++": 1, "objective-c": 1 }, as: { "c++": 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, time: { "c++": 1, c: 1, css: 1, html: 1, "objective-c": 1, python: 1, ruby: 1 }, goes: { "c++": 1, "objective-c": 1 }, delivery: { "c++": 1 }, status: { "c++": 1, c: 1, css: 1, html: 1, javascript: 1, python: 1 }, defines: { "c++": 1 }, faqs: { "c++": 1 }, rfcs: { "c++": 1 }, rfc3464: { "c++": 1 }, html: { "c++": 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, consists: { "c++": 1 }, fields: { "c++": 1, css: 1, javascript: 1, "objective-c": 1, python: 1 }, formatted: { "c++": 1, css: 1 }, according: { "c++": 1 }, ABNF: { "c++": 1 }, see: { "c++": 1, css: 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, RFC822: { "c++": 1 }, Trying: { "c++": 1 }, access: { "c++": 1, css: 1 }, xxx: { "c++": 1 }, How: { "c++": 1 }, did: { "c++": 1, "objective-c": 1 }, Multi: { "c++": 1, python: 1 }, always: { "c++": 1, "objective-c": 1 }, only: { "c++": 1, css: 1, "objective-c": 1 }, multiparts: { "c++": 1 }, mime_part: { "c++": 1 }, content_type: { "c++": 1, python: 1 }, ve: { "c++": 1, "objective-c": 1 }, got: { "c++": 1, javascript: 1 }, xxxx: { "c++": 1 }, single: { "c++": 1, javascript: 1, "objective-c": 1, shell: 1 }, embedded: { "c++": 1, css: 1 }, course: { "c++": 1 }, part_separator: { "c++": 1 }, cont_type: { "c++": 1 }, digest: { "c++": 1 }, rfc822: { "c++": 1 }, body_and_subParts: { "c++": 1 }, iter_type: { "c++": 1 }, Streaming: { "c++": 1 }, BOOST_FUSION_ADAPT_STRUCT: { "c++": 1 }, mon: { c: 1 }, TJ: { c: 1, ruby: 1 }, Holowaychuk: { c: 1, ruby: 1 }, tj: { c: 1, javascript: 1 }, vision: { c: 1 }, media: { c: 1, css: 1, html: 1, "objective-c": 1 }, ca: { c: 1 }, stdio: { c: 1, "objective-c": 1 }, unistd: { c: 1 }, fcntl: { c: 1 }, signal: { c: 1 }, stdint: { c: 1, "objective-c": 1 }, sys: { c: 1, "objective-c": 1 }, types: { c: 1, javascript: 1, "objective-c": 1 }, wait: { c: 1 }, stat: { c: 1, css: 1 }, commander: { c: 1, ruby: 1 }, ms: { c: 1, css: 1, javascript: 1 }, Program: { c: 1, ruby: 1 }, version: { c: 1, css: 1, "objective-c": 1, ruby: 1, shell: 1 }, VERSION: { c: 1, ruby: 1 }, Log: { c: 1 }, prefix: { c: 1, html: 1 }, Monitor: { c: 1 }, pidfile: { c: 1 }, mon_pidfile: { c: 1 }, logfile: { c: 1 }, on_restart: { c: 1 }, int64_t: { c: 1 }, last_restart_at: { c: 1 }, daemon: { c: 1 }, sleepsec: { c: 1 }, max_attempts: { c: 1 }, attempts: { c: 1, "objective-c": 1, ruby: 1 }, monitor_t: { c: 1 }, Logger: { c: 1 }, log: { c: 1, html: 1 }, fmt: { c: 1 }, printf: { c: 1, shell: 1 }, fprintf: { c: 1 }, stderr: { c: 1 }, exit: { c: 1, shell: 1 }, Check: { c: 1, javascript: 1, python: 1, ruby: 1 }, process: { c: 1, ruby: 1, shell: 1 }, pid: { c: 1 }, alive: { c: 1 }, pid_t: { c: 1 }, kill: { c: 1 }, Graceful: { c: 1 }, group: { c: 1, css: 1, shell: 1 }, graceful_exit: { c: 1 }, sig: { c: 1 }, getpid: { c: 1 }, shutting: { c: 1 }, down: { c: 1, css: 1, html: 1 }, bye: { c: 1, ruby: 1 }, timestamp: { c: 1 }, milliseconds: { c: 1 }, timeval: { c: 1 }, tv: { c: 1 }, ret: { c: 1 }, gettimeofday: { c: 1 }, tv_sec: { c: 1 }, tv_usec: { c: 1 }, write_pidfile: { c: 1 }, buf: { c: 1 }, snprintf: { c: 1 }, fd: { c: 1 }, open: { c: 1, css: 1, javascript: 1, "objective-c": 1 }, O_WRONLY: { c: 1 }, O_CREAT: { c: 1 }, S_IRUSR: { c: 1 }, S_IWUSR: { c: 1 }, perror: { c: 1 }, write: { c: 1, css: 1, "objective-c": 1, python: 1, shell: 1 }, close: { c: 1, css: 1, html: 1, python: 1 }, show_status_of: { c: 1 }, off_t: { c: 1 }, st_size: { c: 1 }, opens: { c: 1 }, O_RDONLY: { c: 1 }, read: { c: 1, css: 1, html: 1, python: 1, shell: 1 }, uptime: { c: 1 }, time_t: { c: 1 }, modified: { c: 1, css: 1, "objective-c": 1, shell: 1 }, st_mtime: { c: 1 }, now: { c: 1, "objective-c": 1, python: 1 }, secs: { c: 1 }, atoi: { c: 1 }, milliseconds_to_long_string: { c: 1 }, "90m": { c: 1 }, "0m": { c: 1 }, "32malive": { c: 1 }, m: { c: 1, css: 1, html: 1, "objective-c": 1, shell: 1 }, "31mdead": { c: 1 }, Redirect: { c: 1 }, redirect_stdio_to: { c: 1 }, logfd: { c: 1 }, O_APPEND: { c: 1 }, "0755": { c: 1 }, nullfd: { c: 1 }, dev: { c: 1, "objective-c": 1, shell: 1 }, null: { c: 1, javascript: 1, "objective-c": 1, shell: 1 }, dup2: { c: 1 }, Daemonize: { c: 1 }, program: { c: 1, ruby: 1 }, daemonize: { c: 1 }, fork: { c: 1, css: 1 }, setsid: { c: 1 }, Invoke: { c: 1, javascript: 1 }, restart: { c: 1 }, command: { c: 1, css: 1, html: 1, ruby: 1, shell: 1 }, exec_restart_command: { c: 1 }, monitor: { c: 1 }, system: { c: 1, shell: 1 }, exec_error_command: { c: 1 }, since: { c: 1, "objective-c": 1, python: 1 }, ms_since_last_restart: { c: 1 }, maximum: { c: 1, "objective-c": 1 }, restarts: { c: 1 }, within: { c: 1, "objective-c": 1, ruby: 1 }, seconds: { c: 1, html: 1 }, been: { c: 1, "objective-c": 1, python: 1 }, exceeded: { c: 1, javascript: 1, "objective-c": 1 }, otherwise: { c: 1 }, attempts_exceeded: { c: 1 }, reset: { c: 1 }, good: { c: 1, shell: 1 }, given: { c: 1, javascript: 1, python: 1 }, cmd: { c: 1, shell: 1 }, exec: { c: 1 }, switch: { c: 1, css: 1, "objective-c": 1, ruby: 1 }, SIGTERM: { c: 1 }, SIG_DFL: { c: 1 }, SIGQUIT: { c: 1 }, sh: { c: 1, css: 1 }, execl: { c: 1 }, bin: { c: 1, shell: 1 }, default: { c: 1, css: 1, "objective-c": 1, ruby: 1, shell: 1 }, child: { c: 1, css: 1 }, waitpid: { c: 1 }, signalled: { c: 1 }, WIFSIGNALED: { c: 1 }, strsignal: { c: 1 }, WTERMSIG: { c: 1 }, sleep: { c: 1 }, goto: { c: 1, "objective-c": 1 }, WEXITSTATUS: { c: 1 }, ago: { c: 1, html: 1 }, bailing: { c: 1 }, path: { c: 1, css: 1, python: 1 }, on_log: { c: 1 }, command_t: { c: 1 }, self: { c: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, sec: { c: 1 }, on_sleep: { c: 1 }, on_daemonize: { c: 1 }, on_pidfile: { c: 1 }, on_mon_pidfile: { c: 1 }, on_status: { c: 1 }, required: { c: 1, css: 1, "objective-c": 1, ruby: 1 }, on_prefix: { c: 1 }, on_attempts: { c: 1 }, options: { c: 1, css: 1, javascript: 1, "objective-c": 1, ruby: 1 }, main: { c: 1, css: 1 }, argc: { c: 1 }, command_init: { c: 1 }, usage: { c: 1, css: 1, html: 1, python: 1, ruby: 1 }, command_option: { c: 1 }, l: { c: 1, html: 1, "objective-c": 1, python: 1 }, specify: { c: 1 }, before: { c: 1, css: 1, "objective-c": 1 }, executing: { c: 1 }, S: { c: 1, "objective-c": 1 }, P: { c: 1 }, retry: { c: 1, ruby: 1 }, R: { c: 1, html: 1 }, execute: { c: 1, "objective-c": 1 }, E: { c: 1 }, command_parse: { c: 1 }, signals: { c: 1 }, term: { c: 1 }, ioctl: { c: 1 }, X: { c: 1, html: 1, javascript: 1, shell: 1 }, pos: { c: 1 }, _x: { c: 1 }, Y: { c: 1, shell: 1 }, _y: { c: 1 }, Move: { c: 1, html: 1 }, y: { c: 1, css: 1, html: 1, shell: 1 }, term_move_to: { c: 1 }, f: { c: 1, "objective-c": 1, shell: 1 }, term_move_by: { c: 1 }, terminal: { c: 1, css: 1, ruby: 1, shell: 1 }, dimensions: { c: 1 }, term_size: { c: 1 }, winsize: { c: 1 }, TIOCGWINSZ: { c: 1 }, ws_col: { c: 1 }, ws_row: { c: 1 }, erase: { c: 1 }, term_erase_from_name: { c: 1 }, strcmp: { c: 1 }, K: { c: 1 }, "1K": { c: 1 }, line: { c: 1, css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, "2K": { c: 1 }, "1J": { c: 1 }, J: { c: 1, html: 1 }, screen: { c: 1, css: 1, html: 1 }, Erase: { c: 1 }, term_erase: { c: 1 }, color: { c: 1, css: 1, javascript: 1 }, term_color_from_name: { c: 1 }, black: { c: 1, css: 1 }, red: { c: 1, css: 1 }, green: { c: 1, css: 1 }, yellow: { c: 1 }, blue: { c: 1, css: 1, javascript: 1 }, magenta: { c: 1 }, cyan: { c: 1 }, white: { c: 1, css: 1, "objective-c": 1 }, term_color: { c: 1 }, refactor: { c: 1, ruby: 1 }, gray: { c: 1 }, grey: { c: 1, css: 1 }, dm: { c: 1 }, background: { c: 1, css: 1 }, term_background: { c: 1 }, microseconds: { c: 1 }, US_SEC: { c: 1 }, US_MIN: { c: 1 }, US_HOUR: { c: 1 }, US_DAY: { c: 1 }, US_WEEK: { c: 1 }, US_YEAR: { c: 1 }, MS_SEC: { c: 1 }, MS_MIN: { c: 1 }, MS_HOUR: { c: 1 }, MS_DAY: { c: 1 }, MS_WEEK: { c: 1 }, MS_YEAR: { c: 1 }, "31557600000": { c: 1 }, Convert: { c: 1 }, representation: { c: 1, "objective-c": 1, python: 1 }, "10ms": { c: 1 }, "5s": { c: 1 }, "2m": { c: 1 }, "1h": { c: 1 }, etc: { c: 1, javascript: 1, ruby: 1 }, long: { c: 1, css: 1, "objective-c": 1 }, string_to_microseconds: { c: 1 }, len: { c: 1, javascript: 1, "objective-c": 1, python: 1 }, strtoll: { c: 1, "objective-c": 1 }, string_to_milliseconds: { c: 1 }, string_to_seconds: { c: 1 }, developer: { c: 1, html: 1 }, milliseconds_to_string: { c: 1 }, MS_MAX: { c: 1 }, div: { c: 1, css: 1, html: 1 }, lldms: { c: 1 }, llds: { c: 1 }, lldm: { c: 1 }, lldh: { c: 1 }, lldd: { c: 1 }, lldw: { c: 1 }, lldy: { c: 1 }, sprintf: { c: 1 }, less: { c: 1, "objective-c": 1 }, minute: { c: 1 }, hour: { c: 1 }, day: { c: 1, css: 1, html: 1 }, week: { c: 1 }, year: { c: 1 }, lld: { c: 1, "objective-c": 1 }, ss: { c: 1, css: 1 }, tests: { c: 1 }, TEST_MS: { c: 1 }, equal: { c: 1, python: 1 }, expected: { c: 1, "objective-c": 1 }, test_string_to_microseconds: { c: 1 }, hey: { c: 1 }, "1ms": { c: 1 }, "5ms": { c: 1 }, "1s": { c: 1, css: 1 }, "1m": { c: 1 }, "2d": { c: 1 }, test_string_to_milliseconds: { c: 1 }, "1d": { c: 1 }, test_string_to_seconds: { c: 1 }, test_milliseconds_to_string: { c: 1 }, "500ms": { c: 1 }, "2s": { c: 1, css: 1 }, "5m": { c: 1 }, "2w": { c: 1 }, "3y": { c: 1 }, test_milliseconds_to_long_string: { c: 1 }, minutes: { c: 1 }, days: { c: 1, css: 1, "objective-c": 1 }, weeks: { c: 1 }, years: { c: 1, html: 1 }, "32m": { c: 1 }, u2713: { c: 1 }, "90mok": { c: 1 }, span: { css: 1, html: 1 }, applet: { css: 1 }, object: { css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, iframe: { css: 1 }, h1: { css: 1, html: 1 }, h2: { css: 1, html: 1 }, h3: { css: 1, html: 1 }, h4: { css: 1, html: 1 }, h5: { css: 1 }, h6: { css: 1, html: 1 }, blockquote: { css: 1 }, pre: { css: 1, html: 1, "objective-c": 1 }, abbr: { css: 1 }, acronym: { css: 1 }, address: { css: 1 }, big: { css: 1 }, cite: { css: 1, shell: 1 }, del: { css: 1, javascript: 1, python: 1 }, dfn: { css: 1 }, em: { css: 1, html: 1 }, img: { css: 1, html: 1 }, ins: { css: 1 }, kbd: { css: 1 }, q: { css: 1, html: 1, "objective-c": 1 }, samp: { css: 1 }, small: { css: 1, html: 1, python: 1 }, strike: { css: 1 }, strong: { css: 1, "objective-c": 1 }, sup: { css: 1 }, tt: { css: 1 }, u: { css: 1, html: 1, "objective-c": 1 }, center: { css: 1 }, dl: { css: 1, html: 1 }, dt: { css: 1, html: 1 }, dd: { css: 1, html: 1 }, ol: { css: 1 }, ul: { css: 1, html: 1 }, li: { css: 1, html: 1 }, fieldset: { css: 1 }, form: { css: 1, html: 1, javascript: 1, "objective-c": 1, python: 1 }, legend: { css: 1 }, table: { css: 1, html: 1, "objective-c": 1 }, caption: { css: 1 }, tbody: { css: 1 }, tfoot: { css: 1 }, thead: { css: 1 }, tr: { css: 1, html: 1 }, th: { css: 1 }, td: { css: 1, html: 1 }, article: { css: 1 }, aside: { css: 1 }, canvas: { css: 1 }, details: { css: 1, html: 1 }, embed: { css: 1 }, figure: { css: 1 }, figcaption: { css: 1 }, footer: { css: 1, html: 1 }, hgroup: { css: 1 }, menu: { css: 1 }, nav: { css: 1, html: 1 }, output: { css: 1, shell: 1 }, ruby: { css: 1, html: 1 }, summary: { css: 1, shell: 1 }, mark: { css: 1, "objective-c": 1, python: 1 }, audio: { css: 1 }, video: { css: 1 }, margin: { css: 1, html: 1 }, border: { css: 1 }, button: { css: 1, html: 1 }, textarea: { css: 1 }, font: { css: 1 }, family: { css: 1 }, inherit: { css: 1, ruby: 1 }, moz: { css: 1 }, box: { css: 1 }, sizing: { css: 1 }, content: { css: 1, html: 1, javascript: 1, python: 1 }, height: { css: 1, html: 1 }, min: { css: 1, shell: 1 }, width: { css: 1, html: 1 }, "960px": { css: 1 }, quotes: { css: 1 }, none: { css: 1, html: 1, python: 1 }, after: { css: 1 }, collapse: { css: 1 }, spacing: { css: 1 }, overflow: { css: 1, "objective-c": 1 }, scroll: { css: 1 }, progress: { css: 1 }, display: { css: 1, html: 1, ruby: 1 }, block: { css: 1, html: 1, "objective-c": 1, ruby: 1 }, weight: { css: 1 }, bold: { css: 1, html: 1 }, style: { css: 1, html: 1 }, italic: { css: 1, html: 1 }, ui: { css: 1 }, invalid: { css: 1, python: 1, ruby: 1 }, shadow: { css: 1 }, book: { css: 1 }, left: { css: 1, html: 1 }, "2px": { css: 1 }, "5px": { css: 1 }, url: { css: 1, html: 1, javascript: 1, python: 1, shell: 1 }, https: { css: 1, html: 1, "objective-c": 1, python: 1, shell: 1 }, a248: { css: 1, html: 1 }, akamai: { css: 1, html: 1 }, net: { css: 1, html: 1 }, assets: { css: 1, html: 1 }, github: { css: 1, html: 1, "objective-c": 1, shell: 1 }, com: { css: 1, html: 1, "objective-c": 1, shell: 1 }, images: { css: 1, html: 1 }, modules: { css: 1, html: 1 }, books: { css: 1 }, effect: { css: 1 }, gif: { css: 1 }, "068fc767": { css: 1 }, repeat: { css: 1 }, "100px": { css: 1 }, "130px": { css: 1 }, inset: { css: 1 }, "1px": { css: 1 }, rgba: { css: 1 }, callout: { css: 1 }, "15px": { css: 1 }, "10px": { css: 1 }, "13px": { css: 1 }, "8d8d6d": { css: 1 }, fffef1: { css: 1 }, solid: { css: 1 }, e5e2c8: { css: 1 }, radius: { css: 1 }, "4px": { css: 1 }, "000": { css: 1 }, "16px": { css: 1 }, bottom: { css: 1, "objective-c": 1 }, hr: { css: 1 }, transparent: { css: 1 }, top: { css: 1, html: 1, "objective-c": 1 }, fff: { css: 1 }, subdued: { css: 1 }, ddd: { css: 1 }, f8f8f8: { css: 1 }, featured: { css: 1 }, "12px": { css: 1 }, e8f0f5: { css: 1 }, d2d9de: { css: 1 }, right: { css: 1, html: 1, "objective-c": 1 }, e5e9ed: { css: 1 }, "3px": { css: 1 }, c6d5df: { css: 1 }, "14px": { css: 1 }, "20px": { css: 1 }, console: { css: 1 }, eee: { css: 1 }, "11px": { css: 1 }, diagram: { css: 1 }, align: { css: 1, "objective-c": 1 }, screenshot: { css: 1 }, b4cad8: { css: 1 }, mini: { css: 1, html: 1 }, "5d5900": { css: 1 }, e7e7ce: { css: 1 }, fffff6: { css: 1 }, linear: { css: 1, "objective-c": 1 }, gradient: { css: 1 }, fffde3: { css: 1 }, webkit: { css: 1 }, position: { css: 1 }, relative: { css: 1 }, vertical: { css: 1 }, middle: { css: 1, html: 1 }, d5d5d5: { css: 1 }, e5e5e5: { css: 1 }, help: { css: 1, html: 1, ruby: 1, shell: 1 }, mega: { css: 1 }, icon: { css: 1, html: 1 }, infotip: { css: 1 }, "6d6d4b": { css: 1 }, ffffde: { css: 1 }, e4e4c6: { css: 1 }, eff2c7: { css: 1 }, dashboard: { css: 1 }, dismiss: { css: 1, html: 1 }, absolute: { css: 1 }, cursor: { css: 1 }, pointer: { css: 1, "objective-c": 1 }, ceceb8: { css: 1 }, hover: { css: 1, html: 1 }, c60000: { css: 1 }, title: { css: 1, html: 1 }, normal: { css: 1 }, float: { css: 1 }, clear: { css: 1, html: 1, javascript: 1, "objective-c": 1 }, "6px": { css: 1 }, e4e4e4: { css: 1 }, f4f4f4: { css: 1 }, "25px": { css: 1 }, coupon: { css: 1 }, dashed: { css: 1 }, d1e5ff: { css: 1 }, newbie: { css: 1 }, fancytitle: { css: 1 }, team: { css: 1 }, dddb8e: { css: 1 }, octotip: { css: 1 }, "27px": { css: 1 }, "25494f": { css: 1 }, callouts: { css: 1 }, octocat: { css: 1, html: 1 }, png: { css: 1, html: 1 }, "039bd04e": { css: 1 }, ccf1f9: { css: 1 }, b1ecf8: { css: 1 }, frame: { css: 1, "objective-c": 1 }, "9px": { css: 1 }, "18px": { css: 1 }, indent: { css: 1, html: 1 }, "9999px": { css: 1 }, notices: { css: 1 }, "51b3de69": { css: 1 }, "50px": { css: 1 }, Monaco: { css: 1 }, Liberation: { css: 1 }, Mono: { css: 1 }, Courier: { css: 1 }, monospace: { css: 1 }, fefefe: { css: 1 }, e7e7e7: { css: 1 }, cfcfcf: { css: 1 }, facebox: { css: 1, html: 1 }, badmono: { css: 1, html: 1 }, sans: { css: 1 }, serif: { css: 1 }, flattened: { css: 1 }, "32px": { css: 1 }, password: { css: 1 }, email: { css: 1, html: 1 }, "400px": { css: 1 }, short: { css: 1, "objective-c": 1 }, "250px": { css: 1 }, autocheck: { css: 1 }, loading: { css: 1 }, spinners: { css: 1 }, spinner: { css: 1 }, "8af31515": { css: 1 }, successful: { css: 1, "objective-c": 1, python: 1 }, ajax: { css: 1, html: 1 }, success: { css: 1 }, "51d7b329": { css: 1 }, errored: { css: 1 }, "0f9e2010": { css: 1 }, "200px": { css: 1 }, note: { css: 1, "objective-c": 1 }, "9f1006": { css: 1 }, checkbox: { css: 1 }, highlight: { css: 1, html: 1 }, fffbdc: { css: 1 }, radio: { css: 1 }, cards: { css: 1 }, "7px": { css: 1 }, card: { css: 1 }, "39px": { css: 1 }, visa: { css: 1 }, image: { css: 1, html: 1 }, pricing: { css: 1 }, bc826606: { css: 1 }, master: { css: 1 }, mastercard: { css: 1 }, "6e83937f": { css: 1 }, american_express: { css: 1 }, amex: { css: 1 }, "17e7abfc": { css: 1 }, discover: { css: 1 }, "189110e8": { css: 1 }, jcb: { css: 1 }, "07338898": { css: 1 }, diners_club: { css: 1 }, diners: { css: 1 }, f30890ec: { css: 1 }, disabled: { css: 1 }, opacity: { css: 1 }, indicator: { css: 1, html: 1 }, confirm: { css: 1 }, warning: { css: 1, "objective-c": 1 }, f7ea57: { css: 1 }, c0b536: { css: 1 }, warn: { css: 1 }, hfields: { css: 1 }, both: { css: 1, "objective-c": 1 }, visibility: { css: 1, html: 1 }, hidden: { css: 1, html: 1 }, "30px": { css: 1 }, classy: { css: 1, html: 1 }, "23px": { css: 1 }, select: { css: 1, html: 1 }, fieldgroup: { css: 1 }, previewable: { css: 1 }, tabnav: { css: 1 }, tabs: { css: 1, html: 1 }, CACACA: { css: 1 }, actions: { css: 1 }, preview: { css: 1 }, selected: { css: 1, html: 1 }, widget: { css: 1 }, max: { css: 1, shell: 1 }, "500px": { css: 1 }, fafafa: { css: 1 }, DDD: { css: 1 }, focus: { css: 1 }, outline: { css: 1 }, "51A7E8": { css: 1 }, fullscreen: { css: 1 }, placeholder: { css: 1, html: 1 }, aaa: { css: 1 }, drag: { css: 1 }, drop: { css: 1 }, manual: { css: 1, javascript: 1 }, chooser: { css: 1 }, "240px": { css: 1 }, "80px": { css: 1 }, "0001": { css: 1 }, decoration: { css: 1 }, underline: { css: 1 }, bd2c00: { css: 1 }, uploading: { css: 1 }, bad: { css: 1 }, failed: { css: 1, "objective-c": 1 }, request: { css: 1, html: 1, javascript: 1, python: 1 }, upload: { css: 1, python: 1 }, enabled: { css: 1 }, focused: { css: 1 }, dragover: { css: 1 }, c9ff00: { css: 1 }, composer: { css: 1 }, contributing: { css: 1 }, ffc: { css: 1 }, discussion: { css: 1 }, bubble: { css: 1 }, infobar: { css: 1 }, "35px": { css: 1 }, milestone: { css: 1 }, context: { css: 1, html: 1 }, pane: { css: 1, html: 1 }, assignee: { css: 1 }, avatar: { css: 1, html: 1 }, container: { css: 1, html: 1 }, bar: { css: 1, html: 1, python: 1 }, "220px": { css: 1 }, tab: { css: 1 }, "8px": { css: 1 }, counter: { css: 1 }, blank: { css: 1, shell: 1 }, search: { css: 1, html: 1, javascript: 1, "objective-c": 1 }, "22px": { css: 1 }, link: { css: 1, html: 1, python: 1 }, "26px": { css: 1 }, fieldwrap: { css: 1 }, auto: { css: 1, javascript: 1, python: 1 }, ring: { css: 1 }, mac: { css: 1, html: 1 }, focusring: { css: 1 }, "24px": { css: 1 }, d3d3d3: { css: 1 }, minibutton: { css: 1, html: 1 }, filter: { css: 1, python: 1, shell: 1 }, item: { css: 1, "objective-c": 1, python: 1 }, space: { css: 1, "objective-c": 1 }, nowrap: { css: 1 }, ellipsis: { css: 1 }, "4183c4": { css: 1 }, remove: { css: 1, html: 1, "objective-c": 1, python: 1 }, pjax: { css: 1, html: 1 }, active: { css: 1, ruby: 1 }, editable: { css: 1 }, icons: { css: 1 }, arrow: { css: 1 }, "35eb0847": { css: 1 }, AAA: { css: 1 }, ba3d37: { css: 1 }, smoothing: { css: 1 }, antialiased: { css: 1 }, zeroed: { css: 1 }, nolabels: { css: 1 }, plans: { css: 1 }, next: { css: 1, ruby: 1 }, "655px": { css: 1 }, plan: { css: 1 }, "121px": { css: 1 }, "29px": { css: 1 }, "158px": { css: 1 }, dedede: { css: 1 }, "5em": { css: 1, html: 1 }, Helvetica: { css: 1 }, Light: { css: 1 }, "2em": { css: 1 }, "1em": { css: 1 }, current: { css: 1, "objective-c": 1, shell: 1 }, "160px": { css: 1 }, "329ed1": { css: 1 }, "226fbb": { css: 1 }, "194a7b": { css: 1 }, transform: { css: 1 }, uppercase: { css: 1 }, payment: { css: 1 }, notification: { css: 1, html: 1 }, routing: { css: 1 }, edit: { css: 1 }, notifications: { css: 1, html: 1 }, ccc: { css: 1 }, settings: { css: 1, html: 1, python: 1 }, fa9e00: { css: 1 }, subscription: { css: 1 }, off: { css: 1, html: 1, python: 1, shell: 1 }, page: { css: 1 }, listings: { css: 1 }, layout: { css: 1 }, columns: { css: 1, html: 1 }, sidebar: { css: 1 }, "19px": { css: 1 }, "660px": { css: 1 }, date_selector: { css: 1 }, c1c1c1: { css: 1 }, no_shadow: { css: 1 }, date_selector_ieframe: { css: 1 }, month_nav: { css: 1 }, year_nav: { css: 1 }, month_name: { css: 1 }, year_name: { css: 1 }, "17px": { css: 1 }, "003C78": { css: 1 }, F2F2F2: { css: 1 }, prev: { css: 1 }, today: { css: 1 }, FFFEB3: { css: 1 }, unselected_month: { css: 1 }, selectable_day: { css: 1 }, D8DFE5: { css: 1 }, popup: { css: 1, html: 1 }, facebox_overlay: { css: 1 }, fixed: { css: 1 }, "0px": { css: 1 }, facebox_hide: { css: 1 }, facebox_overlayBG: { css: 1 }, tipsy: { css: 1 }, inner: { css: 1, "objective-c": 1 }, FFF: { css: 1 }, nw: { css: 1 }, ne: { css: 1 }, sw: { css: 1 }, se: { css: 1 }, graphs: { css: 1 }, area: { css: 1 }, addition: { css: 1, ruby: 1 }, stroke: { css: 1 }, "1db34f": { css: 1 }, deletion: { css: 1 }, ad1017: { css: 1 }, cumulative: { css: 1 }, "047dda": { css: 1 }, dasharray: { css: 1 }, cadd: { css: 1 }, cdel: { css: 1 }, ctot: { css: 1 }, axis: { css: 1 }, g: { css: 1, javascript: 1, python: 1, shell: 1 }, tot: { css: 1 }, axline: { css: 1 }, weekbar: { css: 1 }, even: { css: 1, "objective-c": 1, python: 1 }, odd: { css: 1 }, f1f1f1: { css: 1 }, yearbar: { css: 1 }, f6f6f6: { css: 1 }, yearlbl: { css: 1 }, commit: { css: 1, html: 1, shell: 1 }, activity: { css: 1, html: 1 }, f3f3f3: { css: 1 }, head: { css: 1, html: 1, javascript: 1, shell: 1 }, letter: { css: 1 }, rect: { css: 1 }, shape: { css: 1 }, rendering: { css: 1 }, crispedges: { css: 1 }, ffc644: { css: 1 }, f17f49: { css: 1 }, geometricPrecision: { css: 1 }, bd380f: { css: 1 }, circle: { css: 1 }, e1e1e1: { css: 1 }, tip: { css: 1 }, tint: { css: 1 }, tick: { css: 1 }, contrib: { css: 1 }, "450px": { css: 1 }, nth: { css: 1 }, bbb: { css: 1 }, aname: { css: 1 }, ameta: { css: 1 }, rank: { css: 1 }, cmt: { css: 1 }, c00: { css: 1 }, "8cac29": { css: 1 }, spark: { css: 1, shell: 1 }, f7f7f7: { css: 1 }, wklbl: { css: 1 }, midlabel: { css: 1 }, impact_graph: { css: 1 }, impact_legend: { css: 1 }, meta: { css: 1, html: 1, shell: 1 }, "6ec80f": { css: 1 }, bc0101: { css: 1 }, idate: { css: 1 }, graph: { css: 1, shell: 1 }, shots: { css: 1 }, sprites: { css: 1 }, d700165f: { css: 1 }, "124px": { css: 1 }, "448px": { css: 1 }, commits: { css: 1 }, "120px": { css: 1 }, frequency: { css: 1 }, impact: { css: 1, "objective-c": 1 }, "360px": { css: 1 }, punchcard: { css: 1 }, "480px": { css: 1 }, traffic: { css: 1 }, "600px": { css: 1 }, clones: { css: 1 }, "720px": { css: 1 }, wheader: { css: 1 }, axlabel: { css: 1 }, Neue: { css: 1 }, Arial: { css: 1 }, biglabel: { css: 1 }, "09em": { css: 1 }, dot: { css: 1 }, "16873c": { css: 1 }, "4183C4": { css: 1 }, d3: { css: 1 }, feeaea: { css: 1 }, dots: { css: 1 }, dir: { css: 1 }, selection: { css: 1, html: 1 }, info: { css: 1, html: 1, javascript: 1 }, dash: { css: 1 }, ghead: { css: 1 }, h0: { css: 1 }, e0e0e0: { css: 1 }, face: { css: 1 }, Octicons: { css: 1 }, Regular: { css: 1 }, octicons: { css: 1 }, webfont: { css: 1 }, ec0c1fa944612b7db2003d32ce67cceec5c08b2e: { css: 1 }, eot: { css: 1 }, iefix: { css: 1 }, opentype: { css: 1 }, "729fd26aef7d925c631f0605144933462cea3af1": { css: 1 }, woff: { css: 1 }, fbe65346972149a8d8696e647af90bdd8f6d9a75: { css: 1 }, ttf: { css: 1 }, truetype: { css: 1 }, "4cfac6c47d082f5408b0fb7f449e872135f44d08": { css: 1 }, svg: { css: 1 }, newFontRegular: { css: 1 }, transition: { css: 1 }, "15s": { css: 1 }, ease: { css: 1 }, repo: { css: 1, html: 1, shell: 1 }, f06a: { css: 1 }, f001: { css: 1 }, forked: { css: 1 }, f002: { css: 1 }, f003: { css: 1 }, f004: { css: 1 }, push: { css: 1, html: 1, javascript: 1 }, f005: { css: 1 }, pull: { css: 1, "objective-c": 1 }, f006: { css: 1 }, readme: { css: 1 }, wiki: { css: 1 }, f007: { css: 1 }, f008: { css: 1 }, site: { css: 1, html: 1, "objective-c": 1 }, blacktocat: { css: 1, html: 1 }, f009: { css: 1 }, invertocat: { css: 1 }, f00a: { css: 1 }, download: { css: 1, html: 1 }, f00b: { css: 1 }, f00c: { css: 1 }, keyboard: { css: 1, html: 1 }, f00d: { css: 1 }, gist: { css: 1, html: 1 }, f00e: { css: 1 }, f00f: { css: 1 }, unknown: { css: 1, "objective-c": 1 }, f010: { css: 1 }, f011: { css: 1 }, f012: { css: 1 }, zip: { css: 1, html: 1 }, f013: { css: 1 }, pdf: { css: 1 }, f014: { css: 1 }, f015: { css: 1 }, directory: { css: 1 }, f016: { css: 1 }, submodule: { css: 1 }, f017: { css: 1 }, f018: { css: 1 }, f019: { css: 1 }, member: { css: 1 }, added: { css: 1, javascript: 1, "objective-c": 1 }, f01a: { css: 1 }, removed: { css: 1, ruby: 1 }, f01b: { css: 1 }, follow: { css: 1 }, f01c: { css: 1 }, watching: { css: 1 }, f01d: { css: 1 }, unwatch: { css: 1 }, f01e: { css: 1 }, f01f: { css: 1 }, branch: { css: 1, html: 1 }, tree: { css: 1, html: 1 }, f020: { css: 1 }, f021: { css: 1 }, f022: { css: 1 }, f023: { css: 1 }, mirror: { css: 1 }, f024: { css: 1 }, f025: { css: 1 }, issue: { css: 1, html: 1, "objective-c": 1 }, opened: { css: 1 }, f026: { css: 1 }, reopened: { css: 1 }, f027: { css: 1 }, closed: { css: 1 }, f028: { css: 1 }, f029: { css: 1 }, star: { css: 1 }, f02a: { css: 1 }, f02b: { css: 1 }, f02c: { css: 1 }, exclamation: { css: 1, html: 1 }, f02d: { css: 1 }, f02e: { css: 1 }, advanced: { css: 1, html: 1, python: 1 }, f02f: { css: 1 }, f030: { css: 1 }, account: { css: 1, html: 1 }, f031: { css: 1 }, logout: { css: 1, html: 1 }, f032: { css: 1 }, admin: { css: 1 }, tools: { css: 1 }, f033: { css: 1 }, feed: { css: 1 }, f034: { css: 1 }, apple: { css: 1, html: 1 }, f036: { css: 1 }, windows: { css: 1, html: 1 }, f037: { css: 1 }, primer: { css: 1 }, buttons: { css: 1 }, sprite: { css: 1 }, "6047c14510e8ba6d96be0ed68ff38b5caa4dddd2": { css: 1 }, ios: { css: 1 }, f038: { css: 1 }, android: { css: 1 }, f039: { css: 1 }, f03a: { css: 1 }, unread: { css: 1, html: 1 }, f03b: { css: 1 }, f03c: { css: 1 }, arr: { css: 1 }, f03d: { css: 1 }, f03e: { css: 1 }, f03f: { css: 1 }, f040: { css: 1 }, pin: { css: 1 }, f041: { css: 1 }, gift: { css: 1 }, f042: { css: 1 }, f043: { css: 1 }, wrench: { css: 1 }, f044: { css: 1 }, credit: { css: 1 }, f045: { css: 1 }, f046: { css: 1 }, f047: { css: 1 }, podcast: { css: 1 }, f048: { css: 1 }, f049: { css: 1 }, force: { css: 1 }, f04a: { css: 1 }, sync: { css: 1 }, f04b: { css: 1 }, clone: { css: 1, html: 1 }, f04c: { css: 1 }, diff: { css: 1 }, f04d: { css: 1 }, watchers: { css: 1 }, f04e: { css: 1 }, f04f: { css: 1 }, f050: { css: 1 }, reply: { css: 1 }, f051: { css: 1 }, mail: { css: 1, html: 1 }, f052: { css: 1 }, f053: { css: 1 }, f054: { css: 1 }, f055: { css: 1 }, f056: { css: 1 }, f057: { css: 1 }, f058: { css: 1 }, f059: { css: 1 }, collapsed: { css: 1 }, f05a: { css: 1 }, expanded: { css: 1 }, f05b: { css: 1 }, f05c: { css: 1 }, f05d: { css: 1 }, reorder: { css: 1 }, f05e: { css: 1 }, f05f: { css: 1 }, location: { css: 1, javascript: 1, "objective-c": 1, python: 1 }, f060: { css: 1 }, f061: { css: 1 }, f062: { css: 1 }, quotemark: { css: 1 }, f063: { css: 1 }, f064: { css: 1 }, brightness: { css: 1 }, f065: { css: 1 }, f066: { css: 1 }, normalscreen: { css: 1 }, f067: { css: 1 }, calendar: { css: 1 }, f068: { css: 1 }, beer: { css: 1 }, f069: { css: 1 }, secure: { css: 1, html: 1 }, lock: { css: 1 }, f06b: { css: 1 }, f06c: { css: 1 }, f06d: { css: 1 }, moved: { css: 1, "objective-c": 1, python: 1 }, renamed: { css: 1 }, f06e: { css: 1 }, f06f: { css: 1 }, horizontal: { css: 1 }, f070: { css: 1 }, f071: { css: 1 }, jump: { css: 1, "objective-c": 1 }, f072: { css: 1 }, f073: { css: 1 }, reference: { css: 1, javascript: 1, shell: 1 }, f074: { css: 1 }, f075: { css: 1 }, save: { css: 1 }, document: { css: 1, html: 1 }, f076: { css: 1 }, megaphone: { css: 1 }, f077: { css: 1 }, chevron: { css: 1 }, f078: { css: 1 }, f079: { css: 1 }, f07a: { css: 1 }, bookmark: { css: 1 }, f07b: { css: 1 }, filters: { css: 1 }, f07c: { css: 1 }, f07d: { css: 1 }, history: { css: 1, python: 1, shell: 1 }, f07e: { css: 1 }, external: { css: 1, "objective-c": 1 }, f07f: { css: 1 }, mute: { css: 1 }, f080: { css: 1 }, f081: { css: 1 }, f082: { css: 1 }, f083: { css: 1 }, slash: { css: 1 }, f084: { css: 1 }, pulse: { css: 1 }, f085: { css: 1 }, f086: { css: 1 }, refresh: { css: 1 }, f087: { css: 1 }, telescope: { css: 1 }, f088: { css: 1 }, microscope: { css: 1 }, f089: { css: 1 }, f26a: { css: 1 }, f201: { css: 1 }, f202: { css: 1 }, f203: { css: 1 }, f204: { css: 1 }, f205: { css: 1 }, f206: { css: 1 }, f207: { css: 1 }, f208: { css: 1 }, f209: { css: 1 }, f20a: { css: 1 }, f20b: { css: 1 }, f20c: { css: 1 }, f20d: { css: 1 }, f20e: { css: 1 }, f20f: { css: 1 }, f210: { css: 1 }, f211: { css: 1 }, f212: { css: 1 }, f213: { css: 1 }, f214: { css: 1 }, f215: { css: 1 }, f216: { css: 1 }, f217: { css: 1 }, f218: { css: 1 }, f219: { css: 1 }, f21a: { css: 1 }, f21b: { css: 1 }, f21c: { css: 1 }, f21d: { css: 1 }, f21e: { css: 1 }, f21f: { css: 1 }, f220: { css: 1 }, f221: { css: 1 }, f222: { css: 1 }, f223: { css: 1 }, f224: { css: 1 }, f225: { css: 1 }, f226: { css: 1 }, f227: { css: 1 }, f228: { css: 1 }, f229: { css: 1 }, f22a: { css: 1 }, f22b: { css: 1 }, f22c: { css: 1 }, f22d: { css: 1 }, f22e: { css: 1 }, f22f: { css: 1 }, f230: { css: 1 }, f231: { css: 1 }, f232: { css: 1 }, f233: { css: 1 }, f234: { css: 1 }, f236: { css: 1 }, f237: { css: 1 }, f238: { css: 1 }, f239: { css: 1 }, f23a: { css: 1 }, f23b: { css: 1 }, f23c: { css: 1 }, f23d: { css: 1 }, f23e: { css: 1 }, f23f: { css: 1 }, f240: { css: 1 }, f241: { css: 1 }, f242: { css: 1 }, f243: { css: 1 }, f244: { css: 1 }, f245: { css: 1 }, f246: { css: 1 }, f247: { css: 1 }, f248: { css: 1 }, f249: { css: 1 }, f24a: { css: 1 }, f24b: { css: 1 }, f24c: { css: 1 }, f24d: { css: 1 }, f24e: { css: 1 }, f24f: { css: 1 }, f250: { css: 1 }, f251: { css: 1 }, f252: { css: 1 }, f253: { css: 1 }, f254: { css: 1 }, f255: { css: 1 }, f256: { css: 1 }, f257: { css: 1 }, f258: { css: 1 }, f259: { css: 1 }, f25a: { css: 1 }, f25b: { css: 1 }, f25c: { css: 1 }, f25d: { css: 1 }, f25e: { css: 1 }, f25f: { css: 1 }, f260: { css: 1 }, f261: { css: 1 }, f262: { css: 1 }, f263: { css: 1 }, f264: { css: 1 }, f265: { css: 1 }, f266: { css: 1 }, f267: { css: 1 }, f268: { css: 1 }, f269: { css: 1 }, f26b: { css: 1 }, f26c: { css: 1 }, f26d: { css: 1 }, f26e: { css: 1 }, f26f: { css: 1 }, f270: { css: 1 }, f271: { css: 1 }, f272: { css: 1 }, f273: { css: 1 }, f274: { css: 1 }, f275: { css: 1 }, f276: { css: 1 }, f277: { css: 1 }, f278: { css: 1 }, f279: { css: 1 }, f27a: { css: 1 }, f27b: { css: 1 }, f27c: { css: 1 }, f27d: { css: 1 }, f27e: { css: 1 }, f27f: { css: 1 }, f280: { css: 1 }, f281: { css: 1 }, f282: { css: 1 }, f283: { css: 1 }, f284: { css: 1 }, f285: { css: 1 }, f286: { css: 1 }, f287: { css: 1 }, f288: { css: 1 }, f289: { css: 1 }, clippy: { css: 1 }, "93d74a8448d4843acdf2b85a5acbea20e61df5d2": { css: 1 }, markdown: { css: 1, html: 1 }, important: { css: 1 }, absent: { css: 1 }, anchor: { css: 1 }, "28px": { css: 1 }, dirty: { css: 1 }, shade: { css: 1 }, "0e7d81b119cc9beae17b0c98093d121fa0050a74": { css: 1 }, "2n": { css: 1 }, eaeaea: { css: 1 }, ffffff: { css: 1, html: 1 }, err: { css: 1, javascript: 1 }, a61717: { css: 1 }, e3d2d2: { css: 1 }, k: { css: 1, html: 1, python: 1 }, cm: { css: 1 }, cp: { css: 1, shell: 1 }, c1: { css: 1 }, cs: { css: 1 }, gd: { css: 1 }, "000000": { css: 1 }, ffdddd: { css: 1 }, ffaaaa: { css: 1 }, ge: { css: 1 }, gr: { css: 1 }, aa0000: { css: 1 }, gh: { css: 1 }, gi: { css: 1 }, ddffdd: { css: 1 }, aaffaa: { css: 1 }, go: { css: 1, "objective-c": 1 }, gp: { css: 1 }, gs: { css: 1 }, gu: { css: 1 }, gt: { css: 1, html: 1 }, kc: { css: 1 }, kd: { css: 1 }, kn: { css: 1 }, kp: { css: 1 }, kr: { css: 1 }, kt: { css: 1 }, "009999": { css: 1 }, d14: { css: 1 }, na: { css: 1 }, "008080": { css: 1 }, nb: { css: 1 }, "0086B3": { css: 1 }, nc: { css: 1 }, ni: { css: 1 }, nf: { css: 1 }, nn: { css: 1, "objective-c": 1 }, nt: { css: 1 }, "000080": { css: 1 }, nv: { css: 1 }, ow: { css: 1 }, bbbbbb: { css: 1 }, mf: { css: 1 }, mh: { css: 1 }, mi: { css: 1 }, mo: { css: 1 }, sb: { css: 1 }, sc: { css: 1 }, sd: { css: 1 }, s2: { css: 1 }, si: { css: 1 }, sx: { css: 1 }, sr: { css: 1 }, "009926": { css: 1 }, s1: { css: 1 }, bp: { css: 1 }, vc: { css: 1 }, vg: { css: 1 }, vi: { css: 1, shell: 1 }, il: { css: 1 }, gc: { css: 1 }, EAF2F5: { css: 1 }, csharp: { css: 1 }, "0000FF": { css: 1 }, "2B91AF": { css: 1 }, A31515: { css: 1 }, arial: { css: 1 }, freesans: { css: 1 }, clean: { css: 1 }, whitesmoke: { css: 1 }, f5f5f5: { css: 1 }, touch: { css: 1, html: 1 }, user: { css: 1, html: 1, javascript: 1, "objective-c": 1 }, khtml: { css: 1 }, primary: { css: 1, python: 1 }, "74bb5a": { css: 1 }, "8add6d": { css: 1 }, "60b044": { css: 1 }, "69d344": { css: 1 }, "4c8b36": { css: 1 }, "4a993e": { css: 1 }, mousedown: { css: 1 }, danger: { css: 1 }, cd504a: { css: 1 }, dc5f59: { css: 1 }, b33630: { css: 1 }, f0f7fa: { css: 1 }, d8eaf2: { css: 1 }, cbe3ee: { css: 1 }, "97c7dd": { css: 1 }, "2a65a0": { css: 1 }, "0770a0": { css: 1 }, "0ca6dd": { css: 1 }, grouped: { css: 1 }, d4d4d4: { css: 1 }, bcbcbc: { css: 1 }, a0302a: { css: 1 }, c65651: { css: 1 }, "36b825": { css: 1 }, "28881b": { css: 1 }, "448da6": { css: 1 }, "32687b": { css: 1 }, dark: { css: 1 }, "8c8c8c": { css: 1 }, "6d6d6d": { css: 1 }, "518cc6": { css: 1 }, "3072b3": { css: 1 }, "599bdc": { css: 1 }, switcher: { css: 1 }, "9e9e9e": { css: 1 }, F9F9F9: { css: 1 }, "6A9FD3": { css: 1 }, "3c74ab": { css: 1 }, a4a4a4: { css: 1 }, expander: { css: 1 }, social: { css: 1 }, D4D4D4: { css: 1 }, efefef: { css: 1 }, fafafb: { css: 1 }, d8d8d8: { css: 1 }, fdfdfe: { css: 1 }, d26911: { css: 1 }, D26911: { css: 1 }, accordion: { css: 1 }, css: { css: 1, html: 1 }, truncate: { css: 1 }, "125px": { css: 1 }, expandable: { css: 1 }, "10000px": { css: 1 }, sticky: { css: 1, html: 1 }, stick: { css: 1 }, about: { css: 1, html: 1, shell: 1 }, "4d4d4d": { css: 1 }, intro: { css: 1 }, col: { css: 1, html: 1 }, links: { css: 1, html: 1, python: 1 }, spacefield: { css: 1 }, "170px": { css: 1 }, about_header: { css: 1 }, "36px": { css: 1 }, "580px": { css: 1 }, "549ef9": { css: 1 }, "138fd9": { css: 1 }, width_wrapper: { css: 1 }, "300px": { css: 1 }, "1100px": { css: 1 }, skinny: { css: 1 }, "70px": { css: 1 }, visible: { css: 1 }, "32578D": { css: 1 }, parallax_octocat: { css: 1 }, "800px": { css: 1 }, parallax_earth: { css: 1 }, "700px": { css: 1 }, "650px": { css: 1 }, employee_container: { css: 1 }, "5n": { css: 1 }, "140px": { css: 1 }, press_releases: { css: 1 }, in_the_news: { css: 1 }, byline: { css: 1 }, more_news: { css: 1 }, media_contacts: { css: 1 }, media_downloads: { css: 1 }, CCC: { css: 1 }, "175px": { css: 1 }, "174px": { css: 1 }, acceptable_use: { css: 1 }, facts: { css: 1 }, "150px": { css: 1 }, jobs: { css: 1, html: 1 }, grid: { css: 1 }, collage: { css: 1 }, benefits: { css: 1 }, "295px": { css: 1 }, "40px": { css: 1 }, octospinner: { css: 1 }, press: { css: 1 }, "210px": { css: 1 }, mentions: { css: 1 }, plax: { css: 1 }, "669px": { css: 1 }, parallax_text: { css: 1 }, "608px": { css: 1 }, parallax_bg: { css: 1 }, accountcols: { css: 1 }, "560px": { css: 1 }, "330px": { css: 1 }, overview: { css: 1 }, explain: { css: 1 }, planusage: { css: 1 }, upgrades: { css: 1 }, org_plans: { css: 1 }, upsell: { css: 1 }, d2f4f4: { css: 1 }, fdffce: { css: 1 }, num: { css: 1, shell: 1 }, action: { css: 1, html: 1 }, "6cc644": { css: 1 }, timeleft: { css: 1 }, expiring: { css: 1 }, df6e00: { css: 1 }, couponstatus: { css: 1 }, timeicon: { css: 1 }, autocomplete: { css: 1 }, results: { css: 1, "objective-c": 1 }, "20em": { css: 1 }, "68px": { css: 1 }, navigation: { css: 1 }, due_on: { css: 1 }, past_due: { css: 1 }, state: { css: 1, javascript: 1, "objective-c": 1 }, suggester: { css: 1 }, "46px": { css: 1 }, "65px": { css: 1 }, "180px": { css: 1 }, "920px": { css: 1 }, wider: { css: 1 }, option: { css: 1, html: 1, "objective-c": 1, ruby: 1 }, "25em": { css: 1 }, optgroup: { css: 1, html: 1 }, Consolas: { css: 1 }, clearfix: { css: 1, html: 1 }, d00: { css: 1 }, cc0000: { css: 1 }, sparkline: { css: 1, shell: 1 }, fffccc: { css: 1 }, "8em": { css: 1 }, error_box: { css: 1 }, FFEBE8: { css: 1 }, DD3C10: { css: 1 }, corner: { css: 1 }, "425px": { css: 1 }, f4f9fb: { css: 1 }, bigwarning: { css: 1 }, "577407bf": { css: 1 }, fffbc9: { css: 1 }, ede7a3: { css: 1 }, "45px": { css: 1 }, full: { css: 1, python: 1 }, f8f8ff: { css: 1 }, d4d4e3: { css: 1 }, bigmessage: { css: 1 }, blob: { css: 1 }, editor: { css: 1, shell: 1 }, field: { css: 1, javascript: 1, python: 1 }, fieldgroup_back: { css: 1 }, "7f415d42": { css: 1 }, equacols: { css: 1, html: 1 }, htabs: { css: 1 }, typical: { css: 1 }, hooks: { css: 1, python: 1 }, "049f1819": { css: 1 }, addlink: { css: 1 }, succeed: { css: 1, shell: 1 }, "33cc00": { css: 1 }, legal: { css: 1, html: 1 }, fieldpills: { css: 1 }, dingus: { css: 1 }, avatarexplain: { css: 1 }, "54px": { css: 1 }, pill: { css: 1 }, "350px": { css: 1 }, "332px": { css: 1 }, key_value: { css: 1 }, smalltabs: { css: 1 }, e8e8e8: { css: 1 }, d2d2d2: { css: 1 }, d1d1d1: { css: 1 }, ababab: { css: 1 }, f2f2f2: { css: 1 }, ececec: { css: 1 }, afafaf: { css: 1 }, green_highlight: { css: 1 }, ccffcc: { css: 1 }, red_highlight: { css: 1 }, ffcccc: { css: 1 }, breadcrumb: { css: 1 }, pagehead: { css: 1, html: 1 }, breadcrumb_separator: { css: 1 }, df53ddba: { css: 1 }, metabox: { css: 1 }, side_rule: { css: 1 }, e8535f35: { css: 1 }, "230px": { css: 1 }, toprule: { css: 1 }, "670px": { css: 1 }, "440px": { css: 1 }, dashcols: { css: 1 }, "337px": { css: 1 }, column: { css: 1, html: 1, shell: 1 }, secondary: { css: 1 }, bordered: { css: 1 }, column_separator: { css: 1 }, f2add615: { css: 1 }, browser: { css: 1 }, marketing: { css: 1 }, d72ea58c: { css: 1 }, fourcols: { css: 1 }, "215px": { css: 1 }, leftmost: { css: 1 }, "690px": { css: 1 }, "248px": { css: 1 }, feature: { css: 1, ruby: 1 }, "460px": { css: 1 }, threecols: { css: 1, html: 1 }, shortcuts: { css: 1, html: 1 }, mappings: { css: 1, html: 1 }, EEE: { css: 1 }, platform: { css: 1, html: 1 }, macintosh: { css: 1, html: 1 }, copyable: { css: 1 }, steps: { css: 1 }, fbfbfb: { css: 1 }, fakerule: { css: 1 }, ac: { css: 1 }, accept: { css: 1, html: 1 }, ac_loading: { css: 1 }, large: { css: 1, "objective-c": 1, python: 1 }, centered: { css: 1 }, "190px": { css: 1 }, mention: { css: 1 }, filename: { css: 1, python: 1 }, abort: { css: 1, javascript: 1, ruby: 1 }, C5D5DD: { css: 1 }, E6F1F6: { css: 1 }, "340px": { css: 1 }, cleanheading: { css: 1 }, subtext: { css: 1 }, branches: { css: 1 }, base: { css: 1, python: 1 }, diverge: { css: 1 }, ahead: { css: 1 }, behind: { css: 1 }, d0d0d0: { css: 1 }, "7a7a7a": { css: 1 }, hot: { css: 1 }, ff704f: { css: 1 }, fresh: { css: 1 }, ffd266: { css: 1 }, b69e67: { css: 1 }, stale: { css: 1 }, b2d0dd: { css: 1 }, "1e4152": { css: 1 }, hotness: { css: 1 }, old: { css: 1 }, recently: { css: 1 }, touched: { css: 1 }, description: { css: 1, html: 1, ruby: 1 }, a19e7f: { css: 1 }, cancel: { css: 1 }, E7E4C2: { css: 1 }, ffffe2: { css: 1 }, silver: { css: 1 }, fdfdfd: { css: 1 }, "9a9a9a": { css: 1 }, c7c7c7: { css: 1 }, business: { css: 1 }, "419b36": { css: 1 }, "357f2c": { css: 1 }, "3e9533": { css: 1 }, "1cbe0a": { css: 1 }, "158f07": { css: 1 }, "18a609": { css: 1 }, personal: { css: 1 }, "4794bc": { css: 1 }, "3a7999": { css: 1 }, "438bb1": { css: 1 }, oauth: { css: 1 }, login_form: { css: 1 }, submit_btn: { css: 1 }, watch: { css: 1 }, starring: { css: 1 }, unstarred: { css: 1 }, starred: { css: 1 }, unfollow: { css: 1 }, members: { css: 1 }, cheatsheet: { css: 1, html: 1 }, "260px": { css: 1 }, mod: { css: 1, html: 1 }, chromed: { css: 1 }, loader: { css: 1, html: 1 }, "31px": { css: 1 }, ecf0f1: { css: 1 }, deactivated: { css: 1 }, activated: { css: 1, html: 1 }, "9ca9a9": { css: 1 }, pagination: { css: 1 }, gap: { css: 1 }, paging: { css: 1 }, pager: { css: 1 }, e4e9ef: { css: 1 }, eff3f6: { css: 1 }, d9e1e8: { css: 1 }, fafbfd: { css: 1 }, dee8f1: { css: 1 }, ffffef: { css: 1 }, closed_back: { css: 1 }, "4ad064c0": { css: 1 }, filterbar: { css: 1 }, cacaca: { css: 1 }, b4b4b4: { css: 1 }, sort: { css: 1, ruby: 1 }, B4B4B4: { css: 1 }, sorts: { css: 1 }, asc: { css: 1 }, desc: { css: 1, javascript: 1 }, updated: { css: 1 }, language: { css: 1, html: 1, "objective-c": 1 }, line_numbers: { css: 1 }, F8EEC7: { css: 1 }, F7CA75: { css: 1 }, A1882B: { css: 1 }, divider: { css: 1 }, E9DBA4: { css: 1 }, codesearch: { css: 1 }, "33px": { css: 1 }, commandbar: { css: 1, html: 1 }, code_search: { css: 1, html: 1 }, "598px": { css: 1 }, adv_code_search: { css: 1 }, completed: { css: 1 }, query: { css: 1, javascript: 1, python: 1 }, F1F1F1: { css: 1 }, cols: { css: 1 }, repolist: { css: 1 }, visited: { css: 1 }, "7C65C2": { css: 1 }, foot: { css: 1 }, ace: { css: 1 }, ace_content: { css: 1 }, twilight: { css: 1 }, ace_editor: { css: 1 }, "9f9f9f": { css: 1 }, ace_focus: { css: 1 }, "327fbd": { css: 1 }, ace_gutter: { css: 1 }, ECECEC: { css: 1 }, layer: { css: 1 }, cell: { css: 1 }, ace_print_margin: { css: 1 }, ace_scroller: { css: 1 }, ace_text: { css: 1 }, F8F8F8: { css: 1 }, ace_cursor: { css: 1 }, ace_overwrite: { css: 1 }, A7A7A7: { css: 1 }, ace_marker: { css: 1 }, ace_selection: { css: 1 }, ace_step: { css: 1 }, c6dbae: { css: 1 }, ace_bracket: { css: 1 }, ace_active_line: { css: 1 }, ace_invisible: { css: 1 }, ace_keyword: { css: 1 }, CDA869: { css: 1 }, ace_constant: { css: 1 }, CF6A4C: { css: 1 }, ace_invalid: { css: 1 }, ace_illegal: { css: 1 }, ace_deprecated: { css: 1 }, D2A8A1: { css: 1 }, ace_support: { css: 1 }, "9B859D": { css: 1 }, ace_function: { css: 1 }, DAD085: { css: 1 }, ace_string: { css: 1 }, "8F9D6A": { css: 1 }, ace_regexp: { css: 1 }, E9C062: { css: 1 }, ace_comment: { css: 1 }, "5F5A60": { css: 1 }, ace_variable: { css: 1 }, "7587A6": { css: 1 }, ace_xml_pe: { css: 1 }, solarized: { css: 1 }, "002B36": { css: 1 }, "93A1A1": { css: 1 }, D30102: { css: 1 }, "073642": { css: 1 }, ace_language: { css: 1 }, B58900: { css: 1 }, ace_numeric: { css: 1 }, D33682: { css: 1 }, "268BD2": { css: 1 }, "2AA198": { css: 1 }, "657B83": { css: 1 }, light: { css: 1, shell: 1 }, FDF6E3: { css: 1 }, "586E75": { css: 1 }, EEE8D5: { css: 1 }, instruction: { css: 1, "objective-c": 1 }, groups: { css: 1, shell: 1 }, instructions: { css: 1, "objective-c": 1 }, "445px": { css: 1 }, code_search_results: { css: 1, html: 1 }, b8d1e3: { css: 1 }, DDEAF3: { css: 1 }, "3em": { css: 1, html: 1 }, "7em": { css: 1 }, results_and_sidebar: { css: 1 }, "52em": { css: 1 }, result: { css: 1, html: 1, "objective-c": 1, python: 1 }, gravatar: { css: 1, html: 1 }, "75em": { css: 1 }, aka: { css: 1, html: 1 }, snippet: { css: 1, html: 1 }, DejaVu: { css: 1 }, Sans: { css: 1 }, Bitstream: { css: 1 }, Vera: { css: 1 }, FAFFA6: { css: 1 }, "15em": { css: 1 }, "35s": { css: 1 }, boxed: { css: 1 }, "60px": { css: 1 }, editing: { css: 1 }, hide: { css: 1 }, author: { css: 1, shell: 1 }, "2d90c3": { css: 1 }, date: { css: 1 }, "939AA0": { css: 1 }, owner: { css: 1 }, f4faf6: { css: 1 }, d8e5dd: { css: 1 }, "2cc03e": { css: 1 }, collab: { css: 1 }, f8fbfc: { css: 1 }, dde8eb: { css: 1 }, review: { css: 1 }, holder: { css: 1 }, "704px": { css: 1 }, "724px": { css: 1 }, topic: { css: 1 }, f9f8a5: { css: 1 }, e7e693: { css: 1 }, pending: { css: 1, python: 1 }, bcbc00: { css: 1 }, "9ee692": { css: 1 }, "6eda62": { css: 1 }, "30a900": { css: 1 }, failure: { css: 1 }, discusion: { css: 1 }, "47px": { css: 1 }, FFEAEA: { css: 1 }, E2A0A0: { css: 1 }, wrap: { css: 1 }, quoted: { css: 1 }, signature: { css: 1 }, toggle: { css: 1 }, c0ccd0: { css: 1 }, "830px": { css: 1 }, ajaxindicator: { css: 1 }, deprecated: { css: 1 }, sha: { css: 1 }, quiet: { css: 1 }, notes: { css: 1 }, gitnotes: { css: 1 }, ffd: { css: 1 }, eea: { css: 1 }, fafbd2: { css: 1 }, e8eac0: { css: 1 }, f5f7ce: { css: 1 }, "4e575b": { css: 1 }, "9cabb1": { css: 1 }, tease: { css: 1 }, e6f1f6: { css: 1 }, b7c7cf: { css: 1 }, d8e6ec: { css: 1 }, "7f9199": { css: 1 }, authorship: { css: 1 }, committer: { css: 1 }, heading: { css: 1 }, "3a505b": { css: 1 }, c5d5dd: { css: 1 }, f7fbfc: { css: 1 }, "52px": { css: 1 }, e2eaee: { css: 1 }, fcfce2: { css: 1 }, "44px": { css: 1 }, gobutton: { css: 1 }, eff6f9: { css: 1 }, ddecf3: { css: 1 }, cedee5: { css: 1 }, "5a5b4e": { css: 1 }, d5dcdf: { css: 1 }, f2f5f6: { css: 1 }, e3eaed: { css: 1 }, e7e86d: { css: 1 }, f9fac9: { css: 1 }, f3f494: { css: 1 }, fbfdfe: { css: 1 }, eaf4f8: { css: 1 }, CFDEE5: { css: 1 }, "91a6b1": { css: 1 }, E7E86D: { css: 1 }, c3c45c: { css: 1 }, cfdee5: { css: 1 }, e1e29e: { css: 1 }, f6fafc: { css: 1 }, "91A6B1": { css: 1 }, C3C45C: { css: 1 }, browse: { css: 1 }, "95px": { css: 1 }, condensed: { css: 1 }, E2EAEE: { css: 1 }, F7FBFC: { css: 1 }, E5E5E5: { css: 1 }, "213f4d": { css: 1 }, dotted: { css: 1 }, "34px": { css: 1 }, "7b878c": { css: 1 }, e7ecee: { css: 1 }, d2d9dd: { css: 1 }, participation: { css: 1 }, quickstat: { css: 1 }, compare: { css: 1, "objective-c": 1 }, "74a4d4": { css: 1 }, "2a5177": { css: 1 }, range: { css: 1, javascript: 1, "objective-c": 1 }, switch_icon: { css: 1 }, "14fc9c7d": { css: 1 }, cutoff: { css: 1 }, "37px": { css: 1 }, compare_too_big: { css: 1 }, "5b6375": { css: 1 }, cedadf: { css: 1 }, eaf2f5: { css: 1 }, bedce7: { css: 1 }, word: { css: 1, ruby: 1 }, id: { css: 1, html: 1, "objective-c": 1 }, toc: { css: 1 }, BD2C00: { css: 1 }, "677a85": { css: 1 }, D0B44C: { css: 1 }, "6CC644": { css: 1 }, show: { css: 1, shell: 1 }, stats: { css: 1 }, diffstat: { css: 1 }, deleted: { css: 1 }, minus: { css: 1 }, plus: { css: 1 }, edu_contact_hidden: { css: 1 }, edu: { css: 1 }, contact: { css: 1, html: 1 }, "370px": { css: 1 }, "412px": { css: 1 }, heartocat: { css: 1 }, overlay: { css: 1, html: 1 }, f6f8f8: { css: 1 }, e9eeee: { css: 1 }, f0f3f3: { css: 1 }, "26367bd8": { css: 1 }, selector: { css: 1, "objective-c": 1 }, commitish: { css: 1 }, "4f83c4": { css: 1 }, filterable: { css: 1 }, alt: { css: 1, html: 1 }, custom: { css: 1, shell: 1 }, contributions: { css: 1 }, capped: { css: 1 }, popular: { css: 1 }, repos: { css: 1 }, stars: { css: 1, html: 1 }, rdesc: { css: 1 }, "286px": { css: 1 }, period: { css: 1, "objective-c": 1 }, lang: { css: 1 }, repository: { css: 1, html: 1, shell: 1 }, "107px": { css: 1 }, "64px": { css: 1 }, lbl: { css: 1 }, contribution: { css: 1 }, blankslate: { css: 1 }, backing: { css: 1 }, cmeta: { css: 1 }, "3f3f3f": { css: 1 }, device: { css: 1 }, "040404": { css: 1 }, manage: { css: 1 }, orgs: { css: 1 }, protip: { css: 1 }, bootcamp: { css: 1 }, "829aa8": { css: 1 }, "405a6a": { css: 1 }, "677c89": { css: 1 }, "6b808d": { css: 1 }, e9f1f4: { css: 1 }, d8dee2: { css: 1 }, bootcampo: { css: 1 }, fffff5: { css: 1 }, f5f3b4: { css: 1 }, dfddb5: { css: 1 }, fcfce9: { css: 1 }, f1eea3: { css: 1 }, d6d4ad: { css: 1 }, "133px": { css: 1 }, f1efaf: { css: 1 }, setup: { css: 1 }, octocat_setup: { css: 1 }, "01fc92e0": { css: 1 }, octocat_create: { css: 1 }, dfce7258: { css: 1 }, octocat_fork: { css: 1 }, b55b0082: { css: 1 }, octocat_social: { css: 1 }, "69c58ee1": { css: 1 }, step: { css: 1 }, largenumb_sprites: { css: 1 }, "6e5db82f": { css: 1 }, three: { css: 1, "objective-c": 1 }, "128px": { css: 1 }, four: { css: 1 }, "192px": { css: 1 }, e1e1e2: { css: 1 }, "52595d": { css: 1 }, "99a4aa": { css: 1 }, filter_input: { css: 1 }, "313px": { css: 1 }, repo_filterer: { css: 1 }, all_repos: { css: 1 }, filter_selected: { css: 1 }, C8C8C8: { css: 1 }, repo_list: { css: 1 }, d0d0d1: { css: 1 }, fffeea: { css: 1 }, b7b7b7: { css: 1 }, "9f9fa0": { css: 1 }, "225px": { css: 1 }, octofication: { css: 1 }, "8211dc5c": { css: 1 }, dcf7dd: { css: 1 }, bbd2bc: { css: 1 }, d1ead2: { css: 1 }, a60000: { css: 1 }, promotion: { css: 1 }, "1b3650": { css: 1 }, cee0e7: { css: 1 }, f5fbff: { css: 1 }, e4f0ff: { css: 1 }, logo: { css: 1, html: 1 }, "62px": { css: 1 }, "33558e80": { css: 1 }, job: { css: 1 }, a9b8be: { css: 1 }, "335px": { css: 1 }, news: { css: 1 }, profile: { css: 1, html: 1, shell: 1 }, feed_filter: { css: 1 }, AAAAAA: { css: 1 }, alert: { css: 1 }, B0C4CE: { css: 1 }, "6em": { css: 1 }, e8f1f6: { css: 1 }, git_hub: { css: 1 }, through: { css: 1, "objective-c": 1 }, emoji: { css: 1 }, "390px": { css: 1 }, followers: { css: 1, html: 1 }, "35em": { css: 1 }, public_news: { css: 1 }, docs: { css: 1 }, "680px": { css: 1 }, chapters: { css: 1 }, expand: { css: 1 }, rotate: { css: 1 }, "90deg": { css: 1 }, progid: { css: 1 }, DXImageTransform: { css: 1 }, Microsoft: { css: 1, javascript: 1 }, Matrix: { css: 1 }, M11: { css: 1 }, "123031769111886e": { css: 1 }, M12: { css: 1 }, M21: { css: 1 }, M22: { css: 1 }, sizingMethod: { css: 1 }, zoom: { css: 1 }, zen: { css: 1 }, topsearch: { css: 1, html: 1 }, upper_footer: { css: 1, html: 1 }, userbox: { css: 1, html: 1 }, downloads: { css: 1, html: 1 }, qrcode: { css: 1 }, uploader: { css: 1 }, uploads: { css: 1, python: 1 }, "918px": { css: 1 }, choose: { css: 1, shell: 1 }, fallback: { css: 1, python: 1 }, succeeded: { css: 1 }, "007a09": { css: 1 }, swfupload: { css: 1 }, "01": { css: 1 }, ready: { css: 1 }, diagonal_lines: { css: 1 }, "166867f9": { css: 1 }, "21px": { css: 1 }, filechosen: { css: 1 }, numbers: { css: 1, "objective-c": 1, shell: 1 }, managing: { css: 1 }, explorecols: { css: 1 }, explore: { css: 1, html: 1 }, trending: { css: 1 }, repositories: { css: 1, html: 1 }, times: { css: 1 }, ranked: { css: 1 }, "410px": { css: 1 }, player: { css: 1 }, podcasts: { css: 1 }, "362px": { css: 1 }, E0E0E0: { css: 1 }, "164px": { css: 1 }, "66e4f85d": { css: 1 }, "5000px": { css: 1 }, footer_nav: { css: 1, html: 1 }, thin: { css: 1 }, lower_footer: { css: 1, html: 1 }, enterprise: { css: 1, html: 1 }, "179px": { css: 1 }, cfe015e8: { css: 1 }, sponsor: { css: 1 }, forgot_password_form: { css: 1 }, formbody: { css: 1 }, nothing: { css: 1, "objective-c": 1 }, E9F1F4: { css: 1 }, "2f424e": { css: 1 }, a00: { css: 1 }, inside: { css: 1 }, standard: { css: 1, "objective-c": 1 }, submit: { css: 1, html: 1 }, ebebeb: { css: 1 }, subpixel: { css: 1 }, f2e1e1: { css: 1 }, staff: { css: 1 }, unicorn: { css: 1 }, "105px": { css: 1 }, "4x": { css: 1, html: 1, "objective-c": 1 }, contextually: { css: 1 }, d2e0ef: { css: 1 }, e9f2fc: { css: 1 }, d2e4f9: { css: 1 }, top_search_form: { css: 1, html: 1 }, B5B5B5: { css: 1 }, cdcdcd: { css: 1 }, "155px": { css: 1 }, logged_out: { css: 1 }, "2d9f00": { css: 1 }, stafftools_link: { css: 1 }, setting_warning: { css: 1 }, unread_count: { css: 1 }, "8f4f07": { css: 1 }, D4F6FA: { css: 1 }, "78909B": { css: 1 }, "1D2B3D": { css: 1 }, ffe3bf: { css: 1 }, FD9800: { css: 1 }, "613A00": { css: 1 }, C47500: { css: 1 }, zone: { css: 1, "objective-c": 1 }, CC7575: { css: 1 }, "2a2c2e": { css: 1 }, serverstats: { css: 1 }, "4e7fa0": { css: 1 }, "192e42": { css: 1 }, "192E42": { css: 1 }, "080909": { css: 1 }, "109px": { css: 1 }, "07": { css: 1 }, "146px": { css: 1 }, unsupported: { css: 1, "objective-c": 1 }, feefae: { css: 1 }, fae692: { css: 1 }, b3a569: { css: 1 }, "211e14": { css: 1 }, ie: { css: 1 }, "38px": { css: 1 }, "48px": { css: 1 }, "968a59": { css: 1 }, fef8db: { css: 1 }, f2e4ab: { css: 1 }, fef6d1: { css: 1 }, f1e1a2: { css: 1 }, homehead: { css: 1 }, hero: { css: 1 }, "839ba9": { css: 1 }, textographic: { css: 1 }, "23566d": { css: 1 }, e7eef1: { css: 1 }, home: { css: 1 }, search_icon: { css: 1 }, "86f9473e": { css: 1 }, logos: { css: 1 }, definitions: { css: 1, shell: 1 }, Palatino: { css: 1 }, Georgia: { css: 1 }, Times: { css: 1 }, Roman: { css: 1 }, signup: { css: 1 }, entice: { css: 1 }, bed7e1: { css: 1 }, "50b7d1": { css: 1 }, "286da3": { css: 1 }, "51a0b3": { css: 1 }, "66c7e5": { css: 1 }, "328fc9": { css: 1 }, c8ecff: { css: 1 }, iphone: { css: 1 }, posts: { css: 1 }, "320px": { css: 1 }, issues: { css: 1, html: 1 }, changes: { css: 1, python: 1 }, "309c00": { css: 1 }, manager: { css: 1 }, labelform: { css: 1 }, cooser: { css: 1 }, "2466a7": { css: 1 }, banner: { css: 1 }, closed_pattern: { css: 1 }, "7e6ded3d": { css: 1 }, merged: { css: 1 }, fffa5d: { css: 1 }, issues_next: { css: 1 }, dropdown: { css: 1 }, f9f9f9: { css: 1 }, c6c6c6: { css: 1 }, yours: { css: 1 }, fcff00: { css: 1 }, back: { css: 1, "objective-c": 1, python: 1 }, states: { css: 1, python: 1 }, fffbb8: { css: 1 }, "135px": { css: 1 }, percent: { css: 1, "objective-c": 1, python: 1 }, small_notice: { css: 1 }, pastdue: { css: 1 }, e2e2e2: { css: 1 }, "8dcf16": { css: 1 }, "65bd10": { css: 1 }, milestones: { css: 1 }, repohead: { css: 1 }, "730px": { css: 1 }, js: { css: 1, html: 1 }, templates: { css: 1 }, reponame: { css: 1 }, B9B9B9: { css: 1 }, e9dba8: { css: 1 }, suggestion: { css: 1 }, "34631a": { css: 1 }, upgrade: { css: 1 }, cc: { css: 1 }, changed: { css: 1, "objective-c": 1 }, insertions: { css: 1 }, deletions: { css: 1 }, evented: { css: 1 }, thread: { css: 1, html: 1 }, ff9933: { css: 1 }, massive: { css: 1 }, sentence: { css: 1 }, overall: { css: 1 }, flag: { css: 1 }, e9dba5: { css: 1 }, "66px": { css: 1 }, "640px": { css: 1 }, bars: { css: 1 }, security: { css: 1, html: 1 }, "42px": { css: 1 }, E80C02: { css: 1 }, FF9E00: { css: 1 }, audit: { css: 1 }, application: { css: 1, html: 1, javascript: 1, python: 1 }, c54242: { css: 1 }, "72px": { css: 1 }, bababa: { css: 1 }, tips: { css: 1 }, app: { css: 1 }, almost: { css: 1, html: 1 }, deploy: { css: 1 }, "90D35B": { css: 1 }, C52323: { css: 1 }, "43px": { css: 1 }, modal: { css: 1 }, checkmark: { css: 1 }, DOCTYPE: { html: 1 }, og: { html: 1 }, ogp: { html: 1 }, me: { html: 1, ruby: 1 }, ns: { html: 1 }, fb: { html: 1 }, githubog: { html: 1 }, charset: { html: 1, javascript: 1, python: 1 }, utf: { html: 1, javascript: 1, "objective-c": 1, python: 1 }, equiv: { html: 1 }, UA: { html: 1 }, Compatible: { html: 1 }, IE: { html: 1, javascript: 1 }, edge: { html: 1 }, Search: { html: 1 }, xml: { html: 1, javascript: 1 }, rel: { html: 1, python: 1 }, opensearchdescription: { html: 1 }, href: { html: 1 }, opensearch: { html: 1 }, GitHub: { html: 1 }, fluid: { html: 1 }, fluidicon: { html: 1 }, precomposed: { html: 1 }, sizes: { html: 1 }, "57x57": { html: 1 }, "114x114": { html: 1 }, "72x72": { html: 1 }, "144x144": { html: 1 }, msapplication: { html: 1 }, TileImage: { html: 1 }, tile: { html: 1 }, TileColor: { html: 1 }, favicon: { html: 1 }, ico: { html: 1 }, authenticity_token: { html: 1 }, csrf: { html: 1 }, param: { html: 1, javascript: 1, python: 1, shell: 1 }, "2sqFFESbhj36oU": { html: 1 }, zClm7KsUIFlMcCOpDHQmV5UxK4fE: { html: 1 }, "26581c8456a7088e423db87d6ed68794e9042e29": { html: 1 }, stylesheet: { html: 1 }, github2: { html: 1 }, "38ac9c88be26119b09e2a8dbf21887c7e34791e1": { html: 1 }, script: { html: 1, shell: 1 }, frameworks: { html: 1 }, "57542e0cba19d068168099f287c117efa142863c": { html: 1 }, javascript: { html: 1 }, "81433815e4751f68e04d42ec948cba14ab028c2d": { html: 1 }, logged_in: { html: 1 }, env: { html: 1, shell: 1 }, production: { html: 1 }, logov7: { html: 1 }, tooltipped: { html: 1 }, downwards: { html: 1 }, You: { html: 1, "objective-c": 1, ruby: 1 }, UTF: { html: 1, "objective-c": 1, python: 1 }, command_bar_form: { html: 1 }, method: { html: 1, javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, advanced_search: { html: 1 }, Advanced: { html: 1 }, Command: { html: 1, ruby: 1 }, tabindex: { html: 1 }, username: { html: 1, shell: 1 }, visionmedia: { html: 1 }, autocapitalize: { html: 1 }, Show: { html: 1 }, Bar: { html: 1 }, Help: { html: 1, ruby: 1 }, Explore: { html: 1 }, Gist: { html: 1 }, blog: { html: 1 }, Blog: { html: 1 }, f1e3ab214a976a39cfd713bc93deb10f: { html: 1 }, amp: { html: 1 }, "2Fimages": { html: 1 }, "2Fgravatars": { html: 1 }, "2Fgravatar": { html: 1 }, new_repo: { html: 1 }, Repo: { html: 1 }, account_settings: { html: 1 }, Account: { html: 1 }, Settings: { html: 1 }, post: { html: 1, javascript: 1, shell: 1 }, Sign: { html: 1 }, Out: { html: 1 }, Results: { html: 1 }, explore_main: { html: 1 }, explore_repos: { html: 1 }, Repositories: { html: 1 }, languages: { html: 1 }, explore_languages: { html: 1 }, Languages: { html: 1 }, timeline: { html: 1 }, explore_timeline: { html: 1 }, Timeline: { html: 1 }, explore_search: { html: 1 }, search_repos: { html: 1 }, search_form: { html: 1 }, type_value: { html: 1 }, repo_value: { html: 1 }, start_value: { html: 1 }, Users: { html: 1 }, Code: { html: 1, "objective-c": 1, python: 1, ruby: 1 }, Language: { html: 1 }, Any: { html: 1, python: 1 }, Popular: { html: 1 }, ActionScript: { html: 1 }, C: { html: 1, "objective-c": 1, ruby: 1 }, Common: { html: 1 }, Lisp: { html: 1 }, CSS: { html: 1 }, Diff: { html: 1 }, Emacs: { html: 1 }, Erlang: { html: 1 }, Haskell: { html: 1 }, HTML: { html: 1 }, Java: { html: 1 }, JavaScript: { html: 1 }, Lua: { html: 1 }, Objective: { html: 1, "objective-c": 1 }, Perl: { html: 1 }, PHP: { html: 1 }, Python: { html: 1, python: 1 }, Ruby: { html: 1 }, Scala: { html: 1 }, Scheme: { html: 1 }, TeX: { html: 1 }, XML: { html: 1 }, Ada: { html: 1 }, Apex: { html: 1 }, AppleScript: { html: 1 }, Arc: { html: 1 }, Arduino: { html: 1 }, ASP: { html: 1 }, Assembly: { html: 1 }, Augeas: { html: 1 }, AutoHotkey: { html: 1 }, Batchfile: { html: 1 }, Befunge: { html: 1 }, BlitzMax: { html: 1 }, Boo: { html: 1 }, Brainfuck: { html: 1 }, Bro: { html: 1 }, ObjDump: { html: 1 }, C2hs: { html: 1 }, Ceylon: { html: 1 }, ChucK: { html: 1 }, Clojure: { html: 1 }, CMake: { html: 1 }, CoffeeScript: { html: 1 }, ColdFusion: { html: 1 }, Coq: { html: 1 }, Cpp: { html: 1 }, Cucumber: { html: 1 }, Cython: { html: 1 }, D: { html: 1 }, Darcs: { html: 1 }, Patch: { html: 1 }, Dart: { html: 1 }, DCPU: { html: 1 }, ASM: { html: 1 }, Delphi: { html: 1 }, Dylan: { html: 1 }, eC: { html: 1 }, Ecere: { html: 1 }, Projects: { html: 1 }, Ecl: { html: 1 }, Eiffel: { html: 1 }, Elixir: { html: 1 }, F: { html: 1, "objective-c": 1, shell: 1 }, Factor: { html: 1 }, Fancy: { html: 1 }, Fantom: { html: 1 }, FORTRAN: { html: 1 }, GAS: { html: 1 }, Genshi: { html: 1 }, Gentoo: { html: 1 }, Ebuild: { html: 1 }, Eclass: { html: 1 }, Go: { html: 1 }, Gosu: { html: 1 }, Groff: { html: 1 }, Groovy: { html: 1 }, Server: { html: 1, python: 1 }, Pages: { html: 1 }, Haml: { html: 1 }, HaXe: { html: 1 }, Django: { html: 1 }, ERB: { html: 1 }, INI: { html: 1 }, Io: { html: 1 }, Ioke: { html: 1 }, IRC: { html: 1 }, Julia: { html: 1 }, Kotlin: { html: 1 }, LilyPond: { html: 1 }, Literate: { html: 1 }, LLVM: { html: 1 }, Logtalk: { html: 1 }, Makefile: { html: 1 }, Mako: { html: 1 }, Markdown: { html: 1 }, Matlab: { html: 1 }, Max: { html: 1 }, Mirah: { html: 1 }, Moocode: { html: 1 }, mupad: { html: 1 }, Myghty: { html: 1 }, Nemerle: { html: 1 }, Nimrod: { html: 1 }, Nu: { html: 1 }, NumPy: { html: 1 }, OCaml: { html: 1 }, ooc: { html: 1 }, Opa: { html: 1 }, OpenCL: { html: 1 }, OpenEdge: { html: 1 }, ABL: { html: 1 }, Parrot: { html: 1 }, Internal: { html: 1, "objective-c": 1 }, Representation: { html: 1 }, PowerShell: { html: 1 }, Puppet: { html: 1 }, Pure: { html: 1 }, Racket: { html: 1 }, Raw: { html: 1 }, Rebol: { html: 1 }, Redcode: { html: 1 }, reStructuredText: { html: 1 }, RHTML: { html: 1 }, Rust: { html: 1 }, Sage: { html: 1 }, Sass: { html: 1 }, Scilab: { html: 1 }, SCSS: { html: 1 }, Self: { html: 1 }, Shell: { html: 1 }, Smalltalk: { html: 1 }, Smarty: { html: 1 }, Standard: { html: 1, "objective-c": 1 }, ML: { html: 1 }, SuperCollider: { html: 1 }, Tcl: { html: 1 }, Tcsh: { html: 1 }, Tea: { html: 1 }, Textile: { html: 1 }, Turing: { html: 1 }, Twig: { html: 1 }, Vala: { html: 1 }, Verilog: { html: 1 }, VHDL: { html: 1 }, VimL: { html: 1 }, Visual: { html: 1 }, Basic: { html: 1 }, XQuery: { html: 1 }, XS: { html: 1 }, XSLT: { html: 1 }, YAML: { html: 1 }, valign: { html: 1 }, TouchCode: { html: 1 }, TouchXML: { html: 1 }, Official: { html: 1 }, quot: { html: 1 }, KB: { html: 1 }, forks: { html: 1 }, months: { html: 1 }, robbiehanson: { html: 1 }, KissXML: { html: 1 }, replacement: { html: 1, "objective-c": 1 }, Cocoa: { html: 1, "objective-c": 1 }, NSXML: { html: 1 }, cluster: { html: 1 }, classes: { html: 1, "objective-c": 1 }, Based: { html: 1 }, libxml: { html: 1 }, Works: { html: 1 }, iOS: { html: 1, "objective-c": 1 }, ZaBlanc: { html: 1 }, RaptureXML: { html: 1 }, sensible: { html: 1 }, API: { html: 1, javascript: 1 }, Mac: { html: 1 }, development: { html: 1 }, Leonidas: { html: 1 }, XIV: { html: 1 }, xml2js: { html: 1 }, converter: { html: 1, "objective-c": 1 }, bcaccinolo: { html: 1 }, NSDictionary: { html: 1, "objective-c": 1 }, iPhone: { html: 1 }, more_link: { html: 1 }, raquo: { html: 1 }, "008": { html: 1 }, "2ca7247fde7f8347eff5b5acf91804e5": { html: 1 }, "02c99dc465e883e3f8b29fcdb6341fb2": { html: 1 }, xmlwerks: { html: 1 }, Hank: { html: 1 }, Ratzesberger: { html: 1 }, located: { html: 1 }, California: { html: 1 }, USA: { html: 1 }, "1bb69e484338161dec481e117d4aec80": { html: 1 }, xmly: { html: 1 }, "215f1ef5c917cdf83687f5c9942044ca": { html: 1 }, xmlu: { html: 1 }, Xiao: { html: 1 }, Ming: { html: 1 }, Lu: { html: 1 }, "465fcf60b799db7b9367c66ce8e740c6": { html: 1 }, xml5: { html: 1 }, br: { html: 1 }, Source: { html: 1 }, eed3si9n: { html: 1 }, scalaxb: { html: 1 }, "97924b263cda2d062c23934a261104cf5642b200": { html: 1 }, cli: { html: 1 }, src_generated: { html: 1 }, wsdl20: { html: 1 }, xmlprotocol: { html: 1 }, scala: { html: 1 }, import: { html: 1, "objective-c": 1, python: 1 }, _: { html: 1, ruby: 1 }, Foo: { html: 1 }, michifunk: { html: 1 }, sample_app2: { html: 1 }, "355aaa587daed4c4bfdbd4000f2a7f50c06232e0": { html: 1 }, gems: { html: 1 }, nokogiri: { html: 1 }, x86: { html: 1 }, mingw32: { html: 1 }, ext: { html: 1 }, xml_node: { html: 1 }, lt: { html: 1 }, _node: { html: 1 }, ID: { html: 1 }, decorate: { html: 1 }, decorate_bang: { html: 1 }, DEBUG: { html: 1 }, debug_node_dealloc: { html: 1 }, package: { html: 1 }, NodeSeq: { html: 1 }, NamespaceBinding: { html: 1 }, Elem: { html: 1 }, Unprefixed: { html: 1 }, sshwsfc: { html: 1 }, apf: { html: 1 }, "712e9e66a748acf9883ac459b435ec0e817ebb92": { html: 1 }, core: { html: 1, python: 1 }, lib: { html: 1 }, xmldb: { html: 1 }, FSF: { html: 1 }, fsf: { html: 1 }, __WITH_XMLDATABASE: { html: 1 }, "2af79d8e58cc515841f322ac4f215a68fc1327c4": { html: 1 }, databinding: { html: 1 }, _XMLDATABASE: { html: 1 }, unbind: { html: 1 }, window: { html: 1, javascript: 1 }, database: { html: 1 }, hack: { html: 1, "objective-c": 1, shell: 1 }, Links: { html: 1 }, About: { html: 1 }, features: { html: 1 }, Features: { html: 1 }, Contact: { html: 1 }, Support: { html: 1, python: 1 }, training: { html: 1 }, Training: { html: 1 }, Enterprise: { html: 1 }, Site: { html: 1 }, Status: { html: 1, python: 1 }, Clients: { html: 1 }, Windows: { html: 1 }, eclipse: { html: 1 }, Eclipse: { html: 1 }, mobile: { html: 1 }, Mobile: { html: 1 }, Apps: { html: 1 }, Tools: { html: 1 }, gaug: { html: 1 }, es: { html: 1, "objective-c": 1 }, Gauges: { html: 1 }, Web: { html: 1 }, analytics: { html: 1 }, speakerdeck: { html: 1 }, Speaker: { html: 1 }, Deck: { html: 1 }, Presentations: { html: 1 }, snippets: { html: 1 }, Extras: { html: 1 }, Job: { html: 1 }, Board: { html: 1 }, shop: { html: 1 }, Shop: { html: 1 }, octodex: { html: 1 }, Octodex: { html: 1 }, Documentation: { html: 1 }, Developer: { html: 1 }, flavored: { html: 1 }, Flavored: { html: 1 }, pages: { html: 1 }, terms: { html: 1, "objective-c": 1 }, Terms: { html: 1 }, Service: { html: 1 }, privacy: { html: 1 }, Privacy: { html: 1 }, Security: { html: 1 }, "37470s": { html: 1 }, fe1: { html: 1 }, rs: { html: 1 }, All: { html: 1, "objective-c": 1, python: 1 }, reserved: { html: 1, "objective-c": 1 }, legal_ie: { html: 1 }, keyboard_shortcuts_pane: { html: 1 }, instapaper_ignore: { html: 1 }, readability: { html: 1 }, Keyboard: { html: 1 }, Shortcuts: { html: 1 }, wide: { html: 1 }, Focus: { html: 1 }, Bring: { html: 1 }, dialog: { html: 1 }, Commit: { html: 1 }, enter: { html: 1 }, Open: { html: 1 }, Expand: { html: 1 }, canonical: { html: 1 }, Pull: { html: 1 }, ctrl: { html: 1 }, Submit: { html: 1 }, shift: { html: 1, javascript: 1 }, Preview: { html: 1 }, Issues: { html: 1 }, Toggle: { html: 1 }, Back: { html: 1 }, inbox: { html: 1 }, Dashboard: { html: 1 }, Network: { html: 1 }, Graph: { html: 1 }, Scroll: { html: 1 }, way: { html: 1, "objective-c": 1, shell: 1 }, Browsing: { html: 1 }, Activates: { html: 1 }, finder: { html: 1 }, Jump: { html: 1 }, Switch: { html: 1 }, Commits: { html: 1 }, escape: { html: 1, "objective-c": 1 }, Parent: { html: 1 }, Other: { html: 1 }, Notifications: { html: 1 }, Mark: { html: 1 }, Mute: { html: 1 }, Cheat: { html: 1 }, Sheet: { html: 1 }, Format: { html: 1 }, Text: { html: 1 }, styles: { html: 1 }, _This: { html: 1 }, also: { html: 1, javascript: 1 }, italic_: { html: 1 }, __This: { html: 1 }, bold__: { html: 1 }, combine: { html: 1 }, them: { html: 1, "objective-c": 1, shell: 1 }, Lists: { html: 1 }, Unordered: { html: 1 }, Item: { html: 1 }, "2a": { html: 1 }, "2b": { html: 1 }, Ordered: { html: 1 }, "3a": { html: 1 }, "3b": { html: 1 }, Miscellaneous: { html: 1 }, Images: { html: 1 }, Logo: { html: 1 }, Alt: { html: 1 }, automatic: { html: 1 }, Blockquotes: { html: 1 }, Kanye: { html: 1 }, West: { html: 1 }, said: { html: 1, "objective-c": 1 }, living: { html: 1 }, future: { html: 1 }, present: { html: 1, ruby: 1 }, our: { html: 1, "objective-c": 1, shell: 1 }, past: { html: 1 }, Examples: { html: 1, javascript: 1, ruby: 1, shell: 1 }, Syntax: { html: 1 }, highlighting: { html: 1 }, _blank: { html: 1 }, GFM: { html: 1 }, function: { html: 1, javascript: 1, "objective-c": 1, shell: 1 }, fancyAlert: { html: 1 }, foo: { html: 1, python: 1, ruby: 1, shell: 1 }, Or: { html: 1, javascript: 1 }, your: { html: 1, shell: 1 }, spaces: { html: 1, "objective-c": 1 }, Here: { html: 1, shell: 1 }, syntax: { html: 1, ruby: 1 }, def: { html: 1, python: 1, ruby: 1 }, Inline: { html: 1 }, think: { html: 1 }, you: { html: 1, javascript: 1, "objective-c": 1, python: 1, shell: 1 }, addr: { html: 1 }, element: { html: 1 }, instead: { html: 1, "objective-c": 1, python: 1 }, flash: { html: 1 }, Something: { html: 1 }, went: { html: 1 }, Please: { html: 1 }, again: { html: 1, "objective-c": 1, ruby: 1 }, Looking: { html: 1 }, s3: { html: 1 }, amazonaws: { html: 1 }, GitHub_Logos: { html: 1 }, Github_logo: { html: 1 }, about_page: { html: 1 }, github_logo: { html: 1 }, Download: { html: 1 }, Octocat: { html: 1 }, Octocats: { html: 1 }, server_response_time: { html: 1 }, host: { html: 1, "objective-c": 1 }, Module: { javascript: 1 }, dependencies: { javascript: 1 }, Emitter: { javascript: 1 }, require: { javascript: 1, "objective-c": 1, ruby: 1 }, emitter: { javascript: 1 }, Root: { javascript: 1 }, iframes: { javascript: 1 }, root: { javascript: 1 }, undefined: { javascript: 1, "objective-c": 1 }, typeof: { javascript: 1, "objective-c": 1 }, Noop: { javascript: 1 }, noop: { javascript: 1 }, Determine: { javascript: 1 }, XHR: { javascript: 1 }, getXHR: { javascript: 1 }, XMLHttpRequest: { javascript: 1 }, protocol: { javascript: 1, python: 1 }, ActiveXObject: { javascript: 1 }, XMLHTTP: { javascript: 1 }, Msxml2: { javascript: 1 }, Removes: { javascript: 1, ruby: 1 }, leading: { javascript: 1, shell: 1 }, whitespace: { javascript: 1 }, support: { javascript: 1, "objective-c": 1, python: 1 }, api: { javascript: 1 }, trim: { javascript: 1, shell: 1 }, Boolean: { javascript: 1 }, isObject: { javascript: 1 }, Serialize: { javascript: 1 }, serialize: { javascript: 1, "objective-c": 1 }, pairs: { javascript: 1 }, encodeURIComponent: { javascript: 1 }, join: { javascript: 1, python: 1, ruby: 1 }, Expose: { javascript: 1 }, serialization: { javascript: 1 }, serializeObject: { javascript: 1, "objective-c": 1 }, urlencoded: { javascript: 1, python: 1 }, parseString: { javascript: 1 }, split: { javascript: 1, python: 1, ruby: 1 }, decodeURIComponent: { javascript: 1 }, Default: { javascript: 1, "objective-c": 1, ruby: 1 }, MIME: { javascript: 1 }, map: { javascript: 1, python: 1, ruby: 1 }, superagent: { javascript: 1 }, json: { javascript: 1, python: 1 }, generated: { javascript: 1 }, JSON: { javascript: 1, "objective-c": 1, python: 1 }, stringify: { javascript: 1 }, parsers: { javascript: 1 }, parsed: { javascript: 1, "objective-c": 1, python: 1, ruby: 1, shell: 1 }, containing: { javascript: 1, python: 1 }, mapped: { javascript: 1 }, parseHeader: { javascript: 1 }, lines: { javascript: 1, python: 1, shell: 1 }, pop: { javascript: 1, "objective-c": 1, python: 1 }, indexOf: { javascript: 1 }, slice: { javascript: 1 }, toLowerCase: { javascript: 1 }, parameters: { javascript: 1, python: 1, shell: 1 }, params: { javascript: 1, python: 1 }, reduce: { javascript: 1 }, Response: { javascript: 1, python: 1 }, xhr: { javascript: 1 }, flags: { javascript: 1, "objective-c": 1 }, ok: { javascript: 1, python: 1, shell: 1 }, Aliasing: { javascript: 1 }, nice: { javascript: 1 }, promise: { javascript: 1 }, like: { javascript: 1, "objective-c": 1, python: 1, shell: 1 }, pass: { javascript: 1, python: 1 }, callbacks: { javascript: 1 }, res: { javascript: 1 }, Sending: { javascript: 1 }, chained: { javascript: 1 }, send: { javascript: 1, python: 1 }, passed: { javascript: 1, python: 1, ruby: 1 }, further: { javascript: 1 }, reduced: { javascript: 1 }, call: { javascript: 1, "objective-c": 1, ruby: 1 }, cases: { javascript: 1, "objective-c": 1 }, XMLHTTPRequest: { javascript: 1 }, responseText: { javascript: 1 }, setStatusProperties: { javascript: 1 }, getAllResponseHeaders: { javascript: 1 }, setHeaderProperties: { javascript: 1 }, parseBody: { javascript: 1 }, related: { javascript: 1, "objective-c": 1 }, properties: { javascript: 1 }, response: { javascript: 1, python: 1 }, provide: { javascript: 1 }, prototype: { javascript: 1 }, Used: { javascript: 1 }, parsing: { javascript: 1, "objective-c": 1, ruby: 1 }, bodies: { javascript: 1 }, Parsers: { javascript: 1 }, defined: { javascript: 1, "objective-c": 1, shell: 1 }, Mixed: { javascript: 1 }, such: { javascript: 1, ruby: 1, shell: 1 }, For: { javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, "2xx": { javascript: 1 }, give: { javascript: 1, shell: 1 }, __true__: { javascript: 1 }, whereas: { javascript: 1 }, "5xx": { javascript: 1 }, __false__: { javascript: 1 }, clientError: { javascript: 1 }, serverError: { javascript: 1 }, available: { javascript: 1, python: 1, shell: 1 }, specific: { javascript: 1, "objective-c": 1, shell: 1 }, statusType: { javascript: 1 }, ranging: { javascript: 1 }, sometimes: { javascript: 1, shell: 1 }, useful: { javascript: 1 }, mapping: { javascript: 1, python: 1 }, respond: { javascript: 1, "objective-c": 1 }, colors: { javascript: 1 }, sugar: { javascript: 1 }, common: { javascript: 1 }, Currently: { javascript: 1 }, providing: { javascript: 1 }, noContent: { javascript: 1 }, badRequest: { javascript: 1 }, unauthorized: { javascript: 1 }, notAcceptable: { javascript: 1 }, notFound: { javascript: 1 }, Number: { javascript: 1 }, basics: { javascript: 1 }, accepted: { javascript: 1 }, forbidden: { javascript: 1 }, representative: { javascript: 1 }, toError: { javascript: 1 }, Request: { javascript: 1, python: 1 }, _query: { javascript: 1 }, Requested: { javascript: 1 }, With: { javascript: 1 }, Inherit: { javascript: 1 }, timeout: { javascript: 1, python: 1 }, chaining: { javascript: 1 }, _timeout: { javascript: 1 }, Clear: { javascript: 1 }, previous: { javascript: 1 }, clearTimeout: { javascript: 1 }, _timer: { javascript: 1 }, Abort: { javascript: 1 }, potential: { javascript: 1 }, aborted: { javascript: 1 }, emit: { javascript: 1 }, multiple: { javascript: 1 }, req: { javascript: 1 }, Accept: { javascript: 1, python: 1 }, Key: { javascript: 1, "objective-c": 1 }, foobar: { javascript: 1 }, values: { javascript: 1, "objective-c": 1, python: 1, shell: 1 }, xmlstring: { javascript: 1 }, Add: { javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, shoes: { javascript: 1 }, Send: { javascript: 1, python: 1 }, defaulting: { javascript: 1 }, when: { javascript: 1, "objective-c": 1, python: 1, ruby: 1 }, querystring: { javascript: 1, python: 1 }, writes: { javascript: 1, shell: 1 }, order: { javascript: 1, "objective-c": 1 }, defaults: { javascript: 1, python: 1, ruby: 1 }, tobi: { javascript: 1 }, species: { javascript: 1 }, ferret: { javascript: 1 }, _data: { javascript: 1 }, handle: { javascript: 1, "objective-c": 1 }, arity: { javascript: 1 }, _callback: { javascript: 1 }, Initiate: { javascript: 1 }, invoking: { javascript: 1 }, instanceof: { javascript: 1 }, store: { javascript: 1, "objective-c": 1 }, change: { javascript: 1, "objective-c": 1 }, onreadystatechange: { javascript: 1 }, readyState: { javascript: 1 }, setTimeout: { javascript: 1 }, initiate: { javascript: 1 }, GET: { javascript: 1, python: 1 }, HEAD: { javascript: 1, python: 1 }, stuff: { javascript: 1 }, setRequestHeader: { javascript: 1 }, Issue: { javascript: 1, "objective-c": 1 }, users: { javascript: 1 }, arguments: { javascript: 1, "objective-c": 1, ruby: 1, shell: 1 }, DELETE: { javascript: 1 }, PATCH: { javascript: 1 }, patch: { javascript: 1 }, POST: { javascript: 1, python: 1 }, PUT: { javascript: 1 }, put: { javascript: 1 }, module: { javascript: 1, python: 1, ruby: 1 }, exports: { javascript: 1 }, JSONKit: { "objective-c": 1 }, johnezang: { "objective-c": 1 }, Dual: { "objective-c": 1 }, licensed: { "objective-c": 1 }, either: { "objective-c": 1 }, BSD: { "objective-c": 1 }, alternatively: { "objective-c": 1 }, Apache: { "objective-c": 1 }, specified: { "objective-c": 1, python: 1, shell: 1 }, below: { "objective-c": 1 }, John: { "objective-c": 1 }, Engelhart: { "objective-c": 1 }, Redistribution: { "objective-c": 1 }, binary: { "objective-c": 1 }, forms: { "objective-c": 1 }, modification: { "objective-c": 1 }, permitted: { "objective-c": 1 }, provided: { "objective-c": 1, python: 1 }, met: { "objective-c": 1 }, Redistributions: { "objective-c": 1 }, retain: { "objective-c": 1 }, disclaimer: { "objective-c": 1 }, reproduce: { "objective-c": 1 }, materials: { "objective-c": 1 }, distribution: { "objective-c": 1 }, Neither: { "objective-c": 1 }, Zang: { "objective-c": 1 }, Industries: { "objective-c": 1 }, nor: { "objective-c": 1, shell: 1 }, names: { "objective-c": 1, python: 1, ruby: 1, shell: 1 }, may: { "objective-c": 1, ruby: 1 }, used: { "objective-c": 1, ruby: 1 }, endorse: { "objective-c": 1 }, promote: { "objective-c": 1 }, products: { "objective-c": 1 }, derived: { "objective-c": 1 }, prior: { "objective-c": 1 }, THIS: { "objective-c": 1 }, BY: { "objective-c": 1 }, CONTRIBUTORS: { "objective-c": 1 }, ARE: { "objective-c": 1 }, DISCLAIMED: { "objective-c": 1 }, OWNER: { "objective-c": 1 }, DIRECT: { "objective-c": 1 }, INDIRECT: { "objective-c": 1 }, INCIDENTAL: { "objective-c": 1 }, SPECIAL: { "objective-c": 1 }, EXEMPLARY: { "objective-c": 1 }, CONSEQUENTIAL: { "objective-c": 1 }, PROCUREMENT: { "objective-c": 1 }, SUBSTITUTE: { "objective-c": 1 }, GOODS: { "objective-c": 1 }, SERVICES: { "objective-c": 1 }, LOSS: { "objective-c": 1 }, DATA: { "objective-c": 1 }, PROFITS: { "objective-c": 1 }, BUSINESS: { "objective-c": 1 }, INTERRUPTION: { "objective-c": 1 }, HOWEVER: { "objective-c": 1 }, CAUSED: { "objective-c": 1 }, ON: { "objective-c": 1 }, THEORY: { "objective-c": 1 }, STRICT: { "objective-c": 1 }, NEGLIGENCE: { "objective-c": 1 }, WAY: { "objective-c": 1 }, EVEN: { "objective-c": 1 }, IF: { "objective-c": 1 }, ADVISED: { "objective-c": 1 }, POSSIBILITY: { "objective-c": 1 }, SUCH: { "objective-c": 1 }, DAMAGE: { "objective-c": 1 }, Licensed: { "objective-c": 1 }, except: { "objective-c": 1, python: 1 }, compliance: { "objective-c": 1 }, obtain: { "objective-c": 1 }, apache: { "objective-c": 1 }, licenses: { "objective-c": 1 }, LICENSE: { "objective-c": 1 }, Unless: { "objective-c": 1 }, applicable: { "objective-c": 1 }, law: { "objective-c": 1 }, agreed: { "objective-c": 1 }, writing: { "objective-c": 1 }, distributed: { "objective-c": 1 }, BASIS: { "objective-c": 1 }, CONDITIONS: { "objective-c": 1 }, express: { "objective-c": 1 }, implied: { "objective-c": 1 }, governing: { "objective-c": 1 }, permissions: { "objective-c": 1 }, limitations: { "objective-c": 1 }, Acknowledgments: { "objective-c": 1 }, bulk: { "objective-c": 1 }, UTF32: { "objective-c": 1 }, conversion: { "objective-c": 1 }, verification: { "objective-c": 1 }, comes: { "objective-c": 1 }, ConvertUTF: { "objective-c": 1 }, hc: { "objective-c": 1 }, It: { "objective-c": 1, python: 1 }, has: { "objective-c": 1, python: 1 }, original: { "objective-c": 1, python: 1, ruby: 1 }, sources: { "objective-c": 1 }, were: { "objective-c": 1, python: 1, ruby: 1 }, obtained: { "objective-c": 1 }, unicode: { "objective-c": 1, python: 1 }, However: { "objective-c": 1 }, web: { "objective-c": 1, shell: 1 }, seems: { "objective-c": 1 }, Instead: { "objective-c": 1 }, Unicode: { "objective-c": 1 }, FAQ: { "objective-c": 1 }, faq: { "objective-c": 1 }, utf_bom: { "objective-c": 1 }, gen4: { "objective-c": 1 }, points: { "objective-c": 1 }, International: { "objective-c": 1 }, Components: { "objective-c": 1 }, ICU: { "objective-c": 1 }, icu: { "objective-c": 1 }, project: { "objective-c": 1 }, how: { "objective-c": 1 }, decision: { "objective-c": 1 }, ch: { "objective-c": 1 }, was: { "objective-c": 1, python: 1, shell: 1 }, made: { "objective-c": 1 }, leverage: { "objective-c": 1 }, proven: { "objective-c": 1 }, Hopefully: { "objective-c": 1 }, local: { "objective-c": 1, shell: 1 }, modifications: { "objective-c": 1 }, bug: { "objective-c": 1 }, isValidCodePoint: { "objective-c": 1 }, macros: { "objective-c": 1 }, U_IS_UNICODE_NONCHAR: { "objective-c": 1 }, U_IS_UNICODE_CHAR: { "objective-c": 1 }, From: { "objective-c": 1 }, Disclaimer: { "objective-c": 1 }, claims: { "objective-c": 1 }, fitness: { "objective-c": 1 }, particular: { "objective-c": 1 }, warranties: { "objective-c": 1 }, expressed: { "objective-c": 1 }, recipient: { "objective-c": 1 }, agrees: { "objective-c": 1 }, determine: { "objective-c": 1, shell: 1 }, applicability: { "objective-c": 1 }, purchased: { "objective-c": 1 }, magnetic: { "objective-c": 1 }, optical: { "objective-c": 1 }, sole: { "objective-c": 1 }, remedy: { "objective-c": 1 }, claim: { "objective-c": 1 }, exchange: { "objective-c": 1 }, defective: { "objective-c": 1 }, receipt: { "objective-c": 1 }, Limitations: { "objective-c": 1 }, Rights: { "objective-c": 1 }, Redistribute: { "objective-c": 1 }, grants: { "objective-c": 1 }, freely: { "objective-c": 1 }, supplied: { "objective-c": 1, python: 1 }, creation: { "objective-c": 1 }, supporting: { "objective-c": 1 }, make: { "objective-c": 1, python: 1 }, internal: { "objective-c": 1, python: 1 }, remains: { "objective-c": 1 }, attached: { "objective-c": 1 }, errno: { "objective-c": 1 }, math: { "objective-c": 1 }, limits: { "objective-c": 1 }, objc: { "objective-c": 1 }, runtime: { "objective-c": 1, shell: 1 }, CoreFoundation: { "objective-c": 1 }, CFString: { "objective-c": 1 }, CFArray: { "objective-c": 1 }, CFDictionary: { "objective-c": 1 }, CFNumber: { "objective-c": 1 }, Foundation: { "objective-c": 1 }, NSArray: { "objective-c": 1 }, NSAutoreleasePool: { "objective-c": 1 }, NSData: { "objective-c": 1 }, NSException: { "objective-c": 1 }, NSNull: { "objective-c": 1 }, NSObjCRuntime: { "objective-c": 1 }, __has_feature: { "objective-c": 1 }, JK_ENABLE_CF_TRANSFER_OWNERSHIP_CALLBACKS: { "objective-c": 1 }, v1: { "objective-c": 1 }, valid: { "objective-c": 1, ruby: 1, shell: 1 }, __OBJC_GC__: { "objective-c": 1 }, does: { "objective-c": 1, ruby: 1, shell: 1 }, Garbage: { "objective-c": 1 }, Collection: { "objective-c": 1 }, objc_arc: { "objective-c": 1 }, Automatic: { "objective-c": 1 }, Reference: { "objective-c": 1 }, Counting: { "objective-c": 1 }, ARC: { "objective-c": 1 }, technically: { "objective-c": 1 }, few: { "objective-c": 1 }, problems: { "objective-c": 1 }, strictly: { "objective-c": 1 }, C99: { "objective-c": 1 }, conforming: { "objective-c": 1 }, standpoint: { "objective-c": 1 }, though: { "objective-c": 1 }, they: { "objective-c": 1, ruby: 1 }, pedantic: { "objective-c": 1 }, nitpicking: { "objective-c": 1 }, variety: { "objective-c": 1 }, practice: { "objective-c": 1 }, compilers: { "objective-c": 1 }, architectures: { "objective-c": 1 }, reasonably: { "objective-c": 1 }, compiled: { "objective-c": 1 }, these: { "objective-c": 1 }, nitpicks: { "objective-c": 1 }, aren: { "objective-c": 1 }, problem: { "objective-c": 1 }, Since: { "objective-c": 1 }, limited: { "objective-c": 1 }, what: { "objective-c": 1, python: 1 }, processor: { "objective-c": 1 }, nearly: { "objective-c": 1 }, UINT_MAX: { "objective-c": 1 }, "0xffffffffU": { "objective-c": 1 }, INT_MIN: { "objective-c": 1 }, "0x7fffffff": { "objective-c": 1 }, ULLONG_MAX: { "objective-c": 1 }, "0xffffffffffffffffULL": { "objective-c": 1 }, LLONG_MIN: { "objective-c": 1 }, "0x7fffffffffffffffLL": { "objective-c": 1 }, "1LL": { "objective-c": 1 }, requires: { "objective-c": 1 }, bits: { "objective-c": 1 }, respectively: { "objective-c": 1 }, __LP64__: { "objective-c": 1 }, ULONG_MAX: { "objective-c": 1 }, INT_MAX: { "objective-c": 1 }, LONG_MAX: { "objective-c": 1 }, LONG_MIN: { "objective-c": 1 }, WORD_BIT: { "objective-c": 1 }, LONG_BIT: { "objective-c": 1 }, same: { "objective-c": 1, ruby: 1 }, bit: { "objective-c": 1, shell: 1 }, uses: { "objective-c": 1 }, NS: { "objective-c": 1 }, lot: { "objective-c": 1 }, sure: { "objective-c": 1 }, something: { "objective-c": 1 }, expecting: { "objective-c": 1 }, compatible: { "objective-c": 1 }, ssize_t: { "objective-c": 1 }, NSUIntegerMax: { "objective-c": 1 }, NSIntegerMax: { "objective-c": 1 }, NSIntegerMin: { "objective-c": 1 }, NSInteger: { "objective-c": 1 }, NSUInteger: { "objective-c": 1 }, SIZE_MAX: { "objective-c": 1 }, SSIZE_MAX: { "objective-c": 1 }, DJB: { "objective-c": 1 }, hash: { "objective-c": 1, ruby: 1 }, JK_HASH_INIT: { "objective-c": 1 }, "1402737925UL": { "objective-c": 1 }, Use: { "objective-c": 1, python: 1, ruby: 1 }, __builtin_clz: { "objective-c": 1 }, trailingBytesForUTF8: { "objective-c": 1 }, lookup: { "objective-c": 1 }, JK_FAST_TRAILING_BYTES: { "objective-c": 1 }, JK_CACHE_SLOTS: { "objective-c": 1 }, power: { "objective-c": 1, python: 1 }, slots: { "objective-c": 1 }, JK_CACHE_SLOTS_BITS: { "objective-c": 1 }, "1UL": { "objective-c": 1 }, JK_CACHE_PROBES: { "objective-c": 1 }, probe: { "objective-c": 1 }, "4UL": { "objective-c": 1 }, JK_INIT_CACHE_AGE: { "objective-c": 1 }, AGE: { "objective-c": 1 }, JK_TOKENBUFFER_SIZE: { "objective-c": 1 }, stack: { "objective-c": 1 }, temporary: { "objective-c": 1 }, hold: { "objective-c": 1 }, contains: { "objective-c": 1, python: 1, shell: 1 }, escapes: { "objective-c": 1 }, "1024UL": { "objective-c": 1 }, "2UL": { "objective-c": 1 }, JK_STACK_OBJS: { "objective-c": 1 }, temporarily: { "objective-c": 1 }, storing: { "objective-c": 1 }, Obj: { "objective-c": 1 }, objects: { "objective-c": 1, python: 1 }, transferred: { "objective-c": 1 }, JK_JSONBUFFER_SIZE: { "objective-c": 1 }, JK_UTF8BUFFER_SIZE: { "objective-c": 1 }, "16UL": { "objective-c": 1 }, JK_ENCODE_CACHE_SLOTS: { "objective-c": 1 }, __GNUC__: { "objective-c": 1 }, JK_ATTRIBUTES: { "objective-c": 1 }, attr: { "objective-c": 1, python: 1 }, __attribute__: { "objective-c": 1 }, __VA_ARGS__: { "objective-c": 1 }, JK_EXPECTED: { "objective-c": 1 }, cond: { "objective-c": 1 }, __builtin_expect: { "objective-c": 1 }, JK_EXPECT_T: { "objective-c": 1 }, "1U": { "objective-c": 1 }, JK_EXPECT_F: { "objective-c": 1 }, "0U": { "objective-c": 1 }, JK_PREFETCH: { "objective-c": 1 }, ptr: { "objective-c": 1 }, __builtin_prefetch: { "objective-c": 1 }, JK_STATIC_INLINE: { "objective-c": 1 }, __inline__: { "objective-c": 1 }, always_inline: { "objective-c": 1 }, JK_ALIGNED: { "objective-c": 1 }, aligned: { "objective-c": 1 }, JK_UNUSED_ARG: { "objective-c": 1 }, unused: { "objective-c": 1 }, JK_WARN_UNUSED: { "objective-c": 1 }, warn_unused_result: { "objective-c": 1 }, JK_WARN_UNUSED_CONST: { "objective-c": 1 }, JK_WARN_UNUSED_PURE: { "objective-c": 1 }, pure: { "objective-c": 1 }, JK_WARN_UNUSED_SENTINEL: { "objective-c": 1 }, sentinel: { "objective-c": 1 }, JK_NONNULL_ARGS: { "objective-c": 1 }, nonnull: { "objective-c": 1 }, JK_WARN_UNUSED_NONNULL_ARGS: { "objective-c": 1 }, JK_WARN_UNUSED_CONST_NONNULL_ARGS: { "objective-c": 1 }, JK_WARN_UNUSED_PURE_NONNULL_ARGS: { "objective-c": 1 }, __GNUC_MINOR__: { "objective-c": 1 }, JK_ALLOC_SIZE_NON_NULL_ARGS_WARN_UNUSED: { "objective-c": 1 }, alloc_size: { "objective-c": 1 }, JKArray: { "objective-c": 1 }, JKDictionaryEnumerator: { "objective-c": 1 }, JKDictionary: { "objective-c": 1 }, JSONNumberStateStart: { "objective-c": 1 }, JSONNumberStateFinished: { "objective-c": 1 }, JSONNumberStateError: { "objective-c": 1 }, JSONNumberStateWholeNumberStart: { "objective-c": 1 }, JSONNumberStateWholeNumberMinus: { "objective-c": 1 }, JSONNumberStateWholeNumberZero: { "objective-c": 1 }, JSONNumberStateWholeNumber: { "objective-c": 1 }, JSONNumberStatePeriod: { "objective-c": 1 }, JSONNumberStateFractionalNumberStart: { "objective-c": 1 }, JSONNumberStateFractionalNumber: { "objective-c": 1 }, JSONNumberStateExponentStart: { "objective-c": 1 }, JSONNumberStateExponentPlusMinus: { "objective-c": 1 }, JSONNumberStateExponent: { "objective-c": 1 }, JSONStringStateStart: { "objective-c": 1 }, JSONStringStateParsing: { "objective-c": 1 }, JSONStringStateFinished: { "objective-c": 1 }, JSONStringStateError: { "objective-c": 1 }, JSONStringStateEscape: { "objective-c": 1 }, JSONStringStateEscapedUnicode1: { "objective-c": 1 }, JSONStringStateEscapedUnicode2: { "objective-c": 1 }, JSONStringStateEscapedUnicode3: { "objective-c": 1 }, JSONStringStateEscapedUnicode4: { "objective-c": 1 }, JSONStringStateEscapedUnicodeSurrogate1: { "objective-c": 1 }, JSONStringStateEscapedUnicodeSurrogate2: { "objective-c": 1 }, JSONStringStateEscapedUnicodeSurrogate3: { "objective-c": 1 }, JSONStringStateEscapedUnicodeSurrogate4: { "objective-c": 1 }, JSONStringStateEscapedNeedEscapeForSurrogate: { "objective-c": 1 }, JSONStringStateEscapedNeedEscapedUForSurrogate: { "objective-c": 1 }, JKParseAcceptValue: { "objective-c": 1 }, JKParseAcceptComma: { "objective-c": 1 }, JKParseAcceptEnd: { "objective-c": 1 }, JKParseAcceptValueOrEnd: { "objective-c": 1 }, JKParseAcceptCommaOrEnd: { "objective-c": 1 }, JKClassUnknown: { "objective-c": 1 }, JKClassString: { "objective-c": 1 }, JKClassNumber: { "objective-c": 1 }, JKClassArray: { "objective-c": 1 }, JKClassDictionary: { "objective-c": 1 }, JKClassNull: { "objective-c": 1 }, JKManagedBufferOnStack: { "objective-c": 1 }, JKManagedBufferOnHeap: { "objective-c": 1 }, JKManagedBufferLocationMask: { "objective-c": 1 }, "0x3": { "objective-c": 1 }, JKManagedBufferLocationShift: { "objective-c": 1 }, JKManagedBufferMustFree: { "objective-c": 1 }, JKFlags: { "objective-c": 1 }, JKManagedBufferFlags: { "objective-c": 1 }, JKObjectStackOnStack: { "objective-c": 1 }, JKObjectStackOnHeap: { "objective-c": 1 }, JKObjectStackLocationMask: { "objective-c": 1 }, JKObjectStackLocationShift: { "objective-c": 1 }, JKObjectStackMustFree: { "objective-c": 1 }, JKObjectStackFlags: { "objective-c": 1 }, JKTokenTypeInvalid: { "objective-c": 1 }, JKTokenTypeNumber: { "objective-c": 1 }, JKTokenTypeString: { "objective-c": 1 }, JKTokenTypeObjectBegin: { "objective-c": 1 }, JKTokenTypeObjectEnd: { "objective-c": 1 }, JKTokenTypeArrayBegin: { "objective-c": 1 }, JKTokenTypeArrayEnd: { "objective-c": 1 }, JKTokenTypeSeparator: { "objective-c": 1 }, JKTokenTypeComma: { "objective-c": 1 }, JKTokenTypeTrue: { "objective-c": 1 }, JKTokenTypeFalse: { "objective-c": 1 }, JKTokenTypeNull: { "objective-c": 1 }, JKTokenTypeWhiteSpace: { "objective-c": 1 }, JKTokenType: { "objective-c": 1 }, These: { "objective-c": 1 }, prime: { "objective-c": 1 }, assist: { "objective-c": 1 }, slot: { "objective-c": 1 }, probing: { "objective-c": 1 }, JKValueTypeNone: { "objective-c": 1 }, JKValueTypeString: { "objective-c": 1 }, JKValueTypeLongLong: { "objective-c": 1 }, JKValueTypeUnsignedLongLong: { "objective-c": 1 }, JKValueTypeDouble: { "objective-c": 1 }, JKValueType: { "objective-c": 1 }, JKEncodeOptionAsData: { "objective-c": 1 }, JKEncodeOptionAsString: { "objective-c": 1 }, JKEncodeOptionAsTypeMask: { "objective-c": 1 }, "0x7": { "objective-c": 1 }, JKEncodeOptionCollectionObj: { "objective-c": 1 }, JKEncodeOptionStringObj: { "objective-c": 1 }, JKEncodeOptionStringObjTrimQuotes: { "objective-c": 1 }, JKEncodeOptionType: { "objective-c": 1 }, JKHash: { "objective-c": 1 }, JKTokenCacheItem: { "objective-c": 1 }, JKTokenCache: { "objective-c": 1 }, JKTokenValue: { "objective-c": 1 }, JKParseToken: { "objective-c": 1 }, JKPtrRange: { "objective-c": 1 }, JKObjectStack: { "objective-c": 1 }, JKBuffer: { "objective-c": 1 }, JKConstBuffer: { "objective-c": 1 }, JKConstPtrRange: { "objective-c": 1 }, JKRange: { "objective-c": 1 }, JKManagedBuffer: { "objective-c": 1 }, JKFastClassLookup: { "objective-c": 1 }, JKEncodeCache: { "objective-c": 1 }, JKEncodeState: { "objective-c": 1 }, JKObjCImpCache: { "objective-c": 1 }, JKHashTableEntry: { "objective-c": 1 }, NSNumberAllocImp: { "objective-c": 1 }, receiver: { "objective-c": 1 }, SEL: { "objective-c": 1 }, NSNumberInitWithUnsignedLongLongImp: { "objective-c": 1 }, unsigned: { "objective-c": 1 }, JKClassFormatterIMP: { "objective-c": 1 }, __BLOCKS__: { "objective-c": 1 }, JKClassFormatterBlock: { "objective-c": 1 }, formatObject: { "objective-c": 1 }, roundSizeUpToMultipleOf: { "objective-c": 1 }, keys: { "objective-c": 1, ruby: 1 }, CFHashCode: { "objective-c": 1 }, cfHashes: { "objective-c": 1 }, ptrRange: { "objective-c": 1 }, union: { "objective-c": 1 }, longLongValue: { "objective-c": 1 }, unsignedLongLongValue: { "objective-c": 1 }, double: { "objective-c": 1, shell: 1 }, doubleValue: { "objective-c": 1 }, cacheItem: { "objective-c": 1 }, tokenPtrRange: { "objective-c": 1 }, tokenBuffer: { "objective-c": 1 }, cfHash: { "objective-c": 1 }, items: { "objective-c": 1, python: 1 }, prng_lfsr: { "objective-c": 1 }, age: { "objective-c": 1 }, Class: { "objective-c": 1 }, NSNumberClass: { "objective-c": 1 }, NSNumberAlloc: { "objective-c": 1 }, NSNumberInitWithUnsignedLongLong: { "objective-c": 1 }, JKParseState: { "objective-c": 1 }, JKParseOptionFlags: { "objective-c": 1 }, parseOptionFlags: { "objective-c": 1 }, stringBuffer: { "objective-c": 1 }, atIndex: { "objective-c": 1 }, lineNumber: { "objective-c": 1 }, lineStartIndex: { "objective-c": 1 }, prev_atIndex: { "objective-c": 1 }, prev_lineNumber: { "objective-c": 1 }, prev_lineStartIndex: { "objective-c": 1 }, objectStack: { "objective-c": 1 }, cache: { "objective-c": 1 }, objCImpCache: { "objective-c": 1 }, NSError: { "objective-c": 1 }, errorIsPrev: { "objective-c": 1 }, BOOL: { "objective-c": 1 }, mutableCollections: { "objective-c": 1 }, stringClass: { "objective-c": 1 }, numberClass: { "objective-c": 1 }, arrayClass: { "objective-c": 1 }, dictionaryClass: { "objective-c": 1 }, nullClass: { "objective-c": 1 }, utf8ConversionBuffer: { "objective-c": 1 }, fastClassLookup: { "objective-c": 1 }, JKSerializeOptionFlags: { "objective-c": 1 }, serializeOptionFlags: { "objective-c": 1 }, encodeOption: { "objective-c": 1 }, depth: { "objective-c": 1 }, classFormatterDelegate: { "objective-c": 1 }, classFormatterSelector: { "objective-c": 1 }, classFormatterIMP: { "objective-c": 1 }, classFormatterBlock: { "objective-c": 1 }, interface: { "objective-c": 1, python: 1 }, JKSerializer: { "objective-c": 1 }, NSObject: { "objective-c": 1 }, encodeState: { "objective-c": 1 }, JKSERIALIZER_BLOCKS_PROTO: { "objective-c": 1 }, optionFlags: { "objective-c": 1 }, delegate: { "objective-c": 1 }, releaseState: { "objective-c": 1 }, keyHash: { "objective-c": 1 }, least: { "objective-c": 1 }, UTF16: { "objective-c": 1 }, typically: { "objective-c": 1 }, conversionOK: { "objective-c": 1 }, sourceExhausted: { "objective-c": 1 }, partial: { "objective-c": 1 }, character: { "objective-c": 1 }, but: { "objective-c": 1, python: 1, shell: 1 }, hit: { "objective-c": 1 }, targetExhausted: { "objective-c": 1 }, insuff: { "objective-c": 1 }, room: { "objective-c": 1 }, sourceIllegal: { "objective-c": 1 }, illegal: { "objective-c": 1 }, malformed: { "objective-c": 1 }, ConversionResult: { "objective-c": 1 }, UNI_REPLACEMENT_CHAR: { "objective-c": 1 }, "0x0000FFFD": { "objective-c": 1 }, UNI_MAX_BMP: { "objective-c": 1 }, "0x0000FFFF": { "objective-c": 1 }, UNI_MAX_UTF16: { "objective-c": 1 }, "0x0010FFFF": { "objective-c": 1 }, UNI_MAX_UTF32: { "objective-c": 1 }, "0x7FFFFFFF": { "objective-c": 1 }, UNI_MAX_LEGAL_UTF32: { "objective-c": 1 }, UNI_SUR_HIGH_START: { "objective-c": 1 }, "0xD800": { "objective-c": 1 }, UNI_SUR_HIGH_END: { "objective-c": 1 }, "0xDBFF": { "objective-c": 1 }, UNI_SUR_LOW_START: { "objective-c": 1 }, "0xDC00": { "objective-c": 1 }, UNI_SUR_LOW_END: { "objective-c": 1 }, "0xDFFF": { "objective-c": 1 }, offsetsFromUTF8: { "objective-c": 1 }, "0x00000000UL": { "objective-c": 1 }, "0x00003080UL": { "objective-c": 1 }, "0x000E2080UL": { "objective-c": 1 }, "0x03C82080UL": { "objective-c": 1 }, "0xFA082080UL": { "objective-c": 1 }, "0x82082080UL": { "objective-c": 1 }, firstByteMark: { "objective-c": 1 }, "0x00": { "objective-c": 1 }, "0xC0": { "objective-c": 1 }, "0xE0": { "objective-c": 1 }, "0xF0": { "objective-c": 1 }, "0xF8": { "objective-c": 1 }, "0xFC": { "objective-c": 1 }, JK_AT_STRING_PTR: { "objective-c": 1 }, JK_END_STRING_PTR: { "objective-c": 1 }, _JKArrayCreate: { "objective-c": 1 }, mutableCollection: { "objective-c": 1 }, _JKArrayInsertObjectAtIndex: { "objective-c": 1 }, array: { "objective-c": 1, ruby: 1 }, newObject: { "objective-c": 1 }, objectIndex: { "objective-c": 1 }, _JKArrayReplaceObjectAtIndexWithObject: { "objective-c": 1 }, _JKArrayRemoveObjectAtIndex: { "objective-c": 1 }, _JKDictionaryCapacityForCount: { "objective-c": 1 }, _JKDictionaryCreate: { "objective-c": 1 }, keyHashes: { "objective-c": 1 }, _JKDictionaryHashEntry: { "objective-c": 1 }, dictionary: { "objective-c": 1, python: 1 }, _JKDictionaryCapacity: { "objective-c": 1 }, _JKDictionaryResizeIfNeccessary: { "objective-c": 1 }, _JKDictionaryRemoveObjectWithEntry: { "objective-c": 1 }, entry: { "objective-c": 1 }, _JKDictionaryAddObject: { "objective-c": 1 }, _JKDictionaryHashTableEntryForKey: { "objective-c": 1 }, aKey: { "objective-c": 1 }, _JSONDecoderCleanup: { "objective-c": 1 }, JSONDecoder: { "objective-c": 1 }, decoder: { "objective-c": 1 }, _NSStringObjectFromJSONString: { "objective-c": 1 }, NSString: { "objective-c": 1 }, jsonString: { "objective-c": 1 }, jk_managedBuffer_release: { "objective-c": 1 }, managedBuffer: { "objective-c": 1 }, jk_managedBuffer_setToStackBuffer: { "objective-c": 1 }, jk_managedBuffer_resize: { "objective-c": 1 }, newSize: { "objective-c": 1 }, jk_objectStack_release: { "objective-c": 1 }, jk_objectStack_setToStackBuffer: { "objective-c": 1 }, jk_objectStack_resize: { "objective-c": 1 }, newCount: { "objective-c": 1 }, jk_error: { "objective-c": 1 }, parseState: { "objective-c": 1 }, jk_parse_string: { "objective-c": 1 }, jk_parse_number: { "objective-c": 1 }, jk_parse_is_newline: { "objective-c": 1 }, atCharacterPtr: { "objective-c": 1 }, jk_parse_skip_newline: { "objective-c": 1 }, jk_parse_skip_whitespace: { "objective-c": 1 }, jk_parse_next_token: { "objective-c": 1 }, jk_error_parse_accept_or3: { "objective-c": 1 }, or1String: { "objective-c": 1 }, or2String: { "objective-c": 1 }, or3String: { "objective-c": 1 }, jk_create_dictionary: { "objective-c": 1 }, startingObjectIndex: { "objective-c": 1 }, jk_parse_dictionary: { "objective-c": 1 }, jk_parse_array: { "objective-c": 1 }, jk_object_for_token: { "objective-c": 1 }, jk_cachedObjects: { "objective-c": 1 }, jk_cache_age: { "objective-c": 1 }, jk_set_parsed_token: { "objective-c": 1 }, advanceBy: { "objective-c": 1 }, jk_encode_error: { "objective-c": 1 }, jk_encode_printf: { "objective-c": 1 }, cacheSlot: { "objective-c": 1 }, startingAtIndex: { "objective-c": 1 }, jk_encode_write: { "objective-c": 1 }, jk_encode_writePrettyPrintWhiteSpace: { "objective-c": 1 }, jk_encode_write1slow: { "objective-c": 1 }, depthChange: { "objective-c": 1 }, jk_encode_write1fast: { "objective-c": 1 }, jk_encode_writen: { "objective-c": 1 }, jk_encode_object_hash: { "objective-c": 1 }, objectPtr: { "objective-c": 1 }, jk_encode_updateCache: { "objective-c": 1 }, jk_encode_add_atom_to_buffer: { "objective-c": 1 }, jk_encode_write1: { "objective-c": 1 }, dc: { "objective-c": 1 }, _jk_encode_prettyPrint: { "objective-c": 1 }, jk_min: { "objective-c": 1 }, jk_max: { "objective-c": 1 }, jk_calculateHash: { "objective-c": 1 }, currentHash: { "objective-c": 1 }, JKMutableArray: { "objective-c": 1 }, NSMutableArray: { "objective-c": 1 }, collection: { "objective-c": 1 }, Louis: { "objective-c": 1 }, Gerbarg: { "objective-c": 1 }, via: { "objective-c": 1, ruby: 1 }, cocoa: { "objective-c": 1 }, pointed: { "objective-c": 1 }, Core: { "objective-c": 1 }, actually: { "objective-c": 1 }, implements: { "objective-c": 1 }, inherits: { "objective-c": 1 }, mutable: { "objective-c": 1 }, keeps: { "objective-c": 1 }, ivar: { "objective-c": 1 }, whether: { "objective-c": 1, ruby: 1 }, means: { "objective-c": 1 }, immutable: { "objective-c": 1 }, versions: { "objective-c": 1, shell: 1 }, receive: { "objective-c": 1 }, mutating: { "objective-c": 1 }, handled: { "objective-c": 1, python: 1 }, having: { "objective-c": 1 }, those: { "objective-c": 1 }, adopt: { "objective-c": 1 }, strategy: { "objective-c": 1 }, cleaner: { "objective-c": 1 }, gets: { "objective-c": 1 }, rid: { "objective-c": 1 }, swizzling: { "objective-c": 1 }, hackery: { "objective-c": 1 }, workaround: { "objective-c": 1 }, Basically: { "objective-c": 1 }, seem: { "objective-c": 1, shell: 1 }, load: { "objective-c": 1 }, libraries: { "objective-c": 1 }, work: { "objective-c": 1, shell: 1 }, correctly: { "objective-c": 1, shell: 1 }, anything: { "objective-c": 1, shell: 1 }, provides: { "objective-c": 1 }, accomplish: { "objective-c": 1 }, logic: { "objective-c": 1 }, _JKArrayClass: { "objective-c": 1 }, _JKArrayInstanceSize: { "objective-c": 1 }, "0UL": { "objective-c": 1 }, _JKDictionaryClass: { "objective-c": 1 }, _JKDictionaryInstanceSize: { "objective-c": 1 }, _jk_NSNumberClass: { "objective-c": 1 }, _jk_NSNumberAllocImp: { "objective-c": 1 }, _jk_NSNumberInitWithUnsignedLongLongImp: { "objective-c": 1 }, extern: { "objective-c": 1 }, jk_collectionClassLoadTimeInitialization: { "objective-c": 1 }, pool: { "objective-c": 1, python: 1 }, alloc: { "objective-c": 1 }, init: { "objective-c": 1, shell: 1 }, Though: { "objective-c": 1 }, run: { "objective-c": 1, ruby: 1 }, environment: { "objective-c": 1, python: 1 }, initialization: { "objective-c": 1 }, ideal: { "objective-c": 1 }, objc_getClass: { "objective-c": 1 }, class_getInstanceSize: { "objective-c": 1 }, NSNumber: { "objective-c": 1 }, methodForSelector: { "objective-c": 1 }, Hacktacular: { "objective-c": 1 }, due: { "objective-c": 1 }, nature: { "objective-c": 1 }, clusters: { "objective-c": 1 }, temp_NSNumber: { "objective-c": 1 }, initWithUnsignedLongLong: { "objective-c": 1 }, release: { "objective-c": 1, python: 1 }, pragma: { "objective-c": 1 }, NSCopying: { "objective-c": 1 }, NSMutableCopying: { "objective-c": 1 }, NSFastEnumeration: { "objective-c": 1 }, capacity: { "objective-c": 1 }, mutations: { "objective-c": 1 }, implementation: { "objective-c": 1 }, allocWithZone: { "objective-c": 1 }, NSZone: { "objective-c": 1 }, raise: { "objective-c": 1, python: 1, ruby: 1 }, NSInvalidArgumentException: { "objective-c": 1 }, fashion: { "objective-c": 1 }, NSStringFromClass: { "objective-c": 1 }, NSStringFromSelector: { "objective-c": 1 }, _cmd: { "objective-c": 1 }, NSCParameterAssert: { "objective-c": 1 }, calloc: { "objective-c": 1 }, Directly: { "objective-c": 1 }, allocate: { "objective-c": 1 }, isa: { "objective-c": 1 }, autorelease: { "objective-c": 1 }, caller: { "objective-c": 1, ruby: 1 }, responsible: { "objective-c": 1 }, retaining: { "objective-c": 1 }, newObjects: { "objective-c": 1 }, realloc: { "objective-c": 1 }, NSMallocException: { "objective-c": 1 }, Unable: { "objective-c": 1 }, resize: { "objective-c": 1 }, CFRelease: { "objective-c": 1 }, dealloc: { "objective-c": 1 }, atObject: { "objective-c": 1 }, super: { "objective-c": 1 }, NSParameterAssert: { "objective-c": 1 }, getObjects: { "objective-c": 1 }, objectsPtr: { "objective-c": 1 }, NSRange: { "objective-c": 1 }, NSMaxRange: { "objective-c": 1 }, NSRangeException: { "objective-c": 1 }, lu: { "objective-c": 1 }, beyond: { "objective-c": 1 }, __clang_analyzer__: { "objective-c": 1 }, objectAtIndex: { "objective-c": 1 }, countByEnumeratingWithState: { "objective-c": 1 }, NSFastEnumerationState: { "objective-c": 1 }, stackbuf: { "objective-c": 1 }, mutationsPtr: { "objective-c": 1 }, itemsPtr: { "objective-c": 1 }, enumeratedCount: { "objective-c": 1 }, insertObject: { "objective-c": 1 }, anObject: { "objective-c": 1 }, NSInternalInconsistencyException: { "objective-c": 1 }, sent: { "objective-c": 1, python: 1 }, attempt: { "objective-c": 1 }, insert: { "objective-c": 1 }, nil: { "objective-c": 1, ruby: 1 }, Stupid: { "objective-c": 1 }, clang: { "objective-c": 1 }, analyzer: { "objective-c": 1 }, removeObjectAtIndex: { "objective-c": 1 }, replaceObjectAtIndex: { "objective-c": 1 }, withObject: { "objective-c": 1 }, copyWithZone: { "objective-c": 1 }, initWithObjects: { "objective-c": 1 }, mutableCopyWithZone: { "objective-c": 1 }, NSEnumerator: { "objective-c": 1 }, nextObject: { "objective-c": 1 }, initWithJKDictionary: { "objective-c": 1 }, initDictionary: { "objective-c": 1 }, allObjects: { "objective-c": 1 }, CFRetain: { "objective-c": 1 }, arrayWithObjects: { "objective-c": 1 }, returnObject: { "objective-c": 1 }, NSMutableDictionary: { "objective-c": 1 }, CF: { "objective-c": 1 }, CFBasicHash: { "objective-c": 1 }, bonus: { "objective-c": 1 }, very: { "objective-c": 1 }, well: { "objective-c": 1 }, too: { "objective-c": 1 }, jk_dictionaryCapacities: { "objective-c": 1 }, "3UL": { "objective-c": 1 }, "7UL": { "objective-c": 1 }, "13UL": { "objective-c": 1 }, "23UL": { "objective-c": 1 }, "41UL": { "objective-c": 1 }, "71UL": { "objective-c": 1 }, "127UL": { "objective-c": 1 }, "191UL": { "objective-c": 1 }, "251UL": { "objective-c": 1 }, "383UL": { "objective-c": 1 }, "631UL": { "objective-c": 1 }, "1087UL": { "objective-c": 1 }, "1723UL": { "objective-c": 1 }, "2803UL": { "objective-c": 1 }, "4523UL": { "objective-c": 1 }, "7351UL": { "objective-c": 1 }, "11959UL": { "objective-c": 1 }, "19447UL": { "objective-c": 1 }, "31231UL": { "objective-c": 1 }, "50683UL": { "objective-c": 1 }, "81919UL": { "objective-c": 1 }, "132607UL": { "objective-c": 1 }, "214519UL": { "objective-c": 1 }, "346607UL": { "objective-c": 1 }, "561109UL": { "objective-c": 1 }, "907759UL": { "objective-c": 1 }, "1468927UL": { "objective-c": 1 }, "2376191UL": { "objective-c": 1 }, "3845119UL": { "objective-c": 1 }, "6221311UL": { "objective-c": 1 }, "10066421UL": { "objective-c": 1 }, "16287743UL": { "objective-c": 1 }, "26354171UL": { "objective-c": 1 }, "42641881UL": { "objective-c": 1 }, "68996069UL": { "objective-c": 1 }, "111638519UL": { "objective-c": 1 }, "180634607UL": { "objective-c": 1 }, "292272623UL": { "objective-c": 1 }, "472907251UL": { "objective-c": 1 }, mid: { "objective-c": 1 }, tableSize: { "objective-c": 1 }, lround: { "objective-c": 1 }, floor: { "objective-c": 1 }, capacityForCount: { "objective-c": 1 }, oldCapacity: { "objective-c": 1 }, NS_BLOCK_ASSERTIONS: { "objective-c": 1 }, oldCount: { "objective-c": 1 }, oldEntry: { "objective-c": 1 }, memory: { "objective-c": 1, python: 1 }, atEntry: { "objective-c": 1 }, certain: { "objective-c": 1 }, invariants: { "objective-c": 1 }, speed: { "objective-c": 1 }, entries: { "objective-c": 1 }, until: { "objective-c": 1 }, removeIdx: { "objective-c": 1 }, entryIdx: { "objective-c": 1 }, addKeyEntry: { "objective-c": 1 }, addIdx: { "objective-c": 1 }, atAddEntry: { "objective-c": 1 }, keyEntry: { "objective-c": 1 }, CFEqual: { "objective-c": 1 }, never: { "objective-c": 1 }, because: { "objective-c": 1 }, responsibility: { "objective-c": 1 }, CFHash: { "objective-c": 1 }, would: { "objective-c": 1, ruby: 1, shell: 1 }, objectForKey: { "objective-c": 1 }, entryForKey: { "objective-c": 1 }, andKeys: { "objective-c": 1 }, arrayIdx: { "objective-c": 1 }, keyEnumerator: { "objective-c": 1 }, setObject: { "objective-c": 1 }, forKey: { "objective-c": 1 }, Why: { "objective-c": 1 }, earth: { "objective-c": 1 }, complain: { "objective-c": 1 }, leak: { "objective-c": 1 }, doesn: { "objective-c": 1, shell: 1 }, removeObjectForKey: { "objective-c": 1 }, initWithDictionary: { "objective-c": 1 }, va_list: { "objective-c": 1 }, varArgsList: { "objective-c": 1 }, va_start: { "objective-c": 1 }, formatString: { "objective-c": 1 }, initWithFormat: { "objective-c": 1 }, va_end: { "objective-c": 1 }, lineStart: { "objective-c": 1 }, lineEnd: { "objective-c": 1 }, lineString: { "objective-c": 1 }, carretString: { "objective-c": 1 }, initWithBytes: { "objective-c": 1 }, NSUTF8StringEncoding: { "objective-c": 1 }, stringWithFormat: { "objective-c": 1 }, errorWithDomain: { "objective-c": 1 }, JKErrorDomain: { "objective-c": 1 }, "1L": { "objective-c": 1 }, userInfo: { "objective-c": 1 }, dictionaryWithObjectsAndKeys: { "objective-c": 1 }, NSLocalizedDescriptionKey: { "objective-c": 1 }, numberWithUnsignedLong: { "objective-c": 1 }, JKAtIndexKey: { "objective-c": 1 }, JKLineNumberKey: { "objective-c": 1 }, JKErrorLine0Key: { "objective-c": 1 }, JKErrorLine1Key: { "objective-c": 1 }, Stack: { "objective-c": 1 }, management: { "objective-c": 1 }, functions: { "objective-c": 1, python: 1, shell: 1 }, roundedUpNewSize: { "objective-c": 1 }, newBuffer: { "objective-c": 1 }, oldBuffer: { "objective-c": 1 }, reallocf: { "objective-c": 1 }, roundedUpNewCount: { "objective-c": 1 }, returnCode: { "objective-c": 1 }, newKeys: { "objective-c": 1 }, newCFHashes: { "objective-c": 1 }, errorExit: { "objective-c": 1 }, u32CodePoint: { "objective-c": 1 }, finished: { "objective-c": 1 }, "0xFDD0U": { "objective-c": 1 }, "0xFDEFU": { "objective-c": 1 }, "0xFFFEU": { "objective-c": 1 }, "0x10FFFFU": { "objective-c": 1 }, isLegalUTF8: { "objective-c": 1 }, srcptr: { "objective-c": 1 }, falls: { "objective-c": 1 }, "0x80": { "objective-c": 1 }, "0xBF": { "objective-c": 1 }, fall: { "objective-c": 1, python: 1 }, "0xA0": { "objective-c": 1 }, "0xED": { "objective-c": 1 }, "0x9F": { "objective-c": 1 }, "0x90": { "objective-c": 1 }, "0xF4": { "objective-c": 1 }, "0x8F": { "objective-c": 1 }, "0xC2": { "objective-c": 1 }, ConvertSingleCodePointInUTF8: { "objective-c": 1 }, nextUTF8: { "objective-c": 1 }, convertedUTF32: { "objective-c": 1 }, extraBytesToRead: { "objective-c": 1 }, "0xff": { "objective-c": 1 }, "0xc0": { "objective-c": 1 }, ConvertUTF32toUTF8: { "objective-c": 1 }, targetEnd: { "objective-c": 1 }, byteMask: { "objective-c": 1 }, byteMark: { "objective-c": 1 }, bytesToWrite: { "objective-c": 1 }, Figure: { "objective-c": 1 }, many: { "objective-c": 1 }, Turn: { "objective-c": 1 }, illegally: { "objective-c": 1 }, things: { "objective-c": 1, ruby: 1, shell: 1 }, Plane: { "objective-c": 1 }, "0x800": { "objective-c": 1 }, "0x10000": { "objective-c": 1 }, everything: { "objective-c": 1, shell: 1 }, jk_string_add_unicodeCodePoint: { "objective-c": 1 }, unicodeCodePoint: { "objective-c": 1 }, tokenBufferIdx: { "objective-c": 1 }, stringHash: { "objective-c": 1 }, u8s: { "objective-c": 1 }, utf8len: { "objective-c": 1 }, nextIdx: { "objective-c": 1 }, Decoding: { "objective-c": 1 }, deserializing: { "objective-c": 1 }, stringStart: { "objective-c": 1 }, endOfBuffer: { "objective-c": 1 }, atStringCharacter: { "objective-c": 1 }, tokenStartIndex: { "objective-c": 1 }, onlySimpleString: { "objective-c": 1 }, stringState: { "objective-c": 1 }, escapedUnicode1: { "objective-c": 1 }, escapedUnicode2: { "objective-c": 1 }, escapedUnicodeCodePoint: { "objective-c": 1 }, currentChar: { "objective-c": 1 }, XXX: { "objective-c": 1 }, finishedParsing: { "objective-c": 1 }, "0x80UL": { "objective-c": 1 }, nextValidCharacter: { "objective-c": 1 }, u32ch: { "objective-c": 1 }, switchToSlowPath: { "objective-c": 1 }, continue: { "objective-c": 1, shell: 1 }, ld: { "objective-c": 1 }, stringWithUTF8String: { "objective-c": 1 }, __FILE__: { "objective-c": 1 }, __LINE__: { "objective-c": 1 }, slowMatch: { "objective-c": 1 }, "0x20UL": { "objective-c": 1 }, Invalid: { "objective-c": 1, python: 1 }, "0x20": { "objective-c": 1 }, "0x": { "objective-c": 1 }, "2x": { "objective-c": 1 }, escapedChar: { "objective-c": 1 }, Not: { "objective-c": 1 }, JKParseOptionLooseUnicode: { "objective-c": 1 }, Illegal: { "objective-c": 1 }, End: { "objective-c": 1 }, reached: { "objective-c": 1 }, isSurrogate: { "objective-c": 1 }, parsedEscapedChar: { "objective-c": 1 }, hexValue: { "objective-c": 1 }, parsedHex: { "objective-c": 1 }, "10U": { "objective-c": 1 }, "0xD800U": { "objective-c": 1 }, "0xE000U": { "objective-c": 1 }, "0xDC00U": { "objective-c": 1 }, "0xdc00": { "objective-c": 1 }, "0xdfff": { "objective-c": 1 }, "0xd800": { "objective-c": 1 }, "0x400": { "objective-c": 1 }, Unexpected: { "objective-c": 1 }, Found: { "objective-c": 1 }, "9a": { "objective-c": 1 }, fA: { "objective-c": 1 }, Required: { "objective-c": 1 }, surrogate: { "objective-c": 1 }, Unknown: { "objective-c": 1 }, numberStart: { "objective-c": 1 }, atNumberCharacter: { "objective-c": 1 }, numberState: { "objective-c": 1 }, isFloatingPoint: { "objective-c": 1 }, isNegative: { "objective-c": 1 }, backup: { "objective-c": 1 }, startingIndex: { "objective-c": 1 }, lowerCaseCC: { "objective-c": 1 }, numberTempBuf: { "objective-c": 1 }, endOfNumber: { "objective-c": 1 }, Treat: { "objective-c": 1 }, floating: { "objective-c": 1 }, point: { "objective-c": 1 }, capable: { "objective-c": 1 }, representing: { "objective-c": 1, python: 1 }, negative: { "objective-c": 1 }, zeros: { "objective-c": 1 }, strtod: { "objective-c": 1 }, documented: { "objective-c": 1 }, U: { "objective-c": 1 }, identical: { "objective-c": 1 }, underflow: { "objective-c": 1 }, along: { "objective-c": 1 }, setting: { "objective-c": 1, python: 1 }, ERANGE: { "objective-c": 1 }, strtoull: { "objective-c": 1 }, represented: { "objective-c": 1 }, minimum: { "objective-c": 1 }, llu: { "objective-c": 1 }, consume: { "objective-c": 1 }, tokens: { "objective-c": 1 }, characters: { "objective-c": 1, shell: 1 }, hashIndex: { "objective-c": 1 }, endOfStringPtr: { "objective-c": 1 }, JKParseOptionUnicodeNewlines: { "objective-c": 1 }, "0xc2": { "objective-c": 1 }, "0x85": { "objective-c": 1 }, "0xe2": { "objective-c": 1 }, "0xa8": { "objective-c": 1 }, "0xa9": { "objective-c": 1 }, newlineAdvanceAtIndex: { "objective-c": 1 }, JKParseOptionComments: { "objective-c": 1 }, currentCharacter: { "objective-c": 1 }, stopParsing: { "objective-c": 1 }, "5UL": { "objective-c": 1 }, wanted: { "objective-c": 1 }, STRING: { "objective-c": 1 }, NUMBER: { "objective-c": 1 }, acceptStrings: { "objective-c": 1 }, acceptIdx: { "objective-c": 1 }, Expected: { "objective-c": 1 }, arrayState: { "objective-c": 1 }, parsedArray: { "objective-c": 1 }, "128UL": { "objective-c": 1 }, objectsIndex: { "objective-c": 1 }, zu: { "objective-c": 1 }, comma: { "objective-c": 1, shell: 1 }, parsedDictionary: { "objective-c": 1 }, dictState: { "objective-c": 1 }, objectStackIndex: { "objective-c": 1 }, json_parse_it: { "objective-c": 1 }, parsedObject: { "objective-c": 1 }, Reached: { "objective-c": 1 }, JKParseOptionPermitTextAfterValidJSON: { "objective-c": 1 }, additional: { "objective-c": 1 }, Galois: { "objective-c": 1 }, Linear: { "objective-c": 1 }, Feedback: { "objective-c": 1 }, Shift: { "objective-c": 1 }, Register: { "objective-c": 1 }, LFSR: { "objective-c": 1 }, PRNG: { "objective-c": 1 }, pick: { "objective-c": 1 }, NOTE: { "objective-c": 1 }, MUST: { "objective-c": 1 }, initialized: { "objective-c": 1 }, initalized: { "objective-c": 1 }, initWithParseOptions: { "objective-c": 1 }, "0x80200003U": { "objective-c": 1 }, addressing: { "objective-c": 1 }, collision: { "objective-c": 1 }, resolution: { "objective-c": 1 }, bounded: { "objective-c": 1 }, bucket: { "objective-c": 1 }, synonymous: { "objective-c": 1 }, Items: { "objective-c": 1 }, An: { "objective-c": 1 }, incremented: { "objective-c": 1 }, saturating: { "objective-c": 1 }, arithmetic: { "objective-c": 1 }, decremeted: { "objective-c": 1 }, shifts: { "objective-c": 1 }, Thus: { "objective-c": 1 }, managed: { "objective-c": 1 }, AIMD: { "objective-c": 1 }, policy: { "objective-c": 1 }, additive: { "objective-c": 1 }, increase: { "objective-c": 1 }, multiplicative: { "objective-c": 1 }, decrease: { "objective-c": 1 }, calculations: { "objective-c": 1 }, manipulations: { "objective-c": 1 }, branchless: { "objective-c": 1 }, primitive: { "objective-c": 1 }, currently: { "objective-c": 1 }, allows: { "objective-c": 1 }, useable: { "objective-c": 1 }, populated: { "objective-c": 1 }, When: { "objective-c": 1 }, hasn: { "objective-c": 1 }, aged: { "objective-c": 1 }, random: { "objective-c": 1 }, setBucket: { "objective-c": 1 }, useableBucket: { "objective-c": 1 }, parsedAtom: { "objective-c": 1 }, memcmp: { "objective-c": 1 }, hashing: { "objective-c": 1 }, effective: { "objective-c": 1 }, across: { "objective-c": 1 }, different: { "objective-c": 1 }, buckets: { "objective-c": 1 }, relatively: { "objective-c": 1 }, coprime: { "objective-c": 1 }, primes: { "objective-c": 1 }, CFStringCreateWithBytes: { "objective-c": 1 }, kCFStringEncodingUTF8: { "objective-c": 1 }, CFNumberCreate: { "objective-c": 1 }, kCFNumberLongLongType: { "objective-c": 1 }, LLONG_MAX: { "objective-c": 1 }, kCFNumberDoubleType: { "objective-c": 1 }, appropriate: { "objective-c": 1 }, kCFBooleanTrue: { "objective-c": 1 }, kCFBooleanFalse: { "objective-c": 1 }, kCFNull: { "objective-c": 1 }, decoderWithParseOptions: { "objective-c": 1 }, JKParseOptionStrict: { "objective-c": 1 }, JKParseOptionValidFlags: { "objective-c": 1 }, "4096UL": { "objective-c": 1 }, "2048UL": { "objective-c": 1 }, primarily: { "objective-c": 1 }, convenience: { "objective-c": 1 }, autoreleased: { "objective-c": 1 }, most: { "objective-c": 1, python: 1 }, resources: { "objective-c": 1 }, pops: { "objective-c": 1 }, clearCache: { "objective-c": 1 }, needs: { "objective-c": 1 }, completely: { "objective-c": 1 }, rewritten: { "objective-c": 1 }, _JKParseUTF8String: { "objective-c": 1 }, YES: { "objective-c": 1, shell: 1 }, stackTokenBuffer: { "objective-c": 1 }, stackObjects: { "objective-c": 1 }, stackKeys: { "objective-c": 1 }, stackCFHashes: { "objective-c": 1 }, parsedJSON: { "objective-c": 1 }, Deprecated: { "objective-c": 1 }, objectWithUTF8String: { "objective-c": 1 }, parseUTF8String: { "objective-c": 1 }, objectWithData: { "objective-c": 1 }, parseJSONData: { "objective-c": 1 }, jsonData: { "objective-c": 1 }, Methods: { "objective-c": 1 }, mutableObjectWithUTF8String: { "objective-c": 1 }, mutableObjectWithData: { "objective-c": 1 }, little: { "objective-c": 1 }, explanation: { "objective-c": 1 }, Prior: { "objective-c": 1 }, objectFromJSONStringWithParseOptions: { "objective-c": 1 }, looked: { "objective-c": 1 }, utf8String: { "objective-c": 1 }, UTF8String: { "objective-c": 1 }, utf8Length: { "objective-c": 1 }, reason: { "objective-c": 1, python: 1 }, keep: { "objective-c": 1 }, amount: { "objective-c": 1 }, allocated: { "objective-c": 1 }, yet: { "objective-c": 1 }, freed: { "objective-c": 1 }, dependent: { "objective-c": 1 }, reclaimed: { "objective-c": 1 }, simpler: { "objective-c": 1 }, overhead: { "objective-c": 1 }, Now: { "objective-c": 1 }, CFMutableData: { "objective-c": 1 }, sized: { "objective-c": 1 }, question: { "objective-c": 1 }, Once: { "objective-c": 1, python: 1 }, hopefully: { "objective-c": 1 }, allow: { "objective-c": 1, python: 1 }, Another: { "objective-c": 1 }, slight: { "objective-c": 1 }, cleanup: { "objective-c": 1 }, routines: { "objective-c": 1 }, calls: { "objective-c": 1 }, early: { "objective-c": 1 }, decoders: { "objective-c": 1 }, know: { "objective-c": 1 }, going: { "objective-c": 1 }, smoothly: { "objective-c": 1 }, likely: { "objective-c": 1 }, perhaps: { "objective-c": 1 }, hundred: { "objective-c": 1 }, waiting: { "objective-c": 1 }, compared: { "objective-c": 1 }, thousands: { "objective-c": 1 }, easily: { "objective-c": 1 }, hundreds: { "objective-c": 1 }, limbo: { "objective-c": 1 }, us: { "objective-c": 1 }, win: { "objective-c": 1 }, Autorelease: { "objective-c": 1 }, By: { "objective-c": 1 }, effectively: { "objective-c": 1 }, guarantee: { "objective-c": 1 }, requirement: { "objective-c": 1 }, matter: { "objective-c": 1 }, downside: { "objective-c": 1 }, best: { "objective-c": 1, python: 1 }, minimize: { "objective-c": 1 }, balances: { "objective-c": 1 }, JSONKitDeserializing: { "objective-c": 1 }, CFMutableDataRef: { "objective-c": 1 }, mutableData: { "objective-c": 1 }, CFIndex: { "objective-c": 1 }, stringLength: { "objective-c": 1 }, CFStringGetLength: { "objective-c": 1 }, CFStringRef: { "objective-c": 1 }, stringUTF8Length: { "objective-c": 1 }, lengthOfBytesUsingEncoding: { "objective-c": 1 }, CFDataCreateMutable: { "objective-c": 1 }, UInt8: { "objective-c": 1 }, CFDataGetMutableBytePtr: { "objective-c": 1 }, usedBytes: { "objective-c": 1 }, "0L": { "objective-c": 1 }, convertedCount: { "objective-c": 1 }, CFStringGetBytes: { "objective-c": 1 }, CFRangeMake: { "objective-c": 1 }, dictionaryWithObject: { "objective-c": 1 }, occurred: { "objective-c": 1, python: 1 }, converting: { "objective-c": 1 }, exitNow: { "objective-c": 1 }, CFDataSetLength: { "objective-c": 1 }, objectFromJSONString: { "objective-c": 1 }, mutableObjectFromJSONString: { "objective-c": 1 }, mutableObjectFromJSONStringWithParseOptions: { "objective-c": 1 }, objectFromJSONData: { "objective-c": 1 }, objectFromJSONDataWithParseOptions: { "objective-c": 1 }, mutableObjectFromJSONData: { "objective-c": 1 }, mutableObjectFromJSONDataWithParseOptions: { "objective-c": 1 }, Encoding: { "objective-c": 1, python: 1 }, varArgsListCopy: { "objective-c": 1 }, va_copy: { "objective-c": 1 }, formattedStringLength: { "objective-c": 1 }, returnValue: { "objective-c": 1 }, vsnprintf: { "objective-c": 1 }, "256UL": { "objective-c": 1 }, unexpectedly: { "objective-c": 1 }, formatIdx: { "objective-c": 1 }, JKSerializeOptionPretty: { "objective-c": 1 }, depthWhiteSpace: { "objective-c": 1 }, encodeCacheObject: { "objective-c": 1 }, isClass: { "objective-c": 1 }, objectHash: { "objective-c": 1 }, encounter: { "objective-c": 1 }, exactly: { "objective-c": 1 }, ONCE: { "objective-c": 1 }, supplies: { "objective-c": 1 }, supported: { "objective-c": 1 }, fault: { "objective-c": 1 }, rerunningAfterClassFormatter: { "objective-c": 1 }, rerunAfterClassFormatter: { "objective-c": 1 }, around: { "objective-c": 1, shell: 1 }, breaks: { "objective-c": 1 }, ABI: { "objective-c": 1 }, compatibility: { "objective-c": 1, python: 1 }, OpenStep: { "objective-c": 1 }, NextStep: { "objective-c": 1 }, euphemistically: { "objective-c": 1 }, tagged: { "objective-c": 1 }, There: { "objective-c": 1 }, highly: { "objective-c": 1 }, technical: { "objective-c": 1 }, involving: { "objective-c": 1 }, passages: { "objective-c": 1 }, couched: { "objective-c": 1 }, perspective: { "objective-c": 1 }, fundamentally: { "objective-c": 1 }, Wrong: { "objective-c": 1 }, Broken: { "objective-c": 1 }, implemented: { "objective-c": 1 }, Assuming: { "objective-c": 1 }, glossed: { "objective-c": 1 }, over: { "objective-c": 1, python: 1, shell: 1 }, clearly: { "objective-c": 1 }, breaking: { "objective-c": 1 }, resulted: { "objective-c": 1 }, bump: { "objective-c": 1 }, various: { "objective-c": 1 }, prevent: { "objective-c": 1 }, causes: { "objective-c": 1 }, fine: { "objective-c": 1 }, suddenly: { "objective-c": 1 }, fact: { "objective-c": 1 }, says: { "objective-c": 1 }, behavior: { "objective-c": 1 }, lower: { "objective-c": 1 }, preserved: { "objective-c": 1 }, casting: { "objective-c": 1 }, integer: { "objective-c": 1 }, works: { "objective-c": 1, ruby: 1 }, compiler: { "objective-c": 1 }, informal: { "objective-c": 1 }, meant: { "objective-c": 1 }, normative: { "objective-c": 1 }, pedantically: { "objective-c": 1 }, correct: { "objective-c": 1 }, words: { "objective-c": 1 }, obligated: { "objective-c": 1 }, produce: { "objective-c": 1 }, earlier: { "objective-c": 1 }, statement: { "objective-c": 1 }, Fan: { "objective-c": 1 }, fucking: { "objective-c": 1 }, tastic: { "objective-c": 1 }, object_getClass: { "objective-c": 1 }, Because: { "objective-c": 1 }, reduces: { "objective-c": 1 }, Calling: { "objective-c": 1 }, potentially: { "objective-c": 1 }, spill: { "objective-c": 1 }, registers: { "objective-c": 1 }, establish: { "objective-c": 1 }, finally: { "objective-c": 1 }, subroutine: { "objective-c": 1 }, Then: { "objective-c": 1 }, spend: { "objective-c": 1 }, half: { "objective-c": 1, shell: 1 }, dozen: { "objective-c": 1 }, however: { "objective-c": 1 }, doing: { "objective-c": 1 }, whatever: { "objective-c": 1, python: 1 }, One: { "objective-c": 1 }, dozens: { "objective-c": 1 }, maybe: { "objective-c": 1 }, Yes: { "objective-c": 1, shell: 1 }, orders: { "objective-c": 1 }, magnitude: { "objective-c": 1 }, Which: { "objective-c": 1 }, compelling: { "objective-c": 1 }, own: { "objective-c": 1, python: 1 }, performance: { "objective-c": 1 }, often: { "objective-c": 1 }, happy: { "objective-c": 1 }, gains: { "objective-c": 1 }, workAroundMacOSXABIBreakingBug: { "objective-c": 1 }, "0x1": { "objective-c": 1 }, objectISA: { "objective-c": 1 }, slowClassLookup: { "objective-c": 1 }, isKindOfClass: { "objective-c": 1 }, returned: { "objective-c": 1, python: 1 }, formatter: { "objective-c": 1, ruby: 1 }, Original: { "objective-c": 1 }, benefit: { "objective-c": 1 }, optimizer: { "objective-c": 1 }, loop: { "objective-c": 1, shell: 1 }, invariant: { "objective-c": 1 }, motion: { "objective-c": 1 }, printing: { "objective-c": 1 }, macro: { "objective-c": 1 }, cStringPtr: { "objective-c": 1 }, CFStringGetCStringPtr: { "objective-c": 1 }, kCFStringEncodingMacRoman: { "objective-c": 1 }, utf8Idx: { "objective-c": 1 }, "0x80U": { "objective-c": 1 }, slowUTF8Path: { "objective-c": 1 }, "0x20U": { "objective-c": 1 }, JKSerializeOptionEscapeForwardSlashes: { "objective-c": 1 }, maxStringUTF8Length: { "objective-c": 1 }, CFStringGetMaximumSizeForEncoding: { "objective-c": 1 }, "32L": { "objective-c": 1 }, "16L": { "objective-c": 1 }, JKSerializeOptionEscapeUnicode: { "objective-c": 1 }, "0xffffU": { "objective-c": 1 }, "0xd7c0U": { "objective-c": 1 }, "0xdc00U": { "objective-c": 1 }, "0x3ffU": { "objective-c": 1 }, objCType: { "objective-c": 1 }, anum: { "objective-c": 1 }, aptr: { "objective-c": 1 }, ullv: { "objective-c": 1 }, llv: { "objective-c": 1 }, CFNumberGetValue: { "objective-c": 1 }, CFNumberRef: { "objective-c": 1 }, "0LL": { "objective-c": 1 }, convertNumber: { "objective-c": 1 }, scalar: { "objective-c": 1 }, L: { "objective-c": 1 }, Q: { "objective-c": 1 }, B: { "objective-c": 1 }, "10ULL": { "objective-c": 1 }, "0ULL": { "objective-c": 1 }, dv: { "objective-c": 1 }, isfinite: { "objective-c": 1 }, Floating: { "objective-c": 1 }, finite: { "objective-c": 1 }, NaN: { "objective-c": 1 }, Infinity: { "objective-c": 1 }, "17g": { "objective-c": 1 }, printComma: { "objective-c": 1 }, arrayCount: { "objective-c": 1 }, CFArrayGetCount: { "objective-c": 1 }, CFArrayRef: { "objective-c": 1 }, "1020L": { "objective-c": 1 }, arrayObject: { "objective-c": 1 }, CFArrayGetValues: { "objective-c": 1 }, dictionaryCount: { "objective-c": 1 }, CFDictionaryGetCount: { "objective-c": 1 }, CFDictionaryRef: { "objective-c": 1 }, enumerateObject: { "objective-c": 1 }, allKeys: { "objective-c": 1 }, sortedArrayUsingSelector: { "objective-c": 1 }, keyObject: { "objective-c": 1 }, keyObjectISA: { "objective-c": 1 }, CFDictionaryGetValue: { "objective-c": 1 }, CFDictionaryGetKeysAndValues: { "objective-c": 1 }, respondsToSelector: { "objective-c": 1 }, serializeUnsupportedClassesUsingDelegate: { "objective-c": 1 }, "32UL": { "objective-c": 1 }, stackJSONBuffer: { "objective-c": 1 }, stackUTF8Buffer: { "objective-c": 1 }, stackBuffer: { "objective-c": 1 }, CFDataCreate: { "objective-c": 1 }, CFDataCreateWithBytesNoCopy: { "objective-c": 1 }, CFStringCreateWithBytesNoCopy: { "objective-c": 1 }, encode: { "objective-c": 1, python: 1 }, JSONKitSerializing: { "objective-c": 1 }, serializing: { "objective-c": 1 }, Useful: { "objective-c": 1 }, who: { "objective-c": 1 }, Otherwise: { "objective-c": 1, ruby: 1 }, arrayWithObject: { "objective-c": 1 }, stringToBeJSONSerialized: { "objective-c": 1 }, chopping: { "objective-c": 1 }, square: { "objective-c": 1 }, brackets: { "objective-c": 1 }, returning: { "objective-c": 1 }, JSONData: { "objective-c": 1 }, JSONDataWithOptions: { "objective-c": 1 }, JKSerializeOptionNone: { "objective-c": 1 }, includeQuotes: { "objective-c": 1 }, serializeOptions: { "objective-c": 1 }, JSONString: { "objective-c": 1 }, JSONStringWithOptions: { "objective-c": 1 }, JSONKitSerializingBlockAdditions: { "objective-c": 1 }, serializeUnsupportedClassesUsingBlock: { "objective-c": 1 }, coding: { python: 1 }, requests: { python: 1 }, models: { python: 1 }, Requests: { python: 1 }, os: { python: 1 }, socket: { python: 1 }, datetime: { python: 1 }, io: { python: 1, shell: 1 }, BytesIO: { python: 1 }, dispatch_hook: { python: 1 }, HOOKS: { python: 1 }, structures: { python: 1 }, CaseInsensitiveDict: { python: 1 }, status_codes: { python: 1 }, codes: { python: 1 }, auth: { python: 1 }, HTTPBasicAuth: { python: 1 }, HTTPProxyAuth: { python: 1 }, cookies: { python: 1 }, cookiejar_from_dict: { python: 1 }, extract_cookies_to_jar: { python: 1 }, get_cookie_header: { python: 1 }, packages: { python: 1 }, urllib3: { python: 1 }, exceptions: { python: 1 }, MaxRetryError: { python: 1 }, LocationParseError: { python: 1 }, TimeoutError: { python: 1 }, SSLError: { python: 1 }, _SSLError: { python: 1 }, HTTPError: { python: 1 }, _HTTPError: { python: 1 }, connectionpool: { python: 1 }, poolmanager: { python: 1 }, filepost: { python: 1 }, encode_multipart_formdata: { python: 1 }, SCHEMAS: { python: 1 }, ConnectionError: { python: 1 }, RequestException: { python: 1 }, Timeout: { python: 1 }, TooManyRedirects: { python: 1 }, URLRequired: { python: 1 }, MissingSchema: { python: 1 }, InvalidSchema: { python: 1 }, InvalidURL: { python: 1 }, utils: { python: 1 }, get_encoding_from_headers: { python: 1 }, stream_untransfer: { python: 1 }, guess_filename: { python: 1 }, requote_uri: { python: 1 }, stream_decode_response_unicode: { python: 1 }, get_netrc_auth: { python: 1 }, get_environ_proxies: { python: 1 }, to_key_val_list: { python: 1 }, DEFAULT_CA_BUNDLE_PATH: { python: 1 }, parse_header_links: { python: 1 }, iter_slices: { python: 1 }, guess_json_utf: { python: 1 }, compat: { python: 1 }, cookielib: { python: 1 }, urlparse: { python: 1 }, urlunparse: { python: 1 }, urljoin: { python: 1 }, urlsplit: { python: 1 }, urlencode: { python: 1 }, StringIO: { python: 1 }, is_py2: { python: 1 }, chardet: { python: 1 }, builtin_str: { python: 1 }, urldefrag: { python: 1 }, basestring: { python: 1 }, REDIRECT_STATI: { python: 1 }, temporary_moved: { python: 1 }, CONTENT_CHUNK_SIZE: { python: 1 }, carries: { python: 1 }, functionality: { python: 1, ruby: 1 }, Recommended: { python: 1 }, __init__: { python: 1 }, None: { python: 1 }, dict: { python: 1 }, redirect: { python: 1 }, False: { python: 1 }, allow_redirects: { python: 1 }, proxies: { python: 1 }, config: { python: 1 }, prefetch: { python: 1 }, True: { python: 1 }, _poolmanager: { python: 1 }, verify: { python: 1 }, session: { python: 1 }, cert: { python: 1 }, Dictionary: { python: 1 }, configurations: { python: 1 }, Float: { python: 1 }, describes: { python: 1 }, setdefaulttimeout: { python: 1 }, representations: { python: 1 }, NameError: { python: 1 }, UnicodeDecodeError: { python: 1 }, HTTP: { python: 1 }, attach: { python: 1 }, Method: { python: 1 }, lists: { python: 1 }, multivalued: { python: 1 }, chain: { python: 1 }, disables: { python: 1 }, storage: { python: 1, shell: 1 }, redirects: { python: 1 }, allowed: { python: 1 }, ing: { python: 1 }, Location: { python: 1 }, proxy: { python: 1 }, proxy_type: { python: 1 }, uri_ref: { python: 1 }, configuration: { python: 1 }, variables: { python: 1 }, HTTP_PROXY: { python: 1 }, HTTPS_PROXY: { python: 1 }, trust_env: { python: 1 }, metadata: { python: 1, shell: 1 }, once: { python: 1 }, Authentication: { python: 1 }, tuple: { python: 1 }, CookieJar: { python: 1 }, isinstance: { python: 1 }, Event: { python: 1 }, handling: { python: 1 }, event: { python: 1 }, register_hook: { python: 1 }, hook: { python: 1 }, Session: { python: 1 }, SSL: { python: 1 }, Verification: { python: 1 }, Certificate: { python: 1 }, Prefetch: { python: 1 }, configured: { python: 1 }, base_headers: { python: 1 }, __repr__: { python: 1 }, _build_response: { python: 1 }, resp: { python: 1 }, build: { python: 1 }, Pass: { python: 1 }, Fallback: { python: 1 }, status_code: { python: 1 }, getattr: { python: 1 }, insensitive: { python: 1 }, server: { python: 1 }, Don: { python: 1 }, store_cookies: { python: 1 }, Save: { python: 1 }, cookie: { python: 1 }, set_cookie: { python: 1 }, harmed: { python: 1 }, making: { python: 1 }, full_url: { python: 1 }, decode: { python: 1 }, see_other: { python: 1 }, Consume: { python: 1 }, released: { python: 1 }, max_redirects: { python: 1 }, Release: { python: 1 }, connection: { python: 1 }, release_conn: { python: 1 }, append: { python: 1 }, redirection: { python: 1 }, scheme: { python: 1 }, Section: { python: 1 }, startswith: { python: 1 }, parsed_rurl: { python: 1 }, Facilitate: { python: 1 }, RFC2616: { python: 1 }, compliant: { python: 1 }, resource: { python: 1 }, domain: { python: 1 }, tld: { python: 1 }, netloc: { python: 1 }, Compliant: { python: 1 }, RFC3986: { python: 1 }, w3: { python: 1 }, Protocols: { python: 1 }, rfc2616: { python: 1 }, sec10: { python: 1 }, Do: { python: 1 }, browsers: { python: 1 }, strict_mode: { python: 1 }, Remove: { python: 1, ruby: 1 }, Cookie: { python: 1 }, KeyError: { python: 1 }, staticmethod: { python: 1 }, _encode_params: { python: 1 }, piece: { python: 1 }, Will: { python: 1 }, successfully: { python: 1 }, tuples: { python: 1 }, Order: { python: 1 }, retained: { python: 1 }, abritrary: { python: 1 }, elif: { python: 1 }, hasattr: { python: 1 }, __iter__: { python: 1 }, vs: { python: 1 }, doseq: { python: 1 }, _encode_files: { python: 1 }, new_fields: { python: 1 }, fp: { python: 1 }, property: { python: 1 }, paths: { python: 1 }, fragment: { python: 1 }, schema: { python: 1 }, idna: { python: 1 }, UnicodeError: { python: 1 }, enc_params: { python: 1 }, encode_uri: { python: 1 }, path_url: { python: 1 }, Proxies: { python: 1 }, URLs: { python: 1 }, url_base: { python: 1 }, frag: { python: 1 }, Properly: { python: 1 }, register: { python: 1 }, callable: { python: 1 }, extend: { python: 1 }, deregister_hook: { python: 1 }, Deregister: { python: 1 }, previously: { python: 1, shell: 1 }, registered: { python: 1 }, Returns: { python: 1, ruby: 1 }, existed: { python: 1 }, ValueError: { python: 1 }, anyway: { python: 1 }, Sends: { python: 1 }, during: { python: 1 }, transmission: { python: 1 }, contain: { python: 1 }, override: { python: 1 }, Pre: { python: 1 }, pre_request: { python: 1 }, __dict__: { python: 1 }, update: { python: 1 }, Logging: { python: 1 }, verbose: { python: 1, ruby: 1 }, isoformat: { python: 1 }, netrc: { python: 1 }, basic: { python: 1 }, Allow: { python: 1 }, Update: { python: 1 }, reflect: { python: 1 }, Nottin: { python: 1 }, wasn: { python: 1 }, explicitly: { python: 1 }, _p: { python: 1 }, no_proxy: { python: 1 }, lambda: { python: 1, ruby: 1 }, strip: { python: 1, shell: 1 }, hostname: { python: 1 }, endswith: { python: 1 }, conn: { python: 1 }, proxy_from_url: { python: 1 }, _proxy: { python: 1 }, proxy_auth: { python: 1 }, keep_alive: { python: 1 }, connection_from_url: { python: 1 }, Connection: { python: 1 }, cert_loc: { python: 1 }, Look: { python: 1 }, environ: { python: 1 }, REQUESTS_CA_BUNDLE: { python: 1 }, Curl: { python: 1 }, CURL_CA_BUNDLE: { python: 1 }, Could: { python: 1 }, suitable: { python: 1 }, CA: { python: 1 }, certificate: { python: 1 }, bundle: { python: 1 }, cert_reqs: { python: 1 }, CERT_REQUIRED: { python: 1 }, ca_certs: { python: 1 }, CERT_NONE: { python: 1 }, cert_file: { python: 1 }, key_file: { python: 1 }, Skip: { python: 1 }, cookie_header: { python: 1 }, pre_send: { python: 1 }, urlopen: { python: 1 }, assert_same_host: { python: 1 }, preload_content: { python: 1 }, decode_content: { python: 1 }, retries: { python: 1 }, max_retries: { python: 1 }, sockerr: { python: 1 }, timed: { python: 1 }, build_response: { python: 1 }, Post: { python: 1 }, post_request: { python: 1 }, consumed: { python: 1 }, danger_mode: { python: 1 }, raise_for_status: { python: 1 }, _content: { python: 1 }, _content_consumed: { python: 1 }, responded: { python: 1 }, Case: { python: 1 }, File: { python: 1, ruby: 1 }, Final: { python: 1 }, Resulting: { python: 1 }, accessing: { python: 1 }, responses: { python: 1 }, sorted: { python: 1 }, oldest: { python: 1 }, recent: { python: 1 }, created: { python: 1 }, Cookies: { python: 1 }, __bool__: { python: 1 }, OK: { python: 1 }, __nonzero__: { python: 1 }, iter_content: { python: 1 }, chunk_size: { python: 1 }, decode_unicode: { python: 1 }, Iterates: { python: 1 }, avoids: { python: 1 }, reading: { python: 1 }, chunk: { python: 1 }, necessarily: { python: 1 }, each: { python: 1, ruby: 1 }, decoding: { python: 1 }, take: { python: 1 }, place: { python: 1 }, simulate: { python: 1 }, chunks: { python: 1 }, generate: { python: 1, ruby: 1 }, yield: { python: 1, ruby: 1 }, gen: { python: 1 }, iter_lines: { python: 1 }, splitlines: { python: 1 }, RuntimeError: { python: 1 }, AttributeError: { python: 1 }, exhausted: { python: 1 }, guessed: { python: 1 }, Try: { python: 1 }, detected: { python: 1 }, detect: { python: 1 }, Decode: { python: 1 }, errors: { python: 1 }, LookupError: { python: 1 }, raised: { python: 1 }, indicate: { python: 1 }, misspelling: { python: 1 }, similar: { python: 1 }, mistake: { python: 1 }, So: { python: 1 }, blindly: { python: 1 }, encoded: { python: 1 }, Detect: { python: 1 }, detection: { python: 1 }, fails: { python: 1 }, guess: { python: 1 }, loads: { python: 1, shell: 1 }, MultiDict: { python: 1 }, Reason: { python: 1 }, Raises: { python: 1, ruby: 1 }, stored: { python: 1 }, URLError: { python: 1 }, http_error_msg: { python: 1 }, Redirection: { python: 1 }, Client: { python: 1 }, http_error: { python: 1 }, optparse: { ruby: 1 }, Commander: { ruby: 1 }, Runner: { ruby: 1 }, Exceptions: { ruby: 1 }, CommandError: { ruby: 1 }, StandardError: { ruby: 1 }, InvalidCommandError: { ruby: 1 }, Array: { ruby: 1 }, commands: { ruby: 1 }, attr_reader: { ruby: 1 }, Hash: { ruby: 1 }, aliases: { ruby: 1, shell: 1 }, help_formatter_aliases: { ruby: 1 }, runner: { ruby: 1 }, Optionally: { ruby: 1 }, supplying: { ruby: 1 }, _args_: { ruby: 1 }, mocking: { ruby: 1 }, arbitrary: { ruby: 1 }, initialize: { ruby: 1 }, ARGV: { ruby: 1 }, help_formatter_alias_defaults: { ruby: 1 }, program_defaults: { ruby: 1 }, create_default_commands: { ruby: 1 }, singleton: { ruby: 1 }, Run: { ruby: 1 }, execution: { ruby: 1 }, trace: { ruby: 1 }, require_program: { ruby: 1 }, trap: { ruby: 1 }, INT: { ruby: 1 }, int_message: { ruby: 1 }, int_block: { ruby: 1 }, global_option: { ruby: 1 }, Display: { ruby: 1 }, say: { ruby: 1, shell: 1 }, backtrace: { ruby: 1 }, occurs: { ruby: 1 }, parse_global_options: { ruby: 1 }, remove_global_options: { ruby: 1 }, unless: { ruby: 1 }, run_active_command: { ruby: 1 }, rescue: { ruby: 1 }, OptionParser: { ruby: 1 }, InvalidOption: { ruby: 1 }, InvalidArgument: { ruby: 1 }, MissingArgument: { ruby: 1 }, to_s: { ruby: 1 }, view: { ruby: 1 }, Assign: { ruby: 1 }, utility: { ruby: 1 }, Anything: { ruby: 1 }, Bye: { ruby: 1 }, help_formatter: { ruby: 1 }, compact: { ruby: 1 }, HelpFormatter: { ruby: 1 }, TerminalCompact: { ruby: 1 }, Keys: { ruby: 1 }, triple: { ruby: 1 }, ex: { ruby: 1 }, basename: { ruby: 1, shell: 1 }, executable: { ruby: 1 }, Defaults: { ruby: 1 }, Terminal: { ruby: 1 }, Allows: { ruby: 1 }, blocks: { ruby: 1 }, Message: { ruby: 1 }, interrupted: { ruby: 1 }, CTRL: { ruby: 1 }, elsif: { ruby: 1 }, Creates: { ruby: 1 }, yields: { ruby: 1 }, raising: { ruby: 1 }, exist: { ruby: 1 }, my_command: { ruby: 1 }, when_called: { ruby: 1 }, add_command: { ruby: 1 }, follows: { ruby: 1 }, switches: { ruby: 1 }, separate_switches_from_description: { ruby: 1 }, proc: { ruby: 1 }, Alias: { ruby: 1 }, _name_: { ruby: 1 }, _alias_name_: { ruby: 1 }, being: { ruby: 1, shell: 1 }, straight: { ruby: 1 }, alias_command: { ruby: 1 }, alias_name: { ruby: 1 }, default_command: { ruby: 1 }, command_exists: { ruby: 1 }, stopdoc: { ruby: 1 }, active_command: { ruby: 1 }, __active_command: { ruby: 1 }, command_name_from_args: { ruby: 1 }, Attempts: { ruby: 1 }, locate: { ruby: 1 }, Supports: { ruby: 1 }, largest: { ruby: 1 }, possible: { ruby: 1 }, match: { ruby: 1 }, __command_name_from_args: { ruby: 1 }, valid_command_names_from: { ruby: 1 }, dup: { ruby: 1 }, arg_string: { ruby: 1 }, delete_if: { ruby: 1 }, find_all: { ruby: 1 }, __help_formatter: { ruby: 1 }, args_without_command_name: { ruby: 1 }, essentially: { ruby: 1 }, enable_paging: { ruby: 1 }, render: { ruby: 1 }, require_valid_command: { ruby: 1 }, render_command: { ruby: 1 }, _command_: { ruby: 1 }, _options_: { ruby: 1 }, prevents: { ruby: 1 }, occurring: { ruby: 1 }, flipflop: { ruby: 1 }, please: { ruby: 1, shell: 1 }, switchHasArg: { ruby: 1 }, past_switch: { ruby: 1 }, arg_removed: { ruby: 1 }, inject: { ruby: 1 }, global_option_proc: { ruby: 1 }, offending: { ruby: 1 }, reject: { ruby: 1 }, allowing: { ruby: 1 }, throughout: { ruby: 1 }, proxy_options: { ruby: 1 }, switch_to_sym: { ruby: 1 }, _keys_: { ruby: 1 }, separated: { ruby: 1, shell: 1 }, is_a: { ruby: 1 }, symbol: { ruby: 1 }, some_switch: { ruby: 1 }, FILE: { ruby: 1 }, scan: { ruby: 1 }, to_sym: { ruby: 1 }, nodoc: { ruby: 1 }, composure: { shell: 1 }, erichs: { shell: 1 }, hearted: { shell: 1 }, intuitive: { shell: 1 }, shell: { shell: 1 }, programming: { shell: 1 }, install: { shell: 1 }, SHELL: { shell: 1 }, rc: { shell: 1 }, latest: { shell: 1 }, git: { shell: 1 }, known: { shell: 1 }, bash: { shell: 1 }, zsh: { shell: 1 }, ksh93: { shell: 1 }, plumbing: { shell: 1 }, composure_keywords: { shell: 1 }, echo: { shell: 1 }, letterpress: { shell: 1 }, typeset: { shell: 1 }, rightcol: { shell: 1 }, leftcol: { shell: 1 }, fi: { shell: 1 }, "20s": { shell: 1 }, transcribe: { shell: 1 }, func: { shell: 1 }, operation: { shell: 1 }, cd: { shell: 1 }, rev: { shell: 1 }, Oops: { shell: 1 }, inc: { shell: 1 }, USE_COMPOSURE_REPO: { shell: 1 }, yes: { shell: 1 }, creating: { shell: 1 }, mkdir: { shell: 1 }, stores: { shell: 1 }, README: { shell: 1 }, initial: { shell: 1 }, N: { shell: 1 }, export: { shell: 1 }, startup: { shell: 1 }, disable: { shell: 1 }, sorry: { shell: 1 }, didn: { shell: 1 }, esac: { shell: 1 }, typeset_functions: { shell: 1 }, unfortunately: { shell: 1 }, easy: { shell: 1 }, portable: { shell: 1 }, assume: { shell: 1 }, ll: { shell: 1 }, harder: { shell: 1 }, StackOverflow: { shell: 1 }, ps: { shell: 1 }, listing: { shell: 1 }, print: { shell: 1 }, CMD: { shell: 1 }, stripping: { shell: 1 }, hyphens: { shell: 1 }, throws: { shell: 1 }, ans: { shell: 1 }, sed: { shell: 1 }, awk: { shell: 1 }, ksh: { shell: 1 }, bootstrap: { shell: 1 }, keywords: { shell: 1 }, porcelain: { shell: 1 }, eval: { shell: 1 }, unset: { shell: 1 }, creates: { shell: 1 }, somewhere: { shell: 1 }, alice: { shell: 1 }, dynamic: { shell: 1 }, wrappers: { shell: 1 }, NOP: { shell: 1 }, keyword: { shell: 1 }, positional: { shell: 1 }, parameter: { shell: 1 }, stay: { shell: 1 }, resident: { shell: 1 }, ENV: { shell: 1 }, opposed: { shell: 1 }, BIG: { shell: 1 }, caveat: { shell: 1 }, roughly: { shell: 1 }, parsable: { shell: 1 }, contractions: { shell: 1 }, consider: { shell: 1 }, quoting: { shell: 1 }, alphanumeric: { shell: 1 }, draft: { shell: 1 }, wraps: { shell: 1 }, ls: { shell: 1 }, newfunc: { shell: 1 }, bind: { shell: 1 }, tighter: { shell: 1 }, disallow: { shell: 1 }, grep: { shell: 1 }, another: { shell: 1 }, fc: { shell: 1 }, fix: { shell: 1 }, corrective: { shell: 1 }, lenses: { shell: 1 }, myopic: { shell: 1 }, ln: { shell: 1 }, digit: { shell: 1 }, mktemp: { shell: 1 }, tmp: { shell: 1 }, XXXX: { shell: 1 }, rm: { shell: 1 }, glossary: { shell: 1 }, displays: { shell: 1 }, misc: { shell: 1 }, targetgroup: { shell: 1 }, metafor: { shell: 1 }, skip: { shell: 1 }, matching: { shell: 1 }, prints: { shell: 1 }, fu: { shell: 1 }, retrieval: { shell: 1 }, ignore: { shell: 1 }, thru: { shell: 1 }, apidoc: { shell: 1 }, revise: { shell: 1 }, examples: { shell: 1 }, revision: { shell: 1 }, myfunction: { shell: 1 }, populate: { shell: 1 }, tempfile: { shell: 1 }, cat: { shell: 1 }, versioned: { shell: 1 }, EDITOR: { shell: 1 }, edited: { shell: 1 }, composed: { shell: 1 }, stdout: { shell: 1 }, finddown: { shell: 1 }, END: { shell: 1 }, enable: { shell: 1 }, EOF: { shell: 1 }, MIT: { shell: 1 }, Erich: { shell: 1 }, Smith: { shell: 1 }, usr: { shell: 1 }, holman: { shell: 1 }, Generates: { shell: 1 }, sparklines: { shell: 1 }, generator: { shell: 1 }, inspiration: { shell: 1 }, datacollective: { shell: 1 }, sparkblocks: { shell: 1 }, takes: { shell: 1 }, Prints: { shell: 1 }, USAGE: { shell: 1 }, VALUE: { shell: 1 }, EXAMPLES: { shell: 1 }, "0xffffffff": { shell: 1 }, Linux: { shell: 1 }, bash4: { shell: 1 }, "0f": { shell: 1 }, round: { shell: 1 }, OS: { shell: 1 }, bash3: { shell: 1 }, cut: { shell: 1 }, ticks: { shell: 1 }, sourced: { shell: 1 }, worry: { shell: 1 }, BASH_SOURCE: { shell: 1 }, eq: { shell: 1 }, stdin: { shell: 1 } } };
  }
});

// node_modules/language-classifier/index.js
var require_language_classifier = __commonJS({
  "node_modules/language-classifier/index.js"(exports, module) {
    var Bayesian = require_bayesian().Bayesian;
    var memory = require_memory2();
    var classifier = new Bayesian();
    classifier.fromJSON(memory);
    module.exports = classifier.classify.bind(classifier);
  }
});

// node_modules/language-detect/vendor/aliases.json
var require_aliases = __commonJS({
  "node_modules/language-detect/vendor/aliases.json"(exports, module) {
    module.exports = {
      ags: "AGS Script",
      aspx: "ASP",
      "aspx-vb": "ASP",
      ats2: "ATS",
      "actionscript 3": "ActionScript",
      actionscript3: "ActionScript",
      as3: "ActionScript",
      ada95: "Ada",
      ada2005: "Ada",
      aconf: "ApacheConf",
      apache: "ApacheConf",
      osascript: "AppleScript",
      nasm: "Assembly",
      ahk: "AutoHotkey",
      au3: "AutoIt",
      AutoIt3: "AutoIt",
      AutoItScript: "AutoIt",
      bat: "Batchfile",
      batch: "Batchfile",
      dosbatch: "Batchfile",
      winbatch: "Batchfile",
      b3d: "BlitzBasic",
      blitz3d: "BlitzBasic",
      blitzplus: "BlitzBasic",
      bplus: "BlitzBasic",
      bmax: "BlitzMax",
      csharp: "C#",
      cpp: "C++",
      c2hs: "C2hs Haskell",
      Carto: "CartoCSS",
      chpl: "Chapel",
      coffee: "CoffeeScript",
      "coffee-script": "CoffeeScript",
      cfm: "ColdFusion",
      cfml: "ColdFusion",
      "coldfusion html": "ColdFusion",
      cfc: "ColdFusion CFC",
      lisp: "Common Lisp",
      delphi: "Component Pascal",
      objectpascal: "Component Pascal",
      "c++-objdumb": "Cpp-ObjDump",
      gherkin: "Cucumber",
      pyrex: "Cython",
      dcl: "DIGITAL Command Language",
      byond: "DM",
      "dtrace-script": "DTrace",
      dpatch: "Darcs Patch",
      udiff: "Diff",
      elisp: "Emacs Lisp",
      emacs: "Emacs Lisp",
      fsharp: "F#",
      "xml+genshi": "Genshi",
      "xml+kid": "Genshi",
      pot: "Gettext Catalog",
      gf: "Grammatical Framework",
      nroff: "Groff",
      gsp: "Groovy Server Pages",
      "java server page": "Groovy Server Pages",
      xhtml: "HTML",
      "html+django/jinja": "HTML+Django",
      "html+jinja": "HTML+Django",
      htmldjango: "HTML+Django",
      erb: "HTML+ERB",
      hbs: "Handlebars",
      htmlbars: "Handlebars",
      hylang: "Hy",
      igor: "IGOR Pro",
      igorpro: "IGOR Pro",
      dosini: "INI",
      irc: "IRC log",
      "irc logs": "IRC log",
      i7: "Inform 7",
      inform7: "Inform 7",
      jsp: "Java Server Pages",
      js: "JavaScript",
      node: "JavaScript",
      lassoscript: "Lasso",
      flex: "Lex",
      litcoffee: "Literate CoffeeScript",
      lhaskell: "Literate Haskell",
      lhs: "Literate Haskell",
      "live-script": "LiveScript",
      ls: "LiveScript",
      mumps: "M",
      bsdmake: "Makefile",
      make: "Makefile",
      mf: "Makefile",
      mma: "Mathematica",
      "max/msp": "Max",
      maxmsp: "Max",
      "nginx configuration file": "Nginx",
      nixos: "Nix",
      nush: "Nu",
      "obj-c": "Objective-C",
      objc: "Objective-C",
      objectivec: "Objective-C",
      "obj-c++": "Objective-C++",
      "objc++": "Objective-C++",
      "objectivec++": "Objective-C++",
      "obj-j": "Objective-J",
      objectivej: "Objective-J",
      objj: "Objective-J",
      progress: "OpenEdge ABL",
      openedge: "OpenEdge ABL",
      abl: "OpenEdge ABL",
      inc: "PHP",
      pasm: "Parrot Assembly",
      pir: "Parrot Internal Representation",
      postscr: "PostScript",
      posh: "PowerShell",
      protobuf: "Protocol Buffer",
      "Protocol Buffers": "Protocol Buffer",
      rusthon: "Python",
      R: "R",
      Rscript: "R",
      splus: "R",
      "html+ruby": "RHTML",
      "ragel-rb": "Ragel in Ruby Host",
      "ragel-ruby": "Ragel in Ruby Host",
      raw: "Raw token data",
      "red/system": "Red",
      jruby: "Ruby",
      macruby: "Ruby",
      rake: "Ruby",
      rb: "Ruby",
      rbx: "Ruby",
      saltstate: "SaltStack",
      salt: "SaltStack",
      sh: "Shell",
      bash: "Shell",
      zsh: "Shell",
      "bash session": "ShellSession",
      console: "ShellSession",
      squeak: "Smalltalk",
      sourcemod: "SourcePawn",
      sml: "Standard ML",
      latex: "TeX",
      fundamental: "Text",
      ts: "TypeScript",
      vim: "VimL",
      nvim: "VimL",
      "vb.net": "Visual Basic",
      vbnet: "Visual Basic",
      rss: "XML",
      xsd: "XML",
      wsdl: "XML",
      xsl: "XSLT",
      yml: "YAML",
      rst: "reStructuredText",
      advpl: "xBase",
      clipper: "xBase",
      foxpro: "xBase"
    };
  }
});

// node_modules/language-detect/vendor/filenames.json
var require_filenames = __commonJS({
  "node_modules/language-detect/vendor/filenames.json"(exports, module) {
    module.exports = {
      "ant.xml": "Ant Build System",
      "build.xml": "Ant Build System",
      "CMakeLists.txt": "CMake",
      "riemann.config": "Clojure",
      Cakefile: "CoffeeScript",
      Dockerfile: "Dockerfile",
      "mix.lock": "Elixir",
      ".emacs": "Emacs Lisp",
      ".emacs.desktop": "Emacs Lisp",
      "rebar.config": "Erlang",
      "rebar.config.lock": "Erlang",
      "rebar.lock": "Erlang",
      ".factor-boot-rc": "Factor",
      ".factor-rc": "Factor",
      Fakefile: "Fancy",
      ROOT: "Isabelle ROOT",
      ".jshintrc": "JSON",
      "composer.lock": "JSON",
      Jakefile: "JavaScript",
      "ld.script": "Linker Script",
      Slakefile: "LiveScript",
      GNUmakefile: "Makefile",
      Kbuild: "Makefile",
      Makefile: "Makefile",
      "Makefile.inc": "Makefile",
      makefile: "Makefile",
      "pom.xml": "Maven POM",
      "descrip.mmk": "Module Management System",
      "descrip.mms": "Module Management System",
      "nginx.conf": "Nginx",
      Nukefile: "Nu",
      Phakefile: "PHP",
      Rexfile: "Perl6",
      Modulefile: "Puppet",
      BUILD: "Python",
      SConscript: "Python",
      SConstruct: "Python",
      Snakefile: "Python",
      wscript: "Python",
      ".Rprofile": "R",
      ".pryrc": "Ruby",
      Appraisals: "Ruby",
      Berksfile: "Ruby",
      Brewfile: "Ruby",
      Buildfile: "Ruby",
      Deliverfile: "Ruby",
      Fastfile: "Ruby",
      Gemfile: "Ruby",
      "Gemfile.lock": "Ruby",
      Guardfile: "Ruby",
      Jarfile: "Ruby",
      Mavenfile: "Ruby",
      Podfile: "Ruby",
      Puppetfile: "Ruby",
      Snapfile: "Ruby",
      Thorfile: "Ruby",
      Vagrantfile: "Ruby",
      buildfile: "Ruby",
      ".nvimrc": "VimL",
      ".vimrc": "VimL",
      _vimrc: "VimL",
      gvimrc: "VimL",
      nvimrc: "VimL",
      vimrc: "VimL",
      ".classpath": "XML",
      ".project": "XML",
      "Settings.StyleCop": "XML",
      "Web.Debug.config": "XML",
      "Web.Release.config": "XML",
      "Web.config": "XML",
      "packages.config": "XML"
    };
  }
});

// node_modules/language-detect/vendor/extensions.json
var require_extensions = __commonJS({
  "node_modules/language-detect/vendor/extensions.json"(exports, module) {
    module.exports = {
      ".abap": "ABAP",
      ".asc": "Public Key",
      ".ash": "AGS Script",
      ".ampl": "AMPL",
      ".mod": "XML",
      ".g4": "ANTLR",
      ".apib": "API Blueprint",
      ".apl": "APL",
      ".dyalog": "APL",
      ".asp": "ASP",
      ".asax": "ASP",
      ".ascx": "ASP",
      ".ashx": "ASP",
      ".asmx": "ASP",
      ".aspx": "ASP",
      ".axd": "ASP",
      ".dats": "ATS",
      ".hats": "ATS",
      ".sats": "ATS",
      ".as": "ActionScript",
      ".adb": "Ada",
      ".ada": "Ada",
      ".ads": "Ada",
      ".agda": "Agda",
      ".als": "Alloy",
      ".apacheconf": "ApacheConf",
      ".vhost": "Nginx",
      ".cls": "Visual Basic",
      ".applescript": "AppleScript",
      ".scpt": "AppleScript",
      ".arc": "Arc",
      ".ino": "Arduino",
      ".asciidoc": "AsciiDoc",
      ".adoc": "AsciiDoc",
      ".aj": "AspectJ",
      ".asm": "Assembly",
      ".a51": "Assembly",
      ".inc": "SourcePawn",
      ".nasm": "Assembly",
      ".aug": "Augeas",
      ".ahk": "AutoHotkey",
      ".ahkl": "AutoHotkey",
      ".au3": "AutoIt",
      ".awk": "Awk",
      ".auk": "Awk",
      ".gawk": "Awk",
      ".mawk": "Awk",
      ".nawk": "Awk",
      ".bat": "Batchfile",
      ".cmd": "Batchfile",
      ".befunge": "Befunge",
      ".bison": "Bison",
      ".bb": "BlitzBasic",
      ".decls": "BlitzBasic",
      ".bmx": "BlitzMax",
      ".bsv": "Bluespec",
      ".boo": "Boo",
      ".b": "Limbo",
      ".bf": "HyPhy",
      ".brs": "Brightscript",
      ".bro": "Bro",
      ".c": "C",
      ".cats": "C",
      ".h": "Objective-C",
      ".idc": "C",
      ".w": "C",
      ".cs": "Smalltalk",
      ".cshtml": "C#",
      ".csx": "C#",
      ".cpp": "C++",
      ".c++": "C++",
      ".cc": "C++",
      ".cp": "Component Pascal",
      ".cxx": "C++",
      ".h++": "C++",
      ".hh": "Hack",
      ".hpp": "C++",
      ".hxx": "C++",
      ".inl": "C++",
      ".ipp": "C++",
      ".tcc": "C++",
      ".tpp": "C++",
      ".c-objdump": "C-ObjDump",
      ".chs": "C2hs Haskell",
      ".clp": "CLIPS",
      ".cmake": "CMake",
      ".cmake.in": "CMake",
      ".cob": "COBOL",
      ".cbl": "COBOL",
      ".ccp": "COBOL",
      ".cobol": "COBOL",
      ".cpy": "COBOL",
      ".css": "CSS",
      ".capnp": "Cap'n Proto",
      ".mss": "CartoCSS",
      ".ceylon": "Ceylon",
      ".chpl": "Chapel",
      ".ch": "xBase",
      ".ck": "ChucK",
      ".cirru": "Cirru",
      ".clw": "Clarion",
      ".icl": "Clean",
      ".dcl": "Clean",
      ".clj": "Clojure",
      ".boot": "Clojure",
      ".cl2": "Clojure",
      ".cljc": "Clojure",
      ".cljs": "Clojure",
      ".cljs.hl": "Clojure",
      ".cljscm": "Clojure",
      ".cljx": "Clojure",
      ".hic": "Clojure",
      ".coffee": "CoffeeScript",
      "._coffee": "CoffeeScript",
      ".cjsx": "CoffeeScript",
      ".cson": "CoffeeScript",
      ".iced": "CoffeeScript",
      ".cfm": "ColdFusion",
      ".cfml": "ColdFusion",
      ".cfc": "ColdFusion CFC",
      ".lisp": "NewLisp",
      ".asd": "Common Lisp",
      ".cl": "OpenCL",
      ".l": "PicoLisp",
      ".lsp": "NewLisp",
      ".ny": "Common Lisp",
      ".podsl": "Common Lisp",
      ".sexp": "Common Lisp",
      ".cps": "Component Pascal",
      ".coq": "Coq",
      ".v": "Verilog",
      ".cppobjdump": "Cpp-ObjDump",
      ".c++-objdump": "Cpp-ObjDump",
      ".c++objdump": "Cpp-ObjDump",
      ".cpp-objdump": "Cpp-ObjDump",
      ".cxx-objdump": "Cpp-ObjDump",
      ".creole": "Creole",
      ".cr": "Crystal",
      ".feature": "Cucumber",
      ".cu": "Cuda",
      ".cuh": "Cuda",
      ".cy": "Cycript",
      ".pyx": "Cython",
      ".pxd": "Cython",
      ".pxi": "Cython",
      ".d": "Makefile",
      ".di": "D",
      ".d-objdump": "D-ObjDump",
      ".com": "DIGITAL Command Language",
      ".dm": "DM",
      ".zone": "DNS Zone",
      ".arpa": "DNS Zone",
      ".darcspatch": "Darcs Patch",
      ".dpatch": "Darcs Patch",
      ".dart": "Dart",
      ".diff": "Diff",
      ".patch": "Diff",
      ".dockerfile": "Dockerfile",
      ".djs": "Dogescript",
      ".dylan": "Dylan",
      ".dyl": "Dylan",
      ".intr": "Dylan",
      ".lid": "Dylan",
      ".e": "Eiffel",
      ".ecl": "ECLiPSe",
      ".eclxml": "ECL",
      ".sch": "KiCad",
      ".brd": "Eagle",
      ".epj": "Ecere Projects",
      ".ex": "Elixir",
      ".exs": "Elixir",
      ".elm": "Elm",
      ".el": "Emacs Lisp",
      ".emacs": "Emacs Lisp",
      ".emacs.desktop": "Emacs Lisp",
      ".em": "EmberScript",
      ".emberscript": "EmberScript",
      ".erl": "Erlang",
      ".es": "Erlang",
      ".escript": "Erlang",
      ".hrl": "Erlang",
      ".fs": "GLSL",
      ".fsi": "F#",
      ".fsx": "F#",
      ".fx": "FLUX",
      ".flux": "FLUX",
      ".f90": "FORTRAN",
      ".f": "Forth",
      ".f03": "FORTRAN",
      ".f08": "FORTRAN",
      ".f77": "FORTRAN",
      ".f95": "FORTRAN",
      ".for": "Forth",
      ".fpp": "FORTRAN",
      ".factor": "Factor",
      ".fy": "Fancy",
      ".fancypack": "Fancy",
      ".fan": "Fantom",
      ".fth": "Forth",
      ".4th": "Forth",
      ".forth": "Forth",
      ".fr": "Text",
      ".frt": "Forth",
      ".g": "GAP",
      ".gco": "G-code",
      ".gcode": "G-code",
      ".gms": "GAMS",
      ".gap": "GAP",
      ".gd": "GDScript",
      ".gi": "GAP",
      ".tst": "Scilab",
      ".s": "GAS",
      ".ms": "Groff",
      ".glsl": "GLSL",
      ".fp": "GLSL",
      ".frag": "JavaScript",
      ".frg": "GLSL",
      ".fshader": "GLSL",
      ".geo": "GLSL",
      ".geom": "GLSL",
      ".glslv": "GLSL",
      ".gshader": "GLSL",
      ".shader": "GLSL",
      ".vert": "GLSL",
      ".vrx": "GLSL",
      ".vshader": "GLSL",
      ".gml": "XML",
      ".kid": "Genshi",
      ".ebuild": "Gentoo Ebuild",
      ".eclass": "Gentoo Eclass",
      ".po": "Gettext Catalog",
      ".pot": "Gettext Catalog",
      ".glf": "Glyph",
      ".gp": "Gnuplot",
      ".gnu": "Gnuplot",
      ".gnuplot": "Gnuplot",
      ".plot": "Gnuplot",
      ".plt": "Gnuplot",
      ".go": "Go",
      ".golo": "Golo",
      ".gs": "JavaScript",
      ".gst": "Gosu",
      ".gsx": "Gosu",
      ".vark": "Gosu",
      ".grace": "Grace",
      ".gradle": "Gradle",
      ".gf": "Grammatical Framework",
      ".dot": "Graphviz (DOT)",
      ".gv": "Graphviz (DOT)",
      ".man": "Groff",
      ".1": "Groff",
      ".1in": "Groff",
      ".1m": "Groff",
      ".1x": "Groff",
      ".2": "Groff",
      ".3": "Groff",
      ".3in": "Groff",
      ".3m": "Groff",
      ".3qt": "Groff",
      ".3x": "Groff",
      ".4": "Groff",
      ".5": "Groff",
      ".6": "Groff",
      ".7": "Groff",
      ".8": "Groff",
      ".9": "Groff",
      ".n": "Nemerle",
      ".rno": "Groff",
      ".roff": "Groff",
      ".groovy": "Groovy",
      ".grt": "Groovy",
      ".gtpl": "Groovy",
      ".gvy": "Groovy",
      ".gsp": "Groovy Server Pages",
      ".hcl": "HCL",
      ".tf": "HCL",
      ".html": "HTML",
      ".htm": "HTML",
      ".html.hl": "HTML",
      ".st": "Smalltalk",
      ".xht": "HTML",
      ".xhtml": "HTML",
      ".mustache": "HTML+Django",
      ".jinja": "HTML+Django",
      ".erb": "HTML+ERB",
      ".erb.deface": "HTML+ERB",
      ".phtml": "HTML+PHP",
      ".http": "HTTP",
      ".php": "PHP",
      ".haml": "Haml",
      ".haml.deface": "Haml",
      ".handlebars": "Handlebars",
      ".hbs": "Handlebars",
      ".hb": "Harbour",
      ".hs": "Haskell",
      ".hsc": "Haskell",
      ".hx": "Haxe",
      ".hxsl": "Haxe",
      ".hy": "Hy",
      ".pro": "QMake",
      ".dlm": "IDL",
      ".ipf": "IGOR Pro",
      ".ini": "INI",
      ".cfg": "INI",
      ".prefs": "INI",
      ".properties": "INI",
      ".irclog": "IRC log",
      ".weechatlog": "IRC log",
      ".idr": "Idris",
      ".lidr": "Idris",
      ".ni": "Inform 7",
      ".i7x": "Inform 7",
      ".iss": "Inno Setup",
      ".io": "Io",
      ".ik": "Ioke",
      ".thy": "Isabelle",
      ".ijs": "J",
      ".flex": "JFlex",
      ".jflex": "JFlex",
      ".json": "JSON",
      ".lock": "JSON",
      ".json5": "JSON5",
      ".jsonld": "JSONLD",
      ".jq": "JSONiq",
      ".jade": "Jade",
      ".j": "Objective-J",
      ".java": "Java",
      ".jsp": "Java Server Pages",
      ".js": "JavaScript",
      "._js": "JavaScript",
      ".bones": "JavaScript",
      ".es6": "JavaScript",
      ".jake": "JavaScript",
      ".jsb": "JavaScript",
      ".jsfl": "JavaScript",
      ".jsm": "JavaScript",
      ".jss": "JavaScript",
      ".jsx": "JavaScript",
      ".njs": "JavaScript",
      ".pac": "JavaScript",
      ".sjs": "JavaScript",
      ".ssjs": "JavaScript",
      ".sublime-build": "JavaScript",
      ".sublime-commands": "JavaScript",
      ".sublime-completions": "JavaScript",
      ".sublime-keymap": "JavaScript",
      ".sublime-macro": "JavaScript",
      ".sublime-menu": "JavaScript",
      ".sublime-mousemap": "JavaScript",
      ".sublime-project": "JavaScript",
      ".sublime-settings": "JavaScript",
      ".sublime-theme": "JavaScript",
      ".sublime-workspace": "JavaScript",
      ".sublime_metrics": "JavaScript",
      ".sublime_session": "JavaScript",
      ".xsjs": "JavaScript",
      ".xsjslib": "JavaScript",
      ".jl": "Julia",
      ".krl": "KRL",
      ".kicad_pcb": "KiCad",
      ".kit": "Kit",
      ".kt": "Kotlin",
      ".ktm": "Kotlin",
      ".kts": "Kotlin",
      ".lfe": "LFE",
      ".ll": "LLVM",
      ".lol": "LOLCODE",
      ".lsl": "LSL",
      ".lvproj": "LabVIEW",
      ".lasso": "Lasso",
      ".las": "Lasso",
      ".lasso8": "Lasso",
      ".lasso9": "Lasso",
      ".ldml": "Lasso",
      ".latte": "Latte",
      ".lean": "Lean",
      ".hlean": "Lean",
      ".less": "Less",
      ".lex": "Lex",
      ".ly": "LilyPond",
      ".ily": "LilyPond",
      ".m": "Objective-C",
      ".ld": "Linker Script",
      ".lds": "Linker Script",
      ".liquid": "Liquid",
      ".lagda": "Literate Agda",
      ".litcoffee": "Literate CoffeeScript",
      ".lhs": "Literate Haskell",
      ".ls": "LoomScript",
      "._ls": "LiveScript",
      ".xm": "Logos",
      ".x": "Logos",
      ".xi": "Logos",
      ".lgt": "Logtalk",
      ".logtalk": "Logtalk",
      ".lookml": "LookML",
      ".lua": "Lua",
      ".fcgi": "Shell",
      ".nse": "Lua",
      ".pd_lua": "Lua",
      ".rbxs": "Lua",
      ".wlua": "Lua",
      ".mumps": "M",
      ".mtml": "MTML",
      ".muf": "MUF",
      ".mak": "Makefile",
      ".mk": "Makefile",
      ".mako": "Mako",
      ".mao": "Mako",
      ".md": "Markdown",
      ".markdown": "Markdown",
      ".mkd": "Markdown",
      ".mkdn": "Markdown",
      ".mkdown": "Markdown",
      ".ron": "Markdown",
      ".mask": "Mask",
      ".mathematica": "Mathematica",
      ".cdf": "Mathematica",
      ".ma": "Mathematica",
      ".nb": "Mathematica",
      ".nbp": "Mathematica",
      ".wl": "Mathematica",
      ".wlt": "Mathematica",
      ".matlab": "Matlab",
      ".maxpat": "Max",
      ".maxhelp": "Max",
      ".maxproj": "Max",
      ".mxt": "Max",
      ".pat": "Max",
      ".mediawiki": "MediaWiki",
      ".moo": "Moocode",
      ".minid": "MiniD",
      ".druby": "Mirah",
      ".duby": "Mirah",
      ".mir": "Mirah",
      ".mirah": "Mirah",
      ".mo": "Modelica",
      ".mms": "Module Management System",
      ".mmk": "Module Management System",
      ".monkey": "Monkey",
      ".moon": "MoonScript",
      ".myt": "Myghty",
      ".ncl": "Text",
      ".nl": "NewLisp",
      ".nsi": "NSIS",
      ".nsh": "NSIS",
      ".axs": "NetLinx",
      ".axi": "NetLinx",
      ".axs.erb": "NetLinx+ERB",
      ".axi.erb": "NetLinx+ERB",
      ".nlogo": "NetLogo",
      ".nginxconf": "Nginx",
      ".nim": "Nimrod",
      ".nimrod": "Nimrod",
      ".ninja": "Ninja",
      ".nit": "Nit",
      ".nix": "Nix",
      ".nu": "Nu",
      ".numpy": "NumPy",
      ".numpyw": "NumPy",
      ".numsc": "NumPy",
      ".ml": "Standard ML",
      ".eliom": "OCaml",
      ".eliomi": "OCaml",
      ".ml4": "OCaml",
      ".mli": "OCaml",
      ".mll": "OCaml",
      ".mly": "OCaml",
      ".objdump": "ObjDump",
      ".mm": "XML",
      ".sj": "Objective-J",
      ".omgrofl": "Omgrofl",
      ".opa": "Opa",
      ".opal": "Opal",
      ".opencl": "OpenCL",
      ".p": "OpenEdge ABL",
      ".scad": "OpenSCAD",
      ".org": "Org",
      ".ox": "Ox",
      ".oxh": "Ox",
      ".oxo": "Ox",
      ".oxygene": "Oxygene",
      ".oz": "Oz",
      ".pwn": "PAWN",
      ".aw": "PHP",
      ".ctp": "PHP",
      ".php3": "PHP",
      ".php4": "PHP",
      ".php5": "PHP",
      ".phpt": "PHP",
      ".pls": "PLSQL",
      ".pkb": "PLSQL",
      ".pks": "PLSQL",
      ".plb": "PLSQL",
      ".plsql": "PLSQL",
      ".sql": "SQLPL",
      ".pan": "Pan",
      ".psc": "Papyrus",
      ".parrot": "Parrot",
      ".pasm": "Parrot Assembly",
      ".pir": "Parrot Internal Representation",
      ".pas": "Pascal",
      ".dfm": "Pascal",
      ".dpr": "Pascal",
      ".lpr": "Pascal",
      ".pp": "Puppet",
      ".pl": "Prolog",
      ".al": "Perl",
      ".cgi": "Shell",
      ".perl": "Perl",
      ".ph": "Perl",
      ".plx": "Perl",
      ".pm": "Perl6",
      ".pod": "Pod",
      ".psgi": "Perl",
      ".t": "Turing",
      ".6pl": "Perl6",
      ".6pm": "Perl6",
      ".nqp": "Perl6",
      ".p6": "Perl6",
      ".p6l": "Perl6",
      ".p6m": "Perl6",
      ".pl6": "Perl6",
      ".pm6": "Perl6",
      ".pig": "PigLatin",
      ".pike": "Pike",
      ".pmod": "Pike",
      ".pogo": "PogoScript",
      ".ps": "PostScript",
      ".eps": "PostScript",
      ".ps1": "PowerShell",
      ".psd1": "PowerShell",
      ".psm1": "PowerShell",
      ".pde": "Processing",
      ".prolog": "Prolog",
      ".spin": "Propeller Spin",
      ".proto": "Protocol Buffer",
      ".pub": "Public Key",
      ".pd": "Pure Data",
      ".pb": "PureBasic",
      ".pbi": "PureBasic",
      ".purs": "PureScript",
      ".py": "Python",
      ".gyp": "Python",
      ".lmi": "Python",
      ".pyde": "Python",
      ".pyp": "Python",
      ".pyt": "Python",
      ".pyw": "Python",
      ".tac": "Python",
      ".wsgi": "Python",
      ".xpy": "Python",
      ".pytb": "Python traceback",
      ".qml": "QML",
      ".qbs": "QML",
      ".pri": "QMake",
      ".r": "Rebol",
      ".rd": "R",
      ".rsx": "R",
      ".raml": "RAML",
      ".rdoc": "RDoc",
      ".rbbas": "REALbasic",
      ".rbfrm": "REALbasic",
      ".rbmnu": "REALbasic",
      ".rbres": "REALbasic",
      ".rbtbar": "REALbasic",
      ".rbuistate": "REALbasic",
      ".rhtml": "RHTML",
      ".rmd": "RMarkdown",
      ".rkt": "Racket",
      ".rktd": "Racket",
      ".rktl": "Racket",
      ".scrbl": "Racket",
      ".rl": "Ragel in Ruby Host",
      ".raw": "Raw token data",
      ".reb": "Rebol",
      ".r2": "Rebol",
      ".r3": "Rebol",
      ".rebol": "Rebol",
      ".red": "Red",
      ".reds": "Red",
      ".cw": "Redcode",
      ".rs": "Rust",
      ".rsh": "RenderScript",
      ".robot": "RobotFramework",
      ".rg": "Rouge",
      ".rb": "Ruby",
      ".builder": "Ruby",
      ".gemspec": "Ruby",
      ".god": "Ruby",
      ".irbrc": "Ruby",
      ".jbuilder": "Ruby",
      ".mspec": "Ruby",
      ".pluginspec": "XML",
      ".podspec": "Ruby",
      ".rabl": "Ruby",
      ".rake": "Ruby",
      ".rbuild": "Ruby",
      ".rbw": "Ruby",
      ".rbx": "Ruby",
      ".ru": "Ruby",
      ".ruby": "Ruby",
      ".thor": "Ruby",
      ".watchr": "Ruby",
      ".sas": "SAS",
      ".scss": "SCSS",
      ".smt2": "SMT",
      ".smt": "SMT",
      ".sparql": "SPARQL",
      ".rq": "SPARQL",
      ".sqf": "SQF",
      ".hqf": "SQF",
      ".cql": "SQL",
      ".ddl": "SQL",
      ".prc": "SQL",
      ".tab": "SQL",
      ".udf": "SQL",
      ".viw": "SQL",
      ".db2": "SQLPL",
      ".ston": "STON",
      ".svg": "SVG",
      ".sage": "Sage",
      ".sagews": "Sage",
      ".sls": "Scheme",
      ".sass": "Sass",
      ".scala": "Scala",
      ".sbt": "Scala",
      ".sc": "SuperCollider",
      ".scaml": "Scaml",
      ".scm": "Scheme",
      ".sld": "Scheme",
      ".sps": "Scheme",
      ".ss": "Scheme",
      ".sci": "Scilab",
      ".sce": "Scilab",
      ".self": "Self",
      ".sh": "Shell",
      ".bash": "Shell",
      ".bats": "Shell",
      ".command": "Shell",
      ".ksh": "Shell",
      ".tmux": "Shell",
      ".tool": "Shell",
      ".zsh": "Shell",
      ".sh-session": "ShellSession",
      ".shen": "Shen",
      ".sl": "Slash",
      ".slim": "Slim",
      ".smali": "Smali",
      ".tpl": "Smarty",
      ".sp": "SourcePawn",
      ".sma": "SourcePawn",
      ".nut": "Squirrel",
      ".fun": "Standard ML",
      ".sig": "Standard ML",
      ".sml": "Standard ML",
      ".do": "Stata",
      ".ado": "Stata",
      ".doh": "Stata",
      ".ihlp": "Stata",
      ".mata": "Stata",
      ".matah": "Stata",
      ".sthlp": "Stata",
      ".styl": "Stylus",
      ".scd": "SuperCollider",
      ".swift": "Swift",
      ".sv": "SystemVerilog",
      ".svh": "SystemVerilog",
      ".vh": "SystemVerilog",
      ".toml": "TOML",
      ".txl": "TXL",
      ".tcl": "Tcl",
      ".adp": "Tcl",
      ".tm": "Tcl",
      ".tcsh": "Tcsh",
      ".csh": "Tcsh",
      ".tex": "TeX",
      ".aux": "TeX",
      ".bbx": "TeX",
      ".bib": "TeX",
      ".cbx": "TeX",
      ".dtx": "TeX",
      ".ins": "TeX",
      ".lbx": "TeX",
      ".ltx": "TeX",
      ".mkii": "TeX",
      ".mkiv": "TeX",
      ".mkvi": "TeX",
      ".sty": "TeX",
      ".toc": "TeX",
      ".tea": "Tea",
      ".txt": "Text",
      ".textile": "Textile",
      ".thrift": "Thrift",
      ".tu": "Turing",
      ".ttl": "Turtle",
      ".twig": "Twig",
      ".ts": "XML",
      ".upc": "Unified Parallel C",
      ".anim": "Unity3D Asset",
      ".asset": "Unity3D Asset",
      ".mat": "Unity3D Asset",
      ".meta": "Unity3D Asset",
      ".prefab": "Unity3D Asset",
      ".unity": "Unity3D Asset",
      ".uc": "UnrealScript",
      ".vcl": "VCL",
      ".vhdl": "VHDL",
      ".vhd": "VHDL",
      ".vhf": "VHDL",
      ".vhi": "VHDL",
      ".vho": "VHDL",
      ".vhs": "VHDL",
      ".vht": "VHDL",
      ".vhw": "VHDL",
      ".vala": "Vala",
      ".vapi": "Vala",
      ".veo": "Verilog",
      ".vim": "VimL",
      ".vb": "Visual Basic",
      ".bas": "Visual Basic",
      ".frm": "Visual Basic",
      ".frx": "Visual Basic",
      ".vba": "Visual Basic",
      ".vbhtml": "Visual Basic",
      ".vbs": "Visual Basic",
      ".volt": "Volt",
      ".vue": "Vue",
      ".owl": "Web Ontology Language",
      ".webidl": "WebIDL",
      ".xc": "XC",
      ".xml": "XML",
      ".ant": "XML",
      ".axml": "XML",
      ".ccxml": "XML",
      ".clixml": "XML",
      ".cproject": "XML",
      ".csproj": "XML",
      ".ct": "XML",
      ".dita": "XML",
      ".ditamap": "XML",
      ".ditaval": "XML",
      ".dll.config": "XML",
      ".filters": "XML",
      ".fsproj": "XML",
      ".fxml": "XML",
      ".glade": "XML",
      ".grxml": "XML",
      ".iml": "XML",
      ".ivy": "XML",
      ".jelly": "XML",
      ".kml": "XML",
      ".launch": "XML",
      ".mdpolicy": "XML",
      ".mxml": "XML",
      ".nproj": "XML",
      ".nuspec": "XML",
      ".odd": "XML",
      ".osm": "XML",
      ".plist": "XML",
      ".ps1xml": "XML",
      ".psc1": "XML",
      ".pt": "XML",
      ".rdf": "XML",
      ".rss": "XML",
      ".scxml": "XML",
      ".srdf": "XML",
      ".storyboard": "XML",
      ".sttheme": "XML",
      ".sublime-snippet": "XML",
      ".targets": "XML",
      ".tmcommand": "XML",
      ".tml": "XML",
      ".tmlanguage": "XML",
      ".tmpreferences": "XML",
      ".tmsnippet": "XML",
      ".tmtheme": "XML",
      ".ui": "XML",
      ".urdf": "XML",
      ".vbproj": "XML",
      ".vcxproj": "XML",
      ".vxml": "XML",
      ".wsdl": "XML",
      ".wsf": "XML",
      ".wxi": "XML",
      ".wxl": "XML",
      ".wxs": "XML",
      ".x3d": "XML",
      ".xacro": "XML",
      ".xaml": "XML",
      ".xib": "XML",
      ".xlf": "XML",
      ".xliff": "XML",
      ".xmi": "XML",
      ".xml.dist": "XML",
      ".xsd": "XML",
      ".xul": "XML",
      ".zcml": "XML",
      ".xsp-config": "XPages",
      ".xsp.metadata": "XPages",
      ".xpl": "XProc",
      ".xproc": "XProc",
      ".xquery": "XQuery",
      ".xq": "XQuery",
      ".xql": "XQuery",
      ".xqm": "XQuery",
      ".xqy": "XQuery",
      ".xs": "XS",
      ".xslt": "XSLT",
      ".xsl": "XSLT",
      ".xojo_code": "Xojo",
      ".xojo_menu": "Xojo",
      ".xojo_report": "Xojo",
      ".xojo_script": "Xojo",
      ".xojo_toolbar": "Xojo",
      ".xojo_window": "Xojo",
      ".xtend": "Xtend",
      ".yml": "YAML",
      ".reek": "YAML",
      ".rviz": "YAML",
      ".syntax": "YAML",
      ".yaml": "YAML",
      ".yaml-tmlanguage": "YAML",
      ".y": "Yacc",
      ".yacc": "Yacc",
      ".yy": "Yacc",
      ".zep": "Zephir",
      ".zimpl": "Zimpl",
      ".zmpl": "Zimpl",
      ".zpl": "Zimpl",
      ".desktop": "desktop",
      ".desktop.in": "desktop",
      ".ec": "eC",
      ".eh": "eC",
      ".edn": "edn",
      ".fish": "fish",
      ".mu": "mupad",
      ".nc": "nesC",
      ".ooc": "ooc",
      ".rst": "reStructuredText",
      ".rest": "reStructuredText",
      ".wisp": "wisp",
      ".prg": "xBase",
      ".prw": "xBase"
    };
  }
});

// node_modules/language-detect/vendor/interpreters.json
var require_interpreters = __commonJS({
  "node_modules/language-detect/vendor/interpreters.json"(exports, module) {
    module.exports = {
      osascript: "AppleScript",
      awk: "Awk",
      gawk: "Awk",
      mawk: "Awk",
      nawk: "Awk",
      tcc: "C",
      coffee: "CoffeeScript",
      lisp: "Common Lisp",
      sbcl: "Common Lisp",
      ccl: "Common Lisp",
      clisp: "Common Lisp",
      ecl: "Common Lisp",
      crystal: "Crystal",
      dtrace: "DTrace",
      escript: "Erlang",
      gnuplot: "Gnuplot",
      groovy: "Groovy",
      ioke: "Ioke",
      node: "JavaScript",
      lsl: "LSL",
      lua: "Lua",
      make: "Makefile",
      mmi: "Mercury",
      moon: "MoonScript",
      newlisp: "NewLisp",
      nush: "Nu",
      ocaml: "OCaml",
      ocamlrun: "OCaml",
      php: "PHP",
      parrot: "Parrot Internal Representation",
      perl: "Perl",
      perl6: "Perl6",
      picolisp: "PicoLisp",
      pil: "PicoLisp",
      pike: "Pike",
      swipl: "Prolog",
      python: "Python",
      python2: "Python",
      python3: "Python",
      qmake: "QMake",
      Rscript: "R",
      racket: "Racket",
      ruby: "Ruby",
      macruby: "Ruby",
      rake: "Ruby",
      jruby: "Ruby",
      rbx: "Ruby",
      boolector: "SMT",
      cvc4: "SMT",
      mathsat5: "SMT",
      opensmt: "SMT",
      smtinterpol: "SMT",
      "smt-rat": "SMT",
      stp: "SMT",
      verit: "SMT",
      yices2: "SMT",
      z3: "SMT",
      scala: "Scala",
      guile: "Scheme",
      bigloo: "Scheme",
      chicken: "Scheme",
      bash: "Shell",
      rc: "Shell",
      sh: "Shell",
      zsh: "Shell",
      tclsh: "Tcl",
      wish: "Tcl"
    };
  }
});

// node_modules/language-detect/language-detect.js
var require_language_detect = __commonJS({
  "node_modules/language-detect/language-detect.js"(exports, module) {
    var fs = require_fs();
    var path = require_path();
    var classify = require_language_classifier();
    var classifyMap = {
      "ruby": "Ruby",
      "python": "Python",
      "javascript": "JavaScript",
      "objective-c": "Objective-C",
      "html": "HTML",
      "css": "CSS",
      "shell": "Shell",
      "c++": "C++",
      "c": "C",
      "coffee-script": "CoffeeScript"
    };
    exports = module.exports = function(filename, done) {
      fs.stat(filename, function(err, stats) {
        if (err) {
          return done(err);
        }
        if (!stats.isFile()) {
          return done(new Error("Should only detect files: " + filename));
        }
        var fileDetected = exports.filename(filename);
        if (fileDetected) {
          return done(null, fileDetected);
        }
        var languages = {};
        var shebang = "";
        var firstChunk = true;
        var hasShebang = false;
        var shebangDetected;
        var stream = fs.createReadStream(filename);
        stream.on("error", done);
        stream.on("data", function(data) {
          var chunk = data.toString();
          if (firstChunk) {
            chunk = chunk.replace(/^ +/, "");
            if (chunk.length > 1) {
              firstChunk = false;
              if (chunk.substr(0, 2) === "#!") {
                hasShebang = true;
              }
            }
          }
          if (hasShebang) {
            shebang += chunk;
            if (/\r?\n/.test(shebang)) {
              hasShebang = false;
              shebangDetected = exports.shebang(shebang);
              if (shebangDetected) {
                return stream.close();
              }
            }
          }
          var classified = exports.classify(chunk);
          if (classified) {
            languages[classified]++ || (languages[classified] = 1);
          }
        });
        stream.on("close", function() {
          if (shebangDetected) {
            return done(null, shebangDetected);
          }
          if (!Object.keys(languages).length) {
            return done();
          }
          var popular = Object.keys(languages).reduce(function(highest, language) {
            return languages[highest] > languages[language] ? highest : language;
          });
          return done(null, popular);
        });
      });
    };
    exports.aliases = require_aliases();
    exports.filenames = require_filenames();
    exports.extensions = require_extensions();
    exports.interpreters = require_interpreters();
    exports.sync = function(filename) {
      if (!fs.statSync(filename).isFile()) {
        throw new Error("Should only detect files: " + filename);
      }
      return exports.filename(filename) || exports.contents(path, fs.readFileSync(filename));
    };
    exports.contents = function(filename, contents) {
      return exports.filename(filename) || exports.shebang(contents) || exports.classify(contents);
    };
    exports.filename = function(filename) {
      var basename = path.basename(filename);
      if (typeof exports.filenames[basename] === "string") {
        return exports.filenames[basename];
      }
      var extension = (path.extname(basename) || "").toLowerCase();
      if (typeof exports.extensions[extension] === "string") {
        return exports.extensions[extension];
      }
    };
    exports.shebang = function(contents) {
      var file = contents.toString().replace(/^\s*/, "");
      if (file.substr(0, 2) !== "#!") {
        return;
      }
      var bang = file.split(/\r?\n/g)[0];
      var tokens = bang.replace(/^#! +/, "#!").split(" ");
      var pieces = tokens[0].split("/");
      var script = pieces[pieces.length - 1];
      if (script === "env") {
        script = tokens[1];
      }
      script = script.replace(/(?:\d+\.?)+$/, "");
      return exports.interpreters[script] || exports.aliases[script];
    };
    exports.classify = function(contents) {
      return classifyMap[classify(contents.toString())];
    };
  }
});
export default require_language_detect();
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=language-detect.js.map
