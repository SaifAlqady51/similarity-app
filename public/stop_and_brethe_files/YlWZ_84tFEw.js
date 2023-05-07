/*FB_PKG_DELIM*/

__d(
  "PolarisProfileOptionsModalQuery_instagramRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5774972105898577";
  },
  null
);
__d(
  "PolarisProfileOptionsModalQuery.graphql",
  ["PolarisProfileOptionsModalQuery_instagramRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "nodes",
              value: ["APPS_WEBSITES_SETTINGS"],
            },
          ],
          kind: "ScalarField",
          name: "should_show_nodes_in_accounts_center",
          storageKey:
            'should_show_nodes_in_accounts_center(nodes:["APPS_WEBSITES_SETTINGS"])',
        },
        c = { kind: "Literal", name: "interface", value: "IG_WEB" };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "PolarisProfileOptionsModalQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FXCALSettings",
              kind: "LinkedField",
              name: "fxcal_settings",
              plural: !1,
              selections: [a],
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "usePolarisFXCalSettings",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "PolarisProfileOptionsModalQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FXCALSettings",
              kind: "LinkedField",
              name: "fxcal_settings",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_user_see_centralized_settings_new_app_entrypoint",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_user_see_centralized_settings_new_app_ia",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_user_see_pre_transition_banner",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_user_see_old_sensitive_settings",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_user_see_payments_row_ac",
                  storageKey: null,
                },
                {
                  alias: "shouldShowAdsPreferences",
                  args: [
                    c,
                    {
                      kind: "Literal",
                      name: "selected_node_id",
                      value: "AD_PREFERENCES",
                    },
                  ],
                  kind: "ScalarField",
                  name: "should_show_node_in_accounts_center",
                  storageKey:
                    'should_show_node_in_accounts_center(interface:"IG_WEB",selected_node_id:"AD_PREFERENCES")',
                },
                {
                  alias: "shouldShowAdTopics",
                  args: [
                    c,
                    {
                      kind: "Literal",
                      name: "selected_node_id",
                      value: "AD_TOPICS",
                    },
                  ],
                  kind: "ScalarField",
                  name: "should_show_node_in_accounts_center",
                  storageKey:
                    'should_show_node_in_accounts_center(interface:"IG_WEB",selected_node_id:"AD_TOPICS")',
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_project_elevation_one_point_five_enabled",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("PolarisProfileOptionsModalQuery_instagramRelayOperation"),
          metadata: {},
          name: "PolarisProfileOptionsModalQuery",
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
  "IGDSUserFollowFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 48 48",
          children: h.jsx("path", {
            clipRule: "evenodd",
            d: "M46 41.5H18c-.8 0-1.5-.7-1.5-1.5v-1.5c0-5.5 4.5-10 10-10h11c5.5 0 10 4.5 10 10V40c0 .8-.7 1.5-1.5 1.5zm-14-16c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm-16 1h-4.5V31c0 .8-.7 1.5-1.5 1.5H8c-.8 0-1.5-.7-1.5-1.5v-4.5H2c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5h4.5V17c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v4.5H16c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5z",
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
  "IGDSUserFollowOutlineIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 48 48",
          children: h.jsx("path", {
            d: "M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z",
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
  "PolarisDesktopSponsoredPersistentCTA.react",
  [
    "fbt",
    "PolarisClickEventLoggerProvider.react",
    "PolarisClipsTabHelpers",
    "PolarisErrorBoundary.react",
    "PolarisIGCoreThumbnail",
    "PolarisNavigationHelpers",
    "PolarisODS",
    "PolarisPostFooterCTA.react",
    "PolarisPostUtils",
    "PolarisTrackingCodeProvider.react",
    "PolarisTrackingNodeProvider.react",
    "getPolarisPostIdFromNativeId",
    "polarisAdsSelectors",
    "polarisPostSelectors",
    "react",
    "usePolarisSelector",
    "usePolarisSponsoredPostCTAFooterDominantColor",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useLayoutEffect,
      k = b.useState;
    function l(a) {
      return i.jsx(c("PolarisIGCoreThumbnail"), {
        alt: h._("Image from sponsored post"),
        dimension: 32,
        src: a,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b,
        e = a.ctaAdditionalAnimation,
        f = a.mpk;
      a = a.trackingToken;
      var g = k(0),
        h = g[0],
        m = g[1],
        n = c("getPolarisPostIdFromNativeId")(f);
      g = d("polarisAdsSelectors").useFeedAdInfo(n, function (a) {
        return a;
      });
      var o = c("usePolarisSelector")(function (a) {
          return d("polarisPostSelectors").getPostById(a, n);
        }),
        p = o.isSidecar,
        q = o.src,
        r = o.thumbnailSrc;
      p =
        p === !0
          ? (p = d("PolarisPostUtils").getCurrentSidecarItemFromPost(o, 0)) ==
            null
            ? void 0
            : p.id
          : o.id;
      r = (r = r) != null ? r : q;
      q = c("usePolarisSponsoredPostCTAFooterDominantColor")({
        post: o,
        mediaId: p,
        isMediaRendered: !0,
      });
      o = q.ctaFooterViewpointRef;
      var s = c("useThrottled")(function () {
        m(d("PolarisNavigationHelpers").getNavBarDesktopWidth());
      }, d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE);
      j(
        function () {
          s();
          window.addEventListener("resize", s);
          return function () {
            window.removeEventListener("resize", s);
          };
        },
        [s]
      );
      if (p == null || r == null) return null;
      q =
        g == null
          ? void 0
          : (q = g.ctaItems) == null
          ? void 0
          : (q = q.get(p)) == null
          ? void 0
          : q.ctaLinkUrl;
      b =
        g == null
          ? void 0
          : (b = g.ctaItems) == null
          ? void 0
          : (b = b.get(p)) == null
          ? void 0
          : b.ctaLinkText;
      p =
        g == null
          ? void 0
          : (g = g.ctaItems) == null
          ? void 0
          : (g = g.get(p)) == null
          ? void 0
          : g.ctaDominantColor;
      g = function () {
        c("PolarisODS").incr("web.ads.feed.link_click");
      };
      return q != null && b != null
        ? i.jsx(c("PolarisTrackingCodeProvider.react"), {
            isSponsored: !0,
            m_pk: f,
            trackingToken: a,
            children: i.jsx(c("PolarisClickEventLoggerProvider.react"), {
              children: i.jsx(c("PolarisTrackingNodeProvider.react"), {
                trackingNode: 86,
                children: i.jsx("div", {
                  className: "xjnlgov xixxii4 xtzzx4i",
                  ref: o,
                  style: {
                    transform: "translateX(calc(-50% + " + h / 2 + "px))",
                  },
                  children: i.jsx(c("PolarisPostFooterCTA.react"), {
                    ctaAdditionalAnimation: e,
                    ctaDominantColor: p,
                    disableAnimation: !0,
                    externalURL: q,
                    forceBottomBorder: !1,
                    icon: l(r),
                    isActive: !0,
                    isForAd: !0,
                    isForPersistentCta: !0,
                    onClick: g,
                    showChevron: !0,
                    showRoundedBorder: !0,
                    text: b,
                  }),
                }),
              }),
            }),
          })
        : null;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("PolarisErrorBoundary.react"), {
        children: i.jsx(m, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.getThumbnail = l;
    g.PolarisDesktopSponsoredPersistentCTA = a;
  },
  98
);
__d(
  "PolarisMobileSponsoredPersistentCTA.react",
  [
    "PolarisClickEventLoggerProvider.react",
    "PolarisDesktopSponsoredPersistentCTA.react",
    "PolarisErrorBoundary.react",
    "PolarisODS",
    "PolarisPostFooterCTA.react",
    "PolarisPostUtils",
    "PolarisTrackingCodeProvider.react",
    "PolarisTrackingNodeProvider.react",
    "getPolarisPostIdFromNativeId",
    "polarisAdsSelectors",
    "polarisPostSelectors",
    "react",
    "usePolarisSelector",
    "usePolarisSponsoredPostCTAFooterDominantColor",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 60;
    function j(a) {
      var b,
        e = a.bottomOffset,
        f = a.ctaAdditionalAnimation,
        g = a.mpk;
      a = a.trackingToken;
      var j = c("getPolarisPostIdFromNativeId")(g),
        k = d("polarisAdsSelectors").useFeedAdInfo(j, function (a) {
          return a;
        }),
        l = c("usePolarisSelector")(function (a) {
          return d("polarisPostSelectors").getPostById(a, j);
        }),
        m = l.isSidecar,
        n = l.src,
        o = l.thumbnailSrc;
      m =
        m === !0
          ? (m = d("PolarisPostUtils").getCurrentSidecarItemFromPost(l, 0)) ==
            null
            ? void 0
            : m.id
          : l.id;
      o = (o = o) != null ? o : n;
      n = c("usePolarisSponsoredPostCTAFooterDominantColor")({
        post: l,
        mediaId: m,
        isMediaRendered: !0,
      });
      l = n.ctaFooterViewpointRef;
      if (m == null || o == null) return null;
      n =
        k == null
          ? void 0
          : (n = k.ctaItems) == null
          ? void 0
          : (n = n.get(m)) == null
          ? void 0
          : n.ctaLinkUrl;
      b =
        k == null
          ? void 0
          : (b = k.ctaItems) == null
          ? void 0
          : (b = b.get(m)) == null
          ? void 0
          : b.ctaLinkText;
      m =
        k == null
          ? void 0
          : (k = k.ctaItems) == null
          ? void 0
          : (k = k.get(m)) == null
          ? void 0
          : k.ctaDominantColor;
      k = function () {
        c("PolarisODS").incr("web.ads.feed.link_click");
      };
      e = { bottom: i + ((e = e) != null ? e : 0) + "px" };
      return n != null && b != null
        ? h.jsx(c("PolarisTrackingCodeProvider.react"), {
            isSponsored: !0,
            m_pk: g,
            trackingToken: a,
            children: h.jsx(c("PolarisClickEventLoggerProvider.react"), {
              children: h.jsx(c("PolarisTrackingNodeProvider.react"), {
                trackingNode: 86,
                children: h.jsx("div", {
                  className: "x1escl5o xixxii4 xtzzx4i xr6a42u x11uqc5h",
                  ref: l,
                  style: e,
                  children: h.jsx(c("PolarisPostFooterCTA.react"), {
                    ctaAdditionalAnimation: f,
                    ctaDominantColor: m,
                    disableAnimation: !0,
                    externalURL: n,
                    forceBottomBorder: !1,
                    icon: d(
                      "PolarisDesktopSponsoredPersistentCTA.react"
                    ).getThumbnail(o),
                    isActive: !0,
                    isForAd: !0,
                    isForPersistentCta: !0,
                    onClick: k,
                    showChevron: !0,
                    showRoundedBorder: !0,
                    text: b,
                  }),
                }),
              }),
            }),
          })
        : null;
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      return h.jsx(c("PolarisErrorBoundary.react"), {
        children: h.jsx(j, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisGuideGridItem.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisAspectRatio.react",
    "PolarisFastLink.react",
    "PolarisGuideConstants",
    "PolarisGuideLogger",
    "PolarisGuideStrings",
    "PolarisIGCoreBox",
    "PolarisLinkBuilder",
    "PolarisMediaHelpers",
    "PolarisMediaModel",
    "PolarisUA",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 3 / 4;
    function k(a) {
      if (a && a.type === d("PolarisGuideConstants").GuideMediaTypes.IG_MEDIA) {
        var b;
        b = (b = a.content) == null ? void 0 : b.ig_media_content;
        b = b
          ? d("PolarisMediaHelpers").getImageSrcSet(
              d("PolarisMediaHelpers").getImageCandidatesFromMediaItem(b)
            )
          : [];
        return b == null ? void 0 : (b = b[0]) == null ? void 0 : b.src;
      } else if (
        a &&
        a.type === d("PolarisGuideConstants").GuideMediaTypes.PRODUCT_IMAGE
      ) {
        a = (b = a.content) == null ? void 0 : b.product_image_content;
        b = c("PolarisMediaModel").getImageCandidates(
          c("nullthrows")(a == null ? void 0 : a.photo)
        );
        a = d("PolarisMediaHelpers").getImageSrcSet(b);
        return a == null ? void 0 : (b = a[0]) == null ? void 0 : b.src;
      }
      return null;
    }
    function a(a) {
      var b = a.className,
        e = a.guideSummary,
        f = a.onClick;
      if (e == null) return null;
      var g = e.id;
      a = e.mixed_cover_media;
      var h = e.num_items,
        l = e.owner,
        m = e.title;
      e = e.type;
      l = l.username;
      m = c("nullthrows")(m);
      l = c("nullthrows")(l);
      a = k(a);
      return i.jsx(c("PolarisFastLink.react"), {
        className: b,
        href: d("PolarisLinkBuilder").buildGuideLink(l, m, g),
        onClick: function (a) {
          d("PolarisGuideLogger").logGuideEntry({
            entryPoint: "profile",
            guideID: g,
          }),
            f && f(a, g);
        },
        children: i.jsxs(c("PolarisIGCoreBox"), {
          dangerouslySetClassName: { __className: "_ab0h" },
          overflow: "hidden",
          shape: "rounded",
          children: [
            i.jsx(c("PolarisAspectRatio.react"), {
              aspectRatio: j,
              className: "_ab0i",
              style: {
                backgroundImage: "url(" + ((b = a) != null ? b : "") + ")",
              },
            }),
            a != null && i.jsx("div", { className: "_ab0j" }),
            i.jsxs(c("IGDSBox.react"), {
              bottom: !0,
              left: !0,
              padding: 3,
              position: "absolute",
              width: "85%",
              children: [
                i.jsx(c("IGDSBox.react"), {
                  marginBottom: d("PolarisUA").isMobile() ? 0 : 1,
                  position: "relative",
                  children: i.jsx("div", {
                    className:
                      "_ab0k" +
                      (d("PolarisUA").isDesktop() ? " _ab0l" : "") +
                      (d("PolarisUA").isMobile() ? " _ab0m" : ""),
                    children: d(
                      "PolarisGuideStrings"
                    ).getGuideNumberOfItemsText(h, e),
                  }),
                }),
                i.jsx(c("IGDSBox.react"), {
                  position: "relative",
                  children: i.jsx("div", {
                    className:
                      "_ab0n" +
                      (d("PolarisUA").isDesktop() ? " _ab0o" : "") +
                      (d("PolarisUA").isMobile() ? " _ab0p" : ""),
                    children: m,
                  }),
                }),
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
  "PolarisProfileDirectMessage.react",
  [
    "IGDSButton.react",
    "PolarisDirectStrings",
    "PolarisInstagramProfileActionFalcoEvent",
    "react",
    "usePolarisDirectMessageClick",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = c("usePolarisDirectMessageClick")(a.userId, a.username),
        e = b[0];
      b = b[1];
      i(function () {
        j("button_impression", a);
      }, []);
      return h.jsx(c("IGDSButton.react"), {
        display: "block",
        isLoading: b,
        label: d("PolarisDirectStrings").MESSAGE_STRING,
        onClick: function () {
          j("button_click", a), e();
        },
        variant: "secondary",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a, b) {
      var d = {
        action: a,
        click_point: "message_button",
        containermodule: "profile",
        follow_status: b.isFollowing ? "following" : "not_following",
        ig_userid: (a = b.viewerId) != null ? a : "",
        profile_user_id: b.userId,
      };
      c("PolarisInstagramProfileActionFalcoEvent").log(function () {
        return d;
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreUserFollowFilledIcon",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 48 48",
          children: h.jsx("path", {
            clipRule: "evenodd",
            d: "M46 41.5H18c-.8 0-1.5-.7-1.5-1.5v-1.5c0-5.5 4.5-10 10-10h11c5.5 0 10 4.5 10 10V40c0 .8-.7 1.5-1.5 1.5zm-14-16c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm-16 1h-4.5V31c0 .8-.7 1.5-1.5 1.5H8c-.8 0-1.5-.7-1.5-1.5v-4.5H2c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5h4.5V17c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v4.5H16c.8 0 1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5z",
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
  "PolarisIGCoreUserFollowOutlineIcon",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 48 48",
          children: h.jsx("path", {
            d: "M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z",
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
  "PolarisProfileSuggestedUsersButton.react",
  [
    "IGDSBox.react",
    "IGDSIconButton.react",
    "PolarisGenericStrings",
    "PolarisIGCoreUserFollowFilledIcon",
    "PolarisIGCoreUserFollowOutlineIcon",
    "PolarisReactRedux",
    "PolarisSizing",
    "polarisRelationshipSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = function () {
        return !0;
      },
      j = {
        iconButtonBackground: {
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          display: "xt0psk2",
          backgroundColor: "x1gjpkn9",
          ":hover_backgroundColor": "xsz8vos",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.expanded,
        e = b === void 0 ? !1 : b,
        f = a.onCollapse,
        g = a.onExpand,
        k = a.userId;
      b = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisRelationshipSelectors").getRelationship(
          a.relationships,
          k
        );
      });
      a = d("polarisRelationshipSelectors").getFollowedByViewer(b);
      b = !a.stable;
      a = d("PolarisReactRedux").useSelector(function (a) {
        return a.displayProperties.viewportWidth;
      });
      a = a < d("PolarisSizing").SMALL_SCREEN_CUTOFF;
      var l = function () {
          e ? f() : g();
        },
        m =
          e === !0
            ? c("PolarisIGCoreUserFollowFilledIcon")
            : c("PolarisIGCoreUserFollowOutlineIcon");
      m = h.jsx(m, {
        alt: d("PolarisGenericStrings").DOWN_CHEVRON_ALT,
        color: i() ? "web-always-black" : "ig-primary-text",
        size: 16,
      });
      return h.jsx(c("IGDSBox.react"), {
        marginStart: a ? 1 : 2,
        position: "relative",
        width: 34,
        children: h.jsx(c("IGDSIconButton.react"), {
          isDisabled: b,
          onClick: l,
          xstyle: j.iconButtonBackground,
          children: m,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageActionButtons.react",
  [
    "IGDSBox.react",
    "PolarisConnectionsLogger",
    "PolarisFollowButtonContainer.react",
    "PolarisGroupProfileUtils",
    "PolarisProfileDirectMessage.react",
    "PolarisProfileSuggestedUsersButton.react",
    "PolarisReactRedux",
    "PolarisSizing",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.chainingExpanded,
        e = a.chainingFailed,
        f = a.chainingInteracted,
        g = a.chainingSuggestions,
        i = a.handleChainingCollapse,
        j = a.handleChainingExpand,
        k = a.handleRestrictClick,
        l = a.handleUnrestrictClick,
        m = a.isFollowing,
        n = a.isFromFollow,
        o = a.isPrivateProfile,
        p = a.isSmallScreen,
        q = a.user;
      a = a.viewer;
      var r = q.id,
        s = d("PolarisReactRedux").useSelector(function (a) {
          return a.displayProperties.viewportWidth;
        });
      s = s < d("PolarisSizing").SMALL_SCREEN_CUTOFF;
      var t = !m && q.isProfessionalAccount === !0,
        u = d("PolarisGroupProfileUtils").getIsUserGroupProfile(q);
      t = (m || t) && !u;
      e = !!a && (!e || f) && (g == null || g.length || f) && !o();
      g =
        t &&
        h.jsx(c("IGDSBox.react"), {
          flex: "grow",
          marginStart: s ? 1 : 2,
          overflow: "hidden",
          position: "relative",
          children: h.jsx(c("PolarisProfileDirectMessage.react"), {
            isFollowing: m,
            userId: r,
            username: q.username,
            viewerId: (a == null ? void 0 : a.id) || null,
          }),
        });
      return h.jsx(c("IGDSBox.react"), {
        direction: p ? "column" : "row",
        marginStart: p ? 0 : 5,
        maxWidth: p ? 250 : void 0,
        position: "relative",
        children: h.jsxs(c("IGDSBox.react"), {
          direction: "row",
          display: "flex",
          position: "relative",
          children: [
            h.jsx(c("IGDSBox.react"), {
              flex: "grow",
              marginStart: p ? 0 : 2,
              position: "relative",
              children: h.jsx(c("PolarisFollowButtonContainer.react"), {
                analyticsContext: d("PolarisConnectionsLogger")
                  .CONNECTIONS_CONTAINER_MODULES.profile,
                clickPoint: "user_profile_header",
                "data-testid": void 0,
                expanded: b,
                fullWidth: p && !t,
                handleRestrictClick: k,
                handleUnrestrictClick: l,
                hasDropdown: e,
                isUserGroupProfile: u,
                onExpand: j,
                shouldPromptToFollow: n,
                useFollowBack: !0,
                useIcon: !1,
                userId: r,
                username: (f = q.username) != null ? f : "",
              }),
            }),
            g,
            e &&
              h.jsx(c("PolarisProfileSuggestedUsersButton.react"), {
                expanded: b,
                onCollapse: i,
                onExpand: j,
                userId: r,
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
  "PolarisHasArchivePageEnabled",
  ["PolarisConfig", "PolarisUA", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return (
        d("PolarisUA").isDesktop() &&
        d("PolarisConfig").isLoggedIn() &&
        c("qex")._("230") === !0
      );
    }
    g.hasArchivePageEnabled = a;
  },
  98
);
__d(
  "PolarisHasArchivePageEnabledMobile",
  ["PolarisConfig", "PolarisUA", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return (
        d("PolarisUA").isMobile() &&
        d("PolarisConfig").isLoggedIn() &&
        c("qex")._("177") === !0
      );
    }
    g.hasArchivePageEnabledMobile = a;
  },
  98
);
__d(
  "PolarisProfilePageOwnActionButtons.react",
  [
    "IGDSBox.react",
    "IGDSButton.react",
    "PolarisBoostUtils",
    "PolarisHasArchivePageEnabled",
    "PolarisHasArchivePageEnabledMobile",
    "PolarisNavigationStrings",
    "PolarisQueryParamsHelper",
    "PolarisRoutes",
    "XPolarisArchivePageControllerRouteBuilder",
    "gkx",
    "nullthrows",
    "react",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i =
        "https://business.facebook.com/business/loginpage/?next=latest%3Fnav_ref%3Dig_web_return_path_button&login_options[0]=IG",
      j = 2;
    function a(a) {
      var b = a.handleProfileEditClick,
        e = a.isSmallScreen;
      a = a.viewer;
      var f = a == null ? void 0 : a.id,
        g = d("PolarisBoostUtils").useGetEligibilityTypeForBoostAdEntries({
          useCaseIsEligibleForBoostAd: f != null,
          postProductType: null,
        });
      a = g !== d("PolarisBoostUtils").BoostEligibilityEnum.INELIGIBLE;
      var k = d("PolarisQueryParamsHelper").getQueryParams(
          window.location.href
        ),
        l = function () {
          d("PolarisBoostUtils").handleAdToolsButtonClickWithLogging(
            c("nullthrows")(f),
            g,
            k == null ? void 0 : k.ref,
            c("uuid")(),
            "ad_tools_cta"
          );
        };
      return h.jsxs(c("IGDSBox.react"), {
        direction: e ? "column" : "row",
        display: "flex",
        flex: e ? "grow" : "shrink",
        marginStart: e ? 0 : 5,
        maxWidth: e ? 250 : void 0,
        position: "relative",
        children: [
          h.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            flex: "grow",
            position: "relative",
            children: [
              h.jsx(c("IGDSBox.react"), {
                flex: "grow",
                position: "relative",
                children: h.jsx(c("IGDSButton.react"), {
                  display: "block",
                  fullWidth: !1,
                  href: d("PolarisRoutes").PROFILE_EDIT_PATH,
                  label: d("PolarisNavigationStrings").PROFILE_EDIT_TEXT,
                  onClick: b,
                  variant: "secondary",
                }),
              }),
              (d("PolarisHasArchivePageEnabled").hasArchivePageEnabled() ||
                d(
                  "PolarisHasArchivePageEnabledMobile"
                ).hasArchivePageEnabledMobile()) &&
                h.jsx(c("IGDSBox.react"), {
                  flex: "grow",
                  marginStart: j,
                  position: "relative",
                  children: h.jsx(c("IGDSButton.react"), {
                    display: "block",
                    fullWidth: !1,
                    href: c(
                      "XPolarisArchivePageControllerRouteBuilder"
                    ).buildURL({}),
                    label: d("PolarisNavigationStrings")
                      .PROFILE_VIEW_ARCHIVE_TEXT,
                    variant: "secondary",
                  }),
                }),
            ],
          }),
          a &&
            h.jsx(c("IGDSBox.react"), {
              flex: "grow",
              marginStart: e ? 0 : j,
              marginTop: e ? j : 0,
              position: "relative",
              children: h.jsx(c("IGDSButton.react"), {
                display: "block",
                fullWidth: !1,
                label: d("PolarisNavigationStrings")
                  .ADS_TOOLS_META_BUSINESS_SUITE_ADS_TAB_REDIRECT_TEXT,
                onClick: l,
                target: "_blank",
                variant: "secondary",
              }),
            }),
          c("gkx")("1139") &&
            h.jsx(c("IGDSBox.react"), {
              flex: "grow",
              marginStart: e ? 0 : j,
              marginTop: e ? j : 0,
              position: "relative",
              children: h.jsx(c("IGDSButton.react"), {
                display: "block",
                fullWidth: !1,
                href: i,
                label: d("PolarisNavigationStrings")
                  .FACEBOOK_BUSINESS_SUITE_REDIRECT_TEXT,
                target: "_blank",
                variant: "secondary",
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
  "PolarisProfileActionButtons.react",
  [
    "PolarisProfilePageActionButtons.react",
    "PolarisProfilePageOwnActionButtons.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.chainingExpanded,
        d = a.chainingFailed,
        e = a.chainingInteracted,
        f = a.chainingSuggestions,
        g = a.countryBlock,
        i = a.handleChainingCollapse,
        j = a.handleChainingExpand,
        k = a.handleProfileEditClick,
        l = a.handleRestrictClick,
        m = a.handleUnrestrictClick,
        n = a.isFollowing,
        o = a.isFromFollow,
        p = a.isPrivateProfile,
        q = a.isSmallScreen,
        r = a.sessionId,
        s = a.user;
      a = a.viewer;
      if (a === s)
        return h.jsx(c("PolarisProfilePageOwnActionButtons.react"), {
          handleProfileEditClick: k,
          isSmallScreen: q,
          viewer: a,
        });
      else if (!g)
        return h.jsx(c("PolarisProfilePageActionButtons.react"), {
          chainingExpanded: b,
          chainingFailed: d,
          chainingInteracted: e,
          chainingSuggestions: f,
          handleChainingCollapse: i,
          handleChainingExpand: j,
          handleRestrictClick: l,
          handleUnrestrictClick: m,
          isFollowing: n,
          isFromFollow: o,
          isPrivateProfile: function () {
            return p();
          },
          isSmallScreen: q,
          sessionId: r,
          user: s,
          viewer: a,
        });
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Posts");
    g.DEFAULT_POSTS_TEXT = a;
  },
  98
);
__d(
  "PolarisAsyncSimilarAccountsModal",
  ["JSResourceForInteraction", "PolarisAsyncComponent", "xigRequireInterop"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({
      displayName: "SimilarAccountsModal",
      resolve: function () {
        return c("JSResourceForInteraction")(
          "PolarisSimilarAccountsModal.react"
        )
          .__setRef("PolarisAsyncSimilarAccountsModal")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          });
      },
    });
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCountryBlock.react",
  ["cx", "fbt", "PolarisAdvisoryMessage.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a() {
      return j.jsx(c("PolarisAdvisoryMessage.react"), {
        className: "_ab02",
        children: j.jsx("h2", {
          className: "_ab03",
          children: i._(
            "Access to this account has been restricted in your country for legal reasons"
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileSuggestedUsers.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisConnectionsLogger",
    "PolarisFollowChainingList.react",
    "PolarisSuggestedUserList.react",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.advisoryMessage,
        e = a.analyticsContext,
        f = a.emptyState,
        g = a.isSmallScreen,
        h = a.onSeeAllClicked,
        j = a.seeAllHref;
      a = a.users;
      return !a || a.length === 0
        ? f === null
          ? f
          : null
        : a &&
            a.length > 0 &&
            i.jsxs(i.Fragment, {
              children: [
                b,
                i.jsx(c("IGDSBox.react"), {
                  color: "primaryBackground",
                  flex: "grow",
                  paddingY: d("PolarisUA").isMobile() ? 3 : 5,
                  position: "relative",
                  children: i.jsx(c("PolarisFollowChainingList.react"), {
                    analyticsContext: e,
                    chainingSuggestions:
                      a == null
                        ? void 0
                        : a.map(function (a) {
                            return {
                              fullName: a.fullName,
                              id: a.id,
                              isVerified: a.isVerified,
                              profilePictureUrl: a.profilePictureUrl,
                              suggestionDescription: a.suggestionDescription,
                              username: a.username,
                            };
                          }),
                    className: "_aa-x",
                    impressionModule: d("PolarisConnectionsLogger").VIEW_MODULES
                      .web_profile_chaining,
                    isSmallScreen: g,
                    onSeeAllClicked: h,
                    seeAllHref: j,
                    title: d("PolarisSuggestedUserList.react").HEADER_TEXT,
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
  "PolarisEmptyProfileOtherUsers.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSDivider.react",
    "IGDSText.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisConnectionsLogger",
    "PolarisFetchingSuggestedUserList.react",
    "PolarisIGCoreBorderedIcon",
    "PolarisLinkBuilder",
    "PolarisProfileSuggestedUsers.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("No Posts Yet");
    function k(a) {
      var b = a.size;
      a = a.weight;
      return i.jsx(c("PolarisIGCoreBorderedIcon"), {
        alt: h._("Camera"),
        icon: d("PolarisAssetManagerGlyphMapping").ICONS
          .CAMERA_OUTLINE_24_GREY9,
        size: b,
        weight: a,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      a = a.username;
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        color: "primaryBackground",
        direction: "row",
        paddingX: 2,
        paddingY: 1,
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            flex: "none",
            position: "relative",
            children: i.jsx(k, { size: 44, weight: "normal" }),
          }),
          i.jsxs(c("IGDSBox.react"), {
            flex: "shrink",
            padding: 2,
            position: "relative",
            children: [
              i.jsx(c("IGDSBox.react"), {
                paddingY: 1,
                position: "relative",
                children: i.jsx(c("IGDSText.react").BodyEmphasized, {
                  children: j,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                paddingY: 1,
                position: "relative",
                children: i.jsx(c("IGDSText.react").Body, {
                  color: "secondaryText",
                  children: h._(
                    "When {username} posts, you'll see their photos and videos here.",
                    [h._param("username", a)]
                  ),
                }),
              }),
            ],
          }),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      return i.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        position: "relative",
        children: i.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          marginEnd: 11,
          marginStart: 11,
          marginTop: 15,
          position: "relative",
          children: [
            i.jsx(k, { size: 62, weight: "thick" }),
            i.jsx(c("IGDSBox.react"), {
              marginBottom: 12,
              marginTop: 8,
              position: "relative",
              children: i.jsx(c("IGDSText.react").Headline1, { children: j }),
            }),
          ],
        }),
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.analyticsContext,
        e = a.chainingSuggestions,
        f = a.isSmallScreen,
        g = a.onSeeAllClicked;
      a = a.username;
      return a == null
        ? i.jsx(m, {})
        : i.jsxs(i.Fragment, {
            children: [
              f
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx(l, { username: a }),
                      i.jsx(c("IGDSDivider.react"), {}),
                    ],
                  })
                : i.jsx(m, {}),
              e != null && e.length > 0
                ? i.jsx(c("PolarisProfileSuggestedUsers.react"), {
                    analyticsContext: b,
                    isSmallScreen: f,
                    onSeeAllClicked: g,
                    seeAllHref:
                      d("PolarisLinkBuilder").buildUserSimilarAccountsLink(a),
                    users: e,
                  })
                : i.jsx(c("PolarisFetchingSuggestedUserList.react"), {
                    analyticsContext: b,
                    variant: "GRID",
                    viewModule: d("PolarisConnectionsLogger").VIEW_MODULES
                      .profile,
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
  "PolarisProfileContext.react",
  ["cx", "fbt", "IGDSText.react", "PolarisFastLink.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isGroupProfile,
        d = b === void 0 ? !1 : b,
        e = a.mutualFollowers;
      b = a.username;
      a = function () {
        if (!e) return null;
        var a = e.additional_count,
          b = e.usernames;
        switch (b.length) {
          case 1:
            return i._(
              { 0: "Members include {username}", 1: "Followed by {username}" },
              [
                i._enum(d ? "0" : "1", {
                  0: "Members include",
                  1: "Followed by",
                }),
                i._param("username", f(b[0])),
              ]
            );
          case 2:
            return i._(
              {
                0: "Members include {username1} and {username2}",
                1: "Followed by {username1} and {username2}",
              },
              [
                i._enum(d ? "0" : "1", {
                  0: "Members include",
                  1: "Followed by",
                }),
                i._param("username1", f(b[0])),
                i._param("username2", f(b[1])),
              ]
            );
          case 3:
            var c = i._(
              {
                0: "Members include {username1}, {username2}, {username3} + {count} more",
                1: "Followed by {username1}, {username2}, {username3} + {count} more",
              },
              [
                i._enum(d ? "0" : "1", {
                  0: "Members include",
                  1: "Followed by",
                }),
                i._param("username1", f(b[0])),
                i._param("username2", f(b[1])),
                i._param("username3", f(b[2])),
                i._param("count", a),
              ]
            );
            return a && a > 0
              ? c
              : i._(
                  {
                    0: "Members include {username1}, {username2}, and {username3}",
                    1: "Followed by {username1}, {username2}, and {username3}",
                  },
                  [
                    i._enum(d ? "0" : "1", {
                      0: "Members include",
                      1: "Followed by",
                    }),
                    i._param("username1", f(b[0])),
                    i._param("username2", f(b[1])),
                    i._param("username3", f(b[2])),
                  ]
                );
          default:
            return null;
        }
      };
      var f = function (a) {
        return a == null
          ? null
          : j.jsx("span", { className: "_aaai", children: a });
      };
      a = a();
      a = a
        ? j.jsx("span", {
            className: "_aaaj",
            children: j.jsx(c("IGDSText.react"), {
              color: "secondaryText",
              size: "footnote",
              weight: "medium",
              children: a,
            }),
          })
        : null;
      b = d
        ? "/" + b + "/members/mutualOnly"
        : "/" + b + "/followers/mutualOnly";
      return a
        ? j.jsx(c("PolarisFastLink.react"), {
            className: "_aaai",
            href: b,
            children: a,
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileEmptyStateStrings",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = h._("No Photos");
    b = h._("Photos of you");
    c = h._("When people tag you in photos, they'll appear here.");
    e = h._("Save");
    f = h._(
      "Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved."
    );
    d = h._("Start Saving");
    var i = h._("Save photos and videos to your collection."),
      j = h._("Add to collection"),
      k = h._("Share Photos"),
      l = h._("When you share photos, they will appear on your profile.");
    h = h._("Share your first photo");
    g.EMPTY_TAGGED_NO_PHOTOS_HEADER = a;
    g.EMPTY_TAGGED_PHOTOS_OF_YOU_HEADER = b;
    g.EMPTY_TAGGED_BODY = c;
    g.EMPTY_SAVE_HEADER = e;
    g.EMPTY_SAVE_BODY = f;
    g.EMPTY_SAVED_COLLECTION_HEADER = d;
    g.EMPTY_SAVED_COLLECTION_BODY = i;
    g.EMPTY_SAVED_COLLECTION_CTA = j;
    g.EMPTY_SHARE_PHOTOS_HEADER = k;
    g.EMPTY_SHARE_PHOTOS_TEXT = l;
    g.EMPTY_SHARE_PHOTOS_LINK = h;
  },
  98
);
__d(
  "PolarisProfileEmptyStateTypes",
  ["cx", "PolarisProfileEmptyStateStrings", "PolarisUA", "keyMirror", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d("react");
    a = c("keyMirror")({
      SAVE: null,
      SAVED_COLLECTION: null,
      TAGGED: null,
      PHOTOS: null,
      OWN_PROFILE_TAGGED: null,
    });
    b = {
      bodyText: d("PolarisProfileEmptyStateStrings").EMPTY_SAVE_BODY,
      headerText: d("PolarisProfileEmptyStateStrings").EMPTY_SAVE_HEADER,
      icon: "_9zlg",
    };
    e = {
      bodyText: d("PolarisProfileEmptyStateStrings")
        .EMPTY_SAVED_COLLECTION_BODY,
      buttonText: d("PolarisUA").isDesktop()
        ? d("PolarisProfileEmptyStateStrings").EMPTY_SAVED_COLLECTION_CTA
        : void 0,
      headerText: d("PolarisProfileEmptyStateStrings")
        .EMPTY_SAVED_COLLECTION_HEADER,
      icon: "_9zlg",
    };
    f = {
      headerText: d("PolarisProfileEmptyStateStrings")
        .EMPTY_TAGGED_NO_PHOTOS_HEADER,
      icon: "_9zlh",
    };
    h = {
      bodyText: d("PolarisProfileEmptyStateStrings").EMPTY_TAGGED_BODY,
      headerText: d("PolarisProfileEmptyStateStrings")
        .EMPTY_TAGGED_PHOTOS_OF_YOU_HEADER,
      icon: "_9zlh",
    };
    c = {
      bodyText: d("PolarisProfileEmptyStateStrings").EMPTY_SHARE_PHOTOS_TEXT,
      headerText: d("PolarisProfileEmptyStateStrings")
        .EMPTY_SHARE_PHOTOS_HEADER,
      icon: "_9zli",
      buttonText: d("PolarisProfileEmptyStateStrings").EMPTY_SHARE_PHOTOS_LINK,
    };
    b =
      ((d = {}),
      (d[a.SAVE] = b),
      (d[a.SAVED_COLLECTION] = e),
      (d[a.TAGGED] = f),
      (d[a.OWN_PROFILE_TAGGED] = h),
      (d[a.PHOTOS] = c),
      d);
    g.PROFILE_EMPTY_STATE_KEYS = a;
    g.PROFILE_EMPTY_STATE_KEY_MAPPING = b;
  },
  98
);
__d(
  "PolarisProfileEmptyState.react",
  [
    "CometPressable.react",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSText.react",
    "PolarisProfileEmptyStateTypes",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.buttonClick,
        e = a.iconClick;
      a = a.type;
      a = d("PolarisProfileEmptyStateTypes").PROFILE_EMPTY_STATE_KEY_MAPPING[a];
      var f = a.bodyText,
        g = a.buttonText,
        i = a.headerText;
      a = a.icon;
      return h.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        position: "relative",
        children: h.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          marginBottom: 15,
          marginEnd: 11,
          marginStart: 11,
          marginTop: 15,
          maxWidth: 350,
          position: "relative",
          children: [
            e
              ? h.jsx(c("CometPressable.react"), {
                  "aria-label": "empty-state-icon-button",
                  onPress: e,
                  overlayDisabled: !0,
                  children: h.jsx("div", { className: a }),
                })
              : h.jsx("div", { className: a }),
            h.jsx(c("IGDSBox.react"), {
              marginBottom: 6,
              marginTop: 6,
              position: "relative",
              children: h.jsx(c("IGDSText.react").Headline1, {
                textAlign: "center",
                children: i,
              }),
            }),
            f !== null &&
              h.jsx(c("IGDSBox.react"), {
                marginBottom: 6,
                position: "relative",
                children: h.jsx(c("IGDSText.react").Body, {
                  textAlign: "center",
                  children: f,
                }),
              }),
            b !== null &&
              g != null &&
              h.jsx(c("IGDSButton.react"), {
                label: g,
                onClick: b,
                variant: "primary_link",
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
  "PolarisProfileMediaBrowser.react",
  [
    "PolarisConfig",
    "PolarisMediaBrowser.react",
    "PolarisProfilePostsActionConstants",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.PostGridItem,
        e = a.children,
        f = a.className,
        g = a.endCursor,
        i = a.hasAutoload,
        j = a.hidePhotoComponentRenderer,
        k = a.isFetching,
        l = a.isOldestPostLoaded,
        m = a.isPostNumLimited,
        n = a.maxPostsToDisplay,
        o = a.mediaLinkBuilder,
        p = a.onClick,
        q = a.onIntentClick,
        r = a.onPostImpression,
        s = a.onRequestFirst,
        t = a.onRequestNext,
        u = a.overscanRowsCount,
        v = a.photoComponentRenderer,
        w = a.postCount,
        x = a.posts,
        y = a.shouldSpawnPostModal;
      y = y === void 0 ? !0 : y;
      var z = a.topPosts,
        A = a.user;
      a = a.viewportWidth;
      var B = function (a) {
        if (k || l) return;
        a <= d("PolarisProfilePostsActionConstants").PAGE_SIZE
          ? s(A.id)
          : t(A.id);
      };
      return h.jsx(c("PolarisMediaBrowser.react"), {
        allowSampledScrollLogging: !0,
        analyticsContext:
          d("PolarisConfig").getViewerId() === A.id
            ? "selfProfilePage"
            : "profilePage",
        className: f,
        endCursor: g,
        hidePhotoComponentRenderer: j,
        isFetching: k,
        isMostRecentPostNumLimited: m,
        isOldestPostLoaded: l,
        maxPostsToDisplay: n,
        mediaLinkBuilder: o,
        onClick: p,
        onImpression: r,
        onIntentClick: q,
        onPostLoadTargetChange: B,
        overscanRowsCount: u,
        photoComponentRenderer: v,
        postCount: w,
        PostGridItem: b,
        posts: x,
        profileUser: A,
        scrollLoadingEnabled: i != null || (x == null ? void 0 : x.length) > 12,
        shouldSpawnPostModal: y,
        topPosts: z,
        viewportWidth: a,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisProfileOptionsConfig",
  [
    "fbt",
    "PolarisBugReportContext.react",
    "PolarisGenericStrings",
    "PolarisNavigationStrings",
    "PolarisNavigationUtils",
    "PolarisRoutes",
    "PolarisUA",
    "gkx",
    "justknobx",
    "polarisGetPostFromGraphMediaInterface",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useContext;
    function a(a, b, e, f, g, j, k, l, m, n, o, p, q, r) {
      var s = i(d("PolarisBugReportContext.react").PolarisBugReportContext);
      j = [];
      a ||
        j.push({
          key: "change_password",
          title: d("PolarisNavigationStrings").CHANGE_PASSWORD_TEXT,
          url: d("PolarisRoutes").PASSWORD_CHANGE_PATH,
        });
      b &&
        j.push({
          key: "apps_and_websites",
          title: d("PolarisNavigationStrings").APPS_AND_WEBSITES_TEXT,
          url: d("PolarisRoutes").MANAGED_ACCESS_PATH,
        });
      j.push({
        key: "notifications",
        title: d("PolarisNavigationStrings").NOTIFICATIONS_TEXT,
        url: d("PolarisRoutes").EMAIL_SETTINGS_PATH,
      });
      e && f
        ? j.push({
            key: "settings_and_privacy",
            title: d("PolarisNavigationStrings").SETTINGS_AND_PRIVACY_TEXT,
            url: d("PolarisRoutes").WHO_CAN_SEE_YOUR_CONTENT_PATH,
          })
        : j.push({
            key: "privacy_and_security",
            title: e
              ? d("PolarisNavigationStrings").PRIVACY_TEXT
              : d("PolarisNavigationStrings").PRIVACY_AND_SECURITY_TEXT,
            url: d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH,
          });
      j.splice(1, 0, {
        key: "nametag",
        url: d("PolarisRoutes").NAMETAG_LANDING_PATH,
        title: d("PolarisNavigationStrings").NAMETAG_TEXT,
      });
      g === !0 &&
        j.push({
          key: "supervision",
          title: d("PolarisNavigationStrings").SUPERVISION_TEXT,
          url: d("PolarisRoutes").SUPERVISION_PATH,
        });
      !c("justknobx")._("71") &&
        !k &&
        j.splice(6, 0, {
          key: "login_activity",
          url: d("PolarisRoutes").LOGIN_ACTIVITY_PATH,
          title: d("PolarisNavigationStrings").LOGIN_ACTIVITY_TEXT,
        });
      !d("PolarisUA").isMobile() &&
        c("gkx")("784") &&
        j.splice(1, 0, {
          key: "creator_marketplace",
          url: void 0,
          onClick: function () {
            d("PolarisNavigationUtils").openExternalURL(
              d("PolarisRoutes").CREATOR_MARKETPLACE_PATH
            );
          },
          title: d("PolarisNavigationStrings")
            .CREATOR_MARKETPLACE_SETTINGS_TEXT,
        });
      l === !0 &&
        j.splice(1, 0, {
          key: "professional_account",
          url: d("PolarisRoutes").PROFESSIONAL_ACCOUNT_SETTINGS_PATH,
          title: d("PolarisNavigationStrings")
            .PROFESSIONAL_ACCOUNT_SETTINGS_TEXT,
        });
      !m &&
        !e &&
        j.push({
          key: "emails_sent",
          url: d("PolarisRoutes").EMAILS_SENT_PATH,
          title: d("PolarisNavigationStrings").EMAILS_SENT_TEXT,
        });
      (s == null ? void 0 : s.canUseBugReport) &&
        !(c("justknobx")._("219") && d("PolarisUA").isDesktop()) &&
        j.push({
          key: "report_problem",
          onClick: function () {
            n(), s == null ? void 0 : s.openModal("desktop_profile_settings");
          },
          title: d("PolarisNavigationStrings").REPORT_PROBLEM_TEXT,
        });
      d("polarisGetPostFromGraphMediaInterface").getUserIsEmbeddable(o) &&
        c("gkx")("4823") &&
        j.push({ key: "embed", title: h._("Embed"), onClick: p });
      j.push({
        key: "log_out",
        onClick: q,
        title: d("PolarisNavigationStrings").LOG_OUT_TEXT,
      });
      j.push({
        key: "cancel",
        title: d("PolarisGenericStrings").CANCEL_TEXT,
        onClick: r,
      });
      return j;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileOptionsModal.react",
  [
    "fbt",
    "CometRelay",
    "IGCoreDialog",
    "PolarisAboutThisAccountUtils",
    "PolarisBlockDialogContainer.react",
    "PolarisFXSettingAvailable",
    "PolarisGenericStrings",
    "PolarisMonitorErrors",
    "PolarisNavigationStrings",
    "PolarisProfileOptionsModalQuery.graphql",
    "PolarisReportUnderLawDialogItem.react",
    "PolarisUA",
    "Promise",
    "gkx",
    "polarisGetPostFromGraphMediaInterface",
    "polarisIsUserLoggedIn",
    "polarisUnexpected",
    "react",
    "useCometRouterDispatcher",
    "usePolarisFXCalSettings.react",
    "usePolarisProfileOptionsConfig",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useEffect,
      l = e.useState;
    function m(a, b, c) {
      a = a
        ? {
            key: "unrestrict_user",
            onClick: c,
            text: d("PolarisNavigationStrings").UNRESTRICT_USER_BUTTON_TEXT,
          }
        : {
            key: "restrict_user",
            onClick: b,
            text: d("PolarisNavigationStrings").RESTRICT_USER_BUTTON_TEXT,
          };
      c = a.key;
      b = a.onClick;
      a = a.text;
      return j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        { color: "ig-error-or-destructive", onClick: b, children: a },
        c
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      return j.jsx(
        d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem,
        { contentId: a },
        "report_under_law_dialog_item"
      );
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      return j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        { onClick: a, children: h._("Embed") },
        "embed"
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      return j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        { onClick: a, children: h._("About this account") },
        "ata"
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      var b = a.parentProps,
        e = b.isBlockedByViewer,
        f = b.isRestrictedByViewer,
        g = b.onAboutThisAccountClick,
        h = b.onClose,
        i = b.onEmbedClick,
        k = b.onReportUserClick,
        l = b.onRestrictUserClick,
        q = b.onUnrestrictUserClick;
      b = b.user;
      k = j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        {
          color: "ig-error-or-destructive",
          onClick: k,
          children: d("PolarisNavigationStrings").REPORT_USER_TEXT,
        },
        "report_user"
      );
      var r = n(b.id);
      a = j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        {
          color: "ig-error-or-destructive",
          onClick: a.onBlockToggle,
          children: e
            ? d("PolarisNavigationStrings").UNBLOCK_USER_TEXT
            : d("PolarisNavigationStrings").BLOCK_USER_TEXT,
        },
        e ? "unblock_user" : "block_user"
      );
      e = m(f, l, q);
      f = j.jsx(
        d("IGCoreDialog").IGCoreDialogItem,
        { onClick: h, children: d("PolarisGenericStrings").CANCEL_TEXT },
        "cancel"
      );
      l = [a, e, k];
      d("polarisIsUserLoggedIn").isUserLoggedIn() || (l = [r]);
      d("polarisGetPostFromGraphMediaInterface").getUserIsEmbeddable(b) &&
        c("gkx")("4823") &&
        l.push(o(i));
      d("PolarisAboutThisAccountUtils").getIsEligibleForATA(b) && l.push(p(g));
      l.push(f);
      return j.jsx(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: h,
        children: l,
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      var b = a.parentProps,
        e = b.isSupervisionEnabled,
        f = b.onClose,
        g = b.onEmbedClick,
        h = b.onLogoutUserClick,
        i = b.onReportIssueClick;
      b = b.user;
      e = c("usePolarisProfileOptionsConfig")(
        a.shouldHidePasswordChange,
        a.shouldShowAppsAndWebsites,
        a.shouldShowNewAppIA,
        a.projectElevationEnabled,
        e,
        a.shouldShowSensitiveSettings,
        a.shouldHideLoginActivities,
        a.parentProps.isProfessionalAccount,
        a.shouldHideSecurityEmails,
        i,
        b,
        g,
        h,
        f
      );
      var k = c("useCometRouterDispatcher")();
      a = e.map(function (a) {
        var b = a.key,
          c = a.onClick,
          e = a.title,
          f = a.url;
        a =
          f != null
            ? function () {
                k == null ? void 0 : k.go(f, {});
              }
            : void 0;
        c = c != null ? c : void 0;
        return j.jsx(
          d("IGCoreDialog").IGCoreDialogItem,
          { onClick: a || c, children: e },
          b
        );
      });
      d("PolarisUA").isMobile() &&
        c("polarisUnexpected")(
          "This logout button should not be available on mobile"
        );
      return j.jsx(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: f,
        children: a,
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s() {
      return b("Promise").all([
        d("PolarisFXSettingAvailable").shouldHideAccountsCenterSettingOnNative(
          "SECURITY_EMAILS"
        ),
      ]);
    }
    function a(a) {
      var e = l(!1),
        f = e[0],
        g = e[1];
      e = l(!1);
      var h = e[0],
        m = e[1];
      e = d("CometRelay").useLazyLoadQuery(
        i !== void 0 ? i : (i = b("PolarisProfileOptionsModalQuery.graphql")),
        {}
      );
      var n = c("usePolarisFXCalSettings.react")({ frag_key: e }),
        o = n.projectElevationEnabled,
        p = n.shouldHideLoginActivities,
        t = n.shouldHidePasswordChange,
        u = n.shouldShowNewAppIA;
      n = n.shouldShowSensitiveSettings;
      e =
        !(e == null
          ? void 0
          : (e = e.fxcal_settings) == null
          ? void 0
          : e.should_show_nodes_in_accounts_center.includes(
              "apps_websites_settings".toUpperCase()
            )) || n;
      k(function () {
        s()
          .then(function (a) {
            g(a[2]);
          })
          ["catch"](function (a) {
            d("PolarisMonitorErrors").logError(a);
          });
      }, []);
      var v = function () {
          m(!0);
        },
        w = function () {
          m(!1), a.onClose();
        };
      if (h)
        return j.jsx(c("PolarisBlockDialogContainer.react"), {
          onClose: w,
          relationship: a.relationship,
          userId: a.user.id,
          username: a.user.username,
        });
      else if (a.isOwnProfile)
        return j.jsx(r, {
          parentProps: a,
          projectElevationEnabled: o,
          shouldHideLoginActivities: p,
          shouldHidePasswordChange: t,
          shouldHideSecurityEmails: f,
          shouldShowAppsAndWebsites: e,
          shouldShowNewAppIA: u,
          shouldShowSensitiveSettings: n,
        });
      else return j.jsx(q, { onBlockToggle: v, parentProps: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileOptionsModalContainer.react",
  [
    "PolarisProfileOptionsModal.react",
    "PolarisReactRedux",
    "polarisRelationshipSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a, b) {
      var c = a.relationships;
      c = d("polarisRelationshipSelectors").getRelationship(c, b.user.id);
      return {
        isBlockedByViewer: d("polarisRelationshipSelectors").isBlockedByViewer(
          c
        ),
        isOwnProfile: a.users.viewerId === b.user.id,
        isRestrictedByViewer: d(
          "polarisRelationshipSelectors"
        ).isRestrictedByViewer(c),
        relationship: c,
      };
    }
    b = d("PolarisReactRedux").connect(a)(
      c("PolarisProfileOptionsModal.react")
    );
    g["default"] = b;
  },
  98
);
__d(
  "PolarisAsyncFollowListModal",
  ["JSResourceForInteraction", "PolarisAsyncComponent", "xigRequireInterop"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({
      displayName: "FollowListModal",
      resolve: function () {
        return c("JSResourceForInteraction")("PolarisFollowListModal.react")
          .__setRef("PolarisAsyncFollowListModal")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          });
      },
    });
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIgWebClipsAudioPageMediaOpenFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_web_clips_audio_page_media_open",
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
  "PolarisIgWebClipsAudioPageVisitFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_web_clips_audio_page_visit",
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
  "PolarisIgWebClipsProfileTabMediaOpenFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_web_clips_profile_tab_media_open",
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
  "PolarisIgWebClipsProfileTabOpenFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_web_clips_profile_tab_open",
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
  "PolarisClipsLogger",
  [
    "PolarisIgWebClipsAudioPageMediaOpenFalcoEvent",
    "PolarisIgWebClipsAudioPageVisitFalcoEvent",
    "PolarisIgWebClipsProfileTabMediaOpenFalcoEvent",
    "PolarisIgWebClipsProfileTabOpenFalcoEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.pageID,
        d = a.userID;
      c("PolarisIgWebClipsProfileTabOpenFalcoEvent").log(function () {
        return { ig_user_id: parseInt(d, 10), page_id: b };
      });
    }
    function b(a) {
      var b = a.mediaID,
        d = a.pageID,
        e = a.userID;
      c("PolarisIgWebClipsProfileTabMediaOpenFalcoEvent").log(function () {
        return { ig_user_id: parseInt(e, 10), page_id: d, media_id: b };
      });
    }
    function d(a) {
      var b = a.audioClusterID,
        d = a.isPageRestricted,
        e = a.originalSoundID,
        f = a.pageID,
        g = a.responseStatus,
        h = a.userID;
      c("PolarisIgWebClipsAudioPageVisitFalcoEvent").log(function () {
        return {
          ig_user_id: parseInt(h, 10),
          page_id: f,
          audio_cluster_id: b,
          original_sound_id: e,
          is_page_restricted: d,
          response_status: g,
        };
      });
    }
    function e(a) {
      var b = a.mediaID,
        d = a.pageID,
        e = a.userID;
      c("PolarisIgWebClipsAudioPageMediaOpenFalcoEvent").log(function () {
        return { ig_user_id: parseInt(e, 10), page_id: d, media_id: b };
      });
    }
    g.logClipsTabOpen = a;
    g.logClipsTabMediaOpen = b;
    g.logClipsAudioPageVisit = d;
    g.logClipsAudioPageMediaOpen = e;
  },
  98
);
__d(
  "PolarisIGCoreGuidesPanoOutlineIcon",
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
            d: "M22.626 1.22a1.002 1.002 0 0 0-.843-.196L12 3.198 2.217 1.024A1 1 0 0 0 1 2v17.778a1 1 0 0 0 .783.976l10 2.222a.994.994 0 0 0 .214.024h.005a1.01 1.01 0 0 0 .215-.024l10-2.222a1 1 0 0 0 .783-.976V2a1.001 1.001 0 0 0-.374-.78ZM11 20.753l-8-1.777V3.246l8 1.778Zm10-1.777-8 1.777V5.023l8-1.776Zm-5.252-7.645a.987.987 0 0 0 .217-.024l2.5-.556a1 1 0 0 0 .783-.976v-2.77a1 1 0 0 0-1.217-.975l-2.5.555a1 1 0 0 0-.783.976v2.77a1 1 0 0 0 1 1Zm2.283 4.21-2.5.555a1 1 0 1 0 .434 1.952l2.5-.555a1 1 0 1 0-.434-1.952ZM5.535 10.75l2.5.556a.986.986 0 0 0 .217.024 1 1 0 0 0 1-1V7.56a1 1 0 0 0-.783-.976l-2.5-.555a1 1 0 0 0-1.217.976v2.77a1 1 0 0 0 .783.976Zm2.934 5.345-2.5-.555a1 1 0 1 0-.434 1.952l2.5.555a1 1 0 1 0 .434-1.952Zm9.562-3.926-2.5.556a1 1 0 1 0 .434 1.952l2.5-.556a1 1 0 1 0-.434-1.952Z",
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
  "PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      logClick: function (a) {
        var b = a.actorIgUserid;
        a = a.step;
        d("PolarisFalcoLogger").FalcoLogger.log(
          "ig_wellbeing_restrict_profile_flow_action",
          {
            action: "click",
            actor_ig_userid: parseInt(b, 10),
            entrypoint: "profile",
            step: a,
          },
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
  "PolarisFXNUXAddAccountButtonUI.react",
  [
    "fbt",
    "PolarisAssetManagerGlyphMapping",
    "PolarisGenericOnboardingUnit.react",
    "PolarisIGCoreActivatorCard",
    "PolarisIGCoreBorderedIcon",
    "PolarisIGCoreConstants",
    "PolarisNewUserActivatorsStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a.buttonText;
      var b = a.isButtonLoading;
      a = a.onButtonClick;
      return i.jsx(c("PolarisIGCoreActivatorCard"), {
        bodyText: d("PolarisNewUserActivatorsStrings").FACEBOOK_BODY,
        buttonText: d("PolarisNewUserActivatorsStrings").FACEBOOK_CTA,
        headerText: d("PolarisNewUserActivatorsStrings").FACEBOOK_HEADER,
        icon: d("PolarisAssetManagerGlyphMapping").ICONS
          .FACEBOOK_CIRCLE_OUTLINE_24_GREY9,
        iconAlt: d("PolarisNewUserActivatorsStrings").FACEBOOK_BODY,
        loading: b,
        onClick: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a.buttonText;
      var b = a.isButtonLoading;
      a = a.onButtonClick;
      var e = i.jsx(c("PolarisIGCoreBorderedIcon"), {
        alt: h._("Connect to Facebook"),
        icon: d("PolarisAssetManagerGlyphMapping").ICONS
          .FACEBOOK_CIRCLE_OUTLINE_24_GREY9,
        size: c("PolarisIGCoreConstants").AVATAR_SIZES.large,
      });
      return i.jsx(c("PolarisGenericOnboardingUnit.react"), {
        bodyText: h._("Connect to Facebook to find friends to follow."),
        buttonText: h._("Connect to Facebook"),
        headerText: h._("Connect to Facebook"),
        icon: e,
        isProcessing: b,
        onButtonClick: a,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.nuxActivatorCardAddAccountButtonUI = a;
    g.nuxOnboardingUnitAddAccountButtonUI = b;
  },
  98
);
__d(
  "PolarisFXModal.react",
  [
    "cx",
    "IGCoreModalLocation",
    "IGDSXPanoFilledIcon",
    "Keys",
    "PolarisBodyScrollLock",
    "PolarisDOMListener.react",
    "PolarisGenericStrings",
    "PolarisIGCoreModalBackdrop",
    "PolarisIGCoreSVGIconButton",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useRef;
    function a(a) {
      var b = a.aboveContent,
        e = a.backgroundColor;
      e = e === void 0 ? "DEPRECATED_white" : e;
      var f = a.children,
        g = a.closeButtonPosition,
        h = g === void 0 ? "hidden" : g;
      g = a.disablePopInAnimation;
      var k = a.enableModalPageView,
        l = k === void 0 ? !1 : k;
      k = a.fixedHeight;
      var m = a.fixedWidth;
      m = m === void 0 ? !0 : m;
      var n = a.isVisible;
      n = n === void 0 ? !0 : n;
      var o = a.onClose;
      a = a.size;
      a = a === void 0 ? "default" : a;
      var p = j(!1),
        q = j(null);
      function r() {
        if (!p.current) {
          p.current = !0;
          var a = q.current;
          a != null && a.returnToEntry();
          o && o();
        }
      }
      var s = function (a) {
          a.which === c("Keys").ESC && r();
        },
        t =
          "_aapi" +
          (e === "DEPRECATED_transparent" ? " _aapj" : "") +
          (m === !0 && a === "default" ? " _aapk" : "") +
          (m === !0 && a === "extraLarge" ? " _aapl" : "") +
          (m === !0 && a === "large" ? " _aapm" : "") +
          (k === !0 ? " _aapn" : "") +
          (g === !0 ? " _aapo" : "");
      return i.jsxs(c("PolarisIGCoreModalBackdrop"), {
        isVisible: n,
        justifyContent: b != null ? "center" : "space-around",
        onClose: r,
        children: [
          i.jsx(c("PolarisDOMListener.react"), {
            event: "keyup",
            handler: s,
            target: window,
          }),
          h === "background" &&
            i.jsx("div", {
              className: "_aapp",
              children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: r,
                children: i.jsx(c("IGDSXPanoFilledIcon"), {
                  alt: d("PolarisGenericStrings").CLOSE_TEXT,
                  color: "web-always-white",
                  size: 18,
                }),
              }),
            }),
          i.jsx(d("PolarisBodyScrollLock").BodyScrollLock, {
            isEnabled: n,
            children: function (a) {
              return i.jsxs(i.Fragment, {
                children: [
                  b,
                  i.jsxs("div", {
                    className: t,
                    ref: a,
                    role: "dialog",
                    children: [
                      h === "body" &&
                        i.jsx("div", {
                          className: "_aapq",
                          children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                            onClick: r,
                            children: i.jsx(c("IGDSXPanoFilledIcon"), {
                              alt: d("PolarisGenericStrings").CLOSE_TEXT,
                              color: "web-always-white",
                              size: 18,
                            }),
                          }),
                        }),
                      i.jsx("div", {
                        className: "_aapr" + (l ? " _aaps" : ""),
                        children: i.Children.map(f, function (a) {
                          return (a == null ? void 0 : a.type) ===
                            c("IGCoreModalLocation")
                            ? i.cloneElement(a, { ref: q })
                            : a;
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
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
  "PolarisFXDialogBase.react",
  ["cx", "IGDSText.react", "PolarisFXModal.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.body,
        d = a.children,
        e = a.disablePopInAnimation,
        f = a.isVisible,
        g = a.media,
        h = a.onModalClose,
        j = a.size;
      j = j === void 0 ? "default" : j;
      a = a.title;
      var k = !!g,
        l = a != null || b != null;
      return i.jsx(c("PolarisFXModal.react"), {
        disablePopInAnimation: e,
        isVisible: f,
        onClose: h,
        size: j,
        children: i.jsxs("div", {
          className: "_aapt",
          children: [
            g != null && i.jsx("div", { className: "_aapu", children: g }),
            l &&
              i.jsxs("div", {
                className: "_aapv",
                children: [
                  a != null &&
                    (k
                      ? i.jsx(c("IGDSText.react").Headline2, { children: a })
                      : i.jsx(c("IGDSText.react").Title, { children: a })),
                  b != null &&
                    i.jsx(c("IGDSText.react").Body, {
                      color: "secondaryText",
                      children: b,
                    }),
                ],
              }),
            d != null && i.jsx("div", { className: "_aapw", children: d }),
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
  "PolarisFXDialog.react",
  ["invariant", "IGCoreDialog", "PolarisFXDialogBase.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.body,
        e = a.disablePopInAnimation,
        f = a.isVisible,
        g = a.negativeButton,
        j = a.primaryButton,
        k = a.secondaryButton;
      a = a.title;
      g != null || j != null || k != null || h(0, 34283);
      return i.jsxs(c("PolarisFXDialogBase.react"), {
        body: b,
        disablePopInAnimation: e,
        isVisible: f,
        title: a,
        children: [
          j &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: (b = j.color) != null ? b : "ig-primary-button",
              onClick: j.onClick,
              children: j.label,
            }),
          k &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: (e = k.color) != null ? e : "ig-secondary-button",
              onClick: k.onClick,
              children: k.label,
            }),
          g &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: (f = g.color) != null ? f : "ig-error-or-destructive",
              onClick: g.onClick,
              children: g.label,
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
  "PolarisFXNUXAddAccountErrorDialog.react",
  [
    "invariant",
    "PolarisFXDialog.react",
    "browserHistory",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.content,
        e = a.error,
        f = a.onClose,
        g = a.url;
      b != null || h(0, 34470);
      e = (a = e) != null ? a : b;
      function j(a) {
        switch (a) {
          case "WEB_AUTH":
            return function () {
              return d("browserHistory").redirect(c("nullthrows")(g));
            };
          case "EXIT_FLOW":
          default:
            return f;
        }
      }
      return i.jsx(c("PolarisFXDialog.react"), {
        body: c("nullthrows")(e == null ? void 0 : e.body),
        negativeButton:
          (e == null ? void 0 : e.negative_button) != null
            ? {
                label: c("nullthrows")(
                  e == null
                    ? void 0
                    : (a = e.negative_button) == null
                    ? void 0
                    : a.label
                ),
                onClick: j(
                  c("nullthrows")(
                    e == null
                      ? void 0
                      : (b = e.negative_button) == null
                      ? void 0
                      : b.action
                  )
                ),
              }
            : void 0,
        primaryButton: {
          label: c("nullthrows")(
            e == null
              ? void 0
              : (a = e.primary_button) == null
              ? void 0
              : a.label
          ),
          onClick: j(
            c("nullthrows")(
              e == null
                ? void 0
                : (b = e.primary_button) == null
                ? void 0
                : b.action
            )
          ),
        },
        secondaryButton:
          (e == null ? void 0 : e.secondary_button) != null
            ? {
                label: c("nullthrows")(
                  e == null
                    ? void 0
                    : (a = e.secondary_button) == null
                    ? void 0
                    : a.label
                ),
                onClick: j(
                  c("nullthrows")(
                    e == null
                      ? void 0
                      : (b = e.secondary_button) == null
                      ? void 0
                      : b.action
                  )
                ),
              }
            : void 0,
        title: c("nullthrows")(e == null ? void 0 : e.title),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFXNUXErrorContent",
  ["fbt", "PolarisGenericStrings"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Something Went Wrong");
    b = h._("You can try again later or use another account.");
    c = { body: b, button_label: d("PolarisGenericStrings").OK_TEXT, title: a };
    e = {
      title: c.title.toString(),
      body: c.body.toString(),
      primary_button: { label: c.button_label.toString(), action: "EXIT_FLOW" },
    };
    g.GENERIC_LINKING_FLOW_ERROR_CONTENT = c;
    g.GENERIC_LINKING_FLOW_ERROR_DIALOG_CONTENT = e;
  },
  98
);
__d(
  "PolarisFXNUXAddAccountLink.react",
  [
    "IGRouter",
    "PolarisFXCalLinkingLogger",
    "PolarisFXNUXAddAccountErrorDialog.react",
    "PolarisFXNUXErrorContent",
    "PolarisQueryParamsHelper",
    "PolarisReactRedux",
    "browserHistory",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.buttonUI,
        e = a.entryPoint;
      e = e === void 0 ? "ig_web_settings" : e;
      var f = a.flow;
      f === void 0 ? "IG_WEB_SETTINGS" : f;
      f = a.returnURL;
      f === void 0 ? null : f;
      f = a.screenResources;
      var g = a.webAuthConfig;
      a = d("IGRouter").useIGLocation();
      a = d("PolarisQueryParamsHelper").getQueryParams(a.search);
      var k = i(!1),
        l = k[0],
        m = k[1];
      k = i(null);
      var n = k[0],
        o = k[1];
      k = i(null);
      var p = k[0],
        q = k[1],
        r =
          (k = d("PolarisReactRedux").useSelector(
            d("polarisUserSelectors").getViewer
          )) == null
            ? void 0
            : k.fbid,
        s = j((k = a.entry_point) != null ? k : e),
        t = (a = g.web_auth) == null ? void 0 : a.url;
      k = function () {
        try {
          m(!0);
          d("PolarisFXCalLinkingLogger").logFXLinkingFlowEvent({
            event: "linking_flow_initiated",
            initiatorAccountId: c("nullthrows")(r),
            linkingFlowEntryPoint: s,
          });
          if (g.error != null) {
            q(g.error);
            return;
          }
          d("browserHistory").redirect(c("nullthrows")(t));
          d("PolarisFXCalLinkingLogger").logFXLinkingFlowEvent({
            event: "web_auth_attempted",
            initiatorAccountId: c("nullthrows")(r),
            linkingFlowEntryPoint: s,
          });
        } catch (a) {
          d("PolarisFXCalLinkingLogger").logFXLinkingFlowEvent({
            event: "generic_error",
            initiatorAccountId: c("nullthrows")(r),
            linkingFlowEntryPoint: s,
            debugData: a.stack,
          }),
            o(
              d("PolarisFXNUXErrorContent")
                .GENERIC_LINKING_FLOW_ERROR_DIALOG_CONTENT
            );
        }
      };
      return h.jsxs(h.Fragment, {
        children: [
          b({
            isButtonLoading: l,
            onButtonClick: k,
            buttonText: c("nullthrows")(f.add_button_text),
          }),
          l &&
            (n || p) &&
            h.jsx(c("PolarisFXNUXAddAccountErrorDialog.react"), {
              content: n,
              error: p,
              onClose: function () {
                o(null), q(null), m(!1);
              },
              url: t,
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      return a === "ig_fb_nux_find_friends_web" ||
        a === "ig_fb_nux_find_friends_msite"
        ? a
        : "ig_web_settings";
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFXNUXAddAccountActivatorCard.react",
  [
    "CometPlaceholder.react",
    "PolarisAPIQueryWWWGraphQL",
    "PolarisConfig",
    "PolarisErrorBoundary.react",
    "PolarisFXCalLinkingLogger",
    "PolarisFXNUXAddAccountButtonUI.react",
    "PolarisFXNUXAddAccountLink.react",
    "PolarisNewUserActivatorsStrings",
    "PolarisQueryParamsHelper",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUA",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useLayoutEffect,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.onError,
        e = a.returnURL;
      a = d("PolarisUA").isMobile();
      var f = a ? "IG_NUX_MSITE" : "IG_NUX_WEB",
        g = m(a);
      a = l(null);
      var n = a[0],
        o = a[1],
        p = k(b);
      j(function () {
        p.current = b;
      });
      i(
        function () {
          var a = "6195273177181542",
            b = d("PolarisQueryParamsHelper").appendQueryParams(
              d("PolarisRoutes")
                .FX_ACCOUNTS_CENTER_ON_COMET_ROUTABLE_LINKING_PATH,
              {
                flow: f,
                entry_point: g,
                next: e,
                background_page:
                  d("PolarisRoutes").FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,
              }
            );
          b = {
            flow: f,
            device_id: d("PolarisConfig").getDeviceId(),
            ig_web_extra_data: b,
            interface: "IG_WEB",
          };
          d("PolarisAPIQueryWWWGraphQL")
            .queryWWWGraphQL(a, b)
            .then(function (a) {
              var b = a.data;
              a = a.errors;
              a != null
                ? p.current()
                : ((b.fxcal_web_init.web_auth == null ||
                    b.fxcal_web_init.error != null) &&
                    p.current(),
                  o(b));
            })
            ["catch"](function (a) {
              p.current();
            });
        },
        [g, f, e]
      );
      return n == null
        ? d(
            "PolarisFXNUXAddAccountButtonUI.react"
          ).nuxActivatorCardAddAccountButtonUI({
            buttonText: d("PolarisNewUserActivatorsStrings").FACEBOOK_CTA,
            isButtonLoading: !0,
            onButtonClick: function () {},
          })
        : h.jsx(c("PolarisFXNUXAddAccountLink.react"), {
            buttonUI: d("PolarisFXNUXAddAccountButtonUI.react")
              .nuxActivatorCardAddAccountButtonUI,
            entryPoint: g,
            flow: f,
            returnURL: e,
            screenResources: c("nullthrows")(
              (a = n.fx_identity_management) == null
                ? void 0
                : a.screen_resources
            ),
            webAuthConfig: c("nullthrows")(n.fxcal_web_init),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      return a ? "ig_fb_nux_find_friends_msite" : "ig_fb_nux_find_friends_web";
    }
    function n(a) {
      var b = a.children,
        e = a.onError,
        f = d("PolarisUA").isMobile(),
        g =
          (a = d("PolarisReactRedux").useSelector(
            d("polarisUserSelectors").getViewer
          )) == null
            ? void 0
            : a.fbid;
      return h.jsx(c("PolarisErrorBoundary.react"), {
        errorRenderer: function (a) {
          return null;
        },
        onError: function (a, b) {
          e(a, c("nullthrows")(g), f);
        },
        children: b,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a, b) {
      var c;
      function d(c) {
        return h.jsx(n, {
          onError: b(c),
          children: h.jsx(a, babelHelpers["extends"]({}, c)),
        });
      }
      d.displayName = d.name + " [from " + f.id + "]";
      Object.defineProperty(d, "name", {
        value: o.name + "(" + ((c = a.name) != null ? c : "Component") + ")",
        writable: !1,
      });
      return d;
    }
    function p(a) {
      var b;
      function e(b) {
        var e = d(
          "PolarisFXNUXAddAccountButtonUI.react"
        ).nuxActivatorCardAddAccountButtonUI({
          buttonText: d("PolarisNewUserActivatorsStrings").FACEBOOK_CTA,
          isButtonLoading: !0,
          onButtonClick: function () {},
        });
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: e,
          children: h.jsx(a, babelHelpers["extends"]({}, b)),
        });
      }
      e.displayName = e.name + " [from " + f.id + "]";
      Object.defineProperty(e, "name", {
        value: p.name + "(" + ((b = a.name) != null ? b : "Component") + ")",
        writable: !1,
      });
      return e;
    }
    e = o(p(a), function (a) {
      return function (b, c, e) {
        d("PolarisFXCalLinkingLogger").logFXLinkingFlowEvent({
          event: "generic_error",
          initiatorAccountId: c,
          linkingFlowEntryPoint: m(e),
          debugData: b.stack,
        }),
          a.onError();
      };
    });
    g["default"] = e;
  },
  98
);
__d(
  "PolarisFXNUXErrorBoundaryDialog.react",
  [
    "PolarisErrorBoundary.react",
    "PolarisFXDialog.react",
    "PolarisReactRedux",
    "PolarisUA",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.children,
        e = a.errorContent,
        f = a.onClick;
      a = a.onError;
      var g = a === void 0 ? function (b, c, a) {} : a,
        i = c("nullthrows")(
          (a = d("PolarisReactRedux").useSelector(
            d("polarisUserSelectors").getViewer
          )) == null
            ? void 0
            : a.fbid
        ),
        j = d("PolarisUA").isMobile();
      return h.jsx(c("PolarisErrorBoundary.react"), {
        errorRenderer: function (a) {
          return h.jsx(c("PolarisFXDialog.react"), {
            body: e.body,
            primaryButton: { label: e.button_label, onClick: f },
            title: e.title,
          });
        },
        onError: function (a, b) {
          g(a, i, j);
        },
        children: b,
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a, b) {
      var c;
      function d(c) {
        return h.jsx(i, {
          errorContent: b.errorContent,
          onClick: function () {
            return b.onClick(c);
          },
          onError: function (a, d, e) {
            b.onError && b.onError(c)(a, d, e);
          },
          children: h.jsx(a, babelHelpers["extends"]({}, c)),
        });
      }
      d.displayName = d.name + " [from " + f.id + "]";
      Object.defineProperty(d, "name", {
        value: j.name + "(" + ((c = a.name) != null ? c : "Component") + ")",
        writable: !1,
      });
      return d;
    }
    g.withFXNUXErrorBoundaryDialog = j;
  },
  98
);
__d(
  "PolarisFXNUXAddAccountOnboardingUnit.react",
  [
    "CometPlaceholder.react",
    "PolarisAPIQueryWWWGraphQL",
    "PolarisConfig",
    "PolarisFXCalLinkingLogger",
    "PolarisFXNUXAddAccountButtonUI.react",
    "PolarisFXNUXAddAccountLink.react",
    "PolarisFXNUXErrorBoundaryDialog.react",
    "PolarisFXNUXErrorContent",
    "PolarisNewUserActivatorsStrings",
    "PolarisQueryParamsHelper",
    "PolarisRoutes",
    "PolarisUA",
    "browserHistory",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = a.returnURL;
      a = d("PolarisUA").isMobile();
      var e = a ? "IG_NUX_MSITE" : "IG_NUX_WEB",
        f = k(a);
      a = j(null);
      var g = a[0],
        l = a[1];
      a = j(null);
      var m = a[0],
        n = a[1];
      i(
        function () {
          var a = d("PolarisQueryParamsHelper").appendQueryParams(
            d("PolarisRoutes")
              .FX_ACCOUNTS_CENTER_ON_COMET_ROUTABLE_LINKING_PATH,
            {
              flow: e,
              entry_point: f,
              next: b,
              background_page:
                d("PolarisRoutes").FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,
            }
          );
          a = {
            flow: e,
            device_id: d("PolarisConfig").getDeviceId(),
            ig_web_extra_data: a,
            interface: "IG_WEB",
          };
          var c = "6195273177181542";
          d("PolarisAPIQueryWWWGraphQL")
            .queryWWWGraphQL(c, a)
            .then(function (a) {
              var b = a.data;
              a = a.errors;
              a != null ? n(a) : l(b);
            })
            ["catch"](function (a) {
              n(a);
            });
        },
        [f, e, b]
      );
      if (m != null) throw new Error("GraphQL fetch was not successful");
      return g == null
        ? d(
            "PolarisFXNUXAddAccountButtonUI.react"
          ).nuxOnboardingUnitAddAccountButtonUI({
            buttonText: d("PolarisNewUserActivatorsStrings").FACEBOOK_CTA,
            isButtonLoading: !0,
            onButtonClick: function () {},
          })
        : h.jsx(c("PolarisFXNUXAddAccountLink.react"), {
            buttonUI: d("PolarisFXNUXAddAccountButtonUI.react")
              .nuxOnboardingUnitAddAccountButtonUI,
            entryPoint: f,
            flow: e,
            returnURL: b,
            screenResources: c("nullthrows")(
              (a = g.fx_identity_management) == null
                ? void 0
                : a.screen_resources
            ),
            webAuthConfig: c("nullthrows")(g.fxcal_web_init),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      return a ? "ig_fb_nux_find_friends_msite" : "ig_fb_nux_find_friends_web";
    }
    function l(a) {
      var b;
      function e(b) {
        var e = d(
          "PolarisFXNUXAddAccountButtonUI.react"
        ).nuxOnboardingUnitAddAccountButtonUI({
          buttonText: d("PolarisNewUserActivatorsStrings").FACEBOOK_CTA,
          isButtonLoading: !0,
          onButtonClick: function () {},
        });
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: e,
          children: h.jsx(a, babelHelpers["extends"]({}, b)),
        });
      }
      e.displayName = e.name + " [from " + f.id + "]";
      Object.defineProperty(e, "name", {
        value: l.name + "(" + ((b = a.name) != null ? b : "Component") + ")",
        writable: !1,
      });
      return e;
    }
    e = d("PolarisFXNUXErrorBoundaryDialog.react").withFXNUXErrorBoundaryDialog(
      l(a),
      {
        errorContent: d("PolarisFXNUXErrorContent")
          .GENERIC_LINKING_FLOW_ERROR_CONTENT,
        onClick: function (a) {
          a = a.returnURL;
          d("browserHistory").redirect(a);
        },
        onError: function (a) {
          return function (a, b, c) {
            d("PolarisFXCalLinkingLogger").logFXLinkingFlowEvent({
              event: "generic_error",
              initiatorAccountId: b,
              linkingFlowEntryPoint: k(c),
              debugData: a.stack,
            });
          };
        },
      }
    );
    g["default"] = e;
  },
  98
);
__d(
  "PolarisConnectToFacebook.react",
  [
    "PolarisFXNUXAddAccountActivatorCard.react",
    "PolarisFXNUXAddAccountOnboardingUnit.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a.analyticsContext;
      var b = a.nuxType;
      b = b === void 0 ? "onboarding" : b;
      var d = a.onError;
      d = d === void 0 ? function () {} : d;
      a = a.returnURL;
      return h.jsx(h.Fragment, {
        children:
          b === "activator"
            ? h.jsx(c("PolarisFXNUXAddAccountActivatorCard.react"), {
                onError: d,
                returnURL: a,
              })
            : h.jsx(c("PolarisFXNUXAddAccountOnboardingUnit.react"), {
                returnURL: a,
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisNewUserActivatorsUnitTypes",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
      addFirstPhoto: null,
      addPhone: null,
      connectToFacebook: null,
      editProfile: null,
      editProfilePhoto: null,
    });
    b = c("keyMirror")({ emptyFeed: null, feed: null, profile: null });
    g.KEYS = a;
    g.MODULES = b;
  },
  98
);
__d(
  "usePolarisProfileDataUpdateHandler",
  ["PolarisProfileEditStrings", "PolarisReactRedux", "react", "refine"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = d("refine").object({
        fullName: d("refine").voidable(d("refine").string()),
        username: d("refine").voidable(d("refine").string()),
      });
    function a(a) {
      var b = d("PolarisReactRedux").useDispatch(),
        c = h(
          function (c) {
            return a == null
              ? function () {}
              : a.addTypedListener(
                  c,
                  function (a) {
                    if (a.type !== "success") return;
                    a = a.value;
                    var c = a.fullName;
                    a = a.username;
                    var e = {};
                    c != null && (e.fullName = c);
                    a != null && (e.username = a);
                    b({
                      type: "SAVE_PROFILE_CONFIRMED",
                      profileData: e,
                      toast: {
                        text: d("PolarisProfileEditStrings")
                          .PROFILE_SAVED_WITHOUT_EXCLAMATION,
                      },
                    });
                  },
                  j
                );
          },
          [a, b]
        );
      i(
        function () {
          return c("name_updated");
        },
        [c]
      );
      i(
        function () {
          return c("username_updated");
        },
        [c]
      );
    }
    g.useProfileDataUpdateHandler = a;
  },
  98
);
__d(
  "PolarisUserActionStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Profile photo added.");
    b = h._("Profile photo removed.");
    g.PROFILE_PIC_ADDED_TOAST_MESSAGE = a;
    g.PROFILE_PIC_REMOVED_TOAST_MESSAGE = b;
  },
  98
);
__d(
  "PolarisUserActionUpdateProfilePicWithURI",
  ["PolarisUserActionStrings"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return function (c) {
        var e = {
          has_profile_pic: !b,
          profile_pic_url: a,
          profile_pic_url_hd: a,
        };
        c({
          type: "SET_PROFILE_PIC_SUCCEEDED",
          partialViewerData: e,
          profilePicBlob: null,
          showProfilePicFirstPostUpsell: !1,
          toast: {
            text: b
              ? d("PolarisUserActionStrings").PROFILE_PIC_REMOVED_TOAST_MESSAGE
              : d("PolarisUserActionStrings").PROFILE_PIC_ADDED_TOAST_MESSAGE,
            persistOnNavigate: !0,
          },
        });
      };
    }
    g.updateProfilePicWithURI = a;
  },
  98
);
__d(
  "usePolarisProfilePicUpdateHandler",
  [
    "PolarisReactRedux",
    "PolarisUserActionUpdateProfilePicWithURI",
    "react",
    "refine",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = d("refine").object({
        imageURI: d("refine").string(),
        isDeletion: d("refine").bool(),
      });
    function a(a) {
      var b = d("PolarisReactRedux").useDispatch();
      h(
        function () {
          return a == null
            ? function () {}
            : a.addTypedListener(
                "profile_pic_updated",
                function (a) {
                  if (a.type !== "success") return;
                  a = a.value;
                  var c = a.imageURI;
                  a = a.isDeletion;
                  if (c == null || a == null) return;
                  b(
                    d(
                      "PolarisUserActionUpdateProfilePicWithURI"
                    ).updateProfilePicWithURI(c, a)
                  );
                },
                i
              );
        },
        [a, b]
      );
    }
    g.useProfilePicUpdateHandler = a;
  },
  98
);
__d(
  "PolarisCometIframeToWWWDialog.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisBodyScrollLock",
    "PolarisCometIframeToWWWBase.react",
    "PolarisIGCoreModalBackdrop",
    "react",
    "usePolarisCometIframeSetup",
    "usePolarisIframeVisualCompletion",
    "usePolarisProfileDataUpdateHandler",
    "usePolarisProfilePicUpdateHandler",
    "usePolarisSetupRoutingHandler",
    "usePolarisUpdateMAWLoggingHandler",
    "usePolarisUpdateTimeSpentBitArrayHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useState;
    function l(a, b) {
      j(
        function () {
          return a == null
            ? void 0
            : a.addListener("close-comet-iframe-dialog", b);
        },
        [a, b]
      );
    }
    function m(a) {
      var b = k(!0),
        c = b[0],
        d = b[1];
      j(
        function () {
          return a == null
            ? void 0
            : a.addListener("load-comet-iframe-dialog", function () {
                d(!1);
              });
        },
        [a]
      );
      return c;
    }
    function a(a) {
      var b = a.onClose,
        e = a.pageTitle;
      a = a.targetUrl;
      a = c("usePolarisCometIframeSetup")(a);
      var f = a.broker,
        g = a.currentIframeUrl;
      c("usePolarisSetupRoutingHandler")(f, g);
      c("usePolarisUpdateTimeSpentBitArrayHandler")(f);
      c("usePolarisIframeVisualCompletion")(f);
      d("usePolarisUpdateMAWLoggingHandler").useUpdateMAWLoggingHandler(f);
      d("usePolarisProfilePicUpdateHandler").useProfilePicUpdateHandler(f);
      d("usePolarisProfileDataUpdateHandler").useProfileDataUpdateHandler(f);
      l(f, b);
      var h = m(f);
      return i.jsxs(c("PolarisIGCoreModalBackdrop"), {
        color: "default",
        isCriticalToPrivacyControls: !1,
        isVisible: !0,
        justifyContent: "space-around",
        onClose: b,
        children: [
          i.jsx("div", {
            className: (h ? "" : "_aapf") + " _aapg",
            children: i.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              padding: 8,
              position: "relative",
              children: i.jsx(c("IGDSSpinner.react"), {}),
            }),
          }),
          i.jsx(d("PolarisBodyScrollLock").BodyScrollLock, {
            isEnabled: !0,
            children: function (a) {
              return i.jsx("div", {
                className: "_aaph" + (h ? " _aapf" : ""),
                ref: a,
                role: "dialog",
                children: i.jsx(c("PolarisCometIframeToWWWBase.react"), {
                  iframeUrl: g,
                  pageTitle: e,
                }),
              });
            },
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
  "PolarisFXIMManageSyncSettingsDialogItem.react",
  ["IGCoreDialog", "PolarisNavigationUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.manageSyncSettingsLabel,
        c = a.manageSyncSettingsURL;
      return h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
        onClick: function () {
          d("PolarisNavigationUtils").openURLWithFullPageReload(c);
        },
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFXIdentityProductFalcoEvent",
  ["PolarisConfig", "PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 },
      i = {
        log: function (a) {
          a = babelHelpers["extends"](
            {
              initiator_account_id: d("PolarisConfig").getViewerId(),
              initiator_account_type: 1,
            },
            a
          );
          d("PolarisFalcoLogger").FalcoLogger.log(
            "fx_identity_product",
            a,
            {},
            h
          );
        },
        logRemindersEvent: function (a) {
          var b = a.event;
          a = a.type;
          b = {
            flow_type: "reminders",
            fx_im_logger_events: b,
            type_of_reminder: a,
          };
          i.log(b);
        },
      };
    a = i;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisEditProfilePicMenu.react",
  [
    "cx",
    "IGCoreDialog",
    "IGDSText.react",
    "PolarisCometIframeToWWWDialog.react",
    "PolarisEditableUserAvatar.react",
    "PolarisFXIMManageSyncSettingsDialogItem.react",
    "PolarisFXIdentityProductFalcoEvent",
    "PolarisProfileEditStrings",
    "PolarisUA",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect;
    function k(a) {
      var b = a.header,
        d = a.pictureUrl;
      a = a.subheader;
      return i.jsxs("div", {
        className: "_aaec",
        children: [
          i.jsx("div", {
            className: "_aaed",
            children: i.jsx(c("PolarisEditableUserAvatar.react"), {
              editable: !1,
              src: d,
            }),
          }),
          i.jsx("div", {
            className: "_aaee",
            children: i.jsx(c("IGDSText.react").Title, {
              textAlign: "center",
              zeroMargin: !0,
              children: b,
            }),
          }),
          i.jsx(c("IGDSText.react").Body, {
            color: "secondaryText",
            children: a,
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.changeProfilePicActionsScreenCancelCTA,
        e = a.changeProfilePicActionsScreenHeader,
        f = a.changeProfilePicActionsScreenManageSyncSettingsLabel,
        g = a.changeProfilePicActionsScreenManageSyncSettingsURL,
        h = a.changeProfilePicActionsScreenRemoveCTA,
        l = a.changeProfilePicActionsScreenSubheader,
        m = a.changeProfilePicActionsScreenUploadCTA,
        n = a.children,
        o = a.entrypoint,
        p = a.hasExistingPic,
        q = a.isBCI,
        r = a.onClose,
        s = a.onRemoveClick;
      a.onTakeImage;
      var t = a.onUploadClick,
        u = a.profilePictureUrl,
        v = a.showProfilePicSyncReminders;
      j(
        function () {
          v === !0 &&
            (q === !0
              ? c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
                  event: "reminder_shown",
                  type: "biz_change_photo",
                })
              : c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
                  event: "reminder_shown",
                  type: "edit_photo_reminder",
                }));
        },
        [q, v]
      );
      a = function (a) {
        v === !0 &&
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_confirm",
            type: "edit_photo_reminder",
          }),
          t(a);
      };
      if (!d("PolarisUA").isMobile() && c("qex")._("47")) {
        var w = "/profile_pic_edit";
        return i.jsx(c("PolarisCometIframeToWWWDialog.react"), {
          onClose: function () {
            r(null);
          },
          pageTitle: d("PolarisProfileEditStrings").CHANGE_PROFILE_PICTURE,
          targetUrl: o != null ? w + "?entrypoint=" + o : w,
        });
      }
      return e == null
        ? null
        : i.jsxs(
            d("IGCoreDialog").IGCoreDialog,
            babelHelpers["extends"](
              { "data-testid": void 0, onModalClose: r },
              v === !0 && u != null && l != null
                ? {
                    media: i.jsx(k, { header: e, pictureUrl: u, subheader: l }),
                  }
                : { title: e },
              {
                children: [
                  m != null &&
                    i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                      color: "ig-primary-button",
                      onClick: a,
                      children: m,
                    }),
                  f != null &&
                    g != null &&
                    i.jsx(c("PolarisFXIMManageSyncSettingsDialogItem.react"), {
                      manageSyncSettingsLabel: f,
                      manageSyncSettingsURL: g,
                    }),
                  p &&
                    h != null &&
                    i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                      color: "ig-error-or-destructive",
                      onClick: s,
                      children: h,
                    }),
                  b != null &&
                    i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                      onClick: r,
                      children: b,
                    }),
                  n,
                ],
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
  "PolarisFXGrowthIdentitySyncingLoggerEvents",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PROFILE_NAME_UPDATED: "profile_name_updated",
      PROFILE_PICTURE_FILTER_CLICKED: "profile_picture_filter_clicked",
      PROFILE_PICTURE_TOOL_CLICKED: "profile_picture_tool_clicked",
      UPSELL_ELIGIBILITY_CHECKED: "upsell_eligibility_checked",
      PROFILE_PICTURE_UPDATED: "profile_picture_updated",
      PROFILE_PICTURE_UPDATE_ERROR: "profile_picture_update_error",
      AC_EDIT_PROFILE_PICTURE_CLICKED: "ac_edit_profile_picture_clicked",
      PROFILE_PICTURE_LONG_CLICKED: "profile_picture_long_clicked",
      CHANGE_PROFILE_PHOTO_BUTTON_CLICKED:
        "change_profile_photo_button_clicked",
      IG_WEB_PROFILE_PICTURE_CLICKED: "ig_web_profile_picture_clicked",
      IG_WEB_CHANGE_PROFILE_PHOTO_BUTTON_CLICKED:
        "ig_web_change_profile_photo_button_clicked",
      FB_PROFILE_PICTURE_CAMERA_CLICKED: "fb_profile_picture_camera_clicked",
      FB_PROFILE_PICTURE_CLICKED: "fb_profile_picture_clicked",
      FB_PROFILE_PICTURE_EDIT_CLICKED: "fb_profile_picture_edit_clicked",
      PROFILE_PICTURE_BOTTOM_SHEET_ITEM_CLICKED:
        "profile_picture_bottom_sheet_item_clicked",
      FB_WEB_NAME_CLICKED: "fb_name_clicked",
      FB_WEB_USERNAME_CLICKED: "fb_username_clicked",
      IG_WEB_NAME_CLICKED: "ig_web_name_clicked",
      IG_WEB_USERNAME_CLICKED: "ig_web_username_clicked",
      FB_USERNAME_UPDATE_SUCCESS: "fb_username_update_success",
      FB_USERNAME_UPDATE_ERROR: "fb_username_update_error",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisFXGrowthIndentitySyncingEntryPoint",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      IG_EDIT_PROFILE: "ig_edit_profile",
      FB_EDIT_PROFILE: "fb_edit_profile",
      FB_PROFILE_PHOTO: "fb_profile_photo",
      FB_PROFILE_PHOTO_CAMERA: "fb_profile_photo_camera",
      FB_PROFILE_MENU: "fb_profile_menu",
      FB_PHOTO: "fb_photo",
      FB_NUX_PHOTO: "fb_nux_photo",
      FB_NAME_CHANGE: "fb_name_change",
      FB_USERNAME_CHANGE: "fb_username_change",
      MSGR_NAME_CHANGE: "msgr_name_change",
      SYNC_PROFILE_INFO: "sync_profile_info",
      IG_PROFILE_PHOTO_LONG_PRESS: "ig_profile_photo_long_press",
      IG_ACCOUNT_CENTER: "ig_account_center",
      FB_ACCOUNT_CENTER: "fb_account_center",
      FRL_ACCOUNT_CENTER: "frl_account_center",
      FX_UNKNOWN: "fx_unknown",
      IG_WEB_PROFILE_PHOTO: "ig_web_profile_photo",
      IG_WEB_CHANGE_PROFILE_PHOTO: "ig_web_change_profile_photo",
      IG_WEB_CHANGE_NAME: "ig_web_change_name",
      IG_WEB_CHANGE_USERNAME: "ig_web_change_username",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisFXIMLoggerFlows",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BUSINESS_REMINDERS: "business_reminders",
      CP_UPSELL: "cp_upsell",
      FB_AVATAR_EDITOR_UPSELL: "fb_avatar_editor_upsell",
      FB_AVATAR_POST_EDITOR_CHAINED_UPSELL:
        "fb_avatar_post_editor_chained_upsell",
      FB_AVATAR_POST_EDITOR_UPSELL: "fb_avatar_post_editor_upsell",
      FB_FRAME_UPSELL: "fb_frame_upsell",
      FB_FRIENDING_HOME_UPSELL: "fb_friending_home_upsell",
      FB_IS_COMPLETENESS_PROFILE_PICTURE_CHANGE_UPSELL:
        "fb_is_completeness_profile_picture_change_upsell",
      FB_NUX_SIGN_UP_CHAINED: "fb_nux_sign_up_chained",
      FB_NUX_SIGN_UP_DIRECT: "fb_nux_sign_up_direct",
      FB_PROFILE_BOTTOM_SHEET_CHAINED: "fb_profile_bottom_sheet_chained",
      FB_PROFILE_BOTTOM_SHEET_DIRECT: "fb_profile_bottom_sheet_direct",
      FB_PROFILE_PHOTO_CHANGE_CHAINED_UPSELL:
        "fb_profile_photo_change_chained_upsell",
      FB_PROFILE_PHOTO_CHANGE_UPSELL: "fb_profile_photo_change_upsell",
      FB_PROFILE_PICTURE_CHANGE_IS_COMPLETENESS_UPSELL:
        "fb_profile_picture_change_is_completeness_upsell",
      FB_SELF_PROFILE_QP: "fb_self_profile_qp",
      IG_ACCOUNTS_CENTER_CHAINING_UPSELL: "ig_accounts_center_chaining_upsell",
      IG_AVATAR_EDITOR_FROM_QP: "ig_avatar_editor_from_qp",
      IG_AVATAR_EDITOR_FROM_RTC: "ig_avatar_editor_from_rtc",
      IG_AVATAR_EDITOR_FROM_SETTINGS: "ig_avatar_editor_from_settings",
      IG_AVATAR_EDITOR_FROM_UNKNOWN: "ig_avatar_editor_from_unknown",
      IG_AVATAR_EDITOR_UPSELL: "ig_avatar_editor_upsell",
      IG_AVATAR_POST_EDITOR_CHAINED_UPSELL:
        "ig_avatar_post_editor_chained_upsell",
      IG_AVATAR_POST_EDITOR_UPSELL: "ig_avatar_post_editor_upsell",
      IG_DIRECT_MESSAGES_UPSELL: "ig_direct_messages_upsell",
      IG_DISCOVER_PEOPLE_HOME_CHAINED_UPSELL:
        "ig_discover_people_home_chained_upsell",
      IG_DISCOVER_PEOPLE_HOME_UPSELL: "ig_discover_people_home_upsell",
      IG_FEED_CROSS_POSTING_UPSELL: "ig_feed_cross_posting_upsell",
      IG_IMPORT_FROM_FB_CHAINED_UPSELL: "ig_import_from_fb_chained_upsell",
      IG_IMPORT_FROM_FB_DIRECT_UPSELL: "ig_import_from_fb_direct_upsell",
      IG_IMPORT_FROM_FB_UPSELL: "ig_import_from_fb_upsell",
      IG_INTEROP_UPSELL: "ig_interop_upsell",
      IG_IS_COMPLETENESS_PROFILE_PICTURE_CHANGE_UPSELL:
        "ig_is_completeness_profile_picture_change_upsell",
      IG_NUX: "ig_nux",
      IG_NUX_AFTER_LINKING_UPSELL: "ig_nux_after_linking_upsell",
      IG_PROFILE_NAME_CHANGE_UPSELL: "ig_profile_name_change_upsell",
      IG_PROFILE_PHOTO_CHANGE_IS_COMPLETENESS_UPSELL:
        "ig_profile_photo_change_is_completeness_upsell",
      IG_PROFILE_PHOTO_CHANGE_UPSELL: "ig_profile_photo_change_upsell",
      IG_SELF_PROFILE: "ig_self_profile",
      IG_STORY_CROSS_POSTING_UPSELL: "ig_story_cross_posting_upsell",
      IM_SETTINGS: "im_settings",
      INTEROP_UPSELL: "interop_upsell",
      MSGR_INTEROP_UPSELL: "msgr_interop_upsell",
      NAME_CHANGE: "name_change",
      PAGE_IDENTIFYING_FIELDS_EDIT: "page_identifying_fields_edit",
      PHOTO_EDITING: "photo_editing",
      REMINDERS: "reminders",
      SWITCHER: "switcher",
      USERNAME_EDITING: "username_editing",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisFxGrowthIdentitySyncingFalcoEvent",
  ["PolarisConfig", "PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        a = babelHelpers["extends"](
          {
            initiator_account_id: d("PolarisConfig").getViewerId(),
            initiator_account_type: 1,
          },
          a
        );
        d("PolarisFalcoLogger").FalcoLogger.log(
          "fx_growth_identity_syncing",
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
  "PolarisEditableUserAvatar.react",
  [
    "cx",
    "fbt",
    "IGDSSpinner.react",
    "PolarisFXGrowthIdentitySyncingLoggerEvents",
    "PolarisFXGrowthIndentitySyncingEntryPoint",
    "PolarisFXIMLoggerFlows",
    "PolarisFxGrowthIdentitySyncingFalcoEvent",
    "PolarisProfileEditStrings",
    "PolarisProfilePicEdit.react",
    "react",
    "warning",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
      l = b.useRef;
    function a(a) {
      var b = a.analyticsContext,
        e = a.editable,
        f = a.entrypoint,
        g = a.isSilhouette,
        h = a.isUploading,
        m = a.src;
      a = a.username;
      var n = l(null),
        o = function (a) {
          n.current &&
            (n.current.handleEditProfilePic(a),
            f != null &&
              e &&
              c("PolarisFxGrowthIdentitySyncingFalcoEvent").log({
                event_name:
                  f ===
                  c("PolarisFXGrowthIndentitySyncingEntryPoint")
                    .IG_WEB_CHANGE_PROFILE_PHOTO
                    ? c("PolarisFXGrowthIdentitySyncingLoggerEvents")
                        .IG_WEB_CHANGE_PROFILE_PHOTO_BUTTON_CLICKED
                    : c("PolarisFXGrowthIdentitySyncingLoggerEvents")
                        .IG_WEB_PROFILE_PICTURE_CLICKED,
                entry_point: f,
                flow_type: c("PolarisFXIMLoggerFlows").PHOTO_EDITING,
              }));
        };
      k(function () {
        c("warning")(
          (b != null && b !== "") || !e,
          "EditableUserAvatar marked as editable, but no analytics context provided"
        );
      }, []);
      var p;
      g === !0
        ? (p = i._("Add a profile photo"))
        : e
        ? (p = d("PolarisProfileEditStrings").CHANGE_PROFILE_PICTURE)
        : (p = i._("Profile photo"));
      return j.jsxs("div", {
        className: "_aadm",
        children: [
          j.jsx("button", {
            className: "_aadn" + (h ? " _aado" : ""),
            disabled: h,
            onClick: o,
            title: p,
            children: j.jsx("img", { alt: p, className: "_aadp", src: m }),
          }),
          h === !0 && j.jsx(c("IGDSSpinner.react"), { position: "absolute" }),
          e &&
            j.jsx(c("PolarisProfilePicEdit.react"), {
              analyticsContext: b,
              entrypoint: f,
              hasExistingPic: !g,
              profilePictureUrl: m,
              ref: function (a) {
                return (n.current = a);
              },
              username: a,
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
  "PolarisCreationActionErrorUtils",
  ["PolarisCreationStrings", "PolarisGenericStrings"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = d("PolarisCreationStrings").POST_FAILED_TEXT;
      return a;
    }
    function a(a, b) {
      return !a
        ? null
        : {
            actionHandler: a,
            actionText: d("PolarisGenericStrings").RETRY_TEXT,
            text: h(b),
          };
    }
    g.getErrorText = h;
    g.getRetryToast = a;
  },
  98
);
__d(
  "PolarisCreationActionResetState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return { type: "CREATION_RELEASED" };
    }
    f.resetState = a;
  },
  66
);
__d(
  "PolarisCreationActionCallFinalize",
  [
    "fbt",
    "invariant",
    "PolarisCreationAPI",
    "PolarisCreationActionErrorUtils",
    "PolarisCreationActionResetState",
    "PolarisCreationLogger",
    "PolarisCreationMode",
    "PolarisFeedActionConstants",
    "PolarisFeedActionRefreshFeedData",
    "PolarisMediaConstants",
    "PolarisNavigationActions",
    "PolarisNavigationUtils",
    "PolarisToastActions",
    "browserHistory",
    "polarisIsWebGLSupported",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    function a(a, b) {
      return function (c, e) {
        e = e();
        e = e.creation;
        var f = e.sessionId || "",
          g = e.finalizedMedia,
          j = g.caption,
          k = g.customAccessibilityCaption,
          l = g.geoTag;
        g = g.usertags;
        var m = e.filter.filterName,
          n = e.creationMode;
        e = g ? Array.from(g.values()) : [];
        g = d("PolarisCreationAPI").configure({
          uploadId: a,
          caption: j,
          geoTag: l,
          usertags: e,
          customAccessibilityCaption: k,
        });
        return g
          .then(function (a) {
            var b;
            if (
              ((b = a.media) == null ? void 0 : b.pk) != null &&
              ((b = a.media) == null ? void 0 : b.id) != null
            ) {
              c({
                type: "CREATION_FINALIZE_PHOTO_SUCCESS",
                mediaKey: String(a.media.pk),
              });
              (a.media != null && a.media.id != null) || i(0, 50426);
              b = String(a.media.id).split("_")[0];
              d("PolarisCreationLogger").logFilterUsed(
                f,
                "has_used_filter",
                "share_page",
                d("polarisIsWebGLSupported").isWebGLSupported() ? m : null
              );
              l &&
                d("PolarisCreationLogger").logCreationEvent(
                  f,
                  "has_added_location",
                  "share_page",
                  d("PolarisMediaConstants").MediaTypes.IMAGE
                );
              d("PolarisCreationLogger").logPostSucceeded(
                f,
                b,
                d("PolarisMediaConstants").MediaTypes.IMAGE
              );
              c(
                d("PolarisFeedActionRefreshFeedData").refreshFeedData(
                  d("PolarisFeedActionConstants").PAGE_SIZE,
                  !0
                )
              ).then(
                function () {
                  d("browserHistory").browserHistory.push("/"),
                    c(
                      d("PolarisNavigationActions").setNavSelection(
                        "NAVIGATION_SECTION_HOME"
                      )
                    ),
                    c(
                      d("PolarisToastActions").showToast({
                        text: h._("Your photo was posted."),
                        persistOnNavigate: !0,
                      })
                    ),
                    n ===
                      d("PolarisCreationMode").CreationMode
                        .PROFILE_PIC_POST_UPSELL &&
                      c(d("PolarisCreationActionResetState").resetState());
                },
                function () {
                  d("PolarisNavigationUtils").openURLWithFullPageReload("/");
                }
              );
            } else throw new Error(a.error_title);
          })
          ["catch"](function (a) {
            c({
              type: "CREATION_FINALIZE_PHOTO_FAILED",
              error: a,
              toast: d("PolarisCreationActionErrorUtils").getRetryToast(b, a),
            }),
              d("PolarisCreationLogger").logPostFailed(
                f,
                a,
                "finalize",
                d("PolarisMediaConstants").MediaTypes.IMAGE
              );
          });
      };
    }
    g.callFinalize = a;
  },
  98
);
__d(
  "polarisRenderCroppedImage",
  ["nullthrows", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.imageHeight,
        d = a.imageWidth,
        e = a.offsetLeft,
        f = a.offsetTop,
        g = a.resolution;
      g = g === void 0 ? 1080 : g;
      var h = a.rotationAngle,
        i = a.scaleFactor;
      a = a.sourceImg;
      c("warning")(
        h % 90 === 0,
        "Rotation angle should be multiple of 90 degrees"
      );
      var j = (i * b) / d;
      i = Math.min(d / i, d - e);
      d = Math.min(b / j, b - f);
      i >= d ? ((j = g), (b = (g * d) / i)) : ((b = g), (j = (g * i) / d));
      g = h % 180 === 90;
      var k = g ? j : b;
      g = g ? b : j;
      var l = document.createElement("canvas");
      l.width = g;
      l.height = k;
      var m = c("nullthrows")(l.getContext("2d"));
      m.translate(g / 2, k / 2);
      m.rotate((h * Math.PI) / 180);
      m.drawImage(a, e, f, i, d, -j / 2, -b / 2, j, b);
      return l;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCreationActionStartCreationSesssionFromProfilePic",
  [
    "fbt",
    "PolarisAPIFbUploaderPhoto",
    "PolarisCreationActionCallFinalize",
    "PolarisCreationActionStartCreationSession",
    "PolarisCreationMode",
    "PolarisCreationUtils",
    "PolarisImageFactory",
    "PolarisToastActions",
    "polarisGetBlobFromCanvas",
    "polarisReadImageFile",
    "polarisRenderCroppedImage",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      return function (b) {
        b(
          d("PolarisCreationActionStartCreationSession").startCreationSession(
            "profile_pic_upsell",
            d("PolarisCreationMode").CreationMode.PROFILE_PIC_POST_UPSELL
          )
        );
        return d("polarisReadImageFile")
          .readImageFile(a)
          .then(function (a) {
            var e = babelHelpers["extends"](
                {},
                d("PolarisCreationUtils").getDefaultCrop(a.width, a.width),
                { mirrored: a.mirrored, rotationAngle: a.rotationAngle }
              ),
              f = c("PolarisImageFactory").createImage();
            f.onload = function () {
              var g = c("polarisRenderCroppedImage")({
                sourceImg: f,
                offsetLeft: e.offsetLeft,
                offsetTop: e.offsetTop,
                scaleFactor: e.scaleFactor,
                rotationAngle: e.rotationAngle,
                imageWidth: a.width,
                imageHeight: a.height,
              });
              return c("polarisGetBlobFromCanvas")(g)
                .then(function (a) {
                  return d("PolarisAPIFbUploaderPhoto").fbUploaderPhoto(a);
                })
                .then(function (a) {
                  return b(
                    d("PolarisCreationActionCallFinalize").callFinalize(
                      a.upload_id
                    )
                  );
                });
            };
            f.src = a.dataURL;
          })
          ["catch"](function (a) {
            b(
              d("PolarisToastActions").showToast({
                text: h._("Upload failed."),
                persistOnNavigate: !0,
              })
            );
          });
      };
    }
    g.startCreationSesssionFromProfilePic = a;
  },
  98
);
__d(
  "PolarisFXIMChangePhotoConfirmDialog.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisFXIMManageSyncSettingsDialogItem.react",
    "PolarisFXIdentityProductFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useRef;
    function l(a) {
      return a != null
        ? a
        : h._(
            "Because you synced your profile photo, your photo will change on both Instagram and Facebook."
          );
    }
    function m(a) {
      return a != null
        ? a
        : h._(
            "Because you synced your profile photo, your photo will change on both Instagram and Facebook."
          );
    }
    function n(a) {
      return a != null ? a : h._("OK");
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      return a != null ? a : h._("Cancel");
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.manageSyncSettingsLabel,
        e = a.manageSyncSettingsURL,
        f = a.onClose,
        g = a.onConfirm,
        h = a.textCancelCTA,
        p = a.textConfirmCTA,
        q = a.textHeader;
      a = a.textSubtext;
      var r = k(!1);
      j(function () {
        r.current === !1 &&
          ((r.current = !0),
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_shown",
            type: "biz_edit_photo",
          }));
      }, []);
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        body: m(a),
        onModalClose: f,
        title: l(q),
        children: [
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            onClick: g,
            children: n(p),
          }),
          e != null && b != null
            ? i.jsx(c("PolarisFXIMManageSyncSettingsDialogItem.react"), {
                manageSyncSettingsLabel: b,
                manageSyncSettingsURL: e,
              })
            : null,
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: f,
            children: o(h),
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
  "PolarisFXIMRemovePhotoConfirmDialog.react",
  [
    "IGCoreDialog",
    "PolarisFXIMManageSyncSettingsDialogItem.react",
    "PolarisFXIdentityProductFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.isBCI,
        e = a.manageSyncSettingsLabel,
        f = a.manageSyncSettingsURL,
        g = a.onClose,
        j = a.onConfirm,
        k = a.textCancelCTA,
        l = a.textConfirmCTA,
        m = a.textHeader;
      a = a.textSubtext;
      i(
        function () {
          b === !0 &&
            c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
              event: "reminder_shown",
              type: "biz_remove_photo",
            });
        },
        [b]
      );
      return h.jsxs(d("IGCoreDialog").IGCoreDialog, {
        body: a,
        onModalClose: g,
        title: m,
        children: [
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: j,
            children: l,
          }),
          f != null &&
            e != null &&
            h.jsx(c("PolarisFXIMManageSyncSettingsDialogItem.react"), {
              manageSyncSettingsLabel: e,
              manageSyncSettingsURL: f,
            }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: g,
            children: k,
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
  "PolarisSharingProgressModal.react",
  [
    "cx",
    "fbt",
    "PolarisGenericMobileHeader.react",
    "PolarisLoadingBar.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { loadingBar: { zIndex: "xhtitgo", $$css: !0 } },
      l = i._("Sharing\u2026");
    function a(a) {
      a = a.sharingText;
      return j.jsxs("div", {
        className: "_aa8f",
        children: [
          j.jsx(c("PolarisLoadingBar.react"), { xstyle: k.loadingBar }),
          j.jsx(c("PolarisGenericMobileHeader.react"), {
            title: a != null && a.toString() !== "" ? a : l,
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
  "PolarisUserActionDismissChangeProfilePicConfirmDialog",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return { type: "CHANGE_PROFILE_PIC_CONFIRM_DIALOG_DISMISSED" };
    }
    f.dismissChangeProfilePicConfirmDialog = a;
  },
  66
);
__d(
  "PolarisUserActionDismissProfilePicPostUpsell",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return { type: "PROFILE_PIC_POST_UPSELL_DISMISSED" };
    }
    f.dismissProfilePicPostUpsell = a;
  },
  66
);
__d(
  "PolarisAPIChangeProfilePic",
  [
    "PolarisInstajax",
    "PolarisInstapi",
    "PolarisUploadHelpers",
    "polarisConfigureUrlForIgsrvAPI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 12e4;
    function a(a, b) {
      var e = new FormData();
      e.append("profile_pic", a, "profilepic.jpg");
      a = { dataType: "formdata", timeout: h };
      b = b
        ? d("PolarisUploadHelpers").createUploadProgressBefore(
            b,
            d("PolarisUploadHelpers").transferProgressObjectToOptimisticPercent
          )
        : void 0;
      return d("PolarisInstajax").post_UNTYPED(
        c("polarisConfigureUrlForIgsrvAPI")(
          "/api/v1/web/accounts/web_change_profile_picture/"
        ),
        e,
        a,
        b
      );
    }
    function b() {
      return d("PolarisInstapi")
        .apiPost("/api/v1/web/accounts/web_change_profile_picture/")
        .then(function (a) {
          return a.data;
        });
    }
    g.changeProfilePic = a;
    g.removeProfilePic = b;
  },
  98
);
__d(
  "PolarisUserActionGetPartialViewerData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return {
        has_profile_pic: a.has_profile_pic,
        profile_pic_url: a.profile_pic_url,
        profile_pic_url_hd: a.profile_pic_url_hd,
      };
    }
    f.getPartialViewerData = a;
  },
  66
);
__d(
  "PolarisUserActionRemoveProfilePic",
  [
    "PolarisAPIChangeProfilePic",
    "PolarisLogger",
    "PolarisUserActionGetPartialViewerData",
    "PolarisUserActionStrings",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return function (b) {
        d("PolarisLogger").logAction("removeProfilePicAttempt", { source: a });
        b({ type: "SET_PROFILE_PIC_REQUESTED" });
        return d("PolarisAPIChangeProfilePic")
          .removeProfilePic()
          .then(
            function (c) {
              c.changed_profile
                ? (d("PolarisLogger").logAction("removeProfilePicSuccess", {
                    source: a,
                  }),
                  b({
                    type: "SET_PROFILE_PIC_SUCCEEDED",
                    showProfilePicFirstPostUpsell: !1,
                    partialViewerData: d(
                      "PolarisUserActionGetPartialViewerData"
                    ).getPartialViewerData(c),
                    profilePicBlob: null,
                    toast: {
                      text: d("PolarisUserActionStrings")
                        .PROFILE_PIC_REMOVED_TOAST_MESSAGE,
                      persistOnNavigate: !0,
                    },
                  }))
                : (d("PolarisLogger").logAction("removeProfilePicFailure", {
                    source: a,
                  }),
                  b({
                    type: "SET_PROFILE_PIC_FAILED",
                    partialViewerData: d(
                      "PolarisUserActionGetPartialViewerData"
                    ).getPartialViewerData(c),
                    toast: { text: c.message, persistOnNavigate: !0 },
                  }));
            },
            function (c) {
              d("PolarisLogger").logAction("removeProfilePicFailure", {
                source: a,
              }),
                b({ type: "SET_PROFILE_PIC_FAILED" });
            }
          );
      };
    }
    g.removeProfilePic = a;
  },
  98
);
__d(
  "PolarisUserActionSetProfilePic",
  [
    "PolarisAPIChangeProfilePic",
    "PolarisFXIdentityProductFalcoEvent",
    "PolarisLogger",
    "PolarisUserActionGetPartialViewerData",
    "PolarisUserActionStrings",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      f === void 0 && (f = !1);
      return function (g) {
        d("PolarisLogger").logAction("setProfilePicAttempt", {
          source: b,
          type: e,
        });
        g({ type: "SET_PROFILE_PIC_REQUESTED" });
        return d("PolarisAPIChangeProfilePic")
          .changeProfilePic(a)
          .then(
            function (h) {
              if (h.changed_profile) {
                d("PolarisLogger").logAction("setProfilePicSuccess", {
                  source: b,
                });
                var i = !f && Boolean(h.profile_pic_to_post_upsell_eligible);
                g({
                  type: "SET_PROFILE_PIC_SUCCEEDED",
                  partialViewerData: d(
                    "PolarisUserActionGetPartialViewerData"
                  ).getPartialViewerData(h),
                  profilePicBlob: i ? a : null,
                  showProfilePicFirstPostUpsell: i,
                  toast: {
                    text: d("PolarisUserActionStrings")
                      .PROFILE_PIC_ADDED_TOAST_MESSAGE,
                    persistOnNavigate: !0,
                  },
                });
                c("PolarisFXIdentityProductFalcoEvent").log({
                  flow_type: "photo_editing",
                  fx_im_logger_events: "ig_web_pp_change_success",
                });
              } else
                d("PolarisLogger").logAction("setProfilePicFailure", {
                  source: b,
                  type: e,
                }),
                  g({
                    type: "SET_PROFILE_PIC_FAILED",
                    partialViewerData: d(
                      "PolarisUserActionGetPartialViewerData"
                    ).getPartialViewerData(h),
                    toast: { text: h.message, persistOnNavigate: !0 },
                  }),
                  c("PolarisFXIdentityProductFalcoEvent").log({
                    flow_type: "photo_editing",
                    fx_im_logger_events: "ig_web_pp_change_error",
                  });
            },
            function (a) {
              c("PolarisFXIdentityProductFalcoEvent").log({
                flow_type: "photo_editing",
                fx_im_logger_events: "ig_web_pp_change_error",
              }),
                d("PolarisLogger").logAction("setProfilePicFailure", {
                  source: b,
                  type: e,
                }),
                g({ type: "SET_PROFILE_PIC_FAILED" });
            }
          );
      };
    }
    g.setProfilePic = a;
  },
  98
);
__d(
  "PolarisUserActionShowChangeProfilePicConfirmDialog",
  ["PolarisFXIdentityProductFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
        event: "reminder_shown",
        type: "change_profile_picture_first_time",
      });
      return function (c) {
        c({
          setProfilePicBlob: a,
          setProfilePicSource: b,
          setProfilePicType: d,
          showChangeProfilePicConfirmDialog: !0,
          type: "CHANGE_PROFILE_PIC_CONFIRM_DIALOG_SHOWN",
        });
      };
    }
    g.showChangeProfilePicConfirmDialog = a;
  },
  98
);
__d(
  "usePolarisGetProfilePicEditSyncProps",
  [
    "PolarisGenericStrings",
    "PolarisInstapi",
    "PolarisReactRedux",
    "PolarisToastActions",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a) {
      var b = a.onFinish,
        e = b === void 0 ? c("emptyFunction") : b;
      b = a.onStart;
      var f = b === void 0 ? c("emptyFunction") : b,
        g = a.username,
        k = i(!1);
      b = j(null);
      a = b[0];
      var l = b[1],
        m = d("PolarisReactRedux").useDispatch();
      function n() {
        e();
      }
      h(function () {
        if (g != null && k.current === !1) {
          f();
          var a = d("PolarisInstapi")
            .apiGet("/api/v1/web/get_profile_pic_props/{username}/", {
              path: { username: g },
            })
            .then(function (a) {
              a = a.data;
              a = {
                changeProfilePicActionsScreenHeader:
                  (a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_header) || null,
                changeProfilePicActionsScreenSubheader:
                  (a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_subheader) || null,
                changeProfilePicActionsScreenUploadCTA:
                  (a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_upload_cta) || null,
                changeProfilePicActionsScreenRemoveCTA:
                  (a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_remove_cta) || null,
                changeProfilePicActionsScreenCancelCTA:
                  (a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_cancel_cta) || null,
                changeProfilePicHeader:
                  a == null ? void 0 : a.change_profile_pic_header,
                changeProfilePicSubtext:
                  a == null ? void 0 : a.change_profile_pic_subtext,
                showChangeProfilePicConfirmDialog:
                  (a == null
                    ? void 0
                    : a.show_change_profile_pic_confirm_dialog) || !1,
                removeProfilePicCancelCTA:
                  a == null ? void 0 : a.remove_profile_pic_cancel_cta,
                removeProfilePicConfirmCTA:
                  a == null ? void 0 : a.remove_profile_pic_confirm_cta,
                removeProfilePicHeader:
                  a == null ? void 0 : a.remove_profile_pic_header,
                removeProfilePicSubtext:
                  a == null ? void 0 : a.remove_profile_pic_subtext,
                showProfilePicSyncReminders:
                  a == null ? void 0 : a.show_profile_pic_sync_reminders,
                isBCI: a == null ? void 0 : a.is_business_central_identity,
                changeProfilePicManageSyncSettingsLabel:
                  a == null
                    ? void 0
                    : a.change_profile_pic_manage_sync_settings_label,
                changeProfilePicManageSyncSettingsURL:
                  a == null
                    ? void 0
                    : a.change_profile_pic_manage_sync_settings_url,
                changeProfilePicActionsScreenManageSyncSettingsURL:
                  a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_manage_sync_settings_url,
                changeProfilePicActionsScreenManageSyncSettingsLabel:
                  a == null
                    ? void 0
                    : a.change_profile_pic_actions_screen_manage_sync_settings_label,
                removeProfilePicManageSyncSettingsURL:
                  a == null
                    ? void 0
                    : a.remove_profile_pic_manage_sync_settings_url,
                removeProfilePicManageSyncSettingsLabel:
                  a == null
                    ? void 0
                    : a.remove_profile_pic_manage_sync_settings_label,
              };
              l(a);
              k.current = !0;
            })
            ["catch"](function () {
              m(
                d("PolarisToastActions").showToast({
                  text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                })
              );
            });
          a.then(n, n);
        }
      }, []);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePicEdit.react",
  [
    "fbt",
    "invariant",
    "PolarisConfirmDialog.react",
    "PolarisCreationActionCreationSelectImage",
    "PolarisCreationActionStartCreationSession",
    "PolarisCreationActionStartCreationSesssionFromProfilePic",
    "PolarisCreationMode",
    "PolarisEditProfilePicMenu.react",
    "PolarisFXIMChangePhotoConfirmDialog.react",
    "PolarisFXIMRemovePhotoConfirmDialog.react",
    "PolarisFXIdentityProductFalcoEvent",
    "PolarisImageFileForm.react",
    "PolarisLoadingModal.react",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "PolarisSharingProgressModal.react",
    "PolarisToastActions",
    "PolarisUA",
    "PolarisUserActionDismissChangeProfilePicConfirmDialog",
    "PolarisUserActionDismissProfilePicPostUpsell",
    "PolarisUserActionRemoveProfilePic",
    "PolarisUserActionSetProfilePic",
    "PolarisUserActionShowChangeProfilePicConfirmDialog",
    "nullthrows",
    "react",
    "usePolarisGetProfilePicEditSyncProps",
    "warning",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    f = e.forwardRef;
    var k = e.useImperativeHandle,
      l = e.useRef,
      m = e.useState;
    e = f(function (a, b) {
      var e = l(null),
        f = m(!1),
        g = f[0],
        n = f[1];
      f = m(!1);
      var o = f[0],
        p = f[1];
      f = m(!1);
      var q = f[0],
        r = f[1],
        s = c("usePolarisGetProfilePicEditSyncProps")({ username: a.username }),
        t = function () {
          var b;
          a.onDismissChangeProfilePicConfirmDialog();
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_confirm",
            type: "change_profile_picture_first_time",
          });
          a.onSetProfilePic(
            c("nullthrows")(a.setProfilePicBlob),
            c("nullthrows")(a.setProfilePicSource),
            c("nullthrows")(a.setProfilePicType),
            (b = a.skipPostUpsell) != null ? b : !1
          );
          n(!0);
        };
      f = function () {
        a.onDismissChangeProfilePicConfirmDialog(),
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_cancel",
            type: "change_profile_picture_first_time",
          });
      };
      var u = function (b) {
          if (b.length > 0) {
            var c =
              !g &&
              ((s == null ? void 0 : s.showChangeProfilePicConfirmDialog) ||
                !1);
            if (d("PolarisUA").isMobile())
              a.onStartCreationWithConfirmDialog(c),
                a.onSetProfilePicCreation(b[0]);
            else {
              var e =
                  a.analyticsContext != null && a.analyticsContext !== ""
                    ? a.analyticsContext
                    : "unknown",
                f = "upload";
              if (c) a.onShowChangeProfilePicConfirmDialog(b[0], e, f);
              else {
                a.onSetProfilePic(
                  b[0],
                  e,
                  f,
                  (c = a.skipPostUpsell) != null ? c : !1
                );
              }
            }
            p(!1);
          }
        },
        v = function (b) {
          a.onSetProfilePic(
            b,
            a.analyticsContext != null && a.analyticsContext !== ""
              ? a.analyticsContext
              : "unknown",
            "capture",
            (b = a.skipPostUpsell) != null ? b : !1
          );
        },
        w = function (a) {
          e.current
            ? (e.current.selectFile(), a.preventDefault())
            : c("warning")(
                !1,
                "Clicking Upload shouldn't be possible when image is not editable"
              );
        },
        x = function (b) {
          (s == null ? void 0 : s.showProfilePicSyncReminders) === !0
            ? (c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
                event: "reminder_shown",
                type: "remove_profile_picture",
              }),
              p(!1),
              r(!0))
            : (a.onRemoveProfilePic(
                a.analyticsContext != null && a.analyticsContext !== ""
                  ? a.analyticsContext
                  : "unknown"
              ),
              p(!1)),
            b.preventDefault();
        },
        y = function () {
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_confirm",
            type: "remove_profile_picture",
          }),
            a.onRemoveProfilePic(
              a.analyticsContext != null && a.analyticsContext !== ""
                ? a.analyticsContext
                : "unknown"
            ),
            z();
        },
        z = function () {
          c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
            event: "reminder_cancel",
            type: "remove_profile_picture",
          }),
            r(!1);
        },
        A = function () {
          a.uploadedProfilePicBlob || i(0, 51431),
            a.onProfilePicPostUpsellConfirmed(a.uploadedProfilePicBlob);
        },
        B = function () {
          (s == null ? void 0 : s.showProfilePicSyncReminders) === !0 &&
            c("PolarisFXIdentityProductFalcoEvent").logRemindersEvent({
              event: "reminder_cancel",
              type: "edit_photo_reminder",
            }),
            p(!1);
        },
        C = function (b) {
          c("PolarisFXIdentityProductFalcoEvent").log({
            flow_type: "photo_editing",
            fx_im_logger_events: "ig_web_pp_change_menu_shown",
          }),
            (s == null ? void 0 : s.showProfilePicSyncReminders) === !0 ||
            (a.hasExistingPic === !0 && a.skipEditMenu !== !0)
              ? (p(!0), b.preventDefault())
              : w(b);
        };
      k(b, function () {
        return {
          handleEditProfilePic: C,
          handleCloseEditProfilePicMenu: B,
          onUpload: w,
          handleFileChange: u,
          handleConfirmProfilePicChange: t,
          handleRemoveClick: x,
          handleConfirmRemoveProfilePicDialog: y,
          handleCloseRemoveProfilePicDialog: z,
          handleTakeImage: v,
          state: {
            isEditProfilePicMenuOpen: o,
            confirmedProfilePicChange: g,
            isRemoveProfilePicDialogOpen: q,
          },
          stateSetters: {
            setIsEditProfilePicMenuOpen: p,
            setConfirmedProfilePicChange: n,
            setIsRemoveProfilePicDialogOpen: r,
          },
        };
      });
      b = function () {
        return j.jsx(d("PolarisImageFileForm.react").ImageFileForm, {
          acceptMimeTypes: ["image/jpeg", "image/png"],
          onFileChange: u,
          ref: function (a) {
            return (e.current = a);
          },
        });
      };
      var D = a.hasExistingPic,
        E = a.profilePictureUrl,
        F = s == null ? void 0 : s.removeProfilePicCancelCTA,
        G = s == null ? void 0 : s.removeProfilePicConfirmCTA,
        H = s == null ? void 0 : s.removeProfilePicHeader,
        I = s == null ? void 0 : s.removeProfilePicSubtext,
        J = s == null ? void 0 : s.changeProfilePicActionsScreenHeader,
        K = s == null ? void 0 : s.changeProfilePicActionsScreenSubheader,
        L = s == null ? void 0 : s.changeProfilePicActionsScreenUploadCTA,
        M = s == null ? void 0 : s.changeProfilePicActionsScreenRemoveCTA,
        N = s == null ? void 0 : s.changeProfilePicActionsScreenCancelCTA;
      return j.jsxs("div", {
        children: [
          a.showLoadingModal &&
            j.jsx(c("PolarisSharingProgressModal.react"), {}),
          o && s == null && j.jsx(c("PolarisLoadingModal.react"), {}),
          o && s != null
            ? j.jsx(c("PolarisEditProfilePicMenu.react"), {
                changeProfilePicActionsScreenCancelCTA: N,
                changeProfilePicActionsScreenHeader: J,
                changeProfilePicActionsScreenManageSyncSettingsLabel:
                  s == null
                    ? void 0
                    : s.changeProfilePicActionsScreenManageSyncSettingsLabel,
                changeProfilePicActionsScreenManageSyncSettingsURL:
                  s == null
                    ? void 0
                    : s.changeProfilePicActionsScreenManageSyncSettingsURL,
                changeProfilePicActionsScreenRemoveCTA: M,
                changeProfilePicActionsScreenSubheader: K,
                changeProfilePicActionsScreenUploadCTA: L,
                entrypoint: a.entrypoint,
                hasExistingPic: !!D,
                isBCI: s == null ? void 0 : s.isBCI,
                onClose: B,
                onRemoveClick: x,
                onTakeImage: v,
                onUploadClick: w,
                profilePictureUrl: E,
                showProfilePicSyncReminders:
                  s == null ? void 0 : s.showProfilePicSyncReminders,
                children: b(),
              })
            : b(),
          a.showProfilePicFirstPostUpsell &&
            a.uploadedProfilePicBlob &&
            j.jsx(c("PolarisConfirmDialog.react"), {
              body: h._("You can share this photo as your first post."),
              confirmLabel: h._("Post"),
              onClose: a.onProfilePicPostUpsellDismissedAction,
              onConfirm: A,
              title: h._("Post Profile Photo?"),
            }),
          a.isConfirmDialogOpen === !0 &&
            j.jsx(c("PolarisFXIMChangePhotoConfirmDialog.react"), {
              manageSyncSettingsLabel:
                s == null ? void 0 : s.changeProfilePicManageSyncSettingsLabel,
              manageSyncSettingsURL:
                s == null ? void 0 : s.changeProfilePicManageSyncSettingsURL,
              onClose: f,
              onConfirm: t,
              textCancelCTA: s == null ? void 0 : s.changeProfilePicCancelCTA,
              textConfirmCTA: s == null ? void 0 : s.changeProfilePicConfirmCTA,
              textHeader: s == null ? void 0 : s.changeProfilePicHeader,
              textSubtext: s == null ? void 0 : s.changeProfilePicSubtext,
            }),
          q &&
            F != null &&
            G != null &&
            H != null &&
            I != null &&
            j.jsx(c("PolarisFXIMRemovePhotoConfirmDialog.react"), {
              isBCI: s == null ? void 0 : s.isBCI,
              manageSyncSettingsLabel:
                s == null ? void 0 : s.removeProfilePicManageSyncSettingsLabel,
              manageSyncSettingsURL:
                s == null ? void 0 : s.removeProfilePicManageSyncSettingsURL,
              onClose: z,
              onConfirm: y,
              textCancelCTA: F,
              textConfirmCTA: G,
              textHeader: H,
              textSubtext: I,
            }),
        ],
      });
    });
    e.displayName = "ProfilePicEdit";
    function a(a) {
      var b;
      return {
        showLoadingModal:
          a.creation.sessionId != null &&
          a.creation.sessionId !== "" &&
          a.creation.creationMode ===
            d("PolarisCreationMode").CreationMode.PROFILE_PIC_POST_UPSELL,
        isConfirmDialogOpen:
          (b = a.users.setProfilePicState) == null
            ? void 0
            : b.showConfirmDialog,
        showProfilePicFirstPostUpsell: a.users.showProfilePicFirstPostUpsell,
        uploadedProfilePicBlob: a.users.profilePicBlob,
        setProfilePicBlob:
          (b = a.users.setProfilePicState) == null ? void 0 : b.blob,
        setProfilePicSource:
          (b = a.users.setProfilePicState) == null ? void 0 : b.source,
        setProfilePicType:
          (b = a.users.setProfilePicState) == null ? void 0 : b.type,
      };
    }
    function b(a) {
      return {
        onShowChangeProfilePicConfirmDialog: function (b, c, e) {
          a(
            d(
              "PolarisUserActionShowChangeProfilePicConfirmDialog"
            ).showChangeProfilePicConfirmDialog(b, c, e)
          );
        },
        onSetProfilePicCreation: function (b) {
          a(d("PolarisNavigationActions").trackEntrypoint()),
            a(
              d("PolarisCreationActionCreationSelectImage").creationSelectImage(
                b
              )
            );
        },
        onSetProfilePic: function (b, c, e, f) {
          a(d("PolarisUserActionSetProfilePic").setProfilePic(b, c, e, f));
        },
        onRemoveProfilePic: function (b) {
          a(d("PolarisUserActionRemoveProfilePic").removeProfilePic(b));
        },
        onStartCreation: function () {
          a(
            d("PolarisCreationActionStartCreationSession").startCreationSession(
              "profile_pic",
              d("PolarisCreationMode").CreationMode.PROFILE_PIC
            )
          );
        },
        onStartCreationWithConfirmDialog: function (b) {
          a(
            d("PolarisCreationActionStartCreationSession").startCreationSession(
              "profile_pic",
              d("PolarisCreationMode").CreationMode.PROFILE_PIC,
              b
            )
          );
        },
        onDismissChangeProfilePicConfirmDialog: function () {
          a(
            d(
              "PolarisUserActionDismissChangeProfilePicConfirmDialog"
            ).dismissChangeProfilePicConfirmDialog()
          );
        },
        onProfilePicPostUpsellConfirmed: function (b) {
          a(
            d(
              "PolarisCreationActionStartCreationSesssionFromProfilePic"
            ).startCreationSesssionFromProfilePic(b)
          );
        },
        onProfilePicPostUpsellDismissedAction: function () {
          a(
            d(
              "PolarisUserActionDismissProfilePicPostUpsell"
            ).dismissProfilePicPostUpsell()
          );
        },
        onProfilePicFormError: function () {
          a(
            d("PolarisToastActions").showToast({
              text: d("PolarisImageFileForm.react").IMAGE_FORM_ERROR,
            })
          );
        },
      };
    }
    f = d("PolarisReactRedux").connect(a, b, null, { forwardRef: !0 })(e);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisNewUserActivatorsUnit.react",
  [
    "IGRouter",
    "PolarisAssetManagerGlyphMapping",
    "PolarisConnectToFacebook.react",
    "PolarisIGCoreActivatorCard",
    "PolarisIGCoreDeck",
    "PolarisNewUserActivatorsStrings",
    "PolarisNewUserActivatorsUnitTypes",
    "PolarisProfilePicEdit.react",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUA",
    "emptyFunction",
    "polarisSuggestedUserSelectors",
    "polarisUserSelectors",
    "react",
    "useForceUpdate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useRef,
      k = b.useState;
    function l(a) {
      a = a.onFirstPhotoUpload;
      return h.jsx(c("PolarisIGCoreActivatorCard"), {
        bodyText: d("PolarisNewUserActivatorsStrings").FIRST_PHOTO_BODY,
        buttonText: d("PolarisNewUserActivatorsStrings").FIRST_PHOTO_CTA,
        headerText: d("PolarisNewUserActivatorsStrings").FIRST_PHOTO_HEADER,
        icon: d("PolarisAssetManagerGlyphMapping").ICONS
          .CAMERA_OUTLINE_24_GREY9,
        iconAlt: d("PolarisNewUserActivatorsStrings").FIRST_PHOTO_BODY,
        onClick: (a = a) != null ? a : c("emptyFunction"),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m() {
      var a = d("IGRouter").useIGHistory();
      return h.jsx(c("PolarisIGCoreActivatorCard"), {
        bodyText: d("PolarisNewUserActivatorsStrings").PHONE_BODY,
        buttonText: d("PolarisNewUserActivatorsStrings").PHONE_CTA,
        headerText: d("PolarisNewUserActivatorsStrings").PHONE_HEADER,
        icon: d("PolarisAssetManagerGlyphMapping").ICONS.CALL_OUTLINE_24_GREY9,
        iconAlt: d("PolarisNewUserActivatorsStrings").PHONE_BODY,
        onClick: function () {
          return a.push(d("PolarisRoutes").PHONE_CONFIRM_PATH);
        },
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n() {
      var a = d("IGRouter").useIGHistory();
      return h.jsx(c("PolarisIGCoreActivatorCard"), {
        bodyText: d("PolarisNewUserActivatorsStrings").EDIT_PROFILE_BODY,
        buttonText: d("PolarisNewUserActivatorsStrings").EDIT_PROFILE_CTA,
        headerText: d("PolarisNewUserActivatorsStrings").EDIT_PROFILE_HEADER,
        icon: d("PolarisAssetManagerGlyphMapping").ICONS.USER_OUTLINE_24_GREY9,
        iconAlt: d("PolarisNewUserActivatorsStrings").EDIT_PROFILE_BODY,
        onClick: function () {
          return a.push(d("PolarisRoutes").PROFILE_EDIT_PATH);
        },
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.profilePicEditRef;
      return h.jsx(c("PolarisIGCoreActivatorCard"), {
        bodyText: d("PolarisNewUserActivatorsStrings").PROFILE_PHOTO_BODY,
        buttonText: d("PolarisNewUserActivatorsStrings").PROFILE_PHOTO_CTA,
        headerText: d("PolarisNewUserActivatorsStrings").PROFILE_PHOTO_HEADER,
        icon: d("PolarisAssetManagerGlyphMapping").ICONS
          .CAMERA_OUTLINE_24_GREY9,
        iconAlt: d("PolarisNewUserActivatorsStrings").PROFILE_PHOTO_BODY,
        onClick: function (a) {
          var c;
          b == null
            ? void 0
            : (c = b.current) == null
            ? void 0
            : c.handleEditProfilePic(a);
        },
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    var p = h.forwardRef(function (a, b) {
      return h.jsxs("div", {
        className: a.className,
        children: [
          h.jsx(c("PolarisIGCoreDeck"), {
            cardType: "ACTIVATOR",
            hasBlur: !d("PolarisUA").isMobile(),
            headerText: d("PolarisNewUserActivatorsStrings").GETTING_STARTED,
            children: a.children,
          }),
          h.jsx(c("PolarisProfilePicEdit.react"), {
            analyticsContext: a.analyticsContext,
            hasExistingPic: !1,
            ref: b,
          }),
        ],
      });
    });
    function a(b) {
      var e = b.className,
        g = b.fallbackComponent,
        q = b.inDesktopFeedCreationUpsellQE,
        a = b.module;
      b = b.onFirstPhotoUpload;
      var r = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        }),
        s = (r == null ? void 0 : r.fullName) !== "",
        t = r == null ? void 0 : r.hasPhoneNumber,
        u = r == null ? void 0 : r.hasProfilePic;
      r = r == null ? void 0 : r.isNew;
      var v = d("PolarisReactRedux").useSelector(
        i(function (a) {
          return {
            canFBConnect: d(
              "polarisSuggestedUserSelectors"
            ).shouldDisplayFacebookConnect(a),
          };
        }, [])
      );
      v = v.canFBConnect;
      var w = j(null),
        x = k(!1),
        y = x[0],
        z = x[1],
        A = c("useForceUpdate")();
      if (r == null || r === !1) {
        return (x = g) != null ? x : null;
      }
      r = [
        q === !0 &&
          a === d("PolarisNewUserActivatorsUnitTypes").MODULES.profile &&
          h.jsx(
            l,
            { onFirstPhotoUpload: b },
            d("PolarisNewUserActivatorsUnitTypes").KEYS.addFirstPhoto
          ),
        v &&
          !y &&
          h.jsx(
            c("PolarisConnectToFacebook.react"),
            {
              analyticsContext: "selfProfilePage",
              nuxType: "activator",
              onError: function () {
                z(!0), A();
              },
              returnURL: "/",
            },
            d("PolarisNewUserActivatorsUnitTypes").KEYS.connectToFacebook
          ),
        t !== !0 &&
          h.jsx(m, {}, d("PolarisNewUserActivatorsUnitTypes").KEYS.addPhone),
        s !== !0 &&
          h.jsx(n, {}, d("PolarisNewUserActivatorsUnitTypes").KEYS.editProfile),
        u !== !0 &&
          h.jsx(
            o,
            { profilePicEditRef: w },
            d("PolarisNewUserActivatorsUnitTypes").KEYS.editProfilePhoto
          ),
      ].filter(function (a) {
        return a;
      });
      if (r.length === 0) {
        return (x = g) != null ? x : null;
      }
      return h.jsx(p, { className: e, ref: w, children: r });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPhoneConfirmTypes",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ add: null, confirm: null });
    g.USAGE = a;
  },
  98
);
__d(
  "PolarisProfilePageUtils",
  ["filterNulls"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /^[^.:/?#]+:\/+/;
    function a(a) {
      return (a == null ? void 0 : a.length) === 0 || a == null
        ? []
        : c("filterNulls")(
            a.map(function (a) {
              return a != null &&
                (a == null ? void 0 : a.url) != null &&
                (a == null ? void 0 : a.url) !== "" &&
                (a == null ? void 0 : a.lynx_url) != null &&
                (a == null ? void 0 : a.lynx_url) !== ""
                ? { title: a.title, lynx_url: a.lynx_url, url: a.url }
                : null;
            })
          );
    }
    function i(a) {
      a = a.replace(h, "");
      return a.replace(/\/$/, "");
    }
    function b(a) {
      if (a == null || a.length === 0) return "";
      var b = i(a[0]);
      return a.length === 1 ? b : b + " + " + String(a.length - 1);
    }
    g.getFilterBioLinks = a;
    g.getLinkForDisplay = i;
    g.getMultipleLinksStringForEditPage = b;
  },
  98
);
__d(
  "PolarisProfilePageWebsiteLink.react",
  [
    "PolarisExternalLink.react",
    "PolarisIGCoreText",
    "PolarisProfilePageUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.authorID,
        e = a.href;
      a.isSmallScreen;
      var f = a.label;
      a = a.pageID;
      if (e == null || e === "" || f == null || f === "") return null;
      f = d("PolarisProfilePageUtils").getLinkForDisplay(f);
      return h.jsx(c("PolarisExternalLink.react"), {
        author_id: b,
        href: e,
        page_id: a,
        rel: "me nofollow noopener noreferrer",
        children: h.jsx(c("PolarisIGCoreText").BodyEmphasized, {
          color: "ig-link",
          display: "truncated",
          zeroMargin: !0,
          children: f,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageMultipleLinksButton.react",
  [
    "fbt",
    "PolarisIGCoreButton",
    "PolarisIGCoreText",
    "PolarisProfilePageUtils",
    "PolarisProfilePageWebsiteLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.handleMultipleLinksClick,
        e = a.isSmallScreen,
        f = a.pageID;
      a = a.user;
      var g = d("PolarisProfilePageUtils").getFilterBioLinks(a.bioLinks);
      if (g.length === 0)
        return i.jsx(c("PolarisProfilePageWebsiteLink.react"), {
          authorID: Number(a.id),
          href: a.websiteLinkshimmed,
          isSmallScreen: e,
          label: a.website,
          pageID: f,
        });
      var j = d("PolarisProfilePageUtils").getLinkForDisplay(g[0].url);
      if (g.length === 1)
        return i.jsx(c("PolarisProfilePageWebsiteLink.react"), {
          authorID: Number(a.id),
          href: g[0].lynx_url,
          isSmallScreen: e,
          label: g[0].url,
          pageID: f,
        });
      a = h._("{title of bio link} + {other}", [
        h._param("title of bio link", j),
        h._param("other", g.length - 1),
      ]);
      return i.jsx(c("PolarisIGCoreButton"), {
        borderless: !0,
        onClick: b,
        children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
          color: "ig-link",
          display: "truncated",
          zeroMargin: !0,
          children: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageBiography.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSText.react",
    "PolarisExternalLink.react",
    "PolarisGroupProfileUtils",
    "PolarisIGCoreText",
    "PolarisInternalBadge.react",
    "PolarisNavigationStrings",
    "PolarisProfileContext.react",
    "PolarisProfilePageMultipleLinksButton.react",
    "PolarisTransparencyLabel.react",
    "PolarisTransparencyUtils",
    "PolarisUserText.react",
    "gkx",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo;
    function l(a) {
      return i._("You have restricted {username}.", [i._param("username", a)]);
    }
    var m = "profilePage";
    function n(a) {
      var b = a.handleUnrestrictUserClick,
        e = a.isRestrictedByViewer;
      a = a.user;
      if (e && a.username != null && a.username !== "")
        return j.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          direction: "row",
          marginTop: 6,
          position: "relative",
          wrap: !0,
          children: [
            j.jsx(c("IGDSText.react").Body, {
              color: "secondaryText",
              children: l(a.username),
            }),
            j.jsx(c("IGDSBox.react"), {
              paddingX: 1,
              position: "relative",
              children: j.jsx(c("IGDSButton.react"), {
                label: d("PolarisNavigationStrings")
                  .UNRESTRICT_USER_BUTTON_TEXT,
                onClick: function () {
                  b("unrestrict_profile_header");
                },
                variant: "secondary_link",
              }),
            }),
          ],
        });
      else if (
        (a == null
          ? void 0
          : (e = a.mutualFollowers) == null
          ? void 0
          : (e = e.usernames) == null
          ? void 0
          : e[0]) != null
      )
        return j.jsx(c("PolarisProfileContext.react"), {
          isGroupProfile: d("PolarisGroupProfileUtils").getIsUserGroupProfile(
            a
          ),
          mutualFollowers: a.mutualFollowers,
          username: c("nullthrows")(a.username),
        });
      return null;
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      a = a.user;
      if (
        c("gkx")("4827") === !0 &&
        a.fullName != null &&
        a.fullName !== "" &&
        a.pronouns != null &&
        a.pronouns.length > 0
      ) {
        return j.jsxs(c("PolarisIGCoreText").Body, {
          color: "ig-secondary-text",
          display: "inline",
          zeroMargin: !0,
          children: ["\xa0", (a = a.pronouns) == null ? void 0 : a.join("/")],
        });
      }
      return null;
    }
    function p(a) {
      var b = a.internalIcon;
      a = a.user;
      return a.fullName == null || a.fullName === ""
        ? null
        : j.jsxs(c("PolarisIGCoreText").BodyEmphasized, {
            display: "inline",
            zeroMargin: !0,
            children: [a.fullName, b],
          });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.handleMultipleLinksClick,
        e = a.handleUnrestrictUserClick,
        f = a.hasPosts,
        g = a.isRestrictedByViewer,
        h = a.isSmallScreen,
        i = a.isViewingOwnProfile,
        l = a.user;
      a = l.connectedFBPage && f;
      f =
        l.shouldShowCategory === !0 &&
        l.categoryName !== "" &&
        l.categoryName !== null;
      var q = k(
          function () {
            var a,
              b = [],
              c = [];
            (
              ((a = l.biographyWithEntities) == null ? void 0 : a.entities) ||
              []
            ).forEach(function (a) {
              var d;
              (a == null
                ? void 0
                : (d = a.user) == null
                ? void 0
                : d.username) != null
                ? b.push(a.user.username)
                : (a == null
                    ? void 0
                    : (d = a.hashtag) == null
                    ? void 0
                    : d.name) != null && c.push(a.hashtag.name);
            });
            return { allowedMentions: b, allowedHashtags: c };
          },
          [l.biographyWithEntities]
        ),
        r =
          l.isInternal === !0
            ? j.jsx(c("IGDSBox.react"), {
                display: "inlineBlock",
                marginStart: 1,
                position: "relative",
                children: j.jsx(c("PolarisInternalBadge.react"), {}),
              })
            : null;
      return j.jsxs("div", {
        className: "_aa_c",
        children: [
          j.jsx(p, { internalIcon: r, user: l }),
          j.jsx(o, { user: l }),
          l.fullName != null && l.fullName !== "" ? j.jsx("br", {}) : null,
          d("PolarisTransparencyUtils").shouldShowTransparencyLabel(l)
            ? j.jsx(c("PolarisTransparencyLabel.react"), {
                className: "_aa_d",
                screen: "profile",
                user: l,
              })
            : null,
          f === !0
            ? j.jsx(c("IGDSBox.react"), {
                position: "relative",
                children: j.jsx(c("PolarisUserText.react"), {
                  color: "ig-secondary-text",
                  size: "body",
                  value: l.categoryName,
                }),
              })
            : null,
          l.bio != null && l.bio !== ""
            ? j.jsx(c("PolarisUserText.react"), {
                allowedEntities: q,
                headlineTag: "h1",
                size: "body",
                value: l.bio,
              })
            : null,
          (l.fullName != null && l.fullName !== "") ||
          (l.bio != null && l.bio !== "")
            ? " "
            : null,
          j.jsx(c("PolarisProfilePageMultipleLinksButton.react"), {
            handleMultipleLinksClick: b,
            isSmallScreen: h,
            pageID: m,
            user: l,
          }),
          !i &&
            j.jsx(n, {
              handleUnrestrictUserClick: e,
              isRestrictedByViewer: g,
              user: l,
            }),
          a === !0 && j.jsx("br", {}),
          a === !0 &&
            j.jsx(c("PolarisExternalLink.react"), {
              href: c("nullthrows")(l.connectedFBPage).url,
              page_id: m,
              target: "_blank",
              children: c("nullthrows")(l.connectedFBPage).name,
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
  "PolarisProfileAvatar.react",
  [
    "PolarisEditableUserAvatar.react",
    "PolarisReactRedux",
    "PolarisUserAvatarWithStories.react",
    "nullthrows",
    "polarisAvatarConstants",
    "polarisStorySelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.analyticsContext,
        e = a.className,
        f = a["data-testid"];
      f = a.editable;
      var g = a.isLive,
        i = a.isPrivate,
        j = a.isSilhouette,
        k = a.isSmallScreen,
        l = a.isUploading,
        m = a.src,
        n = a.userId;
      a = a.username;
      var o = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisStorySelectors").userHasReel(a, c("nullthrows")(n));
      });
      return (f && !o) || i
        ? h.jsx("div", {
            className: e,
            "data-testid": void 0,
            children: h.jsx(c("PolarisEditableUserAvatar.react"), {
              analyticsContext: b,
              editable: f,
              entrypoint: "ig_web_profile_photo",
              isSilhouette: j,
              isUploading: l,
              src: m,
              username: a,
            }),
          })
        : h.jsx(c("PolarisUserAvatarWithStories.react"), {
            animateOnLoad: !0,
            "data-testid": void 0,
            isLink: !1,
            profilePictureUrl: m,
            showLiveBadge: g === !0,
            showLivePulse: g === !0,
            showLiveRing: g === !0,
            size:
              k === !0
                ? d("polarisAvatarConstants").PROFILE_AVATAR_SIZE_SMALL
                : d("polarisAvatarConstants").PROFILE_AVATAR_SIZE_LARGE,
            storyEntrypoint: "reel_profile",
            userId: n,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProfileAvatar = a;
  },
  98
);
__d(
  "PolarisProfileStatistics.react",
  [
    "PolarisFollowedByStatistic.react",
    "PolarisFollowsStatistic.react",
    "PolarisGroupAdminsStatistic.react",
    "PolarisGroupMembersStatistic.react",
    "PolarisLinkBuilder",
    "PolarisNavigationActions",
    "PolarisPostsStatistic.react",
    "PolarisReactRedux",
    "PolarisSocialProofStatisticVariant",
    "PolarisUA",
    "memoizeWithArgs",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("memoizeWithArgs")(
        function (a, b, c, e) {
          return function (f) {
            f.preventDefault(),
              d("PolarisUA").isDesktop()
                ? e("feature_wall", d("PolarisLinkBuilder").buildUserLink(b), a)
                : c(a, b);
          };
        },
        function (a) {
          return a;
        }
      );
    function a(a) {
      var b = a.canSeeFollowList,
        e = a.counts,
        f = a.groupMetadata,
        g = a.isLoggedIn,
        j = a.isSmallScreen,
        k = a.isViewingOwnProfile,
        l = a.onLoggedOutIntentClick,
        m = a.onLoggedOutIntentClickLoginModal,
        n = a.selectedTabId;
      a = a.username;
      var o =
          "" +
          (j
            ? " x6s0dn4 x78zum5 xvs91rp xl56j7k x2b8uid x1ltjmfc x2pgyrj x4tmyev"
            : " xl565be    x2pgyrj  x1m39q7l x1uw6ca5"),
        p = d("PolarisSocialProofStatisticVariant").SOCIAL_PROOF_STATS_VARIANTS[
          "default"
        ];
      j &&
        (p = d("PolarisSocialProofStatisticVariant").SOCIAL_PROOF_STATS_VARIANTS
          .stacked);
      var q = d("PolarisLinkBuilder").buildUserLink(a),
        r = q + "followers/",
        s = q + "following/",
        t = q + "members/";
      q = q + "admins/";
      var u = function (a) {
          return a == null ? !1 : b && (a > 0 || k) && g;
        },
        v,
        w,
        x,
        y,
        z;
      g ||
        ((v = i("profile_posts", a, l, m)),
        (w = i("followed_by_list", a, l, m)),
        (x = i("follows_list", a, l, m)),
        (y = i("members_list", a, l, m)),
        (z = i("admins_list", a, l, m)));
      return h.jsxs("ul", {
        className:
          "" +
          (j
            ? " x1wzhzgj x78zum5 x1q0g3np x1l1ennw xz9dl7a x4uap5 xsag5q8 xkhd6sd"
            : " x78zum5 x1q0g3np      xieb3on"),
        children: [
          h.jsx("li", {
            className: o,
            children: h.jsx(c("PolarisPostsStatistic.react"), {
              onClick: v,
              shortenNumber: !1,
              value: c("nullthrows")(e.media),
              variant: p,
            }),
          }),
          h.jsx("li", {
            className: o,
            children:
              (f == null ? void 0 : f.is_group) === !0
                ? h.jsx(c("PolarisGroupMembersStatistic.react"), {
                    href: u(e.followedBy) ? t : null,
                    onClick: y,
                    selectedTabId: n,
                    value: c("nullthrows")(e.followedBy),
                    variant: p,
                  })
                : h.jsx(c("PolarisFollowedByStatistic.react"), {
                    href: u(e.followedBy) ? r : null,
                    onClick: w,
                    selectedTabId: n,
                    value: c("nullthrows")(e.followedBy),
                    variant: p,
                  }),
          }),
          h.jsx("li", {
            className: o,
            children:
              (f == null ? void 0 : f.is_group) === !0
                ? h.jsx(c("PolarisGroupAdminsStatistic.react"), {
                    href: u(e.admins) ? q : null,
                    onClick: z,
                    selectedTabId: n,
                    value: c("nullthrows")(e.admins),
                    variant: p,
                  })
                : h.jsx(c("PolarisFollowsStatistic.react"), {
                    href: u(e.follows) ? s : null,
                    onClick: x,
                    selectedTabId: n,
                    value: c("nullthrows")(e.follows),
                    variant: p,
                  }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = {
      onLoggedOutIntentClick: d("PolarisNavigationActions")
        .openLoggedOutIntentDialog,
      onLoggedOutIntentClickLoginModal: d("PolarisNavigationActions")
        .openLoginModal,
    };
    e = d("PolarisReactRedux").connect(null, b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisProfilePageHeader.react",
  [
    "fbt",
    "AboutThisAccountRefererTypes",
    "IGDSBox.react",
    "IGDSCircleAddPanoFilledIcon",
    "IGDSMoreHorizontalPanoOutlineIcon",
    "IGDSSettingsPanoOutlineIcon",
    "IGDSText.react",
    "PolarisAboutThisAccountUtils",
    "PolarisConfig",
    "PolarisErrorBoundary.react",
    "PolarisFastLink.react",
    "PolarisIGCoreSVGIconButton",
    "PolarisIGCoreVerifiedBadge",
    "PolarisProfileAvatar.react",
    "PolarisProfilePageBiography.react",
    "PolarisProfileStatistics.react",
    "PolarisStoryCreationFileForm.react",
    "PolarisUA",
    "gkx",
    "nullthrows",
    "polarisIsUserLoggedIn",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useRef,
      k = "profilePage",
      l = h._("Options");
    function a(a) {
      var b = a.canSeeFollowList,
        e = a.handleAboutThisAccountClick,
        g = a.handleMultipleLinksClick,
        m = a.handleOptionsClick,
        n = a.handleUnrestrictUserClick,
        o = a.hasPosts,
        p = a.isLive,
        q = a.isPrivateProfile,
        r = a.isRestrictedByViewer,
        s = a.isSmallScreen,
        t = a.isUploadingProfilePic,
        u = a.isViewingOwnProfile,
        v = a.pixelRatio,
        w = a.renderProfileActionButtons,
        x = a.selectedTabId,
        y = a.user;
      a = a.viewer;
      var z = u(),
        A = z && a ? !a.hasProfilePic : void 0,
        B = d("PolarisUA").isMobile() ? a != null && !u() : a != null,
        C =
          d("PolarisUA").isDesktop() && y.isPrivate !== !0 && c("gkx")("4823");
      C =
        (!d("polarisIsUserLoggedIn").isUserLoggedIn() &&
          c("gkx")("4829") &&
          d("PolarisConfig").isLoggedOutReportableCountryCode()) ||
        C;
      var D = j(null),
        E = d("PolarisUA").isMobile() && u() && c("qex")._("124") === !0,
        F =
          (y.fullName != null && y.fullName !== "") ||
          (y.bio != null && y.bio.trim() !== "");
      function G() {
        return i.jsx(c("IGDSText.react").Title, {
          elementType: F ? "h2" : "h1",
          testid: void 0,
          zeroMargin: !0,
          children: y.username,
        });
      }
      G.displayName = G.name + " [from " + f.id + "]";
      return i.jsxs("header", {
        className:
          "x1qjc9v5 x78zum5 x1q0g3np x2lah0s x1n2onr6 xc2v4qs x1qsaojo x1xl8k2i" +
          (s
            ? " x112ta8 x1hq5gj4 x18d9i69 x1vld4op x629ltq xwhz1lb x53tqqp"
            : " x1kcpa7z x1ez9qw7"),
        children: [
          i.jsxs("div", {
            className:
              "x2lah0s x78zum5 xdt5ytf xl56j7k x1n2onr6 x16fuon9 x5bv2cf x9ozhqo xbn8dsz x184cenk",
            children: [
              i.jsx(d("PolarisProfileAvatar.react").ProfileAvatar, {
                analyticsContext: k,
                className:
                  "x1lliihq x1gryazu xkrivgy x8x67bk xpxs0b8 x10nhkw x1lb84uk",
                "data-testid": void 0,
                editable: z,
                fullName: y.fullName,
                isLive: p,
                isPrivate: q(),
                isSilhouette: A,
                isSmallScreen: s,
                isUploading: t,
                src:
                  y.profilePictureUrlHd != null && ((!s && v > 1) || v > 2)
                    ? y.profilePictureUrlHd
                    : y.profilePictureUrl || "",
                userId: y.id,
                username: y.username,
              }),
              E &&
                i.jsxs("div", {
                  className:
                    "x10l6tqk x1nvd71e xdawf45 x14tgi4b x14yjl9h xudhj91 x18nykt9 xww2gxu xcrvosb x1nvg7jw x1sswb1f xlrmpq",
                  children: [
                    i.jsx("button", {
                      className:
                        "x6umtig x1b1mbwd xaqea5y xav7gou x1619dve xexx8yu x4uap5 x18d9i69 xkhd6sd xcdnw81",
                      onClick: function () {
                        var a;
                        (a = D.current) == null
                          ? void 0
                          : a.handleStoryCreationClick();
                      },
                      children: i.jsx(c("IGDSCircleAddPanoFilledIcon"), {
                        alt: h._("Plus icon"),
                        color: "ig-primary-button",
                        size: 16,
                      }),
                    }),
                    i.jsx(c("PolarisStoryCreationFileForm.react"), {
                      entryPoint: "your_story_placeholder",
                      ref: function (a) {
                        return (D.current = a);
                      },
                    }),
                  ],
                }),
            ],
          }),
          i.jsxs("section", {
            className:
              "x1qjc9v5 x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x5n08af x78zum5 xdt5ytf xs83m0k xeuugli xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xk390pu x11njtxf x139hhg0 x1qgnrqa xg1prrt x1quol0o",
            children: [
              i.jsxs("div", {
                className: "x6s0dn4 x78zum5 x1q0g3np xs83m0k xeuugli x1n2onr6",
                children: [
                  d("PolarisAboutThisAccountUtils").getIsEligibleForATA(y)
                    ? i.jsx(c("PolarisFastLink.react"), {
                        className:
                          "x6s0dn4 x78zum5 x1q0g3np xs83m0k xeuugli x1n2onr6",
                        onClick: function () {
                          e(c("AboutThisAccountRefererTypes").PROFILE_USERNAME);
                        },
                        children: G(),
                      })
                    : G(),
                  y.isVerified === !0
                    ? i.jsx(c("IGDSBox.react"), {
                        marginStart: 2,
                        marginTop: 1,
                        position: "relative",
                        children: i.jsx(c("PolarisIGCoreVerifiedBadge"), {}),
                      })
                    : null,
                  !s && w(),
                  (B || C) &&
                    i.jsx("div", {
                      className: "x1q0g3np x2lah0s x8j4wrb",
                      children: i.jsx(c("PolarisIGCoreSVGIconButton"), {
                        onClick: m,
                        children: u()
                          ? i.jsx(c("IGDSSettingsPanoOutlineIcon"), { alt: l })
                          : i.jsx(c("IGDSMoreHorizontalPanoOutlineIcon"), {
                              alt: l,
                              size: 32,
                            }),
                      }),
                    }),
                ],
              }),
              i.jsx("div", {
                className: "xkfe5hh xxz05av",
                children: i.jsx("div", {
                  children:
                    ((z = y.groupMetadata) == null ? void 0 : z.is_group) === !0
                      ? i.jsx(c("IGDSText.react").Body2, {
                          children: h._("Group profile"),
                        })
                      : null,
                }),
              }),
              s && w(),
              !s &&
                i.jsx(c("PolarisErrorBoundary.react"), {
                  errorRenderer: function () {
                    return null;
                  },
                  children: i.jsx(c("PolarisProfileStatistics.react"), {
                    canSeeFollowList: b || !1,
                    counts: c("nullthrows")(y.counts),
                    groupMetadata: y.groupMetadata,
                    isLoggedIn: !!a,
                    isSmallScreen: s,
                    isViewingOwnProfile: u(),
                    selectedTabId: x,
                    username: c("nullthrows")(y.username),
                  }),
                }),
              !s &&
                i.jsx(c("PolarisErrorBoundary.react"), {
                  children: i.jsx(c("PolarisProfilePageBiography.react"), {
                    handleMultipleLinksClick: g,
                    handleUnrestrictUserClick: n,
                    hasPosts: o,
                    isRestrictedByViewer: r,
                    isSmallScreen: s,
                    isViewingOwnProfile: u(),
                    user: y,
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
  "PolarisAddPeopleButton.react",
  [
    "IGDSUserFollowFilledIcon",
    "IGDSUserFollowOutlineIcon",
    "PolarisIGCoreSVGIconButton",
    "PolarisLogger",
    "PolarisNavigationStrings",
    "PolarisRoutes",
    "browserHistory",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.containerModule;
      a = a.filled;
      a = a === void 0 ? !1 : a;
      return h.jsx(c("PolarisIGCoreSVGIconButton"), {
        onClick: function () {
          d("PolarisLogger").logAction("discoverButtonClicked", {
            containerModule: b,
          }),
            d("browserHistory").browserHistory.push(
              d("PolarisRoutes").DISCOVER_PEOPLE_PATH
            );
        },
        children: a
          ? h.jsx(c("IGDSUserFollowFilledIcon"), {
              alt: d("PolarisNavigationStrings").DISCOVER_PEOPLE_TEXT,
            })
          : h.jsx(c("IGDSUserFollowOutlineIcon"), {
              alt: d("PolarisNavigationStrings").DISCOVER_PEOPLE_TEXT,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageMobileHeader.react",
  [
    "cx",
    "fbt",
    "CometPressable.react",
    "IGDSBox.react",
    "IGDSChevronIcon",
    "IGDSSettingsPanoOutlineIcon",
    "IGDSText.react",
    "PolarisAddPeopleButton.react",
    "PolarisGenericMobileHeader.react",
    "PolarisGenericStrings",
    "PolarisNavBackButton.react",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "PolarisRoutes",
    "browserHistory",
    "polarisIsUserLoggedIn",
    "react",
    "usePolarisHideNavQueryParam",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = i._("Options");
    function l(a) {
      a = a.pageIdentifier;
      return [
        j.jsx(c("PolarisNavBackButton.react"), { analyticsContext: a }, "back"),
      ];
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      a = a.username;
      var b = d("PolarisReactRedux").useDispatch(),
        e = function () {
          b(
            d("PolarisNavigationActions").openAccountSwitcher({
              next: d("PolarisRoutes").FEED_PATH,
              source: "mobile_nav",
            })
          );
        };
      return d("polarisIsUserLoggedIn").isUserLoggedIn()
        ? j.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            position: "relative",
            width: "100%",
            children: j.jsx(c("CometPressable.react"), {
              onPress: e,
              overlayDisabled: !0,
              children: j.jsxs(c("IGDSBox.react"), {
                alignItems: "center",
                direction: "row",
                justifyContent: "center",
                position: "relative",
                children: [
                  j.jsx("div", {
                    className: "_ab07",
                    children: j.jsx(c("IGDSText.react").Section, {
                      children: a,
                    }),
                  }),
                  j.jsx(c("IGDSBox.react"), {
                    padding: 2,
                    position: "relative",
                    children: j.jsx(c("IGDSChevronIcon"), {
                      alt: d("PolarisGenericStrings").DOWN_CHEVRON_ALT,
                      direction: "down",
                      size: 16,
                    }),
                  }),
                ],
              }),
            }),
          })
        : a;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.isViewingOwnProfile,
        e = a.onOpenMobileNavMenu,
        f = a.pageIdentifier;
      a = a.username;
      var g = function () {
          return e();
        },
        h = c("usePolarisHideNavQueryParam")();
      h = h && !d("browserHistory").canGoBack();
      return b
        ? j.jsx(c("PolarisGenericMobileHeader.react"), {
            leftActions: j.jsx(
              "button",
              {
                className: "_ab08",
                onClick: g,
                children: j.jsx(c("IGDSSettingsPanoOutlineIcon"), { alt: k }),
              },
              "settings"
            ),
            rightActions: j.jsx(c("PolarisAddPeopleButton.react"), {
              containerModule: "profile",
            }),
            title: j.jsx(m, { username: (b = a) != null ? b : "" }),
          })
        : j.jsx(c("PolarisGenericMobileHeader.react"), {
            leftActions: h ? void 0 : j.jsx(l, { pageIdentifier: f }),
            title: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePageMultipleLinksModal.react",
  [
    "fbt",
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSLinkPanoOutlineIcon",
    "PolarisExternalLink.react",
    "PolarisIGCoreModalHeader",
    "PolarisIGCoreText",
    "PolarisProfilePageUtils",
    "filterNulls",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Links");
    function a(a) {
      var b = a.authorID,
        e = a.bioLinks,
        f = a.onClose,
        g = a.pageID;
      a = d("PolarisProfilePageUtils").getFilterBioLinks(e);
      e = c("filterNulls")(
        a == null
          ? void 0
          : a.map(function (a, c) {
              return i.jsx(k, { authorID: b, link: a, pageID: g }, c);
            })
      );
      return i.jsx(c("IGCoreModal"), {
        onClose: f,
        children: i.jsxs(c("IGDSBox.react"), {
          flex: "grow",
          minHeight: 120,
          position: "relative",
          children: [
            i.jsx(c("PolarisIGCoreModalHeader"), { onClose: f, children: j }),
            e,
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.authorID,
        e = a.link;
      a = a.pageID;
      var f = e.title != null && e.title !== "",
        g = d("PolarisProfilePageUtils").getLinkForDisplay(e.url),
        j = i.jsx(c("IGDSBox.react"), {
          alignItems: "center",
          border: !0,
          color: "primaryBackground",
          height: 44,
          justifyContent: "center",
          position: "relative",
          shape: "circle",
          width: 44,
          children: i.jsx(c("IGDSLinkPanoOutlineIcon"), {
            alt: h._("Link icon"),
            size: 24,
          }),
        });
      f = f
        ? i.jsxs(c("IGDSBox.react"), {
            alignItems: "start",
            justifyContent: "center",
            marginStart: 3,
            position: "relative",
            children: [
              i.jsx(c("PolarisIGCoreText").LabelEmphasized, {
                color: "ig-link",
                display: "truncated",
                zeroMargin: !0,
                children: e.title,
              }),
              i.jsx(c("PolarisIGCoreText").Body, {
                display: "truncated",
                zeroMargin: !0,
                children: g,
              }),
            ],
          })
        : i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            height: 44,
            justifyContent: "start",
            marginStart: 3,
            position: "relative",
            children: i.jsx(c("PolarisIGCoreText").LabelEmphasized, {
              color: "ig-link",
              display: "truncated",
              zeroMargin: !0,
              children: g,
            }),
          });
      return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
        children: i.jsx(c("PolarisExternalLink.react"), {
          author_id: b,
          href: e.lynx_url,
          page_id: a,
          rel: "me nofollow noopener noreferrer",
          children: i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            height: 60,
            justifyContent: "start",
            position: "relative",
            children: [j, f],
          }),
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsActions",
  [
    "fbt",
    "PolarisClipsHelpers",
    "PolarisClipsLogger",
    "PolarisConfig",
    "PolarisInstapi",
    "PolarisMonitorErrors",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, c, e) {
      e === void 0 && (e = null);
      return (function () {
        var f = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          b({ type: "CLIPS_LOADING", userId: a });
          var f = {
            target_user_id: a,
            page_size: c,
            max_id: e,
            include_feed_video: !0,
          };
          f = yield d("PolarisInstapi").apiPost("/api/v1/clips/user/", {
            body: f,
          });
          if (f.status !== "ok") {
            b({ type: "CLIPS_LOADING_ERROR", userId: a });
            return;
          }
          b({
            clips: f.data.items,
            pagingInfo: f.data.paging_info,
            type: "CLIPS_LOADED",
            userId: a,
          });
        });
        return function (a) {
          return f.apply(this, arguments);
        };
      })();
    }
    function i(a, c, e) {
      return (function () {
        var f = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          var f = d("PolarisClipsHelpers").generateAudioBookmarkBody(a, c, e);
          b({ type: "CLIPS_AUDIO_PAGE_BOOKMARK_LOADING", audioId: a });
          try {
            yield d("PolarisInstapi").apiPost("/api/v1/music/bookmark_music", {
              body: f,
            }),
              b({
                type: "CLIPS_AUDIO_PAGE_BOOKMARK_SUCCESS",
                audioId: a,
                isBookmarked: !0,
              });
          } catch (f) {
            b({
              type: "CLIPS_AUDIO_PAGE_BOOKMARK_ERROR",
              audioId: a,
              isBookmarked: !1,
              toast: {
                text: h._("Couldn't save audio."),
                actionText: h._("Retry"),
                actionHandler: function () {
                  return b(i(a, c, e));
                },
              },
            }),
              d("PolarisMonitorErrors").logError(f);
          }
        });
        return function (a) {
          return f.apply(this, arguments);
        };
      })();
    }
    function j(a, c, e) {
      return (function () {
        var f = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          var f = d("PolarisClipsHelpers").generateAudioBookmarkBody(a, c, e);
          b({ type: "CLIPS_AUDIO_PAGE_BOOKMARK_LOADING", audioId: a });
          try {
            yield d("PolarisInstapi").apiPost(
              "/api/v1/music/unbookmark_music",
              { body: f }
            ),
              b({
                type: "CLIPS_AUDIO_PAGE_BOOKMARK_SUCCESS",
                audioId: a,
                isBookmarked: !1,
              });
          } catch (f) {
            b({
              type: "CLIPS_AUDIO_PAGE_BOOKMARK_ERROR",
              audioId: a,
              isBookmarked: !0,
              toast: {
                text: h._("Couldn't remove audio."),
                actionText: h._("Retry"),
                actionHandler: function () {
                  return b(j(a, c, e));
                },
              },
            }),
              d("PolarisMonitorErrors").logError(f);
          }
        });
        return function (a) {
          return f.apply(this, arguments);
        };
      })();
    }
    function c(a, c) {
      c === void 0 && (c = null);
      return (function () {
        var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          var e,
            f = c == null;
          b({ type: "CLIPS_AUDIO_PAGE_LOADING", audioId: a });
          var g = {
            audio_cluster_id: a,
            original_sound_audio_asset_id: a,
            max_id: c,
          };
          g = yield d("PolarisInstapi").apiPost("/api/v1/clips/music/", {
            body: g,
          });
          if (g.status !== "ok") {
            f &&
              d("PolarisClipsLogger").logClipsAudioPageVisit({
                pageID: a,
                userID: d("PolarisConfig").getViewerId(),
                responseStatus: g.status,
              });
            b({ type: "CLIPS_AUDIO_PAGE_LOADING_ERROR", audioId: a });
            return;
          }
          var h = g.data,
            i = h.formatted_media_count,
            j = h.is_music_page_restricted,
            k = h.items,
            l = h.metadata,
            m = h.music_page_restricted_context;
          h = h.paging_info;
          e =
            (e =
              (e =
                (e = l.music_info) == null
                  ? void 0
                  : (e = e.music_consumption_info) == null
                  ? void 0
                  : e.is_bookmarked) != null
                ? e
                : (e = l.original_sound_info) == null
                ? void 0
                : (e = e.consumption_info) == null
                ? void 0
                : e.is_bookmarked) != null
              ? e
              : !1;
          if (f) {
            var n;
            d("PolarisClipsLogger").logClipsAudioPageVisit({
              pageID: a,
              userID: d("PolarisConfig").getViewerId(),
              audioClusterID:
                l == null
                  ? void 0
                  : (n = l.music_info) == null
                  ? void 0
                  : (n = n.music_asset_info) == null
                  ? void 0
                  : n.audio_cluster_id,
              originalSoundID:
                l == null
                  ? void 0
                  : (n = l.original_sound_info) == null
                  ? void 0
                  : n.audio_asset_id,
              isPageRestricted: j,
              responseStatus: g.status,
            });
          }
          b({
            type: "CLIPS_AUDIO_PAGE_LOADED",
            audioId: a,
            clips: k,
            formattedMediaCount: i,
            isMusicPageRestricted: j,
            musicPageRestrictedContext: m,
            metadata: l,
            pagingInfo: h,
            isInitialLoad: f,
            isBookmarked: e,
          });
        });
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
    }
    function k(a, b) {
      var c = a.effect_page_restricted_context,
        d = a.formatted_media_count,
        e = a.is_effect_page_restricted,
        f = a.items,
        g = a.metadata;
      a = a.paging_info;
      return {
        effectId: b,
        clips: f,
        formattedMediaCount: d,
        isEffectPageRestricted: e,
        effectPageRestrictedContext: c,
        metadata: g,
        pagingInfo: a,
      };
    }
    function e(a, c) {
      c === void 0 && (c = null);
      return (function () {
        var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          b({ type: "CLIPS_EFFECT_PAGE_LOADING", effectId: a });
          try {
            var e = yield d("PolarisInstapi").apiPost("/api/v1/clips/effect/", {
              body: { effect_id: a, max_id: c },
            });
            e = k(e.data, a);
            b(babelHelpers["extends"]({ type: "CLIPS_EFFECT_PAGE_LOADED" }, e));
          } catch (c) {
            b({ type: "CLIPS_EFFECT_PAGE_LOADING_ERROR", effectId: a });
            return;
          }
        });
        return function (a) {
          return e.apply(this, arguments);
        };
      })();
    }
    function f(a) {
      return (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          b({ type: "CLIPS_AUDIO_PAGE_AUDIO_PLAYER_IS_PLAYING", isPlaying: a });
        });
        return function (a) {
          return c.apply(this, arguments);
        };
      })();
    }
    g.fetchClips = a;
    g.bookmarkAudio = i;
    g.unbookmarkAudio = j;
    g.fetchClipsForAudioPage = c;
    g.getEffectPageLoadedInfo = k;
    g.fetchClipsForEffectPage = e;
    g.updateAudioPageAudioPlayerIsPlaying = f;
  },
  98
);
__d(
  "PolarisVideoPostGridItemOverlay.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSPlayPanoFilledIcon",
    "IGDSText.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisBigNumber.react",
    "PolarisGenericStrings",
    "PolarisIGCoreIcon",
    "PolarisPostsGridItemOverlay.react",
    "PolarisPostsGridItemStatsOverlay.react",
    "PolarisReactRedux",
    "PolarisShouldHideLikeCountsWithControls",
    "PolarisUA",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j =
        "linear-gradient(\n  0deg,\n  rgba(0, 0, 0, 0.4) 0%,\n  rgba(0, 0, 0, 0) 22.27%\n)";
    function a(a) {
      var b = a.commentsDisabled,
        e = a.likeAndViewCountsDisabled;
      a.mediaId;
      var f = a.numComments,
        g = a.numPreviewLikes,
        h = a.productType,
        k = a.videoViews;
      a = a.viewerIsOwner;
      k = parseInt(k, 10);
      var l = null;
      if (!isNaN(k)) {
        var m = i.jsx(c("IGDSBox.react"), {
          marginEnd: d("PolarisUA").isMobile() ? 1 : 2,
          position: "relative",
          children: d("PolarisUA").isMobile()
            ? i.jsx(c("PolarisIGCoreIcon"), {
                alt: d("PolarisGenericStrings").PLAY_ICON_ALT,
                icon: d("PolarisAssetManagerGlyphMapping").ICONS
                  .PLAY_OUTLINE_12_WHITE,
              })
            : i.jsx(c("IGDSPlayPanoFilledIcon"), {
                alt: d("PolarisGenericStrings").PLAY_ICON_ALT,
                color: "web-always-white",
                size: 16,
              }),
        });
        l = i.jsx(c("PolarisPostsGridItemOverlay.react"), {
          backgroundColor: j,
          children: i.jsx("div", {
            className: "_aajy",
            children: i.jsxs(c("IGDSBox.react"), {
              alignItems: "center",
              bottom: !0,
              direction: "row",
              display: "flex",
              marginBottom: d("PolarisUA").isMobile() ? 2 : 4,
              marginStart: d("PolarisUA").isMobile() ? 2 : 4,
              position: "absolute",
              children: [
                m,
                k > 0 &&
                  i.jsx(c("IGDSText.react"), {
                    color: "webAlwaysWhite",
                    size: d("PolarisUA").isMobile() ? "footnote" : "label",
                    weight: "semibold",
                    children: i.jsx(c("PolarisBigNumber.react"), {
                      shortenNumber: !0,
                      value: k,
                    }),
                  }),
              ],
            }),
          }),
        });
      }
      m = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisUserSelectors").getViewer(a);
      });
      k =
        a ||
        !d(
          "PolarisShouldHideLikeCountsWithControls"
        ).shouldHideLikeCountsWithControls(
          m == null ? void 0 : m.hideLikeAndViewCounts,
          e
        );
      return k && !d("PolarisUA").isMobile()
        ? i.jsxs("div", {
            className: "_aajz",
            children: [
              i.jsx("div", {
                className: "_aaj-",
                children: i.jsx(c("PolarisPostsGridItemStatsOverlay.react"), {
                  commentsDisabled: b,
                  isVideo: !0,
                  numComments: f,
                  numPreviewLikes: g,
                  productType: h,
                  videoViews: 0,
                }),
              }),
              i.jsx("div", { className: "_aaj_", children: l }),
            ],
          })
        : l;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsGridItem.react",
  [
    "cx",
    "PolarisAspectRatio.react",
    "PolarisConfig",
    "PolarisFastLink.react",
    "PolarisGridItemVideoPreview.react",
    "PolarisLinkBuilder",
    "PolarisMediaConstants",
    "PolarisMediaHelpers",
    "PolarisMediaTypes",
    "PolarisUA",
    "PolarisVideoPostGridItemOverlay.react",
    "getPolarisVideoSourceByVersions",
    "nullthrows",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 212 / 330,
      k = 119.5 / 212;
    function l(a) {
      var b, e, f, g;
      b =
        (b = a.media) == null
          ? void 0
          : (b = b.user) == null
          ? void 0
          : (b = b.pk) == null
          ? void 0
          : b.toString();
      b = b === d("PolarisConfig").getViewerId();
      e = (e = a.media) == null ? void 0 : e.product_type;
      f =
        e === "clips"
          ? (f = a.media) == null
            ? void 0
            : f.play_count
          : (f = a.media) == null
          ? void 0
          : f.view_count;
      return i.jsx(c("PolarisVideoPostGridItemOverlay.react"), {
        commentsDisabled: !1,
        likeAndViewCountsDisabled:
          (g = a.media) == null ? void 0 : g.like_and_view_counts_disabled,
        mediaId: a.id,
        numComments: (g = a.media) == null ? void 0 : g.comment_count,
        numPreviewLikes: (g = a.media) == null ? void 0 : g.like_count,
        productType: e,
        videoViews: (a = f) != null ? a : 0,
        viewerIsOwner: b,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.clip;
      a = a.row;
      b = b.media;
      if (b == null) return null;
      var e = d("PolarisMediaHelpers").getImageSrcSet(
        d("PolarisMediaHelpers").getImageCandidatesFromMediaItem(b)
      );
      e = e == null ? void 0 : (e = e[0]) == null ? void 0 : e.src;
      var f = b.id,
        g = c("getPolarisVideoSourceByVersions")(b.video_versions, [
          d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH,
          d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW,
        ]);
      return b.media_type === d("PolarisMediaConstants").MediaTypes.VIDEO &&
        g != null &&
        f != null &&
        a === 0 &&
        c("qex")._("40") === !0
        ? i.jsx(c("PolarisAspectRatio.react"), {
            aspectRatio: d("PolarisUA").isMobile() ? k : j,
            className: "_aajx",
            children: i.jsx(c("PolarisGridItemVideoPreview.react"), {
              coverPhoto: e,
              previewDurationMs: 5e3,
              videoID: f,
              videoSrc: g,
            }),
          })
        : i.jsx(c("PolarisAspectRatio.react"), {
            aspectRatio: d("PolarisUA").isMobile() ? k : j,
            className: "_aajx",
            style: {
              backgroundImage: "url(" + ((b = e) != null ? b : "") + ")",
            },
          });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b,
        e = a.clip,
        f = a.onClick,
        g = a.row;
      a = a.shouldSpawnModals;
      return i.jsx("div", {
        className: "_aajw",
        children: i.jsxs(c("PolarisFastLink.react"), {
          href: d("PolarisLinkBuilder").buildClipsMediaLink(
            c("nullthrows")((b = e.media) == null ? void 0 : b.code)
          ),
          onClick: function (a) {
            return f(a, c("nullthrows")((a = e.media) == null ? void 0 : a.pk));
          },
          shouldOpenModal: a === !0,
          children: [
            i.jsx(m, { clip: e, row: g }),
            i.jsx(l, { media: e.media }),
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
  "polarisClipsSelectors",
  ["PolarisSizing", "polarisCreateSelectorWithArg", "reselect"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a == null ? void 0 : (a = a.clips) == null ? void 0 : a.byUserId;
      },
      function (a) {
        return function (b) {
          if (a == null) return { clips: [], pagingInfo: null };
          b = a.get(b);
          return {
            clips: (b == null ? void 0 : b.clips) || [],
            pagingInfo: b == null ? void 0 : b.pagingInfo,
          };
        };
      }
    );
    function h(a, b) {
      a = a == null ? void 0 : (a = a.clips) == null ? void 0 : a.byAudioId;
      if (a == null) return { clips: [] };
      a = a.get(b);
      return a == null
        ? { clips: [] }
        : {
            clips: a.clips || [],
            formattedMediaCount: a.formattedMediaCount,
            isMusicPageRestricted: a.isMusicPageRestricted,
            metadata: a.metadata,
            musicPageRestrictedContext: a.musicPageRestrictedContext,
            pagingInfo: a.pagingInfo,
            shouldDisableFetching: a.shouldDisableFetching,
            isBookmarked:
              (b = a.bookmarkInfo) == null ? void 0 : b.isBookmarked,
          };
    }
    c = function (a, b) {
      a =
        (b =
          a == null
            ? void 0
            : (a = a.clips) == null
            ? void 0
            : (a = a.byAudioId) == null
            ? void 0
            : (a = a.get(b)) == null
            ? void 0
            : a.bookmarkInfo) != null
          ? b
          : { isUpdatingBookmark: !1, isBookmarked: !1, bookmarkError: !1 };
      return {
        isUpdatingBookmark: a.isUpdatingBookmark,
        bookmarkError: a.bookmarkError,
        isBookmarked: a.isBookmarked,
      };
    };
    function a(a) {
      return a.clips.isAudioPlayerPlaying === !0;
    }
    var i = d("reselect").createSelector(
        function (a) {
          return a.displayProperties.viewportWidth;
        },
        function (a) {
          return a <= d("PolarisSizing").SMALL_SCREEN_MAX;
        }
      ),
      j = function (a) {
        return function (b) {
          b = (b = h(b, a)) == null ? void 0 : b.metadata;
          return !b
            ? null
            : (b = b.music_info) == null
            ? void 0
            : (b = b.music_asset_info) == null
            ? void 0
            : b.display_artist;
        };
      },
      k = function (a) {
        return function (b) {
          var c;
          b = (b = h(b, a)) == null ? void 0 : b.metadata;
          return !b
            ? null
            : (c =
                b == null
                  ? void 0
                  : (c = b.music_info) == null
                  ? void 0
                  : (c = c.music_asset_info) == null
                  ? void 0
                  : c.title) != null
            ? c
            : b == null
            ? void 0
            : (c = b.original_sound_info) == null
            ? void 0
            : c.original_audio_title;
        };
      };
    function b(a, b) {
      a = a == null ? void 0 : (a = a.clips) == null ? void 0 : a.byEffectId;
      return a == null
        ? void 0
        : (a = a.get(b)) == null
        ? void 0
        : (b = a.pagingInfo) == null
        ? void 0
        : b.cursor;
    }
    function e(a, b) {
      a = a == null ? void 0 : (a = a.clips) == null ? void 0 : a.byEffectId;
      a = a == null ? void 0 : a.get(b);
      return a == null
        ? { clips: [] }
        : {
            clips: a.clips || [],
            formattedMediaCount: a.formattedMediaCount,
            isEffectPageRestricted: a.isEffectPageRestricted,
            metadata: a.metadata,
            effectPageRestrictedContext: a.effectPageRestrictedContext,
            pagingInfo: a.pagingInfo,
            shouldDisableFetching: a.shouldDisableFetching,
          };
    }
    g.getClipsInfoFromUserId = f;
    g.getClipsInfoFromAudioId = h;
    g.getBookmarkInfo = c;
    g.getIsAudioPlayerPlaying = a;
    g.getIsNarrowScreen = i;
    g.getSongArtistDisplayName = j;
    g.getSongName = k;
    g.getEffectCursor = b;
    g.getClipsInfoFromEffectId = e;
  },
  98
);
__d(
  "PolarisClipsGrid.react",
  [
    "cx",
    "CAAWebClientLoggingEventSource",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisClipsConstants",
    "PolarisClipsGridItem.react",
    "PolarisConfig",
    "PolarisIGVirtualGrid.react",
    "PolarisMediaConstants",
    "PolarisNavigationActions",
    "PolarisPostsGridQEHelpers",
    "PolarisReactRedux",
    "PolarisSizing",
    "PolarisUA",
    "browserHistory",
    "cr:4150",
    "deferredLoadComponent",
    "polarisClipsSelectors",
    "polarisDisplayPropertiesSelectors",
    "polarisPostModalHelpers",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState,
      n = 36,
      o = c("deferredLoadComponent")(
        c("requireDeferred")("PolarisClipsItemModal.react").__setRef(
          "PolarisClipsGrid.react"
        )
      );
    function a(a) {
      var e = a.analyticsContext,
        g = a.clips,
        h = a.fetchClips,
        p = a.hasNextPage,
        q = a.isFetching,
        r = a.onModalOpen;
      a = a.shouldDisableFetching;
      var s = a === void 0 ? !1 : a,
        t = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisClipsSelectors").getIsNarrowScreen(a);
        })
          ? d("PolarisClipsConstants").CLIPS_PER_ROW_MOBILE
          : d("PolarisClipsConstants").CLIPS_PER_ROW_DESKTOP,
        u = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisDisplayPropertiesSelectors").getViewportWidth(a);
        });
      a = m(!1);
      var v = a[0],
        w = a[1];
      a = m(null);
      var x = a[0],
        y = a[1],
        z = d("PolarisReactRedux").useDispatch(),
        A = d("PolarisReactRedux").useSelector(function (a) {
          return a.navigation.isLoginModalOpen;
        }),
        B = l(new Set());
      a = m(n);
      var C = a[0],
        D = a[1],
        E =
          g.length <
          d("PolarisClipsConstants").THRESHOLD_TO_FORCE_FETCH_MORE_CLIPS,
        F = d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();
      function G(a) {
        return i.jsx("div", { className: "_abq3" }, a);
      }
      G.displayName = G.name + " [from " + f.id + "]";
      var H = j(function (a) {
        w(!0),
          y(a),
          d("polarisPostModalHelpers").logPostModalOpen(
            e,
            d("PolarisMediaConstants").MediaTypes.VIDEO,
            "clips_grid"
          ),
          r && r(a);
      });
      a = function () {
        w(!1), y(null);
      };
      var I = j(
        function (a, b) {
          d("PolarisConfig").isNetzDGEligible()
            ? (a.preventDefault(),
              z(
                d("PolarisNavigationActions").openLoginModal(
                  "feature_wall",
                  "/",
                  "profile_clips_tab",
                  null,
                  !1,
                  b
                )
              ))
            : d("PolarisUA").isMobile() || (a.preventDefault(), H(b));
        },
        [z, H]
      );
      function J(a) {
        var b = a.index;
        a = a.row;
        if (B.current.size > C && !A) {
          D(C + n);
          var e =
            d("PolarisUA").isDesktop() || d("PolarisConfig").isNetzDGEligible()
              ? "feature_wall"
              : "content_wall";
          z(
            d("PolarisNavigationActions").openLoginModal(
              e,
              d("browserHistory").browserHistory.location.pathname,
              "profile_clips_tab"
            )
          );
          return;
        }
        B.current.has(b) || B.current.add(b);
        return i.jsx(
          "div",
          {
            className:
              "_abq3" + (F === 28 ? " _al5o" : "") + (F === 4 ? " _al5p" : ""),
            children: i.jsx(c("PolarisClipsGridItem.react"), {
              clip: g[b],
              onClick: I,
              row: a,
              shouldSpawnModals: d("PolarisSizing").shouldSpawnModals(u),
            }),
          },
          (a = (e = g[b].media) == null ? void 0 : e.id) != null
            ? a
            : "index_" + b
        );
      }
      J.displayName = J.name + " [from " + f.id + "]";
      var K = function () {
          g.length === 0 && h(t);
        },
        L = function (a) {
          a = a.numScreensFromEnd;
          s === !1 && !E && q !== !0 && p === !0 && a < 1 && h(t);
        };
      k(
        function () {
          s === !1 && E && q !== !0 && p === !0 && h(t);
        },
        [g.length, E, q, p, h, t, s]
      );
      return i.jsxs(c("IGDSBox.react"), {
        position: "relative",
        width: "100%",
        children: [
          i.jsx(c("PolarisIGVirtualGrid.react"), {
            itemCount:
              p === !1 || s === !0 ? g.length : g.length - (g.length % t),
            itemsPerRow: t,
            onInitialize: K,
            onScroll: L,
            renderer: J,
            rendererPlaceholder: G,
            rowClassName: (F === 28 ? "_abq4" : "") + (F === 4 ? " _al5r" : ""),
          }),
          q === !0 &&
            i.jsx("div", {
              className: "_abq5",
              children: i.jsx(c("IGDSSpinner.react"), {
                position: "absolute",
                size: "medium",
              }),
            }),
          v &&
            x != null &&
            i.jsx(o, {
              analyticsContext: e,
              clips: g,
              onClose: a,
              onOpen: H,
              postId: x,
            }),
          A &&
            b("cr:4150") != null &&
            i.jsx(b("cr:4150"), {
              dialogSource: d("CAAWebClientLoggingEventSource")
                .CAAWebClientLoggingDialogSource.PROFILE,
              triggeringPageType: "profile",
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
  "PolarisProfileTabClips.react",
  [
    "fbt",
    "PolarisClipsActions",
    "PolarisClipsConstants",
    "PolarisClipsGrid.react",
    "PolarisClipsLogger",
    "PolarisConfig",
    "PolarisIGCoreReelsPanoOutlineIcon",
    "PolarisReactRedux",
    "PolarisTabbedContentTabLabel.react",
    "polarisClipsSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = "reels";
    var j = "profilePage",
      k = h._("Reels");
    function a(a, b) {
      return i.jsx(c("PolarisTabbedContentTabLabel.react"), {
        icon: c("PolarisIGCoreReelsPanoOutlineIcon"),
        isSelected: a,
        isSmallScreen: b,
        labelText: k,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.user,
        e = d("PolarisReactRedux").useDispatch();
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisClipsSelectors").getClipsInfoFromUserId(a, b.id);
      });
      var f = a.clips,
        g = a.pagingInfo;
      a = function (a) {
        d("PolarisClipsLogger").logClipsTabMediaOpen({
          mediaID: a,
          pageID: b.id,
          userID: d("PolarisConfig").getViewerId(),
        });
      };
      var h = function (a) {
        e(
          d("PolarisClipsActions").fetchClips(
            b.id,
            d("PolarisClipsConstants").ROWS_TO_FETCH * a,
            g == null ? void 0 : g.cursor
          )
        );
      };
      return i.jsx(c("PolarisClipsGrid.react"), {
        analyticsContext: j,
        clips: f,
        fetchClips: h,
        hasNextPage: g == null ? void 0 : g.moreAvailable,
        isFetching: g == null ? void 0 : g.isFetching,
        onModalOpen: a,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.CLIPS_TAB_ID = e;
    g.PAGE_ID = j;
    g.ProfileTabClipsLabel = a;
    g.ProfileTabClips = b;
  },
  98
);
__d(
  "PolarisProfileTabFeedConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "feed";
    f.FEED_TAB_ID = a;
  },
  66
);
__d(
  "PolarisGuidesActions",
  ["PolarisInstapi", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, c, e) {
      e === void 0 && (e = null);
      return (function () {
        var f = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          b({ type: "GUIDES_LOADING" });
          var f = {};
          f.page_limit = c;
          e !== null && (f.max_id = e);
          f = yield d("PolarisInstapi").apiGet(
            "/api/v1/guides/user/{user_id}/",
            { path: { user_id: a }, query: f }
          );
          if (f.status !== "ok") return;
          f = f.data;
          var g = f.guides;
          f = f.next_max_id;
          b({ guides: g, nextMaxId: f, type: "GUIDES_LOADED", userId: a });
        });
        return function (a) {
          return f.apply(this, arguments);
        };
      })();
    }
    g.fetchGuides = a;
  },
  98
);
__d(
  "PolarisProfileTabGuides.react",
  [
    "cx",
    "CAAWebClientLoggingEventSource",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisConfig",
    "PolarisGuideGridItem.react",
    "PolarisIGVirtualGrid.react",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "PolarisUA",
    "cr:4150",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var e = a.guides,
        f = a.itemsPerRow,
        g = a.onScroll;
      a = a.requestInFlight;
      var h = d("PolarisReactRedux").useDispatch(),
        k = d("PolarisReactRedux").useSelector(function (a) {
          return a.navigation.isLoginModalOpen;
        }),
        l = d("PolarisUA").isMobile() ? 4 : 0,
        m = j(
          function (a, b) {
            d("PolarisConfig").isNetzDGEligible() &&
              (a.preventDefault(),
              h(
                d("PolarisNavigationActions").openLoginModal(
                  "feature_wall",
                  "/",
                  "profile_guides_tab",
                  null,
                  !1,
                  b
                )
              ));
          },
          [h]
        );
      return i.jsxs(c("IGDSBox.react"), {
        margin: l,
        position: "relative",
        children: [
          i.jsx(c("PolarisIGVirtualGrid.react"), {
            itemCount: e.length,
            itemsPerRow: f,
            onScroll: g,
            renderer: function (a) {
              a = a.index;
              a = e[a].summary;
              return i.jsx(
                c("PolarisGuideGridItem.react"),
                { className: "_aa_9", guideSummary: a, onClick: m },
                c("nullthrows")(a == null ? void 0 : a.id)
              );
            },
            rowClassName: "_aa_a",
          }),
          a &&
            i.jsx("div", {
              className: "_aa_b",
              children: i.jsx(c("IGDSSpinner.react"), {
                position: "absolute",
                size: "medium",
              }),
            }),
          k &&
            b("cr:4150") != null &&
            i.jsx(b("cr:4150"), {
              dialogSource: d("CAAWebClientLoggingEventSource")
                .CAAWebClientLoggingDialogSource.PROFILE,
              triggeringPageType: "profile",
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
  "polarisGuidesSelectors",
  ["PolarisSizing"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = a == null ? void 0 : (a = a.guides) == null ? void 0 : a.byUserId;
      return a == null ? null : (a = a.get(b)) == null ? void 0 : a.guides;
    }
    function b(a, b) {
      a = a == null ? void 0 : (a = a.guides) == null ? void 0 : a.byUserId;
      return a == null ? null : (a = a.get(b)) == null ? void 0 : a.nextMaxId;
    }
    function c(a) {
      a = a.displayProperties.viewportWidth;
      if (a <= d("PolarisSizing").SMALL_SCREEN_CUTOFF) return 2;
      return a <= d("PolarisSizing").MEDIUM_SCREEN_MIN ? 3 : 4;
    }
    g.getGuidesFromUserId = a;
    g.getGuidesNextMaxId = b;
    g.getGuidesGridItemsPerRow = c;
  },
  98
);
__d(
  "PolarisProfileTabGuidesContainer.react",
  [
    "PolarisGuidesActions",
    "PolarisProfileTabGuides.react",
    "PolarisReactRedux",
    "polarisGuidesSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b;
      a = a.user;
      var e = d("PolarisReactRedux").useDispatch(),
        f = a.id,
        g = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisGuidesSelectors").getGuidesNextMaxId(a, f);
        }),
        j = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisGuidesSelectors").getGuidesFromUserId(a, f);
        });
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisGuidesSelectors").getGuidesGridItemsPerRow(a);
      });
      var k = a * 3;
      i(
        function () {
          j == null && e(d("PolarisGuidesActions").fetchGuides(f, k, g));
        },
        [e, j, f, k, g]
      );
      var l = d("PolarisReactRedux").useSelector(function (a) {
          return a.guides.requestInFlight;
        }),
        m = function (a) {
          a = a.numScreensFromEnd;
          l === !1 &&
            g != null &&
            a < 1 &&
            e(d("PolarisGuidesActions").fetchGuides(f, k, g));
        };
      return h.jsx(c("PolarisProfileTabGuides.react"), {
        guides: (b = j) != null ? b : [],
        itemsPerRow: a,
        onScroll: m,
        requestInFlight: l,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisShowMorePostsPill.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisIGCorePill",
    "PolarisLogger",
    "PolarisSEOEventsLogger",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useState;
    function l(a) {
      return h._("Show more posts from {username}", [h._param("username", a)]);
    }
    function a(a) {
      var b = a.analyticsContext,
        e = a.onClick;
      a = a.username;
      var f = k(!0),
        g = f[0],
        h = f[1];
      j(
        function () {
          g === !0 &&
            (h(!1),
            d("PolarisLogger").logAction("showMorePostsImpression", {
              source: b,
            }),
            d("PolarisSEOEventsLogger").logSEOEvent({
              eventName: "showMorePostsImpression",
              containermodule: b,
            }));
        },
        [g, b]
      );
      f = function () {
        d("PolarisLogger").logAction("showMorePostsClick", { source: b }),
          d("PolarisSEOEventsLogger").logSEOEvent({
            eventName: "showMorePostsClick",
            containermodule: b,
          }),
          e();
      };
      return i.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        "data-testid": void 0,
        position: "relative",
        children: i.jsx(c("PolarisIGCorePill"), {
          animated: !1,
          color: "ig-primary-button",
          dangerouslySetClassName: {
            __className:
              "x6s0dn4 x1iorvi4 xn6708d xs9asl8 x1ye3gou x10l6tqk xsms3ob xkrlcpk xubyhnz",
          },
          onClick: f,
          zPosition: "normal",
          children: i.jsx(c("IGDSText.react").BodyEmphasized, {
            color: "webAlwaysWhite",
            textAlign: "center",
            children: l(a),
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
  "PolarisProfileTabPosts.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisConfig",
    "PolarisConnectionsLogger",
    "PolarisFollowChainingList.react",
    "PolarisLinkBuilder",
    "PolarisLogger",
    "PolarisMediaBrowserConstants",
    "PolarisProfileMediaBrowser.react",
    "PolarisShowMorePostsPill.react",
    "PolarisViewpointReact.react",
    "nullthrows",
    "polarisRelationshipSelectors",
    "qex",
    "react",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useState,
      l = h._("Related accounts"),
      m = 99,
      n = 10;
    function a(a) {
      var b,
        e = k(!1),
        f = e[0],
        g = e[1];
      e = k(0);
      var h = e[0],
        o = e[1];
      e = a.analyticsContext;
      var p = a.isFetching,
        q = a.isOldestPostLoaded,
        r = a.isPrivateProfile,
        s = a.isSmallScreen,
        t = a.maxPostsToDisplay,
        u = a.mediaLinkBuilder,
        v = a.numPostsAboveRelatedProfiles,
        w = a.onIntentClick,
        x = a.onPostImpression,
        y = a.onRequestFirst,
        z = a.onRequestNext,
        A = a.photoComponentRenderer,
        B = a.posts,
        C = a.relatedProfiles,
        D = a.showRelatedProfiles,
        E = a.user,
        F = a.viewportWidth,
        G = k(!0),
        H = G[0],
        I = G[1];
      j(
        function () {
          g(D);
        },
        [D]
      );
      var J =
        D &&
        !d("PolarisConfig").isNetzDGEligible() &&
        d("PolarisConfig").isAllowlistedCrawlBot();
      j(
        function () {
          J && !p && !q && f && h < n && B.length < m && (o(h + 1), z(E.id));
        },
        [h, p, q, B.length, z, E.id, f, J]
      );
      var K = function (b) {
        a.onSuggestionDismissed(a.user.id, b);
      };
      G = function () {
        g(!1), z(E.id);
      };
      b = (b = (b = E.counts) == null ? void 0 : b.media) != null ? b : 0;
      b = B.length === 0 && b > 0 && !r;
      var L = c("qex")._("1877") === !0,
        M = !d("PolarisConfig").isLoggedIn() && c("qex")._("326") === !0,
        N = function (a) {
          a.state === "entered" &&
            H &&
            (I(!1),
            d("PolarisLogger").logAction("relatedProfileModule", {
              source: d("PolarisConnectionsLogger")
                .CONNECTIONS_CONTAINER_MODULES.profile,
              target: "impressionLogging",
            }));
        },
        O = c("usePolarisSelector")(function (a) {
          a = d("polarisRelationshipSelectors").getRelationship(
            a.relationships,
            E.id
          );
          return d("polarisRelationshipSelectors").isBlockedByViewer(a);
        });
      return i.jsxs(i.Fragment, {
        children: [
          !L && b && !O
            ? i.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                "data-testid": void 0,
                direction: "row",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                children: i.jsx(c("IGDSSpinner.react"), {}),
              })
            : i.jsx(
                c("PolarisProfileMediaBrowser.react"),
                {
                  className: "x1iyjqo2",
                  hidePhotoComponentRenderer: r && s,
                  isFetching: p,
                  isOldestPostLoaded: q,
                  isPostNumLimited: !!f,
                  maxPostsToDisplay: t,
                  mediaLinkBuilder: u,
                  onIntentClick: w,
                  onPostImpression: x,
                  onRequestFirst: y,
                  onRequestNext: z,
                  photoComponentRenderer: A,
                  posts: f ? B.slice(0, v) : B,
                  user: E,
                  viewportWidth: F,
                },
                "userMedia"
              ),
          f &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx(c("PolarisShowMorePostsPill.react"), {
                  analyticsContext: e,
                  onClick: G,
                  username: c("nullthrows")(E.username),
                }),
                i.jsx(
                  d("PolarisViewpointReact.react").Viewpoint,
                  {
                    action: N,
                    id: E.id,
                    children: function (b) {
                      return i.jsx("div", {
                        ref: b,
                        children: i.jsx(c("PolarisFollowChainingList.react"), {
                          analyticsContext: d("PolarisConnectionsLogger")
                            .CONNECTIONS_CONTAINER_MODULES.profile,
                          chainingFailed: !1,
                          chainingSuggestions:
                            C == null
                              ? void 0
                              : C.map(function (a) {
                                  return {
                                    fullName: a.fullName,
                                    id: a.id,
                                    isVerified: a.isVerified,
                                    profilePictureUrl: a.profilePictureUrl,
                                    suggestionDescription:
                                      a.suggestionDescription,
                                    username: a.username,
                                  };
                                }),
                          className:
                            "x1xyqytf xtuw4uo xeud2gj x18oi6gw x13ehr01 x1arihgo",
                          clickPoint: "related_profiles_unit",
                          impressionModule: d("PolarisConnectionsLogger")
                            .VIEW_MODULES.web_related_profiles,
                          isSmallScreen: s,
                          onSeeAllClicked: a.onOpenRelatedProfilesModal,
                          onSuggestionDismissed: K,
                          overscan: C == null ? void 0 : C.length,
                          seeAllHref: d(
                            "PolarisLinkBuilder"
                          ).buildUserRelatedProfilesLink(
                            c("nullthrows")(E.username)
                          ),
                          title: l,
                          useAlternateViewProfileButton: M,
                        }),
                      });
                    },
                  },
                  E.id
                ),
              ],
            }),
          f &&
            J &&
            i.jsx(
              c("PolarisProfileMediaBrowser.react"),
              {
                className: "x1s85apg",
                hidePhotoComponentRenderer: !1,
                isFetching: !1,
                isOldestPostLoaded: !0,
                isPostNumLimited: !0,
                maxPostsToDisplay: t,
                mediaLinkBuilder: u,
                onPostImpression: function () {},
                onRequestFirst: function () {},
                onRequestNext: function () {},
                overscanRowsCount: Math.ceil(
                  (B.length - v) /
                    d("PolarisMediaBrowserConstants").POSTS_PER_ROW
                ),
                photoComponentRenderer: A,
                posts: B.slice(v, B.length),
                user: E,
                viewportWidth: F,
              },
              "extraUserMedia"
            ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.RELATED_PROFILES_HEADER = l;
    g.ProfileTabPosts = a;
  },
  98
);
__d(
  "PolarisAddCollectionPostPreviewOverlay.react",
  ["cx", "fbt", "IGDSBox.react", "IGDSCheckPanoFilledIcon", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isActive;
      a = a.isSelected;
      b = b || a;
      return j.jsx("div", {
        className: "_aatq" + (b ? " _aatr" : ""),
        children:
          a &&
          j.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            children: j.jsx(c("IGDSCheckPanoFilledIcon"), {
              alt: i._("Check"),
              color: "ig-primary-background",
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
  "PolarisAddCollectionPostPreview.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "PolarisAddCollectionPostPreviewOverlay.react",
    "PolarisIGCorePressable",
    "PolarisIGCoreThumbnail",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState,
      l = 134;
    function a(a) {
      var b = a.index,
        d = a.posts,
        e = a.selectedPostIds;
      a = a.updateSelectedPostIds;
      d = d[b];
      return j.jsx(
        c("IGDSBox.react"),
        {
          height: l,
          position: "relative",
          width: l,
          children: j.jsx(m, {
            post: d,
            selectedPostIds: e,
            updateSelectedPostIds: a,
          }),
        },
        d.id
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return j.jsx(
        c("IGDSBox.react"),
        { height: l, position: "relative", width: l },
        a
      );
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.post,
        d = a.selectedPostIds,
        e = a.updateSelectedPostIds;
      a = b.thumbnailSrc;
      var f = k(!1),
        g = f[0],
        h = f[1];
      return j.jsxs(c("PolarisIGCorePressable"), {
        className: "_aamg",
        onMouseEnter: function () {
          return h(!0);
        },
        onMouseLeave: function () {
          return h(!1);
        },
        onPress: function () {
          return e(b.id);
        },
        children: [
          a != null
            ? j.jsx(c("PolarisIGCoreThumbnail"), {
                alt: i._("Saved image"),
                src: a,
              })
            : null,
          j.jsx(c("PolarisAddCollectionPostPreviewOverlay.react"), {
            isActive: g,
            isSelected: d.includes(b.id),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g.POST_PREVIEW_SIZE = l;
    g.renderAddCollectionPostPreview = a;
    g.renderAddCollectionPostPlaceholder = b;
  },
  98
);
__d(
  "PolarisAPIFetchTabbedSavedCollectionPosts",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return d("PolarisInstapi")
        .apiGet("/api/v1/feed/collection/{collection_id}/posts/", {
          path: { collection_id: a },
          query: { max_id: b },
        })
        .then(function (a) {
          return a.data;
        });
    }
    g.fetchTabbedSavedCollectionPosts = a;
  },
  98
);
__d(
  "PolarisAPIGetSavedAudio",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a === void 0 && (a = null);
      return d("PolarisInstapi")
        .apiPost("/api/v1/music/playlist/{playlist_id}/", {
          body: { cursor: (a = a) != null ? a : void 0 },
          path: { playlist_id: "bookmarked" },
        })
        .then(function (a) {
          return a.data;
        });
    }
    g.getSavedAudio = a;
  },
  98
);
__d(
  "PolarisAPIGetSavedMediaPosts",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a === void 0 && (a = null);
      return d("PolarisInstapi")
        .apiGet("/api/v1/feed/saved/posts/", {
          query: { max_id: (a = a) != null ? a : void 0 },
        })
        .then(function (a) {
          return a.data;
        });
    }
    g.getSavedMediaPosts = a;
  },
  98
);
__d(
  "PolarisSavedPostsActionGetAudioCollectionUpdatedInfo",
  ["PolarisSavedPostsTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = a.items;
      a = a.page_info;
      var e = a.more_available;
      a = a.next_max_id;
      return {
        audio: c,
        collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
          .AUDIO_AUTO_COLLECTION,
        userId: b,
        pagination: { cursor: a, moreAvailable: e },
      };
    }
    g.getAudioCollectionUpdatedInfo = a;
  },
  98
);
__d(
  "PolarisSavedPostsActionRequestSavedCollectionPosts",
  [
    "PolarisAPIFetchTabbedSavedCollectionPosts",
    "PolarisAPIGetSavedAudio",
    "PolarisAPIGetSavedMediaPosts",
    "PolarisGenericStrings",
    "PolarisPostModel",
    "PolarisSavedPostsActionGetAudioCollectionUpdatedInfo",
    "PolarisSavedPostsTypes",
    "PolarisUserModel",
    "asyncToGeneratorRuntime",
    "polarisSavedPostsSelectors",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      return function (c) {
        var d = function () {
          return c(h(a, b));
        };
        return c(i({ collectionId: a, retryHandler: d, userId: b }));
      };
    }
    function i(a) {
      var b = a.collectionId,
        c = a.retryHandler,
        e = a.userId;
      return function (a, f) {
        a({
          type: "SAVED_COLLECTION_MEDIA_LOADING",
          userId: e,
          collectionId: b,
        });
        f = d(
          "polarisSavedPostsSelectors"
        ).getSavedCollectionsMediaPaginationForUser(f(), {
          collectionId: b,
          userId: e,
        });
        if (
          b ===
          d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
            .ALL_MEDIA_AUTO_COLLECTION
        )
          return a(j({ pagination: f, retryHandler: c, userId: e }));
        return b ===
          d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
            .AUDIO_AUTO_COLLECTION
          ? a(k({ pagination: f, retryHandler: c, userId: e }))
          : a(
              l({ collectionId: b, pagination: f, retryHandler: c, userId: e })
            );
      };
    }
    function j(a) {
      var b = a.pagination,
        e = a.retryHandler,
        f = a.userId;
      return function (a, g) {
        return d("PolarisAPIGetSavedMediaPosts")
          .getSavedMediaPosts(b.cursor)
          .then(function (b) {
            var e = b.items,
              g = b.more_available;
            b = b.next_max_id;
            var h = [],
              i = [];
            e.forEach(function (a) {
              h.push(
                c("PolarisPostModel")
                  .fromNativeResponseRaw(a.media)
                  .toReduxStore()
              ),
                a.media.user != null &&
                  i.push(
                    c("PolarisUserModel")
                      .fromNativeResponse(a.media.user)
                      .toReduxStore()
                  );
            });
            a({
              type: "SAVED_COLLECTION_MEDIA_UPDATED",
              posts: h,
              users: i,
              collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .ALL_MEDIA_AUTO_COLLECTION,
              userId: f,
              pagination: { cursor: b, isFetching: !1, moreAvailable: g },
            });
          })
          ["catch"](function (b) {
            a({
              collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .ALL_MEDIA_AUTO_COLLECTION,
              toast: {
                text: d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT,
                actionText: d("PolarisGenericStrings").RETRY_TEXT,
                actionHandler: e,
              },
              type: "SAVED_COLLECTION_MEDIA_ERRORED",
              userId: f,
            });
          });
      };
    }
    function k(a) {
      var c = a.pagination,
        e = a.retryHandler,
        f = a.userId;
      return (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
          try {
            b = yield d("PolarisAPIGetSavedAudio").getSavedAudio(c.cursor);
            b = d(
              "PolarisSavedPostsActionGetAudioCollectionUpdatedInfo"
            ).getAudioCollectionUpdatedInfo(b, f);
            a(
              babelHelpers["extends"](
                { type: "AUDIO_COLLECTION_DATA_UPDATED" },
                b
              )
            );
          } catch (b) {
            a({
              collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .AUDIO_AUTO_COLLECTION,
              toast: {
                text: d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT,
                actionText: d("PolarisGenericStrings").RETRY_TEXT,
                actionHandler: e,
              },
              type: "SAVED_COLLECTION_MEDIA_ERRORED",
              userId: f,
            });
          }
        });
        return function (b, c) {
          return a.apply(this, arguments);
        };
      })();
    }
    function l(a) {
      var b = a.collectionId,
        e = a.pagination,
        f = a.retryHandler,
        g = a.userId;
      return function (a, h) {
        return d("PolarisAPIFetchTabbedSavedCollectionPosts")
          .fetchTabbedSavedCollectionPosts(b, (h = e.cursor) != null ? h : "")
          .then(function (d) {
            var e = d.items,
              f = d.more_available;
            d = d.next_max_id;
            var h = [],
              i = [];
            e.forEach(function (a) {
              h.push(
                c("PolarisPostModel")
                  .fromNativeResponseRaw(a.media)
                  .toReduxStore()
              ),
                a.media.user != null &&
                  i.push(
                    c("PolarisUserModel")
                      .fromNativeResponse(a.media.user)
                      .toReduxStore()
                  );
            });
            a({
              type: "SAVED_COLLECTION_MEDIA_UPDATED",
              posts: h,
              users: i,
              collectionId: b,
              userId: g,
              pagination: { cursor: d, isFetching: !1, moreAvailable: f },
            });
          })
          ["catch"](function (c) {
            a({
              type: "SAVED_COLLECTION_MEDIA_ERRORED",
              toast: {
                text: d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT,
                actionText: d("PolarisGenericStrings").RETRY_TEXT,
                actionHandler: f,
              },
              collectionId: b,
              userId: g,
            });
          });
      };
    }
    g.requestSavedCollectionPosts = h;
  },
  98
);
__d(
  "PolarisAddCollectionPostPicker.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisAddCollectionPostPreview.react",
    "PolarisIGVirtualGrid.react",
    "PolarisReactRedux",
    "PolarisSavedPostsActionRequestSavedCollectionPosts",
    "PolarisSavedPostsTypes",
    "PolarisScrollWatchedComponent.react",
    "PolarisScrollableContainer.react",
    "nullthrows",
    "polarisSavedPostsSelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = { x: 1, y: 2 },
      l = 3,
      m = 600;
    function n(a) {
      return a.moreAvailable && !a.isFetching;
    }
    function o(a, b) {
      n(a) && b();
    }
    function a(a) {
      var b = a.selectedPostIds,
        e = a.updateSelectedPostIds,
        f = d("PolarisReactRedux").useDispatch(),
        g = c("nullthrows")(
          d("PolarisReactRedux").useSelector(function (a) {
            return d("polarisUserSelectors").getViewer(a);
          })
        ),
        p = d("PolarisReactRedux").useSelector(function (a) {
          return d(
            "polarisSavedPostsSelectors"
          ).getVisiblePostsSavedByUserFromCollection(a, {
            collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
              .ALL_MEDIA_AUTO_COLLECTION,
            userId: g.id,
          });
        }),
        q = i(
          function () {
            return d(
              "PolarisSavedPostsActionRequestSavedCollectionPosts"
            ).requestSavedCollectionPosts(
              d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .ALL_MEDIA_AUTO_COLLECTION,
              g.id
            );
          },
          [g.id]
        );
      j(
        function () {
          f(q());
        },
        [f, q]
      );
      var r = d("PolarisReactRedux").useSelector(function (a) {
        return d(
          "polarisSavedPostsSelectors"
        ).getSavedCollectionsMediaPaginationForUser(a, {
          userId: g.id,
          collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
            .ALL_MEDIA_AUTO_COLLECTION,
        });
      });
      a = p.length > 0 || (!r.isFetching && !r.moreAvailable);
      return h.jsx(h.Fragment, {
        children: a
          ? h.jsxs(d("PolarisScrollableContainer.react").ScrollableContainer, {
              children: [
                h.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "scrollY",
                  position: "relative",
                  children: h.jsx(c("IGDSBox.react"), {
                    height: "auto",
                    position: "relative",
                    children: h.jsx(c("PolarisIGVirtualGrid.react"), {
                      containerSize: m,
                      itemCount: p.length,
                      itemsPerRow: l,
                      renderer: function (a) {
                        var c = a.index;
                        a.isVisible;
                        return d(
                          "PolarisAddCollectionPostPreview.react"
                        ).renderAddCollectionPostPreview({
                          index: c,
                          posts: p,
                          selectedPostIds: b,
                          updateSelectedPostIds: e,
                        });
                      },
                      rendererPlaceholder: d(
                        "PolarisAddCollectionPostPreview.react"
                      ).renderAddCollectionPostPlaceholder,
                    }),
                  }),
                }),
                r.isFetching &&
                  h.jsx(c("IGDSBox.react"), {
                    alignItems: "center",
                    marginTop: 1,
                    position: "relative",
                    children: h.jsx(c("IGDSSpinner.react"), { size: "medium" }),
                  }),
                n(r) &&
                  h.jsx(c("PolarisScrollWatchedComponent.react"), {
                    boundScaleFactor: k,
                    onScrollEnter: function () {
                      return o(r, function () {
                        return f(
                          d(
                            "PolarisSavedPostsActionRequestSavedCollectionPosts"
                          ).requestSavedCollectionPosts(
                            d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                              .ALL_MEDIA_AUTO_COLLECTION,
                            g.id
                          )
                        );
                      });
                    },
                  }),
              ],
            })
          : h.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              height: m,
              marginTop: 4,
              position: "relative",
              children: h.jsx(c("IGDSSpinner.react"), { size: "medium" }),
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.POST_PICKER_HEIGHT = m;
    g.AddCollectionPostPicker = a;
  },
  98
);
__d(
  "PolarisAddCollectionModal.react",
  [
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "PolarisAddCollectionPostPicker.react",
    "PolarisGenericStrings",
    "PolarisIGCoreModalHeader",
    "PolarisSavedCollectionStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.allowEmptySelection;
      b = b === void 0 ? !0 : b;
      var e = a.disablePopInAnimation,
        f = a.onBack,
        g = a.onClose,
        j = a.onDone;
      a = a.requestInFlight;
      var k = i([]),
        l = k[0],
        m = k[1];
      k = function (a) {
        l.includes(a)
          ? m(function (b) {
              return [].concat(b).filter(function (b) {
                return b !== a;
              });
            })
          : m(function (b) {
              return [].concat(b, [a]);
            });
      };
      b = (l.length === 0 && !b) || a;
      return h.jsxs(c("IGCoreModal"), {
        "aria-label": d("PolarisSavedCollectionStrings").ADD_FROM_SAVED_TEXT,
        disablePopInAnimation: e,
        onClose: g,
        children: [
          h.jsx(c("PolarisIGCoreModalHeader"), {
            onBack: f,
            onClose: g,
            children: h.jsx(c("IGDSBox.react"), {
              padding: 4,
              position: "relative",
              children: d("PolarisSavedCollectionStrings").ADD_FROM_SAVED_TEXT,
            }),
          }),
          h.jsx(c("IGDSBox.react"), {
            flex: "shrink",
            maxHeight: d("PolarisAddCollectionPostPicker.react")
              .POST_PICKER_HEIGHT,
            overflow: "auto",
            position: "relative",
            children: h.jsx(
              d("PolarisAddCollectionPostPicker.react").AddCollectionPostPicker,
              { selectedPostIds: l, updateSelectedPostIds: k }
            ),
          }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            disabled: b,
            loading: a,
            onClick: function () {
              return j(l);
            },
            children: d("PolarisGenericStrings").DONE_TEXT,
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
  "PolarisCreateAndAddCollectionModal.react",
  [
    "PolarisAddCollectionModal.react",
    "PolarisGenericStrings",
    "PolarisLinkBuilder",
    "PolarisNewCollectionModal.react",
    "PolarisReactRedux",
    "PolarisSavedPostsActionCreateCollection",
    "PolarisUrlHelpers",
    "browserHistory",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.onClose,
        e = a.source,
        f = a.user,
        g = d("PolarisReactRedux").useDispatch();
      a = i("");
      var j = a[0],
        k = a[1];
      a = i(!1);
      var l = a[0],
        m = a[1];
      a = i(!0);
      var n = a[0],
        o = a[1];
      a = function (a) {
        k(a), o(!1);
      };
      var p = function (a) {
        m(!0),
          g(
            d("PolarisSavedPostsActionCreateCollection").createCollection({
              newCollectionName: j,
              postIdsToAdd: [].concat(a),
              successHandler: function (a) {
                var e = d("PolarisUrlHelpers").slugify(j);
                b();
                d("browserHistory").browserHistory.push(
                  d("PolarisLinkBuilder").buildUserSavedCollectionLink(
                    c("nullthrows")(f.username),
                    e === "" ? "_" : e,
                    a
                  )
                );
              },
              userId: f.id,
              source: e,
            })
          );
      };
      return n
        ? h.jsx(c("PolarisNewCollectionModal.react"), {
            actionText: d("PolarisGenericStrings").NEXT,
            onActionClick: a,
            onClose: b,
          })
        : h.jsx(c("PolarisAddCollectionModal.react"), {
            disablePopInAnimation: !0,
            onBack: function () {
              return o(!0);
            },
            onClose: b,
            onDone: p,
            requestInFlight: l,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreSavePanoOutlineIcon",
  ["PolarisIGCoreSVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("PolarisIGCoreSVGIcon"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("polygon", {
            fill: "none",
            points: "20 21 12 13.44 4 21 4 3 20 3 20 21",
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
  "PolarisSavedAudioCollectionPreview.react",
  ["fbt", "PolarisIGCoreThumbnail", "PolarisIGVirtualGrid.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a, b, c, d) {
      b = b[c];
      return i.jsx(
        "div",
        {
          className: d[c],
          children: i.jsx(k, { collectionName: a, coverAudio: b }),
        },
        c
      );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      a.collectionName;
      a = a.coverAudio;
      a = a.thumbnail_uri;
      return a
        ? i.jsx(c("PolarisIGCoreThumbnail"), {
            alt: h._("Image from Audio collection"),
            src: a,
          })
        : null;
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.borderStyleClassNames,
        d = a.collectionName,
        e = a.coverAudioList;
      a = a.numMediaPerRow;
      return i.jsx(c("PolarisIGVirtualGrid.react"), {
        itemCount: e.length,
        itemsPerRow: a,
        renderer: function (a) {
          var c = a.index;
          a.isVisible;
          return j(d, e, c, b);
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSavedCollectionPreviewCard.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "PolarisIGCorePressable",
    "PolarisIGCoreText",
    "PolarisIGCoreThumbnail",
    "PolarisIGVirtualGrid.react",
    "PolarisLinkBuilder",
    "PolarisReactRedux",
    "PolarisSavedAudioCollectionPreview.react",
    "PolarisUrlHelpers",
    "browserHistory",
    "nullthrows",
    "polarisSavedPostsSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = ["_aav7", "_aav8", "_aav9", "_aava"],
      l = 2;
    function m(a, b, c) {
      b = b[c];
      return j.jsx(
        "div",
        {
          className: k[c],
          children: j.jsx(o, { collectionName: a, coverMedia: b }),
        },
        b.id
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.collectionName,
        d = a.coverMediaList;
      return j.jsx(c("PolarisIGVirtualGrid.react"), {
        itemCount: d.length,
        itemsPerRow: l,
        renderer: function (a) {
          var c = a.index;
          a.isVisible;
          return m(b, d, c);
        },
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.collectionName;
      a = a.coverMedia;
      a = a.image_versions2.candidates;
      var d = a.length > 0;
      return j.jsx(j.Fragment, {
        children: d
          ? j.jsx(c("PolarisIGCoreThumbnail"), {
              alt: i._("Image from {collectionName} saved collection", [
                i._param("collectionName", b),
              ]),
              src: a[0].url,
            })
          : null,
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a, b, c) {
      var d = null;
      a != null
        ? (d = j.jsx(o, { collectionName: c, coverMedia: a }))
        : b != null && (d = j.jsx(n, { collectionName: c, coverMediaList: b }));
      return d;
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.collection,
        e = a.user;
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d(
          "polarisSavedPostsSelectors"
        ).getSavedCollectionCoverMediaFromCollection(a, {
          collectionId: b.id,
          userId: e.id,
        });
      });
      var f = a.cover_audio_list;
      a = a.cover_media_list;
      var g = b.cover_media,
        h = d("PolarisUrlHelpers").slugify(b.name);
      g = p(g, a, b.name);
      return j.jsx(c("PolarisIGCorePressable"), {
        label: b.name,
        onPress: function () {
          return d("browserHistory").browserHistory.push(
            d("PolarisLinkBuilder").buildUserSavedCollectionLink(
              c("nullthrows")(e.username),
              h === "" ? "_" : h,
              b.id
            )
          );
        },
        role: "link",
        children: j.jsxs("div", {
          className: "_aavb",
          children: [
            g,
            f != null &&
              j.jsx(c("PolarisSavedAudioCollectionPreview.react"), {
                borderStyleClassNames: k,
                collectionName: b.name,
                coverAudioList: f,
                numMediaPerRow: l,
              }),
            j.jsx("div", {
              className: "_aavc",
              children: j.jsx(c("IGDSBox.react"), {
                bottom: !0,
                left: !0,
                padding: 5,
                position: "absolute",
                width: "100%",
                children: j.jsx(c("PolarisIGCoreText").Title, {
                  color: "web-always-white",
                  display: "truncated",
                  children: b.name,
                }),
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
  "PolarisProfileSavedCollectionsBrowser.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisIGVirtualGrid.react",
    "PolarisReactRedux",
    "PolarisSavedCollectionPreviewCard.react",
    "PolarisSavedCollectionStrings",
    "PolarisScrollWatchedComponent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = { x: 1, y: 2 },
      k = 3,
      l = 1e3,
      m = 615;
    function n(a) {
      if (a >= l) return 3;
      else if (a >= m) return 2;
      return 1;
    }
    function o(a, b) {
      if (b >= k) return !0;
      else if (b === 2 && a < l) return !0;
      else if (b === 1 && a < m) return !0;
      return !1;
    }
    function p(a, b, d) {
      a = a[b];
      return i.jsx(
        "div",
        {
          className: "_aamo",
          children: i.jsx(c("PolarisSavedCollectionPreviewCard.react"), {
            collection: a,
            user: d,
          }),
        },
        a.id
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      return i.jsx("div", { className: "_aamo" }, a);
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      return a.moreAvailable && !a.isFetching;
    }
    function s(a, b) {
      r(a) && b();
    }
    function a(a) {
      var b = a.collections,
        e = a.onRequestNextSavedCollections,
        f = a.pagination,
        g = a.user;
      a = d("PolarisReactRedux").useSelector(function (a) {
        return a.displayProperties.viewportWidth;
      });
      var h = o(a, b.length);
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            "aria-label": d("PolarisSavedCollectionStrings")
              .SAVED_COLLECTIONS_TEXT,
            className: "_aamp" + (h ? " _aamq" : ""),
            role: "navigation",
            children: i.jsx(c("PolarisIGVirtualGrid.react"), {
              itemCount: b.length,
              itemsPerRow: n(a),
              renderer: function (a) {
                var c = a.index;
                a.isVisible;
                return p(b, c, g);
              },
              rendererPlaceholder: q,
              rowClassName: "_aamr",
            }),
          }),
          f.isFetching &&
            f.moreAvailable &&
            i.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              justifyContent: "center",
              marginTop: 4,
              position: "relative",
              children: i.jsx(c("IGDSSpinner.react"), { size: "medium" }),
            }),
          r(f) &&
            i.jsx(c("PolarisScrollWatchedComponent.react"), {
              boundScaleFactor: j,
              onScrollEnter: function () {
                return s(f, e);
              },
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
  "PolarisSavedPostsActionRequestSavedPosts",
  [
    "PolarisGenericStrings",
    "PolarisPaginationUtils",
    "PolarisSavedPostsActionConstants",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = 0;
    f = "2ce1d673055b99250e93b6f88f878fde";
    var h = d("PolarisPaginationUtils").generatePaginationActionCreators({
      pageSize: d("PolarisSavedPostsActionConstants").PAGE_SIZE,
      pagesToPreload: e,
      getState: function (a, b) {
        return (a = a.savedPosts.byUserId.get(b)) == null
          ? void 0
          : a.pagination;
      },
      queryId: f,
      queryParams: function (a) {
        return { id: a };
      },
      onUpdate: function (a, b, d) {
        var e = [],
          f;
        if (b) {
          var g;
          b = c("nullthrows")(b.user);
          e = (
            (b == null
              ? void 0
              : (g = b.edge_saved_media) == null
              ? void 0
              : g.edges) || []
          ).map(function (a) {
            return a.node;
          });
          f =
            b == null
              ? void 0
              : (g = b.edge_saved_media) == null
              ? void 0
              : g.page_info;
        }
        return {
          type: "SAVED_POSTS_UPDATED",
          posts: e,
          pageInfo: f,
          fetch: a,
          userId: d,
        };
      },
      onError: function (a, b, c, e) {
        return {
          type: "SAVED_POSTS_ERRORED",
          err: a,
          fetch: b,
          userId: c,
          toast: {
            text: d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT,
            actionText: d("PolarisGenericStrings").RETRY_TEXT,
            actionHandler: e,
          },
        };
      },
    });
    function i(a) {
      return function (b) {
        var c = function () {
          return b(i(a));
        };
        return b(h.first(a, c));
      };
    }
    function j(a) {
      return function (b, c) {
        c = function () {
          return b(j(a));
        };
        return b(h.next(a, c));
      };
    }
    function a(a, b) {
      return i(b);
    }
    function b(a, b) {
      return j(b);
    }
    g.requestSavedPosts = i;
    g.requestNextSavedPosts = j;
    g.requestSavedPostsForUser = a;
    g.requestNextSavedPostsForUser = b;
  },
  98
);
__d(
  "PolarisProfileTabSaved.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisAdsGatingHelpers",
    "PolarisCreateAndAddCollectionModal.react",
    "PolarisIGCoreSavePanoOutlineIcon",
    "PolarisProfileEmptyState.react",
    "PolarisProfileEmptyStateTypes",
    "PolarisProfileMediaBrowser.react",
    "PolarisProfileSavedCollectionsBrowser.react",
    "PolarisReactRedux",
    "PolarisSavedCollectionStrings",
    "PolarisSavedPostsActionRequestNextSavedCollections",
    "PolarisSavedPostsActionRequestSavedPosts",
    "PolarisSavedPostsTypes",
    "PolarisSizing",
    "PolarisTabbedContentTabLabel.react",
    "PolarisUA",
    "polarisCollectionsLoading",
    "polarisSavedPostsSelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useState,
      m = "saved",
      n = h._("Only you can see what you've saved"),
      o = h._("+ New Collection");
    function a(a, b) {
      return i.jsx(c("PolarisTabbedContentTabLabel.react"), {
        icon: c("PolarisIGCoreSavePanoOutlineIcon"),
        isSelected: a,
        isSmallScreen: b,
        labelText: d("PolarisSavedCollectionStrings").SAVED_TEXT,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      var b = a.isSmallScreen;
      a = a.onClick;
      b = i.jsx(c("IGDSBox.react"), {
        alignItems: d("PolarisUA").isMobile() ? "center" : "stretch",
        marginBottom: 4,
        marginEnd: d("PolarisUA").isMobile() || b ? 4 : 0,
        marginStart: d("PolarisUA").isMobile() || b ? 4 : 0,
        marginTop: d("PolarisUA").isMobile() || b ? 4 : 8,
        position: "relative",
        children: i.jsx(c("IGDSText.react").Body2, {
          color: "secondaryText",
          zeroMargin: !0,
          children: n,
        }),
      });
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "baseline",
        direction: "row",
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            flex: "grow",
            position: "relative",
            children: b,
          }),
          d("PolarisUA").isDesktop() &&
            i.jsx(c("IGDSButton.react"), {
              label: o,
              onClick: a,
              variant: "primary_link",
            }),
        ],
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function q(a) {
      return a.filter(function (a) {
        return !(
          a.id ===
            d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
              .ALL_MEDIA_AUTO_COLLECTION && a.media_count === 0
        );
      });
    }
    function b(a) {
      var b = a.mediaLinkBuilder,
        e = a.onPostImpression,
        f = a.user;
      a = a.viewportWidth;
      var g = f.id,
        h = a < d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF,
        n = l(!1),
        o = n[0],
        r = n[1],
        s = d("PolarisReactRedux").useDispatch(),
        t = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisSavedPostsSelectors").getSavedPosts(a, g);
        }),
        u = j(
          function () {
            return d(
              "PolarisSavedPostsActionRequestSavedPosts"
            ).requestSavedPostsForUser(
              d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .ALL_MEDIA_AUTO_COLLECTION,
              g
            );
          },
          [g]
        );
      n = d("PolarisReactRedux").useSelector(function (a) {
        return d(
          "polarisSavedPostsSelectors"
        ).getSavedCollectionsPaginationForUser(a, g);
      });
      var v = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisSavedPostsSelectors").getAllSavedCollectionsForUser(
            a,
            g
          );
        }),
        w = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisSavedPostsSelectors").getSavedPostsPaginationData(
            a,
            t.length,
            {
              userId: g,
              collectionId: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                .ALL_MEDIA_AUTO_COLLECTION,
            }
          );
        }),
        x = w.isFetching,
        y = w.isOldestPostLoaded;
      w = w.maxPostsToDisplay;
      k(
        function () {
          s(u());
        },
        [s, u]
      );
      k(
        function () {
          s(
            d(
              "PolarisSavedPostsActionRequestNextSavedCollections"
            ).requestInitialSavedCollections(g)
          );
        },
        [s, g]
      );
      var z = t == null || (t.length === 0 && x);
      z = z || d("polarisCollectionsLoading").collectionsLoading(v, n);
      var A = t != null && t.length > 0,
        B =
          d("PolarisUA").isDesktop() &&
          v.length > 0 &&
          !d("polarisCollectionsLoading").onlyEmptyAutoCollection(v) &&
          (!d("polarisCollectionsLoading").onlyAutoCollection(v) ||
            d("PolarisAdsGatingHelpers").allowWebAds());
      if (z)
        return i.jsx(c("IGDSBox.react"), {
          marginTop: 10,
          position: "relative",
          children: i.jsx(c("IGDSSpinner.react"), {
            position: "absolute",
            size: "medium",
          }),
        });
      z = d("PolarisUA").isDesktop() || A || c("qex")._("124") !== !0;
      return i.jsxs(i.Fragment, {
        children: [
          z &&
            i.jsx(p, {
              isSmallScreen: h,
              onClick: function () {
                return r(!0);
              },
            }),
          B
            ? i.jsx(c("PolarisProfileSavedCollectionsBrowser.react"), {
                collections: q(v),
                onRequestNextSavedCollections: function () {
                  return s(
                    d(
                      "PolarisSavedPostsActionRequestNextSavedCollections"
                    ).requestNextSavedCollections(g)
                  );
                },
                pagination: n,
                user: f,
              })
            : i.jsx(i.Fragment, {
                children: A
                  ? i.jsx(
                      c("PolarisProfileMediaBrowser.react"),
                      {
                        isFetching: x,
                        isOldestPostLoaded: y,
                        maxPostsToDisplay: w,
                        mediaLinkBuilder: b,
                        onPostImpression: e,
                        onRequestFirst: function () {
                          return s(u());
                        },
                        onRequestNext: function () {
                          return s(
                            d(
                              "PolarisSavedPostsActionRequestSavedPosts"
                            ).requestNextSavedPostsForUser(
                              d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
                                .ALL_MEDIA_AUTO_COLLECTION,
                              g
                            )
                          );
                        },
                        photoComponentRenderer: null,
                        posts: t,
                        user: f,
                        viewportWidth: a,
                      },
                      "savedMedia"
                    )
                  : i.jsx(c("PolarisProfileEmptyState.react"), {
                      type: d("PolarisProfileEmptyStateTypes")
                        .PROFILE_EMPTY_STATE_KEYS.SAVE,
                    }),
              }),
          o &&
            i.jsx(c("PolarisCreateAndAddCollectionModal.react"), {
              onClose: function () {
                return r(!1);
              },
              source: m,
              user: f,
            }),
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.SAVED_TAB_ID = m;
    g.ProfileTabSavedLabel = a;
    g.ProfileTabSaved = b;
  },
  98
);
__d(
  "PolarisIGCoreTagUpPanoOutlineIcon",
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
            h.jsx("path", {
              d: "M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
            h.jsx("path", {
              d: "M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
            h.jsx("circle", {
              cx: "12.072",
              cy: "11.075",
              fill: "none",
              r: "3.556",
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
  "PolarisTaggedPostsSelectors",
  [
    "PolarisPaginationUtils",
    "immutable-4.0.0-rc.9",
    "nullthrows",
    "polarisCreateSelectorWithArg",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      count: void 0,
      pagination: void 0,
      postIds: new (d("immutable-4.0.0-rc.9").OrderedSet)(),
    };
    a = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.taggedPosts.byUserId;
      },
      function (a) {
        return a.posts.byId;
      },
      function (a, b) {
        return function (c) {
          c = a.get(c, h);
          var e = c.pagination;
          c = c.postIds;
          return c
            .take(d("PolarisPaginationUtils").getVisibleCount(e))
            .map(function (a) {
              return b.get(a);
            })
            .toArray();
        };
      }
    );
    b = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.taggedPosts.pendingByUserId;
      },
      function (a) {
        return a.posts.byId;
      },
      function (a, b) {
        return function (c) {
          c = a.get(c, h);
          var e = c.pagination;
          c = c.postIds;
          return c
            .take(d("PolarisPaginationUtils").getVisibleCount(e))
            .map(function (a) {
              return b.get(a);
            })
            .toArray();
        };
      }
    );
    e = c("polarisCreateSelectorWithArg")(
      function (a) {
        return (a = a.taggedPosts) == null ? void 0 : a.byUserId;
      },
      function (a) {
        return function (b) {
          return !!((b = a.get(b, h)) == null ? void 0 : b.pagination);
        };
      }
    );
    f = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.taggedPosts.byUserId;
      },
      function (a) {
        return function (b) {
          return c("nullthrows")(a.get(b, h).pagination);
        };
      }
    );
    g.getVisiblePostsUserTagged = a;
    g.getVisiblePendingPostsUserTagged = b;
    g.hasPagination = e;
    g.getTaggedPostsPaginationForUser = f;
  },
  98
);
__d(
  "PolarisProfileTabTaggedPhotos.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSSpinner.react",
    "PolarisFastLink.react",
    "PolarisIGCoreTagUpPanoOutlineIcon",
    "PolarisPaginationUtils",
    "PolarisProfileEmptyState.react",
    "PolarisProfileEmptyStateTypes",
    "PolarisProfileMediaBrowser.react",
    "PolarisReactRedux",
    "PolarisSizing",
    "PolarisTabbedContentTabLabel.react",
    "PolarisTaggedPostsActions",
    "PolarisTaggedPostsSelectors",
    "PolarisUA",
    "gkx",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useEffect;
    function a(a) {
      return "/" + a + "/tagged/";
    }
    var l = i._("Manage tagged posts"),
      m = i._("Tagged");
    function b(a, b) {
      return j.jsx(c("PolarisTabbedContentTabLabel.react"), {
        icon: c("PolarisIGCoreTagUpPanoOutlineIcon"),
        isSelected: a,
        isSmallScreen: b,
        labelText: m,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function n(a) {
      a = a.isSmallScreen;
      return j.jsx(c("IGDSBox.react"), {
        alignItems: "baseline",
        direction: "rowReverse",
        marginBottom: 4,
        marginEnd: d("PolarisUA").isMobile() || a ? 4 : 0,
        marginStart: d("PolarisUA").isMobile() || a ? 4 : 0,
        marginTop: d("PolarisUA").isMobile() || a ? 4 : 8,
        position: "relative",
        children:
          d("PolarisUA").isDesktop() &&
          j.jsx(c("PolarisFastLink.react"), {
            href: "/accounts/tagged_posts/",
            children: j.jsx(c("IGDSButton.react"), {
              display: "block",
              label: l,
              variant: "primary_link",
            }),
          }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function e(a) {
      var b = a.fetching,
        e = a.isOwnProfile,
        f = a.mediaLinkBuilder,
        g = a.onPostImpression,
        h = a.onRequestFirst,
        i = a.onRequestNext,
        l = a.pagination,
        m = a.photoComponentRenderer,
        o = a.posts,
        p = a.user;
      a = a.viewportWidth;
      var q = a < d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF;
      k(function () {
        o == null && h(p.id);
      }, []);
      if (o == null || (o.length === 0 && b))
        return j.jsx("div", {
          className: "_aa-l",
          children: j.jsx(c("IGDSSpinner.react"), {
            position: "absolute",
            size: "medium",
          }),
        });
      if (o.length === 0)
        return j.jsx(c("PolarisProfileEmptyState.react"), {
          type: e
            ? d("PolarisProfileEmptyStateTypes").PROFILE_EMPTY_STATE_KEYS
                .OWN_PROFILE_TAGGED
            : d("PolarisProfileEmptyStateTypes").PROFILE_EMPTY_STATE_KEYS
                .TAGGED,
        });
      b = e && c("gkx")("1123") === !0;
      return j.jsxs(j.Fragment, {
        children: [
          b && j.jsx(n, { isSmallScreen: q }),
          j.jsx(
            c("PolarisProfileMediaBrowser.react"),
            {
              isFetching: d("PolarisPaginationUtils").isFetching(
                c("nullthrows")(l)
              ),
              isOldestPostLoaded: !d("PolarisPaginationUtils").hasNextPage(
                c("nullthrows")(l)
              ),
              maxPostsToDisplay: d("PolarisPaginationUtils").getVisibleCount(
                c("nullthrows")(l)
              ),
              mediaLinkBuilder: f,
              onPostImpression: g,
              onRequestFirst: h,
              onRequestNext: i,
              photoComponentRenderer: m,
              posts: o,
              user: p,
              viewportWidth: a,
            },
            "taggedMedia"
          ),
        ],
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function h(a, b) {
      b = b.user;
      var e = a.displayProperties,
        f = !d("PolarisTaggedPostsSelectors").hasPagination(a, b.id);
      if (f)
        return {
          fetching: !0,
          pagination: void 0,
          posts: void 0,
          viewportWidth: e.viewportWidth,
        };
      f =
        d("PolarisTaggedPostsSelectors").getVisiblePostsUserTagged(a, b.id) ||
        [];
      a = c("nullthrows")(
        d("PolarisTaggedPostsSelectors").getTaggedPostsPaginationForUser(
          a,
          b.id
        )
      );
      b = d("PolarisPaginationUtils").isFetching(a);
      return {
        fetching: b,
        pagination: a,
        posts: f,
        viewportWidth: e.viewportWidth,
      };
    }
    function o(a) {
      return {
        onRequestFirst: function (b) {
          a(d("PolarisTaggedPostsActions").requestTaggedPosts(b));
        },
        onRequestNext: function (b) {
          a(d("PolarisTaggedPostsActions").requestNextTaggedPosts(b));
        },
      };
    }
    i = d("PolarisReactRedux").connect(h, o)(e);
    g.taggedHref = a;
    g.ProfileTabTaggedLabel = b;
    g.ProfileTabTaggedPhotos = i;
  },
  98
);
__d(
  "PolarisDirectActionRestrictDirectUser",
  ["polarisDirectSelectors"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return function (b, c) {
        return b({
          threadId: d("polarisDirectSelectors").getThreadIdForUserId(c(), a),
          type: "DIRECT_RESTRICT_USER",
          userId: a,
        });
      };
    }
    g.restrictDirectUser = a;
  },
  98
);
__d(
  "PolarisRelationshipActionRestrictUser",
  [
    "fbt",
    "PolarisDirectActionRestrictDirectUser",
    "PolarisGenericStrings",
    "PolarisSharedAPI",
    "PolarisToastActions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      return function (b, c) {
        b({ type: "RESTRICT_USER", targetUserId: a });
        return d("PolarisSharedAPI")
          .restrictUser(a)
          .then(
            function (c) {
              b({ type: "RESTRICT_USER_SUCCEEDED", targetUserId: a }),
                b(
                  d("PolarisDirectActionRestrictDirectUser").restrictDirectUser(
                    a
                  )
                ),
                b(
                  d("PolarisToastActions").showToast({
                    text: h._("Account Restricted"),
                  })
                );
            },
            function (c) {
              b({ type: "RESTRICT_USER_FAILED", targetUserId: a }),
                b(
                  d("PolarisToastActions").showToast({
                    text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                  })
                );
            }
          );
      };
    }
    g.restrictUser = a;
  },
  98
);
__d(
  "PolarisRestrictInfoSheetOrModal.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSCommentPanoOutlineIcon",
    "IGDSDirectPanoOutlineIcon",
    "IGDSDivider.react",
    "IGDSShieldPanoOutlineIcon",
    "IGDSText.react",
    "PolarisGenericStrings",
    "PolarisIGCoreButton",
    "PolarisIGCoreSheetOrModal",
    "PolarisIGCoreText",
    "PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent",
    "PolarisReactRedux",
    "PolarisRelationshipActionRestrictUser",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Restrict Account");
    function k(a) {
      return h._("Are you having a problem with {username}?", [
        h._param("username", a),
      ]);
    }
    var l = {
      VISIBILITY: {
        description: h._(
          "Limit unwanted interactions without having to block or unfollow someone you know."
        ),
        icon: i.jsx(c("IGDSShieldPanoOutlineIcon"), { alt: h._("User icon") }),
      },
      COMMENTS: {
        description: h._(
          "You'll control if others can see their new comments on your posts."
        ),
        icon: i.jsx(c("IGDSCommentPanoOutlineIcon"), {
          alt: h._("Comment icon"),
        }),
      },
      DIRECT: {
        description: h._(
          "Their chat will be moved to your Message Requests, so they won't see when you've read it."
        ),
        icon: i.jsx(c("IGDSDirectPanoOutlineIcon"), {
          alt: h._("Direct icon"),
        }),
      },
    };
    function m(a) {
      a = a.infoType;
      a = l[a];
      var b = a.description;
      a = a.icon;
      return i.jsxs(c("IGDSBox.react"), {
        direction: "row",
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            flex: "none",
            marginTop: 3,
            position: "relative",
            children: a,
          }),
          i.jsx(c("IGDSBox.react"), {
            flex: "grow",
            marginStart: 4,
            paddingY: 3,
            position: "relative",
            children: i.jsx(c("PolarisIGCoreText").Body, {
              color: "ig-secondary-text",
              textAlign: "left",
              children: b,
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = i.jsx(c("IGDSBox.react"), {
        paddingY: 5,
        position: "relative",
        width: "100%",
        children: i.jsx(c("PolarisIGCoreButton"), {
          borderless: !0,
          color: "ig-primary-button",
          fullWidth: !0,
          large: !0,
          onClick: a.onRestrictClick,
          children: j,
        }),
      });
      return d("PolarisUA").isMobile()
        ? i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            marginBottom: 5,
            position: "relative",
            width: "100%",
            children: b,
          })
        : i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            position: "relative",
            width: "100%",
            children: [
              i.jsx(c("IGDSDivider.react"), {}),
              b,
              i.jsxs(c("IGDSBox.react"), {
                position: "relative",
                width: "100%",
                children: [
                  i.jsx(c("IGDSDivider.react"), {}),
                  i.jsx(c("IGDSBox.react"), {
                    paddingY: 5,
                    position: "relative",
                    children: i.jsx(c("PolarisIGCoreButton"), {
                      borderless: !0,
                      color: "ig-secondary-button",
                      fullWidth: !0,
                      large: !0,
                      onClick: a.onClose,
                      children: d("PolarisGenericStrings").CANCEL_TEXT,
                    }),
                  }),
                ],
              }),
            ],
          });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.onClose,
        e = a.targetUserId;
      a = a.targetUsername;
      var f = d("PolarisReactRedux").useDispatch(),
        g = function () {
          c("PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent").logClick({
            actorIgUserid: e,
            step: "restrict_account_button",
          }),
            f(d("PolarisRelationshipActionRestrictUser").restrictUser(e)),
            b();
        },
        h = function () {
          b();
        };
      return i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
        onClose: h,
        children: i.jsxs(c("IGDSBox.react"), {
          position: "relative",
          width: "100%",
          children: [
            i.jsxs(c("IGDSBox.react"), {
              alignItems: "center",
              marginEnd: 1,
              marginStart: 2,
              padding: 4,
              position: "relative",
              children: [
                i.jsx(c("IGDSBox.react"), {
                  marginBottom: 4,
                  marginTop: d("PolarisUA").isMobile() ? 0 : 4,
                  paddingX: 4,
                  position: "relative",
                  children: i.jsx(c("IGDSText.react").Title, {
                    textAlign: "center",
                    children: k(a),
                  }),
                }),
                i.jsx(m, { infoType: "VISIBILITY" }),
                i.jsx(m, { infoType: "COMMENTS" }),
                i.jsx(m, { infoType: "DIRECT" }),
              ],
            }),
            i.jsx(n, { onClose: h, onRestrictClick: g }),
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
  "UpsellProDashDialog.react",
  ["fbt", "IGCoreDialog", "PolarisGenericStrings", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Looking for Instagram's professional dashboard?"),
      k = h._(
        "Use the Instagram mobile app to view the professional dashboard and see your professional tools and resources."
      );
    function a(a) {
      a = a.onClose;
      var b = j,
        c = k;
      return i.jsx(d("IGCoreDialog").IGCoreDialog, {
        body: c,
        title: b,
        children: i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
          onClick: a,
          children: d("PolarisGenericStrings").OK_TEXT,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UpsellProDashDialogScreen.react",
  ["UpsellProDashDialog.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      a = i(!0);
      var b = a[0],
        d = a[1];
      return b
        ? h.jsx(c("UpsellProDashDialog.react"), {
            onClose: function () {
              return d(!1);
            },
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetTitleForProfile",
  ["fbt", "qex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.fullName;
      a = a.username;
      var d = b != null && b !== "" && b !== a,
        e = c("qex")._("374");
      if (e === "var_1")
        if (d)
          return h._("{full_name} (\u0040{username}) on Instagram", [
            h._param("full_name", b),
            h._param("username", a),
          ]);
        else
          return h._("\u0040{username} on Instagram", [
            h._param("username", a),
          ]);
      else if (e === "var_2")
        return d
          ? h._("{full_name} (\u0040{username}) | Instagram", [
              h._param("full_name", b),
              h._param("username", a),
            ])
          : h._("\u0040{username} | Instagram", [h._param("username", a)]);
      else
        return d
          ? h._(
              "{full_name} (\u0040{username}) \u2022 Instagram photos and videos",
              [h._param("full_name", b), h._param("username", a)]
            )
          : h._("\u0040{username} \u2022 Instagram photos and videos", [
              h._param("username", a),
            ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfilePage.react",
  [
    "cx",
    "fbt",
    "invariant",
    "AboutThisAccountRefererTypes",
    "CAAWebClientLoggingEventSource",
    "CometPlaceholder.react",
    "CometRelayEnvironmentProvider",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSLockOutline96Icon",
    "IGDSSpinner.react",
    "IGDSText.react",
    "IGRouter",
    "JSResource",
    "PolarisAdvisoryMessage.react",
    "PolarisAppInstallStrings",
    "PolarisAsyncEntityQRModal",
    "PolarisAsyncFollowListModal",
    "PolarisAsyncSimilarAccountsModal",
    "PolarisClipsLogger",
    "PolarisConfig",
    "PolarisConnectionsLogger",
    "PolarisCountryBlock.react",
    "PolarisCreationMode",
    "PolarisDesktopSponsoredPersistentCTA.react",
    "PolarisEmbedModal.react",
    "PolarisEmptyProfileOtherUsers.react",
    "PolarisErrorBoundary.react",
    "PolarisFastLink.react",
    "PolarisFollowChainingList.react",
    "PolarisHasAddHighlightEnabled",
    "PolarisHasArchivePageEnabled",
    "PolarisHasArchivePageEnabledMobile",
    "PolarisIGCoreGuidesPanoOutlineIcon",
    "PolarisIGCorePhotoGridPanoOutlineIcon",
    "PolarisIGCoreToast",
    "PolarisIgLiteCarbonUpsellsUtils",
    "PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent",
    "PolarisLinkBuilder",
    "PolarisLiveGating",
    "PolarisLoadingModal.react",
    "PolarisLoggedOutCtaLogger",
    "PolarisLoggedOutLoginConstants",
    "PolarisLogger",
    "PolarisLoggingOutDialog.react",
    "PolarisLoginLogger",
    "PolarisMediaBrowserConstants",
    "PolarisMobileSponsoredPersistentCTA.react",
    "PolarisNavigationLayoutContext",
    "PolarisNavigationStrings",
    "PolarisNewUserActivatorsUnit.react",
    "PolarisNewUserActivatorsUnitTypes",
    "PolarisODS",
    "PolarisOpenInApp",
    "PolarisPageMetadata.react",
    "PolarisPhoneConfirmTypes",
    "PolarisPostUtils",
    "PolarisProfileActionButtons.react",
    "PolarisProfileEmptyState.react",
    "PolarisProfileEmptyStateTypes",
    "PolarisProfileOptionsModalContainer.react",
    "PolarisProfilePageBiography.react",
    "PolarisProfilePageContext",
    "PolarisProfilePageHeader.react",
    "PolarisProfilePageMobileHeader.react",
    "PolarisProfilePageMultipleLinksModal.react",
    "PolarisProfilePageStrings",
    "PolarisProfileQEHelpers",
    "PolarisProfileStatistics.react",
    "PolarisProfileStoryHighlightsTray.react",
    "PolarisProfileSuggestedUsers.react",
    "PolarisProfileTabClips.react",
    "PolarisProfileTabFeedConstants",
    "PolarisProfileTabGuidesContainer.react",
    "PolarisProfileTabPosts.react",
    "PolarisProfileTabSaved.react",
    "PolarisProfileTabTaggedPhotos.react",
    "PolarisProfileTabTaggedPhotosConstants",
    "PolarisProfileUtils",
    "PolarisQPConstants",
    "PolarisQPDeepLinkRoutes",
    "PolarisQPManager.react",
    "PolarisReportConstants",
    "PolarisRestrictInfoSheetOrModal.react",
    "PolarisRoutes",
    "PolarisShell.react",
    "PolarisSizing",
    "PolarisTabbedContent.react",
    "PolarisTabbedContentTabLabel.react",
    "PolarisTrackingNodeProvider.react",
    "PolarisUA",
    "PolarisViewpointReact.react",
    "UpsellProDashDialogScreen.react",
    "browserHistory",
    "cr:2082",
    "cr:4150",
    "gkx",
    "justknobx",
    "lazyLoadComponent",
    "memoizeOneWithArgs",
    "memoizeStringOnly",
    "nullthrows",
    "polarisGetTitleForProfile",
    "polarisWithCreationStarter",
    "qex",
    "react",
    "useGetStableCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = "profilePage",
      m = c("lazyLoadComponent")(
        c("JSResource")("PolarisAboutThisAccountModal.react").__setRef(
          "PolarisProfilePage.react"
        )
      ),
      n = c("lazyLoadComponent")(
        c("JSResource")("PolarisFRXReportModal.react").__setRef(
          "PolarisProfilePage.react"
        )
      ),
      o = 1500,
      p = i._("Suggested"),
      q = i._("This account is private");
    function r(a) {
      return i._(
        "Already follow {username}? Switch to the app or log in to see their photos and videos.",
        [i._param("username", a)]
      );
    }
    var s = i._("See who else is on Instagram");
    function t(a) {
      return i._("See photos and videos from {username}. {=m3}", [
        i._param("username", a),
        i._implicitParam(
          "=m3",
          k.jsx(c("PolarisFastLink.react"), {
            href: d("PolarisLinkBuilder").buildLoginLink(
              d("browserHistory").getPath(d("browserHistory").browserHistory),
              { source: "private_profile" }
            ),
            children: i._("Log in"),
          })
        ),
      ]);
    }
    t.displayName = t.name + " [from " + f.id + "]";
    var u = "posts",
      v = "guides";
    a = 4;
    var w = a * d("PolarisMediaBrowserConstants").POSTS_PER_ROW,
      x = i._("Guides");
    e = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b) {
        var e, f;
        f = a.call(this, b) || this;
        f.$1 = d(
          "PolarisIgLiteCarbonUpsellsUtils"
        ).isIgLiteCarbonUpsellsEligible();
        f.$2 = !d("PolarisConfig").isLoggedIn() && d("PolarisUA").isMobile();
        f.$3 = c("memoizeOneWithArgs")(function (a) {
          return { username: a };
        });
        f.$4 = k.createRef();
        f.$14 = function (a) {
          return d("PolarisLinkBuilder").buildMediaLink(a);
        };
        f.$15 = function () {
          f.props.history.push(
            d("PolarisLinkBuilder").buildUserLink(
              c("nullthrows")(f.props.user.username)
            )
          );
        };
        f.$16 = function () {
          f.setState({ modalEntryPath: null, showSimilarAccountsModal: !1 });
        };
        f.$17 = function () {
          f.setState({ modalEntryPath: null, showRelatedProfilesModal: !1 });
        };
        f.$18 = function () {
          f.setState({ chainingExpanded: !0, chainingInteracted: !0 });
        };
        f.$19 = function () {
          f.setState({ chainingExpanded: !1 });
        };
        f.$20 = function () {
          f.props.onChainingRetry(f.props.user.id);
        };
        f.$21 = function (a) {
          f.props.onDismissProfileChainingSuggestion(f.props.user.id, a);
        };
        f.$22 = function (a) {
          f.props.onDismissTrendingAccountSuggestion(f.props.user.id, a);
        };
        f.$23 = function (a) {
          f.props.onStartCreation(
            "profile_null_upsell",
            d("PolarisCreationMode").CreationMode.POST
          );
        };
        f.$9 = function (a) {
          d("PolarisUA").isMobile()
            ? f.props.onStartCreation(
                "profile_null_upsell",
                d("PolarisCreationMode").CreationMode.POST
              )
            : f.props.openFeedCreationModal();
        };
        f.$24 = function (a) {
          f.state.viewedPosts.has(a.id) ||
            f.setState(function (b) {
              var c = b.postImpressionsCount;
              b = b.viewedPosts;
              return { postImpressionsCount: c + 1, viewedPosts: b.add(a.id) };
            }),
            f.props.onPostImpression(
              a,
              f.props.viewer,
              c("nullthrows")(f.props.user.username),
              f.state.postImpressionsCount
            );
        };
        f.$25 = function () {
          f.$6() ||
            c("PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent").logClick(
              { actorIgUserid: f.props.user.id, step: "profile_entry_point" }
            ),
            f.setState({ showOptionsModal: !0 });
        };
        f.$26 = function () {
          f.setState({ showOptionsModal: !1 });
        };
        f.$27 = function () {
          f.setState({ showOptionsModal: !1, showFRXReportingModal: !0 });
        };
        f.$28 = function () {
          f.setState({ showMultipleLinksModal: !0 });
        };
        f.$29 = function () {
          f.setState({ showMultipleLinksModal: !1 });
        };
        f.$30 = function () {
          c("PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent").logClick({
            actorIgUserid: f.props.user.id,
            step: "restrict_option",
          }),
            f.setState({ showRestrictSheetOrModal: !0 });
        };
        f.$31 = function () {
          f.$30(), f.setState({ showOptionsModal: !1 });
        };
        f.$32 = function () {
          f.setState({ showRestrictSheetOrModal: !1 });
        };
        f.$34 = function (a) {
          f.$33(a), f.setState({ showOptionsModal: !1 });
        };
        f.$35 = function () {
          f.setState({ showEmbedModal: !0, showOptionsModal: !1 });
        };
        f.$36 = function (a) {
          f.setState({
            showAboutThisAccountModal: !0,
            showOptionsModal: !1,
            aboutThisAccountRefererType: a,
          });
        };
        f.$37 = function (a, b, e) {
          e.preventDefault();
          b = c("nullthrows")(f.props.user.username);
          d("PolarisUA").isDesktop()
            ? f.props.onLoggedOutIntentClickLoginModal(
                d("PolarisLinkBuilder").buildUserLink(b),
                a
              )
            : f.props.onLoggedOutIntentClick(a, b);
        };
        f.$12 = function (a) {
          d("PolarisUA").isMobile() ||
            (a.preventDefault(),
            f.setState({
              modalEntryPath: d("browserHistory").getURL(
                d("browserHistory").browserHistory
              ),
              showSimilarAccountsModal: !0,
            }));
        };
        f.$38 = function (a) {
          d("PolarisUA").isMobile() ||
            (a.preventDefault(),
            f.setState({
              modalEntryPath: d("browserHistory").getURL(
                d("browserHistory").browserHistory
              ),
              showRelatedProfilesModal: !0,
            }));
        };
        f.$39 = function () {
          f.setState({ showOptionsModal: !1 }), f.$40();
        };
        f.$40 = function () {
          var a;
          f.$6() || j(0, 51518);
          var b = "profile_options_modal";
          d("PolarisLoginLogger").logLoginEvent({
            event_name: "logout_attempt",
            login_source: b,
          });
          f.setState({
            showLogoutConfirmationModal: !1,
            showLoggingOutDialog: !0,
          });
          a = ((a = f.props.viewer) == null ? void 0 : a.id) || null;
          f.props.onLogout(a, b);
        };
        f.$41 = function () {
          d("PolarisLogger").logAction("profilePageEditClick");
        };
        f.$42 = function () {
          d("PolarisLogger").logAction("profileTabPostsClick");
        };
        f.$43 = function () {
          d("PolarisLogger").logAction("profileTabFeedClick");
        };
        f.$44 = function () {
          d("PolarisLogger").logAction("profileTabGuidesClick"),
            c("PolarisODS").incr("web.profile.tab.guides.click");
        };
        f.$45 = function () {
          d("PolarisLogger").logAction("profileTabSavedClick");
        };
        f.$46 = function () {
          d("PolarisLogger").logAction("profileTabTaggedClick");
        };
        f.$47 = function () {
          d("PolarisLogger").logAction("profileTabClipsClick"),
            c("PolarisODS").incr("web.profile.tab.clips.click");
        };
        f.$48 = function (a) {
          a.preventDefault(),
            d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent({
              ctaType: "private_profile",
              ctaVersion: f.$1 ? "instagramlitecarbon" : "",
              eventName: "app_open_click",
            }),
            d("PolarisOpenInApp").openInApp(
              f.props.android,
              f.props.ios,
              f.props.originalPath,
              null,
              f.$1
            );
        };
        f.$49 = function () {
          d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent({
            ctaType: "private_profile",
            ctaVersion: f.$1 ? "instagramlitecarbon" : "",
            eventName: "login_click",
          });
        };
        f.$50 = c("memoizeStringOnly")(function (a) {
          return this.$37.bind(this, a);
        });
        f.$11 = function () {
          var a = f.isSmallScreen(),
            b,
            e = function () {
              var e = k.jsx(c("PolarisFastLink.react"), {
                className: "_aa_q",
                href: d("PolarisLinkBuilder").buildLoginLink(
                  d("browserHistory").getPath(
                    d("browserHistory").browserHistory
                  ),
                  { source: "private_profile" }
                ),
                onClick: f.$49,
                children: f.$2
                  ? d("PolarisNavigationStrings").LOG_IN_TEXT
                  : i._("Log in"),
              });
              d("PolarisLoggedOutCtaLogger").logLoggedOutCtaEvent({
                ctaType: "private_profile",
                ctaVersion: self.$1 ? "instagramlitecarbon" : "",
                eventName: "impression",
              });
              if (f.$2) {
                var g = k.jsx(c("IGDSText.react").BodyEmphasized, {
                  color: "secondaryText",
                  children: f.props.user.username,
                });
                return k.jsxs(c("IGDSBox.react"), {
                  alignItems: "center",
                  marginEnd: 9,
                  marginStart: 9,
                  marginTop: 12,
                  position: "relative",
                  children: [
                    k.jsxs(c("IGDSBox.react"), {
                      marginBottom: 4,
                      position: "relative",
                      children: [
                        k.jsx(c("IGDSBox.react"), {
                          marginBottom: 3,
                          position: "relative",
                          children: k.jsx(c("IGDSText.react").BodyEmphasized, {
                            textAlign: "center",
                            children: q,
                          }),
                        }),
                        k.jsx(c("IGDSText.react").Body, {
                          color: "secondaryText",
                          textAlign: "center",
                          children: r(g),
                        }),
                      ],
                    }),
                    k.jsx(c("IGDSBox.react"), {
                      marginBottom: 3,
                      position: "relative",
                      width: "100%",
                      children: k.jsx(c("IGDSButton.react"), {
                        fullWidth: !0,
                        label: f.$1
                          ? d("PolarisAppInstallStrings")
                              .USE_INSTAGRAM_LITE_CARBON_CTA
                          : d("PolarisAppInstallStrings").SWITCH_TO_THE_APP,
                        onClick: f.$48,
                      }),
                    }),
                    k.jsx(c("IGDSBox.react"), {
                      position: "relative",
                      children: e,
                    }),
                  ],
                });
              }
              !f.props.viewer
                ? (b = i._(
                    "Already follow {username}? {=Log in} to see their photos and videos.",
                    [
                      i._param("username", f.props.user.username),
                      i._param("=Log in", e),
                    ]
                  ))
                : (b = i._("Follow to see their photos and videos."));
              return k.jsx(c("PolarisAdvisoryMessage.react"), {
                className: a ? "" : "_aa_s",
                children: k.jsxs("div", {
                  className: "_aa_t",
                  children: [
                    k.jsx("h2", {
                      className: "_aa_u",
                      children: i._("This Account is Private"),
                    }),
                    k.jsx("div", { className: a ? "" : "_a9zv", children: b }),
                  ],
                }),
              });
            },
            g = function (a) {
              a.state === "entered" &&
                f.$4.current === null &&
                ((f.$4.current = !1),
                d("PolarisLogger").logAction(
                  "trendingAccountModulePrivateProfiles",
                  {
                    source: d("PolarisConnectionsLogger")
                      .CONNECTIONS_CONTAINER_MODULES.error,
                    target: "impressionLogging",
                  }
                ));
            },
            h =
              d("PolarisUA").isMobile() &&
              !d("PolarisConfig").isLoggedIn() &&
              f.props.trendingAccounts != null &&
              f.props.trendingAccounts.length > 0 &&
              c("qex")._("174") === !0;
          return f.props.chainingSuggestions &&
            f.props.chainingSuggestions.length > 0
            ? k.jsx(c("PolarisProfileSuggestedUsers.react"), {
                advisoryMessage: k.jsx(e, {}),
                analyticsContext: d("PolarisConnectionsLogger")
                  .CONNECTIONS_CONTAINER_MODULES.profile,
                emptyState: k.jsx(e, {}),
                isSmallScreen: a,
                users: f.props.chainingSuggestions,
              })
            : h === !0
            ? k.jsxs("div", {
                children: [
                  f.$60(),
                  k.jsx(d("PolarisViewpointReact.react").Viewpoint, {
                    action: g,
                    id: "trending_accounts_private_profiles",
                    children: function (b) {
                      return k.jsx("div", {
                        ref: b,
                        children: k.jsx(c("PolarisFollowChainingList.react"), {
                          analyticsContext: d("PolarisConnectionsLogger")
                            .CONNECTIONS_CONTAINER_MODULES
                            .trending_accounts_private_profile,
                          chainingSuggestions:
                            (b = f.props.trendingAccounts) == null
                              ? void 0
                              : b.map(function (a) {
                                  var b = a.fullName,
                                    c = a.id,
                                    d = a.isVerified,
                                    e = a.profilePictureUrl,
                                    f = a.suggestionDescription;
                                  a = a.username;
                                  return {
                                    fullName: b,
                                    id: c,
                                    isVerified: d,
                                    profilePictureUrl: e,
                                    suggestionDescription: f,
                                    username: a,
                                  };
                                }),
                          className: d("PolarisUA").isMobile() ? "_ab00" : "",
                          impressionModule: d("PolarisConnectionsLogger")
                            .VIEW_MODULES.trending_accounts_private_profile,
                          isSmallScreen: a,
                          isTrendingAccountModule: !0,
                          onSuggestionDismissed: f.$22,
                          title: s,
                          useAlternateViewProfileButton: !1,
                        }),
                      });
                    },
                  }),
                ],
              })
            : k.jsx(e, {});
        };
        f.$52 = function (a, b) {
          return k.jsx(c("PolarisTabbedContentTabLabel.react"), {
            icon: c("PolarisIGCorePhotoGridPanoOutlineIcon"),
            isSelected: a,
            isSmallScreen: b,
            labelText: d("PolarisProfilePageStrings").DEFAULT_POSTS_TEXT,
          });
        };
        f.$54 = function (a, b) {
          return k.jsx(c("PolarisTabbedContentTabLabel.react"), {
            icon: c("PolarisIGCoreGuidesPanoOutlineIcon"),
            isSelected: a,
            isSmallScreen: b,
            labelText: x,
          });
        };
        f.state = {
          canSeePersistentCta:
            (e = b.profileTrackingData) == null
              ? void 0
              : e.enable_persistent_cta,
          chainingExpanded: !1,
          chainingInteracted: !1,
          modalEntryPath: null,
          showMultipleLinksModal: !1,
          postImpressionsCount: 0,
          showAboutThisAccountModal: !1,
          showEmbedModal: !1,
          showLogoutConfirmationModal: !1,
          showLoggingOutDialog: !1,
          showFRXReportingModal: !1,
          showOptionsModal: !1,
          showQRModal: b.showQRModal,
          showRelatedProfilesModal: !1,
          showRestrictSheetOrModal: !1,
          showSimilarAccountsModal: !1,
          toastContentOnLoad: b.toastContentOnLoad,
          showNewHighlightModal: !1,
          viewedPosts: new Set(),
          aboutThisAccountRefererType: c("AboutThisAccountRefererTypes")
            .PROFILE_MORE,
        };
        return f;
      }
      var f = e.prototype;
      f.componentDidMount = function () {
        var a = this.props,
          b = a.chainingSuggestions,
          e = a.hasLoadedHighlightReels,
          f = a.hasReel,
          g = a.history,
          h = a.onProfilePageLoaded,
          i = a.user;
        a = a.viewer;
        var j = new URLSearchParams(g.location.search),
          k = !a;
        e = !e && this.$5();
        var l = d("PolarisLiveGating").shouldFetchLiveOnProfile();
        b = {
          chaining: !!a && !b,
          suggestedUsers: this.$6(),
          reel: !!a && !f,
          fetchUserExtras: k,
          fetchHighlightReels: e,
          fetchLiveStatus: l,
        };
        Object.values(b).some(function (a) {
          return a;
        }) && this.props.onLoadExtras(i.id, b);
        this.$6() &&
          this.props.archiveReelsInfo == null &&
          (d("PolarisHasArchivePageEnabled").hasArchivePageEnabled() ||
            d(
              "PolarisHasArchivePageEnabledMobile"
            ).hasArchivePageEnabledMobile()) &&
          this.props.onLoadArchiveStories();
        this.props.onPageView(
          this.props.viewer,
          c("nullthrows")(i.username),
          this.props.pageViewCount
        );
        j.has("upcoming_event_id") &&
          c("PolarisODS").incr("web.profile.upcoming_event_id_in_url");
        if (a != null && a.id === i.id && j.has("options")) {
          f = new URLSearchParams(j);
          f["delete"]("options");
          g.push(g.location.pathname + "?" + f.toString());
          this.props.onOpenMobileNavMenu();
        }
        c("justknobx")._("994") && c("gkx")("841") && h();
      };
      f.componentDidUpdate = function (a) {
        this.$7();
      };
      f.$7 = function () {
        var a = this.props.history.location,
          b = a.hash;
        a = a.search;
        if (b) {
          this.props.history.replace(this.props.history.location.pathname);
          switch (b) {
            case c("PolarisQPDeepLinkRoutes").confirmPhone:
              b = new URLSearchParams(a);
              a = b.get("phone_number");
              this.props.onConfirmPhoneNumber(a);
              this.props.history.push(
                "" +
                  d("PolarisRoutes").PHONE_CONFIRM_PATH +
                  d("PolarisPhoneConfirmTypes").USAGE.confirm
              );
              break;
            case c("PolarisQPDeepLinkRoutes").changePhone:
              this.props.onConfirmPhoneNumber(null);
              this.props.history.push(
                "" +
                  d("PolarisRoutes").PHONE_CONFIRM_PATH +
                  d("PolarisPhoneConfirmTypes").USAGE.add
              );
              break;
          }
        }
      };
      f.$8 = function (a, b) {
        var e = this;
        b === void 0 && (b = 0);
        if (this.$6() && a.length === 0 && b === 0)
          return function () {
            return k.jsx(c("PolarisNewUserActivatorsUnit.react"), {
              className: "_aa_x",
              fallbackComponent: k.jsx(c("PolarisProfileEmptyState.react"), {
                buttonClick: e.$9,
                iconClick: e.$9,
                type: d("PolarisProfileEmptyStateTypes")
                  .PROFILE_EMPTY_STATE_KEYS.PHOTOS,
              }),
              inDesktopFeedCreationUpsellQE: !0,
              module: d("PolarisNewUserActivatorsUnitTypes").MODULES.profile,
              onFirstPhotoUpload: e.$9,
            });
          };
        else if (this.props.user.countryBlock)
          return function () {
            return k.jsx(c("PolarisCountryBlock.react"), {});
          };
        else if (this.$10()) return this.$11;
        else if (a.length === 0 && b === 0)
          return function () {
            return k.jsx(c("PolarisEmptyProfileOtherUsers.react"), {
              analyticsContext: d("PolarisConnectionsLogger")
                .CONNECTIONS_CONTAINER_MODULES.profile,
              chainingSuggestions: e.props.chainingSuggestions,
              isSmallScreen: e.isSmallScreen(),
              onSeeAllClicked: e.$12,
              username: e.props.user.username,
            });
          };
        return null;
      };
      f.$13 = function () {
        return this.props.user.username;
      };
      f.$10 = function () {
        return this.props.user.isPrivate == null
          ? !1
          : this.props.user.isPrivate &&
              !(
                this.props.isFollowing || this.props.user === this.props.viewer
              );
      };
      f.isSmallScreen = function () {
        return (
          this.props.viewportWidth <
          d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF
        );
      };
      f.$6 = function (a) {
        a === void 0 && (a = this.props);
        return !!(a.viewer && a.viewer.id === a.user.id);
      };
      f.$5 = function () {
        return (
          (this.props.highlightReelCount != null &&
            this.props.highlightReelCount !== 0) ||
          (this.$6() &&
            this.props.hasArchiveStories &&
            d("PolarisHasAddHighlightEnabled").hasAddHighlightEnabled())
        );
      };
      f.$33 = function (a) {
        var b = this.props,
          d = b.onUnrestrictUserClick;
        b = b.user;
        c("PolarisIgWellbeingRestrictProfileFlowActionFalcoEvent").logClick({
          actorIgUserid: b.id,
          step: a,
        });
        d(b.id);
      };
      f.$51 = function () {
        var a = this,
          b = c("nullthrows")(this.props.user.username),
          e = this.props,
          f = e.isFetching,
          g = e.isOldestPostLoaded,
          h = e.maxPostsToDisplay,
          i = e.onDismissRelatedProfileSuggestion,
          j = e.onLoggedOutIntentClickLoginModal,
          m = e.onRequestNextProfilePosts,
          n = e.onRequestProfilePosts,
          o = e.posts,
          p = e.profileTrackingData,
          q = e.relatedProfiles,
          r = e.user,
          s = e.viewer,
          t = e.viewportWidth,
          v = Boolean(q && q.length && o.length >= w),
          x = c("gkx")("4816")
            ? d("PolarisLoggedOutLoginConstants")
                .LOGGED_OUT_JP_POST_IMPRESSION_LIMIT
            : d("PolarisLoggedOutLoginConstants")
                .LOGGED_OUT_POST_IMPRESSION_LIMIT,
          y = (e = (e = r.counts) == null ? void 0 : e.media) != null ? e : 0;
        return {
          navigation: {
            href: d("PolarisProfileUtils").getTabbedComponentLink(
              this.state.canSeePersistentCta,
              p,
              d("PolarisLinkBuilder").buildUserLink(b)
            ),
            onClick: s == null ? void 0 : this.$42,
            renderLabel: this.$52,
            tabId: u,
          },
          content: function () {
            return k.jsx(d("PolarisProfileTabPosts.react").ProfileTabPosts, {
              analyticsContext: l,
              isFetching: f,
              isOldestPostLoaded: g,
              isPrivateProfile: a.$10(),
              isSmallScreen: a.isSmallScreen(),
              maxPostsToDisplay: h,
              mediaLinkBuilder: a.$14,
              numPostsAboveRelatedProfiles: w,
              onIntentClick: j,
              onOpenRelatedProfilesModal: a.$38,
              onPostImpression: a.$24,
              onRequestFirst: n,
              onRequestNext: m,
              onSuggestionDismissed: i,
              photoComponentRenderer: a.$8(o, y),
              posts: d("PolarisConfig").isLoggedIn() ? o : o.slice(0, x + 12),
              relatedProfiles: q,
              showRelatedProfiles: v,
              user: r,
              viewportWidth: t,
            });
          },
        };
      };
      f.$53 = function () {
        var a = this.props,
          b = a.profileTrackingData,
          e = a.user;
        a = a.viewer;
        return e.hasGuides !== !0
          ? null
          : {
              navigation: {
                href: d("PolarisProfileUtils").getTabbedComponentLink(
                  this.state.canSeePersistentCta,
                  b,
                  d("PolarisLinkBuilder").buildUserPathLink(
                    c("nullthrows")(e.username),
                    "guides"
                  )
                ),
                onClick: a == null ? void 0 : this.$44,
                renderLabel: this.$54,
                tabId: v,
              },
              content: function () {
                return k.jsx(c("PolarisProfileTabGuidesContainer.react"), {
                  user: e,
                });
              },
            };
      };
      f.$55 = function () {
        var a = this,
          b = this.props,
          e = b.profileTrackingData,
          f = b.user,
          g = b.viewer;
        return f.hasClips !== !0 || !c("gkx")("4798") || this.$10()
          ? null
          : {
              navigation: {
                href: d("PolarisProfileUtils").getTabbedComponentLink(
                  this.state.canSeePersistentCta,
                  e,
                  d("PolarisLinkBuilder").buildUserPathLink(
                    c("nullthrows")(f.username),
                    "reels"
                  )
                ),
                onClick: function () {
                  a.$47(),
                    d("PolarisClipsLogger").logClipsTabOpen({
                      pageID: f.id,
                      userID: g == null ? void 0 : g.id,
                    });
                },
                renderLabel: d("PolarisProfileTabClips.react")
                  .ProfileTabClipsLabel,
                tabId: d("PolarisProfileTabClips.react").CLIPS_TAB_ID,
              },
              content: function () {
                return k.jsx(
                  d("PolarisProfileTabClips.react").ProfileTabClips,
                  { user: f }
                );
              },
            };
      };
      f.$56 = function () {
        return null;
      };
      f.$57 = function () {
        var a = this,
          b = this.$6();
        if (!b) return null;
        b = this.props;
        var e = b.profileTrackingData,
          f = b.user;
        b = b.viewer;
        var g = c("nullthrows")(f.username);
        return {
          navigation: {
            href: d("PolarisProfileUtils").getTabbedComponentLink(
              this.state.canSeePersistentCta,
              e,
              d("PolarisLinkBuilder").buildUserPathLink(g, "saved")
            ),
            onClick: b == null ? void 0 : this.$45,
            renderLabel: d("PolarisProfileTabSaved.react").ProfileTabSavedLabel,
            tabId: d("PolarisProfileTabSaved.react").SAVED_TAB_ID,
          },
          content: function () {
            return k.jsx(d("PolarisProfileTabSaved.react").ProfileTabSaved, {
              mediaLinkBuilder: a.$14,
              onPostImpression: a.$24,
              user: f,
              viewportWidth: a.props.viewportWidth,
            });
          },
        };
      };
      f.$58 = function () {
        var a = this,
          e = this.props,
          f = e.posts,
          g = e.profileTrackingData,
          h = e.user;
        e = e.viewer;
        if (!d("PolarisUA").isMobile() || b("cr:2082") == null) return null;
        if (!this.$6() && f.length === 0) return null;
        var i = b("cr:2082").ProfileTabFeed;
        f = b("cr:2082").ProfileTabFeedLabel;
        var j = b("cr:2082").feedHref,
          m = c("nullthrows")(h.username);
        j =
          e != null
            ? j(m)
            : d("PolarisLinkBuilder").buildLoginLink(j(m), {
                source: "profile_feed_tab",
              });
        return {
          navigation: {
            href: d("PolarisProfileUtils").getTabbedComponentLink(
              this.state.canSeePersistentCta,
              g,
              j
            ),
            onClick: e == null ? this.$50("profile_feed_tab") : this.$43,
            renderLabel: f,
            tabId: d("PolarisProfileTabFeedConstants").FEED_TAB_ID,
          },
          content: function () {
            return k.jsx(i, {
              analyticsContext: l,
              renderEmptyProfile: k.jsx(
                c("PolarisNewUserActivatorsUnit.react"),
                {
                  className: "_aa_x",
                  fallbackComponent: k.jsx(
                    c("PolarisProfileEmptyState.react"),
                    {
                      buttonClick: a.$23,
                      iconClick: a.$23,
                      type: d("PolarisProfileEmptyStateTypes")
                        .PROFILE_EMPTY_STATE_KEYS.PHOTOS,
                    }
                  ),
                  module: d("PolarisNewUserActivatorsUnitTypes").MODULES
                    .profile,
                  onFirstPhotoUpload: a.$23,
                }
              ),
              user: h,
              viewportWidth: a.props.viewportWidth,
            });
          },
        };
      };
      f.$59 = function () {
        var a = this;
        if (this.$10()) return null;
        var b = this.props,
          e = b.profileTrackingData,
          f = b.taggedPosts,
          g = b.user;
        b = b.viewer;
        var h = c("nullthrows")(g.username);
        h =
          b != null
            ? d("PolarisProfileTabTaggedPhotos.react").taggedHref(h)
            : d("PolarisLinkBuilder").buildLoginLink(
                d("PolarisProfileTabTaggedPhotos.react").taggedHref(h),
                { source: "profile_tagged_tab" }
              );
        return {
          navigation: {
            href: d("PolarisProfileUtils").getTabbedComponentLink(
              this.state.canSeePersistentCta,
              e,
              h
            ),
            onClick: b == null ? this.$50("profile_tagged_tab") : this.$46,
            renderLabel: d("PolarisProfileTabTaggedPhotos.react")
              .ProfileTabTaggedLabel,
            tabId: d("PolarisProfileTabTaggedPhotosConstants").TAGGED_TAB_ID,
          },
          content: function () {
            return k.jsx(
              d("PolarisProfileTabTaggedPhotos.react").ProfileTabTaggedPhotos,
              {
                isOwnProfile: a.$6(),
                mediaLinkBuilder: a.$14,
                onPostImpression: a.$24,
                photoComponentRenderer: a.$8(f),
                user: g,
              }
            );
          },
        };
      };
      f.$60 = function () {
        return k.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          direction: "row",
          display: "flex",
          marginBottom: 5,
          marginStart: 5,
          marginTop: 6,
          position: "relative",
          children: [
            k.jsx(c("IGDSLockOutline96Icon"), { alt: q, size: 44 }),
            k.jsxs(c("IGDSBox.react"), {
              alignSelf: "stretch",
              justifyContent: "center",
              marginStart: 3,
              position: "relative",
              width: 250,
              children: [
                k.jsx(c("IGDSBox.react"), {
                  marginBottom: 2,
                  position: "relative",
                  children: k.jsx(c("IGDSText.react").BodyEmphasized, {
                    children: q,
                  }),
                }),
                k.jsx(c("IGDSText.react").Body, {
                  color: "secondaryText",
                  children: t(this.props.user.username),
                }),
              ],
            }),
          ],
        });
      };
      f.render = function () {
        var a = this,
          e = this.props,
          f = e.isLive,
          g = e.posts,
          h = e.profileTrackingData,
          i = e.selectedTabId;
        e = e.user;
        g = g.length > 0;
        var j = c("nullthrows")(this.props.user.username),
          n = this.isSmallScreen(),
          q = this.$5(),
          r = this.$3(j),
          s = h == null ? void 0 : h.a_mpk;
        h = h == null ? void 0 : h.a_tt;
        var t = this.context.navigationPosition === "bottom",
          u = d("PolarisProfileQEHelpers").hasSmallerSUCardsOnDesktop();
        u = k.jsx(
          d("PolarisProfilePageContext").PolarisProfilePageContext.Provider,
          {
            value: r,
            children: k.jsxs("div", {
              className:
                "_aa_y" +
                (d("PolarisUA").isDesktop() ? " _aa_z" : "") +
                (this.props.chainingSuggestions != null &&
                this.props.chainingSuggestions.length > 0
                  ? " _aa_-"
                  : ""),
              children: [
                k.jsx(c("PolarisPageMetadata.react"), {
                  base: "",
                  id: l,
                  title: c("polarisGetTitleForProfile")(this.props.user),
                }),
                !d("PolarisUA").isIGWebview() &&
                  k.jsx(c("PolarisQPManager.react"), {
                    slot: this.$6()
                      ? d("PolarisQPConstants").SLOTS.own_profile
                      : d("PolarisQPConstants").SLOTS.other_profile,
                  }),
                k.jsx(c("PolarisProfilePageHeader.react"), {
                  canSeeFollowList: this.props.canSeeFollowList || !1,
                  handleAboutThisAccountClick: function (b) {
                    return a.$36(b);
                  },
                  handleMultipleLinksClick: this.$28,
                  handleOptionsClick: function () {
                    return a.$25();
                  },
                  handleUnrestrictUserClick: function (b) {
                    return a.$34(b);
                  },
                  hasPosts: g,
                  isLive: f,
                  isPrivateProfile: function () {
                    return a.$10();
                  },
                  isRestrictedByViewer: this.props.isRestrictedByViewer,
                  isSmallScreen: n,
                  isUploadingProfilePic: this.props.isUploadingProfilePic,
                  isViewingOwnProfile: function () {
                    return a.$6();
                  },
                  pixelRatio: this.props.pixelRatio,
                  renderProfileActionButtons: function () {
                    return k.jsx(c("PolarisProfileActionButtons.react"), {
                      chainingExpanded: a.state.chainingExpanded,
                      chainingFailed: a.props.chainingFailed,
                      chainingInteracted: a.state.chainingInteracted,
                      chainingSuggestions: a.props.chainingSuggestions,
                      countryBlock: a.props.user.countryBlock,
                      handleChainingCollapse: a.$19,
                      handleChainingExpand: a.$18,
                      handleProfileEditClick: a.$41,
                      handleRestrictClick: a.$30,
                      handleUnrestrictClick: function () {
                        return a.$33("unrestrict_option");
                      },
                      isFollowing: a.props.isFollowing,
                      isFromFollow: a.props.isFromFollow,
                      isPrivateProfile: function () {
                        return a.$10();
                      },
                      isSmallScreen: a.isSmallScreen(),
                      sessionId: a.props.sessionId,
                      user: a.props.user,
                      viewer: a.props.viewer,
                    });
                  },
                  selectedTabId: i,
                  user: e,
                  viewer: this.props.viewer,
                }),
                !n &&
                  q &&
                  k.jsx(c("PolarisErrorBoundary.react"), {
                    children: k.jsx(
                      c("PolarisProfileStoryHighlightsTray.react"),
                      {
                        isSmallScreen: n,
                        user: this.props.user,
                        userId: this.props.user.id,
                        viewer: this.props.viewer,
                      }
                    ),
                  }),
                this.state.chainingExpanded &&
                  k.jsx(c("PolarisFollowChainingList.react"), {
                    analyticsContext: d("PolarisConnectionsLogger")
                      .CONNECTIONS_CONTAINER_MODULES.profile,
                    chainingFailed: Boolean(
                      this.props.chainingFailed ||
                        (this.props.chainingSuggestions &&
                          this.props.chainingSuggestions.length === 0)
                    ),
                    chainingSuggestions:
                      (r = this.props.chainingSuggestions) == null
                        ? void 0
                        : r.map(function (a) {
                            return {
                              fullName: a.fullName,
                              id: a.id,
                              isVerified: a.isVerified,
                              profilePictureUrl: a.profilePictureUrl,
                              suggestionDescription: a.suggestionDescription,
                              username: a.username,
                            };
                          }),
                    className:
                      (u ? "" : "_aa__") +
                      (u ? " _alvo" : "") +
                      (d("PolarisUA").isMobile() ? " _ab00" : ""),
                    clickPoint: "similar_users_chaining_unit",
                    impressionModule: d("PolarisConnectionsLogger").VIEW_MODULES
                      .web_profile_chaining,
                    isSmallScreen: n,
                    onRetryClicked: this.$20,
                    onSeeAllClicked: this.$12,
                    onSuggestionDismissed: this.$21,
                    seeAllHref:
                      d("PolarisLinkBuilder").buildUserSimilarAccountsLink(j),
                    title: p,
                  }),
                n &&
                  k.jsx(c("PolarisProfilePageBiography.react"), {
                    handleMultipleLinksClick: this.$28,
                    handleUnrestrictUserClick: this.$34,
                    hasPosts: g,
                    isRestrictedByViewer: this.props.isRestrictedByViewer,
                    isSmallScreen: n,
                    isViewingOwnProfile: this.$6(),
                    user: e,
                  }),
                n &&
                  q &&
                  k.jsx(c("PolarisErrorBoundary.react"), {
                    children: k.jsx(
                      c("PolarisProfileStoryHighlightsTray.react"),
                      {
                        isSmallScreen: n,
                        user: this.props.user,
                        userId: this.props.user.id,
                        viewer: this.props.viewer,
                      }
                    ),
                  }),
                n &&
                  k.jsx(c("PolarisErrorBoundary.react"), {
                    errorRenderer: function () {
                      return null;
                    },
                    children: k.jsx(c("PolarisProfileStatistics.react"), {
                      canSeeFollowList: this.props.canSeeFollowList || !1,
                      counts: c("nullthrows")(this.props.user.counts),
                      groupMetadata: this.props.user.groupMetadata,
                      isLoggedIn: !!this.props.viewer,
                      isSmallScreen: n,
                      isViewingOwnProfile: this.$6(),
                      selectedTabId: i,
                      username: j,
                    }),
                  }),
                this.state.showOptionsModal
                  ? k.jsx(c("CometRelayEnvironmentProvider"), {
                      children: k.jsx(c("CometPlaceholder.react"), {
                        fallback: k.jsx(c("PolarisLoadingModal.react"), {}),
                        children: k.jsx(
                          c("PolarisProfileOptionsModalContainer.react"),
                          {
                            isProfessionalAccount:
                              ((f = this.props.viewer) == null
                                ? void 0
                                : f.isProfessionalAccount) || !1,
                            isSupervisionEnabled:
                              ((r = this.props.viewer) == null
                                ? void 0
                                : r.isSupervisionEnabled) || !1,
                            onAboutThisAccountClick: function () {
                              a.$36(
                                c("AboutThisAccountRefererTypes").PROFILE_MORE
                              );
                            },
                            onClose: this.$26,
                            onEmbedClick: this.$35,
                            onLogoutUserClick: this.$39,
                            onReportIssueClick: function () {
                              return a.setState({ showOptionsModal: !1 });
                            },
                            onReportUserClick: this.$27,
                            onRestrictUserClick: this.$31,
                            onUnrestrictUserClick: function () {
                              a.$34("unrestrict_option");
                            },
                            user: e,
                          }
                        ),
                      }),
                    })
                  : null,
                this.state.showLoggingOutDialog &&
                  k.jsx(c("PolarisLoggingOutDialog.react"), {}),
                this.state.showEmbedModal &&
                  k.jsx(c("PolarisEmbedModal.react"), {
                    analyticsContext: "profilePage",
                    onClose: function () {
                      a.setState({ showEmbedModal: !1 });
                    },
                    ownerId: e.id,
                    productType: "profile",
                    username: j,
                  }),
                this.state.showAboutThisAccountModal &&
                  k.jsx(c("CometPlaceholder.react"), {
                    fallback: k.jsx(c("IGCoreModal"), {
                      backdropColor: "dark",
                      children: k.jsx(c("IGDSBox.react"), {
                        alignItems: "center",
                        height: 112,
                        justifyContent: "center",
                        position: "relative",
                        width: "100%",
                        children: k.jsx(c("IGDSSpinner.react"), {
                          size: "medium",
                        }),
                      }),
                    }),
                    children: k.jsx(m, {
                      onClose: function () {
                        a.setState({ showAboutThisAccountModal: !1 });
                      },
                      referer_type: this.state.aboutThisAccountRefererType,
                      user: e,
                    }),
                  }),
                this.state.toastContentOnLoad != null &&
                  this.state.toastContentOnLoad !== "" &&
                  k.jsx(c("PolarisIGCoreToast"), {
                    duration: o,
                    onClose: function () {
                      return a.setState({ toastContentOnLoad: null });
                    },
                    children: this.state.toastContentOnLoad,
                  }),
                k.jsx(y, {
                  onFRXModalClose: function () {
                    return a.setState({ showFRXReportingModal: !1 });
                  },
                  parentProps: this.props,
                  parentState: this.state,
                }),
                this.props.followTypeToShowInModal
                  ? k.jsx(c("PolarisAsyncFollowListModal"), {
                      connectionListType: this.props.followTypeToShowInModal,
                      onClose: this.$15,
                      userId: this.props.user.id,
                    })
                  : null,
                this.state.showSimilarAccountsModal
                  ? k.jsx(c("PolarisAsyncSimilarAccountsModal"), {
                      entryPath: this.state.modalEntryPath,
                      onClose: this.$16,
                      pageId: "similarAccounts",
                      user: e,
                    })
                  : null,
                this.state.showMultipleLinksModal
                  ? k.jsx(c("PolarisProfilePageMultipleLinksModal.react"), {
                      authorID: Number(e.id),
                      bioLinks: e.bioLinks,
                      onClose: this.$29,
                      pageID: "profilePage",
                    })
                  : null,
                this.state.showRelatedProfilesModal
                  ? k.jsx(c("PolarisAsyncSimilarAccountsModal"), {
                      entryPath: this.state.modalEntryPath,
                      onClose: this.$17,
                      pageId: "relatedProfiles",
                      user: e,
                    })
                  : null,
                this.props.showLoggedOutLoginModal && b("cr:4150") != null
                  ? k.jsx(b("cr:4150"), {
                      dialogSource: d("CAAWebClientLoggingEventSource")
                        .CAAWebClientLoggingDialogSource.PROFILE,
                      triggeringPageType: "profile",
                      triggeringUser: e,
                    })
                  : null,
                this.state.showRestrictSheetOrModal &&
                  k.jsx(c("PolarisRestrictInfoSheetOrModal.react"), {
                    onClose: this.$32,
                    targetUserId: e.id,
                    targetUsername: j,
                  }),
                this.state.showQRModal &&
                  k.jsx(c("PolarisAsyncEntityQRModal"), {
                    entityID: e.id,
                    onClose: function () {
                      return a.setState({ showQRModal: !1 });
                    },
                    source: "DIRECT_NAVIGATION",
                  }),
                this.props.showProDashDialog &&
                  k.jsx(c("UpsellProDashDialogScreen.react"), {}),
                k.jsx(c("PolarisTabbedContent.react"), {
                  hasNoPosts: !g,
                  isSmallScreen: n,
                  selectedTabId: i,
                  showSelectedTabIndicator: d("PolarisUA").isDesktop(),
                  tabBarPosition: "top",
                  tabs: [
                    this.$51(),
                    this.$58(),
                    this.$55(),
                    this.$53(),
                    this.$56(),
                    this.$57(),
                    this.$59(),
                  ].filter(Boolean),
                }),
              ],
            }),
          }
        );
        q = t
          ? c("PolarisMobileSponsoredPersistentCTA.react")
          : d("PolarisDesktopSponsoredPersistentCTA.react")
              .PolarisDesktopSponsoredPersistentCTA;
        return k.jsx(
          d("useGetStableCometRouterDispatcher")
            .CometRouterDispatcherGetterContextProvider,
          {
            children: k.jsx(c("PolarisTrackingNodeProvider.react"), {
              trackingNode: 335,
              children: k.jsx("div", {
                children: k.jsx(c("PolarisShell.react"), {
                  floatingCtaButton:
                    this.state.canSeePersistentCta === !0 &&
                    h != null &&
                    s != null
                      ? k.jsx(q, {
                          ctaAdditionalAnimation: d("PolarisUA").isDesktop()
                            ? d("PolarisPostUtils").PostFooterCTAAnimationStyle
                                .POP_IN
                            : d("PolarisPostUtils").PostFooterCTAAnimationStyle
                                .NONE,
                          mpk: s,
                          trackingToken: h,
                        })
                      : null,
                  maxWidth: d("PolarisSizing").SITE_WIDTHS.wide,
                  mobileHeader: k.jsx(
                    c("PolarisProfilePageMobileHeader.react"),
                    {
                      isViewingOwnProfile: this.$6(),
                      onOpenMobileNavMenu: this.props.onOpenMobileNavMenu,
                      pageIdentifier: l,
                      username: this.$13(),
                    }
                  ),
                  pageIdentifier: l,
                  showSuggestedProfiles: this.props.showSuggestedProfiles,
                  targetUsername: j,
                  children: u,
                }),
              }),
            }),
          }
        );
      };
      return e;
    })(k.Component);
    e.contextType = c("PolarisNavigationLayoutContext");
    function y(a) {
      var b = a.onFRXModalClose,
        e = a.parentProps;
      a = a.parentState;
      e = e.user;
      a = a.showFRXReportingModal;
      return a
        ? k.jsx(c("CometPlaceholder.react"), {
            fallback: k.jsx(c("IGCoreModal"), {
              backdropColor: "dark",
              children: k.jsx(c("IGDSBox.react"), {
                alignItems: "center",
                height: 200,
                justifyContent: "center",
                position: "relative",
                width: "100%",
                children: k.jsx(c("IGDSSpinner.react"), { size: "medium" }),
              }),
            }),
            children: k.jsx(n, {
              frxLocation: d("PolarisReportConstants").FRXLocation.PROFILE,
              frxObjectType: d("PolarisReportConstants").FRXObjectType.USER,
              onClose: function () {
                return b();
              },
              reportedObjectID: e.id,
              reportedOwner: {
                id: e.id,
                username: e.username,
                profilePicURL: e.profilePictureUrl,
              },
            }),
          })
        : null;
    }
    y.displayName = y.name + " [from " + f.id + "]";
    h = c("polarisWithCreationStarter")(d("IGRouter").withIGRouter(e));
    g["default"] = h;
  },
  98
);
__d(
  "PolarisDirectActionUnrestrictDirectUser",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b) {
        return b({ type: "DIRECT_UNRESTRICT_USER", userId: a });
      };
    }
    f.unrestrictDirectUser = a;
  },
  66
);
__d(
  "PolarisRelationshipActionUnrestrictUser",
  [
    "fbt",
    "PolarisDirectActionUnrestrictDirectUser",
    "PolarisGenericStrings",
    "PolarisSharedAPI",
    "PolarisToastActions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      return function (b, c) {
        b({ type: "UNRESTRICT_USER", targetUserId: a });
        return d("PolarisSharedAPI")
          .unrestrictUser(a)
          .then(
            function (c) {
              b({ type: "UNRESTRICT_USER_SUCCEEDED", targetUserId: a }),
                b(
                  d(
                    "PolarisDirectActionUnrestrictDirectUser"
                  ).unrestrictDirectUser(a)
                ),
                b(
                  d("PolarisToastActions").showToast({
                    text: h._("Account Unrestricted"),
                  })
                );
            },
            function (c) {
              b({ type: "UNRESTRICT_USER_FAILED", targetUserId: a }),
                b(
                  d("PolarisToastActions").showToast({
                    text: d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE,
                  })
                );
            }
          );
      };
    }
    g.unrestrictUser = a;
  },
  98
);
__d(
  "PolarisTrendingUserSelectors",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.trendingUser.trendingAccountSuggestions;
    }
    f.getTrendingUserSuggestions = a;
  },
  66
);
__d(
  "PolarisAPIDismissChainingSuggestion",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = { target_id: a, chaining_user_id: b };
      return d("PolarisInstapi").apiPost(
        "/api/v1/web/discover/chaining_dismiss/",
        { body: a }
      );
    }
    g.dismissChainingSuggestion = a;
  },
  98
);
__d(
  "PolarisUserActionDismissProfileChainingSuggestion",
  ["PolarisAPIDismissChainingSuggestion"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return function (c) {
        c({
          type: "PROFILE_CHAINING_DISMISSED_SUGGESTION",
          targetId: a,
          dismissedId: b,
        });
        return d(
          "PolarisAPIDismissChainingSuggestion"
        ).dismissChainingSuggestion(a, b);
      };
    }
    g.dismissProfileChainingSuggestion = a;
  },
  98
);
__d(
  "PolarisUserActionDismissTrendingAccountSuggestion",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return function (c) {
        c({
          type: "TRENDING_USER_SUGGESTION_DISMISSED",
          targetId: a,
          dismissedId: b,
        });
      };
    }
    f.dismissTrendingAccountSuggestion = a;
  },
  66
);
__d(
  "PolarisProfilePageContainer.react",
  [
    "PolarisConfig",
    "PolarisLinkBuilder",
    "PolarisLiveGating",
    "PolarisLoggedOutLoginConstants",
    "PolarisLogoutActions",
    "PolarisMediaImpressionsLogger",
    "PolarisNavigationActions",
    "PolarisPaginationUtils",
    "PolarisPhoneConfirmActions",
    "PolarisProfilePage.react",
    "PolarisProfilePostsActionConstants",
    "PolarisProfilePostsActions",
    "PolarisProfilePostsSelectors",
    "PolarisProfileQEHelpers",
    "PolarisQueryParams",
    "PolarisReactRedux",
    "PolarisRelationshipActionUnrestrictUser",
    "PolarisStoryActions",
    "PolarisTaggedPostsSelectors",
    "PolarisTrendingUserSelectors",
    "PolarisUA",
    "PolarisUserActionDismissProfileChainingSuggestion",
    "PolarisUserActionDismissRelatedProfileSuggestion",
    "PolarisUserActionDismissTrendingAccountSuggestion",
    "filterNulls",
    "gkx",
    "polarisLiveSelectors",
    "polarisNavigationSelectors",
    "polarisRelatedProfileSelectors",
    "polarisRelationshipSelectors",
    "polarisStorySelectors",
    "polarisSuggestedUserSelectors",
    "polarisUserSelectors",
    "polarisWebReportSelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a, b) {
      var e,
        f = a.displayProperties,
        g = a.navigation,
        h = a.relationships,
        i = a.users;
      b = b.userId;
      var j = d("polarisUserSelectors").getViewer(a),
        k = d("polarisRelationshipSelectors").getRelationship(h, b),
        l = d("polarisUserSelectors").getUserById(a, b);
      h = d("polarisRelationshipSelectors").canViewerSeeFollowList(h, j, l);
      var m =
          d("polarisLiveSelectors").isLive(a, b) &&
          d("PolarisLiveGating").hasLiveOnProfile(),
        n = d("PolarisProfilePostsSelectors").getVisiblePostIdsForUserId(a, b);
      n = c("filterNulls")(
        n.map(function (b) {
          return a.posts.byId.get(b);
        })
      );
      var o = d("PolarisTaggedPostsSelectors").getVisiblePostsUserTagged(a, b),
        p = d("polarisUserSelectors").getUsersByIds(
          a,
          d("polarisSuggestedUserSelectors").getProfileChainingSuggestions(a, b)
        ),
        q = j != null,
        r = d("polarisUserSelectors").getUsersByIds(
          a,
          d("polarisRelatedProfileSelectors").getRelatedProfileSuggestions(a, b)
        ),
        s = d("PolarisProfilePostsSelectors").getPaginationForUserId(a, b),
        t = a.stories.archiveReelsInfo;
      e =
        ((e =
          (e = a.stories.archiveReelsInfo) == null
            ? void 0
            : (e = e.reels) == null
            ? void 0
            : e.size) != null
          ? e
          : 0) > 0;
      var u = d("polarisNavigationSelectors").getDeepLink__DEPRECATED(a),
        v = u.android,
        w = u.ios;
      u = u.originalPath;
      var x = d("PolarisTrendingUserSelectors").getTrendingUserSuggestions(a);
      return {
        android: v,
        archiveReelsInfo: t,
        canSeeFollowList: h,
        chainingFailed: d(
          "polarisSuggestedUserSelectors"
        ).getProfileChainingFailure(a, b),
        chainingSuggestions: p,
        highlightReelCount: l.highlightReelCount,
        hasReel: d("polarisStorySelectors").userHasReel(a, b),
        isLive: m,
        hasArchiveStories: (j == null ? void 0 : j.id) === b && e,
        hasLoadedHighlightReels: !!a.stories.highlightReelsByUserId.get(b),
        ios: w,
        isFetching: d("PolarisPaginationUtils").isFetching(s),
        isFollowing: d("polarisRelationshipSelectors").followedByViewer(k),
        isFromFollow:
          !!j && d("PolarisQueryParams").isFromLoginWithFollowParam(),
        isRestrictedByViewer: d(
          "polarisRelationshipSelectors"
        ).isRestrictedByViewer(k),
        isOldestPostLoaded: !d("PolarisPaginationUtils").hasNextPage(s),
        isUploadingProfilePic: !!(
          j &&
          j.id === b &&
          i.profilePicUploadIsInFlight
        ),
        maxPostsToDisplay: d("PolarisPaginationUtils").getVisibleCount(s),
        originalPath: u,
        pixelRatio: f.pixelRatio,
        posts: n,
        relatedProfiles: r,
        scrollLoadingEnabled: q ? !0 : n.length > 12,
        showLoggedOutLoginModal: g.isLoginModalOpen,
        taggedPosts: o,
        user: l,
        userReportMode: d("polarisWebReportSelectors").getUserReportMode(a),
        viewer: j,
        viewportWidth: f.viewportWidth,
        pageViewCount: (g == null ? void 0 : g.pageViewCount) || 1,
        trendingAccounts: x,
      };
    }
    function b(a) {
      return {
        onLoadArchiveStories: function () {
          return a(d("PolarisStoryActions").requestArchivedStories());
        },
        onLoadExtras: function (b, c) {
          return a(d("PolarisProfilePostsActions").loadProfilePageExtras(b, c));
        },
        onChainingRetry: function (b) {
          return a(
            d("PolarisProfilePostsActions").loadProfilePageExtras(b, {
              chaining: !0,
            })
          );
        },
        onLoggedOutIntentClick: function (b, c) {
          a(d("PolarisNavigationActions").openLoggedOutIntentDialog(b, c));
          return;
        },
        onLoggedOutIntentClickLoginModal: function (b, c, e, f) {
          var g =
            d("PolarisUA").isDesktop() || d("PolarisConfig").isNetzDGEligible()
              ? "feature_wall"
              : "content_wall";
          a(d("PolarisNavigationActions").openLoginModal(g, b, c, e, !0, f));
          return;
        },
        onLogout: function (b, c) {
          a(d("PolarisLogoutActions").logout({ viewerId: b, source: c }));
          return;
        },
        onRequestNextProfilePosts: function (b) {
          return a(
            (
              d("PolarisConfig").isLoggedIn()
                ? d("PolarisProfileQEHelpers").hasNativePostsOnProfile()
                : c("qex")._("365") === !0
            )
              ? d("PolarisProfilePostsActions").requestProfilePostsV2(
                  b,
                  void 0,
                  d("PolarisProfilePostsActionConstants").PAGE_SIZE
                )
              : d("PolarisProfilePostsActions").requestNextProfilePosts(b)
          );
        },
        onRequestProfilePosts: function (b) {
          return a(
            (
              d("PolarisConfig").isLoggedIn()
                ? d("PolarisProfileQEHelpers").hasNativePostsOnProfile()
                : c("qex")._("365") === !0
            )
              ? d("PolarisProfilePostsActions").requestProfilePostsV2(
                  b,
                  void 0,
                  d("PolarisProfilePostsActionConstants").PAGE_SIZE
                )
              : d("PolarisProfilePostsActions").requestProfilePosts(b)
          );
        },
        onDismissProfileChainingSuggestion: function (b, c) {
          return a(
            d(
              "PolarisUserActionDismissProfileChainingSuggestion"
            ).dismissProfileChainingSuggestion(b, c)
          );
        },
        onOpenMobileNavMenu: function () {
          a(d("PolarisNavigationActions").openMobileNavMenu());
          return;
        },
        onConfirmPhoneNumber: function (b) {
          a(d("PolarisPhoneConfirmActions").initiateConfirmationPage(b));
          return;
        },
        onPostImpression: function (b, e, f, g) {
          if (
            !e &&
            !c("gkx")("4815") &&
            !d("PolarisConfig").isAllowlistedCrawlBot()
          ) {
            e = c("gkx")("4816")
              ? d("PolarisLoggedOutLoginConstants")
                  .LOGGED_OUT_JP_POST_IMPRESSION_LIMIT
              : d("PolarisLoggedOutLoginConstants")
                  .LOGGED_OUT_POST_IMPRESSION_LIMIT;
            var h = d("PolarisConfig").isNetzDGEligible()
              ? "feature_wall"
              : "content_wall";
            g > e &&
              a(
                d("PolarisNavigationActions").openLoginModal(
                  h,
                  d("PolarisLinkBuilder").buildUserLink(f),
                  "profile_posts_impression_limit",
                  null,
                  !0,
                  b.id
                )
              );
          }
          d("PolarisMediaImpressionsLogger").logImpressionForPost(b, "profile");
          return;
        },
        onPageView: function (b, c, e) {
          return a(
            d("PolarisNavigationActions").incrementNewPageViewCount(
              b,
              "profile",
              c,
              e
            )
          );
        },
        onDismissRelatedProfileSuggestion: function (b, c) {
          return a(
            d(
              "PolarisUserActionDismissRelatedProfileSuggestion"
            ).dismissRelatedProfileSuggestion(b, c)
          );
        },
        onUnrestrictUserClick: function (b) {
          return a(
            d("PolarisRelationshipActionUnrestrictUser").unrestrictUser(b)
          );
        },
        openFeedCreationModal: function () {
          a(d("PolarisNavigationActions").openFeedCreationModal());
        },
        onDismissTrendingAccountSuggestion: function (b, c) {
          a(
            d(
              "PolarisUserActionDismissTrendingAccountSuggestion"
            ).dismissTrendingAccountSuggestion(b, c)
          );
        },
      };
    }
    e = d("PolarisReactRedux").connect(a, b)(c("PolarisProfilePage.react"));
    g["default"] = e;
  },
  98
);
__d(
  "PolarisHashtagFollowListActions",
  ["PolarisAPIQuery", "nullthrows", "polarisUnexpected"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "e6306cc3dbe69d6a82ef8b5f8654c50b";
    function a(a) {
      return function (b, e) {
        b({ type: "HASHTAG_FOLLOW_LIST_REQUESTED", userId: a });
        return d("PolarisAPIQuery")
          .query(h, { id: a })
          .then(
            function (d) {
              d = d.data;
              d = c("nullthrows")(d.user);
              d = c("nullthrows")(d.edge_following_hashtag).edges.map(function (
                a
              ) {
                return a.node;
              });
              b({ type: "HASHTAG_FOLLOW_LIST_SUCCEED", userId: a, tagList: d });
            },
            function (d) {
              b({ type: "HASHTAG_FOLLOW_LIST_FAILED", userId: a }),
                c("polarisUnexpected")(d);
            }
          );
      };
    }
    g.getHashtagFollowList = a;
  },
  98
);
__d(
  "PolarisUserActionLoadProfilePage",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return { type: "PROFILE_PAGE_LOADED", user: c("nullthrows")(a.user) };
    }
    g.loadProfilePage = a;
  },
  98
);
__d(
  "PolarisUserActionLoadProfilePageChannelTab",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        type: "PROFILE_PAGE_CHANNEL_TAB_LOADED",
        user: c("nullthrows")(a.user),
      };
    }
    g.loadProfilePageChannelTab = a;
  },
  98
);
__d(
  "PolarisUserActionLoadProfilePageSavedTab",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        type: "PROFILE_PAGE_SAVED_TAB_LOADED",
        user: c("nullthrows")(a.user),
      };
    }
    g.loadProfilePageSavedTab = a;
  },
  98
);
__d(
  "PolarisUserActionLoadTrendingAccounts",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return { type: "TRENDING_USERS_LOADED", users: a };
    }
    f.loadTrendingAccounts = a;
  },
  66
);
__d(
  "PolarisProfileActions",
  [
    "PolarisConfig",
    "PolarisLiveActions",
    "PolarisLoadLoggedOutProfilePageExtras",
    "PolarisLoggedOutLoginConstants",
    "PolarisLogger",
    "PolarisODS",
    "PolarisProfilePostsActions",
    "PolarisProfileQEHelpers",
    "PolarisReelModel",
    "PolarisUA",
    "PolarisUserActionLoadProfilePage",
    "PolarisUserActionLoadProfilePageChannelTab",
    "PolarisUserActionLoadProfilePageSavedTab",
    "PolarisUserActionLoadTrendingAccounts",
    "PolarisUserModel",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
    "polarisGetUserFromUserDict",
    "polarisNormalizeLiveBroadcasts",
    "polarisUserSelectors",
    "qex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
      return function (b, c) {
        var e = a.data;
        if ((e == null ? void 0 : e.user) != null) {
          b(d("PolarisUserActionLoadProfilePage").loadProfilePage(e));
          c = d("polarisUserSelectors").getViewer(c());
          (c == null ? void 0 : c.id) === e.user.id &&
            (b(
              d(
                "PolarisUserActionLoadProfilePageSavedTab"
              ).loadProfilePageSavedTab(e)
            ),
            b(
              d(
                "PolarisUserActionLoadProfilePageChannelTab"
              ).loadProfilePageChannelTab(e)
            ));
        }
      };
    };
    e = function (a) {
      return function (b) {
        var c = d("PolarisProfileQEHelpers").hasNativePostsOnProfile();
        if (c) {
          c = a.user ? String(a.user.pk) : null;
          b(
            d("PolarisProfilePostsActions").handleProfilePostsAPIResponse(a, c)
          );
        }
      };
    };
    f = function (a) {
      return function (b) {
        var e = a;
        e = c("polarisNormalizeLiveBroadcasts")([e]);
        e = e.entities.users;
        b(d("PolarisLiveActions").liveUsersLoaded(e));
      };
    };
    var h = function (a) {
        return function (b) {
          if (a.recommended_accounts != null) {
            var e = [].concat(a.recommended_accounts);
            e = e.map(function (a) {
              return c("polarisGetUserFromUserDict")(a);
            });
            b(
              d("PolarisUserActionLoadTrendingAccounts").loadTrendingAccounts(e)
            );
          }
        };
      },
      i = function (a) {
        var e = a.data;
        return (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
            a,
            b
          ) {
            var f;
            if (
              c("justknobx")._("1095") &&
              (e == null ? void 0 : e.user) == null
            )
              return;
            var g = d(
              "PolarisProfilePostsActions"
            ).getProfileExtrasConfiguration({ fetchHighlightReels: !0 });
            b = b();
            var h = c("nullthrows")(e == null ? void 0 : e.user);
            f = c("nullthrows")((f = h.reel) == null ? void 0 : f.id);
            a({
              type: "PROFILE_PAGE_EXTRAS_REQUESTED",
              userId: f,
              configuration: g,
            });
            var i = null;
            g.chaining &&
              (d("PolarisLogger").logAction("profileChainingQuerySuccess"),
              c("PolarisODS").incr("web.profile.chaining_query.success"),
              (i = c("nullthrows")(h.edge_chaining).edges.map(function (a) {
                return c("PolarisUserModel")
                  .fromGraphResponse(a.node)
                  .toReduxStore();
              })));
            var j = null;
            g.fetchUserExtras &&
              (j = c("nullthrows")(babelHelpers["extends"]({ id: f }, h)));
            var k = [];
            if (g.fetchHighlightReels) {
              k = c("nullthrows")(h.edge_highlight_reels)
                .edges.map(function (a) {
                  return c("PolarisReelModel")
                    .fromGraphResponse(a.node)
                    .toReduxStore();
                })
                .filter(function (a) {
                  return a.thumbnailUrl != null;
                });
              if (!d("PolarisConfig").isLoggedIn() && k.length >= 0) {
                b =
                  (b = b.users.users.get(f)) == null
                    ? void 0
                    : (b = b.counts) == null
                    ? void 0
                    : b.followedBy;
                if (
                  d("PolarisUA").isMobile() &&
                  b != null &&
                  b >=
                    d("PolarisLoggedOutLoginConstants")
                      .MIN_FOLLOWERS_LOGGED_OUT_HIGHLIGHTS &&
                  c("qex")._("239") === !0
                ) {
                  b = yield d(
                    "PolarisLoadLoggedOutProfilePageExtras"
                  ).getFitGreenReels(k);
                  k = d(
                    "PolarisLoadLoggedOutProfilePageExtras"
                  ).getHighlightReelsForLoggedOut(k, b);
                  c("qex")._("862") === 2 &&
                    a({
                      type: "STORY_HIGHLIGHT_FIT_GREEN",
                      fitGreenHighlights: Object.keys(b),
                    });
                }
              }
              j = babelHelpers["extends"]({ id: f }, j, {
                highlight_reel_count: k.length,
              });
            }
            b = h.reel
              ? c("PolarisReelModel").fromGraphResponse(h.reel).toReduxStore()
              : null;
            j = j
              ? c("PolarisUserModel").fromGraphResponse(j).toReduxStore()
              : null;
            a({
              type: "PROFILE_PAGE_EXTRAS_LOADED",
              userId: f,
              configuration: g,
              highlightReels: k,
              isLive: h.is_live === !0,
              reel: b,
              chainingUsers: i,
              updatedUser: j,
            });
          });
          return function (b, c) {
            return a.apply(this, arguments);
          };
        })();
      };
    g.setupProfilePage = a;
    g.setupTimelineQuery = e;
    g.setupProfileLivePage = f;
    g.useTrendingAccountsInfo = h;
    g.setupProfileExtrasQuery = i;
  },
  98
);
__d(
  "ProfileViewFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("4283");
    b = d("FalcoLoggerInternal").create("profile_view", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useXIGProfileFollowList",
  [
    "invariant",
    "CometRouteURL",
    "PolarisFollowListActions",
    "PolarisHashtagFollowListActions",
    "PolarisReactRedux",
    "goForceFullPageRedirectTo",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useEffect,
      j = new RegExp(
        "^/(.+/)(following|hashtag_following|followers|members|admins)/?(mutualOnly|mutualFirst)?$"
      );
    function k(a) {
      var b = null,
        c = null;
      a = a.match(j);
      a &&
        ((b = {
          followers: "followers",
          following: "following",
          hashtag_following: "hashtag_following",
          members: "members",
          admins: "admins",
        }[a[2]]),
        (c = { mutualOnly: "mutualOnly", mutualFirst: "mutualFirst" }[a[3]]));
      return { connectionListType: b, connectionListView: c };
    }
    function a(a) {
      var b = d("CometRouteURL").useRouteURLPath();
      b = k(b);
      var e = b.connectionListType,
        f = b.connectionListView,
        g = d("PolarisReactRedux").useDispatch(),
        j = d("PolarisReactRedux").useSelector(function (b) {
          var c = b.users.usernameToId.get(a);
          return c ? d("polarisUserSelectors").getUserById(b, c) : null;
        });
      i(
        function () {
          if (e == null) return;
          j ||
            (typeof a === "string" || h(0, 51664),
            c("goForceFullPageRedirectTo")("/" + a + "/"));
          if (j == null || e == null) return;
          var b = j.id,
            i = e === "followers";
          if (e === "hashtag_following")
            g(d("PolarisHashtagFollowListActions").getHashtagFollowList(b));
          else {
            var k = f === "mutualOnly" || f === "mutualFirst";
            g(d("PolarisFollowListActions").requestFollowList(b, e, i, k));
          }
        },
        [g, f, j, a, e]
      );
      return { connectionListType: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileRoot.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "PolarisConditionalPageLayoutHandler.react",
    "PolarisConfig",
    "PolarisErrorBoundary.react",
    "PolarisHttpGatedContentPageWithShell.react",
    "PolarisNavChain",
    "PolarisODS",
    "PolarisProfileActions",
    "PolarisReactRedux",
    "PolarisRoutes",
    "ProfileViewFalcoEvent",
    "cr:1690",
    "goForceFullPageRedirectTo",
    "justknobx",
    "polarisUserSelectors",
    "react",
    "useGatedContentInfo",
    "usePolarisGetQuerySetup",
    "usePolarisPreloadedGetQuery",
    "usePolarisTrackingDataProfileURLParams",
    "useRoutePassthroughProps",
    "useXIGProfileFollowList",
    "uuid",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useRef;
    function l(a) {
      var b = a.gated,
        e = a.profile,
        f = a.profile_extras;
      a = a.trending_accounts;
      b = c("usePolarisPreloadedGetQuery")(b);
      e = c("usePolarisPreloadedGetQuery")(e);
      a = c("usePolarisPreloadedGetQuery")(a);
      f = c("usePolarisPreloadedGetQuery")(f);
      c("usePolarisGetQuerySetup")(
        e,
        d("PolarisProfileActions").setupProfilePage
      );
      c("usePolarisGetQuerySetup")(
        a,
        d("PolarisProfileActions").useTrendingAccountsInfo
      );
      c("usePolarisGetQuerySetup")(
        f,
        d("PolarisProfileActions").setupProfileExtrasQuery
      );
      e = c("useGatedContentInfo")(b);
      return { gatedContentInfo: e };
    }
    function m(a) {
      var b = a.gated,
        e = a.profile,
        f = a.profile_extras;
      a = a.timeline;
      b = c("usePolarisPreloadedGetQuery")(b);
      e = c("usePolarisPreloadedGetQuery")(e);
      a = c("usePolarisPreloadedGetQuery")(a);
      f = c("usePolarisPreloadedGetQuery")(f);
      c("usePolarisGetQuerySetup")(
        e,
        d("PolarisProfileActions").setupProfilePage
      );
      c("usePolarisGetQuerySetup")(
        a,
        d("PolarisProfileActions").setupTimelineQuery
      );
      c("usePolarisGetQuerySetup")(
        f,
        d("PolarisProfileActions").setupProfileExtrasQuery
      );
      e = c("useGatedContentInfo")(b);
      return { gatedContentInfo: e };
    }
    function n(a) {
      var e;
      a = a.props;
      var f = a.routeParams,
        g = f.a_mpk,
        n = f.a_tt,
        o = f.enable_persistent_cta,
        p = f.show_pro_dash_dialog,
        q = f.show_story_unavailable,
        r = f.tab;
      f = f.username;
      a = a.routeProps;
      var s = a.id,
        t = a.polaris_preload,
        u = a.profile_pic_url,
        v = a.qr;
      a = a.show_suggested_profiles;
      var w = c("useXIGProfileFollowList")(f);
      w = w.connectionListType;
      e = (e = c("useRoutePassthroughProps")()) != null ? e : {};
      e = e.selectedTabId;
      var x = k(d("PolarisConfig").isLoggedIn() ? m : l).current;
      x = x(t);
      t = x.gatedContentInfo;
      x = d(
        "usePolarisTrackingDataProfileURLParams"
      ).getTrackingDataProfileURLParams(n, g, o);
      var y =
        (o = d("PolarisReactRedux").useSelector(
          d("polarisUserSelectors").getViewer
        )) == null
          ? void 0
          : o.id;
      o = j(
        function () {
          var a;
          if (y == null) return;
          var b = {
            tracking_token: n,
            m_pk: g,
            nav_chain:
              (a = c("PolarisNavChain").getInstance()) == null
                ? void 0
                : a.getNavChainForSend(),
            actor_id: y,
            media_id_attribution: g,
            target_id: s,
          };
          n != null
            ? c("PolarisODS").incr("web.ads.feed.profile.view.ad")
            : c("PolarisODS").incr("web.ads.feed.profile.view.organic");
          c("ProfileViewFalcoEvent").log(function () {
            return b;
          });
        },
        [y, n, g, s]
      );
      if (t != null)
        return i.jsx(c("PolarisHttpGatedContentPageWithShell.react"), {
          blocksLoggingData: t.blocks_logging_data,
          description: t.description,
          entityId: s,
          sessionId: t.session_id,
          title: t.title,
          userAvatarUrl: u,
          username: f,
        });
      t = q === "1" ? h._("Story unavailable") : null;
      u = c("uuid")();
      x = i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(
          b("cr:1690"),
          {
            followTypeToShowInModal: w,
            onProfilePageLoaded: o,
            profileTrackingData: x,
            selectedTabId: (w = (q = e) != null ? q : r) != null ? w : "posts",
            sessionId: u,
            showProDashDialog: (o = p) != null ? o : !1,
            showQRModal: v,
            showSuggestedProfiles: a,
            toastContentOnLoad: t,
            userId: s,
          },
          "userprofile_" + f
        ),
      });
      return c("PolarisConditionalPageLayoutHandler.react") != null
        ? i.jsx(c("PolarisConditionalPageLayoutHandler.react"), {
            mainComponent: x,
          })
        : x;
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      a = i.jsx(n, babelHelpers["extends"]({}, a));
      return !d("PolarisConfig").isLoggedIn() && c("justknobx")._("638")
        ? i.jsx(c("PolarisErrorBoundary.react"), {
            errorRenderer: function () {
              return null;
            },
            onError: function () {
              c("PolarisODS").incr("web.logged_out_error_redirect.profile"),
                c("goForceFullPageRedirectTo")(d("PolarisRoutes").LOGIN_PATH);
            },
            children: a,
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
