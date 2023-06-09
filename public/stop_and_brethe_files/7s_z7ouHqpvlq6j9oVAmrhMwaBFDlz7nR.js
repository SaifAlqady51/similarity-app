/*FB_PKG_DELIM*/

__d(
  "CometLinkTrackingUtils.workplace",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      return a;
    }
    f.decorateHrefWithTrackingInfo = a;
  },
  66
);
__d(
  "BasePopoverDownEdgeArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 12, viewBox: "0 0 21 12", width: 21 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverDownInsetArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 12, viewBox: "0 0 25 12", width: 25 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverRightEdgeArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 21, viewBox: "0 0 12 21", width: 12 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12Z",
                transform: "rotate(-90 10.498 10.488)",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverRightInsetArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 25, viewBox: "0 0 12 25", width: 12 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.19.846.422.1.102z",
                transform: "rotate(-90 12.5 12.48)",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverSVGArrowContainer.react",
  [
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BasePopoverDownEdgeArrow.svg.react",
    "BasePopoverDownInsetArrow.svg.react",
    "BasePopoverRightEdgeArrow.svg.react",
    "BasePopoverRightInsetArrow.svg.react",
    "Locale",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = 3,
      l = c("Locale").isRTL(),
      m = 25,
      n = {
        arrow: { position: "x10l6tqk", $$css: !0 },
        container: { position: "x1n2onr6", $$css: !0 },
      },
      o = {
        above: { filter: "x1fayt1i", marginBottom: "x1fqp7bg", $$css: !0 },
        below: { filter: "x1fayt1i", marginTop: "xcxhlts", $$css: !0 },
        end: { filter: "x1fayt1i", marginStart: "x13ibhcj", $$css: !0 },
        start: { filter: "x1fayt1i", marginEnd: "x1jqylkn", $$css: !0 },
      },
      p = {
        above: { top: "x11k2h6o", $$css: !0 },
        below: { bottom: "xng853d", $$css: !0 },
        end: { end: "x1gozi89", $$css: !0 },
        start: { start: "x1ke83zm", $$css: !0 },
      },
      q = {
        end: { end: "xds687c", $$css: !0 },
        middle: { start: "xu8u0ou", $$css: !0 },
        start: { start: "x17qophe", $$css: !0 },
        stretch: { $$css: !0 },
      },
      r = {
        end: { bottom: "x1ey2m1c", $$css: !0 },
        middle: { top: "x18g6o9x", $$css: !0 },
        start: { top: "x13vifvy", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function s(a, b, c) {
      c = c - k;
      if (!a) return b === "end" || b === "middle" ? c * -1 : c;
      return (l && b === "start") || (!l && b === "end") ? c * -1 : c;
    }
    function t(a, b, c, d) {
      if (c === "edge" || d == null) return {};
      c = a === "below" || a === "above";
      a = c ? d.width : d.height;
      d = a > 0 ? a / 2 : 0;
      if (d === 0) return {};
      a = s(c, b, b === "middle" ? m / 2 : d);
      return {
        transform: c ? "translateX(" + a + "px)" : "translateY(" + a + "px)",
      };
    }
    function u(a, b) {
      return a === "above" || a === "below"
        ? b === "middle"
          ? c("BasePopoverDownInsetArrow.svg.react")
          : c("BasePopoverDownEdgeArrow.svg.react")
        : b === "middle"
        ? c("BasePopoverRightInsetArrow.svg.react")
        : c("BasePopoverRightEdgeArrow.svg.react");
    }
    function a(a, b) {
      var d,
        e = a.arrowAlignment,
        f = a.children,
        g = a.testid,
        k = a.withArrow,
        m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "arrowAlignment",
        "children",
        "testid",
        "withArrow",
        "xstyle",
      ]);
      var s = i(c("BaseContextualLayerOrientationContext")),
        v = s.align,
        w = s.position,
        x = i(c("BaseContextualLayerContextSizeContext"));
      s = u(w, v);
      var y =
        (d = i(c("BaseContextualLayerLayerAdjustmentContext"))) != null ? d : 0;
      d = j(
        function () {
          var a = l ? "start" : "end",
            b = l ? "end" : "start",
            c = (v === "end" && !l) || (v === "start" && l),
            d = 1,
            f = 1,
            g = 0,
            h = 0;
          switch (w) {
            case "above":
              g += -y;
              c && (d = -1);
              break;
            case "below":
              g += -y;
              f = -1;
              c && (d = -1);
              break;
            case b:
              h += -y;
              v === "start" && (f = -1);
              break;
            case a:
              h += -y;
              d = -1;
              v === "start" && (f = -1);
              break;
          }
          return {
            arrowStyle: {
              transform:
                "scale(" +
                d +
                ", " +
                f +
                ") translate(" +
                g +
                "px, " +
                h +
                "px)",
            },
            containerStyle: t(w, v, e, x),
          };
        },
        [v, e, x, y, w]
      );
      var z = d.arrowStyle;
      d = d.containerStyle;
      return h.jsxs(
        "div",
        babelHelpers["extends"](
          {},
          a,
          {
            className: c("stylex")(n.container, m, k && o[w]),
            ref: b,
            style: k ? d : void 0,
          },
          c("testID")(g),
          {
            children: [
              f,
              k
                ? h.jsx(s, {
                    className: c("stylex")(
                      n.arrow,
                      p[w],
                      (w === "start" || w === "end") && r[v],
                      (w === "above" || w === "below") && q[v]
                    ),
                    fill: "var(--card-background)",
                    style: z,
                  })
                : null,
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "PolarisActivityFeedFilter.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSCheckbox.react",
    "IGDSListItem.react",
    "IGDSPopover.react",
    "IGDSText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState,
      k = h._("Tags & mentions"),
      l = h._("Comments"),
      m = h._("Follows"),
      n = h._("Verified"),
      o = h._("People you follow"),
      p = h._("Categories"),
      q = h._("Account types"),
      r = {
        container: { width: "x1mu97ne", $$css: !0 },
        popover: {
          borderTopStartRadius: "x107yiy2",
          borderTopEndRadius: "xv8uw2v",
          borderBottomEndRadius: "x1tfwpuw",
          borderBottomStartRadius: "x2g32xy",
          $$css: !0,
        },
        filterButton: {
          paddingStart: "xvpee5o",
          paddingEnd: "x14uny0o",
          paddingBottom: "xx6bls6",
          $$css: !0,
        },
        header: {
          marginTop: "xcxhlts",
          paddingBottom: "xs9asl8",
          paddingStart: "xvpee5o",
          display: "x1lliihq",
          $$css: !0,
        },
        border: { height: "xols6we", backgroundColor: "x1pylafk", $$css: !0 },
        arrowContainerXStyle: { marginStart: "x17adc0v", $$css: !0 },
      };
    function s(a) {
      return i.jsx(c("IGDSCheckbox.react"), {
        checkboxShape: "circle",
        "data-testid": void 0,
        isChecked: a.checked,
        isLabelHidden: !0,
        label: h._("Checkbox functionality for activity feed filter page"),
        name: "",
        onChange: function () {
          a.setChecked(!a.checked);
        },
      });
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function a(a) {
      a = j(!1);
      var b = a[0];
      a = a[1];
      var d = j(!1),
        e = d[0];
      d = d[1];
      var f = j(!1),
        g = f[0];
      f = f[1];
      var t = j(!1),
        u = t[0];
      t = t[1];
      var v = j(!1),
        w = v[0];
      v = v[1];
      a = [
        i.jsx(
          c("IGDSBox.react"),
          {
            xstyle: r.header,
            children: i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              textAlign: "start",
              children: p,
            }),
          },
          "categories_header"
        ),
        i.jsx(
          c("IGDSListItem.react"),
          {
            addOnEnd: i.jsx(s, {
              checked: b,
              setChecked: a,
              testId: "tags-and-mentions-checkbox",
            }),
            overlayDisabled: !1,
            title: i.jsx(c("IGDSText.react").Body, { children: k }),
          },
          k
        ),
        i.jsx(
          c("IGDSListItem.react"),
          {
            addOnEnd: i.jsx(s, {
              checked: e,
              setChecked: d,
              testId: "comments-checkbox",
            }),
            overlayDisabled: !1,
            title: i.jsx(c("IGDSText.react").Body, { children: l }),
          },
          l
        ),
        i.jsx(c("IGDSBox.react"), { xstyle: r.border }, "delimiter"),
        i.jsx(
          c("IGDSBox.react"),
          {
            xstyle: r.header,
            children: i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              textAlign: "start",
              children: q,
            }),
          },
          "account_types_header"
        ),
        i.jsx(
          c("IGDSListItem.react"),
          {
            addOnEnd: i.jsx(s, {
              checked: g,
              setChecked: f,
              testId: "follows-checkbox",
            }),
            overlayDisabled: !1,
            title: i.jsx(c("IGDSText.react").Body, { children: m }),
          },
          m
        ),
        i.jsx(
          c("IGDSListItem.react"),
          {
            addOnEnd: i.jsx(s, {
              checked: u,
              setChecked: t,
              testId: "verified-checkbox",
            }),
            overlayDisabled: !1,
            title: i.jsx(c("IGDSText.react").Body, { children: n }),
          },
          n
        ),
        i.jsx(
          c("IGDSListItem.react"),
          {
            addOnEnd: i.jsx(s, {
              checked: w,
              setChecked: v,
              testId: "people-you-follow-checkbox",
            }),
            overlayDisabled: !1,
            title: i.jsx(c("IGDSText.react").Body, { children: o }),
          },
          o
        ),
        i.jsx(
          c("IGDSBox.react"),
          {
            xstyle: r.filterButton,
            children: i.jsx(c("IGDSButton.react"), {
              display: "block",
              isDisabled: !b && !e && !g && !u && !w,
              label: h._("Apply"),
              size: "large",
            }),
          },
          "filter-button"
        ),
      ];
      d = i.jsx("div", { "data-testid": void 0, children: a });
      return i.jsx("div", {
        onClick: function (a) {
          a.stopPropagation();
        },
        onPointerDown: function (a) {
          return a.stopPropagation();
        },
        children: i.jsx(c("IGDSPopover.react"), {
          arrowContainerXStyle: r.arrowContainerXStyle,
          popoverContent: i.jsx(c("IGDSBox.react"), {
            xstyle: r.container,
            children: d,
          }),
          popoverName: "postOptionsMenu",
          popoverXStyle: r.popover,
          testid: void 0,
          withArrow: !0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSCheckPanoFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("polyline", {
            fill: "none",
            points: "21.648 5.352 9.002 17.998 2.358 11.358",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "3",
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
  "shouldDisplayLoggedOutHighlights",
  [
    "PolarisLoggedOutLoginConstants",
    "PolarisUA",
    "polarisIsUserLoggedIn",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return (
        !d("polarisIsUserLoggedIn").isUserLoggedIn() &&
        !d("PolarisUA").isDesktop() &&
        a != null &&
        a >=
          d("PolarisLoggedOutLoginConstants")
            .MIN_FOLLOWERS_LOGGED_OUT_HIGHLIGHTS &&
        c("qex")._("648") === !0
      );
    }
    g["default"] = a;
  },
  98
);
