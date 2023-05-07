/*FB_PKG_DELIM*/

__d(
  "CometNotificationsRootContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isNotificationsRoute: !1, source: null };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useSEOLoggedOutWebCrawler",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1779508");
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFullScreen",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c =
        a.requestFullscreen ||
        a.mozRequestFullScreen ||
        a.msRequestFullscreen ||
        a.webkitRequestFullscreen;
      return typeof c === "function" ? c.call(a) : b("Promise").reject();
    }
    function c() {
      var a =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen ||
        document.webkitExitFullscreen;
      return typeof a === "function" ? a.call(document) : b("Promise").reject();
    }
    function d() {
      return (
        (document.webkitFullscreenEnabled === !0 ||
          document.mozFullScreenEnabled === !0 ||
          document.msFullscreenEnabled === !0 ||
          document.fullscreenEnabled === !0) &&
        (typeof document.webkitExitFullscreen === "function" ||
          typeof document.mozCancelFullScreen === "function" ||
          typeof document.msExitFullscreen === "function" ||
          typeof document.exitFullscreen === "function")
      );
    }
    function g() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        null
      );
    }
    function e() {
      return g() != null;
    }
    function h() {
      return [
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "MSFullscreenChange",
        "fullscreenchange",
      ];
    }
    function i(a) {
      var b = window.document,
        c = !1,
        d = !0;
      h().forEach(function (e) {
        b.addEventListener(e, a, { capture: c, passive: d });
      });
      return function () {
        h().forEach(function (d) {
          b.removeEventListener(d, a, c);
        });
      };
    }
    f.requestFullScreen = a;
    f.exitFullScreen = c;
    f.isSupported = d;
    f.getFullScreenElement = g;
    f.isFullScreen = e;
    f.getFullScreenChangeEventNames = h;
    f.subscribeToFullScreenChangeEvent = i;
  },
  66
);
__d(
  "OzOneSemanticHandlerUtils",
  ["ConstUriUtils", "qex", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      b != null && b.indexOf("+RE") >= 0 && a.retry(), c != null && c();
    }
    function a(a, b) {
      var d = b.error;
      d = d.getExtra();
      var e = d.code;
      d = d.headers;
      var f = null;
      e == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
      d == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must contain response Headers.",
          "comet_video_player"
        );
      if (d != null) {
        d = d.get("x-fb-one-variant");
        f = (d = d) != null ? d : null;
      }
      d = JSON.parse(a.getString("network_retry_intervals_json", "{}"));
      a = d[e];
      switch (e) {
        case "410":
          b.endStream();
          break;
        case "404":
          h(b, f, function () {
            var a = c("qex")._("1634") || !1;
            a && b.retry({ behavior: "recover_failed_request" });
          });
          break;
        case "429":
          b.retry(a);
          break;
        case "403":
        default:
      }
    }
    function i(a) {
      if (a != null) {
        a = parseInt(a, 10);
        var b = c("qex")._("1635");
        if (b != null && b > 0) return !isNaN(a) && a > 0 && a <= b;
      }
      return !1;
    }
    function j(a, b) {
      if (a != null && b != null) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        return !isNaN(a) && !isNaN(b) && a > 0 && a <= b;
      }
      return !1;
    }
    function k(a) {
      if (a != null) {
        a = d("ConstUriUtils").getUri(a);
        if (a) {
          a = a.getQueryParam("os_param");
          return a ? String(a).toString() : null;
        }
      }
      return null;
    }
    function l(a, b) {
      var d = a != null;
      return i(b) || ((d || !!c("qex")._("1636")) && j(b, a));
    }
    function b(a) {
      var b = a.getExtra();
      b = b.headers;
      b = m(b);
      a = a.getExtra();
      var d = a.code;
      a = a.url;
      if (b != null && d == null) {
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
        return !1;
      }
      d = k(a);
      return l(d, b);
    }
    function m(a) {
      if (a) {
        a = a.get("x-fb-one");
        if (a != null) return parseInt(a, 10) > 0 ? a : null;
      }
      return null;
    }
    function e(a, b, c) {
      var d = null,
        e = null;
      b != null && ((d = k(b)), d != null && a.setOneReqWave(parseInt(d, 10)));
      b = c == null ? void 0 : c.headers;
      b && ((e = m(b)), e != null && a.setOneResWave(parseInt(e, 10)));
      a.setOneObserved(l(d, e));
    }
    g.maybeRetryForVariant = h;
    g.evaluateOneSemanticsResponse = a;
    g.isOneSemanticsForcedForResponseWave = i;
    g.isOneSemanticsEnabledForWave = j;
    g.getOneSemanticRequestWave = k;
    g.shouldRespondWithOneSemantics = b;
    g.getOneSemanticResponseWave = m;
    g.setOneSemanticFetchStreamLoggingAttributes = e;
  },
  98
);
__d(
  "handleOzManifestFetchErrorEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = a.getNumber("initial_manifest_request_retry_count", 0),
        d = JSON.parse(a.getString("network_retry_intervals_json", "{}")),
        e = a.getNumber("live_max_try_attempts_on_404", 1),
        f = ["404", "503"];
      a.getBool("live_gracefully_handle_no_network", !1) && f.push("0");
      a.getBool("live_gracefully_handle_410", !1) && f.push("410");
      a.getBool("live_gracefully_handle_502", !1) && f.push("502");
      a.getBool("live_gracefully_handle_429", !1) && f.push("429");
      a.getBool("live_gracefully_handle_504", !1) && f.push("504");
      a.getBool("normalize_mpd_fetch_errors", !1) && f.push("20");
      var g = b.error.getExtra().code;
      if (a.getBool("no_retry_on_empty_string_error_code", !1) && g === "")
        return;
      a.getBool("handle_mpd_null_error_codes", !1) &&
        (g = g != null ? g : null);
      d = d[g];
      if (b.isInitialRequest)
        typeof d === "number" &&
          d > 0 &&
          b.retryAttemptCount < c &&
          b.retry({ waitMs: d });
      else if (g != null && f.indexOf(g) > -1)
        switch (g) {
          case "410":
            b.endStream();
            break;
          case "404":
            e < b.consecutiveFailuresForErrorCode && b.retry();
            break;
          case "504":
          case "502":
          case "503":
          case "20":
          case "0":
            b.retry();
            break;
          case "429":
            typeof d === "number" && d > 0 && b.retry({ waitMs: d });
            break;
          default:
            break;
        }
      else
        g === null && a.getBool("handle_mpd_null_error_codes", !1) && b.retry();
    }
    f["default"] = a;
  },
  66
);
__d(
  "handleOzStreamErrorEvent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    function a(a, b) {
      var c = b.error.getExtra().code;
      if (a.getBool("no_retry_on_empty_string_error_code", !1) && c === "")
        return;
      if (a.getBool("retry_null_error_code_in_stream", !1) && c == null) {
        b.retry();
        return;
      }
      var d = JSON.parse(a.getString("network_end_broadcasts_json", "[]"));
      if (d.includes(c)) {
        b.endStream();
        return;
      }
      d = JSON.parse(a.getString("network_skip_json", "[]"));
      if (d.includes(c)) {
        b.retry();
        return;
      }
      d = a.getBool("back_off_pdash_504_retry", !0)
        ? g[b.retryAttemptCount]
        : 0;
      var e = JSON.parse(a.getString("network_reload_mpd_json", "[]")),
        f = a.getBool("fix_reload_manifest_retry", !1);
      if (
        a.getBool("back_off_pdash_504_retry", !0) &&
        d == null &&
        (!f || e.includes(c))
      )
        return;
      if (d != null && e.includes(c)) {
        a.getBool("network_reload_mpd_json_retry", !1)
          ? b.retry({ behavior: "recover_failed_request", waitMs: d * 1e3 })
          : b.retry({ waitMs: d * 1e3 });
        return;
      }
      f = JSON.parse(
        a.getString(
          "network_retry_intervals_json",
          '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}'
        )
      );
      e = c != null ? f[c] : null;
      if (e != null) {
        a.getBool("network_retry_intervals_json_retry", !1)
          ? b.retry({ behavior: "retry_failed_request", waitMs: e })
          : b.retry({ waitMs: e });
        return;
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "OzOneSemanticHandler",
  [
    "OzOneSemanticHandlerUtils",
    "handleOzManifestFetchErrorEvent",
    "handleOzStreamErrorEvent",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = b.error;
      !!c("qex")._("1633") &&
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzManifestFetchErrorEvent")(a, b);
    }
    function b(a, b) {
      var e = b.error;
      !!c("qex")._("1633") &&
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzStreamErrorEvent")(a, b);
    }
    g.handleManifestFetchErrorEvent = a;
    g.handleStreamErrorEvent = b;
  },
  98
);
__d(
  "useEventCallbackOn",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, c) {
      h(
        function () {
          a.addEventListener(b, c);
          return function () {
            a.removeEventListener(b, c);
          };
        },
        [a, b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsBackgrounded",
  ["emptyFunction", "react", "useEventCallbackOn"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useCallback,
      i = f.useState;
    function b() {
      var b = a.document;
      if (typeof b.hidden !== "undefined") return "visibilitychange";
      else if (typeof b.mozHidden !== "undefined") return "mozvisibilitychange";
      else if (typeof b.msHidden !== "undefined") return "msvisibilitychange";
      else if (typeof b.webkitHidden !== "undefined")
        return "webkitvisibilitychange";
      return "visibilitychange";
    }
    function j() {
      var b = a.document;
      if (typeof b.hidden !== "undefined") return b.hidden;
      else if (typeof b.mozHidden !== "undefined") return b.mozHidden;
      else if (typeof b.msHidden !== "undefined") return b.msHidden;
      else if (typeof b.webkitHidden !== "undefined") return b.webkitHidden;
      return !1;
    }
    var k = b();
    function l(b) {
      var c = a.document.hasFocus ? a.document.hasFocus() : !0,
        d = j();
      return d || (b ? !1 : !c);
    }
    function m() {
      return j();
    }
    function e(b) {
      var d = (b == null ? void 0 : b.noPauseOnBlurOrFocus) === !0,
        e = i(function () {
          return l(d);
        }),
        f = e[0],
        g = e[1];
      e = i(function () {
        return m();
      });
      var j = e[0],
        n = e[1],
        o = !!b && b.scrollTerminatesHiddenOrBlurred === !0;
      e = h(
        function () {
          g(l(d)), n(m());
        },
        [g, d]
      );
      b = e;
      var p = h(
        function () {
          var a = l(d);
          a && o && f && g(!1);
        },
        [f, d, o]
      );
      d && (b = c("emptyFunction"));
      c("useEventCallbackOn")(a.window, "blur", b);
      c("useEventCallbackOn")(a.window, "focus", b);
      c("useEventCallbackOn")(a.document, k, e);
      c("useEventCallbackOn")(a.window, "scroll", p);
      return { isDocumentHidden: j, isDocumentHiddenOrBlurred: f };
    }
    g["default"] = e;
  },
  98
);
__d(
  "OzCDNSignedQueryParams",
  ["ConstUriUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.$2 = function (a, b, c) {
        this.$1[a] == null && (this.$1[a] = {}), (this.$1[a][b] = c);
      };
      b.get = function (a) {
        a = this.$1[a];
        return a == null ? null : a;
      };
      b.update = function (a) {
        a = d("ConstUriUtils").getUri(a);
        if (a != null) {
          var b = a.getQueryParams();
          a = a.getDomain() + a.getPath();
          var c = b.get("oe");
          c != null && this.$2(a, "oe", String(b.get("oe")));
          b.get("oh") != null && this.$2(a, "oh", String(b.get("oh")));
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerViewabilityProvider.react",
  ["VideoPlayerViewabilityContexts", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.isDesktopPictureInPicture,
        e = a.isFullscreen;
      a = a.videoPlayerPassiveViewabilityInfo;
      return h.jsx(
        d("VideoPlayerViewabilityContexts")
          .VideoPlayerPassiveViewabilityInfoContext.Provider,
        {
          value: a,
          children: h.jsx(
            d("VideoPlayerViewabilityContexts")
              .VideoPlayerDesktopPictureInPictureContext.Provider,
            {
              value: c,
              children: h.jsx(
                d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
                  .Provider,
                { value: e, children: b }
              ),
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "wrapWithContextProviders",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return b.reduceRight(function (a, b) {
        return b(a);
      }, a);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      return function (c) {
        return h.jsx(a.Provider, { value: b, children: c });
      };
    }
    g.wrapWithContextProviders = a;
    g.makeRenderProviderFn = b;
  },
  98
);
__d(
  "VideoPlayerComponentContainer.react",
  [
    "CometVisualCompletionAttributes",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityProvider.react",
    "clearTimeout",
    "cr:1269159",
    "react",
    "setTimeout",
    "wrapWithContextProviders",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect,
      k = e.useRef,
      l = e.useState;
    function m(a) {
      var b = k(a);
      j(
        function () {
          b.current = a;
        },
        [a]
      );
      var d = l(!1),
        e = d[0],
        f = d[1];
      d = l(function () {
        var a = null;
        return {
          cleanup: function () {
            a && a();
          },
          pingNotIdle: function () {
            a && a();
            f(!1);
            var d = c("setTimeout")(function () {
              f(!0);
            }, b.current);
            a = function () {
              c("clearTimeout")(d), (a = null);
            };
          },
        };
      });
      d = d[0];
      var g = d.cleanup;
      d = d.pingNotIdle;
      j(
        function () {
          return g;
        },
        [g]
      );
      return { isIdle: e, pingNotIdle: d };
    }
    function n() {
      var a = l(!1),
        b = a[0],
        c = a[1];
      a = 3e3;
      a = m(a);
      var d = a.isIdle,
        e = a.pingNotIdle;
      a = i(
        function () {
          c(!0), e();
        },
        [e]
      );
      var f = i(
          function () {
            c(!1), e();
          },
          [e]
        ),
        g = i(
          function () {
            c(!0), e();
          },
          [e]
        ),
        h = i(
          function () {
            e();
          },
          [e]
        ),
        j = i(
          function () {
            e();
          },
          [e]
        );
      return {
        isHovering: b,
        isIdle: d,
        onMouseDown: h,
        onMouseEnter: a,
        onMouseLeave: f,
        onMouseMove: g,
        onMouseUp: j,
      };
    }
    function o(a) {
      var b = n(),
        e = b.isHovering,
        f = b.isIdle,
        g = b.onMouseDown,
        i = b.onMouseEnter,
        j = b.onMouseLeave,
        k = b.onMouseMove;
      b = b.onMouseUp;
      var l = d("VideoPlayerHooks").useIsFullscreen();
      return h.jsx(
        "div",
        babelHelpers["extends"](
          {
            className:
              "x5yr21d x10l6tqk x13vifvy xh8yej3" + (l && f ? " xjfk50j" : ""),
          },
          c("CometVisualCompletionAttributes").IGNORE,
          {
            onMouseDown: g,
            onMouseEnter: i,
            onMouseLeave: j,
            onMouseMove: k,
            onMouseUp: b,
            children: h.jsx(
              d("VideoPlayerContexts").VideoPlayerMouseHoverContext.Provider,
              {
                value: e,
                children: h.jsx(
                  d("VideoPlayerContexts").VideoPlayerMouseIdleContext.Provider,
                  { value: f, children: a.children }
                ),
              }
            ),
          }
        )
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      var f = a.adClientToken,
        g = a.audioAvailabilityInfo,
        i = a.autoplayGatingResult,
        j = a.broadcastStatus,
        k = a.canAutoplay,
        m = a.controller,
        n = a.dimensions,
        p = a.initialTracePolicy,
        q = a.instanceKey,
        r = a.isDesktopPictureInPicture,
        s = a.isFullscreen,
        t = a.isNCSR,
        u = a.isPremiumMusicVideo,
        v = a.lastMuteReason,
        w = a.lastPauseReason,
        x = a.lastPlayReason,
        y = a.videoFBID,
        z = a.videoPixelsAspectRatio,
        A = a.videoPlayerPassiveViewabilityInfo,
        B = a.videoState,
        C = a.volumeSetting,
        D = B.activeCaptions,
        E = B.activeEmsgBoxes,
        F = B.availableVideoQualities,
        G = B.bufferEnd,
        H = B.captionDisplayStyle,
        I = B.captionsLoaded,
        J = B.captionsVisible,
        K = B.currentVideoQuality,
        L = B.duration,
        M = B.ended,
        N = B.error,
        O = B.inbandCaptionsAutogenerated,
        P = B.inPlayStalling,
        Q = B.isAbrEnabled,
        R = B.isExternalMedia,
        S = B.isLiveRewindActive,
        T = B.lastPlayedTimeMs,
        U = B.latencyLevel,
        V = B.loopCount,
        W = B.loopCurrent,
        X = B.muted,
        Y = B.paused,
        Z = B.playerImplementationName,
        aa = B.playing,
        ba = B.seekableRanges,
        ca = B.seeking,
        da = B.selectedVideoQuality,
        ea = B.stalling,
        fa = B.streamInterrupted,
        ga = B.targetAudioQuality,
        ha = B.targetPlaybackRate,
        ia = B.targetVideoQuality,
        $ = B.volume;
      B = B.watchTimeMs;
      e = h.jsx(o, { children: e });
      $ = l($);
      var ja = $[0];
      $ = $[1];
      b("cr:1269159")(q, {
        controller: m,
        coreVideoStates: a,
        videoPlayerPassiveViewabilityInfo: A,
      });
      e = d("wrapWithContextProviders").wrapWithContextProviders(e, [
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VideoFBIDContext,
          y
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").StallingContext,
          ea
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlayingContext,
          aa
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InPlayStallingContext,
          P
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").BufferEndContext,
          G
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastMuteReasonContext,
          v
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPlayReasonContext,
          x
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPauseReasonContext,
          w
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PausedContext,
          Y
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CurrentVideoQualityContext,
          K
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").MutedContext,
          X
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VolumeContext,
          { setVolume: $, volume: ja }
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SelectedVideoQualityContext,
          da
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SeekingContext,
          ca
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").DurationContext,
          L
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").EndedContext,
          M
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ErrorContext,
          N
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").DimensionsContext,
          n || null
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InstanceKeyContext,
          q
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ControllerContext,
          m
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AvailableVideoQualitiesContext,
          F
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlayerImplementationNameContext,
          Z
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsAbrEnabledContext,
          Q
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").TargetAudioQualityContext,
          ga
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").TargetVideoQualityContext,
          ia
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlaybackRateContext,
          ha
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CanAutoplayContext,
          k
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VolumeSettingContext,
          C
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AutoplayGatingResultContext,
          i
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").BroadcastStatusContext,
          j
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LoopCountContext,
          V
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LoopCurrentContext,
          W
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AdClientTokenContext,
          f
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ActiveCaptionsContext,
          D
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionsVisibleContext,
          J
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionDisplayStyleContext,
          H
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionsLoadedContext,
          I
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InbandCaptionsAutogeneratedContext,
          O
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").StreamInterruptedContext,
          fa
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").WatchTimeContext,
          B
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPlayedTimeContext,
          T
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SeekableRangesContext,
          ba
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LatencyLevelContext,
          U
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsLiveRewindActiveContext,
          S
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AudioAvailabilityInfoContext,
          g
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsNCSRContext,
          t
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsPremiumMusicVideoContext,
          u
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InitialTracePolicyContext,
          p
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ActiveEmsgBoxesContext,
          E
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsExternalMediaContext,
          R
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VideoPixelsAspectRatioContext,
          (a = z) != null ? a : null
        ),
        function (a) {
          return h.jsx(c("VideoPlayerViewabilityProvider.react"), {
            isDesktopPictureInPicture: r,
            isFullscreen: s,
            videoPlayerPassiveViewabilityInfo: A,
            children: a,
          });
        },
      ]);
      return h.jsx("div", {
        "data-instancekey": q,
        "data-testid": void 0,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "GlobalVideoPortsID",
  ["cometUniqueID", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return "id-pv-" + c("cometUniqueID")();
    }
    function b(a) {
      if (typeof a === "string") {
        var b = "id-pv-";
        if (a.indexOf(b) === 0 && a.length > b.length) return a;
        else
          throw c("unrecoverableViolation")(
            'Expected a GlobalVideoPortsVideoID, got a string that does not look like it: "' +
              a +
              '"',
            "comet_video_player"
          );
      } else return null;
    }
    function d() {
      return "id-pp-" + c("cometUniqueID")();
    }
    g.makeVideoID = a;
    g.ensureVideoID = b;
    g.makePlaceID = d;
  },
  98
);
__d(
  "VideoPlayerFullscreenController",
  ["CometFullScreen", "removeFromArray", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return (
        a.current != null &&
        d("CometFullScreen").getFullScreenElement() === a.current
      );
    }
    function a(a) {
      var b = [];
      function e() {
        b.forEach(function (a) {
          a();
        });
      }
      var f = null;
      return {
        getIsFullscreen: function () {
          return h(a);
        },
        requestSetIsFullscreen: function (b, e) {
          var f = a.current;
          if (f == null)
            throw c("unrecoverableViolation")(
              "Requested full screen while the element is not present",
              "comet_video_player"
            );
          d("CometFullScreen").isSupported()
            ? b !== h(a) &&
              (b === !0
                ? d("CometFullScreen").requestFullScreen(f)
                : b === !1 && d("CometFullScreen").exitFullScreen())
            : b && e != null && typeof e.webkitEnterFullScreen === "function"
            ? e.webkitEnterFullScreen()
            : !b &&
              e != null &&
              typeof e.webkitExitFullScreen === "function" &&
              e.webkitExitFullscreen();
        },
        subscribe: function (a) {
          b.length === 0 &&
            f == null &&
            (f = d("CometFullScreen").subscribeToFullScreenChangeEvent(e));
          b.push(a);
          return {
            remove: function () {
              c("removeFromArray")(b, a),
                b.length === 0 && f != null && (f(), (f = null));
            },
          };
        },
      };
    }
    g.createFullscreenController = a;
  },
  98
);
__d(
  "VideoPlayerPortalingPlaceState",
  [
    "GlobalVideoPortsContexts",
    "GlobalVideoPortsID",
    "gkx",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    e = function (a, b) {
      var e = c("usePrevious")(a);
      h(
        function () {
          a !== e &&
            e !== null &&
            e &&
            !a &&
            b(d("GlobalVideoPortsID").makeVideoID());
        },
        [a, e, b]
      );
    };
    f = function (a, b) {
      var c = i(null),
        e = c[0];
      c = c[1];
      a !== e &&
        (e !== null && e && !a && b(d("GlobalVideoPortsID").makeVideoID()),
        c(a));
    };
    var j = c("gkx")("1375802") ? f : e;
    function a(a) {
      var b = a.portalingEnabled;
      a = a.portalingFromVideoID;
      var c = d("GlobalVideoPortsContexts").useGlobalVideoPortsLoader(),
        e = d("GlobalVideoPortsContexts").useGlobalVideoPortsManager(),
        f = d("GlobalVideoPortsContexts").useGlobalVideoPortsState(),
        g = e != null && f != null,
        k = (g || c != null) && (b || a != null),
        l = i(function () {
          return d("GlobalVideoPortsID").makePlaceID();
        });
      l = l[0];
      var m = i(function () {
          return d("GlobalVideoPortsID").makeVideoID();
        }),
        n = m[0];
      m = m[1];
      b = k && b && a != null;
      a = b && a != null ? a : n;
      j(b, m);
      h(
        function () {
          k && !g && c && c();
        },
        [g, k, c]
      );
      return {
        canBecomePortableLater: k,
        currentVideoID: a,
        globalVideoPortsManager: e,
        globalVideoPortsState: f,
        thisPlaceID: l,
      };
    }
    g.useRegenerateUniqueVideoID_exportedForTest = j;
    g.useVideoPlayerPortalingPlaceState = a;
  },
  98
);
__d(
  "getOwnObjectValues",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.keys(a).map(function (b) {
        return a[b];
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerPortalingPlaceWithPortaling.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "CoreVideoPlayerFitParentContainer.react",
    "GlobalVideoPortsRenderers.react",
    "getOwnObjectValues",
    "killswitch",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.coreVideoPlayerMetaData,
        e = a.currentPlaceID,
        f = a.currentVideoID,
        g = a.fullscreenController,
        m = a.globalVideoPortsManager,
        n = a.globalVideoPortsState_DEPRECATED,
        o = a.implementations,
        p = a.isFullscreen,
        q = a.portablePlaceMetaData,
        r = a.previousPlaceMetaData,
        s = a.renderComponents,
        t = a.renderPlaceholder,
        u = a.thisPlaceID,
        v = a.trackingDataEncrypted,
        w = a.trackingNodes,
        x = a.viewportMarginsForViewability;
      a = l(function () {
        return d(
          "CoreVideoPlayerFitParentContainer.react"
        ).createFitParentContainerDiv({ debugRole: null });
      });
      var y = a[0],
        z = k(null);
      j(function () {
        m.addOrUpdatePlace({
          coreVideoPlayerMetaData: b,
          fullscreenController: g,
          implementations: o,
          injectCoreVideoStatesRef: z,
          isFullscreen: p,
          portablePlaceContainer: y,
          portablePlaceID: u,
          portablePlaceMetaData: q,
          portableVideoID: f,
          renderComponents: s,
          renderPlaceholder: t,
          trackingDataEncrypted: v,
          trackingNodes: w,
          viewportMarginsForViewability: x,
        });
      }, [].concat(
        c("getOwnObjectValues")(b),
        [f, g, p, m, y],
        c("getOwnObjectValues")(q || {}),
        [s, t, u, v, w, x]
      ));
      j(
        function () {
          return function () {
            m.removePlace({ portablePlaceID: u });
          };
        },
        [m, u]
      );
      a = i(c("BaseContextualLayerAnchorRootContext"));
      var A = k(null);
      return h.jsxs(c("BaseContextualLayerAnchorRootContext").Provider, {
        value:
          p && !c("killswitch")("WORKPLACE_VIDEO_FULLSCREEN_CONTEXT_LAYER_ROOT")
            ? A
            : a,
        children: [
          h.jsx(
            d("CoreVideoPlayerFitParentContainer.react")
              .CoreVideoPlayerFitParentDOMContainer,
            { debugRole: null, domElement: y },
            u
          ),
          h.jsx(
            d("GlobalVideoPortsRenderers.react")
              .GlobalVideoPortsVideoComponentsRenderer,
            {
              currentPlaceID:
                n != null
                  ? (a =
                      (a = m.getCurrentPlaceStateForVideo(n, f)) == null
                        ? void 0
                        : a.portablePlaceID) != null
                    ? a
                    : null
                  : e,
              currentVideoID: f,
              injectCoreVideoStatesRef: z,
              previousPlaceMetaData:
                n != null
                  ? (e =
                      (a = m.getPortableVideoState(n, f)) == null
                        ? void 0
                        : a.previousPlaceMetaData) != null
                    ? e
                    : null
                  : r,
              renderComponents: s,
              thisPlaceID: u,
            }
          ),
          h.jsx("div", { ref: A }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerPortalingPlace.react",
  [
    "BaseViewportMarginsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "CoreVideoPlayer.react",
    "CoreVideoPlayerFitParentContainer.react",
    "GlobalVideoPortsID",
    "GlobalVideoPortsRenderers.react",
    "VideoPlayerFullscreenController",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "VideoPlayerPortalingPlaceState",
    "VideoPlayerPortalingPlaceWithPortaling.react",
    "gkx",
    "react",
    "recoverableViolation",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useState,
      l = { bottom: 0, left: 0, right: 0, top: 0 },
      m = h.forwardRef(function (a, b) {
        var c = a.children,
          e = a.debugRole;
        a = a.testid;
        return h.jsx(
          d("CoreVideoPlayerFitParentContainer.react")
            .CoreVideoPlayerFitParentContainer,
          { debugRole: e, ref: b, testid: void 0, children: c }
        );
      });
    function a(a) {
      var b = a.implementations,
        e = a.portalingEnabled,
        f = a.portalingFromVideoID,
        g = a.portalingPlaceMetaData,
        n = a.renderComponents,
        o = a.renderPlaceholder;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "implementations",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "renderComponents",
        "renderPlaceholder",
      ]);
      j(function () {
        return function () {};
      }, []);
      var p = f != null ? d("GlobalVideoPortsID").ensureVideoID(f) : null;
      f != null &&
        p == null &&
        c("recoverableViolation")(
          "The provided portalingFromVideoID (" +
            String(f) +
            ") does not look like such an ID. The video player will not use portaling until a valid ID is provided",
          "comet_video_player"
        );
      f = d("VideoPlayerPortalingPlaceState").useVideoPlayerPortalingPlaceState(
        { portalingEnabled: e, portalingFromVideoID: p }
      );
      e = f.canBecomePortableLater;
      p = f.currentVideoID;
      var q = f.globalVideoPortsManager,
        r = f.globalVideoPortsState;
      f = f.thisPlaceID;
      var s = i(c("BaseViewportMarginsContext")),
        t = c("useUnsafeRef_DEPRECATED")(null),
        u = c("useStable")(function () {
          return d(
            "VideoPlayerFullscreenController"
          ).createFullscreenController(t);
        }),
        v = k(u.getIsFullscreen()),
        w = v[0],
        x = v[1];
      j(
        function () {
          var a = u.subscribe(function () {
            var a = u.getIsFullscreen();
            x(a);
          });
          x(u.getIsFullscreen());
          return function () {
            a.remove();
          };
        },
        [u, x]
      );
      v = i(c("CometTrackingNodesContext"));
      v = v.join("");
      var y = i(c("CometTrackingCodeContext"));
      y = (y = y.encrypted_tracking[0]) != null ? y : "";
      s = w ? l : s;
      var z =
        "comet-video-player-place" +
        (a.videoFBID != null ? "-vid-" + a.videoFBID : "");
      if (!e)
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(
            d("VideoPlayerPortalingPlaceInfoProvider.react")
              .VideoPlayerPortalingPlaceInfoProvider,
            {
              currentPlaceID: f,
              currentVideoID: p,
              portalingEnabled: !1,
              previousPlaceMetaData: null,
              thisPlaceID: f,
              children: h.jsx(
                c("CoreVideoPlayer.react"),
                babelHelpers["extends"]({}, a, {
                  fullscreenController: u,
                  implementations: b,
                  isFullscreen: w,
                  renderWithCoreVideoStates: n,
                  trackingDataEncrypted: y,
                  trackingNodes: v,
                  viewportMarginsForViewability: s,
                })
              ),
            }
          ),
        });
      if (q && r) {
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(c("VideoPlayerPortalingPlaceWithPortaling.react"), {
            coreVideoPlayerMetaData: a,
            currentPlaceID: c("gkx")("4184")
              ? (e =
                  (z = q.getCurrentPlaceStateForVideo(r, p)) == null
                    ? void 0
                    : z.portablePlaceID) != null
                ? e
                : null
              : null,
            currentVideoID: p,
            fullscreenController: u,
            globalVideoPortsManager: q,
            globalVideoPortsState_DEPRECATED: c("gkx")("4184") ? null : r,
            implementations: b,
            isFullscreen: w,
            portablePlaceMetaData: g,
            previousPlaceMetaData: c("gkx")("4184")
              ? (e =
                  (z = q.getPortableVideoState(r, p)) == null
                    ? void 0
                    : z.previousPlaceMetaData) != null
                ? e
                : null
              : null,
            renderComponents: n,
            renderPlaceholder: o,
            thisPlaceID: f,
            trackingDataEncrypted: y,
            trackingNodes: v,
            viewportMarginsForViewability: s,
          }),
        });
      } else {
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(
            d("GlobalVideoPortsRenderers.react")
              .GlobalVideoPortsPlaceholderRenderer,
            {
              currentPlaceID: null,
              currentVideoID: p,
              previousPlaceMetaData: null,
              renderPlaceholder: o,
              thisPlaceID: f,
              videoPixelsAspectRatio:
                (b = a.videoPixelsAspectRatio) != null ? b : null,
            }
          ),
        });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerTracePolicyContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext;
    c = { initialTracePolicy: null, routeTracePolicy: null };
    var i = b.createContext(c);
    function a() {
      return h(i);
    }
    g.VideoPlayerTracePolicyContext = i;
    g.useVideoPlayerTracePolicy = a;
  },
  98
);
__d(
  "VideoPlayerTracePolicyProvider.react",
  ["VideoPlayerTracePolicyContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = a.children,
        c = a.initialTracePolicy,
        e = a.routeTracePolicy;
      a = j(c);
      var f = a[0],
        g = a[1];
      a = j(e);
      var k = a[0],
        l = a[1];
      i(
        function () {
          f !== c && g(c), k !== e && l(e);
        },
        [c, e, f, k]
      );
      return h.jsx(
        d("VideoPlayerTracePolicyContext").VideoPlayerTracePolicyContext
          .Provider,
        { value: { initialTracePolicy: f, routeTracePolicy: k }, children: b }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerWithComponents.react",
  [
    "VideoPlayerComponentContainer.react",
    "VideoPlayerPortalingPlace.react",
    "VideoPlayerTracePolicyProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children,
        d = a.implementations,
        e = a.portalingEnabled,
        f = a.portalingFromVideoID,
        g = a.portalingPlaceMetaData,
        j = a.portalingRenderPlaceholder;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "implementations",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "portalingRenderPlaceholder",
      ]);
      var k = i(
        function (a) {
          return h.jsx(
            c("VideoPlayerComponentContainer.react"),
            babelHelpers["extends"]({}, a, { children: b })
          );
        },
        [b]
      );
      return h.jsx(c("VideoPlayerTracePolicyProvider.react"), {
        initialTracePolicy: a.initialTracePolicy,
        routeTracePolicy: a.routeTracePolicy,
        children: h.jsx(
          c("VideoPlayerPortalingPlace.react"),
          babelHelpers["extends"]({}, a, {
            implementations: d,
            portalingEnabled: e,
            portalingFromVideoID: f,
            portalingPlaceMetaData: g,
            renderComponents: k,
            renderPlaceholder: j,
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b.description) || this;
        c.$OzError1 = b;
        c.name = b.type;
        c.message = b.description;
        b = c.stack;
        if (!(typeof b === "string" && b !== "")) {
          if (Error.captureStackTrace) {
            var d = {};
            Error.captureStackTrace(d, c.constructor);
            b = d.stack;
          } else {
            d = new Error().stack.split("\n");
            d.splice(/^Error/.test(d[0]) ? 1 : 0, 1);
            b = d.join("\n");
          }
          typeof b === "string" && b !== ""
            ? (c.stack = b.replace(/^Error/, c.name))
            : (c.stack = "");
        }
        return c;
      }
      var c = b.prototype;
      c.getExtra = function () {
        return this.$OzError1.extra || {};
      };
      c.getType = function () {
        return this.$OzError1.type;
      };
      c.getDescription = function () {
        return this.$OzError1.description;
      };
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerErrorBoundary.react",
  ["FBLogger", "getErrorSafe", "oz-player/utils/OzError", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { error: null }),
          (c.suppressReactDefaultErrorLogging = !0),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getDerivedStateFromError = function (a) {
        return { error: c("getErrorSafe")(a) };
      };
      var d = b.prototype;
      d.componentDidCatch = function (a, b) {
        b = b.componentStack;
        var d = c("getErrorSafe")(a);
        d.componentStack = b;
        b = this.props;
        var e = b.description,
          f = b.onError;
        b = b.project;
        a =
          a instanceof c("oz-player/utils/OzError")
            ? a.getType()
            : a != null && typeof a.name === "string"
            ? a.name
            : d.name;
        d.name = a;
        a = "VideoPlayerErrorBoundary caught an " + a;
        e != null && (a = a + " (" + e + ")");
        e = [
          "OZ_NETWORK",
          "BUFFERING_TIMEOUT",
          "MEDIA_ERR_DECODE",
          "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR",
        ];
        var g = [
          "Network failure:",
          "Network failure.",
          "HTTP error.",
          "Bad URL timestamp",
          "URL signature expired",
          "No license for com.widevine.alpha",
        ];
        e =
          e.every(function (a) {
            return d.name !== a;
          }) &&
          g.every(function (a) {
            return !d.message.startsWith(a);
          });
        g = c("FBLogger")(b == null ? "comet_video_player" : b).catching(d);
        e ? g.fatal(a) : g.warn(a);
        f != null && f(d);
      };
      d.render = function () {
        var a = this.props,
          b = a.children;
        a = a.fallback;
        var c = this.state.error;
        return c ? (typeof a === "function" ? a(c) : a) : b;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerWwwFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1914651");
    b = d("FalcoLoggerInternal").create("video_player_www", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "VideoPlayerWwwLogger",
  ["VideoPlayerWwwFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b,
        c =
          a.logData.live_trace_stream_id !== null &&
          a.logData.live_trace_stream_type !== null;
      return {
        access_token: a.logData.access_token,
        ad_client_token: a.logData.ad_client_token,
        attribution_id: a.logData.attribution_id,
        attribution_id_v2: a.logData.attribution_id_v2,
        attribution_id_v2_root: a.logData.attribution_id_v2_root,
        audio_only: a.logData.audio_only,
        audio_representation_id: a.logData.audio_representation_id,
        autoplay_eligible: a.logData.autoplay_eligible,
        autoplay_failure_reasons: a.logData.autoplay_failure_reasons,
        autoplay_setting: a.logData.autoplay_setting,
        available_qualities: a.logData.available_qualities,
        broadcaster_origin: a.logData.broadcaster_origin,
        browser_tab_id: a.logData.browser_tab_id,
        caption_state: a.logData.caption_state,
        cast_client_app_id: a.logData.cast_client_app_id,
        client_latency_setting: a.logData.client_latency_setting,
        current_playback_speed: a.logData.current_playback_speed,
        current_viewability_percentage: Number(
          a.logData.current_viewability_percentage
        ),
        current_volume: a.logData.current_volume,
        dash_perf_logging_enabled: a.logData.dash_perf_logging_enabled,
        data_connection_quality: a.logData.data_connection_quality,
        debug_reason: a.logData.debug_reason,
        device_id: a.logData.device_id,
        device_type: a.logData.device_type,
        dropped_frame_count: Number(a.logData.dropped_frame_count),
        error: a.logData.error,
        error_code: a.logData.error_code,
        error_description: a.logData.error_description,
        error_domain: a.logData.error_domain,
        error_type: a.logData.error_type,
        error_user_info: a.logData.error_user_info,
        event_name: a.eventType,
        event_seq_num: a.logData.event_seq_num,
        external_log_id: a.logData.external_log_id,
        external_log_type: a.logData.external_log_id,
        fb_manifest_identifier: a.logData.fb_manifest_identifier,
        feed_aggregation_type: a.logData.feed_aggregation_type,
        feed_position: a.logData.feed_position,
        frame_events: a.logData.frame_events,
        ft: a.logData.ft,
        imf_emsg_id: a.logData.imf_emsg_id,
        imf_event_type: a.logData.imf_event_type,
        imf_topic: a.logData.imf_topic,
        interrupt_count:
          a.logData.interrupt_count !== null
            ? Number(a.logData.interrupt_count)
            : null,
        interrupt_time: Number(a.logData.interrupt_time),
        is_abr_enabled: a.logData.is_abr_enabled,
        is_fbms: a.logData.is_fbms,
        is_live_preview: (b = a.logData.is_live_preview) != null ? b : !1,
        is_live_video_rewound: a.logData.is_live_video_rewound,
        is_p2p_playback: a.logData.is_p2p_playback,
        is_pip: a.logData.is_pip,
        is_predictive_playback: a.logData.is_predictive_playback,
        is_sound_on: a.logData.is_sound_on,
        is_stalling: a.logData.is_stalling,
        is_templated_manifest: a.logData.is_templated_manifest,
        last_viewability_percentage: Number(
          a.logData.last_viewability_percentage
        ),
        live_trace_source_id: a.logData.live_trace_source_id,
        live_trace_stream_id: c ? a.logData.live_trace_stream_id : null,
        live_trace_stream_type: c ? a.logData.live_trace_stream_type : null,
        mpd_validation_errors: a.logData.mpd_validation_errors,
        network_connected: a.logData.network_connected,
        next_representation_id: a.logData.next_representation_id,
        notification_id: a.logData.notification_id,
        notification_medium: a.logData.notification_medium,
        offset_ms:
          a.logData.offset_ms != null ? String(a.logData.offset_ms) : null,
        permalink_share_id: a.logData.permalink_share_id,
        playback_caption_format: a.logData.playback_caption_format,
        playback_caption_locale: a.logData.playback_caption_locale,
        playback_duration: a.logData.playback_duration,
        playback_is_broadcast: a.logData.playback_is_broadcast,
        playback_is_drm: a.logData.playback_is_drm,
        playback_is_live_streaming: a.logData.playback_is_live_streaming,
        player_format: a.logData.player_format,
        player_instance_key: a.logData.player_instance_key,
        player_mode: a.logData.player_mode,
        player_origin: a.logData.player_origin,
        player_state: a.logData.player_state,
        player_suborigin: a.logData.player_suborigin,
        player_version: a.logData.player_version,
        reaction_video_channel_type: a.logData.reaction_video_channel_type,
        representation_id: a.logData.representation_id,
        resource_url: a.logData.resource_url,
        routeTracePolicy: a.routeTracePolicy,
        seq_num: a.logData.seq_num,
        source: a.source_VPL_LOGGING_HACK,
        source_VPL_LOGGING_HACK: a.logData.source_VPL_LOGGING_HACK,
        stall_count: Number(a.logData.stall_count),
        stall_count_200_ms: Number(a.logData.stall_count_200_ms),
        stall_time: Number(a.logData.stall_time),
        state: a.logData.state,
        streaming_format: a.logData.streaming_format,
        time_ms: a.logData.time_ms,
        total_frame_count: Number(a.logData.total_frame_count),
        tracking_data_encrypted: a.logData.tracking_data_encrypted,
        tracking_nodes: a.logData.tracking_nodes,
        tv_session_id: a.logData.tv_session_id,
        v2_heart_beat: a.logData.v2_heart_beat,
        video_bandwidth: a.logData.video_bandwidth,
        video_buffer_end_position: a.logData.video_buffer_end_position,
        video_chaining_depth_level: a.logData.video_chaining_depth_level,
        video_chaining_parent_video_id:
          a.logData.video_chaining_parent_video_id,
        video_chaining_session_id: a.logData.video_chaining_session_id,
        video_channel_id: a.logData.video_channel_id,
        video_id: a.logData.video_id,
        video_last_start_time_position:
          a.logData.video_last_start_time_position,
        video_play_reason: a.logData.video_play_reason,
        video_player_height: Number(a.logData.video_player_height),
        video_player_width: Number(a.logData.video_player_width),
        video_time_position: a.logData.video_time_position,
        vpts: a.logData.vpts,
        web_client_revision: a.logData.web_client_revision,
      };
    }
    a = {
      logComet: function (a) {
        c("VideoPlayerWwwFalcoEvent").log(function () {
          return h(a);
        });
      },
      logCometImmediately: function (a) {
        c("VideoPlayerWwwFalcoEvent").logImmediately(function () {
          return h(a);
        });
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerRetryableErrorBoundary.react",
  ["VideoPlayerErrorBoundary.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useState;
    function a(a) {
      var b = a.children,
        d = a.description,
        e = a.fallback;
      a = j(0);
      var f = a[0],
        g = a[1],
        k = i(function () {
          g(function (a) {
            return a + 1;
          });
        }, []);
      a = i(
        function (a) {
          return f >= 3
            ? e({ error: a, retry: null })
            : e({ error: a, retry: k });
        },
        [e, k, f]
      );
      return h.jsx(
        c("VideoPlayerErrorBoundary.react"),
        {
          description: d,
          fallback: a,
          project: "comet_video_player",
          children: b,
        },
        f
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAudioManagerHooks",
  ["CometAudioManagerContexts", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(d("CometAudioManagerContexts").AudioApiContext);
      return a;
    }
    g.useAudioApi = a;
  },
  98
);
__d(
  "makeAudioSymbol",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b + "::" + a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CoreVideoPlayerAudioClient.react",
  [
    "CometAudioManagerContexts",
    "CometAudioManagerHooks",
    "CometThrottle",
    "VideoPlayerHooks",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "makeAudioSymbol",
    "react",
    "useCometUniqueID",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function a() {
      var a = c("useCometUniqueID")(),
        b = d("VideoPlayerHooks").useInstanceKey(),
        e = j(
          function () {
            return c("makeAudioSymbol")(a, b);
          },
          [a, b]
        ),
        f = d("CometAudioManagerHooks").useAudioApi(),
        g = k(f);
      i(
        function () {
          g.current = f;
        },
        [f]
      );
      var m = d("VideoPlayerHooks").useController(),
        n = 200,
        o = d("VideoPlayerHooks").useLastPlayReason(),
        p = d("VideoPlayerHooks").useLastMuteReason(),
        q = d("VideoPlayerHooks").useMuted();
      n = c("CometThrottle")(d("VideoPlayerHooks").useVolume, n, {
        trailing: !0,
      });
      var r = n(),
        s = c("usePrevious")(r),
        t = d("VideoPlayerHooks").usePaused(),
        u = h(d("CometAudioManagerContexts").CometAudioLocalScopeContext),
        v = h(d("CometAudioManagerContexts").CometAudioGroupContext),
        w = d(
          "VideoPlayerPortalingPlaceInfoProvider.react"
        ).useVideoPlayerPortalingPlaceInfo(),
        x = d("VideoPlayerHooks").useVolumeSetting(),
        y = j(
          function () {
            return (
              (v == null ? void 0 : v.groupID) ||
              d("CometAudioManagerContexts").makeAudioGroupID()
            );
          },
          [v == null ? void 0 : v.groupID]
        );
      n = l(!0);
      var z = n[0];
      n = n[1];
      var A = j(
        function () {
          return {
            audioLocalScope: u,
            controller: m,
            groupID: y,
            instanceKey: b,
            lastMuteReason: p,
            lastPlayReason: o,
            muted: q,
            paused: t,
            previousVolume: s,
            symbol: e,
            videoPlayerPortalingPlaceInfo: w,
            volume: r,
          };
        },
        [u, m, y, b, p, o, q, t, s, e, w, r]
      );
      i(
        function () {
          x != null && m.setVolume(x);
        },
        [m, x]
      );
      n = v || { allowSound: z, groupID: y, setAllowSound: n };
      var B = k(n);
      i(
        function () {
          f && f.register(A, B.current);
          return function () {
            f && f.unregister(e, y);
          };
        },
        [f, A, y, e]
      );
      i(
        function () {
          f && f.update(A);
        },
        [f, A]
      );
      i(
        function () {
          !z && g.current && m.setMuted(!0, "audio_manager_initiated");
        },
        [z, g, m]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerAutoplayHooks",
  ["VideoPlayerAutoplayContexts", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(d("VideoPlayerAutoplayContexts").AutoplayApiContext);
      if (a == null)
        throw c("unrecoverableViolation")(
          "Empty AutoplayApiContext. Are you rendering useAutoplayApi outside of VideoAutoplayManagerX?",
          "comet_video_player"
        );
      return a;
    }
    function b() {
      return h(d("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext);
    }
    g.useAutoplayApi = a;
    g.useVideoAutoplayLocalScope = b;
  },
  98
);
__d(
  "VideoPlayerDebugAutoplayAPI",
  ["cr:1453865", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d =
      (a = b("cr:1453865")) != null
        ? a
        : {
            useVideoPlayerDebugAPI: c("emptyFunction").thatReturns(null),
            useVideoPlayerDebugAPIDefinition: c("emptyFunction"),
            useVideoPlayerDebugInfo: c("emptyFunction").thatReturns(null),
          };
    g["default"] = d;
  },
  98
);
__d(
  "evaluateVideoAutoplayDefaultAllowRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return "ALLOW";
    }
    a.displayName = "evaluateVideoAutoplayDefaultRule";
    f["default"] = a;
  },
  66
);
__d(
  "makeSelectedAutoplayVideoSymbol",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b + "::" + a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "AutoplayRulesEngine",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = -2,
      h = -1;
    a = (function () {
      function a(a) {
        (this.$1 = g), (this.$2 = a);
      }
      var b = a.prototype;
      b.evaluateAutoplay = function (a, b) {
        b = b();
        var c = h;
        if (a)
          for (var d = 0; d < this.$2.length; d++) {
            var e = this.$2[d](a);
            if (e !== "SKIP") {
              b = e;
              c = d;
              break;
            }
          }
        this.$1 = c;
        return b;
      };
      b.getIndexOfLastWinningRule = function () {
        return this.$1;
      };
      b.getRules = function () {
        return this.$2;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "useAutoplayRulesEngine",
  ["AutoplayRulesEngine", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a) {
      var b = i(a),
        d = j(function () {
          return new (c("AutoplayRulesEngine"))(a);
        }),
        e = d[0],
        f = d[1];
      h(
        function () {
          b.current !== a &&
            f(function () {
              return new (c("AutoplayRulesEngine"))(a);
            });
        },
        [a]
      );
      h(
        function () {
          b.current = e.getRules();
        },
        [e]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useConcurrentAutoplayManagementAPI",
  ["react", "removeFromArray", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a() {
      return c("useCometUniqueID")();
    }
    function i() {
      var a = [];
      return {
        isControllingComponent: function (b) {
          var c = a.length;
          return a[c - 1] === b;
        },
        registerControllingComponent: function (b) {
          c("removeFromArray")(a, b), a.push(b);
        },
        unregisterControllingComponent: function (b) {
          var d = a.length;
          d > 1 && c("removeFromArray")(a, b);
          return d > 1;
        },
      };
    }
    function b() {
      var a = h(function () {
        return i();
      });
      a = a[0];
      return a;
    }
    g.useAutoplayControlID = a;
    g.createConcurrentAutoplayManagementAPI = i;
    g.useConcurrentAutoplayManagementAPI = b;
  },
  98
);
__d(
  "VideoPlayerContextSensitiveConfigUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a, b) {
      return b.every(function (b) {
        return a[b.name] === b.value;
      });
    };
    a = function (a, b) {
      return b.find(function (b) {
        return g(a, b.contexts);
      });
    };
    f.getFirstMatchingValueAndContextTargets = a;
  },
  66
);
__d(
  "VideoPlayerContextSensitiveConfigResolver",
  [
    "VideoPlayerContextSensitiveConfigPayload",
    "VideoPlayerContextSensitiveConfigUtils",
    "cr:1724253",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = {}),
          (this.$2 = {}),
          a == null
            ? ((this.$3 = c(
                "VideoPlayerContextSensitiveConfigPayload"
              ).static_values),
              (this.$4 = c(
                "VideoPlayerContextSensitiveConfigPayload"
              ).context_sensitive_values))
            : ((this.$3 = a.staticValues),
              (this.$4 = a.contextSensitiveValues));
      }
      var e = a.prototype;
      e.setContexts = function (a) {
        (this.$1 = a), (this.$2 = this.$5(a));
      };
      e.getValue = function (a) {
        if (this.$2[a] != null) return this.$2[a];
        return this.$3[a] != null ? this.$3[a] : null;
      };
      e.$5 = function (a) {
        var b = this;
        return Object.keys(this.$4).reduce(function (c, e) {
          var f = b.$4[e];
          if (f != null) {
            f = d(
              "VideoPlayerContextSensitiveConfigUtils"
            ).getFirstMatchingValueAndContextTargets(a, f);
            f != null && (c[e] = f.value);
          }
          return c;
        }, {});
      };
      a.getPayload = function () {
        return c("VideoPlayerContextSensitiveConfigPayload");
      };
      a.getSources = function () {
        return b("cr:1724253");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerShakaGlobalConfig",
  ["VideoPlayerContextSensitiveConfigResolver"],
  function (a, b, c, d, e, f, g) {
    var h = new (c("VideoPlayerContextSensitiveConfigResolver"))(),
      i = {};
    a = function (a) {
      i = a;
    };
    b = function (a, b) {
      if (!!i && typeof i[a] === "boolean") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "boolean" ? a : b;
    };
    d = function (a, b) {
      if (!!i && typeof i[a] === "number") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "number" ? a : b;
    };
    e = function (a, b) {
      if (!!i && typeof i[a] === "string") return i[a];
      a = h.getValue(a);
      return a != null && typeof a === "string" ? a : b;
    };
    g.setGlobalOverrideConfig = a;
    g.getBool = b;
    g.getNumber = d;
    g.getString = e;
  },
  98
);
__d(
  "VideoPlayerViewabilityHooks",
  ["VideoPlayerHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    (g.useVideoPlayerExtendedPassiveViewabilityInfo =
      d("VideoPlayerHooks").useVideoPlayerExtendedPassiveViewabilityInfo),
      (g.useVideoPlayerPassiveViewabilityInfo =
        d("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo),
      (g.useVideoPlayerViewabilityInfo =
        d("VideoPlayerHooks").useVideoPlayerViewabilityInfo);
  },
  98
);
__d(
  "VideoPlayerOzWWWGlobalConfig",
  ["VideoPlayerShakaGlobalConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "oz_www_";
    a = {
      getBool: function (a, b) {
        return d("VideoPlayerShakaGlobalConfig").getBool(h + a, b);
      },
      getNumber: function (a, b) {
        return d("VideoPlayerShakaGlobalConfig").getNumber(h + a, b);
      },
      getString: function (a, b) {
        return d("VideoPlayerShakaGlobalConfig").getString(h + a, b);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useVideoPlayerBandwidthEstimate",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "react",
    "useInterval",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState,
      i = 5e3;
    function a() {
      var a = function () {
          return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
            c("VideoPlayerOzWWWGlobalConfig")
          );
        },
        b = h(a()),
        d = b[0],
        e = b[1];
      c("useInterval")(function () {
        return e(a());
      }, i);
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoAutoplayState",
  [
    "HiddenSubtreePassiveContext",
    "VideoPlayerHooks",
    "VideoPlayerShakaGlobalConfig",
    "VideoPlayerViewabilityHooks",
    "gkx",
    "react",
    "useIsBackgrounded",
    "useVideoPlayerBandwidthEstimate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useContext,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = d("VideoPlayerHooks").useAdClientToken(),
        e = d("VideoPlayerHooks").useAutoplayGatingResult(),
        f = d("VideoPlayerHooks").useBroadcastStatus(),
        g = d("VideoPlayerHooks").useEnded(),
        n = d("VideoPlayerHooks").useIsExternalMedia(),
        o = d("VideoPlayerHooks").useIsFrozenPassive(),
        p = d("VideoPlayerHooks").useLastPauseReason(),
        q = d("VideoPlayerHooks").useLastPlayReason(),
        r = d("VideoPlayerHooks").useMuted(),
        s = d("VideoPlayerHooks").usePaused(),
        t = i(c("HiddenSubtreePassiveContext")),
        u = !b;
      a =
        (a == null ? void 0 : a.noPauseOnBlurOrFocus) === !0 ||
        d("VideoPlayerShakaGlobalConfig").getBool(
          "comet_www_no_pause_on_blur_or_focus_events",
          !1
        );
      a = c("useIsBackgrounded")({
        noPauseOnBlurOrFocus: a,
        scrollTerminatesHiddenOrBlurred: u,
      });
      var v = a.isDocumentHidden,
        w = a.isDocumentHiddenOrBlurred,
        x = c("useVideoPlayerBandwidthEstimate")(),
        y = d(
          "VideoPlayerViewabilityHooks"
        ).useVideoPlayerPassiveViewabilityInfo(),
        z = d(
          "VideoPlayerViewabilityHooks"
        ).useVideoPlayerExtendedPassiveViewabilityInfo();
      u = m(t.getCurrentState().backgrounded);
      var A = u[0],
        B = u[1];
      a = m(t.getCurrentState().hidden);
      var C = a[0],
        D = a[1];
      j(
        function () {
          function a(a, b) {
            D(a), B(b);
          }
          var b = t.subscribeToChanges(function (b) {
              c("gkx")("1500552")
                ? h(function () {
                    var b = t.getCurrentState();
                    a(b.hidden, b.backgrounded);
                  })
                : a(b.hidden, b.backgrounded);
            }),
            d = t.getCurrentState().hidden,
            e = t.getCurrentState().backgrounded;
          c("gkx")("1500552")
            ? h(function () {
                var b = t.getCurrentState();
                a(b.hidden, b.backgrounded);
              })
            : a(d, e);
          return function () {
            b.remove();
          };
        },
        [t, B, D]
      );
      u = m(function () {
        return o.getCurrentState();
      });
      var E = u[0],
        F = u[1];
      j(
        function () {
          var a = o.subscribeToChanges(function (a) {
              F(a);
            }),
            b = o.getCurrentState();
          F(b);
          return function () {
            a.remove();
          };
        },
        [o, F]
      );
      var G = k(
        function () {
          return {
            adClientToken: b,
            autoplayGatingResult: e,
            bandwidthEstimate: x,
            broadcastStatus: f,
            controllerIsFrozen: E,
            currentSubtreeIsBackgrounded: A,
            currentSubtreeIsHidden: C,
            ended: g,
            hiddenSubtreePassive: t,
            isDocumentHidden: v,
            isDocumentHiddenOrBlurred: w,
            isExternalMedia: n,
            isFrozenPassive: o,
            lastPauseReason: p,
            lastPlayReason: q,
            muted: r,
            paused: s,
            videoPlayerExtendedPassiveViewabilityInfo: z,
            videoPlayerPassiveViewabilityInfo: y,
          };
        },
        [b, e, x, f, E, A, C, g, t, v, w, n, o, p, q, r, s, z, y]
      );
      a = m(G);
      var H = a[0],
        I = a[1],
        J = l(H);
      j(
        function () {
          J.current = H;
        },
        [H]
      );
      j(
        function () {
          var a = !1;
          for (var b in G)
            if (
              Object.prototype.hasOwnProperty.call(G, b) &&
              G[b] !== J.current[b]
            ) {
              a = !0;
              break;
            }
          a && I(G);
        },
        [G, I]
      );
      return H;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerAutoplayClient.react",
  [
    "CoreVideoPlayerAutoplayClientUtils",
    "HiddenSubtreePassiveContext",
    "VideoPlayerAutoplayHooks",
    "VideoPlayerDebugAutoplayAPI",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityConstants",
    "WwwCometVideoAutoplayFalcoEvent",
    "evaluateVideoAutoplayDefaultAllowRule",
    "evaluateVideoAutoplayDefaultIgnoreRule",
    "makeSelectedAutoplayVideoSymbol",
    "react",
    "useAutoplayRulesEngine",
    "useCometUniqueID",
    "useConcurrentAutoplayManagementAPI",
    "useVideoAutoplayState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a() {
      var a = c("useCometUniqueID")(),
        b = d("VideoPlayerHooks").useCanAutoplay(),
        e = d("VideoPlayerHooks").useInstanceKey(),
        f = k(
          function () {
            return c("makeSelectedAutoplayVideoSymbol")(a, e);
          },
          [a, e]
        ),
        g = l(f);
      j(
        function () {
          g.current = f;
        },
        [f]
      );
      var n = i(c("HiddenSubtreePassiveContext")),
        o = d("VideoPlayerHooks").useController(),
        p = l(!1),
        q = d("useConcurrentAutoplayManagementAPI").useAutoplayControlID();
      j(
        function () {
          d("CoreVideoPlayerAutoplayClientUtils").log(
            g.current,
            "[ASSUME CONTROL] " + q
          ),
            o.registerControllingComponent(q);
        },
        [o, q]
      );
      var r = d("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo(),
        s = o.getCurrentState();
      s = s.paused;
      var t = l(s),
        u = d("VideoPlayerAutoplayHooks").useVideoAutoplayLocalScope(),
        v = l(u);
      j(
        function () {
          v.current = u;
        },
        [u]
      );
      var w = h(
          function () {
            var a = o.getCurrentState(),
              b = a.lastPlayReason;
            a = a.paused;
            var d = t.current;
            t.current = a;
            var e = r == null ? void 0 : r.getCurrent();
            if (e) {
              e = e.visiblePercentage;
              a = !a && a !== d;
              d =
                e <
                  c("VideoPlayerViewabilityConstants")
                    .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE && e > 0;
              v.current.disableScrollBeforePlayWhenOffscreen !== !0 &&
                a &&
                b === "user_initiated" &&
                d &&
                (p.current = !0);
            }
          },
          [o, r]
        ),
        x = l(w);
      j(
        function () {
          x.current = w;
        },
        [w]
      );
      j(
        function () {
          var a = o.subscribe(function () {
            w();
          });
          return function () {
            a.remove();
          };
        },
        [o, w]
      );
      var y = c("useVideoAutoplayState")({
          noPauseOnBlurOrFocus: u.noPauseOnBlurOrFocus,
        }),
        z = c("useAutoplayRulesEngine")(u.autoplayLocalRules),
        A =
          b === "allow"
            ? c("evaluateVideoAutoplayDefaultAllowRule")
            : c("evaluateVideoAutoplayDefaultIgnoreRule");
      s = m(function () {
        return A;
      });
      var B = s[0],
        C = s[1];
      s = m(null);
      var D = s[0],
        E = s[1];
      s = m(function () {
        return z.evaluateAutoplay(y, A);
      });
      var F = s[0],
        G = s[1];
      s = m(null);
      var H = s[0],
        I = s[1],
        J = l(F),
        K = d("VideoPlayerAutoplayHooks").useAutoplayApi(),
        L = l(K);
      j(
        function () {
          L.current = K;
        },
        [K]
      );
      var M = b !== "dangerously_disable_autoplay_management";
      j(
        function () {
          K.register(f, e, u, o, n, M);
          c("WwwCometVideoAutoplayFalcoEvent").log(function () {
            return {
              autoplay_event_name: "register",
              autoplay_scope_id: v.current.autoplayScopeID,
              event_creation_time: Date.now(),
              initiator: g.current,
              initiator_type: "autoplay_component",
              selected_autoplay_video_symbol: K.getAutoplayManagerDebugInfo(
                v.current
              ).selectedAutoplayVideoSymbol,
              target: g.current,
              target_current_autoplay_decision: J.current,
            };
          });
          return function () {
            K.unregister(f),
              c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                return {
                  autoplay_event_name: "unregister",
                  autoplay_scope_id: v.current.autoplayScopeID,
                  event_creation_time: Date.now(),
                  initiator: g.current,
                  initiator_type: "autoplay_component",
                  selected_autoplay_video_symbol: K.getAutoplayManagerDebugInfo(
                    v.current
                  ).selectedAutoplayVideoSymbol,
                  target: g.current,
                  target_current_autoplay_decision: J.current,
                };
              });
          };
        },
        [K, u, o, n, e, M, f]
      );
      j(
        function () {
          var a = function () {
              var b = z.evaluateAutoplay(y, A);
              J.current = b;
              var e = z.getRules(),
                h = z.getIndexOfLastWinningRule(),
                a = h >= 0 ? e[h] : A;
              e = r && r.getCurrent();
              h = o.getCurrentState();
              h = h.paused;
              (H === null || H !== b) && (G(b), I(b));
              if (b === "PAUSE" && !h && o.isControllingComponent(q)) {
                h = !0;
                x.current();
                if (p.current) {
                  p.current = !1;
                  var i = e == null ? void 0 : e.positionToViewport;
                  i && o.scrollIntoView(i.top < 0);
                  h = !1;
                }
                if (h) {
                  i = "[PAUSE] via short-circuit on " + a.name + ".";
                  d("CoreVideoPlayerAutoplayClientUtils").log(g.current, i);
                  o.pause("autoplay_initiated");
                  c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                    return {
                      autoplay_event_name: "pause",
                      autoplay_scope_id: v.current.autoplayScopeID,
                      event_creation_time: Date.now(),
                      initiator: g.current,
                      initiator_type: "autoplay_component",
                      selected_autoplay_video_symbol:
                        K.getAutoplayManagerDebugInfo(v.current)
                          .selectedAutoplayVideoSymbol,
                      target: g.current,
                      target_current_autoplay_decision: b,
                    };
                  });
                }
              }
              (D === null || D !== a) &&
                (C(function () {
                  return a;
                }),
                E(function () {
                  return a;
                }),
                c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                  return {
                    autoplay_event_name: "rule_changed",
                    autoplay_scope_id: v.current.autoplayScopeID,
                    event_creation_time: Date.now(),
                    initiator: g.current,
                    initiator_type: "autoplay_component",
                    selected_autoplay_video_symbol:
                      K.getAutoplayManagerDebugInfo(v.current)
                        .selectedAutoplayVideoSymbol,
                    target: g.current,
                    target_current_autoplay_decision: b,
                  };
                }));
              d("CoreVideoPlayerAutoplayClientUtils").log(
                g.current,
                "[DECISION: " + b + "] from " + a.name
              );
              e && K.update(f, b, e);
            },
            b = n.subscribeToChanges(function (a) {
              n.getCurrentState().hidden || n.getCurrentState().backgrounded
                ? o.isControllingComponent(q) ||
                  o.unregisterControllingComponent(q)
                : o.registerControllingComponent(q);
            }),
            e = r
              ? r.subscribe(function () {
                  n.getCurrentState().hidden || n.getCurrentState().backgrounded
                    ? o.isControllingComponent(q) ||
                      o.unregisterControllingComponent(q)
                    : o.registerControllingComponent(q),
                    a();
                })
              : null;
          a();
          return function () {
            b.remove(), e && e.remove();
          };
        },
        [K, q, z, o, A, n, D, H, C, G, E, I, f, y, r]
      );
      j(
        function () {
          var a = o.isControllingComponent(q),
            b = o.getCurrentState();
          b = b.paused;
          d("CoreVideoPlayerAutoplayClientUtils").componentShouldPause(
            F,
            J.current,
            b,
            a
          ) &&
            (d("CoreVideoPlayerAutoplayClientUtils").log(
              g.current,
              "[PAUSE] the video for " + F
            ),
            o.pause("autoplay_initiated"),
            c("WwwCometVideoAutoplayFalcoEvent").log(function () {
              return {
                autoplay_event_name: "pause",
                autoplay_scope_id: v.current.autoplayScopeID,
                event_creation_time: Date.now(),
                initiator: g.current,
                initiator_type: "autoplay_component",
                selected_autoplay_video_symbol:
                  L.current.getAutoplayManagerDebugInfo(v.current)
                    .selectedAutoplayVideoSymbol,
                target: g.current,
                target_current_autoplay_decision: F,
              };
            }));
        },
        [F, o, q]
      );
      j(
        function () {
          return function () {
            d("CoreVideoPlayerAutoplayClientUtils").log(
              g.current,
              "[RELEASE CONTROL] " + q
            ),
              o.unregisterControllingComponent(q);
          };
        },
        [o, q]
      );
      c("VideoPlayerDebugAutoplayAPI").useVideoPlayerDebugAPIDefinition({
        applicableRule: B,
        autoplayApiRef: L,
        autoplayDecision: F,
        autoplayLocalScope: u,
        symbol: f,
      });
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsAreaDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")("VideoPlayerCaptionsArea.react").__setRef(
        "VideoPlayerCaptionsAreaDeferred.react"
      )
    );
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerIMFMetadataContext",
  ["react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
      i = { imfExpectedFromEmsg: !1, specInlineJson: null },
      j = b.createContext(i);
    j.displayName = "VideoPlayerIMFMetadataContext";
    e = j.Provider;
    function a() {
      var a = h(j);
      if (a === i)
        throw c("unrecoverableViolation")(
          "useVideoPlayerIMFMetadata is not called from a component nested under VideoPlayerRelay/VideoPlayerX.",
          "comet_video_player"
        );
      return a;
    }
    g.VideoPlayerIMFMetadataContextProvider = e;
    g.useVideoPlayerIMFMetadataFromContext = a;
  },
  98
);
__d(
  "WebSessionExtender",
  ["WebSession", "clearInterval", "cr:913", "setInterval"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e4,
      i = new Set(),
      j = null;
    function a(a, e) {
      e === void 0 && (e = "extender"),
        i.add(a),
        j == null &&
          (d("WebSession").extend(Date.now() + h + 2e3),
          (j = c("setInterval")(function () {
            d("WebSession").extend(Date.now() + h + 2e3),
              b("cr:913") &&
                new (b("cr:913"))()
                  .setClientTime(Date.now())
                  .setWebsessionID(d("WebSession").getId())
                  .setReason(e)
                  .log();
          }, h)));
    }
    function e(a) {
      i["delete"](a);
      a = i.size;
      a === 0 && j != null && (c("clearInterval")(j), (j = null));
    }
    g.subscribe = a;
    g.unsubscribe = e;
  },
  98
);
__d(
  "VideoPlayerWebSessionExtender.react",
  ["VideoPlayerHooks", "WebSessionExtender", "react", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a() {
      var a = d("VideoPlayerHooks").usePlaying(),
        b = c("useCometUniqueID")();
      h(
        function () {
          if (a) {
            d("WebSessionExtender").subscribe(b, "video");
            return function () {
              d("WebSessionExtender").unsubscribe(b);
            };
          }
        },
        [a, b]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ["VideoPlayerHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("VideoPlayerHooks").useStalling(),
        b = d("VideoPlayerHooks").useStreamInterrupted(),
        c = d("VideoPlayerHooks").useIsLiveRewindActive();
      b = b && !c;
      c = a;
      a = b ? "live_video_interrupted_overlay" : c ? "spinner" : "none";
      return {
        liveVideoInterruptedOverlayVisible: b,
        loadingIndicatorType: a,
        spinnerVisible: c,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultLoadingIndicators",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "gkx",
    "once",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("VideoPlayerSpinner.react").__setRef(
          "useVideoPlayerDefaultLoadingIndicators"
        )
      ),
      j = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerWithLiveVideoInterruptedOverlay.react"
        ).__setRef("useVideoPlayerDefaultLoadingIndicators")
      ),
      k = c("once")(function () {
        return c("gkx")("5900")
          ? null
          : h.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: h.jsx(j, {}),
            });
      });
    function a() {
      var a = c("useVideoPlayerDefaultLoadingIndicatorsLogic")(),
        b = a.loadingIndicatorType;
      a = a.spinnerVisible;
      a = h.jsx(i, { isVisible: a });
      var d = null;
      switch (b) {
        case "spinner":
          d = a;
          break;
        case "live_video_interrupted_overlay":
          d = k();
          break;
        case "none":
        default:
          d = a;
      }
      return { loadingIndicatorElement: d, loadingIndicatorType: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CvcV3HttpEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1856513");
    b = d("FalcoLoggerInternal").create("cvc_v3_http_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "CVCv3DisabledPlayerOrigins",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ BEEPER: "beeper", FB_STORIES: "fb_stories" });
    f["default"] = a;
  },
  66
);
__d(
  "CVCv3DisabledPlayerSubOrigins",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ LIVE_BEEPER: "live_beeper" });
    f["default"] = a;
  },
  66
);
__d(
  "CVCv3SubscriptionHelper",
  ["CvcV3HttpEventFalcoEvent", "DateConsts", "guid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d) {
        this.$1 = a;
        this.$2 = c("guid")();
        this.$3 =
          ((a = b) != null ? a : "null") +
          "::" +
          ((b = d) != null ? b : "null");
        this.$4 = null;
        this.$5 = null;
      }
      var b = a.prototype;
      b.isValidSubscription = function () {
        return !!this.$1;
      };
      b.makeCVCv3StateUpdate = function (a, b, c, e) {
        var f = null;
        a != null &&
          !Number.isNaN(a) &&
          b != null &&
          !Number.isNaN(b) &&
          (f = {
            m: e,
            pf: Math.floor((b - a) * d("DateConsts").MS_PER_SEC),
            s: c,
            sa: Math.floor(a * d("DateConsts").MS_PER_SEC),
          });
        e = { pps: this.$4, ps: f, si: this.$2, so: this.$3, vi: this.$1 };
        this.$4 = f;
        return e;
      };
      b.makeUnifiedVideoCVCUpdate = function (a, b, c, d, e) {
        a = this.makeCVCv3StateUpdate(a, b, c, d);
        this.$5 != null && (a.tk = this.$5);
        return babelHelpers["extends"]({}, a, e);
      };
      b.processUnifiedResponse = function (a) {
        a = a;
        this.$5 = a.tk;
        return a;
      };
      b.clearAnyPreviousContext = function () {
        this.$4 = null;
      };
      b.logHttpRequestSuccess = function (a) {
        var b = this;
        c("CvcV3HttpEventFalcoEvent").log(function () {
          return {
            name: "http_request_success",
            duration_ms: a != null ? a.toString() : null,
            countable_id: b.$1,
          };
        });
      };
      b.logHttpRequestFailure = function (a, b) {
        var d = this;
        c("CvcV3HttpEventFalcoEvent").log(function () {
          return {
            name: "http_request_failed",
            error_msg: a,
            duration_ms: b != null ? b.toString() : null,
            countable_id: d.$1,
          };
        });
      };
      b.logHttpRequestTimeout = function (a) {
        var b = this;
        c("CvcV3HttpEventFalcoEvent").log(function () {
          return {
            name: "http_request_timeout",
            duration_ms: a != null ? a.toString() : null,
            countable_id: b.$1,
          };
        });
      };
      b.logHttpResponseBad = function (a, b) {
        var d = this;
        c("CvcV3HttpEventFalcoEvent").log(function () {
          return {
            name: "http_response_bad",
            error_msg: a,
            duration_ms: b != null ? b.toString() : null,
            countable_id: d.$1,
          };
        });
      };
      b.logDebugInfo = function (a) {
        var b = this;
        c("CvcV3HttpEventFalcoEvent").log(function () {
          return { name: a, countable_id: b.$1 };
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XVideoUnifiedCVCControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/video/unified_cvc/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "UnifiedVideoCVCSubscription",
  [
    "CVCv3DisabledPlayerOrigins",
    "CVCv3DisabledPlayerSubOrigins",
    "CVCv3SubscriptionHelper",
    "DateConsts",
    "XVideoUnifiedCVCControllerRouteBuilder",
    "clearTimeout",
    "cometAsyncFetch",
    "gkx",
    "promiseDone",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = Object.values(c("CVCv3DisabledPlayerOrigins")),
      i = Object.values(c("CVCv3DisabledPlayerSubOrigins")),
      j = 10;
    a = (function () {
      function a(a, b, d, e, f, g) {
        var j = this;
        this.$1 = new (c("CVCv3SubscriptionHelper"))(a, b, d);
        this.$5 = f;
        this.$6 = null;
        this.$9 = null;
        this.$10 = !this.$1.isValidSubscription();
        this.$3 = null;
        this.$2 = null;
        a = b != null ? h.includes(b) : !1;
        f = d != null ? i.includes(d) : !1;
        !a &&
          !f &&
          ((this.$3 = e),
          (this.$11 = g),
          (this.$4 = e.subscribe(function () {
            if (j.$3 == null) {
              j.$1.logDebugInfo("empty_video_controller");
              return;
            }
            var a = j.$3.getCurrentState();
            a.playing ? j.$12(a) : j.$13();
          })));
      }
      var b = a.prototype;
      b.$12 = function (a) {
        if (this.$3 == null) {
          this.$1.logDebugInfo("empty_video_controller");
          return;
        }
        var b = !1;
        b || (b = this.$5 ? !0 : c("gkx")("1124976"));
        if (!b) {
          this.$1.logDebugInfo("ineligible_to_comet_cvc");
          return;
        }
        if (a.playing) {
          if (this.$2 == null) {
            b = this.$3.getPlayheadPosition();
            b >= 0 && (this.$2 = b);
          }
        } else this.$2 = null;
        this.$14(0);
      };
      b.stopUnifiedCVC = function () {
        this.$13();
      };
      b.destroy = function () {
        this.$13(),
          this.$4 != null && this.$4.remove(),
          (this.$4 = null),
          (this.$3 = null);
      };
      b.$13 = function () {
        c("clearTimeout")(this.$8),
          c("clearTimeout")(this.$7),
          (this.$8 = null),
          (this.$7 = null),
          (this.$2 = null),
          this.$1.clearAnyPreviousContext(),
          (this.$9 = null);
      };
      b.$15 = function () {
        c("clearTimeout")(this.$7), (this.$7 = null);
      };
      b.$16 = function () {
        (this.$9 = null), this.$15(), this.$14(0);
      };
      b.$14 = function (a) {
        var b = this;
        if (this.$3 == null || this.$8 != null || this.$9 != null || this.$10)
          return;
        this.$8 = c("setTimeout")(function () {
          b.$8 = null;
          var a = b.$17();
          if (a == null) {
            b.$1.logDebugInfo("empty_request");
            return;
          }
          b.$9 = a;
          var e = Date.now(),
            f = !1;
          c("promiseDone")(
            a,
            function (c) {
              if (a !== b.$9) return;
              b.$9 = null;
              if (c != null) {
                c = b.$1.processUnifiedResponse(c);
                b.$18(c, e);
              } else b.$1.logHttpResponseBad("null payload", Date.now() - e);
            },
            function (a) {
              (f = !0),
                b.$1.logHttpRequestFailure(
                  a != null ? JSON.stringify(a) : null,
                  Date.now() - e
                );
            }
          );
          b.$7 = c("setTimeout")(function () {
            f || b.$1.logHttpRequestTimeout(Date.now() - e), b.$16();
          }, j * d("DateConsts").MS_PER_SEC);
        }, a);
      };
      b.$18 = function (a, b) {
        this.$15();
        b = Date.now() - b;
        a.d != null
          ? (this.$1.logHttpRequestSuccess(b),
            this.$11 != null && this.$11(a.d))
          : this.$1.logHttpResponseBad("no data field", b);
        if (a.a != null) {
          b = a.a.t;
          switch (b) {
            case "p":
              b = a.a.pi;
              b == null && (b = j);
              this.$14(b * d("DateConsts").MS_PER_SEC);
              break;
            case "s":
              this.$10 = !0;
              break;
          }
        }
      };
      b.$17 = function () {
        var a = this.$19();
        if (a == null) return null;
        a = { d: JSON.stringify(a) };
        return c("cometAsyncFetch")(
          c("XVideoUnifiedCVCControllerRouteBuilder").buildURL({}),
          { data: a, method: "POST" }
        );
      };
      b.$19 = function () {
        if (this.$3 == null) return null;
        var a = {};
        this.$6 != null && (a.lc = this.$6);
        this.$5 && (a.ls = !0);
        var b = 0,
          c = 0;
        this.$2 != null && ((b = this.$2), (c = this.$3.getPlayheadPosition()));
        var d = this.$3.getCurrentState();
        b = this.$1.makeUnifiedVideoCVCUpdate(b, c, this.$20(d), d.muted, a);
        return b;
      };
      b.$20 = function (a) {
        if (a.playing || a.seeking) return "playing";
        else if (a.ended) return "ended";
        else if (a.paused) return "paused";
        else return "unknown";
      };
      b.testing_setLastStartPosition = function (a) {
        this.$2 = a;
      };
      b.testing_makeUnifiedStateUpdate = function () {
        return this.$19();
      };
      b.testing_handleUnifiedResponse = function (a) {
        return this.$18(a, Date.now());
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "getPlayerFormatForLogData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.isFullscreen;
      return a === !0 ? "full_screen" : b != null ? b : "inline";
    }
    f["default"] = a;
  },
  66
);
__d(
  "useVideoPlayerUnifiedCVCProvider",
  [
    "CvcV3HttpEventFalcoEvent",
    "UnifiedVideoCVCSubscription",
    "VideoPlayerHooks",
    "createVideoStateHook",
    "getPlayerFormatForLogData",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    b = d("createVideoStateHook").createVideoStateHook(null);
    var i = b.setterHook;
    e = d("createVideoStateHook").createVideoStateHook(null);
    var j = e.setterHook;
    f = e.valueHook;
    function a(a) {
      var b = a.disableSubscription,
        e = a.playerFormat,
        f = a.subOrigin,
        g = a.videoFBID,
        k = d("VideoPlayerHooks").useIsLive(),
        l = d("VideoPlayerHooks").useIsFullscreen(),
        m = d("VideoPlayerHooks").useIsDesktopPictureInPicture(),
        n = d("VideoPlayerHooks").useController(),
        o = i(),
        p = j();
      h(
        function () {
          if (b === !0) {
            c("CvcV3HttpEventFalcoEvent").log(function () {
              return { countable_id: g, name: "disable_subscription" };
            });
            return;
          }
          var a = new (c("UnifiedVideoCVCSubscription"))(
            g,
            c("getPlayerFormatForLogData")(
              { isDesktopPictureInPicture: m, isFullscreen: l },
              e
            ),
            f,
            n,
            k,
            function (a) {
              p(a);
            }
          );
          o(a);
          return function () {
            a.destroy();
          };
        },
        [m, l, k, b, e, p, o, f, n, g]
      );
    }
    b = f;
    g.useVideoPlayerUnifiedCVCProvider = a;
    g.useVideoPlayerUnifiedCVCData = b;
  },
  98
);
__d(
  "VideoPlayerXImplSurface.react",
  [
    "CoreVideoPlayerAudioClient.react",
    "CoreVideoPlayerAutoplayClient.react",
    "VideoPlayerCaptionsAreaDeferred.react",
    "VideoPlayerIMFMetadataContext",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerWebSessionExtender.react",
    "cr:1954434",
    "cr:902",
    "cr:99",
    "emptyFunction",
    "gkx",
    "react",
    "useVideoPlayerDefaultLoadingIndicators",
    "useVideoPlayerUnifiedCVCProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = (e = b("cr:902")) != null ? e : c("emptyFunction");
    function a(a) {
      var e = a.children,
        f = a.disableCVCSubscription,
        g = a.disableLoadingIndicator;
      g = g === void 0 ? !1 : g;
      var j = a.disableLogging,
        k = a.instreamVideoAdBreaksPlayer,
        l = a.playerFormat,
        m = a.subOrigin,
        n = a.videoFBID,
        o = a.videoPlayerIMFFromVideoMetadata;
      a = a.videoPlayerSpherical;
      d("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCProvider({
        disableSubscription: j === !0 || f,
        playerFormat: l,
        subOrigin: m,
        videoFBID: n,
      });
      i();
      j = c("useVideoPlayerDefaultLoadingIndicators")();
      f = j.loadingIndicatorElement;
      return h.jsxs(
        d("VideoPlayerIMFMetadataContext")
          .VideoPlayerIMFMetadataContextProvider,
        {
          value: (l = o) != null ? l : null,
          children: [
            a,
            g ? null : f,
            c("gkx")("1586633")
              ? h.jsx(
                  d("VideoPlayerInteractionOverlay.react")
                    .VideoPlayerInteractionOverlay,
                  {}
                )
              : null,
            h.jsxs(c("VideoPlayerCaptionsAreaDeferred.react"), {
              children: [e, k],
            }),
            h.jsx(c("CoreVideoPlayerAutoplayClient.react"), {}),
            h.jsx(c("CoreVideoPlayerAudioClient.react"), {}),
            b("cr:1954434") ? h.jsx(b("cr:1954434"), {}) : null,
            b("cr:99") ? h.jsx(b("cr:99"), { subOrigin: m }) : null,
            h.jsx(c("VideoPlayerWebSessionExtender.react"), {}),
          ],
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "normalizeVideoPlayerLoopCount",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      b === void 0 && (b = null);
      d === void 0 && (d = null);
      if (a == null) {
        var e;
        d = ((e = b) != null ? e : !1) ? ((e = d) != null ? e : 0) : 0;
        d === -1
          ? (e = -1)
          : d < 0 || !Number.isFinite(d) || Math.floor(d) !== d
          ? (e = 0)
          : d === 0 && b === !0
          ? (e = -1)
          : (e = d);
      } else if (a === -1 || a === Number.POSITIVE_INFINITY) e = -1;
      else if (a < 0 || !Number.isFinite(a) || Math.floor(a) !== a)
        throw c("unrecoverableViolation")(
          "Invalid loopingCount: " + a,
          "comet_video_player"
        );
      else e = a;
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRouteRenderType",
  ["CometRouterRenderTypeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "pushView";
    }
    function b() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "hosted";
    }
    function e() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "main";
    }
    g.useIsPushView = a;
    g.useIsHosted = b;
    g.useIsMain = e;
  },
  98
);
__d(
  "useParentRoute",
  ["CometRouterParentRouteContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouterParentRouteContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePlayerOriginRouteTracePolicy",
  [
    "CometNotificationsRootContext",
    "CometRouteRenderType",
    "react",
    "useCometRouteTracePolicy",
    "useCometRouterState",
    "useParentRoute",
    "useRoutePassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometNotificationsRootContext"));
      a = a.isNotificationsRoute;
      var b = c("useCometRouteTracePolicy")(),
        e = d("CometRouteRenderType").useIsPushView(),
        f = c("useParentRoute")(),
        g = c("useCometRouterState")(),
        i = c("useRoutePassthroughProps")();
      if ((i == null ? void 0 : i.isARLTW) === !0) return "comet.watch.arltw";
      i = b === "comet.videos.tahoe";
      var j = b === "comet.stories.viewer",
        k = b === "comet.reels.home";
      if (e) {
        if (i) return "unknown";
        if (j) return b;
        if (k && (f == null ? void 0 : f.tracePolicy) == null && g != null) {
          e = g.main;
          j = g.pushViewStack;
          k = j && j.length > 1 ? j[j.length - 2] : e;
          g = k.route;
          return (j = g.tracePolicy) != null ? j : b;
        }
      }
      return a && !i
        ? b
        : (e = f == null ? void 0 : f.tracePolicy) != null
        ? e
        : b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRouteProductAttribution",
  ["CometRouteProductAttributionContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouteProductAttributionContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerXImpl.react",
  [
    "CoreVideoPlayerWithComponents.react",
    "VideoPlayerXImplSurface.react",
    "normalizeVideoPlayerLoopCount",
    "react",
    "usePlayerOriginRouteTracePolicy",
    "useRouteProductAttribution",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.disableCVCSubscription;
      d = d === void 0 ? !1 : d;
      var e = a.disableLoadingIndicator,
        f = a.disableLogging,
        g = a.implementations,
        i = a.instreamVideoAdBreaksPlayer,
        j = a.portalingEnabled,
        k = a.portalingFromVideoID,
        l = a.portalingPlaceMetaData,
        m = a.portalingRenderPlaceholder,
        n = a.videoPlayerIMFFromVideoMetadata,
        o = a.videoPlayerSpherical;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "disableCVCSubscription",
        "disableLoadingIndicator",
        "disableLogging",
        "implementations",
        "instreamVideoAdBreaksPlayer",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "portalingRenderPlaceholder",
        "videoPlayerIMFFromVideoMetadata",
        "videoPlayerSpherical",
      ]);
      var p = c("usePlayerOriginRouteTracePolicy")(),
        q = c("useRouteProductAttribution")();
      q || (q = a.productAttribution);
      var r = a.loopCount,
        s = a.playerFormat,
        t = a.subOrigin,
        u = a.videoFBID;
      r = c("normalizeVideoPlayerLoopCount")(r);
      return h.jsx(
        c("CoreVideoPlayerWithComponents.react"),
        babelHelpers["extends"]({}, a, {
          disableLogging: f,
          implementations: g,
          loopCount: r,
          portalingEnabled: j,
          portalingFromVideoID: k,
          portalingPlaceMetaData: l,
          portalingRenderPlaceholder: m,
          productAttribution: q,
          routeTracePolicy: p,
          children: h.jsx(c("VideoPlayerXImplSurface.react"), {
            children: b,
            disableCVCSubscription: d,
            disableLoadingIndicator: e,
            disableLogging: f,
            instreamVideoAdBreaksPlayer: i,
            playerFormat: s,
            subOrigin: t,
            videoFBID: u,
            videoPlayerIMFFromVideoMetadata: n,
            videoPlayerSpherical: o,
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
  "VideoPlayerFallbackLearnMoreLink.react",
  ["fbt", "CometLink.react", "TetraText.react", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = c("gkx")("1224637")
        ? "/help/work/1876956335887765/i-cant-view-or-play-videos-on-workplace"
        : "https://www.facebook.com/help/396404120401278/list";
      return i.jsx(c("TetraText.react"), {
        color: "primaryOnMedia",
        type: "headlineEmphasized3",
        children: i.jsx(c("CometLink.react"), {
          href: a,
          children: h._("Learn More"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerFallbackCoverImplWithoutRetry.react",
  [
    "TetraText.react",
    "VideoPlayerFallbackLearnMoreLink.react",
    "cr:1672302",
    "cr:4149",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var d = a.debugError,
        e = a.message;
      a.onRetry;
      return h.jsx("div", {
        className:
          "x6s0dn4 xatbrnm x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x889kno x1iji9kk x1a8lsjc x1sln4lm",
        children: h.jsxs("div", {
          className: "x6s0dn4 x78zum5 xdt5ytf x3es6ox",
          children: [
            h.jsx("div", {
              className: "x6s0dn4 x78zum5 xdt5ytf x193iq5w",
              children: h.jsx(c("TetraText.react"), {
                align: "center",
                color: "primaryOnMedia",
                type: "bodyLink3",
                children: e,
              }),
            }),
            h.jsx("div", {
              className: "x6s0dn4 x78zum5 xdt5ytf xw7yly9 x193iq5w",
              children: h.jsx(c("VideoPlayerFallbackLearnMoreLink.react"), {}),
            }),
            b("cr:4149") ? h.jsx(b("cr:4149"), { error: d }) : null,
            b("cr:1672302") ? h.jsx(b("cr:1672302"), { error: d }) : null,
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
  "VideoPlayerFallbackCover.react",
  ["fbt", "VideoPlayerFallbackCoverImplWithoutRetry.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b;
      b =
        (b = a.message) != null
          ? b
          : h._("Sorry, we're having trouble playing this video.");
      return i.jsx(c("VideoPlayerFallbackCoverImplWithoutRetry.react"), {
        debugError: a.debugError,
        message: b,
        onRetry: a.onRetry,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "defaultErrorBoundaryFallback",
  ["fbt", "VideoPlayerFallbackCover.react", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return a && c("gkx")("1792489")
        ? a.message.toLowerCase().indexOf("audio_renderer_error") >= 0
        : !1;
    }
    function a(a) {
      var b = a.error;
      a = a.retry;
      var d = j(b),
        e = null;
      a = a;
      d &&
        ((e = h._("Audio renderer error: Please restart your computer.")),
        (a = null));
      return i.jsx(c("VideoPlayerFallbackCover.react"), {
        debugError: b,
        message: e,
        onRetry: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerX.react",
  [
    "VideoPlayerRetryableErrorBoundary.react",
    "VideoPlayerXImpl.react",
    "defaultErrorBoundaryFallback",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;
      b = b === void 0 ? !1 : b;
      var d = a.errorBoundaryFallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn",
        "errorBoundaryFallback",
      ]);
      a = h.jsx(
        c("VideoPlayerXImpl.react"),
        babelHelpers["extends"](
          { VideoPlayerShakaPerformanceLoggerClass: null },
          a
        )
      );
      return b
        ? a
        : h.jsx(c("VideoPlayerRetryableErrorBoundary.react"), {
            description: "VideoPlayerX",
            fallback: (b = d) != null ? b : c("defaultErrorBoundaryFallback"),
            children: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsController",
  ["JSResourceForInteraction", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiCea608State"
      ).__setRef("VideoPlayerCaptionsController"),
      i = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiWebVttState"
      ).__setRef("VideoPlayerCaptionsController");
    function a(a) {
      var b = a.captionsUrl,
        d = a.inbandCaptionsExpected,
        e = a.onCaptionsLoaded,
        f = null,
        g = null,
        j = null,
        k = null;
      function l(a) {
        var b = i
          .load()
          .then(function (c) {
            if (b !== j) return;
            f = new c({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (b) {
                b.loadFromUrl(a);
              },
            });
          })
          ["catch"](function (a) {
            if (b !== j) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiWebVttState module: " +
                a.message,
              "comet_video_player"
            );
          });
        return b;
      }
      function m() {
        var a = h
          .load()
          .then(function (b) {
            if (a !== k) return;
            g = new b({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (a) {
                a.processQueue();
              },
            });
          })
          ["catch"](function (b) {
            if (a !== k) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiCea608State module: " +
                b.message,
              "comet_video_player"
            );
          });
        return a;
      }
      b != null ? (j = l(b)) : d === !0 && (k = m());
      return {
        destroy: function () {
          f && (f.destroy(), (f = null)),
            g && (g.destroy(), (g = null)),
            j && (j = null),
            k && (k = null);
        },
        getCaptionFormat: function () {
          return f ? "webvtt" : g ? "cea608" : null;
        },
        handleCea608BytesReceived: function (a) {
          g && g.enqueueBytes(a);
        },
        handleTimeUpdate: function (a) {
          if (f) {
            var b;
            f.source && f.source.handleTimeUpdate(a);
            return (b =
              (b = f) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? b
              : null;
          } else if (g) {
            g.source && g.source.handleTimeUpdate(a);
            return (a =
              (b = g) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? a
              : null;
          }
          return null;
        },
        updateCaptionsUrl: function (a) {
          f && (f.destroy(), (f = null)), a != null && (j = l(a));
        },
        updateInbandCaptionsExpected: function (a) {
          g && (g.destroy(), (g = null)), a && (k = m());
        },
      };
    }
    g.createCaptionsController = a;
  },
  98
);
__d(
  "VideoPlayerSurface.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return this.props.children != null ? this.props.children : null;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerControlsBottomRowAddOnContext",
  ["react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.useContext,
      j = d.useEffect,
      k = d.useState,
      l = h.createContext(null);
    function a(a) {
      a = a.children;
      var b = c("useStable")(function () {
        var a = null,
          b = null,
          c = null;
        return {
          getBottomRowAddOn: function () {
            return b;
          },
          initialize: function (d) {
            c = function (a) {
              (b = a), d(a);
            };
            if (a == null) return;
            c(a);
            a = null;
          },
          setBottomRowAddOn: function (b) {
            if (c == null) {
              a = b;
              return;
            }
            c(b);
          },
        };
      });
      return h.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = i(l);
      a = k(a);
      var c = a[0],
        d = a[1];
      j(
        function () {
          if (b == null) return;
          b.initialize(d);
        },
        [b]
      );
      return c;
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      var b = i(l);
      j(
        function () {
          if (b == null) return;
          b.setBottomRowAddOn(a);
        },
        [a, b]
      );
    }
    g.VideoPlayerControlsBottomRowAddOnContext = l;
    g.VideoPlayerControlsBottomRowAddOnContextProvider = a;
    g.useVideoPlayerControlsBottomRowAddOn = b;
    g.useSetVideoPlayerControlsBottomRowAddOn = e;
  },
  98
);
__d(
  "computeAspectRatio",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a != null && b != null && a !== 0 && b !== 0 ? a / b : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "DataViewReader",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = 0), (this.$2 = a);
      }
      var b = a.prototype;
      b.seek = function (a) {
        this.$1 = a;
      };
      b.skip = function (a) {
        var b = this.$1;
        this.$1 += a;
        return b;
      };
      b.readUint8 = function () {
        return this.$2.getUint8(this.skip(8 / 8));
      };
      b.readUint16 = function (a) {
        a === void 0 && (a = !1);
        return this.$2.getUint16(this.skip(16 / 8), a);
      };
      b.readUint32 = function (a) {
        a === void 0 && (a = !1);
        return this.$2.getUint32(this.skip(32 / 8), a);
      };
      b.readUint64 = function (a) {
        a === void 0 && (a = !1);
        var b;
        a
          ? ((a = this.$2.getUint32(this.skip(32 / 8), !0)),
            (b = this.$2.getUint32(this.skip(32 / 8), !0)))
          : ((b = this.$2.getUint32(this.skip(32 / 8))),
            (a = this.$2.getUint32(this.skip(32 / 8))));
        if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
        return Math.pow(2, 32) * b + a;
      };
      b.readInt64 = function (a) {
        a === void 0 && (a = !1);
        var b;
        a
          ? ((a = this.$2.getInt32(this.skip(32 / 8), !0)),
            (b = this.$2.getInt32(this.skip(32 / 8), !0)))
          : ((b = this.$2.getInt32(this.skip(32 / 8))),
            (a = this.$2.getInt32(this.skip(32 / 8))));
        if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
        return Math.pow(2, 32) * (b | 0) + a;
      };
      b.readInt16 = function (a) {
        a === void 0 && (a = !1);
        return this.$2.getInt16(this.skip(16 / 8), a);
      };
      b.readInt32 = function (a) {
        a === void 0 && (a = !1);
        return this.$2.getInt32(this.skip(32 / 8), a);
      };
      b.readZeroTerminatedString = function (a) {
        var b = "",
          c = 0,
          d;
        while (c++ < a && (d = this.readUint8())) b += String.fromCharCode(d);
        return b;
      };
      b.readChars = function (a) {
        var b = "";
        while (a-- > 0)
          b += String.fromCharCode(this.$2.getUint8(this.skip(8 / 8)));
        return b;
      };
      b.readBytes = function (a) {
        var b = [];
        while (a-- > 0) b.push(this.$2.getUint8(this.skip(8 / 8)));
        return b;
      };
      b.getDataView = function () {
        return this.$2;
      };
      b.getCursor = function () {
        return this.$1;
      };
      b.hasMoreData = function () {
        return this.$2.byteLength - this.getCursor() > 0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "Mp4DASHEventMessageBox",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b) {
        (this.$1 = b),
          (this.$2 = null),
          b.getVersion() == 0
            ? (this.$2 = {
                version: 0,
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b)),
                timescale: a.readUint32(),
                presentationTimeDelta: a.readUint32(),
                eventDuration: a.readUint32(),
                id: a.readUint32(),
              })
            : b.getVersion() == 1 &&
              (this.$2 = {
                version: 1,
                timescale: a.readUint32(),
                presentationTime: a.readUint64(),
                eventDuration: a.readUint32(),
                id: a.readUint32(),
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b)),
              }),
          (this.$3 = new DataView(a.getDataView().buffer, a.getCursor()));
      }
      var b = a.prototype;
      b.getFullBox = function () {
        return this.$1;
      };
      b.getEmsgFields = function () {
        return this.$2;
      };
      b.getMessageData = function () {
        return this.$3;
      };
      b.getStartTime = function () {
        var a = this.$2;
        if (a == null) return null;
        switch (a.version) {
          case 0:
            return null;
          case 1:
            return this.$5(a);
        }
      };
      b.getDuration = function () {
        var a = this.$2;
        if (a == null) return null;
        var b = a.eventDuration;
        a = a.timescale;
        return a !== 0 ? b / a : b;
      };
      b.$5 = function (a) {
        var b = a.timescale;
        a = a.presentationTime;
        return b !== 0 ? a / b : a;
      };
      b.$4 = function (a, b) {
        return b.getBox().getSize() - (a.getCursor() - b.getBox().getStart());
      };
      return a;
    })();
    a.canonicalType = "emsg";
    f["default"] = a;
  },
  66
);
__d(
  "Mp4Box",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$4 = a.getCursor()),
          (this.$1 = a.readUint32()),
          (this.$2 = a.readChars(4)),
          this.$1 === 1
            ? (this.$1 = a.readUint64())
            : this.$1 === 0 && (this.$1 = a.getDataView().byteLength - this.$4),
          this.$2 === "uuid" && (this.$3 = a.readChars(16)),
          (this.$5 = a.getCursor());
      }
      var b = a.prototype;
      b.getBodyStart = function () {
        return this.$5;
      };
      b.getBodySize = function () {
        var a = this.$5 - this.$4;
        return this.getSize() - a;
      };
      b.getSize = function () {
        return this.$1;
      };
      b.getType = function () {
        return this.$2;
      };
      b.getUuid = function () {
        return this.$3;
      };
      b.getStart = function () {
        return this.$4;
      };
      b.inspect = function () {
        return "{ size: " + this.$1 + ", type: " + this.$2 + " }";
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "Mp4FullBox",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$2 = a.readUint8()),
          (this.$1 = a.readUint8()),
          (this.$1 = a.readUint8() + (this.$1 << 8)),
          (this.$1 = a.readUint8() + (this.$1 << 8)),
          (this.$3 = b);
      }
      var b = a.prototype;
      b.getVersion = function () {
        return this.$2;
      };
      b.getFlags = function () {
        return this.$1;
      };
      b.getBox = function () {
        return this.$3;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "Mp4Demuxer",
  ["DataViewReader", "Mp4Box", "Mp4FullBox"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = new (c("DataViewReader"))(a);
      }
      var b = a.prototype;
      b.parseBox = function () {
        return new (c("Mp4Box"))(this.$1);
      };
      b.parseFullBox = function (a) {
        return new (c("Mp4FullBox"))(this.$1, a);
      };
      b.parseCanonicalBox = function (a, b) {
        return new a(this.$1, b);
      };
      b.skipBox = function (a) {
        this.$1.seek(a.getStart() + a.getSize());
      };
      b.withinBox = function (a) {
        var b = this.$1.getCursor();
        return b >= a.getStart() && b < a.getStart() + a.getSize();
      };
      b.atEnd = function () {
        return this.$1.getCursor() >= this.$1.getDataView().byteLength;
      };
      b.reset = function () {
        this.$1.seek(0);
      };
      b.readBoxBodyText = function (a) {
        this.$1.seek(a.getBodyStart());
        var b = new TextDecoder();
        a = new Uint8Array(this.$1.readBytes(a.getBodySize()));
        return b.decode(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "parseJSONMixed",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a == null ? null : JSON.parse(a, b);
    }
    f["default"] = a;
  },
  66
);
__d(
  "tryParseJSONMixed",
  ["parseJSONMixed"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      try {
        return c("parseJSONMixed")(a, b);
      } catch (a) {
        return null;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerEmsg",
  [
    "DataViewReader",
    "ErrorMetadata",
    "ErrorSerializer",
    "FBLogger",
    "Mp4DASHEventMessageBox",
    "Mp4Demuxer",
    "deepEquals",
    "err",
    "getErrorSafe",
    "refine",
    "tryParseJSONMixed",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("refine").custom(function (a) {
      return typeof a === "number"
        ? a
        : typeof a === "string" && /^[0-9]+$/.test(a)
        ? a
        : void 0;
    });
    var h = d("refine").object({
        rosterData: d("refine").object({
          activeSpeaker: d("refine").nullable(f),
          speakerInfoList: d("refine").array(
            d("refine").object({ audioMuted: d("refine").bool(), id: f })
          ),
        }),
      }),
      i = d("refine").object({
        imf: d("refine").object({
          pluginEventData: d("refine").mixed(),
          pluginEventType: d("refine").string(),
        }),
      });
    function j(a, b, e) {
      try {
        return d("refine").jsonParserEnforced(a)(b);
      } catch (d) {
        if (c("tryParseJSONMixed")(b) == null)
          throw c("err")(
            'Failed to parse emsg payload as JSON for scheme "%s"',
            e
          );
        else {
          a = c("getErrorSafe")(d);
          throw c("err")(
            'Unsupported emsg payload format for scheme "%s": %s',
            e,
            a.message
          );
        }
      }
    }
    var k = {
      LIVE_HUDDLE_SCHEME_ID: "urn:fb:metadata",
      LIVE_HUDDLE_ZLIB_SCHEME_ID: "urn:fb:metadata:deflate",
      LIVE_INSTREAM_ADS_SCHEME_ID: "urn:fb:ads_meta",
      LIVE_INTERACTIVE_PLUGIN_EVENT_ID: "urn:fb:interactive_plugin",
      LIVE_STICKER_SCHEME_ID: "urn:fb:lvstickr",
    };
    function l(a, b) {
      for (
        var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2;
        f < d;
        f++
      )
        e[f - 2] = arguments[f];
      var g = c("err").apply(void 0, [b].concat(e));
      g.errorName = g.name = a;
      return g;
    }
    function m(a) {
      var b = a.emsgDataStr,
        d = a.emsgDurationInSec,
        e = a.emsgId,
        f = a.emsgScheme,
        g = a.emsgStartTimeInSec,
        m = a.representationID,
        n = a.videoID,
        o = null,
        p = null;
      try {
        if (f == null)
          throw l("CometVideoPlayerEmsgMissingScheme", "Missing emsg scheme");
        if (f === "")
          throw l("CometVideoPlayerEmsgEmptyScheme", "Empty emsg scheme");
        if (f.startsWith("livedash:trace:")) return [null, null];
        if (g == null)
          throw l(
            "CometVideoPlayerEmsgMissingStartTime",
            'Missing start time in emsg "%s"',
            String(f)
          );
        switch (f) {
          case k.LIVE_HUDDLE_SCHEME_ID:
            var q = j(h, b, f);
            o = {
              data: q,
              emsgDataStr: b,
              emsgDurationInSec: d,
              emsgId: e,
              emsgScheme: f,
              emsgStartTimeInSec: g,
              representationID: m,
              type: "emsg_huddle",
            };
            break;
          case k.LIVE_HUDDLE_ZLIB_SCHEME_ID:
            o = null;
            break;
          case k.LIVE_INSTREAM_ADS_SCHEME_ID:
            o = {
              emsgDataStr: b,
              emsgDurationInSec: d,
              emsgId: e,
              emsgScheme: f,
              emsgStartTimeInSec: g,
              representationID: m,
              type: "emsg_instream_ads",
            };
            break;
          case k.LIVE_INTERACTIVE_PLUGIN_EVENT_ID:
            q = j(i, b, f);
            o = {
              data: q.imf,
              emsgDataStr: b,
              emsgDurationInSec: d,
              emsgId: e,
              emsgScheme: f,
              emsgStartTimeInSec: g,
              representationID: m,
              type: "imf_interactive_plugin_event",
            };
            break;
          case k.LIVE_STICKER_SCHEME_ID:
            o = {
              emsgDataStr: b,
              emsgDurationInSec: d,
              emsgId: e,
              emsgScheme: f,
              emsgStartTimeInSec: g,
              representationID: m,
              type: "imf_live_sticker",
            };
            break;
          default:
            q = /^urn:fb:(.+)$/.exec(f);
            if (q == null)
              throw l(
                "CometVideoPlayerEmsgUnknownScheme",
                'Unknown scheme in emsg "%s"',
                String(f)
              );
            q = (q = q[1]) != null ? q : "";
            o = {
              emsgDataStr: b,
              emsgDurationInSec: d,
              emsgId: e,
              emsgScheme: f,
              emsgSchemeIMFTopic: q,
              emsgStartTimeInSec: g,
              representationID: m,
              type: "imf_other",
            };
            break;
        }
      } catch (d) {
        p = c("getErrorSafe")(d);
        b = p.metadata || new (c("ErrorMetadata"))();
        n != null && b.addEntry("COMET_VIDEO", "VIDEO_ID", n);
        b.addEntry(
          "COMET_VIDEO",
          "VIDEO_IMPLEMENTATION_DEBUG_DATA",
          JSON.stringify(a)
        );
        p.metadata = b;
      }
      return [o, p];
    }
    function n(a, b, d) {
      var e = a.getMessageData();
      e = new (c("DataViewReader"))(e).readZeroTerminatedString(e.byteLength);
      var f = a.getEmsgFields();
      return {
        emsgDataStr: e,
        emsgDurationInSec: (e = a.getDuration()) != null ? e : void 0,
        emsgId: f == null ? void 0 : f.id,
        emsgScheme: f == null ? void 0 : f.schemeIdUri,
        emsgStartTimeInSec: (e = a.getStartTime()) != null ? e : void 0,
        representationID: d,
        videoID: b,
      };
    }
    function o(a, b, c) {
      q(b, a, c);
      var d = m(a),
        e = d[0];
      d = d[1];
      r(b, a, d, c);
      return e;
    }
    function a(a, b, d, e, f) {
      var g = [];
      a = new (c("Mp4Demuxer"))(new DataView(a));
      while (!a.atEnd()) {
        var h = a.parseBox();
        if (h.getType() === c("Mp4DASHEventMessageBox").canonicalType) {
          var i = a.parseCanonicalBox(
            c("Mp4DASHEventMessageBox"),
            a.parseFullBox(h)
          );
          if (i instanceof c("Mp4DASHEventMessageBox")) {
            i = n(i, b, d);
            i = o(i, e, f);
            i != null && g.push(i);
          }
        }
        a.skipBox(h);
      }
      return g;
    }
    function p(a, b) {
      return {
        debug_reason: null,
        error_user_info: JSON.stringify({
          emsgDataStr: b.emsgDataStr,
          emsgDurationInSec: b.emsgDurationInSec,
          emsgId: b.emsgId,
          emsgScheme: b.emsgScheme,
          emsgStartTimeInSec: b.emsgStartTimeInSec,
        }),
        imf_emsg_id: b.emsgId != null ? String(b.emsgId) : null,
        imf_topic: b.emsgScheme,
        offset_ms:
          b.emsgStartTimeInSec == null
            ? null
            : a * 1e3 - b.emsgStartTimeInSec * 1e3,
        representation_id: b.representationID,
      };
    }
    function q(a, b, c) {
      b.emsgScheme != null &&
        ![k.LIVE_HUDDLE_SCHEME_ID, k.LIVE_HUDDLE_ZLIB_SCHEME_ID].includes(
          b.emsgScheme
        ) &&
        (c == null
          ? void 0
          : c(
              babelHelpers["extends"]({}, p(a, b), {
                imf_event_type: "IMF_DOWNLOAD",
              })
            ));
    }
    function r(a, b, d, e) {
      if (d != null) {
        var f,
          g = d.errorName != null && d.errorName !== "" ? d.errorName : d.name,
          h = d.messageFormat != null ? d.messageFormat : d.message;
        f = (
          d.messageFormat != null
            ? (f = d.messageParams) != null
              ? f
              : []
            : []
        ).slice();
        var i = "CometVideoPlayerEmsgParseFailed",
          j =
            i +
            ":" +
            (d.errorName != null && d.errorName !== "" ? d.errorName : d.name),
          l = c("ErrorSerializer").toReadableMessage(
            c("err").apply(void 0, [h].concat(f))
          );
        (d = c("FBLogger")("comet_video_player").catching(d)).warn.apply(
          d,
          ["CometVideoPlayerEmsgParseFailed:" + g + ": " + h].concat(f)
        );
        e == null
          ? void 0
          : e(
              babelHelpers["extends"]({}, p(a, b), {
                error: j,
                error_code: "0",
                error_description: l,
                error_domain: i,
                error_type: "GenericParseError",
                imf_event_type: "IMF_JSON_PARSE_FAILURE",
              })
            );
      } else if (
        ![
          k.LIVE_HUDDLE_SCHEME_ID,
          k.LIVE_HUDDLE_ZLIB_SCHEME_ID,
          k.LIVE_INSTREAM_ADS_SCHEME_ID,
          k.LIVE_STICKER_SCHEME_ID,
          k.LIVE_INTERACTIVE_PLUGIN_EVENT_ID,
        ].includes(b.emsgScheme)
      ) {
        d = "CometVideoPlayerEmsgInvalidScheme";
        g = "" + d;
        e == null
          ? void 0
          : e(
              babelHelpers["extends"]({}, p(a, b), {
                error: g,
                error_code: "0",
                error_description: (h = b.emsgScheme) != null ? h : "",
                error_domain: d,
                error_type: "GenericParseError",
                imf_event_type: "INVALID_TOPIC",
              })
            );
      }
    }
    function s(a, b) {
      var c;
      return [a.type, a.emsgScheme, (c = a.emsgId) != null ? c : ""]
        .concat(
          b
            ? [
                (c = a.emsgStartTimeInSec) != null ? c : "",
                (b = a.emsgDurationInSec) != null ? b : "",
              ]
            : []
        )
        .join(":");
    }
    function t(a, b) {
      a.set(s(b, !0), b);
      return a;
    }
    function b(a, b) {
      return b.reduce(t, new Map(a));
    }
    function e(a, b, d) {
      a =
        b == null
          ? []
          : Array.from(a.values())
              .filter(function (a) {
                var c = a.emsgStartTimeInSec;
                a = a.emsgDurationInSec || 0;
                return c != null && b >= c && b < c + a;
              })
              .sort(function (a, b) {
                return (
                  (a.emsgStartTimeInSec || 0) - (b.emsgStartTimeInSec || 0)
                );
              });
      a = Array.from(
        a
          .reduce(function (a, b) {
            a.set(s(b, !1), b);
            return a;
          }, new Map())
          .values()
      );
      return c("deepEquals")(d, a) ? d : a;
    }
    g.KnownEmsgSchemes = k;
    g.parseEmsgBoxFromDetails = m;
    g.extractEmsgBoxDetails = n;
    g.parseEmsgBoxFromDetailsWithLogging = o;
    g.parseEmsgBoxesFromMP4Segment = a;
    g.makeEmsgBoxDedupKey = s;
    g.makeUpdatedAllEmsgBoxes = b;
    g.makeUpdatedActiveEmsgBoxes = e;
  },
  98
);
__d(
  "OzBufferVTTCaptionsVisibleStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !this.$1();
      };
      b.getBufferTarget = function () {
        return 0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/utils/OzAbrUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c, d) {
      var e = a.getNumber("resolution_constraint_factor");
      if (e === 0) return b;
      var f = b.filter(function (b) {
        var f = b.getWidth() <= c.width * d * e;
        b = b.getHeight() <= c.height * d * e;
        return a.getBool("use_strict_resolution_constraint") ? f && b : f || b;
      });
      return !f.length ? [b[0]] : f;
    };
    b = function (a, b, c, d, e, f) {
      b = b
        ? a.getNumber("min_switch_interval")
        : a.getNumber("initial_switch_interval");
      d = d >= a.getNumber("abr_min_bandwidth_samples");
      var g = a.getNumber("abr_eval_buffer_threshold");
      c = !g || c >= g;
      g = null;
      e + a.getNumber("min_eval_interval") > Date.now()
        ? (g = "min_eval_interval")
        : f + b > Date.now()
        ? (g = "min_switch_interval")
        : !d
        ? (g = "min_bandwidth_samples")
        : c || (g = "buffer_threshold_not_satisfied");
      return g;
    };
    f.excludeLargeRepresentations = a;
    f.getReasonToPreventEvaluation = b;
  },
  66
);
__d(
  "oz-player/utils/OzBufferingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e = 0.1;
    var g = 1,
      h = 0.2;
    function a(a, b, c) {
      if (i(a, c)) return !0;
      c = a.currentTime;
      var d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return d - c > b;
    }
    function i(a, b) {
      var c = a.currentTime,
        d = 0;
      for (var e = 0; e < a.buffered.length; e++) {
        var f = a.buffered.start(e),
          g = a.buffered.end(e);
        if (f <= c && g >= c) {
          d = g;
          break;
        }
      }
      return Math.abs(d - b) <= h || Math.abs(c - b) <= h;
    }
    function b(a, b) {
      a = a ? a.getSourceBufferState() : null;
      if (!a) return 0;
      b = b.getCurrentTime();
      return j(b, a.getBufferedRanges());
    }
    function j(a, b) {
      var c = null;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.startTime <= a && e.endTime > a && (c = e);
      }
      return !c ? 0 : c.endTime - a;
    }
    function c(a) {
      var b = [];
      for (var c = 0; c < a.buffered.length; c++)
        b.push({
          rangeStart: a.buffered.start(c),
          rangeEnd: a.buffered.end(c),
        });
      return b;
    }
    function d(a, b, c, d) {
      if (c.length === 0 || b.size === 0) return !1;
      var e = null;
      for (var f = 0; f < c.length; f++) {
        var g = c[f],
          h = b.get(g);
        if (l(a, 0, h)) {
          e = g;
          break;
        }
      }
      if (e == null) return !1;
      var i = !0;
      b.forEach(function (c, b) {
        if (e === b) return;
        b = c.getBufferedRanges();
        b.forEach(function (b) {
          i = k(a, b, d, i);
        });
      });
      return !i;
    }
    function k(a, b, c, d) {
      return a >= b.startTime && a < b.endTime + c ? !1 : d;
    }
    function l(a, b, c) {
      b === void 0 && (b = 0);
      if (c) {
        c = c.getBufferedRanges();
        for (var d = 0; d < c.length; d++)
          if (c[d].startTime <= a && c[d].endTime > a && c[d].endTime - a > b)
            return !0;
      }
      return !1;
    }
    f.BUFFER_UNDERFLOW_THRESHOLD = e;
    f.BUFFER_OVERFLOW_THRESHOLD = g;
    f.BUFFER_FUDGE_FACTOR = h;
    f.hasEnoughBuffer = a;
    f.hasBufferedToOrReachedEnd = i;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = j;
    f.getNumericalRangesFromSourceBuffer = c;
    f.hasEnoughPartialBuffer = d;
    f.hasBuffer = l;
  },
  66
);
__d(
  "oz-player/utils/OzPlaybackRestrictionsUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a, b) {
      return a.getBandwidth() - b.getBandwidth();
    };
    a = function (a, b, c, d) {
      if (d.length === 0) return [];
      d.sort(g);
      a = b.reduce(function (a, b) {
        return b.applyRestriction(a, c);
      }, d);
      return a;
    };
    f.applyVideoPlaybackRestrictions = a;
  },
  66
);
__d(
  "OzSystemicRiskABRManager",
  [
    "MosUtils",
    "OzSystemicRiskUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/utils/OzAbrUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 2e3,
      j = {
        BANDWIDTH: "br",
        BUFFER: "vb",
        ENCODING: "er",
        LOW_MOS: "lm",
        MULTIPLIER: "m",
        PREVIOUS_MOS: "pm",
        PREVIOUS_RESOLUTION: "pr",
      };
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$11 = !1),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$7 = f),
          (this.$8 = g),
          (this.$9 = h);
      }
      var b = a.prototype;
      b.setSourceBuffer = function (a) {
        this.$6 = a;
      };
      b.updateRepresentations = function (a) {
        var b = this;
        this.$3 = a;
        a = this.$3.find(function (a) {
          return a.getQualityLabel() === b.$2.getQualityLabel();
        });
        this.$2 = (a = a) != null ? a : this.$3[0];
      };
      b.getBestRepresentation = function (a) {
        var b = this.$1.getLegacyConfig(),
          e = d(
            "oz-player/utils/OzBufferingUtils"
          ).getBufferAheadFromPlaybackStates(this.$6, this.$5),
          f = this.$5.getDuration();
        f = isNaN(f) ? h : f;
        if (this.$3.length === 0) {
          this.$10 = "no available representations";
          return this.$2;
        }
        var g = this.$5.getCurrentTime();
        f = this.$9 === "static" ? (f - g) * 1e3 : h;
        g = this.$8();
        a = b.getBool("systemic_risk_use_fetch_range_duration", !1)
          ? this.$12(a)
          : i;
        var j = b.getBool("use_bandwidth_estimate_from_headers_in_abr", !1)
          ? c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnosticsFromHeaders(b)
          : c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnostics(b);
        if (j == null) {
          this.$10 = "missing bandwidth diagnostics";
          return this.$2;
        }
        var k = this.$13(this.$3).sort(function (a, b) {
            return a.getBandwidth() - b.getBandwidth();
          }),
          l = null,
          m = null,
          n = null;
        for (var o = 0; o < k.length; o++) {
          var p = k[Math.max(o - 1, 0)],
            q = this.$14(p, g);
          p = Math.min(p.getHeight(), p.getWidth());
          m = d("OzSystemicRiskUtils").getRiskFactorsForRepresentation({
            bandwidthDiagnostics: j,
            bitrate: k[o].getBandwidth(),
            bufferAhead: e,
            config: this.$1.getLegacyConfig(),
            hasMadeInitialDecision: this.$11,
            initialRiskFactor: b.getNumber(
              "systemic_risk_abr_initial_risk_factor",
              1
            ),
            lowMosResolution: b.getNumber(
              "systemic_risk_abr_low_mos_resolution",
              0
            ),
            minWatchableMos: b.getNumber(
              "systemic_risk_abr_min_watchable_mos",
              0
            ),
            previousMos: q,
            previousResolution: p,
            remainingVideoDurationMs: f,
            segmentFetchRangeDurationMs: a,
          });
          q = m;
          p = q.multiplier;
          if (isNaN(p)) {
            n = m;
            l = this.$2;
            break;
          }
          q = d("OzSystemicRiskUtils").isEffectiveBitrateBelowBandwidthEstimate(
            k[o].getBandwidth(),
            m.multiplier,
            a,
            j
          );
          if (q) (n = m), (l = k[o]);
          else break;
        }
        l == null
          ? (this.$2 =
              b.getBool("respect_playback_restrictions_in_abr_fallback", !1) &&
              k.length > 0
                ? k[0]
                : this.$3[0])
          : (this.$2 = l);
        this.$15((p = n) != null ? p : m, {
          isSystemicRiskABREnabled: b.getBool("use_systemic_risk_abr", !1),
          noRepresentationSelected: l == null,
          representationCount: k.length,
        });
        this.$11 || (this.$11 = !0);
        return this.$2;
      };
      b.$12 = function (a) {
        var b = i;
        if (a != null && a.length > 0) {
          var c = a[0].getTimeRange().startTime;
          a = a[a.length - 1].getTimeRange().endTime;
          a - c > 0 && (b = (a - c) * 1e3);
        }
        return b;
      };
      b.$14 = function (a, b) {
        a = a.getCustomField("playbackResolutionMos");
        a = d("MosUtils").parsePlaybackMos(String(a));
        return a != null
          ? d("MosUtils").getMosValue(
              a,
              d("MosUtils").getQualityLabel(b.width, b.height)
            )
          : null;
      };
      b.$13 = function (a) {
        var b = this;
        if (
          !this.$1
            .getLegacyConfig()
            .getBool("systemic_risk_abr_apply_representation_restrictions", !1)
        )
          return a;
        var c = this.$1
            .getLegacyConfig()
            .getBool("exclude_large_representations_after_restrictions", !1),
          e = a;
        a = function () {
          e = d("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(
            b.$1,
            e,
            b.$8(),
            b.$7
          );
        };
        var f = function () {
          e = d(
            "oz-player/utils/OzPlaybackRestrictionsUtils"
          ).applyVideoPlaybackRestrictions(b.$1, b.$4, b.$8(), e);
        };
        c || (a(), f());
        c && (f(), a());
        return e;
      };
      b.$15 = function (a, b) {
        if (a == null) return;
        var c = b.isSystemicRiskABREnabled,
          d = b.noRepresentationSelected;
        b = b.representationCount;
        this.$10 = [
          [j.LOW_MOS, a.lowMos],
          [j.ENCODING, a.encoding],
          [j.BANDWIDTH, a.bandwidth],
          [j.MULTIPLIER, a.multiplier],
          [j.BUFFER, a.buffer],
          [j.PREVIOUS_MOS, a.previousMos],
          [j.PREVIOUS_RESOLUTION, a.previousResolution],
        ].reduce(function (a, b) {
          var c = b[1],
            d = "";
          switch (typeof c) {
            case "number":
              d = c.toFixed(1);
              break;
            case "boolean":
              d = c ? "1" : "0";
              break;
            default:
              d = "null";
          }
          return a + (b[0] + ": " + d + ";");
        }, "");
        c || (this.$10 += "disabled;");
        d && (this.$10 += "none-selected-of-" + b + ";");
      };
      b.getLastEvaluationReason = function () {
        return this.$10;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoPictureInPictureManagerContext",
  ["gkx", "qex", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react").createContext;
    d = f({
      openPipPlayer: function () {},
      setController: function () {},
      setPipPortableVideoID: function () {},
    });
    f = f({
      hasNextChainedVideo: !1,
      isPipEnabled: !1,
      setHasNextChainedVideo: function () {},
      setSkippedFromPipPlayer: function () {},
      skippedFromPipPlayer: !1,
    });
    function a() {
      return c("gkx")("3610");
    }
    function b() {
      return !1;
    }
    function e() {
      return !!c("qex")._("586");
    }
    g.CometVideoPictureInPictureManagerAPIContext = d;
    g.CometVideoPictureInPictureManagerContext = f;
    g.isInPictureInPictureExp = a;
    g.isInPictureInPictureExpControlGroup = b;
    g.isSkipAndChainingDisabledInPictureInPicture = e;
  },
  98
);
__d(
  "MediaPlaybackCompoundEventStateMachineLogger",
  ["emptyFunction", "gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0.5;
    b = c("emptyFunction");
    d = c("emptyFunction");
    e = c("emptyFunction");
    function i() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        hasLoggedStartedPlaying: !1,
        hasPendingRequestedPlaying: !1,
        isLoggingScrubbingSequence: !1,
        lastLoggedCaptionState: null,
        lastLoggedFullscreenState: !1,
        lastLoggedSoundOnState: null,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
      };
    }
    function a(a) {
      var b = {},
        d = a.initialLoggingMetaData;
      d;
      var e = [],
        f = i();
      function g(a) {
        var b,
          c = a.eventType,
          g = a.snaplOverrides,
          h = a.state;
        a = a.tags;
        var i = null,
          j = null,
          k =
            (a == null ? void 0 : a.fullscreen) != null
              ? a == null
                ? void 0
                : a.fullscreen
              : f.lastLoggedFullscreenState,
          l =
            (a == null ? void 0 : a.captions_displayed) != null
              ? a == null
                ? void 0
                : a.captions_displayed
              : f.lastLoggedCaptionState,
          m =
            (a == null ? void 0 : a.player_sound_on) != null
              ? a == null
                ? void 0
                : a.player_sound_on
              : f.lastLoggedSoundOnState;
        b = (b = d.coreVideoPlayerMetaData.videoFBID) != null ? b : "-1";
        var n =
          d.coreVideoPlayerMetaData.adClientToken == null ? "organic" : "paid";
        b = {
          current_watching_module: "",
          media_id: b,
          player_origin: d.coreVideoPlayerMetaData.playerOriginOverride,
          player_suborigin: d.coreVideoPlayerMetaData.subOrigin,
          tracking_type: n,
        };
        n = "";
        (g == null ? void 0 : g.video_time_position) != null
          ? (n = Math.round(g.video_time_position * 1e3).toString())
          : h.uncontrolledState.videoElementPlayheadPosition != null &&
            (n = Math.round(
              h.uncontrolledState.videoElementPlayheadPosition * 1e3
            ).toString());
        g = {
          client_time_ms: Date.now().toString(),
          event_name: c,
          media_time_ms: n,
          tag_metadata: {
            captions_displayed: a == null ? void 0 : a.captions_displayed,
            fullscreen: a == null ? void 0 : a.fullscreen,
            player_sound_on: a == null ? void 0 : a.player_sound_on,
          },
        };
        h = {
          client_high_res_packaging_time_ms: i,
          event: g,
          operational_metadata: j,
          required_metadata: b,
        };
        e.push(h);
        f.lastLoggedSoundOnState = m;
        f.lastLoggedFullscreenState = k;
        f.lastLoggedCaptionState = l;
      }
      function j(a) {
        d;
        if (a.type === "notify_logging_metadata_change") {
          a = a.payload.loggingMetaData;
          d = a;
        }
      }
      function k(a, c, d) {
        if (
          a.controlledState.playbackState !== c.controlledState.playbackState &&
          c.controlledState.playbackState === "ended" &&
          f.canLogPausedOrFinishedPlaying
        ) {
          g({ eventType: "completed", state: c });
          f.canLogPausedOrFinishedPlaying = !1;
          return b;
        } else return b;
      }
      function l(a, c) {
        g({ eventType: "requested_playing", snaplOverrides: c, state: a });
        f.hasPendingRequestedPlaying = !0;
        f.canLogPausedOrFinishedPlaying = !0;
        return b;
      }
      function m(a) {
        if (!f.canLogPausedOrFinishedPlaying) return b;
        else if (f.hasPendingRequestedPlaying) {
          n(a);
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else {
          g({ eventType: "paused", state: a });
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        }
      }
      function n(a) {
        g({ eventType: "cancelled", state: a });
        return b;
      }
      function o(a, c, d) {
        if (
          d.type === "dom_event_play_promise_rejected" &&
          f.hasPendingRequestedPlaying
        ) {
          a = d.payload.playPromiseRejectionReason;
          if (a != null && a.name === "NotAllowedError") {
            n(c);
            return b;
          } else return b;
        } else return b;
      }
      function p(a, c, d) {
        if (
          (d.type === "controller_play_requested" ||
            (d.type === "dom_event_play" && !f.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          l(c);
          return b;
        } else return b;
      }
      function q(a, c, d) {
        var e = c.controlledState.playbackState,
          g = a.controlledState.playbackState;
        if (
          d.type === "controller_scrub_begin_requested" &&
          !a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          m(c);
          f.isLoggingScrubbingSequence = !0;
          return b;
        } else if (
          !a.controlledState.seeking &&
          c.controlledState.seeking &&
          !f.isLoggingScrubbingSequence &&
          e !== "paused" &&
          e !== "ended" &&
          !f.hasPendingRequestedPlaying
        ) {
          m(c);
          f.shouldLogRequestedPlayingForScrub = !0;
          return b;
        } else if (
          d.type === "controller_scrub_end_requested" &&
          a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          l(c, { video_time_position: d.payload.seekTargetPosition });
          return b;
        } else if (a.controlledState.seeking && !c.controlledState.seeking) {
          d = c.uncontrolledState.videoElementPlayheadPosition;
          a = a.controlledState.implementationSeekSourcePosition;
          a != null &&
            d != null &&
            Math.abs(a - d) > h &&
            (f.shouldLogRequestedPlayingForScrub &&
              e !== "paused" &&
              e !== "ended" &&
              l(c),
            (f.isLoggingScrubbingSequence = !1),
            (f.shouldLogRequestedPlayingForScrub = !1),
            g !== "paused" && g !== "ended" && (f.canLogPlayingEvent = !0));
          return b;
        } else return b;
      }
      function r(a, c, d) {
        if (
          a.controlledState.playbackState === "stalling" &&
          c.controlledState.playbackState === "playing" &&
          f.canLogPlayingEvent
        ) {
          g({
            eventType: f.hasLoggedStartedPlaying
              ? "unpaused"
              : "started_playing",
            state: c,
          });
          f.hasLoggedStartedPlaying = !0;
          f.canLogPlayingEvent = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else return b;
      }
      function s(a, c, d) {
        if (
          (d.type === "controller_pause_requested" ||
            (d.type === "dom_event_pause" && !f.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          m(c);
          return b;
        } else return b;
      }
      function t(a, d, e) {
        a = d.controlledState.playbackState;
        if (a !== "paused" && a !== "ended") {
          c("gkx")("1469813") &&
          e.type === "implementation_video_node_unmounted"
            ? m(d)
            : (e.type === "implementation_unmounted" ||
                e.type === "implementation_engine_destroy_requested") &&
              m(d);
          return b;
        } else return b;
      }
      function u(a, c, d) {
        if (d.type !== "notify_fullscreen_changed") return b;
        a = f.lastLoggedFullscreenState;
        d = c.uncontrolledState.isFullscreen;
        if (a !== !0 && d === !0) {
          x(c, !0);
          return b;
        } else if (a === !0 && d === !1) {
          x(c, !1);
          return b;
        } else return b;
      }
      function v(a, c, d) {
        if (
          d.type !== "controller_muted_requested" &&
          d.type !== "controller_volume_requested"
        )
          return b;
        a = c.controlledState.muted;
        d = c.controlledState.volume;
        a = !(a || d === 0);
        d = f.lastLoggedSoundOnState;
        if (d !== !0 && a === !0) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { player_sound_on: !0 },
          });
          return b;
        } else if (d !== !1 && a === !1) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { player_sound_on: !1 },
          });
          return b;
        } else return b;
      }
      function w(a, c, d) {
        if (d.type !== "controller_set_captions_visible_requested") return b;
        a = f.lastLoggedCaptionState;
        d = c.controlledState.captionsVisible;
        if (a !== !0 && d === !0) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { captions_displayed: !0 },
          });
          return b;
        } else if (a !== !1 && d === !1) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { captions_displayed: !1 },
          });
          return b;
        } else return b;
      }
      function x(a, b) {
        g({ eventType: "tags_changed", state: a, tags: { fullscreen: b } });
      }
      return {
        consumeLoggerEvents: function () {
          if (e.length > 0)
            if (c("qex")._("1217")) {
              var a = e.some(function (a) {
                return (
                  a.event.event_name === "paused" ||
                  a.event.event_name === "completed" ||
                  a.event.event_name === "cancelled"
                );
              });
              if (a) return e.splice(0);
            } else return e.splice(0);
          return [];
        },
        handleStateMachine: function (a, b, c) {
          j(c);
          var d = b.controlledState.playbackState,
            e = [u, o, p, q, r, k, s, v, t, w];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === "paused" || d === "ended") && (f.canLogPlayingEvent = !0);
          c.type === "controller_pause_requested" &&
            (f.shouldIgnoreDomPause = !0);
          c.type === "controller_play_requested" &&
            (f.shouldIgnoreDomPlay = !0);
          c.type === "dom_event_pause" && (f.shouldIgnoreDomPause = !1);
          c.type === "dom_event_play" && (f.shouldIgnoreDomPlay = !1);
        },
      };
    }
    g.createMediaPlaybackCompoundEventStateMachineLogger = a;
  },
  98
);
__d(
  "PlaybackSpeedExperiments",
  ["gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      return c("gkx")("1755152");
    }
    function i() {
      return !1;
    }
    function a() {
      return h() || i() || c("qex")._("2095");
    }
    function j() {
      return i() ? !1 : c("qex")._("2096") || c("qex")._("2097");
    }
    function b() {
      return k() || j();
    }
    function k() {
      if (i()) return !0;
      return j() ? !1 : h() || c("qex")._("2098");
    }
    function d() {
      if (h()) return !1;
      if (i()) return !0;
      return j() ? !1 : !!c("qex")._("2099");
    }
    function e() {
      if (h()) return !1;
      if (i()) return !1;
      return !j() ? !1 : !!c("qex")._("2100");
    }
    function f() {
      return !0;
    }
    function l() {
      return !!c("qex")._("2101");
    }
    g.enableWwwPlaybackSpeedControl = a;
    g.isInCometHeadroomTest = j;
    g.enableCometPlaybackSpeedControl = b;
    g.enableCometPlaybackSpeedControlPublicTest = k;
    g.enableCometPlaybackSpeedControlNUX = d;
    g.enableCometPlaybackSpeedControlHeadroomTestNUX = e;
    g.enablePlaybackSpeedLogging = f;
    g.enablePersistPlaybackSpeed = l;
  },
  98
);
__d(
  "SubscriptionsHandler",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose;
    }
    function j(a) {
      i(a).call(a);
    }
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.addSubscriptions = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        b.every(i) || h(0, 3659);
        this.$1 != null ? (this.$1 = this.$1.concat(b)) : b.forEach(j);
      };
      b.engage = function () {
        this.$1 == null && (this.$1 = []);
      };
      b.release = function () {
        this.$1 != null && (this.$1.forEach(j), (this.$1 = null));
      };
      b.releaseOne = function (a) {
        var b = this.$1;
        if (b == null) return;
        var c = b.indexOf(a);
        c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LiveTraceWwwVideoPlayerFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743810");
    b = d("FalcoLoggerInternal").create("live_trace_www_video_player", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "VideoLiveTrace",
  [
    "DataViewReader",
    "LiveTraceWwwVideoPlayerFalcoEvent",
    "Mp4DASHEventMessageBox",
    "Mp4Demuxer",
    "throttle",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "x-fb-video-livetrace-ids",
      i = "x-fb-video-livetrace-parentsource",
      j = "x-fb-video-livetrace-streamtype",
      k = "x-fb-origin-hit",
      l = "x-fb-edge-hit",
      m = "PLY:WWW:",
      n = m + "DL:",
      o = m + "DIS:",
      p = 1e3,
      q = /[\r\n]+/;
    a = (function () {
      function a(a, b, d) {
        var e = this;
        this.$6 = [];
        this.$1 = a;
        this.$2 = null;
        a = d + ":" + b.substring(0, 5);
        this.$3 = m + a;
        this.$4 = n + a;
        this.$5 = o + a;
        this.$7 = c("throttle")(function (a) {
          return e.$8(a);
        }, p);
      }
      var b = a.prototype;
      b.setStreamType = function (a) {
        this.$2 = a;
      };
      b.$9 = function (a, b, d, e, f, g) {
        var h,
          i = this,
          j = Date.now(),
          k = (h = this.$2) != null ? h : 0;
        c("LiveTraceWwwVideoPlayerFalcoEvent").log(function () {
          return {
            stream_id: i.$1,
            stream_type: k,
            event_name: b,
            event_severity: f,
            event_creation_time: j,
            source: a,
            trace_id: d,
            parent_source: e,
            metadata: g,
          };
        });
      };
      b.onUpdateStatus = function (a) {
        this.$7(a);
      };
      b.$8 = function (a) {
        a = a.position * 1e3;
        for (var b = this.$6.length - 1; b >= 0; b--) {
          var c = this.$6[b];
          if (c.presentationTimestamp > a) continue;
          if (c.displayTimestamp == null) c.displayTimestamp = Date.now();
          else continue;
          this.$9(this.$5, "FRAME", c.traceId, this.$4, "SUCCESS", null);
        }
      };
      b.getAndFlushTracedFrames = function () {
        var a,
          b = { currentTimeMs: Date.now(), streamId: this.$1 },
          c = { dl: [], dis: [] },
          d = [];
        this.$6.forEach(function (a) {
          a.hasBeenFlushedAsDownloaded ||
            (c.dl.push({ id: a.traceId, timeMs: a.downloadTimestamp }),
            (a.hasBeenFlushedAsDownloaded = !0)),
            a.displayTimestamp != null
              ? c.dis.push({ id: a.traceId, timeMs: a.displayTimestamp })
              : d.push(a);
        });
        this.$6 = d;
        b[(a = this.$2) != null ? a : 0] = c;
        return c.dl.length > 0 || c.dis.length > 0 ? b : null;
      };
      b.handleHeadersString = function (a, b) {
        a = a.trim().split(q);
        this.$10(
          a.map(function (a) {
            a = a.split(": ");
            return [a.shift().toLowerCase(), a.shift()];
          }),
          b
        );
      };
      b.handleHeaders = function (a, b) {
        this.$10(this.$11(a), b);
      };
      b.handleHeadersAndBody = function (a, b, c) {
        this.$12(this.$11(a), b, c);
      };
      b.$11 = function (a) {
        var b = [];
        for (
          var a = a.entries(),
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
          b.push(e);
        }
        return b;
      };
      b.$13 = function (a) {
        var b = Date.now(),
          d = new Map(),
          e = a.reduce(function (a, b) {
            return a + b.byteLength;
          }, 0),
          f = new Uint8Array(e),
          g = 0;
        a.forEach(function (a) {
          f.set(a, g), (g += a.byteLength);
        });
        e = new (c("Mp4Demuxer"))(
          new DataView(f.buffer, f.byteOffset, f.byteLength)
        );
        while (!e.atEnd()) {
          a = e.parseBox();
          if (a.getType() === c("Mp4DASHEventMessageBox").canonicalType) {
            var h = e.parseCanonicalBox(
              c("Mp4DASHEventMessageBox"),
              e.parseFullBox(a)
            );
            if (h instanceof c("Mp4DASHEventMessageBox")) {
              var i;
              i = (i = h.getEmsgFields()) == null ? void 0 : i.schemeIdUri;
              if (i == null ? void 0 : i.startsWith("livedash:trace:")) {
                i = h.getMessageData();
                h = new (c("DataViewReader"))(i).readZeroTerminatedString(
                  i.byteLength
                );
                try {
                  i = JSON.parse(h);
                  Array.isArray(i) &&
                    i
                      .filter(function (a) {
                        return Array.isArray(a) && a.length === 2;
                      })
                      .forEach(function (a) {
                        var c = a[0];
                        a = a[1];
                        d.set(c, {
                          displayTimestamp: null,
                          downloadTimestamp: b,
                          hasBeenFlushedAsDownloaded: !1,
                          presentationTimestamp: a,
                          traceId: c,
                        });
                      });
                } catch (a) {}
              }
            }
          }
          e.skipBox(a);
        }
        return d;
      };
      b.$14 = function (a, b) {
        var c = this,
          d = "null",
          e = Date.now(),
          f = new Map(),
          g = "";
        a.forEach(function (a) {
          var b = a[0].toLowerCase();
          a = a[1];
          if (b === h && a) {
            var m = a.split(",");
            m.forEach(function (a) {
              a = a.split(":");
              var b = +a[0];
              a = +a[1];
              f.set(b, {
                displayTimestamp: null,
                downloadTimestamp: e,
                hasBeenFlushedAsDownloaded: !1,
                presentationTimestamp: a,
                traceId: b,
              });
            });
          }
          b === i && (g = a);
          c.$2 === null && b === j && (c.$2 = parseInt(a, 10));
          (b === k || b === l) &&
            parseInt(a, 10) &&
            (d = b === k ? "origin" : "edge");
        });
        a = b || {};
        a.hit = d;
        return g !== ""
          ? {
              tracedFrames: f,
              eventMetaData: a,
              parentSource: g,
              streamType: this.$2,
            }
          : null;
      };
      b.$12 = function (a, b, c) {
        var d = this.$14(a, c);
        if (d == null || d.parentSource === "") return;
        if (b == null ? void 0 : b.length) {
          a = this.$13(b);
          a.forEach(function (a, b) {
            d.tracedFrames.set(b, a);
          });
        }
        this.$6 = this.$6.concat(Array.from(d.tracedFrames.values()));
        c = d.tracedFrames.keys();
        for (
          b = c,
            a = Array.isArray(b),
            c = 0,
            b = a
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (a) {
            if (c >= b.length) break;
            e = b[c++];
          } else {
            c = b.next();
            if (c.done) break;
            e = c.value;
          }
          e = e;
          this.$9(
            this.$4,
            "SEGMENT",
            e,
            d.parentSource,
            "SUCCESS",
            d.eventMetaData
          );
        }
      };
      b.$10 = function (a, b) {
        this.$12(a, null, b);
      };
      b.handleXHR = function (a, b) {
        this.handleHeadersString(a.getAllResponseHeaders(), b);
      };
      b.getLiveTraceContext = function () {
        return this.$2 != null
          ? { streamId: this.$1, streamType: this.$2, sourceId: this.$3 }
          : null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerBanzaiLogFlusher",
  ["VideoPlayerWwwLogger", "emptyFunction", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("emptyFunction");
    b = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.flushLogs = function () {
        var a = this.$1.consumeLoggerEvents();
        a.forEach(function (a) {
          var b = {
            event: a.eventType,
            logData: a.logData,
            routeTracePolicy: a.routeTracePolicy,
            source: a.source_VPL_LOGGING_HACK,
          };
          if (
            a.source_VPL_LOGGING_HACK === "animated_image_share" &&
            c("gkx")("1710047")
          )
            return;
          b = (b = a.logData) == null ? void 0 : b.ad_client_token;
          b != null
            ? c("VideoPlayerWwwLogger").logCometImmediately(a)
            : c("VideoPlayerWwwLogger").logComet(a);
        });
      };
      b.discardLogsWithoutFlushing = function () {
        var a = this.$1.consumeLoggerEvents();
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerImplementationErrorNormalization",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.getType();
      switch (b) {
        case "OZ_NETWORK":
          b =
            (b = (b = a.getExtra()) == null ? void 0 : b.code) != null
              ? b
              : "0";
          b = parseInt(b, 10);
          return b < 100 || b > 599 ? "NetworkError" : "HTTPError";
        case "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED":
          a = (b = a.getExtra()) == null ? void 0 : b.mimeType;
          if (a != null && a.indexOf("video") > -1) return "VideoDecodeError";
          else if (a != null && a.indexOf("audio") > -1)
            return "AudioDecodeError";
          else return "GenericDecodeError";
      }
      return null;
    }
    function b(a) {
      switch (a) {
        case "MEDIA_ERR_NETWORK":
          return "NetworkError";
        case "MEDIA_ERR_ABORTED":
        case "MEDIA_ERR_DECODE":
        case "MEDIA_ERR_SRC_NOT_SUPPORTED":
        case "MEDIA_ERR_UNKNOWN":
          return "GenericDecodeError";
        case "OZ_REPRESENTATION_PARSER":
        case "OZ_XML_PARSER":
          return "ManifestParseError";
        case "BUFFERING_TIMEOUT":
        case "OZ_DRM_MANAGER":
        case "OZ_INITIALIZATION":
        case "OZ_JAVASCRIPT_NATIVE":
        case "OZ_SOURCE_BUFFER":
        case "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR":
        case "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR":
          return "RuntimeError";
      }
      return null;
    }
    f.getVideoPlayerNormalizedErrorTypeFromOzError = a;
    f.getErrorTypeFromErrorName = b;
  },
  66
);
__d(
  "getErrorMessageFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "The fetching process for the media resource was aborted by the user agent at the users request.";
        case 2:
          return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
        case 3:
          return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
        case 4:
          return "The media resource indicated by the src attribute was not suitable.";
      }
      return null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getErrorNameFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "MEDIA_ERR_ABORTED";
        case 2:
          return "MEDIA_ERR_NETWORK";
        case 3:
          return "MEDIA_ERR_DECODE";
        case 4:
          return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
          return "MEDIA_ERR_UNKNOWN_" + ((a = a) != null ? a : "UNDEFINED");
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerImplementationErrors",
  [
    "NetworkStatus",
    "VideoPlayerImplementationErrorNormalization",
    "getErrorMessageFromMediaErrorCode",
    "getErrorNameFromMediaErrorCode",
    "gkx",
    "oz-player/utils/OzError",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      BUFFERING_TIMEOUT_INPLAY: "30000",
      BUFFERING_TIMEOUT_INPLAY_NO_NETWORK: "30001",
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY: "30010",
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK: "30011",
      BUFFERING_TIMEOUT_LIVEREWIND_START: "30012",
      BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK: "30013",
      BUFFERING_TIMEOUT_START: "30002",
      BUFFERING_TIMEOUT_START_NO_NETWORK: "30003",
    };
    function a(a) {
      var b = a.errorLocation,
        d = a.hostCallError,
        e = a.videoElementError,
        f = a.videoElementNetworkState;
      a = a.videoElementReadyState;
      var g = e == null ? void 0 : e.code,
        h = d != null && typeof d.message === "string" ? d.message : null;
      h == null && (h = e == null ? void 0 : e.message);
      h == null && g != null && (h = c("getErrorMessageFromMediaErrorCode")(g));
      return {
        createdTimestamp: Date.now(),
        errorDescription:
          ((e = h) != null ? e : "Empty error") +
          ("; code: " + ((h = g) != null ? h : "undefined")) +
          ("; readyState: " + a) +
          ("; networkState: " + f),
        errorLocation: b,
        errorName: c("getErrorNameFromMediaErrorCode")(g),
        originalError: d,
      };
    }
    function b(a, b) {
      return a == null
        ? {
            createdTimestamp: Date.now(),
            errorDescription: "Empty rejection reason from video play()",
            errorLocation: b,
            errorName: "PlayRejectedError",
          }
        : {
            createdTimestamp: Date.now(),
            errorCode:
              typeof a.code === "string"
                ? a.code
                : typeof a.code === "number"
                ? String(a.code)
                : void 0,
            errorDescription:
              typeof a.message === "string" ? a.message : String(a),
            errorLocation: b,
            errorName:
              typeof a.name === "string" ? a.name : "PlayRejectedError",
          };
    }
    function e(a, b, d, e, f) {
      var g,
        i = (function () {
          if (f)
            if (e === "in_play" && c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY;
            else if (e === "in_play" && !c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK;
            else if (e === "start/unpause" && c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START;
            else if (e === "start/unpause" && !c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK;
            else return 0;
          else if (e === "in_play" && c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY;
          else if (e === "in_play" && !c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY_NO_NETWORK;
          else if (e === "start/unpause" && c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_START;
          else if (e === "start/unpause" && !c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_START_NO_NETWORK;
          else return 0;
        })();
      g = {
        message: String((g = b == null ? void 0 : b.message) != null ? g : ""),
        name: String(
          (g = b == null ? void 0 : b.name) != null ? g : "UnknownError"
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: String(i),
        errorDescription: g.name + " " + g.message,
        errorLocation: d,
        errorName: a,
        stack: g.stack,
        url: null,
      };
    }
    function i(a, b, d, e) {
      var f;
      e === void 0 && (e = null);
      f = {
        message: String((f = b == null ? void 0 : b.message) != null ? f : ""),
        name: String(
          (f = b == null ? void 0 : b.name) != null ? f : "UnknownError"
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: null,
        errorDescription: f.name + " " + f.message,
        errorLocation: d,
        errorName: a,
        stack: f.stack,
        url: e != null && c("gkx")("1526990") ? e : null,
      };
    }
    function f(a, b) {
      if (a instanceof c("oz-player/utils/OzError")) {
        var e = a,
          f = e.getExtra();
        return {
          createdTimestamp: Date.now(),
          errorCode: f.code,
          errorDescription: e.getDescription(),
          errorLocation: b,
          errorName: e.getType(),
          errorType: d(
            "VideoPlayerImplementationErrorNormalization"
          ).getVideoPlayerNormalizedErrorTypeFromOzError(e),
          stack: e.stack,
          url: f.url,
        };
      } else return i("OZ_JAVASCRIPT_NATIVE", a, b);
    }
    function j(a, b) {
      a = a.message;
      var c = "The video node set its error property to a MediaError",
        d = a.split(": ");
      d.length > 1 && ((a = d.shift()), (c = d.join(": ")));
      return {
        createdTimestamp: Date.now(),
        errorDescription: c,
        errorLocation: b,
        errorName: a,
        errorType: "GenericDecodeError",
      };
    }
    g.createVideoPlayerErrorFromHTMLVideoElementError = a;
    g.createVideoPlayerErrorFromVideoElementPlayPromiseRejectionReason = b;
    g.createVideoPlayerBufferingErrorFromGenericError = e;
    g.createVideoPlayerErrorFromGenericError = i;
    g.createVideoPlayerErrorFromOzImplementationError = f;
    g.createVideoPlayerErrorFromVideoNodeError = j;
  },
  98
);
__d(
  "VideoPlayerImplementationReactVideoElement.react",
  ["gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.alt,
        d = a.implementationExposedState,
        e = a.seoWebCrawlerVideoTracks,
        f = a.src,
        g = a.videoElementCallbacks,
        i = a.videoElementPreloadDisabled,
        j = a.videoElementRefCallback;
      a = a.videoPixelsFit;
      var k = d.hasPlayEverBeenRequested;
      d = d.isExternalMedia;
      k = d && !k ? null : f;
      f =
        d && c("gkx")("2449")
          ? babelHelpers["extends"]({ crossOrigin: "anonymous" }, g)
          : babelHelpers["extends"]({}, g);
      return h.jsx(
        "video",
        babelHelpers["extends"](
          {
            "aria-label": (d = b) != null ? d : void 0,
            className: "x1lliihq x5yr21d xh8yej3",
            controls: !1,
            muted: !0,
            playsInline: !0,
            preload: i === !0 ? "none" : void 0,
          },
          f,
          {
            ref: j,
            src: k,
            style: a ? { objectFit: a.objectFit } : void 0,
            children: e,
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachine",
  [
    "VideoPlayerEmsg",
    "VideoPlayerImplementationErrors",
    "gkx",
    "recoverableViolation",
    "shallowEqual",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.bufferingDetected,
        c = a.seeking;
      a = a.waitingForDomPlaying;
      return !b && !c && !a;
    }
    function i(a) {
      var b = a.bufferingDetected,
        d = a.prevPlaybackState,
        e = a.seeking;
      a = a.waitingForDomPlaying;
      b = h({ bufferingDetected: b, seeking: e, waitingForDomPlaying: a });
      e = d;
      switch (d) {
        case "stalling":
          e = b ? "playing" : "stalling";
          break;
        case "ended":
        case "paused":
        case "playing":
          break;
        default:
          d;
          c("recoverableViolation")(
            "unexpected playbackState: " + d,
            "comet_video_player"
          );
          break;
      }
      return e;
    }
    function j(a) {
      return (
        (a.loopCount > 0 && a.loopCurrent < a.loopCount) || a.loopCount === -1
      );
    }
    function k(a, b, e) {
      switch (e.type) {
        case "host_call_pause":
        case "host_call_play":
        case "host_call_set_current_time":
        case "host_call_set_volume":
        case "host_call_set_muted":
        case "host_call_set_playback_rate":
        case "host_call_set_video_quality":
        case "host_call_set_latency_level":
          return babelHelpers["extends"]({}, a, {
            hostCallQueue: a.hostCallQueue.concat([e]),
          });
        case "controller_set_latency_level_requested":
        case "implementation_set_latency_level_requested":
          return babelHelpers["extends"]({}, a, {
            latencyLevel: e.payload.latencyLevel,
          });
        case "controller_override_player_format":
          return babelHelpers["extends"]({}, a, {
            overriddenPlayerFormat: a.playerFormat,
            playerFormat: e.payload.playerFormat,
          });
        case "controller_set_player_format":
          return babelHelpers["extends"]({}, a, {
            playerFormat: e.payload.playerFormat,
          });
        case "dom_event_ended":
          return babelHelpers["extends"]({}, a, {
            playbackState: "ended",
            waitingForDomPlaying: !1,
          });
        case "dom_event_pause":
          if (a.playbackState === "ended") return a;
          if (b.videoElementEnded === !0)
            return babelHelpers["extends"]({}, a, {
              playbackState: "ended",
              waitingForDomPlaying: !1,
            });
          return a.playbackState === "paused"
            ? a
            : babelHelpers["extends"]({}, a, {
                playbackState: "paused",
                waitingForDomPlaying: !1,
              });
        case "dom_event_play":
          var f = a.playbackState,
            g = f;
          switch (f) {
            case "playing":
            case "stalling":
            case "ended":
            case "paused":
              g = "stalling";
              break;
            default:
              f;
              c("recoverableViolation")(
                "unexpected playbackState: " + f,
                "comet_video_player"
              );
              break;
          }
          f = !0;
          return babelHelpers["extends"]({}, a, {
            playbackState: g,
            waitingForDomPlaying: f,
          });
        case "dom_event_playing":
          g = a.bufferingDetected;
          f = a.seeking;
          var h = !1,
            k = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            playbackState: i({
              bufferingDetected: g,
              prevPlaybackState: k,
              seeking: f,
              waitingForDomPlaying: h,
            }),
            waitingForDomPlaying: h,
          });
        case "dom_event_timeupdate":
          g = d("VideoPlayerEmsg").makeUpdatedActiveEmsgBoxes(
            a.allEmsgBoxes,
            b.videoElementPlayheadPosition,
            a.activeEmsgBoxes
          );
          if (a.waitingForDomTimeUpdateAfterSeeked) {
            k = a.bufferingDetected;
            f = a.seeking;
            h = !1;
            var l = a.playbackState;
            return babelHelpers["extends"]({}, a, {
              activeEmsgBoxes: g,
              playbackState: i({
                bufferingDetected: k,
                prevPlaybackState: l,
                seeking: f,
                waitingForDomPlaying: h,
              }),
              waitingForDomPlaying: h,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers["extends"]({}, a, { activeEmsgBoxes: g });
        case "dom_event_seeking":
          k = a.playbackState;
          l = k;
          switch (k) {
            case "paused":
            case "ended":
              break;
            case "stalling":
            case "playing":
              l = "stalling";
              break;
            default:
              k,
                c("recoverableViolation")(
                  "unexpected playbackState: " + k,
                  "comet_video_player"
                );
          }
          return babelHelpers["extends"]({}, a, {
            playbackState: l,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        case "dom_event_seeked":
          f = a.bufferingDetected;
          h = a.waitingForDomPlaying;
          g = !1;
          k = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: null,
            playbackState: i({
              bufferingDetected: f,
              prevPlaybackState: k,
              seeking: g,
              waitingForDomPlaying: h,
            }),
            seeking: g,
            waitingForDomTimeUpdateAfterSeeked: !0,
          });
        case "dom_event_error":
          l = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: "dom_event_error",
            hostCallError: null,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers["extends"]({}, a, {
            error: c("gkx")("2011") ? a.error : l,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "dom_event_play_promise_created":
          return babelHelpers["extends"]({}, a, {
            hostCallPlayIDLast: e.payload.hostCallPlayID,
          });
        case "dom_event_play_promise_resolved":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
        case "dom_event_play_promise_rejected":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, {
                hostCallPlayIDLast: null,
                playbackState:
                  a.playbackState === "stalling" ? "paused" : a.playbackState,
                waitingForDomPlaying: !1,
              });
        case "implementation_host_call_queue_flushed":
          return babelHelpers["extends"]({}, a, { hostCallQueue: [] });
        case "implementation_host_call_failed":
          f = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: e.payload.errorLocation,
            hostCallError: e.payload.hostCallError,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers["extends"]({}, a, {
            error: f,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_video_node_unmounted":
          if (c("gkx")("2118"))
            return babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
          else return a;
        case "implementation_engine_initialized":
          h = (k = e.payload.streamingFormat) != null ? k : a.streamingFormat;
          return babelHelpers["extends"]({}, a, {
            availableQualities: e.payload.availableQualities,
            selectedVideoQuality: e.payload.selectedVideoQuality,
            streamingFormat: h,
            targetVideoQuality: e.payload.targetVideoQuality,
            videoProjection: e.payload.videoProjection,
          });
        case "implementation_engine_representation_blocked":
          return babelHelpers["extends"]({}, a, {
            availableQualities: e.payload.availableQualities,
          });
        case "implementation_engine_destroyed":
          if (c("gkx")("2118"))
            return babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
          else return a;
        case "implementation_fatal_error":
          if (c("gkx")("2118"))
            return babelHelpers["extends"]({}, a, {
              error: e.payload.fatalError,
              hostCallPlayIDLast: null,
              playbackState: "paused",
              waitingForDomPlaying: !1,
            });
          else
            return babelHelpers["extends"]({}, a, {
              error: e.payload.fatalError,
              playbackState: "paused",
              waitingForDomPlaying: !1,
            });
        case "implementation_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: e.payload.seekSourcePosition,
          });
        case "representation_changed":
          return babelHelpers["extends"]({}, a, {
            targetVideoQuality: e.payload.targetVideoQuality,
          });
        case "controller_pause_requested":
          return a.playbackState === "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                lastPausedTimeMs: Date.now(),
                lastPauseReason: e.payload.reason,
                lastPlayedTimeMs: 0,
                playbackState: "paused",
                waitingForDomPlaying: !1,
                watchTimeMs:
                  a.lastPlayedTimeMs > 0
                    ? a.watchTimeMs + (Date.now() - a.lastPlayedTimeMs)
                    : a.watchTimeMs,
              });
        case "controller_play_requested":
          return a.playbackState !== "paused" && a.playbackState !== "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                hasPlayEverBeenRequested: !0,
                lastPlayedTimeMs:
                  a.lastPlayedTimeMs === 0 ? Date.now() : a.lastPlayedTimeMs,
                lastPlayReason: e.payload.reason,
                loopCurrent: j(a)
                  ? e.payload.reason === "loop_initiated"
                    ? a.loopCurrent + 1
                    : a.loopCurrent
                  : 0,
                playbackState: "stalling",
                waitingForDomPlaying: !0,
              });
        case "controller_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition:
              (g = b.videoElementPlayheadPosition) != null
                ? g
                : a.implementationSeekSourcePosition,
            seeking: !0,
            seekTargetPosition: e.payload.seekTargetPosition,
          });
        case "controller_quality_requested":
          return babelHelpers["extends"]({}, a, {
            selectedVideoQuality: e.payload.selectedVideoQuality,
          });
        case "controller_set_caption_display_style_requested":
          return babelHelpers["extends"]({}, a, {
            captionDisplayStyle: e.payload.captionDisplayStyle,
          });
        case "controller_set_picture_in_picture_state_requested":
          return babelHelpers["extends"]({}, a, {
            isDesktopPictureInPicture: e.payload.isInPictureInPictureMode,
          });
        case "controller_set_caption_format_requested":
          return babelHelpers["extends"]({}, a, {
            captionFormat: e.payload.captionFormat,
          });
        case "controller_set_playback_rate":
          return babelHelpers["extends"]({}, a, {
            targetPlaybackRate: e.payload.playbackRate,
          });
        case "controller_muted_requested":
          return babelHelpers["extends"]({}, a, {
            lastMuteReason: e.payload.reason,
            muted: e.payload.muted,
          });
        case "controller_volume_requested":
          return babelHelpers["extends"]({}, a, { volume: e.payload.volume });
        case "controller_scrub_begin_requested":
          return a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                scrubbing: !0,
                seekTargetPosition: null,
              });
        case "controller_scrub_end_requested":
          return !a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                implementationSeekSourcePosition:
                  (l = b.videoElementPlayheadPosition) != null
                    ? l
                    : a.implementationSeekSourcePosition,
                scrubbing: !1,
                seeking: e.payload.seekTargetPosition != null,
                seekTargetPosition: e.payload.seekTargetPosition,
              });
        case "buffering_begin_requested":
          f = a.playbackState;
          k = f;
          switch (f) {
            case "paused":
            case "ended":
              break;
            case "playing":
            case "stalling":
              k = "stalling";
              break;
            default:
              f;
              c("recoverableViolation")(
                "unexpected playbackState: " + f,
                "comet_video_player"
              );
              break;
          }
          h = e.payload.bufferingType;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: !0,
            lastBufferingType: h,
            playbackState: k,
          });
        case "buffering_end_requested":
          g = a.seeking;
          l = a.waitingForDomPlaying;
          f = !1;
          h = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: f,
            playbackState: i({
              bufferingDetected: f,
              prevPlaybackState: h,
              seeking: g,
              waitingForDomPlaying: l,
            }),
          });
        case "controller_set_captions_visible_requested":
          k = e.payload.captionsVisible;
          return a.captionsVisible === k
            ? a
            : babelHelpers["extends"]({}, a, {
                activeCaptions: k ? a.activeCaptions : null,
                captionsLocale: k ? a.captionsLocale : null,
                captionsVisible: k,
              });
        case "controller_set_active_captions_requested":
          f = e.payload.activeCaptions;
          g = (h = f == null ? void 0 : f.rows) != null ? h : [];
          l = e.payload.captionsLocale;
          k = a.activeCaptions;
          var m = (h = k == null ? void 0 : k.rows) != null ? h : [];
          return m.length === g.length &&
            g.every(function (a, b) {
              return m[b] === a;
            })
            ? a
            : babelHelpers["extends"]({}, a, {
                activeCaptions: f,
                captionsLocale: l,
              });
        case "captions_loaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: a.activeCaptions,
            captionsLoaded: !0,
          });
        case "captions_unloaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: null,
            captionsLoaded: !1,
            captionsLocale: null,
          });
        case "inband_captions_autogenerated_changed":
          k = e.payload.inbandCaptionsAutogenerated;
          return a.inbandCaptionsAutogenerated === k
            ? a
            : babelHelpers["extends"]({}, a, {
                inbandCaptionsAutogenerated: k,
              });
        case "stream_ended":
          return babelHelpers["extends"]({}, a, { streamEnded: !0 });
        case "stream_gone_before_start":
          return babelHelpers["extends"]({}, a, {
            playbackState: "ended",
            streamEnded: !0,
            waitingForDomPlaying: !1,
          });
        case "stream_interrupted":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !0 });
        case "stream_resumed":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !1 });
        case "seekable_ranges_changed":
          h = e.payload.seekableRanges;
          return babelHelpers["extends"]({}, a, { seekableRanges: h });
        case "controller_set_is_live_rewind_active_requested":
          g = e.payload.isLiveRewindActive;
          return babelHelpers["extends"]({}, a, { isLiveRewindActive: g });
        case "loop_count_change_requested":
          f = e.payload.loopCount;
          return f === a.loopCount
            ? a
            : babelHelpers["extends"]({}, a, { loopCount: f, loopCurrent: 0 });
        case "player_dimensions_changed":
          l = e.payload.dimensions;
          k = l.height;
          h = l.width;
          return h === a.dimensions.width && k === a.dimensions.height
            ? a
            : babelHelpers["extends"]({}, a, {
                dimensions: { height: k, width: h },
              });
        case "emsg_boxes_parsed":
          g = d("VideoPlayerEmsg").makeUpdatedAllEmsgBoxes(
            a.allEmsgBoxes,
            e.payload.emsgBoxes
          );
          f = d("VideoPlayerEmsg").makeUpdatedActiveEmsgBoxes(
            g,
            b.videoElementPlayheadPosition,
            a.activeEmsgBoxes
          );
          return babelHelpers["extends"]({}, a, {
            activeEmsgBoxes: f,
            allEmsgBoxes: g,
          });
        case "register_emsg_observer":
          l = new Set(a.emsgObserverTokens);
          l.add(e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: l });
        case "unregister_emsg_observer":
          k = new Set(a.emsgObserverTokens);
          k["delete"](e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: k });
        default:
          return a;
      }
    }
    function l(a, b, d) {
      var e = b.type !== "dom_seeking";
      e = e ? d : a.uncontrolledState;
      d = !c("shallowEqual")(e, a.uncontrolledState);
      b = k(a.controlledState, e, b);
      var f = !c("shallowEqual")(b, a.controlledState);
      return d || f
        ? babelHelpers["extends"]({}, a, {
            controlledState: f ? b : a.controlledState,
            uncontrolledState: d ? e : a.uncontrolledState,
          })
        : a;
    }
    var m, n;
    function o(a) {
      var b = a.collectUncontrolledState,
        d = a.debugLogId;
      d = a.initialState;
      var e = a.onDispatched,
        f = a.onFatalError,
        g = d,
        h = g,
        i = 0,
        j = !1,
        k = !1,
        m = !0,
        n = !0;
      return {
        dispatch: function (a) {
          if (!n) return;
          var d = null,
            g = null;
          try {
            ++i;
            if (i >= 10)
              if (!j) {
                j = !0;
                throw c("unrecoverableViolation")(
                  "Video player state machine loop detected",
                  "comet_video_player"
                );
              } else return;
            var o = h.uncontrolledState;
            if (m)
              try {
                o = b();
              } catch (a) {
                (m = !1), (g = a);
              }
            var p = h;
            o = l(p, a, o);
            h = o;
            e(p, o, a);
          } catch (a) {
            (n = !1), (d = a);
          } finally {
            if (!k && (d != null || g != null)) {
              k = !0;
              try {
                f((p = d) != null ? p : g);
              } catch (a) {}
            }
            --i;
          }
        },
        getCurrentState: function () {
          return h;
        },
        getInitialState: function () {
          return g;
        },
      };
    }
    var p, q;
    function a(a) {
      var b = a.collectUncontrolledState,
        c = a.debugLogId,
        d = a.initialState,
        e = a.onFatalError,
        f = a.stateTransitionHandlers;
      function g(a, b, c) {
        try {
          var d = !0,
            e = 0;
          while (d && e < f.length) {
            var g = f[e];
            d = g(a, b, c);
            ++e;
          }
        } finally {
        }
      }
      return o({
        collectUncontrolledState: b,
        debugLogId: c,
        initialState: d,
        onDispatched: g,
        onFatalError: e,
      });
    }
    function b(a, b) {
      function c() {}
      function d(a) {
        return a;
      }
      function e(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ["reactEvent(" + e.type + ")"]);
          a.dispatch(c);
        };
      }
      function f(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ["reactEvent(" + e.type + ")"]);
          a.dispatch(c(e, f));
        };
      }
      return {
        onAbort: c,
        onCanPlay: c,
        onCanPlayThrough: c,
        onDurationChange: e({ type: "dom_event_durationchange" }),
        onEmptied: c,
        onEncrypted: c,
        onEnded: e({ type: "dom_event_ended" }),
        onError: f(function (a, b) {
          return {
            payload: {
              videoElementError: b.error,
              videoElementNetworkState: b.networkState,
              videoElementReadyState: b.readyState,
            },
            type: "dom_event_error",
          };
        }),
        onLoadedData: c,
        onLoadedMetadata: c,
        onLoadStart: c,
        onPause: e({ type: "dom_event_pause" }),
        onPlay: e({ type: "dom_event_play" }),
        onPlaying: f(function (a) {
          return {
            payload: { domEventPerfTimestamp: a.timeStamp },
            type: "dom_event_playing",
          };
        }),
        onProgress: e({ type: "dom_event_progress" }),
        onRateChange: e({ type: "dom_event_ratechange" }),
        onSeeked: e({ type: "dom_event_seeked" }),
        onSeeking: e({ type: "dom_event_seeking" }),
        onStalled: c,
        onSuspend: c,
        onTimeUpdate: e({ type: "dom_event_timeupdate" }),
        onVolumeChange: e({ type: "dom_event_volumechange" }),
        onWaiting: e({ type: "dom_event_waiting" }),
      };
    }
    g.createVideoPlayerImplementationStateMachine = o;
    g.createVideoPlayerImplementationStateMachineWithStateTransitionHandlers =
      a;
    g.createReactVideoElementCallbacksForStateMachine = b;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineHostCallQueue",
  ["cometUniqueID", "emptyFunction", "gkx", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h() {
      return "id-vpdom-" + c("cometUniqueID")();
    }
    function i(a) {
      var b = a.engineExtrasAPI,
        d = a.hostCall,
        e = a.machine;
      a = a.videoElementAPI;
      switch (d.type) {
        case "host_call_play":
          var f = a.play();
          f &&
            (e.dispatch({
              payload: { hostCallPlayID: d.payload.hostCallID },
              type: "dom_event_play_promise_created",
            }),
            c("promiseDone")(
              f.then(
                function () {
                  e.dispatch({
                    payload: { hostCallPlayID: d.payload.hostCallID },
                    type: "dom_event_play_promise_resolved",
                  });
                },
                function (a) {
                  e.dispatch({
                    payload: {
                      hostCallPlayID: d.payload.hostCallID,
                      playPromiseRejectionReason: a,
                    },
                    type: "dom_event_play_promise_rejected",
                  });
                }
              )
            ));
          break;
        case "host_call_pause":
          a.pause();
          break;
        case "host_call_set_playback_rate":
          a.setPlaybackRate(d.payload.playbackRate);
          break;
        case "host_call_set_muted":
          a.setMuted(d.payload.muted);
          break;
        case "host_call_set_volume":
          a.setVolume(d.payload.volume);
          break;
        case "host_call_set_current_time":
          a.setPlayheadPosition(d.payload.currentTime);
          break;
        case "host_call_set_video_quality":
          b.setUserSelectedVideoQuality(d.payload.selectedVideoQuality);
          break;
        case "host_call_set_latency_level":
          b.setLatencyLevel(d.payload.latencyLevel);
          break;
        case "host_call_picture_in_picture":
          a.requestPictureInPicture();
          break;
        case "host_call_exit_picture_in_picture":
          a.exitPictureInPicture();
          break;
        default:
          d.type;
          return !1;
      }
      return !0;
    }
    function j(a) {
      var b = a.engineExtrasAPI,
        c = a.hostCall,
        d = a.machine;
      a = a.videoElementAPI;
      if (!a || !b) d.dispatch(c);
      else {
        var e = !1;
        try {
          e = i({
            engineExtrasAPI: b,
            hostCall: c,
            machine: d,
            videoElementAPI: a,
          });
        } catch (b) {
          d.dispatch({
            payload: {
              errorLocation: "apply_host_call_catch",
              hostCall: c,
              hostCallError: b,
              videoElementError: a.getError(),
              videoElementNetworkState: a.getNetworkState(),
              videoElementReadyState: a.getReadyState(),
            },
            type: "implementation_host_call_failed",
          });
        }
        e &&
          d.dispatch({
            payload: { hostCall: c },
            type: "implementation_host_call_applied",
          });
      }
    }
    function k(a) {
      var b = [];
      function c() {
        b = b.filter(function (a) {
          return a.type !== "host_call_play" && a.type !== "host_call_pause";
        });
      }
      function d(a) {
        b = b.filter(function (b) {
          return b.type !== a;
        });
      }
      a.forEach(function (a) {
        switch (a.type) {
          case "host_call_play":
            c();
            break;
          case "host_call_pause":
            c();
            break;
          case "host_call_set_playback_rate":
            d(a.type);
            break;
          case "host_call_set_muted":
            d(a.type);
            break;
          case "host_call_set_volume":
            d(a.type);
            break;
          case "host_call_set_current_time":
            d(a.type);
            break;
          case "host_call_set_video_quality":
            d(a.type);
            break;
          case "host_call_set_latency_level":
            d(a.type);
            break;
          case "host_call_picture_in_picture":
            d(a.type);
            break;
          case "host_call_exit_picture_in_picture":
            d(a.type);
            break;
          default:
            a.type;
        }
        b = b.concat([a]);
      });
      return b;
    }
    function a(a) {
      var b = a.engineExtrasAPI,
        c = a.machine,
        d = a.reason,
        e = a.state,
        f = a.videoElementAPI;
      a = [
        {
          payload: {
            hostCallID: h(),
            reason: d,
            volume: e.controlledState.volume,
          },
          type: "host_call_set_volume",
        },
        {
          payload: {
            hostCallID: h(),
            muted: e.controlledState.muted,
            reason: d,
          },
          type: "host_call_set_muted",
        },
        {
          payload: {
            hostCallID: h(),
            reason: d,
            selectedVideoQuality: e.controlledState.selectedVideoQuality,
          },
          type: "host_call_set_video_quality",
        },
      ];
      d = k(e.controlledState.hostCallQueue.concat(a));
      d.forEach(function (a) {
        j({ engineExtrasAPI: b, hostCall: a, machine: c, videoElementAPI: f });
      });
      c.dispatch({
        payload: { hostCallsFlushed: d },
        type: "implementation_host_call_queue_flushed",
      });
    }
    g.makeHostCallID = h;
    g.applyOrQueueHostCall = j;
    g.flushHostCallQueue = a;
  },
  98
);
__d(
  "VideoMimeTypes",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return a + '; codecs="' + b + ", " + c + '"';
    }
    e = "mp4a.40.2";
    function b(a) {
      return "avc1.42E0" + a.toString(16).toUpperCase();
    }
    function c(a) {
      return "avc1.4D40" + a.toString(16).toUpperCase();
    }
    function d(a) {
      return "avc1.6400" + a.toString(16).toUpperCase();
    }
    var g = "video/mp4";
    b = a(g, b(30), e);
    var h = a(g, c(30), e);
    c = a(g, c(31), e);
    var i = a(g, d(50), e);
    a = a(g, d(51), e);
    g = {
      h264baseline: b,
      h264main30avc: h,
      h264main31avc: c,
      h264high50avc: i,
      h264high51avc: a,
    };
    f["default"] = g;
  },
  66
);
__d(
  "XPlatReactEnvironment",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("3422");
    }
    function b() {
      return c("gkx")("1902661");
    }
    function d() {
      return !0;
    }
    g.isFRLEnvironment = a;
    g.isInstagramEnvironment = b;
    g.isWeb = d;
  },
  98
);
__d(
  "isSSR",
  ["ExecutionEnvironment", "XPlatReactEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a =
      d("XPlatReactEnvironment").isWeb() &&
      !c("ExecutionEnvironment").canUseDOM;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerConnectionQuality",
  ["isSSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        POOR: "POOR",
        MODERATE: "MODERATE",
        GOOD: "GOOD",
        EXCELLENT: "EXCELLENT",
      },
      i = [
        { bandwidth: 5e5, connectionQuality: h.POOR },
        { bandwidth: 2e6, connectionQuality: h.MODERATE },
        { bandwidth: 1e7, connectionQuality: h.GOOD },
      ],
      j = 100,
      k = null,
      l = null;
    a = function (a) {
      if (c("isSSR")) return "MODERATE";
      if (k !== null && l !== null && k >= Date.now() - j) return l;
      a = a();
      var b = null;
      if (a != null)
        for (var d = 0; d < i.length; d++)
          if (a < i[d].bandwidth) {
            b = i[d].connectionQuality;
            break;
          }
      b === null && (b = h.EXCELLENT);
      k = Date.now();
      l = b;
      return b;
    };
    g.evaluate = a;
  },
  98
);
__d(
  "VideoPlayerLoggerPlayerStates",
  [],
  function (a, b, c, d, e, f) {
    a = "started";
    b = "unpaused";
    c = { STARTED: a, UNPAUSED: b };
    f["default"] = c;
  },
  66
);
__d(
  "VideoPlayerMutedStateChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.currMuted,
        c = a.currVolume,
        d = a.prevMuted;
      a = a.prevVolume;
      b = b || c === 0;
      c = d || a === 0;
      if (c === b) return null;
      return b ? "muted" : "unmuted";
    }
    f.getVideoPlayerMutedStateChange = a;
  },
  66
);
__d(
  "getVideoBrowserTabId",
  ["guid"],
  function (a, b, c, d, e, f, g) {
    var h = c("guid")().slice(-8);
    function a() {
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineLogger",
  [
    "CometProductAttribution",
    "NetworkStatus",
    "PlaybackSpeedExperiments",
    "SiteData",
    "VideoMimeTypes",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrorNormalization",
    "VideoPlayerLoggerPlayerStates",
    "VideoPlayerMutedStateChange",
    "VideoPlayerStateBasedLoggingEvents",
    "emptyFunction",
    "getPlayerFormatForLogData",
    "getVideoBrowserTabId",
    "gkx",
    "mapObject",
    "performanceAbsoluteNow",
    "qex",
    "recoverableViolation",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 0.5,
      j = (b = c("qex")._("1675")) != null ? b : 0,
      k = 1e3,
      l = null,
      m = function (a) {
        var b;
        l = (b = l) != null ? b : document.createElement("video");
        return !("canPlayType" in l) ? "" : l.canPlayType(a);
      };
    e = c("emptyFunction");
    f = c("emptyFunction");
    b = c("emptyFunction");
    e = c("emptyFunction");
    var n =
      (f = d("PlaybackSpeedExperiments").enablePlaybackSpeedLogging()) != null
        ? f
        : !1;
    function o() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        debugSubscribers: [],
        dontLogPauseOnUnpausedSeeking: !1,
        errorRecoveryAttemptState: {
          currentRecoverableError: null,
          eventsLogged: 0,
          repeatCount: 0,
        },
        hasLoggedStallData: !1,
        hasLoggedStartedPlaying: !1,
        hasPausedOnce: !1,
        hasPendingRequestedPlaying: !1,
        initialSuborigin: void 0,
        inPlayStallCount200ms: 0,
        interruptCount: 0,
        interruptDuration: 0,
        interruptEndTimestamp: 0,
        interruptStartTimestamp: 0,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedFullscreenState: !1,
        lastLoggedPlaybackSpeed: null,
        lastLoggedViewabilityPercentage: void 0,
        lastStartTimePosition: null,
        lastTrackedRepresentation: null,
        nextHeartbeatTime: null,
        nextPlayedThreeSecondsPlayheadPosition: null,
        sequenceNumber: 0,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        stallCount: 0,
        stallCount200ms: 0,
        stallCountTotal: 0,
        stallDuration: 0,
        stallDurationTotal: 0,
        stallStartTimestamp: 0,
        startStallCountTotal: 0,
        startStallDurationTotal: 0,
        vplEventSequenceNumber: 0,
      };
    }
    function p(a, b) {
      return b === "muted" ||
        b === "unmuted" ||
        b === "started_playing" ||
        b === "caption_change" ||
        b === "unpaused"
        ? a.controlledState.captionsVisible
          ? "on"
          : "off"
        : void 0;
    }
    function a(a) {
      var b = new Map(),
        e = a.initialLoggingMetaData,
        f = e,
        g = [],
        l = o(),
        q = new Set(
          c("VideoPlayerStateBasedLoggingEvents").StateBasedLoggingEventNames
        );
      function r(a) {
        l.debugSubscribers.push(a);
        return function () {
          c("removeFromArray")(l.debugSubscribers, a);
        };
      }
      function s(a) {
        l.debugSubscribers.forEach(function (b) {
          return b(a);
        });
      }
      function t(a) {
        var b = l.stallStartTimestamp;
        if (b > 0) {
          l.stallCount += 1;
          l.stallCountTotal += 1;
          l.hasPendingRequestedPlaying && (l.startStallCountTotal += 1);
          a = a - b;
          b = a > 200;
          l.stallDurationTotal += a;
          l.stallDuration += a;
          l.stallCount200ms += b ? 1 : 0;
          l.inPlayStallCount200ms += b && !l.hasPendingRequestedPlaying ? 1 : 0;
          l.hasPendingRequestedPlaying && (l.startStallDurationTotal += a);
        }
      }
      function u(a, b) {
        a =
          a.uncontrolledState.videoElementPlayheadPosition == null
            ? null
            : a.uncontrolledState.videoElementPlayheadPosition;
        var c = null;
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            c = l.lastStartTimePosition;
            break;
          case "scrubbed":
            c = a;
            break;
          default:
            break;
        }
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "scrubbed":
            l.lastStartTimePosition = null;
            break;
          case "started_playing":
          case "unpaused":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            l.lastStartTimePosition = a;
            break;
          default:
            break;
        }
        return { video_last_start_time_position: c };
      }
      function v(a, b) {
        var c = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.streamInterrupted;
        b = b.controlledState.streamInterrupted;
        !a && b
          ? (l.interruptStartTimestamp = c)
          : a &&
            !b &&
            l.interruptStartTimestamp > 0 &&
            ((l.interruptEndTimestamp = c),
            (l.interruptCount += 1),
            (l.interruptDuration +=
              l.interruptEndTimestamp - l.interruptStartTimestamp));
      }
      function w(a, b, c) {
        var d = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.playbackState;
        var e = b.controlledState.playbackState;
        a !== "stalling" &&
          e === "stalling" &&
          (s("stall_start"), (l.stallStartTimestamp = d));
        if (a === "stalling" && e !== "stalling") {
          d = 0;
          (c.type === "dom_event_playing" ||
            c.type === "buffering_end_requested") &&
            c.payload.domEventPerfTimestamp != null &&
            (d = Math.max(
              b.uncontrolledState.perfTimestamp -
                c.payload.domEventPerfTimestamp,
              0
            ));
          t(b.uncontrolledState.clockTimestamp - d);
          l.stallStartTimestamp = 0;
          s("stall_end");
        }
      }
      function x(a, b, c) {
        a = b.uncontrolledState;
        b = a.videoElementPlayheadPosition;
        switch (c) {
          case "unpaused":
          case "started_playing":
            l.nextPlayedThreeSecondsPlayheadPosition =
              ((a = b) != null ? a : 0) + 3;
            break;
          case "paused":
          case "finished_playing":
            l.nextPlayedThreeSecondsPlayheadPosition = null;
            break;
          default:
            break;
        }
      }
      function y(a, b, c) {
        if (l.interruptCount > 0 && l.interruptDuration > 0) {
          a = {
            interrupt_count: l.interruptCount,
            interrupt_time: l.interruptDuration,
          };
          l.interruptCount = 0;
          l.interruptDuration = 0;
          l.interruptStartTimestamp = 0;
          l.interruptEndTimestamp = 0;
          return a;
        }
        return { interrupt_count: null, interrupt_time: null };
      }
      function z(a, b, c) {
        var d = {
            stall_count: null,
            stall_count_200_ms: null,
            stall_time: null,
          },
          e = b.uncontrolledState.clockTimestamp,
          f = function () {
            var a = {
              stall_count: l.stallCount,
              stall_count_200_ms: l.stallCount200ms,
              stall_time: l.stallDuration,
            };
            l.stallCount = 0;
            l.stallCount200ms = 0;
            l.stallDuration = 0;
            l.stallStartTimestamp = 0;
            return a;
          };
        a = a.controlledState.playbackState;
        var g = b.controlledState.playbackState;
        a !== "stalling" && g === "stalling" && (l.stallStartTimestamp = e);
        switch (c) {
          case "started_playing":
          case "unpaused":
          case "finished_playing":
          case "paused":
          case "cancelled_requested_playing":
          case "playback_speed_changed":
          case "representation_ended":
            t(b.uncontrolledState.clockTimestamp);
            d = f();
            break;
          case "heart_beat":
            b.controlledState.playbackState !== "stalling" &&
              (t(b.uncontrolledState.clockTimestamp), (d = f()));
            break;
          default:
            break;
        }
        return d;
      }
      function A(a, b, c) {
        a =
          b.controlledState.playbackState === "paused" &&
          a.controlledState.playbackState === "stalling";
        return c > 0 && (b.controlledState.playbackState === "stalling" || a);
      }
      function B(a, b) {
        a = a.current;
        var c = null;
        switch (b) {
          case "finished_playing":
          case "paused":
          case "heart_beat":
            a && (c = a.getAndFlushTracedFrames());
            return c != null ? JSON.stringify(c) : null;
          default:
            return null;
        }
      }
      function C(a) {
        a = a.controlledState.playbackState;
        switch (a) {
          case "playing":
          case "stalling":
            return "playing";
          case "paused":
            return "paused";
          case "ended":
            return "finished";
          default:
            a;
            return "unknown";
        }
      }
      function D(a) {
        switch (a) {
          case "normal":
            return "normal";
          case "low":
            return "low";
          case "ultra-low":
            return "ultra_low";
          default:
            return null;
        }
      }
      function E() {
        return {
          state: l.hasLoggedStartedPlaying
            ? c("VideoPlayerLoggerPlayerStates").UNPAUSED
            : c("VideoPlayerLoggerPlayerStates").STARTED,
        };
      }
      function F(a) {
        if (
          c("gkx")("2714") &&
          (a == null ? void 0 : a.v2) &&
          (a == null ? void 0 : a.v2.length) > 0
        ) {
          var b = a == null ? void 0 : a.v2;
          b = b[b.length - 1];
          return [b["class"], b.module]
            .map(d("CometProductAttribution").filterEntryValue)
            .join(":");
        }
        return (a =
          a == null
            ? void 0
            : (b = a.v2) == null
            ? void 0
            : b
                .map(function (a) {
                  return [a["class"], a.module]
                    .map(d("CometProductAttribution").filterEntryValue)
                    .join(":");
                })
                .join(";")) != null
          ? a
          : "";
      }
      function G(f) {
        var h,
          i = f.eventType,
          j = f.logDataOverrides,
          k = f.prevState,
          m = f.state;
        f = u(m, i);
        f = f.video_last_start_time_position;
        var o = z(k, m, i),
          r = o.stall_count,
          s = o.stall_count_200_ms;
        o = o.stall_time;
        var t = y(k, m, i),
          v = t.interrupt_count;
        t = t.interrupt_time;
        var w = B(a.videoLiveTraceRef, i),
          E = [],
          G =
            a.initialLoggingMetaData.coreVideoPlayerMetaData
              .autoplayGatingResult;
        G && E.push(G);
        G =
          i === "entered_fs"
            ? !0
            : i === "exited_fs"
            ? !1
            : l.lastLoggedFullscreenState;
        h = c("getPlayerFormatForLogData")(
          {
            isDesktopPictureInPicture:
              (h = m.controlledState.isDesktopPictureInPicture) != null
                ? h
                : !1,
            isFullscreen: G,
          },
          e.coreVideoPlayerMetaData.playerFormat
        );
        var H = m.uncontrolledState.viewabilityPercentage,
          I = Boolean(m.uncontrolledState.isFBIsLiveTemplated),
          J = Boolean(m.uncontrolledState.isFBWasLive),
          K = m.uncontrolledState.videoElementPlaybackRate;
        K = K == null || K === 0 ? l.lastLoggedPlaybackSpeed : K;
        var L = a.initialLoggingMetaData.productAttribution;
        if (h === "watch_scroll" && L && L.v2) {
          var M,
            N = {
              0: babelHelpers["extends"]({}, L["0"]),
              v2: [babelHelpers["extends"]({}, L.v2[0])],
            };
          M =
            (M = e.productAttribution) == null
              ? void 0
              : (M = M.v2) == null
              ? void 0
              : M[0];
          if (M) {
            var O = N.v2[0];
            O["class"] = M["class"];
            O.scope_id = M.scope_id;
            O.ts = M.ts;
          }
          L = N;
        }
        O = null;
        M = null;
        c("gkx")("3013") &&
          ((O =
            L != null
              ? d("CometProductAttribution").minifyProductAttributionV2(L)
              : null),
          (M = L != null ? F(L) : null));
        N = A(k, m, (N = o) != null ? N : 0);
        M = {
          access_token: a.initialLoggingMetaData.accessToken,
          ad_client_token: e.coreVideoPlayerMetaData.adClientToken,
          attribution_id:
            L != null && Object.prototype.hasOwnProperty.call(L, "0")
              ? JSON.stringify({ 0: L["0"] })
              : null,
          attribution_id_v2: O,
          attribution_id_v2_root: M,
          audio_only: e.coreVideoPlayerMetaData.audioOnly,
          audio_representation_id: m.uncontrolledState.audioRepresentationID,
          autoplay_eligible:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.canAutoplay ===
            "allow",
          autoplay_failure_reasons: JSON.stringify(E),
          autoplay_setting:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.autoplaySetting,
          available_qualities: m.controlledState.availableQualities.length,
          broadcaster_origin:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.broadcasterOrigin,
          browser_tab_id: c("getVideoBrowserTabId")(),
          caption_state: p(m, i),
          client_latency_setting: D(m.controlledState.latencyLevel),
          current_playback_speed: n ? K : null,
          current_viewability_percentage: H,
          dash_perf_logging_enabled:
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass !=
              null &&
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass.isEnabled(),
          data_connection_quality: d("VideoPlayerConnectionQuality").evaluate(
            function () {
              return m.uncontrolledState.estimatedBandwidth;
            }
          ),
          dropped_frame_count:
            m.uncontrolledState.videoElementDroppedFrameCount,
          external_log_id: e.coreVideoPlayerMetaData.externalLogID,
          external_log_type: e.coreVideoPlayerMetaData.externalLogType,
          fb_manifest_identifier: m.uncontrolledState.manifestIdentifier,
          frame_events: w,
          interrupt_count: v,
          interrupt_time: t,
          is_abr_enabled: m.isAbrEnabled,
          is_fbms: m.uncontrolledState.isFBMS,
          is_live_video_rewound: m.controlledState.isLiveRewindActive,
          is_pip: m.controlledState.isDesktopPictureInPicture,
          is_predictive_playback: m.uncontrolledState.isPredictiveDash,
          is_sound_on: !m.controlledState.muted,
          is_stalling: N,
          is_templated_manifest: I || J,
          last_viewability_percentage: l.lastLoggedViewabilityPercentage,
          mpd_validation_errors: m.uncontrolledState.mpdValidationErrors,
          network_connected: m.uncontrolledState.networkConnected,
          playback_caption_format: m.controlledState.captionFormat,
          playback_caption_locale: m.controlledState.captionsLocale,
          playback_duration: m.uncontrolledState.videoElementDuration,
          playback_is_broadcast:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isVideoBroadcast,
          playback_is_drm: Boolean(
            a.initialLoggingMetaData.coreVideoPlayerMetaData.graphQLVideoDRMInfo
          ),
          playback_is_live_streaming:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isLiveStreaming,
          player_format: h,
          player_instance_key: e.instanceKey,
          player_origin: e.coreVideoPlayerMetaData.playerOriginOverride,
          player_state: C(m),
          player_suborigin: e.coreVideoPlayerMetaData.subOrigin,
          player_version: m.playerVersion,
          representation_id: m.uncontrolledState.videoRepresentationID,
          source_VPL_LOGGING_HACK:
            e.coreVideoPlayerMetaData.source_VPL_LOGGING_HACK,
          stall_count: r,
          stall_count_200_ms: s,
          stall_time: o,
          streaming_format: m.controlledState.streamingFormat,
          total_frame_count: m.uncontrolledState.videoElementTotalFrameCount,
          tracking_data_encrypted:
            a.initialLoggingMetaData.trackingDataEncrypted,
          tracking_nodes: a.initialLoggingMetaData.trackingNodes,
          v2_heart_beat: c("gkx")("1434599") && i === "heart_beat" ? !0 : null,
          video_bandwidth: m.uncontrolledState.estimatedBandwidth,
          video_buffer_end_position:
            m.uncontrolledState.videoElementLastBufferEndPosition,
          video_id: e.coreVideoPlayerMetaData.videoFBID,
          video_last_start_time_position: f,
          video_play_reason: m.controlledState.lastPlayReason,
          video_player_height: (L = e.dimensions) == null ? void 0 : L.height,
          video_player_width: (O = e.dimensions) == null ? void 0 : O.width,
          video_time_position: m.uncontrolledState.videoElementPlayheadPosition,
          web_client_revision: c("SiteData").client_revision,
        };
        E =
          c("gkx")("1286") && i === "error_recovery_attempt"
            ? null
            : q.has(i)
            ? ++l.sequenceNumber
            : null;
        v = {
          event_seq_num: ++l.vplEventSequenceNumber,
          seq_num: E,
          time_ms: Date.now(),
          vpts: ((w = c("qex")._("33")) != null ? w : !1)
            ? c("performanceAbsoluteNow")()
            : null,
        };
        var P = {};
        b.forEach(function (a, b) {
          P[b] = a;
        });
        t = e.coreVideoPlayerMetaData.additionalLogData;
        N = babelHelpers["extends"]({}, t, P);
        I = babelHelpers["extends"]({}, N, M, j, v);
        h =
          (J = l.initialSuborigin) != null
            ? J
            : e.coreVideoPlayerMetaData.subOrigin;
        s = (r = I.source_VPL_LOGGING_HACK) != null ? r : h;
        f =
          (o = e.coreVideoPlayerMetaData.initialTracePolicy) != null
            ? o
            : e.coreVideoPlayerMetaData.routeTracePolicy;
        L = {
          eventType: i,
          logData: I,
          routeTracePolicy: f,
          source_VPL_LOGGING_HACK: s,
        };
        g.push(L);
        x(k, m, i);
        l.initialSuborigin == null && h != null && (l.initialSuborigin = h);
        l.lastLoggedFullscreenState = G;
        l.lastLoggedPlaybackSpeed = K;
        i === "viewability_changed" && (l.lastLoggedViewabilityPercentage = H);
      }
      var H = {};
      function I(a, b, c) {
        G({
          eventType: "requested_playing",
          logDataOverrides: babelHelpers["extends"]({}, c, E()),
          prevState: a,
          state: b,
        });
        l.hasPendingRequestedPlaying = !0;
        l.canLogPausedOrFinishedPlaying = !0;
        return H;
      }
      function J(a, b, c) {
        if (!l.canLogPausedOrFinishedPlaying) return H;
        else if (l.hasPendingRequestedPlaying) {
          K(a, b, c);
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else {
          G({
            eventType: "paused",
            logDataOverrides: babelHelpers["extends"]({}, c, {
              error_user_info: JSON.stringify({
                is_document_hidden: b.uncontrolledState.isDocumentHidden,
              }),
            }),
            prevState: a,
            state: b,
          });
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        }
      }
      function K(a, b, c) {
        var d = b.uncontrolledState.liveTraceContext;
        c = babelHelpers["extends"]({}, c, E(), {
          live_trace_source_id: d ? d.sourceId : void 0,
          live_trace_stream_id: d ? d.streamId : void 0,
          live_trace_stream_type: d ? d.streamType : void 0,
        });
        G({
          eventType: "cancelled_requested_playing",
          logDataOverrides: c,
          prevState: a,
          state: b,
        });
        return H;
      }
      function L(a, b, d) {
        if (
          d.type === "dom_event_play_promise_rejected" &&
          (c("gkx")("2118")
            ? d.payload.hostCallPlayID ===
                a.controlledState.hostCallPlayIDLast &&
              b.controlledState.hostCallPlayIDLast == null
            : !0) &&
          l.hasPendingRequestedPlaying
        ) {
          d = d.payload.playPromiseRejectionReason;
          if (d != null && d.name === "NotAllowedError") {
            K(a, b, { debug_reason: "not_allowed" });
            return H;
          } else if (d != null && d.name === "AbortError" && c("gkx")("4708")) {
            K(a, b, { debug_reason: "aborted" });
            return H;
          } else return H;
        } else return H;
      }
      function M(a, b, c) {
        if (
          (c.type === "controller_play_requested" ||
            (c.type === "dom_event_play" && !l.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          I(a, b, c);
          return H;
        } else return H;
      }
      function N(a, b, c) {
        if (
          a.controlledState.playbackState === "stalling" &&
          b.controlledState.playbackState === "playing" &&
          l.canLogPlayingEvent
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          G({
            eventType: l.hasLoggedStartedPlaying
              ? "unpaused"
              : "started_playing",
            logDataOverrides: c,
            prevState: a,
            state: b,
          });
          l.hasLoggedStartedPlaying = !0;
          l.canLogPlayingEvent = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else return H;
      }
      function O(a, b, d) {
        var e = b.controlledState.playbackState,
          f = a.controlledState.playbackState;
        if (
          d.type === "controller_scrub_begin_requested" &&
          !a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          J(a, b);
          l.isLoggingScrubbingSequence = !0;
          return H;
        } else if (
          !a.controlledState.seeking &&
          b.controlledState.seeking &&
          !l.isLoggingScrubbingSequence &&
          e !== "paused" &&
          e !== "ended" &&
          !l.hasPendingRequestedPlaying
        ) {
          J(a, b);
          l.shouldLogRequestedPlayingForScrub = !0;
          return H;
        } else if (
          d.type === "controller_scrub_end_requested" &&
          a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          I(a, b, { video_time_position: d.payload.seekTargetPosition });
          return H;
        } else if (a.controlledState.seeking && !b.controlledState.seeking) {
          d = b.uncontrolledState.videoElementPlayheadPosition;
          var g = a.controlledState.implementationSeekSourcePosition;
          (!c("gkx")("1482680") ||
            (g != null && d != null && Math.abs(g - d) > i)) &&
            (l.shouldLogRequestedPlayingForScrub &&
              e !== "paused" &&
              e !== "ended" &&
              I(a, b),
            G({ eventType: "scrubbed", prevState: a, state: b }),
            (l.isLoggingScrubbingSequence = !1),
            (l.shouldLogRequestedPlayingForScrub = !1),
            f !== "paused" && f !== "ended" && (l.canLogPlayingEvent = !0));
          return H;
        } else return H;
      }
      function P(a, b, c) {
        if (
          a.controlledState.playbackState !== b.controlledState.playbackState &&
          b.controlledState.playbackState === "ended" &&
          l.canLogPausedOrFinishedPlaying
        ) {
          G({ eventType: "finished_playing", prevState: a, state: b });
          l.canLogPausedOrFinishedPlaying = !1;
          return H;
        } else return H;
      }
      function Q(a, b, c) {
        if (
          (c.type === "controller_pause_requested" ||
            (c.type === "dom_event_pause" && !l.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          J(a, b, { debug_reason: "paused" });
          return H;
        } else return H;
      }
      function R(a, b, d) {
        var e = b.controlledState.playbackState;
        if (e !== "paused" && e !== "ended") {
          c("gkx")("1469813") &&
          d.type === "implementation_video_node_unmounted"
            ? J(a, a, { debug_reason: "unloaded" })
            : (d.type === "implementation_unmounted" ||
                d.type === "implementation_engine_destroy_requested") &&
              J(a, b, { debug_reason: "unloaded" });
          return H;
        } else return H;
      }
      function S(a, b, c) {
        if (c.type === "implementation_engine_representation_blocked") {
          c = c.payload.blockedRepresentationID;
          G({
            eventType: "video_playback_fallback",
            logDataOverrides: { representation_id: c },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function T(a, b, e) {
        e = b.controlledState.muted;
        var f = b.controlledState.volume,
          g = a.controlledState.muted,
          h = a.controlledState.volume;
        e = d("VideoPlayerMutedStateChange").getVideoPlayerMutedStateChange({
          currMuted: e,
          currVolume: f,
          prevMuted: g,
          prevVolume: h,
        });
        g = { current_volume: Math.round(f * 100) };
        switch (e) {
          case "muted":
            G({
              eventType: "muted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case "unmuted":
            G({
              eventType: "unmuted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case null:
            if (h < f) {
              G({
                eventType: "volume_increase",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else if (h > f) {
              G({
                eventType: "volume_decrease",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else return H;
          default:
            e;
            c("recoverableViolation")(
              'Unexpected mutedStateChange "' + e + '"',
              "comet_video_player"
            );
            return H;
        }
      }
      function U(a, b, c) {
        c = b.uncontrolledState.videoRepresentationID;
        var d = l.lastTrackedRepresentation,
          e = b.controlledState.playbackState,
          f = b.controlledState.seeking;
        if (!f && e !== "paused" && e !== "ended" && d != null && d !== c) {
          G({
            eventType: "representation_ended",
            logDataOverrides: {
              next_representation_id: c,
              representation_id: d,
            },
            prevState: a,
            state: b,
          });
          l.lastTrackedRepresentation = c;
          s("quality_change");
          return H;
        } else if (d == null && d !== c) {
          l.lastTrackedRepresentation = c;
          return H;
        } else return H;
      }
      function V(a, b) {
        var d = a.controlledState.error;
        return {
          currentVideo: {
            audioStreamId: a.uncontrolledState.audioRepresentationID,
            dashAudioFormat: void 0,
            hasHD: void 0,
            hasRateLimit: void 0,
            hasSubtitles: a.controlledState.captionsLoaded,
            isDrm: Boolean(e.coreVideoPlayerMetaData.graphQLVideoDRMInfo),
            isHD: void 0,
            isLiveStream: e.coreVideoPlayerMetaData.isLiveStreaming,
            isRateLimited: void 0,
            liveManifestUrl: void 0,
            projection: void 0,
            resourceUrl: void 0,
            streamId: a.uncontrolledState.videoRepresentationID,
            streamType: a.controlledState.streamingFormat,
            tagHD: void 0,
            tagSD: void 0,
            videoID: e.coreVideoPlayerMetaData.videoFBID,
          },
          player: {
            canPlayType: c("mapObject")(c("VideoMimeTypes"), m),
            dimensions: e.dimensions
              ? { height: e.dimensions.height, width: e.dimensions.width }
              : null,
            droppedFrames: a.uncontrolledState.videoElementDroppedFrameCount,
            initializationTime: void 0,
            initializationTimestamp: void 0,
            inPlayStallCount: void 0,
            inPlayStallTime: void 0,
            interruptCount: void 0,
            interruptTime: void 0,
            lastError: d,
            loggedError: l.lastLoggedError,
            stack: d == null ? void 0 : d.stack,
            stallCount: l.stallCount,
            stallTime: l.stallDuration,
            state: C(a),
            totalFrames: a.uncontrolledState.videoElementTotalFrameCount,
            version: a.playerVersion,
            videoSource: void 0,
            viewabilityPercentage: a.uncontrolledState.viewabilityPercentage,
          },
          playerStateMachine: { action: b, state: a },
        };
      }
      function W(a, b, e) {
        var f = b.controlledState.error;
        if (f != null && f !== l.lastLoggedError && f.errorCode !== "410") {
          var g = f.errorDescription,
            h = f.errorName,
            i = f.errorType,
            j = f.url,
            k = f.errorCode == null || f.errorCode === "" ? h : f.errorCode;
          e = V(b, e);
          G({
            eventType: "error",
            logDataOverrides: babelHelpers["extends"](
              {},
              c("gkx")("1565232") ? E() : null,
              {
                error: h,
                error_code: k,
                error_description: g,
                error_domain: h,
                error_type:
                  (k = i) != null
                    ? k
                    : d(
                        "VideoPlayerImplementationErrorNormalization"
                      ).getErrorTypeFromErrorName(h),
                error_user_info: JSON.stringify(e),
                resource_url: j,
              }
            ),
            prevState: a,
            state: b,
          });
          l.lastLoggedError = f;
        }
        return H;
      }
      function X(a, b) {
        var c = l.errorRecoveryAttemptState.currentRecoverableError;
        if (c != null) {
          var d = c.errorCode,
            e = c.errorDescription,
            f = c.errorName,
            g = c.errorType;
          c = c.url;
          l.errorRecoveryAttemptState.eventsLogged++;
          l.errorRecoveryAttemptState.repeatCount = 0;
          G({
            eventType: "error_recovery_attempt",
            logDataOverrides: {
              error: f,
              error_code: d,
              error_description: e,
              error_domain: f,
              error_type: g,
              resource_url: c,
            },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function Y(a, b, d) {
        if (
          d.type === "error_recovery_attempt" &&
          l.errorRecoveryAttemptState.eventsLogged < k
        ) {
          var e = l.errorRecoveryAttemptState.currentRecoverableError;
          d = d.payload.recoverableError;
          if (
            c("gkx")("1541") &&
            d != null &&
            d.errorName === "OZ_NETWORK" &&
            !c("NetworkStatus").isOnline()
          )
            return H;
          l.errorRecoveryAttemptState.currentRecoverableError = d;
          e == null ||
          e.errorName !== d.errorName ||
          e.errorCode !== d.errorCode
            ? X(a, b)
            : (l.errorRecoveryAttemptState.repeatCount++,
              l.errorRecoveryAttemptState.repeatCount > j && X(a, b));
        }
        return H;
      }
      function Z(a, b, c) {
        if (!n) return H;
        var d = b.uncontrolledState.videoElementPlaybackRate;
        c.type === "dom_event_ratechange" &&
          l.lastLoggedPlaybackSpeed != null &&
          d !== 0 &&
          d !== l.lastLoggedPlaybackSpeed &&
          G({ eventType: "playback_speed_changed", prevState: a, state: b });
        return H;
      }
      function aa(a, b, c) {
        c = b.controlledState.playbackState;
        c === "paused" || c === "ended"
          ? (l.nextHeartbeatTime = null)
          : c !== "stalling" &&
            l.nextHeartbeatTime == null &&
            (l.nextHeartbeatTime = Date.now() + h);
        var d = l.nextHeartbeatTime;
        if (d != null) {
          var e = Date.now();
          e >= d &&
            (c !== "stalling" &&
              G({ eventType: "heart_beat", prevState: a, state: b }),
            (l.nextHeartbeatTime = e + h));
        }
        return H;
      }
      function ba(a, b, c) {
        if (c.type === "implementation_mounted") {
          G({ eventType: "player_loaded", prevState: a, state: b });
          return H;
        } else return H;
      }
      function $(a, b, c) {
        G({
          eventType: c ? "entered_fs" : "exited_fs",
          prevState: a,
          state: b,
        });
      }
      function ca(a, b, c) {
        var d = e.coreVideoPlayerMetaData.playerFormat;
        (f.coreVideoPlayerMetaData.playerFormat !== d ||
          c.type === "controller_override_player_format") &&
          G({ eventType: "player_format_changed", prevState: a, state: b });
        return H;
      }
      function da(a, b, c) {
        if (c.type === "dom_event_timeupdate") {
          c = l.nextPlayedThreeSecondsPlayheadPosition;
          if (c != null) {
            var d = b.uncontrolledState;
            d = d.videoElementPlayheadPosition;
            d != null &&
              c <= d &&
              (G({
                eventType: "played_for_three_seconds",
                prevState: a,
                state: b,
              }),
              (l.nextPlayedThreeSecondsPlayheadPosition = null));
          }
        }
        return H;
      }
      function ea(a, b, c) {
        if (c.type !== "notify_fullscreen_changed") return H;
        c = l.lastLoggedFullscreenState;
        var d = b.uncontrolledState.isFullscreen;
        if (c !== !0 && d === !0) {
          $(a, b, d);
          return H;
        } else if (c === !0 && d === !1) {
          $(a, b, d);
          return H;
        } else return H;
      }
      function fa(a, b, d) {
        d = e.coreVideoPlayerMetaData.adClientToken;
        if ((d == null || d === "") && c("gkx")("1401747")) return H;
        d = b.controlledState.playbackState;
        var f = l.lastLoggedViewabilityPercentage,
          g = b.uncontrolledState.viewabilityPercentage;
        if (d !== "paused" && d !== "ended" && f != null && f !== g) {
          G({ eventType: "viewability_changed", prevState: a, state: b });
          return H;
        } else return H;
      }
      function ga(a, b, c) {
        if (c.type === "controller_set_captions_visible_requested") {
          G({ eventType: "caption_change", prevState: a, state: b });
          return H;
        } else return H;
      }
      function ha(a) {
        f = e;
        if (a.type === "notify_logging_metadata_change") {
          a = a.payload.loggingMetaData;
          e = a;
        }
      }
      return {
        addDebugSubscriber: function (a) {
          return r(a);
        },
        consumeLoggerEvents: function () {
          var a = g.splice(0);
          return a;
        },
        getLoggerState: function () {
          return l;
        },
        handleStateMachine: function (a, b, c) {
          ha(c);
          var d = b.controlledState.playbackState;
          w(a, b, c);
          v(a, b);
          var e = [
            ca,
            ea,
            fa,
            L,
            M,
            O,
            N,
            P,
            Q,
            S,
            T,
            R,
            ba,
            ga,
            U,
            W,
            Y,
            aa,
            Z,
            da,
          ];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === "paused" || d === "ended") && (l.canLogPlayingEvent = !0);
          c.type === "controller_pause_requested" &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPause = !0));
          c.type === "controller_play_requested" &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPlay = !0));
          c.type === "dom_event_pause" && (l.shouldIgnoreDomPause = !1);
          c.type === "dom_event_play" &&
            ((l.shouldIgnoreDomPlay = !1),
            (l.lastLoggedViewabilityPercentage =
              b.uncontrolledState.viewabilityPercentage));
        },
        logVPLEvent: function (a) {
          var b = a.eventType,
            c = a.logDataOverrides;
          a = a.state;
          G({ eventType: b, logDataOverrides: c, prevState: a, state: a });
        },
        setAdditionalLogData: function (a, c) {
          b.set(a, c);
        },
      };
    }
    g.HEARTBEAT_INTERVAL = h;
    g.createVideoPlayerImplementationStateMachineLogger = a;
  },
  98
);
__d(
  "convertToViewabilityPercentage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a >= 0.99) return 100;
      else if (a >= 0.75) return 75;
      else if (a >= 0.5) return 50;
      else if (a >= 0.25) return 25;
      else if (a >= 0) return 0;
      else return -2;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerImplementationStateMachineStateUncontrolledState",
  ["NetworkStatus", "convertToViewabilityPercentage", "gkx", "performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.engineExtrasAPI,
        d = a.fullscreenControllerRef,
        e = a.videoElementAPI,
        f = a.videoLiveTraceRef;
      a = a.videoPlayerPassiveViewabilityInfoRef;
      f = f.current;
      var g = Date.now(),
        h =
          typeof c("performance").now === "function"
            ? c("performance").now()
            : 0;
      if (e == null) {
        var i;
        return {
          audioRepresentationID: void 0,
          clockTimestamp: g,
          currentPlayingVideoQuality: void 0,
          estimatedBandwidth: void 0,
          isDocumentHidden: document.hidden,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
          isPredictiveDash: void 0,
          liveTraceContext: f
            ? (i = f.getLiveTraceContext()) != null
              ? i
              : void 0
            : void 0,
          manifestIdentifier: void 0,
          mpdValidationErrors: void 0,
          networkConnected: void 0,
          perfTimestamp: h,
          videoElementDebugCurrentSrc: void 0,
          videoElementDebugSrc: void 0,
          videoElementDroppedFrameCount: void 0,
          videoElementDuration: void 0,
          videoElementEnded: void 0,
          videoElementError: void 0,
          videoElementLastBufferEndPosition: void 0,
          videoElementMuted: void 0,
          videoElementNetworkState: void 0,
          videoElementPaused: void 0,
          videoElementPlaybackRate: void 0,
          videoElementPlayheadPosition: void 0,
          videoElementReadyState: void 0,
          videoElementTotalFrameCount: void 0,
          videoElementVolume: void 0,
          videoRepresentationID: void 0,
          viewabilityPercentage: void 0,
        };
      }
      i = e.getPlayheadPosition();
      a = a && a.current;
      a = a && a.getCurrent();
      return {
        audioRepresentationID: b ? b.getAudioRepresentationIDAtTime(i) : void 0,
        clockTimestamp: g,
        currentPlayingVideoQuality: b
          ? b.getCurrentPlayingVideoQuality()
          : void 0,
        estimatedBandwidth: b ? b.getEstimatedBandwidth() : void 0,
        isDocumentHidden: document.hidden,
        isFBIsLiveTemplated: b ? b.isFBIsLiveTemplated() : void 0,
        isFBMS: b ? b.isFBMS() : void 0,
        isFBWasLive: b ? b.isFBWasLive() : void 0,
        isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
        isPredictiveDash: b ? b.isPredictiveDash() : void 0,
        liveTraceContext: f
          ? (g = f.getLiveTraceContext()) != null
            ? g
            : void 0
          : void 0,
        manifestIdentifier: b ? b.getManifestIdentifier() : void 0,
        mpdValidationErrors: b ? b.getMpdValidationErrors() : void 0,
        networkConnected: c("NetworkStatus").isOnline(),
        perfTimestamp: h,
        videoElementDebugCurrentSrc: c("gkx")("1526990")
          ? (d = e.getUnderlyingVideoElement()) == null
            ? void 0
            : d.currentSrc
          : void 0,
        videoElementDebugSrc: c("gkx")("1526990")
          ? (f = e.getUnderlyingVideoElement()) == null
            ? void 0
            : f.src
          : void 0,
        videoElementDroppedFrameCount: e.getDroppedFrameCount(),
        videoElementDuration: e.getDuration(),
        videoElementEnded: e.getEnded(),
        videoElementError: e.getError(),
        videoElementLastBufferEndPosition: e.getLastBufferEndPosition(),
        videoElementMuted: e.getMuted(),
        videoElementNetworkState: e.getNetworkState(),
        videoElementPaused: e.getPaused(),
        videoElementPlaybackRate: e.getPlaybackRate(),
        videoElementPlayheadPosition: i,
        videoElementReadyState: e.getReadyState(),
        videoElementTotalFrameCount: e.getTotalFrameCount(),
        videoElementVolume: e.getVolume(),
        videoRepresentationID: b ? b.getVideoRepresentationIDAtTime(i) : void 0,
        viewabilityPercentage: a
          ? c("convertToViewabilityPercentage")(a.visiblePercentage)
          : void 0,
      };
    }
    g.createVideoPlayerImplementationStateMachineStateUncontrolledState = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineState",
  ["VideoPlayerImplementationStateMachineStateUncontrolledState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.alwaysShowCaptions,
        c = a.areCaptionsAutogenerated,
        e = a.captionDisplayStyle,
        f = a.dimensions,
        g = a.isAbrEnabled,
        h = a.playerImplementationName,
        i = a.playerVersion;
      a = a.streamingFormat;
      var j = !0,
        k = 1,
        l = d(
          "VideoPlayerImplementationStateMachineStateUncontrolledState"
        ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
          engineExtrasAPI: null,
          fullscreenControllerRef: { current: null },
          videoElementAPI: null,
          videoLiveTraceRef: { current: null },
          videoPlayerPassiveViewabilityInfoRef: { current: null },
        });
      return {
        controlledState: {
          activeCaptions: null,
          activeEmsgBoxes: [],
          allEmsgBoxes: new Map(),
          availableQualities: [],
          bufferingDetected: !1,
          captionDisplayStyle: e,
          captionFormat: null,
          captionsLoaded: !1,
          captionsLocale: null,
          captionsVisible: b,
          dimensions: f,
          emsgObserverTokens: new Set(),
          error: null,
          hasPlayEverBeenRequested: !1,
          hostCallPlayIDLast: null,
          hostCallQueue: [],
          implementationSeekSourcePosition: null,
          inbandCaptionsAutogenerated: c,
          isDesktopPictureInPicture: !1,
          isLiveRewindActive: !1,
          lastBufferingType: null,
          lastMuteReason: null,
          lastPausedTimeMs: 0,
          lastPauseReason: null,
          lastPlayedTimeMs: 0,
          lastPlayReason: null,
          latencyLevel: "normal",
          loopCount: 0,
          loopCurrent: 0,
          muted: j,
          overriddenPlayerFormat: "unknown",
          playbackState: "paused",
          playerFormat: "unknown",
          scrubbing: !1,
          seekableRanges: null,
          seeking: !1,
          seekTargetPosition: null,
          selectedVideoQuality: "notselected",
          streamEnded: !1,
          streamingFormat: a,
          streamInterrupted: !1,
          targetAudioQuality: "",
          targetPlaybackRate: 1,
          targetVideoQuality: "",
          videoProjection: null,
          volume: k,
          waitingForDomPlaying: !1,
          waitingForDomTimeUpdateAfterSeeked: !1,
          watchTimeMs: 0,
        },
        isAbrEnabled: g,
        playerImplementationName: h,
        playerVersion: i,
        uncontrolledState: l,
      };
    }
    g.createVideoPlayerImplementationStateMachineInitialState = a;
  },
  98
);
__d(
  "VideoPlayerImplementationEngineAPI",
  [
    "CometEventListener",
    "CometVideoPictureInPictureManagerContext",
    "CurrentUser",
    "ErrorMetadata",
    "FBLogger",
    "MediaPlaybackCompoundEventStateMachineLogger",
    "NetworkStatus",
    "PlaybackSpeedExperiments",
    "RunComet",
    "SubscriptionsHandler",
    "VideoLiveTrace",
    "VideoPlayerBanzaiLogFlusher",
    "VideoPlayerCaptionsController",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationReactVideoElement.react",
    "VideoPlayerImplementationStateMachine",
    "VideoPlayerImplementationStateMachineHostCallQueue",
    "VideoPlayerImplementationStateMachineLogger",
    "VideoPlayerImplementationStateMachineState",
    "VideoPlayerImplementationStateMachineStateUncontrolledState",
    "VideoPlayerVideoPixelsFitContext",
    "clearTimeout",
    "cr:4081",
    "cr:506",
    "cr:683059",
    "deepEquals",
    "err",
    "gkx",
    "killswitch",
    "qex",
    "react",
    "recoverableViolation",
    "removeFromArray",
    "setTimeout",
    "unrecoverableViolation",
    "useConcurrentAutoplayManagementAPI",
    "useSEOLoggedOutWebCrawler",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    f = d("react");
    var i = f.useEffect,
      j = f.useRef,
      k = f.useState,
      l = (f = c("qex")._("1653")) != null ? f : 0,
      m = (function () {
        function a(a) {
          var b = a.pauseRequestCallbacks,
            c = a.playRequestCallbacks,
            d = a.scrubBeginRequestCallbacks;
          a = a.scrubEndRequestCallbacks;
          this.$1 = c;
          this.$2 = b;
          this.$3 = d;
          this.$4 = a;
        }
        var b = a.prototype;
        b.playRequest = function (a) {
          var b = this;
          this.$1.push(a);
          return function () {
            c("removeFromArray")(b.$1, a);
          };
        };
        b.pauseRequest = function (a) {
          var b = this;
          this.$2.push(a);
          return function () {
            c("removeFromArray")(b.$2, a);
          };
        };
        b.scrubBeginRequest = function (a) {
          var b = this;
          this.$3.push(a);
          return function () {
            c("removeFromArray")(b.$3, a);
          };
        };
        b.scrubEndRequest = function (a) {
          var b = this;
          this.$4.push(a);
          return function () {
            c("removeFromArray")(b.$4, a);
          };
        };
        return a;
      })();
    function n(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.debugAPI,
        e = a.exitPictureInPictureImpl,
        f = a.fullscreenControllerRef,
        g = a.getCurrentExposedState,
        h = a.getCurrentIsDesktopPictureInPicture,
        i = a.getCurrentIsFullscreen,
        j = a.getCurrentLiveRewindPlayheadPosition,
        k = a.getCurrentPlayheadPosition,
        l = a.internal_getCurrentStateMachineState,
        n = a.loggerAPI,
        o = a.overridePlayerFormatImpl,
        p = a.pauseImpl,
        q = a.playImpl,
        r = a.registerEmsgObserverImpl,
        s = a.requestPictureInPictureImpl,
        t = a.scrubBeginImpl,
        u = a.scrubEndImpl,
        v = a.seekImpl,
        w = a.selectVideoQualityImpl,
        x = a.setCaptionsDisplayStyleImpl,
        y = a.setCaptionsUrlImpl,
        z = a.setCaptionsVisibleImpl,
        A = a.setIsLiveRewindActiveImpl,
        B = a.setLatencyLevelImpl,
        C = a.setMutedImpl,
        D = a.setPictureInPictureStateImpl,
        E = a.setPlaybackRateImpl,
        F = a.setVolumeImpl,
        G = a.subscribers,
        H = a.unregisterEmsgObserverImpl,
        I = a.videoElementAPIRef,
        J = new Set(),
        K = !1,
        L = null,
        M = [],
        N = [],
        O = [],
        P = [],
        Q = new m({
          pauseRequestCallbacks: N,
          playRequestCallbacks: M,
          scrubBeginRequestCallbacks: O,
          scrubEndRequestCallbacks: P,
        }),
        R = {
          freeze: function () {
            if (!g().paused)
              throw c("unrecoverableViolation")(
                "Video player must be paused before the controller freeze",
                "comet_video_player"
              );
            var a = {};
            try {
              var b = !1;
              J.size === 0 &&
                ((b = !0),
                (L = {
                  exposedState: g(),
                  isFullscreen: i(),
                  liveRewindPlayheadPosition: j(),
                  playheadPosition: k(),
                  stateMachineState: l(),
                }));
              J.add(a);
              b &&
                ((K = !0),
                G.forEach(function (a) {
                  a();
                }));
            } finally {
              K = !1;
            }
            return a;
          },
          isFrozen: function () {
            return L != null;
          },
          unfreeze: function (a) {
            if (!J.has(a))
              throw c("unrecoverableViolation")(
                "Video player controller unfreeze token not found",
                "comet_video_player"
              );
            J["delete"](a);
            J.size === 0 &&
              ((L = null),
              G.forEach(function (a) {
                a();
              }));
          },
        },
        S = babelHelpers["extends"]({}, b, R, n, {
          debugAPI: d,
          exitPictureInPicture: function () {
            if (R.isFrozen()) return;
            e();
          },
          getCurrentState: function () {
            return L != null ? L.exposedState : g();
          },
          getIsDesktopPictureInPicture: function () {
            return L != null ? L.isFullscreen : h();
          },
          getIsFullscreen: function () {
            return L != null ? L.isFullscreen : i();
          },
          getLiveRewindPlayheadPosition: function () {
            return L != null ? L.liveRewindPlayheadPosition : j();
          },
          getPlayheadPosition: function () {
            return L != null ? L.playheadPosition : k();
          },
          internal_getStateMachineState: function () {
            return L != null ? L.stateMachineState : l();
          },
          internal_getVideoElement: function () {
            var a = I.current;
            if (a != null) {
              a = a.getUnderlyingVideoElement();
              return a;
            }
            return null;
          },
          observeOn: function () {
            return Q;
          },
          overridePlayerFormat: function (a) {
            if (R.isFrozen()) return;
            o(a);
          },
          pause: function (a) {
            if (R.isFrozen()) return;
            N.forEach(function (b) {
              return b(a);
            });
            p(a);
          },
          play: function (a) {
            if (R.isFrozen()) return;
            M.forEach(function (b) {
              return b(a);
            });
            q(a);
          },
          registerEmsgObserver: function () {
            var a = {};
            r(a);
            return a;
          },
          requestPictureInPicture: function () {
            if (R.isFrozen()) return;
            s();
          },
          requestSetIsFullscreen: function (a) {
            if (R.isFrozen()) return;
            var b = f.current;
            if (b) {
              var c = S.internal_getVideoElement();
              b.requestSetIsFullscreen(a, c);
            }
          },
          scrollIntoView: function (a) {
            var b = S.internal_getVideoElement();
            b && b.scrollIntoView(a);
          },
          scrubBegin: function () {
            if (R.isFrozen()) return;
            O.forEach(function (a) {
              return a();
            });
            t();
          },
          scrubEnd: function (a) {
            if (R.isFrozen()) return;
            P.forEach(function (b) {
              return b(a);
            });
            u(a);
          },
          seek: function (a) {
            if (R.isFrozen()) return;
            v(a);
          },
          selectVideoQuality: function (a) {
            if (R.isFrozen()) return;
            w(a);
          },
          setCaptionsDisplayStyle: function (a) {
            if (R.isFrozen()) return;
            x(a);
          },
          setCaptionsUrl: function (a) {
            if (R.isFrozen()) return;
            y(a);
          },
          setCaptionsVisible: function (a) {
            if (R.isFrozen()) return;
            z(a);
          },
          setIsLiveRewindActive: function (a) {
            if (R.isFrozen()) return;
            A(a);
          },
          setLatencyLevel: function (a) {
            if (R.isFrozen()) return;
            B(a);
          },
          setMuted: function (a, b) {
            if (R.isFrozen()) return;
            C(a, b);
          },
          setPictureInPictureState: function (a) {
            if (R.isFrozen()) return;
            D(a);
          },
          setPlaybackRate: function (a) {
            if (R.isFrozen()) return;
            E(a);
          },
          setVolume: function (a) {
            if (R.isFrozen()) return;
            F(a);
          },
          subscribe: function (a) {
            var b = function () {
                if (R.isFrozen() && !K) return;
                a();
              },
              d = f.current,
              e = d ? d.subscribe(b) : null;
            G.push(b);
            return {
              remove: function () {
                e && e.remove(), c("removeFromArray")(G, b);
              },
            };
          },
          unregisterEmsgObserver: function (a) {
            H(a);
          },
          videoElementAPIRef: I,
        });
      return S;
    }
    function o(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.createExposedState,
        e = a.debugAPI,
        f = a.fullscreenControllerRef,
        g = a.logger,
        h = a.machine,
        i = a.subscribers,
        j = a.videoElementAPIRef;
      a = {
        logVPLEvent_DO_NOT_USE: function (a, b) {
          g.logVPLEvent({
            eventType: a,
            logDataOverrides: b,
            state: h.getCurrentState(),
          });
        },
        setAdditionalLogData: function (a, b) {
          g.setAdditionalLogData(a, b);
        },
      };
      return n({
        concurrentAutoplayManagementAPI: b,
        debugAPI: e,
        exitPictureInPictureImpl: function () {
          h.dispatch({ type: "controller_picture_in_picture_exit_requested" });
        },
        fullscreenControllerRef: f,
        getCurrentExposedState: function () {
          return d(h.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var a;
          return (a =
            h.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? a
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var a = f.current;
          return a ? a.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var a = h.getCurrentState();
          a = a.controlledState;
          var b = a.isLiveRewindActive,
            c = a.seekableRanges;
          a = a.seekTargetPosition;
          if (!b || a == null) return null;
          c = (b = c == null ? void 0 : c.end(0)) != null ? b : 0;
          return a - c;
        },
        getCurrentPlayheadPosition: function () {
          var a,
            b = 0;
          return (a =
            (a = c("gkx")("3464")
              ? (a = j.current) == null
                ? void 0
                : a.getPlayheadPosition()
              : void 0) != null
              ? a
              : h.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? a
            : b;
        },
        internal_getCurrentStateMachineState: function () {
          return h.getCurrentState();
        },
        loggerAPI: a,
        overridePlayerFormatImpl: function (a) {
          h.dispatch({
            payload: { playerFormat: a },
            type: "controller_override_player_format",
          });
        },
        pauseImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (a) {
          h.dispatch({ payload: { token: a }, type: "register_emsg_observer" });
        },
        requestPictureInPictureImpl: function () {
          h.dispatch({ type: "controller_picture_in_picture_requested" });
        },
        scrubBeginImpl: function () {
          h.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_seek_requested",
          });
        },
        selectVideoQualityImpl: function (a) {
          h.dispatch({
            payload: { selectedVideoQuality: a },
            type: "controller_quality_requested",
          });
        },
        setCaptionsDisplayStyleImpl: function (a) {
          h.dispatch({
            payload: { captionDisplayStyle: a },
            type: "controller_set_caption_display_style_requested",
          });
        },
        setCaptionsUrlImpl: function (a) {
          h.dispatch({
            payload: { captionsUrl: a },
            type: "controller_set_captions_url_requested",
          });
        },
        setCaptionsVisibleImpl: function (a) {
          h.dispatch({
            payload: { captionsVisible: a },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (a) {
          h.dispatch({
            payload: { isLiveRewindActive: a },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (a) {
          h.dispatch({
            payload: { latencyLevel: a },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (a, b) {
          h.dispatch({
            payload: { muted: a, reason: b },
            type: "controller_muted_requested",
          });
        },
        setPictureInPictureStateImpl: function (a) {
          h.dispatch({
            payload: { isInPictureInPictureMode: a },
            type: "controller_set_picture_in_picture_state_requested",
          });
        },
        setPlaybackRateImpl: function (a) {
          h.dispatch({
            payload: { playbackRate: a },
            type: "controller_set_playback_rate",
          });
        },
        setVolumeImpl: function (a) {
          h.dispatch({
            payload: { volume: a },
            type: "controller_volume_requested",
          });
        },
        subscribers: i,
        unregisterEmsgObserverImpl: function (a) {
          h.dispatch({
            payload: { token: a },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: j,
      });
    }
    function p(a) {
      a = a.current;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Attempted to access VideoElementAPI while it is not available.",
          "comet_video_player"
        );
      return a;
    }
    function q(a) {
      var e = a.alwaysShowCaptions,
        f = a.areCaptionsAutogenerated,
        g = a.captionDisplayStyle,
        h = a.captionsControllerRef,
        i = a.debugLogId,
        j = a.dimensions,
        k = a.engineExtrasAPI,
        m = a.engineMetadata,
        n = a.fullscreenControllerRef,
        o = a.handleFatalError,
        q = a.handleStateMachine,
        s = a.videoElementAPIRef,
        t = a.videoLiveTraceRef,
        u = a.videoPlayerPassiveViewabilityInfoRef;
      function v(a) {
        d(
          "VideoPlayerImplementationStateMachineHostCallQueue"
        ).applyOrQueueHostCall({
          engineExtrasAPI: k,
          hostCall: a,
          machine: y,
          videoElementAPI: s.current,
        });
      }
      var w = null,
        x = null;
      a = [
        function (a, c, d) {
          b("cr:683059") &&
          d.type === "implementation_host_call_applied" &&
          d.payload.hostCall.type === "host_call_play" &&
          c.controlledState.lastPlayReason === "autoplay_initiated"
            ? b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayStalling")
            : b("cr:683059") &&
              c.controlledState.playbackState !==
                a.controlledState.playbackState &&
              c.controlledState.playbackState === "playing" &&
              c.controlledState.lastPlayReason === "autoplay_initiated" &&
              b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayPlaying");
          return !0;
        },
        function (a, b, c) {
          q(a, b, c);
          return !0;
        },
        function (a, b, e) {
          if (
            c("gkx")("1633455") &&
            ((a.controlledState.streamInterrupted === !1 &&
              b.controlledState.streamInterrupted === !0) ||
              (a.controlledState.streamInterrupted === !0 &&
                b.controlledState.streamInterrupted === !1))
          ) {
            a = b.controlledState;
            b = a.bufferingDetected;
            var f = a.lastBufferingType,
              g = a.streamInterrupted;
            a = a.targetPlaybackRate;
            g
              ? (b &&
                  y.dispatch({
                    payload: { domEventPerfTimestamp: null },
                    type: "buffering_end_requested",
                  }),
                v({
                  payload: {
                    hostCallID: d(
                      "VideoPlayerImplementationStateMachineHostCallQueue"
                    ).makeHostCallID(),
                    playbackRate: 0,
                    reason: e.type,
                  },
                  type: "host_call_set_playback_rate",
                }))
              : (v({
                  payload: {
                    hostCallID: d(
                      "VideoPlayerImplementationStateMachineHostCallQueue"
                    ).makeHostCallID(),
                    playbackRate: a,
                    reason: e.type,
                  },
                  type: "host_call_set_playback_rate",
                }),
                b &&
                  y.dispatch({
                    payload: { bufferingType: f || "in_play" },
                    type: "buffering_begin_requested",
                  }));
          }
          return !0;
        },
        function (a, b, e) {
          if (
            (a.controlledState.bufferingDetected === !1 &&
              b.controlledState.bufferingDetected === !0) ||
            (a.controlledState.bufferingDetected === !0 &&
              b.controlledState.bufferingDetected === !1)
          ) {
            w !== null && (c("clearTimeout")(w), (w = null));
            if (
              b.controlledState.bufferingDetected &&
              (!c("gkx")("1633455") || !b.controlledState.streamInterrupted)
            ) {
              e = function a() {
                w = null;
                if (c("gkx")("1849507") && !c("NetworkStatus").isOnline())
                  w = c("setTimeout")(a, g);
                else {
                  var e = d(
                    "VideoPlayerImplementationErrors"
                  ).createVideoPlayerBufferingErrorFromGenericError(
                    "BUFFERING_TIMEOUT",
                    c("err")(
                      "The video has been in a buffering state for over " +
                        g +
                        " ms."
                    ),
                    "buffering_timeout",
                    f,
                    b.controlledState.isLiveRewindActive
                  );
                  x && (x.log(), (x = null));
                  y.dispatch({
                    payload: { fatalError: e },
                    type: "implementation_fatal_error",
                  });
                  e = k.getPerfLoggerProvider();
                  e == null
                    ? void 0
                    : e
                        .getOperationLogger("buffering_timeout")
                        .setType(f)
                        .setInitiator("engine_api")
                        .setLength(g)
                        .setResult("failed")
                        .log();
                }
              };
              var f =
                (a = b.controlledState.lastBufferingType) != null
                  ? a
                  : "in_play";
              a = (a = c("qex")._("1654")) != null ? a : l;
              var g = f === "in_play" ? a : l;
              g > 0 && (w = c("setTimeout")(e, g));
              a = k.getPerfLoggerProvider();
              x = a
                ? a
                    .getOperationLogger("buffering")
                    .setState("buffering")
                    .setType(f)
                    .start()
                : null;
            } else
              !b.controlledState.bufferingDetected &&
                x != null &&
                (x.log(), (x = null));
          }
          return !0;
        },
        function (a, b, d) {
          if (d.type !== "implementation_engine_destroy_requested") return !0;
          w !== null && c("clearTimeout")(w);
          w = null;
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "implementation_engine_initialized") return !0;
          a = p(s);
          c = c.type;
          d(
            "VideoPlayerImplementationStateMachineHostCallQueue"
          ).flushHostCallQueue({
            engineExtrasAPI: k,
            machine: y,
            reason: c,
            state: b,
            videoElementAPI: a,
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "dom_event_ended") return !0;
          a = b.controlledState;
          ((a.loopCount > 0 && a.loopCurrent < a.loopCount) ||
            a.loopCount === -1) &&
            y.dispatch({
              payload: { reason: "loop_initiated" },
              type: "controller_play_requested",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_pause_requested") return !0;
          a = b.controlledState.playbackState;
          if (a !== "paused") return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_pause",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_play_requested") return !0;
          a = b.controlledState.playbackState;
          if (a !== "stalling") return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_play",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_seek_requested") return !0;
          a = b.controlledState;
          b = a.seeking;
          a = a.seekTargetPosition;
          b &&
            a != null &&
            v({
              payload: {
                currentTime: a,
                hostCallID: d(
                  "VideoPlayerImplementationStateMachineHostCallQueue"
                ).makeHostCallID(),
                reason: c.type,
              },
              type: "host_call_set_current_time",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_muted_requested") return !0;
          a = b.controlledState.muted;
          if (a !== c.payload.muted) return !1;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              muted: a,
              reason: c.type,
            },
            type: "host_call_set_muted",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_scrub_begin_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_scrub_end_requested") return !0;
          a = b.controlledState;
          b = a.seeking;
          var e = a.seekTargetPosition;
          a = a.targetPlaybackRate;
          b && e != null
            ? (v({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":seek",
                },
                type: "host_call_set_playback_rate",
              }),
              v({
                payload: {
                  currentTime: e,
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  reason: c.type + ":seek",
                },
                type: "host_call_set_current_time",
              }))
            : v({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":cancel",
                },
                type: "host_call_set_playback_rate",
              });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "buffering_begin_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_playback_rate") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: c.payload.playbackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "buffering_end_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: b.controlledState.targetPlaybackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_volume_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              volume: b.controlledState.volume,
            },
            type: "host_call_set_volume",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_quality_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              selectedVideoQuality: b.controlledState.selectedVideoQuality,
            },
            type: "host_call_set_video_quality",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(
              c.type === "controller_set_latency_level_requested" ||
              c.type === "implementation_set_latency_level_requested"
            )
          )
            return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              latencyLevel: c.payload.latencyLevel,
              reason: c.type,
            },
            type: "host_call_set_latency_level",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(c.type === "dom_event_timeupdate" || c.type === "captions_loaded")
          )
            return !0;
          c = h.current;
          var e = b.controlledState.captionsVisible,
            f = s.current;
          f = f ? f.getPlayheadPosition() : 0;
          if (
            d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            b.controlledState.isLiveRewindActive
          ) {
            var g = b.controlledState.seekableRanges;
            g = g != null ? ((g = g.end(g.length() - 1)) != null ? g : 0) : 0;
            f >= g &&
              y.dispatch({
                payload: { isLiveRewindActive: !1 },
                type: "controller_set_is_live_rewind_active_requested",
              });
          }
          if (
            !k.getRepresentationCaptionsExpectedFromManifest() &&
            c &&
            e &&
            b.controlledState.captionsLoaded
          ) {
            g = c.handleTimeUpdate(f);
            e = c.getCaptionFormat();
            b = a.controlledState.activeCaptions;
            c = a.controlledState.captionFormat;
            e !== c &&
              y.dispatch({
                payload: { captionFormat: e },
                type: "controller_set_caption_format_requested",
              });
            r(b, g) &&
              y.dispatch({
                payload: { activeCaptions: g, captionsLocale: null },
                type: "controller_set_active_captions_requested",
              });
          }
          a = t.current;
          a != null && a.onUpdateStatus({ position: f });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "cea608_bytes_received") return !0;
          a = h.current;
          if (a) {
            b = c.payload;
            c = b.timescale;
            b = b.videoBytes;
            a.handleCea608BytesReceived({ timescale: c, videoBytes: b });
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_captions_url_requested") return !0;
          a = h.current;
          if (a) {
            b = c.payload.captionsUrl;
            a.updateCaptionsUrl(b);
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_is_live_rewind_active_requested")
            return !0;
          k.setEnableLiveheadCatchup(!c.payload.isLiveRewindActive);
          !!d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            !c.payload.isLiveRewindActive &&
            y.dispatch({
              payload: { playbackRate: 1 },
              type: "controller_set_playback_rate",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_picture_in_picture_requested") return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_picture_in_picture",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_picture_in_picture_exit_requested")
            return !0;
          v({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_exit_picture_in_picture",
          });
          return !1;
        },
      ];
      var y = d(
        "VideoPlayerImplementationStateMachine"
      ).createVideoPlayerImplementationStateMachineWithStateTransitionHandlers({
        collectUncontrolledState: function () {
          var a = s.current;
          return d(
            "VideoPlayerImplementationStateMachineStateUncontrolledState"
          ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
            engineExtrasAPI: k,
            fullscreenControllerRef: n,
            videoElementAPI: a,
            videoLiveTraceRef: t,
            videoPlayerPassiveViewabilityInfoRef: u,
          });
        },
        debugLogId: i,
        initialState: d(
          "VideoPlayerImplementationStateMachineState"
        ).createVideoPlayerImplementationStateMachineInitialState({
          alwaysShowCaptions: e,
          areCaptionsAutogenerated: f,
          captionDisplayStyle: g,
          dimensions: j,
          isAbrEnabled: m.isAbrEnabled,
          playerImplementationName: m.playerImplementationName,
          playerVersion: m.playerVersion,
          streamingFormat: m.streamingFormat,
        }),
        onFatalError: o,
        stateTransitionHandlers: a,
      });
      return y;
    }
    function r(a, b) {
      if (a === null && b === null) return !1;
      if (a === null || b === null) return !0;
      var c = (b = b.rows) != null ? b : [];
      a = (b = a.rows) != null ? b : [];
      return (
        a.length !== c.length ||
        a.some(function (a, b) {
          return a !== c[b];
        })
      );
    }
    function s(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_fullscreen_changed" });
          }));
    }
    function t(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_viewability_changed" });
          }));
    }
    function u(a) {
      var b = a.engineMetadata;
      a = a.state;
      var c = a.controlledState,
        d = c.activeCaptions,
        e = c.activeEmsgBoxes,
        f = c.availableQualities,
        g = c.captionDisplayStyle,
        h = c.captionsLoaded,
        i = c.captionsVisible,
        j = c.error,
        k = c.hasPlayEverBeenRequested,
        l = c.implementationSeekSourcePosition,
        m = c.inbandCaptionsAutogenerated,
        n = c.isDesktopPictureInPicture,
        o = c.isLiveRewindActive,
        p = c.lastMuteReason,
        q = c.lastPauseReason,
        r = c.lastPlayedTimeMs,
        s = c.lastPlayReason,
        t = c.latencyLevel,
        u = c.loopCount,
        v = c.loopCurrent,
        w = c.muted,
        x = c.overriddenPlayerFormat,
        y = c.playbackState,
        z = c.seekableRanges,
        A = c.seeking,
        B = c.seekTargetPosition,
        C = c.selectedVideoQuality,
        D = c.streamInterrupted,
        E = c.targetAudioQuality,
        F = c.targetPlaybackRate,
        G = c.targetVideoQuality,
        H = c.videoProjection,
        I = c.volume;
      c = c.watchTimeMs;
      var J = a.uncontrolledState,
        K = J.currentPlayingVideoQuality,
        L = J.isFullscreen,
        M = J.videoElementDuration,
        N = J.videoElementLastBufferEndPosition;
      J = J.videoRepresentationID;
      var O = y === "ended",
        P = y === "paused" || O,
        Q = y === "playing",
        R = y === "inPlayStalling";
      y = y === "stalling" || R;
      g = {
        activeCaptions: d,
        activeEmsgBoxes: e,
        availableVideoQualities: f,
        bufferEnd: (d = N) != null ? d : 0,
        captionDisplayStyle: g,
        captionsLoaded: h,
        captionsVisible: i,
        currentVideoQuality: (e = K) != null ? e : "",
        duration: (f = M) != null ? f : 0,
        ended: O,
        error: j,
        hasPlayEverBeenRequested: k,
        inbandCaptionsAutogenerated: m,
        inPlayStalling: R,
        isAbrEnabled: b.isAbrEnabled,
        isDesktopPictureInPicture: (N = n) != null ? N : !1,
        isExternalMedia: b.isExternalMedia,
        isFullscreen: (d = L) != null ? d : !1,
        isLiveRewindActive: o,
        lastMuteReason: p,
        lastPauseReason: q,
        lastPlayedTimeMs: r,
        lastPlayReason: s,
        latencyLevel: t,
        loopCount: u,
        loopCurrent: v,
        muted: w,
        overriddenPlayerFormat: x,
        paused: P,
        playerImplementationName: a.playerImplementationName,
        playerVersion: a.playerVersion,
        playing: Q,
        seekableRanges: z,
        seeking: A,
        seekSourcePosition: l,
        seekTargetPosition: B,
        selectedVideoQuality: C,
        stalling: y,
        streamInterrupted: D,
        targetAudioQuality: E,
        targetPlaybackRate: F,
        targetVideoQuality: G,
        videoProjection: H,
        videoRepresentationID: J,
        volume: I,
        watchTimeMs: c,
      };
      return g;
    }
    function a(a) {
      var e = a.createDebugAPI,
        f = a.createVideoPlayerError,
        g = a.debugLog,
        h = a.debugLogId,
        i = a.destroyEngineParts,
        j = a.engineExtrasAPI,
        k = a.engineMetadata,
        l = a.handleFatalError,
        m = a.handleVideoElementMounted,
        n = a.handleVideoElementUnmounted,
        p = a.handleVideoInfoChange,
        r = a.initialProps,
        v = a.setExposedStateInReact,
        w = r.loggingMetaData.instanceKey;
      g = r.loggingMetaData.coreVideoPlayerMetaData;
      a = g.broadcastId;
      var x = g.isLiveStreaming;
      g = g.isLiveTraceEnabled;
      var y = {
          current:
            Boolean(x) && Boolean(g) && a != null
              ? new (c("VideoLiveTrace"))(a, w, c("CurrentUser").getAccountID())
              : null,
        },
        z = d(
          "VideoPlayerImplementationStateMachineLogger"
        ).createVideoPlayerImplementationStateMachineLogger({
          debugLogId: h,
          initialLoggingMetaData: r.loggingMetaData,
          videoLiveTraceRef: y,
        }),
        A = b("cr:4081")
          ? d(
              "MediaPlaybackCompoundEventStateMachineLogger"
            ).createMediaPlaybackCompoundEventStateMachineLogger({
              debugLogId: h,
              initialLoggingMetaData: r.loggingMetaData,
            })
          : null,
        B = b("cr:4081") && A ? new (b("cr:4081"))(A) : null,
        C = new (c("VideoPlayerBanzaiLogFlusher"))(z),
        D = {
          current: (x = r.videoPlayerPassiveViewabilityInfo) != null ? x : null,
        },
        E = { current: (g = r.fullscreenController) != null ? g : null },
        F = { current: null };
      a = d(
        "useConcurrentAutoplayManagementAPI"
      ).createConcurrentAutoplayManagementAPI();
      var G = [],
        H = function () {
          G.forEach(function (a) {
            a();
          }),
            r.disableLogging
              ? (C.discardLogsWithoutFlushing(),
                b("cr:4081") &&
                  (B == null ? void 0 : B.discardLogsWithoutFlushing()))
              : (C.flushLogs(), B == null ? void 0 : B.flushLogs());
        },
        I = { current: r.onExposedStateChanged },
        J = { current: null },
        K = null,
        L = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps: r.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest: !1,
            sideLoadCaptionsExpectedFromProps: r.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (x = r.captionsUrl) != null ? x : null,
          },
        },
        M = { current: null },
        N = { current: null },
        O = new (c("SubscriptionsHandler"))(),
        P = new (c("SubscriptionsHandler"))(),
        Q = "before_mounted";
      function R() {
        return Q === "mounted";
      }
      var S = { current: null },
        T = function (a) {
          a = u({ engineMetadata: k, state: a });
          return a;
        },
        U = { current: null },
        V = { current: null },
        aa = function (a) {
          if (R()) {
            if (a === U.current) return;
            var b = T(a);
            if (V.current != null && c("deepEquals")(V.current, b)) return;
            U.current = a;
            V.current = b;
            v(b);
            a = I.current;
            a &&
              a({
                implementationController: ja,
                implementationExposedState: b,
              });
          }
        };
      g = function (a, b, c) {
        z.handleStateMachine(a, b, c),
          A == null ? void 0 : A.handleStateMachine(a, b, c),
          aa(b),
          H();
      };
      var W = function (a, b) {};
      x = function (a) {
        W(a, "state_machine_fatal_error");
      };
      var X = q({
          alwaysShowCaptions: Boolean(r.alwaysShowCaptions),
          areCaptionsAutogenerated: Boolean(r.areCaptionsAutogenerated),
          captionDisplayStyle: r.captionDisplayStyle,
          captionsControllerRef: F,
          debugLogId: h,
          dimensions: r.dimensions,
          engineExtrasAPI: j,
          engineMetadata: k,
          fullscreenControllerRef: E,
          handleFatalError: x,
          handleStateMachine: g,
          videoElementAPIRef: S,
          videoLiveTraceRef: y,
          videoPlayerPassiveViewabilityInfoRef: D,
        }),
        Y = !1,
        Z = function (a) {
          var b = J.current != null,
            d = S.current != null;
          O.release();
          X.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroy_requested",
          });
          try {
            Y || ((Y = !0), i(["destroyEngine(" + a + ")"]));
          } catch (g) {
            try {
              var e = c("FBLogger")("comet_video_player").catching(g),
                f = r.videoFBID;
              f != null && (e = e.addMetadata("COMET_VIDEO", "VIDEO_ID", f));
              e = e.addMetadata(
                "COMET_VIDEO",
                "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                JSON.stringify({
                  destroy_reason: a,
                  player_instance_key: w,
                  player_version: k.playerVersion,
                  video_element_api_existed: d,
                  video_element_existed: b,
                })
              );
              e.warn("Error thrown by destroyEngineParts: %s", g.message);
            } catch (a) {}
          }
          f = F.current;
          f != null &&
            (X.getCurrentState().controlledState.captionsLoaded &&
              X.dispatch({ type: "captions_unloaded" }),
            (F.current = null),
            f.destroy());
          s(null, E, M, X);
          t(null, D, N, X);
          X.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroyed",
          });
        };
      W = function (a, b) {
        a = f(a, b);
        X.dispatch({
          payload: { fatalError: a },
          type: "implementation_fatal_error",
        });
        Z("implementation_fatal_error");
        l(a);
      };
      function ba(a) {
        return (
          a.sideLoadCaptionsExpectedFromProps &&
          a.sideLoadCaptionsUrlFromProps !== null
        );
      }
      function $(a) {
        return (
          a.inbandCaptionsExpectedFromProps &&
          ((a = a.inbandCaptionsExpectedFromManifest) != null ? a : !1)
        );
      }
      function ca(a) {
        return (a = a.inbandCaptionsAutogeneratedFromManifest) != null ? a : !1;
      }
      var da = function (a) {
          var b = ba(a),
            c = $(a),
            e = ca(a),
            f = F.current;
          e !== ca(L.current) &&
            X.dispatch({
              payload: { inbandCaptionsAutogenerated: e },
              type: "inband_captions_autogenerated_changed",
            });
          f != null
            ? c !== $(L.current) &&
              (f.updateInbandCaptionsExpected(c),
              !c &&
                X.getCurrentState().controlledState.captionsLoaded &&
                X.dispatch({ type: "captions_unloaded" }))
            : (b || c) &&
              f == null &&
              (F.current = d(
                "VideoPlayerCaptionsController"
              ).createCaptionsController({
                captionsUrl: b ? a.sideLoadCaptionsUrlFromProps : null,
                inbandCaptionsExpected: c,
                onCaptionsLoaded: function () {
                  X.getCurrentState().controlledState.captionsLoaded ||
                    X.dispatch({ type: "captions_loaded" });
                },
              }));
          L.current = a;
        },
        ea = function (a) {
          j != null &&
            a &&
            a.width > 0 &&
            a.height > 0 &&
            (j.setDimensions(a),
            X.dispatch({
              payload: { dimensions: { height: a.height, width: a.width } },
              type: "player_dimensions_changed",
            }));
        },
        fa = function (a) {
          a !== X.getCurrentState().controlledState.loopCount &&
            X.dispatch({
              payload: { loopCount: a },
              type: "loop_count_change_requested",
            });
        },
        ga = function (a) {
          "srcObject" in a && (a.srcObject = null),
            c("gkx")("8054") && a.removeAttribute("src"),
            P.release(),
            P.engage();
        },
        ha = function (a, e) {
          if (J.current === a) return;
          a != null &&
            J.current != null &&
            J.current !== a &&
            c("recoverableViolation")(
              "The video element was recreated",
              "comet_video_player"
            );
          K != null && K();
          var f = J.current;
          f && ga(f);
          J.current = a;
          b("cr:506") != null && a != null && (K = b("cr:506")(a, h));
          a != null &&
            P.addSubscriptions(
              c("CometEventListener").listen(
                a,
                "enterpictureinpicture",
                function () {
                  var a = d(
                    "CometVideoPictureInPictureManagerContext"
                  ).isInPictureInPictureExp();
                  a &&
                    X.dispatch({
                      payload: { isInPictureInPictureMode: !0 },
                      type: "controller_set_picture_in_picture_state_requested",
                    });
                }
              ),
              c("CometEventListener").listen(
                a,
                "leavepictureinpicture",
                function () {
                  var a = d(
                    "CometVideoPictureInPictureManagerContext"
                  ).isInPictureInPictureExp();
                  a &&
                    X.dispatch({
                      payload: { isInPictureInPictureMode: !1 },
                      type: "controller_set_picture_in_picture_state_requested",
                    });
                }
              )
            );
          J.current != null
            ? (X.dispatch({ type: "implementation_video_node_mounted" }),
              m([].concat(e, ["handleVideoElement(non-null)"])))
            : (X.dispatch({ type: "implementation_video_node_unmounted" }),
              n([].concat(e, ["handleVideoElement(null)"])));
        };
      x = r.loggingMetaData.instanceKey;
      g = function (a) {
        var b;
        I.current = a.onExposedStateChanged;
        if (!R()) return;
        s((b = a.fullscreenController) != null ? b : null, E, M, X);
        t(
          (b = a.videoPlayerPassiveViewabilityInfo) != null ? b : null,
          D,
          N,
          X
        );
        if (!p(a)) {
          b = {
            inbandCaptionsAutogeneratedFromManifest:
              L.current.inbandCaptionsAutogeneratedFromManifest,
            inbandCaptionsExpectedFromManifest:
              L.current.inbandCaptionsExpectedFromManifest,
            inbandCaptionsExpectedFromProps: a.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest:
              L.current.representationCaptionsExpectedFromManifest,
            sideLoadCaptionsExpectedFromProps: a.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (b = a.captionsUrl) != null ? b : null,
          };
          da(b);
          ea(a.dimensions);
          fa((b = a.loopCount) != null ? b : 0);
        }
        X.dispatch({
          payload: { loggingMetaData: a.loggingMetaData },
          type: "notify_logging_metadata_change",
        });
      };
      x = function () {
        R() ||
          ((Q = "mounted"),
          O.addSubscriptions(
            d("RunComet").onUnload(function () {
              Z("page_unload");
            })
          ),
          X.dispatch({ type: "implementation_mounted" }),
          m(["handleReactMount"]));
      };
      var ia = function () {
          R() &&
            ((Q = "unmounted"),
            X.dispatch({
              payload: { reason: "react_effect_cleanup" },
              type: "implementation_unmounted",
            }),
            Z("implementation_unmounted:react_effect_cleanup"));
        },
        ja = o({
          concurrentAutoplayManagementAPI: a,
          createExposedState: T,
          debugAPI: e({
            getVideoElementAPI: function () {
              return S.current;
            },
            logger: z,
          }),
          fullscreenControllerRef: E,
          logger: z,
          machine: X,
          subscribers: G,
          videoElementAPIRef: S,
        });
      a = d(
        "VideoPlayerImplementationStateMachine"
      ).createReactVideoElementCallbacksForStateMachine(X, ha);
      e = T(X.getInitialState());
      x = {
        destroy: Z,
        handleReactMount: x,
        handleReactPropsChanged: g,
        handleReactUnmount: ia,
        implementationController: ja,
        initialExposedState: e,
        logFlusher: C,
        machine: X,
        notifySubscribers: H,
        videoElementCallbacks: a,
        videoElementRefCallback: function (a) {
          ha(a, ["videoElementRefCallback"]);
        },
      };
      return {
        engine: x,
        getCaptionsInfo: function () {
          return L.current;
        },
        getVideoElement: function () {
          return J.current;
        },
        getVideoLiveTrace: function () {
          return y.current;
        },
        handleCaptionsInfoChange: da,
        handleFatalImplementationError: W,
        logger: z,
        machine: X,
        videoElementAPIRef: S,
      };
    }
    function v(a, b) {
      var d,
        e = c("err")(a.errorName + ": " + a.errorDescription);
      e.name = a.errorName;
      e.errorName = a.errorName;
      e.type = "error";
      a.stack != null && a.stack !== "" && (e.stack = a.stack);
      var f = new (c("ErrorMetadata"))();
      f.addEntries(
        ["COMET_VIDEO", "ERROR_LOCATION", a.errorLocation],
        ["COMET_VIDEO", "ERROR_CODE", (d = a.errorCode) != null ? d : ""],
        ["COMET_VIDEO", "ERROR_URL", (d = a.url) != null ? d : ""]
      );
      b != null && f.addEntry("COMET_VIDEO", "VIDEO_ID", b);
      d = a.originalError;
      d != null &&
        (typeof d === "string"
          ? f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d)
          : d instanceof Error &&
            d.message != null &&
            f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d.message));
      e.metadata = f;
      return e;
    }
    function e(a, b) {
      var d = k(null),
        e = d[0],
        f = d[1];
      d = k(null);
      var g = d[0],
        l = d[1];
      d = a.wrapVideoPixels_EXPERIMENTAL;
      var m = j(a),
        n = j(b),
        o = c("useStable")(function () {
          return n.current({
            debugLogId: String(m.current.loggingMetaData.instanceKey),
            handleFatalError: function (a) {
              l(a);
            },
            initialProps: m.current,
            setExposedStateInReact: f,
          });
        });
      e = (b = e) != null ? b : o.initialExposedState;
      b = (b = e.error) != null ? b : g;
      if (b != null) {
        if (c("killswitch")("COMET_VIDEO_ERROR_DEAGGREGATION"))
          throw c("unrecoverableViolation")(
            b.errorName + ": " + b.errorDescription,
            "comet_video_player",
            {
              error:
                b.originalError instanceof Error ? b.originalError : void 0,
            }
          );
        g = a.VideoPlayerShakaPerformanceLoggerClass;
        g && (c("gkx")("2007883") || c("qex")._("1655")) && g.flushQueuedLogs();
        throw v(b, m.current.videoFBID);
      }
      i(
        function () {
          o.handleReactMount();
          return function () {
            o.handleReactUnmount();
          };
        },
        [o]
      );
      var p = j(null);
      i(function () {
        a !== p.current && o.handleReactPropsChanged(a), (p.current = a);
      });
      g = c("useSEOLoggedOutWebCrawler")();
      b = a.renderVideoPixelsFit ? a.renderVideoPixelsFit(e) : null;
      g = h.jsx(c("VideoPlayerImplementationReactVideoElement.react"), {
        alt: a.alt,
        implementationExposedState: e,
        seoWebCrawlerVideoTracks:
          g && a.seoWebCrawlerVideoTracks != null
            ? a.seoWebCrawlerVideoTracks
            : null,
        src: g ? a.seoWebCrawlerLookasideUrl : null,
        videoElementCallbacks: g ? null : o.videoElementCallbacks,
        videoElementPreloadDisabled: a.preloadForProgressiveDisabled,
        videoElementRefCallback: g ? null : o.videoElementRefCallback,
        videoPixelsFit: b,
      });
      var q = a.renderWithExposedState({
        implementationController: o.implementationController,
        implementationExposedState: e,
      });
      d = h.jsxs(h.Fragment, {
        children: [
          d ? d(g) : g,
          h.jsx(c("VideoPlayerVideoPixelsFitContext").Provider, {
            value: b,
            children: q,
          }),
        ],
      });
      return {
        engine: o,
        exposedState: e,
        reactVideoComponents: q,
        reactVideoFrame: g,
        reactVideoFrameAndComponents: d,
      };
    }
    g.internal_createVideoPlayerImplementationControllerImpl = n;
    g.internal_createVideoPlayerImplementationEngineStateMachineWithEffects = q;
    g.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
      u;
    g.createVideoPlayerImplementationEngine = a;
    g.internal_makeExpandedErrorFromVideoPlayerError = v;
    g.useVideoPlayerImplementationEngine = e;
  },
  98
);
__d(
  "VideoPlaybackQuality",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (typeof a.getVideoPlaybackQuality === "function")
        return a.getVideoPlaybackQuality().droppedVideoFrames;
      a = a.webkitDroppedFrameCount;
      return typeof a === "number" ? a : 0;
    }
    function b(a) {
      if (typeof a.getVideoPlaybackQuality === "function")
        return a.getVideoPlaybackQuality().totalVideoFrames;
      a = a.webkitDecodedFrameCount;
      return typeof a === "number" ? a : 0;
    }
    f.getDroppedFrames = a;
    f.getTotalFrames = b;
  },
  66
);
__d(
  "VideoPlayerImplementationEngineVideoElementAPI",
  ["Promise", "VideoPlaybackQuality", "VideoPlayerOzWWWGlobalConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return isNaN(a) ? 0 : a;
    }
    function i(a) {
      return h(a.duration);
    }
    function j(a) {
      a = a.buffered;
      return a.length > 0 ? a.end(a.length - 1) : 0;
    }
    function k(a) {
      return h(a.currentTime);
    }
    function l(a) {
      return a.buffered.length === 0 ? 0 : a.buffered.start(0);
    }
    function a(a, e) {
      var f = e !== !0,
        g = null,
        h = function (b) {
          f
            ? b == null || b === ""
              ? a.removeAttribute("src")
              : a.setAttribute("src", b)
            : (g = b);
        };
      return {
        exitPictureInPicture: function () {
          window.document.exitPictureInPicture();
        },
        getCanPlayPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.readyState === 4
              ? b()
              : a.addEventListener("canplay", function () {
                  return b();
                });
          });
        },
        getDOMLoadedMetadataPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.addEventListener("loadedmetadata", function () {
              return b();
            });
          });
        },
        getDroppedFrameCount: function () {
          return d("VideoPlaybackQuality").getDroppedFrames(a);
        },
        getDuration: function () {
          return i(a);
        },
        getEnded: function () {
          return a.ended;
        },
        getError: function () {
          return a.error;
        },
        getLastBufferEndPosition: function () {
          return j(a);
        },
        getMuted: function () {
          return a.muted;
        },
        getNetworkState: function () {
          return a.networkState;
        },
        getPaused: function () {
          return a.paused;
        },
        getPlaybackRate: function () {
          return a.playbackRate;
        },
        getPlayheadPosition: function () {
          return k(a);
        },
        getReadyState: function () {
          return a.readyState;
        },
        getTotalFrameCount: function () {
          return d("VideoPlaybackQuality").getTotalFrames(a);
        },
        getUnderlyingVideoElement: function () {
          return a;
        },
        getVolume: function () {
          return a.volume;
        },
        pause: function () {
          a.pause();
        },
        play: function () {
          f || ((f = !0), h(g), (g = null));
          var c = a.play();
          c =
            c && typeof c.then === "function" ? b("Promise").resolve(c) : null;
          return c;
        },
        requestPictureInPicture: function () {
          typeof a.requestPictureInPicture === "function" &&
            a.requestPictureInPicture();
        },
        setDuration: function (b) {
          a.duration = b;
        },
        setMuted: function (b) {
          a.muted = b;
        },
        setPlaybackRate: function (b) {
          a.playbackRate = b;
        },
        setPlayheadPosition: function (b) {
          var d = b;
          if (b === 0) {
            b = c("VideoPlayerOzWWWGlobalConfig").getNumber(
              "clamp_seek_to_first_buffer_range_epsilon",
              0
            );
            if (b > 0) {
              var e = l(a);
              e > 0 && e <= b && (d = e);
            }
          }
          a.currentTime = d;
        },
        setSrc: h,
        setVolume: function (b) {
          a.volume = b;
        },
      };
    }
    g.getDurationFromVideoElement = i;
    g.getLastBufferEndPositionFromVideoElement = j;
    g.getPlayheadPositionFromVideoElement = k;
    g.createVideoPlayerImplementationEngineVideoElementAPI = a;
  },
  98
);
__d(
  "VideoPlayerImplementationLoadSequenceManager",
  ["setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = []);
      }
      var b = a.prototype;
      b.schedule = function (a, b, d) {
        var e = this,
          f = {
            load: d,
            maximumBlockTimeMs: a.getNumber("load_sequence_max_delay_ms", 0),
            sequence: b,
          },
          g = a.getNumber("load_sequence_only_prioritize_first_count", 0);
        g > 0
          ? (d = !this.$2.find(function (a) {
              return a.sequence < g;
            }))
          : (d = !this.$2.find(function (a) {
              return a.sequence < b;
            }));
        d
          ? this.$3(f)
          : (this.$1.push(f),
            c("setTimeout")(function () {
              return e.$4(f);
            }, f.maximumBlockTimeMs));
        return function () {
          return e.$5(f);
        };
      };
      b.$4 = function (a) {
        var b = this.$1.find(function (b) {
          return b === a;
        });
        b &&
          ((this.$1 = this.$1.filter(function (b) {
            return b !== a;
          })),
          this.$3(b));
      };
      b.$3 = function (a) {
        var b = this;
        this.$2.push(a);
        a.load()
          .then(function () {
            return b.$6(a);
          })
          ["catch"](function (c) {
            b.$6(a);
            throw c;
          });
        c("setTimeout")(function () {
          return b.$6(a);
        }, a.maximumBlockTimeMs);
      };
      b.$7 = function () {
        var a = this,
          b = Math.min.apply(
            Math,
            this.$1.map(function (a) {
              return a.sequence;
            })
          ),
          c = this.$1.filter(function (a) {
            return a.sequence === b;
          });
        c.forEach(function (b) {
          return a.$4(b);
        });
      };
      b.$5 = function (a) {
        this.$1 = this.$1.filter(function (b) {
          return b !== a;
        });
      };
      b.$6 = function (a) {
        if (
          !this.$2.find(function (b) {
            return b === a;
          })
        )
          return;
        this.$2 = this.$2.filter(function (b) {
          return b !== a;
        });
        var b = !!this.$2.find(function (b) {
          return b.sequence === a.sequence;
        });
        b && this.$7();
      };
      return a;
    })();
    b = new a();
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "VideoPlayerOzImplementationData",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.canUseOz,
        d = a.dashManifest,
        e = a.dashUrl,
        f = a.experimentationConfig,
        g = a.minQualityPreference;
      a = a.videoFBID;
      if (b !== !0) {
        b = c("err")("The DASH player is not available for this video");
        b.name = "VideoImplementationsDashPlayerUnavailable";
        return b;
      }
      if (a == null) {
        b = c("err")("video has no FBID");
        b.name = "VideoImplementationsNoFBID";
        return b;
      }
      a = d == null || d === "" ? null : d;
      b = e == null || e === "" ? null : e;
      if (a == null && b == null) {
        d = c("err")("video has no manifest and no manifest URL");
        d.name = "VideoImplementationsNoManifestOrURL";
        return d;
      }
      return {
        experimentationConfig: f,
        manifest: a,
        manifestUrl: b,
        minQualityPreference: (e = g) != null ? e : null,
        seoWebCrawlerLookasideUrl: b,
      };
    }
    g.makeOzImplementationData = a;
  },
  98
);
__d(
  "VideoPlayerODS",
  ["ODS", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, c) {
      d("Random").coinflip(c) && d("ODS").bumpEntityKey(2079, a, b, c);
    };
    g.bumpEntityKey = a;
  },
  98
);
__d(
  "handleVideoPlayerLatencyLevelChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      if (a && b && c) {
        var e = a.getAllContexts().latency_level;
        c = [];
        try {
          c = JSON.parse(
            a.getString("seek_on_latency_level_change_allowed", "[]")
          );
        } catch (a) {}
        c = c.some(function (a) {
          return a.length === 2 && a[0] === e && a[1] === d;
        });
        a.setContext("latency_level", d);
        if (!c) return;
        c = b.getDuration();
        c =
          c != null
            ? c + a.getNumber("live_initial_playback_position", 0)
            : null;
        c != null && b.setPlayheadPosition(c);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerOzImplementationEngineExtrasAPI",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "emptyFunction",
    "gkx",
    "handleVideoPlayerLatencyLevelChange",
    "oz-player/networks/OzBandwidthEstimator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h(a) {
      return a.getSelectedVideoQuality();
    }
    function i(a) {
      a = a.getCurrentVideoRepresentation();
      return a == null ? "" : a.getQualityLabel();
    }
    function j(a) {
      a = a.getIsVideoQualityAdaptationEnabled()
        ? "auto"
        : a.getSelectedVideoQuality();
      return a;
    }
    function k(a) {
      return (a =
        (a = a.getMpd()) == null ? void 0 : a.getCustomField("fbProjection")) !=
        null
        ? a
        : null;
    }
    function l(a, b) {
      var c = j(a);
      if (b === "notselected" || b === c) return !1;
      else if (b === "auto") {
        a.enableVideoQualityAdaptation();
        return !0;
      } else if (b !== a.getSelectedVideoQuality()) {
        c = b;
        a.switchToVideoQuality(c);
        return !0;
      } else return !1;
    }
    function a(a) {
      var b = a.getConfig,
        d = a.getOzPlayer,
        e = a.getVideoElementAPI;
      a = {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : a.getApproximateFBLSToPlayerDisplayLatency()) != null
            ? a
            : null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getAudioRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getAvailableVideoQualities: function () {
          var a;
          return (a = (a = d()) == null ? void 0 : a.getVideoQualities()) !=
            null
            ? a
            : [];
        },
        getCurrentAudioRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentAudioRepresentation()) !=
            null
            ? a
            : null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a = d();
          return a ? i(a) : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a = d();
          return a ? h(a) : "";
        },
        getCurrentVideoRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentVideoRepresentation()) !=
            null
            ? a
            : null;
        },
        getEstimatedBandwidth: function () {
          return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
            c("VideoPlayerOzWWWGlobalConfig")
          );
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
          );
        },
        getInbandCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return (
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
            ) ||
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromAccessibility")
            )
          );
        },
        getManifestIdentifier: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField("fbManifestIdentifier");
          return a != null ? String(a) : null;
        },
        getMpdValidationErrors: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField("validationErrors");
          return a != null ? String(a) : null;
        },
        getPerfLoggerProvider: function () {
          var a = d();
          return a ? a.getPerfLoggerProvider() : null;
        },
        getRepresentationCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField("hasVTTRepresentationCaptions")
          );
        },
        getStreamType: function () {
          return "dash";
        },
        getUserSelectedVideoQuality: function () {
          var a = d();
          return a ? j(a) : "";
        },
        getVideoProjectionType: function () {
          var a = d();
          return a != null ? k(a) : null;
        },
        getVideoRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getVideoRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getVideoRepresentations: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getVideoRepresentations()) != null
            ? a
            : null;
        },
        isDrm: function () {
          var a;
          return Boolean((a = d()) == null ? void 0 : a.isDrm());
        },
        isFBIsLiveTemplated: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null ? void 0 : a.getCustomField("isLiveTemplated")
          );
        },
        isFBMS: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBMS"));
        },
        isFBWasLive: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBWasLive"));
        },
        isPredictiveDash: function () {
          var a;
          a =
            (a =
              (a = d()) == null
                ? void 0
                : (a = a.getMpd()) == null
                ? void 0
                : a.getVideoRepresentations()[0]) != null
              ? a
              : null;
          return a !== null && a.canPredict();
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function (a) {
          var b = d();
          b != null && b.setEnableLiveheadCatchup(a);
        },
        setLatencyLevel: function (a) {
          c("handleVideoPlayerLatencyLevelChange")(b(), e(), d(), a);
        },
        setUserSelectedVideoQuality: function (a) {
          var b = d();
          b != null && l(b, a);
        },
      };
      return a;
    }
    g.createVideoPlayerOzImplementationEngineExtrasAPI = a;
  },
  98
);
__d(
  "OzActiveActiveFailoverNetworkRequestStreamHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var c = a.headers;
        c && c.has("x-fb-video-replica") && this.$1(a, b);
        return null;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "OzCustomParsers",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      return new Map([
        [
          "fbProjection",
          function (a) {
            try {
              return a.Period[0].AdaptationSet[0].$.FBProjection || null;
            } catch (a) {
              return null;
            }
          },
        ],
        [
          "hasInbandCaptionsFromAccessibility",
          function (a) {
            a = a.Period[0];
            a = a && a.AdaptationSet[0].Accessibility;
            return a && a[0]
              ? a[0].$.schemeIdUri === "urn:scte:dash:cc:cea-608:2015"
              : !1;
          },
        ],
        [
          "hasInbandCaptionsFromUsingASRCaptions",
          function (a) {
            a = Number.parseInt(a.$.usingASRCaptions, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          "hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding",
          function (a) {
            a = Number.parseInt(a.$.isUsingAsrCaptionsEmployeeDogfooding, 0);
            return !isNaN(a) && a != 0;
          },
        ],
        [
          "hasVTTRepresentationCaptions",
          function (a) {
            return (
              a.Period[0].AdaptationSet.find(function (a) {
                var b;
                return (
                  ((b = a.$.mimeType) == null
                    ? void 0
                    : b.startsWith("application")) && a.$.lang != null
                );
              }) != null
            );
          },
        ],
        [
          "isLiveTemplated",
          function (a) {
            return a.$.FBIsLiveTemplated === "true";
          },
        ],
        [
          "isFBMS",
          function (a) {
            return a.$.FBMS === "true";
          },
        ],
        [
          "isFBWasLive",
          function (a) {
            return a.$.FBWasLive === "true";
          },
        ],
        [
          "loapStreamType",
          function (a) {
            return a.$.loapStreamType ? parseInt(a.$.loapStreamType, 10) : 0;
          },
        ],
        [
          "fbManifestIdentifier",
          function (a) {
            return (a = a.$.FBManifestIdentifier) != null ? a : "";
          },
        ],
        [
          "lastVideoFrameTs",
          function (a) {
            return a.$.lastVideoFrameTs
              ? Number.parseInt(a.$.lastVideoFrameTs, 10)
              : null;
          },
        ],
        [
          "currentServerTimeMs",
          function (a) {
            return a.$.currentServerTimeMs
              ? Number.parseInt(a.$.currentServerTimeMs, 10)
              : null;
          },
        ],
        [
          "validationErrors",
          function (a) {
            return (a = a.$.validationErrors) != null ? a : "";
          },
        ],
      ]);
    }
    f.createOzCustomParser = a;
  },
  66
);
__d(
  "oz-player/manifests/OzSegmentOptions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = !1), (this.$2 = null);
      }
      var b = a.prototype;
      b.setSegmentNumDecisionTime = function (a) {
        this.$2 = a;
      };
      b.getSegmentNumDecisionTime = function () {
        return this.$2;
      };
      b.setIsDVLEnabled = function (a) {
        this.$1 = a;
      };
      b.isDVLEnabled = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/shims/www/OzURIWWWImplConstUri",
  ["ConstUriUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = a.getQueryParams();
      var b = {};
      a.forEach(function (a, c) {
        typeof a === "string" || typeof a === "number"
          ? (b[c] = a)
          : (b[c] = String(a));
      });
      return b;
    }
    a = (function () {
      function a(a) {
        this.$1 = d("ConstUriUtils").getUri(a);
        if (this.$1 == null) throw new Error("Invalid URI passed to OzURI");
        this.$2 = h(this.$1);
      }
      var b = a.prototype;
      b.addQueryData = function (a, b) {
        var c = this.$1;
        if (typeof a === "string") {
          var d;
          c =
            (d = c) == null
              ? void 0
              : d.addQueryParam(a, b === void 0 ? "" : b);
        } else {
          var e = new Map();
          Object.keys(a).forEach(function (b) {
            e.set(b, a[b]);
          });
          c = (d = c) == null ? void 0 : d.addQueryParams(e);
        }
        c != null && ((this.$1 = c), (this.$2 = h(this.$1)));
      };
      b.getQueryData = function () {
        return this.$2;
      };
      b.getDomain = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.getDomain()) != null
          ? a
          : "";
      };
      b.toString = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.toString()) != null
          ? a
          : "";
      };
      b.getPath = function () {
        var a;
        return (a = (a = this.$1) == null ? void 0 : a.getPath()) != null
          ? a
          : "";
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/www/OzURIWWW",
  ["oz-player/shims/www/OzURIWWWImplConstUri"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzURIWWWImplConstUri");
  },
  98
);
__d(
  "oz-player/shims/OzURI",
  ["oz-player/shims/www/OzURIWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzURIWWW");
  },
  98
);
__d(
  "oz-player/utils/ozConcatUint8Arrays",
  ["oz-player/utils/OzError"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = 0;
      for (var d = 0; d < a.length; ++d) b += a[d].byteLength;
      var e, f;
      try {
        (e = new ArrayBuffer(b)), (f = new Uint8Array(e));
      } catch (a) {
        throw new (c("oz-player/utils/OzError"))({
          type: "OZ_ALLOCATION_FAILURE",
          description: a.name + ": " + a.message,
        });
      }
      d = 0;
      for (b = 0; b < a.length; ++b) {
        var g = a[b];
        f.set(g, d);
        d += g.byteLength;
      }
      return { buffer: e, view: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzReadableStreamUtils",
  ["oz-player/utils/ozConcatUint8Arrays"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
      typeof TextDecoder !== "undefined"
        ? function (a) {
            return new TextDecoder("utf-8").decode(new Uint8Array(a));
          }
        : function (a) {
            return String.fromCharCode.apply(null, a);
          };
    function i(a) {
      var b = [],
        d = function c() {
          return a.read().then(function (a) {
            var d = a.value;
            a = a.done;
            if (a) return null;
            if (!d) return null;
            b.push(d);
            return c();
          });
        };
      return d().then(function () {
        var a = c("oz-player/utils/ozConcatUint8Arrays")(b);
        a = a.view;
        return a;
      });
    }
    function a(a) {
      return i(a).then(function (a) {
        return h(a);
      });
    }
    function b(a) {
      var b = new Uint8Array(a.length);
      return b.map(function (b, c) {
        return a.charCodeAt(c);
      });
    }
    g.pumpAllData = i;
    g.pumpString = a;
    g.stringToUint8Array = b;
  },
  98
);
__d(
  "OzCustomRepresentationParsers",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzReadableStreamUtils",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = a.ozConfig,
        e = a.startTimestamp;
      a = {
        timescale: function (a) {
          a = a.SegmentTemplate;
          if (a && a.length > 0) {
            a = a[0].$;
            if (a) return Number.parseInt(a.timescale, 0) || null;
          }
          return null;
        },
      };
      b.getBool("parse_initialization_binary", !1) &&
        (a.initializationBinary = function (a) {
          try {
            a = window.atob(a.FBInitializationBinary[0]._);
            return d(
              "oz-player/utils/OzReadableStreamUtils"
            ).stringToUint8Array(a);
          } catch (a) {
            return null;
          }
        });
      a.playbackResolutionMos = function (a) {
        try {
          return a.$.FBPlaybackResolutionMos;
        } catch (a) {
          return null;
        }
      };
      a.qualityLabel = function (a) {
        try {
          return a.$.FBQualityLabel;
        } catch (a) {
          return null;
        }
      };
      b.getBool("parse_first_segment", !1) &&
        (a.firstSegmentParser = function (a) {
          if (e != null && e > 0) return null;
          try {
            var b =
                a.SegmentBase[0].$.FBFirstSegmentRange.split("-").map(Number),
              d = { startByte: b[0], endByte: b[1] };
            b = a.BaseURL[0]._;
            var f = new (c("oz-player/shims/OzURI"))(b),
              g = new (c("oz-player/manifests/OzSegmentOptions"))();
            return {
              getData: function () {
                return null;
              },
              getURI: function () {
                return f;
              },
              getByteRange: function () {
                return d;
              },
              getTimeRange: function () {
                return { startTime: 0, endTime: 2 };
              },
              getSequenceNumber: function () {
                return null;
              },
              getOptions: function () {
                return g;
              },
            };
          } catch (a) {
            return null;
          }
        });
      return a;
    }
    g.createOzCustomRepresentationParsers = a;
  },
  98
);
__d(
  "oz-player/shims/www/ozvariantWWW",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/ozvariant",
  ["oz-player/shims/www/ozvariantWWW"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/ozvariantWWW");
  },
  98
);
__d(
  "oz-player/utils/OzNumericalHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1e-5;
    function h(a, b, c) {
      c === void 0 && (c = g);
      return Math.abs(b - a) <= c;
    }
    function i(a, b, c) {
      c === void 0 && (c = g);
      return a > b && !h(a, b, c);
    }
    function j(a, b, c) {
      c === void 0 && (c = g);
      return a < b && !h(a, b, c);
    }
    function a(a, b, c) {
      c === void 0 && (c = g);
      return j(a, b, c) || h(a, b, c);
    }
    function b(a, b, c) {
      c === void 0 && (c = g);
      return i(a, b, c) || h(a, b, c);
    }
    f.equalTo = h;
    f.greaterThan = i;
    f.lessThan = j;
    f.lessThanOrEqual = a;
    f.greaterThanOrEqual = b;
  },
  66
);
__d(
  "oz-player/utils/OzNumericalRangeUtil",
  ["oz-player/utils/OzNumericalHelper"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0.01;
    function i(a, b) {
      b = b.rangeEnd;
      return b == null
        ? !1
        : Math.abs(a.rangeStart - b) > h && a.rangeStart > b;
    }
    function j(a, b) {
      a = a.rangeEnd;
      b = b.rangeEnd;
      if (a == null) return !0;
      return b == null ? !1 : Math.abs(a - b) > h && a > b;
    }
    function k(a, b, c, d) {
      a = c.rangeEnd;
      return a == null
        ? !1
        : b === a || (Math.abs(b - a) > ((c = d) != null ? c : h) && b > a);
    }
    function a(a, b, c) {
      var d = b.rangeEnd;
      if (d == null) return !1;
      c = (c = c) != null ? c : h;
      return a - b.rangeStart >= c && d - a >= c;
    }
    function l(a, b) {
      return a > b - h;
    }
    function b(a) {
      if (!a.length) return [];
      var b = [],
        c = a[0];
      b.push(c);
      for (var d = 1; d < a.length; d++) {
        var e = a[d];
        if (!j(e, c)) continue;
        else
          i(e, c)
            ? ((c = { rangeStart: e.rangeStart, rangeEnd: e.rangeEnd }),
              b.push(c))
            : (c.rangeEnd = e.rangeEnd);
      }
      return b;
    }
    function c(a, b, c) {
      return b
        .reduceRight(function (b, d) {
          k(a, d.rangeStart, c) || k(a, c.rangeStart, d)
            ? b.push(d)
            : (c.rangeEnd != null &&
                (d.rangeEnd == null || k(a, d.rangeEnd, c)) &&
                b.push({ rangeStart: c.rangeEnd, rangeEnd: d.rangeEnd }),
              l(c.rangeStart, d.rangeStart) &&
                b.push({ rangeStart: d.rangeStart, rangeEnd: c.rangeStart }));
          return b;
        }, [])
        .filter(function (a) {
          return a.rangeEnd == null || a.rangeStart < a.rangeEnd;
        })
        .reverse();
    }
    function e(a, b, c, d) {
      d === void 0 && (d = h);
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
          g = f.rangeStart;
        if (l(b, g) && !k(a, b, f, d)) return e;
      }
      return -1;
    }
    function f(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d = d.rangeStart;
        if (!l(a, d)) return c;
      }
      return -1;
    }
    function m(a, b, c) {
      return a >= b
        ? 0
        : c.reduceRight(function (c, d) {
            var e = d.rangeStart;
            d = d.rangeEnd;
            if (b < e || (d != null && a > d)) return c;
            else if (d == null || b <= d) return Math.min(b - e, b - a) + c;
            else if (a >= e) return Math.min(d - a, b - a) + c;
            else return d - e + c;
          }, 0);
    }
    function n(a, b) {
      var c;
      c = a.length == 0 ? ((c = b[b.length - 1]) != null ? c : null) : null;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        for (var g = e; g < b.length; g++) {
          var h = b[g];
          if (
            d("oz-player/utils/OzNumericalHelper").equalTo(
              f.rangeStart,
              h.rangeStart
            ) &&
            f.rangeEnd != null &&
            h.rangeEnd != null &&
            d("oz-player/utils/OzNumericalHelper").equalTo(
              f.rangeEnd,
              h.rangeEnd
            )
          )
            break;
          else if (
            h.rangeEnd != null &&
            f.rangeEnd != null &&
            !d("oz-player/utils/OzNumericalHelper").equalTo(
              f.rangeStart,
              h.rangeStart
            )
          ) {
            c = { rangeStart: h.rangeStart, rangeEnd: h.rangeEnd };
            break;
          } else if (
            h.rangeEnd != null &&
            f.rangeEnd != null &&
            d("oz-player/utils/OzNumericalHelper").equalTo(
              f.rangeStart,
              h.rangeStart
            ) &&
            !d("oz-player/utils/OzNumericalHelper").equalTo(
              f.rangeEnd,
              h.rangeEnd
            )
          ) {
            c = { rangeStart: f.rangeEnd, rangeEnd: h.rangeEnd };
            break;
          }
        }
        if (c !== null) break;
      }
      return c;
    }
    function o(a) {
      var b = [];
      for (var c = 0; c < a.length; c++)
        b.push({ rangeStart: a[c].startTime, rangeEnd: a[c].endTime });
      return b;
    }
    g.isAfter = k;
    g.isWithin = a;
    g.isLargerThan = l;
    g.mergeSortedRanges = b;
    g.diffSortedRanges = c;
    g.findCurrentRangeIndex = e;
    g.findNextRangeIndex = f;
    g.findDiffCoveredByRanges = m;
    g.firstAddedInSortedRanges = n;
    g.convertFromTimeRanges = o;
  },
  98
);
__d(
  "oz-player/manifests/SegmentTemplateSegmentsContainer",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e-4;
    a = (function () {
      function a(a, b, d, e, f, g) {
        g === void 0 && (g = !1),
          (this.$7 = new (c("oz-player/shims/OzEventEmitter"))()),
          (this.$10 = null),
          (this.$8 = a),
          (this.$2 = b),
          (this.$3 = d),
          (this.$1 = f),
          (this.$4 = e),
          (this.$5 = this.$11(this.$4)),
          (this.$6 = g),
          (this.$9 = this.$8.getNumber("live_numerical_error_epsilon"));
      }
      var b = a.prototype;
      b.getSegmentByTime = function (a) {
        a = this.$12(a);
        a = a * this.$3;
        var b = null;
        for (var c = this.$4.length - 1; c >= 0; c--) {
          var e = this.$4[c];
          if (
            d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
              e.t + e.d * (e.r + 1),
              a,
              this.$9
            )
          )
            break;
          b = e;
        }
        if (b === null) return null;
        if (d("oz-player/utils/OzNumericalHelper").greaterThan(b.t, a, this.$9))
          return null;
        e = Math.max(0, Math.floor((a - b.t + this.$9) / b.d));
        return this.$13(b, e);
      };
      b.getSegment = function (a) {
        var b = 0;
        a = a;
        while (a >= 0 && b < this.$4.length) {
          var c = this.$4[b];
          c = c.r;
          c = c + 1;
          if (a >= c) {
            a -= c;
            b++;
            continue;
          }
          break;
        }
        c = this.$4[b];
        return !c ? null : this.$13(c, a);
      };
      b.getSegmentAfter = function (a) {
        a = a.getTimeRange().endTime;
        return this.getSegmentByTime(a);
      };
      b.getPredictedSegmentAfter = function (a) {
        return null;
      };
      b.canPredict = function () {
        return !1;
      };
      b.canApproximateId = function () {
        return !1;
      };
      b.isEndingSegment = function (a) {
        if (!this.$4 || !this.$4.length || !this.$6) return !1;
        var b = this.$4[this.$4.length - 1],
          c = b.r;
        b = this.$13(b, c);
        return (
          Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) +
            Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) <
          h
        );
      };
      b.updateWith = function (b) {
        b instanceof a || c("oz-player/shims/ozvariant")(0, 646),
          (this.$6 = b.$6),
          this.$14(b.$4),
          this.$15(b.$4),
          this.$7.emit("segment_updated");
      };
      b.getTimeRanges = function () {
        return this.$10 ? this.$16(this.$5, this.$10) : this.$5;
      };
      b.blockTimeRange = function (a) {
        this.$10 = a;
      };
      b.$16 = function (a, b) {
        return d("oz-player/utils/OzNumericalRangeUtil")
          .diffSortedRanges(
            this.$8,
            a.map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
            { rangeStart: b.startTime, rangeEnd: b.endTime }
          )
          .map(function (a) {
            return {
              startTime: a.rangeStart,
              endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
            };
          });
      };
      b.addUpdateListener = function (a) {
        return this.$7.addListener("segment_updated", a);
      };
      b.$12 = function (a) {
        var b = a,
          c = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(
            this.$8,
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
        if (c === -1) {
          c = d("oz-player/utils/OzNumericalRangeUtil").findNextRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
          c !== -1 && (b = this.getTimeRanges()[c].startTime);
        }
        return b;
      };
      b.$14 = function (a) {
        var b;
        (b = this.$4).splice.apply(b, [0, this.$4.length].concat(a));
        return;
      };
      b.$15 = function (a) {
        a = this.$11(a);
        a = d("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(
          this.$5
            .map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
            .concat(
              a.map(function (a) {
                return { rangeStart: a.startTime, rangeEnd: a.endTime };
              })
            )
        );
        this.$5 = a.map(function (a) {
          return {
            startTime: a.rangeStart,
            endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
          };
        });
      };
      b.$11 = function (a) {
        var b = this;
        a = d("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(
          this.$4.map(function (a) {
            var c = b.$13(a, 0).getTimeRange().startTime;
            a = b.$13(a, a.r).getTimeRange().endTime;
            return { rangeStart: c, rangeEnd: a };
          })
        );
        return a.map(function (a) {
          var b = a.rangeStart;
          a = a.rangeEnd;
          a = a == null ? Infinity : a;
          return { startTime: b, endTime: a };
        });
      };
      b.$13 = function (a, b) {
        var d = this;
        b === void 0 && (b = 0);
        var e = a.t,
          f = a.d,
          g = a.r;
        a = a.id;
        var h = e + f * b,
          i = this.$8.getBool("use_scf_timebased_segments"),
          j = a != null ? a - (g - b) : null,
          k = new (c("oz-player/manifests/OzSegmentOptions"))();
        return {
          getData: function () {
            return null;
          },
          getURI: function () {
            var a =
              d.$1 != null && j != null
                ? d.$1.replace("$Number$", j.toString())
                : d.$2.replace("$Time$", h.toString());
            a = new (c("oz-player/shims/OzURI"))(a);
            i && a.addQueryData("_nc_scf", 1);
            return a;
          },
          getTimeRange: function () {
            return { startTime: h / d.$3, endTime: (h + f) / d.$3 };
          },
          getByteRange: function () {
            return null;
          },
          getSequenceNumber: function () {
            return null;
          },
          getOptions: function () {
            return k;
          },
        };
      };
      b.getSegmentGroups = function () {
        return this.$4;
      };
      b.getEndingSegment = function () {
        if (this.$4.length == 0) return null;
        var a = this.$4[this.$4.length - 1],
          b = a.r;
        return this.$13(a, b);
      };
      b.forceParseIfNotParsed = function () {};
      b.getMaxGopSec = function () {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/utils/OzUrlHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a;
      var b = a.indexOf("://"),
        c = a.indexOf("/", b + 3);
      c > b && (a = a.substring(c));
      return a;
    }
    function g(a) {
      a = a;
      var b = a.lastIndexOf("/"),
        c = a.lastIndexOf("://");
      b > c + 2 && (a = a.substring(0, b + 1));
      return a;
    }
    function h(a) {
      a = a;
      a = g(a);
      return a.endsWith("/") ? g(a.substring(0, a.length - 1)) : a;
    }
    function i(a, b) {
      a = g(a);
      b = b;
      while (b.length)
        if (b.startsWith("./")) b = b.substring(2);
        else if (b.startsWith("../"))
          (b = b.substring(3)),
            (a = h(a)),
            a.endsWith("/") && (a = a.substring(0, a.length - 1));
        else if (b.startsWith("..")) (b = b.substring(2)), (a = h(a));
        else if (b.startsWith(".")) b = b.substring(1);
        else break;
      b && b.length && (a.endsWith("/") || (a += "/"), (a += b));
      return a;
    }
    function j() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      if (!b || !b.length) return "";
      if (b.length === 1) return b[0];
      var d = b.shift();
      while (b.length > 0) d = i(d, b.shift());
      return d;
    }
    function b(a, b) {
      return k(b) ? b : j(a, b);
    }
    function k(a) {
      var b = /^https?:\/\//i;
      return b.test(a);
    }
    f.stripToPathAndQueryOnly = a;
    f.joinRelativeUrlPaths = j;
    f.joinUrlPaths = b;
  },
  66
);
__d(
  "PredictedSegmentTemplateSegmentsContainer",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k) {
        k === void 0 && (k = !1);
        c = a.call(this, b, c, e, f, null, k) || this;
        c.$PredictedSegmentTemplateSegmentsContainer9 = 0;
        c.$PredictedSegmentTemplateSegmentsContainer11 = null;
        c.$PredictedSegmentTemplateSegmentsContainer10 = d;
        c.$PredictedSegmentTemplateSegmentsContainer8 = k;
        c.$PredictedSegmentTemplateSegmentsContainer12 = f;
        c.$PredictedSegmentTemplateSegmentsContainer7 = b;
        c.$PredictedSegmentTemplateSegmentsContainer5 = e;
        c.$PredictedSegmentTemplateSegmentsContainer1 = g;
        c.$PredictedSegmentTemplateSegmentsContainer3 = i;
        c.$PredictedSegmentTemplateSegmentsContainer2 = h;
        c.$PredictedSegmentTemplateSegmentsContainer4 = j;
        c.$PredictedSegmentTemplateSegmentsContainer6 = b.getNumber(
          "live_numerical_error_epsilon"
        );
        for (
          d = 0;
          d < c.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          c.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            c.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            c.$PredictedSegmentTemplateSegmentsContainer9
          );
        return c;
      }
      var e = b.prototype;
      e.$PredictedSegmentTemplateSegmentsContainer13 = function () {
        if (
          this.$PredictedSegmentTemplateSegmentsContainer2 != null &&
          this.$PredictedSegmentTemplateSegmentsContainer4 != null
        )
          return {
            predictedAverageDuration:
              this.$PredictedSegmentTemplateSegmentsContainer4,
            predictedMediaStartNumber:
              this.$PredictedSegmentTemplateSegmentsContainer2,
          };
        else return null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer14 = function (a, b, e) {
        var f = this;
        Number.isNaN(e) && c("oz-player/shims/ozvariant")(0, 54238);
        var g = this.$PredictedSegmentTemplateSegmentsContainer1.replace(
            "$Number$",
            e.toString()
          ),
          h = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getString("cdn_experiment_id", ""),
          i = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber("use_dvl_with_timeout_ms", 0),
          j = new (c("oz-player/manifests/OzSegmentOptions"))();
        return {
          getByteRange: function () {
            return null;
          },
          getData: function () {
            return null;
          },
          getOptions: function () {
            return j;
          },
          getSequenceNumber: function () {
            return e;
          },
          getTimeRange: function () {
            return { endTime: b, startTime: a };
          },
          getURI: function () {
            var a = new (c("oz-player/shims/OzURI"))(g);
            h.length !== 0 && a.addQueryData("_nc_expid", h);
            var b = j.isDVLEnabled();
            b &&
              i > 0 &&
              f.$PredictedSegmentTemplateSegmentsContainer10 != null &&
              (a.addQueryData(
                "_nc_dinfo-manifest-url",
                d("oz-player/utils/OzUrlHelper").stripToPathAndQueryOnly(
                  f.$PredictedSegmentTemplateSegmentsContainer10
                )
              ),
              a.addQueryData("_nc_dinfo-timeout", i));
            return a;
          },
        };
      };
      e.updateWith = function (d) {
        d instanceof b || c("oz-player/shims/ozvariant")(0, 646);
        this.$PredictedSegmentTemplateSegmentsContainer3 =
          d.$PredictedSegmentTemplateSegmentsContainer3;
        this.$PredictedSegmentTemplateSegmentsContainer1 =
          d.$PredictedSegmentTemplateSegmentsContainer1;
        a.prototype.updateWith.call(this, d);
        this.$PredictedSegmentTemplateSegmentsContainer12 =
          d.$PredictedSegmentTemplateSegmentsContainer12;
        this.$PredictedSegmentTemplateSegmentsContainer8 =
          d.$PredictedSegmentTemplateSegmentsContainer8;
        for (
          d = 0;
          d < this.$PredictedSegmentTemplateSegmentsContainer12.length;
          d++
        )
          this.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(
            this.$PredictedSegmentTemplateSegmentsContainer12[d].d,
            this.$PredictedSegmentTemplateSegmentsContainer9
          );
      };
      e.getSegmentByTime = function (a) {
        return this.canApproximateId()
          ? this.$PredictedSegmentTemplateSegmentsContainer15(a)
          : this.$PredictedSegmentTemplateSegmentsContainer16(a);
      };
      e.getPredictedSegmentAfter = function (a) {
        a = a != null ? a.getSequenceNumber() : null;
        return a != null && this.canPredict()
          ? this.$PredictedSegmentTemplateSegmentsContainer14(0, 0, a + 1)
          : null;
      };
      e.blockTimeRange = function (b) {
        (this.$PredictedSegmentTemplateSegmentsContainer11 = b),
          a.prototype.blockTimeRange.call(this, b);
      };
      e.getTimeRanges = function () {
        var b = this.$PredictedSegmentTemplateSegmentsContainer13();
        if (b) {
          b = [
            {
              endTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                  this.$PredictedSegmentTemplateSegmentsContainer12[
                    this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                  ].d) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
              startTime:
                (this.$PredictedSegmentTemplateSegmentsContainer12[0].t -
                  b.predictedAverageDuration -
                  (this.$PredictedSegmentTemplateSegmentsContainer3 -
                    this.$PredictedSegmentTemplateSegmentsContainer12.length -
                    Number(this.$PredictedSegmentTemplateSegmentsContainer2)) *
                    Number(b.predictedAverageDuration)) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            },
          ];
          var c = this.$PredictedSegmentTemplateSegmentsContainer11;
          return c == null
            ? b
            : d("oz-player/utils/OzNumericalRangeUtil")
                .diffSortedRanges(
                  this.$PredictedSegmentTemplateSegmentsContainer7,
                  b.map(function (a) {
                    return { rangeEnd: a.endTime, rangeStart: a.startTime };
                  }),
                  { rangeEnd: c.endTime, rangeStart: c.startTime }
                )
                .map(function (a) {
                  return {
                    endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
                    startTime: a.rangeStart,
                  };
                });
        } else return a.prototype.getTimeRanges.call(this);
      };
      e.canPredict = function () {
        return !0;
      };
      e.canApproximateId = function () {
        var a = this.$PredictedSegmentTemplateSegmentsContainer13();
        return a != null;
      };
      e.$PredictedSegmentTemplateSegmentsContainer16 = function (a) {
        var b = null;
        a = a * this.$PredictedSegmentTemplateSegmentsContainer5;
        var e =
            this.$PredictedSegmentTemplateSegmentsContainer12.length > 0
              ? this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].t +
                this.$PredictedSegmentTemplateSegmentsContainer12[
                  this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
                ].d
              : null,
          f = this.$PredictedSegmentTemplateSegmentsContainer7
            .getLegacyConfig()
            .getNumber("pdash_future_edgelatency_gops", 0);
        if (
          e != null &&
          e <= a &&
          f !== 0 &&
          a < e + this.$PredictedSegmentTemplateSegmentsContainer9 * f
        ) {
          e =
            a -
            (this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
            ].t +
              this.$PredictedSegmentTemplateSegmentsContainer12[
                this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
              ].d);
          e = this.$PredictedSegmentTemplateSegmentsContainer9
            ? 0
            : Math.floor(e / this.$PredictedSegmentTemplateSegmentsContainer9);
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            0,
            0,
            this.$PredictedSegmentTemplateSegmentsContainer3 + 1 + e
          );
        }
        e = 0;
        for (
          var g = 0;
          this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g >= 0;
          g++
        ) {
          var h =
            this.$PredictedSegmentTemplateSegmentsContainer12[
              this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g
            ];
          h.r === 0 || c("oz-player/shims/ozvariant")(0, 18769);
          if (
            d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
              h.t + h.d * (h.r + 1),
              a,
              this.$PredictedSegmentTemplateSegmentsContainer6
            )
          )
            break;
          b = h;
          e = g;
        }
        if (b === null || (f > 0 && a < b.t)) return null;
        else
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            b.t / this.$PredictedSegmentTemplateSegmentsContainer5,
            (b.t + b.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
            this.$PredictedSegmentTemplateSegmentsContainer3 - e
          );
      };
      e.$PredictedSegmentTemplateSegmentsContainer15 = function (a) {
        var b = a * this.$PredictedSegmentTemplateSegmentsContainer5,
          c = this.getTimeRanges();
        if (
          d("oz-player/utils/OzNumericalHelper").greaterThan(c[0].startTime, a)
        )
          return null;
        else if (
          d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
            this.$PredictedSegmentTemplateSegmentsContainer12[0].t,
            b
          )
        )
          return this.$PredictedSegmentTemplateSegmentsContainer16(a);
        else {
          c = Math.ceil(
            (this.$PredictedSegmentTemplateSegmentsContainer12[0].t - b) /
              Number(this.$PredictedSegmentTemplateSegmentsContainer4)
          );
          b = Math.max(
            Number(this.$PredictedSegmentTemplateSegmentsContainer2),
            this.$PredictedSegmentTemplateSegmentsContainer3 -
              this.$PredictedSegmentTemplateSegmentsContainer12.length +
              1 -
              c
          );
          return this.$PredictedSegmentTemplateSegmentsContainer14(
            a,
            a +
              Number(this.$PredictedSegmentTemplateSegmentsContainer4) /
                this.$PredictedSegmentTemplateSegmentsContainer5,
            b
          );
        }
      };
      e.isEndingSegment = function (b) {
        if (!this.$PredictedSegmentTemplateSegmentsContainer8) return !1;
        var c = b.getSequenceNumber();
        return c != null
          ? c >= this.$PredictedSegmentTemplateSegmentsContainer3
          : a.prototype.isEndingSegment.call(this, b);
      };
      e.getEndingSegment = function () {
        if (this.$PredictedSegmentTemplateSegmentsContainer12.length === 0)
          return null;
        var a =
          this.$PredictedSegmentTemplateSegmentsContainer12[
            this.$PredictedSegmentTemplateSegmentsContainer12.length - 1
          ];
        return this.$PredictedSegmentTemplateSegmentsContainer14(
          a.t / this.$PredictedSegmentTemplateSegmentsContainer5,
          (a.t + a.d) / this.$PredictedSegmentTemplateSegmentsContainer5,
          this.$PredictedSegmentTemplateSegmentsContainer3
        );
      };
      e.getMaxGopSec = function () {
        return (
          this.$PredictedSegmentTemplateSegmentsContainer9 /
          this.$PredictedSegmentTemplateSegmentsContainer5
        );
      };
      return b;
    })(c("oz-player/manifests/SegmentTemplateSegmentsContainer"));
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/parsers/OzDefaultSegmentTimelineParser",
  [
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      a.parseSegments = function (a, b) {
        a = [];
        b.SegmentTimeline[0].S &&
          (a = b.SegmentTimeline[0].S.map(function (a) {
            return {
              t: Number.parseInt(a.$.t, 10),
              d: Number.parseInt(a.$.d, 10),
              r: Number.parseInt(a.$.r || "0", 10),
              id: a.$.id ? Number.parseInt(a.$.id, 10) : void 0,
            };
          }));
        return a;
      };
      var b = a.prototype;
      b.parseSegmentsContainer = function (b, e, f) {
        return new (c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(
          b,
          d("oz-player/utils/OzUrlHelper").joinUrlPaths(e.baseUrl, f.$.media),
          Number.parseInt(f.$.timescale, 10),
          a.parseSegments(b, f),
          null,
          e.isStaticMpd
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "OzPredictedSegmentTimelineParser",
  [
    "PredictedSegmentTemplateSegmentsContainer",
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/parsers/OzDefaultSegmentTimelineParser",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzUrlHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.parseSegmentsContainer = function (a, b, e) {
        var f;
        if (e.SegmentTimeline[0].$.FBPredictedMedia) {
          f = d("oz-player/utils/OzUrlHelper").joinUrlPaths(
            b.baseUrl,
            e.SegmentTimeline[0].$.FBPredictedMedia
          );
          var g = new (c("oz-player/shims/OzURI"))(f);
          g.addQueryData("_nc_sc", 1);
          f = g.toString();
        }
        var h;
        e.SegmentTimeline[0].$.FBPredictedMediaStartNumber &&
          (h = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaStartNumber,
            0
          ));
        var i;
        e.SegmentTimeline[0].$.FBPredictedMediaEndNumber &&
          (i = Number.parseInt(
            e.SegmentTimeline[0].$.FBPredictedMediaEndNumber,
            0
          ));
        var j;
        e.SegmentTimeline[0].$.FBAverageDuration &&
          (j = Number.parseInt(e.SegmentTimeline[0].$.FBAverageDuration, 0));
        g = c("oz-player/parsers/OzDefaultSegmentTimelineParser").parseSegments(
          a,
          e
        );
        return ((b.isTemplatedMpd && h != null && j != null) ||
          !b.isTemplatedMpd) &&
          f != null &&
          i != null
          ? new (c("PredictedSegmentTemplateSegmentsContainer"))(
              a,
              d("oz-player/utils/OzUrlHelper").joinUrlPaths(
                b.baseUrl,
                e.$.media
              ),
              b.mpdUrl,
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              h,
              i,
              j,
              b.isStaticMpd
            )
          : new (c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(
              a,
              d("oz-player/utils/OzUrlHelper").joinUrlPaths(
                b.baseUrl,
                e.$.media
              ),
              Number.parseInt(e.$.timescale, 10),
              g,
              f,
              b.isStaticMpd
            );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/www/OzStreamsWWW",
  ["cr:927622", "cr:927623"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = Boolean(b("cr:927622"));
    d = Boolean(b("cr:927623"));
    e = b("cr:927622") ? b("cr:927622").ReadableStream : a.ReadableStream;
    f = b("cr:927623") ? b("cr:927623").WritableStream : a.WritableStream;
    g.OzReadableStream = e;
    g.OzReadableStreamIsPolyfilled = c;
    g.OzWritableStream = f;
    g.OzWritableStreamIsPolyfilled = d;
  },
  98
);
__d(
  "oz-player/shims/OzStreams",
  ["oz-player/shims/www/OzStreamsWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    (g.OzReadableStream = d(
      "oz-player/shims/www/OzStreamsWWW"
    ).OzReadableStream),
      (g.OzReadableStreamIsPolyfilled = d(
        "oz-player/shims/www/OzStreamsWWW"
      ).OzReadableStreamIsPolyfilled),
      (g.OzWritableStream = d(
        "oz-player/shims/www/OzStreamsWWW"
      ).OzWritableStream),
      (g.OzWritableStreamIsPolyfilled = d(
        "oz-player/shims/www/OzStreamsWWW"
      ).OzWritableStreamIsPolyfilled);
  },
  98
);
__d(
  "oz-player/networks/OzTransformStream",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzStreams",
    "oz-player/utils/OzError",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        var f =
            (b = b == null ? void 0 : b.errorTransform) != null
              ? b
              : function (a) {
                  return a;
                },
          g,
          h;
        e.writable = new (d("oz-player/shims/OzStreams").OzWritableStream)({
          start: function (a) {
            h = a;
          },
          write: function (a) {
            e.emit("writableWrite", a);
            try {
              e.onDataWritten(a);
            } catch (a) {
              g.error(
                new (c("oz-player/utils/OzError"))({
                  type: "OZ_STREAM",
                  description:
                    "Error from write handler: " + e.constructor.name,
                  extra: { code: "OZ_S-0", originalError: a },
                })
              );
            }
            g.enqueue(a);
          },
          close: function () {
            e.emit("writableClose");
            try {
              e.onClose();
            } catch (a) {
              g.error(
                new (c("oz-player/utils/OzError"))({
                  type: "OZ_STREAM",
                  description:
                    "Error from close handler: " + e.constructor.name,
                  extra: { code: "OZ_S-1", originalError: a },
                })
              );
            }
            g.close();
          },
          abort: function (a) {
            a = f(a);
            g.error(a);
          },
        });
        e.readable = new (d("oz-player/shims/OzStreams").OzReadableStream)({
          start: function (a) {
            g = a;
          },
          cancel: function (a) {
            e.emit("readableCancel", a), h.error(a);
          },
        });
        return e;
      }
      var e = b.prototype;
      e.onDataWritten = function (a) {};
      e.onClose = function () {};
      return b;
    })(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/shims/www/OzPerformanceWWW",
  ["performance", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    a = {
      now: function () {
        return c("performanceNow")();
      },
      getEntriesByName: function (a, b) {
        return typeof c("performance").getEntriesByName === "function"
          ? c("performance").getEntriesByName(a, b)
          : [];
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "oz-player/shims/OzPerformance",
  ["oz-player/shims/www/OzPerformanceWWW"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/OzPerformanceWWW");
  },
  98
);
__d(
  "oz-player/utils/OzResourceTimingUtils",
  ["oz-player/shims/OzPerformance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      a = c("oz-player/shims/OzPerformance").getEntriesByName(a, "resource");
      return a.reduce(function (a, b) {
        return a == null ? b : b.responseEnd < a.responseEnd ? a : b;
      }, null);
    };
    g.getLatestResourceTimingEntry = a;
  },
  98
);
__d(
  "OzVideoLiveTraceNetworkRequestStreamHandler",
  [
    "oz-player/networks/OzTransformStream",
    "oz-player/utils/OzResourceTimingUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = !1), (this.$2 = !1), (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var e = this,
          f = a.headers,
          g = null;
        if (!this.$1) return null;
        a = new (c("oz-player/networks/OzTransformStream"))();
        a.addListener("writableClose", function () {
          var a = {},
            c = d(
              "oz-player/utils/OzResourceTimingUtils"
            ).getLatestResourceTimingEntry(b);
          c &&
            (a.lat = Math.round(c.responseStart - c.requestStart).toString());
          e.$1 && f && e.$1(f, g, a);
        });
        this.$2 &&
          a.addListener("writableWrite", function (a) {
            g === null ? (g = [a]) : g.push(a);
          });
        return a;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TimeRanges",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.$1 = []), (this.$1 = a);
      }
      var b = a.prototype;
      b.start = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].startTime;
      };
      b.end = function (a) {
        this.$1[a] || h(0, 2205);
        return this.$1[a].endTime;
      };
      b.length = function () {
        return this.$1.length;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/drm/OzDrmUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      return Uint8Array.from(window.atob(a), function (a) {
        return a.charCodeAt(0);
      });
    };
    b = function (a) {
      return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a)));
    };
    f.base64ToUint8Array = a;
    f.arrayBufferToBase64 = b;
  },
  66
);
__d(
  "OzWidevineDrmProvider",
  ["ConstUriUtils", "FBLogger", "oz-player/drm/OzDrmUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f, g) {
        this.$2 = [];
        this.$4 = !0;
        this.$5 = !1;
        g != null &&
          g !== "" &&
          (this.$1 = d("oz-player/drm/OzDrmUtils").base64ToUint8Array(g));
        if (b != null && f != null) {
          b =
            (g = d("ConstUriUtils").getUri(b)) == null
              ? void 0
              : g.addQueryParam("access_token", f);
          if (b == null)
            throw c("FBLogger")("comet_video_player").mustfixThrow(
              "Invalid Graph API license uri for video: %s",
              a
            );
          this.$3 = b.toString();
          this.$5 = !0;
          this.$4 = !1;
        } else {
          g = e["0"];
          if (g == null) {
            g = "/video/drm/getlicense";
            b =
              (f = d("ConstUriUtils").getUri(g)) == null
                ? void 0
                : f.addQueryParam("video_id", a);
            if (b == null)
              throw c("FBLogger")("comet_video_player").mustfixThrow(
                "Invalid server license uri for video: %s",
                a
              );
            this.$3 = b.toString();
          } else this.$3 = g;
        }
      }
      var b = a.prototype;
      b.getKeySystem = function () {
        return "com.widevine.alpha";
      };
      b.getSchemeId = function () {
        return "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
      };
      b.getInitDatas = function () {
        return this.$2;
      };
      b.setInitDatas = function (a) {
        this.$2 = a;
      };
      b.getRequireDistinctiveIdentifier = function () {
        return "optional";
      };
      b.getRequirePersistentState = function () {
        return "optional";
      };
      b.getInitDataTypes = function () {
        return;
      };
      b.getDrmSessionTypes = function () {
        return ["temporary"];
      };
      b.getAudioRobustness = function () {
        return "";
      };
      b.getVideoRobustness = function () {
        return "";
      };
      b.getServerCertificate = function () {
        return this.$1;
      };
      b.getLicenseRequestInfo = function (a) {
        var b = {
          url: this.$3,
          method: "POST",
          body: "",
          headers: {},
          credentials: void 0,
        };
        this.$4 && (b.credentials = "include");
        a = d("oz-player/drm/OzDrmUtils").arrayBufferToBase64(a);
        if (this.$5) {
          var c = { request: a };
          b.body = JSON.stringify(c);
          b.headers["Content-Type"] = "application/json";
        } else (b.body = a), (b.headers["Content-Type"] = "application/text");
        return b;
      };
      b.parseLicenseResponse = function (a) {
        a = String.fromCharCode.apply(null, a);
        var b;
        try {
          b = JSON.parse(a);
        } catch (a) {
          b = void 0;
        }
        var c;
        if (b !== void 0 && b.data !== void 0 && b.data.length === 1) {
          b = b.data[0];
          b.error != null || (c = b.license);
        } else c = a;
        if (c != null && c !== "")
          try {
            return d("oz-player/drm/OzDrmUtils").base64ToUint8Array(c);
          } catch (a) {
            if (a.name === "InvalidCharacterError")
              throw new Error("Endpoint returned error: " + c);
            else throw a;
          }
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "OzDOMEventListenerImpl",
  ["CometEventListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      listenDOMEvent: c("CometEventListener").listen,
      captureDOMEvent: c("CometEventListener").capture,
      suppressDOMEvent: c("CometEventListener").suppress,
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "oz-player/shims/www/OzDOMEventListenerWWW",
  ["OzDOMEventListenerImpl"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("OzDOMEventListenerImpl");
    f["default"] = a;
  },
  66
);
__d(
  "oz-player/shims/OzDOMEventListener",
  ["oz-player/shims/www/OzDOMEventListenerWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzDOMEventListenerWWW");
  },
  98
);
__d(
  "oz-player/shims/www/OzSubscriptionsHandlerWWW",
  ["SubscriptionsHandler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("SubscriptionsHandler");
  },
  98
);
__d(
  "oz-player/shims/OzSubscriptionsHandler",
  ["oz-player/shims/www/OzSubscriptionsHandlerWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzSubscriptionsHandlerWWW");
  },
  98
);
__d(
  "oz-player/shims/www/ozThrottleWWW",
  ["throttle"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("throttle");
  },
  98
);
__d(
  "oz-player/shims/ozThrottle",
  ["oz-player/shims/www/ozThrottleWWW"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozThrottleWWW");
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingDetectorStates",
  ["oz-player/utils/OzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
        function a(a, b, c) {
          (this.$1 = a), (this.$2 = b), (this.$3 = c);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
          a =
            this.$3 instanceof j
              ? this.$1.getInPlayBufferOverflowTarget()
              : this.$1.getStartBufferUnderflowTarget();
          return d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(b, a, c)
            ? new j(this.$1, this.$2)
            : this;
        };
        return a;
      })(),
      i = (function () {
        function a(a, b) {
          (this.$1 = a), (this.$2 = b);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          return a.type === "play" || a.type === "playing" || !b.paused
            ? d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
                b,
                this.$1.getStartBufferUnderflowTarget(),
                c
              )
              ? new j(this.$1, this.$2)
              : new h(this.$1, this.$2, this)
            : this;
        };
        return a;
      })(),
      j = (function () {
        function a(a, b) {
          (this.$1 = a),
            (this.$2 = b),
            (this.$3 = b
              .getString("stream_types_eligible_for_partial_playback", "")
              .split(","));
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c, e) {
          e === void 0 && (e = new Map());
          if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
          return !d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(
            b,
            this.$1.getInPlayBufferUnderflowTarget(),
            c
          ) && !this.$4(a, b.currentTime, e)
            ? new h(this.$1, this.$2, this)
            : this;
        };
        b.$4 = function (a, b, c) {
          return a.type === "waiting"
            ? !1
            : d("oz-player/utils/OzBufferingUtils").hasEnoughPartialBuffer(
                b,
                c,
                this.$3,
                this.$2.getNumber("partial_playback_buffer_overflow", 0)
              );
        };
        return a;
      })();
    g.OzVideoBufferingState = h;
    g.OzVideoPausedState = i;
    g.OzVideoPlayingState = j;
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingStateThresholdManager",
  ["oz-player/shims/OzPerformance", "oz-player/utils/OzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = !1),
          (this.$3 = -Infinity),
          (this.$4 = -Infinity),
          (this.$1 = a);
      }
      var b = a.prototype;
      b.getInPlayBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          "in_play_buffer_underflow_target",
          d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
        );
      };
      b.getInPlayBufferOverflowTarget = function () {
        if (this.$5())
          return this.$1.getNumber(
            "stream_interrupt_in_play_buffer_overflow_target",
            d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
          );
        return c("oz-player/shims/OzPerformance").now() - this.$4 <
          this.$1.getNumber("recent_buffer_timeout_ms", 0)
          ? this.$1.getNumber(
              "recent_buffer_in_play_buffer_overflow_target",
              d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
            )
          : this.$1.getNumber(
              "in_play_buffer_overflow_target",
              d("oz-player/utils/OzBufferingUtils").BUFFER_OVERFLOW_THRESHOLD
            );
      };
      b.getStartBufferUnderflowTarget = function () {
        return this.$1.getNumber(
          "start_buffer_underflow_target",
          d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD
        );
      };
      b.notifyBufferingEnd = function () {
        this.$4 = c("oz-player/shims/OzPerformance").now();
      };
      b.notifyStreamInterrupted = function () {
        this.$2 = !0;
      };
      b.notifyStreamResumed = function () {
        (this.$2 = !1), (this.$3 = c("oz-player/shims/OzPerformance").now());
      };
      b.$5 = function () {
        var a = this.$1.getNumber(
          "stream_interrupt_buffer_target_timeout_ms",
          0
        );
        return a === 0
          ? !1
          : this.$2 || c("oz-player/shims/OzPerformance").now() - this.$3 < a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/strategies/OzBufferingDetector",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/strategies/OzBufferingDetectorStates",
    "oz-player/strategies/OzBufferingStateThresholdManager",
    "oz-player/utils/OzBufferingUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 150;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f) {
        var g;
        g = a.call(this) || this;
        g.$OzBufferingDetector3 = new (c(
          "oz-player/shims/OzSubscriptionsHandler"
        ))();
        g.$OzBufferingDetector6 = new Map();
        g.$OzBufferingDetector8 = null;
        g.$OzBufferingDetector9 = function (a) {
          g.$OzBufferingDetector11(a);
        };
        g.$OzBufferingDetector2 = b;
        g.$OzBufferingDetector4 = e;
        g.$OzBufferingDetector5 = f;
        g.$OzBufferingDetector7 = new (c(
          "oz-player/strategies/OzBufferingStateThresholdManager"
        ))(e);
        g.$OzBufferingDetector2.paused
          ? (g.$OzBufferingDetector1 = new (d(
              "oz-player/strategies/OzBufferingDetectorStates"
            ).OzVideoPausedState)(
              g.$OzBufferingDetector7,
              g.$OzBufferingDetector4
            ))
          : (g.$OzBufferingDetector1 = d(
              "oz-player/utils/OzBufferingUtils"
            ).hasEnoughBuffer(
              g.$OzBufferingDetector2,
              g.$OzBufferingDetector7.getInPlayBufferUnderflowTarget(),
              g.$OzBufferingDetector5()
            )
              ? new (d(
                  "oz-player/strategies/OzBufferingDetectorStates"
                ).OzVideoPlayingState)(
                  g.$OzBufferingDetector7,
                  g.$OzBufferingDetector4
                )
              : new (d(
                  "oz-player/strategies/OzBufferingDetectorStates"
                ).OzVideoBufferingState)(
                  g.$OzBufferingDetector7,
                  g.$OzBufferingDetector4,
                  null
                ));
        g.$OzBufferingDetector3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "pause",
            g.$OzBufferingDetector9
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "play",
            g.$OzBufferingDetector9
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "progress",
            c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector9, h)
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "timeupdate",
            c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector9, h)
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "seeked",
            g.$OzBufferingDetector9
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "seeking",
            g.$OzBufferingDetector9
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "waiting",
            g.$OzBufferingDetector9
          )
        );
        g.$OzBufferingDetector3.addSubscriptions(
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "canplay",
            g.$OzBufferingDetector9
          ),
          c("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            g.$OzBufferingDetector2,
            "canplaythrough",
            g.$OzBufferingDetector9
          )
        );
        return g;
      }
      var e = b.prototype;
      e.$OzBufferingDetector10 = function () {
        var a = this,
          b = "unavailable",
          c = this.$OzBufferingDetector7.getInPlayBufferUnderflowTarget();
        this.$OzBufferingDetector6.forEach(function (e, f) {
          var g = a.$OzBufferingDetector2.currentTime;
          d("oz-player/utils/OzBufferingUtils").hasBuffer(g, c, e) ||
            (b = b === "unavailable" ? f : "audio/video");
        });
        return b;
      };
      e.setSourceBufferState = function (a, b) {
        this.$OzBufferingDetector6.set(a, b);
      };
      e.$OzBufferingDetector11 = function (a) {
        var b = this.$OzBufferingDetector1.handleEvent(
            a,
            this.$OzBufferingDetector2,
            this.$OzBufferingDetector5(),
            this.$OzBufferingDetector6
          ),
          c = this.$OzBufferingDetector1;
        this.$OzBufferingDetector1 = b;
        var e =
            b instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoBufferingState,
          f =
            c instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoBufferingState;
        if (b === c) {
          e &&
            this.$OzBufferingDetector8 &&
            this.$OzBufferingDetector8
              .cloneContext()
              .getOperationLogger("buffering_handle_event")
              .setInitiator(a.type)
              .log();
          return b;
        }
        if (e) {
          e =
            c instanceof
            d("oz-player/strategies/OzBufferingDetectorStates")
              .OzVideoPlayingState
              ? "in_play"
              : "start/unpause";
          this.$OzBufferingDetector8 &&
            this.$OzBufferingDetector8
              .cloneContext()
              .getOperationLogger("enter_buffering")
              .setState("buffering")
              .setType(e)
              .setReason(this.$OzBufferingDetector10())
              .setInitiator(a.type)
              .log();
          this.emit("enterBuffering", e);
        } else
          f &&
            (this.$OzBufferingDetector8 &&
              this.$OzBufferingDetector8
                .cloneContext()
                .getOperationLogger("leave_buffering")
                .setInitiator(a.type)
                .log(),
            this.$OzBufferingDetector7.notifyBufferingEnd(),
            this.emit("leaveBuffering", {
              domEventPerfTimestamp: a.timeStamp,
            }));
        return b;
      };
      e.notifyStreamInterrupted = function () {
        this.$OzBufferingDetector7.notifyStreamInterrupted();
      };
      e.notifyStreamResumed = function () {
        this.$OzBufferingDetector7.notifyStreamResumed();
      };
      e.attachPerfLoggerProvider = function (a) {
        this.$OzBufferingDetector8 = a;
      };
      e.destroy = function () {
        this.$OzBufferingDetector3.release();
      };
      return b;
    })(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplUtils",
  [
    "OzSystemicRiskABRManager",
    "OzWidevineDrmProvider",
    "cr:72",
    "gkx",
    "justknobx",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/strategies/OzBufferingDetector",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /(livestream-)?lookaside\.(facebook|workplace)\.com$/,
      i = c("qex")._("1658");
    function j(a) {
      return i != null && i !== "" ? i : null;
    }
    function a(a) {
      return h.test(a.getDomain());
    }
    function b(a, b, d, e, f, g) {
      if (f.current != null) return;
      var h = !0,
        i = function () {
          if (h) return !1;
          var a = f.current !== j;
          return a && c("gkx")("1508440") ? !0 : !1;
        },
        j = new (c("oz-player/strategies/OzBufferingDetector"))(
          a,
          d,
          function () {
            var a = e.getCurrentState();
            a = a.controlledState;
            return a.streamEnded ? b.getDuration() : Infinity;
          }
        );
      f.current = j;
      h = !1;
      a = function (a) {
        if (i()) return;
        if (c("gkx")("1235655")) return;
        e.dispatch({
          payload: { bufferingType: a },
          type: "buffering_begin_requested",
        });
        a = d.getNumber("ull_fallback_stall_count", 0);
        if (a > 0) {
          var b = g.getLoggerState().stallCountTotal;
          d.getBool("fix_ull_fallback_stall_count", !1) &&
            (b = g.getLoggerState().inPlayStallCount200ms);
          e.getCurrentState().controlledState.latencyLevel === "ultra-low" &&
            b > a &&
            e.dispatch({
              payload: { latencyLevel: "low" },
              type: "implementation_set_latency_level_requested",
            });
        }
      };
      var k = function (a) {
        if (i()) return;
        e.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: "buffering_end_requested",
        });
      };
      j.addListener("enterBuffering", a);
      j.addListener("leaveBuffering", k);
    }
    function d(a) {
      var b = a.accessToken,
        d = a.graphQLVideoDRMInfo;
      a = a.videoFBID;
      var e = [];
      if (d && a != null) {
        var f = c("justknobx")._("717") ? null : d.widevineCert;
        e.push(
          new (c("OzWidevineDrmProvider"))(
            a,
            d.graphApiVideoLicenseUri,
            d.videoLicenseUriMap,
            b,
            (a = f) != null ? a : null
          )
        );
      }
      return e;
    }
    function e(a) {
      var b = a.VideoPlayerShakaPerformanceLoggerClass,
        c = a.accessToken,
        d = a.disableLogging,
        e = a.getApproximateFBLSToPlayerDisplayLatency,
        f = a.getBandwidthEstimate,
        g = a.getPlayerDimensions,
        h = a.getPlayerFormat,
        i = a.playbackIsLiveStreaming,
        j = a.playerInstanceCount,
        k = a.playerInstanceKey,
        l = a.playerSuborigin,
        m = a.playerVersion,
        n = a.videoElement,
        o = a.videoFBID;
      a = a.videoPlayerShakaPerformanceLoggerBuilder;
      if (d || (!a && (!b || !b.shouldInitialize()))) return [];
      c = {
        accessToken: c,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: f,
        getPlayerDimensions: g,
        getPlayerFormat: h,
        isLive: i,
        isServableViaFbms: !1,
        playerInstanceCount: j,
        playerOrigin: null,
        playerSuborigin: l,
        playerVersion: m,
        representationId: null,
        uniqueID: k,
        video: n,
        videoID: (d = o) != null ? d : "",
      };
      return a != null ? [a.build(c)] : b ? [new b(c)] : [];
    }
    function f(a, b) {
      return b > 0
        ? (b / 1e3) * -1
        : a.getNumber("live_initial_playback_position", 0);
    }
    function k(a, b, c) {
      return b > 0 && c > 0
        ? (b + c) / 1e3
        : a.getNumber("livehead_fall_behind_block_threshold", 0);
    }
    function l(a, b) {
      return b > 0
        ? b / 2 / 1e3
        : a.getNumber("live_time_range_block_margin", 0);
    }
    function m() {
      return function (a, b, d, e, f, g, h, i) {
        return a.getLegacyConfig().getBool("use_systemic_risk_abr", !1)
          ? new (c("OzSystemicRiskABRManager"))(a, b, d, e, f, g, h, i)
          : null;
      };
    }
    function n(a, b) {
      var d = b.experimentationConfig,
        e = b.getCurrentVideoRepresentation,
        f = b.getOzCDNSignedQueryParams,
        g = b.isClientTriggeredTraceEnabled,
        h = b.playbackIsLiveStreaming,
        i = b.playbackSessionId;
      b = b.shouldRefresh403;
      var k = a.getQueryData(),
        l;
      if (h) {
        l = {};
        var m = j(a);
        m !== null &&
          m !== "" &&
          (l = babelHelpers["extends"]({}, l, { os_param: m }));
        if (d.getBool("server_side_abr_send_client_estimates", !1)) {
          m = c(
            "oz-player/networks/OzBandwidthEstimator"
          ).getBandwidthDiagnostics(d);
          m &&
            (l = babelHelpers["extends"]({}, l, {
              _nc_bwe: String(m.bandwidthEstimate),
              _nc_bwe_std: String(m.bandwidthStandardDeviation),
              _nc_ttfb: String(m.timeToFirstByteMsEstimate),
              _nc_ttfb_std: String(m.timeToFirstByteMsStandardDeviation),
            }));
          m = e();
          m &&
            (l = babelHelpers["extends"]({}, l, {
              _nc_abr_bitrate: String(m.getBandwidth()),
              _nc_abr_qlabel: m.getQualityLabel(),
            }));
        }
        c("gkx")("2047") &&
          (l = babelHelpers["extends"]({}, l, {
            _nc_wclk: "1",
            _nc_wclk_ms: "1",
          }));
      }
      h &&
        c("gkx")("1998922") &&
        (l = babelHelpers["extends"]({}, l, { _nc_nc: "1" }));
      e = d.getNumber("live_video_chunk_duration", 0);
      h &&
        e > 0 &&
        (l = babelHelpers["extends"]({}, l, { chk_dur: e.toString(10) }));
      c("gkx")("1836350") &&
        k.uss != null &&
        k.odm != null &&
        (l = babelHelpers["extends"]({}, l, { manual_redirect: "1" }));
      g && (l = babelHelpers["extends"]({}, l, { _nc_psid: i }));
      if (b) {
        m = f();
        if (m != null) {
          d = a.getDomain() + a.getPath();
          h = m.get(d);
          if (h != null)
            for (e in h) {
              l = babelHelpers["extends"]({}, l, ((k = {}), (k[e] = h[e]), k));
            }
        }
      }
      return l;
    }
    g.getOsParamValue = j;
    g.checkShouldIncludeCredentials = a;
    g.createOzBufferingDetector = b;
    g.createOzDrmProviders = d;
    g.createOzPerfLoggerProviders = e;
    g.calculateInitialPlaybackPositionForDynamicMpd = f;
    g.calculateLiveheadFallBehindBlockThreshold = k;
    g.calculateLiveheadFallBehindBlockMargin = l;
    g.getVideoAbrManagerFactory = m;
    g.getCustomRequestParametersForURI = n;
  },
  98
);
__d(
  "OzMinimumSmallestDimensionRestriction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.applyRestriction = function (a, b) {
        var c = this;
        if (a.length === 0) return [];
        b = a.filter(function (a) {
          var b = a.getWidth();
          a = a.getHeight();
          b = b < a ? b : a;
          return b >= c.$1;
        });
        return b.length > 0 ? b : [a[a.length - 1]];
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "OzMosThresholdRestriction",
  ["MosUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$3 = new Map()),
          (this.$4 = a),
          (this.$1 = a.getNumber("mos_upper_threshold", 0)),
          (this.$2 = a.getNumber("mos_lower_threshold", 0));
      }
      var b = a.prototype;
      b.$5 = function () {
        return this.$4.getBool("cache_mos_threshold", !1)
          ? { mosUpperThreshold: this.$1, mosLowerThreshold: this.$2 }
          : {
              mosUpperThreshold: this.$4.getNumber("mos_upper_threshold", 0),
              mosLowerThreshold: this.$4.getNumber("mos_lower_threshold", 0),
            };
      };
      b.$6 = function (a, b) {
        var c = null;
        if (this.$3.get(a)) c = this.$3.get(a);
        else {
          var e = a.getCustomField("playbackResolutionMos");
          e != null &&
            ((c = d("MosUtils").parsePlaybackMos(String(e))),
            c && this.$3.set(a, c));
        }
        return c != null
          ? d("MosUtils").getMosValue(
              c,
              d("MosUtils").getQualityLabel(b.width, b.height)
            )
          : null;
      };
      b.$7 = function (a, b) {
        var c = this,
          d = null,
          e = this.$5(),
          f = e.mosUpperThreshold;
        a.forEach(function (a) {
          a = c.$6(a, b);
          a != null && a > f && (d == null || d > a) && (d = a);
        });
        return d == null
          ? a
          : a.filter(function (a) {
              a = c.$6(a, b);
              return a == null ? !0 : a <= f || a === d;
            });
      };
      b.$8 = function (a, b) {
        var c = this,
          d = [],
          e = this.$5(),
          f = e.mosLowerThreshold;
        a.forEach(function (a) {
          var e = c.$6(a, b);
          e != null && e > f && d.push(a);
        });
        d.length === 0 && d.push(a[a.length - 1]);
        return d;
      };
      b.applyRestriction = function (a, b) {
        if (a.length === 0) return [];
        a = a;
        var c = this.$5(),
          d = c.mosLowerThreshold;
        c = c.mosUpperThreshold;
        c > 0 && (a = this.$7(a, b));
        d > 0 && (a = this.$8(a, b));
        return a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "getOzPlaybackRestrictions",
  ["OzMinimumSmallestDimensionRestriction", "OzMosThresholdRestriction", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (b = c("qex")._("930")) != null ? b : 720;
    function a(a, b) {
      var d = [];
      switch (a) {
        case "HD":
          d.push(new (c("OzMinimumSmallestDimensionRestriction"))(h));
          break;
        case "UHD":
          break;
        default:
          break;
      }
      a = b.getNumber("mos_upper_threshold", 0);
      var e = b.getNumber("mos_lower_threshold", 0);
      (a > 0 || e > 0) && d.push(new (c("OzMosThresholdRestriction"))(b));
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/configs/OzPlayerConfigDefaults",
  [],
  function (a, b, c, d, e, f) {
    a = {
      append_once_per_stream_in_application_stream: !1,
      bandwidth_ignore_on_stream_write_samples: !1,
      bandwidth_use_response_time_adjustment: !1,
      catchup_use_timeline_range_end_time_as_end: !1,
      clear_on_seek: !0,
      debug_live_replay: !1,
      do_not_end_stream: !1,
      fix_dom_exception_as_message: !0,
      ignore_reset_after_seek_if_bufferahead: !1,
      latencymanager_stalled_edgelatency_sec_on: !1,
      live_audio_ibr: !0,
      mpd_parse_all_adaptation_sets: !0,
      ms_promise_for_null: !1,
      normalize_mpd_fetch_errors: !0,
      pdash_use_pdash_segmentlocator: !1,
      player_emit_mpdparsed_early: !1,
      playhead_manager_buffered_timerange_update_on_timeupdate: !0,
      playhead_manager_clamp_initial_playback_position: !1,
      reset_catchup_timeout_after_play_sec_on_overwrite: !0,
      retry_video_element_error: !0,
      sidx_parser_memory_optimization: !1,
      skip_videobuffer_gaps: !0,
      skip_videobuffer_gaps_on_buffer_updated: !0,
      stub_safari_source_buffer_abort: !1,
      use_live_latency_manager: !1,
      use_scf_timebased_segments: !1,
      use_strict_resolution_constraint: !0,
      vtt_caption_representation: !0,
    };
    b = {
      abr_confidence_threshold: 0.9,
      abr_eval_buffer_threshold: 0,
      abr_min_bandwidth_samples: 0,
      abr_prevent_down_switch_buffer_threshold: 11,
      abr_restrict_from_index: 0,
      abr_restrict_to_index: 0,
      append_byte_target_without_range: 1e5,
      appends_per_segment: 6,
      auto_seek_playhead_slack: 0.5,
      bandwidth_boundary_standard_deviation_factor: 1,
      bandwidth_estimator_half_life: 6,
      bandwidth_estimator_outlier_exclusion_factor: 50,
      bandwidth_estimator_std_dev_penalty_factor: 0,
      bandwidth_header_expire_threshold: 0,
      bandwidth_response_time_handicap: 0,
      bandwidth_ttfb_samples_to_save: 5,
      buffer_ahead_target: 22,
      buffer_target_constraint_append_succeeded_reward: 0.2,
      buffer_target_constraint_minimum_sec: 2,
      buffer_target_constraint_quota_exceeded_penalty: 0.3,
      byte_count_per_sample: 2e5,
      catchup_timeout_after_buffering_sec: 0,
      catchup_timeout_after_play_sec: 0,
      clear_buffer_around_playhead_boundary_ms: 5e3,
      clear_buffer_on_seek_epsilon_s: 0,
      clear_buffer_on_seek_nudge_s: 0,
      default_bandwidth_estimate: 1e6,
      download_cursor_buffer_ahead_time_max_sec: 0,
      download_cursor_total_buffer_max_sec: 0,
      dvl_initial_segment_ignore_count: 1,
      dvl_update_interval_ms: 0,
      dynamic_mpd_initial_playback_position_offset_modifier: 4,
      initial_manifest_request_retry_count: 3,
      initial_switch_interval: 0,
      in_play_buffer_overflow_target: 1,
      in_play_buffer_underflow_target: 0.1,
      latencymanager_stalled_edgelatency_sec: 0,
      live_audio_ibr_bandwidth_percentage: 0.05,
      live_numerical_error_epsilon: 1e-4,
      loop_body_handle_error_interval_ms: 1,
      low_buffer_bandwidth_target_increase_factor: 0,
      low_buffer_bandwidth_target_threshold: 10,
      low_segment_stream_playhead_threshold: 0,
      manifest_initial_update_delay_ms: 0,
      manifest_update_frequency_ms: 0,
      max_bandwidth_sample_count: 30,
      maximum_bandwidth_sample_bandwidth: 1e8,
      max_start_eme_attempts: 3,
      min_eval_interval: 100,
      minimum_bandwidth_sample_duration: 10,
      minimum_bytes_to_sample_on_close: 25e3,
      min_switch_interval: 100,
      mpd_updater_network_request_timeout_ms: 2e4,
      ms_promise_for_null_ms: 0,
      network_seg_timeout_ms: 0,
      overwrite_livehead_fall_behind_block_threshold: 0,
      overwrite_live_time_range_block_margin: 0,
      partial_playback_buffer_overflow: 0.75,
      paused_stream_segments_count: 2,
      pdash_download_cursor_between_catchups_seg: 0,
      pdash_download_cursor_catchup_threshold_gop_multiplier: 0,
      pdash_download_cursor_catchup_threshold_sec: 0,
      pdash_download_cursor_catchup_tolerance_sec: 0,
      per_stream_duration_target: 0,
      pixels_above_viewport_to_observe: 0,
      pixels_below_viewport_to_observe: 0,
      playback_speed_enabled_delay_sec: 4,
      playback_speed_latency_adjustment_rate: 0,
      playback_speed_latency_slowdown_adjustment_rate: 0,
      playback_speed_latency_speedup_adjustment_rate: 0,
      playback_speed_min_buffer_sec: 1,
      playback_speed_min_duration_sec: 2,
      playback_speed_min_sharpness_factor: 3,
      playback_speed_restore_min_duration_sec: 1,
      playhead_manager_buffered_auto_seek_playhead_slack: 0.5,
      playhead_manager_buffered_is_near_gap_threshold: 1.5,
      playhead_manager_buffered_numerical_error: 0.01,
      playhead_manager_timeupdate_throttle_ms: 1e3,
      pre_start_buffer_ahead_target: 16.924449682236,
      prioritize_by_viewport_static_penalty: 0,
      recent_buffer_in_play_buffer_overflow_target: 3,
      recent_buffer_timeout_ms: 1e4,
      resolution_constraint_factor: 2,
      seconds_to_stream: 10,
      seconds_to_stream_near_bandwidth_boundary: 10,
      seek_ahead_epsilon: 0.05,
      segments_to_stream: 5,
      segments_to_stream_near_bandwidth_boundary: 5,
      segments_to_stream_under_playhead_threshold: 0,
      sidx_segment_retry_attempts: 9999,
      sidx_segment_retry_interval_ms: 100,
      skip_videobuffer_gaps_max_gap_size_sec: 0,
      stale_mpd_buffer_ahead_target: 0,
      start_buffer_underflow_target: 0.1,
      steadystate_minbuffer_buckets: 0,
      steadystate_minbuffer_buckets_sec: 1,
      steadystate_minbuffer_sec: 0,
      stream_interrupt_buffer_target_timeout_ms: 1e4,
      stream_interrupt_check_mpd_stale_count_threshold: 6,
      stream_interrupt_in_play_buffer_overflow_target: 1,
      timeline_offset_threshold: 10,
      time_to_first_byte_estimate_half_life_ms: 500,
      time_to_first_byte_ignore_above_threshold_ms: 0,
    };
    c = {
      bandwidth_estimate_header_key: "",
      bandwidth_estimate_key: "",
      block_representation_status_codes_json: "[500]",
      block_representation_status_codes_temporarily_json: "{}",
      cdn_experiment_id: "",
      stream_types_eligible_for_partial_playback: "",
    };
    e.exports = { defaultBools: a, defaultNumbers: b, defaultStrings: c };
  },
  null
);
__d(
  "oz-player/configs/OzPlayerConfig",
  ["oz-player/configs/OzPlayerConfigDefaults"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        a === void 0 && (a = {}), (this.$1 = a);
      }
      var b = a.prototype;
      b.getBool = function (a) {
        return typeof this.$1[a] === "boolean"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[a];
      };
      b.getNumber = function (a) {
        return typeof this.$1[a] === "number"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[a];
      };
      b.getString = function (a) {
        return typeof this.$1[a] === "string"
          ? this.$1[a]
          : d("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[a];
      };
      b.getLegacyConfig = function () {
        var a = this;
        return {
          getBool: function (b, c) {
            return typeof a.$1[b] === "boolean"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[
                  b
                ]) != null
              ? b
              : c;
          },
          getNumber: function (b, c) {
            return typeof a.$1[b] === "number"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults")
                  .defaultNumbers[b]) != null
              ? b
              : c;
          },
          getString: function (b, c) {
            return typeof a.$1[b] === "string"
              ? a.$1[b]
              : (b = d("oz-player/configs/OzPlayerConfigDefaults")
                  .defaultStrings[b]) != null
              ? b
              : c;
          },
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player/configs/OzConfigUtils",
  ["oz-player/configs/OzPlayerConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("oz-player/configs/OzPlayerConfig"))();
    a = function (a) {
      return {
        getBool: function (b) {
          return a.getBool(b, h.getBool(b));
        },
        getNumber: function (b) {
          return a.getNumber(b, h.getNumber(b));
        },
        getString: function (b) {
          return a.getString(b, h.getString(b));
        },
        getLegacyConfig: function () {
          return a;
        },
      };
    };
    g.provideConfigWithDefaults = a;
  },
  98
);
__d(
  "oz-player/networks/OzClientClock",
  ["oz-player/shims/OzPerformance", "oz-player/utils/OzResourceTimingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (a !== null) {
        a = parseInt(a, 10);
        if (!isNaN(a)) return a;
      }
      return null;
    }
    a = (function () {
      function a() {
        (this.$1 = null),
          (this.$2 = 0),
          (this.$2 = Date.now() - c("oz-player/shims/OzPerformance").now());
      }
      var b = a.prototype;
      b.updateOffsetFromHeaderResponse = function (a, b) {
        var c = h(b.get("x-fb-dynamic-server-wallclock-ms"));
        b = h(b.get("x-fb-dynamic-rtt-ms"));
        a = d(
          "oz-player/utils/OzResourceTimingUtils"
        ).getLatestResourceTimingEntry(a);
        if (
          c !== null &&
          b !== null &&
          a != null &&
          a.responseStart > 0 &&
          a.duration > 10
        ) {
          a = a.requestStart + this.$2;
          c = c - a - b / 2;
          this.$1 = c;
        }
      };
      b.now = function () {
        var a;
        return (
          c("oz-player/shims/OzPerformance").now() +
          this.$2 +
          ((a = this.$1) != null ? a : 0)
        );
      };
      b.getClientClockOffsetMs = function () {
        return this.$1;
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "oz-player/networks/OzClockSyncNetworkRequestStreamHandler",
  ["oz-player/networks/OzClientClock", "oz-player/networks/OzTransformStream"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.onResponse = function (a, b) {
        var d = a.headers;
        if (!d) return null;
        a = new (c("oz-player/networks/OzTransformStream"))();
        a.addListener("writableClose", function () {
          c("oz-player/networks/OzClientClock").updateOffsetFromHeaderResponse(
            b,
            d
          );
        });
        return a;
      };
      b.onError = function (a, b) {
        return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplFunction",
  [
    "CometThrottle",
    "ConstUriUtils",
    "Deferred",
    "FBLogger",
    "NetworkStatus",
    "OzActiveActiveFailoverNetworkRequestStreamHandler",
    "OzBufferVTTCaptionsVisibleStrategy",
    "OzCDNSignedQueryParams",
    "OzCustomParsers",
    "OzCustomRepresentationParsers",
    "OzOneSemanticHandler",
    "OzOneSemanticHandlerUtils",
    "OzPredictedSegmentTimelineParser",
    "OzVideoLiveTraceNetworkRequestStreamHandler",
    "Promise",
    "QE2Logger",
    "TimeRanges",
    "VideoPlayerConnectionQuality",
    "VideoPlayerEmsg",
    "VideoPlayerImplementationErrors",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "clearTimeout",
    "cr:1836099",
    "cr:1871597",
    "cr:1947728",
    "cr:1993377",
    "getErrorSafe",
    "getOzPlaybackRestrictions",
    "gkx",
    "md5",
    "oz-player/configs/OzConfigUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzClockSyncNetworkRequestStreamHandler",
    "qex",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (e = c("qex")._("592")) != null ? e : 1e4,
      i = null,
      j = null;
    b("cr:1836099") &&
      ((i = b("cr:1836099").getHiveConfig()), (j = b("cr:1836099").HiveOz));
    function a(a) {
      var e,
        f = a.OzPlayerClass,
        g = a.callChain,
        k = a.destroyOzPlayerPartsRef,
        l = a.engineDebugAPI,
        m = a.engineExtrasAPI,
        n = a.getCaptionsInfo,
        aa = a.getLatencyLevelManager,
        o = a.getVideoLiveTrace,
        p = a.handleCaptionsInfoChange,
        ba = a.handleFatalImplementationError,
        q = a.hivePluginRef,
        r = a.initialProps,
        s = a.logger,
        t = a.machine,
        u = a.overrideOzRequestImplementationRef,
        v = a.ozBufferingDetectorRef,
        w = a.ozPlayerRef,
        x = a.p2pSessionLoggerRef,
        y = a.playerVersion,
        z = a.resolvedVideoInfo,
        A = a.videoElement,
        B = { current: !1 },
        C = { current: null },
        D = { current: null };
      k.current = function (a) {
        var b = v.current;
        b && ((v.current = null), b.destroy());
        b = w.current;
        if (b) {
          l && l.handleOzPlayerChanged(null);
          w.current = null;
          try {
            b.destroy([].concat(a, ["destroyOzPlayerParts"]).join(":"));
          } catch (a) {
            c("FBLogger")("comet_video_player")
              .catching(a)
              .mustfix("Error in ozPlayer.destroy: %s", String(a));
          }
        }
        b = C.current;
        b && ((C.current = null), b());
        D.current && (D.current = null);
        Z();
        q.current && (q.current = null);
        x.current && (x.current = null);
        u.current && (u.current = null);
      };
      a = z.accessToken;
      k = z.audioOnly;
      var E = z.experimentationConfig,
        F = z.graphQLVideoDRMInfo,
        G = z.graphQLVideoP2PSettings,
        H = z.manifestUrl,
        ca = z.manifestXmlStringResolved,
        da = z.minQualityPreference,
        ea = z.ozPrefetchCache,
        I = z.videoFBID,
        J = r.disableLogging ? null : z.VideoPlayerShakaPerformanceLoggerClass,
        K = Boolean(r.loggingMetaData.coreVideoPlayerMetaData.isLiveStreaming),
        L = Boolean((e = r.isClientTriggeredTraceEnabled) != null ? e : !1),
        M = function (a) {
          return m.getEstimatedBandwidth();
        };
      e = function () {
        return m.getApproximateFBLSToPlayerDisplayLatency();
      };
      var fa = function () {
          E.setContext(
            "connection_quality",
            d("VideoPlayerConnectionQuality").evaluate(function () {
              return M(K);
            })
          );
        },
        N = function () {
          var a = E.getNumber(
            "connection_quality_context_throttle_frequency",
            0
          );
          if (a === 0) return null;
          var b = c("CometThrottle")(fa, a),
            d = c("oz-player/networks/OzBandwidthEstimator").addListener(
              "bandwidth_sampled",
              b
            );
          return function () {
            d.remove(), b.cancel();
          };
        };
      C.current = N();
      N = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzDrmProviders({
        accessToken: a,
        graphQLVideoDRMInfo: F,
        videoFBID: I,
      });
      F = function () {
        return t.getCurrentState().controlledState.captionsVisible;
      };
      var O = [];
      E.getBool("use_vtt_captions_visible_buffer_strategy", !0) &&
        O.push(new (c("OzBufferVTTCaptionsVisibleStrategy"))(F));
      F = function () {
        return t.getCurrentState().controlledState.dimensions;
      };
      var P = function () {
        return t.getCurrentState().controlledState.playerFormat;
      };
      a = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzPerfLoggerProviders({
        VideoPlayerShakaPerformanceLoggerClass: J,
        accessToken: a,
        disableLogging: r.disableLogging,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: M,
        getPlayerDimensions: F,
        getPlayerFormat: P,
        playbackIsLiveStreaming: K,
        playerInstanceCount:
          r.loggingMetaData.playerImplementationInstanceCountRef.current,
        playerInstanceKey: r.loggingMetaData.instanceKey,
        playerSuborigin: r.loggingMetaData.coreVideoPlayerMetaData.subOrigin,
        playerVersion: y,
        videoElement: A,
        videoFBID: I,
        videoPlayerShakaPerformanceLoggerBuilder:
          z.videoPlayerShakaPerformanceLoggerBuilder,
      });
      D.current == null && (D.current = new (c("OzCDNSignedQueryParams"))());
      if (G && I != null) {
        e = G.community_info;
        P = G.config;
        y = G.hive_initialization_options;
        z = x.current =
          (z = x.current) != null
            ? z
            : b("cr:1871597")
            ? new (b("cr:1871597"))(I, e)
            : null;
        try {
          if (!q.current) {
            z && z.logEnableP2P();
            e = function (a) {
              x.current && x.current.logHiveError(a);
            };
            var Q = function (b) {
                var a = w.current;
                a && a.injectExternalDebugEvent("P2PTech", b.tech);
                x.current && x.current.logSessionActive(b.tech);
              },
              R = function (b) {
                var a = w.current;
                a && a.injectExternalDebugEvent("P2PStats", b);
                x.current && x.current.setCurrentHiveStats(b);
              },
              S = function (a) {
                a = a.state;
                var b = t.getCurrentState();
                b = b.controlledState;
                b = b.playbackState;
                if (q.current && a === "CLOSED") {
                  Z();
                  a = w.current;
                  a &&
                    b !== "ended" &&
                    (B.current && H != null
                      ? a.updatePlayerRunTimeConfig({ manifestUrl: H })
                      : a.load(H));
                }
              };
            R = {
              HiveJava: {},
              HiveJS: {
                maximumTrimming: { dash: void 0, hls: void 0 },
                renderStatsCallback: R,
              },
              debugLevel: "off",
              hiveTechOrder: ["HiveJS", "StatsJS", "HiveJava"],
              onActiveSession: Q,
              onError: e,
              onSessionStateChange: S,
              telemetryId: z ? z.getSessionID() : 0,
            };
            Q = E.getNumber("hive_maximum_trimming_seconds", 0);
            Q > 0 && (R.HiveJS.maximumTrimming = { dash: Q, hls: Q });
            if (y) {
              e = y.HiveJava;
              S = y.debugLevel;
              Q = y.hiveTechOrder;
              R.hiveTechOrder = Q.slice();
              R.HiveJava = e ? { minVersion: e.minVersion } : {};
              R.debugLevel = (y = S) != null ? y : R.debugLevel;
            }
            c("gkx")("2047688") &&
              (R = babelHelpers["extends"]({}, R, {
                testId: "fb_video_player_p2p_jest_e2e",
              }));
            if (
              P.disable_hivejava_for_livevc === !0 &&
              H != null &&
              H.startsWith("https://livestream-lookaside")
            ) {
              Q = R.hiveTechOrder.indexOf("HiveJava");
              Q >= 0 && R.hiveTechOrder.splice(Q, 1);
            }
            if (i) i.SensitiveInfo.restrictedConnectivityInfo = !0;
            else
              throw c("unrecoverableViolation")(
                "HiveConfig does not exist",
                "comet_video_player"
              );
            if (j) q.current = new j(R);
            else
              throw c("unrecoverableViolation")(
                "HiveOz does not exist",
                "comet_video_player"
              );
            if (q.current) {
              if (!b("cr:1947728"))
                throw c("unrecoverableViolation")(
                  "OzConfigurableRequestImplementation does not exist",
                  "comet_video_player"
                );
              u.current = b("cr:1947728")(
                q.current.getRequestImplementation(),
                {
                  inferResponseStatusIsOK: c("gkx")("3951"),
                  inferResponseStatusIsOk2xx: c("gkx")("277"),
                }
              );
            }
          }
        } catch (a) {
          z && z.logError(a), Z();
        }
      }
      e = [
        new (c("OzVideoLiveTraceNetworkRequestStreamHandler"))(function (
          a,
          b,
          c
        ) {
          var d = o();
          d != null && d.handleHeadersAndBody(a, b, c);
        },
        E.getBool("live_trace_parse_emsg", !1)),
        new (c("oz-player/networks/OzClockSyncNetworkRequestStreamHandler"))(),
      ];
      c("OzActiveActiveFailoverNetworkRequestStreamHandler") &&
        e.push(
          new (c("OzActiveActiveFailoverNetworkRequestStreamHandler"))(
            function (a, b) {
              if (c("gkx")("1664503")) {
                var e = w.current,
                  f = a.headers;
                if (e && f) {
                  f = parseInt(f.get("x-fb-video-replica"), 10);
                  s.logVPLEvent({
                    eventType: "replica_switch",
                    logDataOverrides: {
                      error_code: a.status.toString(),
                      error_user_info: JSON.stringify({
                        failover_response_code: a.status.toString(),
                        replica: f,
                        url: b,
                      }),
                    },
                    state: t.getCurrentState(),
                  });
                  a = e.getMpdUrl();
                  if (a != null) {
                    b = d("ConstUriUtils").getUri(a);
                    if (b) {
                      a = b.addQueryParam("replica", f);
                      a &&
                        (Z(),
                        e.updatePlayerRunTimeConfig({
                          manifestUrl: a.toString(),
                          resetStreamAnchor: !0,
                        }));
                    }
                  }
                }
              }
            }
          )
        );
      var T = r.expiredVideoUrlRefreshHandler,
        ga = r.loggingMetaData.instanceKey;
      S = c("gkx")("221");
      y = c("gkx")("1836350") || c("gkx")("1993562");
      var U = K ? S : y;
      E.getBool("log_exposure_on_oz_initialization", !1) &&
        d("QE2Logger").logExposureForUser("www_videos_html5_mpeg_dash");
      P = {
        audioOnly: (P = k) != null ? P : !1,
        bufferEndLimit: r.bufferEndLimit != null ? r.bufferEndLimit : null,
        bufferingDetector: (Q = v.current) != null ? Q : void 0,
        config: d("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(
          E
        ),
        configureCustomRequestParametersForSegment: function (a) {
          var b = null;
          if (K && L) {
            var d = a.getByteRange();
            d = d
              ? d.startByte + ", " + (d.endByte != null ? d.endByte : "null")
              : "null";
            a = c("md5")(a.getURI().toString() + d);
            b = (d = b) != null ? d : {};
            a != null && (b = babelHelpers["extends"]({}, b, { _nc_tsid: a }));
            b = babelHelpers["extends"]({}, b, { _nc_e2e: "live" });
          }
          return b;
        },
        customParsers: d("OzCustomParsers").createOzCustomParser(),
        customRepresentationParsers: d(
          "OzCustomRepresentationParsers"
        ).createOzCustomRepresentationParsers({ ozConfig: E }),
        customSegmentTimelineParser: E.getBool("enable_predictive_dash", !1)
          ? new (c("OzPredictedSegmentTimelineParser"))()
          : void 0,
        customVTTBufferTargetStrategies: O,
        debugCreateInitiator: []
          .concat(g, ["proceedWithOzPlayerCreation"])
          .join(":"),
        drmProviders: N,
        getCustomRequestParametersForURI: function (a) {
          return d(
            "VideoPlayerOzImplementationEnginePartsImplUtils"
          ).getCustomRequestParametersForURI(a, {
            experimentationConfig: E,
            getCurrentVideoRepresentation: function () {
              var a = w.current;
              return a == null ? void 0 : a.getCurrentVideoRepresentation();
            },
            getOzCDNSignedQueryParams: function () {
              return D.current;
            },
            isClientTriggeredTraceEnabled: L,
            playbackIsLiveStreaming: K,
            playbackSessionId: ga,
            shouldRefresh403: U,
          });
        },
        getOverrideOzRequestImplementation: function () {
          return u.current;
        },
        getShouldIncludeCredentials: E.getBool(
          "use_oz_credentials_provider",
          !1
        )
          ? d("VideoPlayerOzImplementationEnginePartsImplUtils")
              .checkShouldIncludeCredentials
          : null,
        getVideoDimensions: F,
        initialPlaybackPositionForDynamicMpd: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateInitialPlaybackPositionForDynamicMpd(
          E,
          (R = r.initialDesiredLatencyMs) != null ? R : 0
        ),
        initialRepresentationIDs:
          (z = r.initialRepresentationIds) != null ? z : [],
        isClientTriggeredTraceEnabled: L,
        liveheadFallBehindBlockMargin: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockMargin(
          E,
          (S = r.initialDesiredLatencyMs) != null ? S : 0
        ),
        liveheadFallBehindBlockThreshold: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockThreshold(
          E,
          (y = r.initialDesiredLatencyMs) != null ? y : 0,
          (k = r.initialLatencyToleranceMs) != null ? k : 0
        ),
        loggerConfig: {
          isOzDevConsoleEnabled: c("gkx")("722076"),
          observedOperationLoggers: [],
          perfLoggerProviders: a,
        },
        mpdUrl: H,
        networkRequestStreamHandlers: e,
        networkRequestStreamRetryHandler: U
          ? function (a, d, e) {
              var f = a.headers,
                g = f == null ? void 0 : f.get("x-fb-url-refresh"),
                h = D.current;
              if (a.status === 403 && h != null) {
                s.logVPLEvent({
                  eventType: "video_cdn_url_expired",
                  logDataOverrides: {
                    error_user_info: JSON.stringify({ expired_url: e }),
                  },
                  state: t.getCurrentState(),
                });
                var i =
                  g != null && b("cr:1993377") != null
                    ? {
                        name: "refreshShortExpiryVideoUrl",
                        promise: b("cr:1993377")(g),
                      }
                    : T != null
                    ? { name: "expiredVideoUrlRefreshHandler", promise: T(e) }
                    : null;
                if (i != null)
                  return i.promise
                    .then(function (a) {
                      var b;
                      b = (b = a.refreshedUrl) != null ? b : null;
                      a = (a = a.reason) != null ? a : null;
                      if (b != null && (c("gkx")("5837") ? b !== "" : !0)) {
                        s.logVPLEvent({
                          eventType: "video_cdn_url_refreshed",
                          logDataOverrides: {
                            error_user_info: JSON.stringify({
                              refresh_handler: i.name,
                              refreshed_url: b,
                            }),
                          },
                          state: t.getCurrentState(),
                        });
                        h.update(b);
                        return d(b);
                      } else {
                        throw c("unrecoverableViolation")(
                          i.name +
                            " refreshedUrl is " +
                            (b === "" ? "an empty string" : "null") +
                            ", reason: " +
                            ((b = a) != null ? b : "null"),
                          "comet_video_player"
                        );
                      }
                    })
                    ["catch"](function (a) {
                      a = c("gkx")("5837") ? c("getErrorSafe")(a) : a;
                      s.logVPLEvent({
                        eventType: "video_cdn_url_refresh_error",
                        logDataOverrides: {
                          error_description: a.message,
                          error_user_info: JSON.stringify({
                            expired_url: e,
                            refresh_handler: i.name,
                            refresh_url: g,
                          }),
                        },
                        state: t.getCurrentState(),
                      });
                      throw a;
                    });
              }
              return b("Promise").resolve(a);
            }
          : null,
        prefetchCache: E.getBool("use_prefetch_cache", !1) ? ea : null,
        rawMpdXml: q.current ? void 0 : ca,
        seekHandler: c("gkx")("1482680")
          ? function (a) {
              var b = A.currentTime;
              t.dispatch({
                payload: { seekSourcePosition: b },
                type: "implementation_seek_requested",
              });
              A.currentTime = a;
            }
          : null,
        setCustomFetchStreamLoggingAttributes: function (a, b, e) {
          a.setIsOnline(c("NetworkStatus").isOnline());
          var f = e == null ? void 0 : e.headers;
          if (f)
            try {
              a.setProxyStatusHeader(f.get("proxy-status")),
                a.setDynamicStatusHeader(f.get("x-fb-dynamic-status"));
            } catch (a) {}
          d(
            "OzOneSemanticHandlerUtils"
          ).setOneSemanticFetchStreamLoggingAttributes(a, b, e);
        },
        startTimeStamp: E.getBool("fix_start_timestamp", !1)
          ? r.startTimestamp
          : 0,
        videoAbrManagerFactory: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).getVideoAbrManagerFactory(),
        videoNode: A,
        videoPlaybackRestrictions: c("getOzPlaybackRestrictions")(da, E),
      };
      var V = new f(P);
      w.current = V;
      v.current &&
        v.current.attachPerfLoggerProvider(V.getPerfLoggerProvider());
      Q = r.loggingMetaData.playerImplementationInstanceCountRef;
      Q.current++;
      V.onError(function (a) {
        J && J.flushQueuedLogs(), ba(a, "oz_player_error");
      });
      V.addListener("switchVideoRepresentation", function () {
        t.dispatch({
          payload: { targetVideoQuality: m.getCurrentTargetVideoQuality() },
          type: "representation_changed",
        });
      });
      var W = function (a) {
        if (E.getBool("enable_error_recovery_attempt_logging", !1)) {
          a = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromOzImplementationError(
            a,
            "oz_player_stream_error_retry"
          );
          t.dispatch({
            payload: { recoverableError: a },
            type: "error_recovery_attempt",
          });
        }
      };
      V.addListener("manifestFetchError", function (a) {
        d("OzOneSemanticHandler").handleManifestFetchErrorEvent(E, a);
      });
      V.addListener("manifestFetchErrorRetry", function (a) {
        W(a);
      });
      V.addListener("streamError", function (a) {
        return d("OzOneSemanticHandler").handleStreamErrorEvent(E, a);
      });
      V.addListener("streamErrorRetry", function (a) {
        var b;
        (((b = a.getExtra()) == null ? void 0 : b.mimeType) !== "application" ||
          E.getBool("enable_era_logging_for_application_stream", !0)) &&
          W(a);
      });
      V.addListener("streamInterruptAt", function () {
        t.dispatch({ type: "stream_interrupted" });
      });
      V.addListener("streamResumedAt", function () {
        t.dispatch({ type: "stream_resumed" });
      });
      V.addListener("streamGoneBeforeStart", function () {
        Z(), t.dispatch({ type: "stream_gone_before_start" });
      });
      V.addListener("streamEnd", function () {
        Z(), t.dispatch({ type: "stream_ended" });
      });
      V.addListener("videoNodeErrorRetry", function (a) {
        if (E.getBool("enable_error_recovery_attempt_logging", !1)) {
          a = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromVideoNodeError(
            a,
            "oz_player_stream_error_retry"
          );
          t.dispatch({
            payload: { recoverableError: a },
            type: "error_recovery_attempt",
          });
        }
      });
      V.addListener("enterBuffering", function (a) {
        if (c("gkx")("1235655")) return;
        t.dispatch({
          payload: { bufferingType: a },
          type: "buffering_begin_requested",
        });
      });
      V.addListener("leaveBuffering", function (a) {
        t.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: "buffering_end_requested",
        });
      });
      l && l.handleOzPlayerChanged(V);
      var ha = function () {
          var a = n();
          a = {
            inbandCaptionsAutogeneratedFromManifest:
              m.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              m.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              m.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              a == null ? void 0 : a.sideLoadCaptionsUrlFromProps,
          };
          var b = t.getCurrentState();
          b = b.controlledState;
          (a.inbandCaptionsExpectedFromManifest !== b.captionsLoaded ||
            a.inbandCaptionsAutogeneratedFromManifest !==
              b.inbandCaptionsAutogenerated) &&
            p(a);
        },
        ia = function (a, b) {
          a = a.getCustomField("timescale");
          a = typeof a === "number" ? a : 0;
          t.dispatch({
            payload: { timescale: a, videoBytes: b },
            type: "cea608_bytes_received",
          });
        },
        ja = function () {
          var a = m.getVideoRepresentations();
          if (a != null && a.length > 0) {
            a = a[0].getTimeRanges();
            if (a != null && a.length > 0) {
              var b = a[0].startTime;
              a = Math.max(
                a[a.length - 1].endTime -
                  E.getNumber("live_rewind_seek_to_live_delta", 8),
                b
              );
              t.dispatch({
                payload: {
                  seekableRanges: new (c("TimeRanges"))([
                    { endTime: a, startTime: b },
                  ]),
                },
                type: "seekable_ranges_changed",
              });
            }
          }
        },
        ka = function () {
          var a = V.getMpd();
          if (!a) return;
          a = a.getCustomField("loapStreamType");
          var b = o();
          typeof a === "number" && b != null && b.setStreamType(a);
        },
        X = function (a) {
          if (a != null) {
            a = d("ConstUriUtils").getUri(a);
            if (a) {
              a = a.getQueryParam("lvp");
              return a === "1";
            }
          }
          return !1;
        },
        la = function (a) {
          var b = function () {
            ja(), ha(), ka();
          };
          a.addListener("updated", b);
          c("gkx")("1656434") && b();
          V.updatePlayerRunTimeConfig({
            audioStreamDataHandler: function (a, b) {
              var c = t.getCurrentState();
              if (c.controlledState.emsgObserverTokens.size > 0) {
                c = function (a) {
                  s.logVPLEvent({
                    eventType: "imf",
                    logDataOverrides: a,
                    state: t.getCurrentState(),
                  });
                };
                b = d("VideoPlayerEmsg").parseEmsgBoxesFromMP4Segment(
                  b,
                  I,
                  a.getID(),
                  A.currentTime,
                  c
                );
                b.length > 0 &&
                  t.dispatch({
                    payload: { emsgBoxes: b },
                    type: "emsg_boxes_parsed",
                  });
              }
            },
            videoStreamDataHandler: ia,
          });
          if (m.isPredictiveDash()) {
            E.setContext("streaming_implementation", "pdash");
            a = aa();
            a && a.maybeUpdateLatencyLevel();
          }
          b = n();
          p({
            inbandCaptionsAutogeneratedFromManifest:
              m.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              m.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              b == null ? void 0 : b.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              m.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              b == null ? void 0 : b.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              b == null ? void 0 : b.sideLoadCaptionsUrlFromProps,
          });
        };
      V.addListener("vttCaptionsUpdated", function (a, b) {
        var c = "webvtt",
          d = t.getCurrentState().controlledState.captionFormat;
        c !== d &&
          t.dispatch({
            payload: { captionFormat: c },
            type: "controller_set_caption_format_requested",
          });
        t.dispatch({
          payload: { activeCaptions: a, captionsLocale: b },
          type: "controller_set_active_captions_requested",
        });
      });
      V.addListener("mpdParsed", function (a) {
        m.isPredictiveDash() &&
          E.setContext("streaming_implementation", "pdash");
      });
      V.addListener("mpdReady", function (a) {
        B.current = !0;
        la(a);
        t.dispatch({
          payload: {
            availableQualities: m.getAvailableVideoQualities(),
            selectedVideoQuality: m.getUserSelectedVideoQuality(),
            targetVideoQuality: m.getCurrentTargetVideoQuality(),
            videoProjection:
              (a = m.getVideoProjectionType()) != null ? a : null,
          },
          type: "implementation_engine_initialized",
        });
      });
      V.addListener("representationBlocked", function (a) {
        t.dispatch({
          payload: {
            availableQualities: m.getAvailableVideoQualities(),
            blockedRepresentationID: a,
          },
          type: "implementation_engine_representation_blocked",
        });
      });
      var Y = null;
      function Z() {
        c("clearTimeout")(Y);
        var a = q.current,
          b = x.current;
        if (a != null) {
          q.current = null;
          x.current = null;
          u.current = null;
          try {
            a && a.closeHiveSession(), b && b.logEndSession();
          } catch (a) {
            b && b.logHiveError(a);
          }
        }
      }
      O = q.current;
      g = G == null ? void 0 : G.ticket;
      if (H != null && G && O && g != null) {
        N = V.getPerfLoggerProvider();
        N && N.setIsP2pPlayback(!0);
        F = H.substring(H.indexOf("?"));
        R = O.initSession(g + F, V, A);
        var $ = new (c("Deferred"))();
        h > 0 &&
          (Y = c("setTimeout")(function () {
            $.reject(
              new Error("Hive initialization timed out after " + h + "ms")
            );
          }, h));
        R.then(function (a) {
          $.resolve(a);
        })["catch"](function (a) {
          $.reject(a);
        });
        $.getPromise()
          .then(function (a) {
            c("clearTimeout")(Y);
            var b = a.manifest;
            a = a.tech;
            var d = x.current;
            b !== H && d && d.logManifestMismatch(b, H);
            d && d.logSessionInit(a, b);
            s.setAdditionalLogData("is_p2p_playback", !0);
            s.setAdditionalLogData("is_live_preview", X(b));
            V.load(b);
          })
          ["catch"](function (a) {
            c("clearTimeout")(Y);
            var b = x.current;
            b && b.logError(a);
            Z();
            s.setAdditionalLogData("is_live_preview", X(H));
            V.load(H);
          });
      } else
        s.setAdditionalLogData("is_p2p_playback", !1),
          s.setAdditionalLogData("is_live_preview", X(H)),
          V.load(H);
    }
    g.proceedWithOzPlayerCreation = a;
  },
  98
);
__d(
  "LatencySensitiveType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({ NORMAL: 0, LOW: 1, ULTRA_LOW: 2 });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "VideoPlayerOzImplementationLatencyLevelManager",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$2 = "normal"),
          (this.$4 = null),
          (this.$1 = a),
          (this.$3 = b),
          (this.$6 = c);
      }
      var b = a.prototype;
      b.updatePlayerFormat = function (a) {
        this.$4 !== a && ((this.$4 = a), this.maybeUpdateLatencyLevel());
      };
      b.updateBroadcastLatencySensitivity = function (a) {
        this.$5 !== a && ((this.$5 = a), this.maybeUpdateLatencyLevel());
      };
      b.maybeUpdateLatencyLevel = function () {
        var a;
        this.$1.getBool("ull_use_broadcast_sensitivity_type", !1)
          ? (a = this.$7(this.$5))
          : (a = this.$8());
        a !== this.$2 &&
          ((this.$2 = a),
          this.$1.getBool("set_latency_context_immediately", !1) &&
            this.$1.setContext("latency_level", a),
          this.$3.dispatch({
            payload: { latencyLevel: a },
            type: "implementation_set_latency_level_requested",
          }));
      };
      b.$8 = function () {
        var a = [];
        try {
          a = JSON.parse(
            this.$1.getString("player_formats_for_low_latency", "[]")
          );
        } catch (a) {}
        return a.includes("*") || a.includes(this.$4) ? "low" : "normal";
      };
      b.$9 = function () {
        var a,
          b = this.$1.getNumber("ultra_low_latency_bandwidth_threshold", 0),
          d = this.$6.getEstimatedBandwidth();
        a = (a = c("qex")._("84")) != null ? a : !1;
        return !a && d !== null && b > 0 && d < b;
      };
      b.$7 = function (a) {
        if (a == null) return "normal";
        switch (a) {
          case 1:
            return "low";
          case 2:
            return this.$9()
              ? this.$1.getBool("fall_back_to_low_latency_in_ull", !1)
                ? "low"
                : "normal"
              : "ultra-low";
          case 0:
            return "normal";
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEngine",
  [
    "CometDASHPrefetchCacheManager",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationLoadSequenceManager",
    "VideoPlayerODS",
    "VideoPlayerOzImplementationEngineExtrasAPI",
    "VideoPlayerOzImplementationEnginePartsImplFunction",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "VideoPlayerOzImplementationLatencyLevelManager",
    "cr:1473549",
    "cr:1494460",
    "cr:1534629",
    "cr:72",
    "emptyFunction",
    "gkx",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = !1;
    var h = c("emptyFunction");
    function a(a) {
      var e = a.debugLogId,
        f = a.handleFatalError,
        g = a.initialProps;
      a = a.setExposedStateInReact;
      var i = { current: null },
        j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = { current: null },
        o = { current: null },
        p = { current: null },
        q = { current: null },
        r = { current: null },
        s = { current: null },
        t = { current: null },
        u = { current: null };
      function v() {
        var a;
        return (a = o.current) != null ? a : null;
      }
      function w() {
        var a;
        return (a = n.current) != null ? a : null;
      }
      function x() {
        var a;
        return (a =
          (a = j.current) == null ? void 0 : a.experimentationConfig) != null
          ? a
          : null;
      }
      function y() {
        var a;
        return (a = X.current) != null ? a : null;
      }
      function z() {
        var a;
        return (a = u.current) != null ? a : null;
      }
      var A;
      b("cr:1473549") && (A = new (b("cr:1473549"))());
      var B = "comet_oz",
        C = function (a, b) {
          return b.manifestXmlStringInitial !== null
            ? a.manifestXmlStringInitial !== b.manifestXmlStringInitial
            : a.manifestUrl !== b.manifestUrl;
        },
        D = function (a, b) {
          return a.videoFBID !== b.videoFBID;
        },
        E = function (a, b) {
          return a.playerFormat !== b.playerFormat;
        },
        F = function (a) {
          return a.getBool("use_full_player_if_cached", !1) && b("cr:1534629")
            ? b("cr:1534629")().getModuleIfRequireable()
            : null;
        },
        G = function (a, b, c) {
          b != null
            ? (j.current = babelHelpers["extends"]({}, a, {
                manifestXmlStringResolved: b,
              }))
            : (j.current = a),
            W.dispatch({
              type: "implementation_engine_oz_manifest_downloading",
            }),
            (m.current = F(a.experimentationConfig)),
            K(m.current, [].concat(c, ["proceedWithOzManifestDownloading"]));
        },
        H = function (a) {
          var b,
            e,
            f = a.manifestUrl,
            g = a.manifest,
            h = null;
          c("CometDASHPrefetchCacheManager") &&
            a.videoFBID != null &&
            (h = c("CometDASHPrefetchCacheManager").get(a.videoFBID));
          b = {
            VideoPlayerShakaPerformanceLoggerClass:
              a.VideoPlayerShakaPerformanceLoggerClass,
            accessToken: a.loggingMetaData.accessToken,
            audioOnly: a.audioOnly,
            experimentationConfig: a.experimentationConfig,
            graphQLVideoDRMInfo: a.graphQLVideoDRMInfo,
            graphQLVideoP2PSettings: a.graphQLVideoP2PSettings,
            manifestUrl: (b = f) != null ? b : null,
            manifestXmlStringInitial: (b = g) != null ? b : null,
            minQualityPreference: a.minQualityPreference,
            ozPrefetchCache: h,
            playerFormat:
              a.loggingMetaData.coreVideoPlayerMetaData.playerFormat,
            videoFBID: a.videoFBID,
            videoPlayerShakaPerformanceLoggerBuilder:
              a.videoPlayerShakaPerformanceLoggerBuilder,
          };
          h = i.current;
          u.current == null &&
            (u.current = new (c(
              "VideoPlayerOzImplementationLatencyLevelManager"
            ))(a.experimentationConfig, W, P));
          b.playerFormat != null &&
            (h == null || E(b, h)) &&
            W.dispatch({
              payload: { playerFormat: b.playerFormat },
              type: "controller_set_player_format",
            });
          u.current.updatePlayerFormat(
            (e = a.loggingMetaData.coreVideoPlayerMetaData.playerFormat) != null
              ? e
              : null
          );
          (e = u.current) == null
            ? void 0
            : e.updateBroadcastLatencySensitivity(
                a.broadcastLatencySensitivity
              );
          e = !1;
          if (h == null) e = !0;
          else if (h != null && !D(b, h) && C(b, h)) {
            a = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "OzImplementation",
              "manifest_reloaded",
              a
            );
            e = !1;
          } else if (h != null && D(b, h))
            throw c("unrecoverableViolation")(
              "videoFBID changed after player initialization",
              "comet_video_player"
            );
          if (!e) return !1;
          f = b.manifestUrl;
          g = b.manifestXmlStringInitial;
          if (g == null && f == null)
            throw c("unrecoverableViolation")(
              "Empty manifestXmlStringInitial and manifestUrl",
              "comet_video_player"
            );
          i.current = b;
          G(b, g, [
            "handleVideoInfoChangeForOzImplementation",
            "downloadManifestInOz",
          ]);
          return !0;
        },
        I = function (a, b) {
          var d = function (c) {
              if (l.current !== a) return;
              m.current = c;
              K(c, [].concat(b, ["handleOzPlayerModuleLoadSuccess"]));
            },
            e = function (b) {
              if (l.current !== a) return;
              U(b, "oz_player_module_load_failed");
            };
          l.current = a;
          c("promiseDone")(a, d, e);
        },
        J = function (a) {
          a = d(
            "VideoPlayerImplementationEngineVideoElementAPI"
          ).createVideoPlayerImplementationEngineVideoElementAPI(a);
          X.current = a;
          return a;
        },
        K = function (a, c) {
          var e = R(),
            f = j.current;
          if (e == null || f == null) return;
          var g = J(e),
            h = f.experimentationConfig;
          a
            ? L(
                a,
                e,
                g,
                f,
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "OzPlayerModuleFromRef",
                ])
              )
            : b("cr:1494460")
            ? L(
                b("cr:1494460")(),
                e,
                g,
                f,
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "VideoPlayerOzPlayerModuleLoaderSync",
                ])
              )
            : b("cr:1534629")
            ? (h.getBool(
                "instantiate_buffering_detector_before_quick_starter",
                !1
              ) &&
                d(
                  "VideoPlayerOzImplementationEnginePartsImplUtils"
                ).createOzBufferingDetector(
                  e,
                  g,
                  f.experimentationConfig,
                  W,
                  o,
                  V
                ),
              I(
                b("cr:1534629")().load(),
                [].concat(c, [
                  "proceedWithResolvedVideoInfo",
                  "VideoPlayerOzPlayerModuleLoaderAsync",
                ])
              ))
            : U(
                new Error("Neither of OzPlayerModuleLoader is available."),
                "oz_player_module_loaders_missing"
              );
        },
        L = function (a, b, e, f, h) {
          try {
            var i = {
              OzPlayerClass: a,
              callChain: [].concat(h, [
                "proceedWithResolvedVideoInfoAndOzPlayerModuleSync",
              ]),
              destroyOzPlayerPartsRef: t,
              engineDebugAPI: A,
              engineExtrasAPI: P,
              getCaptionsInfo: Q,
              getLatencyLevelManager: z,
              getVideoLiveTrace: S,
              handleCaptionsInfoChange: T,
              handleFatalImplementationError: U,
              initialProps: g,
              logger: V,
              machine: W,
              ozBufferingDetectorRef: o,
              playerVersion: B,
              resolvedVideoInfo: f,
              videoElement: b,
            };
            a = x();
            h = g.loadSequence;
            a && a.getNumber("load_sequence_max_delay_ms", 0) > 0 && h != null
              ? (s.current = c(
                  "VideoPlayerImplementationLoadSequenceManager"
                ).schedule(a, h, function () {
                  d(
                    "VideoPlayerOzImplementationEnginePartsImplFunction"
                  ).proceedWithOzPlayerCreation(
                    babelHelpers["extends"]({}, i, {
                      hivePluginRef: p,
                      overrideOzRequestImplementationRef: r,
                      ozPlayerRef: n,
                      p2pSessionLoggerRef: q,
                    })
                  );
                  return e.getCanPlayPromise();
                }))
              : d(
                  "VideoPlayerOzImplementationEnginePartsImplFunction"
                ).proceedWithOzPlayerCreation(
                  babelHelpers["extends"]({}, i, {
                    hivePluginRef: p,
                    overrideOzRequestImplementationRef: r,
                    ozPlayerRef: n,
                    p2pSessionLoggerRef: q,
                  })
                );
            k.current = f;
          } catch (a) {
            U(a, "oz_player_create_exception");
          }
        };
      function M(a) {
        var b = t.current;
        b != null && ((t.current = null), b(a));
        s.current != null && (s.current(), (s.current = null));
      }
      function N() {
        return;
      }
      function O() {
        (l.current = null), (m.current = null);
      }
      var P = d(
        "VideoPlayerOzImplementationEngineExtrasAPI"
      ).createVideoPlayerOzImplementationEngineExtrasAPI({
        getConfig: x,
        getOzPlayer: w,
        getVideoElementAPI: y,
      });
      y = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        createDebugAPI: function (b) {
          var a = b.getVideoElementAPI;
          b = b.logger;
          return A
            ? A.createDebugAPI({
                engineExtrasAPI: P,
                getConfig: function () {
                  var a;
                  return (a =
                    (a = k.current) == null
                      ? void 0
                      : a.experimentationConfig) != null
                    ? a
                    : null;
                },
                getManifest: function () {
                  var a;
                  return (a =
                    (a = k.current) == null
                      ? void 0
                      : a.manifestXmlStringResolved) != null
                    ? a
                    : null;
                },
                getManifestUrl: function () {
                  var a;
                  return (a =
                    (a = k.current) == null ? void 0 : a.manifestUrl) != null
                    ? a
                    : null;
                },
                getOzBufferingDetector: v,
                getOzPlayer: w,
                getVideoElementAPI: a,
                logger: b,
              })
            : null;
        },
        createVideoPlayerError: d("VideoPlayerImplementationErrors")
          .createVideoPlayerErrorFromOzImplementationError,
        debugLog: h,
        debugLogId: e,
        destroyEngineParts: function (a) {
          M([].concat(a, ["destroyEngineParts"])), N(), O();
        },
        engineExtrasAPI: P,
        engineMetadata: {
          isAbrEnabled: !0,
          isExternalMedia: !1,
          playerImplementationName: "oz_v2",
          playerVersion: B,
          streamingFormat: "dash",
        },
        handleFatalError: f,
        handleVideoElementMounted: function (a) {
          var b = R();
          K(m.current, [].concat(a, ["handleVideoElementMounted"]));
        },
        handleVideoElementUnmounted: function (a) {
          c("gkx")("1380112") &&
            M([].concat(a, ["handleVideoElementUnmounted"]));
        },
        handleVideoInfoChange: H,
        initialProps: g,
        setExposedStateInReact: a,
      });
      e = y.engine;
      var Q = y.getCaptionsInfo,
        R = y.getVideoElement,
        S = y.getVideoLiveTrace,
        T = y.handleCaptionsInfoChange,
        U = y.handleFatalImplementationError,
        V = y.logger,
        W = y.machine,
        X = y.videoElementAPIRef;
      return e;
    }
    g.createVideoPlayerOzImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerOzImplementationEngine",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = d(
        "VideoPlayerImplementationEngineAPI"
      ).useVideoPlayerImplementationEngine(
        a,
        d("VideoPlayerOzImplementationEngine")
          .createVideoPlayerOzImplementationEngine
      );
      a = a.reactVideoFrameAndComponents;
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
  ["requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferredForDisplay")("oz-player").__setRef(
      "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay"
    );
    function a() {
      return {
        getModuleIfRequireable: function () {
          return h.getModuleIfRequireable() || null;
        },
        load: function () {
          return h.load();
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.hdSrc,
        c = a.hdSrcPreferred,
        d = a.isExternalMedia;
      a = a.sdSrc;
      return a == null
        ? null
        : { hdSrc: b, hdSrcPreferred: c, isExternalMedia: d, sdSrc: a };
    }
    f.makeProgressiveImplementationData = a;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngineExtrasAPI",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return a !== null && a.indexOf(".m3u8") !== -1;
    }
    function a(a) {
      var b = a.getPlayingVideoInfo;
      a = a.setUserSelectedVideoQuality;
      return {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          return null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          return null;
        },
        getAvailableVideoQualities: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.availableQualities) != null
            ? a
            : [];
        },
        getCurrentAudioRepresentation: function () {
          return null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentVideoRepresentation: function () {
          return null;
        },
        getEstimatedBandwidth: function () {
          return null;
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          return !1;
        },
        getInbandCaptionsExpectedFromManifest: function () {
          return !1;
        },
        getManifestIdentifier: function () {
          return null;
        },
        getMpdValidationErrors: function () {
          return null;
        },
        getPerfLoggerProvider: function () {
          return null;
        },
        getRepresentationCaptionsExpectedFromManifest: function () {
          return !1;
        },
        getStreamType: function () {
          var a = b();
          return a == null
            ? "progressive"
            : g(a.hdSrc) || g(a.sdSrc)
            ? "hls"
            : "progressive";
        },
        getUserSelectedVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.selectedQuality) != null
            ? a
            : "notselected";
        },
        getVideoProjectionType: function () {
          return "cubemap";
        },
        getVideoRepresentationIDAtTime: function (a) {
          return "oep_hd";
        },
        getVideoRepresentations: function () {
          return null;
        },
        isDrm: function () {
          var a;
          return ((a = b()) == null ? void 0 : a.graphQLVideoDRMInfo) != null;
        },
        isFBIsLiveTemplated: function () {
          return !1;
        },
        isFBMS: function () {
          return !1;
        },
        isFBWasLive: function () {
          return !1;
        },
        isPredictiveDash: function () {
          return !1;
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function () {},
        setLatencyLevel: function () {},
        setUserSelectedVideoQuality: a,
      };
    }
    f.createVideoPlayerProgressiveImplementationEngineExtrasAPI = a;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngineUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "hd",
      h = "sd";
    function a(a) {
      var b = [];
      a.sdSrc != null && b.push(h);
      a.hdSrc != null && b.push(g);
      var c = a.hdSrcPreferred && a.hdSrc != null ? g : h;
      return babelHelpers["extends"]({}, a, {
        availableQualities: b,
        playingQuality: null,
        playingSrc: null,
        selectedQuality: c,
        targetQuality: c,
        targetSrc: null,
      });
    }
    function b(a, b) {
      var c = a.hdSrc,
        d = a.sdSrc,
        e,
        f;
      b === "notselected" || b === "auto"
        ? ((e = d != null ? h : c != null ? g : h),
          (f = d != null ? d : c != null ? c : null))
        : b === g && c != null
        ? ((e = g), (f = c))
        : b === h && d != null
        ? ((e = h), (f = d))
        : ((e = h), (f = null));
      f === "" && (f = null);
      return babelHelpers["extends"]({}, a, {
        selectedQuality: b,
        targetQuality: e,
        targetSrc: f,
      });
    }
    function c(a, b, c) {
      return babelHelpers["extends"]({}, a, {
        playingQuality: b,
        playingSrc: c,
      });
    }
    f.createResolvedVideoInfoProgressive = a;
    f.updatePlayingVideoInfoProgressiveWithUserSelectedQuality = b;
    f.updatePlayingVideoInfoProgressiveWithCurrentPlayingQuality = c;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngine",
  [
    "UserAgent",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "VideoPlayerProgressiveImplementationEngineExtrasAPI",
    "VideoPlayerProgressiveImplementationEngineUtils",
    "cr:1473550",
    "cr:1680308",
    "emptyFunction",
    "err",
    "gkx",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("emptyFunction");
    function i(a, b, c) {
      return d(
        "VideoPlayerImplementationErrors"
      ).createVideoPlayerErrorFromGenericError(
        "PROGRESSIVE_JAVASCRIPT_NATIVE",
        a,
        b,
        c
      );
    }
    function a(a) {
      var e = a.debugLogId,
        f = a.handleFatalError,
        g = a.initialProps;
      a = a.setExposedStateInReact;
      var j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = function () {
          var a = t(),
            e = k.current;
          if (a == null || e == null) return;
          c("gkx")("6737") &&
            a.addEventListener("error", function () {
              v(a.error, "progressive_implementation_error");
            });
          try {
            var f,
              h = e.graphQLVideoDRMInfo,
              i = e.videoFBID;
            f = h ? ((f = h.fairplayCert) != null ? f : null) : null;
            if (b("cr:1680308") && h && f != null && i != null) {
              m.current = b("cr:1680308").newIfSupported(
                f,
                a,
                i,
                h.videoLicenseUriMap
              );
              if (m.current == null) {
                f = c("err")("Fairplay not supported");
                v(f, "progressive_player_fairplay_handler_missing");
              } else
                m.current.addListener("error", function (a) {
                  a = c("err")(a.error);
                  v(a, "progressive_player_fairplay_handler_error");
                });
            }
            var j = d(
              "VideoPlayerImplementationEngineVideoElementAPI"
            ).createVideoPlayerImplementationEngineVideoElementAPI(
              a,
              g.isExternalMedia
            );
            x.current = j;
            l.current = e;
            i = s();
            u({
              inbandCaptionsAutogeneratedFromManifest:
                q.getInbandCaptionsAutogeneratedFromManifest(),
              inbandCaptionsExpectedFromManifest:
                q.getInbandCaptionsExpectedFromManifest(),
              inbandCaptionsExpectedFromProps:
                i == null ? void 0 : i.inbandCaptionsExpectedFromProps,
              representationCaptionsExpectedFromManifest:
                q.getRepresentationCaptionsExpectedFromManifest(),
              sideLoadCaptionsExpectedFromProps:
                i == null ? void 0 : i.sideLoadCaptionsExpectedFromProps,
              sideLoadCaptionsUrlFromProps:
                i == null ? void 0 : i.sideLoadCaptionsUrlFromProps,
            });
            w.dispatch({
              payload: {
                availableQualities: q.getAvailableVideoQualities(),
                selectedVideoQuality: q.getUserSelectedVideoQuality(),
                streamingFormat: q.getStreamType(),
                targetVideoQuality: q.getCurrentTargetVideoQuality(),
                videoProjection: q.getVideoProjectionType(),
              },
              type: "implementation_engine_initialized",
            });
            h = function () {
              j.setPlayheadPosition(g.startTimestamp);
            };
            c("UserAgent").isBrowser("IE11")
              ? c("promiseDone")(j.getDOMLoadedMetadataPromise().then(h))
              : h();
          } catch (a) {
            v(a, "progressive_player_create_exception");
          }
        },
        o = function (a, b) {
          if (b == null) return !0;
          else if (a.videoFBID !== b.videoFBID) {
            var c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.video_fbid_changed",
              c
            );
            return !1;
          } else if (a.hdSrc !== b.hdSrc || a.sdSrc !== b.sdSrc) {
            c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.src_changed",
              c
            );
            return !1;
          } else return !1;
        },
        p = function (a) {
          var b;
          b = {
            graphQLVideoDRMInfo: (b = a.graphQLVideoDRMInfo) != null ? b : null,
            hdSrc: a.hdSrc === "" ? null : (b = a.hdSrc) != null ? b : null,
            hdSrcPreferred: a.hdSrcPreferred,
            sdSrc: a.sdSrc === "" ? null : (b = a.sdSrc) != null ? b : null,
            videoFBID: a.videoFBID,
          };
          if (!o(b, j.current)) return !1;
          if (b.hdSrc == null && b.sdSrc == null)
            throw c("unrecoverableViolation")(
              "Empty hdSrc and sdSrc",
              "comet_video_player"
            );
          j.current = b;
          k.current = d(
            "VideoPlayerProgressiveImplementationEngineUtils"
          ).createResolvedVideoInfoProgressive(b);
          n();
          return !0;
        },
        q = d(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI"
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            return l.current;
          },
          setUserSelectedVideoQuality: function (a) {
            var b = l.current;
            if (!b)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when playingVideoInfo does not exist",
                "comet_video_player"
              );
            var e = x.current;
            if (!e)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when videoElementAPI does not exist",
                "comet_video_player"
              );
            l.current = d(
              "VideoPlayerProgressiveImplementationEngineUtils"
            ).updatePlayingVideoInfoProgressiveWithUserSelectedQuality(b, a);
            b = l.current.targetSrc;
            e.setSrc(b);
            if (b != null) {
              b =
                (a =
                  w.getCurrentState().uncontrolledState
                    .videoElementPlayheadPosition) != null
                  ? a
                  : 0;
              b > 0 && e.setPlayheadPosition(b);
              w.getCurrentState().controlledState.playbackState === "playing" &&
                e.play();
              w.dispatch({
                payload: {
                  targetVideoQuality: q.getCurrentTargetVideoQuality(),
                },
                type: "representation_changed",
              });
            }
          },
        }),
        r = function () {
          m.current && (m.current.destroy(), (m.current = null));
        };
      e = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        createDebugAPI: function (a) {
          var c = a.getVideoElementAPI;
          a = a.logger;
          return b("cr:1473550")
            ? b("cr:1473550").createVideoPlayerImplementationDebugAPI({
                engineExtrasAPI: q,
                getVideoElementAPI: c,
                logger: a,
              })
            : null;
        },
        createVideoPlayerError: function (a, b) {
          return i(a, b, (a = l.current) == null ? void 0 : a.targetSrc);
        },
        debugLog: h,
        debugLogId: e,
        destroyEngineParts: function () {
          r();
        },
        engineExtrasAPI: q,
        engineMetadata: {
          isAbrEnabled: !1,
          isExternalMedia: g.isExternalMedia,
          playerImplementationName: "progressive_v2",
          playerVersion: "comet_progressive",
          streamingFormat: "progressive",
        },
        handleFatalError: f,
        handleVideoElementMounted: n,
        handleVideoElementUnmounted: function () {},
        handleVideoInfoChange: p,
        initialProps: g,
        setExposedStateInReact: a,
      });
      f = e.engine;
      var s = e.getCaptionsInfo,
        t = e.getVideoElement,
        u = e.handleCaptionsInfoChange,
        v = e.handleFatalImplementationError,
        w = e.machine,
        x = e.videoElementAPIRef;
      return f;
    }
    g.createVideoPlayerProgressiveImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerProgressiveImplementationEngine",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = d(
        "VideoPlayerImplementationEngineAPI"
      ).useVideoPlayerImplementationEngine(
        a,
        d("VideoPlayerProgressiveImplementationEngine")
          .createVideoPlayerProgressiveImplementationEngine
      );
      a = a.reactVideoFrameAndComponents;
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileTabTaggedPhotosConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "tagged";
    f.TAGGED_TAB_ID = a;
  },
  66
);
__d(
  "polarisManifestHasUnsupportedCodecs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (window.MediaSource == null || a == null || typeof a !== "string")
        return !1;
      var b = /mimeType=\"([^\"]*)\"\s*codecs=\"([^\"]*)\"/g,
        c;
      while ((c = b.exec(a))) {
        c = c[1] + '; codecs="' + c[2] + '"';
        if (!window.MediaSource.isTypeSupported(c)) return !0;
      }
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "PolarisMobileOzConfigDefaults",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      oz_www_abr_use_download_time: !1,
      oz_www_append_last_segment_if_beyond_end: !1,
      oz_www_allow_queueing_end_of_stream_when_update: !1,
      oz_www_back_off_pdash_504_retry: !1,
      oz_www_bandwidth_ignore_on_stream_write_samples: !1,
      oz_www_bandwidth_use_response_time_adjustment: !1,
      oz_www_buffer_when_waiting: !1,
      oz_www_call_end_of_stream_in_quick_starter: !1,
      oz_www_cancel_tracker_on_append_error: !1,
      oz_www_check_buffer_range_once_for_playhead_update: !1,
      oz_www_cleanup_video_node_on_destroy: !1,
      oz_www_clear_buffer_when_switch_representation_initiator_is_user: !1,
      oz_www_convert_dom_exception_to_oz_error: !1,
      oz_www_copy_new_manifest: !1,
      oz_www_delay_stream_end_for_sourceended: !1,
      oz_www_detach_media_source_manager: !1,
      oz_www_disable_audio_scheduler: !1,
      oz_www_emit_stream_error_event: !1,
      oz_www_enable_abr_for_first_request: !1,
      oz_www_enable_adaptation: !0,
      oz_www_enable_appends_on_wait_update_end_failure: !1,
      oz_www_enable_network_manager_error: !1,
      oz_www_enable_quickdashv2: !1,
      oz_www_estimate_video_bandwidth_only: !1,
      oz_www_exclude_prefetch_bandwidth_samples: !0,
      oz_www_fallback_on_append_error: !1,
      oz_www_fix_abr_default_representation: !1,
      oz_www_fix_quick_starter_overhead: !0,
      oz_www_fix_reload_manifest_retry: !1,
      oz_www_fix_seek_performance: !1,
      oz_www_fix_setup_video_duration_on_representation_switch: !1,
      oz_www_fix_source_buffer_error_logging: !1,
      oz_www_fix_stream_deferred_cancel: !1,
      oz_www_fix_template_duration_artifact_in_manifest: !1,
      oz_www_generate_mos_segment_buffer_diff: !1,
      oz_www_handle_mpd_retries_outside_oz_mpd_updater: !1,
      oz_www_handle_switch_to_unparsed_representation_sidx: !0,
      oz_www_ignore_time_to_response_start: !1,
      oz_www_lazy_parse_sidx: !1,
      oz_www_listen_for_canplay_in_buffering_detector: !1,
      oz_www_live_audio_ibr: !0,
      oz_www_live_catch_up_only_when_paused: !1,
      oz_www_live_disable_mpd_updates_when_paused: !1,
      oz_www_live_gracefully_handle_410: !1,
      oz_www_live_gracefully_handle_mpd_errors: !1,
      oz_www_live_gracefully_handle_no_network: !1,
      oz_www_live_no_segment_when_playhead_is_before_first_segment: !1,
      oz_www_live_playhead_catch_up: !1,
      oz_www_live_query_time_in_range: !1,
      oz_www_load_video_node_on_unload: !1,
      oz_www_log_appended_secs: !1,
      oz_www_maybe_end_stream_if_prepended_segments: !1,
      oz_www_mpd_update_cancel_current_request_tracker: !1,
      oz_www_no_new_loop_body_promise_when_stream_ongoing: !1,
      oz_www_pausable_stream_throws_error_when_aborted: !1,
      oz_www_playhead_manager_handle_timerange_update_on_timeupdate: !1,
      oz_www_queue_data_with_error_handling: !1,
      oz_www_reach_end_only_when_video_ended: !1,
      oz_www_remove_src_attr_on_unload: !1,
      oz_www_respect_initial_representation_on_setup: !1,
      oz_www_retry_fetch_on_prefetch_error: !1,
      oz_www_sbm_abort_on_readable_stream_error: !1,
      oz_www_sbm_check_source_buffer_ready_state_on_cancel: !1,
      oz_www_sbm_recursively_waits_for_update_end: !1,
      oz_www_sbm_waits_for_update_end: !0,
      oz_www_seek_ahead_use_native_current_time: !1,
      oz_www_seek_to_start_quick_starter: !1,
      oz_www_set_source_buffer_append_window_end: !1,
      oz_www_set_stream_anchor_only_on_done_status: !1,
      oz_www_skip_videobuffer_gaps: !0,
      oz_www_skip_videobuffer_gaps_on_buffer_updated: !1,
      oz_www_stable_buffered_timeranges_in_observedsourcebufferstate: !1,
      oz_www_stop_manifest_update_when_static: !1,
      oz_www_suppress_playing_event_while_buffering: !1,
      oz_www_throw_network_error_during_stream: !1,
      oz_www_throw_on_non_zero_r_d_mismatch: !1,
      oz_www_touch_cb_key: !1,
      oz_www_update_bandwidth_cache_on_sample: !1,
      oz_www_update_duration_when_init_appended: !1,
      oz_www_update_live_video_config_on_representation_switch: !1,
      oz_www_update_media_source_duration: !0,
      oz_www_use_abr_for_missing_default_representation: !1,
      oz_www_use_deferred_streaming_task: !1,
      oz_www_use_loose_manifest_updates: !1,
      oz_www_use_performance_entry_on_stream_close: !1,
      oz_www_use_scf_timebased_segments: !1,
      oz_www_use_scheduler: !0,
      oz_www_use_sc_timebased_segments: !1,
      oz_www_use_segment_request_cache: !1,
      oz_www_use_stream_end_time_in_segment_locator: !1,
      oz_www_pdash_use_pdash_segmentlocator: !1,
      oz_www_fix_buffer_ahead_priority_strategy: !1,
      oz_www_fix_prepended_segments_tagging: !1,
      oz_www_xmlparser_use_domparser: !1,
      oz_www_prevent_unnecessary_seek_stream_anchor_reset: !1,
      oz_www_fix_prefetch_xhr_http_status: !0,
    };
    b = {
      oz_www_abr_confidence_threshold: 0.9,
      oz_www_abr_eval_buffer_threshold: 0,
      oz_www_abr_min_bandwidth_samples: 0,
      oz_www_abr_prevent_down_switch_buffer_threshold: 11,
      oz_www_abr_restrict_from_index: 0,
      oz_www_abr_restrict_to_index: 0,
      oz_www_append_byte_target_without_range: 0,
      oz_www_appends_per_segment: 3,
      oz_www_auto_seek_playhead_slack: 0,
      oz_www_bandwidth_boundary_standard_deviation_factor: 1,
      oz_www_bandwidth_estimator_half_life: 6,
      oz_www_bandwidth_estimator_outlier_exclusion_factor: 50,
      oz_www_bandwidth_estimator_std_dev_penalty_factor: 0,
      oz_www_bandwidth_estimator_variance_penalty_down_factor: 0,
      oz_www_bandwidth_estimator_variance_penalty_half_life: 0,
      oz_www_bandwidth_estimator_variance_penalty_up_factor: 0,
      oz_www_bandwidth_penalty_additional_video_start: 0,
      oz_www_bandwidth_penalty_per_additional_video: 0,
      oz_www_bandwidth_response_time_handicap: 0,
      oz_www_buffer_ahead_target: 19,
      oz_www_byte_count_per_sample: 6e4,
      oz_www_default_bandwidth_estimate: 5e5,
      oz_www_download_time_buffer_delta_penalty_factor: 0,
      oz_www_initial_manifest_request_retry_count: 0,
      oz_www_initial_switch_interval: 0,
      oz_www_in_play_buffer_overflow_target: 1,
      oz_www_in_play_buffer_underflow_target: 0.1,
      oz_www_live_audio_ibr_bandwidth_percentage: 0.05,
      oz_www_live_catch_up_fall_behind_threshold: 20,
      oz_www_live_catch_up_live_head_delta: 6,
      oz_www_live_max_try_attempts_on_404: 1,
      oz_www_live_numerical_error_epsilon: 0,
      oz_www_low_buffer_bandwidth_target_increase_factor: 0,
      oz_www_low_buffer_bandwidth_target_threshold: 10,
      oz_www_low_segment_stream_playhead_threshold: 0,
      oz_www_max_bandwidth_sample_count: 30,
      oz_www_max_start_eme_attempts: -1,
      oz_www_maximum_bandwidth_sample_bandwidth: 2e6,
      oz_www_min_block_time_range_interval_ms: 0,
      oz_www_min_eval_interval: 1e3,
      oz_www_minimum_bandwidth_sample_duration: 30,
      oz_www_minimum_bytes_to_sample_on_close: 25e3,
      oz_www_minimum_download_additional_buffer_ms: 0,
      oz_www_min_switch_interval: 5e3,
      oz_www_network_seg_timeout_ms: 0,
      oz_www_paused_stream_segments_count: 2,
      oz_www_per_stream_duration_target: 0,
      oz_www_playhead_nudge_slack: 0,
      oz_www_playhead_manager_timeupdate_throttle_ms: 1e3,
      oz_www_pixels_below_viewport_to_observe: 0,
      oz_www_pixels_above_viewport_to_observe: 0,
      oz_www_pre_start_buffer_ahead_target: 10,
      oz_www_resolution_constraint_factor: 2,
      oz_www_sbm_read_timeout_ms: 0,
      oz_www_seconds_to_stream: 0,
      oz_www_seconds_to_stream_near_bandwidth_boundary: 0,
      oz_www_seek_ahead_epsilon: 0,
      oz_www_segments_to_stream: 5,
      oz_www_segments_to_stream_near_bandwidth_boundary: 5,
      oz_www_segments_to_stream_under_playhead_threshold: 0,
      oz_www_skip_videobuffer_gaps_max_gap_size_sec: 0,
      oz_www_start_buffer_underflow_target: 0.1,
      oz_www_stream_interrupt_check_mpd_stale_count_threshold: 0,
      oz_www_tagged_time_range_per_append_throttle: 0,
      oz_www_timeline_offset_threshold: 0,
      oz_www_time_to_first_byte_estimate_half_life_ms: 500,
      oz_www_prioritize_by_viewport_static_penalty: 0,
      oz_www_partial_playback_buffer_overflow: 0,
    };
    c = {
      oz_www_bandwidth_cache_key: "bandwidthEstimate",
      oz_www_block_representation_status_codes_json: "[500]",
      oz_www_network_end_broadcasts_json: "[]",
      oz_www_network_reload_mpd_json: "[]",
      oz_www_network_retry_intervals_json:
        '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}',
      oz_www_network_skip_json: "[]",
      oz_www_stream_types_eligible_for_partial_playback: "",
    };
    f.defaultBools = a;
    f.defaultNumbers = b;
    f.defaultStrings = c;
  },
  66
);
__d(
  "PolarisVideoHelpers",
  ["PolarisMediaTypes", "PolarisSizing", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a.dashInfo == null) return null;
      a = a.dashInfo;
      var b = a.is_dash_eligible,
        c = a.number_of_qualities;
      a = a.video_dash_manifest;
      return !b || a == null
        ? null
        : { isDashEligible: b, videoDashManifest: a, numberOfQualities: c };
    }
    function h(a, b) {
      return (a = a.videoResources) == null
        ? void 0
        : a.find(function (a) {
            return a.type === b;
          });
    }
    function b(a) {
      var b;
      return (b =
        (b = h(a, d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH)) ==
        null
          ? void 0
          : b.src) != null
        ? b
        : (b = h(a, d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW)) ==
          null
        ? void 0
        : b.src;
    }
    function e(a) {
      return (a = h(
        a,
        d("PolarisMediaTypes").MediaVersionType.VIDEO_640_HIGH
      )) == null
        ? void 0
        : a.src;
    }
    function f(a) {
      return {
        canAutoplay: a === !0 ? "allow" : "deny",
        autoplaySetting: a === !0 ? "default_autoplay" : "off",
        autoplayGatingResult: "unknown",
      };
    }
    function i(a) {
      var b;
      a != null
        ? ((b = c("err")(
            "Cannot play video: " +
              a.message +
              " and no progressive URL is available"
          )),
          a.name && (b.name = a.name))
        : ((b = c("err")("Cannot play video: No progressive URL is available")),
          (b.name = "VideoImplementationsNoProgressiveURL"));
      b.project = "comet_video_player";
      throw b;
    }
    function j(a, b) {
      if (a == null) return 100;
      a = d("PolarisSizing").getHeightPercent(a);
      return b ? Math.min(a, d("PolarisSizing").CAPPED_HEIGHT_PERCENT) : a;
    }
    g.getDashInfoFromPost = a;
    g.getSDVideoSrcFromPost = b;
    g.getHDVideoSrcFromPost = e;
    g.getVideoPlayerAutoplayProps = f;
    g.throwEmptyImplementationsError = i;
    g.getVideoPaddingPercentFromDimensions = j;
  },
  98
);
__d(
  "shouldUseOzOnPolaris",
  [
    "PolarisODS",
    "gkx",
    "memoizeWithArgs",
    "polarisManifestHasUnsupportedCodecs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b;
      c("gkx")("5754") || (b = "oz_player_browser_version_failed");
      c("polarisManifestHasUnsupportedCodecs")(a) &&
        (b = "oz_player_manifest_has_unsupported_codecs");
      window.MediaSource || (b = "oz_player_media_source_failed");
      window.fetch || (b = "oz_player_no_fetch_failed");
      window.ReadableStream || (b = "oz_player_no_readable_stream_failed");
      if (b) {
        c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
          "web.polaris_video_x." + b
        );
        return !1;
      }
      c("PolarisODS").incr("web.polaris_video_x.oz_compatible");
      return !0;
    }
    a = c("memoizeWithArgs")(
      function (a) {
        return h(a);
      },
      function (a) {
        return JSON.stringify((a = a) != null ? a : null);
      }
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "usePolarisOzImplementation",
  ["JSResource", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i;
    function a(a) {
      var b = a.forceProgressiveImpl;
      h(
        function () {
          i == null &&
            !b &&
            c("JSResource").loadAll(
              [
                c("JSResource")("VideoPlayerOzImplementationV2.react").__setRef(
                  "usePolarisOzImplementation"
                ),
              ],
              function (a) {
                i = a;
              }
            );
        },
        [b]
      );
      return i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzWWWConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "oz_www_";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getBool = function (a, b) {
        return this.$1.getBool(g + a, b);
      };
      b.getNumber = function (a, b) {
        return this.$1.getNumber(g + a, b);
      };
      b.getString = function (a, b) {
        return this.$1.getString(g + a, b);
      };
      b.setContext = function (a, b) {
        this.$1.setContext(a, b);
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "usePolarisOzImplementationData",
  ["VideoPlayerOzImplementationData", "VideoPlayerOzWWWConfig", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.dashInfo,
        e = a.videoPlayerConfig,
        f = h(
          function () {
            return new (c("VideoPlayerOzWWWConfig"))(e);
          },
          [e]
        );
      return h(
        function () {
          return d("VideoPlayerOzImplementationData").makeOzImplementationData({
            canUseOz: b == null ? void 0 : b.isDashEligible,
            dashManifest: b == null ? void 0 : b.videoDashManifest,
            dashUrl: b == null ? void 0 : b.videoDashUrl,
            experimentationConfig: f,
            minQualityPreference: null,
            videoFBID: "",
          });
        },
        [
          b == null ? void 0 : b.isDashEligible,
          b == null ? void 0 : b.videoDashManifest,
          b == null ? void 0 : b.videoDashUrl,
          f,
        ]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisProgressiveImplementationData",
  ["VideoPlayerProgressiveImplementationData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.hdSrc,
        c = a.hdSrcPreferred;
      a = a.sdSrc;
      return d(
        "VideoPlayerProgressiveImplementationData"
      ).makeProgressiveImplementationData({
        hdSrc: b,
        hdSrcPreferred: c,
        isExternalMedia: !1,
        sdSrc: a,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerShakaConfigContextProvider",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.setContext = function (a, b) {
        if (this.$1[a] !== b) {
          var c;
          this.$1 = babelHelpers["extends"](
            {},
            this.$1,
            ((c = {}), (c[a] = b), c)
          );
        }
      };
      b.setAllContexts = function (a) {
        this.$1 = a;
      };
      b.getAllContexts = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerShakaConfig",
  [
    "VideoPlayerContextSensitiveConfigResolver",
    "VideoPlayerShakaConfigContextProvider",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {};
    a = (function () {
      function a(a, b, d) {
        (this.$1 = new (c("VideoPlayerShakaConfigContextProvider"))()),
          (this.$2 = b || null),
          (this.$3 = new (c("VideoPlayerContextSensitiveConfigResolver"))(d)),
          this.$3.setContexts(a || {}),
          a && this.$1.setAllContexts(a);
      }
      a.setGlobalOverrideConfig = function (a) {
        h = a;
      };
      var b = a.prototype;
      b.setContext = function (a, b) {
        var c = this.$1.getAllContexts();
        this.$1.setContext(a, b);
        a = this.$1.getAllContexts();
        c !== a && this.$3.setContexts(a);
      };
      b.setOverrideConfig = function (a) {
        this.$2 = a;
      };
      b.getBool = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "boolean" ? a : b;
      };
      b.getNumber = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "number" ? a : b;
      };
      b.getString = function (a, b) {
        a = this.$4(a, b);
        return typeof a === "string" ? a : b;
      };
      b.getAllContexts = function () {
        return this.$1.getAllContexts();
      };
      b.$4 = function (a, b) {
        if (!!h && typeof h[a] === typeof b) return h[a];
        if (typeof this.$3.getValue(a) === typeof b) return this.$3.getValue(a);
        return !!this.$2 && typeof this.$2[a] === typeof b ? this.$2[a] : null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "getPolarisOzConfigValues",
  ["PolarisMobileOzConfigDefaults", "PolarisUA"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = {},
        c;
      ({});
      c = babelHelpers["extends"](
        {},
        d("PolarisMobileOzConfigDefaults").defaultBools,
        d("PolarisMobileOzConfigDefaults").defaultNumbers,
        d("PolarisMobileOzConfigDefaults").defaultStrings
      );
      return babelHelpers["extends"]({}, a, b, c);
    }
    function i(a) {
      return babelHelpers["extends"]({}, a);
    }
    function a() {
      var a = {
        oz_www_use_src_object_for_media_source: !0,
        oz_www_use_systemic_risk_abr: !0,
      };
      return d("PolarisUA").isMobile() ? h(a) : i(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisVideoPlayerShakaConfig",
  [
    "VideoPlayerConnectionQuality",
    "VideoPlayerOzWWWGlobalConfig",
    "VideoPlayerShakaConfig",
    "getPolarisOzConfigValues",
    "oz-player/networks/OzBandwidthEstimator",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.isAd,
        e = a.isLive;
      return c("useStable")(function () {
        return new (c("VideoPlayerShakaConfig"))(
          {
            connection_quality: d("VideoPlayerConnectionQuality").evaluate(
              function () {
                return c(
                  "oz-player/networks/OzBandwidthEstimator"
                ).getBandwidth(c("VideoPlayerOzWWWGlobalConfig"));
              }
            ),
            content_category: "general",
            fbls_tier: "user",
            is_ad: b === !0,
            is_latency_sensitive_broadcast: !1,
            is_live: e === !0,
            is_spherical: !1,
            latency_level: "normal",
            player_format: "inline",
            servable_via_fmbs: !1,
            streaming_implementation: "default",
          },
          {},
          {
            staticValues: c("getPolarisOzConfigValues")(),
            contextSensitiveValues: {},
          }
        );
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisVideoImplementations",
  [
    "FBLogger",
    "PolarisVideoHelpers",
    "VideoPlayerProgressiveImplementationV2.react",
    "cr:1079",
    "react",
    "usePolarisOzImplementation",
    "usePolarisOzImplementationData",
    "usePolarisProgressiveImplementationData",
    "usePolarisVideoPlayerShakaConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    function a(a) {
      var e,
        f = a.dashInfo,
        g = a.forceProgressiveImpl,
        i = a.hdSrc,
        j = a.hdSrcPreferred,
        k = a.isAd,
        l = a.isLive;
      a = a.sdSrc;
      var m = [];
      k = c("usePolarisVideoPlayerShakaConfig")({ isAd: k, isLive: l });
      l = c("usePolarisOzImplementation")({ forceProgressiveImpl: g });
      e = h((e = b("cr:1079")) != null ? e : l);
      l = null;
      f = c("usePolarisOzImplementationData")({
        dashInfo: f,
        videoPlayerConfig: k,
      });
      if (f instanceof Error) l = f;
      else {
        k = f;
        if (k.manifest == null && k.manifestUrl == null)
          throw c("FBLogger")("comet_video_player").mustfixThrow(
            "If ozImplementationData exists, it should have either manifest or manifestUrl"
          );
        !g &&
          e.current != null &&
          m.push({
            Component: e.current,
            data: k,
            typename: "VideoPlayerOzImplementation",
          });
      }
      g = c("usePolarisProgressiveImplementationData")({
        hdSrc: i,
        sdSrc: a,
        hdSrcPreferred: (f = j) != null ? f : !1,
      });
      g != null &&
        m.push({
          Component: c("VideoPlayerProgressiveImplementationV2.react"),
          data: g,
          typename: "VideoPlayerProgressiveImplementation",
        });
      m.length === 0 &&
        d("PolarisVideoHelpers").throwEmptyImplementationsError(l);
      return m;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisVideo.react",
  [
    "PolarisConfig",
    "PolarisVideoHelpers",
    "VideoPlayerRetryableErrorBoundary.react",
    "VideoPlayerSurface.react",
    "VideoPlayerX.react",
    "computeAspectRatio",
    "defaultErrorBoundaryFallback",
    "react",
    "shouldUseOzOnPolaris",
    "usePolarisVideoImplementations",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.autoplay,
        e = a.children,
        f = a.dashInfo,
        g = a.hdSrc,
        i = a.hdSrcPreferred,
        j = a.isAd,
        k = a.isLive,
        l = a.loopCount,
        m = a.mediaId,
        n = a.originalHeight,
        o = a.originalWidth,
        p = a.renderVideoPixelsFit;
      a = a.sdSrc;
      var q = c("shouldUseOzOnPolaris")(
        f == null ? void 0 : f.videoDashManifest
      );
      q = d("PolarisConfig").isIOS() || !q;
      a = c("usePolarisVideoImplementations")({
        sdSrc: a,
        hdSrc: g,
        hdSrcPreferred: i,
        dashInfo: f,
        isAd: j,
        isLive: k,
        forceProgressiveImpl: q,
      });
      g = d("PolarisVideoHelpers").getVideoPlayerAutoplayProps(b);
      i = c("computeAspectRatio")(o, n);
      return h.jsx(
        c("VideoPlayerX.react"),
        babelHelpers["extends"](
          {
            disableLoadingIndicator: !0,
            disableLogging: !0,
            doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn: !0,
            implementations: a,
            loopCount: l,
            portalingEnabled: !1,
            preloadForProgressiveDisabled: !0,
            renderVideoPixelsFit: p,
            subOrigin: "inline",
            videoFBID: m,
            videoPixelsAspectRatio: i,
          },
          g,
          {
            children:
              (f = e) != null ? f : h.jsx(c("VideoPlayerSurface.react"), {}),
          }
        )
      );
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      return h.jsx(c("VideoPlayerRetryableErrorBoundary.react"), {
        description: "PolarisVideoX",
        fallback: c("defaultErrorBoundaryFallback"),
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MaybeNativePromise",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = a.Promise || b("Promise");
    b("Promise").resolve();
    d = c;
    f["default"] = d;
  },
  66
);
