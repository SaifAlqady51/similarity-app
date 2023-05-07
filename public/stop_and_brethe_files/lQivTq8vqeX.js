/*FB_PKG_DELIM*/

__d(
  "PolarisDataControlsSupportLogger",
  ["PolarisLogger", "PolarisPigeonLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "data_control",
      i = "instagram_privacy_and_security_help_entry";
    function a() {
      d("PolarisLogger").logPigeonEvent(
        d("PolarisPigeonLogger").createEvent(i, { containermodule: h })
      );
    }
    g.logDataControlsEvent = a;
  },
  98
);
__d(
  "PolarisDataControlsSupportPage.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisDataControlsSupportLogger",
    "PolarisFastLink.react",
    "PolarisPageMetadata.react",
    "PolarisPrivacyAndSecurityStrings.react",
    "PolarisSettingsShell.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = "privacyAndSecurityPage";
    function k(a) {
      var b = a.linkText;
      a = a.url;
      return i.jsx(c("PolarisFastLink.react"), {
        className: "_adwz",
        href: a,
        target: "_blank",
        children: b,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.headerText;
      a = a.links;
      return i.jsxs("section", {
        className: "_adw-",
        children: [
          i.jsx("h1", { className: "_adw_", children: b }),
          i.jsx(c("IGDSBox.react"), {
            position: "relative",
            children: a.map(function (a, b) {
              return i.jsx(k, { linkText: a.linkText, url: a.url }, b);
            }),
          }),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    var m = [
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_AGE_REQUIREMENTS_LINK_TEXT,
          url: "https://help.instagram.com/517920941588885?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_ACCOUNT_PRIVACY_LINK_TEXT,
          url: "https://help.instagram.com/116024195217477?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_LOCATION_SHARING_LINK_TEXT,
          url: "https://help.instagram.com/488619974671134?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_TWO_FACTOR_AUTH_LINK_TEXT,
          url: "https://help.instagram.com/566810106808145?ref=igapp",
        },
      ],
      n = [
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_BLOCKING_ACCOUNTS_LINK_TEXT,
          url: "https://help.instagram.com/426700567389543?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_REMOVING_FOLLOWERS_LINK_TEXT,
          url: "https://help.instagram.com/413012278753813?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_MANAGING_PHOTOS_LINK_TEXT,
          url: "https://help.instagram.com/496738090375985?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_FILTERING_COMMENTS_LINK_TEXT,
          url: "https://help.instagram.com/700284123459336?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_TURNING_COMMENTS_OFF_LINK_TEXT,
          url: "https://help.instagram.com/1766818986917552?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_DELETING_COMMENTS_LINK_TEXT,
          url: "https://help.instagram.com/289098941190483?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_CHOOSING_STORY_VIEWERS_LINK_TEXT,
          url: "https://help.instagram.com/1177797265575168?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_CHOOSING_STORY_REPLY_LINK_TEXT,
          url: "https://help.instagram.com/1133988223332503?ref=igapp",
        },
      ],
      o = [
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_REPORTING_COMMENTS_LINK_TEXT,
          url: "https://help.instagram.com/198034803689028?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_REPORTING_ACCOUNTS_OR_POSTS_LINK_TEXT,
          url: "https://help.instagram.com/192435014247952?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_REPORTING_INTIMATE_IMAGES_LINK_TEXT,
          url: "https://help.instagram.com/1769410010008691?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_REMOVING_CONTENT_LINK_TEXT,
          url: "https://help.instagram.com/1105548539497125?ref=igapp",
        },
        {
          linkText: d("PolarisPrivacyAndSecurityStrings.react")
            .DATA_CONTROLS_SUPPORT_SENSITIVE_CONTENT_SCREENS_LINK_TEXT,
          url: "https://help.instagram.com/188848648282410?ref=igapp",
        },
      ];
    function a() {
      return i.jsxs(c("PolarisSettingsShell.react"), {
        pageIdentifier: j,
        title: d("PolarisPrivacyAndSecurityStrings.react")
          .DATA_CONTROLS_SUPPORT_SCREEN_TITLE,
        children: [
          i.jsx(c("PolarisPageMetadata.react"), {
            id: j,
            title: d("PolarisPrivacyAndSecurityStrings.react")
              .DATA_CONTROLS_SUPPORT_TITLE,
          }),
          i.jsxs("main", {
            className: "_adx0",
            children: [
              d("PolarisDataControlsSupportLogger").logDataControlsEvent(),
              i.jsx(l, {
                headerText: d("PolarisPrivacyAndSecurityStrings.react")
                  .DATA_CONTROLS_SUPPORT_MANAGING_ACCOUNT_LISTVIEW_HEADING,
                links: m,
              }),
              i.jsx(l, {
                headerText: d("PolarisPrivacyAndSecurityStrings.react")
                  .DATA_CONTROLS_SUPPORT_CUSTOMIZE_EXPERIENCE_LISTVIEW_HEADING,
                links: n,
              }),
              i.jsx(l, {
                headerText: d("PolarisPrivacyAndSecurityStrings.react")
                  .DATA_CONTROLS_SUPPORT_REPORTING_CONTENT_LISTVIEW_HEADING,
                links: o,
              }),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PAGE_ID = j;
    g.DataControlsSupportPage = a;
  },
  98
);
__d(
  "PolarisDataControlsSupportRoot.react",
  ["PolarisDataControlsSupportPage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        d("PolarisDataControlsSupportPage.react").DataControlsSupportPage,
        {}
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCreationActionAddGeoTag",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return { type: "CREATION_GEO_TAG_ADDED", geoTag: a };
    }
    f.addGeoTag = a;
  },
  66
);
__d(
  "PolarisCreationLocationPage.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSSearchPanoOutlineIcon",
    "IGDSXPanoOutlineIcon",
    "IGRouter",
    "PolarisCreationActionAddGeoTag",
    "PolarisCreationLogger",
    "PolarisCreationShell.react",
    "PolarisGenericStrings",
    "PolarisIGCorePressable",
    "PolarisIGCoreTextInput",
    "PolarisMediaConstants",
    "PolarisNavigationalHeader.react",
    "PolarisPageMetadata.react",
    "PolarisReactRedux",
    "PolarisSearchConstants",
    "PolarisStoriesStrings",
    "PolarisTypeaheadContainer.react",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = "CreationLocationPage",
      l = {
        shell: {
          backgroundColor: "xnz67gz",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          $$css: !0,
        },
      },
      m = i._("Find a location");
    function n(a) {
      var b = a.geoTag;
      a = a.onClick;
      return j.jsx("div", {
        className: "_aabt",
        onClick: a,
        role: "button",
        tabIndex: "0",
        children: j.jsxs("div", {
          className: "_aabu",
          children: [
            j.jsx("span", { className: "_aabv", children: b.name }),
            j.jsx("span", { className: "_aabw", children: b.address }),
          ],
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.$1 = function () {
          c.props.history.replace("/create/details/");
        };
        c.$2 = function (a) {
          c.setState({ pendingQuery: a.target.value });
        };
        c.$3 = function (a) {
          c.props.onGeoTagChanged(a), c.$1();
        };
        c.$4 = function () {
          d("PolarisCreationLogger").logCreationEvent(
            c.props.sessionId,
            "location_search_cleared",
            "location_page",
            c.props.mediaType
          ),
            c.setState({ pendingQuery: "" });
        };
        c.$5 = function () {
          d("PolarisCreationLogger").logCreationEvent(
            c.props.sessionId,
            "location_search_performed",
            "location_page",
            c.props.mediaType
          );
        };
        c.$6 = function (a) {
          d("PolarisCreationLogger").logCreationEvent(
            c.props.sessionId,
            "suggested_location_added",
            "location_page",
            c.props.mediaType
          ),
            c.$3(a);
        };
        c.$7 = function (a, b) {
          d("PolarisCreationLogger").logCreationEvent(
            c.props.sessionId,
            "searched_location_added",
            "location_page",
            c.props.mediaType
          ),
            a.type === d("PolarisSearchConstants").LOCATION_RESULT && c.$3(a);
        };
        c.state = { pendingQuery: "" };
        return c;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        d("PolarisCreationLogger").logCreationEvent(
          this.props.sessionId,
          "location_page_loaded",
          "location_page",
          this.props.mediaType
        );
      };
      e.render = function () {
        var a = this,
          b = this.props.suggestedGeoTags;
        return j.jsxs(c("PolarisCreationShell.react"), {
          xstyle: l.shell,
          children: [
            j.jsx(c("PolarisPageMetadata.react"), { id: k }),
            j.jsx(c("PolarisNavigationalHeader.react"), {
              className: "_aaby",
              onCancel: this.$1,
              title: i._("Add Location"),
            }),
            j.jsx("div", {
              className: "_aabz",
              children: j.jsx(c("PolarisIGCoreTextInput"), {
                autoComplete: "off",
                endAdornment:
                  !!this.state.pendingQuery.length &&
                  j.jsx(c("PolarisIGCorePressable"), {
                    onPress: this.$4,
                    children: j.jsx(c("IGDSXPanoOutlineIcon"), {
                      alt: d("PolarisStoriesStrings").ALT_TEXT_CLOSE_ICON,
                      size: 16,
                    }),
                  }),
                name: "location-query",
                onChange: this.$2,
                onFocus: this.$5,
                placeholder: m,
                startAdornment: j.jsx(c("IGDSBox.react"), {
                  marginStart: 2,
                  position: "relative",
                  children: j.jsx(c("IGDSSearchPanoOutlineIcon"), {
                    alt: d("PolarisGenericStrings").SEARCH_TEXT,
                    size: 16,
                  }),
                }),
                value: this.state.pendingQuery,
              }),
            }),
            j.jsx(c("PolarisTypeaheadContainer.react"), {
              currentLocation: this.props.searchFromLocation,
              cursorIndex: this.state.pendingQuery.length,
              initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT
                .LOCATION,
              inputString: this.state.pendingQuery,
              onResultSelect: this.$7,
              showResultsCondensed: !1,
              useSearchTriggers: !1,
            }),
            b &&
              !this.state.pendingQuery.length &&
              b.map(function (b, c) {
                return j.jsx(
                  n,
                  {
                    geoTag: b,
                    onClick: function () {
                      return a.$6(b);
                    },
                  },
                  c
                );
              }),
          ],
        });
      };
      return b;
    })(j.Component);
    function a(a) {
      a = a.creation;
      var b = a.finalizedMedia,
        e = a.sessionId;
      a = a.sourceImage;
      var f =
        (a == null ? void 0 : a.dataURL) === void 0
          ? d("PolarisMediaConstants").MediaTypes.VIDEO
          : d("PolarisMediaConstants").MediaTypes.IMAGE;
      return {
        mediaType: f,
        sessionId: e,
        searchFromLocation: c("nullthrows")(a).location || b.currentLocation,
        suggestedGeoTags: b.suggestedGeoTags,
      };
    }
    function b(a) {
      return {
        onGeoTagChanged: function (b) {
          a(d("PolarisCreationActionAddGeoTag").addGeoTag(b));
        },
      };
    }
    h = d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a, b)(e));
    g.PAGE_ID = k;
    g.SuggestedLocationItem = n;
    g.CreationLocationPage = h;
  },
  98
);
__d(
  "PolarisCreateLocationRoot.react",
  ["PolarisCreationLocationPage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        style: { height: "100vh" },
        children: h.jsx(
          d("PolarisCreationLocationPage.react").CreationLocationPage,
          {}
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStoryCreationCreativeCanvas.react",
  [
    "cx",
    "invariant",
    "PolarisConfig",
    "PolarisConfigConstants",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationStrings",
    "PolarisStoryCreationUtils",
    "immutable-4.0.0-rc.9",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a) {
      var b = Array.from(a.keys()).sort(),
        d = c("nullthrows")(a.get(b[0]));
      a = c("nullthrows")(a.get(b[1]));
      b = d.x - a.x;
      d = d.y - a.y;
      return { x: b, y: d };
    }
    function l(a) {
      return a.x * a.x + a.y * a.y;
    }
    function m(a, b) {
      return (a.x * b.x + a.y * b.y) / Math.sqrt(l(a) * l(b));
    }
    function n(a, b) {
      return (a.x * b.y - a.y * b.x) / Math.sqrt(l(a) * l(b));
    }
    function o(a) {
      return a.startX === a.endX && a.startY === a.endY;
    }
    function p(a, b, c, d) {
      var e = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
      d = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
      if (d === 0) return !1;
      var f = e / d;
      e = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
      c = e / d;
      return f < 0 || f > 1 || c < 0 || c > 1 ? !1 : !0;
    }
    function q(a, b, c) {
      var d = c.cos;
      c = c.sin;
      var e = a.x - b.x;
      a = a.y - b.y;
      var f = e * d - a * c;
      e = e * c + a * d;
      f += b.x;
      e += b.y;
      return { x: f, y: e };
    }
    function r(a, b, c) {
      var d = c.cos;
      c = c.sin;
      var e = a.x - b.x;
      a = a.y - b.y;
      var f = e * d + a * c;
      e = -e * c + a * d;
      f += b.x;
      e += b.y;
      return { x: f, y: e };
    }
    function s(a, b, c) {
      var e, f;
      c.type === d("PolarisStoryCreationUtils").TEXT_TYPE
        ? ((e = (c.height + x) * c.transformation.scale),
          (f = (c.width + x) * c.transformation.scale))
        : ((e =
            (c.variants[c.selectedVariant].image_height + x) *
            c.transformation.scale),
          (f =
            (c.variants[c.selectedVariant].image_width + x) *
            c.transformation.scale));
      var g = { x: c.x, y: c.y },
        h = { x: c.x - f / 2, y: c.y - e / 2 },
        i = { x: c.x + f / 2, y: c.y - e / 2 },
        j = { x: c.x + f / 2, y: c.y + e / 2 };
      f = { x: c.x - f / 2, y: c.y + e / 2 };
      h = q(h, g, c.transformation);
      i = q(i, g, c.transformation);
      j = q(j, g, c.transformation);
      f = q(f, g, c.transformation);
      return p(a, b, h, i) || p(a, b, i, j) || p(a, b, j, f) || p(a, b, f, h);
    }
    function t(a, b) {
      var c, e;
      b.type === d("PolarisStoryCreationUtils").TEXT_TYPE
        ? ((c = (b.height + x) * b.transformation.scale),
          (e = (b.width + x) * b.transformation.scale))
        : ((c =
            (b.variants[b.selectedVariant].image_height + x) *
            b.transformation.scale),
          (e =
            (b.variants[b.selectedVariant].image_width + x) *
            b.transformation.scale));
      var f = { x: b.x, y: b.y };
      a = r(a, f, b.transformation);
      return (
        a.x >= b.x - e / 2 &&
        a.x <= b.x + e / 2 &&
        a.y >= b.y - c / 2 &&
        a.y <= b.y + c / 2
      );
    }
    var u = 30,
      v = 3,
      w = 4,
      x = 30,
      y = 24;
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.calculateMidpoint = function (a) {
          return {
            x: a.startX + (a.endX - a.startX) / 2,
            y: a.startY + (a.endY - a.startY) / 2,
          };
        };
        e.draw = function () {
          var a = c("nullthrows")(e.$1),
            b = c("nullthrows")(e.$2),
            f = a.getContext("2d");
          b = b.getContext("2d");
          var g = e.$3();
          f.clearRect(0, 0, a.width, a.height);
          f.beginPath();
          if (e.props.linesArray.length === 1) {
            var h = e.props.linesArray[0];
            f.moveTo(g * h.startX, g * h.startY);
            e.renderLine(h, f, g, d("PolarisStoryCreationUtils").LINE_TYPE.DOT);
          } else if (e.props.linesArray.length > 1) {
            h = e.props.linesArray[0];
            var i = e.props.linesArray[1];
            f.moveTo(g * h.startX, g * h.startY);
            for (var j = 1; j < e.props.linesArray.length; j++)
              h.endX === i.startX && h.endY === i.startY
                ? e.renderLine(
                    h,
                    f,
                    g,
                    o(h)
                      ? d("PolarisStoryCreationUtils").LINE_TYPE.END
                      : d("PolarisStoryCreationUtils").LINE_TYPE.CURVE
                  )
                : (e.renderLine(
                    h,
                    f,
                    g,
                    o(h)
                      ? d("PolarisStoryCreationUtils").LINE_TYPE.DOT
                      : d("PolarisStoryCreationUtils").LINE_TYPE.CURVE
                  ),
                  f.stroke(),
                  f.beginPath(),
                  f.moveTo(g * i.startX, g * i.startY)),
                (h = e.props.linesArray[j]),
                (i = e.props.linesArray[j + 1]);
            e.renderLine(
              h,
              f,
              g,
              o(h)
                ? d("PolarisStoryCreationUtils").LINE_TYPE.DOT
                : d("PolarisStoryCreationUtils").LINE_TYPE.CURVE
            );
          }
          f.stroke();
          b.clearRect(0, 0, a.width, a.height);
          e.$4(b);
        };
        e.$4 = function (a) {
          a.globalCompositeOperation = "source-over";
          for (var b = 0; b < e.props.canvasStickers.length; b++)
            e.props.canvasStickers[b].type ===
            d("PolarisStoryCreationUtils").TEXT_TYPE
              ? (!e.props.isEditingText ||
                  b < e.props.canvasStickers.length - 1) &&
                e.$5(a, e.props.canvasStickers[b], b)
              : e.$6(a, e.props.canvasStickers[b], b);
        };
        e.renderLine = function (a, b, c, f) {
          b.lineCap = "round";
          b.lineJoin = "round";
          b.globalAlpha = 1;
          b.globalCompositeOperation = "source-over";
          b.shadowBlur = 0;
          b.lineWidth = c * a.size;
          b.strokeStyle = a.color;
          switch (a.brush) {
            case d("PolarisStoryCreationUtils").BRUSHES.MAGIC:
              a.color === "black"
                ? ((b.strokeStyle = "black"),
                  (b.shadowColor = d(
                    "PolarisStoryCreationUtils"
                  ).DRAW_COLORS[3]))
                : ((b.strokeStyle = "white"), (b.shadowColor = a.color));
              b.shadowBlur = u;
              break;
            case d("PolarisStoryCreationUtils").BRUSHES.MARKER:
              break;
            case d("PolarisStoryCreationUtils").BRUSHES.ERASER:
              b.globalCompositeOperation = "destination-out";
              b.lineWidth = c * a.size * v;
              break;
            case d("PolarisStoryCreationUtils").BRUSHES.CHISEL:
              b.lineWidth = c * w;
              b.globalAlpha = 0.8;
              break;
          }
          if (a.brush !== d("PolarisStoryCreationUtils").BRUSHES.CHISEL)
            if (f === d("PolarisStoryCreationUtils").LINE_TYPE.CURVE) {
              var g = e.calculateMidpoint(a);
              b.quadraticCurveTo(c * a.startX, c * a.startY, c * g.x, c * g.y);
            } else
              e.platform === d("PolarisConfigConstants").appPlatformTypes.IOS &&
              f === d("PolarisStoryCreationUtils").LINE_TYPE.DOT
                ? b.lineTo(c * a.endX + 1, c * a.endY + 1)
                : b.lineTo(c * a.endX, c * a.endY);
          else
            for (g = 0; g < c * a.size; g += w)
              b.moveTo(c * a.startX + g, c * a.startY - g),
                b.lineTo(c * a.endX + g, c * a.endY - g);
        };
        e.$3 = function () {
          if (
            e.state.memoizedPixelRatio == null ||
            e.state.memoizedPixelRatio === 0
          ) {
            e.setState({ memoizedPixelRatio: e.props.initialPixelRatio });
            return e.props.initialPixelRatio;
          }
          return c("nullthrows")(e.state.memoizedPixelRatio);
        };
        e.$7 = function () {
          if (
            e.state.touchLocations.size >= 2 &&
            e.state.initialTouchLocations.size >= 2
          ) {
            var a = k(e.state.touchLocations),
              b = k(e.state.initialTouchLocations),
              c = Math.sqrt(l(a) / l(b));
            return { cos: m(b, a), sin: n(b, a), scale: c };
          }
          return { cos: 1, sin: 0, scale: 1 };
        };
        e.$8 = function (a, b) {
          var c = b.cos,
            d = b.scale;
          b = b.sin;
          b = Math.atan2(b, c);
          a.transform(d, 0, 0, d, 0, 0);
          a.rotate(b);
        };
        e.$5 = function (a, b, c) {
          a.save();
          a.scale(e.$3(), e.$3());
          a.translate(b.x, b.y);
          a.fillStyle = b.color;
          var f = b.fontWeight + " " + b.fontSize + "px sans-serif";
          a.shadowColor = b.textShadow.shadowColor;
          a.shadowOffsetX = b.textShadow.shadowOffsetX;
          a.shadowOffsetY = b.textShadow.shadowOffsetY;
          a.shadowBlur = b.textShadow.shadowBlur;
          a.font = f;
          a.textAlign = "center";
          a.textBaseline = "middle";
          f = b.renderText.length;
          var g = b.height / f;
          e.$8(a, b.transformation);
          if (c === e.props.canvasStickers.length - 1) {
            c = e.$7();
            var h = c.cos,
              i = c.scale;
            c = c.sin;
            e.$8(a, {
              cos: h,
              sin: c,
              scale: Math.min(
                i,
                d("PolarisStoryCreationUtils").MAX_SCALE /
                  b.transformation.scale
              ),
            });
          }
          for (h = 0; h < f; h++)
            a.fillText(b.renderText[h], 0, 0 - b.height / 2 + g * (h + 0.5));
          a.restore();
        };
        e.$9 = function (a, b, c) {
          var f = b.variants[b.selectedVariant],
            g = f.id;
          a.save();
          a.scale(e.$3(), e.$3());
          a.translate(b.x, b.y);
          e.$8(a, b.transformation);
          if (c === e.props.canvasStickers.length - 1) {
            c = e.$7();
            var h = c.cos,
              i = c.scale;
            c = c.sin;
            e.$8(a, {
              cos: h,
              sin: c,
              scale: Math.min(
                i,
                d("PolarisStoryCreationUtils").MAX_SCALE /
                  b.transformation.scale
              ),
            });
          }
          a.drawImage(
            e.images[g][b.selectedVariant],
            0 - f.image_width / 2,
            0 - f.image_height / 2
          );
          a.restore();
        };
        e.$6 = function (a, b, c) {
          var d = b.variants[b.selectedVariant];
          !e.images[d.id]
            ? ((e.images[d.id] = {}),
              b.variants.map(function (d, f) {
                var g = new Image(d.image_width, d.image_height);
                g.crossOrigin = "Anonymous";
                g.onload = function () {
                  (e.images[d.id][f] = g),
                    f === b.selectedVariant &&
                      (b.variants.length > 1 &&
                        (e.setState({ showTapForMore: !0 }),
                        window.setTimeout(function () {
                          e.setState({ showTapForMore: !1 });
                        }, 2e3)),
                      e.$9(a, b, c));
                };
                g.src = d.image_url;
              }))
            : e.$9(a, b, c);
        };
        e.$10 = function (a) {
          a.preventDefault();
          if (e.props.canvasStickers.length === 0 || !e.state.touchingSticker)
            return;
          var b = e.state.touchLocations;
          for (var c = 0; c < a.changedTouches.length; c++) {
            var f = a.changedTouches[c];
            b = b.set(f.identifier, { x: f.clientX, y: f.clientY });
          }
          f = 0;
          c = 0;
          var g = !1;
          if (a.changedTouches.length === 1) {
            var h = a.changedTouches[0],
              j = e.state.touchLocations.get(h.identifier);
            j || i(0, 51545);
            var k = h.clientX;
            h = h.clientY;
            f = k - j.x;
            c = h - j.y;
            j = document.getElementById(
              d("PolarisStoryCreationUtils").TRASH_ID
            );
            var l = null;
            j !== null && (l = j.getBoundingClientRect());
            l !== null &&
              k >= l.left &&
              k <= l.right &&
              h >= l.top &&
              h <= l.bottom &&
              (g = !0);
          } else if (a.changedTouches.length > 1) {
            j = a.changedTouches[0];
            k = a.changedTouches[1];
            h = j.clientX + (k.clientX - j.clientX) / 2;
            l = j.clientY + (k.clientY - j.clientY) / 2;
            a = e.state.touchLocations.get(j.identifier);
            j = e.state.touchLocations.get(k.identifier);
            if (a != null && j != null) {
              k = a.x + (j.x - a.x) / 2;
              j = a.y + (j.y - a.y) / 2;
              a || i(0, 51545);
              f = h - k;
              c = l - j;
            }
          }
          e.props.onMoveCanvasSticker(f, c, g);
          e.setState({
            oldTouchLocations: e.state.touchLocations,
            touchLocations: b,
          });
        };
        e.$11 = function (a) {
          a.preventDefault();
          if (e.props.canvasStickers.length === 0) return;
          var b = e.state.touchLocations,
            c = e.state.initialTouchLocations;
          for (var d = 0; d < a.changedTouches.length; d++) {
            var f = a.changedTouches[d];
            b = b.set(f.identifier, { x: f.clientX, y: f.clientY });
            c = c.set(f.identifier, { x: f.clientX, y: f.clientY });
          }
          f = -1;
          if (!e.state.touchingSticker) {
            if (b.size === 1) {
              d = a.changedTouches[0];
              a = { x: d.clientX, y: d.clientY };
              for (d = e.props.canvasStickers.length - 1; d >= 0; d--)
                if (t(a, e.props.canvasStickers[d])) {
                  f = d;
                  break;
                }
            } else {
              d = b.values();
              a = d.next().value;
              d = d.next().value;
              a || i(0, 61485);
              d || i(0, 61484);
              for (var g = e.props.canvasStickers.length - 1; g >= 0; g--)
                if (
                  s(a, d, e.props.canvasStickers[g]) ||
                  t(a, e.props.canvasStickers[g]) ||
                  t(d, e.props.canvasStickers[g])
                ) {
                  f = g;
                  break;
                }
            }
            f !== -1 && e.props.onChangeStickerOrder(f);
            e.setState({
              touchingSticker: f >= 0 || e.state.touchingSticker,
              oldTouchLocations: e.state.touchLocations,
              touchLocations: b,
              initialTouchLocations: c,
              showTapForMore: !1,
            });
          }
        };
        e.$12 = function (a) {
          for (var b = 0; b < e.props.canvasStickers.length; b++)
            if (t(a, e.props.canvasStickers[b])) return !0;
          return !1;
        };
        e.$13 = function (a) {
          a.preventDefault();
          if (e.props.canvasStickers.length === 0) return;
          var b = a.changedTouches[0],
            c = b.clientX;
          b = b.clientY;
          if (
            !e.props.isMovingSticker &&
            e.$12({ x: c, y: b }) &&
            e.state.touchLocations.size === 1
          ) {
            c = e.props.canvasStickers[e.props.canvasStickers.length - 1];
            !e.props.isEditingText &&
            c.type === d("PolarisStoryCreationUtils").TEXT_TYPE
              ? e.props.onEnterEditText()
              : c.type === d("PolarisStoryCreationUtils").PLACED_TYPE &&
                c.variants.length > 1 &&
                e.props.onToggleStickerVariant();
          }
          b = e.state.touchLocations;
          c = e.state.oldTouchLocations;
          var f = e.state.initialTouchLocations;
          for (var g = 0; g < a.changedTouches.length; g++)
            (b = b["delete"](a.changedTouches[g].identifier)),
              (c = c["delete"](a.changedTouches[g].identifier)),
              (f = f["delete"](a.changedTouches[g].identifier));
          f = b.size === 1 ? b : f;
          e.props.onTransformCanvasSticker(b.size > 0, e.$7());
          e.props.overTrash && b.size === 0 && e.props.onDeleteCanvasSticker();
          a = b.size > 0 ? e.state.touchingSticker : !1;
          e.setState({
            touchingSticker: a,
            oldTouchLocations: c,
            touchLocations: b,
            initialTouchLocations: f,
          });
        };
        e.getPlacedStickerTop = function () {
          var a = e.props.canvasStickers[e.props.canvasStickers.length - 1];
          if (a.type === d("PolarisStoryCreationUtils").PLACED_TYPE) {
            var b = a.variants[a.selectedVariant];
            return a.y - (b.image_height * b.image_width_ratio) / 2 - y;
          }
          return -1;
        };
        e.state = {
          touchingSticker: !1,
          touchedSticker: -1,
          oldTouchLocations: new (d("immutable-4.0.0-rc.9").Map)(),
          touchLocations: new (d("immutable-4.0.0-rc.9").Map)(),
          initialTouchLocations: new (d("immutable-4.0.0-rc.9").Map)(),
          showTapForMore: !1,
        };
        e.platform = d("PolarisConfig").getAppPlatform();
        e.images = {};
        return e;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.draw();
      };
      e.componentDidUpdate = function (a) {
        this.draw();
      };
      e.render = function () {
        var a = this;
        return j.jsxs(j.Fragment, {
          children: [
            j.jsx("canvas", {
              className:
                "_aa37" + (this.props.isEditingDrawing ? " _aa38" : ""),
              onTouchEnd: this.$13,
              onTouchMove: this.$10,
              onTouchStart: this.$11,
              ref: function (b) {
                (a.$1 = b), a.props.drawingCanvasRef(b);
              },
            }),
            j.jsx("canvas", {
              className:
                "_aa39" + (this.props.isEditingDrawing ? " _aa38" : ""),
              onTouchEnd: this.$13,
              onTouchMove: this.$10,
              onTouchStart: this.$11,
              ref: function (b) {
                (a.$2 = b), a.props.stickerCanvasRef(b);
              },
            }),
            this.state.showTapForMore &&
              j.jsx("span", {
                className: "_aa3a",
                style: { top: this.getPlacedStickerTop() },
                children: d("PolarisStoryCreationStrings").TAP_FOR_MORE,
              }),
          ],
        });
      };
      return b;
    })(j.Component);
    function a(a) {
      return {
        canvasStickers: a.storyCreation.canvasStickers,
        initialPixelRatio: a.displayProperties.pixelRatio,
        isEditingDrawing: a.storyCreation.isEditingDrawing,
        isEditingText: a.storyCreation.isEditingText,
        isMovingSticker: a.storyCreation.isMovingSticker,
        isTextSaved: a.storyCreation.isTextSaved,
        linesArray: a.storyCreation.activeDrawing.linesArray,
        overTrash: a.storyCreation.overTrash,
        textItem: a.storyCreation.activeText,
      };
    }
    function b(a) {
      return {
        onChangeStickerOrder: function (b) {
          a(d("PolarisStoryCreationActions").changeStickerOrder(b));
        },
        onDeleteCanvasSticker: function () {
          a(d("PolarisStoryCreationActions").deleteCanvasSticker());
        },
        onEnterEditText: function () {
          a(d("PolarisStoryCreationActions").enterEditText());
        },
        onMoveCanvasSticker: function (b, c, e) {
          a(d("PolarisStoryCreationActions").moveCanvasSticker(b, c, e));
        },
        onToggleStickerVariant: function () {
          a(d("PolarisStoryCreationActions").toggleStickerVariant());
        },
        onTransformCanvasSticker: function (b, c) {
          a(d("PolarisStoryCreationActions").transformCanvasSticker(b, c));
        },
      };
    }
    f = d("PolarisReactRedux").connect(a, b, null, { forwardRef: !0 })(e);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryCreationBrushSizePicker.react",
  [
    "cx",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationUtils",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 280;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.dragStart = function (a) {
          a.preventDefault();
          var b = c.transformY(a.touches[0].clientY);
          c.setState({ isMouseDown: !0 }, function () {
            c.drag(b);
          });
        };
        c.drag = function (a) {
          if (!c.state.isMouseDown) return;
          c.props.onChangeBrushSize(c.posToSize(c.state.sliderPos));
          c.setState({ sliderPos: a });
        };
        c.dragEnd = function () {
          c.setState({ isMouseDown: !1 });
        };
        c.$1 = function (a) {
          a.preventDefault();
          a = c.transformY(a.touches[0].clientY);
          c.drag(a);
        };
        c.posToSize = function (a) {
          return (
            (-a *
              (d("PolarisStoryCreationUtils").MAX_BRUSH_SIZE -
                d("PolarisStoryCreationUtils").MIN_BRUSH_SIZE)) /
              j +
            1
          );
        };
        c.sizeToPos = function (a) {
          return (
            (-(a - 1) * j) /
            (d("PolarisStoryCreationUtils").MAX_BRUSH_SIZE -
              d("PolarisStoryCreationUtils").MIN_BRUSH_SIZE)
          );
        };
        c.transformY = function (a) {
          a = a - c.props.canvasHeight / 2 - j / 2;
          if (a < -j) return -j;
          else if (a > 0) return 0;
          return a;
        };
        c.state = {
          isMouseDown: !1,
          sliderPos: c.sizeToPos(c.props.brushSize),
        };
        return c;
      }
      var e = b.prototype;
      e.render = function () {
        return i.jsxs("div", {
          className: c("joinClasses")(this.props.className, "_aa3y"),
          children: [
            i.jsx("div", {
              className: "_aa3z",
              children: i.jsx("div", { className: "_aa3-" }),
            }),
            i.jsx("div", {
              className: "_aa3_",
              onTouchEnd: this.dragEnd,
              onTouchMove: this.$1,
              onTouchStart: this.dragStart,
              role: "menuitem",
              style: { top: this.state.sliderPos + "px" },
              children: i.jsx("div", { className: "_aa40" }),
            }),
          ],
        });
      };
      return b;
    })(i.Component);
    function a(a) {
      return {
        brushSize: a.storyCreation.brushSize,
        canvasHeight: a.storyCreation.canvasDimensions.height,
      };
    }
    e = { onChangeBrushSize: d("PolarisStoryCreationActions").changeBrushSize };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryCreationDrawColorPicker.react",
  [
    "cx",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationUtils",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = function (a) {
            return function () {
              return c.props.onChangeColor(a);
            };
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = this;
        return i.jsx("div", {
          className: this.props.className,
          children: d("PolarisStoryCreationUtils").DRAW_COLORS.map(function (
            b
          ) {
            return i.jsx(
              "button",
              {
                className: c("joinClasses")(
                  "_aa7_" +
                    (a.props.color === b &&
                    b === d("PolarisStoryCreationUtils").DRAW_COLORS_ENUM.black
                      ? " _aa80"
                      : ""),
                  a.props.colorOptionClassName
                ),
                onClick: a.$1(b),
                role: "menuitem",
                children: i.jsx("div", {
                  className:
                    "_aa81" +
                    (a.props.color === b ? " _aa82" : "") +
                    (a.props.color === b &&
                    b === d("PolarisStoryCreationUtils").DRAW_COLORS_ENUM.black
                      ? " _aa83"
                      : ""),
                  style: { backgroundColor: b },
                }),
              },
              "colorOption_" + b
            );
          }),
        });
      };
      return b;
    })(i.Component);
    function a(a) {
      return { color: a.storyCreation.activeDrawing.activeColor };
    }
    e = { onChangeColor: d("PolarisStoryCreationActions").changeDrawColor };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryCreationDrawing.react",
  [
    "cx",
    "fbt",
    "invariant",
    "IGDSCheckPanoOutlineIcon",
    "PolarisDOMListener.react",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationBrushSizePicker.react",
    "PolarisStoryCreationDrawColorPicker.react",
    "PolarisStoryCreationUtils",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = i._("Done");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.doneButtonRef = k.createRef();
        e.componentDidMount = function () {
          e.$1 = Date.now();
          var a = e.doneButtonRef.current;
          a != null &&
            e.setState({ doneButtonOverflow: a.offsetWidth !== a.scrollWidth });
        };
        e.$2 = function (a) {
          a.preventDefault();
          a = Date.now() - c("nullthrows")(e.$1);
          e.props.onSaveDrawing(a);
        };
        e.$3 = function (a) {
          a.preventDefault(), e.props.onUndoDrawing();
        };
        e.getMousePos = function (a) {
          e.canvas || j(0, 43452);
          var b = e.canvas.getBoundingClientRect(),
            c = a.clientX,
            d = a.clientY;
          a.touches &&
            a.touches.length > 0 &&
            ((c = a.touches[0].clientX), (d = a.touches[0].clientY));
          return { x: c - b.left, y: d - b.top };
        };
        e.drawStart = function (a) {
          a.preventDefault();
          a = e.getMousePos(a);
          var b = a.x,
            c = a.y;
          e.setState({ isMouseDown: !0 }, function () {
            e.props.onStartDrawing(e.props.linesArray.length),
              (e.x = b),
              (e.y = c),
              e.draw(b, c);
          });
        };
        e.drawEnd = function () {
          e.setState({ isMouseDown: !1 });
        };
        e.$4 = function (a) {
          a.preventDefault();
          a = e.getMousePos(a);
          var b = a.x;
          a = a.y;
          e.draw(b, a);
        };
        e.$5 = function (a) {
          a.preventDefault(),
            e.setState({ enterWithEraser: !1 }),
            e.props.onChangeBrush(
              d("PolarisStoryCreationUtils").BRUSHES.MARKER
            );
        };
        e.$6 = function (a) {
          a.preventDefault(),
            e.setState({ enterWithEraser: !1 }),
            e.props.onChangeBrush(
              d("PolarisStoryCreationUtils").BRUSHES.CHISEL
            );
        };
        e.$7 = function (a) {
          a.preventDefault(),
            e.setState({ enterWithEraser: !1 }),
            e.props.onChangeBrush(d("PolarisStoryCreationUtils").BRUSHES.MAGIC);
        };
        e.$8 = function (a) {
          a.preventDefault(),
            e.props.onChangeBrush(
              d("PolarisStoryCreationUtils").BRUSHES.ERASER
            );
        };
        e.draw = function (a, b) {
          if (!e.state.isMouseDown || e.props.disabled === !0) return;
          var c = {
            brush: e.props.activeBrush,
            color: e.props.color,
            size: e.props.brushSize,
            startX: e.x,
            startY: e.y,
            endX: a,
            endY: b,
          };
          e.props.onDrawLine(c);
          e.x = a;
          e.y = b;
        };
        e.state = {
          doneButtonOverflow: !1,
          enterWithEraser:
            e.props.activeBrush ===
            d("PolarisStoryCreationUtils").BRUSHES.ERASER,
          isMouseDown: !1,
        };
        return e;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this;
        return k.jsxs("div", {
          className: "_aa79",
          style: { height: this.props.canvasHeight + "px" },
          children: [
            k.jsx(c("PolarisDOMListener.react"), {
              event: "visibilitychange",
              handler: this.drawEnd,
              target: document,
            }),
            k.jsx(c("PolarisDOMListener.react"), {
              event: "beforeunload",
              handler: this.drawEnd,
              target: window,
            }),
            k.jsx(c("PolarisDOMListener.react"), {
              event: "blur",
              handler: this.drawEnd,
              target: window,
            }),
            k.jsxs("div", {
              className:
                "_aa7a" +
                (this.state.isMouseDown ? "" : " _aa7b") +
                (this.state.isMouseDown ? " _aa7c" : ""),
              style: { height: this.props.canvasHeight + "px" },
              children: [
                k.jsxs("header", {
                  className: "_aa7d",
                  children: [
                    k.jsx("button", {
                      className: "_aa7e",
                      onClick: this.$3,
                      children: i._("Undo"),
                    }),
                    k.jsxs("div", {
                      className: "_aa7f",
                      children: [
                        k.jsx("button", {
                          className:
                            "_aa7g" +
                            (this.props.activeBrush ===
                            d("PolarisStoryCreationUtils").BRUSHES.MARKER
                              ? " _9-s7"
                              : "") +
                            (this.props.activeBrush !==
                            d("PolarisStoryCreationUtils").BRUSHES.MARKER
                              ? " _9-s8"
                              : ""),
                          onClick: this.$5,
                        }),
                        k.jsx("button", {
                          className:
                            "_aa7h" +
                            (this.props.activeBrush ===
                            d("PolarisStoryCreationUtils").BRUSHES.CHISEL
                              ? " _9-sa"
                              : "") +
                            (this.props.activeBrush !==
                            d("PolarisStoryCreationUtils").BRUSHES.CHISEL
                              ? " _9-sb"
                              : ""),
                          onClick: this.$6,
                        }),
                        k.jsx("button", {
                          className:
                            "_aa7i" +
                            (this.props.activeBrush ===
                            d("PolarisStoryCreationUtils").BRUSHES.MAGIC
                              ? " _9-sd"
                              : "") +
                            (this.props.activeBrush !==
                            d("PolarisStoryCreationUtils").BRUSHES.MAGIC
                              ? " _9-se"
                              : ""),
                          onClick: this.$7,
                        }),
                        k.jsx("button", {
                          className:
                            "_aa7j" +
                            (this.props.activeBrush ===
                            d("PolarisStoryCreationUtils").BRUSHES.ERASER
                              ? " _9-sg"
                              : "") +
                            (this.props.activeBrush !==
                            d("PolarisStoryCreationUtils").BRUSHES.ERASER
                              ? " _9-sh"
                              : ""),
                          onClick: this.$8,
                        }),
                        k.jsx("button", {
                          className: "_aa7k",
                          onClick: this.$2,
                          ref: this.doneButtonRef,
                          children: this.state.doneButtonOverflow
                            ? k.jsx(c("IGDSCheckPanoOutlineIcon"), {
                                alt: l,
                                color: "web-always-white",
                                size: 44,
                              })
                            : l,
                        }),
                      ],
                    }),
                  ],
                }),
                k.jsx(c("PolarisStoryCreationBrushSizePicker.react"), {
                  className: "_aa7l",
                }),
                !this.state.enterWithEraser &&
                  k.jsx(c("PolarisStoryCreationDrawColorPicker.react"), {
                    className:
                      "_aa7m" +
                      (this.props.activeBrush !==
                      d("PolarisStoryCreationUtils").BRUSHES.ERASER
                        ? " _aa7b"
                        : "") +
                      (this.props.activeBrush ===
                      d("PolarisStoryCreationUtils").BRUSHES.ERASER
                        ? " _aa7c"
                        : ""),
                    colorOptionClassName:
                      this.props.activeBrush ===
                      d("PolarisStoryCreationUtils").BRUSHES.ERASER
                        ? "_aa7n"
                        : "",
                  }),
              ],
            }),
            k.jsx("canvas", {
              className: "_aa7o",
              height: this.props.canvasHeight,
              onTouchEnd: this.drawEnd,
              onTouchMove: this.$4,
              onTouchStart: this.drawStart,
              ref: function (b) {
                b && (a.canvas = b);
              },
              width: this.props.canvasWidth,
            }),
          ],
        });
      };
      return b;
    })(k.Component);
    function a(a) {
      return {
        activeBrush: a.storyCreation.activeBrush,
        brushSize: a.storyCreation.brushSize,
        canvasHeight: a.storyCreation.canvasDimensions.height,
        canvasWidth: a.storyCreation.canvasDimensions.width,
        color: a.storyCreation.activeDrawing.activeColor,
        linesArray: a.storyCreation.activeDrawing.linesArray,
        startDrawIndex: a.storyCreation.activeDrawing.startDrawIndex,
      };
    }
    e = {
      onChangeBrush: d("PolarisStoryCreationActions").changeBrush,
      onDrawLine: d("PolarisStoryCreationActions").drawLineAction,
      onSaveDrawing: d("PolarisStoryCreationActions").saveDrawing,
      onStartDrawing: d("PolarisStoryCreationActions").startDrawing,
      onUndoDrawing: d("PolarisStoryCreationActions").undoDrawing,
    };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryCreationShareFooter.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisIGCoreButton",
    "PolarisIGCoreIcon",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a.onShareToDirectClick;
      var b = a.onShareToStoryClick;
      a.onUseModal;
      a = i.jsxs(c("IGDSBox.react"), {
        direction: "row",
        position: "relative",
        children: [
          i.jsx(c("PolarisIGCoreIcon"), {
            alt: d("PolarisStoryCreationStrings").ADD_TO_STORY_TEXT,
            icon: d("PolarisAssetManagerGlyphMapping").ICONS
              .NEW_STORY_OUTLINE_24_GREY0,
          }),
          i.jsx("span", {
            className: "_aa33",
            children: d("PolarisStoryCreationStrings").ADD_TO_STORY_TEXT,
          }),
        ],
      });
      return i.jsx("footer", {
        className: "_aa34",
        children: i.jsx(c("IGDSBox.react"), {
          alignSelf: "center",
          bottom: !0,
          direction: void 0,
          justifyContent: void 0,
          marginBottom: 6,
          paddingX: 3,
          position: "absolute",
          width: void 0,
          children: i.jsx("div", {
            className: "_aa35",
            children: i.jsx(c("PolarisIGCoreButton"), {
              borderless: !0,
              onClick: b,
              children: a,
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = { onUseModal: d("PolarisStoryCreationActions").useModal };
    e = d("PolarisReactRedux").connect(null, b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisStoryCreationStickerPicker.react",
  [
    "cx",
    "IGDSSpinner.react",
    "PolarisIGCoreSheet",
    "PolarisIGVirtualGrid.react",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationStrings",
    "PolarisStoryCreationUtils",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 0.4,
      k = 3,
      l = 6,
      m = 120,
      n = 4,
      o = "error";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$2 = function (a) {
          return function () {
            if (e.props.stickers !== "error") {
              var b = e.props.stickers[a],
                c = b.stickers;
              c = c.map(function (a) {
                return {
                  id: b.id,
                  image_height: a.image_height,
                  image_url: a.image_url,
                  image_width: a.image_width,
                  image_width_ratio: a.image_width_ratio,
                };
              });
              e.props.onAddSticker(c);
            }
          };
        };
        e.$3 = function (a) {
          var b = a.index;
          a.isVisible;
          if (e.props.stickers !== "error") {
            a = e.props.stickers[b].stickers[0];
            if (a.image_url !== null)
              return i.jsx(
                "button",
                {
                  className: "_aa7r",
                  id: d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.STICKER,
                  onClick: e.$2(b),
                  children: i.jsx("img", {
                    alt: "",
                    className: "_aa7s",
                    id: d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.STICKER,
                    src: a.image_url,
                    style: { width: 100 * a.tray_image_width_ratio + "%" },
                  }),
                },
                b
              );
          }
          return null;
        };
        e.$4 = function (a) {
          (e.numScreensFromStart = a.numScreensFromStart),
            (e.numScreensFromEnd = a.numScreensFromEnd);
        };
        e.$5 = function (a) {
          a.preventDefault(),
            e.props.onResetStickerResults().then(function () {
              e.props.onCacheStickerResults();
            });
        };
        e.getPercent = function () {
          return e.state.handlePos / e.props.canvasHeight;
        };
        e.renderVirtualList = function (a) {
          return e.props.stickers === o
            ? i.jsx("div", {
                className: "_aa7t",
                style: { height: e.props.canvasHeight * (1 - e.getPercent()) },
                children: i.jsxs("div", {
                  className: "_aa7u",
                  children: [
                    i.jsx("div", {
                      className: "_aa7v",
                      children: d("PolarisStoryCreationStrings")
                        .CANNOT_LOAD_STICKERS,
                    }),
                    i.jsx("div", {
                      className: "_aa7w",
                      children: d("PolarisStoryCreationStrings")
                        .CHECK_CONNECTION,
                    }),
                    i.jsx("button", {
                      className: "_aa7x",
                      onClick: e.$5,
                      children: d("PolarisStoryCreationStrings").RETRY,
                    }),
                  ],
                }),
              })
            : e.props.stickers.length === 0
            ? i.jsx("div", {
                className: "_aa7y",
                style: { height: e.props.canvasHeight * (1 - e.getPercent()) },
                children: i.jsx(c("IGDSSpinner.react"), {
                  position: "absolute",
                  size: "medium",
                }),
              })
            : i.jsx("div", {
                className: "_aa7z",
                id: d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.GRID_DIV,
                style: { height: e.props.canvasHeight * (1 - e.getPercent()) },
                children: i.jsx(c("PolarisIGVirtualGrid.react"), {
                  containerSize: a,
                  estimatedItemSize: m,
                  initialRenderCount: n,
                  itemCount: e.props.stickers.length,
                  itemsPerRow: k,
                  onInitialize: e.$4,
                  onScroll: e.$4,
                  overscanCount: l,
                  ref: function (a) {
                    return (e.$1 = a);
                  },
                  renderer: e.$3,
                  rowClassName: "_aa7-",
                }),
              });
        };
        e.state = {
          handlePos: e.props.canvasHeight * j,
          isMouseDown: !1,
          tapOffset: 0,
        };
        e.lastTouchY = 0;
        e.numScreensFromEnd = 0;
        e.numScreensFromStart = 0;
        return e;
      }
      var e = b.prototype;
      e.render = function () {
        return i.jsx(c("PolarisIGCoreSheet"), {
          onClose: this.props.onCloseStickerTool,
          stops: ["50%", "100%"],
          transparent: !0,
          children: this.renderVirtualList,
        });
      };
      return b;
    })(i.Component);
    function a(a) {
      var b = d("polarisUserSelectors").getViewer(a);
      return {
        canvasHeight: a.storyCreation.canvasDimensions.height,
        stickers: a.storyCreation.stickerResults,
        viewer: b,
      };
    }
    e = {
      onAddSticker: d("PolarisStoryCreationActions").addSticker,
      onCacheStickerResults: d("PolarisStoryCreationActions")
        .cacheStickerResults,
      onCloseStickerTool: d("PolarisStoryCreationActions").closeStickerTool,
      onResetStickerResults: d("PolarisStoryCreationActions")
        .resetStickerResults,
    };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisLineBreakMeasurer.react",
  ["nullthrows", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { wordWrap: "break-word", zIndex: -999 };
    function j(a, b) {
      var c = [];
      function d(a, b) {
        b === void 0 && (b = null);
        if (a.nodeType === Node.TEXT_NODE) {
          var e = [],
            f = Array.from(a.textContent);
          for (var g = 0; g < f.length; g++) {
            var h = f[g],
              i = document.createElement("span");
            i.textContent = h;
            e.push(i);
            c.push(i);
          }
          return e;
        }
        h = b == null ? a.cloneNode(!1) : b;
        for (
          i = a.childNodes,
            f = Array.isArray(i),
            g = 0,
            i = f
              ? i
              : i[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          if (f) {
            if (g >= i.length) break;
            e = i[g++];
          } else {
            g = i.next();
            if (g.done) break;
            e = g.value;
          }
          b = e;
          for (
            a = d(b),
              e = Array.isArray(a),
              b = 0,
              a = e
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var j;
            if (e) {
              if (b >= a.length) break;
              j = a[b++];
            } else {
              b = a.next();
              if (b.done) break;
              j = b.value;
            }
            j = j;
            h.appendChild(j);
          }
        }
        return [h];
      }
      d(a, b);
      return c;
    }
    function k(a) {
      var b = [];
      if (a.length === 0) return b;
      var c = a[0].getBoundingClientRect().top,
        d = "";
      for (var e = 0; e < a.length; e++) {
        var f = a[e],
          g = f.getBoundingClientRect().top;
        if (g > c) {
          b.push(d);
          var h = f.getBoundingClientRect().height;
          h = Math.ceil((g - c) / h) - 1;
          b.push.apply(b, Array(h).fill(""));
          c = g;
          d = f.innerText || "";
        } else d += f.innerText || "";
      }
      d.length > 0 && b.push(d);
      return b;
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$2 = function (a) {
            d.$1 = a;
          }),
          (d.getStrings = function (a) {
            c("nullthrows")(d.$1).innerHTML = "";
            a = j(a, c("nullthrows")(d.$1));
            return k(a);
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.getStringsFromText = function (a) {
        var b = document.createElement("span");
        b.textContent = a;
        return this.getStrings(b);
      };
      d.render = function () {
        return h.jsx("span", {
          className: this.props.className,
          ref: this.$2,
          style: babelHelpers["extends"]({}, i, this.props.style),
        });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "polarisStoryCreationSelectors",
  ["invariant", "reselect"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("reselect").createSelector(
      [
        function (a) {
          return a.storyCreation.canvasStickers;
        },
      ],
      function (a) {
        a = a[a.length - 1];
        a.type === "text" || h(0, 63794, a.type);
        return a.color;
      }
    );
    g.getLastCanvasStickerColor = a;
  },
  98
);
__d(
  "PolarisStoryCreationColorPicker.react",
  [
    "cx",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationUtils",
    "polarisStoryCreationSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.className,
        c = a.refocus,
        e = d("PolarisReactRedux").useDispatch(),
        f = d("PolarisReactRedux").useSelector(
          d("polarisStoryCreationSelectors").getLastCanvasStickerColor
        ),
        g = function (a) {
          return function () {
            e(d("PolarisStoryCreationActions").changeColor(a)), c();
          };
        };
      return i.jsx("div", {
        className: b,
        children: d("PolarisStoryCreationUtils").TEXT_COLORS.map(function (a) {
          return i.jsx(
            "button",
            {
              className:
                "_aa84" +
                (f === a &&
                a === d("PolarisStoryCreationUtils").TEXT_COLORS_ENUM.black
                  ? " _aa85"
                  : ""),
              onClick: g(a),
              children: i.jsx("div", {
                className:
                  "_aa86" +
                  (f === a ? " _aa87" : "") +
                  (f === a &&
                  a === d("PolarisStoryCreationUtils").TEXT_COLORS_ENUM.black
                    ? " _aa88"
                    : ""),
                style: { backgroundColor: a },
              }),
            },
            "colorOption_" + a
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
  "PolarisStoryCreationTextInput.react",
  [
    "cx",
    "fbt",
    "PolarisLineBreakMeasurer.react",
    "PolarisReactRedux",
    "PolarisSearchConstants",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationColorPicker.react",
    "PolarisTypeaheadContainer.react",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = i._("Done");
    function l(a) {
      return /\s/.test(a);
    }
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$4 = function () {
          var a = c("nullthrows")(e.$1).getBoundingClientRect();
          e.props.onChangeActiveText(
            c("nullthrows")(e.$1).innerHTML,
            a.right - a.left,
            a.bottom - a.top
          );
          e.setState({ cursorIndex: e.getCursorIndex() });
        };
        e.componentDidMount = function () {
          (e.$2 = Date.now()),
            e.$1 &&
              (e.props.rawText && (e.$1.innerHTML = e.props.rawText), e.$5());
        };
        e.$6 = function (a) {
          a.stopPropagation();
          a = c("nullthrows")(e.$3).getStrings(c("nullthrows")(e.$1));
          var b = Date.now() - c("nullthrows")(e.$2);
          e.props.onSaveText(a, b);
        };
        e.$7 = function (a) {
          a.preventDefault();
        };
        e.$8 = function (a) {
          a.stopPropagation(), e.setState({ cursorIndex: e.getCursorIndex() });
        };
        e.$5 = function () {
          c("nullthrows")(e.$1).focus();
          if (
            window.getSelection !== void 0 &&
            document.createRange !== void 0
          ) {
            var a = document.createRange();
            a.selectNodeContents(c("nullthrows")(e.$1));
            a.collapse(!1);
            var b = window.getSelection();
            b.removeAllRanges();
            b.addRange(a);
          }
        };
        e.$9 = function (a) {
          e.$1 = a;
        };
        e.$10 = function (a) {
          e.$3 = a;
        };
        e.getCursorIndex = function () {
          if (window.getSelection) {
            var a = window.getSelection();
            a = a.getRangeAt(0);
            return a.startOffset;
          }
          return 0;
        };
        e.getMentionQuery = function () {
          if (window.getSelection) {
            var a = window.getSelection(),
              b = a.anchorNode.data;
            a = a.getRangeAt(0);
            a = a.startOffset;
            if (b)
              for (var c = a - 1; c >= 0; c--) {
                var d = b.charAt(c);
                if (d === "@") return b.substring(c + 1, a);
              }
          }
          return "";
        };
        e.getMentionIndex = function () {
          if (window.getSelection) {
            var a = window.getSelection(),
              b = a.anchorNode.data;
            a = a.getRangeAt(0);
            a = a.startOffset;
            if (b)
              for (var c = a - 1; c >= 0; c--) {
                var d = b.charAt(c);
                if (d === "@") return a - c;
              }
          }
          return -1;
        };
        e.$11 = function (a) {
          a = a.username;
          var b = window.getSelection().anchorNode.data,
            c = b.substring(e.getCursorIndex(), b.length);
          b = b.substring(0, e.getCursorIndex());
          var d = b.lastIndexOf(" ");
          b = b.substring(0, d === -1 ? 0 : d);
          window.getSelection().anchorNode.data = b + " @" + a + " " + c;
          e.$4();
        };
        e.$12 = function (a, b) {
          a.type === d("PolarisSearchConstants").USER_RESULT &&
            e.$11({ userId: String(a.pk), username: a.username, position: [] });
        };
        e.$13 = function () {
          var a = !1;
          if (window.getSelection) {
            var b = window.getSelection().anchorNode.data;
            if (b) {
              var c = e.getCursorIndex();
              for (c = c - 1; c >= 0; c--) {
                var d = b.charAt(c);
                if (l(d)) return a;
                else if (d === "@") {
                  if (a) return !1;
                  a = !0;
                } else if (a) return !1;
              }
            }
          }
          return a;
        };
        e.$14 = function () {
          return e.$3 && e.$1 && e.$13()
            ? j.jsx(c("PolarisTypeaheadContainer.react"), {
                className: "_aa74",
                cursorIndex: e.getMentionIndex(),
                initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT
                  .USER,
                inputString: e.getMentionQuery(),
                onResultSelect: e.$12,
                searchOnMount: !0,
                useSearchTriggers: !1,
              })
            : null;
        };
        e.state = { cursorIndex: 0 };
        return e;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.props.textShadow,
          b = a.shadowBlur,
          d = a.shadowColor,
          e = a.shadowOffsetX;
        a = a.shadowOffsetY;
        return j.jsxs(j.Fragment, {
          children: [
            j.jsxs("div", {
              className: "_aa75",
              onClick: this.$6,
              onKeyPress: this.$8,
              role: "button",
              style: { height: this.props.canvasHeight + "px" },
              tabIndex: -1,
              children: [
                !this.props.hasResults &&
                  j.jsx("button", {
                    className: "_aa76",
                    onClick: this.$6,
                    children: k,
                  }),
                j.jsx("span", {
                  className: "_aa77",
                  contentEditable: !0,
                  onClick: this.$8,
                  onInput: this.$4,
                  onKeyPress: this.$8,
                  onPaste: this.$7,
                  ref: this.$9,
                  role: "textbox",
                  style: {
                    color: this.props.color,
                    textShadow: e + "px " + a + "px " + b + "px " + d,
                    fontSize: this.props.fontSize,
                    fontWeight: this.props.fontWeight,
                    lineHeight: this.props.fontSize + "px",
                  },
                  tabIndex: -1,
                }),
                j.jsx(c("PolarisLineBreakMeasurer.react"), {
                  className: "_aa77",
                  ref: this.$10,
                  style: {
                    zIndex: -999,
                    color: this.props.color,
                    textShadow: e + " " + a + " " + b + " " + d,
                    fontSize: this.props.fontSize,
                    fontWeight: this.props.fontWeight,
                    lineHeight: this.props.fontSize + "px",
                  },
                }),
              ],
            }),
            !this.props.hasResults &&
              j.jsx(c("PolarisStoryCreationColorPicker.react"), {
                className: "_aa78",
                refocus: this.$5,
              }),
            this.$14(),
          ],
        });
      };
      return b;
    })(j.Component);
    function a(a) {
      return babelHelpers["extends"](
        {},
        a.storyCreation.canvasStickers[
          a.storyCreation.canvasStickers.length - 1
        ],
        {
          canvasHeight: a.storyCreation.canvasDimensions.height,
          hasResults: a.search.results.length > 0,
        }
      );
    }
    e = {
      onChangeActiveText: d("PolarisStoryCreationActions").changeActiveText,
      onSaveText: d("PolarisStoryCreationActions").saveText,
    };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryImageCreationContainer.react",
  [
    "cx",
    "PolarisAssetManagerGlyphMapping",
    "PolarisDOMListener.react",
    "PolarisGenericStrings",
    "PolarisIGCoreIcon",
    "PolarisReactRedux",
    "PolarisSnackbar.react",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationCreativeCanvas.react",
    "PolarisStoryCreationDrawing.react",
    "PolarisStoryCreationShareFooter.react",
    "PolarisStoryCreationStickerPicker.react",
    "PolarisStoryCreationStrings",
    "PolarisStoryCreationTextInput.react",
    "PolarisStoryCreationUtils",
    "PolarisStoryTypeaheadConstants",
    "PolarisToastWrapper.react",
    "PolarisUA",
    "blueimp-canvas-to-blob",
    "nullthrows",
    "polarisExifOrientations",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = "error";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$6 = function (a) {
          a &&
            (a.returnValue = d(
              "PolarisStoryCreationStrings"
            ).EXIT_STORY_CREATION_CONFIRM_TITLE);
          return d("PolarisStoryCreationStrings")
            .EXIT_STORY_CREATION_CONFIRM_TITLE;
        };
        e.$5 = function (a, b, c) {
          for (var d = 0; d < a.length; d++) {
            var f = a[d];
            f.width = b;
            f.height = c;
            f.style.width = e.props.viewportWidth + "px";
            f.style.height = e.props.viewportHeight + "px";
          }
          e.props.onSetCanvasDimensions(
            e.props.viewportWidth,
            e.props.viewportHeight
          );
          f = document.getElementsByTagName("body")[0];
          f.style.overflow = "auto";
        };
        e.$7 = function (a) {
          var b = e.props.isUsingModal,
            c = a.target;
          c =
            !(c instanceof HTMLElement) ||
            (c.id !== d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.STICKER &&
              c.id !== d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.GRID_DIV &&
              (!(c.offsetParent instanceof HTMLElement) ||
                !(c.offsetParent.offsetParent instanceof HTMLElement) ||
                c.offsetParent.offsetParent.id !==
                  d("PolarisStoryCreationUtils").TRAY_ITEM_IDS.GRID_DIV) &&
              (!(c instanceof HTMLElement) ||
                (c.id !==
                  d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID &&
                  c.id !==
                    d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID &&
                  (!(c.offsetParent instanceof HTMLElement) ||
                    !(c.offsetParent.offsetParent instanceof HTMLElement) ||
                    c.offsetParent.offsetParent.id !==
                      d("PolarisStoryTypeaheadConstants").TOUCH_MENTION_ID))));
          !b && c && a.preventDefault();
        };
        e.$8 = function () {
          var a = document.createElement("canvas"),
            b = a.getContext("2d");
          e.$1 != null &&
            ((a.width = e.$1.width),
            (a.height = e.$1.height),
            b.drawImage(e.$1, 0, 0));
          e.$2 != null && b.drawImage(e.$2, 0, 0);
          e.$3 != null && b.drawImage(e.$3, 0, 0);
          b = window.open();
          b.document.write(
            '<img style="max-width: 100%; max-height: 100%" src=\'' +
              a.toDataURL("image/jpeg") +
              "'/>"
          );
          e.props.onSaveStory();
        };
        e.$9 = function (a) {
          e.props.onEnterAddText(), a.preventDefault();
        };
        e.$10 = function (a) {
          e.props.onOpenStickerTool(), a.preventDefault();
        };
        e.$11 = function (a) {
          e.props.onEditDrawing(), a.preventDefault();
        };
        e.$12 = function () {
          var a = document.createElement("canvas"),
            b = a.getContext("2d");
          e.$1 != null &&
            ((a.width = e.$1.width),
            (a.height = e.$1.height),
            b.drawImage(e.$1, 0, 0));
          e.$2 != null && b.drawImage(e.$2, 0, 0);
          e.$3 != null && b.drawImage(e.$3, 0, 0);
          b = c("nullthrows")(a).toDataURL("image/jpeg");
          e.$13(c("blueimp-canvas-to-blob")(b));
        };
        e.$13 = function (a) {
          e.props.onUploadStory(a, function () {
            e.$13(a);
          });
        };
        e.$14 = function (a) {
          e.$2 = a;
        };
        e.$15 = function (a) {
          e.$3 = a;
        };
        e.$16 = function (a) {
          return (
            e.props.isLandscape &&
            (a
              ? i.jsx(c("PolarisSnackbar.react"), {
                  className: "_aa3b",
                  text: d("PolarisStoryCreationStrings")
                    .STORY_LANDSCAPE_WARNING_TEXT,
                })
              : i.jsx(c("PolarisSnackbar.react"), {
                  className: "_aa3b",
                  text: d("PolarisStoryCreationStrings")
                    .STORY_LANDSCAPE_WARNING_TEXT,
                }))
          );
        };
        return e;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this;
        if (this.$1 != null) {
          var b = this.$1.getContext("2d"),
            c = new Image();
          c.onload = function () {
            var e = a.props,
              f = d("polarisExifOrientations").getOrientationData(
                e.sourceImage.orientation
              );
            f = f.degreesToRotate;
            var g = f % 180 === 90,
              h = e.viewportWidth * e.pixelRatio,
              i = e.viewportHeight * e.pixelRatio,
              j = g ? i : h;
            g = g ? h : i;
            var k = d("PolarisStoryCreationUtils").getCropInfo(
              e.sourceImage,
              j,
              g
            );
            b.scale(e.pixelRatio, e.pixelRatio);
            if (a.$1 != null) {
              e = [a.$1];
              a.$2 != null && e.push(a.$2);
              a.$3 != null && e.push(a.$3);
              a.$5(e, h, i);
              b.save();
              b.translate(h / 2, i / 2);
              b.rotate((f * Math.PI) / 180);
              b.drawImage(
                c,
                k.offsetLeft,
                k.offsetTop,
                k.croppedWidth,
                k.croppedHeight,
                -j / 2,
                -g / 2,
                j,
                g
              );
              b.restore();
              a.$4 && a.$4.draw();
            }
          };
          c.src = this.props.sourceImage.dataURL;
        }
        (this.props.stickerResults === j ||
          this.props.stickerResults.length === 0) &&
          this.props.onCacheStickerResults();
        var e = document.getElementsByTagName("body")[0];
        e.style.overflow = "hidden";
      };
      e.render = function () {
        var a = this,
          b = this.props.isEditingDrawing,
          e = this.props.stickerToolOpen,
          f = this.props.isMovingSticker,
          g =
            !b &&
            !this.props.isEditingText &&
            !this.props.stickerToolOpen &&
            !f;
        f = !b && !this.props.isEditingText && !this.props.stickerToolOpen && f;
        return i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("PolarisDOMListener.react"), {
              event: "touchmove",
              handler: this.$7,
              passive: !1,
              target: document,
            }),
            i.jsx(c("PolarisDOMListener.react"), {
              event: "beforeunload",
              handler: this.$6,
              passive: !1,
              target: window,
            }),
            i.jsx("canvas", {
              className: "_aa3c",
              height: "0",
              ref: function (b) {
                return (a.$1 = b);
              },
              width: "0",
            }),
            i.jsx(c("PolarisStoryCreationCreativeCanvas.react"), {
              drawingCanvasRef: this.$14,
              ref: function (b) {
                return (a.$4 = b);
              },
              stickerCanvasRef: this.$15,
            }),
            !this.props.isLandscape &&
              i.jsxs("header", {
                className: "_aa3d",
                children: [
                  g &&
                    i.jsx("button", {
                      className: "_aa3e _9_21",
                      onClick: this.props.handleExitClick,
                      children: i.jsx("span", {
                        className: "_a9_u",
                        children: d("PolarisGenericStrings").CLOSE_TEXT,
                      }),
                    }),
                  g &&
                    i.jsxs("div", {
                      className: "_aa3f",
                      children: [
                        !d("PolarisUA").isOpera() &&
                          !d("PolarisUA").isWebview() &&
                          !d("PolarisUA").isUCBrowser() &&
                          i.jsx("button", {
                            className: "_aa3g _9_1y",
                            onClick: this.$8,
                          }),
                        i.jsx("button", {
                          className: "_aa3h _9_1_",
                          onClick: this.$10,
                        }),
                        i.jsx("button", {
                          className: "_aa3i _9_1z",
                          onClick: this.$11,
                        }),
                        i.jsx("button", {
                          className: "_aa3j _9_20",
                          onClick: this.$9,
                        }),
                      ],
                    }),
                ],
              }),
            this.$16(g),
            !this.props.isLandscape &&
              i.jsxs(i.Fragment, {
                children: [
                  g &&
                    i.jsx(c("PolarisStoryCreationShareFooter.react"), {
                      onShareToStoryClick: this.$12,
                    }),
                  f &&
                    i.jsx("footer", {
                      className: "_aa3k",
                      children: i.jsx("div", {
                        className: "_aa3l",
                        children: i.jsx("div", {
                          className:
                            "_aa3m" + (this.props.overTrash ? " _aa3n" : ""),
                          id: d("PolarisStoryCreationUtils").TRASH_ID,
                          children: i.jsx(c("PolarisIGCoreIcon"), {
                            alt: "Delete sticker icon",
                            icon: d("PolarisAssetManagerGlyphMapping").ICONS
                              .DELETE_OUTLINE_24_GREY0,
                          }),
                        }),
                      }),
                    }),
                  this.props.isEditingText &&
                    i.jsx(c("PolarisStoryCreationTextInput.react"), {}),
                  b && i.jsx(c("PolarisStoryCreationDrawing.react"), {}),
                  e && i.jsx(c("PolarisStoryCreationStickerPicker.react"), {}),
                ],
              }),
            i.jsx(c("PolarisToastWrapper.react"), {}),
          ],
        });
      };
      return b;
    })(i.Component);
    e = {
      onCacheStickerResults: d("PolarisStoryCreationActions")
        .cacheStickerResults,
      onEditDrawing: d("PolarisStoryCreationActions").editDrawing,
      onEnterAddText: d("PolarisStoryCreationActions").enterAddText,
      onEnterEditText: d("PolarisStoryCreationActions").enterEditText,
      onOpenStickerTool: d("PolarisStoryCreationActions").openStickerTool,
      onSaveStory: d("PolarisStoryCreationActions").saveStory,
      onSetCanvasDimensions: d("PolarisStoryCreationActions")
        .setCanvasDimensions,
      onUploadStory: d("PolarisStoryCreationActions").uploadStory,
      onUseModal: d("PolarisStoryCreationActions").useModal,
    };
    function a(a) {
      return {
        isEditingDrawing: a.storyCreation.isEditingDrawing,
        isEditingText: a.storyCreation.isEditingText,
        isMovingSticker: a.storyCreation.isMovingSticker,
        isTextSaved: a.storyCreation.isTextSaved,
        isUsingModal: a.storyCreation.isUsingModal,
        overTrash: a.storyCreation.overTrash,
        pixelRatio: a.displayProperties.pixelRatio,
        sourceImage: c("nullthrows")(a.storyCreation.sourceImage),
        stickerResults: a.storyCreation.stickerResults,
        stickerToolOpen: a.storyCreation.stickerToolOpen,
        viewportHeight: a.displayProperties.viewportHeight,
        viewportOrientation: a.displayProperties.orientation,
        viewportWidth: a.displayProperties.viewportWidth,
      };
    }
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryVideoCreationContainer.react",
  [
    "cx",
    "PolarisAssetManagerGlyphMapping",
    "PolarisGenericStrings",
    "PolarisIGCoreIconButton",
    "PolarisReactRedux",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationShareFooter.react",
    "PolarisToastWrapper.react",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b) || this;
        d.$2 = function (a) {
          ((a.key === "Enter" && !a.shiftKey) || a.key === " ") && d.$3();
        };
        d.$4 = function () {
          d.$3();
        };
        d.$3 = function () {
          d.state.isPlaying ? d.pause() : d.play();
        };
        d.$5 = function () {
          d.setState({ isPlaying: !1, showPosterImage: !0 }), d.pause();
        };
        d.play = function () {
          d.setState({ isPlaying: !0, showPosterImage: !1 }),
            c("nullthrows")(d.$1).play();
        };
        d.pause = function () {
          d.setState({ isPlaying: !1 }), c("nullthrows")(d.$1).pause();
        };
        d.state = { isPlaying: !1, showPosterImage: !0 };
        return d;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.coverPhoto;
        b = b.sourceVideo;
        var f = this.state,
          g = f.isPlaying;
        f = f.showPosterImage;
        return i.jsxs(i.Fragment, {
          children: [
            i.jsx("header", {
              className: "_aa3o",
              children: i.jsx(c("PolarisIGCoreIconButton"), {
                alt: d("PolarisGenericStrings").CLOSE_TEXT,
                icon: d("PolarisAssetManagerGlyphMapping").ICONS.X_OUTLINE_44,
                onClick: this.props.handleExitClick,
              }),
            }),
            i.jsxs("div", {
              className: "_aa3p",
              onClick: this.$4,
              onKeyPress: this.$2,
              role: "button",
              tabIndex: "0",
              children: [
                i.jsx("video", {
                  className: "_aa3q",
                  controls: !1,
                  onEnded: this.$5,
                  poster: e == null ? void 0 : e.dataURL,
                  ref: function (b) {
                    return (a.$1 = b);
                  },
                  src: b == null ? void 0 : b.dataURL,
                }),
                f &&
                  i.jsx("img", {
                    alt: "",
                    className: "_aa3r",
                    src: e == null ? void 0 : e.dataURL,
                  }),
                i.jsx("span", {
                  className: (g ? "" : "_aa3s") + " _9zwu _aa3t _aa3u",
                  children: i.jsx("span", {
                    className: "_aa3v",
                    children: d("PolarisGenericStrings")
                      .ASSISTIVE_TEXT_PLAY_BUTTON,
                  }),
                }),
              ],
            }),
            i.jsx(c("PolarisStoryCreationShareFooter.react"), {
              onShareToStoryClick: this.props.onUploadStoryVideo,
            }),
            i.jsx(c("PolarisToastWrapper.react"), {}),
          ],
        });
      };
      return b;
    })(i.Component);
    function a(a) {
      return {
        coverPhoto: a.storyCreation.coverPhoto,
        sourceVideo: a.storyCreation.sourceVideo,
      };
    }
    e = {
      onUploadStoryVideo: d("PolarisStoryCreationActions").uploadStoryVideo,
    };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryCreationPage.react",
  [
    "IGRouter",
    "PolarisBaseShell.react",
    "PolarisConfirmDialog.react",
    "PolarisCreationCameraLogger",
    "PolarisGenericStrings",
    "PolarisMediaConstants",
    "PolarisPageMetadata.react",
    "PolarisReactRedux",
    "PolarisSharingProgressModal.react",
    "PolarisStoryCreationActions",
    "PolarisStoryCreationStrings",
    "PolarisStoryImageCreationContainer.react",
    "PolarisStoryVideoCreationContainer.react",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        shell: {
          alignItems: "x6s0dn4",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "xixxii4",
          start: "x17qophe",
          top: "x13vifvy",
          touchAction: "x5ve5x3",
          width: "xh8yej3",
          $$css: !0,
        },
        shellLandscape: {
          backgroundColor: "x1c25uh8",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      },
      j = "StoryCreationPage";
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = !1),
          (c.handleOnExit = function () {
            (c.$1 = !0),
              c.props.onExitStoryCreationConfirm(),
              c.props.history.replace("/");
          }),
          (c.handleOnExitCancel = function () {
            c.props.onExitStoryCreationCancel();
          }),
          (c.handleExitClick = function () {
            c.props.onAttemptExitStoryCreation();
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.props.sessionId;
        a != null &&
          d("PolarisCreationCameraLogger").logStoryCreationStartPostCapture({
            sessionId: a,
          });
      };
      e.componentWillUnmount = function () {
        this.$1 || this.props.onExitStoryCreationConfirm();
      };
      e.$2 = function () {
        return this.props.viewportOrientation && !d("PolarisUA").isUCBrowser()
          ? this.props.viewportOrientation.startsWith("landscape")
          : this.props.viewportWidth > this.props.viewportHeight;
      };
      e.render = function () {
        var a = this.props,
          b = a.isExitingStoryCreation;
        a = a.mediaType;
        a = a === d("PolarisMediaConstants").MediaTypes.VIDEO;
        var e = a
            ? d("PolarisStoryCreationStrings")
                .EXIT_STORY_VIDEO_CREATION_CONFIRM_TITLE
            : d("PolarisStoryCreationStrings")
                .EXIT_STORY_CREATION_CONFIRM_TITLE,
          f = a
            ? d("PolarisStoryCreationStrings")
                .EXIT_STORY_VIDEO_CREATION_CONFIRM_TEXT
            : d("PolarisStoryCreationStrings").EXIT_STORY_CREATION_CONFIRM_TEXT,
          g = this.$2();
        return h.jsxs(c("PolarisBaseShell.react"), {
          "data-testid": void 0,
          xstyle: [i.shell, g && i.shellLandscape],
          children: [
            h.jsx(c("PolarisPageMetadata.react"), { id: j }),
            a
              ? h.jsx(c("PolarisStoryVideoCreationContainer.react"), {
                  handleExitClick: this.handleExitClick,
                })
              : h.jsx(c("PolarisStoryImageCreationContainer.react"), {
                  handleExitClick: this.handleExitClick,
                  isLandscape: g,
                }),
            b &&
              h.jsx(c("PolarisConfirmDialog.react"), {
                body: f,
                cancelLabel: d("PolarisStoryCreationStrings")
                  .EXIT_STORY_CREATION_DISCARD_TEXT,
                confirmLabel: d("PolarisStoryCreationStrings")
                  .EXIT_STORY_CREATION_KEEP_TEXT,
                onClose: this.handleOnExit,
                onConfirm: this.handleOnExitCancel,
                onModalClose: this.handleOnExitCancel,
                title: e,
              }),
            this.props.isUploading &&
              h.jsx(c("PolarisSharingProgressModal.react"), {
                sharingText: d("PolarisGenericStrings").UPLOADING_TEXT,
              }),
          ],
        });
      };
      return b;
    })(h.Component);
    function a(a) {
      return {
        isExitingStoryCreation: a.storyCreation.isExitingStoryCreation,
        isUploading: a.storyCreation.isUploading,
        mediaType: a.storyCreation.mediaType,
        sessionId: a.storyCreation.sessionId,
        viewportHeight: a.displayProperties.viewportHeight,
        viewportOrientation: a.displayProperties.orientation,
        viewportWidth: a.displayProperties.viewportWidth,
      };
    }
    function b(a) {
      return {
        onAttemptExitStoryCreation: function () {
          return a(d("PolarisStoryCreationActions").attemptExitStoryCreation());
        },
        onExitStoryCreationCancel: function () {
          return a(d("PolarisStoryCreationActions").cancelExitStoryCreation());
        },
        onExitStoryCreationConfirm: function () {
          return a(d("PolarisStoryCreationActions").exitStoryCreation());
        },
      };
    }
    f = d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a, b)(e));
    g.PAGE_ID = j;
    g.Page = e;
    g.StoryCreationPage = f;
  },
  98
);
__d(
  "PolarisCreateStoryRoot.react",
  ["PolarisStoryCreationPage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        children: h.jsx(
          d("PolarisStoryCreationPage.react").StoryCreationPage,
          {}
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCreationActionUpdateUsertags",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return { type: "CREATION_USERTAGS_UPDATED", usertags: a };
    }
    f.updateUsertags = a;
  },
  66
);
__d(
  "PolarisCreationUsertag.react",
  [
    "cx",
    "PolarisPhotoWithIndicator.react",
    "PolarisUserTagInner.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.imgDimensions,
        e = a.onDelete,
        f = a.onMove,
        g = a.tag;
      a = l([0, 0]);
      var h = a[0],
        m = a[1];
      a = k(null);
      var n = l(!1),
        o = n[0],
        p = n[1];
      n = j(
        function (a) {
          a.target instanceof HTMLSpanElement && a.target.id === "deleteButton"
            ? e(g.userId)
            : p(!o);
        },
        [o, e, g.userId]
      );
      var q = j(function (a) {
          m([
            a.currentTarget.offsetLeft - a.touches[0].clientX,
            a.currentTarget.offsetTop - a.touches[0].clientY,
          ]);
        }, []),
        r = j(
          function (a) {
            a.preventDefault();
            if (b.height == null || b.width == null) return;
            var c = a.touches[0].clientX + h[0];
            a = a.touches[0].clientY + h[1];
            c = c / b.width;
            a = a / b.height;
            f({ userId: g.userId, username: g.username, position: [c, a] });
            p(!1);
          },
          [b, f, g, h]
        ),
        s = function () {
          m([0, 0]);
        },
        t = g.position[0],
        u = g.position[1],
        v =
          u <=
          d("PolarisPhotoWithIndicator.react").TAG_ORIENTATION_CHANGE_POINT,
        w =
          a.current && b.width != null && b.width > 0
            ? a.current.offsetWidth / b.width / 2
            : 0;
      u = {
        left: t * 100 + "%",
        paddingBottom:
          (v ? 0 : d("PolarisPhotoWithIndicator.react").TAG_POINTER_HEIGHT) +
          "px",
        paddingTop:
          (v ? d("PolarisPhotoWithIndicator.react").TAG_POINTER_HEIGHT : 0) +
          "px",
        top: u * 100 + "%",
        transform:
          "translate(\n        " +
          d("PolarisPhotoWithIndicator.react").getHorizontalOffset(t, w) +
          "%,\n        " +
          (v ? 0 : -100) +
          "%\n      )",
      };
      t = {
        left:
          -d("PolarisPhotoWithIndicator.react").getHorizontalOffset(t, w) + "%",
      };
      return i.jsx("div", {
        className: "_aa0v",
        onTouchEnd: s,
        onTouchMove: r,
        onTouchStart: q,
        ref: a,
        style: u,
        children: i.jsx("div", {
          className: "_aa0w",
          children: i.jsxs("button", {
            className: "_aa0x",
            onClick: n,
            children: [
              i.jsx(c("PolarisUserTagInner.react"), {
                isPointingUp: v,
                pointerStyle: t,
                username: g.username,
              }),
              o &&
                i.jsx("span", { className: "_9-lv _aa0y", id: "deleteButton" }),
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
  "PolarisCreationTagImage.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisCreationStrings",
    "PolarisCreationUsertag.react",
    "PolarisDoubleTappable",
    "PolarisNavigationalHeader.react",
    "PolarisPhotoWithIndicator.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useMemo,
      l = b.useRef,
      m = 150;
    function n(a) {
      return a >= d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
        ? a <= 1 - d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
          ? a
          : 1 - d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
        : d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD;
    }
    function a(a) {
      var b = a.onCancel,
        e = a.onDeleteTag,
        f = a.onMoveTag,
        g = a.onNextStep,
        h = a.onPositionChange,
        o = a.src,
        p = a.usertags,
        q = l(null),
        r = l(null);
      a = (function () {
        return q.current != null &&
          (q.current.naturalWidth || q.current.naturalHeight < 0)
          ? !1
          : !0;
      })();
      function s(a) {
        a.touches.length === 1 &&
          a.touches[0].target.className === "_a9_i" &&
          (r.current = a.touches[0]);
      }
      function t(a) {
        (r.current &&
          d("PolarisDoubleTappable").areTouchesInThreshold(
            r.current,
            a.touches[0]
          )) ||
          (r.current = null);
      }
      function u(a) {
        if (a.touches.length === 0 && r.current) {
          var b = w.height;
          a = w.left;
          var c = w.top,
            d = w.width;
          if (b == null || a == null || c == null || d == null) return;
          var e = r.current.clientX - a,
            f = r.current.clientY - c;
          r.current = null;
          window.setTimeout(function () {
            return h([n(e / d), n(f / b)]);
          }, m);
        }
      }
      function v() {
        return Array.from(p.values()).map(function (a) {
          return j.jsx(
            c("PolarisCreationUsertag.react"),
            {
              imgDimensions: { height: w.height, width: w.width },
              onDelete: e,
              onMove: f,
              tag: a,
            },
            a.userId
          );
        });
      }
      var w = k(
        function () {
          if (q.current != null) {
            var a = q.current,
              b = a.naturalHeight;
            a = a.naturalWidth;
            var c = window.innerWidth,
              d = a >= b ? c : (c * a) / b;
            b = b >= a ? c : (c * b) / a;
            a = (c - d) / 2;
            c = 45 + (c - b) / 2;
            return { height: b, left: a, top: c, width: d };
          }
          return {};
        },
        [q.current]
      );
      return j.jsxs("div", {
        className: "_a9_j",
        children: [
          j.jsx(c("PolarisNavigationalHeader.react"), {
            className: "_a9_k",
            nextStepLabel: d("PolarisCreationStrings")
              .TAG_PAGE_PHOTO_DONE_HEADER_TEXT,
            onCancel: b,
            onNextStep: g,
            title: d("PolarisCreationStrings").TAG_PAGE_HEADER_TEXT,
          }),
          j.jsx("div", {
            className: "_a9_l",
            children: j.jsxs("div", {
              className: "_a9_m",
              onTouchEnd: u,
              onTouchMove: t,
              onTouchStart: s,
              style: { height: "" + (a ? "100%" : "") },
              children: [
                j.jsx("img", {
                  alt: i._("Photo for tag placement"),
                  className: "_a9_i",
                  ref: function (a) {
                    return (q.current = a);
                  },
                  src: o,
                }),
                v(),
              ],
            }),
          }),
          j.jsx("div", {
            className: "_a9_n",
            children: p.size
              ? j.jsxs(j.Fragment, {
                  children: [
                    j.jsx(c("IGDSBox.react"), {
                      marginBottom: 4,
                      position: "relative",
                      children: j.jsx(c("IGDSText.react").Label, {
                        color: "secondaryText",
                        children: i._("Tap photo to tag people."),
                      }),
                    }),
                    j.jsx(c("IGDSBox.react"), {
                      marginBottom: 4,
                      position: "relative",
                      children: j.jsx(c("IGDSText.react").Label, {
                        color: "secondaryText",
                        children: i._("Drag to move, or tap to remove."),
                      }),
                    }),
                  ],
                })
              : j.jsx(c("IGDSText.react").Label, {
                  color: "secondaryText",
                  children: i._("Tap photo to tag people."),
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
  "PolarisCreationTagUserListItem.react",
  [
    "fbt",
    "IGDSListItem.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisIGCoreConstants",
    "PolarisIGCoreIconButton",
    "PolarisReactRedux",
    "PolarisUserAvatar.react",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.id;
      a = a.onActionClick;
      var e = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getUserById(a, b);
        }),
        f = e.fullName,
        g = e.profilePictureUrl,
        j = e.suggestionDescription;
      e = e.username;
      return i.jsx(c("IGDSListItem.react"), {
        addOnEnd: i.jsx(c("PolarisIGCoreIconButton"), {
          alt: h._("Delete tagged user"),
          icon: d("PolarisAssetManagerGlyphMapping").ICONS.GREY_CLOSE,
          onClick: a,
        }),
        addOnStart: i.jsx(c("PolarisUserAvatar.react"), {
          profilePictureUrl: c("nullthrows")(g),
          size: c("PolarisIGCoreConstants").AVATAR_SIZES.medium,
          username: e,
        }),
        context: j,
        subtitle: f,
        testid: void 0,
        title: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCreationTagVideo.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisCreationStrings",
    "PolarisCreationTagUserListItem.react",
    "PolarisIGCoreButton",
    "PolarisIGCoreIcon",
    "PolarisNavigationalHeader.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.onCancel,
        e = a.onDeleteTag,
        f = a.onNextStep,
        g = a.onUserSearchOpen,
        h = a.src,
        k = a.usertags,
        l = function () {
          return j.jsx("div", {
            className: "_a9zw",
            children: j.jsx(c("PolarisIGCoreButton"), {
              borderless: !0,
              onClick: g,
              children: j.jsxs(c("IGDSBox.react"), {
                alignItems: "center",
                direction: "row",
                marginBottom: 2,
                marginStart: 6,
                marginTop: 2,
                position: "relative",
                children: [
                  j.jsx(c("IGDSBox.react"), {
                    marginEnd: 4,
                    position: "relative",
                    children: j.jsx(c("PolarisIGCoreIcon"), {
                      alt: i._("Tag another person"),
                      icon: d("PolarisAssetManagerGlyphMapping").ICONS
                        .ADD_OUTLINE_24_BLUE5,
                    }),
                  }),
                  j.jsx(c("IGDSText.react"), {
                    color: "primaryButton",
                    weight: "normal",
                    children: i._("Tag Another Person"),
                  }),
                ],
              }),
            }),
          });
        };
      a = function () {
        return j.jsxs(c("IGDSBox.react"), {
          flex: "grow",
          overflow: "scroll",
          position: "relative",
          width: "100%",
          children: [
            l(),
            Array.from(k.values()).map(function (a) {
              var b = a.userId;
              return j.jsx(
                c("PolarisCreationTagUserListItem.react"),
                {
                  id: b,
                  onActionClick: function () {
                    return e(b);
                  },
                },
                b
              );
            }),
          ],
        });
      };
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("PolarisNavigationalHeader.react"), {
            className: "_a9zx",
            nextStepLabel: d("PolarisCreationStrings")
              .TAG_PAGE_DONE_HEADER_TEXT,
            onCancel: b,
            onNextStep: f,
            title: d("PolarisCreationStrings").TAG_PAGE_HEADER_TEXT,
          }),
          j.jsx("div", {
            children: j.jsx("button", {
              className: "_a9zy",
              onClick: g,
              children: j.jsx("img", {
                alt: i._("video"),
                className: "_a9zz",
                src: h,
              }),
            }),
          }),
          k.size
            ? a()
            : j.jsx("button", {
                className: "_a9z-",
                "data-testid": void 0,
                onClick: g,
                children: j.jsxs(c("IGDSBox.react"), {
                  alignItems: "center",
                  flex: "grow",
                  justifyContent: "center",
                  position: "relative",
                  children: [
                    j.jsx(c("IGDSBox.react"), {
                      marginBottom: 4,
                      position: "relative",
                      children: j.jsx(c("PolarisIGCoreIcon"), {
                        alt: i._("Tap to tag people"),
                        icon: d("PolarisAssetManagerGlyphMapping").ICONS
                          .CIRCLE_ADD_OUTLINE_24_GREY5,
                      }),
                    }),
                    j.jsx(c("IGDSText.react").Label, {
                      color: "secondaryText",
                      children: i._("Tap to tag people"),
                    }),
                  ],
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
  "PolarisCreationSuggestedTagItem.react",
  ["cx", "PolarisUserAvatar.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.onClick,
        d = a.user;
      return i.jsx("button", {
        className: "_a9-8",
        onClick: function () {
          return b(d);
        },
        children: i.jsxs("div", {
          className: "_a9-9",
          children: [
            i.jsx("span", {
              className: "_a9-a",
              children: i.jsx(c("PolarisUserAvatar.react"), {
                isLink: !1,
                profilePictureUrl: d.profilePictureUrl || "",
                size: 44,
                username: d.username,
              }),
            }),
            i.jsxs("div", {
              className: "_a9-b",
              children: [
                i.jsxs("div", {
                  className: "_a9-c",
                  children: [
                    i.jsx("span", { className: "_a9-d", children: d.username }),
                    d.isVerified && i.jsx("div", { className: "_a9-e _9ys8" }),
                  ],
                }),
                i.jsx("span", { className: "_a9-f", children: d.fullName }),
              ],
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
  "PolarisCreationUserSearch.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisCreationStrings",
    "PolarisCreationSuggestedTagItem.react",
    "PolarisIGCoreSearchInput",
    "PolarisNavigationalHeader.react",
    "PolarisSearchConstants",
    "PolarisTypeaheadContainer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isLoading,
        e = a.onQueryChange,
        f = a.onSearchCancel,
        g = a.onSearchClear,
        h = a.onSuggestedSelection,
        k = a.onTypeaheadSelection,
        l = a.pendingQuery;
      a = a.suggested;
      return j.jsxs("div", {
        className: "_a9_o",
        children: [
          j.jsx(c("PolarisNavigationalHeader.react"), {
            className: "_a9_p",
            onCancel: f,
            title: d("PolarisCreationStrings").TAG_PAGE_HEADER_TEXT,
          }),
          j.jsx("div", {
            className: "_a9_q",
            children: j.jsx(c("PolarisIGCoreSearchInput"), {
              loading: b,
              onChange: e,
              onClear: g,
              placeholder: d("PolarisCreationStrings").SEARCH_PLACEHOLDER,
              value: l,
            }),
          }),
          l.length > 0 &&
            j.jsx(c("PolarisTypeaheadContainer.react"), {
              className: "_a9_r",
              cursorIndex: l.length,
              initialSearchContext: d("PolarisSearchConstants").SEARCH_CONTEXT
                .USER,
              inputString: l,
              onResultSelect: k,
              showLargeAvatars: !0,
              showResultsCondensed: !1,
              useSearchTriggers: !1,
            }),
          l.length === 0 &&
            !!a.length &&
            j.jsxs(c("IGDSBox.react"), {
              color: "primaryBackground",
              flex: "grow",
              position: "relative",
              children: [
                j.jsx(c("IGDSBox.react"), {
                  marginBottom: 2,
                  marginEnd: 4,
                  marginStart: 4,
                  marginTop: 4,
                  position: "relative",
                  children: j.jsx(c("IGDSText.react").Section, {
                    children: i._("Suggested"),
                  }),
                }),
                a.map(function (a) {
                  return j.jsx(
                    c("PolarisCreationSuggestedTagItem.react"),
                    { onClick: h, user: a },
                    a.pk
                  );
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
  "PolarisCreationTagPage.react",
  [
    "PolarisCreationActionUpdateUsertags",
    "PolarisCreationShell.react",
    "PolarisCreationTagImage.react",
    "PolarisCreationTagVideo.react",
    "PolarisCreationUserSearch.react",
    "PolarisMediaConstants",
    "PolarisPageMetadata.react",
    "PolarisPhotoWithIndicator.react",
    "PolarisReactRedux",
    "PolarisSearchActions",
    "PolarisSearchConstants",
    "browserHistory",
    "immutable-4.0.0-rc.9",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = "CreationTagPage",
      j = {
        shell: {
          backgroundColor: "xnz67gz",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          touchAction: "x5ve5x3",
          $$css: !0,
        },
      };
    function k(a) {
      return a >= d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
        ? a <= 1 - d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
          ? a
          : 1 - d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD
        : d("PolarisPhotoWithIndicator.react").EDGE_THRESHOLD;
    }
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), i = 0; i < f; i++)
          g[i] = arguments[i];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            pendingQuery: "",
            pendingPosition: [],
            usertags: d("immutable-4.0.0-rc.9").Map(),
            isUserSearchOpen: !1,
          }),
          (e.$1 = function (a) {
            e.setState(function (b) {
              return {
                pendingPosition: [],
                pendingQuery: "",
                usertags: b.usertags.set(a.userId, a),
              };
            });
          }),
          (e.handleCancel = function () {
            d("browserHistory").browserHistory.replace("/create/details/");
          }),
          (e.handleNext = function () {
            e.props.onUpdateUsertags(e.state.usertags),
              d("browserHistory").browserHistory.replace("/create/details/");
          }),
          (e.handleMoveTag = function (a) {
            e.setState(function (b) {
              return {
                usertags: b.usertags.set(
                  a.userId,
                  babelHelpers["extends"]({}, a, {
                    position: [k(a.position[0]), k(a.position[1])],
                  })
                ),
              };
            });
          }),
          (e.handleDeleteTag = function (a) {
            e.setState(function (b) {
              return { usertags: b.usertags["delete"](a) };
            });
          }),
          (e.handleSearchCancel = function () {
            e.handleSearchClear(), e.setState({ pendingPosition: [] });
          }),
          (e.handleSearchClear = function () {
            e.setState({ pendingQuery: "" });
          }),
          (e.handleQueryChange = function (a) {
            e.setState({ pendingQuery: a.target.value });
          }),
          (e.handleTypeaheadSelection = function (a, b) {
            a.type === d("PolarisSearchConstants").USER_RESULT &&
              (e.$1({
                userId: String(a.pk),
                username: a.username,
                position: e.state.pendingPosition,
              }),
              e.handleUserSearchClose());
          }),
          (e.handleSuggestedSelection = function (a) {
            e.$1({
              userId: a.pk,
              username: a.username,
              position: e.state.pendingPosition,
            }),
              e.handleUserSearchClose();
          }),
          (e.handlePositionChange = function (a) {
            e.setState({ pendingPosition: a }), e.handleUserSearchOpen();
          }),
          (e.handleUserSearchClose = function () {
            e.setState({ isUserSearchOpen: !1 });
          }),
          (e.handleUserSearchOpen = function () {
            e.setState({ isUserSearchOpen: !0 });
          }),
          (e.$2 = function () {
            return e.props.mediaType ===
              d("PolarisMediaConstants").MediaTypes.IMAGE
              ? h.jsx(c("PolarisCreationTagImage.react"), {
                  onCancel: e.handleCancel,
                  onDeleteTag: e.handleDeleteTag,
                  onMoveTag: e.handleMoveTag,
                  onNextStep: e.handleNext,
                  onPositionChange: e.handlePositionChange,
                  src: e.props.src,
                  usertags: e.state.usertags,
                })
              : h.jsx(c("PolarisCreationTagVideo.react"), {
                  onCancel: e.handleCancel,
                  onDeleteTag: e.handleDeleteTag,
                  onNextStep: e.handleNext,
                  onUserSearchOpen: e.handleUserSearchOpen,
                  src: e.props.src,
                  usertags: e.state.usertags,
                });
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.props,
          b = a.onLoadSuggestedUsers,
          c = a.suggested,
          d = a.usertags;
        this.setState(function (a) {
          return { usertags: a.usertags.merge(d) };
        });
        (!c || !c.length) && b();
      };
      e.render = function () {
        return h.jsxs(c("PolarisCreationShell.react"), {
          xstyle: j.shell,
          children: [
            h.jsx(c("PolarisPageMetadata.react"), { id: i }),
            this.state.isUserSearchOpen
              ? h.jsx(c("PolarisCreationUserSearch.react"), {
                  isLoading: this.props.isLoading,
                  onQueryChange: this.handleQueryChange,
                  onSearchCancel: this.handleUserSearchClose,
                  onSearchClear: this.handleSearchCancel,
                  onSuggestedSelection: this.handleSuggestedSelection,
                  onTypeaheadSelection: this.handleTypeaheadSelection,
                  pendingQuery: this.state.pendingQuery,
                  suggested: this.props.suggested || [],
                })
              : this.$2(),
          ],
        });
      };
      return b;
    })(h.Component);
    function a(a) {
      var b = a.creation,
        c = b.coverPhoto,
        e = b.finalizedMedia,
        f = b.sessionId;
      b = b.stagedImage;
      a = a.search;
      var g = a.loading,
        h = a.rankToken;
      a = a.suggested;
      var i =
        b.dataURL === void 0
          ? d("PolarisMediaConstants").MediaTypes.VIDEO
          : d("PolarisMediaConstants").MediaTypes.IMAGE;
      b =
        i === d("PolarisMediaConstants").MediaTypes.IMAGE
          ? b.dataURL
          : c.dataURL;
      c = a;
      return {
        isLoading: g,
        rankToken: h,
        mediaType: i,
        sessionId: f,
        src: b,
        suggested: c,
        usertags: e.usertags || d("immutable-4.0.0-rc.9").Map(),
      };
    }
    function b(a) {
      return {
        onLoadSuggestedUsers: function () {
          a(d("PolarisSearchActions").requestSuggestedSearches());
        },
        onUpdateUsertags: function (b) {
          a(d("PolarisCreationActionUpdateUsertags").updateUsertags(b));
        },
      };
    }
    f = d("PolarisReactRedux").connect(a, b)(e);
    g.PAGE_ID = i;
    g.Page = e;
    g.mapStateToProps = a;
    g.CreationTagPage = f;
  },
  98
);
__d(
  "PolarisCreateTagRoot.react",
  ["PolarisCreationTagPage.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        style: { height: "100vh" },
        children: h.jsx(d("PolarisCreationTagPage.react").CreationTagPage, {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "oz-player-polaris/configs/PolarisOzPlayerConfigDefaults",
  [],
  function (a, b, c, d, e, f) {
    a = {
      abr_use_download_time: !1,
      allow_queueing_end_of_stream_when_update: !1,
      async_parse_manifest_xml: !1,
      back_off_pdash_504_retry: !0,
      bandwidth_ignore_on_stream_write_samples: !1,
      bandwidth_use_response_time_adjustment: !1,
      buffer_when_waiting: !1,
      call_end_of_stream_in_quick_starter: !0,
      check_buffer_range_once_for_playhead_update: !1,
      cleanup_video_node_on_destroy: !0,
      clear_buffer_when_switch_representation_initiator_is_user: !0,
      clear_prepended_segments_count_on_append: !0,
      compute_buffer_ahead_with_timeline_gaps: !1,
      copy_new_manifest: !1,
      detach_media_source_manager: !0,
      disable_audio_scheduler: !1,
      enable_abr_for_first_request: !1,
      enable_adaptation: !0,
      enable_appends_on_wait_update_end_failure: !1,
      enable_network_manager_error: !1,
      enable_quickdashv2: !0,
      estimate_video_bandwidth_only: !0,
      exclude_prefetch_bandwidth_samples: !0,
      exclude_sidx_from_bandwidth_estimates: !0,
      fallback_on_append_error: !1,
      fix_abr_default_representation: !0,
      fix_quick_starter_overhead: !0,
      fix_seek_performance: !1,
      fix_templated_manifest_r_field_check: !0,
      fix_template_duration_artifact_in_manifest: !0,
      generate_mos_segment_appended_secs: !0,
      ignore_time_to_response_start: !1,
      lazy_parse_sidx: !1,
      live_audio_ibr: !0,
      live_catch_up_only_when_paused: !1,
      live_disable_mpd_updates_when_paused: !0,
      live_gracefully_handle_mpd_errors: !0,
      live_gracefully_handle_no_network: !0,
      live_no_segment_when_playhead_is_before_first_segment: !0,
      live_playhead_catch_up: !1,
      live_query_time_in_range: !0,
      log_appended_secs: !1,
      maybe_end_stream_if_prepended_segments: !0,
      no_new_loop_body_promise_when_stream_ongoing: !0,
      pausable_stream_throws_error_when_aborted: !0,
      pdash_continue_interrupt_from_error: !0,
      queue_data_with_error_handling: !1,
      reach_end_only_when_video_ended: !1,
      remove_src_attr_on_unload: !0,
      retry_fetch_on_prefetch_error: !1,
      sbm_recursively_waits_for_update_end: !1,
      sbm_waits_for_update_end: !0,
      seek_ahead_use_native_current_time: !0,
      seek_to_start_quick_starter: !0,
      set_source_buffer_append_window_end: !1,
      skip_videobuffer_gaps: !1,
      stop_manifest_update_when_static: !0,
      suppress_playing_event_while_buffering: !1,
      throw_network_error_during_stream: !1,
      throw_on_non_zero_r_d_mismatch: !0,
      touch_cb_key: !1,
      update_bandwidth_cache_on_sample: !1,
      update_duration_when_init_appended: !0,
      update_media_source_duration: !0,
      use_abr_for_missing_default_representation: !0,
      use_deferred_streaming_task: !0,
      use_get_dimensions_callback: !1,
      use_internal_buffering_detector: !0,
      use_loose_manifest_updates: !1,
      use_performance_entry_on_stream_close: !1,
      use_scf_timebased_segments: !1,
      use_scheduler: !0,
      use_sc_timebased_segments: !1,
      use_segment_request_cache: !1,
      use_stream_end_time_in_segment_locator: !1,
    };
    b = {
      abr_confidence_threshold: 0.9,
      abr_eval_buffer_threshold: 0,
      abr_min_bandwidth_samples: 0,
      abr_prevent_down_switch_buffer_threshold: 11,
      abr_restrict_from_index: 0,
      abr_restrict_to_index: 0,
      append_byte_target_without_range: 1e5,
      appends_per_segment: 3,
      auto_seek_playhead_slack: 0.5,
      bandwidth_boundary_standard_deviation_factor: 1,
      bandwidth_estimator_half_life: 6,
      bandwidth_estimator_outlier_exclusion_factor: 50,
      bandwidth_estimator_std_dev_penalty_factor: 0,
      bandwidth_estimator_variance_penalty_down_factor: 0,
      bandwidth_estimator_variance_penalty_half_life: 0,
      bandwidth_estimator_variance_penalty_up_factor: 0,
      bandwidth_penalty_additional_video_start: 0,
      bandwidth_penalty_per_additional_video: 0,
      bandwidth_response_time_handicap: 0,
      buffer_ahead_target: 22,
      byte_count_per_sample: 6e4,
      default_bandwidth_estimate: 1e6,
      download_time_buffer_delta_penalty_factor: 0,
      initial_switch_interval: 0,
      in_play_buffer_overflow_target: 1,
      in_play_buffer_underflow_target: 0.1,
      live_audio_ibr_bandwidth_percentage: 0.05,
      live_catch_up_fall_behind_threshold: 20,
      live_catch_up_live_head_delta: 6,
      live_max_try_attempts_on_404: 2,
      live_numerical_error_epsilon: 1e-4,
      low_buffer_bandwidth_target_increase_factor: 0,
      low_buffer_bandwidth_target_threshold: 10,
      low_segment_stream_playhead_threshold: 0,
      max_bandwidth_sample_count: 30,
      maximum_bandwidth_sample_bandwidth: 2e6,
      min_eval_interval: 1e3,
      minimum_bandwidth_sample_duration: 30,
      minimum_bytes_to_sample_on_close: 25e3,
      minimum_download_additional_buffer_ms: 0,
      min_switch_interval: 5e3,
      network_seg_timeout_ms: 0,
      num_predictive_segments: 1,
      paused_stream_segments_count: 2,
      per_stream_duration_target: 0,
      playhead_nudge_slack: 0.1,
      pre_start_buffer_ahead_target: 16.924449682236,
      resolution_constraint_factor: 2,
      seconds_to_stream: 10,
      seconds_to_stream_near_bandwidth_boundary: 10,
      seek_ahead_epsilon: 0.05,
      segments_to_stream: 5,
      segments_to_stream_near_bandwidth_boundary: 5,
      segments_to_stream_under_playhead_threshold: 0,
      start_buffer_underflow_target: 0.1,
      stream_interrupt_check_mpd_stale_count_threshold: 3,
      timeline_offset_threshold: 10,
      time_to_first_byte_estimate_half_life_ms: 500,
    };
    c = {
      bandwidth_cache_key: "bandwidthEstimate",
      network_end_broadcasts_json: "[]",
      network_reload_mpd_json: "[]",
      network_retry_intervals_json:
        '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}',
      network_skip_json: "[]",
    };
    e.exports = { defaultBools: a, defaultNumbers: b, defaultStrings: c };
  },
  null
);
__d(
  "oz-player-polaris/configs/PolarisOzPlayerInternalDefaultConfig",
  ["oz-player-polaris/configs/PolarisOzPlayerConfigDefaults"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.getBool = function (a) {
        return d("oz-player-polaris/configs/PolarisOzPlayerConfigDefaults")
          .defaultBools[a];
      };
      b.getNumber = function (a) {
        return d("oz-player-polaris/configs/PolarisOzPlayerConfigDefaults")
          .defaultNumbers[a];
      };
      b.getString = function (a) {
        return d("oz-player-polaris/configs/PolarisOzPlayerConfigDefaults")
          .defaultStrings[a];
      };
      b.getLegacyConfig = function () {
        return {
          getBool: function (a, b) {
            return (a = d(
              "oz-player-polaris/configs/PolarisOzPlayerConfigDefaults"
            ).defaultBools[a]) != null
              ? a
              : b;
          },
          getNumber: function (a, b) {
            return (a = d(
              "oz-player-polaris/configs/PolarisOzPlayerConfigDefaults"
            ).defaultNumbers[a]) != null
              ? a
              : b;
          },
          getString: function (a, b) {
            return (a = d(
              "oz-player-polaris/configs/PolarisOzPlayerConfigDefaults"
            ).defaultStrings[a]) != null
              ? a
              : b;
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
  "oz-player-polaris/configs/PolarisOzConfigUtils",
  ["oz-player-polaris/configs/PolarisOzPlayerInternalDefaultConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new (b(
      "oz-player-polaris/configs/PolarisOzPlayerInternalDefaultConfig"
    ))();
    a = function (a) {
      return {
        getBool: function (b) {
          return a.getBool(b, g.getBool(b));
        },
        getNumber: function (b) {
          return a.getNumber(b, g.getNumber(b));
        },
        getString: function (b) {
          return a.getString(b, g.getString(b));
        },
        getLegacyConfig: function () {
          return a;
        },
      };
    };
    e.exports = { getInternalDefaultConfig: a };
  },
  null
);
__d(
  "oz-player-polaris/drm/PolarisOzDrmUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return Uint8Array.from(window.atob(a), function (a) {
        return a.charCodeAt(0);
      });
    }
    f.base64ToUint8Array = a;
  },
  66
);
__d(
  "oz-player-polaris/loggings/PolarisOzLoggingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a = a.getOperationLogger(b).start();
      try {
        return c(a);
      } catch (b) {
        a.setError(b);
        throw b;
      } finally {
        a.log();
      }
    }
    function b(a, b, c, d, e) {
      d === void 0 && (d = function () {});
      e === void 0 && (e = function () {});
      var f = b.getOperationLogger(c).start();
      d(f);
      return a
        .then(function (a) {
          e(f);
          f.log();
          return a;
        })
        ["catch"](function (a) {
          e(f);
          f.setError(a);
          f.log();
          throw a;
        });
    }
    e.exports = { executeOperationAndLog: a, monitorPromiseAndLogOperation: b };
  },
  null
);
__d(
  "oz-player-polaris/loggings/PolarisOzOperationLoggerBase",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.start = function () {
        this.getClientTimeBegin() || this.setClientTimeBegin(Date.now());
        return this;
      };
      b.log = function () {
        this.getClientTimeEnd() || this.setClientTimeEnd(Date.now());
      };
      b.setError = function (a) {
        this.$2 = a;
        return this;
      };
      b.setResult = function (a) {
        this.$3 = a;
        return this;
      };
      b.setType = function (a) {
        this.$4 = a;
        return this;
      };
      b.setClientTimeBegin = function (a) {
        this.$5 = a;
        return this;
      };
      b.setClientTimeEnd = function (a) {
        this.$6 = a;
        return this;
      };
      b.setSegmentCount = function (a) {
        this.$13 = a;
        return this;
      };
      b.setTimeToFirstByte = function (a) {
        this.$7 = a;
        return this;
      };
      b.setTimeToLastByte = function (a) {
        this.$8 = a;
        return this;
      };
      b.setTimeToRequestStart = function (a) {
        this.$9 = a;
        return this;
      };
      b.setTimeToRequestSent = function (a) {
        this.$10 = a;
        return this;
      };
      b.setReason = function (a) {
        this.$11 = a;
        return this;
      };
      b.setResource = function (a) {
        this.$12 = a;
        return this;
      };
      b.setSegmentStartTime = function (a) {
        this.$14 = a;
        return this;
      };
      b.setSegmentEndTime = function (a) {
        this.$15 = a;
        return this;
      };
      b.setLength = function (a) {
        this.$16 = a;
        return this;
      };
      b.setLiveheadPosition = function (a) {
        this.$17 = a;
        return this;
      };
      b.setLiveheadSeqNum = function (a) {
        this.$18 = a;
        return this;
      };
      b.setManifestType = function (a) {
        this.$19 = a;
        return this;
      };
      b.setPriorityFloat = function (a) {
        this.$20 = a;
        return this;
      };
      b.setAppendedBufferMs = function (a) {
        this.$21 = a;
        return this;
      };
      b.setInitiator = function (a) {
        this.$22 = a;
        return this;
      };
      b.setPreloadTime = function (a) {
        this.$23 = a;
        return this;
      };
      b.setConcluder = function (a) {
        this.$24 = a;
        return this;
      };
      b.setPreviousRepresentationID = function (a) {
        this.$25 = a;
        return this;
      };
      b.setRepresentationID = function (a) {
        this.$26 = a;
        return this;
      };
      b.setStreamSwitchReason = function (a) {
        this.$27 = a;
        return this;
      };
      b.setState = function (a) {
        this.$28 = a;
        return this;
      };
      b.setContentLengthHeader = function (a) {
        this.$29 = a;
        return this;
      };
      b.setOriginHitHeader = function (a) {
        this.$31 = a;
        return this;
      };
      b.setEdgeHitHeader = function (a) {
        this.$32 = a;
        return this;
      };
      b.setCode = function (a) {
        this.$30 = a;
        return this;
      };
      b.getError = function () {
        return this.$2;
      };
      b.getResult = function () {
        return this.$3;
      };
      b.getType = function () {
        return this.$4;
      };
      b.getClientTimeBegin = function () {
        return this.$5;
      };
      b.getClientTimeEnd = function () {
        return this.$6;
      };
      b.getTimeToRequestStart = function () {
        return this.$9;
      };
      b.getTimeToRequestSent = function () {
        return this.$10;
      };
      b.getReason = function () {
        return this.$11;
      };
      b.getResource = function () {
        return this.$12;
      };
      b.getOperationName = function () {
        return this.$1;
      };
      b.getSegmentStartTime = function () {
        return this.$14;
      };
      b.getSegmentEndTime = function () {
        return this.$15;
      };
      b.getLength = function () {
        return this.$16;
      };
      b.getLiveheadPosition = function () {
        return this.$17;
      };
      b.getManifestType = function () {
        return this.$19;
      };
      b.getPriorityFloat = function () {
        return this.$20;
      };
      b.getAppendedBufferMs = function () {
        return this.$21;
      };
      b.getInitiator = function () {
        return this.$22;
      };
      b.getPreloadTime = function () {
        return this.$23;
      };
      b.getConcluder = function () {
        return this.$24;
      };
      b.getContentLengthHeader = function () {
        return this.$29;
      };
      b.getOriginHitHeader = function () {
        return this.$31;
      };
      b.getEdgeHitHeader = function () {
        return this.$32;
      };
      b.getCode = function () {
        return this.$30;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzDOMEventListenerDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b, c, d) {
      if (a.addEventListener == null)
        throw new Error(
          'Attempted to listen to eventType "' +
            b +
            '" on a target that does not have addEventListener.'
        );
      a.addEventListener(b, c, d);
      return {
        remove: function () {
          a.removeEventListener(b, c, d);
        },
      };
    }
    function a(a, b, c) {
      return g(a, b, c, !1);
    }
    function b(a, b, c) {
      return g(a, b, c, !0);
    }
    function c(a) {
      a.preventDefault(), a.stopPropagation();
    }
    f.listenDOMEvent = a;
    f.captureDOMEvent = b;
    f.suppressDOMEvent = c;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzDOMEventListener",
  ["oz-player-polaris/shims/default/PolarisOzDOMEventListenerDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzDOMEventListenerDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzMaybeNativePromiseDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = window.Promise;
    if (a == null) throw new Error("Promise must be supported or polyfilled");
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
  ["oz-player-polaris/shims/default/PolarisOzMaybeNativePromiseDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzMaybeNativePromiseDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzSubscriptionsHandlerDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.addSubscriptions = function () {
        if (this.$1 != null) {
          for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
          this.$1 = this.$1.concat(b);
        } else
          throw new Error(
            "Subscriptions cannot be added after SubscriptionsHandler is released without calling engage()"
          );
      };
      b.release = function () {
        this.$1 != null &&
          (this.$1.forEach(function (a) {
            return a.remove();
          }),
          (this.$1 = null));
      };
      b.engage = function () {
        this.$1 == null && (this.$1 = []);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ["oz-player-polaris/shims/default/PolarisOzSubscriptionsHandlerDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzSubscriptionsHandlerDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzEventEmitterDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.addListener = function (a, b) {
        var c,
          d = this;
        this.$1.set(a, ((c = this.$1.get(a)) != null ? c : []).concat(b));
        return {
          remove: function () {
            var c;
            c = (c = d.$1.get(a)) != null ? c : [];
            d.$1.set(
              a,
              c.filter(function (a) {
                return a !== b;
              })
            );
          },
        };
      };
      b.emit = function (a) {
        var b,
          c = this;
        for (
          var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
          f < d;
          f++
        )
          e[f - 1] = arguments[f];
        ((b = this.$1.get(a)) != null ? b : []).forEach(function (a) {
          return a.apply(c, e);
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzEventEmitter",
  ["oz-player-polaris/shims/default/PolarisOzEventEmitterDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzEventEmitterDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polarisOzvariantDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b) {
      if (!a) throw new Error(b);
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/polarisOzvariant",
  ["oz-player-polaris/shims/default/polarisOzvariantDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/shims/default/polarisOzvariantDefault");
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzErrorEmitter",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/polarisOzvariant",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        c === void 0 && (c = !1);
        d = a.call(this) || this;
        d.$OzErrorEmitter1 = !1;
        d.$OzErrorEmitter2 = !1;
        d.$OzErrorEmitter3 = [];
        d.emitError = function (a) {
          !d.$OzErrorEmitter1
            ? d.$OzErrorEmitter2
              ? d.$OzErrorEmitter3.push(a)
              : d.$OzErrorEmitter1 ||
                b("oz-player-polaris/shims/polarisOzvariant")(0, 14038)
            : d.emit("error", a);
        };
        d.$OzErrorEmitter2 = c;
        return d;
      }
      var d = c.prototype;
      d.onError = function (a) {
        this.$OzErrorEmitter1 = !0;
        a = this.addListener("error", a);
        this.$OzErrorEmitter2 &&
          this.$OzErrorEmitter3.length > 0 &&
          this.$OzErrorEmitter3.forEach(this.emitError);
        return a;
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/drm/PolarisOzDrmManager",
  [
    "oz-player-polaris/drm/PolarisOzDrmUtils",
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/loggings/PolarisOzOperationLoggerBase",
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b("oz-player-polaris/shims/PolarisOzDOMEventListener").listenDOMEvent,
      i = b("oz-player-polaris/drm/PolarisOzDrmUtils").base64ToUint8Array;
    a = (function () {
      function a(a, c) {
        var d = this;
        this.$1 = new Map();
        this.$3 = !1;
        this.$5 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$6 = new (b("oz-player-polaris/utils/PolarisOzErrorEmitter"))();
        this.$7 = !1;
        this.$8 = null;
        this.$9 = function (a) {
          var c = a;
          a instanceof b("oz-player-polaris/utils/PolarisOzError") ||
            (c = new (b("oz-player-polaris/utils/PolarisOzError"))({
              type: "OZ_DRM_MANAGER",
              description: a.message,
              extra: { originalError: a },
            }));
          d.$6.emitError(c);
        };
        this.$4 = c;
        this.$2 = a.cloneContext().setType("drm_manager");
      }
      var c = a.prototype;
      c.hasContentProtections = function () {
        return this.$8;
      };
      c.onError = function (a) {
        return this.$6.onError(a);
      };
      c.addProvider = function (a) {
        this.$1.set(a.getSchemeId(), a);
      };
      c.getProviderForSchemeId = function (a) {
        return this.$1.get(a);
      };
      c.parseContentProtectionForRepresentation = function (a) {
        if (!a.ContentProtection) return null;
        var b = [];
        for (var c = 0; c < a.ContentProtection.length; c++) {
          var d = a.ContentProtection[c],
            e = d.$.schemeIdUri;
          e = this.getProviderForSchemeId(e);
          if (e) {
            var f = e.getInitDatas();
            if (
              f.length === 0 &&
              d["cenc:pssh"] &&
              d["cenc:pssh"].length === 1
            ) {
              d = d["cenc:pssh"][0]._;
              d = i(d.replace(/-/g, "+").replace(/_/g, "/"));
              f = [{ data: d, type: "cenc" }];
              e.setInitDatas(f);
            }
            b.push({ provider: e, initDatas: f });
          }
        }
        return b;
      };
      c.startEME = function (a, b, c, d) {
        var e = this;
        if (this.$7) return;
        this.$7 = !0;
        var f = new Map();
        this.$10(c, d, f, "audio");
        this.$10(a, b, f, "video");
        var g;
        f.forEach(function (a, b) {
          !g
            ? (g = e.$11(b, a))
            : (g = g["catch"](function () {
                return e.$11(b, a);
              }));
        });
        if (!g) {
          this.$8 = !1;
          return;
        }
        this.$8 = !0;
        var h = this.$2.getOperationLogger("drm_setup").start();
        g.then(this.$12.bind(this))
          .then(this.$13.bind(this))
          .then(this.$14.bind(this))
          .then(
            function () {
              return h.log();
            },
            function (a) {
              e.$9(a), h.setResult("failed").setError(a).log();
            }
          );
      };
      c.$15 = function (a) {
        a instanceof
          b("oz-player-polaris/loggings/PolarisOzOperationLoggerBase") &&
          a.getError() &&
          a.setResult("failed");
      };
      c.$10 = function (a, b, c, d) {
        var e = this;
        b.forEach(function (b) {
          var f;
          a && a.ContentProtection
            ? (f = e.parseContentProtectionForRepresentation(a))
            : (f = b.getCustomField("drmProtections"));
          var g = b.getMimeCodecs();
          f != null &&
            f.forEach(function (a) {
              a = a.provider;
              c.has(a.getKeySystem()) ||
                c.set(a.getKeySystem(), {
                  audioCapabilities: new Map(),
                  videoCapabilities: new Map(),
                  distinctiveIdentifier: a.getRequireDistinctiveIdentifier(),
                  persistentState: a.getRequirePersistentState(),
                  sessionTypes: a.getDrmSessionTypes(),
                  initDataTypes: a.getInitDataTypes(),
                });
              var b = c.get(a.getKeySystem());
              d === "audio" &&
                !b.audioCapabilities.has(g) &&
                b.audioCapabilities.set(g, {
                  contentType: g,
                  robustness: a.getAudioRobustness(),
                });
              d === "video" &&
                !b.videoCapabilities.has(g) &&
                b.videoCapabilities.set(g, {
                  contentType: g,
                  robustness: a.getVideoRobustness(),
                });
            });
        });
      };
      c.destroy = function () {
        this.$5.release(), (this.$3 = !0);
      };
      c.$11 = function (a, b) {
        b = {
          audioCapabilities: Array.from(b.audioCapabilities.values()),
          videoCapabilities: Array.from(b.videoCapabilities.values()),
          distinctiveIdentifier: b.distinctiveIdentifier,
          persistentState: b.persistentState,
          sessionTypes: b.sessionTypes,
          initDataTypes: b.initDataTypes,
        };
        return g(
          window.navigator.requestMediaKeySystemAccess(a, [b]),
          this.$2,
          "drm_request_media_key_system_access",
          function () {},
          this.$15
        );
      };
      c.$12 = function (a) {
        if (this.$3)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject();
        var c =
          this.$4.mediaKeys != null
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve(
                this.$4.mediaKeys
              )
            : a.createMediaKeys();
        return g(
          c.then(function (b) {
            return { mediaKeySystemAccess: a, mediaKeys: b };
          }),
          this.$2,
          "drm_create_media_keys",
          function () {},
          this.$15
        );
      };
      c.$13 = function (a) {
        var c = this;
        if (this.$3)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject();
        var d = a.mediaKeys,
          e = a.mediaKeySystemAccess;
        if (!d)
          throw new (b("oz-player-polaris/utils/PolarisOzError"))({
            type: "OZ_DRM_MANAGER",
            description: "No mediaKeys for mediaKeySystemAccess",
          });
        a = this.$4.setMediaKeys(d).then(function () {
          if (c.$3)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject();
          var a = Array.from(c.$1.values()).find(function (a) {
            return a.getKeySystem() === e.keySystem;
          });
          if (!a)
            throw new (b("oz-player-polaris/utils/PolarisOzError"))({
              type: "OZ_DRM_MANAGER",
              description:
                "Can't find OzDrmProvider for keySystem " + e.keySystem,
            });
          var f = a.getServerCertificate();
          return f
            ? d.setServerCertificate(f).then(function () {
                return { mediaKeySystemAccess: e, mediaKeys: d, provider: a };
              })
            : { mediaKeys: d, provider: a };
        });
        return g(a, this.$2, "drm_set_media_keys", function () {}, this.$15);
      };
      c.$14 = function (a) {
        var c = this,
          d = a.mediaKeys,
          e = a.provider;
        a = e.getInitDatas();
        if (a.length === 0) {
          this.$5.addSubscriptions(
            h(this.$4, "encrypted", function (a) {
              c.$16(d, e, a)["catch"](c.$9);
            })
          );
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve([]);
        }
        a = a.map(function (a) {
          return c.$16(d, e, { initData: a.data, initDataType: a.type });
        });
        return g(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").all(a),
          this.$2,
          "drm_request_license",
          function () {},
          this.$15
        );
      };
      c.$16 = function (a, b, c) {
        var d = this,
          e = a.createSession();
        this.$5.addSubscriptions(
          h(e, "message", function (a) {
            d.$17(e, b, a)["catch"](d.$9);
          }),
          h(e, "keystatuseschange", function (a) {
            d.$18(e)["catch"](d.$9);
          })
        );
        return e.generateRequest(c.initDataType, c.initData);
      };
      c.$17 = function (a, b, c) {
        var d = this;
        c = b.getLicenseRequestInfo(c.message.slice(0));
        return window
          .fetch(c.url, c)
          .then(function (a) {
            return a.arrayBuffer();
          })
          .then(function (c) {
            c = new Uint8Array(c);
            c = b.parseLicenseResponse(c);
            c == null || c.byteLength === 0
              ? d.$9(new Error("No license for " + b.getKeySystem()))
              : a.update(c);
          });
      };
      c.$18 = function (a) {
        return a.expiration < Date.now()
          ? a.close()
          : b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve();
      };
      return a;
    })();
    e.exports = { OzDrmManager: a };
  },
  null
);
__d(
  "oz-player-polaris/loggings/PolarisOzPerfLoggerProviderBase",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.cloneContext = function () {
        var a = this.createLoggerProvider();
        this.$8(a);
        return a;
      };
      b.setType = function (a) {
        this.$1 = a;
        return this;
      };
      b.setInitiator = function (a) {
        this.$2 = a;
        return this;
      };
      b.setResource = function (a) {
        this.$4 = a;
        return this;
      };
      b.setRepresentationID = function (a) {
        this.$3 = a;
        return this;
      };
      b.setSegmentStartTime = function (a) {
        this.$5 = a;
        return this;
      };
      b.setSegmentEndTime = function (a) {
        this.$6 = a;
        return this;
      };
      b.setStreamSwitchReason = function (a) {
        this.$7 = a;
        return this;
      };
      b.getType = function () {
        return this.$1;
      };
      b.getInitiator = function () {
        return this.$2;
      };
      b.getRepresentationID = function () {
        return this.$3;
      };
      b.getStreamSwitchReason = function () {
        return this.$7;
      };
      b.getResource = function () {
        return this.$4;
      };
      b.getSegmentStartTime = function () {
        return this.$5;
      };
      b.getSegmentEndTime = function () {
        return this.$6;
      };
      b.getOperationLogger = function (a) {
        a = this.createOperationLogger(a);
        return this.setOperationContext(a);
      };
      b.setOperationContext = function (a) {
        this.$8(a);
        return a;
      };
      b.createOperationLogger = function (a) {
        throw new Error("Not implemented: createOperationLogger");
      };
      b.createLoggerProvider = function () {
        throw new Error("Not implemented: createLoggerProvider");
      };
      b.$8 = function (a) {
        this.getType() && a.setType(this.getType()),
          this.getInitiator() && a.setInitiator(this.getInitiator()),
          this.getResource() && a.setResource(this.getResource()),
          this.getRepresentationID() &&
            a.setRepresentationID(this.getRepresentationID()),
          this.getStreamSwitchReason() &&
            a.setStreamSwitchReason(this.getStreamSwitchReason()),
          typeof this.getSegmentStartTime() === "number" &&
            a.setSegmentStartTime(this.getSegmentStartTime()),
          typeof this.getSegmentEndTime() === "number" &&
            a.setSegmentEndTime(this.getSegmentEndTime());
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/loggings/PolarisOzDevConsolePerfLogger",
  [
    "oz-player-polaris/loggings/PolarisOzOperationLoggerBase",
    "oz-player-polaris/loggings/PolarisOzPerfLoggerProviderBase",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      var a;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      (a = console).debug.apply(a, ["[oz]"].concat(c));
    }
    function h() {
      var a;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      (a = console).error.apply(a, ["[oz]"].concat(c));
    }
    function i(a, b) {
      return Math.floor(a).toString().padStart(b, "0");
    }
    function j(a, b) {
      b === void 0 && (b = null);
      var c = function (a) {
          return (
            i(a.getHours(), 2) +
            ":" +
            i(a.getMinutes(), 2) +
            ":" +
            i(a.getSeconds(), 2) +
            " " +
            i(a.getMilliseconds(), 3)
          );
        },
        d = b ? b - a : 0;
      return "[" + c(a) + (b ? " - " + c(b) : "") + " (" + d + " ms)]";
    }
    function k(a) {
      return a === "failed" ? h : g;
    }
    function l(a) {
      return !a ? null : a.toFixed(2);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.createOperationLogger = function (a) {
        return new m(a);
      };
      c.createLoggerProvider = function () {
        return new b();
      };
      return b;
    })(b("oz-player-polaris/loggings/PolarisOzPerfLoggerProviderBase"));
    var m = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        return b.apply(this, arguments) || this;
      }
      var c = a.prototype;
      c.log = function () {
        b.prototype.log.call(this);
        var a = this.getClientTimeBegin() || 0,
          c = this.getClientTimeEnd();
        c = c ? new Date(c) : null;
        var d = this.getResult() || "success",
          e = this.getType(),
          f = this.getInitiator(),
          g = this.getResource(),
          h = l(this.getSegmentStartTime()),
          i = l(this.getSegmentEndTime());
        k(d)(
          "[" + d + "]",
          this.getOperationName() + ": " + j(new Date(a), c),
          e ? "[" + e + "]" : "",
          h && i ? "[segment time range: " + h + " - " + i + "]" : "",
          f || "",
          g || ""
        );
      };
      return a;
    })(b("oz-player-polaris/loggings/PolarisOzOperationLoggerBase"));
    e.exports = {
      OzDevConsolePerfLoggerProvider: a,
      OzDevConsoleOperationLogger: m,
    };
  },
  null
);
__d(
  "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger",
  [
    "oz-player-polaris/loggings/PolarisOzOperationLoggerBase",
    "oz-player-polaris/loggings/PolarisOzPerfLoggerProviderBase",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$OzMultiDestinationPerfLoggerProvider1 = b;
        return c;
      }
      var c = b.prototype;
      c.createOperationLogger = function (a) {
        return new g(
          a,
          this.$OzMultiDestinationPerfLoggerProvider1.map(function (b) {
            return b.getOperationLogger(a);
          })
        );
      };
      c.createLoggerProvider = function () {
        return new b(this.$OzMultiDestinationPerfLoggerProvider1);
      };
      return b;
    })(b("oz-player-polaris/loggings/PolarisOzPerfLoggerProviderBase"));
    var g = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a, c) {
        a = b.call(this, a) || this;
        a.$OzMultiDestinationOperationLogger1 = c;
        return a;
      }
      var c = a.prototype;
      c.start = function () {
        b.prototype.start.call(this);
        this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
          return a.start();
        });
        return this;
      };
      c.setResult = function (a) {
        b.prototype.setResult.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResult(a);
        });
        return this;
      };
      c.setError = function (a) {
        b.prototype.setError.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setError(a);
        });
        return this;
      };
      c.setType = function (a) {
        b.prototype.setType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setType(a);
        });
        return this;
      };
      c.setClientTimeEnd = function (a) {
        b.prototype.setClientTimeEnd.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeEnd(a);
        });
        return this;
      };
      c.setClientTimeBegin = function (a) {
        b.prototype.setClientTimeBegin.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setClientTimeBegin(a);
        });
        return this;
      };
      c.setSegmentCount = function (a) {
        b.prototype.setSegmentCount.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentCount(a);
        });
        return this;
      };
      c.setTimeToFirstByte = function (a) {
        b.prototype.setTimeToFirstByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToFirstByte(a);
        });
        return this;
      };
      c.setTimeToLastByte = function (a) {
        b.prototype.setTimeToLastByte.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToLastByte(a);
        });
        return this;
      };
      c.setTimeToRequestStart = function (a) {
        b.prototype.setTimeToRequestStart.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestStart(a);
        });
        return this;
      };
      c.setTimeToRequestSent = function (a) {
        b.prototype.setTimeToRequestSent.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setTimeToRequestSent(a);
        });
        return this;
      };
      c.setReason = function (a) {
        b.prototype.setReason.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setReason(a);
        });
        return this;
      };
      c.setResource = function (a) {
        b.prototype.setResource.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setResource(a);
        });
        return this;
      };
      c.setSegmentStartTime = function (a) {
        b.prototype.setSegmentStartTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentStartTime(a);
        });
        return this;
      };
      c.setSegmentEndTime = function (a) {
        b.prototype.setSegmentEndTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setSegmentEndTime(a);
        });
        return this;
      };
      c.setAppendedBufferMs = function (a) {
        b.prototype.setAppendedBufferMs.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setAppendedBufferMs(a);
        });
        return this;
      };
      c.setLength = function (a) {
        b.prototype.setLength.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLength(a);
        });
        return this;
      };
      c.setLiveheadPosition = function (a) {
        b.prototype.setLiveheadPosition.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadPosition(a);
        });
        return this;
      };
      c.setLiveheadSeqNum = function (a) {
        b.prototype.setLiveheadSeqNum.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setLiveheadSeqNum(a);
        });
        return this;
      };
      c.setManifestType = function (a) {
        b.prototype.setManifestType.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setManifestType(a);
        });
        return this;
      };
      c.setPriorityFloat = function (a) {
        b.prototype.setPriorityFloat.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPriorityFloat(a);
        });
        return this;
      };
      c.setInitiator = function (a) {
        b.prototype.setInitiator.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setInitiator(a);
        });
        return this;
      };
      c.setPreloadTime = function (a) {
        b.prototype.setPreloadTime.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreloadTime(a);
        });
        return this;
      };
      c.setConcluder = function (a) {
        b.prototype.setConcluder.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setConcluder(a);
        });
        return this;
      };
      c.setPreviousRepresentationID = function (a) {
        b.prototype.setPreviousRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setPreviousRepresentationID(a);
        });
        return this;
      };
      c.setRepresentationID = function (a) {
        b.prototype.setRepresentationID.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setRepresentationID(a);
        });
        return this;
      };
      c.setState = function (a) {
        b.prototype.setState.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setState(a);
        });
        return this;
      };
      c.setContentLengthHeader = function (a) {
        b.prototype.setContentLengthHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setContentLengthHeader(a);
        });
        return this;
      };
      c.setEdgeHitHeader = function (a) {
        b.prototype.setEdgeHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setEdgeHitHeader(a);
        });
        return this;
      };
      c.setOriginHitHeader = function (a) {
        b.prototype.setOriginHitHeader.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setOriginHitHeader(a);
        });
        return this;
      };
      c.setCode = function (a) {
        b.prototype.setCode.call(this, a);
        this.$OzMultiDestinationOperationLogger1.forEach(function (b) {
          return b.setCode(a);
        });
        return this;
      };
      c.log = function () {
        b.prototype.log.call(this),
          this.$OzMultiDestinationOperationLogger1.forEach(function (a) {
            return a.log();
          });
      };
      return a;
    })(b("oz-player-polaris/loggings/PolarisOzOperationLoggerBase"));
    e.exports = { OzMultiDestinationPerfLoggerProvider: a };
  },
  null
);
__d(
  "oz-player-polaris/loggings/PolarisOzOperationLoggerObserver",
  ["oz-player-polaris/shims/PolarisOzSubscriptionsHandler"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
      }
      var c = a.prototype;
      c.observe = function (a, b) {
        var c;
        a = a.map(function (a) {
          var c = a.setOperationLoggedListener(function (a) {
            b.getOperationLogger(a.getOperationName())
              .setClientTimeBegin(a.getClientTimeBegin() || 0)
              .setClientTimeEnd(a.getClientTimeEnd() || 0)
              .setLength(a.getLength())
              .setResult(a.getResult() || "success")
              .setInitiator(a.getInitiator())
              .setType(a.getType())
              .log();
          });
          a.activate();
          return c;
        });
        (c = this.$1).addSubscriptions.apply(c, a);
      };
      c.destroy = function () {
        this.$1.release();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisOzRepresentation",
  [
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/utils/PolarisOzError",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$1 = a),
          (this.$6 = b),
          (this.$2 = c),
          (this.$3 = d),
          (this.$4 = e),
          (this.$5 = f),
          (this.$7 = g),
          (this.$8 = h);
      }
      var c = a.prototype;
      c.getID = function () {
        return this.$6;
      };
      c.getBandwidth = function () {
        return this.$5;
      };
      c.getMimeCodecs = function () {
        return this.$2;
      };
      c.getQualityLabel = function () {
        return this.$6;
      };
      c.getInitSegment = function () {
        return this.$3;
      };
      c.getCustomFieldFirstSegment = function () {
        return this.$7;
      };
      c.getCustomField = function (a) {
        if (this.$8 == null || !this.$8[a])
          throw new (b("oz-player-polaris/utils/PolarisOzError"))({
            type: "OZ_REPRESENTATION_PARSER",
            description: "Custom field " + a + " is not specified by caller",
            extra: { code: "OZ_RP-8" },
          });
        a = this.$8[a];
        try {
          return a(this.$1);
        } catch (a) {
          return null;
        }
      };
      c.updateWith = function (c) {
        c instanceof a || b("oz-player-polaris/shims/polarisOzvariant")(0, 229),
          this.$4.updateWith(c.$4);
      };
      c.getSegmentByTime = function (a) {
        return this.$4.getSegmentByTime(a);
      };
      c.getSegment = function (a) {
        return this.$4.getSegment(a);
      };
      c.getPredictedSegmentAfter = function (a) {
        return this.$4.getPredictedSegmentAfter(a);
      };
      c.canPredict = function () {
        return this.$4.canPredict();
      };
      c.getSegmentAfter = function (a) {
        return this.$4.getSegmentAfter(a);
      };
      c.isEndingSegment = function (a) {
        return this.$4.isEndingSegment(a);
      };
      c.addUpdateListener = function (a) {
        return this.$4.addUpdateListener(a);
      };
      c.getTimeRanges = function () {
        return this.$4.getTimeRanges();
      };
      c.blockTimeRange = function (a) {
        this.$4.blockTimeRange(a);
      };
      c.getEndingSegment = function () {
        return this.$4.getEndingSegment();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisOzVideoRepresentation",
  ["oz-player-polaris/manifests/PolarisOzRepresentation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i, j, k) {
        c = a.call(this, b, c, d, e, f, g, h, i) || this;
        c.$OzVideoRepresentation5 = null;
        c.$OzVideoRepresentation1 = j;
        c.$OzVideoRepresentation2 = k;
        c.$OzVideoRepresentation4 = i;
        c.$OzVideoRepresentation3 = b;
        return c;
      }
      var c = b.prototype;
      c.getWidth = function () {
        return this.$OzVideoRepresentation1;
      };
      c.getHeight = function () {
        return this.$OzVideoRepresentation2;
      };
      c.getQualityLabel = function () {
        if (this.$OzVideoRepresentation5 != null)
          return this.$OzVideoRepresentation5;
        var a = this.$OzVideoRepresentation4
          ? this.$OzVideoRepresentation4.qualityLabel
          : null;
        a && (this.$OzVideoRepresentation5 = a(this.$OzVideoRepresentation3));
        (this.$OzVideoRepresentation5 == null ||
          this.$OzVideoRepresentation5 === "") &&
          (this.$OzVideoRepresentation5 =
            this.getHeight().toString() +
            "p; " +
            Math.round(this.getBandwidth() / 1e3).toString() +
            " kbps");
        return this.$OzVideoRepresentation5 || "";
      };
      return b;
    })(b("oz-player-polaris/manifests/PolarisOzRepresentation"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/media_source/PolarisOzMediaErrorProvider",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getMediaErrorName = function () {
        var a = this.$1.error;
        return a && a.message ? this.$2(a.message) : null;
      };
      b.getErrorCode = function () {
        var a = this.$1.error;
        return a && a.code ? a.code : null;
      };
      b.$2 = function (a) {
        a = a.split(":")[0];
        return a || "";
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzDeferredDefault",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        var c = this;
        a = a || b("Promise");
        this.$1 = !1;
        this.$2 = new a(function (a, b) {
          (c.$3 = a), (c.$4 = b);
        });
      }
      var c = a.prototype;
      c.getPromise = function () {
        return this.$2;
      };
      c.resolve = function (a) {
        (this.$1 = !0), this.$3(a);
      };
      c.reject = function (a) {
        (this.$1 = !0), this.$4(a);
      };
      c.isSettled = function () {
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzDeferred",
  ["oz-player-polaris/shims/default/PolarisOzDeferredDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/shims/default/PolarisOzDeferredDefault");
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzManagedError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, b != null ? b : "") || this;
        b != null ? (d.message = b) : (d.message = "");
        d.innerError = c;
        return d;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
/**
 * License: https://www.facebook.com/legal/license/2O_Jyo-66aD/
 */
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers",
  [
    "Promise",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzManagedError",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzManagedError"
      ).prototype.constructor.apply(this, arguments);
    }
    g.prototype = new (b(
      "oz-player-polaris/shims/default/polyfills/stream/PolarisOzManagedError"
    ))();
    g.prototype.constructor = g;
    f.AssertionError = g;
    function h(a, b) {
      if (typeof a !== "boolean" || !a) throw new g(b);
      return a;
    }
    f.assert = h;
    function i(a) {
      return typeof a === "string" || typeof a === "symbol";
    }
    f.typeIsObject = function (a) {
      return (typeof a === "object" && a !== null) || typeof a === "function";
    };
    f.createDataProperty = function (a, b, c) {
      h(f.typeIsObject(a)),
        Object.defineProperty(a, b, {
          value: c,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
    };
    f.createArrayFromList = function (a) {
      return a.slice();
    };
    f.ArrayBufferCopy = function (a, b, c, d, e) {
      new Uint8Array(a).set(new Uint8Array(c, d, e), b);
    };
    f.CreateIterResultObject = function (a, b) {
      h(typeof b === "boolean");
      var c = {};
      Object.defineProperty(c, "value", {
        value: a,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      });
      Object.defineProperty(c, "done", {
        value: b,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      });
      return c;
    };
    f.IsFiniteNonNegativeNumber = function (a) {
      if (Number.isNaN(a)) return !1;
      if (a === Infinity) return !1;
      return a < 0 ? !1 : !0;
    };
    function j(a, b, c) {
      if (typeof a !== "function")
        throw new TypeError("Argument is not a function");
      return Function.prototype.apply.call(a, b, c);
    }
    f.InvokeOrNoop = function (a, b, c) {
      h(a !== void 0);
      h(i(b));
      h(Array.isArray(c));
      b = a[b];
      return b === void 0 ? void 0 : j(b, a, c);
    };
    f.PromiseInvokeOrNoop = function (a, c, d) {
      h(a !== void 0);
      h(i(c));
      h(Array.isArray(d));
      try {
        return b("Promise").resolve(f.InvokeOrNoop(a, c, d));
      } catch (a) {
        return b("Promise").reject(a);
      }
    };
    f.PromiseInvokeOrPerformFallback = function (a, c, d, e, f) {
      h(a !== void 0);
      h(i(c));
      h(Array.isArray(d));
      h(Array.isArray(f));
      var g;
      try {
        g = a[c];
      } catch (a) {
        return b("Promise").reject(a);
      }
      if (g === void 0) return e.apply(void 0, f);
      try {
        return b("Promise").resolve(j(g, a, d));
      } catch (a) {
        return b("Promise").reject(a);
      }
    };
    f.TransferArrayBuffer = function (a) {
      return a.slice();
    };
    f.ValidateAndNormalizeHighWaterMark = function (a) {
      a = Number(a);
      if (Number.isNaN(a) || a < 0)
        throw new RangeError(
          "highWaterMark property of a queuing strategy must be non-negative and non-NaN"
        );
      return a;
    };
    f.ValidateAndNormalizeQueuingStrategy = function (a, b) {
      if (a !== void 0 && typeof a !== "function")
        throw new TypeError(
          "size property of a queuing strategy must be a function"
        );
      b = f.ValidateAndNormalizeHighWaterMark(b);
      return { size: a, highWaterMark: b };
    };
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/2O_Jyo-66aD/
 */
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes",
  ["oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"
      ).assert,
      h = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"
      ).IsFiniteNonNegativeNumber;
    f.DequeueValue = function (a) {
      g(
        "_queue" in a && "_queueTotalSize" in a,
        "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
      );
      g(
        a._queue.length > 0,
        "Spec-level failure: should never dequeue from an empty queue."
      );
      var b = a._queue.shift();
      a._queueTotalSize -= b.size;
      a._queueTotalSize < 0 && (a._queueTotalSize = 0);
      return b.value;
    };
    f.EnqueueValueWithSize = function (a, b, c) {
      g(
        "_queue" in a && "_queueTotalSize" in a,
        "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."
      );
      c = Number(c);
      if (!h(c))
        throw new RangeError(
          "Size must be a finite, non-NaN, non-negative number."
        );
      a._queue.push({ value: b, size: c });
      a._queueTotalSize += c;
    };
    f.PeekQueueValue = function (a) {
      g(
        "_queue" in a && "_queueTotalSize" in a,
        "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."
      );
      g(
        a._queue.length > 0,
        "Spec-level failure: should never peek at an empty queue."
      );
      a = a._queue[0];
      return a.value;
    };
    f.ResetQueue = function (a) {
      g(
        "_queue" in a && "_queueTotalSize" in a,
        "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."
      ),
        (a._queue = []),
        (a._queueTotalSize = 0);
    };
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/2O_Jyo-66aD/
 */
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamUtils",
  ["oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
      "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"
    ).AssertionError;
    f.rethrowAssertionErrorRejection = function (a) {
      a &&
        a.constructor === g &&
        window.setTimeout(function () {
          throw a;
        }, 0);
    };
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/xJJVNnYMU5E/
 */
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill",
  [
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"
      )).InvokeOrNoop,
      h = c.PromiseInvokeOrNoop,
      i = c.ValidateAndNormalizeQueuingStrategy,
      j = c.assert,
      k = c.typeIsObject,
      l = (d = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes"
      )).DequeueValue,
      m = d.EnqueueValueWithSize,
      n = d.PeekQueueValue,
      o = d.ResetQueue,
      p = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamUtils"
      ).rethrowAssertionErrorRejection,
      q = "[[StartSteps]]",
      r = "[[AbortSteps]]",
      s = "[[ErrorSteps]]";
    f = (function () {
      function a(a, b) {
        a === void 0 && (a = {});
        b = b === void 0 ? {} : b;
        var c = b.highWaterMark;
        c = c === void 0 ? 1 : c;
        b = b.size;
        this._state = "writable";
        this._storedError = void 0;
        this._writer = void 0;
        this._writableStreamController = void 0;
        this._writeRequests = [];
        this._inFlightWriteRequest = void 0;
        this._closeRequest = void 0;
        this._inFlightCloseRequest = void 0;
        this._pendingAbortRequest = void 0;
        this._backpressure = !1;
        var d = a.type;
        if (d !== void 0) throw new RangeError("Invalid type is specified");
        this._writableStreamController = new ga(this, a, b, c);
        this._writableStreamController[q]();
        Object.defineProperty &&
          Object.defineProperty(this, "locked", {
            get: this._isLocked.bind(this),
          });
      }
      var c = a.prototype;
      c._isLocked = function () {
        if (u(this) === !1) throw T("locked");
        return v(this);
      };
      c.abort = function (a) {
        if (u(this) === !1)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(T("abort"));
        return v(this) === !0
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              new TypeError("Cannot abort a stream that already has a writer")
            )
          : w(this, a);
      };
      c.getWriter = function () {
        if (u(this) === !1) throw T("getWriter");
        return t(this);
      };
      return a;
    })();
    e.exports = {
      AcquireWritableStreamDefaultWriter: t,
      IsWritableStream: u,
      IsWritableStreamLocked: v,
      WritableStream: f,
      WritableStreamAbort: w,
      WritableStreamDefaultControllerError: S,
      WritableStreamDefaultWriterCloseWithErrorPropagation: a,
      WritableStreamDefaultWriterRelease: M,
      WritableStreamDefaultWriterWrite: N,
      WritableStreamCloseQueuedOrInFlight: F,
    };
    function t(a) {
      return new ca(a);
    }
    function u(a) {
      if (!k(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(
        a,
        "_writableStreamController"
      )
        ? !1
        : !0;
    }
    function v(a) {
      j(
        u(a) === !0,
        "IsWritableStreamLocked should only be used on known writable streams"
      );
      return a._writer === void 0 ? !1 : !0;
    }
    function w(a, c) {
      var d = a._state;
      if (d === "closed")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve(
          void 0
        );
      if (d === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          a._storedError
        );
      var e = new TypeError("Requested to abort");
      if (a._pendingAbortRequest !== void 0)
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          e
        );
      j(
        d === "writable" || d === "erroring",
        "state must be writable or erroring"
      );
      var f = !1;
      d === "erroring" && ((f = !0), (c = void 0));
      d = new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
        function (b, d) {
          a._pendingAbortRequest = {
            _resolve: b,
            _reject: d,
            _reason: c,
            _wasAlreadyErroring: f,
          };
        }
      );
      f === !1 && z(a, e);
      return d;
    }
    function x(a) {
      j(v(a) === !0);
      j(a._state === "writable");
      return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
        function (b, c) {
          b = { _resolve: b, _reject: c };
          a._writeRequests.push(b);
        }
      );
    }
    function y(a, b) {
      var c = a._state;
      if (c === "writable") {
        z(a, b);
        return;
      }
      j(c === "erroring");
      A(a);
    }
    function z(a, b) {
      j(a._storedError === void 0, "stream._storedError === undefined");
      j(a._state === "writable", "state must be writable");
      var c = a._writableStreamController;
      j(c !== void 0, "controller must not be undefined");
      a._state = "erroring";
      a._storedError = b;
      var d = a._writer;
      d !== void 0 && L(d, b);
      G(a) === !1 && c._started === !0 && A(a);
    }
    function A(a) {
      j(a._state === "erroring", "stream._state === erroring");
      j(
        G(a) === !1,
        "WritableStreamHasOperationMarkedInFlight(stream) === false"
      );
      a._state = "errored";
      a._writableStreamController[s]();
      var b = a._storedError;
      for (
        var c = a._writeRequests,
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
        f._reject(b);
      }
      a._writeRequests = [];
      if (a._pendingAbortRequest === void 0) {
        H(a);
        return;
      }
      var g = a._pendingAbortRequest;
      a._pendingAbortRequest = void 0;
      if (g._wasAlreadyErroring === !0) {
        g._reject(b);
        H(a);
        return;
      }
      f = a._writableStreamController[r](g._reason);
      f.then(
        function () {
          g._resolve(), H(a);
        },
        function (b) {
          g._reject(b), H(a);
        }
      );
    }
    function B(a) {
      j(a._inFlightWriteRequest !== void 0),
        a._inFlightWriteRequest._resolve(void 0),
        (a._inFlightWriteRequest = void 0);
    }
    function C(a, b) {
      j(a._inFlightWriteRequest !== void 0),
        a._inFlightWriteRequest._reject(b),
        (a._inFlightWriteRequest = void 0),
        j(a._state === "writable" || a._state === "erroring"),
        y(a, b);
    }
    function D(a) {
      j(a._inFlightCloseRequest !== void 0);
      a._inFlightCloseRequest._resolve(void 0);
      a._inFlightCloseRequest = void 0;
      var b = a._state;
      j(b === "writable" || b === "erroring");
      b === "erroring" &&
        ((a._storedError = void 0),
        a._pendingAbortRequest !== void 0 &&
          (a._pendingAbortRequest._resolve(),
          (a._pendingAbortRequest = void 0)));
      a._state = "closed";
      b = a._writer;
      b !== void 0 && qa(b);
      j(
        a._pendingAbortRequest === void 0,
        "stream._pendingAbortRequest === undefined"
      );
      j(a._storedError === void 0, "stream._storedError === undefined");
    }
    function E(a, b) {
      j(a._inFlightCloseRequest !== void 0),
        a._inFlightCloseRequest._reject(b),
        (a._inFlightCloseRequest = void 0),
        j(a._state === "writable" || a._state === "erroring"),
        a._pendingAbortRequest !== void 0 &&
          (a._pendingAbortRequest._reject(b),
          (a._pendingAbortRequest = void 0)),
        y(a, b);
    }
    function F(a) {
      return a._closeRequest === void 0 && a._inFlightCloseRequest === void 0
        ? !1
        : !0;
    }
    function G(a) {
      return a._inFlightWriteRequest === void 0 &&
        a._inFlightCloseRequest === void 0
        ? !1
        : !0;
    }
    function aa(a) {
      j(a._inFlightCloseRequest === void 0),
        j(a._closeRequest !== void 0),
        (a._inFlightCloseRequest = a._closeRequest),
        (a._closeRequest = void 0);
    }
    function ba(a) {
      j(
        a._inFlightWriteRequest === void 0,
        "there must be no pending write request"
      ),
        j(a._writeRequests.length !== 0, "writeRequests must not be empty"),
        (a._inFlightWriteRequest = a._writeRequests.shift());
    }
    function H(a) {
      j(a._state === "errored", '_stream_.[[state]] is `"errored"`');
      a._closeRequest !== void 0 &&
        (j(a._inFlightCloseRequest === void 0),
        a._closeRequest._reject(a._storedError),
        (a._closeRequest = void 0));
      var b = a._writer;
      b !== void 0 &&
        (X(b, a._storedError), b._closedPromise["catch"](function () {}));
    }
    function I(a, b) {
      j(a._state === "writable");
      j(F(a) === !1);
      var c = a._writer;
      c !== void 0 &&
        b !== a._backpressure &&
        (b === !0 ? ta(c) : (j(b === !1), $(c)));
      a._backpressure = b;
    }
    var ca = (function () {
      function a(a) {
        if (u(a) === !1)
          throw new TypeError(
            "WritableStreamDefaultWriter can only be constructed with a WritableStream instance"
          );
        if (v(a) === !0)
          throw new TypeError(
            "This stream has already been locked for exclusive writing by another writer"
          );
        this._ownerWritableStream = a;
        a._writer = this;
        var b = a._state;
        if (b === "writable")
          F(a) === !1 && a._backpressure === !0 ? ra(this) : Z(this), W(this);
        else if (b === "erroring")
          Y(this, a._storedError),
            this._readyPromise["catch"](function () {}),
            W(this);
        else if (b === "closed") Z(this), oa(this);
        else {
          j(b === "errored", "state must be errored");
          b = a._storedError;
          Y(this, b);
          this._readyPromise["catch"](function () {});
          na(this, b);
          this._closedPromise["catch"](function () {});
        }
        Object.defineProperty &&
          (Object.defineProperty(this, "closed", {
            get: this._isClosed.bind(this),
          }),
          Object.defineProperty(this, "desiredSize", {
            get: this._getDesiredSize.bind(this),
          }),
          Object.defineProperty(this, "ready", {
            get: this._isReady.bind(this),
          }));
      }
      var c = a.prototype;
      c._isClosed = function () {
        return J(this) === !1
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              U("closed")
            )
          : this._closedPromise;
      };
      c._getDesiredSize = function () {
        if (J(this) === !1) throw U("desiredSize");
        if (this._ownerWritableStream === void 0) throw V("desiredSize");
        return fa(this);
      };
      c._isReady = function () {
        return J(this) === !1
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              U("ready")
            )
          : this._readyPromise;
      };
      c.abort = function (a) {
        if (J(this) === !1)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(U("abort"));
        return this._ownerWritableStream === void 0
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              V("abort")
            )
          : da(this, a);
      };
      c.close = function () {
        if (J(this) === !1)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(U("close"));
        var a = this._ownerWritableStream;
        if (a === void 0)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(V("close"));
        return F(a) === !0
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              new TypeError("cannot close an already-closing stream")
            )
          : K(this);
      };
      c.releaseLock = function () {
        if (J(this) === !1) throw U("releaseLock");
        var a = this._ownerWritableStream;
        if (a === void 0) return;
        j(a._writer !== void 0);
        M(this);
      };
      c.write = function (a) {
        if (J(this) === !1)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(U("write"));
        return this._ownerWritableStream === void 0
          ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
              V("write to")
            )
          : N(this, a);
      };
      return a;
    })();
    function J(a) {
      if (!k(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_ownerWritableStream")
        ? !1
        : !0;
    }
    function da(a, b) {
      a = a._ownerWritableStream;
      j(a !== void 0);
      return w(a, b);
    }
    function K(a) {
      var c = a._ownerWritableStream;
      j(c !== void 0);
      var d = c._state;
      if (d === "closed" || d === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          new TypeError(
            "The stream (in " +
              d +
              " state) is not in the writable state and cannot be closed"
          )
        );
      j(d === "writable" || d === "erroring");
      j(F(c) === !1);
      var e = new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
        function (a, b) {
          a = { _resolve: a, _reject: b };
          c._closeRequest = a;
        }
      );
      c._backpressure === !0 && d === "writable" && $(a);
      ha(c._writableStreamController);
      return e;
    }
    function a(a) {
      var c = a._ownerWritableStream;
      j(c !== void 0);
      var d = c._state;
      if (F(c) === !0 || d === "closed")
        return b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).resolve();
      if (d === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          c._storedError
        );
      j(d === "writable" || d === "erroring");
      return K(a);
    }
    function ea(a, b) {
      a._closedPromiseState === "pending" ? X(a, b) : pa(a, b),
        a._closedPromise["catch"](function () {});
    }
    function L(a, b) {
      a._readyPromiseState === "pending" ? sa(a, b) : ua(a, b),
        a._readyPromise["catch"](function () {});
    }
    function fa(a) {
      a = a._ownerWritableStream;
      var b = a._state;
      if (b === "errored" || b === "erroring") return null;
      return b === "closed" ? 0 : O(a._writableStreamController);
    }
    function M(a) {
      var b = a._ownerWritableStream;
      j(b !== void 0);
      j(b._writer === a);
      var c = new TypeError(
        "Writer was released and can no longer be used to monitor the stream's closedness"
      );
      L(a, c);
      ea(a, c);
      b._writer = void 0;
      a._ownerWritableStream = void 0;
    }
    function N(a, c) {
      var d = a._ownerWritableStream;
      j(d !== void 0);
      var e = d._writableStreamController,
        f = ia(e, c);
      if (d !== a._ownerWritableStream)
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          V("write to")
        );
      a = d._state;
      if (a === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          d._storedError
        );
      if (F(d) === !0 || a === "closed")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          new TypeError(
            "The stream is closing or closed and cannot be written to"
          )
        );
      if (a === "erroring")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          d._storedError
        );
      j(a === "writable");
      a = x(d);
      ja(e, c, f);
      return a;
    }
    var ga = (function () {
      function a(a, b, c, d) {
        if (u(a) === !1)
          throw new TypeError(
            "WritableStreamDefaultController can only be constructed with a WritableStream instance"
          );
        if (a._writableStreamController !== void 0)
          throw new TypeError(
            "WritableStreamDefaultController instances can only be created by the WritableStream constructor"
          );
        this._controlledWritableStream = a;
        this._underlyingSink = b;
        this._queue = void 0;
        this._queueTotalSize = void 0;
        o(this);
        this._started = !1;
        b = i(c, d);
        this._strategySize = b.size;
        this._strategyHWM = b.highWaterMark;
        c = R(this);
        I(a, c);
      }
      var c = a.prototype;
      c.error = function (a) {
        if (ka(this) === !1)
          throw new TypeError(
            "WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController"
          );
        var b = this._controlledWritableStream._state;
        if (b !== "writable") return;
        S(this, a);
      };
      c[r] = function (a) {
        return h(this._underlyingSink, "abort", [a]);
      };
      c[s] = function () {
        o(this);
      };
      c[q] = function () {
        var a = this,
          c = g(this._underlyingSink, "start", [this]),
          d = this._controlledWritableStream;
        b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          .resolve(c)
          .then(
            function () {
              j(d._state === "writable" || d._state === "erroring"),
                (a._started = !0),
                P(a);
            },
            function (b) {
              j(d._state === "writable" || d._state === "erroring"),
                (a._started = !0),
                y(d, b);
            }
          )
          ["catch"](p);
      };
      return a;
    })();
    function ha(a) {
      m(a, "close", 0), P(a);
    }
    function ia(a, b) {
      var c = a._strategySize;
      if (c === void 0) return 1;
      try {
        return c(b);
      } catch (b) {
        Q(a, b);
        return 1;
      }
    }
    function O(a) {
      return a._strategyHWM - a._queueTotalSize;
    }
    function ja(a, b, c) {
      b = { chunk: b };
      try {
        m(a, b, c);
      } catch (b) {
        Q(a, b);
        return;
      }
      b = a._controlledWritableStream;
      if (F(b) === !1 && b._state === "writable") {
        c = R(a);
        I(b, c);
      }
      P(a);
    }
    function ka(a) {
      if (!k(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_underlyingSink")
        ? !1
        : !0;
    }
    function P(a) {
      var b = a._controlledWritableStream;
      if (a._started === !1) return;
      if (b._inFlightWriteRequest !== void 0) return;
      var c = b._state;
      if (c === "closed" || c === "errored") return;
      if (c === "erroring") {
        A(b);
        return;
      }
      if (a._queue.length === 0) return;
      c = n(a);
      c === "close" ? la(a) : ma(a, c.chunk);
    }
    function Q(a, b) {
      a._controlledWritableStream._state === "writable" && S(a, b);
    }
    function la(a) {
      var b = a._controlledWritableStream;
      aa(b);
      l(a);
      j(
        a._queue.length === 0,
        "queue must be empty once the final write record is dequeued"
      );
      a = h(a._underlyingSink, "close", []);
      a.then(
        function () {
          D(b);
        },
        function (a) {
          E(b, a);
        }
      )["catch"](p);
    }
    function ma(a, b) {
      var c = a._controlledWritableStream;
      ba(c);
      b = h(a._underlyingSink, "write", [b, a]);
      b.then(
        function () {
          B(c);
          var b = c._state;
          j(b === "writable" || b === "erroring");
          l(a);
          if (F(c) === !1 && b === "writable") {
            b = R(a);
            I(c, b);
          }
          P(a);
        },
        function (a) {
          C(c, a);
        }
      )["catch"](p);
    }
    function R(a) {
      a = O(a);
      return a <= 0;
    }
    function S(a, b) {
      a = a._controlledWritableStream;
      j(a._state === "writable");
      z(a, b);
    }
    function T(a) {
      return new TypeError(
        "WritableStream.prototype." +
          a +
          " can only be used on a WritableStream"
      );
    }
    function U(a) {
      return new TypeError(
        "WritableStreamDefaultWriter.prototype." +
          a +
          " can only be used on a WritableStreamDefaultWriter"
      );
    }
    function V(a) {
      return new TypeError("Cannot " + a + " a stream using a released writer");
    }
    function W(a) {
      a._closedPromise = new (b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ))(function (b, c) {
        (a._closedPromise_resolve = b),
          (a._closedPromise_reject = c),
          (a._closedPromiseState = "pending");
      });
    }
    function na(a, c) {
      (a._closedPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).reject(c)),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0),
        (a._closedPromiseState = "rejected");
    }
    function oa(a) {
      (a._closedPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).resolve(void 0)),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0),
        (a._closedPromiseState = "resolved");
    }
    function X(a, b) {
      j(
        a._closedPromise_resolve !== void 0,
        "writer._closedPromise_resolve !== undefined"
      ),
        j(
          a._closedPromise_reject !== void 0,
          "writer._closedPromise_reject !== undefined"
        ),
        j(
          a._closedPromiseState === "pending",
          "writer._closedPromiseState is pending"
        ),
        a._closedPromise_reject(b),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0),
        (a._closedPromiseState = "rejected");
    }
    function pa(a, c) {
      j(
        a._closedPromise_resolve === void 0,
        "writer._closedPromise_resolve === undefined"
      ),
        j(
          a._closedPromise_reject === void 0,
          "writer._closedPromise_reject === undefined"
        ),
        j(
          a._closedPromiseState !== "pending",
          "writer._closedPromiseState is not pending"
        ),
        (a._closedPromise = b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).reject(c)),
        (a._closedPromiseState = "rejected");
    }
    function qa(a) {
      j(
        a._closedPromise_resolve !== void 0,
        "writer._closedPromise_resolve !== undefined"
      ),
        j(
          a._closedPromise_reject !== void 0,
          "writer._closedPromise_reject !== undefined"
        ),
        j(
          a._closedPromiseState === "pending",
          "writer._closedPromiseState is pending"
        ),
        a._closedPromise_resolve(void 0),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0),
        (a._closedPromiseState = "resolved");
    }
    function ra(a) {
      (a._readyPromise = new (b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ))(function (b, c) {
        (a._readyPromise_resolve = b), (a._readyPromise_reject = c);
      })),
        (a._readyPromiseState = "pending");
    }
    function Y(a, c) {
      (a._readyPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).reject(c)),
        (a._readyPromise_resolve = void 0),
        (a._readyPromise_reject = void 0),
        (a._readyPromiseState = "rejected");
    }
    function Z(a) {
      (a._readyPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).resolve(void 0)),
        (a._readyPromise_resolve = void 0),
        (a._readyPromise_reject = void 0),
        (a._readyPromiseState = "fulfilled");
    }
    function sa(a, b) {
      j(
        a._readyPromise_resolve !== void 0,
        "writer._readyPromise_resolve !== undefined"
      ),
        j(
          a._readyPromise_reject !== void 0,
          "writer._readyPromise_reject !== undefined"
        ),
        a._readyPromise_reject(b),
        (a._readyPromise_resolve = void 0),
        (a._readyPromise_reject = void 0),
        (a._readyPromiseState = "rejected");
    }
    function ta(a) {
      j(
        a._readyPromise_resolve === void 0,
        "writer._readyPromise_resolve === undefined"
      ),
        j(
          a._readyPromise_reject === void 0,
          "writer._readyPromise_reject === undefined"
        ),
        (a._readyPromise = new (b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ))(function (b, c) {
          (a._readyPromise_resolve = b), (a._readyPromise_reject = c);
        })),
        (a._readyPromiseState = "pending");
    }
    function ua(a, c) {
      j(
        a._readyPromise_resolve === void 0,
        "writer._readyPromise_resolve === undefined"
      ),
        j(
          a._readyPromise_reject === void 0,
          "writer._readyPromise_reject === undefined"
        ),
        (a._readyPromise = b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).reject(c)),
        (a._readyPromiseState = "rejected");
    }
    function $(a) {
      j(
        a._readyPromise_resolve !== void 0,
        "writer._readyPromise_resolve !== undefined"
      ),
        j(
          a._readyPromise_reject !== void 0,
          "writer._readyPromise_reject !== undefined"
        ),
        a._readyPromise_resolve(void 0),
        (a._readyPromise_resolve = void 0),
        (a._readyPromise_reject = void 0),
        (a._readyPromiseState = "fulfilled");
    }
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/xJJVNnYMU5E/
 */
__d(
  "oz-player-polaris/shims/default/polyfills/stream/PolarisOzReadableStreamPolyfill",
  [
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamUtils",
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamHelpers"
      )).ArrayBufferCopy,
      h = c.CreateIterResultObject,
      i = c.InvokeOrNoop,
      j = c.IsFiniteNonNegativeNumber,
      k = c.PromiseInvokeOrNoop,
      l = c.TransferArrayBuffer,
      m = c.ValidateAndNormalizeHighWaterMark,
      n = c.ValidateAndNormalizeQueuingStrategy,
      o = c.assert,
      p = c.createArrayFromList,
      q = c.createDataProperty,
      r = c.typeIsObject,
      s = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes"
      ).DequeueValue,
      t = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes"
      ).EnqueueValueWithSize,
      u = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamQueueWithSizes"
      ).ResetQueue,
      v = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzStreamUtils"
      ).rethrowAssertionErrorRejection,
      aa = (d = b(
        "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill"
      )).AcquireWritableStreamDefaultWriter,
      ba = d.IsWritableStream,
      ca = d.IsWritableStreamLocked,
      da = d.WritableStreamAbort,
      w = d.WritableStreamCloseQueuedOrInFlight,
      ea = d.WritableStreamDefaultWriterCloseWithErrorPropagation,
      fa = d.WritableStreamDefaultWriterRelease,
      ga = d.WritableStreamDefaultWriterWrite,
      x = "[[CancelSteps]]",
      y = "[[PullSteps]]",
      z = (function () {
        function a(a, b) {
          a === void 0 && (a = {});
          b = b === void 0 ? {} : b;
          var c = b.highWaterMark;
          b = b.size;
          this._state = "readable";
          this._reader = void 0;
          this._storedError = void 0;
          this._disturbed = !1;
          this._readableStreamController = void 0;
          var d = a.type,
            e = String(d);
          if (e === "bytes")
            c === void 0 && (c = 0),
              (this._readableStreamController = new Ca(this, a, c));
          else if (d === void 0)
            c === void 0 && (c = 1),
              (this._readableStreamController = new ya(this, a, b, c));
          else throw new RangeError("Invalid type is specified");
          Object.defineProperty &&
            Object.defineProperty(this, "locked", {
              get: this._isLocked.bind(this),
            });
        }
        var c = a.prototype;
        c._isLocked = function () {
          if (B(this) === !1) throw V("locked");
          return C(this);
        };
        c.cancel = function (a) {
          if (B(this) === !1)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(V("cancel"));
          return C(this) === !0
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                new TypeError(
                  "Cannot cancel a stream that already has a reader"
                )
              )
            : D(this, a);
        };
        c.getReader = function (a) {
          a = a === void 0 ? {} : a;
          a = a.mode;
          if (B(this) === !1) throw V("getReader");
          if (a === void 0) return A(this);
          a = String(a);
          if (a === "byob") return ha(this);
          throw new RangeError("Invalid mode is specified");
        };
        c.pipeThrough = function (a, b) {
          var c = a.readable;
          a = a.writable;
          if (a === void 0 || c === void 0)
            throw new TypeError(
              "readable and writable arguments must be defined"
            );
          a = this.pipeTo(a, b);
          db(a);
          return c;
        };
        c.pipeTo = function (a, c) {
          var d = this;
          c = c === void 0 ? {} : c;
          var e = c.preventAbort,
            f = c.preventCancel,
            g = c.preventClose;
          if (B(this) === !1)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(V("pipeTo"));
          if (ba(a) === !1)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(
              new TypeError(
                "ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
              )
            );
          g = Boolean(g);
          e = Boolean(e);
          f = Boolean(f);
          if (C(this) === !0)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(
              new TypeError(
                "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
              )
            );
          if (ca(a) === !0)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(
              new TypeError(
                "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
              )
            );
          var h = A(this),
            i = aa(a),
            j = !1,
            k = b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).resolve();
          return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
            function (c, l) {
              function m() {
                k = b(
                  "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
                ).resolve();
                return j === !0
                  ? b(
                      "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
                    ).resolve()
                  : i._readyPromise
                      .then(function () {
                        return xa(h).then(function (a) {
                          var b = a.done;
                          a = a.value;
                          if (b === !0) return;
                          k = ga(i, a)["catch"](function () {});
                        });
                      })
                      .then(m);
              }
              p(d, h._closedPromise, function (b) {
                e === !1
                  ? r(
                      function () {
                        return da(a, b);
                      },
                      !0,
                      b
                    )
                  : s(!0, b);
              });
              p(a, i._closedPromise, function (a) {
                f === !1
                  ? r(
                      function () {
                        return D(d, a);
                      },
                      !0,
                      a
                    )
                  : s(!0, a);
              });
              q(d, h._closedPromise, function () {
                g === !1
                  ? r(function () {
                      return ea(i);
                    })
                  : s();
              });
              if (w(a) === !0 || a._state === "closed") {
                var n = new TypeError(
                  "the destination writable stream closed before all data could be piped to it"
                );
                f === !1
                  ? r(
                      function () {
                        return D(d, n);
                      },
                      !0,
                      n
                    )
                  : s(!0, n);
              }
              m()["catch"](function (a) {
                (k = b(
                  "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
                ).resolve()),
                  v(a);
              });
              function o() {
                var a = k;
                return k.then(function () {
                  return a !== k ? o() : void 0;
                });
              }
              function p(a, b, c) {
                a._state === "errored"
                  ? c(a._storedError)
                  : b["catch"](c)["catch"](v);
              }
              function q(a, b, c) {
                a._state === "closed" ? c() : b.then(c)["catch"](v);
              }
              function r(b, c, d) {
                if (j === !0) return;
                j = !0;
                a._state === "writable" && w(a) === !1 ? o().then(e) : e();
                function e() {
                  b()
                    .then(
                      function () {
                        return t(c, d);
                      },
                      function (a) {
                        return t(!0, a);
                      }
                    )
                    ["catch"](v);
                }
              }
              function s(b, c) {
                if (j === !0) return;
                j = !0;
                a._state === "writable" && w(a) === !1
                  ? o()
                      .then(function () {
                        return t(b, c);
                      })
                      ["catch"](v)
                  : t(b, c);
              }
              function t(a, b) {
                fa(i), va(h), a ? l(b) : c(void 0);
              }
            }
          );
        };
        c.tee = function () {
          if (B(this) === !1) throw V("tee");
          var a = ia(this, !1);
          return p(a);
        };
        return a;
      })();
    e.exports = {
      ReadableStream: z,
      IsReadableStreamDisturbed: a,
      ReadableStreamDefaultControllerClose: N,
      ReadableStreamDefaultControllerEnqueue: O,
      ReadableStreamDefaultControllerError: P,
      ReadableStreamDefaultControllerGetDesiredSize: Aa,
    };
    function ha(a) {
      return new sa(a);
    }
    function A(a) {
      return new ra(a);
    }
    function B(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(
        a,
        "_readableStreamController"
      )
        ? !1
        : !0;
    }
    function a(a) {
      o(
        B(a) === !0,
        "IsReadableStreamDisturbed should only be used on known readable streams"
      );
      return a._disturbed;
    }
    function C(a) {
      o(
        B(a) === !0,
        "IsReadableStreamLocked should only be used on known readable streams"
      );
      return a._reader === void 0 ? !1 : !0;
    }
    function ia(a, c) {
      o(B(a) === !0);
      o(typeof c === "boolean");
      var d = A(a),
        e = {
          closedOrErrored: !1,
          canceled1: !1,
          canceled2: !1,
          reason1: void 0,
          reason2: void 0,
        };
      e.promise = new (b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ))(function (a) {
        e._resolve = a;
      });
      var f = ja();
      f._reader = d;
      f._teeState = e;
      f._cloneForBranch2 = c;
      c = ka();
      c._stream = a;
      c._teeState = e;
      var g = la();
      g._stream = a;
      g._teeState = e;
      a = Object.create(Object.prototype);
      q(a, "pull", f);
      q(a, "cancel", c);
      c = new z(a);
      a = Object.create(Object.prototype);
      q(a, "pull", f);
      q(a, "cancel", g);
      g = new z(a);
      f._branch1 = c._readableStreamController;
      f._branch2 = g._readableStreamController;
      d._closedPromise["catch"](function (a) {
        if (e.closedOrErrored === !0) return;
        P(f._branch1, a);
        P(f._branch2, a);
        e.closedOrErrored = !0;
      });
      return [c, g];
    }
    function ja() {
      function a() {
        var b = a._branch1,
          c = a._branch2,
          d = a._reader,
          e = a._teeState;
        return xa(d).then(function (a) {
          o(r(a));
          var d = a.value;
          a = a.done;
          o(typeof a === "boolean");
          a === !0 &&
            e.closedOrErrored === !1 &&
            (e.canceled1 === !1 && N(b),
            e.canceled2 === !1 && N(c),
            (e.closedOrErrored = !0));
          if (e.closedOrErrored === !0) return;
          a = d;
          d = d;
          e.canceled1 === !1 && O(b, a);
          e.canceled2 === !1 && O(c, d);
        });
      }
      return a;
    }
    function ka() {
      function a(b) {
        var c = a._stream,
          d = a._teeState;
        d.canceled1 = !0;
        d.reason1 = b;
        if (d.canceled2 === !0) {
          b = p([d.reason1, d.reason2]);
          c = D(c, b);
          d._resolve(c);
        }
        return d.promise;
      }
      return a;
    }
    function la() {
      function a(b) {
        var c = a._stream,
          d = a._teeState;
        d.canceled2 = !0;
        d.reason2 = b;
        if (d.canceled1 === !0) {
          b = p([d.reason1, d.reason2]);
          c = D(c, b);
          d._resolve(c);
        }
        return d.promise;
      }
      return a;
    }
    function ma(a) {
      o(J(a._reader) === !0);
      o(a._state === "readable" || a._state === "closed");
      return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
        function (b, c) {
          b = { _resolve: b, _reject: c };
          a._reader._readIntoRequests.push(b);
        }
      );
    }
    function na(a) {
      o(K(a._reader) === !0);
      o(a._state === "readable");
      return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
        function (b, c) {
          b = { _resolve: b, _reject: c };
          a._reader._readRequests.push(b);
        }
      );
    }
    function D(a, c) {
      a._disturbed = !0;
      if (a._state === "closed")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve(
          void 0
        );
      if (a._state === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          a._storedError
        );
      E(a);
      a = a._readableStreamController[x](c);
      return a.then(function () {
        return void 0;
      });
    }
    function E(a) {
      o(a._state === "readable");
      a._state = "closed";
      a = a._reader;
      if (a === void 0) return void 0;
      if (K(a) === !0) {
        for (
          var b = a._readRequests,
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
          e = e._resolve;
          e(h(void 0, !0));
        }
        a._readRequests = [];
      }
      bb(a);
      return void 0;
    }
    function oa(a, b) {
      o(B(a) === !0, "stream must be ReadableStream");
      o(a._state === "readable", "state must be readable");
      a._state = "errored";
      a._storedError = b;
      a = a._reader;
      if (a === void 0) return void 0;
      if (K(a) === !0) {
        for (
          var c = a._readRequests,
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
          f._reject(b);
        }
        a._readRequests = [];
      } else {
        o(J(a), "reader must be ReadableStreamBYOBReader");
        for (
          f = a._readIntoRequests,
            e = Array.isArray(f),
            d = 0,
            f = e
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
          c._reject(b);
        }
        a._readIntoRequests = [];
      }
      $a(a, b);
      a._closedPromise["catch"](function () {});
    }
    function pa(a, b, c) {
      a = a._reader;
      o(a._readIntoRequests.length > 0);
      a = a._readIntoRequests.shift();
      a._resolve(h(b, c));
    }
    function F(a, b, c) {
      a = a._reader;
      o(a._readRequests.length > 0);
      a = a._readRequests.shift();
      a._resolve(h(b, c));
    }
    function qa(a) {
      return a._reader._readIntoRequests.length;
    }
    function G(a) {
      return a._reader._readRequests.length;
    }
    function H(a) {
      a = a._reader;
      if (a === void 0) return !1;
      return J(a) === !1 ? !1 : !0;
    }
    function I(a) {
      a = a._reader;
      if (a === void 0) return !1;
      return K(a) === !1 ? !1 : !0;
    }
    var ra = (function () {
        function a(a) {
          if (B(a) === !1)
            throw new TypeError(
              "ReadableStreamDefaultReader can only be constructed with a ReadableStream instance"
            );
          if (C(a) === !0)
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader"
            );
          ta(this, a);
          this._readRequests = [];
          Object.defineProperty &&
            Object.defineProperty(this, "closed", {
              get: this._isClosed.bind(this),
            });
        }
        var c = a.prototype;
        c._isClosed = function () {
          return K(this) === !1
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                X("closed")
              )
            : this._closedPromise;
        };
        c.cancel = function (a) {
          if (K(this) === !1)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(X("cancel"));
          return this._ownerReadableStream === void 0
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                W("cancel")
              )
            : ua(this, a);
        };
        c.read = function () {
          if (K(this) === !1)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(X("read"));
          return this._ownerReadableStream === void 0
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                W("read from")
              )
            : xa(this);
        };
        c.releaseLock = function () {
          if (K(this) === !1) throw X("releaseLock");
          if (this._ownerReadableStream === void 0) return;
          if (this._readRequests.length > 0)
            throw new TypeError(
              "Tried to release a reader lock when that reader has pending read() calls un-settled"
            );
          va(this);
        };
        return a;
      })(),
      sa = (function () {
        function a(a) {
          if (!B(a))
            throw new TypeError(
              "ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source"
            );
          if (R(a._readableStreamController) === !1)
            throw new TypeError(
              "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
            );
          if (C(a))
            throw new TypeError(
              "This stream has already been locked for exclusive reading by another reader"
            );
          ta(this, a);
          this._readIntoRequests = [];
          Object.defineProperty &&
            Object.defineProperty(this, "closed", {
              get: this._isClosed.bind(this),
            });
        }
        var c = a.prototype;
        c._isClosed = function () {
          return !J(this)
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                Y("closed")
              )
            : this._closedPromise;
        };
        c.cancel = function (a) {
          if (!J(this))
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(Y("cancel"));
          return this._ownerReadableStream === void 0
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                W("cancel")
              )
            : ua(this, a);
        };
        c.read = function (a) {
          if (!J(this))
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(Y("read"));
          if (this._ownerReadableStream === void 0)
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(W("read from"));
          if (!ArrayBuffer.isView(a))
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).reject(new TypeError("view must be an array buffer view"));
          return a.byteLength === 0
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
                new TypeError("view must have non-zero byteLength")
              )
            : wa(this, a);
        };
        c.releaseLock = function () {
          if (!J(this)) throw Y("releaseLock");
          if (this._ownerReadableStream === void 0) return;
          if (this._readIntoRequests.length > 0)
            throw new TypeError(
              "Tried to release a reader lock when that reader has pending read() calls un-settled"
            );
          va(this);
        };
        return a;
      })();
    function J(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_readIntoRequests")
        ? !1
        : !0;
    }
    function K(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_readRequests")
        ? !1
        : !0;
    }
    function ta(a, b) {
      (a._ownerReadableStream = b),
        (b._reader = a),
        b._state === "readable"
          ? Xa(a)
          : b._state === "closed"
          ? Za(a)
          : (o(b._state === "errored", "state must be errored"),
            Ya(a, b._storedError),
            a._closedPromise["catch"](function () {}));
    }
    function ua(a, b) {
      a = a._ownerReadableStream;
      o(a !== void 0);
      return D(a, b);
    }
    function va(a) {
      o(a._ownerReadableStream !== void 0),
        o(a._ownerReadableStream._reader === a),
        a._ownerReadableStream._state === "readable"
          ? $a(
              a,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness"
              )
            )
          : ab(
              a,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness"
              )
            ),
        a._closedPromise["catch"](function () {}),
        (a._ownerReadableStream._reader = void 0),
        (a._ownerReadableStream = void 0);
    }
    function wa(a, c) {
      a = a._ownerReadableStream;
      o(a !== void 0);
      a._disturbed = !0;
      return a._state === "errored"
        ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
            a._storedError
          )
        : Ma(a._readableStreamController, c);
    }
    function xa(a) {
      a = a._ownerReadableStream;
      o(a !== void 0);
      a._disturbed = !0;
      if (a._state === "closed")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve(
          h(void 0, !0)
        );
      if (a._state === "errored")
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").reject(
          a._storedError
        );
      o(a._state === "readable");
      return a._readableStreamController[y]();
    }
    var ya = (function () {
      function a(a, c, d, e) {
        if (B(a) === !1)
          throw new TypeError(
            "ReadableStreamDefaultController can only be constructed with a ReadableStream instance"
          );
        if (a._readableStreamController !== void 0)
          throw new TypeError(
            "ReadableStreamDefaultController instances can only be created by the ReadableStream constructor"
          );
        this._controlledReadableStream = a;
        this._underlyingSource = c;
        this._queue = void 0;
        this._queueTotalSize = void 0;
        u(this);
        this._started = !1;
        this._closeRequested = !1;
        this._pullAgain = !1;
        this._pulling = !1;
        a = n(d, e);
        this._strategySize = a.size;
        this._strategyHWM = a.highWaterMark;
        var f = this;
        d = i(c, "start", [this]);
        b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          .resolve(d)
          .then(
            function () {
              (f._started = !0),
                o(f._pulling === !1),
                o(f._pullAgain === !1),
                M(f);
            },
            function (a) {
              Q(f, a);
            }
          )
          ["catch"](v);
        Object.defineProperty &&
          Object.defineProperty(this, "desiredSize", {
            get: this._getDesiredSize.bind(this),
          });
      }
      var c = a.prototype;
      c._getDesiredSize = function () {
        if (L(this) === !1) throw Z("desiredSize");
        return Aa(this);
      };
      c.close = function () {
        if (L(this) === !1) throw Z("close");
        if (this._closeRequested === !0)
          throw new TypeError(
            "The stream has already been closed; do not close it again!"
          );
        var a = this._controlledReadableStream._state;
        if (a !== "readable")
          throw new TypeError(
            "The stream (in " +
              a +
              " state) is not in the readable state and cannot be closed"
          );
        N(this);
      };
      c.enqueue = function (a) {
        if (L(this) === !1) throw Z("enqueue");
        if (this._closeRequested === !0)
          throw new TypeError("stream is closed or draining");
        var b = this._controlledReadableStream._state;
        if (b !== "readable")
          throw new TypeError(
            "The stream (in " +
              b +
              " state) is not in the readable state and cannot be enqueued to"
          );
        return O(this, a);
      };
      c.error = function (a) {
        if (L(this) === !1) throw Z("error");
        var b = this._controlledReadableStream;
        if (b._state !== "readable")
          throw new TypeError(
            "The stream is " + b._state + " and so cannot be errored"
          );
        P(this, a);
      };
      c[x] = function (a) {
        u(this);
        return k(this._underlyingSource, "cancel", [a]);
      };
      c[y] = function () {
        var a = this._controlledReadableStream;
        if (this._queue.length > 0) {
          var c = s(this);
          this._closeRequested === !0 && this._queue.length === 0
            ? E(a)
            : M(this);
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve(h(c, !1));
        }
        c = na(a);
        M(this);
        return c;
      };
      return a;
    })();
    function L(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_underlyingSource")
        ? !1
        : !0;
    }
    function M(a) {
      var b = za(a);
      if (b === !1) return void 0;
      if (a._pulling === !0) {
        a._pullAgain = !0;
        return void 0;
      }
      o(a._pullAgain === !1);
      a._pulling = !0;
      b = k(a._underlyingSource, "pull", [a]);
      b.then(
        function () {
          a._pulling = !1;
          if (a._pullAgain === !0) {
            a._pullAgain = !1;
            return M(a);
          }
          return void 0;
        },
        function (b) {
          Q(a, b);
        }
      )["catch"](v);
      return void 0;
    }
    function za(a) {
      var b = a._controlledReadableStream;
      if (b._state === "closed" || b._state === "errored") return !1;
      if (a._closeRequested === !0) return !1;
      if (a._started === !1) return !1;
      if (C(b) === !0 && G(b) > 0) return !0;
      b = Aa(a);
      return b > 0 ? !0 : !1;
    }
    function N(a) {
      var b = a._controlledReadableStream;
      o(a._closeRequested === !1);
      o(b._state === "readable");
      a._closeRequested = !0;
      a._queue.length === 0 && E(b);
    }
    function O(a, b) {
      var c = a._controlledReadableStream;
      o(a._closeRequested === !1);
      o(c._state === "readable");
      if (C(c) === !0 && G(c) > 0) F(c, b, !1);
      else {
        c = 1;
        if (a._strategySize !== void 0) {
          var d = a._strategySize;
          try {
            c = d(b);
          } catch (b) {
            Q(a, b);
            throw b;
          }
        }
        try {
          t(a, b, c);
        } catch (b) {
          Q(a, b);
          throw b;
        }
      }
      M(a);
      return void 0;
    }
    function P(a, b) {
      var c = a._controlledReadableStream;
      o(c._state === "readable");
      u(a);
      oa(c, b);
    }
    function Q(a, b) {
      a._controlledReadableStream._state === "readable" && P(a, b);
    }
    function Aa(a) {
      var b = a._controlledReadableStream;
      b = b._state;
      if (b === "errored") return null;
      return b === "closed" ? 0 : a._strategyHWM - a._queueTotalSize;
    }
    var Ba = (function () {
        function a(a, b) {
          (this._associatedReadableByteStreamController = a),
            (this._view = b),
            Object.defineProperty &&
              Object.defineProperty(this, "view", {
                get: this._getView.bind(this),
              });
        }
        var b = a.prototype;
        b._getView = function () {
          return this._view;
        };
        b.respond = function (a) {
          if (Da(this) === !1) throw cb("respond");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          Va(this._associatedReadableByteStreamController, a);
        };
        b.respondWithNewView = function (a) {
          if (Da(this) === !1) throw cb("respond");
          if (this._associatedReadableByteStreamController === void 0)
            throw new TypeError("This BYOB request has been invalidated");
          if (!ArrayBuffer.isView(a))
            throw new TypeError("You can only respond with array buffer views");
          Wa(this._associatedReadableByteStreamController, a);
        };
        return a;
      })(),
      Ca = (function () {
        function a(a, c, d) {
          if (B(a) === !1)
            throw new TypeError(
              "ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source"
            );
          if (a._readableStreamController !== void 0)
            throw new TypeError(
              "ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source"
            );
          this._controlledReadableStream = a;
          this._underlyingByteSource = c;
          this._pullAgain = !1;
          this._pulling = !1;
          Ea(this);
          this._queue = this._queueTotalSize = void 0;
          u(this);
          this._closeRequested = !1;
          this._started = !1;
          this._strategyHWM = m(d);
          d = c.autoAllocateChunkSize;
          if (d !== void 0 && (Number.isInteger(d) === !1 || d <= 0))
            throw new RangeError(
              "autoAllocateChunkSize must be a positive integer"
            );
          this._autoAllocateChunkSize = d;
          this._pendingPullIntos = [];
          var e = this;
          d = i(c, "start", [this]);
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
            .resolve(d)
            .then(
              function () {
                (e._started = !0),
                  o(e._pulling === !1),
                  o(e._pullAgain === !1),
                  S(e);
              },
              function (b) {
                a._state === "readable" && U(e, b);
              }
            )
            ["catch"](v);
          Object.defineProperty &&
            (Object.defineProperty(this, "byobRequest", {
              get: this._getByobRequest.bind(this),
            }),
            Object.defineProperty(this, "desiredSize", {
              get: this._getByobRequest.bind(this),
            }));
        }
        var c = a.prototype;
        c._getByobRequest = function () {
          if (R(this) === !1) throw $("byobRequest");
          if (
            this._byobRequest === void 0 &&
            this._pendingPullIntos.length > 0
          ) {
            var a = this._pendingPullIntos[0];
            a = new Uint8Array(
              a.buffer,
              a.byteOffset + a.bytesFilled,
              a.byteLength - a.bytesFilled
            );
            this._byobRequest = new Ba(this, a);
          }
          return this._byobRequest;
        };
        c._getDesiredSize = function () {
          if (R(this) === !1) throw $("desiredSize");
          return Ua(this);
        };
        c.close = function () {
          if (R(this) === !1) throw $("close");
          if (this._closeRequested === !0)
            throw new TypeError(
              "The stream has already been closed; do not close it again!"
            );
          var a = this._controlledReadableStream._state;
          if (a !== "readable")
            throw new TypeError(
              "The stream (in " +
                a +
                " state) is not in the readable state and cannot be closed"
            );
          Sa(this);
        };
        c.enqueue = function (a) {
          if (R(this) === !1) throw $("enqueue");
          if (this._closeRequested === !0)
            throw new TypeError("stream is closed or draining");
          var b = this._controlledReadableStream._state;
          if (b !== "readable")
            throw new TypeError(
              "The stream (in " +
                b +
                " state) is not in the readable state and cannot be enqueued to"
            );
          if (!ArrayBuffer.isView(a))
            throw new TypeError(
              "You can only enqueue array buffer views when using a ReadableByteStreamController"
            );
          Ta(this, a);
        };
        c.error = function (a) {
          if (R(this) === !1) throw $("error");
          var b = this._controlledReadableStream;
          if (b._state !== "readable")
            throw new TypeError(
              "The stream is " + b._state + " and so cannot be errored"
            );
          U(this, a);
        };
        c[x] = function (a) {
          if (this._pendingPullIntos.length > 0) {
            var b = this._pendingPullIntos[0];
            b.bytesFilled = 0;
          }
          u(this);
          return k(this._underlyingByteSource, "cancel", [a]);
        };
        c[y] = function () {
          var a = this._controlledReadableStream;
          o(I(a) === !0);
          if (this._queueTotalSize > 0) {
            o(G(a) === 0);
            var c = this._queue.shift();
            this._queueTotalSize -= c.byteLength;
            Ja(this);
            var d;
            try {
              d = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
            } catch (a) {
              return b(
                "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
              ).reject(a);
            }
            return b(
              "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
            ).resolve(h(d, !1));
          }
          c = this._autoAllocateChunkSize;
          if (c !== void 0) {
            var e;
            try {
              e = new ArrayBuffer(c);
            } catch (a) {
              return b(
                "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
              ).reject(a);
            }
            c = {
              buffer: e,
              byteOffset: 0,
              byteLength: c,
              bytesFilled: 0,
              elementSize: 1,
              ctor: Uint8Array,
              readerType: "default",
            };
            this._pendingPullIntos.push(c);
          }
          c = na(a);
          S(this);
          return c;
        };
        return a;
      })();
    function R(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(a, "_underlyingByteSource")
        ? !1
        : !0;
    }
    function Da(a) {
      if (!r(a)) return !1;
      return !Object.prototype.hasOwnProperty.call(
        a,
        "_associatedReadableByteStreamController"
      )
        ? !1
        : !0;
    }
    function S(a) {
      var b = Ra(a);
      if (b === !1) return void 0;
      if (a._pulling === !0) {
        a._pullAgain = !0;
        return void 0;
      }
      o(a._pullAgain === !1);
      a._pulling = !0;
      b = k(a._underlyingByteSource, "pull", [a]);
      b.then(
        function () {
          (a._pulling = !1), a._pullAgain === !0 && ((a._pullAgain = !1), S(a));
        },
        function (b) {
          a._controlledReadableStream._state === "readable" && U(a, b);
        }
      )["catch"](v);
      return void 0;
    }
    function Ea(a) {
      Ka(a), (a._pendingPullIntos = []);
    }
    function Fa(a, b) {
      o(a._state !== "errored", "state must not be errored");
      var c = !1;
      a._state === "closed" && (o(b.bytesFilled === 0), (c = !0));
      var d = Ga(b);
      b.readerType === "default"
        ? F(a, d, c)
        : (o(b.readerType === "byob"), pa(a, d, c));
    }
    function Ga(a) {
      var b = a.bytesFilled,
        c = a.elementSize;
      o(b <= a.byteLength);
      o(b % c === 0);
      return new a.ctor(a.buffer, a.byteOffset, b / c);
    }
    function T(a, b, c, d) {
      a._queue.push({ buffer: b, byteOffset: c, byteLength: d }),
        (a._queueTotalSize += d);
    }
    function Ha(a, b) {
      var c = b.elementSize,
        d = b.bytesFilled - (b.bytesFilled % c),
        e = Math.min(a._queueTotalSize, b.byteLength - b.bytesFilled),
        f = b.bytesFilled + e;
      f = f - (f % c);
      c = e;
      e = !1;
      f > d && ((c = f - b.bytesFilled), (e = !0));
      d = a._queue;
      while (c > 0) {
        f = d[0];
        var h = Math.min(c, f.byteLength),
          i = b.byteOffset + b.bytesFilled;
        g(b.buffer, i, f.buffer, f.byteOffset, h);
        f.byteLength === h
          ? d.shift()
          : ((f.byteOffset += h), (f.byteLength -= h));
        a._queueTotalSize -= h;
        Ia(a, h, b);
        c -= h;
      }
      e === !1 &&
        (o(a._queueTotalSize === 0, "queue must be empty"),
        o(b.bytesFilled > 0),
        o(b.bytesFilled < b.elementSize));
      return e;
    }
    function Ia(a, b, c) {
      o(a._pendingPullIntos.length === 0 || a._pendingPullIntos[0] === c),
        Ka(a),
        (c.bytesFilled += b);
    }
    function Ja(a) {
      o(a._controlledReadableStream._state === "readable"),
        a._queueTotalSize === 0 && a._closeRequested === !0
          ? E(a._controlledReadableStream)
          : S(a);
    }
    function Ka(a) {
      if (a._byobRequest === void 0) return;
      a._byobRequest._associatedReadableByteStreamController = void 0;
      a._byobRequest._view = void 0;
      a._byobRequest = void 0;
    }
    function La(a) {
      o(a._closeRequested === !1);
      while (a._pendingPullIntos.length > 0) {
        if (a._queueTotalSize === 0) return;
        var b = a._pendingPullIntos[0];
        Ha(a, b) === !0 && (Qa(a), Fa(a._controlledReadableStream, b));
      }
    }
    function Ma(a, c) {
      var d = a._controlledReadableStream,
        e = 1;
      c.constructor !== DataView && (e = c.constructor.BYTES_PER_ELEMENT);
      var f = c.constructor;
      e = {
        buffer: c.buffer,
        byteOffset: c.byteOffset,
        byteLength: c.byteLength,
        bytesFilled: 0,
        elementSize: e,
        ctor: f,
        readerType: "byob",
      };
      if (a._pendingPullIntos.length > 0) {
        e.buffer = l(e.buffer);
        a._pendingPullIntos.push(e);
        return ma(d);
      }
      if (d._state === "closed") {
        f = new c.constructor(e.buffer, e.byteOffset, 0);
        return b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve(
          h(f, !0)
        );
      }
      if (a._queueTotalSize > 0) {
        if (Ha(a, e) === !0) {
          c = Ga(e);
          Ja(a);
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve(h(c, !1));
        }
        if (a._closeRequested === !0) {
          f = new TypeError(
            "Insufficient bytes to fill elements in the given buffer"
          );
          U(a, f);
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(f);
        }
      }
      e.buffer = l(e.buffer);
      a._pendingPullIntos.push(e);
      c = ma(d);
      S(a);
      return c;
    }
    function Na(a, b) {
      b.buffer = l(b.buffer);
      o(b.bytesFilled === 0, "bytesFilled must be 0");
      b = a._controlledReadableStream;
      if (H(b) === !0)
        while (qa(b) > 0) {
          var c = Qa(a);
          Fa(b, c);
        }
    }
    function Oa(a, b, c) {
      if (c.bytesFilled + b > c.byteLength)
        throw new RangeError("bytesWritten out of range");
      Ia(a, b, c);
      if (c.bytesFilled < c.elementSize) return;
      Qa(a);
      b = c.bytesFilled % c.elementSize;
      if (b > 0) {
        var d = c.byteOffset + c.bytesFilled;
        d = c.buffer.slice(d - b, d);
        T(a, d, 0, d.byteLength);
      }
      c.buffer = l(c.buffer);
      c.bytesFilled -= b;
      Fa(a._controlledReadableStream, c);
      La(a);
    }
    function Pa(a, b) {
      var c = a._pendingPullIntos[0],
        d = a._controlledReadableStream;
      if (d._state === "closed") {
        if (b !== 0)
          throw new TypeError(
            "bytesWritten must be 0 when calling respond() on a closed stream"
          );
        Na(a, c);
      } else o(d._state === "readable"), Oa(a, b, c);
    }
    function Qa(a) {
      var b = a._pendingPullIntos.shift();
      Ka(a);
      return b;
    }
    function Ra(a) {
      var b = a._controlledReadableStream;
      if (b._state !== "readable") return !1;
      if (a._closeRequested === !0) return !1;
      if (a._started === !1) return !1;
      if (I(b) === !0 && G(b) > 0) return !0;
      if (H(b) === !0 && qa(b) > 0) return !0;
      return Ua(a) > 0 ? !0 : !1;
    }
    function Sa(a) {
      var b = a._controlledReadableStream;
      o(a._closeRequested === !1);
      o(b._state === "readable");
      if (a._queueTotalSize > 0) {
        a._closeRequested = !0;
        return;
      }
      if (a._pendingPullIntos.length > 0) {
        var c = a._pendingPullIntos[0];
        if (c.bytesFilled > 0) {
          c = new TypeError(
            "Insufficient bytes to fill elements in the given buffer"
          );
          U(a, c);
          throw c;
        }
      }
      E(b);
    }
    function Ta(a, b) {
      var c = a._controlledReadableStream;
      o(a._closeRequested === !1);
      o(c._state === "readable");
      var d = b.buffer,
        e = b.byteOffset;
      b = b.byteLength;
      d = l(d);
      if (I(c) === !0)
        if (G(c) === 0) T(a, d, e, b);
        else {
          o(a._queue.length === 0);
          var f = new Uint8Array(d, e, b);
          F(c, f, !1);
        }
      else
        H(c) === !0
          ? (T(a, d, e, b), La(a))
          : (o(C(c) === !1, "stream must not be locked"), T(a, d, e, b));
    }
    function U(a, b) {
      var c = a._controlledReadableStream;
      o(c._state === "readable");
      Ea(a);
      u(a);
      oa(c, b);
    }
    function Ua(a) {
      var b = a._controlledReadableStream;
      b = b._state;
      if (b === "errored") return null;
      return b === "closed" ? 0 : a._strategyHWM - a._queueTotalSize;
    }
    function Va(a, b) {
      b = Number(b);
      if (j(b) === !1) throw new RangeError("bytesWritten must be a finite");
      o(a._pendingPullIntos.length > 0);
      Pa(a, b);
    }
    function Wa(a, b) {
      o(a._pendingPullIntos.length > 0);
      var c = a._pendingPullIntos[0];
      if (c.byteOffset + c.bytesFilled !== b.byteOffset)
        throw new RangeError(
          "The region specified by view does not match byobRequest"
        );
      if (c.byteLength !== b.byteLength)
        throw new RangeError(
          "The buffer of view has different capacity than byobRequest"
        );
      c.buffer = b.buffer;
      Pa(a, b.byteLength);
    }
    function V(a) {
      return new TypeError(
        "ReadableStream.prototype." +
          a +
          " can only be used on a ReadableStream"
      );
    }
    function W(a) {
      return new TypeError("Cannot " + a + " a stream using a released reader");
    }
    function X(a) {
      return new TypeError(
        "ReadableStreamDefaultReader.prototype." +
          a +
          " can only be used on a ReadableStreamDefaultReader"
      );
    }
    function Xa(a) {
      a._closedPromise = new (b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ))(function (b, c) {
        (a._closedPromise_resolve = b), (a._closedPromise_reject = c);
      });
    }
    function Ya(a, c) {
      (a._closedPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).reject(c)),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0);
    }
    function Za(a) {
      (a._closedPromise = b(
        "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
      ).resolve(void 0)),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0);
    }
    function $a(a, b) {
      o(a._closedPromise_resolve !== void 0),
        o(a._closedPromise_reject !== void 0),
        a._closedPromise_reject(b),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0);
    }
    function ab(a, c) {
      o(a._closedPromise_resolve === void 0),
        o(a._closedPromise_reject === void 0),
        (a._closedPromise = b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).reject(c));
    }
    function bb(a) {
      o(a._closedPromise_resolve !== void 0),
        o(a._closedPromise_reject !== void 0),
        a._closedPromise_resolve(void 0),
        (a._closedPromise_resolve = void 0),
        (a._closedPromise_reject = void 0);
    }
    function Y(a) {
      return new TypeError(
        "ReadableStreamBYOBReader.prototype." +
          a +
          " can only be used on a ReadableStreamBYOBReader"
      );
    }
    function Z(a) {
      return new TypeError(
        "ReadableStreamDefaultController.prototype." +
          a +
          " can only be used on a ReadableStreamDefaultController"
      );
    }
    function cb(a) {
      return new TypeError(
        "ReadableStreamBYOBRequest.prototype." +
          a +
          " can only be used on a ReadableStreamBYOBRequest"
      );
    }
    function $(a) {
      return new TypeError(
        "ReadableByteStreamController.prototype." +
          a +
          " can only be used on a ReadableByteStreamController"
      );
    }
    function db(a) {
      try {
        b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).prototype.then.call(a, void 0, function () {});
      } catch (a) {}
    }
  },
  null
);
__d(
  "oz-player-polaris/shims/default/utils/polarisShouldPolyfillStreams",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function () {
      return (
        window.WritableStream == null ||
        window.ReadableStream == null ||
        window.ReadableStream.prototype.pipeTo == null ||
        window.ReadableStream.prototype.pipeThrough == null
      );
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzReadableStreamDefault",
  [
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzReadableStreamPolyfill",
    "oz-player-polaris/shims/default/utils/polarisShouldPolyfillStreams",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    (b(
      "oz-player-polaris/shims/default/polyfills/stream/PolarisOzReadableStreamPolyfill"
    ).ReadableStream.isPolyfilled = !0),
      (e.exports = b(
        "oz-player-polaris/shims/default/utils/polarisShouldPolyfillStreams"
      )()
        ? b(
            "oz-player-polaris/shims/default/polyfills/stream/PolarisOzReadableStreamPolyfill"
          ).ReadableStream
        : window.ReadableStream);
  },
  null
);
__d(
  "oz-player-polaris/shims/PolarisOzReadableStream",
  ["oz-player-polaris/shims/default/PolarisOzReadableStreamDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzReadableStreamDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polarisOzClearTimeoutDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = window.clearTimeout;
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/polarisOzClearTimeout",
  ["oz-player-polaris/shims/default/polarisOzClearTimeoutDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/polarisOzClearTimeoutDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polarisOzSetTimeoutAcrossTransitionsDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = window.setTimeout;
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
  [
    "oz-player-polaris/shims/default/polarisOzSetTimeoutAcrossTransitionsDefault",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/polarisOzSetTimeoutAcrossTransitionsDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/states/PolarisOzObservedSourceBufferState",
  [
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
      "oz-player-polaris/shims/PolarisOzDOMEventListener"
    ).listenDOMEvent;
    a = (function () {
      function a(a) {
        var c = this;
        this.$2 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$3 = [];
        this.$4 = function () {
          var a = [];
          for (var b = 0; b < c.$1.buffered.length; b++)
            a.push({
              startTime: c.$1.buffered.start(b),
              endTime: c.$1.buffered.end(b),
            });
          c.$3 = a;
        };
        this.$1 = a;
        this.$2.addSubscriptions(
          g(this.$1, "updateend", this.$4),
          g(this.$1, "error", this.$4)
        );
      }
      var c = a.prototype;
      c.getBufferedRanges = function () {
        return this.$3;
      };
      c.addEventListener = function (a, b) {
        return g(this.$1, "updateend", b);
      };
      c.destroy = function () {
        this.$2.release(), this.$2.engage();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzSourceBufferUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = 0;
      for (var c = 0; c < a.buffered.length; c++)
        b += a.buffered.end(c) - a.buffered.start(c);
      return b;
    }
    function b(a) {
      var b = null;
      try {
        b = a.buffered;
      } catch (a) {
        throw a;
      }
      return b.length > 0 ? b.end(b.length - 1) : 0;
    }
    f.getTotalBufferedTime = a;
    f.getEndBufferedTime = b;
  },
  66
);
__d(
  "oz-player-polaris/utils/polarisOzConcatArrayBuffer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b) {
      var c = new Uint8Array(a.byteLength + b.byteLength);
      c.set(new Uint8Array(a), 0);
      c.set(new Uint8Array(b), a.byteLength);
      return c.buffer;
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/media_source/PolarisSourceBufferManager",
  [
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzReadableStream",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzClearTimeout",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
    "oz-player-polaris/states/PolarisOzObservedSourceBufferState",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzSourceBufferUtil",
    "oz-player-polaris/utils/polarisOzConcatArrayBuffer",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b("oz-player-polaris/shims/PolarisOzDOMEventListener").listenDOMEvent,
      i = b(
        "oz-player-polaris/utils/PolarisOzSourceBufferUtil"
      ).getEndBufferedTime,
      j = b(
        "oz-player-polaris/utils/PolarisOzSourceBufferUtil"
      ).getTotalBufferedTime,
      k = b("oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions");
    a = (function () {
      function a(a, c, d) {
        var e = this;
        this.$2 = null;
        this.$3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$5 = !1;
        this.$6 = [];
        this.$11 = function () {
          e.$2 && e.$2.resolve(), (e.$2 = null);
        };
        this.$12 = function () {
          var a = e.$2;
          a &&
            (b("oz-player-polaris/shims/polarisOzClearTimeout")(e.$10),
            (e.$10 = k(function () {
              e.$10 = null;
              var c = e.$8.getErrorCode(),
                d = e.$8.getMediaErrorName(),
                f = {};
              f.code = c != null ? c.toString() : d != null ? d : "OZ_SB-1";
              c = new (b("oz-player-polaris/utils/PolarisOzError"))({
                type: "OZ_SOURCE_BUFFER",
                description:
                  d != null ? d : "Unknown SourceBuffer Append Error",
                extra: f,
              });
              a.reject(c);
              e.$2 = null;
            }, 0)));
        };
        this.$1 = a;
        this.$9 = c;
        this.$3.addSubscriptions(
          h(this.$1, "updateend", this.$11),
          h(this.$1, "error", this.$12)
        );
        this.$7 = new (b(
          "oz-player-polaris/states/PolarisOzObservedSourceBufferState"
        ))(this.$1);
        this.$8 = d;
      }
      var c = a.prototype;
      c.queueData = function (a, c, d) {
        c === void 0 && (c = null);
        d === void 0 && (d = 0);
        var e = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
        );
        this.$6.push({
          data: a,
          deferred: e,
          loggerProvider: c,
          appendTarget: d,
        });
        a = e.getPromise();
        this.$5 ||
          (this.$9.getBool("queue_data_with_error_handling")
            ? this.$13()
            : this.$14());
        return a;
      };
      c.cancelOperationAndCleanQueue = function () {
        var a = this.$15();
        this.$6.forEach(function (b) {
          b = b.deferred;
          b.reject(a);
        });
        this.$6 = [];
        this.$1.abort();
        var c = b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve(),
          d = this.$2;
        d && (d.reject(a), (c = d.getPromise()["catch"](function () {})));
        this.$4 && (this.$4.reject(a), (this.$4 = null));
        return c;
      };
      c.getSourceBufferState = function () {
        return this.$7;
      };
      c.clearRange = function (a, b) {
        this.$1.remove(a, b);
      };
      c.$16 = function (a) {
        var c = (this.$2 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
        ));
        c = c.getPromise();
        a && g(c, a, "wait_for_source_buffer");
        return c;
      };
      c.$17 = function (a, c) {
        var d = this;
        if (this.$2 !== null)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(this.$18("cannot have concurrent appends"));
        var e = function e() {
          if (
            d.$9.getBool("sbm_recursively_waits_for_update_end") &&
            d.$1.updating
          )
            return d
              .$16(c)
              .then(e)
              ["catch"](function (a) {
                if (d.$9.getBool("enable_appends_on_wait_update_end_failure"))
                  return e();
                throw a;
              });
          var f = (d.$2 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          ));
          try {
            d.$1.appendBuffer(a);
          } catch (a) {
            var h = d.$8.getErrorCode();
            h = new (b("oz-player-polaris/utils/PolarisOzError"))({
              type: "OZ_SOURCE_BUFFER",
              description: a.message,
              extra: {
                originalError: a,
                code: h != null ? h.toString() : "OZ_SB-0",
              },
            });
            d.$2 = null;
            f.reject(h);
          }
          h = f.getPromise();
          c &&
            g(h, c, "append", function (b) {
              b.setLength(a.byteLength);
            });
          var i = d.$9.getBool("log_appended_secs") ? j(d.$1) : 0;
          return h.then(function () {
            return d.$9.getBool("log_appended_secs") ? j(d.$1) - i : 0;
          });
        };
        if (!this.$9.getBool("sbm_waits_for_update_end")) return e();
        return !this.$9.getBool("sbm_recursively_waits_for_update_end") &&
          this.$1.updating
          ? this.$16(c)
              .then(e)
              ["catch"](function (a) {
                if (d.$9.getBool("enable_appends_on_wait_update_end_failure"))
                  return e();
                throw a;
              })
          : e();
      };
      c.$14 = function () {
        var a = this;
        if (this.$5)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(this.$18("Another unit of queued data is being appended."));
        var c = this.$6.shift();
        if (!c) {
          this.$5 = !1;
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve();
        }
        var d = c.appendTarget,
          e = c.data,
          f = c.deferred;
        c = c.loggerProvider;
        this.$5 = !0;
        d =
          e instanceof b("oz-player-polaris/shims/PolarisOzReadableStream")
            ? this.$19(e, c, d)
            : this.$17(e, c);
        var g = this.$9.getBool("generate_mos_segment_appended_secs")
          ? i(this.$1)
          : NaN;
        return d["catch"](function (a) {
          f.reject(a);
          return 0;
        }).then(function (b) {
          var c = a.$9.getBool("generate_mos_segment_appended_secs")
            ? i(a.$1)
            : NaN;
          f.resolve({
            startTime_UNSAFE: g,
            endTime_UNSAFE: c,
            appendedSec: a.$9.getBool("generate_mos_segment_appended_secs")
              ? c - g
              : b,
          });
          a.$5 = !1;
          a.$14();
        });
      };
      c.$13 = function () {
        var a = this;
        try {
          if (this.$5)
            throw this.$18("Another unit of queued data is being appended.");
          var c = this.$6.shift();
          if (!c) {
            this.$5 = !1;
            return;
          }
          var d = c.appendTarget,
            e = c.data,
            f = c.deferred;
          c = c.loggerProvider;
          this.$5 = !0;
          d =
            e instanceof b("oz-player-polaris/shims/PolarisOzReadableStream")
              ? this.$19(e, c, d)
              : this.$17(e, c);
          var g = this.$9.getBool("generate_mos_segment_appended_secs")
            ? i(this.$1)
            : NaN;
          d.then(
            function (b) {
              var c = a.$9.getBool("generate_mos_segment_appended_secs")
                ? i(a.$1)
                : NaN;
              f.resolve({
                startTime_UNSAFE: g,
                endTime_UNSAFE: c,
                appendedSec: a.$9.getBool("generate_mos_segment_appended_secs")
                  ? c - g
                  : b,
              });
            },
            function (a) {
              f.reject(a);
            }
          )["finally"](function () {
            (a.$5 = !1), a.$13();
          });
        } catch (a) {
          new (b("oz-player-polaris/utils/PolarisOzError"))({
            type: "OZ_JAVASCRIPT_NATIVE",
            description: a.message,
            extra: { originalError: a, code: "0" },
          });
        }
      };
      c.$19 = function (a, c, d) {
        var e = this,
          f = new ArrayBuffer(0),
          g = a.getReader();
        a = function a() {
          var h = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          );
          e.$4 = h;
          g.read()
            .then(function (a) {
              h.resolve(a), (e.$4 = null);
            })
            ["catch"](function (a) {
              h.reject(a), (e.$4 = null);
            });
          return h.getPromise().then(function (g) {
            var h = g.done;
            g = g.value;
            if (h)
              return f.byteLength > 0
                ? e.$17(f, c)
                : b(
                    "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
                  ).resolve(0);
            h = g;
            d > 0 &&
              (g instanceof Uint8Array && (g = g.buffer),
              (f = b("oz-player-polaris/utils/polarisOzConcatArrayBuffer")(
                f,
                g
              )),
              (h = f));
            if (h && h.byteLength >= d) {
              f = new ArrayBuffer(0);
              return e.$17(h, c).then(function (b) {
                return a().then(function (a) {
                  return a + b;
                });
              });
            }
            return a();
          });
        };
        return a();
      };
      c.$18 = function (a) {
        a = new Error(a);
        a.name = "invariant_violation";
        return a;
      };
      c.$15 = function () {
        var a = new Error("operation is cancelled");
        a.name = "cancelled";
        return a;
      };
      c.destroy = function () {
        b("oz-player-polaris/shims/polarisOzClearTimeout")(this.$10),
          (this.$10 = null),
          this.$2 && this.$2.reject(this.$15()),
          (this.$2 = null),
          this.$3.release(),
          (this.$3 = new (b(
            "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
          ))()),
          this.$7.destroy();
      };
      c.getDebug = function () {
        return { SourceBuffer: this.$1 };
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/media_source/PolarisMediaSourceManager",
  [
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger",
    "oz-player-polaris/media_source/PolarisOzMediaErrorProvider",
    "oz-player-polaris/media_source/PolarisSourceBufferManager",
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b(
        "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger"
      ).OzMultiDestinationPerfLoggerProvider,
      i = b("oz-player-polaris/shims/PolarisOzDOMEventListener").listenDOMEvent;
    a = (function () {
      function a(a, c, d) {
        var e = this;
        d === void 0 && (d = new h([]));
        this.$3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$5 = [];
        this.$6 = [];
        this.$8 = !1;
        this.$10 = !1;
        this.$12 = function () {
          e.$13() || (e.$8 = !1);
          if (!e.$14()) return;
          var a = e.$6.shift();
          a && (a(e.$2), (e.$8 = !0));
        };
        this.$4 = d;
        this.$9 = c;
        this.$1 = a;
        this.$2 = new MediaSource();
        this.$1.src = window.URL.createObjectURL(this.$2);
        this.$7 = new (b(
          "oz-player-polaris/media_source/PolarisOzMediaErrorProvider"
        ))(this.$1);
        g(this.$11(), this.$4, "media_source_open");
      }
      var c = a.prototype;
      c.$11 = function () {
        var a = this;
        if (this.$2.readyState === "open")
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve();
        var c = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
        );
        this.$3.addSubscriptions(
          i(this.$2, "sourceopen", function () {
            c.resolve(), a.$12();
          })
        );
        return c.getPromise();
      };
      c.createSourceBufferManager = function (a, c) {
        var d = this;
        c === void 0 && (c = !1);
        return this.$11().then(function () {
          var e = d.$2.addSourceBuffer(a);
          c && !isNaN(d.$2.duration) && (e.appendWindowEnd = d.$2.duration);
          d.$5.push(e);
          d.$3.addSubscriptions(i(e, "updateend", d.$12));
          return new (b(
            "oz-player-polaris/media_source/PolarisSourceBufferManager"
          ))(e, d.$9, d.$7);
        });
      };
      c.getMediaSource = function () {
        return this.$2;
      };
      c.notifyEndOfStream = function () {
        var a = this;
        this.$6.push(function (b) {
          a.$4.getOperationLogger("end_of_stream").log(), b.endOfStream();
        });
        this.$12();
      };
      c.updateDuration = function (a) {
        this.$6.push(function (b) {
          b.duration = a;
        }),
          this.$12();
      };
      c.detach = function () {
        this.$1.removeAttribute("src");
        for (var a = 0; a < this.$2.sourceBuffers.length; a++) {
          var b = this.$2.sourceBuffers[a];
          this.$2.removeSourceBuffer(b);
        }
        this.$3.release();
        this.$3.engage();
        this.$6 = [];
        this.$8 = !1;
        this.$10 = !0;
      };
      c.$14 = function () {
        return (
          !this.$13() && this.$2.readyState === "open" && !this.$8 && !this.$10
        );
      };
      c.$13 = function () {
        return this.$5.some(function (a) {
          return a.updating;
        });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/media_source/PolarisOzMediaSeekableRangeManager",
  ["oz-player-polaris/shims/PolarisOzSubscriptionsHandler"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c) {
        var d = this;
        this.$5 = function () {
          var a = d.$2;
          if (!a) return;
          a = a.getTimeRanges();
          if (!a.length) return;
          a = a[a.length - 1];
          var b = d.$1.getMediaSource();
          d.$4.getBool("update_media_source_duration") &&
            (b.duration === Infinity ||
              b.duration < a.endTime ||
              isNaN(b.duration)) &&
            d.$1.updateDuration(a.endTime);
        };
        this.$1 = a;
        this.$3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$4 = c;
        this.$5();
      }
      var c = a.prototype;
      c.setTimeRangeProvider = function (a) {
        this.$3.release(),
          this.$3.engage(),
          this.$3.addSubscriptions(a.addUpdateListener(this.$5)),
          (this.$2 = a);
      };
      c.listenToMediaStreamInitAppended = function (a) {
        var b = this;
        return a.addListener("initAppended", function () {
          if (b.$4.getBool("update_duration_when_init_appended")) {
            var a = b.$1.getMediaSource();
            (a.duration === Infinity || isNaN(a.duration)) && b.$5();
          }
        });
      };
      c.destroy = function () {
        this.$3.release();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzCreateErrorStream",
  ["oz-player-polaris/shims/PolarisOzReadableStream"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return new (b("oz-player-polaris/shims/PolarisOzReadableStream"))({
        pull: function (b) {
          b.error(a);
        },
      });
    }
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/polarisArrayBuffer2OzReadableStream",
  ["oz-player-polaris/shims/PolarisOzReadableStream"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return new (b("oz-player-polaris/shims/PolarisOzReadableStream"))({
        start: function (b) {
          var c = new Uint8Array(a);
          b.enqueue(c);
          b.close();
        },
      });
    }
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/polarisMaybeConvertReadableStreamToOzReadableStream",
  [
    "asyncToGeneratorRuntime",
    "oz-player-polaris/shims/PolarisOzReadableStream",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      if (!b("oz-player-polaris/shims/PolarisOzReadableStream").isPolyfilled)
        return a;
      var c = a.getReader();
      return new (b("oz-player-polaris/shims/PolarisOzReadableStream"))({
        start: (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            while (!0) {
              var b = yield c.read(),
                d = b.done;
              b = b.value;
              if (d) break;
              a.enqueue(b);
            }
            a.close();
          });
          function d(b) {
            return a.apply(this, arguments);
          }
          return d;
        })(),
      });
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzFetch",
  [
    "oz-player-polaris/shims/polarisOzClearTimeout",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
    "oz-player-polaris/utils/polarisArrayBuffer2OzReadableStream",
    "oz-player-polaris/utils/polarisMaybeConvertReadableStreamToOzReadableStream",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = window.fetch,
      h = b("oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions");
    function a(a, c, d) {
      if (!g) throw new Error("fetch api is missing");
      var e = null;
      if (
        "AbortController" in window &&
        d &&
        d.networkTimeoutMs != null &&
        d.networkTimeoutMs !== 0
      ) {
        var f = new AbortController();
        e = h(function () {
          return f.abort();
        }, d.networkTimeoutMs);
        c.signal = f.signal;
      }
      return g(a, c).then(function (a) {
        b("oz-player-polaris/shims/polarisOzClearTimeout")(e);
        var c = {
          status: a.status,
          headers: a.headers,
          ok: a.ok,
          body: void 0,
        };
        if (a.body) {
          c.body = b(
            "oz-player-polaris/utils/polarisMaybeConvertReadableStreamToOzReadableStream"
          )(a.body);
          return c;
        }
        return a.arrayBuffer().then(function (a) {
          c.body = b(
            "oz-player-polaris/utils/polarisArrayBuffer2OzReadableStream"
          )(a);
          return c;
        });
      });
    }
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzFetchWithCache",
  [
    "oz-player-polaris/networks/PolarisOzFetch",
    "oz-player-polaris/utils/polarisArrayBuffer2OzReadableStream",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i) {
      e === void 0 && (e = null);
      g === void 0 && (g = null);
      i === void 0 && (i = "DISABLE_CACHE");
      if (!fetch) throw new Error("fetch api is missing");
      var j = e != null ? e : b("oz-player-polaris/networks/PolarisOzFetch");
      e =
        a.getBool("use_segment_request_cache") && i === "ENABLE_CACHE"
          ? h.get(c)
          : null;
      g = g ? g.getCacheValue(c) : null;
      e = e != null ? e : g;
      g = !1;
      e
        ? (i === "ENABLE_CACHE" && h.set(c, e),
          (g = !0),
          (i = e
            .then(function (a) {
              a = b(
                "oz-player-polaris/utils/polarisArrayBuffer2OzReadableStream"
              )(a.response);
              return { body: a, status: 200, headers: null, ok: !0 };
            })
            ["catch"](function (b) {
              if (a.getBool("retry_fetch_on_prefetch_error")) return j(c, d);
              throw new TypeError();
            })))
        : (i = j(c, d, f));
      return { promise: i, retrievedFromCache: g };
    }
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzWritableStreamDefault",
  [
    "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill",
    "oz-player-polaris/shims/default/utils/polarisShouldPolyfillStreams",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    (b(
      "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill"
    ).WritableStream.isPolyfilled = !0),
      (e.exports = b(
        "oz-player-polaris/shims/default/utils/polarisShouldPolyfillStreams"
      )()
        ? b(
            "oz-player-polaris/shims/default/polyfills/stream/PolarisOzWritableStreamPolyfill"
          ).WritableStream
        : window.WritableStream);
  },
  null
);
__d(
  "oz-player-polaris/shims/PolarisOzWritableStream",
  ["oz-player-polaris/shims/default/PolarisOzWritableStreamDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzWritableStreamDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzTransformStream",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzReadableStream",
    "oz-player-polaris/shims/PolarisOzWritableStream",
    "oz-player-polaris/utils/PolarisOzError",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzTransformStream3 = function (a) {
          return a;
        };
        c = c || {};
        c = c.errorTransform;
        c == null && (c = d.$OzTransformStream3);
        var e = c || d.$OzTransformStream3;
        d.writable = new (b("oz-player-polaris/shims/PolarisOzWritableStream"))(
          {
            start: function (a) {
              d.$OzTransformStream2 = a;
            },
            write: function (a) {
              d.emit("writableWrite", a);
              try {
                d.onDataWritten(a);
              } catch (a) {
                d.$OzTransformStream1.error(
                  new (b("oz-player-polaris/utils/PolarisOzError"))({
                    type: "OZ_STREAM",
                    description:
                      "Error from write handler: " + d.constructor.name,
                    extra: { code: "OZ_S-0", originalError: a },
                  })
                );
              }
              d.$OzTransformStream1.enqueue(a);
            },
            close: function () {
              d.emit("writableClose");
              try {
                d.onClose();
              } catch (a) {
                d.$OzTransformStream1.error(
                  new (b("oz-player-polaris/utils/PolarisOzError"))({
                    type: "OZ_STREAM",
                    description:
                      "Error from close handler: " + d.constructor.name,
                    extra: { code: "OZ_S-1", originalError: a },
                  })
                );
              }
              d.$OzTransformStream1.close();
            },
            abort: function (a) {
              a = e(a);
              d.$OzTransformStream1.error(a);
            },
          }
        );
        d.readable = new (b("oz-player-polaris/shims/PolarisOzReadableStream"))(
          {
            start: function (a) {
              d.$OzTransformStream1 = a;
            },
            cancel: function (a) {
              d.emit("readableCancel", a), d.$OzTransformStream2.error(a);
            },
          }
        );
        return d;
      }
      var d = c.prototype;
      d.onDataWritten = function (a) {};
      d.onClose = function () {};
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/polarisCreateNetworkError",
  ["oz-player-polaris/utils/PolarisOzError"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, c, d, e, f) {
      return new (b("oz-player-polaris/utils/PolarisOzError"))({
        type: "OZ_NETWORK",
        description: f,
        extra: { originalError: a, code: c.toString(), headers: d, url: e },
      });
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzNetworkRequestStream",
  [
    "oz-player-polaris/networks/PolarisOzCreateErrorStream",
    "oz-player-polaris/networks/PolarisOzFetchWithCache",
    "oz-player-polaris/networks/PolarisOzTransformStream",
    "oz-player-polaris/networks/polarisCreateNetworkError",
    "oz-player-polaris/shims/polarisOzvariant",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d, e, f, g, h, i) {
        e === void 0 && (e = null),
          f === void 0 && (f = null),
          g === void 0 && (g = null),
          i === void 0 && (i = "DISABLE_CACHE"),
          (this.$6 = !1),
          (this.$1 = b),
          (this.$2 = c),
          (this.$3 = d),
          (this.$8 = e || []),
          (this.$7 = f),
          (this.$9 = g),
          (this.$11 = a),
          (this.$10 = h),
          (this.$12 = i);
      }
      var c = a.prototype;
      c.startStream = function (a) {
        var c = this;
        a = this.$3.createRequestParam(this.$1, a);
        var d = a.http;
        a = a.uri;
        var e = a.toString();
        this.$4 = e;
        a = b("oz-player-polaris/networks/PolarisOzFetchWithCache")(
          this.$11,
          e,
          d,
          this.$7,
          this.$2,
          this.$9,
          this.$10,
          this.$12
        );
        d = a.promise;
        a = a.retrievedFromCache;
        this.$6 = a;
        return d
          .then(
            function (a) {
              var d = [];
              for (var f = 0; f < c.$8.length; f++)
                try {
                  var g = c.$8[f].onResponse(a, e);
                  g && d.push(g);
                } catch (a) {
                  return b(
                    "oz-player-polaris/networks/PolarisOzCreateErrorStream"
                  )(a);
                }
              g = a.body;
              f = a.headers;
              var h = a.ok,
                i = a.status;
              if (!h)
                return b(
                  "oz-player-polaris/networks/PolarisOzCreateErrorStream"
                )(
                  b("oz-player-polaris/networks/polarisCreateNetworkError")(
                    new Error("HTTP status not OK"),
                    i,
                    f,
                    e,
                    "HTTP error."
                  )
                );
              g.getReader ||
                b("oz-player-polaris/shims/polarisOzvariant")(0, 3287);
              h = g;
              c.$5 = a;
              for (i = 0; i < d.length; i++) h = h.pipeThrough(d[i]);
              if (!c.$11.getBool("throw_network_error_during_stream")) return h;
              f = new (b(
                "oz-player-polaris/networks/PolarisOzTransformStream"
              ))({
                errorTransform: function (a) {
                  return a instanceof TypeError
                    ? b("oz-player-polaris/networks/polarisCreateNetworkError")(
                        a,
                        0,
                        null,
                        e,
                        "Network failure."
                      )
                    : a;
                },
              });
              return h.pipeThrough(f);
            },
            function (a) {
              var d = [];
              for (var f = 0; f < c.$8.length; f++)
                try {
                  var g = c.$8[f].onError(a, e);
                  g && d.push(g);
                } catch (a) {
                  return b(
                    "oz-player-polaris/networks/PolarisOzCreateErrorStream"
                  )(a);
                }
              if (a instanceof TypeError) {
                g = b("oz-player-polaris/networks/PolarisOzCreateErrorStream")(
                  b("oz-player-polaris/networks/polarisCreateNetworkError")(
                    a,
                    0,
                    null,
                    e,
                    "Network failure."
                  )
                );
                for (f = 0; f < d.length; f++) g = g.pipeThrough(d[f]);
                return g;
              }
              throw a;
            }
          )
          ["catch"](function (a) {
            return a.name === "AbortError"
              ? b("oz-player-polaris/networks/PolarisOzCreateErrorStream")({
                  type: a.name,
                  status: a.code,
                  url: e,
                  message: a,
                })
              : b("oz-player-polaris/networks/PolarisOzCreateErrorStream")({
                  type: "stream_processing",
                  status: 0,
                  url: e,
                  message: "Stream processing error. " + a,
                });
          });
      };
      c.getLastRequestUrl = function () {
        return this.$4;
      };
      c.getLastResponse = function () {
        return this.$5;
      };
      c.retrievedFromCache = function () {
        return this.$6;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisOzByteRange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b.endByte === null ? !1 : a.startByte === b.endByte + 1;
    }
    f.startsImmediateAfter = a;
  },
  66
);
__d(
  "oz-player-polaris/networks/PolarisOzProducerInterruptedError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/networks/PolarisOzDeferredBuffer",
  [
    "oz-player-polaris/networks/PolarisOzProducerInterruptedError",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        a === void 0 && (a = {});
        this.$2 = [];
        this.$3 = !1;
        this.$5 = 0;
        a = a;
        a = a.disableArrayShift;
        this.$1 = !!a;
      }
      var c = a.prototype;
      c.produce = function (a) {
        this.$6(a);
      };
      c.signalProducerInterruption = function () {
        this.$6(
          new (b(
            "oz-player-polaris/networks/PolarisOzProducerInterruptedError"
          ))("producer interrupted")
        );
      };
      c.consume = function (a) {
        var c = this;
        if (this.$3)
          throw new Error(
            "A buffer can only be consumed by one client at a time"
          );
        this.$3 = !0;
        var d = b(
          "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
        ).resolve();
        this.isEmpty() &&
          ((this.$4 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          )),
          (d = this.$4.getPromise()));
        return d.then(function () {
          if (c.$1) {
            if (c.$2[c.$5] === void 0)
              throw new Error("buffer has no value at position " + c.$5);
          } else if (c.$2.length === 0) throw new Error("buffer length must not be 0");
          c.$4 = null;
          c.$3 = !1;
          var b = c.$1 ? c.$7(a) : c.$8(a);
          if (b instanceof Uint8Array) return b;
          throw b;
        });
      };
      c.$6 = function (a) {
        this.$2.push(a), this.$4 && this.$4.resolve();
      };
      c.$7 = function (a) {
        var b = this.$2[this.$5];
        if (b === void 0) return new Uint8Array([]);
        b = b;
        if (!(b instanceof Uint8Array)) {
          this.$2[this.$5] = void 0;
          this.$5++;
          return b;
        }
        if (a !== void 0 && b.length > a) {
          var c = b.slice(a);
          b = b.slice(0, a);
          this.$2[this.$5] = c;
        } else (this.$2[this.$5] = void 0), this.$5++;
        return b;
      };
      c.$8 = function (a) {
        if (this.$2.length === 0) return new Uint8Array([]);
        var b = this.$2[0];
        if (!(b instanceof Uint8Array)) {
          this.$2.shift();
          return b;
        }
        if (a !== void 0 && b.length > a) {
          var c = b.slice(a);
          b = b.slice(0, a);
          this.$2[0] = c;
        } else this.$2.shift();
        return b;
      };
      c.isEmpty = function () {
        return this.$1 ? this.$2[this.$5] === void 0 : this.$2.length === 0;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/polarisOzPipeErrorTo",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      try {
        a.error(b);
      } catch (a) {}
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/networks/PolarisOzPausableRangeStream",
  [
    "oz-player-polaris/manifests/PolarisOzByteRange",
    "oz-player-polaris/networks/PolarisOzDeferredBuffer",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/utils/polarisOzPipeErrorTo",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
      "oz-player-polaris/manifests/PolarisOzByteRange"
    ).startsImmediateAfter;
    function h() {
      return new Error("Upstream has an inconsistent range");
    }
    var i = (function () {
      function a() {
        this.$1 = 0;
      }
      var b = a.prototype;
      b.setBytesToSkip = function (a) {
        this.$1 = a;
      };
      b.setBytesSkipped = function (a) {
        this.$1 -= a;
      };
      b.getBytesToSkip = function () {
        return this.$1;
      };
      b.hasMoreBytesToSkip = function () {
        return this.$1 > 0;
      };
      return a;
    })();
    a = (function () {
      function a(a, c, d, e, f) {
        var g = this;
        this.$5 = !1;
        this.$7 = 0;
        this.$8 = 0;
        this.$13 = !1;
        this.$14 = 0;
        this.$15 = new i();
        this.$16 = !1;
        this.$17 = !1;
        this.$18 = !1;
        this.$19 = a;
        this.$20 = c;
        this.$1 = d;
        this.$2 = e;
        a = f || {};
        c = a.disableDeferredBufferArrayShift;
        d = a.enablePausableStreamResumeFromStartDangerously;
        e = a.fixPausePreReadableStream;
        f = a.fixStreamingUndefinedEndByte;
        a = a.throwErrorWhenAborted;
        this.$11 = !!f;
        this.$16 = !!d;
        this.$17 = !!e;
        this.$18 = !!a;
        this.$3 = new (b("oz-player-polaris/networks/PolarisOzDeferredBuffer"))(
          { disableArrayShift: !!c }
        );
        this.$6 = new this.$19({
          start: function (a) {
            g.$10 = a;
          },
          pull: function (a) {
            if (
              ((g.$11 && g.$1.endByte === null && g.$5) || g.$7 === g.$21()) &&
              g.$3.isEmpty()
            ) {
              a.close();
              return b(
                "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
              ).resolve();
            }
            var c = function c() {
              var d = g.$15.hasMoreBytesToSkip()
                ? g.$15.getBytesToSkip()
                : void 0;
              return g.$3
                .consume(d)
                .then(function (d) {
                  if (g.$15.hasMoreBytesToSkip()) {
                    g.$15.setBytesSkipped(d.length);
                    return c();
                  }
                  g.$7 += d.length;
                  var e = g.$21();
                  e !== null &&
                    g.$7 > (e || 0) &&
                    b("oz-player-polaris/utils/polarisOzPipeErrorTo")(
                      g.$10,
                      h()
                    );
                  a.enqueue(d);
                })
                ["catch"](function (a) {
                  if (a === "skip_buffered_bytes") {
                    g.$15.setBytesToSkip(g.$7);
                    return c();
                  }
                  throw a;
                });
            };
            return c();
          },
          cancel: function (a) {
            g.$12 && g.$12.resolve("stream_cancelled"),
              b("oz-player-polaris/utils/polarisOzPipeErrorTo")(g.$9, a);
          },
        });
        this.$22();
      }
      var c = a.prototype;
      c.$21 = function () {
        var a = this.$1,
          b = a.endByte;
        a = a.startByte;
        return b != null ? b - a + 1 : null;
      };
      c.$22 = function () {
        var a = this;
        this.$4 = new this.$20({
          start: function (b) {
            a.$9 = b;
          },
          write: function (b) {
            a.$3.produce(b), (a.$8 += b.length);
          },
          close: function () {
            a.$5 = !0;
            var c = a.$1,
              d = c.endByte;
            c = c.startByte;
            a.$11 && d === null && a.$3.produce(new Uint8Array([]));
            d !== null &&
              a.$8 !== (d || 0) - c + 1 &&
              b("oz-player-polaris/utils/polarisOzPipeErrorTo")(a.$10, h());
          },
          abort: function (c) {
            a.$12 &&
              (a.$18 ? a.$12.reject(c) : a.$12.resolve("stream_aborted")),
              b("oz-player-polaris/utils/polarisOzPipeErrorTo")(a.$10, c);
          },
        });
      };
      c.getStream = function () {
        return this.$6;
      };
      c.startStream = function () {
        var c = this;
        this.$13 = !0;
        var d = { startByte: this.$1.startByte, endByte: this.$1.endByte };
        !this.$16
          ? (d.startByte += this.$8)
          : this.$8 && (this.$3.produce("skip_buffered_bytes"), (this.$8 = 0));
        var e = this.$4;
        return this.$2.startStream(d).then(function (d) {
          d.pipeTo(c.$17 ? e : c.$4)
            .then(function () {
              c.$12 && c.$12.resolve("stream_done");
            })
            ["catch"](function (b) {
              c.$12 &&
                !c.$12.isSettled() &&
                (c.$17 && b === a.STREAM_PAUSED
                  ? c.$12.resolve("stream_paused")
                  : c.$12.reject(b));
            });
          c.$12 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          );
          return { statusPromise: c.$12.getPromise() };
        });
      };
      c.pauseStream = function () {
        b("oz-player-polaris/utils/polarisOzPipeErrorTo")(
          this.$9,
          a.STREAM_PAUSED
        ),
          this.$12 && this.$12.resolve("stream_paused"),
          this.$22();
      };
      c.getByteRange = function () {
        return this.$1;
      };
      c.getBytesStreamed = function () {
        return this.$7;
      };
      c.tryConcatByteRange = function (a) {
        if (this.$13 || !g(a, this.$1)) return !1;
        this.$1.endByte = a.endByte;
        return !0;
      };
      return a;
    })();
    a.STREAM_PAUSED = "streamPaused";
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/default/utils/PolarisURIUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new RegExp(
      "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
    );
    function a(a) {
      if (a.trim() === "") return null;
      a = a.match(g);
      if (a == null) return null;
      var b = {};
      b.uri = a[0] ? a[0] : null;
      b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
      b.authority = a[2] ? a[2].substr(2) : null;
      b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
      b.host = a[2] ? a[4] : null;
      b.port = a[5]
        ? a[5].substr(1)
          ? parseInt(a[5].substr(1), 10)
          : null
        : null;
      b.path = a[6] ? a[6] : null;
      b.query = a[7] ? a[7].substr(1) : null;
      b.fragment = a[8] ? a[8].substr(1) : null;
      b.isGenericURI = b.authority === null && !!b.scheme;
      return b;
    }
    f.parseURI = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzURIDefault",
  ["oz-player-polaris/shims/default/utils/PolarisURIUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        a = d("oz-player-polaris/shims/default/utils/PolarisURIUtils").parseURI(
          a
        );
        if (a == null) throw new Error("Invalid URI passed to OzURI");
        this.$1 = a;
      }
      var b = a.prototype;
      b.addQueryData = function (a, b) {
        var c = {};
        typeof a === "string" && b != null ? (c[a] = b) : (c = a);
        var d = this.getQueryData();
        typeof c === "object" &&
          Object.keys(c).forEach(function (b) {
            var a = null;
            typeof b === "string" && typeof c === "object" && (a = c[b]);
            (typeof a === "string" || typeof a === "number") && (d[b] = a);
          });
        this.$1.query = this.$2(d);
        return this;
      };
      b.getQueryData = function () {
        var a = this.$1.query;
        return a == null
          ? {}
          : a.split("&").reduce(function (a, b) {
              b = b.split("=");
              a[b[0]] = b[1];
              return a;
            }, {});
      };
      b.getDomain = function () {
        return this.$1.host || "";
      };
      b.toString = function () {
        var a = "",
          b = this.$1.scheme;
        b != null && (a += b + "://");
        b = this.getDomain();
        b != null && (a += b);
        b = this.$1.path;
        b != null ? (a += b) : a != null && (a += "/");
        b = this.$1.query;
        b != null && (a += "?" + b);
        return a;
      };
      b.$2 = function (a) {
        var b = Object.keys(a),
          c = "";
        b.forEach(function (b) {
          c += b + "=" + a[b] + "&";
        });
        return c.substring(0, c.length - 1);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player-polaris/shims/PolarisOzURI",
  ["oz-player-polaris/shims/default/PolarisOzURIDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/shims/default/PolarisOzURIDefault");
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisRequestParamCreator",
  ["oz-player-polaris/shims/PolarisOzURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var c = a.prototype;
      c.createRequestParam = function (a, c) {
        a = new (b("oz-player-polaris/shims/PolarisOzURI"))(a.toString());
        if (c) {
          var d = c.endByte,
            e = c.startByte;
          (e === 0 && d == null) ||
            ((a = a.addQueryData({ bytestart: c.startByte })),
            d != null && (a = a.addQueryData({ byteend: d })));
        }
        e = this.$1 && this.$1(a) ? "include" : "same-origin";
        return { uri: a, http: { credentials: e } };
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/polarisGetOzSegmentStreamableRange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (!a.length) return null;
      var b = a[0].getURI().toString(),
        c = a[0].getByteRange();
      if (!c) return null;
      var d = c;
      for (var e = 1; e < a.length; e++) {
        var f = a[e];
        if (f.getURI().toString() !== b) return null;
        f = f.getByteRange();
        if (!d || !f) return null;
        if (d.endByte === null || f.startByte !== d.endByte + 1) return null;
        d = f;
      }
      return { startByte: c.startByte, endByte: d.endByte };
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzResourceTimingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (!performance.getEntriesByName) return null;
      a = performance.getEntriesByName(a, "resource");
      return a.reduce(function (a, b) {
        if (a == null) return b;
        return typeof b.responseEnd === "number" &&
          typeof b.responseStart === "number" &&
          typeof b.startTime === "number" &&
          typeof a.responseEnd === "number" &&
          typeof a.responseStart === "number" &&
          typeof a.requestStart === "number" &&
          typeof a.startTime === "number"
          ? b.responseEnd < a.responseEnd
            ? a
            : b
          : null;
      }, null);
    }
    f.getLatestResourceTimingEntry = a;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzNetworkRequestLoggingUtils",
  ["oz-player-polaris/utils/PolarisOzResourceTimingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return a ? parseInt(a.get("content-length"), 10) : null;
      },
      i = function (a) {
        return a ? a.get("x-fb-edge-hit") : null;
      },
      j = function (a) {
        return a ? a.get("x-fb-origin-hit") : null;
      };
    function k(a, b) {
      b = d(
        "oz-player-polaris/utils/PolarisOzResourceTimingUtils"
      ).getLatestResourceTimingEntry(b);
      b &&
        a
          .setTimeToFirstByte(Math.round(b.responseStart - b.startTime))
          .setTimeToLastByte(Math.round(b.responseEnd - b.startTime))
          .setTimeToRequestStart(Math.round(b.requestStart - b.startTime));
    }
    function a(a, b, c, d, e, f, g) {
      d.length && a.setSegmentCount(d.length),
        b && k(a, b),
        a
          .setResource(b || null)
          .setInitiator(c ? "prefetch" : "fetch")
          .setTimeToRequestSent(Math.round(Math.floor(e)))
          .setContentLengthHeader(h(g == null ? void 0 : g.headers))
          .setEdgeHitHeader(i(g == null ? void 0 : g.headers))
          .setOriginHitHeader(j(g == null ? void 0 : g.headers))
          .setCode(g == null ? void 0 : g.status)
          .setLength(f);
    }
    g.setFetchStreamLoggingAttributes = a;
  },
  98
);
__d(
  "oz-player-polaris/networks/PolarisOzNetworkManager",
  [
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/networks/PolarisOzNetworkRequestStream",
    "oz-player-polaris/networks/PolarisOzPausableRangeStream",
    "oz-player-polaris/networks/PolarisRequestParamCreator",
    "oz-player-polaris/networks/polarisGetOzSegmentStreamableRange",
    "oz-player-polaris/shims/PolarisOzReadableStream",
    "oz-player-polaris/shims/PolarisOzURI",
    "oz-player-polaris/shims/PolarisOzWritableStream",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzNetworkRequestLoggingUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b(
        "oz-player-polaris/utils/PolarisOzNetworkRequestLoggingUtils"
      ).setFetchStreamLoggingAttributes;
    a = (function () {
      function a(a, c, d, e, f) {
        c === void 0 && (c = null),
          d === void 0 && (d = null),
          e === void 0 && (e = null),
          (this.$2 = a),
          (this.$6 = f),
          (this.$1 = new (b(
            "oz-player-polaris/networks/PolarisRequestParamCreator"
          ))(this.$6)),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$7 = new Map());
      }
      var c = a.prototype;
      c.destroy = function () {
        this.$7 && this.$7.clear();
      };
      c.request = function (a, c, d, e) {
        d === void 0 && (d = null);
        e === void 0 && (e = "DISABLE_CACHE");
        a.length > 0 || b("oz-player-polaris/shims/polarisOzvariant")(0, 212);
        var f = b(
          "oz-player-polaris/networks/polarisGetOzSegmentStreamableRange"
        )(a) || { startByte: 0, endByte: null };
        e = new (b("oz-player-polaris/networks/PolarisOzNetworkRequestStream"))(
          this.$2,
          a[0].getURI(),
          null,
          this.$1,
          this.$4,
          this.$5,
          this.$3,
          this.$7,
          e
        );
        return this.$8(f, e, c, d, a);
      };
      c.createPausableStream = function (a, c, d) {
        a.length > 0 || b("oz-player-polaris/shims/polarisOzvariant")(0, 212);
        var e = b(
            "oz-player-polaris/networks/polarisGetOzSegmentStreamableRange"
          )(a) || { startByte: 0, endByte: null },
          f = null,
          g = this.$2.getNumber("network_seg_timeout_ms");
        g > 0 && (f = { networkTimeoutMs: g });
        var h = new (b(
          "oz-player-polaris/networks/PolarisOzNetworkRequestStream"
        ))(
          this.$2,
          a[0].getURI(),
          f,
          this.$1,
          this.$4,
          this.$5,
          this.$3,
          this.$7
        );
        return {
          pausableStream: this.$9(e, h, c || null, d),
          loggingPayloads: {
            getRequestUrl: function () {
              return h.getLastRequestUrl() || null;
            },
            isPrefetch: function () {
              return h.retrievedFromCache();
            },
            segments: a,
            getResponse: function () {
              return h.getLastResponse();
            },
          },
        };
      };
      c.requestRawUrl = function (a, c, d, e) {
        e === void 0 && (e = null);
        c = new (b("oz-player-polaris/networks/PolarisOzNetworkRequestStream"))(
          this.$2,
          new (b("oz-player-polaris/shims/PolarisOzURI"))(a),
          d,
          this.$1,
          this.$4,
          this.$5,
          this.$3,
          this.$7
        );
        a = { startByte: 0, endByte: null };
        return this.$8(a, c, [], e);
      };
      c.$9 = function (a, c, d, e) {
        c = c;
        if (d != null)
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            c = g(this.$2, c, e);
          }
        return new (b(
          "oz-player-polaris/networks/PolarisOzPausableRangeStream"
        ))(
          b("oz-player-polaris/shims/PolarisOzReadableStream"),
          b("oz-player-polaris/shims/PolarisOzWritableStream"),
          a,
          c,
          {
            fixStreamingUndefinedEndByte: !0,
            enablePausableStreamResumeFromStartDangerously: !0,
            fixPausePreReadableStream: !0,
            throwErrorWhenAborted: this.$2.getBool(
              "pausable_stream_throws_error_when_aborted"
            ),
          }
        );
      };
      c.$8 = function (a, b, c, d, e) {
        e === void 0 && (e = []);
        var f = this.$9(a, b, c, d);
        a = f.startStream();
        var i = this.$10(a);
        d &&
          g(
            i,
            d,
            "fetch_stream",
            function () {},
            function (a) {
              h(
                a,
                b.getLastRequestUrl(),
                b.retrievedFromCache(),
                e,
                0,
                f.getBytesStreamed(),
                b.getLastResponse()
              );
            }
          );
        return {
          getStream: function () {
            return f.getStream();
          },
          cancel: function () {
            return f.pauseStream();
          },
          getStatusChangePromise: function () {
            return i;
          },
        };
      };
      c.$10 = function (a) {
        var c = this;
        return a.then(function (a) {
          a = a.statusPromise;
          return a.then(function (a) {
            if (
              a === "stream_done" ||
              !c.$2.getBool("enable_network_manager_error")
            )
              return "done";
            throw new (b("oz-player-polaris/utils/PolarisOzError"))({
              description: a,
              type: "OZ_NETWORK",
            });
          });
        });
      };
      a.getStreamableSegmentsRange = function (a) {
        if (!a.length) return [];
        return !b(
          "oz-player-polaris/networks/polarisGetOzSegmentStreamableRange"
        )(a)
          ? [a[0]]
          : a.slice(0);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisMpd",
  ["oz-player-polaris/shims/PolarisOzEventEmitter"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h) {
        var i;
        i = a.call(this) || this;
        i.$Mpd1 = b;
        i.$Mpd4 = f;
        i.$Mpd2 = c;
        i.$Mpd3 = d;
        i.$Mpd5 = e;
        i.$Mpd6 = g;
        i.$Mpd7 = h;
        return i;
      }
      var c = b.prototype;
      c.getLocation = function () {
        return this.$Mpd5;
      };
      c.getMinimumUpdatePeriod = function () {
        return this.$Mpd4;
      };
      c.getVideoRepresentations = function () {
        return this.$Mpd2;
      };
      c.getAudioRepresentations = function () {
        return this.$Mpd3;
      };
      c.getCustomField = function (a) {
        var b = this.$Mpd6.get(a);
        if (!b) throw new Error("Custom parser not specified for field " + a);
        try {
          return b(this.$Mpd1);
        } catch (a) {
          return null;
        }
      };
      c.isStaticMpd = function () {
        return this.$Mpd7;
      };
      c.updateWith = function (a) {
        (this.$Mpd1 = a.$Mpd1),
          this.$Mpd8(this.$Mpd2, a.getVideoRepresentations()),
          this.$Mpd8(this.$Mpd3, a.getAudioRepresentations()),
          (this.$Mpd7 = a.isStaticMpd()),
          (this.$Mpd4 = a.getMinimumUpdatePeriod()),
          this.emit("updated");
      };
      c.blockTimeRange = function (a) {
        this.$Mpd2.forEach(function (b) {
          return b.blockTimeRange(a);
        }),
          this.$Mpd3.forEach(function (b) {
            return b.blockTimeRange(a);
          });
      };
      c.unblockTimeRange = function () {
        this.blockTimeRange({ startTime: 0, endTime: 0 });
      };
      c.$Mpd8 = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = !1;
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            if (d.getID() === g.getID()) {
              g.updateWith(d);
              e = !0;
              break;
            }
          }
          e || a.push(d);
        }
      };
      return b;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisOzAudioRepresentation",
  ["oz-player-polaris/manifests/PolarisOzRepresentation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f, g, h, i) {
        d = a.call(this, b, c, d, e, f, g, h, i) || this;
        d.$OzAudioRepresentation1 = b;
        d.$OzAudioRepresentation2 = c;
        d.$OzAudioRepresentation3 = g;
        return d;
      }
      var c = b.prototype;
      c.getBitrateKbps = function () {
        var a = 1024;
        return (this.$OzAudioRepresentation3 / a).toFixed(1) + "Kbps";
      };
      c.getQualityLabel = function () {
        return this.$OzAudioRepresentation2;
      };
      return b;
    })(b("oz-player-polaris/manifests/PolarisOzRepresentation"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzNumericalHelper",
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
    e.exports = {
      lessThan: j,
      greaterThan: i,
      equalTo: h,
      lessThanOrEqual: a,
      greaterThanOrEqual: b,
    };
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzNumericalRangeUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 0.01;
    function h(a, b) {
      b = b.rangeEnd;
      return b == null
        ? !1
        : Math.abs(a.rangeStart - b) > g && a.rangeStart > b;
    }
    function i(a, b) {
      a = a.rangeEnd;
      b = b.rangeEnd;
      if (a == null) return !0;
      return b == null ? !1 : Math.abs(a - b) > g && a > b;
    }
    function j(a, b) {
      b = b.rangeEnd;
      return b == null ? !1 : Math.abs(a - b) > g && a > b;
    }
    function k(a, b) {
      return a > b - g;
    }
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.mergeSortedRanges = function (a) {
        if (!a.length) return [];
        var b = [],
          c = a[0];
        b.push(c);
        for (var d = 1; d < a.length; d++) {
          var e = a[d];
          if (!i(e, c)) continue;
          else
            h(e, c)
              ? ((c = { rangeStart: e.rangeStart, rangeEnd: e.rangeEnd }),
                b.push(c))
              : (c.rangeEnd = e.rangeEnd);
        }
        return b;
      };
      b.diffSortedRanges = function (a, b) {
        return a
          .reduceRight(function (a, c) {
            j(c.rangeStart, b) || j(b.rangeStart, c)
              ? a.push(c)
              : (b.rangeEnd != null &&
                  (c.rangeEnd == null || j(c.rangeEnd, b)) &&
                  a.push({ rangeStart: b.rangeEnd, rangeEnd: c.rangeEnd }),
                k(b.rangeStart, c.rangeStart) &&
                  a.push({ rangeStart: c.rangeStart, rangeEnd: b.rangeStart }));
            return a;
          }, [])
          .filter(function (a) {
            return a.rangeEnd == null || a.rangeStart < a.rangeEnd;
          })
          .reverse();
      };
      b.findCurrentRangeIndex = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = d.rangeStart;
          if (k(a, e) && !j(a, d)) return c;
        }
        return -1;
      };
      b.findNextRangeIndex = function (a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d = d.rangeStart;
          if (!k(a, d)) return c;
        }
        return -1;
      };
      b.findDiffCoveredByRanges = function (a, b, c) {
        return a >= b
          ? 0
          : c.reduceRight(function (c, d) {
              var e = d.rangeEnd;
              d = d.rangeStart;
              if (b < d || (e != null && a > e)) return c;
              else if (e == null || b <= e) return Math.min(b - d, b - a) + c;
              else if (a >= d) return Math.min(e - a, b - a) + c;
              return e - d + c;
            }, 0);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/manifests/PolarisSegmentTemplateSegmentsContainer",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzURI",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzNumericalHelper",
    "oz-player-polaris/utils/PolarisOzNumericalRangeUtil",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("oz-player-polaris/utils/PolarisOzNumericalHelper")).equalTo,
      h = a.greaterThan,
      i = a.greaterThanOrEqual,
      j = a.lessThanOrEqual,
      k = 1e-4;
    c = (function () {
      function a(a, c, d, e, f) {
        f === void 0 && (f = !1),
          (this.$6 = new (b(
            "oz-player-polaris/shims/PolarisOzEventEmitter"
          ))()),
          (this.$9 = null),
          (this.$7 = a),
          (this.$1 = c),
          (this.$2 = d),
          (this.$3 = e),
          (this.$4 = this.$10(this.$3)),
          (this.$5 = f),
          (this.$8 = this.$7.getNumber("live_numerical_error_epsilon"));
      }
      var c = a.prototype;
      c.getSegmentByTime = function (a) {
        a = this.$7.getBool("live_query_time_in_range") ? this.$11(a) : a;
        a = a * this.$2;
        var b = null;
        for (var c = this.$3.length - 1; c >= 0; c--) {
          var d = this.$3[c];
          if (j(d.t + d.d * (d.r + 1), a, this.$8)) break;
          b = d;
        }
        if (b === null) return null;
        if (
          this.$7.getBool(
            "live_no_segment_when_playhead_is_before_first_segment"
          ) &&
          h(b.t, a, this.$8)
        )
          return null;
        d = Math.max(0, Math.floor((a - b.t + this.$8) / b.d));
        return this.$12(b, d);
      };
      c.getSegment = function (a) {
        var b = 0;
        a = a;
        while (a >= 0 && b < this.$3.length) {
          var c = this.$3[b];
          c = c.r;
          c = c + 1;
          if (a >= c) {
            a -= c;
            b++;
            continue;
          }
          break;
        }
        c = this.$3[b];
        return !c ? null : this.$12(c, a);
      };
      c.getSegmentAfter = function (a) {
        a = a.getTimeRange().endTime;
        return this.getSegmentByTime(a);
      };
      c.getPredictedSegmentAfter = function (a) {
        return null;
      };
      c.canPredict = function () {
        return !1;
      };
      c.isEndingSegment = function (a) {
        if (!this.$3 || !this.$3.length || !this.$5) return !1;
        var b = this.$3[this.$3.length - 1],
          c = b.r;
        b = this.$12(b, c);
        return (
          Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) +
            Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) <
          k
        );
      };
      c.updateWith = function (c) {
        c instanceof a || b("oz-player-polaris/shims/polarisOzvariant")(0, 646),
          (this.$5 = c.$5),
          this.$13(c.$3),
          this.$14(c.$3),
          this.$6.emit("segment_updated");
      };
      c.getTimeRanges = function () {
        return this.$9 ? this.$15(this.$4, this.$9) : this.$4;
      };
      c.blockTimeRange = function (a) {
        this.$9 = a;
      };
      c.$15 = function (a, c) {
        return new (b("oz-player-polaris/utils/PolarisOzNumericalRangeUtil"))()
          .diffSortedRanges(
            a.map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            }),
            { rangeStart: c.startTime, rangeEnd: c.endTime }
          )
          .map(function (a) {
            return {
              startTime: a.rangeStart,
              endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
            };
          });
      };
      c.addUpdateListener = function (a) {
        return this.$6.addListener("segment_updated", a);
      };
      c.$11 = function (a) {
        var c = a,
          d = new (b(
            "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
          ))().findCurrentRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
        if (d === -1) {
          d = new (b(
            "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
          ))().findNextRangeIndex(
            a,
            this.getTimeRanges().map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
          d !== -1 && (c = this.getTimeRanges()[d].startTime);
        }
        return c;
      };
      c.$16 = function (a, b) {
        if (a.d !== b.d) return !1;
        var c = a.t + a.d * a.r,
          d = b.t + b.d * b.r;
        return i(a.t, d, this.$8) || i(b.t, c, this.$8)
          ? !1
          : Number.isInteger((a.t - b.t) / a.d);
      };
      c.$13 = function (a) {
        if (this.$7.getBool("copy_new_manifest")) {
          var c;
          (c = this.$3).splice.apply(c, [0, this.$3.length].concat(a));
          return;
        }
        if (this.$7.getBool("use_loose_manifest_updates")) {
          (c = this.$3).splice.apply(c, [this.$3.length, 0].concat(a));
          this.$3.sort(function (a, b) {
            if (a.t < b.t) return -1;
            else if (a.t > b.t) return 1;
            return a.d === b.d ? a.r - b.r : 0;
          });
          c = [];
          for (var d = 0, e = d + 1; e < this.$3.length; ) {
            var f = this.$3[d],
              i = this.$3[e];
            if (f.t === i.t) {
              if (f.d > i.d)
                throw new (b("oz-player-polaris/utils/PolarisOzError"))({
                  type: "OZ_REPRESENTATION_PARSER",
                  description:
                    "Previous segment group duration greater than new.",
                  extra: { code: "OZ_RP-1" },
                });
              f.d = i.d;
              f.r = Math.max(f.r, i.r);
              e++;
              continue;
            } else c.push(this.$3[d]), (d = e), e++;
          }
          this.$3.length > 0 && c.push(this.$3[this.$3.length - 1]);
          (f = this.$3).splice.apply(f, [0, this.$3.length].concat(c));
          return;
        }
        i = this.$3.length - 1;
        d = a.length - 1;
        e = i;
        f = d;
        c = JSON.stringify(this.$3);
        var j = this.$7.getBool("fix_templated_manifest_r_field_check");
        while (i >= 0 && d >= 0) {
          var k = this.$3[i],
            l = a[d];
          if (g(k.t, l.t, this.$8)) {
            if (j) {
              var m = i === e || d === f,
                n = m && ((i !== e && l.r > k.r) || (d !== f && k.r > l.r));
              m = (!m && k.r !== l.r) || n;
            } else m = !(i === e && d === f) && k.r !== l.r;
            if (m)
              throw new (b("oz-player-polaris/utils/PolarisOzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description:
                  'Segment group "R" field mismatch. Old groups: ' +
                  c +
                  "\n            , new groups: " +
                  JSON.stringify(a),
                extra: { code: "OZ_RP-2" },
              });
            if (
              this.$7.getBool("throw_on_non_zero_r_d_mismatch") &&
              k.r > 0 &&
              k.d !== l.d
            )
              throw new (b("oz-player-polaris/utils/PolarisOzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description:
                  "Duration mismatch between non-zero repeat tag and new.",
                extra: { code: "OZ_RP-3" },
              });
            k.r = Math.max(k.r, l.r);
            if (this.$7.getBool("fix_template_duration_artifact_in_manifest")) {
              if (k.d > l.d)
                throw new (b("oz-player-polaris/utils/PolarisOzError"))({
                  type: "OZ_REPRESENTATION_PARSER",
                  description:
                    "Previous segment group duration greater than new.",
                  extra: { code: "OZ_RP-4" },
                });
              k.d = l.d;
            }
            i--;
            d--;
          } else if (h(l.t, k.t, this.$8)) this.$3.splice(i + 1, 0, l), d--;
          else {
            if (this.$16(k, l))
              throw new (b("oz-player-polaris/utils/PolarisOzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description: "Segment group misalinged",
                extra: { code: "OZ_RP-5" },
              });
            i--;
          }
        }
        if (d >= 0) {
          (n = this.$3).unshift.apply(n, a.slice(0, d + 1));
        }
      };
      c.$14 = function (a) {
        a = this.$10(a);
        a = new (b(
          "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
        ))().mergeSortedRanges(
          this.$4
            .map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
            .concat(
              a.map(function (a) {
                return { rangeStart: a.startTime, rangeEnd: a.endTime };
              })
            )
        );
        this.$4 = a.map(function (a) {
          return {
            startTime: a.rangeStart,
            endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
          };
        });
      };
      c.$10 = function (a) {
        var c = this;
        a = new (b("oz-player-polaris/utils/PolarisOzNumericalRangeUtil"))();
        a = a.mergeSortedRanges(
          this.$3.map(function (a) {
            var b = c.$12(a, 0).getTimeRange().startTime;
            a = c.$12(a, a.r).getTimeRange().endTime;
            return { rangeStart: b, rangeEnd: a };
          })
        );
        return a.map(function (a) {
          var b = a.rangeEnd;
          a = a.rangeStart;
          b = b == null ? Infinity : b;
          return { startTime: a, endTime: b };
        });
      };
      c.$12 = function (a, c) {
        var d = this;
        c === void 0 && (c = 0);
        var e = a.d;
        a = a.t;
        var f = a + e * c,
          g = this.$7.getBool("use_sc_timebased_segments"),
          h = this.$7.getBool("use_scf_timebased_segments"),
          i = this.$7.getBool("touch_cb_key");
        return {
          getURI: function () {
            var a = d.$1.replace("$Time$", f.toString());
            a = new (b("oz-player-polaris/shims/PolarisOzURI"))(a);
            g && a.addQueryData("_nc_sc", 1);
            h && a.addQueryData("_nc_scf", 1);
            var c = a.getQueryData().cb;
            i && c != null && a.addQueryData("cb", c + "_oz");
            return a;
          },
          getTimeRange: function () {
            return { startTime: f / d.$2, endTime: (f + e) / d.$2 };
          },
          getByteRange: function () {
            return null;
          },
          getSequenceNumber: function () {
            return null;
          },
        };
      };
      c.getSegmentGroups = function () {
        return this.$3;
      };
      c.getEndingSegment = function () {
        if (this.$3.length === 0) return null;
        var a = this.$3[this.$3.length - 1],
          b = a.r;
        return this.$12(a, b);
      };
      return a;
    })();
    e.exports = c;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzUrlHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var b = a.lastIndexOf("/"),
        c = a.lastIndexOf("://");
      b > c + 2 && (a = a.substring(0, b + 1));
      return a;
    }
    function h(a) {
      a = g(a);
      return a.endsWith("/") ? g(a.substring(0, a.length - 1)) : a;
    }
    function i(a, b) {
      a = g(a);
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
    var j = {
      joinRelativeUrlPaths: function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        if (!b || !b.length) return "";
        if (b.length === 1) return b[0];
        var d = b.shift();
        while (b.length > 0) d = i(d, b.shift());
        return d;
      },
      joinUrlPaths: function (a, b) {
        return j._isAbsoluteUrl(b) ? b : j.joinRelativeUrlPaths(a, b);
      },
      _isAbsoluteUrl: function (a) {
        var b = /^https?:\/\//i;
        return b.test(a);
      },
    };
    a = j;
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/parsers/PolarisOzDefaultSegmentTimelineParser",
  [
    "oz-player-polaris/manifests/PolarisSegmentTemplateSegmentsContainer",
    "oz-player-polaris/utils/PolarisOzUrlHelper",
  ],
  function (a, b, c, d, e, f) {
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
            };
          }));
        return a;
      };
      var c = a.prototype;
      c.parseSegmentsContainer = function (c, d, e) {
        return new (b(
          "oz-player-polaris/manifests/PolarisSegmentTemplateSegmentsContainer"
        ))(
          c,
          b("oz-player-polaris/utils/PolarisOzUrlHelper").joinUrlPaths(
            d.baseUrl,
            e.$.media
          ),
          Number.parseInt(e.$.timescale, 10),
          a.parseSegments(c, e),
          d.isStaticMpd
        );
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzSegmentTemplateParser",
  [
    "oz-player-polaris/parsers/PolarisOzDefaultSegmentTimelineParser",
    "oz-player-polaris/shims/PolarisOzURI",
    "oz-player-polaris/utils/PolarisOzUrlHelper",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (function () {
      function a(a, b) {
        b === void 0 && (b = null), (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.getTimeRange = function () {
        return { startTime: 0, endTime: 0 };
      };
      b.getByteRange = function () {
        return this.$2;
      };
      b.getURI = function () {
        return this.$1;
      };
      b.getSequenceNumber = function () {
        return null;
      };
      return a;
    })();
    a = (function () {
      function a(a, c, d, e) {
        (this.$2 = d),
          (this.$1 = c),
          (this.$3 = a),
          e
            ? (this.$4 = e)
            : (this.$4 = new (b(
                "oz-player-polaris/parsers/PolarisOzDefaultSegmentTimelineParser"
              ))());
      }
      var c = a.prototype;
      c.parseInitializationSegment = function () {
        var a = b("oz-player-polaris/utils/PolarisOzUrlHelper").joinUrlPaths(
          this.$2.baseUrl,
          this.$1.$.initialization
        );
        return new g(new (b("oz-player-polaris/shims/PolarisOzURI"))(a));
      };
      c.parseSegmentsContainer = function () {
        return this.$4.parseSegmentsContainer(this.$3, this.$2, this.$1);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/manifests/PolarisOzZeroTimeRangeSegment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.getURI = function () {
        return this.$1;
      };
      b.getTimeRange = function () {
        return { startTime: 0, endTime: 0 };
      };
      b.getByteRange = function () {
        return { startByte: this.$2, endByte: this.$3 };
      };
      b.getSequenceNumber = function () {
        return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/configs/PolarisOzGlobalConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
      getBool: function (a, b) {
        return g ? g.getBool(a, b) : b;
      },
      getNumber: function (a, b) {
        return g ? g.getNumber(a, b) : b;
      },
      getString: function (a, b) {
        return g ? g.getString(a, b) : b;
      },
      setGlobalConfig: function (a) {
        g = a;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzCacheStorageDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "_video_",
      h = a.localStorage;
    b = {
      get: function (a) {
        return !h ? null : h.getItem(g + a);
      },
      set: function (a, b) {
        h != null && h.setItem(g + a, b);
      },
    };
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzCacheStorage",
  ["oz-player-polaris/shims/default/PolarisOzCacheStorageDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzCacheStorageDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzWindowEventsDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      onUnload: function (a) {
        var b = window.onunload;
        window.onunload = function () {
          a(), b != null && typeof b === "function" && b.call(window);
        };
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzWindowEvents",
  ["oz-player-polaris/shims/default/PolarisOzWindowEventsDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzWindowEventsDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzBandwidthCache",
  [
    "oz-player-polaris/shims/PolarisOzCacheStorage",
    "oz-player-polaris/shims/PolarisOzWindowEvents",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c) {
        var d = this;
        this.$1 = a;
        this.$2 = c;
        b("oz-player-polaris/shims/PolarisOzWindowEvents").onUnload(
          function () {
            d.updateCachedBandwidth();
          }
        );
      }
      var c = a.prototype;
      c.getCachedBandwidth = function () {
        var a = b("oz-player-polaris/shims/PolarisOzCacheStorage").get(this.$1);
        if (a == null) return null;
        a = Number(a);
        return isNaN(a) ? null : a;
      };
      c.updateCachedBandwidth = function () {
        b("oz-player-polaris/shims/PolarisOzCacheStorage").set(
          this.$1,
          String(this.$2())
        );
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzBandwidthUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var b = 0;
      for (var c = 0; c < a.length; c++)
        b += (a[c].bytes * 8e3) / a[c].timeInMs;
      return b / a.length;
    }
    function h(a) {
      var b = g(a),
        c = 0;
      for (var d = 0; d < a.length; d++)
        c += Math.pow((a[d].bytes * 8e3) / a[d].timeInMs - b, 2);
      return Math.round(Math.sqrt(c / a.length));
    }
    function i(a, b) {
      b = Math.exp(Math.log(0.5) / b);
      var c = 0,
        d = 0;
      for (var e = 0; e < a.length; e++) {
        var f = Math.pow(b, a[e].weight);
        c = a[e].value * (1 - f) + c * f;
        d += a[e].weight;
      }
      return Math.round(c / (1 - Math.pow(b, d)));
    }
    function j(a, b) {
      return i(
        a.map(function (a) {
          return {
            value: (a.bytes * 8e3) / a.timeInMs,
            weight: a.timeInMs / 1e3,
          };
        }),
        b
      );
    }
    function k(a, b) {
      var c = g(a),
        d = [];
      for (var e = 0; e < a.length; e++)
        Math.abs(c - (a[e].bytes * 8e3) / a[e].timeInMs) < b && d.push(a[e]);
      return d;
    }
    function a(a, b, c, d) {
      var e = h(a);
      a = k(a, e * c);
      c = j(a, b);
      return c - e * d;
    }
    f.getStandardDeviationOfBandwidth = h;
    f.getExponentiallyWeightedMovingAverage = i;
    f.getExponentiallyWeightedMovingAverageOfBandwidth = j;
    f.getBandwidthEstimate = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/default/PolarisOzNetworkDiagnosticsDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      getResponseTimeMs: function (a) {
        return null;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/shims/PolarisOzNetworkDiagnostics",
  ["oz-player-polaris/shims/default/PolarisOzNetworkDiagnosticsDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzNetworkDiagnosticsDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzNetworkRequestStreamBandwidthReporter",
  [
    "oz-player-polaris/networks/PolarisOzTransformStream",
    "oz-player-polaris/shims/PolarisOzNetworkDiagnostics",
    "oz-player-polaris/utils/PolarisOzResourceTimingUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/shims/PolarisOzNetworkDiagnostics"
      ).getResponseTimeMs,
      h = b(
        "oz-player-polaris/utils/PolarisOzResourceTimingUtils"
      ).getLatestResourceTimingEntry;
    a = (function () {
      function a(a) {
        this.$10 = Date.now();
        this.$11 = 0;
        this.$12 = 0;
        this.$13 = function () {};
        this.$14 = function () {};
        this.$15 = new (b(
          "oz-player-polaris/networks/PolarisOzTransformStream"
        ))();
        var c = a.byteCountPerSample,
          d = a.ignoreOnStreamWriteSamples,
          e = a.ignoreTimeToResponseStart,
          f = a.loggerProvider,
          g = a.maximumSampleBandwidth,
          h = a.minimumBytesToSampleOnClose,
          i = a.minimumSampleDuration,
          j = a.responseTimeHandicapMs,
          k = a.stream,
          l = a.usePerformanceEntryOnClose;
        a = a.useResponseTimeMs;
        this.$1 = k;
        this.$16 = f;
        this.$2 = c;
        this.$3 = h;
        this.$4 = i;
        this.$5 = g;
        this.$6 = l;
        this.$7 = a;
        this.$8 = j;
        this.$9 = e;
        this.$17 = d;
        this.$15.addListener("writableWrite", this.$18.bind(this));
        this.$15.addListener("writableClose", this.$19.bind(this));
      }
      var c = a.prototype;
      c.getTransformStream = function () {
        return this.$15;
      };
      c.onBandwidthSample = function (a) {
        this.$13 = a;
      };
      c.onTimeToFirstByteMsSample = function (a) {
        this.$14 = a;
      };
      c.$20 = function (a, b, c) {
        if (this.$16) {
          var d = Date.now();
          this.$16 &&
            this.$16
              .getOperationLogger("bandwidth_sampled")
              .setLength(a)
              .setClientTimeEnd(d)
              .setClientTimeBegin(d - b)
              .log();
        }
        this.$13(a, b - c);
      };
      c.$18 = function (a) {
        a.length != null && (this.$12 += a.length);
        if (this.$17) return;
        this.$21();
      };
      c.$19 = function () {
        var a = Date.now() - this.$10,
          b = this.$1.getLastRequestUrl();
        b = b != null ? h(b) : null;
        b && this.$14(b.responseStart - b.requestStart);
        if (this.$3 > 0 && a > 0 && this.$11 === 0 && this.$12 >= this.$3) {
          if (this.$6 && b && b.responseEnd && b.startTime) {
            b = this.$9
              ? b.responseEnd - b.responseStart
              : b.responseEnd - b.startTime;
            a = b > 0 ? b : a;
          }
          b = this.$1.getLastResponse();
          b = this.$7 ? g(b == null ? void 0 : b.headers) || 0 : 0;
          this.$22(a, b) || this.$20(this.$12, a, Math.max(b - this.$8, 0));
        }
      };
      c.$22 = function (a, b) {
        if (a - b <= 0) return !0;
        b = (this.$12 * 8) / (a / 1e3);
        return a < this.$4 && b > this.$5;
      };
      c.$21 = function () {
        var a = Date.now(),
          b = a - this.$10;
        this.$2 > 0 &&
          this.$12 >= this.$11 + this.$2 &&
          !this.$22(b, 0) &&
          (this.$20(this.$12 - this.$11, b, 0),
          (this.$10 = a),
          (this.$11 = this.$12));
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/scheduling/PolarisOzRoundRobinPriorityTaskQueue",
  [
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = -1),
          (this.$3 = function () {}),
          (this.$4 = []),
          (this.$5 = new Map()),
          (this.$6 = new Map()),
          (this.$1 = a),
          (this.$2 = b);
      }
      var c = a.prototype;
      c.getHighestPriority = function () {
        return Math.max.apply(
          Math,
          this.$4.map(function (a) {
            return a.queue.length ? a.priority : -Infinity;
          })
        );
      };
      c.enqueue = function (a, b) {
        b = this.$7(b);
        var c = this.$5.get(a),
          d = this.$8(a);
        if (c === b) return d;
        this.$5.has(a) && this.remove(a);
        c = this.$9(b);
        var e = this.$4[c];
        (e && e.priority === b) ||
          ((e = { priority: b, queue: [] }), this.$4.splice(c, 0, e));
        this.$5.set(a, b);
        e.queue.push(a);
        this.$3(a, b >= this.$1 ? "immediate" : "normal");
        return d;
      };
      c.updatePriority = function (a, b) {
        if (!this.$5.has(a)) return;
        this.enqueue(a, b);
      };
      c.dequeue = function () {
        for (var a = 0; a < this.$4.length; a++) {
          var b = this.$4[a];
          if (b.queue.length) {
            b = b.queue.shift();
            this.$6["delete"](b);
            this.$5["delete"](b);
            return b;
          }
        }
        return null;
      };
      c.remove = function (a) {
        this.$6["delete"](a);
        var b = this.$5.get(a);
        if (b !== void 0) {
          b = this.$9(b);
          b = this.$4[b];
          if (b && b.queue) {
            var c = b.queue.findIndex(function (b) {
              return b === a;
            });
            c > -1 && b.queue.splice(c, 1);
          }
          this.$5["delete"](a);
        }
      };
      c.setOnTaskUpdated = function (a) {
        this.$3 = a;
      };
      c.clearOnTaskUpdated = function () {
        this.setOnTaskUpdated(function () {});
      };
      c.getLength = function () {
        return this.$5.size;
      };
      c.test_isEmpty = function () {
        return (
          this.$5.size === 0 &&
          this.$6.size === 0 &&
          this.$4.every(function (a) {
            return a.queue.length === 0;
          })
        );
      };
      c.$8 = function (a) {
        var c = this,
          d = this.$6.get(a);
        if (!d) {
          var e = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          );
          d = e.getPromise();
          this.$6.set(a, d);
          var f = a.run;
          a.run = function () {
            return f
              .call(a)
              .then(function (b) {
                c.remove(a);
                e.resolve(b);
                return b;
              })
              ["catch"](function (b) {
                c.remove(a);
                e.reject(b);
                throw b;
              });
          };
        }
        return d;
      };
      c.$9 = function (a) {
        a = this.$7(a);
        var b;
        for (b = 0; b < this.$4.length; b++)
          if (a >= this.$4[b].priority) return b;
        return b;
      };
      c.$7 = function (a) {
        this.$2 >= 0 && (a = Number.parseFloat(a.toFixed(this.$2)));
        return a;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/scheduling/PolarisOzSequentialTaskScheduler",
  [
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        this.$3 = 0;
        this.$1 = a;
        a = b || {};
        b = a.taskTimeout;
        this.$4 = b || 0;
      }
      var c = a.prototype;
      c.start = function () {
        this.$1.setOnTaskUpdated(this.$5.bind(this));
        var a = this.$1.dequeue();
        a && this.$6(a, "immediate");
      };
      c.destroy = function () {
        this.$2 && this.$2.cancel(), this.$1.clearOnTaskUpdated();
      };
      c.$5 = function (a, b) {
        b = this.$6(a, b);
        b && this.$1.remove(a);
      };
      c.$6 = function (a, c) {
        var d = this;
        if (this.$2 && c !== "immediate") return !1;
        this.$2 && this.$2.cancel();
        c = a.run()["catch"](function (a) {});
        this.$4 > 0 &&
          (c = b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").race([
            c,
            new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
              function (a, c) {
                b(
                  "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions"
                )(a, d.$4);
              }
            ),
          ]));
        this.$3++;
        this.$2 = a;
        c = c.then(function () {
          d.$3--;
          d.$2 === a && (d.$2 = null);
          if (d.$3 === 0) {
            var b = d.$1.dequeue();
            b && d.$6(b, "immediate");
          }
        });
        return !0;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider",
  [
    "oz-player-polaris/scheduling/PolarisOzRoundRobinPriorityTaskQueue",
    "oz-player-polaris/scheduling/PolarisOzSequentialTaskScheduler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Map(),
      h = new Map(),
      i = 2,
      j = 2,
      k = 6e4;
    function a(a) {
      var c = g.get(a);
      if (!c) {
        c = new (b(
          "oz-player-polaris/scheduling/PolarisOzRoundRobinPriorityTaskQueue"
        ))(i, j);
        var d = new (b(
          "oz-player-polaris/scheduling/PolarisOzSequentialTaskScheduler"
        ))(c, { taskTimeout: k });
        g.set(a, c);
        h.set(a, d);
        d.start();
      }
      return c;
    }
    e.exports = { getQueue: a, OZ_QUEUE_MAX_PRIORITY: i };
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzBandwidthEstimator",
  [
    "oz-player-polaris/configs/PolarisOzGlobalConfig",
    "oz-player-polaris/networks/PolarisOzBandwidthCache",
    "oz-player-polaris/networks/PolarisOzBandwidthUtils",
    "oz-player-polaris/networks/PolarisOzNetworkRequestStreamBandwidthReporter",
    "oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("oz-player-polaris/networks/PolarisOzBandwidthUtils"))
        .getBandwidthEstimate,
      h = a.getExponentiallyWeightedMovingAverage,
      i = a.getExponentiallyWeightedMovingAverageOfBandwidth,
      j = a.getStandardDeviationOfBandwidth,
      k = 0.9,
      l = 5e5,
      m = 2e4;
    c = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c;
        c = a.call(this) || this;
        c.$OzBandwidthEstimator1 = [];
        c.$OzBandwidthEstimator2 = [];
        c.$OzBandwidthEstimator3 = new (b(
          "oz-player-polaris/networks/PolarisOzBandwidthCache"
        ))(
          b("oz-player-polaris/configs/PolarisOzGlobalConfig").getString(
            "bandwidth_cache_key",
            "bandwidthEstimate"
          ),
          function () {
            return c.getAdjustedBandwidth(
              b("oz-player-polaris/configs/PolarisOzGlobalConfig")
            );
          }
        );
        return c;
      }
      var d = c.prototype;
      d.getBandwidth = function (a) {
        var b = g(
          this.$OzBandwidthEstimator1,
          a.getNumber("bandwidth_estimator_half_life", 6),
          a.getNumber("bandwidth_estimator_outlier_exclusion_factor", 2),
          a.getNumber("bandwidth_estimator_std_dev_penalty_factor", 0.1)
        );
        return b > 0 ? b : this.$OzBandwidthEstimator4(a);
      };
      d.getEstimatedTimeToFirstByteMs = function (a) {
        return this.$OzBandwidthEstimator2.length > 0
          ? h(
              this.$OzBandwidthEstimator2.map(function (a) {
                return { value: a, weight: 1 };
              }),
              a.getNumber("time_to_first_byte_estimate_half_life_ms", 500)
            )
          : null;
      };
      d.$OzBandwidthEstimator4 = function (a) {
        var b = this.$OzBandwidthEstimator3.getCachedBandwidth();
        return typeof b === "number" && b > 0
          ? b
          : a.getNumber("default_bandwidth_estimate", l);
      };
      d.getStandardDeviationOfBandwidth = function () {
        return j(this.$OzBandwidthEstimator1);
      };
      d.getSampleCount = function () {
        return this.$OzBandwidthEstimator1.length;
      };
      d.getAdjustedBandwidth = function (a) {
        if (this.$OzBandwidthEstimator1.length === 0)
          return this.$OzBandwidthEstimator4(a);
        var b =
          a.getNumber("bandwidth_estimator_variance_penalty_half_life", 0) > 0
            ? this.$OzBandwidthEstimator5(a)
            : this.$OzBandwidthEstimator6(a);
        return this.$OzBandwidthEstimator7(a, b);
      };
      d.$OzBandwidthEstimator7 = function (a, c) {
        var d = Math.max(
          0,
          b("oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider")
            .getQueue("video")
            .getLength() -
            a.getNumber("bandwidth_penalty_additional_video_start", 0)
        );
        a = a.getNumber("bandwidth_penalty_per_additional_video", 0);
        d = Math.min(k, d * a);
        return c * (1 - d);
      };
      d.$OzBandwidthEstimator5 = function (a) {
        var b = i(
            this.$OzBandwidthEstimator1,
            a.getNumber("bandwidth_estimator_half_life", 6)
          ),
          c = i(
            this.$OzBandwidthEstimator1,
            a.getNumber("bandwidth_estimator_variance_penalty_half_life", 0)
          );
        a =
          c < b
            ? a.getNumber("bandwidth_estimator_variance_penalty_down_factor", 0)
            : a.getNumber("bandwidth_estimator_variance_penalty_up_factor", 0);
        c = Math.abs(b - c) * a;
        return b - c;
      };
      d.$OzBandwidthEstimator6 = function (a) {
        return this.getBandwidth(a);
      };
      d.pipeThroughReporter = function (a, c, d) {
        var e = this;
        return {
          startStream: function (f) {
            var g = new (b(
              "oz-player-polaris/networks/PolarisOzNetworkRequestStreamBandwidthReporter"
            ))({
              stream: c,
              loggerProvider: d,
              byteCountPerSample: a.getNumber("byte_count_per_sample", m),
              minimumBytesToSampleOnClose: a.getNumber(
                "minimum_bytes_to_sample_on_close",
                0
              ),
              minimumSampleDuration: a.getNumber(
                "minimum_bandwidth_sample_duration",
                0
              ),
              maximumSampleBandwidth: a.getNumber(
                "maximum_bandwidth_sample_bandwidth",
                999999999
              ),
              usePerformanceEntryOnClose: a.getBool(
                "use_performance_entry_on_stream_close",
                !1
              ),
              useResponseTimeMs: a.getBool(
                "bandwidth_use_response_time_adjustment",
                !1
              ),
              responseTimeHandicapMs: a.getNumber(
                "bandwidth_response_time_handicap",
                0
              ),
              ignoreTimeToResponseStart: a.getBool(
                "ignore_time_to_response_start",
                !1
              ),
              ignoreOnStreamWriteSamples: a.getBool(
                "bandwidth_ignore_on_stream_write_samples",
                !1
              ),
            });
            g.onBandwidthSample(function (b, c) {
              e.$OzBandwidthEstimator8(b, c),
                a.getBool("update_bandwidth_cache_on_sample", !1) &&
                  e.$OzBandwidthEstimator3.updateCachedBandwidth();
            });
            g.onTimeToFirstByteMsSample(e.$OzBandwidthEstimator9.bind(e));
            return c.startStream(f).then(function (b) {
              return c.retrievedFromCache() &&
                a.getBool("exclude_prefetch_bandwidth_samples", !1)
                ? b
                : b.pipeThrough(g.getTransformStream());
            });
          },
        };
      };
      d.$OzBandwidthEstimator8 = function (a, c) {
        this.$OzBandwidthEstimator1.push({ bytes: a, timeInMs: c }),
          this.$OzBandwidthEstimator1.length >
            b("oz-player-polaris/configs/PolarisOzGlobalConfig").getNumber(
              "max_bandwidth_sample_count",
              15
            ) && this.$OzBandwidthEstimator1.shift(),
          this.emit("bandwidth_sampled");
      };
      d.$OzBandwidthEstimator9 = function (a) {
        this.$OzBandwidthEstimator2.push(a),
          this.$OzBandwidthEstimator2.length >
            b("oz-player-polaris/configs/PolarisOzGlobalConfig").getNumber(
              "max_bandwidth_sample_count",
              15
            ) && this.$OzBandwidthEstimator2.splice(0, 1);
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = new c();
  },
  null
);
__d(
  "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter",
  [
    "oz-player-polaris/networks/PolarisOzBandwidthEstimator",
    "oz-player-polaris/networks/PolarisOzNetworkRequestStream",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      return function (c, d, e) {
        var f = c.getBool("estimate_video_bandwidth_only") ? a === "video" : !0;
        return d instanceof
          b("oz-player-polaris/networks/PolarisOzNetworkRequestStream") && f
          ? b(
              "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
            ).pipeThroughReporter(c.getLegacyConfig(), d, e)
          : d;
      };
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/default/PolarisOzDataViewReaderDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = 0), (this.$2 = a);
      }
      var b = a.prototype;
      b.skip = function (a) {
        var b = this.$1;
        this.$1 += a;
        return b;
      };
      b.readUint8 = function () {
        return this.$2.getUint8(this.skip(8 / 8));
      };
      b.readUint16 = function () {
        return this.$2.getUint16(this.skip(16 / 8));
      };
      b.readUint32 = function () {
        return this.$2.getUint32(this.skip(32 / 8));
      };
      b.readUint64 = function () {
        var a = this.$2.getUint32(this.skip(32 / 8)),
          b = this.$2.getUint32(this.skip(32 / 8));
        if (a > 2097151) throw new RangeError("Overflow reading 64-bit value.");
        return Math.pow(2, 32) * a + b;
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
  "oz-player-polaris/shims/PolarisOzDataViewReader",
  ["oz-player-polaris/shims/default/PolarisOzDataViewReaderDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/PolarisOzDataViewReaderDefault"
    );
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/0AdtD7QJUTD/
 */
__d(
  "oz-player-polaris/parsers/PolarisOzMp4SidxParser",
  [
    "oz-player-polaris/shims/PolarisOzDataViewReader",
    "oz-player-polaris/shims/PolarisOzURI",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1936286840;
    a = {
      parse: function (a, c, d) {
        var e = new (b("oz-player-polaris/shims/PolarisOzDataViewReader"))(
          new DataView(d.buffer)
        );
        d = e.readUint32();
        var f = e.readUint32();
        if (f !== g) throw new Error('Invalid box type, expected "sidx".');
        d === 1 && (d = e.readUint64());
        f = e.readUint8();
        e.skip(3);
        e.skip(4);
        var h = e.readUint32();
        if (!h) throw new Error("Invalid timescale.");
        var i;
        f === 0
          ? ((f = e.readUint32()), (i = e.readUint32()))
          : ((f = e.readUint64()), (i = e.readUint64()));
        e.skip(2);
        var j = e.readUint16(),
          k = f,
          l = c + d + i,
          m = 0,
          n = [];
        f = function (c) {
          var d = e.readUint32(),
            f = (d & 2147483648) >>> 31;
          d = d & 2147483647;
          var g = e.readUint32();
          e.readUint32();
          if (f === 1) throw new Error("Heirarchical SIDXs are not supported.");
          var i = k / h,
            j = (k + g) / h;
          c === 0 && (m = i);
          var o = l,
            p = o + d - 1;
          n.push({
            getURI: function () {
              return new (b("oz-player-polaris/shims/PolarisOzURI"))(a);
            },
            getTimeRange: function () {
              return { startTime: i - m, endTime: j - m };
            },
            getByteRange: function () {
              return { startByte: o, endByte: p };
            },
            getSequenceNumber: function () {
              return null;
            },
          });
          k += g;
          l += d;
        };
        for (c = 0; c < j; c++) f(c);
        return n;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzSidxSegmentsContainer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        c === void 0 && (c = null), (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.getSegmentByTime = function (a) {
        var b = this.$1();
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = d.getTimeRange();
          if (e.startTime <= a && e.endTime > a) return d;
        }
        return null;
      };
      b.getSegmentAfter = function (a) {
        var b = this.$1(),
          c = b.findIndex(function (b) {
            return (
              b.getTimeRange().startTime === a.getTimeRange().startTime &&
              b.getTimeRange().endTime === a.getTimeRange().endTime
            );
          });
        return c >= 0 && c + 1 < b.length ? b[c + 1] : null;
      };
      b.getPredictedSegmentAfter = function (a) {
        return null;
      };
      b.canPredict = function () {
        return !1;
      };
      b.isEndingSegment = function (a) {
        var b = this.$1();
        if (!b || !b.length) return !1;
        b = b[b.length - 1].getTimeRange();
        a = a.getTimeRange();
        return b.startTime === a.startTime && b.endTime === a.endTime;
      };
      b.getSegment = function (a) {
        return this.$1()[a] || null;
      };
      b.updateWith = function (a) {
        throw new Error("Not implemented: updatedWith");
      };
      b.addUpdateListener = function (a) {
        this.$3 && (this.$3(), (this.$3 = null));
        return this.$2.addListener("segment_updated", a);
      };
      b.getTimeRanges = function () {
        var a = this.$1();
        if (a.length === 0) return [];
        var b = a[0];
        a = a[a.length - 1];
        return [
          {
            startTime: b.getTimeRange().startTime,
            endTime: a.getTimeRange().endTime,
          },
        ];
      };
      b.blockTimeRange = function () {};
      b.getEndingSegment = function () {
        return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/manifests/PolarisOzDataSegment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e);
      }
      var b = a.prototype;
      b.getURI = function () {
        return this.$1;
      };
      b.getTimeRange = function () {
        return { startTime: this.$2, endTime: this.$3 };
      };
      b.getByteRange = function () {
        return { startByte: this.$4, endByte: this.$5 };
      };
      b.getSequenceNumber = function () {
        return null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
/**
 * License: https://www.facebook.com/legal/license/0AdtD7QJUTD/
 */
__d(
  "oz-player-polaris/parsers/PolarisOzWebmSidxParser",
  [
    "oz-player-polaris/manifests/PolarisOzDataSegment",
    "oz-player-polaris/shims/PolarisOzDataViewReader",
    "oz-player-polaris/shims/PolarisOzURI",
    "oz-player-polaris/shims/polarisOzvariant",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 440786851,
      h = 408125543,
      i = 357149030,
      j = 2807729,
      k = 17545,
      l = 475249515,
      m = 187,
      n = 179,
      o = 183,
      p = 241,
      q = [
        new Uint8Array([255]),
        new Uint8Array([127, 255]),
        new Uint8Array([63, 255, 255]),
        new Uint8Array([31, 255, 255, 255]),
        new Uint8Array([15, 255, 255, 255, 255]),
        new Uint8Array([7, 255, 255, 255, 255, 255]),
        new Uint8Array([3, 255, 255, 255, 255, 255, 255]),
        new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255]),
      ];
    function r(a, b) {
      if (!a && !b) return !0;
      if (!a || !b) return !1;
      if (a.length !== b.length) return !1;
      for (var c = 0; c < a.length; ++c) if (a[c] !== b[c]) return !1;
      return !0;
    }
    var s = (function () {
        function a(a, b) {
          (this.id = a), (this.$1 = b);
        }
        var b = a.prototype;
        b.getOffset = function () {
          return this.$1.byteOffset;
        };
        b.createParser = function () {
          return new t(this.$1);
        };
        b.getUint = function () {
          if (this.$1.byteLength > 8)
            throw new RangeError(
              "EbmlElement: Unsigned integer has too many bytes."
            );
          if (this.$1.byteLength === 8 && this.$1.getUint8(0) & 224)
            throw new RangeError(
              "EbmlParser: Unsigned integer must be at most 53 bits."
            );
          var a = 0;
          for (var b = 0; b < this.$1.byteLength; b++) {
            var c = this.$1.getUint8(b);
            a = 256 * a + c;
          }
          return a;
        };
        b.getFloat = function () {
          if (this.$1.byteLength === 4) return this.$1.getFloat32(0);
          else if (this.$1.byteLength === 8) return this.$1.getFloat64(0);
          throw new RangeError(
            "EbmlElement: floating point numbers must be 4 or 8 bytes."
          );
        };
        return a;
      })(),
      t = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = new (b(
              "oz-player-polaris/shims/PolarisOzDataViewReader"
            ))(this.$1));
        }
        var c = a.prototype;
        c.hasMoreData = function () {
          return this.$2.hasMoreData();
        };
        c.parseElement = function () {
          var b = this.$3(),
            c = this.$4(),
            d;
          a.$5(c)
            ? (d = this.$1.byteLength - this.$2.getCursor())
            : (d = a.$6(c));
          c =
            this.$2.getCursor() + d <= this.$1.byteLength
              ? d
              : this.$1.byteLength - this.$2.getCursor();
          d = new DataView(
            this.$1.buffer,
            this.$1.byteOffset + this.$2.getCursor(),
            c
          );
          this.$2.skip(c);
          return new s(b, d);
        };
        c.$3 = function () {
          var a = this.$4();
          if (a.length > 7)
            throw new RangeError(
              "EbmlParser: EBML ID must be at most 7 bytes."
            );
          var b = 0;
          for (var c = 0; c < a.length; c++) b = 256 * b + a[c];
          return b;
        };
        c.$4 = function () {
          var a = this.$2.readUint8(),
            b;
          for (b = 1; b <= 8; b++) {
            var c = 1 << (8 - b);
            if (a & c) break;
          }
          if (b > 8)
            throw new RangeError(
              "EbmlParser: Variable sized integer must fit within 8 bytes."
            );
          c = new Uint8Array(b);
          c[0] = a;
          for (a = 1; a < b; a++) c[a] = this.$2.readUint8();
          return c;
        };
        a.$6 = function (a) {
          if (a.length === 8 && a[1] & 224)
            throw new RangeError(
              "EbmlParser: Variable sized integer value must be at most 53 bits."
            );
          var b = 1 << (8 - a.length);
          b = a[0] & (b - 1);
          for (var c = 1; c < a.length; c++) b = 256 * b + a[c];
          return b;
        };
        a.$5 = function (a) {
          for (var b = 0; b < q.length; b++) if (r(a, q[b])) return !0;
          return !1;
        };
        return a;
      })();
    function u(a) {
      a = a.createParser();
      var b = 1e6,
        c = null;
      while (a.hasMoreData()) {
        var d = a.parseElement();
        d.id === j ? (b = d.getUint()) : d.id === k && (c = d.getFloat());
      }
      if (c == null) return null;
      d = b / 1e9;
      a = c * d;
      return { timecodeScale: d, duration: a };
    }
    function v(a, c, d, e, f) {
      var g = [];
      a = a.createParser();
      var h = -1,
        i = -1;
      while (a.hasMoreData()) {
        var j = a.parseElement();
        if (j.id !== m) continue;
        j = w(j);
        if (!j) continue;
        var k = d * j.unscaledTime;
        j = c + j.relativeOffset;
        h >= 0 &&
          (i >= 0 || b("oz-player-polaris/shims/polarisOzvariant")(0, 4010),
          g.push(
            new (b("oz-player-polaris/manifests/PolarisOzDataSegment"))(
              f,
              h,
              k,
              i,
              j - 1
            )
          ));
        h = k;
        i = j;
      }
      h >= 0 &&
        (i >= 0 || b("oz-player-polaris/shims/polarisOzvariant")(0, 4010),
        g.push(
          new (b("oz-player-polaris/manifests/PolarisOzDataSegment"))(
            f,
            h,
            e,
            i,
            null
          )
        ));
      return g;
    }
    function w(a) {
      a = a.createParser();
      var b = a.parseElement();
      if (b.id !== n) return null;
      b = b.getUint();
      a = a.parseElement();
      if (a.id !== o) return null;
      a = a.createParser();
      var c = 0;
      while (a.hasMoreData()) {
        var d = a.parseElement();
        if (d.id !== p) continue;
        c = d.getUint();
        break;
      }
      return { unscaledTime: b, relativeOffset: c };
    }
    function x(a) {
      a = a.createParser();
      var b = null;
      while (a.hasMoreData()) {
        var c = a.parseElement();
        if (c.id !== i) continue;
        b = c;
        break;
      }
      return !b ? null : u(b);
    }
    function y(a) {
      a = new t(a);
      var b = a.parseElement();
      if (b.id !== g) return null;
      b = a.parseElement();
      if (b.id !== h) return null;
      a = b.getOffset();
      b = x(b);
      return !b
        ? null
        : {
            segmentOffset: a,
            timecodeScale: b.timecodeScale,
            duration: b.duration,
          };
    }
    function a(a, c, d) {
      d = new DataView(d.buffer);
      c = new DataView(c.buffer);
      d = y(d);
      if (!d) return [];
      c = new t(c);
      c = c.parseElement();
      return c.id !== l
        ? []
        : v(
            c,
            d.segmentOffset,
            d.timecodeScale,
            d.duration,
            new (b("oz-player-polaris/shims/PolarisOzURI"))(a)
          );
    }
    e.exports = { parse: a };
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzReadableStreamUtils",
  ["oz-player-polaris/utils/polarisOzConcatArrayBuffer"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      typeof TextDecoder !== "undefined"
        ? function (a) {
            return new TextDecoder("utf-8").decode(new Uint8Array(a));
          }
        : function (a) {
            return String.fromCharCode.apply(null, a);
          };
    function h(a) {
      var c = new ArrayBuffer(0),
        d = function d() {
          return a.read().then(function (a) {
            var e = a.done;
            a = a.value;
            if (e) return null;
            if (!a) return null;
            c = b("oz-player-polaris/utils/polarisOzConcatArrayBuffer")(c, a);
            return d();
          });
        };
      return d().then(function () {
        return new Uint8Array(c);
      });
    }
    function a(a) {
      return h(a).then(function (a) {
        return g(a);
      });
    }
    e.exports = { pumpString: a, pumpAllData: h };
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzSidxSegmentsParser",
  [
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/manifests/PolarisOzZeroTimeRangeSegment",
    "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter",
    "oz-player-polaris/parsers/PolarisOzMp4SidxParser",
    "oz-player-polaris/parsers/PolarisOzSidxSegmentsContainer",
    "oz-player-polaris/parsers/PolarisOzWebmSidxParser",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzURI",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
    "oz-player-polaris/utils/PolarisOzReadableStreamUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b("oz-player-polaris/utils/PolarisOzReadableStreamUtils").pumpAllData;
    function i(a) {
      a = a.split("-");
      return {
        startByte: Number.parseInt(a[0], 10),
        endByte: Number.parseInt(a[1], 10),
      };
    }
    a = (function () {
      function a(a, c, d, e, f, g, h) {
        (this.$6 = new (b("oz-player-polaris/utils/PolarisOzErrorEmitter"))()),
          (this.$7 = []),
          (this.$9 = new (b(
            "oz-player-polaris/shims/PolarisOzEventEmitter"
          ))()),
          (this.$1 = c),
          (this.$2 = d),
          (this.$3 = e),
          (this.$5 = f),
          (this.$4 = g),
          (this.$8 = h.cloneContext().setType("sidx")),
          (this.$10 = a);
      }
      var c = a.prototype;
      c.onError = function (a) {
        return this.$6.onError(a);
      };
      c.parseInitializationSegment = function () {
        var a = this,
          c = this.$1.Initialization[0].$.range,
          d = i(c);
        return {
          getURI: function () {
            return new (b("oz-player-polaris/shims/PolarisOzURI"))(a.$2);
          },
          getTimeRange: function () {
            return { startTime: 0, endTime: 0 };
          },
          getByteRange: function () {
            return d;
          },
          getSequenceNumber: function () {
            return null;
          },
        };
      };
      c.parseSegmentsContainer = function () {
        var a = this,
          c = function () {
            g(a.$11(), a.$8, "process_sidx")["catch"](a.$6.emitError);
          },
          d = this.$10.getBool("lazy_parse_sidx");
        d || c();
        return new (b(
          "oz-player-polaris/parsers/PolarisOzSidxSegmentsContainer"
        ))(
          function () {
            return a.$7;
          },
          this.$9,
          d ? c : null
        );
      };
      c.$12 = function (a, c, d) {
        d === void 0 && (d = "DISABLE_CACHE");
        a = new (b(
          "oz-player-polaris/manifests/PolarisOzZeroTimeRangeSegment"
        ))(
          new (b("oz-player-polaris/shims/PolarisOzURI"))(a),
          c.startByte,
          c.endByte
        );
        c = this.$10.getBool("exclude_sidx_from_bandwidth_estimates")
          ? this.$5 + ";sidx"
          : this.$5;
        a = this.$4.request(
          [a],
          [
            b(
              "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter"
            )(c),
          ],
          this.$8,
          d
        );
        c = a.getStream().getReader();
        return h(c);
      };
      c.$11 = function () {
        var a = this,
          c = this.$1.$.indexRange,
          d = i(c);
        c = [this.$12(this.$2, d)];
        if (this.$3 === "webm") {
          var e = i(this.$1.Initialization[0].$.range);
          c.push(this.$12(this.$2, e, "ENABLE_CACHE"));
          e = b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
            .all(c)
            .then(function (c) {
              var d = c[0];
              c = c[1];
              a.$7 = b(
                "oz-player-polaris/parsers/PolarisOzWebmSidxParser"
              ).parse(a.$2, d, c);
            });
        } else
          e = c[0].then(function (c) {
            a.$7 = b("oz-player-polaris/parsers/PolarisOzMp4SidxParser").parse(
              a.$2,
              d.startByte,
              c
            );
          });
        return e.then(function () {
          a.$9.emit("segment_updated");
        });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzVideoContainerType",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (a.split("/")[1] || "").trim();
    }
    f.parse = a;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzMimeUtil",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (a.split("/")[0] || "").trim();
    }
    f.getMimeType = a;
  },
  66
);
__d(
  "oz-player-polaris/parsers/PolarisOzRepresentationParser",
  [
    "oz-player-polaris/manifests/PolarisOzRepresentation",
    "oz-player-polaris/parsers/PolarisOzSegmentTemplateParser",
    "oz-player-polaris/parsers/PolarisOzSidxSegmentsParser",
    "oz-player-polaris/parsers/PolarisOzVideoContainerType",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
    "oz-player-polaris/utils/PolarisOzMimeUtil",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player-polaris/utils/PolarisOzMimeUtil").getMimeType;
    a = (function () {
      function a(a, c, d, e, f, g, h, i, j) {
        (this.$5 = new (b("oz-player-polaris/utils/PolarisOzErrorEmitter"))()),
          (this.$1 = c),
          (this.$6 = e),
          (this.$7 = f),
          (this.$9 = d),
          (this.$10 = a),
          (this.$11 = g),
          (this.$2 = h),
          (this.$3 = i),
          (this.$4 = j);
      }
      var c = a.prototype;
      c.$12 = function () {
        if (this.$8) return this.$8;
        if (this.$1.SegmentBase) {
          var a = this.$1.SegmentBase[0],
            c = this.$1.BaseURL[0]._;
          this.$8 = new (b(
            "oz-player-polaris/parsers/PolarisOzSidxSegmentsParser"
          ))(
            this.$10,
            a,
            c,
            b("oz-player-polaris/parsers/PolarisOzVideoContainerType").parse(
              this.$1.$.mimeType
            ),
            g(this.$1.$.mimeType),
            this.$6,
            this.$7
          );
          this.$8.onError(this.$5.emitError);
        } else if (this.$1.SegmentTemplate != null)
          this.$8 = this.$13(this.$1.SegmentTemplate[0], { isShared: !1 });
        else if (this.$2) this.$8 = this.$13(this.$2[0], { isShared: !0 });
        else {
          a = new (b("oz-player-polaris/utils/PolarisOzError"))({
            type: "OZ_REPRESENTATION_PARSER",
            description: "Unrecognized representation type",
            extra: { code: "OZ_RP-7" },
          });
          throw a;
        }
        return this.$8;
      };
      c.$13 = function (a, c) {
        a = a;
        if (c.isShared) {
          c = babelHelpers["extends"]({}, a);
          c.$ = babelHelpers["extends"]({}, a.$);
          c.$.initialization = c.$.initialization.replace(
            "$RepresentationID$",
            this.$1.$.id
          );
          c.$.media = c.$.media.replace("$RepresentationID$", this.$1.$.id);
          a = c;
        }
        c = this.$9.mpdUrl;
        var d =
          this.$1.BaseURL && this.$1.BaseURL[0] ? this.$1.BaseURL[0]._ : null;
        d = d != null && this.$10.getBool("enable_quickdashv2") ? d : c;
        if (d == null) {
          c = new (b("oz-player-polaris/utils/PolarisOzError"))({
            type: "OZ_REPRESENTATION_PARSER",
            description: "Missing mpd url for template manifest",
            extra: { code: "OZ_RP-6" },
          });
          throw c;
        }
        c = this.$9.customSegmentTimelineParser;
        return new (b(
          "oz-player-polaris/parsers/PolarisOzSegmentTemplateParser"
        ))(
          this.$10,
          a,
          {
            baseUrl: d,
            isStaticMpd: this.$11.manifestType === "static",
            isTemplatedMpd: this.$11.manifestIsTemplated,
          },
          c
        );
      };
      c.onError = function (a) {
        return this.$5.onError(a);
      };
      c.parseInitSegment = function () {
        return this.$12().parseInitializationSegment();
      };
      c.parseBandwidth = function () {
        return Number(this.$1.$.bandwidth);
      };
      c.parseMimeCodecs = function () {
        var a, b;
        a =
          (a = (a = this.$1.$.mimeType) != null ? a : this.$3) != null ? a : "";
        b = (b = (b = this.$1.$.codecs) != null ? b : this.$4) != null ? b : "";
        return a + '; codecs="' + b + '"';
      };
      c.parseSegmentsContainer = function () {
        return this.$12().parseSegmentsContainer();
      };
      c.parseID = function () {
        return "" + this.$1.$.id;
      };
      c.parseCustomFieldFirstSegment = function () {
        var a = this.$9.customRepresentationParsers
          ? this.$9.customRepresentationParsers.firstSegmentParser
          : null;
        return a ? a(this.$1) : null;
      };
      c.parse = function () {
        return new (b("oz-player-polaris/manifests/PolarisOzRepresentation"))(
          this.$1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          this.$9.customRepresentationParsers
        );
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzAudioRepresentationParser",
  [
    "oz-player-polaris/manifests/PolarisOzAudioRepresentation",
    "oz-player-polaris/parsers/PolarisOzRepresentationParser",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(b, c, d, e, f, g, h, i, j) {
        b = a.call(this, b, c, d, e, f, g, h, i, j) || this;
        b.$OzAudioRepresentationParser1 = c;
        b.$OzAudioRepresentationParser2 = d;
        return b;
      }
      var d = c.prototype;
      d.parse = function () {
        var a = this.$OzAudioRepresentationParser2.customRepresentationParsers;
        return new (b(
          "oz-player-polaris/manifests/PolarisOzAudioRepresentation"
        ))(
          this.$OzAudioRepresentationParser1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          a
        );
      };
      return c;
    })(b("oz-player-polaris/parsers/PolarisOzRepresentationParser"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzVideoRepresentationParser",
  [
    "oz-player-polaris/manifests/PolarisOzVideoRepresentation",
    "oz-player-polaris/parsers/PolarisOzRepresentationParser",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(b, c, d, e, f, g, h, i, j) {
        b = a.call(this, b, c, d, e, f, g, h, i, j) || this;
        b.$OzVideoRepresentationParser1 = c;
        b.$OzVideoRepresentationParser2 = d;
        return b;
      }
      var d = c.prototype;
      d.parse = function () {
        var a = Number.parseInt(
            this.$OzVideoRepresentationParser1.$.height,
            10
          ),
          c = Number.parseInt(this.$OzVideoRepresentationParser1.$.width, 10),
          d = this.$OzVideoRepresentationParser2.customRepresentationParsers;
        return new (b(
          "oz-player-polaris/manifests/PolarisOzVideoRepresentation"
        ))(
          this.$OzVideoRepresentationParser1,
          this.parseID(),
          this.parseMimeCodecs(),
          this.parseInitSegment(),
          this.parseSegmentsContainer(),
          this.parseBandwidth(),
          this.parseCustomFieldFirstSegment(),
          d,
          c,
          a
        );
      };
      return c;
    })(b("oz-player-polaris/parsers/PolarisOzRepresentationParser"));
    e.exports = a;
  },
  null
);
/**
 * License: https://www.facebook.com/legal/license/wOOmUHVuSgL/
 */
__d(
  "oz-player-polaris/shims/default/PolarisOzSaxDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = { exports: g };
    function i() {
      (function (a) {
        a.parser = function (a, b) {
          return new c(a, b);
        };
        a.SAXParser = c;
        a.MAX_BUFFER_LENGTH = 64 * 1024;
        var b = [
          "comment",
          "sgmlDecl",
          "textNode",
          "tagName",
          "doctype",
          "procInstName",
          "procInstBody",
          "entity",
          "attribName",
          "attribValue",
          "cdata",
          "script",
        ];
        a.EVENTS = [
          "text",
          "processinginstruction",
          "sgmldeclaration",
          "doctype",
          "comment",
          "opentagstart",
          "attribute",
          "opentag",
          "closetag",
          "opencdata",
          "cdata",
          "closecdata",
          "error",
          "end",
          "ready",
          "script",
          "opennamespace",
          "closenamespace",
        ];
        function c(b, d) {
          if (!(this instanceof c)) return new c(b, d);
          var f = this;
          e(f);
          f.q = f.c = "";
          f.bufferCheckPosition = a.MAX_BUFFER_LENGTH;
          f.opt = d || {};
          f.opt.lowercase = f.opt.lowercase || f.opt.lowercasetags;
          f.looseCase = f.opt.lowercase ? "toLowerCase" : "toUpperCase";
          f.tags = [];
          f.closed = f.closedRoot = f.sawRoot = !1;
          f.tag = f.error = null;
          f.strict = !!b;
          f.noscript = !!(b || f.opt.noscript);
          f.state = u.BEGIN;
          f.strictEntities = f.opt.strictEntities;
          f.ENTITIES = f.strictEntities
            ? Object.create(a.XML_ENTITIES)
            : Object.create(a.ENTITIES);
          f.attribList = [];
          f.opt.xmlns && (f.ns = Object.create(k));
          f.trackPosition = f.opt.position !== !1;
          f.trackPosition && (f.position = f.line = f.column = 0);
          v(f, "onready");
        }
        Object.create ||
          (Object.create = function (a) {
            function b() {}
            b.prototype = a;
            a = new b();
            return a;
          });
        Object.keys ||
          (Object.keys = function (a) {
            var b = [];
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
            return b;
          });
        function d(c) {
          var d = Math.max(a.MAX_BUFFER_LENGTH, 10),
            e = 0;
          for (var f = 0, g = b.length; f < g; f++) {
            var h = c[b[f]].length;
            if (h > d)
              switch (b[f]) {
                case "textNode":
                  x(c);
                  break;
                case "cdata":
                  w(c, "oncdata", c.cdata);
                  c.cdata = "";
                  break;
                case "script":
                  w(c, "onscript", c.script);
                  c.script = "";
                  break;
                default:
                  z(c, "Max buffer length exceeded: " + b[f]);
              }
            e = Math.max(e, h);
          }
          h = a.MAX_BUFFER_LENGTH - e;
          c.bufferCheckPosition = h + c.position;
        }
        function e(a) {
          for (var c = 0, d = b.length; c < d; c++) a[b[c]] = "";
        }
        function f(a) {
          x(a),
            a.cdata !== "" && (w(a, "oncdata", a.cdata), (a.cdata = "")),
            a.script !== "" && (w(a, "onscript", a.script), (a.script = ""));
        }
        c.prototype = {
          end: function () {
            A(this);
          },
          write: K,
          resume: function () {
            this.error = null;
            return this;
          },
          close: function () {
            return this.write(null);
          },
          flush: function () {
            f(this);
          },
        };
        var g = "[CDATA[",
          h = "DOCTYPE",
          i = "http://www.w3.org/XML/1998/namespace",
          j = "http://www.w3.org/2000/xmlns/",
          k = { xml: i, xmlns: j },
          l =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          m =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
          n =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          o =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
        function p(a) {
          return a === " " || a === "\n" || a === "\r" || a === "\t";
        }
        function q(a) {
          return a === '"' || a === "'";
        }
        function r(a) {
          return a === ">" || p(a);
        }
        function s(a, b) {
          return a.test(b);
        }
        function t(a, b) {
          return !s(a, b);
        }
        var u = 0;
        a.STATE = {
          BEGIN: u++,
          BEGIN_WHITESPACE: u++,
          TEXT: u++,
          TEXT_ENTITY: u++,
          OPEN_WAKA: u++,
          SGML_DECL: u++,
          SGML_DECL_QUOTED: u++,
          DOCTYPE: u++,
          DOCTYPE_QUOTED: u++,
          DOCTYPE_DTD: u++,
          DOCTYPE_DTD_QUOTED: u++,
          COMMENT_STARTING: u++,
          COMMENT: u++,
          COMMENT_ENDING: u++,
          COMMENT_ENDED: u++,
          CDATA: u++,
          CDATA_ENDING: u++,
          CDATA_ENDING_2: u++,
          PROC_INST: u++,
          PROC_INST_BODY: u++,
          PROC_INST_ENDING: u++,
          OPEN_TAG: u++,
          OPEN_TAG_SLASH: u++,
          ATTRIB: u++,
          ATTRIB_NAME: u++,
          ATTRIB_NAME_SAW_WHITE: u++,
          ATTRIB_VALUE: u++,
          ATTRIB_VALUE_QUOTED: u++,
          ATTRIB_VALUE_CLOSED: u++,
          ATTRIB_VALUE_UNQUOTED: u++,
          ATTRIB_VALUE_ENTITY_Q: u++,
          ATTRIB_VALUE_ENTITY_U: u++,
          CLOSE_TAG: u++,
          CLOSE_TAG_SAW_WHITE: u++,
          SCRIPT: u++,
          SCRIPT_ENDING: u++,
        };
        a.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" };
        a.ENTITIES = {
          amp: "&",
          gt: ">",
          lt: "<",
          quot: '"',
          apos: "'",
          AElig: 198,
          Aacute: 193,
          Acirc: 194,
          Agrave: 192,
          Aring: 197,
          Atilde: 195,
          Auml: 196,
          Ccedil: 199,
          ETH: 208,
          Eacute: 201,
          Ecirc: 202,
          Egrave: 200,
          Euml: 203,
          Iacute: 205,
          Icirc: 206,
          Igrave: 204,
          Iuml: 207,
          Ntilde: 209,
          Oacute: 211,
          Ocirc: 212,
          Ograve: 210,
          Oslash: 216,
          Otilde: 213,
          Ouml: 214,
          THORN: 222,
          Uacute: 218,
          Ucirc: 219,
          Ugrave: 217,
          Uuml: 220,
          Yacute: 221,
          aacute: 225,
          acirc: 226,
          aelig: 230,
          agrave: 224,
          aring: 229,
          atilde: 227,
          auml: 228,
          ccedil: 231,
          eacute: 233,
          ecirc: 234,
          egrave: 232,
          eth: 240,
          euml: 235,
          iacute: 237,
          icirc: 238,
          igrave: 236,
          iuml: 239,
          ntilde: 241,
          oacute: 243,
          ocirc: 244,
          ograve: 242,
          oslash: 248,
          otilde: 245,
          ouml: 246,
          szlig: 223,
          thorn: 254,
          uacute: 250,
          ucirc: 251,
          ugrave: 249,
          uuml: 252,
          yacute: 253,
          yuml: 255,
          copy: 169,
          reg: 174,
          nbsp: 160,
          iexcl: 161,
          cent: 162,
          pound: 163,
          curren: 164,
          yen: 165,
          brvbar: 166,
          sect: 167,
          uml: 168,
          ordf: 170,
          laquo: 171,
          not: 172,
          shy: 173,
          macr: 175,
          deg: 176,
          plusmn: 177,
          sup1: 185,
          sup2: 178,
          sup3: 179,
          acute: 180,
          micro: 181,
          para: 182,
          middot: 183,
          cedil: 184,
          ordm: 186,
          raquo: 187,
          frac14: 188,
          frac12: 189,
          frac34: 190,
          iquest: 191,
          times: 215,
          divide: 247,
          OElig: 338,
          oelig: 339,
          Scaron: 352,
          scaron: 353,
          Yuml: 376,
          fnof: 402,
          circ: 710,
          tilde: 732,
          Alpha: 913,
          Beta: 914,
          Gamma: 915,
          Delta: 916,
          Epsilon: 917,
          Zeta: 918,
          Eta: 919,
          Theta: 920,
          Iota: 921,
          Kappa: 922,
          Lambda: 923,
          Mu: 924,
          Nu: 925,
          Xi: 926,
          Omicron: 927,
          Pi: 928,
          Rho: 929,
          Sigma: 931,
          Tau: 932,
          Upsilon: 933,
          Phi: 934,
          Chi: 935,
          Psi: 936,
          Omega: 937,
          alpha: 945,
          beta: 946,
          gamma: 947,
          delta: 948,
          epsilon: 949,
          zeta: 950,
          eta: 951,
          theta: 952,
          iota: 953,
          kappa: 954,
          lambda: 955,
          mu: 956,
          nu: 957,
          xi: 958,
          omicron: 959,
          pi: 960,
          rho: 961,
          sigmaf: 962,
          sigma: 963,
          tau: 964,
          upsilon: 965,
          phi: 966,
          chi: 967,
          psi: 968,
          omega: 969,
          thetasym: 977,
          upsih: 978,
          piv: 982,
          ensp: 8194,
          emsp: 8195,
          thinsp: 8201,
          zwnj: 8204,
          zwj: 8205,
          lrm: 8206,
          rlm: 8207,
          ndash: 8211,
          mdash: 8212,
          lsquo: 8216,
          rsquo: 8217,
          sbquo: 8218,
          ldquo: 8220,
          rdquo: 8221,
          bdquo: 8222,
          dagger: 8224,
          Dagger: 8225,
          bull: 8226,
          hellip: 8230,
          permil: 8240,
          prime: 8242,
          Prime: 8243,
          lsaquo: 8249,
          rsaquo: 8250,
          oline: 8254,
          frasl: 8260,
          euro: 8364,
          image: 8465,
          weierp: 8472,
          real: 8476,
          trade: 8482,
          alefsym: 8501,
          larr: 8592,
          uarr: 8593,
          rarr: 8594,
          darr: 8595,
          harr: 8596,
          crarr: 8629,
          lArr: 8656,
          uArr: 8657,
          rArr: 8658,
          dArr: 8659,
          hArr: 8660,
          forall: 8704,
          part: 8706,
          exist: 8707,
          empty: 8709,
          nabla: 8711,
          isin: 8712,
          notin: 8713,
          ni: 8715,
          prod: 8719,
          sum: 8721,
          minus: 8722,
          lowast: 8727,
          radic: 8730,
          prop: 8733,
          infin: 8734,
          ang: 8736,
          and: 8743,
          or: 8744,
          cap: 8745,
          cup: 8746,
          int: 8747,
          there4: 8756,
          sim: 8764,
          cong: 8773,
          asymp: 8776,
          ne: 8800,
          equiv: 8801,
          le: 8804,
          ge: 8805,
          sub: 8834,
          sup: 8835,
          nsub: 8836,
          sube: 8838,
          supe: 8839,
          oplus: 8853,
          otimes: 8855,
          perp: 8869,
          sdot: 8901,
          lceil: 8968,
          rceil: 8969,
          lfloor: 8970,
          rfloor: 8971,
          lang: 9001,
          rang: 9002,
          loz: 9674,
          spades: 9824,
          clubs: 9827,
          hearts: 9829,
          diams: 9830,
        };
        Object.keys(a.ENTITIES).forEach(function (b) {
          var c = a.ENTITIES[b];
          c = typeof c === "number" ? String.fromCharCode(c) : c;
          a.ENTITIES[b] = c;
        });
        for (K in a.STATE) a.STATE[a.STATE[K]] = K;
        u = a.STATE;
        function v(a, b, c) {
          a[b] && a[b](c);
        }
        function w(a, b, c) {
          a.textNode && x(a), v(a, b, c);
        }
        function x(a) {
          (a.textNode = y(a.opt, a.textNode)),
            a.textNode && v(a, "ontext", a.textNode),
            (a.textNode = "");
        }
        function y(a, b) {
          a.trim && (b = b.trim());
          a.normalize && (b = b.replace(/\s+/g, " "));
          return b;
        }
        function z(a, b) {
          x(a);
          a.trackPosition &&
            (b +=
              "\nLine: " + a.line + "\nColumn: " + a.column + "\nChar: " + a.c);
          b = new Error(b);
          a.error = b;
          v(a, "onerror", b);
          return a;
        }
        function A(a) {
          a.sawRoot && !a.closedRoot && B(a, "Unclosed root tag");
          a.state !== u.BEGIN &&
            a.state !== u.BEGIN_WHITESPACE &&
            a.state !== u.TEXT &&
            z(a, "Unexpected end");
          x(a);
          a.c = "";
          a.closed = !0;
          v(a, "onend");
          c.call(a, a.strict, a.opt);
          return a;
        }
        function B(a, b) {
          if (typeof a !== "object" || !(a instanceof c))
            throw new Error("bad call to strictFail");
          a.strict && z(a, b);
        }
        function C(a) {
          a.strict || (a.tagName = a.tagName[a.looseCase]());
          var b = a.tags[a.tags.length - 1] || a,
            c = (a.tag = { name: a.tagName, attributes: {} });
          a.opt.xmlns && (c.ns = b.ns);
          a.attribList.length = 0;
          w(a, "onopentagstart", c);
        }
        function D(a, b) {
          var c = a.indexOf(":");
          c = c < 0 ? ["", a] : a.split(":");
          var d = c[0];
          c = c[1];
          b && a === "xmlns" && ((d = "xmlns"), (c = ""));
          return { prefix: d, local: c };
        }
        function E(a) {
          a.strict || (a.attribName = a.attribName[a.looseCase]());
          if (
            a.attribList.indexOf(a.attribName) !== -1 ||
            Object.prototype.hasOwnProperty.call(a.tag.attributes, a.attribName)
          ) {
            a.attribName = a.attribValue = "";
            return;
          }
          if (a.opt.xmlns) {
            var b = D(a.attribName, !0),
              c = b.prefix;
            b = b.local;
            if (c === "xmlns")
              if (b === "xml" && a.attribValue !== i)
                B(
                  a,
                  "xml: prefix must be bound to " +
                    i +
                    "\nActual: " +
                    a.attribValue
                );
              else if (b === "xmlns" && a.attribValue !== j)
                B(
                  a,
                  "xmlns: prefix must be bound to " +
                    j +
                    "\nActual: " +
                    a.attribValue
                );
              else {
                c = a.tag;
                var d = a.tags[a.tags.length - 1] || a;
                c.ns === d.ns && (c.ns = Object.create(d.ns));
                c.ns[b] = a.attribValue;
              }
            a.attribList.push([a.attribName, a.attribValue]);
          } else
            (a.tag.attributes[a.attribName] = a.attribValue),
              w(a, "onattribute", { name: a.attribName, value: a.attribValue });
          a.attribName = a.attribValue = "";
        }
        function F(a, b) {
          if (a.opt.xmlns) {
            var c = a.tag,
              d = D(a.tagName);
            c.prefix = d.prefix;
            c.local = d.local;
            c.uri = c.ns[d.prefix] || "";
            c.prefix &&
              !c.uri &&
              (B(a, "Unbound namespace prefix: " + JSON.stringify(a.tagName)),
              (c.uri = d.prefix));
            d = a.tags[a.tags.length - 1] || a;
            c.ns &&
              d.ns !== c.ns &&
              Object.keys(c.ns).forEach(function (b) {
                w(a, "onopennamespace", { prefix: b, uri: c.ns[b] });
              });
            for (var d = 0, e = a.attribList.length; d < e; d++) {
              var f = a.attribList[d],
                g = f[0];
              f = f[1];
              var h = D(g, !0),
                i = h.prefix;
              h = h.local;
              var j = i === "" ? "" : c.ns[i] || "";
              f = { name: g, value: f, prefix: i, local: h, uri: j };
              i &&
                i !== "xmlns" &&
                !j &&
                (B(a, "Unbound namespace prefix: " + JSON.stringify(i)),
                (f.uri = i));
              a.tag.attributes[g] = f;
              w(a, "onattribute", f);
            }
            a.attribList.length = 0;
          }
          a.tag.isSelfClosing = !!b;
          a.sawRoot = !0;
          a.tags.push(a.tag);
          w(a, "onopentag", a.tag);
          b ||
            (!a.noscript && a.tagName.toLowerCase() === "script"
              ? (a.state = u.SCRIPT)
              : (a.state = u.TEXT),
            (a.tag = null),
            (a.tagName = ""));
          a.attribName = a.attribValue = "";
          a.attribList.length = 0;
        }
        function G(a) {
          if (!a.tagName) {
            B(a, "Weird empty close tag.");
            a.textNode += "</>";
            a.state = u.TEXT;
            return;
          }
          if (a.script) {
            if (a.tagName !== "script") {
              a.script += "</" + a.tagName + ">";
              a.tagName = "";
              a.state = u.SCRIPT;
              return;
            }
            w(a, "onscript", a.script);
            a.script = "";
          }
          var b = a.tags.length,
            c = a.tagName;
          a.strict || (c = c[a.looseCase]());
          var d = c;
          while (b--) {
            var e = a.tags[b];
            if (e.name !== d) B(a, "Unexpected close tag");
            else break;
          }
          if (b < 0) {
            B(a, "Unmatched closing tag: " + a.tagName);
            a.textNode += "</" + a.tagName + ">";
            a.state = u.TEXT;
            return;
          }
          a.tagName = c;
          e = a.tags.length;
          while (e-- > b) {
            var f = (a.tag = a.tags.pop());
            a.tagName = a.tag.name;
            w(a, "onclosetag", a.tagName);
            d = {};
            for (c in f.ns) d[c] = f.ns[c];
            c = a.tags[a.tags.length - 1] || a;
            a.opt.xmlns &&
              f.ns !== c.ns &&
              Object.keys(f.ns).forEach(function (b) {
                var c = f.ns[b];
                w(a, "onclosenamespace", { prefix: b, uri: c });
              });
          }
          b === 0 && (a.closedRoot = !0);
          a.tagName = a.attribValue = a.attribName = "";
          a.attribList.length = 0;
          a.state = u.TEXT;
        }
        function H(a) {
          var b = a.entity,
            c = b.toLowerCase(),
            d,
            e = "";
          if (a.ENTITIES[b]) return a.ENTITIES[b];
          if (a.ENTITIES[c]) return a.ENTITIES[c];
          b = c;
          b.charAt(0) === "#" &&
            (b.charAt(1) === "x"
              ? ((b = b.slice(2)), (d = parseInt(b, 16)), (e = d.toString(16)))
              : ((b = b.slice(1)),
                (d = parseInt(b, 10)),
                (e = d.toString(10))));
          b = b.replace(/^0+/, "");
          if (isNaN(d) || e.toLowerCase() !== b) {
            B(a, "Invalid character entity");
            return "&" + a.entity + ";";
          }
          return String.fromCodePoint(d);
        }
        function I(a, b) {
          b === "<"
            ? ((a.state = u.OPEN_WAKA), (a.startTagPosition = a.position))
            : p(b) ||
              (B(a, "Non-whitespace before first tag."),
              (a.textNode = b),
              (a.state = u.TEXT));
        }
        function J(a, b) {
          var c = "";
          b < a.length && (c = a.charAt(b));
          return c;
        }
        function K(a) {
          var b = this;
          if (this.error) throw this.error;
          if (b.closed)
            return z(b, "Cannot write after close. Assign an onready handler.");
          if (a === null) return A(b);
          typeof a === "object" && (a = a.toString());
          var c = 0,
            e = "";
          while (!0) {
            e = J(a, c++);
            b.c = e;
            if (!e) break;
            b.trackPosition &&
              (b.position++,
              e === "\n" ? (b.line++, (b.column = 0)) : b.column++);
            switch (b.state) {
              case u.BEGIN:
                b.state = u.BEGIN_WHITESPACE;
                if (e === "\ufeff") continue;
                I(b, e);
                continue;
              case u.BEGIN_WHITESPACE:
                I(b, e);
                continue;
              case u.TEXT:
                if (b.sawRoot && !b.closedRoot) {
                  var f = c - 1;
                  while (e && e !== "<" && e !== "&")
                    (e = J(a, c++)),
                      e &&
                        b.trackPosition &&
                        (b.position++,
                        e === "\n" ? (b.line++, (b.column = 0)) : b.column++);
                  b.textNode += a.substring(f, c - 1);
                }
                e === "<" && !(b.sawRoot && b.closedRoot && !b.strict)
                  ? ((b.state = u.OPEN_WAKA), (b.startTagPosition = b.position))
                  : (!p(e) &&
                      (!b.sawRoot || b.closedRoot) &&
                      B(b, "Text data outside of root node."),
                    e === "&" ? (b.state = u.TEXT_ENTITY) : (b.textNode += e));
                continue;
              case u.SCRIPT:
                e === "<" ? (b.state = u.SCRIPT_ENDING) : (b.script += e);
                continue;
              case u.SCRIPT_ENDING:
                e === "/"
                  ? (b.state = u.CLOSE_TAG)
                  : ((b.script += "<" + e), (b.state = u.SCRIPT));
                continue;
              case u.OPEN_WAKA:
                if (e === "!") (b.state = u.SGML_DECL), (b.sgmlDecl = "");
                else if (!p(e))
                  if (s(l, e)) (b.state = u.OPEN_TAG), (b.tagName = e);
                  else if (e === "/") (b.state = u.CLOSE_TAG), (b.tagName = "");
                  else if (e === "?")
                    (b.state = u.PROC_INST),
                      (b.procInstName = b.procInstBody = "");
                  else {
                    B(b, "Unencoded <");
                    if (b.startTagPosition + 1 < b.position) {
                      f = b.position - b.startTagPosition;
                      e = new Array(f).join(" ") + e;
                    }
                    b.textNode += "<" + e;
                    b.state = u.TEXT;
                  }
                continue;
              case u.SGML_DECL:
                (b.sgmlDecl + e).toUpperCase() === g
                  ? (w(b, "onopencdata"),
                    (b.state = u.CDATA),
                    (b.sgmlDecl = ""),
                    (b.cdata = ""))
                  : b.sgmlDecl + e === "--"
                  ? ((b.state = u.COMMENT), (b.comment = ""), (b.sgmlDecl = ""))
                  : (b.sgmlDecl + e).toUpperCase() === h
                  ? ((b.state = u.DOCTYPE),
                    (b.doctype || b.sawRoot) &&
                      B(b, "Inappropriately located doctype declaration"),
                    (b.doctype = ""),
                    (b.sgmlDecl = ""))
                  : e === ">"
                  ? (w(b, "onsgmldeclaration", b.sgmlDecl),
                    (b.sgmlDecl = ""),
                    (b.state = u.TEXT))
                  : q(e)
                  ? ((b.state = u.SGML_DECL_QUOTED), (b.sgmlDecl += e))
                  : (b.sgmlDecl += e);
                continue;
              case u.SGML_DECL_QUOTED:
                e === b.q && ((b.state = u.SGML_DECL), (b.q = ""));
                b.sgmlDecl += e;
                continue;
              case u.DOCTYPE:
                e === ">"
                  ? ((b.state = u.TEXT),
                    w(b, "ondoctype", b.doctype),
                    (b.doctype = !0))
                  : ((b.doctype += e),
                    e === "["
                      ? (b.state = u.DOCTYPE_DTD)
                      : q(e) && ((b.state = u.DOCTYPE_QUOTED), (b.q = e)));
                continue;
              case u.DOCTYPE_QUOTED:
                b.doctype += e;
                e === b.q && ((b.q = ""), (b.state = u.DOCTYPE));
                continue;
              case u.DOCTYPE_DTD:
                b.doctype += e;
                e === "]"
                  ? (b.state = u.DOCTYPE)
                  : q(e) && ((b.state = u.DOCTYPE_DTD_QUOTED), (b.q = e));
                continue;
              case u.DOCTYPE_DTD_QUOTED:
                b.doctype += e;
                e === b.q && ((b.state = u.DOCTYPE_DTD), (b.q = ""));
                continue;
              case u.COMMENT:
                e === "-" ? (b.state = u.COMMENT_ENDING) : (b.comment += e);
                continue;
              case u.COMMENT_ENDING:
                e === "-"
                  ? ((b.state = u.COMMENT_ENDED),
                    (b.comment = y(b.opt, b.comment)),
                    b.comment && w(b, "oncomment", b.comment),
                    (b.comment = ""))
                  : ((b.comment += "-" + e), (b.state = u.COMMENT));
                continue;
              case u.COMMENT_ENDED:
                e !== ">"
                  ? (B(b, "Malformed comment"),
                    (b.comment += "--" + e),
                    (b.state = u.COMMENT))
                  : (b.state = u.TEXT);
                continue;
              case u.CDATA:
                e === "]" ? (b.state = u.CDATA_ENDING) : (b.cdata += e);
                continue;
              case u.CDATA_ENDING:
                e === "]"
                  ? (b.state = u.CDATA_ENDING_2)
                  : ((b.cdata += "]" + e), (b.state = u.CDATA));
                continue;
              case u.CDATA_ENDING_2:
                e === ">"
                  ? (b.cdata && w(b, "oncdata", b.cdata),
                    w(b, "onclosecdata"),
                    (b.cdata = ""),
                    (b.state = u.TEXT))
                  : e === "]"
                  ? (b.cdata += "]")
                  : ((b.cdata += "]]" + e), (b.state = u.CDATA));
                continue;
              case u.PROC_INST:
                e === "?"
                  ? (b.state = u.PROC_INST_ENDING)
                  : p(e)
                  ? (b.state = u.PROC_INST_BODY)
                  : (b.procInstName += e);
                continue;
              case u.PROC_INST_BODY:
                if (!b.procInstBody && p(e)) continue;
                else
                  e === "?"
                    ? (b.state = u.PROC_INST_ENDING)
                    : (b.procInstBody += e);
                continue;
              case u.PROC_INST_ENDING:
                e === ">"
                  ? (w(b, "onprocessinginstruction", {
                      name: b.procInstName,
                      body: b.procInstBody,
                    }),
                    (b.procInstName = b.procInstBody = ""),
                    (b.state = u.TEXT))
                  : ((b.procInstBody += "?" + e), (b.state = u.PROC_INST_BODY));
                continue;
              case u.OPEN_TAG:
                s(m, e)
                  ? (b.tagName += e)
                  : (C(b),
                    e === ">"
                      ? F(b)
                      : e === "/"
                      ? (b.state = u.OPEN_TAG_SLASH)
                      : (p(e) || B(b, "Invalid character in tag name"),
                        (b.state = u.ATTRIB)));
                continue;
              case u.OPEN_TAG_SLASH:
                e === ">"
                  ? (F(b, !0), G(b))
                  : (B(b, "Forward-slash in opening tag not followed by >"),
                    (b.state = u.ATTRIB));
                continue;
              case u.ATTRIB:
                if (p(e)) continue;
                else
                  e === ">"
                    ? F(b)
                    : e === "/"
                    ? (b.state = u.OPEN_TAG_SLASH)
                    : s(l, e)
                    ? ((b.attribName = e),
                      (b.attribValue = ""),
                      (b.state = u.ATTRIB_NAME))
                    : B(b, "Invalid attribute name");
                continue;
              case u.ATTRIB_NAME:
                e === "="
                  ? (b.state = u.ATTRIB_VALUE)
                  : e === ">"
                  ? (B(b, "Attribute without value"),
                    (b.attribValue = b.attribName),
                    E(b),
                    F(b))
                  : p(e)
                  ? (b.state = u.ATTRIB_NAME_SAW_WHITE)
                  : s(m, e)
                  ? (b.attribName += e)
                  : B(b, "Invalid attribute name");
                continue;
              case u.ATTRIB_NAME_SAW_WHITE:
                if (e === "=") b.state = u.ATTRIB_VALUE;
                else if (p(e)) continue;
                else
                  B(b, "Attribute without value"),
                    (b.tag.attributes[b.attribName] = ""),
                    (b.attribValue = ""),
                    w(b, "onattribute", { name: b.attribName, value: "" }),
                    (b.attribName = ""),
                    e === ">"
                      ? F(b)
                      : s(l, e)
                      ? ((b.attribName = e), (b.state = u.ATTRIB_NAME))
                      : (B(b, "Invalid attribute name"), (b.state = u.ATTRIB));
                continue;
              case u.ATTRIB_VALUE:
                if (p(e)) continue;
                else
                  q(e)
                    ? ((b.q = e), (b.state = u.ATTRIB_VALUE_QUOTED))
                    : (B(b, "Unquoted attribute value"),
                      (b.state = u.ATTRIB_VALUE_UNQUOTED),
                      (b.attribValue = e));
                continue;
              case u.ATTRIB_VALUE_QUOTED:
                if (e !== b.q) {
                  e === "&"
                    ? (b.state = u.ATTRIB_VALUE_ENTITY_Q)
                    : (b.attribValue += e);
                  continue;
                }
                E(b);
                b.q = "";
                b.state = u.ATTRIB_VALUE_CLOSED;
                continue;
              case u.ATTRIB_VALUE_CLOSED:
                p(e)
                  ? (b.state = u.ATTRIB)
                  : e === ">"
                  ? F(b)
                  : e === "/"
                  ? (b.state = u.OPEN_TAG_SLASH)
                  : s(l, e)
                  ? (B(b, "No whitespace between attributes"),
                    (b.attribName = e),
                    (b.attribValue = ""),
                    (b.state = u.ATTRIB_NAME))
                  : B(b, "Invalid attribute name");
                continue;
              case u.ATTRIB_VALUE_UNQUOTED:
                if (!r(e)) {
                  e === "&"
                    ? (b.state = u.ATTRIB_VALUE_ENTITY_U)
                    : (b.attribValue += e);
                  continue;
                }
                E(b);
                e === ">" ? F(b) : (b.state = u.ATTRIB);
                continue;
              case u.CLOSE_TAG:
                if (!b.tagName)
                  if (p(e)) continue;
                  else
                    t(l, e)
                      ? b.script
                        ? ((b.script += "</" + e), (b.state = u.SCRIPT))
                        : B(b, "Invalid tagname in closing tag.")
                      : (b.tagName = e);
                else
                  e === ">"
                    ? G(b)
                    : s(m, e)
                    ? (b.tagName += e)
                    : b.script
                    ? ((b.script += "</" + b.tagName),
                      (b.tagName = ""),
                      (b.state = u.SCRIPT))
                    : (p(e) || B(b, "Invalid tagname in closing tag"),
                      (b.state = u.CLOSE_TAG_SAW_WHITE));
                continue;
              case u.CLOSE_TAG_SAW_WHITE:
                if (p(e)) continue;
                e === ">" ? G(b) : B(b, "Invalid characters in closing tag");
                continue;
              case u.TEXT_ENTITY:
              case u.ATTRIB_VALUE_ENTITY_Q:
              case u.ATTRIB_VALUE_ENTITY_U:
                var i, j;
                switch (b.state) {
                  case u.TEXT_ENTITY:
                    i = u.TEXT;
                    j = "textNode";
                    break;
                  case u.ATTRIB_VALUE_ENTITY_Q:
                    i = u.ATTRIB_VALUE_QUOTED;
                    j = "attribValue";
                    break;
                  case u.ATTRIB_VALUE_ENTITY_U:
                    i = u.ATTRIB_VALUE_UNQUOTED;
                    j = "attribValue";
                    break;
                }
                e === ";"
                  ? ((b[j] += H(b)), (b.entity = ""), (b.state = i))
                  : s(b.entity.length ? o : n, e)
                  ? (b.entity += e)
                  : (B(b, "Invalid character in entity name"),
                    (b[j] += "&" + b.entity + e),
                    (b.entity = ""),
                    (b.state = i));
                continue;
              default:
                throw new Error(b, "Unknown state: " + b.state);
            }
          }
          b.position >= b.bufferCheckPosition && d(b);
          return b;
        }
        String.fromCodePoint ||
          (function () {
            var a = String.fromCharCode,
              b = Math.floor,
              c = function () {
                var c = 16384,
                  d = [],
                  e,
                  f,
                  g = -1,
                  h = arguments.length;
                if (!h) return "";
                var i = "";
                while (++g < h) {
                  var j = Number(arguments[g]);
                  if (!isFinite(j) || j < 0 || j > 1114111 || b(j) !== j)
                    throw RangeError("Invalid code point: " + j);
                  j <= 65535
                    ? d.push(j)
                    : ((j -= 65536),
                      (e = (j >> 10) + 55296),
                      (f = (j % 1024) + 56320),
                      d.push(e, f));
                  (g + 1 === h || d.length > c) &&
                    ((i += a.apply(null, d)), (d.length = 0));
                }
                return i;
              };
            Object.defineProperty
              ? Object.defineProperty(String, "fromCodePoint", {
                  value: c,
                  configurable: !0,
                  writable: !0,
                })
              : (String.fromCodePoint = c);
          })();
      })(typeof g === "undefined" ? (this.sax = {}) : g);
    }
    var j = !1;
    function k() {
      j || ((j = !0), i());
      return h.exports;
    }
    function a(a) {
      switch (a) {
        case void 0:
          return k();
      }
    }
    e.exports = a();
  },
  null
);
__d(
  "oz-player-polaris/shims/PolarisOzSax",
  ["oz-player-polaris/shims/default/PolarisOzSaxDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/shims/default/PolarisOzSaxDefault");
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzXmlParser",
  [
    "oz-player-polaris/shims/PolarisOzSax",
    "oz-player-polaris/shims/polarisOzvariant",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return { $: {} };
    }
    a = (function () {
      function a() {
        var a = this;
        this.$4 = [];
        this.$6 = function (c) {
          c = c.name;
          var d = g(),
            e = a.$3 || a.$2;
          e || b("oz-player-polaris/shims/polarisOzvariant")(0, 219);
          Object.prototype.hasOwnProperty.call(e, c) || (e[c] = []);
          e[c].push(d);
          a.$4.push(e);
          a.$3 = d;
        };
        this.$8 = function () {
          var b = a.$4.pop();
          a.$3 = b;
        };
        this.$9 = function (c) {
          c = c.trim();
          if (!c) return;
          var d = a.$3;
          d || b("oz-player-polaris/shims/polarisOzvariant")(0, 220);
          d._ && b("oz-player-polaris/shims/polarisOzvariant")(0, 221);
          d._ = c;
        };
        this.$7 = function (c) {
          var d = c.name;
          c = c.value;
          var e = a.$3;
          e || b("oz-player-polaris/shims/polarisOzvariant")(0, 222);
          e.$[d] = c;
        };
        var c = !0;
        c = this.$1 = b("oz-player-polaris/shims/PolarisOzSax").parser(c);
        c.onerror = this.$5;
        c.onopentagstart = this.$6;
        c.onattribute = this.$7;
        c.onclosetag = this.$8;
        c.ontext = this.$9;
      }
      var c = a.prototype;
      c.$5 = function (a) {
        throw a;
      };
      c.parse = function (a) {
        var b = g();
        this.$2 = b;
        try {
          this.$1.write(a).close();
        } catch (a) {
          throw a;
        }
        this.$3 = null;
        this.$2 = null;
        this.$4 = [];
        return b;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzMpdParser",
  [
    "oz-player-polaris/manifests/PolarisMpd",
    "oz-player-polaris/parsers/PolarisOzAudioRepresentationParser",
    "oz-player-polaris/parsers/PolarisOzVideoRepresentationParser",
    "oz-player-polaris/parsers/PolarisOzXmlParser",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c, d, e, f) {
        (this.$2 = new (b("oz-player-polaris/utils/PolarisOzErrorEmitter"))()),
          (this.$5 = a),
          (this.$1 = d),
          (this.$3 = e),
          (this.$4 = c),
          (this.$6 = f);
      }
      var c = a.prototype;
      c.onError = function (a) {
        return this.$2.onError(a);
      };
      c.parse = function (a) {
        var c = null;
        a = new (b("oz-player-polaris/parsers/PolarisOzXmlParser"))().parse(a);
        c = a.MPD[0];
        c || b("oz-player-polaris/shims/polarisOzvariant")(0, 3628);
        c.Period.length > 0 ||
          b("oz-player-polaris/shims/polarisOzvariant")(0, 3629);
        a = c.Period[0].AdaptationSet || [];
        var d = this.$7(c),
          e = this.$8(c),
          f = this.$9(a, "video"),
          g = this.$10(
            f,
            b("oz-player-polaris/parsers/PolarisOzVideoRepresentationParser"),
            { manifestType: d, manifestIsTemplated: e }
          );
        g.sort(function (a, b) {
          return a.getHeight() - b.getHeight();
        });
        a = this.$9(a, "audio");
        e = this.$10(
          a,
          b("oz-player-polaris/parsers/PolarisOzAudioRepresentationParser"),
          { manifestType: d, manifestIsTemplated: e }
        );
        e.sort(function (a, b) {
          return a.getBandwidth() - b.getBandwidth();
        });
        var h = this.$4.mpdUrl;
        h = new (b("oz-player-polaris/manifests/PolarisMpd"))(
          c,
          g,
          e,
          h,
          this.$11(c),
          this.$4.customParsers || new Map(),
          d === "static"
        );
        if (this.$6) {
          c = this.$6;
          c.startEME(f, g, a, e);
        }
        return h;
      };
      c.$11 = function (a) {
        a = a.$.minimumUpdatePeriod || "";
        a = /\d+/g.exec(a);
        if (a && a.length) {
          a = a[0];
          return a ? Number.parseInt(a, 10) : null;
        }
        return null;
      };
      c.$7 = function (a) {
        return a.$.type || "static";
      };
      c.$8 = function (a) {
        return a.$.FBIsLiveTemplated === "true";
      };
      c.$9 = function (a, b) {
        return a.find(function (a) {
          if (a.$.mimeType != null) return a.$.mimeType.indexOf(b) !== -1;
          a = a.Representation;
          return a && a.length && a[0].$.mimeType.indexOf(b) !== -1;
        });
      };
      c.$10 = function (a, b, c) {
        var d = this;
        return !a
          ? []
          : a.Representation.map(function (e) {
              e = new b(
                d.$5,
                e,
                d.$4,
                d.$1,
                d.$3,
                c,
                a.SegmentTemplate,
                a.$.mimeType,
                a.$.codecs
              );
              e.onError(d.$2.emitError);
              return e.parse();
            });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzMpdUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      b.push.apply(
        b,
        a.getVideoRepresentations().concat(a.getAudioRepresentations())
      );
      if (b.length) {
        a = b[0].getEndingSegment();
        if (a) return a.getTimeRange();
      }
      return null;
    }
    function b(a) {
      var b = [];
      b.push.apply(
        b,
        a.getVideoRepresentations().concat(a.getAudioRepresentations())
      );
      if (b.length) {
        a = b[0].getEndingSegment();
        if (a) return a.getSequenceNumber();
      }
      return null;
    }
    f.getMpdLastTimeRange = a;
    f.getMpdLastSequenceNumber = b;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzStreamInterruptChecker",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/utils/PolarisOzMpdUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player-polaris/utils/PolarisOzMpdUtils").getMpdLastTimeRange;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this) || this;
        d.$OzStreamInterruptChecker3 = 0;
        d.$OzStreamInterruptChecker4 = null;
        d.$OzStreamInterruptChecker5 = !1;
        d.$OzStreamInterruptChecker1 = b;
        d.$OzStreamInterruptChecker2 = c;
        return d;
      }
      var c = b.prototype;
      c.notifyMpdUpdated = function () {
        var a = g(this.$OzStreamInterruptChecker1),
          b = a ? a.endTime : null;
        b !== null && b === this.$OzStreamInterruptChecker4
          ? this.$OzStreamInterruptChecker3++
          : ((this.$OzStreamInterruptChecker3 = 0),
            this.$OzStreamInterruptChecker5 &&
              this.$OzStreamInterruptChecker4 !== null &&
              this.$OzStreamInterruptChecker4 !== void 0 &&
              a !== null &&
              a !== void 0 &&
              this.emit("streamResumedAt", a.startTime),
            (this.$OzStreamInterruptChecker5 = !1));
        a = this.$OzStreamInterruptChecker2.getNumber(
          "stream_interrupt_check_mpd_stale_count_threshold"
        );
        !this.$OzStreamInterruptChecker5 &&
          a > 0 &&
          this.$OzStreamInterruptChecker3 >= a &&
          b !== null &&
          b !== void 0 &&
          (this.emit("streamInterruptAt", b),
          (this.$OzStreamInterruptChecker5 = !0));
        this.$OzStreamInterruptChecker4 = b;
      };
      return b;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/parsers/PolarisOzMpdUpdater",
  [
    "oz-player-polaris/parsers/PolarisOzMpdParser",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzClearTimeout",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
    "oz-player-polaris/utils/PolarisOzMpdUtils",
    "oz-player-polaris/utils/PolarisOzReadableStreamUtils",
    "oz-player-polaris/utils/PolarisOzStreamInterruptChecker",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/utils/PolarisOzMpdUtils"
      ).getMpdLastSequenceNumber,
      h = b("oz-player-polaris/utils/PolarisOzMpdUtils").getMpdLastTimeRange,
      i = b("oz-player-polaris/utils/PolarisOzReadableStreamUtils").pumpString;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e, f, i, j, k) {
        var l;
        l = a.call(this) || this;
        l.$OzMpdUpdater8 = new (b(
          "oz-player-polaris/utils/PolarisOzErrorEmitter"
        ))();
        l.$OzMpdUpdater10 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        l.$OzMpdUpdater11 = !1;
        l.$OzMpdUpdater15 = function () {
          var a = l.$OzMpdUpdater2.getLocation();
          if (!a) return;
          if (
            l.$OzMpdUpdater6.getBool("live_disable_mpd_updates_when_paused") &&
            !l.$OzMpdUpdater12.isPlaying()
          ) {
            l.setupUpdateLoop();
            return;
          }
          var c = l.$OzMpdUpdater5
            .getOperationLogger("update_manifest")
            .start();
          l.$OzMpdUpdater16(a)
            .then(function (d) {
              l.$OzMpdUpdater7 = 0;
              var e = babelHelpers["extends"]({}, l.$OzMpdUpdater13, {
                mpdUrl: a,
              });
              e = new (b("oz-player-polaris/parsers/PolarisOzMpdParser"))(
                l.$OzMpdUpdater6,
                e,
                l.$OzMpdUpdater1,
                l.$OzMpdUpdater5,
                l.$OzMpdUpdater14
              );
              e.onError(function (a) {
                l.$OzMpdUpdater8.emitError(a), c.setError(a).log();
              });
              e = e.parse(d);
              d = l.$OzMpdUpdater2.isStaticMpd();
              l.$OzMpdUpdater2.updateWith(e);
              e.isStaticMpd() && !d && l.emit("streamTransitionToStatic");
              e = h(l.$OzMpdUpdater2);
              d = e && e.endTime !== 0 ? e.endTime : null;
              c.setLiveheadPosition(d)
                .setLiveheadSeqNum(g(l.$OzMpdUpdater2))
                .setManifestType(
                  l.$OzMpdUpdater2.isStaticMpd() ? "static" : "dynamic"
                )
                .log();
              l.$OzMpdUpdater9.notifyMpdUpdated();
              l.setupUpdateLoop();
            })
            ["catch"](function (a) {
              c.setError(a).log();
              if (
                l.$OzMpdUpdater6.getBool("live_gracefully_handle_mpd_errors")
              ) {
                var d;
                a instanceof b("oz-player-polaris/utils/PolarisOzError") &&
                  (d = a.getExtra().code || "");
                var e = ["404", "503"];
                l.$OzMpdUpdater6.getBool("live_gracefully_handle_no_network") &&
                  e.push("0");
                var f = l.$OzMpdUpdater6.getNumber(
                    "live_max_try_attempts_on_404"
                  ),
                  g = !1;
                if (d && e.indexOf(d) > -1)
                  switch (d) {
                    case "410":
                      l.$OzMpdUpdater11 = !0;
                      g = !0;
                      break;
                    case "404":
                      l.$OzMpdUpdater7++;
                      if (l.$OzMpdUpdater7 >= f) break;
                    case "503":
                    case "0":
                      g = !0;
                      break;
                  }
                if (g) {
                  l.setupUpdateLoop();
                  return;
                }
              }
              l.$OzMpdUpdater8.emitError(a);
            });
        };
        var m = d.getMinimumUpdatePeriod();
        l.$OzMpdUpdater7 = 0;
        l.$OzMpdUpdater1 = e;
        l.$OzMpdUpdater2 = d;
        l.$OzMpdUpdater12 = f;
        l.$OzMpdUpdater3 = m;
        l.$OzMpdUpdater5 = i.cloneContext().setType("manifest");
        l.$OzMpdUpdater6 = c;
        l.$OzMpdUpdater13 = j;
        l.$OzMpdUpdater14 = k;
        l.$OzMpdUpdater9 = new (b(
          "oz-player-polaris/utils/PolarisOzStreamInterruptChecker"
        ))(l.$OzMpdUpdater2, l.$OzMpdUpdater6);
        l.$OzMpdUpdater10.addSubscriptions(
          l.$OzMpdUpdater9.addListener("streamResumedAt", function (a) {
            l.emit("streamResumedAt", a);
          }),
          l.$OzMpdUpdater9.addListener("streamInterruptAt", function (a) {
            l.emit("streamInterruptAt", a);
          })
        );
        return l;
      }
      var d = c.prototype;
      d.setupUpdateLoop = function () {
        var a = !this.$OzMpdUpdater11;
        a &&
          this.$OzMpdUpdater6.getBool("stop_manifest_update_when_static") &&
          ((a = !this.$OzMpdUpdater2.isStaticMpd()),
          (this.$OzMpdUpdater3 = this.$OzMpdUpdater2.getMinimumUpdatePeriod()));
        a &&
          this.$OzMpdUpdater3 &&
          this.$OzMpdUpdater2.getLocation() &&
          (this.$OzMpdUpdater4 = b(
            "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions"
          )(this.$OzMpdUpdater15, this.$OzMpdUpdater3 * 1e3));
      };
      d.onError = function (a) {
        return this.$OzMpdUpdater8.onError(a);
      };
      d.$OzMpdUpdater16 = function (a) {
        a = this.$OzMpdUpdater1.requestRawUrl(
          a,
          { credentials: "same-origin" },
          null,
          this.$OzMpdUpdater5
        );
        a = a.getStream().getReader();
        return i(a);
      };
      d.destroy = function () {
        this.$OzMpdUpdater4 &&
          b("oz-player-polaris/shims/polarisOzClearTimeout")(
            this.$OzMpdUpdater4
          ),
          this.$OzMpdUpdater10.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzBufferingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    c = 0.1;
    d = 1;
    var g = 0.2;
    function a(a, b, c, d) {
      if (h(a, c, d)) return !0;
      c = a.currentTime;
      d = 0;
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
    function h(a, b, c) {
      var d = a.currentTime,
        e = 0;
      for (var f = 0; f < a.buffered.length; f++) {
        var h = a.buffered.start(f),
          i = a.buffered.end(f);
        if (h <= d && i >= d) {
          e = i;
          break;
        }
      }
      return (
        (!c.getBool("reach_end_only_when_video_ended", !1) || a.ended) &&
        (Math.abs(e - b) <= g || Math.abs(d - b) <= g)
      );
    }
    function b(a, b) {
      a = a ? a.getSourceBufferState() : null;
      if (!a) return 0;
      b = b.getCurrentTime();
      return i(b, a.getBufferedRanges());
    }
    function i(a, b) {
      var c = null;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.startTime <= a && e.endTime > a && (c = e);
      }
      return !c ? 0 : c.endTime - a;
    }
    f.BUFFER_UNDERFLOW_THRESHOLD = c;
    f.BUFFER_OVERFLOW_THRESHOLD = d;
    f.hasEnoughBuffer = a;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = i;
  },
  66
);
__d(
  "oz-player-polaris/playback_controls/PolarisOzPlaybackTimeRangeManager",
  ["oz-player-polaris/utils/PolarisOzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c, d) {
        (this.$3 = null),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = !0),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$1 = a),
          (this.$2 = b),
          (this.$7 = c),
          (this.$8 = d);
      }
      var b = a.prototype;
      b.setTimelineBlockingEnabled = function (a) {
        (this.$6 = a), this.$6 || this.$2.unblockTimeRange();
      };
      b.setTimeRangeProvider = function (a) {
        var b = this;
        this.$3 != null && this.$3.remove();
        this.$3 = a.addUpdateListener(function () {
          var c = a.getTimeRanges(),
            d = 0;
          if (c.length !== 0) {
            c = c[c.length - 1];
            d = c.endTime;
          }
          b.$9(d);
        });
      };
      b.$9 = function (a) {
        if (!this.$6) return;
        if (this.$4 === a) return;
        this.$4 = a;
        if (this.$1.currentTime <= this.$5) return;
        if (
          this.$8 !== 0 &&
          this.$7 !== 0 &&
          this.$1.duration - this.$1.currentTime > this.$7
        ) {
          a = [];
          for (var b = 0; b < this.$1.buffered.length; b++)
            a.push({
              startTime: this.$1.buffered.start(b),
              endTime: this.$1.buffered.end(b),
            });
          b = d(
            "oz-player-polaris/utils/PolarisOzBufferingUtils"
          ).getBufferAheadFromCurrentTime(this.$1.currentTime, a);
          this.$5 = this.$1.currentTime + Math.min(b, this.$8);
          a = { startTime: this.$5, endTime: this.$1.duration - this.$8 };
          this.$2.blockTimeRange(a);
        }
      };
      b.destroy = function () {
        this.$3 != null && (this.$3.remove(), (this.$3 = null));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player-polaris/strategies/PolarisLiveheadSeekaheadStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 0.05;
    function a(a, b) {
      b = Math.max.apply(
        Math,
        b.map(function (a) {
          return a.startTime;
        })
      );
      return b - a > 0 ? b - a + g : 0;
    }
    f.computeSeekAhead = a;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzTimelineGapUtil",
  [
    "oz-player-polaris/utils/PolarisOzNumericalHelper",
    "oz-player-polaris/utils/PolarisOzNumericalRangeUtil",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1.5;
    function a(a, c) {
      c = c.map(function (a) {
        return { rangeStart: a.startTime, rangeEnd: a.endTime };
      });
      return (
        new (b(
          "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
        ))().findCurrentRangeIndex(a, c) === -1
      );
    }
    function c(a, c) {
      var d = c.map(function (a) {
        return { rangeStart: a.startTime, rangeEnd: a.endTime };
      });
      d = new (b(
        "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
      ))().findCurrentRangeIndex(a, d);
      if (d !== -1) {
        c = c[d];
        return (
          b("oz-player-polaris/utils/PolarisOzNumericalHelper").lessThanOrEqual(
            a,
            c.endTime
          ) && c.endTime - a < g
        );
      }
      return !1;
    }
    e.exports = { isNearGap: c, isInGap: a };
  },
  null
);
__d(
  "oz-player-polaris/playback_controls/PolarisOzPlayheadManager",
  [
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/strategies/PolarisLiveheadSeekaheadStrategy",
    "oz-player-polaris/utils/PolarisOzNumericalRangeUtil",
    "oz-player-polaris/utils/PolarisOzTimelineGapUtil",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/shims/PolarisOzDOMEventListener"
      ).listenDOMEvent,
      h = b(
        "oz-player-polaris/strategies/PolarisLiveheadSeekaheadStrategy"
      ).computeSeekAhead,
      i = b("oz-player-polaris/utils/PolarisOzTimelineGapUtil").isInGap,
      j = b("oz-player-polaris/utils/PolarisOzTimelineGapUtil").isNearGap;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzPlayheadManager2 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzPlayheadManager3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzPlayheadManager4 = new Set();
        d.$OzPlayheadManager10 = new Set();
        d.$OzPlayheadManager12 = function (a) {
          d.$OzPlayheadManager1.currentTime = a;
        };
        d.$OzPlayheadManager14 = !1;
        var e = c.config,
          f = c.initialPlaybackPosition,
          h = c.mpd,
          i = c.perfLoggerProvider,
          j = c.playbackState,
          k = c.playheadCatchup,
          l = c.seekHandler;
        c = c.video;
        d.$OzPlayheadManager1 = c;
        d.$OzPlayheadManager6 = e;
        d.$OzPlayheadManager7 = j;
        d.$OzPlayheadManager8 = h;
        d.$OzPlayheadManager9 = k;
        d.$OzPlayheadManager11 = i;
        l && (d.$OzPlayheadManager12 = l);
        d.$OzPlayheadManager13 = f;
        d.$OzPlayheadManager2.addSubscriptions(
          g(d.$OzPlayheadManager1, "durationchange", function () {
            d.$OzPlayheadManager15(),
              d.$OzPlayheadManager16("durationchange"),
              d.$OzPlayheadManager17("durationchange");
          }),
          g(
            d.$OzPlayheadManager1,
            "pause",
            d.$OzPlayheadManager16.bind(
              babelHelpers.assertThisInitialized(d),
              "pause"
            )
          ),
          g(
            d.$OzPlayheadManager1,
            "play",
            d.$OzPlayheadManager16.bind(
              babelHelpers.assertThisInitialized(d),
              "play"
            )
          ),
          g(
            d.$OzPlayheadManager1,
            "playing",
            d.$OzPlayheadManager16.bind(
              babelHelpers.assertThisInitialized(d),
              "playing"
            )
          ),
          g(d.$OzPlayheadManager1, "waiting", function () {
            d.$OzPlayheadManager16.bind(
              babelHelpers.assertThisInitialized(d),
              "waiting"
            ),
              d.$OzPlayheadManager17("waiting");
          })
        );
        return d;
      }
      var d = c.prototype;
      d.observeSourceBufferState = function (a, c) {
        var d = this;
        this.$OzPlayheadManager4.has(a) &&
          b("oz-player-polaris/shims/polarisOzvariant")(0, 4179);
        this.$OzPlayheadManager4.add(a);
        this.$OzPlayheadManager2.addSubscriptions(
          a.addEventListener("buffer_updated", function () {
            return d.$OzPlayheadManager18(a, c);
          })
        );
      };
      d.$OzPlayheadManager18 = function (a, b) {
        var c = [];
        if (
          this.$OzPlayheadManager6.getBool(
            "check_buffer_range_once_for_playhead_update"
          ) &&
          this.$OzPlayheadManager10.has(a)
        )
          return;
        this.$OzPlayheadManager4.forEach(function (a) {
          a = a.getBufferedRanges();
          a.length && c.push(a[0]);
        });
        c.length > 0 && this.$OzPlayheadManager10.add(a);
        a = this.$OzPlayheadManager6.getBool(
          "seek_ahead_use_native_current_time"
        )
          ? this.$OzPlayheadManager1.currentTime
          : this.$OzPlayheadManager7.getCurrentTime();
        a = h(a, c);
        var d = this.$OzPlayheadManager6.getNumber("timeline_offset_threshold");
        a > 0 &&
          (d === 0 || a < d) &&
          this.$OzPlayheadManager19(
            this.$OzPlayheadManager1.currentTime + a,
            "first_available_buffer",
            "source_buffer",
            b
          );
      };
      d.setTimeRangeProvider = function (a) {
        this.$OzPlayheadManager3.release(),
          this.$OzPlayheadManager3.engage(),
          this.$OzPlayheadManager3.addSubscriptions(
            a.addUpdateListener(
              this.$OzPlayheadManager16.bind(this, "time_range_updated")
            )
          ),
          (this.$OzPlayheadManager5 = a),
          this.$OzPlayheadManager16("time_range_set");
      };
      d.$OzPlayheadManager15 = function () {
        var a = this.$OzPlayheadManager1.duration;
        if (
          this.$OzPlayheadManager13 !== 0 &&
          !this.$OzPlayheadManager14 &&
          !isNaN(a) &&
          a !== Infinity
        ) {
          a =
            this.$OzPlayheadManager13 > 0
              ? this.$OzPlayheadManager13
              : a + this.$OzPlayheadManager13;
          this.$OzPlayheadManager14 = !0;
          this.$OzPlayheadManager19(a, "initial_playback_position", "");
          this.emit("initialPlaybackPositionSet", a);
        }
      };
      d.$OzPlayheadManager16 = function (a, c) {
        c === void 0 && (c = null);
        var d = this.$OzPlayheadManager9;
        if (
          d &&
          d.isEnabled(this.$OzPlayheadManager1, this.$OzPlayheadManager8)
        ) {
          d = d.computeNewPlayheadPosition(
            this.$OzPlayheadManager1,
            this.$OzPlayheadManager8
          );
          if (typeof d === "number") {
            this.$OzPlayheadManager19(d, "live_catch_up_strategy", a, c);
            return;
          }
        }
        d = this.$OzPlayheadManager6.getNumber("auto_seek_playhead_slack");
        if (d === 0) return;
        var e = this.$OzPlayheadManager5;
        if (!e) return;
        var f = this.$OzPlayheadManager7.getCurrentTime(),
          g = e.getTimeRanges().map(function (a) {
            return { rangeStart: a.startTime, rangeEnd: a.endTime };
          }),
          h = new (b(
            "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
          ))().findNextRangeIndex(f, g);
        if ((j(f, e.getTimeRanges()) || i(f, e.getTimeRanges())) && h !== -1) {
          f = g[h];
          this.$OzPlayheadManager19(
            f.rangeStart + d,
            "jump_over_timeline_gap",
            a,
            c
          );
        }
      };
      d.$OzPlayheadManager17 = function (a) {
        if (!this.$OzPlayheadManager6.getBool("skip_videobuffer_gaps")) return;
        var c = this.$OzPlayheadManager6.getNumber("auto_seek_playhead_slack");
        if (c === 0) return;
        var d = this.$OzPlayheadManager7.getCurrentTime(),
          e = [];
        for (var f = 0; f < this.$OzPlayheadManager1.buffered.length; f++)
          e.push({
            startTime: this.$OzPlayheadManager1.buffered.start(f),
            endTime: this.$OzPlayheadManager1.buffered.end(f),
          });
        f = e.map(function (a) {
          return { rangeStart: a.startTime, rangeEnd: a.endTime };
        });
        var g = new (b(
          "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
        ))().findNextRangeIndex(d, f);
        if ((j(d, e) || i(d, e)) && g !== -1) {
          d = f[g];
          this.$OzPlayheadManager19(
            d.rangeStart + c,
            "jump_over_buffer_gap",
            a,
            null
          );
          return;
        }
      };
      d.destroy = function () {
        this.$OzPlayheadManager2.release(),
          this.$OzPlayheadManager3.release(),
          this.$OzPlayheadManager4.clear();
      };
      d.$OzPlayheadManager19 = function (a, b, c, d) {
        var e = a - this.$OzPlayheadManager1.currentTime,
          f = this.$OzPlayheadManager6.getNumber("seek_ahead_epsilon");
        if (f > 0 && e <= f) return;
        this.$OzPlayheadManager11
          .getOperationLogger("playhead_adjustment")
          .setLength(Math.round(e * 1e3))
          .setReason(b)
          .setInitiator(c)
          .setType(d)
          .log();
        this.$OzPlayheadManager12(a);
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/playback_controls/PolarisOzPlayheadNudger",
  [
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
      "oz-player-polaris/shims/PolarisOzDOMEventListener"
    ).listenDOMEvent;
    a = (function () {
      function a(a, c) {
        (this.$2 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))()),
          (this.$3 = null),
          (this.$1 = c),
          (this.$4 = a),
          this.$2.addSubscriptions(
            g(this.$1, "timeupdate", this.$5.bind(this)),
            g(this.$1, "playing", this.$6.bind(this)),
            g(this.$1, "pause", this.$7.bind(this))
          );
      }
      var c = a.prototype;
      c.$5 = function () {
        var a = this.$4.getNumber("playhead_nudge_slack");
        if (a === 0) return;
        var b = this.$3;
        b != null &&
          !this.$1.paused &&
          this.$1.readyState === 4 &&
          (this.$1.currentTime === b && (this.$1.currentTime += a),
          (this.$3 = null));
      };
      c.$6 = function () {
        this.$3 = this.$1.currentTime;
      };
      c.$7 = function () {
        this.$3 = null;
      };
      c.destroy = function () {
        this.$2.release();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polarisOzThrottleDefault",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = window.clearTimeout,
      h = window.setTimeout;
    function a(a, b) {
      var c = 0,
        d = null,
        e,
        f;
      return function () {
        var i = Array.from(arguments),
          j = Date.now();
        e = this;
        f = i;
        var k = function () {
          a.apply(e, f), (e = f = null), (c = Date.now()), (d = null);
        };
        c + b < j ? (g(d), k()) : d == null && (d = h(k, b - (j - c)));
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/shims/polarisOzThrottle",
  ["oz-player-polaris/shims/default/polarisOzThrottleDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/shims/default/polarisOzThrottleDefault");
  },
  null
);
__d(
  "oz-player-polaris/states/PolarisOzObservedPlaybackState",
  [
    "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger",
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzThrottle",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger"
      ).OzMultiDestinationPerfLoggerProvider,
      h = b("oz-player-polaris/shims/PolarisOzDOMEventListener").listenDOMEvent,
      i = 150;
    a = (function () {
      function a(a, c) {
        var d = this;
        c === void 0 && (c = new g([]));
        this.$3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$6 = function () {
          d.$4.getOperationLogger("pause").setState("paused").log();
        };
        this.$7 = function () {
          d.$5(), d.$4.getOperationLogger("playing").setState("playing").log();
        };
        this.$5 = function () {
          d.$2 = d.$1.currentTime;
        };
        this.$1 = a;
        this.$4 = c;
        this.$2 = this.$1.currentTime;
        this.$3.addSubscriptions(
          h(this.$1, "seeked", this.$5),
          h(this.$1, "seeking", this.$5),
          h(
            this.$1,
            "timeupdate",
            b("oz-player-polaris/shims/polarisOzThrottle")(this.$5, i)
          ),
          h(this.$1, "pause", this.$6),
          h(this.$1, "playing", this.$7)
        );
      }
      var c = a.prototype;
      c.isPlaying = function () {
        return !this.$1.paused;
      };
      c.getCurrentTime = function () {
        return this.$2;
      };
      c.forceUpdateCurrentTime = function () {
        this.$5();
      };
      c.getDuration = function () {
        return this.$1.duration;
      };
      c.addEventListener = function (a, b) {
        return h(this.$1, a, b);
      };
      c.destroy = function () {
        this.$3.release();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/states/PolarisOzPlayerDimensions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.setDimensions(a);
      }
      var b = a.prototype;
      b.setDimensions = function (a) {
        (this.$1 = a.width), (this.$2 = a.height);
      };
      b.getDimensions = function () {
        return { width: this.$1, height: this.$2 };
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/polarisGetSegmentsCount",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      var e = 0,
        f = a.getTimeRange().startTime;
      a = a;
      var g = a.getTimeRange().startTime;
      while (a !== null && g < c + f) {
        var h = g;
        e++;
        a = b.getSegmentAfter(a);
        if (a) g = a.getTimeRange().startTime;
        else break;
        if (g <= h) return d;
      }
      return Math.max(e, 1);
    }
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzStaticStreamSegmentsStrategy",
  ["oz-player-polaris/strategies/polarisGetSegmentsCount"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var c = a.prototype;
      c.isActive = function () {
        return !0;
      };
      c.getSegmentsCount = function (a, c, d) {
        a = this.$1.getNumber("seconds_to_stream");
        var e = this.$1.getNumber("segments_to_stream");
        a > 0 &&
          (e = b("oz-player-polaris/strategies/polarisGetSegmentsCount")(
            c,
            d,
            a,
            e
          ));
        return e;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzBandwidthBoundaryStreamSegmentsCountStrategy",
  [
    "oz-player-polaris/networks/PolarisOzBandwidthEstimator",
    "oz-player-polaris/strategies/PolarisOzStaticStreamSegmentsStrategy",
    "oz-player-polaris/strategies/polarisGetSegmentsCount",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c) {
        (this.$1 = a),
          (this.$2 = c),
          (this.$3 = new (b(
            "oz-player-polaris/strategies/PolarisOzStaticStreamSegmentsStrategy"
          ))(a));
      }
      var c = a.prototype;
      c.isActive = function (a) {
        return !0;
      };
      c.getSegmentsCount = function (a, c, d) {
        var e = b(
            "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
          ).getBandwidth(this.$1.getLegacyConfig()),
          f = b(
            "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
          ).getStandardDeviationOfBandwidth(),
          g = this.$1.getNumber("bandwidth_boundary_standard_deviation_factor"),
          h = this.$2.some(function (a) {
            a = a.getBandwidth();
            return Math.abs(a - e) < f * g;
          });
        h = h ? this.$4(a, c, d) : this.$3.getSegmentsCount(a, c, d);
        a = this.$5(c, e);
        return Math.min(h, a);
      };
      c.$4 = function (a, c, d) {
        a = this.$1.getNumber("seconds_to_stream_near_bandwidth_boundary");
        var e = this.$1.getNumber("segments_to_stream_near_bandwidth_boundary");
        a > 0 &&
          (e = b("oz-player-polaris/strategies/polarisGetSegmentsCount")(
            c,
            d,
            a,
            e
          ));
        return e;
      };
      c.$5 = function (a, b) {
        var c = Infinity;
        a = a.getByteRange();
        if (a) {
          var d = a.endByte;
          if (d != null) {
            var e = this.$1.getNumber("per_stream_duration_target");
            d = d - a.startByte;
            e > 1e-5 && d !== 0 && (c = Math.ceil((e * b) / (d * 8)));
          }
        }
        return c;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzPlaybackConfidenceUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 0.8;
    function a(a, b, c, d, e, f, i, j) {
      c = Math.min(1, c / d);
      d = 1 + (1 - c) * e;
      c = a.getBandwidth() * d;
      if (c > b) return g * (b / c);
      e = 0;
      if (f != null && i != null && j > 0) {
        d = h(a, b, f, i);
        d != null && d > 0 && (e = (d / 1e3) * j);
      }
      return 1 - ((1 - g) * c) / b - e;
    }
    function h(a, b, c, d) {
      var e = a.getBandwidth();
      a = a.getSegment(0);
      if (a) {
        a = a.getTimeRange();
        a = (a.endTime - a.startTime) * c;
        c = ((a * e) / b) * 1e3 + d;
        return c - a * 1e3;
      }
    }
    f.getPlaybackConfidence = a;
    f.getEstimatedDownloadTimeBufferDeltaMs = h;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzAbrUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      var e = a.getNumber("resolution_constraint_factor");
      if (e === 0) return b;
      a = b.filter(function (a) {
        return (
          a.getWidth() <= c.width * d * e || a.getHeight() <= c.height * d * e
        );
      });
      return !a.length ? [b[0]] : a;
    }
    function b(a, b, c, d, e, f) {
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
    }
    f.excludeLargeRepresentations = a;
    f.getReasonToPreventEvaluation = b;
  },
  66
);
__d(
  "oz-player-polaris/utils/PolarisOzPlaybackRestrictionsUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (c.length === 0) return [];
      c.sort(function (a, b) {
        return a.getBandwidth() - b.getBandwidth();
      });
      return a.reduce(function (a, c) {
        return c.applyRestriction(a, b);
      }, c);
    }
    f.applyVideoPlaybackRestrictions = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzAbrManager",
  [
    "oz-player-polaris/networks/PolarisOzBandwidthEstimator",
    "oz-player-polaris/strategies/PolarisOzBandwidthBoundaryStreamSegmentsCountStrategy",
    "oz-player-polaris/strategies/PolarisOzPlaybackConfidenceUtils",
    "oz-player-polaris/utils/PolarisOzAbrUtils",
    "oz-player-polaris/utils/PolarisOzBufferingUtils",
    "oz-player-polaris/utils/PolarisOzPlaybackRestrictionsUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/utils/PolarisOzAbrUtils"
      ).excludeLargeRepresentations,
      h = b(
        "oz-player-polaris/utils/PolarisOzAbrUtils"
      ).getReasonToPreventEvaluation,
      i = b(
        "oz-player-polaris/utils/PolarisOzBufferingUtils"
      ).getBufferAheadFromPlaybackStates,
      j = b(
        "oz-player-polaris/utils/PolarisOzPlaybackRestrictionsUtils"
      ).applyVideoPlaybackRestrictions;
    a = (function () {
      function a(a, c, d, e, f, g, h, i) {
        (this.$2 = 0),
          (this.$3 = Date.now()),
          (this.$4 = !1),
          (this.$11 = null),
          (this.$1 = a),
          (this.$5 = c),
          (this.$6 = this.$15(c, d)),
          (this.$7 = e),
          (this.$8 = f),
          (this.$10 = g),
          (this.$12 = h),
          (this.$13 = new (b(
            "oz-player-polaris/strategies/PolarisOzBandwidthBoundaryStreamSegmentsCountStrategy"
          ))(a, d)),
          (this.$14 = i);
      }
      var c = a.prototype;
      c.setSourceBuffer = function (a) {
        this.$9 = a;
      };
      c.$15 = function (a, b) {
        var c = this.$1.getNumber("abr_restrict_from_index"),
          d = this.$1.getNumber("abr_restrict_to_index");
        if (d === 0 && c === 0) return b;
        var e = b.findIndex(function (b) {
          return a.getID() === b.getID();
        });
        return e === -1
          ? b
          : b.filter(function (a, b) {
              return b - e >= c && b - e <= d;
            });
      };
      c.$16 = function (a) {
        a = g(this.$1, a, this.$14(), this.$12);
        a = j(this.$7, this.$14(), a);
        return a;
      };
      c.getBestRepresentation = function (a) {
        a === void 0 && (a = null);
        var c = i(this.$9, this.$8),
          d = h(
            this.$1,
            this.$4,
            c,
            b(
              "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
            ).getSampleCount(),
            this.$2,
            this.$3
          );
        if (d != null) {
          this.$11 = d;
          return this.$5;
        }
        d = Date.now();
        this.$2 = d;
        var e = b(
            "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
          ).getAdjustedBandwidth(this.$1.getLegacyConfig()),
          f = this.$16(this.$6),
          g = null;
        this.$1.getBool("abr_use_download_time") && a != null
          ? (g = this.$17(f, e, a) || this.$18(f, e, c, a))
          : (g = this.$18(f, e, c, a));
        e = this.$1.getBool("fix_abr_default_representation")
          ? f[0]
          : this.$6[0];
        g = g || e;
        if (this.$19(c, g)) {
          this.$11 = "high_buffer";
          return this.$5;
        }
        this.$5 !== g && ((this.$4 = !0), (this.$3 = d), (this.$5 = g));
        this.$11 = "bandwidth";
        return g;
      };
      c.$18 = function (a, c, d, e) {
        e === void 0 && (e = null);
        var f = null;
        for (var g = 0; g < a.length; g++) {
          var h = b(
            "oz-player-polaris/strategies/PolarisOzPlaybackConfidenceUtils"
          ).getPlaybackConfidence(
            a[g],
            c,
            d,
            this.$1.getNumber("low_buffer_bandwidth_target_threshold"),
            this.$1.getNumber("low_buffer_bandwidth_target_increase_factor"),
            e,
            b(
              "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
            ).getEstimatedTimeToFirstByteMs(this.$1.getLegacyConfig()),
            this.$1.getNumber("download_time_buffer_delta_penalty_factor")
          );
          h > this.$1.getNumber("abr_confidence_threshold") &&
            (!f || f.getBandwidth() < a[g].getBandwidth()) &&
            (f = a[g]);
        }
        return f;
      };
      c.$17 = function (a, c, d) {
        for (var e = a.length - 1; e >= 0; e--) {
          var f = b(
            "oz-player-polaris/strategies/PolarisOzPlaybackConfidenceUtils"
          ).getEstimatedDownloadTimeBufferDeltaMs(
            a[e],
            c,
            d,
            b(
              "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
            ).getEstimatedTimeToFirstByteMs(this.$1.getLegacyConfig()) || 0
          );
          if (
            f != null &&
            f + this.$1.getNumber("minimum_download_additional_buffer_ms") < 0
          )
            return a[e];
        }
        return null;
      };
      c.$19 = function (a, b) {
        var c = this.$1.getNumber("abr_prevent_down_switch_buffer_threshold");
        return c > 0 && a >= c && this.$5.getBandwidth() > b.getBandwidth()
          ? !0
          : !1;
      };
      c.getStreamSegmentsCountStrategy = function () {
        return this.$13;
      };
      c.getLastEvaluationReason = function () {
        return this.$11;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzAudioIBRManager",
  ["oz-player-polaris/networks/PolarisOzBandwidthEstimator"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var c = a.prototype;
      c.getInitialAudioRepresentation = function (a) {
        var c = b(
          "oz-player-polaris/networks/PolarisOzBandwidthEstimator"
        ).getAdjustedBandwidth(this.$1.getLegacyConfig());
        a = a.slice(0);
        a.sort(function (a, b) {
          return a.getBandwidth() - b.getBandwidth();
        });
        var d = this.$1.getNumber("live_audio_ibr_bandwidth_percentage");
        d = c * d;
        for (var e = a.length - 1; e >= 0; e--)
          if (a[e].getBandwidth() <= d) {
            this.$2
              .getOperationLogger("audio_ibr_success")
              .setRepresentationID(a[e].getID())
              .setReason(c.toString())
              .log();
            return a[e];
          }
        this.$2
          .getOperationLogger("audio_ibr_no_op")
          .setReason(c.toString())
          .log();
        return null;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferAheadPriorityStrategy",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzThrottle",
    "oz-player-polaris/utils/PolarisOzBufferingUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/utils/PolarisOzBufferingUtils"
      ).getBufferAheadFromCurrentTime,
      h = 6,
      i = 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzBufferAheadPriorityStrategy3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzBufferAheadPriorityStrategy4 = function () {
          d.emit("state_changed");
        };
        d.$OzBufferAheadPriorityStrategy1 = c;
        d.$OzBufferAheadPriorityStrategy3.addSubscriptions(
          d.$OzBufferAheadPriorityStrategy1.addEventListener(
            "progress",
            b("oz-player-polaris/shims/polarisOzThrottle")(
              d.$OzBufferAheadPriorityStrategy4,
              i
            )
          ),
          d.$OzBufferAheadPriorityStrategy1.addEventListener(
            "timeupdate",
            b("oz-player-polaris/shims/polarisOzThrottle")(
              d.$OzBufferAheadPriorityStrategy4,
              i
            )
          )
        );
        return d;
      }
      var d = c.prototype;
      d.getName = function () {
        return "buffer_ahead";
      };
      d.setSourceBufferState = function (a) {
        if (this.$OzBufferAheadPriorityStrategy2) return;
        this.$OzBufferAheadPriorityStrategy3.addSubscriptions(
          a.addEventListener(
            "buffer_updated",
            b("oz-player-polaris/shims/polarisOzThrottle")(
              this.$OzBufferAheadPriorityStrategy4,
              i
            )
          )
        );
      };
      d.isActive = function () {
        return !0;
      };
      d.getPriority = function () {
        var a = this.$OzBufferAheadPriorityStrategy2;
        if (!a) return 1;
        var b = this.$OzBufferAheadPriorityStrategy1.getCurrentTime();
        a = a.getBufferedRanges();
        b = g(b, a);
        return b >= h ? 0 : 1;
      };
      d.destroy = function () {
        this.$OzBufferAheadPriorityStrategy3.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferAheadTargetStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !0;
      };
      b.getBufferTarget = function () {
        return this.$1.getNumber("buffer_ahead_target");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferTargetBoundedStreamSegmentsCountStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isActive = function (a) {
        return !a.isPlaying();
      };
      b.getSegmentsCount = function (a, b, c) {
        a = a.getCurrentTime();
        var d = this.$1.computeBufferTarget(),
          e = 1,
          f = b;
        b = b.getTimeRange().startTime;
        while (f !== null && b < d + a) {
          f = c.getSegmentAfter(f);
          if (!f) break;
          b = f.getTimeRange().startTime;
          e++;
        }
        return e;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferTargetCalculator",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = 0), (this.$2 = a);
      }
      var b = a.prototype;
      b.computeBufferTarget = function () {
        for (
          var a = this.$2,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
          if (d.isActive()) {
            d = d.getBufferTarget();
            this.$1 = d;
            return d;
          }
        }
        return this.$1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferingDetectorStates",
  ["oz-player-polaris/utils/PolarisOzBufferingUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
        function a(a, b) {
          (this.$1 = a), (this.$2 = b);
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === "pause" || b.paused) return new i(this.$1);
          a =
            this.$2 instanceof j
              ? this.$1.getNumber(
                  "in_play_buffer_overflow_target",
                  d("oz-player-polaris/utils/PolarisOzBufferingUtils")
                    .BUFFER_OVERFLOW_THRESHOLD
                )
              : this.$1.getNumber(
                  "start_buffer_underflow_target",
                  d("oz-player-polaris/utils/PolarisOzBufferingUtils")
                    .BUFFER_OVERFLOW_THRESHOLD
                );
          return d(
            "oz-player-polaris/utils/PolarisOzBufferingUtils"
          ).hasEnoughBuffer(b, a, c, this.$1)
            ? new j(this.$1)
            : this;
        };
        return a;
      })(),
      i = (function () {
        function a(a) {
          this.$1 = a;
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === "play" || a.type === "playing" || !b.paused) {
            a = this.$1.getNumber(
              "start_buffer_underflow_target",
              d("oz-player-polaris/utils/PolarisOzBufferingUtils")
                .BUFFER_UNDERFLOW_THRESHOLD
            );
            return d(
              "oz-player-polaris/utils/PolarisOzBufferingUtils"
            ).hasEnoughBuffer(b, a, c, this.$1)
              ? new j(this.$1)
              : new h(this.$1, this);
          }
          return this;
        };
        return a;
      })(),
      j = (function () {
        function a(a) {
          this.$1 = a;
        }
        var b = a.prototype;
        b.handleEvent = function (a, b, c) {
          if (a.type === "pause" || b.paused) return new i(this.$1);
          var e = this.$1.getNumber(
            "in_play_buffer_underflow_target",
            d("oz-player-polaris/utils/PolarisOzBufferingUtils")
              .BUFFER_UNDERFLOW_THRESHOLD
          );
          return (this.$1.getBool("buffer_when_waiting", !1) &&
            a.type === "waiting") ||
            !d(
              "oz-player-polaris/utils/PolarisOzBufferingUtils"
            ).hasEnoughBuffer(b, e, c, this.$1)
            ? new h(this.$1, this)
            : this;
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
  "oz-player-polaris/utils/PolarisOzDomEventCapturer",
  ["oz-player-polaris/shims/PolarisOzDOMEventListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$2 = new Map()), (this.$1 = a);
      }
      var b = a.prototype;
      b.capture = function (a, b) {
        var c = this,
          e = this.$1.parentNode;
        return !e
          ? { remove: function () {} }
          : d(
              "oz-player-polaris/shims/PolarisOzDOMEventListener"
            ).captureDOMEvent(e, a, function (a) {
              if (a.target !== c.$1) return;
              var d = b(a);
              d && c.$3(a);
            });
      };
      b.dispatchIfSuppressed = function (a) {
        var b = this.$2.get(a);
        b && this.$1.dispatchEvent(b);
        this.$2["delete"](a);
      };
      b.$3 = function (a) {
        d("oz-player-polaris/shims/PolarisOzDOMEventListener").suppressDOMEvent(
          a
        ),
          this.$2.set(a.type, a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "oz-player-polaris/strategies/PolarisOzBufferingDetector",
  [
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzThrottle",
    "oz-player-polaris/strategies/PolarisOzBufferingDetectorStates",
    "oz-player-polaris/utils/PolarisOzBufferingUtils",
    "oz-player-polaris/utils/PolarisOzDomEventCapturer",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/shims/PolarisOzDOMEventListener"
      ).listenDOMEvent,
      h = b(
        "oz-player-polaris/utils/PolarisOzBufferingUtils"
      ).BUFFER_UNDERFLOW_THRESHOLD,
      i = b("oz-player-polaris/utils/PolarisOzBufferingUtils").hasEnoughBuffer,
      j = b(
        "oz-player-polaris/strategies/PolarisOzBufferingDetectorStates"
      ).OzVideoBufferingState,
      k = b(
        "oz-player-polaris/strategies/PolarisOzBufferingDetectorStates"
      ).OzVideoPausedState,
      l = b(
        "oz-player-polaris/strategies/PolarisOzBufferingDetectorStates"
      ).OzVideoPlayingState,
      m = 150;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e) {
        var f;
        f = a.call(this) || this;
        f.$OzBufferingDetector3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        f.$OzBufferingDetector7 = function (a) {
          f.$OzBufferingDetector9(a);
        };
        f.$OzBufferingDetector8 = function (a) {
          a = f.$OzBufferingDetector9(a) instanceof j;
          return f.$OzBufferingDetector5.getBool(
            "suppress_playing_event_while_buffering",
            !1
          )
            ? a
            : !1;
        };
        f.$OzBufferingDetector2 = c;
        f.$OzBufferingDetector5 = d;
        f.$OzBufferingDetector6 = e;
        f.$OzBufferingDetector2.paused
          ? (f.$OzBufferingDetector1 = new k(f.$OzBufferingDetector5))
          : (f.$OzBufferingDetector1 = i(
              f.$OzBufferingDetector2,
              f.$OzBufferingDetector5.getNumber(
                "in_play_buffer_underflow_target",
                h
              ),
              f.$OzBufferingDetector6(),
              f.$OzBufferingDetector5
            )
              ? new l(f.$OzBufferingDetector5)
              : new j(f.$OzBufferingDetector5, null));
        f.$OzBufferingDetector4 = new (b(
          "oz-player-polaris/utils/PolarisOzDomEventCapturer"
        ))(f.$OzBufferingDetector2);
        f.$OzBufferingDetector3.addSubscriptions(
          g(f.$OzBufferingDetector2, "pause", f.$OzBufferingDetector7),
          g(f.$OzBufferingDetector2, "play", f.$OzBufferingDetector7),
          f.$OzBufferingDetector4.capture("playing", f.$OzBufferingDetector8),
          g(
            f.$OzBufferingDetector2,
            "progress",
            b("oz-player-polaris/shims/polarisOzThrottle")(
              f.$OzBufferingDetector7,
              m
            )
          ),
          g(
            f.$OzBufferingDetector2,
            "timeupdate",
            b("oz-player-polaris/shims/polarisOzThrottle")(
              f.$OzBufferingDetector7,
              m
            )
          ),
          g(f.$OzBufferingDetector2, "seeked", f.$OzBufferingDetector7),
          g(f.$OzBufferingDetector2, "seeking", f.$OzBufferingDetector7),
          g(f.$OzBufferingDetector2, "waiting", f.$OzBufferingDetector7)
        );
        return f;
      }
      var d = c.prototype;
      d.$OzBufferingDetector9 = function (a) {
        a = this.$OzBufferingDetector1.handleEvent(
          a,
          this.$OzBufferingDetector2,
          this.$OzBufferingDetector6()
        );
        var b = this.$OzBufferingDetector1;
        this.$OzBufferingDetector1 = a;
        var c = a instanceof j,
          d = b instanceof j;
        if (a === b) return a;
        if (c) {
          c = b instanceof l ? "in_play" : "start/unpause";
          this.emit("enter_buffering", c);
        } else d && this.emit("leave_buffering");
        a instanceof l &&
          this.$OzBufferingDetector4.dispatchIfSuppressed("playing");
        return a;
      };
      d.destroy = function () {
        this.$OzBufferingDetector3.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzLiveheadDeltaCatchupStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isEnabled = function (a, b) {
        return (
          (!this.$1.getBool("live_catch_up_only_when_paused") || a.paused) &&
          typeof b.getMinimumUpdatePeriod() === "number"
        );
      };
      b.computeNewPlayheadPosition = function (a, b) {
        a = a.currentTime;
        b = b.getVideoRepresentations()[0];
        if (!b) return null;
        b = b.getTimeRanges();
        if (b.length === 0) return null;
        b = b[b.length - 1].endTime;
        return b - a > this.$1.getNumber("live_catch_up_fall_behind_threshold")
          ? b - this.$1.getNumber("live_catch_up_live_head_delta")
          : null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzPausedStreamSegmentsCountStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.isActive = function () {
        return !this.$1.isPlaying();
      };
      b.getSegmentsCount = function (a, b, c) {
        return this.$2.getNumber("paused_stream_segments_count");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzPlayheadAtInterruptionDetector",
  [
    "oz-player-polaris/shims/PolarisOzDOMEventListener",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/shims/PolarisOzDOMEventListener"
      ).listenDOMEvent,
      h = 1;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzPlayheadAtInterruptionDetector2 = null;
        d.$OzPlayheadAtInterruptionDetector3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzPlayheadAtInterruptionDetector1 = c;
        d.$OzPlayheadAtInterruptionDetector3.addSubscriptions(
          g(
            d.$OzPlayheadAtInterruptionDetector1,
            "waiting",
            d.$OzPlayheadAtInterruptionDetector4.bind(
              babelHelpers.assertThisInitialized(d)
            )
          )
        );
        return d;
      }
      var d = c.prototype;
      d.notifyStreamInterrupted = function (a) {
        (this.$OzPlayheadAtInterruptionDetector2 = a),
          this.$OzPlayheadAtInterruptionDetector4();
      };
      d.notifyStreamResumed = function () {
        this.$OzPlayheadAtInterruptionDetector2 = null;
      };
      d.$OzPlayheadAtInterruptionDetector4 = function () {
        if (this.$OzPlayheadAtInterruptionDetector2 != null) {
          var a = this.$OzPlayheadAtInterruptionDetector2 || 0;
          Math.abs(this.$OzPlayheadAtInterruptionDetector1.currentTime - a) <
            h && this.emit("playheadAtInterruption", a);
        }
      };
      d.destroy = function () {
        this.$OzPlayheadAtInterruptionDetector3.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzPlayingStatePriorityStrategy",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzPlayingStatePriorityStrategy1 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzPlayingStatePriorityStrategy3 = function () {
          d.emit("state_changed");
        };
        d.$OzPlayingStatePriorityStrategy2 = c;
        d.$OzPlayingStatePriorityStrategy1.addSubscriptions(
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            "playing",
            d.$OzPlayingStatePriorityStrategy3
          ),
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            "play",
            d.$OzPlayingStatePriorityStrategy3
          ),
          d.$OzPlayingStatePriorityStrategy2.addEventListener(
            "pause",
            d.$OzPlayingStatePriorityStrategy3
          )
        );
        return d;
      }
      var d = c.prototype;
      d.isActive = function () {
        return !0;
      };
      d.getName = function () {
        return "playing_state";
      };
      d.setSourceBufferState = function (a) {};
      d.getPriority = function () {
        return this.$OzPlayingStatePriorityStrategy2.isPlaying() ? 1 : 0;
      };
      d.destroy = function () {
        this.$OzPlayingStatePriorityStrategy1.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzPriorityCalculator",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$OzPriorityCalculator2 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$OzPriorityCalculator1 = c;
        (c = d.$OzPriorityCalculator2).addSubscriptions.apply(
          c,
          d.$OzPriorityCalculator1.map(function (a) {
            return a.addListener("state_changed", function (b) {
              d.emit("state_changed", d.compute(), a.getName());
            });
          })
        );
        return d;
      }
      var d = c.prototype;
      d.setSourceBufferState = function (a) {
        this.$OzPriorityCalculator1.forEach(function (b) {
          return b.setSourceBufferState(a);
        }),
          this.emit("state_changed", this.compute(), "source_buffer");
      };
      d.compute = function () {
        return this.$OzPriorityCalculator1.reduce(function (a, b) {
          b = b.isActive() ? b.getPriority() : 0;
          return a + b;
        }, 0);
      };
      d.destroy = function () {
        this.$OzPriorityCalculator2.release();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzStartupBufferTargetStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.isActive = function () {
        var a = this.$1.isPlaying();
        a && (this.$2 = !0);
        return !this.$2;
      };
      b.getBufferTarget = function () {
        return this.$3.getNumber("pre_start_buffer_ahead_target");
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/strategies/PolarisOzStreamSegmentsCountCalculator",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.computeMin = function (a, b, c) {
        var d = Number.MAX_VALUE;
        for (
          var e = this.$1,
            f = Array.isArray(e),
            h = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (f) {
            if (h >= e.length) break;
            i = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          i.isActive(a) && (d = Math.min(d, i.getSegmentsCount(a, b, c)));
        }
        return d === Number.MAX_VALUE ? g : Math.max(d, g);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/streams/PolarisOzEndOfStreamWatcher",
  [
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/polarisOzvariant",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(b, c) {
        var d;
        d = a.call(this) || this;
        d.$OzEndOfStreamWatcher1 = new Map();
        d.$OzEndOfStreamWatcher2 = b;
        d.$OzEndOfStreamWatcher3 = c;
        return d;
      }
      var d = c.prototype;
      d.registerMediaStream = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) &&
          b("oz-player-polaris/shims/polarisOzvariant")(0, 5191),
          this.$OzEndOfStreamWatcher1.set(a, !1);
      };
      d.notifyRepresentationSwitched = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) ||
          b("oz-player-polaris/shims/polarisOzvariant")(0, 5192),
          this.$OzEndOfStreamWatcher4();
      };
      d.notifyMediaStreamEnded = function (a) {
        this.$OzEndOfStreamWatcher1.has(a) ||
          b("oz-player-polaris/shims/polarisOzvariant")(0, 5192),
          this.$OzEndOfStreamWatcher1.set(a, !0),
          this.$OzEndOfStreamWatcher4();
      };
      d.$OzEndOfStreamWatcher4 = function () {
        var a = this.$OzEndOfStreamWatcher2.getMediaSource();
        (this.$OzEndOfStreamWatcher3.getBool(
          "allow_queueing_end_of_stream_when_update"
        ) ||
          a.readyState === "open") &&
          this.$OzEndOfStreamWatcher5() &&
          (this.$OzEndOfStreamWatcher2.notifyEndOfStream(),
          this.emit("streamEnd"));
      };
      d.$OzEndOfStreamWatcher5 = function () {
        if (this.$OzEndOfStreamWatcher1.size === 0) return !1;
        for (
          var a = this.$OzEndOfStreamWatcher1.values(),
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
          if (!d) return !1;
        }
        return !0;
      };
      d.destroy = function () {
        this.$OzEndOfStreamWatcher1.clear();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/streams/PolarisOzHandleUserRepresentationSwitch",
  ["oz-player-polaris/shims/PolarisOzSubscriptionsHandler"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c, d, e, f) {
        var g = this;
        this.$4 = null;
        this.$5 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$1 = a;
        this.$2 = c;
        this.$3 = d;
        this.$6 = e;
        f.then(function (a) {
          g.$4 = a;
        });
        this.$5.addSubscriptions(
          e.addListener("switchRepresentation", this.$7.bind(this))
        );
      }
      var c = a.prototype;
      c.cleanup = function () {
        this.$5.release(), this.$5.engage();
      };
      c.$7 = function (a, b) {
        if (a !== "user") return;
        a = this.$6.getRepresentationIDAtTime(this.$2.getCurrentTime());
        var c;
        if (this.$4) {
          for (var d = 0; d < this.$3.length; d++)
            this.$3[d].getID() === a && (c = this.$3[d]);
          if (c && b && c.getBandwidth() < b.getBandwidth()) {
            a = c.getSegmentByTime(this.$2.getCurrentTime());
            a &&
              this.$4 &&
              this.$4.clearRange(
                this.$2.getCurrentTime(),
                this.$2.getDuration()
              );
          }
        }
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzReadableStreamDataReader",
  [
    "oz-player-polaris/networks/PolarisOzTransformStream",
    "oz-player-polaris/utils/polarisOzConcatArrayBuffer",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(b) {
        var c;
        c = a.call(this) || this;
        c.$OzReadableStreamDataReader1 = new ArrayBuffer(0);
        c.$OzReadableStreamDataReader2 = b;
        return c;
      }
      var d = c.prototype;
      d.onDataWritten = function (a) {
        this.$OzReadableStreamDataReader1 = b(
          "oz-player-polaris/utils/polarisOzConcatArrayBuffer"
        )(this.$OzReadableStreamDataReader1, a.buffer);
      };
      d.onClose = function () {
        this.$OzReadableStreamDataReader2(this.$OzReadableStreamDataReader1);
      };
      return c;
    })(b("oz-player-polaris/networks/PolarisOzTransformStream"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/default/polarisOzPerformanceNowDefault",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    performance.now != null || g(0, 23149);
    a = function () {
      return performance.now();
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/shims/polarisOzPerformanceNow",
  ["oz-player-polaris/shims/default/polarisOzPerformanceNowDefault"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b(
      "oz-player-polaris/shims/default/polarisOzPerformanceNowDefault"
    );
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzStreamingTask",
  [
    "Promise",
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/polarisOzPerformanceNow",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzNetworkRequestLoggingUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      h = b(
        "oz-player-polaris/utils/PolarisOzNetworkRequestLoggingUtils"
      ).setFetchStreamLoggingAttributes;
    a = (function () {
      function a(a, c) {
        (this.$3 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
        )),
          (this.$5 = !1),
          (this.$1 = this.$2 =
            new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
              b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
            )),
          (this.$6 = b("oz-player-polaris/shims/polarisOzPerformanceNow")()),
          (this.$7 = c),
          (this.$8 = a);
      }
      var c = a.prototype;
      c.run = function () {
        var a = this.$3.getPromise(),
          c = this.$7;
        if (c) {
          var d =
            b("oz-player-polaris/shims/polarisOzPerformanceNow")() - this.$6;
          g(
            a,
            c,
            "streaming_task",
            function () {},
            function (a) {
              a.setTimeToRequestSent(Math.floor(d));
            }
          )["catch"](function () {});
        }
        this.$2.resolve();
        return a;
      };
      c.cancel = function () {
        this.$3.getPromise()["catch"](function () {}),
          this.$3.reject(
            new (b("oz-player-polaris/utils/PolarisOzError"))({
              type: "OZ_STREAMING_TASK",
              description: "task cancelled",
              extra: { code: "OZ_ST-1" },
            })
          ),
          (this.$5 = !0);
      };
      c.finish = function () {
        this.$3.resolve();
      };
      c.isCancelled = function () {
        return this.$5;
      };
      c.addStream = function (a, c, d) {
        var e = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
          b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
        );
        this.$9({
          pausableStreamPromise: b("Promise").resolve({
            pausableStream: a,
            loggingPayloads: d,
          }),
          changeStatusDeferred: e,
          createStreamDeferred: new (b(
            "oz-player-polaris/shims/PolarisOzDeferred"
          ))(b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")),
          loggerProviderWithStreamContext: c,
          loggingPayloads: d,
        });
        return {
          getStream: function () {
            return a.getStream();
          },
          cancel: function () {
            return a.pauseStream();
          },
          getStatusChangePromise: function () {
            return e.getPromise();
          },
        };
      };
      c.addStreamDeferred = function (a, c) {
        var d = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          ),
          e = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          );
        this.$9({
          pausableStreamPromise: a,
          changeStatusDeferred: d,
          createStreamDeferred: e,
          loggerProviderWithStreamContext: c,
        });
        var f = function () {
          return e.getPromise();
        };
        return {
          genStream: f,
          cancel: function () {
            f().then(function (a) {
              return a.pauseStream();
            });
          },
          getStatusChangePromise: function () {
            return d.getPromise();
          },
        };
      };
      c.$9 = function (a) {
        var c = this,
          d = a.changeStatusDeferred,
          e = a.createStreamDeferred,
          f = a.loggerProviderWithStreamContext,
          i = a.pausableStreamPromise,
          j = a.loggingPayloads;
        a = this.$1.getPromise();
        var k = b("oz-player-polaris/shims/polarisOzPerformanceNow")(),
          l = (this.$1 = new (b("oz-player-polaris/shims/PolarisOzDeferred"))(
            b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
          ));
        a.then(function () {
          return i;
        })
          .then(function (a) {
            if (a) {
              var d = a.pausableStream;
              a.loggingPayloads && (j = a.loggingPayloads);
              e.resolve(d.getStream());
              c.$4 = d;
              var i = b("oz-player-polaris/shims/polarisOzPerformanceNow")();
              a = c.$10(d.startStream());
              f &&
                g(
                  a,
                  f,
                  "fetch_stream",
                  function () {},
                  function (a) {
                    j &&
                      h(
                        a,
                        j.getRequestUrl(),
                        j.isPrefetch(),
                        j.segments,
                        i - k,
                        d.getBytesStreamed(),
                        j.getResponse()
                      );
                  }
                );
              return a;
            }
            return null;
          })
          .then(function (a) {
            (c.$4 = null), l.resolve(), d.resolve(a || "cancelled");
          })
          ["catch"](function (a) {
            (c.$4 = null), c.$3.reject(a), d.reject(a);
          });
      };
      c.$10 = function (a) {
        return a.then(function (a) {
          a = a.statusPromise;
          return a.then(function (a) {
            return a === "stream_done" ? "done" : "error";
          });
        });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/networks/PolarisOzStreamingTaskStateManager",
  [
    "Promise",
    "oz-player-polaris/networks/PolarisOzStreamingTask",
    "oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider",
    "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, c, d, e) {
        var f = this;
        this.$3 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        this.$4 = 0;
        this.$9 = !1;
        this.$5 = a;
        this.$1 = c;
        this.$6 = b(
          "oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider"
        ).getQueue(this.$5);
        this.$7 = d;
        this.$8 = e;
        this.$3.addSubscriptions(
          this.$1.addListener("state_changed", function (a, b) {
            f.$10(a, b), f.$2 && f.$6.updatePriority(f.$2, f.$4);
          })
        );
      }
      var c = a.prototype;
      c.startStream = function (a) {
        var b = a.networkManager,
          c = a.segmentsLoggerProvider;
        a = a.streamableSegments;
        var d = this.$11(c),
          e = this.$12();
        b = b.createPausableStream(a, e, c);
        a = b.loggingPayloads;
        e = b.pausableStream;
        this.$9 = !0;
        b = d.addStream(e, c, a);
        return {
          getStream: b.getStream,
          cancel: b.cancel,
          getStatusChangePromise: this.$13(b.getStatusChangePromise),
        };
      };
      c.$12 = function () {
        var a = [];
        a.push(
          b(
            "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter"
          )(this.$5)
        );
        return a;
      };
      c.startStreamDeferred = function (a) {
        var c = a.networkManager,
          d = a.segmentsLoggerProvider,
          e = a.segmentsPromise;
        a = this.$11(d);
        var f = this.$12(),
          g = new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
            function (a, b) {
              e.then(function (b) {
                b.length > 0 ? a(c.createPausableStream(b, f, d)) : a(null);
              })["catch"](function (a) {
                return b(a);
              });
            }
          );
        this.$9 = !0;
        a = a.addStreamDeferred(g, d);
        return {
          genStream: a.genStream,
          cancel: a.cancel,
          getStatusChangePromise: this.$13(a.getStatusChangePromise),
        };
      };
      c.$11 = function (a) {
        a = this.$2;
        this.$10(this.$1.compute(), "start_stream");
        !a || a.isCancelled()
          ? ((a = this.$2 =
              new (b("oz-player-polaris/networks/PolarisOzStreamingTask"))(
                this.$8,
                this.$7
              )),
            this.$6.enqueue(a, this.$4)["catch"](function () {}))
          : this.$6.updatePriority(a, this.$4);
        return a;
      };
      c.$13 = function (a) {
        var c = this;
        return function () {
          return a()
            .then(function (a) {
              c.$14();
              return a;
            })
            ["catch"](function (a) {
              c.$14();
              return b("Promise").reject(a);
            });
        };
      };
      c.finishTaskIfNoOngoingStream = function () {
        this.$9 || this.$15();
      };
      c.destroy = function () {
        this.$3.release();
        var a = this.$2;
        this.$2 = null;
        a && this.$6.remove(a);
      };
      c.$14 = function () {
        (this.$9 = !1),
          this.$10(this.$1.compute(), "end_stream"),
          this.$4 <
            b("oz-player-polaris/networks/PolarisOzStreamingTaskQueueProvider")
              .OZ_QUEUE_MAX_PRIORITY && this.$15();
      };
      c.$15 = function () {
        this.$2 && (this.$2.finish(), (this.$2 = null));
      };
      c.$10 = function (a, b) {
        if (a === this.$4) return;
        this.$4 = a;
        this.$7 &&
          this.$7
            .getOperationLogger("priority_changed")
            .setPriorityFloat(this.$4)
            .setInitiator(b)
            .log();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/strategies/PolarisOzStreamLengthStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      getStreamingSegments: function (a, b, c, d, e) {
        var f = a.getNumber("segments_to_stream_under_playhead_threshold");
        a = a.getNumber("low_segment_stream_playhead_threshold");
        f > 0 && d.getCurrentTime() < a && (b = f);
        d = [];
        d.push(e);
        for (a = 1; a < b; a++) {
          f = c.getSegmentAfter(e);
          if (!f) break;
          e = f;
          d.push(e);
        }
        return d;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/streams/PolarisOzMediaStreamLoopDriver",
  [
    "oz-player-polaris/shims/polarisOzClearTimeout",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions");
    a = (function () {
      function a(a) {
        var b = this;
        this.$2 = null;
        this.$3 = !1;
        this.$4 = function () {
          b.$5();
          if (b.$3) return;
          var a = b.$1.execute(),
            c = b.$1.getLoopInterval();
          c &&
            (b.$2 = g(function () {
              b.$4();
            }, c));
          a &&
            a.then(b.$4)["catch"](function (a) {
              b.$5();
              a = b.$1.handleError(a);
              a ? (b.$2 = g(b.$4, a)) : (b.$3 = !0);
            });
        };
        this.$1 = a;
      }
      var c = a.prototype;
      c.start = function () {
        if (this.$3) throw new Error("restart is not implemented");
        this.$4();
      };
      c.stop = function () {
        this.$5(), (this.$3 = !0);
      };
      c.$5 = function () {
        this.$2 &&
          (b("oz-player-polaris/shims/polarisOzClearTimeout")(this.$2),
          (this.$2 = null));
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzRangeUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      getRangeForTime: function (a, b) {
        b = b.filter(function (b) {
          return b.startTime <= a && b.endTime >= a;
        });
        return b != null && b.length > 0 ? b[0] : null;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "oz-player-polaris/streams/PolarisOzSegmentLocator",
  [
    "oz-player-polaris/utils/PolarisOzNumericalRangeUtil",
    "oz-player-polaris/utils/PolarisOzRangeUtils",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player-polaris/utils/PolarisOzRangeUtils").getRangeForTime;
    a = {
      getEndingSequenceNumber: function (a) {
        a = a.getEndingSegment();
        return a != null && a.getSequenceNumber() != null
          ? a.getSequenceNumber() || 0
          : 0;
      },
      getSegment: function (a, c, d, e, f, h, i, j) {
        var k = a.getPredictedSegmentAfter(h);
        if (k && c.isPlaying()) return k;
        k = c.getCurrentTime();
        k = e ? g(k, e.getBufferedRanges()) : null;
        e = h ? h.getTimeRange().endTime : 0;
        if (
          i.getBool("use_stream_end_time_in_segment_locator") &&
          k &&
          k.endTime === j
        )
          return null;
        h = c.getCurrentTime() || 0;
        e ? (h = e) : k && (h = k.endTime);
        j = h - c.getCurrentTime();
        if (i.getBool("compute_buffer_ahead_with_timeline_gaps")) {
          e = f.getTimeRanges();
          j = new (b(
            "oz-player-polaris/utils/PolarisOzNumericalRangeUtil"
          ))().findDiffCoveredByRanges(
            c.getCurrentTime(),
            h,
            e.map(function (a) {
              return { rangeStart: a.startTime, rangeEnd: a.endTime };
            })
          );
        }
        if (j > d) return null;
        k = a.getSegment(0);
        i.getNumber("auto_seek_playhead_slack") === 0 &&
          k &&
          k.getTimeRange().startTime > h &&
          (h = k.getTimeRange().startTime);
        return a.getSegmentByTime(h);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/PolarisOzTaggedTimeRanges",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = a
            ? a
            : function (a, b) {
                return a === b;
              });
      }
      var b = a.prototype;
      b.add = function (a, b, c) {
        if (b < a) return;
        if (b === a) return;
        if (this.$1.length === 0) {
          this.$1.push({ startTime: a, endTime: b, tag: c });
          return;
        }
        var d = 0,
          e = 0;
        for (var f = 0; f < this.$1.length; f++) {
          if (a === this.$1[f].startTime && b === this.$1[f].endTime) {
            d = f;
            e = f + 1;
            break;
          }
          a >= this.$1[f].startTime && (d = f + 1);
          b <= this.$1[f].endTime && (e = f);
          if (b < this.$1[f].startTime) break;
        }
        this.$1.splice(d, e - d, { startTime: a, endTime: b, tag: c });
        this.$5(d);
      };
      b.$5 = function (a) {
        var b = this.$1[a],
          c = null;
        a !== 0 && (c = this.$1[a - 1]);
        c !== null &&
          (this.$4(c.tag, b.tag)
            ? c.endTime >= b.startTime &&
              (this.$1.splice(a - 1, 2, {
                startTime: c.startTime,
                endTime: Math.max(b.endTime, c.endTime),
                tag: b.tag,
              }),
              a--)
            : (c.endTime > b.startTime && c.startTime === b.startTime
                ? (this.$1.splice(a - 1, 1), a--)
                : c.endTime > b.startTime &&
                  this.$1.splice(a - 1, 1, {
                    startTime: c.startTime,
                    endTime: b.startTime,
                    tag: c.tag,
                  }),
              c.endTime > b.endTime &&
                this.$1.splice(a + 1, 0, {
                  startTime: b.endTime,
                  endTime: c.endTime,
                  tag: c.tag,
                })));
        c = null;
        a !== this.$1.length - 1 && (c = this.$1[a + 1]);
        c &&
          (this.$4(c.tag, b.tag)
            ? c.startTime <= b.endTime &&
              this.$1.splice(a, 2, {
                startTime: b.startTime,
                endTime: Math.max(c.endTime, b.endTime),
                tag: b.tag,
              })
            : c.startTime <= b.endTime &&
              (c.endTime < b.endTime
                ? (this.$1.splice(a, 1, {
                    startTime: b.startTime,
                    endTime: c.startTime,
                    tag: b.tag,
                  }),
                  this.$1.push({
                    startTime: c.endTime,
                    endTime: b.endTime,
                    tag: b.tag,
                  }))
                : this.$1.splice(a + 1, 1, {
                    startTime: b.endTime,
                    endTime: c.endTime,
                    tag: c.tag,
                  })));
      };
      b.get = function (a) {
        var b = a >= this.$3 ? this.$2 : 0,
          c = null;
        for (b = b; b < this.$1.length; b++)
          if (this.$1[b].startTime <= a && a < this.$1[b].endTime) {
            c = b;
            break;
          }
        this.$2 = c === null ? 0 : c;
        this.$3 = a;
        return c === null ? null : this.$1[c].tag;
      };
      b.getLength = function () {
        return this.$1.length;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "oz-player-polaris/streams/PolarisOzMediaStream",
  [
    "oz-player-polaris/networks/PolarisOzNetworkManager",
    "oz-player-polaris/networks/PolarisOzReadableStreamDataReader",
    "oz-player-polaris/networks/PolarisOzStreamingTaskStateManager",
    "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter",
    "oz-player-polaris/shims/PolarisOzDeferred",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/strategies/PolarisOzStreamLengthStrategy",
    "oz-player-polaris/streams/PolarisOzMediaStreamLoopDriver",
    "oz-player-polaris/streams/PolarisOzSegmentLocator",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
    "oz-player-polaris/utils/PolarisOzMimeUtil",
    "oz-player-polaris/utils/PolarisOzTaggedTimeRanges",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("oz-player-polaris/utils/PolarisOzMimeUtil").getMimeType,
      h = b("oz-player-polaris/shims/polarisOzSetTimeoutAcrossTransitions"),
      i = 1e3,
      j = 0.2;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e, f, h, i, j, k, l, m, n, o, p, q) {
        var r;
        r = a.call(this) || this;
        r.$OzMediaStream2 = 0;
        r.$OzMediaStream3 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        r.$OzMediaStream11 = null;
        r.$OzMediaStream13 = !1;
        r.$OzMediaStream14 = null;
        r.$OzMediaStream15 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        r.$OzMediaStream17 = [];
        r.$OzMediaStream21 = 0;
        r.$OzMediaStream28 = !0;
        r.$OzMediaStream30 = !1;
        r.$OzMediaStream31 = null;
        r.$OzMediaStream32 = new (b(
          "oz-player-polaris/utils/PolarisOzErrorEmitter"
        ))();
        r.$OzMediaStream1 = c;
        r.$OzMediaStream4 = d;
        r.$OzMediaStream4.then(function (a) {
          (r.$OzMediaStream5 = a),
            r.$OzMediaStream14 && r.$OzMediaStream14.setSourceBuffer(a),
            r.$OzMediaStream26.setSourceBufferState(a.getSourceBufferState()),
            r.$OzMediaStream34();
        });
        r.$OzMediaStream19 = e;
        r.$OzMediaStream10 = f;
        r.$OzMediaStream6 = h;
        r.$OzMediaStream12 = i;
        r.$OzMediaStream12.registerMediaStream(
          babelHelpers.assertThisInitialized(r)
        );
        r.$OzMediaStream25 = j;
        r.$OzMediaStream26 = k;
        r.$OzMediaStream27 = l;
        r.$OzMediaStream14 = m;
        r.$OzMediaStream16 = p.cloneContext();
        r.$OzMediaStream24 = new (b(
          "oz-player-polaris/utils/PolarisOzTaggedTimeRanges"
        ))(function (a, b) {
          return a.id === b.id;
        });
        r.$OzMediaStream15.addSubscriptions(
          r.$OzMediaStream6.addEventListener("seeking", function () {
            r.$OzMediaStream1.getBool("fix_seek_performance")
              ? r.$OzMediaStream35()
              : ((r.$OzMediaStream8 = null),
                (r.$OzMediaStream30 = !1),
                r.$OzMediaStream23 && r.$OzMediaStream23.resolve());
          })
        );
        r.$OzMediaStream20 = g(o.getMimeCodecs());
        r.$OzMediaStream29 = new (b(
          "oz-player-polaris/networks/PolarisOzStreamingTaskStateManager"
        ))(
          r.$OzMediaStream20,
          r.$OzMediaStream26,
          r.$OzMediaStream16,
          r.$OzMediaStream1
        );
        r.$OzMediaStream22 = new (b(
          "oz-player-polaris/streams/PolarisOzMediaStreamLoopDriver"
        ))(babelHelpers.assertThisInitialized(r));
        n === o.getID() ? (r.$OzMediaStream7 = o) : r.$OzMediaStream36(o);
        return r;
      }
      var d = c.prototype;
      d.start = function () {
        this.$OzMediaStream22.start();
      };
      d.getCurrentRepresentation = function () {
        return this.$OzMediaStream7;
      };
      d.switchRepresentation = function (a) {
        this.$OzMediaStream36(a, "user");
      };
      d.onError = function (a) {
        return this.$OzMediaStream32.onError(a);
      };
      d.updateRunTimeConfigs = function (a) {
        a = a.videoStreamDataHandler;
        a !== void 0 && (this.$OzMediaStream33 = a);
      };
      d.$OzMediaStream36 = function (a, c) {
        var d = this;
        c === void 0 && (c = "internal");
        var e = function () {
          var a = d.$OzMediaStream1.getBool(
            "clear_buffer_when_switch_representation_initiator_is_user"
          );
          return a ? c === "user" : !0;
        };
        e() && (this.$OzMediaStream8 = null);
        e = this.$OzMediaStream16
          .cloneContext()
          .setType(this.$OzMediaStream20 + ";init");
        var f = this.$OzMediaStream10.request(
            [a.getInitSegment()],
            [
              b(
                "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter"
              )(this.$OzMediaStream20),
            ],
            e,
            "ENABLE_CACHE"
          ),
          g = e
            .getOperationLogger("stream_switch")
            .setPreviousRepresentationID(
              this.$OzMediaStream7 ? this.$OzMediaStream7.getID() : null
            )
            .setRepresentationID(a.getID())
            .setReason(
              this.$OzMediaStream14 &&
                this.$OzMediaStream14.getLastEvaluationReason()
            )
            .start();
        this.$OzMediaStream7 = a;
        this.emit("switchRepresentation", c, a);
        this.$OzMediaStream37(
          f.getStream(),
          function () {
            g.log(),
              d.emit("initAppended"),
              d.$OzMediaStream12.notifyRepresentationSwitched(d);
          },
          function (a) {
            g.setError(a).log(),
              d.$OzMediaStream1.getBool("fallback_on_append_error") &&
                a instanceof b("oz-player-polaris/utils/PolarisOzError") &&
                a.getType() !== "OZ_NETWORK" &&
                d.$OzMediaStream32.emitError(a);
          },
          e.cloneContext(),
          0
        );
      };
      d.getLoopInterval = function () {
        return this.$OzMediaStream21;
      };
      d.execute = function () {
        var a = this.$OzMediaStream38();
        if (a) {
          var c = (this.$OzMediaStream23 = new (b(
            "oz-player-polaris/shims/PolarisOzDeferred"
          ))(b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")));
          a.then(function () {
            return c.resolve();
          })["catch"](function (a) {
            return c.reject(a);
          });
          return c.getPromise();
        }
        return null;
      };
      d.$OzMediaStream39 = function (a) {
        a === void 0 && (a = null);
        if (
          this.$OzMediaStream14 &&
          this.$OzMediaStream28 &&
          (this.$OzMediaStream1.getBool("enable_abr_for_first_request") ||
            this.$OzMediaStream13 ||
            this.$OzMediaStream19 > 0)
        ) {
          a = this.$OzMediaStream14.getBestRepresentation(a);
          if (this.$OzMediaStream7 !== a) return a;
        }
        return null;
      };
      d.$OzMediaStream40 = function (a) {
        var c = this.$OzMediaStream5
            ? this.$OzMediaStream5.getSourceBufferState()
            : null,
          d =
            this.$OzMediaStream19 > 0
              ? this.$OzMediaStream7.getSegment(this.$OzMediaStream19 - 1)
              : null,
          e = null;
        a && (e = this.$OzMediaStream7.getCustomFieldFirstSegment());
        e ||
          (e = b(
            "oz-player-polaris/streams/PolarisOzSegmentLocator"
          ).getSegment(
            this.$OzMediaStream7,
            this.$OzMediaStream6,
            this.$OzMediaStream25.computeBufferTarget(),
            c,
            this.$OzMediaStream7,
            this.$OzMediaStream8 || d,
            this.$OzMediaStream1,
            this.$OzMediaStream31
          ));
        if (this.$OzMediaStream7.canPredict()) {
          a =
            (this.$OzMediaStream9 &&
              this.$OzMediaStream9.getSequenceNumber()) ||
            0;
          c = (e && e.getSequenceNumber()) || 0;
          if (e && this.$OzMediaStream9 && a >= c) {
            d = b(
              "oz-player-polaris/streams/PolarisOzSegmentLocator"
            ).getEndingSequenceNumber(this.$OzMediaStream7);
            return this.$OzMediaStream1.getBool(
              "pdash_continue_interrupt_from_error"
            ) && (d || 0) >= a
              ? this.$OzMediaStream9
              : null;
          }
        }
        return e;
      };
      d.$OzMediaStream41 = function () {
        return !this.$OzMediaStream13 && this.$OzMediaStream19 === 0;
      };
      d.$OzMediaStream42 = function (a, c) {
        if (c) c = [a];
        else {
          var d = this.$OzMediaStream27.computeMin(
              this.$OzMediaStream6,
              a,
              this.$OzMediaStream7
            ),
            e = this.$OzMediaStream39(d);
          if (e) {
            this.$OzMediaStream36(e);
            e = this.$OzMediaStream40(!1);
            if (e) return this.$OzMediaStream42(e, !1);
          }
          e = b(
            "oz-player-polaris/strategies/PolarisOzStreamLengthStrategy"
          ).getStreamingSegments(
            this.$OzMediaStream1,
            d,
            this.$OzMediaStream7,
            this.$OzMediaStream6,
            a
          );
          c = b(
            "oz-player-polaris/networks/PolarisOzNetworkManager"
          ).getStreamableSegmentsRange(e);
        }
        return c;
      };
      d.$OzMediaStream43 = function () {
        var a = this;
        return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
          function (b, c) {
            var d = a.getCurrentRepresentation().addUpdateListener(function () {
              b(), (a.$OzMediaStream18 = null), d.remove();
            });
            a.$OzMediaStream18 = d;
          }
        );
      };
      d.$OzMediaStream44 = function (a, c) {
        var d = this;
        return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
          function (b, c) {
            c = d.$OzMediaStream40(a);
            c == null ? b([]) : b(d.$OzMediaStream42(c, a));
          }
        );
      };
      d.$OzMediaStream38 = function () {
        var a = this,
          c = this.$OzMediaStream5
            ? this.$OzMediaStream5.getSourceBufferState()
            : null;
        if (
          this.$OzMediaStream7.canPredict() &&
          this.$OzMediaStream9 &&
          this.$OzMediaStream7.isEndingSegment(this.$OzMediaStream9)
        ) {
          this.endStream();
          return;
        }
        if (
          this.$OzMediaStream7.canPredict() &&
          this.$OzMediaStream8 &&
          this.$OzMediaStream7.isEndingSegment(this.$OzMediaStream8)
        ) {
          this.endStream();
          return;
        }
        var d = this.$OzMediaStream41(),
          e = this.$OzMediaStream40(d);
        if (
          this.$OzMediaStream30 &&
          this.$OzMediaStream1.getBool(
            "no_new_loop_body_promise_when_stream_ongoing"
          )
        ) {
          this.$OzMediaStream21 = i;
          return null;
        }
        this.$OzMediaStream19 > 0 &&
          this.$OzMediaStream1.getBool(
            "maybe_end_stream_if_prepended_segments"
          ) &&
          !this.$OzMediaStream45() &&
          this.endStreamIfBufferedToEndTime();
        if (!e || this.$OzMediaStream30) {
          this.$OzMediaStream21 = i;
          this.$OzMediaStream30 ||
            this.$OzMediaStream29.finishTaskIfNoOngoingStream();
          return this.$OzMediaStream43();
        }
        this.$OzMediaStream21 = 0;
        var f = this.$OzMediaStream42(e, d);
        this.$OzMediaStream13 = !0;
        var g = f[f.length - 1] || null;
        g &&
          !this.$OzMediaStream1.getBool(
            "clear_prepended_segments_count_on_append"
          ) &&
          (this.$OzMediaStream19 = 0);
        var h = this.$OzMediaStream7,
          j = function () {
            return h.isEndingSegment(g);
          };
        f.length !== 0 ||
          b("oz-player-polaris/shims/polarisOzvariant")(0, 23148);
        e = f[0];
        var k = e.getTimeRange().startTime,
          l = g.getTimeRange().endTime,
          m = this.$OzMediaStream16.cloneContext();
        m.setRepresentationID(this.$OzMediaStream7.getID())
          .setSegmentStartTime(k)
          .setSegmentEndTime(l);
        var n,
          o,
          p = null,
          q =
            this.$OzMediaStream1.getBool("disable_audio_scheduler") &&
            this.$OzMediaStream20.indexOf("audio") !== -1;
        this.$OzMediaStream1.getBool("use_scheduler") && !q && !d
          ? this.$OzMediaStream1.getBool("use_deferred_streaming_task")
            ? (o = this.$OzMediaStream29.startStreamDeferred({
                segmentsPromise: this.$OzMediaStream44(d, f),
                networkManager: this.$OzMediaStream10,
                sourceBufferState: c,
                playbackState: this.$OzMediaStream6,
                segmentsLoggerProvider: m,
              }))
            : (n = this.$OzMediaStream29.startStream({
                streamableSegments: f,
                networkManager: this.$OzMediaStream10,
                sourceBufferState: c,
                playbackState: this.$OzMediaStream6,
                segmentsLoggerProvider: m,
              }))
          : (n = this.$OzMediaStream10.request(
              f,
              [
                b(
                  "oz-player-polaris/networks/polarisGetOzBandwidthEstimatorPipeThroughReporter"
                )(this.$OzMediaStream20),
              ],
              m
            ));
        this.$OzMediaStream11 = n;
        this.$OzMediaStream30 = !0;
        var r = this.$OzMediaStream46(e, g, f.length),
          s = {
            startTime: k,
            endTime: l,
            tag: { id: this.$OzMediaStream7.getID() },
          },
          t = m.getOperationLogger("queued_append");
        t.start().setReason(
          this.$OzMediaStream14 &&
            this.$OzMediaStream14.getLastEvaluationReason()
        );
        var u = function (c) {
            a.$OzMediaStream37(
              c,
              function (b) {
                t.setAppendedBufferMs(Math.round(b * 1e3)).log(),
                  f.forEach(function (b) {
                    a.emit("SegmentAppended", a.$OzMediaStream47(b));
                  }),
                  j() && a.endStream(),
                  a.$OzMediaStream1.getBool(
                    "clear_prepended_segments_count_on_append"
                  ) && (a.$OzMediaStream19 = 0);
              },
              function (c) {
                t.setError(c).log(),
                  a.$OzMediaStream1.getBool("fallback_on_append_error") &&
                    c instanceof b("oz-player-polaris/utils/PolarisOzError") &&
                    c.getType() !== "OZ_NETWORK" &&
                    a.$OzMediaStream32.emitError(c);
              },
              m,
              r,
              s
            );
          },
          v;
        !!o || !!n || b("oz-player-polaris/shims/polarisOzvariant")(0, 23147);
        o
          ? (o
              .genStream()
              .then(function (a) {
                return u(a);
              })
              ["catch"](function (b) {
                return a.$OzMediaStream32.emitError(b);
              }),
            (v = o.getStatusChangePromise()))
          : n && (u(n.getStream()), (v = n.getStatusChangePromise()));
        q = v
          .then(function (b) {
            a.$OzMediaStream48(b, g);
            return a.$OzMediaStream49(p);
          })
          .then(function () {
            a.$OzMediaStream2 = 0;
          });
        return q["catch"](function (b) {
          return a.$OzMediaStream50(b, p, g);
        });
      };
      d.handleError = function (a) {
        return 0;
      };
      d.$OzMediaStream48 = function (a, b) {
        a !== "cancelled" && (this.$OzMediaStream8 = b);
      };
      d.$OzMediaStream49 = function (a) {
        (this.$OzMediaStream30 = !1), a && a.finish();
      };
      d.$OzMediaStream50 = function (a, c, d) {
        this.$OzMediaStream30 = !1;
        var e, f;
        a instanceof b("oz-player-polaris/utils/PolarisOzError")
          ? ((e = a.getExtra().code || ""), (f = a))
          : ((e = a.status ? a.status.toString() : "0"),
            (f = new (b("oz-player-polaris/utils/PolarisOzError"))({
              type: "OZ_NETWORK",
              description: a.message,
              extra: { originalError: a, code: e, url: a.url },
            })));
        var g = JSON.parse(
          this.$OzMediaStream1.getString("network_end_broadcasts_json")
        );
        if (g.includes(e)) {
          this.$OzMediaStream9 = d;
          this.endStream();
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).resolve();
        }
        g = JSON.parse(this.$OzMediaStream1.getString("network_skip_json"));
        if (g.includes(e)) {
          c && c.finish();
          this.$OzMediaStream8 = d;
          this.$OzMediaStream29.finishTaskIfNoOngoingStream();
          return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
            function (a, b) {
              h(a, 0);
            }
          );
        }
        var i = this.$OzMediaStream1.getBool("back_off_pdash_504_retry")
          ? this.$OzMediaStream3[this.$OzMediaStream2++]
          : 0;
        g = JSON.parse(
          this.$OzMediaStream1.getString("network_reload_mpd_json")
        );
        if (
          this.$OzMediaStream1.getBool("back_off_pdash_504_retry") &&
          i == null
        )
          return this.$OzMediaStream51(a, f);
        if (i != null && g.includes(e)) {
          c && c.finish();
          this.$OzMediaStream8 = null;
          this.$OzMediaStream9 = d;
          this.$OzMediaStream29.finishTaskIfNoOngoingStream();
          if (this.$OzMediaStream5 != null)
            return this.$OzMediaStream5
              .cancelOperationAndCleanQueue()
              .then(function () {
                return new (b(
                  "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
                ))(function (a, b) {
                  h(a, i * 1e3);
                });
              });
        }
        g = JSON.parse(
          this.$OzMediaStream1.getString("network_retry_intervals_json")
        );
        var j = g[e];
        if (j) {
          c && c.finish();
          this.$OzMediaStream29.finishTaskIfNoOngoingStream();
          return new (b("oz-player-polaris/shims/PolarisOzMaybeNativePromise"))(
            function (a, b) {
              h(a, j);
            }
          );
        }
        return this.$OzMediaStream51(a, f);
      };
      d.$OzMediaStream51 = function (a, c) {
        this.$OzMediaStream32.emitError(c);
        this.$OzMediaStream2 = 0;
        return a instanceof b("oz-player-polaris/utils/PolarisOzError") &&
          a.getType() === "OZ_NETWORK" &&
          this.$OzMediaStream5
          ? this.$OzMediaStream5.cancelOperationAndCleanQueue()
          : b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve();
      };
      d.$OzMediaStream37 = function (a, b, c, d, e, f) {
        f === void 0 && (f = null),
          this.$OzMediaStream17.push({
            stream: a,
            dataAppendedCallback: b,
            dataAppendedErrorCallback: c,
            loggerProvider: d,
            appendTarget: e,
            timeRange: f,
          }),
          this.$OzMediaStream5 && this.$OzMediaStream34();
      };
      d.$OzMediaStream34 = function () {
        var a = this;
        this.$OzMediaStream17.forEach(function (c) {
          var d = c.appendTarget,
            e = c.dataAppendedCallback,
            f = c.dataAppendedErrorCallback,
            g = c.loggerProvider,
            h = c.stream,
            i = c.timeRange;
          c =
            a.$OzMediaStream33 == null
              ? h
              : h.pipeThrough(
                  new (b(
                    "oz-player-polaris/networks/PolarisOzReadableStreamDataReader"
                  ))(a.$OzMediaStream33.bind(a, a.$OzMediaStream7))
                );
          a.$OzMediaStream5 &&
            a.$OzMediaStream5
              .queueData(c, g, d)
              .then(function (b) {
                e(b.appendedSec),
                  i &&
                  a.$OzMediaStream7.canPredict() &&
                  b.startTime_UNSAFE &&
                  b.endTime_UNSAFE
                    ? a.$OzMediaStream24.add(
                        b.startTime_UNSAFE,
                        b.endTime_UNSAFE,
                        i.tag
                      )
                    : i &&
                      a.$OzMediaStream24.add(i.startTime, i.endTime, i.tag);
              })
              ["catch"](function (a) {
                f(a);
              });
        });
        this.$OzMediaStream17 = [];
      };
      d.$OzMediaStream46 = function (a, b, c) {
        var d = 0,
          e = this.$OzMediaStream1.getNumber("appends_per_segment");
        if (e > 0) {
          a = a.getByteRange();
          b = b.getByteRange();
          a &&
            b &&
            b.endByte != null &&
            (d = Math.ceil((b.endByte - a.startByte + 1) / (c * e)));
        }
        d === 0 &&
          (d = this.$OzMediaStream1.getNumber(
            "append_byte_target_without_range"
          ));
        return d;
      };
      d.getIsAdaptationEnabled = function () {
        return this.$OzMediaStream28;
      };
      d.enableAdaptation = function () {
        this.$OzMediaStream28 = !0;
      };
      d.disableAdaptation = function () {
        this.$OzMediaStream28 = !1;
      };
      d.cleanup = function () {
        this.$OzMediaStream4.then(function (a) {
          a.destroy();
        }),
          this.$OzMediaStream29.destroy(),
          this.$OzMediaStream15.release(),
          this.$OzMediaStream15.engage(),
          this.$OzMediaStream18 && this.$OzMediaStream18.remove(),
          this.$OzMediaStream22.stop();
      };
      d.getRepresentationIDAtTime = function (a) {
        var b = this.$OzMediaStream24.get(a);
        if (!b) {
          var c = this.$OzMediaStream7.getTimeRanges();
          c = c[c.length - 1];
          var d = 0.001;
          c &&
            a >= c.endTime &&
            a <= this.$OzMediaStream6.getDuration() + d &&
            (b = this.$OzMediaStream24.get(c.endTime - d));
        }
        return b ? b.id : null;
      };
      d.endStream = function () {
        this.$OzMediaStream12.notifyMediaStreamEnded(this),
          this.$OzMediaStream52();
      };
      d.endStreamIfBufferedToEndTime = function () {
        var a = this.$OzMediaStream7.getTimeRanges();
        if (a.length > 0) {
          a = a[a.length - 1].endTime;
          if (this.$OzMediaStream5) {
            var b = this.$OzMediaStream5
              .getSourceBufferState()
              .getBufferedRanges();
            b.length > 0 &&
              Math.abs(b[b.length - 1].endTime - a) < j &&
              this.endStream();
          }
        }
      };
      d.$OzMediaStream47 = function (a) {
        return {
          type: this.$OzMediaStream20.charAt(0),
          segment: a,
          sourceBuffer: this.$OzMediaStream5
            ? this.$OzMediaStream5.getDebug().SourceBuffer
            : null,
        };
      };
      d.$OzMediaStream35 = function () {
        (this.$OzMediaStream8 = null),
          (this.$OzMediaStream30 = !1),
          this.$OzMediaStream11 && this.$OzMediaStream11.cancel(),
          this.$OzMediaStream21 !== 0 &&
            this.$OzMediaStream23 &&
            this.$OzMediaStream23.resolve();
      };
      d.$OzMediaStream52 = function () {
        if (this.$OzMediaStream5) {
          var a = this.$OzMediaStream5
            .getSourceBufferState()
            .getBufferedRanges();
          a.length > 0 && (this.$OzMediaStream31 = a[a.length - 1].endTime);
        }
      };
      d.$OzMediaStream45 = function () {
        return this.$OzMediaStream31 !== null;
      };
      d.getDebug = function () {
        return {
          SourceBufferManager: this.$OzMediaStream5,
          MediaStreamAbrManager: this.$OzMediaStream14,
        };
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/utils/polarisGetRepresentationInCache",
  ["oz-player-polaris/networks/PolarisRequestParamCreator"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new (b("oz-player-polaris/networks/PolarisRequestParamCreator"))();
    function a(a, b) {
      b === void 0 && (b = null);
      return (
        a.find(function (a) {
          a = a.getInitSegment();
          var c = a && a.getByteRange();
          return a && c && b
            ? b.hasCacheValue(
                g.createRequestParam(a.getURI(), c).uri.toString()
              )
            : !1;
        }) || null
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris/PolarisPlayer",
  [
    "Promise",
    "oz-player-polaris/configs/PolarisOzConfigUtils",
    "oz-player-polaris/drm/PolarisOzDrmManager",
    "oz-player-polaris/loggings/PolarisOzDevConsolePerfLogger",
    "oz-player-polaris/loggings/PolarisOzLoggingUtils",
    "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger",
    "oz-player-polaris/loggings/PolarisOzOperationLoggerObserver",
    "oz-player-polaris/manifests/PolarisOzVideoRepresentation",
    "oz-player-polaris/media_source/PolarisMediaSourceManager",
    "oz-player-polaris/media_source/PolarisOzMediaSeekableRangeManager",
    "oz-player-polaris/networks/PolarisOzNetworkManager",
    "oz-player-polaris/parsers/PolarisOzMpdParser",
    "oz-player-polaris/parsers/PolarisOzMpdUpdater",
    "oz-player-polaris/playback_controls/PolarisOzPlaybackTimeRangeManager",
    "oz-player-polaris/playback_controls/PolarisOzPlayheadManager",
    "oz-player-polaris/playback_controls/PolarisOzPlayheadNudger",
    "oz-player-polaris/shims/PolarisOzEventEmitter",
    "oz-player-polaris/shims/PolarisOzMaybeNativePromise",
    "oz-player-polaris/shims/PolarisOzSubscriptionsHandler",
    "oz-player-polaris/shims/polarisOzvariant",
    "oz-player-polaris/states/PolarisOzObservedPlaybackState",
    "oz-player-polaris/states/PolarisOzPlayerDimensions",
    "oz-player-polaris/strategies/PolarisOzAbrManager",
    "oz-player-polaris/strategies/PolarisOzAudioIBRManager",
    "oz-player-polaris/strategies/PolarisOzBufferAheadPriorityStrategy",
    "oz-player-polaris/strategies/PolarisOzBufferAheadTargetStrategy",
    "oz-player-polaris/strategies/PolarisOzBufferTargetBoundedStreamSegmentsCountStrategy",
    "oz-player-polaris/strategies/PolarisOzBufferTargetCalculator",
    "oz-player-polaris/strategies/PolarisOzBufferingDetector",
    "oz-player-polaris/strategies/PolarisOzLiveheadDeltaCatchupStrategy",
    "oz-player-polaris/strategies/PolarisOzPausedStreamSegmentsCountStrategy",
    "oz-player-polaris/strategies/PolarisOzPlayheadAtInterruptionDetector",
    "oz-player-polaris/strategies/PolarisOzPlayingStatePriorityStrategy",
    "oz-player-polaris/strategies/PolarisOzPriorityCalculator",
    "oz-player-polaris/strategies/PolarisOzStartupBufferTargetStrategy",
    "oz-player-polaris/strategies/PolarisOzStaticStreamSegmentsStrategy",
    "oz-player-polaris/strategies/PolarisOzStreamSegmentsCountCalculator",
    "oz-player-polaris/streams/PolarisOzEndOfStreamWatcher",
    "oz-player-polaris/streams/PolarisOzHandleUserRepresentationSwitch",
    "oz-player-polaris/streams/PolarisOzMediaStream",
    "oz-player-polaris/utils/PolarisOzError",
    "oz-player-polaris/utils/PolarisOzErrorEmitter",
    "oz-player-polaris/utils/PolarisOzPlaybackRestrictionsUtils",
    "oz-player-polaris/utils/PolarisOzReadableStreamUtils",
    "oz-player-polaris/utils/polarisGetRepresentationInCache",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b(
        "oz-player-polaris/configs/PolarisOzConfigUtils"
      ).getInternalDefaultConfig,
      h = b("oz-player-polaris/drm/PolarisOzDrmManager").OzDrmManager,
      i = b(
        "oz-player-polaris/loggings/PolarisOzDevConsolePerfLogger"
      ).OzDevConsolePerfLoggerProvider,
      j = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).executeOperationAndLog,
      k = b(
        "oz-player-polaris/loggings/PolarisOzLoggingUtils"
      ).monitorPromiseAndLogOperation,
      l = b(
        "oz-player-polaris/loggings/PolarisOzMultiDestinationPerfLogger"
      ).OzMultiDestinationPerfLoggerProvider,
      m = b(
        "oz-player-polaris/utils/PolarisOzPlaybackRestrictionsUtils"
      ).applyVideoPlaybackRestrictions,
      n = b("oz-player-polaris/utils/PolarisOzReadableStreamUtils").pumpString;
    function o(a) {
      a || b("oz-player-polaris/shims/polarisOzvariant")(0, 21876);
      return a;
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this) || this;
        d.$Player4 = new Map();
        d.$Player5 = new Map();
        d.$Player9 = void 0;
        d.$Player10 = new (b(
          "oz-player-polaris/shims/PolarisOzSubscriptionsHandler"
        ))();
        d.$Player11 = new (b(
          "oz-player-polaris/utils/PolarisOzErrorEmitter"
        ))();
        d.$Player25 = [];
        d.$Player32 = null;
        d.$Player33 = null;
        d.$Player47 = !1;
        d.$Player49 = null;
        var e = c.audioOnly;
        e = e === void 0 ? !1 : e;
        var f = c.videoNodeOrQuickStarter,
          h = c.config,
          i = c.rawMpdXml,
          j = c.dimensions,
          k = c.mpdUrl;
        k = k === void 0 ? null : k;
        var m = c.loggerConfig;
        m =
          m === void 0
            ? {
                perfLoggerProviders: [],
                observedOperationLoggers: [],
                isOzDevConsoleEnabled: !1,
              }
            : m;
        var n = c.prefetchCache;
        n = n === void 0 ? null : n;
        var o = c.overrideOzRequestImplementation;
        o = o === void 0 ? null : o;
        var p = c.networkRequestStreamHandlers,
          q = c.getShouldIncludeCredentials;
        q = q === void 0 ? null : q;
        var r = c.initialRepresentationIDs;
        r = r === void 0 ? [] : r;
        var s = c.debugCreateInitiator;
        s = s === void 0 ? null : s;
        var t = c.customParsers;
        t = t === void 0 ? new Map() : t;
        var u = c.entityKey;
        u = u === void 0 ? "" : u;
        var v = c.videoPlaybackRestrictions;
        v = v === void 0 ? [] : v;
        var w = c.customSegmentTimelineParser;
        w = w === void 0 ? null : w;
        var x = c.customRepresentationParsers;
        x = x === void 0 ? {} : x;
        var y = c.videoAbrManagerFactory;
        y = y === void 0 ? null : y;
        var z = c.seekHandler;
        z = z === void 0 ? null : z;
        var A = c.initialPlaybackPositionForDynamicMpd;
        A = A === void 0 ? -20 : A;
        var B = c.liveheadFallBehindBlockThreshold;
        B = B === void 0 ? 30 : B;
        var C = c.liveheadFallBehindBlockMargin;
        C = C === void 0 ? 5.9 : C;
        var D = c.startTimeStamp;
        D = D === void 0 ? 0 : D;
        var E = c.drmProviders;
        E = E === void 0 ? [] : E;
        c = c.getVideoDimensions;
        c = c === void 0 ? null : c;
        d.$Player45 = s;
        s = m.observedOperationLoggers;
        var F = m.perfLoggerProviders;
        m = m.isOzDevConsoleEnabled;
        d.$Player16 = m || !1;
        d.$Player15 = new l(d.$Player50().concat(F));
        d.$Player1 = e;
        d.$Player3 = g(h);
        d.$Player51();
        d.$Player22 = new (b(
          "oz-player-polaris/loggings/PolarisOzOperationLoggerObserver"
        ))();
        d.$Player22.observe(s, d.$Player15);
        d.$Player24 = n;
        d.$Player49 = o;
        m = n && n.getCachedRepresentations(u);
        d.$Player25 = m || r;
        d.$Player27 = t;
        d.$Player31 = v;
        d.$Player28 = x;
        d.$Player29 = w;
        d.$Player35 = y;
        d.$Player36 = z;
        d.$Player37 = D;
        d.$Player38 = A;
        d.$Player39 = B;
        d.$Player40 = C;
        d.$Player43 = E;
        f instanceof HTMLVideoElement
          ? ((d.$Player2 = f),
            (d.$Player6 = new (b(
              "oz-player-polaris/media_source/PolarisMediaSourceManager"
            ))(d.$Player2, d.$Player3, d.$Player15)))
          : ((d.$Player2 = f.getVideoNode()),
            (d.$Player6 = f.getMediaSourceManager()),
            (d.$Player7 = f));
        d.$Player41 = p;
        d.$Player42 = q;
        d.$Player12 = new (b(
          "oz-player-polaris/networks/PolarisOzNetworkManager"
        ))(d.$Player3, d.$Player24, d.$Player41, d.$Player49, d.$Player42);
        d.$Player17 = k;
        d.$Player8 = i;
        d.$Player13 = new (b(
          "oz-player-polaris/states/PolarisOzObservedPlaybackState"
        ))(d.$Player2, d.$Player15);
        d.$Player30 = new (b(
          "oz-player-polaris/states/PolarisOzPlayerDimensions"
        ))(j);
        d.$Player48 = c;
        d.$Player14 = new (b(
          "oz-player-polaris/streams/PolarisOzEndOfStreamWatcher"
        ))(d.$Player6, d.$Player3);
        d.$Player10.addSubscriptions(
          d.$Player14.addListener("streamEnd", function () {
            (d.$Player47 = !0), d.emit("streamEnd");
          })
        );
        d.$Player23 = new (b(
          "oz-player-polaris/media_source/PolarisOzMediaSeekableRangeManager"
        ))(d.$Player6, d.$Player3);
        d.$Player26 = d.$Player52();
        d.$Player7 == null && (d.$Player46 = d.$Player53());
        return d;
      }
      var d = c.prototype;
      d.setupPlayer = function () {
        this.$Player54();
        this.$Player7 &&
          this.$Player10.addSubscriptions(
            this.$Player7.onError(this.$Player11.emitError)
          );
        try {
          var a = j(
            this.$Player15.cloneContext().setInitiator(this.$Player45),
            "parse_manifest",
            this.$Player55.bind(this, this.$Player8)
          );
          this.$Player3.getBool("async_parse_manifest_xml")
            ? b("oz-player-polaris/shims/PolarisOzMaybeNativePromise")
                .resolve(a)
                .then(this.$Player56.bind(this))
                ["catch"](this.$Player11.emitError.bind(this))
            : this.$Player56(a);
        } catch (a) {
          if (a instanceof b("oz-player-polaris/utils/PolarisOzError"))
            this.$Player11.emitError(a);
          else throw a;
        }
      };
      d.load = function (a) {
        var b = this;
        try {
          if (this.$Player8 != null) this.setupPlayer();
          else if (a) {
            this.$Player17 = a;
            a = this.$Player12.requestRawUrl(
              a,
              { credentials: "same-origin" },
              null,
              this.$Player15
            );
            a = a.getStream().getReader();
            n(a)
              .then(function (a) {
                (b.$Player8 = a), b.setupPlayer();
              })
              ["catch"](function (a) {
                b.$Player11.emitError(a);
              });
          }
        } catch (a) {
          this.$Player11.emitError(a);
        }
      };
      d.$Player56 = function (a) {
        this.$Player9 = o(a);
        if (this.$Player17 != null) {
          var c = new (b("oz-player-polaris/parsers/PolarisOzMpdUpdater"))(
            this.$Player3,
            a,
            this.$Player12,
            this.$Player13,
            this.$Player15,
            {
              customParsers: this.$Player27,
              customRepresentationParsers: this.$Player28,
              customSegmentTimelineParser: this.$Player29,
            },
            this.$Player44
          );
          this.$Player57(c);
          this.$Player10.addSubscriptions(
            c.onError(this.$Player11.emitError),
            c.addListener("streamTransitionToStatic", this.$Player58.bind(this))
          );
          c.setupUpdateLoop();
          this.$Player21 = c;
        }
        this.$Player37 = a.isStaticMpd() ? this.$Player37 : this.$Player38;
        this.$Player18 = new (b(
          "oz-player-polaris/playback_controls/PolarisOzPlayheadManager"
        ))({
          video: this.$Player2,
          mpd: a,
          playheadCatchup: this.$Player34,
          playbackState: this.$Player13,
          config: this.$Player3,
          perfLoggerProvider: this.$Player15,
          seekHandler: this.$Player36,
          initialPlaybackPosition: this.$Player37,
        });
        this.$Player19 = new (b(
          "oz-player-polaris/playback_controls/PolarisOzPlayheadNudger"
        ))(this.$Player3, this.$Player2);
        this.$Player20 = new (b(
          "oz-player-polaris/playback_controls/PolarisOzPlaybackTimeRangeManager"
        ))(this.$Player2, a, this.$Player39, this.$Player40);
        this.$Player59();
        this.emit("mpd_ready", a);
      };
      d.updatePlayerRunTimeConfig = function (a) {
        a = a.videoStreamDataHandler;
        if (a !== void 0) {
          var b = this.$Player4.get("video");
          b && b.updateRunTimeConfigs({ videoStreamDataHandler: a });
        }
      };
      d.$Player60 = function (a, b) {
        var c = this,
          d = a.getMimeCodecs(),
          e,
          f = 0,
          g = null,
          h = this.$Player7;
        h &&
          ((e = h.getSourceBufferManagerPromise(d)),
          (f = h.getPrependedSegmentsCount(d)),
          this.$Player3.getBool("fix_quick_starter_overhead") &&
            (g = h.getRepresentationId(d)));
        e ||
          (e = this.$Player6.createSourceBufferManager(
            d,
            this.$Player3.getBool("set_source_buffer_append_window_end")
          ));
        this.$Player61(e, b, g, a, f);
        return k(e, this.$Player15, "source_attach", function (a) {
          a.setType(b);
        }).then(function (a) {
          return c.$Player18.observeSourceBufferState(
            a.getSourceBufferState(),
            b
          );
        });
      };
      d.isDrm = function () {
        var a = this.$Player44;
        if (a != null) {
          a = a.hasContentProtections();
          return a != null ? a : !1;
        }
        return !1;
      };
      d.$Player54 = function () {
        if (this.$Player43.length > 0) {
          var a = (this.$Player44 = new h(this.$Player15, this.$Player2));
          a.onError(this.$Player11.emitError);
          this.$Player43 && this.$Player43.forEach(a.addProvider, a);
          this.$Player28.drmProtections &&
            this.$Player11.emitError(
              new (b("oz-player-polaris/utils/PolarisOzError"))({
                type: "OZ_DRM_MANAGER",
                description:
                  '"drmProtections" is a reserved parser name for "customRepresentationParsers". Please rename your parser.',
              })
            );
          this.$Player28.drmProtections =
            a.parseContentProtectionForRepresentation.bind(this.$Player44);
        }
      };
      d.$Player62 = function (a) {
        var c = o(this.$Player9);
        a = [
          this.$Player3,
          a,
          c.getVideoRepresentations(),
          this.$Player31,
          this.$Player13,
          this.$Player30,
          window.devicePixelRatio || 1,
          this.$Player63.bind(this),
        ];
        return this.$Player35
          ? this.$Player35.apply(this, a)
          : babelHelpers.construct(
              b("oz-player-polaris/strategies/PolarisOzAbrManager"),
              a
            );
      };
      d.$Player61 = function (a, c, d, e, f) {
        var g = this,
          h = o(this.$Player9),
          i = this.$Player5.get(c),
          j = new (b("oz-player-polaris/streams/PolarisOzMediaStream"))(
            this.$Player3,
            a,
            f,
            this.$Player12,
            this.$Player13,
            this.$Player14,
            this.$Player26,
            this.$Player64(),
            this.$Player65(i),
            i,
            d,
            e,
            this.$Player15.cloneContext().setType(c)
          );
        this.$Player37 === 0
          ? j.start()
          : this.$Player10.addSubscriptions(
              this.$Player18.addListener(
                "initialPlaybackPositionSet",
                function () {
                  g.$Player13.forceUpdateCurrentTime(), j.start();
                }
              )
            );
        this.$Player10.addSubscriptions(
          j.onError(this.$Player11.emitError),
          this.$Player23.listenToMediaStreamInitAppended(j)
        );
        c === "video" &&
          (this.$Player33 = new (b(
            "oz-player-polaris/streams/PolarisOzHandleUserRepresentationSwitch"
          ))(
            this.$Player3,
            this.$Player13,
            m(this.$Player31, this.$Player63(), h.getVideoRepresentations()),
            j,
            a
          ));
        this.$Player4.set(c, j);
        this.$Player10.addSubscriptions(
          j.addListener("switchRepresentation", function () {
            c === "video" && g.emit("switchVideoRepresentation");
          }),
          j.addListener("SegmentAppended", function (a) {
            g.$Player66("SegmentAppended", a);
          })
        );
      };
      d.$Player52 = function () {
        return new (b(
          "oz-player-polaris/strategies/PolarisOzBufferTargetCalculator"
        ))([
          new (b(
            "oz-player-polaris/strategies/PolarisOzStartupBufferTargetStrategy"
          ))(this.$Player13, this.$Player3),
          new (b(
            "oz-player-polaris/strategies/PolarisOzBufferAheadTargetStrategy"
          ))(this.$Player3),
        ]);
      };
      d.$Player57 = function (a) {
        var c = this;
        if (
          this.$Player3.getNumber(
            "stream_interrupt_check_mpd_stale_count_threshold"
          ) > 0
        ) {
          var d = new (b(
            "oz-player-polaris/strategies/PolarisOzPlayheadAtInterruptionDetector"
          ))(this.$Player2);
          this.$Player10.addSubscriptions(
            d.addListener("playheadAtInterruption", function (a) {
              return c.emit("streamInterruptAt", a);
            }),
            a.addListener("streamInterruptAt", function (a) {
              return d.notifyStreamInterrupted(a);
            }),
            a.addListener("streamResumedAt", function (a) {
              d.notifyStreamResumed(), c.emit("streamResumedAt", a);
            })
          );
          this.$Player32 = d;
        }
      };
      d.$Player64 = function () {
        var a = [
          new (b(
            "oz-player-polaris/strategies/PolarisOzPlayingStatePriorityStrategy"
          ))(this.$Player13),
          new (b(
            "oz-player-polaris/strategies/PolarisOzBufferAheadPriorityStrategy"
          ))(this.$Player13),
        ];
        return new (b(
          "oz-player-polaris/strategies/PolarisOzPriorityCalculator"
        ))(a);
      };
      d.$Player65 = function (a) {
        var c = [
          new (b(
            "oz-player-polaris/strategies/PolarisOzStaticStreamSegmentsStrategy"
          ))(this.$Player3),
          new (b(
            "oz-player-polaris/strategies/PolarisOzBufferTargetBoundedStreamSegmentsCountStrategy"
          ))(this.$Player26, this.$Player3),
        ];
        this.$Player3.getNumber("paused_stream_segments_count") !== 0 &&
          c.push(
            new (b(
              "oz-player-polaris/strategies/PolarisOzPausedStreamSegmentsCountStrategy"
            ))(this.$Player13, this.$Player3)
          );
        if (a) {
          a = a.getStreamSegmentsCountStrategy();
          a && c.push(a);
        }
        return new (b(
          "oz-player-polaris/strategies/PolarisOzStreamSegmentsCountCalculator"
        ))(c);
      };
      d.onError = function (a) {
        return this.$Player11.onError(a);
      };
      d.getCurrentQuality = function () {
        var a = this.$Player9;
        if (!a) return "";
        var c = this.$Player4.get("video");
        c = c && c.getCurrentRepresentation();
        if (
          c instanceof
          b("oz-player-polaris/manifests/PolarisOzVideoRepresentation")
        )
          return c.getQualityLabel();
        c = a.getVideoRepresentations();
        a = c[0];
        if (a) return a.getQualityLabel();
        a || b("oz-player-polaris/shims/polarisOzvariant")(0, 19857);
        return "";
      };
      d.switchToVideoQuality = function (a) {
        var b = o(this.$Player9);
        b = b.getVideoRepresentations().find(function (b) {
          return b.getQualityLabel() === a;
        });
        if (b) {
          var c = this.$Player4.get("video");
          c && (c.switchRepresentation(b), c.disableAdaptation());
        }
      };
      d.getIsVideoQualityAdaptationEnabled = function () {
        var a = this.$Player4.get("video");
        return a ? a.getIsAdaptationEnabled() : !1;
      };
      d.enableVideoQualityAdaptation = function () {
        var a = this.$Player4.get("video");
        a && a.enableAdaptation();
      };
      d.getVideoQualities = function () {
        var a = this.$Player9;
        return !a
          ? []
          : a.getVideoRepresentations().map(function (a) {
              return a.getQualityLabel();
            });
      };
      d.setEnableLiveheadCatchup = function (a) {
        this.$Player20 &&
          (a
            ? this.$Player15.getOperationLogger("live_catchup_enabled").log()
            : this.$Player15.getOperationLogger("live_catchup_disabled").log(),
          this.$Player20.setTimelineBlockingEnabled(a));
      };
      d.$Player59 = function () {
        var a = this,
          c = this.$Player1
            ? [this.$Player67({ liveConfigsFromAudioStream: !0 })]
            : [this.$Player68(), this.$Player67({})],
          d = [];
        return b("Promise")
          .all(c)
          .then(function () {
            var b = a.$Player4.get("video"),
              c = a.$Player4.get("audio");
            b && d.push(b.getCurrentRepresentation());
            c && d.push(c.getCurrentRepresentation());
            d.forEach(function (b) {
              a.$Player10.addSubscriptions(
                b.addUpdateListener(function () {
                  a.$Player66("SegmentIndexesUpdated", d);
                })
              );
            });
            a.$Player66("InitialSegmentIndexes", d);
            a.$Player2 &&
              a.$Player2.style &&
              (a.$Player2.style.display = a.$Player1 ? "none" : "block");
          });
      };
      d.$Player69 = function (a) {
        if (a.getTimeRanges().length) {
          a = a.getTimeRanges()[a.getTimeRanges().length - 1].endTime;
          this.$Player6.updateDuration(a);
        }
      };
      d.$Player70 = function (a) {
        this.$Player69(a),
          this.$Player23.setTimeRangeProvider(a),
          this.$Player18.setTimeRangeProvider(a),
          this.$Player20 != null && this.$Player20.setTimeRangeProvider(a);
      };
      d.$Player68 = function () {
        var a = o(this.$Player9);
        a = m(this.$Player31, this.$Player63(), a.getVideoRepresentations());
        if (!a.length)
          return b(
            "oz-player-polaris/shims/PolarisOzMaybeNativePromise"
          ).reject(new Error("no representation available."));
        this.$Player70(a[0]);
        var c = this.$Player71(a);
        if (this.$Player3.getBool("enable_adaptation")) {
          var d = this.$Player62(c || a[0]);
          this.$Player5.set("video", d);
          this.$Player3.getBool("use_abr_for_missing_default_representation") &&
            !c &&
            (c = d.getBestRepresentation());
        }
        return this.$Player60(c || a[0], "video");
      };
      d.$Player67 = function (a) {
        a = a.liveConfigsFromAudioStream;
        a = a === void 0 ? !1 : a;
        var c = o(this.$Player9);
        c = c.getAudioRepresentations();
        a && this.$Player70(c[0]);
        return c.length
          ? this.$Player60(this.$Player72(c) || c[0], "audio")
          : b("oz-player-polaris/shims/PolarisOzMaybeNativePromise").resolve();
      };
      d.getMpd = function () {
        return this.$Player9;
      };
      d.destroy = function (a) {
        a = this.$Player15.getOperationLogger("unload").setInitiator(a).start();
        this.$Player4.forEach(function (a) {
          a.cleanup();
        });
        this.$Player33 && this.$Player33.cleanup();
        this.$Player4 = new Map();
        this.$Player10.release();
        this.$Player10.engage();
        this.$Player13.destroy();
        this.$Player18 && this.$Player18.destroy();
        this.$Player19 && (this.$Player19.destroy(), (this.$Player19 = null));
        this.$Player20 && (this.$Player20.destroy(), (this.$Player20 = null));
        this.$Player44 && this.$Player44.destroy();
        this.$Player12 && this.$Player12.destroy();
        this.$Player48 && (this.$Player48 = null);
        this.$Player3.getBool("detach_media_source_manager") &&
          this.$Player6 &&
          this.$Player6.detach();
        var c = b("Promise").resolve();
        this.$Player3.getBool("cleanup_video_node_on_destroy") &&
          (this.$Player2.pause(),
          this.$Player3.getBool("remove_src_attr_on_unload")
            ? this.$Player2.removeAttribute("src")
            : (this.$Player2.src = ""),
          this.$Player2.setMediaKeys &&
            "function" === typeof this.$Player2.setMediaKeys &&
            (c = this.$Player2.setMediaKeys(null)));
        this.$Player21 && this.$Player21.destroy();
        this.$Player32 && this.$Player32.destroy();
        this.$Player22.destroy();
        this.$Player23.destroy();
        this.$Player46 && this.$Player46.destroy();
        a.log();
        this.emit("destroyed");
        a = [c];
        return b("Promise").all(a);
      };
      d.$Player71 = function (a) {
        var c = this,
          d;
        d = a.find(function (a) {
          return c.$Player25.indexOf(a.getID()) !== -1;
        });
        if (
          !d &&
          this.$Player7 &&
          this.$Player3.getBool("fix_quick_starter_overhead")
        ) {
          var e = this.$Player7.getRepresentationId("video");
          e != null &&
            (d = a.find(function (a) {
              return a.getID() === e;
            }));
        }
        d ||
          (d = b("oz-player-polaris/utils/polarisGetRepresentationInCache")(
            a,
            this.$Player24
          ));
        return d || null;
      };
      d.$Player72 = function (a) {
        var c = this,
          d = o(this.$Player9),
          e;
        e = a.find(function (a) {
          return c.$Player25.indexOf(a.getID()) !== -1;
        });
        if (
          !e &&
          this.$Player7 &&
          this.$Player3.getBool("fix_quick_starter_overhead")
        ) {
          var f = this.$Player7.getRepresentationId("audio");
          f != null &&
            (e = a.find(function (a) {
              return a.getID() === f;
            }));
        }
        e ||
          (e = b("oz-player-polaris/utils/polarisGetRepresentationInCache")(
            a,
            this.$Player24
          ));
        if (
          !e &&
          !d.isStaticMpd() &&
          a.length > 1 &&
          this.$Player3.getBool("live_audio_ibr")
        ) {
          d = new (b("oz-player-polaris/strategies/PolarisOzAudioIBRManager"))(
            this.$Player3,
            this.$Player15
          );
          e = d.getInitialAudioRepresentation(a);
        }
        return e || null;
      };
      d.$Player55 = function (a) {
        var c = new (b("oz-player-polaris/parsers/PolarisOzMpdParser"))(
          this.$Player3,
          {
            mpdUrl: this.$Player17,
            customParsers: this.$Player27,
            customRepresentationParsers: this.$Player28,
            customSegmentTimelineParser: this.$Player29,
          },
          this.$Player12,
          this.$Player15,
          this.$Player44
        );
        this.$Player10.addSubscriptions(c.onError(this.$Player11.emitError));
        return c.parse(a);
      };
      d.$Player50 = function () {
        var a = [];
        this.$Player16 && a.push(new i());
        return a;
      };
      d.setDimensions = function (a) {
        this.$Player30.setDimensions(a);
      };
      d.$Player73 = function (a, b) {
        b = this.$Player4.get(b);
        return b ? b.getRepresentationIDAtTime(a) : null;
      };
      d.getAudioRepresentationIDAtTime = function (a) {
        return this.$Player73(a, "audio");
      };
      d.getVideoRepresentationIDAtTime = function (a) {
        return this.$Player73(a, "video");
      };
      d.getCurrentVideoRepresentation = function () {
        var a = this.$Player4.get("video");
        return a != null ? a.getCurrentRepresentation() : null;
      };
      d.getCurrentAudioRepresentation = function () {
        var a = this.$Player4.get("audio");
        return a != null ? a.getCurrentRepresentation() : null;
      };
      d.$Player58 = function () {
        this.$Player4.forEach(function (a) {
          return a.endStreamIfBufferedToEndTime();
        });
      };
      d.getDebug = function () {
        var a = this,
          b = this.$Player4.get("video"),
          c = this.$Player4.get("audio"),
          d,
          e,
          f,
          g,
          h;
        b &&
          ((d = b.getDebug().MediaStreamAbrManager),
          (e = b.getDebug().SourceBufferManager),
          e && (f = e.getDebug().SourceBuffer));
        c &&
          ((g = c.getDebug().SourceBufferManager),
          g && (h = g.getDebug().SourceBuffer));
        return {
          getManifest: function () {
            return o(a.$Player9);
          },
          indentifiersIntact: !0,
          VideoSourceStream: b,
          VideoAbrManager: d,
          VideoBufferManager: e,
          VideoSourceBuffer: f,
          AudioSourceStream: c,
          AudioBufferManager: g,
          AudioSourceBuffer: h,
        };
      };
      d.$Player66 = function (a, b) {
        this.emit("debug/dashPlayerEvent", { detail: { type: a, event: b } });
      };
      d.$Player51 = function () {
        this.$Player3.getBool("live_playhead_catch_up") &&
          (this.$Player34 = new (b(
            "oz-player-polaris/strategies/PolarisOzLiveheadDeltaCatchupStrategy"
          ))(this.$Player3));
      };
      d.$Player53 = function () {
        var a = this,
          c = new (b(
            "oz-player-polaris/strategies/PolarisOzBufferingDetector"
          ))(this.$Player2, this.$Player3.getLegacyConfig(), function () {
            return a.$Player47 ? a.$Player2.duration : Infinity;
          });
        this.$Player10.addSubscriptions(
          c.addListener("enter_buffering", function () {
            a.emit("enter_buffering");
          }),
          c.addListener("leave_buffering", function () {
            a.emit("leave_buffering");
          })
        );
        return c;
      };
      d.$Player63 = function () {
        return this.$Player3.getBool("use_get_dimensions_callback")
          ? this.$Player48
            ? this.$Player48()
            : {
                width: this.$Player2.offsetWidth,
                height: this.$Player2.offsetHeight,
              }
          : this.$Player30.getDimensions();
      };
      return c;
    })(b("oz-player-polaris/shims/PolarisOzEventEmitter"));
    e.exports = a;
  },
  null
);
__d(
  "oz-player-polaris",
  ["oz-player-polaris/PolarisPlayer"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("oz-player-polaris/PolarisPlayer");
  },
  null
);
__d(
  "ServerRedirect",
  ["ReloadPage", "URI"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      c("URI").go(a, b, d);
    }
    function b() {
      d("ReloadPage").now();
    }
    g.redirectPageTo = a;
    g.reloadPage = b;
  },
  98
);
