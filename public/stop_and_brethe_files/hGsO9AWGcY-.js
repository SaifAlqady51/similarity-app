/*FB_PKG_DELIM*/

__d(
  "CometRouteActorToasterQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4961682900536225";
  },
  null
);
__d(
  "CometRouteActorToasterQuery.graphql",
  ["CometRouteActorToasterQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "scale" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        e = {
          alias: "toast_icon",
          args: [
            { kind: "Literal", name: "height", value: 32 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 32 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometRouteActorToasterQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [c, d, e],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometRouteActorToasterQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "actor",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    e,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("CometRouteActorToasterQuery_facebookRelayOperation"),
          metadata: {},
          name: "CometRouteActorToasterQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometVirtualCursorStatus",
  ["UserAgent", "cr:1345969", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null;
    function j() {
      i ||
        (i = window.addEventListener("blur", function () {
          (h = null), k();
        }));
    }
    function k() {
      i && (i.remove(), (i = null));
    }
    function a(a) {
      (h = a.keyCode), j();
    }
    function d(a) {
      (h = null), k();
    }
    if (
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      f = document.documentElement;
      if (f)
        if (f.addEventListener)
          f.addEventListener("keydown", a, !0),
            f.addEventListener("keyup", d, !0);
        else if (f.attachEvent) {
          f = f.attachEvent;
          f("onkeydown", a);
          f("onkeyup", d);
        }
    }
    var l = {
        getKeyDownCode: function () {
          return h;
        },
        isKeyDown: function () {
          return !!h;
        },
      },
      m = !1,
      n = !1,
      o = null,
      p = !1;
    function q(a) {
      var b = new Set(),
        d = l.isKeyDown(),
        e = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
        f = a.clientX,
        g = a.clientY,
        h = a.isTrusted,
        i = a.mozInputSource,
        j = a.offsetX,
        k = a.offsetY,
        o = a.webkitForce;
      f === 0 &&
        g === 0 &&
        j >= 0 &&
        k >= 0 &&
        n &&
        h &&
        i == null &&
        b.add("Chrome");
      m &&
        n &&
        !d &&
        o != null &&
        o < e &&
        j === 0 &&
        k === 0 &&
        i == null &&
        b.add("Safari-edge");
      f === 0 &&
        g === 0 &&
        j < 0 &&
        k < 0 &&
        n &&
        i == null &&
        b.add("Safari-old");
      if (
        !m &&
        !n &&
        !d &&
        h &&
        c("UserAgent").isBrowser("IE >= 10") &&
        i == null
      ) {
        o = a.target;
        e = o.clientHeight;
        d = o.clientWidth;
        f < 0 && g < 0
          ? b.add("IE")
          : (j < 0 || j > d) && (k < 0 || k > e) && b.add("MSIE");
      }
      i === 0 && h && b.add("Firefox");
      return b;
    }
    function r() {
      (m = !0),
        c("setTimeout")(function () {
          m = !1;
        }, 0);
    }
    function s() {
      (n = !0),
        c("setTimeout")(function () {
          n = !1;
        }, 0);
    }
    function t(a) {
      p &&
        b("cr:1345969").log({
          extra_data: { source_app: "comet" },
          indicated_browsers: o,
          is_virtual_cursor_action: a,
        });
    }
    function u(a) {
      o === null && (o = Array.from(q(a)));
      p = o != null && o.length > 0;
      a =
        a.target != null &&
        a.target.getAttribute != null &&
        a.target.getAttribute("data-accessibilityid") ===
          "virtual_cursor_trigger";
      t(a);
      c("setTimeout")(function () {
        (p = !1), (o = null);
      }, 0);
    }
    function e() {
      document.addEventListener("click", u, !0),
        document.addEventListener("mousedown", r, !0),
        document.addEventListener("mouseup", s, !0);
    }
    g.initLogging = e;
  },
  98
);
__d(
  "CometIconWirelessSlashFilled.react",
  ["CometSVGIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({ viewBox: "0 0 24 24" }, a, {
          children: h.jsx("path", {
            d: "M23.7805.2195c.2925.293.2925.768 0 1.061l-22.5 22.5C1.134 23.927.942 24 .75 24c-.192 0-.384-.073-.5305-.2195-.2925-.293-.2925-.768 0-1.061l12.1967947-12.1971509c-2.3773758-.1150468-4.79162015.7286756-6.6038447 2.5401009-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.024 0-1.414 2.65728981-2.65728981 6.3696459-3.62280965 9.8005664-2.90852144l2.430738-2.43186193C11.7816792 4.58111626 6.15198938 5.65271062 2.27735 9.52735c-.3905.3905-1.0235.3905-1.414 0-.3905-.3905-.3905-1.0235 0-1.414 4.6714534-4.67191574 11.571522-5.78608437 17.3096457-3.34843552L22.7195.2195c.293-.2925.768-.2925 1.061 0zM12 18.5c.6905 0 1.25.5595 1.25 1.25S12.6905 21 12 21s-1.25-.5595-1.25-1.25.5595-1.25 1.25-1.25zm1.4175-4.81495c.9705.2455 1.8905.741 2.6485 1.499.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.512-.0975-.707-.293-.7835333-.7835333-1.8301422-1.1445778-2.8581093-1.0880116L11.574 15.52855l1.8435-1.8435zm3.8154-3.8154c.848.4725 1.649 1.059 2.3685 1.779.391.39.391 1.023 0 1.414-.195.195-.451.293-.707.293-.2555 0-.5115-.098-.707-.293-.7285-.728-1.5575-1.291-2.439-1.7085zm2.1908-2.1908l1.4425-1.4425c.8.545 1.5615 1.168 2.2705 1.877.3905.3905.3905 1.0235 0 1.414-.1955.1955-.451.293-.707.293-.256 0-.5115-.0975-.707-.293-.5933333-.59333333-1.2283333-1.11861111-1.895162-1.57959491L19.4237 7.67885l1.4425-1.4425z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometUncaughtError.react",
  [
    "fbt",
    "CometContentArea.react",
    "NullStateGeneral",
    "TetraNullState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "x6s0dn4 x78zum5 x1dr59a3 xl56j7k xixxii4 xh8yej3",
        children: i.jsx(c("CometContentArea.react"), {
          verticalAlign: "middle",
          children: i.jsx(c("TetraNullState.react"), {
            headline: h._("Sorry! Something went wrong :("),
            icon: c("NullStateGeneral"),
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
  "CometErrorLogging",
  [
    "ClientConsistency",
    "Env",
    "ErrorGuard",
    "ErrorSetup",
    "ErrorTransport",
    "JSErrorLoggingConfig",
    "SiteData",
    "WebSession",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("ErrorGuard").skipGuardGlobal(c("Env").nocatch);
      b = a;
      if (c("JSErrorLoggingConfig").sampleWeight != null) {
        c("ErrorSetup").setup(
          {
            additional_client_revisions:
              c("ClientConsistency").getAdditionalRevisions(),
            appId: c("JSErrorLoggingConfig").appId,
            cavalry_lid: b,
            client_revision: c("SiteData").client_revision,
            extra: c("JSErrorLoggingConfig").extra,
            loggingFramework: "comet",
            projectBlocklist: c("JSErrorLoggingConfig").projectBlocklist,
            push_phase: c("SiteData").push_phase,
            report_source: c("JSErrorLoggingConfig").report_source,
            report_source_ref: c("JSErrorLoggingConfig").report_source_ref,
            sample_weight:
              (a = c("JSErrorLoggingConfig").sampleWeight) != null ? a : 0,
            script_path: "/comet",
            server_revision: c("SiteData").server_revision,
            spin: c("SiteData").spin,
            web_session_id: d("WebSession").getId(),
          },
          d("ErrorTransport").log
        );
      }
    }
    c("ErrorSetup").preSetup();
    g.init = a;
  },
  98
);
__d(
  "CometBootloaderEventsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:CometBootloaderEventsLoggerConfig"
    );
  },
  null
);
__d(
  "HasteResponseFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1823926");
    b = d("FalcoLoggerInternal").create("haste_response", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "CometBootloaderLoggerUtil",
  [
    "BootloaderEvents",
    "BootloaderEventsPerf",
    "CometBootloaderEventsTypedLoggerLite",
    "CometTimeSpentNavigation",
    "HasteResponseFalcoEvent",
    "ResourceTimingStore",
    "SiteData",
    "performanceNavigationStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1;
    function a(a) {
      var b = a.bl_sample_rate,
        e = a.hr_sample_rate,
        f = a.parent_lid;
      if (h || !(b || e)) return;
      h = !0;
      d("ResourceTimingStore").init();
      var g = function (a) {
        return {
          ms_since_navstart: Math.round(a - c("performanceNavigationStart")()),
          parent_lid: f,
          pkg_cohort: c("SiteData").pkg_cohort,
          request_path:
            (a = c("CometTimeSpentNavigation").getPathInfo()) == null
              ? void 0
              : a.name,
          svn_rev: c("SiteData").client_revision,
        };
      };
      e &&
        d("BootloaderEvents").onHasteResponse(function (a) {
          return c("HasteResponseFalcoEvent").log(function () {
            var b = d("BootloaderEventsPerf").computeHRData(a),
              c = d("BootloaderEventsPerf").flattenData(b);
            return babelHelpers["extends"]({}, c, g(b.start_time));
          });
        });
      b &&
        d("BootloaderEvents").onBootload(function (a) {
          a = d("BootloaderEventsPerf").computeBLData(a);
          var e = d("BootloaderEventsPerf").flattenData(a);
          c("CometBootloaderEventsTypedLoggerLite").log(
            babelHelpers["extends"]({}, e, g(a.start_time)),
            { weight: b }
          );
        });
    }
    g.initLogging = a;
  },
  98
);
__d(
  "CometPixelRatioUpdater",
  ["Cookie", "Run", "WebPixelRatio"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "dpr";
    function i(a) {
      c("Cookie").set(h, String(a));
    }
    function j() {
      window.devicePixelRatio !== d("WebPixelRatio").get() &&
        i(window.devicePixelRatio);
    }
    function a() {
      j(),
        d("Run").onBeforeUnload(j, !1),
        "onpagehide" in window && window.addEventListener("pageHide", j);
    }
    g.startDetecting = a;
  },
  98
);
__d(
  "CometNetworkStatusToast",
  [
    "fbt",
    "ix",
    "BaseToasterStateManager",
    "CometIconWirelessSlashFilled.react",
    "CometRelayEnvironmentFactory",
    "NetworkStatus",
    "SVGIcon",
    "TetraIcon.react",
    "cometPushToast",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = null;
    function l(a) {
      a = a.online;
      var b = c("BaseToasterStateManager").getInstance();
      k != null && (b.expire(k), (k = null));
      k = a
        ? d("cometPushToast").cometPushToast(
            {
              icon: j.jsx(c("TetraIcon.react"), {
                color: "positive",
                icon: d("fbicon")._(i("485124"), 24),
              }),
              message: h._("Your internet connection was restored."),
            },
            4e3,
            b
          )
        : d("cometPushToast").cometPushToast(
            {
              action: {
                label: h._("Refresh"),
                onPress: function () {
                  d(
                    "CometRelayEnvironmentFactory"
                  ).commitLocalUpdateForEachEnvironment(function (a, b, c) {
                    c.invalidateStore();
                  });
                },
              },
              icon: j.jsx(c("TetraIcon.react"), {
                color: "disabled",
                icon: d("SVGIcon").legacySVGIcon(
                  c("CometIconWirelessSlashFilled.react")
                ),
                size: 24,
              }),
              message: h._("You are currently offline."),
            },
            Infinity,
            b
          );
    }
    function a() {
      c("NetworkStatus").onChange(l);
    }
    g.subscribe = a;
  },
  98
);
__d(
  "DetectBrokenProxyCache",
  ["AsyncSignal", "Cookie", "URI"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var d = c("Cookie").get(b);
      if (d != a && d != null && a != "0") {
        b = { c: "si_detect_broken_proxy_cache", m: b + " " + a + " " + d };
        a = new (c("URI"))("/platform/scribe_endpoint.php")
          .getQualifiedURI()
          .toString();
        new (c("AsyncSignal"))(a, b).send();
      }
    }
    g.run = a;
  },
  98
);
__d(
  "SimplePageLoadLogger",
  ["ODS", "performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      d("ODS").bumpEntityKey(1678, "www_client_navigations", h());
    }
    function h() {
      if (
        c("performance").navigation == null ||
        c("performance").navigation.type == null
      )
        return "UNSUPPORTED";
      switch (c("performance").navigation.type) {
        case c("performance").navigation.TYPE_NAVIGATE:
          return "NAVIGATE";
        case c("performance").navigation.TYPE_RELOAD:
          return "RELOAD";
        case c("performance").navigation.TYPE_BACK_FORWARD:
          return "BACK_FORWARD";
        case c("performance").navigation.TYPE_RESERVED:
          return "RESERVED";
        default:
          return "UNKNOWN";
      }
    }
    g.logPageNavigationType = a;
  },
  98
);
__d(
  "CometRootDeferredShared",
  [
    "CometBootloaderLoggerUtil",
    "CometNetworkStatusToast",
    "CometVCTracker",
    "CometVirtualCursorStatus",
    "DeferredCookie",
    "DetectBrokenProxyCache",
    "ErrorGuard",
    "JSScheduler",
    "SimplePageLoadLogger",
    "WebStorageMonster",
    "cr:10026",
    "cr:1201738",
    "cr:1332233",
    "cr:1516609",
    "cr:1813330",
    "cr:2718",
    "cr:653",
    "currentCometRouterInstance",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var e = a.blLoggingCavalryFields,
        f = a.deferredCookies,
        g = a.userID;
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometBootloaderLoggerUtil").initLogging(e);
        },
        null,
        []
      );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometVirtualCursorStatus").initLogging();
        },
        null,
        []
      );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("CometNetworkStatusToast").subscribe();
        },
        null,
        []
      );
      b("cr:10026") != null &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:10026")(function () {
              var a;
              return (a = d("currentCometRouterInstance").get()) == null
                ? void 0
                : (a = a.getCurrentRouterState()) == null
                ? void 0
                : (a = a.main) == null
                ? void 0
                : a.route;
            });
          },
          null,
          []
        );
      c("ErrorGuard").applyWithGuard(
        function () {
          return d("SimplePageLoadLogger").logPageNavigationType();
        },
        null,
        []
      );
      d("JSScheduler").scheduleSpeculativeCallback(function () {
        c("WebStorageMonster").schedule();
      });
      d("JSScheduler").scheduleSpeculativeCallback(function () {
        d("DetectBrokenProxyCache").run(g, "c_user");
      });
      b("cr:1201738") &&
        c("CometVCTracker").VisualCompletionTraceObserver.subscribe(function (
          a
        ) {
          a.interactionType === "INITIAL_LOAD" &&
            b("cr:1201738").init("comet.idle");
        });
      b("cr:653") &&
        c("CometVCTracker").VisualCompletionTraceObserver.subscribe(function (
          a
        ) {
          a.interactionType === "INITIAL_LOAD" && b("cr:653").init();
        });
      Object.keys(f).forEach(function (a) {
        var b = f[a],
          d = b.expiration_for_js,
          e = b.first_party_only,
          g = b.path,
          h = b.secure;
        b = b.value;
        c("DeferredCookie").addToQueue(a, b, d, g, e, !1, h);
      });
      b("cr:1332233") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1332233")();
          },
          null,
          []
        );
      b("cr:1516609") != null &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1516609").initSignalCollection();
          },
          null,
          []
        );
      b("cr:1813330") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:1813330").init();
          },
          null,
          []
        );
      b("cr:2718") &&
        c("ErrorGuard").applyWithGuard(
          function () {
            return b("cr:2718").init();
          },
          null,
          []
        );
    }
    g.initDeferred = a;
  },
  98
);
__d(
  "WebBrowserDimensionsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:WebBrowserDimensionsLoggerConfig"
    );
  },
  null
);
__d(
  "CometBrowserDimensionsLogger",
  [
    "CometDebounce",
    "Cookie",
    "ExecutionEnvironment",
    "SiteData",
    "WebBrowserDimensionsTypedLoggerLite",
    "getViewportDimensions",
    "isInIframe",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = !1,
      j = { height: 0, width: 0 };
    function k() {
      h === null && (h = c("getViewportDimensions")());
      return h;
    }
    function l() {
      var a = c("getViewportDimensions")(),
        b = a.height;
      a = a.width;
      (j.width !== a || j.height !== b) &&
        ((j = { height: b, width: a }), c("Cookie").set("wd", a + "x" + b));
    }
    function m() {
      if (!c("ExecutionEnvironment").canUseDOM || c("isInIframe")() || i)
        return;
      i = !0;
      l();
      window.addEventListener("resize", c("CometDebounce")(l, { wait: 250 }), {
        passive: !0,
      });
      window.addEventListener("focus", l, { passive: !0 });
    }
    function a(a) {
      var b,
        d = k();
      m();
      b = {
        client_hint_width: a == null ? void 0 : a.clientHintWidth,
        pixel_ratio: (b = window.devicePixelRatio) != null ? b : 1,
        screen_x: window.screen.width,
        screen_y: window.screen.height,
        server_pixel_ratio: c("SiteData").pr,
        server_viewport_x: a == null ? void 0 : a.viewportWidth,
        server_viewport_y: a == null ? void 0 : a.viewportHeight,
        viewport_x: d.width,
        viewport_y: d.height,
      };
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        (b.cpu_cores_count = window.navigator.hardwareConcurrency);
      if (window.innerWidth > 0 && window.outerWidth > 0) {
        a = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
        b.zoom_ratio = a;
      }
      if (window.getComputedStyle && document.documentElement != null) {
        d = window.getComputedStyle(document.documentElement);
        d != null && (b.document_font_size = d.fontSize);
      }
      c("WebBrowserDimensionsTypedLoggerLite").log(b);
    }
    g.init = a;
  },
  98
);
__d(
  "IGDSPrivateActionableToastContent.react",
  ["PolarisUA", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.actionComponent,
        c = a.icon;
      a = a.message;
      return h.jsxs("div", {
        className:
          "x78zum5 x1q0g3np x2b8uid x6s0dn4 x1qughib" +
          ((d("PolarisUA").isMobile()
            ? " xuwq0e2"
            : "" + (d("PolarisUA").isDesktop() ? "" : "")) +
            (d("PolarisUA").isDesktop() ? " x6bjw7i" : "")),
        children: [
          h.jsxs("div", {
            className: "x78zum5 x1q0g3np x2b8uid x6s0dn4",
            children: [
              c != null && h.jsx("div", { className: "xmns6w2", children: c }),
              a,
            ],
          }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDSPrivateToast.react",
  [
    "BaseTheme.react",
    "IGDSText.react",
    "IGDSThemeConfig",
    "react",
    "useCurrentDisplayMode",
    "useFadeEffect",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = "x1xuf6tn-B";
    function a(a) {
      var b = a.children,
        d = a["data-testid"];
      d = a.isVisible;
      var e = a.onClose;
      a = c("useFadeEffect")(d);
      a[0];
      var f = a[1];
      a = a[2];
      var g = c("useCurrentDisplayMode")();
      g = g === "dark" ? "light" : "dark";
      return h.jsx(c("BaseTheme.react"), {
        "aria-atomic": !0,
        config: c("IGDSThemeConfig"),
        displayMode: g,
        ref: a,
        role: "alert",
        testid: void 0,
        children: h.jsx("div", {
          className:
            "x2b8uid x6s0dn4 x1jx94hy x1lq5wgf xgqcy7u x30kzoy x9jhf4c xdy0x9s x78zum5 x2lah0s xl56j7k xyamay9 xc73u3c x1l90r2v x5ib6vp xeq5yr9" +
            (d
              ? "" + (f ? " x1iy03kw x1wpepyw xs4xyr0 x4hg4is" : " xg01cxk")
              : " xg01cxk xqf3suz xs4xyr0 x4hg4is"),
          onAnimationEnd: function (a) {
            a.animationName === i && e != null && e();
          },
          children: h.jsx(c("IGDSText.react").Body, { children: b }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDSPrivateActionableToast.react",
  [
    "IGDSPrivateActionableToastContent.react",
    "IGDSPrivateToast.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.actionComponent,
        d = a["data-testid"];
      d = a.icon;
      var e = a.isVisible,
        f = a.message;
      a = a.onClose;
      return h.jsx(c("IGDSPrivateToast.react"), {
        "data-testid": void 0,
        isVisible: e,
        onClose: a,
        children: h.jsx(c("IGDSPrivateActionableToastContent.react"), {
          actionComponent: b,
          icon: d,
          message: f,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDSPrivateToastContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ onHideFactory: null });
    g["default"] = b;
  },
  98
);
__d(
  "IGDSPrivateToaster.react",
  [
    "BaseContextualLayer.react",
    "DateConsts",
    "IGDSPrivateActionableToast.react",
    "IGDSPrivateToast.react",
    "IGDSPrivateToastContext",
    "clearTimeout",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useLayoutEffect,
      l = b.useRef,
      m = b.useState,
      n = 3 * d("DateConsts").MS_PER_SEC;
    function o(a) {
      var b = a.config;
      a = a.toast;
      var d = m("transition"),
        e = d[0],
        f = d[1];
      d = m(null);
      var g = d[0],
        o = d[1],
        p = b.isVisible === !1;
      d = m(p);
      var r = d[0],
        s = d[1],
        t = l(null),
        u = b.isSticky != null && b.isSticky,
        v = b.duration != null ? b.duration : n;
      k(
        function () {
          return s(!p);
        },
        [p]
      );
      j(
        function () {
          r && !u
            ? (t.current = c("setTimeout")(function () {
                return s(!1);
              }, v))
            : c("clearTimeout")(t.current);
          return function () {
            return c("clearTimeout")(t.current);
          };
        },
        [r, b, v, u]
      );
      var w = i(
        function () {
          g == null ? void 0 : g(e),
            b.onAfterHide == null ? void 0 : b.onAfterHide();
        },
        [g, b, e]
      );
      d = i(function (a) {
        o(function (b) {
          return a;
        });
        return function (a) {
          s(!1), f(a);
        };
      }, []);
      return h.jsx("div", {
        className: "xjkvuk6",
        onAnimationEnd: function () {
          r || w();
        },
        children: h.jsx(c("IGDSPrivateToastContext").Provider, {
          value: { onHideFactory: d },
          children: h.jsx(q, { config: b, isVisible: r, toast: a }),
        }),
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var b = a["data-testid"];
      b = a.items;
      a = l(null);
      if (b.length === 0) return null;
      var d = b.filter(function (a) {
        return (
          (a.toast.target === "center" || a.toast.target == null) && !r(a.toast)
        );
      });
      b = b.filter(function (a) {
        return a.toast.target === "bottom" || r(a.toast);
      });
      return h.jsxs(c("BaseContextualLayer.react"), {
        contextRef: a,
        children: [
          h.jsx(p, { "data-testid": void 0, items: d, target: "center" }),
          h.jsx(p, { "data-testid": void 0, items: b, target: "bottom" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      var b = a["data-testid"];
      b = a.items;
      a = a.target;
      if (b.length > 0)
        return h.jsx("div", {
          className:
            "" +
            (a === "center"
              ? " xixxii4 xtzzx4i xwa60dl x11lhmoz"
              : " xixxii4 xtzzx4i  x1nc5ocm x6s0dn4 x3h4tne x78zum5 xdt5ytf"),
          "data-testid": void 0,
          children: b.map(function (a) {
            var b = a.config;
            a = a.toast;
            return h.jsx(o, { config: b, toast: a }, b.key);
          }),
        });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      var b = a.config,
        d = a.isVisible;
      a = a.toast;
      return !r(a)
        ? h.jsx(c("IGDSPrivateToast.react"), {
            "data-testid": void 0,
            isVisible: d,
            onClose: b.onAfterHide,
            children: a.message,
          })
        : h.jsx(c("IGDSPrivateActionableToast.react"), {
            actionComponent: a.actionComponent,
            "data-testid": void 0,
            icon: a.icon,
            isVisible: d,
            message: a.message,
            onClose: b.onAfterHide,
          });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      return a.actionComponent != null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "WebPerfDeviceInfoLogFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1871697");
    b = d("FalcoLoggerInternal").create("web_perf_device_info_log", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "XDeviceClassRealtimeController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/web_perf/get_perf_level/", {});
  },
  null
);
__d(
  "WebDevicePerfInfoLogging",
  [
    "AsyncTypedRequest",
    "JSScheduler",
    "Promise",
    "WebDevicePerfInfoData",
    "WebPerfDeviceInfoLogFalcoEvent",
    "XDeviceClassRealtimeController",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = document.createElement("canvas");
      b = b.getContext("webgl") || b.getContext("experimental-webgl");
      if (!b) return;
      var c = b.getExtension("WEBGL_debug_renderer_info");
      if (!c) return;
      var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
      b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
      a.gpu_vendor = b;
      a.gpu_renderer = d;
    }
    function i() {
      var a = window.navigator,
        b = {};
      a &&
        a.hardwareConcurrency !== void 0 &&
        (b.cpu_cores = a.hardwareConcurrency);
      a && a.deviceMemory !== void 0 && (b.ram = a.deviceMemory);
      c("WebDevicePerfInfoData").needsFullUpdate && h(b);
      return b;
    }
    function j() {
      var a = i();
      c("WebPerfDeviceInfoLogFalcoEvent").log(function () {
        var b;
        return {
          cpu_cores: (b = a.cpu_cores) != null ? b : null,
          ram: (b = a.ram) != null ? b : null,
          gpu_renderer: (b = a.gpu_renderer) != null ? b : null,
          gpu_vendor: (b = a.gpu_vendor) != null ? b : null,
        };
      });
    }
    function k() {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = i();
        a = yield new (c("AsyncTypedRequest"))(
          c("XDeviceClassRealtimeController").getURIBuilder().getURI()
        )
          .setData(a)
          .promisePayload();
        return a.devicePerfClassLevel;
      });
      return l.apply(this, arguments);
    }
    function a() {
      (c("WebDevicePerfInfoData").needsFullUpdate ||
        c("WebDevicePerfInfoData").needsPartialUpdate) &&
        d("JSScheduler").scheduleSpeculativeCallback(j);
    }
    function e() {
      return new (b("Promise"))(function (a, b) {
        c("WebDevicePerfInfoData").needsFullUpdate ||
        c("WebDevicePerfInfoData").needsPartialUpdate
          ? d("JSScheduler").scheduleSpeculativeCallback(function () {
              k().then(a)["catch"](b);
            })
          : a();
      });
    }
    g.doLog = a;
    g.doLogPromise = e;
  },
  98
);
__d(
  "BanzaiScubaMigrationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1949898");
    b = d("FalcoLoggerInternal").create("banzai_scuba_migration", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "BanzaiScuba_DEPRECATED",
  ["BanzaiScubaMigrationFalcoEvent", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, d) {
        (this.posted = !1),
          a ||
            c("FBLogger")("BanzaiScuba").warn(
              "Can't post a sample without a dataset"
            ),
          (this.dataset = a),
          (this.$1 = b),
          (this.options = d);
      }
      var b = a.prototype;
      b.$2 = function (a, b, d) {
        if (this.posted) {
          c("FBLogger")("BanzaiScuba").warn(
            "Trying to add to an already posted sample"
          );
          return a;
        }
        a = a || {};
        a[b] = d;
        return a;
      };
      b.addNormal = function (a, b) {
        this.normal = this.$2(this.normal, a, b);
        return this;
      };
      b.addInteger = function (a, b) {
        this["int"] = this.$2(this["int"], a, b);
        return this;
      };
      b.addDenorm = function (a, b) {
        this.denorm = this.$2(this.denorm, a, b);
        return this;
      };
      b.addTagSet = function (a, b) {
        this.tags = this.$2(this.tags, a, b);
        return this;
      };
      b.addNormVector = function (a, b) {
        this.normvector = this.$2(this.normvector, a, b);
        return this;
      };
      b.post = function () {
        var a = this;
        if (this.posted) {
          c("FBLogger")("BanzaiScuba").warn("Trying to re-post");
          return;
        }
        if (!this.dataset) return;
        var b = {};
        b._ds = this.dataset;
        b._options = this.options;
        this.normal && (b.normal = this.normal);
        this["int"] && (b["int"] = this["int"]);
        this.denorm && (b.denorm = this.denorm);
        this.tags && (b.tags = this.tags);
        this.normvector && (b.normvector = this.normvector);
        this.$1 !== null &&
          this.$1 !== "" &&
          this.$1 !== void 0 &&
          (b._lid = this.$1);
        c("BanzaiScubaMigrationFalcoEvent").log(function () {
          return { dataset: a.dataset, payload: b };
        });
        this.posted = !0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "RequestStreamCloseReason",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "UserIntention",
      "StartStreamFailure",
      "StreamError",
      "RemoteTermination",
      "ServerDataEnd",
      "ServerDrain",
      "ReestablishError",
      "ClientError",
    ]);
    f.RequestStreamCloseReason = a;
  },
  66
);
__d(
  "TransportSelectingClientSingletonConditional",
  ["cr:5800"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5800");
  },
  98
);
__d(
  "DGWRequestStreamUtils",
  ["Base64", "WebDriverConfig", "cr:3024", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, d, e, f) {
      var g = {};
      a = Object.entries(a);
      for (var h = 0; h < a.length; h++) {
        var i = a[h],
          j = i[0];
        i = i[1];
        typeof i == "string"
          ? (g["XRSS-" + j] = i)
          : typeof i == "number"
          ? (g["XRSN-" + j] = i.toString())
          : typeof i == "boolean"
          ? (g["XRSB-" + j] = i.toString())
          : typeof i == "object" &&
            i != null &&
            (g["XRSO-" + j] = c("Base64").encode(JSON.stringify(i)));
      }
      d && (g["xrs-body"] = "true");
      e != null &&
        e.length > 0 &&
        (g["xrs-instrumentation"] = c("Base64").encode(e));
      g["XRS-Accept-Ack"] = "RSAck";
      f != null &&
        f.ackTimeoutSec != null &&
        (g["XRS-SRAck-Timeout"] = f.ackTimeoutSec.toString());
      g["XRSS-http_referer"] = window.location.href;
      if (c("WebDriverConfig").isTestRunning && c("gkx")("5639")) {
        j = b("cr:3024") == null ? void 0 : b("cr:3024").get();
        j != null &&
          ((g["XRSS-is_test"] = "1"), (g["XRSS-original_request_id"] = j));
      }
      return g;
    }
    function h(a) {
      return Object.keys(a).reduce(function (b, c) {
        (typeof a[c] === "string" ||
          typeof a[c] === "boolean" ||
          typeof a[c] === "number" ||
          typeof a[c] === "object") &&
          (b[c] = a[c]);
        return b;
      }, {});
    }
    function d(a) {
      if (
        a.response &&
        a.response.instrumentation_data != null &&
        a.response.instrumentation_data.length > 0
      )
        try {
          a = JSON.parse(
            new TextDecoder("utf-8").decode(a.response.instrumentation_data)
          );
          return {
            auxId: a.auxId,
            dfTraceId: (a = a.dataFlowTracingData) == null ? void 0 : a.traceId,
          };
        } catch (a) {}
      return null;
    }
    function e(a, b) {
      var c = a.headers;
      a = a.body;
      b.kill_body === !0 && (a = null);
      b.new_body != null && (a = b.new_body);
      if (b.new_headers != null)
        try {
          c = h(JSON.parse(b.new_headers));
        } catch (a) {}
      if (b.patch_headers != null)
        try {
          c = babelHelpers["extends"]({}, c, h(JSON.parse(b.patch_headers)));
        } catch (a) {}
      return { headers: c, body: a };
    }
    g.convertHeaders = a;
    g.cleanHeaders = h;
    g.getInstrumentationDataFieldsFromPayload = d;
    g.transformContextWithRewriteDelta = e;
  },
  98
);
__d(
  "DGWStream",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("$InternalEnum").Mirrored([
      "ABNORMAL_CLOSURE",
      "GOING_AWAY",
      "SERVER_INTERNAL_ERROR",
      "PREMATURE_CLOSE",
      "UNKNOWN_ERROR",
      "KEEPALIVE_TIMEOUT",
      "TRANSPORT_CLOSED_BEFORE_STREAM_INIT",
      "ESTABLISHMENT_TIMEOUT",
      "UNAUTHENTICATED",
      "UNAUTHORIZED",
      "REJECTED",
      "BAD_REQUEST",
      "DGW_SERVER_ERROR",
      "ESTABLISHMENT_ERROR",
    ]);
    function a(a) {
      switch (a) {
        case g.UNAUTHENTICATED:
        case g.UNAUTHORIZED:
        case g.REJECTED:
        case g.BAD_REQUEST:
        case g.UNKNOWN_ERROR:
        case g.SERVER_INTERNAL_ERROR:
          return !1;
        default:
          return !0;
      }
    }
    f.StreamError = g;
    f.isRetryableError = a;
  },
  66
);
__d(
  "DGWStreamHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$2 = a),
          (this.$3 = b),
          (this.$4 = c),
          (this.$5 = d),
          (this.$6 = e),
          (this.$1 = !0);
      }
      var b = a.prototype;
      b.onClose = function (a) {
        if (!this.$1) return;
        this.$2(a);
      };
      b.onDataReceived = function (a) {
        if (!this.$1) return;
        this.$3(a);
      };
      b.onError = function (a) {
        if (!this.$1) return;
        this.$4(a);
      };
      b.onStreamMustDrain = function (a, b) {
        if (!this.$1) return;
        this.$5(a, b);
      };
      b.onServerHasFinishedSendingData = function (a) {
        if (!this.$1) return;
        this.$6(a);
      };
      b.stop = function () {
        this.$1 = !1;
      };
      b.isStopped = function () {
        return !this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "RequestStreamCommonRequestStreamCommonSerializers",
  ["RequestStreamCommonRequestStreamCommonTypes", "ThriftTypes", "jsbi"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return {};
    }
    function c() {
      return { bytes: Uint8Array.of() };
    }
    function d() {
      return { message: "" };
    }
    function e() {
      return {
        reason: b(
          "RequestStreamCommonRequestStreamCommonTypes"
        ).TerminationReason.cast(0),
      };
    }
    function g() {
      return {};
    }
    function h() {
      return {
        stream_id: "0",
        last_sequencer: 0,
        amendment_count: 0,
        last_status: b(
          "RequestStreamCommonRequestStreamCommonTypes"
        ).FlowStatus.cast(0),
      };
    }
    function i() {
      return { caller_timestamp_ms: "0" };
    }
    function j() {
      return { original_ping_timestamp_ms: "0" };
    }
    function k() {
      return {};
    }
    function l(a, c) {
      c.writeStructBegin("ResponseRewriteRequest"),
        a.new_headers != null &&
          (c.writeFieldBegin({
            fname: "new_headers",
            ftype: b("ThriftTypes").STRING,
            fid: 1,
          }),
          c.writeString(a.new_headers),
          c.writeFieldEnd()),
        a.new_body != null &&
          (c.writeFieldBegin({
            fname: "new_body",
            ftype: b("ThriftTypes").STRING,
            fid: 2,
          }),
          c.writeBinary(a.new_body),
          c.writeFieldEnd()),
        a.patch_headers != null &&
          (c.writeFieldBegin({
            fname: "patch_headers",
            ftype: b("ThriftTypes").STRING,
            fid: 3,
          }),
          c.writeString(a.patch_headers),
          c.writeFieldEnd()),
        a.kill_body != null &&
          (c.writeFieldBegin({
            fname: "kill_body",
            ftype: b("ThriftTypes").BOOL,
            fid: 4,
          }),
          c.writeBool(a.kill_body),
          c.writeFieldEnd()),
        a.temporary != null &&
          (c.writeFieldBegin({
            fname: "temporary",
            ftype: b("ThriftTypes").BOOL,
            fid: 5,
          }),
          c.writeBool(a.temporary),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function m(a, c) {
      c.writeStructBegin("ResponseData");
      c.writeFieldBegin({
        fname: "bytes",
        ftype: b("ThriftTypes").STRING,
        fid: 1,
      });
      if (a.bytes != null) c.writeBinary(a.bytes);
      else {
        var d = Uint8Array.of();
        c.writeBinary(d);
      }
      c.writeFieldEnd();
      a.metadata != null &&
        (c.writeFieldBegin({
          fname: "metadata",
          ftype: b("ThriftTypes").STRING,
          fid: 2,
        }),
        c.writeString(a.metadata),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function n(a, c) {
      c.writeStructBegin("LogMessage");
      c.writeFieldBegin({
        fname: "message",
        ftype: b("ThriftTypes").STRING,
        fid: 1,
      });
      if (a.message != null) c.writeString(a.message);
      else {
        a = "";
        c.writeString(a);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function o(a, c) {
      c.writeStructBegin("Termination");
      c.writeFieldBegin({
        fname: "reason",
        ftype: b("ThriftTypes").I32,
        fid: 1,
      });
      if (a.reason != null) {
        var d;
        c.writeI32((d = a.reason) != null ? d : 0);
      } else {
        d = b(
          "RequestStreamCommonRequestStreamCommonTypes"
        ).TerminationReason.cast(0);
        c.writeI32((d = d) != null ? d : 0);
      }
      c.writeFieldEnd();
      a.message != null &&
        (c.writeFieldBegin({
          fname: "message",
          ftype: b("ThriftTypes").STRING,
          fid: 2,
        }),
        c.writeString(a.message),
        c.writeFieldEnd());
      a.retry_delay_ms != null &&
        (c.writeFieldBegin({
          fname: "retry_delay_ms",
          ftype: b("ThriftTypes").I64,
          fid: 3,
        }),
        c.writeI64(b("jsbi").BigInt(a.retry_delay_ms)),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function p(a, c) {
      c.writeStructBegin("AmendStreamAck"),
        a.amendment_id != null &&
          (c.writeFieldBegin({
            fname: "amendment_id",
            ftype: b("ThriftTypes").I64,
            fid: 1,
          }),
          c.writeI64(b("jsbi").BigInt(a.amendment_id)),
          c.writeFieldEnd()),
        a.accepted != null &&
          (c.writeFieldBegin({
            fname: "accepted",
            ftype: b("ThriftTypes").BOOL,
            fid: 2,
          }),
          c.writeBool(a.accepted),
          c.writeFieldEnd()),
        a.result != null &&
          (c.writeFieldBegin({
            fname: "result",
            ftype: b("ThriftTypes").STRING,
            fid: 3,
          }),
          c.writeBinary(a.result),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function q(a, c) {
      c.writeStructBegin("StreamCheck");
      c.writeFieldBegin({
        fname: "stream_id",
        ftype: b("ThriftTypes").I64,
        fid: 1,
      });
      if (a.stream_id != null) c.writeI64(b("jsbi").BigInt(a.stream_id));
      else {
        var d = "0";
        c.writeI64(b("jsbi").BigInt(d));
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: "last_sequencer",
        ftype: b("ThriftTypes").I32,
        fid: 2,
      });
      if (a.last_sequencer != null) c.writeI32(a.last_sequencer);
      else {
        d = 0;
        c.writeI32(d);
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: "amendment_count",
        ftype: b("ThriftTypes").I32,
        fid: 4,
      });
      if (a.amendment_count != null) c.writeI32(a.amendment_count);
      else {
        d = 0;
        c.writeI32(d);
      }
      c.writeFieldEnd();
      c.writeFieldBegin({
        fname: "last_status",
        ftype: b("ThriftTypes").I32,
        fid: 3,
      });
      if (a.last_status != null) {
        c.writeI32((d = a.last_status) != null ? d : 0);
      } else {
        a = b("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.cast(0);
        c.writeI32((d = a) != null ? d : 0);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function r(a, c) {
      c.writeStructBegin("Ping");
      c.writeFieldBegin({
        fname: "caller_timestamp_ms",
        ftype: b("ThriftTypes").I64,
        fid: 1,
      });
      if (a.caller_timestamp_ms != null)
        c.writeI64(b("jsbi").BigInt(a.caller_timestamp_ms));
      else {
        var d = "0";
        c.writeI64(b("jsbi").BigInt(d));
      }
      c.writeFieldEnd();
      if (a.streams_to_check != null) {
        c.writeFieldBegin({
          fname: "streams_to_check",
          ftype: b("ThriftTypes").LIST,
          fid: 2,
        });
        c.writeListBegin({
          etype: b("ThriftTypes").STRUCT,
          size: a.streams_to_check.length,
        });
        for (
          var d = a.streams_to_check,
            a = Array.isArray(d),
            e = 0,
            d = a
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (a) {
            if (e >= d.length) break;
            f = d[e++];
          } else {
            e = d.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          q(f, c);
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function s(a, c) {
      c.writeStructBegin("Pong");
      c.writeFieldBegin({
        fname: "original_ping_timestamp_ms",
        ftype: b("ThriftTypes").I64,
        fid: 1,
      });
      if (a.original_ping_timestamp_ms != null)
        c.writeI64(b("jsbi").BigInt(a.original_ping_timestamp_ms));
      else {
        var d = "0";
        c.writeI64(b("jsbi").BigInt(d));
      }
      c.writeFieldEnd();
      if (a.stream_ids_missing != null) {
        c.writeFieldBegin({
          fname: "stream_ids_missing",
          ftype: b("ThriftTypes").LIST,
          fid: 2,
        });
        c.writeListBegin({
          etype: b("ThriftTypes").I64,
          size: a.stream_ids_missing.length,
        });
        for (
          var d = a.stream_ids_missing,
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
          c.writeI64(b("jsbi").BigInt(g));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_behind != null) {
        c.writeFieldBegin({
          fname: "stream_ids_behind",
          ftype: b("ThriftTypes").LIST,
          fid: 3,
        });
        c.writeListBegin({
          etype: b("ThriftTypes").I64,
          size: a.stream_ids_behind.length,
        });
        for (
          g = a.stream_ids_behind,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            d = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            d = e.value;
          }
          d = d;
          c.writeI64(b("jsbi").BigInt(d));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_with_lost_amendments != null) {
        c.writeFieldBegin({
          fname: "stream_ids_with_lost_amendments",
          ftype: b("ThriftTypes").LIST,
          fid: 4,
        });
        c.writeListBegin({
          etype: b("ThriftTypes").I64,
          size: a.stream_ids_with_lost_amendments.length,
        });
        for (
          d = a.stream_ids_with_lost_amendments,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          c.writeI64(b("jsbi").BigInt(g));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      if (a.stream_ids_with_wrong_status != null) {
        c.writeFieldBegin({
          fname: "stream_ids_with_wrong_status",
          ftype: b("ThriftTypes").LIST,
          fid: 5,
        });
        c.writeListBegin({
          etype: b("ThriftTypes").I64,
          size: a.stream_ids_with_wrong_status.length,
        });
        for (
          g = a.stream_ids_with_wrong_status,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            d = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            d = e.value;
          }
          a = d;
          c.writeI64(b("jsbi").BigInt(a));
        }
        c.writeListEnd();
        c.writeFieldEnd();
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function t(a, c) {
      c.writeStructBegin("StreamResponseDelta");
      if (a.flow_status != null) {
        var d;
        c.writeFieldBegin({
          fname: "flow_status",
          ftype: b("ThriftTypes").I32,
          fid: 1,
        });
        c.writeI32((d = a.flow_status) != null ? d : 0);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.log != null) {
        c.writeFieldBegin({
          fname: "log",
          ftype: b("ThriftTypes").STRUCT,
          fid: 2,
        });
        n(a.log, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.rewrite != null) {
        c.writeFieldBegin({
          fname: "rewrite",
          ftype: b("ThriftTypes").STRUCT,
          fid: 3,
        });
        l(a.rewrite, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.data != null) {
        c.writeFieldBegin({
          fname: "data",
          ftype: b("ThriftTypes").STRUCT,
          fid: 4,
        });
        m(a.data, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.termination != null) {
        c.writeFieldBegin({
          fname: "termination",
          ftype: b("ThriftTypes").STRUCT,
          fid: 5,
        });
        o(a.termination, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.amend_ack != null) {
        c.writeFieldBegin({
          fname: "amend_ack",
          ftype: b("ThriftTypes").STRUCT,
          fid: 6,
        });
        p(a.amend_ack, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function u(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").STRING
              ? (c.new_headers = a.readString())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").STRING
              ? (c.new_body = a.readBinary())
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").STRING
              ? (c.patch_headers = a.readString())
              : a.skip(e);
            break;
          case 4:
            e === b("ThriftTypes").BOOL
              ? (c.kill_body = a.readBool())
              : a.skip(e);
            break;
          case 5:
            e === b("ThriftTypes").BOOL
              ? (c.temporary = a.readBool())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function v(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").STRING
              ? (c.bytes = a.readBinary())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").STRING
              ? (c.metadata = a.readString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.bytes === void 0 && (c.bytes = Uint8Array.of());
      return c;
    }
    function w(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").STRING
              ? (c.message = a.readString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.message === void 0 && (c.message = "");
      return c;
    }
    function x(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I32
              ? (c.reason = b(
                  "RequestStreamCommonRequestStreamCommonTypes"
                ).TerminationReason.cast(a.readI32()))
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").STRING
              ? (c.message = a.readString())
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").I64
              ? (c.retry_delay_ms = a.readI64().toString())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.reason === void 0 &&
        (c.reason = b(
          "RequestStreamCommonRequestStreamCommonTypes"
        ).TerminationReason.cast(0));
      return c;
    }
    function y(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.amendment_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").BOOL
              ? (c.accepted = a.readBool())
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").STRING
              ? (c.result = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function z(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.stream_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").I32
              ? (c.last_sequencer = a.readI32())
              : a.skip(e);
            break;
          case 4:
            e === b("ThriftTypes").I32
              ? (c.amendment_count = a.readI32())
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").I32
              ? (c.last_status = b(
                  "RequestStreamCommonRequestStreamCommonTypes"
                ).FlowStatus.cast(a.readI32()))
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.stream_id === void 0 && (c.stream_id = "0");
      c.last_sequencer === void 0 && (c.last_sequencer = 0);
      c.amendment_count === void 0 && (c.amendment_count = 0);
      c.last_status === void 0 &&
        (c.last_status = b(
          "RequestStreamCommonRequestStreamCommonTypes"
        ).FlowStatus.cast(0));
      return c;
    }
    function A(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.caller_timestamp_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b("ThriftTypes").LIST) {
              c.streams_to_check = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = z(a);
                c.streams_to_check.push(g);
              }
            } else a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.caller_timestamp_ms === void 0 && (c.caller_timestamp_ms = "0");
      return c;
    }
    function B(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.original_ping_timestamp_ms = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b("ThriftTypes").LIST) {
              c.stream_ids_missing = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = a.readI64().toString();
                c.stream_ids_missing.push(g);
              }
            } else a.skip(e);
            break;
          case 3:
            if (e === b("ThriftTypes").LIST) {
              c.stream_ids_behind = [];
              g = a.readListBegin();
              for (f = 0; f < g.size; f++) {
                d = a.readI64().toString();
                c.stream_ids_behind.push(d);
              }
            } else a.skip(e);
            break;
          case 4:
            if (e === b("ThriftTypes").LIST) {
              c.stream_ids_with_lost_amendments = [];
              d = a.readListBegin();
              for (f = 0; f < d.size; f++) {
                g = a.readI64().toString();
                c.stream_ids_with_lost_amendments.push(g);
              }
            } else a.skip(e);
            break;
          case 5:
            if (e === b("ThriftTypes").LIST) {
              c.stream_ids_with_wrong_status = [];
              g = a.readListBegin();
              for (f = 0; f < g.size; f++) {
                d = a.readI64().toString();
                c.stream_ids_with_wrong_status.push(d);
              }
            } else a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.original_ping_timestamp_ms === void 0 &&
        (c.original_ping_timestamp_ms = "0");
      return c;
    }
    function C(a) {
      var c,
        d = {};
      a.readStructBegin();
      while (!0) {
        var e = a.readFieldBegin(),
          f = e.ftype;
        e = e.fid;
        if (f === b("ThriftTypes").STOP) break;
        switch (e) {
          case 1:
            if (f === b("ThriftTypes").I32)
              if (c == null)
                (d.flow_status = b(
                  "RequestStreamCommonRequestStreamCommonTypes"
                ).FlowStatus.cast(a.readI32())),
                  (c = "flow_status");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: flow_status, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 2:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.log = w(a)), (c = "log");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: log, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 3:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.rewrite = u(a)), (c = "rewrite");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: rewrite, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 4:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.data = v(a)), (c = "data");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: data, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 5:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.termination = x(a)), (c = "termination");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: termination, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 6:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.amend_ack = y(a)), (c = "amend_ack");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: amend_ack, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          default:
            a.skip(f);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return d;
    }
    f.ResponseRewriteRequest$DefaultConstructor = a;
    f.ResponseData$DefaultConstructor = c;
    f.LogMessage$DefaultConstructor = d;
    f.Termination$DefaultConstructor = e;
    f.AmendStreamAck$DefaultConstructor = g;
    f.StreamCheck$DefaultConstructor = h;
    f.Ping$DefaultConstructor = i;
    f.Pong$DefaultConstructor = j;
    f.StreamResponseDelta$DefaultConstructor = k;
    f.serializeResponseRewriteRequest = l;
    f.serializeResponseData = m;
    f.serializeLogMessage = n;
    f.serializeTermination = o;
    f.serializeAmendStreamAck = p;
    f.serializeStreamCheck = q;
    f.serializePing = r;
    f.serializePong = s;
    f.serializeStreamResponseDelta = t;
    f.deserializeResponseRewriteRequest = u;
    f.deserializeResponseData = v;
    f.deserializeLogMessage = w;
    f.deserializeTermination = x;
    f.deserializeAmendStreamAck = y;
    f.deserializeStreamCheck = z;
    f.deserializePing = A;
    f.deserializePong = B;
    f.deserializeStreamResponseDelta = C;
  },
  66
);
__d(
  "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      Ignored: 100,
      Success: 200,
      Queued: 250,
      UnknownStream: 400,
      HandledUnknownResult: 450,
      Failure: 500,
    });
    c = b("$InternalEnum")({
      Request_headers: "request_headers",
      Request_body: "request_body",
      Amend: "amend",
      Ack: "ack",
      Response: "response",
      Ping: "ping",
      Pong: "pong",
    });
    e.exports = { Ack: a, Payload$Types: c };
  },
  null
);
__d(
  "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
  [
    "RequestStreamCommonRequestStreamCommonSerializers",
    "RequestStreamCommonRequestStreamCommonTypes",
    "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
    "ThriftTypes",
    "jsbi",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return {};
    }
    function c() {
      return { body: Uint8Array.of() };
    }
    function d() {
      return { amendment: Uint8Array.of() };
    }
    function e() {
      return {
        ack: b(
          "RequestStreamSingleChannelSingleChannelRequestStreamTypes"
        ).Ack.cast(0),
      };
    }
    function g() {
      return { delta: [] };
    }
    function h() {
      return {};
    }
    function i(a, c) {
      c.writeStructBegin("RequestStreamHeaders"),
        a.headers != null &&
          (c.writeFieldBegin({
            fname: "headers",
            ftype: b("ThriftTypes").STRING,
            fid: 1,
          }),
          c.writeBinary(a.headers),
          c.writeFieldEnd()),
        a.instrumentation_data != null &&
          (c.writeFieldBegin({
            fname: "instrumentation_data",
            ftype: b("ThriftTypes").STRING,
            fid: 2,
          }),
          c.writeBinary(a.instrumentation_data),
          c.writeFieldEnd()),
        c.writeFieldStop(),
        c.writeStructEnd();
    }
    function j(a, c) {
      c.writeStructBegin("RequestStreamBody");
      c.writeFieldBegin({
        fname: "body",
        ftype: b("ThriftTypes").STRING,
        fid: 1,
      });
      if (a.body != null) c.writeBinary(a.body);
      else {
        a = Uint8Array.of();
        c.writeBinary(a);
      }
      c.writeFieldEnd();
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function k(a, c) {
      c.writeStructBegin("AmendStream");
      a.amendment_id != null &&
        (c.writeFieldBegin({
          fname: "amendment_id",
          ftype: b("ThriftTypes").I64,
          fid: 1,
        }),
        c.writeI64(b("jsbi").BigInt(a.amendment_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({
        fname: "amendment",
        ftype: b("ThriftTypes").STRING,
        fid: 2,
      });
      if (a.amendment != null) c.writeBinary(a.amendment);
      else {
        var d = Uint8Array.of();
        c.writeBinary(d);
      }
      c.writeFieldEnd();
      a.is_query != null &&
        (c.writeFieldBegin({
          fname: "is_query",
          ftype: b("ThriftTypes").BOOL,
          fid: 3,
        }),
        c.writeBool(a.is_query),
        c.writeFieldEnd());
      a.instrumentation_data != null &&
        (c.writeFieldBegin({
          fname: "instrumentation_data",
          ftype: b("ThriftTypes").STRING,
          fid: 4,
        }),
        c.writeBinary(a.instrumentation_data),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function l(a, c) {
      c.writeStructBegin("StreamResponseAck");
      a.response_id != null &&
        (c.writeFieldBegin({
          fname: "response_id",
          ftype: b("ThriftTypes").I64,
          fid: 1,
        }),
        c.writeI64(b("jsbi").BigInt(a.response_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({ fname: "ack", ftype: b("ThriftTypes").I32, fid: 2 });
      if (a.ack != null) {
        var d;
        c.writeI32((d = a.ack) != null ? d : 0);
      } else {
        d = b(
          "RequestStreamSingleChannelSingleChannelRequestStreamTypes"
        ).Ack.cast(0);
        c.writeI32((d = d) != null ? d : 0);
      }
      c.writeFieldEnd();
      a.query_result != null &&
        (c.writeFieldBegin({
          fname: "query_result",
          ftype: b("ThriftTypes").STRING,
          fid: 3,
        }),
        c.writeBinary(a.query_result),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function m(a, c) {
      c.writeStructBegin("StreamResponse");
      a.response_id != null &&
        (c.writeFieldBegin({
          fname: "response_id",
          ftype: b("ThriftTypes").I64,
          fid: 1,
        }),
        c.writeI64(b("jsbi").BigInt(a.response_id)),
        c.writeFieldEnd());
      c.writeFieldBegin({
        fname: "delta",
        ftype: b("ThriftTypes").LIST,
        fid: 2,
      });
      if (a.delta != null) {
        c.writeListBegin({
          etype: b("ThriftTypes").STRUCT,
          size: a.delta.length,
        });
        for (
          var d = a.delta,
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
          b(
            "RequestStreamCommonRequestStreamCommonSerializers"
          ).serializeStreamResponseDelta(g, c);
        }
        c.writeListEnd();
      } else {
        g = [];
        c.writeListBegin({ etype: b("ThriftTypes").STRUCT, size: g.length });
        for (f = 0; f < g.length; f++) {
          e = g[f];
          b(
            "RequestStreamCommonRequestStreamCommonSerializers"
          ).serializeStreamResponseDelta(e, c);
        }
        c.writeListEnd();
      }
      c.writeFieldEnd();
      if (a.ack_level != null) {
        c.writeFieldBegin({
          fname: "ack_level",
          ftype: b("ThriftTypes").I32,
          fid: 3,
        });
        c.writeI32((d = a.ack_level) != null ? d : 0);
        c.writeFieldEnd();
      }
      a.query_request != null &&
        (c.writeFieldBegin({
          fname: "query_request",
          ftype: b("ThriftTypes").STRING,
          fid: 4,
        }),
        c.writeBinary(a.query_request),
        c.writeFieldEnd());
      a.instrumentation_data != null &&
        (c.writeFieldBegin({
          fname: "instrumentation_data",
          ftype: b("ThriftTypes").STRING,
          fid: 5,
        }),
        c.writeBinary(a.instrumentation_data),
        c.writeFieldEnd());
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function n(a, c) {
      c.writeStructBegin("Payload");
      if (a.request_headers != null) {
        c.writeFieldBegin({
          fname: "request_headers",
          ftype: b("ThriftTypes").STRUCT,
          fid: 1,
        });
        i(a.request_headers, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.request_body != null) {
        c.writeFieldBegin({
          fname: "request_body",
          ftype: b("ThriftTypes").STRUCT,
          fid: 2,
        });
        j(a.request_body, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.amend != null) {
        c.writeFieldBegin({
          fname: "amend",
          ftype: b("ThriftTypes").STRUCT,
          fid: 3,
        });
        k(a.amend, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.ack != null) {
        c.writeFieldBegin({
          fname: "ack",
          ftype: b("ThriftTypes").STRUCT,
          fid: 4,
        });
        l(a.ack, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.response != null) {
        c.writeFieldBegin({
          fname: "response",
          ftype: b("ThriftTypes").STRUCT,
          fid: 5,
        });
        m(a.response, c);
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.ping != null) {
        c.writeFieldBegin({
          fname: "ping",
          ftype: b("ThriftTypes").STRUCT,
          fid: 6,
        });
        b("RequestStreamCommonRequestStreamCommonSerializers").serializePing(
          a.ping,
          c
        );
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      if (a.pong != null) {
        c.writeFieldBegin({
          fname: "pong",
          ftype: b("ThriftTypes").STRUCT,
          fid: 7,
        });
        b("RequestStreamCommonRequestStreamCommonSerializers").serializePong(
          a.pong,
          c
        );
        c.writeFieldEnd();
        c.writeFieldStop();
        c.writeStructEnd();
        return;
      }
      c.writeFieldStop();
      c.writeStructEnd();
    }
    function o(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").STRING
              ? (c.headers = a.readBinary())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return c;
    }
    function p(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").STRING
              ? (c.body = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.body === void 0 && (c.body = Uint8Array.of());
      return c;
    }
    function q(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.amendment_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").STRING
              ? (c.amendment = a.readBinary())
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").BOOL
              ? (c.is_query = a.readBool())
              : a.skip(e);
            break;
          case 4:
            e === b("ThriftTypes").STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.amendment === void 0 && (c.amendment = Uint8Array.of());
      return c;
    }
    function r(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.response_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            e === b("ThriftTypes").I32
              ? (c.ack = b(
                  "RequestStreamSingleChannelSingleChannelRequestStreamTypes"
                ).Ack.cast(a.readI32()))
              : a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").STRING
              ? (c.query_result = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.ack === void 0 &&
        (c.ack = b(
          "RequestStreamSingleChannelSingleChannelRequestStreamTypes"
        ).Ack.cast(0));
      return c;
    }
    function s(a) {
      var c = {};
      a.readStructBegin();
      while (!0) {
        var d = a.readFieldBegin(),
          e = d.ftype;
        d = d.fid;
        if (e === b("ThriftTypes").STOP) break;
        switch (d) {
          case 1:
            e === b("ThriftTypes").I64
              ? (c.response_id = a.readI64().toString())
              : a.skip(e);
            break;
          case 2:
            if (e === b("ThriftTypes").LIST) {
              c.delta = [];
              d = a.readListBegin();
              for (var f = 0; f < d.size; f++) {
                var g = b(
                  "RequestStreamCommonRequestStreamCommonSerializers"
                ).deserializeStreamResponseDelta(a);
                c.delta.push(g);
              }
            } else a.skip(e);
            break;
          case 3:
            e === b("ThriftTypes").I32
              ? (c.ack_level = b(
                  "RequestStreamCommonRequestStreamCommonTypes"
                ).AckLevel.cast(a.readI32()))
              : a.skip(e);
            break;
          case 4:
            e === b("ThriftTypes").STRING
              ? (c.query_request = a.readBinary())
              : a.skip(e);
            break;
          case 5:
            e === b("ThriftTypes").STRING
              ? (c.instrumentation_data = a.readBinary())
              : a.skip(e);
            break;
          default:
            a.skip(e);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      c.delta === void 0 && (c.delta = []);
      return c;
    }
    function t(a) {
      var c,
        d = {};
      a.readStructBegin();
      while (!0) {
        var e = a.readFieldBegin(),
          f = e.ftype;
        e = e.fid;
        if (f === b("ThriftTypes").STOP) break;
        switch (e) {
          case 1:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null)
                (d.request_headers = o(a)), (c = "request_headers");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: request_headers, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 2:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.request_body = p(a)), (c = "request_body");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: request_body, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 3:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.amend = q(a)), (c = "amend");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: amend, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 4:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.ack = r(a)), (c = "ack");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: ack, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 5:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null) (d.response = s(a)), (c = "response");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: response, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 6:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null)
                (d.ping = b(
                  "RequestStreamCommonRequestStreamCommonSerializers"
                ).deserializePing(a)),
                  (c = "ping");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: ping, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          case 7:
            if (f === b("ThriftTypes").STRUCT)
              if (c == null)
                (d.pong = b(
                  "RequestStreamCommonRequestStreamCommonSerializers"
                ).deserializePong(a)),
                  (c = "pong");
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: pong, previous deserialized field: " +
                    c
                );
            else a.skip(f);
            break;
          default:
            a.skip(f);
        }
        a.readFieldEnd();
      }
      a.readStructEnd();
      return d;
    }
    f.RequestStreamHeaders$DefaultConstructor = a;
    f.RequestStreamBody$DefaultConstructor = c;
    f.AmendStream$DefaultConstructor = d;
    f.StreamResponseAck$DefaultConstructor = e;
    f.StreamResponse$DefaultConstructor = g;
    f.Payload$DefaultConstructor = h;
    f.serializeRequestStreamHeaders = i;
    f.serializeRequestStreamBody = j;
    f.serializeAmendStream = k;
    f.serializeStreamResponseAck = l;
    f.serializeStreamResponse = m;
    f.serializePayload = n;
    f.deserializeRequestStreamHeaders = o;
    f.deserializeRequestStreamBody = p;
    f.deserializeAmendStream = q;
    f.deserializeStreamResponseAck = r;
    f.deserializeStreamResponse = s;
    f.deserializePayload = t;
  },
  66
);
__d(
  "RequestStreamState",
  ["RequestStreamCommonRequestStreamCommonTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (b) {
        case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
          .Accepted:
          return a.seenAccepted
            ? a
            : {
                flowStatus: d("RequestStreamCommonRequestStreamCommonTypes")
                  .FlowStatus.Accepted,
                seenAccepted: !0,
              };
        default:
          if (!a.seenAccepted || a.flowStatus === b) return a;
          else return { flowStatus: b, seenAccepted: !0 };
      }
    }
    g.getNextState = a;
  },
  98
);
__d(
  "StreamRetryState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1e3,
      h = 2 * 60 * 1e3;
    a = (function () {
      function a() {
        this.$1 = 0;
      }
      var b = a.prototype;
      b.resetErrorAndRetryCount = function () {
        this.$1 = 0;
      };
      b.onRetry = function () {
        this.$1 += 1;
      };
      b.getRetryCount = function () {
        return this.$1;
      };
      b.getBackoffDelayMs = function () {
        if (this.$1 <= 1) return 0;
        if (this.$1 === 2) return g * Math.random();
        var a = g * Math.pow(2, this.$1 - 3),
          b = a * Math.random();
        a = a + b;
        return Math.min(a, h);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "DGWRequestStreamRef",
  [
    "CompactSerializerPolyfill",
    "DGWRequestStreamUtils",
    "DGWStream",
    "DGWStreamHandler",
    "InflightAmends",
    "Promise",
    "RequestStreamCloseReason",
    "RequestStreamCommonRequestStreamCommonTypes",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "RequestStreamE2ELogger",
    "RequestStreamE2ESampling",
    "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
    "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
    "RequestStreamState",
    "RequestStreamTransport",
    "RtiWebRequestStreamClient",
    "StreamRetryState",
    "err",
    "gkx",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
      i = 0,
      j = 1e3,
      k = 2,
      l = c("gkx")("2674") ? 3e4 : 5e3,
      m = "dgw_stream_send_ack_failure";
    function n(a) {
      if (!a) {
        a = c("err")(m);
        a.stack;
        throw a;
      }
    }
    function o(a, b) {
      if (a == null || a.length === 0) return null;
      a = JSON.parse(a);
      a.auxId = b;
      return new TextEncoder().encode(JSON.stringify(a));
    }
    function p(a) {
      var b = {};
      a = a.delta;
      a.forEach(function (a) {
        if (a.flow_status) {
          b.type = d(
            "RequestStreamCommonRequestStreamCommonTypes"
          ).StreamResponseDelta$Types.Flow_status;
          switch (a.flow_status) {
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Accepted:
              b.flow_status = "Accepted";
              break;
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Started:
              b.flow_status = "Started";
              break;
            case d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Stopped:
              b.flow_status = "Stopped";
              break;
          }
        } else a.log ? (b.type = d("RequestStreamCommonRequestStreamCommonTypes").StreamResponseDelta$Types.Log) : a.rewrite ? (b.type = d("RequestStreamCommonRequestStreamCommonTypes").StreamResponseDelta$Types.Rewrite) : a.data ? (b.type = d("RequestStreamCommonRequestStreamCommonTypes").StreamResponseDelta$Types.Data) : a.termination ? (b.type = d("RequestStreamCommonRequestStreamCommonTypes").StreamResponseDelta$Types.Termination) : a.amend_ack && (b.type = d("RequestStreamCommonRequestStreamCommonTypes").StreamResponseDelta$Types.Amend_ack);
      });
      return b;
    }
    a = (function () {
      function a(a, b, e, f, g, i) {
        var j = this;
        this.$6 = null;
        this.$7 = {};
        this.$10 = !1;
        this.$15 = new (c("StreamRetryState"))();
        this.$16 = 0;
        this.$17 = 0;
        this.$18 = 0;
        this.$21 = 0;
        var k = null;
        typeof b == "string"
          ? (k = new TextEncoder().encode(b))
          : typeof b == "object" && (k = b);
        this.$1 = { headers: a, body: k };
        this.$3 = e;
        this.$4 = f;
        this.$12 = h;
        this.$9 = !1;
        this.$14 = !1;
        this.$20 = i;
        g != null &&
          (this.$22() ||
            (g.dgwStreamGroupLoggingId = this.$20.getStreamGroupLoggingId()),
          (g.dgwCountPriorStreamsInGroup =
            this.$20.guessStreamGroupPriorStreamCount()),
          (g.transport = "WEB_RS_STARGATE"));
        this.$5 = d("RequestStreamE2ESampling").validateInstrumentationData(
          a,
          g,
          f == null ? void 0 : f.requestLogContext,
          f == null ? void 0 : f.upsampleMultiplier
        );
        !this.$22()
          ? (this.$6 = d("RequestStreamE2ELogger").createStreamLogger(
              a,
              this.$5,
              d("RequestStreamTransport").RequestStreamTransport.WEB_RS_STARGATE
            ))
          : (this.$7.disableFalcoLogging = !0);
        this.$6 && (this.$7.loggingId = this.$6.getRequestId());
        f && f.overrideUrl != null && (this.$7.overrideUrl = f.overrideUrl);
        this.$8 = {
          flowStatus: d("RequestStreamCommonRequestStreamCommonTypes")
            .FlowStatus.Stopped,
          seenAccepted: !1,
        };
        this.$19 = new (c("InflightAmends"))(
          l,
          function (a, b) {
            var d;
            (d = j.$6) == null
              ? void 0
              : d.logE2EEvent(
                  c("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                  c("RequestStreamE2EClientLoggerEvent").RECEIVED,
                  babelHelpers["extends"]({}, j.$23(), {
                    latency: b.toString(),
                  }),
                  a
                );
          },
          function (a, b) {
            if (b.message !== m) {
              var d;
              (d = j.$6) == null
                ? void 0
                : d.logE2EEvent(
                    c("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                    c("RequestStreamE2EClientLoggerEvent").FAILURE,
                    babelHelpers["extends"]({}, j.$23(), { reason: b.message }),
                    a
                  );
            }
          }
        );
        (k = this.$6) == null
          ? void 0
          : k.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              c("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {
                data_size:
                  (i =
                    b == null
                      ? void 0
                      : (e = b.length) == null
                      ? void 0
                      : e.toString()) != null
                    ? i
                    : "0",
              },
              "0",
              "0"
            );
      }
      var e = a.prototype;
      e.getInstrumentationData = function () {
        return this.$5;
      };
      e.getE2EClientLogger = function () {
        return this.$6;
      };
      e.amendWithAck = function (a) {
        a = this.$24(a, !0);
        return a === null || a === void 0
          ? b("Promise").resolve(!1)
          : this.$19.getPromise(a) || b("Promise").resolve(!1);
      };
      e.amendWithoutAck = function (a) {
        this.$24(a, !1);
      };
      e.cancel = function () {
        var a;
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").CANCEL,
              c("RequestStreamE2EClientLoggerEvent").RECEIVED
            );
        this.$9 = !0;
        this.$25(
          d("RequestStreamCloseReason").RequestStreamCloseReason.UserIntention,
          "user cancel the stream",
          !0
        );
      };
      e.start = function (a) {
        var e = this;
        a === void 0 && (a = !1);
        var f = String(this.$16++),
          g = Date.now();
        return this.$26(f)
          .then(function () {
            var a;
            e.$14 = !1;
            e.$21 = 0;
            var b = (Date.now() - g).toString();
            (a = e.$6) == null
              ? void 0
              : a.logE2EEvent(
                  c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  c("RequestStreamE2EClientLoggerEvent").PUBACK,
                  { latency: b },
                  f,
                  String(e.$18)
                );
          })
          ["catch"](function (g) {
            g.stack;
            if (g.message === m && e.$10) return;
            e.$14 = !1;
            if (
              c("gkx")("1799") ||
              g !== d("DGWStream").StreamError.ESTABLISHMENT_ERROR
            ) {
              var h,
                i = g.message;
              g === d("DGWStream").StreamError.UNAUTHENTICATED
                ? (i = "UNAUTHENTICATED")
                : g === d("DGWStream").StreamError.UNAUTHORIZED &&
                  (i = "UNAUTHORIZED");
              (h = e.$6) == null
                ? void 0
                : h.logE2EEvent(
                    c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                    c("RequestStreamE2EClientLoggerEvent").FAILURE,
                    { reason: i },
                    f,
                    String(e.$18)
                  );
              e.$25(
                a
                  ? d("RequestStreamCloseReason").RequestStreamCloseReason
                      .ReestablishError
                  : d("RequestStreamCloseReason").RequestStreamCloseReason
                      .StartStreamFailure,
                i,
                !0
              );
              if (
                g === d("DGWStream").StreamError.UNAUTHENTICATED ||
                g === d("DGWStream").StreamError.UNAUTHORIZED
              )
                return;
              throw g;
            } else {
              (h = e.$6) == null
                ? void 0
                : h.logE2EEvent(
                    c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                    c("RequestStreamE2EClientLoggerEvent").FAILURE,
                    { reason: (i = g.message) != null ? i : g },
                    f,
                    String(e.$18)
                  );
              e.$15.onRetry();
              var l = c("gkx")("6002")
                ? e.$15.getBackoffDelayMs()
                : j * Math.pow(k, e.$21);
              return new (b("Promise"))(function (a) {
                return window.setTimeout(a, l);
              }).then(function () {
                e.$21++;
                e.$18++;
                return e.start();
              });
            }
          });
      };
      e.getFlowStatus = function () {
        return this.$8.flowStatus;
      };
      e.shouldTerminateOrRetry = function (a, e, f, g) {
        var h = this;
        if (this.$14) return;
        var j = e;
        this.$12 ||
          (j =
            "cannot retry for error: " +
            e +
            " because of hit max retry limitation");
        if (
          a !==
          d("RequestStreamCloseReason").RequestStreamCloseReason.ClientError
        ) {
          (e = this.$6) == null
            ? void 0
            : e.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: j },
                null,
                String(this.$18)
              );
        }
        e = f && (c("gkx")("6002") || this.$12);
        this.$25(a, j, !e);
        if (e) {
          var k = c("gkx")("6002")
            ? Math.max((f = g) != null ? f : 0, this.$15.getBackoffDelayMs())
            : (a = g) != null
            ? a
            : i;
          this.$14 = !0;
          return new (b("Promise"))(function (a) {
            return window.setTimeout(a, k);
          })
            .then(function () {
              return h.$27();
            })
            ["catch"](function (a) {});
        }
      };
      e.$28 = function () {
        return this.$11 != null;
      };
      e.$24 = function (a, b) {
        var e,
          f = this,
          g = typeof a == "string" ? new TextEncoder().encode(a) : a,
          h = String(this.$17++);
        (e = this.$6) == null
          ? void 0
          : e.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
              c("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {},
              h
            );
        e = o(this.$5, h);
        g = { amend: { amendment: g, instrumentation_data: e } };
        b && g.amend && (g.amend.amendment_id = h);
        e = d("CompactSerializerPolyfill").serialize(
          g,
          d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers")
            .serializePayload
        );
        var i = Date.now();
        if (this.$29() && this.$11 != null) {
          b && this.$19.add(h);
          this.$11
            .send(e)
            .then(function (a) {
              var b;
              n(a);
              a = (Date.now() - i).toString();
              (b = f.$6) == null
                ? void 0
                : b.logE2EEvent(
                    c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    c("RequestStreamE2EClientLoggerEvent").PUBACK,
                    { latency: a },
                    h
                  );
            })
            ["catch"](function (a) {
              var b;
              (b = f.$6) == null
                ? void 0
                : b.logE2EEvent(
                    c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                    c("RequestStreamE2EClientLoggerEvent").FAILURE,
                    { reason: a.message },
                    h
                  );
              f.$19.reject(h, a);
            });
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                c("RequestStreamE2EClientLoggerEvent").SENT,
                {
                  data_size:
                    (e =
                      a == null
                        ? void 0
                        : (b = a.length) == null
                        ? void 0
                        : b.toString()) != null
                      ? e
                      : "0",
                },
                h
              );
          return h;
        } else {
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                h
              );
        }
      };
      e.$26 = function (a) {
        var e = this,
          f,
          g,
          i,
          j,
          k,
          l,
          m;
        return b("regeneratorRuntime").async(
          function (o) {
            while (1)
              switch ((o.prev = o.next)) {
                case 0:
                  if (this.$9) {
                    o.next = 36;
                    break;
                  }
                  g = this.$2 || this.$1;
                  o.prev = 2;
                  i = this.$30();
                  this.$13 = i;
                  j = d("DGWRequestStreamUtils").convertHeaders(
                    babelHelpers["extends"]({}, g.headers, this.$31()),
                    g.body != null,
                    this.$5
                  );
                  o.next = 8;
                  return b("regeneratorRuntime").awrap(
                    this.$20.establishStream(j, i, this.$7)
                  );
                case 8:
                  this.$11 = o.sent;
                  o.next = 23;
                  break;
                case 11:
                  o.prev = 11;
                  o.t0 = o["catch"](2);
                  if (
                    !(o.t0 === d("DGWStream").StreamError.ESTABLISHMENT_ERROR)
                  ) {
                    o.next = 15;
                    break;
                  }
                  throw o.t0;
                case 15:
                  if (
                    !(
                      d("DGWStream").StreamError.isValid(o.t0) &&
                      !d("DGWStream").isRetryableError(o.t0)
                    )
                  ) {
                    o.next = 19;
                    break;
                  }
                  throw o.t0;
                case 19:
                  if (
                    !(
                      d("DGWStream").StreamError.isValid(o.t0) &&
                      d("DGWStream").isRetryableError(o.t0)
                    )
                  ) {
                    o.next = 22;
                    break;
                  }
                  this.$32(o.t0);
                  return o.abrupt("return");
                case 22:
                  throw o.t0;
                case 23:
                  if (!this.$9) {
                    o.next = 26;
                    break;
                  }
                  this.$25(
                    d("RequestStreamCloseReason").RequestStreamCloseReason
                      .UserIntention,
                    "user cancel the stream",
                    !0
                  );
                  return o.abrupt("return");
                case 26:
                  k = new Uint8Array([]);
                  g.body != null &&
                    ((l = { request_body: { body: g.body } }),
                    (k = d("CompactSerializerPolyfill").serialize(
                      l,
                      d(
                        "RequestStreamSingleChannelSingleChannelRequestStreamSerializers"
                      ).serializePayload
                    )));
                  if (this.$11) {
                    o.next = 30;
                    break;
                  }
                  throw new Error("dgwstream_is_null");
                case 30:
                  m = this.$11.send(k).then(function (a) {
                    n(a),
                      e.$9 &&
                        e.$25(
                          d("RequestStreamCloseReason").RequestStreamCloseReason
                            .UserIntention,
                          "user cancel the stream",
                          !0
                        );
                  });
                  (f = this.$6) == null
                    ? void 0
                    : f.logE2EEvent(
                        c("RequestStreamE2EClientLoggerMessageType")
                          .REQUEST_STREAM,
                        c("RequestStreamE2EClientLoggerEvent").SENT,
                        {},
                        a,
                        String(this.$18)
                      );
                  this.$12 = h;
                  return o.abrupt("return", m);
                case 36:
                  throw new Error("stream_already_canceled");
                case 37:
                case "end":
                  return o.stop();
              }
          },
          null,
          this,
          [[2, 11]]
        );
      };
      e.$29 = function () {
        return (
          this.$8.flowStatus ===
            d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
              .Started ||
          this.$8.flowStatus ===
            d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted
        );
      };
      e.$25 = function (a, b, e) {
        var f;
        this.$11 &&
          a !==
            d("RequestStreamCloseReason").RequestStreamCloseReason
              .StreamError &&
          a !==
            d("RequestStreamCloseReason").RequestStreamCloseReason
              .RemoteTermination &&
          this.$11.close();
        c("gkx")("574") &&
          this.$19.rejectAll(c("err")("stream terminating: " + b));
        (f = this.$13) == null ? void 0 : f.stop();
        this.$11 = null;
        this.$10 = !0;
        this.$33(
          d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped
        ) &&
          this.$3.onFlowStatus(
            d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped
          );
        e &&
          !this.$9 &&
          this.$3.onTermination(
            "terminate stream because " + a + " with msg : " + b
          );
      };
      e.$33 = function (a) {
        var b = this.$8;
        this.$8 = d("RequestStreamState").getNextState(b, a);
        return b !== this.$8;
      };
      e.$27 = function () {
        this.$12--;
        this.$18++;
        this.$15.onRetry();
        return this.start(!0);
      };
      e.$34 = function (a) {
        var b = this;
        a = d("CompactSerializerPolyfill").deserialize(
          a,
          d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers")
            .deserializePayload
        );
        if (a.response) {
          var e = d(
              "DGWRequestStreamUtils"
            ).getInstrumentationDataFieldsFromPayload(a),
            f = e == null ? void 0 : e.auxId;
          e = e == null ? void 0 : e.dfTraceId;
          if (!this.$28()) {
            var g;
            (g = this.$6) == null
              ? void 0
              : g.logE2EEvent(
                  c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                  c("RequestStreamE2EClientLoggerEvent").FAILURE,
                  { reason: "response_received_after_close" },
                  f,
                  String(this.$18),
                  e
                );
            return;
          }
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                c("RequestStreamE2EClientLoggerEvent").RECEIVED,
                p(a.response),
                f,
                String(this.$18),
                e
              );
          g = a.response.delta;
          g.forEach(function (a) {
            if (a.data)
              b.$15.resetErrorAndRetryCount(),
                b.$8.flowStatus ===
                  d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                    .Started &&
                  b.$3.onData(new TextDecoder("utf-8").decode(a.data.bytes));
            else if (a.flow_status) {
              var c = a.flow_status;
              c ===
                d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                  .Started && b.$15.resetErrorAndRetryCount();
              b.$33(c) && b.$3.onFlowStatus(c);
            } else if (a.termination) {
              c =
                (c = a.termination.message) != null
                  ? c
                  : "unknown termination msg";
              b.$2 = null;
              b.shouldTerminateOrRetry(
                d("RequestStreamCloseReason").RequestStreamCloseReason
                  .RemoteTermination,
                c,
                a.termination.reason ===
                  d("RequestStreamCommonRequestStreamCommonTypes")
                    .TerminationReason.TryAgain,
                a.termination.retry_delay_ms != null
                  ? parseInt(a.termination.retry_delay_ms, 10)
                  : null
              );
            } else if (a.log) b.$3.onLog(a.log.message);
            else if (a.amend_ack) {
              c = a.amend_ack.amendment_id;
              if (c != null) {
                var e = a.amend_ack.accepted || !1;
                b.$19.resolve(c, e);
              }
            } else if (a.rewrite) {
              c = d("DGWRequestStreamUtils").transformContextWithRewriteDelta(
                b.$1,
                a.rewrite
              );
              a.rewrite.temporary === !0 ? (b.$2 = c) : (b.$1 = c);
            }
          });
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                c("RequestStreamE2EClientLoggerEvent").SENT,
                p(a.response),
                f,
                String(this.$18),
                e
              );
          a.response.ack_level ===
            d("RequestStreamCommonRequestStreamCommonTypes").AckLevel.Device &&
            a.response.response_id != null &&
            this.$35(a.response.response_id, f);
        } else {
          (g = this.$6) == null
            ? void 0
            : g.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "unexpected_payload_type" },
                null,
                String(this.$18)
              );
        }
      };
      e.$35 = function (a, b) {
        a = {
          ack: {
            response_id: a,
            ack: d("RequestStreamSingleChannelSingleChannelRequestStreamTypes")
              .Ack.Success,
          },
        };
        a = d("CompactSerializerPolyfill").serialize(
          a,
          d("RequestStreamSingleChannelSingleChannelRequestStreamSerializers")
            .serializePayload
        );
        if (this.$11 != null) {
          this.$11.send(a);
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                c("RequestStreamE2EClientLoggerEvent").SENT,
                {},
                b,
                String(this.$18)
              );
        } else {
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                b,
                String(this.$18)
              );
        }
      };
      e.$22 = function () {
        return this.$1.headers.method === "Falco";
      };
      e.$30 = function () {
        return new (c("DGWStreamHandler"))(
          this.$36.bind(this),
          this.$37.bind(this),
          this.$32.bind(this),
          this.$38.bind(this),
          this.$39.bind(this)
        );
      };
      e.$39 = function (a) {
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              c("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Has FinishedSendingData" },
              null,
              String(this.$18)
            );
        this.$25(
          d("RequestStreamCloseReason").RequestStreamCloseReason.ServerDataEnd,
          "Client receive OnServerHasFinishedSendingData and Server will not send more data",
          !0
        );
      };
      e.$36 = function (a) {
        (a = this.$6) == null
          ? void 0
          : a.logE2EEvent(
              c("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              c("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Close Connection" },
              null,
              String(this.$18)
            );
        this.$25(
          d("RequestStreamCloseReason").RequestStreamCloseReason
            .RemoteTermination,
          "Client receive OnClose and Server will not send more data",
          !0
        );
      };
      e.$37 = function (a) {
        try {
          this.$34(a);
        } catch (b) {
          (a = this.$6) == null
            ? void 0
            : a.logE2EEvent(
                c("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                c("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: b.message },
                null,
                String(this.$18)
              );
          this.shouldTerminateOrRetry(
            d("RequestStreamCloseReason").RequestStreamCloseReason.ClientError,
            b.message,
            !1
          );
        }
      };
      e.$32 = function (a) {
        var b = "",
          c = d("DGWStream").isRetryableError(a);
        b = "StreamError: Received " + a;
        this.shouldTerminateOrRetry(
          d("RequestStreamCloseReason").RequestStreamCloseReason.StreamError,
          b,
          c
        );
      };
      e.$38 = function (a, b) {
        this.shouldTerminateOrRetry(
          d("RequestStreamCloseReason").RequestStreamCloseReason.ServerDrain,
          b,
          !0
        );
      };
      e.$31 = function () {
        return c("RtiWebRequestStreamClient").overrideHeaders;
      };
      e.$23 = function () {
        var a = {};
        c("gkx")("1626") &&
          (a.pending_amendments_size = this.$19.getSize().toString());
        return a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "DGWAuth",
  ["$InternalEnum", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("$InternalEnum")({
      TEST: "0:0",
      FACEBOOK: "1:0",
      INTERNALFB: "2:0",
      ENTERPRISEFB: "7:0",
      RECRUITINGFB: "8:0",
      INSTAGRAM: "6:0",
      BULLETIN: "9:0",
      HORIZON_WEB: "12:0",
    });
    function a(a) {
      if (a === "TEST") return h.TEST;
      else if (a === "FACEBOOK") return h.FACEBOOK;
      else if (a === "INTERNALFB") return h.INTERNALFB;
      else if (a === "ENTERPRISEFB") return h.ENTERPRISEFB;
      else if (a === "RECRUITINGFB") return h.RECRUITINGFB;
      else if (a === "INSTAGRAM") return h.INSTAGRAM;
      else if (a === "BULLETIN") return h.BULLETIN;
      else if (a === "HORIZON_WEB") return h.HORIZON_WEB;
      else
        throw c("err")("failed to convert string (" + a + ") to DGWAuth Type");
    }
    function d(a) {
      if (a === h.FACEBOOK) return "FACEBOOK";
      else if (a === h.INTERNALFB) return "INTERNALFB";
      else if (a === h.ENTERPRISEFB) return "ENTERPRISEFB";
      else if (a === h.RECRUITINGFB) return "RECRUITINGFB";
      else if (a === h.INSTAGRAM) return "INSTAGRAM";
      else if (a === h.BULLETIN) return "BULLETIN";
      else if (a === h.HORIZON_WEB) return "HORIZON_WEB";
      else return "TEST";
    }
    g.DGWAuth = h;
    g.fromStringToDGWAuth = a;
    g.fromDGWAuthToString = d;
  },
  98
);
__d(
  "DgwClientFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1755537");
    b = d("FalcoLoggerInternal").create("dgw_client", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "DGWLoggingContext",
  ["$InternalEnum", "DgwClientFalcoEvent", "ODS", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = "dgw_client";
    var h = b("$InternalEnum")({
      STREAM_GROUP_COMPONENT: "WebStreamGroup",
      GROUPED_STREAM_COMPONENT: "GroupedWebStream",
      WEBSOCKET_TRANSPORT_COMPONENT: "WebSocketTransport",
      ACK_MANAGER_COMPONENT: "WebStreamAckManager",
      CODEC_COMPONENT: "WebCodec",
      RAW_CLIENT: "RAWDGWClient",
      PINGER: "DGWPinger",
    });
    function i(a) {
      switch (a) {
        case h.GROUPED_STREAM_COMPONENT:
        case h.ACK_MANAGER_COMPONENT:
          return !0;
        default:
          return !1;
      }
    }
    e = (function () {
      function a(a, b, c, d, e, f, g) {
        f === void 0 && (f = !1),
          g === void 0 && (g = !1),
          (this.$5 = "" + a),
          (this.$1 = b),
          (this.$4 = c),
          (this.$3 = d),
          (this.$6 = e),
          (this.$2 = f),
          (this.$7 = g);
      }
      a.bumpODSKey = function (a, b, c) {
        c === void 0 && (c = 1);
        if (!d("Random").coinflip(c)) return;
        a = a + "." + b;
        d("ODS").bumpEntityKey(3589, "dgw_web_client", a, c);
      };
      var b = a.prototype;
      b.logEvent = function (a, b, c, d) {
        d === void 0 && (d = !1), this.$2 || this.$8(a, b, null, c, d);
      };
      b.$8 = function (a, b, d, e, f) {
        var g = this;
        f === void 0 && (f = !1);
        if (f && !this.$7) return;
        ((i(a) && this.$1 != null) || (!i(a) && this.$6 != null)) &&
          c("DgwClientFalcoEvent").log(function () {
            return {
              event: b,
              logging_id: g.$1,
              dgw_version: g.$5,
              error: d,
              uuid: g.$3,
              dgw_component: a,
              extra_info: e,
              destination_tier: g.$4,
              sg_transport_id: g.$6,
            };
          });
      };
      b.logError = function (a, b, c, d, e) {
        e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e);
      };
      b.logWarn = function (a, b, c, d, e) {
        e === void 0 && (e = !1), this.$2 || this.$8(a, b, c, d, e);
      };
      return a;
    })();
    g.DGW_MODULE = a;
    g.DGWLoggingComponent = h;
    g.DGWLoggingContext = e;
  },
  98
);
__d(
  "DGWCppBridge",
  [],
  function (l, m, n, o, p, q) {
    var r = (function () {
      var l =
        typeof document !== "undefined" && document.currentScript
          ? document.currentScript.src
          : void 0;
      return function (m) {
        m = m || {};
        var m = typeof m !== "undefined" ? m : {},
          n = (function () {
            function m() {}
            function n(l, m) {
              return function () {
                l.apply(m, arguments);
              };
            }
            function l(m) {
              if (!(this instanceof l))
                throw new TypeError("Promises must be constructed via new");
              if (typeof m !== "function")
                throw new TypeError("not a function");
              this._state = 0;
              this._handled = !1;
              this._value = void 0;
              this._deferreds = [];
              t(m, this);
            }
            function o(m, n) {
              while (m._state === 3) m = m._value;
              if (m._state === 0) {
                m._deferreds.push(n);
                return;
              }
              m._handled = !0;
              l._immediateFn(function () {
                var l = m._state === 1 ? n.onFulfilled : n.onRejected;
                if (l === null) {
                  (m._state === 1 ? p : q)(n.promise, m._value);
                  return;
                }
                var o;
                try {
                  o = l(m._value);
                } catch (l) {
                  q(n.promise, l);
                  return;
                }
                p(n.promise, o);
              });
            }
            function p(m, o) {
              try {
                if (o === m)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                if (o && (typeof o === "object" || typeof o === "function")) {
                  var p = o.then;
                  if (o instanceof l) {
                    m._state = 3;
                    m._value = o;
                    r(m);
                    return;
                  } else if (typeof p === "function") {
                    t(n(p, o), m);
                    return;
                  }
                }
                m._state = 1;
                m._value = o;
                r(m);
              } catch (l) {
                q(m, l);
              }
            }
            function q(l, m) {
              (l._state = 2), (l._value = m), r(l);
            }
            function r(m) {
              m._state === 2 &&
                m._deferreds.length === 0 &&
                l._immediateFn(function () {
                  m._handled || l._unhandledRejectionFn(m._value);
                });
              for (var n = 0, p = m._deferreds.length; n < p; n++)
                o(m, m._deferreds[n]);
              m._deferreds = null;
            }
            function s(l, m, n) {
              (this.onFulfilled = typeof l === "function" ? l : null),
                (this.onRejected = typeof m === "function" ? m : null),
                (this.promise = n);
            }
            function t(l, m) {
              var n = !1;
              try {
                l(
                  function (l) {
                    if (n) return;
                    n = !0;
                    p(m, l);
                  },
                  function (l) {
                    if (n) return;
                    n = !0;
                    q(m, l);
                  }
                );
              } catch (l) {
                if (n) return;
                n = !0;
                q(m, l);
              }
            }
            l.prototype["catch"] = function (l) {
              return this.then(null, l);
            };
            l.prototype.then = function (l, n) {
              var p = new this.constructor(m);
              o(this, new s(l, n, p));
              return p;
            };
            l.all = function (m) {
              return new l(function (l, n) {
                if (!Array.isArray(m))
                  return n(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(m);
                if (o.length === 0) return l([]);
                var p = o.length;
                function q(m, r) {
                  try {
                    if (
                      r &&
                      (typeof r === "object" || typeof r === "function")
                    ) {
                      var s = r.then;
                      if (typeof s === "function") {
                        s.call(
                          r,
                          function (l) {
                            q(m, l);
                          },
                          n
                        );
                        return;
                      }
                    }
                    o[m] = r;
                    --p === 0 && l(o);
                  } catch (l) {
                    n(l);
                  }
                }
                for (var r = 0; r < o.length; r++) q(r, o[r]);
              });
            };
            l.resolve = function (m) {
              return m && typeof m === "object" && m.constructor === l
                ? m
                : new l(function (l) {
                    l(m);
                  });
            };
            l.reject = function (m) {
              return new l(function (l, n) {
                n(m);
              });
            };
            l.race = function (m) {
              return new l(function (n, o) {
                if (!Array.isArray(m))
                  return o(new TypeError("Promise.race accepts an array"));
                for (var p = 0, q = m.length; p < q; p++)
                  l.resolve(m[p]).then(n, o);
              });
            };
            l._immediateFn =
              (typeof setImmediate === "function" &&
                function (l) {
                  setImmediate(l);
                }) ||
              function (l) {
                setTimeout(l, 0);
              };
            l._unhandledRejectionFn = function (l) {
              typeof console !== "undefined" && console;
            };
            return l;
          })(),
          o,
          s;
        m.ready = new n(function (l, m) {
          (o = l), (s = m);
        });
        var t = {},
          u;
        for (u in m)
          Object.prototype.hasOwnProperty.call(m, u) && (t[u] = m[u]);
        var v = [];
        (function (l, m) {
          throw m;
        });
        var w = !0,
          x = !1,
          y = "";
        function z(l) {
          return m.locateFile ? m.locateFile(l, y) : y + l;
        }
        var A;
        (w || x) &&
          (x
            ? (y = self.location.href)
            : typeof document !== "undefined" &&
              document.currentScript &&
              (y = document.currentScript.src),
          l && (y = l),
          y.indexOf("blob:") !== 0
            ? (y = y.substr(0, y.lastIndexOf("/") + 1))
            : (y = ""),
          (function (l) {
            try {
              var m = new XMLHttpRequest();
              m.open("GET", l, !1);
              m.send(null);
              return m.responseText;
            } catch (n) {
              m = ga(l);
              if (m) return fa(m);
              throw n;
            }
          },
          x &&
            (A = function (l) {
              try {
                var m = new XMLHttpRequest();
                m.open("GET", l, !1);
                m.responseType = "arraybuffer";
                m.send(null);
                return new Uint8Array(m.response);
              } catch (n) {
                m = ga(l);
                if (m) return m;
                throw n;
              }
            }),
          function (l, m, n) {
            var o = new XMLHttpRequest();
            o.open("GET", l, !0);
            o.responseType = "arraybuffer";
            o.onload = function () {
              if (o.status == 200 || (o.status == 0 && o.response)) {
                m(o.response);
                return;
              }
              var p = ga(l);
              if (p) {
                m(p.buffer);
                return;
              }
              n();
            };
            o.onerror = n;
            o.send(null);
          }),
          function (l) {
            document.title = l;
          });
        m.print || emptyFunction.bind(console);
        var B = m.printErr || emptyFunction.bind(console);
        for (u in t)
          Object.prototype.hasOwnProperty.call(t, u) && (m[u] = t[u]);
        t = null;
        m.arguments && (v = m.arguments);
        m.thisProgram && m.thisProgram;
        m.quit && m.quit;
        var C;
        m.wasmBinary && (C = m.wasmBinary);
        m.noExitRuntime || !0;
        var D = {
          Memory: function (l) {
            this.buffer = new ArrayBuffer(l.initial * 65536);
          },
          Module: function (l) {},
          Instance: function (l, m) {
            this.exports = (function (l) {
              function m(l) {
                l.set = function (l, m) {
                  this[l] = m;
                };
                l.get = function (l) {
                  return this[l];
                };
                return l;
              }
              var n,
                o = new Uint8Array(123);
              for (var p = 25; p >= 0; --p)
                (o[48 + p] = 52 + p), (o[65 + p] = p), (o[97 + p] = 26 + p);
              o[43] = 62;
              o[47] = 63;
              function q(m, n, p) {
                var q,
                  r,
                  l = 0,
                  s = n,
                  t = p.length;
                n = n + ((t * 3) >> 2) - (p[t - 2] == "=") - (p[t - 1] == "=");
                for (; l < t; l += 4)
                  (q = o[p.charCodeAt(l + 1)]),
                    (r = o[p.charCodeAt(l + 2)]),
                    (m[s++] = (o[p.charCodeAt(l)] << 2) | (q >> 4)),
                    s < n && (m[s++] = (q << 4) | (r >> 2)),
                    s < n && (m[s++] = (r << 6) | o[p.charCodeAt(l + 3)]);
              }
              function r(l) {
                q(
                  n,
                  1024,
                  "U3Q5dHlwZV9pbmZvAAAAAOAEAAAABAAATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAACAUAABgEAAAQBAAATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAACAUAAEgEAAA8BAAATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAACAUAAHgEAAA8BAAATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UACAUAAKgEAACcBAAAAAAAAGwEAAABAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAAAAABQBQAAAQAAAAkAAAADAAAABAAAAAUAAAAKAAAACwAAAAwAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAACAUAACgFAABsBA=="
                ),
                  q(n, 1372, "gAkQ");
              }
              function s(l) {
                var o = l.a,
                  p = o.buffer;
                o.grow = xa;
                var q = new Int8Array(p),
                  s = new Int16Array(p),
                  t = new Int32Array(p),
                  u = new Uint8Array(p),
                  v = new Uint16Array(p),
                  w = new Uint32Array(p);
                new Float32Array(p);
                new Float64Array(p);
                var x = Math.imul;
                Math.fround;
                Math.abs;
                var y = Math.clz32;
                Math.min;
                Math.max;
                Math.floor;
                Math.ceil;
                Math.trunc;
                Math.sqrt;
                l.abort;
                NaN;
                Infinity;
                var z = l.b,
                  A = 1051008,
                  B;
                function C(o, p, l, r, m, n) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  n = n | 0;
                  var y = 0,
                    z = 0,
                    B;
                  y = (A - 80) | 0;
                  A = y;
                  t[(y + 72) >> 2] = o;
                  t[(y + 68) >> 2] = p;
                  t[(y + 64) >> 2] = l;
                  t[(y + 60) >> 2] = r;
                  t[(y + 56) >> 2] = m;
                  t[(y + 52) >> 2] = n;
                  a: {
                    if (
                      t[(y + 52) >> 2]
                        ? !t[(y + 56) >> 2] |
                          (!t[(y + 72) >> 2] |
                            !t[(y + 68) >> 2] |
                            (!t[(y + 64) >> 2] | !t[(y + 60) >> 2]))
                        : 1
                    ) {
                      t[(y + 76) >> 2] = 5;
                      break a;
                    }
                    t[t[(y + 64) >> 2] >> 2] = 0;
                    t[t[(y + 60) >> 2] >> 2] = 0;
                    p = t[(y + 68) >> 2];
                    l = t[(y + 56) >> 2];
                    r = t[(y + 52) >> 2];
                    o = (A + -64) | 0;
                    A = o;
                    t[(o + 56) >> 2] = t[(y + 72) >> 2];
                    t[(o + 52) >> 2] = p;
                    t[(o + 48) >> 2] = l;
                    t[(o + 44) >> 2] = r;
                    t[(o + 40) >> 2] = 0;
                    t[(o + 36) >> 2] = t[(o + 56) >> 2];
                    b: {
                      c: {
                        d: {
                          while (1) {
                            if (!t[(o + 52) >> 2]) break c;
                            t[(o + 32) >> 2] = t[(o + 36) >> 2];
                            q[(o + 31) | 0] = u[t[(o + 36) >> 2]];
                            t[(o + 52) >> 2] = t[(o + 52) >> 2] - 1;
                            t[(o + 36) >> 2] = t[(o + 36) >> 2] + 1;
                            if (
                              u[(o + 31) | 0] != 10
                                ? (u[(o + 31) | 0] == 2) |
                                  (u[(o + 31) | 0] == 4) |
                                  (u[(o + 31) | 0] == 9)
                                : 1
                            ) {
                              t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                              continue;
                            }
                            t[(o + 24) >> 2] = 1;
                            if (V(u[(o + 31) | 0]) & 1) {
                              (z = o),
                                (B = X(u[(o + 31) | 0]) & 1),
                                (q[(z + 23) | 0] = B);
                              t[(o + 16) >> 2] = q[(o + 23) | 0] & 1 ? 1 : 2;
                              if (w[(o + 52) >> 2] < w[(o + 16) >> 2]) {
                                t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                                t[t[(o + 44) >> 2] >> 2] =
                                  t[(o + 52) >> 2] + t[(o + 24) >> 2];
                                break b;
                              }
                              t[(o + 52) >> 2] =
                                t[(o + 52) >> 2] - t[(o + 16) >> 2];
                              t[(o + 24) >> 2] =
                                t[(o + 16) >> 2] + t[(o + 24) >> 2];
                              t[(o + 36) >> 2] =
                                t[(o + 16) >> 2] + t[(o + 36) >> 2];
                              if (
                                !(u[(o + 31) | 0] != 14
                                  ? u[(o + 31) | 0] != 8
                                  : 0)
                              ) {
                                t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                                continue;
                              }
                            }
                            if (w[(o + 52) >> 2] < 3) break d;
                            t[(o + 12) >> 2] = 0;
                            p = t[(o + 36) >> 2];
                            l = u[p | 0] | (u[(p + 1) | 0] << 8);
                            q[(o + 12) | 0] = l;
                            q[(o + 13) | 0] = l >>> 8;
                            q[(o + 14) | 0] = u[(p + 2) | 0];
                            t[(o + 52) >> 2] = t[(o + 52) >> 2] - 3;
                            t[(o + 24) >> 2] = t[(o + 24) >> 2] + 3;
                            t[(o + 36) >> 2] = t[(o + 36) >> 2] + 3;
                            if (w[(o + 12) >> 2] <= w[(o + 52) >> 2]) {
                              t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                              t[(o + 36) >> 2] =
                                t[(o + 12) >> 2] + t[(o + 36) >> 2];
                              t[(o + 52) >> 2] =
                                t[(o + 52) >> 2] - t[(o + 12) >> 2];
                              continue;
                            }
                            break;
                          }
                          t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                          t[t[(o + 44) >> 2] >> 2] =
                            t[(o + 52) >> 2] + t[(o + 24) >> 2];
                          break b;
                        }
                        t[t[(o + 48) >> 2] >> 2] = t[(o + 32) >> 2];
                        t[t[(o + 44) >> 2] >> 2] =
                          t[(o + 52) >> 2] + t[(o + 24) >> 2];
                        break b;
                      }
                      t[t[(o + 44) >> 2] >> 2] = t[(o + 52) >> 2];
                    }
                    t[(o + 60) >> 2] = t[(o + 40) >> 2];
                    A = (o - -64) | 0;
                    t[(y + 48) >> 2] = t[(o + 60) >> 2];
                    if (!t[(y + 48) >> 2]) {
                      t[(y + 76) >> 2] = 0;
                      break a;
                    }
                    (z = y),
                      (B = D(x(t[(y + 48) >> 2], 20))),
                      (t[(z + 44) >> 2] = B);
                    if (!t[(y + 44) >> 2]) {
                      t[(y + 76) >> 2] = 3;
                      break a;
                    }
                    t[(y + 40) >> 2] = t[(y + 44) >> 2];
                    t[(y + 36) >> 2] = t[(y + 72) >> 2];
                    t[(y + 32) >> 2] =
                      t[(y + 68) >> 2] - t[t[(y + 52) >> 2] >> 2];
                    t[(y + 28) >> 2] = 0;
                    while (1) {
                      if (w[(y + 28) >> 2] < w[(y + 48) >> 2]) {
                        if (w[(y + 32) >> 2] < 1) {
                          O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                          t[(y + 76) >> 2] = 1;
                          break a;
                        }
                        q[(y + 27) | 0] = u[t[(y + 36) >> 2]];
                        t[(y + 36) >> 2] = t[(y + 36) >> 2] + 1;
                        t[(y + 32) >> 2] = t[(y + 32) >> 2] - 1;
                        e: {
                          if (
                            !u[(y + 27) | 0] |
                            (u[(y + 27) | 0] == 1) |
                            ((u[(y + 27) | 0] == 2) | (u[(y + 27) | 0] == 3)) |
                            ((u[(y + 27) | 0] == 4) |
                              (u[(y + 27) | 0] == 9) |
                              (u[(y + 27) | 0] == 10))
                          )
                            break e;
                          if (V(u[(y + 27) | 0]) & 1) break e;
                          O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                          t[(y + 76) >> 2] = 6;
                          break a;
                        }
                        o = t[(y + 40) >> 2];
                        t[o >> 2] = (u[(y + 27) | 0] & 15) | (t[o >> 2] & -16);
                        f: {
                          if (
                            u[(y + 27) | 0] != 10
                              ? (u[(y + 27) | 0] == 2) |
                                (u[(y + 27) | 0] == 4) |
                                (u[(y + 27) | 0] == 9)
                              : 1
                          ) {
                            o = t[(y + 40) >> 2];
                            t[o >> 2] = t[o >> 2] & -268435441;
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          if (V(u[(y + 27) | 0]) & 1) {
                            o = (A - 48) | 0;
                            A = o;
                            t[(o + 40) >> 2] = t[(y + 40) >> 2];
                            t[(o + 36) >> 2] = y + 36;
                            t[(o + 32) >> 2] = y + 32;
                            g: {
                              if (!(V(t[t[(o + 40) >> 2] >> 2] & 15) & 1)) {
                                t[(o + 44) >> 2] = 1;
                                break g;
                              }
                              (z = o),
                                (B = X(t[t[(o + 40) >> 2] >> 2] & 15) & 1),
                                (q[(z + 31) | 0] = B);
                              t[(o + 24) >> 2] = q[(o + 31) | 0] & 1 ? 1 : 2;
                              if (w[t[(o + 32) >> 2] >> 2] < w[(o + 24) >> 2]) {
                                t[(o + 44) >> 2] = 1;
                                break g;
                              }
                              ba(
                                (t[(o + 40) >> 2] + 4) | 0,
                                t[t[(o + 36) >> 2] >> 2],
                                t[(o + 24) >> 2]
                              );
                              p = t[(o + 36) >> 2];
                              t[p >> 2] = t[(o + 24) >> 2] + t[p >> 2];
                              p = t[(o + 32) >> 2];
                              t[p >> 2] = t[p >> 2] - t[(o + 24) >> 2];
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 8) {
                                p = t[(o + 40) >> 2];
                                t[p >> 2] = t[p >> 2] & -268435441;
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 14) {
                                p = t[(o + 40) >> 2];
                                t[p >> 2] = t[p >> 2] & -268435441;
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if (w[t[(o + 32) >> 2] >> 2] < 3) {
                                t[(o + 44) >> 2] = 11;
                                break g;
                              }
                              t[(o + 20) >> 2] = 0;
                              p = t[t[(o + 36) >> 2] >> 2];
                              l = u[p | 0] | (u[(p + 1) | 0] << 8);
                              q[(o + 20) | 0] = l;
                              q[(o + 21) | 0] = l >>> 8;
                              q[(o + 22) | 0] = u[(p + 2) | 0];
                              p = t[(o + 36) >> 2];
                              t[p >> 2] = t[p >> 2] + 3;
                              p = t[(o + 32) >> 2];
                              t[p >> 2] = t[p >> 2] - 3;
                              p = t[(o + 40) >> 2];
                              t[p >> 2] =
                                (t[p >> 2] & -268435441) |
                                ((t[(o + 20) >> 2] & 16777215) << 4);
                              if (w[t[(o + 32) >> 2] >> 2] < w[(o + 20) >> 2]) {
                                t[(o + 44) >> 2] = 11;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 15) {
                                t[(t[(o + 40) >> 2] + 12) >> 2] =
                                  t[(o + 20) >> 2];
                                p = D(t[(o + 20) >> 2]);
                                t[(t[(o + 40) >> 2] + 8) >> 2] = p;
                                if (!t[(t[(o + 40) >> 2] + 8) >> 2]) {
                                  t[(o + 44) >> 2] = 3;
                                  break g;
                                }
                                ba(
                                  t[(t[(o + 40) >> 2] + 8) >> 2],
                                  t[t[(o + 36) >> 2] >> 2],
                                  t[(o + 20) >> 2]
                                );
                                p = t[(o + 36) >> 2];
                                t[p >> 2] = t[(o + 20) >> 2] + t[p >> 2];
                                p = t[(o + 32) >> 2];
                                t[p >> 2] = t[p >> 2] - t[(o + 20) >> 2];
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 5) {
                                t[(t[(o + 40) >> 2] + 12) >> 2] =
                                  t[(o + 20) >> 2];
                                p = D(t[(o + 20) >> 2]);
                                t[(t[(o + 40) >> 2] + 8) >> 2] = p;
                                if (!t[(t[(o + 40) >> 2] + 8) >> 2]) {
                                  t[(o + 44) >> 2] = 3;
                                  break g;
                                }
                                ba(
                                  t[(t[(o + 40) >> 2] + 8) >> 2],
                                  t[t[(o + 36) >> 2] >> 2],
                                  t[(o + 20) >> 2]
                                );
                                p = t[(o + 36) >> 2];
                                t[p >> 2] = t[(o + 20) >> 2] + t[p >> 2];
                                p = t[(o + 32) >> 2];
                                t[p >> 2] = t[p >> 2] - t[(o + 20) >> 2];
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              h: {
                                if (
                                  !((t[t[(o + 40) >> 2] >> 2] & 15) != 6
                                    ? (t[t[(o + 40) >> 2] >> 2] & 15) != 7
                                    : 0)
                                ) {
                                  (z = o),
                                    (B = Q(
                                      t[(o + 36) >> 2],
                                      t[(o + 32) >> 2],
                                      (o + 19) | 0,
                                      (o + 18) | 0
                                    )),
                                    (t[(z + 12) >> 2] = B);
                                  if (t[(o + 12) >> 2]) {
                                    t[(o + 44) >> 2] = t[(o + 12) >> 2];
                                    break g;
                                  }
                                  break h;
                                }
                                if (
                                  !((t[t[(o + 40) >> 2] >> 2] & 15) != 13
                                    ? (t[t[(o + 40) >> 2] >> 2] & 15) != 12
                                    : 0)
                                ) {
                                  l = t[(o + 32) >> 2];
                                  p = (A - 32) | 0;
                                  t[(p + 24) >> 2] = t[(o + 36) >> 2];
                                  t[(p + 20) >> 2] = l;
                                  t[(p + 16) >> 2] = o + 19;
                                  t[(p + 12) >> 2] = o + 16;
                                  s[(p + 10) >> 1] = 0;
                                  i: {
                                    if (w[t[(p + 20) >> 2] >> 2] < 2) {
                                      t[(p + 28) >> 2] = 1;
                                      break i;
                                    }
                                    l = t[t[(p + 24) >> 2] >> 2];
                                    l = u[l | 0] | (u[(l + 1) | 0] << 8);
                                    q[(p + 10) | 0] = l;
                                    q[(p + 11) | 0] = l >>> 8;
                                    l = t[(p + 24) >> 2];
                                    t[l >> 2] = t[l >> 2] + 2;
                                    l = t[(p + 20) >> 2];
                                    t[l >> 2] = t[l >> 2] - 2;
                                    q[t[(p + 16) >> 2]] =
                                      (v[(p + 10) >> 1] & 32768) == 32768;
                                    s[t[(p + 12) >> 2] >> 1] =
                                      v[(p + 10) >> 1] & 32767;
                                    t[(p + 28) >> 2] = 0;
                                  }
                                  t[(o + 12) >> 2] = t[(p + 28) >> 2];
                                  if (t[(o + 12) >> 2]) {
                                    t[(o + 44) >> 2] = t[(o + 12) >> 2];
                                    break g;
                                  }
                                }
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 12) {
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (s[(p + 8) >> 1] & 1) |
                                  (v[(o + 16) >> 1] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 7) {
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(p + 8) | 0] & 1) | (u[(o + 18) | 0] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 13) {
                                l = t[(o + 32) >> 2];
                                r = t[(o + 20) >> 2];
                                m = (t[(o + 40) >> 2] + 12) | 0;
                                n = t[(o + 40) >> 2];
                                p = (A - 32) | 0;
                                A = p;
                                t[(p + 24) >> 2] = t[(o + 36) >> 2];
                                t[(p + 20) >> 2] = l;
                                t[(p + 16) >> 2] = r;
                                t[(p + 12) >> 2] = m;
                                t[(p + 8) >> 2] = n + 16;
                                j: {
                                  if (w[(p + 16) >> 2] < 2) {
                                    t[(p + 28) >> 2] = 9;
                                    break j;
                                  }
                                  t[t[(p + 8) >> 2] >> 2] =
                                    t[(p + 16) >> 2] - 2;
                                  if (
                                    w[t[(p + 20) >> 2] >> 2] <
                                    w[t[(p + 8) >> 2] >> 2]
                                  ) {
                                    t[(p + 28) >> 2] = 1;
                                    break j;
                                  }
                                  l = D(t[t[(p + 8) >> 2] >> 2]);
                                  t[t[(p + 12) >> 2] >> 2] = l;
                                  if (!t[t[(p + 12) >> 2] >> 2]) {
                                    t[(p + 28) >> 2] = 3;
                                    break j;
                                  }
                                  ba(
                                    t[t[(p + 12) >> 2] >> 2],
                                    t[t[(p + 24) >> 2] >> 2],
                                    t[t[(p + 8) >> 2] >> 2]
                                  );
                                  l = t[(p + 24) >> 2];
                                  t[l >> 2] =
                                    t[t[(p + 8) >> 2] >> 2] + t[l >> 2];
                                  l = t[(p + 20) >> 2];
                                  t[l >> 2] =
                                    t[l >> 2] - t[t[(p + 8) >> 2] >> 2];
                                  t[(p + 28) >> 2] = 0;
                                }
                                A = (p + 32) | 0;
                                t[(o + 8) >> 2] = t[(p + 28) >> 2];
                                if (t[(o + 8) >> 2]) {
                                  t[(o + 44) >> 2] = t[(o + 8) >> 2];
                                  break g;
                                }
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (q[(o + 19) | 0] & 1) |
                                  (v[(p + 8) >> 1] & 65534);
                                p = t[(o + 40) >> 2];
                                s[(p + 8) >> 1] =
                                  (s[(p + 8) >> 1] & 1) |
                                  (v[(o + 16) >> 1] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              if ((t[t[(o + 40) >> 2] >> 2] & 15) == 6) {
                                (z = o),
                                  (B = M(
                                    t[(o + 36) >> 2],
                                    t[(o + 32) >> 2],
                                    t[(o + 20) >> 2],
                                    (t[(o + 40) >> 2] + 12) | 0,
                                    (t[(o + 40) >> 2] + 16) | 0
                                  )),
                                  (t[(z + 4) >> 2] = B);
                                if (t[(o + 4) >> 2]) {
                                  t[(o + 44) >> 2] = t[(o + 4) >> 2];
                                  break g;
                                }
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(o + 19) | 0] & 1) |
                                  (u[(p + 8) | 0] & 254);
                                p = t[(o + 40) >> 2];
                                q[(p + 8) | 0] =
                                  (q[(p + 8) | 0] & 1) | (u[(o + 18) | 0] << 1);
                                t[(o + 44) >> 2] = 0;
                                break g;
                              }
                              t[(o + 44) >> 2] = 1;
                            }
                            A = (o + 48) | 0;
                            t[(y + 20) >> 2] = t[(o + 44) >> 2];
                            if (!t[(y + 20) >> 2]) {
                              t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                              break f;
                            }
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = t[(y + 20) >> 2];
                            break a;
                          }
                          t[(y + 16) >> 2] = 0;
                          if (w[(y + 32) >> 2] < 3) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = 1;
                            break a;
                          }
                          o = t[(y + 36) >> 2];
                          p = u[o | 0] | (u[(o + 1) | 0] << 8);
                          q[(y + 16) | 0] = p;
                          q[(y + 17) | 0] = p >>> 8;
                          q[(y + 18) | 0] = u[(o + 2) | 0];
                          t[(y + 36) >> 2] = t[(y + 36) >> 2] + 3;
                          t[(y + 32) >> 2] = t[(y + 32) >> 2] - 3;
                          if (
                            !((t[(y + 16) >> 2] == 1) | (u[(y + 27) | 0] != 1))
                          ) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = 7;
                            break a;
                          }
                          o = t[(y + 40) >> 2];
                          t[o >> 2] =
                            (t[o >> 2] & -268435441) |
                            ((t[(y + 16) >> 2] & 16777215) << 4);
                          if (u[(y + 27) | 0] == 3) {
                            if (t[(y + 16) >> 2] != 1) {
                              O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                              t[(y + 76) >> 2] = 10;
                              break a;
                            }
                            q[(y + 15) | 0] = 0;
                            if (w[(y + 32) >> 2] < 1) {
                              J(t[(y + 44) >> 2]);
                              t[(y + 76) >> 2] = 1;
                              break a;
                            }
                            q[(y + 15) | 0] = u[t[(y + 36) >> 2]];
                            t[(y + 36) >> 2] = t[(y + 36) >> 2] + 1;
                            t[(y + 32) >> 2] = t[(y + 32) >> 2] - 1;
                            k: {
                              if (u[(y + 15) | 0] <= 4) {
                                q[(t[(y + 40) >> 2] + 4) | 0] = u[(y + 15) | 0];
                                break k;
                              }
                              q[(t[(y + 40) >> 2] + 4) | 0] = 4;
                            }
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          (z = y),
                            (B = Q(
                              (y + 36) | 0,
                              (y + 32) | 0,
                              (y + 14) | 0,
                              (y + 13) | 0
                            )),
                            (t[(z + 8) >> 2] = B);
                          if (t[(y + 8) >> 2]) {
                            O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                            t[(y + 76) >> 2] = t[(y + 8) >> 2];
                            break a;
                          }
                          if (u[(y + 27) | 0] == 1) {
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(o + 4) | 0] & 1) | (u[(y + 13) | 0] << 1);
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                            break f;
                          }
                          if (!u[(y + 27) | 0]) {
                            (z = y),
                              (B = M(
                                (y + 36) | 0,
                                (y + 32) | 0,
                                t[(y + 16) >> 2],
                                (t[(y + 40) >> 2] + 8) | 0,
                                (t[(y + 40) >> 2] + 12) | 0
                              )),
                              (t[(z + 4) >> 2] = B);
                            if (t[(y + 4) >> 2]) {
                              O(t[(y + 44) >> 2], t[(y + 28) >> 2]);
                              t[(y + 76) >> 2] = t[(y + 4) >> 2];
                              break a;
                            }
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(y + 14) | 0] & 1) | (u[(o + 4) | 0] & 254);
                            o = t[(y + 40) >> 2];
                            q[(o + 4) | 0] =
                              (q[(o + 4) | 0] & 1) | (u[(y + 13) | 0] << 1);
                            t[(y + 40) >> 2] = t[(y + 40) >> 2] + 20;
                          }
                        }
                        t[(y + 28) >> 2] = t[(y + 28) >> 2] + 1;
                        continue;
                      }
                      break;
                    }
                    if (t[(y + 32) >> 2]) {
                      O(t[(y + 44) >> 2], t[(y + 48) >> 2]);
                      t[(y + 76) >> 2] = 1;
                      break a;
                    }
                    t[t[(y + 64) >> 2] >> 2] = t[(y + 44) >> 2];
                    t[t[(y + 60) >> 2] >> 2] = t[(y + 48) >> 2];
                    t[(y + 76) >> 2] = 0;
                  }
                  A = (y + 80) | 0;
                  return t[(y + 76) >> 2];
                }
                function D(o) {
                  var q = 0,
                    l = 0,
                    r = 0,
                    m = 0,
                    n = 0,
                    s = 0,
                    u = 0,
                    v,
                    w = 0,
                    x,
                    p;
                  w = 8;
                  a: {
                    b: {
                      if (o >>> 0 > 4294967239) break b;
                      while (1) {
                        w = w >>> 0 > 8 ? w : 8;
                        l = t[603];
                        n = l;
                        m = t[602];
                        u = m;
                        o = o >>> 0 > 8 ? (o + 3) & -4 : 8;
                        c: {
                          if (o >>> 0 <= 127) {
                            s = (((o >>> 3) | 0) - 1) | 0;
                            break c;
                          }
                          r = y(o);
                          s =
                            (((((o >>> (29 - r)) ^ 4) - (r << 2)) | 0) + 110) |
                            0;
                          if (o >>> 0 <= 4095) break c;
                          r =
                            (((((o >>> (30 - r)) ^ 2) - (r << 1)) | 0) + 71) |
                            0;
                          s = r >>> 0 < 63 ? r : 63;
                        }
                        q = s;
                        r = q & 31;
                        (q & 63) >>> 0 >= 32
                          ? ((q = 0), (l = (l >>> r) | 0))
                          : ((q = (l >>> r) | 0),
                            (l =
                              ((((1 << r) - 1) & l) << (32 - r)) | (u >>> r)));
                        r = q;
                        if (l | q) {
                          while (1) {
                            n = l;
                            q = r;
                            d: {
                              if (q | l) {
                                m = (q - 1) | 0;
                                v = (m + 1) | 0;
                                u = m;
                                m = (l - 1) | 0;
                                u = (m | 0) != -1 ? v : u;
                                m = (y(l ^ m) + 32) | 0;
                                l = y(q ^ u);
                                l = (l | 0) == 32 ? m : l;
                                q = (63 - l) | 0;
                                (0 - (l >>> 0 > 63)) | 0;
                                break d;
                              }
                              q = 64;
                            }
                            m = q;
                            q = m;
                            l = q & 31;
                            (q & 63) >>> 0 >= 32
                              ? ((q = 0), (u = (r >>> l) | 0))
                              : ((q = (r >>> l) | 0),
                                (u =
                                  ((((1 << l) - 1) & r) << (32 - l)) |
                                  (n >>> l)));
                            r = q;
                            s = (m + s) | 0;
                            n = s << 4;
                            q = t[(n + 1384) >> 2];
                            m = (n + 1376) | 0;
                            e: {
                              if ((q | 0) != (m | 0)) {
                                l = I(q, w, o);
                                if (l) break b;
                                l = t[(q + 4) >> 2];
                                t[(l + 8) >> 2] = t[(q + 8) >> 2];
                                t[(t[(q + 8) >> 2] + 4) >> 2] = l;
                                t[(q + 8) >> 2] = m;
                                l = (n + 1380) | 0;
                                t[(q + 4) >> 2] = t[l >> 2];
                                t[l >> 2] = q;
                                t[(t[(q + 4) >> 2] + 8) >> 2] = q;
                                s = (s + 1) | 0;
                                l = ((r & 1) << 31) | (u >>> 1);
                                r = (r >>> 1) | 0;
                                break e;
                              }
                              x = t[603];
                              q = s;
                              v = q & 63;
                              l = v;
                              n = l & 31;
                              l >>> 0 >= 32
                                ? ((l = 0), (m = (-1 >>> n) | 0))
                                : ((l = (-1 >>> n) | 0),
                                  (m =
                                    (((1 << n) - 1) << (32 - n)) | (-1 >>> n)));
                              m = m & -2;
                              n = v & 31;
                              v >>> 0 >= 32
                                ? ((l = m << n), (v = 0))
                                : ((l =
                                    (((1 << n) - 1) & (m >>> (32 - n))) |
                                    (l << n)),
                                  (v = m << n));
                              n = l;
                              m = (0 - q) & 63;
                              l = m;
                              q = l & 31;
                              l >>> 0 >= 32
                                ? ((l = -1 << q), (q = 0))
                                : ((l =
                                    (((1 << q) - 1) & (-1 >>> (32 - q))) |
                                    (-1 << q)),
                                  (q = -1 << q));
                              p = q & -2;
                              q = m & 31;
                              m >>> 0 >= 32
                                ? ((m = 0), (q = (l >>> q) | 0))
                                : ((m = (l >>> q) | 0),
                                  (q =
                                    ((((1 << q) - 1) & l) << (32 - q)) |
                                    (p >>> q)));
                              l = q | v;
                              B = n | m;
                              t[602] = t[602] & l;
                              t[603] = B & x;
                              l = u ^ 1;
                            }
                            if (l | r) continue;
                            break;
                          }
                          m = t[602];
                          n = t[603];
                        }
                        f: {
                          if (n | m) {
                            r = y(n);
                            r =
                              (63 - ((r | 0) == 32 ? (y(m) + 32) | 0 : r)) << 4;
                            q = (r + 1376) | 0;
                            r = t[(r + 1384) >> 2];
                            g: {
                              if (!n & (m >>> 0 < 1073741824)) break g;
                              s = 98;
                              if ((q | 0) == (r | 0)) break g;
                              while (1) {
                                l = I(r, w, o);
                                if (l) break b;
                                r = t[(r + 8) >> 2];
                                if (!s) break g;
                                s = (s - 1) | 0;
                                if ((q | 0) != (r | 0)) continue;
                                break;
                              }
                            }
                            if (G((o + 48) | 0)) break f;
                            if (!r | ((q | 0) == (r | 0))) break a;
                            while (1) {
                              l = I(r, w, o);
                              if (l) break b;
                              r = t[(r + 8) >> 2];
                              if ((q | 0) != (r | 0)) continue;
                              break;
                            }
                            break a;
                          }
                          if (!G((o + 48) | 0)) break a;
                        }
                        l = 0;
                        if (o >>> 0 > 4294967239) break b;
                        r = w;
                        q = 0;
                        while (1) {
                          s = q;
                          if (r) {
                            r = (r - 1) & r;
                            q = (q + 1) | 0;
                            continue;
                          }
                          break;
                        }
                        if (s >>> 0 <= 1) continue;
                        break;
                      }
                    }
                    return l;
                  }
                  return 0;
                }
                function E(o, p, l, r, m, n, x) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  n = n | 0;
                  x = x | 0;
                  var y = 0,
                    z = 0;
                  y = (A - 32) | 0;
                  A = y;
                  s[(y + 26) >> 1] = o;
                  t[(y + 20) >> 2] = p;
                  t[(y + 16) >> 2] = l;
                  q[(y + 15) | 0] = r;
                  s[(y + 12) >> 1] = m;
                  t[(y + 8) >> 2] = n;
                  t[(y + 4) >> 2] = x;
                  a: {
                    if (
                      !(!(q[(y + 15) | 0] & 1) | (v[(y + 12) >> 1] <= 32767))
                    ) {
                      t[(y + 28) >> 2] = 4;
                      break a;
                    }
                    p = t[(y + 20) >> 2];
                    l = t[(y + 16) >> 2];
                    r = t[(y + 8) >> 2];
                    m = t[(y + 4) >> 2];
                    n = q[(y + 15) | 0] & 1;
                    o = (A + -64) | 0;
                    A = o;
                    t[(o + 56) >> 2] = y + 26;
                    t[(o + 52) >> 2] = p;
                    t[(o + 48) >> 2] = l;
                    t[(o + 44) >> 2] = r;
                    t[(o + 40) >> 2] = m;
                    q[(o + 39) | 0] = 2;
                    q[(o + 38) | 0] = 13;
                    t[(o + 32) >> 2] = y + 12;
                    q[(o + 31) | 0] = n;
                    q[(o + 30) | 0] = 2;
                    b: {
                      c: {
                        if (
                          !(
                            !t[(o + 52) >> 2] |
                            (!t[(o + 44) >> 2] | !t[(o + 40) >> 2])
                          ) &&
                          w[(o + 48) >> 2] <= 16777215
                        )
                          break c;
                        t[(o + 60) >> 2] = 5;
                        break b;
                      }
                      t[(o + 24) >> 2] =
                        t[(o + 48) >> 2] +
                        ((u[(o + 39) | 0] + ((u[(o + 30) | 0] + 4) | 0)) | 0);
                      (z = o),
                        (x = D(t[(o + 24) >> 2])),
                        (t[(z + 20) >> 2] = x);
                      if (!t[(o + 20) >> 2]) {
                        t[(o + 60) >> 2] = 3;
                        break b;
                      }
                      t[(o + 16) >> 2] = t[(o + 20) >> 2];
                      q[t[(o + 16) >> 2]] = u[(o + 38) | 0];
                      t[(o + 16) >> 2] = t[(o + 16) >> 2] + 1;
                      ba(t[(o + 16) >> 2], t[(o + 56) >> 2], u[(o + 30) | 0]);
                      t[(o + 16) >> 2] = u[(o + 30) | 0] + t[(o + 16) >> 2];
                      t[(o + 12) >> 2] = u[(o + 39) | 0] + t[(o + 48) >> 2];
                      if (w[(o + 12) >> 2] < w[(o + 48) >> 2]) {
                        J(t[(o + 20) >> 2]);
                        t[(o + 60) >> 2] = 9;
                        break b;
                      }
                      p = t[(o + 16) >> 2];
                      l = u[(o + 12) | 0] | (u[(o + 13) | 0] << 8);
                      q[p | 0] = l;
                      q[(p + 1) | 0] = l >>> 8;
                      q[(p + 2) | 0] = u[(o + 14) | 0];
                      t[(o + 16) >> 2] = t[(o + 16) >> 2] + 3;
                      if (q[(o + 31) | 0] & 1)
                        d: {
                          if (u[(o + 38) | 0] == 6) {
                            p = t[(o + 32) >> 2];
                            q[p | 0] = u[p | 0] | 128;
                            break d;
                          }
                          e: {
                            if (u[(o + 38) | 0] == 13) {
                              p = t[(o + 32) >> 2];
                              s[p >> 1] = v[p >> 1] | 32768;
                              break e;
                            }
                            J(t[(o + 20) >> 2]);
                            t[(o + 60) >> 2] = 1;
                            break b;
                          }
                        }
                      ba(t[(o + 16) >> 2], t[(o + 32) >> 2], u[(o + 39) | 0]);
                      t[(o + 16) >> 2] = u[(o + 39) | 0] + t[(o + 16) >> 2];
                      ba(t[(o + 16) >> 2], t[(o + 52) >> 2], t[(o + 48) >> 2]);
                      t[t[(o + 44) >> 2] >> 2] = t[(o + 20) >> 2];
                      t[t[(o + 40) >> 2] >> 2] = t[(o + 24) >> 2];
                      t[(o + 60) >> 2] = 0;
                    }
                    A = (o - -64) | 0;
                    t[(y + 28) >> 2] = t[(o + 60) >> 2];
                  }
                  A = (y + 32) | 0;
                  return t[(y + 28) >> 2];
                }
                function F(o, p, l, r, m) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  m = m | 0;
                  var n = 0,
                    v = 0;
                  n = (A - 32) | 0;
                  A = n;
                  s[(n + 30) >> 1] = o;
                  t[(n + 24) >> 2] = p;
                  t[(n + 20) >> 2] = l;
                  t[(n + 16) >> 2] = r;
                  t[(n + 12) >> 2] = m;
                  p = t[(n + 24) >> 2];
                  l = t[(n + 20) >> 2];
                  r = t[(n + 16) >> 2];
                  m = t[(n + 12) >> 2];
                  o = (A - 48) | 0;
                  A = o;
                  t[(o + 40) >> 2] = n + 30;
                  t[(o + 36) >> 2] = p;
                  t[(o + 32) >> 2] = l;
                  t[(o + 28) >> 2] = r;
                  t[(o + 24) >> 2] = m;
                  q[(o + 23) | 0] = 2;
                  q[(o + 22) | 0] = 15;
                  a: {
                    if (!(t[(o + 24) >> 2] ? t[(o + 28) >> 2] : 0)) {
                      t[(o + 44) >> 2] = 5;
                      break a;
                    }
                    t[t[(o + 28) >> 2] >> 2] = 0;
                    t[t[(o + 24) >> 2] >> 2] = 0;
                    if (
                      !(w[(o + 32) >> 2] <= 16777215 ? t[(o + 36) >> 2] : 0)
                    ) {
                      t[(o + 44) >> 2] = 5;
                      break a;
                    }
                    t[(o + 16) >> 2] =
                      t[(o + 32) >> 2] + ((u[(o + 23) | 0] + 4) | 0);
                    (v = o), (r = D(t[(o + 16) >> 2])), (t[(v + 12) >> 2] = r);
                    if (!t[(o + 12) >> 2]) {
                      t[(o + 44) >> 2] = 3;
                      break a;
                    }
                    t[(o + 8) >> 2] = t[(o + 12) >> 2];
                    q[t[(o + 8) >> 2]] = u[(o + 22) | 0];
                    t[(o + 8) >> 2] = t[(o + 8) >> 2] + 1;
                    ba(t[(o + 8) >> 2], t[(o + 40) >> 2], u[(o + 23) | 0]);
                    t[(o + 8) >> 2] = u[(o + 23) | 0] + t[(o + 8) >> 2];
                    p = t[(o + 8) >> 2];
                    l = u[(o + 32) | 0] | (u[(o + 33) | 0] << 8);
                    q[p | 0] = l;
                    q[(p + 1) | 0] = l >>> 8;
                    q[(p + 2) | 0] = u[(o + 34) | 0];
                    t[(o + 8) >> 2] = t[(o + 8) >> 2] + 3;
                    ba(t[(o + 8) >> 2], t[(o + 36) >> 2], t[(o + 32) >> 2]);
                    t[(o + 8) >> 2] = t[(o + 32) >> 2] + t[(o + 8) >> 2];
                    t[t[(o + 28) >> 2] >> 2] = t[(o + 12) >> 2];
                    t[t[(o + 24) >> 2] >> 2] = t[(o + 16) >> 2];
                    t[(o + 44) >> 2] = 0;
                  }
                  A = (o + 48) | 0;
                  A = (n + 32) | 0;
                  return t[(o + 44) >> 2];
                }
                function G(o) {
                  var p = 0,
                    l,
                    r = 0,
                    m = 0,
                    n,
                    s = 0;
                  r = t[343];
                  l = (o + 3) & -4;
                  p = (r + l) | 0;
                  a: {
                    b: {
                      if (p >>> 0 <= r >>> 0 ? l : 0) break b;
                      if (p >>> 0 > (wa() << 16) >>> 0 && !(z(p | 0) | 0))
                        break b;
                      t[343] = p;
                      break a;
                    }
                    t[604] = 48;
                    r = -1;
                  }
                  if ((r | 0) != -1) {
                    l = (o + r) | 0;
                    p = (l - 16) | 0;
                    t[(p + 12) >> 2] = 16;
                    t[p >> 2] = 16;
                    o = t[600];
                    o ? (s = t[(o + 8) >> 2]) : (s = 0);
                    c: {
                      d: {
                        if ((s | 0) == (r | 0)) {
                          m = (r - (t[(r - 4) >> 2] & -2)) | 0;
                          n = t[(m - 4) >> 2];
                          t[(o + 8) >> 2] = l;
                          o = (m - (n & -2)) | 0;
                          l = -16;
                          if (!(q[(((o + t[o >> 2]) | 0) - 4) | 0] & 1))
                            break d;
                          l = t[(o + 4) >> 2];
                          t[(l + 8) >> 2] = t[(o + 8) >> 2];
                          t[(t[(o + 8) >> 2] + 4) >> 2] = l;
                          p = (p - o) | 0;
                          t[o >> 2] = p;
                          break c;
                        }
                        t[(r + 12) >> 2] = 16;
                        t[r >> 2] = 16;
                        t[(r + 8) >> 2] = l;
                        t[(r + 4) >> 2] = o;
                        t[600] = r;
                        l = 16;
                      }
                      o = (r + l) | 0;
                      p = (p - o) | 0;
                      t[o >> 2] = p;
                    }
                    t[((((p & -4) + o) | 0) - 4) >> 2] = p | 1;
                    s = o;
                    m = (t[o >> 2] - 8) | 0;
                    e: {
                      if (m >>> 0 <= 127) {
                        p = (((m >>> 3) | 0) - 1) | 0;
                        break e;
                      }
                      n = y(m);
                      p = (((((m >>> (29 - n)) ^ 4) - (n << 2)) | 0) + 110) | 0;
                      if (m >>> 0 <= 4095) break e;
                      p = (((((m >>> (30 - n)) ^ 2) - (n << 1)) | 0) + 71) | 0;
                      p = p >>> 0 < 63 ? p : 63;
                    }
                    l = p << 4;
                    t[(s + 4) >> 2] = l + 1376;
                    l = (l + 1384) | 0;
                    t[(o + 8) >> 2] = t[l >> 2];
                    t[l >> 2] = o;
                    t[(t[(o + 8) >> 2] + 4) >> 2] = o;
                    l = t[603];
                    o = p & 31;
                    (p & 63) >>> 0 >= 32
                      ? ((p = 1 << o), (o = 0))
                      : ((p = ((1 << o) - 1) & (1 >>> (32 - o))), (o = 1 << o));
                    t[602] = o | t[602];
                    t[603] = p | l;
                  }
                  return (r | 0) != -1;
                }
                function la(o, p, l, r) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  r = r | 0;
                  var m = 0,
                    n = 0;
                  m = (A - 16) | 0;
                  A = m;
                  s[(m + 10) >> 1] = o;
                  s[(m + 8) >> 1] = p;
                  t[(m + 4) >> 2] = l;
                  t[m >> 2] = r;
                  a: {
                    if (v[(m + 8) >> 1] > 32767) {
                      t[(m + 12) >> 2] = 4;
                      break a;
                    }
                    p = t[(m + 4) >> 2];
                    l = t[m >> 2];
                    o = (A - 48) | 0;
                    A = o;
                    t[(o + 40) >> 2] = m + 10;
                    t[(o + 36) >> 2] = p;
                    t[(o + 32) >> 2] = l;
                    q[(o + 31) | 0] = 2;
                    q[(o + 30) | 0] = 12;
                    t[(o + 24) >> 2] = m + 8;
                    q[(o + 23) | 0] = 2;
                    b: {
                      if (!(t[(o + 32) >> 2] ? t[(o + 36) >> 2] : 0)) {
                        t[(o + 44) >> 2] = 5;
                        break b;
                      }
                      t[(o + 16) >> 2] =
                        u[(o + 31) | 0] + ((u[(o + 23) | 0] + 4) | 0);
                      (n = o),
                        (r = D(t[(o + 16) >> 2])),
                        (t[(n + 12) >> 2] = r);
                      if (!t[(o + 12) >> 2]) {
                        t[(o + 44) >> 2] = 3;
                        break b;
                      }
                      t[(o + 8) >> 2] = t[(o + 12) >> 2];
                      q[t[(o + 8) >> 2]] = u[(o + 30) | 0];
                      t[(o + 8) >> 2] = t[(o + 8) >> 2] + 1;
                      ba(t[(o + 8) >> 2], t[(o + 40) >> 2], u[(o + 23) | 0]);
                      t[(o + 8) >> 2] = u[(o + 23) | 0] + t[(o + 8) >> 2];
                      t[(o + 4) >> 2] = u[(o + 31) | 0];
                      p = t[(o + 8) >> 2];
                      l = u[(o + 4) | 0] | (u[(o + 5) | 0] << 8);
                      q[p | 0] = l;
                      q[(p + 1) | 0] = l >>> 8;
                      q[(p + 2) | 0] = u[(o + 6) | 0];
                      t[(o + 8) >> 2] = t[(o + 8) >> 2] + 3;
                      ba(t[(o + 8) >> 2], t[(o + 24) >> 2], u[(o + 31) | 0]);
                      t[t[(o + 32) >> 2] >> 2] = t[(o + 16) >> 2];
                      t[t[(o + 36) >> 2] >> 2] = t[(o + 12) >> 2];
                      t[(o + 44) >> 2] = 0;
                    }
                    A = (o + 48) | 0;
                    t[(m + 12) >> 2] = t[(o + 44) >> 2];
                  }
                  A = (m + 16) | 0;
                  return t[(m + 12) >> 2];
                }
                function H(o, p, l) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  var q = 0,
                    m = 0,
                    n = 0,
                    r = 0,
                    s = 0;
                  n = (A + -64) | 0;
                  A = n;
                  m = 1;
                  a: {
                    if (R(o, p, 0)) break a;
                    m = 0;
                    if (!p) break a;
                    q = (A + -64) | 0;
                    A = q;
                    m = t[p >> 2];
                    r = t[(m - 4) >> 2];
                    s = t[(m - 8) >> 2];
                    t[(q + 20) >> 2] = 0;
                    t[(q + 16) >> 2] = 1084;
                    t[(q + 12) >> 2] = p;
                    t[(q + 8) >> 2] = 1132;
                    m = 0;
                    ca((q + 24) | 0, 39);
                    p = (p + s) | 0;
                    b: {
                      if (R(r, 1132, 0)) {
                        t[(q + 56) >> 2] = 1;
                        ka[t[(t[r >> 2] + 20) >> 2]](
                          r,
                          (q + 8) | 0,
                          p,
                          p,
                          1,
                          0
                        );
                        m = t[(q + 32) >> 2] == 1 ? p : 0;
                        break b;
                      }
                      ka[t[(t[r >> 2] + 24) >> 2]](r, (q + 8) | 0, p, 1, 0);
                      c: switch (t[(q + 44) >> 2]) {
                        case 0:
                          m =
                            t[(q + 48) >> 2] == 1
                              ? t[(q + 36) >> 2] == 1
                                ? t[(q + 40) >> 2] == 1
                                  ? t[(q + 28) >> 2]
                                  : 0
                                : 0
                              : 0;
                          break b;
                        case 1:
                          break c;
                        default:
                          break b;
                      }
                      if (
                        t[(q + 48) >> 2] |
                        (t[(q + 36) >> 2] != 1) |
                        (t[(q + 40) >> 2] != 1)
                          ? t[(q + 32) >> 2] != 1
                          : 0
                      )
                        break b;
                      m = t[(q + 24) >> 2];
                    }
                    A = (q - -64) | 0;
                    p = m;
                    m = 0;
                    if (!p) break a;
                    ca((n + 8) | 4, 52);
                    t[(n + 56) >> 2] = 1;
                    t[(n + 20) >> 2] = -1;
                    t[(n + 16) >> 2] = o;
                    t[(n + 8) >> 2] = p;
                    ka[t[(t[p >> 2] + 28) >> 2]](p, (n + 8) | 0, t[l >> 2], 1);
                    o = t[(n + 32) >> 2];
                    (o | 0) == 1 && (t[l >> 2] = t[(n + 24) >> 2]);
                    m = (o | 0) == 1;
                  }
                  o = m;
                  A = (n - -64) | 0;
                  return o | 0;
                }
                function I(o, p, l) {
                  var q = 0,
                    m,
                    n = 0,
                    r = 0;
                  q = (o + 4) | 0;
                  m = (((q + p) | 0) - 1) & (0 - p);
                  p = t[o >> 2];
                  if ((m + l) >>> 0 <= (((p + o) | 0) - 4) >>> 0) {
                    n = t[(o + 4) >> 2];
                    t[(n + 8) >> 2] = t[(o + 8) >> 2];
                    t[(t[(o + 8) >> 2] + 4) >> 2] = n;
                    (q | 0) != (m | 0) &&
                      ((m = (m - q) | 0),
                      (n = (o - (t[(o - 4) >> 2] & -2)) | 0),
                      (q = (m + t[n >> 2]) | 0),
                      (t[n >> 2] = q),
                      (t[(((n + (q & -4)) | 0) - 4) >> 2] = q),
                      (o = (o + m) | 0),
                      (p = (p - m) | 0),
                      (t[o >> 2] = p));
                    a: {
                      if ((l + 24) >>> 0 <= p >>> 0) {
                        q = (((o + l) | 0) + 8) | 0;
                        p = (((p - l) | 0) - 8) | 0;
                        t[q >> 2] = p;
                        t[(((q + (p & -4)) | 0) - 4) >> 2] = p | 1;
                        r = q;
                        n = (t[q >> 2] - 8) | 0;
                        b: {
                          if (n >>> 0 <= 127) {
                            m = (((n >>> 3) | 0) - 1) | 0;
                            break b;
                          }
                          p = y(n);
                          m =
                            (((((n >>> (29 - p)) ^ 4) - (p << 2)) | 0) + 110) |
                            0;
                          if (n >>> 0 <= 4095) break b;
                          p =
                            (((((n >>> (30 - p)) ^ 2) - (p << 1)) | 0) + 71) |
                            0;
                          m = p >>> 0 < 63 ? p : 63;
                        }
                        p = m;
                        m = p << 4;
                        t[(r + 4) >> 2] = m + 1376;
                        m = (m + 1384) | 0;
                        t[(q + 8) >> 2] = t[m >> 2];
                        t[m >> 2] = q;
                        t[(t[(q + 8) >> 2] + 4) >> 2] = q;
                        m = t[603];
                        q = p & 31;
                        (p & 63) >>> 0 >= 32
                          ? ((p = 1 << q), (r = 0))
                          : ((p = ((1 << q) - 1) & (1 >>> (32 - q))),
                            (r = 1 << q));
                        t[602] = r | t[602];
                        t[603] = p | m;
                        p = (l + 8) | 0;
                        t[o >> 2] = p;
                        t[((((p & -4) + o) | 0) - 4) >> 2] = p;
                        break a;
                      }
                      t[(((o + p) | 0) - 4) >> 2] = p;
                    }
                    o = (o + 4) | 0;
                  } else o = 0;
                  return o;
                }
                function J(o) {
                  var p = 0,
                    l,
                    q = 0,
                    m,
                    n = 0;
                  if (o) {
                    l = (o - 4) | 0;
                    m = t[l >> 2];
                    q = m;
                    p = l;
                    n = t[(o - 8) >> 2];
                    o = n & -2;
                    (o | 0) != (n | 0) &&
                      ((p = (l - o) | 0),
                      (q = t[(p + 4) >> 2]),
                      (t[(q + 8) >> 2] = t[(p + 8) >> 2]),
                      (t[(t[(p + 8) >> 2] + 4) >> 2] = q),
                      (q = (o + m) | 0));
                    o = (l + m) | 0;
                    l = t[o >> 2];
                    (l | 0) != t[(((o + l) | 0) - 4) >> 2] &&
                      ((m = t[(o + 4) >> 2]),
                      (t[(m + 8) >> 2] = t[(o + 8) >> 2]),
                      (t[(t[(o + 8) >> 2] + 4) >> 2] = m),
                      (q = (q + l) | 0));
                    t[p >> 2] = q;
                    t[((((q & -4) + p) | 0) - 4) >> 2] = q | 1;
                    n = p;
                    q = (t[p >> 2] - 8) | 0;
                    a: {
                      if (q >>> 0 <= 127) {
                        o = (((q >>> 3) | 0) - 1) | 0;
                        break a;
                      }
                      m = y(q);
                      o = (((((q >>> (29 - m)) ^ 4) - (m << 2)) | 0) + 110) | 0;
                      if (q >>> 0 <= 4095) break a;
                      o = (((((q >>> (30 - m)) ^ 2) - (m << 1)) | 0) + 71) | 0;
                      o = o >>> 0 < 63 ? o : 63;
                    }
                    l = o << 4;
                    t[(n + 4) >> 2] = l + 1376;
                    l = (l + 1384) | 0;
                    t[(p + 8) >> 2] = t[l >> 2];
                    t[l >> 2] = p;
                    t[(t[(p + 8) >> 2] + 4) >> 2] = p;
                    l = t[603];
                    p = o & 31;
                    (o & 63) >>> 0 >= 32
                      ? ((o = 1 << p), (p = 0))
                      : ((o = ((1 << p) - 1) & (1 >>> (32 - p))), (p = 1 << p));
                    t[602] = p | t[602];
                    t[603] = o | l;
                  }
                }
                function K(n, o, l) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  var p = 0,
                    m = 0;
                  p = (A - 48) | 0;
                  A = p;
                  t[(p + 40) >> 2] = n;
                  t[(p + 36) >> 2] = o;
                  t[(p + 32) >> 2] = l;
                  a: {
                    if (!(t[(p + 32) >> 2] ? t[(p + 36) >> 2] : 0)) {
                      t[(p + 44) >> 2] = 5;
                      break a;
                    }
                    if (w[(p + 40) >> 2] > 4) {
                      t[(p + 44) >> 2] = 8;
                      break a;
                    }
                    t[(p + 28) >> 2] = 5;
                    (m = p), (l = D(t[(p + 28) >> 2])), (t[(m + 24) >> 2] = l);
                    if (!t[(p + 24) >> 2]) {
                      t[(p + 44) >> 2] = 3;
                      break a;
                    }
                    t[(p + 20) >> 2] = t[(p + 24) >> 2];
                    q[(p + 19) | 0] = 3;
                    q[t[(p + 20) >> 2]] = u[(p + 19) | 0];
                    t[(p + 20) >> 2] = t[(p + 20) >> 2] + 1;
                    t[(p + 12) >> 2] = 1;
                    n = t[(p + 20) >> 2];
                    o = u[(p + 12) | 0] | (u[(p + 13) | 0] << 8);
                    q[n | 0] = o;
                    q[(n + 1) | 0] = o >>> 8;
                    q[(n + 2) | 0] = u[(p + 14) | 0];
                    t[(p + 20) >> 2] = t[(p + 20) >> 2] + 3;
                    q[(p + 11) | 0] = t[(p + 40) >> 2];
                    q[t[(p + 20) >> 2]] = u[(p + 11) | 0];
                    t[t[(p + 36) >> 2] >> 2] = t[(p + 24) >> 2];
                    t[t[(p + 32) >> 2] >> 2] = t[(p + 28) >> 2];
                    t[(p + 44) >> 2] = 0;
                  }
                  A = (p + 48) | 0;
                  return t[(p + 44) >> 2];
                }
                function L(n, o, l, p, m) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  p = p | 0;
                  m = m | 0;
                  if (R(n, t[(o + 8) >> 2], m)) {
                    da(o, l, p);
                    return;
                  }
                  a: {
                    if (R(n, t[o >> 2], m)) {
                      if (
                        !(t[(o + 20) >> 2] != (l | 0)
                          ? t[(o + 16) >> 2] != (l | 0)
                          : 0)
                      ) {
                        if ((p | 0) != 1) break a;
                        t[(o + 32) >> 2] = 1;
                        return;
                      }
                      t[(o + 32) >> 2] = p;
                      b: {
                        if (t[(o + 44) >> 2] == 4) break b;
                        s[(o + 52) >> 1] = 0;
                        n = t[(n + 8) >> 2];
                        ka[t[(t[n >> 2] + 20) >> 2]](n, o, l, l, 1, m);
                        if (u[(o + 53) | 0]) {
                          t[(o + 44) >> 2] = 3;
                          if (!u[(o + 52) | 0]) break b;
                          break a;
                        }
                        t[(o + 44) >> 2] = 4;
                      }
                      t[(o + 20) >> 2] = l;
                      t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                      if ((t[(o + 36) >> 2] != 1) | (t[(o + 24) >> 2] != 2))
                        break a;
                      q[(o + 54) | 0] = 1;
                      return;
                    }
                    n = t[(n + 8) >> 2];
                    ka[t[(t[n >> 2] + 24) >> 2]](n, o, l, p, m);
                  }
                }
                function M(o, p, l, q, m) {
                  var n = 0;
                  n = (A - 32) | 0;
                  A = n;
                  t[(n + 24) >> 2] = o;
                  t[(n + 20) >> 2] = p;
                  t[(n + 16) >> 2] = l;
                  t[(n + 12) >> 2] = q;
                  t[(n + 8) >> 2] = m;
                  a: {
                    if (w[(n + 16) >> 2] < 1) {
                      t[(n + 28) >> 2] = 9;
                      break a;
                    }
                    t[t[(n + 8) >> 2] >> 2] = t[(n + 16) >> 2] - 1;
                    if (w[t[(n + 20) >> 2] >> 2] < w[t[(n + 8) >> 2] >> 2]) {
                      t[(n + 28) >> 2] = 1;
                      break a;
                    }
                    o = D(t[t[(n + 8) >> 2] >> 2]);
                    t[t[(n + 12) >> 2] >> 2] = o;
                    if (!t[t[(n + 12) >> 2] >> 2]) {
                      t[(n + 28) >> 2] = 3;
                      break a;
                    }
                    ba(
                      t[t[(n + 12) >> 2] >> 2],
                      t[t[(n + 24) >> 2] >> 2],
                      t[t[(n + 8) >> 2] >> 2]
                    );
                    o = t[(n + 24) >> 2];
                    t[o >> 2] = t[t[(n + 8) >> 2] >> 2] + t[o >> 2];
                    o = t[(n + 20) >> 2];
                    t[o >> 2] = t[o >> 2] - t[t[(n + 8) >> 2] >> 2];
                    t[(n + 28) >> 2] = 0;
                  }
                  A = (n + 32) | 0;
                  return t[(n + 28) >> 2];
                }
                function N(n, o, l) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  var p = 0,
                    m = 0;
                  p = (A - 32) | 0;
                  A = p;
                  s[(p + 26) >> 1] = n;
                  t[(p + 20) >> 2] = o;
                  t[(p + 16) >> 2] = l;
                  t[t[(p + 16) >> 2] >> 2] = 3;
                  (m = p),
                    (l = D(t[t[(p + 16) >> 2] >> 2])),
                    (t[(m + 12) >> 2] = l);
                  a: {
                    if (!t[(p + 12) >> 2]) {
                      t[(p + 28) >> 2] = 3;
                      break a;
                    }
                    t[t[(p + 20) >> 2] >> 2] = t[(p + 12) >> 2];
                    q[(p + 11) | 0] = 14;
                    q[t[(p + 12) >> 2]] = u[(p + 11) | 0];
                    t[(p + 12) >> 2] = t[(p + 12) >> 2] + 1;
                    n = t[(p + 12) >> 2];
                    o = u[(p + 26) | 0] | (u[(p + 27) | 0] << 8);
                    q[n | 0] = o;
                    q[(n + 1) | 0] = o >>> 8;
                    t[(p + 28) >> 2] = 0;
                  }
                  A = (p + 32) | 0;
                  return t[(p + 28) >> 2];
                }
                function O(m, n) {
                  var l = 0;
                  l = (A - 16) | 0;
                  A = l;
                  t[(l + 12) >> 2] = m;
                  t[(l + 8) >> 2] = n;
                  t[(l + 4) >> 2] = 0;
                  while (1) {
                    if (w[(l + 4) >> 2] < w[(l + 8) >> 2]) {
                      t[l >> 2] = t[(l + 12) >> 2] + x(t[(l + 4) >> 2], 20);
                      a: {
                        if (!(t[t[l >> 2] >> 2] & 15)) {
                          J(t[(t[l >> 2] + 8) >> 2]);
                          break a;
                        }
                        b: {
                          if ((t[t[l >> 2] >> 2] & 15) == 5) {
                            J(t[(t[l >> 2] + 8) >> 2]);
                            break b;
                          }
                          (t[t[l >> 2] >> 2] & 15) == 6 &&
                            J(t[(t[l >> 2] + 12) >> 2]);
                        }
                      }
                      t[(l + 4) >> 2] = t[(l + 4) >> 2] + 1;
                      continue;
                    }
                    break;
                  }
                  J(t[(l + 12) >> 2]);
                  A = (l + 16) | 0;
                }
                function P(m, n, l, o) {
                  q[(m + 53) | 0] = 1;
                  a: {
                    if (t[(m + 4) >> 2] != (l | 0)) break a;
                    q[(m + 52) | 0] = 1;
                    l = t[(m + 16) >> 2];
                    if (!l) {
                      t[(m + 36) >> 2] = 1;
                      t[(m + 24) >> 2] = o;
                      t[(m + 16) >> 2] = n;
                      if (((o | 0) != 1) | (t[(m + 48) >> 2] != 1)) break a;
                      q[(m + 54) | 0] = 1;
                      return;
                    }
                    if ((n | 0) == (l | 0)) {
                      l = t[(m + 24) >> 2];
                      (l | 0) == 2 && ((t[(m + 24) >> 2] = o), (l = o));
                      if ((t[(m + 48) >> 2] != 1) | ((l | 0) != 1)) break a;
                      q[(m + 54) | 0] = 1;
                      return;
                    }
                    q[(m + 54) | 0] = 1;
                    t[(m + 36) >> 2] = t[(m + 36) >> 2] + 1;
                  }
                }
                function Q(n, o, l, p) {
                  var m;
                  m = (A - 32) | 0;
                  t[(m + 24) >> 2] = n;
                  t[(m + 20) >> 2] = o;
                  t[(m + 16) >> 2] = l;
                  t[(m + 12) >> 2] = p;
                  q[(m + 11) | 0] = 0;
                  a: {
                    if (w[t[(m + 20) >> 2] >> 2] < 1) {
                      t[(m + 28) >> 2] = 1;
                      break a;
                    }
                    q[(m + 11) | 0] = u[t[t[(m + 24) >> 2] >> 2]];
                    n = t[(m + 24) >> 2];
                    t[n >> 2] = t[n >> 2] + 1;
                    n = t[(m + 20) >> 2];
                    t[n >> 2] = t[n >> 2] - 1;
                    q[t[(m + 16) >> 2]] = (u[(m + 11) | 0] & 128) == 128;
                    q[t[(m + 12) >> 2]] = u[(m + 11) | 0] & 127;
                    t[(m + 28) >> 2] = 0;
                  }
                  return t[(m + 28) >> 2];
                }
                function ma(n, o, l, p, m) {
                  n = n | 0;
                  o = o | 0;
                  l = l | 0;
                  p = p | 0;
                  m = m | 0;
                  if (R(n, t[(o + 8) >> 2], m)) {
                    da(o, l, p);
                    return;
                  }
                  a: {
                    if (!R(n, t[o >> 2], m)) break a;
                    if (
                      !(t[(o + 20) >> 2] != (l | 0)
                        ? t[(o + 16) >> 2] != (l | 0)
                        : 0)
                    ) {
                      if ((p | 0) != 1) break a;
                      t[(o + 32) >> 2] = 1;
                      return;
                    }
                    t[(o + 20) >> 2] = l;
                    t[(o + 32) >> 2] = p;
                    t[(o + 40) >> 2] = t[(o + 40) >> 2] + 1;
                    (t[(o + 36) >> 2] != 1) | (t[(o + 24) >> 2] != 2) ||
                      (q[(o + 54) | 0] = 1);
                    t[(o + 44) >> 2] = 4;
                  }
                }
                function R(m, n, l) {
                  var o;
                  if (!l) return t[(m + 4) >> 2] == t[(n + 4) >> 2];
                  if ((m | 0) == (n | 0)) return 1;
                  l = t[(m + 4) >> 2];
                  m = u[l | 0];
                  n = t[(n + 4) >> 2];
                  o = u[n | 0];
                  a: {
                    if (!m | ((o | 0) != (m | 0))) break a;
                    while (1) {
                      o = u[(n + 1) | 0];
                      m = u[(l + 1) | 0];
                      if (!m) break a;
                      n = (n + 1) | 0;
                      l = (l + 1) | 0;
                      if ((m | 0) == (o | 0)) continue;
                      break;
                    }
                  }
                  return (m | 0) == (o | 0);
                }
                function na(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 9;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function S(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 10;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function T(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 2;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function U(m, n) {
                  m = m | 0;
                  n = n | 0;
                  var l = 0,
                    o = 0;
                  l = (A - 32) | 0;
                  A = l;
                  t[(l + 24) >> 2] = m;
                  t[(l + 20) >> 2] = n;
                  (o = l), (m = D(1)), (t[(o + 16) >> 2] = m);
                  a: {
                    if (!t[(l + 16) >> 2]) {
                      t[(l + 28) >> 2] = 3;
                      break a;
                    }
                    q[(l + 15) | 0] = 4;
                    q[t[(l + 16) >> 2]] = u[(l + 15) | 0];
                    t[t[(l + 24) >> 2] >> 2] = t[(l + 16) >> 2];
                    t[t[(l + 20) >> 2] >> 2] = 1;
                    t[(l + 28) >> 2] = 0;
                  }
                  A = (l + 32) | 0;
                  return t[(l + 28) >> 2];
                }
                function V(l) {
                  var m = 0;
                  m = (A - 16) | 0;
                  A = m;
                  t[(m + 12) >> 2] = l;
                  l = 1;
                  a: {
                    if (X(t[(m + 12) >> 2]) & 1) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 15) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 13) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 12) break a;
                    l = t[(m + 12) >> 2] == 14;
                  }
                  A = (m + 16) | 0;
                  return l;
                }
                function W(m, n, l) {
                  var o;
                  o = t[(m + 16) >> 2];
                  if (!o) {
                    t[(m + 36) >> 2] = 1;
                    t[(m + 24) >> 2] = l;
                    t[(m + 16) >> 2] = n;
                    return;
                  }
                  a: {
                    if ((n | 0) == (o | 0)) {
                      if (t[(m + 24) >> 2] != 2) break a;
                      t[(m + 24) >> 2] = l;
                      return;
                    }
                    q[(m + 54) | 0] = 1;
                    t[(m + 24) >> 2] = 2;
                    t[(m + 36) >> 2] = t[(m + 36) >> 2] + 1;
                  }
                }
                function X(l) {
                  var m;
                  m = (A - 16) | 0;
                  t[(m + 12) >> 2] = l;
                  l = 1;
                  a: {
                    if (t[(m + 12) >> 2] == 5) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 6) break a;
                    l = 1;
                    if (t[(m + 12) >> 2] == 7) break a;
                    l = t[(m + 12) >> 2] == 8;
                  }
                  return l;
                }
                function Y(o, p, l, q, m, n) {
                  o = o | 0;
                  p = p | 0;
                  l = l | 0;
                  q = q | 0;
                  m = m | 0;
                  n = n | 0;
                  if (R(o, t[(p + 8) >> 2], n)) {
                    P(p, l, q, m);
                    return;
                  }
                  o = t[(o + 8) >> 2];
                  ka[t[(t[o >> 2] + 20) >> 2]](o, p, l, q, m, n);
                }
                function Z() {
                  var m = 0,
                    n,
                    l;
                  while (1) {
                    n = m << 4;
                    l = (n + 1376) | 0;
                    t[(n + 1380) >> 2] = l;
                    t[(n + 1384) >> 2] = l;
                    m = (m + 1) | 0;
                    if ((m | 0) != 64) continue;
                    break;
                  }
                  G(48);
                }
                function $(m, n, l, o) {
                  m = m | 0;
                  n = n | 0;
                  l = l | 0;
                  o = o | 0;
                  if (R(m, t[(n + 8) >> 2], 0)) {
                    W(n, l, o);
                    return;
                  }
                  m = t[(m + 8) >> 2];
                  ka[t[(t[m >> 2] + 28) >> 2]](m, n, l, o);
                }
                function aa(o, p, l, q, m, n) {
                  (o = o | 0),
                    (p = p | 0),
                    (l = l | 0),
                    (q = q | 0),
                    (m = m | 0),
                    (n = n | 0),
                    R(o, t[(p + 8) >> 2], n) && P(p, l, q, m);
                }
                function ba(m, n, l) {
                  if (l)
                    while (1) {
                      q[m | 0] = u[n | 0];
                      m = (m + 1) | 0;
                      n = (n + 1) | 0;
                      l = (l - 1) | 0;
                      if (l) continue;
                      break;
                    }
                }
                function ca(l, m) {
                  if (m)
                    while (1) {
                      q[l | 0] = 0;
                      l = (l + 1) | 0;
                      m = (m - 1) | 0;
                      if (m) continue;
                      break;
                    }
                }
                function oa(m, n, l, o) {
                  (m = m | 0),
                    (n = n | 0),
                    (l = l | 0),
                    (o = o | 0),
                    R(m, t[(n + 8) >> 2], 0) && W(n, l, o);
                }
                function da(m, n, l) {
                  (t[(m + 28) >> 2] == 1) | (t[(m + 4) >> 2] != (n | 0)) ||
                    (t[(m + 28) >> 2] = l);
                }
                function pa(l, m) {
                  l = l | 0;
                  m = m | 0;
                  return (x(m, 20) + l) | 0;
                }
                function ea(l) {
                  l = l | 0;
                  return (v[(l + 8) >> 1] >>> 1) | 0;
                }
                function qa(l) {
                  l = l | 0;
                  return s[(l + 8) >> 1] & 1;
                }
                function fa(l) {
                  l = l | 0;
                  return t[(l + 12) >> 2];
                }
                function ra(l) {
                  l = l | 0;
                  return t[l >> 2] & 15;
                }
                function sa(l) {
                  l = l | 0;
                  return t[(l + 16) >> 2];
                }
                function ga(l) {
                  l = l | 0;
                  return v[(l + 4) >> 1];
                }
                function ha(l) {
                  l = l | 0;
                  return t[(l + 8) >> 2];
                }
                function ia(l) {
                  l = l | 0;
                  return u[(l + 4) | 0];
                }
                function ja(l) {
                  l = l | 0;
                  return l | 0;
                }
                function ta(l) {
                  return D(l);
                }
                function ua(l) {
                  (l = l | 0), J(l);
                }
                function va(l) {
                  l | 0;
                }
                n = u;
                r(l);
                var ka = m([null, ja, ua, va, va, H, aa, ma, oa, ua, Y, L, $]);
                function wa() {
                  return (p.byteLength / 65536) | 0;
                }
                function xa(l) {
                  l = l | 0;
                  var m = wa() | 0;
                  l = (m + l) | 0;
                  if (m < l && l < 65536) {
                    l = new ArrayBuffer(x(l, 65536));
                    var r = new Int8Array(l);
                    r.set(q);
                    q = new Int8Array(l);
                    s = new Int16Array(l);
                    t = new Int32Array(l);
                    u = new Uint8Array(l);
                    v = new Uint16Array(l);
                    w = new Uint32Array(l);
                    new Float32Array(l);
                    new Float64Array(l);
                    p = l;
                    o.buffer = p;
                    n = u;
                  }
                  return m;
                }
                return {
                  c: Z,
                  d: ta,
                  e: ua,
                  f: T,
                  g: U,
                  h: K,
                  i: F,
                  j: N,
                  k: E,
                  l: la,
                  m: na,
                  n: S,
                  o: C,
                  p: ra,
                  q: ia,
                  r: pa,
                  s: ga,
                  t: ha,
                  u: fa,
                  v: fa,
                  w: sa,
                  x: ea,
                  y: qa,
                  z: ea,
                  A: ka,
                };
              }
              return s(l);
            })(ha);
          },
          instantiate: function (l, m) {
            return {
              then: function (n) {
                var m = new D.Module(l);
                n({ instance: new D.Instance(m) });
              },
            };
          },
          RuntimeError: Error,
        };
        C = [];
        typeof D !== "object" && Y("no native wasm support detected");
        var E,
          F = !1;
        function G(l, m) {
          l || Y("Assertion failed: " + m);
        }
        function la(l, m) {
          l % m > 0 && (l += m - (l % m));
          return l;
        }
        var H, I;
        function J(l) {
          (H = l),
            (m.HEAP8 = new Int8Array(l)),
            (m.HEAP16 = new Int16Array(l)),
            (m.HEAP32 = new Int32Array(l)),
            (m.HEAPU8 = I = new Uint8Array(l)),
            (m.HEAPU16 = new Uint16Array(l)),
            (m.HEAPU32 = new Uint32Array(l)),
            (m.HEAPF32 = new Float32Array(l)),
            (m.HEAPF64 = new Float64Array(l));
        }
        u = m.INITIAL_MEMORY || 2097152;
        m.wasmMemory
          ? (E = m.wasmMemory)
          : (E = new D.Memory({
              initial: u / 65536,
              maximum: 2147483648 / 65536,
            }));
        E && (H = E.buffer);
        H.byteLength;
        J(H);
        var K,
          L = [],
          M = [],
          N = [];
        function O() {
          if (m.preRun) {
            typeof m.preRun == "function" && (m.preRun = [m.preRun]);
            while (m.preRun.length) ma(m.preRun.shift());
          }
          da(L);
        }
        function P() {
          da(M);
        }
        function Q() {
          if (m.postRun) {
            typeof m.postRun == "function" && (m.postRun = [m.postRun]);
            while (m.postRun.length) na(m.postRun.shift());
          }
          da(N);
        }
        function ma(l) {
          L.unshift(l);
        }
        function R(l) {
          M.unshift(l);
        }
        function na(l) {
          N.unshift(l);
        }
        (!Math.imul || Math.imul(4294967295, 5) !== -5) &&
          (Math.imul = function (l, m) {
            var n = l >>> 16;
            l = l & 65535;
            var o = m >>> 16;
            m = m & 65535;
            return (l * m + ((n * m + l * o) << 16)) | 0;
          });
        if (!Math.fround) {
          var S = new Float32Array(1);
          Math.fround = function (l) {
            S[0] = l;
            return S[0];
          };
        }
        Math.clz32 ||
          (Math.clz32 = function (l) {
            var m = 32,
              n = l >> 16;
            n && ((m -= 16), (l = n));
            n = l >> 8;
            n && ((m -= 8), (l = n));
            n = l >> 4;
            n && ((m -= 4), (l = n));
            n = l >> 2;
            n && ((m -= 2), (l = n));
            n = l >> 1;
            return n ? m - 2 : m - l;
          });
        Math.trunc ||
          (Math.trunc = function (l) {
            return l < 0 ? Math.ceil(l) : Math.floor(l);
          });
        var T = 0,
          U = null,
          V = null;
        function W(l) {
          T++, m.monitorRunDependencies && m.monitorRunDependencies(T);
        }
        function X(l) {
          T--;
          m.monitorRunDependencies && m.monitorRunDependencies(T);
          if (T == 0) {
            U !== null && (clearInterval(U), (U = null));
            if (V) {
              l = V;
              V = null;
              l();
            }
          }
        }
        m.preloadedImages = {};
        m.preloadedAudios = {};
        function Y(l) {
          m.onAbort && m.onAbort(l);
          l += "";
          B(l);
          F = !0;
          l = "abort(" + l + "). Build with -s ASSERTIONS=1 for more info.";
          l = new D.RuntimeError(l);
          s(l);
          throw l;
        }
        var Z = "data:application/octet-stream;base64,";
        function $(l) {
          return l.startsWith(Z);
        }
        var aa = "dgwcppbridge.wasm";
        $(aa) || (aa = z(aa));
        function ba(l) {
          try {
            if (l == aa && C) return new Uint8Array(C);
            var m = ga(l);
            if (m) return m;
            if (A) return A(l);
            else throw "both async and sync fetching of the wasm failed";
          } catch (l) {
            Y(l);
          }
        }
        function ca() {
          return !C && (w || x) && typeof fetch === "function"
            ? fetch(aa, { credentials: "same-origin" })
                .then(function (l) {
                  if (!l.ok)
                    throw "failed to load wasm binary file at '" + aa + "'";
                  return l.arrayBuffer();
                })
                ["catch"](function () {
                  return ba(aa);
                })
            : n.resolve().then(function () {
                return ba(aa);
              });
        }
        function oa() {
          var n = { a: ha };
          function o(n, l) {
            l = n.exports;
            m.asm = l;
            K = m.asm.A;
            R(m.asm.c);
            X("wasm-instantiate");
          }
          W("wasm-instantiate");
          function r(l) {
            o(l.instance);
          }
          function t(l) {
            return ca()
              .then(function (l) {
                l = D.instantiate(l, n);
                return l;
              })
              .then(l, function (l) {
                B("failed to asynchronously prepare wasm: " + l), Y(l);
              });
          }
          function u() {
            if (
              !C &&
              typeof D.instantiateStreaming === "function" &&
              !$(aa) &&
              typeof fetch === "function"
            )
              return fetch(aa, { credentials: "same-origin" }).then(function (
                l
              ) {
                l = D.instantiateStreaming(l, n);
                return l.then(r, function (l) {
                  B("wasm streaming compile failed: " + l);
                  B("falling back to ArrayBuffer instantiation");
                  return t(r);
                });
              });
            else return t(r);
          }
          if (m.instantiateWasm)
            try {
              var l = m.instantiateWasm(n, o);
              return l;
            } catch (l) {
              B("Module.instantiateWasm callback failed with error: " + l);
              return !1;
            }
          u()["catch"](s);
          return {};
        }
        function da(l) {
          while (l.length > 0) {
            var n = l.shift();
            if (typeof n == "function") {
              n(m);
              continue;
            }
            var o = n.func;
            typeof o === "number"
              ? n.arg === void 0
                ? K.get(o)()
                : K.get(o)(n.arg)
              : o(n.arg === void 0 ? null : n.arg);
          }
        }
        function pa(l) {
          try {
            E.grow((l - H.byteLength + 65535) >>> 16);
            J(E.buffer);
            return 1;
          } catch (l) {}
        }
        function ea(l) {
          var m = I.length;
          l = l >>> 0;
          var n = 2147483648;
          if (l > n) return !1;
          for (var o = 1; o <= 4; o *= 2) {
            var p = m * (1 + 0.2 / o);
            p = Math.min(p, l + 100663296);
            p = Math.min(n, la(Math.max(l, p), 65536));
            p = pa(p);
            if (p) return !0;
          }
          return !1;
        }
        var qa = !1;
        function fa(l) {
          var m = [];
          for (var n = 0; n < l.length; n++) {
            var o = l[n];
            o > 255 &&
              (qa &&
                G(
                  !1,
                  "Character code " +
                    o +
                    " (" +
                    String.fromCharCode(o) +
                    ")  at offset " +
                    n +
                    " not in 0x00-0xFF."
                ),
              (o &= 255));
            m.push(String.fromCharCode(o));
          }
          return m.join("");
        }
        var ra =
          typeof atob === "function"
            ? atob
            : function (l) {
                var m =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  n = "",
                  o,
                  p,
                  q,
                  r,
                  s,
                  t = 0;
                l = l.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do
                  (p = m.indexOf(l.charAt(t++))),
                    (q = m.indexOf(l.charAt(t++))),
                    (r = m.indexOf(l.charAt(t++))),
                    (s = m.indexOf(l.charAt(t++))),
                    (p = (p << 2) | (q >> 4)),
                    (q = ((q & 15) << 4) | (r >> 2)),
                    (o = ((r & 3) << 6) | s),
                    (n = n + String.fromCharCode(p)),
                    r !== 64 && (n = n + String.fromCharCode(q)),
                    s !== 64 && (n = n + String.fromCharCode(o));
                while (t < l.length);
                return n;
              };
        function sa(l) {
          try {
            l = ra(l);
            var m = new Uint8Array(l.length);
            for (var n = 0; n < l.length; ++n) m[n] = l.charCodeAt(n);
            return m;
          } catch (l) {
            throw new Error("Converting base64 string to bytes failed.");
          }
        }
        function ga(l) {
          if (!$(l)) return;
          return sa(l.slice(Z.length));
        }
        var ha = { b: ea, a: E };
        oa();
        m.___wasm_call_ctors = function () {
          return (m.___wasm_call_ctors = m.asm.c).apply(null, arguments);
        };
        m.__malloc = function () {
          return (m.__malloc = m.asm.d).apply(null, arguments);
        };
        m.__free = function () {
          return (m.__free = m.asm.e).apply(null, arguments);
        };
        m.__DgwCodecEncodeEmpty = function () {
          return (m.__DgwCodecEncodeEmpty = m.asm.f).apply(null, arguments);
        };
        m.__DgwCodecEncodeDeauth = function () {
          return (m.__DgwCodecEncodeDeauth = m.asm.g).apply(null, arguments);
        };
        m.__DgwCodecEncodeDrain = function () {
          return (m.__DgwCodecEncodeDrain = m.asm.h).apply(null, arguments);
        };
        m.__DgwCodecEncodeStreamGroup_EstabStream = function () {
          return (m.__DgwCodecEncodeStreamGroup_EstabStream = m.asm.i).apply(
            null,
            arguments
          );
        };
        m.__DgwCodecEncodeStreamGroup_EndOfData = function () {
          return (m.__DgwCodecEncodeStreamGroup_EndOfData = m.asm.j).apply(
            null,
            arguments
          );
        };
        m.__DgwCodecEncodeStreamGroup_Data = function () {
          return (m.__DgwCodecEncodeStreamGroup_Data = m.asm.k).apply(
            null,
            arguments
          );
        };
        m.__DgwCodecEncodeStreamGroup_Ack = function () {
          return (m.__DgwCodecEncodeStreamGroup_Ack = m.asm.l).apply(
            null,
            arguments
          );
        };
        m.__DgwCodecEncodePing = function () {
          return (m.__DgwCodecEncodePing = m.asm.m).apply(null, arguments);
        };
        m.__DgwCodecEncodePong = function () {
          return (m.__DgwCodecEncodePong = m.asm.n).apply(null, arguments);
        };
        m.__DgwCodecDecode = function () {
          return (m.__DgwCodecDecode = m.asm.o).apply(null, arguments);
        };
        m.__getFrameType = function () {
          return (m.__getFrameType = m.asm.p).apply(null, arguments);
        };
        m.__getDrainReasonFromDrainFrame = function () {
          return (m.__getDrainReasonFromDrainFrame = m.asm.q).apply(
            null,
            arguments
          );
        };
        m.__getDGWFramePtr = function () {
          return (m.__getDGWFramePtr = m.asm.r).apply(null, arguments);
        };
        m.__getStreamIdFromStreamGroupFrame = function () {
          return (m.__getStreamIdFromStreamGroupFrame = m.asm.s).apply(
            null,
            arguments
          );
        };
        m.__getEncodedParamsFromEstablishStreamFrame = function () {
          return (m.__getEncodedParamsFromEstablishStreamFrame = m.asm.t).apply(
            null,
            arguments
          );
        };
        m.__getEncodedParamsSizeFromEstablishStreamFrame = function () {
          return (m.__getEncodedParamsSizeFromEstablishStreamFrame =
            m.asm.u).apply(null, arguments);
        };
        m.__getDataFromGroupedStreamDataFrame = function () {
          return (m.__getDataFromGroupedStreamDataFrame = m.asm.v).apply(
            null,
            arguments
          );
        };
        m.__getDataSizeFromGroupedStreamDataFrame = function () {
          return (m.__getDataSizeFromGroupedStreamDataFrame = m.asm.w).apply(
            null,
            arguments
          );
        };
        m.__getAckIdFromGroupedStreamDataFrame = function () {
          return (m.__getAckIdFromGroupedStreamDataFrame = m.asm.x).apply(
            null,
            arguments
          );
        };
        m.__getRequiresAckFromGroupedStreamDataFrame = function () {
          return (m.__getRequiresAckFromGroupedStreamDataFrame = m.asm.y).apply(
            null,
            arguments
          );
        };
        m.__getAckIdFromGroupedStreamAckFrame = function () {
          return (m.__getAckIdFromGroupedStreamAckFrame = m.asm.z).apply(
            null,
            arguments
          );
        };
        var ia;
        V = function l() {
          ia || ja(), ia || (V = l);
        };
        function ja(l) {
          l || v;
          if (T > 0) return;
          O();
          if (T > 0) return;
          function n() {
            if (ia) return;
            ia = !0;
            m.calledRun = !0;
            if (F) return;
            P();
            o(m);
            m.onRuntimeInitialized && m.onRuntimeInitialized();
            Q();
          }
          m.setStatus
            ? (m.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  m.setStatus("");
                }, 1),
                  n();
              }, 1))
            : n();
        }
        m.run = ja;
        if (m.preInit) {
          typeof m.preInit == "function" && (m.preInit = [m.preInit]);
          while (m.preInit.length > 0) m.preInit.pop()();
        }
        ja();
        return m.ready;
      };
    })();
    typeof q === "object" && typeof p === "object"
      ? (p.exports = r)
      : typeof define === "function" && define.amd
      ? define([], function () {
          return r;
        })
      : typeof q === "object" && (q.Module = r);
  },
  null
);
__d(
  "DGWUtils",
  [
    "Base64",
    "DGWConstants",
    "DGWCppBridge",
    "DGWLoggingContext",
    "Random",
    "URI",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4;
    function a() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (d("Random").random() * 16) | 0;
          a = a === "x" ? b : (b & 3) | 8;
          return a.toString(16);
        }
      );
    }
    function i(a) {
      var b = new TextDecoder();
      b = b.decode(a);
      a = c("Base64").encode(b);
      b = a.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
      return b;
    }
    var j = null;
    e = (function () {
      function a() {}
      a.initialize = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  if (!(j != null)) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt("return");
                case 2:
                  a.next = 4;
                  return b("regeneratorRuntime").awrap(c("DGWCppBridge")());
                case 4:
                  j = a.sent;
                case 5:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      a.constructConnectUrl = function (a) {
        var b,
          e = a.appId,
          f = a.appVersion,
          g = a.authType,
          h = a.dgwVersion,
          j = a.fbId,
          k = a.tier,
          l = a.loggingId,
          m = a.headers,
          n = a.endpoint,
          o = a.serviceId,
          p = a.regionHint;
        a = a.establishStreamFrame;
        var q =
          ((b = {}),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_APPID] = e),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_APPVERSION] = f),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_AUTHTYPE] = g),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_DGW_VERSION] = "" + h),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_UUID] = j),
          (b[d("DGWConstants").HEADER_CONSTANTS.HEADER_TARGET_TIER] = k),
          b);
        a !== void 0 &&
          (q[
            d(
              "DGWConstants"
            ).HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64
          ] = i(a));
        l !== void 0 &&
          (q[d("DGWConstants").HEADER_CONSTANTS.HEADER_LOGGING_ID] = l);
        p !== void 0 &&
          (q[d("DGWConstants").HEADER_CONSTANTS.HEADER_REGIONHINT] = p);
        Object.keys(m).forEach(function (a) {
          var b = d("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + a;
          Object.prototype.hasOwnProperty.call(q, b) || (q[b] = m[a]);
        });
        e = new (c("URI"))(n);
        e.setQueryData(q);
        e.setPath(e.getPath() + "/" + o);
        e.toString().length > 2e3 &&
          (delete q[
            d("DGWConstants").HEADER_CONSTANTS
              .HEADER_ESTABLISH_STREAM_FRAME_BASE64
          ],
          e.setQueryData(q));
        return e.toString();
      };
      return a;
    })();
    f = (function () {
      function a(a, b, c) {
        (this.$1 = null), (this.$2 = a), (this.$3 = b), (this.$4 = c);
      }
      a.initialize = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  if (!(j != null)) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt("return");
                case 2:
                  a.next = 4;
                  return b("regeneratorRuntime").awrap(c("DGWCppBridge")());
                case 4:
                  j = a.sent;
                case 5:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      var e = a.prototype;
      e.malloc = function (a) {
        try {
          a = j.__malloc(a);
          if (a === 0) {
            var b;
            (b = this.$2) == null
              ? void 0
              : b.logError(
                  d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                  "wasm malloc failure",
                  "malloc returned 0"
                );
            return -1;
          }
          return a;
        } catch (a) {
          (b = this.$2) == null
            ? void 0
            : b.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "wasm malloc failure",
                "exception during malloc",
                a.toString()
              );
          return -1;
        }
      };
      e.free = function (a) {
        j.__free(a);
      };
      e.append = function (a) {
        if (this.$1 == null) {
          this.$1 = a;
          return;
        }
        var b = this.$1.length,
          c = new Uint8Array(b + a.length);
        c.set(this.$1, 0);
        c.set(a, b);
        this.$1 = c;
      };
      e.processData = function () {
        var a = this;
        if (this.$1 == null) return;
        var b = this.$1.length,
          c = this.malloc(b);
        if (c === -1) return;
        var e = j.HEAPU8.subarray(c, c + b);
        if (this.$1) for (var f = 0; f < e.length; ++f) e[f] = this.$1[f];
        f = this.malloc(h * 4);
        if (f === -1) return;
        e = f;
        var g = e + h,
          i = g + h,
          k = i + h;
        b = j.__DgwCodecDecode(c, b, e, g, i, k);
        this.free(c);
        if (
          b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          this.free(f);
          (i = this.$2) == null
            ? void 0
            : i.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "Codec Decode Failure",
                "Failed to decode Frame(s). Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(b)
              );
          return;
        }
        c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
        if (this.$1 == null) {
          this.free(f);
          return;
        }
        i = this.$1.length - c;
        if (this.$1 && this.$1.length > i) {
          this.$1 = new Uint8Array(
            ((b = this.$1) == null ? void 0 : b.subarray(i)) || []
          );
        } else this.$1 = null;
        k = j.HEAPU32.subarray(g / h, g / h + 1)[0];
        c = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        var l = [];
        for (b = 0; b < k; ++b) {
          var m = j.__getDGWFramePtr(c, b);
          i = j.__getFrameType(m);
          switch (i) {
            case d("DGWConstants").DgwFrameType.DgwFrameType_Drain:
              g = (function () {
                var b = j.__getDrainReasonFromDrainFrame(m),
                  c = d("DGWConstants").drainReasonToDrainReasonString(b);
                (b = a.$2) == null
                  ? void 0
                  : b.logEvent(
                      d("DGWLoggingContext").DGWLoggingComponent
                        .CODEC_COMPONENT,
                      "Received Drain Frame from server",
                      "DrainReason: " + c
                    );
                l.push(function () {
                  var b;
                  return (b = a.$3) == null ? void 0 : b.receivedDrainSignal(c);
                });
                return "break";
              })();
              if (g === "break") break;
            case d("DGWConstants").DgwFrameType
              .DgwFrameType_StreamGroup_EstabStream:
              e = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getEncodedParamsFromEstablishStreamFrame(m),
                  d = new Uint8Array(
                    j.HEAPU8.subarray(
                      c,
                      c + j.__getEncodedParamsSizeFromEstablishStreamFrame(m)
                    )
                  );
                a.free(c);
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamEstablishStreamReceived(b, d);
                });
                return "break";
              })();
              if (e === "break") break;
            case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_Data:
              i = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getDataFromGroupedStreamDataFrame(m),
                  d = new Uint8Array(
                    j.HEAPU8.subarray(
                      c,
                      c + j.__getDataSizeFromGroupedStreamDataFrame(m)
                    )
                  );
                a.free(c);
                var e = j.__getRequiresAckFromGroupedStreamDataFrame(m)
                  ? j.__getAckIdFromGroupedStreamDataFrame(m)
                  : null;
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamDataReceived(b, d, e);
                });
                return "break";
              })();
              if (i === "break") break;
            case d("DGWConstants").DgwFrameType.DgwFrameType_StreamGroup_Ack:
              g = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m),
                  c = j.__getAckIdFromGroupedStreamAckFrame(m);
                l.push(function () {
                  var d;
                  return (d = a.$3) == null
                    ? void 0
                    : d.onGroupedStreamAckReceived(b, c);
                });
                return "break";
              })();
              if (g === "break") break;
            case d("DGWConstants").DgwFrameType
              .DgwFrameType_StreamGroup_EndOfData:
              e = (function () {
                var b = j.__getStreamIdFromStreamGroupFrame(m);
                l.push(function () {
                  var c;
                  return (c = a.$3) == null
                    ? void 0
                    : c.onGroupedStreamEndOfDataReceived(b);
                });
                return "break";
              })();
              if (e === "break") break;
            case d("DGWConstants").DgwFrameType.DgwFrameType_Ping:
              l.push(function () {
                var b;
                return (b = a.$3) == null ? void 0 : b.onPingReceived();
              });
              break;
            case d("DGWConstants").DgwFrameType.DgwFrameType_Pong:
              l.push(function () {
                var b;
                return (b = a.$3) == null ? void 0 : b.onPongReceived();
              });
              break;
            default:
              break;
          }
          this.free(m);
        }
        this.free(f);
        for (i = 0; i < l.length; i++) l[i]();
      };
      e.encodeData = function (a, b, c, e) {
        var f = this.malloc(a.length);
        if (f === -1) return null;
        var g = j.HEAPU8.subarray(f, f + a.length);
        for (var i = 0; i < g.length; ++i) g[i] = a[i];
        a = this.malloc(h * 2);
        i = a;
        var k = a + h;
        e = j.__DgwCodecEncodeStreamGroup_Data(e, f, g.length, b, c, i, k);
        this.free(f);
        if (
          e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (g = this.$2) == null
            ? void 0
            : g.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "Data Frame encode failure",
                "Failed to decode DGW Data Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(e)
              );
          return null;
        }
        b = j.HEAPU32.subarray(i / h, i / h + 1)[0];
        c = j.HEAPU32.subarray(k / h, k / h + 1)[0];
        f = new Uint8Array(j.HEAPU8.subarray(b, b + c));
        this.free(b);
        this.free(a);
        return f;
      };
      e.encodeAck = function (a, b) {
        var c = this.malloc(h * 2);
        if (c === -1) return null;
        var e = c,
          f = c + h;
        b = j.__DgwCodecEncodeStreamGroup_Ack(b, a, e, f);
        if (
          b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (a = this.$2) == null
            ? void 0
            : a.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "ACK Frame encode failure",
                "Failed to encode ACK Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(b)
              );
          return null;
        }
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        b = j.HEAPU32.subarray(f / h, f / h + 1)[0];
        e = new Uint8Array(j.HEAPU8.subarray(a, a + b));
        this.free(a);
        this.free(c);
        return e;
      };
      e.encodeDrain = function (a) {
        var b = this.malloc(h * 2);
        if (b === -1) return null;
        var c = b,
          e = b + h;
        a = j.__DgwCodecEncodeDrain(a, c, e);
        if (
          a !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "Drain Frame encode failure",
                "Failed to encode Drain Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(a)
              );
          return null;
        }
        f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
        this.free(f);
        this.free(b);
        return c;
      };
      e.encodeEstablishStream = function (a, b) {
        var c = this.malloc(b.length);
        if (c === -1) return null;
        var e = j.HEAPU8.subarray(c, c + b.length);
        for (var f = 0; f < b.length; ++f) e[f] = b[f];
        e = this.malloc(h * 2);
        f = e;
        var g = e + h;
        b = j.__DgwCodecEncodeStreamGroup_EstabStream(a, c, b.length, f, g);
        this.free(c);
        if (
          b !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          (c = this.$2) == null
            ? void 0
            : c.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "EstablishStream Frame encode failure",
                "Failed to encode EstablishStream Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(b) +
                  " for StreamId " +
                  a
              );
          return null;
        }
        c = j.HEAPU32.subarray(f / h, f / h + 1)[0];
        b = j.HEAPU32.subarray(g / h, g / h + 1)[0];
        a = new Uint8Array(j.HEAPU8.subarray(c, c + b));
        this.free(c);
        this.free(e);
        return a;
      };
      e.encodeEndOfData = function (a) {
        var b = this.malloc(h * 2);
        if (b === -1) return null;
        var c = b,
          e = b + h;
        a = j.__DgwCodecEncodeStreamGroup_EndOfData(a, c, e);
        if (
          a !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "EndOfData Frame encode failure",
                "Failed to encode EndOfData Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(a)
              );
          return null;
        }
        f = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        a = j.HEAPU32.subarray(e / h, e / h + 1)[0];
        c = new Uint8Array(j.HEAPU8.subarray(f, f + a));
        this.free(f);
        this.free(b);
        return c;
      };
      e.encodePing = function () {
        if (this.$5 != null) return this.$5;
        var a = this.malloc(h * 2);
        if (a === -1) return null;
        var b = a,
          c = a + h,
          e = j.__DgwCodecEncodePing(b, c);
        if (
          e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "Ping Frame encode failure",
                "Failed to encode Ping Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(e)
              );
          return null;
        }
        f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
        e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
        this.free(f);
        this.free(a);
        this.$5 = b;
        return b;
      };
      e.encodePong = function () {
        if (this.$6 != null) return this.$6;
        var a = this.malloc(h * 2);
        if (a === -1) return null;
        var b = a,
          c = a + h,
          e = j.__DgwCodecEncodePong(b, c);
        if (
          e !== d("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
        ) {
          var f;
          (f = this.$2) == null
            ? void 0
            : f.logError(
                d("DGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                "Pong Frame encode failure",
                "Failed to encode Pong Frame. Received error code " +
                  d("DGWConstants").DgwCodecReturnCodeToString(e)
              );
          return null;
        }
        f = j.HEAPU32.subarray(b / h, b / h + 1)[0];
        e = j.HEAPU32.subarray(c / h, c / h + 1)[0];
        b = new Uint8Array(j.HEAPU8.subarray(f, f + e));
        this.free(f);
        this.free(a);
        this.$6 = b;
        return b;
      };
      return a;
    })();
    g.uuidv4 = a;
    g.Uint8ArrayToBase64UrlStr = i;
    g.DGWUtils = e;
    g.DGWCodec = f;
  },
  98
);
__d(
  "DGWExponentialBackoff",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
        maxRetries: 5,
        baseRetryInterval: 1e3,
        backoffFactor: Math.sqrt(2),
      },
      h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          a = b.call(this, a) || this;
          a.errors = c;
          return a;
        }
        return a;
      })(babelHelpers.wrapNativeSuper(Error));
    function a(a, c) {
      return b("regeneratorRuntime").async(
        function (d) {
          while (1)
            switch ((d.prev = d.next)) {
              case 0:
                c === void 0 && (c = g);
                d.prev = 1;
                d.next = 4;
                return b("regeneratorRuntime").awrap(i(a, c));
              case 4:
                return d.abrupt("return", d.sent);
              case 7:
                d.prev = 7;
                d.t0 = d["catch"](1);
                throw d.t0.errors[d.t0.errors.length - 1];
              case 10:
              case "end":
                return d.stop();
            }
        },
        null,
        this,
        [[1, 7]]
      );
    }
    function i(a, c) {
      var d, e, f, g, i;
      return b("regeneratorRuntime").async(
        function (k) {
          while (1)
            switch ((k.prev = k.next)) {
              case 0:
                (d = 0),
                  (e = []),
                  (f = c.baseRetryInterval),
                  (g = c.backoffFactor);
              case 4:
                if (!(d <= c.maxRetries)) {
                  k.next = 20;
                  break;
                }
                k.prev = 5;
                k.next = 8;
                return b("regeneratorRuntime").awrap(a());
              case 8:
                i = k.sent;
                return k.abrupt("return", i);
              case 12:
                (k.prev = 12), (k.t0 = k["catch"](5)), e.push(k.t0);
              case 15:
                k.next = 17;
                return b("regeneratorRuntime").awrap(j(f * Math.pow(g, d)));
              case 17:
                ++d;
                k.next = 4;
                break;
              case 20:
                throw new h("Max call count exceeded", e);
              case 21:
              case "end":
                return k.stop();
            }
        },
        null,
        this,
        [[5, 12]]
      );
    }
    function j(a) {
      return b("regeneratorRuntime").async(
        function (c) {
          while (1)
            switch ((c.prev = c.next)) {
              case 0:
                c.next = 2;
                return b("regeneratorRuntime").awrap(
                  new (b("Promise"))(function (b) {
                    return window.setTimeout(b, a);
                  })
                );
              case 2:
              case "end":
                return c.stop();
            }
        },
        null,
        this
      );
    }
    f.callWithExponentialBackoff = a;
  },
  66
);
__d(
  "DGWPinger",
  ["DGWLoggingContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$4 = b), (this.$5 = c), (this.$3 = !1);
      }
      var b = a.prototype;
      b.$6 = function () {
        var a = this;
        this.$3
          ? (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
              d("DGWLoggingContext").DGWLoggingComponent.PINGER,
              "timeout_fired.reset"
            ),
            (this.$3 = !1),
            this.$4(),
            d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
              d("DGWLoggingContext").DGWLoggingComponent.PINGER,
              "timeout.newtimeout"
            ),
            (this.$2 = window.setTimeout(function () {
              a.$6();
            }, this.$1)))
          : (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
              d("DGWLoggingContext").DGWLoggingComponent.PINGER,
              "timeout_fired.disconnect"
            ),
            this.$5());
      };
      b.reset = function () {
        var a = this;
        this.$3 = !0;
        this.$2 &&
          (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            d("DGWLoggingContext").DGWLoggingComponent.PINGER,
            "reset"
          ),
          window.clearTimeout(this.$2),
          (this.$2 = null));
        this.$1 > 0 &&
          (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            d("DGWLoggingContext").DGWLoggingComponent.PINGER,
            "reset.newtimeout"
          ),
          (this.$2 = window.setTimeout(function () {
            a.$6();
          }, this.$1)));
      };
      b.cancel = function () {
        this.$2 &&
          (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            d("DGWLoggingContext").DGWLoggingComponent.PINGER,
            "canceled"
          ),
          window.clearTimeout(this.$2),
          (this.$2 = null));
      };
      return a;
    })();
    g.DGWPinger = a;
  },
  98
);
__d(
  "DGWStreamGroupCallbacks",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      TRANSPORT_SERVER_INTERNAL_ERROR: 0,
      TRANSPORT_ABNORMAL_CLOSURE: 1,
      TRANSPORT_GOING_AWAY: 2,
      TRANSPORT_UNKNOWN_ERROR: 3,
      TRANSPORT_KEEPALIVE_TIMEOUT: 4,
      TRANSPORT_UNAUTHORIZED: 5,
      TRANSPORT_REJECTED: 6,
      TRANSPORT_BAD_REQUEST: 7,
      TRANSPORT_DGW_SERVER_ERROR: 8,
    });
    c = (function () {
      function a() {}
      var b = a.prototype;
      b.onStreamGroupError = function () {};
      b.onStreamGroupMustDrain = function () {};
      b.onStreamGroupTransportClose = function () {};
      return a;
    })();
    f.DGWStreamGroupError = a;
    f.NoOpDGWStreamGroupCallbacks = c;
  },
  66
);
__d(
  "DGWTransportEvents",
  ["DGWLoggingContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$3 = a;
      }
      var b = a.prototype;
      b.transportEstablished = function () {
        this.$3.logEvent(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "open"
        ),
          (this.$2 = Date.now());
      };
      b.transportEstablishmentPending = function () {
        (this.$1 = Date.now()),
          this.$3.logEvent(
            d("DGWLoggingContext").DGWLoggingComponent
              .WEBSOCKET_TRANSPORT_COMPONENT,
            "transportPending",
            null,
            !0
          );
      };
      b.transportClosed = function (a, b) {
        (this.$4 = Date.now()),
          a
            ? (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                d("DGWLoggingContext").DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                "transport_close_graceful"
              ),
              this.$3.logEvent(
                d("DGWLoggingContext").DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                "Transport closed gracefully",
                null,
                !0
              ))
            : (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                d("DGWLoggingContext").DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                "transport_close_with_error"
              ),
              this.$3.logError(
                d("DGWLoggingContext").DGWLoggingComponent
                  .WEBSOCKET_TRANSPORT_COMPONENT,
                "Transport closed abnormally",
                b
              ));
      };
      b.transportEstablishmentFailure = function (a) {
        this.$3.logError(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "WebSocket transport establishment failure",
          "WebSocket close code: " + a
        );
      };
      b.streamEstablishmentTimeout = function (a, b) {
        this.$3.logError(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "Grouped Stream establishment timeout",
          a,
          "streamId:" + b
        );
      };
      b.streamEstablishmentPending = function (a) {
        this.$3.logEvent(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "Grouped Stream establishment pending",
          "streamId:" + a,
          !0
        );
      };
      b.streamEstablishmentSuccess = function (a) {
        this.$3.logEvent(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "Grouped Stream establishment success",
          "streamId:" + a,
          !0
        );
      };
      b.transportError = function (a, b, c) {
        this.$3.logError(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          a,
          b,
          c
        );
      };
      b.receivedFrameForInactiveStream = function (a, b, c) {
        this.$3.logWarn(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "Frame received for inactive stream",
          "frameType: " + a + ", streamID: " + b,
          c
        );
      };
      b.ranOutOfStreamIds = function (a) {
        this.$3.logWarn(
          d("DGWLoggingContext").DGWLoggingComponent
            .WEBSOCKET_TRANSPORT_COMPONENT,
          "Hit max StreamId limit",
          "Hit max StreamId limit",
          a
        );
      };
      return a;
    })();
    g.DGWTransportEvents = a;
  },
  98
);
__d(
  "DGWWebSocketTransport",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = new WebSocket(a);
      a.binaryType = "arraybuffer";
      a.onopen = function () {};
      a.onclose = function () {};
      a.onerror = function () {};
      return a;
    }
    f.getWebSocketConnection = a;
  },
  66
);
__d(
  "DGWAckManager",
  ["DGWLoggingContext", "Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      var b = a.prototype;
      b.stopTracking = function (a) {
        window.clearTimeout(this.$1), this.$3(a);
      };
      function a(a, b, c) {
        var d = this;
        this.$3 = c;
        this.sendId = a;
        this.$2 = b;
        this.handleAckReceived = function () {
          d.stopTracking(!0);
        };
        this.$1 = window.setTimeout(function () {
          d.stopTracking(!1);
        }, b);
      }
      return a;
    })();
    a = (function () {
      function a(a) {
        (this.$1 = new Map()), (this.$2 = a);
      }
      var c = a.prototype;
      c.waitForAck = function (a, c) {
        var e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                    d("DGWLoggingContext").DGWLoggingComponent
                      .ACK_MANAGER_COMPONENT,
                    "ack_expected"
                  );
                  e = this.$1;
                  g.prev = 2;
                  g.next = 5;
                  return b("regeneratorRuntime").awrap(
                    new (b("Promise"))(function (b, d) {
                      e.set(a, new h(a, c, b));
                    })
                  );
                case 5:
                  f = g.sent;
                  f === !0
                    ? this.$2.logEvent(
                        d("DGWLoggingContext").DGWLoggingComponent
                          .ACK_MANAGER_COMPONENT,
                        "Received ACK",
                        "sendId: " + a,
                        !0
                      )
                    : (d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                        d("DGWLoggingContext").DGWLoggingComponent
                          .ACK_MANAGER_COMPONENT,
                        "ack_timeout"
                      ),
                      this.$2.logWarn(
                        d("DGWLoggingContext").DGWLoggingComponent
                          .ACK_MANAGER_COMPONENT,
                        "ACK timeout",
                        "Request " + a + " timed out after " + c + "ms"
                      ));
                  e["delete"](a);
                  return g.abrupt("return", f);
                case 11:
                  g.prev = 11;
                  g.t0 = g["catch"](2);
                  e["delete"](a);
                  throw g.t0;
                case 15:
                case "end":
                  return g.stop();
              }
          },
          null,
          this,
          [[2, 11]]
        );
      };
      c.handleAckReceived = function (a) {
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
          "ack_received"
        );
        var b = this.$1.get(a);
        if (b === void 0) {
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
            "ack_received.not_tracked"
          );
          this.$2.logWarn(
            d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
            "untracked ACK",
            "Received ACK for ackId " + a + " which was not being tracked"
          );
          return;
        }
        b.handleAckReceived();
      };
      c.clearPendingAcks = function () {
        var a = this;
        this.$2.logEvent(
          d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
          "Clearing pending acks",
          "ACKs cleared size: " + this.$1.size
        );
        this.$1.forEach(function (b, c, e) {
          a.$2.logEvent(
            d("DGWLoggingContext").DGWLoggingComponent.ACK_MANAGER_COMPONENT,
            "Clearing pending ACK with ackId " + b.sendId,
            null,
            !0
          ),
            b.stopTracking(!1),
            e["delete"](c);
        });
      };
      return a;
    })();
    g.DGWAckManager = a;
  },
  98
);
__d(
  "DGWStreamEvents",
  ["DGWLoggingContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$4 = new Map()),
          (this.$5 = new Map()),
          (this.$6 = a),
          (this.$1 = b),
          c != null && (this.$8 = "streamId:" + c + "::");
      }
      var b = a.prototype;
      b.streamEstablished = function () {
        this.$6.logEvent(this.$1, "open", this.$8, !0),
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            this.$1,
            "stream_establishment_success"
          );
      };
      b.streamEstablishmentPending = function () {
        (this.$2 = Date.now()),
          this.$6.logEvent(this.$1, "streamPending", this.$8, !0),
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            this.$1,
            "stream_establishment_pending"
          );
      };
      b.dataSent = function (a, b, c) {
        var d = c ? "sendWithAckRequested" : "sendWithoutAckRequested";
        this.$6.logEvent(
          this.$1,
          d,
          ((d = this.$8) != null ? d : "") +
            "sendId:" +
            a +
            ", payloadSize:" +
            b,
          !0
        );
        this.$4.set(a, {
          ackRequested: c,
          payloadSize: b,
          sendTimestamp: Date.now(),
        });
      };
      b.ackReceived = function (a) {
        var b;
        this.$6.logEvent(
          this.$1,
          "AckReceived",
          ((b = this.$8) != null ? b : "") + "sendId:" + a + "}",
          !0
        );
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "ack_received"
        );
        b = this.$4.get(a);
        b != null && (b.ackReceivedTimestamp = Date.now());
      };
      b.ackSent = function (a) {
        var b;
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "ack_sent"
        );
        this.$6.logEvent(
          this.$1,
          "ACK sent",
          ((b = this.$8) != null ? b : "") + "ackId: " + a,
          !0
        );
      };
      b.drainSent = function (a) {
        var b;
        this.$6.logEvent(
          this.$1,
          "Drain sent",
          ((b = this.$8) != null ? b : "") + "drainReason: " + a
        );
      };
      b.dataReceived = function (a, b, c) {
        var e;
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "data_received"
        );
        this.$6.logEvent(
          this.$1,
          "Data received",
          ((e = this.$8) != null ? e : "") +
            "sendId: " +
            ((e = c) != null ? e : "null") +
            ", ackRequested: " +
            b.toString() +
            ", payloadSize: " +
            a,
          !0
        );
        c != null &&
          this.$5.set(c, {
            ackRequested: b,
            payloadSize: a,
            receiveTimestamp: Date.now(),
          });
      };
      b.endOfDataReceived = function () {
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "end_of_data_received"
        ),
          this.$6.logEvent(this.$1, "EndOfDataReceived", this.$8, !0);
      };
      b.endOfDataSent = function () {
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "end_of_data_sent"
        ),
          this.$6.logEvent(this.$1, "EndOfDataSent", this.$8, !0);
      };
      b.streamClosed = function (a, b) {
        this.$7 = Date.now();
        var c = this.$9();
        if (a) {
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            this.$1,
            "stream_closed_gracefully"
          );
          this.$6.logEvent(
            this.$1,
            "Stream closed gracefully",
            "" + ((a = this.$8) != null ? a : "") + c
          );
        } else {
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            this.$1,
            "stream_closed_with_error"
          );
          this.$6.logError(
            this.$1,
            "Stream closed abnormally",
            b,
            "" + ((a = this.$8) != null ? a : "") + c
          );
        }
      };
      b.connectionEstablishmentFailure = function (a) {
        this.$6.logEvent(
          this.$1,
          "WebSocket connection establishment failure",
          "WebSocket close code: " + a
        );
      };
      b.streamEstablishmentFailure = function (a, b) {
        this.$6.logError(
          this.$1,
          "Failed to establish DGW Stream",
          "Last seen error: " + a.toString(),
          "" + ((a = this.$8) != null ? a : "") + b
        );
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          this.$1,
          "stream_establishment_failure"
        );
      };
      b.error = function (a, b) {
        b = { msg: b, state: this.$9() };
        this.$6.logError(this.$1, a, JSON.stringify(b), this.$8);
      };
      b.$9 = function () {
        var a = {
          currentNetworkCondition:
            window.navigator && window.navigator.onLine === !0,
          establishRequestTimestamp: this.$2,
          establishedTimestamp: this.$3,
          streamClosedTimestamp: this.$7,
          sendHistory: JSON.stringify(Array.from(this.$4.entries())),
          receiveHistory: JSON.stringify(Array.from(this.$5.entries())),
        };
        return JSON.stringify(a);
      };
      return a;
    })();
    g.DGWStreamEvents = a;
  },
  98
);
__d(
  "GroupedStream",
  [
    "DGWAckManager",
    "DGWConstants",
    "DGWLoggingContext",
    "DGWStream",
    "DGWStreamEvents",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c, e, f, g, h) {
        (this.$1 = a),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = b),
          (this.$7 = c),
          (this.$8 = e),
          (this.$2 = g),
          (this.$9 = f),
          (this.$10 = new (d("DGWAckManager").DGWAckManager)(this.$9)),
          (this.$12 = new (d("DGWStreamEvents").DGWStreamEvents)(
            this.$9,
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            this.$1
          )),
          (this.$11 = 0),
          (this.$13 = h);
      }
      var c = a.prototype;
      c.send = function (a, c) {
        var e, f, g;
        return b("regeneratorRuntime").async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  f = this.$11++ % d("DGWConstants").MAX_ACK_ID;
                  if (this.$14(a, !0, f)) {
                    h.next = 3;
                    break;
                  }
                  return h.abrupt("return", !1);
                case 3:
                  h.next = 5;
                  return b("regeneratorRuntime").awrap(
                    this.$10.waitForAck(
                      f,
                      (e = c) != null
                        ? e
                        : d("DGWConstants").DEFAULT_ACK_TIMEOUT_MS
                    )
                  );
                case 5:
                  g = h.sent;
                  return h.abrupt("return", g);
                case 7:
                case "end":
                  return h.stop();
              }
          },
          null,
          this
        );
      };
      c.sendAndForget = function (a) {
        return this.$14(a, !1);
      };
      c.close = function () {
        var a = this.$2.encodeEndOfData(this.$1);
        if (a == null) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to encode EndOfData",
            "streamId: " + this.$1
          );
          return;
        }
        a = this.$8.send(a);
        if (!a) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to send EndOfData",
            "streamId: " +
              this.$1 +
              ". StreamGroupTransport not open during send"
          );
          return;
        }
        this.$12.endOfDataSent();
        this.$5 = !0;
        this.$4 && this.$15();
      };
      c.__sendDrain = function (a) {
        var b = d("DGWConstants").drainReasonToDrainReasonString(a);
        if (this.$5) return !1;
        a = this.$2.encodeDrain(a);
        if (a == null) return !1;
        this.$12.drainSent(b);
        b = this.$8.send(a);
        return b;
      };
      c.__transportCloseHook = function (a) {
        this.$13(),
          this.$10.clearPendingAcks(),
          a
            ? (this.$12.error("Received StreamError", "StreamErrorType: " + a),
              this.$6.onError(a))
            : this.$5 && this.$4
            ? this.$15()
            : (this.$12.streamClosed(
                !1,
                "Stream closed: ClosedLocally: " +
                  this.$5.toString() +
                  ", EndOfDataReceived: " +
                  this.$4.toString()
              ),
              this.$6.onError(d("DGWStream").StreamError.PREMATURE_CLOSE));
      };
      c.$15 = function () {
        this.$13(),
          this.$12.streamClosed(!0, "Graceful close"),
          this.$6.onClose(this);
      };
      c.__dataReceivedHook = function (a, b) {
        this.$12.dataReceived(a.length, b != null, b),
          b != null && this.$16(b),
          this.$6.onDataReceived(a);
      };
      c.__ackReceivedHook = function (a) {
        this.$12.ackReceived(a), this.$10.handleAckReceived(a);
      };
      c.__drainReceivedHook = function (a) {
        this.$3 === !1 && (this.$6.onStreamMustDrain(this, a), (this.$3 = !0));
      };
      c.__endOfDataHook = function () {
        this.$12.endOfDataReceived(),
          (this.$4 = !0),
          this.$5 ? this.$15() : this.$6.onServerHasFinishedSendingData(this);
      };
      c.$14 = function (a, b, c) {
        b === void 0 && (b = !1);
        c === void 0 && (c = 0);
        if (this.$5) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to send data",
            "Stream closed locally"
          );
          return !1;
        }
        a = this.$2.encodeData(a, b, c, this.$1);
        if (a == null) return !1;
        var e = this.$8.send(a);
        if (!e) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to send data",
            "ClosedLocally: " + this.$5.toString()
          );
          return !1;
        }
        this.$12.dataSent(c, a.length, b);
        return !0;
      };
      c.$16 = function (a) {
        var b = this.$2.encodeAck(a, this.$1);
        if (b == null) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to encode ACK",
            "ackId: " + a
          );
          return !1;
        }
        b = this.$8.send(b);
        if (!b) {
          this.$9.logError(
            d("DGWLoggingContext").DGWLoggingComponent.GROUPED_STREAM_COMPONENT,
            "Failed to send ACK",
            "ackId: " + a
          );
          return !1;
        }
        this.$12.ackSent(a);
        return !0;
      };
      return a;
    })();
    g.GroupedStream = a;
  },
  98
);
__d(
  "StreamIdGenerator",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 65535;
    a = (function () {
      function a() {
        (this.$1 = new Set()), (this.$2 = 0), this.$1.add(this.$2);
      }
      var b = a.prototype;
      b.getNextStreamId = function () {
        var a;
        if (!this.streamIdAvailable())
          throw c("err")("Max number of stream IDs reached");
        if (this.$1.size === 0) return ++this.$2;
        a = (a = this.$1.values().next().value) != null ? a : 0;
        this.$1["delete"](a);
        return a;
      };
      b.putBackStreamId = function (a) {
        this.$1.add(a);
      };
      b.streamIdAvailable = function () {
        return this.$1.size > 0 || this.$2 < h;
      };
      return a;
    })();
    g.MAX_STREAM_ID = h;
    g.StreamIdGeneratorImpl = a;
  },
  98
);
__d(
  "StreamGroupWebSocketTransport",
  [
    "DGWConstants",
    "DGWExponentialBackoff",
    "DGWLoggingContext",
    "DGWPinger",
    "DGWStream",
    "DGWStreamGroupCallbacks",
    "DGWTransportEvents",
    "DGWUtils",
    "DGWWebSocketTransport",
    "GroupedStream",
    "Promise",
    "StreamIdGenerator",
    "err",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a, b, c, e, f) {
      var g = this;
      this.groupedStream = a;
      this.$1 = window.setTimeout(function () {
        c(d("DGWStream").StreamError.ESTABLISHMENT_TIMEOUT);
      }, e);
      this.handleEstablishFrameReceived = function () {
        window.clearTimeout(g.$1), b(g.groupedStream);
      };
      this.abortStream = function (a) {
        f(), c(a);
      };
    };
    a = (function () {
      function a(b, e, f, g, h, i, j, k) {
        var l = this;
        this.$14 = h;
        this.$16 = this.__getStreamIdGenerator();
        this.$5 = new Map();
        this.$6 = new Map();
        this.$7 = g.keepAliveMs;
        this.$8 = !1;
        this.$3 = !0;
        this.$4 = !1;
        this.$12 = f;
        this.$10 = new TextEncoder();
        this.$11 = new TextDecoder();
        this.$13 = g;
        h = {
          onDataReceived: function () {},
          handleAckReceived: function () {},
          receivedDrainSignal: function (a) {
            l.$13.streamGroupCallbacks.onStreamGroupMustDrain(a),
              l.$5.forEach(function (b) {
                b.__drainReceivedHook(a);
              });
          },
          onGroupedStreamDataReceived: function (a, b, c) {
            if (l.$5.has(a)) {
              var d = l.$5.get(a);
              d == null ? void 0 : d.__dataReceivedHook(b, c);
            } else {
              l.$12.receivedFrameForInactiveStream(
                "Data",
                a,
                "sendAckID: " + ((d = c) != null ? d : "null")
              );
            }
          },
          onGroupedStreamAckReceived: function (a, b) {
            if (l.$5.has(a)) {
              var c = l.$5.get(a);
              c == null ? void 0 : c.__ackReceivedHook(b);
            } else {
              l.$12.receivedFrameForInactiveStream(
                "ACK",
                a,
                "ackId: " + ((c = b) != null ? c : "null")
              );
            }
          },
          onGroupedStreamEndOfDataReceived: function (a) {
            if (l.$5.has(a)) {
              var b = l.$5.get(a);
              b == null ? void 0 : b.__endOfDataHook();
            } else l.$12.receivedFrameForInactiveStream("EndOfData", a);
          },
          onGroupedStreamEstablishStreamReceived: function (a, b) {
            if (l.$6.has(a)) {
              var c = l.$6.get(a);
              l.$6["delete"](a);
              b = JSON.parse(l.$11.decode(b));
              (b.code === void 0 || b.code !== 200) &&
                (c == null
                  ? void 0
                  : c.abortStream(d("DGWStream").StreamError.ABNORMAL_CLOSURE));
              c == null ? void 0 : c.handleEstablishFrameReceived();
            } else
              l.$12.receivedFrameForInactiveStream(
                "EstablishStream",
                a,
                "EstablishStream received for non-inflight stream"
              );
          },
          onPingReceived: function () {
            var a = l.$2.encodePing();
            if (a == null) return;
            l.send(a);
          },
          onPongReceived: function () {},
        };
        this.$2 = new (d("DGWUtils").DGWCodec)(i, h, g.dgwVersion);
        if (g.enableFirstStreamOnWsHandshake) {
          if (j === void 0) throw c("err")("Missing grouped stream options");
          if (k === void 0) throw c("err")("Missing grouped stream callbacks");
          var m = this.$16.getNextStreamId();
          f = this.createEstablishStreamFrame(m, j);
          i = d("DGWUtils").DGWUtils.constructConnectUrl({
            appId: g.appId,
            appVersion: g.appVersion,
            authType: g.authType,
            dgwVersion: g.dgwVersion,
            fbId: g.fbId,
            tier: g.tier,
            loggingId: (i = g.loggingId) != null ? i : void 0,
            headers: a.__prefixAppHeaders(g.headers),
            endpoint: g.connectEndpoint,
            serviceId: g.serviceId,
            regionHint: (h = g.regionHint) != null ? h : void 0,
            establishStreamFrame: f,
          });
          this.$1 = e(i);
          if (
            !i.includes(
              d("DGWConstants").HEADER_CONSTANTS
                .HEADER_ESTABLISH_STREAM_FRAME_BASE64
            )
          )
            return;
          this.$15 = this.waitForEstablishStream(
            m,
            k,
            j,
            new (d("DGWLoggingContext").DGWLoggingContext)(
              this.$13.dgwVersion,
              j.loggingId,
              this.$13.serviceId,
              this.$13.fbId,
              this.$13.loggingId,
              j.disableFalcoLogging
            ),
            function (a) {
              l.$5.set(m, a);
            },
            function () {
              l.$16.putBackStreamId(m);
            }
          );
        } else this.$1 = e(b);
      }
      var e = a.prototype;
      e.send = function (a) {
        try {
          this.$1.send(a);
          return !0;
        } catch (a) {
          this.$12.transportError(
            "Failed to send over transport",
            "readyState: " + this.$1.readyState,
            a.toString()
          );
          return !1;
        }
      };
      e.close = function () {
        this.$1.close(d("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE);
      };
      e.abort = function (a, b, c, d) {
        (this.$8 = !0),
          this.$12.transportClosed(!1, d),
          this.$5.forEach(function (a) {
            a.__transportCloseHook(b);
          }),
          this.$6.forEach(function (a) {
            a.abortStream(b);
          }),
          this.$13.streamGroupCallbacks.onStreamGroupError(a),
          this.$5.clear(),
          this.$6.clear(),
          this.$1.close(c);
      };
      a.getTransportWithInitialStream = function (c, e, f, g, h) {
        var i, j, k, l;
        return b("regeneratorRuntime").async(
          function (m) {
            while (1)
              switch ((m.prev = m.next)) {
                case 0:
                  m.next = 2;
                  return b("regeneratorRuntime").awrap(
                    d("DGWUtils").DGWCodec.initialize()
                  );
                case 2:
                  i = new (d("DGWTransportEvents").DGWTransportEvents)(g);
                  i.transportEstablishmentPending();
                  j = function () {
                    return a.$17("", f, i, h, g, c, e);
                  };
                  m.prev = 5;
                  m.next = 8;
                  return b("regeneratorRuntime").awrap(
                    d("DGWExponentialBackoff").callWithExponentialBackoff(j)
                  );
                case 8:
                  k = m.sent;
                  l =
                    k.$15 != null
                      ? k.$15
                      : k.establishGroupedStream(
                          e,
                          c,
                          new (d("DGWLoggingContext").DGWLoggingContext)(
                            f.dgwVersion,
                            c.loggingId,
                            f.serviceId,
                            f.fbId,
                            f.loggingId,
                            c.disableFalcoLogging
                          )
                        );
                  return m.abrupt("return", { transport: k, streamPromise: l });
                case 13:
                  m.prev = 13;
                  m.t0 = m["catch"](5);
                  throw m.t0;
                case 16:
                case "end":
                  return m.stop();
              }
          },
          null,
          this,
          [[5, 13]]
        );
      };
      a.getTransport_DEPRECATED = function (c, e, f, g) {
        var h, i;
        return b("regeneratorRuntime").async(
          function (j) {
            while (1)
              switch ((j.prev = j.next)) {
                case 0:
                  j.next = 2;
                  return b("regeneratorRuntime").awrap(
                    d("DGWUtils").DGWCodec.initialize()
                  );
                case 2:
                  h = new (d("DGWTransportEvents").DGWTransportEvents)(f);
                  h.transportEstablishmentPending();
                  i = function () {
                    return a.$17(c, e, h, g, f);
                  };
                  j.prev = 5;
                  j.next = 8;
                  return b("regeneratorRuntime").awrap(
                    d("DGWExponentialBackoff").callWithExponentialBackoff(i)
                  );
                case 8:
                  return j.abrupt("return", j.sent);
                case 11:
                  j.prev = 11;
                  j.t0 = j["catch"](5);
                  throw j.t0;
                case 14:
                case "end":
                  return j.stop();
              }
          },
          null,
          this,
          [[5, 11]]
        );
      };
      e.establishGroupedStream = function (a, d, e) {
        var f = this,
          g,
          h,
          i,
          j;
        return b("regeneratorRuntime").async(
          function (k) {
            while (1)
              switch ((k.prev = k.next)) {
                case 0:
                  g = this.getStreamId();
                  h = this.createEstablishStreamFrame(g, d);
                  i = this.waitForEstablishStream(
                    g,
                    a,
                    d,
                    e,
                    function (a) {
                      f.$5.set(g, a);
                    },
                    function () {
                      f.$16.putBackStreamId(g);
                    }
                  );
                  if (this.send(h)) {
                    k.next = 5;
                    break;
                  }
                  throw c("err")(
                    "Websocket connection closed before stream established"
                  );
                case 5:
                  k.next = 7;
                  return b("regeneratorRuntime").awrap(i);
                case 7:
                  j = k.sent;
                  return k.abrupt("return", j);
                case 9:
                case "end":
                  return k.stop();
              }
          },
          null,
          this
        );
      };
      a.__prefixAppHeaders = function (a) {
        return Object.keys(a).reduce(function (b, c) {
          b["" + d("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + c] =
            a[c];
          return b;
        }, {});
      };
      e.waitForEstablishStream = function (a, c, d, e, f, g) {
        var i = this,
          j,
          k;
        return b("regeneratorRuntime").async(
          function (l) {
            while (1)
              switch ((l.prev = l.next)) {
                case 0:
                  this.$12.streamEstablishmentPending(a);
                  j = this.__createGroupedStream(a, c, d, e);
                  l.prev = 2;
                  l.next = 5;
                  return b("regeneratorRuntime").awrap(
                    new (b("Promise"))(function (b, c) {
                      i.$6.set(
                        a,
                        new h(j, b, c, 3e4, function () {
                          i.streamEndCallback(a);
                        })
                      );
                    })
                  );
                case 5:
                  k = l.sent;
                  f(j);
                  this.$12.streamEstablishmentSuccess(a);
                  return l.abrupt("return", k);
                case 11:
                  l.prev = 11;
                  l.t0 = l["catch"](2);
                  g();
                  this.$12.streamEstablishmentTimeout(
                    "Stream establishment timeout",
                    a
                  );
                  throw l.t0;
                case 16:
                case "end":
                  return l.stop();
              }
          },
          null,
          this,
          [[2, 11]]
        );
      };
      a.$17 = function (c, e, f, g, h, i, j) {
        var k, l;
        return b("regeneratorRuntime").async(
          function (m) {
            while (1)
              switch ((m.prev = m.next)) {
                case 0:
                  k = new a(
                    c,
                    d("DGWWebSocketTransport").getWebSocketConnection,
                    f,
                    e,
                    g,
                    h,
                    i,
                    j
                  );
                  k.$1.onmessage = a.$18(k);
                  k.$1.onopen = function () {
                    f.transportEstablished(),
                      (k.$3 = !1),
                      k.$7 != null &&
                        (k.$9 = new (d("DGWPinger").DGWPinger)(
                          k.$7,
                          function () {
                            k.$19();
                          },
                          function () {
                            k.abort(
                              d("DGWStreamGroupCallbacks").DGWStreamGroupError
                                .TRANSPORT_KEEPALIVE_TIMEOUT,
                              d("DGWStream").StreamError.KEEPALIVE_TIMEOUT,
                              d("DGWConstants").WebsocketCloseCodes
                                .KEEPALIVE_TIMEOUT,
                              "Aborting transport because of keepalive timeout"
                            );
                          }
                        ));
                  };
                  k.$1.onerror = function () {};
                  k.$1.onclose = a.$20(k);
                  m.next = 7;
                  return b("regeneratorRuntime").awrap(
                    a.getTransportPromise(k)
                  );
                case 7:
                  l = m.sent;
                  return m.abrupt("return", l);
                case 9:
                case "end":
                  return m.stop();
              }
          },
          null,
          this
        );
      };
      a.getTransportPromise = function (a) {
        var c;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  e.next = 2;
                  return b("regeneratorRuntime").awrap(
                    new (b("Promise"))(function (b, c) {
                      var e = a.$1.onerror,
                        f = a.$1.onopen;
                      a.$1.onerror = function () {
                        e(), c(d("DGWStream").StreamError.ESTABLISHMENT_ERROR);
                      };
                      a.$1.onopen = function () {
                        f(), b(a);
                      };
                    })
                  );
                case 2:
                  c = e.sent;
                  return e.abrupt("return", c);
                case 4:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      a.$18 = function (a) {
        return function (b) {
          var c;
          (c = a.$9) == null ? void 0 : c.reset();
          if (!(b.data instanceof ArrayBuffer)) {
            a.$12.transportError(
              "Incorrect Data Protocol",
              "Received " + typeof b.data + " instead of ArrayBuffer"
            );
            return;
          }
          a.$2.append(new Uint8Array(b.data));
          a.$2.processData();
        };
      };
      a.$20 = function (a) {
        return function (b) {
          var c;
          (c = a.$9) == null ? void 0 : c.cancel();
          if (a.$8 === !0 || a.$4) return;
          if (a.$3 === !0) {
            a.$12.transportEstablishmentFailure(b.code);
            a.$5.clear();
            return;
          }
          a.$14();
          a.$3 = !0;
          if (b.code !== d("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE) {
            a.$12.transportClosed(
              !1,
              "Websocket connection failure with code " + b.code
            );
            c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
              .TRANSPORT_UNKNOWN_ERROR;
            var e = d("DGWStream").StreamError.UNKNOWN_ERROR;
            switch (b.code) {
              case d("DGWConstants").WebsocketCloseCodes.NORMAL_CLOSURE:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_ABNORMAL_CLOSURE;
                e = d("DGWStream").StreamError.ABNORMAL_CLOSURE;
                break;
              case d("DGWConstants").WebsocketCloseCodes.ABNORMAL_CLOSURE:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_ABNORMAL_CLOSURE;
                e = d("DGWStream").StreamError.ABNORMAL_CLOSURE;
                break;
              case d("DGWConstants").WebsocketCloseCodes.SERVER_INTERNAL_ERROR:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_SERVER_INTERNAL_ERROR;
                e = d("DGWStream").StreamError.SERVER_INTERNAL_ERROR;
                break;
              case d("DGWConstants").WebsocketCloseCodes.GOING_AWAY:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_GOING_AWAY;
                e = d("DGWStream").StreamError.GOING_AWAY;
                break;
              case d("DGWConstants").WebsocketCloseCodes.UNAUTHORIZED:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_UNAUTHORIZED;
                e = d("DGWStream").StreamError.UNAUTHORIZED;
                break;
              case d("DGWConstants").WebsocketCloseCodes.REJECTED:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_REJECTED;
                e = d("DGWStream").StreamError.REJECTED;
                break;
              case d("DGWConstants").WebsocketCloseCodes.BAD_REQUEST:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_BAD_REQUEST;
                e = d("DGWStream").StreamError.BAD_REQUEST;
                break;
              case d("DGWConstants").WebsocketCloseCodes.DGW_SERVER_ERROR:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_SERVER_INTERNAL_ERROR;
                e = d("DGWStream").StreamError.DGW_SERVER_ERROR;
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_DGW_SERVER_ERROR;
                break;
              default:
                c = d("DGWStreamGroupCallbacks").DGWStreamGroupError
                  .TRANSPORT_UNKNOWN_ERROR;
                e = d("DGWStream").StreamError.UNKNOWN_ERROR;
                break;
            }
            a.$13.streamGroupCallbacks.onStreamGroupError(c);
            a.$5.forEach(function (a) {
              a.__transportCloseHook(e);
            });
            a.$6.forEach(function (a) {
              a.abortStream(e);
            });
          } else
            a.$12.transportClosed(!0, ""),
              a.$13.streamGroupCallbacks.onStreamGroupTransportClose(),
              a.$5.forEach(function (a) {
                a.__transportCloseHook();
              }),
              a.$6.forEach(function (a) {
                a.abortStream(
                  d("DGWStream").StreamError.TRANSPORT_CLOSED_BEFORE_STREAM_INIT
                );
              });
          a.$5.clear();
          a.$6.clear();
        };
      };
      e.$19 = function () {
        var a = this.$2.encodePing();
        if (a == null) throw c("err")("Failed to encode Ping Frame");
        this.send(a);
      };
      e.isClosedLocally = function () {
        return this.$3 || this.$8 || this.$4;
      };
      e.streamEndCallback = function (a) {
        this.$5["delete"](a),
          this.$6["delete"](a),
          this.$16.putBackStreamId(a),
          this.$5.size === 0 &&
            this.$6.size === 0 &&
            (this.$13.streamGroupCallbacks.onStreamGroupTransportClose(),
            (this.$4 = !0),
            this.close());
      };
      e.canCreateGroupedStream = function () {
        return this.$16.streamIdAvailable();
      };
      e.createEstablishStreamFrame = function (b, d) {
        d = this.$2.encodeEstablishStream(
          b,
          new Uint8Array(
            this.$10.encode(
              JSON.stringify(a.__prefixAppHeaders(d.groupedStreamHeaders))
            )
          )
        );
        if (d == null) {
          this.$16.putBackStreamId(b);
          throw c("err")("Failed to encode EstablishStreamFrame");
        }
        return d;
      };
      e.getStreamId = function () {
        try {
          return this.$16.getNextStreamId();
        } catch (a) {
          this.$12.ranOutOfStreamIds(
            "inFlightGroupedStreamSize: " +
              this.$6.size +
              " groupedStreamSize: " +
              this.$5.size
          );
          throw a;
        }
      };
      e.__createGroupedStream = function (a, b, c, e) {
        var f = this;
        return new (d("GroupedStream").GroupedStream)(
          a,
          b,
          c,
          this,
          e,
          this.$2,
          function () {
            f.streamEndCallback(a);
          }
        );
      };
      e.__getStreamIdGenerator = function () {
        return new (d("StreamIdGenerator").StreamIdGeneratorImpl)();
      };
      return a;
    })();
    g.StreamGroupWebSocketTransport = a;
  },
  98
);
__d(
  "StreamGroup",
  [
    "DGWConstants",
    "DGWLoggingContext",
    "DGWUtils",
    "StreamGroupWebSocketTransport",
    "qex",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f, g, h, i, j, k) {
        this.$2 = k;
        this.$1 = k.getNewStreamGroupId();
        k = (k = i.overrideUrl) != null ? k : g;
        this.$6 = null;
        this.$3 = {
          appId: a,
          appVersion: b,
          authType: e,
          dgwVersion: f,
          headers: i.streamGroupAppHeaders,
          tier:
            (g = i.serviceTier) != null
              ? g
              : d("DGWConstants").DEFAULT_SERVICE_TIER,
          connectEndpoint: k,
          fbId: h,
          loggingId: i.loggingId,
          serviceId: i.serviceId,
          streamGroupCallbacks: j,
          keepAliveMs: i.keepAliveMs,
          regionHint: i.regionHint,
          enableFirstStreamOnWsHandshake: c("qex")._("633") === !0,
        };
        this.$4 = i;
        this.$5 = new (d("DGWLoggingContext").DGWLoggingContext)(
          this.$3.dgwVersion,
          null,
          this.$3.serviceId,
          this.$3.fbId,
          this.$4.loggingId
        );
      }
      var e = a.prototype;
      e.establishStream = function (a, c) {
        var e = this,
          f,
          g,
          h,
          i,
          j;
        return b("regeneratorRuntime").async(
          function (k) {
            while (1)
              switch ((k.prev = k.next)) {
                case 0:
                  if (!(this.$2.containsStreamGroup(this.$1) === !1)) {
                    k.next = 23;
                    break;
                  }
                  if (this.$3.enableFirstStreamOnWsHandshake) {
                    k.next = 18;
                    break;
                  }
                  h = d("DGWUtils").DGWUtils.constructConnectUrl({
                    appId: this.$3.appId,
                    appVersion: this.$3.appVersion,
                    authType: this.$3.authType,
                    dgwVersion: this.$3.dgwVersion,
                    fbId: this.$3.fbId,
                    headers: babelHelpers["extends"]({}, this.$3.headers),
                    loggingId: (f = this.$3.loggingId) != null ? f : void 0,
                    tier: this.$3.tier,
                    serviceId: this.$3.serviceId,
                    endpoint: this.$3.connectEndpoint,
                    regionHint: (g = this.$3.regionHint) != null ? g : void 0,
                  });
                  this.$6 =
                    this.$6 ||
                    d(
                      "StreamGroupWebSocketTransport"
                    ).StreamGroupWebSocketTransport.getTransport_DEPRECATED(
                      h,
                      this.$3,
                      this.$5,
                      function () {
                        e.$2.removeStreamGroupAndTransport(e.$1);
                      }
                    );
                  k.prev = 4;
                  k.next = 7;
                  return b("regeneratorRuntime").awrap(this.$6);
                case 7:
                  i = k.sent;
                  this.$6 = null;
                  k.next = 15;
                  break;
                case 11:
                  k.prev = 11;
                  k.t0 = k["catch"](4);
                  this.$6 = null;
                  throw k.t0;
                case 15:
                  this.$2.containsStreamGroup(this.$1) ||
                    this.$2.setStreamGroupAndTransport(this.$1, i);
                  k.next = 23;
                  break;
                case 18:
                  k.next = 20;
                  return b("regeneratorRuntime").awrap(
                    d(
                      "StreamGroupWebSocketTransport"
                    ).StreamGroupWebSocketTransport.getTransportWithInitialStream(
                      a,
                      c,
                      this.$3,
                      this.$5,
                      function () {
                        e.$2.removeStreamGroupAndTransport(e.$1);
                      }
                    )
                  );
                case 20:
                  j = k.sent;
                  this.$2.setStreamGroupAndTransport(this.$1, j.transport);
                  return k.abrupt("return", j.streamPromise);
                case 23:
                  return k.abrupt(
                    "return",
                    this.establishStreamWithTransport(a, c)
                  );
                case 24:
                case "end":
                  return k.stop();
              }
          },
          null,
          this,
          [[4, 11]]
        );
      };
      e.establishStreamWithTransport = function (a, c) {
        var e, f, g;
        return b("regeneratorRuntime").async(
          function (h) {
            while (1)
              switch ((h.prev = h.next)) {
                case 0:
                  f = a.loggingId;
                  this.$5.logEvent(
                    d("DGWLoggingContext").DGWLoggingComponent
                      .STREAM_GROUP_COMPONENT,
                    "establishing Stream loggingId: " +
                      ((e = f) != null ? e : ""),
                    null,
                    !0
                  );
                  h.next = 4;
                  return b("regeneratorRuntime").awrap(
                    this.$2
                      .getStreamGroupTransport(this.$1)
                      .establishGroupedStream(
                        c,
                        a,
                        new (d("DGWLoggingContext").DGWLoggingContext)(
                          this.$3.dgwVersion,
                          f,
                          this.$3.serviceId,
                          this.$3.fbId,
                          this.$3.loggingId,
                          a.disableFalcoLogging
                        )
                      )
                  );
                case 4:
                  g = h.sent;
                  return h.abrupt("return", g);
                case 6:
                case "end":
                  return h.stop();
              }
          },
          null,
          this
        );
      };
      e.canCreateGroupedStream = function () {
        var a = !0;
        if (this.$2.containsStreamGroup(this.$1) !== !1) {
          var b = this.$2.getStreamGroupTransport(this.$1);
          a = b.canCreateGroupedStream();
        }
        d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
          d("DGWLoggingContext").DGWLoggingComponent.STREAM_GROUP_COMPONENT,
          a ? "can_create" : "cannot_create"
        );
        return a;
      };
      return a;
    })();
    g.StreamGroup = a;
  },
  98
);
__d(
  "StreamGroupRegistry",
  ["Random", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Set());
      }
      var b = a.prototype;
      b.setStreamGroupAndTransport = function (a, b) {
        this.$1.set(a, b);
      };
      b.containsStreamGroup = function (a) {
        return this.$1.has(a);
      };
      b.removeStreamGroupAndTransport = function (a) {
        this.$1["delete"](a);
      };
      b.getStreamGroupTransport = function (a) {
        a = this.$1.get(a);
        if (a == null) throw c("err")("No stream group transport");
        return a;
      };
      b.getNewStreamGroupId = function () {
        var a = d("Random").uint32();
        while (this.$2.has(a)) a = d("Random").uint32();
        this.$2.add(a);
        return a;
      };
      return a;
    })();
    g.StreamGroupRegistry = a;
  },
  98
);
__d(
  "RawDGWClient",
  [
    "CurrentUser",
    "DGWLoggingContext",
    "DGWStream",
    "StreamGroup",
    "StreamGroupRegistry",
    "isFastRefreshEnabledForCurrentDomain",
    "justknobx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = a.appId,
          c = a.appVersion,
          e = a.authType,
          f = a.dgwVersion,
          g = a.endpoint;
        a = a.fbId;
        this.$1 = b;
        this.$2 = c;
        this.$3 = e;
        this.$4 = f;
        this.$5 = g;
        this.$6 = a;
        this.$7 = new (d("StreamGroupRegistry").StreamGroupRegistry)();
      }
      var b = a.prototype;
      b.createStreamGroup = function (a, b) {
        c("justknobx")._("1023") && this.handleUserChecks();
        return new (d("StreamGroup").StreamGroup)(
          this.$1,
          this.$2,
          this.$3,
          this.$4,
          this.$5,
          this.$6,
          b,
          a,
          this.$7
        );
      };
      b.handleUserChecks = function () {
        if (
          !c("CurrentUser").isLoggedInNow() &&
          !c("isFastRefreshEnabledForCurrentDomain")()
        ) {
          d("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
            d("DGWLoggingContext").DGWLoggingComponent.RAW_CLIENT,
            "unauthenticated"
          );
          throw d("DGWStream").StreamError.UNAUTHENTICATED;
        }
      };
      return a;
    })();
    g.RawDGWClient = a;
  },
  98
);
__d(
  "DGWClient",
  ["DGWAuth", "DGWEnvUtil", "DGWWebConfig", "RawDGWClient", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (d("RawDGWClient").RawDGWClient)({
      appId: c("DGWWebConfig").appId,
      appVersion: c("DGWWebConfig").appVersion,
      authType: d("DGWAuth").fromStringToDGWAuth(
        c("DGWEnvUtil").getDGWAuthType()
      ),
      dgwVersion: c("DGWEnvUtil").getDGWVersion(),
      endpoint: c("DGWEnvUtil").getDGWEndpoint(),
      fbId: c("DGWWebConfig").fbId,
    });
    function a() {
      if (c("DGWEnvUtil").isDGWEnvCompatible()) return h;
      else throw c("err")("unsupported_environment_retry_with_mqtt");
    }
    g["default"] = a;
  },
  98
);
__d(
  "DGWStreamGroupHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.onStreamGroupError = function (a) {
        this.$1(a);
      };
      b.onStreamGroupMustDrain = function (a) {
        this.$2(a);
      };
      b.onStreamGroupTransportClose = function () {
        this.$3();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "DGWStreamFactory",
  ["DGWClient", "DGWStreamGroupHandler", "Promise", "gkx", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "realtime",
      i = 1e4,
      j = null;
    a = (function () {
      function a() {
        (this.$3 = 0),
          (this.$1 = null),
          c("gkx")("2819") && (this.$2 = c("uuid")());
      }
      a.get = function () {
        j == null && (j = new a());
        return j;
      };
      var d = a.prototype;
      d.getStreamGroupLoggingId = function () {
        return this.$2;
      };
      d.guessStreamGroupPriorStreamCount = function () {
        return this.$3;
      };
      d.establishStream = function (a, d, e) {
        var f = this;
        if (this.$1 == null || !this.$1.canCreateGroupedStream()) {
          var g = {
            serviceId: h,
            disableFalcoLogging: e.disableFalcoLogging,
            streamGroupAppHeaders: { "stream-group": "group1" },
          };
          e.overrideUrl != null && (g.overrideUrl = e.overrideUrl);
          c("gkx")("871") && (g.keepAliveMs = i);
          c("gkx")("2819")
            ? ((this.$2 = c("uuid")()), (g.loggingId = this.$2))
            : (this.$2 = null);
          this.$3 = 0;
          try {
            this.$1 = c("DGWClient")().createStreamGroup(
              new (c("DGWStreamGroupHandler"))(
                function () {
                  f.$1 = null;
                },
                function () {
                  f.$1 = null;
                },
                function () {
                  f.$1 = null;
                }
              ),
              g
            );
          } catch (a) {
            return b("Promise").reject(a);
          }
        }
        this.$3++;
        return this.$1.establishStream(
          {
            loggingId: e.loggingId,
            disableFalcoLogging: e.disableFalcoLogging,
            groupedStreamHeaders: a,
          },
          d
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "DGWRequestStreamClient",
  ["DGWRequestStreamRef", "DGWStreamFactory", "Promise", "cr:2046346"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a != null ? a : c("DGWStreamFactory").get();
      }
      var d = a.prototype;
      d.createStream = function (a, d, e, f, g) {
        b("cr:2046346") != null && b("cr:2046346").startPulsarTest();
        return b("Promise").resolve(
          new (c("DGWRequestStreamRef"))(a, d, f, g, e, this.$1)
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigResolvedContextsUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      var b = [];
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
        e = e.bucketIndex;
        if (e == void 0) break;
        b.push(e);
      }
      return b;
    };
    b = function (a) {
      var b = [];
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
        e = e.bucketName;
        if (e === void 0) break;
        b.push(e);
      }
      return b;
    };
    var g = function (a) {
      return a.name;
    };
    c = function (a) {
      return a.map(g);
    };
    d = function (a) {
      var b = [];
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
        e = e.value;
        if (e === void 0) break;
        b.push(e);
      }
      return b;
    };
    f.getBucketIndices = a;
    f.getBucketNames = b;
    f.getContextNames = c;
    f.getContextValues = d;
  },
  66
);
__d(
  "ContextualConfigCollateExposureData",
  ["ContextualConfigConstants", "ContextualConfigResolvedContextsUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = ["cfg_ver_timestamp", "policy_id", "version", "sample_rate"],
      i = function (a) {
        return a.join(d("ContextualConfigConstants").LIST_DELIMITER);
      },
      j = function (a, b) {
        for (var c = 0; c < h.length; c++) {
          var d = h[c];
          b[d] != null && (a[d] = b[d]);
        }
        b.name && (a.config_name = b.name);
      },
      k = function (a, b) {
        var c = b[0],
          e = b[1],
          f = b[2];
        b = b[3];
        c != null && (a.exception = c.message);
        a.result =
          i(
            e.map(function (a) {
              return a.value;
            })
          ) || "INVALID";
        a.context = i(
          d("ContextualConfigResolvedContextsUtils").getContextNames(f)
        );
        a.context_value = i(
          d("ContextualConfigResolvedContextsUtils").getContextValues(f)
        );
        a.bucket_name = i(
          d("ContextualConfigResolvedContextsUtils").getBucketNames(f)
        );
        a.monitor = i(
          d("ContextualConfigResolvedContextsUtils").getContextNames(b)
        );
        a.monitor_value = i(
          d("ContextualConfigResolvedContextsUtils").getContextValues(b)
        );
      };
    function a(a, b, c) {
      var e = {
        sample_rate: d("ContextualConfigConstants").ANALYTICS_SAMPLE_RATE,
      };
      j(e, a);
      k(e, b);
      c && (e.config_contents = JSON.stringify(a));
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigExposureEvent",
  ["Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$2 = a),
          (this.$4 = d("Random").random() < 1 / a.sample_rate),
          (this.$3 = b),
          (this.$1 = c);
      }
      var b = a.prototype;
      b.getData = function () {
        return this.$2;
      };
      b.log = function (a) {
        var b = this.$2,
          c = this.$3,
          d = this.$4;
        a && c(b);
        d && this.$1(b);
        return this;
      };
      b.isSampled = function () {
        return this.$4;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigExposureLoggerFactory",
  ["ContextualConfigExposureEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a, b) {
        (this.$2 = a), (this.$1 = b);
      }
      var b = a.prototype;
      b.createEvent = function (a) {
        var b = this.$1,
          d = this.$2;
        a = new (c("ContextualConfigExposureEvent"))(a, d, b);
        return a;
      };
      return a;
    })();
    function a(a, b) {
      return new h(a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigExposureLogger",
  ["ContextualConfigExposureLoggerFactory", "MarauderLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {};
    b = function (a) {
      d("MarauderLogger").log("contextual_config_exposure", "", a);
    };
    e = c("ContextualConfigExposureLoggerFactory")(a, b);
    g["default"] = e;
  },
  98
);
__d(
  "ContextualConfigAssert",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (a === !1) throw new Error(b);
    }
    f["default"] = a;
  },
  66
);
__d(
  "ContextualConfigParseBoolean",
  ["ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      switch (a.toUpperCase()) {
        case "TRUE":
          return !0;
        case "FALSE":
          return !1;
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.BAD_BOOLEAN_FORMAT
          );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParsePredBoolean",
  ["ContextualConfigConstants", "ContextualConfigParseBoolean"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e;
      switch (b) {
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          var f = c("ContextualConfigParseBoolean")(a);
          e = function (a) {
            return a === f;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          e = function (a) {
            return a == null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          e = function (a) {
            return a != null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          e = function (a) {
            return !0;
          };
          break;
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.ILLEGAL_BOOLEAN_STRATEGY
          );
      }
      return function (a) {
        return e(a);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseFloat",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/,
      i = function (a) {
        return h.test(a);
      };
    function a(a) {
      c("ContextualConfigAssert")(
        i(a),
        d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT
      );
      a = parseFloat(a);
      c("ContextualConfigAssert")(
        d("ContextualConfigValidators").isNumber(a),
        d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseInteger",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[-\+]?([1-9]\d*|0)$/,
      i = function (a) {
        return h.test(a);
      };
    function a(a) {
      c("ContextualConfigAssert")(
        i(a),
        d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT
      );
      a = parseInt(a, 10);
      c("ContextualConfigAssert")(
        d("ContextualConfigValidators").isNumber(a),
        d("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT
      );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigPredAssertions",
  ["ContextualConfigAssert", "ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      return c("ContextualConfigAssert")(
        a > 0,
        d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES
      );
    };
    b = function (a, b) {
      return c("ContextualConfigAssert")(
        a === b,
        d("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES
      );
    };
    e = function (a, b) {
      return c("ContextualConfigAssert")(
        a < b,
        d("ContextualConfigConstants").ERROR.BAD_VALUE_ORDER
      );
    };
    g.assertHasValues = a;
    g.assertNumberOfValues = b;
    g.assertValueOrder = e;
  },
  98
);
__d(
  "ContextualConfigParsePredNumeric",
  [
    "ContextualConfigConstants",
    "ContextualConfigParseFloat",
    "ContextualConfigParseInteger",
    "ContextualConfigPredAssertions",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      var g = e.map(
          f
            ? c("ContextualConfigParseInteger")
            : c("ContextualConfigParseFloat")
        ),
        h;
      switch (b) {
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          var i = f
            ? c("ContextualConfigParseInteger")(a)
            : c("ContextualConfigParseFloat")(a);
          h = function (a) {
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a === i;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          h = function (a) {
            return a == null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          h = function (a) {
            return a != null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          h = function (a) {
            return !0;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.COR:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 2);
          d("ContextualConfigPredAssertions").assertValueOrder(g[0], g[1]);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a >= g[0] && a < g[1];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LT:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a < g[0];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LTE:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a <= g[0];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.EQ:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a === g[0];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NEQ:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a !== g[0];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GT:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a > g[0];
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GTE:
          d("ContextualConfigPredAssertions").assertNumberOfValues(g.length, 1);
          h = function (a) {
            if (typeof a !== "number") return !1;
            return f && !d("ContextualConfigValidators").isInteger(a)
              ? !1
              : a >= g[0];
          };
          break;
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.ILLEGAL_NUMERIC_STRATEGY
          );
      }
      return function (a) {
        return h(a);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseRegExp",
  ["ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /^\/(.+)\/(.*)$/;
    function a(a) {
      try {
        var b = a.match(h);
        if (b != null) return new RegExp(b[1], b[2]);
        else return new RegExp(a);
      } catch (a) {
        throw new Error(
          d("ContextualConfigConstants").ERROR.REGEX_SYNTAX_ERROR
        );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParsePredString",
  [
    "ContextualConfigConstants",
    "ContextualConfigParseRegExp",
    "ContextualConfigPredAssertions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        if (typeof a !== "string")
          throw new Error(
            d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE
          );
        return a;
      },
      i = function (a) {
        var b = [];
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
          b.push(h(e));
        }
        return b;
      };
    function a(a, b, e) {
      var f = i(e),
        g;
      switch (b) {
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          g = function (b) {
            return typeof b !== "string" ? !1 : b === a;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          g = function (a) {
            return a == null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          g = function (a) {
            return a != null;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          g = function (a) {
            return !0;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.IN:
          d("ContextualConfigPredAssertions").assertHasValues(f.length);
          g = function (a) {
            return typeof a !== "string" ? !1 : f.indexOf(a) !== -1;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NIN:
          d("ContextualConfigPredAssertions").assertHasValues(f.length);
          g = function (a) {
            return typeof a !== "string" ? !1 : f.indexOf(a) === -1;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CONTAINS:
          d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
          g = function (a) {
            return typeof a !== "string" ? !1 : a.indexOf(f[0]) !== -1;
          };
          break;
        case d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.REGEX:
          d("ContextualConfigPredAssertions").assertNumberOfValues(f.length, 1);
          var h = c("ContextualConfigParseRegExp")(f[0]);
          g = function (a) {
            return typeof a !== "string" ? !1 : h.test(a);
          };
          break;
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.ILLEGAL_STRING_STRATEGY
          );
      }
      return function (a) {
        return g(a);
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseContextBuckets",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParsePredBoolean",
    "ContextualConfigParsePredNumeric",
    "ContextualConfigParsePredString",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.MISSING_BUCKETS
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_BUCKETS
        );
      },
      j = d("ContextualConfigValidators").isKey(
        d("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY
      ),
      k = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isString(a) && j(a.toUpperCase()),
          d("ContextualConfigConstants").ERROR.MISSING_BUCKET_STRATEGY
        );
      },
      l = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.ILLEGAL_BUCKET_VALUES
        );
      },
      m = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.MISSING_BUCKET_NAME
        );
      },
      n = function (a, b) {
        var e = b.name;
        m(e);
        var f = b.strategy;
        k(f);
        b = b.values || [];
        l(b);
        switch (a) {
          case d("ContextualConfigConstants").TYPE.BOOL:
            return c("ContextualConfigParsePredBoolean")(e, f);
          case d("ContextualConfigConstants").TYPE.FLOAT:
            return c("ContextualConfigParsePredNumeric")(e, f, b, !1);
          case d("ContextualConfigConstants").TYPE.INT:
            return c("ContextualConfigParsePredNumeric")(e, f, b, !0);
          case d("ContextualConfigConstants").TYPE.STRING:
            return c("ContextualConfigParsePredString")(e, f, b);
          default:
            throw new Error(
              d("ContextualConfigConstants").ERROR.UNKNOWN_BUCKET_DEFINITION
            );
        }
      },
      o = function (a, b) {
        h(b);
        var c = b.name;
        m(c);
        return { name: c, pred: n(a, b) };
      };
    function a(a, b) {
      i(b);
      return b.map(function (b) {
        return o(a, b);
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseContexts",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseContextBuckets",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a) && a.length > 0,
          d("ContextualConfigConstants").ERROR.MISSING_CONTEXT_IN_CONFIG
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      k = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isType(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      l = function (a) {
        h(a);
        var b = a.name,
          d = a.type;
        a = a.buckets;
        j(b);
        k(d);
        return {
          name: b,
          type: d,
          buckets: c("ContextualConfigParseContextBuckets")(d, a),
        };
      };
    function a(a) {
      i(a);
      return a.map(l);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigIsEqualParams",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c],
          e = b[c];
        if (d.name !== e.name || d.type !== e.type) return !1;
      }
      return !0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ContextualConfigParseResultParamValue",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseBoolean",
    "ContextualConfigParseFloat",
    "ContextualConfigParseInteger",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      return c("ContextualConfigAssert")(
        d("ContextualConfigValidators").isString(a),
        d("ContextualConfigConstants").ERROR.INVALID_STRING
      );
    };
    function a(a, b) {
      h(b);
      switch (a) {
        case d("ContextualConfigConstants").TYPE.BOOL:
          return c("ContextualConfigParseBoolean")(b);
        case d("ContextualConfigConstants").TYPE.FLOAT:
          return c("ContextualConfigParseFloat")(b);
        case d("ContextualConfigConstants").TYPE.INT:
          return c("ContextualConfigParseInteger")(b);
        case d("ContextualConfigConstants").TYPE.STRING:
          return b;
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE
          );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseResultParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParamValue",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_RESULTS
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE
        );
      },
      k = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isType(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_VALUE
        );
      },
      l = function (a, b) {
        for (
          var a = a,
            c = Array.isArray(a),
            e = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (f.name === b) return f.type;
        }
        throw new Error(
          d("ContextualConfigConstants").ERROR.UNDECLARED_OUTPUT_PARAM
        );
      },
      m = function (a) {
        return function (b) {
          i(b);
          var d = b.name;
          j(d);
          var e = l(a, d);
          k(e);
          b = c("ContextualConfigParseResultParamValue")(e, b.value);
          return { name: d, type: e, value: b };
        };
      };
    function a(a, b) {
      h(b);
      return b.map(m(a));
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseDenseResultParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigIsEqualParams",
    "ContextualConfigParseResultParams",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a, b) {
      return c("ContextualConfigAssert")(
        c("ContextualConfigIsEqualParams")(a, b),
        d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH
      );
    };
    function a(a, b) {
      b = c("ContextualConfigParseResultParams")(
        a,
        b.map(function (b, c) {
          return { name: a[c].name, value: b };
        })
      );
      h(a, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseDenseDefaults",
  ["ContextualConfigConstants", "ContextualConfigParseDenseResultParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      try {
        return c("ContextualConfigParseDenseResultParams")(a, b);
      } catch (a) {
        throw new Error(
          d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE
        );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseMonitors",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.BAD_MONITORED_CONTEXTS
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      k = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isType(a),
          d("ContextualConfigConstants").ERROR.BAD_CONTEXT_IDENTIFIER
        );
      },
      l = function (a) {
        h(a);
        var b = a.name;
        a = a.type;
        j(b);
        k(a);
        return { name: b, type: a };
      };
    function a(a) {
      i(a);
      return a.map(l);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseOutputParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_OUTPUTS_DEFINITION
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isType(a),
          d("ContextualConfigConstants").ERROR.BAD_OUTPUT_TYPE
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.BAD_OUTPUT_NAME
        );
      },
      k = function (a) {
        return c("ContextualConfigAssert")(
          l(a),
          d("ContextualConfigConstants").ERROR.DUPLICATE_OUTPUT_NAME
        );
      },
      l = function (a) {
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
          if (b[e.name]) return !1;
          b[e.name] = !0;
        }
        return !0;
      },
      m = function (a) {
        j(a.name);
        i(a.type);
        return a;
      };
    function a(a) {
      h(a);
      a = a.map(m);
      k(a);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseVector",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParamValue",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_VECTOR
        );
      },
      i = function (a, b) {
        return c("ContextualConfigAssert")(
          a === b,
          d("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH
        );
      },
      j = function (a, b) {
        i(a.length, b.length);
        for (var d = 0; d < a.length; d += 1) {
          var e = a[d].type,
            f = b[d];
          c("ContextualConfigParseResultParamValue")(e, f);
        }
      },
      k = function (a) {
        return a.reduce(function (a, b) {
          b = b.buckets;
          return a * b.length;
        }, 1);
      };
    function a(a, b, c) {
      h(c);
      b = k(b);
      var d = a.length;
      i(b * d, c.length);
      for (var e = 0; e < b; e += 1) {
        var f = e * d;
        j(a, c.slice(f, f + d));
      }
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigResolveContexts",
  ["ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a, b) {
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c];
        try {
          if (d.pred(b)) return [d.name, c];
        } catch (a) {
          return null;
        }
      }
      return null;
    };
    function a(a, b, c) {
      var e = null;
      a = a.map(function (a) {
        var f = a.name,
          g = { name: f };
        if (e != null) return g;
        var i;
        c[f] != null ? (i = c[f]) : b[f] != null ? (i = b[f]()) : (i = null);
        g.value = i;
        if (a.buckets != null) {
          f = h(a.buckets, i);
          if (f == null) {
            e = new Error(
              d("ContextualConfigConstants").ERROR.MISSING_BUCKET_MATCH
            );
            return g;
          }
          a = f[0];
          i = f[1];
          g.bucketName = a;
          g.bucketIndex = i;
        }
        return g;
      });
      return [e, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "DenseContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseContexts",
    "ContextualConfigParseDenseDefaults",
    "ContextualConfigParseDenseResultParams",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseVector",
    "ContextualConfigResolveContexts",
    "ContextualConfigResolvedContextsUtils",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.BAD_CONFIG
        );
      },
      i = function (a) {
        var b = [],
          c = 1;
        for (var d = a.length - 1; d >= 0; d -= 1)
          b.push(c), (c *= a[d].buckets.length);
        return b.reverse();
      },
      j = function (a, b, d, e) {
        try {
          b = b.slice(d, d + a.length);
          return [null, c("ContextualConfigParseDenseResultParams")(a, b)];
        } catch (a) {
          return [a, e];
        }
      },
      k = function (a, b, d) {
        try {
          d = d.reduce(function (b, d, e) {
            c("ContextualConfigAssert")(
              e < a.length,
              "Auxillery index out of range."
            );
            return b + a[e] * d;
          }, 0);
          return [null, d * b];
        } catch (a) {
          return [a, -1];
        }
      };
    a = (function () {
      function a(a, b) {
        h(a);
        this.globalContextProviders = babelHelpers["extends"]({}, b);
        b = c("ContextualConfigParseOutputParams")(a.outputs);
        var d = c("ContextualConfigParseContexts")(a.contexts);
        this.aux = i(d);
        this.contexts = d;
        this.defaults = c("ContextualConfigParseDenseDefaults")(
          b,
          a.vectorDefaults
        );
        this.monitors =
          a.monitors != null
            ? c("ContextualConfigParseMonitors")(a.monitors)
            : [];
        this.outputs = b;
        this.vector = c("ContextualConfigParseVector")(b, d, a.vector);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.defaults,
            d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.aux,
          e = this.globalContextProviders,
          f = this.contexts,
          g = this.defaults,
          h = this.monitors,
          i = this.outputs,
          l = this.vector;
        f = c("ContextualConfigResolveContexts")(f, e, a);
        var m = f[0];
        f = f[1];
        if (m != null)
          return [
            m,
            g,
            f,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        m = k(
          b,
          i.length,
          d("ContextualConfigResolvedContextsUtils").getBucketIndices(f)
        );
        b = m[0];
        m = m[1];
        if (b != null)
          return [
            b,
            g,
            f,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        b = j(i, l, m, g);
        i = b[0];
        l = b[1];
        if (i != null)
          return [
            i,
            l,
            f,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        m = c("ContextualConfigResolveContexts")(h, e, a);
        g = m[0];
        b = m[1];
        return g != null
          ? [g, l, f, d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS]
          : [null, l, f, b];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MultiOutputResolvedContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseResultParams",
    "ContextualConfigResolveContexts",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      return c("ContextualConfigAssert")(
        d("ContextualConfigValidators").isDefined(a),
        d("ContextualConfigConstants").ERROR.BAD_CONFIG
      );
    };
    a = (function () {
      function a(a, b) {
        h(a);
        this.globalContextProviders = babelHelpers["extends"]({}, b);
        b = c("ContextualConfigParseOutputParams")(a.outputs);
        this.monitors =
          a.monitors != null
            ? c("ContextualConfigParseMonitors")(a.monitors)
            : [];
        this.values = c("ContextualConfigParseResultParams")(b, a.values);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.values,
            d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.globalContextProviders,
          e = this.monitors,
          f = this.values;
        e = c("ContextualConfigResolveContexts")(e, b, a);
        b = e[0];
        a = e[1];
        return b != null
          ? [
              b,
              f,
              d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
              d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
            ]
          : [
              null,
              f,
              d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
              a,
            ];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigMergePartialResultParams",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = {};
      for (
        var b = b,
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
        c[f.name] = f;
      }
      f = [];
      for (
        e = a,
          d = Array.isArray(e),
          b = 0,
          e = d
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        if (d) {
          if (b >= e.length) break;
          a = e[b++];
        } else {
          b = e.next();
          if (b.done) break;
          a = b.value;
        }
        a = a;
        var g = c[a.name];
        f.push(g != null && g.name === a.name && g.type === a.type ? g : a);
      }
      return f;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ContextualConfigParseDefaults",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigIsEqualParams",
    "ContextualConfigParseResultParams",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a, b) {
      return c("ContextualConfigAssert")(
        c("ContextualConfigIsEqualParams")(a, b),
        d("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE
      );
    };
    function a(a, b) {
      b = c("ContextualConfigParseResultParams")(a, b);
      h(a, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseTable",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParams",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_TABLE
        );
      },
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.MISSING_TABLE
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isNonEmptyString(a),
          d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_BUCKET
        );
      },
      k = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isArray(a),
          d("ContextualConfigConstants").ERROR.MISSING_TABLE_ITEM_VALUES
        );
      },
      l = function (a, b) {
        i(b);
        var d = b.bucket;
        b = b.values;
        j(d);
        k(b);
        return {
          bucket: d,
          values: c("ContextualConfigParseResultParams")(a, b),
        };
      };
    function a(a, b) {
      h(b);
      return b.reduce(function (b, c) {
        c = l(a, c);
        b[c.bucket] = c.values;
        return b;
      }, {});
    }
    g["default"] = a;
  },
  98
);
__d(
  "TableContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigMergePartialResultParams",
    "ContextualConfigParseContexts",
    "ContextualConfigParseDefaults",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseTable",
    "ContextualConfigResolveContexts",
    "ContextualConfigResolvedContextsUtils",
    "ContextualConfigValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a),
          d("ContextualConfigConstants").ERROR.BAD_CONFIG
        );
      };
    a = (function () {
      function a(a, b) {
        i(a);
        this.globalContextProviders = babelHelpers["extends"]({}, b);
        b = c("ContextualConfigParseOutputParams")(a.outputs);
        this.contexts = c("ContextualConfigParseContexts")(a.contexts);
        this.defaults = c("ContextualConfigParseDefaults")(b, a.defaults);
        this.monitors =
          a.monitors != null
            ? c("ContextualConfigParseMonitors")(a.monitors)
            : [];
        this.table = c("ContextualConfigParseTable")(b, a.table);
      }
      var b = a.prototype;
      b.resolve = function (a) {
        try {
          return this.unsafeResolve(a);
        } catch (a) {
          return [
            a,
            this.defaults,
            d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
            d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        }
      };
      b.unsafeResolve = function (a) {
        var b = this.globalContextProviders,
          e = this.contexts,
          f = this.defaults,
          g = this.monitors,
          i = this.table;
        e = c("ContextualConfigResolveContexts")(e, b, a);
        var j = e[0];
        e = e[1];
        if (j != null) return [j, f, e, []];
        j = d("ContextualConfigResolvedContextsUtils")
          .getBucketNames(e)
          .join(d("ContextualConfigConstants").BUCKET_DELIMITER);
        i = i[j] || h;
        j = c("ContextualConfigMergePartialResultParams")(f, i);
        f = c("ContextualConfigResolveContexts")(g, b, a);
        i = f[0];
        g = f[1];
        return i != null ? [i, j, e, []] : [null, j, e, g];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigParseConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
    "DenseContextualConfig",
    "MultiOutputResolvedContextualConfig",
    "TableContextualConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [1],
      i = function (a) {
        return c("ContextualConfigAssert")(
          d("ContextualConfigValidators").isDefined(a) &&
            d("ContextualConfigValidators").isDefined(a.version),
          d("ContextualConfigConstants").ERROR.BAD_CONFIG
        );
      },
      j = function (a) {
        return c("ContextualConfigAssert")(
          h.indexOf(a) !== -1,
          d("ContextualConfigConstants").ERROR.UNSUPPORTED_CONFIG_VERSION
        );
      };
    function a(a, b) {
      i(a);
      j(a.version);
      switch (a.cctype) {
        case d("ContextualConfigConstants").CONFIG_TYPE.DENSE:
          return new (c("DenseContextualConfig"))(a, b);
        case d("ContextualConfigConstants").CONFIG_TYPE.MULTI_OUTPUT_RESOLVED:
          return new (c("MultiOutputResolvedContextualConfig"))(a, b);
        case d("ContextualConfigConstants").CONFIG_TYPE.TABLE:
          return new (c("TableContextualConfig"))(a, b);
        default:
          throw new Error(
            d("ContextualConfigConstants").ERROR.UNKNOWN_CONFIG_TYPE
          );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfigWarn",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {}
    f["default"] = a;
  },
  66
);
__d(
  "ContextualConfigResult",
  ["ContextualConfigConstants", "ContextualConfigWarn"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = a.reduce(function (a, b) {
          var c = b.name;
          b = b.value;
          a[c] = b;
          return a;
        }, {})),
          (this.$2 = a);
      }
      var b = a.prototype;
      b.get = function (a, b) {
        try {
          a = this.$1[a];
          if (typeof a !== typeof b) {
            c("ContextualConfigWarn")(
              d("ContextualConfigConstants").ERROR.REQUESTED_PARAM_NOT_FOUND
            );
            return b;
          }
          return a;
        } catch (a) {
          c("ContextualConfigWarn")(a.message);
          return b;
        }
      };
      b.getParams = function () {
        return this.$2;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ErrorContextualConfig",
  ["ContextualConfigConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.error = a;
      }
      var b = a.prototype;
      b.resolve = function (a) {
        return [
          this.error,
          d("ContextualConfigConstants").EMPTY_RESULT_PARAMS,
          d("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
          d("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
        ];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ContextualConfig",
  [
    "ContextualConfigCollateExposureData",
    "ContextualConfigConstants",
    "ContextualConfigExposureLogger",
    "ContextualConfigParseConfig",
    "ContextualConfigResult",
    "ErrorContextualConfig",
    "Random",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1 / d("ContextualConfigConstants").JSON_SUB_SAMPLE_RATE,
      i = 1;
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = {}),
          (this.isDebugLoggingEnabled = !1),
          (this.$3 = !1),
          (this.$4 = a),
          (this.$2 = b);
      }
      var b = a.prototype;
      b.$5 = function () {
        if (this.$1) return this.$1;
        var a = this.$2,
          b = this.$4;
        try {
          b = c("ContextualConfigParseConfig")(b, a);
        } catch (a) {
          b = new (c("ErrorContextualConfig"))(a);
        }
        this.$1 = b;
        return b;
      };
      b.$6 = function (a) {
        var b = this.isDebugLoggingEnabled,
          e = this.$4,
          f = this.$3;
        f = !f && d("Random").random() < h;
        f && (this.$3 = !0);
        e = c("ContextualConfigCollateExposureData")(e, a, f);
        a = c("ContextualConfigExposureLogger").createEvent(e);
        a.log(b);
      };
      b.resolve = function (a) {
        a === void 0 && (a = {});
        var b = this.$1 || this.$5();
        b = b.resolve(a);
        this.$6(b);
        return new (c("ContextualConfigResult"))(b[i]);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FbtLogging",
  ["cr:1094907"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    g.logImpression = a;
  },
  98
);
__d(
  "AcfToastImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1873550");
    b = d("FalcoLoggerInternal").create("acf_toast_impression", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "ClientConsistencyFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1764786");
    b = d("FalcoLoggerInternal").create("client_consistency", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "CometSuspenseFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1828945");
    b = d("FalcoLoggerInternal").create("comet_suspense", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "IntlQtEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    b = d("FalcoLoggerInternal").create("intl_qt_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "LynxAsyncCallbackFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743887");
    b = d("FalcoLoggerInternal").create("lynx_async_callback", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "FalcoAppUniverse",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({ FACEBOOK: 1, INSTAGRAM: 2 });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "ExecutionEnvironment",
    "FBLogger",
    "FalcoAppUniverse",
    "FalcoUtils",
    "ODS",
    "PersistedQueue",
    "Queue",
    "WebSession",
    "performanceAbsoluteNow",
    "promiseDone",
    "requireDeferredForDisplay",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferredForDisplay")(
        "TransportSelectingClientSingletonConditional"
      ).__setRef("FalcoLoggerTransports"),
      i = 5 * 1024,
      j =
        (b = c("AnalyticsCoreData").max_delay_br_queue) != null ? b : 60 * 1e3,
      k =
        (e = c("AnalyticsCoreData").max_delay_br_queue_immediate) != null
          ? e
          : 1e3,
      l = "falco:",
      m = new (c("Queue"))(),
      n = 5e3,
      o = 6e4,
      p = c("uuid")(),
      q = "ods_web_batch",
      r = new Map(),
      s = new Set(),
      t = new Set(),
      u =
        (f = c("FalcoAppUniverse").cast(c("AnalyticsCoreData").app_universe)) !=
        null
          ? f
          : 1,
      v = [],
      w = 0,
      x,
      y = !1,
      z = !1,
      A = !1,
      B = !0,
      C = !1,
      D = Date.now() - o,
      E = 1;
    W();
    for (
      e =
        (b = c("AnalyticsCoreData").stateful_events_list_for_br) != null
          ? b
          : [],
        f = Array.isArray(e),
        b = 0,
        e = f
          ? e
          : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
      ;

    ) {
      var F;
      if (f) {
        if (b >= e.length) break;
        F = e[b++];
      } else {
        b = e.next();
        if (b.done) break;
        F = b.value;
      }
      F = F;
      s.add(F);
    }
    for (
      b =
        (F = c("AnalyticsCoreData").stateless_non_fb_events_for_br) != null
          ? F
          : [],
        f = Array.isArray(b),
        e = 0,
        b = f
          ? b
          : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
      ;

    ) {
      if (f) {
        if (e >= b.length) break;
        F = b[e++];
      } else {
        e = b.next();
        if (e.done) break;
        F = e.value;
      }
      F = F;
      t.add(F);
    }
    function G() {
      return (
        c("AnalyticsCoreData").enable_bladerunner &&
        !c("ExecutionEnvironment").isInWorker
      );
    }
    function H(a, b) {
      P(b.item.name, "js.br.add_to_batch", 1, !0);
      var c = b.item.extra.length;
      w + c > i && (clearTimeout(x), I());
      v.push([a, b]);
      w += c;
    }
    function I() {
      x = null;
      y = !1;
      var a = v;
      N(
        "js.br.send_batch",
        a.map(function (a) {
          return a[1].item;
        })
      );
      if (!C) {
        O("js.br.init_not_complete.log", a.length);
        var b = function () {
          var b = a[c],
            d = b[0],
            e = b[1];
          P(e.item.name, "js.br.banzai_fallback_for_init_not_complete", 1, !0);
          ((b = e.item.logImmediate) != null ? b : !1)
            ? Q.logImmediately([e.item], function (a) {
                return d.markItem(e, a);
              })
            : Q.log([e.item], function (a) {
                return d.markItem(e, a);
              });
        };
        for (var c = 0; c < a.length; c++) b();
      } else
        m.enqueue(function (b) {
          return b.log(
            a.map(function (a) {
              return a[1].item;
            }),
            function (b) {
              if (!b) {
                O("js.br.banzai_fallback", a.length);
                var c = function () {
                  var c = a[d],
                    b = c[0],
                    e = c[1];
                  P(e.item.name, "js.br.banzai_fallback_for_failure", 1, !0);
                  ((c = e.item.logImmediate) != null ? c : !1)
                    ? Q.logImmediately([e.item], function (a) {
                        return b.markItem(e, a);
                      })
                    : Q.log([e.item], function (a) {
                        return b.markItem(e, a);
                      });
                };
                for (var d = 0; d < a.length; d++) c();
                return;
              }
              for (c = 0; c < a.length; c++) {
                var e = a[c],
                  f = e[0];
                e = e[1];
                P(
                  e.item.name,
                  "js.br.success_callback.batch.send_batch",
                  1,
                  !0
                );
                f.markItem(e, b);
              }
            }
          );
        });
      v = [];
      w = 0;
    }
    function J(a) {
      return {
        events: a.map(function (a) {
          return {
            name: a.name,
            extra: a.extra,
            rate: a.policy.r,
            time: a.time / 1e3,
            tag: 0,
            shouldAddState: a.shouldAddState,
          };
        }),
      };
    }
    function K(a) {
      var b;
      a = {
        deviceId: c("AnalyticsCoreData").device_id,
        familyDeviceId: null,
        osBuildNumber: null,
        sessionId: a,
        appId: c("AnalyticsCoreData").app_id,
        appVersion: null,
        bundleId: null,
        consentState: null,
        identity: null,
        pushPhase: c("AnalyticsCoreData").push_phase,
      };
      ((b =
        (b = c("AnalyticsCoreData").stateful_events_list_for_br) == null
          ? void 0
          : b.length) != null
        ? b
        : 0) > 0 && (a.ambientState = c("AnalyticsCoreData").state_for_br);
      ((b = c("AnalyticsCoreData").allow_br_event_identity_propogation) != null
        ? b
        : !1) && (a.identity = L());
      return Object.freeze(a);
    }
    function L() {
      try {
        if (u === 2) {
          var a;
          a =
            (a = c("AnalyticsCoreData").identity) == null
              ? void 0
              : a.appScopedIdentity;
          if (a !== void 0)
            return {
              appScopedIdentity: { uid: a, identifier: "", claims: [] },
            };
        } else {
          a =
            (a = c("AnalyticsCoreData").identity) == null
              ? void 0
              : a.fbIdentity;
          if (a !== void 0)
            return {
              facebookIdentity: {
                actorId: a.actorId,
                accountId: a.accountId,
                claims: [],
              },
            };
        }
      } catch (a) {
        d("ODS").bumpEntityKey(
          1344,
          "js.br.identity.propogation",
          "exception.while.generating.identity",
          1
        );
      }
      return null;
    }
    function M(a, b) {
      for (var e = 0; e < a.length; e++) {
        var f,
          g = a[e];
        P(g.name, "js.banzai.posting_event", 1, !1);
        f =
          ((f = {}),
          (f.e = g.extra),
          (f.r = g.policy.r),
          (f.d = c("AnalyticsCoreData").device_id),
          (f.s = d("WebSession").getId()),
          (f.t = g.time),
          f);
        g.privacyContext && (f.p = g.privacyContext);
        var h = g.identity;
        h && (f.id = h);
        c("Banzai").post(l + g.name, f, b);
      }
      N("planes.banzai.write_to_transport", a);
    }
    function N(a, b) {
      var c = 0;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.name !== q && (c += 1);
      }
      c > 0 && O(a, c);
    }
    function O(a, b) {
      var e = "falco.fabric.www." + c("AnalyticsCoreData").push_phase;
      d("ODS").bumpEntityKey(1344, e, a, b);
    }
    function P(a, b, c, e) {
      if (a === q) return !1;
      d("ODS").bumpEntityKey(1344, "falco.event." + a, b, c);
      e && O(b, c);
      return !0;
    }
    var Q = {
      log: function (a, b) {
        N("js.banzai.post.log", a), M(a, c("Banzai").BASIC), b(!0);
      },
      logImmediately: function (a, b) {
        N("js.banzai.post.log_immediately", a), M(a, c("Banzai").VITAL), b(!0);
      },
      logCritical: function (a, b) {
        N("js.banzai.post.log_critical", a),
          M(a, { signal: !0, retry: !0 }),
          b(!0);
      },
    };
    function R(a) {
      W();
      var b = S(a, "banzai_data_loss", "log"),
        d = S(a, "banzai_data_loss", "logImmediately"),
        e = S(a, "banzai_data_loss", "logCritical"),
        f = S(a, "bladerunner_data_loss", "");
      O("js.br_data_loss.posted." + a, 1);
      if (C && B)
        try {
          m.enqueue(function (b) {
            return b.log([f], function (b) {
              if (!b) {
                O("js.br.transport_failure." + a, 1);
                Q.logCritical([f], function (b) {
                  O("js.br.failure_fallback_success_callback." + a, 1);
                });
                return;
              }
              O("js.br.success_callback." + a, 1);
            });
          });
        } catch (b) {
          O("js.br.error_enqueueing." + a, 1),
            Q.logCritical([f], function (b) {
              O("js.br.enqueuing_fallback_success_callback." + a, 1);
            });
        }
      else
        B || O("js.br.failed." + a, 1),
          C || O("js.br.init_not_complete." + a, 1),
          Q.logCritical([f], function (b) {
            O("js.br.init_fallback_success_callback." + a, 1);
          });
      M([b], c("Banzai").BASIC);
      M([d], c("Banzai").VITAL);
      M([e], { signal: !0, retry: !0 });
    }
    function S(a, b, d) {
      return {
        name: b,
        time: c("performanceAbsoluteNow")(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: a,
          falco_js_connection_id: p,
          logging_mode: d,
          logging_flow_flag: "original_flow",
        }),
      };
    }
    function T() {
      D + n < Date.now() && (R(E), (D = Date.now()), E++);
    }
    function U() {
      window.setTimeout(function () {
        T(), E <= 40 && U();
      }, o);
    }
    function V(a) {
      m.start(function (b) {
        return b({
          log: function (d, b) {
            N("planes.bladerunner.write_to_transport", d);
            var e = JSON.stringify(J(d));
            a
              ? c("AnalyticsCoreData").enable_ack
                ? c("promiseDone")(
                    a.amendWithAck(e),
                    function (a) {
                      N("planes.bladerunner.ack_received" + a.toString(), d),
                        b(a);
                    },
                    function () {
                      N("planes.bladerunner.ack_failure", d), b(!1);
                    }
                  )
                : (a.amendWithoutAck(e),
                  N("planes.bladerunner.write_without_ack", d))
              : (N("planes.bladerunner.request_stream_null", d), b(!1));
          },
          logImmediately: function (b, a) {
            this.log(b, a);
          },
          logCritical: function (b, a) {
            this.log(b, a);
          },
        });
      });
    }
    function W() {
      if (z) return;
      C = !1;
      if (!G()) return;
      h.onReady(function (a) {
        if (!a) {
          B = !1;
          m.start(function (a) {
            return a(Q);
          });
          return;
        }
        a = a;
        var b = {
          onTermination: function (a) {
            a.message === "Stream closed"
              ? (m.stop(!0), (z = !1))
              : ((B = !1),
                u === 2 &&
                  (d("ODS").bumpEntityKey(
                    1344,
                    "falco.ig.br.experiment",
                    "exception.when.br.stream.is.rejected",
                    1
                  ),
                  c("FBLogger")("ig_web", "br_stream_rejected")
                    .catching(a)
                    .warn("BladeRunner stream is rejected")),
                m.start(function (a) {
                  return a(Q);
                }));
          },
          onFlowStatus: function () {},
        };
        c("promiseDone")(
          a
            .requestStream(
              { method: "Falco" },
              JSON.stringify(K(d("WebSession").getId())),
              b,
              { requestId: "" }
            )
            .then(function (b) {
              (a = b), V(a), (C = !0);
            })
            ["catch"](function (a) {
              m.stop(!0), (z = !1);
            })
        );
      });
      z = !0;
    }
    function X(a) {
      var b = a.name;
      if (!G() || !B) {
        u !== 1 &&
          P(b, "js.use_bladerunner.failed.non_fb_event.br_not_enabled", 1, !0);
        return !1;
      }
      if (s.has(b)) {
        a.shouldAddState = !0;
        return !0;
      }
      if (u !== 1 && !t.has(b)) {
        P(b, "js.use_bladerunner.failed.non_fb_event.event_not_in_list", 1, !0);
        return !1;
      }
      a.policy.s !== 1 &&
        u !== 1 &&
        P(
          b,
          "js.use_bladerunner.failed.non_fb_event.policy_not_stateless",
          1,
          !0
        );
      return a.policy.s === 1;
    }
    function Y(a) {
      if (a === "") return null;
      if (r.has(a)) return r.get(a);
      else {
        var b = { claim: "" },
          c = a.split("^#");
        if (c.length >= 4) {
          var d = c[0],
            e = c[1],
            f = c[2];
          c = c[3];
          f !== ""
            ? (b = { appScopedIdentity: f, claim: c })
            : d !== "" &&
              (b = { fbIdentity: { accountId: d, actorId: e }, claim: c });
          r.set(a, b);
        }
        return b;
      }
    }
    function a() {
      if (A) return;
      A = !0;
      c("PersistedQueue").setHandler("falco_queue_log", function (c) {
        var d,
          e = c.getQueueNameSuffix(),
          f = Y(e);
        while ((d = c.dequeueItem()))
          (function (d) {
            X(d.item)
              ? (P(d.item.name, "js.use_bladerunner.log", 1, !0),
                W(),
                x == null && (x = setTimeout(I, j)),
                a(e) ||
                  (b(f),
                  P(d.item.name, "js.bladerunner.identity.mismatch", 1, !0)),
                H(c, d))
              : (P(d.item.name, "js.use_banzai.log", 1, !0),
                f && (d.item.identity = f),
                Q.log([d.item], function (a) {
                  return c.markItem(d, a);
                }));
          })(d);
      });
      c("PersistedQueue").setHandler("falco_queue_immediately", function (d) {
        var e,
          f = d.getQueueNameSuffix(),
          g = Y(f);
        while ((e = d.dequeueItem()))
          (function (e) {
            X(e.item)
              ? (P(e.item.name, "js.use_bladerunner.log_immediately", 1, !0),
                W(),
                (x == null || !y) &&
                  (clearTimeout(x), (x = setTimeout(I, k)), (y = !0)),
                (e.item.logImmediate = !0),
                H(d, e),
                c("PersistedQueue").isPersistenceAllowed() ||
                  (P(
                    e.item.name,
                    "js.br.send_immediately_no_persistence",
                    1,
                    !0
                  ),
                  I()),
                a(f) ||
                  (b(g),
                  P(e.item.name, "js.bladerunner.identity.mismatch", 1, !0)))
              : (P(e.item.name, "js.use_banzai.log_immediately", 1, !0),
                g && (e.item.identity = g),
                Q.logImmediately([e.item], function (a) {
                  return d.markItem(e, a);
                }));
          })(e);
      });
      c("PersistedQueue").setHandler("falco_queue_critical", function (c) {
        var d,
          e = c.getQueueNameSuffix(),
          f = Y(e);
        while ((d = c.dequeueItem()))
          (function (d) {
            var g = d.item;
            X(g)
              ? (P(g.name, "js.use_bladerunner.log_critical", 1, !0),
                W(),
                !C
                  ? (P(g.name, "js.br.init_not_complete.logCritical", 1, !0),
                    f && (g.identity = f),
                    Q.logCritical([g], function (a) {
                      return c.markItem(d, a);
                    }))
                  : (m.enqueue(function (a) {
                      return a.logCritical([g], function (a) {
                        if (!a) {
                          O("js.br.banzai_fallback.critical", 1);
                          P(
                            d.item.name,
                            "js.br.banzai_fallback_for_failure.critical",
                            1,
                            !0
                          );
                          f && (g.identity = f);
                          Q.logCritical([g], function (a) {
                            return c.markItem(d, a);
                          });
                          return;
                        }
                        P(
                          d.item.name,
                          "js.br.success_callback.batch.critical",
                          1,
                          !0
                        );
                        c.markItem(d, a);
                      });
                    }),
                    a(e) ||
                      (b(f),
                      P(
                        d.item.name,
                        "js.bladerunner.identity.mismatch",
                        1,
                        !0
                      ))))
              : (f && (g.identity = f),
                P(g.name, "js.use_banzai.log_critical", 1, !0),
                Q.logCritical([g], function (a) {
                  return c.markItem(d, a);
                }));
          })(d);
      });
      c("AnalyticsCoreData").enable_dataloss_timer && (W(), T(), U());
      function a(a) {
        try {
          var b = d("FalcoUtils").identityToString(
            c("AnalyticsCoreData").identity
          );
          return a === b;
        } catch (a) {
          d("ODS").bumpEntityKey(
            1344,
            "js.br.identity.check",
            "exception.when.comparing.with.current.user.identity",
            1
          );
          return !0;
        }
      }
      function b(a) {
        try {
          d("ODS").bumpEntityKey(
            1344,
            "js.bladerunner.identity.mismatch",
            "identity.mismatch.logging.entry.point",
            1
          );
          if (a)
            if (a.fbIdentity) {
              var b, f;
              b =
                (b = c("AnalyticsCoreData").identity) == null
                  ? void 0
                  : b.fbIdentity;
              f =
                (f = c("AnalyticsCoreData").identity) == null
                  ? void 0
                  : f.appScopedIdentity;
              b
                ? e(a.fbIdentity.actorId, b.actorId)
                : f != null
                ? d("ODS").bumpEntityKey(
                    1344,
                    "js.bladerunner.identity.mismatch.fb",
                    "received.app_scoped.identity.for.current.fb.user",
                    1
                  )
                : d("ODS").bumpEntityKey(
                    1344,
                    "js.bladerunner.identity.mismatch.fb",
                    "undefined.current.user.identity",
                    1
                  );
            } else {
              b = a == null ? void 0 : a.appScopedIdentity;
              a =
                (f = c("AnalyticsCoreData").identity) == null
                  ? void 0
                  : f.appScopedIdentity;
              f =
                (f = c("AnalyticsCoreData").identity) == null
                  ? void 0
                  : f.fbIdentity;
              b != null && a != null
                ? e(b, a)
                : f
                ? d("ODS").bumpEntityKey(
                    1344,
                    "js.bladerunner.identity.mismatch.ig",
                    "received.fb.identity.for.current.app_scoped.user",
                    1
                  )
                : d("ODS").bumpEntityKey(
                    1344,
                    "js.bladerunner.identity.mismatch.ig",
                    "undefined.original.or.current.user.identity",
                    1
                  );
            }
          else
            d("ODS").bumpEntityKey(
              1344,
              "js.bladerunner.identity.mismatch",
              "undefined.original.identity",
              1
            );
        } catch (a) {
          d("ODS").bumpEntityKey(
            1344,
            "js.bladerunner.identity.mismatch",
            "exception.while.logging.identity.mismatch",
            1
          );
        }
      }
      function e(a, b) {
        var c = u === 1 ? "_fb" : "_ig";
        a === "0" && b !== "0"
          ? d("ODS").bumpEntityKey(
              1344,
              "js.bladerunner.identity.mismatch" + c,
              "identity.loggedout_to_loggedin.transition",
              1
            )
          : a !== "0" && b === "0"
          ? d("ODS").bumpEntityKey(
              1344,
              "js.bladerunner.identity.mismatch" + c,
              "identity.loggedin_to_loggedout.transition",
              1
            )
          : d("ODS").bumpEntityKey(
              1344,
              "js.bladerunner.identity.mismatch" + c,
              "identity.switch_between_profiles.transition",
              1
            );
      }
    }
    g.attach = a;
  },
  98
);
__d(
  "MqttLongPollingHookCollection",
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
      b.onPollRequestSent = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSent();
        });
      };
      b.onPollRequestSuccess = function () {
        this.$1.forEach(function (a) {
          a.onPollRequestSuccess();
        });
      };
      b.onPollResponse = function (a) {
        this.$1.forEach(function (b) {
          b.onPollResponse(a);
        });
      };
      b.onPollFinish = function () {
        this.$1.forEach(function (a) {
          a.onPollFinish();
        });
      };
      b.onPollRequestFailed = function (a) {
        this.$1.forEach(function (b) {
          b.onPollRequestFailed(a);
        });
      };
      b.onPollShutdownAbort = function () {
        this.$1.forEach(function (a) {
          a.onPollShutdownAbort();
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PromiseResult",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.promise = new (b("Promise"))(function (b, c) {
          (a.$1 = b), (a.$2 = c);
        });
      }
      var c = a.prototype;
      c.resolve = function (a) {
        this.$1(a);
      };
      c.reject = function (a) {
        this.$2(a);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "MqttFetchClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "PromiseResult",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "fetch_pull",
      i = "fetch_pull_finish",
      j = "fetch_",
      k = 6e4,
      l = "action",
      m = "chunked",
      n = "send",
      o = "true",
      p = 5,
      q = 20,
      r = 10,
      s = 5e3,
      t = typeof window !== "undefined" ? window : self;
    a = (function () {
      function a() {
        (this.$1 = ""),
          (this.$2 = d("MqttEnv").Env.getLoggerInstance()),
          (this.$3 = 0),
          (this.$4 = ""),
          (this.$5 = new (c("MqttUserName"))("", 0, 1, "", 0, !0)),
          (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {}),
          (this.$10 = 0),
          (this.$11 = 0),
          (this.$12 = 0),
          (this.$13 = 0),
          (this.$14 = "Ready"),
          (this.$15 = []),
          (this.$16 = []),
          (this.$17 = null),
          (this.$18 = !1),
          (this.$19 = 0);
      }
      a.isSupported = function () {
        return typeof t.fetch === "function";
      };
      var e = a.prototype;
      e.run = function (a, b, d, e, f, g, h, i) {
        (this.$1 = c("MqttUtils").endpointWithSessionId(a, b)),
          (this.$3 = b),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = g),
          (this.$8 = h),
          (this.$9 = i),
          this.$20();
      };
      e.isTopicSupported = function (a) {
        return !0;
      };
      e.publish = function (a, d) {
        if (this.$14 !== "ReceivingData") {
          this.$2.bumpCounter(j + "publish." + a + ".invalidstate");
          return b("Promise").reject("not connected");
        } else {
          this.$2.bumpCounter(j + "publish." + a + ".publish");
          var e = new (c("PromiseResult"))();
          a = { topic: a, payload: d, promiseResult: e };
          this.$15.push(a);
          this.$21();
          return e.promise;
        }
      };
      e.abort = function () {
        (this.$6 = function () {}),
          (this.$7 = function (a) {}),
          (this.$8 = function () {}),
          (this.$9 = function (a) {});
      };
      e.$22 = function (a) {
        var b = this;
        a.forEach(function (a) {
          b.$2.bumpCounter(j + "publish." + a.topic + ".resolved"),
            a.promiseResult.resolve();
        });
        this.$12 += a.length;
      };
      e.$23 = function (a, b) {
        var c = this;
        a.forEach(function (a) {
          c.$2.bumpCounter(j + "publish." + a.topic + ".rejected"),
            a.promiseResult.reject(b);
        });
      };
      e.$24 = function (a, b, c, d) {
        var e = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request failed. Publishes:" + e + ", retry:" + c
        );
        this.$2.bumpCounter(j + "publish_request_failed");
        this.$14 !== "ReceivingData" || c === p
          ? (this.$23(a, d),
            (this.$18 = !1),
            this.$2.bumpCounter(j + "publish_request_failed_final"),
            this.$21())
          : this.$25(a, b, c + 1);
      };
      e.$26 = function (a, b, c, d) {
        if (!d.ok) {
          this.$2.bumpCounter(j + "publish_request_failed.http." + d.status);
          if (d.status === 409) {
            this.$19++;
            if (this.$19 >= r) {
              this.$2.bumpCounter(j + "409_reset");
              this.$27(new Error("Too many 409 errors"));
              return;
            }
          }
          this.$24(a, b, c, this.$28(d));
          return;
        }
        this.$2.bumpCounter(j + "publish_request_success");
        b = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request success. Publishes:" + b + ", retry:" + c
        );
        this.$22(a);
        this.$18 = !1;
        this.$21();
      };
      e.$21 = function () {
        if (this.$14 !== "ReceivingData") return;
        if (this.$18) return;
        if (this.$15.length === 0 && this.$16.length === 0) return;
        this.$18 = !0;
        var a = this.$15.slice(0, q);
        this.$15 = this.$15.slice(q, this.$15.length);
        this.$17 != null && d("MqttEnv").Env.clearTimeout(this.$17);
        this.$17 = null;
        var b = this.$16.slice(0, q);
        this.$16 = this.$16.slice(q, this.$16.length);
        this.$25(a, b, 0);
      };
      e.$25 = function (a, b, e) {
        var f = this,
          g = a
            .map(function (a) {
              return a.topic;
            })
            .join(",");
        this.$2.debugTrace(
          "FetchClient",
          "Fetch publish request sent. Publishes:" + g + ", retry:" + e
        );
        g = c("MqttUtils").endpointWithExtraParameter(this.$1, l, n);
        var h = a.map(function (a) {
          return {
            topic: a.topic,
            payload: a.payload,
            qos: 0,
            messageId: d("MqttEnv").Env.random(),
          };
        });
        h = this.$5.gen(this.$3, [], h, b);
        this.$2.bumpCounter(j + "publish_request");
        c("MqttUtils").promiseDoneWithTimeout(
          t.fetch(g, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            referrer: "no-referrer",
            body: h,
            keepalive: !1,
          }),
          function (c) {
            return f.$26(a, b, e, c);
          },
          function (c) {
            return f.$24(a, b, e, c);
          },
          k
        );
      };
      e.$29 = function (a) {
        a = a.message;
        this.$2.debugTrace(
          "FetchClient",
          "Fetch request failed with error:" + a
        );
        this.$9(a);
        this.$30(!1, a);
        this.$2.bumpCounter(j + "error");
        this.$14 = "Error";
      };
      e.$31 = function (a) {
        var b = this;
        this.$2.debugTrace("FetchClient", "Fetch response data received");
        a = d("MqttProtocolCodec").decodeByteMessages(new Uint8Array(a));
        a = a.messages;
        var c = a.filter(function (a) {
          return a.messageType === d("MqttProtocolCodec").MESSAGE_TYPE.PINGREQ;
        });
        a = a
          .filter(function (a) {
            return (
              a.messageType === d("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH
            );
          })
          .map(function (a) {
            if (!(a instanceof d("MqttProtocolCodec").WireMessage.Publish))
              return {};
            a = a;
            a.qos === 1 &&
              a.messageIdentifier != null &&
              (b.$16.push(a.messageIdentifier),
              b.$17 == null &&
                (b.$17 = d("MqttEnv").Env.setTimeout(function () {
                  b.$21();
                }, s)));
            return { topic: a.topic, payload: a.payloadMessage, qos: a.qos };
          });
        for (
          var e = a,
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
          this.$2.bumpCounter(
            j + "response_" + ((h = h.topic) != null ? h : "void")
          );
        }
        a && a.length > 0 && ((this.$13 += a.length), this.$7(a));
        c && c.length > 0 && this.$32();
      };
      e.$32 = function () {
        this.$2.debugTrace("FetchClient", "Got server ping request"),
          this.$2.bumpCounter(j + "ping");
      };
      e.$27 = function (a) {
        this.$2.debugTrace(
          "FetchClient",
          "Fetch request ended: " + a.toString()
        ),
          this.$2.bumpCounter(j + "done"),
          this.$33(a.message),
          this.$8(),
          (this.$14 = "Done");
      };
      e.$34 = function (a, b, d) {
        var e = this;
        if (d != null)
          try {
            this.$31(d);
          } catch (a) {
            this.$27(a);
            this.$2.bumpCounter(j + "dataDecodeException");
            return;
          }
        if (b) {
          this.$27(new Error("EOF"));
          return;
        }
        c("MqttUtils").promiseDone(
          a.read(),
          function (c) {
            var b = c.done;
            c = c.value;
            return e.$34(a, b, c);
          },
          function (a) {
            return e.$27(a);
          }
        );
      };
      e.$35 = function (a) {
        if (!a.ok) {
          this.$2.bumpCounter(j + "error.http." + a.status);
          this.$29(this.$28(a));
          return;
        }
        a = a.body;
        if (!a) {
          this.$29(new Error("Empty body"));
          return;
        }
        a = a.getReader();
        this.$6();
        this.$2.bumpCounter(j + "success");
        this.$30(!0, null);
        this.$11 = Date.now();
        this.$14 = "ReceivingData";
        this.$2.debugTrace("FetchClient", "Fetch request success");
        this.$34(a, !1, null);
      };
      e.$33 = function (a) {
        this.$2.eventLogPullFinish({
          pullEventName: i,
          sessionID: this.$3,
          duration: Date.now() - this.$11,
          errorMessage: a,
          publishReceived: this.$13,
          publishSent: this.$12,
        });
      };
      e.$30 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: h,
          sessionID: this.$3,
          status: a,
          duration: Date.now() - this.$10,
          hostname: this.$1,
          errorMessage: b,
        });
      };
      e.$20 = function () {
        var a = this;
        if (this.$14 !== "Ready") return;
        this.$2.debugTrace("FetchClient", "Sending fetch request");
        this.$2.bumpCounter(j + "request");
        this.$10 = Date.now();
        var b = c("MqttUtils").endpointWithExtraParameter(this.$1, m, o);
        c("MqttUtils").promiseDoneWithTimeout(
          t.fetch(b, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            referrer: "no-referrer",
            body: this.$4,
            keepalive: !1,
          }),
          function (b) {
            return a.$35(b);
          },
          function (b) {
            return a.$29(b);
          },
          k
        );
      };
      e.$28 = function (a) {
        return new Error("Http error, status=" + a.status);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttLongPollingClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttUserName",
    "Promise",
    "XHRRequest",
    "getCrossOriginTransport",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 120 * 1e3,
      i = "simple_pull",
      j = "longpolling_";
    a = (function () {
      function a() {
        (this.$3 = ""),
          (this.$4 = 0),
          (this.$2 = d("MqttEnv").Env.getLoggerInstance()),
          (this.$1 = "Ready"),
          (this.$5 = ""),
          (this.$6 = new (c("MqttUserName"))("", 0, 1, "", 0, !0)),
          (this.$7 = function () {}),
          (this.$8 = function (a) {}),
          (this.$9 = function () {}),
          (this.$10 = function (a) {}),
          (this.$11 = 0),
          (this.$12 = null),
          (this.$13 = new Set([
            "/t_ms",
            "/messenger_sync_get_diffs",
            "/messenger_sync_create_queue",
            "/webrtc",
            "/rtc_multi",
          ]));
      }
      var e = a.prototype;
      e.run = function (a, b, c, d, e, f, g, h) {
        (this.$3 = a),
          (this.$4 = b),
          (this.$5 = c),
          (this.$6 = d),
          (this.$7 = e),
          (this.$8 = f),
          (this.$9 = g),
          (this.$10 = h),
          this.$14(this.$5);
      };
      e.isTopicSupported = function (a) {
        return this.$13.has(a);
      };
      e.publish = function (a, c) {
        return b("Promise").reject("not supported");
      };
      e.abort = function () {
        this.$12 != null && this.$12.abort("Disconnected");
      };
      e.$15 = function (a, b) {
        if (this.$1 === a) return;
        this.$1 = a;
        a === "Error" && b != null && this.$10(b);
        this.$2.debugTrace("LongPollingClient", "_changeStatus : " + a);
      };
      e.$16 = function (a) {
        if (this.$1 !== "RequestSend") return;
        if (!a) {
          this.$17("EmptyResponse", null);
          return;
        }
        this.$7();
        this.$2.bumpCounter(j + "success");
        this.$18(!0, null);
        this.$15("ResponseReceived");
        a = d("MqttProtocolCodec").decodeByteMessages(new Uint8Array(a));
        a = a.messages
          .filter(function (a) {
            return a instanceof d("MqttProtocolCodec").WireMessage.Publish;
          })
          .map(function (a) {
            if (a instanceof d("MqttProtocolCodec").WireMessage.Publish) {
              a = a;
              return { topic: a.topic, payload: a.payloadMessage, qos: a.qos };
            } else return {};
          });
        this.$8(a);
        this.$9();
      };
      e.$17 = function (a, b) {
        b = b != null ? b.message : "null";
        this.$2.debugTrace(
          "LongPollingClient Error",
          "Poll failed with error:" + a + ", errorMsg:" + b
        );
        this.$18(!1, a + ":" + b);
        this.$2.bumpCounter(j + "error." + a);
        this.$15("Error", a);
      };
      e.$18 = function (a, b) {
        this.$2.eventLogPull({
          pullEventName: i,
          sessionID: this.$4,
          status: a,
          duration: Date.now() - this.$11,
          hostname: this.$3,
          errorMessage: b,
        });
      };
      e.$14 = function (a) {
        var b = this;
        if (this.$1 !== "Ready" || this.$12) return;
        this.$2.bumpCounter(j + "request");
        try {
          (this.$11 = Date.now()),
            (this.$12 = new (c("XHRRequest"))(this.$3)
              .setResponseType("arraybuffer")
              .setRawData(a)
              .setTransportBuilder(c("getCrossOriginTransport").withCredentials)
              .setResponseHandler(function (a) {
                return b.$16(a);
              })
              .setNetworkFailureHandler(function (a) {
                b.$17("Network", a);
              })
              .setErrorHandler(function (a) {
                b.$17("Error", a);
              })
              .setAbortHandler(function (a) {
                b.$17("Abort", null);
              })
              .setTimeoutHandler(function () {
                b.$17("Timeout", null);
              })
              .setTimeout(h)
              .send()),
            this.$15("RequestSend");
        } catch (a) {
          this.$17("Error", a);
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MqttLongPollingRunner",
  [
    "MqttEnv",
    "MqttFetchClient",
    "MqttLongPollingClient",
    "MqttLongPollingHookCollection",
    "MqttTypes",
    "MqttUtils",
    "Promise",
    "exponentialBackoff",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
      i = 1e3,
      j = 3e3,
      k = "mqtt_should_longpoll",
      l = "last_lp",
      m = "yes",
      n = "no";
    a = (function () {
      function a(a, b, e, f, g, h, i, j, k) {
        var l = this;
        this.$23 = function () {
          try {
            if (!l.$29()) return;
            l.$5.debugTrace(
              "LongPollingRunner",
              "_startPollingIfNecessary called"
            );
            var a = l.$30();
            l.$14 = a;
            var b = l.$9(),
              e = l.$10();
            b = b.filter(function (b) {
              return a.isTopicSupported(b);
            });
            e = e.filter(function (b) {
              return a.isTopicSupported(b.topic);
            });
            if (b.length === 0 && e.length === 0) {
              l.$5.debugTrace(
                "LongPollingRunner",
                "Poll skipped, nothing to do"
              );
              l.$14 = null;
              d("MqttEnv").Env.setTimeout(function () {
                l.$23();
              }, 1e3);
              return;
            }
            var f = c("MqttUtils").generateSessionId();
            a.run(
              l.$6,
              f,
              l.$7.gen(f, b, e),
              l.$7,
              function () {
                return l.$31();
              },
              function (a) {
                return l.$32(a);
              },
              function () {
                return l.$33();
              },
              function (a) {
                return l.$34(a);
              }
            );
            l.$19.onPollRequestSent();
            f = b.join(",");
            b = e
              .map(function (a) {
                return a.topic;
              })
              .join(",");
            l.$5.debugTrace(
              "LongPollingRunner",
              "Making a poll request to " +
                l.$6 +
                ". SubscribedTopics:" +
                f +
                ". Publishes:" +
                b
            );
          } catch (a) {
            a && l.$5.logErrorWarn(a, "lp_js_error"),
              l.$11(
                new (d("MqttTypes").MqttChannelError)(!1, "js error lp", a)
              ),
              l.$34("lp_js_error");
          }
        };
        this.$6 = a;
        this.$7 = b;
        this.$1 = f;
        this.$2 = 0;
        this.$3 = e;
        this.$4 = c("MqttUtils").hasWSSupport();
        this.$5 = d("MqttEnv").Env.getLoggerInstance();
        this.$8 = g;
        this.$9 = h;
        this.$10 = i;
        this.$11 = j;
        this.$12 = k;
        this.$13 = !1;
        this.$14 = null;
        this.$15 = "LPInactive";
        this.$16 = "NotSent";
        this.$17 = 0;
        this.$19 = new (c("MqttLongPollingHookCollection"))();
        this.$18 = c("exponentialBackoff")(this.$23, this);
        this.$20 = 0;
        this.$21 = n;
        a = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_lp_use_fetch);
        b = c("MqttFetchClient").isSupported();
        a
          ? this.$5.bumpCounter("fetch_gk_pass")
          : this.$5.bumpCounter("fetch_gk_fail");
        b
          ? this.$5.bumpCounter("fetch_api_supported")
          : this.$5.bumpCounter("fetch_api_not_supported");
        this.$22 = a && b;
      }
      var e = a.prototype;
      e.addHook = function (a) {
        this.$19.addHook(a);
      };
      e.start = function () {
        var a = this;
        this.$21 = d("MqttEnv").Env.configRead(l, n);
        this.$5.debugTrace(
          "LongPollingRunner",
          "Runner loaded, last status " + this.$21
        );
        this.$20 = Date.now();
        this.$23();
        d("MqttEnv").Env.setTimeout(function () {
          a.$23();
        }, i + 100);
        d("MqttEnv").Env.setTimeout(function () {
          a.$23();
        }, j + 100);
      };
      e.shutdown = function () {
        this.$5.debugTrace("LongPollingRunner", "Shutdown called"),
          this.$14 && this.$14.abort(),
          this.$19.onPollShutdownAbort(),
          (this.$14 = null);
      };
      e.canPublish = function () {
        return this.$15 === "LPActive" && this.$16 === "ReceivingData";
      };
      e.publish = function (a, c, e) {
        return d("MqttEnv").Env.genGk(
          d("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling
        ) &&
          this.$14 &&
          this.$14.isTopicSupported(a)
          ? this.$14.publish(a, c)
          : b("Promise").reject();
      };
      e.onConnectAttempt = function () {};
      e.onConnectFailure = function () {
        this.$2++, this.$23();
      };
      e.onConnected = function () {};
      e.onConnectSuccess = function () {
        (this.$1 = !0), d("MqttEnv").Env.configWrite(l, null);
      };
      e.onConnectionLost = function () {};
      e.onConnectionDisconnect = function () {};
      e.onSubscribe = function (a) {};
      e.onUnsubscribe = function (a) {};
      e.onPublish = function (a) {};
      e.onMessage = function (a) {};
      e.onWSFatal = function () {
        (this.$3 = !0), this.$23();
      };
      e.getStatus = function () {
        return this.$15;
      };
      e.getRequestStatus = function () {
        return this.$16;
      };
      e.$24 = function (a) {
        a !== this.$15 &&
          (this.$5.debugTrace(
            "LongPollingRunner",
            "status changed to " + a + " from " + this.$15
          ),
          (this.$15 = a),
          this.$12(this.$15, this.$16));
      };
      e.$25 = function (a) {
        if (!this.$22) return;
        a !== this.$16 &&
          (this.$5.debugTrace(
            "LongPollingRunner",
            "request status changed to " + a + " from " + this.$16
          ),
          (this.$16 = a),
          this.$12(this.$15, this.$16));
      };
      e.$26 = function () {
        this.$17 = 0;
      };
      e.$27 = function () {
        this.$17++, this.$17 >= h && this.$24("LPError");
      };
      e.$28 = function () {
        var a = d("MqttEnv").Env.genGk(
            d("MqttEnv").MqttGkNames.mqtt_lp_no_delay
          ),
          b = d("MqttEnv").Env.genGk(
            d("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled
          ),
          c = d("MqttEnv").Env.genGk(d("MqttEnv").MqttGkNames.mqtt_fast_lp);
        this.$5.debugTrace(
          "LongPollingRunner",
          "_shouldPoll? pollNow:" +
            String(a) +
            " enabled:" +
            String(b) +
            " fastPoll:" +
            String(c) +
            " hasWSSupport:" +
            String(this.$4) +
            " hasWsSuccessBefore:" +
            String(this.$1) +
            " failureCount:" +
            this.$2 +
            " wsFatal:" +
            String(this.$3)
        );
        if (!b) return !1;
        if (a) {
          this.$5.bumpCounter(k + ".nd");
          return !0;
        }
        if (!this.$4) {
          this.$5.bumpCounter(k + ".na");
          return !0;
        }
        if (this.$3) {
          this.$5.bumpCounter(k + ".fatal");
          return !0;
        }
        if (this.$1) return !1;
        if (c) {
          b = Date.now() - this.$20;
          if (this.$21 === m) {
            if (this.$2 >= 1) return !0;
            if (b > i) {
              this.$5.bumpCounter(k + ".fastdelay");
              return !0;
            }
          } else if (b > j) {
            this.$5.bumpCounter(k + ".regulardelay");
            return !0;
          }
        }
        if (this.$2 >= 3) {
          this.$5.bumpCounter(k + ".failure");
          return !0;
        }
        return !1;
      };
      e.$29 = function () {
        if (this.$14 != null) return !1;
        var a = this.$28();
        !this.$13 &&
          a &&
          (this.$5.bumpCounter("polling_kickin"),
          (this.$13 = !0),
          this.$24("LPActive"),
          this.$26());
        this.$13 &&
          !a &&
          (this.$5.bumpCounter("polling_stopped"),
          (this.$13 = !1),
          this.$24("LPInactive"),
          this.$26());
        return a;
      };
      e.$30 = function () {
        if (this.$22) {
          this.$5.debugTrace(
            "LongPollingRunner",
            "Creating polling client using Fetch API"
          );
          return new (c("MqttFetchClient"))();
        } else {
          this.$5.debugTrace(
            "LongPollingRunner",
            "Creating regular Polling client"
          );
          return new (c("MqttLongPollingClient"))();
        }
      };
      e.$31 = function () {
        this.$5.debugTrace("LongPollingRunner", "Poll success"),
          this.$19.onPollRequestSuccess(),
          this.$18.reset(),
          this.$24("LPActive"),
          this.$26(),
          d("MqttEnv").Env.configWrite(l, m),
          this.$25("ReceivingData");
      };
      e.$32 = function (a) {
        var b = a
          .map(function (a) {
            return a.topic;
          })
          .join(",");
        this.$5.debugTrace(
          "LongPollingRunner",
          "Poll response received, message received:" + b
        );
        for (b = 0; b < a.length; b++) {
          var c = a[b];
          this.$19.onPollResponse(c.topic);
          this.$8(c.topic, c.payload, c.qos);
        }
      };
      e.$33 = function () {
        this.$5.debugTrace("LongPollingRunner", "Poll finish"),
          this.$19.onPollFinish(),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$23(),
          this.$25("NotSent");
      };
      e.$34 = function (a) {
        this.$19.onPollRequestFailed(a),
          this.$14 && this.$14.abort(),
          (this.$14 = null),
          this.$18(),
          this.$27(),
          this.$25("NotSent");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometRelayEF",
  [
    "Bootloader",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "CometSSREntrypoint",
    "cometAsyncFetch",
    "gkx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function i(a, b) {
      if (!c("gkx")("1334580")) return;
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      var e = [];
      a.forEach(function (a) {
        a = a.name;
        h.has(a) ||
          (e.push(a),
          d("BootloaderEvents").notifyHasteResponseEFStart("relay_3d", a));
      });
      if (e.length === 0) return;
      var f = c("performanceAbsoluteNow")(),
        g = c("cometAsyncFetch")("/ajax/relay-ef/", {
          data: { queries: e },
          method: "POST",
        }).then(function (a) {
          return {
            fetchPredictionsEnd: c("performanceAbsoluteNow")(),
            fetchPredictionsStart: f,
            payload: a,
          };
        });
      e.forEach(function (a) {
        return h.set(a, g);
      });
    }
    function a(a, b) {
      if (!c("gkx")("1334580")) return;
      var e = c("performanceAbsoluteNow")();
      i(a, b);
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      a.forEach(function (a) {
        var b = a.name,
          f = h.get(b);
        f &&
          f !== !0 &&
          c("promiseDone")(f, function (a) {
            var f = a.fetchPredictionsEnd,
              g = a.fetchPredictionsStart;
            a = a.payload;
            a != null &&
              typeof a === "object" &&
              (c("Bootloader").loadPredictedResourceMap(
                a.predictions[b],
                {
                  onLog: function (a) {
                    return d("BootloaderEvents").notifyHasteResponseEF(
                      "relay_3d",
                      b,
                      {
                        fetchPredictionsEnd: f,
                        fetchPredictionsStart: g,
                        fetchRsrcsStart: e,
                        tierOne: a,
                      }
                    );
                  },
                },
                a.consistency.rev
              ),
              c("ClientConsistencyEventEmitter").emit(
                "newEntry",
                a.consistency
              ));
          });
        h.set(a.name, !0);
      });
    }
    b = { fetchPredictedResources: a, fetchPredictions: i };
    g["default"] = b;
  },
  98
);
__d(
  "CometOnBeforeUnloadDialog.react",
  [
    "fbt",
    "CometCardedDialogLegacy.react",
    "CometTrackingNodeProvider.react",
    "TetraButtonGroup.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.body,
        d = a.cancel,
        e = a.confirm,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.onClose,
        j = a.onCloseButtonPress,
        k = a.primaryAction,
        l = a.secondaryAction;
      a = a.title;
      var m = function () {
          k(), g();
        },
        n = function () {
          l(), g();
        };
      return i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 163,
        children: i.jsxs(c("CometCardedDialogLegacy.react"), {
          onClose: function () {
            j(), g();
          },
          testid: void 0,
          title: a,
          titleHorizontalAlignment: "start",
          withCloseButton: !0,
          children: [
            i.jsx("div", {
              className: "xz9dl7a x1pi30zi xsag5q8 x1swvt13 x1n2onr6",
              children: i.jsx(c("TetraText.react"), {
                type: "body3",
                children: b,
              }),
            }),
            i.jsx("div", {
              className:
                "x78zum5 x1q0g3np x13a6bvl xexx8yu x4uap5 x1l90r2v xkhd6sd",
              children: i.jsx(c("TetraButtonGroup.react"), {
                direction: "backward",
                paddingHorizontal: 16,
                primary: {
                  disabled: f,
                  label: (a = e) != null ? a : h._("Confirm"),
                  onPress: m,
                  testid: "CometOnBeforeUnloadDialogConfirmButton",
                },
                secondary: {
                  disabled: f,
                  label: (b = d) != null ? b : h._("Cancel"),
                  onPress: n,
                  reduceEmphasis: !0,
                  testid: "CometOnBeforeUnloadDialogCancelButton",
                },
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRouteActorToaster.react",
  [
    "fbt",
    "Actor",
    "CometRelay",
    "CometRouteActorToasterBlocklist",
    "CometRouteActorToasterQuery.graphql",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "WebPixelRatio",
    "cometPushToast",
    "getTopMostRoute",
    "promiseDone",
    "react",
    "requireDeferred",
    "useCometRouterState",
    "useCurrentRoute",
    "useProfileCometIsViewAs",
    "useRouteReferrer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useRef,
      m = c("requireDeferred")("AcfToastImpressionFalcoEvent").__setRef(
        "CometRouteActorToaster.react"
      );
    function n(a, b) {
      if (b)
        return j.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body3",
          children: h._("You're now interacting as {=m2}", [
            h._implicitParam(
              "=m2",
              j.jsx(c("TetraText.react"), {
                type: "bodyLink3",
                children: h._("your profile"),
              })
            ),
          ]),
        });
      else
        return j.jsx(c("TetraText.react"), {
          color: "primary",
          type: "body3",
          children: h._("You're now interacting as {actor}", [
            h._param(
              "actor",
              j.jsx(c("TetraText.react"), { type: "bodyLink3", children: a })
            ),
          ]),
        });
    }
    var o = i !== void 0 ? i : (i = b("CometRouteActorToasterQuery.graphql"));
    function a() {
      var a = d("CometRelay").useRelayEnvironment(),
        b = d("Actor").useActor(),
        e = b[0];
      b = c("useCometRouterState")();
      var f = c("useCurrentRoute")(),
        g = c("useRouteReferrer")(),
        h = c("useProfileCometIsViewAs")(),
        i = l({
          actorID: g == null ? void 0 : g.actorID,
          tracePolicy: g == null ? void 0 : g.tracePolicy,
        });
      g = c("CometRouteActorToasterBlocklist").route_trace_policies;
      var p = f == null ? void 0 : f.tracePolicy;
      g = g.includes(p);
      b = b != null ? c("getTopMostRoute")(b) : null;
      f = f === b;
      var q = f && !g && !h;
      k(
        function () {
          var b,
            f = (b = i.current) == null ? void 0 : b.actorID,
            g = (b = i.current) == null ? void 0 : b.tracePolicy;
          if (f != null && f !== e && q) {
            b = function (a) {
              var b;
              b =
                a == null
                  ? void 0
                  : (b = a.viewer) == null
                  ? void 0
                  : (b = b.actor) == null
                  ? void 0
                  : b.name;
              if (b != null) {
                var e;
                e =
                  (a == null
                    ? void 0
                    : (e = a.viewer) == null
                    ? void 0
                    : (e = e.actor) == null
                    ? void 0
                    : e.__typename) === "User";
                a =
                  a == null
                    ? void 0
                    : (a = a.viewer) == null
                    ? void 0
                    : (a = a.actor) == null
                    ? void 0
                    : (a = a.toast_icon) == null
                    ? void 0
                    : a.uri;
                a =
                  a != null
                    ? j.jsx(c("TetraProfilePhoto.react"), {
                        shape: "circle",
                        size: 32,
                        source: { uri: a },
                      })
                    : null;
                b = n(b, e);
                d("cometPushToast").cometPushToast({ icon: a, message: b });
                m.onReady(function (a) {
                  a = a.log;
                  a(function () {
                    var a;
                    return {
                      destination: (a = p) != null ? a : "comet.app",
                      destination_type: "comet_route",
                      source: g,
                      source_type: "comet_route",
                      source_userid: f,
                    };
                  });
                });
              }
            };
            var h = { scale: d("WebPixelRatio").get() };
            c("promiseDone")(
              d("CometRelay").fetchQuery(a, o, h).toPromise(),
              b
            );
          }
          i.current = { actorID: e, tracePolicy: p };
        },
        [e, p, a, q]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
