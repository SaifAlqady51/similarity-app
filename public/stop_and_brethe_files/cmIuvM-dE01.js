/*FB_PKG_DELIM*/

__d(
  "PolarisClipsShareButtonWithDialog_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsShareButtonWithDialog_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          alias: null,
          args: null,
          concreteType: "XDTUserDict",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PolarisClipsViewerUseLoggedOutIntentClick_user",
            },
          ],
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
  "PolarisPostModalContext_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisPostModalContext_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisPostFastOptionFavorite_items",
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
  "PolarisClipsShareButtonWithDialog.react",
  [
    "fbt",
    "CometRelay",
    "IGDSDirectPanoOutlineIcon",
    "PolarisClipsShareButtonWithDialog_media.graphql",
    "PolarisClipsViewerControlIcon.react",
    "PolarisClipsViewerUseLoggedOutIntentClick.react",
    "PolarisConfig",
    "PolarisDirectMQTTInstance",
    "PolarisPostModalContext.react",
    "PolarisPostShareUtils",
    "getPolarisPostIdFromNativeId",
    "polarisPostSelectors",
    "qex",
    "react",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = h._("Direct"),
      m =
        i !== void 0
          ? i
          : (i = b("PolarisClipsShareButtonWithDialog_media.graphql"));
    function a(a) {
      var b = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      b = d("CometRelay").useFragment(m, b);
      var f = c("getPolarisPostIdFromNativeId")(b.id),
        g = c("usePolarisSelector")(function (a) {
          return d("polarisPostSelectors").getPostById(a, f);
        });
      g =
        g.owner != null
          ? d("PolarisPostShareUtils").getIsShareable(g, g.owner)
          : !1;
      var h = c("PolarisClipsViewerUseLoggedOutIntentClick.react")(b.user),
        i = d("PolarisPostModalContext.react").useSetPostModal();
      b = k(
        function () {
          var a = d("PolarisDirectMQTTInstance").getMqttInstance();
          c("qex")._("1264")
            ? i("directSecureShare")
            : a
            ? i("directShare")
            : i("share");
        },
        [i]
      );
      return j.jsx(c("PolarisClipsViewerControlIcon.react"), {
        alt: l,
        Icon: c("IGDSDirectPanoOutlineIcon"),
        iconColor: e,
        onClick:
          d("PolarisConfig").isLoggedIn() || g
            ? b
            : function () {
                return h("reel_feedback_direct");
              },
        shadow: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostModalContext.next",
  [
    "CometRelay",
    "PolarisPostModalContext.react",
    "PolarisPostModalContext_media.graphql",
    "getPolarisPostIdFromNativeId",
    "polarisPostSelectors",
    "react",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k = h !== void 0 ? h : (h = b("PolarisPostModalContext_media.graphql")),
      l = i.createContext(null);
    function a(a) {
      var b = a.children;
      a = a.queryReference;
      var e = d("CometRelay").useFragment(k, a),
        f = c("getPolarisPostIdFromNativeId")(e.id);
      a = c("usePolarisSelector")(function (a) {
        return d("polarisPostSelectors").getPostById(a, f);
      });
      var g = j(
        function () {
          return { favoritesFragmentKey: e };
        },
        [e]
      );
      return i.jsx(l.Provider, {
        value: g,
        children: i.jsx(
          d("PolarisPostModalContext.react").PostModalContext,
          { post: a, children: b },
          a.id
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PostModalContext = l;
    g.PolarisPostModalContextProvider = a;
  },
  98
);
