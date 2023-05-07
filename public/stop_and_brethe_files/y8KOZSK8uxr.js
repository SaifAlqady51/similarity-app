/*FB_PKG_DELIM*/

__d(
  "CAAWebClientLoggingEventSource",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      AYMH_LOGGED_OUT_DIALOG: "aymh_logged_out_dialog",
      AYMH_PASSWORD_FORM: "aymh_password_form",
      LOGIN_HOME_PAGE: "login_home_page",
      LOGIN_LOGGED_OUT_DIALOG: "login_logged_out_dialog",
      LOGIN_FULL_PAGE: "login_full_page",
    });
    c = b("$InternalEnum")({
      CAA: "caa",
      CORONAVIRUS_HUB: "coronavirus_hub",
      DISCOVERY_HUB: "discovery_hub",
      EVENTS: "events",
      EXPLORE: "explore",
      EXTERNAL_URL: "external_url",
      FEED: "feed",
      GROUPS: "groups",
      GAMING: "gaming",
      HASHTAG: "hashtag",
      HTTP_ERROR: "http_error",
      INSTANT_GAMES_HUB: "instant_games_hub",
      JOBS: "jobs",
      LOCATION: "location",
      LOGIN: "login",
      MINI_SHOP: "mini_shop",
      MARKETPLACE: "marketplace",
      MENTAL_HEALTH_HUB: "mental_health_hub",
      PAGE: "page",
      PLACES: "places",
      POST: "post",
      PROFILE: "profile",
      REELS: "reels",
      SEARCH: "search",
      SEO: "seo",
      SHOPS: "shops",
      UFI: "ufi",
      UNKNOWN: "unknown",
      VIDEO: "video",
      WATCH: "watch",
    });
    f.CAAWebClientLoggingEventSource = a;
    f.CAAWebClientLoggingDialogSource = c;
  },
  66
);
__d(
  "IGDSPinPanoFilled24Icon",
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
            d: "m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z",
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
  "PolarisRelatedMediaGridConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 4;
    f.MINIMUM_POST_COUNT = a;
  },
  66
);
__d(
  "PolarisNftMediaIcon.react",
  ["IGDSBox.react", "IGDSNftPanoFilledIcon", "PolarisGenericStrings", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsx(c("IGDSBox.react"), {
        margin: 2,
        position: "relative",
        children: h.jsx(c("IGDSNftPanoFilledIcon"), {
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
  "PolarisPinnedPostIcon.react",
  [
    "IGDSBox.react",
    "IGDSPinPanoFilled24Icon",
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
        children: h.jsx(c("IGDSPinPanoFilled24Icon"), {
          alt: d("PolarisGenericStrings").PINNED_POST_ICON_ALT,
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
  "PolarisPostsGridItemMediaIndicator.react",
  [
    "cx",
    "PolarisClipIndicator.react",
    "PolarisNftMediaIcon.react",
    "PolarisPinnedPostIcon.react",
    "PolarisSidecarIcon.react",
    "PolarisUpcomingEventIcon.react",
    "PolarisVideoIndicator.react",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.hasUpcomingEvent,
        d = a.isClipsVideo,
        e = a.isNFT,
        f = a.isPinnedForThisUser,
        g = a.isSidecar;
      a = a.isVideo;
      var h;
      b
        ? (h = i.jsx(c("PolarisUpcomingEventIcon.react"), {}))
        : f === !0
        ? (h = i.jsx(c("PolarisPinnedPostIcon.react"), {}))
        : g
        ? (h = i.jsx(c("PolarisSidecarIcon.react"), {}))
        : e && c("qex")._("495")
        ? (h = i.jsx(c("PolarisNftMediaIcon.react"), {}))
        : a &&
          (d
            ? (h = i.jsx(c("PolarisClipIndicator.react"), { size: 18 }))
            : (h = i.jsx(c("PolarisVideoIndicator.react"), {})));
      return h != null && i.jsx("div", { className: "_aatp", children: h });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostsGridItemStatsOverlayContainer.react",
  [
    "PolarisPostsGridItemStatsOverlay.react",
    "PolarisReactRedux",
    "polarisPostSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.id;
      a = d("PolarisReactRedux").useSelector(function (a) {
        return b ? d("polarisPostSelectors").getPostById(a, b) : null;
      });
      return !a
        ? null
        : h.jsx(c("PolarisPostsGridItemStatsOverlay.react"), {
            commentsDisabled: a.commentsDisabled,
            isVideo: a.isVideo,
            numComments: a.numComments,
            numPreviewLikes: a.numPreviewLikes,
            productType: a.productType,
            videoViews: a.videoViews,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostsGridItemOptionalOverlay.react",
  [
    "PolarisConfig",
    "PolarisPostsGridItemOverlay.react",
    "PolarisPostsGridItemStatsOverlayContainer.react",
    "PolarisReactRedux",
    "PolarisShouldHideLikeCountsWithControls",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.isFocused,
        e = a.post;
      a = a.shouldShowStats;
      var f = e.numPreviewLikes,
        g = e.owner;
      g = g !== void 0 && g.id === d("PolarisConfig").getViewerId();
      var i = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisUserSelectors").getViewer(a);
      });
      if (!b) return null;
      if (f == null) return null;
      b =
        f === -1 ||
        d(
          "PolarisShouldHideLikeCountsWithControls"
        ).shouldHideLikeCountsWithControls(
          i == null ? void 0 : i.hideLikeAndViewCounts,
          e.likeAndViewCountsDisabled,
          g
        );
      return b
        ? null
        : a
        ? h.jsx(c("PolarisPostsGridItemStatsOverlayContainer.react"), {
            id: e.id,
          })
        : h.jsx(c("PolarisPostsGridItemOverlay.react"), {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostsGridItem.react",
  [
    "cx",
    "fbt",
    "PolarisDynamicExploreMediaHelpers",
    "PolarisExploreLogger",
    "PolarisFastLink.react",
    "PolarisInstagramMediaOverlayFalcoEvent",
    "PolarisLinkBuilder",
    "PolarisOrganicThumbnailImpression",
    "PolarisPhoto.react",
    "PolarisPostsGridItemMediaIndicator.react",
    "PolarisPostsGridItemOptionalOverlay.react",
    "PolarisReactRedux",
    "PolarisSensitivityOverlay.react",
    "PolarisUA",
    "PolarisViewpointReact.react",
    "joinClasses",
    "nullthrows",
    "polarisGetPostFromGraphMediaInterface",
    "polarisMediaOverlayInfoUtils",
    "polarisPostSelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useEffect,
      l = b.useState;
    function m(a, b) {
      var c = b || {},
        e = c.mediaOverlayInfo;
      d(
        "PolarisInstagramMediaOverlayFalcoEvent"
      ).InstagramMediaOverlayFalcoEvent.log(function () {
        return d(
          "PolarisInstagramMediaOverlayFalcoEvent"
        ).InstagramMediaOverlayFalcoEvent.buildPayloadForLog({
          containerModule: d(
            "PolarisInstagramMediaOverlayFalcoEvent"
          ).InstagramMediaOverlayFalcoEvent.getLoggableContainerModuleFromAnalyticsContext(
            a
          ),
          customAction: "go_to_post",
          customSourceOfAction: "media_grid",
          entityID: b.id,
          event: d("PolarisInstagramMediaOverlayFalcoEvent")
            .IG_MEDIA_OVERLAY_FALCO_CLIENT_EVENTS.ACTION,
          overlayLayout: d(
            "polarisMediaOverlayInfoUtils"
          ).getMediaOverlayLayout(e),
          overlayType: d("polarisMediaOverlayInfoUtils").getMediaOverlayType(e),
        });
      });
    }
    function n() {
      return c("qex")._("468") ? (1 / 0.75) * 100 + "%" : null;
    }
    var o = i._("Sensitive content overlay");
    function p(a) {
      var b = a.analyticsContext;
      a = a.post;
      var e = d(
        "polarisGetPostFromGraphMediaInterface"
      ).getPostOrSidecarItemForSensitivityOverlay(a);
      if (e == null) return null;
      var f = d(
          "polarisGetPostFromGraphMediaInterface"
        ).getMediaOverlayMediaCoverInfoFromPostOrSidecarItem(e),
        g = e.id,
        h = e.isVideo,
        i = e.mediaPreview,
        k = e.owner;
      e = e === a && (a == null ? void 0 : a.isSidecar) === !0;
      return j.jsx(c("PolarisSensitivityOverlay.react"), {
        analyticsContext: b,
        isPhoto: h !== !0 && !e,
        mediaId: g,
        mediaOverlayCoverInfo: f,
        ownerId: c("nullthrows")(k).id,
        previewData: i,
        variant: "grid",
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.id,
        e = a.isVisible,
        f = a.onImpression,
        g = a.onMediaRendered,
        h = a.onClick,
        i = a.loggingData,
        q = a.analyticsContext,
        r = a.className,
        s = a.shouldSpawnModals,
        t = a.profileUser;
      a = a.mediaLinkBuilder;
      a = a === void 0 ? d("PolarisLinkBuilder").buildMediaLink : a;
      var u = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisPostSelectors").getPostById(a, b);
        }),
        v = u.accessibilityCaption,
        w = u.caption,
        x = u.code,
        y = u.felixProfileGridCrop,
        z = u.hasUpcomingEvent,
        A = u.isSidecar,
        B = u.isVideo,
        C = u.nftAssetInfo,
        D = u.owner,
        E = u.pinnedForUsers,
        F = u.src,
        G = u.thumbnailResources,
        H = u.thumbnailSrc,
        I = l(!1),
        J = I[0],
        K = I[1];
      I = l(!1);
      var L = I[0],
        M = I[1];
      k(
        function () {
          f && e && f(u);
        },
        [f, e, u]
      );
      var N = function (a, c) {
          g && g(b, c);
        },
        O = function (a, b) {
          b != null && m(q, b), h && h(a, u, i), M(!1);
        },
        P = a(c("nullthrows")(x), c("nullthrows")(D).username),
        Q =
          B === !0 && d("polarisGetPostFromGraphMediaInterface").isClipsPost(u),
        R = d(
          "polarisGetPostFromGraphMediaInterface"
        ).getPostOrSidecarItemForSensitivityOverlay(u);
      I = [
        d("PolarisOrganicThumbnailImpression").makeThumbnailImpressionAction(
          babelHelpers["extends"](
            {
              mediaType: d(
                "polarisGetPostFromGraphMediaInterface"
              ).getPostMediaType(u),
              itemType: d("PolarisExploreLogger").getDiscoverGridItemType(
                (i == null ? void 0 : i.displayVariant) || "BASIC"
              ),
              gridItemSize: d("PolarisDynamicExploreMediaHelpers")
                .GRID_ITEM_SIZE.ONE_BY_ONE,
              postId: u.id,
              analyticsContext: q,
            },
            i
          )
        ),
      ];
      return j.jsx(d("PolarisViewpointReact.react").Viewpoint, {
        action: I,
        id: u.id,
        children: function (a) {
          return j.jsx("div", {
            className: c("joinClasses")("_aabd _aa8k", r),
            "data-testid": void 0,
            ref: a,
            children: j.jsxs(c("PolarisFastLink.react"), {
              "aria-label": R != null ? o : void 0,
              href: P,
              onBlur: function () {
                return M(!1);
              },
              onClick: function (a) {
                return O(a, R);
              },
              onFocus: function () {
                return M(!0);
              },
              onMouseEnter: function () {
                return K(!0);
              },
              onMouseLeave: function () {
                return K(!1);
              },
              shouldOpenModal: s === !0,
              children: [
                R != null
                  ? j.jsx(p, { analyticsContext: q, post: u })
                  : j.jsx(c("PolarisPhoto.react"), {
                      accessibilityCaption: v,
                      caption: w,
                      customHeightPercent: n(),
                      felixProfileGridCrop: y,
                      ignoreSrcSet: !0,
                      onPhotoRendered: N,
                      rich: !0,
                      src: c("nullthrows")(H != null && H !== "" ? H : F),
                      srcSet: G,
                    }),
                R == null &&
                  j.jsx(c("PolarisPostsGridItemMediaIndicator.react"), {
                    hasUpcomingEvent: z === !0,
                    isClipsVideo: Q,
                    isNFT: C != null,
                    isPinnedForThisUser: (E || [])
                      .map(function (a) {
                        return a.id;
                      })
                      .includes(t == null ? void 0 : t.id),
                    isSidecar: A === !0,
                    isVideo: B === !0,
                  }),
                j.jsx(c("PolarisPostsGridItemOptionalOverlay.react"), {
                  isFocused: !d("PolarisUA").isMobile() && (L || J),
                  post: u,
                  shouldShowStats: R == null,
                }),
              ],
            }),
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPPRLoggedPostsGridItem",
  ["PolarisPostsGridItem.react", "polarisWithPPRLogging"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("polarisWithPPRLogging")(c("PolarisPostsGridItem.react"));
    g["default"] = a;
  },
  98
);
__d(
  "PolarisVirtualPostsGridConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 300;
    f.POSTS_ROW_ESTIMATED_HEIGHT = a;
  },
  66
);
__d(
  "PolarisVirtualPostsGrid.react",
  [
    "cx",
    "IGDSSpinner.react",
    "PolarisLogger",
    "PolarisPPRLoggedPostsGridItem",
    "PolarisPostsGridQEHelpers",
    "PolarisVirtualPostsGridConstants",
    "PolarisVirtualizedWithScrollLogging.react",
    "qex",
    "react",
    "shallowEqual",
    "usePrevious",
    "vc-tracker",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = 4,
      o = 8,
      p = 1,
      q = [],
      r = [],
      s = 0;
    function a(a) {
      var b = a.allowSampledScrollLogging;
      b = b === void 0 ? !1 : b;
      var e = a.hasNextPage,
        f = a.initialRowsRenderCount;
      f = f === void 0 ? n : f;
      var g = a.isFetching,
        h = a.onNextPage,
        t = a.overscanRowsCount;
      t = t === void 0 ? o : t;
      var u = a.PostGridItem,
        v = a.postIds,
        w = v === void 0 ? q : v;
      v = a.posts;
      var x = v === void 0 ? r : v;
      v = a.postsPerRow;
      v = v === void 0 ? 3 : v;
      var y = a.shouldSpawnModals,
        z = a.sizeCache,
        A = a.visibleCount,
        B = a.analyticsContext,
        C = a.mediaLinkBuilder,
        D = a.onClick,
        E = a.onImpression,
        F = a.profileUser,
        G = a.loggingData,
        H = l(null);
      a = m(0);
      var I = a[0],
        J = a[1],
        K = c("usePrevious")({ postIds: w, hasNextPage: e }),
        L = j(function () {
          return s++;
        }, []);
      k(
        function () {
          J(L());
        },
        [L]
      );
      var M = function (a) {
          a = a.numScreensFromEnd;
          e &&
            !g &&
            h &&
            a < p &&
            (d("PolarisLogger").logAction("loadMoreScroll"), h());
        },
        N = d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();
      a = function (a) {
        var b = a.index,
          d = a.isVisible;
        a.visibleIndex;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "index",
          "isVisible",
          "visibleIndex",
        ]);
        var e = x[b];
        e = e ? e.id : w[b];
        return u
          ? i.jsx(
              u,
              {
                analyticsContext: B,
                className:
                  (N === 28 ? "_aanf" : "") + (N === 4 ? " _al3l" : ""),
                id: e,
                isVisible: d,
                loggingData: babelHelpers["extends"]({}, a, G),
                mediaLinkBuilder: C,
                onClick: D,
                onImpression: E,
                profileUser: F,
                shouldSpawnModals: y,
              },
              e
            )
          : i.jsx(
              c("PolarisPPRLoggedPostsGridItem"),
              {
                analyticsContext: B,
                className:
                  (N === 28 ? "_aanf" : "") + (N === 4 ? " _al3l" : ""),
                id: e,
                isGridView: !0,
                isVisible: d,
                loggingData: babelHelpers["extends"]({}, a, G),
                mediaLinkBuilder: C,
                onClick: D,
                onImpression: E,
                profileUser: F,
                shouldSpawnModals: y,
              },
              e
            );
      };
      k(
        function () {
          var a;
          if (K == null) return;
          a = (a = K) != null ? a : {};
          var b = a.hasNextPage;
          a = a.postIds;
          var d = H.current;
          d && !c("shallowEqual")(a, w) && d.forceUpdate();
          e !== b && h && h();
        },
        [e, h, w, K]
      );
      k(
        function () {
          return function () {
            c("vc-tracker")
              .getCurrentVCTraces()
              .forEach(function (a) {
                a.unlock("VirtualPostsGrid_isFetching_" + I);
              });
          };
        },
        [I]
      );
      g
        ? c("vc-tracker")
            .getCurrentVCTraces()
            .forEach(function (a) {
              a.lock("VirtualPostsGrid_isFetching_" + I);
            })
        : c("vc-tracker")
            .getCurrentVCTraces()
            .forEach(function (a) {
              a.unlock("VirtualPostsGrid_isFetching_" + I);
            });
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(
            d("PolarisVirtualizedWithScrollLogging.react")
              .IGVirtualGridWithLogging,
            {
              allowSampledScrollLogging: b,
              analyticsContext: B,
              estimatedItemSize: d("PolarisVirtualPostsGridConstants")
                .POSTS_ROW_ESTIMATED_HEIGHT,
              initialRenderCount: f,
              itemCount: A,
              itemsPerRow: v,
              onInitialize: function (a) {
                a = a.numScreensFromEnd;
                a < 0 && !c("qex")._("944") && M({ numScreensFromEnd: a });
              },
              onScroll: M,
              overscanCount: t,
              ref: H,
              renderer: a,
              rendererPlaceholder: function (a) {
                return i.jsx(
                  "div",
                  {
                    className:
                      (N === 28 ? "_aanf" : "") + (N === 4 ? " _al3l" : ""),
                  },
                  a
                );
              },
              rowClassName:
                (N === 28 ? "_aang" : "") + (N === 4 ? " _al3n" : ""),
              sizeCache: z,
            }
          ),
          e &&
            i.jsx("div", {
              className: "_aanh",
              children: i.jsx(c("IGDSSpinner.react"), {
                position: "absolute",
                size: "medium",
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
  "PolarisRelatedMediaGrid.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisLogger",
    "PolarisRelatedMediaGridConstants",
    "PolarisSEOEventsLogger",
    "PolarisUA",
    "PolarisVirtualPostsGrid.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef;
    function a(a) {
      var b = a.analyticsContext,
        e = a.footer,
        f = a.hasTrendingContent,
        g = a.header,
        h = a.isMediaFetching,
        m = a.maxPosts,
        n = a.postIds,
        o = l(!0),
        p = l();
      a = j(
        function () {
          f === !0
            ? d("PolarisLogger").logAction("trendingContentModulePostClick", {
                source: b,
              })
            : (d("PolarisLogger").logAction("relatedMediaPostClick"),
              d("PolarisSEOEventsLogger").logSEOEvent({
                eventName: "relatedMediaPostClick",
                containermodule: b,
              }));
        },
        [b, f]
      );
      k(
        function () {
          var a = p.current;
          !h &&
            !(
              n.length <
              d("PolarisRelatedMediaGridConstants").MINIMUM_POST_COUNT
            ) &&
            o.current === !0 &&
            a != null &&
            ((o.current = !1),
            d("PolarisLogger").logAction("relatedMediaImpression", {
              viewport_height: window.innerHeight,
              is_media_visible: s(a),
            }),
            d("PolarisSEOEventsLogger").logSEOEvent({
              eventName: "relatedMediaImpression",
              containermodule: b,
            }));
        },
        [b, p, h, o, n]
      );
      if (
        n.length < d("PolarisRelatedMediaGridConstants").MINIMUM_POST_COUNT &&
        !h
      )
        return null;
      var q = d("PolarisUA").isDesktop() ? 5 : 3,
        r = d("PolarisUA").isDesktop() ? 0 : 4;
      m = Math.min(n.length, m);
      function s(a) {
        a = a.getBoundingClientRect();
        var b = a.bottom;
        a = a.top;
        return !(b < 0 || a - window.innerHeight >= 0);
      }
      return i.jsxs("div", {
        className: f === !0 ? "_ajgs" : "_aa6g",
        children: [
          i.jsx(c("IGDSBox.react"), {
            marginBottom: q,
            marginStart: r,
            position: "relative",
            children: g,
          }),
          i.jsx("div", {
            ref: p,
            children: i.jsx(c("PolarisVirtualPostsGrid.react"), {
              analyticsContext: "permalinkPivot",
              hasNextPage: !1,
              isFetching: h,
              onClick: a,
              postIds: n,
              visibleCount: m,
            }),
          }),
          e,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisTrendingContentActions",
  [
    "PolarisInstapi",
    "PolarisMonitorErrors",
    "asyncToGeneratorRuntime",
    "polarisGetPostFromMediaDict",
    "polarisGetUserFromUserDict",
    "polarisNormalizeMediaDicts",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return function (b) {
        if (a.recommended_medias != null) {
          var e = [].concat(a.recommended_medias),
            f = d("polarisNormalizeMediaDicts").normalizeMediaDicts(e).entities;
          e = Object.keys(f.mediaDicts).map(function (a) {
            return d("polarisGetPostFromMediaDict").getPostFromMediaDict(
              f.mediaDicts[a]
            );
          });
          var g = Object.keys(f.userDicts).map(function (a) {
            return c("polarisGetUserFromUserDict")(f.userDicts[a]);
          });
          b({ type: "TRENDING_CONTENT_LOADED", posts: e, users: g });
        }
        if (a.recommended_clips != null) {
          e = [].concat(a.recommended_clips);
          g = [];
          for (var h = 0; h < e.length; h++) g[h] = e[h].media;
          var i = d("polarisNormalizeMediaDicts").normalizeMediaDicts(
            g
          ).entities;
          h = Object.keys(i.mediaDicts).map(function (a) {
            return d("polarisGetPostFromMediaDict").getPostFromMediaDict(
              i.mediaDicts[a]
            );
          });
          e = Object.keys(i.userDicts).map(function (a) {
            return c("polarisGetUserFromUserDict")(i.userDicts[a]);
          });
          b({ type: "TRENDING_CONTENT_LOADED", posts: h, users: e });
        }
      };
    }
    e = function (a) {
      return function (b) {
        b(h(a));
      };
    };
    function a() {
      return (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          try {
            var b = yield d("PolarisInstapi").apiGet(
              "/api/v1/lox/media_recommendations/",
              {}
            );
            a(h(b.data));
          } catch (a) {
            d("PolarisMonitorErrors").logError(a);
          }
        });
        return function (b) {
          return a.apply(this, arguments);
        };
      })();
    }
    g.setupTrendingMedia = e;
    g.requestTrendingContent = a;
  },
  98
);
__d(
  "PolarisTrendingContentSelectors",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.trendingContent.trendingContentSuggestions;
    }
    f.getTrendingContentSuggestions = a;
  },
  66
);
__d(
  "PolarisLandingPageTrendingContent.react",
  [
    "PolarisLogger",
    "PolarisReactRedux",
    "PolarisRelatedMediaGrid.react",
    "PolarisTrendingContentActions",
    "PolarisTrendingContentSelectors",
    "PolarisViewpointReact.react",
    "react",
    "usePolarisLandingPagePageIdentifier",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = 6;
    function a() {
      var a = d("PolarisReactRedux").useDispatch(),
        b = d("PolarisReactRedux").useSelector(function (a) {
          return d(
            "PolarisTrendingContentSelectors"
          ).getTrendingContentSuggestions(a);
        });
      i(
        function () {
          (b == null || b.length === 0) &&
            a(d("PolarisTrendingContentActions").requestTrendingContent());
        },
        [a, b]
      );
      var e = c("usePolarisLandingPagePageIdentifier")(),
        f = j(!0),
        g = function (a) {
          a.state === "entered" &&
            f.current &&
            ((f.current = !1),
            d("PolarisLogger").logAction("trendingContentModule", {
              source: e,
              target: "impressionLogging",
            }));
        },
        l = b.length > 0;
      return !l
        ? null
        : h.jsx(d("PolarisViewpointReact.react").Viewpoint, {
            action: g,
            id: "root_landing_page",
            children: function (a) {
              return h.jsx("div", {
                ref: a,
                children: h.jsx(c("PolarisRelatedMediaGrid.react"), {
                  analyticsContext: e,
                  hasTrendingContent: !0,
                  header: h.jsx("div", {}),
                  isMediaFetching: !1,
                  maxPosts: k,
                  postIds: b,
                }),
              });
            },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
