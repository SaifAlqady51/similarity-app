/*FB_PKG_DELIM*/

("use strict");
(function () {
  var a =
    (typeof globalThis !== "undefined" && globalThis) ||
    (typeof self !== "undefined" && self) ||
    (typeof global !== "undefined" && global);
  if (typeof a.AbortController !== "undefined") return;
  var b = (function () {
      function a() {
        this.__listeners = new Map();
      }
      a.prototype = Object.create(Object.prototype);
      a.prototype.addEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        d.has(e) || d.set(e, new Map());
        var f = d.get(e);
        f.has(b) || f.set(b, c);
      };
      a.prototype.removeEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        if (d.has(e)) {
          var f = d.get(e);
          f.has(b) && f["delete"](b);
        }
      };
      a.prototype.dispatchEvent = function (a) {
        if (!(a instanceof Event))
          throw new TypeError(
            "Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'."
          );
        var b = a.type,
          c = this.__listeners;
        c = c.get(b);
        if (c)
          for (
            var b = c.entries(),
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= b.length) break;
              f = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var g = f[0];
            f = f[1];
            try {
              typeof g === "function"
                ? g.call(this, a)
                : g && typeof g.handleEvent === "function" && g.handleEvent(a);
            } catch (a) {
              setTimeout(function () {
                throw a;
              });
            }
            f && f.once && c["delete"](g);
          }
        return !0;
      };
      return a;
    })(),
    c = {};
  a.AbortSignal = (function () {
    function a(a) {
      if (a !== c) throw new TypeError("Illegal constructor.");
      b.call(this);
      this._aborted = !1;
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    Object.defineProperty(a.prototype, "onabort", {
      get: function () {
        return this._onabort;
      },
      set: function (a) {
        var b = this._onabort;
        b && this.removeEventListener("abort", b);
        this._onabort = a;
        this.addEventListener("abort", a);
      },
    });
    Object.defineProperty(a.prototype, "aborted", {
      get: function () {
        return this._aborted;
      },
    });
    return a;
  })();
  a.AbortController = (function () {
    function a() {
      this._signal = new AbortSignal(c);
    }
    a.prototype = Object.create(Object.prototype);
    Object.defineProperty(a.prototype, "signal", {
      get: function () {
        return this._signal;
      },
    });
    a.prototype.abort = function () {
      var a = this.signal;
      a.aborted || ((a._aborted = !0), a.dispatchEvent(new Event("abort")));
    };
    return a;
  })();
})();
Array.from ||
  (Array.from = function (a) {
    if (a == null) throw new TypeError("Object is null or undefined");
    var b = arguments[1],
      c = arguments[2],
      d = this,
      e = Object(a),
      f =
        typeof Symbol === "function"
          ? typeof Symbol === "function"
            ? Symbol.iterator
            : "@@iterator"
          : "@@iterator",
      g = typeof b === "function",
      h = typeof e[f] === "function",
      i = 0,
      j,
      k;
    if (h) {
      j = typeof d === "function" ? new d() : [];
      var l = e[f](),
        m;
      while (!(m = l.next()).done)
        (k = m.value), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
      j.length = i;
      return j;
    }
    var n = e.length;
    (isNaN(n) || n < 0) && (n = 0);
    j = typeof d === "function" ? new d(n) : new Array(n);
    while (i < n) (k = e[i]), g && (k = b.call(c, k, i)), (j[i] = k), (i += 1);
    j.length = i;
    return j;
  });

("use strict");
(function () {
  if (!Array.prototype.flat) {
    var a = function b(a) {
      return a < 1
        ? Array.prototype.slice.call(this)
        : Array.prototype.reduce.call(
            this,
            function (c, d) {
              Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
              return c;
            },
            []
          );
    };
    Array.prototype.flat = function () {
      return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]));
    };
  }
  if (!Array.prototype.flatMap) {
    var b = function (a, b) {
      var c = [];
      if (typeof b !== "function")
        throw new TypeError("Callback function must be callable.");
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d, a);
        Array.isArray(e) ? c.push.apply(c, e) : c.push(e);
      }
      return c;
    };
    Array.prototype.flatMap = function (a) {
      var c = arguments[1] || this;
      return b(c, a);
    };
  }
})();
("use strict");
(function (a) {
  function b(a, b) {
    if (this == null)
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined"
      );
    if (typeof a !== "function")
      throw new TypeError("predicate must be a function");
    var c = Object(this),
      d = c.length >>> 0;
    for (var e = 0; e < d; e++) if (a.call(b, c[e], e, c)) return e;
    return -1;
  }
  Array.prototype.findIndex || (Array.prototype.findIndex = b);
  Array.prototype.find ||
    (Array.prototype.find = function (a, c) {
      if (this == null)
        throw new TypeError("Array.prototype.find called on null or undefined");
      a = b.call(this, a, c);
      return a === -1 ? void 0 : this[a];
    });
  Array.prototype.fill ||
    (Array.prototype.fill = function (a) {
      if (this == null)
        throw new TypeError("Array.prototype.fill called on null or undefined");
      var b = Object(this),
        c = b.length >>> 0,
        d = arguments[1],
        e = d >> 0,
        f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
        g = arguments[2],
        h = g === void 0 ? c : g >> 0,
        i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
      while (f < i) (b[f] = a), f++;
      return b;
    });
})();
typeof Number.isFinite !== "function" &&
  (Number.isFinite = function (a) {
    return typeof a === "number" && isFinite(a);
  }),
  typeof Number.isNaN !== "function" &&
    (Number.isNaN = function (a) {
      return typeof a === "number" && isNaN(a);
    }),
  typeof Number.EPSILON !== "number" && (Number.EPSILON = Math.pow(2, -52)),
  typeof Number.MAX_SAFE_INTEGER !== "number" &&
    (Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1),
  typeof Number.MIN_SAFE_INTEGER !== "number" &&
    (Number.MIN_SAFE_INTEGER = -1 * Number.MAX_SAFE_INTEGER),
  typeof Number.isInteger !== "function" &&
    (Number.isInteger = function (a) {
      return Number.isFinite(a) && Math.floor(a) === a;
    }),
  typeof Number.isSafeInteger !== "function" &&
    (Number.isSafeInteger = function (a) {
      return (
        Number.isFinite(a) &&
        a >= Number.MIN_SAFE_INTEGER &&
        a <= Number.MAX_SAFE_INTEGER &&
        Math.floor(a) === a
      );
    }),
  typeof Number.parseInt !== "function" && (Number.parseInt = parseInt),
  typeof Number.parseFloat !== "function" && (Number.parseFloat = parseFloat);
(function () {
  "use strict";
  var a = Array.prototype.indexOf;
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      "use strict";
      if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d))
        return a.apply(this, arguments) !== -1;
      var e = Object(this),
        f = e.length ? b(e.length) : 0;
      if (f === 0) return !1;
      var g = arguments.length > 1 ? c(arguments[1]) : 0,
        h = g < 0 ? Math.max(f + g, 0) : g,
        i = Number.isNaN(d);
      while (h < f) {
        var j = e[h];
        if (j === d || (i && Number.isNaN(j))) return !0;
        h++;
      }
      return !1;
    });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
  if (!Array.prototype.values) {
    var e = typeof Symbol === "function" ? Symbol.iterator : "@@iterator",
      f = (function () {
        function a(a) {
          this.$1 = void 0;
          this.$2 = 0;
          if (a == null)
            throw new TypeError("Cannot convert undefined or null to object");
          this.$1 = Object(a);
        }
        var b = a.prototype;
        b.next = function () {
          if (this.$1 == null || this.$2 >= this.$1.length) {
            this.$1 = void 0;
            return { value: void 0, done: !0 };
          }
          var a = this.$1[this.$2];
          this.$2++;
          return { value: a, done: !1 };
        };
        b[e] = function () {
          return this;
        };
        return a;
      })();
    Array.prototype.values = function () {
      return new f(this);
    };
  }
  Array.prototype[
    typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
  ] ||
    (Array.prototype[
      typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
    ] = Array.prototype.values);
})();
(function (a) {
  var b = {},
    c = function (a, b) {
      if (!a && !b) return null;
      var c = {};
      typeof a !== "undefined" && (c.type = a);
      typeof b !== "undefined" && (c.signature = b);
      return c;
    },
    d = function (a, b) {
      return c(
        a && /^[A-Z]/.test(a) ? a : void 0,
        b && ((b.params && b.params.length) || b.returns)
          ? "function(" +
              (b.params
                ? b.params
                    .map(function (a) {
                      return /\?/.test(a) ? "?" + a.replace("?", "") : a;
                    })
                    .join(",")
                : "") +
              ")" +
              (b.returns ? ":" + b.returns : "")
          : void 0
      );
    },
    e = function (a, b, c) {
      return a;
    },
    f = function (a, b, c) {
      "sourcemeta" in __transform_includes && (a.__SMmeta = b);
      if ("typechecks" in __transform_includes) {
        b = d(b ? b.name : void 0, c);
        b && __w(a, b);
      }
      return a;
    },
    g = function (a, b, c) {
      return c.apply(a, b);
    },
    h = function (a, b, c, d) {
      d && d.params && __t.apply(a, d.params);
      c = c.apply(a, b);
      d && d.returns && __t([c, d.returns]);
      return c;
    };
  h = function (a, c, d, e, f) {
    if (f) {
      f.callId ||
        (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
      e = f.callId;
      b[e] = (b[e] || 0) + 1;
    }
    return d.apply(a, c);
  };
  typeof __transform_includes === "undefined"
    ? ((a.__annotator = e), (a.__bodyWrapper = g))
    : ((a.__annotator = f),
      "codeusage" in __transform_includes
        ? ((a.__annotator = e),
          (a.__bodyWrapper = h),
          (a.__bodyWrapper.getCodeUsage = function () {
            return b;
          }),
          (a.__bodyWrapper.clearCodeUsage = function () {
            b = {};
          }))
        : "typechecks" in __transform_includes
        ? (a.__bodyWrapper = g)
        : (a.__bodyWrapper = g));
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(function (a) {
  (a.__t = function (a) {
    return a[0];
  }),
    (a.__w = function (a) {
      return a;
    });
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(self.__DEV__ = self.__DEV__ || 0), (self.emptyFunction = function () {});

(function () {
  if (Object.assign) return;
  var a = Object.prototype.hasOwnProperty,
    b;
  Object.keys && Object.keys.name !== "object_keys_polyfill"
    ? (b = function (a, b) {
        var c = Object.keys(b);
        for (var d = 0; d < c.length; d++) a[c[d]] = b[c[d]];
      })
    : (b = function (b, c) {
        for (var d in c) a.call(c, d) && (b[d] = c[d]);
      });
  Object.assign = function (a, c) {
    if (a == null)
      throw new TypeError("Object.assign target cannot be null or undefined");
    var d = Object(a);
    for (var e = 1; e < arguments.length; e++) {
      var f = arguments[e];
      f != null && b(d, Object(f));
    }
    return d;
  };
})();
(function (a, b) {
  var c = "keys",
    d = "values",
    e = "entries",
    f = (function () {
      var a = h(Array),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a, b) {
            (this.$1 = a), (this.$2 = b), (this.$3 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$1,
              b = this.$1.length,
              f = this.$3,
              g = this.$2;
            if (f >= b) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            this.$3 = f + 1;
            if (g === c) return { value: f, done: !1 };
            else if (g === d) return { value: a[f], done: !1 };
            else if (g === e) return { value: [f, a[f]], done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: a
          ? function (a) {
              return a.keys();
            }
          : function (a) {
              return new b(a, c);
            },
        values: a
          ? function (a) {
              return a.values();
            }
          : function (a) {
              return new b(a, d);
            },
        entries: a
          ? function (a) {
              return a.entries();
            }
          : function (a) {
              return new b(a, e);
            },
      };
    })(),
    g = (function () {
      var a = h(String),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a) {
            (this.$1 = a), (this.$2 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$2,
              b = this.$1,
              c = b.length;
            if (a >= c) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            var d = b.charCodeAt(a);
            if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
            else {
              c = b.charCodeAt(a + 1);
              c < 56320 || c > 57343 ? (d = b[a]) : (d = b[a] + b[a + 1]);
            }
            this.$2 = a + d.length;
            return { value: d, done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a
          ? function (a) {
              return a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
            }
          : function (a) {
              return new b(a);
            },
        entries: function () {
          throw TypeError(
            "Strings default iterator doesn't implement entries."
          );
        },
      };
    })();
  function h(a) {
    return (
      typeof a.prototype[
        typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
      ] === "function" &&
      typeof a.prototype.values === "function" &&
      typeof a.prototype.keys === "function" &&
      typeof a.prototype.entries === "function"
    );
  }
  var i = (function () {
      "use strict";
      function a(a, b) {
        (this.$1 = a), (this.$2 = b), (this.$3 = Object.keys(a)), (this.$4 = 0);
      }
      var b = a.prototype;
      b.next = function () {
        var a = this.$3.length,
          b = this.$4,
          f = this.$2,
          g = this.$3[b];
        if (b >= a) {
          this.$1 = void 0;
          return { value: void 0, done: !0 };
        }
        this.$4 = b + 1;
        if (f === c) return { value: g, done: !1 };
        else if (f === d) return { value: this.$1[g], done: !1 };
        else if (f === e) return { value: [g, this.$1[g]], done: !1 };
      };
      b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        };
      return a;
    })(),
    j = {
      keys: function (a) {
        return new i(a, c);
      },
      values: function (a) {
        return new i(a, d);
      },
      entries: function (a) {
        return new i(a, e);
      },
    };
  function k(a, b) {
    if (typeof a === "string") return g[b || d](a);
    else if (Array.isArray(a)) return f[b || d](a);
    else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
      return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
    else return j[b || e](a);
  }
  Object.assign(k, {
    KIND_KEYS: c,
    KIND_VALUES: d,
    KIND_ENTRIES: e,
    keys: function (a) {
      return k(a, c);
    },
    values: function (a) {
      return k(a, d);
    },
    entries: function (a) {
      return k(a, e);
    },
    generic: j.entries,
  });
  a.FB_enumerate = k;
})(
  typeof global === "object"
    ? global
    : typeof this === "object"
    ? this
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);
(function (a, b) {
  var c = a.window || a;
  function d() {
    return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
  }
  function e(a) {
    var b = a ? a.ownerDocument || a : document;
    b = b.defaultView || c;
    return !!(
      a &&
      (typeof b.Node === "function"
        ? a instanceof b.Node
        : typeof a === "object" &&
          typeof a.nodeType === "number" &&
          typeof a.nodeName === "string")
    );
  }
  function f(a) {
    a = c[a];
    if (a == null) return !0;
    if (typeof c.Symbol !== "function") return !0;
    var b = a.prototype;
    return (
      a == null ||
      typeof a !== "function" ||
      typeof b.clear !== "function" ||
      new a().size !== 0 ||
      typeof b.keys !== "function" ||
      typeof b.forEach !== "function"
    );
  }
  var g = a.FB_enumerate,
    h = (function () {
      if (!f("Map")) return c.Map;
      var b = "key",
        i = "value",
        j = "key+value",
        k = "$map_",
        l,
        m = "IE_HASH_",
        a = (function () {
          "use strict";
          function a(a) {
            if (!r(this)) throw new TypeError("Wrong map object type.");
            q(this);
            if (a != null) {
              a = g(a);
              var b;
              while (!(b = a.next()).done) {
                if (!r(b.value))
                  throw new TypeError(
                    "Expected iterable items to be pair objects."
                  );
                this.set(b.value[0], b.value[1]);
              }
            }
          }
          var c = a.prototype;
          c.clear = function () {
            q(this);
          };
          c.has = function (a) {
            a = o(this, a);
            return !!(a != null && this._mapData[a]);
          };
          c.set = function (a, b) {
            var c = o(this, a);
            c != null && this._mapData[c]
              ? (this._mapData[c][1] = b)
              : ((c = this._mapData.push([a, b]) - 1),
                p(this, a, c),
                (this.size += 1));
            return this;
          };
          c.get = function (a) {
            a = o(this, a);
            if (a == null) return void 0;
            else return this._mapData[a][1];
          };
          c["delete"] = function (a) {
            var b = o(this, a);
            if (b != null && this._mapData[b]) {
              p(this, a, void 0);
              this._mapData[b] = void 0;
              this.size -= 1;
              return !0;
            } else return !1;
          };
          c.entries = function () {
            return new n(this, j);
          };
          c.keys = function () {
            return new n(this, b);
          };
          c.values = function () {
            return new n(this, i);
          };
          c.forEach = function (a, b) {
            if (typeof a !== "function")
              throw new TypeError("Callback must be callable.");
            a = a.bind(b || void 0);
            b = this._mapData;
            for (var c = 0; c < b.length; c++) {
              var d = b[c];
              d != null && a(d[1], d[0], this);
            }
          };
          c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this.entries();
            };
          return a;
        })(),
        n = (function () {
          "use strict";
          function c(a, c) {
            if (!(r(a) && a._mapData))
              throw new TypeError("Object is not a map.");
            if ([b, j, i].indexOf(c) === -1)
              throw new Error("Invalid iteration kind.");
            this._map = a;
            this._nextIndex = 0;
            this._kind = c;
          }
          var d = c.prototype;
          d.next = function () {
            if (!this instanceof a)
              throw new TypeError("Expected to be called on a MapIterator.");
            var c = this._map,
              d = this._nextIndex,
              e = this._kind;
            if (c == null) return s(void 0, !0);
            c = c._mapData;
            while (d < c.length) {
              var f = c[d];
              d += 1;
              this._nextIndex = d;
              if (f)
                if (e === b) return s(f[0], !1);
                else if (e === i) return s(f[1], !1);
                else if (e) return s(f, !1);
            }
            this._map = void 0;
            return s(void 0, !0);
          };
          d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return c;
        })();
      function o(a, b) {
        if (r(b)) {
          var c = w(b);
          return c ? a._objectIndex[c] : void 0;
        } else {
          c = k + b;
          if (typeof b === "string") return a._stringIndex[c];
          else return a._otherIndex[c];
        }
      }
      function p(a, b, c) {
        var d = c == null;
        if (r(b)) {
          var e = w(b);
          e || (e = x(b));
          d ? delete a._objectIndex[e] : (a._objectIndex[e] = c);
        } else {
          e = k + b;
          typeof b === "string"
            ? d
              ? delete a._stringIndex[e]
              : (a._stringIndex[e] = c)
            : d
            ? delete a._otherIndex[e]
            : (a._otherIndex[e] = c);
        }
      }
      function q(a) {
        (a._mapData = []),
          (a._objectIndex = {}),
          (a._stringIndex = {}),
          (a._otherIndex = {}),
          (a.size = 0);
      }
      function r(a) {
        return a != null && (typeof a === "object" || typeof a === "function");
      }
      function s(a, b) {
        return { value: a, done: b };
      }
      a.__isES5 = (function () {
        try {
          Object.defineProperty({}, "__.$#x", {});
          return !0;
        } catch (a) {
          return !1;
        }
      })();
      function t(b) {
        if (!a.__isES5 || !Object.isExtensible) return !0;
        else return Object.isExtensible(b);
      }
      function u(a) {
        var b;
        switch (a.nodeType) {
          case 1:
            b = a.uniqueID;
            break;
          case 9:
            b = a.documentElement.uniqueID;
            break;
          default:
            return null;
        }
        if (b) return m + b;
        else return null;
      }
      var v = d();
      function w(b) {
        if (b[v]) return b[v];
        else if (
          !a.__isES5 &&
          b.propertyIsEnumerable &&
          b.propertyIsEnumerable[v]
        )
          return b.propertyIsEnumerable[v];
        else if (!a.__isES5 && e(b) && u(b)) return u(b);
        else if (!a.__isES5 && b[v]) return b[v];
      }
      var x = (function () {
        var b = Object.prototype.propertyIsEnumerable,
          c = 0;
        return function (d) {
          if (t(d)) {
            c += 1;
            if (a.__isES5)
              Object.defineProperty(d, v, {
                enumerable: !1,
                writable: !1,
                configurable: !1,
                value: c,
              });
            else if (d.propertyIsEnumerable)
              (d.propertyIsEnumerable = function () {
                return b.apply(this, arguments);
              }),
                (d.propertyIsEnumerable[v] = c);
            else if (e(d)) d[v] = c;
            else
              throw new Error(
                "Unable to set a non-enumerable property on object."
              );
            return c;
          } else
            throw new Error("Non-extensible objects are not allowed as keys.");
        };
      })();
      return __annotator(a, { name: "Map" });
    })();
  b = (function () {
    if (!f("Set")) return c.Set;
    var a = (function () {
      "use strict";
      function a(a) {
        if (
          this == null ||
          (typeof this !== "object" && typeof this !== "function")
        )
          throw new TypeError("Wrong set object type.");
        b(this);
        if (a != null) {
          a = g(a);
          var c;
          while (!(c = a.next()).done) this.add(c.value);
        }
      }
      var c = a.prototype;
      c.add = function (a) {
        this._map.set(a, a);
        this.size = this._map.size;
        return this;
      };
      c.clear = function () {
        b(this);
      };
      c["delete"] = function (a) {
        a = this._map["delete"](a);
        this.size = this._map.size;
        return a;
      };
      c.entries = function () {
        return this._map.entries();
      };
      c.forEach = function (a) {
        var b = arguments[1],
          c = this._map.keys(),
          d;
        while (!(d = c.next()).done) a.call(b, d.value, d.value, this);
      };
      c.has = function (a) {
        return this._map.has(a);
      };
      c.values = function () {
        return this._map.values();
      };
      c.keys = function () {
        return this.values();
      };
      c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this.values();
        };
      return a;
    })();
    function b(a) {
      (a._map = new h()), (a.size = a._map.size);
    }
    return __annotator(a, { name: "Set" });
  })();
  a.Map = h;
  a.Set = b;
})(typeof global === "undefined" ? this : global);

("use strict");
(function () {
  if (typeof Element === "undefined" || Element.prototype.scroll) return;
  function a(a, b) {
    b === void 0 && (b = !1);
    if (a.length === 0) return;
    var c = a[0],
      d = a[1];
    c = Number(c) || 0;
    d = Number(d) || 0;
    if (a.length === 1) {
      a = a[0];
      if (a == null) return;
      c = a.left;
      d = a.top;
      c !== void 0 && (c = Number(c) || 0);
      d !== void 0 && (d = Number(d) || 0);
    }
    c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
    d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d);
  }
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    a.call(this, arguments);
  };
  Element.prototype.scrollBy = function () {
    a.call(this, arguments, !0);
  };
})();

(function () {
  function a() {
    if (typeof JSON !== "object" || typeof JSON.stringify !== "function")
      return !1;
    if (typeof navigator === "undefined" || !navigator.userAgent) return !0;
    var a = navigator.userAgent;
    if (a.indexOf("Firefox/") > -1)
      return !(parseInt(a.match(/Firefox\/([0-9]+)/)[1], 10) >= 62);
    else if (a.indexOf("Edg/") > -1)
      return !(parseInt(a.match(/Edg\/([0-9]+)/)[1], 10) >= 79);
    else if (a.indexOf("Chrome/") > -1)
      return !(parseInt(a.match(/Chrome\/([0-9]+)/)[1], 10) >= 66);
    else if (a.indexOf("CriOS/") > -1)
      return !(parseInt(a.match(/CriOS\/([0-9]+)/)[1], 10) >= 66);
    else if (a.indexOf("Safari/") > -1 && a.indexOf("Version/") > -1)
      return !(parseInt(a.match(/Version\/([0-9]+)/)[1], 10) >= 12);
    return !0;
  }
  function b() {
    return JSON.stringify(["\u2028\u2029"]) === '["\\u2028\\u2029"]';
  }
  a() &&
    !b() &&
    (JSON.stringify = (function (a) {
      var b = /\u2028/g,
        c = /\u2029/g;
      return function (d, e, f) {
        d = a.call(this, d, e, f);
        d &&
          (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")),
          -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d;
      };
    })(JSON.stringify));
})();
if (typeof JSON === "object" && typeof JSON.parse === "function")
  try {
    JSON.parse(null);
  } catch (a) {
    (JSON.originalParse = JSON.parse),
      (JSON.parse = function (a) {
        return a === null ? null : JSON.originalParse(a);
      });
  }
typeof Math.log2 !== "function" &&
  (Math.log2 = function (a) {
    return Math.log(a) / Math.LN2;
  }),
  typeof Math.log10 !== "function" &&
    (Math.log10 = function (a) {
      return Math.log(a) / Math.LN10;
    }),
  typeof Math.trunc !== "function" &&
    (Math.trunc = function (a) {
      return a < 0 ? Math.ceil(a) : Math.floor(a);
    }),
  typeof Math.sign !== "function" &&
    (Math.sign = function (a) {
      return +(a > 0) - +(a < 0) || +a;
    });
(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError("Object.entries called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  typeof Object.fromEntries !== "function" &&
    (Object.fromEntries = function (a) {
      var b = {};
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        var f = e[0];
        e = e[1];
        b[f] = e;
      }
      return b;
    });
  Object.values = function (b) {
    if (b == null) throw new TypeError("Object.values called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();
(function () {
  Object.is ||
    (Object.is = function (a, b) {
      if (a === b) return a !== 0 || 1 / a === 1 / b;
      else return a !== a && b !== b;
    });
})();

(function (a) {
  a.__m = function (a, b) {
    a.__SMmeta = b;
    return a;
  };
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
typeof String.fromCodePoint !== "function" &&
  (String.fromCodePoint = function () {
    var a = [];
    for (var b = 0; b < arguments.length; b++) {
      var c = Number(b < 0 || arguments.length <= b ? void 0 : arguments[b]);
      if (!isFinite(c) || Math.floor(c) != c || c < 0 || 1114111 < c)
        throw RangeError("Invalid code point " + c);
      c < 65536
        ? a.push(String.fromCharCode(c))
        : ((c -= 65536),
          a.push(
            String.fromCharCode((c >> 10) + 55296),
            String.fromCharCode((c % 1024) + 56320)
          ));
    }
    return a.join("");
  });
String.prototype.startsWith ||
  (String.prototype.startsWith = function (a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
      c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
      d = Math.min(Math.max(c, 0), b.length);
    return b.indexOf(String(a), c) == d;
  }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this),
        c = b.length,
        d = String(a),
        e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
        f = Math.min(Math.max(e, 0), c),
        g = f - d.length;
      return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
    }),
  String.prototype.includes ||
    (String.prototype.includes = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
      return b.indexOf(String(a), c) != -1;
    }),
  String.prototype.repeat ||
    (String.prototype.repeat = function (a) {
      "use strict";
      if (this == null) throw TypeError();
      var b = String(this);
      a = Number(a) || 0;
      if (a < 0 || a === Infinity) throw RangeError();
      if (a === 1) return b;
      var c = "";
      while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
      return c;
    }),
  String.prototype.codePointAt ||
    (String.prototype.codePointAt = function (a) {
      "use strict";
      if (this == null) throw TypeError("Invalid context: " + this);
      var b = String(this),
        c = b.length;
      a = Number(a) || 0;
      if (a < 0 || c <= a) return void 0;
      var d = b.charCodeAt(a);
      if (55296 <= d && d <= 56319 && c > a + 1) {
        c = b.charCodeAt(a + 1);
        if (56320 <= c && c <= 57343)
          return (d - 55296) * 1024 + c - 56320 + 65536;
      }
      return d;
    });
String.prototype.contains ||
  (String.prototype.contains = String.prototype.includes);
String.prototype.padStart ||
  (String.prototype.padStart = function (a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
      a = a - this.length;
      a > b.length && (b += b.repeat(a / b.length));
      return b.slice(0, a) + String(this);
    }
  }),
  String.prototype.padEnd ||
    (String.prototype.padEnd = function (a, b) {
      a = a >> 0;
      b = String(b || " ");
      if (this.length > a) return String(this);
      else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a);
      }
    });
if (!String.prototype.matchAll) {
  var MAX_CALLS_TO_EXEC = 250;
  String.prototype.matchAll = function (a) {
    if (!a.global)
      throw new TypeError(
        "String.prototype.matchAll called with a non-global RegExp argument"
      );
    var b = String(this),
      c = [],
      d,
      e = 0;
    while ((d = a.exec(b)) && e++ < MAX_CALLS_TO_EXEC) c.push(d);
    return c;
  };
}
String.prototype.trimLeft ||
  (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, "");
  }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, "");
    });

("use strict");
(function (a) {
  function b() {
    if (typeof URL !== "function") return !1;
    if (
      typeof URL.createObjectURL !== "function" ||
      typeof URL.revokeObjectURL !== "function"
    )
      return !1;
    return typeof File !== "function" || typeof Blob !== "function" ? !1 : !0;
  }
  a = (a && a.Env) || {};
  if (!a.gk_instrument_object_url) return;
  if (!b()) return;
  var c = {},
    d = URL.createObjectURL,
    e = URL.revokeObjectURL;
  URL.createObjectURL = function (a) {
    var b = null,
      e = 0;
    a instanceof File
      ? ((b = "File"), (e = a.size))
      : a instanceof Blob
      ? ((b = "Blob"), (e = a.size))
      : typeof MediaSource === "function" &&
        a instanceof MediaSource &&
        ((b = "MediaSource"), (e = 0));
    a = d.call(URL, a);
    b !== null && (c[a] = { type: b, size: e });
    return a;
  };
  URL.revokeObjectURL = function (a) {
    e.call(URL, a), delete c[a];
  };
  URL._fbRegisteredObjectURL = function () {
    return Object.values(c);
  };
})(this);
(function (a) {
  var b = (a.babelHelpers = {}),
    c = Object.prototype.hasOwnProperty;
  typeof Symbol !== "undefined" &&
    !(typeof Symbol === "function"
      ? Symbol.asyncIterator
      : "@@asyncIterator") &&
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));
  function d(a) {
    this.wrapped = a;
  }
  function e(a) {
    var b, c;
    function e(a, d) {
      return new Promise(function (e, g) {
        e = { key: a, arg: d, resolve: e, reject: g, next: null };
        c ? (c = c.next = e) : ((b = c = e), f(a, d));
      });
    }
    function f(b, c) {
      try {
        var e = a[b](c);
        c = e.value;
        var h = c instanceof d;
        Promise.resolve(h ? c.wrapped : c).then(
          function (a) {
            if (h) {
              f(b === "return" ? "return" : "next", a);
              return;
            }
            g(e.done ? "return" : "normal", a);
          },
          function (a) {
            f("throw", a);
          }
        );
      } catch (a) {
        g("throw", a);
      }
    }
    function g(a, d) {
      switch (a) {
        case "return":
          b.resolve({ value: d, done: !0 });
          break;
        case "throw":
          b.reject(d);
          break;
        default:
          b.resolve({ value: d, done: !1 });
          break;
      }
      b = b.next;
      b ? f(b.key, b.arg) : (c = null);
    }
    this._invoke = e;
    typeof a["return"] !== "function" && (this["return"] = void 0);
  }
  typeof Symbol === "function" &&
    (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") &&
    (e.prototype[
      typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
    ] = function () {
      return this;
    });
  e.prototype.next = function (a) {
    return this._invoke("next", a);
  };
  e.prototype["throw"] = function (a) {
    return this._invoke("throw", a);
  };
  e.prototype["return"] = function (a) {
    return this._invoke("return", a);
  };
  b.createClass = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1;
        d.configurable = !0;
        "value" in d && (d.writable = !0);
        Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      c && a(b.prototype, c);
      d && a(b, d);
      return b;
    };
  })();
  b.inheritsLoose = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  b.wrapNativeSuper = function (a) {
    var c = typeof Map === "function" ? new Map() : void 0;
    b.wrapNativeSuper = function (a) {
      if (a === null) return null;
      if (typeof a !== "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (c !== void 0) {
        if (c.has(a)) return c.get(a);
        c.set(a, d);
      }
      b.inheritsLoose(d, a);
      function d() {
        a.apply(this, arguments);
      }
      return d;
    };
    return b.wrapNativeSuper(a);
  };
  b.assertThisInitialized = function (a) {
    if (a === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return a;
  };
  b._extends = Object.assign;
  b["extends"] = b._extends;
  b.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  b.objectWithoutPropertiesLoose = function (a, b) {
    var d = {};
    for (var e in a) {
      if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  b.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  b.bind = Function.prototype.bind;
  b.wrapAsyncGenerator = function (a) {
    return function () {
      return new e(a.apply(this, arguments));
    };
  };
  b.awaitAsyncGenerator = function (a) {
    return new d(a);
  };
  b.asyncIterator = function (a) {
    var b;
    if (typeof Symbol !== "undefined") {
      if (
        typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
      ) {
        b = a[Symbol.asyncIterator];
        if (b != null) return b.call(a);
      }
      if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
        b = a[Symbol.iterator];
        if (b != null) return b.call(a);
      }
    }
    throw new TypeError("Object is not async iterable");
  };
  b.asyncGeneratorDelegate = function (a, b) {
    var c = {},
      d = !1;
    function e(c, e) {
      d = !0;
      e = new Promise(function (b) {
        b(a[c](e));
      });
      return { done: !1, value: b(e) };
    }
    typeof Symbol === "function" &&
      (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") &&
      (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        });
    c.next = function (a) {
      if (d) {
        d = !1;
        return a;
      }
      return e("next", a);
    };
    typeof a["throw"] === "function" &&
      (c["throw"] = function (a) {
        if (d) {
          d = !1;
          throw a;
        }
        return e("throw", a);
      });
    typeof a["return"] === "function" &&
      (c["return"] = function (a) {
        if (d) {
          d = !1;
          return a;
        }
        return e("return", a);
      });
    return c;
  };
})(typeof global === "undefined" ? self : global);

(function (a) {
  if (a.require != null) return;
  var b = null,
    c = null,
    d = [],
    e = {},
    f = {},
    g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0,
    l = 1,
    m = 2,
    n = 4,
    o = 8,
    p = 16,
    aa = 32,
    ba = 64,
    ca = {},
    q = {},
    r = Object.prototype.hasOwnProperty,
    s = Object.prototype.toString;
  function t(a) {
    a = Array.prototype.slice.call(a);
    var b = {},
      c,
      d,
      f,
      g;
    while (a.length) {
      d = a.shift();
      if (b[d]) continue;
      b[d] = !0;
      f = e[d];
      if (!f || T(f)) continue;
      if (f.dependencies)
        for (c = 0; c < f.dependencies.length; c++)
          (g = f.dependencies[c]), T(g) || a.push(g.id);
    }
    for (d in b) r.call(b, d) && a.push(d);
    b = [];
    for (c = 0; c < a.length; c++) {
      d = a[c];
      var h = d;
      f = e[d];
      d = f ? f.dependencies : null;
      if (!f || !d) h += " is not defined";
      else if (T(f)) h += " is ready";
      else {
        f = [];
        for (var i = 0; i < d.length; i++) (g = d[i]), T(g) || f.push(g.id);
        h += " is waiting for " + f.join(", ");
      }
      b.push(h);
    }
    return b.join("\n");
  }
  function u(b) {
    var a = new Error(b);
    a.name = "ModuleError";
    a.messageFormat = b;
    for (
      var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
      e < c;
      e++
    )
      d[e - 1] = arguments[e];
    a.messageParams = d.map(function (a) {
      return String(a);
    });
    a.taalOpcodes = [2, 2];
    return a;
  }
  $ = a.Env || {};
  var v = !!$.gk_nonjs_deps_in_require,
    w = !!$.gk_require_when_ready_in_order,
    x = !!$.profile_require_factories,
    y = a.performance || {},
    z;
  if (y.now && y.timing && y.timing.navigationStart) {
    var A = y.timing.navigationStart;
    z = function () {
      return y.now() + A;
    };
  } else
    z = function () {
      return Date.now();
    };
  var B = 0;
  function C(a) {
    B++;
    var b = e[a];
    (!b || (b.exports == null && !b.factoryFinished)) && (H(a), (b = e[a]));
    b && b.refcount-- === 1 && (e[a] = null);
    return b;
  }
  function D(a) {
    return a.defaultExport !== q ? a.defaultExport : a.exports;
  }
  function E(a) {
    a = C(a);
    if (a) return D(a);
  }
  function F(a) {
    a = C(a);
    if (a) return a.defaultExport !== q ? a.defaultExport : null;
  }
  function G(a) {
    a = C(a);
    if (a) return a.exports;
  }
  function da(a) {
    a.factoryLength === -1 && (a.factoryLength = a.factory.length);
    return a.factoryLength;
  }
  function H(d) {
    var g = a.ErrorGuard;
    if (g && !g.inGuard()) return g.applyWithGuard(H, null, [d]);
    g = e[d];
    if (!g) {
      var h = 'Requiring unknown module "%s"';
      throw u(h, d);
    }
    a.__onBeforeModuleFactory == null ? void 0 : a.__onBeforeModuleFactory(g);
    var i, j;
    if (g.hasError)
      if (g.error == null)
        throw u('Requiring module "%s" which threw an exception', d);
      else {
        h = I(g.error);
        J(h, {
          messageFormat: 'Requiring module "%s" which threw an exception',
          messageParams: [d],
        });
        throw h;
      }
    if (!T(g))
      throw u(
        'Requiring module "%s" with unresolved dependencies: %s',
        d,
        t([d])
      );
    L(g);
    h = g.exports = {};
    var k = g.factory,
      l = g.dependencies;
    if (s.call(k) === "[object Function]" && l != null) {
      var n = l.length,
        p,
        q;
      try {
        try {
          wa(g);
        } catch (a) {
          K(a, d);
        }
        var v = [],
          w = n;
        if (g.special & o) {
          var y = g.special & aa ? c : b;
          v = y.slice(0);
          v[y.length - 2] = g;
          v[y.length - 1] = h;
          w += v.length;
        }
        if (g.special & m) {
          y = da(g);
          w = Math.min(n + v.length, y);
        }
        for (h = 0; h < n; h++) {
          y = l[h];
          v.length < w && v.push(E.call(null, y.id));
        }
        var A;
        x && (A = z());
        f[g.id].factoryRun = !0;
        try {
          y = g.context != null ? g.context : a;
          p = k.apply(y, v);
        } catch (a) {
          K(a, d);
        } finally {
          if (x) {
            w = z();
            l = f[g.id];
            l.factoryTime = w - (A || 0);
            l.factoryEnd = w;
            l.factoryStart = A;
            if (k.__SMmeta)
              for (n in k.__SMmeta)
                Object.prototype.hasOwnProperty.call(k.__SMmeta, n) &&
                  (l[n] = k.__SMmeta[n]);
          }
        }
      } catch (a) {
        g.hasError = !0;
        g.error = a;
        g.exports = null;
        throw a;
      } finally {
      }
      p && (g.exports = p);
      var B;
      g.special & ba
        ? g.exports != null &&
          r.call(g.exports, "default") &&
          (g.defaultExport = B = g.exports["default"])
        : (g.defaultExport = B = g.exports);
      if (typeof B === "function") {
        h = B.__superConstructor__;
        if (!B.displayName || (h && h.displayName === B.displayName))
          try {
            B.displayName = (B.name || "(anonymous)") + " [from " + d + "]";
          } catch (a) {}
      }
      g.factoryFinished = !0;
    } else g.exports = k;
    y = "__isRequired__" + d;
    v = e[y];
    v && !T(v) && R(y, ca);
    a.__onAfterModuleFactory == null ? void 0 : a.__onAfterModuleFactory(g);
  }
  function I(b) {
    if (a.getErrorSafe != null) return a.getErrorSafe(b);
    return b != null && typeof b === "object" && typeof b.message === "string"
      ? b
      : u("Non-error thrown: %s", String(b));
  }
  function J(b, c) {
    var d = a.ErrorSerializer;
    d && d.aggregateError(b, c);
  }
  function K(a, b) {
    a = I(a);
    J(a, {
      messageFormat: 'Module "%s"',
      messageParams: [b],
      forcedKey: b.startsWith("__") ? null : b,
    });
    throw a;
  }
  function ea() {
    return B;
  }
  function fa() {
    var a = {};
    for (var b in f)
      Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
    return a;
  }
  function L(a) {
    if (a.nonJSDeps) return;
    a.nonJSDeps = !0;
    a.dependencies && a.dependencies.forEach(L);
  }
  var M = !!(a != null && a.document != null && "createElement" in a.document),
    N = $.use_fbt_virtual_modules === !0 && M,
    ga = "$fbt_virtual",
    O = {},
    P = null,
    Q = 6e4;
  function ha(a, b) {
    !(a in e) &&
      !(a in O) &&
      (O[a] = {
        injectTime: z(),
        hash: b
          ? b.dataset.bootloaderHash || b.dataset.bootloaderHashClient
          : null,
      }),
      P || (P = setTimeout(Z()(ia, "_checkFbtVirtualModuleTimeout"), Q));
  }
  function ia() {
    P = null;
    N ||
      S.apply(null, [
        ["FBLogger"],
        function (a) {
          a("binary_transparency", "invalid_vmod_use").mustfix(
            "_checkFbtVirtualModuleTimeout timeout queued when USE_FBT_VIRTUAL_MODULES is false!"
          );
        },
      ]);
    a.__translationFetchTracker == null && (a.__translationFetchTracker = {});
    var b = a.__translationFetchTracker,
      c = z(),
      d = {};
    for (var e in O) {
      var f = O[e],
        g = f.hash;
      f = f.injectTime;
      if (c - f <= Q) continue;
      f = g == null || !(g in b) || b[g] === "fetched";
      if (f) {
        f = g != null ? g : "unknown";
        d[f] = d[f] || [];
        d[f].push(e);
        delete O[e];
      } else g != null && b[g] === "failed" && delete O[e];
    }
    Object.keys(O).length > 0 &&
      (P = setTimeout(Z()(ia, "_checkFbtVirtualModuleTimeout"), Q));
    Object.keys(d).length > 0 &&
      S.apply(null, [
        ["FBLogger"],
        function (a) {
          for (var b in d)
            a("binary_transparency", "vmod_timeout").warn(
              "The following virtual modules in resource %s are taking over %sms to be defined: %s...",
              b,
              Q,
              d[b].join(",").slice(0, 300)
            );
        },
      ]);
  }
  var ja = [
    "fbt",
    "fbs",
    "errorDesc",
    "adsErrorDesc",
    "codedError",
    "errorSummary",
  ];
  function ka(a, b, c) {
    if (!N) return;
    if (ja.indexOf(a) !== -1) return;
    for (var d = 0; d < b.length; d++)
      if (ja.indexOf(b[d]) !== -1) {
        var e = a + ga;
        b.push(e);
        ha(e, c);
        break;
      }
  }
  function R(b, c, e, g, h, i, l, m) {
    c === void 0
      ? ((c = []), (e = b), (b = oa()))
      : e === void 0 &&
        ((e = c),
        s.call(b) === "[object Array]"
          ? ((c = b), (b = oa(c.join(","))))
          : (c = []));
    var n = { cancel: na.bind(this, b) },
      o = la(b);
    if (!c && !e && i) {
      o.refcount += i;
      return n;
    }
    N && (b in O && delete O[b], Array.isArray(c) && ka(b, c, m));
    f[b] = {
      id: b,
      dependencies: c,
      meta: l,
      category: g,
      defined: x ? z() : null,
      factoryTime: null,
      factoryStart: null,
      factoryEnd: null,
      factoryRun: !1,
    };
    if (o.dependencies && o.reload !== !0) {
      b.indexOf(":") != -1 ? k++ : j++;
      return n;
    }
    i && (o.refcount += i);
    m = c.map(la);
    o.factory = e;
    o.dependencies = m;
    o.context = h;
    o.special = g;
    (o.nonJSDeps || va(o)) && ((o.nonJSDeps = !1), L(o));
    U(o);
    if (d.length > 0) {
      var p = d;
      d = [];
      l = a.ScheduleJSWork ? a.ScheduleJSWork : ya;
      l(function () {
        if (w) {
          for (var a = 0; a < p.length; a++) E.call(null, p[a].id);
          p.length = 0;
        } else while (p.length > 0) E.call(null, p.pop().id);
      })();
    }
    return n;
  }
  function la(a) {
    var b = e[a];
    if (b) return b;
    b = new ma(a, 0);
    e[a] = b;
    return b;
  }
  function ma(a, b, c) {
    (this.id = a),
      (this.refcount = b),
      (this.exports = c || null),
      (this.defaultExport = c || q),
      (this.factory = void 0),
      (this.factoryLength = -1),
      (this.factoryFinished = !1),
      (this.dependencies = void 0),
      (this.depPosition = 0),
      (this.context = void 0),
      (this.special = 0),
      (this.hasError = !1),
      (this.error = null),
      (this.ranRecursiveSideEffects = !1),
      (this.sideEffectDependencyException = null),
      (this.nextDepWaitingHead = null),
      (this.nextDepWaitingNext = null),
      (this.tarjanGeneration = -1),
      (this.tarjanLow = 0),
      (this.tarjanIndex = 0),
      (this.tarjanOnStack = !1),
      (this.nonJSDeps = !1);
  }
  function na(a) {
    if (!e[a]) return;
    var b = e[a];
    e[a] = null;
    if (b.dependencies)
      for (a = 0; a < b.dependencies.length; a++) {
        var c = b.dependencies[a];
        c.refcount-- === 1 && na(c.id);
      }
  }
  function S(a, b, c) {
    var d = "__requireLazy__x__" + g++;
    return R(
      "__requireLazy__" + d,
      a,
      Z()(b, "requireLazy", { propagationType: 0 }),
      l | p,
      c,
      1
    );
  }
  function oa(a) {
    return "__mod__" + (a != null ? a + "__" : "") + g++;
  }
  function pa(a, b, c) {
    c.tarjanGeneration != h &&
      ((c.tarjanGeneration = h),
      (c.tarjanLow = c.tarjanIndex = i++),
      (c.tarjanOnStack = !0),
      b.push(c));
    if (c.dependencies != null)
      for (var d = c.depPosition; d < c.dependencies.length; d++) {
        var e = c.dependencies[d];
        e.tarjanGeneration != h
          ? (pa(a, b, e), (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)))
          : e.tarjanOnStack &&
            (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex));
      }
    if (c.tarjanLow == c.tarjanIndex) {
      e = [];
      do {
        d = b.pop();
        d.tarjanOnStack = !1;
        e.push(d);
        if (c == b[0] && d != c && d.dependencies != null)
          for (var f = d.depPosition; f < d.dependencies.length; f++) {
            var g = d.dependencies[f];
            !T(g) &&
              a.indexOf(g) == -1 &&
              b.indexOf(g) == -1 &&
              e.indexOf(g) == -1 &&
              a.push(g);
          }
      } while (d != c);
    }
  }
  function qa(a) {
    var b = a.dependencies;
    if (!b)
      throw u("Called _replaceCycleLinkWithSCCDeps on an undefined module");
    h++;
    pa(b, [], a);
    a.depPosition++;
    U(a);
  }
  function ra(a, b) {
    var c = b;
    while (!0) {
      if (c.dependencies && c.depPosition != c.dependencies.length)
        c = c.dependencies[c.depPosition];
      else break;
      if (c == a) {
        qa(a);
        return;
      }
    }
    a.nextDepWaitingNext = b.nextDepWaitingHead;
    b.nextDepWaitingHead = a;
  }
  function T(a) {
    return a.dependencies != null && a.depPosition >= a.dependencies.length;
  }
  function sa(a) {
    a.depPosition++, U(a);
  }
  function ta(a) {
    var b = a.nextDepWaitingHead;
    a.nextDepWaitingHead = null;
    while (b != null) {
      var c = b;
      c.nonJSDeps && L(a);
      b = c.nextDepWaitingNext;
      c.nextDepWaitingNext = null;
      var d = !e[c.id];
      d || sa(c);
    }
  }
  function ua(a) {
    return a.special & l;
  }
  function va(a) {
    return a.special & p;
  }
  function U(a) {
    while (a.dependencies != null && a.depPosition < a.dependencies.length) {
      var b = a.dependencies[a.depPosition],
        c = T(b);
      if (!c && a != b) {
        ra(a, b);
        return;
      }
      a.depPosition++;
    }
    ua(a) && d.push(a);
    a.nextDepWaitingHead !== null && ta(a);
  }
  function wa(a) {
    if (a.sideEffectDependencyException != null)
      throw a.sideEffectDependencyException;
    if (a.ranRecursiveSideEffects) return;
    a.ranRecursiveSideEffects = !0;
    var b = a.dependencies;
    if (b)
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          wa(d);
        } catch (b) {
          a.sideEffectDependencyException = b;
          throw b;
        }
        if (d.special & n)
          try {
            E.call(null, d.id);
          } catch (b) {
            a.sideEffectDependencyException = b;
            throw b;
          }
      }
  }
  function V(a, b) {
    (e[a] = new ma(a, 0, b)),
      (f[a] = {
        id: a,
        dependencies: [],
        category: 0,
        factoryLengthAccessTime: null,
        factoryTime: null,
        factoryStart: null,
        factoryEnd: null,
        factoryRun: !1,
      });
  }
  V("module", 0);
  V("exports", 0);
  V("define", R);
  V("global", a);
  V("require", E);
  V("requireInterop", E);
  V("importDefault", F);
  V("importNamespace", G);
  V("requireDynamic", xa);
  V("requireLazy", S);
  V("requireWeak", W);
  V("ifRequired", X);
  V("ifRequireable", Y);
  b = [
    E.call(null, "global"),
    E.call(null, "require"),
    E.call(null, "requireDynamic"),
    E.call(null, "requireLazy"),
    E.call(null, "requireInterop"),
    null,
  ];
  c = [
    E.call(null, "global"),
    E.call(null, "require"),
    E.call(null, "importDefault"),
    E.call(null, "importNamespace"),
    E.call(null, "requireLazy"),
    E.call(null, "requireInterop"),
    null,
  ];
  R.amd = {};
  a.define = R;
  a.require = E;
  a.requireInterop = E;
  a.importDefault = F;
  a.importNamespace = G;
  a.requireDynamic = xa;
  a.requireLazy = S;
  a.__onBeforeModuleFactory = null;
  a.__onAfterModuleFactory = null;
  function xa(a, b) {
    throw new ReferenceError("requireDynamic is not defined");
  }
  function W(a, b) {
    X.call(
      null,
      a,
      function (a) {
        b(a);
      },
      function () {
        R(
          "__requireWeak__" + a + "__" + g++,
          ["__isRequired__" + a],
          Z()(function () {
            return b(D(e[a]));
          }, "requireWeak"),
          l,
          null,
          1
        );
      }
    );
  }
  function X(a, b, c) {
    a = e[a];
    if (a && a.factoryFinished) {
      if (typeof b === "function") return b(D(a));
    } else if (typeof c === "function") return c();
  }
  function Y(a, b, c) {
    if (v !== !0) return X.call(null, a, b, c);
    var d = e[a];
    if (d && d.nonJSDeps && T(d)) {
      if (typeof b === "function") return b(E.call(null, a));
    } else if (typeof c === "function") return c();
  }
  $ = {
    getDupCount: function () {
      return [j, k];
    },
    getModules: function () {
      var a = {};
      for (var b in e)
        e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
      return a;
    },
    modulesMap: e,
    debugUnresolvedDependencies: t,
  };
  function ya(a) {
    return a;
  }
  function Z() {
    var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : ya;
    return function () {
      return b.apply(void 0, arguments);
    };
  }
  V("__getTotalRequireCalls", ea);
  V("__getModuleTimeDetails", fa);
  V("__debug", $);
  a.__d = function (a, b, c, d, e) {
    Z()(
      function () {
        R(a, b, c, (d || m) | o, null, null, null, e);
      },
      "define " + a,
      { root: !0 }
    )();
  };
  function $(a, b) {
    return !0;
  }
  if (a.__d_stub) {
    for (M = 0; M < a.__d_stub.length; M++) a.__d.apply(null, a.__d_stub[M]);
    delete a.__d_stub;
  }
  if (a.__rl_stub) {
    for (W = 0; W < a.__rl_stub.length; W++) S.apply(null, a.__rl_stub[W]);
    delete a.__rl_stub;
  }
  Y = function () {};
  a.$RefreshReg$ = Y;
  a.$RefreshSig$ = function () {
    return function (a) {
      return a;
    };
  };
})(
  typeof this !== "undefined"
    ? this
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof self !== "undefined"
    ? self
    : {}
);
(function (a) {
  var b = a.performance;
  b &&
    b.setResourceTimingBufferSize &&
    (b.setResourceTimingBufferSize(1e5),
    (b.onresourcetimingbufferfull = function () {
      a.__isresourcetimingbufferfull = !0;
    }),
    (b.setResourceTimingBufferSize = function () {}));
})(
  typeof this === "object"
    ? this
    : typeof global === "object"
    ? global
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);

__d(
  "Env",
  [],
  function (a, b, c, d, e, f) {
    b = {
      ajaxpipe_token: null,
      compat_iframe_token: null,
      iframeKey: "",
      iframeTarget: "",
      iframeToken: "",
      isCQuick: !1,
      jssp_header_sent: !1,
      jssp_targeting_enabled: !1,
      start: Date.now(),
      nocatch: !1,
      useTrustedTypes: !1,
      isTrustedTypesReportOnly: !1,
      enableDefaultTrustedTypesPolicy: !1,
      ig_server_override: "",
      ig_mqtt_wss_endpoint: "",
      ig_mqtt_polling_endpoint: "",
      scheduledCSSJSScheduler: !1,
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "fb-error-lite",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function a(a) {
      var b = new Error(a);
      if (b.stack === void 0)
        try {
          throw b;
        } catch (a) {}
      b.messageFormat = a;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      b.messageParams = d.map(function (a) {
        return String(a);
      });
      b.taalOpcodes = [g.PREVIOUS_FRAME];
      return b;
    }
    b = { err: a, TAALOpcode: g };
    f["default"] = b;
  },
  66
);
__d(
  "sprintf",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = 0;
      return a.replace(/%s/g, function () {
        return String(c[e++]);
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "invariant",
  ["Env", "fb-error-lite", "sprintf"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (!a) {
        var d = b;
        for (
          var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
          g < e;
          g++
        )
          f[g - 2] = arguments[g];
        if (typeof d === "number") {
          var i = h(d, f),
            j = i.message,
            k = i.decoderLink;
          d = j;
          f.unshift(k);
        } else if (d === void 0) {
          d = "Invariant: ";
          for (var l = 0; l < f.length; l++) d += "%s,";
        }
        var m = d,
          n = new Error(m);
        n.name = "Invariant Violation";
        n.messageFormat = d;
        n.messageParams = f.map(function (a) {
          return String(a);
        });
        n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
        n.stack;
        throw n;
      }
    }
    function h(a, b) {
      var d = "Minified invariant #" + a + "; %s";
      b.length > 0 &&
        (d +=
          " Params: " +
          b
            .map(function (a) {
              return "%s";
            })
            .join(", "));
      a =
        c("Env").show_invariant_decoder === !0
          ? "visit " + i(a, b) + " to see the full message."
          : "";
      return { message: d, decoderLink: a };
    }
    function i(a, b) {
      a = "https://www.internalfb.com/intern/invariant/" + a + "/";
      b.length > 0 &&
        (a +=
          "?" +
          b
            .map(function (a, b) {
              return "args[" + b + "]=" + encodeURIComponent(String(a));
            })
            .join("&"));
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ArbiterToken",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.unsubscribe = function () {
          for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
          this.$2.length = 0;
        }),
          (this.$1 = a),
          (this.$2 = b);
      }
      var b = a.prototype;
      b.isForArbiterInstance = function (a) {
        this.$1 || h(0, 2506);
        return this.$1 === a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "performance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "performanceNow",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    if (c("performance").now)
      b = function () {
        return c("performance").now();
      };
    else {
      d = a._cstart;
      e = Date.now();
      var h = typeof d === "number" && d < e ? d : e,
        i = 0;
      b = function () {
        var a = Date.now(),
          b = a - h;
        b < i && ((h -= i - b), (b = a - h));
        i = b;
        return b;
      };
    }
    f = b;
    g["default"] = f;
  },
  98
);
__d(
  "performanceNowSinceAppStart",
  ["performanceNow"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("performanceNow");
  },
  98
);
__d(
  "removeFromArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    f["default"] = a;
  },
  66
);
__d(
  "fb-error",
  ["performanceNowSinceAppStart", "removeFromArray"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function h(b) {
      var a = new Error(b);
      if (a.stack === void 0)
        try {
          throw a;
        } catch (a) {}
      a.messageFormat = b;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      a.messageParams = d.map(function (a) {
        return String(a);
      });
      a.taalOpcodes = [g.PREVIOUS_FRAME];
      return a;
    }
    var i = !1,
      j = {
        errorListener: function (b) {
          var c = a.console,
            d = c[b.type] ? b.type : "error";
          if (b.type === "fatal" || (d === "error" && !i)) {
            d = b.message;
            c.error(
              "ErrorUtils caught an error:\n\n" +
                d +
                "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs."
            );
            i = !0;
          }
        },
      },
      k = { access_token: null },
      l = 6,
      m = 6e4,
      n = 10 * m,
      o = new Map(),
      p = 0;
    function q() {
      var a = b("performanceNowSinceAppStart")();
      if (a > p + m) {
        var c = a - n;
        for (
          var d = o,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          var h = g[0];
          g = g[1];
          g.lastAccessed < c && o["delete"](h);
        }
        p = a;
      }
    }
    function r(a) {
      q();
      var c = b("performanceNowSinceAppStart")(),
        d = o.get(a);
      if (d == null) {
        o.set(a, { dropped: 0, logged: [c], lastAccessed: c });
        return 1;
      }
      a = d.dropped;
      var e = d.logged;
      d.lastAccessed = c;
      while (e[0] < c - m) e.shift();
      if (e.length < l) {
        d.dropped = 0;
        e.push(c);
        return a + 1;
      } else {
        d.dropped++;
        return null;
      }
    }
    var s = {
        shouldLog: function (a) {
          return r(a.hash);
        },
      },
      t = "RE_EXN_ID";
    function u(a) {
      var b = null;
      a == null || typeof a !== "object"
        ? (b = h("Non-object thrown: %s", String(a)))
        : Object.prototype.hasOwnProperty.call(a, t)
        ? (b = h("Rescript exception thrown: %s", JSON.stringify(a)))
        : typeof a.message !== "string"
        ? (b = h(
            "Non-error thrown: %s, keys: %s",
            String(a),
            JSON.stringify(Object.keys(a).sort())
          ))
        : Object.isExtensible &&
          !Object.isExtensible(a) &&
          (b = h("Non-extensible thrown: %s", String(a.message)));
      if (b != null) {
        b.taalOpcodes = b.taalOpcodes || [];
        b.taalOpcodes.push(g.PREVIOUS_FRAME);
        return b;
      }
      return a;
    }
    var aa =
        typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
      v;
    function ba(a) {
      var b = a.error != null ? u(a.error) : h(a.message || "");
      b.fileName == null && a.filename != null && (b.fileName = a.filename);
      b.line == null && a.lineno != null && (b.line = a.lineno);
      b.column == null && a.colno != null && (b.column = a.colno);
      b.guardList = [aa];
      b.loggingSource = "ONERROR";
      (a = v) === null || a === void 0 ? void 0 : a.reportError(b);
    }
    var w = {
        setup: function (b) {
          if (typeof a.addEventListener !== "function") return;
          if (v != null) return;
          v = b;
          a.addEventListener("error", ba);
        },
      },
      x = [],
      y = {
        pushGuard: function (a) {
          x.unshift(a);
        },
        popGuard: function () {
          x.shift();
        },
        inGuard: function () {
          return x.length !== 0;
        },
        cloneGuardList: function () {
          return x.map(function (a) {
            return a.name;
          });
        },
        findDeferredSource: function () {
          for (var a = 0; a < x.length; a++) {
            var b = x[a];
            if (b.deferredSource != null) return b.deferredSource;
          }
        },
      };
    function ca(a) {
      if (a.type != null) return a.type;
      if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY")
        return "fatal";
      if (a.name == "SyntaxError") return "fatal";
      if (
        a.loggingSource == "ONERROR" &&
        a.message.indexOf("ResizeObserver loop") >= 0
      )
        return "warn";
      return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0
        ? "warn"
        : "error";
    }
    var z = [],
      A = (function () {
        function a() {
          this.metadata = [].concat(z);
        }
        var b = a.prototype;
        b.addEntries = function () {
          var a;
          (a = this.metadata).push.apply(a, arguments);
          return this;
        };
        b.addEntry = function (a, b, c) {
          this.metadata.push([a, b, c]);
          return this;
        };
        b.isEmpty = function () {
          return this.metadata.length === 0;
        };
        b.clearEntries = function () {
          this.metadata = [];
        };
        b.format = function () {
          var a = [];
          this.metadata.forEach(function (b) {
            if (b && b.length) {
              b = b
                .map(function (a) {
                  return a != null ? String(a).replace(/:/g, "_") : "";
                })
                .join(":");
              a.push(b);
            }
          });
          return a;
        };
        b.getAll = function () {
          return this.metadata;
        };
        a.addGlobalMetadata = function (a, b, c) {
          z.push([a, b, c]);
        };
        a.getGlobalMetadata = function () {
          return z;
        };
        a.unsetGlobalMetadata = function (a, b) {
          z = z.filter(function (c) {
            return !(Array.isArray(c) && c[0] === a && c[1] === b);
          });
        };
        return a;
      })(),
      B = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
    function c(a, b) {
      if (Object.isFrozen(a)) return;
      b.type && (!a.type || B[a.type] > B[b.type]) && (a.type = b.type);
      var c = b.metadata;
      if (c != null) {
        var d;
        d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
        c != null && d.addEntries.apply(d, c.getAll());
        a.metadata = d;
      }
      b.project != null && (a.project = b.project);
      b.errorName != null && (a.errorName = b.errorName);
      b.componentStack != null && (a.componentStack = b.componentStack);
      b.deferredSource != null && (a.deferredSource = b.deferredSource);
      b.blameModule != null && (a.blameModule = b.blameModule);
      b.loggingSource != null && (a.loggingSource = b.loggingSource);
      d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
      c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
      if (d !== b.messageFormat && b.messageFormat != null) {
        var e;
        d += " [Caught in: " + b.messageFormat + "]";
        c.push.apply(
          c,
          (e = b.messageParams) !== null && e !== void 0 ? e : []
        );
      }
      a.messageFormat = d;
      a.messageParams = c;
      e = b.forcedKey;
      d = a.forcedKey;
      c =
        e != null && d != null
          ? e + "_" + d
          : e !== null && e !== void 0
          ? e
          : d;
      a.forcedKey = c;
    }
    function d(a) {
      var b;
      return da(
        (b = a.messageFormat) !== null && b !== void 0 ? b : a.message,
        a.messageParams || []
      );
    }
    function da(a, b) {
      var c = 0;
      a = a.replace(/%s/g, function () {
        return c < b.length ? b[c++] : "NOPARAM";
      });
      c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
      return a;
    }
    function f(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return String(a);
      });
    }
    var C = { aggregateError: c, toReadableMessage: d, toStringParams: f },
      ea = 5,
      D = [];
    function E(a) {
      D.push(a), D.length > ea && D.shift();
    }
    function F(a) {
      var b = a.getAllResponseHeaders();
      if (b != null && b.indexOf("X-FB-Debug") >= 0) {
        b = a.getResponseHeader("X-FB-Debug");
        b && E(b);
      }
    }
    function fa() {
      return D;
    }
    var G = { add: E, addFromXHR: F, getAll: fa },
      ga = "abcdefghijklmnopqrstuvwxyz012345";
    function H() {
      var a = 0;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      for (var e = 0; e < c.length; e++) {
        var f = c[e];
        if (f != null) {
          var g = f.length;
          for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h);
        }
      }
      var i = "";
      for (var j = 0; j < 6; j++) (i = ga.charAt(a & 31) + i), (a >>= 5);
      return i;
    }
    var I = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/,
      ],
      ha = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null &&
      Error.stackTraceLimit < 80 &&
      (Error.stackTraceLimit = 80);
    function ia(a) {
      var b = a.name,
        c = a.message;
      a = a.stack;
      if (a == null) return null;
      if (b != null && c != null && c !== "") {
        var d = b + ": " + c + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
        if (a === b + ": " + c) return null;
      }
      if (b != null) {
        d = b + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
      }
      if (c != null && c !== "") {
        b = ": " + c + "\n";
        d = a.indexOf(b);
        c = a.substring(0, d);
        if (/^\w+$/.test(c)) return a.substring(d + b.length);
      }
      return a.replace(ha, "");
    }
    function J(a) {
      a = a.trim();
      var b;
      a;
      var c, d, e;
      if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
      else {
        var f;
        for (var g = 0; g < I.length; g++) {
          var h = I[g];
          f = a.match(h);
          if (f != null) break;
        }
        f != null && f.length === 4
          ? ((c = f[1]),
            (d = parseInt(f[2], 10)),
            (e = parseInt(f[3], 10)),
            (b = a.substring(0, a.length - f[0].length)))
          : (b = a);
        b = b.replace(/^at /, "").trim();
      }
      h = { identifier: b, script: c, line: d, column: e };
      h.text = K(h);
      return h;
    }
    function ja(a) {
      return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J);
    }
    function ka(a) {
      a = ia(a);
      return ja(a);
    }
    function la(a) {
      if (a == null || a === "") return null;
      a = a.split("\n");
      a.splice(0, 1);
      return a.map(function (a) {
        return a.trim();
      });
    }
    function K(a) {
      var b = a.identifier,
        c = a.script,
        d = a.line;
      a = a.column;
      b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
      c != null &&
        d != null &&
        a != null &&
        (b += " (" + c + ":" + d + ":" + a + ")");
      return b;
    }
    function L(c) {
      var d,
        e,
        f,
        h,
        i,
        j,
        k = ka(c);
      d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
      var l = c.framesToPop;
      if (l != null) {
        l = Math.min(l, k.length);
        while (l-- > 0) d.unshift(g.PREVIOUS_FRAME);
      }
      l = (l = c.messageFormat) !== null && l !== void 0 ? l : c.message;
      e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(
        function (a) {
          return String(a);
        }
      );
      var m = la(c.componentStack),
        n = m == null ? null : m.map(J),
        o = c.metadata ? c.metadata.format() : new A().format();
      o.length === 0 && (o = void 0);
      var p = k
        .map(function (a) {
          return a.text;
        })
        .join("\n");
      f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
      var q = ca(c),
        r = c.loggingSource,
        s = c.project;
      h = (h = c.lineNumber) !== null && h !== void 0 ? h : c.line;
      i = (i = c.columnNumber) !== null && i !== void 0 ? i : c.column;
      j = (j = c.fileName) !== null && j !== void 0 ? j : c.sourceURL;
      var t = k.length > 0;
      t && h == null && (h = k[0].line);
      t && i == null && (i = k[0].column);
      t && j == null && (j = k[0].script);
      n = {
        blameModule: c.blameModule,
        column: i == null ? null : String(i),
        clientTime: Math.floor(Date.now() / 1e3),
        componentStackFrames: n,
        deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
        extra: (t = c.extra) !== null && t !== void 0 ? t : {},
        fbtrace_id: c.fbtrace_id,
        guardList: (i = c.guardList) !== null && i !== void 0 ? i : [],
        hash: H(f, p, q, s, r),
        isNormalizedError: !0,
        line: h == null ? null : String(h),
        loggingSource: r,
        message: C.toReadableMessage(c),
        messageFormat: l,
        messageParams: e,
        metadata: o,
        name: f,
        page_time: Math.floor(b("performanceNowSinceAppStart")()),
        project: s,
        reactComponentStack: m,
        script: j,
        serverHash: c.serverHash,
        stack: p,
        stackFrames: k,
        type: q,
        xFBDebug: G.getAll(),
      };
      c.forcedKey != null && (n.forcedKey = c.forcedKey);
      d.length > 0 && (n.taalOpcodes = d);
      t = a.location;
      t && (n.windowLocationURL = t.href);
      for (i in n) n[i] == null && delete n[i];
      return n;
    }
    function ma(a) {
      return a != null && typeof a === "object" && a.isNormalizedError === !0
        ? a
        : null;
    }
    var M = { formatStackFrame: K, normalizeError: L, ifNormalizedError: ma },
      na = "<global.react>",
      N = [],
      O = [],
      P = 50,
      Q = !1,
      R = {
        history: O,
        addListener: function (a, b) {
          b === void 0 && (b = !1),
            N.push(a),
            b ||
              O.forEach(function (b) {
                return a(
                  b,
                  (b = b.loggingSource) !== null && b !== void 0
                    ? b
                    : "DEPRECATED"
                );
              });
        },
        unshiftListener: function (a) {
          N.unshift(a);
        },
        removeListener: function (a) {
          b("removeFromArray")(N, a);
        },
        reportError: function (a) {
          a = M.normalizeError(a);
          R.reportNormalizedError(a);
        },
        reportNormalizedError: function (b) {
          if (Q) return !1;
          var a = y.cloneGuardList();
          b.componentStackFrames && a.unshift(na);
          a.length > 0 && (b.guardList = a);
          if (b.deferredSource == null) {
            a = y.findDeferredSource();
            a != null && (b.deferredSource = M.normalizeError(a));
          }
          O.length > P && O.splice(P / 2, 1);
          O.push(b);
          Q = !0;
          for (a = 0; a < N.length; a++)
            try {
              var c;
              N[a](
                b,
                (c = b.loggingSource) !== null && c !== void 0
                  ? c
                  : "DEPRECATED"
              );
            } catch (a) {}
          Q = !1;
          return !0;
        },
      };
    R.addListener(j.errorListener);
    var oa = "<anonymous guard>",
      S = !1,
      T = {
        applyWithGuard: function (a, b, c, d) {
          y.pushGuard({
            name:
              ((d === null || d === void 0 ? void 0 : d.name) != null
                ? d.name
                : null) ||
              (a.name ? "func_name:" + a.name : null) ||
              oa,
            deferredSource:
              d === null || d === void 0 ? void 0 : d.deferredSource,
          });
          if (S)
            try {
              return a.apply(b, c);
            } finally {
              y.popGuard();
            }
          try {
            return Function.prototype.apply.call(a, b, c);
          } catch (h) {
            try {
              b =
                d !== null && d !== void 0
                  ? d
                  : babelHelpers["extends"]({}, null);
              var e = b.deferredSource,
                f = b.onError;
              b = b.onNormalizedError;
              var g = u(h);
              e = {
                deferredSource: e,
                loggingSource: "GUARDED",
                project:
                  (e = d === null || d === void 0 ? void 0 : d.project) !==
                    null && e !== void 0
                    ? e
                    : "ErrorGuard",
                type: d === null || d === void 0 ? void 0 : d.errorType,
              };
              C.aggregateError(g, e);
              d = M.normalizeError(g);
              g == null &&
                a &&
                ((d.extra[a.toString().substring(0, 100)] = "function"),
                c != null &&
                  c.length &&
                  (d.extra[Array.from(c).toString().substring(0, 100)] =
                    "args"));
              d.guardList = y.cloneGuardList();
              f && f(g);
              b && b(d);
              R.reportNormalizedError(d);
            } catch (a) {}
          } finally {
            y.popGuard();
          }
        },
        guard: function (a, b) {
          function c() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
              d[e] = arguments[e];
            return T.applyWithGuard(a, this, d, b);
          }
          a.__SMmeta && (c.__SMmeta = a.__SMmeta);
          return c;
        },
        inGuard: function () {
          return y.inGuard();
        },
        skipGuardGlobal: function (a) {
          S = a;
        },
      },
      U = 1024,
      V = [],
      W = 0;
    function X(a) {
      return String(a);
    }
    function Y(a) {
      return a == null ? null : String(a);
    }
    function pa(a, b) {
      var c = {};
      b &&
        b.forEach(function (a) {
          c[a] = !0;
        });
      Object.keys(a).forEach(function (b) {
        a[b] ? (c[b] = !0) : c[b] && delete c[b];
      });
      return Object.keys(c);
    }
    function Z(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return {
          column: Y(a.column),
          identifier: a.identifier,
          line: Y(a.line),
          script: a.script,
        };
      });
    }
    function qa(a) {
      a = String(a);
      return a.length > U ? a.substring(0, U - 3) + "..." : a;
    }
    function ra(a, b) {
      var c;
      c = {
        appId: Y(b.appId),
        cavalry_lid: b.cavalry_lid,
        access_token: k.access_token,
        ancestor_hash: a.hash,
        bundle_variant:
          (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
        clientTime: X(a.clientTime),
        column: a.column,
        componentStackFrames: Z(a.componentStackFrames),
        events: a.events,
        extra: pa(a.extra, b.extra),
        forcedKey: a.forcedKey,
        frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
        guardList: a.guardList,
        line: a.line,
        loggingFramework: b.loggingFramework,
        messageFormat: qa(a.messageFormat),
        messageParams: a.messageParams.map(qa),
        name: a.name,
        sample_weight: Y(b.sample_weight),
        script: a.script,
        site_category: b.site_category,
        stackFrames: Z(a.stackFrames),
        type: a.type,
        page_time: Y(a.page_time),
        project: a.project,
        push_phase: b.push_phase,
        report_source: b.report_source,
        report_source_ref: b.report_source_ref,
        rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
        script_path: b.script_path,
        server_revision: Y(b.server_revision),
        spin: Y(b.spin),
        svn_rev: String(b.client_revision),
        additional_client_revisions: Array.from(
          (c = b.additional_client_revisions) !== null && c !== void 0 ? c : []
        ).map(X),
        taalOpcodes:
          a.taalOpcodes == null
            ? null
            : a.taalOpcodes.map(function (a) {
                return a;
              }),
        web_session_id: b.web_session_id,
        version: "3",
        xFBDebug: a.xFBDebug,
      };
      b = a.blameModule;
      var d = a.deferredSource;
      b != null && (c.blameModule = String(b));
      d &&
        d.stackFrames &&
        (c.deferredSource = { stackFrames: Z(d.stackFrames) });
      a.metadata && (c.metadata = a.metadata);
      a.loadingUrls && (c.loadingUrls = a.loadingUrls);
      a.serverHash != null && (c.serverHash = a.serverHash);
      a.windowLocationURL != null &&
        (c.windowLocationURL = a.windowLocationURL);
      a.loggingSource != null && (c.loggingSource = a.loggingSource);
      return c;
    }
    function sa(a, b, c) {
      var d;
      W++;
      if (b.sample_weight === 0) return !1;
      var e = s.shouldLog(a);
      if (e == null) return !1;
      if (
        (d = b.projectBlocklist) !== null &&
        d !== void 0 &&
        d.includes(a.project)
      )
        return !1;
      d = ra(a, b);
      Object.assign(d, {
        ancestors: V.slice(),
        clientWeight: X(e),
        page_position: X(W),
      });
      V.length < 15 && V.push(a.hash);
      c(d);
      return !0;
    }
    var ta = { createErrorPayload: ra, postError: sa },
      $ = null,
      ua = !1;
    function va(a) {
      if ($ == null) return;
      var b = $,
        c = a.reason,
        d;
      if (
        c != null &&
        typeof c === "object" &&
        (c.name == null ||
          c.name === "" ||
          c.message == null ||
          c.message === "")
      )
        try {
          (d = h("UnhandledRejection: %s", JSON.stringify(c))),
            (d.loggingSource = "ONUNHANDLEDREJECTION");
        } catch (a) {
          (d = h(
            "UnhandledRejection: (circular) %s",
            Object.keys(c).join(",")
          )),
            (d.loggingSource = "ONUNHANDLEDREJECTION");
        }
      else
        (d = u(c)),
          d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
      try {
        c = a.promise;
        d.stack =
          String(d.stack || "") +
          (c != null && typeof c.settledStack === "string"
            ? "\n(<promise_settled_stack_below>)\n" + c.settledStack
            : "") +
          (c != null && typeof c.createdStack === "string"
            ? "\n(<promise_created_stack_below>)\n" + c.createdStack
            : "");
      } catch (a) {}
      b.reportError(d);
      a.preventDefault();
    }
    function wa(b) {
      ($ = b),
        typeof a.addEventListener === "function" &&
          !ua &&
          ((ua = !0), a.addEventListener("unhandledrejection", va));
    }
    var xa = { onunhandledrejection: va, setup: wa };
    c = {
      preSetup: function (a) {
        (a == null || a.ignoreOnError !== !0) && w.setup(R),
          (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(R);
      },
      setup: function (a, b) {
        R.addListener(function (c) {
          ta.postError(c, a, b);
        });
      },
    };
    var ya = (function () {
      function a(a) {
        (this.project = a),
          (this.events = []),
          (this.metadata = new A()),
          (this.taalOpcodes = []);
      }
      var b = a.prototype;
      b.$1 = function (b, c) {
        var d = String(c),
          e = this.events,
          f = this.project,
          h = this.metadata,
          i = this.blameModule,
          j = this.forcedKey,
          k = this.error,
          l;
        for (
          var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2;
          o < m;
          o++
        )
          n[o - 2] = arguments[o];
        if (this.normalizedError) {
          var p = {
            message:
              this.normalizedError.messageFormat + " [Caught in: " + d + "]",
            params: [].concat(this.normalizedError.messageParams, n),
            forcedKey: j,
          };
          l = babelHelpers["extends"]({}, this.normalizedError, {
            message: p.message,
            messageFormat: p.message,
            messageParams: C.toStringParams(p.params),
            project: f,
            type: b,
            loggingSource: "FBLOGGER",
          });
        } else if (k)
          this.taalOpcodes.length > 0 &&
            new a("fblogger")
              .blameToPreviousFrame()
              .blameToPreviousFrame()
              .warn("Blame helpers do not work with catching"),
            C.aggregateError(k, {
              messageFormat: d,
              messageParams: C.toStringParams(n),
              errorName: k.name,
              forcedKey: j,
              project: f,
              type: b,
              loggingSource: "FBLOGGER",
            }),
            (l = M.normalizeError(k));
        else {
          k = new Error(d);
          if (k.stack === void 0)
            try {
              throw k;
            } catch (a) {}
          k.messageFormat = d;
          k.messageParams = C.toStringParams(n);
          k.blameModule = i;
          k.forcedKey = j;
          k.project = f;
          k.type = b;
          k.loggingSource = "FBLOGGER";
          k.taalOpcodes = [g.PREVIOUS_FRAME, g.PREVIOUS_FRAME].concat(
            this.taalOpcodes
          );
          l = M.normalizeError(k);
          l.name = "FBLogger";
        }
        if (!h.isEmpty())
          if (l.metadata == null) l.metadata = h.format();
          else {
            var q = l.metadata.concat(h.format()),
              r = new Set(q);
            l.metadata = Array.from(r.values());
          }
        if (e.length > 0)
          if (l.events != null) {
            var s;
            (s = l.events).push.apply(s, e);
          } else l.events = e;
        R.reportNormalizedError(l);
        return k;
      };
      b.fatal = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["fatal", a].concat(c));
      };
      b.mustfix = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["error", a].concat(c));
      };
      b.warn = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["warn", a].concat(c));
      };
      b.info = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["info", a].concat(c));
      };
      b.debug = function (a) {};
      b.mustfixThrow = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        var e = this.$1.apply(this, ["error", a].concat(c));
        e ||
          ((e = h("mustfixThrow does not support catchingNormalizedError")),
          (e.taalOpcodes = e.taalOpcodes || []),
          e.taalOpcodes.push(g.PREVIOUS_FRAME));
        e.message = C.toReadableMessage(e);
        throw e;
      };
      b.catching = function (b) {
        !(b instanceof Error)
          ? new a("fblogger")
              .blameToPreviousFrame()
              .warn("Catching non-Error object is not supported")
          : (this.error = b);
        return this;
      };
      b.catchingNormalizedError = function (a) {
        this.normalizedError = a;
        return this;
      };
      b.event = function (a) {
        this.events.push(a);
        return this;
      };
      b.blameToModule = function (a) {
        this.blameModule = a;
        return this;
      };
      b.blameToPreviousFile = function () {
        this.taalOpcodes.push(g.PREVIOUS_FILE);
        return this;
      };
      b.blameToPreviousFrame = function () {
        this.taalOpcodes.push(g.PREVIOUS_FRAME);
        return this;
      };
      b.blameToPreviousDirectory = function () {
        this.taalOpcodes.push(g.PREVIOUS_DIR);
        return this;
      };
      b.addToCategoryKey = function (a) {
        this.forcedKey = a;
        return this;
      };
      b.addMetadata = function (a, b, c) {
        this.metadata.addEntry(a, b, c);
        return this;
      };
      return a;
    })();
    d = function (a, b) {
      var c = new ya(a);
      return b != null ? c.event(a + "." + b) : c;
    };
    d.addGlobalMetadata = function (a, b, c) {
      A.addGlobalMetadata(a, b, c);
    };
    f = {
      blameToPreviousFile: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_FILE);
        return a;
      },
      blameToPreviousFrame: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_FRAME);
        return a;
      },
      blameToPreviousDirectory: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_DIR);
        return a;
      },
    };
    F = {
      err: h,
      ErrorBrowserConsole: j,
      ErrorDynamicData: k,
      ErrorFilter: s,
      ErrorGlobalEventHandler: w,
      ErrorGuard: T,
      ErrorGuardState: y,
      ErrorMetadata: A,
      ErrorNormalizeUtils: M,
      ErrorPoster: ta,
      ErrorPubSub: R,
      ErrorSerializer: C,
      ErrorSetup: c,
      ErrorXFBDebug: G,
      FBLogger: d,
      getErrorSafe: u,
      getSimpleHash: H,
      TAAL: f,
      TAALOpcode: g,
    };
    e.exports = F;
  },
  null
);
__d(
  "ErrorGuard",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuard;
  },
  98
);
__d(
  "CallbackDependencyManager",
  ["ErrorGuard"],
  function (a, b, c, d, e, f) {
    var g;
    a = (function () {
      "use strict";
      function a() {
        (this.$1 = new Map()),
          (this.$2 = new Map()),
          (this.$3 = 1),
          (this.$4 = new Map());
      }
      var c = a.prototype;
      c.$5 = function (a, b) {
        var c = 0,
          d = new Set();
        for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
        for (
          b = d.keys(),
            e = Array.isArray(b),
            f = 0,
            b = e
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (e) {
            if (f >= b.length) break;
            d = b[f++];
          } else {
            f = b.next();
            if (f.done) break;
            d = f.value;
          }
          d = d;
          if (this.$4.get(d)) continue;
          c++;
          var g = this.$1.get(d);
          g === void 0 && ((g = new Map()), this.$1.set(d, g));
          g.set(a, (g.get(a) || 0) + 1);
        }
        return c;
      };
      c.$6 = function (a) {
        a = this.$1.get(a);
        if (!a) return;
        for (
          var c = a.entries(),
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          var h = f[0];
          f = f[1] - 1;
          a.set(h, f);
          f <= 0 && a["delete"](h);
          f = this.$2.get(h);
          if (f !== void 0) {
            f.$7--;
            if (f.$7 <= 0) {
              f = f.$8;
              this.$2["delete"](h);
              (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, []);
            }
          }
        }
      };
      c.addDependenciesToExistingCallback = function (a, b) {
        var c = this.$2.get(a);
        if (!c) return null;
        b = this.$5(a, b);
        c.$7 += b;
        return a;
      };
      c.isPersistentDependencySatisfied = function (a) {
        return !!this.$4.get(a);
      };
      c.satisfyPersistentDependency = function (a) {
        this.$4.set(a, 1), this.$6(a);
      };
      c.satisfyNonPersistentDependency = function (a) {
        var b = this.$4.get(a) === 1;
        b || this.$4.set(a, 1);
        this.$6(a);
        b || this.$4["delete"](a);
      };
      c.registerCallback = function (a, c) {
        var d = this.$3;
        this.$3++;
        c = this.$5(d, c);
        if (c === 0) {
          (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
          return null;
        }
        this.$2.set(d, { $8: a, $7: c });
        return d;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "EventSubscription",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      var b = this;
      this.remove = function () {
        b.subscriber &&
          (b.subscriber.removeSubscription(b), (b.subscriber = null));
      };
      this.subscriber = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "EmitterSubscription",
  ["EventSubscription"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        b = a.call(this, b) || this;
        b.listener = c;
        b.context = d;
        return b;
      }
      return b;
    })(c("EventSubscription"));
    g["default"] = a;
  },
  98
);
__d(
  "EventSubscriptionVendor",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.addSubscription = function (a, b) {
        b.subscriber === this || g(0, 2828);
        this.$1[a] || (this.$1[a] = []);
        var c = this.$1[a].length;
        this.$1[a].push(b);
        b.eventType = a;
        b.key = c;
        return b;
      };
      b.removeAllSubscriptions = function (a) {
        a === void 0 ? (this.$1 = {}) : delete this.$1[a];
      };
      b.removeSubscription = function (a) {
        var b = a.eventType;
        a = a.key;
        b = this.$1[b];
        b && delete b[a];
      };
      b.getSubscriptionsForType = function (a) {
        return this.$1[a];
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "emptyFunction",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return function () {
        return a;
      };
    }
    b = function () {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function () {
      return this;
    };
    b.thatReturnsArgument = function (a) {
      return a;
    };
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "FBLogger",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger;
  },
  98
);
__d(
  "unrecoverableViolation",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c("FBLogger")(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      for (
        d = 0;
        d < ((f = e == null ? void 0 : e.blameToPreviousFrame) != null ? f : 0);
        ++d
      ) {
        var f;
        b = b.blameToPreviousFrame();
      }
      f = e == null ? void 0 : e.categoryKey;
      f != null && (b = b.addToCategoryKey(f));
      return b.mustfixThrow(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseEventEmitter",
  [
    "EmitterSubscription",
    "ErrorGuard",
    "EventSubscriptionVendor",
    "emptyFunction",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f) {
    var g;
    a = (function () {
      "use strict";
      function a() {
        (this.$2 = new (b("EventSubscriptionVendor"))()), (this.$1 = null);
      }
      var c = a.prototype;
      c.addListener = function (a, c, d) {
        return this.$2.addSubscription(
          a,
          new (b("EmitterSubscription"))(this.$2, c, d)
        );
      };
      c.removeListener = function (a) {
        this.$2.removeSubscription(a);
      };
      c.once = function (a, b, c) {
        var d = this;
        return this.addListener(a, function () {
          d.removeCurrentListener(), b.apply(c, arguments);
        });
      };
      c.removeAllListeners = function (a) {
        this.$2.removeAllSubscriptions(a);
      };
      c.removeCurrentListener = function () {
        if (!this.$1)
          throw b("unrecoverableViolation")(
            "Not in an emitting cycle; there is no current subscription",
            "emitter"
          );
        this.$2.removeSubscription(this.$1);
      };
      c.listeners = function (a) {
        a = this.$2.getSubscriptionsForType(a);
        return a
          ? a.filter(b("emptyFunction").thatReturnsTrue).map(function (a) {
              return a.listener;
            })
          : [];
      };
      c.emit = function (a) {
        var b = this.$2.getSubscriptionsForType(a);
        if (b) {
          var c = Object.keys(b),
            d;
          for (var e = 0; e < c.length; e++) {
            var f = c[e],
              g = b[f];
            if (g) {
              this.$1 = g;
              if (d == null) {
                d = [g, a];
                for (
                  var h = 0,
                    i = arguments.length <= 1 ? 0 : arguments.length - 1;
                  h < i;
                  h++
                )
                  d[h + 2] =
                    h + 1 < 1 || arguments.length <= h + 1
                      ? void 0
                      : arguments[h + 1];
              } else d[0] = g;
              this.__emitToSubscription.apply(this, d);
            }
          }
          this.$1 = null;
        }
      };
      c.__emitToSubscription = function (a, c) {
        for (
          var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
          f < d;
          f++
        )
          e[f - 2] = arguments[f];
        (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
          name: "EventEmitter " + c + " event",
        });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "EventEmitter",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      return b;
    })(c("BaseEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "EventEmitterWithHolding",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$2 = a),
          (this.$3 = b),
          (this.$1 = null),
          (this.$5 = []),
          (this.$4 = 0);
      }
      var b = a.prototype;
      b.addListener = function (a, b, c) {
        return this.$2.addListener(a, b, c);
      };
      b.once = function (a, b, c) {
        return this.$2.once(a, b, c);
      };
      b.addRetroactiveListener = function (a, b, c) {
        var d = this.$2.addListener(a, b, c),
          e = this.$5;
        e.push(!1);
        this.$4++;
        this.$3.emitToListener(a, b, c);
        this.$4--;
        e[e.length - 1] && d.remove();
        e.pop();
        return d;
      };
      b.removeAllListeners = function (a) {
        this.$2.removeAllListeners(a);
      };
      b.removeCurrentListener = function () {
        if (this.$4) {
          var a = this.$5;
          a[a.length - 1] = !0;
        } else this.$2.removeCurrentListener();
      };
      b.listeners = function (a) {
        return this.$2.listeners(a);
      };
      b.emit = function (a) {
        var b;
        for (
          var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
          e < c;
          e++
        )
          d[e - 1] = arguments[e];
        (b = this.$2).emit.apply(b, [a].concat(d));
      };
      b.emitAndHold = function (a) {
        var b, c;
        for (
          var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
          f < d;
          f++
        )
          e[f - 1] = arguments[f];
        this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
        (c = this.$2).emit.apply(c, [a].concat(e));
        this.$1 = null;
      };
      b.releaseCurrentEvent = function () {
        this.$1 != null
          ? this.$3.releaseEvent(this.$1)
          : this.$4 > 0 && this.$3.releaseCurrentEvent();
      };
      b.releaseHeldEventType = function (a) {
        this.$3.releaseEventType(a);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "EventHolder",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = {}), (this.$2 = []);
      }
      var b = a.prototype;
      b.holdEvent = function (a) {
        this.$1[a] = this.$1[a] || [];
        var b = this.$1[a],
          c = { eventType: a, index: b.length };
        for (
          var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
          f < d;
          f++
        )
          e[f - 1] = arguments[f];
        b.push(e);
        return c;
      };
      b.emitToListener = function (a, b, c) {
        var d = this,
          e = this.$1[a];
        if (!e) return;
        e.forEach(function (e, f) {
          if (!e) return;
          d.$2.push({ eventType: a, index: f });
          b.apply(c, e);
          d.$2.pop();
        });
      };
      b.releaseCurrentEvent = function () {
        this.$2.length || h(0, 1764),
          this.releaseEvent(this.$2[this.$2.length - 1]);
      };
      b.releaseEvent = function (a) {
        delete this.$1[a.eventType][a.index];
      };
      b.releaseEventType = function (a) {
        this.$1[a] = [];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "Arbiter",
  [
    "invariant",
    "ArbiterToken",
    "CallbackDependencyManager",
    "ErrorGuard",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return Array.isArray(a) ? a : [a];
    }
    function j(a) {
      return a instanceof k || a === k ? a : k;
    }
    var k = (function () {
        function a() {
          var a = new (c("EventEmitter"))();
          this.$3 = new l();
          this.$2 = new (c("EventEmitterWithHolding"))(a, this.$3);
          this.$1 = new (c("CallbackDependencyManager"))();
          this.$4 = [];
        }
        var b = a.prototype;
        b.subscribe = function (a, b, d) {
          var e = this;
          a = i(a);
          a.forEach(function (a) {
            (a && typeof a === "string") || h(0, 1966, a);
          });
          typeof b === "function" || h(0, 1967, b);
          d = d || "all";
          d === "new" || d === "all" || h(0, 1968, d);
          a = a.map(function (a) {
            var c = function (c) {
              return e.$5(b, a, c);
            };
            c.__SMmeta = b.__SMmeta;
            if (d === "new") return e.$2.addListener(a, c);
            e.$4.push({});
            c = e.$2.addRetroactiveListener(a, c);
            e.$4.pop();
            return c;
          });
          return new (c("ArbiterToken"))(this, a);
        };
        b.$5 = function (a, b, d) {
          var e = this.$4[this.$4.length - 1];
          if (e[b] === !1) return;
          a = c("ErrorGuard").applyWithGuard(a, null, [b, d]);
          a === !1 && this.$2.releaseCurrentEvent();
          e[b] = a;
        };
        b.unsubscribeCurrentSubscription = function () {
          this.$2.removeCurrentListener();
        };
        b.releaseCurrentPersistentEvent = function () {
          this.$2.releaseCurrentEvent();
        };
        b.subscribeOnce = function (a, b, c) {
          var d = this;
          a = this.subscribe(
            a,
            function (a, c) {
              d.unsubscribeCurrentSubscription();
              return b(a, c);
            },
            c
          );
          return a;
        };
        b.unsubscribe = function (a) {
          a.isForArbiterInstance(this) || h(0, 1969), a.unsubscribe();
        };
        b.inform = function (a, b, c) {
          var d = Array.isArray(a);
          a = i(a);
          c = c || "event";
          var e = c === "state" || c === "persistent";
          this.$4.push({});
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            g || h(0, 1970, g);
            this.$3.setHoldingBehavior(g, c);
            this.$2.emitAndHold(g, b);
            this.$6(g, b, e);
          }
          g = this.$4.pop();
          return d ? g : g[a[0]];
        };
        b.query = function (a) {
          var b = this.$3.getHoldingBehavior(a);
          !b || b === "state" || h(0, 1971, a);
          b = null;
          this.$3.emitToListener(a, function (a) {
            b = a;
          });
          return b;
        };
        b.registerCallback = function (a, b) {
          if (typeof a === "function") return this.$1.registerCallback(a, b);
          else return this.$1.addDependenciesToExistingCallback(a, b);
        };
        b.$6 = function (a, b, c) {
          if (b === null) return;
          c
            ? this.$1.satisfyPersistentDependency(a)
            : this.$1.satisfyNonPersistentDependency(a);
        };
        a.subscribe = function (b, c, d) {
          return a.prototype.subscribe.apply(j(this), arguments);
        };
        a.unsubscribeCurrentSubscription = function () {
          return a.prototype.unsubscribeCurrentSubscription.apply(j(this));
        };
        a.releaseCurrentPersistentEvent = function () {
          return a.prototype.releaseCurrentPersistentEvent.apply(j(this));
        };
        a.subscribeOnce = function (b, c, d) {
          return a.prototype.subscribeOnce.apply(j(this), arguments);
        };
        a.unsubscribe = function (b) {
          return a.prototype.unsubscribe.apply(j(this), arguments);
        };
        a.inform = function (b, c, d) {
          return a.prototype.inform.apply(j(this), arguments);
        };
        a.informSingle = function (b, c, d) {
          return a.prototype.inform.apply(j(this), arguments);
        };
        a.query = function (b) {
          return a.prototype.query.apply(j(this), arguments);
        };
        a.registerCallback = function (b, c) {
          return a.prototype.registerCallback.apply(j(this), arguments);
        };
        a.$6 = function (b, c, d) {
          return a.prototype.$6.apply(j(this), arguments);
        };
        a.$5 = function (b, c, d) {
          return a.prototype.$5.apply(j(this), arguments);
        };
        return a;
      })(),
      l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a;
          a = b.call(this) || this;
          a.$ArbiterEventHolder1 = {};
          return a;
        }
        var c = a.prototype;
        c.setHoldingBehavior = function (a, b) {
          this.$ArbiterEventHolder1[a] = b;
        };
        c.getHoldingBehavior = function (a) {
          return this.$ArbiterEventHolder1[a];
        };
        c.holdEvent = function (a) {
          var c = this.$ArbiterEventHolder1[a];
          c !== "persistent" && this.$ArbiterEventHolder2(a);
          if (c !== "event") {
            var d;
            for (
              var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1;
              g < e;
              g++
            )
              f[g - 1] = arguments[g];
            return (d = b.prototype.holdEvent).call.apply(
              d,
              [this, a].concat(f)
            );
          }
          return void 0;
        };
        c.$ArbiterEventHolder2 = function (a) {
          this.emitToListener(a, this.releaseCurrentEvent, this);
        };
        c.releaseEvent = function (a) {
          a && b.prototype.releaseEvent.call(this, a);
        };
        return a;
      })(c("EventHolder"));
    k.call(k);
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "objectValues",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Object.values(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "BootloaderEvents",
  ["Arbiter", "objectValues"],
  function (a, b, c, d, e, f, g) {
    var h = "bootloader/bootload",
      i = "hasteResponse/handle",
      j = "bootloader/defer_timeout",
      k = "bootloader/resource_in_longtail_bt_manifest",
      l = new (c("Arbiter"))(),
      m = new Set(),
      n = new Set();
    function o(a, b) {
      return (
        "haste_response_ef:" + a + ":" + ((a = b) != null ? a : "<unknown>")
      );
    }
    function a(a) {
      var b = new Map();
      for (
        var a = c("objectValues")(a),
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        for (
          var f = f,
            g = Array.isArray(f),
            h = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= f.length) break;
            i = f[h++];
          } else {
            h = f.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = i[0];
          i = i[1];
          b.set(j, i);
        }
      }
      return b;
    }
    function b() {
      return {
        blocking: new Map(),
        nonblocking: new Map(),
        default: new Map(),
      };
    }
    function d(a) {
      m.add(a);
    }
    function e(a) {
      m["delete"](a), l.inform(h, a, "persistent");
    }
    function f(a, b) {
      n.add(o(a, b));
    }
    function p(a, b, c) {
      l.inform(o(a, b), c, "persistent");
    }
    function q(a) {
      l.inform(j, a, "persistent");
    }
    function r(a) {
      return l.subscribe(h, function (b, c) {
        return a(c);
      });
    }
    function s(a) {
      return l.subscribe(j, function (b, c) {
        return a(c);
      });
    }
    function t() {
      return new Set(m);
    }
    function u(a) {
      l.inform(i, a, "persistent");
    }
    function v(a) {
      return l.subscribe(i, function (b, c) {
        b = o(c.source, c.sourceDetail);
        if (n.has(b)) {
          l.subscribe(b, function (b, d) {
            return a(babelHelpers["extends"]({}, c, { efData: d }));
          });
          return;
        }
        a(c);
      });
    }
    function w(a) {
      return l.subscribe(k, a);
    }
    var x = !1;
    function y() {
      if (x) return;
      x = !0;
      l.inform(k, null, "persistent");
    }
    g.flattenResourceMapSet = a;
    g.newResourceMapSet = b;
    g.notifyBootloadStart = d;
    g.notifyBootload = e;
    g.notifyHasteResponseEFStart = f;
    g.notifyHasteResponseEF = p;
    g.notifyDeferTimeout = q;
    g.onBootload = r;
    g.onDeferTimeout = s;
    g.getActiveBootloads = t;
    g.notifyHasteResponse = u;
    g.onHasteResponse = v;
    g.onResourceInLongTailBTManifest = w;
    g.notifyResourceInLongTailBTManifest = y;
  },
  98
);
__d(
  "performanceAbsoluteNow",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    var h = function () {
      return Date.now();
    };
    function a(a) {
      h = a;
    }
    if (
      c("performance").now &&
      c("performance").timing &&
      c("performance").timing.navigationStart
    ) {
      var i = c("performance").timing.navigationStart;
      b = function () {
        return c("performance").now() + i;
      };
    } else
      b = function () {
        return h();
      };
    b.setFallback = a;
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "BootloaderEventsManager",
  ["CallbackDependencyManager", "performanceAbsoluteNow"],
  function (a, b, c, d, e, f) {
    var g;
    a = (function () {
      "use strict";
      function a() {
        (this.$1 = new (b("CallbackDependencyManager"))()),
          (this.$2 = new Map());
      }
      var c = a.prototype;
      c.rsrcDone = function (a) {
        return a;
      };
      c.bootload = function (a) {
        return "bl:" + a.join(",");
      };
      c.tierOne = function (a) {
        return "t1:" + a;
      };
      c.tierTwoStart = function (a) {
        return "t2s:" + a;
      };
      c.tierTwo = function (a) {
        return "t2:" + a;
      };
      c.tierThreeStart = function (a) {
        return "t3s:" + a;
      };
      c.tierThree = function (a) {
        return "t3:" + a;
      };
      c.tierOneLog = function (a) {
        return "t1l:" + a;
      };
      c.tierTwoLog = function (a) {
        return "t2l:" + a;
      };
      c.tierThreeLog = function (a) {
        return "t3l:" + a;
      };
      c.beDone = function (a) {
        return "beDone:" + a;
      };
      c.notify = function (a) {
        this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()),
          this.$1.satisfyPersistentDependency(a);
      };
      c.getEventTime = function (a) {
        return this.$2.get(a);
      };
      c.registerCallback = function (a, b) {
        this.$1.registerCallback(a, b);
      };
      c.isPersistentDependencySatisfied = function (a) {
        return this.$1.isPersistentDependencySatisfied(a);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "BootloaderRetryTracker",
  ["ErrorGuard", "performanceAbsoluteNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = (function () {
      function b(a) {
        (this.$2 = []),
          (this.$3 = new Map()),
          (this.$1 = a),
          (this.$4 = this.$1.retries.length > 0);
      }
      var d = b.prototype;
      d.getAllRetryAttempts_FOR_DEBUG_ONLY = function () {
        return this.$3;
      };
      d.getNumRetriesForSource = function (a) {
        return (a = this.$3.get(a)) != null ? a : 0;
      };
      d.maybeScheduleRetry = function (b, d, e) {
        var f = this,
          g = this.getNumRetriesForSource(b);
        if (!this.$5() || g >= this.$1.retries.length) {
          e();
          return;
        }
        this.$2.push(c("performanceAbsoluteNow")());
        this.$3.set(b, g + 1);
        a.setTimeout(function () {
          f.$5() ? d() : e();
        }, this.$1.retries[g]);
      };
      d.$5 = function () {
        if (!this.$4) return !1;
        var a = this.$2.length;
        if (a < this.$1.abortNum) return !0;
        a = this.$2[a - 1] - this.$2[a - this.$1.abortNum];
        a < this.$1.abortTime &&
          (c("ErrorGuard").applyWithGuard(this.$1.abortCallback, null, []),
          (this.$4 = !1));
        return this.$4;
      };
      return b;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "BitMap",
  [],
  function (a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = null);
      }
      var b = a.prototype;
      b.set = function (a) {
        this.$2 != null && !this.$1[a] && (this.$2 = null);
        this.$1[a] = 1;
        return this;
      };
      b.toString = function () {
        var a = [];
        for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
        return a.length ? i(a.join("")) : "";
      };
      b.toCompressedString = function () {
        if (this.$1.length === 0) return "";
        if (this.$2 != null) return this.$2;
        var a = [],
          b = 1,
          c = this.$1[0] || 0,
          d = c.toString(2);
        for (var e = 1; e < this.$1.length; e++) {
          var f = this.$1[e] || 0;
          f === c ? b++ : (a.push(h(b)), (c = f), (b = 1));
        }
        b && a.push(h(b));
        return (this.$2 = i(d + a.join("")));
      };
      return a;
    })();
    function h(a) {
      a = a.toString(2);
      var b = "0".repeat(a.length - 1);
      return b + a;
    }
    function i(a) {
      a = (a + "00000").match(/[01]{6}/g);
      var b = "";
      for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CSRBitMap",
  ["BitMap"],
  function (a, b, c, d, e, f, g) {
    var h = new (c("BitMap"))();
    function a(a) {
      h.set(a);
    }
    function b() {
      return h.toCompressedString();
    }
    g.add = a;
    g.toCompressedString = b;
  },
  98
);
__d(
  "CSRIndexUtil",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    b = 0;
    function a(a) {
      a.substr(0, 1) === ":" || h(0, 21456, a);
      return a
        .substr(1)
        .split(",")
        .map(function (a) {
          return parseInt(a, 10);
        });
    }
    g.UNKNOWN_RESOURCE_INDEX = b;
    g.parseCSRIndexes = a;
  },
  98
);
__d(
  "isFacebookURI",
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = ["http", "https"];
    function a(a) {
      g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !0
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    a.setRegex = function (a) {
      g = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "isMessengerDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "isWorkDotMetaDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)work\\.meta\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "isWorkplaceDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");
    function a(a) {
      return a.getProtocol() === "https" && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "BlueCompatBroker",
  [
    "Env",
    "URI",
    "isCometAltpayJsSdkIframeAllowedDomain",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i,
      j = new Map(),
      k = !1,
      l = function (a) {
        a = new (g || (g = b("URI")))(a);
        return (
          b("isFacebookURI")(a) ||
          b("isWorkplaceDotComURI")(a) ||
          b("isMessengerDotComURI")(a) ||
          b("isWorkDotMetaDotComURI")(a)
        );
      },
      m = {
        dispatch: function (a) {
          var b = m.getMessageEventString(a, "compatAction");
          if (b != null) {
            b = j.get(b);
            b && b(a);
          }
        },
        getMessageEventString: function (a, b) {
          a = a.data;
          if (typeof a === "object") {
            a = a == null ? void 0 : a[b];
            if (typeof a === "string") return a;
          }
          return "";
        },
        init: function (a) {
          a === void 0 && (a = "");
          if (!k) {
            document.body && (document.body.style.overflow = "auto");
            var c = b("isCometAltpayJsSdkIframeAllowedDomain")()
                ? "https://secure.facebook.com/"
                : document.referrer,
              d = c.indexOf("/", 8);
            c = c.substring(0, d);
            if (l(c)) {
              d = new MessageChannel();
              a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
              i = d.port1;
              i.onmessage = m.dispatch;
              window.parent.postMessage(
                { compatAction: "CompatSetup", iframeKey: a },
                c + "/",
                [d.port2]
              );
            }
            try {
              window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
                window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            } catch (a) {}
            k = !0;
          }
        },
        register: function (a, b) {
          j.set(a, b);
        },
        clear: function (a) {
          j["delete"](a);
        },
        sendMessage: function (a) {
          k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a));
        },
      };
    e.exports = m;
  },
  null
);
__d(
  "MessengerEnvironment",
  ["CurrentEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = babelHelpers["extends"]({}, c("CurrentEnvironment"), {
      messengerui: !1,
      roomschatui: !1,
      setMessengerUI: function (a) {
        h.messengerui = a;
      },
      setRoomsChatUI: function (a) {
        h.roomschatui = a;
      },
    });
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "areEqual",
  [],
  function (a, b, c, d, e, f) {
    var g = [],
      h = [];
    function a(a, b) {
      var c = g.length ? g.pop() : [],
        d = h.length ? h.pop() : [];
      a = i(a, b, c, d);
      c.length = 0;
      d.length = 0;
      g.push(c);
      h.push(d);
      return a;
    }
    function i(a, b, c, d) {
      if (a === b) return a !== 0 || 1 / a == 1 / b;
      if (a == null || b == null) return !1;
      if (typeof a !== "object" || typeof b !== "object") return !1;
      var e = Object.prototype.toString,
        f = e.call(a);
      if (f != e.call(b)) return !1;
      switch (f) {
        case "[object String]":
          return a == String(b);
        case "[object Number]":
          return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
        case "[object Date]":
        case "[object Boolean]":
          return +a == +b;
        case "[object RegExp]":
          return (
            a.source == b.source &&
            a.global == b.global &&
            a.multiline == b.multiline &&
            a.ignoreCase == b.ignoreCase
          );
      }
      e = c.length;
      while (e--) if (c[e] == a) return d[e] == b;
      c.push(a);
      d.push(b);
      try {
        e = 0;
        if (f === "[object Array]") {
          e = a.length;
          if (e !== b.length) return !1;
          while (e--) if (!i(a[e], b[e], c, d)) return !1;
        } else if (a instanceof Set) {
          if (a.size !== b.size) return !1;
          f = Array.from(b.values());
          for (
            var e = a,
              g = Array.isArray(e),
              h = 0,
              e = g
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var j;
            if (g) {
              if (h >= e.length) break;
              j = e[h++];
            } else {
              h = e.next();
              if (h.done) break;
              j = h.value;
            }
            j = j;
            var k = !1;
            for (var l = 0; l < f.length; l++) {
              var m = f[l];
              if (i(j, m, c, d)) {
                k = !0;
                f.splice(l, 1);
                break;
              }
            }
            if (k === !1) return !1;
          }
          return !0;
        } else if (a instanceof Map) {
          if (a.size !== b.size) return !1;
          m = Array.from(b);
          for (
            j = a,
              l = Array.isArray(j),
              k = 0,
              j = l
                ? j
                : j[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (l) {
              if (k >= j.length) break;
              h = j[k++];
            } else {
              k = j.next();
              if (k.done) break;
              h = k.value;
            }
            g = h;
            e = !1;
            for (f = 0; f < m.length; f++) {
              h = m[f];
              if (i(g, h, c, d)) {
                e = !0;
                m.splice(f, 1);
                break;
              }
            }
            if (e === !1) return !1;
          }
          return !0;
        } else {
          if (a.constructor !== b.constructor) return !1;
          if (
            Object.prototype.hasOwnProperty.call(a, "valueOf") &&
            Object.prototype.hasOwnProperty.call(b, "valueOf")
          )
            return a.valueOf() == b.valueOf();
          h = Object.keys(a);
          if (h.length != Object.keys(b).length) return !1;
          for (f = 0; f < h.length; f++) {
            if (h[f] === "_owner") continue;
            if (
              !Object.prototype.hasOwnProperty.call(b, h[f]) ||
              !i(a[h[f]], b[h[f]], c, d)
            )
              return !1;
          }
        }
        return !0;
      } finally {
        c.pop(), d.pop();
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "SimpleHook",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.__callbacks = []), (this.call = this.$2);
      }
      var b = a.prototype;
      b.hasCallback = function (a) {
        var b = this.__callbacks;
        return (
          b.length > 0 &&
          (a == null ||
            b.some(function (b) {
              return b === a || b.$1 === a;
            }))
        );
      };
      b.add = function (a, b) {
        var c = this,
          d;
        if ((b == null ? void 0 : b.once) === !0) {
          b = function () {
            c.remove(d), a.apply(null, arguments);
          };
          b.$1 = a;
          d = b;
        } else d = a;
        this.__callbacks.push(d);
        return d;
      };
      b.removeLast = function () {
        return this.__callbacks.pop();
      };
      b.remove = function (a) {
        return this.removeIf(function (b) {
          return b === a;
        });
      };
      b.removeIf = function (a) {
        var b = this.__callbacks;
        this.__callbacks = b.filter(function (b) {
          return !a(b);
        });
        return b.length > this.__callbacks.length;
      };
      b.clear = function () {
        this.__callbacks = [];
      };
      b.$2 = function () {
        var a = this.__callbacks;
        for (var b = 0, c = a.length; b < c; ++b) {
          var d = a[b];
          d.apply(null, arguments);
        }
      };
      return a;
    })();
    f.SimpleHook = a;
  },
  66
);
__d(
  "BanzaiLazyQueue",
  ["SimpleHook"],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = new (d("SimpleHook").SimpleHook)();
    a = {
      onQueue: i,
      queuePost: function (a, b, c) {
        h.push([a, b, c]), i.call(a, b, c);
      },
      flushQueue: function () {
        var a = h;
        h = [];
        return a;
      },
    };
    f.exports = a;
  },
  34
);
__d(
  "ExecutionEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === "function";
    d = {
      canUseDOM: b,
      canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
      canUseViewport: b && !!window.screen,
      canUseWorkers: typeof Worker !== "undefined",
      isInBrowser: b || c,
      isInWorker: c,
    };
    e = d;
    f["default"] = e;
  },
  66
);
__d(
  "gkx",
  ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
      j = {};
    function k(a) {
      var b = i[a];
      b != null || h(0, 11797, a);
      j[a] ||
        ((j[a] = !0),
        (c("ExecutionEnvironment").canUseDOM ||
          c("ExecutionEnvironment").isInWorker) &&
          d("BanzaiLazyQueue").queuePost("gk2_exposure", {
            identifier: a,
            hash: b.hash,
          }));
      return b.result;
    }
    k.add = function (a, b) {
      for (var c in a)
        b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
    };
    k.addLoggedInternal = function (a) {
      k.add(a);
      for (a in a) j[a] = !0;
    };
    a = c("emptyFunction");
    k.getGKs = function () {
      return null;
    };
    k.getLogged = function () {
      return Object.keys(j).map(function (a) {
        return { identifier: a, hash: i[a].hash };
      });
    };
    k.setPass = a;
    k.setFail = a;
    k.clear = a;
    b = k;
    g["default"] = b;
  },
  98
);
__d(
  "isCdnURI",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
      var b = Number(a.getPort());
      if (!!b && b !== 80 && b !== 443) return !1;
      return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "BlueCompatRouter",
  [
    "BlueCompatBroker",
    "Env",
    "MessengerEnvironment",
    "URI",
    "areEqual",
    "gkx",
    "isCdnURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = function (b, c) {
      var d,
        e = a.__fbNativeClearTimeout || window.clearTimeout,
        f = a.__fbNativeSetTimeout || window.setTimeout;
      return function () {
        var a = this,
          g = arguments,
          h = function () {
            (d = null), b.apply(a, g);
          };
        e(d);
        d = f(h, c);
      };
    };
    var h = {
        convertUri: function (a) {
          if (a == null || a === "") return new (c("URI"))();
          a = new (c("URI"))(a);
          if (a.getDomain().endsWith("messenger.com"))
            return a
              .setDomain(
                a.getDomain().replace(/messenger\.com/i, "facebook.com")
              )
              .setPath("/messages" + a.getPath());
          else return a;
        },
        goFragment: function (a) {
          if (c("Env").isCQuick) {
            a = h.convertUri(a);
            if (a.getFragment()) {
              var b = c("URI").getRequestURI(!1, !1);
              if (
                c("areEqual")(
                  new (c("URI"))(b).setFragment("").getQualifiedURI(),
                  new (c("URI"))(a).setFragment("").getQualifiedURI()
                )
              )
                return !0;
            }
          }
          return !1;
        },
        go: function (a, b) {
          if (c("Env").isCQuick) {
            var d = new (c("URI"))(a);
            a = h.convertUri(a);
            var e = a.getQualifiedURI();
            if (c("isCdnURI")(a) || e.getPath().startsWith("/compat"))
              return !1;
            a = (function () {
              if (
                c("MessengerEnvironment").messengerui &&
                e.getPath().startsWith("/messages")
              )
                return [!1, "/messages"];
              if (
                d.getPath().startsWith("/settings") &&
                e.getPath().startsWith("/settings") &&
                (c("gkx")("1224637") || e.getSubdomain() !== d.getSubdomain())
              ) {
                var a = e.getQueryData().tab;
                return a != null ? [!1, "/settings/" + a] : [!1, "/settings"];
              }
              if (
                d.getPath().startsWith("/games") &&
                e.getPath().startsWith("/games")
              )
                return [!1, "/games/web"];
              if (
                d.getPath().startsWith("/notes") &&
                e.getPath().startsWith("/notes")
              )
                return [!1, "/notes"];
              if (
                d.getPath().startsWith("/latest/posts") &&
                e.getPath().startsWith("/latest/posts")
              )
                return [!1, "/business"];
              if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath()))
                return [!1, "/pages/settings"];
              return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath())
                ? [!1, "/insights"]
                : [!0, ""];
            })();
            var f = a[0];
            a = a[1];
            i({
              compatAction: "route",
              maintainKey: a,
              replace: b,
              uri: String(e),
            });
            return f;
          }
          return !1;
        },
        startChat: function (a, b) {
          return h.sendMessage({
            compatAction: "startchat",
            tabId: a,
            isPage: b,
          });
        },
        chatListener: function (a, b, c) {
          a.addEventListener("click", function (a) {
            a.preventDefault(), h.startChat(b, c);
          });
        },
        sendMessage: function (a) {
          if (c("Env").isCQuick) {
            c("BlueCompatBroker").init();
            c("BlueCompatBroker").sendMessage(a);
            return !0;
          }
          return !1;
        },
      },
      i = b(h.sendMessage, 250);
    d = h;
    g["default"] = d;
  },
  98
);
__d(
  "BaseDeserializePHPQueryData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function h(a) {
      return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a;
    }
    function a(a, b) {
      if (a == null || a === "") return {};
      var c = {};
      a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      a = a.split("&");
      var d = Object.prototype.hasOwnProperty;
      for (var e = 0, f = a.length; e < f; e++) {
        var i = a[e].match(g);
        if (!i) {
          var j = a[e].indexOf("=");
          if (j === -1) c[b(a[e])] = null;
          else {
            var k = a[e].substring(0, j);
            j = a[e].substring(j + 1);
            c[b(k)] = b(j);
          }
        } else {
          k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
          j = i[1];
          i = b(i[3] || "");
          k[0] = j;
          j = c;
          for (var l = 0; l < k.length - 1; l++) {
            var m = h(k[l]);
            if (m) {
              if (!d.call(j, m)) {
                var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                j[m] = n;
                if (j[m] !== n) return c;
              }
              j = j[m];
            } else
              k[l + 1] && !k[l + 1].match(/^\d{1,3}$/)
                ? j.push({})
                : j.push([]),
                (j = j[j.length - 1]);
          }
          j instanceof Array && k[k.length - 1] === ""
            ? j.push(i)
            : (j[h(k[k.length - 1])] = i);
        }
      }
      return c;
    }
    f.deserialize = a;
  },
  66
);
__d(
  "flattenPHPQueryData",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      return i(a, "", {});
    }
    function i(a, b, c) {
      if (a == null) c[b] = void 0;
      else if (typeof a === "object") {
        typeof a.appendChild !== "function" || h(0, 2616);
        for (var d in a)
          d !== "$$typeof" &&
            Object.prototype.hasOwnProperty.call(a, d) &&
            a[d] !== void 0 &&
            i(a[d], b ? b + "[" + d + "]" : d, c);
      } else c[b] = a;
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PHPQuerySerializer",
  ["BaseDeserializePHPQueryData", "flattenPHPQueryData"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = [];
      a = c("flattenPHPQueryData")(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
        }
      return b.join("&");
    }
    function h(a) {
      return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    function b(a) {
      return d("BaseDeserializePHPQueryData").deserialize(a, i);
    }
    function i(a) {
      try {
        return decodeURIComponent(a.replace(/\+/g, " "));
      } catch (b) {
        return a;
      }
    }
    e = {
      decodeComponent: i,
      deserialize: b,
      encodeComponent: h,
      serialize: a,
    };
    f.exports = e;
  },
  34
);
__d(
  "PHPQuerySerializerNoEncoding",
  ["BaseDeserializePHPQueryData", "flattenPHPQueryData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = [];
      a = c("flattenPHPQueryData")(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
        }
      return b.join("&");
    }
    function h(a) {
      return a;
    }
    function b(a) {
      return d("BaseDeserializePHPQueryData").deserialize(a, i);
    }
    function i(a) {
      return a;
    }
    e = {
      decodeComponent: i,
      deserialize: b,
      encodeComponent: h,
      serialize: a,
    };
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "PHPStrictQuerySerializer",
  ["PHPQuerySerializer", "flattenPHPQueryData"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = [];
      a = c("flattenPHPQueryData")(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
        }
      return b.join("&");
    }
    function h(a) {
      return encodeURIComponent(a);
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = d("PHPQuerySerializer").deserialize;
    g.decodeComponent = d("PHPQuerySerializer").decodeComponent;
  },
  98
);
__d(
  "URIRFC3986",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
      "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
    );
    function a(a) {
      if (a.trim() === "") return null;
      a = a.match(g);
      if (a == null) return null;
      var b = a[2] ? a[2].substr(2) : null,
        c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
      a = {
        uri: a[0] ? a[0] : null,
        scheme: c,
        authority: b,
        userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
        host: a[2] ? a[4] : null,
        port: a[5]
          ? a[5].substr(1)
            ? parseInt(a[5].substr(1), 10)
            : null
          : null,
        path: a[6] ? a[6] : null,
        query: a[7] ? a[7].substr(1) : null,
        fragment: a[8] ? a[8].substr(1) : null,
        isGenericURI: b === null && !!c,
      };
      return a;
    }
    f.parse = a;
  },
  66
);
__d(
  "createObjectFrom",
  [],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      if (b === void 0) return g(a, !0);
      var c = {};
      if (Array.isArray(b))
        for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
      else for (d = a.length - 1; d >= 0; d--) c[a[d]] = b;
      return c;
    }
    f["default"] = g;
  },
  66
);
__d(
  "URISchemes",
  ["createObjectFrom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("createObjectFrom")([
      "apk",
      "accountscenter",
      "aidemos",
      "aistudio",
      "blob",
      "cmms",
      "fb",
      "fba",
      "fbatwork",
      "fb-ama",
      "fb-internal",
      "fb-workchat",
      "fb-workchat-secure",
      "fb-messenger",
      "fb-messenger-public",
      "fb-messenger-group-thread",
      "fb-page-messages",
      "fb-pma",
      "fbcf",
      "fbconnect",
      "fbinternal",
      "fbmobilehome",
      "fbrpc",
      "file",
      "flipper",
      "ftp",
      "gtalk",
      "http",
      "https",
      "mailto",
      "wss",
      "ms-app",
      "intent",
      "itms",
      "itms-apps",
      "itms-services",
      "lasso",
      "market",
      "svn+ssh",
      "fbstaging",
      "tel",
      "sms",
      "pebblejs",
      "sftp",
      "whatsapp",
      "moments",
      "flash",
      "fblite",
      "chrome-extension",
      "webcal",
      "instagram",
      "iglite",
      "fb124024574287414",
      "fb124024574287414rc",
      "fb124024574287414master",
      "fb1576585912599779",
      "fb929757330408142",
      "designpack",
      "fbpixelcloud",
      "fbapi20130214",
      "fb1196383223757595",
      "tbauth",
      "oculus",
      "oculus.store",
      "oculus.feed",
      "oculusstore",
      "odh",
      "com.oculus.rd",
      "aria",
      "skype",
      "ms-windows-store",
      "callto",
      "messenger",
      "workchat",
      "fb236786383180508",
      "fb1775440806014337",
      "data",
      "fb-mk",
      "munki",
      "origami-file",
      "fb-nimble-vrsrecorder",
      "fb-nimble-monohandtrackingvis",
      "together",
      "togetherbl",
      "horizonlauncher",
      "venues",
      "whatsapp-consumer",
      "whatsapp-smb",
      "fb-ide-opener",
      "fb-vscode",
      "fb-vscode-insiders",
      "editor",
      "spark-studio",
      "spark-simulator",
      "arstudio",
      "manifold",
      "origami-internal",
      "origami-public",
      "stella",
      "mwa",
      "mattermost",
      "logaggregator",
      "workrooms",
      "pcoip",
      "cinema",
      "home",
      "oculus360photos",
      "systemux",
    ]);
    function a(a) {
      return a == null || a === ""
        ? !0
        : Object.prototype.hasOwnProperty.call(h, a.toLowerCase());
    }
    g.isAllowed = a;
  },
  98
);
__d(
  "isSameOrigin",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return !a.getProtocol() ||
        !a.getDomain() ||
        !b.getProtocol() ||
        !b.getDomain()
        ? !1
        : a.getOrigin() === b.getOrigin();
    }
    f["default"] = a;
  },
  66
);
__d(
  "setHostSubdomain",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.split(".");
      a.length < 3 ? a.unshift(b) : (a[0] = b);
      return a.join(".");
    }
    f["default"] = a;
  },
  66
);
__d(
  "URIAbstractBase",
  [
    "invariant",
    "FBLogger",
    "PHPStrictQuerySerializer",
    "URIRFC3986",
    "URISchemes",
    "isSameOrigin",
    "setHostSubdomain",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
      ),
      k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      l = [];
    a = (function () {
      "use strict";
      a.parse = function (c, d, e, f) {
        if (!d) return !0;
        if (d instanceof a) {
          c.setProtocol(d.getProtocol());
          c.setDomain(d.getDomain());
          c.setPort(d.getPort());
          c.setPath(d.getPath());
          c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
          c.setFragment(d.getFragment());
          c.setIsGeneric(d.getIsGeneric());
          c.setForceFragmentSeparator(d.getForceFragmentSeparator());
          c.setOriginalRawQuery(d.getOriginalRawQuery());
          c.setQueryParamModified(!1);
          return !0;
        }
        d = d.toString().trim();
        var g = (h || (h = b("URIRFC3986"))).parse(d) || {
          fragment: null,
          scheme: null,
          query: null,
        };
        if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme)) return !1;
        c.setProtocol(g.scheme || "");
        if (!e && j.test(g.host || "")) return !1;
        c.setDomain(g.host || "");
        c.setPort(g.port || "");
        c.setPath(g.path || "");
        if (e) c.setQueryData(f.deserialize(g.query || "") || {});
        else
          try {
            c.setQueryData(f.deserialize(g.query || "") || {});
          } catch (a) {
            return !1;
          }
        c.setFragment(g.fragment || "");
        g.fragment === "" && c.setForceFragmentSeparator(!0);
        c.setIsGeneric(g.isGenericURI || !1);
        c.setOriginalRawQuery(g.query);
        c.setQueryParamModified(!1);
        if (g.userinfo !== null) {
          if (e)
            throw new Error(
              "URI.parse: invalid URI (userinfo is not allowed in a URI): " + d
            );
          return !1;
        }
        if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
          if (e)
            throw new Error(
              "URI.parse: invalid URI (no domain but multiple back-slashes): " +
                d
            );
          return !1;
        }
        if (!c.getProtocol() && k.test(d)) {
          if (e)
            throw new Error(
              "URI.parse: invalid URI (unsafe protocol-relative URLs): " +
                d +
                "'"
            );
          return !1;
        }
        if (c.getDomain() && c.getPath() && !c.getPath().startsWith("/")) {
          if (e)
            throw new Error(
              "URI.parse: invalid URI (domain and path where path lacks leading slash): " +
                d
            );
          return !1;
        }
        c.getProtocol() &&
          !c.getIsGeneric() &&
          !c.getDomain() &&
          c.getPath() !== "" &&
          b("FBLogger")("uri").warn(
            'URI.parse: invalid URI (protocol "' +
              c.getProtocol() +
              '" with no domain)'
          );
        return !0;
      };
      a.tryParse = function (b, c) {
        var d = new a(null, c);
        return a.parse(d, b, !1, c) ? d : null;
      };
      a.isValid = function (b, c) {
        return !!a.tryParse(b, c);
      };
      function a(b, c) {
        c || g(0, 2966),
          (this.$9 = c),
          (this.$7 = ""),
          (this.$1 = ""),
          (this.$6 = ""),
          (this.$5 = ""),
          (this.$3 = ""),
          (this.$4 = !1),
          (this.$8 = {}),
          (this.$2 = !1),
          a.parse(this, b, !0, c),
          (this.$11 = !1);
      }
      var c = a.prototype;
      c.setProtocol = function (a) {
        (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
        this.$7 = a;
        return this;
      };
      c.getProtocol = function () {
        return (this.$7 || "").toLowerCase();
      };
      c.setSecure = function (a) {
        return this.setProtocol(a ? "https" : "http");
      };
      c.isSecure = function () {
        return this.getProtocol() === "https";
      };
      c.setDomain = function (a) {
        if (j.test(a))
          throw new Error(
            "URI.setDomain: unsafe domain specified: " +
              a +
              " for url " +
              this.toString()
          );
        this.$1 = a;
        return this;
      };
      c.getDomain = function () {
        return this.$1;
      };
      c.setPort = function (a) {
        this.$6 = a;
        return this;
      };
      c.getPort = function () {
        return this.$6;
      };
      c.setPath = function (a) {
        this.$5 = a;
        return this;
      };
      c.getPath = function () {
        return this.$5;
      };
      c.addQueryData = function (a, b) {
        Object.prototype.toString.call(a) === "[object Object]"
          ? Object.assign(this.$8, a)
          : (this.$8[a] = b);
        this.$11 = !0;
        return this;
      };
      c.setQueryData = function (a) {
        this.$8 = a;
        this.$11 = !0;
        return this;
      };
      c.getQueryData = function () {
        return this.$8;
      };
      c.setQueryString = function (a) {
        return this.setQueryData(this.$9.deserialize(a));
      };
      c.getQueryString = function (a, b, c) {
        a === void 0 && (a = !1);
        b === void 0 &&
          (b = function () {
            return !1;
          });
        c === void 0 && (c = null);
        return this.$12(!1, a, b, c);
      };
      c.$12 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        if (!this.$11 && (b || c(this.getDomain()))) {
          return (b = this.$10) != null ? b : "";
        }
        return (a && d ? d : this.$9).serialize(this.getQueryData());
      };
      c.removeQueryData = function (a) {
        Array.isArray(a) || (a = [a]);
        for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
        this.$11 = !0;
        return this;
      };
      c.setFragment = function (a) {
        this.$3 = a;
        this.setForceFragmentSeparator(!1);
        return this;
      };
      c.getFragment = function () {
        return this.$3;
      };
      c.setForceFragmentSeparator = function (a) {
        this.$2 = a;
        return this;
      };
      c.getForceFragmentSeparator = function () {
        return this.$2;
      };
      c.setIsGeneric = function (a) {
        this.$4 = a;
        return this;
      };
      c.getIsGeneric = function () {
        return this.$4;
      };
      c.getOriginalRawQuery = function () {
        return this.$10;
      };
      c.setOriginalRawQuery = function (a) {
        this.$10 = a;
        return this;
      };
      c.setQueryParamModified = function (a) {
        this.$11 = a;
        return this;
      };
      c.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          Object.keys(this.getQueryData()).length > 0 ||
          this.getFragment()
        );
      };
      c.toString = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!1, !1, a, b);
      };
      c.toStringRawQuery = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!0, !1, a, b);
      };
      c.toStringPreserveQuery = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!1, !0, a, b);
      };
      c.toStringStrictQueryEncoding = function (a) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"));
      };
      c.$13 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        var e = this;
        for (var f = 0; f < l.length; f++) e = l[f](e);
        return e.$14(a, b, c, d);
      };
      c.$14 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        var e = "",
          f = this.getProtocol();
        f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
        f = this.getDomain();
        f && (e += f);
        f = this.getPort();
        f && (e += ":" + f);
        f = this.getPath();
        f ? (e += f) : e && (e += "/");
        f = this.$12(a, b, c, d);
        f && (e += "?" + f);
        a = this.getFragment();
        a ? (e += "#" + a) : this.getForceFragmentSeparator() && (e += "#");
        return e;
      };
      a.registerFilter = function (a) {
        l.push(a);
      };
      c.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        );
      };
      c.isSameOrigin = function (a) {
        return b("isSameOrigin")(this, a);
      };
      c.getQualifiedURIBase = function () {
        return new a(this, this.$9).qualify();
      };
      c.qualify = function () {
        if (!this.getDomain()) {
          var b = new a(window.location.href, this.$9);
          this.setProtocol(b.getProtocol())
            .setDomain(b.getDomain())
            .setPort(b.getPort());
        }
        return this;
      };
      c.setSubdomain = function (a) {
        var c = this.qualify();
        c = c.getDomain();
        return this.setDomain(b("setHostSubdomain")(c, a));
      };
      c.getSubdomain = function () {
        if (!this.getDomain()) return "";
        var a = this.getDomain().split(".");
        if (a.length <= 2) return "";
        else return a[0];
      };
      c.isSubdomainOfDomain = function (b) {
        var c = this.getDomain();
        return a.isDomainSubdomainOfDomain(c, b, this.$9);
      };
      a.isDomainSubdomainOfDomain = function (b, c, d) {
        if (c === "" || b === "") return !1;
        if (b.endsWith(c)) {
          var e = b.length,
            f = c.length,
            g = e - f - 1;
          if (e === f || b[g] === ".") {
            e = new a(null, d);
            e.setDomain(c);
            return a.isValid(e, d);
          }
        }
        return !1;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "err",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").err;
  },
  98
);
__d(
  "URIBase",
  [
    "ExecutionEnvironment",
    "PHPQuerySerializerNoEncoding",
    "URIAbstractBase",
    "UriNeedRawQuerySVChecker",
    "err",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a, b, d, e) {
      try {
        return c("URIAbstractBase").parse(a, b, d, e);
      } catch (a) {
        throw new Error(c("err")(a.message));
      }
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      b.tryParse = function (a, c) {
        var d = new b(null, c);
        return h(d, a, !1, c) ? d : null;
      };
      b.isValid = function (a, c) {
        return !!b.tryParse(a, c);
      };
      function b(b, c) {
        var d;
        d = a.call(this, b, c) || this;
        d.$URIBase1 = c;
        h(babelHelpers.assertThisInitialized(d), b, !0, c);
        return d;
      }
      var d = b.prototype;
      d.setDomain = function (b) {
        try {
          a.prototype.setDomain.call(this, b);
        } catch (a) {
          throw new Error(c("err")(a.message));
        }
        return this;
      };
      d.getQualifiedURIBase = function () {
        return new b(this, this.$URIBase1).qualify();
      };
      d.qualify = function () {
        if (!this.getDomain()) {
          var a = (typeof window !== "undefined" ? window : self).location.href;
          c("ExecutionEnvironment").isInWorker &&
            a &&
            a.startsWith("blob:") &&
            (a = a.substring(5, a.length));
          a = new b(a, this.$URIBase1);
          this.setProtocol(a.getProtocol())
            .setDomain(a.getDomain())
            .setPort(a.getPort());
        }
        return this;
      };
      d.isSubdomainOfDomain = function (a) {
        var c = this.getDomain();
        return b.isDomainSubdomainOfDomain(c, a, this.$URIBase1);
      };
      b.isDomainSubdomainOfDomain = function (a, c, d) {
        if (c === "" || a === "") return !1;
        if (a.endsWith(c)) {
          var e = a.length,
            f = c.length,
            g = e - f - 1;
          if (e === f || a[g] === ".") {
            e = new b(null, d);
            e.setDomain(c);
            return b.isValid(e, d);
          }
        }
        return !1;
      };
      d.toString = function () {
        return a.prototype.toString.call(
          this,
          c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
          c("PHPQuerySerializerNoEncoding")
        );
      };
      d.toStringRawQuery = function () {
        return a.prototype.toStringRawQuery.call(
          this,
          c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
          c("PHPQuerySerializerNoEncoding")
        );
      };
      d.toStringPreserveQuery = function () {
        return a.prototype.toStringPreserveQuery.call(
          this,
          c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
          c("PHPQuerySerializerNoEncoding")
        );
      };
      d.toStringStrictQueryEncoding = function () {
        return a.prototype.toStringStrictQueryEncoding.call(
          this,
          c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery
        );
      };
      d.getQueryString = function (b) {
        b === void 0 && (b = !1);
        return a.prototype.getQueryString.call(
          this,
          b,
          c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery,
          c("PHPQuerySerializerNoEncoding")
        );
      };
      return b;
    })(c("URIAbstractBase"));
    g["default"] = a;
  },
  98
);
__d(
  "UriNeedRawQuerySVChecker",
  ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = ["http", "https"];
    function a(a) {
      if (a == null) return !1;
      a =
        a instanceof (g || (g = b("URIBase")))
          ? a
          : (g || (g = b("URIBase"))).tryParse(
              a,
              h || (h = b("PHPQuerySerializer"))
            );
      if (a == null) return !1;
      var c = a.getProtocol();
      return !i.includes(c) ? !1 : j(a.getDomain());
    }
    function j(a) {
      return (
        a != null &&
        b("UriNeedRawQuerySVConfig").uris.some(function (c) {
          return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(
            a,
            c,
            h || (h = b("PHPQuerySerializer"))
          );
        })
      );
    }
    e.exports = { isUriNeedRawQuery: a, isDomainNeedRawQuery: j };
  },
  null
);
__d(
  "ifRequired",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      var e;
      d &&
        d.call(null, [a], function (a) {
          e = a;
        });
      if (e && b) return b(e);
      else if (!e && c) return c();
    }
    f["default"] = a;
  },
  66
);
__d(
  "memoize",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      var b = a,
        c;
      return function () {
        arguments.length && h(0, 4494);
        b && ((c = b()), (b = null));
        return c;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "memoizeStringOnly",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = {};
      return function (c) {
        Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
        return b[c];
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "unexpectedUseInComet",
  ["FBLogger", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!c("gkx")("708253")) return;
      a = a + " called unexpectedly. This is not supported in Comet!";
      var b = c("FBLogger")("comet_infra")
        .blameToPreviousFrame()
        .blameToPreviousFrame();
      b.mustfix(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "unqualifyURI",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a.setProtocol("").setDomain("").setPort("");
    }
    f["default"] = a;
  },
  66
);
__d(
  "URI",
  [
    "Env",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "ReloadPage",
    "URIBase",
    "UriNeedRawQuerySVChecker",
    "ifRequired",
    "isFacebookURI",
    "memoize",
    "memoizeStringOnly",
    "unexpectedUseInComet",
    "unqualifyURI",
  ],
  function (a, b, c, d, e, f, g) {
    var h = c("memoize")(function () {
      return new j(window.location.href);
    });
    function i() {
      return c("ifRequired")("PageTransitions", function (a) {
        if (a.isInitialized()) return a;
      });
    }
    var j = (function (e) {
      babelHelpers.inheritsLoose(b, e);
      function b(a) {
        var b;
        d("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a)
          ? (b = e.call(this, a, c("PHPQuerySerializerNoEncoding")) || this)
          : (b = e.call(this, a || "", d("PHPQuerySerializer")) || this);
        return babelHelpers.assertThisInitialized(b);
      }
      var f = b.prototype;
      f.setPath = function (a) {
        this.path = a;
        return e.prototype.setPath.call(this, a);
      };
      f.getPath = function () {
        var a = e.prototype.getPath.call(this);
        return a ? a.replace(/^\/+/, "/") : a;
      };
      f.setProtocol = function (a) {
        this.protocol = a;
        return e.prototype.setProtocol.call(this, a);
      };
      f.setDomain = function (a) {
        this.domain = a;
        return e.prototype.setDomain.call(this, a);
      };
      f.setPort = function (a) {
        this.port = a;
        return e.prototype.setPort.call(this, a);
      };
      f.setFragment = function (a) {
        this.fragment = a;
        return e.prototype.setFragment.call(this, a);
      };
      f.stripTrailingSlash = function () {
        this.setPath(this.getPath().replace(/\/$/, ""));
        return this;
      };
      f.addTrailingSlash = function () {
        var a = this.getPath();
        a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
        return this;
      };
      f.valueOf = function () {
        return this.toString();
      };
      f.getRegisteredDomain = function () {
        if (!this.getDomain()) return "";
        if (!c("isFacebookURI")(this)) return null;
        var a = this.getDomain().split("."),
          b = a.indexOf("facebook");
        b === -1 && (b = a.indexOf("workplace"));
        return a.slice(b).join(".");
      };
      f.getUnqualifiedURI = function () {
        return c("unqualifyURI")(new b(this));
      };
      f.getQualifiedURI = function () {
        return new b(this).qualify();
      };
      f.isSameOrigin = function (a) {
        a = a;
        a == null ? (a = h()) : a instanceof b || (a = new b(a.toString()));
        return e.prototype.isSameOrigin.call(this, a);
      };
      b.goURIOnNewWindow = function (a) {
        b.goURIOnWindow(a, window.open("", "_blank"), !0);
      };
      b.goURIOnWindow = function (a, c, d, e) {
        d === void 0 && (d = !1),
          e === void 0 && (e = !1),
          b.goURIOnWindowWithReference(a, c, d, e);
      };
      b.goURIOnWindowWithReference = function (e, f, g, h) {
        g === void 0 && (g = !1);
        h === void 0 && (h = !1);
        e = new b(e);
        g = g;
        var i = !f || f === window;
        if (c("Env").isCQuick && c("isFacebookURI")(e) && i) {
          i = {
            cquick: c("Env").iframeKey,
            ctarget: c("Env").iframeTarget,
            cquick_token: c("Env").iframeToken,
          };
          e.addQueryData(i);
          g = !1;
        }
        i = e.toString();
        e = f ? f : window;
        f = window.location.href === i && e === window;
        !g && a.PageTransitions
          ? a.PageTransitions.go(i, h)
          : f
          ? d("ReloadPage").now()
          : h
          ? e.location.replace(i)
          : (e.location.href = i);
        return e;
      };
      f.go = function (a, d) {
        c("unexpectedUseInComet")("uri.go"), b.go(this, a, d);
      };
      b.tryParseURI = function (a) {
        a = c("URIBase").tryParse(a, d("PHPQuerySerializer"));
        return a ? new b(a) : null;
      };
      b.isValidURI = function (a) {
        return c("URIBase").isValid(a, d("PHPQuerySerializer"));
      };
      b.getRequestURI = function (a, c) {
        a === void 0 && (a = !0);
        c === void 0 && (c = !1);
        if (a) {
          a = i();
          if (a) return a.getCurrentURI(!!c).getQualifiedURI();
        }
        return new b(window.location.href);
      };
      b.getMostRecentURI = function () {
        var a = i();
        return a
          ? a.getMostRecentURI().getQualifiedURI()
          : new b(window.location.href);
      };
      b.getNextURI = function () {
        var a = i();
        return a
          ? a.getNextURI().getQualifiedURI()
          : new b(window.location.href);
      };
      b.encodeComponent = function (a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
      };
      b.decodeComponent = function (a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
      };
      b.normalize = function (a) {
        return a != null && typeof a === "string"
          ? this.normalizeString(a)
          : new b(a).toString();
      };
      return b;
    })(c("URIBase"));
    j.go = function (a, b, d) {
      c("unexpectedUseInComet")("URI.go"), j.goURIOnWindow(a, window, b, d);
    };
    j.normalizeString = c("memoizeStringOnly")(function (a) {
      return new j(a).toString();
    });
    j.expression =
      /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    j.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    g["default"] = j;
  },
  98
);
__d(
  "isCometAltpayJsSdkIframeAllowedDomain",
  ["CometAltpayJsSdkIframeAllowedDomains", "URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = Object.freeze(c("CometAltpayJsSdkIframeAllowedDomains"));
    var h = Object.freeze(b.allowed_domains);
    function a() {
      var a = new (c("URI"))(window.location.href);
      if (h == null || h.length <= 0) return !1;
      var b = h.some(function (b) {
        b = new (c("URI"))(b);
        return b == null ? !1 : a.isSameOrigin(b);
      });
      return b ? !0 : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ReloadPage",
  ["BlueCompatRouter", "Env"],
  function (a, b, c, d, e, f) {
    var g;
    function h(c) {
      !(g || (g = b("Env"))).isCQuick
        ? a.window.location.reload(c)
        : b("BlueCompatRouter").sendMessage({ compatAction: "reload" });
    }
    function c(b) {
      a.setTimeout(h, b);
    }
    f.now = h;
    f.delay = c;
  },
  66
);
__d(
  "isInternalFBURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)internalfb\\.com$", "i");
    function a(a) {
      return g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "XControllerURIBuilder",
  ["invariant", "URI", "gkx", "isInternalFBURI"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a, b) {
        (this.$1 = {}), (this.$2 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.setInt = function (a, b) {
        return this.__setParam(a, "Int", b);
      };
      b.setFBID = function (a, b) {
        return this.__setParam(a, "FBID", b);
      };
      b.setFloat = function (a, b) {
        return this.__setParam(a, "Float", b);
      };
      b.setString = function (a, b) {
        return this.__setParam(a, "String", b);
      };
      b.setExists = function (a, b) {
        b === !1 && (b = void 0);
        return this.__setParam(a, "Exists", b);
      };
      b.setBool = function (a, b) {
        return this.__setParam(a, "Bool", b);
      };
      b.setBoolVector = function (a, b) {
        return this.__setParam(a, "BoolVector", b);
      };
      b.setEnum = function (a, b) {
        return this.__setParam(a, "Enum", b);
      };
      b.setPath = function (a, b) {
        return this.__setParam(a, "Path", b);
      };
      b.setIntVector = function (a, b) {
        return this.__setParam(a, "IntVector", b);
      };
      b.setIntKeyset = function (a, b) {
        return this.__setParam(a, "IntKeyset", b);
      };
      b.setIntSet = function (a, b) {
        return this.__setParam(a, "IntSet", b.join(","));
      };
      b.setFloatVector = function (a, b) {
        return this.__setParam(a, "FloatVector", b);
      };
      b.setFloatSet = function (a, b) {
        return this.__setParam(a, "FloatSet", b.join(","));
      };
      b.setStringVector = function (a, b) {
        return this.__setParam(a, "StringVector", b);
      };
      b.setStringKeyset = function (a, b) {
        return this.__setParam(a, "StringKeyset", b);
      };
      b.setStringSet = function (a, b) {
        return this.__setParam(a, "StringSet", b);
      };
      b.setFBIDVector = function (a, b) {
        return this.__setParam(a, "FBIDVector", b);
      };
      b.setFBIDSet = function (a, b) {
        return this.__setParam(a, "FBIDSet", b);
      };
      b.setFBIDKeyset = function (a, b) {
        return this.__setParam(a, "FBIDKeyset", b);
      };
      b.setEnumVector = function (a, b) {
        return this.__setParam(a, "EnumVector", b);
      };
      b.setEnumSet = function (a, b) {
        return this.__setParam(a, "EnumSet", b);
      };
      b.setEnumKeyset = function (a, b) {
        return this.__setParam(a, "EnumKeyset", b);
      };
      b.setIntToIntMap = function (a, b) {
        return this.__setParam(a, "IntToIntMap", b);
      };
      b.setIntToFloatMap = function (a, b) {
        return this.__setParam(a, "IntToFloatMap", b);
      };
      b.setIntToStringMap = function (a, b) {
        return this.__setParam(a, "IntToStringMap", b);
      };
      b.setIntToBoolMap = function (a, b) {
        return this.__setParam(a, "IntToBoolMap", b);
      };
      b.setStringToIntMap = function (a, b) {
        return this.__setParam(a, "StringToIntMap", b);
      };
      b.setStringToFloatMap = function (a, b) {
        return this.__setParam(a, "StringToFloatMap", b);
      };
      b.setStringToStringMap = function (a, b) {
        return this.__setParam(a, "StringToStringMap", b);
      };
      b.setStringToNullableStringMap = function (a, b) {
        return this.__setParam(a, "StringToNullableStringMap", b);
      };
      b.setStringToBoolMap = function (a, b) {
        return this.__setParam(a, "StringToBoolMap", b);
      };
      b.setStringToEnumMap = function (a, b) {
        return this.__setParam(a, "StringToEnumMap", b);
      };
      b.setEnumToStringVectorMap = function (a, b) {
        return this.__setParam(a, "EnumToStringVectorMap", b);
      };
      b.setEnumToStringMap = function (a, b) {
        return this.__setParam(a, "EnumToStringMap", b);
      };
      b.setEnumToBoolMap = function (a, b) {
        return this.__setParam(a, "EnumToBoolMap", b);
      };
      b.setEnumToEnumMap = function (a, b) {
        return this.__setParam(a, "EnumToEnumMap", b);
      };
      b.setEnumToIntMap = function (a, b) {
        return this.__setParam(a, "EnumToIntMap", b);
      };
      b.setEnumToFBIDVectorMap = function (a, b) {
        return this.__setParam(a, "EnumToFBIDVectorMap", b);
      };
      b.setStringToIntDict = function (a, b) {
        return this.__setParam(a, "StringToIntDict", b);
      };
      b.setStringToNullableIntDict = function (a, b) {
        return this.__setParam(a, "StringToNullableIntDict", b);
      };
      b.setStringToFloatDict = function (a, b) {
        return this.__setParam(a, "StringToFloatDict", b);
      };
      b.setStringToStringKeysetDict = function (a, b) {
        return this.__setParam(a, "StringToStringKeysetDict", b);
      };
      b.setStringToNullableFloatDict = function (a, b) {
        return this.__setParam(a, "StringToNullableFloatDict", b);
      };
      b.setStringToStringDict = function (a, b) {
        return this.__setParam(a, "StringToStringDict", b);
      };
      b.setStringToNullableStringDict = function (a, b) {
        return this.__setParam(a, "StringToNullableStringDict", b);
      };
      b.setStringToBoolDict = function (a, b) {
        return this.__setParam(a, "StringToBoolDict", b);
      };
      b.setStringToEnumDict = function (a, b) {
        return this.__setParam(a, "StringToEnumDict", b);
      };
      b.setEnumToIntDict = function (a, b) {
        return this.__setParam(a, "EnumToIntDict", b);
      };
      b.setEnumToStringDict = function (a, b) {
        return this.__setParam(a, "EnumToStringDict", b);
      };
      b.setHackType = function (a, b) {
        return this.__setParam(a, "HackType", b);
      };
      b.setTypeAssert = function (a, b) {
        return this.__setParam(a, "TypeAssert", b);
      };
      b.__validateRequiredParamsExistence = function () {
        for (var a in this.$3)
          !this.$3[a].required ||
            Object.prototype.hasOwnProperty.call(this.$1, a) ||
            h(0, 903, a);
      };
      b.setParams = function (a) {
        for (var b in a) {
          this.__assertParamExists(b);
          var c = this.$3[b].type;
          this.__setParam(b, c, a[b]);
        }
        return this;
      };
      b.__assertParamExists = function (a) {
        a in this.$3 || h(0, 37339, a);
      };
      b.__setParam = function (a, b, c) {
        this.__assertParamExists(a);
        var d = this.$3[a].type,
          e = {
            StringOrPFBID: "String",
            IntOrPFBID: "Int",
            FBIDOrPFBID: "FBID",
            PaymentLegacyAdAccountID: "Int",
          };
        e = e[d];
        d === b || e === b || h(0, 37340, a, b, d);
        this.__setParamInt(a, c);
        return this;
      };
      b.__setParamInt = function (a, b) {
        this.$1[a] = b;
      };
      b.getRequest_LEGACY_UNTYPED = function (a) {
        return a.setReplaceTransportMarkers().setURI(this.getURI());
      };
      b.setPreviousActorIsPageVoice = function (a) {
        this.__setParamInt("paipv", a ? 1 : 0);
        return this;
      };
      b.getURI = function () {
        this.__validateRequiredParamsExistence();
        var a = {},
          b = "",
          d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
          e = this.$2.split("/"),
          f = !1;
        for (var g = 0; g < e.length; g++) {
          var i = e[g];
          if (i === "") continue;
          var j = d.exec(i);
          if (!j) b += "/" + i;
          else {
            i = j[2] === "?";
            var k = j[4],
              l = this.$3[k];
            l || h(0, 11837, k, this.$2);
            if (i && f) continue;
            if (this.$1[k] == null && i) {
              f = !0;
              continue;
            }
            i = this.$1[k] != null ? this.$1[k] : l.defaultValue;
            i != null || h(0, 907, k);
            l = j[1] ? j[1] : "";
            j = j[5] ? j[5] : "";
            b += "/" + l + i + j;
            a[k] = !0;
          }
        }
        this.$2.slice(-1) === "/" && (b += "/");
        b === "" && (b = "/");
        l = new (c("URI"))(b);
        for (i in this.$1) {
          j = this.$1[i];
          if (!a[i] && j != null) {
            k = this.$3[i];
            l.addQueryData(i, k && k.type === "Exists" ? null : j);
          }
        }
        return l;
      };
      b.getLookasideURI = function () {
        var a = "lookaside.facebook.com";
        c("isInternalFBURI")(c("URI").getRequestURI())
          ? (a = "lookaside.internalfb.com")
          : c("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
        return this.getURI().setDomain(a).setProtocol("https");
      };
      a.create = function (b, c) {
        return function () {
          return new a(b, c);
        };
      };
      return a;
    })();
    a.prototype.getRequest = function (a) {
      return this.getRequest_LEGACY_UNTYPED(a);
    };
    g["default"] = a;
  },
  98
);
__d(
  "XRequest",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    var h = function a(b, c, d) {
      var e;
      switch (b) {
        case "Bool":
          e = (c && c !== "false" && c !== "0") || !1;
          break;
        case "Int":
          e = c.toString();
          /-?\d+/.test(e) || g(0, 11839, c);
          break;
        case "Float":
          e = parseFloat(c, 10);
          isNaN(e) && g(0, 11840, c);
          break;
        case "FBID":
          e = c.toString();
          for (var f = 0; f < e.length; ++f) {
            var h = e.charCodeAt(f);
            (48 <= h && h <= 57) || g(0, 11841, c);
          }
          break;
        case "String":
          e = c.toString();
          break;
        case "Enum":
          d === 0
            ? (e = a("Int", c, null))
            : d === 1
            ? (e = a("String", c, null))
            : d === 2
            ? (e = c)
            : g(0, 5044, d);
          break;
        default:
          if ((h = /^Nullable(\w+)$/.exec(b)))
            c === null ? (e = null) : (e = a(h[1], c, d));
          else if ((f = /^(\w+)Vector$/.exec(b))) {
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === "" ? [] : e.split(",")))
              : (e = c);
            var i = f[1];
            typeof i === "string" || g(0, 5045);
            e = e.map(function (b) {
              return a(i, b, d && d.member);
            });
          } else if ((h = /^(\w+)(Set|Keyset)$/.exec(b)))
            !Array.isArray(c)
              ? ((e = c.toString()), (e = e === "" ? [] : e.split(",")))
              : (e = c),
              (e = e.reduce(function (a, b) {
                a[b] = b;
                return a;
              }, {})),
              (i = h[1]),
              typeof i === "string" || g(0, 5045),
              (e = Object.keys(e).map(function (b) {
                return a(i, e[b], d && d.member);
              }));
          else if ((f = /^(\w+)To(\w+)Map$/.exec(b))) {
            e = {};
            var j = f[1],
              k = f[2];
            (typeof j === "string" && typeof k === "string") || g(0, 5045);
            Object.keys(c).forEach(function (b) {
              e[a(j, b, d && d.key)] = a(k, c[b], d && d.value);
            });
          } else g(0, 11842, b);
      }
      return e;
    };
    a = (function () {
      function a(a, b, c) {
        var d = this;
        this.$1 = b;
        this.$2 = babelHelpers["extends"]({}, c.getQueryData());
        b = a.split("/").filter(function (a) {
          return a;
        });
        a = c
          .getPath()
          .split("/")
          .filter(function (a) {
            return a;
          });
        var e;
        for (var f = 0; f < b.length; ++f) {
          var h = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[f]);
          if (!h) {
            b[f] === a[f] || g(0, 5047, c.getPath());
            continue;
          }
          var i = !!h[1],
            j = !!h[2];
          !j || f === b.length - 1 || g(0, 11843, e);
          e = h[3];
          Object.prototype.hasOwnProperty.call(this.$1, e) || g(0, 11844, e);
          this.$1[e].required ? i && g(0, 5050, e) : i || g(0, 5057, e);
          a[f] && (this.$2[e] = j ? a.slice(f).join("/") : a[f]);
        }
        Object.keys(this.$1).forEach(function (a) {
          !d.$1[a].required ||
            Object.prototype.hasOwnProperty.call(d.$2, a) ||
            g(0, 5051);
        });
      }
      var b = a.prototype;
      b.getExists = function (a) {
        return this.$2[a] !== void 0;
      };
      b.getBool = function (a) {
        return this.$3(a, "Bool");
      };
      b.getInt = function (a) {
        return this.$3(a, "Int");
      };
      b.getFloat = function (a) {
        return this.$3(a, "Float");
      };
      b.getFBID = function (a) {
        return this.$3(a, "FBID");
      };
      b.getString = function (a) {
        return this.$3(a, "String");
      };
      b.getEnum = function (a) {
        return this.$3(a, "Enum");
      };
      b.getOptionalInt = function (a) {
        return this.$4(a, "Int");
      };
      b.getOptionalFloat = function (a) {
        return this.$4(a, "Float");
      };
      b.getOptionalFBID = function (a) {
        return this.$4(a, "FBID");
      };
      b.getOptionalString = function (a) {
        return this.$4(a, "String");
      };
      b.getOptionalEnum = function (a) {
        return this.$4(a, "Enum");
      };
      b.getIntVector = function (a) {
        return this.$3(a, "IntVector");
      };
      b.getFloatVector = function (a) {
        return this.$3(a, "FloatVector");
      };
      b.getFBIDVector = function (a) {
        return this.$3(a, "FBIDVector");
      };
      b.getStringVector = function (a) {
        return this.$3(a, "StringVector");
      };
      b.getEnumVector = function (a) {
        return this.$3(a, "EnumVector");
      };
      b.getOptionalIntVector = function (a) {
        return this.$4(a, "IntVector");
      };
      b.getOptionalFloatVector = function (a) {
        return this.$4(a, "FloatVector");
      };
      b.getOptionalFBIDVector = function (a) {
        return this.$4(a, "FBIDVector");
      };
      b.getOptionalStringVector = function (a) {
        return this.$4(a, "StringVector");
      };
      b.getOptionalEnumVector = function (a) {
        return this.$4(a, "EnumVector");
      };
      b.getIntSet = function (a) {
        return this.$3(a, "IntSet");
      };
      b.getFBIDSet = function (a) {
        return this.$3(a, "FBIDSet");
      };
      b.getFBIDKeyset = function (a) {
        return this.$3(a, "FBIDKeyset");
      };
      b.getStringSet = function (a) {
        return this.$3(a, "StringSet");
      };
      b.getEnumKeyset = function (a) {
        return this.$3(a, "EnumKeyset");
      };
      b.getOptionalIntSet = function (a) {
        return this.$4(a, "IntSet");
      };
      b.getOptionalFBIDSet = function (a) {
        return this.$4(a, "FBIDSet");
      };
      b.getOptionalFBIDKeyset = function (a) {
        return this.$4(a, "FBIDKeyset");
      };
      b.getOptionalStringSet = function (a) {
        return this.$4(a, "StringSet");
      };
      b.getEnumToBoolMap = function (a) {
        return this.$3(a, "EnumToBoolMap");
      };
      b.getEnumToEnumMap = function (a) {
        return this.$3(a, "EnumToEnumMap");
      };
      b.getEnumToFloatMap = function (a) {
        return this.$3(a, "EnumToFloatMap");
      };
      b.getEnumToIntMap = function (a) {
        return this.$3(a, "EnumToIntMap");
      };
      b.getEnumToStringMap = function (a) {
        return this.$3(a, "EnumToStringMap");
      };
      b.getIntToBoolMap = function (a) {
        return this.$3(a, "IntToBoolMap");
      };
      b.getIntToEnumMap = function (a) {
        return this.$3(a, "IntToEnumMap");
      };
      b.getIntToFloatMap = function (a) {
        return this.$3(a, "IntToFloatMap");
      };
      b.getIntToIntMap = function (a) {
        return this.$3(a, "IntToIntMap");
      };
      b.getIntToStringMap = function (a) {
        return this.$3(a, "IntToStringMap");
      };
      b.getStringToBoolMap = function (a) {
        return this.$3(a, "StringToBoolMap");
      };
      b.getStringToEnumMap = function (a) {
        return this.$3(a, "StringToEnumMap");
      };
      b.getStringToFloatMap = function (a) {
        return this.$3(a, "StringToFloatMap");
      };
      b.getStringToIntMap = function (a) {
        return this.$3(a, "StringToIntMap");
      };
      b.getStringToStringMap = function (a) {
        return this.$3(a, "StringToStringMap");
      };
      b.getOptionalEnumToBoolMap = function (a) {
        return this.$4(a, "EnumToBoolMap");
      };
      b.getOptionalEnumToEnumMap = function (a) {
        return this.$4(a, "EnumToEnumMap");
      };
      b.getOptionalEnumToFloatMap = function (a) {
        return this.$4(a, "EnumToFloatMap");
      };
      b.getOptionalEnumToIntMap = function (a) {
        return this.$4(a, "EnumToIntMap");
      };
      b.getOptionalEnumToStringMap = function (a) {
        return this.$4(a, "EnumToStringMap");
      };
      b.getOptionalIntToBoolMap = function (a) {
        return this.$4(a, "IntToBoolMap");
      };
      b.getOptionalIntToEnumMap = function (a) {
        return this.$4(a, "IntToEnumMap");
      };
      b.getOptionalIntToFloatMap = function (a) {
        return this.$4(a, "IntToFloatMap");
      };
      b.getOptionalIntToIntMap = function (a) {
        return this.$4(a, "IntToIntMap");
      };
      b.getOptionalIntToStringMap = function (a) {
        return this.$4(a, "IntToStringMap");
      };
      b.getOptionalStringToBoolMap = function (a) {
        return this.$4(a, "StringToBoolMap");
      };
      b.getOptionalStringToEnumMap = function (a) {
        return this.$4(a, "StringToEnumMap");
      };
      b.getOptionalStringToFloatMap = function (a) {
        return this.$4(a, "StringToFloatMap");
      };
      b.getOptionalStringToIntMap = function (a) {
        return this.$4(a, "StringToIntMap");
      };
      b.getOptionalStringToStringMap = function (a) {
        return this.$4(a, "StringToStringMap");
      };
      b.getEnumToNullableEnumMap = function (a) {
        return this.$3(a, "EnumToNullableEnumMap");
      };
      b.getEnumToNullableFloatMap = function (a) {
        return this.$3(a, "EnumToNullableFloatMap");
      };
      b.getEnumToNullableIntMap = function (a) {
        return this.$3(a, "EnumToNullableIntMap");
      };
      b.getEnumToNullableStringMap = function (a) {
        return this.$3(a, "EnumToNullableStringMap");
      };
      b.getIntToNullableEnumMap = function (a) {
        return this.$3(a, "IntToNullableEnumMap");
      };
      b.getIntToNullableFloatMap = function (a) {
        return this.$3(a, "IntToNullableFloatMap");
      };
      b.getIntToNullableIntMap = function (a) {
        return this.$3(a, "IntToNullableIntMap");
      };
      b.getIntToNullableStringMap = function (a) {
        return this.$3(a, "IntToNullableStringMap");
      };
      b.getStringToNullableEnumMap = function (a) {
        return this.$3(a, "StringToNullableEnumMap");
      };
      b.getStringToNullableFloatMap = function (a) {
        return this.$3(a, "StringToNullableFloatMap");
      };
      b.getStringToNullableIntMap = function (a) {
        return this.$3(a, "StringToNullableIntMap");
      };
      b.getStringToNullableStringMap = function (a) {
        return this.$3(a, "StringToNullableStringMap");
      };
      b.getOptionalEnumToNullableEnumMap = function (a) {
        return this.$4(a, "EnumToNullableEnumMap");
      };
      b.getOptionalEnumToNullableFloatMap = function (a) {
        return this.$4(a, "EnumToNullableFloatMap");
      };
      b.getOptionalEnumToNullableIntMap = function (a) {
        return this.$4(a, "EnumToNullableIntMap");
      };
      b.getOptionalEnumToNullableStringMap = function (a) {
        return this.$4(a, "EnumToNullableStringMap");
      };
      b.getOptionalIntToNullableEnumMap = function (a) {
        return this.$4(a, "IntToNullableEnumMap");
      };
      b.getOptionalIntToNullableFloatMap = function (a) {
        return this.$4(a, "IntToNullableFloatMap");
      };
      b.getOptionalIntToNullableIntMap = function (a) {
        return this.$4(a, "IntToNullableIntMap");
      };
      b.getOptionalIntToNullableStringMap = function (a) {
        return this.$4(a, "IntToNullableStringMap");
      };
      b.getOptionalStringToNullableEnumMap = function (a) {
        return this.$4(a, "StringToNullableEnumMap");
      };
      b.getOptionalStringToNullableFloatMap = function (a) {
        return this.$4(a, "StringToNullableFloatMap");
      };
      b.getOptionalStringToNullableIntMap = function (a) {
        return this.$4(a, "StringToNullableIntMap");
      };
      b.getOptionalStringToNullableStringMap = function (a) {
        return this.$4(a, "StringToNullableStringMap");
      };
      b.$3 = function (a, b) {
        this.$5(a, b);
        var c = this.$1[a];
        if (
          !Object.prototype.hasOwnProperty.call(this.$2, a) &&
          c.defaultValue != null
        ) {
          c.required && g(0, 5052);
          return h(b, c.defaultValue, c.enumType);
        }
        c.required ||
          b === "Bool" ||
          c.defaultValue != null ||
          g(0, 11845, b, a, b, a);
        return h(b, this.$2[a], c.enumType);
      };
      b.$4 = function (a, b) {
        this.$5(a, b);
        var c = this.$1[a];
        c.required && g(0, 11846, b, a, b, a);
        c.defaultValue && g(0, 5052);
        return Object.prototype.hasOwnProperty.call(this.$2, a)
          ? h(b, this.$2[a], c.enumType)
          : null;
      };
      b.$5 = function (a, b) {
        Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 37317, a),
          this.$1[a].type === b || g(0, 11848, a, b, this.$1[a].type);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "XController",
  ["XControllerURIBuilder", "XRequest"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.getURIBuilder = function (a) {
        var b = this,
          d = new (c("XControllerURIBuilder"))(this.$1, this.$2);
        if (a) {
          var e = this.getRequest(a);
          Object.keys(this.$2).forEach(function (a) {
            var c = b.$2[a],
              f = "";
            !c.required &&
              !Object.prototype.hasOwnProperty.call(c, "defaultValue") &&
              (f = "Optional");
            f = "get" + f + c.type;
            f = e[f](a);
            if (
              f == null ||
              (Object.prototype.hasOwnProperty.call(c, "defaultValue") &&
                f === c.defaultValue)
            )
              return;
            c = "set" + c.type;
            d[c](a, f);
          });
        }
        return d;
      };
      b.getRequest = function (a) {
        return new (c("XRequest"))(this.$1, this.$2, a);
      };
      a.create = function (b, c) {
        return new a(b, c);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XHeartbeatController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/nw/", {});
  },
  null
);
__d(
  "requireCond",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      throw new Error("Cannot use raw untransformed requireCond.");
    }
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "clearTimeout",
  ["cr:806696"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:806696");
  },
  98
);
__d(
  "getSameOriginTransport",
  ["ExecutionEnvironment", "err"],
  function (a, b, c, d, e, f, g) {
    function b() {
      if (
        !c("ExecutionEnvironment").canUseDOM &&
        !c("ExecutionEnvironment").isInWorker
      )
        throw c("err")(
          "getSameOriginTransport: %s",
          "Same origin transport unavailable in the server environment."
        );
      try {
        return new a.XMLHttpRequest();
      } catch (a) {
        throw c("err")("getSameOriginTransport: %s", a.message);
      }
    }
    g["default"] = b;
  },
  98
);
__d(
  "killswitch",
  ["KSConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return b("KSConfig").killed.has(a);
    }
    e.exports = a;
  },
  null
);
__d(
  "setTimeout",
  ["cr:807042"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:807042");
  },
  98
);
__d(
  "NetworkHeartbeat",
  [
    "XHeartbeatController",
    "clearTimeout",
    "getSameOriginTransport",
    "killswitch",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("XHeartbeatController").getURIBuilder().getURI().toString(),
      i = 6400,
      j = 100,
      k = null,
      l = 0,
      m = null,
      n = c("killswitch")("DISABLE_HEARTBEAT_POLLING");
    function o(a, b) {
      (m = c("getSameOriginTransport")()),
        m.open("GET", h, !0),
        (m.onload = function () {
          m && m.status === 204 && (n = !0), q(a);
        }),
        (m.onerror = function () {
          r(a, b);
        }),
        (m.ontimeout = function () {
          r(a, b);
        }),
        m.send();
    }
    function p() {
      (m = null), (j = 100), (l = 0), c("clearTimeout")(k);
    }
    function q(a) {
      p(), a();
    }
    function r(a, b) {
      (k = c("setTimeout")(function () {
        s(a, b, void 0, !0);
      }, j)),
        l++,
        j < i && (j = Math.min(j * Math.pow(2, l), i)),
        b();
    }
    function s(a, b, c, d) {
      c === void 0 &&
        (c = function () {
          return !0;
        }),
        d === void 0 && (d = !1),
        n || ((d || (m == null && c())) && o(a, b));
    }
    function a() {
      return m != null;
    }
    g.maybeStartHeartbeat = s;
    g.isHeartbeatPending = a;
  },
  98
);
__d(
  "NetworkStatusImpl",
  ["FBLogger", "NetworkHeartbeat", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = [],
      j = typeof window !== "undefined" ? window : self,
      k = j == null ? void 0 : (h = j.navigator) == null ? void 0 : h.onLine,
      l = 2,
      m = 5e3,
      n = [],
      o = [],
      p = 0,
      q = !0,
      r = !1,
      s = function () {
        w(q, !0);
      },
      t = function () {
        w(r, !0);
      };
    function u() {
      var a = i.slice();
      a.forEach(function (a) {
        a({ online: k });
      });
    }
    function v(a) {
      a = i.indexOf(a);
      a > -1 && i.splice(a, 1);
    }
    function w(a, b) {
      b === void 0 && (b = !1);
      var e = k === a;
      b = !b && a === q && d("NetworkHeartbeat").isHeartbeatPending();
      if (e || b) return;
      k = a;
      c("FBLogger")("NetworkStatus").warn(
        "Network switched to " + (a ? "online" : "offline")
      );
      k || d("NetworkHeartbeat").maybeStartHeartbeat(s, t);
      u();
    }
    function x() {
      var a = c("performanceNow")();
      n = n.filter(function (b) {
        return y(b.startTime, a);
      });
      o = o.filter(function (b) {
        return y(b.startTime, a);
      });
      return o.length / n.length < l;
    }
    var y = function (a, b) {
      return a > b - m;
    };
    function a() {
      return k;
    }
    function b(a) {
      i.push(a);
      var b = !1;
      return {
        remove: function () {
          b || ((b = !0), v(a));
        },
      };
    }
    function e() {
      var a = c("performanceNow")();
      n.push({ startTime: a });
      d("NetworkHeartbeat").maybeStartHeartbeat(s, t, x);
    }
    function f() {
      var a = c("performanceNow")();
      o.push({ startTime: a });
      y(p, a) ||
        ((o = o.filter(function (b) {
          return y(b.startTime, a);
        })),
        (p = a));
    }
    j.addEventListener("online", function () {
      w(q);
    });
    j.addEventListener("offline", function () {
      w(r);
    });
    g.isOnline = a;
    g.onChange = b;
    g.reportError = e;
    g.reportSuccess = f;
  },
  98
);
__d(
  "NetworkStatusSham",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return !0;
    }
    function b(a) {
      return { remove: function () {} };
    }
    function c() {
      return;
    }
    function d() {
      return;
    }
    f.isOnline = a;
    f.onChange = b;
    f.reportError = c;
    f.reportSuccess = d;
  },
  66
);
__d(
  "NetworkStatus",
  ["NetworkStatusImpl", "NetworkStatusSham", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a =
      c("gkx")("708253") && c("gkx")("1263340")
        ? d("NetworkStatusImpl")
        : d("NetworkStatusSham");
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CircularBuffer",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        if (a <= 0)
          throw c("unrecoverableViolation")(
            "Buffer size should be a positive integer",
            "comet_infra"
          );
        this.$1 = a;
        this.$2 = 0;
        this.$3 = [];
        this.$4 = [];
      }
      var b = a.prototype;
      b.write = function (a) {
        var b = this;
        this.$3.length < this.$1
          ? this.$3.push(a)
          : (this.$4.forEach(function (a) {
              return a(b.$3[b.$2]);
            }),
            (this.$3[this.$2] = a),
            this.$2++,
            (this.$2 %= this.$1));
        return this;
      };
      b.onEvict = function (a) {
        this.$4.push(a);
        return this;
      };
      b.read = function () {
        return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
      };
      b.expand = function (a) {
        if (a > this.$1) {
          var b = this.read();
          this.$2 = 0;
          this.$3 = b;
          this.$1 = a;
        }
        return this;
      };
      b.dropFirst = function (a) {
        if (a <= this.$1) {
          var b = this.read();
          this.$2 = 0;
          b.splice(0, a);
          this.$3 = b;
        }
        return this;
      };
      b.clear = function () {
        this.$2 = 0;
        this.$3 = [];
        return this;
      };
      b.currentSize = function () {
        return this.$3.length;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ResourceTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { JS: "js", CSS: "css", XHR: "xhr" };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "TimingAnnotations",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        return this;
      };
      b.addSetElement = function (a, b) {
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        return this;
      };
      b.addVectorElement = function (a, b) {
        return this;
      };
      return a;
    })();
    b = (function () {
      function a() {
        (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
      }
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        this.$2 = this.$2 || new Map();
        this.$2.set(a, b);
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        b.forEach(function (a) {
          return d.add(a);
        });
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addSetElement = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        d.add(b);
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        this.$3 = this.$3 || new Map();
        this.$3.set(a, b);
        return this;
      };
      b.addVectorElement = function (a, b) {
        var c = (this.$3 = this.$3 || new Map()),
          d = this.$3.get(a) || [];
        d.push(b);
        c.set(a, d);
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        this.$4.push(a);
        return this;
      };
      b.prepareToSend = function () {
        var a = this;
        this.$4.forEach(function (b) {
          return b(a);
        });
        this.$4 = [];
        var b = {};
        if (this.$1 != null)
          for (
            var c = this.$1,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var g = f[0];
            f = f[1];
            b[g] = Array.from(f.values());
          }
        g = {};
        if (this.$2 != null)
          for (
            f = this.$2,
              e = Array.isArray(f),
              d = 0,
              f = e
                ? f
                : f[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (e) {
              if (d >= f.length) break;
              c = f[d++];
            } else {
              d = f.next();
              if (d.done) break;
              c = d.value;
            }
            c = c;
            var h = c[0];
            c = c[1];
            g[h] = c;
          }
        h = {};
        if (this.$3 != null)
          for (
            c = this.$3,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var i = f[0];
            f = f[1];
            h[i] = f;
          }
        return { setProps: b, stringProps: g, vectorProps: h };
      };
      a.combine = function (a, b) {
        var c;
        a != null && b != null
          ? ((a.stringProps = babelHelpers["extends"](
              {},
              b.stringProps,
              a.stringProps
            )),
            (a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps)),
            (c = a))
          : a != null
          ? (c = a)
          : b != null && (c = b);
        return c;
      };
      return a;
    })();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    f["default"] = b;
  },
  66
);
__d(
  "ResourceTimingsStore",
  [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = 1e3,
      j = new (b("TimingAnnotations").EmptyTimingAnnotations)(),
      k = {},
      l = {};
    Object.keys(b("ResourceTypes")).forEach(function (a) {
      a = b("ResourceTypes")[a];
      var c = new (b("CircularBuffer"))(i),
        d = new Map();
      c.onEvict(function (a) {
        d["delete"](a);
      });
      k[a] = { idx: 1, entries: c };
      l[a] = d;
    });
    function m(a, c, d) {
      var e;
      switch (a) {
        case "css":
        case "js":
          var f = n.parseMakeHasteURL(c);
          f = f == null ? "unknown_resource" : f[0];
          e = d + "_" + f;
          break;
        case "xhr":
          f = new (g || (g = b("URI")))(c).getQualifiedURI();
          c = f.getDomain() + f.getPath();
          e = d + "_" + c;
          break;
        default:
          a, (e = "never here");
      }
      return e;
    }
    var n = {
      getUID: function (a, b) {
        var c = k[a],
          d = m(a, b, c.idx);
        c.entries.write(d);
        l[a].set(d, { uri: b, uid: d });
        c.idx++;
        return d;
      },
      updateURI: function (a, b, c) {
        a = l[a].get(b);
        a != null && (a.uri = c);
      },
      getMapFor: function (a) {
        return l[a];
      },
      parseMakeHasteURL: function (a) {
        a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
        if (!a) return null;
        a = a[1];
        var b = "",
          c = a.match(/\.(\w+)$/);
        c && (b = c[1]);
        return [a, b];
      },
      measureRequestSent: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (a == null || a.requestSent != null) return;
        else a.requestSent = (h || (h = b("performanceAbsoluteNow")))();
      },
      measureResponseReceived: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (a == null || a.requestSent == null || a.responseReceived != null)
          return;
        else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))();
      },
      annotate: function (a, c) {
        a = l[a];
        a = a.get(c);
        if (!a) return j;
        else {
          c = a.annotations;
          if (c != null) return c;
          else {
            c = new (b("TimingAnnotations"))();
            a.annotations = c;
            return c;
          }
        }
      },
      getAnnotationsFor: function (a, b) {
        a = l[a];
        a = a.get(b);
        if (!a) return null;
        else {
          b = a.annotations;
          return b != null ? b.prepareToSend() : null;
        }
      },
    };
    e.exports = n;
  },
  null
);
__d(
  "TimeSlice",
  ["cr:1126"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:1126");
  },
  98
);
__d(
  "clearInterval",
  ["cr:1003267"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:1003267");
  },
  98
);
__d(
  "isEmpty",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === "object") {
        if (a) {
          !i(a) || a.size === void 0 || h(0, 1445);
          for (var b in a) return !1;
        }
        return !0;
      } else return !a;
    }
    function i(a) {
      return typeof Symbol === "undefined"
        ? !1
        : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] !=
            null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "nullthrows",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b === void 0 && (b = "Got unexpected null or undefined");
      if (a != null) return a;
      a = new Error(b);
      a.framesToPop = 1;
      throw a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "setIntervalAcrossTransitions",
  ["cr:896462"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:896462");
  },
  98
);
__d(
  "CSSLoader",
  [
    "CSSLoaderConfig",
    "NetworkStatus",
    "ResourceTimingsStore",
    "TimeSlice",
    "clearInterval",
    "ifRequired",
    "isEmpty",
    "nullthrows",
    "setIntervalAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = 20,
      i = b("CSSLoaderConfig").timeout,
      j = b("CSSLoaderConfig").loadEventSupported,
      k,
      l = [],
      m,
      n = new Map();
    function o(a) {
      if (k) return;
      k = !0;
      var b = document.createElement("link");
      b.onload = function () {
        (j = !0), b.parentNode && b.parentNode.removeChild(b);
      };
      b.rel = "stylesheet";
      b.href = "data:text/css;base64,";
      a.appendChild(b);
    }
    function p() {
      var a = [],
        c = [];
      if (Date.now() >= m) {
        for (
          var d = n.values(),
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h;
          if (e) {
            if (f >= d.length) break;
            h = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            h = f.value;
          }
          h = h;
          c.push(h.signal);
          a.push(h.error);
        }
        n.clear();
      } else
        for (
          h = n,
            f = Array.isArray(h),
            e = 0,
            h = f
              ? h
              : h[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (e >= h.length) break;
            d = h[e++];
          } else {
            e = h.next();
            if (e.done) break;
            d = e.value;
          }
          d = d;
          var j = d[0];
          d = d[1];
          var k = d.signal,
            l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
          l &&
            parseInt(l.height, 10) > 1 &&
            (a.push(d.load), c.push(k), n["delete"](j));
        }
      for (l = 0; l < c.length; l++) {
        d = b("nullthrows")(c[l].parentNode);
        d.removeChild(c[l]);
      }
      if (!(g || (g = b("isEmpty")))(a)) {
        for (l = 0; l < a.length; l++) a[l]();
        m = Date.now() + i;
      }
      return n.size === 0;
    }
    function q(a, c, d, e) {
      var f = document.createElement("meta");
      f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
      c.appendChild(f);
      c = n.size !== 0;
      m = Date.now() + i;
      n.set(a, { signal: f, load: d, error: e });
      if (!c)
        var g = b("setIntervalAcrossTransitions")(function () {
          p() && b("clearInterval")(g);
        }, h);
    }
    function r(a, c, d, e, f, g) {
      var h = b("ResourceTimingsStore").getUID("css", c);
      b("ResourceTimingsStore")
        .annotate("css", h)
        .addStringAnnotation("name", a)
        .addStringAnnotation("source", c)
        .addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
      b("ifRequired")("TimeSliceInteraction", function (b) {
        b.informGlobally("CSSLoader.loadStyleSheet")
          .addStringAnnotation("source", c)
          .addStringAnnotation("name", a);
      });
      b("ResourceTimingsStore").measureRequestSent("css", h);
      var i = function () {
          b("ResourceTimingsStore").measureResponseReceived("css", h), e();
        },
        k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
      !g
        ? q(a, d, i, f)
        : j !== !0
        ? (q(a, d, i, f), j === void 0 && o(d))
        : ((g.onload = k.bind(void 0, function () {
            (g.onload = g.onerror = null), i();
          })),
          (g.onerror = k.bind(void 0, function () {
            (g.onload = g.onerror = null), f();
          })));
    }
    a = {
      loadStyleSheet: function (a, c, d, e, f, g) {
        var h = document;
        if ("createStyleSheet" in h) {
          var i;
          for (var j = 0; j < l.length; j++)
            if (l[j].imports.length < 31) {
              i = j;
              break;
            }
          if (i === void 0) {
            try {
              l.push(h.createStyleSheet());
            } catch (a) {
              b("NetworkStatus").reportError();
              g();
              return;
            }
            i = l.length - 1;
          }
          b("NetworkStatus").reportSuccess();
          l[i].addImport(c);
          r(a, c, d, f, g, null);
          return;
        }
        j = h.createElement("link");
        j.rel = "stylesheet";
        j.type = "text/css";
        j.href = c;
        e && (j.crossOrigin = "anonymous");
        r(a, c, d, f, g, j);
        d.appendChild(j);
      },
      setupEventListeners: function (a, b, c, d, e, f) {
        r(a, b, c, d, e, f);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ClientConsistencyEventEmitter",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("BaseEventEmitter"))();
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "requireWeak",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      d && d.call(null, [a], b);
    }
    f["default"] = a;
  },
  66
);
__d(
  "ClientConsistency",
  ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("SiteData").client_revision,
      h = !1,
      i = null,
      j = {},
      k = new Set(),
      l = new Set(),
      m = function (a) {
        j = {};
        var c = Object.keys(a).sort().reverse(),
          d = function () {
            if (f) {
              if (g >= e.length) return "break";
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) return "break";
              h = g.value;
            }
            var c = h,
              d = Number(c);
            c = (c = a[d]) != null ? c : [];
            if (c.length === 0) {
              n(d);
              return "break";
            }
            c.forEach(function (a) {
              var c;
              j[a] = Math.max((c = j[a]) != null ? c : 0, d);
              if (l.has(a)) return;
              l.add(a);
              b("requireWeak").call(null, a, function () {
                if (!j[a]) return;
                n(j[a]);
              });
            });
          };
        for (
          var e = c,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h;
          c = d();
          if (c === "break") break;
        }
      },
      n = function (a) {
        a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh"),
          a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh");
      },
      o = function (a) {
        var b = a.actions;
        a = a.rev;
        if (a === g) return;
        i = b;
        b != null && m(b);
      };
    a = {
      init: function () {
        if (h) return;
        b("ClientConsistencyEventEmitter").addListener(
          "newEntry",
          function (a) {
            o(a);
          }
        );
        h = !0;
      },
      addAdditionalRevision: function (a) {
        a !== g &&
          (k.add(a), b("ClientConsistencyEventEmitter").emit("newRevision", a));
      },
      getAdditionalRevisions: function () {
        return k;
      },
      hasPendingClientActions: function () {
        return i != null && Object.keys(i).length > 0;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ErrorPubSub",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub;
  },
  98
);
__d(
  "JSResourceEvents",
  ["performanceAbsoluteNow"],
  function (a, b, c, d, e, f, g) {
    var h = 50,
      i = new Map();
    function a(a, b, d) {
      a = a;
      b = (b = b) != null ? b : "";
      var e = i.get(a);
      e || i.set(a, (e = new Map()));
      a = e.get(b);
      a || e.set(b, (a = new Map()));
      e = a.get(d);
      e || a.set(d, (e = [0, []]));
      e[1][e[0]++ % h] = c("performanceAbsoluteNow")();
    }
    function j(a, b, c) {
      var d = i.get(a);
      if (!d) return [];
      var e = [];
      for (
        var d = d,
          g = Array.isArray(d),
          h = 0,
          d = g
            ? d
            : d[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var j;
        if (g) {
          if (h >= d.length) break;
          j = d[h++];
        } else {
          h = d.next();
          if (h.done) break;
          j = h.value;
        }
        j = j;
        var k = j[0];
        j = j[1];
        for (
          var j = j,
            l = Array.isArray(j),
            m = 0,
            j = l
              ? j
              : j[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var n;
          if (l) {
            if (m >= j.length) break;
            n = j[m++];
          } else {
            m = j.next();
            if (m.done) break;
            n = m.value;
          }
          n = n;
          var o = n[0];
          n = n[1];
          for (
            var n = n[1],
              p = Array.isArray(n),
              q = 0,
              n = p
                ? n
                : n[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var r;
            if (p) {
              if (q >= n.length) break;
              r = n[q++];
            } else {
              q = n.next();
              if (q.done) break;
              r = q.value;
            }
            r = r;
            r >= b &&
              r <= c &&
              e.push({ module: a, ref: k || null, type: o, time: r });
          }
        }
      }
      return e.sort(function (a, b) {
        return a.time - b.time;
      });
    }
    function b(a, b) {
      var c = new Map();
      for (
        var d = i.keys(),
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = j(g, a, b);
        h.length && c.set(g, h);
      }
      return c;
    }
    g.notify = a;
    g.getEvents = j;
    g.getAllModuleEvents = b;
  },
  98
);
__d(
  "Promise",
  ["cr:3769"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b("cr:3769")) != null ? c : a.Promise;
    g.allSettled ||
      (g.allSettled = function (a) {
        var b;
        if (
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in a
        )
          b = Array.from(a);
        else
          return g.reject(
            new TypeError("Promise.allSettled must be passed an iterable.")
          );
        var c = Array(b.length);
        a = function (a, d) {
          var e = b[a];
          d =
            typeof e === "object" && e !== null && typeof e.then === "function";
          c[a] = d
            ? new g(function (a, b) {
                e.then(
                  function (b) {
                    a({ status: "fulfilled", value: b });
                  },
                  function (b) {
                    a({ status: "rejected", reason: b });
                  }
                );
              })
            : g.resolve({ status: "fulfilled", value: e });
        };
        for (var d = 0, e = b.length; d < e; ++d) a(d, e);
        return g.all(c);
      });
    g.prototype["finally"] ||
      (g.prototype["finally"] = function (a) {
        return this.then(
          function (b) {
            return g.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return g.resolve(a()).then(function () {
              throw b;
            });
          }
        );
      });
    e.exports = g;
  },
  null
);
__d(
  "PromiseAnnotate",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a.displayName = b;
      return a;
    }
    function b(a) {
      a = a.displayName;
      if (typeof a === "string") return a;
      else return null;
    }
    f.setDisplayName = a;
    f.getDisplayName = b;
  },
  66
);
__d(
  "ifRequireable",
  ["ifRequired"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      return c("ifRequired").call(null, a, b, d);
    }
    g["default"] = a;
  },
  98
);
__d(
  "JSResourceReferenceImpl",
  [
    "JSResourceEvents",
    "Promise",
    "PromiseAnnotate",
    "ifRequireable",
    "ifRequired",
  ],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return a;
      },
      i = [],
      j = null;
    function k(a) {
      j ? a(j) : i.push(a);
    }
    var l = "JSResource: unknown caller";
    a = (function () {
      a.setBootloader = function (a) {
        j = a;
        for (a = 0; a < i.length; a++) {
          var b = i[a];
          b(j);
        }
        i = [];
      };
      function a(a) {
        this.$1 = a;
      }
      var e = a.prototype;
      e.getModuleId = function () {
        var a = this.$1;
        return a;
      };
      e.getModuleIdAsRef = function () {
        return this.$1;
      };
      e.load = function () {
        var a = this,
          c = this.$2;
        d("JSResourceEvents").notify(this.$1, c, "LOADED");
        var e = new (b("Promise"))(function (b) {
          k(function (e) {
            return e.loadModules(
              [a.getModuleIdAsRef()],
              function (e) {
                d("JSResourceEvents").notify(a.$1, c, "PROMISE_RESOLVED"), b(e);
              },
              (e = a.$2) != null ? e : l
            );
          });
        });
        d("PromiseAnnotate").setDisplayName(
          e,
          "Bootload(" + this.getModuleId() + ")"
        );
        return e;
      };
      e.preload = function () {
        var a,
          b = this,
          c = (a = this.$2) != null ? a : l;
        k(function (a) {
          return a.loadModules(
            [b.getModuleIdAsRef()],
            function () {},
            "preload: " + c
          );
        });
      };
      e.equals = function (a) {
        return this === a || this.$1 == a.$1;
      };
      e.getModuleIfRequireable = function () {
        d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
        return c("ifRequireable").call(null, this.$1, h);
      };
      e.getModuleIfRequired = function () {
        d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
        return c("ifRequired").call(null, this.$1, h);
      };
      e.__setRef = function (a) {
        this.$2 = a;
        d("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
        return this;
      };
      a.loadAll = function (a, b) {
        var c = {},
          e = !1;
        for (
          var f = a,
            g = Array.isArray(f),
            h = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= f.length) break;
            i = f[h++];
          } else {
            h = f.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = i.$2;
          j && ((e = !0), (c[j] = !0));
          d("JSResourceEvents").notify(i.$1, j, "LOADED");
        }
        k(function (d) {
          return d.loadModules(
            a.map(function (a) {
              return a.getModuleId();
            }),
            b,
            e ? Object.keys(c).join(":") : "JSResource: unknown caller"
          );
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MakeHasteTranslationsMap",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    function a(a) {
      Object.assign(i, a);
    }
    function b(a) {
      a in i || h(0, 62571, a);
      return i[a];
    }
    g.setBatch = a;
    g.get = b;
  },
  98
);
__d(
  "MakeHasteTranslations",
  [
    "BootloaderConfig",
    "BootloaderRetryTracker",
    "ExecutionEnvironment",
    "FBLogger",
    "MakeHasteTranslationsMap",
    "Promise",
    "TimeSlice",
    "err",
    "fb-error",
    "getSameOriginTransport",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("BootloaderRetryTracker"))({
      retries:
        (f = c("BootloaderConfig").translationRetries) != null
          ? f
          : c("BootloaderConfig").jsRetries,
      abortNum:
        (f = c("BootloaderConfig").translationRetryAbortNum) != null
          ? f
          : c("BootloaderConfig").jsRetryAbortNum,
      abortTime:
        (f = c("BootloaderConfig").translationRetryAbortTime) != null
          ? f
          : c("BootloaderConfig").jsRetryAbortTime,
      abortCallback: function () {
        c("FBLogger")("binary_transparency").warn("Translations retry abort");
      },
    });
    function i() {
      a.__translationFetchTracker || (a.__translationFetchTracker = {});
      return a.__translationFetchTracker;
    }
    function j(a) {
      a = JSON.parse(a);
      if (
        a != null &&
        typeof a === "object" &&
        typeof a.translations === "object" &&
        Array.isArray(a.virtual_modules)
      )
        return a;
      throw c("err")("Invalid response shape");
    }
    function k(a) {
      return new (b("Promise"))(function (b, d) {
        var e = c("TimeSlice").getGuardedContinuation(
            "MakeHasteTranslationsFetcher genSendRequest"
          ),
          f = c("getSameOriginTransport")();
        f.open("GET", a, !0);
        f.onreadystatechange = function (g) {
          if (f.readyState !== 4) return;
          e(function () {
            c("fb-error").ErrorXFBDebug.addFromXHR(f);
            try {
              if (f.status !== 200) throw c("err")("Received non-200 response");
              b(j(f.responseText));
            } catch (e) {
              h.maybeScheduleRetry(
                a,
                function () {
                  return b(k(a));
                },
                function () {
                  return d(
                    c("err")(
                      "Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s",
                      e.toString(),
                      f.status,
                      f.responseText.length > 300
                        ? f.responseText.slice(0, 300) + "..."
                        : f.responseText
                    )
                  );
                }
              );
            }
          });
        };
        f.send();
      });
    }
    var l = "data:application/json;base64";
    function m(a) {
      if (!a.includes(l)) throw c("err")("Invalid data uri mime type");
      a = a.split(",");
      a[0];
      a = a[1];
      if (a == null) throw c("err")("Data uri contains no contents");
      return j(atob(a));
    }
    function n(e, f) {
      var g = i();
      if (
        !c("ExecutionEnvironment").canUseDOM ||
        g[e] === "fetching" ||
        g[e] === "fetched"
      )
        return;
      b("Promise")
        .resolve()
        .then(function () {
          g[e] = "fetching";
          return f.includes(l) ? m(f) : k(f);
        })
        .then(function (b) {
          d("MakeHasteTranslationsMap").setBatch(b.translations),
            b.virtual_modules.forEach(function (b) {
              return a.define(b, {});
            }),
            (g[e] = "fetched");
        })
        ["catch"](function (a) {
          (g[e] = "failed"),
            c("FBLogger")("binary_transparency", "translation_download_error")
              .catching(a)
              .warn(
                "Unable to download and process translation map. Url: %s",
                f
              );
        });
    }
    function e(a) {
      a = Object.entries(a);
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0];
        c = c[1];
        n(d, c);
      }
    }
    g.genFetchAndProcessTranslations = n;
    g.fetchTranslationsForEarlyFlush = e;
  },
  98
);
__d(
  "$InternalEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
      h = typeof WeakMap === "function" ? new WeakMap() : new Map();
    function i(a) {
      var b = h.get(a);
      if (b !== void 0) return b;
      var c = new Map();
      Object.getOwnPropertyNames(a).forEach(function (b) {
        c.set(a[b], b);
      });
      try {
        h.set(a, c);
      } catch (a) {}
      return c;
    }
    var j = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (a) {
            return i(this).has(a);
          },
        },
        cast: {
          value: function (a) {
            return this.isValid(a) ? a : void 0;
          },
        },
        members: {
          value: function () {
            return i(this).keys();
          },
        },
        getName: {
          value: function (a) {
            return i(this).get(a);
          },
        },
      })
    );
    function a(a) {
      var b = Object.create(j);
      for (var c in a)
        g.call(a, c) && Object.defineProperty(b, c, { value: a[c] });
      return Object.freeze(b);
    }
    var k = Object.freeze(
      Object.defineProperties(Object.create(null), {
        isValid: {
          value: function (a) {
            return typeof a === "string" ? g.call(this, a) : !1;
          },
        },
        cast: { value: j.cast },
        members: {
          value: function () {
            return Object.getOwnPropertyNames(this).values();
          },
        },
        getName: {
          value: function (a) {
            return a;
          },
        },
      })
    );
    a.Mirrored = function (a) {
      var b = Object.create(k);
      for (var c = 0, d = a.length; c < d; ++c)
        Object.defineProperty(b, a[c], { value: a[c] });
      return Object.freeze(b);
    };
    Object.freeze(a.Mirrored);
    e.exports = Object.freeze(a);
  },
  null
);
__d(
  "RequireDeferredFactoryEvent",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({ SUPPORT_DATA: "sd", CSS: "css" });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "getErrorSafe",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe;
  },
  98
);
__d(
  "promiseDone",
  ["ErrorPubSub", "emptyFunction", "getErrorSafe"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      var e = arguments.length > 1 ? a.then(b, d) : a;
      e.then(c("emptyFunction"), function (a) {
        a = c("getErrorSafe")(a);
        a.loggingSource = "PROMISE_DONE";
        c("ErrorPubSub").reportError(a);
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "RequireDeferredReference",
  [
    "invariant",
    "CallbackDependencyManager",
    "Promise",
    "RequireDeferredFactoryEvent",
    "ifRequireable",
    "ifRequired",
    "performanceNow",
    "promiseDone",
    "requireWeak",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = 1;
    d = 2;
    e = 16;
    var i = a | d | e,
      j = null;
    function k() {
      j == null && (j = new (c("CallbackDependencyManager"))());
      return j;
    }
    function l(a, b) {
      return a + ":" + b;
    }
    var m = new Set();
    f = (function () {
      function a(a) {
        this.$1 = a;
      }
      var d = a.prototype;
      d.getModuleId = function () {
        var a = this.$1;
        return a;
      };
      d.getModuleIdAsRef = function () {
        return this.$1;
      };
      d.preload = function () {};
      d.getModuleIfRequired = function () {
        return c("ifRequired").call(null, this.$1, function (a) {
          return a;
        });
      };
      d.getModuleIfRequireable = function () {
        return c("ifRequireable").call(null, this.$1, function (a) {
          return a;
        });
      };
      d.$2 = function (a) {
        var b = this,
          d = c("ifRequireable")("InteractionTracingMetrics", function (a) {
            return a
              .currentInteractionLogger()
              .addRequireDeferred(b.getModuleId(), c("performanceNow")());
          }),
          e = !1,
          f = function (b, f) {
            d == null ? void 0 : d(c("performanceNow")(), f), e || a(b);
          };
        c("ifRequireable").call(
          null,
          this.$1,
          function (a) {
            return f(a, !0);
          },
          function () {
            c("requireWeak").call(null, b.$1, function (a) {
              return f(a, !1);
            });
          }
        );
        return {
          remove: function () {
            e = !0;
          },
        };
      };
      d.load = function () {
        var a = this;
        return new (b("Promise"))(function (b) {
          return a.$2(b);
        });
      };
      d.__setRef = function (a) {
        return this;
      };
      d.onReadyImmediately = function (a) {
        return this.$2(a);
      };
      d.onReady = function (a) {
        var d = function () {
            return h(
              !1,
              "Unreachable because Promise constructor is synchronous"
            );
          },
          e = new (b("Promise"))(function (a) {
            return (d = a);
          }),
          f = this.$2(d);
        c("promiseDone")(e, a);
        return f;
      };
      d.loadImmediately = function (a) {
        return this.$2(a);
      };
      a.getRDModuleName_DO_NOT_USE = function (a) {
        return "rd:" + a;
      };
      a.unblock = function (d, e) {
        var f = k(),
          g = function () {
            var g = d[h];
            m.has(g) ||
              (m.add(g),
              f.registerCallback(
                function () {
                  define(
                    a.getRDModuleName_DO_NOT_USE(g),
                    [g],
                    function () {
                      b.call(null, g);
                    },
                    i
                  );
                },
                Array.from(
                  c("RequireDeferredFactoryEvent").members(),
                  function (a) {
                    return l(g, a);
                  }
                )
              ));
            f.satisfyPersistentDependency(l(g, e));
          };
        for (var h = 0; h < d.length; h++) g();
      };
      return a;
    })();
    g["default"] = f;
  },
  98
);
__d(
  "ResourceHasher",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0;
    function a(a) {
      return "async:" + a;
    }
    function b() {
      return "ejs:" + i++;
    }
    function c(a) {
      typeof a === "string" || h(0, 19551, a);
      return a;
    }
    g.getAsyncHash = a;
    g.createExternalJSHash = b;
    g.getValidResourceHash = c;
  },
  98
);
__d(
  "TrustedTypesPolicyName",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      DEFAULT: "default",
      NOOP_DO_NOT_USE: "noop-do-not-use",
      UNSAFE_FUNCTION_DO_NOT_USE: "unsafe-function-do-not-use",
      DDS_INLINE_STYLE: "dds-inline-style",
      GHL_PLUS_HTML: "ghl-plus-html",
      LINK_TAG_HTML: "link-tag-html",
      BOOTLOADER_DATA_URI: "bootloader-data-uri",
      FB_URI_SCRIPT_URL: "fb-uri-script-urls",
      RL_TEALIUM_CDN_URI: "rl-tealium-cdn-uri",
      SAME_ORIGIN_SCRIPT_URL: "same-origin-script-urls",
      WEB_WORKER_URL: "web-worker-url",
      YOUTUBE_IFRAME_URL: "youtube-iframe-uri",
      IORG_WEB_WORKER_POLICY: "iorg-web-worker-policy",
      BIG_PIPE_MARKUP: "big-pipe-markup",
      GOOGLE_ANALYTICS_URL: "google-analytics-url",
      FBQ_SCRIPT_URL: "fbq-script-url",
      DOM_IE_FIX: "dom-ie-fix",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "TrustedTypesUtils",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    var h = typeof window !== "undefined";
    e = function (a) {
      return a;
    };
    function a(a) {
      c("FBLogger")("saf_web").info(
        "[Trusted-Types][%s]: %s",
        h && typeof window.origin !== "undefined" ? window.origin : "undefined",
        a
      );
    }
    function i(a) {
      c("FBLogger")("saf_web").warn(
        "[Trusted-Types][%s]: %s",
        h && typeof window.origin !== "undefined" ? window.origin : "undefined",
        a
      );
    }
    function b(a) {
      c("FBLogger")("saf_web").mustfix(
        "[Trusted-Types][%s]: %s",
        h && typeof window.origin !== "undefined" ? window.origin : "undefined",
        a
      );
    }
    function d(a, b) {
      i(
        "String '" +
          a.toString().slice(0, 15) +
          "' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. " +
          ("Returned string is: '" +
            b.toString().slice(0, 15) +
            "' If this is breaking your feature, post in ") +
          "Security Infra group."
      );
    }
    g.isBrowser = h;
    g.noop = e;
    g.logInfo = a;
    g.logWarning = i;
    g.logError = b;
    g.logDefaultPolicySanitization = d;
  },
  98
);
__d(
  "TrustedTypes",
  ["Env", "TrustedTypesUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return (
        d("TrustedTypesUtils").isBrowser &&
        typeof window.trustedTypes !== "undefined"
      );
    }
    var h = a() ? window.trustedTypes : null,
      i = new Map(),
      j = {
        createHTML: d("TrustedTypesUtils").noop,
        createScriptURL: d("TrustedTypesUtils").noop,
        createScript: d("TrustedTypesUtils").noop,
      };
    function k(a, b) {
      return function (e) {
        for (
          var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), h = 1;
          h < f;
          h++
        )
          g[h - 1] = arguments[h];
        if (c("Env").isTrustedTypesReportOnly)
          try {
            return b.apply(void 0, [e].concat(g));
          } catch (b) {
            d("TrustedTypesUtils").logError(
              "Exception in policy " +
                a +
                ": " +
                b.message +
                ", returning original string."
            );
            return a === "default" ? !1 : e;
          }
        return b.apply(void 0, [e].concat(g));
      };
    }
    function l(a, b) {
      if (h == null || !c("Env").useTrustedTypes) return j;
      var e = i.get(a);
      if (e != null) {
        d("TrustedTypesUtils").logWarning(
          "A policy with name " +
            a +
            " already exists, returning existing policy."
        );
        return e;
      }
      try {
        e = h.createPolicy(a, b);
        b = {
          createHTML: k(a, e.createHTML.bind(e)),
          createScriptURL: k(a, e.createScriptURL.bind(e)),
          createScript: k(a, e.createScript.bind(e)),
        };
        i.set(a, b);
        return b;
      } catch (a) {
        d("TrustedTypesUtils").logError(
          "Error creating Trusted Types policy: " + a
        );
      }
      return j;
    }
    function b() {
      return i.get("default");
    }
    function e(a) {
      return (a = h == null ? void 0 : h.isHTML(a)) != null ? a : !1;
    }
    function f(a) {
      return (a = h == null ? void 0 : h.isScriptURL(a)) != null ? a : !1;
    }
    function m(a) {
      return (a = h == null ? void 0 : h.isScript(a)) != null ? a : !1;
    }
    function n(a) {
      if (h == null || !c("Env").useTrustedTypes) return;
      if (!c("Env").enableDefaultTrustedTypesPolicy) return;
      l("default", {
        createHTML: a.createHTML,
        createScriptURL: a.createScriptURL,
        createScript: a.createScript,
      });
    }
    a = {
      isSupportedNatively: a,
      isHTML: e,
      isScript: m,
      isScriptURL: f,
      createPolicy: l,
      getDefaultPolicy: b,
      createDefaultPolicy: n,
    };
    g["default"] = a;
  },
  98
);
__d(
  "TrustedTypesBootloaderDataURIScriptURLPolicy",
  ["TrustedTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      createScriptURL: function (a) {
        return a;
      },
    };
    b = c("TrustedTypes").createPolicy("bootloader-data-uri", a);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "isExternalFBURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)externalfb\\.com$", "i");
    function a(a) {
      return g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "isFacebookDotNetURI",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
      var b = Number(a.getPort());
      if (!!b && b !== 80 && b !== 443) return !1;
      return a.isSubdomainOfDomain("facebook.net") ? !0 : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "TrustedTypesFacebookURIScriptURLPolicy",
  [
    "TrustedTypes",
    "URI",
    "err",
    "isCdnURI",
    "isExternalFBURI",
    "isFacebookDotNetURI",
    "isFacebookURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      createScriptURL: function (a) {
        var b = c("URI").tryParseURI(a);
        if (
          b != null &&
          (c("isFacebookURI")(b) ||
            c("isCdnURI")(b) ||
            c("isFacebookDotNetURI")(b) ||
            c("isExternalFBURI")(b))
        )
          return a;
        throw c("err")(
          "Violated policy TrustedTypesFacebookURIScriptURLPolicy: " +
            a +
            " is not a FB URI."
        );
      },
    };
    b = c("TrustedTypes").createPolicy("fb-uri-script-urls", a);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "setTimeoutAcrossTransitions",
  ["cr:986633"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:986633");
  },
  98
);
__d(
  "Bootloader",
  [
    "invariant",
    "BootloaderConfig",
    "BootloaderEndpoint",
    "BootloaderEvents",
    "BootloaderEventsManager",
    "BootloaderRetryTracker",
    "CSRBitMap",
    "CSRIndexUtil",
    "CSSLoader",
    "CSSLoaderConfig",
    "ClientConsistency",
    "ErrorPubSub",
    "ExecutionEnvironment",
    "FBLogger",
    "JSResourceReferenceImpl",
    "MakeHasteTranslations",
    "NetworkStatus",
    "RequireDeferredReference",
    "ResourceHasher",
    "ResourceTimingsStore",
    "SiteData",
    "TimeSlice",
    "TrustedTypesBootloaderDataURIScriptURLPolicy",
    "TrustedTypesFacebookURIScriptURLPolicy",
    "cr:696703",
    "err",
    "fb-error",
    "ifRequireable",
    "nullthrows",
    "performanceAbsoluteNow",
    "performanceNow",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = function () {},
      j = new Set(),
      k = !!c("BootloaderConfig").deferBootloads;
    k &&
      !a.__comet_ssr_is_server_env_DO_NOT_USE &&
      c("setTimeoutAcrossTransitions")(function () {
        Z.undeferBootloads(!0);
      }, 15e3);
    var l = [],
      m = new Map(),
      n = new Map(),
      o = new Map(),
      p = new Map(),
      q = new Map(),
      r = null,
      s = new Map(),
      t = new Map(),
      u = new Map(),
      v = new Map(),
      w = new Set(),
      x = !1,
      y = new Set(),
      z = !1,
      A = new (c("BootloaderEventsManager"))(),
      B = new (c("BootloaderRetryTracker"))({
        retries: c("BootloaderConfig").jsRetries,
        abortNum: c("BootloaderConfig").jsRetryAbortNum,
        abortTime: c("BootloaderConfig").jsRetryAbortTime,
        abortCallback: function () {
          c("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
        },
      });
    c("ErrorPubSub").unshiftListener(function (a) {
      var b = [];
      for (
        var c = n,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f[1];
        if (o.has(g)) continue;
        f = F(g);
        if (f.type === "csr" || f.type === "async") continue;
        b.push(f.src);
      }
      a.loadingUrls = b;
    });
    function C(a) {
      if (k || !z) return !1;
      for (var b = 0; b < a.length; b++) {
        var c,
          d = a[b];
        d = q.get(d);
        if (!d) return !1;
        d = [
          d.r,
          ((c = d.rdfds) == null ? void 0 : c.r) || [],
          ((c = d.rds) == null ? void 0 : c.r) || [],
        ];
        for (c = 0; c < d.length; c++) {
          var e = d[c];
          for (
            var e = e,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            if (!s.has(h)) return !1;
          }
        }
      }
      return !0;
    }
    function D(a) {
      var b = q.get(a);
      if (!b)
        throw c("fb-error").TAAL.blameToPreviousFile(
          c("err")("Bootloader: %s is not in the component map", a)
        );
      return b;
    }
    function E(a) {
      var b = D(a);
      b.be && (delete b.be, Z.done(d("ResourceHasher").getAsyncHash(a)));
    }
    function F(a) {
      var b = s.get(a);
      if (!b)
        throw c("fb-error").TAAL.blameToPreviousFile(
          c("err")("No resource entry for hash: %s", a)
        );
      return b;
    }
    function G(a, b) {
      var c = d("ResourceHasher").getAsyncHash(a);
      if (!s.has(c)) s.set(c, { type: "async", module: a, blocking: !!b });
      else {
        a = F(c);
        a.type === "async" || h(0, 21557);
        a.blocking && !b && (a.blocking = !1);
      }
      return c;
    }
    function H() {
      r ||
        (r =
          document.head ||
          document.getElementsByTagName("head")[0] ||
          document.body);
      return r;
    }
    function I(a) {
      if (c("ExecutionEnvironment").isInWorker) {
        a(null);
        return;
      }
      var b = document.createDocumentFragment();
      a(b);
      H().appendChild(b);
    }
    function J(a, b) {
      if (c("ExecutionEnvironment").isInWorker) return;
      b = c("nullthrows")(b);
      var d = void 0;
      switch (a.type) {
        case "async":
          return;
        case "css":
          d = "style";
          break;
        case "js":
          d = "script";
          break;
        default:
          (d = a.type), h(0, 3721);
      }
      if (a.d === 1) return;
      var e = document.createElement("link");
      e.href = a.src;
      e.rel = "preload";
      e.as = d;
      a.nc || (e.crossOrigin = "anonymous");
      b.appendChild(e);
    }
    function K(a, b, d) {
      var e = c("performanceAbsoluteNow")(),
        f = b.src,
        g = c("ResourceTimingsStore").getUID("js", f);
      c("ResourceTimingsStore")
        .annotate("js", g)
        .addStringAnnotation("name", a)
        .addStringAnnotation("source", f);
      c("ResourceTimingsStore").measureRequestSent("js", g);
      c("nullthrows")(self.bl_worker_import_wrapper)(f)
        .then(function () {
          var b = B.getNumRetriesForSource(f);
          b > 0 &&
            c("FBLogger")("bootloader").info(
              "JS retry success [%s] at %s | time: %s | retries: %s",
              a,
              f,
              c("performanceAbsoluteNow")() - e,
              b
            );
          c("ResourceTimingsStore").measureResponseReceived("js", g);
          d();
        })
        ["catch"](function (h) {
          c("ResourceTimingsStore").measureResponseReceived("js", g);
          var i = c("performanceAbsoluteNow")();
          B.maybeScheduleRetry(
            f,
            function () {
              K(a, b, d);
            },
            function () {
              p.set(a, i),
                c("FBLogger")("bootloader")
                  .catching(h)
                  .warn(
                    "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                    a,
                    f,
                    i - e,
                    B.getNumRetriesForSource(f),
                    n.size - o.size
                  ),
                c("NetworkStatus").reportError(),
                d();
            }
          );
        });
    }
    function L(a, b, d, e) {
      if (c("ExecutionEnvironment").isInWorker) {
        K(a, b, d);
        return;
      }
      e = c("nullthrows")(e);
      var f = document.createElement("script");
      b.d
        ? (f.src = c(
            "TrustedTypesBootloaderDataURIScriptURLPolicy"
          ).createScriptURL(b.src))
        : (f.src = c("TrustedTypesFacebookURIScriptURLPolicy").createScriptURL(
            b.src
          ));
      f.async = !0;
      b.nc || (f.crossOrigin = "anonymous");
      b.m != null && (f.dataset.btmanifest = b.m);
      b.tsrc != null && (f.dataset.tsrc = b.tsrc);
      f.dataset.bootloaderHashClient = a;
      M(f, a, b, d);
      e.appendChild(f);
      return;
    }
    function M(a, b, d, e) {
      var f = a.src,
        g = c("performanceAbsoluteNow")(),
        h = c("TimeSlice").getGuardedContinuation(
          "Bootloader script.onresponse"
        ),
        i = c("ResourceTimingsStore").getUID("js", f);
      c("ResourceTimingsStore")
        .annotate("js", i)
        .addStringAnnotation("name", b)
        .addStringAnnotation("source", f);
      c("ifRequireable")("TimeSliceInteraction", function (a) {
        a.informGlobally("bootloader._loadJS")
          .addStringAnnotation("source", f)
          .addStringAnnotation("name", b);
      });
      c("ResourceTimingsStore").measureRequestSent("js", i);
      a.onload = h.bind(void 0, function () {
        var a = B.getNumRetriesForSource(f);
        a > 0 &&
          c("FBLogger")("bootloader").info(
            "JS retry success [%s] at %s | time: %s | retries: %s",
            b,
            f,
            c("performanceAbsoluteNow")() - g,
            a
          );
        c("ResourceTimingsStore").measureResponseReceived("js", i);
        e();
      });
      a.onerror = h.bind(void 0, function () {
        c("ResourceTimingsStore").measureResponseReceived("js", i);
        var h = c("performanceAbsoluteNow")();
        B.maybeScheduleRetry(
          f,
          function () {
            var c = a.parentNode;
            c && (c.removeChild(a), L(b, d, e, c));
          },
          function () {
            p.set(b, h),
              c("FBLogger")("bootloader").warn(
                "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                b,
                f,
                h - g,
                B.getNumRetriesForSource(f),
                n.size - o.size
              ),
              c("NetworkStatus").reportError(),
              e();
          }
        );
      });
    }
    function N(a, b, d) {
      return function () {
        c("FBLogger")("bootloader").warn(
          "CSS timeout [%s] at %s | concurrency: %s",
          a,
          b.src,
          n.size - o.size
        ),
          p.set(a, c("performanceAbsoluteNow")()),
          c("NetworkStatus").reportError(),
          d();
      };
    }
    function O(a, b) {
      var c = a.replace(/\/y[a-zA-Z0-9_-]\//, "/");
      if (
        c.includes("/intern/rsrc.php") ||
        c.includes("/intern/rsrc-translations.php")
      )
        return c.replace(
          /(!)(.+)(\.(?:css|js)(?:$|\?))/,
          function (a, c, d, e) {
            return (
              c +
              d
                .split(",")
                .filter(function (a, c) {
                  return !b.has(c);
                })
                .join(",") +
              e
            );
          }
        );
      else if (c.includes("/rsrc.php") || c.includes("/rsrc-translations.php"))
        return c.replace(/(.*\/)([^.]+)(\.)/, function (a, c, d, e) {
          return (
            c +
            d
              .match(/.{1,11}/g)
              .filter(function (a, c) {
                return !b.has(c);
              })
              .join("") +
            e
          );
        });
      else return a;
    }
    function P(a, b, e) {
      if (n.has(a)) return;
      n.set(a, c("performanceAbsoluteNow")());
      if (
        (b.type === "js" || b.type === "css") &&
        b.p != null &&
        b.d !== 1 &&
        c("BootloaderConfig").hypStep4
      ) {
        var f = d("CSRIndexUtil").parseCSRIndexes(b.p),
          g = new Set(),
          i = 0;
        f.forEach(function (b, c) {
          b !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX &&
            t.get(b) !== a &&
            g.add(c),
            b > i && (i = b);
        });
        i > c("BootloaderConfig").btCutoffIndex &&
          d("BootloaderEvents").notifyResourceInLongTailBTManifest();
        if (g.size === f.length) return;
        else
          g.size > 0 &&
            ((b.src = O(b.src, g)),
            b.type === "js" &&
              b.tsrc != null &&
              b.tsrc.trim() !== "" &&
              (b.tsrc = O(b.tsrc, g)));
      }
      b.type === "js" &&
        b.tsrc != null &&
        b.tsrc.trim() !== "" &&
        d("MakeHasteTranslations").genFetchAndProcessTranslations(a, b.tsrc);
      J(b, e);
      switch (b.type) {
        case "js":
          L(
            a,
            b,
            function () {
              return Z.done(a);
            },
            e
          );
          break;
        case "css":
          f = function () {
            return Z.done(a);
          };
          if (c("ExecutionEnvironment").isInWorker) {
            f();
            break;
          }
          c("CSSLoader").loadStyleSheet(
            a,
            b.src,
            c("nullthrows")(e),
            !b.nc,
            f,
            N(a, b, f)
          );
          break;
        case "async":
          c("BootloaderEndpoint").load(b.module, b.blocking, a);
          break;
        default:
          b.type, h(0, 3721);
      }
    }
    function Q(a, c, e, f) {
      var g = new Map(),
        i = (f = f) != null ? f : d("BootloaderEvents").newResourceMapSet();
      f = [];
      var j = [],
        k = [];
      for (
        var a = V(a),
          l = Array.isArray(a),
          m = 0,
          a = l
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var o;
        if (l) {
          if (m >= a.length) break;
          o = a[m++];
        } else {
          m = a.next();
          if (m.done) break;
          o = m.value;
        }
        o = o;
        var p = o[0];
        o = o[1];
        var q = void 0;
        switch (o.type) {
          case "css":
            q = o.nonblocking ? "nonblocking" : "blocking";
            break;
          case "js":
            q = "default";
            break;
          case "async":
            q = o.blocking ? "blocking" : "nonblocking";
            break;
          default:
            o.type, h(0, 3721);
        }
        i[q].set(p, o);
        var r = A.rsrcDone(p);
        k.push(r);
        q !== "nonblocking" && (j.push(r), q === "blocking" && f.push(r));
        n.has(p) || g.set(p, o);
      }
      var s, t;
      !b("cr:696703")
        ? (s = t =
            function (a) {
              return a();
            })
        : ((t = b("cr:696703").scheduleLoggingPriCallback),
          (s =
            b(
              "cr:696703"
            ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE()));
      var u = c.onBlocking,
        v = c.onAll,
        w = c.onLog;
      u &&
        A.registerCallback(function () {
          s(u);
        }, f);
      v &&
        A.registerCallback(function () {
          s(v);
        }, j);
      w &&
        A.registerCallback(function () {
          t(function () {
            return w(i);
          });
        }, k);
      for (
        q = g,
          r = Array.isArray(q),
          p = 0,
          q = r
            ? q
            : q[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (r) {
          if (p >= q.length) break;
          o = q[p++];
        } else {
          p = q.next();
          if (p.done) break;
          o = p.value;
        }
        m = o;
        l = m[0];
        a = m[1];
        P(l, a, e);
      }
    }
    function R(a, b, e) {
      s.set(a, b);
      if (b.type === "async" || b.type === "csr") return;
      var f = b.p;
      if (f)
        for (
          var f = d("CSRIndexUtil").parseCSRIndexes(f),
            g = Array.isArray(f),
            h = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= f.length) break;
            i = f[h++];
          } else {
            h = f.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          if (i === d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX) continue;
          (!t.has(i) || e) && t.set(i, a);
          (c("BootloaderConfig").phdOn ? b.c == 2 : b.c) &&
            d("CSRBitMap").add(i);
        }
    }
    function S(a, b) {
      var e = A.bootload(b);
      if (w.has(e)) return [e, null];
      w.add(e);
      var f = c("performanceAbsoluteNow")();
      b = {
        ref: a,
        components: b,
        timesliceContext: c("TimeSlice").getContext(),
        startTime: (a = m.get(e)) != null ? a : f,
        fetchStartTime: f,
        callbackStart: 0,
        callbackEnd: 0,
        tierOne: d("BootloaderEvents").newResourceMapSet(),
        tierTwo: d("BootloaderEvents").newResourceMapSet(),
        tierThree: d("BootloaderEvents").newResourceMapSet(),
        beRequests: new Map(),
      };
      d("BootloaderEvents").notifyBootloadStart(b);
      return [e, b];
    }
    function T(a) {
      return c("ifRequireable").call(
        null,
        a,
        function () {
          return !0;
        },
        function () {
          return !1;
        }
      );
    }
    function U(a, b, d, f) {
      v.has(a) ||
        v.set(a, {
          firstBootloadStart: c("performanceAbsoluteNow")(),
          logData: new Set(),
        });
      f && c("nullthrows")(v.get(a)).logData.add(f);
      var g = D(a),
        h = g.r,
        i = g.rdfds,
        j = g.rds;
      g = g.be;
      g = T(a) ? null : G(a, g);
      g == null && A.notify(A.beDone(a));
      Q(
        g != null ? [g].concat(h) : h,
        {
          onAll: function () {
            return A.notify(A.tierOne(a));
          },
          onLog: function () {
            return A.notify(A.tierOneLog(a));
          },
        },
        d,
        f == null ? void 0 : f.tierOne
      );
      var k = (i == null ? void 0 : i.m) || [];
      Q(
        (i == null ? void 0 : i.r) || [],
        {
          onBlocking: function () {
            return c("RequireDeferredReference").unblock(k, "css");
          },
          onAll: function () {
            return A.registerCallback(
              function () {
                A.notify(A.tierTwoStart(a)),
                  e.call(
                    null,
                    k.map(
                      c("RequireDeferredReference").getRDModuleName_DO_NOT_USE
                    ),
                    function () {
                      return A.notify(A.tierTwo(a));
                    }
                  );
              },
              [A.tierOne(a), b]
            );
          },
          onLog: function () {
            return A.notify(A.tierTwoLog(a));
          },
        },
        d,
        f == null ? void 0 : f.tierTwo
      );
      var l = (j == null ? void 0 : j.m) || [];
      Q(
        (j == null ? void 0 : j.r) || [],
        {
          onBlocking: function () {
            return c("RequireDeferredReference").unblock(l, "css");
          },
          onAll: function () {
            return A.registerCallback(
              function () {
                A.notify(A.tierThreeStart(a)),
                  e.call(
                    null,
                    l.map(
                      c("RequireDeferredReference").getRDModuleName_DO_NOT_USE
                    ),
                    function () {
                      return A.notify(A.tierThree(a));
                    }
                  );
              },
              [A.tierTwo(a)]
            );
          },
          onLog: function () {
            return A.notify(A.tierThreeLog(a));
          },
        },
        d,
        f == null ? void 0 : f.tierThree
      );
    }
    function V(a) {
      var b = new Map();
      for (var e = 0; e < a.length; e++) {
        var f = a[e],
          g = s.get(f);
        if (!g) {
          c("FBLogger")("bootloader").mustfix(
            "Unable to resolve resource %s.",
            f
          );
          continue;
        }
        var i = void 0;
        if (g.type === "csr") i = d("CSRIndexUtil").parseCSRIndexes(g.src);
        else if (g.p)
          (i = d("CSRIndexUtil").parseCSRIndexes(g.p)),
            i.includes(d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX) && b.set(f, g),
            (i = i.filter(function (a) {
              return a !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX;
            }));
        else {
          b.set(f, g);
          continue;
        }
        for (
          f = i,
            g = Array.isArray(f),
            i = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var j;
          if (g) {
            if (i >= f.length) break;
            j = f[i++];
          } else {
            i = f.next();
            if (i.done) break;
            j = i.value;
          }
          j = j;
          var k = t.get(j);
          if (k == null) {
            var l = JSON.stringify(
              a.map(function (a) {
                var b = F(a),
                  c;
                b.type === "js" || b.type === "css"
                  ? (c = b.d ? "" : b.src.split("?")[0])
                  : (c = b.src);
                return JSON.stringify(
                  babelHelpers["extends"]({ hash: a, rev: u.get(a) }, b, {
                    src: c,
                    tsrc: null,
                  })
                );
              })
            );
            throw c("FBLogger")("bootloader", "missing-index-map").mustfixThrow(
              "No hash for rsrcIndex " +
                j +
                " (rev: " +
                c("SiteData").client_revision +
                ", cohort: " +
                c("SiteData").pkg_cohort +
                "). " +
                l
            );
          }
          j = F(k);
          j.type !== "csr" || h(0, 20056, k);
          b.set(k, j);
        }
      }
      return b.entries();
    }
    function W(a) {
      var b,
        e = a.getAttribute("data-bootloader-hash");
      if (e == null) return;
      var f = d("ResourceHasher").getValidResourceHash(e);
      if (a.id) {
        if (y.has(a.id)) return;
        y.add(a.id);
      }
      e =
        a.tagName == "SCRIPT"
          ? { src: a.src, type: "js" }
          : { src: a.href, type: "css" };
      a.crossOrigin == null && (e.nc = 1);
      e.type === "js" &&
        a.dataset.tsrc != null &&
        a.dataset.tsrc.trim() !== "" &&
        ((e.tsrc = a.dataset.tsrc),
        d("MakeHasteTranslations").genFetchAndProcessTranslations(f, e.tsrc));
      e.type === "css" &&
        a.getAttribute("data-nonblocking") &&
        (e.nonblocking = 1);
      var g = a.getAttribute("data-c");
      g == "1" ? (e.c = 1) : g == "2" && (e.c = 2);
      e.p = a.getAttribute("data-p");
      g = a.getAttribute("data-btmanifest");
      g != null && (e.m = g);
      s.has(f) &&
        !c("BootloaderConfig").silentDups &&
        c("FBLogger")("bootloader").warn(
          "Duplicate resource [%s]: %s",
          f,
          e.src
        );
      R(f, e, !0);
      n.set(f, c("performanceAbsoluteNow")());
      g = function () {
        return Z.done(f);
      };
      b =
        e.type === "js"
          ? !a.getAttribute("async")
          : ((b = a.parentNode) == null ? void 0 : b.tagName) === "HEAD";
      b || (window._btldr && window._btldr[f])
        ? g()
        : e.type === "js"
        ? M(a, f, e, g)
        : c("CSSLoader").setupEventListeners(
            f,
            e.src,
            H(),
            g,
            N(f, e, g),
            c("CSSLoaderConfig").forcePollForBootloader === !0 ? null : a
          );
    }
    function X() {
      if (x) return;
      x = !0;
      if (!c("ExecutionEnvironment").canUseDOM) return;
      Array.from(document.getElementsByTagName("link")).forEach(function (a) {
        return W(a);
      });
      Array.from(document.getElementsByTagName("script")).forEach(function (a) {
        return W(a);
      });
    }
    function Y() {
      z = !0;
      var a = l;
      l = [];
      a.forEach(function (a) {
        var b = a[0],
          c = a[1],
          d = a[2];
        a = a[3];
        a(function () {
          Z.loadModules.apply(Z, [b, c, d]);
        });
      });
    }
    var Z = {
      loadModules: function (a, b, f) {
        b === void 0 && (b = i);
        f === void 0 && (f = "loadModules: unknown caller");
        var g = a,
          h = !1,
          j = function () {
            h || b.apply(void 0, arguments);
          };
        a = {
          remove: function () {
            h = !0;
          },
        };
        if (
          c("BootloaderConfig").fastPathForAlreadyRequired &&
          g.every(function (a) {
            return T(a);
          })
        ) {
          e.call(null, g, function () {
            j.apply(void 0, arguments);
          });
          return a;
        }
        if (!C(g)) {
          var k = "Deferred: Bootloader.loadModules";
          k = c("TimeSlice").getGuardedContinuation(k);
          l.push([g, j, f, k]);
          k = A.bootload(g);
          m.set(k, (k = m.get(k)) != null ? k : c("performanceAbsoluteNow")());
          return a;
        }
        k = S(f, g);
        var n = k[0],
          o = k[1];
        A.registerCallback(
          e.bind(null, g, function () {
            o && (o.callbackStart = c("performanceAbsoluteNow")()),
              j.apply(void 0, arguments),
              o && (o.callbackEnd = c("performanceAbsoluteNow")()),
              A.notify(n);
          }),
          g.map(function (a) {
            return A.tierOne(a);
          })
        );
        I(function (b) {
          for (var c = 0; c < g.length; c++) {
            var a = g[c];
            U(a, n, b, o);
          }
        });
        if (o) {
          k = new Set([n]);
          for (var p = 0; p < g.length; p++) {
            var q = g[p];
            k.add(A.beDone(q));
            k.add(A.tierThree(q));
            k.add(A.tierOneLog(q));
            k.add(A.tierTwoLog(q));
            k.add(A.tierThreeLog(q));
          }
          A.registerCallback(function () {
            return d("BootloaderEvents").notifyBootload(o);
          }, Array.from(k));
          c("ifRequireable")("TimeSliceInteraction", function (a) {
            a.informGlobally("Bootloader.loadResources")
              .addSetAnnotation(
                "requested_hashes",
                Array.from(
                  d("BootloaderEvents").flattenResourceMapSet(o.tierOne).keys()
                )
              )
              .addSetAnnotation(
                "rdfd_requested_hashes",
                Array.from(
                  d("BootloaderEvents").flattenResourceMapSet(o.tierTwo).keys()
                )
              )
              .addSetAnnotation(
                "rd_requested_hashes",
                Array.from(
                  d("BootloaderEvents")
                    .flattenResourceMapSet(o.tierThree)
                    .keys()
                )
              )
              .addStringAnnotation("bootloader_reference", f)
              .addSetAnnotation("requested_components", g);
          });
        }
        return a;
      },
      loadResources: function (a, b) {
        X(),
          I(function (c) {
            var e;
            return Q(
              a.map(function (a) {
                return d("ResourceHasher").getValidResourceHash(a);
              }),
              (e = b) != null ? e : Object.freeze({}),
              c
            );
          });
      },
      requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
        var b = d("ResourceHasher").createExternalJSHash();
        R(b, { type: "js", src: a, nc: 1 }, !1);
        Z.loadResources([b]);
      },
      done: function (a) {
        o.set(a, c("performanceAbsoluteNow")()), A.notify(A.rsrcDone(a));
      },
      beDone: function (a, b, c) {
        for (
          var d =
              (d = (d = v.get(a)) == null ? void 0 : d.logData) != null
                ? d
                : [],
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d, g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g.beRequests.set(b, c);
        }
        A.notify(A.beDone(a));
      },
      handlePayload: function (a, b) {
        for (
          var e = (e = a.rsrcTags) != null ? e : [],
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e, h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          W(document.getElementById(h));
        }
        Z.setResourceMap(
          (h = a.rsrcMap) != null ? h : {},
          a.sotUpgrades,
          a.consistency.rev,
          b
        );
        g =
          a.csrUpgrade != null
            ? d("CSRIndexUtil").parseCSRIndexes(a.csrUpgrade)
            : [];
        f = g.find(function (a) {
          return !t.has(a);
        });
        g.length && a.consistency.rev !== c("SiteData").client_revision
          ? c("FBLogger")("bootloader", "csr-mismatch").warn(
              "CSR upgrades included on mismatched rev " +
                a.consistency.rev +
                " (client rev: " +
                c("SiteData").client_revision +
                ", cohort: " +
                c("SiteData").pkg_cohort +
                ")."
            )
          : f != null && x
          ? c("FBLogger")("bootloader", "missing-csr-upgrade").warn(
              "CSR upgrades included unknown rsrcIndex " +
                f +
                " (client rev: " +
                c("SiteData").client_revision +
                ", cohort: " +
                c("SiteData").pkg_cohort +
                ")."
            )
          : g.forEach(d("CSRBitMap").add);
        a.compMap && Z.enableBootload(a.compMap, b);
      },
      enableBootload: function (a, b) {
        for (var c in a)
          b && b.comp++,
            !q.has(c)
              ? (q.set(c, a[c]), j.has(c) && (j["delete"](c), E(c)))
              : b && b.dup_comp++;
        X();
        k || Y();
      },
      undeferBootloads: function (a) {
        a === void 0 && (a = !1);
        if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
        a &&
          k &&
          d("BootloaderEvents").notifyDeferTimeout({
            componentMapSize: q.size,
            pending: l.map(function (a) {
              var b = a[0];
              a[1];
              var c = a[2];
              a[3];
              return { components: b, ref: c };
            }),
            time: c("performanceNow")(),
          });
        k = !1;
        q.size && Y();
      },
      markComponentsAsImmediate: function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          q.has(c) ? E(c) : j.add(c);
        }
      },
      setResourceMap: function (a, b, e, f) {
        var g = !1;
        for (var h in a) {
          f && f.rsrc++;
          h = d("ResourceHasher").getValidResourceHash(h);
          e != null && u.set(h, e);
          var i = a[h],
            j = s.get(h);
          !j
            ? (i.type === "js" && (g = !0), R(h, i, !1))
            : (f && f.dup_rsrc++,
              ((j.type === "js" && i.type === "js") ||
                (j.type === "css" && i.type === "css")) &&
                i.d &&
                !j.d &&
                (i.type === "js" && (g = !0), (j.src = i.src), (j.d = 1)));
        }
        g && e != null && c("ClientConsistency").addAdditionalRevision(e);
        if (b)
          for (
            i = b,
              j = Array.isArray(i),
              h = 0,
              i = j
                ? i
                : i[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (j) {
              if (h >= i.length) break;
              a = i[h++];
            } else {
              h = i.next();
              if (h.done) break;
              a = h.value;
            }
            f = a;
            g = s.get(f);
            g && R(f, g, !0);
          }
      },
      getURLToHashMap: function () {
        var a = new Map();
        for (
          var b = s,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          if (e.type === "async" || e.type === "csr") continue;
          a.set(e.src, f);
        }
        return a;
      },
      loadPredictedResourceMap: function (a, b, c) {
        Z.setResourceMap(a, null, c), Z.loadResources(Object.keys(a), b);
      },
      getCSSResources: function (a) {
        var b = [];
        for (
          var a = V(a),
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          e.type === "css" && b.push(f);
        }
        return b;
      },
      getBootloadedComponents: function () {
        var a = new Map();
        for (
          var b = v,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a.set(f, e.firstBootloadStart);
        }
        return a;
      },
      notifyManuallyLoadedResources: function (a) {
        for (var b in a) {
          b = d("ResourceHasher").getValidResourceHash(b);
          var e = a[b];
          (e.type === "js" || e.type === "css") &&
            (s.has(b) &&
              !c("BootloaderConfig").silentDups &&
              c("FBLogger")("bootloader").warn(
                "Duplicate manual resource [%s]: %s",
                b,
                e.src
              ),
            R(b, e, !0),
            n.set(b, c("performanceAbsoluteNow")()),
            Z.done(b));
        }
      },
      getResourceState: function (a) {
        return { loadStart: n.get(a), loadEnd: o.get(a), loadError: p.get(a) };
      },
      getComponentTiming: function (a) {
        var b;
        return {
          tierTwoStart: (b = A.getEventTime(A.tierTwoStart(a))) != null ? b : 0,
          tierTwoEnd: (b = A.getEventTime(A.tierTwo(a))) != null ? b : 0,
          tierThreeStart:
            (b = A.getEventTime(A.tierThreeStart(a))) != null ? b : 0,
          tierThreeEnd: (b = A.getEventTime(A.tierThree(a))) != null ? b : 0,
        };
      },
      getLoadedResourceCount: function () {
        return o.size;
      },
      getErrorCount: function () {
        return p.size;
      },
      forceFlush: function () {
        c("BootloaderEndpoint").forceFlush();
      },
      __debug: {
        componentMap: q,
        requested: n,
        resources: s,
        riMap: t,
        retries: B.getAllRetryAttempts_FOR_DEBUG_ONLY(),
        errors: p,
        loaded: o,
        bootloaded: v,
        queuedToMarkAsImmediate: j,
        _resolveCSRs: V,
        revMap: u,
        isPersistentDependencySatisfied: function (a) {
          return A.isPersistentDependencySatisfied(a);
        },
        _getQueuedLoadModules: function () {
          return l;
        },
        _dequeueLoadModules: function (a) {
          a = l.splice(a, 1);
          if (!a.length) return;
          a = a[0];
          var b = a[0],
            c = a[1],
            d = a[2];
          a = a[3];
          var e = k,
            f = z;
          k = !1;
          z = !0;
          a(function () {
            Z.loadModules.apply(Z, [b, c, d]);
          });
          k = e;
          z = f;
        },
      },
    };
    c("JSResourceReferenceImpl").setBootloader(Z);
    f = Z;
    g["default"] = f;
  },
  98
);
__d(
  "CSRFGuard",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    c = "for (;;);";
    var g = /^for ?\(;;\);/;
    d = c.length;
    function a(a) {
      return !!a.match(g);
    }
    function b(a) {
      var b = a.match(g);
      return b ? a.substr(b[0].length) : b;
    }
    f.regex = g;
    f.length = d;
    f.exists = a;
    f.clean = b;
  },
  66
);
/**
 * License: https://www.facebook.com/legal/license/Ga6vBwdwgUx/
 */
__d(
  "ImmediateImplementation",
  ["ImmediateImplementationExperiments"],
  function (a, b, c, d, e, f) {
    (function (c, d) {
      "use strict";
      var e = 1,
        g = {},
        h = {},
        i = h,
        j = !1,
        k = c.document,
        l,
        m,
        n,
        o = "setImmediate$" + Math.random() + "$";
      function p() {
        var a = c.event;
        return !a
          ? !1
          : (a.isTrusted &&
              [
                "change",
                "click",
                "contextmenu",
                "dblclick",
                "mouseup",
                "pointerup",
                "reset",
                "submit",
                "touchend",
              ].includes(a.type)) ||
              (a.type === "message" &&
                a.source === c &&
                typeof a.data === "string" &&
                a.data.indexOf(o) === 0);
      }
      function q(a) {
        var b = a[0];
        a = Array.prototype.slice.call(a, 1);
        g[e] = function () {
          b.apply(void 0, a);
        };
        i = i.next = { handle: e++ };
        return i.handle;
      }
      function r() {
        var a, b;
        while (!j && (a = h.next)) {
          h = a;
          if ((b = g[a.handle])) {
            j = !0;
            try {
              b(), (j = !1);
            } finally {
              s(a.handle), j && ((j = !1), h.next && l(r));
            }
          }
        }
      }
      function s(a) {
        delete g[a];
      }
      function d() {
        if (c.postMessage && !c.importScripts) {
          var a = !0,
            b = function b() {
              (a = !1),
                c.removeEventListener
                  ? c.removeEventListener("message", b, !1)
                  : c.detachEvent("onmessage", b);
            };
          if (c.addEventListener) c.addEventListener("message", b, !1);
          else if (c.attachEvent) c.attachEvent("onmessage", b);
          else return !1;
          c.postMessage("", "*");
          return a;
        }
      }
      function t() {
        var a = function (a) {
          a.source === c &&
            typeof a.data === "string" &&
            a.data.indexOf(o) === 0 &&
            r();
        };
        c.addEventListener
          ? c.addEventListener("message", a, !1)
          : c.attachEvent("onmessage", a);
        l = function () {
          var a = q(arguments);
          c.originalPostMessage
            ? c.originalPostMessage(o + a, "*")
            : c.postMessage(o + a, "*");
          return a;
        };
        m = l;
      }
      function u() {
        var a = new MessageChannel(),
          b = !1;
        a.port1.onmessage = function (a) {
          (b = !1), r();
        };
        l = function () {
          var c = q(arguments);
          b || (a.port2.postMessage(c), (b = !0));
          return c;
        };
        n = l;
      }
      function v() {
        var a = k.documentElement;
        l = function () {
          var b = q(arguments),
            c = k.createElement("script");
          c.onreadystatechange = function () {
            (c.onreadystatechange = null), a.removeChild(c), (c = null), r();
          };
          a.appendChild(c);
          return b;
        };
      }
      function w() {
        l = function () {
          setTimeout(r, 0);
          return q(arguments);
        };
      }
      d()
        ? c.MessageChannel &&
          b("ImmediateImplementationExperiments").prefer_message_channel
          ? (t(),
            u(),
            (l = function () {
              if (p()) return m.apply(null, arguments);
              else return n.apply(null, arguments);
            }))
          : t()
        : c.MessageChannel
        ? u()
        : k &&
          k.createElement &&
          "onreadystatechange" in k.createElement("script")
        ? v()
        : w();
      f.setImmediate = l;
      f.clearImmediate = s;
    })(
      typeof self === "undefined" ? (typeof a === "undefined" ? this : a) : self
    );
  },
  null
);
__d(
  "clearImmediatePolyfill",
  ["ImmediateImplementation"],
  function (a, b, c, d, e, f) {
    c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
    f["default"] = c;
  },
  66
);
__d(
  "clearImmediate",
  ["clearImmediatePolyfill"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      c("clearImmediatePolyfill")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CurrentAdAccount",
  ["CurrentAdAccountInitialData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getID: function () {
        return c("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CurrentCommunity",
  ["CurrentCommunityInitialData"],
  function (a, b, c, d, e, f) {
    a = {
      getID: function () {
        return b("CurrentCommunityInitialData").COMMUNITY_ID || "0";
      },
      getName: function () {
        return b("CurrentCommunityInitialData").COMMUNITY_NAME || "";
      },
    };
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "DTSG",
  ["invariant", "DTSGInitialData"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("DTSGInitialData").token || null;
    function a() {
      return i;
    }
    function b(a) {
      i = a;
    }
    function c() {
      h(0, 5809);
    }
    g.getToken = a;
    g.setToken = b;
    g.refresh = c;
  },
  98
);
__d(
  "isOculusDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "DTSGUtils",
  [
    "SprinkleConfig",
    "isCdnURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isOculusDotComURI",
    "isWorkplaceDotComURI",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      getNumericValue: function (a) {
        var c = 0;
        for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
        d = c.toString();
        return b("SprinkleConfig").should_randomize
          ? d
          : b("SprinkleConfig").version + d;
      },
      shouldAppendToken: function (a) {
        return (
          !b("isCdnURI")(a) &&
          !a.isSubdomainOfDomain("fbsbx.com") &&
          (b("isFacebookURI")(a) ||
            b("isMessengerDotComURI")(a) ||
            b("isWorkplaceDotComURI")(a) ||
            b("isOculusDotComURI")(a) ||
            a.isSubdomainOfDomain("freebasics.com") ||
            a.isSubdomainOfDomain("discoverapp.com"))
        );
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DTSG_ASYNC",
  ["DTSGInitData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("DTSGInitData").async_get_token || null;
    function a() {
      return h;
    }
    function b(a) {
      h = a;
    }
    g.getToken = a;
    g.setToken = b;
  },
  98
);
__d(
  "ge",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (typeof a !== "string") return a;
      else if (!b) return document.getElementById(a);
      else return g(a, b, c);
    }
    function g(a, b, c) {
      var d;
      if (h(b) == a) return b;
      else if (b.getElementsByTagName) {
        c = b.getElementsByTagName(c || "*");
        for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
      } else {
        c = b.childNodes;
        for (d = 0; d < c.length; d++) {
          b = g(a, c[d]);
          if (b) return b;
        }
      }
      return null;
    }
    function h(a) {
      return a.getAttribute ? a.getAttribute("id") : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "replaceTransportMarkers",
  ["BanzaiLazyQueue", "ge", "memoize"],
  function (a, b, c, d, e, f, g) {
    var h = new Set();
    function i(a, e, f) {
      var g = f !== void 0 ? e[f] : e,
        j;
      if (Array.isArray(g)) for (j = 0; j < g.length; j++) i(a, g, j);
      else if (g && typeof g === "object")
        if (g.__m)
          g.__lazy
            ? (e[f] = c("memoize")(b.bind(null, g.__m)))
            : (e[f] = b.call(null, g.__m));
        else if (g.__jsr)
          e[f] = new (b.call(null, "JSResourceReferenceImpl"))(
            g.__jsr
          ).__setRef("replaceTransportMarkers");
        else if (g.__dr)
          e[f] = new (b.call(null, "RequireDeferredReference"))(
            g.__dr
          ).__setRef("replaceTransportMarkers");
        else if (g.__rc)
          g.__rc[0] === null ? (e[f] = null) : (e[f] = b.call(null, g.__rc[0])),
            g.__rc[1] &&
              (h.has(g.__rc[1]) ||
                (h.add(g.__rc[1]),
                d("BanzaiLazyQueue").queuePost(
                  "require_cond_exposure_logging",
                  { identifier: g.__rc[1] }
                )));
        else if (g.__e) e[f] = c("ge")(g.__e);
        else if (g.__rel) e[f] = a.relativeTo;
        else if (g.__bigPipeContext) e[f] = a.bigPipeContext;
        else if (g.__bbox) e[f] = g.__bbox;
        else {
          for (j in g) i(a, g, j);
          if (g.__map) e[f] = new Map(g.__map);
          else if (g.__set) e[f] = new Set(g.__set);
          else if (g.__imm) {
            j = g.__imm;
            a = j.method;
            g = j.value;
            e[f] = b.call(null, "immutable")[a](g);
          }
        }
    }
    g["default"] = i;
  },
  98
);
__d(
  "ServerJSDefine",
  ["BitMap", "replaceTransportMarkers"],
  function (a, b, c, d, e, f, g) {
    var h = 2,
      i = 8,
      j = new (c("BitMap"))(),
      k = {
        getLoadedModuleHash: function () {
          return j.toCompressedString();
        },
        getModuleNameAndHash: function (a) {
          a = a.split("@");
          return { hash: a[1], name: a[0] };
        },
        handleDefine: function (a, b, d, e, g) {
          e >= 0 && j.set(e),
            define(
              a,
              b,
              function (h, i, j, k, b) {
                h = { data: d };
                c("replaceTransportMarkers")({ relativeTo: g }, h);
                if (e === -42) {
                  i = d != null && typeof d === "object" && d.__throw8367__;
                  throw new Error(a + ": " + (typeof i === "string" ? i : ""));
                }
                b.exports = h.data;
              },
              h | i
            );
        },
        handleDefines: function (a, b) {
          a.forEach(function (a) {
            var c;
            b != null ? (c = [].concat(a, [b])) : (c = [].concat(a, [null]));
            k.handleDefine.apply(null, c);
          });
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "StaticSiteData",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      hs_key: "__hs",
      connection_class_server_guess_key: "__ccg",
      dpr_key: "dpr",
      spin_rev_key: "__spin_r",
      spin_time_key: "__spin_t",
      spin_branch_key: "__spin_b",
      spin_mhenv_key: "__spin_dev_mhenv",
      lite_iframe_locale_override_key: "__ltif_locale",
      weblite_key: "__wblt",
      weblite_iframe_key: "__wbltif",
      kite_key: "__ktif",
      kite_legacy_key: "_ktif",
      haste_session_id_key: "__hsi",
      jsmod_key: "__dyn",
      csr_key: "__csr",
      comet_key: "__comet_req",
    });
    f["default"] = a;
  },
  66
);
/**
 * License: https://www.facebook.com/legal/license/A4tfXiHOGrs/
 */
__d(
  "Alea",
  [],
  function (a, b, c, d, e, f) {
    function g() {
      var a = 4022871197,
        b = function (b) {
          b = b.toString();
          for (var c = 0; c < b.length; c++) {
            a += b.charCodeAt(c);
            var d = 0.02519603282416938 * a;
            a = d >>> 0;
            d -= a;
            d *= a;
            a = d >>> 0;
            d -= a;
            a += d * 4294967296;
          }
          return (a >>> 0) * 23283064365386963e-26;
        };
      b.version = "Mash 0.9";
      return b;
    }
    function a() {
      var a = 0,
        b = 0,
        c = 0,
        d = 1;
      for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
        f[h] = arguments[h];
      var i = f.length > 0 ? f : [new Date()],
        j = g();
      a = j(" ");
      b = j(" ");
      c = j(" ");
      for (var k = 0; k < i.length; k++)
        (a -= j(i[k])),
          a < 0 && (a += 1),
          (b -= j(i[k])),
          b < 0 && (b += 1),
          (c -= j(i[k])),
          c < 0 && (c += 1);
      j = null;
      var l = function () {
        var e = 2091639 * a + d * 23283064365386963e-26;
        a = b;
        b = c;
        c = e - (d = e | 0);
        return c;
      };
      l.version = "Alea 0.9";
      l.args = i;
      return l;
    }
    f["default"] = a;
  },
  66
);
__d(
  "Random",
  ["Alea", "ServerNonce"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 4294967296,
      h = b("ServerNonce").ServerNonce,
      i;
    function j() {
      i == null && (i = b("Alea")(h));
      return i;
    }
    var k = {
      random: (function () {
        var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
          c = a.crypto || a.msCrypto;
        if (b != null)
          try {
            var d = c == null ? void 0 : c.getRandomValues;
            if (typeof d === "function") {
              var e = d.bind(c);
              return function () {
                try {
                  e(b);
                } catch (a) {
                  return j()();
                }
                return b[0] / g;
              };
            }
          } catch (a) {}
        return j();
      })(),
      uint32: function () {
        return Math.floor(k.random() * g);
      },
      coinflip: (function (a) {
        function b(b) {
          return a.apply(this, arguments);
        }
        b.toString = function () {
          return a.toString();
        };
        return b;
      })(function (a) {
        if (a === 0) return !1;
        return a <= 1 ? !0 : k.random() * a <= 1;
      }),
    };
    e.exports = k;
  },
  null
);
__d(
  "WebSessionDefaultTimeoutMs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 35e3;
    f["default"] = a;
  },
  66
);
__d(
  "CookieConsent",
  ["CookieConsentIFrameConfig", "InitialCookieConsent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(c("InitialCookieConsent").initialConsent),
      i = c("InitialCookieConsent").shouldShowCookieBanner,
      j = {
        setConsented: function () {
          h.add(1), (i = !1);
        },
        hasConsent: function (a) {
          return h.has(a);
        },
        shouldShowCookieBanner: function () {
          return i;
        },
        isFirstPartyStorageAllowed: function () {
          return !c("InitialCookieConsent").noCookies && j.hasConsent(1);
        },
        isThirdPartyEmbedAllowed: function () {
          return !c("InitialCookieConsent").noCookies && j.hasConsent(2);
        },
        isThirdPartyIframeAllowed: function (a) {
          if (!j.isFirstPartyStorageAllowed()) return !1;
          return c("CookieConsentIFrameConfig").allowlisted_iframes.includes(
            a.id
          )
            ? !0
            : j.hasConsent(2);
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "isQuotaExceededError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(b) {
      return Boolean(
        b instanceof a.DOMException &&
          (b.code === 22 ||
            b.code === 1014 ||
            b.name === "QuotaExceededError" ||
            b.name === "NS_ERROR_DOM_QUOTA_REACHED")
      );
    }
    function b(a, b) {
      return Boolean(g(b) && a && a.length !== 0);
    }
    f.isQuotaExceededError = g;
    f.isStorageQuotaExceededError = b;
  },
  66
);
__d(
  "WebStorage",
  ["CookieConsent", "FBLogger", "err", "isQuotaExceededError"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = {},
      j = "localStorage",
      k = "sessionStorage",
      l = !1,
      m = typeof window !== "undefined" ? window : self;
    function n(a, b, d) {
      if (!c("CookieConsent").isFirstPartyStorageAllowed()) {
        l ||
          (c("FBLogger")("web_storage").warn(
            "Failed to get %s because of missing cookie consent",
            d.toString()
          ),
          (l = !0));
        return null;
      }
      Object.prototype.hasOwnProperty.call(a, d) || (a[d] = b(d));
      return a[d];
    }
    function o(a) {
      try {
        return m[a];
      } catch (a) {
        c("FBLogger")("web_storage").warn(
          "Failed to get storage for read %s",
          a.message
        );
      }
      return null;
    }
    function p(a) {
      var b = null;
      try {
        b = m[a];
        if (
          b != null &&
          typeof b.setItem === "function" &&
          typeof b.removeItem === "function"
        ) {
          var e = "__test__" + Date.now();
          b.setItem(e, "");
          b.removeItem(e);
        } else return null;
      } catch (e) {
        if (
          d("isQuotaExceededError").isStorageQuotaExceededError(b, e) === !1
        ) {
          c("FBLogger")("web_storage")
            .catching(e)
            .warn("Failed to get WebStorage of type `%s`", a);
          return null;
        }
      }
      return b;
    }
    function q(a) {
      var b = null;
      try {
        b = m[a];
        if (
          b != null &&
          typeof b.setItem === "function" &&
          typeof b.removeItem === "function"
        ) {
          a = "__test__" + Date.now();
          b.setItem(a, "");
          b.removeItem(a);
        }
      } catch (a) {
        if (d("isQuotaExceededError").isStorageQuotaExceededError(b, a) === !0)
          return !0;
      }
      return !1;
    }
    function r(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
      return b;
    }
    function s(a, b, d) {
      if (a == null) return new Error("storage cannot be null");
      var e = null;
      try {
        a.setItem(b, d);
      } catch (g) {
        var f = r(a).map(function (b) {
          var c = (a.getItem(b) || "").length;
          return b + "(" + c + ")";
        });
        e = c("err")(
          "%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s",
          g.name ? g.name + ": " : "",
          b,
          d.length,
          f.join()
        );
      }
      return e;
    }
    a = {
      getLocalStorage: function () {
        return n(h, p, j);
      },
      getAllowlistedKeyFromLocalStorage: function (a) {
        var b;
        return (b = n(i, o, j)) == null ? void 0 : b.getItem(a);
      },
      getSessionStorage: function () {
        return n(h, p, k);
      },
      getAllowlistedKeyFromSessionStorage: function (a) {
        var b;
        return (b = n(i, o, k)) == null ? void 0 : b.getItem(a);
      },
      getLocalStorageForRead: function () {
        return n(i, o, j);
      },
      getSessionStorageForRead: function () {
        return n(i, o, k);
      },
      isLocalStorageQuotaExceeded: function () {
        return q(j);
      },
      isSessionStorageQuotaExceeded: function () {
        return q(k);
      },
      setItemGuarded: s,
      setAllowlistedKeyToLocalStorage: function (a, b, c) {
        return s(a, b, c);
      },
      clearCaches: function () {
        (h = {}), (i = {});
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "WebSession",
  ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 36,
      i = 6,
      j = Math.pow(h, i);
    function k(a) {
      return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a;
    }
    function l(a) {
      if (a == null) return null;
      var b = parseInt(a, 10);
      if ("" + b !== a) {
        c("FBLogger")("web_session").warn(
          "Expected the web session expiry time to parse as an integer. Found `%s`.",
          String(a)
        );
        return null;
      }
      return k(b);
    }
    function m(a) {
      if (a == null) return null;
      if (a.length !== i) {
        c("FBLogger")("web_session").warn(
          "Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.",
          i,
          a.length,
          a
        );
        return null;
      }
      if (/^[a-z0-9]+$/.test(a) === !1) {
        c("FBLogger")("web_session").warn(
          "Expected the web session ID to be a base-%d encoded string. Received `%s`.",
          h,
          a
        );
        return null;
      }
      return a;
    }
    function n(a) {
      if (a == null) return null;
      if (typeof a !== "string" && a instanceof String === !1) {
        c("FBLogger")("web_session").warn(
          "A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.",
          a
        );
        return null;
      }
      a = a.split(":");
      var b = a[0];
      a = a[1];
      a = l(a);
      b = m(b);
      return a == null || b == null ? null : { expiryTime: a, id: b };
    }
    function o() {
      var a = Math.floor(d("Random").random() * j);
      a = a.toString(h);
      return "0".repeat(i - a.length) + a;
    }
    var p = null;
    function q() {
      p == null && (p = o());
      return p;
    }
    function r(a) {
      a === void 0 && (a = Date.now());
      var b = c("WebStorage").getLocalStorageForRead();
      if (b == null) return null;
      try {
        b = n(b.getItem("Session"));
        return b && a < b.expiryTime ? b : null;
      } catch (a) {
        return null;
      }
    }
    function s() {
      var a = c("WebStorage").getSessionStorageForRead();
      if (a == null) return null;
      a = m(a.getItem("TabId"));
      if (a == null) {
        var b = c("WebStorage").getSessionStorage();
        if (b == null) return null;
        var d = o();
        c("WebStorage").setItemGuarded(b, "TabId", d);
        return d;
      }
      return a;
    }
    function a(a) {
      if (a !== void 0 && k(a) == null) {
        c("FBLogger")("web_session").warn(
          "`WebSession.extend()` was passed an invalid target expiry time `%s`.",
          a
        );
        return;
      }
      var b = Date.now();
      a = (a = a) != null ? a : b + c("WebSessionDefaultTimeoutMs");
      var d = r(b);
      if ((d && d.expiryTime >= a) || a <= b) return;
      b = c("WebStorage").getLocalStorage();
      if (b != null) {
        d = d == null ? o() : d.id;
        c("WebStorage").setItemGuarded(b, "Session", d + ":" + a);
      }
    }
    function t() {
      var a;
      return (a = r()) == null ? void 0 : a.id;
    }
    function b() {
      var a,
        b,
        c = q();
      a = (a = t()) != null ? a : "";
      b = (b = s()) != null ? b : "";
      return a + ":" + b + ":" + c;
    }
    function e() {
      return q();
    }
    g.extend = a;
    g.getSessionId = t;
    g.getId = b;
    g.getPageId_DO_NOT_USE = e;
  },
  98
);
__d(
  "asyncParams",
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    function a(a, b) {
      g[a] = b;
    }
    function b() {
      return g;
    }
    f.add = a;
    f.get = b;
  },
  66
);
__d(
  "CSSCore",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function i(a, b) {
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (c instanceof Element) {
        c = c.querySelectorAll(b);
        return Array.prototype.indexOf.call(c, a) !== -1;
      }
      return !1;
    }
    function j(a, b) {
      /\s/.test(b) && h(0, 11794, b);
      b &&
        (a.classList
          ? a.classList.add(b)
          : l(a, b) || (a.className = a.className + " " + b));
      return a;
    }
    function k(a, b) {
      /\s/.test(b) && h(0, 11795, b);
      b &&
        (a.classList
          ? a.classList.remove(b)
          : l(a, b) &&
            (a.className = a.className
              .replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1")
              .replace(/\s+/g, " ")
              .replace(/^\s*|\s*$/g, "")));
      return a;
    }
    function a(a, b, c) {
      return (c ? j : k)(a, b);
    }
    function l(a, b) {
      /\s/.test(b) && h(0, 442);
      return a.classList
        ? !!b && a.classList.contains(b)
        : (" " + a.className + " ").indexOf(" " + b + " ") > -1;
    }
    function b(a, b) {
      var c =
        a.matches ||
        a.webkitMatchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        function (b) {
          return i(a, b);
        };
      return c.call(a, b);
    }
    g.addClass = j;
    g.removeClass = k;
    g.conditionClass = a;
    g.hasClass = l;
    g.matchesSelector = b;
  },
  98
);
__d(
  "isSocialPlugin",
  ["CSSCore", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return !c("ExecutionEnvironment").canUseDOM
        ? !1
        : !!document.body && d("CSSCore").hasClass(document.body, "plugin");
    }
    g["default"] = a;
  },
  98
);
__d(
  "uniqueRequestID",
  [],
  function (a, b, c, d, e, f) {
    var g = 36,
      h = 1;
    function a() {
      return (h++).toString(g);
    }
    f["default"] = a;
  },
  66
);
__d(
  "getAsyncParams",
  [
    "CSRBitMap",
    "CometPersistQueryParams",
    "CurrentAdAccount",
    "CurrentCommunity",
    "CurrentUserInitialData",
    "DTSG",
    "DTSGUtils",
    "DTSG_ASYNC",
    "Env",
    "ISB",
    "JSErrorLoggingConfig",
    "LSD",
    "ServerJSDefine",
    "SiteData",
    "SprinkleConfig",
    "StaticSiteData",
    "WebConnectionClassServerGuess",
    "WebSession",
    "asyncParams",
    "isSocialPlugin",
    "requireWeak",
    "uniqueRequestID",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
        locale: !0,
        cxobfus: !0,
        js_debug: !0,
        cquick: !0,
        cquick_token: !0,
        wdplevel: !0,
        prod_graphql: !0,
        sri: !0,
      },
      i = { ctarget: !0 };
    function a(a, b) {
      var e;
      b === void 0 && (b = !1);
      var f = babelHelpers["extends"](
        {},
        d("asyncParams").get(),
        ((e = {
          __user: c("CurrentUserInitialData").USER_ID,
          __a: 1,
          __req: c("uniqueRequestID")(),
        }),
        (e[c("StaticSiteData").hs_key] = c("SiteData").haste_session),
        (e[c("StaticSiteData").dpr_key] = c("SiteData").pr),
        (e[c("StaticSiteData").connection_class_server_guess_key] = c(
          "WebConnectionClassServerGuess"
        ).connectionClass),
        (e.__rev = c("SiteData").client_revision),
        (e.__s = d("WebSession").getId()),
        (e[c("StaticSiteData").haste_session_id_key] = c("SiteData").hsi),
        e)
      );
      b ||
        ((f[c("StaticSiteData").jsmod_key] =
          c("ServerJSDefine").getLoadedModuleHash()),
        (f[c("StaticSiteData").csr_key] = d("CSRBitMap").toCompressedString()));
      if (
        !c("SiteData").wbloks_env &&
        ((c("SiteData").comet_env != null && c("SiteData").comet_env !== 0) ||
          c("SiteData").is_comet)
      ) {
        f[c("StaticSiteData").comet_key] =
          (e = c("SiteData").comet_env) != null ? e : 1;
      }
      Object.entries(c("CometPersistQueryParams").relative).forEach(function (
        a
      ) {
        var b = a[0];
        a = a[1];
        a != null && (f[b] = String(a));
      });
      typeof window !== "undefined" &&
        ((b = window) == null ? void 0 : b.location) != null &&
        window.location.search
          .slice(1)
          .split("&")
          .forEach(function (a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b.substr(0, 4) === "tfc_" ||
              b.substr(0, 4) === "tfi_" ||
              b.substr(0, 3) === "mh_" ||
              h[b] > -1 ||
              i[b] > -1) &&
              (i[b] > -1 ? (f[b] = decodeURIComponent(a)) : (f[b] = a));
          });
      c("Env").isCQuick &&
        !f.cquick &&
        ((f.cquick = c("Env").iframeKey),
        (f.ctarget = c("Env").iframeTarget),
        (f.cquick_token = c("Env").iframeToken));
      if (a == "POST") {
        e = d("DTSG").getCachedToken
          ? d("DTSG").getCachedToken()
          : d("DTSG").getToken();
        e &&
          ((f.fb_dtsg = e),
          c("SprinkleConfig").param_name &&
            (f[c("SprinkleConfig").param_name] =
              c("DTSGUtils").getNumericValue(e)));
        c("LSD").token &&
          ((f.lsd = c("LSD").token),
          c("SprinkleConfig").param_name &&
            !e &&
            (f[c("SprinkleConfig").param_name] = c("DTSGUtils").getNumericValue(
              c("LSD").token
            )));
      }
      if (a == "GET") {
        b = d("DTSG_ASYNC").getCachedToken
          ? d("DTSG_ASYNC").getCachedToken()
          : d("DTSG_ASYNC").getToken();
        b &&
          ((f.fb_dtsg_ag = b),
          c("SprinkleConfig").param_name &&
            (f[c("SprinkleConfig").param_name] =
              c("DTSGUtils").getNumericValue(b)));
      }
      c("ISB").token && (f.fb_isb = c("ISB").token);
      c("CurrentCommunity").getID() !== "0" &&
        (f.__cid = c("CurrentCommunity").getID());
      c("CurrentAdAccount").getID() != null &&
        (f.__aaid = c("CurrentAdAccount").getID());
      c("isSocialPlugin")() && (f.__sp = 1);
      c("SiteData").spin &&
        ((f[c("StaticSiteData").spin_rev_key] =
          c("SiteData")[c("StaticSiteData").spin_rev_key]),
        (f[c("StaticSiteData").spin_branch_key] =
          c("SiteData")[c("StaticSiteData").spin_branch_key]),
        (f[c("StaticSiteData").spin_time_key] =
          c("SiteData")[c("StaticSiteData").spin_time_key]),
        c("SiteData")[c("StaticSiteData").spin_mhenv_key] &&
          (f[c("StaticSiteData").spin_mhenv_key] =
            c("SiteData")[c("StaticSiteData").spin_mhenv_key]));
      d("JSErrorLoggingConfig").sampleWeight != null &&
        d("JSErrorLoggingConfig").sampleWeightKey != null &&
        (f[d("JSErrorLoggingConfig").sampleWeightKey] = d(
          "JSErrorLoggingConfig"
        ).sampleWeight);
      c("requireWeak")("QPLUserFlow", function (a) {
        a = a.getActiveFlowIDs();
        a.length > 0 && (f.qpl_active_flow_ids = a.sort().join(","));
      });
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "setImmediatePolyfill",
  ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"],
  function (a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (
      b("PromiseUsePolyfillSetImmediateGK")
        .www_always_use_polyfill_setimmediate ||
      !h
    ) {
      d = b("ImmediateImplementation");
      h = d.setImmediate;
    }
    function c(a) {
      typeof a === "function" || g(0, 5912);
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.apply(void 0, [a].concat(c));
    }
    e.exports = c;
  },
  null
);
__d(
  "setImmediateAcrossTransitions",
  ["TimeSlice", "setImmediatePolyfill"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = c("TimeSlice").guard(a, "setImmediate", {
        propagationType: c("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      return c("setImmediatePolyfill").apply(void 0, [b].concat(e));
    }
    g["default"] = a;
  },
  98
);
__d(
  "BootloaderEndpoint",
  [
    "Bootloader",
    "BootloaderEndpointConfig",
    "CSRFGuard",
    "FBLogger",
    "HasteResponse",
    "TimeSlice",
    "clearImmediate",
    "fb-error",
    "getAsyncParams",
    "getSameOriginTransport",
    "performanceAbsoluteNow",
    "setImmediateAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("fb-error").ErrorXFBDebug,
      i = b("BootloaderEndpointConfig").endpointURI,
      j = 0,
      k = null,
      l = null,
      m = new Map(),
      n = new Map();
    function o(a) {
      return Array.from(a.keys()).join(",");
    }
    function p(a, c) {
      var d = {};
      a.size && (d.modules = o(a));
      c.size && (d.nb_modules = o(c));
      a = Object.entries(
        babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))
      )
        .map(function (a) {
          var b = a[0];
          a = a[1];
          return encodeURIComponent(b) + "=" + encodeURIComponent(String(a));
        })
        .join("&");
      return i + (i.includes("?") ? "&" : "?") + a;
    }
    function q(a, c) {
      if (a.size === 0 && c.size === 0) return;
      var d = p(a, c),
        e = b("getSameOriginTransport")(),
        f = j++,
        i = (g || (g = b("performanceAbsoluteNow")))();
      e.open("GET", d, !0);
      var k = b("TimeSlice").getGuardedContinuation(
        "Bootloader _requestHastePayload"
      );
      e.onreadystatechange = function () {
        if (e.readyState !== 4) return;
        k(function () {
          h.addFromXHR(e);
          var g =
            e.status === 200
              ? JSON.parse(b("CSRFGuard").clean(e.responseText))
              : null;
          if (g == null) {
            b("FBLogger")("bootloader").warn(
              'Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"',
              e.status,
              o(a),
              o(c),
              e.responseText.substr(0, 256)
            );
            return;
          }
          if (g.error)
            b("FBLogger")("bootloader").warn(
              "Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s",
              o(a),
              o(c)
            );
          else if (g.__error) {
            b("FBLogger")("bootloader").warn(
              "Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s",
              o(a),
              o(c)
            );
            return;
          }
          b("TimeSlice").guard(
            function () {
              return r(d, g, a, c, f, i);
            },
            "Bootloader receiveEndpointData",
            { propagationType: b("TimeSlice").PropagationType.CONTINUATION }
          )();
        });
      };
      e.send();
    }
    function r(a, c, d, e, f, h) {
      var i = (g || (g = b("performanceAbsoluteNow")))(),
        j = c.serverGenTime,
        k = c.hrp;
      if (k == null) {
        c = c;
        b("FBLogger")("be_null_hrp").mustfix(
          "Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s",
          o(d),
          o(e),
          c.error +
            ", summary: " +
            c.errorSummary +
            ", description: " +
            c.errorDescription
        );
        k = c;
      }
      b("HasteResponse").handle(k, {
        source: "bootloader_endpoint",
        sourceDetail: JSON.stringify({
          b: Array.from(d.keys()),
          n: Array.from(e.keys()),
        }),
        onBlocking: function () {
          var a = [d, e];
          for (var c = 0; c < a.length; c++) {
            var f = a[c];
            for (
              var f = f.values(),
                g = Array.isArray(f),
                h = 0,
                f = g
                  ? f
                  : f[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var i;
              if (g) {
                if (h >= f.length) break;
                i = f[h++];
              } else {
                h = f.next();
                if (h.done) break;
                i = h.value;
              }
              i = i;
              b("Bootloader").done(i);
            }
          }
        },
        onLog: function (c) {
          var g = [d, e];
          for (var k = 0; k < g.length; k++) {
            var l = g[k];
            for (
              var l = l.keys(),
                m = Array.isArray(l),
                n = 0,
                l = m
                  ? l
                  : l[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var o;
              if (m) {
                if (n >= l.length) break;
                o = l[n++];
              } else {
                n = l.next();
                if (n.done) break;
                o = n.value;
              }
              o = o;
              b("Bootloader").beDone(
                o,
                f,
                babelHelpers["extends"](
                  {
                    requestStart: h,
                    responseStart: i,
                    serverGenTime: j,
                    uri: a,
                  },
                  c
                )
              );
            }
          }
        },
      });
    }
    function s() {
      var a = m,
        c = n;
      b("clearImmediate")(l);
      l = null;
      k = null;
      m = new Map();
      n = new Map();
      q(a, c);
    }
    function t() {
      var a = b("BootloaderEndpointConfig").maxBatchSize;
      return a <= 0 ? !1 : m.size + n.size >= a;
    }
    a = {
      load: function (a, c, d) {
        (c ? m : n).set(a, d);
        if (b("BootloaderEndpointConfig").debugNoBatching || t()) {
          s();
          return;
        }
        if (l != null) return;
        k = b("TimeSlice").getGuardedContinuation(
          "Schedule async batch request: Bootloader._loadResources"
        );
        l = b("setImmediateAcrossTransitions")(function () {
          k &&
            k(function () {
              return s();
            });
        });
      },
      forceFlush: function () {
        k &&
          k(function () {
            return s();
          });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "MetaConfigMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in g) ? (g[c] = a[c]) : b && b.dup_entry++;
      },
      get: function (a) {
        return g[a];
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "QPLHasteSupportDataStorage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
      add: function (a, b) {
        Object.keys(a).forEach(function (c) {
          b && b.entry++;
          if (g[c] == null) {
            var d = a[c];
            g[c] = d;
          } else b && b.dup_entry++;
        });
      },
      get: function (a) {
        return g[a];
      },
    };
    f["default"] = a;
  },
  66
);
__d(
  "bx",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    var h = {};
    function a(a) {
      var b = h[a];
      if (!b)
        throw c("unrecoverableViolation")(
          "bx" + ('(...): Unknown file path "' + a + '"'),
          "staticresources"
        );
      return b;
    }
    a.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in h)
            ? ((a[c].loggingID = c), (h[c] = a[c]))
            : b && b.dup_entry++;
    };
    a.getURL = function (a) {
      return a.uri;
    };
    g["default"] = a;
  },
  98
);
__d(
  "recoverableViolation",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c("FBLogger")(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      d = e == null ? void 0 : e.categoryKey;
      d != null && (b = b.addToCategoryKey(d));
      e = (d = e == null ? void 0 : e.trackOnly) != null ? d : !1;
      e ? b.debug(a) : b.mustfix(a);
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getFalcoLogPolicy_DO_NOT_USE",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { r: 1 },
      i = {};
    function a(a) {
      var b = i[a];
      if (b == null) {
        c("recoverableViolation")(
          "Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" +
            a +
            "`. Failing open (ie. with a sampling rate of 1.0).",
          "staticresources"
        );
        return h;
      }
      return b;
    }
    a.add = function (a, b) {
      Object.keys(a).forEach(function (c) {
        b && b.entry++, i[c] == null ? (i[c] = a[c]) : b && b.dup_entry++;
      });
    };
    g["default"] = a;
  },
  98
);
__d(
  "ix",
  ["invariant", "nullthrows"],
  function (a, b, c, d, e, f, g, h) {
    var i = {},
      j = new Set();
    function b(b) {
      var d = i[b];
      !d && h(0, 11798, b);
      a.__flight_execution_mode_DO_NOT_USE === "flight" &&
        d.sprited === 1 &&
        j.add(
          c("nullthrows")(
            d.origPath,
            "origPath should be defined on the server in react flight"
          )
        );
      return d;
    }
    b.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in i)
            ? ((a[c].loggingID = c), (i[c] = a[c]))
            : b && b.dup_entry++;
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
      a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
      return Array.from(j);
    };
    b.getAllPaths = function () {
      var a = new Set();
      Object.values(i)
        .map(function (a) {
          if ((a == null ? void 0 : a.sprited) === 0) return a.uri;
          else if ((a == null ? void 0 : a.sprited) === 1) return a._spi;
          else if ((a == null ? void 0 : a.sprited) === 2) return a.spi;
        })
        .forEach(function (b) {
          return b != null && a.add(b);
        });
      return a;
    };
    g["default"] = b;
  },
  98
);
__d(
  "justknobx",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    a = {
      getBool: function (a) {
        h(0, 47459);
      },
      getInt: function (a) {
        h(0, 47459);
      },
      _: function (a) {
        var b = i[a];
        b != null || h(0, 47458, a);
        return b.r;
      },
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "qex",
  ["invariant", "BanzaiLazyQueue"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
      j = {};
    a = {
      _: function (a) {
        var b = i[a];
        b != null || h(0, 11799, a);
        var c = b.r;
        b = b.l;
        b != null &&
          !j[a] &&
          ((j[a] = !0), d("BanzaiLazyQueue").queuePost("qex", { l: b }));
        return c;
      },
      add: function (a, b) {
        for (var c in a)
          b && b.entry++, !(c in i) ? (i[c] = a[c]) : b && b.dup_entry++;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "HasteSupportData",
  [
    "ix",
    "MetaConfigMap",
    "QPLHasteSupportDataStorage",
    "bx",
    "getFalcoLogPolicy_DO_NOT_USE",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      var d = a.bxData,
        e = a.clpData,
        f = a.gkxData,
        g = a.ixData,
        i = a.metaconfigData,
        j = a.qexData,
        k = a.qplData;
      a = a.justknobxData;
      d != null && c("bx").add(d, b);
      e != null && c("getFalcoLogPolicy_DO_NOT_USE").add(e, b);
      f != null && c("gkx").add(f, b);
      g != null && h.add(g, b);
      i != null && c("MetaConfigMap").add(i, b);
      j != null && c("qex").add(j, b);
      k != null && c("QPLHasteSupportDataStorage").add(k, b);
      a != null && c("justknobx").add(a, b);
    }
    g.handle = a;
  },
  98
);
__d(
  "$-core",
  ["fb-error-lite"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return h(a, typeof a === "string" ? document.getElementById(a) : a);
    }
    function b(a) {
      return h(a, typeof a === "string" ? document.getElementById(a) : a);
    }
    function h(a, b) {
      if (!b) {
        a = c("fb-error-lite").err(
          'Tried to get element with id of "%s" but it is not present on the page',
          String(a)
        );
        a.taalOpcodes = a.taalOpcodes || [];
        a.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];
        throw a;
      }
      return b;
    }
    a.fromIDOrElement = b;
    g["default"] = a;
  },
  98
);
__d(
  "$",
  ["$-core"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("$-core");
  },
  98
);
__d(
  "CSS",
  ["$", "CSSCore"],
  function (a, b, c, d, e, f, g) {
    var h = typeof window != "undefined" ? window.CSS : null,
      i = "hidden_elem";
    h = h && h.supports.bind(h);
    function a(a, b) {
      c("$").fromIDOrElement(a).className = b || "";
      return a;
    }
    function j(a, b) {
      return a instanceof Document || a instanceof Text
        ? !1
        : d("CSSCore").hasClass(c("$").fromIDOrElement(a), b);
    }
    function b(a, b) {
      return a instanceof Document || a instanceof Text
        ? !1
        : d("CSSCore").matchesSelector(c("$").fromIDOrElement(a), b);
    }
    function k(a, b) {
      return d("CSSCore").addClass(c("$").fromIDOrElement(a), b);
    }
    function l(a, b) {
      return d("CSSCore").removeClass(c("$").fromIDOrElement(a), b);
    }
    function m(a, b, e) {
      return d("CSSCore").conditionClass(c("$").fromIDOrElement(a), b, !!e);
    }
    function n(a, b) {
      return m(a, b, !j(a, b));
    }
    function e(a) {
      return !j(a, i);
    }
    function f(a) {
      return k(a, i);
    }
    function o(a) {
      return l(a, i);
    }
    function p(a) {
      return n(a, i);
    }
    function q(a, b) {
      return m(a, i, !b);
    }
    g.supports = h;
    g.setClass = a;
    g.hasClass = j;
    g.matchesSelector = b;
    g.addClass = k;
    g.removeClass = l;
    g.conditionClass = m;
    g.toggleClass = n;
    g.shown = e;
    g.hide = f;
    g.show = o;
    g.toggle = p;
    g.conditionShow = q;
  },
  98
);
__d(
  "Parent",
  ["CSS"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b = b.toUpperCase();
      a = i(a, function (a) {
        return a.nodeName === b;
      });
      return a instanceof Element ? a : null;
    }
    function b(a, b) {
      a = i(a, function (a) {
        return a instanceof Element && d("CSS").hasClass(a, b);
      });
      return a instanceof Element ? a : null;
    }
    function c(a, b) {
      a = a;
      if (typeof a.matches === "function") {
        while (a && a !== document && !a.matches(b)) a = a.parentNode;
        return a instanceof Element ? a : null;
      } else if (typeof a.msMatchesSelector === "function") {
        while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
        return a instanceof Element ? a : null;
      } else return h(a, b);
    }
    function h(a, b) {
      a = a;
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (!(c instanceof Element) && !(c instanceof Document)) return null;
      c = c.querySelectorAll(b);
      while (a) {
        if (Array.prototype.indexOf.call(c, a) !== -1)
          return a instanceof Element ? a : null;
        a = a.parentNode;
      }
      return a instanceof Element ? a : null;
    }
    function e(a, b) {
      a = i(a, function (a) {
        return a instanceof Element && !!a.getAttribute(b);
      });
      return a instanceof Element ? a : null;
    }
    function i(a, b) {
      a = a;
      while (a) {
        if (b(a)) return a;
        a = a.parentNode;
      }
      return null;
    }
    g.byTag = a;
    g.byClass = b;
    g.bySelector = c;
    g.bySelector_SLOW = h;
    g.byAttribute = e;
    g.find = i;
  },
  98
);
__d(
  "ContextualComponent",
  ["Parent"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      a.forNode = function (b) {
        return a.$1.get(b) || null;
      };
      a.closestToNode = function (b) {
        b = d("Parent").find(b, function (b) {
          return !!a.forNode(b);
        });
        return b ? a.forNode(b) : null;
      };
      a.register = function (b) {
        return new a(b);
      };
      function a(a) {
        var b = a.element,
          c = a.isRoot;
        a = a.parent;
        this.$2 = c;
        this.$3 = b;
        this.$4 = a;
        this.$5 = new Set();
        this.$6 = [];
        this.$7 = [];
        this.$8();
      }
      var b = a.prototype;
      b.onCleanup = function (a) {
        this.$6.push(a);
      };
      b.onUnmount = function (a) {
        this.$7.push(a);
      };
      b.cleanup = function () {
        this.$5.forEach(function (a) {
          return a.cleanup();
        }),
          this.$6.forEach(function (a) {
            return a();
          }),
          (this.$6 = []);
      };
      b.unmount = function () {
        this.cleanup();
        this.$5.forEach(function (a) {
          return a.unmount();
        });
        this.$7.forEach(function (a) {
          return a();
        });
        this.$7 = [];
        var b = this.$4;
        b && (a.$1["delete"](this.$3), b.$9(this));
      };
      b.reinitialize = function () {
        var b = this.$4;
        b && (b.$9(this), (this.$4 = void 0));
        a.$1["delete"](this.$3);
        this.$8();
      };
      b.$8 = function () {
        if (!this.$2 && !this.$4) {
          var b = a.closestToNode(this.$3);
          b && (this.$4 = b);
        }
        this.$4 && this.$4.$10(this);
        a.$1.set(this.$3, this);
      };
      b.$10 = function (a) {
        this.$5.add(a);
      };
      b.$9 = function (a) {
        this.$5["delete"](a);
      };
      return a;
    })();
    a.$1 = new Map();
    g["default"] = a;
  },
  98
);
__d(
  "__debug",
  [],
  function (a, b, c, d, e, f) {
    a = {};
    f["default"] = a;
  },
  66
);
__d(
  "ServerJS",
  [
    "ContextualComponent",
    "ErrorGuard",
    "ServerJSDefine",
    "__debug",
    "err",
    "ge",
    "replaceTransportMarkers",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = 1,
      i = 2,
      j = 16,
      k = 0;
    a = (function () {
      "use strict";
      function a() {
        (this.$2 = {}), (this.$1 = null), (this.$4 = {}), (this.$3 = void 0);
      }
      var c = a.prototype;
      c.handle = function (a, b) {
        return this.$5(a, b, m);
      };
      c.handleWithCustomApplyEach = function (a, b, c) {
        this.$5(b, c, a);
      };
      c.$5 = function (a, c, d) {
        this.$3 = c;
        if (a.__guard != null)
          throw b("err")(
            "ServerJS.handle called on data that has already been handled"
          );
        a.__guard = !0;
        d(a.define || [], this.$6, this);
        d(a.markup || [], this.$7, this);
        d(a.elements || [], this.$8, this);
        this.$9(a.contexts || []);
        d(a.instances || [], this.$10, this);
        var e = d(a.pre_display_requires || [], this.$11, this);
        e = e.concat(d(a.require || [], this.$11, this));
        return {
          cancel: function () {
            e.forEach(function (a) {
              a && a.cancel();
            });
          },
        };
      };
      c.handlePartial = function (a, b) {
        var c = this;
        (a.instances || []).forEach(function (a) {
          p(c.$2, a);
        });
        (a.markup || []).forEach(function (a) {
          o(c.$2, a);
        });
        (a.elements || []).forEach(function (a) {
          o(c.$2, a);
        });
        return this.handle(a, b);
      };
      c.setRelativeTo = function (a) {
        this.$1 = a;
        return this;
      };
      c.cleanup = function (a) {
        var c = Object.keys(this.$2);
        a
          ? d.call(
              null,
              c,
              a.guard(function () {}, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN,
              })
            )
          : d.call(null, c, function () {});
        this.$2 = {};
        function f(c) {
          var d = this.$4[c],
            a = d[0],
            f = d[1];
          d = d[2];
          delete this.$4[c];
          f = f
            ? 'JS::call("' + a + '", "' + f + '", ...)'
            : 'JS::requireModule("' + a + '")';
          a = b("__debug").debugUnresolvedDependencies([a, c]);
          throw l(
            b("err")(
              "%s did not fire because it has missing dependencies.\n%s",
              f,
              a
            ),
            d
          );
        }
        for (a in this.$4)
          (g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [a], {
            name: "ServerJS:cleanup id: " + a,
            project: "ServerJSCleanup",
          });
      };
      c.$6 = function (a, c, d, e) {
        return (g || (g = b("ErrorGuard"))).applyWithGuard(
          b("ServerJSDefine").handleDefine,
          b("ServerJSDefine"),
          [a, c, d, e, this.$1],
          { name: "JS::define" }
        );
      };
      c.$11 = function (a, c, d, e) {
        return (g || (g = b("ErrorGuard"))).applyWithGuard(
          this.$12,
          this,
          [a, c, d, e],
          { name: c != null ? "JS::call" : "JS::requireModule" }
        );
      };
      c.$12 = function (a, c, d, e) {
        var f = this;
        a = b("ServerJSDefine").getModuleNameAndHash(a);
        var m = a.name,
          n = a.hash,
          o;
        typeof c === "object" ? (a = c) : ((a = d), (o = c));
        d = [m].concat(a || []);
        var p;
        o != null
          ? (p = "__call__" + m + "." + o)
          : e != null
          ? (p = "__call__" + m)
          : (p = "__requireModule__" + m);
        p += "__" + k++;
        this.$4[p] = [m, o, n];
        var q = this.$3 && this.$3.bigPipeContext,
          r = (g || (g = b("ErrorGuard"))).guard(
            function (a) {
              a = b.call(null, m);
              delete f.$4[p];
              e &&
                b("replaceTransportMarkers")(
                  { relativeTo: f.$1, bigPipeContext: q },
                  e
                );
              if (o != null) {
                if (!a[o])
                  throw l(b("err")('Module %s has no method "%s"', m, o), n);
              } else if (e != null && typeof a !== "function")
                throw l(
                  b("err")(
                    "Module %s is not a function but was called with args",
                    m
                  ),
                  n
                );
              var c =
                o != null
                  ? a[o]
                  : e != null && typeof a === "function"
                  ? a
                  : null;
              c != null &&
                (c.apply(a, e || []),
                (r.__SMmeta = c.__SMmeta || {}),
                (r.__SMmeta.module = r.__SMmeta.module || m),
                (r.__SMmeta.name = r.__SMmeta.name || o));
            },
            {
              name:
                o != null
                  ? "JS::call('" + m + "', '" + o + "', ...)"
                  : e != null
                  ? "JS::call('" + m + "', ...)"
                  : "JS::requireModule('" + m + "')",
            }
          );
        c = define(p, d, r, h | j | i, this, 1, this.$3);
        return c;
      };
      c.$10 = function (a, c, d, e) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(
          this.$13,
          this,
          [a, c, d, e],
          { name: "JS::instance" }
        );
      };
      c.$13 = function (a, c, d, e) {
        var f = this,
          g = null;
        a = b("ServerJSDefine").getModuleNameAndHash(a);
        var h = a.name;
        a = a.hash;
        if (c) {
          var k = this.$3 && this.$3.bigPipeContext;
          g = function () {
            var a = b.call(null, c[0]);
            b("replaceTransportMarkers")(
              { relativeTo: f.$1, bigPipeContext: k },
              d
            );
            var e = Object.create(a.prototype);
            a.apply(e, d);
            return e;
          };
        }
        define(h, c, g, i | j, null, e);
      };
      c.$7 = function (a, c, d) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
          name: "JS::markup",
        });
      };
      c.$14 = function (a, c, d) {
        a = b("ServerJSDefine").getModuleNameAndHash(a);
        var e = a.name,
          f = a.hash;
        define(
          e,
          ["HTML"],
          function (a) {
            try {
              return a.replaceJSONWrapper(c).getRootNode();
            } catch (a) {
              throw l(a, f);
            }
          },
          j,
          null,
          d
        );
      };
      c.$8 = function (a, c, d, e) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(
          this.$15,
          this,
          [a, c, d, e],
          { name: "JS::element" }
        );
      };
      c.$15 = function (a, c, d, e) {
        a = b("ServerJSDefine").getModuleNameAndHash(a);
        var f = a.name,
          g = a.hash;
        if (c === null && d != null) {
          define(f, null, null, j, null, d);
          return;
        }
        a = [];
        var i = j;
        d = d || 0;
        e != null && (a.push(e), (i |= h), d++);
        define(
          f,
          a,
          function (a) {
            a = b("ge")(c, a);
            if (!a) {
              var d = "";
              throw l(b("err")('Could not find element "%s"%s', c, d), g);
            }
            return a;
          },
          i,
          null,
          d
        );
      };
      c.$9 = function (a) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
          name: "ContextualComponents",
        });
      };
      c.$16 = function (a) {
        var c = this,
          d = this.$3 && this.$3.bigPipeContext;
        a.map(function (a) {
          b("replaceTransportMarkers")(
            { relativeTo: c.$1, bigPipeContext: d },
            a
          );
          var e = a[0];
          return [a, n(e)];
        })
          .sort(function (a, b) {
            return a[1] - b[1];
          })
          .forEach(function (a) {
            a = a[0];
            var c = a[0];
            a = a[1];
            b("ContextualComponent").register({ element: c, isRoot: a });
          });
      };
      return a;
    })();
    function l(a, b) {
      a.serverHash = b;
      return a;
    }
    function m(a, b, c) {
      return a.map(function (a) {
        return b.apply(c, a);
      });
    }
    function n(a) {
      var b = 0;
      a = a;
      while (a) (a = a.parentElement), b++;
      return b;
    }
    function o(c, a) {
      var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
      d = d.name;
      d in c || (a[2] = (a[2] || 0) + 1);
      c[d] = !0;
    }
    function p(c, a) {
      var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
      d = d.name;
      d in c || (a[3] = (a[3] || 0) + 1);
      c[d] = !0;
    }
    e.exports = a;
  },
  null
);
__d(
  "HasteResponse",
  [
    "Bootloader",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "HasteSupportData",
    "ServerJS",
    "TimeSlice",
    "__debug",
    "fb-error",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("fb-error").getSimpleHash,
      i = new Set(),
      j = {
        handleSRPayload: function (a, c) {
          var d = a.hsdp;
          a = a.hblp;
          d && b("HasteSupportData").handle(d, c == null ? void 0 : c.hsdp);
          a && b("Bootloader").handlePayload(a, c == null ? void 0 : c.hblp);
          (a == null ? void 0 : a.consistency) != null &&
            b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency);
        },
        handle: function (a, c) {
          var d = a.jsmods,
            e = a.allResources;
          a = a.hsrp;
          var f = c.source,
            k = c.sourceDetail,
            l = c.onBlocking,
            m = c.onLog;
          c = c.onAll;
          var n = (g || (g = b("performanceAbsoluteNow")))(),
            o;
          if (k == null) o = !0;
          else {
            var p = h(f, k);
            i.has(p) ? (o = !1) : ((o = !0), i.add(p));
          }
          var q = {
            hsdp: { entry: 0, dup_entry: 0 },
            hblp: { rsrc: 0, dup_rsrc: 0, comp: 0, dup_comp: 0 },
            sjsp: {
              define: 0,
              dup_user_define: 0,
              dup_system_define: 0,
              require: 0,
            },
          };
          a && j.handleSRPayload(a, q);
          var r = 0,
            s = 0;
          b("Bootloader").loadResources((p = e) != null ? p : [], {
            onBlocking: function () {
              q.sjsp.require += ((d == null ? void 0 : d.require) || []).length;
              q.sjsp.define += ((d == null ? void 0 : d.define) || []).length;
              var a = b("__debug").getDupCount(),
                c = a[0];
              a = a[1];
              q.sjsp.dup_user_define -= c;
              q.sjsp.dup_system_define -= a;
              r = (g || (g = b("performanceAbsoluteNow")))();
              new (b("ServerJS"))().handle(d || {});
              s = g();
              var e = b("__debug").getDupCount();
              c = e[0];
              a = e[1];
              q.sjsp.dup_user_define += c;
              q.sjsp.dup_system_define += a;
              l == null ? void 0 : l();
            },
            onAll: c,
            onLog: function (a) {
              a = {
                source: f,
                sourceDetail: k,
                isFirstIdentical: o,
                timesliceContext: b("TimeSlice").getContext(),
                startTime: n,
                logTime: (g || (g = b("performanceAbsoluteNow")))(),
                jsmodsStart: r,
                jsmodsEnd: s,
                rsrcs: a,
                payloadStats: q,
              };
              m == null ? void 0 : m(a);
              b("BootloaderEvents").notifyHasteResponse(a);
            },
          });
        },
      };
    e.exports = j;
  },
  null
);
__d(
  "SchedulerFeatureFlags",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    a = !0;
    b = c("gkx")("1099893");
    d = c("gkx")("5541");
    e = d;
    f = 5;
    c = 10;
    var h = 10;
    g.enableSchedulerDebugging = a;
    g.enableProfiling = b;
    g.enableIsInputPending = d;
    g.enableIsInputPendingContinuous = e;
    g.frameYieldMs = f;
    g.continuousYieldMs = c;
    g.maxYieldMs = h;
  },
  98
);
__d(
  "Scheduler-dev.classic",
  ["SchedulerFeatureFlags"],
  function (a, b, c, d, e, f) {
    "use strict";
  },
  null
);
__d(
  "Scheduler-profiling.classic",
  ["SchedulerFeatureFlags"],
  function (b, c, d, e, f, g) {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = c("SchedulerFeatureFlags").enableIsInputPending,
      i = c("SchedulerFeatureFlags").enableSchedulerDebugging,
      j = c("SchedulerFeatureFlags").enableProfiling;
    d = c("SchedulerFeatureFlags").enableIsInputPendingContinuous;
    var k = c("SchedulerFeatureFlags").frameYieldMs,
      l = c("SchedulerFeatureFlags").continuousYieldMs,
      m = c("SchedulerFeatureFlags").maxYieldMs;
    function n(b, c) {
      var d = b.length;
      b.push(c);
      a: for (; 0 < d; ) {
        var e = (d - 1) >>> 1,
          f = b[e];
        if (0 < q(f, c)) (b[e] = c), (b[d] = f), (d = e);
        else break a;
      }
    }
    function o(b) {
      return 0 === b.length ? null : b[0];
    }
    function p(b) {
      if (0 === b.length) return null;
      var c = b[0],
        d = b.pop();
      if (d !== c) {
        b[0] = d;
        a: for (var e = 0, f = b.length, g = f >>> 1; e < g; ) {
          var h = 2 * (e + 1) - 1,
            i = b[h],
            j = h + 1,
            k = b[j];
          if (0 > q(i, d))
            j < f && 0 > q(k, i)
              ? ((b[e] = k), (b[j] = d), (e = j))
              : ((b[e] = i), (b[h] = d), (e = h));
          else if (j < f && 0 > q(k, d)) (b[e] = k), (b[j] = d), (e = j);
          else break a;
        }
      }
      return c;
    }
    function q(b, c) {
      var d = b.sortIndex - c.sortIndex;
      return 0 !== d ? d : b.id - c.id;
    }
    var r = 0,
      s = 0,
      t = 0,
      u = null,
      v = null,
      w = 0;
    function x(b) {
      if (null !== v) {
        var c = w;
        w += b.length;
        if (w + 1 > t) {
          t *= 2;
          if (524288 < t) {
            y();
            return;
          }
          var d = new Int32Array(4 * t);
          d.set(v);
          u = d.buffer;
          v = d;
        }
        v.set(b, c);
      }
    }
    function b() {
      (t = 131072),
        (u = new ArrayBuffer(4 * t)),
        (v = new Int32Array(u)),
        (w = 0);
    }
    function y() {
      var b = u;
      t = 0;
      v = u = null;
      w = 0;
      return b;
    }
    g.unstable_now = void 0;
    if (
      "object" === typeof performance &&
      "function" === typeof performance.now
    ) {
      var z = performance;
      g.unstable_now = function () {
        return z.now();
      };
    } else {
      var A = Date,
        ba = A.now();
      g.unstable_now = function () {
        return A.now() - ba;
      };
    }
    var B = [],
      C = [],
      ca = 1,
      D = !1,
      E = null,
      F = 3,
      G = !1,
      H = !1,
      I = !1,
      J = "function" === typeof setTimeout ? setTimeout : null,
      K = "function" === typeof clearTimeout ? clearTimeout : null,
      L = "undefined" !== typeof setImmediate ? setImmediate : null,
      M =
        "undefined" !== typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending
          ? navigator.scheduling.isInputPending.bind(navigator.scheduling)
          : null,
      da = { includeContinuous: d };
    function N(b) {
      for (var c = o(C); null !== c; ) {
        if (null === c.callback) p(C);
        else if (c.startTime <= b)
          p(C),
            (c.sortIndex = c.expirationTime),
            n(B, c),
            j &&
              (j && null !== v && x([1, 1e3 * b, c.id, c.priorityLevel]),
              (c.isQueued = !0));
        else break;
        c = o(C);
      }
    }
    function O(b) {
      I = !1;
      N(b);
      if (!H)
        if (null !== o(B)) (H = !0), $(P);
        else {
          var c = o(C);
          null !== c && aa(O, c.startTime - b);
        }
    }
    function P(c, b) {
      j && j && null !== v && x([8, 1e3 * b, s]);
      H = !1;
      I && ((I = !1), K(T), (T = -1));
      G = !0;
      var d = F;
      try {
        if (j)
          try {
            return Q(c, b);
          } catch (b) {
            if (null !== E) {
              var e = g.unstable_now();
              j && null !== v && x([3, 1e3 * e, E.id]);
              E.isQueued = !1;
            }
            throw b;
          }
        else return Q(c, b);
      } finally {
        (E = null),
          (F = d),
          (G = !1),
          j &&
            ((c = g.unstable_now()),
            j && (s++, null !== v && x([7, 1e3 * c, s])));
      }
    }
    function Q(c, b) {
      N(b);
      for (
        E = o(B);
        !(null === E || (i && D) || (E.expirationTime > b && (!c || X())));

      ) {
        var d = E.callback;
        if ("function" === typeof d) {
          E.callback = null;
          F = E.priorityLevel;
          var e = E.expirationTime <= b;
          if (j) {
            var f = E;
            j && (r++, null !== v && x([5, 1e3 * b, f.id, r]));
          }
          d = d(e);
          b = g.unstable_now();
          if ("function" === typeof d)
            return (
              (E.callback = d),
              j && j && null !== v && x([6, 1e3 * b, E.id, r]),
              N(b),
              !0
            );
          j && (j && null !== v && x([2, 1e3 * b, E.id]), (E.isQueued = !1));
          E === o(B) && p(B);
          N(b);
        } else p(B);
        E = o(B);
      }
      if (null !== E) return !0;
      c = o(C);
      null !== c && aa(O, c.startTime - b);
      return !1;
    }
    var R = !1,
      S = null,
      T = -1,
      U = k,
      V = -1,
      W = !1;
    function X() {
      var b = g.unstable_now() - V;
      if (b < U) return !1;
      if (h) {
        if (W) return !0;
        if (b < l) {
          if (null !== M) return M();
        } else if (b < m && null !== M) return M(da);
      }
      return !0;
    }
    function Y() {
      if (null !== S) {
        var b = g.unstable_now();
        V = b;
        var c = !0;
        try {
          c = S(!0, b);
        } finally {
          c ? Z() : ((R = !1), (S = null));
        }
      } else R = !1;
      W = !1;
    }
    var Z;
    if ("function" === typeof L)
      Z = function () {
        L(Y);
      };
    else if ("undefined" !== typeof MessageChannel) {
      e = new MessageChannel();
      var ea = e.port2;
      e.port1.onmessage = Y;
      Z = function () {
        ea.postMessage(null);
      };
    } else
      Z = function () {
        J(Y, 0);
      };
    function $(b) {
      (S = b), R || ((R = !0), Z());
    }
    function aa(b, c) {
      T = J(function () {
        b(g.unstable_now());
      }, c);
    }
    f = j
      ? { startLoggingProfilingEvents: b, stopLoggingProfilingEvents: y }
      : null;
    g.unstable_IdlePriority = 5;
    g.unstable_ImmediatePriority = 1;
    g.unstable_LowPriority = 4;
    g.unstable_NormalPriority = 3;
    g.unstable_Profiling = f;
    g.unstable_UserBlockingPriority = 2;
    g.unstable_cancelCallback = function (b) {
      if (j && b.isQueued) {
        var c = g.unstable_now();
        j && null !== v && x([4, 1e3 * c, b.id]);
        b.isQueued = !1;
      }
      b.callback = null;
    };
    g.unstable_continueExecution = function () {
      (D = !1), H || G || ((H = !0), $(P));
    };
    g.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b ? !1 : (U = 0 < b ? Math.floor(1e3 / b) : k);
    };
    g.unstable_getCurrentPriorityLevel = function () {
      return F;
    };
    g.unstable_getFirstCallbackNode = function () {
      return o(B);
    };
    g.unstable_next = function (b) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var c = 3;
          break;
        default:
          c = F;
      }
      var d = F;
      F = c;
      try {
        return b();
      } finally {
        F = d;
      }
    };
    g.unstable_pauseExecution = function () {
      D = !0;
    };
    g.unstable_requestPaint = function () {
      h &&
        void 0 !== navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        (W = !0);
    };
    g.unstable_runWithPriority = function (b, c) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var d = F;
      F = b;
      try {
        return c();
      } finally {
        F = d;
      }
    };
    g.unstable_scheduleCallback = function (b, c, d) {
      var e = g.unstable_now();
      "object" === typeof d && null !== d
        ? ((d = d.delay), (d = "number" === typeof d && 0 < d ? e + d : e))
        : (d = e);
      switch (b) {
        case 1:
          var f = -1;
          break;
        case 2:
          f = 250;
          break;
        case 5:
          f = 1073741823;
          break;
        case 4:
          f = 1e4;
          break;
        default:
          f = 5e3;
      }
      f = d + f;
      b = {
        id: ca++,
        callback: c,
        priorityLevel: b,
        startTime: d,
        expirationTime: f,
        sortIndex: -1,
      };
      j && (b.isQueued = !1);
      d > e
        ? ((b.sortIndex = d),
          n(C, b),
          null === o(B) &&
            b === o(C) &&
            (I ? (K(T), (T = -1)) : (I = !0), aa(O, d - e)))
        : ((b.sortIndex = f),
          n(B, b),
          j &&
            (j && null !== v && x([1, 1e3 * e, b.id, b.priorityLevel]),
            (b.isQueued = !0)),
          H || G || ((H = !0), $(P)));
      return b;
    };
    g.unstable_shouldYield = X;
    g.unstable_wrapCallback = function (b) {
      var c = F;
      return function () {
        var d = F;
        F = c;
        try {
          return b.apply(this, arguments);
        } finally {
          F = d;
        }
      };
    };
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  },
  null
);
__d(
  "nativeRequestAnimationFrame",
  [],
  function (a, b, c, d, e, f) {
    b =
      a.__fbNativeRequestAnimationFrame ||
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      a.oRequestAnimationFrame ||
      a.msRequestAnimationFrame;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "requestAnimationFramePolyfill",
  ["nativeRequestAnimationFrame", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    var h = 0;
    b =
      c("nativeRequestAnimationFrame") ||
      function (b) {
        var d = c("performanceNow")(),
          e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function () {
          b(c("performanceNow")());
        }, e);
      };
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "SchedulerFb-Internals_DO_NOT_USE",
  [
    "Scheduler-dev.classic",
    "Scheduler-profiling.classic",
    "ifRequireable",
    "requestAnimationFramePolyfill",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a.requestAnimationFrame === void 0 &&
      (a.requestAnimationFrame = b("requestAnimationFramePolyfill"));
    var g;
    g = b("Scheduler-profiling.classic");
    e.exports = {
      unstable_ImmediatePriority: g.unstable_ImmediatePriority,
      unstable_UserBlockingPriority: g.unstable_UserBlockingPriority,
      unstable_NormalPriority: g.unstable_NormalPriority,
      unstable_LowPriority: g.unstable_LowPriority,
      unstable_IdlePriority: g.unstable_IdlePriority,
      unstable_getCurrentPriorityLevel: g.unstable_getCurrentPriorityLevel,
      unstable_runWithPriority: g.unstable_runWithPriority,
      unstable_now: g.unstable_now,
      unstable_scheduleCallback: function (a, c, d) {
        var e = b("ifRequireable")(
          "TimeSlice",
          function (a) {
            return a.guard(c, "unstable_scheduleCallback", {
              propagationType: a.PropagationType.CONTINUATION,
              registerCallStack: !0,
            });
          },
          function () {
            return c;
          }
        );
        return g.unstable_scheduleCallback(a, e, d);
      },
      unstable_cancelCallback: function (a) {
        return g.unstable_cancelCallback(a);
      },
      unstable_wrapCallback: function (a) {
        var c = b("ifRequireable")(
          "TimeSlice",
          function (b) {
            return b.guard(a, "unstable_wrapCallback", {
              propagationType: b.PropagationType.CONTINUATION,
              registerCallStack: !0,
            });
          },
          function () {
            return a;
          }
        );
        return g.unstable_wrapCallback(c);
      },
      unstable_pauseExecution: function () {
        return g.unstable_pauseExecution();
      },
      unstable_continueExecution: function () {
        return g.unstable_continueExecution();
      },
      unstable_shouldYield: g.unstable_shouldYield,
      unstable_requestPaint: g.unstable_requestPaint,
      unstable_forceFrameRate: g.unstable_forceFrameRate,
      unstable_Profiling: g.unstable_Profiling,
    };
  },
  null
);
__d(
  "JSScheduler",
  ["SchedulerFb-Internals_DO_NOT_USE"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
        unstable_Immediate: (c = b("SchedulerFb-Internals_DO_NOT_USE"))
          .unstable_ImmediatePriority,
        unstable_UserBlocking: c.unstable_UserBlockingPriority,
        unstable_Normal: c.unstable_NormalPriority,
        unstable_Low: c.unstable_LowPriority,
        unstable_Idle: c.unstable_IdlePriority,
      },
      h = !1,
      i = c.unstable_scheduleCallback,
      j = c.unstable_cancelCallback,
      k = {
        priorities: g,
        shouldYield: c.unstable_shouldYield,
        getCurrentPriorityLevel: c.unstable_getCurrentPriorityLevel,
        runWithPriority: c.unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: c.unstable_runWithPriority,
        defer: function (a) {
          var b = k.getCurrentPriorityLevel();
          return i(b, a);
        },
        getCallbackScheduler: function () {
          var a = k.getCurrentPriorityLevel();
          return function (b) {
            return i(a, b);
          };
        },
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:
          function () {
            var a = k.getCurrentPriorityLevel();
            return function (c) {
              return i(g.unstable_UserBlocking, function () {
                b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(
                  a,
                  c
                );
              });
            };
          },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function (a) {
          var c = k.getCurrentPriorityLevel();
          return i(g.unstable_UserBlocking, function () {
            b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(
              c,
              a
            );
          });
        },
        scheduleImmediatePriCallback: function (a) {
          return i(g.unstable_Immediate, a);
        },
        scheduleUserBlockingPriCallback: function (a) {
          return i(g.unstable_UserBlocking, a);
        },
        scheduleNormalPriCallback: function (a) {
          return i(g.unstable_Normal, a);
        },
        scheduleLoggingPriCallback: function (a) {
          return i(g.unstable_Low, a);
        },
        scheduleSpeculativeCallback: function (a) {
          return i(g.unstable_Idle, a);
        },
        cancelCallback: function (a) {
          j(a);
        },
        scheduleDelayedCallback_DO_NOT_USE: function (a, b, c) {
          a = i(a, c, { delay: b });
          return a;
        },
        cancelDelayedCallback_DO_NOT_USE: function (a) {
          a = a;
          return j(a);
        },
        startEventProfiling: function () {
          var a;
          a =
            (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) ==
            null
              ? void 0
              : a.startLoggingProfilingEvents;
          typeof a == "function" && a();
        },
        stopEventProfiling: function () {
          var a;
          a =
            (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) ==
            null
              ? void 0
              : a.stopLoggingProfilingEvents;
          return typeof a == "function" ? a() : null;
        },
        makeSchedulerGlobalEntry: function (c, d) {
          c === void 0 && (c = null),
            d === void 0 && (d = !1),
            c !== null &&
              c !== void 0 &&
              b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),
            d && k.startEventProfiling(),
            (a.ScheduleJSWork = function (a) {
              return function () {
                for (
                  var b = arguments.length, c = new Array(b), d = 0;
                  d < b;
                  d++
                )
                  c[d] = arguments[d];
                h
                  ? a.apply(void 0, c)
                  : k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function () {
                      h = !0;
                      try {
                        a.apply(void 0, c);
                      } finally {
                        h = !1;
                      }
                    });
              };
            });
        },
      };
    e.exports = k;
  },
  null
);
__d(
  "createCancelableFunction",
  ["emptyFunction"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a;
      a = function () {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
          c[d] = arguments[d];
        return b.apply(this, c);
      };
      a.cancel = function () {
        b = c("emptyFunction");
      };
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "RunComet",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "recoverableViolation",
    "setTimeout",
    "unexpectedUseInComet",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = !1,
      j = !1,
      k = { remove: c("emptyFunction") };
    function l(a, b) {
      h.unload == null &&
        ((h.unload = []),
        (h.afterunload = []),
        c("ExecutionEnvironment").canUseEventListeners &&
          window.addEventListener("unload", function () {
            o("unload"), o("afterunload");
          })),
        h[a] == null
          ? (c("recoverableViolation")(
              "EVENT_LISTENERS." +
                a +
                " wasn't initialized but should have been!",
              "comet_infra"
            ),
            (h[a] = [b]))
          : h[a].push(b);
    }
    function m(a) {
      a ||
        c("recoverableViolation")(
          "Undefined event listener handler is not allowed",
          "comet_infra"
        );
      return c("createCancelableFunction")(
        (a = a) != null ? a : c("emptyFunction")
      );
    }
    function n(a) {
      return {
        remove: function () {
          a.cancel();
        },
      };
    }
    function o(a) {
      var b = h[a] || [];
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        try {
          e();
        } catch (b) {
          c("FBLogger")("comet_infra")
            .catching(b)
            .mustfix(
              "Hit an error while executing '" + a + "' event listeners."
            );
        }
      }
      h[a] = [];
    }
    function p(a) {
      if (i) {
        a();
        return n(m(c("emptyFunction")));
      }
      a = m(a);
      h.domcontentloaded == null
        ? ((h.domcontentloaded = [a]),
          c("ExecutionEnvironment").canUseEventListeners &&
            window.addEventListener(
              "DOMContentLoaded",
              function () {
                o("domcontentloaded");
              },
              !0
            ))
        : h.domcontentloaded.push(a);
      return n(a);
    }
    function a(a) {
      a = m(a);
      l("afterunload", a);
      return n(a);
    }
    function b(a) {
      a = m(a);
      h.load == null
        ? ((h.load = [a]),
          c("ExecutionEnvironment").canUseEventListeners &&
            window.addEventListener("load", function () {
              o("domcontentloaded"), o("load");
            }))
        : h.load.push(a);
      j &&
        c("setTimeout")(function () {
          o("domcontentloaded"), o("load");
        }, 0);
      return n(a);
    }
    function d(a) {
      a = m(a);
      l("unload", a);
      return n(a);
    }
    function e(a, b) {
      if (b !== !1) {
        b =
          "Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";
        c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b);
      }
      b = m(a);
      h.beforeunload == null &&
        ((h.beforeunload = []),
        c("ExecutionEnvironment").canUseEventListeners &&
          window.addEventListener("beforeunload", function (a) {
            var b = h.beforeunload || [];
            for (
              var b = b,
                d = Array.isArray(b),
                e = 0,
                b = d
                  ? b
                  : b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var f;
              if (d) {
                if (e >= b.length) break;
                f = b[e++];
              } else {
                e = b.next();
                if (e.done) break;
                f = e.value;
              }
              f = f;
              var g = void 0;
              try {
                g = f();
              } catch (a) {
                c("FBLogger")("comet_infra")
                  .catching(a)
                  .mustfix(
                    "Hit an error while executing onBeforeUnload event listeners."
                  );
              }
              if (g !== void 0) {
                g != null && g.body != null && (g = g.body);
                a.preventDefault();
                a.returnValue = g;
                return g;
              }
            }
          }));
      h.beforeunload.push(b);
      return n(b);
    }
    var q = e;
    function f(a) {
      c("unexpectedUseInComet")("Run.onLeave");
      return k;
    }
    function r(a, b) {
      c("unexpectedUseInComet")("Run.onCleanupOrLeave");
      return k;
    }
    function s(a) {
      c("unexpectedUseInComet")("Run.removeHook");
    }
    function t() {
      document.readyState === "loading"
        ? p(function () {
            i = !0;
          })
        : (i = !0);
      if (document.readyState === "complete") j = !0;
      else {
        var a = window.onload;
        window.onload = function () {
          a && a(), (j = !0);
        };
      }
    }
    c("ExecutionEnvironment").canUseDOM && t();
    t = null;
    var u = null;
    g.onLoad = p;
    g.onAfterUnload = a;
    g.onAfterLoad = b;
    g.onUnload = d;
    g.onBeforeUnload = e;
    g.maybeOnBeforeUnload = q;
    g.onLeave = f;
    g.onCleanupOrLeave = r;
    g.__removeHook = s;
    g.__domContentCallback = t;
    g.__onloadCallback = u;
  },
  98
);
__d(
  "IntervalTrackingBoundedBuffer",
  ["CircularBuffer", "ErrorPubSub"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3;
    a = (function () {
      function a(a) {
        var b = this;
        this.$6 = 0;
        if (a != null) {
          if (a <= 0)
            throw new Error("Size for a buffer must be greater than zero.");
        } else a = h;
        this.$4 = a;
        this.$1 = new (c("CircularBuffer"))(a);
        this.$1.onEvict(function () {
          b.$6++;
        });
        this.$2 = [];
        this.$3 = 1;
        this.$5 = 0;
      }
      var b = a.prototype;
      b.open = function () {
        var a = this,
          b = this.$3++,
          c = !1,
          d,
          e = this.$5,
          f = {
            id: b,
            startIdx: e,
            hasOverflown: function () {
              return f.getOverflowSize() > 0;
            },
            getOverflowSize: function () {
              return d != null ? d : Math.max(a.$6 - e, 0);
            },
            close: function () {
              if (c) return [];
              else {
                c = !0;
                d = a.$6 - e;
                return a.$7(b);
              }
            },
          };
        this.$2.push(f);
        return f;
      };
      b.pushElement = function (a) {
        this.$2.length > 0 && (this.$1.write(a), this.$5++);
        return this;
      };
      b.isActive = function () {
        return this.$2.length > 0;
      };
      b.$8 = function (a) {
        return Math.max(a - this.$6, 0);
      };
      b.$7 = function (a) {
        var b, d, e, f;
        for (var g = 0; g < this.$2.length; g++) {
          var h = this.$2[g],
            i = h.startIdx;
          h = h.id;
          h === a ? ((e = g), (f = i)) : (d == null || i < d) && (d = i);
          (b == null || i < b) && (b = i);
        }
        if (e == null || b == null || f == null) {
          c("ErrorPubSub").reportError(
            new Error("messed up state inside IntervalTrackingBoundedBuffer")
          );
          return [];
        }
        this.$2.splice(e, 1);
        h = this.$8(f);
        i = this.$1.read().slice(h);
        g = this.$8(d == null ? this.$5 : d) - this.$8(b);
        g > 0 && (this.$1.dropFirst(g), (this.$6 += g));
        return i;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TimeSliceSham",
  ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"],
  function (a, b, c, d, e, f) {
    var g, h;
    c = (g || b("Env")).timesliceBufferSize;
    c == null && (c = 5e3);
    var i = new (b("IntervalTrackingBoundedBuffer"))(c),
      j = {
        PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
        guard: function (a, c) {
          return (h || (h = b("ErrorGuard"))).guard(a, {
            name: "TimeSlice" + (c ? ": " + c : ""),
          });
        },
        copyGuardForWrapper: function (a, b) {
          return a;
        },
        checkCoverage: function () {},
        setLogging: function (a, b) {},
        getContext: function () {
          return null;
        },
        getGuardedContinuation: function (a) {
          function a(a) {
            for (
              var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
              d < b;
              d++
            )
              c[d - 1] = arguments[d];
            return a.apply(this, c);
          }
          return a;
        },
        getReusableContinuation: function (a) {
          return j.getPlaceholderReusableContinuation();
        },
        getPlaceholderReusableContinuation: function () {
          var a = function (a) {
            return a();
          };
          a.last = a;
          return a;
        },
        getGuardNameStack: function () {
          return [];
        },
        registerExecutionContextObserver: function (a) {},
        catchUpOnDemandExecutionContextObservers: function (a) {},
        getBuffer: function () {
          return i;
        },
      };
    a.TimeSlice = j;
    e.exports = j;
  },
  6
);
__d(
  "setTimeoutCometInternals",
  ["JSScheduler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = 0;
    function a(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h["delete"](a),
          d("JSScheduler").cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function b(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h["delete"](a),
          d("JSScheduler").cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function c(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== "function") return j;
      var k = function e() {
          var g = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, c, e);
          h.set(j, g);
          b.apply(void 0, f);
        },
        l = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, c, k);
      h.set(j, l);
      return j;
    }
    function e(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== "function") return j;
      var k = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(
        a,
        c,
        function () {
          h["delete"](j), b.apply(void 0, f);
        }
      );
      h.set(j, k);
      return j;
    }
    g.clearInterval_DO_NOT_USE = a;
    g.clearTimeout_DO_NOT_USE = b;
    g.setIntervalAtPriority_DO_NOT_USE = c;
    g.setTimeoutAtPriority_DO_NOT_USE = e;
  },
  98
);
__d(
  "clearIntervalComet",
  ["setTimeoutCometInternals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("setTimeoutCometInternals").clearInterval_DO_NOT_USE;
  },
  98
);
__d(
  "clearTimeoutComet",
  ["setTimeoutCometInternals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("setTimeoutCometInternals").clearTimeout_DO_NOT_USE;
  },
  98
);
__d(
  "setIntervalComet",
  ["JSScheduler", "setTimeoutCometInternals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c =
        d("JSScheduler").getCurrentPriorityLevel() ===
        d("JSScheduler").priorities.unstable_Idle
          ? d("JSScheduler").priorities.unstable_Idle
          : d("JSScheduler").priorities.unstable_Low;
      for (
        var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
        g < e;
        g++
      )
        f[g - 2] = arguments[g];
      return d(
        "setTimeoutCometInternals"
      ).setIntervalAtPriority_DO_NOT_USE.apply(
        d("setTimeoutCometInternals"),
        [c, a, b].concat(f)
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "setTimeoutComet",
  ["JSScheduler", "setTimeoutCometInternals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c =
        d("JSScheduler").getCurrentPriorityLevel() ===
        d("JSScheduler").priorities.unstable_Idle
          ? d("JSScheduler").priorities.unstable_Idle
          : d("JSScheduler").priorities.unstable_Low;
      for (
        var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
        g < e;
        g++
      )
        f[g - 2] = arguments[g];
      return d(
        "setTimeoutCometInternals"
      ).setTimeoutAtPriority_DO_NOT_USE.apply(
        d("setTimeoutCometInternals"),
        [c, a, b].concat(f)
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometPreludeCriticalRequireConds",
  [
    "JSScheduler",
    "RunComet",
    "TimeSliceSham",
    "clearIntervalComet",
    "clearTimeoutComet",
    "setIntervalComet",
    "setTimeoutComet",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    b("JSScheduler"),
      b("TimeSliceSham"),
      b("RunComet"),
      b("clearIntervalComet"),
      b("clearTimeoutComet"),
      b("setIntervalComet"),
      b("setTimeoutComet");
  },
  null
);
__d(
  "CometResourceScheduler",
  ["Bootloader", "ErrorGuard"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(),
      i = new Set(),
      j = [];
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        i.has(d) || (i.add(d), b.push(d));
      }
      b.length && k(b);
    }
    function b(a) {
      j.push(a), h.size === 0 && l();
    }
    function k(a) {
      a.forEach(function (a) {
        return h.add(a);
      }),
        c("Bootloader").loadResources(a, {
          onAll: function () {
            a.forEach(function (a) {
              return h["delete"](a);
            });
            if (h.size) return;
            l();
          },
        });
    }
    function l() {
      var a = j;
      j = [];
      a.forEach(function (a) {
        return c("ErrorGuard").applyWithGuard(a, null, []);
      });
    }
    g.registerHighPriHashes = a;
    g.onHighPriComplete = b;
  },
  98
);
__d(
  "nowServerJS",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      var a = window.performance;
      return a && a.now && a.timing && a.timing.navigationStart
        ? a.now() + a.timing.navigationStart
        : new Date().getTime();
    }
    f["default"] = a;
  },
  66
);
__d(
  "qplTimingsServerJS",
  ["nowServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function a(a, b, d) {
      if (a == null) return h;
      h[a] == null && (h[a] = {});
      if (b != null) {
        h[a][b] = (a = d) != null ? a : c("nowServerJS")();
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRFizzContentInjector",
  ["FBLogger", "qplTimingsServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = function () {},
      j = { total: 0 },
      k = !1,
      l = null,
      m = !1,
      n = [],
      o = [],
      p = null;
    function q(a) {
      if (r()) return;
      k = !0;
      D.emitOnce("FIRSTPAYLOADINJECTED", !1);
      C(a, "ERROR");
    }
    function r() {
      return (!!l && l.status === "ERROR") || k;
    }
    function s() {
      if (h == null)
        return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
      q(h.disabled_status);
    }
    function a() {
      return o;
    }
    function t(a) {
      if (h == null)
        return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
      c("qplTimingsServerJS")(h.cavalry_get_lid, a);
    }
    function u(a) {
      v(a) || q("Checks for useMatchViewport failed");
    }
    function v(a) {
      return !window.matchMedia
        ? !1
        : a.every(function (a) {
            var b = a.dimension,
              c = a.numPixels,
              d = a.operation;
            a = a.result;
            d = w(d, b, c);
            return window.matchMedia(d).matches === a;
          });
    }
    function w(a, b, c) {
      return "(" + a + "-" + b + ": " + c + "px)";
    }
    function x(a, b) {
      if (r()) return;
      var d = a[0];
      if (!d) {
        q("Empty SSR payload received");
        return;
      }
      o.push({ boundaryPayloads: a, debug: b });
      if (h == null)
        return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
      n.push.apply(n, a);
      y(a);
      b = d.fizzRootId;
      a = d.payloadType;
      var e = d.status;
      if (b === null || !a || e !== h.success_status) {
        if (
          e === h.disabled_status ||
          e === h.bad_preloaders_status ||
          e === h.unknown_boundaries_status
        ) {
          s();
          return;
        }
        q("Error processing SSR payload " + (d.id || "Global") + ": " + e);
        return;
      }
      a === "FIRST"
        ? (z(b || ""), (m = !0))
        : a === "LAST" &&
          (m || z(b || ""),
          t("ssr_injected"),
          t("ssr_inline_injector_ready"),
          C("", "INJECTED"));
    }
    function y(a) {
      a.forEach(function (a) {
        t("ssr_received_" + (a.id || "global_failure"));
      });
    }
    function z(a) {
      if (h == null || p == null)
        return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
      while ((b = p) == null ? void 0 : b.firstChild) {
        var b;
        ((b = p) == null ? void 0 : b.lastChild) &&
          p.removeChild((b = p) == null ? void 0 : b.lastChild);
      }
      b = document.getElementById(a);
      if (p && b) {
        a = b.childNodes;
        while (a.length) {
          if (h == null || p == null)
            return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
          p.appendChild(a[0]);
        }
        b.remove();
      }
      if (h == null || p == null)
        return c("FBLogger")("comet_ssr").mustfix("Fizz init did NOT run");
      h.gks.comet_ssr_wait_for_dev || A();
    }
    function A() {
      D.emitOnce("FIRSTPAYLOADINJECTED", !0);
    }
    function B(a) {
      a.style.display = "none";
    }
    function C(a, b) {
      var c;
      window.__onSSRPayload = i;
      window.__onSSRViewportGuessValidation = i;
      ((c = h) == null ? void 0 : c.gks.comet_ssr_wait_for_dev) || A();
      l = {
        clickEvents: j,
        msg: a,
        processedPayloads: n,
        status: b,
        unbindListeners: i,
      };
      D.emitOnce("ALLPAYLOADSINJECTED", l);
    }
    function b(a) {
      h = a;
      p = document.getElementById(a.eid);
      var b = ["success_status", "ROOT", "eid"].filter(function (b) {
        return !a[b];
      });
      b.length > 0 &&
        q("Error receiving SSRData: missing keys " + b.toString());
      p
        ? a.gks.mwp_ssr_enabled
          ? B(p)
          : s()
        : q("Error locating root element: " + a.eid);
      window.__isReactFizzContext = !0;
      window.__onSSRPayload = x;
      window.__SSREventEmitter = D;
      window.__invalidateSSR = q;
      window.__logSSRQPL = t;
      window.__onSSRViewportGuessValidation = u;
      window.__shouldIgnoreSSRStaticId = a.should_ignore_static_id;
      a.gks.comet_ssr_wait_for_dev &&
        (window.__comet_ssr_continue = function () {
          A();
        });
      typeof window.requireLazy === "function" &&
        window.requireLazy(["ReactDOMComet"], function (a) {
          t("ssr_reactdom_ready");
        });
    }
    var D = {
      emit: function (a, b) {
        D.events[a] &&
          D.events[a].map(function (a) {
            return a && typeof a === "function" && a(b);
          }),
          (D.eventsEmitted[a] = { args: b });
      },
      emitOnce: function (a, b) {
        a in D.eventsEmitted || D.emit(a, b);
      },
      events: {},
      eventsEmitted: {},
      on: function (a, b) {
        var c = D.eventsEmitted[a];
        if (c) {
          b && typeof b === "function" && b(c.args);
          return;
        }
        !D.events[a] ? (D.events[a] = [b]) : D.events[a].push(b);
      },
    };
    function d(a) {
      window.__onSSRError && window.__onSSRError(a);
    }
    function e(a) {
      window.__SSRFailJestOnError && window.__SSRFailJestOnError(a);
    }
    function f() {
      (window.__receivedSSRErrors = window.__receivedSSRErrors || []),
        (window.__onSSRError =
          window.__onSSRError ||
          function (a) {
            window.__receivedSSRErrors.push(a);
          });
    }
    g.getSSRBoundaryPayloadsDebugInfo = a;
    g.logQPLPoint = t;
    g.onViewportGuessValidation = u;
    g.onPayloadReceived = x;
    g.ssrInit = b;
    g.onSSRError = d;
    g.onSSRFailJestOnError = e;
    g.injectOnSSRErrorHandlerDefaultOnWindow = f;
  },
  98
);
__d(
  "CometSSRReactArrMethods",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c) {
      b = document.getElementById(b);
      b.parentNode.removeChild(b);
      var d = document.getElementById(a);
      if (d) {
        a = d.previousSibling;
        if (c) (a.data = "$!"), d.setAttribute("data-dgst", c);
        else {
          c = a.parentNode;
          d = a.nextSibling;
          var e = 0;
          do {
            if (d && 8 === d.nodeType) {
              var f = d.data;
              if ("/$" === f)
                if (0 === e) break;
                else e--;
              else ("$" !== f && "$?" !== f && "$!" !== f) || e++;
            }
            f = d.nextSibling;
            c.removeChild(d);
            d = f;
          } while (d);
          for (; b.firstChild; ) c.insertBefore(b.firstChild, d);
          a.data = "$";
        }
        a._reactRetry && a._reactRetry();
      }
    };
    b = function (a, b, c, d) {
      var e = document.getElementById(a);
      e &&
        ((a = e.previousSibling),
        (a.data = "$!"),
        (e = e.dataset),
        b && (e.dgst = b),
        c && (e.msg = c),
        d && (e.stck = d),
        a._reactRetry && a._reactRetry());
    };
    c = function (a, b) {
      a = document.getElementById(a);
      b = document.getElementById(b);
      for (a.parentNode.removeChild(a); a.firstChild; )
        b.parentNode.insertBefore(a.firstChild, b);
      b.parentNode.removeChild(b);
    };
    f.$RC = a;
    f.$RX = b;
    f.$RS = c;
  },
  66
);
__d(
  "DeferredJSResourceScheduler",
  ["Bootloader", "CometResourceScheduler", "JSScheduler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      d("CometResourceScheduler").onHighPriComplete(function () {
        c("JSScheduler").scheduleLoggingPriCallback(function () {
          c("Bootloader").loadResources(a);
        });
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "unstable_server-external-runtime",
  ["Promise"],
  function (a, b, c, d, e, f) {
    (function () {
      function a(a, b, c) {
        b = document.getElementById(b);
        b.parentNode.removeChild(b);
        var d = document.getElementById(a);
        if (d) {
          a = d.previousSibling;
          if (c) (a.data = "$!"), d.setAttribute("data-dgst", c);
          else {
            c = a.parentNode;
            d = a.nextSibling;
            var e = 0;
            do {
              if (d && 8 === d.nodeType) {
                var f = d.data;
                if ("/$" === f)
                  if (0 === e) break;
                  else e--;
                else ("$" !== f && "$?" !== f && "$!" !== f) || e++;
              }
              f = d.nextSibling;
              c.removeChild(d);
              d = f;
            } while (d);
            for (; b.firstChild; ) c.insertBefore(b.firstChild, d);
            a.data = "$";
          }
          a._reactRetry && a._reactRetry();
        }
      }
      function c(c, d, e) {
        for (
          var f = new Map(),
            h = document,
            i,
            j,
            k = h.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            l = [],
            m = 0;
          (j = k[m++]);

        )
          "not all" === j.getAttribute("media")
            ? l.push(j)
            : ("LINK" === j.tagName && g.set(j.getAttribute("href"), j),
              f.set(j.dataset.precedence, (i = j)));
        j = 0;
        k = [];
        var n, o;
        for (m = !0; ; ) {
          if (m) {
            var p = e[j++];
            if (!p) {
              m = !1;
              j = 0;
              continue;
            }
            var q = !1,
              r = 0,
              s = p[r++];
            if ((o = g.get(s))) {
              var t = o._p;
              q = !0;
            } else {
              o = h.createElement("link");
              o.href = s;
              o.rel = "stylesheet";
              for (o.dataset.precedence = n = p[r++]; (t = p[r++]); )
                o.setAttribute(t, p[r++]);
              t = o._p = new (b("Promise"))(function (a, b) {
                (o.onload = a), (o.onerror = b);
              });
              g.set(s, o);
            }
            s = o.getAttribute("media");
            !t ||
              "l" === t.s ||
              (s && !window.matchMedia(s).matches) ||
              k.push(t);
            if (q) continue;
          } else {
            o = l[j++];
            if (!o) break;
            n = o.getAttribute("data-precedence");
            o.removeAttribute("media");
          }
          q = f.get(n) || i;
          q === i && (i = o);
          f.set(n, o);
          q
            ? q.parentNode.insertBefore(o, q.nextSibling)
            : ((q = h.head), q.insertBefore(o, q.firstChild));
        }
        b("Promise")
          .all(k)
          .then(
            a.bind(null, c, d, ""),
            a.bind(null, c, d, "Resource failed to load")
          );
      }
      function d(a) {
        a = a.querySelectorAll("template");
        for (var b = 0; b < a.length; b++) f(a[b]);
      }
      function e(a) {
        function b(a) {
          for (var b = 0; b < a.length; b++)
            for (var c = a[b].addedNodes, d = 0; d < c.length; d++)
              c[d].parentNode && f(c[d]);
        }
        var c = new MutationObserver(b);
        c.observe(a, { childList: !0 });
        window.addEventListener("DOMContentLoaded", function () {
          b(c.takeRecords()), c.disconnect();
        });
      }
      function f(b) {
        if (1 === b.nodeType && b.dataset) {
          var d = b.dataset;
          if (null != d.rxi) {
            var e = d.dgst,
              f = d.msg,
              g = d.stck,
              h = document.getElementById(d.bid);
            h &&
              ((d = h.previousSibling),
              (d.data = "$!"),
              (h = h.dataset),
              e && (h.dgst = e),
              f && (h.msg = f),
              g && (h.stck = g),
              d._reactRetry && d._reactRetry());
            b.remove();
          } else if (null != d.rri)
            c(d.bid, d.sid, JSON.parse(d.sty)), b.remove();
          else if (null != d.rci) a(d.bid, d.sid), b.remove();
          else if (null != d.rsi) {
            e = d.pid;
            f = document.getElementById(d.sid);
            e = document.getElementById(e);
            for (f.parentNode.removeChild(f); f.firstChild; )
              e.parentNode.insertBefore(f.firstChild, e);
            e.parentNode.removeChild(e);
            b.remove();
          }
        }
      }
      var g = new Map();
      window.$RC || ((window.$RC = a), (window.$RM = new Map()));
      if (null != document.body)
        "loading" === document.readyState && e(document.body), d(document.body);
      else {
        var h = new MutationObserver(function () {
          null != document.body &&
            ("loading" === document.readyState && e(document.body),
            d(document.body),
            h.disconnect());
        });
        h.observe(document.documentElement, { childList: !0 });
      }
    })();
  },
  null
);
__d(
  "ReactDOMServerExternalRuntime",
  ["ExecutionEnvironment", "unstable_server-external-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("ExecutionEnvironment").canUseDOM &&
      b("unstable_server-external-runtime");
  },
  35
);
__d(
  "Run",
  ["cr:925100"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g.__domContentCallback = (a = b("cr:925100")).__domContentCallback;
    g.__onloadCallback = a.__onloadCallback;
    g.__removeHook = a.__removeHook;
    g.onAfterLoad = a.onAfterLoad;
    g.onAfterUnload = a.onAfterUnload;
    g.onBeforeUnload = a.onBeforeUnload;
    g.maybeOnBeforeUnload = a.maybeOnBeforeUnload;
    g.onCleanupOrLeave = a.onCleanupOrLeave;
    g.onLeave = a.onLeave;
    g.onLoad = a.onLoad;
    g.onUnload = a.onUnload;
  },
  98
);
__d(
  "ScheduledApplyEach",
  ["JSScheduler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      return a.map(function (a) {
        d("JSScheduler").deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
          function () {
            b.apply(c, a);
          }
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ScheduledServerJS",
  ["JSScheduler", "ScheduledApplyEach", "ServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      b != null && new (c("ServerJS"))().handle(b),
        d("JSScheduler").runWithPriority(
          d("JSScheduler").priorities.unstable_Normal,
          function () {
            e != null && new (c("ServerJS"))().handle(e),
              new (c("ServerJS"))().handleWithCustomApplyEach(
                c("ScheduledApplyEach"),
                a
              );
          }
        );
    }
    g.handle = a;
  },
  98
);
__d(
  "ScheduledServerJSDefine",
  ["JSScheduler", "ServerJSDefine"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a.forEach(function (a) {
        var e = a;
        b != null && (e = [].concat(a, [b]));
        d("JSScheduler").deferUserBlockingRunAtCurrentPri_DO_NOT_USE(
          function () {
            c("ServerJSDefine").handleDefine.apply(null, e);
          }
        );
      });
    }
    g.handleDefines = a;
  },
  98
);
__d(
  "ScheduledServerJSWithCSS",
  ["Bootloader", "Env", "JSScheduler", "ScheduledServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, e, f) {
      return function () {
        c("Bootloader").loadResources(f, {
          onAll: function () {
            d("ScheduledServerJS").handle(a, b, e);
          },
        });
      };
    }
    function a(a, b, d, e) {
      a = h(a, b, d, e);
      e.length > 0 &&
        (c("Env").scheduledCSSJSScheduler === !0
          ? c("JSScheduler").scheduleImmediatePriCallback(a)
          : a());
    }
    g.handle = a;
  },
  98
);
__d(
  "performanceNavigationStart",
  ["performance"],
  function (a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now)
      if (
        (g || (g = b("performance"))).timing &&
        (g || (g = b("performance"))).timing.navigationStart
      )
        a = function () {
          return (g || (g = b("performance"))).timing.navigationStart;
        };
      else {
        if (typeof window._cstart === "number")
          a = function () {
            return window._cstart;
          };
        else {
          var h = Date.now();
          a = function () {
            return h;
          };
        }
        a.isPolyfilled = !0;
      }
    else
      (a = function () {
        return 0;
      }),
        (a.isPolyfilled = !0);
    e.exports = a;
  },
  null
);
__d(
  "bootstrapWebSession",
  ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = c("performanceNavigationStart")() || a;
      return Number.isInteger(a) ? a : null;
    }
    var i = !1;
    function a(a) {
      if (i === !0) return;
      i = !0;
      a = h(a);
      a != null &&
        a > 0 &&
        d("WebSession").extend(a + c("WebSessionDefaultTimeoutMs"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "qplTagServerJS",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function a(a) {
      if (a == null) return g;
      g.push(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "injectQPLTagsServerJSIntoWindow",
  ["qplTagServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      window.qpl_tag = c("qplTagServerJS");
    }
    g.injectQPLTagsServerJSIntoWindow = a;
  },
  98
);
__d(
  "injectQPLTimingsServerJSIntoWindow",
  ["qplTimingsServerJS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      window.qpl_inl = c("qplTimingsServerJS");
    }
    g.injectQPLTimingsServerJSIntoWindow = a;
  },
  98
);
__d(
  "cx",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error("cx: Unexpected class transformation.");
    }
    f["default"] = a;
  },
  66
);
__d(
  "shouldDisableAnimations",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 4;
    function a() {
      return (
        navigator != null &&
        navigator.hardwareConcurrency != null &&
        navigator.hardwareConcurrency < g
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "maybeDisableAnimations",
  ["cx", "shouldDisableAnimations"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      if (c("shouldDisableAnimations")()) {
        var a;
        (a = document.documentElement) == null
          ? void 0
          : a.classList.add("_8ykn");
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "cancelAnimationFramePolyfill",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b =
      a.__fbNativeCancelAnimationFrame ||
      a.cancelAnimationFrame ||
      a.webkitCancelAnimationFrame ||
      a.mozCancelAnimationFrame ||
      a.oCancelAnimationFrame ||
      a.msCancelAnimationFrame ||
      a.clearTimeout;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "cancelAnimationFrame",
  ["cancelAnimationFramePolyfill"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      c("cancelAnimationFramePolyfill")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "TimerStorage",
  [],
  function (a, b, c, d, e, f) {
    a = {
      ANIMATION_FRAME: "ANIMATION_FRAME",
      IDLE_CALLBACK: "IDLE_CALLBACK",
      IMMEDIATE: "IMMEDIATE",
      INTERVAL: "INTERVAL",
      TIMEOUT: "TIMEOUT",
    };
    var g = {};
    Object.keys(a).forEach(function (a) {
      return (g[a] = {});
    });
    b = babelHelpers["extends"]({}, a, {
      set: function (a, b) {
        g[a][b] = !0;
      },
      unset: function (a, b) {
        delete g[a][b];
      },
      clearAll: function (a, b) {
        Object.keys(g[a]).forEach(b), (g[a] = {});
      },
      getStorages: function () {
        return {};
      },
    });
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "requestAnimationFrameAcrossTransitions",
  ["TimeSlice", "requestAnimationFramePolyfill"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      a = c("TimeSlice").guard(a, "requestAnimationFrame", {
        propagationType: c("TimeSlice").PropagationType.CONTINUATION,
      });
      return c("requestAnimationFramePolyfill")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "requestAnimationFrame",
  ["TimeSlice", "TimerStorage", "requestAnimationFrameAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      function b(b) {
        c("TimerStorage").unset(c("TimerStorage").ANIMATION_FRAME, d), a(b);
      }
      c("TimeSlice").copyGuardForWrapper(a, b);
      b.__originalCallback = a;
      var d = c("requestAnimationFrameAcrossTransitions")(b);
      c("TimerStorage").set(c("TimerStorage").ANIMATION_FRAME, d);
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "setInterval",
  ["cr:896461"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:896461");
  },
  98
);
__d(
  "replaceNativeTimer",
  [
    "cancelAnimationFrame",
    "clearInterval",
    "clearTimeout",
    "requestAnimationFrame",
    "setInterval",
    "setTimeout",
  ],
  function (a, b, c, d, e, f) {
    a.__fbNativeSetTimeout = a.setTimeout;
    a.__fbNativeClearTimeout = a.clearTimeout;
    a.__fbNativeSetInterval = a.setInterval;
    a.__fbNativeClearInterval = a.clearInterval;
    a.__fbNativeRequestAnimationFrame = a.requestAnimationFrame;
    a.__fbNativeCancelAnimationFrame = a.cancelAnimationFrame;
    b("setTimeout").nativeBackup = a.setTimeout;
    b("clearTimeout").nativeBackup = a.clearTimeout;
    b("setInterval").nativeBackup = a.setInterval;
    b("clearInterval").nativeBackup = a.clearInterval;
    b("requestAnimationFrame").nativeBackup = a.requestAnimationFrame;
    b("cancelAnimationFrame").nativeBackup = a.cancelAnimationFrame;
    a.setTimeout = b("setTimeout");
    a.clearTimeout = b("clearTimeout");
    a.setInterval = b("setInterval");
    a.clearInterval = b("clearInterval");
    a.requestAnimationFrame = b("requestAnimationFrame");
    a.cancelAnimationFrame = b("cancelAnimationFrame");
    function c() {}
    e.exports = c;
  },
  null
);
__d(
  "CometPreludeCritical",
  [
    "Bootloader",
    "CometPreludeCriticalRequireConds",
    "CometResourceScheduler",
    "CometSSRFizzContentInjector",
    "CometSSRReactArrMethods",
    "DeferredJSResourceScheduler",
    "Env",
    "HasteResponse",
    "HasteSupportData",
    "JSScheduler",
    "ReactDOMServerExternalRuntime",
    "Run",
    "ScheduledApplyEach",
    "ScheduledServerJS",
    "ScheduledServerJSDefine",
    "ScheduledServerJSWithCSS",
    "ServerJS",
    "bootstrapWebSession",
    "injectQPLTagsServerJSIntoWindow",
    "injectQPLTimingsServerJSIntoWindow",
    "maybeDisableAnimations",
    "qplTagServerJS",
    "qplTimingsServerJS",
    "replaceNativeTimer",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    b("Bootloader");
    b("CometPreludeCriticalRequireConds");
    b("CometResourceScheduler");
    b("DeferredJSResourceScheduler");
    g || (g = b("Env"));
    b("HasteResponse");
    b("HasteSupportData");
    b("JSScheduler");
    b("Run");
    b("ScheduledApplyEach");
    b("ScheduledServerJS");
    b("ScheduledServerJSWithCSS");
    b("ScheduledServerJSDefine");
    b("ServerJS");
    b("bootstrapWebSession");
    b("replaceNativeTimer");
    b("qplTimingsServerJS");
    b("qplTagServerJS");
    b("injectQPLTagsServerJSIntoWindow");
    b("injectQPLTimingsServerJSIntoWindow");
    b("maybeDisableAnimations");
    b("CometSSRFizzContentInjector");
    b("CometSSRReactArrMethods");
    b("ReactDOMServerExternalRuntime");
  },
  null
);
__d(
  "ErrorGuardState",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuardState;
  },
  98
);
__d(
  "ErrorNormalizeUtils",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorNormalizeUtils;
  },
  98
);
__d(
  "ErrorSerializer",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSerializer;
  },
  98
);
__d(
  "ErrorUtils",
  [
    "ErrorGuard",
    "ErrorGuardState",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "ErrorSerializer",
    "getErrorSafe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    h || b("ErrorGuardState");
    b("ErrorNormalizeUtils");
    i || (i = b("ErrorPubSub"));
    b("getErrorSafe");
    j || (j = b("ErrorGuard"));
    b("ErrorSerializer");
    a.getErrorSafe = c("getErrorSafe");
    a.ErrorGuard = c("ErrorGuard");
    a.ErrorSerializer = c("ErrorSerializer");
    d = {
      history: c("ErrorPubSub").history,
      applyWithGuard: function (a, b, d, e, f, g) {
        return c("ErrorGuard").applyWithGuard(a, b, (a = d) != null ? a : [], {
          name: f,
          onNormalizedError: e,
          deferredSource: g == null ? void 0 : g.deferredSource,
        });
      },
      guard: function (a, b, d) {
        a = c("ErrorGuard").guard(a, b != null ? { name: b } : null);
        d != null && (a = a.bind(d));
        return a;
      },
      normalizeError: function (a) {
        var b;
        return (b = c("ErrorNormalizeUtils").ifNormalizedError(a)) != null
          ? b
          : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(a));
      },
    };
    a.ErrorUtils = d;
    e = d;
    typeof __t === "function" &&
      __t.setHandler &&
      __t.setHandler(c("ErrorPubSub").reportError);
    g["default"] = e;
  },
  99
);
__d(
  "queueRemovableDOMElements",
  ["ifRequired"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [];
    function a() {
      return h;
    }
    function b() {
      h = [];
    }
    function d(a) {
      c("ifRequired")(
        "maybeRemoveElement",
        function (b) {
          b.maybeRemoveServerJSScriptElement(a);
        },
        function () {
          h.push(a);
        }
      );
    }
    g.getCurrentQueue = a;
    g.clearQueue = b;
    g.queueRemovableServerJSPayload = d;
  },
  98
);
__d(
  "ServerJSPayloadListener",
  ["FBLogger", "ServerJS", "err", "queueRemovableDOMElements"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
      i = 5e3;
    function j(a) {
      h.push(a);
    }
    function k() {
      return h.shift();
    }
    function l(a) {
      h.unshift(a), window.setTimeout(m, 20);
    }
    function m() {
      var a;
      while ((a = k()) != null)
        if (a.dataset instanceof window.DOMStringMap) {
          var b = "sjs" in a.dataset;
          if (b) {
            b = a.dataset.contentLen;
            if (a.textContent.length.toString() !== b) {
              if (i >= 1) {
                i -= 1;
                l(a);
                return;
              }
              c("FBLogger")("serverjs_listener")
                .addMetadata(
                  "COMET_INFRA",
                  "SIZE",
                  a.textContent.length.toString()
                )
                .mustfix(
                  "ServerJS based data-sjs payload content length mismatch"
                );
            }
            b = null;
            try {
              b = JSON.parse(a.textContent);
              if (b == null)
                throw c("err")(
                  "ServerJS payload marked with data-sjs was parsed as null"
                );
              new (c("ServerJS"))().handle(b);
              d("queueRemovableDOMElements").queueRemovableServerJSPayload(a);
            } catch (a) {
              c("FBLogger")("serverjs_listener")
                .catching(a)
                .mustfix(
                  "ServerJS based data-sjs payload failed to parse and execute."
                );
            }
          }
          i = 5e3;
        }
    }
    function n(a) {
      try {
        if (
          a.nodeType !== Node.ELEMENT_NODE ||
          a.nodeName !== "SCRIPT" ||
          a.ownerDocument !== document ||
          !(a.dataset instanceof window.DOMStringMap)
        )
          return;
      } catch (a) {
        return;
      }
      var b = "sjs" in a.dataset;
      b && (j(a), m());
    }
    function b() {
      if (a.document == null) return;
      Array.from(document.getElementsByTagName("script")).forEach(function (a) {
        return n(a);
      });
      var b = new MutationObserver(function (a, b) {
        a.forEach(function (a) {
          a.type === "childList" &&
            Array.from(a.addedNodes).forEach(function (a) {
              n(a);
            });
        });
      });
      b.observe(document.getElementsByTagName("html")[0], {
        attributes: !1,
        childList: !0,
        subtree: !0,
      });
    }
    b();
  },
  35
);
__d(
  "Visibility",
  ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"],
  function (a, b, c, d, e, f, g) {
    var h, i;
    c("ExecutionEnvironment").canUseDOM &&
      (document.hidden !== void 0
        ? ((h = "hidden"), (i = "visibilitychange"))
        : document.mozHidden !== void 0
        ? ((h = "mozHidden"), (i = "mozvisibilitychange"))
        : document.msHidden !== void 0
        ? ((h = "msHidden"), (i = "msvisibilitychange"))
        : document.webkitHidden !== void 0 &&
          ((h = "webkitHidden"), (i = "webkitvisibilitychange")));
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.HIDDEN = "hidden"),
          (c.VISIBLE = "visible"),
          (c.hiddenKey = h),
          (c.hiddenEvent = i),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.isHidden = function () {
        return h ? document[h] : !1;
      };
      d.isSupported = function () {
        return (
          c("ExecutionEnvironment").canUseDOM &&
          document.addEventListener &&
          i !== void 0
        );
      };
      return b;
    })(c("BaseEventEmitter"));
    var j = new a();
    j.isSupported() &&
      document.addEventListener(
        j.hiddenEvent,
        c("TimeSlice").guard(function (a) {
          j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
            changeTime: a.timeStamp,
          });
        }, "visibility change")
      );
    b = j;
    g["default"] = b;
  },
  98
);
__d(
  "VisibilityListener",
  ["Visibility", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = Date.now() - c("performanceNow")(),
      i = [],
      j = !1,
      k = 1e4;
    i.push({ key: h, value: c("Visibility").isHidden() });
    function l(a, b) {
      if (j || i.length > k) {
        j = !0;
        return;
      }
      i.push({ key: a + h, value: b });
    }
    c("Visibility").addListener(c("Visibility").VISIBLE, function (a) {
      l(a.changeTime, !1);
    });
    c("Visibility").addListener(c("Visibility").HIDDEN, function (a) {
      l(a.changeTime, !0);
    });
    function m(a, b) {
      if (j) return null;
      var d;
      for (a = i.length - 1; a >= 0; a--)
        if (i[a].key <= b) {
          d = i.slice(0, a + 1);
          break;
        }
      if (d === void 0) return null;
      d[d.length - 1].value !== c("Visibility").isHidden() &&
        (d[d.length] = { key: b, value: c("Visibility").isHidden() });
      return d;
    }
    function a(a, b) {
      var d = m(a, b);
      if (!d) return null;
      if (d.length < 2) return c("Visibility").isHidden() ? b - a : 0;
      var e = d.length - 1;
      b = d[e].value ? b - d[e].key : 0;
      for (--e; e > 0; e--)
        if (d[e].key > a) d[e].value && (b += d[e + 1].key - d[e].key);
        else break;
      d[e].value && (b = d[e + 1].key - a);
      return b;
    }
    function b() {
      return !0;
    }
    g.getHiddenTimings = m;
    g.getHiddenTime = a;
    g.supported = b;
  },
  99
);
__d(
  "CometPreludeRunWhenReady",
  ["ErrorUtils", "ServerJSPayloadListener", "VisibilityListener"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    g || b("ErrorUtils");
    b("VisibilityListener");
    b("ServerJSPayloadListener");
  },
  null
);
__d(
  "CometPrelude",
  ["CometPreludeCritical", "CometPreludeRunWhenReady"],
  function (a, b, c, d, e, f) {
    "use strict";
    b("CometPreludeCritical"), b("CometPreludeRunWhenReady");
  },
  null
);
