/*FB_PKG_DELIM*/

__d(
  "CometGlobalPanelGating.entrypointutils",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return Boolean(c("qex")._("19"));
    }
    function b() {
      var a;
      return (a = c("qex")._("245")) != null ? a : !1;
    }
    g.isGlobalPanelEnabled = a;
    g.shouldUseBookmarkRanking = b;
  },
  98
);
__d(
  "CometGlobalPanelGating",
  ["CometGlobalPanelGating.entrypointutils", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a;
      return (a = c("qex")._("296")) != null ? a : !0;
    }
    g.isGlobalPanelEnabled = d(
      "CometGlobalPanelGating.entrypointutils"
    ).isGlobalPanelEnabled;
    g.shouldShowGroupsInGlobalPanel = a;
  },
  98
);
__d(
  "BaseSvgImage.react",
  ["react", "useFeedImageErrorEventLoggerCbs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.onError,
        d = a.src,
        e = a.testid;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        "onError",
        "src",
        "testid",
      ]);
      a = c("useFeedImageErrorEventLoggerCbs")({ onError: b, src: d });
      b = a._onError;
      a = a._onLoad;
      var f = j(null),
        g = j(d);
      i(
        function () {
          f.current &&
            f.current.getAttribute("xlink:href") !== g.current &&
            f.current.setAttribute("xlink:href", g.current);
        },
        [f, g]
      );
      return h.jsx(
        "image",
        babelHelpers["extends"]({}, e, {
          "data-testid": void 0,
          height: "100%",
          onError: b,
          onLoad: a,
          preserveAspectRatio: "xMidYMid slice",
          ref: f,
          width: "100%",
          xlinkHref: d,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseToastAnimationInternal.react",
  [
    "react",
    "stylex",
    "useFadeEffect",
    "useMergeRefs",
    "useToasterStateManager",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useState,
      l = 100,
      m = {
        mount: {
          opacity: "x1hc1fzr",
          transform: "x3oybdh",
          transitionDuration: "xu6gjpd",
          transitionTimingFunction: "x7lz9yc",
          $$css: !0,
        },
        root: {
          opacity: "xg01cxk",
          transform: "xswo3hg",
          transitionDuration: "x16rnrhc",
          transitionProperty: "xwcsmn1",
          transitionTimingFunction: "xbxq160",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.expired;
      d = d === void 0 ? !1 : d;
      var e = a.id,
        f = a.position;
      a = a.xstyle;
      var g = k(!1),
        n = g[0],
        o = g[1],
        p = c("useToasterStateManager")(),
        q = h.Children.only(b);
      g = i(
        function () {
          p.resetTimer(e);
        },
        [e, p]
      );
      b = i(
        function () {
          p.stopTimer(e);
        },
        [e, p]
      );
      var r = i(
          function () {
            p.shown(e);
          },
          [e, p]
        ),
        s = i(
          function () {
            p.hidden(e);
          },
          [e, p]
        ),
        t = i(
          function (a) {
            q.props.onActionPress != null && q.props.onActionPress(a),
              a.defaultPrevented || p.expire(e);
          },
          [q.props, e, p]
        );
      s = c("useVisibilityObserver")({
        onHidden: s,
        onVisible: r,
        options: { activityMonitorOverride: null },
      });
      r = c("useFadeEffect")(!d);
      d = r[0];
      var u = r[1];
      r = r[2];
      r = c("useMergeRefs")(r, s);
      j(
        function () {
          u === !0 && o(!0);
        },
        [u]
      );
      return d
        ? h.jsx("li", {
            className: c("stylex")(m.root, u && m.mount, a),
            onBlur: g,
            onFocus: b,
            onMouseEnter: b,
            onMouseLeave: g,
            ref: r,
            style: { bottom: l * f },
            children: n && h.cloneElement(q, { onActionPress: t }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPressableChildrenWithOverlay.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.overlay;
      return h.jsxs("div", {
        className:
          "x4k7w5x x1h91t0o x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1jfb8zj x1beo9mf x3igimt xarpa2k x1n2onr6 x1qrby5j",
        children: [b, a],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getCometBadgeColorStyle",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      blue: { backgroundColor: "xwnonoy", $$css: !0 },
      darkGray: { backgroundColor: "xhazfnh", $$css: !0 },
      gray: { backgroundColor: "x1d2osyd", $$css: !0 },
      green: { backgroundColor: "xv9rvxn", $$css: !0 },
      lightBlue: { backgroundColor: "xfmpgtx", $$css: !0 },
      red: { backgroundColor: "x1cdvf7c", $$css: !0 },
      yellow: { backgroundColor: "xacajkf", $$css: !0 },
    };
    function a(a) {
      switch (a) {
        case "blue":
          return h.blue;
        case "gray":
          return h.gray;
        case "darkGray":
          return h.darkGray;
        case "green":
          return h.green;
        case "lightBlue":
          return h.lightBlue;
        case "red":
          return h.red;
        case "yellow":
          return h.yellow;
        default:
          a;
          throw c("unrecoverableViolation")(
            " Invalid color in getCometBadgeColorStyle",
            "comet_ui"
          );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometBadge.react",
  [
    "CometVisualCompletionAttributes",
    "getCometBadgeColorStyle",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        isNoneProfileBadge: { marginEnd: "x1emribx", $$css: !0 },
        normalBorderRadius: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        root: { display: "x3nfvp2", $$css: !0 },
      },
      j = {
        dark: {
          borderTopColor: "x1o7swki",
          borderEndColor: "xp7cj6j",
          borderBottomColor: "x1bkzgmd",
          borderStartColor: "xl02xpf",
          $$css: !0,
        },
        none: {
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          $$css: !0,
        },
        white: {
          borderTopColor: "x6zyg47",
          borderEndColor: "x1xm1mqw",
          borderBottomColor: "xpn8fn3",
          borderStartColor: "xtct9fg",
          $$css: !0,
        },
      },
      k = {
        6: {
          borderTopStartRadius: "x1npaq5j",
          borderTopEndRadius: "x1c83p5e",
          borderBottomEndRadius: "x1enjb0b",
          borderBottomStartRadius: "x199158v",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x5see2y",
          borderEndWidth: "x8ebbdf",
          borderBottomWidth: "x1pzews7",
          borderStartWidth: "x1r61nuk",
          height: "xols6we",
          width: "x1v4s8kt",
          $$css: !0,
        },
        7: {
          borderTopStartRadius: "x1inr27j",
          borderTopEndRadius: "x1vcqv9c",
          borderBottomEndRadius: "xfrm7hi",
          borderBottomStartRadius: "xpbad92",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x1hagigm",
          width: "xci0xqf",
          $$css: !0,
        },
        8: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xdk7pt",
          width: "x1xc55vz",
          $$css: !0,
        },
        9: {
          borderTopStartRadius: "x1kkc7ea",
          borderTopEndRadius: "x1yhqcir",
          borderBottomEndRadius: "x1hedi0j",
          borderBottomStartRadius: "xzmsszl",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xegnrdp",
          width: "x1wc42o8",
          $$css: !0,
        },
        10: {
          borderTopStartRadius: "x8u2fvd",
          borderTopEndRadius: "x1ht7hnu",
          borderBottomEndRadius: "x1quq95r",
          borderBottomStartRadius: "x5yzy4c",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x170jfvy",
          width: "x1fsd2vl",
          $$css: !0,
        },
        12: {
          borderTopStartRadius: "xhk9q7s",
          borderTopEndRadius: "x1otrzb0",
          borderBottomEndRadius: "x1i1ezom",
          borderBottomStartRadius: "x1o6z2jb",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x1kpxq89",
          width: "xsmyaan",
          $$css: !0,
        },
        14: {
          borderTopStartRadius: "x1rcc7c0",
          borderTopEndRadius: "xbtbmw4",
          borderBottomEndRadius: "x1lie4ck",
          borderBottomStartRadius: "x16hxpj1",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x1v9usgg",
          width: "x6jxa94",
          $$css: !0,
        },
        15: {
          borderTopStartRadius: "xu7oe1h",
          borderTopEndRadius: "x18k2onv",
          borderBottomEndRadius: "xlkxm3f",
          borderBottomStartRadius: "x1ehahlu",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xx3o462",
          width: "x1a00udw",
          $$css: !0,
        },
        18: {
          borderTopStartRadius: "x12myldv",
          borderTopEndRadius: "x1udsgas",
          borderBottomEndRadius: "xrc8dwe",
          borderBottomStartRadius: "xxxhv2y",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xmix8c7",
          width: "x1xp8n7a",
          $$css: !0,
        },
        20: {
          borderTopStartRadius: "x1a2cdl4",
          borderTopEndRadius: "xnhgr82",
          borderBottomEndRadius: "x1qt0ttw",
          borderBottomStartRadius: "xgk8upj",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x1qx5ct2",
          width: "xw4jnvo",
          $$css: !0,
        },
        22: {
          borderTopStartRadius: "x13zp6kq",
          borderTopEndRadius: "x1mcfq15",
          borderBottomEndRadius: "xrosliz",
          borderBottomStartRadius: "x1wb7cse",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x17rw0jw",
          width: "x17z2i9w",
          $$css: !0,
        },
        24: {
          borderTopStartRadius: "xyi19xy",
          borderTopEndRadius: "x1ccrb07",
          borderBottomEndRadius: "xtf3nb5",
          borderBottomStartRadius: "x1pc53ja",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
        32: {
          borderTopStartRadius: "xfh8nwu",
          borderTopEndRadius: "xoqspk4",
          borderBottomEndRadius: "x12v9rci",
          borderBottomStartRadius: "x138vmkv",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x10w6t97",
          width: "x1td3qas",
          $$css: !0,
        },
        41: {
          borderTopStartRadius: "xt49o24",
          borderTopEndRadius: "x1rtouj8",
          borderBottomEndRadius: "x12fpfo8",
          borderBottomStartRadius: "x136sihb",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x1njhlm6",
          width: "x1r9kitl",
          $$css: !0,
        },
      },
      l = {
        6: { marginStart: "x1w4ip6v", width: "x1wc42o8", $$css: !0 },
        7: { marginStart: "x1b2warb", width: "xaw7vzs", $$css: !0 },
        8: { marginStart: "xsgj6o6", width: "xsmyaan", $$css: !0 },
        9: { marginStart: "x1hvlnb8", width: "x197psvt", $$css: !0 },
        10: { marginStart: "x8j4wrb", width: "x1a00udw", $$css: !0 },
        12: { marginStart: "x1mnrxsn", width: "x1xp8n7a", $$css: !0 },
        14: { marginStart: "xnfveip", width: "x1kl0l3y", $$css: !0 },
        15: { marginStart: "xpw6ms", width: "xpcibvc", $$css: !0 },
        18: { marginStart: "x1cxxrxm", width: "xo7uitg", $$css: !0 },
        20: { marginStart: "x17adc0v", width: "x1849jeq", $$css: !0 },
        22: { marginStart: "x1hy63sm", width: "x1npj6m0", $$css: !0 },
        24: { marginStart: "x16n37ib", width: "x14qfxbe", $$css: !0 },
        32: { marginStart: "x1d52u69", width: "x1useyqa", $$css: !0 },
        41: { marginStart: "x1v860g0", width: "x1yaf2ey", $$css: !0 },
      },
      m = {
        6: { marginStart: "x1mnrxsn", width: "xsmyaan", $$css: !0 },
        7: { marginStart: "xnfveip", width: "x6jxa94", $$css: !0 },
        8: { marginStart: "x1i64zmx", width: "x1kky2od", $$css: !0 },
        9: { marginStart: "x1cxxrxm", width: "x1xp8n7a", $$css: !0 },
        10: { marginStart: "x17adc0v", width: "xw4jnvo", $$css: !0 },
        12: { marginStart: "x16n37ib", width: "xvy4d1p", $$css: !0 },
        14: { marginStart: "xwycmqc", width: "xgd8bvy", $$css: !0 },
        15: { marginStart: "x13ibhcj", width: "x1849jeq", $$css: !0 },
        18: { marginStart: "x1sliqq", width: "x14qfxbe", $$css: !0 },
        20: { marginStart: "xmn8rco", width: "x100vrsf", $$css: !0 },
        22: { marginStart: "x1tv9t25", width: "x187nhsf", $$css: !0 },
        24: { marginStart: "xmupa6y", width: "x1useyqa", $$css: !0 },
        32: { marginStart: "x8vdgqj", width: "x1fu8urw", $$css: !0 },
        41: { marginStart: "x2vb376", width: "x1pigqs1", $$css: !0 },
      };
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "none" : b;
      var d = a.children,
        e = a.color;
      e = e === void 0 ? "blue" : e;
      var f = a.isProfileBadge;
      f = f === void 0 ? !1 : f;
      var g = a.label,
        n = a.role,
        o = a.size;
      o = o === void 0 ? 8 : o;
      var p = a.testid,
        q = a.wide;
      q = q === void 0 ? "normal" : q;
      return h.jsx(
        "span",
        babelHelpers["extends"](
          {
            "aria-label": g,
            className: c("stylex")(
              i.root,
              !f && i.isNoneProfileBadge,
              (g = a.colorOverride) != null
                ? g
                : c("getCometBadgeColorStyle")(e),
              k[o],
              j[b],
              q === "wide" && l[o],
              q === "extraWide" && m[o],
              q === "normal" && i.normalBorderRadius
            ),
          },
          c("testID")(p),
          c("CometVisualCompletionAttributes").IGNORE,
          { role: n, children: d }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoAvailabilityBadge.react",
  [
    "fbt",
    "CometBadge.react",
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "CometScreenReaderText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Active");
    function a(a) {
      var b = a.pressed;
      a = a.size;
      return i.jsxs("div", {
        className:
          "x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6",
        children: [
          i.jsx(c("CometPressableChildrenWithOverlay.react"), {
            overlay: i.jsx(c("CometPressableOverlay.react"), {
              pressed: b,
              radius: "50%",
            }),
            children: i.jsx(c("CometBadge.react"), {
              color: "green",
              isProfileBadge: !0,
              size: a,
            }),
          }),
          i.jsx(c("CometScreenReaderText.react"), { text: j }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useServerTime",
  ["JSScheduler", "ServerTime", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState,
      j = 6e4,
      k = new Set(),
      l = null,
      m = !1;
    function n() {
      k.forEach(function (a) {
        return a();
      }),
        (m = !1);
    }
    function o(a) {
      a === void 0 && (a = j),
        (l = window.setInterval(function () {
          m || ((m = !0), d("JSScheduler").scheduleSpeculativeCallback(n));
        }, a));
    }
    function p() {
      k.size === 0 && (window.clearInterval(l), (l = null));
    }
    function q(a, b) {
      b === void 0 && (b = j);
      k.add(a);
      l == null && o(b);
      return function () {
        k["delete"](a), p();
      };
    }
    function r() {
      return new Date(d("ServerTime").getMillis());
    }
    function a(a) {
      a === void 0 && (a = j);
      var b = i(function () {
          return r();
        }),
        c = b[0],
        d = b[1],
        e = function () {
          return d(r());
        };
      h(
        function () {
          return q(e, a);
        },
        [a]
      );
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRelativeTimestamp.react",
  ["fbt", "react", "useServerTime"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    e = d("react");
    function i(a, b) {
      if (b === "minimized") return h._("1m");
      else if (b === "shortened") return h._("Just now");
      return h._("a few seconds ago");
    }
    function j(a, b) {
      return b === "minimized" ? h._("1m") : h._("in a few seconds");
    }
    function k(a, b) {
      if (b === "minimized")
        return h._({ "*": "{minutes}m" }, [h._param("minutes", a, [0])]);
      else if (b === "shortened")
        return h._({ "*": "{number} mins", _1: "1 min" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "{number} minutes ago", _1: "about a minute ago" }, [
        h._plural(a, "number"),
      ]);
    }
    function l(a, b) {
      if (b === "minimized")
        return h._({ "*": "in {minutes}m" }, [h._param("minutes", a, [0])]);
      else if (b === "shortened")
        return h._({ "*": "in {number} mins", _1: "in 1 min" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "in {number} minutes", _1: "in about a minute" }, [
        h._plural(a, "number"),
      ]);
    }
    function m(a, b) {
      if (b === "minimized") return h._("{hours}h", [h._param("hours", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} hrs", _1: "1 hr" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "{number} hours ago", _1: "about an hour ago" }, [
        h._plural(a, "number"),
      ]);
    }
    function n(a, b) {
      if (b === "minimized") return h._("in {hours}h", [h._param("hours", a)]);
      else if (b === "shortened")
        return h._({ "*": "in {number} hrs", _1: "in 1 hr" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "in {number} hours", _1: "in about an hour" }, [
        h._plural(a, "number"),
      ]);
    }
    function o(a, b) {
      if (b === "minimized") return h._("{days}d", [h._param("days", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} days", _1: "1 day" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "{number} days ago", _1: "a day ago" }, [
        h._plural(a, "number"),
      ]);
    }
    function p(a, b) {
      if (b === "minimized") return h._("in {days}d", [h._param("days", a)]);
      else if (b === "shortened")
        return h._({ "*": "in {number} days", _1: "in 1 day" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "in {number} days", _1: "in a day" }, [
        h._plural(a, "number"),
      ]);
    }
    function q(a, b) {
      if (b === "minimized") return h._("{weeks}w", [h._param("weeks", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} wks", _1: "1 wk" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "{number} weeks ago", _1: "a week ago" }, [
        h._plural(a, "number"),
      ]);
    }
    function r(a, b) {
      if (b === "minimized") return h._("in {weeks}w", [h._param("weeks", a)]);
      else if (b === "shortened")
        return h._({ "*": "in {number} wks", _1: "in 1 wk" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "in {number} weeks", _1: "in a week" }, [
        h._plural(a, "number"),
      ]);
    }
    function s(a, b) {
      if (b === "minimized") return h._("{years}y", [h._param("years", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} yrs", _1: "1 yr" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "{number} years ago", _1: "a year ago" }, [
        h._plural(a, "number"),
      ]);
    }
    function t(a, b) {
      if (b === "minimized") return h._("in {years}y", [h._param("years", a)]);
      else if (b === "shortened")
        return h._({ "*": "in {number} yrs", _1: "in 1 yr" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "in {number} years", _1: "in a year" }, [
        h._plural(a, "number"),
      ]);
    }
    var u = 60,
      v = 60,
      w = 24,
      x = 7,
      y = 365;
    function z(a, b, c) {
      c === void 0 && (c = "normal");
      a = (a.valueOf() - b.valueOf()) / 1e3;
      if (a < u) return i(a, c);
      b = a / u;
      a = Math.floor(b);
      if (a < v) return k(a, c);
      a = b / v;
      b = Math.floor(a);
      if (b < w) return m(b, c);
      b = a / w;
      a = Math.floor(b);
      if (a < x) return o(a, c);
      else if (b < y) {
        a = Math.floor(b / x);
        return q(a, c);
      }
      a = Math.floor(b / y);
      return s(a, c);
    }
    function a(a, b, c) {
      c === void 0 && (c = "normal");
      b = (b.valueOf() - a.valueOf()) / 1e3;
      if (b < u) return j(b, c);
      a = b / u;
      b = Math.floor(a);
      if (b < v) return l(b, c);
      b = a / v;
      a = Math.floor(a / v);
      if (a < w) return n(a, c);
      a = b / w;
      b = Math.floor(a);
      if (b < x) return p(b, c);
      else if (a < y) {
        b = Math.floor(a / x);
        return r(b, c);
      }
      b = Math.floor(a / y);
      return t(b, c);
    }
    function b(a) {
      var b = a.date;
      a = a.format;
      var d = c("useServerTime")();
      d = z(d, b, a);
      return d;
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.getRelativeTimestamp = z;
    b.getRelativeTimestampInFuture = a;
    g["default"] = b;
  },
  98
);
__d(
  "MWChatActivePill.react",
  [
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        badge: {
          backgroundColor: "xbb192p",
          borderTopStartRadius: "xhw592a",
          borderTopEndRadius: "xwihvcr",
          borderBottomEndRadius: "x7wuybg",
          borderBottomStartRadius: "xb9tvrk",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          boxSizing: "x9f619",
          display: "x78zum5",
          fontWeight: "x117nqv4",
          justifyContent: "xl56j7k",
          marginTop: "x1kgmq87",
          marginEnd: "xwrv7xz",
          marginBottom: "xmgb6t1",
          marginStart: "x8182xy",
          paddingStart: "x1h0ha7o",
          paddingEnd: "xg83lxy",
          $$css: !0,
        },
        badgeContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        inner: {
          color: "x6u5lvz",
          fontSize: "x190qgfh",
          lineHeight: "x132q4wb",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      j = {
        "card-background": {
          borderTopColor: "x6zyg47",
          borderEndColor: "x1xm1mqw",
          borderBottomColor: "xpn8fn3",
          borderStartColor: "xtct9fg",
          $$css: !0,
        },
        "secondary-button-background-floating": {
          borderTopColor: "x1bmsi4x",
          borderEndColor: "xrcl4xe",
          borderBottomColor: "x17j0sh5",
          borderStartColor: "x14li8yl",
          $$css: !0,
        },
        "web-wash": {
          borderTopColor: "x1516sgx",
          borderEndColor: "x1fjwj1m",
          borderBottomColor: "x1khxuxv",
          borderStartColor: "x4gm0zg",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "card-background" : b;
      var d = a.children;
      a = a.pressed;
      return h.jsx("div", {
        className: "x78zum5 xl56j7k x193iq5w",
        children: h.jsx(c("CometPressableChildrenWithOverlay.react"), {
          overlay: h.jsx(c("CometPressableOverlay.react"), {
            pressed: a,
            radius: 7,
          }),
          children: h.jsx("div", {
            className: c("stylex")(i.badge, j[b]),
            children: h.jsx("span", {
              className: "x6u5lvz x190qgfh x132q4wb xuxw1ft",
              children: d,
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoLastActiveTimeBadge.react",
  ["CometRelativeTimestamp.react", "MWChatActivePill.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "card-background" : b;
      var d = a.pressed;
      a = a.time;
      return h.jsx(c("MWChatActivePill.react"), {
        border: b,
        pressed: d,
        children: h.jsx(c("CometRelativeTimestamp.react"), {
          date: new Date(a * 1e3),
          format: "minimized",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoNotificationBadge.react",
  ["CometBadge.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.number;
      return h.jsx(c("CometBadge.react"), {
        color: "red",
        isProfileBadge: !0,
        size: 18,
        wide: a > 9 ? "wide" : "normal",
        children: h.jsx("div", {
          className: "x6s0dn4 x78zum5 x5yr21d xl56j7k xuxw1ft xh8yej3",
          children: h.jsx(c("TetraText.react"), {
            color: "primaryOnMedia",
            type: "body4",
            children: a > 9 ? "9+" : a,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRSuspendOnServer.react",
  [
    "CometSSRClientRender",
    "CometSSRReactFizzEnvironment",
    "ExecutionEnvironment",
    "Promise",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = a.children;
      if (c("ExecutionEnvironment").canUseDOM) return a;
      if (d("CometSSRReactFizzEnvironment").isReactFizzEnvironment())
        throw d("CometSSRClientRender").CometSSRClientRender(
          "CometSSRSuspendOnServer: This component is marked to be client rendered"
        );
      else throw new (b("Promise"))(function () {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react",
  ["CometPlaceholder.react", "CometSSRSuspendOnServer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.useSuspenseDirectlyForSVG;
      a = a === !0 ? h.Suspense : c("CometPlaceholder.react");
      return h.jsx(a, {
        fallback: b,
        children: h.jsx(c("CometSSRSuspendOnServer.react"), { children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfileVideoGlimmer.react",
  ["CometGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: { position: "x1n2onr6", $$css: !0 },
        glimmer: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "x5yr21d",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.size;
      return h.jsx("div", {
        className: "x1n2onr6",
        style: { height: a, width: a },
        children: h.jsx(c("CometGlimmer.react"), {
          index: 0,
          xstyle: i.glimmer,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LazyCometProfileVideoSection.react",
  [
    "CometPlaceholder.react",
    "CometProfileVideoGlimmer.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometProfileVideoSection.react"
        ).__setRef("LazyCometProfileVideoSection.react")
      );
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(c("CometProfileVideoGlimmer.react"), { size: a.size }),
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "profilePhotoUtils",
  ["Locale", "memoizeWithArgs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("memoizeWithArgs")(
      function (a, b) {
        b === void 0 && (b = !1);
        a = Math.sqrt(2 * a * a) - a;
        a = Math.round(Math.sqrt((a * a) / 2));
        if (b)
          if (d("Locale").isRTL())
            return { left: a, top: a, transform: "translate(-50%, -50%)" };
          else return { right: a, top: a, transform: "translate(50%, -50%)" };
        else if (d("Locale").isRTL())
          return { bottom: a, left: a, transform: "translate(-50%, 50%)" };
        else return { bottom: a, right: a, transform: "translate(50%, 50%)" };
      },
      function (a, b) {
        return String(b) + String(a);
      }
    );
    b = c("memoizeWithArgs")(
      function (a) {
        switch (a) {
          case 24:
          case 32:
          case 36:
          case 40:
            return 2;
          case 48:
          case 56:
          case 60:
            return 3;
          case 132:
          default:
            return 4;
        }
      },
      function (a) {
        return String(a);
      }
    );
    e = c("memoizeWithArgs")(
      function (a, b) {
        if (b === "availabilityBadge")
          switch (a) {
            case 16:
            case 20:
            case 24:
              return [6, 1.5];
            case 28:
              return [7, 2];
            case 32:
            case 36:
              return [8, 2];
            case 40:
            case 48:
              return [9, 2];
            case 56:
            case 60:
              return [10, 2];
            case 72:
              return [12, 2];
            case 80:
            case 88:
              return [14, 2];
            case 96:
            case 100:
              return [15, 2];
            case 120:
            case 132:
            case 168:
              return [20, 4];
            default:
              a;
              return [8, 2];
          }
        switch (a) {
          case 16:
          case 20:
          case 24:
            return [6, 1.5];
          case 28:
            return [7, 1.5];
          case 32:
            return [8, 2];
          case 36:
            return [9, 2];
          case 40:
            return [10, 2];
          case 48:
            return [12, 2];
          case 56:
            return [14, 2];
          case 60:
            return [15, 2];
          case 72:
            return [18, 2];
          case 80:
            return [20, 4];
          case 88:
            return [22, 4];
          case 96:
          case 100:
            return [24, 4];
          case 120:
          case 132:
            return [32, 4];
          case 168:
            return [41, 4];
          default:
            a;
            return [8, 2];
        }
      },
      function (a, b) {
        return String(a) + b;
      }
    );
    g.getBadgePosition = a;
    g.getStoryRingSize = b;
    g.getBadgeSizeAndStrokeWidth = e;
  },
  98
);
__d(
  "CometProfilePhoto.react",
  [
    "BaseSvgImage.react",
    "CometErrorBoundary.react",
    "CometImage.react",
    "CometLoadingAnimation.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "CometProfilePhotoAvailabilityBadge.react",
    "CometProfilePhotoLastActiveTimeBadge.react",
    "CometProfilePhotoNotificationBadge.react",
    "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react",
    "CometSSRSuspendOnServer.react",
    "CometTrackingNodeProvider.react",
    "CometVisualCompletionAttributes",
    "LazyCometProfileVideoSection.react",
    "profilePhotoUtils",
    "react",
    "stylex",
    "useCometUniqueID",
    "useSetAttributeRef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        activityBadge: {
          alignItems: "x6s0dn4",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1qhh985",
          borderEndStyle: "xu3j5b3",
          borderEndWidth: "xcfux6l",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderStartStyle: "x26u7qi",
          borderStartWidth: "xm0m39n",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x972fbf",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          justifyContent: "xl56j7k",
          marginBottom: "xat24cr",
          marginEnd: "x11i5rnm",
          marginStart: "x1mh8g0r",
          marginTop: "xdj266r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingBottom: "x18d9i69",
          paddingEnd: "x4uap5",
          paddingStart: "xkhd6sd",
          paddingTop: "xexx8yu",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        activityIcon10: {
          height: "x17rw0jw",
          paddingTop: "x123j3cw",
          paddingEnd: "x1mpkggp",
          paddingBottom: "xs9asl8",
          paddingStart: "x1t2a60a",
          width: "x17z2i9w",
          $$css: !0,
        },
        activityIcon16: {
          height: "xd7y6wv",
          paddingTop: "x123j3cw",
          paddingEnd: "x1mpkggp",
          paddingBottom: "xs9asl8",
          paddingStart: "x1t2a60a",
          width: "x23j0i4",
          $$css: !0,
        },
        activityIcon8: { height: "x1v9usgg", width: "x6jxa94", $$css: !0 },
        badge: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          position: "x10l6tqk",
          zIndex: "xhtitgo",
          $$css: !0,
        },
        badgeWithBorder: {
          borderTopColor: "x1aoij9j",
          borderEndColor: "xxpsvdv",
          borderBottomColor: "x2e7n7m",
          borderStartColor: "x9387xi",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          $$css: !0,
        },
        badgeWithLastActiveTime: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          end: "xds687c",
          justifyContent: "x13a6bvl",
          start: "x17qophe",
          $$css: !0,
        },
        badgeWithShadow: { boxShadow: "x14ihvte", $$css: !0 },
        insetSVG: {
          fill: "xbh8q5q",
          stroke: "x1pwv2dq",
          strokeWidth: "xvlca1e",
          $$css: !0,
        },
        photo: { verticalAlign: "x3ajldb", $$css: !0 },
        photoCircle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        photoRoundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        pressable: { color: "xzsf02u", display: "x1rg5ohu", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
        storyRingBlue: { stroke: "x1p5r69i", $$css: !0 },
        storyRingGray: { stroke: "x1tbtn3x", $$css: !0 },
        storyRingGreen: { stroke: "x1cm6qz0", $$css: !0 },
        storyRingRed: { stroke: "x1c97i5p", $$css: !0 },
        storyRingSize2: { strokeWidth: "xvlca1e", $$css: !0 },
        storyRingSize3: { strokeWidth: "xqjr0vm", $$css: !0 },
        storyRingSize4: { strokeWidth: "x17ld789", $$css: !0 },
        svgOverlay: { fill: "x1tgjyoi", $$css: !0 },
        videoContainer: {
          WebkitMaskImage: "x1u31j2f",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        videoContainerRectRounded: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        videoContainerRounded: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        wrapper: {
          display: "x1rg5ohu",
          position: "x1n2onr6",
          verticalAlign: "x3ajldb",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.addOn,
        f = a.addOnTopEnd,
        g = a.alt,
        k = a.children,
        l = a.cursorDisabled,
        m = a.isOverlapped,
        n = m === void 0 ? !1 : m,
        o = a.linkProps,
        p = a.onHoverIn,
        q = a.onHoverOut,
        r = a.onPress,
        s = a.onPressIn;
      m = a.overlayDisabled;
      m = m === void 0 ? !1 : m;
      a.preview;
      var t = a.profileVideo,
        u = a.shape,
        v = u === void 0 ? "circle" : u;
      u = a.shouldShowCloseFriendsBadge;
      var w = u === void 0 ? !1 : u,
        x = a.size,
        y = a.source;
      u = a.storyStatus;
      var z = u === void 0 ? "none" : u;
      u = a.testid;
      u = a.testOnly_pressed;
      a.testOnly_previewDelay;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          "addOn",
          "addOnTopEnd",
          "alt",
          "children",
          "cursorDisabled",
          "isOverlapped",
          "linkProps",
          "onHoverIn",
          "onHoverOut",
          "onPress",
          "onPressIn",
          "overlayDisabled",
          "preview",
          "profileVideo",
          "shape",
          "shouldShowCloseFriendsBadge",
          "size",
          "source",
          "storyStatus",
          "testid",
          "testOnly_pressed",
          "testOnly_previewDelay",
        ]),
        B = c("useCometUniqueID")(),
        C = c("useSetAttributeRef")("id", B),
        D = "url(#" + B + ")",
        E = c("useSetAttributeRef")("mask", D),
        F = function (a, b) {
          var l,
            m = a.overlay;
          a = a.pressed;
          var u = z !== "none" ? d("profilePhotoUtils").getStoryRingSize(x) : 0,
            F = d("profilePhotoUtils").getBadgePosition(x / 2, !0),
            G = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(
              x,
              e == null ? void 0 : e.type
            ),
            H = G[0];
          G = G[1];
          var I = t != null ? { borderWidth: G } : {},
            J =
              (e == null ? void 0 : e.type) === "lastActiveTimeBadge" && x > 28,
            K = J ? {} : d("profilePhotoUtils").getBadgePosition(x / 2, !1);
          J =
            e != null
              ? h.jsx(
                  "div",
                  babelHelpers["extends"](
                    {
                      className:
                        "x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo" +
                        ((e.type === "activityBadge" &&
                        (t != null || e.withBorder)
                          ? " x1aoij9j xxpsvdv x2e7n7m x9387xi x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi"
                          : "" +
                            (x === 60 && e.type === "activityBadge"
                              ? ""
                              : "" + (J ? "" : ""))) +
                          ((J
                            ? " x1ey2m1c x78zum5 xds687c x13a6bvl x17qophe"
                            : "") +
                            (x === 60 && e.type === "activityBadge"
                              ? " x14ihvte"
                              : ""))),
                    },
                    c("CometVisualCompletionAttributes").IGNORE,
                    {
                      style: babelHelpers["extends"]({}, K, I),
                      children: h.jsx(j, { addOn: e, pressed: a, size: x }),
                    }
                  )
                )
              : null;
          I =
            f != null
              ? h.jsx("div", {
                  className:
                    "x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo",
                  "data-testid": void 0,
                  style: babelHelpers["extends"]({}, F),
                  children: h.jsx(
                    c("CometProfilePhotoNotificationBadge.react"),
                    { number: f.number }
                  ),
                })
              : null;
          var L =
            typeof y.uri === "string"
              ? h.jsx(c("BaseSvgImage.react"), {
                  src: y.uri,
                  style: { height: x - u * 4, width: x - u * 4 },
                  x: 2 * u,
                  y: 2 * u,
                })
              : h.jsx(c("CometImage.react"), {
                  alt: g,
                  height: x - 4 * u,
                  src: y.uri,
                  testid: void 0,
                  width: x - 4 * u,
                  xstyle: [
                    i.photo,
                    v === "circle" && i.photoCircle,
                    v === "roundedRect" && i.photoRoundedRect,
                  ],
                });
          H =
            typeof y.uri === "string"
              ? h.jsxs(
                  "svg",
                  babelHelpers["extends"](
                    {
                      "aria-hidden": g == null ? !0 : void 0,
                      "aria-label": g,
                      className: "x3ajldb",
                    },
                    c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
                    {
                      role: g != null ? "img" : "none",
                      style: { height: x, width: x },
                      children: [
                        h.jsxs("mask", {
                          id: B,
                          ref: C,
                          suppressHydrationWarning: !0,
                          children: [
                            v === "circle"
                              ? h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "white",
                                  r: x / 2,
                                })
                              : h.jsx("rect", {
                                  cy: x / 2,
                                  fill: "white",
                                  height: x,
                                  rx: v === "square" ? 0 : 8,
                                  ry: v === "square" ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            h.jsx(
                              c(
                                "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"
                              ),
                              {
                                useSuspenseDirectlyForSVG: !0,
                                children:
                                  J != null &&
                                  (e == null ? void 0 : e.type) !== "trigger" &&
                                  (e == null ? void 0 : e.type) !==
                                    "lastActiveTimeBadge" &&
                                  (e == null ? void 0 : e.backgroundColor) !==
                                    "none" &&
                                  h.jsx(
                                    "circle",
                                    babelHelpers["extends"](
                                      {
                                        cx:
                                          (l = K.left) != null
                                            ? l
                                            : x -
                                              ((l = K.right) != null ? l : 0),
                                        cy:
                                          (l = K.top) != null
                                            ? l
                                            : x -
                                              ((l = K.bottom) != null ? l : 0),
                                      },
                                      c("CometVisualCompletionAttributes")
                                        .IGNORE,
                                      {
                                        fill: "black",
                                        r: Math.max(
                                          (e == null ? void 0 : e.type) ===
                                            "activityBadge"
                                            ? 8
                                            : 0,
                                          H / 2 + G
                                        ),
                                      }
                                    )
                                  ),
                              }
                            ),
                            I != null &&
                              f != null &&
                              f.type === "notificationBadge" &&
                              h.jsx("rect", {
                                height: 22,
                                rx: 11,
                                ry: 11,
                                width:
                                  f.number <= 9 ? 22 : f.number <= 99 ? 33 : 44,
                                x:
                                  F.left != null
                                    ? F.left -
                                      (f.number <= 9
                                        ? 11
                                        : f.number <= 99
                                        ? 22
                                        : 33)
                                    : x - ((K = F.right) != null ? K : 0) - 11,
                                y:
                                  F.top != null
                                    ? F.top - 11
                                    : x - ((l = F.bottom) != null ? l : 0) - 11,
                              }),
                            z === "uploading" && (x === 36 || x === 60)
                              ? h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - 1 * u,
                                  stroke: "black",
                                  strokeWidth: u * 2,
                                })
                              : z !== "none" &&
                                u > 0 &&
                                h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - 1.5 * u,
                                  stroke: "black",
                                  strokeWidth: u,
                                }),
                            n &&
                              h.jsx("circle", {
                                cx: -x / 2 + 4,
                                cy: x / 2,
                                fill: "black",
                                r: x / 2 + 2,
                              }),
                          ],
                        }),
                        h.jsxs("g", {
                          mask: D,
                          ref: E,
                          suppressHydrationWarning: !0,
                          children: [
                            t != null
                              ? h.jsx(c("CometErrorBoundary.react"), {
                                  fallback: function () {
                                    return L;
                                  },
                                  children: h.jsx(c("CometPlaceholder.react"), {
                                    fallback: L,
                                    children: h.jsx(
                                      c("CometSSRSuspendOnServer.react"),
                                      {
                                        children: h.jsx("foreignObject", {
                                          height: "100%",
                                          width: "100%",
                                          x: 2 * u,
                                          y: 2 * u,
                                          children: h.jsx("div", {
                                            className:
                                              "x1u31j2f x6ikm8r x10wlt62" +
                                              (v === "circle"
                                                ? " x14yjl9h xudhj91 x18nykt9 xww2gxu"
                                                : "" +
                                                  (v === "roundedRect"
                                                    ? " x1lq5wgf xgqcy7u x30kzoy x9jhf4c"
                                                    : "")),
                                            style: {
                                              height: x - u * 4,
                                              width: x - u * 4,
                                            },
                                            children: h.jsx(
                                              c(
                                                "LazyCometProfileVideoSection.react"
                                              ),
                                              babelHelpers["extends"](
                                                {
                                                  linkProps: o,
                                                  onHoverIn: p,
                                                  onHoverOut: q,
                                                  onPress: r,
                                                  onPressIn: s,
                                                  profileVideo: t,
                                                  size: x - u * 4,
                                                  thumbnailUri: y.uri,
                                                },
                                                A
                                              )
                                            ),
                                          }),
                                        }),
                                      }
                                    ),
                                  }),
                                })
                              : L,
                            v === "circle"
                              ? h.jsx("circle", {
                                  className:
                                    "x1pwv2dq xvlca1e" +
                                    (a ? " x1tgjyoi" : " xbh8q5q"),
                                  cx: x / 2,
                                  cy: x / 2,
                                  r: x / 2,
                                })
                              : h.jsx("rect", {
                                  className:
                                    "x1pwv2dq xvlca1e" +
                                    (a ? " x1tgjyoi" : " xbh8q5q"),
                                  cy: x / 2,
                                  fill: "white",
                                  height: x,
                                  rx: v === "square" ? 0 : 8,
                                  ry: v === "square" ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            z === "uploading" && (x === 36 || x === 60)
                              ? null
                              : z !== "none" &&
                                u > 0 &&
                                h.jsx("circle", {
                                  className: c("stylex")(
                                    z === "unseen" &&
                                      (w ? i.storyRingGreen : i.storyRingBlue),
                                    z === "seen" && i.storyRingGray,
                                    z === "live" && i.storyRingRed,
                                    u === 4 && i.storyRingSize4,
                                    u === 3 && i.storyRingSize3,
                                    u === 2 && i.storyRingSize2
                                  ),
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - u / 2,
                                  stroke: "var(--accent)",
                                  strokeWidth: u,
                                }),
                          ],
                        }),
                        z === "uploading" &&
                          (x === 36 || x === 60) &&
                          h.jsx("g", {
                            style: {
                              transform:
                                "scale(" + (x - Math.floor(x / 30)) / x + ")",
                            },
                            children: h.jsx(c("CometLoadingAnimation.react"), {
                              size: x,
                            }),
                          }),
                      ],
                    }
                  )
                )
              : L;
          return h.jsxs("div", {
            className: "x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z",
            ref: b,
            children: [
              H,
              k,
              m,
              h.jsx(
                c(
                  "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"
                ),
                { children: J }
              ),
              I,
            ],
          });
        };
      return !r && !o && u !== !0
        ? F({ pressed: !1 }, b)
        : h.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 3,
            children: h.jsx(
              c("CometPressable.react"),
              babelHelpers["extends"]({}, A, {
                cursorDisabled: l,
                linkProps: o,
                onHoverIn: p,
                onHoverOut: q,
                onPress: r,
                onPressIn: s,
                overlayDisabled: m,
                overlayRadius:
                  v === "circle" ? "50%" : v === "roundedRect" ? 8 : 0,
                ref: b,
                testOnly_pressed: u,
                testid: void 0,
                xstyle: function (a) {
                  a = a.pressed;
                  return [i.pressable, a && i.pressed];
                },
                children: function (a) {
                  var b = a.overlay;
                  a = a.pressed;
                  return F({ overlay: b, pressed: a }, null);
                },
              })
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.addOn,
        e = a.pressed;
      a = a.size;
      switch (b.type) {
        case "availabilityBadge":
          a = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(
            a,
            b == null ? void 0 : b.type
          );
          a = a[0];
          return h.jsx(c("CometProfilePhotoAvailabilityBadge.react"), {
            pressed: e,
            size: a,
          });
        case "lastActiveTimeBadge":
          return h.jsx(c("CometProfilePhotoLastActiveTimeBadge.react"), {
            border: b.border,
            pressed: e,
            time: b.time,
          });
        case "activityBadge":
          return h.jsx(k, {
            backgroundColor: b.backgroundColor,
            icon: b.icon,
            overflow: b.overflow,
            pressed: e,
            size: b.size,
          });
        case "trigger":
          return b.icon;
        case "multipleVoicesForAction":
          return b.badge;
        default:
          return null;
      }
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.backgroundColor;
      b = b === void 0 ? "white" : b;
      var d = a.icon,
        e = a.overflow,
        f = a.pressed;
      a = a.size;
      return h.jsx(c("CometPressableChildrenWithOverlay.react"), {
        overlay: h.jsx(c("CometPressableOverlay.react"), {
          offset: 0,
          pressed: f,
          radius: "50%",
        }),
        children: h.jsx("div", {
          className:
            "x6s0dn4 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x14yjl9h xudhj91 x18nykt9 xww2gxu x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k xl56j7k xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x6ikm8r x10wlt62 x1n2onr6 x1ja2u2z" +
            (a === 16
              ? " xs9asl8 x1mpkggp x1t2a60a x123j3cw xd7y6wv x23j0i4"
              : "" +
                (a === 10
                  ? " xs9asl8 x1mpkggp x1t2a60a x123j3cw x17rw0jw x17z2i9w"
                  : " x18d9i69 x4uap5 xkhd6sd xexx8yu" +
                    (a === 8 ? " x1v9usgg x6jxa94" : ""))),
          style: { backgroundColor: b, overflow: e },
          children: d,
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "TetraProfilePhoto.react",
  ["CometProfilePhoto.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometProfilePhoto.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "XPlatReactToasterView.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { visibleToasts: [] }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getDerivedStateFromProps = function (a, b) {
        b = b != null ? b.visibleToasts.slice(0, a.maxVisible) : [];
        var c = 0,
          d = a.filterToasts,
          e = a.toasterState,
          f = {},
          g =
            d != null
              ? Object.keys(e).filter(function (b) {
                  var c,
                    g = e[b];
                  f[b] = g;
                  var h = g == null ? void 0 : g.shown;
                  c =
                    g == null
                      ? void 0
                      : (c = g.value) == null
                      ? void 0
                      : (c = c.type) == null
                      ? void 0
                      : c.name;
                  if (g == null || c == null) return !0;
                  if (d.has(c) && !h) {
                    a.onExpireToast(b);
                    return !1;
                  }
                })
              : Object.keys(e),
          h = b.reduce(function (a, b) {
            b != null && a.add(b.id);
            return a;
          }, new Set()),
          i = 0;
        while (c < a.maxVisible) {
          var j = b[c],
            k = Object.keys(f).length > 0 ? f : a.toasterState;
          if (j != null) {
            k = Object.prototype.hasOwnProperty.call(k, j.id);
            if (k) {
              k = e[j.id];
              b[c] = { expired: k.expired, id: k.id, toast: k.value };
              c++;
              continue;
            } else b[c] = null;
          }
          j = null;
          while (j == null && i < g.length) {
            k = g[i++];
            var l = h.has(k);
            l || (j = a.toasterState[k]);
          }
          j != null &&
            (b[c] = { expired: j.expired, id: j.id, toast: j.value });
          c++;
        }
        return { visibleToasts: b };
      };
      var c = b.prototype;
      c.render = function () {
        var a = this;
        return h.jsx(h.Fragment, {
          children: this.state.visibleToasts.map(function (b, c) {
            return b != null
              ? a.props.children(b.toast, b.id, b.expired, c)
              : null;
          }),
        });
      };
      return b;
    })(h.PureComponent);
    a.defaultProps = { maxVisible: 1 };
    g["default"] = a;
  },
  98
);
__d(
  "CometToasterView_DO_NOT_USE.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BasePortal.react",
    "BaseToastAnimationInternal.react",
    "CometGlobalPanelGating",
    "XPlatReactToasterView.react",
    "gkx",
    "react",
    "useCometRouterState",
    "useToasterStateManager",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = {
        list: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          listStyle: "xe8uvvx",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        root: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          end: "xds687c",
          pointerEvents: "x47corl",
          position: "xixxii4",
          start: "x1uvyrtv",
          zIndex: "xoegz02",
          $$css: !0,
        },
        rootBlue: { zIndex: "x1jvg36b", $$css: !0 },
        rootWithGlobalPanelHome: {
          start: "x17qophe",
          "@media (max-width: 1159px)_start": "xv0u79y",
          $$css: !0,
        },
        rootWorkplaceLegacy: { zIndex: "xdwmgzo", $$css: !0 },
        toast: {
          paddingTop: "xyamay9",
          paddingEnd: "x1pi30zi",
          paddingBottom: "x1l90r2v",
          paddingStart: "x1swvt13",
          pointerEvents: "x71s49j",
          "@media (max-width: 899px)_maxWidth": "xx1nl2z",
          $$css: !0,
        },
      },
      l = {
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
      },
      m = {
        full: { maxWidth: "x193iq5w", $$css: !0 },
        regular: { maxWidth: "xpqan2r", $$css: !0 },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "start" : b;
      var e = a.filterToasts,
        f = a.maxVisible;
      f = f === void 0 ? 1 : f;
      a = a.maxWidth;
      var g = a === void 0 ? "full" : a,
        n = c("useToasterStateManager")();
      a = j(function () {
        return n.getEmptyState();
      });
      var o = a[0],
        p = a[1];
      i(
        function () {
          var a = n.registerView(p, 0);
          return a.remove;
        },
        [n]
      );
      a =
        ((a = c("useCometRouterState")()) == null
          ? void 0
          : a.main.route.tabKey) === "home";
      return h.jsx(c("BasePortal.react"), {
        target: document.body,
        xstyle: [
          k.root,
          c("gkx")("708253")
            ? d("CometGlobalPanelGating").isGlobalPanelEnabled() && a
              ? k.rootWithGlobalPanelHome
              : null
            : c("gkx")("1341692")
            ? k.rootWorkplaceLegacy
            : k.rootBlue,
          l[b],
        ],
        children: h.jsx("ul", {
          className: "x78zum5 xdt5ytf xe8uvvx x193iq5w",
          children: h.jsx(c("XPlatReactToasterView.react"), {
            filterToasts: e,
            maxVisible: f,
            onExpireToast: function (a) {
              n.expire(a);
            },
            toasterState: o,
            children: function (a, b, d, e) {
              return h.jsx(
                c("BaseToastAnimationInternal.react"),
                {
                  expired: d,
                  id: b,
                  position: e,
                  xstyle: [k.toast, m[c("gkx")("1196") ? "regular" : g]],
                  children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                    children: a,
                  }),
                },
                e
              );
            },
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BDSignalBufferData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "BDSignalWrapper",
  ["BDSignalBufferData", "SignalCollectorMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.signalFlags = a), (this.signalType = b);
      }
      var b = a.prototype;
      b.getSignalCollector = function () {
        return c("SignalCollectorMap").get(this.signalType);
      };
      b.getBufferConfig = function () {
        return c("BDSignalBufferData")[this.signalType];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "SignalValueContext",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.cn = a;
      }
      var b = a.prototype;
      b.getSignalValueContextName = function () {
        return this.cn;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BDSignalCollectorBase",
  ["BDSignalBufferData", "SignalValueContext", "regeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.signalType = a;
      }
      var d = a.prototype;
      d.executeSignalCollection = function () {
        throw new Error(
          "Child class responsibility to implement executeSignalCollection"
        );
      };
      d.executeAsyncSignalCollection = function () {
        var a;
        return b("regeneratorRuntime").async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b("regeneratorRuntime").awrap(
                    this.executeSignalCollection()
                  );
                case 2:
                  a = c.sent;
                  return c.abrupt("return", a);
                case 4:
                case "end":
                  return c.stop();
              }
          },
          null,
          this
        );
      };
      a.getSanitizedURI = function () {
        var a = window.location.href,
          b = a.indexOf("?");
        return b < 0 ? a : a.substring(0, b);
      };
      d.getContext = function () {
        return new (c("SignalValueContext"))(a.getSanitizedURI());
      };
      d.throwIfNotInitialized = function () {
        if (!(this.signalType in c("BDSignalBufferData")))
          throw new Error("Signal is not intialized");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "BDLoggingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { ERROR: "error", WARNING: "warning", INFO: "info" };
    b = {
      KEY_NOT_FOUND: "key_not_found",
      APPEND_SIGNAL: "bd_append_signal",
      APPEND_SIGNAL_FAIL: "bd_append_signal_fail",
      HB_COLLECTED: "append_hb",
      HB_COLLECTION_FAILED: "hb_collection_failed",
      BD_EXCEPTION: "bd_exception",
      SIGNAL_NOT_IMPLEMENTED: "signal_not_implemented",
      SIGNAL_VALUE_NULL: "signal_value_null",
      EMPTY_SIGNAL_CONFIG: "empty_signal_config",
      INVALID_BUFFER_SIZE: "invalid_buffer_size",
      INVALID_DURATION: "invalid_duration",
      SIGNAL_FLAGS_MISSING: "signal_flags_missing",
      DYNAMIC_SIGNAL_COLLECTION_STARTED: "dynamic_signal_collection_started",
      BIOMETRIC_SIGNAL_COLLECTION_STARTED:
        "biometric_signal_collection_started",
      INVALID_GUID: "invalid_guid",
      INVALID_LENGTH: "invalid_length",
      GET_LOCAL_STORAGE_ERROR: "get_local_storage_error",
      WEB_STORAGE: "web_storage",
      PARSE_CONFIG_ERROR: "parse_config_error",
      HB_START_FAILURE: "hb_start_failure",
      HB_ALREADY_RUNNING: "hb_already_running",
      TRY_RESTARTING_HB: "try_restarting_hb",
      BANZAI_LOG_ERROR: "banzai_log_error",
    };
    c = "JS";
    f.LEVELS = a;
    f.OPERATIONS = b;
    f.COMPONENT_NAME = c;
  },
  66
);
__d(
  "BDOperationTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:BDOperationLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:BDOperationLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:BDOperationLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setBdSessionID = function (a) {
        this.$1.bd_session_id = a;
        return this;
      };
      c.setComponent = function (a) {
        this.$1.component = a;
        return this;
      };
      c.setDurationUs = function (a) {
        this.$1.duration_us = a;
        return this;
      };
      c.setExceptionMessage = function (a) {
        this.$1.exception_message = a;
        return this;
      };
      c.setExceptionStackTrace = function (a) {
        this.$1.exception_stack_trace = a;
        return this;
      };
      c.setExceptionType = function (a) {
        this.$1.exception_type = a;
        return this;
      };
      c.setIntValue = function (a) {
        this.$1.int_value = a;
        return this;
      };
      c.setLevel = function (a) {
        this.$1.level = a;
        return this;
      };
      c.setOperation = function (a) {
        this.$1.operation = a;
        return this;
      };
      c.setOperationInfo = function (a) {
        this.$1.operation_info = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setSessionlets = function (a) {
        this.$1.sessionlets = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      return a;
    })();
    c = {
      bd_session_id: !0,
      component: !0,
      duration_us: !0,
      exception_message: !0,
      exception_stack_trace: !0,
      exception_type: !0,
      int_value: !0,
      level: !0,
      operation: !0,
      operation_info: !0,
      sessionlets: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "BDOperationLogHelper",
  ["BDLoggingConstants", "BDOperationTypedLogger", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      h(a, d("BDLoggingConstants").LEVELS.INFO, b, c, e);
    }
    function b(a, b, c, e) {
      h(a, d("BDLoggingConstants").LEVELS.WARNING, b, c, e);
    }
    function e(a, b, c, e) {
      h(a, d("BDLoggingConstants").LEVELS.ERROR, b, c, e);
    }
    function h(a, b, e, f, g) {
      f === void 0 && (f = {});
      if (d("Random").coinflip(i(e))) {
        if (f === null) throw new Error("opeartion info null");
        f.source = a;
        new (c("BDOperationTypedLogger"))()
          .setLevel(b)
          .setDurationUs(g)
          .setOperation(e)
          .setComponent(d("BDLoggingConstants").COMPONENT_NAME)
          .setOperationInfo(f)
          .log();
      }
    }
    function i(a) {
      var b = d("BDLoggingConstants").OPERATIONS;
      switch (a) {
        case b.APPEND_SIGNAL:
        case b.HB_COLLECTED:
        case b.GET_LOCAL_STORAGE_ERROR:
        case b.WEB_STORAGE:
        case b.SIGNAL_NOT_IMPLEMENTED:
        case b.BIOMETRIC_SIGNAL_COLLECTION_STARTED:
          return 1e3;
        default:
          return 1;
      }
    }
    g.logInfo = a;
    g.logWarning = b;
    g.logError = e;
    g.log = h;
    g.getFlipSamplingByOperation = i;
  },
  98
);
__d(
  "SignalErrorValueTypeDef",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "ec",
      h = "en",
      i = "es",
      j = 500;
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), c != null && (this.$3 = c.substr(0, j));
      }
      var b = a.prototype;
      b.getErrorCode = function () {
        return this.$1;
      };
      b.getErrorName = function () {
        return this.$2;
      };
      b.getErrorDetails = function () {
        return this.$3;
      };
      b.isEqual = function (a) {
        return (
          this.$1 === a.getErrorCode() &&
          this.$3 === a.getErrorDetails() &&
          this.$2 === a.getErrorName()
        );
      };
      b.toJSON = function () {
        var a = {};
        a[g] = this.$1;
        switch (this.$1) {
          case 0:
            a[h] = this.$2;
            a[i] = this.$3;
            break;
        }
        return a;
      };
      return a;
    })();
    f.SignalErrorValueTypeDef = a;
  },
  66
);
__d(
  "SignalValueTypeDef",
  ["BDLoggingConstants", "BDOperationLogHelper", "SignalErrorValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "SignalValueTypeDef",
      i = "t",
      j = "ctx",
      k = "v",
      l = "e",
      m = {
        NUMBER: "NUMBER",
        STRING: "STRING",
        BOOLEAN: "BOOLEAN",
        CUSTOM_OBJECT: "CUSTOM_OBJECT",
        INT_ARRAY: "INT_ARRAY",
        TOUCH: "TOUCH",
        MAP: "MAP",
        LIST: "LIST",
        SENSOR: "SENSOR",
        ERROR: "ERROR",
      };
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e != null ? e : 0);
      }
      var b = a.prototype;
      b.getTimeStampMS = function () {
        return this.$1;
      };
      b.getSignalContext = function () {
        return this.$2;
      };
      b.getSignalValue = function () {
        return this.$3;
      };
      b.getSignalValueType = function () {
        return this.$4;
      };
      b.isEqual = function (a, b) {
        if (a == null) {
          d("BDOperationLogHelper").logWarning(
            h,
            d("BDLoggingConstants").OPERATIONS.SIGNAL_VALUE_NULL
          );
          return !1;
        }
        if (this.getSignalValueType() !== a.getSignalValueType()) return !1;
        if (
          this.getSignalValueType() === m.ERROR &&
          a.getSignalValueType() === m.ERROR
        )
          return this.equalValue(a);
        var c = !1;
        b.has(128) && (c = this.equalValue(a));
        b.has(256) &&
          (c =
            c &&
            this.getSignalContext() != null &&
            a.getSignalContext() != null &&
            this.getSignalContext().getSignalValueContextName() ===
              a.getSignalContext().getSignalValueContextName());
        b.has(512) &&
          (c =
            c &&
            Math.abs(this.getTimeStampMS() - a.getTimeStampMS()) <= this.$5);
        return c;
      };
      b.equalValue = function (a) {
        if (this.isPrimitiveType())
          return this.getSignalValue() === a.getSignalValue();
        throw new Error("Must implement in the subclasses");
      };
      b.toJSON = function (a) {
        var b = {};
        a && ((b[i] = this.$1 / 1e3), this.$2 != null && (b[j] = this.$2));
        this.$3 == null
          ? (b[l] = new (d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
              2
            ))
          : this.addValueOrErrorToJSON(b);
        return b;
      };
      b.addValueOrErrorToJSON = function (a) {
        if (this.isPrimitiveType()) a[k] = this.$3;
        else throw new Error("Must implement in the subclasses");
      };
      b.isPrimitiveType = function () {
        switch (typeof this.$3) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      };
      return a;
    })();
    g.BD_VALUE = k;
    g.BD_ERROR = l;
    g.VALUE_TYPES = m;
    g.SignalValueTypeDef = a;
  },
  98
);
__d(
  "ErrorSignalValueType",
  ["SignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.ERROR) ||
          this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d("SignalValueTypeDef").BD_ERROR] = this.getSignalValue().toJSON();
      };
      return b;
    })(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "NumberSignalValueType",
  ["SignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.NUMBER) ||
          this
        );
      }
      return b;
    })(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "BDConnectionRTTSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "NumberSignalValueType",
    "SignalErrorValueTypeDef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          if (
            navigator.connection != null &&
            navigator.connection.rtt != null
          ) {
            var a = navigator.connection.rtt;
            a = new (c("NumberSignalValueType"))(
              Date.now(),
              this.getContext(),
              a
            );
          } else
            a = new (c("ErrorSignalValueType"))(
              Date.now(),
              this.getContext(),
              new (d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                3,
                "navigator.connection.rtt not supported"
              )
            );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30004,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "CustomObjectSignalValueType",
  ["SignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("SignalValueTypeDef").VALUE_TYPES.CUSTOM_OBJECT
          ) || this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d("SignalValueTypeDef").BD_VALUE] = this.getSignalValue().toJSON();
      };
      return b;
    })(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "HeartbeatObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.isAppForeground = !0;
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { f: this.isAppForeground };
      };
      b.isEqual = function (a) {
        return !1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BDHeartbeatSignalCollector",
  ["BDSignalCollectorBase", "CustomObjectSignalValueType", "HeartbeatObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("CustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("HeartbeatObject"))()
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 38e3,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDBiometricSignalCollectorBase",
  ["BDSignalCollectorBase", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = "biometric_signal_collected";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.listenForSignals = function () {
        throw c("err")(
          "Child class responsibility to implement listenForSignals"
        );
      };
      d.executeSignalCollection = function () {
        throw c("err")(
          "executeAsyncSignalCollection and executeSignalCollection should not be called on biometric signals"
        );
      };
      return b;
    })(c("BDSignalCollectorBase"));
    g.BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME = a;
    g.BDBiometricSignalCollectorBase = b;
  },
  98
);
__d(
  "KeyDownUpObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.action = null),
          (this.key_code = null),
          (this.action = a),
          (this.key_code = b);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { action: this.action, key_code: this.key_code };
      };
      b.isEqual = function (b) {
        return b instanceof a
          ? this.action === b.action && this.key_code === b.key_code
          : !1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BDKeyDownUpSignalCollector",
  [
    "BDBiometricSignalCollectorBase",
    "CustomObjectSignalValueType",
    "KeyDownUpObject",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.listenForSignals = function () {
          var a = this;
          c("gkx")("1652843") &&
            (document.addEventListener("keydown", function (b) {
              return a.collectSignals(2);
            }),
            document.addEventListener("keyup", function (b) {
              return a.collectSignals(1);
            }));
        };
        e.collectSignals = function (a) {
          a = new (c("CustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("KeyDownUpObject"))(a, 0)
          );
          a = { signalId: this.signalType, data: { valueOrError: a } };
          window.dispatchEvent(
            new CustomEvent(
              d(
                "BDBiometricSignalCollectorBase"
              ).BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
              { detail: a }
            )
          );
        };
        return a;
      })(d("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase),
      i = null,
      j = {
        signalType: 30100,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "StringArrayObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.strings = []), (this.strings = a);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return this.strings;
      };
      b.isEqual = function (b) {
        if (!(b instanceof a)) return !1;
        if (b.strings === this.strings) return !0;
        if (b.strings.length !== this.strings.length) return !1;
        for (var c = 0; c < this.strings.length; c++)
          if (this.strings[c] !== b.strings[c]) return !1;
        return !0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BDLanguagesSignalCollector",
  ["BDSignalCollectorBase", "CustomObjectSignalValueType", "StringArrayObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = [].concat(navigator.languages);
          a = new (c("CustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("StringArrayObject"))(a)
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30003,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDMimeTypeCountSignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.mimeTypes ? navigator.mimeTypes.length : -1;
          a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30002,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BooleanSignalValueType",
  ["SignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.BOOLEAN) ||
          this
        );
      }
      return b;
    })(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "BDTouchOrMouseSignalCollectorBase",
  [
    "BDBiometricSignalCollectorBase",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BooleanSignalValueType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDTouchOrMouseSignalCollectorBase";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this, b) || this;
        e.eventsToSubscribe = [];
        e.pauseTimeout = 60 * 60 * 1e3;
        e.eventsToSubscribe = c;
        e.pauseTimeout = d;
        e.handler = function (a) {
          return e.collectSignals(a);
        };
        return e;
      }
      var e = b.prototype;
      e.listenForSignals = function () {
        this.collectSignals(), this.addListeners();
      };
      e.addListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          try {
            document.addEventListener(b, a.handler);
          } catch (a) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.BD_EXCEPTION,
              { e: a }
            );
          }
        });
      };
      e.pauseListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          document.removeEventListener(b, a.handler);
        });
        window.setTimeout(function () {
          return a.addListeners();
        }, this.pauseTimeout);
      };
      e.collectSignals = function (a) {
        a = a != null;
        a && this.pauseListeners();
        a = new (c("BooleanSignalValueType"))(Date.now(), this.getContext(), a);
        a = { signalId: this.signalType, data: { valueOrError: a } };
        window.dispatchEvent(
          new CustomEvent(
            d(
              "BDBiometricSignalCollectorBase"
            ).BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
            { detail: a }
          )
        );
      };
      return b;
    })(d("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase);
    g["default"] = a;
  },
  98
);
__d(
  "BDMousePresenceSignalCollector",
  ["BDTouchOrMouseSignalCollectorBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ["mousedown", "mousemove"], h) || this
          );
        }
        return a;
      })(c("BDTouchOrMouseSignalCollectorBase")),
      j = null,
      k = {
        signalType: 30106,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "StringSignalValueType",
  ["SignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(this, b, c, e, d("SignalValueTypeDef").VALUE_TYPES.STRING) ||
          this
        );
      }
      return b;
    })(d("SignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorAppVersionSignalCollector",
  ["BDSignalCollectorBase", "StringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.appVersion;
          a = new (c("StringSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30013,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorHardwareConcurrencySignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            (a = navigator.hardwareConcurrency) != null ? a : 0
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30018,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorMaxTouchPointSignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.maxTouchPoints
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30093,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorNotificationPermissionSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringSignalValueType",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (e) {
        babelHelpers.inheritsLoose(a, e);
        function a() {
          return e.call(this, j.signalType) || this;
        }
        var f = a.prototype;
        f.executeAsyncSignalCollection = function () {
          var a, e;
          return b("regeneratorRuntime").async(
            function (f) {
              while (1)
                switch ((f.prev = f.next)) {
                  case 0:
                    f.prev = 0;
                    if (!navigator.permissions) {
                      f.next = 8;
                      break;
                    }
                    f.next = 4;
                    return b("regeneratorRuntime").awrap(
                      navigator.permissions.query({ name: "notifications" })
                    );
                  case 4:
                    e = f.sent;
                    a = new (c("StringSignalValueType"))(
                      Date.now(),
                      this.getContext(),
                      e.state
                    );
                    f.next = 9;
                    break;
                  case 8:
                    a = new (c("ErrorSignalValueType"))(
                      Date.now(),
                      this.getContext(),
                      new (d(
                        "SignalErrorValueTypeDef"
                      ).SignalErrorValueTypeDef)(
                        3,
                        "navigator.permissions not supported"
                      )
                    );
                  case 9:
                    f.next = 14;
                    break;
                  case 11:
                    (f.prev = 11),
                      (f.t0 = f["catch"](0)),
                      (a = new (c("ErrorSignalValueType"))(
                        Date.now(),
                        this.getContext(),
                        new (d(
                          "SignalErrorValueTypeDef"
                        ).SignalErrorValueTypeDef)(
                          3,
                          "notifications cannot be queried from navigator.permissions"
                        )
                      ));
                  case 14:
                    return f.abrupt("return", { valueOrError: a });
                  case 15:
                  case "end":
                    return f.stop();
                }
            },
            null,
            this,
            [[0, 11]]
          );
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30008,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorPlatformSignalCollector",
  ["BDSignalCollectorBase", "StringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("StringSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.platform
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30015,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorPluginsFileExtensionsSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringArrayObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, k.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          var a = null;
          try {
            var b = navigator.plugins ? navigator.plugins.length : 0,
              e = new Set();
            for (var f = 0; f < b; f++) {
              var g = navigator.plugins[f].filename;
              if (!g) continue;
              var i = g.indexOf(".");
              if (i == -1 || i == g.length - 1) continue;
              e.add(g.substr(i + 1));
              if (e.size >= h) break;
            }
            e.size && (a = new (c("StringArrayObject"))(Array.from(e)));
          } catch (b) {
            a = new (c("ErrorSignalValueType"))(
              Date.now(),
              this.getContext(),
              new (d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                3,
                "navigator.plugins is not defined"
              )
            );
          }
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      j = null,
      k = {
        signalType: 30019,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorUserAgentSignalCollector",
  ["BDSignalCollectorBase", "StringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("StringSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.userAgent
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30094,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNavigatorVendorSignalCollector",
  ["BDSignalCollectorBase", "StringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.vendor;
          a = new (c("StringSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30012,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDNotificationPermissionSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringSignalValueType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          var a;
          window.Notification
            ? (a = new (c("StringSignalValueType"))(
                Date.now(),
                this.getContext(),
                Notification.permission
              ))
            : (a = new (c("ErrorSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (d("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                  3,
                  "Notification not supported"
                )
              ));
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30007,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDPluginCountSignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.plugins ? navigator.plugins.length : -1;
          a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDTimezoneOffsetSignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            (a = new Date().getTimezoneOffset()) != null ? a : 999
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30040,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDTouchPresenceSignalCollector",
  ["BDTouchOrMouseSignalCollectorBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ["touchstart", "touchcancel"], h) || this
          );
        }
        return a;
      })(c("BDTouchOrMouseSignalCollectorBase")),
      j = null,
      k = {
        signalType: 30107,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "BDWebdriverSignalCollector",
  ["BDSignalCollectorBase", "BooleanSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = !!navigator.webdriver;
          a = new (c("BooleanSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 3e4,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDWebglSupportSignalCollector",
  ["BDSignalCollectorBase", "BooleanSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = document.createElement("canvas"),
            b = null;
          try {
            b = a.getContext("webgl") || a.getContext("experimental-webgl");
          } catch (a) {}
          a = Boolean(b);
          b = new (c("BooleanSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: b };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30022,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDWindowHistoryLengthSignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("NumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            window.history ? window.history.length : 0
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30095,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "DimensionObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.width = null),
          (this.height = null),
          (this.width = a),
          (this.height = b);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { w: this.width, h: this.height };
      };
      b.isEqual = function (b) {
        if (b instanceof a)
          return this.width === b.width && this.height === b.height;
        else return !1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "BDWindowOuterDimensionSignalCollector",
  ["BDSignalCollectorBase", "CustomObjectSignalValueType", "DimensionObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = window.innerHeight,
            b = window.innerWidth;
          b = new (c("CustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("DimensionObject"))(b, a)
          );
          return { valueOrError: b };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30005,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "SignalCollectorMap",
  [
    "BDConnectionRTTSignalCollector",
    "BDHeartbeatSignalCollector",
    "BDHeartbeatV2SignalCollector",
    "BDKeyDownUpSignalCollector",
    "BDLanguagesSignalCollector",
    "BDMimeTypeCountSignalCollector",
    "BDMousePresenceSignalCollector",
    "BDNavigatorAppVersionSignalCollector",
    "BDNavigatorHardwareConcurrencySignalCollector",
    "BDNavigatorMaxTouchPointSignalCollector",
    "BDNavigatorNotificationPermissionSignalCollector",
    "BDNavigatorPlatformSignalCollector",
    "BDNavigatorPluginsFileExtensionsSignalCollector",
    "BDNavigatorUserAgentSignalCollector",
    "BDNavigatorVendorSignalCollector",
    "BDNotificationPermissionSignalCollector",
    "BDPluginCountSignalCollector",
    "BDTimezoneOffsetSignalCollector",
    "BDTouchPresenceSignalCollector",
    "BDWebdriverSignalCollector",
    "BDWebglSupportSignalCollector",
    "BDWindowHistoryLengthSignalCollector",
    "BDWindowOuterDimensionSignalCollector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      get: function (a) {
        switch (a) {
          case 3e4:
            return c("BDWebdriverSignalCollector").get();
          case 30001:
            return c("BDPluginCountSignalCollector").get();
          case 30002:
            return c("BDMimeTypeCountSignalCollector").get();
          case 30003:
            return c("BDLanguagesSignalCollector").get();
          case 30004:
            return c("BDConnectionRTTSignalCollector").get();
          case 30005:
            return c("BDWindowOuterDimensionSignalCollector").get();
          case 30007:
            return c("BDNotificationPermissionSignalCollector").get();
          case 30008:
            return c("BDNavigatorNotificationPermissionSignalCollector").get();
          case 30012:
            return c("BDNavigatorVendorSignalCollector").get();
          case 30013:
            return c("BDNavigatorAppVersionSignalCollector").get();
          case 30015:
            return c("BDNavigatorPlatformSignalCollector").get();
          case 30018:
            return c("BDNavigatorHardwareConcurrencySignalCollector").get();
          case 30019:
            return c("BDNavigatorPluginsFileExtensionsSignalCollector").get();
          case 30022:
            return c("BDWebglSupportSignalCollector").get();
          case 30040:
            return c("BDTimezoneOffsetSignalCollector").get();
          case 30093:
            return c("BDNavigatorMaxTouchPointSignalCollector").get();
          case 30094:
            return c("BDNavigatorUserAgentSignalCollector").get();
          case 30095:
            return c("BDWindowHistoryLengthSignalCollector").get();
          case 30100:
            return c("BDKeyDownUpSignalCollector").get();
          case 30106:
            return c("BDMousePresenceSignalCollector").get();
          case 30107:
            return c("BDTouchPresenceSignalCollector").get();
          case 38e3:
            return c("BDHeartbeatSignalCollector").get();
          case 38001:
            return c("BDHeartbeatV2SignalCollector").get();
        }
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "HeartbeatV2Object",
  ["HeartbeatObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.id = "";
        c.id = b;
        return c;
      }
      var c = b.prototype;
      c.toJSON = function () {
        return { f: this.isAppForeground, id: this.id };
      };
      return b;
    })(c("HeartbeatObject"));
    g["default"] = a;
  },
  98
);
__d(
  "BDHeartbeatV2SignalCollector",
  [
    "BDClientConfig",
    "BDSignalCollectorBase",
    "CustomObjectSignalValueType",
    "HeartbeatV2Object",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("CustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("HeartbeatV2Object"))(
              c("BDClientConfig").get().getHeartbeatVersion()
            )
          );
          return { valueOrError: a };
        };
        return a;
      })(c("BDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 38001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "BDClientConfig",
  ["BDLoggingConstants", "BDOperationLogHelper", "BDSignalWrapper"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientConfig",
      i = (function () {
        function a() {
          (this.staticSignalBufferSize = 1),
            (this.dynamicSignalBufferSize = 1),
            (this.biometricSignalBufferSize = 1),
            (this.staticSignals = []),
            (this.dynamicSignals = []),
            (this.biometricSignals = []),
            (this.biometricSignalsMap = new Map()),
            (this.heartbeatSignal = new (c("BDSignalWrapper"))([], 38001)),
            (this.bufferSizeBySignalIdMap = {}),
            (this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER),
            (this.signalConfigGenerationTimeStampMs = 0),
            (this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.heartbeatIntervalMs = -1),
            (this.parsingDone = !1),
            (this.sid = -1),
            (this.hbVersion = ""),
            (this.bufferSizeBySignalIdMap[38001] = 1);
        }
        var b = a.prototype;
        b.setStaticSignalBufferSize = function (a) {
          a > 0
            ? (this.staticSignalBufferSize = a)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: "s" }
              );
          return this;
        };
        b.getStaticSignalBufferSize = function () {
          return this.staticSignalBufferSize;
        };
        b.setDynamicSignalBufferSize = function (a) {
          a > 1
            ? (this.dynamicSignalBufferSize = a)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: "d" }
              );
          return this;
        };
        b.getDynamicSignalBufferSize = function () {
          return this.dynamicSignalBufferSize;
        };
        b.setBiometricSignalBufferSize = function (a) {
          a > 1
            ? (this.biometricSignalBufferSize = a)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: "b" }
              );
          return this;
        };
        b.setSID = function (a) {
          this.sid = a;
          return this;
        };
        b.setHeartbeatVersion = function (a) {
          this.hbVersion = a;
          return this;
        };
        b.getHeartbeatVersion = function () {
          return this.hbVersion;
        };
        b.getBiometricSignalBufferSize = function () {
          return this.biometricSignalBufferSize;
        };
        b.setConfigGenerationTimeStamp = function (a) {
          this.signalConfigGenerationTimeStampMs = a;
          return this;
        };
        b.getConfigGenerationTimeStamp = function () {
          return this.signalConfigGenerationTimeStampMs;
        };
        b.setHeartbeatIntervalMinutes = function (a) {
          this.heartbeatIntervalMs = a * 60 * 1e3;
          return this;
        };
        b.getHeartbeatIntervalMs = function () {
          return this.heartbeatIntervalMs;
        };
        b.setSuspiciousTiersFlushDurationMinutes = function (a) {
          a > 0
            ? (this.suspiciousTiersFlushDurationMs = a * 60 * 1e3)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: "fds" }
              );
          return this;
        };
        b.getSuspiciousTiersFlushDurationMs = function () {
          return this.suspiciousTiersFlushDurationMs;
        };
        b.setAllTiersFlushDurationMinutes = function (a) {
          a > 0
            ? (this.allTiersFlushDurationMs = a * 60 * 1e3)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: "fda" }
              );
          return this;
        };
        b.getAllTiersFlushDurationMs = function () {
          return this.allTiersFlushDurationMs;
        };
        b.addMultipleSignalsToClientConfig = function (a) {
          var b = this;
          a.forEach(function (a) {
            return b.addSignalToClientConfig(a);
          });
          return this;
        };
        b.addSignalToClientConfig = function (a) {
          var b = a.getSignalFlags(),
            d = a.getSignalId();
          if (d === 38e3) return this;
          var e = new (c("BDSignalWrapper"))(b, d);
          if (d === 38001) {
            this.heartbeatSignal = e;
            return this;
          }
          !b.includes(2)
            ? this.staticSignals.push(e)
            : b.includes(4)
            ? this.biometricSignals.push(e)
            : this.dynamicSignals.push(e);
          a.getBufferSize() > 0 &&
            (this.bufferSizeBySignalIdMap[a.getSignalId()] = a.getBufferSize());
          return this;
        };
        b.setPeriodicCollectionIntervalSeconds = function (a) {
          a > 0
            ? (this.periodicCollectionIntervalMs = a * 1e3)
            : d("BDOperationLogHelper").logError(
                h,
                d("BDLoggingConstants").OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: "pi" }
              );
          return this;
        };
        b.getPeriodicCollectionIntervalMs = function () {
          return this.periodicCollectionIntervalMs;
        };
        b.getDynamicSignals = function () {
          return this.dynamicSignals;
        };
        b.getStaticSignals = function () {
          return this.staticSignals;
        };
        b.getBiometricSignals = function () {
          return this.biometricSignals;
        };
        b.getBiometricSignalsMap = function () {
          this.biometricSignalsMap.size === 0 &&
            this.biometricSignals.length > 0 &&
            (this.biometricSignalsMap = this.biometricSignals.reduce(function (
              a,
              b
            ) {
              return a.set(b.signalType, b);
            },
            new Map()));
          return this.biometricSignalsMap;
        };
        b.getHeartbeatSignal = function () {
          return this.heartbeatSignal;
        };
        b.getBufferSizeBySignalId = function (a) {
          return this.bufferSizeBySignalIdMap[a];
        };
        b.setParsingDone = function (a) {
          this.parsingDone = a;
        };
        b.isParsingDone = function () {
          return this.parsingDone;
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "BDCollectionTypeEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({ STATIC: 0, DYNAMIC: 1, BIOMETRIC: 2 });
    f["default"] = a;
  },
  66
);
__d(
  "BDServerSignalConfig",
  ["BDLoggingConstants", "BDOperationLogHelper", "BotDetection_SignalFlags"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerSignalConfig";
    a = (function () {
      function a(a, b, c) {
        (this.parsedSignalFlags = []),
          (this.signalId = a),
          (this.signalFlags = b),
          (this.bufferSize = c);
      }
      var b = a.prototype;
      b.getSignalId = function () {
        return this.signalId;
      };
      b.getSignalFlags = function () {
        var a = this;
        if (this.parsedSignalFlags.length === 0) {
          var b = Object.keys(c("BotDetection_SignalFlags"));
          b.forEach(function (b) {
            (c("BotDetection_SignalFlags")[b] & a.signalFlags) ===
              c("BotDetection_SignalFlags")[b] &&
              a.parsedSignalFlags.push(c("BotDetection_SignalFlags")[b]);
          });
        }
        this.parsedSignalFlags.length === 0 &&
          d("BDOperationLogHelper").logError(
            h,
            d("BDLoggingConstants").OPERATIONS.SIGNAL_FLAGS_MISSING,
            { id: this.signalId.toString(), flags: this.signalFlags.toString() }
          );
        return this.parsedSignalFlags;
      };
      b.getBufferSize = function () {
        return this.bufferSize != null ? this.bufferSize : 0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "BDServerConfig",
  [
    "BDClientConfig",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDServerSignalConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerConfig";
    function a(a) {
      var b = [];
      try {
        var e = JSON.parse(a.sc),
          f = new Map(e.c);
        f.forEach(function (a, d) {
          return b.push(new (c("BDServerSignalConfig"))(d, a));
        });
        if (f.size === 0) {
          d("BDOperationLogHelper").logError(
            h,
            d("BDLoggingConstants").OPERATIONS.EMPTY_SIGNAL_CONFIG
          );
          return;
        }
        f = c("BDClientConfig").get();
        f.setPeriodicCollectionIntervalSeconds(a.i)
          .addMultipleSignalsToClientConfig(b)
          .setConfigGenerationTimeStamp(e.t)
          .setAllTiersFlushDurationMinutes(a.fda)
          .setSuspiciousTiersFlushDurationMinutes(a.fds)
          .setHeartbeatIntervalMinutes(a.hbi)
          .setStaticSignalBufferSize(a.sbs)
          .setDynamicSignalBufferSize(a.dbs)
          .setBiometricSignalBufferSize(a.bbs)
          .setSID(a.sid)
          .setHeartbeatVersion(a.hbv)
          .setParsingDone(!0);
      } catch (a) {
        d("BDOperationLogHelper").logError(
          h,
          d("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
          { e: a }
        );
      }
    }
    g.parseConfig = a;
  },
  98
);
__d(
  "BDSignalBuffer",
  [
    "BDClientConfig",
    "BDCollectionTypeEnum",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDSignalBufferData",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDSignalBuffer";
    function a(a, b, d) {
      if (a in c("BDSignalBufferData")) return;
      var e = 1;
      b !== void 0 && (e = b);
      c("BDSignalBufferData")[a] = {
        values: [],
        max_buffer_size: e,
        signal_flags: (b = d) != null ? b : [],
      };
    }
    function i(a) {
      if (a in c("BDSignalBufferData")) c("BDSignalBufferData")[a].values = [];
      else
        throw new Error(
          "Tried to clear signal buffer that was not intialized:"
        );
    }
    function b(a, b) {
      if (a in c("BDSignalBufferData")) {
        var e = c("BDSignalBufferData")[a],
          f = e.max_buffer_size;
        e.values.length >= f && e.values.shift();
        e.values.push(b);
        d("BDOperationLogHelper").logInfo(
          h,
          d("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL,
          { id: a.toString() }
        );
      } else {
        d("BDOperationLogHelper").logError(
          h,
          d("BDLoggingConstants").OPERATIONS.APPEND_SIGNAL_FAIL,
          { id: a.toString() }
        );
        throw new Error("Tried to append signal that was not intialized:");
      }
    }
    function e() {
      var a = c("BDClientConfig").get();
      a = a.getBiometricSignals();
      a.forEach(function (a) {
        a.signalType in c("BDSignalBufferData") && i(a.signalType);
      });
    }
    function f(a) {
      var b;
      a = c("BDSignalBufferData")[a];
      b = a == null ? void 0 : (b = a.values) == null ? void 0 : b.length;
      return b != null && b > 0 ? a.values[b - 1] : { valueOrError: void 0 };
    }
    function j(a) {
      return c("BDSignalBufferData")[a].values;
    }
    function k(a) {
      var b = {};
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e in c("BDSignalBufferData") &&
          (b[e] = j(e).map(function (a) {
            return a.valueOrError;
          }));
      }
      return b;
    }
    function l(a) {
      a = m(a);
      return JSON.stringify(k(a));
    }
    function m(a) {
      var b = c("BDClientConfig").get(),
        d = [];
      a.forEach(function (a) {
        switch (a) {
          case c("BDCollectionTypeEnum").STATIC:
            d = [].concat(d, b.getStaticSignals());
            break;
          case c("BDCollectionTypeEnum").DYNAMIC:
            d = [].concat(d, b.getDynamicSignals());
            break;
          case c("BDCollectionTypeEnum").BIOMETRIC:
            d = [].concat(d, b.getBiometricSignals());
            break;
        }
      });
      return d.map(function (a) {
        return a.signalType;
      });
    }
    g.initialize = a;
    g.clearBuffer = i;
    g.appendSignal = b;
    g.clearBiometricSignals = e;
    g.getLastSignalFormatBySignalId = f;
    g.retrieveSignal = j;
    g.retrieveSignals = k;
    g.getSignalsAsJSONString = l;
    g._getSignalIdsByCollectionType = m;
  },
  98
);
__d(
  "BDUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          a = a == "x" ? b : (b & 3) | 8;
          return a.toString(16);
        }
      );
    }
    f.uuid = a;
  },
  66
);
__d(
  "BdPdcSignalsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743095");
    b = d("FalcoLoggerInternal").create("bd_pdc_signals", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SignalCollectionManager",
  [
    "BDBiometricSignalCollectorBase",
    "BDClientConfig",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDSignalBuffer",
    "Promise",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "SignalCollectionManager",
      i = (function () {
        function a() {
          var a = this;
          this.$1 = !1;
          this.$6 = function (b) {
            if (
              b instanceof CustomEvent &&
              b.detail != null &&
              b.detail.data != null
            ) {
              var d = c("BDClientConfig")
                .get()
                .getBiometricSignalsMap()
                .get(b.detail.signalId);
              d != null && a.$4(b.detail.data, d);
            }
          };
        }
        var e = a.prototype;
        e.collectSignals = function (a) {
          var c = this,
            d;
          return b("regeneratorRuntime").async(
            function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    d = [];
                    a.forEach(function (a) {
                      a.signalFlags.includes(4) ? c.$2(a) : d.push(c.$3(a));
                    });
                    e.next = 4;
                    return b("regeneratorRuntime").awrap(b("Promise").all(d));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            null,
            this
          );
        };
        e.isEqualToLastCollectedSignal = function (a, b) {
          var c = d("BDSignalBuffer").getLastSignalFormatBySignalId(
            b.signalType
          );
          return c.valueOrError == void 0
            ? !1
            : a.isEqual(c.valueOrError, new Set(b.signalFlags));
        };
        e.getCircularBufferSize = function (a) {
          var b = c("BDClientConfig").get(),
            d = b.getBufferSizeBySignalId(a.signalType);
          if (d != null && b.getBufferSizeBySignalId(a.signalType) > 0)
            return d;
          if (!a.signalFlags.includes(2)) return b.getStaticSignalBufferSize();
          else if (a.signalFlags.includes(4))
            return b.getBiometricSignalBufferSize();
          else return b.getDynamicSignalBufferSize();
        };
        e.$3 = function (a) {
          var c, e;
          return b("regeneratorRuntime").async(
            function (f) {
              while (1)
                switch ((f.prev = f.next)) {
                  case 0:
                    c = a.getSignalCollector();
                    if (!(c != null)) {
                      f.next = 12;
                      break;
                    }
                    f.prev = 2;
                    f.next = 5;
                    return b("regeneratorRuntime").awrap(
                      c.executeAsyncSignalCollection()
                    );
                  case 5:
                    e = f.sent;
                    this.$4(e, a);
                    f.next = 12;
                    break;
                  case 9:
                    (f.prev = 9),
                      (f.t0 = f["catch"](2)),
                      d("BDOperationLogHelper").logError(
                        h,
                        d("BDLoggingConstants").OPERATIONS.BD_EXCEPTION,
                        { error: f.t0 }
                      );
                  case 12:
                  case "end":
                    return f.stop();
                }
            },
            null,
            this,
            [[2, 9]]
          );
        };
        e.$2 = function (a) {
          this.$5();
          a = a.getSignalCollector();
          a != null &&
            a instanceof
              d("BDBiometricSignalCollectorBase")
                .BDBiometricSignalCollectorBase &&
            a.listenForSignals();
        };
        e.$5 = function () {
          if (this.$1) return;
          window.addEventListener(
            d("BDBiometricSignalCollectorBase")
              .BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
            this.$6
          );
          this.$1 = !0;
        };
        e.$4 = function (a, b) {
          b.getBufferConfig() == null &&
            d("BDSignalBuffer").initialize(
              b.signalType,
              this.getCircularBufferSize(b),
              b.signalFlags
            ),
            a.valueOrError &&
              !this.isEqualToLastCollectedSignal(a.valueOrError, b) &&
              d("BDSignalBuffer").appendSignal(b.signalType, a);
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "BDClientSignalCollectionTrigger",
  [
    "BDClientConfig",
    "BDCollectionTypeEnum",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDServerConfig",
    "BDSignalBuffer",
    "BDUtils",
    "BdPdcSignalsFalcoEvent",
    "Promise",
    "SignalCollectionManager",
    "WebStorage",
    "javascript-blowfish",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientSignalCollectionTrigger",
      i = "signal_flush_timestamp",
      j = !1,
      k = !1,
      l = !1,
      m = 0,
      n = 0,
      o = 0,
      p = 30,
      q = 5,
      r,
      s,
      t = d("BDUtils").uuid(),
      u = c("BDClientConfig").get(),
      v = Object.freeze({ NONE: 0, VITAL: 1, CRITICAL: 2 }),
      w = {
        startSignalCollection: function (a) {
          return b("regeneratorRuntime").async(
            function (c) {
              while (1)
                switch ((c.prev = c.next)) {
                  case 0:
                    u.setSID(a.sid);
                    if (j) {
                      c.next = 15;
                      break;
                    }
                    j = !0;
                    d("BDServerConfig").parseConfig(a);
                    if (u.isParsingDone()) {
                      c.next = 8;
                      break;
                    }
                    d("BDOperationLogHelper").logError(
                      h,
                      d("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
                      { config: JSON.stringify(a) }
                    );
                    j = !1;
                    return c.abrupt("return");
                  case 8:
                    a != null &&
                      ((n = a.hbcbc && a.hbcbc > 0 ? a.hbcbc : n),
                      (o = a.hbvbc && a.hbvbc > 0 ? a.hbvbc : o),
                      (p = a.hbbi && a.hbbi > 0 ? a.hbbi : p));
                    w.startHeartbeatDelayed();
                    s = new (b("Promise"))(function (a, b) {
                      try {
                        u.getDynamicSignals().length > 0 &&
                          (w.collectDynamicSignals(),
                          d("BDOperationLogHelper").logInfo(
                            h,
                            d("BDLoggingConstants").OPERATIONS
                              .DYNAMIC_SIGNAL_COLLECTION_STARTED,
                            { ts: Date.now().toString() }
                          )),
                          u.getBiometricSignals().length > 0 &&
                            (w.collectBiometricSignals(),
                            d("BDOperationLogHelper").logInfo(
                              h,
                              d("BDLoggingConstants").OPERATIONS
                                .BIOMETRIC_SIGNAL_COLLECTION_STARTED,
                              { ts: Date.now().toString() }
                            )),
                          a();
                      } catch (a) {
                        b(a);
                      }
                    });
                    c.next = 13;
                    return b("regeneratorRuntime").awrap(s);
                  case 13:
                    c.next = 15;
                    return b("regeneratorRuntime").awrap(
                      w.startSignalPosting()
                    );
                  case 15:
                    j &&
                      !k &&
                      !l &&
                      q > 0 &&
                      ((q -= 1),
                      d("BDOperationLogHelper").logWarning(
                        h,
                        d("BDLoggingConstants").OPERATIONS.TRY_RESTARTING_HB
                      ),
                      w.startHeartbeatDelayed());
                  case 16:
                  case "end":
                    return c.stop();
                }
            },
            null,
            this
          );
        },
        retrieveSignals: function () {
          return b("regeneratorRuntime").async(
            function (a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(s);
                  case 2:
                    a.next = 4;
                    return b("regeneratorRuntime").awrap(
                      w.postSignals([
                        c("BDCollectionTypeEnum").DYNAMIC,
                        c("BDCollectionTypeEnum").BIOMETRIC,
                        c("BDCollectionTypeEnum").STATIC,
                      ])
                    );
                  case 4:
                  case "end":
                    return a.stop();
                }
            },
            null,
            this
          );
        },
        postSignals: function (a) {
          return b("regeneratorRuntime").async(
            function (c) {
              while (1)
                switch ((c.prev = c.next)) {
                  case 0:
                    c.next = 2;
                    return b("regeneratorRuntime").awrap(
                      w.collectStaticSignals()
                    );
                  case 2:
                    w._postSignalsHelper(
                      d("BDSignalBuffer").getSignalsAsJSONString(a),
                      v.NONE
                    ) && w.setTimestampInStorage(Date.now(), i);
                  case 3:
                  case "end":
                    return c.stop();
                }
            },
            null,
            this
          );
        },
        _postSignalsHelper: function (a, b) {
          if (a.length <= 2) return !1;
          var e = u.getConfigGenerationTimeStamp(),
            f = w.encryptDataUsingAsid(t, a);
          a = function () {
            return { asid: t, ct: e, sjd: f, sid: u.sid };
          };
          var g = !1;
          try {
            b === v.CRITICAL
              ? c("BdPdcSignalsFalcoEvent").logCritical(a)
              : b === v.VITAL
              ? c("BdPdcSignalsFalcoEvent").logImmediately(a)
              : c("BdPdcSignalsFalcoEvent").log(a),
              (g = !0);
          } catch (a) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.BANZAI_LOG_ERROR,
              a
            ),
              (g = !1);
          } finally {
            return g;
          }
        },
        getInitialVector: function (a) {
          if (a.length !== 16) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.INVALID_LENGTH
            );
            return "";
          }
          var b = "";
          for (var c = 0; c < 8; c++)
            b += String.fromCharCode(a.charCodeAt(c) ^ a.charCodeAt(8 + c));
          return b;
        },
        encryptDataUsingAsid: function (a, b) {
          if (a.length !== 36) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.INVALID_GUID
            );
            return b;
          }
          a = a.slice(19, 23) + a.slice(24, 36);
          var e = w.getInitialVector(a);
          a = new (c("javascript-blowfish"))(a, "cbc");
          return a.base64Encode(a.encrypt(b, e));
        },
        startSignalPosting: function () {
          var a, c;
          return b("regeneratorRuntime").async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    a = w.getTimestampInStorage(i);
                    c = Date.now() - a;
                    if (!(c >= u.getAllTiersFlushDurationMs())) {
                      d.next = 7;
                      break;
                    }
                    d.next = 5;
                    return b("regeneratorRuntime").awrap(
                      w.postSignalsIntermittently()
                    );
                  case 5:
                    d.next = 8;
                    break;
                  case 7:
                    window.setTimeout(function () {
                      w.postSignalsIntermittently();
                    }, u.getAllTiersFlushDurationMs() - c);
                  case 8:
                  case "end":
                    return d.stop();
                }
            },
            null,
            this
          );
        },
        postSignalsIntermittently: function () {
          w.postSignals([c("BDCollectionTypeEnum").STATIC]),
            window.setInterval(function () {
              w.postSignals([
                c("BDCollectionTypeEnum").STATIC,
                c("BDCollectionTypeEnum").DYNAMIC,
                c("BDCollectionTypeEnum").BIOMETRIC,
              ]);
            }, u.getAllTiersFlushDurationMs());
        },
        setTimestampInStorage: function (a, b) {
          var e = c("WebStorage").getLocalStorage();
          if (!e) {
            d("BDOperationLogHelper").logWarning(
              h,
              d("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR
            );
            return;
          }
          e = c("WebStorage").setItemGuarded(e, b, a.toString());
          e != null &&
            d("BDOperationLogHelper").logWarning(
              h,
              d("BDLoggingConstants").OPERATIONS.WEB_STORAGE,
              { error: e.message }
            );
        },
        getTimestampInStorage: function (a) {
          var b = c("WebStorage").getLocalStorage();
          if (!b) {
            d("BDOperationLogHelper").logWarning(
              h,
              d("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR
            );
            return 0;
          }
          b = b.getItem(a);
          if (b == null) return 0;
          a = Number.parseInt(b, 10);
          return Number.isFinite(a) ? a : 0;
        },
        resetHeartbeatStartedForTest: function () {
          (k = !1), (l = !1);
        },
        startHeartbeatDelayed: function () {
          if (k || l) return;
          var a = w.getTimestampInStorage(w.HEARTBEAT_TIMESTAMP_STORAGE_KEY);
          a = Date.now() - a;
          try {
            a >= u.getHeartbeatIntervalMs()
              ? w.startHeartbeat()
              : (window.setTimeout(function () {
                  return w.startHeartbeat();
                }, u.getHeartbeatIntervalMs() - a),
                (l = !0));
          } catch (b) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.HB_START_FAILURE,
              {
                lastBeatSince: a.toString(),
                hbi: u.getHeartbeatIntervalMs().toString(),
                e: b,
              }
            );
          }
        },
        HEARTBEAT_TIMESTAMP_STORAGE_KEY: "hb_timestamp",
        startHeartbeat: function () {
          !k &&
            u.getHeartbeatIntervalMs() > 0 &&
            (w.collectHeartbeatTimes(n, o),
            m !== 0 &&
              (window.clearInterval(m),
              d("BDOperationLogHelper").logWarning(
                h,
                d("BDLoggingConstants").OPERATIONS.HB_ALREADY_RUNNING
              )),
            (m = window.setInterval(function () {
              return w.collectHeartbeatTimes(n, o);
            }, u.getHeartbeatIntervalMs())),
            (k = !0));
        },
        collectHeartbeatTimes: function (a, b) {
          if (a <= 0 && b <= 0) return;
          a > 0 && w.collectHeartbeat(v.CRITICAL);
          b > 0 && w.collectHeartbeat(v.VITAL);
          (a > 1 || b > 1) &&
            window.setTimeout(function () {
              return w.collectHeartbeatTimes(a - 1, b - 1);
            }, p * 1e3);
        },
        collectHeartbeat: function (a) {
          var b;
          b =
            u == null
              ? void 0
              : (b = u.getHeartbeatSignal()) == null
              ? void 0
              : (b = b.getSignalCollector()) == null
              ? void 0
              : b.executeSignalCollection();
          if (b == null) {
            d("BDOperationLogHelper").logError(
              h,
              d("BDLoggingConstants").OPERATIONS.HB_COLLECTION_FAILED,
              { urgency: a.toString() }
            );
            return;
          } else
            d("BDOperationLogHelper").logInfo(
              h,
              d("BDLoggingConstants").OPERATIONS.HB_COLLECTED,
              { urgency: a.toString() }
            );
          w.postHeartbeat(a, b) &&
            w.setTimestampInStorage(
              Date.now(),
              w.HEARTBEAT_TIMESTAMP_STORAGE_KEY
            );
        },
        postHeartbeat: function (a, b) {
          var c = {};
          c[38001] = [b == null ? void 0 : b.valueOrError];
          b = JSON.stringify(c);
          return w._postSignalsHelper(b, a);
        },
        collectStaticSignals: function () {
          return b("regeneratorRuntime").async(
            function (a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    a.next = 2;
                    return b("regeneratorRuntime").awrap(
                      w.collectSignalsOneTime(u.getStaticSignals())
                    );
                  case 2:
                  case "end":
                    return a.stop();
                }
            },
            null,
            this
          );
        },
        collectDynamicSignals: function () {
          w.stopDynamicSignalCollection(),
            (r = window.setInterval(function () {
              return b("regeneratorRuntime").async(
                function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(
                          w.collectSignalsOneTime(u.getDynamicSignals())
                        );
                      case 2:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                this
              );
            }, u.getPeriodicCollectionIntervalMs()));
        },
        collectBiometricSignals: function () {
          w.collectSignalsOneTime(u.getBiometricSignals());
        },
        stopDynamicSignalCollection: function () {
          r != null && (window.clearInterval(r), (r = null));
        },
        collectSignalsOneTime: function (a) {
          return b("regeneratorRuntime").async(
            function (d) {
              while (1)
                switch ((d.prev = d.next)) {
                  case 0:
                    d.next = 2;
                    return b("regeneratorRuntime").awrap(
                      c("SignalCollectionManager").get().collectSignals(a)
                    );
                  case 2:
                  case "end":
                    return d.stop();
                }
            },
            null,
            this
          );
        },
      };
    a = w;
    g["default"] = a;
  },
  98
);
__d(
  "BDCometSignalCollectionTrigger",
  ["BDClientSignalCollectionTrigger", "BDSignalCollectionData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      c("BDClientSignalCollectionTrigger").startSignalCollection(
        c("BDSignalCollectionData")
      );
    }
    g.initSignalCollection = a;
  },
  98
);
__d(
  "ProfileCometViewAsConstants.entrypoint",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "100000686899395";
    f.VIEW_AS_EVERYONE_USER = a;
  },
  66
);
__d(
  "useProfileCometIsViewAs",
  ["Actor", "ProfileCometViewAsConstants.entrypoint"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("Actor").useActor();
      a = a[0];
      return (
        a === d("ProfileCometViewAsConstants.entrypoint").VIEW_AS_EVERYONE_USER
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MAWTTRCSafe",
  ["cr:4783"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      b("cr:4783") == null ? void 0 : b("cr:4783").fail(a);
    }
    function c(a, c) {
      b("cr:4783") == null ? void 0 : b("cr:4783").markEvent(a, c);
    }
    function d(a, c) {
      b("cr:4783") == null ? void 0 : b("cr:4783").addBoolAnnotation(a, c);
    }
    function e(a, c) {
      b("cr:4783") == null ? void 0 : b("cr:4783").addIntAnnotation(a, c);
    }
    function f(a, c) {
      b("cr:4783") == null ? void 0 : b("cr:4783").addStringAnnotation(a, c);
    }
    g.fail = a;
    g.markEvent = c;
    g.addBoolAnnotation = d;
    g.addIntAnnotation = e;
    g.addStringAnnotation = f;
  },
  98
);
__d(
  "CometUserActivity",
  ["BaseEventEmitter", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3,
      i = 500,
      j = -5,
      k = Date.now(),
      l = k,
      m = !1,
      n = Date.now(),
      o = document.hasFocus ? document.hasFocus() : !0,
      p = 0,
      q = Date.now(),
      r = -1,
      s = -1,
      t = !1,
      u = !1,
      v = new (c("BaseEventEmitter"))();
    function b(a) {
      var b = w(function (c, d) {
        b.unsubscribe(), a(d);
      });
      return b;
    }
    function w(a) {
      var b = v.addListener("user_activity", function (b) {
        return a("user_activity", b);
      });
      return {
        unsubscribe: function () {
          return b.remove();
        },
      };
    }
    function d(a) {
      return new Date().getTime() - k < (a != null ? a : h);
    }
    function e() {
      return o;
    }
    function f() {
      return m;
    }
    function x() {
      (o = !0), (m = !1);
    }
    function y() {
      return n;
    }
    function z() {
      return k;
    }
    function A(a) {
      p = a;
    }
    function B() {
      return q;
    }
    function C() {
      return t;
    }
    function D() {
      return u;
    }
    function E() {
      return l;
    }
    function F() {
      (k = Date.now()),
        (l = k),
        (m = !1),
        (n = Date.now()),
        (o = document.hasFocus ? document.hasFocus() : !0),
        (p = 0),
        (q = Date.now()),
        (r = -1),
        (s = -1),
        (t = !1),
        (u = !1);
    }
    function G(a) {
      a.unsubscribe();
    }
    function H(a) {
      J(a, i);
    }
    function I(a) {
      J(a, 0);
    }
    function J(b, c) {
      c === void 0 && (c = 0);
      var d = a.MouseEvent,
        e = a.KeyboardEvent;
      if (d && b instanceof d) {
        if (
          /^mouse(enter|leave|move|out|over)$/.test(b.type) &&
          b.pageX == r &&
          b.pageY == s
        )
          return;
        r = b.pageX;
        s = b.pageY;
      } else e && b instanceof e && (u = !0);
      (b.type === "click" ||
        b.type === "dblclick" ||
        b.type === "contextmenu") &&
        (t = !0);
      k = Date.now();
      d = k - l;
      d >= c
        ? ((l = k),
          o || (q = k),
          d >= (p || h) && ((m = !0), (n = k)),
          v.emit("user_activity", { event: b, idleness: d, last_inform: l }))
        : d < j && (l = k);
    }
    function K(a) {
      (o = !0), (n = Date.now()), I(a);
    }
    function L() {
      (o = !1), (m = !0), (q = Date.now());
    }
    window.addEventListener("scroll", H, { capture: !0, passive: !0 });
    window.addEventListener("focus", K, {
      capture: !c("gkx")("1352"),
      passive: !0,
    });
    window.addEventListener("blur", L, {
      capture: !c("gkx")("1352"),
      passive: !0,
    });
    (function () {
      var a = document.documentElement;
      if (a == null) return;
      ["keydown", "mouseover", "mousemove", "click"].forEach(function (b) {
        a.addEventListener(b, H, { capture: !0, passive: !0 });
      });
    })();
    g.EVENT_INTERVAL_MS = i;
    g.subscribeOnce = b;
    g.subscribe = w;
    g.isActive = d;
    g.isOnTab = e;
    g.hasBeenInactive = f;
    g.resetActiveStatus = x;
    g.getLastInActiveEnds = y;
    g.getLastActive = z;
    g.setIdleTime = A;
    g.getLastLeaveTime = B;
    g.hasClicked = C;
    g.hasInteractedWithKeyboard = D;
    g.getLastInformTime = E;
    g.reset = F;
    g.unsubscribe = G;
  },
  98
);
__d(
  "isAdsExcelAddinURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
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
  "isValidAsyncSignalURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
        "((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)",
        "i"
      ),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.includes(a.getProtocol()) && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "AsyncSignal",
  [
    "ErrorGuard",
    "Promise",
    "QueryString",
    "Run",
    "TimeSlice",
    "TrackingConfig",
    "URI",
    "ZeroRewrites",
    "getAsyncParams",
    "isAdsExcelAddinURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isValidAsyncSignalURI",
    "isWorkplaceDotComURI",
    "memoize",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    var g, h, i;
    function a(a, c) {
      (this.data = c || {}),
        (this.uri = a.toString()),
        b("TrackingConfig").domain &&
          this.uri.charAt(0) == "/" &&
          (this.uri = b("TrackingConfig").domain + this.uri);
    }
    a.prototype.setHandler = function (a) {
      this.handler = a;
      return this;
    };
    a.prototype.setTimeout = function (a) {
      this.timeout = a;
      return this;
    };
    a.prototype.send = function () {
      b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN,
      })();
    };
    a.prototype._send = function () {
      var a = this.handler,
        c = this.data;
      c.asyncSignal = ((Math.random() * 1e4) | 0) + 1;
      var d = b("ZeroRewrites").rewriteURI(new (g || (g = b("URI")))(this.uri));
      d =
        b("isFacebookURI")(d) ||
        b("isMessengerDotComURI")(d) ||
        b("isAdsExcelAddinURI")(d) ||
        b("isWorkplaceDotComURI")(d) ||
        b("isValidAsyncSignalURI")(d);
      if (d) Object.assign(c, b("getAsyncParams")("POST"));
      else
        throw new Error(
          "'" +
            this.uri +
            "' is an external URL, you should not send async signals to offsite links."
        );
      var e = b("QueryString").appendToUrl(this.uri, c);
      i ||
        (i = new (b("Promise"))(function (a) {
          b("Run").onAfterLoad(a);
        }));
      d = i.then(function () {
        return new (b("Promise"))(function (a, b) {
          var c = new Image();
          c.onload = a;
          c.onerror = c.onabort = b;
          c.src = e;
        });
      });
      if (a) {
        var f = !1,
          j = b("memoize")(function () {
            (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f]);
          });
        b("promiseDone")(
          d.then(function () {
            (f = !0), j();
          }, j)
        );
        this.timeout && setTimeout(j, this.timeout);
      }
      return this;
    };
    e.exports = a;
  },
  null
);
__d(
  "AsyncTypedRequest",
  ["AsyncRequest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.setReplaceTransportMarkers();
        return b;
      }
      var c = b.prototype;
      c.promisePayload = function (b) {
        return a.prototype.promisePayload.call(this, b);
      };
      c.setPayloadHandler = function (b) {
        a.prototype.setPayloadHandler.call(this, b);
        return this;
      };
      return b;
    })(c("AsyncRequest"));
    g["default"] = a;
  },
  98
);
__d(
  "StringTransformations",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      unicodeEscape: function (a) {
        return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g, function (a) {
          a = a.charCodeAt(0).toString(16);
          return "\\u" + ("0000" + a.toUpperCase()).slice(-4);
        });
      },
      unicodeUnescape: function (a) {
        return a.replace(/(\\u[0-9A-Fa-f]{4})/g, function (a) {
          return String.fromCharCode(parseInt(a.slice(2), 16));
        });
      },
    };
    f["default"] = a;
  },
  66
);
__d(
  "UserActivity",
  ["cr:1634616"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1634616");
  },
  null
);
__d(
  "WebPixelRatio",
  ["SiteData"],
  function (a, b, c, d, e, f, g) {
    function a() {
      return c("SiteData").pr != null && c("SiteData").pr > 0
        ? c("SiteData").pr
        : window.devicePixelRatio || 1;
    }
    g.get = a;
  },
  98
);
__d(
  "Chromedome",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      if (
        top !== window ||
        document.domain == null ||
        !/(^|\.)facebook\.(com|sg)$/.test(document.domain)
      )
        return;
      a = h._("Stop!");
      var b = h._(
          'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or "hack" someone\'s account, it is a scam and will give them access to your Facebook account.'
        ),
        c = h._("See {url} for more information.", [
          h._param("url", "https://www.facebook.com/selfxss"),
        ]);
      if (window.chrome || window.safari) {
        var d = "font-family:helvetica; font-size:20px; ";
        [
          [
            a,
            d +
              "font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;",
          ],
          [b, d],
          [c, d],
          ["", ""],
        ].map(function (a) {
          window.setTimeout(
            console.log.bind(console, "\n%c" + a[0].toString(), a[1])
          );
        });
      } else {
        a = [
          "",
          " .d8888b.  888                       888",
          "d88P  Y88b 888                       888",
          "Y88b.      888                       888",
          ' "Y888b.   888888  .d88b.  88888b.   888',
          '    "Y88b. 888    d88""88b 888 "88b  888',
          '      "888 888    888  888 888  888  Y8P',
          "Y88b  d88P Y88b.  Y88..88P 888 d88P",
          ' "Y8888P"   "Y888  "Y88P"  88888P"   888',
          "                           888",
          "                           888",
          "                           888",
        ];
        d = ("" + b.toString()).match(/.{35}.+?\s+|.+$/g);
        if (d != null) {
          b = Math.floor(Math.max(0, (a.length - d.length) / 2));
          for (var e = 0; e < a.length || e < d.length; e++) {
            var f = a[e];
            a[e] = f + new Array(45 - f.length).join(" ") + (d[e - b] || "");
          }
        }
        console.log("\n\n\n" + a.join("\n") + "\n\n" + c.toString() + "\n");
        return;
      }
    }
    g.start = a;
  },
  98
);
__d(
  "WebStorageMonster",
  [
    "AsyncRequest",
    "CacheStorage",
    "Event",
    "ExecutionEnvironment",
    "NetworkStatus",
    "StringTransformations",
    "UserActivity",
    "WebStorage",
    "WebStorageMonsterLoggingURI",
    "ifRequired",
    "isEmpty",
    "killswitch",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e4,
      i = 5,
      j = !1;
    function k(a) {
      var b = {};
      for (var d in a) {
        var e = a.getItem(d),
          f = c("StringTransformations").unicodeEscape(d);
        typeof e === "string" && (b[f] = e.length);
      }
      return b;
    }
    function l(a) {
      var b = c("WebStorage").getLocalStorage();
      if (!b || a == null || !a.keys) return;
      o._getLocalStorageKeys().forEach(function (c) {
        a.keys.includes(c) && b.removeItem(c);
      });
    }
    function m(a) {
      var b = c("WebStorage").getLocalStorage();
      b &&
        o._getLocalStorageKeys().forEach(function (c) {
          a.some(function (a) {
            return new RegExp(a).test(c);
          }) || b.removeItem(c);
        });
    }
    function n(a, b) {
      a === void 0 && (a = !1);
      b === void 0 && (b = h);
      if (c("UserActivity").isActive(b)) {
        var d = Math.max(h, Math.floor(b / i));
        c("setTimeoutAcrossTransitions")(function () {
          n(a, d);
        }, d);
      } else {
        o.cleanNow(a);
        var e = !c("killswitch")("WEB_STORAGE_MONSTER_DONT_RESCHEDULE_ON_RUN");
        if (e) {
          var f = b * i;
          c("setTimeoutAcrossTransitions")(function () {
            n(a, f);
          }, f);
        }
      }
    }
    var o = {
      registerLogoutForm: function (a, b) {
        c("Event").listen(a, "submit", function (a) {
          o.cleanOnLogout(b);
        });
      },
      schedule: function (a) {
        a === void 0 && (a = !1);
        if (j || !c("ExecutionEnvironment").isInBrowser) return;
        j = !0;
        n(a);
      },
      cleanNow: function (a) {
        a === void 0 && (a = !1);
        var b = Date.now(),
          d = {},
          e = c("WebStorage").getLocalStorage();
        e && (d.local_storage = k(e));
        e = c("WebStorage").getSessionStorage();
        e && (d.session_storage = k(e));
        e = !c("isEmpty")(d);
        var f = Date.now();
        d.logtime = f - b;
        if (e) {
          var g,
            h = c("WebStorageMonsterLoggingURI").uri;
          if (h === null) return null;
          var i = function () {
            new (c("AsyncRequest"))(h)
              .setData(d)
              .setHandler(function (b) {
                b = b.getPayload();
                b &&
                  b.keys &&
                  (b.keys = b.keys.map(
                    c("StringTransformations").unicodeUnescape
                  ));
                a || l(b);
                c("NetworkStatus").reportSuccess();
              })
              .setErrorHandler(function () {
                c("NetworkStatus").reportError();
              })
              .setOption("retries", 2)
              .send();
          };
          if (c("NetworkStatus").isOnline()) i();
          else {
            f = function (a) {
              a = a.online;
              a && (i(), g.remove());
            };
            g = c("NetworkStatus").onChange(f);
          }
        }
      },
      cleanOnLogout: function (a) {
        c("CacheStorage").disablePersistentWrites();
        c("ifRequired")("WebAsyncStorage", function (a) {
          a.disablePersistentWrites();
        });
        a ? m(a) : m([]);
        a = c("WebStorage").getSessionStorage();
        a && a.clear();
        c("ifRequired")("WebAsyncStorage", function (a) {
          a.clear(function () {});
        });
      },
      _getLocalStorageKeys: function () {
        var a = c("WebStorage").getLocalStorage();
        return a ? Object.keys(a) : [];
      },
    };
    a = o;
    g["default"] = a;
  },
  98
);
__d(
  "BootloaderEventsPerf",
  [
    "invariant",
    "Bootloader",
    "BootloaderEvents",
    "ResourceTimingStore",
    "objectEntries",
    "objectValues",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = {
      total_count: 0,
      total_bytes: 0,
      downloaded_count: 0,
      downloaded_bytes: 0,
      cached_count: 0,
      cached_bytes: 0,
      inlined_count: 0,
      inlined_bytes: 0,
      duration: 0,
      missing_count: 0,
    };
    function j(a, b, c) {
      return Math.max(
        0,
        ((c = c) != null ? c : 0) - Math.max(a, (c = b) != null ? c : 0)
      );
    }
    function k() {
      return {
        blocking: babelHelpers["extends"]({}, i),
        nonblocking: babelHelpers["extends"]({}, i),
        default: babelHelpers["extends"]({}, i),
      };
    }
    function l(a, b, c) {
      var e, f;
      if (c == null) (e = 0), (f = "downloaded");
      else if (c[1]) (e = c[0].length), (f = "inlined");
      else {
        c = d("ResourceTimingStore").getEntryForURL(c[0]);
        c
          ? ((e = c.encodedBodySize),
            (f = c.transferSize === 0 ? "cached" : "downloaded"))
          : ((e = 0), (f = "downloaded"), a.missing_count++);
      }
      a.total_count++;
      a.total_bytes += e;
      if (!b) return;
      a.duration = Math.max(a.duration, b);
      switch (f) {
        case "downloaded":
          a.downloaded_count++;
          a.downloaded_bytes += e;
          break;
        case "inlined":
          a.inlined_count++;
          a.inlined_bytes += e;
          break;
        case "cached":
          a.cached_count++;
          a.cached_bytes += e;
          break;
      }
    }
    function m(a, b, d, e, f) {
      var g = c("Bootloader").getResourceState(b);
      l(a, j(d, g.loadStart, g.loadEnd), e);
      g.loadError != null && f.add(b);
    }
    function n(a, b, d, e) {
      var f = k();
      for (
        var a = c("objectEntries")(a),
          g = Array.isArray(a),
          i = 0,
          a = g
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var j;
        if (g) {
          if (i >= a.length) break;
          j = a[i++];
        } else {
          i = a.next();
          if (i.done) break;
          j = i.value;
        }
        j = j;
        var l = j[0];
        j = j[1];
        for (
          var j = j,
            n = Array.isArray(j),
            o = 0,
            j = n
              ? j
              : j[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var p;
          if (n) {
            if (o >= j.length) break;
            p = j[o++];
          } else {
            o = j.next();
            if (o.done) break;
            p = o.value;
          }
          p = p;
          var q = p[0];
          p = p[1];
          var r = void 0,
            s = void 0;
          switch (p.type) {
            case "async":
              s = null;
              r = d;
              break;
            case "js":
            case "css":
              s = [p.src, p.d === 1];
              r = f;
              break;
            default:
              p, h(0, 3721);
          }
          m(r[l], q, b, s, e);
        }
      }
      return f;
    }
    function o(a, b) {
      var e = {
        unpredicted: d("BootloaderEvents").newResourceMapSet(),
        ef: d("BootloaderEvents").newResourceMapSet(),
        overpredicted: d("BootloaderEvents").newResourceMapSet(),
      };
      for (
        var f = c("objectEntries")(b),
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
        for (
          var i = i.entries(),
            k = Array.isArray(i),
            l = 0,
            i = k
              ? i
              : i[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var m;
          if (k) {
            if (l >= i.length) break;
            m = i[l++];
          } else {
            l = i.next();
            if (l.done) break;
            m = l.value;
          }
          m = m;
          var n = m[0];
          m = m[1];
          a[j].has(n) ? e.ef[j].set(n, m) : e.overpredicted[j].set(n, m);
        }
      }
      for (
        n = c("objectEntries")(a),
          m = Array.isArray(n),
          l = 0,
          n = m
            ? n
            : n[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (m) {
          if (l >= n.length) break;
          k = n[l++];
        } else {
          l = n.next();
          if (l.done) break;
          k = l.value;
        }
        i = k;
        j = i[0];
        h = i[1];
        for (
          g = h.entries(),
            f = Array.isArray(g),
            a = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (a >= g.length) break;
            k = g[a++];
          } else {
            a = g.next();
            if (a.done) break;
            k = a.value;
          }
          i = k;
          h = i[0];
          k = i[1];
          b[j].has(h) || e.unpredicted[j].set(h, k);
        }
      }
      return e;
    }
    function a(a) {
      var b = a.efData,
        c = a.rsrcs,
        d = a.startTime,
        e = new Set(),
        f;
      if (b) {
        var g = o(c, b.tierOne);
        f = g.unpredicted;
        g = {
          ef: n(g.ef, b.fetchRsrcsStart, k(), e),
          overpredicted: n(g.overpredicted, b.fetchRsrcsStart, k(), e),
        };
        b = {
          ef_fetch_predictions: b.fetchPredictionsEnd - b.fetchPredictionsStart,
          ef_fetch_start_wait: b.fetchPredictionsEnd - b.fetchRsrcsStart,
          ef_head_start: d - b.fetchRsrcsStart,
        };
      } else (f = c), (g = {}), (b = {});
      c = babelHelpers["extends"]({ unpredicted: n(f, d, k(), e) }, g);
      return {
        source: a.source,
        source_detail: a.sourceDetail,
        is_first_identical: a.isFirstIdentical,
        timeslice_context: (f = a.timesliceContext) == null ? void 0 : f.name,
        start_time: d,
        err_count: e.size,
        resources: c,
        durations: babelHelpers["extends"](
          {
            jsmods_wait: a.jsmodsStart - d,
            jsmods: a.jsmodsEnd - a.jsmodsStart,
            jsmods_done_wait: a.jsmodsEnd - d,
            download_done_wait: a.logTime - d,
          },
          b
        ),
        payloadStats: a.payloadStats,
      };
    }
    function b(a) {
      var b = a.startTime,
        e = 0,
        f = 0,
        g = 0,
        h = 0;
      for (
        var i = a.components,
          m = Array.isArray(i),
          o = 0,
          i = m
            ? i
            : i[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var p;
        if (m) {
          if (o >= i.length) break;
          p = i[o++];
        } else {
          o = i.next();
          if (o.done) break;
          p = o.value;
        }
        p = p;
        p = c("Bootloader").getComponentTiming(p);
        var q = p.tierTwoStart,
          r = p.tierTwoEnd,
          s = p.tierThreeStart;
        p = p.tierThreeEnd;
        e = Math.max(e, j(b, q, r));
        f = Math.max(f, j(b, b, r));
        g = Math.max(g, j(b, s, p));
        h = Math.max(h, j(b, b, p));
      }
      q = new Set();
      r = k();
      s = n(a.tierOne, b, r, q);
      p = n(a.tierTwo, b, r, q);
      o = n(a.tierThree, b, r, q);
      m = r.blocking.downloaded_count != 0;
      i = k();
      var t = d("BootloaderEvents").newResourceMapSet(),
        u = new Set(),
        v = [a.tierOne, a.tierTwo, a.tierThree];
      for (var w = 0; w < v.length; w++) {
        var x = v[w];
        for (
          var x = c("objectValues")(x),
            y = Array.isArray(x),
            z = 0,
            x = y
              ? x
              : x[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var A;
          if (y) {
            if (z >= x.length) break;
            A = x[z++];
          } else {
            z = x.next();
            if (z.done) break;
            A = z.value;
          }
          A = A;
          for (
            var A = A.keys(),
              B = Array.isArray(A),
              C = 0,
              A = B
                ? A
                : A[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var D;
            if (B) {
              if (C >= A.length) break;
              D = A[C++];
            } else {
              C = A.next();
              if (C.done) break;
              D = C.value;
            }
            D = D;
            u.add(D);
          }
        }
      }
      D = 0;
      C = 0;
      B = 0;
      for (
        A = a.beRequests.values(),
          z = Array.isArray(A),
          y = 0,
          A = z
            ? A
            : A[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (z) {
          if (y >= A.length) break;
          x = A[y++];
        } else {
          y = A.next();
          if (y.done) break;
          x = y.value;
        }
        v = x;
        D += j(b, b, v.requestStart);
        C += v.serverGenTime;
        B += v.jsmodsEnd - v.jsmodsStart;
        l(i[m ? "blocking" : "nonblocking"], v.responseStart - v.requestStart, [
          v.uri,
          !1,
        ]);
        for (
          w = c("objectEntries")(v.rsrcs),
            x = Array.isArray(w),
            v = 0,
            w = x
              ? w
              : w[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var E;
          if (x) {
            if (v >= w.length) break;
            E = w[v++];
          } else {
            v = w.next();
            if (v.done) break;
            E = v.value;
          }
          E = E;
          var F = E[0];
          E = E[1];
          for (
            var E = E,
              G = Array.isArray(E),
              H = 0,
              E = G
                ? E
                : E[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var I;
            if (G) {
              if (H >= E.length) break;
              I = E[H++];
            } else {
              H = E.next();
              if (H.done) break;
              I = H.value;
            }
            I = I;
            var J = I[0];
            I = I[1];
            u.has(J) || t[F].set(J, I);
          }
        }
      }
      J = n(t, b, r, q);
      return {
        ref: a.ref,
        components: a.components,
        timeslice_context: (I = a.timesliceContext) == null ? void 0 : I.name,
        start_time: b,
        err_count: q.size,
        resources: { t1: s, t2: p, t3: o, be: i, unpredicted: J, async: r },
        durations: {
          fetch_start_wait: a.fetchStartTime - b,
          be_start_wait: D,
          be_server_gen: C,
          be_jsmods: B,
          callback_wait: a.callbackStart - b,
          callback: a.callbackEnd - a.callbackStart,
          bootload_done_wait: a.callbackEnd - b,
          rdfd_requirelazy: e,
          rdfd_done_wait: f,
          rd_requirelazy: g,
          rd_done_wait: h,
        },
      };
    }
    function e(a) {
      a.start_time;
      var b = a.resources,
        d = a.durations;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "start_time",
        "resources",
        "durations",
      ]);
      for (
        var b = c("objectEntries")(b),
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        for (
          var g = c("objectEntries")(g),
            i = Array.isArray(g),
            j = 0,
            g = i
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var k;
          if (i) {
            if (j >= g.length) break;
            k = g[j++];
          } else {
            j = g.next();
            if (j.done) break;
            k = j.value;
          }
          k = k;
          var l = k[0];
          k = k[1];
          for (
            var k = c("objectEntries")(k),
              m = Array.isArray(k),
              n = 0,
              k = m
                ? k
                : k[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var o;
            if (m) {
              if (n >= k.length) break;
              o = k[n++];
            } else {
              n = k.next();
              if (n.done) break;
              o = n.value;
            }
            o = o;
            var p = o[0];
            o = o[1];
            a[h + "_" + l + "_resources_" + p] = Math.round(Number(o));
          }
        }
      }
      for (
        p = c("objectEntries")(d),
          o = Array.isArray(p),
          n = 0,
          p = o
            ? p
            : p[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (o) {
          if (n >= p.length) break;
          m = p[n++];
        } else {
          n = p.next();
          if (n.done) break;
          m = n.value;
        }
        k = m;
        l = k[0];
        j = k[1];
        a[l + "_duration"] = Math.round(Number(j));
      }
      if (a.payloadStats) {
        for (
          i = c("objectEntries")(a.payloadStats),
            g = Array.isArray(i),
            h = 0,
            i = g
              ? i
              : i[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (g) {
            if (h >= i.length) break;
            f = i[h++];
          } else {
            h = i.next();
            if (h.done) break;
            f = h.value;
          }
          e = f;
          b = e[0];
          d = e[1];
          for (
            m = c("objectEntries")(d),
              k = Array.isArray(m),
              l = 0,
              m = k
                ? m
                : m[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (k) {
              if (l >= m.length) break;
              j = m[l++];
            } else {
              l = m.next();
              if (l.done) break;
              j = l.value;
            }
            n = j;
            o = n[0];
            p = n[1];
            a[b + "_" + o + "_count"] = Math.round(Number(p));
          }
        }
        delete a.payloadStats;
      }
      return a;
    }
    g.computeHRData = a;
    g.computeBLData = b;
    g.flattenData = e;
  },
  98
);
__d(
  "AccessibilityWebAssistiveTechTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:AccessibilityWebAssistiveTechLoggerConfig"
    );
  },
  null
);
__d(
  "Queue",
  [],
  function (a, b, c, d, e, f) {
    var g = {};
    a = (function () {
      function a(a) {
        (this._timeout = null),
          (this._interval = (a == null ? void 0 : a.interval) || 0),
          (this._processor = a == null ? void 0 : a.processor),
          (this._queue = []),
          (this._stopped = !0);
      }
      var b = a.prototype;
      b._dispatch = function (a) {
        var b = this;
        a === void 0;
        if (this._stopped || this._queue.length === 0) return;
        a = this._processor;
        if (a == null) {
          this._stopped = !0;
          throw new Error("No processor available");
        }
        var c = this._interval;
        if (c != null)
          a.call(this, this._queue.shift()),
            (this._timeout = setTimeout(function () {
              return b._dispatch();
            }, c));
        else while (this._queue.length) a.call(this, this._queue.shift());
      };
      b.enqueue = function (a) {
        this._processor && !this._stopped
          ? this._processor(a)
          : this._queue.push(a);
        return this;
      };
      b.start = function (a) {
        a && (this._processor = a);
        this._stopped = !1;
        this._dispatch();
        return this;
      };
      b.isStarted = function () {
        return !this._stopped;
      };
      b.dispatch = function () {
        this._dispatch(!0);
      };
      b.stop = function (a) {
        this._stopped = !0;
        a && this._timeout != null && clearTimeout(this._timeout);
        return this;
      };
      b.merge = function (a, b) {
        if (b) {
          (b = this._queue).unshift.apply(b, a._queue);
        } else {
          (b = this._queue).push.apply(b, a._queue);
        }
        a._queue = [];
        this._dispatch();
        return this;
      };
      b.getLength = function () {
        return this._queue.length;
      };
      a.get = function (b, c) {
        var d;
        b in g ? (d = g[b]) : (d = g[b] = new a(c));
        return d;
      };
      a.exists = function (a) {
        return a in g;
      };
      a.remove = function (a) {
        return delete g[a];
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "ErrorSetup",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup;
  },
  98
);
