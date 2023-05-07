/*FB_PKG_DELIM*/

__d(
  "PolarisMaybeInstantPostModal.react",
  ["cr:874"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:874");
  },
  98
);
__d(
  "PolarisMediaBrowserPostModal.react",
  [
    "invariant",
    "PolarisIsLoggedInDesktop",
    "PolarisMaybeInstantPostModal.react",
    "PolarisPost.react",
    "PolarisPostVariants",
    "PolarisReactRedux",
    "PolarisRoutes",
    "nullthrows",
    "polarisPostSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useEffect;
    function a(a) {
      var b = a.analyticsContext,
        e = a.combinedPosts,
        f = a.mediaLinkBuilder,
        g = a.modalEntryPath,
        k = a.onClose,
        l = a.onImpression,
        m = a.onOpen,
        n = a.postId,
        o = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisPostSelectors").getDeletedIds(a);
        });
      a = e.map(function (a) {
        return a.id;
      });
      var p = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisPostSelectors").getPostOrNullById(a, n);
      });
      j(
        function () {
          p == null && (o.includes(n) || h(0, 51476), k());
        },
        [o, k, p, n]
      );
      return p == null
        ? null
        : i.jsx(c("PolarisMaybeInstantPostModal.react"), {
            analyticsContext: b,
            combinedPostIds: a,
            dimensions: p.dimensions,
            mediaLinkBuilder: f,
            modalEntryPath:
              g != null && g !== "" ? g : d("PolarisRoutes").FEED_PATH,
            onClose: k,
            onOpen: m,
            postCode: c("nullthrows")(p.code),
            postId: n,
            children: i.jsx(c("PolarisPost.react"), {
              analyticsContext: b + "Modal",
              autoplay: d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),
              id: n,
              isVisible: !0,
              onImpression: l,
              variant: d("PolarisPostVariants").VARIANTS.flexible,
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
  "PolarisClipsItemModal.react",
  [
    "IGRouter",
    "PolarisClipsHelpers",
    "PolarisLinkBuilder",
    "PolarisPost.react",
    "PolarisPostModal.react",
    "PolarisPostVariants",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef;
    function a(a) {
      var b = a.analyticsContext,
        e = a.clips,
        f = a.history,
        g = a.onClose,
        j = a.onOpen;
      a = a.postId;
      f = i(f.location.pathname);
      var k = d("PolarisClipsHelpers").getClipItemFromPostID(e, a);
      if (!k) return null;
      e = e.map(function (a) {
        return c("nullthrows")((a = a.media) == null ? void 0 : a.pk);
      });
      return h.jsx(c("PolarisPostModal.react"), {
        analyticsContext: b,
        combinedPostIds: e,
        dimensions: d("PolarisClipsHelpers").getClipDimensionsFromItemDict(k),
        mediaLinkBuilder: d("PolarisLinkBuilder").buildClipsMediaLink,
        modalEntryPath: f.current,
        onClose: g,
        onOpen: j,
        postCode: c("nullthrows")((e = k.media) == null ? void 0 : e.code),
        postId: a,
        children: h.jsx(c("PolarisPost.react"), {
          analyticsContext: b + "Modal",
          autoplay: !0,
          id: a,
          isVisible: !0,
          variant: d("PolarisPostVariants").VARIANTS.flexible,
          visiblePosition: 0,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = d("IGRouter").withIGRouter(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisInstantPostModal.react",
  [
    "PolarisPostModalInternal.react",
    "PolarisProfileTabTaggedPhotosConstants",
    "polarisPostModalHelpers",
    "react",
    "usePolarisPost",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        e = !1,
        f = !1,
        g =
          d("polarisPostModalHelpers").getModalPageIdFromAnalyticsContext(
            a.analyticsContext
          ) === "profilePageModal";
      b =
        ((b = a.modalEntryPath) == null
          ? void 0
          : b.endsWith(
              "/" +
                d("PolarisProfileTabTaggedPhotosConstants").TAGGED_TAB_ID +
                "/"
            )) === !0;
      g && !b && (e = !0);
      g = d("usePolarisPost").usePost(a.postId, function (a) {
        return a.isVideo;
      });
      b && g === !0 && (f = !0);
      return h.jsx(
        c("PolarisPostModalInternal.react"),
        babelHelpers["extends"]({}, a, {
          showLoadingShimmer: f,
          skipMediaInfo: e,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
