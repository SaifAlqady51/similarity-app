/*FB_PKG_DELIM*/

__d(
  "useGatedContentInfo",
  ["isStringNullOrEmpty", "usePolarisGetQueryResponse"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = c("usePolarisGetQueryResponse")(a);
      var b = a.blocks_logging_data,
        d = a.description,
        e = a.session_id;
      a = a.title;
      return !(c("isStringNullOrEmpty")(a) || c("isStringNullOrEmpty")(d))
        ? { title: a, description: d, session_id: e, blocks_logging_data: b }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreGlobeOutline24Icon.react",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: [
            h.jsx("circle", {
              cx: "12",
              cy: "12.06",
              fill: "none",
              r: "11.25",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeWidth: "1.5",
            }),
            h.jsx("path", {
              d: "M15.015 1.073s1.002 2.102-.314 3.349c-1.027.973-2.67.938-1.71 2.546.41.685.608 1.285.194 1.698-.478.476-1.41-.187-2.833-.744-2.8-1.096-3.428 1.39-2.381 2.148s2.47.043 3.236.686c.593.497-.658 1.235.537 1.558 1.387.375 1.995-.712 3.462-.488 1.448.221.761 1.163 2.554 1.699 1.406.42 2.153 1.641 1.37 3.804a24.14 24.14 0 01-2.547 5.008 2.699 2.699 0 01-2.349.829 3.661 3.661 0 00-.694-3.958c-1.54-1.449-4.315.136-4.58-4.02-.213-3.313-1.308-3.044-2.98-3.128-2.035-.103-4.058-1.801-2.403-7.458a11.521 11.521 0 0111.438-3.529z",
            }),
          ],
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
  "PolarisIGCoreInfoPanoOutlineIcon",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: [
            h.jsx("circle", {
              cx: "12.001",
              cy: "12.005",
              fill: "none",
              r: "10.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
            h.jsx("circle", { cx: "11.819", cy: "7.709", r: "1.25" }),
            h.jsx("line", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              x1: "10.569",
              x2: "13.432",
              y1: "16.777",
              y2: "16.777",
            }),
            h.jsx("polyline", {
              fill: "none",
              points: "10.569 11.05 12 11.05 12 16.777",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
          ],
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
  "PolarisIGCoreScalesPano24Icon.react",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M23.97 13.866a.958.958 0 00-.03-.166c-.007-.02-.003-.042-.011-.062l-4-10.01-.006-.008c-.007-.018-.02-.032-.028-.049a.992.992 0 00-.164-.242.969.969 0 00-.08-.074.98.98 0 00-.204-.138.938.938 0 00-.097-.046A.986.986 0 0019 3h-4a.947.947 0 00-.173.035A2.981 2.981 0 009.184 3H5a.987.987 0 00-.35.07.942.942 0 00-.096.047.985.985 0 00-.207.14.962.962 0 00-.077.07.988.988 0 00-.168.249c-.007.015-.019.027-.025.043l-.006.01-4 10c-.008.019-.004.04-.01.06a.963.963 0 00-.032.168.975.975 0 00-.012.242c.002.023-.007.044-.003.067A4.87 4.87 0 005 18a4.873 4.873 0 004.986-3.822c.004-.023-.006-.045-.003-.069a1.57 1.57 0 00-.043-.41c-.007-.02-.003-.041-.011-.06L6.477 5h2.707A2.995 2.995 0 0011 6.816V21H7a1 1 0 000 2h10a1 1 0 000-2h-4V6.816a2.994 2.994 0 001.827-1.851A.947.947 0 0015 5h2.523l-3.452 8.628c-.008.02-.004.04-.01.06a.959.959 0 00-.032.169.972.972 0 00-.012.242c.002.022-.007.044-.003.067A4.87 4.87 0 0019 18a4.873 4.873 0 004.984-3.822c.004-.022-.005-.044-.003-.066a.972.972 0 00-.012-.246zM5 6.694l2.523 6.314-5.046-.006zM5 16a3.307 3.307 0 01-2.425-.998l4.846.005A3.312 3.312 0 015 16zm7-11a1 1 0 111-1 1.001 1.001 0 01-1 1zm9.523 8.008l-5.046-.006L19 6.694zM19 16a3.307 3.307 0 01-2.426-.998l4.846.005A3.313 3.313 0 0119 16z",
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
  "PolarisHttpGatedContentPage.react",
  [
    "fbt",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSText.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisFastLink.react",
    "PolarisIGCoreGlobeOutline24Icon.react",
    "PolarisIGCoreIcon",
    "PolarisIGCoreInfoPanoOutlineIcon",
    "PolarisIGCoreModalHeader",
    "PolarisIGCoreScalesPano24Icon.react",
    "PolarisInstagramMediaOverlayFalcoEvent",
    "PolarisLogger",
    "PolarisUserAvatar.react",
    "cr:4197",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useState,
      l = "distilery",
      m =
        "https://transparency.fb.com/data/content-restrictions/content-violating-local-law/",
      n = h._("Geoblocked content"),
      o = h._("See Why"),
      p = h._("How we made this decision"),
      q = h._(
        "We received a legal request to restrict this content. We reviewed it against our policies and conducted a legal and human rights assessment."
      ),
      r = h._(
        "After the review, we restricted access to the content in the location where it goes against local law."
      );
    function s(a, b) {
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "start",
        direction: "row",
        marginTop: 6,
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            flex: "none",
            position: "relative",
            width: "15%",
            children: a,
          }),
          b,
        ],
      });
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function t(a) {
      var b = a.blocksLoggingData,
        e = a.entityId,
        f = a.onClose,
        g = a.sessionId;
      a = a.show;
      var j = function () {
        d(
          "PolarisInstagramMediaOverlayFalcoEvent"
        ).InstagramMediaOverlayFalcoEvent.log(function () {
          return d(
            "PolarisInstagramMediaOverlayFalcoEvent"
          ).InstagramMediaOverlayFalcoEvent.buildPayloadForLog({
            blocksLoggingData: b,
            containerModule: l,
            customAction: "OPEN_EXTERNAL_URL",
            entityID: e,
            event: "client_action",
            overlayLayout: 4,
            overlayType: "GEOBLOCK",
            sessionId: g,
          });
        });
      };
      return i.jsx(c("IGDSBox.react"), {
        position: "relative",
        children: i.jsxs(c("IGCoreModal"), {
          isVisible: a,
          children: [
            i.jsx(c("PolarisIGCoreModalHeader"), {
              onClose: f,
              children: i.jsx(c("IGDSBox.react"), {
                position: "relative",
                children: p,
              }),
            }),
            i.jsxs(c("IGDSBox.react"), {
              alignItems: "start",
              direction: "column",
              display: "flex",
              justifyContent: "start",
              marginEnd: 4,
              marginStart: 4,
              position: "relative",
              children: [
                s(
                  i.jsx(c("PolarisIGCoreGlobeOutline24Icon.react"), {
                    alt: n,
                    color: "ig-primary-text",
                  }),
                  q
                ),
                s(
                  i.jsx(c("PolarisIGCoreScalesPano24Icon.react"), {
                    alt: n,
                    color: "ig-primary-text",
                  }),
                  r
                ),
                i.jsxs(c("IGDSBox.react"), {
                  alignItems: "start",
                  direction: "row",
                  marginTop: 6,
                  position: "relative",
                  children: [
                    i.jsx(c("IGDSBox.react"), {
                      flex: "none",
                      position: "relative",
                      width: "15%",
                      children: i.jsx(c("PolarisIGCoreInfoPanoOutlineIcon"), {
                        alt: n,
                        color: "ig-primary-text",
                      }),
                    }),
                    i.jsx("p", {
                      children: h._(
                        "You can learn more about content restrictions in our {transparency_link}",
                        [
                          h._param(
                            "transparency_link",
                            i.jsx(c("PolarisFastLink.react"), {
                              href: m,
                              onClick: j,
                              children: "Transparency Center.",
                            })
                          ),
                        ]
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.blocksLoggingData,
        f = a.description,
        g = a.entityId,
        h = a.sessionId,
        m = a.title;
      a = a.userAvatarUrl;
      var p = {
        blocksLoggingData: e,
        containerModule: l,
        entityID: g,
        overlayLayout: 4,
        overlayType: "GEOBLOCK",
        sessionId: h,
      };
      j(function () {
        d(
          "PolarisInstagramMediaOverlayFalcoEvent"
        ).InstagramMediaOverlayFalcoEvent.log(function () {
          return d(
            "PolarisInstagramMediaOverlayFalcoEvent"
          ).InstagramMediaOverlayFalcoEvent.buildPayloadForLog(
            babelHelpers["extends"]({ event: "impression" }, p)
          );
        }),
          d("PolarisLogger").logPageView("httpGatedContentPage");
      }, []);
      var q = k(!1),
        r = q[0],
        s = q[1];
      q = function () {
        return s(!1);
      };
      var u = function () {
        d(
          "PolarisInstagramMediaOverlayFalcoEvent"
        ).InstagramMediaOverlayFalcoEvent.log(function () {
          return d(
            "PolarisInstagramMediaOverlayFalcoEvent"
          ).InstagramMediaOverlayFalcoEvent.buildPayloadForLog(
            babelHelpers["extends"](
              { customAction: "learn_more_link_click", event: "client_action" },
              p
            )
          );
        }),
          s(!0);
      };
      return i.jsxs(i.Fragment, {
        children: [
          i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            marginEnd: 10,
            marginStart: 10,
            marginTop: 12,
            position: "relative",
            children: [
              a != null &&
                a !== "" &&
                i.jsx(c("PolarisUserAvatar.react"), {
                  isLink: !1,
                  profilePictureUrl: a,
                  size: 70,
                }),
              i.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                padding: 1,
                position: "relative",
                children: i.jsx(c("PolarisIGCoreIcon"), {
                  alt: n,
                  icon: d("PolarisAssetManagerGlyphMapping").ICONS
                    .LOCK_OUTLINE_96,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: 7,
                marginTop: 7,
                position: "relative",
                children: i.jsx(c("IGDSText.react"), {
                  size: "headline2",
                  textAlign: "center",
                  weight: "semibold",
                  children: m,
                }),
              }),
              i.jsx(c("IGDSText.react").Label, {
                textAlign: "center",
                children: f,
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: 7,
                marginTop: 7,
                position: "relative",
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  label: o,
                  onClick: u,
                }),
              }),
              i.jsx(t, {
                blocksLoggingData: e,
                description: f,
                entityId: g,
                onClose: q,
                sessionId: h,
                show: r,
              }),
            ],
          }),
          b("cr:4197") != null &&
            i.jsx(b("cr:4197"), { analyticsContext: "httpGatedContentPage" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisHttpGatedContentPageWithShell.react",
  [
    "PolarisConditionalPageLayoutHandler.react",
    "PolarisHttpGatedContentPage.react",
    "PolarisPageTitle",
    "PolarisShell.react",
    "PolarisSizing",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.title;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["title"]);
      var e = Array.isArray(b) ? b.join("") : b;
      e = h.jsxs(c("PolarisShell.react"), {
        maxWidth: d("PolarisSizing").SITE_WIDTHS.wide,
        pageIdentifier: "httpGatedContentPage",
        children: [
          h.jsx(c("PolarisPageTitle"), { title: e }),
          h.jsx(
            c("PolarisHttpGatedContentPage.react"),
            babelHelpers["extends"]({ title: b }, a)
          ),
        ],
      });
      return c("PolarisConditionalPageLayoutHandler.react") != null
        ? h.jsx(c("PolarisConditionalPageLayoutHandler.react"), {
            mainComponent: e,
          })
        : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
