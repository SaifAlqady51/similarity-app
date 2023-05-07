/*FB_PKG_DELIM*/

__d(
  "BaseToast.react",
  [
    "BaseInlinePressable.react",
    "BaseTheme.react",
    "BaseView.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useId,
      j = b.useMemo,
      k = {
        dark: "__fb-dark-mode ",
        light: "__fb-light-mode ",
        type: "CLASSNAMES",
      },
      l = {
        item: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingBottom: "x19yoh24",
          paddingEnd: "xpowjs8",
          paddingStart: "xrxijuk",
          paddingTop: "x6enp1t",
          $$css: !0,
        },
        itemText: { flexGrow: "x1iyjqo2", $$css: !0 },
        link: { wordBreak: "xdnwjd9", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1wkzo03",
          borderTopStartRadius: "x1192kqh",
          borderTopEndRadius: "xjfsc2c",
          borderBottomEndRadius: "xg8fqjl",
          borderBottomStartRadius: "x1kdh5me",
          boxShadow: "xi1c1fh",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          maxWidth: "x1cs6qxi",
          minWidth: "x1hqenl9",
          paddingStart: "xuv3zuj",
          paddingEnd: "xd3owfx",
          paddingTop: "x192rfv7",
          paddingBottom: "x13jxccy",
          $$css: !0,
        },
        rootFullWidth: { width: "xh8yej3", $$css: !0 },
      };
    function a(a) {
      var b = a.action,
        e = a.addOnStart,
        f = a.closeButton,
        g = a.linkWrapper,
        m = a.message,
        n = a.onDismiss,
        o = a.size;
      o = o === void 0 ? "full-width" : o;
      var p = a.testid;
      p = a.toastRef;
      a = a.useInvertedDisplayMode;
      a = a === void 0 ? !0 : a;
      var q = c("useCurrentDisplayMode")();
      q = q === "dark" ? "light" : "dark";
      var r = i(),
        s = j(
          function () {
            if (b != null) return {};
            else return { "aria-atomic": !0, role: "alert" };
          },
          [b]
        );
      e = h.jsxs(h.Fragment, {
        children: [
          e != null &&
            h.jsx(c("BaseView.react"), { xstyle: l.item, children: e }),
          h.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({ xstyle: [l.item, l.itemText] }, s, {
              children: m({ toastMessageId: r }),
            })
          ),
          b != null &&
            h.jsx(d("FocusRegion.react").FocusRegion, {
              autoFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
              children: h.jsx(c("BaseView.react"), {
                "aria-labelledby": r,
                role: "group",
                xstyle: l.item,
                children:
                  b.element != null
                    ? b.element
                    : b.labelRenderer &&
                      b.labelRenderer(
                        h.jsx(c("BaseInlinePressable.react"), {
                          onPress: function (a) {
                            n(), b.onPress(a);
                          },
                          testid: void 0,
                          xstyle: l.link,
                          children: b.label,
                        })
                      ),
              }),
            }),
          f != null &&
            h.jsx(c("BaseView.react"), { xstyle: l.item, children: f }),
        ],
      });
      e = g != null ? g(e) : e;
      return a
        ? h.jsx(c("BaseTheme.react"), {
            config: k,
            displayMode: q,
            ref: p,
            testid: void 0,
            xstyle: [l.root, o === "full-width" && l.rootFullWidth],
            children: e,
          })
        : h.jsx(c("BaseView.react"), {
            ref: p,
            testid: void 0,
            xstyle: [l.root, o === "full-width" && l.rootFullWidth],
            children: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometToast.react",
  [
    "fbt",
    "ix",
    "BaseToast.react",
    "CometCircleButton.react",
    "CometPressable.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo,
      l = {
        pressable: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.action,
        e = a.href,
        f = a.icon,
        g = a.impressionLoggingRef,
        m = a.message,
        n = a.onDismiss,
        o = a.supressCloseButton;
      o = o === void 0 ? !1 : o;
      var p = a.target,
        q = a.testid;
      q = q === void 0 ? "Toast" : q;
      q = a.truncateText;
      var r = q === void 0 ? !0 : q,
        s = babelHelpers.objectWithoutPropertiesLoose(a, [
          "action",
          "href",
          "icon",
          "impressionLoggingRef",
          "message",
          "onDismiss",
          "supressCloseButton",
          "target",
          "testid",
          "truncateText",
        ]),
        t = k(
          function () {
            return e != null ? { target: p, url: e } : void 0;
          },
          [e, p]
        );
      return j.jsx(c("BaseToast.react"), {
        action:
          b != null
            ? {
                label: b.label,
                labelRenderer: function (a) {
                  return j.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    numberOfLines: 1,
                    type: "body3",
                    children: a,
                  });
                },
                onPress: b.onPress,
                testid: b.testid,
              }
            : void 0,
        addOnStart: f,
        closeButton:
          o !== !0 &&
          j.jsx(c("CometCircleButton.react"), {
            icon: d("fbicon")._(i("478231"), 12),
            label: h._("Close"),
            onPress: n,
            size: 24,
          }),
        linkWrapper:
          s.onPress != null || t != null
            ? function (a) {
                return j.jsx(
                  c("CometPressable.react"),
                  babelHelpers["extends"]({}, s, {
                    expanding: !0,
                    linkProps: t,
                    xstyle: l.pressable,
                    children: a,
                  })
                );
              }
            : void 0,
        message: function (a) {
          a = a.toastMessageId;
          return j.jsx(c("TetraText.react"), {
            color: "primary",
            id: a,
            numberOfLines: r ? 4 : void 0,
            type: "body3",
            children: m,
          });
        },
        onDismiss: n,
        testid: void 0,
        toastRef: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithLiveVideoInterruptedOverlay.react",
  [
    "fbt",
    "CometLoadingAnimation.react",
    "TetraTextPairing.react",
    "VideoPlayerHooks",
    "VideoPlayerInteractionOverlay.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = d("VideoPlayerHooks").useStreamInterrupted(),
        b = d("VideoPlayerHooks").useIsLiveRewindActive();
      return !a || b
        ? null
        : i.jsx(
            d("VideoPlayerInteractionOverlay.react")
              .VideoPlayerInteractionOverlay,
            {
              children: i.jsxs("div", {
                className:
                  "x6s0dn4 x18l40ae x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy",
                children: [
                  i.jsx("div", {
                    children: i.jsx(c("TetraTextPairing.react"), {
                      body: h._(
                        "The broadcast is waiting for a signal. It should resume shortly."
                      ),
                      bodyColor: "white",
                      headline: h._("Waiting for Live Video Signal"),
                      headlineColor: "white",
                      level: 2,
                      textAlign: "center",
                    }),
                  }),
                  i.jsx("div", {
                    className: "xc9qbxq x1sy10c2 x1n2onr6 x14qfxbe",
                    children: i.jsx(c("CometLoadingAnimation.react"), {
                      size: 36,
                    }),
                  }),
                ],
              }),
            }
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EventListenerImplForCacheStorage",
  ["CometEventListener"],
  function (a, b, c, d, e, f) {
    "use strict";
    f["default"] = b("CometEventListener");
  },
  66
);
__d(
  "TrustedTypesNoOpPolicy_DO_NOT_USE",
  ["TrustedTypes", "TrustedTypesUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      createScriptURL: d("TrustedTypesUtils").noop,
      createHTML: d("TrustedTypesUtils").noop,
      createScript: d("TrustedTypesUtils").noop,
    };
    b = c("TrustedTypes").createPolicy("noop-do-not-use", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "TrustedTypesLinkTagHTMLPolicy",
  ["TrustedTypes", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      createHTML: function (a) {
        if (a === "<link />") return a;
        throw c("err")(
          "Violating Trusted Type policies. Only works for '<link />' strings."
        );
      },
    };
    b = c("TrustedTypes").createPolicy("link-tag-html", a);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "getMarkupWrap",
  ["invariant", "ExecutionEnvironment", "TrustedTypesLinkTagHTMLPolicy"],
  function (a, b, c, d, e, f, g, h) {
    var i = c("ExecutionEnvironment").canUseDOM
        ? document.createElement("div")
        : null,
      j = {};
    b = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    e = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
      l = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: b,
        option: b,
        caption: d,
        colgroup: d,
        tbody: d,
        tfoot: d,
        thead: d,
        td: e,
        th: e,
      };
    f = [
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "text",
      "tspan",
    ];
    f.forEach(function (a) {
      (l[a] = k), (j[a] = !0);
    });
    function a(a) {
      a = a;
      !i && h(0, 144);
      Object.prototype.hasOwnProperty.call(l, a) || (a = "*");
      Object.prototype.hasOwnProperty.call(j, a) ||
        (a === "*"
          ? (i.innerHTML = c("TrustedTypesLinkTagHTMLPolicy").createHTML(
              "<link />"
            ))
          : (i.innerHTML = "<" + a + "></" + a + ">"),
        (j[a] = !i.firstChild));
      return j[a] ? l[a] : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createNodesFromMarkup",
  [
    "invariant",
    "ExecutionEnvironment",
    "TrustedTypesNoOpPolicy_DO_NOT_USE",
    "getMarkupWrap",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = c("ExecutionEnvironment").canUseDOM
        ? document.createElement("div")
        : null,
      j = /^\s*<(\w+)/;
    function k(a) {
      a = a.match(j);
      return a && a[1].toLowerCase();
    }
    function a(a, b) {
      var d = i;
      !i && h(0, 5001);
      var e = k(a);
      e = e && c("getMarkupWrap")(e);
      if (e) {
        d.innerHTML = e[1] + a + e[2];
        e = e[0];
        while (e--) d = d.lastChild;
      } else d.innerHTML = c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);
      e = d.getElementsByTagName("script");
      e.length && (b || h(0, 5002), Array.from(e).forEach(b));
      a = Array.from(d.childNodes);
      while (d.lastChild) d.removeChild(d.lastChild);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "evalGlobal",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (typeof a !== "string")
        throw new TypeError(
          "JS sent to evalGlobal is not a string. Only strings are permitted."
        );
      if (!a) return;
      var b = document.createElement("script");
      try {
        b.appendChild(document.createTextNode(a));
      } catch (c) {
        b.text = a;
      }
      a = document.getElementsByTagName("head")[0] || document.documentElement;
      a.appendChild(b);
      a.removeChild(b);
    }
    f["default"] = a;
  },
  66
);
__d(
  "HTML",
  [
    "invariant",
    "Bootloader",
    "FBLogger",
    "createNodesFromMarkup",
    "emptyFunction",
    "evalGlobal",
  ],
  function (a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
      i = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
      };
    a = (function () {
      "use strict";
      function a(c) {
        c && typeof c.__html === "string" && (c = c.__html);
        if (!(this instanceof a)) return c instanceof a ? c : new a(c);
        if (c) {
          var d = typeof c;
          d === "string" || g(0, 277, d);
        }
        this._markup = c || "";
        this._defer = !1;
        this._nodes = null;
        this._inlineJS = b("emptyFunction");
        this._rootNode = null;
        this._hasInlineJs = !1;
      }
      var c = a.prototype;
      c.toString = function () {
        return this._markup;
      };
      c.getContent = function () {
        return this._markup;
      };
      c.getNodes = function () {
        this._fillCache();
        return this._nodes;
      };
      c.getRootNode = function () {
        this._rootNode && g(0, 278);
        var a = this.getNodes();
        if (a.length === 1) this._rootNode = a[0];
        else {
          var b = document.createDocumentFragment();
          for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
          this._rootNode = b;
        }
        return this._rootNode;
      };
      c.getAction = function () {
        var a = this;
        this._fillCache();
        var b = function () {
          a._inlineJS();
        };
        return this._defer
          ? function () {
              setTimeout(b, 0);
            }
          : b;
      };
      c._fillCache = function () {
        if (this._nodes !== null) return;
        if (!this._markup) {
          this._nodes = [];
          return;
        }
        var a = this._markup.replace(h, function (a, b, c) {
            return i[c.toLowerCase()] ? a : b + "></" + c + ">";
          }),
          c = null;
        a = b("createNodesFromMarkup")(a, function (a) {
          b("FBLogger")("staticresources").warn(
            "HTML: encountered script node while parsing, hasSrc=%s, type=%s",
            Boolean(a.src),
            a.type == null || a.type === "" ? "<unknown>" : a.type
          ),
            a.type !== "application/ld+json" &&
              a.type !== "application/json" &&
              ((c = c || []),
              c.push(
                a.src
                  ? b(
                      "Bootloader"
                    ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                      b("Bootloader"),
                      a.src
                    )
                  : b("evalGlobal").bind(null, a.innerHTML)
              ),
              a.parentNode.removeChild(a));
        });
        c &&
          ((this._hasInlineJs = !0),
          (this._inlineJS = function () {
            for (var a = 0; a < c.length; a++) c[a]();
          }));
        this._nodes = a;
      };
      c.setDeferred = function (a) {
        this._defer = !!a;
        return this;
      };
      c.hasInlineJs = function () {
        return this._hasInlineJs;
      };
      a.isHTML = function (b) {
        return !!b && (b instanceof a || b.__html !== void 0);
      };
      a.replaceJSONWrapper = function (b) {
        return b && b.__html !== void 0 ? new a(b.__html) : b;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisDiscoveryModuleFalcoEvent",
  ["PolarisFalcoLogger", "PolarisLogger", "PolarisLoggerUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    function i(a) {
      return babelHelpers["extends"]({}, d("PolarisLogger").getExtra(a), {
        objid: d("PolarisLoggerUtils").trimAndSanitizeUrl(window.location.href),
      });
    }
    a = {
      log: function (a) {
        a = babelHelpers["extends"]({}, i(a()));
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_web_discovery_module",
          a,
          {},
          h
        );
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisLoggedOutExploreModuleLogger",
  ["PolarisDiscoveryModuleFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.component,
        d = a.containermodule,
        e = a.eventName,
        f = a.key;
      c("PolarisDiscoveryModuleFalcoEvent").log(function () {
        return babelHelpers["extends"](
          { containermodule: d, event_name: e, component: b },
          f != null && { category: f }
        );
      });
    }
    g.logExploreModuleEvent = a;
  },
  98
);
__d(
  "ArbiterMixin",
  ["Arbiter", "guid"],
  function (a, b, c, d, e, f, g) {
    var h = "arbiter$" + c("guid")(),
      i = Object.prototype.hasOwnProperty;
    a = {
      _getArbiterInstance: function () {
        return i.call(this, h) ? this[h] : (this[h] = new (c("Arbiter"))());
      },
      inform: function (a, b, c) {
        return this._getArbiterInstance().inform(a, b, c);
      },
      subscribe: function (a, b, c) {
        return this._getArbiterInstance().subscribe(a, b, c);
      },
      subscribeOnce: function (a, b, c) {
        return this._getArbiterInstance().subscribeOnce(a, b, c);
      },
      unsubscribe: function (a) {
        this._getArbiterInstance().unsubscribe(a);
      },
      unsubscribeCurrentSubscription: function () {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function () {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function (a, b) {
        return this._getArbiterInstance().registerCallback(a, b);
      },
      query: function (a) {
        return this._getArbiterInstance().query(a);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "createArrayFromMixed",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function i(a) {
      var b = a.length;
      (!Array.isArray(a) &&
        (typeof a === "object" || typeof a === "function")) ||
        h(0, 3914);
      typeof b === "number" || h(0, 3915);
      b === 0 || b - 1 in a || h(0, 3916);
      typeof a.callee !== "function" || h(0, 3917);
      if (a.hasOwnProperty)
        try {
          return Array.prototype.slice.call(a);
        } catch (a) {}
      var c = Array(b);
      for (var d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    function j(a) {
      return (
        !!a &&
        (typeof a === "object" || typeof a === "function") &&
        "length" in a &&
        !("setInterval" in a) &&
        typeof a.nodeType !== "number" &&
        (Array.isArray(a) || "callee" in a || "item" in a)
      );
    }
    function a(a) {
      if (!j(a)) return [a];
      else if (Array.isArray(a)) return a.slice();
      else return i(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "isElementNode",
  ["isNode"],
  function (a, b, c, d, e, f) {
    function a(a) {
      return b("isNode")(a) && a.nodeType == 1;
    }
    e.exports = a;
  },
  null
);
__d(
  "DOMQuery",
  [
    "CSS",
    "FBLogger",
    "containsNode",
    "createArrayFromMixed",
    "createObjectFrom",
    "ge",
    "ifRequired",
    "isElementNode",
    "isNode",
  ],
  function (a, b, c, d, e, f, g) {
    var h = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function i(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null;
    }
    function a(a, b) {
      a = j(a, b);
      return a[0];
    }
    function b(a, b, c) {
      b = j(a, b);
      a = j(a, c);
      b.length === 1 && a.length === 1 && b[0] === a[0]
        ? (c = b)
        : (c = b.concat(a));
      return c[0];
    }
    function j(a, b) {
      if (!a || !a.getElementsByTagName) return [];
      b = b.split(" ");
      var e = [a];
      for (var f = 0; f < b.length; f++) {
        if (e.length === 0) break;
        if (b[f] === "") continue;
        var g = b[f],
          j = b[f],
          k = [],
          l = !1;
        if (g.charAt(0) == "^")
          if (f === 0) (l = !0), (g = g.slice(1));
          else return [];
        g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
        g = g.split(" ");
        var m = g[0] || "*",
          n = m == "*",
          o = g[1] && g[1].charAt(0) == "#";
        if (o) {
          o = c("ge")(g[1].slice(1), a, m);
          if (o && (n || o.tagName.toLowerCase() == m))
            for (var p = 0; p < e.length; p++)
              if (l && c("containsNode")(o, e[p])) {
                k = [o];
                break;
              } else if (
                document == e[p] ||
                (c("containsNode")(e[p], o) && e[p] !== o)
              ) {
                k = [o];
                break;
              }
        } else {
          o = [];
          p = e.length;
          var q,
            r = !l && j.indexOf("[") < 0 && document.querySelectorAll;
          for (var s = 0; s < p; s++) {
            if (l) {
              q = [];
              var t = e[s].parentNode;
              while (c("isElementNode")(t))
                (n || t.tagName.toLowerCase() == m) && q.push(t),
                  (t = t.parentNode);
            } else
              r
                ? h.test(j)
                  ? (q = e[s].getElementsByClassName(j.substring(1)))
                  : (q = e[s].querySelectorAll(j))
                : (q = e[s].getElementsByTagName(m));
            t = q.length;
            for (var u = 0; u < t; u++) o.push(q[u]);
          }
          if (!r)
            for (q = 1; q < g.length; q++) {
              t = g[q];
              u = t.charAt(0) == ".";
              n = t.substring(1);
              for (s = 0; s < o.length; s++) {
                p = o[s];
                if (!p || p.nodeType !== 1) continue;
                if (u) {
                  d("CSS").hasClass(p, n) || delete o[s];
                  continue;
                } else {
                  j = t.slice(1, t.length - 1);
                  m = j.indexOf("=");
                  if (m < 0) {
                    if (!i(p, j)) {
                      delete o[s];
                      continue;
                    }
                  } else {
                    r = j.substr(0, m);
                    j = j.substr(m + 1);
                    j = j.slice(1, j.length - 1);
                    if (p.getAttribute(r) != j) {
                      delete o[s];
                      continue;
                    }
                  }
                }
              }
            }
          for (s = 0; s < o.length; s++)
            if (o[s]) {
              k.push(o[s]);
              if (l) break;
            }
        }
        e = k;
      }
      return e;
    }
    function e() {
      var a = window.getSelection;
      if (a) return a() + "";
      else {
        a = document.selection;
        if (a) return a.createRange().text;
      }
      return null;
    }
    function f(a, b) {
      (typeof a === "string" || typeof b === "string") &&
        c("FBLogger")("dom_query").info(
          "Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead"
        );
      return c("containsNode")(c("ge")(a), c("ge")(b));
    }
    function k() {
      var a = c("ifRequired")("Quickling", function (a) {
        return a.isActive() ? c("ge")("content") : null;
      });
      return a || document.body;
    }
    function l(a, b) {
      b = c("createArrayFromMixed")(b).join("|").toUpperCase().split("|");
      b = c("createObjectFrom")(b);
      return c("isNode")(a) && a.nodeName in b;
    }
    function m(a) {
      return l(a, ["input", "textarea"]) || a.contentEditable === "true";
    }
    g.find = a;
    g.findPushSafe = b;
    g.scry = j;
    g.getSelection = e;
    g.contains = f;
    g.getRootElement = k;
    g.isNodeOfType = l;
    g.isInputNode = m;
  },
  98
);
__d(
  "DOMEvent",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.event = a || window.event),
          typeof this.event.srcElement !== "unknown" || h(0, 5798),
          (this.target = this.event.target || this.event.srcElement);
      }
      var b = a.prototype;
      b.preventDefault = function () {
        var a = this.event;
        a.preventDefault
          ? (a.preventDefault(),
            "defaultPrevented" in a || (a.defaultPrevented = !0))
          : (a.returnValue = !1);
        return this;
      };
      b.isDefaultPrevented = function () {
        var a = this.event;
        return "defaultPrevented" in a
          ? a.defaultPrevented
          : a.returnValue === !1;
      };
      b.stopPropagation = function () {
        var a = this.event;
        a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0);
        return this;
      };
      b.kill = function () {
        this.stopPropagation().preventDefault();
        return this;
      };
      a.killThenCall = function (b) {
        return function (c) {
          new a(c).kill();
          return b();
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "dedupString",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b;
      return Object.keys(((b = {}), (b[a] = 0), b))[0];
    }
    f["default"] = a;
  },
  66
);
__d(
  "wrapFunction",
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    function a(a, b, c) {
      var d = b in g ? g[b](a, c) : a;
      return function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        return d.apply(this, b);
      };
    }
    a.setWrapper = function (a, b) {
      g[b] = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "DOMEventListener",
  [
    "invariant",
    "dedupString",
    "emptyFunction",
    "passiveEventListenerUtil",
    "wrapFunction",
  ],
  function (a, b, c, d, e, f, g) {
    var h = b("passiveEventListenerUtil").isPassiveEventListenerSupported,
      i,
      j;
    window.addEventListener
      ? ((i = function (a, c, d, e) {
          e === void 0 && (e = !1),
            (d.wrapper = b("wrapFunction")(
              d,
              "entry",
              b("dedupString")("DOMEventListener.add " + c)
            )),
            a.addEventListener(c, d.wrapper, h ? e : !1);
        }),
        (j = function (a, b, c, d) {
          d === void 0 && (d = !1),
            a.removeEventListener(b, c.wrapper, h ? d : !1);
        }))
      : window.attachEvent
      ? ((i = function (a, c, d, e) {
          e === void 0,
            (d.wrapper = b("wrapFunction")(
              d,
              "entry",
              "DOMEventListener.add " + c
            )),
            a.attachEvent || g(0, 2798),
            a.attachEvent("on" + c, d.wrapper);
        }),
        (j = function (a, b, c, d) {
          d === void 0,
            a.detachEvent || g(0, 2799),
            a.detachEvent("on" + b, c.wrapper);
        }))
      : (j = i = b("emptyFunction"));
    a = {
      add: function (a, b, c, d) {
        d === void 0 && (d = !1);
        i(a, b, c, d);
        return {
          remove: function () {
            j(a, b, c, d);
          },
        };
      },
      remove: j,
    };
    e.exports = a;
  },
  null
);
__d(
  "EventProfiler",
  ["cr:708886"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:708886");
  },
  98
);
__d(
  "Scroll",
  [],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      return !!b && (a === b.documentElement || a === b.body);
    }
    function a(a) {
      var b;
      if (a == null) return 0;
      var c = a.ownerDocument;
      return g(a, c)
        ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) ||
            (c == null
              ? void 0
              : (b = c.documentElement) == null
              ? void 0
              : b.scrollTop) ||
            0
        : a.scrollTop || 0;
    }
    function b(a, b) {
      if (a == null) return;
      var c = a.ownerDocument;
      g(a, c)
        ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0),
          (c == null ? void 0 : c.documentElement) &&
            (c.documentElement.scrollTop = b || 0))
        : (a.scrollTop = b || 0);
    }
    function c(a) {
      var b,
        c = a.ownerDocument;
      return g(a, c)
        ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) ||
            (c == null
              ? void 0
              : (b = c.documentElement) == null
              ? void 0
              : b.scrollLeft) ||
            0
        : a.scrollLeft || 0;
    }
    function d(a, b) {
      var c = a.ownerDocument;
      g(a, c)
        ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0),
          (c == null ? void 0 : c.documentElement) &&
            (c.documentElement.scrollLeft = b || 0))
        : (a.scrollLeft = b || 0);
    }
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d;
  },
  66
);
__d(
  "FlowMigrationUtilsForLegacyFiles",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "flow_typing_for_legacy_code";
    function a(a) {
      c("FBLogger")(h)
        .blameToPreviousFile()
        .event(h + ".bad_call")
        .mustfix(a);
      return new Error("[" + h + "] " + a);
    }
    g.invariantViolation = a;
  },
  98
);
__d(
  "getDocumentScrollElement",
  ["FlowMigrationUtilsForLegacyFiles"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
      typeof navigator !== "undefined" &&
      navigator.userAgent.indexOf("AppleWebKit") > -1;
    function a(a) {
      a = a || document;
      if (a.scrollingElement) return a.scrollingElement;
      a = !h && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
      a ||
        d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
          "null result in getDocumentScrollElement"
        );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getObjectValues",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      for (var c in a) b.push(a[c]);
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "Event",
  [
    "$",
    "Arbiter",
    "DOMEvent",
    "DOMEventListener",
    "DOMQuery",
    "DataStore",
    "ErrorGuard",
    "EventProfiler",
    "ExecutionEnvironment",
    "FBLogger",
    "Parent",
    "Scroll",
    "TimeSlice",
    "UserAgent",
    "dedupString",
    "fb-error",
    "getDocumentScrollElement",
    "getObjectValues",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = b("fb-error").TAAL,
      i = "Event.listeners";
    Event.prototype || (Event.prototype = {});
    function j(a) {
      (a.type === "click" || a.type === "mouseover" || a.type === "keydown") &&
        b("Arbiter").inform("Event/stop", { event: a });
    }
    var k = (function () {
      "use strict";
      function a(a, b, c) {
        (this.cancelBubble = !1),
          (this.target = a),
          (this.type = b),
          (this.data = c);
      }
      var c = a.prototype;
      c.getData = function () {
        this.data = this.data || {};
        return this.data;
      };
      c.stop = function () {
        return Event.stop(this);
      };
      c.prevent = function () {
        return Event.prevent(this);
      };
      c.isDefaultPrevented = function () {
        return Event.isDefaultPrevented(this);
      };
      c.kill = function () {
        return Event.kill(this);
      };
      c.getTarget = function () {
        return new (b("DOMEvent"))(this).target || null;
      };
      return a;
    })();
    function l(a) {
      if (a instanceof k) return a;
      a ||
        (!window.addEventListener && document.createEventObject
          ? (a = window.event ? document.createEventObject(window.event) : {})
          : (a = {}));
      if (!a._inherits_from_prototype)
        for (var b in Event.prototype)
          try {
            a[b] = Event.prototype[b];
          } catch (a) {}
      return a;
    }
    Object.assign(
      Event.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var a =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return a && a.nodeType ? a : null;
        },
        getModifiers: function () {
          var a = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
          a.any = a.control || a.shift || a.alt || a.meta;
          return a;
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      k.prototype
    );
    c = {
      listen: function (a, c, d, e, f) {
        typeof d === "function" &&
          (d = b("TimeSlice").guard(
            d,
            b("dedupString")("Event.js " + c + " handler")
          ));
        !f || typeof f === "boolean"
          ? (f = { passive: !1 })
          : (f = { passive: f.passive || !1 });
        if (!b("ExecutionEnvironment").canUseDOM)
          return new t(a, d, null, c, e, null, f);
        typeof a === "string" && (a = b("$")(a));
        typeof e === "undefined" && (e = Event.Priority.NORMAL);
        if (typeof c === "object") {
          var g = {};
          for (var j in c) g[j] = Event.listen(a, j, c[j], e, f);
          return g;
        }
        if (c.match(/^on/i))
          throw new TypeError(
            "Bad event name `" + c + "': use `click', not `onclick'."
          );
        if (!a) {
          j = h.blameToPreviousFrame(
            new Error("Cannot listen to an undefined element.")
          );
          b("FBLogger")("event")
            .catching(j)
            .mustfix("Tried to listen to element of type %s", c);
          throw j;
        }
        if (a.nodeName == "LABEL" && c == "click") {
          g = a.getElementsByTagName("input");
          a = g.length == 1 ? g[0] : a;
        } else if (a === window && c === "scroll") {
          j = b("getDocumentScrollElement")();
          j !== document.documentElement && j !== document.body && (a = j);
        }
        g = b("DataStore").get(a, i, {});
        j = n[c];
        j && ((c = j.base), j.wrap && (d = j.wrap(d)));
        p(a, g, c, f);
        j = g[c];
        e in j || (j[e] = []);
        var k = j[e].length;
        d = new t(a, d, g, c, e, k, f);
        j[e][k] = d;
        j.numHandlers++;
        f.passive || (j.numNonPassiveHandlers++, o(a, g[c], c));
        return d;
      },
      stop: function (a) {
        var c = new (b("DOMEvent"))(a).stopPropagation();
        j(c.event);
        return a;
      },
      prevent: function (a) {
        new (b("DOMEvent"))(a).preventDefault();
        return a;
      },
      isDefaultPrevented: function (a) {
        return new (b("DOMEvent"))(a).isDefaultPrevented(a);
      },
      kill: function (a) {
        a = new (b("DOMEvent"))(a).kill();
        j(a.event);
        return !1;
      },
      getKeyCode: function (a) {
        a = new (b("DOMEvent"))(a).event;
        if (!a) return !1;
        switch (a.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (a.shiftKey)
          switch (a.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return a.keyCode;
      },
      getPriorities: function () {
        if (!m) {
          var a = b("getObjectValues")(Event.Priority);
          a.sort(function (a, b) {
            return a - b;
          });
          m = a;
        }
        return m;
      },
      fire: function (a, b, c) {
        c = new k(a, b, c);
        var d;
        do {
          var e = Event.__getHandler(a, b);
          e && (d = e(c));
          a = a.parentNode;
        } while (a && d !== !1 && !c.cancelBubble);
        return d !== !1;
      },
      __fire: function (a, b, c) {
        a = Event.__getHandler(a, b);
        if (a) return a(l(c));
      },
      __getHandler: function (a, c) {
        var d = b("DataStore").get(a, i);
        return d && d[c] ? d[c].domHandler : a["on" + c];
      },
      getPosition: function (a) {
        a = new (b("DOMEvent"))(a).event;
        var c = b("getDocumentScrollElement")(),
          d = a.clientX + b("Scroll").getLeft(c);
        a = a.clientY + b("Scroll").getTop(c);
        return { x: d, y: a };
      },
    };
    Object.assign(Event, c);
    var m = null;
    d = function (a) {
      return function (c) {
        if (!b("DOMQuery").contains(this, c.getRelatedTarget()))
          return a.call(this, c);
      };
    };
    var n;
    !window.navigator.msPointerEnabled
      ? (n = {
          mouseenter: { base: "mouseover", wrap: d },
          mouseleave: { base: "mouseout", wrap: d },
        })
      : (n = {
          mousedown: { base: "MSPointerDown" },
          mousemove: { base: "MSPointerMove" },
          mouseup: { base: "MSPointerUp" },
          mouseover: { base: "MSPointerOver" },
          mouseout: { base: "MSPointerOut" },
          mouseenter: { base: "MSPointerOver", wrap: d },
          mouseleave: { base: "MSPointerOut", wrap: d },
        });
    if (b("UserAgent").isBrowser("Firefox < 52")) {
      f = function (a, b) {
        b = l(b);
        var c = b.getTarget();
        while (c) Event.__fire(c, a, b), (c = c.parentNode);
      };
      document.documentElement.addEventListener(
        "focus",
        f.bind(null, "focusin"),
        !0
      );
      document.documentElement.addEventListener(
        "blur",
        f.bind(null, "focusout"),
        !0
      );
    }
    var o = function (a, c, d) {
        var e = c.numNonPassiveHandlers == 0;
        e != c.options.passive &&
          (c.domHandlerRemover.remove(),
          (c.options.passive = e),
          (c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
            passive: e,
          })));
      },
      p = function (a, c, d, e) {
        if (d in c) return;
        var f = b("TimeSlice").guard(
          s.bind(a, d),
          b("dedupString")("Event listenHandler " + d)
        );
        c[d] = {
          numHandlers: 0,
          numNonPassiveHandlers: 0,
          domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
          domHandler: f,
          options: e,
        };
        c = "on" + d;
        if (a[c]) {
          f =
            a === document.documentElement
              ? Event.Priority._BUBBLE
              : Event.Priority.TRADITIONAL;
          var g = a[c];
          a[c] = null;
          Event.listen(a, d, g, f, e);
        }
      };
    function q(a) {
      return !a.href.endsWith("#")
        ? !1
        : a.href === document.location.href ||
            a.href === document.location.href + "#";
    }
    function r(a, b) {
      return a.nodeName === "INPUT" && a.type === b;
    }
    var s = b("EventProfiler").__wrapEventListenHandler(function (a, c) {
      c = l(c);
      if (!b("DataStore").get(this, i))
        throw new Error("Bad listenHandler context.");
      var d = b("DataStore").get(this, i)[a];
      if (!d) throw new Error("No registered handlers for `" + a + "'.");
      if (
        a == "click" ||
        a == "contextmenu" ||
        (a == "mousedown" && c.which == 2)
      ) {
        a = c.getTarget();
        var e = b("Parent").byTag(a, "a");
        e instanceof HTMLAnchorElement &&
          e.href &&
          q(e) &&
          !r(a, "file") &&
          !r(a, "submit") &&
          c.prevent();
      }
      e = Event.getPriorities();
      for (a = 0; a < e.length; a++) {
        var f = e[a];
        if (f in d) {
          f = d[f];
          for (var g = 0; g < f.length; g++) {
            if (!f[g]) continue;
            var h = f[g].fire(this, c);
            if (h === !1) return c.kill();
            else c.cancelBubble && c.stop();
          }
        }
      }
      return c.returnValue;
    });
    Event.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    var t = (function () {
      "use strict";
      function a(a, b, c, d, e, f, g) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$7 = d),
          (this.$6 = e),
          (this.$4 = f),
          (this.$5 = g);
      }
      var c = a.prototype;
      c.isRemoved = function () {
        return !this.$3;
      };
      c.remove = function () {
        if (b("ExecutionEnvironment").canUseDOM) {
          if (this.isRemoved()) {
            b("FBLogger")("Event").warn(
              "Event handler has already been removed"
            );
            return;
          }
          var a = this.$3[this.$7];
          a.numHandlers <= 1
            ? (a.domHandlerRemover.remove(), delete this.$3[this.$7])
            : (delete a[this.$6][this.$4],
              a.numHandlers--,
              this.$5.passive ||
                (a.numNonPassiveHandlers--,
                o(this.$1, this.$3[this.$7], this.$7)));
          this.$3 = null;
        }
      };
      c.fire = function (a, c) {
        return b("ExecutionEnvironment").canUseDOM
          ? (g || (g = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
              name:
                "eventhandler:" +
                c.type +
                ":" +
                (typeof a.name == "string" ? a.name : a.id),
            })
          : !0;
      };
      return a;
    })();
    a.$E = Event.$E = l;
    e.exports = Event;
  },
  null
);
__d(
  "TrustedTypesIEFixDOMPolicy",
  ["TrustedTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      createHTML: function (a) {
        return a;
      },
    };
    b = c("TrustedTypes").createPolicy("dom-ie-fix", a);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "UserAgent_DEPRECATED",
  [],
  function (a, b, c, d, e, f) {
    var g = !1,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w;
    function x() {
      if (g) return;
      g = !0;
      var a = navigator.userAgent,
        b =
          /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
            a
          ),
        c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
      s = /\b(iPhone|iP[ao]d)/.exec(a);
      t = /\b(iP[ao]d)/.exec(a);
      q = /Android/i.exec(a);
      u = /FBAN\/\w+;/i.exec(a);
      v = /FBAN\/mLite;/i.exec(a);
      w = /Mobile/i.exec(a);
      r = !!/Win64/.exec(a);
      if (b) {
        h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
        h && document && document.documentMode && (h = document.documentMode);
        var d = /(?:Trident\/(\d+.\d+))/.exec(a);
        m = d ? parseFloat(d[1]) + 4 : h;
        i = b[2] ? parseFloat(b[2]) : NaN;
        j = b[3] ? parseFloat(b[3]) : NaN;
        k = b[4] ? parseFloat(b[4]) : NaN;
        k
          ? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
            (l = b && b[1] ? parseFloat(b[1]) : NaN))
          : (l = NaN);
      } else h = i = j = l = k = NaN;
      if (c) {
        if (c[1]) {
          d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
          n = d ? parseFloat(d[1].replace("_", ".")) : !0;
        } else n = !1;
        o = !!c[2];
        p = !!c[3];
      } else n = o = p = !1;
    }
    function y() {
      return x() || h;
    }
    function a() {
      return x() || m > h;
    }
    function b() {
      return y() && r;
    }
    function c() {
      return x() || i;
    }
    function d() {
      return x() || j;
    }
    function z() {
      return x() || k;
    }
    function e() {
      return z();
    }
    function A() {
      return x() || l;
    }
    function B() {
      return x() || o;
    }
    function C() {
      return x() || n;
    }
    function D() {
      return x() || p;
    }
    function E() {
      return x() || s;
    }
    function F() {
      return x() || s || t || q || w;
    }
    function G() {
      return x() || v != null ? null : u;
    }
    function H() {
      return x() || q;
    }
    function I() {
      return x() || t;
    }
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I;
  },
  66
);
__d(
  "isScalar",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return /string|number|boolean/.test(typeof a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "DOM",
  [
    "$",
    "DOMQuery",
    "Event",
    "FBLogger",
    "FbtResultBase",
    "HTML",
    "TrustedTypesIEFixDOMPolicy",
    "UserAgent_DEPRECATED",
    "createArrayFromMixed",
    "fb-error",
    "isNode",
    "isScalar",
    "isTextNode",
  ],
  function (a, b, c, d, e, f, g) {
    a = function (a, b, c) {
      a = document.createElement(a);
      b && h.setAttributes(a, b);
      c != null && h.setContent(a, c);
      return a;
    };
    var h = {
      find: d("DOMQuery").find,
      findPushSafe: d("DOMQuery").findPushSafe,
      scry: d("DOMQuery").scry,
      getSelection: d("DOMQuery").getSelection,
      contains: d("DOMQuery").contains,
      getRootElement: d("DOMQuery").getRootElement,
      isNodeOfType: d("DOMQuery").isNodeOfType,
      isInputNode: d("DOMQuery").isInputNode,
      create: a,
      setAttributes: function (a, b) {
        b.type && (a.type = b.type);
        for (var d in b) {
          var e = b[d],
            f = /^on/i.test(d);
          f &&
            typeof e !== "function" &&
            c("FBLogger")("dom").warn(
              "Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",
              d,
              typeof e
            );
          if (d == "type") continue;
          else
            d == "style"
              ? typeof e === "string"
                ? (a.style.cssText = e)
                : Object.assign(a.style, e)
              : f
              ? c("Event").listen(a, d.substr(2), e)
              : d in a
              ? (a[d] = e)
              : a.setAttribute && a.setAttribute(d, e);
        }
      },
      prependContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        return j(b, a, function (b) {
          a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
        });
      },
      insertAfter: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
        });
      },
      insertBefore: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.insertBefore(b, a);
        });
      },
      setContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        while (a.firstChild) i(a.firstChild);
        return h.appendContent(a, b);
      },
      appendContent: function (a, b) {
        if (!a)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element is not a node")
          );
        return j(b, a, function (b) {
          a.appendChild(b);
        });
      },
      replace: function (a, b) {
        if (!a || !a.parentNode)
          throw c("fb-error").TAAL.blameToPreviousFile(
            new Error("reference element does not have a parent")
          );
        var d = a.parentNode;
        return j(b, d, function (b) {
          d.replaceChild(b, a);
        });
      },
      remove: function (a) {
        i(typeof a === "string" ? c("$")(a) : a);
      },
      empty: function (a) {
        a = typeof a === "string" ? c("$")(a) : a;
        while (a.firstChild) i(a.firstChild);
      },
    };
    function i(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function j(a, b, e) {
      a = c("HTML").replaceJSONWrapper(a);
      if (
        a instanceof c("HTML") &&
        b.firstChild === null &&
        -1 === a.toString().indexOf("<script")
      ) {
        var f = d("UserAgent_DEPRECATED").ie();
        if (
          !f ||
          (f > 7 &&
            !d("DOMQuery").isNodeOfType(b, [
              "table",
              "tbody",
              "thead",
              "tfoot",
              "tr",
              "select",
              "fieldset",
            ]))
        ) {
          var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
          b.innerHTML = c("TrustedTypesIEFixDOMPolicy").createHTML(g + a);
          f && b.removeChild(b.firstChild);
          return Array.from(b.childNodes);
        }
      } else if (c("isTextNode")(b)) {
        b.data = a;
        return [a];
      }
      g = document.createDocumentFragment();
      var h;
      f = [];
      b = [];
      var i = !1;
      a = c("createArrayFromMixed")(a);
      a.length === 1 &&
        a[0] instanceof c("FbtResultBase") &&
        (a = a[0].getContents());
      for (var j = 0; j < a.length; j++) {
        h = c("HTML").replaceJSONWrapper(a[j]);
        if (h instanceof c("HTML")) {
          b.push(h.getAction());
          var k = h.getNodes();
          !i &&
            h.hasInlineJs() &&
            (c("FBLogger")("staticresources").warn(
              "DOM: adding HTML which contains inline JS"
            ),
            (i = !0));
          for (var l = 0; l < k.length; l++) f.push(k[l]), g.appendChild(k[l]);
        } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
          l = document.createTextNode(h);
          f.push(l);
          g.appendChild(l);
        } else
          c("isNode")(h)
            ? (f.push(h), g.appendChild(h))
            : (Array.isArray(h) &&
                c("FBLogger")("dom").warn("Nest arrays not supported"),
              h !== null &&
                c("FBLogger")("dom").warn("No way to set content %s", h));
      }
      e(g);
      b.forEach(function (a) {
        a();
      });
      return f;
    }
    b = h;
    g["default"] = b;
  },
  98
);
__d(
  "AsyncDOM",
  ["CSS", "DOM", "FBLogger"],
  function (a, b, c, d, e, f) {
    a = {
      invoke: function (a, c) {
        for (var d = 0; d < a.length; ++d) {
          var e = a[d],
            f = e[0],
            g = e[1],
            h = e[2];
          e = e[3];
          h = (h && c) || null;
          g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
          h ||
            b("FBLogger")("async_dom").warn(
              "Could not find relativeTo element for %s AsyncDOM operation based on selector: %s",
              f,
              g
            );
          switch (f) {
            case "hide":
              b("CSS").hide(h);
              break;
            case "show":
              b("CSS").show(h);
              break;
            case "setContent":
              b("DOM").setContent(h, e);
              break;
            case "appendContent":
              b("DOM").appendContent(h, e);
              break;
            case "prependContent":
              b("DOM").prependContent(h, e);
              break;
            case "insertAfter":
              b("DOM").insertAfter(h, e);
              break;
            case "insertBefore":
              b("DOM").insertBefore(h, e);
              break;
            case "remove":
              b("DOM").remove(h);
              break;
            case "replace":
              b("DOM").replace(h, e);
              break;
            default:
              b("FBLogger")("async_dom").warn(
                "Received invalid command %s for AsyncDOM operation",
                f
              );
          }
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AsyncResponse",
  ["invariant", "Bootloader", "FBLogger", "HTML"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.error = 0),
          (this.errorSummary = null),
          (this.errorDescription = null),
          (this.onload = null),
          (this.replay = !1),
          (this.payload = b),
          (this.request = a),
          (this.silentError = !1),
          (this.transientError = !1),
          (this.blockedAction = !1),
          (this.is_last = !0),
          (this.responseHeaders = null);
      }
      var b = a.prototype;
      b.getRequest = function () {
        return this.request;
      };
      b.getPayload = function () {
        return this.payload;
      };
      b.toError = function () {
        this.error !== 0 || h(0, 5599);
        var a = this.errorSummary || "",
          b = this.getErrorDescriptionString() || "",
          c = new Error(a.toString() + ": " + b);
        Object.assign(c, {
          code: this.error,
          description: this.errorDescription || "",
          descriptionString: b,
          response: this,
          summary: a,
          isSilent: this.silentError,
          isTransient: this.transientError,
        });
        return c;
      };
      b.getError = function () {
        return this.error;
      };
      b.getErrorSummary = function () {
        return this.errorSummary;
      };
      b.setErrorSummary = function (a) {
        a = a === void 0 ? null : a;
        this.errorSummary = a;
        return this;
      };
      b.getErrorDescription = function () {
        return this.errorDescription;
      };
      b.getErrorDescriptionString = function () {
        var a = this.getErrorDescription();
        if (a == null) return null;
        if (c("HTML").isHTML(a)) {
          var b = new (c("HTML"))(a);
          return b.getRootNode().textContent;
        }
        return a.toString();
      };
      b.getErrorIsWarning = function () {
        return !!this.errorIsWarning;
      };
      b.isSilent = function () {
        return !!this.silentError;
      };
      b.isTransient = function () {
        return !!this.transientError;
      };
      b.isBlockedAction = function () {
        return !!this.blockedAction;
      };
      b.getResponseHeader = function (a) {
        var b = this.responseHeaders;
        if (!b) return null;
        b = b.replace(/^\n/, "");
        a = a.toLowerCase();
        b = b.split("\r\n");
        for (var c = 0; c < b.length; ++c) {
          var d = b[c],
            e = d.indexOf(": ");
          if (e <= 0) continue;
          var f = d.substring(0, e).toLowerCase();
          if (f === a) return d.substring(e + 2);
        }
        return null;
      };
      a.defaultErrorHandler = function (b) {
        try {
          !b.silentError
            ? a.verboseErrorHandler(b)
            : c("FBLogger")("async_response")
                .catching(b.toError())
                .warn("default error handler called");
        } catch (a) {
          alert(b);
        }
      };
      a.verboseErrorHandler = function (a, b) {
        c("Bootloader").loadModules(
          ["ExceptionDialog"],
          function (c) {
            return c.showAsyncError(a, b);
          },
          "AsyncResponse"
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FetchStreamConfig",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ delim: "/*<!-- fetch-stream -->*/" });
    f["default"] = a;
  },
  66
);
__d(
  "StreamBlockReader",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        var c = this;
        if (!a.getReader)
          throw new Error("No getReader method found on given object");
        this.$3 = a.getReader();
        this.$1 = "";
        this.$2 = null;
        this.$4 = !1;
        this.$5 = "utf-8";
        this.$6 = "";
        this.$9 = !1;
        this.$8 = function () {
          return b("Promise").reject(
            "Sorry, you are somehow using this too early."
          );
        };
        this.$7 = new (b("Promise"))(function (a, b) {
          c.$8 = a;
        });
      }
      var c = a.prototype;
      c.changeEncoding = function (a) {
        if (this.$2)
          throw new Error("Decoder already in use, encoding cannot be changed");
        this.$5 = a;
      };
      c.$10 = function () {
        if (!self.TextDecoder)
          throw new Error("TextDecoder is not supported here");
        this.$2 || (this.$2 = new self.TextDecoder(this.$5));
        return this.$2;
      };
      c.$11 = function () {
        if (this.$9)
          throw new Error("Something else is already reading from this reader");
        this.$9 = !0;
      };
      c.$12 = function () {
        this.$9 = !1;
      };
      c.isDone = function () {
        return this.$4;
      };
      c.$13 = function () {
        var a, c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (!(this.$6 !== "")) {
                    f.next = 4;
                    break;
                  }
                  a = this.$6;
                  this.$6 = "";
                  return f.abrupt("return", a);
                case 4:
                  if (!this.isDone()) {
                    f.next = 6;
                    break;
                  }
                  throw new Error("You cannot read from a stream that is done");
                case 6:
                  f.next = 8;
                  return b("regeneratorRuntime").awrap(this.$3.read());
                case 8:
                  c = f.sent;
                  d = c.done;
                  e = c.value;
                  this.$4 = d;
                  d && this.$8();
                  return f.abrupt(
                    "return",
                    e ? this.$10().decode(e, { stream: !d }) : ""
                  );
                case 14:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readNextBlock = function () {
        var a;
        return b("regeneratorRuntime").async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  this.$11();
                  a = this.$13();
                  this.$12();
                  return b.abrupt("return", a);
                case 4:
                case "end":
                  return b.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrEnd = function (a) {
        return b("regeneratorRuntime").async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b("regeneratorRuntime").awrap(
                    this.readUntilOneOfStringOrEnd_DO_NOT_USE([a])
                  );
                case 2:
                  return c.abrupt("return", c.sent);
                case 3:
                case "end":
                  return c.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrThrow = function (a) {
        var c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (a) {
                    f.next = 2;
                    break;
                  }
                  throw new Error("cannot read empty string");
                case 2:
                  this.$11(), (c = ""), (d = 0);
                case 5:
                  if (this.isDone()) {
                    f.next = 23;
                    break;
                  }
                  f.t0 = c;
                  f.next = 9;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 9:
                  c = f.t0 += f.sent;
                  if (!(c.length < a.length)) {
                    f.next = 12;
                    break;
                  }
                  return f.abrupt("continue", 5);
                case 12:
                  e = c.substring(d).indexOf(a);
                  if (!(e !== -1)) {
                    f.next = 20;
                    break;
                  }
                  e += d;
                  this.$6 = c.substring(e + a.length);
                  this.$12();
                  return f.abrupt("return", c.substring(0, e));
                case 20:
                  d = c.length - a.length + 1;
                case 21:
                  f.next = 5;
                  break;
                case 23:
                  this.$6 = c;
                  this.$12();
                  throw new Error("Breakpoint not found");
                case 26:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
        var c, d, e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  this.$11(), (c = "");
                case 2:
                  if (this.isDone()) {
                    g.next = 20;
                    break;
                  }
                  g.t0 = c;
                  g.next = 6;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 6:
                  (c = g.t0 += g.sent), (d = 0);
                case 8:
                  if (!(d < a.length)) {
                    g.next = 18;
                    break;
                  }
                  e = a[d];
                  f = c.indexOf(e);
                  if (!(f !== -1)) {
                    g.next = 15;
                    break;
                  }
                  this.$6 = c.substring(f + e.length);
                  this.$12();
                  return g.abrupt("return", c.substring(0, f));
                case 15:
                  d++;
                  g.next = 8;
                  break;
                case 18:
                  g.next = 2;
                  break;
                case 20:
                  this.$12();
                  return g.abrupt("return", c);
                case 22:
                case "end":
                  return g.stop();
              }
          },
          null,
          this
        );
      };
      c.waitUntilDone = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt("return", this.$7);
                case 1:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "mixin",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = function () {},
        b = 0,
        c;
      while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
        c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
        b += 1;
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "FetchStreamTransport",
  [
    "ArbiterMixin",
    "FetchStreamConfig",
    "StreamBlockReader",
    "TimeSlice",
    "URI",
    "asyncToGeneratorRuntime",
    "mixin",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 0;
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d(b) {
        var c;
        if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder)
          throw new Error("fetch stream transport is not supported here");
        c = a.call(this) || this;
        c.$FetchStreamTransport6 = null;
        c.$FetchStreamTransport1 = b;
        c.$FetchStreamTransport3 = !1;
        c.$FetchStreamTransport4 = !1;
        c.$FetchStreamTransport5 = !1;
        c.$FetchStreamTransport2 = ++h;
        return (
          babelHelpers.assertThisInitialized(c) ||
          babelHelpers.assertThisInitialized(c)
        );
      }
      var e = d.prototype;
      e.hasFinished = function () {
        return this.$FetchStreamTransport5;
      };
      e.getRequestURI = function () {
        return new (c("URI"))(this.$FetchStreamTransport1).addQueryData({
          __a: 1,
          __adt: this.$FetchStreamTransport2,
          __req: "fetchstream_" + this.$FetchStreamTransport2,
          ajaxpipe_fetch_stream: 1,
        });
      };
      e.send = function () {
        if (this.$FetchStreamTransport3)
          throw new Error("FetchStreamTransport instances cannot be re-used.");
        this.$FetchStreamTransport3 = !0;
        var a = new Request(this.getRequestURI().toString(), {
          mode: "same-origin",
          credentials: "include",
        });
        this.$FetchStreamTransport6 = c("TimeSlice").getGuardedContinuation(
          "FetchStreamTransport: waiting on first response"
        );
        a = self.fetch(a, { redirect: "follow" });
        this.$FetchStreamTransport7(a);
      };
      e.$FetchStreamTransport7 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b = this,
            d;
          try {
            d = yield a;
          } catch (a) {
            this.abort();
          }
          if (!d || !d.body || !d.ok) {
            this.abort();
            return;
          }
          var e = new (c("StreamBlockReader"))(d.body);
          a = function* () {
            var a = yield e.readUntilStringOrEnd(c("FetchStreamConfig").delim);
            if (b.$FetchStreamTransport4) return "break";
            c("nullthrows")(b.$FetchStreamTransport6)(function () {
              var d = JSON.parse(a);
              e.isDone() || d.finished
                ? (b.$FetchStreamTransport5 = !0)
                : (b.$FetchStreamTransport6 = c(
                    "TimeSlice"
                  ).getGuardedContinuation(
                    "FetchStreamTransport: waiting on next response"
                  ));
              b.inform("response", d.content);
            });
          };
          while (!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4) {
            var f = yield* a();
            if (f === "break") break;
          }
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.abort = function () {
        var a = this;
        if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
        this.$FetchStreamTransport4 = !0;
        this.$FetchStreamTransport5 = !0;
        if (this.$FetchStreamTransport6) {
          var b = this.$FetchStreamTransport6;
          b(function () {
            a.inform("abort");
          });
        } else this.inform("abort");
      };
      return d;
    })(c("mixin")(c("ArbiterMixin")));
    g["default"] = a;
  },
  98
);
__d(
  "HTTPErrors",
  ["emptyFunction"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return { summary: "HTTP Error", description: "Unknown HTTP error #" + a };
    }
    b = { get: a, getAll: c("emptyFunction").thatReturns(new Map()) };
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "JSONPTransport",
  ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    var h = {},
      i = 2;
    function j(a) {
      delete h[a];
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$JSONPTransport3 = !1;
        c.$JSONPTransport7 = b;
        h[c.getID()] = babelHelpers.assertThisInitialized(c);
        return c;
      }
      var d = b.prototype;
      d.getID = function () {
        return this.$JSONPTransport4 || (this.$JSONPTransport4 = i++);
      };
      d.hasFinished = function () {
        return !(this.getID() in h);
      };
      d.getRequestURI = function () {
        return new (c("URI"))(this.$JSONPTransport7).addQueryData({
          __a: 1,
          __adt: this.getID(),
          __req: "jsonp_" + this.getID(),
        });
      };
      d.getTransportFrame = function () {
        if (this.$JSONPTransport5) return this.$JSONPTransport5;
        var a = "transport_frame_" + this.getID();
        a = c("HTML")(
          '<iframe class="hidden_elem" name="' +
            a +
            '" src="javascript:void(0)" />'
        );
        return (this.$JSONPTransport5 = c("DOM").appendContent(
          document.body,
          a
        )[0]);
      };
      d.send = function () {
        var a = this;
        this.getTransportFrame().onload = function () {
          return a.$JSONPTransport8();
        };
        this.getTransportFrame().src = this.getRequestURI().toString();
        this.$JSONPTransport2 = c("TimeSlice").getGuardedContinuation(
          "JSONPTransport: waiting for first response"
        );
      };
      d.handleResponse = function (a) {
        var b = this;
        this.$JSONPTransport2 == null
          ? void 0
          : this.$JSONPTransport2(function () {
              b.inform("response", a),
                b.hasFinished()
                  ? c("setTimeout")(function () {
                      return b.$JSONPTransport9();
                    }, 0)
                  : (b.$JSONPTransport2 = c("TimeSlice").getGuardedContinuation(
                      "JSONPTransport: waiting for next response"
                    ));
            });
      };
      d.abort = function () {
        if (this.$JSONPTransport1) return;
        this.$JSONPTransport1 = !0;
        this.$JSONPTransport9();
        j(this.getID());
        this.inform("abort");
      };
      d.$JSONPTransport8 = function () {
        this.$JSONPTransport3 || this.abort();
      };
      d.$JSONPTransport9 = function () {
        this.$JSONPTransport5 &&
          (c("DOM").remove(this.$JSONPTransport5),
          (this.$JSONPTransport5 = null));
      };
      return b;
    })(c("mixin")(c("ArbiterMixin")));
    a.respond = function (a, b, c) {
      var d = h[a];
      if (d) {
        d.$JSONPTransport3 = !0;
        c || j(a);
        b;
        if (typeof b === "string") c = JSON.parse(b);
        else {
          c = JSON.parse((a = JSON.stringify(b)) != null ? a : "null");
        }
        d.handleResponse(c);
      }
    };
    a.respond = c("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
      root: !0,
    });
    g["default"] = a;
  },
  98
);
__d(
  "SessionName",
  ["SessionNameConfig"],
  function (a, b, c, d, e, f) {
    e.exports = {
      getName: function () {
        return b("SessionNameConfig").seed;
      },
    };
  },
  null
);
__d(
  "bind",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      if (typeof b !== "string")
        return Function.prototype.bind.apply(b, [a].concat(c));
      function d() {
        var d = c.concat(Array.prototype.slice.call(arguments));
        if (a[b]) return a[b].apply(a, d);
      }
      d.toString = function () {
        return "bound lazily: " + a[b];
      };
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "executeAfter",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return function () {
        a.apply(c || this, arguments), b.apply(c || this, arguments);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "isSparkDotMetaDotComURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)spark\\.meta\\.com$", "i"),
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
  "AsyncRequest",
  [
    "errorCode",
    "fbt",
    "invariant",
    "Arbiter",
    "AsyncDOM",
    "AsyncRequestConfig",
    "AsyncResponse",
    "Bootloader",
    "CSS",
    "DTSG",
    "DTSG_ASYNC",
    "Deferred",
    "Env",
    "ErrorGuard",
    "Event",
    "FBLogger",
    "FetchStreamTransport",
    "HTTPErrors",
    "HasteResponse",
    "PHPQuerySerializer",
    "Parent",
    "Promise",
    "ResourceTimingsStore",
    "ResourceTypes",
    "ScriptPath",
    "ServerJS",
    "SessionName",
    "TimeSlice",
    "URI",
    "UserAgent_DEPRECATED",
    "ZeroRewrites",
    "bind",
    "clearTimeout",
    "emptyFunction",
    "executeAfter",
    "fb-error",
    "ge",
    "getAsyncHeaders",
    "getAsyncParams",
    "gkx",
    "goURI",
    "isBulletinDotComURI",
    "isEmpty",
    "isFacebookURI",
    "isHorizonDotMetaDotComURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isSparkDotMetaDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
    "isWorkroomsDotComURI",
    "killswitch",
    "performanceAbsoluteNow",
    "promiseDone",
    "replaceTransportMarkers",
    "setTimeout",
    "setTimeoutAcrossTransitions",
    "uriIsRelativePath",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    f = 19e3;
    h = 500;
    var k = 1006,
      l = 1004,
      m = 1010,
      n = new Set([h, m, l, k]);
    function o() {
      try {
        return !window.domready;
      } catch (a) {
        return !0;
      }
    }
    function p(a) {
      return "onprogress" in a;
    }
    function q(a) {
      return "upload" in a && "onprogress" in a.upload;
    }
    function r(a) {
      return "withCredentials" in a;
    }
    function s(a) {
      return a.status in { 0: 1, 12029: 1, 12030: 1, 12031: 1, 12152: 1 };
    }
    function t(a) {
      a = !a || typeof a === "function";
      a ||
        c("FBLogger")("asyncresponse").mustfix(
          "AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one."
        );
      return a;
    }
    var u = 2,
      v = u,
      w = !1;
    c("Arbiter").subscribe("page_transition", function (a, b) {
      !w ? (v = b.id) : (w = !1);
    });
    var x = "for (;;);",
      y = x.length,
      z = (function () {
        function a(b) {
          var e = this;
          this._allowIrrelevantRequests = !1;
          this._delayPreDisplayJS = !1;
          this._shouldReplaceTransportMarkers = !1;
          this._dispatchErrorResponse = function (a, b) {
            var d = a.getError();
            e.clearStatusIndicator();
            if (!e._isRelevant() || d === m) {
              e.abort();
              return;
            }
            if (e._isServerDialogErrorCode(d)) {
              var f = d == 1357008 || d == 1357007;
              e.interceptHandler(a);
              d == 1357041
                ? e._solveQuicksandChallenge(a)
                : d == 1357007
                ? e._displayServerDialog(a, f, !0)
                : e._displayServerDialog(a, f);
            } else if (e.initialHandler(a) !== !1) {
              c("clearTimeout")(e.timer);
              try {
                b(a);
              } catch (b) {
                e.finallyHandler(a);
                throw b;
              }
              e.finallyHandler(a);
            }
          };
          this._onStateChange = function () {
            var b = e.transport;
            if (!b) return;
            try {
              a._inflightCount--;
              d("ResourceTimingsStore").measureResponseReceived(
                c("ResourceTypes").XHR,
                e.resourceTimingStoreUID
              );
              try {
                b.getResponseHeader("X-FB-Debug") &&
                  ((e._xFbServer = b.getResponseHeader("X-FB-Debug")),
                  c("fb-error").ErrorXFBDebug.add(e._xFbServer));
              } catch (a) {}
              if (b.status >= 200 && b.status < 300)
                (a.lastSuccessTime = Date.now()), e._handleXHRResponse(b);
              else if (
                d("UserAgent_DEPRECATED").webkit() &&
                typeof b.status === "undefined"
              )
                e._invokeErrorHandler(1002);
              else if (
                c("AsyncRequestConfig").retryOnNetworkError &&
                s(b) &&
                e.remainingRetries > 0 &&
                !e._requestTimeout
              ) {
                e.remainingRetries--;
                delete e.transport;
                e.send(!0);
                return;
              } else e._invokeErrorHandler();
              e.getOption("asynchronous_DEPRECATED") !== !1 &&
                delete e.transport;
            } catch (a) {
              if (o()) return;
              delete e.transport;
              e.remainingRetries > 0
                ? (e.remainingRetries--, e.send(!0))
                : (e.getOption("suppressErrorAlerts") ||
                    c("FBLogger")("AsyncRequest")
                      .catching(a)
                      .mustfix(
                        "AsyncRequest exception when attempting to handle a state change"
                      ),
                  e._invokeErrorHandler(1007));
            }
          };
          this._handleTimeout = function () {
            e.continuation.last(function () {
              e._requestTimeout = !0;
              var a = e.timeoutHandler;
              e.abandon();
              a && a(e);
              c("setTimeout")(function () {
                c("Arbiter").inform("AsyncRequest/timeout", { request: e });
              }, 0);
            });
          };
          this.continuation =
            c("TimeSlice").getPlaceholderReusableContinuation();
          this.transport = null;
          this.method = "POST";
          this.uri = "";
          this.timeout = null;
          this.timer = null;
          this.initialHandler = c("emptyFunction");
          this.handler = null;
          this.uploadProgressHandler = null;
          this.errorHandler = c("AsyncResponse").defaultErrorHandler;
          this.transportErrorHandler = null;
          this.timeoutHandler = null;
          this.interceptHandler = c("emptyFunction");
          this.finallyHandler = c("emptyFunction");
          this.abortHandler = c("emptyFunction");
          this.serverDialogCancelHandler = null;
          this.relativeTo = null;
          this.statusElement = null;
          this.statusClass = "";
          this.data = {};
          this.headers = {};
          this.file = null;
          this.context = {};
          this.readOnly = !1;
          this.writeRequiredParams = [];
          this.remainingRetries = 0;
          this.userActionID = "-";
          this.resourceTimingStoreUID = d("ResourceTimingsStore").getUID(
            c("ResourceTypes").XHR,
            b != null ? b.toString() : ""
          );
          this.flushedResponseTextParseIndex = 0;
          this.option = {
            asynchronous_DEPRECATED: !0,
            suppressErrorHandlerWarning: !1,
            suppressEvaluation: !1,
            suppressErrorAlerts: !1,
            retries: 0,
            bundle: !1,
            useIframeTransport: !1,
            handleErrorAfterUnload: !1,
            useFetchWithIframeFallback: !1,
          };
          this.transportErrorHandler = c("bind")(this, "errorHandler");
          b !== void 0 && this.setURI(b);
          this.setAllowCrossPageTransition(
            c("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1
          );
        }
        var f = a.prototype;
        f._dispatchResponse = function (a) {
          this.clearStatusIndicator();
          if (!this._isRelevant()) {
            this._invokeErrorHandler(m);
            return;
          }
          if (this.initialHandler(a) === !1) return;
          c("clearTimeout")(this.timer);
          var b,
            d = this.getHandler();
          if (d)
            try {
              b = this._shouldSuppressJS(d(a));
            } catch (b) {
              a.is_last && this.finallyHandler(a);
              throw b;
            }
          b || this._handleJSResponse(a);
          a.is_last && this.finallyHandler(a);
        };
        f._shouldSuppressJS = function (b) {
          return b === a.suppressOnloadToken;
        };
        f._handlePreDisplayServerJS = function (a, b) {
          var d = !1,
            e = [],
            f = function () {
              if (d) {
                c("FBLogger")("AsyncResponse").warn(
                  "registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op."
                );
                return function () {};
              }
              var a,
                b = new (c("Deferred"))();
              e.push(b.getPromise());
              return c("TimeSlice").guard(
                function () {
                  a && c("clearTimeout")(a), b.resolve();
                },
                "AsyncRequestDisplayBlockingEvent",
                { propagationType: c("TimeSlice").PropagationType.EXECUTION }
              );
            };
          a.handle(b, {
            bigPipeContext: { registerToBlockDisplayUntilDone_DONOTUSE: f },
          });
          d = !0;
          return e;
        };
        f._hasEvalDomOp = function (a) {
          return a && a.length
            ? a.some(function (a) {
                return a[0] === "eval";
              })
            : !1;
        };
        f._handleJSResponse = function (a) {
          var b = this.getRelativeTo(),
            e = a.domops,
            f = a.dtsgToken,
            g = a.dtsgAsyncGetToken,
            h = a.jsmods,
            i = a.savedServerJSInstance;
          i && i instanceof c("ServerJS")
            ? (i = i)
            : (i = new (c("ServerJS"))());
          i.setRelativeTo(b);
          if (h) {
            var j = {
              define: h.define,
              instances: h.instances,
              markup: h.markup,
            };
            delete h.define;
            delete h.instances;
            delete h.markup;
            this._hasEvalDomOp(e) &&
              ((j.elements = h.elements), delete h.elements);
            i.handle(j);
          }
          j = new (c("URI"))(this.uri);
          ((!j.getDomain() && !j.getProtocol()) ||
            document.location.origin === j.getOrigin()) &&
            (f && d("DTSG").setToken(f), g && d("DTSG_ASYNC").setToken(g));
          e &&
            c("ErrorGuard").applyWithGuard(
              function () {
                return d("AsyncDOM").invoke(e, b);
              },
              null,
              [],
              { errorType: "warn" }
            );
          h && i.handle(h);
          this._handleJSRegisters(a, "onload");
          this._handleJSRegisters(a, "onafterload");
        };
        f._handleJSRegisters = function (a, b) {
          a = a[b];
          if (a)
            for (b = 0; b < a.length; b++) {
              var d = null,
                e = a[b],
                f = e.match(/^\"caller:([^\"]+?)\";(.*)/);
              f != null && ((d = f[1]), (e = f[2]));
              c("ErrorGuard").applyWithGuard(new Function(e), this, []);
              c("FBLogger")("comet_infra").info(
                "Detected dynamic new Function(...) call in AsyncRequest._handleJSRegisters(...).",
                new (c("URI"))(this.uri).getPath(),
                d
              );
            }
        };
        f.invokeResponseHandler = function (a) {
          var e = this;
          if (typeof a.redirect !== "undefined") {
            c("setTimeout")(function () {
              e.setURI(a.redirect, !0).send();
            }, 0);
            return;
          }
          if (a.bootloadOnly !== void 0) {
            var f =
                typeof a.bootloadOnly === "string"
                  ? JSON.parse(a.bootloadOnly)
                  : a.bootloadOnly,
              g = function (a) {
                c("TimeSlice").guard(
                  function () {
                    c("Bootloader").loadPredictedResourceMap(a);
                  },
                  "Bootloader.loadPredictedResourceMap",
                  { root: !0 }
                )();
              };
            for (f of f) g(f);
            return;
          }
          if (
            !this.handler &&
            !this.errorHandler &&
            !this.transportErrorHandler &&
            !this.preBootloadHandler &&
            this.initialHandler === c("emptyFunction") &&
            this.finallyHandler === c("emptyFunction")
          )
            return;
          var h = a.asyncResponse;
          if (typeof h !== "undefined") {
            if (!this._isRelevant()) {
              this._invokeErrorHandler(m);
              return;
            }
            h.updateScriptPath &&
              c("ScriptPath").set(
                h.updateScriptPath.path,
                h.updateScriptPath.token,
                h.updateScriptPath.extra_info
              );
            h.lid && ((this._responseTime = Date.now()), (this.lid = h.lid));
            d("HasteResponse").handleSRPayload((g = h.hsrp) != null ? g : {});
            var i, j;
            if (h.getError() && !h.getErrorIsWarning()) {
              f = this.getErrorHandler().bind(this);
              i = c("ErrorGuard").guard(this._dispatchErrorResponse, {
                name:
                  "AsyncRequest#_dispatchErrorResponse for " + this.getURI(),
              });
              i = i.bind(this, h, f);
              j = "error";
            } else {
              i = c("ErrorGuard").guard(this._dispatchResponse.bind(this), {
                name: "AsyncRequest#_dispatchResponse for " + this.getURI(),
              });
              i = i.bind(this, h);
              j = "response";
              g = h.domops;
              if (
                !this._delayPreDisplayJS &&
                h.jsmods &&
                h.jsmods.pre_display_requires &&
                !this._hasEvalDomOp(g) &&
                !c("killswitch")(
                  "ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS"
                )
              ) {
                f = h.jsmods;
                g = {
                  define: f.define,
                  instances: f.instances,
                  markup: f.markup,
                };
                delete f.define;
                delete f.instances;
                delete f.markup;
                g.pre_display_requires = f.pre_display_requires;
                delete f.pre_display_requires;
                f = new (c("ServerJS"))();
                f.setRelativeTo(this.getRelativeTo());
                h.savedServerJSInstance = f;
                var k = this._handlePreDisplayServerJS(f, g);
                if (k && k.length) {
                  var l = i;
                  i = function () {
                    c("promiseDone")(b("Promise").all(k).then(l));
                  };
                }
              }
            }
            var n = c("performanceAbsoluteNow")();
            i = c("executeAfter")(i, function () {
              c("Arbiter").inform("AsyncRequest/" + j, {
                request: e,
                response: h,
                ts: n,
              });
            });
            this.preBootloadHandler && this.preBootloadHandler(h);
            c("Bootloader").loadResources(
              (f = h.allResources) != null ? f : [],
              {
                onAll: c("AsyncRequestConfig").immediateDispatch
                  ? i
                  : function () {
                      c("setTimeout")(i, 0);
                    },
              }
            );
          } else
            typeof a.transportError !== "undefined"
              ? this._xFbServer
                ? this._invokeErrorHandler(1008)
                : this._invokeErrorHandler(1012)
              : this._invokeErrorHandler(1007);
        };
        f._invokeErrorHandler = function (a) {
          var b = this,
            d = this.transport;
          if (!d) return;
          var e;
          if (this.responseText === "") e = 1002;
          else if (this._requestAborted) e = 1011;
          else {
            try {
              e = a || d.status || l;
            } catch (a) {
              e = 1005;
            }
            !1 === navigator.onLine && (e = k);
          }
          var f, g;
          a = !0;
          if (e === k)
            (g = i._("No Network Connection")),
              (f = i._(
                "Your browser appears to be offline. Please check your internet connection and try again."
              ));
          else if (e >= 300 && e <= 399) {
            g = i._("Redirection");
            f = i._(
              "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload."
            );
            var h = d.getResponseHeader("Location");
            h && c("goURI")(h, !0);
            a = !0;
          } else
            (g = i._("Oops")),
              (f = i._(
                "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again."
              ));
          var j = new (c("AsyncResponse"))(this, d);
          Object.assign(j, {
            error: e,
            errorSummary: g,
            errorDescription: f,
            silentError: a,
          });
          c("setTimeout")(function () {
            c("Arbiter").inform("AsyncRequest/error", {
              request: b,
              response: j,
            });
          }, 0);
          if (o() && !this.getOption("handleErrorAfterUnload")) return;
          if (!this.transportErrorHandler) {
            c("FBLogger")("asyncresponse").mustfix(
              "Async request to %s failed with a %d error, but there was no error handler available to deal with it.",
              this.getURI(),
              e
            );
            return;
          }
          h = this.getTransportErrorHandler().bind(this);
          !(this.getOption("suppressErrorAlerts") || n.has(e))
            ? c("FBLogger")("asyncresponse")
                .addToCategoryKey(String(e))
                .mustfix(
                  "Async request failed with error %s: %s when requesting %s",
                  e,
                  f.toString(),
                  this.getURI()
                )
            : n.has(e) &&
              c("FBLogger")("asyncresponse")
                .addToCategoryKey(String(e))
                .warn(
                  "Async request failed with error %s: %s when requesting %s",
                  e,
                  f.toString(),
                  this.getURI()
                );
          c("ErrorGuard").applyWithGuard(this._dispatchErrorResponse, this, [
            j,
            h,
          ]);
        };
        f._isServerDialogErrorCode = function (a) {
          return (
            a == 1357008 ||
            a == 1357007 ||
            a == 1357041 ||
            a == 1442002 ||
            a == 1357001
          );
        };
        f._solveQuicksandChallenge = function (a) {
          var b = this,
            d = a.getPayload();
          c("Bootloader").loadModules(
            ["QuickSandSolver"],
            function (a) {
              a.solveAndSendRequestBack(b, d);
            },
            "AsyncRequest"
          );
        };
        f._displayServerDialog = function (a, b, d) {
          var e = this;
          d === void 0 && (d = !1);
          var f = a.getPayload();
          if (f.__dialog !== void 0) {
            this._displayServerLegacyDialog(a, b);
            return;
          }
          b = f.__dialogx;
          new (c("ServerJS"))().handle(b);
          if (f.__should_use_mwa_reauth === !0) {
            c("Bootloader").loadModules(
              ["MWADeveloperReauthBarrier"],
              function (b) {
                b.registerRequest(f.__dialogID, e, a);
              },
              "AsyncRequest"
            );
            return;
          }
          c("Bootloader").loadModules(
            ["ConfirmationDialog"],
            function (b) {
              b.setupConfirmation(a, e, d);
            },
            "AsyncRequest"
          );
        };
        f._displayServerLegacyDialog = function (a, b) {
          var d = this,
            e = a.getPayload().__dialog;
          if (c("gkx")("708253")) {
            var f;
            c("FBLogger")("comet_infra")
              .addMetadata("COMET_INFRA", "ERROR_CODE", a.getError().toString())
              .addMetadata(
                "COMET_INFRA",
                "ERROR_URL",
                (f = (f = a.request) == null ? void 0 : f.getURI()) != null
                  ? f
                  : "unknown"
              )
              .mustfix(
                "AsyncRequest._displayServerLegacyDialog called in Comet"
              );
          }
          c("Bootloader").loadModules(
            ["Dialog"],
            function (c) {
              c = new c(e);
              b && c.setHandler(d._displayConfirmationHandler.bind(d, c));
              c.setCancelHandler(function () {
                var b = d.getServerDialogCancelHandler();
                try {
                  b && b(a);
                } catch (a) {
                  throw a;
                } finally {
                  d.finallyHandler(a);
                }
              })
                .setCausalElement(d.relativeTo)
                .show();
            },
            "AsyncRequest"
          );
        };
        f._displayConfirmationHandler = function (a) {
          (this.data.confirmed = 1),
            Object.assign(this.data, a.getFormData()),
            this.send();
        };
        f._setJSONPTransport = function (a) {
          a.subscribe("response", this._handleJSONPResponse.bind(this)),
            a.subscribe("abort", this._handleJSONPAbort.bind(this)),
            (this.transport = a);
        };
        f._handleJSONPResponse = function (a, b) {
          a = this.transport;
          if (!a) return;
          b.bootloadOnly || (this.is_first = this.is_first === void 0);
          b = this._interpretResponse(b);
          b.asyncResponse &&
            ((b.asyncResponse.is_first = this.is_first),
            (b.asyncResponse.is_last = a.hasFinished()));
          this.invokeResponseHandler(b);
          a.hasFinished() && delete this.transport;
        };
        f._handleJSONPAbort = function () {
          this._invokeErrorHandler(), delete this.transport;
        };
        f._handleXHRResponse = function (a) {
          var b;
          if (this.getOption("suppressEvaluation"))
            b = { asyncResponse: new (c("AsyncResponse"))(this, a) };
          else
            try {
              this._handleFlushedResponse();
              a = a.responseText;
              a = this._filterOutFlushedText(a);
              a = this._unshieldResponseText(a);
              a = JSON.parse(a);
              b = this._interpretResponse(a);
            } catch (a) {
              (b = a.message),
                c("FBLogger")("async_request")
                  .catching(a)
                  .warn("Failed to handle response");
            }
          this.invokeResponseHandler(b);
        };
        f._handleFlushedResponse = function () {
          var a = this.flushedResponseHandler,
            b = this.transport;
          if (a && b) {
            var c = b.responseText.indexOf(x);
            c = c === -1 ? b.responseText.length : c;
            a(b.responseText.substring(this.flushedResponseTextParseIndex, c));
            this.flushedResponseTextParseIndex = c;
          }
        };
        f._unshieldResponseText = function (a) {
          if (a.length <= y) throw new Error("Response too short on async");
          var b = 0;
          while (a.charAt(b) == " " || a.charAt(b) == "\n") b++;
          b && a.substring(b, b + y) == x;
          return a.substring(b + y);
        };
        f._filterOutFlushedText = function (a) {
          if (!this.flushedResponseHandler) return a;
          var b = a.indexOf(x);
          return b < 0 ? a : a.substr(b);
        };
        f._interpretResponse = function (a) {
          if (a.redirect) return { redirect: a.redirect };
          if (a.bootloadOnly) return { bootloadOnly: a.bootloadOnly };
          var b = a.error && this._isServerDialogErrorCode(a.error);
          this._shouldReplaceTransportMarkers &&
            a.payload &&
            !b &&
            c("replaceTransportMarkers")(
              { relativeTo: this.getRelativeTo(), bigPipeContext: null },
              a.payload
            );
          b = new (c("AsyncResponse"))(this);
          if (a.__ar != 1)
            c("FBLogger")("AsyncRequest").warn(
              "AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.",
              this.getURI()
            ),
              (b.payload = a);
          else {
            Object.assign(b, a);
            a = this.transport;
            a &&
              a.getAllResponseHeaders !== void 0 &&
              (b.responseHeaders = a.getAllResponseHeaders());
          }
          return { asyncResponse: b };
        };
        f._isMultiplexable = function () {
          if (
            this.getOption("useIframeTransport") ||
            this.getOption("useFetchWithIframeFallback")
          ) {
            c("FBLogger")("AsyncRequest").mustfix(
              "You cannot bundle AsyncRequest that uses iframe transport."
            );
            return !1;
          }
          if (!c("isFacebookURI")(new (c("URI"))(this.uri))) {
            c("FBLogger")("AsyncRequest").mustfix(
              "You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s",
              this.getURI()
            );
            return !1;
          }
          if (!this.getOption("asynchronous_DEPRECATED")) {
            c("FBLogger")("AsyncRequest").mustfix(
              "We cannot bundle synchronous AsyncRequests"
            );
            return !1;
          }
          return !0;
        };
        f.handleResponse = function (a) {
          a = this._interpretResponse(a);
          this.invokeResponseHandler(a);
        };
        f.setMethod = function (a) {
          this.method = a.toString().toUpperCase();
          return this;
        };
        f.getMethod = function () {
          return this.method;
        };
        f.setData = function (a) {
          this.data = a;
          return this;
        };
        f.setRequestHeader = function (a, b) {
          this.headers[a] = b;
          return this;
        };
        f.setRawData = function (a) {
          this.rawData = a;
          return this;
        };
        f.getData = function () {
          return this.data;
        };
        f.setContextData = function (a, b, c) {
          c = c === void 0 ? !0 : c;
          c && (this.context["_log_" + a] = b);
          return this;
        };
        f._setUserActionID = function () {
          this.userActionID = (d("SessionName").getName() || "-") + "/-";
        };
        f.setURI = function (a, b) {
          b === void 0 && (b = !1);
          typeof a === "string" &&
            a.match(/^\/?u_\d+_\d+/) &&
            c("FBLogger")("asyncrequest").warn("Invalid URI %s", a);
          var e = new (c("URI"))(a);
          if (
            (this.getOption("useIframeTransport") ||
              this.getOption("useFetchWithIframeFallback")) &&
            !c("isFacebookURI")(e)
          ) {
            b && j(0, 45284);
            return this;
          }
          if (
            !this._allowCrossOrigin &&
            !this.getOption("useIframeTransport") &&
            !this.getOption("useFetchWithIframeFallback") &&
            !e.isSameOrigin() &&
            !c("uriIsRelativePath")(e)
          ) {
            b && j(0, 45285);
            return this;
          }
          this._setUserActionID();
          if (!a || e.isEmpty()) {
            c("FBLogger")("async_request").mustfix("URI cannot be empty");
            return this;
          }
          this.uri = d("ZeroRewrites").rewriteURI(e);
          return this;
        };
        f.getURI = function () {
          return this.uri.toString();
        };
        f.delayPreDisplayJS = function (a) {
          a === void 0 && (a = !0);
          this._delayPreDisplayJS = a;
          return this;
        };
        f.setInitialHandler = function (a) {
          this.initialHandler = a;
          return this;
        };
        f.setPayloadHandler = function (a) {
          this.setHandler(function (b) {
            a(b.payload);
          });
          return this;
        };
        f.setHandler = function (a) {
          t(a) && (this.handler = a);
          return this;
        };
        f.setFlushedResponseHandler = function (a) {
          t(a) && (this.flushedResponseHandler = a);
          return this;
        };
        f.getHandler = function () {
          return this.handler || c("emptyFunction");
        };
        f.setProgressHandler = function (a) {
          t(a) && (this.progressHandler = a);
          return this;
        };
        f.setUploadProgressHandler = function (a) {
          t(a) && (this.uploadProgressHandler = a);
          return this;
        };
        f.setErrorHandler = function (a) {
          t(a) && (this.errorHandler = a);
          return this;
        };
        f.setTransportErrorHandler = function (a) {
          this.transportErrorHandler = a;
          return this;
        };
        f.getErrorHandler = function () {
          return this.errorHandler || c("emptyFunction");
        };
        f.getTransportErrorHandler = function () {
          return this.transportErrorHandler || c("emptyFunction");
        };
        f.setTimeoutHandler = function (a, b) {
          t(b) && ((this.timeout = a), (this.timeoutHandler = b));
          return this;
        };
        f.resetTimeout = function (a) {
          if (!(this.timeoutHandler === null))
            if (a === null)
              (this.timeout = null),
                c("clearTimeout")(this.timer),
                (this.timer = null);
            else {
              var b = !this._allowCrossPageTransition;
              this.timeout = a;
              c("clearTimeout")(this.timer);
              b
                ? (this.timer = c("setTimeout")(
                    this._handleTimeout.bind(this),
                    this.timeout
                  ))
                : (this.timer = c("setTimeoutAcrossTransitions")(
                    this._handleTimeout.bind(this),
                    this.timeout
                  ));
            }
          return this;
        };
        f.setNewSerial = function () {
          this.id = ++u;
          return this;
        };
        f.setInterceptHandler = function (a) {
          this.interceptHandler = a;
          return this;
        };
        f.setFinallyHandler = function (a) {
          this.finallyHandler = a;
          return this;
        };
        f.setAbortHandler = function (a) {
          this.abortHandler = a;
          return this;
        };
        f.getServerDialogCancelHandler = function () {
          return this.serverDialogCancelHandler;
        };
        f.setServerDialogCancelHandler = function (a) {
          this.serverDialogCancelHandler = a;
          return this;
        };
        f.setPreBootloadHandler = function (a) {
          this.preBootloadHandler = a;
          return this;
        };
        f.setReadOnly = function (a) {
          typeof a !== "boolean" || (this.readOnly = a);
          return this;
        };
        f.getReadOnly = function () {
          return this.readOnly;
        };
        f.setRelativeTo = function (a) {
          this.relativeTo = a;
          return this;
        };
        f.getRelativeTo = function () {
          return this.relativeTo;
        };
        f.setStatusClass = function (a) {
          this.statusClass = a;
          return this;
        };
        f.setStatusElement = function (a) {
          this.statusElement = a;
          return this;
        };
        f.getStatusElement = function () {
          return c("ge")(this.statusElement);
        };
        f._isRelevant = function () {
          if (this._allowCrossPageTransition) return !0;
          return !this.id ? !0 : this.id > v;
        };
        f.clearStatusIndicator = function () {
          var a = this.getStatusElement();
          a &&
            (d("CSS").removeClass(a, "async_saving"),
            d("CSS").removeClass(a, this.statusClass));
        };
        f._addStatusIndicator = function () {
          var a = this.getStatusElement();
          a &&
            (d("CSS").addClass(a, "async_saving"),
            d("CSS").addClass(a, this.statusClass));
        };
        f.specifiesWriteRequiredParams = function () {
          var a = this;
          return this.writeRequiredParams.every(function (b) {
            a.data[b] = a.data[b] || c("Env")[b] || (c("ge")(b) || {}).value;
            return a.data[b] !== void 0 ? !0 : !1;
          });
        };
        f.setOption = function (a, b) {
          typeof this.option[a] !== "undefined" && (this.option[a] = b);
          return this;
        };
        f.getOption = function (a) {
          typeof this.option[a] === "undefined";
          return this.option[a];
        };
        f.abort = function () {
          var a = this;
          this.continuation.last(function () {
            var b = a.transport;
            if (b) {
              var d = a.getTransportErrorHandler();
              a.setOption("suppressErrorAlerts", !0);
              a.setTransportErrorHandler(c("emptyFunction"));
              a._requestAborted = !0;
              b.abort();
              a.setTransportErrorHandler(d);
            }
            a.abortHandler();
            C.unschedule(a);
          });
        };
        f.abandon = function () {
          var a = this;
          this.continuation.last(function () {
            c("clearTimeout")(a.timer);
            a.setOption("suppressErrorAlerts", !0)
              .setHandler(c("emptyFunction"))
              .setErrorHandler(c("emptyFunction"))
              .setTransportErrorHandler(c("emptyFunction"))
              .setProgressHandler(c("emptyFunction"))
              .setUploadProgressHandler(c("emptyFunction"));
            var b = a.transport;
            b &&
              ((a._requestAborted = !0),
              p(b) && delete b.onprogress,
              q(b) && delete b.upload.onprogress,
              b.abort());
            a.abortHandler();
            C.unschedule(a);
          });
        };
        f.setNectarModuleDataSafe = function (a) {
          var b = this.setNectarModuleData;
          b && b.call(this, a);
          return this;
        };
        f.setAllowCrossPageTransition = function (a) {
          this._allowCrossPageTransition = !!a;
          this.timer && this.resetTimeout(this.timeout);
          return this;
        };
        f.getAllowIrrelevantRequests = function () {
          return this._allowIrrelevantRequests;
        };
        f.setAllowIrrelevantRequests = function (a) {
          this._allowIrrelevantRequests = a;
          return this;
        };
        f.setAllowCrossOrigin = function (a) {
          this._allowCrossOrigin = a;
          return this;
        };
        f.setAllowCredentials = function (a) {
          this._allowCredentials = a;
          return this;
        };
        f.setIsBackgroundRequest = function (a) {
          this._isBackgroundRequest = a;
          return this;
        };
        f.setReplaceTransportMarkers = function (a) {
          a === void 0 && (a = !0);
          this._shouldReplaceTransportMarkers = a;
          return this;
        };
        f.sendAndReturnAbortHandler = function () {
          var a = this;
          this.send();
          return function () {
            return a.abort();
          };
        };
        f.send = function (b) {
          var f = this;
          b = b || !1;
          if (!this.uri) return !1;
          this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
          (this.getOption("useIframeTransport") ||
            this.getOption("useFetchWithIframeFallback")) &&
            this.method != "GET" &&
            this.setMethod("GET");
          this.timeoutHandler !== null &&
            (this.getOption("useIframeTransport") ||
              this.getOption("useFetchWithIframeFallback"));
          if (!this.getReadOnly()) {
            this.specifiesWriteRequiredParams();
            if (this.method != "POST") return !1;
          }
          if (document.location.search.toString().includes(this.uri.toString()))
            return !1;
          if (
            this.uri.toString().includes("/../") ||
            this.uri.toString().includes("\\../") ||
            this.uri.toString().includes("/..\\") ||
            this.uri.toString().includes("\\..\\")
          )
            return !1;
          Object.assign(this.data, c("getAsyncParams")(this.method));
          c("isEmpty")(this.context) ||
            (Object.assign(this.data, this.context), (this.data.ajax_log = 1));
          c("Env").force_param &&
            Object.assign(this.data, c("Env").force_param);
          this._setUserActionID();
          if (this.getOption("bundle") && this._isMultiplexable()) {
            C.schedule(this);
            return !0;
          }
          this.setNewSerial();
          this.getOption("asynchronous_DEPRECATED") ||
            this.uri.addQueryData({ __sjax: 1 });
          c("Arbiter").inform("AsyncRequest/send", {
            request: this,
            ts: c("performanceAbsoluteNow")(),
          });
          var g, h;
          this.method == "GET" &&
            this.uri.addQueryData({ fb_dtsg_ag: d("DTSG_ASYNC").getToken() });
          this.method == "GET" || this.rawData
            ? ((g = this.uri.addQueryData(this.data).toString()),
              (h = this.rawData || ""))
            : (this._allowCrossOrigin && this.uri.addQueryData({ __a: 1 }),
              (g = this.uri.toString()),
              (h = d("PHPQuerySerializer").serialize(this.data)));
          if (this.transport) return !1;
          if (this.getOption("useFetchWithIframeFallback"))
            try {
              var i = new (c("FetchStreamTransport"))(this.uri);
              this._setJSONPTransport(i);
              this._markRequestSent();
              i.send();
              this.setOption("useIframeTransport", !1);
              return !0;
            } catch (a) {
              this.setOption("useFetchWithIframeFallback", !1),
                this.setOption("useIframeTransport", !0);
            }
          if (this.getOption("useIframeTransport")) {
            e(["JSONPTransport"], function (a) {
              a = new a(f.uri);
              f._setJSONPTransport(a);
              f._markRequestSent();
              a.send();
            });
            return !0;
          }
          this.flushedResponseHandler &&
            (this.flushedResponseTextParseIndex = 0);
          var j = d("ZeroRewrites").getTransportBuilderForURI(this.uri)();
          if (!j) return !1;
          this.schedule("AsyncRequest.send");
          j.onreadystatechange = function () {
            var a = f.transport;
            a &&
              a.readyState >= 2 &&
              a.readyState <= 3 &&
              f._handleFlushedResponse();
            j.readyState === 4 && f.continuation.last(f._onStateChange);
          };
          this.progressHandler &&
            p(j) &&
            (j.onprogress = function () {
              for (
                var a = arguments.length, b = new Array(a), c = 0;
                c < a;
                c++
              )
                b[c] = arguments[c];
              f.continuation(function () {
                f.progressHandler && f.progressHandler.apply(f, b);
              });
            });
          this.uploadProgressHandler &&
            q(j) &&
            (j.upload.onprogress = function () {
              for (
                var a = arguments.length, b = new Array(a), c = 0;
                c < a;
                c++
              )
                b[c] = arguments[c];
              f.continuation(function () {
                f.uploadProgressHandler && f.uploadProgressHandler.apply(f, b);
              });
            });
          b || (this.remainingRetries = this.getOption("retries"));
          this.transport = j;
          try {
            j.open(
              this.method,
              g,
              c("gkx")("1857581")
                ? !0
                : this.getOption("asynchronous_DEPRECATED")
            );
          } catch (a) {
            return !1;
          }
          if (
            !this.uri.isSameOrigin() &&
            !c("uriIsRelativePath")(this.uri) &&
            !this.getOption("useIframeTransport") &&
            !this.getOption("useFetchWithIframeFallback")
          ) {
            if (!r(j)) return !1;
            this._canSendCredentials() && (j.withCredentials = !0);
          }
          this.method == "POST" &&
            !this.rawData &&
            j.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            );
          this._isBackgroundRequest &&
            j.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
          var k = c("getAsyncHeaders")(this.uri);
          Object.keys(k).forEach(function (a) {
            j && j.setRequestHeader(a, k[a]);
          });
          c("Arbiter").inform("AsyncRequest/will_send", { request: this });
          if (j)
            for (i in this.headers)
              Object.prototype.hasOwnProperty.call(this.headers, i) &&
                j.setRequestHeader(i, this.headers[i]);
          this._addStatusIndicator();
          this._markRequestSent();
          j.send(h);
          this.timeout !== null && this.resetTimeout(this.timeout);
          a._inflightCount++;
          return !0;
        };
        f.schedule = function (a) {
          this.continuation = c("TimeSlice").getReusableContinuation(a);
        };
        f._canSendCredentials = function () {
          if (this._allowCredentials === !1) return !1;
          var a = new (c("URI"))(this.uri);
          return (
            c("isBulletinDotComURI")(a) ||
            c("isFacebookURI")(a) ||
            c("isInternalFBURI")(a) ||
            c("isMessengerDotComURI")(a) ||
            c("isWorkplaceDotComURI")(a) ||
            c("isWorkroomsDotComURI")(a) ||
            c("isWorkDotMetaDotComURI")(a) ||
            c("isHorizonDotMetaDotComURI")(a) ||
            c("isSparkDotMetaDotComURI")(a)
          );
        };
        f._markRequestSent = function () {
          var a = new (c("URI"))(this.getURI()).getQualifiedURI().toString();
          d("ResourceTimingsStore").updateURI(
            c("ResourceTypes").XHR,
            this.resourceTimingStoreUID,
            a
          );
          d("ResourceTimingsStore")
            .annotate(c("ResourceTypes").XHR, this.resourceTimingStoreUID)
            .addStringAnnotation("uri", a);
          d("ResourceTimingsStore").measureRequestSent(
            c("ResourceTypes").XHR,
            this.resourceTimingStoreUID
          );
        };
        f.promisePayload = function (a) {
          return this.exec().then(
            function (a) {
              return a.payload;
            },
            function (a) {
              throw a.toError();
            }
          );
        };
        f.exec = function (a) {
          var d = this;
          if (
            this.getHandler() !== c("emptyFunction") ||
            this.getErrorHandler() !== c("AsyncResponse").defaultErrorHandler
          )
            throw new Error(
              "exec is an async function and does not allow previously set handlers"
            );
          return new (b("Promise"))(function (b, c) {
            d.setHandler(b).setErrorHandler(c).send(a);
          });
        };
        a.bootstrap = function (b, e, f) {
          var g = "GET",
            h = !0,
            i = {};
          (f || (e && e.rel == "async-post")) &&
            ((g = "POST"),
            (h = !1),
            b &&
              ((b = new (c("URI"))(b)),
              (i = b.getQueryData()),
              b.setQueryData({})));
          f = d("Parent").byClass(e, "stat_elem") || e;
          if (f && d("CSS").hasClass(f, "async_saving")) return !1;
          b = new a(b)
            .setReadOnly(h)
            .setMethod(g)
            .setData(i)
            .setNectarModuleDataSafe(e)
            .setRelativeTo(e);
          e &&
            (b.setHandler(function (a) {
              c("Event").fire(e, "success", { response: a });
            }),
            b.setErrorHandler(function (a) {
              c("Event").fire(e, "error", { response: a }) !== !1 &&
                c("AsyncResponse").defaultErrorHandler(a);
            }));
          if (f instanceof HTMLElement) {
            b.setStatusElement(f);
            h = f.getAttribute("data-status-class");
            h && b.setStatusClass(h);
          }
          b.send();
          return !1;
        };
        a.post = function (b, c) {
          new a(b).setReadOnly(!1).setMethod("POST").setData(c).send();
          return !1;
        };
        a.postStatic = function (b, c) {
          a.post(b, c);
        };
        a.getLastID = function () {
          return u;
        };
        a.ignoreUpdate = function () {
          w = !0;
        };
        a.getInflightCount = function () {
          return this._inflightCount;
        };
        return a;
      })();
    z._inflightCount = 0;
    var A,
      B = [],
      C = (function () {
        function a() {
          this._requests = [];
        }
        var b = a.prototype;
        b.add = function (a) {
          this._requests.push(a);
        };
        b.remove = function (a) {
          var b = this._requests,
            c = this._requestsSent;
          for (var d = 0, e = b.length; d < e; d++)
            b[d] === a && (c ? (b[d] = null) : b.splice(d, 1));
        };
        b.send = function () {
          this._requestsSent && j(0, 4390);
          this._requestsSent = !0;
          this._wrapperRequest = null;
          var a = this._requests;
          if (!a.length) return;
          var b;
          if (a.length === 1) b = a[0];
          else {
            a = a.filter(Boolean).map(function (a) {
              return [
                a.uri.getPath(),
                d("PHPQuerySerializer").serialize(a.data),
              ];
            });
            b = this._wrapperRequest = new z("/ajax/proxy.php")
              .setAllowCrossPageTransition(!0)
              .setData({ data: a })
              .setHandler(this._handler.bind(this))
              .setTransportErrorHandler(this._transportErrorHandler.bind(this));
          }
          b && b.setOption("bundle", !1).send();
        };
        b._handler = function (a) {
          var b = this,
            c = a.getPayload().responses;
          if (c.length !== this._requests.length) return;
          a = function (a) {
            var d = b._requests[a];
            if (!d) return "continue";
            var e = d.uri.getPath();
            b._wrapperRequest && (d.id = b._wrapperRequest.id);
            if (c[a][0] !== e) {
              d.continuation.last(function () {
                d.invokeResponseHandler({
                  transportError:
                    "Wrong response order in bundled request to " + e,
                });
              });
              return "continue";
            }
            d.continuation.last(function () {
              d.handleResponse(c[a][1]);
            });
          };
          for (var d = 0; d < this._requests.length; d++) {
            var e = a(d);
            if (e === "continue") continue;
          }
          B.splice(B.indexOf(this, 1));
        };
        b._transportErrorHandler = function (a) {
          var b = this,
            c = { transportError: a.errorDescription };
          a = this._requests.filter(Boolean).map(function (a) {
            b._wrapperRequest && (a.id = b._wrapperRequest.id);
            a.invokeResponseHandler(c);
            return a.uri.getPath();
          });
        };
        a.schedule = function (b) {
          b.schedule("AsyncMultiplex.schedule");
          A ||
            ((A = new a()),
            B.push(A),
            c("TimeSlice").guard(
              function () {
                c("setTimeoutAcrossTransitions")(function () {
                  A && (A.send(), (A = null));
                }, 0);
              },
              "AsyncMultiplex.schedule",
              { propagationType: c("TimeSlice").PropagationType.ORPHAN }
            )());
          A.add(b);
          return A;
        };
        a.unschedule = function (a) {
          B.forEach(function (b) {
            b.remove(a);
          });
        };
        return a;
      })();
    z.suppressOnloadToken = {};
    a.AsyncRequest = z;
    g["default"] = z;
  },
  98
);
__d(
  "BladeRunnerConfig",
  [
    "RTISubscriptionManagerConfig",
    "WebDriverConfig",
    "cr:3024",
    "gkx",
    "isEmpty",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "javascript-sandbox",
      i = "OverrideServer",
      j = "www_sandbox",
      k = "www_tier";
    a = (function () {
      function a() {}
      var d = a.prototype;
      d.patchRequestHeaders = function (a) {
        var d = {},
          e = c("RTISubscriptionManagerConfig").bladerunner_www_sandbox,
          f = c("RTISubscriptionManagerConfig").is_intern;
        if (!c("isEmpty")(c("WebDriverConfig").auxiliaryServiceInfo)) {
          var g;
          g =
            (g = c("WebDriverConfig").auxiliaryServiceInfo.BladeRunner) != null
              ? g
              : c("WebDriverConfig").auxiliaryServiceInfo[
                  "BladeRunner-sandcastle"
                ];
          g != null
            ? (typeof g.ip_address === "string"
                ? (d[i] = g.ip_address + ":18295")
                : typeof g.hostname === "string" &&
                  (d[i] = g.hostname + ":18295"),
              typeof c("WebDriverConfig").originHost === "string" &&
                (d[j] = "www." + c("WebDriverConfig").originHost))
            : e != null && (d[h] = e);
        } else e != null && (d[h] = e);
        f === !0 && (d[k] = "intern");
        if (c("WebDriverConfig").isTestRunning && c("gkx")("5639")) {
          g = b("cr:3024") == null ? void 0 : b("cr:3024").get();
          g != null && ((d.is_test = "1"), (d.original_request_id = g));
        }
        c("gkx")("307") && (d["Accept-Ack"] = "RSAck");
        for (e in a) d[e] = a[e];
        d.http_referer = window.location.href;
        return d;
      };
      return a;
    })();
    d = new a();
    e = d;
    g["default"] = e;
  },
  98
);
__d(
  "BladeRunnerLogger",
  ["FBLogger", "ODS"],
  function (a, b, c, d, e, f, g) {
    var h = "bladerunner_js_client",
      i = { info: "info", warning: "warning", exception: "exception" };
    a = (function () {
      function a() {
        this.setFBLoggerLevel(1);
      }
      var b = a.prototype;
      b.info = function (a) {
        this.$2 >= 2 && c("FBLogger")(h).info("BladeRunner info: %s", a),
          this.$3(i.info, a);
      };
      b.warn = function (a) {
        this.$2 >= 1 && c("FBLogger")(h).warn("BladeRunner warn: %s", a),
          this.$3(i.warning, a);
      };
      b.exception = function (a, b) {
        b === void 0 && (b = "");
        var d = b + " " + a.toString();
        this.$2 >= 0 &&
          c("FBLogger")(h).warn(
            "BladeRunner exception: %s, %s",
            b,
            a.toString()
          );
        this.$3(i.exception, d);
      };
      b.trimForLogging = function (a) {
        var b = 1024;
        return typeof a === "string" && a.length > b
          ? "[trimmed]:" + a.substring(0, b) + "..."
          : a;
      };
      b.bumpCounter = function (a, b) {
        b === void 0 && (b = 1),
          d("ODS").bumpEntityKey(2966, "BladeRunnerClient", a, b);
      };
      b.setClientSessionId = function (a) {
        this.$1 = a;
      };
      b.setFBLoggerLevel = function (a) {
        this.$2 = a;
      };
      b.$3 = function (a, b) {};
      return a;
    })();
    b = new a();
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "BladeRunnerTypes",
  [],
  function (a, b, c, d, e, f, g) {
    a = {
      REQUEST: 1,
      DATA: 2,
      DATA_ACK: 3,
      STATUS_UPDATE: 4,
      REWRITE_REQUEST: 5,
      LOG: 6,
    };
    b = { BLADE_RUNNER: 1, GATEWAY: 2 };
    g.StreamFrameType = a;
    g.StreamRequestType = b;
  },
  98
);
__d(
  "BladeRunnerTypesInternal",
  ["Base64", "BladeRunnerLogger", "BladeRunnerTypes"],
  function (a, b, c, d, e, f, g) {
    var h = (function () {
        function a() {}
        var b = a.prototype;
        b.getHeaders = function () {
          if (this.headers != null) return this.headers;
          throw new Error("Expected headers");
        };
        b.getInstrumentationData = function () {
          if (
            this.instrumentationData != null &&
            this.instrumentationData.length > 0
          )
            try {
              return JSON.parse(this.instrumentationData);
            } catch (a) {
              return null;
            }
          else return null;
        };
        b.updateRetryRequestPayload = function (a) {
          a != null
            ? (this.payload = c("Base64").encode(a))
            : (this.payload = null);
        };
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.requestType = o(b.requestType);
          c.payload = r(b.payload);
          c.headers = u(b.headers);
          c.extraHeader = r(b.extraHeader);
          c.requestTarget = r(b.requestTarget);
          c.instrumentationData = r(b.instrumentationData);
          return c;
        };
        return a;
      })(),
      i = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.dataId = p(b.dataId);
          c.data = r(b.data);
          c.shouldAck = w(b.shouldAck);
          return c;
        };
        var b = a.prototype;
        b.rawData = function () {
          if (this.data == null) throw new Error("Expected data");
          return this.data;
        };
        b.rawDataSize = function () {
          return this.data == null ? 0 : this.data.length;
        };
        b.decodeData = function () {
          if (this.data == null) throw new Error("Expected data");
          return c("Base64").decode(this.data);
        };
        b.setData = function (a) {
          this.data = c("Base64").encode(a);
        };
        b.getInstrumentationData = function () {
          if (this.instrumentationData != null)
            return JSON.parse(this.instrumentationData);
          else return null;
        };
        return a;
      })(),
      j = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.dataId = o(b.dataId);
          c.success = v(b.success);
          c.message = r(b.message);
          c.code = p(b.code);
          return c;
        };
        return a;
      })();
    j.ACK_CODE_LANDED_AND_ACCEPTED = 20;
    j.ACK_CODE_LANDED_BUT_NOT_ACCEPTED = 21;
    j.ACK_CODE_FAILED_TO_LAND = 50;
    var k = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = p(b.streamId);
          c.message = r(b.message);
          return c;
        };
        return a;
      })(),
      l = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.status = o(b.status);
          c.message = r(b.message);
          c.code = p(b.code);
          c.shouldRetry = w(b.shouldRetry);
          c.retryDelayMs = p(b.retryDelayMs);
          return c;
        };
        return a;
      })(),
      m = (function () {
        function a() {}
        a.readObject = function (b) {
          var c = new a();
          c.streamId = o(b.streamId);
          c.newBody = r(b.newBody);
          c.newExtraHeader = r(b.newExtraHeader);
          c.patchExtraHeader = r(b.patchExtraHeader);
          c.killBody = w(b.killBody);
          c.temporary = w(b.temporary);
          return c;
        };
        return a;
      })(),
      n = (function () {
        function a() {}
        var b = a.prototype;
        b.getRequest = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST &&
            this.request != null
          )
            return this.request;
          throw new Error("Expected request");
        };
        b.getData = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.DATA &&
            this.data != null
          )
            return this.data;
          throw new Error("Expected data");
        };
        b.getDataAck = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
            this.dataAck != null
          )
            return this.dataAck;
          throw new Error("Expected dataAck");
        };
        b.getStatusUpdate = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE &&
            this.statusUpdate != null
          )
            return this.statusUpdate;
          throw new Error("Expected status update");
        };
        b.getLog = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.LOG &&
            this.log != null
          )
            return this.log;
          throw new Error("Expected log");
        };
        b.getRewriteRequest = function () {
          if (
            this.type ==
              d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST &&
            this.rewriteRequest != null
          )
            return this.rewriteRequest;
          throw new Error("Expected rewrite request");
        };
        b.getStreamId = function () {
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.REQUEST &&
            this.request != null
          )
            return this.request.streamId;
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.DATA &&
            this.data != null
          )
            return this.data.streamId;
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE &&
            this.statusUpdate != null
          )
            return this.statusUpdate.streamId;
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.LOG &&
            this.log != null
          )
            return this.log.streamId;
          if (
            this.type ==
              d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST &&
            this.rewriteRequest != null
          )
            return this.rewriteRequest.streamId;
          if (
            this.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
            this.dataAck != null
          )
            return this.dataAck.streamId;
          throw new Error("Frame with unexpected type");
        };
        b.isInstrumented = function () {
          if (this.type === d("BladeRunnerTypes").StreamFrameType.REQUEST)
            return this.getRequest().instrumentationData != null;
          else if (this.type === d("BladeRunnerTypes").StreamFrameType.DATA)
            return this.getData().instrumentationData != null;
          else return !1;
        };
        a.readObject = function (b) {
          var e = new a();
          e.type = o(b.type);
          switch (e.type) {
            case d("BladeRunnerTypes").StreamFrameType.REQUEST:
              e.request = h.readObject(s(b.request));
              break;
            case d("BladeRunnerTypes").StreamFrameType.DATA:
              e.data = i.readObject(s(b.data));
              break;
            case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
              e.dataAck = j.readObject(s(b.dataAck));
              break;
            case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
              e.statusUpdate = l.readObject(s(b.statusUpdate));
              break;
            case d("BladeRunnerTypes").StreamFrameType.LOG:
              e.log = k.readObject(s(b.log));
              break;
            case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
              e.rewriteRequest = m.readObject(s(b.rewriteRequest));
              break;
            default:
              c("BladeRunnerLogger").warn(
                "Frame with unexpected type: " + e.type
              );
              return null;
          }
          return e;
        };
        a.newRequestFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.REQUEST;
          c.request = b;
          return c;
        };
        a.newDataFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.DATA;
          c.data = b;
          return c;
        };
        a.newDataAckFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.DATA_ACK;
          c.dataAck = b;
          return c;
        };
        a.newStatusUpdateFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;
          c.statusUpdate = b;
          return c;
        };
        a.newLogFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.LOG;
          c.log = b;
          return c;
        };
        a.newRewriteRequestFrame = function (b) {
          var c = new a();
          c.type = d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST;
          c.rewriteRequest = b;
          return c;
        };
        return a;
      })();
    a = (function () {
      function a(a, b, c) {
        (this.batchId = a), (this.frames = b), (this.instrumentationData = c);
      }
      var b = a.prototype;
      b.getFrames = function () {
        if (this.frames != null) return this.frames;
        throw new Error("Expected frames");
      };
      b.getInstrumentationData = function () {
        if (this.instrumentationData != null)
          try {
            return JSON.parse(this.instrumentationData);
          } catch (a) {
            return null;
          }
        else return null;
      };
      b.getInstrumentationDataDfTraceId = function () {
        if (this.instrumentationData != null)
          try {
            var a = JSON.parse(this.instrumentationData);
            return (a = a.dataFlowTracingData) == null ? void 0 : a.traceId;
          } catch (a) {
            return null;
          }
        else return null;
      };
      b.write = function () {
        return JSON.stringify(this);
      };
      b.isInstrumented = function () {
        return this.getFrames().some(function (a) {
          return a.isInstrumented();
        });
      };
      a.read = function (b) {
        b = JSON.parse(b);
        var c = b.batchId || 0,
          d = [];
        for (
          var e = b.frames,
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
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          h = n.readObject(h);
          h != null && d.push(h);
        }
        h = b.instrumentationData || null;
        return new a(c, d, h);
      };
      return a;
    })();
    function o(a) {
      if (typeof a === "number") return a;
      throw new Error("Expected number");
    }
    function p(a) {
      return a == null ? null : o(a);
    }
    function q(a) {
      if (typeof a === "string") return a;
      throw new Error("Expected string");
    }
    function r(a) {
      return a == null ? null : q(a);
    }
    function s(a) {
      if (typeof a === "object" && a != null) return a;
      throw new Error("Expected object");
    }
    function t(a) {
      if (typeof a === "object" && a != null) {
        var b = a,
          c = {};
        Object.keys(b).forEach(function (a) {
          var d = b[a];
          typeof d === "string" && d != null && (c[a] = d);
        });
        return c;
      }
      throw new Error("Expected string map");
    }
    function u(a) {
      return a == null ? null : t(a);
    }
    function v(a) {
      if (typeof a === "boolean" && a != null) return a;
      throw new Error("Expected boolean");
    }
    function w(a) {
      return a == null ? null : v(a);
    }
    g.GatewayStreamRequest = h;
    g.GatewayStreamData = i;
    g.GatewayStreamDataAck = j;
    g.GatewayStreamLog = k;
    g.GatewayStreamStatusUpdate = l;
    g.GatewayStreamRewriteRequest = m;
    g.GatewayStreamFrame = n;
    g.GatewayStreamBatch = a;
  },
  98
);
__d(
  "RequestStreamE2EClientLoggerEvent",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      RECEIVED: "received",
      SENT: "sent",
      FAILURE: "failure",
      PUBACK: "puback",
    });
    f["default"] = a;
  },
  66
);
__d(
  "RequestStreamE2EClientLoggerMessageType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      REQUEST_STREAM: "request_stream",
      AMENDMENT: "amendment",
      AMENDMENT_ACK: "amendment_ack",
      CANCEL: "cancel",
      RESPONSE: "response",
      RESPONSE_ACK: "response_ack",
      TIMED_REQUEST: "timed_request",
      INTERRUPT: "interrupt",
    });
    f["default"] = a;
  },
  66
);
__d(
  "BladeRunnerEventHandler",
  [
    "BladeRunnerLogger",
    "BladeRunnerStreamStatus",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 1e3;
    a = (function () {
      function a(a, b, c) {
        (this.$2 = a), (this.$1 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.onProxyResponse = function (a) {
        this.$4(a);
        var b = [];
        for (
          var e = a.getFrames(),
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
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          this.$2.witnessFrame(h) && b.push(h);
        }
        h = this.$2.getRequest();
        (g = h.e2eLogger) == null
          ? void 0
          : g.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
              c("RequestStreamE2EClientLoggerEvent").SENT,
              {},
              (f = a.getInstrumentationData()) == null ? void 0 : f.auxId,
              null,
              a.getInstrumentationDataDfTraceId()
            );
        b.length > 0 &&
          this.$5(
            new (d("BladeRunnerTypesInternal").GatewayStreamBatch)(
              a.batchId,
              b,
              a.instrumentationData
            )
          );
      };
      b.onDisconnect = function () {
        this.$2.resetErrors();
        var a = new (d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
        a.streamId = this.$2.getRequest().streamId;
        a.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
        a.shouldRetry = !0;
        a.retryDelayMs = 0;
        a = new (d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [
          d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(
            a
          ),
        ]);
        this.onProxyResponse(a);
      };
      b.$4 = function (a) {
        var b = this;
        a = a.getFrames().filter(function (a) {
          return a.type == d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;
        });
        for (
          var a = a,
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g = g.getStatusUpdate();
          if (
            g.status == d("BladeRunnerStreamStatus").StreamStatus.CLOSED ||
            g.status == d("BladeRunnerStreamStatus").StreamStatus.REJECTED
          ) {
            this.$2.onError();
            var i = g.shouldRetry != null && g.shouldRetry,
              j = g.message != null ? g.message : "null";
            if (i && this.$2.getErrorCount() <= this.$2.getRetriesAllowed()) {
              g.status = d("BladeRunnerStreamStatus").StreamStatus.STOPPED;
              var k = h;
              g.retryDelayMs != null && (k = g.retryDelayMs);
              c("BladeRunnerLogger").info(
                "Can retry: stream " +
                  g.streamId +
                  " closed with status " +
                  g.status +
                  ", message " +
                  j +
                  ". Error count: " +
                  this.$2.getErrorCount() +
                  ", retryDelay " +
                  k +
                  "ms. Already retrying: " +
                  this.$2.getRetryRequestScheduled().toString()
              );
              this.$2.getRetryRequestScheduled()
                ? c("BladeRunnerLogger").bumpCounter(
                    "stream_closed_already_retrying"
                  )
                : (c("BladeRunnerLogger").bumpCounter(
                    "stream_closed_will_retry"
                  ),
                  this.$2.setRetryRequestScheduled(!0),
                  k > 0
                    ? c("setTimeoutAcrossTransitions")(function () {
                        return b.$6();
                      }, k)
                    : this.$6());
            } else
              c("BladeRunnerLogger").info(
                "Will not retry: stream " +
                  g.streamId +
                  " closed with status " +
                  g.status +
                  ", message " +
                  j +
                  ". Error count: " +
                  this.$2.getErrorCount() +
                  ", shouldRetry " +
                  i.toString() +
                  ". Already retrying: " +
                  this.$2.getRetryRequestScheduled().toString()
              ),
                i
                  ? c("BladeRunnerLogger").bumpCounter(
                      "stream_closed_retry_exceeded"
                    )
                  : c("BladeRunnerLogger").bumpCounter(
                      "stream_closed_no_retry"
                    ),
                this.$3.removeStream(g.streamId);
          }
        }
      };
      b.$6 = function () {
        this.$2.setRetryRequestScheduled(!1);
        if (this.$2.isAlive()) {
          var a = this.$1.getUpdatedRequestBody();
          a != null && this.$2.updateRetryRequestPayload(a);
          this.$3.sendRetryStreamRequest(this.$2);
        }
      };
      b.$5 = function (a) {
        c("BladeRunnerLogger").bumpCounter("send_to_handler");
        var b = [];
        this.$1.onBatch(a);
        for (
          var a = a.getFrames(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          try {
            switch (g.type) {
              case d("BladeRunnerTypes").StreamFrameType.DATA:
                this.$1.onData(g.getData());
                b.push(g.getData());
                break;
              case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
                this.$1.onStatusUpdate(g.getStatusUpdate().status);
                break;
              case d("BladeRunnerTypes").StreamFrameType.LOG:
                g = g.getLog().message;
                g != null && this.$1.onLog(g);
                break;
              case d("BladeRunnerTypes").StreamFrameType.DATA_ACK:
                break;
              default:
                throw new Error("Frame with unexpected type");
            }
          } catch (a) {
            c("BladeRunnerLogger").bumpCounter("send_to_handler_error"),
              c("BladeRunnerLogger").exception(
                a,
                "Failed sending frame to stream handler"
              );
          }
        }
        this.$7(b);
      };
      b.$7 = function (a) {
        var b = [];
        for (var c = 0; c < a.length; c++) {
          var e = a[c];
          if (e.shouldAck === !0 && e.dataId != null) {
            var f = new (d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
            f.streamId = e.streamId;
            f.dataId = e.dataId;
            f.success = !0;
            b.push(f);
          }
        }
        this.$3.sendDataAcks(b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttEnv",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = Object.freeze({
      mqtt_waterfall_log_client_sampling: 1,
      mqtt_ws_polling_enabled: 3,
      mqtt_lp_use_fetch: 9,
      mqtt_fast_lp: 11,
      mqtt_lp_no_delay: 12,
      mqtt_enable_publish_over_polling: 13,
      mqttweb_global_connection_counter: 15,
    });
    d = (function () {
      var a = b.prototype;
      a.random = function () {
        return this.$1 != null ? this.$1() : Math.random();
      };
      a.isUserLoggedInNow = function () {
        return this.$2 != null ? this.$2() : !0;
      };
      a.setIsUserLoggedInNow = function (a) {
        this.$2 = a;
      };
      a.clearTimeout = function (a) {
        if (this.$3 != null) {
          this.$3(a);
          return;
        }
        window.clearTimeout(a);
      };
      a.setTimeout = function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return this.$4 != null
          ? this.$4.apply(null, arguments)
          : window.setTimeout.apply(null, arguments);
      };
      a.getLoggerInstance = function () {
        return this.$5 != null ? this.$5() : h.getInstance();
      };
      a.genGk = function (a) {
        return this.$6 != null ? this.$6(a) : !1;
      };
      a.killswitch = function (a) {
        return this.$7 != null ? this.$7(a) : c("killswitch")(a);
      };
      a.createSocket = function (a, b) {
        return this.$8 != null ? this.$8(a, b) : new WebSocket(a);
      };
      a.scheduleCallback = function (a) {
        return this.$9 != null ? this.$9(a) : a();
      };
      a.scheduleLoggingCallback = function (a) {
        return this.$10 != null ? this.$10(a) : a();
      };
      a.configRead = function (a, b) {
        return this.$11 != null ? this.$11(a, b) : b;
      };
      a.configWrite = function (a, b) {
        this.$12 != null && this.$12(a, b);
      };
      function b() {
        (this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = null),
          (this.$10 = null),
          (this.$11 = null),
          (this.$12 = null);
      }
      a.initialize = function (a, b, c, d, e, f, g, h, i, j, k, l) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = l),
          (this.$8 = g),
          (this.$9 = h),
          (this.$10 = i),
          (this.$11 = j),
          (this.$12 = k);
      };
      return b;
    })();
    var h = (function () {
        function a() {}
        a.getInstance = function () {
          return new a();
        };
        var b = a.prototype;
        b.setAppId = function (a) {};
        b.eventLogConnect = function (a) {};
        b.eventLogPull = function (a) {};
        b.eventLogPullFinish = function (a) {};
        b.eventLogDisconnect = function (a) {};
        b.eventLogOutgoingPublish = function (a) {};
        b.eventLogIncomingPublish = function (a) {};
        b.eventLogPublishTimeout = function (a) {};
        b.eventLogMiscellaneousError = function (a) {};
        b.logIfLoggedOut = function () {};
        b.logError = function (a) {};
        b.logErrorWarn = function (a) {};
        b.logWarn = function (a) {};
        b.debugTrace = function (a) {};
        b.bumpCounter = function (a) {};
        b.getBrowserConnectivity = function () {
          return !0;
        };
        return a;
      })(),
      i = new d();
    function a(a) {
      i.setIsUserLoggedInNow(a);
    }
    g.MqttGkNames = b;
    g.Env = i;
    g.setIsUserLoggedInNow = a;
  },
  98
);
__d(
  "IrisSubscribeChecker",
  ["MqttEnv"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = d("MqttEnv").Env.getLoggerInstance();
        this.$2 = null;
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 = !0;
        this.$7 = 0;
        this.$8 = a;
        if (typeof window !== "undefined") {
          a = window.location.hostname;
          (a === "m.facebook.com" ||
            a === "mobile.facebook.com" ||
            a === "mtouch.facebook.com") &&
            (this.$6 = !1);
        }
      }
      var b = a.prototype;
      b.start = function () {
        this.$6 = !0;
      };
      b.stop = function () {
        (this.$6 = !1), this.$9();
      };
      b.onConnectAttempt = function () {};
      b.onConnectFailure = function () {
        this.$9();
      };
      b.onConnected = function () {
        var a = this;
        this.$7++;
        this.$9();
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 &&
          (this.$2 = d("MqttEnv").Env.setTimeout(function () {
            a.$10();
          }, 8e3));
      };
      b.onConnectSuccess = function () {};
      b.onConnectionLost = function () {
        this.$9();
      };
      b.onConnectionDisconnect = function () {};
      b.onSubscribe = function (a) {
        a === "/t_ms" && (this.$3 = !0);
      };
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        (a === "/messenger_sync_get_diffs" ||
          a === "/messenger_sync_create_queue") &&
          ((this.$4 = !0), this.$3 && ((this.$5 = !0), this.$9()));
      };
      b.onMessage = function (a) {};
      b.onWSFatal = function () {};
      b.$9 = function () {
        this.$2 && (d("MqttEnv").Env.clearTimeout(this.$2), (this.$2 = null));
      };
      b.$10 = function () {
        if (this.$4 === !1) {
          var a =
            this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
          this.$1.bumpCounter(a);
          this.$8()
            ? this.$1.bumpCounter(a + ".withProvider")
            : this.$1.bumpCounter(a + ".withoutProvider");
          this.$3 === !0
            ? this.$1.bumpCounter(a + ".withTopicSubscribe")
            : this.$1.bumpCounter(a + ".withoutTopicSubscribe");
        }
        this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
        this.$3 === !0 &&
          this.$4 === !0 &&
          this.$5 === !1 &&
          this.$1.bumpCounter("session_before_topic_subscribe");
      };
      return a;
    })();
    f.exports = a;
  },
  34
);
__d(
  "CacheStorage",
  [
    "ErrorGuard",
    "EventListenerImplForCacheStorage",
    "ExecutionEnvironment",
    "FBJSON",
    "WebStorage",
    "emptyFunction",
    "err",
    "killswitch",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "_@_",
      i = "3b",
      j = "CacheStorageVersion",
      k = {
        length: 0,
        getItem: c("emptyFunction"),
        setItem: c("emptyFunction"),
        clear: c("emptyFunction"),
        removeItem: c("emptyFunction"),
        key: c("emptyFunction"),
      };
    a = (function () {
      function a(a) {
        this._store = a;
      }
      var b = a.prototype;
      b.getStore = function () {
        return this._store;
      };
      b.keys = function () {
        var a = [];
        for (var b = 0; b < this._store.length; b++) {
          var c = this._store.key(b);
          c != null && a.push(c);
        }
        return a;
      };
      b.get = function (a) {
        return this._store.getItem(a);
      };
      b.set = function (a, b) {
        this._store.setItem(a, b);
      };
      b.remove = function (a) {
        this._store.removeItem(a);
      };
      b.clear = function () {
        this._store.clear();
      };
      b.clearWithPrefix = function (a) {
        a = a || "";
        var b = this.keys();
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d != null && d.startsWith(a) && this.remove(d);
        }
      };
      return a;
    })();
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        return (
          a.call(
            this,
            (b = c("WebStorage").getLocalStorage()) != null ? b : k
          ) || this
        );
      }
      b.available = function () {
        return !!c("WebStorage").getLocalStorage();
      };
      return b;
    })(a);
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        return (
          a.call(
            this,
            (b = c("WebStorage").getSessionStorage()) != null ? b : k
          ) || this
        );
      }
      b.available = function () {
        return !!c("WebStorage").getSessionStorage();
      };
      return b;
    })(a);
    var l = (function () {
        function a() {
          this._store = {};
        }
        var b = a.prototype;
        b.getStore = function () {
          return this._store;
        };
        b.keys = function () {
          return Object.keys(this._store);
        };
        b.get = function (a) {
          return this._store[a] === void 0 ? null : this._store[a];
        };
        b.set = function (a, b) {
          this._store[a] = b;
        };
        b.remove = function (a) {
          a in this._store && delete this._store[a];
        };
        b.clear = function () {
          this._store = {};
        };
        b.clearWithPrefix = function (a) {
          a = a || "";
          var b = this.keys();
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.startsWith(a) && this.remove(d);
          }
        };
        a.available = function () {
          return !0;
        };
        return a;
      })(),
      m = { memory: l, localstorage: b, sessionstorage: e };
    g = (function () {
      function a(a, b) {
        this._changeCallbacks = [];
        this._key_prefix = "_cs_";
        this._exception = null;
        b && (this._key_prefix = b);
        a === "AUTO" || !a ? (b = "memory") : (b = a);
        b &&
          (!m[b] || !m[b].available()
            ? (c("ExecutionEnvironment").canUseDOM, (this._backend = new l()))
            : (this._backend = new m[b]()));
        a = this.useBrowserStorage();
        a &&
          c("EventListenerImplForCacheStorage").listen(
            window,
            "storage",
            this._onBrowserValueChanged.bind(this)
          );
        b = a
          ? this._backend.getStore().getItem(j)
          : this._backend.getStore()[j];
        b !== i &&
          (c("killswitch")("CACHE_STORAGE_MODULE_CLEAR_OWN_KEYS")
            ? this.clear()
            : this.clearOwnKeys());
      }
      var b = a.prototype;
      b.useBrowserStorage = function () {
        return (
          this._backend.getStore() === c("WebStorage").getLocalStorage() ||
          this._backend.getStore() === c("WebStorage").getSessionStorage()
        );
      };
      b.addValueChangeCallback = function (a) {
        var b = this;
        this._changeCallbacks.push(a);
        return {
          remove: function () {
            b._changeCallbacks.slice(b._changeCallbacks.indexOf(a), 1);
          },
        };
      };
      b._onBrowserValueChanged = function (a) {
        this._changeCallbacks &&
          String(a.key).startsWith(this._key_prefix) &&
          this._changeCallbacks.forEach(function (b) {
            b(a.key, a.oldValue, a.newValue);
          });
      };
      b.keys = function () {
        var a = this,
          b = [];
        c("ErrorGuard").guard(
          function () {
            if (a._backend) {
              var c = a._backend.keys(),
                d = a._key_prefix.length;
              for (var e = 0; e < c.length; e++)
                c[e].substr(0, d) == a._key_prefix && b.push(c[e].substr(d));
            }
          },
          { name: "CacheStorage" }
        )();
        return b;
      };
      b.set = function (b, e, f) {
        if (this._backend) {
          if (this.useBrowserStorage() && a._persistentWritesDisabled) {
            this._exception = c("err")("writes disabled");
            return !1;
          }
          var g;
          typeof e === "string"
            ? (g = h + e)
            : !f
            ? ((g = { __t: Date.now(), __v: e }),
              (g = d("FBJSON").stringify(g)))
            : (g = d("FBJSON").stringify(e));
          f = this._backend;
          e = this._key_prefix + b;
          b = !0;
          var i = null;
          while (b)
            try {
              (i = null), f.set(e, g), (b = !1);
            } catch (a) {
              i = a;
              var j = f.keys().length;
              this._evictCacheEntries();
              b = f.keys().length < j;
            }
          if (i !== null) {
            this._exception = i;
            return !1;
          } else {
            this._exception = null;
            return !0;
          }
        }
        this._exception = c("err")("no back end");
        return !1;
      };
      b.getLastSetExceptionMessage = function () {
        return this._exception ? this._exception.message : null;
      };
      b.getLastSetException = function () {
        return this._exception;
      };
      b.getStorageKeyCount = function () {
        var a = this._backend;
        return a ? a.keys().length : 0;
      };
      b._evictCacheEntries = function () {
        var b = [],
          c = this._backend;
        c.keys().forEach(function (e) {
          if (e === j) return;
          var g = c.get(e);
          if (g === void 0) {
            c.remove(e);
            return;
          }
          if (a._hasMagicPrefix(g)) return;
          try {
            g = d("FBJSON").parse(g, f.id);
          } catch (a) {
            c.remove(e);
            return;
          }
          g && g.__t !== void 0 && g.__v !== void 0 && b.push([e, g.__t]);
        });
        b.sort(function (a, b) {
          return a[1] - b[1];
        });
        for (var e = 0; e < Math.ceil(b.length / 2); e++) c.remove(b[e][0]);
      };
      b.get = function (b, e) {
        var g;
        if (this._backend) {
          c("ErrorGuard").applyWithGuard(
            function () {
              g = this._backend.get(this._key_prefix + b);
            },
            this,
            [],
            {
              onError: function () {
                g = null;
              },
              name: "CacheStorage:get",
            }
          );
          if (g != null)
            if (a._hasMagicPrefix(g)) g = g.substr(h.length);
            else
              try {
                (g = d("FBJSON").parse(g, f.id)),
                  g && g.__t !== void 0 && g.__v !== void 0 && (g = g.__v);
              } catch (a) {
                g = void 0;
              }
          else g = void 0;
        }
        g === void 0 && e !== void 0 && ((g = e), this.set(b, g));
        return g;
      };
      b.remove = function (a) {
        this._backend &&
          c("ErrorGuard").applyWithGuard(
            this._backend.remove,
            this._backend,
            [this._key_prefix + a],
            { name: "CacheStorage:remove" }
          );
      };
      b._setVersion = function () {
        var a = this;
        c("ErrorGuard").applyWithGuard(
          function () {
            a.useBrowserStorage()
              ? a._backend.getStore().setItem(j, i)
              : (a._backend.getStore()[j] = i);
          },
          this,
          [],
          { name: "CacheStorage:setVersion" }
        );
      };
      b.clear = function () {
        this._backend &&
          (c("ErrorGuard").applyWithGuard(
            this._backend.clear,
            this._backend,
            [],
            { name: "CacheStorage:clear" }
          ),
          this._setVersion());
      };
      b.clearOwnKeys = function () {
        this._backend &&
          (c("ErrorGuard").applyWithGuard(
            this._backend.clearWithPrefix,
            this._backend,
            [this._key_prefix],
            { name: "CacheStorage:clearOwnKeys" }
          ),
          this._setVersion());
      };
      a.getAllStorageTypes = function () {
        return Object.keys(m);
      };
      a._hasMagicPrefix = function (a) {
        return a.substr(0, h.length) === h;
      };
      a.disablePersistentWrites = function () {
        a._persistentWritesDisabled = !0;
      };
      return a;
    })();
    g._persistentWritesDisabled = !1;
    f.exports = g;
  },
  34
);
__d(
  "CrossWindowEventEmitter",
  ["CacheStorage", "EventEmitter", "FBJSON"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$CrossWindowEventEmitter2 = b;
        e.$CrossWindowEventEmitter1 = new (c("CacheStorage"))(
          "localstorage",
          b + ":"
        );
        e.$CrossWindowEventEmitter1.addValueChangeCallback(function (b, c, f) {
          c = b.split(":")[1];
          try {
            b = d("FBJSON").parse(f);
          } catch (a) {
            b = void 0;
          }
          if (b && b.__v) {
            (f = a.prototype.emit).call.apply(
              f,
              [babelHelpers.assertThisInitialized(e), c].concat(b.__v)
            );
          }
        });
        return e;
      }
      var e = b.prototype;
      e.emit = function (b) {
        var c;
        for (
          var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
          f < d;
          f++
        )
          e[f - 1] = arguments[f];
        this.emitRemote.apply(this, [b].concat(e));
        (c = a.prototype.emit).call.apply(c, [this, b].concat(e));
      };
      e.emitRemote = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$CrossWindowEventEmitter1.set(a, c);
      };
      return b;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "MqttGlobalStreamCounter",
  ["CrossWindowEventEmitter", "MqttEnv", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.isTabClosed = !1;
        this.otherTabs = new Map();
        this.thisTab = { totalConnectionStreams: 0 };
        this.broadcastChannel = new (c("CrossWindowEventEmitter"))(
          "MqttGlobalStreamCounter"
        );
        this.broadcastChannel.addListener("count-updated", function (b) {
          b = JSON.parse(String(b));
          var c = !1;
          a.otherTabs.has(b.key) || (c = !0);
          b.event === "DELETE"
            ? a.otherTabs["delete"](b.key)
            : b.event === "UPDATE" &&
              b.value != null &&
              (a.otherTabs.set(b.key, b.value), c && a.$1());
        });
        this.tabID = c("uuid")();
      }
      var b = a.prototype;
      b.streamRequested = function () {
        this.thisTab.totalConnectionStreams++, this.$1();
      };
      b.streamClosed = function () {
        this.thisTab.totalConnectionStreams > 0 &&
          (this.thisTab.totalConnectionStreams--, this.$1());
      };
      b.tabClosed = function () {
        if (this.isTabClosed) return;
        this.isTabClosed = !0;
        var a = { key: this.tabID, event: "DELETE" };
        this.broadcastChannel.emitRemote("count-updated", JSON.stringify(a));
      };
      b.getGlobalState = function () {
        var a = { totalConnectionStreams: this.thisTab.totalConnectionStreams };
        this.otherTabs.forEach(function (b) {
          a.totalConnectionStreams += b.totalConnectionStreams;
        });
        return a;
      };
      b.$1 = function () {
        var a = { key: this.tabID, event: "UPDATE", value: this.thisTab };
        this.broadcastChannel.emitRemote("count-updated", JSON.stringify(a));
      };
      b.isEnabled = function () {
        return !0;
      };
      return a;
    })();
    var h = d("MqttEnv").Env.genGk(
      d("MqttEnv").MqttGkNames.mqttweb_global_connection_counter
    )
      ? new a()
      : {
          streamRequested: function () {},
          streamClosed: function () {},
          tabClosed: function () {},
          getGlobalState: function () {
            return { totalConnectionStreams: -1 };
          },
          isEnabled: function () {
            return !1;
          },
        };
    b = function () {
      return h;
    };
    g.getInstance = b;
  },
  98
);
__d(
  "MqttAnalyticsHook",
  ["MqttEnv", "MqttGlobalStreamCounter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = d("MqttEnv").Env.getLoggerInstance()),
          (this.$2 = d("MqttGlobalStreamCounter").getInstance()),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          this.$1.bumpCounter("session_start"),
          d("MqttEnv").Env.isUserLoggedInNow() ||
            this.$1.bumpCounter("session_start.logout");
      }
      var b = a.prototype;
      b.onConnectAttempt = function () {
        this.$1.bumpCounter("ws_connect_attempt"), this.$2.streamRequested();
      };
      b.onConnectFailure = function () {
        this.$4++,
          this.$1.bumpCounter("ws_connect_failure"),
          this.$1.debugTrace(
            "connect",
            "Connect failed existing streams count " +
              this.$2.getGlobalState().totalConnectionStreams
          ),
          this.$2.streamClosed();
      };
      b.onConnected = function () {
        this.$1.bumpCounter("ws_connect_connected");
      };
      b.onConnectSuccess = function () {
        this.$3 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
          this.$3++,
          this.$1.bumpCounter("ws_connect_success");
      };
      b.onConnectionLost = function () {
        this.$1.bumpCounter("ws_disconnect");
      };
      b.onConnectionDisconnect = function () {
        this.$2.streamClosed();
      };
      b.onSubscribe = function (a) {};
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        this.$1.bumpCounter("ws_publish." + a);
      };
      b.onMessage = function (a) {
        this.$1.bumpCounter("message_arrived." + a);
      };
      b.onWSFatal = function () {
        this.$1.bumpCounter("ws_fatal");
      };
      b.onPollRequestSent = function () {
        this.$1.bumpCounter("polling_request_send"), this.$2.streamRequested();
      };
      b.onPollRequestSuccess = function () {
        this.$1.bumpCounter("polling_request_succeed"),
          this.$5 === 0 && this.$1.bumpCounter("polling_first_success"),
          this.$5++;
      };
      b.onPollResponse = function (a) {
        this.$1.bumpCounter("lp.message_arrived." + a);
      };
      b.onPollFinish = function () {
        this.$1.bumpCounter("polling_request_finish"),
          this.$2.streamRequested();
      };
      b.onPollRequestFailed = function (a) {
        this.$1.bumpCounter("polling_request_failed"),
          this.$1.bumpCounter("polling_request_failed_" + a),
          this.$6++,
          this.$1.debugTrace(
            "PollRequest",
            "Request failed existing streams count " +
              this.$2.getGlobalState().totalConnectionStreams
          ),
          this.$2.streamClosed();
      };
      b.onPollShutdownAbort = function () {
        this.$2.streamClosed();
      };
      b.onTabClose = function () {
        this.$2.tabClosed();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttConnectionHookCollection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.addHook = function (a) {
        this.$1.add(a);
      };
      b.removeHook = function (a) {
        this.$1["delete"](a);
      };
      b.onConnectAttempt = function () {
        this.$1.forEach(function (a) {
          a.onConnectAttempt();
        });
      };
      b.onConnectFailure = function () {
        this.$1.forEach(function (a) {
          a.onConnectFailure();
        });
      };
      b.onConnected = function () {
        this.$1.forEach(function (a) {
          a.onConnected();
        });
      };
      b.onConnectSuccess = function () {
        this.$1.forEach(function (a) {
          a.onConnectSuccess();
        });
      };
      b.onConnectionLost = function () {
        this.$1.forEach(function (a) {
          a.onConnectionLost();
        });
      };
      b.onConnectionDisconnect = function () {
        this.$1.forEach(function (a) {
          a.onConnectionDisconnect();
        });
      };
      b.onSubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onSubscribe(a);
        });
      };
      b.onUnsubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onUnsubscribe(a);
        });
      };
      b.onPublish = function (a) {
        this.$1.forEach(function (b) {
          b.onPublish(a);
        });
      };
      b.onMessage = function (a) {
        this.$1.forEach(function (b) {
          b.onMessage(a);
        });
      };
      b.onWSFatal = function () {
        this.$1.forEach(function (a) {
          a.onWSFatal();
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MqttProtocolUtils",
  ["MqttEnv"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      if (a == null) return b;
      var c = new Uint8Array(a.length + b.length);
      c.set(a);
      c.set(b, a.length);
      return c;
    }
    function b(a, b) {
      b = b;
      var c = 0,
        d = 1,
        e;
      do {
        if (b === a.length) return null;
        e = a[b++];
        c += (e & 127) * d;
        d *= 128;
      } while ((e & 128) !== 0);
      return { value: c, offset: b };
    }
    function c(a) {
      a = a;
      var b = new Array(1);
      for (var c = 0; c < 4; c++) {
        var d = a % 128;
        a >>= 7;
        if (a > 0) b[c] = d | 128;
        else {
          b[c] = d;
          break;
        }
      }
      return b;
    }
    function h(a, b, c) {
      c = c;
      b[c++] = a >> 8;
      b[c++] = a % 256;
      return c;
    }
    function e(a, b) {
      return 256 * a[b] + a[b + 1];
    }
    function f(a) {
      var b = 0;
      for (var c = 0, d = a.length; c < d; c++) {
        var e = a.charCodeAt(c);
        e < 128
          ? (b += 1)
          : e < 2048
          ? (b += 2)
          : e >= 55296 && e <= 56319
          ? ((b += 4), c++)
          : (b += 3);
      }
      return b;
    }
    function i(a, b, c, d) {
      d = h(b, c, d);
      j(a, c, d);
      return d + b;
    }
    function j(a, b, c) {
      c = c;
      for (var d = 0, e = a.length; d < e; d++) {
        var f = a.charCodeAt(d);
        f < 128
          ? (b[c++] = f)
          : f < 2048
          ? ((b[c++] = 192 | (f >> 6)), (b[c++] = 128 | (f & 63)))
          : f < 55296 || f >= 57344
          ? ((b[c++] = 224 | (f >> 12)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)))
          : ((f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
            (b[c++] = 240 | (f >> 18)),
            (b[c++] = 128 | ((f >> 12) & 63)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)));
      }
    }
    function k(a, b, c) {
      var d = [],
        e = b,
        f = 0;
      while (e < b + c) {
        var g = a[e++];
        if (g < 128) d[f++] = String.fromCharCode(g);
        else if (g > 191 && g < 224) {
          var h = a[e++];
          d[f++] = String.fromCharCode(((g & 31) << 6) | (h & 63));
        } else if (g > 239 && g < 365) {
          h = a[e++];
          var i = a[e++],
            j = a[e++];
          h =
            (((g & 7) << 18) | ((h & 63) << 12) | ((i & 63) << 6) | (j & 63)) -
            65536;
          d[f++] = String.fromCharCode(55296 + (h >> 10));
          d[f++] = String.fromCharCode(56320 + (h & 1023));
        } else {
          i = a[e++];
          j = a[e++];
          d[f++] = String.fromCharCode(
            ((g & 15) << 12) | ((i & 63) << 6) | (j & 63)
          );
        }
      }
      return d.join("");
    }
    var l = (function () {
      function a(a, b, c, d) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$5 = c),
          (this.$6 = d),
          (this.$4 = !1);
      }
      var b = a.prototype;
      b.$7 = function () {
        var a = this;
        this.$4
          ? ((this.$4 = !1),
            this.$5(),
            (this.$3 = d("MqttEnv").Env.setTimeout(function () {
              a.$7();
            }, this.$2() * 1e3)))
          : this.$6();
      };
      b.reset = function () {
        var a = this;
        this.$4 = !0;
        this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null));
        var b = this.$1() * 1e3;
        b > 0 &&
          (this.$3 = d("MqttEnv").Env.setTimeout(function () {
            a.$7();
          }, b));
      };
      b.cancel = function () {
        this.$3 && (d("MqttEnv").Env.clearTimeout(this.$3), (this.$3 = null));
      };
      return a;
    })();
    g.UTF8Length = f;
    g.convertStringToUTF8 = j;
    g.concatBuffers = a;
    g.decodeMultiByteInt = b;
    g.convertUTF8ToString = k;
    g.encodeMultiByteInt = c;
    g.writeUInt16BE = h;
    g.readUInt16BE = e;
    g.writeString = i;
    g.Pinger = l;
  },
  98
);
__d(
  "MqttUtils",
  ["MqttEnv"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      endpointWithSessionId: function (a, b) {
        return h.endpointWithExtraParameter(a, "sid", b.toString());
      },
      endpointWithExtraParameters: function (a, b) {
        var c = a;
        b.forEach(function (a, b, d) {
          c = h.endpointWithExtraParameter(c, b, a);
        });
        return c;
      },
      endpointWithExtraParameter: function (a, b, c) {
        if (a.indexOf("?") > 0) return a + "&" + b + "=" + c;
        else return a + "?" + b + "=" + c;
      },
      generateSessionId: function () {
        return Math.floor(d("MqttEnv").Env.random() * Number.MAX_SAFE_INTEGER);
      },
      promiseDone: function (a, b, c) {
        var e = arguments.length > 1 ? a.then(b, c) : a;
        e.then(null, function (a) {
          d("MqttEnv").Env.setTimeout(function () {
            if (a instanceof Error) throw a;
            else throw new Error("promiseDone");
          }, 0);
        });
      },
      promiseDoneWithTimeout: function (a, b, c, e) {
        var f = !1;
        d("MqttEnv").Env.setTimeout(function () {
          f || ((f = !0), c(new Error("promise timeout")));
        }, e);
        h.promiseDone(
          a,
          function (a) {
            f || ((f = !0), b(a));
          },
          function (a) {
            f || ((f = !0), c(a));
          }
        );
      },
      sprintf: function (a) {
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
      },
      hasWSSupport: function () {
        return (
          "WebSocket" in a &&
          a.WebSocket != null &&
          "CLOSING" in a.WebSocket.prototype
        );
      },
      getWSAvailability: function () {
        var b = "";
        if ("WebSocket" in a && a.WebSocket !== null) b += "W";
        else return "none";
        "CLOSING" in a.WebSocket.prototype && (b += "C");
        return b;
      },
    };
    f.exports = h;
  },
  34
);
__d(
  "MqttProtocolCodec",
  ["MqttProtocolUtils", "MqttUtils", "err"],
  function (a, b, c, d, e, f, g) {
    var h = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14,
      }),
      i = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function j(a, b) {
      b = b;
      var e = b,
        f = a[b],
        g = f >> 4;
      b += 1;
      var i = d("MqttProtocolUtils").decodeMultiByteInt(a, b);
      if (i == null) return { wireMessage: null, position: e };
      b = i.offset;
      i = b + i.value;
      if (i > a.length) return { wireMessage: null, position: e };
      var j;
      switch (g) {
        case h.CONNACK:
          e = a[b++];
          e = !!(e & 1);
          var o = a[b++];
          j = new m(e, o);
          break;
        case h.PUBLISH:
          e = f & 15;
          o = (e >> 1) & 3;
          f = d("MqttProtocolUtils").readUInt16BE(a, b);
          b += 2;
          var r = d("MqttProtocolUtils").convertUTF8ToString(a, b, f);
          b += f;
          f = null;
          o === 1 &&
            ((f = d("MqttProtocolUtils").readUInt16BE(a, b)), (b += 2));
          var s = p.createWithBytes(a.subarray(b, i)),
            t = (e & 1) === 1;
          e = (e & 8) === 8;
          j = new q(r, s, o, f, t, e);
          break;
        case h.PINGREQ:
          j = new k("PINGREQ");
          break;
        case h.PINGRESP:
          j = new k("PINGRESP");
          break;
        case h.PUBACK:
        case h.UNSUBACK:
          r = d("MqttProtocolUtils").readUInt16BE(a, b);
          j = new n(g === h.PUBACK ? "PUBACK" : "UNSUBACK", r);
          break;
        case h.SUBACK:
          s = d("MqttProtocolUtils").readUInt16BE(a, b);
          b += 2;
          o = a.subarray(b, i);
          j = new l(s, o);
          break;
        default:
          throw c("err")(
            d("MqttUtils").sprintf("Invalid MQTT message type %s.", g)
          );
      }
      return { wireMessage: j, position: i };
    }
    function a(a) {
      var b = [],
        c = 0;
      while (c < a.length) {
        var d = j(a, c),
          e = d.wireMessage;
        c = d.position;
        if (e) b.push(e);
        else break;
      }
      d = null;
      c < a.length && (d = a.subarray(c));
      return { messages: b, remaining: d };
    }
    b = (function () {
      function a(a) {
        this.messageType = h[a];
      }
      var b = a.prototype;
      b.encode = function () {
        throw new TypeError("Cannot abstract class WireMessage");
      };
      return a;
    })();
    var k = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a) {
        return b.call(this, a) || this;
      }
      var c = a.prototype;
      c.encode = function () {
        var a = new ArrayBuffer(2),
          b = new Uint8Array(a);
        b[0] = (this.messageType & 15) << 4;
        return a;
      };
      return a;
    })(b);
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, "DISCONNECT") || this;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = new ArrayBuffer(2),
          c = new Uint8Array(b);
        c[0] = a;
        c.set(d("MqttProtocolUtils").encodeMultiByteInt(0), 1);
        return b;
      };
      return b;
    })(b);
    var l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "SUBACK") || this;
          d.messageIdentifier = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(b),
      m = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "CONNACK") || this;
          d.sessionPresent = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(b),
      n = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          a = b.call(this, a) || this;
          a.messageIdentifier = c;
          return a;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4,
            b = 2,
            c = d("MqttProtocolUtils").encodeMultiByteInt(b),
            e = c.length + 1;
          b = new ArrayBuffer(b + e);
          var f = new Uint8Array(b);
          f[0] = a;
          f.set(c, 1);
          e = d("MqttProtocolUtils").writeUInt16BE(
            this.messageIdentifier,
            f,
            e
          );
          return b;
        };
        return a;
      })(b);
    f = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, "CONNECT") || this;
        d.clientId = b;
        d.connectOptions = c;
        return d;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = i.length + 3;
        b += d("MqttProtocolUtils").UTF8Length(this.clientId) + 2;
        b +=
          d("MqttProtocolUtils").UTF8Length(this.connectOptions.userName) + 2;
        var c = d("MqttProtocolUtils").encodeMultiByteInt(b);
        b = new ArrayBuffer(1 + c.length + b);
        var e = new Uint8Array(b);
        e[0] = a;
        a = 1;
        e.set(c, 1);
        a += c.length;
        e.set(i, a);
        a += i.length;
        c = 2 | 128;
        e[a++] = c;
        a = d("MqttProtocolUtils").writeUInt16BE(
          this.connectOptions.getKeepAliveIntervalSeconds(),
          e,
          a
        );
        a = d("MqttProtocolUtils").writeString(
          this.clientId,
          d("MqttProtocolUtils").UTF8Length(this.clientId),
          e,
          a
        );
        a = d("MqttProtocolUtils").writeString(
          this.connectOptions.userName,
          d("MqttProtocolUtils").UTF8Length(this.connectOptions.userName),
          e,
          a
        );
        return b;
      };
      return b;
    })(b);
    var o = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, e, f) {
          var g;
          g = b.call(this, a) || this;
          g.topic = c;
          if ((e < 0 && e > 1) || (e === 1 && f == null))
            throw new TypeError(
              d("MqttUtils").sprintf(
                "Argument Invalid. qos: %s messageType: %s.",
                e,
                a
              )
            );
          g.qos = e;
          g.messageIdentifier = f;
          return g;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4;
          a |= 2;
          var b = d("MqttProtocolUtils").UTF8Length(this.topic),
            c = 2 + b + 2;
          this.messageType === h.SUBSCRIBE && (c += 1);
          var e = d("MqttProtocolUtils").encodeMultiByteInt(c);
          c = new ArrayBuffer(1 + e.length + c);
          var f = new Uint8Array(c);
          f[0] = a;
          a = 1;
          f.set(e, 1);
          a += e.length;
          this.messageIdentifier != null &&
            (a = d("MqttProtocolUtils").writeUInt16BE(
              this.messageIdentifier,
              f,
              a
            ));
          a = d("MqttProtocolUtils").writeString(this.topic, b, f, a);
          this.messageType === h.SUBSCRIBE &&
            this.qos != null &&
            (f[a++] = this.qos);
          return c;
        };
        return a;
      })(b),
      p = (function () {
        function a(a, b) {
          (this.payloadString = a), (this.payloadBytes = b);
        }
        a.createWithString = function (b) {
          var c = new Uint8Array(
            new ArrayBuffer(d("MqttProtocolUtils").UTF8Length(b))
          );
          d("MqttProtocolUtils").convertStringToUTF8(b, c, 0);
          return new a(b, c);
        };
        a.createWithBytes = function (b) {
          var c = d("MqttProtocolUtils").convertUTF8ToString(b, 0, b.length);
          return new a(c, b);
        };
        var b = a.prototype;
        b.string = function () {
          return this.payloadString;
        };
        b.bytes = function () {
          return this.payloadBytes;
        };
        return a;
      })(),
      q = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f, g) {
          var h;
          h = b.call(this, "PUBLISH") || this;
          h.topic = a;
          h.payloadMessage = c;
          h.qos = d;
          h.messageIdentifier = e;
          h.retained = f != null ? f : !1;
          h.duplicate = g != null ? g : !1;
          if (h.qos === 1 && h.messageIdentifier == null)
            throw new TypeError(
              "Argument Invalid. messageIdentifier: null and qos: 1"
            );
          return h;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4;
          this.duplicate && (a |= 8);
          a = a |= this.qos << 1;
          this.retained && a != 1;
          var b = d("MqttProtocolUtils").UTF8Length(this.topic),
            c = b + 2,
            e = this.qos === 0 ? 0 : 2;
          c += e;
          e = this.payloadMessage.bytes();
          c += e.byteLength;
          var f = d("MqttProtocolUtils").encodeMultiByteInt(c);
          c = new ArrayBuffer(1 + f.length + c);
          var g = new Uint8Array(c);
          g[0] = a;
          g.set(f, 1);
          a = 1 + f.length;
          a = d("MqttProtocolUtils").writeString(this.topic, b, g, a);
          this.qos !== 0 &&
            this.messageIdentifier != null &&
            (a = d("MqttProtocolUtils").writeUInt16BE(
              this.messageIdentifier,
              g,
              a
            ));
          g.set(e, a);
          return c;
        };
        return a;
      })(b),
      r = p.createWithString;
    b = {
      Base: b,
      PubAckUnsubAck: n,
      Ping: k,
      ConnAck: m,
      Connect: f,
      Disconnect: e,
      Subscription: o,
      Publish: q,
    };
    g.MESSAGE_TYPE = h;
    g.decodeMessage = j;
    g.decodeByteMessages = a;
    g.Message = p;
    g.createMessageWithString = r;
    g.WireMessage = b;
  },
  98
);
__d(
  "MqttTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c) {
      (this.errorCode = a), (this.errorName = b), (this.errorMessage = c);
    };
    b = Object.freeze({
      SOCKET_ERROR: new a(1, "SOCKET_ERROR", "Socket error"),
      SOCKET_MESSAGE: new a(
        2,
        "SOCKET_MESSAGE",
        "Unable to parse invalid socket message"
      ),
      INVALID_DATA_TYPE: new a(
        3,
        "INVALID_DATA_TYPE",
        "Received non-arraybuffer from socket."
      ),
      CONNECT_TIMEOUT: new a(4, "CONNECT_TIMEOUT", "Connect timed out"),
      CONNACK_FAILURE: new a(
        5,
        "CONNACK_FAILURE",
        "Connection failure due to connack"
      ),
      PING_TIMEOUT: new a(6, "PING_TIMEOUT", "Ping timeout"),
      APP_DISCONNECT: new a(7, "APP_DISCONNECT", "Disconnect initiated by app"),
      SERVER_DISCONNECT: new a(
        8,
        "SERVER_DISCONNECT",
        "Disconnect message sent my server"
      ),
      SOCKET_CLOSE: new a(9, "SOCKET_CLOSE", "Socket connection closed"),
      RECONNECT: new a(10, "RECONNECT", "Reconnecting"),
      BROWSER_CLOSE: new a(11, "BROWSER_CLOSE", "Browser closed"),
    });
    c = function (a, b) {
      (this.mqttError = a), (this.connAck = b);
    };
    d = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        d === void 0 && (d = null);
        c = a.call(this, c) || this;
        c.isRecoverable = b;
        c.originalError = d;
        return c;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f.MqttError = a;
    f.MqttErrors = b;
    f.ConnectFailure = c;
    f.MqttChannelError = d;
  },
  66
);
__d(
  "MqttProtocolClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttProtocolUtils",
    "MqttTypes",
    "err",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 30,
      i = 6e4;
    a = (function () {
      function a(a) {
        var b = this;
        this.$12 = function (a, c, e) {
          c === void 0 && (c = null);
          b.$9.bumpCounter("protocol.debug.disconnect.internal." + a.errorName);
          b.$9.bumpCounter("protocol.debug.disconnect.internal");
          var f = b.$5,
            g = b.$2,
            h = g.onConnectionLost,
            i = g.onConnectFailure;
          b.setConnected(!1);
          b.$14();
          f
            ? d("MqttEnv").Env.scheduleCallback(function () {
                h(a, c);
              })
            : d("MqttEnv").Env.scheduleCallback(function () {
                i(
                  b.$11,
                  new (d("MqttTypes").ConnectFailure)(a, e != null ? e : -1),
                  c
                );
              });
        };
        this.$13 = function (a) {
          var c = b.$6;
          if (c == null) {
            b.$9.bumpCounter(
              "protocol.socket_send.failed.socket_null.<message type>"
            );
            return 0;
          }
          if (c.readyState !== c.OPEN) {
            b.$9.bumpCounter(
              "protocol.socket_send.failed.socket_not_open.<message type>"
            );
            return 0;
          }
          a = a.encode();
          var d = a.byteLength;
          c.send(a);
          return d;
        };
        this.$3 = a;
        this.$2 = {
          userName: "",
          mqttVersion: 3,
          getKeepAliveIntervalSeconds: function () {
            return 10;
          },
          getKeepAliveTimeoutSeconds: function () {
            return 10;
          },
          ignoreSubProtocol: !1,
          onConnectSuccess: function (a) {},
          onConnectFailure: function (a, b, c) {},
          onConnection: function () {},
          onConnectionLost: function (a, b) {},
          onMessageArrived: function (a, b, c) {},
          onMessageDelivered: function (a, b) {},
        };
        this.$1 = "mqttwsclient";
        this.$4 = 0;
        this.$5 = !1;
        this.$9 = d("MqttEnv").Env.getLoggerInstance();
        this.$11 = 0;
      }
      var b = a.prototype;
      b.connect = function (a) {
        var b,
          e = this;
        if (this.$5)
          throw c("err")("Invalid state: connect - already connected");
        this.$2 = a;
        this.setConnected(!1);
        this.$7 != null &&
          (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null));
        b = (b = c("qex")._("660")) != null ? b : h;
        this.$7 = d("MqttEnv").Env.setTimeout(function () {
          e.$9.bumpCounter("protocol.error.connect.timeout"),
            e.$12(d("MqttTypes").MqttErrors.CONNECT_TIMEOUT);
        }, b * 1e3);
        this.$6 = d("MqttEnv").Env.createSocket(this.$3);
        this.$6.binaryType = "arraybuffer";
        this.$6.onopen = function () {
          e.setConnected(!0),
            e.$9.debugTrace("Socket-Open", "MQTTProtocolClient Socket Open"),
            (e.$11 = e.$13(
              new (d("MqttProtocolCodec").WireMessage.Connect)(e.$1, a)
            )),
            a.onConnection();
        };
        this.$6.onmessage = function (a) {
          a = a.data;
          if (!(a instanceof ArrayBuffer)) {
            e.$9.bumpCounter("protocol.error.onmessage.type");
            e.$12(d("MqttTypes").MqttErrors.INVALID_DATA_TYPE);
            return;
          }
          try {
            a = new Uint8Array(a);
            e.$10 != null &&
              ((a = d("MqttProtocolUtils").concatBuffers(e.$10, a)),
              e.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
              delete e.$10,
              (e.$10 = null));
            a = d("MqttProtocolCodec").decodeByteMessages(a);
            var b = a.messages;
            e.$10 = a.remaining;
            for (a = 0; a < b.length; a++) e.handleMessage(b[a]);
          } catch (a) {
            (e.$10 = null),
              e.$9.logError(
                a,
                d("MqttTypes").MqttErrors.SOCKET_MESSAGE.errorMessage
              ),
              e.$9.bumpCounter("protocol.error.onmessage.parse"),
              e.$12(d("MqttTypes").MqttErrors.SOCKET_MESSAGE, a.message);
          }
        };
        this.$6.onerror = function (a) {
          e.$9.bumpCounter("protocol.error.socket"),
            e.$9.debugTrace("Socket-Error", "MQTTProtocolClient Socket Error"),
            e.$12(d("MqttTypes").MqttErrors.SOCKET_ERROR);
        };
        this.$6.onclose = function (a) {
          e.$9.bumpCounter("protocol.socket.close"),
            a.wasClean ||
              e.$9.debugTrace(
                "Socket-Unclean-Close",
                "MQTTProtocolClient error code: " +
                  a.code +
                  " reason: " +
                  a.reason
              ),
            e.$12(
              d("MqttTypes").MqttErrors.SOCKET_CLOSE,
              a.code + " : " + a.reason
            );
        };
        this.$8 != null && this.$8.cancel();
        this.$8 = new (d("MqttProtocolUtils").Pinger)(
          a.getKeepAliveIntervalSeconds,
          a.getKeepAliveTimeoutSeconds,
          this.$13.bind(
            this,
            new (d("MqttProtocolCodec").WireMessage.Ping)("PINGREQ")
          ),
          function (a, b) {
            return e.$12(d("MqttTypes").MqttErrors.PING_TIMEOUT, a, b);
          }
        );
      };
      b.$14 = function () {
        var a = this;
        this.setConnected(!1);
        this.$8 != null && this.$8.cancel();
        this.$7 != null &&
          (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null));
        this.$6 != null &&
          ((this.$6.onopen = function (b) {
            a.$9.debugTrace(
              "Socket Open After Teardown",
              "Socket opening after teardown"
            );
          }),
          (this.$6.onmessage = function (a) {}),
          (this.$6.onerror = function (a) {}),
          (this.$6.onclose = function (b) {
            a.$9.debugTrace(
              "Socket Close After Teardown",
              "code: " + b.code + ", reason: " + b.reason
            );
          }),
          this.$6.close(),
          (this.$6 = null));
        this.$2.onConnectSuccess = function (a) {};
        this.$2.onConnectFailure = function (a, b) {};
        this.$2.onConnection = function () {};
        this.$2.onConnectionLost = function (a) {};
        this.$2.onMessageArrived = function (a, b, c) {};
        this.$2.onMessageDelivered = function (a, b) {};
      };
      b.disconnect = function (a) {
        if (
          this.$6 == null ||
          this.$6.readyState !== this.$6.OPEN ||
          !this.$5
        ) {
          this.$14();
          return;
        }
        this.$13(new (d("MqttProtocolCodec").WireMessage.Disconnect)());
        this.$9.bumpCounter("protocol.debug.disconnect");
        this.$12(a);
      };
      b.isConnected = function () {
        return this.$5;
      };
      b.setConnected = function (a) {
        this.$5 = a;
      };
      b.subscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.subscribe.notconnected");
          throw c("err")("Invalid state: subscribe - not connected");
        }
        this.$9.bumpCounter("protocol.subscribe." + a);
        a = new (d("MqttProtocolCodec").WireMessage.Subscription)(
          "SUBSCRIBE",
          a,
          0,
          this.$15()
        );
        this.$13(a);
      };
      b.unsubscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
          throw c("err")("Invalid state: unsubscribe - not connected");
        }
        this.$9.bumpCounter("protocol.unsubscribe." + a);
        a = new (d("MqttProtocolCodec").WireMessage.Subscription)(
          "UNSUBSCRIBE",
          a,
          0,
          this.$15()
        );
        this.$13(a);
      };
      b.publish = function (a, b, c) {
        this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
        this.$9.bumpCounter("protocol.publish." + a);
        var e = this.$15();
        a = new (d("MqttProtocolCodec").WireMessage.Publish)(
          a,
          d("MqttProtocolCodec").createMessageWithString(b),
          c,
          e
        );
        this.$13(a);
        return e;
      };
      b.$15 = function () {
        ++this.$4 === i && (this.$4 = 1);
        return this.$4;
      };
      b.handleMessage = function (a) {
        var b = this;
        switch (a.messageType) {
          case d("MqttProtocolCodec").MESSAGE_TYPE.CONNACK:
            this.$7 != null &&
              (d("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null));
            if (a instanceof d("MqttProtocolCodec").WireMessage.ConnAck) {
              var e = a;
              if (e.returnCode !== 0) {
                this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                this.setConnected(!1);
                this.$12(
                  d("MqttTypes").MqttErrors.CONNACK_FAILURE,
                  "connack code=" + e.returnCode,
                  e.returnCode
                );
                return;
              }
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onConnectSuccess(b.$11);
              });
              this.$8 != null && this.$8.reset();
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH:
            if (a instanceof d("MqttProtocolCodec").WireMessage.Publish) {
              var f = a;
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onMessageArrived(f.topic, f.payloadMessage, f.qos);
              });
              e = f.messageIdentifier;
              this.$9.bumpCounter("protocol.publish.received");
              if (f.qos === 1 && e != null) {
                e = new (d("MqttProtocolCodec").WireMessage.PubAckUnsubAck)(
                  "PUBACK",
                  e
                );
                this.$13(e);
              }
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PUBACK:
            if (
              a instanceof d("MqttProtocolCodec").WireMessage.PubAckUnsubAck
            ) {
              e = a;
              var g = e.messageIdentifier;
              this.$9.bumpCounter("protocol.puback.received");
              d("MqttEnv").Env.scheduleCallback(function () {
                b.$2.onMessageDelivered("", g);
              });
            }
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.PINGRESP:
            this.$8 != null && this.$8.reset();
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.DISCONNECT:
            this.$12(d("MqttTypes").MqttErrors.SERVER_DISCONNECT);
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.SUBACK:
            this.$9.bumpCounter("protocol.suback.received");
            break;
          case d("MqttProtocolCodec").MESSAGE_TYPE.UNSUBACK:
            this.$9.bumpCounter("protocol.unsuback.received");
            break;
          default:
            this.$9.logError(
              c("err")(
                "MqttProtocolClient: Received unhandled message type: " +
                  a.messageType
              ),
              "Received unhandled message type"
            );
            this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
            break;
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttPublishListener",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      NOT_CONNECTED: "NOT_CONNECTED",
      PUBLISH_ERROR: "PUBLISH_ERROR",
      QUEUED: "QUEUED",
      SENT: "SENT",
      ACKED: "ACKED",
      NOT_ACKED: "NOT_ACKED",
    });
    f.MqttPublishEvent = a;
  },
  66
);
__d(
  "MqttUserName",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d, e, f, g, h, i, j, k, l) {
        h === void 0 && (h = null),
          i === void 0 && (i = ""),
          j === void 0 && (j = "websocket"),
          k === void 0 && (k = null),
          l === void 0 && (l = null),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$4 = e),
          (this.$5 = f),
          (this.$6 = g),
          (this.$7 = c("gkx")("1166607")
            ? !1
            : typeof document === "object" &&
              document &&
              document.hasFocus &&
              document.hasFocus()),
          (this.$8 = h),
          (this.$9 = i),
          (this.$10 = j),
          (this.$11 = k),
          (this.$12 = l);
      }
      var b = a.prototype;
      b.gen = function (a, b, d, e) {
        e === void 0 && (e = []);
        var f = c("gkx")("1166607") ? !1 : this.$7;
        a = {
          u: this.$1,
          s: a,
          cp: this.$3,
          ecp: this.$2,
          chat_on: this.$6,
          fg: f,
          d: this.$4,
          ct: this.$10,
          mqtt_sid: "",
          aid: this.$5,
          st: b,
          pm: d,
          dc: "",
          no_auto_fg: !0,
          gas: this.$8,
          pack: e,
          php_override: this.$9,
          p: this.$11,
          a: navigator.userAgent,
          aids: this.$12 != null ? Object.fromEntries(this.$12) : null,
        };
        return JSON.stringify(a);
      };
      b.setForegroundState = function (a) {
        this.$7 = a;
      };
      b.setChatVisibility = function (a) {
        this.$6 = a;
      };
      b.getEndpointCapabilities = function () {
        return this.$2;
      };
      b.getDeviceId = function () {
        return this.$4;
      };
      b.setEndpointCapabilities = function (a) {
        this.$2 = a;
      };
      b.getIsGuestAuthStringPresent = function () {
        return this.$8 !== null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttConnection",
  [
    "MqttConnectionHookCollection",
    "MqttEnv",
    "MqttProtocolClient",
    "MqttPublishListener",
    "MqttTypes",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "err",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
      i = 1,
      j = 1,
      k = 64,
      l = "publish",
      m = "subscribe",
      n = "unsubscribe",
      o = function (a) {},
      p = 18e4,
      q = 5 * 1e3,
      r = 15,
      s = 21;
    a = (function () {
      function a() {
        var a = this;
        this.$37 = function () {
          return a.$20;
        };
        this.$38 = function () {
          return a.$21;
        };
        this.$8 = !1;
        this.$10 = d("MqttEnv").Env.getLoggerInstance();
        this.$11 = "Disconnected";
        this.$17 = new Set();
        this.$24 = new Map();
        this.$12 = 0;
        this.$13 = 0;
        this.$14 = 0;
        this.$15 = 0;
        this.$16 = 0;
        this.$8 = !1;
        this.$5 = "";
        this.$6 = new (c("MqttUserName"))("", 0, 1, "", 0, !0);
        this.$9 = 0;
        this.$18 = 0;
        this.$19 = !1;
        this.$7 = null;
        var b = function () {};
        this.$1 = b;
        this.$2 = b;
        this.$3 = b;
        this.$25 = !1;
        this.$26 = !1;
        this.$27 = new (c("MqttConnectionHookCollection"))();
        this.$4 = function () {
          return [];
        };
        this.$20 = h;
        this.$21 = h;
        this.$22 = null;
        this.$23 = 0;
      }
      var e = a.prototype;
      e.run = function (a) {
        var b = this,
          d = a.onStateChange,
          e = a.onJSError,
          f = a.onMessageReceived,
          g = a.endpoint,
          i = a.mqttUserName,
          j = a.subscribedTopics;
        a = a.extraConnectMessageProvider;
        if (this.$8) {
          this.$10.debugTrace("run", "Run called while in running state.");
          return;
        }
        this.$1 = d;
        this.$3 = f;
        this.$5 = g;
        this.$6 = i;
        this.$8 = !0;
        this.$18 = Date.now();
        this.$12 = 0;
        this.$13 = 0;
        this.$2 = e || o;
        j &&
          j.forEach(function (a) {
            return b.$17.add(a);
          });
        this.$4 = a;
        this.$20 = (d = c("qex")._("656")) != null ? d : h;
        this.$21 = (f = c("qex")._("657")) != null ? f : h;
        this.$28();
      };
      e.shutdown = function (a) {
        this.$29(a),
          this.$30("shutdown"),
          (this.$8 = !1),
          this.$10.debugTrace("shutdown", "Shutdown");
      };
      e.subscribe = function (a) {
        this.$17.add(a);
        this.ensureConnected(m) && this.$31(a);
        return !0;
      };
      e.publish = function (a, e, f, g) {
        var h = { resolve: function () {}, reject: function (a) {} };
        g != null && (h.listener = g);
        var i = new (b("Promise"))(function (a, b) {
            (h.resolve = a), (h.reject = b);
          }),
          j = this.ensureConnected(l);
        !j
          ? (g == null
              ? void 0
              : g.onEvent(
                  d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED
                ),
            h.reject(c("err")("Client disconnected")))
          : this.$32(a, e, f, h);
        return i;
      };
      e.unsubscribe = function (a) {
        this.$17["delete"](a);
        this.ensureConnected(n) && this.$33(a);
        return !0;
      };
      e.addHook = function (a) {
        this.$27.addHook(a);
      };
      e.removeHook = function (a) {
        this.$27.removeHook(a);
      };
      e.isRunning = function () {
        return this.$8;
      };
      e.getSessionId = function () {
        return this.$9;
      };
      e.hasFatal = function () {
        return this.$25;
      };
      e.hasConnectSuccess = function () {
        return this.$26;
      };
      e.canPublish = function () {
        return this.ensureConnected("canPublish");
      };
      e.ensureConnected = function (a) {
        return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0;
      };
      e.connectionState = function () {
        return this.$11;
      };
      e.mqttStateFromConnectionState = function (a) {
        switch (a) {
          case "Connecting":
          case "TransportConnected":
            return "Connecting";
          case "Connected":
            return "Connected";
          case "Disconnected":
            return "Disconnected";
        }
        throw c("err")("Unknown state " + a);
      };
      e.testOnlyGetSubscribedTopics = function () {
        return this.$17;
      };
      e.onWindowUnload = function () {
        var a = this;
        this.publish("/browser_close", "{}", 0)["catch"](function () {
          a.$10.bumpCounter("on_window_unload.browser_close_publish_failed");
        });
      };
      e.getDisconnectCount = function () {
        return this.$23;
      };
      e.$29 = function (a) {
        this.$8 &&
          this.$7 != null &&
          (this.$34("Disconnected"),
          this.$7 != null &&
            (this.$7.disconnect(a), this.$27.onConnectionDisconnect()),
          (this.$7 = null));
      };
      e.$35 = function (a) {
        if (
          this.$11 === "Connected" &&
          a === "Disconnected" &&
          this.$18 === 0
        ) {
          this.$18 = Date.now();
          return;
        }
        if (a === "Connecting" && this.$18 !== 0 && !this.$19) {
          this.$10.bumpCounter("protocol.reconnectstarted");
          this.$19 = !0;
          return;
        }
        if (a === "Connected" && this.$18 !== 0) {
          a = Date.now() - this.$18;
          switch (Math.floor(a / 3e4)) {
            case 0:
              this.$10.bumpCounter("protocol.reconnectedwithin30s");
              break;
            case 1:
              this.$10.bumpCounter("protocol.reconnectedwithin60s");
              break;
            case 2:
              this.$10.bumpCounter("protocol.reconnectedwithin90s");
              break;
            case 3:
              this.$10.bumpCounter("protocol.reconnectedwithin120s");
              break;
            default:
              this.$10.bumpCounter("protocol.reconnectedmorethan120s");
              break;
          }
          this.$18 = 0;
          this.$19 = !1;
          return;
        }
      };
      e.$34 = function (a) {
        a !== this.$11 &&
          (this.$10.debugTrace(
            "MQTTConnection-updateState",
            "State changed to: " + a
          ),
          this.$35(a),
          (this.$11 = a),
          this.$1(a));
      };
      e.$28 = function () {
        var a = this;
        if (!this.$8) return;
        this.$11 !== "Disconnected" &&
          this.$10.debugTrace(
            "Reconnect",
            "Current State not disconnected: " + this.$11
          );
        this.$34("Connecting");
        var b = Date.now(),
          e = this.$10.getBrowserConnectivity();
        this.$9 = c("MqttUtils").generateSessionId();
        var f = Array.from(this.$17),
          g = c("MqttUtils").endpointWithSessionId(this.$5, this.$9);
        g = c("MqttUtils").endpointWithExtraParameter(
          g,
          "cid",
          this.$6.getDeviceId()
        );
        try {
          this.$7 = new (c("MqttProtocolClient"))(g);
          var h = this.$36(),
            i = h.map(function (a) {
              return a.topic;
            });
          g = this.$6.gen(this.$9, f, h);
          this.$7 != null &&
            ((this.$13 += 1),
            this.$7.connect({
              userName: g,
              mqttVersion: 3,
              getKeepAliveIntervalSeconds: this.$37,
              getKeepAliveTimeoutSeconds: this.$38,
              ignoreSubProtocol: !0,
              onConnectFailure: function (c, d, g) {
                return a.$39(d, b, a.$18, f, i, e, c, g);
              },
              onConnectSuccess: function (c) {
                return a.$40(b, a.$18, f, i, e, c);
              },
              onConnection: function () {
                return a.$41(h, f);
              },
              onConnectionLost: function (b, c) {
                return a.$42(b, c);
              },
              onMessageArrived: function (b, c, d) {
                return a.$43(b, c, d);
              },
              onMessageDelivered: function (b, c) {
                return a.$44(b, c);
              },
            }),
            this.$10.bumpCounter("protocol.connectattempt"),
            this.$6.getIsGuestAuthStringPresent() &&
              this.$10.bumpCounter("guestAuthentication.connectattempt"),
            this.$27.onConnectAttempt());
        } catch (a) {
          this.$10.bumpCounter("js_error_in_init_exception"),
            this.$34("Disconnected"),
            this.$45(
              !1,
              !1,
              b,
              this.$18,
              f,
              [],
              e,
              null,
              14,
              "init error - " + a.message
            ),
            a && this.$10.logErrorWarn(a, "ws_js_error"),
            this.$27.onWSFatal(),
            this.$46(
              new (d("MqttTypes").MqttChannelError)(!1, "ws_js_error", a),
              "client_init"
            );
        }
      };
      e.$36 = function () {
        var a = this.$4(),
          b = 65536;
        return a.map(function (a) {
          a.messageId = b--;
          return a;
        });
      };
      e.$31 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.subscribe(a);
            this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
            this.$27.onSubscribe(a);
            this.$10.bumpCounter("protocol.subscribe");
            return !0;
          }
        } catch (b) {
          this.$10.logError(b, "Exception subscribing"),
            this.$10.bumpCounter("subscribe_exception." + a),
            this.$10.bumpCounter("protocol.subscribe.error");
        }
        return !1;
      };
      e.$33 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.unsubscribe(a);
            this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
            this.$27.onUnsubscribe(a);
            this.$10.bumpCounter("protocol.unsubscribe");
            return !0;
          }
        } catch (b) {
          this.$10.logError(b, "Exception unsubscribing"),
            this.$10.bumpCounter("unsubscribe_exception." + a),
            this.$10.bumpCounter("protocol.unsubscribe.error");
        }
        return !1;
      };
      e.$32 = function (a, b, c, e) {
        if (this.$7 != null)
          try {
            b = this.$7.publish(a, b, c);
            this.$10.bumpCounter("protocol.publish");
            var f = b != null ? b : "null";
            this.$10.debugTrace(
              "_doPublish",
              "publish " + a + " with messageId:" + f + " qos:" + c
            );
            this.$27.onPublish(a);
            (f = e.listener) == null
              ? void 0
              : f.onEvent(d("MqttPublishListener").MqttPublishEvent.SENT);
            b != null
              ? (this.$10.bumpCounter("publish.ack_expected"),
                this.$24.set(b, e))
              : e.resolve();
            return !0;
          } catch (b) {
            this.$10.logError(b, "Exception publishing");
            this.$10.bumpCounter("publish_exception." + a);
            e.reject(b);
            this.$10.bumpCounter("protocol.publish.error");
            return !1;
          }
        else return !1;
      };
      e.$47 = function (a) {
        var b = this;
        a === void 0 && (a = null);
        if (!this.$8) return;
        this.$29(d("MqttTypes").MqttErrors.RECONNECT);
        this.$30("reconnect");
        this.$48();
        this.$9 = -1;
        this.$16 = 0;
        a = a;
        if (a == null) {
          var e;
          e = (e = c("qex")._("130")) != null ? e : i;
          a = e * Math.pow(2, this.$12);
        }
        a = Math.max(a, j);
        e = (e = c("qex")._("131")) != null ? e : k;
        a = Math.min(a, e);
        e = a * (1e3 + d("MqttEnv").Env.random() * 200);
        this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + e + " ms");
        this.$22 = d("MqttEnv").Env.setTimeout(function () {
          b.$28();
        }, e);
        this.$12 += 1;
      };
      e.$48 = function () {
        var a = Date.now() - this.$16,
          b = this.$16 !== 0 && a > q,
          c = this.$12 > r;
        (b || c) && (this.$12 = 0);
        this.$16 !== 0 && a <= q && this.$10.bumpCounter("short_lived_session");
        c && this.$10.bumpCounter("connection_attempt_limit");
      };
      e.$45 = function (a, b, c, d, e, f, g, h, i, j) {
        a ? this.$14++ : this.$15++;
        var k = Date.now();
        this.$10.eventLogConnect({
          sessionID: this.$9,
          connectionStatus: a,
          connectionState: this.mqttStateFromConnectionState(this.$11),
          ackReceived: b,
          duration: k - c,
          total_duration: k - d,
          hostname: this.$5,
          attemptNumber: this.$13,
          successTotal: this.$14,
          failTotal: this.$15,
          subscribedTopics: e,
          publishes: f,
          errorCode: i,
          errorMessage: j,
          osConnectivity: g,
          messageSizeBytes: h,
          disconnectCount: this.$23,
        });
        a && (this.$13 = 0);
      };
      e.$39 = function (a, b, c, d, e, f, g, h) {
        var i = a.mqttError;
        h = h != null ? i.errorMessage + " - " + h : i.errorMessage;
        this.$10.debugTrace("connect", "Connect failed " + h);
        this.$10.bumpCounter("protocol.onconnectfailure");
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onconnectfailure");
        this.$27.onConnectFailure();
        this.$45(!1, a.connAck !== -1, b, c, d, e, f, g, i.errorCode, h);
        if (a.connAck != null) {
          this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
          if (a.connAck === s) {
            this.$47(p);
            return;
          }
        }
        this.$47();
      };
      e.$41 = function (a, b) {
        var c = this;
        this.$10.bumpCounter("protocol.onconnection");
        this.$10.debugTrace("Connect", "Socket established");
        this.$27.onConnected();
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onconnection");
        b.forEach(function (a) {
          c.$27.onSubscribe(a);
        });
        a.forEach(function (a) {
          c.$27.onPublish(a.topic);
        });
        this.$34("TransportConnected");
      };
      e.$40 = function (a, b, c, d, e, f) {
        this.$10.bumpCounter("protocol.onconnectsuccess"),
          this.$10.debugTrace("connect", "Connect success"),
          this.$6.getIsGuestAuthStringPresent() &&
            this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
          this.$27.onConnectSuccess(),
          (this.$26 = !0),
          this.$34("Connected"),
          this.$45(!0, !0, a, b, c, d, e, f),
          this.$49(c),
          (this.$16 = Date.now());
      };
      e.$42 = function (a, b) {
        this.$10.bumpCounter("protocol.onconnectionlost");
        this.$23++;
        if (a.errorCode) {
          b = b != null ? a.errorMessage + " - " + b : a.errorMessage;
          this.$10.eventLogDisconnect({
            sessionID: this.$9,
            errorCode: a.errorCode,
            errorMessage: b,
            duration: Date.now() - this.$16,
            disconnectCount: this.$23,
          });
        }
        this.$10.debugTrace("connect", "connection lost");
        this.$27.onConnectionLost();
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onconnectionlost");
        this.$47();
      };
      e.$43 = function (a, b, c) {
        this.$10.bumpCounter("protocol.onmessagearrived");
        this.$6.getIsGuestAuthStringPresent() &&
          this.$10.bumpCounter("guestAuthentication.onmessagearrived");
        this.$10.debugTrace("onMessageArrived", "Message received on " + a);
        this.$27.onMessage(a);
        try {
          this.$3(a, b, c);
        } catch (b) {
          this.$10.logError(b, "Listener threw error"),
            this.$10.bumpCounter("listener_error." + a);
        }
      };
      e.$44 = function (a, b) {
        this.$10.bumpCounter("protocol.onmessagedelivered");
        a = b != null ? b : "null";
        this.$10.debugTrace(
          "onMessageDelivered",
          "Delivered Message {ID: " + a + "}"
        );
        if (b == null) return;
        a = this.$24.get(b);
        if (a == null) {
          this.$10.bumpCounter("protocol.message_with_unknown_id");
          return;
        }
        this.$24["delete"](b);
        (b = a.listener) == null
          ? void 0
          : b.onEvent(d("MqttPublishListener").MqttPublishEvent.ACKED);
        a.resolve();
        this.$10.bumpCounter("publish.ack_received");
      };
      e.$30 = function (a) {
        this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a),
          this.$24.forEach(function (b, e, f) {
            (e = b.listener) == null
              ? void 0
              : e.onEvent(d("MqttPublishListener").MqttPublishEvent.NOT_ACKED);
            b.reject(c("err")(a));
          }),
          this.$24.clear();
      };
      e.$49 = function (a) {
        var b = this,
          c = new Set(a);
        c.forEach(function (a) {
          b.$17.has(a) || b.unsubscribe(a);
        });
        a = new Set(this.$17);
        a.forEach(function (a) {
          c.has(a) || b.subscribe(a);
        });
      };
      e.$46 = function (a, b) {
        try {
          this.$10.bumpCounter("js_error_in_init");
          this.$10.bumpCounter(b + ".error");
          this.$25 = !0;
          var c = a ? a.message : "error";
          this.$10.debugTrace("onError", b + ": " + c);
          this.$2(a);
        } catch (a) {
          this.$10.bumpCounter("js_error_in_error_logging"),
            this.$10.logError(a, "JS error while trying to log previous error");
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "isFastRefreshEnabledForCurrentDomain",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "MqttChannel",
  [
    "ChannelClientID",
    "IrisSubscribeChecker",
    "MqttAnalyticsHook",
    "MqttConnection",
    "MqttEnv",
    "MqttPublishListener",
    "MqttPublishTimeoutConfig",
    "MqttTypes",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "Run",
    "err",
    "isFastRefreshEnabledForCurrentDomain",
    "promiseDone",
    "qex",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
    a = (function () {
      function a(a) {
        var b = this,
          e = a.endpoint,
          f = a.pollingEndpoint,
          g = a.userFbid,
          h = a.appId,
          i = a.initialSubscribedTopics,
          j = a.capabilities,
          k = a.clientCapabilities,
          l = a.chatVisibility;
        l = l === void 0 ? !0 : l;
        var m = a.guestAuthString;
        m = m === void 0 ? null : m;
        var n = a.phpOverride;
        n = n === void 0 ? "" : n;
        var o = a.clientType;
        o = o === void 0 ? "websocket" : o;
        var p = a.deviceId;
        p = p === void 0 ? c("ChannelClientID").getID() : p;
        var q = a.pageId;
        q = q === void 0 ? null : q;
        a = a.assetIds;
        a = a === void 0 ? null : a;
        this.$11 = d("MqttEnv").Env.getLoggerInstance();
        this.$11.setAppId(h);
        this.$12 = new (c("MqttUserName"))(g, j, k, p, h, l, m, n, o, q, a);
        this.$1 = e;
        this.$2 = f;
        this.$5 = "Disconnected";
        this.$7 = "LPInactive";
        this.$6 = "Disconnected";
        this.$3 = [];
        this.$4 = new Set();
        this.$8 = new Map();
        this.$9 = new Map();
        this.$10 = new (c("MqttConnection"))();
        this.$13 = null;
        this.$16 = new (c("MqttAnalyticsHook"))();
        this.$15 = new Map();
        this.$14 = [];
        if (
          !d("MqttEnv").Env.isUserLoggedInNow() &&
          !c("isFastRefreshEnabledForCurrentDomain")() &&
          (m == null || m == "")
        ) {
          this.$11.bumpCounter("logged_out_init");
          return;
        }
        this.$10.addHook(this.$16);
        this.$10.addHook(
          new (c("IrisSubscribeChecker"))(function () {
            return b.$4.size > 0;
          })
        );
        this.$17(i);
        this.$18();
      }
      var e = a.prototype;
      e.$17 = function (a) {
        var b = this;
        if (this.$10.isRunning()) {
          this.$19("run", "Connection started calling run again");
          return;
        }
        if (
          d("MqttEnv").Env.genGk(
            d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled
          )
        ) {
          var e = d("MqttEnv").Env.killswitch("MQTT_WS_FORCE_LONG_POLLING");
          if (e) {
            this.$19(
              "MqttChannel",
              "Websocket disabled, will do long polling only"
            );
            return;
          } else if (!c("MqttUtils").hasWSSupport()) {
            this.$19(
              "MqttChannel",
              "Websocket Unavailable, will do long polling only"
            );
            this.$11.bumpCounter("ws_unavailable_polling");
            return;
          }
        }
        this.$10.run({
          onStateChange: function (a) {
            b.$20(a);
          },
          onJSError: function (a) {
            b.$21(a);
          },
          onMessageReceived: function (a, c, d) {
            b.$22(a, c, d);
          },
          endpoint: this.$1,
          mqttUserName: this.$12,
          subscribedTopics: a,
          extraConnectMessageProvider: function () {
            return b.$23();
          },
        });
        this.$24();
      };
      e.$24 = function () {
        var a = this;
        d("Run").onUnload(function () {
          a.$10.onWindowUnload(),
            a.$25(d("MqttTypes").MqttErrors.BROWSER_CLOSE);
        });
      };
      e.shutdown = function () {
        this.$25(d("MqttTypes").MqttErrors.APP_DISCONNECT);
      };
      e.$25 = function (a) {
        this.$10 && this.$10.shutdown(a),
          this.$13 && this.$13.shutdown(),
          this.$16.onTabClose();
      };
      e.publish = function (a, b, e) {
        e === void 0 && (e = { qos: 1, skipBuffer: !1 });
        var f;
        e.qos === 0
          ? (f = this.$26(a, b, e.listener))
          : (f = this.$27(a, b, e));
        c("MqttUtils").promiseDone(
          f,
          function () {},
          function (a) {
            (a = e.listener) == null
              ? void 0
              : a.onEvent(
                  d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR
                );
          }
        );
        return f;
      };
      e.$26 = function (a, b, c) {
        return this.$28(a, b, 0, c, 1, null);
      };
      e.$27 = function (a, c, e) {
        var f = { resolve: function () {}, reject: function (a) {} },
          g = new (b("Promise"))(function (a, b) {
            (f.resolve = a), (f.reject = b);
          }),
          h = d("MqttEnv").Env.random();
        a = {
          topic: a,
          payload: c,
          options: e,
          ack: f,
          publishToken: h,
          timeoutId: null,
          attempt: 0,
          startTime: Date.now(),
        };
        if (e.skipBuffer)
          if (this.$10.connectionState() === "Connecting") {
            this.$14.push(a);
            (c = e.listener) == null
              ? void 0
              : c.onEvent(d("MqttPublishListener").MqttPublishEvent.QUEUED);
          } else this.$29(a);
        else {
          a.timeoutId = this.$30(h);
          this.$15.set(h, a);
          (c = e.listener) == null
            ? void 0
            : c.onEvent(d("MqttPublishListener").MqttPublishEvent.QUEUED);
          this.$31(a);
        }
        return g;
      };
      e.$29 = function (a) {
        (a.attempt += 1),
          c("MqttUtils").promiseDone(
            this.$28(
              a.topic,
              a.payload,
              a.options.qos,
              a.options.listener,
              a.attempt,
              a.startTime
            ),
            function () {
              a.ack.resolve();
            },
            function (b) {
              a.ack.reject(b);
            }
          );
      };
      e.$31 = function (a) {
        var b = this;
        a.attempt += 1;
        c("MqttUtils").promiseDone(
          this.$28(
            a.topic,
            a.payload,
            a.options.qos,
            a.options.listener,
            a.attempt,
            a.startTime
          ),
          function () {
            return b.$32(a);
          },
          function (a) {}
        );
      };
      e.$28 = function (a, b, e, f, g, h) {
        var i = this,
          j,
          k,
          l = this.getConnectionState(),
          m = Date.now();
        !this.$10.canPublish() && this.$13 && this.$13.canPublish()
          ? ((j = this.$13.publish(a, b, e)),
            (k = "lp"),
            f != null &&
              (j = j.then(function () {
                return f.onEvent(
                  d("MqttPublishListener").MqttPublishEvent.SENT
                );
              })),
            this.$11.bumpCounter("try_publish_lp"))
          : ((j = this.$10.publish(a, b, e, f)),
            (k = "ws"),
            this.$11.bumpCounter("try_publish_ws"));
        c("promiseDone")(
          j,
          function () {
            i.$11.eventLogOutgoingPublish({
              sessionID: i.$10.getSessionId(),
              topic: a,
              qos: e,
              payloadSizeBytes: b.length * 2,
              success: !0,
              protocol: k,
              errorMessage: null,
              connectionState: l,
              thisAttemptStartTime: m,
              firstAttemptStartTime: h,
              attempt: g,
              disconnectCount: i.$10.getDisconnectCount(),
            });
          },
          function (c) {
            i.$11.eventLogOutgoingPublish({
              sessionID: i.$10.getSessionId(),
              topic: a,
              qos: e,
              payloadSizeBytes: b.length * 2,
              success: !1,
              protocol: k,
              errorMessage: c != null ? c.toString() : null,
              connectionState: l,
              thisAttemptStartTime: m,
              firstAttemptStartTime: h,
              attempt: g,
              disconnectCount: i.$10.getDisconnectCount(),
            });
          }
        );
        return j;
      };
      e.subscribe = function (a, b) {
        var c = this;
        this.$10.subscribe(a);
        var d = this.$8.get(a);
        !d ? ((d = [b]), this.$8.set(a, d)) : d.push(b);
        return function () {
          var d = c.$8.get(a) || [];
          d = d.filter(function (a) {
            return a !== b;
          });
          c.$8.set(a, d);
          d.length === 0 && c.unsubscribeAll(a);
        };
      };
      e.subscribeBinary = function (a, b) {
        var c = this;
        this.$10.subscribe(a);
        var d = this.$9.get(a);
        !d ? ((d = [b]), this.$9.set(a, d)) : d.push(b);
        return function () {
          var d = c.$9.get(a) || [];
          d = d.filter(function (a) {
            return a !== b;
          });
          c.$9.set(a, d);
          d.length === 0 && c.unsubscribeAll(a);
        };
      };
      e.subscribeChannelEvents = function (a) {
        this.$3.push(a);
      };
      e.unsubscribeChannelEvents = function (a) {
        a = this.$3.indexOf(a);
        a > -1 && this.$3.splice(a, 1);
      };
      e.registerExtraConnectPayloadProvider = function (a) {
        var b = this;
        this.$19("MqttChannel", "registerExtraConnectPayloadProvider called");
        this.$4.add(a);
        if (this.$10.isRunning()) {
          a = a.getPublishMessages();
          a.forEach(function (a) {
            b.publish(a.topic, a.payload, { qos: a.qos, skipBuffer: !0 });
          });
        }
      };
      e.unregisterExtraConnectPayloadProvider = function (a) {
        this.$4["delete"](a);
      };
      e.unsubscribeAll = function (a) {
        this.$10.unsubscribe(a), this.$8["delete"](a), this.$9["delete"](a);
      };
      e.getConnectionState = function () {
        return this.$5;
      };
      e.getLongPollingStatus = function () {
        return this.$7;
      };
      e.getEndpoint = function () {
        return this.$1;
      };
      e.addHook = function (a) {
        this.$10.addHook(a);
      };
      e.removeHook = function (a) {
        this.$10.removeHook(a);
      };
      e.testOnlyMessageReceived = function (a, b) {
        this.$22(a, b, -1);
      };
      e.$33 = function (a) {
        var b = this.$15.get(a);
        b != null &&
          b.timeoutId != null &&
          d("MqttEnv").Env.clearTimeout(b.timeoutId);
        this.$15["delete"](a);
      };
      e.$30 = function (a) {
        var b,
          e = this;
        b = (b = c("qex")._("37")) != null ? b : h;
        return d("MqttEnv").Env.setTimeout(
          function (a) {
            var b = e.$15.get(a);
            if (!b) return;
            var d = b.topic;
            e.$11.bumpCounter("publish_timeout." + d);
            e.$11.debugTrace(
              "publish_timeout",
              "Timeout publishing topic: " + d + " publishToken: " + a
            );
            e.$33(a);
            b.ack.reject(c("err")("Publish Timed Out"));
          },
          b,
          a
        );
      };
      e.$32 = function (a) {
        var b = a.publishToken,
          c = this.$15.get(b);
        if (!c) return;
        this.$33(b);
        a.ack.resolve();
        this.$11.debugTrace(
          "publish_success",
          "Topic: " + a.topic + " publishToken: " + a.publishToken
        );
        this.$11.bumpCounter("publish_success." + a.topic);
      };
      e.$22 = function (a, b, c) {
        var d = this.$8.get(a);
        this.$11.eventLogIncomingPublish({
          sessionID: this.$10.getSessionId(),
          topic: a,
          connectionState: this.getConnectionState(),
          qos: c,
          payloadSizeBytes: b.payloadString.length * 2,
          disconnectCount: this.$10.getDisconnectCount(),
        });
        if (!d)
          this.$11.debugTrace(
            "_onMessageReceived",
            a + " being dropped, no listeners"
          );
        else
          for (
            var d = d,
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
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
            try {
              g(b.payloadString);
            } catch (a) {
              this.$11.logError(a, "Listener exception"),
                this.$11.bumpCounter("listener_error");
            }
          }
        g = this.$9.get(a);
        this.$11.eventLogIncomingPublish({
          sessionID: this.$10.getSessionId(),
          topic: a,
          connectionState: this.getConnectionState(),
          qos: c,
          payloadSizeBytes: b.payloadBytes.length,
          disconnectCount: this.$10.getDisconnectCount(),
        });
        if (!g)
          this.$11.debugTrace(
            "_onMessageReceived",
            a + " being dropped, no binary listeners"
          );
        else
          for (
            f = g,
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
            a = c;
            try {
              a(b.payloadBytes);
            } catch (a) {
              this.$11.logError(a, "Binary Listener exception"),
                this.$11.bumpCounter("listener_error");
            }
          }
      };
      e.$21 = function (a) {
        if (
          d("MqttEnv").Env.genGk(
            d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled
          )
        ) {
          a.isRecoverable
            ? this.$11.bumpCounter("recoverable_error_skipped")
            : this.$11.bumpCounter("unrecoverable_error_skipped");
          return;
        }
        a.isRecoverable
          ? this.$11.bumpCounter("recoverable_error_not_skipped")
          : this.$11.bumpCounter("unrecoverable_error_not_skipped");
        this.$34(a);
      };
      e.$35 = function (a) {
        this.$34(a);
      };
      e.$34 = function (a) {
        for (
          var b = this.$3,
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
          e.onJSError && e.onJSError(a);
        }
      };
      e.$36 = function () {
        var a = this;
        this.$14.forEach(function (b) {
          a.$29(b), a.$11.bumpCounter("publish_from_temp_buffer." + b.topic);
        });
        this.$14 = [];
        this.$15.forEach(function (b, c, d) {
          a.$31(b), a.$11.bumpCounter("publish_from_buffer." + b.topic);
        });
      };
      e.$20 = function (a) {
        a === "Connecting"
          ? (this.$14.forEach(function (a) {
              a.ack.reject(c("err")("Client Reconnecting - " + a.topic));
            }),
            (this.$14 = []))
          : a === "TransportConnected" && this.$36(),
          this.$19("_changeState", "Connection state = " + a),
          this.$37(a, this.$7);
      };
      e.$38 = function (a, b) {
        this.$13 && this.$13.canPublish() && this.$36(),
          this.$19(
            "_changeLPStatus",
            "LP status = " + a + ", LP Request status = " + b
          ),
          this.$37(this.$6, a);
      };
      e.$37 = function (a, b) {
        var c = this.$10.mqttStateFromConnectionState(a);
        this.$13 && this.$13.canPublish() && (c = "Connected");
        this.$6 = a;
        (c !== this.$5 || b != this.$7) &&
          ((this.$5 = c), (this.$7 = b), this.$39(c));
      };
      e.$39 = function (a) {
        for (
          var b = this.$3,
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
          e.onMQTTStateChanged(a);
        }
      };
      e.$23 = function () {
        var a = this,
          b = [];
        this.$4.forEach(function (c) {
          try {
            c = c.getPublishMessages();
            Array.prototype.push.apply(b, c);
          } catch (b) {
            a.$11.logError(b, "ConnectPayload provider exception"),
              a.$11.bumpCounter("connectPayloadProvider_error");
          }
        });
        return b;
      };
      e.$18 = function () {
        var a = this;
        d("MqttEnv").Env.genGk(
          d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled
        ) &&
          this.$2 &&
          this.$2 != "" &&
          c("requireDeferred")("MqttLongPollingRunner")
            .__setRef("MqttChannel")
            .onReady(function (b) {
              b = new b(
                a.$2,
                a.$12,
                a.$10.hasFatal(),
                a.$10.hasConnectSuccess(),
                function (b, c, d) {
                  return a.$22(b, c, d);
                },
                function () {
                  var b = Array.from(a.$8.keys()),
                    c = Array.from(a.$9.keys());
                  return Array.from(new Set(b.concat(c)));
                },
                function () {
                  return a.$23();
                },
                function (b) {
                  a.$35(b);
                },
                function (b, c) {
                  a.$38(b, c);
                }
              );
              b.start();
              a.$10.addHook(b);
              b.addHook(a.$16);
              a.$13 = b;
              a.$11.debugTrace("MqttChannel", "longPollingRunner loaded");
            });
      };
      e.$19 = function (a, b) {
        this.$11.debugTrace(a, "Mqtt channel: " + b);
      };
      e.setForegroundState = function (a) {
        this.$12 && this.$12.setForegroundState(a);
      };
      e.setChatVisibility = function (a) {
        this.$12 && this.$12.setChatVisibility(a);
      };
      e.getEndpointCapabilities = function () {
        return this.$12.getEndpointCapabilities();
      };
      e.setEndpointCapabilities = function (a) {
        this.$12.setEndpointCapabilities(a);
      };
      return a;
    })();
    f.exports = a;
  },
  34
);
__d(
  "MqttUnifiedClientConnectFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744057");
    b = d("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MqttUnifiedClientDisconnectFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744058");
    b = d("FalcoLoggerInternal").create("mqtt_unified_client_disconnect", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MqttUnifiedClientIncomingPublishFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744059");
    b = d("FalcoLoggerInternal").create(
      "mqtt_unified_client_incoming_publish",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MqttUnifiedClientOutgoingPublishFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744060");
    b = d("FalcoLoggerInternal").create(
      "mqtt_unified_client_outgoing_publish",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MqttWsClientTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig");
  },
  null
);
__d(
  "MqttLogger",
  [
    "ChannelClientID",
    "FBLogger",
    "Log",
    "LogHistory",
    "MqttEnv",
    "MqttGlobalStreamCounter",
    "MqttUnifiedClientConnectFalcoEvent",
    "MqttUnifiedClientDisconnectFalcoEvent",
    "MqttUnifiedClientIncomingPublishFalcoEvent",
    "MqttUnifiedClientOutgoingPublishFalcoEvent",
    "MqttWsClientTypedLoggerLite",
    "NetworkStatus",
    "ODS",
    "Random",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt_client",
      i = 100,
      j = "WEBSOCKET",
      k = typeof window !== "undefined" ? window : self,
      l = null,
      m = {
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        CLIENT_ERROR: "mqtt_client_error",
        PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
        SOCKET_DISCONNECT: "mqtt_protocol_error",
      },
      n = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        OUTGOING_PUBLISH: "outgoing_publish",
        INCOMING_PUBLISH: "incoming_publish",
      };
    a = (function () {
      a.getInstance = function () {
        l || (l = new a());
        return l;
      };
      function a() {
        (this.$1 = d("LogHistory").getInstance(h)),
          (this.$2 = 0),
          (this.$3 = c("gkx")("778292")),
          (this.$4 = Date.now()),
          (this.$5 = c("ChannelClientID").getID()),
          this.$7(),
          (this.$6 = d("MqttGlobalStreamCounter").getInstance()),
          this.$6.isEnabled() || (this.$6 = null);
      }
      var b = a.prototype;
      b.setAppId = function (a) {
        this.$2 === 0 && (this.$2 = a);
      };
      b.eventLogConnect = function (a) {
        var b = a.sessionID,
          d = a.connectionStatus,
          e = a.connectionState,
          f = a.ackReceived,
          g = a.duration,
          h = a.total_duration,
          i = a.hostname,
          k = a.attemptNumber,
          l = a.successTotal,
          o = a.failTotal;
        a.subscribedTopics;
        a.publishes;
        var p = a.osConnectivity;
        a.errorCode;
        var q = a.errorMessage,
          r = a.messageSizeBytes;
        a = a.disconnectCount;
        d = d ? "success" : "failed";
        this.bumpCounter(m.CONNECT + "." + d);
        d = l / (l + o);
        l = p && this.getBrowserConnectivity();
        var s = {
          event_type: n.CONNECT,
          acked: f,
          attempt_number: k.toString(),
          connection_state: e,
          client_type: j,
          duration: g.toString(),
          total_duration: h.toString(),
          error: q,
          session_id: b.toString(),
          os_connectivity: l,
          payload_size: r == null ? void 0 : r.toString(),
          extra_data: {
            device_id: this.$5,
            connect_success_rate: d.toString(),
            hostname: i,
          },
          ws_count:
            (o = this.$6) == null
              ? void 0
              : o.getGlobalState().totalConnectionStreams.toString(),
          disconnect_count: a.toString(),
        };
        this.$8(function () {
          c("MqttUnifiedClientConnectFalcoEvent").log(function () {
            return s;
          });
        });
      };
      b.eventLogPull = function (a) {
        var b = a.pullEventName,
          c = a.sessionID,
          e = a.status,
          f = a.duration,
          g = a.hostname;
        a = a.errorMessage;
        c = {
          device_id: this.$5,
          session_id: c,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: k.location.hostname,
          connection_status: e,
          duration: f,
          hostname: g,
          error_message: a,
        };
        this.$9(b, c);
      };
      b.eventLogPullFinish = function (a) {
        var b = a.pullEventName,
          c = a.sessionID,
          e = a.duration,
          f = a.errorMessage,
          g = a.publishReceived;
        a = a.publishSent;
        c = {
          device_id: this.$5,
          session_id: c,
          logged_in: d("MqttEnv").Env.isUserLoggedInNow(),
          href: k.location.hostname,
          duration: e,
          error_message: f,
          publish_received: g,
          publish_sent: a,
        };
        this.$9(b, c);
      };
      b.eventLogDisconnect = function (a) {
        var b = a.sessionID;
        a.errorCode;
        var d = a.errorMessage,
          e = a.duration;
        a = a.disconnectCount;
        this.bumpCounter(m.DISCONNECT);
        var f = {
          event_type: n.DISCONNECT,
          connection_state: "Disconnected",
          client_type: j,
          duration: e.toString(),
          error: d,
          session_id: b.toString(),
          os_connectivity: this.getBrowserConnectivity(),
          extra_data: { device_id: this.$5 },
          ws_count:
            (e = this.$6) == null
              ? void 0
              : e.getGlobalState().totalConnectionStreams.toString(),
          disconnect_count: a.toString(),
        };
        this.$8(function () {
          c("MqttUnifiedClientDisconnectFalcoEvent").log(function () {
            return f;
          });
        });
      };
      b.eventLogOutgoingPublish = function (a) {
        var b = a.sessionID,
          d = a.topic,
          e = a.qos,
          f = a.payloadSizeBytes,
          g = a.success,
          h = a.protocol,
          i = a.errorMessage,
          k = a.connectionState,
          l = a.thisAttemptStartTime,
          o = a.firstAttemptStartTime,
          p = a.attempt;
        a = a.disconnectCount;
        this.bumpCounter(m.PUBLISH + "." + d);
        var q = Date.now(),
          r = {
            event_type: n.OUTGOING_PUBLISH,
            session_id: b.toString(),
            topic: d,
            client_type: j,
            connection_state: k,
            qos: e.toString(),
            acked: e === 1 ? g : null,
            duration: (q - l).toString(),
            total_duration: o != null ? (q - o).toString() : null,
            error: i,
            payload_size: f.toString(),
            attempt_number: p.toString(),
            os_connectivity: this.getBrowserConnectivity(),
            extra_data: { device_id: this.$5, protocol: h },
            disconnect_count: a.toString(),
          };
        this.$8(function () {
          c("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function () {
            return r;
          });
        });
      };
      b.eventLogIncomingPublish = function (a) {
        var b = a.sessionID,
          d = a.topic,
          e = a.connectionState,
          f = a.qos,
          g = a.payloadSizeBytes;
        a = a.disconnectCount;
        var h = {
          event_type: n.INCOMING_PUBLISH,
          session_id: b.toString(),
          topic: d,
          client_type: j,
          connection_state: e,
          qos: f.toString(),
          payload_size: g.toString(),
          os_connectivity: this.getBrowserConnectivity(),
          extra_data: { device_id: this.$5 },
          disconnect_count: a.toString(),
        };
        b = d == "/webrtc" || d == "/rtc_multi";
        this.$10(
          function () {
            c("MqttUnifiedClientIncomingPublishFalcoEvent").log(function () {
              return h;
            });
          },
          50,
          b
        );
      };
      b.logError = function (a, b) {
        var e = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c("FBLogger")(h).catching(a).mustfix(b);
          } catch (a) {}
        });
      };
      b.logErrorWarn = function (a, b) {
        var e = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c("FBLogger")(h).catching(a).warn(b);
          } catch (a) {}
        });
      };
      b.logWarn = function (a, b) {
        var c = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c.$1.warn(a, b);
          } catch (a) {}
        });
      };
      b.debugTrace = function (a, b) {
        var c = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          try {
            c.$1.debug(a, b);
          } catch (a) {}
        });
      };
      b.bumpCounter = function (a) {
        var b = this;
        if (!d("Random").coinflip(i)) return;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          b.$2 !== 0 &&
            d("ODS").bumpEntityKey(2966, "mqtt_ws_client", b.$2 + "." + a, i),
            d("ODS").bumpEntityKey(2966, "mqtt_ws_client", a, i);
        });
      };
      b.$9 = function (a, b, e) {
        var f = this;
        d("MqttEnv").Env.scheduleLoggingCallback(function () {
          b.event_type = a;
          b.app_id = f.$2;
          b.online = f.$11();
          var d = JSON.stringify(b);
          f.$1.log(a, d, { weight: e });
          a !== m.DISCONNECT && c("MqttWsClientTypedLoggerLite").log(b);
        });
      };
      b.$10 = function (a, b, e) {
        c("gkx")("762") && b !== 0
          ? (e = e || d("Random").coinflip(b))
          : (e = !0);
        e && d("MqttEnv").Env.scheduleCallback(a);
      };
      b.$8 = function (a) {
        this.$10(a, 0, !1);
      };
      b.$11 = function () {
        return k.navigator && k.navigator.onLine !== void 0
          ? k.navigator.onLine
          : !1;
      };
      b.getBrowserConnectivity = function () {
        return c("NetworkStatus").isOnline();
      };
      b.$7 = function () {
        var a = this;
        if (k.navigator && k.navigator.onLine !== void 0) {
          var b = function (b) {
            b = b.online;
            b || a.bumpCounter("browser_disconnect");
          };
          c("NetworkStatus").onChange(b);
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttEnvInitializer",
  [
    "CurrentUser",
    "MqttEnv",
    "MqttLogger",
    "Random",
    "WebStorage",
    "clearTimeout",
    "gkx",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt:",
      i = {
        genGk: function (a) {
          switch (a) {
            case d("MqttEnv").MqttGkNames.mqtt_waterfall_log_client_sampling:
              return c("gkx")("832242");
            case d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled:
              return !0;
            case d("MqttEnv").MqttGkNames.mqtt_lp_use_fetch:
              return c("gkx")("945829");
            case d("MqttEnv").MqttGkNames.mqtt_fast_lp:
              return c("gkx")("1001007");
            case d("MqttEnv").MqttGkNames.mqtt_lp_no_delay:
              return c("gkx")("1066746");
            case d("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling:
              return c("gkx")("968609");
            case d("MqttEnv").MqttGkNames.mqttweb_global_connection_counter:
              return c("gkx")("2795");
            default:
              c("MqttLogger")
                .getInstance()
                .logError(new Error("unknown gk"), "Unknown GK value " + a);
              return !1;
          }
        },
        configRead: function (a, b) {
          var d = c("WebStorage").getLocalStorage();
          if (d) {
            d = d.getItem(h + a);
            if (d != null) return d;
          }
          return b;
        },
        configWrite: function (a, b) {
          var d = c("WebStorage").getLocalStorage();
          d &&
            (b == null
              ? d.removeItem(h + a)
              : c("WebStorage").setItemGuarded(d, h + a, b));
        },
        initialize: function () {
          d("MqttEnv").Env.initialize(
            c("Random").random,
            c("CurrentUser").isLoggedInNow,
            c("clearTimeout"),
            c("setTimeoutAcrossTransitions"),
            function () {
              return c("MqttLogger").getInstance();
            },
            i.genGk,
            null,
            null,
            null,
            i.configRead,
            i.configWrite
          );
        },
      };
    f.exports = i;
  },
  34
);
__d(
  "FBMqttChannel",
  ["MqttChannel", "MqttEnvInitializer", "MqttWebConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("MqttEnvInitializer").initialize();
    a = new (c("MqttChannel"))({
      endpoint: c("MqttWebConfig").endpoint,
      pollingEndpoint: c("MqttWebConfig").pollingEndpoint,
      userFbid: c("MqttWebConfig").fbid,
      appId: c("MqttWebConfig").appID,
      initialSubscribedTopics: c("MqttWebConfig").subscribedTopics,
      capabilities: c("MqttWebConfig").capabilities,
      clientCapabilities: c("MqttWebConfig").clientCapabilities,
      chatVisibility: !1,
      phpOverride: c("MqttWebConfig").hostNameOverride,
    });
    g["default"] = a;
  },
  98
);
__d(
  "RtiRequestStreamE2eClientBatchFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("819");
    b = d("FalcoLoggerInternal").create(
      "rti_request_stream_e2e_client_batch",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "RtiRequestStreamE2eClientFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1857112");
    b = d("FalcoLoggerInternal").create("rti_request_stream_e2e_client", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "RequestStreamE2ELogger",
  [
    "ConstUriUtils",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "RtiRequestStreamE2eClientBatchFalcoEvent",
    "RtiRequestStreamE2eClientFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [
        "FBGQLS:COMMENT_CREATE_SUBSCRIBE",
        "FBGQLS:COMMENT_LIKE_SUBSCRIBE",
        "FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE",
        "FBGQLS:FEEDBACK_TYPING_SUBSCRIBE",
      ],
      i = 0;
    function j() {
      var a = Date.now();
      i >= a ? (i += 1) : (i = a);
      return i.toString();
    }
    var k = (function () {
      function a(a, b, c, e, f, g, h, i, j, k) {
        this.$10 = [];
        this.$11 = !1;
        this.$1 = a;
        this.$2 = b;
        this.$3 = c;
        this.$4 = e;
        this.$5 = f;
        this.$6 = g;
        this.$7 = h;
        this.$8 = i;
        this.$9 = j;
        this.$12 = (a = k) != null ? a : !1;
        b = d("ConstUriUtils").getUri(window.location.href);
        b && (this.$13 = b.getDomain());
      }
      var b = a.prototype;
      b.logE2EEvent = function (a, b, c, d, e, f) {
        c === void 0 && (c = null);
        d === void 0 && (d = null);
        e === void 0 && (e = null);
        f === void 0 && (f = null);
        if (this.$3 === "Falco") return;
        e = {
          request_id: this.$1,
          resume_id: "0",
          retry_id: e,
          transport: this.$2,
          method: this.$3,
          use_case: this.$4,
          request_log_context: this.$5,
          force_log_context: this.$6,
          e2e_sample_rate: this.$7,
          message_type: a,
          event: b,
          timestamp_ms: j(),
          aux_id: d,
          additional_data: c,
          dgw_stream_group_logging_id: this.$8,
          dgw_count_prior_streams_in_group: this.$9,
          domain: this.$13,
          df_trace_id: f,
        };
        this.$14(e);
      };
      b.$14 = function (a) {
        if (!this.$12) {
          c("RtiRequestStreamE2eClientFalcoEvent").log(function () {
            return a;
          });
          return;
        }
        this.$10.push(a);
        if (
          this.$11 ||
          a.event == c("RequestStreamE2EClientLoggerEvent").FAILURE ||
          a.message_type ==
            c("RequestStreamE2EClientLoggerMessageType").RESPONSE
        ) {
          var b = { events: this.$10 };
          c("RtiRequestStreamE2eClientBatchFalcoEvent").log(function () {
            return b;
          });
          this.$10 = [];
          this.$11 = !0;
        }
      };
      b.getRequestId = function () {
        return this.$1;
      };
      return a;
    })();
    function a(a, b, c) {
      if (a == null || a.method == null) return null;
      var d = !1;
      h.includes(a.method) && (d = !0);
      if (b == null || b.length == 0) return null;
      b = JSON.parse(b);
      return b.requestId == null
        ? null
        : new k(
            b.requestId,
            c,
            a.method,
            l(a.method, a),
            b.requestLogContext,
            b.forceLogContext,
            b.sampleRate,
            b.dgwStreamGroupLoggingId,
            b.dgwCountPriorStreamsInGroup,
            d
          );
    }
    function l(a, b) {
      if (a === "FBLQ" && b.config_id) return b.config_id;
      if (a === "SKY") {
        if (b.topic) {
          var c = b.topic.lastIndexOf("/");
          return c > 0 ? b.topic.substr(0, c) : b.topic;
        }
        return;
      }
      return a;
    }
    function b(a, b, d, e, f, g) {
      f === void 0 && (f = null);
      g === void 0 && (g = null);
      if (a == null || a.requestId == null || a.clientLoggingDisabled != null)
        return;
      var h = {
        request_id: a.requestId,
        resume_id: "0",
        transport: b,
        e2e_sample_rate: a.sampleRate,
        message_type: d,
        event: e,
        timestamp_ms: j(),
        aux_id: a.auxId,
        additional_data: f,
        df_trace_id: g,
      };
      c("RtiRequestStreamE2eClientFalcoEvent").log(function () {
        return h;
      });
    }
    g.RequestStreamE2ELogger = k;
    g.createStreamLogger = a;
    g.logRequestStreamE2EEventStatic = b;
  },
  98
);
__d(
  "RequestStreamTransport",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "WEB_BR_MQTT",
      "WEB_RS_MQTT",
      "WEB_RS_STARGATE",
    ]);
    f.RequestStreamTransport = a;
  },
  66
);
__d(
  "BladeRunnerSocket",
  [
    "BladeRunnerEventHandler",
    "BladeRunnerLogger",
    "BladeRunnerStreamStatus",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "CurrentUser",
    "FBMqttChannel",
    "MqttPublishListener",
    "Promise",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "RequestStreamE2ELogger",
    "RequestStreamTransport",
    "justknobx",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "Connected",
      i = "Disconnected",
      j = "/br_sr",
      k = "/sr_res",
      l = null;
    function m(a) {
      var b;
      switch (a.type) {
        case d("BladeRunnerTypes").StreamFrameType.REQUEST:
          return (b = a.request) == null ? void 0 : b.getInstrumentationData();
        case d("BladeRunnerTypes").StreamFrameType.DATA:
          return (b = a.data) == null ? void 0 : b.getInstrumentationData();
      }
      return null;
    }
    function n(a) {
      switch (a.type) {
        case d("BladeRunnerTypes").StreamFrameType.REQUEST:
          return c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM;
        case d("BladeRunnerTypes").StreamFrameType.DATA:
          return c("RequestStreamE2EClientLoggerMessageType").AMENDMENT;
      }
      return null;
    }
    function o(a) {
      if (a === null) return null;
      switch (a) {
        case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
          return "Accepted";
        case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
          return "Rejected";
        case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
          return "Started";
        case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
          return "Stopped";
        case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
          return "Closed";
      }
      return null;
    }
    function p(a) {
      var b = {};
      a == null
        ? void 0
        : (a = a.frames) == null
        ? void 0
        : a.forEach(function (a) {
            if (
              a.type === d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
            ) {
              a = (a = a.statusUpdate) == null ? void 0 : a.status;
              a = o(a);
              a !== null && (b.flow_status = a);
            }
          });
      return b;
    }
    function q(a, b) {
      var c;
      switch (a.type) {
        case d("BladeRunnerTypes").StreamFrameType.REQUEST:
          b.data_base64_size =
            (c = a.request) == null
              ? void 0
              : (c = c.payload) == null
              ? void 0
              : (c = c.length) == null
              ? void 0
              : c.toString();
          break;
        case d("BladeRunnerTypes").StreamFrameType.DATA:
          b.data_base64_size =
            (c = a.data) == null
              ? void 0
              : (b = c.rawDataSize()) == null
              ? void 0
              : b.toString();
          break;
      }
      return null;
    }
    function r(a, b, e) {
      var f = m(a);
      if (f == null) return;
      var g = n(a);
      if (g == null) return;
      var h = null;
      switch (b) {
        case d("MqttPublishListener").MqttPublishEvent.SENT:
          h = c("RequestStreamE2EClientLoggerEvent").SENT;
          break;
        case d("MqttPublishListener").MqttPublishEvent.ACKED:
          h = c("RequestStreamE2EClientLoggerEvent").PUBACK;
          break;
        case d("MqttPublishListener").MqttPublishEvent.NOT_ACKED:
        case d("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED:
        case d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR:
          h = c("RequestStreamE2EClientLoggerEvent").FAILURE;
          e.reason == null && (e.reason = b);
          break;
      }
      if (h == null) return;
      q(a, e);
      if (
        ((b = a.request) == null ? void 0 : b.e2eLogger) != null &&
        f.clientLoggingDisabled == null
      ) {
        (b = a.request) == null
          ? void 0
          : b.e2eLogger.logE2EEvent(g, h, e, f.auxId);
      } else
        d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(
          f,
          d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT,
          g,
          h,
          e
        );
    }
    a = (function () {
      function a(a) {
        (this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = null),
          (this.$5 = 0),
          (this.$6 = new Map()),
          (this.$7 = a != null ? a : c("FBMqttChannel")),
          (this.$8 = new Map()),
          c("BladeRunnerLogger").setClientSessionId(c("uuid")()),
          this.$9();
      }
      a.get = function () {
        l == null && (l = new a(c("FBMqttChannel")));
        return l;
      };
      var e = a.prototype;
      e.sendNewStreamRequest = function (b, d) {
        d = new (c("BladeRunnerEventHandler"))(b, d, this);
        var e = b.getRequest();
        this.$6.set(e.streamId, d);
        if (!this.$10()) {
          this.$11(d, e.streamId);
          return;
        }
        this.getStreamCount() <= a.maxStreamCount
          ? this.$12(e)
          : (c("BladeRunnerLogger").bumpCounter(
              "socket_request_throttled_max_streams"
            ),
            c("BladeRunnerLogger").warn(
              "Maximum stream count reached, will not send request: " +
                JSON.stringify(b.getRequest().getHeaders())
            ),
            this.$11(d, e.streamId));
      };
      e.sendRetryStreamRequest = function (a) {
        this.$12(a.getRequest());
      };
      e.sendCancel = function (a) {
        c("BladeRunnerLogger").bumpCounter("socket_send_cancel");
        var b = new (d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
        b.streamId = a.streamId;
        b.status = d("BladeRunnerStreamStatus").StreamStatus.CLOSED;
        this.$13(b, a);
        this.removeStream(a.streamId);
      };
      e.sendAmendment = function (a, b, e) {
        c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
        var f = new (d("BladeRunnerTypesInternal").GatewayStreamData)();
        f.streamId = a;
        f.setData(b);
        e != null && (f.instrumentationData = e);
        this.$14(f);
      };
      e.sendAmendmentWithAck = function (a, e, f) {
        var g = this;
        c("BladeRunnerLogger").bumpCounter("socket_send_amendment");
        var h = this.$15(),
          i = new (d("BladeRunnerTypesInternal").GatewayStreamData)();
        i.streamId = a;
        i.setData(e);
        i.shouldAck = !0;
        i.dataId = h;
        f != null && (i.instrumentationData = f);
        a = new (b("Promise"))(function (a, b) {
          g.$8.set(h, { resolve: a, reject: b });
        });
        this.$14(i);
        return a;
      };
      e.$14 = function (a) {
        this.$1.push(
          d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(a)
        ),
          this.$16();
      };
      e.sendDataAcks = function (a) {
        c("BladeRunnerLogger").bumpCounter("socket_send_data_ack", a.length),
          this.$17(a);
      };
      e.removeStream = function (a) {
        this.$6["delete"](a);
      };
      e.getStreamCount = function () {
        return this.$6.size;
      };
      e.getNextStreamId = function () {
        this.$5++;
        return this.$5;
      };
      e.onMQTTStateChanged = function (a) {
        this.$16();
        if ((a != i && a != h) || this.$4 == a) return;
        this.$4 = a;
        c("BladeRunnerLogger").info("MQTTStateChanged: " + a);
        a == i
          ? (c("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),
            this.$18())
          : a == h &&
            c("BladeRunnerLogger").bumpCounter("mqtt_state_connected");
      };
      e.$12 = function (a) {
        c("BladeRunnerLogger").bumpCounter("socket_send_request");
        this.$1.push(
          d("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)
        );
        if (!this.$16()) {
          (a = a.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "MQTT Not Connected" }
              );
        }
      };
      e.$13 = function (a, b) {
        this.$1.push(
          d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(
            a
          )
        );
        if (this.$16()) {
          (a = b.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").CANCEL,
                c("RequestStreamE2EClientLoggerEvent").SENT
              );
        }
      };
      e.$17 = function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          this.$1.push(
            d("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(c)
          );
        }
        this.$16();
      };
      e.$19 = function () {
        this.$2++;
        return this.$2;
      };
      e.$15 = function () {
        this.$3++;
        return this.$3;
      };
      e.$16 = function () {
        var a = !1;
        if (this.$7.getConnectionState() === h && this.$1.length > 0)
          try {
            this.$20(this.$1), (a = !0);
          } catch (a) {
          } finally {
            this.$1 = [];
          }
        return a;
      };
      e.$20 = function (a) {
        var b = this,
          e = new (d("BladeRunnerTypesInternal").GatewayStreamBatch)(
            this.$19(),
            a
          ),
          f = e.write();
        if (f.length > this.$21()) {
          var g = Math.floor(a.length / 2);
          if (g === 0) {
            a.forEach(function (a) {
              return r(
                a,
                d("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR,
                { reason: "too long" }
              );
            });
            var h = new Error("Publish is too long: " + f.length);
            h.stack;
            this.$22(e, h, "Publish is too long");
            throw h;
          }
          this.$20(a.slice(0, g));
          this.$20(a.slice(g, a.length));
        } else
          try {
            c("BladeRunnerLogger").info(
              "send message to " + j + " (" + f.length + " bytes)"
            );
            h = { qos: 1, skipBuffer: !1 };
            if (e.isInstrumented()) {
              var i = Date.now();
              h.listener = {
                onEvent: function (b) {
                  var c = (Date.now() - i).toString();
                  a.forEach(function (a) {
                    r(a, b, { latency: c });
                  });
                },
              };
            }
            this.$7.publish(j, f, h)["catch"](function (a) {
              b.$22(e, a, "Failed publishing to MQTT");
            });
            c("BladeRunnerLogger").bumpCounter("mqtt_publish_success");
          } catch (a) {
            this.$22(e, a, "Failed publishing to MQTT");
            throw a;
          }
      };
      e.$9 = function () {
        var a = this;
        c("BladeRunnerLogger").info(
          "Starting socket with endpoint " +
            this.$7.getEndpoint() +
            " useragent " +
            navigator.userAgent
        );
        this.onMQTTStateChanged(this.$7.getConnectionState());
        this.$7.subscribeChannelEvents({
          onMQTTStateChanged: function (b) {
            a.onMQTTStateChanged(b);
          },
          onJSError: function (a) {
            var b =
              a != null && typeof a.isRecoverable === "boolean"
                ? a.isRecoverable
                : !1;
            b
              ? c("BladeRunnerLogger").bumpCounter(
                  "mqtt_channel_recoverable_error"
                )
              : (c("BladeRunnerLogger").warn(
                  "JS error in MQTTChannel: " +
                    (typeof a == "object" && a != null
                      ? a.toString()
                      : "unknown error") +
                    ", " +
                    JSON.stringify(a)
                ),
                c("BladeRunnerLogger").bumpCounter("mqtt_channel_error"));
          },
        });
        this.$7.subscribe(j, function (a) {
          throw new Error("Unexpected response: " + j + " " + a.toString());
        });
        this.$7.subscribe(k, function (b) {
          a.$23(b);
        });
      };
      e.$23 = function (a) {
        a = d("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);
        this.processBatch(a);
      };
      e.$22 = function (a, b, e) {
        for (
          var a = a.getFrames(),
            f = Array.isArray(a),
            g = 0,
            a = f
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= a.length) break;
            h = a[g++];
          } else {
            g = a.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (h.type === d("BladeRunnerTypes").StreamFrameType.REQUEST) {
            var i = h.getRequest(),
              j = this.$6.get(i.streamId);
            j != null &&
              this.$24(
                j,
                i.streamId,
                d("BladeRunnerStreamStatus").StreamStatus.CLOSED,
                !0,
                null
              );
          } else if (h.type === d("BladeRunnerTypes").StreamFrameType.DATA) {
            j = h.getData();
            i = j.dataId;
            if (j.shouldAck != null && j.shouldAck && i != null) {
              h = new (d("BladeRunnerTypesInternal").GatewayStreamDataAck)();
              h.streamId = j.streamId;
              h.dataId = i;
              h.success = !1;
              h.code = d(
                "BladeRunnerTypesInternal"
              ).GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND;
              h.message = e;
              this.$25(h);
            }
          }
        }
        c("BladeRunnerLogger").info("Failed publishing to MQTT: " + b.message);
        c("BladeRunnerLogger").bumpCounter("mqtt_publish_error");
      };
      e.$25 = function (a) {
        var b = this.$8.get(a.dataId);
        b != null &&
          (this.$8["delete"](a.dataId),
          a.success
            ? b.resolve(!0)
            : a.code ===
              d("BladeRunnerTypesInternal").GatewayStreamDataAck
                .ACK_CODE_LANDED_BUT_NOT_ACCEPTED
            ? b.resolve(!1)
            : b.reject(a.message));
      };
      e.processBatch = function (a) {
        try {
          d("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(
            a.getInstrumentationData(),
            d("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT,
            c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
            c("RequestStreamE2EClientLoggerEvent").RECEIVED,
            p(a),
            a.getInstrumentationDataDfTraceId()
          );
          c("BladeRunnerLogger").bumpCounter("socket_process_batch");
          var b = JSON.stringify(a);
          c("BladeRunnerLogger").info(
            "Received batch (" + b.length + " bytes)"
          );
          b = null;
          for (
            var e = a.getFrames(),
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
            var i = h.getStreamId();
            b == null && (b = i);
            if (i != null && b != i)
              throw new Error(
                "Received batch with frames for multiple streams"
              );
            h.type == d("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
              this.$25(h.getDataAck());
          }
          if (b != null) {
            i = this.$6.get(b);
            i != null
              ? i.onProxyResponse(a)
              : c("BladeRunnerLogger").info(
                  "Received batch with frames for unknown stream id: " + b
                );
          } else c("BladeRunnerLogger").info("Received batch with no frames");
        } catch (a) {
          c("BladeRunnerLogger").exception(
            a,
            "Failed processing batch from MQTT"
          );
          c("BladeRunnerLogger").bumpCounter("socket_process_batch_error");
          throw a;
        }
      };
      e.$18 = function () {
        this.$6.forEach(function (a, b, c) {
          a.onDisconnect();
        });
      };
      e.$11 = function (a, b) {
        this.$24(
          a,
          b,
          d("BladeRunnerStreamStatus").StreamStatus.REJECTED,
          !1,
          0
        );
      };
      e.$24 = function (a, b, c, e, f) {
        var g = new (d("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();
        g.streamId = b;
        g.status = c;
        g.shouldRetry = e;
        g.retryDelayMs = f;
        b = new (d("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [
          d("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(
            g
          ),
        ]);
        a.onProxyResponse(b);
      };
      e.$10 = function () {
        if (!c("CurrentUser").isLoggedIn()) {
          c("BladeRunnerLogger").bumpCounter("request_stream_user_logged_out");
          return !1;
        }
        return !0;
      };
      e.$21 = function () {
        var a = 1024 * 1024,
          b = 512 * 1024;
        try {
          var d = c("justknobx")._("317");
          b = d * a;
        } catch (a) {}
        return Math.max(b - 1024, 0);
      };
      return a;
    })();
    a.maxStreamCount = 2e3;
    g["default"] = a;
  },
  98
);
__d(
  "BladeRunnerStream",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var c = a.prototype;
      c.getStreamHandler = function () {
        return this.$1;
      };
      c.cancel = function () {};
      c.amendWithAck = function (a) {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt("return", !1);
                case 1:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      c.amendFireAndForget = function (a) {};
      c.amendWithoutAck = function (a) {};
      c.start = function () {
        return b("Promise").resolve();
      };
      c.isAlive = function () {
        return !1;
      };
      c.canAmend = function () {
        return !1;
      };
      c.getStatus = function () {
        return null;
      };
      c.getStreamId = function () {
        return 0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BladeRunnerStreamState",
  ["BladeRunnerLogger", "BladeRunnerStreamStatus", "BladeRunnerTypes"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this.$1 = a),
          (this.$2 = null),
          (this.$3 = 0),
          (this.$4 = !1),
          (this.$5 = 0),
          (this.$6 = !1);
      }
      var b = a.prototype;
      b.getRequest = function () {
        return this.$1;
      };
      b.updateRetryRequestPayload = function (a) {
        this.$1.updateRetryRequestPayload(a);
      };
      b.isAlive = function () {
        return !(
          this.$2 == d("BladeRunnerStreamStatus").StreamStatus.CLOSED ||
          this.$2 == d("BladeRunnerStreamStatus").StreamStatus.REJECTED
        );
      };
      b.canAmend = function () {
        return (
          this.$2 == d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED ||
          this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STARTED ||
          this.$2 == d("BladeRunnerStreamStatus").StreamStatus.STOPPED
        );
      };
      b.getLastStatus = function () {
        return this.$2;
      };
      b.setLastStatus = function (a) {
        this.$2 = a;
      };
      b.onError = function () {
        this.$3 += 1;
      };
      b.getErrorCount = function () {
        return this.$3;
      };
      b.resetErrors = function () {
        this.$3 = 0;
      };
      b.getRetryRequestScheduled = function () {
        return this.$6;
      };
      b.setRetryRequestScheduled = function (a) {
        this.$6 = a;
      };
      b.witnessFrame = function (a) {
        switch (a.type) {
          case d("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:
            var b = a.getStatusUpdate(),
              c = !0;
            switch (b.status) {
              case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                c = !this.$4;
                this.$4 || (this.$4 = !0);
                break;
              case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                c =
                  this.getLastStatus() !=
                  d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                break;
              case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                c =
                  this.getLastStatus() ==
                  d("BladeRunnerStreamStatus").StreamStatus.STARTED;
                break;
              case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
              case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
              default:
                c = !0;
            }
            this.setLastStatus(b.status);
            return c;
          case d("BladeRunnerTypes").StreamFrameType.REWRITE_REQUEST:
            this.$7(a.getRewriteRequest());
            return !1;
          default:
            return !0;
        }
      };
      b.setRetriesAllowed = function (a) {
        this.$5 = a;
      };
      b.getRetriesAllowed = function () {
        return this.$5;
      };
      b.$7 = function (a) {
        if (!(a.temporary != null || a.temporary == !0)) {
          a.newBody != null && (this.$1.payload = a.newBody);
          a.newExtraHeader != null &&
            ((this.$1.extraHeader = a.newExtraHeader),
            (this.$1.headers = JSON.parse(a.newExtraHeader)));
          if (a.patchExtraHeader != null)
            try {
              var b = JSON.parse(a.patchExtraHeader),
                d =
                  this.$1.extraHeader != null
                    ? JSON.parse(this.$1.extraHeader)
                    : {};
              this.$1.headers == null && (this.$1.headers = {});
              var e = Object.keys(b);
              for (var f = 0; f < e.length; f++) {
                var g = e[f];
                this.$1.headers[g] = b[g];
                d[g] = b[g];
              }
              this.$1.extraHeader = JSON.stringify(d);
            } catch (b) {
              c("BladeRunnerLogger").warn(
                "Failed to patch header: " + a.patchExtraHeader
              );
            }
          a.killBody != null && a.killBody == !0 && (this.$1.payload = null);
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "BladeRunnerSocketStream",
  [
    "BladeRunnerStream",
    "BladeRunnerStreamState",
    "BladeRunnerStreamStatus",
    "Promise",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "regeneratorRuntime",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 4,
      i = { reason: "stream_dead" };
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b, d, e) {
        b = a.call(this, b) || this;
        b.$BladeRunnerSocketStream1 = e;
        b.$BladeRunnerSocketStream2 = new (c("BladeRunnerStreamState"))(d);
        b.$BladeRunnerSocketStream2.setRetriesAllowed(h);
        return b;
      }
      var f = e.prototype;
      f.start = function () {
        var a = this;
        return new (b("Promise"))(function (b) {
          a.send(), b();
        });
      };
      f.send = function () {
        var a,
          b = this.$BladeRunnerSocketStream2.getRequest();
        (a = b.e2eLogger) == null
          ? void 0
          : a.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              c("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {
                data_base64_size:
                  (a = b.payload) == null
                    ? void 0
                    : (b = a.length) == null
                    ? void 0
                    : b.toString(),
              }
            );
        this.$BladeRunnerSocketStream1.sendNewStreamRequest(
          this.$BladeRunnerSocketStream2,
          this.getStreamHandler()
        );
      };
      f.amendWithAck = function (a) {
        var d, e, f, g, h, j, k;
        return b("regeneratorRuntime").async(
          function (l) {
            while (1)
              switch ((l.prev = l.next)) {
                case 0:
                  e = this.$BladeRunnerSocketStream2.getRequest();
                  f = e.getInstrumentationData();
                  f &&
                    ((f.auxId = c("uuid")()),
                    (g = e.e2eLogger) == null
                      ? void 0
                      : g.logE2EEvent(
                          c("RequestStreamE2EClientLoggerMessageType")
                            .AMENDMENT,
                          c("RequestStreamE2EClientLoggerEvent").RECEIVED,
                          {
                            data_size:
                              a == null
                                ? void 0
                                : (h = a.length) == null
                                ? void 0
                                : h.toString(),
                          },
                          f.auxId
                        ));
                  if (!this.canAmend()) {
                    l.next = 6;
                    break;
                  }
                  f &&
                    ((j = e.e2eLogger) == null
                      ? void 0
                      : j.logE2EEvent(
                          c("RequestStreamE2EClientLoggerMessageType")
                            .AMENDMENT,
                          c("RequestStreamE2EClientLoggerEvent").SENT,
                          {
                            data_size:
                              a == null
                                ? void 0
                                : (k = a.length) == null
                                ? void 0
                                : k.toString(),
                          },
                          f.auxId
                        ));
                  return l.abrupt(
                    "return",
                    this.$BladeRunnerSocketStream1.sendAmendmentWithAck(
                      e.streamId,
                      this.$BladeRunnerSocketStream3(a),
                      f == null ? null : JSON.stringify(f)
                    )
                  );
                case 6:
                  (d = e.e2eLogger) == null
                    ? void 0
                    : d.logE2EEvent(
                        c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                        c("RequestStreamE2EClientLoggerEvent").FAILURE,
                        i,
                        f == null ? void 0 : f.auxId
                      );
                  return l.abrupt(
                    "return",
                    b("Promise").reject("Stream is closed or not accepted")
                  );
                case 8:
                case "end":
                  return l.stop();
              }
          },
          null,
          this
        );
      };
      f.amendFireAndForget = function (a) {
        var b = this.$BladeRunnerSocketStream2.getRequest(),
          d = b.getInstrumentationData();
        if (d) {
          var e;
          d.auxId = c("uuid")();
          (e = b.e2eLogger) == null
            ? void 0
            : e.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                c("RequestStreamE2EClientLoggerEvent").RECEIVED,
                {
                  data_size:
                    a == null
                      ? void 0
                      : (e = a.length) == null
                      ? void 0
                      : e.toString(),
                },
                d.auxId
              );
        }
        if (this.canAmend()) {
          this.$BladeRunnerSocketStream1.sendAmendment(
            this.$BladeRunnerSocketStream2.getRequest().streamId,
            this.$BladeRunnerSocketStream3(a),
            d == null ? null : JSON.stringify(d)
          );
          if (d) {
            (e = b.e2eLogger) == null
              ? void 0
              : e.logE2EEvent(
                  c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                  c("RequestStreamE2EClientLoggerEvent").SENT,
                  {
                    data_size:
                      a == null
                        ? void 0
                        : (e = a.length) == null
                        ? void 0
                        : e.toString(),
                  },
                  d.auxId
                );
          }
        } else {
          (a = b.e2eLogger) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                i,
                d == null ? void 0 : d.auxId
              );
          throw new Error("Stream is closed or not accepted");
        }
      };
      f.amendWithoutAck = function (a) {
        this.amendFireAndForget(a);
      };
      f.$BladeRunnerSocketStream3 = function (a) {
        return typeof a == "object"
          ? btoa(new TextDecoder("utf8").decode(a))
          : a;
      };
      f.cancel = function () {
        var a = this.$BladeRunnerSocketStream2.getRequest();
        (a = a.e2eLogger) == null
          ? void 0
          : a.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").CANCEL,
              c("RequestStreamE2EClientLoggerEvent").RECEIVED
            );
        this.isAlive() &&
          (this.$BladeRunnerSocketStream1.sendCancel(
            this.$BladeRunnerSocketStream2.getRequest()
          ),
          this.$BladeRunnerSocketStream2.setLastStatus(
            d("BladeRunnerStreamStatus").StreamStatus.CLOSED
          ),
          this.getStreamHandler().onClientCancel());
      };
      f.isAlive = function () {
        return this.$BladeRunnerSocketStream2.isAlive();
      };
      f.canAmend = function () {
        return this.$BladeRunnerSocketStream2.canAmend();
      };
      f.getStatus = function () {
        return this.$BladeRunnerSocketStream2.getLastStatus();
      };
      f.getStreamId = function () {
        return this.$BladeRunnerSocketStream2.getRequest().streamId;
      };
      return e;
    })(c("BladeRunnerStream"));
    g["default"] = a;
  },
  98
);
__d(
  "RequestStreamE2ESampling",
  ["invariant", "Random", "RequestStreamE2EClientSamplingConfig", "uuid"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return a == null
        ? !1
        : a.requestId != null &&
            typeof a.requestId == "string" &&
            a.forceLogContext != null &&
            typeof a.forceLogContext == "string";
    }
    function j(a, b) {
      var d = c("RequestStreamE2EClientSamplingConfig").sampleRate;
      if (d > 1 && a != null) {
        a = c("RequestStreamE2EClientSamplingConfig")
          .methodToSamplingMultiplier[a];
        a == 0 ? (d = 0) : a != null && (d /= a);
      }
      return d == 1 ? 1 : d / b;
    }
    function k(a, b, d, e) {
      var f = c("uuid")();
      (b.requestId == null ||
        b.requestId === "" ||
        typeof b.requestId != "string") &&
        (a.requestId != null && typeof a.requestId == "string"
          ? (b.requestId = a.requestId)
          : (b.requestId = f));
      b.requestId += "/_" + f.substring(0, 4);
      b.resumeId = "0";
      d != null ? (b.sampleRate = d) : (b.sampleRate = void 0);
      f = "";
      e != null && e.length > 0 && (f = e);
      f.length > 0 &&
        (b.requestLogContext != null && b.requestLogContext.length > 0
          ? (b.requestLogContext += ":")
          : (b.requestLogContext = ""),
        (b.requestLogContext += f));
      (a == null ? void 0 : a.method) === "Falco" &&
        (b.clientLoggingDisabled = "Falco");
      d = {};
      for (
        e = Object.keys(b).sort(),
          f = Array.isArray(e),
          a = 0,
          e = f
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (f) {
          if (a >= e.length) break;
          g = e[a++];
        } else {
          a = e.next();
          if (a.done) break;
          g = a.value;
        }
        g = g;
        d[g] = b[g];
      }
      return JSON.stringify(d);
    }
    function a(a, b, d, e) {
      b &&
        ((!b.requestId.includes("/") && !b.requestId.includes("#")) ||
          h(0, 41721));
      e = j(a.method, (e = e) != null ? e : 1);
      if (c("Random").coinflip(e)) return k(a, b || { requestId: "" }, e, d);
      return i(b) ? k(a, b || { requestId: "" }, null, d) : "";
    }
    g.isForceLogged = i;
    g.getSampleRateForLogging = j;
    g.normalizeInstrumentationData = k;
    g.validateInstrumentationData = a;
  },
  98
);
__d(
  "BladeRunnerClient",
  [
    "Base64",
    "BladeRunnerConfig",
    "BladeRunnerLogger",
    "BladeRunnerSocket",
    "BladeRunnerSocketStream",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "RequestStreamE2ELogger",
    "RequestStreamE2ESampling",
    "RequestStreamTransport",
    "cr:2046346",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b) {
        (this.$2 = d(
          "RequestStreamTransport"
        ).RequestStreamTransport.WEB_BR_MQTT),
          (this.$1 = a != null ? a : c("BladeRunnerSocket").get()),
          b && (this.$2 = b);
      }
      var e = a.prototype;
      e.createStream = function (a, b, c, d) {
        return this.$3(a, b, c, d);
      };
      e.requestStream = function (a, c, d, e) {
        a = this.$3(a, c, d, e);
        a.send();
        b("cr:2046346") != null && b("cr:2046346").startPulsarTest();
        return a;
      };
      e.logInfo = function (a) {
        c("BladeRunnerLogger").info(a);
      };
      e.bumpCounter = function (a) {
        c("BladeRunnerLogger").bumpCounter(a);
      };
      e.$3 = function (a, b, e, f) {
        var g = new (d("BladeRunnerTypesInternal").GatewayStreamRequest)();
        g.streamId = this.$1.getNextStreamId();
        g.requestType = d("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;
        g.headers = c("BladeRunnerConfig").patchRequestHeaders(a);
        g.extraHeader = JSON.stringify(g.headers);
        g.payload = b != null ? c("Base64").encode(b) : null;
        f != null && (f.transport = "WEB_RS_MQTT");
        g.instrumentationData = d(
          "RequestStreamE2ESampling"
        ).validateInstrumentationData(g.headers || {}, f);
        g.e2eLogger = d("RequestStreamE2ELogger").createStreamLogger(
          g.headers,
          g.instrumentationData,
          this.$2
        );
        return new (c("BladeRunnerSocketStream"))(e, g, this.$1);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "InflightAmends",
  ["Deferred", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "inflight_amends_timeout",
      i = "inflight_amends_duplicate_id";
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$3 = b), (this.$4 = c), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.add = function (a) {
        var b = this;
        if (this.$2.has(a)) throw c("err")(i);
        var d = new (c("Deferred"))(),
          e = Date.now(),
          f = setTimeout(function () {
            b.$2.has(a) && b.reject(a, c("err")(h));
          }, this.$1);
        this.$2.set(a, {
          id: a,
          deferred: d,
          createdTimestampMs: e,
          timeoutId: f,
        });
        return d.getPromise();
      };
      b.getPromise = function (a) {
        return (a = this.$5(a)) == null ? void 0 : a.deferred.getPromise();
      };
      b.resolve = function (a, b) {
        a = this.$5(a);
        a &&
          (a.deferred.resolve == null ? void 0 : a.deferred.resolve(b),
          this.$3(a.id, Date.now() - a.createdTimestampMs),
          this.$6(a));
      };
      b.reject = function (a, b) {
        a = this.$5(a);
        a &&
          (a.deferred.reject == null ? void 0 : a.deferred.reject(b),
          this.$4(a.id, b),
          this.$6(a));
      };
      b.rejectAll = function (a) {
        for (
          var b = this.$2.entries(),
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
          e[1];
          this.reject(f, a);
        }
      };
      b.getSize = function () {
        return this.$2.size;
      };
      b.getAllPromises = function () {
        var a = [];
        for (
          var b = this.$2.values(),
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
          a.push(e.deferred.getPromise());
        }
        return a;
      };
      b.$6 = function (a) {
        clearTimeout(a.timeoutId), this.$2["delete"](a.id);
      };
      b.$5 = function (a) {
        return this.$2.get(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ThriftTypes",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      STOP: 0,
      VOID: 1,
      BOOL: 2,
      BYTE: 3,
      I08: 3,
      DOUBLE: 4,
      I16: 6,
      I32: 8,
      I64: 10,
      STRING: 11,
      STRUCT: 12,
      MAP: 13,
      SET: 14,
      LIST: 15,
      FLOAT: 19,
    });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "TWriteBuffer",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(b) {
        b === void 0 && (b = a.DEFAULT_BYTE_BUFFER_SIZE),
          (this.$1 = new DataView(new ArrayBuffer(b))),
          (this.$2 = 0);
      }
      var b = a.prototype;
      b.write = function (a) {
        this.$2 + a.length > this.$1.byteLength && this.$3(this.$2 + a.length);
        for (var b = 0; b < a.length; b++) this.$1.setUint8(this.$2 + b, a[b]);
        this.$2 += a.length;
        return a.length;
      };
      b.writeByte = function (a) {
        this.$2 + 1 > this.$1.byteLength && this.$3(this.$2 + 1);
        this.$1.setUint8(this.$2, a);
        this.$2++;
        return 1;
      };
      b.writeFloatBE = function (a) {
        this.$2 + Float32Array.BYTES_PER_ELEMENT > this.$1.byteLength &&
          this.$3(this.$2 + Float32Array.BYTES_PER_ELEMENT);
        this.$1.setFloat32(this.$2, a);
        this.$2 += Float32Array.BYTES_PER_ELEMENT;
        return Float32Array.BYTES_PER_ELEMENT;
      };
      b.writeDoubleBE = function (a) {
        this.$2 + Float64Array.BYTES_PER_ELEMENT > this.$1.byteLength &&
          this.$3(this.$2 + Float64Array.BYTES_PER_ELEMENT);
        this.$1.setFloat64(this.$2, a);
        this.$2 += Float64Array.BYTES_PER_ELEMENT;
        return Float64Array.BYTES_PER_ELEMENT;
      };
      b.toByteArray = function () {
        var a = new Uint8Array(this.$1.buffer, 0, this.$2);
        return a;
      };
      b.currentSize = function () {
        return this.$2;
      };
      b.getUnderlyingDataView = function () {
        return this.$1;
      };
      b.$3 = function (a) {
        a = a * 2;
        if (!Number.isSafeInteger(a)) throw new Error("unable to resize");
        a = new DataView(new ArrayBuffer(a));
        for (var b = 0; b < this.$2; b++) a.setUint8(b, this.$1.getUint8(b));
        this.$1 = a;
      };
      b.readByte = function () {
        throw new Error("operation not supported");
      };
      b.readBytes = function (a) {
        throw new Error("operation not supported");
      };
      b.readFloatBE = function () {
        throw new Error("operation not supported");
      };
      b.readDoubleBE = function () {
        throw new Error("operation not supported");
      };
      return a;
    })();
    a.DEFAULT_BYTE_BUFFER_SIZE = 16;
    f["default"] = a;
  },
  66
);
__d(
  "StringToUtf8",
  ["TWriteBuffer"],
  function (a, b, c, d, e, f, g) {
    a = function (a) {
      var b = new (c("TWriteBuffer"))(a.length),
        d;
      for (var e = 0; e < a.length; e++) {
        d = a.charCodeAt(e);
        if (d < 128) b.writeByte(d);
        else if (d < 2048)
          b.writeByte((d >> 6) | 192), b.writeByte((d & 63) | 128);
        else if ((d & 64512) == 55296) {
          if (e + 1 >= a.length)
            throw new Error(
              "UTF-16 string is truncated: [" + d.toString(16) + "]"
            );
          if ((a.charCodeAt(e + 1) & 64512) !== 56320)
            throw new Error(
              "Invalid UTF-16 string: [" +
                d.toString(16) +
                ", " +
                a.charCodeAt(e + 1).toString(16) +
                "]"
            );
          d = 65536 + ((d & 1023) << 10) + (a.charCodeAt(++e) & 1023);
          b.writeByte((d >> 18) | 240);
          b.writeByte(((d >> 12) & 63) | 128);
          b.writeByte(((d >> 6) & 63) | 128);
          b.writeByte((d & 63) | 128);
        } else
          b.writeByte((d >> 12) | 224),
            b.writeByte(((d >> 6) & 63) | 128),
            b.writeByte((d & 63) | 128);
      }
      return b.toByteArray();
    };
    g.StringToUtf8 = a;
  },
  98
);
__d(
  "Utf8ToString",
  [],
  function (a, b, c, d, e, f) {
    var g = function (a, b) {
        throw new Error(
          a +
            ": [" +
            b
              .map(function (a) {
                return a.toString(16);
              })
              .toString() +
            "]"
        );
      },
      h = function (a) {
        g("Invalid UTF-8 sequence", a);
      },
      i = function (a, b) {
        g("Not enough bytes for " + a + "-byte sequence", b);
      };
    a = function (a) {
      var b = 0,
        c = [];
      while (b < a.length) {
        var d = a[b++];
        if (d < 128) c.push(String.fromCharCode(d));
        else if (d >= 128 && d < 194) h([d]);
        else if (d >= 194 && d < 224) {
          b >= a.length && i(2, [d]);
          var e = a[b++];
          (e & 192) !== 128 && h([d, e]);
          c.push(String.fromCharCode(((d & 31) << 6) | (e & 63)));
        } else if (d >= 240 && d < 245) {
          b + 2 >= a.length && i(4, [d]);
          e = a[b++];
          var f = a[b++],
            g = a[b++];
          ((d == 240 &&
            (!(e >= 144 && e < 192) ||
              (f & 192) !== 128 ||
              (g & 192) !== 128)) ||
            (d >= 241 &&
              d < 244 &&
              ((e & 192) !== 128 || (f & 192) !== 128 || (g & 192) !== 128)) ||
            (d == 244 &&
              (!(e >= 128 && e < 144) ||
                (f & 192) !== 128 ||
                (g & 192) !== 128))) &&
            h([d, e, f, g]);
          e =
            (((d & 7) << 18) | ((e & 63) << 12) | ((f & 63) << 6) | (g & 63)) -
            65536;
          c.push(String.fromCharCode(55296 + (e >> 10)));
          c.push(String.fromCharCode(56320 + (e & 1023)));
        } else if (d >= 245) h([d]);
        else {
          b + 1 >= a.length && i(3, [d]);
          f = a[b++];
          g = a[b++];
          d == 224
            ? (f >= 160 && f < 192) || h([d, f, g])
            : d >= 225 && d < 237
            ? (f >= 128 && f < 192) || h([d, f, g])
            : d == 237
            ? (f >= 128 && f < 160) || h([d, f, g])
            : d >= 238 && d < 240 && ((f >= 128 && f < 192) || h([d, f, g]));
          (g >= 128 && g < 192) || h([d, f, g]);
          c.push(
            String.fromCharCode(((d & 15) << 12) | ((f & 63) << 6) | (g & 63))
          );
        }
      }
      return c.join("");
    };
    f.Utf8ToString = a;
  },
  66
);
__d(
  "jsbi",
  [],
  function (a, b, c, d, e, f) {
    (function (a, b) {
      "object" == typeof f && "undefined" != typeof e
        ? (e.exports = b())
        : "function" == typeof define && define.amd
        ? define(b)
        : (a.JSBI = b());
    })(this, function () {
      "use strict";
      function a(b) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                }),
          a(b)
        );
      }
      function b(a, b) {
        if (!(a instanceof b))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(a, b) {
        for (var c, d = 0; d < b.length; d++)
          (c = b[d]),
            (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(a, c.key, c);
      }
      function d(a, b, d) {
        return b && c(a.prototype, b), d && c(a, d), a;
      }
      function e(a, b) {
        if ("function" != typeof b && null !== b)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          b && g(a, b);
      }
      function f(a) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (a) {
                return a.__proto__ || Object.getPrototypeOf(a);
              }),
          f(a)
        );
      }
      function g(a, b) {
        return (
          (g =
            Object.setPrototypeOf ||
            function (a, b) {
              return (a.__proto__ = b), a;
            }),
          g(a, b)
        );
      }
      function h() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      function i() {
        return (
          (i = h()
            ? Reflect.construct
            : function (a, b, c) {
                var d = [null];
                d.push.apply(d, b);
                b = Function.bind.apply(a, d);
                a = new b();
                return c && g(a, c.prototype), a;
              }),
          i.apply(null, arguments)
        );
      }
      function j(a) {
        return -1 !== Function.toString.call(a).indexOf("[native code]");
      }
      function k(a) {
        var b = "function" == typeof Map ? new Map() : void 0;
        return (
          (k = function (a) {
            function c() {
              return i(a, arguments, f(this).constructor);
            }
            if (null === a || !j(a)) return a;
            if ("function" != typeof a)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" != typeof b) {
              if (b.has(a)) return b.get(a);
              b.set(a, c);
            }
            return (
              (c.prototype = Object.create(a.prototype, {
                constructor: {
                  value: c,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              g(c, a)
            );
          }),
          k(a)
        );
      }
      function l(a) {
        if (void 0 === a)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return a;
      }
      function m(a, b) {
        return b && ("object" == typeof b || "function" == typeof b) ? b : l(a);
      }
      var n = (function (c) {
        var h = Math.abs,
          i = Math.max,
          j = Math.imul,
          k = Math.clz32;
        function g(a, c) {
          if ((b(this, g), a > g.__kMaxLength))
            throw new RangeError("Maximum BigInt size exceeded");
          return (a = m(this, f(g).call(this, a))), (a.sign = c), a;
        }
        return (
          e(g, c),
          d(
            g,
            [
              {
                key: "toDebugString",
                value: function () {
                  var a = ["BigInt["],
                    b = !0,
                    c = !1,
                    d = void 0;
                  try {
                    for (
                      var e, e, f = this[Symbol.iterator]();
                      !(b = (e = f.next()).done);
                      b = !0
                    )
                      (e = e.value),
                        a.push((e ? (e >>> 0).toString(16) : e) + ", ");
                  } catch (a) {
                    (c = !0), (d = a);
                  } finally {
                    try {
                      b || null == f["return"] || f["return"]();
                    } finally {
                      if (c) throw d;
                    }
                  }
                  return a.push("]"), a.join("");
                },
              },
              {
                key: "toString",
                value: function () {
                  var a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 10;
                  if (2 > a || 36 < a)
                    throw new RangeError(
                      "toString() radix argument must be between 2 and 36"
                    );
                  return 0 === this.length
                    ? "0"
                    : 0 == (a & (a - 1))
                    ? g.__toStringBasePowerOfTwo(this, a)
                    : g.__toStringGeneric(this, a, !1);
                },
              },
              {
                key: "__copy",
                value: function () {
                  for (
                    var a = new g(this.length, this.sign), b = 0;
                    b < this.length;
                    b++
                  )
                    a[b] = this[b];
                  return a;
                },
              },
              {
                key: "__trim",
                value: function () {
                  for (var a = this.length, b = this[a - 1]; 0 === b; )
                    a--, (b = this[a - 1]), this.pop();
                  return 0 === a && (this.sign = !1), this;
                },
              },
              {
                key: "__initializeDigits",
                value: function () {
                  for (var a = 0; a < this.length; a++) this[a] = 0;
                },
              },
              {
                key: "__clzmsd",
                value: function () {
                  return k(this[this.length - 1]);
                },
              },
              {
                key: "__inplaceMultiplyAdd",
                value: function (a, b, c) {
                  c > this.length && (c = this.length);
                  for (
                    var d = 65535 & a,
                      a = a >>> 16,
                      e = 0,
                      f = 65535 & b,
                      b = b >>> 16,
                      i = 0;
                    i < c;
                    i++
                  ) {
                    var n = this.__digit(i),
                      m = 65535 & n;
                    n = n >>> 16;
                    var o = j(m, d);
                    m = j(m, a);
                    var p = j(n, d);
                    n = j(n, a);
                    var q = f + (65535 & o);
                    o =
                      b +
                      e +
                      (q >>> 16) +
                      (o >>> 16) +
                      (65535 & m) +
                      (65535 & p);
                    (f = (m >>> 16) + (p >>> 16) + (65535 & n) + (o >>> 16)),
                      (e = f >>> 16),
                      (f &= 65535),
                      (b = n >>> 16);
                    this.__setDigit(i, (65535 & q) | (o << 16));
                  }
                  if (0 !== e || 0 !== f || 0 !== b)
                    throw new Error("implementation bug");
                },
              },
              {
                key: "__inplaceAdd",
                value: function (a, b, c) {
                  for (var d, e = 0, f = 0; f < c; f++)
                    (d = this.__halfDigit(b + f) + a.__halfDigit(f) + e),
                      (e = d >>> 16),
                      this.__setHalfDigit(b + f, d);
                  return e;
                },
              },
              {
                key: "__inplaceSub",
                value: function (a, b, c) {
                  var d = 0;
                  if (1 & b) {
                    b >>= 1;
                    for (
                      var e = this.__digit(b), f = 65535 & e, k = 0;
                      k < (c - 1) >>> 1;
                      k++
                    ) {
                      var l = a.__digit(k),
                        m = (e >>> 16) - (65535 & l) - d;
                      (d = 1 & (m >>> 16)),
                        this.__setDigit(b + k, (m << 16) | (65535 & f)),
                        (e = this.__digit(b + k + 1)),
                        (f = (65535 & e) - (l >>> 16) - d),
                        (d = 1 & (f >>> 16));
                    }
                    m = a.__digit(k);
                    l = (e >>> 16) - (65535 & m) - d;
                    (d = 1 & (l >>> 16)),
                      this.__setDigit(b + k, (l << 16) | (65535 & f));
                    if (b + k + 1 >= this.length)
                      throw new RangeError("out of bounds");
                    0 == (1 & c) &&
                      ((e = this.__digit(b + k + 1)),
                      (f = (65535 & e) - (m >>> 16) - d),
                      (d = 1 & (f >>> 16)),
                      this.__setDigit(
                        b + a.length,
                        (4294901760 & e) | (65535 & f)
                      ));
                  } else {
                    b >>= 1;
                    for (l = 0; l < a.length - 1; l++) {
                      k = this.__digit(b + l);
                      m = a.__digit(l);
                      e = (65535 & k) - (65535 & m) - d;
                      d = 1 & (e >>> 16);
                      f = (k >>> 16) - (m >>> 16) - d;
                      (d = 1 & (f >>> 16)),
                        this.__setDigit(b + l, (f << 16) | (65535 & e));
                    }
                    k = this.__digit(b + l);
                    m = a.__digit(l);
                    f = (65535 & k) - (65535 & m) - d;
                    d = 1 & (f >>> 16);
                    e = 0;
                    0 == (1 & c) &&
                      ((e = (k >>> 16) - (m >>> 16) - d), (d = 1 & (e >>> 16))),
                      this.__setDigit(b + l, (e << 16) | (65535 & f));
                  }
                  return d;
                },
              },
              {
                key: "__inplaceRightShift",
                value: function (a) {
                  if (0 !== a) {
                    for (
                      var b,
                        c = this.__digit(0) >>> a,
                        d = this.length - 1,
                        e = 0;
                      e < d;
                      e++
                    )
                      (b = this.__digit(e + 1)),
                        this.__setDigit(e, (b << (32 - a)) | c),
                        (c = b >>> a);
                    this.__setDigit(d, c);
                  }
                },
              },
              {
                key: "__digit",
                value: function (a) {
                  return this[a];
                },
              },
              {
                key: "__unsignedDigit",
                value: function (a) {
                  return this[a] >>> 0;
                },
              },
              {
                key: "__setDigit",
                value: function (a, b) {
                  this[a] = 0 | b;
                },
              },
              {
                key: "__setDigitGrow",
                value: function (a, b) {
                  this[a] = 0 | b;
                },
              },
              {
                key: "__halfDigitLength",
                value: function () {
                  var a = this.length;
                  return 65535 >= this.__unsignedDigit(a - 1)
                    ? 2 * a - 1
                    : 2 * a;
                },
              },
              {
                key: "__halfDigit",
                value: function (a) {
                  return 65535 & (this[a >>> 1] >>> ((1 & a) << 4));
                },
              },
              {
                key: "__setHalfDigit",
                value: function (a, b) {
                  var c = a >>> 1,
                    d = this.__digit(c);
                  a =
                    1 & a
                      ? (65535 & d) | (b << 16)
                      : (4294901760 & d) | (65535 & b);
                  this.__setDigit(c, a);
                },
              },
            ],
            [
              {
                key: "BigInt",
                value: function (b) {
                  var c = Math.floor,
                    d = Number.isFinite;
                  if ("number" == typeof b) {
                    if (0 === b) return g.__zero();
                    if ((0 | b) === b)
                      return 0 > b ? g.__oneDigit(-b, !0) : g.__oneDigit(b, !1);
                    if (!d(b) || c(b) !== b)
                      throw new RangeError(
                        "The number " +
                          b +
                          " cannot be converted to BigInt because it is not an integer"
                      );
                    return g.__fromDouble(b);
                  }
                  if ("string" == typeof b) {
                    d = g.__fromString(b);
                    if (null === d)
                      throw new SyntaxError(
                        "Cannot convert " + b + " to a BigInt"
                      );
                    return d;
                  }
                  if ("boolean" == typeof b)
                    return !0 === b ? g.__oneDigit(1, !1) : g.__zero();
                  if ("object" === a(b)) {
                    if (b.constructor === g) return b;
                    c = g.__toPrimitive(b);
                    return g.BigInt(c);
                  }
                  throw new TypeError("Cannot convert " + b + " to a BigInt");
                },
              },
              {
                key: "toNumber",
                value: function (a) {
                  var b = a.length;
                  if (0 === b) return 0;
                  if (1 === b) {
                    var c = a.__unsignedDigit(0);
                    return a.sign ? -c : c;
                  }
                  c = a.__digit(b - 1);
                  var d = k(c),
                    e = 32 * b - d;
                  if (1024 < e) return a.sign ? -Infinity : 1 / 0;
                  e = e - 1;
                  c = c;
                  b = b - 1;
                  d = d + 1;
                  var f = 32 === d ? 0 : c << d;
                  f >>>= 12;
                  var h = d - 12,
                    i = 12 <= d ? 0 : c << (20 + d);
                  d = 20 + d;
                  0 < h &&
                    0 < b &&
                    (b--,
                    (c = a.__digit(b)),
                    (f |= c >>> (32 - h)),
                    (i = c << h),
                    (d = h)),
                    0 < d &&
                      0 < b &&
                      (b--,
                      (c = a.__digit(b)),
                      (i |= c >>> (32 - d)),
                      (d -= 32));
                  h = g.__decideRounding(a, d, b, c);
                  if (
                    (1 === h || (0 === h && 1 == (1 & i))) &&
                    ((i = (i + 1) >>> 0),
                    0 === i && (f++, 0 != f >>> 20 && ((f = 0), e++, 1023 < e)))
                  )
                    return a.sign ? -Infinity : 1 / 0;
                  d = a.sign ? -2147483648 : 0;
                  return (
                    (e = (e + 1023) << 20),
                    (g.__kBitConversionInts[1] = d | e | f),
                    (g.__kBitConversionInts[0] = i),
                    g.__kBitConversionDouble[0]
                  );
                },
              },
              {
                key: "unaryMinus",
                value: function (a) {
                  if (0 === a.length) return a;
                  var b = a.__copy();
                  return (b.sign = !a.sign), b;
                },
              },
              {
                key: "bitwiseNot",
                value: function (a) {
                  return a.sign
                    ? g.__absoluteSubOne(a).__trim()
                    : g.__absoluteAddOne(a, !0);
                },
              },
              {
                key: "exponentiate",
                value: function (a, b) {
                  if (b.sign) throw new RangeError("Exponent must be positive");
                  if (0 === b.length) return g.__oneDigit(1, !1);
                  if (0 === a.length) return a;
                  if (1 === a.length && 1 === a.__digit(0))
                    return a.sign && 0 == (1 & b.__digit(0))
                      ? g.unaryMinus(a)
                      : a;
                  if (1 < b.length) throw new RangeError("BigInt too big");
                  b = b.__unsignedDigit(0);
                  if (1 === b) return a;
                  if (b >= g.__kMaxLengthBits)
                    throw new RangeError("BigInt too big");
                  if (1 === a.length && 2 === a.__digit(0)) {
                    var c = 1 + (b >>> 5),
                      d = a.sign && 0 != (1 & b);
                    d = new g(c, d);
                    d.__initializeDigits();
                    var e = 1 << (31 & b);
                    return d.__setDigit(c - 1, e), d;
                  }
                  c = null;
                  e = a;
                  for (0 != (1 & b) && (c = a), b >>= 1; 0 !== b; b >>= 1)
                    (e = g.multiply(e, e)),
                      0 != (1 & b) &&
                        (null === c ? (c = e) : (c = g.multiply(c, e)));
                  return c;
                },
              },
              {
                key: "multiply",
                value: function (a, b) {
                  if (0 === a.length) return a;
                  if (0 === b.length) return b;
                  var c = a.length + b.length;
                  32 <= a.__clzmsd() + b.__clzmsd() && c--;
                  c = new g(c, a.sign !== b.sign);
                  c.__initializeDigits();
                  for (var d = 0; d < a.length; d++)
                    g.__multiplyAccumulate(b, a.__digit(d), c, d);
                  return c.__trim();
                },
              },
              {
                key: "divide",
                value: function (a, b) {
                  if (0 === b.length) throw new RangeError("Division by zero");
                  if (0 > g.__absoluteCompare(a, b)) return g.__zero();
                  var c = a.sign !== b.sign,
                    d = b.__unsignedDigit(0);
                  if (1 === b.length && 65535 >= d) {
                    if (1 === d) return c === a.sign ? a : g.unaryMinus(a);
                    d = g.__absoluteDivSmall(a, d, null);
                  } else d = g.__absoluteDivLarge(a, b, !0, !1);
                  return (d.sign = c), d.__trim();
                },
              },
              {
                key: "remainder",
                value: function (a, b) {
                  if (0 === b.length) throw new RangeError("Division by zero");
                  if (0 > g.__absoluteCompare(a, b)) return a;
                  var c = b.__unsignedDigit(0);
                  if (1 === b.length && 65535 >= c) {
                    if (1 === c) return g.__zero();
                    c = g.__absoluteModSmall(a, c);
                    return 0 === c ? g.__zero() : g.__oneDigit(c, a.sign);
                  }
                  c = g.__absoluteDivLarge(a, b, !1, !0);
                  return (c.sign = a.sign), c.__trim();
                },
              },
              {
                key: "add",
                value: function (a, b) {
                  var c = a.sign;
                  return c === b.sign
                    ? g.__absoluteAdd(a, b, c)
                    : 0 <= g.__absoluteCompare(a, b)
                    ? g.__absoluteSub(a, b, c)
                    : g.__absoluteSub(b, a, !c);
                },
              },
              {
                key: "subtract",
                value: function (a, b) {
                  var c = a.sign;
                  return c === b.sign
                    ? 0 <= g.__absoluteCompare(a, b)
                      ? g.__absoluteSub(a, b, c)
                      : g.__absoluteSub(b, a, !c)
                    : g.__absoluteAdd(a, b, c);
                },
              },
              {
                key: "leftShift",
                value: function (a, b) {
                  return 0 === b.length || 0 === a.length
                    ? a
                    : b.sign
                    ? g.__rightShiftByAbsolute(a, b)
                    : g.__leftShiftByAbsolute(a, b);
                },
              },
              {
                key: "signedRightShift",
                value: function (a, b) {
                  return 0 === b.length || 0 === a.length
                    ? a
                    : b.sign
                    ? g.__leftShiftByAbsolute(a, b)
                    : g.__rightShiftByAbsolute(a, b);
                },
              },
              {
                key: "unsignedRightShift",
                value: function () {
                  throw new TypeError(
                    "BigInts have no unsigned right shift; use >> instead"
                  );
                },
              },
              {
                key: "lessThan",
                value: function (a, b) {
                  return 0 > g.__compareToBigInt(a, b);
                },
              },
              {
                key: "lessThanOrEqual",
                value: function (a, b) {
                  return 0 >= g.__compareToBigInt(a, b);
                },
              },
              {
                key: "greaterThan",
                value: function (a, b) {
                  return 0 < g.__compareToBigInt(a, b);
                },
              },
              {
                key: "greaterThanOrEqual",
                value: function (a, b) {
                  return 0 <= g.__compareToBigInt(a, b);
                },
              },
              {
                key: "equal",
                value: function (a, b) {
                  if (a.sign !== b.sign) return !1;
                  if (a.length !== b.length) return !1;
                  for (var c = 0; c < a.length; c++)
                    if (a.__digit(c) !== b.__digit(c)) return !1;
                  return !0;
                },
              },
              {
                key: "notEqual",
                value: function (a, b) {
                  return !g.equal(a, b);
                },
              },
              {
                key: "bitwiseAnd",
                value: function (a, b) {
                  if (!a.sign && !b.sign) return g.__absoluteAnd(a, b).__trim();
                  if (a.sign && b.sign) {
                    var c = i(a.length, b.length) + 1;
                    c = g.__absoluteSubOne(a, c);
                    var d = g.__absoluteSubOne(b);
                    return (
                      (c = g.__absoluteOr(c, d, c)),
                      g.__absoluteAddOne(c, !0, c).__trim()
                    );
                  }
                  if (a.sign) {
                    d = [b, a];
                    (a = d[0]), (b = d[1]);
                  }
                  return g.__absoluteAndNot(a, g.__absoluteSubOne(b)).__trim();
                },
              },
              {
                key: "bitwiseXor",
                value: function (a, b) {
                  if (!a.sign && !b.sign) return g.__absoluteXor(a, b).__trim();
                  if (a.sign && b.sign) {
                    var c = i(a.length, b.length);
                    c = g.__absoluteSubOne(a, c);
                    var d = g.__absoluteSubOne(b);
                    return g.__absoluteXor(c, d, c).__trim();
                  }
                  d = i(a.length, b.length) + 1;
                  if (a.sign) {
                    c = [b, a];
                    (a = c[0]), (b = c[1]);
                  }
                  c = g.__absoluteSubOne(b, d);
                  return (
                    (c = g.__absoluteXor(c, a, c)),
                    g.__absoluteAddOne(c, !0, c).__trim()
                  );
                },
              },
              {
                key: "bitwiseOr",
                value: function (a, b) {
                  var c = i(a.length, b.length);
                  if (!a.sign && !b.sign) return g.__absoluteOr(a, b).__trim();
                  if (a.sign && b.sign) {
                    var d = g.__absoluteSubOne(a, c),
                      e = g.__absoluteSubOne(b);
                    return (
                      (d = g.__absoluteAnd(d, e, d)),
                      g.__absoluteAddOne(d, !0, d).__trim()
                    );
                  }
                  if (a.sign) {
                    e = [b, a];
                    (a = e[0]), (b = e[1]);
                  }
                  d = g.__absoluteSubOne(b, c);
                  return (
                    (d = g.__absoluteAndNot(d, a, d)),
                    g.__absoluteAddOne(d, !0, d).__trim()
                  );
                },
              },
              {
                key: "asIntN",
                value: function (a, b) {
                  if (0 === b.length) return b;
                  if (0 === a) return g.__zero();
                  if (a >= g.__kMaxLengthBits) return b;
                  var c = (a + 31) >>> 5;
                  if (b.length < c) return b;
                  var d = b.__unsignedDigit(c - 1),
                    e = 1 << (31 & (a - 1));
                  if (b.length === c && d < e) return b;
                  if (!((d & e) === e)) return g.__truncateToNBits(a, b);
                  if (!b.sign)
                    return g.__truncateAndSubFromPowerOfTwo(a, b, !0);
                  if (0 == (d & (e - 1))) {
                    for (var f = c - 2; 0 <= f; f--)
                      if (0 !== b.__digit(f))
                        return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                    return b.length === c && d === e
                      ? b
                      : g.__truncateToNBits(a, b);
                  }
                  return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                },
              },
              {
                key: "asUintN",
                value: function (a, b) {
                  if (0 === b.length) return b;
                  if (0 === a) return g.__zero();
                  if (b.sign) {
                    if (a > g.__kMaxLengthBits)
                      throw new RangeError("BigInt too big");
                    return g.__truncateAndSubFromPowerOfTwo(a, b, !1);
                  }
                  if (a >= g.__kMaxLengthBits) return b;
                  var c = (a + 31) >>> 5;
                  if (b.length < c) return b;
                  var d = 31 & a;
                  if (b.length == c) {
                    if (0 == d) return b;
                    c = b.__digit(c - 1);
                    if (0 == c >>> d) return b;
                  }
                  return g.__truncateToNBits(a, b);
                },
              },
              {
                key: "ADD",
                value: function (a, b) {
                  if (
                    ((a = g.__toPrimitive(a)),
                    (b = g.__toPrimitive(b)),
                    "string" == typeof a)
                  )
                    return "string" != typeof b && (b = b.toString()), a + b;
                  if ("string" == typeof b) return a.toString() + b;
                  if (
                    ((a = g.__toNumeric(a)),
                    (b = g.__toNumeric(b)),
                    g.__isBigInt(a) && g.__isBigInt(b))
                  )
                    return g.add(a, b);
                  if ("number" == typeof a && "number" == typeof b)
                    return a + b;
                  throw new TypeError(
                    "Cannot mix BigInt and other types, use explicit conversions"
                  );
                },
              },
              {
                key: "LT",
                value: function (a, b) {
                  return g.__compare(a, b, 0);
                },
              },
              {
                key: "LE",
                value: function (a, b) {
                  return g.__compare(a, b, 1);
                },
              },
              {
                key: "GT",
                value: function (a, b) {
                  return g.__compare(a, b, 2);
                },
              },
              {
                key: "GE",
                value: function (a, b) {
                  return g.__compare(a, b, 3);
                },
              },
              {
                key: "EQ",
                value: function (b, c) {
                  for (;;) {
                    if (g.__isBigInt(b))
                      return g.__isBigInt(c) ? g.equal(b, c) : g.EQ(c, b);
                    if ("number" == typeof b) {
                      if (g.__isBigInt(c)) return g.__equalToNumber(c, b);
                      if ("object" !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ("string" == typeof b) {
                      if (g.__isBigInt(c))
                        return (
                          (b = g.__fromString(b)), null !== b && g.equal(b, c)
                        );
                      if ("object" !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ("boolean" == typeof b) {
                      if (g.__isBigInt(c)) return g.__equalToNumber(c, +b);
                      if ("object" !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ("symbol" === a(b)) {
                      if (g.__isBigInt(c)) return !1;
                      if ("object" !== a(c)) return b == c;
                      c = g.__toPrimitive(c);
                    } else if ("object" === a(b)) {
                      if ("object" === a(c) && c.constructor !== g)
                        return b == c;
                      b = g.__toPrimitive(b);
                    } else return b == c;
                  }
                },
              },
              {
                key: "NE",
                value: function (a, b) {
                  return !g.EQ(a, b);
                },
              },
              {
                key: "__zero",
                value: function () {
                  return new g(0, !1);
                },
              },
              {
                key: "__oneDigit",
                value: function (a, b) {
                  b = new g(1, b);
                  return b.__setDigit(0, a), b;
                },
              },
              {
                key: "__decideRounding",
                value: function (a, b, c, d) {
                  if (0 < b) return -1;
                  if (0 > b) b = -b - 1;
                  else {
                    if (0 === c) return -1;
                    c--, (d = a.__digit(c)), (b = 31);
                  }
                  b = 1 << b;
                  if (0 == (d & b)) return -1;
                  if (((b -= 1), 0 != (d & b))) return 1;
                  for (; 0 < c; ) if ((c--, 0 !== a.__digit(c))) return 1;
                  return 0;
                },
              },
              {
                key: "__fromDouble",
                value: function (a) {
                  g.__kBitConversionDouble[0] = a;
                  var b,
                    c = 2047 & (g.__kBitConversionInts[1] >>> 20);
                  c = c - 1023;
                  var d = (c >>> 5) + 1;
                  a = new g(d, 0 > a);
                  var e = (1048575 & g.__kBitConversionInts[1]) | 1048576,
                    f = g.__kBitConversionInts[0],
                    k = 20;
                  c = 31 & c;
                  var n = 0;
                  if (c < k) {
                    var m = k - c;
                    (n = m + 32),
                      (b = e >>> m),
                      (e = (e << (32 - m)) | (f >>> m)),
                      (f <<= 32 - m);
                  } else if (c === k) (n = 32), (b = e), (e = f);
                  else {
                    m = c - k;
                    (n = 32 - m),
                      (b = (e << m) | (f >>> (32 - m))),
                      (e = f << m);
                  }
                  a.__setDigit(d - 1, b);
                  for (c = d - 2; 0 <= c; c--)
                    0 < n ? ((n -= 32), (b = e), (e = f)) : (b = 0),
                      a.__setDigit(c, b);
                  return a.__trim();
                },
              },
              {
                key: "__isWhitespace",
                value: function (a) {
                  return (
                    !!(13 >= a && 9 <= a) ||
                    (159 >= a
                      ? 32 == a
                      : 131071 >= a
                      ? 160 == a || 5760 == a
                      : 196607 >= a
                      ? ((a &= 131071),
                        10 >= a ||
                          40 == a ||
                          41 == a ||
                          47 == a ||
                          95 == a ||
                          4096 == a)
                      : 65279 == a)
                  );
                },
              },
              {
                key: "__fromString",
                value: function (a) {
                  var b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    c = 0,
                    d = a.length,
                    e = 0;
                  if (e === d) return g.__zero();
                  for (var f = a.charCodeAt(e); g.__isWhitespace(f); ) {
                    if (++e === d) return g.__zero();
                    f = a.charCodeAt(e);
                  }
                  if (43 === f) {
                    if (++e === d) return null;
                    (f = a.charCodeAt(e)), (c = 1);
                  } else if (45 === f) {
                    if (++e === d) return null;
                    (f = a.charCodeAt(e)), (c = -1);
                  }
                  if (0 === b) {
                    if (((b = 10), 48 === f)) {
                      if (++e === d) return g.__zero();
                      if (((f = a.charCodeAt(e)), 88 === f || 120 === f)) {
                        if (((b = 16), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      } else if (79 === f || 111 === f) {
                        if (((b = 8), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      } else if (66 === f || 98 === f) {
                        if (((b = 2), ++e === d)) return null;
                        f = a.charCodeAt(e);
                      }
                    }
                  } else if (16 === b && 48 === f) {
                    if (++e === d) return g.__zero();
                    if (((f = a.charCodeAt(e)), 88 === f || 120 === f)) {
                      if (++e === d) return null;
                      f = a.charCodeAt(e);
                    }
                  }
                  for (; 48 === f; ) {
                    if (++e === d) return g.__zero();
                    f = a.charCodeAt(e);
                  }
                  var m = d - e,
                    i = g.__kMaxBitsPerChar[b],
                    j = g.__kBitsPerCharTableMultiplier - 1;
                  if (m > 1073741824 / i) return null;
                  var k = (i * m + j) >>> g.__kBitsPerCharTableShift,
                    l = new g((k + 31) >>> 5, !1),
                    n = 10 > b ? b : 10,
                    o = 10 < b ? b - 10 : 0;
                  if (0 == (b & (b - 1))) {
                    i >>= g.__kBitsPerCharTableShift;
                    var p = [],
                      q = [],
                      r = !1;
                    do {
                      for (var s, t = 0, u = 0; ; ) {
                        if ((void 0, (f - 48) >>> 0 < n)) s = f - 48;
                        else if (((32 | f) - 97) >>> 0 < o) s = (32 | f) - 87;
                        else {
                          r = !0;
                          break;
                        }
                        if (((u += i), (t = (t << i) | s), ++e === d)) {
                          r = !0;
                          break;
                        }
                        if (((f = a.charCodeAt(e)), 32 < u + i)) break;
                      }
                      p.push(t), q.push(u);
                    } while (!r);
                    g.__fillFromParts(l, p, q);
                  } else {
                    l.__initializeDigits();
                    var v = !1,
                      w = 0;
                    do {
                      for (var x, y = 0, z = 1; ; ) {
                        if ((void 0, (f - 48) >>> 0 < n)) x = f - 48;
                        else if (((32 | f) - 97) >>> 0 < o) x = (32 | f) - 87;
                        else {
                          v = !0;
                          break;
                        }
                        var A = z * b;
                        if (4294967295 < A) break;
                        if (((z = A), (y = y * b + x), w++, ++e === d)) {
                          v = !0;
                          break;
                        }
                        f = a.charCodeAt(e);
                      }
                      j = 32 * g.__kBitsPerCharTableMultiplier - 1;
                      var B = (i * w + j) >>> (g.__kBitsPerCharTableShift + 5);
                      l.__inplaceMultiplyAdd(z, y, B);
                    } while (!v);
                  }
                  if (e !== d) {
                    if (!g.__isWhitespace(f)) return null;
                    for (e++; e < d; e++)
                      if (((f = a.charCodeAt(e)), !g.__isWhitespace(f)))
                        return null;
                  }
                  return 0 !== c && 10 !== b
                    ? null
                    : ((l.sign = -1 === c), l.__trim());
                },
              },
              {
                key: "__fillFromParts",
                value: function (a, b, c) {
                  for (var d = 0, e = 0, f = 0, k = b.length - 1; 0 <= k; k--) {
                    var l = b[k],
                      m = c[k];
                    (e |= l << f),
                      (f += m),
                      32 === f
                        ? (a.__setDigit(d++, e), (f = 0), (e = 0))
                        : 32 < f &&
                          (a.__setDigit(d++, e),
                          (f -= 32),
                          (e = l >>> (m - f)));
                  }
                  if (0 !== e) {
                    if (d >= a.length) throw new Error("implementation bug");
                    a.__setDigit(d++, e);
                  }
                  for (; d < a.length; d++) a.__setDigit(d, 0);
                },
              },
              {
                key: "__toStringBasePowerOfTwo",
                value: function (a, b) {
                  var c = a.length,
                    d = b - 1;
                  (d = (85 & (d >>> 1)) + (85 & d)),
                    (d = (51 & (d >>> 2)) + (51 & d)),
                    (d = (15 & (d >>> 4)) + (15 & d));
                  d = d;
                  b = b - 1;
                  var e = a.__digit(c - 1),
                    f = k(e);
                  f = 0 | ((32 * c - f + d - 1) / d);
                  if ((a.sign && f++, 268435456 < f))
                    throw new Error("string too long");
                  for (
                    var h = Array(f), f = f - 1, l = 0, n = 0, o = 0;
                    o < c - 1;
                    o++
                  ) {
                    var p = a.__digit(o),
                      q = (l | (p << n)) & b;
                    h[f--] = g.__kConversionChars[q];
                    q = d - n;
                    for (l = p >>> q, n = 32 - q; n >= d; )
                      (h[f--] = g.__kConversionChars[l & b]),
                        (l >>>= d),
                        (n -= d);
                  }
                  p = (l | (e << n)) & b;
                  for (
                    h[f--] = g.__kConversionChars[p], l = e >>> (d - n);
                    0 !== l;

                  )
                    (h[f--] = g.__kConversionChars[l & b]), (l >>>= d);
                  if ((a.sign && (h[f--] = "-"), -1 !== f))
                    throw new Error("implementation bug");
                  return h.join("");
                },
              },
              {
                key: "__toStringGeneric",
                value: function (a, b, c) {
                  var d = a.length;
                  if (0 === d) return "";
                  if (1 === d) {
                    var e = a.__unsignedDigit(0).toString(b);
                    return !1 === c && a.sign && (e = "-" + e), e;
                  }
                  e = 32 * d - k(a.__digit(d - 1));
                  d = g.__kMaxBitsPerChar[b];
                  d = d - 1;
                  e = e * g.__kBitsPerCharTableMultiplier;
                  (e += d - 1), (e = 0 | (e / d));
                  var f;
                  d = (e + 1) >> 1;
                  e = g.exponentiate(g.__oneDigit(b, !1), g.__oneDigit(d, !1));
                  var h = e.__unsignedDigit(0);
                  if (1 === e.length && 65535 >= h) {
                    (f = new g(a.length, !1)), f.__initializeDigits();
                    for (var i, j = 0, l = 2 * a.length - 1; 0 <= l; l--)
                      (i = (j << 16) | a.__halfDigit(l)),
                        f.__setHalfDigit(l, 0 | (i / h)),
                        (j = 0 | i % h);
                    i = j.toString(b);
                  } else {
                    h = g.__absoluteDivLarge(a, e, !0, !0);
                    f = h.quotient;
                    l = h.remainder.__trim();
                    i = g.__toStringGeneric(l, b, !0);
                  }
                  f.__trim();
                  for (j = g.__toStringGeneric(f, b, !0); i.length < d; )
                    i = "0" + i;
                  return !1 === c && a.sign && (j = "-" + j), j + i;
                },
              },
              {
                key: "__unequalSign",
                value: function (a) {
                  return a ? -1 : 1;
                },
              },
              {
                key: "__absoluteGreater",
                value: function (a) {
                  return a ? -1 : 1;
                },
              },
              {
                key: "__absoluteLess",
                value: function (a) {
                  return a ? 1 : -1;
                },
              },
              {
                key: "__compareToBigInt",
                value: function (a, b) {
                  var c = a.sign;
                  if (c !== b.sign) return g.__unequalSign(c);
                  a = g.__absoluteCompare(a, b);
                  return 0 < a
                    ? g.__absoluteGreater(c)
                    : 0 > a
                    ? g.__absoluteLess(c)
                    : 0;
                },
              },
              {
                key: "__compareToNumber",
                value: function (a, b) {
                  if (!0 | b) {
                    var c = a.sign,
                      d = 0 > b;
                    if (c !== d) return g.__unequalSign(c);
                    if (0 === a.length) {
                      if (d) throw new Error("implementation bug");
                      return 0 === b ? 0 : -1;
                    }
                    if (1 < a.length) return g.__absoluteGreater(c);
                    d = h(b);
                    var e = a.__unsignedDigit(0);
                    return e > d
                      ? g.__absoluteGreater(c)
                      : e < d
                      ? g.__absoluteLess(c)
                      : 0;
                  }
                  return g.__compareToDouble(a, b);
                },
              },
              {
                key: "__compareToDouble",
                value: function (a, b) {
                  if (b !== b) return b;
                  if (b === 1 / 0) return -1;
                  if (b === -Infinity) return 1;
                  var c = a.sign;
                  if (c !== 0 > b) return g.__unequalSign(c);
                  if (0 === b)
                    throw new Error(
                      "implementation bug: should be handled elsewhere"
                    );
                  if (0 === a.length) return -1;
                  g.__kBitConversionDouble[0] = b;
                  b = 2047 & (g.__kBitConversionInts[1] >>> 20);
                  if (2047 == b)
                    throw new Error("implementation bug: handled elsewhere");
                  b = b - 1023;
                  if (0 > b) return g.__absoluteGreater(c);
                  var d = a.length,
                    e = a.__digit(d - 1),
                    f = k(e),
                    l = 32 * d - f;
                  b = b + 1;
                  if (l < b) return g.__absoluteLess(c);
                  if (l > b) return g.__absoluteGreater(c);
                  b = 1048576 | (1048575 & g.__kBitConversionInts[1]);
                  var m = g.__kBitConversionInts[0],
                    o = 20;
                  f = 31 - f;
                  if (f !== (l - 1) % 31) throw new Error("implementation bug");
                  var p;
                  l = 0;
                  if (f < o) {
                    var q = o - f;
                    (l = q + 32),
                      (p = b >>> q),
                      (b = (b << (32 - q)) | (m >>> q)),
                      (m <<= 32 - q);
                  } else if (f === o) (l = 32), (p = b), (b = m);
                  else {
                    q = f - o;
                    (l = 32 - q),
                      (p = (b << q) | (m >>> (32 - q))),
                      (b = m << q);
                  }
                  if (((e >>>= 0), (p >>>= 0), e > p))
                    return g.__absoluteGreater(c);
                  if (e < p) return g.__absoluteLess(c);
                  for (f = d - 2; 0 <= f; f--) {
                    0 < l
                      ? ((l -= 32), (p = b >>> 0), (b = m), (m = 0))
                      : (p = 0);
                    o = a.__unsignedDigit(f);
                    if (o > p) return g.__absoluteGreater(c);
                    if (o < p) return g.__absoluteLess(c);
                  }
                  if (0 !== b || 0 !== m) {
                    if (0 === l) throw new Error("implementation bug");
                    return g.__absoluteLess(c);
                  }
                  return 0;
                },
              },
              {
                key: "__equalToNumber",
                value: function (a, b) {
                  return b | (0 === b)
                    ? 0 === b
                      ? 0 === a.length
                      : 1 === a.length &&
                        a.sign === 0 > b &&
                        a.__unsignedDigit(0) === h(b)
                    : 0 === g.__compareToDouble(a, b);
                },
              },
              {
                key: "__comparisonResultToBool",
                value: function (a, b) {
                  switch (b) {
                    case 0:
                      return 0 > a;
                    case 1:
                      return 0 >= a;
                    case 2:
                      return 0 < a;
                    case 3:
                      return 0 <= a;
                  }
                  throw new Error("unreachable");
                },
              },
              {
                key: "__compare",
                value: function (a, b, c) {
                  if (
                    ((a = g.__toPrimitive(a)),
                    (b = g.__toPrimitive(b)),
                    "string" == typeof a && "string" == typeof b)
                  )
                    switch (c) {
                      case 0:
                        return a < b;
                      case 1:
                        return a <= b;
                      case 2:
                        return a > b;
                      case 3:
                        return a >= b;
                    }
                  if (g.__isBigInt(a) && "string" == typeof b)
                    return (
                      (b = g.__fromString(b)),
                      null !== b &&
                        g.__comparisonResultToBool(g.__compareToBigInt(a, b), c)
                    );
                  if ("string" == typeof a && g.__isBigInt(b))
                    return (
                      (a = g.__fromString(a)),
                      null !== a &&
                        g.__comparisonResultToBool(g.__compareToBigInt(a, b), c)
                    );
                  if (
                    ((a = g.__toNumeric(a)),
                    (b = g.__toNumeric(b)),
                    g.__isBigInt(a))
                  ) {
                    if (g.__isBigInt(b))
                      return g.__comparisonResultToBool(
                        g.__compareToBigInt(a, b),
                        c
                      );
                    if ("number" != typeof b)
                      throw new Error("implementation bug");
                    return g.__comparisonResultToBool(
                      g.__compareToNumber(a, b),
                      c
                    );
                  }
                  if ("number" != typeof a)
                    throw new Error("implementation bug");
                  if (g.__isBigInt(b))
                    return g.__comparisonResultToBool(
                      g.__compareToNumber(b, a),
                      2 ^ c
                    );
                  if ("number" != typeof b)
                    throw new Error("implementation bug");
                  return 0 === c
                    ? a < b
                    : 1 === c
                    ? a <= b
                    : 2 === c
                    ? a > b
                    : 3 === c
                    ? a >= b
                    : void 0;
                },
              },
              {
                key: "__absoluteAdd",
                value: function (a, b, c) {
                  if (a.length < b.length) return g.__absoluteAdd(b, a, c);
                  if (0 === a.length) return a;
                  if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                  var d = a.length;
                  (0 === a.__clzmsd() ||
                    (b.length === a.length && 0 === b.__clzmsd())) &&
                    d++;
                  for (var d = new g(d, c), c = 0, e = 0; e < b.length; e++) {
                    var f = b.__digit(e),
                      h = a.__digit(e),
                      m = (65535 & h) + (65535 & f) + c;
                    h = (h >>> 16) + (f >>> 16) + (m >>> 16);
                    (c = h >>> 16), d.__setDigit(e, (65535 & m) | (h << 16));
                  }
                  for (; e < a.length; e++) {
                    f = a.__digit(e);
                    m = (65535 & f) + c;
                    h = (f >>> 16) + (m >>> 16);
                    (c = h >>> 16), d.__setDigit(e, (65535 & m) | (h << 16));
                  }
                  return e < d.length && d.__setDigit(e, c), d.__trim();
                },
              },
              {
                key: "__absoluteSub",
                value: function (a, b, c) {
                  if (0 === a.length) return a;
                  if (0 === b.length) return a.sign === c ? a : g.unaryMinus(a);
                  for (
                    var c = new g(a.length, c), d = 0, e = 0;
                    e < b.length;
                    e++
                  ) {
                    var f = a.__digit(e),
                      l = b.__digit(e),
                      m = (65535 & f) - (65535 & l) - d;
                    d = 1 & (m >>> 16);
                    f = (f >>> 16) - (l >>> 16) - d;
                    (d = 1 & (f >>> 16)),
                      c.__setDigit(e, (65535 & m) | (f << 16));
                  }
                  for (; e < a.length; e++) {
                    l = a.__digit(e);
                    m = (65535 & l) - d;
                    d = 1 & (m >>> 16);
                    f = (l >>> 16) - d;
                    (d = 1 & (f >>> 16)),
                      c.__setDigit(e, (65535 & m) | (f << 16));
                  }
                  return c.__trim();
                },
              },
              {
                key: "__absoluteAddOne",
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length;
                  null === c ? (c = new g(d, b)) : (c.sign = b);
                  for (var e = !0, f = 0; f < d; f++) {
                    var k = a.__digit(f),
                      l = -1 === k;
                    e && (k = 0 | (k + 1)), (e = l), c.__setDigit(f, k);
                  }
                  return e && c.__setDigitGrow(d, 1), c;
                },
              },
              {
                key: "__absoluteSubOne",
                value: function (a, b) {
                  var c = a.length;
                  b = b || c;
                  for (var d = new g(b, !1), e = !0, f = 0; f < c; f++) {
                    var k = a.__digit(f),
                      l = 0 === k;
                    e && (k = 0 | (k - 1)), (e = l), d.__setDigit(f, k);
                  }
                  for (l = c; l < b; l++) d.__setDigit(l, 0);
                  return d;
                },
              },
              {
                key: "__absoluteAnd",
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), e, (b = m), n;
                  }
                  var k = f;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) & b.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: "__absoluteAndNot",
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  d < e && (f = d);
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) & ~b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: "__absoluteOr",
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), (d = e), (b = m), n;
                  }
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) | b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: "__absoluteXor",
                value: function (a, b) {
                  var c =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d = a.length,
                    e = b.length,
                    f = e;
                  if (d < e) {
                    f = d;
                    var m = a,
                      n = d;
                    (a = b), (d = e), (b = m), n;
                  }
                  var k = d;
                  null === c ? (c = new g(k, !1)) : (k = c.length);
                  for (var l = 0; l < f; l++)
                    c.__setDigit(l, a.__digit(l) ^ b.__digit(l));
                  for (; l < d; l++) c.__setDigit(l, a.__digit(l));
                  for (; l < k; l++) c.__setDigit(l, 0);
                  return c;
                },
              },
              {
                key: "__absoluteCompare",
                value: function (a, b) {
                  var c = a.length - b.length;
                  if (0 != c) return c;
                  for (
                    c = a.length - 1;
                    0 <= c && a.__digit(c) === b.__digit(c);

                  )
                    c--;
                  return 0 > c
                    ? 0
                    : a.__unsignedDigit(c) > b.__unsignedDigit(c)
                    ? 1
                    : -1;
                },
              },
              {
                key: "__multiplyAccumulate",
                value: function (a, b, c, d) {
                  if (0 !== b) {
                    for (
                      var e = 65535 & b,
                        b = b >>> 16,
                        f = 0,
                        g = 0,
                        k = 0,
                        l = 0;
                      l < a.length;
                      l++, d++
                    ) {
                      var m = c.__digit(d),
                        n = 65535 & m,
                        o = m >>> 16,
                        p = a.__digit(l),
                        q = 65535 & p;
                      p = p >>> 16;
                      var r = j(q, e);
                      q = j(q, b);
                      var s = j(p, e);
                      p = j(p, b);
                      (n += g + (65535 & r)),
                        (o +=
                          k +
                          f +
                          (n >>> 16) +
                          (r >>> 16) +
                          (65535 & q) +
                          (65535 & s)),
                        (f = o >>> 16),
                        (g = (q >>> 16) + (s >>> 16) + (65535 & p) + f),
                        (f = g >>> 16),
                        (g &= 65535),
                        (k = p >>> 16),
                        (m = (65535 & n) | (o << 16)),
                        c.__setDigit(d, m);
                    }
                    for (; 0 !== f || 0 !== g || 0 !== k; d++) {
                      r = c.__digit(d);
                      q = (65535 & r) + g;
                      s = (r >>> 16) + (q >>> 16) + k + f;
                      (g = 0),
                        (k = 0),
                        (f = s >>> 16),
                        (r = (65535 & q) | (s << 16)),
                        c.__setDigit(d, r);
                    }
                  }
                },
              },
              {
                key: "__internalMultiplyAdd",
                value: function (a, b, c, d, e) {
                  for (var c = c, f = 0, h = 0; h < d; h++) {
                    var l = a.__digit(h),
                      m = j(65535 & l, b),
                      n = (65535 & m) + f + c;
                    c = n >>> 16;
                    l = j(l >>> 16, b);
                    m = (65535 & l) + (m >>> 16) + c;
                    (c = m >>> 16),
                      (f = l >>> 16),
                      e.__setDigit(h, (m << 16) | (65535 & n));
                  }
                  if (e.length > d)
                    for (e.__setDigit(d++, c + f); d < e.length; )
                      e.__setDigit(d++, 0);
                  else if (0 !== c + f) throw new Error("implementation bug");
                },
              },
              {
                key: "__absoluteDivSmall",
                value: function (a, b, c) {
                  null === c && (c = new g(a.length, !1));
                  for (var d = 0, e = 2 * a.length - 1; 0 <= e; e -= 2) {
                    var f = ((d << 16) | a.__halfDigit(e)) >>> 0,
                      k = 0 | (f / b);
                    (d = 0 | f % b),
                      (f = ((d << 16) | a.__halfDigit(e - 1)) >>> 0);
                    var l = 0 | (f / b);
                    (d = 0 | f % b), c.__setDigit(e >>> 1, (k << 16) | l);
                  }
                  return c;
                },
              },
              {
                key: "__absoluteModSmall",
                value: function (a, b) {
                  for (var c, d = 0, e = 2 * a.length - 1; 0 <= e; e--)
                    (c = ((d << 16) | a.__halfDigit(e)) >>> 0), (d = 0 | c % b);
                  return d;
                },
              },
              {
                key: "__absoluteDivLarge",
                value: function (a, b, c, d) {
                  var f = b.__halfDigitLength(),
                    e = b.length,
                    n = a.__halfDigitLength() - f,
                    i = null;
                  c && ((i = new g((n + 2) >>> 1, !1)), i.__initializeDigits());
                  var l = new g((f + 2) >>> 1, !1);
                  l.__initializeDigits();
                  var m = g.__clz16(b.__halfDigit(f - 1));
                  0 < m && (b = g.__specialLeftShift(b, m, 0));
                  for (
                    var a = g.__specialLeftShift(a, m, 1),
                      k = b.__halfDigit(f - 1),
                      o = 0,
                      n = n;
                    0 <= n;
                    n--
                  ) {
                    var p = 65535,
                      q = a.__halfDigit(n + f);
                    if (q !== k) {
                      q = ((q << 16) | a.__halfDigit(n + f - 1)) >>> 0;
                      p = 0 | (q / k);
                      for (
                        var q = 0 | q % k,
                          r = b.__halfDigit(f - 2),
                          s = a.__halfDigit(n + f - 2);
                        j(p, r) >>> 0 > ((q << 16) | s) >>> 0 &&
                        (p--, (q += k), !(65535 < q));

                      );
                    }
                    g.__internalMultiplyAdd(b, p, 0, e, l);
                    r = a.__inplaceSub(l, n, f + 1);
                    0 !== r &&
                      ((r = a.__inplaceAdd(b, n, f)),
                      a.__setHalfDigit(n + f, a.__halfDigit(n + f) + r),
                      p--),
                      c &&
                        (1 & n ? (o = p << 16) : i.__setDigit(n >>> 1, o | p));
                  }
                  return d
                    ? (a.__inplaceRightShift(m),
                      c ? { quotient: i, remainder: a } : a)
                    : c
                    ? i
                    : void 0;
                },
              },
              {
                key: "__clz16",
                value: function (a) {
                  return k(a) - 16;
                },
              },
              {
                key: "__specialLeftShift",
                value: function (a, b, c) {
                  var e = a.length,
                    d = new g(e + c, !1);
                  if (0 === b) {
                    for (var f = 0; f < e; f++) d.__setDigit(f, a.__digit(f));
                    return 0 < c && d.__setDigit(e, 0), d;
                  }
                  for (var j, f = 0, l = 0; l < e; l++)
                    (j = a.__digit(l)),
                      d.__setDigit(l, (j << b) | f),
                      (f = j >>> (32 - b));
                  return 0 < c && d.__setDigit(e, f), d;
                },
              },
              {
                key: "__leftShiftByAbsolute",
                value: function (a, b) {
                  b = g.__toShiftAmount(b);
                  if (0 > b) throw new RangeError("BigInt too big");
                  var c = b >>> 5;
                  b = 31 & b;
                  var d = a.length,
                    e = 0 !== b && 0 != a.__digit(d - 1) >>> (32 - b),
                    f = d + c + (e ? 1 : 0),
                    m = new g(f, a.sign);
                  if (0 === b) {
                    for (var n = 0; n < c; n++) m.__setDigit(n, 0);
                    for (; n < f; n++) m.__setDigit(n, a.__digit(n - c));
                  } else {
                    for (n = 0, f = 0; f < c; f++) m.__setDigit(f, 0);
                    for (var o, f = 0; f < d; f++)
                      (o = a.__digit(f)),
                        m.__setDigit(f + c, (o << b) | n),
                        (n = o >>> (32 - b));
                    if (e) m.__setDigit(d + c, n);
                    else if (0 !== n) throw new Error("implementation bug");
                  }
                  return m.__trim();
                },
              },
              {
                key: "__rightShiftByAbsolute",
                value: function (a, b) {
                  var c = a.length,
                    d = a.sign;
                  b = g.__toShiftAmount(b);
                  if (0 > b) return g.__rightShiftByMaximum(d);
                  var e = b >>> 5;
                  b = 31 & b;
                  var f = c - e;
                  if (0 >= f) return g.__rightShiftByMaximum(d);
                  var i = !1;
                  if (d)
                    if (0 != (a.__digit(e) & ((1 << b) - 1))) i = !0;
                    else
                      for (var m = 0; m < e; m++)
                        if (0 !== a.__digit(m)) {
                          i = !0;
                          break;
                        }
                  if (i && 0 === b) {
                    m = a.__digit(c - 1);
                    0 == ~m && f++;
                  }
                  m = new g(f, d);
                  if (0 === b)
                    for (f = e; f < c; f++) m.__setDigit(f - e, a.__digit(f));
                  else {
                    for (
                      var n, d = a.__digit(e) >>> b, f = c - e - 1, c = 0;
                      c < f;
                      c++
                    )
                      (n = a.__digit(c + e + 1)),
                        m.__setDigit(c, (n << (32 - b)) | d),
                        (d = n >>> b);
                    m.__setDigit(f, d);
                  }
                  return i && (m = g.__absoluteAddOne(m, !0, m)), m.__trim();
                },
              },
              {
                key: "__rightShiftByMaximum",
                value: function (a) {
                  return a ? g.__oneDigit(1, !0) : g.__zero();
                },
              },
              {
                key: "__toShiftAmount",
                value: function (a) {
                  if (1 < a.length) return -1;
                  a = a.__unsignedDigit(0);
                  return a > g.__kMaxLengthBits ? -1 : a;
                },
              },
              {
                key: "__toPrimitive",
                value: function (b) {
                  var c =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : "default";
                  if ("object" !== a(b)) return b;
                  if (b.constructor === g) return b;
                  var d = b[Symbol.toPrimitive];
                  if (d) {
                    var e = d(c);
                    if ("object" !== a(e)) return e;
                    throw new TypeError(
                      "Cannot convert object to primitive value"
                    );
                  }
                  var f = b.valueOf;
                  if (f) {
                    var k = f.call(b);
                    if ("object" !== a(k)) return k;
                  }
                  var l = b.toString;
                  if (l) {
                    var m = l.call(b);
                    if ("object" !== a(m)) return m;
                  }
                  throw new TypeError(
                    "Cannot convert object to primitive value"
                  );
                },
              },
              {
                key: "__toNumeric",
                value: function (a) {
                  return g.__isBigInt(a) ? a : +a;
                },
              },
              {
                key: "__isBigInt",
                value: function (b) {
                  return "object" === a(b) && b.constructor === g;
                },
              },
              {
                key: "__truncateToNBits",
                value: function (a, b) {
                  for (
                    var c = (a + 31) >>> 5,
                      d = new g(c, b.sign),
                      c = c - 1,
                      e = 0;
                    e < c;
                    e++
                  )
                    d.__setDigit(e, b.__digit(e));
                  e = b.__digit(c);
                  if (0 != (31 & a)) {
                    b = 32 - (31 & a);
                    e = (e << b) >>> b;
                  }
                  return d.__setDigit(c, e), d.__trim();
                },
              },
              {
                key: "__truncateAndSubFromPowerOfTwo",
                value: function (a, b, c) {
                  for (
                    var d = Math.min,
                      e = (a + 31) >>> 5,
                      c = new g(e, c),
                      f = 0,
                      e = e - 1,
                      h = 0,
                      d = d(e, b.length);
                    f < d;
                    f++
                  ) {
                    var j = b.__digit(f),
                      l = 0 - (65535 & j) - h;
                    h = 1 & (l >>> 16);
                    j = 0 - (j >>> 16) - h;
                    (h = 1 & (j >>> 16)),
                      c.__setDigit(f, (65535 & l) | (j << 16));
                  }
                  for (; f < e; f++) c.__setDigit(f, 0 | -h);
                  l = e < b.length ? b.__digit(e) : 0;
                  j = 31 & a;
                  if (0 === j) {
                    d = 0 - (65535 & l) - h;
                    h = 1 & (d >>> 16);
                    f = 0 - (l >>> 16) - h;
                    b = (65535 & d) | (f << 16);
                  } else {
                    a = 32 - j;
                    l = (l << a) >>> a;
                    d = 1 << (32 - a);
                    f = (65535 & d) - (65535 & l) - h;
                    h = 1 & (f >>> 16);
                    j = (d >>> 16) - (l >>> 16) - h;
                    (b = (65535 & f) | (j << 16)), (b &= d - 1);
                  }
                  return c.__setDigit(e, b), c.__trim();
                },
              },
              {
                key: "__digitPow",
                value: function (a, b) {
                  for (var c = 1; 0 < b; )
                    1 & b && (c *= a), (b >>>= 1), (a *= a);
                  return c;
                },
              },
            ]
          ),
          g
        );
      })(k(Array));
      return (
        (n.__kMaxLength = 33554432),
        (n.__kMaxLengthBits = n.__kMaxLength << 5),
        (n.__kMaxBitsPerChar = [
          0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126,
          128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156,
          158, 159, 160, 162, 163, 165, 166,
        ]),
        (n.__kBitsPerCharTableShift = 5),
        (n.__kBitsPerCharTableMultiplier = 1 << n.__kBitsPerCharTableShift),
        (n.__kConversionChars = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ]),
        (n.__kBitConversionBuffer = new ArrayBuffer(8)),
        (n.__kBitConversionDouble = new Float64Array(n.__kBitConversionBuffer)),
        (n.__kBitConversionInts = new Int32Array(n.__kBitConversionBuffer)),
        n
      );
    });
  },
  null
);
__d(
  "TCompactProtocolPolyfill",
  ["StringToUtf8", "ThriftTypes", "Utf8ToString", "jsbi"],
  function (a, b, c, d, e, f, g) {
    var h = Object.freeze({
        CT_STOP: 0,
        CT_BOOLEAN_TRUE: 1,
        CT_BOOLEAN_FALSE: 2,
        CT_BYTE: 3,
        CT_I16: 4,
        CT_I32: 5,
        CT_I64: 6,
        CT_DOUBLE: 7,
        CT_BINARY: 8,
        CT_LIST: 9,
        CT_SET: 10,
        CT_MAP: 11,
        CT_STRUCT: 12,
        CT_FLOAT: 13,
      }),
      i = Object.freeze({
        NONE: -1,
        CT_BOOLEAN_TRUE: h.CT_BOOLEAN_TRUE,
        CT_BOOLEAN_FALSE: h.CT_BOOLEAN_FALSE,
      }),
      j = [
        h.CT_STOP,
        0,
        h.CT_BOOLEAN_TRUE,
        h.CT_BYTE,
        h.CT_DOUBLE,
        0,
        h.CT_I16,
        0,
        h.CT_I32,
        0,
        h.CT_I64,
        h.CT_BINARY,
        h.CT_STRUCT,
        h.CT_MAP,
        h.CT_SET,
        h.CT_LIST,
        0,
        0,
        0,
        h.CT_FLOAT,
      ],
      k = Math.pow(2, 7) - 1,
      l = -1 * Math.pow(2, 7),
      m = Math.pow(2, 15) - 1,
      n = -1 * Math.pow(2, 15),
      o = Math.pow(2, 31) - 1,
      p = -1 * Math.pow(2, 31),
      q = Math.pow(2, 32) - 1,
      r = c("jsbi").BigInt("9223372036854775807"),
      s = c("jsbi").BigInt("-9223372036854775808"),
      t = c("jsbi").BigInt("18446744073709551615"),
      u = c("jsbi").BigInt(63),
      v = c("jsbi").BigInt(1),
      w = c("jsbi").BigInt(0),
      x = c("jsbi").BigInt(7),
      y = c("jsbi").BigInt(70),
      z = c("jsbi").BigInt(127),
      A = c("jsbi").BigInt(128),
      B = Math.pow(2, 4);
    a = (function () {
      function a(a) {
        (this.$4 = null),
          (this.$5 = null),
          (this.$1 = a),
          (this.$2 = []),
          (this.$3 = 0),
          (this.$6 = new DataView(new ArrayBuffer(1)));
      }
      var b = a.prototype;
      b.readStructBegin = function () {
        this.$2.push(this.$3), (this.$3 = 0);
      };
      b.readStructEnd = function () {
        this.$3 = this.$2.pop();
        return 0;
      };
      b.writeStructBegin = function (a) {
        this.$2.push(this.$3);
        this.$3 = 0;
        return 0;
      };
      b.writeStructEnd = function () {
        this.$3 = this.$2.pop();
        return 0;
      };
      b.writeFieldBegin = function (a) {
        if (a.ftype === c("ThriftTypes").BOOL) {
          this.$4 = { fid: a.fid, fname: a.fname, ftype: a.ftype };
          return 0;
        } else return this.$7(a, i.NONE);
      };
      b.writeListBegin = function (a) {
        return this.$8(a);
      };
      b.writeListEnd = function () {
        return 0;
      };
      b.writeSetBegin = function (a) {
        return this.$8(a);
      };
      b.writeSetEnd = function () {
        return 0;
      };
      b.writeMapBegin = function (a) {
        var b = 0;
        if (a.size === 0) b += this.$1.writeByte(0);
        else {
          b += this.writeVarint32(a.size);
          if (a.ktype != null && a.vtype != null)
            b += this.$1.writeByte((this.$9(a.ktype) << 4) | this.$9(a.vtype));
          else
            throw new Error("received invalid map info: " + JSON.stringify(a));
        }
        return b;
      };
      b.writeMapEnd = function () {
        return 0;
      };
      b.$7 = function (a, b) {
        var c = 0;
        b = b === i.NONE ? this.$9(a.ftype) : b;
        a.fid > this.$3 && a.fid - this.$3 <= B - 1
          ? (c += this.$1.writeByte(((a.fid - this.$3) << 4) | b))
          : ((c += this.$1.writeByte(b)), (c += this.writeI16(a.fid)));
        this.$3 = a.fid;
        return c;
      };
      b.$8 = function (a) {
        var b = 0,
          c = this.$9(a.etype);
        a.size <= B - 2
          ? (b += this.$1.writeByte((a.size << 4) | c))
          : ((b += this.$1.writeByte(240 | c)),
            (b += this.writeVarint32(a.size)));
        return b;
      };
      b.readFieldBegin = function () {
        var a = this.$1.readByte(),
          b = a & 15;
        if (b === c("ThriftTypes").STOP)
          return { ftype: c("ThriftTypes").STOP, fid: 0 };
        a = (a & 240) >>> 4;
        var d;
        a === 0 ? (d = this.readI16()) : (d = this.$3 + a);
        a = this.$10(b);
        (b === h.CT_BOOLEAN_TRUE || b === h.CT_BOOLEAN_FALSE) &&
          (this.$5 = b === h.CT_BOOLEAN_TRUE);
        this.$3 = d;
        return { ftype: a, fid: d };
      };
      b.readListBegin = function () {
        return this.$11();
      };
      b.readListEnd = function () {
        return 0;
      };
      b.readSetBegin = function () {
        return this.$11();
      };
      b.readSetEnd = function () {
        return 0;
      };
      b.readMapBegin = function () {
        var a = this.readVarint32();
        if (a > 0) {
          var b = this.$1.readByte(),
            c = this.$12(b >> 4, "readMapBegin:key");
          b = this.$12(b & 15, "readMapBegin:value");
          return { ktype: this.$10(c), vtype: this.$10(b), size: a };
        }
        return { size: a };
      };
      b.readMapEnd = function () {
        return 0;
      };
      b.$12 = function (a, b) {
        if (a < 0 || a > 13)
          throw new Error(b + " read invalid compact type: " + a);
        return a;
      };
      b.$11 = function () {
        var a = this.$1.readByte(),
          b = this.$12(a & 15, "_readListOrSetBegin");
        b = this.$10(b);
        a = (a >> 4) & 15;
        a === 15 && (a = this.readVarint32());
        return { etype: b, size: a };
      };
      b.readFieldEnd = function () {
        return 0;
      };
      b.readByte = function () {
        this.$6.setUint8(0, this.$1.readByte());
        return this.$6.getInt8(0);
      };
      b.writeByte = function (a) {
        if (a < l || a > k)
          throw new Error("byte to write is out of range: " + a);
        this.$6.setInt8(0, a);
        return this.$1.writeByte(this.$6.getUint8(0));
      };
      b.readFloat = function () {
        return this.$1.readFloatBE();
      };
      b.writeFloat = function (a) {
        return this.$1.writeFloatBE(a);
      };
      b.readDouble = function () {
        return this.$1.readDoubleBE();
      };
      b.writeDouble = function (a) {
        return this.$1.writeDoubleBE(a);
      };
      b.writeString = function (a) {
        return this.writeBinary(d("StringToUtf8").StringToUtf8(a));
      };
      b.skip = function (a) {
        switch (a) {
          case c("ThriftTypes").STOP:
            return;
          case c("ThriftTypes").BOOL:
            this.readBool();
            break;
          case c("ThriftTypes").BYTE:
            this.readByte();
            break;
          case c("ThriftTypes").DOUBLE:
            this.readDouble();
            break;
          case c("ThriftTypes").I16:
            this.readI16();
            break;
          case c("ThriftTypes").I32:
            this.readI32();
            break;
          case c("ThriftTypes").I64:
            this.readI64();
            break;
          case c("ThriftTypes").STRING:
            this.readString();
            break;
          case c("ThriftTypes").STRUCT:
            this.readStructBegin();
            var b;
            while (!0) {
              b = this.readFieldBegin();
              if (b.ftype === c("ThriftTypes").STOP) break;
              this.skip(b.ftype);
            }
            this.readStructEnd();
            break;
          case c("ThriftTypes").MAP:
            b = this.readMapBegin();
            if (b.size > 0 && b.ktype != null && b.vtype != null) {
              var d = b.ktype,
                e = b.vtype;
              for (var f = 0; f < b.size; f++) this.skip(d), this.skip(e);
            }
            break;
          case c("ThriftTypes").SET:
          case c("ThriftTypes").LIST:
            f = this.$11();
            for (d = 0; d < f.size; d++) this.skip(f.etype);
            break;
          case c("ThriftTypes").FLOAT:
            this.readFloat();
            break;
          default:
            throw new Error("encoutered unknow thrift type: " + a + " in skip");
        }
      };
      b.toByteArray = function () {
        return this.$1.toByteArray();
      };
      b.writeFieldEnd = function () {
        return 0;
      };
      b.writeFieldStop = function () {
        return this.$1.writeByte(c("ThriftTypes").STOP);
      };
      b.writeI16 = function (a) {
        if (a < n || a > m)
          throw new Error("trying to write i16 out of range: " + a);
        return this.writeVarint32(this.i32ToZigzag(a));
      };
      b.readI16 = function () {
        var a = this.zigzagToI32(this.readVarint32());
        if (a < n || a > m) throw new Error("read invalid i16: " + a);
        return a;
      };
      b.writeI32 = function (a) {
        if (a < p || a > o) throw new Error("i32 out of range: " + a);
        return this.writeVarint32(this.i32ToZigzag(a));
      };
      b.readI32 = function () {
        return this.zigzagToI32(this.readVarint32());
      };
      b.writeI64 = function (a) {
        return this.writeVarint64(this.i64ToZigzag(a));
      };
      b.readI64 = function () {
        return this.zigzagToI64(this.readVarint64());
      };
      b.readBool = function () {
        var a;
        this.$5 != null
          ? ((a = this.$5), (this.$5 = null))
          : (a = this.$1.readByte() === h.CT_BOOLEAN_TRUE);
        return a;
      };
      b.writeBool = function (a) {
        var b = 0;
        this.$4 != null
          ? ((b += this.$7(
              this.$4,
              a ? i.CT_BOOLEAN_TRUE : i.CT_BOOLEAN_FALSE
            )),
            (this.$4 = null))
          : (b += this.$1.writeByte(
              a ? h.CT_BOOLEAN_TRUE : h.CT_BOOLEAN_FALSE
            ));
        return b;
      };
      b.readBinary = function () {
        var a = this.readVarint32();
        return a === 0 ? new Uint8Array(0) : this.$1.readBytes(a);
      };
      b.writeBinary = function (a) {
        var b = 0;
        b += this.writeVarint32(a.length);
        b += this.$1.write(a);
        return b;
      };
      b.i32ToZigzag = function (a) {
        if (a < p || a > o)
          throw new Error("number: " + a + " is out of range of i32");
        return ((a << 1) ^ (a < 0 ? 4294967295 : 0)) >>> 0;
      };
      b.zigzagToI32 = function (a) {
        if (a < 0 || a > q)
          throw new Error("number: " + a + " is out of range of uint32");
        return (a >>> 1) ^ (-1 * (a & 1));
      };
      b.i64ToZigzag = function (a) {
        if (c("jsbi").greaterThan(a, r) || c("jsbi").lessThan(a, s))
          throw new Error("i64 out of range: " + a.toString());
        return c("jsbi").bitwiseXor(
          c("jsbi").signedRightShift(a, u),
          c("jsbi").leftShift(a, v)
        );
      };
      b.zigzagToI64 = function (a) {
        if (c("jsbi").lessThan(a, 0) || c("jsbi").greaterThan(a, t))
          throw new Error("invalid uint64: " + a.toString());
        return c("jsbi").equal(c("jsbi").bitwiseAnd(a, v), v)
          ? c("jsbi").bitwiseNot(c("jsbi").signedRightShift(a, v))
          : c("jsbi").signedRightShift(a, v);
      };
      b.writeVarint32 = function (a) {
        if (a < 0 || a > q)
          throw new Error("writeVarint32 received out of range uint32: " + a);
        a = a;
        var b = 0;
        while (!0)
          if (a >>> 7 === 0) {
            this.$1.writeByte(a);
            b++;
            break;
          } else this.$1.writeByte((a & 127) | 128), b++, (a >>>= 7);
        return b;
      };
      b.readVarint32 = function () {
        var a = 0,
          b = 0,
          c;
        while (!0) {
          c = this.$1.readByte();
          a = (a | ((c & 127) << b)) >>> 0;
          b += 7;
          if ((c & 128) == 0) {
            if (b === 35 && (c & 240) != 0)
              throw new Error("result exceeded 32 bit limit");
            break;
          }
          if (b > 28) throw new Error("result exceeded 32 bit limit");
        }
        return a;
      };
      b.writeVarint64 = function (a) {
        if (c("jsbi").lessThan(a, w) || c("jsbi").greaterThan(a, t))
          throw new Error("invalid uint64: " + a.toString());
        a = a;
        var b = 0;
        while (!0)
          if (c("jsbi").equal(c("jsbi").signedRightShift(a, x), w)) {
            this.$1.writeByte(c("jsbi").toNumber(a));
            b++;
            break;
          } else {
            var d = c("jsbi").toNumber(
              c("jsbi").bitwiseOr(c("jsbi").bitwiseAnd(a, z), A)
            );
            this.$1.writeByte(d);
            b++;
            a = c("jsbi").signedRightShift(a, x);
          }
        return b;
      };
      b.readVarint64 = function () {
        var a = w,
          b = w,
          d;
        while (!0) {
          d = c("jsbi").BigInt(this.$1.readByte());
          a = c("jsbi").bitwiseOr(
            a,
            c("jsbi").leftShift(c("jsbi").bitwiseAnd(d, z), b)
          );
          b = c("jsbi").add(b, x);
          if (c("jsbi").equal(c("jsbi").bitwiseAnd(d, A), w)) {
            if (c("jsbi").equal(b, y) && c("jsbi").notEqual(d, v))
              throw new Error("result exceeded 64 bit limit");
            break;
          }
          if (c("jsbi").greaterThan(b, u))
            throw new Error("result exceeded 64 bit limit");
        }
        return a;
      };
      b.readString = function () {
        return d("Utf8ToString").Utf8ToString(this.readBinary());
      };
      b.getLastFieldId = function () {
        return this.$3;
      };
      b.getLastField = function () {
        return this.$2;
      };
      b.getBooleanFieldInfo = function () {
        return this.$4;
      };
      b.getBooleanValue = function () {
        return this.$5;
      };
      b.$9 = function (a) {
        return j[a];
      };
      b.$10 = function (a) {
        switch (a) {
          case h.CT_STOP:
            return c("ThriftTypes").STOP;
          case h.CT_BOOLEAN_FALSE:
          case h.CT_BOOLEAN_TRUE:
            return c("ThriftTypes").BOOL;
          case h.CT_BYTE:
            return c("ThriftTypes").BYTE;
          case h.CT_I16:
            return c("ThriftTypes").I16;
          case h.CT_I32:
            return c("ThriftTypes").I32;
          case h.CT_I64:
            return c("ThriftTypes").I64;
          case h.CT_DOUBLE:
            return c("ThriftTypes").DOUBLE;
          case h.CT_FLOAT:
            return c("ThriftTypes").FLOAT;
          case h.CT_BINARY:
            return c("ThriftTypes").STRING;
          case h.CT_LIST:
            return c("ThriftTypes").LIST;
          case h.CT_SET:
            return c("ThriftTypes").SET;
          case h.CT_MAP:
            return c("ThriftTypes").MAP;
          case h.CT_STRUCT:
            return c("ThriftTypes").STRUCT;
          default:
            throw new Error("don't know what type");
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TNoOpWriteBuffer",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {
        this.$1 = 0;
      }
      var b = a.prototype;
      b.write = function (a) {
        this.$1 += a.length;
        return a.length;
      };
      b.writeByte = function (a) {
        this.$1++;
        return 1;
      };
      b.writeFloatBE = function (a) {
        this.$1 += Float32Array.BYTES_PER_ELEMENT;
        return Float32Array.BYTES_PER_ELEMENT;
      };
      b.writeDoubleBE = function (a) {
        this.$1 += Float64Array.BYTES_PER_ELEMENT;
        return Float64Array.BYTES_PER_ELEMENT;
      };
      b.toByteArray = function () {
        throw new Error("operation not supported");
      };
      b.currentSize = function () {
        return this.$1;
      };
      b.readByte = function () {
        throw new Error("operation not supported");
      };
      b.readBytes = function (a) {
        throw new Error("operation not supported");
      };
      b.readFloatBE = function () {
        throw new Error("operation not supported");
      };
      b.readDoubleBE = function () {
        throw new Error("operation not supported");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "TReadBuffer",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        (this.$1 = a), (this.$2 = 0);
      }
      var b = a.prototype;
      b.readByte = function () {
        if (this.$2 < this.$1.length) return this.$1[this.$2++];
        throw new Error("no available byte to read");
      };
      b.readBytes = function (a) {
        if (a < 0) throw new Error("cannot readBytes of negative length: " + a);
        if (a + this.$2 > this.$1.length)
          throw new Error("not enough bytes to read");
        var b = new Uint8Array(this.$1.buffer, this.$3(), a);
        this.$2 += a;
        return b;
      };
      b.readFloatBE = function () {
        if (Float32Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length)
          throw new Error("not enough bytes to read");
        var a = new DataView(this.$1.buffer).getFloat32(this.$3());
        this.$2 += Float32Array.BYTES_PER_ELEMENT;
        return a;
      };
      b.readDoubleBE = function () {
        if (Float64Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length)
          throw new Error("not enough bytes to read");
        var a = new DataView(this.$1.buffer).getFloat64(this.$3());
        this.$2 += Float64Array.BYTES_PER_ELEMENT;
        return a;
      };
      b.$3 = function () {
        return this.$2 + this.$1.byteOffset;
      };
      b.getCurrentCursor = function () {
        return this.$2;
      };
      b.writeByte = function (a) {
        throw new Error("operation not supported");
      };
      b.write = function (a) {
        throw new Error("operation not supported");
      };
      b.toByteArray = function () {
        throw new Error("operation not supported");
      };
      b.writeFloatBE = function (a) {
        throw new Error("operation not supported");
      };
      b.writeDoubleBE = function (a) {
        throw new Error("operation not supported");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "CompactSerializerPolyfill",
  [
    "TCompactProtocolPolyfill",
    "TNoOpWriteBuffer",
    "TReadBuffer",
    "TWriteBuffer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      a = new (c("TReadBuffer"))(a);
      a = new (c("TCompactProtocolPolyfill"))(a);
      return b(a);
    }
    function a(a, b, c) {
      try {
        return h(a, b);
      } catch (a) {
        c != null && c(a);
      }
      return null;
    }
    function i(a, b, d) {
      d === void 0 && (d = !1);
      if (d) {
        d = new (c("TNoOpWriteBuffer"))();
        var e = new (c("TCompactProtocolPolyfill"))(d);
        b(a, e);
        e = new (c("TWriteBuffer"))(d.currentSize());
      } else e = new (c("TWriteBuffer"))();
      d = new (c("TCompactProtocolPolyfill"))(e);
      b(a, d);
      return d.toByteArray();
    }
    function b(a, b, c, d) {
      c === void 0 && (c = !1);
      try {
        return i(a, b, c);
      } catch (a) {
        d != null && d(a);
      }
      return null;
    }
    g.deserialize = h;
    g.deserializeNoThrow = a;
    g.serialize = i;
    g.serializeNoThrow = b;
  },
  98
);
__d(
  "ContextualConfigConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 1e3;
    b = ", ";
    c = {
      SAME: "same",
      NULL: "null",
      NNULL: "nnull",
      CATCH_ALL: "catch_all",
      EQ: "eq",
      NEQ: "neq",
      LT: "lt",
      LTE: "lte",
      GT: "gt",
      GTE: "gte",
      COR: "cor",
      CONTAINS: "contains",
      REGEX: "regex",
      IN: "in",
      NIN: "nin",
    };
    d = {
      DENSE: "dense",
      MULTI_OUTPUT_RESOLVED: "multi-output-resolved",
      TABLE: "table",
    };
    e = [];
    var g = [],
      h = [],
      i = {
        BAD_BOOLEAN_FORMAT: "Bad boolean format",
        BAD_CONFIG: "Bad config",
        BAD_CONTEXT_IDENTIFIER: "Bad context identifier",
        BAD_CONTEXT_VALUE: "Bad context value",
        BAD_MONITORED_CONTEXTS: "Bad monitored contexts",
        BAD_NUMBER_FORMAT: "Bad number format",
        BAD_OUTPUT_NAME: "Bad output name",
        BAD_OUTPUT_TYPE: "Bad output type",
        BAD_VALUE_ORDER: "Bad values order",
        DUPLICATE_OUTPUT_NAME: "Duplicate output name",
        ILLEGAL_BOOLEAN_STRATEGY: "Illegal boolean strategy",
        ILLEGAL_BUCKET_VALUES: "Illegal bucket values",
        ILLEGAL_NUMERIC_STRATEGY: "Illegal numeric strategy",
        ILLEGAL_STRING_STRATEGY: "Illegal string strategy",
        INVALID_BOOLEAN: "Invalid boolean",
        INVALID_FLOAT: "Invalid float",
        INVALID_INTEGER: "Invalid integer",
        INVALID_STRING: "Invalid string",
        INVALID_VALUE_TYPE: "Invalid value type",
        MISMATCH_NUMBER_OF_VALUES: "Mismatching number of values",
        MISSING_BUCKETS: "Missing buckets",
        MISSING_BUCKET_MATCH: "Missing bucket match",
        MISSING_BUCKET_NAME: "Missing bucket name",
        MISSING_BUCKET_STRATEGY: "Missing bucket strategy",
        MISSING_CONTEXT_IN_CONFIG: "Missing context in config",
        MISSING_DEFAULT_VALUE: "Missing default value",
        MISSING_OUTPUTS_DEFINITION: "Missing outputs field definition",
        MISSING_RESULTS: "Missing results",
        MISSING_TABLE: "Missing table",
        MISSING_TABLE_ITEM_BUCKET: "Missing table item bucket",
        MISSING_TABLE_ITEM_VALUES: "Missing table item values",
        MISSING_VECTOR: "Missing vector",
        REGEX_SYNTAX_ERROR: "Regex syntax error",
        REQUESTED_PARAM_NOT_FOUND: "Requested param not found",
        RESULTS_VECTOR_SIZE_MISMATCH: "Results vector size mismatch",
        UNDECLARED_OUTPUT_PARAM: "Undeclared output param",
        UNKNOWN_BUCKET_DEFINITION: "Unknown bucket definition",
        UNKNOWN_CONFIG_TYPE: "Unknown config type",
        UNSUPPORTED_CONFIG_VERSION: "Unsupported config version",
      },
      j = 10,
      k = ", ",
      l = { BOOL: "BOOL", FLOAT: "FLOAT", INT: "INT", STRING: "STRING" };
    f.ANALYTICS_SAMPLE_RATE = a;
    f.BUCKET_DELIMITER = b;
    f.CONTEXT_BUCKET_STRATEGY = c;
    f.CONFIG_TYPE = d;
    f.EMPTY_RESOLVED_CONTEXTS = e;
    f.EMPTY_RESOLVED_MONITORS = g;
    f.EMPTY_RESULT_PARAMS = h;
    f.ERROR = i;
    f.JSON_SUB_SAMPLE_RATE = j;
    f.LIST_DELIMITER = k;
    f.TYPE = l;
  },
  66
);
__d(
  "ContextualConfigValidators",
  ["ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      return Array.isArray(a);
    };
    b = function (a) {
      return typeof a === "boolean";
    };
    c = function (a) {
      return a != null;
    };
    e = function (a) {
      return function (b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      };
    };
    f = function (a) {
      return i(a) && a % 1 === 0;
    };
    var h = function (a) {
        return j(a) && a.length > 0;
      },
      i = function (a) {
        return (
          typeof a === "number" &&
          !isNaN(a) &&
          a !== Infinity &&
          a !== -Infinity
        );
      },
      j = function (a) {
        return typeof a === "string";
      },
      k = function (a) {
        switch (a) {
          case d("ContextualConfigConstants").TYPE.BOOL:
          case d("ContextualConfigConstants").TYPE.FLOAT:
          case d("ContextualConfigConstants").TYPE.INT:
          case d("ContextualConfigConstants").TYPE.STRING:
            return !0;
          default:
            return !1;
        }
      };
    g.isArray = a;
    g.isBoolean = b;
    g.isDefined = c;
    g.isKey = e;
    g.isInteger = f;
    g.isNonEmptyString = h;
    g.isNumber = i;
    g.isString = j;
    g.isType = k;
  },
  98
);
__d(
  "MarauderLogger",
  ["Banzai", "CacheStorage", "MarauderConfig"],
  function (a, b, c, d, e, f) {
    var g = "client_event",
      h = "navigation",
      i = 18e4,
      j = "marauder",
      k = "marauder_last_event_time",
      l = "marauder_last_session_id",
      m = {},
      n = [],
      o = !1,
      p = null,
      q = null,
      r = null,
      s = 0,
      t,
      u,
      v = !1,
      w = null;
    function a() {
      F().set(k, x());
    }
    b("Banzai").subscribe(b("Banzai").SHUTDOWN, a);
    function x() {
      t = t || F().get(k) || 0;
      return t;
    }
    function y() {
      v || ((u = F().get(l)), (v = !0));
      var a = Date.now();
      (!u || a - i > x()) &&
        ((u =
          a.toString(16) + "-" + (~~(Math.random() * 16777215)).toString(16)),
        F().set(l, u));
      return u;
    }
    function z() {
      return {
        user_agent: window.navigator.userAgent,
        screen_height: window.screen.availHeight,
        screen_width: window.screen.availWidth,
        density: window.screen.devicePixelRatio || null,
        platform: window.navigator.platform || null,
        locale: window.navigator.language || null,
      };
    }
    function A() {
      return { locale: navigator.language };
    }
    function B(a, b, c, d, e, f, g) {
      var h = g != null && g != 0 ? g : Date.now();
      t = g != null && g != 0 ? Date.now() : h;
      g = b != null && b != "" ? b : p;
      return {
        name: a,
        time: h / 1e3,
        module: g,
        obj_type: d,
        obj_id: e,
        uuid: f,
        extra: c,
      };
    }
    function C(a, b, c) {
      return B("content", null, { flags: b }, null, null, a, c);
    }
    function D(a) {
      var b = window.__mrdr;
      if (b)
        for (var c in b) {
          var d = b[c];
          if (d[3] !== 0) {
            delete b[c];
            if (c === "1")
              if (r !== null) c = r;
              else continue;
            a.push(C(c, 1, d[1]));
            a.push(C(c, 2, d[2]));
            a.push(C(c, 3, d[3]));
          }
        }
    }
    function E(a, c) {
      D(a);
      if (a.length === 0) return;
      o && a.push(B("counters", null, m));
      var d = b("Banzai").BASIC;
      c === "vital" && (d = b("Banzai").VITAL);
      var e = b("MarauderConfig").gk_enabled;
      s === 0 &&
        e &&
        (a.push(B("device_status", null, A())), (d = { delay: 5e3 }));
      c === "signal" && (d = { signal: !0 });
      e && Math.random() < 0.01 && a.push(B("device_info", null, z()));
      if (r !== null)
        for (c = 0; c < a.length; c++) {
          e = a[c];
          (e.uuid === null || e.uuid === void 0) && (e.uuid = r);
        }
      e = {
        app_ver: b("MarauderConfig").app_version,
        data: a,
        device_id: void 0,
        log_type: g,
        seq: s++,
        session_id: y(),
      };
      c = F().get("device_id");
      c && (e.device_id = c);
      m = {};
      o = !1;
      b("Banzai").post(j, e, d);
    }
    function F() {
      w || (w = new (b("CacheStorage"))("localstorage", ""));
      return w;
    }
    function c(a) {
      m[a] || (m[a] = 0), m[a]++, (o = !0);
    }
    function G(b, a, c, d, f, g, h, i) {
      E([B(b, a, c, d, f, g, h)], i);
    }
    function H(a, b) {
      p !== b &&
        (n.push(B(h, p, { dest_module: b, source_url: q, destination_url: a })),
        (p = b),
        (q = a));
    }
    function d(a, b) {
      p !== b && ((r = null), H(a, b));
    }
    function f(a, b, c) {
      G(b ? "show_module" : "hide_module", a, c);
    }
    function I(a) {
      p = a;
    }
    function J() {
      return p;
    }
    function K(a) {
      r === null && ((r = a), a !== null && (E(n), (n = [])));
    }
    e.exports = {
      count: c,
      log: G,
      navigateTo: d,
      navigateWithinSession: H,
      toggleModule: f,
      setUUID: K,
      setNavigationModule: I,
      getNavigationModule: J,
    };
  },
  null
);
__d(
  "EventProfilerSham",
  [],
  function (a, b, c, d, e, f) {
    a = {
      __wrapEventListenHandler: function (a) {
        return a;
      },
      tagCurrentActiveInteractionsAs: function (a) {},
      setCurrentAdAccountId: function (a) {},
      setAdsConfig: function (a) {},
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "exponentialBackoff",
  ["MqttEnv"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b === void 0 && (b = null);
      var c = null,
        e = 0;
      function f() {
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        var i = function () {
          a.apply(b, g);
        };
        if (c === null) {
          var j = Math.max(
            0,
            Math.pow(2, Math.min(e, 6)) *
              (1e3 + d("MqttEnv").Env.random() * 100) -
              2e3
          );
          c = d("MqttEnv").Env.setTimeout(function () {
            i(), (c = null);
          }, j);
        }
        e++;
      }
      f.reset = function () {
        (e = 0), c != null && (d("MqttEnv").Env.clearTimeout(c), (c = null));
      };
      f.isPending = function () {
        return c != null;
      };
      return f;
    }
    g["default"] = a;
  },
  98
);
