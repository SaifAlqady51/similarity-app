/*FB_PKG_DELIM*/

__d(
  "IGDSCalendarPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M22 8.997H2l-.117.007A1 1 0 0 0 1 9.997v10.001l.005.176A3 3 0 0 0 4 22.998h16l.176-.005A3 3 0 0 0 23 19.998v-10l-.007-.117A1 1 0 0 0 22 8.997ZM7 19.111a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm0-4.445a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm5 4.445a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm0-4.445a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm5 4.445a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm0-4.445a1.001 1.001 0 1 1 1.001-1.001 1 1 0 0 1-1 1Zm5.995-9.845A3 3 0 0 0 20 1.998h-1.5a1.5 1.5 0 0 0-3 0h-7a1.5 1.5 0 0 0-3 0H4l-.176.005A3 3 0 0 0 1 4.998v1l.007.116A1 1 0 0 0 2 6.997h20l.117-.007A1 1 0 0 0 23 5.997v-1Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisUpcomingEventIcon.react",
  [
    "IGDSBox.react",
    "IGDSCalendarPanoFilledIcon",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("IGDSBox.react"), {
        margin: 2,
        position: "relative",
        children: h.jsx(c("IGDSCalendarPanoFilledIcon"), {
          alt: d("PolarisGenericStrings").UPCOMING_EVENT_ICON_ALT,
          color: "web-always-white",
          size: 18,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisInstagramWebPostPageFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_web_post_page",
          a(),
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
  "polarisPostModalHelpers",
  [
    "fbt",
    "PolarisConfig",
    "PolarisInstagramWebPostPageFalcoEvent",
    "justknobx",
    "polarisUnexpected",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 1032,
      j = 55,
      k = 500,
      l = 250,
      m = h._("Previous");
    h = h._("Next");
    var n = -1,
      o = 1;
    function a(a) {
      var b = "";
      switch (a) {
        case "profilePage":
        case "selfProfilePage":
          b = "profilePageModal";
          break;
        case "locationPage":
          b = "locationPageModal";
          break;
        case "tagPage":
          b = "tagPageModal";
          break;
        case "exploreLandingPage":
          b = "discoverMediaPageModal";
          break;
        case "GuidePage":
          b = "guidePageModal";
          break;
        case "DirectThreadPage":
          b = "directThreadPageModal";
          break;
        case "ClipsAudioPage":
          b = "clipsAudioPageModal";
          break;
        case "feedPage":
          b = "feedPageModal";
          break;
        case "KeywordSearchExplorePage":
          b = "keywordSearchExplorePageModal";
          break;
        case "adsActivityFeed":
          b = "adActivityFeedModal";
          break;
        case "ExploreSERPPage":
          b = "ExploreSERPPageModal";
          break;
        default:
          c("polarisUnexpected")("Unexpected analytics context: " + a);
      }
      return b;
    }
    function b(a) {
      a = a.match(new RegExp("^(.+/)(saved)/(.+)/(.+)/"));
      return a != null ? a[4] : null;
    }
    function e(a) {
      return !!a.match(new RegExp("/p/"));
    }
    function f(a) {
      a = a.match(new RegExp("/([^/]+)/[^/]*$"));
      return a ? a[1] : null;
    }
    function p(a, b, c, d) {
      if (a.height > a.width) {
        var e = c / a.height;
        d.style.maxHeight = c;
        d.style.maxWidth = a.width * e;
        d.style.aspectRatio = a.width + " / " + a.height;
      } else
        b && (d.style.aspectRatio = "1"),
          (d.style.maxHeight = c),
          (d.style.maxWidth = c);
      return d;
    }
    function q(a, b, c, d) {
      c.style.maxWidth = b;
      b = b / a.width;
      c.style.maxHeight = a.height * b + d;
      c.style.aspectRatio = a.width * b + " / " + (a.height * b + d);
      return c;
    }
    function r(a) {
      var b = a.dimensions,
        d = a.footerHeight;
      d = d === void 0 ? j : d;
      var e = a.viewportHeight,
        f = a.viewportWidth,
        g = a.hasSidebarInRedesign;
      a = a.hasFooter;
      a = a === void 0 ? !1 : a;
      if (b == null || e === 0 || f === 0) return null;
      var h = { style: { maxHeight: 0, maxWidth: 0 } },
        m = f - 64 * 2 - (g ? k : 0);
      if (b) {
        var n = e > f && a === !0 ? m : g ? e - 24 * 2 : e - 24 * 2 - l;
        n > i && c("justknobx")._("64") && (n = i);
        if (a === !1) h = p(b, g, n, h);
        else {
          a = b.height;
          a = (n - d) / a;
          h.style.maxHeight = n;
          !g
            ? (h = q(b, n, h, d))
            : b.height >= b.width
            ? e > f
              ? (h = q(b, n, h, d))
              : b.width * a > m
              ? (h = q(b, m, h, d))
              : ((h.style.maxHeight = n),
                (h.style.aspectRatio =
                  b.width * a + " / " + (b.height * a + d)),
                (h.style.maxWidth = b.width * a))
            : ((h.style.aspectRatio =
                b.width * a > b.height * a + d
                  ? "1"
                  : b.width * a + " / " + (b.height * a + d)),
              (h.style.maxWidth =
                e > f ? n : b.width * a > b.height * a + d ? n : b.width * a));
        }
        g && (h.style.flexBasis = h.style.maxWidth);
      }
      return h;
    }
    function s(a, b, e) {
      c("PolarisInstagramWebPostPageFalcoEvent").log(function () {
        return {
          appid: Number(d("PolarisConfig").getIGAppID()),
          containermodule: a,
          event_name: "post_modal_open",
          frontend_env: d("PolarisConfig").getFrontendEnv(),
          in_modal: !0,
          media_type: b,
          site_entrypoint: e,
        };
      });
    }
    g.PREVIOUS_ARROW_TITLE = m;
    g.NEXT_ARROW_TITLE = h;
    g.LEFT_DELTA = n;
    g.RIGHT_DELTA = o;
    g.getModalPageIdFromAnalyticsContext = a;
    g.getCollectionIdFromPath = b;
    g.isPostUrl = e;
    g.getPostCodeFromPath = f;
    g.getMediaContainerProps = r;
    g.logPostModalOpen = s;
  },
  98
);
__d(
  "PolarisSidecarIcon.react",
  [
    "IGDSBox.react",
    "IGDSMediaCarouselFilledIcon",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("IGDSBox.react"), {
        margin: 2,
        position: "relative",
        children: h.jsx(c("IGDSMediaCarouselFilledIcon"), {
          alt: d("PolarisGenericStrings").MEDIA_CAROUSEL_ALT,
          color: "web-always-white",
          size: 22,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFrameDropWatcher",
  ["Promise", "polarisRequestIdleCallback", "polarisUnexpected"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
      i = 100,
      j = (function () {
        function a(a) {
          (this.$1 = 0), (this.$2 = 0), (this.$3 = 0), (this.$4 = a);
        }
        var b = a.prototype;
        b.process = function (a, b) {
          if (this.$4 == null) return;
          var c = this.$4;
          a = Math.max(0, Math.round((a - b) / c) - 1);
          b = Math.min(a, i);
          b > 0 && (this.$1 += b);
          b >= h && (this.$2 += b / h);
          this.$3 += (b + 1) * c;
        };
        b.getResult = function () {
          return {
            smallFrameDrops: this.$1,
            largeFrameDrops: this.$2,
            durationMillis: this.$3,
            frameIntervalMillis: this.$4,
          };
        };
        b.reset = function (a) {
          (this.$1 = 0), (this.$2 = 0), (this.$3 = 0), (this.$4 = a);
        };
        return a;
      })(),
      k = (function () {
        function a() {}
        a.runEstimate = function () {
          if (a.status !== "none") return;
          a.status = "estimating";
          a.$4().then(
            function (b) {
              b >= a.$2 && b <= a.$3
                ? ((a.interval = b), (a.status = "ready"))
                : --a.$1 > 0 && (a.status = "none");
            },
            function (a) {
              c("polarisUnexpected")(a);
            }
          );
        };
        a.$4 = function () {
          return new (b("Promise"))(function (b, c) {
            var e = 5,
              f = Number.MAX_VALUE,
              g = function g() {
                a.$5()
                  .then(function (a) {
                    a < f && (f = a);
                    if (--e > 0) {
                      a = 500;
                      d("polarisRequestIdleCallback").requestIdleCallback(g, {
                        timeout: a,
                      });
                    } else b(f);
                  })
                  ["catch"](function (a) {
                    c(a);
                  });
              };
            g();
          });
        };
        a.$5 = function () {
          return new (b("Promise"))(function (b, c) {
            var d = 6,
              e = 0,
              f = Number.MAX_VALUE;
            c = function c(g) {
              if (e !== 0) {
                var h = g - e;
                h < f && h >= a.$2 && (f = h);
              }
              e = g;
              --d > 0 ? window.requestAnimationFrame(c) : b(f);
            };
            window.requestAnimationFrame(c);
          });
        };
        return a;
      })();
    k.interval = null;
    k.status = "none";
    k.$1 = 5;
    k.$2 = 15;
    k.$3 = 50;
    a = (function () {
      a.isBrowserSupported = function () {
        return (
          typeof window.requestAnimationFrame === "function" &&
          typeof window.cancelAnimationFrame === "function" &&
          window.performance !== void 0 &&
          typeof window.performance.now === "function" &&
          typeof document.hasFocus === "function" &&
          "visibilityState" in document
        );
      };
      function a(a) {
        var b = this;
        this.$2 = !1;
        this.$3 = null;
        this.$4 = null;
        this.$7 = function () {
          document.hidden && b.$9();
        };
        this.$8 = function () {
          b.$9();
        };
        this.$6 = function (a) {
          b.$3 != null && b.$5.process(a, b.$3),
            b.$2
              ? ((b.$3 = window.performance.now()),
                (b.$4 = window.requestAnimationFrame(b.$6)))
              : ((b.$4 = null), b.$10());
        };
        this.$1 = a;
        this.$5 = new j(k.interval);
      }
      var b = a.prototype;
      b.start = function () {
        if (!a.isBrowserSupported()) return;
        if (k.status !== "ready") return;
        if (this.$2 || document.hidden || !document.hasFocus()) return;
        this.$2 = !0;
        this.$5.reset(k.interval);
        this.$4 = window.requestAnimationFrame(this.$6);
        document.addEventListener("visibilitychange", this.$7, !1);
        window.addEventListener("blur", this.$8, !1);
      };
      b.stop = function () {
        if (!a.isBrowserSupported()) return;
        k.runEstimate();
        this.$2 = !1;
      };
      b.$9 = function () {
        this.stop(),
          this.$4 !== null &&
            (window.cancelAnimationFrame(this.$4),
            (this.$4 = null),
            this.$10());
      };
      b.$10 = function () {
        var a = this.$5.getResult();
        this.$5.reset(k.interval);
        this.$3 = null;
        this.$2 = !1;
        document.removeEventListener("visibilitychange", this.$7, !1);
        window.removeEventListener("blur", this.$8, !1);
        this.$1(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisScrollPerfMonitor",
  [
    "PolarisConfig",
    "PolarisFrameDropWatcher",
    "PolarisLogger",
    "requestIdleCallback",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a) {
        var b = this;
        this.$2 = 0;
        this.$3 = null;
        this.$4 = function () {
          if (--b.$2 > 0) return;
          b.$3 !== null && (window.clearInterval(b.$3), (b.$3 = null));
          b.$1.onScrollEnd();
        };
        this.$1 = a;
      }
      var b = a.prototype;
      b.onScroll = function () {
        (this.$2 = a.IDLE_INTERVAL_COUNT),
          this.$3 === null &&
            (this.$1.onScrollStart(),
            (this.$3 = window.setInterval(this.$4, a.CHECK_INTERVAL)));
      };
      return a;
    })();
    h.CHECK_INTERVAL = 50;
    h.IDLE_INTERVAL_COUNT = 5;
    var i =
      ((a = window) == null
        ? void 0
        : (b = a.performance) == null
        ? void 0
        : (e = b.timing) == null
        ? void 0
        : e.navigationStart) || Date.now();
    f = (function () {
      a.shouldEnableMonitoring = function () {
        return !c("PolarisFrameDropWatcher").isBrowserSupported()
          ? !1
          : d("PolarisConfig").enableInCurrentDeployment(a.ENABLE_PERCENTAGE);
      };
      function a(a) {
        var b = this;
        this.$2 = !1;
        this.onScroll = function () {
          if (!b.$2) return;
          b.$1.onScroll();
        };
        this.$5 = function () {
          b.$3.start();
        };
        this.$6 = function () {
          b.$3.stop();
        };
        this.$7 = function (a) {
          var c,
            e =
              a.frameIntervalMillis != null && a.frameIntervalMillis > 0
                ? Math.round(1e3 / a.frameIntervalMillis)
                : null;
          c = (
            (c = window) == null
              ? void 0
              : (c = c.performance) == null
              ? void 0
              : c.now
          )
            ? i + window.performance.now()
            : Date.now();
          d("PolarisLogger").logScrollPerfEvent({
            containerModule: b.$4,
            smallFrameDrops: a.smallFrameDrops,
            largeFrameDrops: a.largeFrameDrops,
            displayRefreshRate: e,
            scrollDurationMillis: Math.round(a.durationMillis),
            startupTimestampMillis: i,
            currentTimestampMillis: c,
          });
        };
        this.$1 = new h({ onScrollStart: this.$5, onScrollEnd: this.$6 });
        this.$3 = new (c("PolarisFrameDropWatcher"))(this.$7);
        this.$4 = a;
        c("requestIdleCallback")(function () {
          b.$2 = !0;
        });
      }
      return a;
    })();
    f.ENABLE_PERCENTAGE = 5;
    g["default"] = f;
  },
  98
);
__d(
  "PolarisClipIndicator.react",
  ["fbt", "IGDSBox.react", "IGDSReelsPanoFilledIcon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.size;
      a = a === void 0 ? 24 : a;
      var b = h._("Clip");
      return i.jsx(c("IGDSBox.react"), {
        margin: 2,
        position: "relative",
        children: i.jsx(c("IGDSReelsPanoFilledIcon"), {
          alt: b,
          color: "web-always-white",
          size: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisResponsiveImageV2.react",
  ["polarisGetCrossOriginAttribute", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.alt,
        d = a.className,
        e = a.imageCandidates;
      a = a.style;
      e = e
        .map(function (a) {
          return a.src + " " + a.configWidth + "w";
        })
        .join(",");
      return h.jsx("img", {
        alt: b,
        className: d,
        crossOrigin: c("polarisGetCrossOriginAttribute")(),
        srcSet: e,
        style: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPhoto.react",
  [
    "cx",
    "PolarisBatchDOM",
    "PolarisMonitorErrors",
    "PolarisResponsiveImage.react",
    "PolarisResponsiveImageV2.react",
    "PolarisSizing",
    "PolarisTimer",
    "err",
    "gkx",
    "joinClasses",
    "polarisGetCrossOriginAttribute",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        image: {
          height: "x5yr21d",
          left: "xu96u03",
          position: "x10l6tqk",
          top: "x13vifvy",
          userSelect: "x87ps6o",
          width: "xh8yej3",
          $$css: !0,
        },
      },
      k = c("gkx")("4781") === !0;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$2 = !1;
        e.$3 = !1;
        e.$4 = 0;
        e.$5 = function () {
          if (e.$2) return;
          d("PolarisBatchDOM").mutate(function () {
            if (e.$2) return;
            e.$3 = !0;
            var a = e.$1;
            if (a == null) {
              d("PolarisMonitorErrors").logError(
                c("err")(
                  "image element ref in PolarisPhoto was unexpectedly nullish"
                )
              );
              return;
            }
            a.style.visibility = "";
            var b = e.props.onPhotoRendered;
            b && b(a.currentSrc || a.src, d("PolarisTimer").now() - e.$4);
          });
        };
        e.$7 = function (a) {
          e.$1 = a;
        };
        b.onPhotoRendered && (e.$4 = d("PolarisTimer").now());
        return e;
      }
      var e = b.prototype;
      e.$6 = function (a) {
        var b = 1 / (a.crop_right - a.crop_left),
          c = 0.5 - 0.5 / b,
          d = (c - a.crop_left) * 100;
        c = (c - a.crop_top) * 100;
        return {
          height: "auto",
          objectFit: "contain",
          transform:
            "scale(" + b + ") translateX(" + d + "%) translateY(" + c + "%)",
        };
      };
      e.componentWillUnmount = function () {
        this.$2 = !0;
      };
      e.componentDidMount = function () {
        var a = this.props.srcSet;
        if (a == null || !a.length) {
          ((a = this.$1) == null ? void 0 : a.complete) === !0 && this.$5();
        }
      };
      e.$8 = function (a) {
        if (a == null) return !0;
        a = new Set(Object.values(a));
        return a.size === 1 && a.has(0);
      };
      e.renderImage = function () {
        var a = this,
          b = this.props.rich !== !0 || this.$3 || k,
          d = this.props,
          e = d.felixProfileGridCrop,
          f = d.ignoreSrcSet,
          g = d.imgXstyle;
        d = d.setCrossOriginToUndefinedDONOTUSE;
        b = { visibility: b ? null : "hidden", objectFit: "cover" };
        e != null &&
          !this.$8(e) &&
          (b = babelHelpers["extends"]({}, b, this.$6(e)));
        var h = {
            className: c("stylex")(j.image, g),
            onError: this.$5,
            onLoad: this.$5,
            src: this.props.src,
            style: b,
          },
          l =
            this.props.accessibilityCaption !== null
              ? this.props.accessibilityCaption
              : this.props.caption;
        f = f === !0 && e != null;
        e = this.props.srcSet;
        if (e != null && e.length > 0 && !f)
          if (k)
            return i.jsx(c("PolarisResponsiveImageV2.react"), {
              alt: l,
              className: c("stylex")(j.image, g),
              imageCandidates: e,
              style: b,
            });
          else
            return i.jsx(
              c("PolarisResponsiveImage.react"),
              babelHelpers["extends"]({ alt: l, imgRef: this.$7, srcSet: e }, h)
            );
        return i.jsx(
          "img",
          babelHelpers["extends"](
            {
              alt: l,
              crossOrigin:
                d === !0 ? void 0 : c("polarisGetCrossOriginAttribute")(),
              ref: function (b) {
                return (a.$1 = b);
              },
            },
            h
          )
        );
      };
      e.render = function () {
        var a = this.props,
          b = a.className,
          e = a.customHeightPercent,
          f = a.dimensions,
          g = a.onClick;
        a = a.placeholderClassName;
        var h = {};
        g && (h = { onClick: g, role: "button", tabIndex: "-1" });
        g = {};
        f &&
          (g.style = {
            paddingBottom: d("PolarisSizing").getHeightPercent(f) + "%",
          });
        e != null && e !== "" && (g.style = { paddingBottom: e });
        return i.jsxs(
          "div",
          babelHelpers["extends"](
            { className: c("joinClasses")("_aagu", b) },
            h,
            {
              children: [
                i.jsx(
                  "div",
                  babelHelpers["extends"]({}, g, {
                    className: c("joinClasses")("_aagv", a),
                    children: this.renderImage(),
                  })
                ),
                i.jsx("div", { className: "_aagw" }),
              ],
            }
          )
        );
      };
      return b;
    })(i.PureComponent);
    a.defaultProps = { rich: !1, setCrossOriginToUndefinedDONOTUSE: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisVideoIndicator.react",
  ["IGDSBox.react", "IGDSPlayPanoFilledIcon", "PolarisGenericStrings", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("IGDSBox.react"), {
        margin: 2,
        position: "relative",
        children: h.jsx(c("IGDSPlayPanoFilledIcon"), {
          alt: d("PolarisGenericStrings").PLAY_BUTTON_ALT,
          color: "web-always-white",
          size: 18,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisLoggedOutReelsUnitAutoplayVideoPreview_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisLoggedOutReelsUnitAutoplayVideoPreview_media",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XDTVideoVersion",
          kind: "LinkedField",
          name: "video_versions",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      type: "XDTMediaDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisLoggedOutReelsUnitCardItemFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisLoggedOutReelsUnitCardItemFragment_media",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XDTImageVersion2",
          kind: "LinkedField",
          name: "image_versions2",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XDTImageCandidate",
              kind: "LinkedField",
              name: "candidates",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "width",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "code",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "play_count",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisLoggedOutReelsUnitAutoplayVideoPreview_media",
        },
      ],
      type: "XDTMediaDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "IGDSPlayPanoOutline24Icon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M4.664 21.172a2.441 2.441 0 0 1-1.22-2.116V4.944a2.444 2.444 0 0 1 3.667-2.12l12.222 7.057a2.444 2.444 0 0 1 0 4.235L7.111 21.172a2.446 2.446 0 0 1-2.447 0Z",
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "react-relay/relay-hooks/useClientQuery",
  ["react-relay/relay-hooks/useLazyLoadQuery"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
      a = a;
      return b("react-relay/relay-hooks/useLazyLoadQuery")(
        a,
        c,
        babelHelpers["extends"]({}, d, { fetchPolicy: "store-only" })
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayHooks",
  [
    "RelayFBEnvironmentActorID",
    "configureRelayForWWW",
    "react-relay/relay-hooks/EntryPointContainer.react",
    "react-relay/relay-hooks/RelayEnvironmentProvider",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/preloadQuery_DEPRECATED",
    "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
    "react-relay/relay-hooks/useClientQuery",
    "react-relay/relay-hooks/useEntryPointLoader",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "react-relay/relay-hooks/usePaginationFragment",
    "react-relay/relay-hooks/usePreloadedQuery",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRefetchableFragment",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useSubscribeToInvalidationState",
    "relay-runtime",
    "relay-runtime/query/PreloadableQueryRegistry",
    "useFBMutation__TEMPORARY",
    "useFBSubscription",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("RelayFBEnvironmentActorID").useActorID;
    c = b("react-relay/relay-hooks/loadQuery").loadQuery;
    d = b("relay-runtime").fetchQuery;
    f = b("relay-runtime").graphql;
    var g = b("relay-runtime").readInlineData;
    b("configureRelayForWWW")();
    e.exports = {
      EntryPointContainer: b(
        "react-relay/relay-hooks/EntryPointContainer.react"
      ),
      PreloadableQueryRegistry: b(
        "relay-runtime/query/PreloadableQueryRegistry"
      ),
      RelayEnvironmentProvider: b(
        "react-relay/relay-hooks/RelayEnvironmentProvider"
      ),
      fetchQuery: d,
      graphql: f,
      loadQuery: c,
      loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
      preloadQuery_DEPRECATED: b(
        "react-relay/relay-hooks/preloadQuery_DEPRECATED"
      ),
      prepareEntryPoint_DEPRECATED: b(
        "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED"
      ),
      readInlineData: g,
      useActorID: a,
      useClientQuery: b("react-relay/relay-hooks/useClientQuery"),
      useFragment: b("react-relay/relay-hooks/useFragment"),
      useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
      useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
      useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
      usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
      useMutation: b("useFBMutation__TEMPORARY"),
      useMutation__TEMPORARY: b("useFBMutation__TEMPORARY"),
      usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
      useRefetchableFragment: b(
        "react-relay/relay-hooks/useRefetchableFragment"
      ),
      useRelayEnvironment: b("react-relay/relay-hooks/useRelayEnvironment"),
      useSubscribeToInvalidationState: b(
        "react-relay/relay-hooks/useSubscribeToInvalidationState"
      ),
      useSubscription: b("useFBSubscription"),
    };
  },
  null
);
__d(
  "PolarisLandingPageReelsModule.react",
  [
    "IGDSBox.react",
    "PolarisClipsHomeLoggedOutRootQuery",
    "PolarisErrorBoundary.react",
    "PolarisLoggedOutReelsUnitCardItem.react",
    "PolarisLogger",
    "PolarisScrollWatchedComponent.react",
    "PolarisViewpointReact.react",
    "PolarisVirtualHSnapScroll.react",
    "RelayHooks",
    "react",
    "usePolarisLandingPagePageIdentifier",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useRef,
      j = b.useState;
    e = 9 / 16;
    b = 4.25;
    var k = window.innerWidth / b,
      l = k / e,
      m = "reels_unit_on_home_page";
    function a(a) {
      var b = a.shouldShowLoggedOutHomepageReels,
        e = c("usePolarisLandingPagePageIdentifier")();
      a = d("RelayHooks").useLazyLoadQuery(
        c("PolarisClipsHomeLoggedOutRootQuery"),
        {}
      );
      var f =
        a == null
          ? void 0
          : (a = a.xdt_api__v1__clips__clips_on_logged_out_connection) == null
          ? void 0
          : (a = a.edges) == null
          ? void 0
          : a.map(function (a) {
              return a == null
                ? void 0
                : (a = a.node) == null
                ? void 0
                : a.media;
            });
      a = f.length > 0 && b;
      var g = i(!0),
        n = j(!1),
        o = n[0],
        p = n[1];
      n = j(null);
      var q = n[0],
        r = n[1];
      n = j(null);
      var s = n[0],
        t = n[1],
        u = function () {
          p(!0), w();
        },
        v = function () {
          p(!1);
        },
        w = function () {
          if (!o || q == null || s == null) return;
          for (var a = q; a <= s; ++a)
            d("PolarisLogger").logAction("loggedOutHomeReelsUnitScroll", {
              position: a,
              target: e,
              source: "loggedOutHomeReelsUnitScrollPositionLogging",
            });
        },
        x = function (a) {
          var b = a.endPct;
          a = a.startPct;
          r(Math.max(0, Math.floor(a)));
          t(Math.max(0, Math.floor(b)));
          w();
        };
      n = function (a) {
        a.state === "entered" &&
          g.current &&
          ((g.current = !1),
          d("PolarisLogger").logAction("loggedOutHomeReelsUnitImpression", {
            source: e,
            target: "impressionLogging",
          }));
      };
      return a === !0
        ? h.jsx(c("PolarisErrorBoundary.react"), {
            children: h.jsx(d("PolarisViewpointReact.react").Viewpoint, {
              action: n,
              id: m,
              children: function (a) {
                return h.jsxs("div", {
                  ref: a,
                  children: [
                    h.jsx(c("PolarisScrollWatchedComponent.react"), {
                      onScrollEnter: u,
                      onScrollLeave: v,
                      children: h.jsx(c("IGDSBox.react"), {
                        height: l,
                        marginBottom: 2,
                        marginTop: 1,
                        children: h.jsx(c("PolarisVirtualHSnapScroll.react"), {
                          itemWidth: k,
                          onVisibilityChange: x,
                          pagerDisabled: !0,
                          children: f.map(function (a, d) {
                            return h.jsx(
                              c("PolarisLoggedOutReelsUnitCardItem.react"),
                              {
                                actionCardClickName:
                                  "loggedOutHomeReelsUnitCardClick",
                                analyticsContext: e,
                                dimensions: { height: l, width: k },
                                fragmentKey: a,
                                index: d,
                                shouldAutoplay: !0,
                                shouldHideVideoPlayCount: b,
                                shouldRenderReelsIcon: !1,
                              },
                              a == null ? void 0 : a.id
                            );
                          }),
                        }),
                      }),
                    }),
                    " ",
                  ],
                });
              },
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MEDIA_ASPECT_RATIO = e;
    g.NUM_REELS_INITIAL_VIEWPORT = b;
    g.PolarisLandingPageReelsModule = a;
  },
  98
);
__d(
  "PolarisLoggedOutReelsUnitAutoplayVideoPreview.react",
  [
    "CometRelay",
    "PolarisAspectRatio.react",
    "PolarisGridItemVideoPreview.react",
    "PolarisLandingPageReelsModule.react",
    "PolarisLoggedOutReelsUnitAutoplayVideoPreview_media.graphql",
    "PolarisMediaTypes",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = 3e3,
      k =
        h !== void 0
          ? h
          : (h = b(
              "PolarisLoggedOutReelsUnitAutoplayVideoPreview_media.graphql"
            ));
    function l(a, b) {
      return a == null
        ? null
        : (a = a.find(function (a) {
            return b.includes(
              d("PolarisMediaTypes").MediaVersionType.cast(a.type)
            );
          })) == null
        ? void 0
        : a.url;
    }
    function a(a) {
      var b = a.fragmentKey;
      a = a.imageSource;
      b = d("CometRelay").useFragment(k, b);
      var e = b == null ? void 0 : b.id;
      b = l(b == null ? void 0 : b.video_versions, [
        d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH,
        d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW,
      ]);
      return e != null && b != null
        ? i.jsx(c("PolarisAspectRatio.react"), {
            aspectRatio: d("PolarisLandingPageReelsModule.react")
              .MEDIA_ASPECT_RATIO,
            children: i.jsx(c("PolarisGridItemVideoPreview.react"), {
              coverPhoto: a,
              previewDurationMs: j,
              videoID: e,
              videoSrc: b,
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisReelsUnitCardItemOverlay.react",
  [
    "IGDSBox.react",
    "IGDSPlayPanoOutline24Icon",
    "IGDSReelsFilledIcon",
    "IGDSText.react",
    "PolarisBigNumber.react",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          start: "x17qophe",
          end: "xds687c",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          textShadow: "xyqnb4c",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        icon: {
          paddingTop: "xm7lytj",
          paddingEnd: "x2qib4z",
          paddingBottom: "x1ykpatu",
          paddingStart: "xcu9agk",
          $$css: !0,
        },
        bottomLinearGradientBackground: {
          backgroundImage: "xeyqdor",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.shouldRenderReelsIcon,
        e = a.showSuggestedVideoAfterVideoEnds;
      a = a.videoViews;
      a = parseInt(a, 10);
      return h.jsxs("div", {
        className:
          "x10l6tqk x1ey2m1c x17qophe xds687c x13vifvy x1vjfegm xyqnb4c x47corl" +
          (e ? "" : " xeyqdor"),
        children: [
          b &&
            h.jsx(c("IGDSBox.react"), {
              alignItems: "end",
              width: "100%",
              xstyle: i.icon,
              children: h.jsx(c("IGDSReelsFilledIcon"), {
                alt: d("PolarisGenericStrings").REEL_ICON_ALT,
                color: "web-always-white",
                shadow: !0,
                size: 18,
              }),
            }),
          a > 0 &&
            h.jsxs(c("IGDSBox.react"), {
              alignItems: "center",
              bottom: !0,
              direction: "row",
              display: "flex",
              marginBottom: 2,
              marginStart: 2,
              position: "absolute",
              children: [
                h.jsx(c("IGDSBox.react"), {
                  marginEnd: 1,
                  children: h.jsx(c("IGDSPlayPanoOutline24Icon"), {
                    alt: d("PolarisGenericStrings").PLAY_ICON_ALT,
                    color: "web-always-white",
                    size: 14,
                  }),
                }),
                h.jsx(c("IGDSText.react"), {
                  color: "webAlwaysWhite",
                  size: "footnote",
                  weight: "semibold",
                  children: h.jsx(c("PolarisBigNumber.react"), {
                    shortenNumber: !0,
                    value: a,
                  }),
                }),
              ],
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisLoggedOutReelsUnitCardItem.react",
  [
    "CometRelay",
    "IGDSBox.react",
    "PolarisFastLink.react",
    "PolarisLinkBuilder",
    "PolarisLoggedOutReelsUnitAutoplayVideoPreview.react",
    "PolarisLoggedOutReelsUnitCardItemFragment_media.graphql",
    "PolarisLogger",
    "PolarisPhoto.react",
    "PolarisReelsUnitCardItemOverlay.react",
    "PolarisRoutes",
    "gkx",
    "react",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k = function (a) {
        if (a && a.image_versions2 && a.image_versions2.candidates) {
          a = a.image_versions2.candidates.map(function (a) {
            var b = a.height,
              c = a.url;
            a = a.width;
            return { height: b, url: c, width: a };
          });
          if (a != null)
            return a.map(function (a) {
              var b;
              return {
                configHeight: (b = a.height) != null ? b : 0,
                configWidth: (b = a.width) != null ? b : 0,
                src: (b = a.url) != null ? b : "",
              };
            });
        }
        return [];
      },
      l =
        h !== void 0
          ? h
          : (h = b("PolarisLoggedOutReelsUnitCardItemFragment_media.graphql"));
    function a(a) {
      var b,
        e = a.actionCardClickName,
        f = a.analyticsContext,
        g = a.cardWithBorder,
        h = a.dimensions,
        m = a.fragmentKey,
        n = a.index,
        o = a.shouldAutoplay;
      o = o === void 0 ? !1 : o;
      var p = a.shouldHideVideoPlayCount;
      p = p === void 0 ? !1 : p;
      var q = a.shouldRenderReelsIcon;
      q = q === void 0 ? !0 : q;
      a = a.showSuggestedVideoAfterVideoEnds;
      var r = d("CometRelay").useFragment(l, m);
      m = j(
        function () {
          return k(r);
        },
        [r]
      );
      b = m == null ? void 0 : (b = m[0]) == null ? void 0 : b.src;
      var s = c("useCometRouterDispatcher")(),
        t = c("gkx")("2262"),
        u = function () {
          t &&
            (s == null
              ? void 0
              : s.go(d("PolarisRoutes").POLARIS_CLIPS_TAB_PAGE_PATH, {
                  passthroughProps: { index: n },
                })),
            d("PolarisLogger").logAction(e, {
              source: f,
              reelId: r == null ? void 0 : r.id,
            });
        };
      return i.jsx("div", {
        className:
          "x78zum5 x6ikm8r x10wlt62 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb" +
          (g === !0 ? " xmescrl x1ifbuhd x1gkgjw5 x3s4kc" : ""),
        children: i.jsxs(c("IGDSBox.react"), {
          height: h.height,
          position: "relative",
          width: h.width,
          children: [
            i.jsx(c("PolarisFastLink.react"), {
              href: t
                ? void 0
                : d("PolarisLinkBuilder").buildClipsMediaLink(
                    (g = r.code) != null ? g : ""
                  ),
              onClick: u,
              children: o
                ? i.jsx(
                    c("PolarisLoggedOutReelsUnitAutoplayVideoPreview.react"),
                    { fragmentKey: r, imageSource: b }
                  )
                : i.jsx(c("PolarisPhoto.react"), {
                    dimensions: h,
                    rich: !0,
                    src: b,
                    srcSet: m,
                  }),
            }),
            i.jsx(c("PolarisReelsUnitCardItemOverlay.react"), {
              shouldRenderReelsIcon: q,
              showSuggestedVideoAfterVideoEnds: a === !0,
              videoViews: p ? null : r == null ? void 0 : r.play_count,
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
  "PolarisLoggedOutReelsUnit.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSReelsFilledIcon",
    "IGDSText.react",
    "PolarisClipsHomeLoggedOutRootQuery",
    "PolarisErrorBoundary.react",
    "PolarisFastLink.react",
    "PolarisGenericStrings",
    "PolarisLoggedOutReelsUnitCardItem.react",
    "PolarisLogger",
    "PolarisRoutes",
    "PolarisScrollWatchedComponent.react",
    "PolarisViewpointReact.react",
    "PolarisVirtualHSnapScroll.react",
    "RelayHooks",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useRef,
      k = b.useState,
      l = 9 / 16,
      m = 5,
      n = 150;
    function a(a) {
      var b = a.analyticsContext,
        e = a.impressionModule,
        f = a.isMediaOverlay,
        g = a.mediaContainerHeight;
      a = a.postId;
      var o = d("RelayHooks").useLazyLoadQuery(
          c("PolarisClipsHomeLoggedOutRootQuery"),
          {}
        ),
        p =
          o == null
            ? void 0
            : (o = o.xdt_api__v1__clips__clips_on_logged_out_connection) == null
            ? void 0
            : (o = o.edges) == null
            ? void 0
            : o.map(function (a) {
                return a == null
                  ? void 0
                  : (a = a.node) == null
                  ? void 0
                  : a.media;
              }),
        q = j(!0);
      o = k(!1);
      var r = o[0],
        s = o[1];
      o = k(null);
      var t = o[0],
        u = o[1];
      o = k(null);
      var v = o[0],
        w = o[1],
        x = f === !0,
        y = function () {
          s(!0), A();
        },
        z = function () {
          s(!1);
        },
        A = function () {
          if (!r || t == null || v == null) return;
          for (var a = t; a <= v; ++a)
            d("PolarisLogger").logAction("loggedOutReelsUnitScroll", {
              position: a,
              target: b,
              source: "loggedOutReelsUnitScrollPositionLogging",
            });
        };
      o = x && g != null && g < 300;
      var B = o ? n * 0.6 : n,
        C = B / l,
        D = B + m,
        E = function (a) {
          var b = a.endPct;
          a = a.startPct;
          u(Math.max(0, Math.floor(a)));
          w(Math.max(0, Math.floor(b)));
          A();
        },
        F = function () {
          d("PolarisLogger").logAction("loggedOutReelsUnitSeeMoreReelsClick", {
            source: b,
            target: "seeMore",
            viewModule: e,
          });
        };
      f = function (a) {
        a.state === "entered" &&
          q.current &&
          ((q.current = !1),
          d("PolarisLogger").logAction("loggedOutReelsUnitImpression", {
            source: b,
            target: "impressionLogging",
          }));
      };
      return (p == null ? void 0 : p.length)
        ? i.jsx(c("PolarisErrorBoundary.react"), {
            children: i.jsx(
              d("PolarisViewpointReact.react").Viewpoint,
              {
                action: f,
                id: a,
                children: function (a) {
                  return i.jsx("div", {
                    ref: a,
                    children: i.jsxs(c("IGDSBox.react"), {
                      marginTop: x ? 5 : 0,
                      children: [
                        i.jsxs(c("IGDSBox.react"), {
                          alignItems: "center",
                          direction: "row",
                          justifyContent: "between",
                          marginBottom: 4,
                          marginEnd: 4,
                          marginStart: 4,
                          children: [
                            i.jsxs(c("IGDSBox.react"), {
                              alignItems: "center",
                              direction: "row",
                              children: [
                                i.jsx(c("IGDSBox.react"), {
                                  marginEnd: 2,
                                  children: i.jsx(c("IGDSReelsFilledIcon"), {
                                    alt: d("PolarisGenericStrings")
                                      .REEL_ICON_ALT,
                                    color: x
                                      ? "ig-text-on-color"
                                      : "ig-primary-icon",
                                    shadow: !1,
                                    size: 18,
                                  }),
                                }),
                                i.jsx(c("IGDSText.react").BodyEmphasized, {
                                  color: "textOnMedia",
                                  children: x
                                    ? h._("Watch more reels on Instagram")
                                    : h._("Check out these Reels"),
                                }),
                              ],
                            }),
                            !x &&
                              c("gkx")("2262") &&
                              i.jsx(c("PolarisFastLink.react"), {
                                href: d("PolarisRoutes")
                                  .POLARIS_CLIPS_TAB_PAGE_PATH,
                                onClick: F,
                                children: i.jsx(
                                  c("IGDSText.react").BodyEmphasized,
                                  {
                                    children: i.jsx("div", {
                                      className: "xzlwxrv",
                                      children: h._("See more"),
                                    }),
                                  }
                                ),
                              }),
                          ],
                        }),
                        i.jsx(c("PolarisScrollWatchedComponent.react"), {
                          onScrollEnter: y,
                          onScrollLeave: z,
                          children: i.jsx(c("IGDSBox.react"), {
                            height: C,
                            children: i.jsx(
                              c("PolarisVirtualHSnapScroll.react"),
                              {
                                disableScrollSnap: !0,
                                gutterWidth: 16,
                                itemWidth: D,
                                onVisibilityChange: E,
                                pagerDisabled: !0,
                                children: p.map(function (a, d) {
                                  return i.jsx(
                                    c(
                                      "PolarisLoggedOutReelsUnitCardItem.react"
                                    ),
                                    {
                                      actionCardClickName:
                                        "loggedOutReelsUnitCardClick",
                                      analyticsContext: b,
                                      cardWithBorder: !x,
                                      dimensions: { height: C, width: B },
                                      fragmentKey: a,
                                      index: d,
                                      shouldHideVideoPlayCount: x,
                                      showSuggestedVideoAfterVideoEnds: x,
                                    },
                                    a == null ? void 0 : a.id
                                  );
                                }),
                              }
                            ),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
              a
            ),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSPlayPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisMisinformationConstants",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("False information overlay icon");
    b = h._("Warning icon glyph");
    c = h._("False news icon");
    g.OVERLAY_GLYPH_ALT_TEXT = a;
    g.POST_FOOTER_CTA_ALT_TEXT = b;
    g.FALSE_NEWS_ICON = c;
  },
  98
);
__d(
  "PolarisSensitivityOverlayIcon.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisIGCoreIcon",
    "PolarisMediaOverlayInfoTypes",
    "PolarisMisinformationConstants",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = i.jsxs(i.Fragment, {
          children: [
            i.jsx("div", { className: "_ac7w _9_sh" }),
            i.jsx("div", { className: "_ac7x _9_sj" }),
          ],
        }),
        e = i.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          direction: "row",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          children: i.jsx(c("PolarisIGCoreIcon"), {
            alt: d("PolarisMisinformationConstants").OVERLAY_GLYPH_ALT_TEXT,
            icon: d("PolarisAssetManagerGlyphMapping").ICONS.NEWS_OFF_OUTLINE,
          }),
        });
      a = a.mediaOverlayIconGlyph;
      switch (a) {
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_ICON_GLYPHS
          .NEWS_OFF:
          return e;
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_ICON_GLYPHS
          .EYE_OFF:
        default:
          return b;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisInstagramMediaOverlayFalcoEvent",
  [
    "PolarisContainerModuleUtils",
    "PolarisFalcoLogger",
    "PolarisMediaOverlayInfoTypes",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "instagram_media_overlay",
      i = { IMPRESSION: "impression", ACTION: "action" },
      j = { falco: !0, pigeon: !1 };
    function k(a, b) {
      b = Object.entries(b);
      for (var c = 0; c < b.length; c++) {
        var d = b[c],
          e = d[0];
        d = d[1];
        if (d === a) return e;
      }
      return String(a);
    }
    var l = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(h, a(), {}, j);
      },
      buildPayloadForLog: function (a) {
        var b = a.blocksLoggingData,
          c = a.button,
          e = a.containerModule,
          f = a.customAction,
          g = a.customSourceOfAction,
          h = a.entityID,
          j = a.event,
          m = a.overlayLayout,
          n = a.overlayType;
        a = a.sessionId;
        b = {
          blocks_logging_data: b,
          client_event_name: j,
          container_module: e,
          entity_id: h,
          ixt_session_id: a,
          overlay_layout_type: l.getLoggableOverlayLayoutType(m),
          overlay_type: n,
        };
        c != null &&
          j === i.ACTION &&
          (b = babelHelpers["extends"]({}, b, {
            action: k(
              c.action,
              d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_ACTIONS
            ),
            action_url: c.action_url,
            source_of_action: k(
              c.button_type,
              d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES
            ),
          }));
        f != null &&
          (j === i.ACTION || j === "client_action") &&
          (b = babelHelpers["extends"]({}, b, { action: f }));
        g != null &&
          j === i.ACTION &&
          (b = babelHelpers["extends"]({}, b, { source_of_action: g }));
        return b;
      },
      getLoggableOverlayLayoutType: function (a) {
        return k(a, d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS);
      },
      getLoggableContainerModuleFromAnalyticsContext: function (a) {
        var b = d("PolarisContainerModuleUtils").getContainerModule(a);
        return b === "unknown" ? a : b;
      },
    };
    g.IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS = i;
    g.InstagramMediaOverlayFalcoEvent = l;
  },
  98
);
__d(
  "polarisGetImageUrlFromPreviewData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==";
    function a(a) {
      if (a == null || (a != null && a.length < 3)) return null;
      var b = atob(a),
        c = b
          .substring(0, 3)
          .split("")
          .map(function (a) {
            return a.charCodeAt(0);
          }),
        d = c[0],
        e = c[1];
      c = c[2];
      if (d !== 0 || e > 42 || c > 42) return null;
      d = atob(g).split("");
      d[162] = String.fromCharCode(e);
      d[160] = String.fromCharCode(c);
      e = b.slice(3).split("");
      c = d.concat(e);
      return a ? "data:image/jpeg;base64," + btoa(c.join("")) : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisGetPreviewImageCanvas",
  [
    "invariant",
    "Promise",
    "memoizeStringOnly",
    "polarisGetImageUrlFromPreviewData",
    "stackblur",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = { blurRadius: "auto", dimensionDivisor: "auto" },
      j = c("memoizeStringOnly")(function (a) {
        return new (b("Promise"))(function (b, d) {
          var e = new Image(),
            f = c("polarisGetImageUrlFromPreviewData")(a);
          f != null || h(0, 51408);
          e.onload = function () {
            return b(e);
          };
          e.onerror = d;
          e.src = f;
          e.complete && (e.onload(), (e.onload = null), (e.onerror = null));
        });
      });
    function a(a, b, d) {
      d === void 0 && (d = {});
      var e = b.height,
        f = b.width;
      b = babelHelpers["extends"]({}, d, i);
      d = b.blurRadius;
      b = b.dimensionDivisor;
      var g, k;
      d === "auto" ? (g = Math.max(10, ((f + e) / 2) * 0.075)) : (g = d);
      b === "auto" ? (k = Math.max(1.5, g * 0.2)) : (k = b);
      k > 0 || h(0, 51409);
      return j(a).then(function (a) {
        var b = document.createElement("canvas"),
          d = Math.ceil(f / k),
          h = Math.ceil(e / k);
        b.width = d;
        b.height = h;
        var i = b.getContext("2d");
        if (i == null) throw new Error("failed to get context");
        i.drawImage(a, 0, 0, d, h);
        a = i.getImageData(0, 0, d, h);
        var j = a.data;
        c("stackblur")(j, d, h, Math.floor(g / k));
        i.putImageData(a, 0, 0);
        return b;
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisResponsiveImage.react",
  [
    "PolarisBatchDOM",
    "PolarisUA",
    "gkx",
    "memoize",
    "nullthrows",
    "one-trace",
    "performanceNow",
    "polarisGetCrossOriginAttribute",
    "polarisWithRemountOnChange",
    "react",
    "vc-tracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("memoize")(function () {
        return "srcset" in document.createElement("img");
      }),
      j = c("memoize")(function () {
        return d("PolarisUA").isFirefox();
      }),
      k = 0,
      l = 1080;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$2 = !1),
          (c.$3 = k++),
          (c.$4 = null),
          (c.$5 = null),
          (c.$10 = function () {
            c.$4 !== c.$5 && c.props.onLoad && c.props.onLoad(null, !0),
              (c.$4 = c.$5);
          }),
          (c.$11 = function (a) {
            c.$4 !== c.$5 && c.props.onLoad && c.props.onLoad(a, !1),
              (c.$4 = c.$5);
          }),
          (c.$12 = function (a) {
            (c.$1 = a), c.props.imgRef && c.props.imgRef(a);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$6 = function () {
        return c("nullthrows")(this.$1).getBoundingClientRect().width;
      };
      e.$7 = function () {
        var a = this.$6(),
          b = window.devicePixelRatio || 1;
        return a * b;
      };
      e.$8 = function () {
        var a = this.props.src,
          b = this.$7(),
          c = this.props.srcSet;
        c = c.filter(function (a) {
          return a.configWidth <= l;
        });
        if (b)
          for (
            var c = c,
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
            a = f.src;
            if (f.configWidth >= b) break;
          }
        return a;
      };
      e.$9 = function () {
        var a = this.props.srcSet;
        a = a.filter(function (a) {
          return a.configWidth <= l;
        });
        return a
          .map(function (a) {
            return a.src + " " + a.configWidth + "w";
          })
          .join(",");
      };
      e.componentDidMount = function () {
        (this.$2 = !0), this.componentDidUpdate();
      };
      e.componentWillUnmount = function () {
        var a = this;
        this.$2 = !1;
        c("vc-tracker")
          .getCurrentVCTraces()
          .forEach(function (b) {
            b.unlock("ResponsiveImageHold_" + a.$3);
          });
      };
      e.componentDidUpdate = function () {
        var a = this,
          b = c("nullthrows")(this.$1);
        i()
          ? d("PolarisBatchDOM").measure(function () {
              if (!a.$2) return;
              var c = a.$6();
              d("PolarisBatchDOM").mutate(function () {
                if (!a.$2) return;
                var e = a.$9();
                a.$5 = e;
                b.sizes = c + "px";
                b.srcset = e;
                m(b, a.props.src, a.$3);
                d("PolarisBatchDOM").measure(function () {
                  !j() && b.complete && a.$10();
                });
              });
            })
          : d("PolarisBatchDOM").measure(function () {
              if (!a.$2) return;
              var c = a.$8();
              d("PolarisBatchDOM").mutate(function () {
                if (!a.$2) return;
                a.$5 = c;
                m(b, c, a.$3);
                b.complete && a.$10();
              });
            });
      };
      e.render = function () {
        var a,
          b = this,
          d = c("gkx")("4955") ? "ResponsiveImage" : void 0;
        ((a = this.$1) == null ? void 0 : a.src) == null &&
          c("vc-tracker")
            .getCurrentVCTraces()
            .forEach(function (a) {
              a.lock("ResponsiveImageHold_" + b.$3);
            });
        return h.jsx("img", {
          alt: this.props.alt,
          className: this.props.className,
          crossOrigin: c("polarisGetCrossOriginAttribute")(),
          "data-imgperflogname": d,
          decoding: this.props.decoding,
          elementtiming: d,
          onError: this.props.onError,
          onLoad: this.$11,
          ref: this.$12,
          style: this.props.style,
        });
      };
      return b;
    })(h.PureComponent);
    b.defaultProps = { decoding: "auto" };
    function m(a, b, d) {
      var e = a.src;
      a.src = b;
      c("gkx")("4955") &&
        (e == null || e === "") &&
        b !== "" &&
        c("one-trace").trackImagePerf(a, c("performanceNow")(), b, {});
      c("vc-tracker")
        .getCurrentVCTraces()
        .forEach(function (b) {
          b.trackImage(b.mutationSeq++, a, "mutationImageAttribute"),
            b.unlock("ResponsiveImageHold_" + d);
        });
    }
    function a(a, b) {
      return a.src !== b.src;
    }
    e = c("polarisWithRemountOnChange")(a)(b);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisPreviewPhoto.react",
  [
    "cx",
    "ExecutionEnvironment",
    "Promise",
    "nullthrows",
    "polarisGetPreviewImageCanvas",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = 300;
    function a(a, b) {
      var c = a.width / b;
      return { height: a.height / c, width: b };
    }
    f = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d(b) {
        b = a.call(this, b) || this;
        b.$1 = !1;
        b.$2 = !1;
        b.$3 = null;
        b.state = {
          canvas: null,
          blurRadius: null,
          dimensionDivisor: null,
          dimensions: null,
          previewData: null,
        };
        b.$4();
        return b;
      }
      var e = d.prototype;
      e.$5 = function (a, b) {
        a === void 0 && (a = this.props);
        b === void 0 && (b = this.state);
        var c = a.dimensionScaleThreshold,
          d = b.dimensions;
        return (
          a.previewData === b.previewData &&
          a.blurRadius === b.blurRadius &&
          a.dimensionDivisor === b.dimensionDivisor &&
          d != null &&
          a.dimensions.width <= d.width * c &&
          a.dimensions.height <= d.height * c
        );
      };
      e.$4 = function (a) {
        var d = this;
        a === void 0 && (a = this.props);
        if (
          !c("ExecutionEnvironment").canUseDOM ||
          this.$2 ||
          this.$1 ||
          this.$5(a)
        )
          return;
        this.$1 = !0;
        var e = c("polarisGetPreviewImageCanvas")(a.previewData, a.dimensions, {
          blurRadius: a.blurRadius,
          dimensionDivisor: a.dimensionDivisor,
        }).then(
          function (b) {
            if (d.$2) return;
            b.style.width = "100%";
            b.style.height = "100%";
            b.style.display = "block";
            d.setState(
              {
                canvas: b,
                blurRadius: a.blurRadius,
                dimensionDivisor: a.dimensionDivisor,
                dimensions: a.dimensions,
                previewData: a.previewData,
              },
              function () {
                (d.$1 = !1), d.$5() || d.$4();
              }
            );
          },
          function (a) {
            d.$1 = !1;
            return b("Promise").reject(a);
          }
        );
        e;
      };
      e.componentWillUnmount = function () {
        this.$2 = !0;
      };
      e.componentDidUpdate = function () {
        this.$4(this.props);
        var a = this.state.canvas;
        if (!a) return;
        var b = c("nullthrows")(this.$3);
        b.children.length > 0
          ? b.children[0] !== a && b.replaceChild(a, b.children[0])
          : b.appendChild(a);
      };
      e.render = function () {
        var a = this;
        return i.jsx("div", {
          className: "_a9_h",
          ref: function (b) {
            return (a.$3 = b);
          },
        });
      };
      return d;
    })(i.PureComponent);
    f.defaultProps = {
      blurRadius: "auto",
      dimensionDivisor: "auto",
      dimensionScaleThreshold: 1.5,
    };
    g.PREVIEW_PHOTO_DIMENSION = e;
    g.getDimensionsFromContainerWidth = a;
    g.PreviewPhoto = f;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisFeedPagePostModal.react",
  [
    "PolarisIsLoggedInDesktop",
    "PolarisLinkBuilder",
    "PolarisPost.react",
    "PolarisPostModal.react",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisSponsoredPost.react",
    "nullthrows",
    "polarisPostSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.onClose,
        e = a.onOpen,
        f = a.postId;
      a = a.sidecarIndex;
      i(
        function () {
          return function () {
            b();
          };
        },
        [b]
      );
      var g = c("nullthrows")(
          d("PolarisReactRedux").useSelector(function (a) {
            return d("polarisPostSelectors").getPostById(a, f);
          })
        ),
        j = d("PolarisReactRedux").useSelector(function (a) {
          return a.ads.feed;
        });
      j = new Set(Array.from(j.keys()));
      var k = g.code;
      g = g.dimensions;
      var l = "feedPage";
      return h.jsx(c("PolarisPostModal.react"), {
        analyticsContext: l,
        "data-testid": void 0,
        dimensions: g,
        mediaLinkBuilder: d("PolarisLinkBuilder").buildMediaLink,
        modalEntryPath: d("PolarisRoutes").FEED_PATH,
        onClose: b,
        onOpen: e,
        postCode: k || "",
        postId: f,
        children: j.has(f)
          ? h.jsx(c("PolarisSponsoredPost.react"), {
              analyticsContext: l + "Modal",
              autoplay: d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),
              id: f,
              initialCarouselIndex: (g = a) != null ? g : void 0,
              isVisible: !0,
              visiblePosition: 0,
            })
          : h.jsx(c("PolarisPost.react"), {
              analyticsContext: l + "Modal",
              autoplay: d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),
              id: f,
              initialCarouselIndex: (e = a) != null ? e : void 0,
              isVisible: !0,
              visiblePosition: 0,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "polarisRelatedProfileSelectors",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a.relatedProfiles.relatedProfileSuggestions.get(b);
    }
    f.getRelatedProfileSuggestions = a;
  },
  66
);
__d(
  "PolarisUserActionDismissRelatedProfileSuggestion",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return function (c) {
        c({
          type: "RELATED_PROFILE_DISMISSED_SUGGESTION",
          targetId: a,
          dismissedId: b,
        });
      };
    }
    f.dismissRelatedProfileSuggestion = a;
  },
  66
);
__d(
  "PolarisFollowedByStatistic.react",
  ["fbt", "PolarisSocialProofStatistic.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return h._("{count} follower", [h._param("count", a)]);
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return h._("{count} followers", [h._param("count", a)]);
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("PolarisSocialProofStatistic.react"), {
        href: a.href,
        onClick: a.onClick,
        pluralLabel: k,
        selectedTabId: a.selectedTabId,
        shortenNumber: !0,
        singularLabel: j,
        value: a.value,
        variant: a.variant,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFollowsStatistic.react",
  ["fbt", "PolarisSocialProofStatistic.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return h._("{count} following", [h._param("count", a)]);
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return h._("{count} following", [h._param("count", a)]);
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("PolarisSocialProofStatistic.react"), {
        href: a.href,
        onClick: a.onClick,
        pluralLabel: k,
        selectedTabId: a.selectedTabId,
        shortenNumber: !1,
        singularLabel: j,
        value: a.value,
        variant: a.variant,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisGroupAdminsStatistic.react",
  ["fbt", "PolarisSocialProofStatistic.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return h._("{count} admin", [h._param("count", a)]);
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return h._("{count} admins", [h._param("count", a)]);
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("PolarisSocialProofStatistic.react"), {
        href: a.href,
        onClick: a.onClick,
        pluralLabel: k,
        selectedTabId: a.selectedTabId,
        shortenNumber: !0,
        singularLabel: j,
        value: a.value,
        variant: a.variant,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisGroupMembersStatistic.react",
  ["fbt", "PolarisSocialProofStatistic.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return h._("{count} member", [h._param("count", a)]);
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return h._("{count} members", [h._param("count", a)]);
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("PolarisSocialProofStatistic.react"), {
        href: a.href,
        onClick: a.onClick,
        pluralLabel: k,
        selectedTabId: a.selectedTabId,
        shortenNumber: !0,
        singularLabel: j,
        value: a.value,
        variant: a.variant,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFollowChainingListItem.react",
  [
    "IGDSBox.react",
    "PolarisGenericStrings",
    "PolarisIGCorePressable",
    "PolarisLogger",
    "PolarisODS",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.analyticsContext,
        e = a.icon,
        f = a.isSmallScreen,
        g = a.onClick,
        i = a.onDismissed,
        j = a.primaryCta,
        k = a.primaryText;
      a = a.secondaryText;
      var l = function (a) {
          b &&
            (d("PolarisLogger").logAction("chainingClick", {
              source: b,
              target: a,
            }),
            c("PolarisODS").incr("web.chaining.click"));
        },
        m = function (a) {
          l("dismiss"), i && i(), a.stopPropagation();
        },
        n = function () {
          l("other"), g && g();
        };
      return h.jsx(c("PolarisIGCorePressable"), {
        className:
          "xvbhtw8 x178xt8z xm81vs4 xso031l xy80clv x1yvgwvq x1dqoszc x1ixjvfu xhk4uv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1lcm9me x1yr5g0i xrt01vj x10y3i5r x9f619 x78zum5 xdt5ytf",
        onPress: n,
        children: h.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          "data-testid": void 0,
          padding: f ? 4 : 5,
          position: "relative",
          width: "100%",
          children: [
            i &&
              h.jsx("button", {
                alt: d("PolarisGenericStrings").DISMISS_TEXT,
                "aria-label": d("PolarisGenericStrings").DISMISS_TEXT,
                className:
                  "xjbqb8w x76ihet xwmqs3e x112ta8 xxxdfa6 x1ypdohk xz9dl7a xn6708d xsag5q8 x1ye3gou x10l6tqk xds687c x13vifvy x1vjfegm",
                "data-testid": void 0,
                onClick: m,
                children: h.jsx("div", {
                  className:
                    "" +
                    (f
                      ? " xiy17q3 xx7dfb8 xdk7pt x1xc55vz xo3uz88"
                      : " xiy17q3 xlon915 x170jfvy x1fsd2vl xo3uz88"),
                }),
              }),
            h.jsx(c("IGDSBox.react"), {
              marginBottom: f ? 2 : 5,
              position: "relative",
              children: e,
            }),
            h.jsxs(c("IGDSBox.react"), {
              height: 50,
              maxWidth: "100%",
              children: [
                h.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  direction: "row",
                  justifyContent: "center",
                  marginBottom: 1,
                  maxWidth: "100%",
                  position: "relative",
                  children: k,
                }),
                h.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  direction: "row",
                  justifyContent: "center",
                  marginBottom: f ? 2 : 3,
                  maxWidth: "100%",
                  position: "relative",
                  children: a,
                }),
              ],
            }),
            j,
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
  "PolarisFollowCard.react",
  [
    "cx",
    "fbt",
    "invariant",
    "IGDSBox.react",
    "IGDSButton.react",
    "PolarisConnectionsLogger",
    "PolarisFollowButtonContainer.react",
    "PolarisFollowChainingListItem.react",
    "PolarisIGCoreText",
    "PolarisIGCoreVerifiedBadge",
    "PolarisLinkBuilder",
    "PolarisLogger",
    "PolarisODS",
    "PolarisUserAvatar.react",
    "PolarisUserLink.react",
    "react",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = 77,
      m = 54,
      n = 33,
      o = i._("View Profile");
    function p(a) {
      return a.length < n ? a : a.substr(0, n - 3) + "\u2026";
    }
    function q(a, b) {
      d("PolarisLogger").logAction("chainingClick", { source: b, target: a }),
        c("PolarisODS").incr("web.chaining.click");
    }
    function r(a) {
      var b = a.analyticsContext,
        d = a.isSmallScreen,
        e = a.profilePictureUrl;
      a = a.username;
      (e != null && e !== "") || j(0, 51397);
      var f = function (a) {
        q("avatar", b), a.stopPropagation();
      };
      return k.jsx(c("PolarisUserAvatar.react"), {
        canTabFocus: !1,
        isLink: !0,
        onClick: f,
        profilePictureUrl: e,
        size: d ? l : m,
        username: a,
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s(a) {
      var b = a.analyticsContext,
        d = a.clickPoint,
        e = a.handleFollowButtonClick,
        f = a.useAlternateViewProfileButton,
        g = a.userId;
      a = a.username;
      var h = function (a) {
          a.stopPropagation();
        },
        i = function () {
          q("view_profile_button", b);
        };
      return f
        ? k.jsx(c("IGDSButton.react"), {
            "data-testid": void 0,
            display: "block",
            label: o,
            onClick: i,
            variant: "secondary",
          })
        : k.jsx("div", {
            onClick: h,
            role: "button",
            tabIndex: -1,
            children: k.jsx(c("PolarisFollowButtonContainer.react"), {
              analyticsContext: b,
              analyticsExtra: { chn: "1" },
              clickPoint: d,
              fullWidth: !0,
              onClick: e,
              userId: g,
              username: (f = a) != null ? f : "",
            }),
          });
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function t(a) {
      var b = a.fullName,
        d = a.handleUsernameClick,
        e = a.isVerified,
        f = a.showDescription,
        g = a.suggestionDescription;
      a = a.username;
      (a != null && a !== "") || j(0, 51399);
      e != null || j(0, 51398);
      f = f && g != null;
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("PolarisUserLink.react"), {
            className: "_aci-",
            "data-testid": void 0,
            onClick: d,
            username: a,
            children:
              f && b != null && b !== "" && b.length > 0
                ? k.jsx(c("PolarisIGCoreText"), {
                    display: "truncated",
                    children: b,
                  })
                : k.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                    display: "truncated",
                    children: a,
                  }),
          }),
          e &&
            k.jsx(c("IGDSBox.react"), {
              "data-testid": void 0,
              marginStart: 1,
              position: "relative",
              children: k.jsx(c("PolarisIGCoreVerifiedBadge"), {
                size: "small",
              }),
            }),
        ],
      });
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function u(a) {
      var b = a.fullName,
        d = a.showDescription;
      a = a.suggestionDescription;
      return d && a != null
        ? k.jsx("span", {
            className: "_acj0",
            title: a,
            children: k.jsx(c("PolarisIGCoreText"), {
              color: "ig-secondary-text",
              display: "truncated",
              children: p(a),
            }),
          })
        : k.jsx("span", {
            className: "_aci_",
            title: b,
            children: k.jsx(c("PolarisIGCoreText"), {
              color: "ig-secondary-text",
              display: "truncated",
              children: b,
            }),
          });
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.analyticsContext,
        e = a.clickPoint,
        f = a.impressionModule,
        g = a.isSmallScreen,
        h = a.onDismissed,
        i = a.position,
        l = a.showDescription,
        m = a.useAlternateViewProfileButton;
      m = m === void 0 ? !1 : m;
      a = a.user;
      var n = a.fullName,
        o = a.id,
        p = a.isVerified,
        v = a.profilePictureUrl,
        w = a.suggestionDescription,
        x = a.username,
        y = function (a) {
          d("PolarisConnectionsLogger").logConnectionAction({
            eventName: a,
            position: i,
            targetId: o,
            containerModule: b,
            viewModule: f,
          });
        },
        z =
          f === d("PolarisConnectionsLogger").VIEW_MODULES.web_profile_chaining,
        A = c("useCometRouterDispatcher")();
      a = function (a) {
        q("username", b),
          y(z ? "similar_username_tapped" : "recommended_username_tapped"),
          a.stopPropagation();
      };
      var B = function () {
          q("follow", b),
            y(
              z
                ? "similar_user_follow_button_tapped"
                : "recommended_follow_button_tapped"
            );
        },
        C = function () {
          y(z ? "similar_user_dismiss_tapped" : "recommended_user_dismissed"),
            h && h(o);
        },
        D = function () {
          (x != null && x !== "") || j(0, 51399);
          var a = d("PolarisLinkBuilder").buildUserLink(x);
          A == null ? void 0 : A.go(a, {});
        };
      return k.jsx(c("PolarisFollowChainingListItem.react"), {
        analyticsContext: b,
        icon: k.jsx(r, {
          analyticsContext: b,
          isSmallScreen: g,
          profilePictureUrl: v,
          username: x,
        }),
        isSmallScreen: g,
        onClick: D,
        onDismissed: h ? C : null,
        primaryCta: k.jsx(s, {
          analyticsContext: b,
          clickPoint: e,
          handleFollowButtonClick: B,
          useAlternateViewProfileButton: m,
          userId: o,
          username: x,
        }),
        primaryText: k.jsx(t, {
          fullName: n,
          handleUsernameClick: a,
          isVerified: p,
          showDescription: l,
          suggestionDescription: w,
          username: x,
        }),
        secondaryText: k.jsx(u, {
          fullName: n,
          showDescription: l,
          suggestionDescription: w,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFollowChainingList.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "PolarisConnectionsLogger",
    "PolarisErrorRetrySection.react",
    "PolarisFollowCard.react",
    "PolarisIGCoreText",
    "PolarisLogger",
    "PolarisPanavisionQEHelpers",
    "PolarisProfileQEHelpers",
    "PolarisScrollWatchedComponent.react",
    "PolarisSeeAllLink.react",
    "PolarisVirtualHSnapScrollCollapsibleList.react",
    "joinClasses",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = i._("Loading suggestions\u2026"),
      l = { cardWidth: 156, gapWidth: 5, gutterWidth: 20 },
      m = { cardWidth: 160, gapWidth: 10, gutterWidth: 0 },
      n = { cardWidth: 176, gapWidth: 24, gutterWidth: 24 },
      o = 208,
      p = 216;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.$5 = function () {
          (c.$1 = !0), c.$6(), c.props.onScrollEnter && c.props.onScrollEnter();
        };
        c.$7 = function () {
          (c.$1 = !1), c.props.onScrollLeave && c.props.onScrollLeave();
        };
        c.$8 = function (a) {
          var b = a.endPct;
          a = a.startPct;
          c.$2 = Math.max(0, Math.floor(a));
          c.$3 = Math.max(0, Math.floor(b));
          c.$6();
        };
        c.$1 = !1;
        c.$4 = {};
        return c;
      }
      var e = b.prototype;
      e.$6 = function () {
        if (
          !this.$1 ||
          this.$2 == null ||
          this.$3 == null ||
          this.props.chainingSuggestions == null
        )
          return;
        for (var a = this.$2; a <= this.$3; ++a) {
          var b = this.props.chainingSuggestions[a];
          if (b == null) continue;
          if (!this.$4[b.id]) {
            var c = this.props.impressionModule,
              e = {
                targetId: b.id,
                containerModule: this.props.analyticsContext,
                position: a,
                viewModule: c,
              };
            c ===
            d("PolarisConnectionsLogger").VIEW_MODULES.web_profile_chaining
              ? d("PolarisConnectionsLogger").logConnectionAction(
                  babelHelpers["extends"](
                    { eventName: "similar_user_impression" },
                    e
                  )
                )
              : c === d("PolarisConnectionsLogger").VIEW_MODULES.hscroll_feed ||
                c === d("PolarisConnectionsLogger").VIEW_MODULES.end_of_feed
              ? d("PolarisConnectionsLogger").logConnectionAction(
                  babelHelpers["extends"](
                    { eventName: "recommended_user_impression" },
                    e
                  )
                )
              : c ===
                  d("PolarisConnectionsLogger").VIEW_MODULES
                    .trending_accounts_private_profile &&
                d("PolarisLogger").logAction("trendingAccountModuleScroll", {
                  targetId: b.id,
                  source: this.props.analyticsContext,
                  position: a,
                  viewModule: c,
                });
            this.$4[b.id] = !0;
          }
        }
      };
      e.render = function () {
        var a = this.props,
          b = a.analyticsContext,
          e = a.chainingFailed,
          f = a.chainingSuggestions,
          g = a.className,
          h = a.clickPoint,
          q = a.impressionModule,
          r = a.isSmallScreen,
          s = a.isTrendingAccountModule;
        s = s === void 0 ? !1 : s;
        var t = a.onRetryClicked,
          u = a.onSuggestionDismissed,
          v = a.overscan,
          w = a.seeAllHref,
          x = a.showDescription,
          y = a.title,
          z = a.useAlternateViewProfileButton,
          A =
            b ===
              d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES
                .profile &&
            d("PolarisProfileQEHelpers").hasSmallerSUCardsOnDesktop();
        a =
          b ===
            d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES
              .feed_timeline &&
          d("PolarisPanavisionQEHelpers").hasFamiliarFeed();
        var B = r ? l : A ? m : n,
          C = x ? p : o,
          D =
            f &&
            f.map(function (a, d) {
              return j.jsx(
                c("PolarisFollowCard.react"),
                {
                  analyticsContext: b,
                  clickPoint: h,
                  impressionModule: q,
                  isSmallScreen: r,
                  onDismissed: u,
                  position: d,
                  showDescription: x,
                  useAlternateViewProfileButton: z,
                  user: a,
                },
                a.id
              );
            });
        D != null &&
          (D = D.map(function (a) {
            return j.jsx(
              c("IGDSBox.react"),
              {
                alignItems: "center",
                height: C,
                position: "relative",
                width: B.cardWidth + (A && !r ? 0 : B.gapWidth),
                children: j.jsx(c("IGDSBox.react"), {
                  position: "relative",
                  width: B.cardWidth,
                  children: a,
                }),
              },
              a.key
            );
          }));
        return j.jsxs(c("PolarisScrollWatchedComponent.react"), {
          className: c("joinClasses")(
            g,
            "_ackf" + (r || A ? " _ackg" : "") + (!r && !A ? " _ackh" : "")
          ),
          onScrollEnter: this.$5,
          onScrollLeave: this.$7,
          children: [
            e !== !0 &&
              !f &&
              j.jsx("div", {
                className: "_acki",
                children: j.jsx("p", { children: k }),
              }),
            e === !0 &&
              j.jsx(c("PolarisErrorRetrySection.react"), {
                className: "_ackj",
                errorText: i._("Unable to load suggestions."),
                onRetry: c("nullthrows")(t),
              }),
            e !== !0 &&
              f &&
              j.jsxs("div", {
                className:
                  "_ackk" +
                  (!a && (!A || r) ? " _ajrd" : "") +
                  (a || (A && !r) ? " _ajre" : ""),
                children: [
                  j.jsx("span", {
                    className: "_ackl",
                    children: j.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                      color: s ? "ig-primary-text" : "ig-secondary-text",
                      zeroMargin: !0,
                      children: y,
                    }),
                  }),
                  w != null &&
                    w !== "" &&
                    j.jsx(c("PolarisSeeAllLink.react"), {
                      href: w,
                      onClick: this.props.onSeeAllClicked,
                    }),
                ],
              }),
            e !== !0 &&
              f &&
              D != null &&
              j.jsx(c("IGDSBox.react"), {
                height: C,
                position: "relative",
                children: j.jsx(
                  c("PolarisVirtualHSnapScrollCollapsibleList.react"),
                  {
                    gutterWidth:
                      a || (A && !r)
                        ? 0
                        : Math.max(0, B.gutterWidth - B.gapWidth / 2),
                    itemWidth: B.cardWidth + B.gapWidth,
                    onVisibilityChange: this.$8,
                    overscan: v,
                    children: D,
                  }
                ),
              }),
          ],
        });
      };
      return b;
    })(j.Component);
    a.defaultProps = { showDescription: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "useForceUpdate",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useReducer;
    function a() {
      var a = h(function (a) {
        return a + 1;
      }, 0);
      a[0];
      a = a[1];
      return a;
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "CentralImpressionRecord",
  ["getStyleProperty", "intersectionObserverEntryIsIntersecting"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        impressedAt: 0,
        invisibleReason: null,
        status: null,
        target: a,
        visible: !1,
        visiblePercentage: 0,
      };
    }
    function b(a, b) {
      var d = a.target,
        e = a.boundingClientRect,
        f = null,
        g = !1;
      !c("intersectionObserverEntryIsIntersecting")(a)
        ? (f = "NOT_IN_VIEWPORT")
        : e == null
        ? (f = "UNDEFINED_BOUNDING_RECT")
        : e.height === 0 || e.width === 0
        ? (f = "TARGET_SIZE_0")
        : c("getStyleProperty")(d, "opacity") === "0"
        ? (f = "TARGET_TRANSPARENT")
        : c("getStyleProperty")(d, "visibility") === "hidden"
        ? (f = "TARGET_HIDDEN")
        : (g = !0);
      e = g === !1 ? 0 : a.intersectionRatio;
      var h = b.visible,
        i = b.impressedAt,
        j = null;
      h && !g
        ? (j = "EXIT")
        : !h && g
        ? ((j = "ENTER"), (i = Date.now()))
        : b.visiblePercentage !== e && (j = "UPDATE");
      return {
        boundingClientRect: a.boundingClientRect,
        impressedAt: i,
        intersectionRect: a.intersectionRect,
        invisibleReason: f,
        rootBounds: a.rootBounds,
        status: j,
        target: d,
        visible: g,
        visiblePercentage: e,
      };
    }
    function h(a, b) {
      return !a.visible
        ? null
        : babelHelpers["extends"]({}, a, {
            invisibleReason: b,
            status: "EXIT",
            visible: !1,
            visiblePercentage: 0,
          });
    }
    function d(a) {
      return h(a, "PUSH_VIEW_HIDDEN");
    }
    function e(a) {
      return h(a, "COMPONENT_UNMOUNTED");
    }
    function f(a) {
      return h(a, "PAGE_VISIBILITY_HIDDEN");
    }
    g.initImpressionRecord = a;
    g.calcNextObservedRecord = b;
    g.calcExitRecordOnPushViewHidden = d;
    g.calcExitRecordOnUnmount = e;
    g.calcExitRecordOnViewportHidden = f;
  },
  98
);
__d(
  "calculateImpressionViewablePercentage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { height: 0, width: 0, x: 0, y: 0 };
    function h(a, b) {
      var c = Math.max(a.y, b.y),
        d = Math.min(a.y + a.height, b.y + b.height);
      if (c >= d) return g;
      var e = Math.max(a.x, b.x);
      a = Math.min(a.x + a.width, b.x + b.width);
      return e >= a ? g : { height: d - c, width: a - e, x: e, y: c };
    }
    function a(a, b, c) {
      b = {
        height: b.height - c.top - c.bottom,
        width: b.width - c.left - c.right,
        x: b.x + c.left,
        y: b.y + c.top,
      };
      if (a.height === 0 || a.width === 0)
        return { boundingClientRect: a, rootBounds: b, visiblePercentage: 1 };
      if (b.height <= 0 || b.width <= 0)
        return { boundingClientRect: a, rootBounds: b, visiblePercentage: 0 };
      c = h(b, a);
      return {
        boundingClientRect: a,
        intersectionRect: c,
        rootBounds: b,
        visiblePercentage: (c.height * c.width) / (a.height * a.width),
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "getElementPosition",
  ["getElementRect"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      a = c("getElementRect")(a);
      return {
        x: a.left,
        y: a.top,
        width: a.right - a.left,
        height: a.bottom - a.top,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "isImpressionTargetOccluded",
  ["containsNode", "getViewportDimensions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      d === void 0 && (d = { bottom: 0, left: 0, right: 0, top: 0 });
      try {
        if (!a || !b || !document.elementFromPoint) return !1;
        var e = c("getViewportDimensions")();
        if (e.height === 0 || e.width === 0) return !1;
        var f = b.x,
          g = b.y,
          h = b.width;
        b = b.height;
        h = Math.min(f + h, e.width - 1);
        b = Math.min(g + b, e.height - 1);
        e = [
          { x: f, y: g },
          { x: f, y: b },
          { x: h, y: g },
          { x: h, y: b },
          { x: (f + h) / 2, y: (g + b) / 2 },
        ];
        d.top !== 0 &&
          d.top > g &&
          d.top < b &&
          e.push({ x: (f + h) / 2, y: (d.top + b) / 2 });
        return e.every(function (b) {
          b = document.elementFromPoint(b.x, b.y);
          b = !!b && !c("containsNode")(b, a) && !c("containsNode")(a, b);
          return b;
        });
      } catch (a) {
        return !1;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "calcNextImpressionSnapshotRecord",
  [
    "Visibility",
    "calculateImpressionViewablePercentage",
    "getElementPosition",
    "getStyleProperty",
    "getViewportDimensions",
    "gkx",
    "isImpressionTargetOccluded",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { bottom: 0, left: 0, right: 0, top: 0 };
    function i(a) {
      if (a == null || document.documentElement == null) return null;
      a = a.parentElement;
      while (a != null) {
        if (a === document.documentElement || a.nodeType !== 1) return null;
        if (
          c("getStyleProperty")(a, "position") === "absolute" &&
          c("getStyleProperty")(a, "overflow") !== "visible"
        )
          return a;
        a = a.parentElement;
      }
      return null;
    }
    function a(a, b, d) {
      d === void 0 && (d = {});
      if (c("gkx")("2637") && d.isCometHiddenSubtree)
        return {
          impressedAt: b.impressedAt,
          invisibleReason: "PUSH_VIEW_HIDDEN",
          status: b.visible ? "EXIT" : null,
          target: a,
          visible: !1,
          visiblePercentage: 0,
        };
      var e = c("getElementPosition")(a),
        f = babelHelpers["extends"](
          { x: 0, y: 0 },
          c("getViewportDimensions")()
        ),
        g = c("calculateImpressionViewablePercentage")(e, f, h),
        j = !1;
      if (g.visiblePercentage > 0) {
        var k = i(a);
        k != null &&
          g.intersectionRect != null &&
          ((j = !0),
          (g = c("calculateImpressionViewablePercentage")(
            g.intersectionRect,
            c("getElementPosition")(k),
            h
          )));
      }
      k = d;
      k = k.viewportMargin;
      j = k && !j ? c("calculateImpressionViewablePercentage")(e, f, k) : g;
      j.visiblePercentage;
      f = babelHelpers.objectWithoutPropertiesLoose(j, ["visiblePercentage"]);
      g = g;
      var l = g.intersectionRect;
      g = g.visiblePercentage;
      var m = null,
        n = !1;
      g <= 0
        ? (m = "NOT_IN_VIEWPORT")
        : l && c("isImpressionTargetOccluded")(a, l, k || h)
        ? (m =
            j.visiblePercentage === 0
              ? "OCCLUDED_BY_MARGIN"
              : d.isCometHiddenSubtree === !0
              ? "PUSH_VIEW_HIDDEN"
              : "OCCLUSION_DETECTED")
        : c("Visibility").isHidden()
        ? (m = "PAGE_VISIBILITY_HIDDEN")
        : e.height === 0 || e.width === 0
        ? (m = "TARGET_SIZE_0")
        : c("getStyleProperty")(a, "opacity") === "0"
        ? (m = "TARGET_TRANSPARENT")
        : c("getStyleProperty")(a, "visibility") === "hidden"
        ? (m = "TARGET_HIDDEN")
        : (n = !0);
      g = n === !1 ? 0 : j.visiblePercentage;
      l = b.visible;
      k = b.impressedAt;
      d = null;
      l && !n
        ? (d = "EXIT")
        : !l && n
        ? ((d = "ENTER"), (k = Date.now()))
        : b.visiblePercentage !== g && (d = "UPDATE");
      return babelHelpers["extends"](
        {
          impressedAt: k,
          invisibleReason: m,
          status: d,
          target: a,
          visible: n,
          visiblePercentage: g,
        },
        f
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CentralImpressionScrollBasedTracker",
  [
    "CentralImpressionRecord",
    "CometThrottle",
    "ImpressionLoggingTimerThreshold",
    "Visibility",
    "calcNextImpressionSnapshotRecord",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f) {
        var g = this;
        e === void 0 && (e = null);
        f === void 0 && (f = {});
        this.THROTTLE_TIMEOUT = c(
          "ImpressionLoggingTimerThreshold"
        ).THROTTLE_TIMEOUT;
        this.takeSnapshot = c("CometThrottle")(function () {
          if (g.$3 == null || g.$8 === !0) return;
          var a = c("calcNextImpressionSnapshotRecord")(g.$3, g.$2, g.$7);
          g.$9(a);
        }, this.THROTTLE_TIMEOUT);
        this.takeSnapshotWithDoubleRaf = c("CometThrottle")(function () {
          if (g.$3 == null || g.$8 === !0) return;
          var a = c("calcNextImpressionSnapshotRecord")(g.$3, g.$2, g.$7);
          g.$9(a);
        }, this.THROTTLE_TIMEOUT);
        this.$5 = e;
        this.$2 = d("CentralImpressionRecord").initImpressionRecord(a);
        this.$1 = b;
        this.$3 = a;
        this.$7 = f;
        this.$8 = !1;
        c("setTimeout")(this.takeSnapshotWithDoubleRaf, 0);
        document.addEventListener("scroll", this.takeSnapshotWithDoubleRaf, {
          capture: !0,
          passive: !0,
        });
        window.addEventListener("resize", this.takeSnapshotWithDoubleRaf, {
          capture: !0,
          passive: !0,
        });
        "MutationObserver" in window &&
          ((this.$6 = new MutationObserver(this.takeSnapshotWithDoubleRaf)),
          this.$6.observe(document, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          }));
        this.$4 = [
          c("Visibility").addListener(
            c("Visibility").HIDDEN,
            this.takeSnapshot
          ),
          c("Visibility").addListener(
            c("Visibility").VISIBLE,
            this.takeSnapshot
          ),
        ];
      }
      var b = a.prototype;
      b.getOptionalUniqueID = function () {
        return this.$5;
      };
      b.peek = function () {
        return this.$2;
      };
      b.setIsCometHiddenInSubtree = function (a) {
        this.$7.isCometHiddenSubtree = a;
      };
      b.remove = function () {
        document.removeEventListener("scroll", this.takeSnapshotWithDoubleRaf, {
          capture: !0,
          passive: !0,
        }),
          window.removeEventListener("resize", this.takeSnapshotWithDoubleRaf, {
            capture: !0,
            passive: !0,
          }),
          this.$6 && this.$6.disconnect(),
          this.$4.forEach(function (a) {
            return a.remove();
          }),
          (this.$8 = !0);
      };
      b.unmount = function () {
        var a = d("CentralImpressionRecord").calcExitRecordOnUnmount(this.$2);
        a != null && this.$9(a);
        this.remove();
      };
      b.update = function (a, b, c) {
        c === void 0 && (c = {}),
          (this.$1 = b),
          (this.$3 = a),
          (this.$7 = babelHelpers["extends"]({}, this.$7, c));
      };
      b.$9 = function (a) {
        var b = this.$2;
        this.$2 = a;
        a.status != null && this.$1(a, this, b, this.$7.isAdRefresh || !1);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "useScrollBasedImpressionTracker",
  [
    "BaseViewportMarginsContext",
    "CentralImpressionScrollBasedTracker",
    "HiddenSubtreePassiveContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a(a, b) {
      var d = k(null),
        e = k(null),
        f = i(c("BaseViewportMarginsContext")),
        g = k(null),
        l = i(c("HiddenSubtreePassiveContext")),
        m = h(
          function (b) {
            if (d.current == null) return;
            if (
              e.current == null ||
              (b != null && e.current.getOptionalUniqueID() !== b)
            ) {
              var h = !1;
              e.current != null &&
                (e.current.unmount(), (e.current = null), (h = !0));
              e.current = new (c("CentralImpressionScrollBasedTracker"))(
                d.current,
                a,
                b,
                {
                  isAdRefresh: h,
                  isCometHiddenSubtree:
                    l.getCurrentState().hiddenOrBackgrounded_FIXME,
                  viewportMargin: f,
                }
              );
              g.current != null && (g.current.remove(), (g.current = null));
              g.current = l.subscribeToChanges(function (a) {
                e.current != null &&
                  e.current.setIsCometHiddenInSubtree(
                    a.hiddenOrBackgrounded_FIXME
                  );
              });
            } else
              e.current.update(d.current, a, {
                isCometHiddenSubtree:
                  l.getCurrentState().hiddenOrBackgrounded_FIXME,
                viewportMargin: f,
              });
          },
          [l, a, f]
        ),
        n = h(
          function (a) {
            d.current !== a && a != null && ((d.current = a), m(b));
          },
          [m, b]
        );
      j(function () {
        return function () {
          e.current != null && (e.current.unmount(), (e.current = null)),
            g.current != null && (g.current.remove(), (g.current = null));
        };
      }, []);
      j(
        function () {
          m(b);
        },
        [m, b]
      );
      return n;
    }
    g["default"] = a;
  },
  98
);
__d(
  "IGDSVerifiedIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 40 40",
          children: h.jsx("path", {
            d: "M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z",
            fillRule: "evenodd",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisSponsoredBlockedElStore",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Set();
    function a(a) {
      g.add(a);
    }
    function b(a) {
      return g.has(a);
    }
    function c(a) {
      return g["delete"](a);
    }
    function d() {
      return g.size > 0;
    }
    f.m = a;
    f.c = b;
    f.d = c;
    f.b = d;
  },
  66
);
__d(
  "PolarisSponsoredElDisplayMonitor",
  ["clearTimeout", "cometGHLContentDisplayCheck", "setTimeoutCometLoggingPri"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(),
      i = 1e3,
      j = null;
    a = function (a) {
      h.has(a) || h.add(a);
      j === null && k();
      return {
        dispose: function () {
          h["delete"](a), h.size === 0 && (c("clearTimeout")(j), (j = null));
        },
      };
    };
    var k = function a() {
      h.forEach(function (a, b) {
        a = b.onLogBlockCallback;
        var d = b.startTime;
        b = b.targetRef;
        b = b.current;
        if (b == null) return;
        b = c("cometGHLContentDisplayCheck")(b);
        if (!b) {
          b = Date.now() - d;
          a(b);
        }
      }),
        (j = c("setTimeoutCometLoggingPri")(a, i));
    };
    g.m = a;
  },
  98
);
__d(
  "IgWebSwankFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4625");
    b = d("FalcoLoggerInternal").create("ig_web_swank", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "usePolarisSponsoredElTracker",
  [
    "IgWebSwankFalcoEvent",
    "PolarisSponsoredBlockedElStore",
    "PolarisSponsoredElDisplayMonitor",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.mediaType,
        e = a.position,
        f = a.postId,
        g = a.trackingToken,
        k = j(null),
        l = j(!1),
        m = h(
          function (a) {
            if (l.current) return;
            l.current = !0;
            c("IgWebSwankFalcoEvent").log(function () {
              return { hd: String(a), sli: String(e), tt: g, mt: String(b) };
            });
            var f = k.current;
            f !== null && d("PolarisSponsoredBlockedElStore").m(f);
          },
          [b, e, g]
        );
      i(
        function () {
          var a = k.current;
          return function () {
            a && d("PolarisSponsoredBlockedElStore").d(a);
          };
        },
        [k, e, f]
      );
      i(
        function () {
          var a = null,
            b = Date.now();
          if (k === null) return;
          if (l.current === !0) return;
          a = d("PolarisSponsoredElDisplayMonitor").m({
            onLogBlockCallback: m,
            startTime: b,
            targetRef: k,
          });
          return function () {
            a && a.dispose();
          };
        },
        [k, f, l, m]
      );
      return k;
    }
    g["default"] = a;
  },
  98
);
__d(
  "InstagramAdSubImpressionSecondChannelFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("2965");
    b = d("FalcoLoggerInternal").create(
      "instagram_ad_sub_impression_second_channel",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "PolarisMediaPrefetchContainer.react",
  [
    "PolarisMediaPrefetcher.react",
    "PolarisPostUtils",
    "PolarisReactRedux",
    "nullthrows",
    "polarisPostSelectors",
    "polarisStorySelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = [];
    function i(a) {
      if (a.isVideo === !0) return null;
      return a.src != null && a.src !== "" && a.displayResources
        ? {
            type: d("PolarisMediaPrefetcher.react").PREFETCHED_IMAGE,
            id: a.id,
            src: a.src,
            srcSet: a.displayResources,
            intrinsicDimensions: c("nullthrows")(a.dimensions),
          }
        : null;
    }
    function j(a) {
      var b = a.sidecarChildren;
      if (b != null && b.length) {
        var c = d("PolarisPostUtils").getInitialSidecarIndexFromPost(a);
        return i(b[c]);
      }
      return i(a);
    }
    function a(a, b) {
      var c = b.getResourceFromPost || j,
        e = d("polarisStorySelectors").getCurrentReel(a),
        f = a.stories.currentReelItemIndex;
      e = e != null && e.itemIds != null ? e.itemIds[f] : null;
      return {
        currentPostId: e,
        enabled:
          b.viewKey == null ||
          !!a.mediaPrefetches.isEnabledForView.get(b.viewKey),
        resources: (b.postIds || h)
          .map(function (b) {
            b = d("polarisPostSelectors").getPostOrNullById(a, b);
            return b ? c(b) : null;
          })
          .filter(Boolean),
      };
    }
    b = d("PolarisReactRedux").connect(a)(
      d("PolarisMediaPrefetcher.react").MediaPrefetcher
    );
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSCommentPanoOutlineIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z",
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "2",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "IGDSNftPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M20.5 4.782 14 1.03a4.008 4.008 0 0 0-4 0L3.5 4.782a4.014 4.014 0 0 0-2 3.465v7.506a4.013 4.013 0 0 0 2 3.464L10 22.97a4.011 4.011 0 0 0 4 0l6.5-3.753a4.013 4.013 0 0 0 2-3.464V8.247a4.014 4.014 0 0 0-2-3.465Zm-3.296 5.182-5.998 5.996a1 1 0 0 1-1.414 0l-3.249-3.251a1 1 0 0 1 1.414-1.414l2.542 2.544 5.291-5.29a1 1 0 1 1 1.414 1.415Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "usePolarisLandingPagePageIdentifier",
  ["PolarisAuthActionConstants", "PolarisReactRedux"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      switch (a) {
        case d("PolarisAuthActionConstants").AUTH.signup:
          return "signupPage";
        case d("PolarisAuthActionConstants").AUTH.none:
          return "rootLandingPage";
        case d("PolarisAuthActionConstants").AUTH.login:
        default:
          return "loginPage";
      }
    }
    function a() {
      var a = d("PolarisReactRedux").useSelector(function (a) {
        return a.auth;
      });
      a = a.authType;
      return h(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisNewCollectionModal.react",
  [
    "fbt",
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisIGCoreModalHeader",
    "PolarisIGCoreTextInput",
    "PolarisIGCoreThumbnail",
    "PolarisSavedCollectionStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState,
      k = 100,
      l = h._("Post");
    function a(a) {
      var b = a.actionText,
        e = a.errorMessage,
        f = a.onActionClick,
        g = a.onClose,
        h = a.requestInFlight;
      a = a.thumbnailSrc;
      var m = j(""),
        n = m[0],
        o = m[1];
      m = n.replace(/\s+/g, "").length === 0;
      return i.jsxs(c("IGCoreModal"), {
        "aria-label": d("PolarisSavedCollectionStrings").NEW_COLLECTION_TEXT,
        onClose: g,
        children: [
          i.jsx(c("PolarisIGCoreModalHeader"), {
            onClose: g,
            children: i.jsx(c("IGDSBox.react"), {
              padding: 4,
              position: "relative",
              children: d("PolarisSavedCollectionStrings").NEW_COLLECTION_TEXT,
            }),
          }),
          i.jsxs(c("IGDSBox.react"), {
            margin: 5,
            position: "relative",
            children: [
              a != null &&
                i.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  marginBottom: 4,
                  position: "relative",
                  width: "100%",
                  children: i.jsx(c("PolarisIGCoreThumbnail"), {
                    alt: l,
                    dimension: k,
                    shape: "rounded",
                    src: a,
                  }),
                }),
              i.jsx(c("PolarisIGCoreTextInput"), {
                autoComplete: "off",
                autoFocus: !0,
                name: "collectionName",
                onChange: function (a) {
                  return o(a.target.value);
                },
                placeholder: d("PolarisSavedCollectionStrings")
                  .COLLECTION_NAME_TEXT,
                value: n,
              }),
              e != null &&
                e.toString() !== "" &&
                i.jsx(c("IGDSBox.react"), {
                  marginBottom: 2,
                  marginTop: 1,
                  position: "relative",
                  children: i.jsx(c("IGDSText.react").Body2, {
                    color: "errorOrDestructive",
                    children: e,
                  }),
                }),
            ],
          }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            disabled: m,
            onClick: function () {
              return f(n);
            },
            children:
              h === !0
                ? i.jsx(c("IGDSBox.react"), {
                    alignItems: "center",
                    position: "relative",
                    children: i.jsx(c("IGDSSpinner.react"), { size: "small" }),
                  })
                : b,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "polarisCollectionsLoading",
  ["PolarisSavedPostsTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return (
        a.length === 1 &&
        a[0].id ===
          d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
            .ALL_MEDIA_AUTO_COLLECTION
      );
    }
    function a(a) {
      return h(a) && a[0].media_count === 0;
    }
    function b(a, b) {
      if (a.length === 0 && b.isFetching) return !0;
      return h(a) && b.isFetching ? !0 : !1;
    }
    g.onlyAutoCollection = h;
    g.onlyEmptyAutoCollection = a;
    g.collectionsLoading = b;
  },
  98
);
__d(
  "PolarisSavedPostsLogger",
  ["PolarisODS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      switch (b) {
        case "saved":
        case "SavedCollectionPage":
        case "postPage":
        case "feed":
        case "profile":
        case "selfProfilePageModal":
        case "exploreLandingPageModal":
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.createCollection." + a + "." + b
          );
          break;
        default:
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.createCollection." + a + ".undefined"
          );
      }
    }
    function b(a, b) {
      switch (b) {
        case "saved":
        case "SavedCollectionPage":
        case "postPage":
        case "feed":
        case "profile":
        case "selfProfilePageModal":
        case "exploreLandingPageModal":
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.editCollection." + a + "." + b
          );
          break;
        default:
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.editCollection." + a + ".undefined"
          );
      }
    }
    function d(a, b) {
      switch (b) {
        case "SavedCollectionPage":
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.deleteCollection." + a + ".SavedCollectionPage"
          );
          break;
        default:
          c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
            "web.deleteCollection." + a + ".undefined"
          );
      }
    }
    g.logCreateCollection = a;
    g.logEditCollection = b;
    g.logDeleteCollection = d;
  },
  98
);
__d(
  "PolarisAPICreateCollection",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b = {
        name: a,
        added_media_ids: JSON.stringify((a = b) != null ? a : []),
      };
      return d("PolarisInstapi")
        .apiPost("/api/v1/collections/create/", { body: b })
        .then(function (a) {
          return a.data;
        });
    }
    g.createCollection = a;
  },
  98
);
__d(
  "PolarisSavedPostsActionCreateCollection",
  [
    "PolarisAPICreateCollection",
    "PolarisGenericStrings",
    "PolarisSavedPostsLogger",
    "PolarisToastActions",
    "polarisNormalizeCollections",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.failureHandler,
        c = a.newCollectionName,
        e = a.postIdsToAdd,
        f = a.source,
        g = a.successHandler,
        h = a.userId;
      return function (a) {
        d("PolarisSavedPostsLogger").logCreateCollection("attempt", f);
        return d("PolarisAPICreateCollection")
          .createCollection(c, e)
          .then(function (b) {
            b = d("polarisNormalizeCollections").normalizeCollection(b);
            a({
              collection: b,
              type: "CREATE_SAVED_COLLECTION_SUCCESS",
              userId: h,
            });
            d("PolarisSavedPostsLogger").logCreateCollection("success", f);
            g != null && g(b.id);
          })
          ["catch"](function (c) {
            a(
              d("PolarisToastActions").showToast({
                text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
              })
            ),
              d("PolarisSavedPostsLogger").logCreateCollection("failure", f),
              b != null && b();
          });
      };
    }
    g.createCollection = a;
  },
  98
);
__d(
  "PolarisMediaImpressionsLogger",
  ["PolarisLogger", "PolarisLoggerUtils", "PolarisPigeonLogger", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = babelHelpers["extends"]({}, d("PolarisLogger").getExtra(), {
        media_id: a.mediaId,
        media_type: a.mediaType,
        owner_id: a.ownerId,
        surface: a.surface,
      });
      var b = {
        obj_type: "url",
        obj_id: d("PolarisLoggerUtils").trimAndSanitizeUrl(
          window.location.href
        ),
      };
      d("PolarisLogger").logPigeonEvent(
        d("PolarisPigeonLogger").createEvent(
          "instagram_web_media_impressions",
          a,
          b
        )
      );
    }
    function a(a, b) {
      if (c("qex")._("212") === !0) return;
      var d =
        a.isSidecar === !0 ? "sidecar" : a.isVideo === !0 ? "video" : "photo";
      h({
        mediaId: a.id,
        mediaType: d,
        ownerId: a == null ? void 0 : (d = a.owner) == null ? void 0 : d.id,
        surface: b,
      });
    }
    g.logImpressionForPost = a;
  },
  98
);
__d(
  "PolarisUserTagSheet.react",
  [
    "IGDSBox.react",
    "IGDSListItem.react",
    "IGDSText.react",
    "PolarisIGCoreConstants",
    "PolarisIGCoreSheetOrModal",
    "PolarisIGCoreVerifiedBadge",
    "PolarisLinkBuilder",
    "PolarisLogger",
    "PolarisUA",
    "PolarisUserAvatar.react",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      a = a.user;
      var b = a.isVerified;
      a = a.username;
      return a === void 0
        ? null
        : h.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            children: [
              h.jsx(c("IGDSText.react").BodyEmphasized, { children: a }),
              h.jsx(c("IGDSBox.react"), {
                marginStart: 2,
                children:
                  b &&
                  h.jsx(c("PolarisIGCoreVerifiedBadge"), { size: "small" }),
              }),
            ],
          });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.onClick;
      a = a.user;
      var e = a.fullName,
        f = a.profilePictureUrl,
        g = a.username;
      return h.jsx(c("IGDSListItem.react"), {
        addOnStart: h.jsx(c("PolarisUserAvatar.react"), {
          isLink: !1,
          profilePictureUrl: f,
          size: c("PolarisIGCoreConstants").AVATAR_SIZES.medium,
          username: g,
        }),
        linkProps: { url: d("PolarisLinkBuilder").buildUserLink(g) },
        onPress: function () {
          b();
        },
        subtitle: e,
        testid: void 0,
        title: h.jsx(i, { user: a }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.mediaId;
      a = a.usertags;
      var e = function () {
        d("PolarisLogger").logAction("userTagSheetItemClick", {
          mediaId: b,
          source: "UserTagSheetItems",
        });
      };
      return a.map(function (a) {
        a = c("nullthrows")(a);
        a = a.user;
        return h.jsx(j, { onClick: e, user: a }, a.id);
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        d("PolarisLogger").logAction("userTagSheetImpression", {
          mediaId: this.props.mediaId,
          numUsertags: this.props.usertags.length,
          source: "UserTagSheet",
        });
      };
      e.render = function () {
        var a = this.props,
          b = a.mediaId,
          e = a.onClose,
          f = a.title;
        a = a.usertags;
        return h.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
          onClose: e,
          title: f,
          children: h.jsx(c("IGDSBox.react"), {
            flex: "grow",
            marginBottom: d("PolarisUA").isMobile() ? 6 : void 0,
            overflow: "auto",
            children: h.jsx(k, { mediaId: b, usertags: a }),
          }),
        });
      };
      return b;
    })(h.PureComponent);
    g.Username = i;
    g.UserTagSheetItem = j;
    g.UserTagSheetItems = k;
    g.UserTagSheet = a;
  },
  98
);
__d(
  "PolarisScrollableContainer.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = h.createContext({ scrollableContainer: null });
    function a(a) {
      var b = i(null);
      return h.jsx(j.Provider, {
        value: { scrollableContainer: b.current },
        children: h.jsx("div", {
          className: a.className,
          ref: b,
          style: a.style,
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ScrollableContainerContext = j;
    g.ScrollableContainer = a;
  },
  98
);
__d(
  "PolarisScrollWatchedComponent.react",
  [
    "PolarisEventListener",
    "PolarisRect",
    "PolarisResponsiveBlock.react",
    "PolarisScrollWatcher",
    "PolarisScrollableContainer.react",
    "debounce",
    "emptyFunction",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 30;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.$7 = function () {
            var a = e.$1;
            if (a) {
              var b = e.context.scrollableContainer,
                c;
              b
                ? (c = {
                    left: a.offsetLeft,
                    width: a.offsetWidth,
                    right: a.offsetLeft + a.offsetWidth,
                    top: a.offsetTop,
                    height: a.offsetHeight,
                    bottom: a.offsetTop + a.offsetHeight,
                  })
                : (c = d("PolarisRect").getTranslated(
                    a.getBoundingClientRect(),
                    b
                      ? { x: b.scrollLeft, y: b.scrollTop }
                      : { x: window.pageXOffset, y: window.pageYOffset }
                  ));
              return d("PolarisRect").getScaled(c, e.props.boundScaleFactor);
            }
            return {
              bottom: 0,
              height: 0,
              left: 0,
              right: 0,
              top: 0,
              width: 0,
            };
          }),
          (e.$8 = function (a) {
            e.$1 = a;
          }),
          (e.getMeasuredAreaRect = function () {
            e.setRect(e.$7());
            return c("nullthrows")(e.rect);
          }),
          (e.forceRecompute = function () {
            e.$9();
          }),
          (e.handleResize = function (a, b) {
            e.setRect(e.$7()),
              e.$10(),
              typeof e.props.onResize === "function" && e.props.onResize(a, b);
          }),
          (e.setRect = function (a) {
            e.rect = a;
          }),
          (e.$10 = function () {
            e.$2 == null &&
              (e.$2 = c("PolarisScrollWatcher").addVisibilityListener(
                e.getMeasuredAreaRect,
                e.handleVisibilityChange,
                e.context.scrollableContainer
              ));
          }),
          (e.handleVisibilityChange = function (a) {
            var b = e.rect,
              c = a !== null;
            c !== e.$5 &&
              (c ? e.props.onScrollEnter() : e.props.onScrollLeave());
            a && b
              ? (a =
                  (d("PolarisRect").getArea(a) / d("PolarisRect").getArea(b)) *
                  100)
              : (a = 0);
            a !== e.$4 && e.props.onScrollChange(a);
            e.$5 = c;
            e.$4 = a;
          }),
          (e.$9 = c("debounce")(
            function () {
              var a = e.$7();
              if (!e.rect || !d("PolarisRect").isEqual(a, e.rect)) {
                e.setRect(a);
                e.$10();
                a = c("PolarisScrollWatcher").listeners[c("nullthrows")(e.$2)];
                c("PolarisScrollWatcher").updateListenerVisibility(a);
              }
            },
            i,
            babelHelpers.assertThisInitialized(e)
          )),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        (this.$3 = c("PolarisEventListener").add(
          window,
          "orientationchange",
          this.$9
        )),
          (this.$6 = c("PolarisEventListener").add(window, "resize", this.$9));
      };
      e.componentWillUnmount = function () {
        this.$2 && c("PolarisScrollWatcher").removeVisibilityListener(this.$2),
          this.$3 && this.$3.remove(),
          this.$6 && this.$6.remove(),
          this.$9.reset();
      };
      e.render = function () {
        return h.jsx(c("PolarisResponsiveBlock.react"), {
          className: this.props.className,
          onResize: this.handleResize,
          ref: this.$8,
          children: this.props.children,
        });
      };
      return b;
    })(h.Component);
    a.defaultProps = {
      boundScaleFactor: { x: 1, y: 1 },
      onScrollEnter: c("emptyFunction"),
      onScrollLeave: c("emptyFunction"),
      onScrollChange: c("emptyFunction"),
    };
    a.contextType = d(
      "PolarisScrollableContainer.react"
    ).ScrollableContainerContext;
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisGroupProfileAvatar.react",
  ["cx", "IGDSBox.react", "PolarisUserAvatar.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.groupProfile;
      a = a.postAuthor;
      return i.jsxs(c("IGDSBox.react"), {
        height: 32,
        position: "relative",
        width: 32,
        children: [
          i.jsx(c("PolarisUserAvatar.react"), {
            profilePictureUrl: b.profilePictureUrl,
            size: 24,
            username: b.username,
          }),
          i.jsx("div", {
            className: "_adi4",
            children: i.jsx(c("IGDSBox.react"), {
              alignItems: "end",
              direction: "row",
              justifyContent: "end",
              position: "relative",
              children: i.jsx(c("PolarisUserAvatar.react"), {
                profilePictureUrl: a.profilePictureUrl,
                size: 16,
                username: a.username,
              }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFacebookLoginLink.react",
  [
    "IGDSBox.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisAuthStrings",
    "PolarisHasModernizedUpsells",
    "PolarisIGCoreButton",
    "PolarisIGCoreIcon",
    "PolarisReactRedux",
    "polarisCentralizedUpsellSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return h.jsx(c("IGDSBox.react"), {
        "data-testid": void 0,
        marginBottom: 1,
        position: "relative",
        children: h.jsx(c("PolarisIGCoreButton"), {
          borderless: !0,
          onClick: a.onClick,
          children: h.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            children: [
              h.jsx(c("IGDSBox.react"), {
                marginEnd: 1,
                paddingX: 1,
                position: "relative",
                children: h.jsx(c("PolarisIGCoreIcon"), {
                  alt: d("PolarisAuthStrings").FB_CONTINUE_BUTTON_TEXT,
                  icon: d("PolarisAssetManagerGlyphMapping").ICONS
                    .FACEBOOK_CIRCLE_FILLED_24,
                }),
              }),
              h.jsx(c("IGDSBox.react"), {
                position: "relative",
                children: d("PolarisAuthStrings").FB_CONTINUE_BUTTON_TEXT,
              }),
            ],
          }),
        }),
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      var b = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisCentralizedUpsellSelectors").getCurrentPage(a);
      });
      return d("PolarisHasModernizedUpsells").hasModernizedUpsells(b)
        ? h.jsx(i, { onClick: a.onClick })
        : h.jsx(c("IGDSBox.react"), {
            "data-testid": void 0,
            marginBottom: 1,
            position: "relative",
            children: h.jsx(c("PolarisIGCoreButton"), {
              borderless: !0,
              onClick: a.onClick,
              children: h.jsxs(c("IGDSBox.react"), {
                alignItems: "center",
                direction: "row",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                children: [
                  h.jsx(c("IGDSBox.react"), {
                    marginEnd: 1,
                    position: "relative",
                    children: h.jsx(c("PolarisIGCoreIcon"), {
                      alt: d("PolarisAuthStrings").FB_CONTINUE_BUTTON_TEXT,
                      icon: d("PolarisAssetManagerGlyphMapping").ICONS.FB_LOGO,
                    }),
                  }),
                  h.jsx(c("IGDSBox.react"), {
                    position: "relative",
                    children: d("PolarisAuthStrings").FB_CONTINUE_BUTTON_TEXT,
                  }),
                ],
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
  "PolarisLoggedOutAppUpsellInnerContent.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSDivider.react",
    "IGDSText.react",
    "PolarisAppInstallGuideStrings",
    "PolarisAppInstallStrings",
    "PolarisAssetManagerGlyphMapping",
    "PolarisAuthStrings",
    "PolarisConfig",
    "PolarisFBConnectHelpers",
    "PolarisFacebookLoginLink.react",
    "PolarisHasModernizedUpsells",
    "PolarisIGCoreButton",
    "PolarisIGCoreIconButton",
    "PolarisLinkBuilder",
    "PolarisLoggedOutCtaLogger",
    "PolarisLoggedOutLoginConstants",
    "PolarisLoggedOutNetzDGReportLink.react",
    "PolarisLoggedOutUpsellStrings",
    "PolarisLogger",
    "PolarisNavigationStrings",
    "PolarisOpenInApp",
    "PolarisOrBar.react",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUserAvatar.react",
    "browserHistory",
    "polarisCentralizedUpsellSelectors",
    "polarisUserSelectors",
    "react",
    "usePolarisGetDeepLink",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useMemo,
      l = 45,
      m = 75,
      n = 64;
    function o(a, b, c, e, f, g) {
      if (a === "ig_shop_serp")
        return {
          header: d("PolarisAppInstallGuideStrings").GUIDE_HEADER_IG_SHOP,
          body: d("PolarisAppInstallGuideStrings")
            .GUIDE_BODY_APP_UPSELL_TEXT_FROM_IG_SHOP,
        };
      if (a === "highlight")
        return {
          header: d("PolarisAppInstallGuideStrings")
            .GUIDE_HEADER_APP_UPSELL_TEXT_FROM_HIGHLIGHT,
          body: d("PolarisAppInstallGuideStrings")
            .GUIDE_BODY_APP_UPSELL_TEXT_FROM_HIGHLIGHT,
        };
      if (b === "sidecar_item_upsell" && c != null)
        return {
          header: d("PolarisLoggedOutUpsellStrings").getSeeMoreFrom(c),
          body: d("PolarisLoggedOutUpsellStrings").SIDECAR_UPSELL_BODY,
        };
      if (a === "story")
        return f
          ? {
              header: d("PolarisAppInstallGuideStrings")
                .IG_LITE_CARBON_GUIDE_HEADER_APP_UPSELL_TEXT_FROM_STORIES,
              body: d("PolarisAppInstallGuideStrings")
                .GUIDE_BODY_APP_UPSELL_TEXT_FROM_STORIES_V1,
            }
          : {
              header: d("PolarisAppInstallGuideStrings")
                .GUIDE_HEADER_APP_UPSELL_TEXT_FROM_STORIES_V1,
              body: d("PolarisAppInstallGuideStrings")
                .GUIDE_BODY_APP_UPSELL_TEXT_FROM_STORIES_V1,
            };
      if (a === "reels_tab")
        return {
          header: d("PolarisAppInstallStrings").REELS_UPSELL_HEADER,
          body: d("PolarisAppInstallStrings").REELS_UPSELL_BODY,
        };
      return a === "explore_landing_page" || a === "explore_topic_page"
        ? {
            header: d("PolarisAppInstallStrings").DISCOVER_GUIDE_HEADER,
            body: d("PolarisAppInstallGuideStrings").EXPLORE_PAGE_UPSELL_BODY,
          }
        : d("PolarisHasModernizedUpsells").hasModernizedUpsells(g)
        ? {
            header: d("PolarisAppInstallStrings").DISCOVER_GUIDE_HEADER,
            body: d("PolarisAppInstallStrings").discoverGuideText(e),
          }
        : {
            header: d("PolarisAppInstallGuideStrings").GUIDE_HEADER_COPY,
            body: d("PolarisAppInstallGuideStrings").GUIDE_BODY_TEXT,
          };
    }
    function p(a) {
      a = a.triggeringPageType === "story" ? window.location.href : void 0;
      return (
        d("PolarisConfig").isNetzDGEligible() &&
        i.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          "data-testid": void 0,
          justifyContent: "center",
          paddingY: 2,
          position: "relative",
          children: [
            i.jsx(c("IGDSDivider.react"), { variant: "elevated" }),
            i.jsx(c("IGDSBox.react"), {
              marginTop: 4,
              position: "relative",
              children: i.jsx(c("PolarisLoggedOutNetzDGReportLink.react"), {
                reportedUrlOrContentId: a,
                textSize: "miniscule",
              }),
            }),
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      return i.jsxs(c("IGDSBox.react"), {
        "data-testid": void 0,
        padding: 4,
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            maxHeight: 800,
            overflow: "auto",
            position: "relative",
            children:
              a.isSidecarPostLandscape !== !0 &&
              i.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                "data-testid": void 0,
                justifyContent: "center",
                marginBottom: 1,
                paddingY: a.isSidecarUpsell ? 2 : 3,
                position: "relative",
                children:
                  a.userPicUrl != null &&
                  a.userPicUrl !== "" &&
                  (a.ctaType === "story_interstitial" || a.isSidecarUpsell)
                    ? i.jsx(c("PolarisUserAvatar.react"), {
                        "data-testid": void 0,
                        isLink: !1,
                        onClick: function (b) {
                          return a.onAppClick(b, "modal_user_avatar");
                        },
                        profilePictureUrl: a.userPicUrl,
                        size: l,
                        username: a.userUsername,
                      })
                    : i.jsx(c("IGDSBox.react"), {
                        alignItems: "center",
                        "data-testid": void 0,
                        height: n,
                        position: "relative",
                        children: i.jsx(c("PolarisUserAvatar.react"), {
                          isLink: !1,
                          onClick: function (b) {
                            return a.onAppClick(b, "modal_user_avatar");
                          },
                          profilePictureUrl: a.userPicUrl,
                          size: n,
                          username: a.userUsername,
                        }),
                      }),
              }),
          }),
          i.jsx(c("IGDSBox.react"), {
            marginBottom: 3,
            marginTop: 2,
            position: "relative",
            children: i.jsx(c("IGDSText.react").LabelEmphasized, {
              textAlign: "center",
              children: a.guideText.header,
            }),
          }),
          i.jsx(c("IGDSBox.react"), {
            marginBottom: a.isSidecarUpsell ? 3 : 5,
            position: "relative",
            children: i.jsx(c("IGDSText.react").Body, {
              color: "secondaryText",
              textAlign: "center",
              children: a.guideText.body,
            }),
          }),
          i.jsx(c("IGDSBox.react"), {
            marginBottom: a.isSidecarUpsell ? 1 : 3,
            position: "relative",
            children: i.jsx(c("PolarisIGCoreButton"), {
              color: "ig-primary-button",
              fullWidth: !0,
              large: !0,
              onClick: function (b) {
                return a.onAppClick(b, "modal_button");
              },
              children: i.jsx(c("IGDSText.react").BodyEmphasized, {
                color: "webAlwaysWhite",
                textAlign: "center",
                children:
                  a.isIgLiteUpsell && a.pageType === "story"
                    ? d("PolarisAppInstallStrings").GET_THE_APP
                    : a.isSidecarUpsell ||
                      a.pageType === "highlight" ||
                      a.pageType === "reels_tab" ||
                      a.pageType === "post" ||
                      a.pageType === "profile" ||
                      a.pageType === "location" ||
                      a.pageType === "explore_landing_page" ||
                      a.pageType === "explore_topic_page"
                    ? d("PolarisAppInstallStrings").GET_THE_APP_V3
                    : d("PolarisAppInstallStrings").SWITCH_TO_THE_APP_V2,
              }),
            }),
          }),
          !a.isSidecarUpsell &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("PolarisFacebookLoginLink.react"), {
                  onClick: a.onFacebookLoginClick,
                }),
                i.jsx(c("IGDSBox.react"), {
                  marginBottom: 3,
                  marginTop: 3,
                  position: "relative",
                  children: i.jsx(c("IGDSDivider.react"), {
                    variant: "elevated",
                  }),
                }),
              ],
            }),
          a.isSidecarPostLandscape !== !0 &&
            i.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              marginBottom: 1,
              marginTop: a.isSidecarUpsell ? 1 : 0,
              position: "relative",
              children: i.jsxs(c("IGDSText.react").Body, {
                children: [
                  i.jsx(c("IGDSText.react").Body, {
                    children: i.jsx(c("PolarisIGCoreButton"), {
                      borderless: !0,
                      href: d("PolarisRoutes").LOGIN_PATH,
                      onClick: a.onLoginClick,
                      children: i.jsx(c("IGDSText.react").BodyEmphasized, {
                        color: "primaryButton",
                        children: d("PolarisNavigationStrings").LOG_IN_TEXT,
                      }),
                    }),
                  }),
                  " ",
                  i.jsx(c("IGDSText.react").Body, {
                    color: "secondaryText",
                    children: d("PolarisAuthStrings").OR,
                  }),
                  " ",
                  i.jsx(c("IGDSText.react").Body, {
                    children: i.jsx(c("PolarisIGCoreButton"), {
                      borderless: !0,
                      href: a.signupPath,
                      onClick: a.onSignupClick,
                      children: i.jsx(c("IGDSText.react").BodyEmphasized, {
                        color: "primaryButton",
                        children: d("PolarisNavigationStrings").SIGN_UP_TEXT,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          i.jsx(p, { triggeringPageType: a.pageType }),
        ],
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.ctaType,
        e = a.ctaVersion,
        f = a.isSidecarPostLandscape,
        g = a.triggeringPageType,
        n = a.triggeringUserDisplayName,
        r = a.triggeringUserPicUrl,
        s = a.triggeringUserUsername,
        t = c("usePolarisGetDeepLink")(),
        u = e === "instagramlitecarbon";
      a = b === "sidecar_item_upsell";
      var v = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisCentralizedUpsellSelectors").getCurrentPage(a);
        }),
        w = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisCentralizedUpsellSelectors").getLastViewedOwnerID(a);
        }),
        x = d("PolarisReactRedux").useSelector(function (a) {
          return a.navigation.pageIdentifier;
        }),
        y = d("PolarisReactRedux").useSelector(function (a) {
          return w != null ? d("polarisUserSelectors").getUserById(a, w) : null;
        }),
        z = d("PolarisLinkBuilder").buildSignupLink(),
        A = k(
          function () {
            return o(g, b, n, s, u, v);
          },
          [b, g, n, s, u, v]
        ),
        B = j(
          function (a, c) {
            a.preventDefault();
            d("PolarisLogger").logAction("appInstallClick", {
              medium: "installLink",
              platform: d("PolarisConfig").getAppPlatform(),
              source: d("PolarisLoggedOutLoginConstants").getPageIdentifier(g),
              triggering_source: c,
            });
            d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent(
              babelHelpers["extends"](
                { ctaType: b, ctaVersion: e, eventName: "app_open_click" },
                x != null && { module: x }
              )
            );
            a = t();
            c = a.android;
            var f = a.ios;
            a = a.originalPath;
            d("PolarisOpenInApp").openInApp(c, f, a, null, u);
          },
          [b, e, t, u, x, g]
        ),
        C = j(
          function () {
            d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent(
              babelHelpers["extends"](
                { ctaType: b, ctaVersion: e, eventName: "login_click" },
                x != null && { module: x }
              )
            );
          },
          [b, e, x]
        ),
        D = j(
          function () {
            d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent(
              babelHelpers["extends"](
                { ctaType: b, ctaVersion: e, eventName: "signup_click" },
                x != null && { module: x }
              )
            );
          },
          [b, e, x]
        );
      function E(a) {
        a.preventDefault();
        d("PolarisFBConnectHelpers").redirectToFBOAuth(
          d("browserHistory").browserHistory.location.pathname,
          d("PolarisLoggedOutLoginConstants").getPageIdentifier(g),
          b,
          e
        );
        return;
      }
      return d("PolarisHasModernizedUpsells").hasModernizedUpsells(v)
        ? i.jsx(q, {
            ctaType: b,
            guideText: A,
            isIgLiteUpsell: u,
            isSidecarPostLandscape: f,
            isSidecarUpsell: a,
            onAppClick: B,
            onFacebookLoginClick: E,
            onLoginClick: C,
            onSignupClick: D,
            pageType: g,
            signupPath: z,
            userPicUrl:
              g === "reels_tab"
                ? y == null
                  ? void 0
                  : y.profilePictureUrl
                : r,
            userUsername: s,
          })
        : i.jsxs(c("IGDSBox.react"), {
            "data-testid": void 0,
            padding: 4,
            position: "relative",
            children: [
              i.jsx(c("IGDSBox.react"), {
                maxHeight: 800,
                overflow: "auto",
                position: "relative",
                children:
                  f !== !0 &&
                  i.jsx(c("IGDSBox.react"), {
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 1,
                    paddingY: a ? 2 : 3,
                    position: "relative",
                    children:
                      r != null && r !== "" && (b === "story_interstitial" || a)
                        ? i.jsx(c("PolarisUserAvatar.react"), {
                            isLink: !1,
                            onClick: function (a) {
                              return B(a, "modal_user_avatar");
                            },
                            profilePictureUrl:
                              y == null ? void 0 : y.profilePictureUrl,
                            size: a ? m : l,
                            username: s,
                          })
                        : i.jsx(c("PolarisIGCoreIconButton"), {
                            alt: h._("Instagram"),
                            icon:
                              u ||
                              g === "explore_landing_page" ||
                              g === "explore_topic_page"
                                ? d("PolarisAssetManagerGlyphMapping").ICONS
                                    .QP_INSTAGRAM
                                : d("PolarisAssetManagerGlyphMapping").ICONS
                                    .APP_ICON_45,
                            onClick: function (a) {
                              return B(a, "modal_icon");
                            },
                          }),
                  }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: 3,
                marginTop: 2,
                position: "relative",
                children: i.jsx(c("IGDSText.react").LabelEmphasized, {
                  textAlign: "center",
                  children: A.header,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: a ? 3 : 5,
                position: "relative",
                children: i.jsx(c("IGDSText.react").Body, {
                  color: "secondaryText",
                  textAlign: "center",
                  children: A.body,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: 1,
                position: "relative",
                children: i.jsxs(c("PolarisIGCoreButton"), {
                  color: "ig-primary-button",
                  fullWidth: !0,
                  large: !0,
                  onClick: function (a) {
                    return B(a, "modal_button");
                  },
                  children: [
                    a &&
                      i.jsx(c("IGDSText.react").Body, {
                        color: "webAlwaysWhite",
                        textAlign: "center",
                        children: d("PolarisAppInstallStrings").GET_THE_APP_V3,
                      }),
                    !a &&
                      i.jsx(c("IGDSText.react").BodyEmphasized, {
                        color: "webAlwaysWhite",
                        textAlign: "center",
                        children:
                          u && g === "story"
                            ? d("PolarisAppInstallStrings").GET_THE_APP
                            : g === "explore_landing_page" ||
                              g === "explore_topic_page"
                            ? d("PolarisAppInstallStrings").GET_THE_APP_V3
                            : d("PolarisAppInstallStrings")
                                .SWITCH_TO_THE_APP_V2,
                      }),
                  ],
                }),
              }),
              !a &&
                i.jsxs(i.Fragment, {
                  children: [
                    i.jsx(c("IGDSBox.react"), {
                      marginBottom: 3,
                      marginTop: 3,
                      position: "relative",
                      children:
                        g !== "explore_landing_page" &&
                        g !== "explore_topic_page" &&
                        i.jsx(c("PolarisOrBar.react"), { isElevated: !0 }),
                    }),
                    i.jsx(c("PolarisFacebookLoginLink.react"), {
                      onClick: function (a) {
                        return E(a);
                      },
                    }),
                    i.jsx(c("IGDSBox.react"), {
                      marginBottom: 3,
                      marginTop: 3,
                      position: "relative",
                      children: i.jsx(c("IGDSDivider.react"), {
                        variant: "elevated",
                      }),
                    }),
                  ],
                }),
              f !== !0 &&
                i.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  "data-testid": void 0,
                  marginBottom: 1,
                  marginTop: a ? 3 : 0,
                  position: "relative",
                  children: i.jsxs(c("IGDSText.react").Body, {
                    children: [
                      i.jsx(c("IGDSText.react").BodyEmphasized, {
                        children: i.jsx(c("IGDSButton.react"), {
                          display: "block",
                          href: d("PolarisRoutes").LOGIN_PATH,
                          label: d("PolarisLoggedOutUpsellStrings")
                            .LOGIN_BUTTON_SENTENCE_CASE_TEXT,
                          onClick: function () {
                            return C();
                          },
                          variant: "primary_link",
                        }),
                      }),
                      " ",
                      i.jsx(c("IGDSText.react"), {
                        color: "secondaryText",
                        children: d("PolarisAuthStrings").OR,
                      }),
                      " ",
                      i.jsx(c("IGDSText.react").BodyEmphasized, {
                        children: i.jsx(c("IGDSButton.react"), {
                          display: "block",
                          href: z,
                          label: d("PolarisLoggedOutUpsellStrings")
                            .SIGNUP_BUTTON_TEXT_LOWER_CASE_TEXT,
                          onClick: function () {
                            return D();
                          },
                          variant: "primary_link",
                        }),
                      }),
                    ],
                  }),
                }),
              i.jsx(p, { triggeringPageType: g }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisLoggedOutContextualLoginText.react",
  ["PolarisIGCoreText", "PolarisLoggedOutLoginConstants", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.color;
      b = b === void 0 ? "web-always-white" : b;
      var e = a.intentSource,
        f = a.triggeringPageType;
      a = a.username;
      return h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
        color: b,
        "data-testid": void 0,
        textAlign: "center",
        children: d("PolarisLoggedOutLoginConstants").getContextualLoginText(
          e,
          f,
          a
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisAsyncEntityQRModal",
  [
    "JSResourceForInteraction",
    "PolarisAsyncComponent",
    "react",
    "xigRequireInterop",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({
      displayName: "EntityQRModal",
      resolve: function () {
        return c("JSResourceForInteraction")("PolarisEntityQRModal.react")
          .__setRef("PolarisAsyncEntityQRModal")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          });
      },
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisSensitivityOverlayCenterButton.react",
  ["PolarisIGCoreButton", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.buttonText;
      a = a.handler;
      return b == null
        ? null
        : h.jsx(c("PolarisIGCoreButton"), {
            color: "web-always-white",
            onClick: a,
            children: b,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "polarisDisplayPropertiesSelectors",
  ["reselect"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 16 / 9;
    b = d("reselect").createSelector(
      function (a) {
        return a.displayProperties.viewportHeight;
      },
      function (a) {
        return a.displayProperties.viewportWidth;
      },
      function (a, b) {
        return a / b > h;
      }
    );
    function a(a) {
      return a.displayProperties.viewportWidth;
    }
    g.getIsTallDevice = b;
    g.getViewportWidth = a;
  },
  98
);
__d(
  "PolarisFacepileItem.react",
  [
    "PolarisIGCoreConstants",
    "PolarisReactRedux",
    "PolarisUserAvatar.react",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.avatarSize;
      b = b === void 0 ? "extraSmall" : b;
      a = a.user;
      return h.jsx(c("PolarisUserAvatar.react"), {
        isLink: !1,
        profilePictureUrl: a.profilePictureUrl,
        size: c("PolarisIGCoreConstants").AVATAR_SIZES[b],
        username: a.username,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      b = b.userId;
      return { user: d("polarisUserSelectors").getUserById(a, b) };
    }
    e = d("PolarisReactRedux").connect(b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisFacepile.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisErrorBoundary.react",
    "PolarisFacepileItem.react",
    "PolarisIGCoreConstants",
    "PolarisIGCorePressable",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.avatarSize,
        d = b === void 0 ? "extraSmall" : b;
      b = a.border;
      var e = b === void 0 ? "opaque" : b,
        f = a.onClick;
      b = a.overlapDirection;
      b = b === void 0 ? "right" : b;
      a = [].concat(a.userIds);
      var g = c("PolarisIGCoreConstants").AVATAR_SIZES[d],
        h = a.length,
        j = b === "left",
        k = !j;
      if (h === 0) return null;
      k && a.reverse();
      var l = function () {
        f != null && f();
      };
      return i.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        justifyContent: j ? "start" : "end",
        position: "relative",
        children: a.map(function (a, b) {
          var f = { height: g + "px", width: g + "px", order: "" + (b + 1) };
          k && (f.order = String(h - (b + 1)));
          return i.jsx(
            c("PolarisIGCorePressable"),
            {
              className:
                (e === "opaque" ? "_ab0q" : "") +
                (e === "transparent" ? " _ab0r" : "") +
                (b > 0 && j ? " _ab0s" : "") +
                (b > 0 && k ? " _ab0t" : "") +
                " _ab0u",
              onPress: l,
              style: f,
              children: i.jsx(c("PolarisErrorBoundary.react"), {
                errorRenderer: function (a) {
                  return null;
                },
                children: i.jsx(c("PolarisFacepileItem.react"), {
                  avatarSize: d,
                  userId: a,
                }),
              }),
            },
            b
          );
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisLocationLink.react",
  ["PolarisFastLink.react", "PolarisLinkBuilder", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.className;
      a = a.location;
      var e = (a == null ? void 0 : a.hasPublicPage) === !0 && !!a.id;
      return e
        ? h.jsx(c("PolarisFastLink.react"), {
            className: b,
            href: d("PolarisLinkBuilder").buildLocationLink({
              id: (e = a.id) != null ? e : "",
              slug: a.slug,
            }),
            children: (e = a.name) != null ? e : "",
          })
        : h.jsx("span", {
            className: b,
            children: (e = a.name) != null ? e : "",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "ZenonCallInviteModelTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      missed: "missed",
      ringing: "ringing",
      unsupported_browser: "unsupported_browser",
    };
    f.CallInviteModelType = a;
  },
  66
);
__d(
  "IGDSCallFilled24Icon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M4.9 24.002q-.2 0-.4-.008a3.319 3.319 0 0 1-2.161-.92A18.862 18.862 0 0 1 .454 21.02a2.223 2.223 0 0 1 .171-2.893 14.91 14.91 0 0 1 5.829-4.014 2.5 2.5 0 0 1 1.896.186l.96.512a.888.888 0 0 0 .75.044 8.653 8.653 0 0 0 2.872-1.922 8.66 8.66 0 0 0 1.922-2.871.889.889 0 0 0-.044-.75l-.512-.962a2.495 2.495 0 0 1-.186-1.895 14.906 14.906 0 0 1 4.014-5.83 2.22 2.22 0 0 1 2.893-.17 18.89 18.89 0 0 1 2.056 1.884 3.323 3.323 0 0 1 .92 2.16c.206 5.552-3.946 10.564-6.44 13.057-2.432 2.433-7.264 6.446-12.654 6.446Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "IGDSVideoChatFilled24Icon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M21.259 5.935q-.401.404-.877.88a2.998 2.998 0 0 0-.88 2.121v6.18a3 3 0 0 0 .878 2.121l.879.881A1.653 1.653 0 0 0 24 16.953V7.101a1.653 1.653 0 0 0-2.742-1.166Zm-7.075-3.408H3.818A3.823 3.823 0 0 0-.001 6.345v11.364a3.823 3.823 0 0 0 3.819 3.818h10.366a3.823 3.823 0 0 0 3.818-3.818V6.345a3.823 3.823 0 0 0-3.818-3.818Z",
            fillRule: "evenodd",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisAsyncCreationModal",
  [
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "JSResourceForInteraction",
    "PolarisAsyncComponent",
    "PolarisGetCreationModalDimensions",
    "react",
    "xigRequireInterop",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({
      fallback: a.jsx(c("IGCoreModal"), {
        size: "creation",
        children: a.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          height: c("PolarisGetCreationModalDimensions")().modalDimensions
            .height,
          justifyContent: "center",
          maxHeight: c("PolarisGetCreationModalDimensions")().modalDimensions
            .maxHeight,
          maxWidth: c("PolarisGetCreationModalDimensions")().modalDimensions
            .maxWidth,
          position: "relative",
          width: c("PolarisGetCreationModalDimensions")().modalDimensions.width,
          children: a.jsx(c("IGDSSpinner.react"), { size: "medium" }),
        }),
      }),
      displayName: "CreationModal",
      resolve: function () {
        return c("JSResourceForInteraction")("PolarisCreationModal.react")
          .__setRef("PolarisAsyncCreationModal")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          });
      },
    });
    g["default"] = b;
  },
  98
);
__d(
  "PolarisAsyncSwitchAccountsModal",
  [
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "JSResourceForInteraction",
    "PolarisAsyncComponent",
    "react",
    "xigRequireInterop",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({
      fallback: a.jsx(c("IGCoreModal"), {
        children: a.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          height: 112,
          justifyContent: "center",
          position: "relative",
          width: "100%",
          children: a.jsx(c("IGDSSpinner.react"), { size: "medium" }),
        }),
      }),
      displayName: "SwitchAccountsModal",
      resolve: function () {
        return c("JSResourceForInteraction")("PolarisSwitchAccountsModal.react")
          .__setRef("PolarisAsyncSwitchAccountsModal")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          });
      },
    });
    g["default"] = b;
  },
  98
);
__d(
  "usePolarisFeedVariantScrollRestore",
  [
    "CometRouteParams",
    "PolarisFeedVariants",
    "PolarisScrollPositionHistory",
    "react",
    "usePolarisIsOnFeedPage",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useState;
    function a(a) {
      var b = c("usePolarisIsOnFeedPage")(),
        e = i(0),
        f = e[0],
        g = e[1];
      e = d("CometRouteParams").useRouteParams();
      var j =
          (e = c("PolarisFeedVariants").cast(
            String(e == null ? void 0 : e.variant)
          )) != null
            ? e
            : "home",
        k = c("usePrevious")(j);
      h(
        function () {
          if (!b) return;
          if (k === "home" && j !== "home") {
            var c;
            g(
              (c = a == null ? void 0 : a.scrollTop) != null
                ? c
                : window.scrollY
            );
            d("PolarisScrollPositionHistory").setScrollPosition(a, 0, 0);
          } else
            k != null &&
              k !== "home" &&
              j === "home" &&
              d("PolarisScrollPositionHistory").setScrollPosition(a, 0, f);
        },
        [a, b, g, k, j, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisScrollPositionManager.react",
  [
    "PolarisScrollPositionHistory",
    "browserHistory",
    "react",
    "usePolarisFeedVariantScrollRestore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useLayoutEffect;
    function a(a) {
      a = a.container;
      var b = a == null ? void 0 : a.current;
      c("usePolarisFeedVariantScrollRestore")(b);
      h(
        function () {
          if (b === null) return function () {};
          var a = d("browserHistory").browserHistory.location;
          d("PolarisScrollPositionHistory").restoreScrollPosition(
            d("PolarisScrollPositionHistory").shouldRestoreScroll(
              d("browserHistory").browserHistory
            ),
            b
          );
          return function () {
            d("PolarisScrollPositionHistory").saveScrollPosition(a, b);
          };
        },
        [b]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGWebPreCallContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    g["default"] = b;
  },
  98
);
__d(
  "XPolarisCallControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/call/",
      Object.freeze({ has_video: !0, is_e2ee_mandated: !1, users_to_ring: [] }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisCallNavigator",
  [
    "PolarisAPIHelpers",
    "PolarisCallGatingHelpers",
    "PolarisNavigationUtils",
    "XPolarisCallControllerRouteBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "https://call.instagram.com";
    function a(a, b, e) {
      e === void 0 && (e = null);
      e = e === "" ? null : e;
      var f;
      d("PolarisCallGatingHelpers").isCallsPathMigrationEnabled()
        ? e != null
          ? (f = c("XPolarisCallControllerRouteBuilder").buildURL({
              has_video: b,
              ig_thread_id: a,
              server_info_data: e,
            }))
          : (f = c("XPolarisCallControllerRouteBuilder").buildURL({
              has_video: b,
              ig_thread_id: a,
            }))
        : (f = d("PolarisAPIHelpers").appendQueryParameters(h, {
            has_video: b,
            ig_thread_id: a,
            server_info_data: e,
          }));
      d("PolarisNavigationUtils").openURLWithFullPageReload(f, {
        openInNewTab: !0,
      });
    }
    g.launchCall = a;
  },
  98
);
__d(
  "DocumentTitle",
  ["Arbiter"],
  function (a, b, c, d, e, f, g) {
    var h = 1500,
      i = null,
      j = !1,
      k = 0,
      l = [],
      m = null,
      n = document.title,
      o = 0;
    function p() {
      l.length > 0
        ? !j
          ? (q(l[k].title), (k = ++k % l.length))
          : r()
        : (clearInterval(i), (i = null), r());
    }
    function q(a) {
      (document.title = a), (j = !0);
    }
    function r() {
      s.set(m || n, !0), (j = !1);
    }
    var s = (function () {
      function a(a) {
        this.$1 = a;
      }
      a.get = function () {
        return n;
      };
      a.set = function (a, b) {
        var d = a.toString();
        document.title = d;
        !b
          ? ((n = d), (m = null), c("Arbiter").inform("update_title", a))
          : (m = d);
      };
      a.blink = function (b) {
        b = { title: b.toString() };
        l.push(b);
        i === null && (i = setInterval(p, h));
        return new a(b);
      };
      var b = a.prototype;
      b.stop = function () {
        var a = l.indexOf(this.$1);
        a >= 0 &&
          (l.splice(a, 1), k > a ? k-- : k == a && k == l.length && (k = 0));
      };
      a.badge = function (b) {
        var d = a.get();
        d = b ? "(" + b + ") " + d : d;
        a.set(d, !0);
        c("Arbiter").inform("update_title_badge", b, "state");
        o = b;
      };
      a.preserveBadgeAndSet = function (b) {
        a.set(b, !1), c("Arbiter").inform("update_title", b), a.badge(o);
      };
      return a;
    })();
    g["default"] = s;
  },
  98
);
__d(
  "useBlinkDocumentTitle",
  ["DocumentTitle", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a) {
      h(
        function () {
          if (a == null) return function () {};
          var b = c("DocumentTitle").blink(a);
          return function () {
            b.stop();
          };
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIncomingCallBlinkingTitle.react",
  ["fbt", "PolarisCallGatingHelpers", "react", "useBlinkDocumentTitle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.callerName;
      return d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled() &&
        a != null
        ? i.jsx(j, { callerName: a })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.callerName;
      c("useBlinkDocumentTitle")(
        h._("{caller_name} is calling", [h._param("caller_name", a)])
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIncomingCall.react",
  [
    "cx",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSCallFilled24Icon",
    "IGDSText.react",
    "IGDSVideoChatFilled24Icon",
    "IGDSXFilledIcon",
    "IGWebPreCallContext",
    "PolarisCallGatingHelpers",
    "PolarisCallNavigator",
    "PolarisDirectLogger",
    "PolarisDirectStrings",
    "PolarisIGCorePressable",
    "PolarisIGCoreText",
    "PolarisIncomingCallActions",
    "PolarisIncomingCallBlinkingTitle.react",
    "PolarisReactRedux",
    "PolarisUserAvatar.react",
    "ZenonCallInviteModelTypes",
    "bx",
    "cr:3473",
    "react",
    "usePolarisMQTT",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useEffect;
    function a() {
      var a = function (a) {
          if (
            a &&
            a.type ===
              d("ZenonCallInviteModelTypes").CallInviteModelType.ringing
          ) {
            var b;
            b = (b = a.controllerParams.serverInfoData) != null ? b : "";
            var c = a.requestingVideo;
            a =
              (a = a.controllerParams.appMessages) == null
                ? void 0
                : a.ring_data;
            var e = "",
              f = "",
              g = "",
              h,
              i = [],
              j = [];
            if (a != null) {
              a = JSON.parse(a);
              g = a.display_name;
              h = a.display_uri;
              f = a.group_name;
              e = a.ig_thread_id;
              i = a.participant_usernames;
              j.push(h);
              if (!f) {
                try {
                  i = JSON.parse(i);
                } catch (a) {}
                f = Array.isArray(i) ? [g].concat(i).join(", ") : g;
              }
            }
            return {
              avatarUris: j,
              hasVideo: c,
              igThreadId: e,
              serverInfoData: b,
              threadName: f,
              callerName: g,
            };
          } else return null;
        },
        e = b("cr:3473") == null ? void 0 : b("cr:3473").useCallInvite(),
        f =
          b("cr:3473") == null ? void 0 : b("cr:3473").useAcceptCallCallback(),
        g = d("PolarisReactRedux").useDispatch(),
        h = c("usePolarisMQTT")(),
        l = j(c("IGWebPreCallContext")),
        m = l ? l.callInviteModel : null;
      l = d("PolarisReactRedux").useSelector(function (a) {
        return a.incomingCall;
      });
      var n = l.acknowledged,
        o = l.avatarUris,
        p = l.callerName,
        q = l.hasVideo,
        r = l.igThreadId,
        s = l.serverInfoData;
      l = l.threadName;
      a = e ? a(e) : null;
      a != null
        ? ((o = a.avatarUris),
          (p = a.callerName),
          (q = a.hasVideo),
          (r = a.igThreadId),
          (s = a.serverInfoData),
          (l = a.threadName),
          (n = !1))
        : d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() &&
          (n = !0);
      e = function () {
        d("PolarisDirectLogger").DirectLogger.logDirectEvent(
          "IncomingCall",
          "join_button_click",
          { server_info_data: s, has_video: q, ig_thread_id: r }
        ),
          d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() && f
            ? f({ trigger: "incoming_call_modal" })
            : (g(d("PolarisIncomingCallActions").ackCall()),
              d("PolarisCallNavigator").launchCall(r, q, s));
      };
      var t =
        !n &&
        s != null &&
        r != null &&
        d("PolarisCallGatingHelpers").isWebCallingEnabled();
      k(
        function () {
          t &&
            d("PolarisDirectLogger").DirectLogger.logDirectEvent(
              "IncomingCall",
              "incoming_call_impression",
              { ig_thread_id: r, server_info_data: s, has_video: q }
            );
        },
        [q, r, t, s]
      );
      a = function () {
        d("PolarisDirectLogger").DirectLogger.logDirectEvent(
          "IncomingCall",
          "decline_button_click",
          { server_info_data: s, has_video: q, ig_thread_id: r }
        ),
          d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled()
            ? m == null
              ? void 0
              : m.decline()
            : (g(d("PolarisIncomingCallActions").ackCall()),
              h == null ? void 0 : h.sendRtcHangupRequest(s));
      };
      return t
        ? i.jsxs(c("IGCoreModal"), {
            children: [
              d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled() &&
                i.jsx("audio", {
                  autoPlay: !0,
                  loop: !0,
                  src: c("bx").getURL(c("bx")("6022")),
                  type: "audio/m4a",
                }),
              i.jsx(c("PolarisIncomingCallBlinkingTitle.react"), {
                callerName: p,
              }),
              i.jsxs(c("IGDSBox.react"), {
                alignItems: "center",
                height: 312,
                padding: 8,
                position: "relative",
                width: 400,
                children: [
                  i.jsx(c("PolarisUserAvatar.react"), {
                    isLink: !1,
                    profilePictureUrl: o[0],
                    size: 92,
                  }),
                  i.jsx(c("IGDSBox.react"), {
                    marginBottom: 2,
                    marginTop: 4,
                    maxWidth: 400,
                    paddingX: 8,
                    position: "relative",
                    children: i.jsx(c("PolarisIGCoreText").Headline2, {
                      display: "truncated",
                      size: "headline2",
                      textAlign: "center",
                      weight: "semibold",
                      zeroMargin: !0,
                      children: l,
                    }),
                  }),
                  i.jsx(c("IGDSBox.react"), {
                    marginBottom: 8,
                    position: "relative",
                    children: i.jsx(c("IGDSText.react").Body, {
                      color: "secondaryText",
                      zeroMargin: !0,
                      children:
                        "Incoming " + (q ? "video" : "audio") + " call...",
                    }),
                  }),
                  i.jsxs(c("IGDSBox.react"), {
                    direction: "row",
                    position: "relative",
                    children: [
                      i.jsx(c("IGDSBox.react"), {
                        marginEnd: 6,
                        position: "relative",
                        children: i.jsx(c("PolarisIGCorePressable"), {
                          onPress: a,
                          children: i.jsx("div", {
                            className: "_aacd _aace",
                            children: i.jsx(c("IGDSXFilledIcon"), {
                              alt: d("PolarisDirectStrings")
                                .DECLINE_CALL_MODAL_STRING,
                              color: "web-always-white",
                            }),
                          }),
                        }),
                      }),
                      i.jsx(c("PolarisIGCorePressable"), {
                        onPress: e,
                        children: i.jsx("div", {
                          className: "_aacd _aacf",
                          children: q
                            ? i.jsx(c("IGDSVideoChatFilled24Icon"), {
                                alt: d("PolarisDirectStrings")
                                  .JOIN_CALL_MODAL_STRING,
                                color: "web-always-white",
                              })
                            : i.jsx(c("IGDSCallFilled24Icon"), {
                                alt: d("PolarisDirectStrings")
                                  .JOIN_CALL_MODAL_STRING,
                                color: "web-always-white",
                              }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisPostFooterCTA.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSChevronIcon",
    "PolarisAdsGatingHelpers",
    "PolarisExternalLink.react",
    "PolarisGenericStrings",
    "PolarisIGCoreButton",
    "PolarisIGCoreText",
    "PolarisIGTheme.react",
    "PolarisPanavisionQEHelpers",
    "PolarisPostUtils",
    "PolarisUA",
    "react",
    "usePolarisOffsiteTrackingDataURLParams",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a, b) {
      var e,
        f = a.ctaAdditionalAnimation;
      f =
        f === void 0
          ? d("PolarisPostUtils").PostFooterCTAAnimationStyle.NONE
          : f;
      var g = a.ctaDominantColor,
        h = a["data-testid"];
      h = a.disableAnimation;
      var j = a.externalURL,
        k = a.forceBottomBorder,
        l = a.fullWidth,
        m = a.height,
        n = a.icon,
        o = a.isActive,
        p = a.isForAd,
        q = a.isForPersistentCta,
        r = a.isForSidecar,
        s = a.onClick,
        t = a.secondaryText,
        u = a.showChevron;
      u = u === void 0 ? !1 : u;
      var v = a.showRoundedBorder;
      v = v === void 0 ? !1 : v;
      var w = a.text,
        x = a.textAlign;
      x = x === void 0 ? "center" : x;
      a = a.textThemedColor;
      var y = d("PolarisIGTheme.react").useTheme(),
        z = g != null && d("PolarisAdsGatingHelpers").allowWebAds();
      n =
        n != null
          ? i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("IGDSBox.react"), {
                  "data-testid": void 0,
                  flex: "none",
                  position: "relative",
                  children: n,
                }),
                i.jsx(c("IGDSBox.react"), {
                  marginEnd: 3,
                  position: "relative",
                }),
              ],
            })
          : null;
      w = z
        ? i.jsx("span", { className: "x9bdzbf", children: w })
        : i.jsx(i.Fragment, { children: w });
      e = z ? "web-always-white" : (e = a) != null ? e : "ig-primary-text";
      u = u
        ? i.jsxs(i.Fragment, {
            children: [
              i.jsx(c("IGDSBox.react"), {
                flex: "grow",
                height: "100%",
                marginEnd: 7,
                position: "relative",
                right: !0,
              }),
              i.jsx(c("IGDSChevronIcon"), {
                alt: d("PolarisGenericStrings").RIGHT_CHEVRON,
                color: e,
                "data-testid": void 0,
                direction: "right",
                size: 16,
              }),
            ],
          })
        : null;
      e =
        y.getTheme() === d("PolarisIGTheme.react").IGTheme.Dark
          ? a == null
            ? void 0
            : a.dark
          : a == null
          ? void 0
          : a.light;
      e != null && (w = i.jsx("span", { style: { color: e }, children: w }));
      y = null;
      t != null &&
        t !== "" &&
        (y = i.jsx(c("IGDSBox.react"), {
          marginTop: 2,
          position: "relative",
          children: i.jsx(c("PolarisIGCoreText").Body2, {
            color: "ig-secondary-text",
            textAlign: x,
            children: t,
          }),
        }));
      a = i.jsx("div", {
        className:
          "_aarz" +
          (o && !q ? " _aar-" : "") +
          (q ? " _alv8" : "") +
          (h ? "" : " _aar_") +
          (z ? " _aceq" : ""),
        "data-testid": void 0,
        style: z ? { background: g } : null,
        children: i.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          direction: "row",
          justifyContent: "start",
          position: "relative",
          width: "100%",
          children: [
            n,
            i.jsxs(c("IGDSBox.react"), {
              flex: "shrink",
              position: "relative",
              children: [
                i.jsx(c("PolarisIGCoreText"), {
                  size: "body",
                  textAlign: x,
                  weight: "semibold",
                  children: w,
                }),
                y,
              ],
            }),
            u,
          ],
        }),
      });
      e = c("usePolarisOffsiteTrackingDataURLParams")(j);
      j != null
        ? (a = i.jsx(c("PolarisExternalLink.react"), {
            className: "_ad63",
            "data-testid": void 0,
            href: j,
            onClick: s,
            queryParams: e,
            children: a,
          }))
        : s != null &&
          (a = i.jsx(c("PolarisIGCoreButton"), {
            borderless: !0,
            dangerouslySetClassName: { __className: "_ad63" },
            onClick: function () {
              return s();
            },
            children: a,
          }));
      t = r !== !0 && p !== !0;
      h = d("PolarisPanavisionQEHelpers").hasFamiliarFeed();
      g = (k === !0 || d("PolarisUA").isMobile()) && !h;
      return i.jsxs("div", {
        className:
          "_aart" +
          (o ? " _aaru" : "") +
          (q ? " _alv9" : "") +
          (r === !0 ? " _aarv" : "") +
          (l === !0 ? " _aarw" : "") +
          (l === !0 && k === !0 ? " _aarx" : "") +
          (h && !z ? " _ai7q" : "") +
          (v ? " _alva" : "") +
          (v && !q ? " _aikk" : "") +
          (h &&
          d("PolarisPanavisionQEHelpers").hasNewFeedStyles() &&
          d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp()
            ? " _ajq5"
            : "") +
          (f === d("PolarisPostUtils").PostFooterCTAAnimationStyle.POP_IN
            ? " _alwd"
            : "") +
          (f === d("PolarisPostUtils").PostFooterCTAAnimationStyle.SLIDE_UP
            ? " _al_y"
            : ""),
        "data-testid": void 0,
        ref: b,
        style: m != null ? { height: m + "px" } : {},
        children: [
          i.jsx("div", { className: o && t ? "_aary" : "" }),
          a,
          g &&
            i.jsx("div", {
              className: "_aas0" + (k === !0 && l === !0 ? " _aas1" : ""),
              children: i.jsx("div", { className: o ? "_aary" : "" }),
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisAdCTAViewabilityAction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return function (c) {
        c = c.state;
        switch (c) {
          case "entered":
          case "updated":
            a || b(!0);
            break;
          case "exited":
            b(!1);
            break;
          default:
            break;
        }
      };
    }
    f.makeAdCTAViewabilityAction = a;
  },
  66
);
__d(
  "PolarisInstagramAdImpressionFalcoEventImpl",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { pigeon: !1, falco: !0 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_impression",
          a(),
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
  "PolarisInstagramAdImpressionFalcoEvent",
  [
    "InstagramAdImpressionFalcoEvent",
    "PolarisFalcoLoggingMode",
    "PolarisInstagramAdImpressionFalcoEventImpl",
    "PolarisUA",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      log: function (a) {
        var b = c("PolarisFalcoLoggingMode").DISTILLERY;
        if (!d("PolarisUA").isWindowsPWA()) {
          var e;
          b =
            (e = c("qex")._("78")) != null
              ? e
              : c("PolarisFalcoLoggingMode").DISTILLERY;
        }
        b === c("PolarisFalcoLoggingMode").NORMAL
          ? c("InstagramAdImpressionFalcoEvent").log(a)
          : b === c("PolarisFalcoLoggingMode").IMMEDIATELY
          ? c("InstagramAdImpressionFalcoEvent").logImmediately(a)
          : b === c("PolarisFalcoLoggingMode").CRITICAL
          ? c("InstagramAdImpressionFalcoEvent").logCritical(a)
          : c("PolarisInstagramAdImpressionFalcoEventImpl").log(a);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisInstagramAdSubImpressionFalcoEventImpl",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_sub_impression",
          a(),
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
  "PolarisInstagramAdSubImpressionFalcoEvent",
  [
    "InstagramAdSubImpressionFalcoEvent",
    "PolarisFalcoLoggingMode",
    "PolarisInstagramAdSubImpressionFalcoEventImpl",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      log: function (a) {
        var b = c("qex")._("78");
        b === c("PolarisFalcoLoggingMode").NORMAL
          ? c("InstagramAdSubImpressionFalcoEvent").log(a)
          : b === c("PolarisFalcoLoggingMode").IMMEDIATELY
          ? c("InstagramAdSubImpressionFalcoEvent").logImmediately(a)
          : b === c("PolarisFalcoLoggingMode").CRITICAL
          ? c("InstagramAdSubImpressionFalcoEvent").logCritical(a)
          : c("PolarisInstagramAdSubImpressionFalcoEventImpl").log(a);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getPolarisODSKeyWithSurfaceDimension",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if ((b == null ? void 0 : b.isMobile) === !0) return a + ".msite";
      else return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "PolarisAdImpressionAction",
  [
    "PolarisContainerModuleUtils",
    "PolarisFalcoBladeRunnerExperiment",
    "PolarisInstagramAdImpressionFalcoEvent",
    "PolarisInstagramAdSubImpressionFalcoEvent",
    "PolarisLogger",
    "PolarisNavChain",
    "PolarisODS",
    "PolarisUA",
    "PolarisViewpointActionUtils",
    "cometGHLContentDisplayCheck",
    "getPolarisODSKeyWithSurfaceDimension",
    "memoizeStringOnly",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e3,
      i = 5e3,
      j = 6e4,
      k = c("memoizeStringOnly")(function (a) {
        return new Map();
      }),
      l = new Set();
    function m(a, b, e, f, g, m) {
      g === void 0 && (g = j);
      return function (j) {
        var n = k(a || "");
        if (j.state !== "entered") return;
        if (l.has(b)) return;
        l.add(b);
        var o = n.get(b),
          p = j.snapshotTime,
          q = function (a) {
            var b = a.isSubImpression;
            return c("setTimeout")(function () {
              var a = !c("cometGHLContentDisplayCheck")(j.element);
              a
                ? b
                  ? (c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
                      c("getPolarisODSKeyWithSurfaceDimension")(
                        "web.ads.feed.sub_impression.hidden.delayed",
                        { isMobile: m }
                      )
                    ),
                    d("PolarisLogger").logAction(
                      "adSubImpressionHiddenDelayed"
                    ))
                  : (c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
                      c("getPolarisODSKeyWithSurfaceDimension")(
                        "web.ads.feed.impression.hidden.delayed",
                        { isMobile: m }
                      )
                    ),
                    d("PolarisLogger").logAction("adImpressionHiddenDelayed"))
                : c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
                    b
                      ? "web.ads.feed.sub_impression.delayed"
                      : "web.ads.feed.impression.delayed"
                  );
            }, i - h);
          };
        c("setTimeout")(function () {
          var a = c("cometGHLContentDisplayCheck")(j.element);
          o == null
            ? a
              ? (e(), n.set(b, j.snapshotTime), q({ isSubImpression: !1 }))
              : (c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
                  c("getPolarisODSKeyWithSurfaceDimension")(
                    "web.ads.feed.impression.hidden",
                    { isMobile: m }
                  )
                ),
                d("PolarisLogger").logAction("adImpressionHidden"))
            : o != null &&
              p - o >= g &&
              (a
                ? (f(), n.set(b, j.snapshotTime), q({ isSubImpression: !0 }))
                : (c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(
                    c("getPolarisODSKeyWithSurfaceDimension")(
                      "web.ads.feed.sub_impression.hidden",
                      { isMobile: m }
                    )
                  ),
                  d("PolarisLogger").logAction("adSubImpressionHidden")));
          l["delete"](b);
        }, h);
      };
    }
    function a(a, b, e, f) {
      var g,
        h = d("PolarisViewpointActionUtils").getMPKForFeedMedia(a) || "",
        i = d("PolarisUA").isMobile(),
        k = babelHelpers["extends"](
          {
            m_pk: h,
            nav_chain:
              (g = c("PolarisNavChain").getInstance()) == null
                ? void 0
                : g.getNavChainForSend(),
            pigeon_reserved_keyword_module: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(b),
          },
          e
        );
      g = function () {
        f && c("PolarisODS").incr("web.ads.feed.impression.viewpoint"),
          a.isVideo === !0 &&
            i &&
            c("PolarisODS").incr("web.ads.msite.feed.video_ads.impression"),
          c("PolarisODS").incr("web.ads.feed.impression"),
          c("PolarisInstagramAdImpressionFalcoEvent").log(function () {
            return k;
          }),
          d("PolarisFalcoBladeRunnerExperiment").logTestFalco();
      };
      e = function () {
        c("PolarisODS").incr("web.ads.feed.sub_impression"),
          c("PolarisInstagramAdSubImpressionFalcoEvent").log(function () {
            return k;
          });
      };
      return m(b, h, g, e, j, i);
    }
    function b(a) {
      return function (b) {
        var d;
        if (b.state !== "entered") return;
        var e = k("");
        d = ((d = a) != null ? d : "") + ".cta_impression";
        var f = e.get(d);
        f == null &&
          (c("PolarisODS").incr("web.ads.feed.cta_impression"),
          e.set(d, b.snapshotTime));
      };
    }
    g.makePostAdImpressionAction = a;
    g.makeAdCTAImpressionAction = b;
  },
  98
);
__d(
  "useDebounced",
  ["debounce", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useRef;
    function a(a, b, d) {
      b === void 0 && (b = 100);
      d === void 0 && (d = !1);
      var e = j(a);
      h(
        function () {
          e.current = a;
        },
        [a]
      );
      var f = i(
        function () {
          return c("debounce")(
            function () {
              return e.current.apply(e, arguments);
            },
            b,
            null,
            !1,
            d
          );
        },
        [b, d]
      );
      h(
        function () {
          return f.reset;
        },
        [f]
      );
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisSponsoredPostCTAFooterDominantColor",
  [
    "DateConsts",
    "PolarisAdCTAViewabilityAction",
    "PolarisAdImpressionAction",
    "PolarisViewpointReact.react",
    "gkx",
    "polarisAdsSelectors",
    "qex",
    "react",
    "useDebounced",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState,
      k = 4 * d("DateConsts").MS_PER_SEC,
      l = 5 * d("DateConsts").MS_PER_SEC,
      m = 3 * d("DateConsts").MS_PER_SEC;
    function n() {
      var a = c("qex")._("17");
      switch (a) {
        case 1:
          return l;
        case 2:
          return m;
        case 0:
        default:
          return k;
      }
    }
    function o() {
      return c("gkx")("3534") ? n() : k;
    }
    function a(a) {
      var b = a.isMediaRendered,
        e = a.mediaId;
      a = a.post;
      var f = d("polarisAdsSelectors").useFeedAdInfo(a.id, function (a) {
          return a;
        }),
        g = j(null),
        k = g[0],
        l = g[1];
      g = j(!1);
      var m = g[0];
      g = g[1];
      var n = i(!1),
        p = a.isVideo,
        q = c("useDebounced")(l, o());
      h(
        function () {
          var a;
          if (e == null || (!b && p === !1)) return;
          a = f == null ? void 0 : (a = f.ctaItems) == null ? void 0 : a.get(e);
          if (a == null) return;
          if (m) {
            if (q.isPending()) return;
            n.current === !1
              ? ((n.current = !0), q(a.ctaDominantColor))
              : l(a.ctaDominantColor);
            return;
          }
          m || ((n.current = !1), q.isPending() ? q.reset() : l(null));
        },
        [m, q, e, f == null ? void 0 : f.ctaItems, b, p]
      );
      g = d("PolarisViewpointReact.react").useViewpoint({
        action: [
          d("PolarisAdCTAViewabilityAction").makeAdCTAViewabilityAction(m, g),
          d("PolarisAdImpressionAction").makeAdCTAImpressionAction(e),
        ],
        id: a.id,
      });
      return { ctaDominantColor: k, ctaFooterViewpointRef: g };
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisClipsTabHelpers",
  ["IGDSThemeConstantsHelpers", "PolarisNavigationHelpers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 12,
      i = 60,
      j = 32;
    function k() {
      var a;
      a =
        (a = (a = document.documentElement) == null ? void 0 : a.clientWidth) !=
        null
          ? a
          : 0;
      return (
        a -
        d("PolarisNavigationHelpers").getNavBarDesktopWidth() -
        2 * j -
        i -
        h
      );
    }
    function l() {
      var a, b;
      a =
        (a =
          (a = document.documentElement) == null ? void 0 : a.clientHeight) !=
        null
          ? a
          : 0;
      b =
        (b = (b = document.documentElement) == null ? void 0 : b.clientWidth) !=
        null
          ? b
          : 0;
      var c = k();
      c = c * (16 / 9);
      var e = d("IGDSThemeConstantsHelpers").getNumericValue(
          "nav-narrow-screen-min"
        ),
        f = d("IGDSThemeConstantsHelpers").getNumericValue(
          "revamp-nav-bottom-toolbar-height"
        );
      b = b < e ? a * 0.9 - f : a * 0.9;
      c > b && (c = b);
      return c;
    }
    var m = 1200;
    function a() {
      var a = l();
      return Math.min(a, m);
    }
    var n = {
      container: { display: "x78zum5", maxHeight: "xedcshv", $$css: !0 },
      ufi: {
        justifyContent: "x13a6bvl",
        marginStart: "x16n37ib",
        width: "x1247r65",
        $$css: !0,
      },
    };
    function b() {
      return { container: n.container, ufi: n.ufi };
    }
    c = 1500;
    g.getReelMediaContainerHeight = l;
    g.getMaxPopoverHeight = a;
    g.getClipsContainerStyles = b;
    g.WINDOW_RESIZE_THROTTLE = c;
  },
  98
);
__d(
  "polarisAdsSelectors",
  [
    "PolarisContainerModuleUtils",
    "PolarisReactRedux",
    "PolarisReportConstants",
    "polarisCreateSelectorWithArg",
    "polarisStorySelectors",
    "usePolarisAnalyticsContext",
    "usePolarisSponsoredStoryLoggingParams",
    "usePolarisViewer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("polarisCreateSelectorWithArg")(
        function (a) {
          return a.ads.feed;
        },
        function (a) {
          return function (b) {
            return a.get(b);
          };
        }
      ),
      i = c("polarisCreateSelectorWithArg")(
        function (a) {
          return a.ads.feed;
        },
        function (a) {
          return function (b) {
            return a.findKey(function (a) {
              return a.ad_id === b;
            });
          };
        }
      ),
      j = c("polarisCreateSelectorWithArg")(
        function (a) {
          return a.ads.story;
        },
        function (a) {
          return function (b) {
            return a.findKey(function (a) {
              return a.ad_id === b;
            });
          };
        }
      );
    function a(a, b) {
      return d("PolarisReactRedux").useSelector(function (c) {
        if (a == null) return null;
        c = h(c, a);
        return b(c);
      });
    }
    function b(a, b) {
      return d("PolarisReactRedux").useSelector(function (c) {
        if (a == null) return null;
        c = k(c, a);
        return b(c);
      });
    }
    function e(a, b) {
      return d("PolarisReactRedux").useSelector(function (c) {
        return a == null ? null : b(c.stories.currentTrayOrder.indexOf(a));
      });
    }
    var k = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.ads.story;
      },
      function (a) {
        return function (b) {
          return a.get(b);
        };
      }
    );
    function l(a, b) {
      return d("PolarisReactRedux").useSelector(function (c) {
        if (b === d("PolarisReportConstants").FRXLocation.FEED) return i(c, a);
        else if (b === d("PolarisReportConstants").FRXLocation.STORY)
          return j(c, a);
        return null;
      });
    }
    function m(a, b, c) {
      return d("PolarisReactRedux").useSelector(function (e) {
        if (a == null) return null;
        var f = null;
        b === d("PolarisReportConstants").FRXLocation.FEED
          ? (f = h(e, a))
          : b === d("PolarisReportConstants").FRXLocation.STORY &&
            (f = k(e, a));
        return c(f);
      });
    }
    function f(a, b) {
      var e,
        f = (e = l(a, b)) != null ? e : a;
      e = m(f, b, function (a) {
        return a == null ? void 0 : a.tracking_token;
      });
      a = d("PolarisReactRedux").useSelector(function (a) {
        return a.posts.byId.get(f);
      });
      var g = d("PolarisReactRedux").useSelector(
        d("polarisStorySelectors").getCurrentReel
      );
      g = c("usePolarisSponsoredStoryLoggingParams")(g, a);
      a = g.adInsertedPosition;
      var h = g.mpk,
        i = g.reelId,
        j = g.sessionReelCounter,
        k = g.traySession;
      g = g.viewerSession;
      var n = {};
      b === d("PolarisReportConstants").FRXLocation.STORY &&
        (n = {
          ad_inserted_position: a,
          reel_id: i,
          session_reel_counter: j,
          tray_session_id: k,
          viewer_session_id: g,
        });
      b = c("usePolarisViewer")();
      a = c("usePolarisAnalyticsContext")();
      i = d("PolarisContainerModuleUtils").getContainerModule(a);
      return babelHelpers["extends"](
        {
          m_pk: h,
          pk: b == null ? void 0 : b.id,
          pigeon_reserved_keyword_module: i,
          source_of_action: i,
          tracking_token: e,
        },
        n
      );
    }
    g.useFeedAdInfo = a;
    g.useStoryAdInfo = b;
    g.useStoryAdPosition = e;
    g.useAdPostIDFromAdIDForFRX = l;
    g.useAdInfoForFRX = m;
    g.useFRXReportAdLoggingParams = f;
  },
  98
);
__d(
  "usePolarisSponsoredStoryLoggingParams",
  [
    "PolarisContainerModuleUtils",
    "PolarisInteractionsLogger",
    "PolarisStoriesLoggingUtils",
    "PolarisViewpointActionUtils",
    "polarisAdsSelectors",
    "polarisRelationshipSelectors",
    "usePolarisAnalyticsContext",
    "usePolarisSelector",
    "usePolarisViewer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e,
        f,
        g,
        h,
        i = d("polarisAdsSelectors").useStoryAdInfo(
          b == null ? void 0 : b.id,
          function (a) {
            return a == null ? void 0 : a.ad_id;
          }
        ),
        j = c("usePolarisSelector")(function (b) {
          return b.stories.currentTrayOrder.indexOf(a == null ? void 0 : a.id);
        }).toString();
      e = (e = a == null ? void 0 : a.isSponsored) != null ? e : !1;
      var k = c("usePolarisSelector")(function (a) {
          return a.ads.storyAdInjectionData;
        }),
        l = c("usePolarisAnalyticsContext")();
      l = d("PolarisContainerModuleUtils").getContainerModule(l);
      f = d("polarisRelationshipSelectors").useRelationship(
        (f = b == null ? void 0 : b.ownerId) != null ? f : ""
      );
      f =
        f != null ? d("PolarisViewpointActionUtils").getFollowStatus(f) : null;
      var m =
          b != null
            ? d("PolarisInteractionsLogger").getMediaTypeFromPost(b).toString()
            : null,
        n =
          b != null
            ? d("PolarisViewpointActionUtils").getMPKForStoryMedia(
                b.id,
                b.owner
              )
            : null,
        o = b == null ? void 0 : b.owner;
      o = o == null ? void 0 : o.id;
      g = b == null ? void 0 : (g = b.postedAt) == null ? void 0 : g.toString();
      var p = a == null ? void 0 : a.id;
      h =
        a == null
          ? void 0
          : (h = a.itemIds) == null
          ? void 0
          : h.length.toString();
      var q = d("PolarisStoriesLoggingUtils").getTypeForLogging(
          a == null ? void 0 : a.type
        ),
        r = d("PolarisStoriesLoggingUtils").StoriesLoggingSession.getData(),
        s = r.reelPositionInTray.toString(),
        t = r.reelCounter.toString();
      b = d("polarisAdsSelectors").useStoryAdInfo(
        b == null ? void 0 : b.id,
        function (a) {
          return a == null ? void 0 : a.tracking_token;
        }
      );
      var u = c("usePolarisSelector")(function (a) {
          return a.stories.traySession;
        }),
        v = c("usePolarisSelector")(function (a) {
          return a.stories.viewerSession;
        }),
        w = c("usePolarisViewer")();
      w = w == null ? void 0 : w.id;
      return {
        adId: i,
        adInsertedPosition: j,
        containerModule: l,
        followStatus: f,
        isReelSponsored: e,
        loggingData: r,
        mediaType: m,
        mpk: n,
        ownerId: o,
        postedAt: g,
        reelId: p,
        reelSize: h,
        reelType: q,
        reelViewerPosition: s,
        sessionReelCounter: t,
        storyAdInjectionData: k,
        trackingToken: b,
        traySession: u,
        viewerSession: v,
        viewerId: w,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisTransparencyUtils",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("IGWebBloksApp").__setRef(
          "PolarisTransparencyUtils"
        )
      ),
      k = "com.instagram.transparency.treatment_action";
    function a(a) {
      var b = a.transparencyLabel;
      a = a.transparencyProduct;
      return a != null && b != null;
    }
    function b(a) {
      var b = a.cacheKey,
        d = a.mediaId,
        e = a.onResumeStoryPlayback,
        f = a.screen,
        g = a.transparencyProduct,
        l = a.userId;
      a = i(
        function () {
          return {
            cache_key: b,
            media_id: d,
            product: g,
            surface: f,
            user_id: l,
          };
        },
        [b, d, f, l, g]
      );
      return h.jsx("div", {
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: h.jsx("div", {}),
          children: h.jsx(
            j,
            {
              appId: k,
              bridgeOverrides_DEPRECATED: { onResumeStoryPlayback: e },
              loadingFallback: h.jsx("div", {}),
              params: a,
            },
            a.cache_key
          ),
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.shouldShowTransparencyLabel = a;
    g.PolarisTransparencyTreatment = b;
  },
  98
);
__d(
  "PolarisPostUtils",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 3;
    e = b("$InternalEnum").Mirrored(["NONE", "POP_IN", "SLIDE_UP"]);
    function a(a, b) {
      var c = a.isSidecar;
      a = a.sidecarChildren;
      return c === !0 && a != null && b >= 0 && b < a.length ? a[b] : null;
    }
    function c(a) {
      var b = a.mainFeedCarouselStartingMediaId;
      a = a.sidecarChildren;
      if (b != null && a != null) {
        a = a.findIndex(function (a) {
          return a.id === b;
        });
        return a >= 0 ? a : 0;
      }
      return 0;
    }
    function d(a, b) {
      var c = [];
      b = b == null ? void 0 : b.username;
      for (var d = 0, e = a.length; c.length < g && d < e; d++) {
        var f = a[d];
        f.username !== b && f.id != null && f.id !== "" && c.push(f);
      }
      return c;
    }
    f.PostFooterCTAAnimationStyle = e;
    f.getCurrentSidecarItemFromPost = a;
    f.getInitialSidecarIndexFromPost = c;
    f.getOrderedUsersForLikedByList = d;
  },
  66
);
__d(
  "PolarisIgAuthenticityConsumerFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_authenticity_consumer",
          a(),
          {},
          h
        );
      },
    };
    g.InstagramAuthenticityConsumerFalcoEvent = a;
  },
  98
);
__d(
  "PolarisTransparencyLabel.react",
  [
    "PolarisIGCorePressable",
    "PolarisIgAuthenticityConsumerFalcoEvent",
    "PolarisStoriesContext",
    "PolarisTransparencyUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useState;
    function a(a) {
      var b = a.className,
        e = a.mediaId,
        f = a.screen;
      a = a.user;
      var g = a.id,
        m = a.transparencyLabel,
        n = a.transparencyProduct;
      a = l(0);
      var o = a[0],
        p = a[1];
      a = l(!1);
      var q = a[0],
        r = a[1],
        s = i(
          function () {
            d(
              "PolarisIgAuthenticityConsumerFalcoEvent"
            ).InstagramAuthenticityConsumerFalcoEvent.log(function () {
              return {
                action: "viewed",
                post_id: e,
                product: n,
                screen: f,
                target_user_id: g,
              };
            });
          },
          [e, f, n, g]
        );
      k(
        function () {
          q || (s(), r(!0));
        },
        [q, s, r]
      );
      var t = function () {
        return d(
          "PolarisIgAuthenticityConsumerFalcoEvent"
        ).InstagramAuthenticityConsumerFalcoEvent.log(function () {
          return {
            action: "tapped_label",
            post_id: e,
            product: n,
            screen: f,
            target_user_id: g,
          };
        });
      };
      a = j(d("PolarisStoriesContext").StoriesContext);
      var u = a.updateStoriesContext;
      a = function () {
        t(), u({ isPlaybackDisabled: !0 }), p(o + 1);
      };
      var v = function () {
        p(0), u({ isPlaybackDisabled: !1 });
      };
      if (n == null) return null;
      v = d("PolarisTransparencyUtils").PolarisTransparencyTreatment({
        userId: g,
        mediaId: e,
        screen: f,
        cacheKey: o,
        onResumeStoryPlayback: v,
        transparencyProduct: n,
      });
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("PolarisIGCorePressable"), {
            onPress: a,
            children: h.jsx("div", { className: b, children: m }),
          }),
          o > 0 && v,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisTrackingNodeProvider.react",
  ["PolarisTrackingNodesContext", "cr:4877", "react", "useMergeRefs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useMemo,
      k =
        (d = b("cr:4877")) != null
          ? d
          : function (a) {
              return null;
            };
    function a(a) {
      var b = a.children,
        d = a.trackingNode,
        e = i(c("PolarisTrackingNodesContext"));
      a = j(
        function () {
          return [{ type: d }].concat(e);
        },
        [e, d]
      );
      var f = k(a);
      f = c("useMergeRefs")(f, b.ref);
      return h.jsx(c("PolarisTrackingNodesContext").Provider, {
        value: a,
        children: h.cloneElement(b, { ref: f }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "polarisWithPPRLogging",
  [
    "PolarisPPRUtil",
    "PolarisPerformanceLogger",
    "polarisGetDisplayName",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b, e;
      return (
        (e = b =
          (function (b) {
            babelHelpers.inheritsLoose(c, b);
            function c(a) {
              var c;
              c = b.call(this, a) || this;
              c.handleMediaRendered = function (a, b) {
                d("PolarisPPRUtil").setMediaRendered({
                  mediaId: a,
                  timeTaken: b,
                  pageId: c.props.analyticsContext,
                });
              };
              return c;
            }
            var e = c.prototype;
            e.onEnterViewport = function (a) {
              var b = a.analyticsContext,
                c = a.id;
              a = a.isGridView;
              d("PolarisPPRUtil").setMediaEntersViewport({
                mediaId: c,
                pageId: b,
                isGridView: a,
              });
            };
            e.onLeaveViewport = function (a) {
              var b = a.analyticsContext;
              a = a.id;
              a = d("PolarisPPRUtil").setMediaLeavesViewport({
                mediaId: a,
                pageId: b,
              });
              a && d("PolarisPerformanceLogger").logPercentagePhotoRendered(a);
            };
            e.logVisibilityChange = function (a) {
              var b = a.newVisible,
                c = a.prevVisible;
              a = a.props;
              if (c === b) return;
              c = a || this.props;
              if (!c.analyticsContext || c.skipPPR) return;
              b ? this.onEnterViewport(c) : b || this.onLeaveViewport(c);
            };
            e.componentDidMount = function () {
              this.logVisibilityChange({
                newVisible: !!this.props.isVisible,
                prevVisible: !1,
              });
            };
            e.componentDidUpdate = function (a) {
              var b = !!a.isVisible,
                c = !!this.props.isVisible;
              a.id && a.id !== this.props.id
                ? (this.logVisibilityChange({
                    prevVisible: b,
                    newVisible: !1,
                    props: a,
                  }),
                  this.logVisibilityChange({
                    prevVisible: !1,
                    newVisible: c,
                    props: this.props,
                  }))
                : b !== c &&
                  this.logVisibilityChange({ prevVisible: b, newVisible: c });
            };
            e.componentWillUnmount = function () {
              this.logVisibilityChange({
                prevVisible: !!this.props.isVisible,
                newVisible: !1,
              });
            };
            e.render = function () {
              var b = this.props;
              b.isGridView;
              b.skipPPR;
              b = babelHelpers.objectWithoutPropertiesLoose(b, [
                "isGridView",
                "skipPPR",
              ]);
              return h.jsx(
                a,
                babelHelpers["extends"]({}, b, {
                  onMediaRendered: this.handleMediaRendered,
                })
              );
            };
            return c;
          })(h.Component)),
        (b.displayName =
          "withPPRLogging(" + c("polarisGetDisplayName")(a) + ")"),
        e
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisRect",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return {
        top: window.pageYOffset,
        right: window.pageXOffset + window.innerWidth,
        bottom: window.pageYOffset + window.innerHeight,
        left: window.pageXOffset,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    function b(a, b) {
      var c = a.width * b.x;
      b = a.height * b.y;
      var d = (c - a.width) / 2,
        e = (b - a.height) / 2;
      return {
        top: a.top - e,
        right: a.right + d,
        bottom: a.bottom + e,
        left: a.left - d,
        width: c,
        height: b,
      };
    }
    function c(a, b) {
      return {
        top: a.top + b.y,
        right: a.right + b.x,
        bottom: a.bottom + b.y,
        left: a.left + b.x,
        width: a.width,
        height: a.height,
      };
    }
    function g(a, b) {
      return !(
        a.bottom < b.top ||
        a.left > b.right ||
        a.top > b.bottom ||
        a.right < b.left
      );
    }
    function d(a, b) {
      if (!g(a, b)) return null;
      var c = Math.max(a.top, b.top),
        d = Math.min(a.right, b.right),
        e = Math.min(a.bottom, b.bottom);
      a = Math.max(a.left, b.left);
      return {
        top: c,
        right: d,
        bottom: e,
        left: a,
        width: d - a,
        height: e - c,
      };
    }
    function e(a) {
      return a.width * a.height;
    }
    function h(a, b) {
      return (
        Math.abs(a.left - b.left) < 1 &&
        Math.abs(a.top - b.top) < 1 &&
        Math.abs(a.width - b.width) < 1 &&
        Math.abs(a.height - b.height) < 1 &&
        Math.abs(a.right - b.right) < 1 &&
        Math.abs(a.bottom - b.bottom) < 1
      );
    }
    function i(a) {
      return {
        top: a.top,
        right: a.right,
        bottom: a.bottom,
        left: a.left,
        width: a.width,
        height: a.height,
      };
    }
    f.getForViewport = a;
    f.getScaled = b;
    f.getTranslated = c;
    f.getIntersection = d;
    f.getArea = e;
    f.isEqual = h;
    f.fromClientRect = i;
  },
  66
);
__d(
  "PolarisScrollWatcher",
  [
    "invariant",
    "ExecutionEnvironment",
    "PolarisEventListener",
    "PolarisRect",
    "debounce",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = ["scroll", "resize", "orientationchange"],
      j = 30,
      k = function (a, b, c, d) {
        (this.measureFn = a),
          (this.listenerFn = b),
          (this.container = c),
          (this.extraListener = d),
          (this.isVisible = null);
      };
    a = (function () {
      function a() {
        var a = this;
        this.$11 = function () {
          a.$2();
        };
        this.$14 = function (b) {
          a.$2(b);
        };
        this.listeners = {};
        this.$1 = new Map();
        this.$2 = c("debounce")(this.$9, j, this);
        this.$3 = [];
        this.$4 = !1;
        this.$5 = c("PolarisEventListener").add(
          window,
          "scroll",
          function () {
            (a.$4 = !0), a.$5.remove();
          },
          { passive: !0, once: !0 }
        );
        this.$6 = !1;
        this.$7 = 0;
        this.$8 = 1;
        this.$10();
      }
      var b = a.prototype;
      b.$10 = function () {
        var a = this;
        c("ExecutionEnvironment").canUseEventListeners &&
          (this.$3 = i.map(function (b) {
            return c("PolarisEventListener").add(window, b, a.$11.bind(a));
          }));
      };
      b.$12 = function () {
        this.$3 &&
          this.$3.forEach(function (a) {
            return a.remove();
          });
      };
      b.$13 = function (a) {
        var b = a.clientWidth,
          c = a.clientHeight,
          d = a.scrollTop;
        a = a.scrollLeft;
        return {
          left: a,
          width: b,
          right: a + b,
          top: d,
          height: c,
          bottom: d + c,
        };
      };
      b.updateListenerVisibility = function (a, b) {
        var c = a.measureFn(),
          e = a.container;
        e
          ? (e = this.$13(e))
          : b
          ? (e = b)
          : (e = d("PolarisRect").getForViewport());
        b = d("PolarisRect").getIntersection(c, e);
        a.visibleRect !== b && ((a.visibleRect = b), a.listenerFn(b));
      };
      b.$9 = function (a) {
        var b = this,
          c = d("PolarisRect").getForViewport();
        a = a ? Array.from(this.$1.get(a) || []) : Object.keys(this.listeners);
        a = a
          .reduce(function (a, c) {
            a.push(b.listeners[c]);
            return a;
          }, [])
          .filter(function (a) {
            return a != null;
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
          this.updateListenerVisibility(g, c);
        }
      };
      b.addVisibilityListener = function (a, b, d) {
        var e = this,
          f = "L" + this.$8++,
          g = null;
        d &&
          (this.$1.set(d, (this.$1.get(d) || new Set()).add(f)),
          (g = c("PolarisEventListener").add(
            d,
            "scroll",
            this.$14.bind(this, d)
          )));
        var h = new k(a, b, d, g);
        this.listeners[f] = h;
        this.$7++;
        window.setTimeout(function () {
          f in e.listeners && e.updateListenerVisibility(h);
        }, 0);
        this.$6 || this.$10();
        return f;
      };
      b.removeVisibilityListener = function (a) {
        if (!Object.prototype.hasOwnProperty.call(this.listeners, a)) return;
        var b = this.listeners[a];
        b.extraListener && b.extraListener.remove();
        if (b.container) {
          var c = this.$1.get(b.container);
          c != null || h(0, 50418);
          c["delete"](a);
          c.size === 0 && this.$1["delete"](b.container);
        }
        delete this.listeners[a];
        this.$7--;
        this.$7 === 0 && this.$6 && (this.$12(), (this.$6 = !1));
      };
      b.hasScrolled = function () {
        return this.$4;
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "PolarisVirtualizedWithScrollLogging.react",
  [
    "PolarisIGVirtualGrid.react",
    "PolarisIGVirtualList.react",
    "PolarisScrollPerfMonitor",
    "polarisGetDisplayName",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = (function (d) {
        babelHelpers.inheritsLoose(b, d);
        function b(a) {
          var b;
          b = d.call(this, a) || this;
          b.$2 = function (a) {
            b.props.onScroll != null && b.props.onScroll(a),
              b.$1 != null && b.$1.onScroll();
          };
          var e = a.allowSampledScrollLogging;
          a = a.analyticsContext;
          a != null &&
            e === !0 &&
            c("PolarisScrollPerfMonitor").shouldEnableMonitoring() &&
            (b.$1 = new (c("PolarisScrollPerfMonitor"))(a));
          return b;
        }
        var e = b.prototype;
        e.render = function () {
          var b = this.props;
          b.allowSampledScrollLogging;
          b.analyticsContext;
          var c = b.forwardedRef;
          b.onScroll;
          b = babelHelpers.objectWithoutPropertiesLoose(b, [
            "allowSampledScrollLogging",
            "analyticsContext",
            "forwardedRef",
            "onScroll",
          ]);
          return h.jsx(
            a,
            babelHelpers["extends"]({}, b, { onScroll: this.$2, ref: c })
          );
        };
        return b;
      })(h.PureComponent);
      b.displayName =
        "withScrollLogging(" + c("polarisGetDisplayName")(a) + ")";
      return h.forwardRef(function (a, c) {
        return h.jsx(b, babelHelpers["extends"]({}, a, { forwardedRef: c }));
      });
    }
    b = a(c("PolarisIGVirtualGrid.react"));
    e = a(c("PolarisIGVirtualList.react"));
    g.IGVirtualGridWithLogging = b;
    g.IGVirtualListWithLogging = e;
  },
  98
);
__d(
  "PolarisGridItemVideoPreview.react",
  [
    "CometImage.react",
    "PolarisVideo.react",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "VideoPlayerHooks",
    "VideoPlayerSurface.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect,
      j = {
        coverPhoto: { height: "x5yr21d", $$css: !0 },
        coverPhotoContainer: {
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      k = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "polaris_grid"
      );
    function l(a) {
      var b = a.coverPhoto,
        e = a.previewDurationMs,
        f = d("VideoPlayerHooks").useController();
      a = d("VideoPlayerHooks").usePlaying();
      var g = d("VideoPlayerHooks").useCurrentTimeThrottled(500),
        k = f.internal_getVideoElement();
      i(
        function () {
          k != null && (k.style.objectFit = "cover");
        },
        [k]
      );
      i(
        function () {
          e != null && g * 1e3 > e && f.seek(0);
        },
        [f, g, e]
      );
      return !a
        ? h.jsx("div", {
            className: "x5yr21d xh8yej3 x6ikm8r x10wlt62 x78zum5 xl56j7k",
            children:
              b != null &&
              h.jsx(c("CometImage.react"), { src: b, xstyle: j.coverPhoto }),
          })
        : null;
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.coverPhoto,
        d = a.previewDurationMs,
        e = a.videoID;
      a = a.videoSrc;
      return h.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
        autoplayLocalRules: k,
        children: h.jsx(c("PolarisVideo.react"), {
          autoplay: !0,
          loopCount: -1,
          mediaId: e,
          sdSrc: a,
          children: h.jsx(c("VideoPlayerSurface.react"), {
            children: h.jsx(l, { coverPhoto: b, previewDurationMs: d }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisShouldHideLikeCountsWithControls",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      c === void 0 && (c = !1);
      return c === !0 ? b === !0 : a === !0 || b === !0;
    }
    f.shouldHideLikeCountsWithControls = a;
  },
  66
);
__d(
  "PolarisCIXWarningScreensFalcoEvent",
  [
    "PolarisContainerModuleUtils",
    "PolarisFalcoLogger",
    "polarisMediaOverlayInfoUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "cix_warning_screens";
    c = {
      OPEN_MISINFO_SEE_WHY_DIALOG: "OPEN_MISINFO_SEE_WHY_DIALOG",
      SHOW_CONTENT: "SHOW_CONTENT",
    };
    e = { MOUNTED: "mounted", VISIBLE: "visible", ACTION: "action" };
    var i = { IG_FEED: "ig_feed", IG_PROFILE: "ig_profile" },
      j = { SENSITIVE: "Sensitive", FALSE_NEWS: "False News" };
    function a(a) {
      a = a == null ? void 0 : a.overlayType;
      if (d("polarisMediaOverlayInfoUtils").isMediaOverlayTypeMisinfo(a))
        return j.FALSE_NEWS;
      else if (
        d("polarisMediaOverlayInfoUtils").isMediaOverlayTypeSensitiveContent(a)
      )
        return j.SENSITIVE;
      return null;
    }
    function b(a) {
      var b = d("PolarisContainerModuleUtils").getContainerModule(a);
      switch (b) {
        case "feed_timeline":
          return i.IG_FEED;
        case "profile":
        case "self_profile":
          return i.IG_PROFILE;
        default:
          break;
      }
      switch (a) {
        case "permalinkPivot":
        case "feedPageModal":
        case "postPage":
          return i.IG_FEED;
        case "profilePageModal":
          return i.IG_PROFILE;
        default:
          return null;
      }
    }
    var k = { falco: !0, pigeon: !1 };
    f = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(h, a(), {}, k);
      },
    };
    g.CIX_WARNING_SCREEN_ACTIONS = c;
    g.CIX_WARNING_SCREEN_EVENTS = e;
    g.getWarningScreenTypeFromMediaOverlayCoverInfo = a;
    g.getNFXStoryLocationFromAnalyticsContext = b;
    g.CIXWarningScreensFalcoEvent = f;
  },
  98
);
__d(
  "PolarisSensitivityOverlayBase.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisIGCoreButton",
    "PolarisPreviewPhoto.react",
    "PolarisResponsiveBlock.react",
    "PolarisSensitivityOverlayCenterButton.react",
    "PolarisSensitivityOverlayIcon.react",
    "PolarisUA",
    "getRGBString",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    function k(a) {
      var b = a.asSidecarChild,
        e = a.mediaOverlayCoverInfo,
        f = a.onMediaOverlayCoverButtonClick,
        g = e.bottomButton,
        h = e.centerButton;
      a = e.description;
      var j = e.rootIconGlyph;
      e = e.title;
      var k = null,
        l = null;
      h != null &&
        (k = i.jsx(c("PolarisSensitivityOverlayCenterButton.react"), {
          buttonText: h.text,
          handler: function (a) {
            return f(a, h);
          },
        }));
      g != null &&
        (l = i.jsx(c("PolarisIGCoreButton"), {
          borderless: !0,
          color: "web-always-white",
          large: !0,
          onClick: function (a) {
            return f(a, g);
          },
          children: i.jsx(c("IGDSBox.react"), {
            padding: d("PolarisUA").isMobile() ? 6 : 3,
            position: "relative",
            children: g.text,
          }),
        }));
      return i.jsxs("div", {
        className:
          "_abqn _abqo" +
          (b === !0 && !d("PolarisUA").isMobile() ? " _abqp" : ""),
        children: [
          i.jsxs("div", {
            className: "_abqq",
            children: [
              i.jsx(c("PolarisSensitivityOverlayIcon.react"), {
                mediaOverlayIconGlyph: j,
              }),
              i.jsx("h2", { className: "_abqr", children: e }),
              i.jsx("h3", { className: "_abqs", children: a }),
              i.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                children: k,
              }),
            ],
          }),
          i.jsx("div", { className: "_abqt", children: l }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.asSidecarChild,
        e = a.dimensions;
      e =
        e === void 0
          ? {
              height: d("PolarisPreviewPhoto.react").PREVIEW_PHOTO_DIMENSION,
              width: d("PolarisPreviewPhoto.react").PREVIEW_PHOTO_DIMENSION,
            }
          : e;
      var f = a.onMediaOverlayCoverButtonClick,
        g = a.previewData,
        h = a.variant;
      a = a.mediaOverlayCoverInfo;
      var l = j(0),
        m = l[0],
        n = l[1];
      l = null;
      h === "grid" || a == null
        ? (l = i.jsx("div", {
            className: "_abqn",
            children: i.jsx("div", {
              className: "_abqq",
              children: i.jsx(c("PolarisSensitivityOverlayIcon.react"), {
                mediaOverlayIconGlyph: a == null ? void 0 : a.rootIconGlyph,
              }),
            }),
          }))
        : a != null &&
          (l = i.jsx(k, {
            asSidecarChild: b,
            mediaOverlayCoverInfo: a,
            onMediaOverlayCoverButtonClick: f,
          }));
      h = function (a, b) {
        n(a);
      };
      return i.jsxs("div", {
        className: "_abqu",
        children: [
          i.jsx(c("PolarisResponsiveBlock.react"), {
            onResize: h,
            children:
              m !== 0 &&
              (g != null
                ? i.jsx(d("PolarisPreviewPhoto.react").PreviewPhoto, {
                    dimensions: d(
                      "PolarisPreviewPhoto.react"
                    ).getDimensionsFromContainerWidth(e, m),
                    previewData: g,
                  })
                : i.jsx("div", {
                    style: {
                      height: m,
                      width: m,
                      background: c("getRGBString")("grey-9"),
                    },
                  })),
          }),
          l,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SensitivityOverlayBase = a;
  },
  98
);
__d(
  "PolarisSensitivityOverlay.react",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "PolarisCIXWarningScreensFalcoEvent",
    "PolarisContainerModuleUtils",
    "PolarisInstagramMediaOverlayFalcoEvent",
    "PolarisLogger",
    "PolarisMediaOverlayInfoTypes",
    "PolarisSensitivityOverlayBase.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState,
      n = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("IGWebBloksApp").__setRef(
          "PolarisSensitivityOverlay.react"
        )
      );
    function a(a) {
      var b = a.analyticsContext,
        e = a.asSidecarChild,
        f = a.dimensions,
        g = a.disableMediaOverlayInfoImpressionLogging,
        o = a.isPhoto,
        p = a.isVisible,
        q = a.mediaId,
        r = a.mediaOverlayCoverInfo,
        s = a.onLoggedMediaOverlayInfoImpression,
        t = a.onSeeWhyClicked,
        u = a.onShowPostClicked,
        v = a.ownerId,
        w = a.previewData;
      a = a.variant;
      var x = a === void 0 ? "post" : a,
        y = l(!1);
      a = m("");
      var z = a[0],
        A = a[1];
      a = m(0);
      var B = a[0],
        C = a[1],
        D = i(
          function (a, c) {
            if (r == null) return;
            var e = r.overlayLayout,
              f = r.overlayType;
            d(
              "PolarisInstagramMediaOverlayFalcoEvent"
            ).InstagramMediaOverlayFalcoEvent.log(function () {
              return d(
                "PolarisInstagramMediaOverlayFalcoEvent"
              ).InstagramMediaOverlayFalcoEvent.buildPayloadForLog({
                event: a,
                containerModule: d(
                  "PolarisInstagramMediaOverlayFalcoEvent"
                ).InstagramMediaOverlayFalcoEvent.getLoggableContainerModuleFromAnalyticsContext(
                  b
                ),
                entityID: q,
                overlayLayout: e,
                overlayType: f,
                button: c,
              });
            });
          },
          [b, q, r]
        ),
        E = i(
          function (a) {
            var c = a.action,
              e = a.event,
              f = d(
                "PolarisCIXWarningScreensFalcoEvent"
              ).getNFXStoryLocationFromAnalyticsContext(b),
              g =
                r != null
                  ? d(
                      "PolarisCIXWarningScreensFalcoEvent"
                    ).getWarningScreenTypeFromMediaOverlayCoverInfo(r)
                  : null;
            d(
              "PolarisCIXWarningScreensFalcoEvent"
            ).CIXWarningScreensFalcoEvent.log(function () {
              return {
                action: c,
                endpoint: b,
                event: e,
                surface: f,
                top_warning_screen_category: g,
                ig_content_igid: q,
              };
            });
          },
          [b, q, r]
        ),
        F = i(
          function (a) {
            var c = d("PolarisContainerModuleUtils").getContainerModule(b);
            d("PolarisLogger").logGatingEvent_DEPRECATED(a, {
              a_pk: v,
              containermodule: c,
              gate_type: "sensitivity",
              m_pk: q + "_" + v,
              m_t: o ? "1" : "2",
              source_of_action: c,
            });
          },
          [b, o, q, v]
        ),
        G = i(
          function () {
            r != null &&
              g !== !0 &&
              (D(
                d("PolarisInstagramMediaOverlayFalcoEvent")
                  .IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS.IMPRESSION,
                null
              ),
              s != null && s(q)),
              E({
                event: d("PolarisCIXWarningScreensFalcoEvent")
                  .CIX_WARNING_SCREEN_EVENTS.MOUNTED,
              }),
              F("instagram_organic_gate_impression");
          },
          [g, E, F, D, q, r, s]
        ),
        H = i(
          function (a, b) {
            a.preventDefault(),
              D(
                d("PolarisInstagramMediaOverlayFalcoEvent")
                  .IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS.ACTION,
                b
              ),
              E({
                event: d("PolarisCIXWarningScreensFalcoEvent")
                  .CIX_WARNING_SCREEN_EVENTS.ACTION,
                action: d("PolarisCIXWarningScreensFalcoEvent")
                  .CIX_WARNING_SCREEN_ACTIONS.SHOW_CONTENT,
              }),
              F("instagram_organic_gate_clear"),
              u && u();
          },
          [E, F, D, u]
        ),
        I = i(
          function (a, b) {
            a.preventDefault(),
              D(
                d("PolarisInstagramMediaOverlayFalcoEvent")
                  .IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS.ACTION,
                b
              ),
              E({
                event: d("PolarisCIXWarningScreensFalcoEvent")
                  .CIX_WARNING_SCREEN_EVENTS.ACTION,
                action: d("PolarisCIXWarningScreensFalcoEvent")
                  .CIX_WARNING_SCREEN_ACTIONS.OPEN_MISINFO_SEE_WHY_DIALOG,
              }),
              t && t();
          },
          [E, D, t]
        ),
        J = i(
          function (a, b) {
            a.preventDefault(),
              (b == null ? void 0 : b.action_url) != null &&
                (D(
                  d("PolarisInstagramMediaOverlayFalcoEvent")
                    .IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS.ACTION,
                  b
                ),
                E({
                  event: d("PolarisCIXWarningScreensFalcoEvent")
                    .CIX_WARNING_SCREEN_EVENTS.ACTION,
                  action: d("PolarisCIXWarningScreensFalcoEvent")
                    .CIX_WARNING_SCREEN_ACTIONS.OPEN_MISINFO_SEE_WHY_DIALOG,
                }),
                C(function (a) {
                  return a + 1;
                }),
                A(b == null ? void 0 : b.action_url));
          },
          [E, D]
        );
      a = i(
        function (a, b) {
          var c = b.action;
          switch (c) {
            case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_ACTIONS
              .CLEAR_MEDIA_COVER:
              H(a, b);
              break;
            case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_ACTIONS
              .OPEN_FACT_CHECK_SHEET:
              I(a, b);
              break;
            case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_ACTIONS
              .OPEN_BLOKS_APP:
              J(a, b);
              break;
            default:
              break;
          }
        },
        [J, I, H]
      );
      j(
        function () {
          y.current === !1 &&
            (p === !0 || x === "grid") &&
            ((y.current = !0), G());
        },
        [p, G, x]
      );
      var K = k(
        function () {
          return { media_id: q, module: b };
        },
        [b, q]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(
            d("PolarisSensitivityOverlayBase.react").SensitivityOverlayBase,
            {
              asSidecarChild: e,
              dimensions: f,
              mediaOverlayCoverInfo: r,
              onMediaOverlayCoverButtonClick: a,
              previewData: w,
              variant: x,
            }
          ),
          B > 0 &&
            z != null &&
            h.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: h.jsx(n, { appId: z, params: K }, B),
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSUserPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisShareSheetContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ currPostSidecarChildItem: null });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "PolarisLoadingSheet.react",
  ["IGDSBox.react", "IGDSSpinner.react", "PolarisIGCoreSheetOrModal", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
        children: h.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          paddingY: 8,
          position: "relative",
          children: h.jsx(c("IGDSSpinner.react"), {}),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostModalContext.react",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "PolarisLoadingModal.react",
    "PolarisLoadingSheet.react",
    "PolarisUA",
    "Promise",
    "cr:4066",
    "emptyFunction",
    "gkx",
    "react",
    "xigRequireInterop",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react"),
      j = i.createContext,
      k = i.useContext,
      l = i.useState;
    function m(a) {
      if (d("PolarisUA").isMobile()) return null;
      switch (a) {
        case "share":
        case "directShare":
        case "directSecureShare":
          return h.jsx(c("PolarisLoadingSheet.react"), {});
        default:
          return h.jsx(c("PolarisLoadingModal.react"), {});
      }
    }
    var n = j({ setOpenModal: null, openModal: null });
    function a(a) {
      var d = a.children;
      a = a.post;
      var e = l(null),
        f = e[0],
        g = e[1];
      e = !!k(n).setOpenModal;
      return e
        ? d
        : h.jsxs(n.Provider, {
            value: { setOpenModal: g, openModal: f },
            children: [
              d,
              f &&
                h.jsx(c("CometPlaceholder.react"), {
                  fallback: m(f),
                  children: h.jsx(b("cr:4066"), {
                    onClose: function () {
                      return g(null);
                    },
                    openModal: f,
                    post: a,
                  }),
                }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function e() {
      return k(n).setOpenModal || c("emptyFunction");
    }
    function o() {
      return k(n).openModal;
    }
    function p() {
      return c("gkx")("3663")
        ? b("Promise").resolve()
        : c("JSResourceForInteraction")("PolarisPostModalEntrypoint.react")
            .__setRef("PolarisPostModalContext.react")
            .load()
            .then(function (a) {
              return c("xigRequireInterop")(a);
            });
    }
    g.PostModalContext = a;
    g.useSetPostModal = e;
    g.useCurrentlyOpenModal = o;
    g.preloadPostModals = p;
  },
  98
);
__d(
  "PolarisPostStrings",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = h._("View");
    b = h._("Report Inappropriate");
    c = h._("Approve");
    e = h._("Save");
    f = h._("Share Post");
    d = h._("Remove");
    var i = h._("Comment Options"),
      j = h._("Gif Comment"),
      k = h._("Delete Comment"),
      l = h._("Reply"),
      m = h._("Unhide"),
      n = h._("Restricted Account"),
      o = h._("See Comment"),
      p = h._("Delete"),
      q = h._("Edited"),
      r = h._("Follow"),
      s = h._("Following"),
      t = h._("Likes");
    h = h._("more");
    g.POST_PAGE_ACTION_TEXT = a;
    g.REPORT_INAPPROPRIATE_TEXT = b;
    g.APPROVE_COMMENT_CTA = c;
    g.SAVE_TEXT = e;
    g.SHARE_TEXT = f;
    g.UNSAVE_TEXT = d;
    g.COMMENT_OPTIONS_ALT_TEXT = i;
    g.GIF_COMMENT_ALT_TEXT = j;
    g.DELETE_COMMENT_TEXT = k;
    g.REPLY_TEXT = l;
    g.UNHIDE_TEXT = m;
    g.RESTRICTED_ACCOUNT_HEADER_TEXT = n;
    g.RESTRICT_SEE_COMMENT_TEXT = o;
    g.RESTRICT_DELETE_COMMENT_TEXT = p;
    g.CAPTION_EDITED_TEXT = q;
    g.FOLLOW_TEXT = r;
    g.FOLLOWING_TEXT = s;
    g.LIKES_TEXT = t;
    g.MORE_ELLIPSIS_TEXT = h;
  },
  98
);
__d(
  "CarouselAutoplayContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      pauseCarouselAutoplay: function () {},
      shouldPause: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "PolarisInstagramAdCommentFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_comment",
          a(),
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
  "PolarisInstagramAdLikeFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_like",
          a(),
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
  "PolarisInstagramAdSaveFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_save",
          a(),
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
  "PolarisInstagramAdUnlikeFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_unlike",
          a(),
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
  "PolarisInstagramAdUnsaveFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_ad_unsave",
          a(),
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
  "PolarisAdsEngagementLogger",
  [
    "PolarisContainerModuleUtils",
    "PolarisInstagramAdCommentFalcoEvent",
    "PolarisInstagramAdLikeFalcoEvent",
    "PolarisInstagramAdSaveFalcoEvent",
    "PolarisInstagramAdUnlikeFalcoEvent",
    "PolarisInstagramAdUnsaveFalcoEvent",
    "PolarisInteractionsLogger",
    "PolarisODS",
    "PolarisViewpointActionUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      c("PolarisODS").incr("web.ads.feed.like"),
        c("PolarisInstagramAdLikeFalcoEvent").log(function () {
          return {
            pk: b.viewerId,
            source_of_action: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.source),
            source_of_like: a.sourceOfLike,
            inventory_source: a.source,
            m_pk: i(a),
            ad_id: b.adId,
            tracking_token: b.adTrackingToken,
            pigeon_reserved_keyword_module: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.source),
          };
        });
    }
    function b(a, b) {
      c("PolarisODS").incr("web.ads.feed.unlike"),
        c("PolarisInstagramAdUnlikeFalcoEvent").log(function () {
          return {
            pk: b.viewerId,
            source_of_action: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.source),
            source_of_like: a.sourceOfLike,
            inventory_source: a.source,
            m_pk: i(a),
            ad_id: b.adId,
            tracking_token: b.adTrackingToken,
            pigeon_reserved_keyword_module: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.source),
          };
        });
    }
    function e(a, b) {
      var e = a.parentCommentId != null ? Number(a.parentCommentId) : void 0;
      c("PolarisODS").incr("web.ads.feed.comment");
      c("PolarisInstagramAdCommentFalcoEvent").log(function () {
        return {
          pk: a.commentAuthorId,
          source_of_action: d("PolarisContainerModuleUtils").getContainerModule(
            a.containerModule
          ),
          inventory_source: a.containerModule,
          pigeon_reserved_keyword_module: a.containerModule,
          m_pk: i(a),
          ad_id: b.adId,
          tracking_token: b.adTrackingToken,
          parent_c_pk: e,
        };
      });
    }
    function f(a) {
      c("PolarisODS").incr("web.ads.feed.save"),
        c("PolarisInstagramAdSaveFalcoEvent").log(function () {
          var b;
          return {
            ad_id: a.adId,
            tracking_token: a.adTrackingToken,
            source_of_action: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.analyticsContext),
            pigeon_reserved_keyword_module: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.analyticsContext),
            m_pk: d("PolarisViewpointActionUtils").getMPKForFeedMedia(a.post),
            m_t: d("PolarisInteractionsLogger").getMediaTypeFromPost(a.post),
            a_pk: (b = a.post.owner) == null ? void 0 : b.id,
            pk: a.viewerId,
            follow_status: a.followStatus,
          };
        });
    }
    function h(a) {
      c("PolarisODS").incr("web.ads.feed.unsave"),
        c("PolarisInstagramAdUnsaveFalcoEvent").log(function () {
          var b;
          return {
            ad_id: a.adId,
            tracking_token: a.adTrackingToken,
            source_of_action: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.analyticsContext),
            pigeon_reserved_keyword_module: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(a.analyticsContext),
            m_pk: d("PolarisViewpointActionUtils").getMPKForFeedMedia(a.post),
            m_t: d("PolarisInteractionsLogger").getMediaTypeFromPost(a.post),
            a_pk: (b = a.post.owner) == null ? void 0 : b.id,
            pk: a.viewerId,
            follow_status: a.followStatus,
          };
        });
    }
    function i(a) {
      return a.mediaAuthorId == null
        ? a.mediaId
        : a.mediaId + "_" + a.mediaAuthorId;
    }
    g.logAdLike = a;
    g.logAdUnlike = b;
    g.logAdComment = e;
    g.logAdSave = f;
    g.logAdUnsave = h;
  },
  98
);
__d(
  "usePolarisFadeTransition",
  ["react-spring-wwwig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.duration;
      a = a.show;
      return d("react-spring-wwwig").useTransition(
        a,
        babelHelpers["extends"](
          {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
          },
          b != null ? { config: { duration: b } } : {}
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisPanAndZoom",
  ["react-spring-wwwig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { mass: 5, tension: 350, friction: 40 };
    function a(a, b, c, e) {
      c === void 0 && (c = !1);
      e === void 0 && (e = []);
      e = d("react-spring-wwwig").useSpring(function () {
        var d;
        return {
          to: a,
          from: a,
          config: (d = b) != null ? d : h,
          immediate: c,
          reset: !0,
        };
      }, e);
      var f = e[0];
      e = e[1];
      return { style: f, set: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGAnimate",
  [
    "PolarisIGAnimated.react",
    "usePolarisFadeTransition",
    "usePolarisPanAndZoom",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    (f.Animated = importDefault("PolarisIGAnimated.react")),
      (f.useFadeTransition = importDefault("usePolarisFadeTransition")),
      (f.usePanAndZoom = importDefault("usePolarisPanAndZoom"));
  },
  66
);
__d(
  "XPolarisMobileAllCommentsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/p/{shortcode}/comments/",
      Object.freeze({ enable_persistent_cta: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "usePolarisPostQuerySetup",
  ["PolarisQueryBaseHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      d("PolarisQueryBaseHooks").usePolarisAnyQuerySetup(a, b, "POST");
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSidebarSectionHeader.react",
  ["IGDSBox.react", "IGDSText.react", "PolarisIGCoreButton", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        paddingX: 4,
        paddingY: 1,
        position: "relative",
        children: [
          h.jsx(c("IGDSBox.react"), {
            flex: "grow",
            position: "relative",
            children: h.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a.headerText,
            }),
          }),
          a.linkTo &&
            Boolean(a.secondaryText) &&
            a.placeholder === !0 &&
            h.jsx(c("IGDSText.react").Body2, {
              color: "secondaryText",
              children: a.secondaryText,
            }),
          a.linkTo &&
            Boolean(a.secondaryText) &&
            a.placeholder !== !0 &&
            h.jsx(c("PolarisIGCoreButton"), {
              borderless: !0,
              color: "ig-secondary-button",
              disabled: !!a.placeholder,
              href: a.linkTo,
              onClick: a.onClick,
              children: h.jsx(c("IGDSText.react").Body2Emphasized, {
                children: a.secondaryText,
              }),
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisRoutes",
    "PolarisSidebarSectionHeader.react",
    "PolarisSuggestedUserList.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        e = a.familiarFeed;
      a = a.hasHeaderPlaceholder;
      return i.jsxs("div", {
        className: "_aak3" + (e ? " _agh4" : ""),
        children: [
          i.jsx(c("PolarisSidebarSectionHeader.react"), {
            headerText: d("PolarisSuggestedUserList.react").HEADER_TEXT,
            linkTo: d("PolarisRoutes").DISCOVER_PEOPLE_PATH,
            placeholder: a,
            secondaryText: d("PolarisSuggestedUserList.react").SEE_ALL_TEXT,
          }),
          i.jsx(c("IGDSBox.react"), {
            marginBottom: 1,
            marginStart: 1,
            position: "relative",
            children: b,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSuggestedUserListWithInitialDataFetch.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisSuggestedUserList.react",
    "PolarisUserActionLoadSULV2",
    "polarisSuggestedUserSelectors",
    "react",
    "usePolarisPostQuerySetup",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j() {
      return i.jsx(c("IGDSBox.react"), {
        paddingX: 4,
        paddingY: 3,
        position: "relative",
        children: i.jsx(c("IGDSButton.react"), {
          display: "block",
          href: d("PolarisRoutes").DISCOVER_PEOPLE_PATH,
          label: h._("See All Suggestions"),
          variant: "primary_link",
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.analyticsContext,
        e = a.avatarSize;
      e = e === void 0 ? "medium" : e;
      var f = a.borderlessFollowButton;
      f = f === void 0 ? !1 : f;
      var g = a.count,
        h = a.footer,
        k = a.header,
        l = a.familiarFeed,
        m = a.hasHeaderPlaceholder,
        n = a.hideName;
      n = n === void 0 ? !1 : n;
      var o = a.hideUpsells;
      o = o === void 0 ? !1 : o;
      var p = a.initialRenderCount;
      p =
        p === void 0
          ? d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT
          : p;
      var q = a.variant;
      q = q === void 0 ? "LIST" : q;
      var r = a.viewModule;
      a = a.suggestedUserListQueryRef;
      c("usePolarisPostQuerySetup")(
        a,
        d("PolarisUserActionLoadSULV2").onSuggestedUserListResponse
      );
      a = d("PolarisReactRedux").useSelector(
        d("polarisSuggestedUserSelectors").getSuggestions
      );
      return a.length === 0
        ? null
        : i.jsxs(
            c("PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react"),
            {
              familiarFeed: l,
              hasHeaderPlaceholder: m,
              children: [
                i.jsx(d("PolarisSuggestedUserList.react").SuggestedUserList, {
                  analyticsContext: b,
                  avatarSize: e,
                  borderlessFollowButton: f,
                  hideName: n,
                  hideUpsells: o,
                  initialRenderCount: p,
                  isLoading: !1,
                  subHeader:
                    k !== void 0
                      ? k
                      : d("PolarisSuggestedUserList.react").HEADER_TEXT,
                  userIds: isNaN(g) ? a.slice(0, p) : a.slice(0, g),
                  variant: q,
                  viewModule: r,
                }),
                q === "LIST" && (h !== void 0 ? h : i.jsx(j, {})),
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
  "PolarisFeedSidebarSuggestedUserList.react",
  [
    "IGDSBox.react",
    "IGDSListItemPlaceholder",
    "PolarisConnectionsLogger",
    "PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react",
    "PolarisPanavisionQEHelpers",
    "PolarisSuggestedUserListWithInitialDataFetch.react",
    "PolarisSuspenseWithErrorBoundary.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 5,
      j = "small";
    function a(a) {
      var b = a.hasHeaderPlaceholder;
      a = a.suggestedUserListQueryRef;
      var e = d("PolarisPanavisionQEHelpers").hasFamiliarFeed();
      return h.jsx(c("PolarisSuspenseWithErrorBoundary.react"), {
        loadingRenderer: h.jsx(
          c("PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react"),
          {
            familiarFeed: e,
            hasHeaderPlaceholder: b,
            children: h.jsxs(c("IGDSBox.react"), {
              paddingY: 2,
              position: "relative",
              children: [
                h.jsx(c("IGDSListItemPlaceholder"), { size: j }),
                h.jsx(c("IGDSListItemPlaceholder"), { size: j }),
                h.jsx(c("IGDSListItemPlaceholder"), { size: j }),
                h.jsx(c("IGDSListItemPlaceholder"), { size: j }),
                h.jsx(c("IGDSListItemPlaceholder"), { size: j }),
              ],
            }),
          }
        ),
        children: h.jsx(
          c("PolarisSuggestedUserListWithInitialDataFetch.react"),
          {
            analyticsContext: "desktop",
            avatarSize: j,
            borderlessFollowButton: !0,
            count: i,
            familiarFeed: e,
            footer: null,
            hasHeaderPlaceholder: b,
            header: null,
            hideName: !0,
            hideUpsells: !0,
            initialRenderCount: i,
            suggestedUserListQueryRef: a,
            viewModule: d("PolarisConnectionsLogger").VIEW_MODULES.desktop_feed,
          }
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSidebarUserSummary.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSListItem.react",
    "IGDSText.react",
    "PolarisAuthStrings",
    "PolarisFastLink.react",
    "PolarisIGCoreButton",
    "PolarisIGCoreConstants",
    "PolarisIGCoreVerifiedBadge",
    "PolarisLinkBuilder",
    "PolarisNavigationActions",
    "PolarisPanavisionQEHelpers",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUserAvatarWithStories.react",
    "polarisIsUserLoggedIn",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j() {
      var a = d("PolarisReactRedux").useDispatch();
      if (!d("polarisIsUserLoggedIn").isUserLoggedIn()) return null;
      var b = function () {
        return a(
          d("PolarisNavigationActions").openAccountSwitcher({
            next: d("PolarisRoutes").FEED_PATH,
            source: "feed_sidebar",
          })
        );
      };
      return i.jsx(c("PolarisIGCoreButton"), {
        borderless: !0,
        onClick: b,
        children: i.jsx(c("IGDSText.react").Body2Emphasized, {
          color: "primaryButton",
          children: d("PolarisAuthStrings").SWITCH_CTA_TEXT,
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.isVerified,
        e = a.name,
        f = a.profilePictureUrl;
      a = a.username;
      var g = d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp(),
        h = g ? "medium" : "large";
      return i.jsx(c("IGDSBox.react"), {
        "data-testid": void 0,
        marginEnd: 1,
        width: "100%",
        children: i.jsx(c("IGDSListItem.react"), {
          addOnEnd: i.jsx(j, {}),
          addOnStart: i.jsx(c("PolarisUserAvatarWithStories.react"), {
            className: g ? "" : "_aak0",
            isLink: !0,
            profilePictureUrl: f,
            size: c("PolarisIGCoreConstants").AVATAR_SIZES[h],
            storyEntrypoint: "reel_feed_timeline",
            username: a,
          }),
          paddingX: 0,
          paddingY: 0,
          subtitle:
            e !== ""
              ? i.jsx(c("IGDSBox.react"), {
                  flex: "grow",
                  marginStart: g ? 0 : 3,
                  children: i.jsx(c("IGDSText.react").Body, {
                    color: "secondaryText",
                    children: e,
                  }),
                })
              : null,
          title: i.jsxs(c("IGDSBox.react"), {
            direction: "row",
            flex: "grow",
            marginStart: g ? 0 : 3,
            children: [
              i.jsx(c("PolarisFastLink.react"), {
                className: "_aak1",
                href: d("PolarisLinkBuilder").buildUserLink(a),
                children: a,
              }),
              b &&
                i.jsx(c("IGDSBox.react"), {
                  display: "inlineBlock",
                  marginStart: 1,
                  children: i.jsx(c("PolarisIGCoreVerifiedBadge"), {}),
                }),
            ],
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
  "PolarisFeedSidebar.react",
  [
    "cx",
    "PolarisBatchDOM",
    "PolarisDOMListener.react",
    "PolarisErrorBoundary.react",
    "PolarisFeedSidebarSuggestedUserList.react",
    "PolarisFooter.react",
    "PolarisReactRedux",
    "PolarisSidebarUserSummary.react",
    "nullthrows",
    "polarisStorySelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      a = a.suggestedUserListQueryRef;
      var b = d("PolarisReactRedux").useSelector(
          d("polarisUserSelectors").getViewer
        ),
        e = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getFeedStoryTrayWithoutOwn
        ),
        f = m(null),
        g = f[0],
        h = f[1],
        n = l(null),
        o = j(
          function () {
            d("PolarisBatchDOM").measure(function () {
              if (n.current == null) return;
              var a = n.current.getBoundingClientRect().left;
              d("PolarisBatchDOM").mutate(function () {
                if (n.current == null) return;
                h(a);
              });
            });
          },
          [n]
        );
      k(
        function () {
          o();
        },
        [o]
      );
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("PolarisDOMListener.react"), {
            event: "scroll",
            handler: o,
            passive: !0,
            target: window,
          }),
          i.jsx(c("PolarisDOMListener.react"), {
            event: "resize",
            handler: o,
            passive: !0,
            target: window,
          }),
          i.jsx("div", { className: "_aak4", ref: n }),
          i.jsxs("div", {
            className: "_aak6" + (g != null ? " _aak9" : ""),
            style: { left: g },
            children: [
              i.jsx("div", {
                className: "_aakb _aakc",
                children: i.jsx(c("PolarisSidebarUserSummary.react"), {
                  isVerified: !1,
                  name: c("nullthrows")(b == null ? void 0 : b.fullName),
                  profilePictureUrl: c("nullthrows")(
                    b == null ? void 0 : b.profilePictureUrl
                  ),
                  username: c("nullthrows")(b == null ? void 0 : b.username),
                }),
              }),
              i.jsx(c("PolarisErrorBoundary.react"), {
                children: i.jsx(
                  c("PolarisFeedSidebarSuggestedUserList.react"),
                  {
                    hasHeaderPlaceholder: e == null,
                    suggestedUserListQueryRef: a,
                  }
                ),
              }),
              i.jsx(c("PolarisFooter.react"), {
                variant: c("PolarisFooter.react").VARIANTS.sidebar,
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisMediaPrefetcher.react",
  [
    "cx",
    "PolarisLogger",
    "PolarisResponsiveImage.react",
    "PolarisResponsiveVideo.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = "PREFETCHED_IMAGE";
    b = "PREFETCHED_VIDEO";
    var k = new Set(),
      l = new Set(),
      m = new Set(),
      n = [],
      o = 10 * 1e3;
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var c, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((c = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = { next: null }),
          (e.$4 = function (a) {
            return k.has(a) || l.has(a);
          }),
          (e.$1 = function () {
            if (e.props.postIds == null) return !1;
            for (
              var a = e.props.resources,
                b = Array.isArray(a),
                c = 0,
                a = b
                  ? a
                  : a[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var d;
              if (b) {
                if (c >= a.length) break;
                d = a[c++];
              } else {
                c = a.next();
                if (c.done) break;
                d = c.value;
              }
              d = d;
              if (!e.$4(d.id)) return !1;
            }
            return !0;
          }),
          (e.$3 = function () {
            var a = e.state.next;
            if (a != null && !m.has(a.id)) {
              var b = window.setTimeout(function () {
                k.has(a.id) || e.$5(a.id);
              }, o);
              m.add(a.id);
              n.push(b);
            }
          }),
          (e.$2 = function () {
            e.props.resources.length > 0 &&
              d("PolarisLogger").logAction("mediaPrefetchComplete", {
                successCount: k.size,
                timeoutCount: l.size,
                eligibleResourceCount: e.props.resources.length,
                viewKey: e.props.viewKey,
              }),
              e.props.onLoadComplete != null && e.props.onLoadComplete();
          }),
          (e.$5 = function (a) {
            d("PolarisLogger").logAction("mediaPrefetchTimedOut", {
              resource: e.state.next,
            }),
              l.add(a),
              m["delete"](a),
              e.setState(b.prefetchNext(e.props)),
              e.$1() && e.$2();
          }),
          (e.$6 = function () {
            var a = e.state.next;
            a != null &&
              (d("PolarisLogger").logAction("mediaPrefetchSuccess", {
                resource: e.state.next,
              }),
              k.add(a.id),
              e.setState(b.prefetchNext(e.props)));
            e.$1() && e.$2();
          }),
          c) || babelHelpers.assertThisInitialized(e)
        );
      }
      b.getDerivedStateFromProps = function (a) {
        return b.prefetchNext(a);
      };
      var e = b.prototype;
      e.componentDidMount = function () {
        this.$1() ? this.$2() : this.$3();
      };
      e.componentDidUpdate = function () {
        this.$3();
      };
      e.componentWillUnmount = function () {
        m.clear();
        l.clear();
        for (var a = 0; a < n.length; a++) {
          var b = n[a];
          window.clearTimeout(b);
        }
        n.length = 0;
      };
      e.shouldComponentUpdate = function (a, b) {
        return this.props.enabled !== a.enabled || this.state.next !== b.next;
      };
      b.prefetchNext = function (a) {
        var b = a.enabled;
        a = a.resources;
        if (!b) return null;
        for (
          var b = a,
            a = Array.isArray(b),
            c = 0,
            b = a
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (a) {
            if (c >= b.length) break;
            d = b[c++];
          } else {
            c = b.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          if (k.has(d.id) || l.has(d.id)) continue;
          return { next: d };
        }
        return { next: null };
      };
      e.render = function () {
        var a = this.props,
          b = a.currentPostId,
          d = a.enabled;
        a = a.layoutWrapper;
        var e = this.state.next;
        if (e == null || !d) return null;
        d = !this.$4(e.id) && (b == null || (b != null && b !== e.id));
        b =
          d &&
          (e.type === j
            ? i.jsx(
                c("PolarisResponsiveImage.react"),
                {
                  className: "_ac9q",
                  onError: this.$6,
                  onLoad: this.$6,
                  src: e.src,
                  srcSet: e.srcSet,
                },
                e.src
              )
            : i.jsx(
                c("PolarisResponsiveVideo.react"),
                {
                  className: "_ac9q",
                  onError: this.$6,
                  onLoaded: this.$6,
                  preloadOnly: !0,
                  sources: e.srcSet,
                },
                e.src
              ));
        return i.jsx(a, { resource: e, children: b });
      };
      return b;
    })(i.Component);
    e.defaultProps = {
      enabled: !0,
      layoutWrapper: function (a) {
        a = a.children;
        return a;
      },
    };
    function a() {
      k.clear(), m.clear(), l.clear();
    }
    g.PREFETCHED_IMAGE = j;
    g.PREFETCHED_VIDEO = b;
    g.TIMEOUT_DURATION = o;
    g.MediaPrefetcher = e;
    g._resetState = a;
  },
  98
);
__d(
  "PolarisVideoPreloader.react",
  ["react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    var h = d("react").useEffect;
    function i(a) {
      var b = c("useStable")(function () {
          return new XMLHttpRequest();
        }),
        d = a.onError,
        e = a.onLoaded,
        f = a.onTimeout,
        g = a.src,
        i = a.timeout;
      h(
        function () {
          b.open("GET", g, !0);
          b.responseType = "blob";
          b.onload = function (a) {
            b.status === 200 ? e() : d();
          };
          f != null && (b.ontimeout = f);
          b.timeout = i * 1e3;
          b.send();
          return function () {
            b.abort();
          };
        },
        [d, e, f, g, i, b]
      );
    }
    function a(a) {
      i(a);
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisResponsiveVideo.react",
  [
    "PolarisBatchDOM",
    "PolarisMediaPrefetcher.react",
    "PolarisVideoPreloader.react",
    "PolarisVideoResource",
    "UserAgent",
    "nullthrows",
    "polarisGetCrossOriginAttribute",
    "polarisUnexpected",
    "polarisWithForwardRef",
    "polarisWithRemountOnChange",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.$5 = function (a) {
          (c.$1 = a), c.props.videoRef && c.props.videoRef(a);
        };
        c.state = { width: null };
        return c;
      }
      var e = b.prototype;
      e.$3 = function () {
        return c("nullthrows")(this.$1).getBoundingClientRect().width;
      };
      e.$4 = function () {
        var a = this.$3(),
          b = window.devicePixelRatio || 1;
        return a * b;
      };
      e.$6 = function (a, b, c) {
        if (a == null) return b;
        if (a.configWidth < c && b.configWidth > a.configWidth) return b;
        return b.configWidth > c && b.configWidth <= a.configWidth ? b : a;
      };
      e.$7 = function (a) {
        var b = null,
          e = null,
          f = [];
        for (
          var g = this.props.sources,
            h = Array.isArray(g),
            i = 0,
            g = h
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var j;
          if (h) {
            if (i >= g.length) break;
            j = g[i++];
          } else {
            i = g.next();
            if (i.done) break;
            j = i.value;
          }
          j = j;
          switch (j.profile) {
            case d("PolarisVideoResource").PROFILE_MAIN:
              b = this.$6(b, j, a);
              break;
            case d("PolarisVideoResource").PROFILE_BASELINE:
              e = this.$6(e, j, a);
              break;
            default:
              c("polarisUnexpected")(
                "got video candidate without a supported profile: " +
                  String(j.profile)
              ),
                f.push(j);
          }
        }
        return [].concat(b != null ? [b] : [], e != null ? [e] : [], f);
      };
      e.componentDidMount = function () {
        var a = this;
        d("PolarisBatchDOM").measure(function () {
          if (a.$2) return;
          var b = a.$4();
          d("PolarisBatchDOM").mutate(function () {
            if (a.$2) return;
            a.setState({ width: b });
          });
        });
      };
      e.componentWillUnmount = function () {
        this.$2 = !0;
      };
      e.render = function () {
        var a = this.state.width,
          b = this.props,
          e = b.autoPlay,
          f = b.className,
          g = b.forwardedRef,
          i = b.preloadOnly;
        b.sources;
        var j = b.style;
        b.videoRef;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "autoPlay",
          "className",
          "forwardedRef",
          "preloadOnly",
          "sources",
          "style",
          "videoRef",
        ]);
        b = Object.freeze(
          babelHelpers["extends"]({}, b, e != null ? { autoPlay: e } : {})
        );
        if (a == null)
          return h.jsx("video", {
            className: f,
            crossOrigin: c("polarisGetCrossOriginAttribute")(),
            ref: this.$5,
            style: j,
          });
        else if (i) {
          i = this.props;
          var k = i.onError;
          i = i.onLoaded;
          var l = this.$7(a);
          return (
            k != null &&
            i != null &&
            h.jsx(c("PolarisVideoPreloader.react"), {
              onError: k,
              onLoaded: i,
              src: l[0].src,
              timeout: d("PolarisMediaPrefetcher.react").TIMEOUT_DURATION,
            })
          );
        } else if (e === !0 && c("UserAgent").isBrowser("Safari >= 15"))
          return h.jsx(
            "video",
            babelHelpers["extends"](
              {
                className: f,
                crossOrigin: c("polarisGetCrossOriginAttribute")(),
                ref: g || this.$5,
                style: j,
              },
              b,
              { src: this.$7(a)[0].src }
            )
          );
        return h.jsx(
          "video",
          babelHelpers["extends"](
            {
              className: f,
              crossOrigin: c("polarisGetCrossOriginAttribute")(),
              ref: g || this.$5,
              style: j,
            },
            b,
            {
              children: this.$7(a).map(function (a, b) {
                return h.jsx("source", { src: a.src, type: a.mimeType }, b);
              }),
            }
          )
        );
      };
      return b;
    })(h.PureComponent);
    function a(a, b) {
      a = a.sources;
      b = b.sources;
      if (a === b) return !1;
      if (a.length !== b.length) return !0;
      for (var c = 0; c < a.length; ++c) if (a[c].src !== b[c].src) return !0;
      return !1;
    }
    e = c("polarisWithForwardRef")(c("polarisWithRemountOnChange")(a)(b));
    g["default"] = e;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisDesktopPostLoadingShimmer.react",
  [
    "cx",
    "PolarisIGTheme.react",
    "PolarisReactRedux",
    "PolarisSizing",
    "polarisPostModalHelpers",
    "polarisPostSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      var b,
        c = a.dimensions,
        e = a.postId,
        f = a.viewportHeight;
      a = a.viewportWidth;
      var g = a != null && a > d("PolarisSizing").MEDIUM_SCREEN_MIN;
      b =
        (b = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisPostSelectors").getPostOrNullById(
            a,
            (a = e) != null ? a : ""
          );
        })) == null
          ? void 0
          : b.isSponsored;
      a = d("polarisPostModalHelpers").getMediaContainerProps({
        dimensions: c,
        viewportHeight: (f = f) != null ? f : 0,
        viewportWidth: (f = a) != null ? f : 0,
        hasSidebarInRedesign: g,
        hasFooter: b,
      });
      return i.jsx(
        "div",
        babelHelpers["extends"](
          {
            className:
              "_aas3" + (g && c != null && c.width >= c.height ? " _aas4" : ""),
          },
          a,
          { children: i.jsx(k, { dimensions: c }) }
        )
      );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      a = a.dimensions;
      var b = {},
        c = d("PolarisIGTheme.react").useTheme();
      a && (b.paddingBottom = d("PolarisSizing").getHeightPercent(a) + "%");
      return i.jsx("div", {
        className:
          "_aas5" +
          (c.getTheme() === d("PolarisIGTheme.react").IGTheme.Dark
            ? " _aas6"
            : ""),
        style: b,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.dimensions;
      a.onExitModal;
      var c = a.postId,
        d = a.viewportHeight;
      a = a.viewportWidth;
      return i.jsx(j, {
        dimensions: b,
        postId: c,
        viewportHeight: d,
        viewportWidth: a,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      a.className;
      var b = a.dimensions,
        c = a.onExitModal,
        d = a.postId,
        e = a.viewportHeight;
      a = a.viewportWidth;
      var f = {};
      b && (f = { flexDirection: "row" });
      return i.jsxs("div", {
        className: "_aas7",
        style: f,
        children: [
          i.jsx(l, {
            dimensions: b,
            onExitModal: c,
            postId: d,
            viewportHeight: e,
            viewportWidth: a,
          }),
          i.jsxs("div", {
            className: "_aas8",
            children: [
              i.jsxs("div", {
                className: "_aas9",
                children: [
                  i.jsx("div", { className: "_aasa" }),
                  i.jsxs("div", {
                    className: "_aasb",
                    children: [
                      i.jsx("div", { className: "_aasc" }),
                      i.jsx("div", { className: "_aasd" }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "_aase",
                children: [
                  i.jsx("div", { className: "_aasf" }),
                  i.jsx("div", { className: "_aasg" }),
                  i.jsx("div", { className: "_aash" }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SIDEBAR_VARIANT_CUTOFF = d("PolarisSizing").MEDIUM_SCREEN_MIN;
    g.DesktopPostLoadingShimmer = a;
  },
  98
);
__d(
  "PolarisPostModalLoading.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisDesktopPostLoadingShimmer.react",
    "PolarisPostConstants",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.dimensions,
        e = a.onExitModal,
        f = a.postId,
        g = a.viewportHeight;
      a = a.viewportWidth;
      return d("PolarisUA").isDesktop() &&
        a > d("PolarisPostConstants").SIDEBAR_VARIANT_CUTOFF
        ? h.jsx(
            d("PolarisDesktopPostLoadingShimmer.react")
              .DesktopPostLoadingShimmer,
            {
              dimensions: b,
              onExitModal: e,
              postId: f,
              viewportHeight: g,
              viewportWidth: a,
            }
          )
        : h.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            position: "relative",
            children: h.jsx(c("IGDSSpinner.react"), {
              color: "light",
              size: "medium",
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostModalPaginationArrow.react",
  [
    "cx",
    "IGDSChevronIcon",
    "PolarisGenericStrings",
    "PolarisIGCoreSVGIconButton",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a.arrowRef;
      var b = a.direction,
        e = a.onClick;
      a.title;
      a = b === "left";
      var f = b === "right";
      return i.jsx("div", {
        className: (a ? "_aaqf" : "") + (f ? " _aaqg" : "") + " _aaqh",
        children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
          onClick: e,
          children: i.jsx(c("IGDSChevronIcon"), {
            alt: a
              ? d("PolarisGenericStrings").GO_BACK
              : d("PolarisGenericStrings").NEXT,
            color: "web-always-black",
            direction: b,
            size: 16,
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
  "PolarisPostModalInternal.react",
  [
    "cx",
    "IGCoreModal",
    "IGCoreModalLocation",
    "PolarisAutoplayViewpointManager.react",
    "PolarisDOMListener.react",
    "PolarisLogger",
    "PolarisPostActionLoadPost",
    "PolarisPostModalLoading.react",
    "PolarisPostModalPaginationArrow.react",
    "PolarisPostModalRenderingContext",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisThreadedCommentActions",
    "getPolarisKeyCommandConfig",
    "nullthrows",
    "polarisIsUserLoggedIn",
    "polarisPostModalHelpers",
    "polarisPostSelectors",
    "react",
    "useGlobalKeyCommands",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = { isInModal: !0 };
    function a(a) {
      var b = a.analyticsContext,
        e = a.children,
        f = a.combinedPostIds,
        g = f === void 0 ? [] : f;
      f = a["data-testid"];
      f = a.dimensions;
      var h = a.mediaLinkBuilder,
        o = a.modalEntryPath;
      o = o === void 0 ? d("PolarisRoutes").FEED_PATH : o;
      var p = a.onClose,
        q = a.onOpen,
        r = a.onlyReplaceModalHistory,
        s = a.postCode,
        t = a.postId,
        u = a.showLoadingShimmer,
        v = a.skipMediaInfo,
        w = d("PolarisReactRedux").useDispatch(),
        x = m(null);
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisPostSelectors").getAreCommentsFetched(a, t);
      });
      var y = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisPostSelectors").getIsPostDataFetched(a, s);
        }),
        z = d("polarisIsUserLoggedIn").isUserLoggedIn() === !0 ? y : y && a;
      y = j(
        function () {
          z ||
            (v === !0
              ? w(d("PolarisThreadedCommentActions").requestInitialComments(t))
              : w(d("PolarisPostActionLoadPost").loadPost(s, t)));
        },
        [v, z, w, s, t]
      );
      k(y, [y]);
      var A = g.findIndex(function (a) {
          return a === t;
        }),
        B = j(
          function (a) {
            return a >= 0 && a < g.length;
          },
          [g.length]
        ),
        C = j(
          function (a) {
            a = A + a;
            B(a) && q && q(c("nullthrows")(g[a]), a);
          },
          [g, A, B, q]
        ),
        D = j(
          function (a) {
            p(a), x.current != null && x.current.returnToEntry();
          },
          [p]
        );
      a = l(
        function () {
          return [
            d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig(
              "postModal",
              "navigateLeft",
              function () {
                C(d("polarisPostModalHelpers").LEFT_DELTA);
              }
            ),
            d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig(
              "postModal",
              "navigateRight",
              function () {
                C(d("polarisPostModalHelpers").RIGHT_DELTA);
              }
            ),
            d("getPolarisKeyCommandConfig").getPolarisKeyCommandConfig(
              "postModal",
              "exit",
              function () {
                D();
              }
            ),
          ];
        },
        [C, D]
      );
      c("useGlobalKeyCommands")(a);
      y = function (a) {
        return function (b) {
          if (b.metaKey || b.ctrlKey) return;
          b.preventDefault();
          b.stopPropagation();
          C(a);
          d("PolarisLogger").logAction("postModalArrowClick");
        };
      };
      a = j(
        function () {
          var a = d(
            "polarisPostModalHelpers"
          ).getModalPageIdFromAnalyticsContext(b);
          a.length > 0 &&
            d("PolarisLogger").logPageView(a, { post_id: t, page_id: a });
        },
        [b, t]
      );
      var E = B(A - 1),
        F = B(A + 1);
      E = i.jsx("div", {
        className: "_aeap _aeaq",
        children: i.jsxs("div", {
          className: "_aear",
          children: [
            E &&
              i.jsx(c("PolarisPostModalPaginationArrow.react"), {
                direction: "left",
                onClick: y(d("polarisPostModalHelpers").LEFT_DELTA),
                title: d("polarisPostModalHelpers").PREVIOUS_ARROW_TITLE,
              }),
            F &&
              i.jsx(c("PolarisPostModalPaginationArrow.react"), {
                direction: "right",
                onClick: y(d("polarisPostModalHelpers").RIGHT_DELTA),
                title: d("polarisPostModalHelpers").NEXT_ARROW_TITLE,
              }),
          ],
        }),
      });
      F = d("PolarisReactRedux").useSelector(function (a) {
        return a.displayProperties.viewportWidth;
      });
      y = d("PolarisReactRedux").useSelector(function (a) {
        return a.displayProperties.viewportHeight;
      });
      u = i.jsx(i.Fragment, {
        children:
          !z && u
            ? i.jsx(c("PolarisPostModalLoading.react"), {
                dimensions: f,
                postId: t,
                viewportHeight: y,
                viewportWidth: F,
              })
            : e,
      });
      f = i.jsx(c("IGCoreModal"), {
        aboveContent: E,
        backgroundColor: "DEPRECATED_transparent",
        closeButtonPosition: "background",
        "data-testid": void 0,
        onClose: D,
        size: "fullscreenResponsive",
        children: u,
      });
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(
            d("PolarisAutoplayViewpointManager.react")
              .FullscreenAutoplayViewpointClipRegion,
            { id: "postModal" }
          ),
          i.jsx(c("IGCoreModalLocation"), {
            entryPath: o,
            nativeReplace: !0,
            onlyReplaceModalHistory: r,
            onUpdateHistory: a,
            pageID: "postPage",
            parentModule: "PolarisPostModal",
            path: h(s),
            ref: x,
          }),
          i.jsx(c("PolarisDOMListener.react"), {
            event: "popstate",
            handler: D,
            once: !0,
            target: window,
          }),
          i.jsx(
            d("PolarisPostModalRenderingContext")
              .PolarisPostModalRenderingContext.Provider,
            { value: n, children: f }
          ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostModal.react",
  ["PolarisPostModalInternal.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("PolarisPostModalInternal.react"),
        babelHelpers["extends"]({}, a, { showLoadingShimmer: !0 })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "goURI",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("URI").go;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "usePartialViewImpression",
  ["useVisibilityObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.onImpressionEnd;
      a = a.onImpressionStart;
      return c("useVisibilityObserver")({
        onHidden: b,
        onVisible: a,
        options: { hiddenWhenCSSStyleHidden: !0, hiddenWhenZeroArea: !0 },
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisInstagramOrganicCommentFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_organic_comment",
          a(),
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
  "PolarisInstagramOrganicLikeFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_organic_like",
          a(),
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
  "PolarisInstagramOrganicUnlikeFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_organic_unlike",
          a(),
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
  "PolarisEngagementLogger",
  [
    "PolarisInstagramOrganicCommentFalcoEvent",
    "PolarisInstagramOrganicLikeFalcoEvent",
    "PolarisInstagramOrganicUnlikeFalcoEvent",
    "PolarisInteractionsLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {}
    function b(a) {
      var b = a.commentAuthorId,
        c = a.commentId,
        e = a.containerModule,
        f = a.isCovered,
        g = a.mediaAuthorId,
        h = a.mediaId;
      a = a.mediaType;
      d("PolarisInteractionsLogger").logInteractionAction({
        eventName: "comment_impression",
        commentAuthorId: b,
        commentId: c,
        containerModule: e,
        isCovered: f,
        mediaAuthorId: g,
        mediaId: h,
        mediaType: a,
      });
    }
    function e(a) {
      var b = a.commentAuthorId,
        d = a.commentId,
        e = a.containerModule,
        f = a.mediaAuthorId,
        g = a.mediaId,
        h = a.mediaType,
        i = a.parentCommentAuthorId;
      a = a.parentCommentId;
      var j = a != null ? Number(a) : void 0,
        k = i != null ? Number(i) : void 0;
      c("PolarisInstagramOrganicCommentFalcoEvent").log(function () {
        return {
          c_pk: d,
          ca_pk: Number(b),
          container_module: e,
          feed_sticker_media_id: void 0,
          m_pk: g + "_" + f,
          m_t: h,
          parent_c_pk: j,
          parent_ca_pk: k,
        };
      });
    }
    function f(a) {
      d("PolarisInteractionsLogger").logInteractionAction(
        babelHelpers["extends"](
          { eventName: "instagram_organic_comment_like" },
          a
        )
      );
    }
    function h(a) {
      d("PolarisInteractionsLogger").logInteractionAction(
        babelHelpers["extends"](
          { eventName: "instagram_organic_comment_unlike" },
          a
        )
      );
    }
    function i(a) {
      c("PolarisInstagramOrganicLikeFalcoEvent").log(function () {
        return {
          source_of_like: a.sourceOfLike,
          inventory_source: a.source,
          m_pk:
            a.mediaAuthorId == null
              ? a.mediaId
              : a.mediaId + "_" + a.mediaAuthorId,
          tracking_token: a.trackingToken,
        };
      });
    }
    function j(a) {
      c("PolarisInstagramOrganicUnlikeFalcoEvent").log(function () {
        return {
          inventory_source: a.source,
          m_pk:
            a.mediaAuthorId == null
              ? a.mediaId
              : a.mediaId + "_" + a.mediaAuthorId,
          tracking_token: a.trackingToken,
        };
      });
    }
    g.logOrganicBrandProfile = a;
    g.logCommentImpression = b;
    g.logOrganicComment = e;
    g.logOrganicCommentLike = f;
    g.logOrganicCommentUnlike = h;
    g.logOrganicLike = i;
    g.logOrganicUnlike = j;
  },
  98
);
__d(
  "PolarisLikeButton.react",
  [
    "cx",
    "invariant",
    "IGDSHeartFilledIcon",
    "IGDSHeartPanoOutlineIcon",
    "PolarisIGCoreSVGIconButton",
    "PolarisInteractionsStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a) {
      var b = a.color;
      b = b === void 0 ? "ig-primary-icon" : b;
      var e = a.handleClick,
        f = a.isHovered,
        g = a.isLiked,
        h = a.likeChangeCount,
        i = a.padding,
        k = a.setIsHovered,
        l = a.shadow;
      l = l === void 0 ? !1 : l;
      a = a.size;
      return j.jsx(c("PolarisIGCoreSVGIconButton"), {
        hover: g
          ? null
          : j.jsx(c("IGDSHeartPanoOutlineIcon"), {
              alt: d("PolarisInteractionsStrings").LIKE_TEXT,
              color:
                b === "ig-secondary-icon" ? "ig-stroke" : "ig-secondary-icon",
              shadow: l,
              size: a,
            }),
        onClick: e,
        padding: i,
        children: j.jsx(
          "span",
          {
            className: h > 0 ? "_aame" : "",
            onMouseEnter: function () {
              k != null && k(!0);
            },
            onMouseLeave: function () {
              k != null && k(!1);
            },
            children: g
              ? j.jsx(c("IGDSHeartFilledIcon"), {
                  alt: d("PolarisInteractionsStrings").UNLIKE_TEXT,
                  color: "ig-badge",
                  shadow: l,
                  size: a,
                })
              : j.jsx(c("IGDSHeartPanoOutlineIcon"), {
                  alt: d("PolarisInteractionsStrings").LIKE_TEXT,
                  color: f === !0 ? "ig-secondary-icon" : b,
                  shadow: l,
                  size: a,
                }),
          },
          h
        ),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { likeChangeCount: -1, prevIsLiked: null }),
          (c.$2 = function (a) {
            a.preventDefault(), c.props.onChange(!c.props.isLiked);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getDerivedStateFromProps = function (a, b) {
        return a.isLiked !== b.prevIsLiked
          ? { likeChangeCount: b.likeChangeCount + 1, prevIsLiked: a.isLiked }
          : null;
      };
      var c = b.prototype;
      c.focus = function () {
        this.$1 || i(0, 51544), this.$1.focus();
      };
      c.render = function () {
        var a = this.props,
          b = a.className,
          c = a.color,
          d = a["data-testid"];
        d = a.isHovered;
        var e = a.isLiked,
          f = a.large,
          g = a.padding,
          h = a.setIsHovered;
        a = a.shadow;
        return j.jsx("span", {
          className: b,
          "data-testid": void 0,
          onMouseEnter: function () {
            h != null && h(!0);
          },
          onMouseLeave: function () {
            h != null && h(!1);
          },
          children: f
            ? j.jsx(k, {
                color: c,
                handleClick: this.$2,
                isHovered: d,
                isLiked: e,
                likeChangeCount: this.state.likeChangeCount,
                padding: (b = g) != null ? b : 8,
                shadow: a,
                size: 24,
              })
            : j.jsx("div", {
                className: "_aamf",
                children: j.jsx(k, {
                  color: c,
                  handleClick: this.$2,
                  isHovered: d,
                  isLiked: e,
                  likeChangeCount: this.state.likeChangeCount,
                  padding: (f = g) != null ? f : 0,
                  shadow: a,
                  size: 12,
                }),
              }),
        });
      };
      return b;
    })(j.Component);
    a.defaultProps = { large: !0 };
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisPost",
  [
    "PolarisReactRedux",
    "nullthrows",
    "polarisPostSelectors",
    "polarisUserSelectors",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return d("PolarisReactRedux").useSelector(function (c) {
        c = d("polarisPostSelectors").getPostById(c, a);
        return b(c);
      });
    }
    function b(a, b) {
      return d("PolarisReactRedux").useSelector(function (e) {
        var f = d("polarisPostSelectors").getPostById(e, a);
        e = d("polarisUserSelectors").getUserById(
          e,
          c("nullthrows")((e = f.owner) == null ? void 0 : e.id)
        );
        return b(f, e);
      });
    }
    g.usePost = a;
    g.usePostAndOwner = b;
  },
  98
);
__d(
  "usePolarisEventListenerRef",
  ["PolarisEventListener", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b, d) {
      d === void 0 && (d = { capture: !1 });
      var e = i(null),
        f = i();
      h(
        function () {
          f.current != null &&
            (e.current = c("PolarisEventListener").add(f.current, a, b, d));
          return function () {
            e.current && (e.current.remove(), (e.current = null));
          };
        },
        [a, b, d]
      );
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisGNVReporter",
  [
    "PolarisGNVManagerContext.react",
    "react",
    "useMergeRefs",
    "usePolarisALTrackingData",
    "usePolarisEventListenerRef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a(a) {
      var b = h(c("PolarisGNVManagerContext.react")),
        d = c("usePolarisALTrackingData")(),
        e = function (c) {
          if (
            c instanceof MouseEvent &&
            c.type === "auxclick" &&
            c.button !== 1
          )
            return;
          b == null ? void 0 : b.setGestureTrackingData(a, d);
        },
        f = c("usePolarisEventListenerRef")("click", e, { capture: !0 }),
        g = c("usePolarisEventListenerRef")("contextmenu", e, { capture: !0 });
      e = c("usePolarisEventListenerRef")("auxclick", e, { capture: !0 });
      return c("useMergeRefs")(f, g, e);
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/6Lnton1H2AA/
 */
__d(
  "PolarisInt64",
  [],
  function (a, b, c, d, e, f) {
    (Int64 = function (a, b) {
      (this.low_ = a), (this.high_ = b);
    }),
      (Int64.IntCache_ = {}),
      (Int64.fromInt = function (a) {
        if (-128 <= a && a < 128) {
          var b = Int64.IntCache_[a];
          if (b) return b;
        }
        b = new Int64(a | 0, a < 0 ? -1 : 0);
        -128 <= a && a < 128 && (Int64.IntCache_[a] = b);
        return b;
      }),
      (Int64.fromNumber = function (a) {
        if (isNaN(a) || !isFinite(a)) return Int64.ZERO;
        else if (a <= -Int64.TWO_PWR_63_DBL_) return Int64.MIN_VALUE;
        else if (a + 1 >= Int64.TWO_PWR_63_DBL_) return Int64.MAX_VALUE;
        else if (a < 0) return Int64.fromNumber(-a).negate();
        else
          return new Int64(
            a % Int64.TWO_PWR_32_DBL_ | 0,
            (a / Int64.TWO_PWR_32_DBL_) | 0
          );
      }),
      (Int64.fromBits = function (a, b) {
        return new Int64(a, b);
      }),
      (Int64.fromString = function (a, b) {
        if (a.length == 0) throw Error("number format error: empty string");
        b = b || 10;
        if (b < 2 || 36 < b) throw Error("radix out of range: " + b);
        if (a.charAt(0) == "-")
          return Int64.fromString(a.substring(1), b).negate();
        else if (a.indexOf("-") >= 0)
          throw Error('number format error: interior "-" character: ' + a);
        var c = Int64.fromNumber(Math.pow(b, 8)),
          d = Int64.ZERO;
        for (var e = 0; e < a.length; e += 8) {
          var f = Math.min(8, a.length - e),
            g = parseInt(a.substring(e, e + f), b);
          if (f < 8) {
            f = Int64.fromNumber(Math.pow(b, f));
            d = d.multiply(f).add(Int64.fromNumber(g));
          } else (d = d.multiply(c)), (d = d.add(Int64.fromNumber(g)));
        }
        return d;
      }),
      (Int64.TWO_PWR_16_DBL_ = 1 << 16),
      (Int64.TWO_PWR_24_DBL_ = 1 << 24),
      (Int64.TWO_PWR_32_DBL_ = Int64.TWO_PWR_16_DBL_ * Int64.TWO_PWR_16_DBL_),
      (Int64.TWO_PWR_31_DBL_ = Int64.TWO_PWR_32_DBL_ / 2),
      (Int64.TWO_PWR_48_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_16_DBL_),
      (Int64.TWO_PWR_64_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_32_DBL_),
      (Int64.TWO_PWR_63_DBL_ = Int64.TWO_PWR_64_DBL_ / 2),
      (Int64.ZERO = Int64.fromInt(0)),
      (Int64.ONE = Int64.fromInt(1)),
      (Int64.NEG_ONE = Int64.fromInt(-1)),
      (Int64.MAX_VALUE = Int64.fromBits(4294967295 | 0, 2147483647 | 0)),
      (Int64.MIN_VALUE = Int64.fromBits(0, 2147483648 | 0)),
      (Int64.TWO_PWR_24_ = Int64.fromInt(1 << 24)),
      (Int64.prototype.toInt = function () {
        return this.low_;
      }),
      (Int64.prototype.toNumber = function () {
        return this.high_ * Int64.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
      }),
      (Int64.prototype.toUnsignedBits = function () {
        var a = [],
          b = 31;
        for (var c = 32; c < 64; c++) (a[c] = (this.low_ >> b) & 1), (b -= 1);
        b = 31;
        for (var c = 0; c < 32; c++) (a[c] = (this.high_ >> b) & 1), (b -= 1);
        return a.join("");
      }),
      (Int64.prototype.toString = function (a) {
        a = a || 10;
        if (a < 2 || 36 < a) throw Error("radix out of range: " + a);
        if (this.isZero()) return "0";
        if (this.isNegative())
          if (this.equals(Int64.MIN_VALUE)) {
            var b = Int64.fromNumber(a),
              c = this.div(b);
            b = c.multiply(b).subtract(this);
            return c.toString(a) + b.toInt().toString(a);
          } else return "-" + this.negate().toString(a);
        c = Int64.fromNumber(Math.pow(a, 6));
        b = this;
        var d = "";
        while (!0) {
          var e = b.div(c),
            f = b.subtract(e.multiply(c)).toInt();
          f = f.toString(a);
          b = e;
          if (b.isZero()) return f + d;
          else {
            while (f.length < 6) f = "0" + f;
            d = "" + f + d;
          }
        }
      }),
      (Int64.prototype.getHighBits = function () {
        return this.high_;
      }),
      (Int64.prototype.getLowBits = function () {
        return this.low_;
      }),
      (Int64.prototype.getLowBitsUnsigned = function () {
        return this.low_ >= 0 ? this.low_ : Int64.TWO_PWR_32_DBL_ + this.low_;
      }),
      (Int64.prototype.getNumBitsAbs = function () {
        if (this.isNegative())
          if (this.equals(Int64.MIN_VALUE)) return 64;
          else return this.negate().getNumBitsAbs();
        else {
          var a = this.high_ != 0 ? this.high_ : this.low_;
          for (var b = 31; b > 0; b--) if ((a & (1 << b)) != 0) break;
          return this.high_ != 0 ? b + 33 : b + 1;
        }
      }),
      (Int64.prototype.isZero = function () {
        return this.high_ == 0 && this.low_ == 0;
      }),
      (Int64.prototype.isNegative = function () {
        return this.high_ < 0;
      }),
      (Int64.prototype.isOdd = function () {
        return (this.low_ & 1) == 1;
      }),
      (Int64.prototype.equals = function (a) {
        return this.high_ == a.high_ && this.low_ == a.low_;
      }),
      (Int64.prototype.notEquals = function (a) {
        return this.high_ != a.high_ || this.low_ != a.low_;
      }),
      (Int64.prototype.lessThan = function (a) {
        return this.compare(a) < 0;
      }),
      (Int64.prototype.lessThanOrEqual = function (a) {
        return this.compare(a) <= 0;
      }),
      (Int64.prototype.greaterThan = function (a) {
        return this.compare(a) > 0;
      }),
      (Int64.prototype.greaterThanOrEqual = function (a) {
        return this.compare(a) >= 0;
      }),
      (Int64.prototype.compare = function (a) {
        if (this.equals(a)) return 0;
        var b = this.isNegative(),
          c = a.isNegative();
        if (b && !c) return -1;
        if (!b && c) return 1;
        if (this.subtract(a).isNegative()) return -1;
        else return 1;
      }),
      (Int64.prototype.negate = function () {
        if (this.equals(Int64.MIN_VALUE)) return Int64.MIN_VALUE;
        else return this.not().add(Int64.ONE);
      }),
      (Int64.prototype.add = function (a) {
        var b = this.high_ >>> 16,
          c = this.high_ & 65535,
          d = this.low_ >>> 16,
          e = this.low_ & 65535,
          f = a.high_ >>> 16,
          g = a.high_ & 65535,
          h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0,
          j = 0,
          k = 0,
          l = 0;
        l += e + a;
        k += l >>> 16;
        l &= 65535;
        k += d + h;
        j += k >>> 16;
        k &= 65535;
        j += c + g;
        i += j >>> 16;
        j &= 65535;
        i += b + f;
        i &= 65535;
        return Int64.fromBits((k << 16) | l, (i << 16) | j);
      }),
      (Int64.prototype.subtract = function (a) {
        return this.add(a.negate());
      }),
      (Int64.prototype.multiply = function (a) {
        if (this.isZero()) return Int64.ZERO;
        else if (a.isZero()) return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
          return a.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        else if (a.equals(Int64.MIN_VALUE))
          return this.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        if (this.isNegative())
          if (a.isNegative()) return this.negate().multiply(a.negate());
          else return this.negate().multiply(a).negate();
        else if (a.isNegative()) return this.multiply(a.negate()).negate();
        if (this.lessThan(Int64.TWO_PWR_24_) && a.lessThan(Int64.TWO_PWR_24_))
          return Int64.fromNumber(this.toNumber() * a.toNumber());
        var b = this.high_ >>> 16,
          c = this.high_ & 65535,
          d = this.low_ >>> 16,
          e = this.low_ & 65535,
          f = a.high_ >>> 16,
          g = a.high_ & 65535,
          h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0,
          j = 0,
          k = 0,
          l = 0;
        l += e * a;
        k += l >>> 16;
        l &= 65535;
        k += d * a;
        j += k >>> 16;
        k &= 65535;
        k += e * h;
        j += k >>> 16;
        k &= 65535;
        j += c * a;
        i += j >>> 16;
        j &= 65535;
        j += d * h;
        i += j >>> 16;
        j &= 65535;
        j += e * g;
        i += j >>> 16;
        j &= 65535;
        i += b * a + c * h + d * g + e * f;
        i &= 65535;
        return Int64.fromBits((k << 16) | l, (i << 16) | j);
      }),
      (Int64.prototype.div = function (a) {
        if (a.isZero()) throw Error("division by zero");
        else if (this.isZero()) return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
          if (a.equals(Int64.ONE) || a.equals(Int64.NEG_ONE))
            return Int64.MIN_VALUE;
          else if (a.equals(Int64.MIN_VALUE)) return Int64.ONE;
          else {
            var b = this.shiftRight(1);
            b = b.div(a).shiftLeft(1);
            if (b.equals(Int64.ZERO))
              return a.isNegative() ? Int64.ONE : Int64.NEG_ONE;
            else {
              var c = this.subtract(a.multiply(b)),
                d = b.add(c.div(a));
              return d;
            }
          }
        else if (a.equals(Int64.MIN_VALUE)) return Int64.ZERO;
        if (this.isNegative())
          if (a.isNegative()) return this.negate().div(a.negate());
          else return this.negate().div(a).negate();
        else if (a.isNegative()) return this.div(a.negate()).negate();
        d = Int64.ZERO;
        var c = this;
        while (c.greaterThanOrEqual(a)) {
          b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
          var e = Math.ceil(Math.log(b) / Math.LN2);
          e = e <= 48 ? 1 : Math.pow(2, e - 48);
          var f = Int64.fromNumber(b),
            g = f.multiply(a);
          while (g.isNegative() || g.greaterThan(c))
            (b -= e), (f = Int64.fromNumber(b)), (g = f.multiply(a));
          f.isZero() && (f = Int64.ONE);
          d = d.add(f);
          c = c.subtract(g);
        }
        return d;
      }),
      (Int64.prototype.modulo = function (a) {
        return this.subtract(this.div(a).multiply(a));
      }),
      (Int64.prototype.not = function () {
        return Int64.fromBits(~this.low_, ~this.high_);
      }),
      (Int64.prototype.and = function (a) {
        return Int64.fromBits(this.low_ & a.low_, this.high_ & a.high_);
      }),
      (Int64.prototype.or = function (a) {
        return Int64.fromBits(this.low_ | a.low_, this.high_ | a.high_);
      }),
      (Int64.prototype.xor = function (a) {
        return Int64.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_);
      }),
      (Int64.prototype.shiftLeft = function (a) {
        a &= 63;
        if (a == 0) return this;
        else {
          var b = this.low_;
          if (a < 32) {
            var c = this.high_;
            return Int64.fromBits(b << a, (c << a) | (b >>> (32 - a)));
          } else return Int64.fromBits(0, b << (a - 32));
        }
      }),
      (Int64.prototype.shiftRight = function (a) {
        a &= 63;
        if (a == 0) return this;
        else {
          var b = this.high_;
          if (a < 32) {
            var c = this.low_;
            return Int64.fromBits((c >>> a) | (b << (32 - a)), b >> a);
          } else return Int64.fromBits(b >> (a - 32), b >= 0 ? 0 : -1);
        }
      }),
      (Int64.prototype.shiftRightUnsigned = function (a) {
        a &= 63;
        if (a == 0) return this;
        else {
          var b = this.high_;
          if (a < 32) {
            var c = this.low_;
            return Int64.fromBits((c >>> a) | (b << (32 - a)), b >>> a);
          } else if (a == 32) return Int64.fromBits(b, 0);
          else return Int64.fromBits(b >>> (a - 32), 0);
        }
      }),
      (e.exports = Int64);
  },
  null
); /*FB_PKG_DELIM*/
__d(
  "PolarisUserListUserLink.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisFastLink.react",
    "PolarisIGCoreVerifiedBadge",
    "PolarisLinkBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.isVerified,
        e = a.onClick;
      a = a.username;
      return a === void 0
        ? null
        : h.jsx(c("PolarisFastLink.react"), {
            href: d("PolarisLinkBuilder").buildUserLink(a),
            onClick: e,
            title: a,
            children: h.jsx(c("IGDSBox.react"), {
              direction: "row",
              children: h.jsx(c("IGDSText.react").BodyEmphasized, {
                zeroMargin: !0,
                children: h.jsxs(c("IGDSBox.react"), {
                  alignItems: "center",
                  direction: "row",
                  children: [
                    a,
                    b === !0 &&
                      h.jsx(c("IGDSBox.react"), {
                        marginStart: 2,
                        children: h.jsx(c("PolarisIGCoreVerifiedBadge"), {
                          size: "small",
                        }),
                      }),
                  ],
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
  "PolarisUserListItem.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSHeartFilledIcon",
    "IGDSListItem.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisFollowButtonContainer.react",
    "PolarisGenericStrings",
    "PolarisIGCoreConstants",
    "PolarisIGCoreIconButton",
    "PolarisReactRedux",
    "PolarisUserAvatar.react",
    "PolarisUserAvatarWithStories.react",
    "PolarisUserHoverCard.react",
    "PolarisUserLinkWithHoverCard.react",
    "PolarisUserListUserLink.react",
    "nullthrows",
    "polarisRelationshipSelectors",
    "polarisUserSelectors",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useState;
    function a(a) {
      var b = a.analyticsContext,
        e = a.avatarSize;
      e = e === void 0 ? "medium" : e;
      var f = a.avatarTriggerAnalyticsContext;
      f = f === void 0 ? null : f;
      var g = a.borderlessFollowButton,
        m = a.entryPoint,
        n = a.hasLiked;
      n = n === void 0 ? !1 : n;
      var o = a.hideFollowButton,
        p = a.hideName,
        q = a.hideStoryRings,
        r = a.hoverPositionType;
      r = r === void 0 ? null : r;
      var s = a.id,
        t = a.isVisible,
        u = a.onDismiss,
        v = a.onFollowClick,
        w = a.onScrollEnter,
        x = a.onUsernameClick,
        y = a.position,
        z = a.primaryActionButton,
        A = a.relationship,
        B = a.secondaryActionButton,
        C = a.subtitle,
        D = a.user,
        E = a.usernameTriggerAnalyticsContext;
      E = E === void 0 ? null : E;
      a = a.viewer;
      var F = c("usePrevious")(t),
        G = l(!0),
        H = G[0],
        I = G[1];
      G = j(
        function () {
          v &&
            A &&
            v({
              index: y,
              userId: s,
              followedByViewer: d(
                "polarisRelationshipSelectors"
              ).followedByViewer(A),
            });
        },
        [s, v, y, A]
      );
      var J = j(
          function () {
            w({ index: y, userId: s });
          },
          [s, w, y]
        ),
        K = j(
          function () {
            x({ index: y, userId: s });
          },
          [s, x, y]
        );
      k(
        function () {
          F !== !0 && t && J();
        },
        [J, t, F]
      );
      o = !o && (a == null ? void 0 : a.id) !== D.id;
      a = C != null ? C : p ? null : D.fullName;
      C = q
        ? i.jsxs(c("IGDSBox.react"), {
            children: [
              i.jsx(c("PolarisUserAvatar.react"), {
                profilePictureUrl: c("nullthrows")(D.profilePictureUrl),
                size: c("PolarisIGCoreConstants").AVATAR_SIZES[e],
                username: D.username,
              }),
              n &&
                i.jsx("div", {
                  className: "x1o583il x11f4b5y x10l6tqk",
                  children: i.jsx(c("IGDSHeartFilledIcon"), {
                    alt: h._("Liked"),
                    color: "ig-badge",
                    size: 12,
                  }),
                }),
            ],
          })
        : i.jsx(c("PolarisUserAvatarWithStories.react"), {
            profilePictureUrl: c("nullthrows")(D.profilePictureUrl),
            size: c("PolarisIGCoreConstants").AVATAR_SIZES[e],
            storyEntrypoint: m,
            username: D.username,
          });
      p = null;
      u != null &&
        (p = function () {
          I(!1), u(s);
        });
      e = i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("PolarisFollowButtonContainer.react"), {
            analyticsContext:
              (q = b) != null ? q : "UNKNOWN__POLARIS_USER_LIST_ITEM",
            borderless: g,
            isInline: g,
            onClick: G,
            userId: D.id,
            username: (n = D.username) != null ? n : "",
            useSmallText: g,
          }),
          p != null &&
            i.jsx(c("IGDSBox.react"), {
              marginStart: 3,
              right: !0,
              children: i.jsx(c("PolarisIGCoreIconButton"), {
                alt: d("PolarisGenericStrings").DISMISS_TEXT,
                icon: d("PolarisAssetManagerGlyphMapping").ICONS.GREY_CLOSE,
                noMinSize: !0,
                onClick: p,
              }),
            }),
        ],
      });
      m = z ? z(D.id) : o ? e : void 0;
      b = B == null ? void 0 : B(D.id, A);
      return (
        H &&
        i.jsx(c("IGDSListItem.react"), {
          addOnEnd: m != null ? i.jsx(i.Fragment, { children: m }) : void 0,
          addOnStart:
            r != null && f != null
              ? i.jsx(c("PolarisUserHoverCard.react"), {
                  display: "block",
                  positionType: r,
                  triggerAnalyticsContext: f,
                  userId: D.id,
                  children: C,
                })
              : C,
          context: D.suggestionDescription,
          subtitle: a,
          title: i.jsxs(c("IGDSBox.react"), {
            direction: "row",
            children: [
              r != null && E != null
                ? i.jsx(c("PolarisUserLinkWithHoverCard.react"), {
                    color: "ig-primary-text",
                    isVerified: D.isVerified,
                    onClick: K,
                    positionType: r,
                    triggerAnalyticsContext: E,
                    userId: D.id,
                    username:
                      (q = D == null ? void 0 : D.username) != null ? q : "",
                  })
                : i.jsx(c("PolarisUserListUserLink.react"), {
                    isVerified: D.isVerified === !0,
                    onClick: K,
                    username: (G = D.username) != null ? G : "",
                  }),
              b != null
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(c("IGDSBox.react"), {
                        display: "inlineBlock",
                        paddingX: 1,
                        children: "\xb7",
                      }),
                      b,
                    ],
                  })
                : null,
            ],
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      return {
        relationship: d("polarisRelationshipSelectors").getRelationship(
          a.relationships,
          b.id
        ),
        user: d("polarisUserSelectors").getUserById(a, b.id),
        viewer: d("polarisUserSelectors").getViewer(a),
      };
    }
    e = d("PolarisReactRedux").connect(b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "useSubscriptionValue",
  ["React"],
  function (a, b, c, d, e, f, g) {
    b = d("React");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = a.getCurrentValue,
        c = a.subscribe;
      a = j(function () {
        return b();
      });
      var d = a[0],
        e = a[1],
        f = h(
          function () {
            e(b);
          },
          [b]
        );
      a = j(function () {
        return b;
      });
      var g = a[0];
      a = a[1];
      g !== b &&
        (a(function () {
          return b;
        }),
        f());
      i(
        function () {
          var a = !1,
            b = function () {
              a || f();
            },
            d = c(b);
          f();
          return function () {
            (a = !0), d();
          };
        },
        [f, c]
      );
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useWindowSize",
  ["ExecutionEnvironment", "react", "throttle", "useSubscriptionValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function i() {
      return !c("ExecutionEnvironment").canUseDOM
        ? { innerHeight: 0, innerWidth: 0, outerHeight: 0, outerWidth: 0 }
        : {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
          };
    }
    function a(a) {
      a === void 0 && (a = 500);
      var b = h(
        function (b) {
          var d = c("throttle")(b, a);
          window.addEventListener("resize", d);
          return function () {
            window.removeEventListener("resize", d);
          };
        },
        [a]
      );
      return c("useSubscriptionValue")({ getCurrentValue: i, subscribe: b });
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSFace2PanoOutlineIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisEmojiVariationPicker.react",
  [
    "cx",
    "fbt",
    "PolarisEmojiConstants",
    "PolarisIGCoreAnchoredPopover",
    "PolarisIGCoreAnchoredPopoverContentContainer",
    "PolarisIGCoreButton",
    "Pressable.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState,
      l = i._("Open skin tone picker"),
      m = 55,
      n = 302;
    function a(a) {
      var b = a.defaultEmoji,
        e = a.selectEmoji;
      a = k(!1);
      var f = a[0],
        g = a[1],
        h = function (a) {
          e(a), g(!1);
        };
      a = d("PolarisEmojiConstants").SKIN_TONE_MODIFIERS.map(function (a) {
        return "" + b + a;
      });
      a = [b].concat(a);
      var i = function () {
        g(!0);
      };
      return j.jsx(
        "div",
        {
          children: j.jsx(c("PolarisIGCoreAnchoredPopover"), {
            content:
              f === !0 &&
              j.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
                boldBoxShadow: !0,
                height: m,
                isVisible: f,
                onClose: function () {
                  g(!1);
                },
                width: n,
                children: j.jsx("div", {
                  className: "_adko",
                  children: a.map(function (a) {
                    return j.jsx(
                      "div",
                      {
                        className: "_adkp",
                        children: j.jsx(c("PolarisIGCoreButton"), {
                          borderless: !0,
                          onClick: function () {
                            h(a);
                          },
                          children: j.jsx("div", {
                            className: "_adkq",
                            id: "polaris-emoji-variation-" + a,
                            children: a,
                          }),
                        }),
                      },
                      a
                    );
                  }),
                }),
              }),
            offsetRight: 0,
            offsetTop: 0,
            preferredPositionY: "top",
            children: j.jsx(c("Pressable.react"), {
              accessibilityLabel: l,
              accessibilityRole: "button",
              onPress: function (a) {
                i();
              },
              children: j.jsx("div", { className: "_adkq", children: b }),
            }),
          }),
        },
        b
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisEmojiTray.react",
  [
    "cx",
    "CometPressable.react",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisEmojiConstants",
    "PolarisEmojiVariationPicker.react",
    "PolarisReactRedux",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      a = a.headerText;
      return i.jsx(c("IGDSBox.react"), {
        marginBottom: 2,
        marginEnd: 2,
        marginStart: 2,
        marginTop: 4,
        position: "relative",
        width: "100%",
        children: i.jsx(c("IGDSText.react").BodyEmphasized, {
          color: "secondaryText",
          children: a,
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.emoji,
        e = a.onClick;
      return d("PolarisEmojiConstants").SkinToneBaseEmojis.includes(b)
        ? i.jsx(
            "div",
            {
              className: "_ajr2",
              children: i.jsx(c("PolarisEmojiVariationPicker.react"), {
                defaultEmoji: b,
                selectEmoji: function (a) {
                  e(a);
                },
              }),
            },
            b
          )
        : i.jsx(
            "div",
            {
              className: "_ajr2",
              children: i.jsx(c("CometPressable.react"), {
                onPress: function () {
                  return e(b);
                },
                overlayDisabled: !0,
                children: i.jsx("div", { className: "_adkq", children: b }),
              }),
            },
            b
          );
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.frequentlyUsedEmoji,
        e = a.onClick;
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("IGDSBox.react"), {
            margin: 2,
            position: "relative",
            width: "100%",
            children: i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: d("PolarisEmojiConstants").EMOJI_TRAY_FREQUENTLY_USED,
            }),
          }),
          b.map(function (a) {
            return i.jsx(k, { emoji: a, onClick: e }, a);
          }),
        ],
      });
    }
    function a(a) {
      var b = a.onClick;
      a = d("PolarisReactRedux").useSelector(function (a) {
        return a.direct.emojis.frequentlyUsed;
      });
      var e = a.size !== 0;
      return i.jsxs(c("IGDSBox.react"), {
        direction: "row",
        position: "relative",
        wrap: !0,
        children: [
          e && i.jsx(l, { frequentlyUsedEmoji: a, onClick: b }),
          i.jsx(c("IGDSBox.react"), {
            margin: 2,
            marginTop: e ? 4 : 2,
            position: "relative",
            width: "100%",
            children: i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: d("PolarisEmojiConstants").EMOJI_TRAY_MOST_POPULAR,
            }),
          }),
          d("PolarisEmojiConstants").mostPopularEmojis.map(function (a) {
            return i.jsx(k, { emoji: a, onClick: b }, a);
          }),
          Object.keys(d("PolarisEmojiConstants").Emojis).map(function (a) {
            var c = d("PolarisEmojiConstants").Emojis[a],
              e = c.emojis;
            c = c.label;
            return i.jsxs(
              i.Fragment,
              {
                children: [
                  i.jsx(j, { headerText: c }),
                  e.map(function (a) {
                    return i.jsx(k, { emoji: a, onClick: b }, a);
                  }),
                ],
              },
              a
            );
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisEmojiButton.react",
  [
    "IGDSBox.react",
    "IGDSFace2PanoOutlineIcon",
    "PolarisDirectStrings",
    "PolarisEmojiTray.react",
    "PolarisIGCoreAnchoredPopover",
    "PolarisIGCoreAnchoredPopoverContentContainer",
    "PolarisIGCoreSVGIconButton",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 309,
      j = 309,
      k = i + 16 + 8,
      l = j + 16,
      m = -14,
      n = -30,
      o = 13,
      p = -16;
    function q(a) {
      return (
        (a == null ? void 0 : a.target) instanceof HTMLElement &&
        a.target.id.includes("polaris-emoji-variation-")
      );
    }
    function r(a) {
      var b = a.handleEmojiClick,
        d = a.isVisible;
      a = a.onClose;
      return h.jsx(h.Fragment, {
        children: d
          ? h.jsx(c("PolarisIGCoreAnchoredPopoverContentContainer"), {
              height: l,
              isVisible: d,
              onClose: a,
              width: k,
              children: h.jsx(c("IGDSBox.react"), {
                height: j,
                margin: 2,
                position: "relative",
                width: i,
                children: h.jsx(c("PolarisEmojiTray.react"), { onClick: b }),
              }),
            })
          : null,
      });
    }
    function a(a) {
      var b = a.color;
      b = b === void 0 ? "ig-primary-text" : b;
      var e = a.isEmojiTrayOpen,
        f = a.onEmojiClick,
        g = a.padding,
        i = a.setEmojiTrayOpen;
      a = a.size;
      a = a === void 0 ? "medium" : a;
      var j = function () {
        i(!e);
      };
      return h.jsx(c("PolarisIGCoreAnchoredPopover"), {
        content: h.jsx(r, {
          handleEmojiClick: f,
          isVisible: e,
          onClose: function (a) {
            q(a) || i(!1);
          },
        }),
        offsetBottom: a === "small" ? p * -1 : n * -1,
        offsetRight: m,
        offsetTop: a === "small" ? p : n,
        preferredPositionY: "top",
        children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
          hover: h.jsx(c("IGDSFace2PanoOutlineIcon"), {
            alt: d("PolarisDirectStrings").EMOJI_BUTTON_ALT_TEXT,
            color: b === "ig-secondary-text" ? "ig-tertiary-text" : void 0,
            size: a === "small" ? o : void 0,
          }),
          onClick: j,
          padding: g === !0 ? 8 : 0,
          children: h.jsx(c("IGDSFace2PanoOutlineIcon"), {
            alt: d("PolarisDirectStrings").EMOJI_BUTTON_ALT_TEXT,
            color: b,
            size: a === "small" ? o : void 0,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "polarisFBConnectSelectors",
  ["PolarisFBConnectStatus"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a.fb.status !== d("PolarisFBConnectStatus").STATUS.ineligible;
    }
    function b(a) {
      return a.fb.status === d("PolarisFBConnectStatus").STATUS.connected;
    }
    function c(a) {
      return a.fb.igLinked === !0 || a.fb.igSSODisabled === !0;
    }
    g.isFBConnectEligible = a;
    g.isConnected = b;
    g.isIGLinked = c;
  },
  98
);
__d(
  "polarisSuggestedUserSelectors",
  [
    "nullthrows",
    "polarisFBConnectSelectors",
    "polarisUserSelectors",
    "reselect",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return !a.suggestedUsers.viewerHasFBConnect;
    }
    a = d("reselect").createSelector(
      a,
      d("polarisFBConnectSelectors").isFBConnectEligible,
      function (a, b) {
        return a ? !1 : b;
      }
    );
    var h = d("reselect").createSelector(
      function (a) {
        return a.suggestedUsers.ids;
      },
      function (a) {
        return a.suggestedUsers.dismissedAysfIds;
      },
      function (a, b) {
        return a.subtract(b).toArray();
      }
    );
    function b(a, b) {
      return !!a.suggestedUsers.profileChainingFailures.get(b);
    }
    function e(a, b) {
      return a.suggestedUsers.profileChainingSuggestions.get(b);
    }
    var i = d("reselect").createSelector(
        function (a) {
          return a.suggestedUsers.dismissedAysfIds;
        },
        function (a, b) {
          return c("nullthrows")(b.userIds).map(function (b) {
            return d("polarisUserSelectors").getUserById(a, b);
          });
        },
        function (a, b) {
          return b.filter(function (b) {
            return !a.has(b.id);
          });
        }
      ),
      j = d("reselect").createSelector(
        function (a) {
          return a.suggestedUsers.ids;
        },
        function (a) {
          return a.toArray();
        }
      );
    function f(a) {
      return (
        a.suggestedUsers.isLoadingSuggestions && a.suggestedUsers.ids.size === 0
      );
    }
    g.shouldDisplayFacebookConnect = a;
    g.getNonDismissedAysfIds = h;
    g.getProfileChainingFailure = b;
    g.getProfileChainingSuggestions = e;
    g.getFeedAysfUsers = i;
    g.getSuggestions = j;
    g.isInitialLoad = f;
  },
  98
);
__d(
  "PolarisUserList.react",
  [
    "IGDSBox.react",
    "IGDSListItemPlaceholder",
    "IGDSSpinner.react",
    "PolarisErrorBoundary.react",
    "PolarisIGVirtualList.react",
    "PolarisUserListItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = 10;
    var i = 65;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$1 = h.createRef()),
          (d.$2 = function (a) {
            var b = d.props.onFollowClick;
            b && b(a);
          }),
          (d.$3 = function (a) {
            var b = a.index;
            a = a.isVisible;
            var e = d.props,
              f = e.analyticsContext,
              g = e.avatarSize,
              i = e.avatarTriggerAnalyticsContext,
              j = e.borderlessFollowButton,
              k = e.entryPoint,
              l = e.hideName,
              m = e.hoverPositionType,
              n = e.isLoading,
              o = e.likers,
              p = e.primaryActionButton,
              q = e.secondaryActionButton,
              r = e.topComponent,
              s = e.userIds;
            e = e.usernameTriggerAnalyticsContext;
            return s.length === 0
              ? n
                ? h.jsx(c("IGDSListItemPlaceholder"), { size: g }, b)
                : null
              : h.jsxs(
                  c("PolarisErrorBoundary.react"),
                  {
                    children: [
                      b === 0 && r != null && r,
                      h.jsx(c("PolarisUserListItem.react"), {
                        analyticsContext: f,
                        avatarSize: g,
                        avatarTriggerAnalyticsContext: i,
                        borderlessFollowButton: j,
                        entryPoint: k,
                        hasLiked: o == null ? void 0 : o.has(s[b]),
                        hideFollowButton: d.props.hideFollowButton,
                        hideName: l,
                        hideStoryRings: d.props.hideStoryRings,
                        hoverPositionType: m || "absolute",
                        id: s[b],
                        isVisible: a,
                        onDismiss: d.props.onDismiss,
                        onFollowClick: d.$2,
                        onScrollEnter: d.$4,
                        onUsernameClick: d.$5,
                        position: b,
                        primaryActionButton: p,
                        secondaryActionButton: q,
                        usernameTriggerAnalyticsContext: e,
                      }),
                    ],
                  },
                  s[b]
                );
          }),
          (d.$4 = function (a) {
            var b = d.props.onScrollChange;
            b && b(a);
          }),
          (d.$5 = function (a) {
            var b = d.props.onUsernameClick;
            b && b(a);
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.componentDidUpdate = function (a) {
        this.$1.current != null &&
          this.props.userIds.length === this.props.initialRenderCount &&
          a.userIds.length === 0 &&
          this.$1.current.forceUpdate();
      };
      d.render = function () {
        var a = this.props,
          b = a.containerSize,
          d = a["data-testid"];
        d = a.initialRenderCount;
        var e = a.isLoading,
          f = a.onScroll;
        a = a.userIds;
        return h.jsxs(h.Fragment, {
          children: [
            h.jsx(c("PolarisIGVirtualList.react"), {
              containerSize: b,
              "data-testid": void 0,
              estimatedItemSize: i,
              initialRenderCount: d,
              itemCount: a.length || d,
              onScroll: f,
              pageletName: "user_list",
              ref: this.$1,
              renderer: this.$3,
              style: e && a.length === 0 ? { overflowY: "hidden" } : {},
            }),
            a.length > 0 &&
              e &&
              h.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                marginTop: 4,
                children: h.jsx(c("IGDSSpinner.react"), { size: "medium" }),
              }),
          ],
        });
      };
      return b;
    })(h.PureComponent);
    b.defaultProps = {
      avatarTriggerAnalyticsContext: null,
      borderlessFollowButton: !1,
      containerSize: "auto",
      entryPoint: "unknown",
      hideFollowButton: !1,
      hideName: !1,
      hideStoryRings: !1,
      hoverPositionType: null,
      initialRenderCount: a,
      isLoading: !1,
      usernameTriggerAnalyticsContext: null,
    };
    g["default"] = b;
  },
  98
);
__d(
  "PolarisSuspenseWithErrorBoundary.react",
  [
    "CometPlaceholder.react",
    "PolarisErrorBoundary.react",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.errorRenderer;
      a = a.loadingRenderer;
      a = (a = a) != null ? a : h.jsx("div", {});
      return h.jsx(c("PolarisErrorBoundary.react"), {
        errorRenderer: (d = d) != null ? d : c("emptyFunction").thatReturnsNull,
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: a,
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisSeeAllLink.react",
  ["cx", "fbt", "IGDSText.react", "PolarisFastLink.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      return j.jsx(c("PolarisFastLink.react"), {
        className: "_ac5x",
        href: a.href,
        onClick: a.onClick,
        params: a.params,
        children: j.jsx(c("IGDSText.react").BodyEmphasized, {
          color: "primaryButton",
          zeroMargin: !0,
          children: i._("See all"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCollapsibleItem.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l = 300,
      m = "ease";
    function a(a) {
      var b = a.animationDuration;
      b = b === void 0 ? l : b;
      var c = a.animationTiming;
      c = c === void 0 ? m : c;
      var d = a.children,
        e = a.className,
        f = a.initialStyle,
        g = a.onCollapse,
        n = g === void 0 ? function () {} : g;
      g = a.opacity;
      var o = g === void 0 ? 0 : g;
      g = a.width;
      a = k(
        babelHelpers["extends"]({}, f, {
          opacity: 1,
          overflow: "hidden",
          transition: "opacity " + b + "ms " + c + ", width " + b + "ms " + c,
          width: g,
        })
      );
      f = a[0];
      var p = a[1];
      i(
        function () {
          p(function (a) {
            return babelHelpers["extends"]({}, a, { opacity: o, width: 0 });
          });
        },
        [p, o]
      );
      var q = j(null);
      i(
        function () {
          var a = q.current;
          if (a == null) return function () {};
          a.addEventListener("transitionend", n, { once: !0 });
          return function () {
            a.removeEventListener("transitionend", n);
          };
        },
        [n]
      );
      return h.jsx("div", {
        "aria-hidden": "true",
        className: e,
        ref: q,
        style: f,
        children: d,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ANIMATION_DURATION = l;
    g.ANIMATION_TIMING = m;
    g.CollapsibleItem = a;
  },
  98
);
__d(
  "PolarisVirtualHSnapScrollCollapsibleList.react",
  [
    "PolarisCollapsibleItem.react",
    "PolarisHSnapScroll.react",
    "PolarisHSnapScrollHooks",
    "PolarisRefUtils",
    "PolarisVirtualHSnapScrollComponents.react",
    "PolarisVirtualHSnapScrollHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useRef,
      j = b.useState;
    function k(a, b) {
      return "transform " + a + "ms " + b;
    }
    function a(a) {
      var b = a.children,
        e = a.collapseAnimationDuration,
        f =
          e === void 0
            ? d("PolarisCollapsibleItem.react").ANIMATION_DURATION
            : e;
      e = a.collapseAnimationTiming;
      var g =
        e === void 0 ? d("PolarisCollapsibleItem.react").ANIMATION_TIMING : e;
      e = a.disabled;
      var l = a.gutterWidth;
      l = l === void 0 ? 0 : l;
      var m = a.itemWidth,
        n = a.onVisibilityChange,
        o = a.overscan;
      o = o === void 0 ? 5 : o;
      var p = a.scrollRef;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "collapseAnimationDuration",
        "collapseAnimationTiming",
        "disabled",
        "gutterWidth",
        "itemWidth",
        "onVisibilityChange",
        "overscan",
        "scrollRef",
      ]);
      var q = b.length,
        r = i(null),
        s = d("PolarisHSnapScrollHooks").useHSnapScrollFocusCallback(r);
      n = d("PolarisVirtualHSnapScrollHooks").useVirtualHSnapScroll({
        gutterWidth: l,
        itemCount: q,
        itemWidth: m,
        onVisibilityChange: n,
        overscan: o,
      });
      o = n.gutter;
      var t = n.handleVisibilityChange,
        u = n.items;
      n = u.reduce(function (a, c) {
        var e = c.index;
        c = c.x;
        var i = b[e];
        i != null &&
          a.push(
            h.jsx(
              d("PolarisVirtualHSnapScrollComponents.react")
                .VirtualHSnapScrollListItem,
              {
                listItemStyle: { transition: k(f, g) },
                onFocus: function () {
                  return s(e);
                },
                x: c,
                children: i,
              },
              i.key
            )
          );
        return a;
      }, []);
      p = d("PolarisRefUtils").createRefHandler(p, r);
      var v = i(b);
      r = i(b);
      v.current = b;
      var w = i(new Map()),
        x = j({ count: 0 }),
        y = x[0],
        z = x[1];
      if (r.current !== v.current && u.length > 0) {
        x = u[0].index;
        var A = u[u.length - 1].index;
        r.current.slice(x, A).forEach(function (a, b) {
          var c = a.key;
          if (
            !w.current.has(c) &&
            v.current.find(function (a) {
              return a.key === c;
            }) == null
          ) {
            b = h.jsx(
              d("PolarisCollapsibleItem.react").CollapsibleItem,
              {
                animationDuration: f,
                animationTiming: g,
                initialStyle: {
                  position: "absolute",
                  transform: "translateX(" + u[b].x + "px)",
                },
                onCollapse: function () {
                  w.current["delete"](c), z({ count: w.current.size });
                },
                width: m,
                children: a,
              },
              c
            );
            w.current.set(c, b);
          }
        });
        w.current.size !== y.count && z({ count: w.current.size });
        r.current = v.current;
      }
      x = { transition: k(f, g) };
      return h.jsx(
        c("PolarisHSnapScroll.react"),
        babelHelpers["extends"]({}, a, {
          disabled: w.current.size > 0 || e === !0,
          gutterWidth: l,
          itemCount: q + w.current.size,
          itemWidth: m,
          onVisibilityChange: t,
          ref: p,
          children: h.jsxs(
            d("PolarisVirtualHSnapScrollComponents.react")
              .VirtualHSnapScrollList,
            {
              children: [
                o &&
                  h.jsx(
                    d("PolarisVirtualHSnapScrollComponents.react")
                      .VirtualHSnapScrollGutter,
                    babelHelpers["extends"]({ gutterStyle: x }, o)
                  ),
                Array.from(w.current.values()),
                n,
              ],
            }
          ),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/KRXTwBoPvVj/
 */
__d(
  "stackblur-1.0.0",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = { exports: b };
    function h() {
      var a = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        b = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function c(c, e, f, g) {
        if (isNaN(g) || g < 1) return;
        g |= 0;
        var h,
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
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D = g + g + 1,
          E = e - 1,
          F = f - 1,
          G = g + 1,
          H = (G * (G + 1)) / 2,
          I = new d(),
          J = I;
        for (j = 1; j < D; j++) {
          J = J.next = new d();
          if (j == G) var K = J;
        }
        J.next = I;
        var L, M;
        l = D = 0;
        var N = a[g],
          O = b[g];
        for (i = 0; i < f; i++) {
          u = v = w = x = m = n = o = p = 0;
          q = G * (y = c[D]);
          r = G * (z = c[D + 1]);
          s = G * (A = c[D + 2]);
          t = G * (B = c[D + 3]);
          m += H * y;
          n += H * z;
          o += H * A;
          p += H * B;
          J = I;
          for (j = 0; j < G; j++)
            (J.r = y), (J.g = z), (J.b = A), (J.a = B), (J = J.next);
          for (j = 1; j < G; j++)
            (k = D + ((E < j ? E : j) << 2)),
              (m += (J.r = y = c[k]) * (C = G - j)),
              (n += (J.g = z = c[k + 1]) * C),
              (o += (J.b = A = c[k + 2]) * C),
              (p += (J.a = B = c[k + 3]) * C),
              (u += y),
              (v += z),
              (w += A),
              (x += B),
              (J = J.next);
          L = I;
          M = K;
          for (h = 0; h < e; h++)
            (c[D + 3] = B = (p * N) >> O),
              B != 0
                ? ((B = 255 / B),
                  (c[D] = ((m * N) >> O) * B),
                  (c[D + 1] = ((n * N) >> O) * B),
                  (c[D + 2] = ((o * N) >> O) * B))
                : (c[D] = c[D + 1] = c[D + 2] = 0),
              (m -= q),
              (n -= r),
              (o -= s),
              (p -= t),
              (q -= L.r),
              (r -= L.g),
              (s -= L.b),
              (t -= L.a),
              (k = (l + ((k = h + g + 1) < E ? k : E)) << 2),
              (u += L.r = c[k]),
              (v += L.g = c[k + 1]),
              (w += L.b = c[k + 2]),
              (x += L.a = c[k + 3]),
              (m += u),
              (n += v),
              (o += w),
              (p += x),
              (L = L.next),
              (q += y = M.r),
              (r += z = M.g),
              (s += A = M.b),
              (t += B = M.a),
              (u -= y),
              (v -= z),
              (w -= A),
              (x -= B),
              (M = M.next),
              (D += 4);
          l += e;
        }
        for (h = 0; h < e; h++) {
          v = w = x = u = n = o = p = m = 0;
          D = h << 2;
          q = G * (y = c[D]);
          r = G * (z = c[D + 1]);
          s = G * (A = c[D + 2]);
          t = G * (B = c[D + 3]);
          m += H * y;
          n += H * z;
          o += H * A;
          p += H * B;
          J = I;
          for (j = 0; j < G; j++)
            (J.r = y), (J.g = z), (J.b = A), (J.a = B), (J = J.next);
          E = e;
          for (j = 1; j <= g; j++)
            (D = (E + h) << 2),
              (m += (J.r = y = c[D]) * (C = G - j)),
              (n += (J.g = z = c[D + 1]) * C),
              (o += (J.b = A = c[D + 2]) * C),
              (p += (J.a = B = c[D + 3]) * C),
              (u += y),
              (v += z),
              (w += A),
              (x += B),
              (J = J.next),
              j < F && (E += e);
          D = h;
          L = I;
          M = K;
          for (i = 0; i < f; i++)
            (k = D << 2),
              (c[k + 3] = B = (p * N) >> O),
              B > 0
                ? ((B = 255 / B),
                  (c[k] = ((m * N) >> O) * B),
                  (c[k + 1] = ((n * N) >> O) * B),
                  (c[k + 2] = ((o * N) >> O) * B))
                : (c[k] = c[k + 1] = c[k + 2] = 0),
              (m -= q),
              (n -= r),
              (o -= s),
              (p -= t),
              (q -= L.r),
              (r -= L.g),
              (s -= L.b),
              (t -= L.a),
              (k = (h + ((k = i + G) < F ? k : F) * e) << 2),
              (m += u += L.r = c[k]),
              (n += v += L.g = c[k + 1]),
              (o += w += L.b = c[k + 2]),
              (p += x += L.a = c[k + 3]),
              (L = L.next),
              (q += y = M.r),
              (r += z = M.g),
              (s += A = M.b),
              (t += B = M.a),
              (u -= y),
              (v -= z),
              (w -= A),
              (x -= B),
              (M = M.next),
              (D += e);
        }
      }
      function d() {
        (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      }
      g.exports = c;
    }
    var i = !1;
    function j() {
      i || ((i = !0), h());
      return g.exports;
    }
    function a(a) {
      switch (a) {
        case void 0:
          return j();
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "stackblur",
  ["stackblur-1.0.0"],
  function (a, b, c, d, e, f) {
    e.exports = b("stackblur-1.0.0")();
  },
  null
); /*FB_PKG_DELIM*/
__d(
  "IGDSCircleAddPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "usePolarisCreationSessionMediaSelect",
  ["PolarisCreationActionCreationSelectImage", "PolarisReactRedux", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a() {
      var a = d("PolarisReactRedux").useDispatch();
      return h(
        function (b) {
          b.length &&
            a(
              d("PolarisCreationActionCreationSelectImage").creationSelectImage(
                b[0]
              )
            );
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisHandleStartCreationSession",
  [
    "PolarisCreationActionStartCreationSession",
    "PolarisCreationMode",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    function a(a) {
      var b = d("PolarisReactRedux").useDispatch(),
        e = h(!1),
        f = function (a, c) {
          c === void 0 && (c = d("PolarisCreationMode").CreationMode.POST),
            b(d("PolarisNavigationActions").trackEntrypoint()),
            b(
              d(
                "PolarisCreationActionStartCreationSession"
              ).startCreationSession(a, c)
            );
        };
      return function (b, g) {
        g === void 0 && (g = d("PolarisCreationMode").CreationMode.POST);
        if (e.current === !0) return;
        e.current = !0;
        c("nullthrows")(a.current).selectFile();
        f(b, g);
        e.current = !1;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CreationSessionStarter",
  [
    "PolarisImageFileForm.react",
    "react",
    "usePolarisCreationSessionMediaSelect",
    "usePolarisHandleStartCreationSession",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef;
    function a(a) {
      a = a.children;
      var b = i(null),
        e = c("usePolarisCreationSessionMediaSelect")(),
        f = c("usePolarisHandleStartCreationSession")(b);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            children: h.jsx(
              d("PolarisImageFileForm.react").ImageFileForm,
              { acceptMimeTypes: ["image/jpeg"], onFileChange: e, ref: b },
              "creation-starter-upload"
            ),
          }),
          a(f),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "polarisWithCreationStarter",
  ["CreationSessionStarter", "polarisGetDisplayName", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 0;
    function a(a) {
      var b = "component-with-creation-starter-" + i++;
      function d(d) {
        return h.jsx(c("CreationSessionStarter"), {
          children: function (c) {
            return h.createElement(
              a,
              babelHelpers["extends"]({}, d, { key: b, onStartCreation: c })
            );
          },
        });
      }
      d.displayName = d.name + " [from " + f.id + "]";
      d.displayName =
        "withCreationStarter(" + c("polarisGetDisplayName")(a) + ")";
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisQPDeepLinkRoutes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      changeEmail: "#change-email",
      changePhone: "#change-phone",
      confirmEmail: "#confirm-email",
      confirmPhone: "#confirm-phone",
      importContacts: "#import-contacts",
      openGDPRDialog: "#consent",
      openGDPRFullscreen: "#open-GDPR-fullscreen",
      openGDPRMegaphone: "#open-gdpr",
      sharePhoto: "#share-photo",
      survey: "#survey",
    };
    f["default"] = a;
  },
  66
);
__d(
  "PolarisIGCorePill",
  ["cx", "IGDSBox.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.animated;
      b = b === void 0 ? !0 : b;
      var d = a.children,
        e = a.color;
      e = e === void 0 ? "ig-secondary-button" : e;
      var f = a.dangerouslySetClassName,
        g = a.disabled;
      g = g === void 0 ? !1 : g;
      var h = a.marginTop;
      h = h === void 0 ? 4 : h;
      var j = a.onClick;
      a = a.zPosition;
      a = a === void 0 ? "top" : a;
      f = f != null ? f.__className : null;
      return i.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        justifyContent: "center",
        marginTop: h,
        position: "absolute",
        width: "100vw",
        children: i.jsx("button", {
          className: c("joinClasses")(
            "_a9-r" +
              (e === "ig-primary-button" ? " _a9-s" : "") +
              (b ? " _a9-t" : "") +
              (a === "normal" ? " _a9-u" : ""),
            f
          ),
          disabled: g,
          onClick: j,
          children: i.jsx(c("IGDSBox.react"), {
            padding: 2,
            position: "relative",
            children: d,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisInstagramMediaMetricsFalcoEvent",
  ["cr:2074"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:2074");
  },
  98
);
__d(
  "PolarisInstagramMediaMetricsFalcoEvent_DEPRECATED",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "instagram_media_metrics",
          a(),
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
  "InstagramMediaMetricsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("2312");
    b = d("FalcoLoggerInternal").create("instagram_media_metrics", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "PolarisClickEventLoggerProvider.react",
  [
    "InstagramMediaMetricsFalcoEvent",
    "PolarisClickEventLoggerContext.react",
    "PolarisFalcoLoggingMode",
    "PolarisInstagramMediaMetricsFalcoEvent",
    "PolarisUA",
    "qex",
    "react",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function j(a, b, e, f, g) {
      var h = {
        event_trace_id: (f = f) != null ? f : c("uuid")(),
        dest_uri: a,
        tracking: e,
        tracking_nodes: b,
        gesture_type: g,
      };
      f = c("PolarisFalcoLoggingMode").DISTILLERY;
      if (!d("PolarisUA").isWindowsPWA()) {
        f =
          (a = c("qex")._("236")) != null
            ? a
            : c("PolarisFalcoLoggingMode").DISTILLERY;
      }
      f === c("PolarisFalcoLoggingMode").IMMEDIATELY
        ? c("InstagramMediaMetricsFalcoEvent").logImmediately(function () {
            return h;
          })
        : f === c("PolarisFalcoLoggingMode").NORMAL
        ? c("InstagramMediaMetricsFalcoEvent").log(function () {
            return h;
          })
        : f === c("PolarisFalcoLoggingMode").CRITICAL
        ? c("InstagramMediaMetricsFalcoEvent").logCritical(function () {
            return h;
          })
        : c("PolarisInstagramMediaMetricsFalcoEvent").log(function () {
            return h;
          });
    }
    function a(a) {
      a = a.children;
      var b = i(function (a, b, c, d, e) {
        j(a, b, c, d, e);
      }, []);
      return h.jsx(c("PolarisClickEventLoggerContext.react").Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisTrackingDataURLParams",
  [
    "PolarisTrackingCodeContext",
    "PolarisTrackingConstants",
    "PolarisTrackingNodesContext",
    "encodeTrackingNode",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a,
        b = h(c("PolarisTrackingCodeContext")),
        e = h(c("PolarisTrackingNodesContext"));
      if (b.length === 0 || e.length === 0) return {};
      e = e
        .map(function (a) {
          return c("encodeTrackingNode")(a.type);
        })
        .join("");
      b = b.map(function (a) {
        return (a = a == null ? void 0 : a.trackingToken) != null ? a : "";
      });
      return (
        (a = {}),
        (a[d("PolarisTrackingConstants").TRACKING_CODE_PARAM] = b),
        (a[d("PolarisTrackingConstants").TRACKING_NODE_PARAM] = e),
        a
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisOffsiteTrackingDataURLParams",
  ["isPolarisAdLink", "usePolarisTrackingDataURLParams"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("usePolarisTrackingDataURLParams")();
      return a == null || !c("isPolarisAdLink")(a) ? {} : b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "DebugOwl",
  ["cr:1801726"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function () {
      return void 0;
    };
    c =
      (a = b("cr:1801726")) != null
        ? a
        : {
            burrow: h,
            flap: h,
            fly: h,
            hoot: h,
            listen: function () {
              return h;
            },
            nest: h,
            peck: h,
            perch: h,
            swoop: h,
          };
    d = c;
    g["default"] = d;
  },
  98
);
__d(
  "cometGHLContentDisplayCheck",
  ["cr:1824699"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !0,
      i = !1;
    function a(a) {
      var c = document.body;
      c = c == null || !c.contains(a);
      b("cr:1824699") && b("cr:1824699").flap(a, { notMounted: c });
      if (c) return h;
      c = a.offsetHeight === 0;
      b("cr:1824699") && b("cr:1824699").flap(a, { zeroHeight: c });
      if (c) return i;
      c = Array.from(a.getElementsByTagName("img"));
      var d = c.length === 0;
      b("cr:1824699") && b("cr:1824699").flap(a, { noImages: d });
      if (c.length === 0) return h;
      d = c.find(j) != null;
      b("cr:1824699") && b("cr:1824699").flap(a, { hasImageWithSize: d });
      if (d) return h;
      c = Array.from(a.getElementsByTagName("svg"));
      if (c.find(k) != null) return h;
      d = Array.from(a.getElementsByTagName("i"));
      if (d.find(k) != null) return h;
      b("cr:1824699") && b("cr:1824699").flap(a, { noSuccessfulChecks: !0 });
      return i;
    }
    var j = function (a) {
        return a.offsetHeight + a.offsetWidth > 0;
      },
      k = function (a) {
        a = a.getBoundingClientRect();
        return a.height * a.width > 0;
      };
    g["default"] = a;
  },
  98
);
__d(
  "InstagramAdImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1282");
    b = d("FalcoLoggerInternal").create("instagram_ad_impression", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "InstagramAdSubImpressionFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1283");
    b = d("FalcoLoggerInternal").create("instagram_ad_sub_impression", a);
    e = b;
    g["default"] = e;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisPostCommentInputDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")("PolarisPostCommentInput.react").__setRef(
        "PolarisPostCommentInputDeferred.react"
      )
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisPostModalEntrypointLazy.react",
  [
    "CometPlaceholder.react",
    "IGRouter",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = c("lazyLoadComponent")(
      c("JSResourceForInteraction")(
        "PolarisPostFastAboutThisAccountModal.react"
      ).__setRef("PolarisPostModalEntrypointLazy.react")
    );
    e = c("lazyLoadComponent")(
      c("JSResourceForInteraction")(
        "PolarisPostFastAdRemovalErrorModal.react"
      ).__setRef("PolarisPostModalEntrypointLazy.react")
    );
    var i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastAdRemovedModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastCopyModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      k = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastDeleteModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastDirectShareSheet.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      m = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastDirectSecureShareSheet.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      n = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastEditModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      o = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastEmbedModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      p = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFavoritesModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      q = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastHideAdModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      r = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastLoadingModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      s = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastOptionsModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      t = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastOptionsModal.next"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      u = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastReportModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      v = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastReportAdModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      w = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastShareSheet.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      x = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastTaggedModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      y = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastTagOptionsModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      z = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastUnfollowModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      A = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastViewAccountModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      B = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastAdDebugToolModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      C = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "PolarisPostFastWAISTModal.react"
        ).__setRef("PolarisPostModalEntrypointLazy.react")
      ),
      D = new Map([
        ["aboutThisAccount", b],
        ["copy", j],
        ["delete", k],
        ["directShare", l],
        ["directSecureShare", m],
        ["edit", n],
        ["embed", o],
        ["favorites", p],
        ["hideAd", q],
        ["loading", r],
        ["options", s],
        ["optionsV2", t],
        ["removeAd", i],
        ["removeAdError", e],
        ["report", u],
        ["reportAd", v],
        ["share", w],
        ["tagged", x],
        ["tagOptions", y],
        ["unfollow", z],
        ["viewAccount", A],
        ["viewAdDebugTool", B],
        ["whyAmISeeingThisAd", C],
      ]);
    function a(a) {
      var b = a.location,
        d = a.onClose,
        e = a.openModal;
      a = a.post;
      e = c("nullthrows")(D.get(e));
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(e, { location: b, onClose: d, post: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = d("IGRouter").withIGRouter(a);
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisFeedDimensionHelpers",
  ["IGDSThemeConstantsHelpers", "PolarisClipsTabHelpers", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("IGDSThemeConstantsHelpers").getNumericValue(
        "nav-narrow-screen-min"
      ),
      i = d("IGDSThemeConstantsHelpers").getNumericValue(
        "revamp-nav-bottom-toolbar-height"
      ),
      j = d("IGDSThemeConstantsHelpers").getNumericValue(
        "revamp-feed-card-max-height"
      ),
      k = d("IGDSThemeConstantsHelpers").getNumericValue(
        "revamp-feed-card-min-height"
      ),
      l = d("IGDSThemeConstantsHelpers").getNumericValue(
        "revamp-feed-vertical-padding"
      );
    function a(a) {
      a === void 0 && (a = 9 / 16);
      var b = c("qex")._("796") !== !0;
      if (b) {
        b = window.innerHeight;
        var e = window.innerWidth;
        e < h && (b -= i);
        e = Math.min(j, b - l * 2);
      } else e = d("PolarisClipsTabHelpers").getReelMediaContainerHeight();
      return Math.max(k, e) * a;
    }
    g.calculateMediaWidthBasedOnReelHeight = a;
  },
  98
);
__d(
  "usePolarisGetFeedMediaWidthBasedOnReelHeight",
  [
    "IGDSThemeConstantsHelpers",
    "PolarisFeedDimensionHelpers",
    "PolarisFeedPageConstants",
    "PolarisPanavisionQEHelpers",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useState,
      k = d("IGDSThemeConstantsHelpers").getNumericValue(
        "revamp-feed-card-media-min-width"
      );
    function a() {
      var a = j(0),
        b = a[0],
        c = a[1];
      a = j(window.innerWidth);
      var e = a[0],
        f = a[1],
        g = h(function () {
          var a = d(
            "PolarisFeedDimensionHelpers"
          ).calculateMediaWidthBasedOnReelHeight();
          c(a != null && a > 0 ? Math.max(a, k) : void 0);
          f(window.innerWidth);
        }, []);
      i(
        function () {
          g();
          window.addEventListener("resize", g);
          return function () {
            window.removeEventListener("resize", g);
          };
        },
        [g]
      );
      return {
        mediaWidth: d("PolarisPanavisionQEHelpers").hasNewFeedStyles()
          ? b
          : Math.min(d("PolarisFeedPageConstants").FAMILIAR_FEED_WIDTH, e),
      };
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisInstagramMobileLogoTitle.react",
  [
    "fbt",
    "PolarisFastLink.react",
    "PolarisIGCoreInstagramWordmarkIcon",
    "react",
    "usePolarisIsOnFeedPage",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j() {
      return i.jsx(c("PolarisIGCoreInstagramWordmarkIcon"), {
        alt: h._("Instagram"),
        color: "ig-primary-text",
        size: 103,
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      a = a.isLink;
      var b = c("usePolarisIsOnFeedPage")(),
        d = function (a) {
          window.scrollTo(0, 0), a.preventDefault();
        };
      return a === !0
        ? i.jsx("div", {
            className:
              "x1qjc9v5 x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x78zum5 xdt5ytf x2lah0s xk390pu x1k70j0n x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf",
            children: i.jsx(c("PolarisFastLink.react"), {
              href: "/",
              onClick: b ? d : void 0,
              children: i.jsx(j, {}),
            }),
          })
        : i.jsx("div", {
            className:
              "x1qjc9v5 x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x78zum5 xdt5ytf x2lah0s xk390pu xr9ek0c x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf",
            children: i.jsx(j, {}),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IgWebLoggingStatefulEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4350");
    b = d("FalcoLoggerInternal").create("ig_web_logging_stateful_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "IgWebLoggingStatelessCriticalEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4338");
    b = d("FalcoLoggerInternal").create(
      "ig_web_logging_stateless_critical_event",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "IgWebLoggingStatelessEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4351");
    b = d("FalcoLoggerInternal").create("ig_web_logging_stateless_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "IgWebLoggingStatelessImmediatelyEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4552");
    b = d("FalcoLoggerInternal").create(
      "ig_web_logging_stateless_immediately_event",
      a
    );
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "PolarisIgWebLoggingDistilleryEventFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { pigeon: !1, falco: !0 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_web_logging_distillery_event",
          a(),
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
  "PolarisFalcoBladeRunnerExperiment",
  [
    "IgWebLoggingStatefulEventFalcoEvent",
    "IgWebLoggingStatelessCriticalEventFalcoEvent",
    "IgWebLoggingStatelessEventFalcoEvent",
    "IgWebLoggingStatelessImmediatelyEventFalcoEvent",
    "PolarisIgWebLoggingDistilleryEventFalcoEvent",
    "gkx",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      if (c("gkx")("4033")) {
        var a = { event_id: c("uuid")(), is_ad: !1, from_distillery: !1 },
          b = babelHelpers["extends"]({}, a, { from_distillery: !0 });
        c("IgWebLoggingStatefulEventFalcoEvent").log(function () {
          return a;
        });
        c("IgWebLoggingStatelessEventFalcoEvent").log(function () {
          return a;
        });
        c("IgWebLoggingStatelessImmediatelyEventFalcoEvent").logImmediately(
          function () {
            return a;
          }
        );
        c("IgWebLoggingStatelessCriticalEventFalcoEvent").logCritical(
          function () {
            return a;
          }
        );
        c("PolarisIgWebLoggingDistilleryEventFalcoEvent").log(function () {
          return b;
        });
      }
    }
    g.logTestFalco = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "useVideoPlayerControllerSubscription",
  ["VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useLayoutEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = d("VideoPlayerHooks").useController(),
        c = k(function () {
          return a(b, null);
        }),
        e = c[0],
        f = c[1],
        g = j(a);
      i(
        function () {
          g.current = a;
        },
        [a]
      );
      h(
        function () {
          f(function (a) {
            return g.current(b, a);
          });
          var a = b.subscribe(function () {
            f(function (a) {
              return g.current(b, a);
            });
          });
          return function () {
            a.remove();
          };
        },
        [b]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBoolean",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a = i(a);
      var b = a[0],
        c = a[1];
      return {
        value: b,
        set: c,
        toggle: h(function () {
          return c(function (a) {
            return !a;
          });
        }, []),
        setTrue: h(function () {
          return c(!0);
        }, []),
        setFalse: h(function () {
          return c(!1);
        }, []),
      };
    }
    g["default"] = a;
  },
  98
);
