var dpVideo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(30);
var has = __webpack_require__(2);
var uid = __webpack_require__(31);
var NATIVE_SYMBOL = __webpack_require__(37);
var USE_SYMBOL_AS_UID = __webpack_require__(55);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(24).f;
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var setGlobal = __webpack_require__(29);
var copyConstructorProperties = __webpack_require__(48);
var isForced = __webpack_require__(68);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(44);
var anObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(14);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var definePropertyModule = __webpack_require__(6);
var createPropertyDescriptor = __webpack_require__(12);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(28);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(28);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(8);
var has = __webpack_require__(2);
var setGlobal = __webpack_require__(29);
var inspectSource = __webpack_require__(46);
var InternalStateModule = __webpack_require__(15);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(66);
var global = __webpack_require__(0);
var isObject = __webpack_require__(7);
var createNonEnumerableProperty = __webpack_require__(8);
var objectHas = __webpack_require__(2);
var sharedKey = __webpack_require__(16);
var hiddenKeys = __webpack_require__(18);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30);
var uid = __webpack_require__(31);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(49);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(1);
var has = __webpack_require__(2);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(34);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $filter = __webpack_require__(36).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(38);
var arrayMethodUsesToLength = __webpack_require__(21);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var propertyIsEnumerableModule = __webpack_require__(25);
var createPropertyDescriptor = __webpack_require__(12);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(14);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(44);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(27);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(8);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(17);
var store = __webpack_require__(47);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(34);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(69);
var IndexedObject = __webpack_require__(26);
var toObject = __webpack_require__(11);
var toLength = __webpack_require__(33);
var arraySpeciesCreate = __webpack_require__(53);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(3);
var V8_VERSION = __webpack_require__(71);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var defineProperties = __webpack_require__(75);
var enumBugKeys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(18);
var html = __webpack_require__(76);
var documentCreateElement = __webpack_require__(45);
var sharedKey = __webpack_require__(16);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(6).f;
var has = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(43);
var redefine = __webpack_require__(13);
var toString = __webpack_require__(86);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(45);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(7);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(29);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var ownKeys = __webpack_require__(67);
var getOwnPropertyDescriptorModule = __webpack_require__(24);
var definePropertyModule = __webpack_require__(6);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIndexedObject = __webpack_require__(10);
var indexOf = __webpack_require__(51).indexOf;
var hiddenKeys = __webpack_require__(18);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(52);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var isArray = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(3);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(27);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(37);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(19);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var global = __webpack_require__(0);
var userAgent = __webpack_require__(56);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);

exports.f = wellKnownSymbol;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(49);
var has = __webpack_require__(2);
var wrappedWellKnownSymbolModule = __webpack_require__(58);
var defineProperty = __webpack_require__(6).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(10);
var addToUnscopables = __webpack_require__(80);
var Iterators = __webpack_require__(41);
var InternalStateModule = __webpack_require__(15);
var defineIterator = __webpack_require__(61);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var createIteratorConstructor = __webpack_require__(81);
var getPrototypeOf = __webpack_require__(63);
var setPrototypeOf = __webpack_require__(83);
var setToStringTag = __webpack_require__(40);
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(3);
var IS_PURE = __webpack_require__(17);
var Iterators = __webpack_require__(41);
var IteratorsCore = __webpack_require__(62);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(63);
var createNonEnumerableProperty = __webpack_require__(8);
var has = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(3);
var IS_PURE = __webpack_require__(17);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toObject = __webpack_require__(11);
var sharedKey = __webpack_require__(16);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(82);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(13);
var anObject = __webpack_require__(9);
var fails = __webpack_require__(1);
var flags = __webpack_require__(93);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(46);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(19);
var getOwnPropertyNamesModule = __webpack_require__(32);
var getOwnPropertySymbolsModule = __webpack_require__(35);
var anObject = __webpack_require__(9);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(70);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(56);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var assign = __webpack_require__(73);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(1);
var objectKeys = __webpack_require__(22);
var getOwnPropertySymbolsModule = __webpack_require__(35);
var propertyIsEnumerableModule = __webpack_require__(25);
var toObject = __webpack_require__(11);
var IndexedObject = __webpack_require__(26);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var global = __webpack_require__(0);
var getBuiltIn = __webpack_require__(19);
var IS_PURE = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(5);
var NATIVE_SYMBOL = __webpack_require__(37);
var USE_SYMBOL_AS_UID = __webpack_require__(55);
var fails = __webpack_require__(1);
var has = __webpack_require__(2);
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(7);
var anObject = __webpack_require__(9);
var toObject = __webpack_require__(11);
var toIndexedObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(14);
var createPropertyDescriptor = __webpack_require__(12);
var nativeObjectCreate = __webpack_require__(39);
var objectKeys = __webpack_require__(22);
var getOwnPropertyNamesModule = __webpack_require__(32);
var getOwnPropertyNamesExternal = __webpack_require__(77);
var getOwnPropertySymbolsModule = __webpack_require__(35);
var getOwnPropertyDescriptorModule = __webpack_require__(24);
var definePropertyModule = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(25);
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(13);
var shared = __webpack_require__(30);
var sharedKey = __webpack_require__(16);
var hiddenKeys = __webpack_require__(18);
var uid = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(3);
var wrappedWellKnownSymbolModule = __webpack_require__(58);
var defineWellKnownSymbol = __webpack_require__(59);
var setToStringTag = __webpack_require__(40);
var InternalStateModule = __webpack_require__(15);
var $forEach = __webpack_require__(36).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var definePropertyModule = __webpack_require__(6);
var anObject = __webpack_require__(9);
var objectKeys = __webpack_require__(22);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(19);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var nativeGetOwnPropertyNames = __webpack_require__(32).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var global = __webpack_require__(0);
var has = __webpack_require__(2);
var isObject = __webpack_require__(7);
var defineProperty = __webpack_require__(6).f;
var copyConstructorProperties = __webpack_require__(48);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(59);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(3);
var create = __webpack_require__(39);
var definePropertyModule = __webpack_require__(6);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(62).IteratorPrototype;
var create = __webpack_require__(39);
var createPropertyDescriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(40);
var Iterators = __webpack_require__(41);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var aPossiblePrototype = __webpack_require__(84);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $map = __webpack_require__(36).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(38);
var arrayMethodUsesToLength = __webpack_require__(21);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(43);
var classof = __webpack_require__(87);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(43);
var classofRaw = __webpack_require__(27);
var wellKnownSymbol = __webpack_require__(3);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(89).charAt;
var InternalStateModule = __webpack_require__(15);
var defineIterator = __webpack_require__(61);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(28);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(91);
var ArrayIteratorMethods = __webpack_require__(60);
var createNonEnumerableProperty = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(3);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var toObject = __webpack_require__(11);
var nativeKeys = __webpack_require__(22);
var fails = __webpack_require__(1);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $indexOf = __webpack_require__(51).indexOf;
var arrayMethodIsStrict = __webpack_require__(95);
var arrayMethodUsesToLength = __webpack_require__(21);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var toAbsoluteIndex = __webpack_require__(52);
var toInteger = __webpack_require__(20);
var toLength = __webpack_require__(33);
var toObject = __webpack_require__(11);
var arraySpeciesCreate = __webpack_require__(53);
var createProperty = __webpack_require__(97);
var arrayMethodHasSpeciesSupport = __webpack_require__(38);
var arrayMethodUsesToLength = __webpack_require__(21);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(14);
var definePropertyModule = __webpack_require__(6);
var createPropertyDescriptor = __webpack_require__(12);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(64);

// CONCATENATED MODULE: ./src/core/utils.ts




// 检查urlListType到底是哪种类型
function whatUrlType(obj) {
  // 格式进行修改 :
  // 格式1: "http://asdasd"
  // 格式2:  ["http://asdasd",{defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]}]
  var flag = 0;

  if (Object.prototype.toString.call(obj) === '[object String]') {
    flag = 1;
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    flag = 2;
  }

  return flag;
} // 获取元素真实属性

function getStyle(element, style) {
  return element.currentStyle ? element.currentStyle[style] : getComputedStyle(element)[style];
} // 元素挂载style

function styleList(dom, styleList) {
  for (var item in styleList) {
    dom.style[item] = styleList[item];
  }
} // 元素挂载className

function classNameList(dom, className) {
  var _a;

  (_a = dom.classList).add.apply(_a, className.filter(function (item) {
    return item.length != 0;
  }));
} // 绑定事件

function bindMethods(dom, methods) {
  var keys = Object.keys(methods);

  for (var i = 0; i < keys.length; i++) {
    dom.addEventListener(keys[i], methods[keys[i]]);
  }
} // 创建div的渲染函数

function render(domList, parentDom) {
  if (parentDom === void 0) {
    parentDom = null;
  }

  var c_dom = document.createElement(domList.tag);

  if (domList.innerText) {
    c_dom.innerText = domList.innerText;
  }

  if (domList.className) {
    classNameList(c_dom, domList.className);
  }

  if (domList.style) {
    styleList(c_dom, domList.style);
  }

  if (domList.methods) {
    bindMethods(c_dom, domList.methods);
  }

  if (domList.children && domList.children.length > 0) {
    for (var i = 0; i < domList.children.length; i++) {
      render(domList.children[i], c_dom);
    }
  }

  if (parentDom !== null) {
    parentDom.append(c_dom);
    return parentDom;
  } else {
    return c_dom;
  }
} // 格式化时间

function formatTime(time) {
  var ceilTime = Math.ceil(time);
  var m = Math.floor(ceilTime / 60);
  var s = ceilTime % 60;
  var r_m = m < 10 ? "0" + m : m;
  var r_s = s < 10 ? "0" + s : s;
  return r_m + ":" + r_s;
}
// CONCATENATED MODULE: ./src/core/creatController.ts











function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // 创建控制条

var creatController_Controller =
/** @class */
function () {
  function Controller(videoDom, parentDom, options) {
    this.contrllerDom = undefined; // 控制条最外层dom

    this.video = undefined; // video元素

    this.leftBox_play = undefined; // 开始按钮

    this.leftBox_pause = undefined; // 暂停按钮

    this.parentDom = undefined; // 最外层盒子

    this.actionTime = undefined; // 开始时间

    this.endTime = undefined; // 结束时间

    this.speadSelect = undefined; // 选择播放速度

    this.changeVolume = undefined; // 音量

    this.popWindowPlayer = undefined; // 画中画按钮

    this.documentFullScreen = undefined; // 网页全屏

    this.windowFullScreen = undefined; // 全屏

    this.progressBar = undefined; // 进度条

    this.timePoint = undefined; // 进度条点

    this.timePointbg = undefined; // 进度条点背景

    this.nextBtn = undefined; // 下一P

    this.selectSrc = undefined; // 选集

    this.selectDefinition = undefined; //选择清晰度

    this.progressBarChange = new CustomEvent("progressBarChange", {
      detail: {
        timeJump: false
      }
    }); // 创建进度条改变事件

    this.progressBarJumpChange = new CustomEvent("progressBarChange", {
      detail: {
        timeJump: true
      }
    }); // 创建进度条改变事件

    this.options = undefined; // 外层传入配置

    this.reqAFId = null; // 渲染id  优化用

    this.video = videoDom;
    this.parentDom = parentDom;
    this.options = options;
    this.creatContrller();
    this.bindEventListener();
  } // 创建contrller Dom元素


  Controller.prototype.creatContrller = function () {
    var _this = this; // 外层div


    this.contrllerDom = render({
      tag: "div",
      className: ["dp-contrller"]
    }); // 内部左侧div

    var leftBox = render({
      tag: "div",
      className: ["dp-flexbox"]
    });
    var rightBox = render({
      tag: "div",
      className: ["dp-flexbox"],
      style: {
        maxWidth: "66%"
      }
    }); // -------------------左侧div内部button
    // 播放暂停按钮

    this.leftBox_play = render({
      tag: "div",
      className: ["iconfont", "icon-bofangqi-bofang", "dp-play-btn", "active"],
      methods: {
        click: function click() {
          _this.play();
        }
      }
    });
    this.leftBox_pause = render({
      tag: "div",
      className: ["iconfont", "icon-bofangqi-zanting", "dp-pause-btn"],
      methods: {
        click: function click() {
          _this.pause();
        }
      }
    }); // 时间组件

    this.actionTime = render({
      tag: "span",
      className: ["dp-action-time", "dp-time"],
      innerText: "00:00"
    });
    this.endTime = render({
      tag: "span",
      className: ["dp-end-time", "dp-time"],
      innerText: "00:00"
    }); // 插入暂停和播放按钮

    leftBox.appendChild(this.leftBox_play);
    leftBox.appendChild(this.leftBox_pause); // 下一P

    if (this.options._parentSelf.selectUrlListIndex !== null && this.options._parentSelf.selectUrlListIndex < this.options._parentSelf.maxListindex) {
      this.nextBtn = render({
        tag: "div",
        className: ["iconfont", "icon-bofangqi-xiayiji", "dp-next-btn", 'active'],
        style: {
          fontSize: "24px"
        },
        methods: {
          click: function click() {
            _this.options._parentSelf.selectUrlListIndex += 1;

            _this.options._parentSelf.changeVideoSrc();
          }
        }
      });
      leftBox.appendChild(this.nextBtn);
    } // ----------------左侧div内部button结束
    // 插入时间


    leftBox.appendChild(this.actionTime);
    leftBox.appendChild(this.endTime);
    /*
    * 右侧盒子
    * 从左到右:
    *   倍速 √
    *   清晰度
    *   声音 √
    *   画中画 √
    *   网页全屏 √
    *   全屏 √
    * */
    // 倍速

    var speedList = {
      tag: "div",
      className: ["dp-playback-rate-base"],
      children: [{
        tag: 'span',
        className: ["dp-playback-rate-msg"],
        innerText: this.options.controllerOption.playbackRateList.filter(function (item) {
          return item.default;
        })[0].label
      }, {
        tag: "div",
        className: ["dp-playback-rate-box"],
        children: this.options.controllerOption.playbackRateList.map(function (item, index) {
          return {
            tag: "div",
            innerText: item.label,
            className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, item.default ? "active" : ''],
            methods: {
              click: function click() {
                _this.changePlaybackRate("dp-playback-rate-list-num" + index, item.speed, item.label);
              }
            }
          };
        })
      }]
    };
    this.speadSelect = render(speedList); // 音量

    var volumeList = {
      tag: "div",
      className: ["dp-volume-box"],
      children: [{
        tag: "div",
        className: ["iconfont", "icon-jingyin", "dp-volume", this.video.muted || this.video.volume == 0 ? "active" : ""],
        methods: {
          click: function click() {
            _this.changeVolumeFn(0.5);
          }
        }
      }, {
        tag: "div",
        className: ["iconfont", "icon-shengyin", "dp-volume", this.video.muted || this.video.volume == 0 ? "" : "active"],
        methods: {
          click: function click() {
            _this.changeVolumeFn(0);
          }
        }
      }]
    };
    this.changeVolume = render(volumeList);
    var volumeContrller = render({
      tag: "div",
      className: ["dp-volume-contrller"],
      children: [{
        tag: "span",
        className: ["dp-volume-msg"],
        innerText: this.video.volume * 100 + ""
      }, {
        tag: "div",
        className: ["dp-volume-contrller-box"],
        children: [{
          tag: "div",
          className: ["dp-volume-contrller-point"],
          style: {
            bottom: 100 * this.video.volume + "px"
          },
          methods: {
            mousedown: function mousedown() {
              var _that = _this;
              _this.video.muted = false;

              function mouseMoveFn(e) {
                if (_that.video.volume + e.movementY * -1 / 100 > 1 || _that.video.volume + e.movementY * -1 / 100 < 0) {
                  return;
                }

                _that.video.volume += e.movementY * -1 / 100;

                _that.changeVolumeDom();
              }

              function mouseUpFn() {
                window.removeEventListener("mousemove", mouseMoveFn);
                window.removeEventListener("mouseup", mouseUpFn);
              }

              window.addEventListener("mousemove", mouseMoveFn);
              window.addEventListener("mouseup", mouseUpFn);
            }
          }
        }, {
          tag: "div",
          className: ["dp-volume-contrller-bg"],
          style: {
            height: 100 * this.video.volume + "px"
          }
        }]
      }]
    });
    this.changeVolume.appendChild(volumeContrller); // 画中画

    this.popWindowPlayer = render({
      tag: "div",
      className: ["iconfont", "icon-shiyongxiaochuangbofang", "dp-popWindow-player", "active"],
      methods: {
        click: function click() {
          _this.enterPictureInPicture();
        }
      }
    }); // 网页全屏

    this.documentFullScreen = render({
      tag: "div",
      className: ["iconfont", "icon-quanping1", "dp-document-full-screen", "active"],
      methods: {
        click: function click() {
          _this.documentFullScreenFn();
        }
      }
    }); // 全屏

    this.windowFullScreen = render({
      tag: "div",
      className: ["iconfont", "icon-quanping", "dp-window-full-screen", "active"],
      methods: {
        click: function click() {
          _this.changeWindowFullScreen();
        }
      }
    });
    rightBox.appendChild(this.speadSelect); // 选择清晰度

    if (this.options._parentSelf.selectUrlListIndex !== null && _typeof(this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex]) == "object" && this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.length > 1) {
      this.selectDefinition = render({
        tag: "div",
        className: ["dp-playback-rate-base", "dp-definition-base"],
        children: [{
          tag: "div",
          className: ['dp-definition-msg'],
          innerText: this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.filter(function (item) {
            return _this.options._parentSelf.baseUrlList[_this.options._parentSelf.selectUrlListIndex].defaultId == item.id;
          })[0].label || "选择清晰度"
        }, {
          tag: "div",
          className: ["dp-playback-rate-box"],
          children: this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.map(function (item, index) {
            var _a;

            return {
              tag: "div",
              innerText: (_a = item.label) !== null && _a !== void 0 ? _a : index + 1,
              className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, item.id === _this.options._parentSelf.baseUrlList[_this.options._parentSelf.selectUrlListIndex].defaultId ? "active" : ''],
              methods: {
                click: function click() {
                  if (_this.selectDefinition.querySelector(".dp-playback-rate-list.active").classList.contains("dp-playback-rate-list-num" + index)) {
                    return;
                  }

                  _this.selectDefinition.querySelector(".dp-definition-msg").innerText = item.label;
                  _this.options._parentSelf.baseUrlList[_this.options._parentSelf.selectUrlListIndex].defaultId = item.id;

                  _this.selectDefinition.querySelector(".dp-playback-rate-list.active").classList.remove("active");

                  _this.selectDefinition.querySelector(".dp-playback-rate-list-num" + index).classList.add("active");

                  _this.options._parentSelf.changeVideoSrc();
                }
              }
            };
          })
        }]
      });
      rightBox.appendChild(this.selectDefinition);
    } // 选集


    if (this.options._parentSelf.selectUrlListIndex !== null && this.options._parentSelf.baseUrlList.length > 1) {
      this.selectSrc = render({
        tag: "div",
        className: ["dp-playback-rate-base"],
        innerText: "选集",
        children: [{
          tag: "div",
          className: ["dp-playback-rate-box"],
          children: this.options._parentSelf.baseUrlList.map(function (item, index) {
            var _a;

            return {
              tag: "div",
              innerText: (_a = item.label) !== null && _a !== void 0 ? _a : index + 1,
              className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, index === _this.options._parentSelf.selectUrlListIndex ? "active" : ''],
              methods: {
                click: function click() {
                  _this.options._parentSelf.selectUrlListIndex = index;

                  _this.options._parentSelf.changeVideoSrc();
                }
              }
            };
          })
        }]
      });
      rightBox.appendChild(this.selectSrc);
    }

    rightBox.appendChild(this.changeVolume);
    rightBox.appendChild(this.popWindowPlayer);
    rightBox.appendChild(this.documentFullScreen);
    rightBox.appendChild(this.windowFullScreen); // 进度条

    this.progressBar = render({
      tag: "div",
      className: ["dp-time-contrller"],
      children: [{
        tag: "div",
        className: ["dp-time-contrller-box"],
        methods: {
          click: function click(e) {
            // this.pause()
            _this.progressBarClick(e); // setTimeout(()=>{
            //     this.play()
            // },30)

          }
        },
        children: [{
          tag: "div",
          className: ["dp-time-contrller-point"],
          methods: {
            mousedown: function mousedown(e) {
              e.stopPropagation();
              var _that = _this; // this.pause()

              function mouseMoveFn(e) {
                e.stopPropagation();

                _that.changeCurrentTime(e);
              }

              function mouseUpFn(e) {
                e.stopPropagation(); // setTimeout(()=>{
                //     _that.play()
                // })

                window.removeEventListener("mousemove", mouseMoveFn);
                window.removeEventListener("mouseup", mouseUpFn);
              }

              window.addEventListener("mousemove", mouseMoveFn);
              window.addEventListener("mouseup", mouseUpFn);
            }
          }
        }, {
          tag: "div",
          className: ["dp-time-contrller-bg"]
        }]
      }]
    }); // 最外层两个盒子插入控制条中

    this.contrllerDom.appendChild(leftBox);
    this.contrllerDom.appendChild(rightBox);
    this.contrllerDom.appendChild(this.progressBar);
  };

  Controller.prototype.bindEventListener = function () {
    var _this = this; // 读取视频元数据


    this.video.addEventListener("loadedmetadata", function () {
      _this.endTime.innerText = formatTime(_this.video.duration);
    }); // 视频播放触发

    this.video.addEventListener("play", function () {
      _this.changeBtn(true);

      _this.changeActionTime();
    }); // 视频暂停触发

    this.video.addEventListener("pause", function () {
      _this.changeBtn(false);

      cancelAnimationFrame(_this.reqAFId);
    }); // 音量改变触发

    this.video.addEventListener('volumechange', function () {
      if (_this.video.muted) {
        _this.changeVolume.querySelector(".icon-jingyin").classList.add("active");

        _this.changeVolume.querySelector(".icon-shengyin").classList.remove("active");
      } else {
        if (_this.video.volume <= 0) {
          _this.changeVolume.querySelector(".icon-jingyin").classList.add("active");

          _this.changeVolume.querySelector(".icon-shengyin").classList.remove("active");
        } else {
          _this.changeVolume.querySelector(".icon-jingyin").classList.remove("active");

          _this.changeVolume.querySelector(".icon-shengyin").classList.add("active");
        }
      }
    }); // 父元素获取焦点时激活快捷键

    this.parentDom.addEventListener("focus", function () {
      window.addEventListener("keydown", windowKeyDown);
    }); // 父元素失去焦点时移除快捷键

    this.parentDom.addEventListener("blur", function () {
      window.removeEventListener("keydown", windowKeyDown);
    }); // 快捷键处理事件

    var windowKeyDown = function windowKeyDown(e) {
      // e.preventDefault();
      if (e.altKey && e.ctrlKey && e.key === "Enter") {
        // alt + ctrl + enter  全屏
        _this.changeWindowFullScreen();

        return;
      } else if (e.altKey && e.key === "Enter") {
        // alt + enter  网页全屏
        _this.documentFullScreenFn();

        return;
      } else if (e.ctrlKey && e.key === "Enter") {
        // ctrl + enter 画中画
        _this.enterPictureInPicture();

        return;
      } // 空格控制播放暂停


      if (e.code === "Space") {
        if (_this.video.paused) {
          _this.play();
        } else {
          _this.pause();
        }

        return;
      } // esc退出全屏和网页全屏


      if (e.code === "Escape") {
        e.preventDefault();
        var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);

        if (isFull) {
          _this.exitFullscreen();
        }

        _this.exitDocumentFullScreenFn();

        _this.changeActionTime(false);

        return;
      } // 键盘 ↑ 控制音量增0.1


      if (e.code === "ArrowUp") {
        if (_this.video.volume + 0.1 >= 1) {
          _this.changeVolumeFn(1);

          return;
        }

        _this.changeVolumeFn(_this.video.volume += 0.1);

        return;
      } // 键盘 ↓ 控制音量减0.1


      if (e.code === "ArrowDown") {
        if (_this.video.volume - 0.1 <= 0) {
          _this.changeVolumeFn(0);

          return;
        }

        _this.changeVolumeFn(_this.video.volume -= 0.1);

        return;
      }
    }; // 视口大小改变的时候


    window.addEventListener("resize", function () {
      _this.changeActionTime();
    }); // 父元素鼠标移入移出事件

    var timeOutKey = undefined;

    var controllerShowFn = function controllerShowFn() {
      window.clearTimeout(timeOutKey);

      _this.show();

      timeOutKey = window.setTimeout(function () {
        _this.hide();
      }, 2000);
    };

    this.parentDom.addEventListener("mouseenter", controllerShowFn); // 父元素鼠标移动事件

    this.parentDom.addEventListener("mousemove", controllerShowFn); // 父元素鼠标移出事件

    this.parentDom.addEventListener("mouseleave", function () {
      window.clearTimeout(timeOutKey);

      _this.hide();
    }); // 鼠标移入控制条,保持控制条显示 已转入css控制
  }; // 播放


  Controller.prototype.play = function () {
    this.video.play();
  }; // 暂停


  Controller.prototype.pause = function () {
    this.video.pause();
  }; // 修改音量图标


  Controller.prototype.changeVolumeIcon = function (isMuted) {
    var jingyin = this.parentDom.querySelector(".icon-jingyin");
    var shengyin = this.parentDom.querySelector(".icon-shengyin"); // 静音

    if (isMuted) {
      jingyin.classList.add("active");
      shengyin.classList.remove("active");
    } else {
      shengyin.classList.add("active");
      jingyin.classList.remove("active");
    }
  }; // 修改音量元素


  Controller.prototype.changeVolumeDom = function () {
    var point = this.parentDom.querySelector(".dp-volume-contrller-point");
    var msg = this.parentDom.querySelector(".dp-volume-msg");
    var pointBg = this.parentDom.querySelector(".dp-volume-contrller-bg");

    if (this.video.volume >= 0.99) {
      this.video.volume = 1;
    }

    if (this.video.volume <= 0.01) {
      this.video.volume = 0;
    }

    if (this.video.volume === 0) {
      this.changeVolumeIcon(true);
    } else {
      this.changeVolumeIcon(false);
    }

    point.style.bottom = point.parentElement.offsetHeight * this.video.volume + "px";
    pointBg.style.height = point.parentElement.offsetHeight * this.video.volume + "px";
    msg.innerText = String(Math.floor(this.video.volume * 100));
  }; // 修改音量


  Controller.prototype.changeVolumeFn = function (volume) {
    this.video.muted = false;
    this.video.volume = volume;
    this.changeVolumeDom();
  }; // 开启画中画


  Controller.prototype.enterPictureInPicture = function () {
    if (document.pictureInPictureEnabled && !this.video.disablePictureInPicture) {
      try {
        // 检查有没有元素进入画中画
        if (document.pictureInPictureElement) {
          // 退出画中画
          document.exitPictureInPicture();
          return;
        } // 进入画中画


        this.video.requestPictureInPicture();
      } catch (err) {
        console.error(err);
      }
    }
  }; // 网页全屏


  Controller.prototype.documentFullScreenFn = function () {
    // 首先判断网页是否进入全屏状态
    // 如果进入全屏状态,退出全屏状态
    var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    isFull ? this.exitFullscreen() : ""; // 如果拥有dp-webfullscreen类名并且没有进入全屏退出网页全屏状态, 否则取消网页全屏状态

    if (this.video.parentElement.classList.contains("dp-webfullscreen") && !isFull) {
      this.exitDocumentFullScreenFn();
    } else {
      var html = document.querySelector('html');
      var body = document.querySelector('body');
      this.video.parentElement.classList.add("dp-webfullscreen");
      html.style.overflow = 'hidden';
      html.style.height = '100%';
      body.style.overflow = 'hidden';
      body.style.height = '100%';
    }

    var _parentSelf = this.options._parentSelf;

    _parentSelf.recalculateDrawingPosition();

    this.changeActionTime(false);
  };

  Controller.prototype.exitDocumentFullScreenFn = function () {
    this.video.parentElement.classList.remove("dp-webfullscreen");
    var html = document.querySelector('html');
    var body = document.querySelector('body');
    html.removeAttribute("style");
    body.removeAttribute("style");
    var _parentSelf = this.options._parentSelf;

    _parentSelf.recalculateDrawingPosition();

    this.changeActionTime(false);
  }; // 全屏


  Controller.prototype.fullScreen = function (element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  Controller.prototype.exitFullscreen = function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  Controller.prototype.changeWindowFullScreen = function () {
    var _parentSelf = this.options._parentSelf;
    var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);

    if (isFull) {
      this.exitFullscreen();
    } else {
      this.fullScreen(this.video.parentElement);
    }

    _parentSelf.recalculateDrawingPosition();

    this.changeActionTime(false);
  }; // 改变当前时间


  Controller.prototype.changeActionTime = function (flag, isjump) {
    if (flag === void 0) {
      flag = true;
    }

    if (isjump === void 0) {
      isjump = false;
    }

    if (!this.timePoint || !this.timePointbg) {
      this.timePoint = this.contrllerDom.querySelector(".dp-time-contrller-point");
      this.timePointbg = this.contrllerDom.querySelector(".dp-time-contrller-bg");
    }

    var allTime = this.video.duration;
    var time = this.video.currentTime;
    var offsetWidth = this.contrllerDom.offsetWidth;
    this.timePoint.style.left = time / allTime * offsetWidth + "px";
    this.timePointbg.style.width = time / allTime * offsetWidth + "px";
    this.actionTime.innerText = formatTime(time);
    !this.video.paused && flag && (this.reqAFId = requestAnimationFrame(this.changeActionTime.bind(this)));
    isjump ? this.video.dispatchEvent(this.progressBarJumpChange) : this.video.dispatchEvent(this.progressBarChange);
  }; // 修改进度条


  Controller.prototype.changeCurrentTime = function (e, offsetx) {
    var allTime = this.video.duration;
    var offsetWidth = this.contrllerDom.offsetWidth;
    var basePro = allTime / offsetWidth;
    var isJump = false;

    if (e) {
      this.video.currentTime += e.movementX * basePro;
      isJump = true;
    }

    if (offsetx !== undefined) {
      this.video.currentTime = offsetx * basePro;
      isJump = true;
    }

    this.changeActionTime(undefined, isJump);
  }; // 进度条点击事件


  Controller.prototype.progressBarClick = function (e) {
    if (e.target === this.parentDom.querySelector(".dp-time-contrller-box")) {
      this.changeCurrentTime(undefined, e.offsetX);
    }
  }; // 切换播放暂停按钮


  Controller.prototype.changeBtn = function (play) {
    if (play) {
      this.leftBox_play.classList.remove("active");
      this.leftBox_pause.classList.add("active");
    } else {
      this.leftBox_pause.classList.remove("active");
      this.leftBox_play.classList.add("active");
    }
  }; // 修改倍速


  Controller.prototype.changePlaybackRate = function (className, spead, lebal) {
    var acItem = this.speadSelect.querySelector("." + className);

    if (acItem.classList.contains("active")) {
      return;
    }

    this.speadSelect.querySelector('.dp-playback-rate-list.active').classList.remove("active");
    acItem.classList.add("active");
    acItem.parentElement.style.pointerEvents = "none";
    acItem.parentElement.style.opacity = "0";
    setTimeout(function () {
      acItem.parentElement.style.pointerEvents = "";
      acItem.parentElement.style.opacity = "";
    }, 501);
    this.video.playbackRate = spead;
    this.parentDom.querySelector(".dp-playback-rate-msg").innerText = lebal;
  }; // 获取最外层元素


  Controller.prototype.getElement = function () {
    return this.contrllerDom;
  }; // 卸载进度条并且重新渲染进度条


  Controller.prototype.unload = function () {
    this.timePoint = this.timePointbg = null;
    this.contrllerDom.parentElement.removeChild(this.contrllerDom);
    this.creatContrller();
  }; // 进度条隐藏


  Controller.prototype.hide = function () {
    this.parentDom.style.cursor = "none";
    this.contrllerDom.style.opacity = "0";
  }; // 进度条显示


  Controller.prototype.show = function () {
    this.parentDom.style.cursor = "auto";
    this.contrllerDom.style.opacity = "1";
  };

  return Controller;
}();

/* harmony default export */ var creatController = (creatController_Controller);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(96);

// CONCATENATED MODULE: ./src/core/barrage.ts






var barrage_Barrage =
/** @class */
function () {
  function Barrage(parentElement, barrageList, options) {
    // 创建canvas元素
    this.barrage = document.createElement("canvas");
    this.barrageCtx = this.barrage.getContext("2d"); // 父元素

    this.parent = undefined; // 弹幕列表

    this.barrageBaseList = undefined; // 引用对象 修改会导致原对象发生改变

    this.deepBarrageBaseList = undefined; // 深拷贝对象
    // 配置项

    this.options = undefined; // 弹幕行高

    this.barrageLineHeight = 28; // 渲染位置数组

    this.renderPosition = []; // 渲染弹幕数组

    this.renderBarrageArray = []; // 弹幕持续时间

    this.barrageDuration = 12; // 单位:秒

    this.parent = parentElement;
    this.barrageBaseList = barrageList;
    this.options = options;
    this.deepCopy();
    styleList(this.barrage, {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 2,
      transition: "all 0.3s"
    });
    this.bindEventListener();
  }
  /**
   * 绑定监听事件
   */


  Barrage.prototype.bindEventListener = function () {
    var _this = this;

    this.parent.addEventListener("parentSizeChange", function (e) {
      if (_this.barrage.width !== e.detail.width && _this.barrage.height !== e.detail.height) {
        // 设置弹幕容器大小
        _this.setBarrage(e.detail); // 重新计算弹道位置


        _this.countRenderPosition();
      } else {
        _this.resetRenderAndPosition();

        _this.joinInCanvas();
      }
    });

    this.options._parentSelf.videoDom.addEventListener("progressBarChange", function (e) {
      if (e.detail.timeJump) {
        _this.resetRenderAndPosition();
      }

      _this.upDateRenderBarrageArray();

      _this.joinInCanvas();

      if (e.detail.timeJump) {
        _this.renderBarrageArray.length = 0;
      }
    });
  };
  /**
   * 深拷贝对象
   * @param barrageBaseList 原对象
   * @param copyOptions 深拷贝赋值对象
   */


  Barrage.prototype.deepCopy = function () {
    this.deepBarrageBaseList = JSON.parse(JSON.stringify(this.barrageBaseList));

    for (var i = 0; i < this.deepBarrageBaseList.length; i++) {
      this.deepBarrageBaseList[i].textWidth = undefined;
    }
  };
  /**
   * 设置canvas属性
   */


  Barrage.prototype.setBarrage = function (e) {
    this.barrage.width = e.width;
    this.barrage.height = e.height;
  };
  /**
   * 返回canvas元素
   */


  Barrage.prototype.getElement = function () {
    return this.barrage;
  };
  /**
   * 计算轨道位置
   */


  Barrage.prototype.countRenderPosition = function () {
    this.renderPosition.length = 0;
    var height = this.options._parentSelf.p_height;

    for (var i = 1, len = height / this.barrageLineHeight; i < len; i++) {
      var item = {
        top: i * this.barrageLineHeight,
        lastBarrage: undefined,
        canMoveJoin: true,
        canTopJoin: true,
        canBottomJoin: true
      };
      this.renderPosition.push(item);
    }
  };
  /**
   * 绘制到canvas中
   */


  Barrage.prototype.joinInCanvas = function () {
    var renderBarrageArray = this.renderBarrageArray;
    var _a = this.options._parentSelf,
        videoDom = _a.videoDom,
        p_width = _a.p_width,
        p_height = _a.p_height;
    this.barrageCtx.clearRect(0, 0, p_width, p_height);

    for (var i = 0, len = renderBarrageArray.length; i < len; i++) {
      /*
      当前位置计算公式:
      (出现时间+持续时间-当前时间) * ((文字宽度+dom宽度)/持续时间)
      * */
      // 当前运行时间
      var runTime = renderBarrageArray[i].timePoint + this.barrageDuration - videoDom.currentTime; // 当前速度

      var speed = (renderBarrageArray[i].textWidth + p_width) / this.barrageDuration;
      var x = null;
      var textAlign = "left";

      switch (renderBarrageArray[i].position) {
        case "bottom":
        case "top":
          textAlign = "center";
          x = p_width / 2;
          break;

        case "move":
        default:
          // 距离右侧的距离
          x = runTime * speed - renderBarrageArray[i].textWidth;
          break;
      } // x <= p_width - 10两个弹幕空出10个像素点的位置


      if (renderBarrageArray[i].position === "move" && x <= p_width - renderBarrageArray[i].textWidth && this.renderPosition[renderBarrageArray[i].renderPositionIndex].lastBarrage === renderBarrageArray[i]) {
        this.renderPosition[renderBarrageArray[i].renderPositionIndex].canMoveJoin = true;
      }

      this.setFontStyle(renderBarrageArray[i].color, textAlign);
      this.barrageCtx.strokeText(renderBarrageArray[i].msg, x, this.renderPosition[renderBarrageArray[i].renderPositionIndex].top); //fillText("要添加的文字",x0坐标，y0坐标)

      this.barrageCtx.fillText(renderBarrageArray[i].msg, x, this.renderPosition[renderBarrageArray[i].renderPositionIndex].top);
    }
  };
  /**
   * 设置fontStyle
   * @param color 文字颜色
   * @param textAlign 文字对齐方式
   * @param font 文字字体,文字大小等
   */


  Barrage.prototype.setFontStyle = function (color, textAlign, font) {
    this.barrageCtx.fillStyle = color !== null && color !== void 0 ? color : "#FFF";
    this.barrageCtx["font"] = font !== null && font !== void 0 ? font : "25px bold SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif";
    this.barrageCtx.textAlign = textAlign !== null && textAlign !== void 0 ? textAlign : "left";
  };
  /**
   * upDateRenderBarrageArray
   * 更新弹幕渲染数组
   */


  Barrage.prototype.upDateRenderBarrageArray = function () {
    var _a = this,
        deepBarrageBaseList = _a.deepBarrageBaseList,
        options = _a.options,
        renderPosition = _a.renderPosition;

    var videoDom = options._parentSelf.videoDom; // 删除数据

    var len = this.renderBarrageArray.length;

    while (len--) {
      if (this.renderBarrageArray[len].timePoint + this.barrageDuration < videoDom.currentTime) {
        if (this.renderBarrageArray[len].position === "top") {
          renderPosition[this.renderBarrageArray[len].renderPositionIndex].canTopJoin = true;
        } else if (this.renderBarrageArray[len].position === "bottom") {
          renderPosition[this.renderBarrageArray[len].renderPositionIndex].canBottomJoin = true;
        }

        this.renderBarrageArray.splice(len, 1);
      }
    } // 插入数据


    for (var i = 0; i < deepBarrageBaseList.length; i++) {
      if (!deepBarrageBaseList[i].textWidth) {
        this.setFontStyle();
        deepBarrageBaseList[i].textWidth = this.barrageCtx.measureText(deepBarrageBaseList[i].msg).width;
      }

      if (Math.floor(videoDom.currentTime) === Math.floor(deepBarrageBaseList[i].timePoint) && this.renderBarrageArray.indexOf(deepBarrageBaseList[i]) == -1) {
        var flag = true;
        var canPush = true;

        for (var j = 0, len_1 = renderPosition.length; j < len_1; j++) {
          // 判断top的情况
          if (deepBarrageBaseList[i].position === "top" && renderPosition[j].canTopJoin) {
            deepBarrageBaseList[i].renderPositionIndex = j;
            renderPosition[j].canTopJoin = false;
            flag = false;
            break;
          } else if (deepBarrageBaseList[i].position === "bottom" && renderPosition[renderPosition.length - j - 1].canBottomJoin) {
            // 判断bottom的情况
            deepBarrageBaseList[i].renderPositionIndex = renderPosition.length - 1 - j;
            renderPosition[renderPosition.length - j - 1].canBottomJoin = false;
            flag = false;
            break;
          } else if (deepBarrageBaseList[i].position === "move" && renderPosition[j].canMoveJoin) {
            // 判断move的情况
            deepBarrageBaseList[i].renderPositionIndex = j;
            renderPosition[j].lastBarrage = deepBarrageBaseList[i];
            renderPosition[j].canMoveJoin = false;
            flag = false;
            break;
          }
        } // 如果同时间触发弹幕数量过大直接丢弃该弹幕


        if (flag) {
          canPush = false;
        }

        canPush && this.renderBarrageArray.push(deepBarrageBaseList[i]);
      }
    }
  };
  /**
   * 重置渲染弹幕数组和轨道数组
   */


  Barrage.prototype.resetRenderAndPosition = function () {
    this.renderBarrageArray.length = 0;

    for (var i = 0; i < this.renderPosition.length; i++) {
      this.renderPosition[i].canMoveJoin = true;
      this.renderPosition[i].canBottomJoin = true;
      this.renderPosition[i].canTopJoin = true;
      this.renderPosition[i].lastBarrage = undefined;
    }
  };
  /**
   * 更新弹幕, 为了切换视频的时候更新弹幕
   */


  Barrage.prototype.setRenderBarrageArray = function (barrageList) {
    this.resetRenderAndPosition();
    this.barrageBaseList = barrageList;
    this.deepCopy();
  };
  /**
   * 添加弹幕
   */


  Barrage.prototype.joinRenderBarrageArray = function (barrageList) {
    if (Object.prototype.toString.call(barrageList) === "[object Array]") {
      for (var i = 0; i < barrageList.length; i++) {
        var objTemp = barrageList[i];
        objTemp.textWidth = undefined;
        this.deepBarrageBaseList.push(barrageList);
      }
    } else {
      var objTemp = barrageList;
      objTemp.textWidth = undefined;
      this.deepBarrageBaseList.push(objTemp);
    } // this.deepCopy();
    // this.resetRenderAndPosition();

  };
  /**
   * 弹幕显示
   */


  Barrage.prototype.show = function () {
    this.barrage.style.opacity = "1";
  };
  /**
   * 弹幕隐藏
   */


  Barrage.prototype.hide = function () {
    this.barrage.style.opacity = "0";
  };

  return Barrage;
}();

/* harmony default export */ var barrage = (barrage_Barrage);
// CONCATENATED MODULE: ./src/core/index.ts







var core_Core =
/** @class */
function () {
  function Core(parentNode, urlList, options) {
    // 传入的父级dom节点
    this.parentDom = null;
    this.p_width = null;
    this.p_height = null;
    this.lp_player_box = document.createElement("div"); // 生成子级dom
    // video Dom节点

    this.videoDom = document.createElement('video');
    this.video_width = 0;
    this.video_height = 0; // 中转canvas节点

    this.centerCanvasDom = document.createElement("canvas");
    this.centerCan = this.centerCanvasDom.getContext("2d");
    this.drup_width = null;
    this.drup_height = null;
    this.drup_top = null;
    this.drup_left = null; // 最后输出的canvas节点

    this.finalCanvasDom = document.createElement("canvas");
    this.finalCan = this.finalCanvasDom.getContext("2d"); // 控制条dom

    this.controller = undefined; // baseUrlList

    this.baseUrlList = undefined;
    this.selectUrlListIndex = null;
    this.maxListindex = null; // 基本设置

    this.baseOptions = {
      barrageShow: true,
      barrageList: [],
      barrageScope: 1500,
      title: {
        show: true,
        label: 'Title' // 标题显示内容

      },
      // 控制条显示
      controller: true,
      // 控制条配置项, 如果用户手动指定则按照用户手动指定的解析
      controllerOption: {
        play: true,
        next: false,
        clarity: false,
        volume: true,
        playbackRate: true,
        playbackRateList: [{
          speed: 0.5,
          label: "0.5x"
        }, {
          speed: 0.75,
          label: "0.75x"
        }, {
          speed: 1.0,
          label: "1.0x",
          default: true
        }, {
          speed: 1.25,
          label: "1.25x"
        }, {
          speed: 1.5,
          label: "1.5x"
        }, {
          speed: 2.0,
          label: "2.0x"
        }],
        togglePip: true,
        documentFull: true,
        windowFull: true,
        Mirror: false // 镜像 默认false

      },
      _parentSelf: this
    }; //渲染canvas的 requestAnimationFrameID

    this.reqAFId = null; // 弹幕

    this.barrage = undefined; // 当前时间点:

    this.currentTime = 0; // 菜单

    this.menu = null; // 镜像反转

    this.reversal = false; // 滤镜功能的值

    this.filterVal = {
      R: 100,
      G: 100,
      B: 100,
      A: 100
    }; // 初始化外部传入的dom

    this.parentDom = parentNode;
    this.p_width = this.parentDom.offsetWidth;
    this.p_height = this.parentDom.offsetHeight;
    this.baseUrlList = urlList; // 合并配置项

    Object.assign(this.baseOptions, options); // 判断传入的是否是数组

    if (whatUrlType(urlList) === 2) {
      this.selectUrlListIndex = 0;
      this.maxListindex = urlList.length - 1; // 设置子元素的样式以及属性

      this.setChildDom(typeof this.baseUrlList[this.selectUrlListIndex] == "string" ? this.baseUrlList[this.selectUrlListIndex] : this.getUrl(this.baseUrlList[this.selectUrlListIndex]));
    } else {
      this.setChildDom(urlList);
    } // 创建弹幕


    this.barrage = new barrage(this.lp_player_box, this.baseOptions.barrageList, this.baseOptions); // 创建控制条

    this.controller = new creatController(this.videoDom, this.lp_player_box, this.baseOptions); // 插入到传入元素中

    this.joinHtml(); // 给video添加事件

    this.videoBindEvent();
  } // 元素插入html中


  Core.prototype.joinHtml = function () {
    this.lp_player_box.appendChild(this.videoDom);
    this.lp_player_box.appendChild(this.centerCanvasDom);
    this.lp_player_box.appendChild(this.finalCanvasDom);
    this.lp_player_box.appendChild(this.controller.getElement());
    this.lp_player_box.appendChild(this.barrage.getElement());
    this.parentDom.appendChild(this.lp_player_box);
  }; // 设置创建出来的元素的数据


  Core.prototype.setChildDom = function (urlList) {
    this.lp_player_box.classList.add("dp-video-player");
    this.lp_player_box.setAttribute("tabindex", "0");
    this.lp_player_box.setAttribute("hidefocus", "true");
    styleList(this.lp_player_box, {
      width: "100%",
      height: "100%",
      background: '#000',
      position: "relative",
      overflowL: "hidden",
      outline: "0"
    });
    styleList(this.videoDom, {
      width: this.p_width + "px",
      height: this.p_height + "px",
      display: 'none'
    });
    this.videoDom.src = urlList; // 使用断言取消报错

    this.videoDom.autoplay = true;
    this.videoDom.controls = true;
    this.videoDom.muted = true;
    this.centerCanvasDom.width = this.p_width;
    this.centerCanvasDom.height = this.p_height;
    styleList(this.centerCanvasDom, {
      display: 'none'
    });
    this.finalCanvasDom.width = this.p_width;
    this.finalCanvasDom.height = this.p_height;
  }; // 开始监听video


  Core.prototype.listenVideo = function () {
    if (!this.video_width && !this.video_height) {
      this.reqAFId = requestAnimationFrame(this.listenVideo.bind(this));
      return;
    }

    this.countWhereDrop();
    this.centerCan.clearRect(0, 0, this.p_width, this.p_height);

    if (this.reversal) {
      this.centerCan.translate(this.p_width, 0);
      this.centerCan.scale(-1, 1);
    }

    this.centerCan.drawImage(this.videoDom, this.drup_left, this.drup_top, this.drup_width, this.drup_height);

    if (this.reversal) {
      this.centerCan.translate(this.p_width, 0);
      this.centerCan.scale(-1, 1);
    }

    var imageData = this.centerCan.getImageData(0, 0, this.p_width, this.p_height);
    this.canvasFilter(imageData, this.filterVal);
    this.finalCan.putImageData(imageData, 0, 0); // 添加当前时间节点

    this.currentTime = Math.ceil(this.videoDom.currentTime + 0.5);
    this.reqAFId = requestAnimationFrame(this.listenVideo.bind(this));
  }; // 给video添加事件处理函数


  Core.prototype.videoBindEvent = function () {
    var _this = this;

    this.videoDom.addEventListener('canplay', function () {
      _this.video_width = _this.videoDom.videoWidth;
      _this.video_height = _this.videoDom.videoHeight;

      _this.recalculateDrawingPosition(false, false);
    });
    this.videoDom.addEventListener("play", function () {
      _this.listenVideo();
    });
    this.videoDom.addEventListener("pause", function () {
      cancelAnimationFrame(_this.reqAFId);
    });
    window.addEventListener("resize", function () {
      _this.recalculateDrawingPosition(false);
    });
    window.addEventListener("click", function () {
      _this.delMenu();
    });
    this.lp_player_box.addEventListener("click", function (e) {
      if (e.target === _this.barrage.getElement() || e.target === _this.finalCanvasDom) {
        if (_this.videoDom.paused) {
          _this.controller.play();
        } else {
          _this.controller.pause();
        }
      }
    });
    this.lp_player_box.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // 阻止默认事件

      _this.delMenu();

      console.log(event);
      _this.menu = render({
        tag: "div",
        className: ["dp-menu"],
        style: {
          left: event.offsetX + "px",
          top: event.offsetY + "px"
        },
        children: [{
          tag: "div",
          innerText: "水平镜像翻转",
          methods: {
            click: function click(e) {
              e.stopPropagation();

              _this.delMenu();

              _this.reversal = !_this.reversal;

              _this.listenVideo();
            }
          }
        }, {
          tag: "div",
          innerText: "色彩调整(未实现)",
          methods: {
            click: function click(e) {
              e.stopPropagation();

              _this.delMenu();

              console.log("未实现");
            }
          }
        }, {
          tag: "div",
          innerText: "github",
          methods: {
            click: function click(e) {
              e.stopPropagation();

              _this.delMenu();

              window.open("https://github.com/lidppp/dp-video");
            }
          }
        }, {
          tag: "div",
          innerText: "博客地址",
          methods: {
            click: function click(e) {
              e.stopPropagation();

              _this.delMenu();

              window.open("https://www.lidppp.com");
            }
          }
        }]
      });

      _this.lp_player_box.appendChild(_this.menu);
    });
  };
  /**
   * 删除menu
   */


  Core.prototype.delMenu = function () {
    if (this.menu && this.menu.parentElement) {
      this.menu.parentElement.removeChild(this.menu);
    }

    this.menu = undefined;
  };
  /**
   * 计算绘图位置, 不计算会导致渲染出来的画面变形
   * @param flag 是否强制刷新
   * @param dispatch 是否触发事件
   */


  Core.prototype.countWhereDrop = function (flag, dispatch) {
    if (flag === void 0) {
      flag = true;
    }

    if (dispatch === void 0) {
      dispatch = true;
    }

    if (flag && this.p_width == this.lp_player_box.offsetWidth && this.p_width != null || flag && this.p_height == this.lp_player_box.offsetHeight && this.p_height != null) {
      return;
    }

    this.p_width = this.lp_player_box.offsetWidth;
    this.p_height = this.lp_player_box.offsetHeight;
    this.centerCanvasDom.width = this.p_width;
    this.centerCanvasDom.height = this.p_height;
    this.finalCanvasDom.width = this.p_width;
    this.finalCanvasDom.height = this.p_height;
    /*
    * 需要保证比例不变
    * 公式  变形值x = 原始值y * 变形值y / 原始值 x
    * 假设原始为 240 w , 300 h
    *    变形为 500 w , x h
    *       240 / 300 == 500 / x
    *       x = (300 * 500) / 240
    * */
    // 竖屏

    if (this.video_height > this.video_width) {
      this.drup_top = 0;
      this.drup_height = this.p_height;
      this.drup_width = this.video_width * (this.p_height / this.video_height);
      this.drup_left = Math.abs(this.p_width - this.drup_width) / 2;
    } else {
      // 横屏
      this.drup_left = 0;
      this.drup_width = this.p_width;
      this.drup_height = this.video_height * (this.p_width / this.video_width);
      this.drup_top = Math.abs(this.p_height - this.drup_height) / 2;
    } // 如果横屏的放到画面上的高度比p_height大的话以竖屏处理


    if (this.drup_height > this.p_height) {
      this.drup_top = 0;
      this.drup_height = this.p_height;
      this.drup_width = this.video_width * (this.p_height / this.video_height);
      this.drup_left = Math.abs(this.p_width - this.drup_width) / 2;
    } // 父元素大小改变事件触发


    dispatch && this.lp_player_box.dispatchEvent(this.parentSizeChange());
  };
  /**
   * 重新计算绘画位置并且重绘
   * @param flag 是否强制刷新
   * @param dispatch 是否触发事件
   */


  Core.prototype.recalculateDrawingPosition = function (flag, dispatch) {
    var _this = this;

    if (flag === void 0) {
      flag = true;
    }

    if (dispatch === void 0) {
      dispatch = true;
    }

    this.countWhereDrop(flag, dispatch);
    this.listenVideo();
    setTimeout(function () {
      cancelAnimationFrame(_this.reqAFId);
    });
  }; // 修改video src


  Core.prototype.changeVideoSrc = function () {
    var src = typeof this.baseUrlList[this.selectUrlListIndex] == "string" ? this.baseUrlList[this.selectUrlListIndex] : this.getUrl(this.baseUrlList[this.selectUrlListIndex]);
    this.videoDom.src = src;
    this.controller.unload();
    this.lp_player_box.appendChild(this.controller.getElement());
    this.barrage.resetRenderAndPosition();
  }; // 获取url


  Core.prototype.getUrl = function (item) {
    var id = item.defaultId;
    var selectList = item.urlList.filter(function (obj) {
      return obj.id === id;
    });
    return selectList[0].url;
  }; // 父元素大小改变事件


  Core.prototype.parentSizeChange = function () {
    return new CustomEvent("parentSizeChange", {
      detail: {
        width: this.p_width,
        height: this.p_height
      }
    });
  };
  /**
   * 更新弹幕
   */


  Core.prototype.setBarrageList = function (barrageList) {
    this.barrage.setRenderBarrageArray(barrageList);
  };
  /**
   * 加入弹幕
   */


  Core.prototype.joinBarrageList = function (barrageList) {
    this.barrage.joinRenderBarrageArray(barrageList);
  };

  Core.prototype.canvasFilter = function (arr, filterVal) {
    if (!filterVal || filterVal.R === 100 && filterVal.G === 100 && filterVal.B === 100 && filterVal.A === 100) {
      return;
    }

    var data = arr.data;
    var r = filterVal.R / 100,
        g = filterVal.G / 100,
        b = filterVal.B / 100;

    for (var i = 0; i < data.length; i += 4) {
      data[i] = data[i] * r;
      data[i + 1] = data[i + 1] * g;
      data[i + 2] = data[i + 2] * b;
      data[i + 3] = data[i + 3] * filterVal.A;
    }
  }; // 创建拓展接口, 后续可能会用到 先写上

  /*
  import VideoL from "./core/index"
  VideoL.extend("add",function(num1,num2){
      return num1+num2
  })
  * */


  Core.extend = function (name, fn) {
    Core.prototype[name] = fn;

    if (this.prototype[name]) {
      return !!1;
    } else {
      return false;
    }
  };

  return Core;
}();

/* harmony default export */ var core = (core_Core);
// EXTERNAL MODULE: ./src/icon/iconfont.css
var iconfont = __webpack_require__(98);

// EXTERNAL MODULE: ./src/css/global.css
var global = __webpack_require__(99);

// CONCATENATED MODULE: ./src/video/1.mp4
/* harmony default export */ var _1 = (__webpack_require__.p + "video/1.mp4");
// CONCATENATED MODULE: ./src/video/mov_bbb.mp4
/* harmony default export */ var mov_bbb = (__webpack_require__.p + "video/mov_bbb.mp4");
// CONCATENATED MODULE: ./src/index.js





/* harmony default export */ var src = __webpack_exports__["default"] = (core);

/***/ })
/******/ ])["default"];