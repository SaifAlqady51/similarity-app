/*FB_PKG_DELIM*/

__d(
  "BaseInlinePressable.react",
  ["CometPressable.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        disabled: { textDecoration: "x1hl2dhg", $$css: !0 },
        disabledColor: { color: "x1dntmbh", $$css: !0 },
        disabledLink: { opacity: "xbyyjgo", $$css: !0 },
        expanding: { display: "x3nfvp2", $$css: !0 },
        link: { ":hover_textDecoration": "xt0b8zv", $$css: !0 },
        linkColor: { color: "x1fey0fg", $$css: !0 },
        root: {
          display: "xt0psk2",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.ariaLabel,
        e = a.children,
        f = a.color;
      f = f === void 0 ? "blue" : f;
      var g = a.cursorDisabled,
        j = a.expanding;
      j = j === void 0 ? !1 : j;
      var k = a.linkProps,
        l = a.onPress,
        m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ariaLabel",
        "children",
        "color",
        "cursorDisabled",
        "expanding",
        "linkProps",
        "onPress",
        "xstyle",
      ]);
      var n = [i.root, g === !0 && i.defaultCursor, j && i.expanding, m],
        o = f !== "inherit" && (k != null || l != null);
      return h.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"](
          { "aria-label": d, linkProps: k, onPress: l, overlayDisabled: !0 },
          a,
          {
            ref: b,
            xstyle: function (a) {
              var b = a.disabled;
              a = a.hovered;
              return [
                n,
                o && i.linkColor,
                a && !b && i.link,
                b && i.disabled,
                b && !o && i.disabledColor,
                b && o && i.disabledLink,
              ];
            },
            children: e,
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometSSREntrypoint",
  ["objectValues", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b,
        c = d("relay-runtime").__internal.withProvidedVariables(
          a.variables,
          a.parameters.params.providedVariables
        );
      return {
        actor_id:
          (b =
            (b = a.environmentProviderOptions) == null ? void 0 : b.actorID) !=
          null
            ? b
            : null,
        id: a.parameters.params.id,
        name: a.parameters.params.name,
        ssr_boundary:
          (a =
            (b = a.environmentProviderOptions) == null
              ? void 0
              : b.ssrBoundary) != null
            ? a
            : null,
        variables: c,
      };
    }
    function i(a, b) {
      b = a.getPreloadProps(b);
      var d = b.entryPoints;
      b = b.queries;
      b = (b = b) != null ? b : {};
      var e = c("objectValues")(b).filter(function (a) {
          return a != null;
        }),
        f = [a.root.getModuleId()];
      if (d != null) {
        b = Object.keys(d);
        b.forEach(function (a) {
          a = d[a];
          if (a == null) return;
          var b = a.entryPoint;
          a = a.entryPointParams;
          b = i(b, a);
          e = e.concat(b.queries);
          f = f.concat(b.roots);
        });
      }
      return { queries: e, roots: f };
    }
    function a(a, b) {
      a = i(a, b);
      b = a.queries;
      return b.map(h);
    }
    function b(a) {
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      return a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { quries: b.map(h), roots: a };
      });
    }
    function e(a, b) {
      a = i(a, b);
      b = a.queries;
      a = a.roots;
      return { queries: b.map(h), roots: a };
    }
    function f() {
      throw new Error(
        "This function should not be called. It exists solely for the type-generation"
      );
    }
    function j(a, b) {
      var d;
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      a = a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { queries: b.map(h), roots: a };
      });
      d = c("objectValues")(
        (d = b == null ? void 0 : b.getDisplayQueries()) != null ? d : {}
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      b = c("objectValues")(
        (b = b == null ? void 0 : b.getDeferredQueries()) != null ? b : {}
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      return { appshellQueries: { deferred: b, display: d }, routeObjects: a };
    }
    g.processRootEntryPoint = a;
    g.processRootEntryPoints = b;
    g.processRootEntryPointData = e;
    g.preloadQuery = f;
    g.processServerEntryPoints = j;
  },
  98
);
__d(
  "PolarisUnfollowDialogContent.react",
  [
    "fbt",
    "IGCoreDialog",
    "IGDSText.react",
    "PolarisGenericStrings",
    "PolarisProfileStrings",
    "PolarisUserAvatar.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.isUserGroupProfile,
        e = a.isUserPrivate,
        f = a.onCancel,
        g = a.onUnfollow,
        h = a.profilePictureSize,
        k = a.profilePictureUrl;
      a = a.username;
      e = j(e, b, a);
      return i.jsxs("div", {
        className: "x78zum5 xdt5ytf",
        children: [
          i.jsxs("div", {
            className: "x78zum5 xdt5ytf x1miatn0 xqmdsaz x1gan7if x1xfsgkm",
            children: [
              i.jsx("div", {
                className: "xamitd3 x1iymm2a",
                children: i.jsx(c("PolarisUserAvatar.react"), {
                  isLink: !1,
                  profilePictureUrl: k,
                  size: h,
                  username: a,
                }),
              }),
              i.jsx(c("IGDSText.react").Body, {
                textAlign: "center",
                children: e,
              }),
            ],
          }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            "data-testid": void 0,
            onClick: g,
            children: b
              ? d("PolarisProfileStrings").LEAVE_GROUP_PROFILE_TEXT
              : d("PolarisProfileStrings").UNFOLLOW_TEXT,
          }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: f,
            children: d("PolarisGenericStrings").CANCEL_TEXT,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a, b, c) {
      if (c == null) return null;
      if (a === !1 && b === !1)
        return h._("Unfollow \u0040{username}?", [h._param("username", c)]);
      if (a === !1 && b === !0)
        return h._("Leave \u0040{username}?", [h._param("username", c)]);
      if (a === !0 && b === !1)
        return h._(
          "If you change your mind, you'll have to request to follow \u0040{username} again.",
          [h._param("username", c)]
        );
      if (a === !0 && b === !0)
        return h._(
          "If you change your mind, you'll have to request to join \u0040{username} again.",
          [h._param("username", c)]
        );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUnfollowDialogContentContainer.react",
  [
    "PolarisConnectionsLogger",
    "PolarisGroupProfileUtils",
    "PolarisReactRedux",
    "PolarisRelationshipActionUnfollowUser",
    "PolarisUnfollowDialogContent.react",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect;
    function a(a) {
      var b = a.analyticsContext,
        e = a.analyticsExtra,
        f = a.onClose,
        g = a.onUnfollowUser,
        k = a.size;
      k = k === void 0 ? 90 : k;
      var l = a.userId,
        m = d("PolarisReactRedux").useDispatch();
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisUserSelectors").getUserById(a, l);
      });
      var n = a.isPrivate,
        o = a.profilePictureUrl,
        p = a.username;
      a = d("PolarisGroupProfileUtils").getIsUserGroupProfile(a);
      var q = i(
        function (a) {
          d("PolarisConnectionsLogger").logConnectionAction({
            eventName: a,
            targetId: l,
            containerModule: b,
          });
        },
        [b, l]
      );
      j(
        function () {
          q("unfollow_dialog_impresssion");
        },
        [q]
      );
      var r = function () {
          q("unfollow_dialog_confirmed"),
            g != null
              ? g(l, b, e)
              : m(
                  d("PolarisRelationshipActionUnfollowUser").unfollowUser(
                    l,
                    b,
                    e
                  )
                ),
            f();
        },
        s = function () {
          q("unfollow_dialog_cancelled"), f();
        };
      return h.jsx(c("PolarisUnfollowDialogContent.react"), {
        isUserGroupProfile: a,
        isUserPrivate: n,
        onCancel: s,
        onUnfollow: r,
        profilePictureSize: k,
        profilePictureUrl: o,
        username: p,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUnfollowDialog.react",
  ["IGDSDialog.react", "PolarisUnfollowDialogContentContainer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.analyticsContext,
        d = a.analyticsExtra,
        e = a.onClose,
        f = a.onUnfollowUser,
        g = a.size;
      g = g === void 0 ? 90 : g;
      a = a.userId;
      return h.jsx(c("IGDSDialog.react"), {
        onClose: e,
        children: h.jsx(c("PolarisUnfollowDialogContentContainer.react"), {
          analyticsContext: b,
          analyticsExtra: d,
          onClose: e,
          onUnfollowUser: f,
          size: g,
          userId: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "ScriptPath",
  ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = "sp_pi",
      j = 1e3 * 30,
      k = null,
      l = null,
      m = new (b("SubscriptionList"))(),
      n = null,
      o = [],
      p = b("TimeSlice").guard(
        function (a, c) {
          m.getCallbacks().forEach(function (d) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(
              function () {
                d({ source: k, dest: l, cause: a, extraData: c });
              },
              null,
              []
            );
          });
        },
        "ScriptPath Notifying callbacks",
        { propagationType: b("TimeSlice").PropagationType.ORPHAN }
      );
    function q() {
      return l ? l.scriptPath : void 0;
    }
    function r() {
      var a = (h || (h = b("WebStorage"))).getSessionStorage();
      if (!a || b("isInIframe")()) return;
      h.setItemGuarded(
        a,
        i,
        JSON.stringify({ pageInfo: l, clickPoint: n, time: Date.now() })
      );
    }
    function a() {
      var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
      if (!a) return;
      var c = a.getItem(i);
      if (c) {
        c = JSON.parse(c);
        c &&
          (c.time < Date.now() - j &&
            ((a = (h || (h = b("WebStorage"))).getSessionStorage()),
            a && a.removeItem(i)),
          (l = c.pageInfo),
          (n = c.clickPoint),
          l && (l.restored = !0));
      }
    }
    a();
    c = {
      set: function (a, b, c) {
        (k = l),
          (l = { scriptPath: a, categoryToken: b, extraData: c || {} }),
          (o = []),
          (window._script_path = a),
          p();
      },
      openOverlayView: function (a, b, c) {
        if (!a) return;
        var d = o.length;
        (d === 0 || o[d - 1] !== a) &&
          ((k = babelHelpers["extends"]({}, l)),
          l && (l.topViewEndpoint = a),
          c && c.replaceTopOverlay && d > 0
            ? ((o[d - 1] = a), p("replace_overlay_view", b))
            : (o.push(a), p("open_overlay_view", b)));
      },
      closeOverlayView: function (a, b) {
        a = o.lastIndexOf(a);
        if (a === -1) return;
        k = babelHelpers["extends"]({}, l);
        l &&
          (a > 0 ? (l.topViewEndpoint = o[a - 1]) : (l.topViewEndpoint = null));
        o = o.slice(0, a);
        p("close_overlay_view", b);
      },
      setClickPointInfo: function (a) {
        (n = a), r();
      },
      getClickPointInfo: function () {
        return n;
      },
      getScriptPath: q,
      getCategoryToken: function () {
        return l ? l.categoryToken : void 0;
      },
      getEarlyFlushPage: function () {
        var a;
        return (a = l) == null
          ? void 0
          : (a = a.extraData) == null
          ? void 0
          : a.ef_page;
      },
      getTopViewEndpoint: function () {
        var a = o.length;
        return a > 0 ? o[a - 1] : q();
      },
      getPageInfo: function () {
        return l;
      },
      getSourcePageInfo: function () {
        return k;
      },
      subscribe: function (a) {
        return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"));
      },
      shutdown: function () {
        r();
      },
    };
    e.exports = c;
  },
  null
);
__d(
  "Base64",
  [],
  function (a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function h(a) {
      a = (a.charCodeAt(0) << 16) | (a.charCodeAt(1) << 8) | a.charCodeAt(2);
      return String.fromCharCode(
        g.charCodeAt(a >>> 18),
        g.charCodeAt((a >>> 12) & 63),
        g.charCodeAt((a >>> 6) & 63),
        g.charCodeAt(a & 63)
      );
    }
    var i =
      ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
    function j(a) {
      a =
        (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
        (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
        (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
        i.charCodeAt(a.charCodeAt(3) - 43);
      return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
    }
    var k = {
      encode: function (a) {
        a = unescape(encodeURI(a));
        var b = (a.length + 2) % 3;
        a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
        return a.slice(0, a.length + b - 2) + "==".slice(b);
      },
      decode: function (a) {
        a = a.replace(/[^A-Za-z0-9+\/]/g, "");
        var b = (a.length + 3) & 3;
        a = (a + "AAA".slice(b)).replace(/..../g, j);
        a = a.slice(0, a.length + b - 3);
        try {
          return decodeURIComponent(escape(a));
        } catch (a) {
          throw new Error("Not valid UTF-8");
        }
      },
      encodeObject: function (a) {
        return k.encode(JSON.stringify(a));
      },
      decodeObject: function (a) {
        return JSON.parse(k.decode(a));
      },
      encodeNums: function (a) {
        return String.fromCharCode.apply(
          String,
          a.map(function (a) {
            return g.charCodeAt(
              (a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63
            );
          })
        );
      },
    };
    a = k;
    f["default"] = a;
  },
  66
); /*FB_PKG_DELIM*/
__d(
  "PolarisAPIGetFrCookie",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return d("PolarisInstapi")
        .apiPost("/api/v1/web/accounts/get_encrypted_credentials/", {
          body: { payload: a },
        })
        .then(function (a) {
          return a.data;
        });
    }
    g.getFrCookie = a;
  },
  98
);
__d(
  "buildIframeOriginUrl",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFacebookCookieSyncConstants",
  ["URI", "buildIframeOriginUrl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      ready: "ig_iframe_ready",
      success: "ig_iframe_success",
      error: "ig_iframe_error",
      sync: "ig_iframe_fb_sync",
      ig_sync: "ig_iframe_ig_sync",
      ig_sync_success: "ig_iframe_ig_sync_success",
      ig_sync_error: "ig_iframe_ig_sync_error",
    };
    b = c("buildIframeOriginUrl")("https://www.facebook.com");
    d = new (c("URI"))(b).getDomain();
    e = "fr";
    g.IFRAME_MESSAGES = a;
    g.IFRAME_ORIGIN = b;
    g.IFRAME_DOMAIN = d;
    g.FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY = e;
  },
  98
);
__d(
  "XAsyncRequest",
  ["AsyncRequest"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        var b = this;
        this.setAllowCrossPageTransition = function (a) {
          b.$1.setAllowCrossPageTransition(a);
          return b;
        };
        this.$1 = new (c("AsyncRequest"))(a);
      }
      var b = a.prototype;
      b.setURI = function (a) {
        this.$1.setURI(a);
        return this;
      };
      b.setTimeoutHandler = function (a, b) {
        this.$1.setTimeoutHandler(a, b);
        return this;
      };
      b.setOption = function (a, b) {
        this.$1.setOption(a, b);
        return this;
      };
      b.setMethod = function (a) {
        this.$1.setMethod(a);
        return this;
      };
      b.setData = function (a) {
        this.$1.setData(a);
        return this;
      };
      b.setHandler = function (a) {
        this.$1.setHandler(a);
        return this;
      };
      b.setPayloadHandler = function (a) {
        this.setHandler(function (b) {
          return a(b.payload);
        });
        return this;
      };
      b.setErrorHandler = function (a) {
        this.$1.setErrorHandler(a);
        return this;
      };
      b.send = function () {
        this.$1.send();
        return this;
      };
      b.abort = function () {
        this.$1.abort();
      };
      b.setReadOnly = function (a) {
        this.$1.setReadOnly(a);
        return this;
      };
      b.setAllowCrossOrigin = function (a) {
        this.$1.setAllowCrossOrigin(a);
        return this;
      };
      b.setAllowCredentials = function (a) {
        this.$1.setAllowCredentials(a);
        return this;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XPolarisFacebookSyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/sync/instagram/", {});
  },
  null
);
__d(
  "PolarisFacebookToInstagramCookieSync.react",
  [
    "FBLogger",
    "PolarisFacebookCookieSyncConstants",
    "PolarisODS",
    "SecureMessageListener",
    "SecurePostMessage",
    "XAsyncRequest",
    "XPolarisFacebookSyncController",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useEffect;
    function a(a) {
      var b = a.frameRef,
        e = a.onCleanUp;
      h(
        function () {
          var a = function () {
              c("PolarisODS").incr("web.cookie_sync.oo_cookie.start_fb_sync");
              var a = b.current;
              (a == null ? void 0 : a.contentWindow) != null &&
                d("SecurePostMessage").sendMessageToSpecificOrigin(
                  a.contentWindow,
                  {
                    eventName: d("PolarisFacebookCookieSyncConstants")
                      .IFRAME_MESSAGES.ig_sync,
                  },
                  d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN
                );
            },
            f = function (b) {
              if (
                b.origin !==
                d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN
              )
                return;
              var f = b.data.eventName;
              switch (f) {
                case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES
                  .ready:
                  a();
                  break;
                case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES
                  .ig_sync_success:
                  c("PolarisODS").incr(
                    "web.cookie_sync.oo_cookie.retrieve_success"
                  );
                  f = c("XPolarisFacebookSyncController")
                    .getURIBuilder()
                    .getURI();
                  new (c("XAsyncRequest"))()
                    .setURI(f)
                    .setMethod("POST")
                    .setData({
                      encrypted_data:
                        (f = b.data.data) == null ? void 0 : f.data,
                    })
                    .setHandler(function (a) {
                      c("PolarisODS").incr(
                        "web.cookie_sync.oo_cookie.sync_success"
                      );
                    })
                    .setErrorHandler(function (a) {
                      c("PolarisODS").incr(
                        "web.cookie_sync.oo_cookie.sync_fail"
                      );
                      a =
                        (a = a.errorDescription) != null
                          ? a
                          : "Error when syncing ig cookies";
                      c("FBLogger")("ig_web").mustfix(a);
                    })
                    .send();
                  e();
                  break;
                case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES
                  .ig_sync_error:
                  c("PolarisODS").incr(
                    "web.cookie_sync.oo_cookie.retrieve_error"
                  );
                  b =
                    (f = b.data.errorDescription) != null
                      ? f
                      : "Exception thrown when syncing cookie to sync ig cookie";
                  c("FBLogger")("ig_web").mustfix(b);
                  e();
              }
            },
            g = new (c("SecureMessageListener"))(window)
              .setEventHandler(f)
              .setSupportedOrigins([
                d("PolarisFacebookCookieSyncConstants").IFRAME_DOMAIN,
              ])
              .beginListening();
          return function () {
            g.stopListening();
          };
        },
        [b, e]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIgFrCookieUpdaterFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_fr_cookie_updater",
          a(),
          {},
          h
        );
      },
    };
    g.IgFrCookieUpdaterFalcoEvent = a;
  },
  98
);
__d(
  "PolarisInstagramToFacebookCookieSync.react",
  [
    "FBLogger",
    "PolarisAPIGetFrCookie",
    "PolarisDOMListener.react",
    "PolarisFacebookCookieSyncConstants",
    "PolarisIgFrCookieUpdaterFalcoEvent",
    "PolarisODS",
    "PolarisReactRedux",
    "PolarisWebStorage",
    "SecurePostMessage",
    "browserHistory",
    "gkx",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = Number(new Date().getTime());
    function l(a) {
      (a.total_latency = new Date().getTime() - k),
        d("PolarisIgFrCookieUpdaterFalcoEvent").IgFrCookieUpdaterFalcoEvent.log(
          function () {
            return a;
          }
        );
    }
    function a(a) {
      var b = a.frameRef,
        e = a.frData,
        f = a.onCleanUp,
        g = c("gkx")("4906");
      a = Number(
        d("PolarisReactRedux").useSelector(function (a) {
          return (a = d("polarisUserSelectors").getViewer(a)) == null
            ? void 0
            : a.id;
        })
      );
      var k = d("browserHistory").getPath(d("browserHistory").browserHistory);
      a = j({
        ig_user_id: a,
        iframe_origin: d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN,
        is_blacklisted: !1,
        local_storage_same_as_api: !0,
        show_iframe: !1,
        local_storage_updated: !1,
        is_control_group: !1,
        is_local_storage_accessible: !1,
        browser_history_path: k,
        local_storage_data: e,
      });
      var m = a.current;
      i(function () {
        g || ((m.is_blacklisted = !0), l(m), f());
      }, []);
      k = function (a) {
        var b = a.data.eventName;
        m.iframe_message_origin = a.origin;
        if (
          a.origin !== d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN
        ) {
          b in d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES &&
            ((m.iframe_message_origin_mismatch = !0), l(m));
          return;
        }
        switch (b) {
          case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.ready:
            c("PolarisODS").incr("web.frcookie.iframe.ready");
            m.iframe_message_ready = !0;
            n();
            break;
          case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.success:
            c("PolarisODS").incr("web.frcookie.iframe.success");
            m.iframe_message_success = !0;
            l(m);
            f();
            break;
          case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.error:
            c("PolarisODS").incr("web.frcookie.iframe.error");
            o();
            m.iframe_message_error = !0;
            l(m);
            break;
        }
      };
      var n = function () {
          m.iframe_non_null = !1;
          m.iframe_content_window_non_null = !1;
          var a = b.current;
          if (a == null) return;
          e == null && c("PolarisODS").incr("web.frcookie.local_storage.empty");
          d("PolarisAPIGetFrCookie")
            .getFrCookie(e)
            .then(function (b) {
              m.api_data = b.fr;
              if (b.fr === e) {
                l(m);
                f();
                return;
              }
              m.local_storage_same_as_api = !1;
              var g = c("PolarisWebStorage").getLocalStorage();
              if (g == null) {
                l(m);
                f();
                return;
              }
              m.is_local_storage_accessible = !0;
              if (b.fr === "") {
                g.removeItem(
                  d("PolarisFacebookCookieSyncConstants")
                    .FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY
                );
                c("PolarisODS").incr("web.frcookie.local_storage.remove");
                l(m);
                f();
                return;
              }
              g.setItem(
                d("PolarisFacebookCookieSyncConstants")
                  .FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY,
                b.fr
              );
              m.show_iframe = !0;
              m.local_storage_updated = !0;
              m.iframe_payload = b.fr;
              m.iframe_non_null = !0;
              a.contentWindow != null &&
                ((m.iframe_content_window_non_null = !0),
                d("SecurePostMessage").sendMessageToSpecificOrigin(
                  a.contentWindow,
                  {
                    data: b.fr,
                    eventName: d("PolarisFacebookCookieSyncConstants")
                      .IFRAME_MESSAGES.sync,
                  },
                  d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN
                ));
              c("PolarisODS").incr("web.frcookie.local_storage.update");
            })
            ["catch"](function (a) {
              (m.exception = a.toString()),
                l(m),
                c("FBLogger")("ig_web")
                  .catching(a)
                  .mustfix("Exception thrown when getting frCookie"),
                o();
            });
        },
        o = function () {
          var a = c("PolarisWebStorage").getLocalStorage();
          c("PolarisWebStorage").isLocalStorageSupported() &&
            a != null &&
            a.removeItem(
              d("PolarisFacebookCookieSyncConstants")
                .FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY
            );
          f();
        };
      return (
        g &&
        h.jsx(c("PolarisDOMListener.react"), {
          event: "message",
          handler: k,
          target: window,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFacebookCookieSyncImpl.react",
  [
    "JSScheduler",
    "PolarisDOMListener.react",
    "PolarisFacebookCookieSyncConstants",
    "PolarisFacebookToInstagramCookieSync.react",
    "PolarisIgFrCookieUpdaterFalcoEvent",
    "PolarisInstagramToFacebookCookieSync.react",
    "PolarisReactRedux",
    "PolarisUA",
    "PolarisWebStorage",
    "RunComet",
    "browserHistory",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l =
        d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN +
        "/instagram/login_sync/",
      m = ["terms", "challenge"],
      n = 3,
      o = Number(new Date().getTime());
    function p(a) {
      (a.total_latency = new Date().getTime() - o),
        d("PolarisIgFrCookieUpdaterFalcoEvent").IgFrCookieUpdaterFalcoEvent.log(
          function () {
            return a;
          }
        );
    }
    var q = function () {
      if (
        !d("PolarisUA").isIGWebview() &&
        c("PolarisWebStorage").isLocalStorageSupported()
      ) {
        var a = c("PolarisWebStorage").getLocalStorage();
        if (a != null)
          return a.getItem(
            d("PolarisFacebookCookieSyncConstants")
              .FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY
          );
      }
      return null;
    };
    function r(a) {
      a = a.frData;
      var b = j(null),
        e = Number(
          d("PolarisReactRedux").useSelector(function (a) {
            return (a = d("polarisUserSelectors").getViewer(a)) == null
              ? void 0
              : a.id;
          })
        );
      e = j({
        ig_user_id: e,
        iframe_origin: d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN,
        is_blacklisted: !1,
        local_storage_same_as_api: !0,
        show_iframe: !1,
        local_storage_updated: !1,
        is_control_group: !1,
        is_local_storage_accessible: !1,
        browser_history_path: d("browserHistory").getPath(
          d("browserHistory").browserHistory
        ),
        local_storage_data: a,
      });
      var f = e.current;
      e = function () {
        f.iframe_unload = !0;
      };
      var g = k(!1),
        m = g[0],
        o = g[1];
      i(function () {
        var a = null,
          b = null,
          e = d("RunComet").onAfterLoad(function () {
            a = c("JSScheduler").scheduleLoggingPriCallback(function () {
              b = window.setTimeout(function () {
                o(!0);
              }, n * 1e3);
            });
          });
        return function () {
          b && window.clearTimeout(b),
            a && c("JSScheduler").cancelCallback(a),
            e && e.remove();
        };
      }, []);
      g = k(!1);
      var q = g[0],
        r = g[1];
      g = k(!1);
      var s = g[0],
        t = g[1];
      g = q && s;
      return !m || g
        ? null
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx("iframe", {
                onError: function () {
                  (f.iframe_on_error = !0), p(f);
                },
                onLoad: function () {
                  f.iframe_on_load = !0;
                },
                ref: b,
                src: l,
                style: { height: 0, width: 0, border: "none", display: "none" },
                title: "fr",
              }),
              h.jsx(c("PolarisInstagramToFacebookCookieSync.react"), {
                frameRef: b,
                frData: a,
                onCleanUp: function () {
                  return r(!0);
                },
              }),
              h.jsx(c("PolarisFacebookToInstagramCookieSync.react"), {
                frameRef: b,
                onCleanUp: function () {
                  return t(!0);
                },
              }),
              h.jsx(c("PolarisDOMListener.react"), {
                event: "beforeunload",
                handler: e,
                target: window,
              }),
            ],
          });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a() {
      var a = d("PolarisReactRedux").useSelector(function (a) {
          return !!(a == null
            ? void 0
            : (a = a.cookieModal) == null
            ? void 0
            : a.visible);
        }),
        b = Number(
          d("PolarisReactRedux").useSelector(function (a) {
            return (a = d("polarisUserSelectors").getViewer(a)) == null
              ? void 0
              : a.id;
          })
        );
      if (a) return null;
      var c = d("browserHistory").getPath(d("browserHistory").browserHistory);
      if (
        m.some(function (a) {
          return c.includes(a);
        })
      ) {
        p({
          ig_user_id: b,
          iframe_origin: d("PolarisFacebookCookieSyncConstants").IFRAME_ORIGIN,
          is_blacklisted: !0,
          local_storage_same_as_api: !0,
          show_iframe: !1,
          local_storage_updated: !1,
          is_control_group: !1,
          browser_history_path: c,
          is_local_storage_accessible: !1,
        });
        return null;
      }
      return h.jsx(r, { frData: q() });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
