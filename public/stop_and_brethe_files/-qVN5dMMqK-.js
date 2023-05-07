/*FB_PKG_DELIM*/

__d(
  "PolarisClipsCommentsButton_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsCommentsButton_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopCommentsButton_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerCommentsButtonFragment_media",
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
  "PolarisClipsDesktopShareButton_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsDesktopShareButton_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsShareButtonWithDialog_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsShareButtonWithPopover_media",
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
  "PolarisClipsLikeButtonFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsLikeButtonFragment_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopLikeButtonFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerLikeButtonFragment_media",
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
  "PolarisClipsMobileShareButton_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsMobileShareButton_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsShareButtonWithDialog_media",
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
  "PolarisClipsViewerAlbumArtFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerAlbumArtFragment_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisClipAlbumArtDataFragment_media",
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
  "PolarisClipsViewerAttributionInfoFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "name",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisClipsViewerAttributionInfoFragment_media",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XDTCreativeConfigDict",
            kind: "LinkedField",
            name: "creative_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XDTEffectPreviewDict",
                kind: "LinkedField",
                name: "effect_configs",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "PolarisClipsViewerEffectsSheetFragment_creative_config",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XDTUserTagInfosDict",
            kind: "LinkedField",
            name: "usertags",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XDTUserTagInfoDict",
                kind: "LinkedField",
                name: "in",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XDTUserDict",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "username",
                        storageKey: null,
                      },
                    ],
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
            concreteType: "XDTLocationDict",
            kind: "LinkedField",
            name: "location",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pk",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePolarisClipsAudioAttributionDataFragment_media",
          },
        ],
        type: "XDTMediaDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisClipsDesktopCommentsButtonWithDialog_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisClipsDesktopCommentsButtonWithDialog_media",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "comment_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "product_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "commenting_disabled_for_viewer",
            storageKey: null,
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
                kind: "RequiredField",
                field: a,
                action: "THROW",
                path: "user.pk",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "group",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: a,
                action: "THROW",
                path: "group.pk",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePolarisMediaOwnerTypeFragment_media",
          },
        ],
        type: "XDTMediaDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisClipsDesktopCommentsButton_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsDesktopCommentsButton_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopCommentsButtonWithPopover_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopCommentsButtonWithDialog_media",
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
  "PolarisClipsDesktopLikeButtonFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsDesktopLikeButtonFragment_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pk",
            storageKey: null,
          },
          action: "THROW",
          path: "pk",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_liked",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "like_count",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisMediaOwnerTypeFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisPostLikedByDialog_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "usePolarisLikeMedia_media",
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
  "PolarisClipsTabDesktopClipFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsTabDesktopClipFragment_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pk",
            storageKey: null,
          },
          action: "THROW",
          path: "pk",
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
          name: "actor_fbid",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerUserFeedbackFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisPostModalContext_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopVideoPlayerFragment_media",
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
  "PolarisClipsViewerUseLoggedOutIntentClick_user.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerUseLoggedOutIntentClick_user",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pk",
            storageKey: null,
          },
          action: "THROW",
          path: "pk",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_pic_url",
          storageKey: null,
        },
      ],
      type: "XDTUserDict",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisClipsViewerAuthorFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerAuthorFragment_media",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XDTUserDict",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_pic_url",
              storageKey: null,
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
  "PolarisClipsViewerAuthorInfoFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerAuthorInfoFragment_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerAuthorFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerFollowButtonFragment_media",
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
  "PolarisClipsViewerClipDescriptionFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerClipDescriptionFragment_media",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XDTCommentDict",
          kind: "LinkedField",
          name: "caption",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
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
  "PolarisClipsViewerFollowButtonFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerFollowButtonFragment_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "pk",
                  storageKey: null,
                },
                action: "THROW",
                path: "user.pk",
              },
              {
                alias: null,
                args: null,
                concreteType: "XDTRelationshipInfoDict",
                kind: "LinkedField",
                name: "friendship_status",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "following",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "PolarisClipsViewerUseLoggedOutIntentClick_user",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "user",
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
  "PolarisClipsViewerOverlayContentFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerOverlayContentFragment_media",
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
          name: "PolarisClipsViewerAuthorInfoFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerClipDescriptionFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerAttributionInfoFragment_media",
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
  "PolarisClipsViewerUserFeedbackFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsViewerUserFeedbackFragment_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pk",
            storageKey: null,
          },
          action: "THROW",
          path: "pk",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_viewer_saved",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "comments_disabled",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "like_count",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "code",
            storageKey: null,
          },
          action: "THROW",
          path: "code",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsLikeButtonFragment_media",
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
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsViewerAlbumArtFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsCommentsButton_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopShareButton_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsMobileShareButton_media",
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
  "PolarisPostOptionsMenuQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "6391365064221733",
        metadata: {},
        name: "PolarisPostOptionsMenuQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisClipsDesktopVideoPlayerBackgroundBlurFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsDesktopVideoPlayerBackgroundBlurFragment_media",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pk",
            storageKey: null,
          },
          action: "THROW",
          path: "pk",
        },
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
                  name: "url",
                  storageKey: null,
                },
              ],
              storageKey: null,
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
  "PolarisClipsDesktopVideoPlayerFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PolarisClipsDesktopVideoPlayerFragment_media",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisMediaVideoPlayerFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopVideoPlayerSurfaceFragment_media",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "PolarisClipsDesktopVideoPlayerBackgroundBlurFragment_media",
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
  "PolarisClipsDesktopVideoPlayerSurfaceFragment_media.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "pk",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PolarisClipsDesktopVideoPlayerSurfaceFragment_media",
        selections: [
          { kind: "RequiredField", field: a, action: "THROW", path: "pk" },
          {
            alias: null,
            args: null,
            concreteType: "XDTUserDict",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: a,
                action: "THROW",
                path: "user.pk",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "taken_at",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "organic_tracking_token",
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisMediaVideoPlayerUserFeedback_media",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisMediaVideoPlayerAudioToggleFragment_media",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "PolarisClipsViewerOverlayContentFragment_media",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "usePolarisDashInfoFragment_media",
          },
        ],
        type: "XDTMediaDict",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "IGDSEntryPointPopoverTrigger.react",
  [
    "BasePopoverTrigger.react",
    "CometEntryPointPopoverContainer.react",
    "CometRelay",
    "deepEquals",
    "react",
    "tracePolicyFromResource",
    "useCometPopoverInteractionTracing",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useRef;
    function a(a) {
      var b = a.doNotCloseOnOutsideClick,
        e = a.entryPointParams,
        f = a.fallback,
        g = a.onVisibilityChange,
        l = a.otherProps,
        m = a.popoverEntryPoint,
        n = a.preloadTrigger,
        o = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotCloseOnOutsideClick",
        "entryPointParams",
        "fallback",
        "onVisibilityChange",
        "otherProps",
        "popoverEntryPoint",
        "preloadTrigger",
        "tracePolicy",
      ]);
      o = c("useCometPopoverInteractionTracing")(
        (o = o) != null
          ? o
          : c("tracePolicyFromResource")("igds.popover", m.root),
        "entrypoint",
        n
      );
      var p = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      p = d("CometRelay").useEntryPointLoader(p, m);
      var q = p[0],
        r = p[1];
      p = p[2];
      var s = k(null),
        t = i(
          function () {
            if (e == null) return;
            if (q !== null && c("deepEquals")(s.current, e)) return;
            s.current = e;
            r(e);
          },
          [e, q, r]
        ),
        u = j(
          function () {
            return {
              entryPointParams: e,
              entryPointReference: q,
              load: t,
              otherProps: l,
            };
          },
          [e, q, t, l]
        ),
        v = i(
          function () {
            (arguments.length <= 0 ? void 0 : arguments[0]) && t(),
              g && g.apply(void 0, arguments);
          },
          [t, g]
        );
      return h.jsx(
        c("BasePopoverTrigger.react"),
        babelHelpers["extends"](
          {
            doNotCloseOnOutsideClick: b,
            fallback: f,
            interactionTracker: o,
            onHighIntentPreload: t,
            onLayerDetached: p,
            onVisibilityChange: v,
            popover: c("CometEntryPointPopoverContainer.react"),
            popoverPreloadResource: m.root,
            popoverProps: u,
            preloadTrigger: n,
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDSArrowCwFilled24Icon",
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
            d: "M.08 10.63A11.98 11.98 0 0 1 21.5 4.707V2.284a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-.75.75h-5.625a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75h1.826a9.48 9.48 0 1 0-.566 12.375.745.745 0 0 1 1.012-.061l.775.635a.754.754 0 0 1 .071 1.098A11.992 11.992 0 0 1 .08 10.63Z",
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
  "IGDSExplicitEFilledIcon",
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
            d: "M23.953 20.164c0 1.89-.988 2.836-2.96 2.836H3.007c-1.973 0-2.961-.945-2.961-2.836V2.852C.047.949 1.035 0 3.007 0h17.985c1.973 0 2.961.95 2.961 2.852ZM16.06 17.79v-1.637h-5.7v-4.226h5.399v-1.578H10.36V6.703h5.7V5.066H8.242V17.79Zm0 0",
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
  "IGDSLocationPanoFilledIcon",
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
            d: "M12.053 1a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 10.313a1.604 1.604 0 1 1 1.604-1.604 1.604 1.604 0 0 1-1.604 1.604Z",
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
  "PolarisClipsCommentsButton.react",
  [
    "CometRelay",
    "PolarisClipsCommentsButton_media.graphql",
    "cr:5151",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("PolarisClipsCommentsButton_media.graphql"));
    function a(a) {
      var c = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      c = d("CometRelay").useFragment(j, c);
      return i.jsx(b("cr:5151"), { fragmentKey: c, iconColor: e, shadow: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopShareButton.react",
  [
    "CometRelay",
    "PolarisClipsDesktopShareButton_media.graphql",
    "cr:123",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsDesktopShareButton_media.graphql"));
    function a(a) {
      var c = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      c = d("CometRelay").useFragment(j, c);
      return i.jsx(b("cr:123"), { fragmentKey: c, iconColor: e, shadow: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsLikeButton.react",
  [
    "CometRelay",
    "PolarisClipsLikeButtonFragment_media.graphql",
    "cr:5481",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsLikeButtonFragment_media.graphql"));
    function a(a) {
      var c = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      c = d("CometRelay").useFragment(j, c);
      return i.jsx(b("cr:5481"), { fragmentKey: c, iconColor: e, shadow: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerControlIconContainer.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var c = a.children;
      a = a.numLabel;
      return h.jsx("div", {
        className:
          "x6s0dn4" +
          (a != null
            ? " x78zum5 xieb3on x1ypdohk xdt5ytf"
            : " x78zum5 x1chd833"),
        onClick: function (a) {
          a.stopPropagation();
        },
        ref: b,
        children: c,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisClipsViewerControlIconLabel.react",
  ["IGDSText.react", "PolarisBigNumber.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        "ig-stroke-on-media": "textOnMedia",
        "ig-primary-icon": "primaryText",
      },
      j = {
        labelContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          marginTop: "x1gslohp",
          $$css: !0,
        },
        label: { width: "xezivpi", $$css: !0 },
        labelFilter: { filter: "x1hfr7tm", $$css: !0 },
      };
    function a(a) {
      var b = a.hideCounts,
        d = a.iconColor,
        e = a.isHovered,
        f = a.numLabel,
        g = a.setIsHovered,
        k = a.shadow;
      a = a.textLabel;
      var l = f > 0;
      e = h.jsx(c("IGDSText.react").Body2, {
        color: e === !0 ? "secondaryText" : i[d],
        zeroMargin: !0,
        children:
          b === !0
            ? a
            : h.jsx(c("PolarisBigNumber.react"), {
                shortenNumber: !0,
                value: f,
              }),
      });
      return h.jsx("div", {
        className: "x78zum5 x6s0dn4 x1gslohp",
        onMouseEnter: function () {
          g && g(!0);
        },
        onMouseLeave: function () {
          g && g(!1);
        },
        children: h.jsx("div", {
          className: c("stylex")([j.label, k && j.labelFilter]),
          children: l && e,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerControlIcon.react",
  [
    "IGDSIconButton.react",
    "PolarisClipsViewerControlIconContainer.react",
    "PolarisClipsViewerControlIconLabel.react",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a, b) {
      var e = a.Icon,
        f = a.alt,
        g = a.iconColor,
        j = a.numLabel,
        k = a.onClick;
      a = a.shadow;
      var l = i(!1),
        m = l[0];
      l = l[1];
      return h.jsx(c("PolarisClipsViewerControlIconContainer.react"), {
        numLabel: j,
        ref: b,
        children: h.jsxs(c("IGDSIconButton.react"), {
          hover: d("PolarisUA").isDesktop()
            ? h.jsxs(h.Fragment, {
                children: [
                  h.jsx(e, {
                    alt: f,
                    color: "ig-secondary-icon",
                    shadow: a,
                    size: 24,
                  }),
                  j != null &&
                    h.jsx(c("PolarisClipsViewerControlIconLabel.react"), {
                      iconColor: g,
                      isHovered: !0,
                      numLabel: j,
                      setIsHovered: l,
                      shadow: a,
                    }),
                ],
              })
            : void 0,
          onClick: k,
          padding: 0,
          children: [
            h.jsx(e, { alt: f, color: g, shadow: a, size: 24 }),
            j != null &&
              h.jsx(c("PolarisClipsViewerControlIconLabel.react"), {
                iconColor: g,
                isHovered: m,
                numLabel: j,
                setIsHovered: l,
                shadow: a,
              }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisClipsViewerUseLoggedOutIntentClick.react",
  [
    "CometRelay",
    "PolarisClipsViewerUseLoggedOutIntentClick_user.graphql",
    "PolarisLogger",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "polarisGetUserFromUserInfo",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerUseLoggedOutIntentClick_user.graphql"));
    function a(a) {
      var b = d("CometRelay").useFragment(j, a),
        e = d("PolarisReactRedux").useDispatch();
      return i(
        function (a) {
          if (b != null) {
            var f;
            e({
              type: "USER_INFO_LOADED",
              user: c("polarisGetUserFromUserInfo")(
                babelHelpers["extends"](
                  {
                    pk: b.pk,
                    username:
                      (f = b == null ? void 0 : b.username) != null ? f : "",
                  },
                  b.profile_pic_url != null && {
                    profile_pic_url: b.profile_pic_url,
                  }
                )
              )[b.pk],
            });
          }
          e(
            d("PolarisNavigationActions").openLoggedOutIntentDialog(
              a,
              b == null ? void 0 : b.username
            )
          );
          var g;
          switch (a) {
            case "post_feedback_like":
              g = "likeAttempt";
              break;
            case "post_feedback_comment":
              g = "commentAttempt";
              break;
            case "reel_feedback_direct":
              g = "shareClick";
              break;
            case "follow":
              g = "loggedOutFollowAttempt";
              break;
          }
          g != null && d("PolarisLogger").logAction(g, { source: "reelsTab" });
        },
        [e, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsMobileShareButton.react",
  [
    "CometRelay",
    "PolarisClipsMobileShareButton_media.graphql",
    "PolarisClipsShareButtonWithDialog.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsMobileShareButton_media.graphql"));
    function a(a) {
      var b = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      b = d("CometRelay").useFragment(j, b);
      return i.jsx(c("PolarisClipsShareButtonWithDialog.react"), {
        fragmentKey: b,
        iconColor: e,
        shadow: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerAlbumArt.react",
  [
    "CometRelay",
    "PolarisClipsViewerAlbumArtFragment_media.graphql",
    "PolarisClipsViewerAlbumArtPhoto.react",
    "PolarisFastLink.react",
    "PolarisLinkBuilder",
    "react",
    "usePolarisClipAlbumArtData",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerAlbumArtFragment_media.graphql"));
    function a(a) {
      a = a.mediaFragmentKey;
      a = d("CometRelay").useFragment(j, a);
      a = c("usePolarisClipAlbumArtData")(a);
      var b = a.audioID;
      a = a.thumbnailURI;
      return i.jsx("div", {
        className:
          "xxk0z11 xvy4d1p x1lcm9me x1yr5g0i xrt01vj x10y3i5r x6ikm8r x10wlt62 xj34u2y" +
          ((a == null || a === ""
            ? " x78zum5 x6s0dn4 xl56j7k"
            : "" + (b != null && b !== "" ? "" : "")) +
            (b != null && b !== ""
              ? " x3527qa x1844e7p x1kv0z4h x1qihbgi"
              : "")),
        children:
          b != null && b !== ""
            ? i.jsx(c("PolarisFastLink.react"), {
                href: d("PolarisLinkBuilder").buildClipsAudioPageLink(
                  b.toString()
                ),
                children: i.jsx(c("PolarisClipsViewerAlbumArtPhoto.react"), {
                  thumbnailURI: a,
                }),
              })
            : null,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerAttributionInfoItem.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSExplicitEFilledIcon",
    "IGDSText.react",
    "PolarisClipsViewerMarquee.react",
    "PolarisFastLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Explicit");
    function a(a) {
      var b = a.Icon,
        d = a.alt,
        e = a.flex,
        f = a.href,
        g = a.isExplicit;
      g = g === void 0 ? !1 : g;
      var h = a.labelText,
        k = a.limitMaxWidth;
      k = k === void 0 ? !1 : k;
      var l = a.marquee;
      l = l === void 0 ? !1 : l;
      a = a.onClick;
      h = i.jsx(c("IGDSText.react").Body, {
        color: "webAlwaysWhite",
        maxLines: 1,
        zeroMargin: !0,
        children: h,
      });
      g = g
        ? i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            display: "flex",
            children: [
              h,
              i.jsx(c("IGDSBox.react"), {
                height: 12,
                marginStart: 1,
                width: 12,
                children: i.jsx(c("IGDSExplicitEFilledIcon"), {
                  alt: j,
                  color: "web-always-white",
                  size: 12,
                }),
              }),
            ],
          })
        : h;
      return i.jsx(c("IGDSBox.react"), {
        display: "flex",
        flex: e,
        marginEnd: 2,
        maxWidth: k ? "50%" : void 0,
        overflow: "hidden",
        children: i.jsx(c("PolarisFastLink.react"), {
          href: (h = f) != null ? h : "#",
          onClick: a,
          children: i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            display: "flex",
            children: [
              i.jsx(c("IGDSBox.react"), {
                height: 12,
                marginEnd: 1,
                width: 12,
                children: i.jsx(b, {
                  alt: d,
                  color: "web-always-white",
                  size: 12,
                }),
              }),
              l
                ? i.jsx(c("PolarisClipsViewerMarquee.react"), { children: g })
                : g,
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
  "PolarisClipsViewerAttributionInfo.react",
  [
    "fbt",
    "CometRelay",
    "IGDSBox.react",
    "IGDSLocationPanoFilledIcon",
    "IGDSSparklesFilledIcon",
    "IGDSUserPanoFilledIcon",
    "PolarisClipsVideoPlayerStrings",
    "PolarisClipsViewerAttributionInfoFragment_media.graphql",
    "PolarisClipsViewerAttributionInfoItem.react",
    "PolarisClipsViewerEffectsSheet.react",
    "PolarisLinkBuilder",
    "PolarisPostModalContext.react",
    "polarisGetEffectsAttributionLabel",
    "polarisGetUserTagsAttributionLabel",
    "react",
    "usePolarisClipsAudioAttributionData",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useMemo,
      m = e.useState,
      n =
        i !== void 0
          ? i
          : (i = b("PolarisClipsViewerAttributionInfoFragment_media.graphql")),
      o = h._("Location");
    function p(a, b) {
      var e,
        f = d("PolarisPostModalContext.react").useSetPostModal();
      return l(
        function () {
          var e;
          e = (e = a.creative_config) == null ? void 0 : e.effect_configs;
          if (e != null && e.length > 0) {
            var g;
            return {
              alt: d("PolarisClipsVideoPlayerStrings").EFFECTS_ICON_ALT_TEXT,
              icon: c("IGDSSparklesFilledIcon"),
              label: c("polarisGetEffectsAttributionLabel")(
                e.length,
                (g = (g = e[0]) == null ? void 0 : g.name) != null ? g : ""
              ),
              href:
                e.length === 1
                  ? d("PolarisLinkBuilder").buildEffectPreviewLink(
                      String(e[0].id)
                    )
                  : null,
              onClick:
                e.length > 1
                  ? function () {
                      b(!0);
                      return !1;
                    }
                  : null,
            };
          }
          e = (g = a.usertags) == null ? void 0 : g["in"];
          if (e != null && e.length > 0) {
            return {
              alt: d("PolarisClipsVideoPlayerStrings").USER_ICON_ALT_TEXT,
              icon: c("IGDSUserPanoFilledIcon"),
              label: c("polarisGetUserTagsAttributionLabel")(
                e.length,
                (e = (g = e[0].user) == null ? void 0 : g.username) != null
                  ? e
                  : ""
              ),
              onClick: function () {
                f("tagged");
                return !1;
              },
              href: null,
            };
          }
          g = a.location;
          if (g != null) {
            return {
              alt: o,
              icon: c("IGDSLocationPanoFilledIcon"),
              label: (e = g.name) != null ? e : "",
              href:
                g.pk != null
                  ? d("PolarisLinkBuilder").buildLocationLink({ id: g.pk })
                  : null,
              onClick: null,
            };
          }
          return null;
        },
        [
          (e = a.creative_config) == null ? void 0 : e.effect_configs,
          a.location,
          (e = a.usertags) == null ? void 0 : e["in"],
          b,
          f,
        ]
      );
    }
    function a(a) {
      a = a.mediaFragmentKey;
      var b = m(!1),
        e = b[0],
        f = b[1];
      b = d("CometRelay").useFragment(n, a);
      a = p(b, f);
      a =
        a != null
          ? j.jsx(c("PolarisClipsViewerAttributionInfoItem.react"), {
              alt: a.alt,
              flex: "grow",
              href: a.href,
              Icon: a.icon,
              labelText: a.label,
              onClick: a.onClick,
            })
          : null;
      var g = c("usePolarisClipsAudioAttributionData")(b);
      g =
        g != null &&
        j.jsx(c("PolarisClipsViewerAttributionInfoItem.react"), {
          alt: g.alt,
          flex: "shrink",
          href: g.link,
          Icon: g.icon,
          isExplicit: g.isExplicit,
          labelText: g.label,
          limitMaxWidth: a != null,
          marquee: !0,
        });
      var h = k(function () {
        return f(!1);
      }, []);
      return j.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        display: "flex",
        marginTop: 4,
        children: [
          g,
          a,
          e &&
            ((g = b.creative_config) == null
              ? void 0
              : (a = g.effect_configs) == null
              ? void 0
              : a.length) &&
            ((e = b.creative_config) == null
              ? void 0
              : (g = e.effect_configs) == null
              ? void 0
              : g.length) > 1 &&
            j.jsx(c("PolarisClipsViewerEffectsSheet.react"), {
              onClose: h,
              queryReference: b.creative_config,
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
  "PolarisClipsDesktopCommentsButton.react",
  [
    "CometRelay",
    "PolarisClipsDesktopCommentsButton_media.graphql",
    "cr:1605",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsDesktopCommentsButton_media.graphql"));
    function a(a) {
      var c = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      c = d("CometRelay").useFragment(j, c);
      return i.jsx(b("cr:1605"), { fragmentKey: c, iconColor: e, shadow: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopCommentsDialogRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")(
        "PolarisClipsDesktopCommentsDialog.react"
      ).__setRef("PolarisClipsDesktopCommentsDialogRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopCommentsButtonWithDialog.react",
  [
    "fbt",
    "CometRelay",
    "IGDSCommentPanoOutlineIcon",
    "PolarisClipsDesktopCommentsButtonWithDialog_media.graphql",
    "PolarisClipsDesktopCommentsDialogRoot.entrypoint",
    "PolarisClipsViewerControlIcon.react",
    "PolarisInteractionsLogger",
    "PolarisMediaConstants",
    "deferredLoadComponent",
    "polarisAdsSelectors",
    "react",
    "requireDeferredForDisplay",
    "useIGDSEntryPointDialog",
    "usePolarisMediaOwnerType",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PolarisClipsDesktopCommentsDialogPlaceholder.react"
        ).__setRef("PolarisClipsDesktopCommentsButtonWithDialog.react")
      ),
      m = h._("Comment"),
      n =
        i !== void 0
          ? i
          : (i = b(
              "PolarisClipsDesktopCommentsButtonWithDialog_media.graphql"
            ));
    function a(a) {
      var b = a.fragmentKey,
        e = a.iconColor;
      a = a.shadow;
      var f = d("CometRelay").useFragment(n, b),
        g = d("polarisAdsSelectors").useFeedAdInfo(f.pk, function (a) {
          return a;
        });
      b = c("usePolarisMediaOwnerType")(f);
      var h =
        b === "group"
          ? (b = f.group) == null
            ? void 0
            : b.pk
          : (b = f.user) == null
          ? void 0
          : b.pk;
      b = c("useIGDSEntryPointDialog")(
        c("PolarisClipsDesktopCommentsDialogRoot.entrypoint"),
        { routeParams: {}, routeProps: {} },
        "button",
        function (a) {
          return j.jsx(l, { onClose: a });
        }
      );
      var i = b[0];
      b = k(
        function () {
          h != null &&
            (d("PolarisInteractionsLogger").logInteractionAction({
              containerModule: "reelsTab",
              eventName: "instagram_organic_comment_view_all",
              mediaAuthorId: h,
              mediaId: f.pk,
              mediaType: 2,
            }),
            i({
              mediaId: f.pk,
              isVideo:
                f.product_type === d("PolarisMediaConstants").MediaTypes.VIDEO,
              adInfo: g,
              ownerId: h,
              commentsDisabled: f.commenting_disabled_for_viewer === !0,
            }));
        },
        [h, i, f.pk, f.product_type, f.commenting_disabled_for_viewer, g]
      );
      return j.jsx(c("PolarisClipsViewerControlIcon.react"), {
        alt: m,
        Icon: c("IGDSCommentPanoOutlineIcon"),
        iconColor: e,
        numLabel: (e = f.comment_count) != null ? e : 0,
        onClick: b,
        shadow: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopCommentsDialogPlaceholder.react",
  [
    "IGDSBox.react",
    "IGDSDialogHeader.react",
    "IGDSDialogPlaceholder.react",
    "PolarisGenericStrings",
    "PolarisPostCommentsContainerPlaceholder.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        commentContainer: {
          width: "xh8yej3",
          maxWidth: "x193iq5w",
          paddingTop: "x1p5oq8j",
          $$css: !0,
        },
        innerContent: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          width: "xvr7zsw",
          maxWidth: "xrlsmeg",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.onClose;
      return h.jsx(c("IGDSDialogPlaceholder.react"), {
        fixedHeight: !0,
        fixedWidth: !0,
        innerContentXStyle: i.innerContent,
        onClose: a,
        size: "extraLarge",
        children: h.jsxs(h.Fragment, {
          children: [
            h.jsx(c("IGDSDialogHeader.react"), {
              onClose: a,
              children: d("PolarisGenericStrings").COMMENTS_TEXT,
            }),
            h.jsx(c("IGDSBox.react"), {
              flex: "grow",
              overflow: "auto",
              paddingX: 8,
              children: h.jsx(
                c("PolarisPostCommentsContainerPlaceholder.react"),
                { xStyle: i.commentContainer }
              ),
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
  "PolarisClipsDesktopLikeButton.react",
  [
    "BaseButton.react",
    "CometRelay",
    "PolarisClipsDesktopLikeButtonFragment_media.graphql",
    "PolarisClipsViewerControlIconContainer.react",
    "PolarisClipsViewerControlIconLabel.react",
    "PolarisLikeButton.react",
    "PolarisPostDetailsSectionProvider.react",
    "PolarisPostStrings",
    "react",
    "usePolarisLikeMedia",
    "usePolarisPostLikedByDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k =
        h !== void 0
          ? h
          : (h = b("PolarisClipsDesktopLikeButtonFragment_media.graphql"));
    function a(a) {
      var b,
        e = a.fragmentKey,
        f = a.iconColor;
      a = a.shadow;
      var g = d("CometRelay").useFragment(k, e);
      e = d(
        "PolarisPostDetailsSectionProvider.react"
      ).usePolarisPostDetailsSectionProvider();
      var h = c("usePolarisLikeMedia")({
        analyticsContext: e,
        mediaFragmentKey: g,
        sourceOfLike: "button",
      });
      e = j(!1);
      var l = e[0];
      e = e[1];
      var m = c("usePolarisPostLikedByDialog")(g),
        n = m.onTriggerOpenModal;
      m = m.shouldHideCounts;
      return i.jsx(c("PolarisClipsViewerControlIconContainer.react"), {
        numLabel: g.like_count,
        children: i.jsxs(i.Fragment, {
          children: [
            i.jsx(c("PolarisLikeButton.react"), {
              color: f,
              isHovered: l,
              isLiked: (b = g.has_liked) != null ? b : !1,
              onChange: function (a) {
                return h(g.pk, a);
              },
              padding: 0,
              setIsHovered: e,
              shadow: a,
            }),
            i.jsx(c("BaseButton.react"), {
              onClick: n,
              children: i.jsx(c("PolarisClipsViewerControlIconLabel.react"), {
                hideCounts: m,
                iconColor: f,
                isHovered: l,
                numLabel: (b = g.like_count) != null ? b : 0,
                setIsHovered: e,
                shadow: a,
                textLabel: d("PolarisPostStrings").LIKES_TEXT,
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
  "PolarisClipsDesktopVideoPlayerBackgroundBlur.react",
  [
    "CometImage.react",
    "CometRelay",
    "PolarisClipsDesktopVideoPlayerBackgroundBlurFragment_media.graphql",
    "PolarisViewpointReact.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k =
        h !== void 0
          ? h
          : (h = b(
              "PolarisClipsDesktopVideoPlayerBackgroundBlurFragment_media.graphql"
            )),
      l = {
        blurBackgroundImage: {
          width: "xwzpupj",
          position: "x10l6tqk",
          filter: "x1bs05mj",
          opacity: "x1ptxcow",
          transitionProperty: "x19991ni",
          transitionDuration: "x1d8287x",
          height: "x5yr21d",
          $$css: !0,
        },
        blurBackgroundImageActive: { opacity: "xuzhngd", $$css: !0 },
      };
    function a(a) {
      var b;
      a = a.queryReference;
      a = d("CometRelay").useFragment(k, a);
      var e = j(!1),
        f = e[0],
        g = e[1];
      e = d("PolarisViewpointReact.react").useViewpoint({
        action: function (a) {
          a.percentVisible >= 0.5 ? g(!0) : g(!1);
        },
        id: "video_bg_viewpoint_" + a.pk,
      });
      return ((b = a.image_versions2) == null
        ? void 0
        : (b = b.candidates) == null
        ? void 0
        : (b = b[0]) == null
        ? void 0
        : b.url) != null
        ? i.jsx(c("CometImage.react"), {
            ref: e,
            src: a.image_versions2.candidates[0].url,
            xstyle: [l.blurBackgroundImage, f && l.blurBackgroundImageActive],
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsOverlayInfoFooterCTA.react",
  [
    "PolarisPostOverlayInfoFooterCTA.react",
    "emptyFunction",
    "react",
    "usePolarisShowFooterCTA",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {},
      j = {};
    function a(a) {
      a = a.post;
      a = c("usePolarisShowFooterCTA")(a, 0, i);
      return a == null
        ? null
        : h.jsx("div", {
            className:
              "xw7yly9 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x6ikm8r x10wlt62",
            children: h.jsx(
              d("PolarisPostOverlayInfoFooterCTA.react")
                .PolarisPostOverlayInfoFooterCTARenderer,
              babelHelpers["extends"](
                {
                  analyticsContext: "reelsTab",
                  idsWithDisabledMediaOverlayInfoImpressionLogging: j,
                  onLogOverlayImpression: c("emptyFunction"),
                },
                a
              )
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerAuthor.react",
  [
    "fbt",
    "CometRelay",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisClipsViewerAuthorFragment_media.graphql",
    "PolarisConfig",
    "PolarisFastLink.react",
    "PolarisIGCoreConstants",
    "PolarisLinkBuilder",
    "PolarisLogger",
    "PolarisUserAvatar.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k =
        i !== void 0
          ? i
          : (i = b("PolarisClipsViewerAuthorFragment_media.graphql"));
    function l(a) {
      return h._("{username} reels", [h._param("username", a)]);
    }
    function a(a) {
      var b;
      a = a.fragmentKey;
      a = d("CometRelay").useFragment(k, a);
      b = (b = a.user) == null ? void 0 : b.username;
      a = (a = a.user) == null ? void 0 : a.profile_pic_url;
      return b == null || a == null
        ? null
        : j.jsx(c("PolarisFastLink.react"), {
            "aria-label": l(b),
            href: d("PolarisLinkBuilder").buildUserPathLink(b, "reels"),
            onClick: d("PolarisConfig").isLoggedIn()
              ? null
              : function () {
                  d("PolarisLogger").logAction("profileClick", {
                    source: "reelsTab",
                  });
                },
            children: j.jsxs(c("IGDSBox.react"), {
              alignItems: "center",
              direction: "row",
              children: [
                j.jsx("div", {
                  className: "xq8finb",
                  children: j.jsx("div", {
                    children: j.jsx(c("PolarisUserAvatar.react"), {
                      isLink: !1,
                      profilePictureUrl: a,
                      size: c("PolarisIGCoreConstants").AVATAR_SIZES.small,
                      username: b,
                    }),
                  }),
                }),
                j.jsx(c("IGDSText.react"), {
                  color: "webAlwaysWhite",
                  weight: "semibold",
                  children: b,
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
  "PolarisClipsViewerFollowButton.react",
  [
    "CometRelay",
    "IGDSButton.react",
    "PolarisClipsViewerFollowButtonFragment_media.graphql",
    "PolarisClipsViewerUseLoggedOutIntentClick.react",
    "PolarisConfig",
    "PolarisPostStrings",
    "react",
    "usePolarisFollowUser",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useCallback,
      k =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerFollowButtonFragment_media.graphql"));
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").useFragment(k, a);
      var b = a.user,
        e = c("usePolarisFollowUser")(),
        f = ((a = b.friendship_status) == null ? void 0 : a.following) === !0,
        g = d("PolarisConfig").isLoggedIn(),
        h = c("PolarisClipsViewerUseLoggedOutIntentClick.react")(b);
      a = j(
        function () {
          g ? e && b != null && e(b.pk, !f) : h("follow");
        },
        [b, f, g, e, h]
      );
      return g && b.friendship_status == null
        ? null
        : i.jsx(c("IGDSButton.react"), {
            display: "block",
            isLoading: !1,
            label: f
              ? d("PolarisPostStrings").FOLLOWING_TEXT
              : d("PolarisPostStrings").FOLLOW_TEXT,
            onClick: a,
            variant: "white_link",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerAuthorInfo.react",
  [
    "CometRelay",
    "IGDSBox.react",
    "IGDSMiddleDot.react",
    "PolarisClipsViewerAuthor.react",
    "PolarisClipsViewerAuthorInfoFragment_media.graphql",
    "PolarisClipsViewerFollowButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerAuthorInfoFragment_media.graphql")),
      k = {
        middleDot: {
          display: "x1lliihq",
          marginStart: "x1mnrxsn",
          marginEnd: "x1w0mnb",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.fragmentKey;
      a = d("CometRelay").useFragment(j, a);
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        children: [
          i.jsx(c("PolarisClipsViewerAuthor.react"), { fragmentKey: a }),
          i.jsx(c("IGDSMiddleDot.react"), {
            color: "webAlwaysWhite",
            xstyle: k.middleDot,
          }),
          i.jsx(c("PolarisClipsViewerFollowButton.react"), { fragmentKey: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useContentRect",
  ["react", "useResizeObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a() {
      var a = i(),
        b = a[0],
        d = a[1];
      a = h(function (a) {
        return d(a);
      }, []);
      a = c("useResizeObserver")(a);
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerClipDescription.react",
  [
    "CometRelay",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisClipsViewerClipDescriptionFragment_media.graphql",
    "PolarisIGCorePressable",
    "PolarisPostStrings",
    "emptyFunction",
    "polarisGetIGFormattedText",
    "react",
    "useContentRect",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo,
      k =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerClipDescriptionFragment_media.graphql"));
    function l() {
      var a = c("useContentRect")(),
        b = a[0];
      b = b === void 0 ? {} : b;
      b = b.width;
      b = b === void 0 ? 0 : b;
      a = a[1];
      return [b, a];
    }
    function m(a) {
      a = a.needsSeeMore;
      a = a === void 0 ? !0 : a;
      return i.jsxs("span", {
        "aria-hidden": !0,
        className:
          "x1rg5ohu xsgj6o6 x1c4vz4f x2lah0s xdl72j9 xlej3yl" +
          (a ? "" : " xlshs6z x10l6tqk"),
        children: ["\u2026 ", d("PolarisPostStrings").MORE_ELLIPSIS_TEXT],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.description;
      a = a.onExpand;
      return i.jsx(c("PolarisIGCorePressable"), {
        onPress: a,
        children: i.jsx(c("IGDSBox.react"), {
          marginTop: 4,
          children: i.jsxs("div", {
            className:
              "x1i0vuye xvs91rp x1g9anri xd4r4e8 x78zum5 xmix8c7 x6ikm8r x10wlt62",
            children: [
              i.jsx("span", {
                className: "xuxw1ft x6ikm8r x10wlt62",
                children: b,
              }),
              i.jsx(m, {}),
            ],
          }),
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.description;
      a = a.onExpand;
      var d = l(),
        e = d[0];
      d = d[1];
      var f = l(),
        g = f[0];
      f = f[1];
      g = g > e;
      return i.jsx(c("PolarisIGCorePressable"), {
        onPress: g ? a : c("emptyFunction"),
        children: i.jsxs(c("IGDSBox.react"), {
          containerRef: d,
          marginTop: 4,
          position: "relative",
          children: [
            i.jsx("div", {
              className:
                "x1i0vuye xvs91rp x1g9anri xd4r4e8 x78zum5 xmix8c7 x6ikm8r x10wlt62 xlshs6z x10l6tqk",
              children: i.jsx("span", {
                className: "xuxw1ft",
                ref: f,
                children: b,
              }),
            }),
            i.jsxs("div", {
              className:
                "x1i0vuye xvs91rp x1g9anri xd4r4e8 x78zum5 xmix8c7 x6ikm8r x10wlt62",
              children: [
                i.jsx("span", {
                  className: "xuxw1ft x6ikm8r x10wlt62",
                  children: b,
                }),
                i.jsx(m, { needsSeeMore: g }),
              ],
            }),
          ],
        }),
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.expandedOverflow,
        e = a.fragmentKey,
        f = a.isExpanded;
      a = a.onExpand;
      e = d("CometRelay").useFragment(k, e);
      var g = e.caption;
      e = j(
        function () {
          return (g == null ? void 0 : g.text) == null
            ? null
            : c("polarisGetIGFormattedText")(g == null ? void 0 : g.text, {
                className: "x1s688f xvs91rp x1g9anri x1vlc3oy",
              });
        },
        [g == null ? void 0 : g.text]
      );
      if (e == null) return null;
      if (f)
        return i.jsx(c("IGDSBox.react"), {
          flex: "shrink",
          marginTop: 4,
          overflow: b,
          children: i.jsx(c("IGDSText.react").Body, {
            color: "webAlwaysWhite",
            zeroMargin: !0,
            children: e,
          }),
        });
      f = e.length > 1 ? n : o;
      return i.jsx(f, { description: e[0], onExpand: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerOverlayContent.react",
  [
    "CometRelay",
    "IGDSBox.react",
    "PolarisClipsOverlayInfoFooterCTA.react",
    "PolarisClipsViewerAttributionInfo.react",
    "PolarisClipsViewerAuthorInfo.react",
    "PolarisClipsViewerClipDescription.react",
    "PolarisClipsViewerOverlayContentFragment_media.graphql",
    "PolarisReactRedux",
    "polarisPostSelectors",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useRef,
      l = e.useState,
      m =
        h !== void 0
          ? h
          : (h = b("PolarisClipsViewerOverlayContentFragment_media.graphql")),
      n = {
        root: {
          minWidth: "xeuugli",
          minHeight: "x2lwn1j",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          transitionProperty: "xrok2fi",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xz4gly6",
          $$css: !0,
        },
      };
    function o(a, b) {
      var d = c("usePrevious")(a);
      return a || b || d === !0;
    }
    function p(a, b, c) {
      var d = l(null),
        e = d[0],
        f = d[1];
      j(
        function () {
          var b = c.current;
          b != null &&
            a &&
            f(function (a) {
              return a != null ? a : b.clientHeight;
            });
        },
        [a, c]
      );
      return b ? "50%" : (d = e) != null ? d : "none";
    }
    function a(a) {
      var b = a.fragmentKey,
        e = a.isExpanded;
      a = a.onExpand;
      var f = d("CometRelay").useFragment(m, b);
      b = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisPostSelectors").getPostOrNullById(
          a,
          f.id.split("_")[0]
        );
      });
      var g = l(!1),
        h = g[0],
        q = g[1],
        r = k(null);
      g = p(b != null, e, r);
      j(function () {
        var a = function () {
            q(!0);
          },
          b = function () {
            q(!1);
          },
          c = r.current;
        c == null ? void 0 : c.addEventListener("transitionstart", a);
        c == null ? void 0 : c.addEventListener("transitionend", b);
        return function () {
          c == null ? void 0 : c.removeEventListener("transitionstart", a),
            c == null ? void 0 : c.removeEventListener("transitionend", b);
        };
      }, []);
      e = o(e, h);
      return i.jsxs(c("IGDSBox.react"), {
        containerRef: r,
        flex: "grow",
        marginEnd: 2,
        maxHeight: g,
        xstyle: n.root,
        children: [
          i.jsx(c("PolarisClipsViewerAuthorInfo.react"), { fragmentKey: f }),
          i.jsx(c("PolarisClipsViewerClipDescription.react"), {
            expandedOverflow: h ? "hidden" : "auto",
            fragmentKey: f,
            isExpanded: e,
            onExpand: a,
          }),
          i.jsx(c("PolarisClipsViewerAttributionInfo.react"), {
            mediaFragmentKey: f,
          }),
          i.jsx(c("PolarisClipsOverlayInfoFooterCTA.react"), { post: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsDesktopVideoPlayerSurface.react",
  [
    "CometRelay",
    "IGDSBox.react",
    "PolarisClipsDesktopVideoPlayerSurfaceFragment_media.graphql",
    "PolarisClipsViewerOverlayContent.react",
    "PolarisIGCorePressable",
    "PolarisMediaVideoPlayerAudioToggle.react",
    "PolarisMediaVideoPlayerPlayButton.react",
    "VideoPlayerHooks",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerSurface.react",
    "emptyFunction",
    "react",
    "useBoolean",
    "usePolarisDashInfo",
    "usePolarisVideoPressInteraction",
    "usePolarisVideoShowPlayButton",
    "usePolarisVideoXControllerLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b(
              "PolarisClipsDesktopVideoPlayerSurfaceFragment_media.graphql"
            ));
    function a(a) {
      a = a.queryReference;
      a = d("CometRelay").useFragment(j, a);
      var b = c("usePolarisDashInfo")(a),
        e = d("VideoPlayerHooks").useLastPauseReason();
      e =
        c("usePolarisVideoShowPlayButton")() &&
        e !== null &&
        e !== "autoplay_initiated";
      var f = c("usePolarisVideoPressInteraction")({
          shouldUnmuteOnPlay: !0,
          playButtonShowing: e,
        }),
        g = c("useBoolean")(!1);
      c("usePolarisVideoXControllerLogger")({
        adInfo: null,
        analyticsContext: "reelsTab",
        carouselParentId: null,
        dashInfo: b,
        id: a.pk,
        owner: {
          id: (b = (b = a.user) == null ? void 0 : b.pk) != null ? b : "",
        },
        postedAt: Number(a.taken_at),
        trackingToken: a.organic_tracking_token,
      });
      b = function (a) {
        a.stopPropagation(), g.setTrue();
      };
      var h = function (a) {
        a.stopPropagation(), g.setFalse();
      };
      return i.jsx(c("VideoPlayerSurface.react"), {
        children: i.jsx("div", {
          className: "x5yr21d xh8yej3 x78zum5 xdt5ytf",
          children: i.jsxs(
            d("VideoPlayerInteractionOverlay.react")
              .VideoPlayerInteractionOverlay,
            {
              pressInteraction: f,
              children: [
                i.jsxs(c("PolarisIGCorePressable"), {
                  className:
                    "x10l6tqk x78zum5 x1qughib xdt5ytf x17qophe xds687c x13vifvy x1ey2m1c" +
                    (g.value ? " xxbzj5q" : " xutac5l"),
                  onPointerDown: function (a) {
                    g.value && a.stopPropagation();
                  },
                  onPress: g.value ? h : c("emptyFunction"),
                  children: [
                    i.jsx(c("IGDSBox.react"), {
                      alignItems: "end",
                      marginEnd: 2,
                      marginTop: 2,
                      children: i.jsx(
                        c("PolarisMediaVideoPlayerAudioToggle.react"),
                        { queryReference: a }
                      ),
                    }),
                    i.jsx(c("IGDSBox.react"), {
                      alignItems: "end",
                      direction: "row",
                      display: "flex",
                      flex: "grow",
                      padding: 4,
                      width: "100%",
                      children: i.jsx(
                        c("PolarisClipsViewerOverlayContent.react"),
                        {
                          fragmentKey: a,
                          isExpanded: g.value,
                          onExpand: g.value ? c("emptyFunction") : b,
                        }
                      ),
                    }),
                  ],
                }),
                i.jsx(c("PolarisMediaVideoPlayerPlayButton.react"), {
                  onClick: f.handler,
                  showButton: e,
                }),
              ],
            }
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
  "PolarisClipsDesktopVideoPlayer.react",
  [
    "CometRelay",
    "PolarisClipsDesktopVideoPlayerBackgroundBlur.react",
    "PolarisClipsDesktopVideoPlayerFragment_media.graphql",
    "PolarisClipsDesktopVideoPlayerSurface.react",
    "PolarisMediaVideoPlayer.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b("PolarisClipsDesktopVideoPlayerFragment_media.graphql"));
    function a(a) {
      a = a.queryReference;
      a = d("CometRelay").useFragment(j, a);
      return i.jsxs("div", {
        className: "x1n2onr6 x78zum5 xl56j7k xh8yej3",
        children: [
          i.jsx(c("PolarisClipsDesktopVideoPlayerBackgroundBlur.react"), {
            queryReference: a,
          }),
          i.jsx("div", {
            className:
              "x1lcm9me x1yr5g0i xrt01vj x10y3i5r x6ikm8r x10wlt62 x5yr21d xh8yej3 x78zum5",
            children: i.jsx(c("PolarisMediaVideoPlayer.react"), {
              analyticsContext: "reelsTab",
              queryReference: a,
              children: i.jsx(
                c("PolarisClipsDesktopVideoPlayerSurface.react"),
                { queryReference: a }
              ),
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
  "PolarisClipsTabDesktopClipError.react",
  [
    "IGDSArrowCwFilled24Icon",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSText.react",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: {
          backgroundColor: "x4fwpa6",
          width: "xh8yej3",
          height: "x5yr21d",
          display: "x78zum5",
          $$css: !0,
        },
      };
    function a() {
      return h.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
        xstyle: i.container,
        children: [
          h.jsx(c("IGDSBox.react"), {
            marginBottom: 8,
            children: h.jsx(c("IGDSArrowCwFilled24Icon"), {
              alt: d("PolarisGenericStrings").RETRY_TEXT,
              color: "ig-primary-icon",
              size: 24,
            }),
          }),
          h.jsx(c("IGDSBox.react"), {
            marginBottom: 4,
            children: h.jsx(c("IGDSText.react"), {
              color: "primaryText",
              size: "title",
              children: d("PolarisGenericStrings").CLIPS_PLAYER_FAILURE_TEXT,
            }),
          }),
          h.jsx(c("IGDSBox.react"), {
            marginBottom: 8,
            children: h.jsx(c("IGDSText.react"), {
              color: "secondaryText",
              weight: "light",
              children: d("PolarisGenericStrings").CLIPS_PLAYER_FAILURE_SUBTEXT,
            }),
          }),
          h.jsx(c("IGDSButton.react"), {
            display: "block",
            label: "Reload",
            onClick: function () {
              return window.location.reload();
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
  "PolarisPostOptionsMenuRoot.entrypoint",
  ["JSResourceForInteraction", "PolarisPostOptionsMenuQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            polarisPostOptionsMenuQuery: {
              options: {},
              parameters: c("PolarisPostOptionsMenuQuery$Parameters"),
              variables: { shortcode: a.routeParams.shortcode },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PolarisPostOptionsMenu.next"
      ).__setRef("PolarisPostOptionsMenuRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsViewerOptionsButton.react",
  [
    "fbt",
    "IGDSEntryPointPopoverTrigger.react",
    "IGDSMoreHorizontalPanoOutlineIcon",
    "PolarisClipsViewerControlIcon.react",
    "PolarisPostModalContext.react",
    "PolarisPostOptionsMenuRoot.entrypoint",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = h._("More");
    function l(a) {
      var b = a.iconColor;
      a = a.shadow;
      var e = d("PolarisPostModalContext.react").useSetPostModal(),
        f = j(
          function () {
            e("options");
          },
          [e]
        );
      return i.jsx(c("PolarisClipsViewerControlIcon.react"), {
        alt: k,
        Icon: c("IGDSMoreHorizontalPanoOutlineIcon"),
        iconColor: b,
        onClick: f,
        shadow: a,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.iconColor,
        d = a.shadow;
      a = a.shortcode;
      return i.jsx(c("IGDSEntryPointPopoverTrigger.react"), {
        align: "start",
        entryPointParams: { routeParams: { shortcode: a } },
        otherProps: {},
        popoverEntryPoint: c("PolarisPostOptionsMenuRoot.entrypoint"),
        position: "above",
        preloadTrigger: "button",
        children: function (a, e, f) {
          return i.jsx(c("PolarisClipsViewerControlIcon.react"), {
            alt: k,
            Icon: c("IGDSMoreHorizontalPanoOutlineIcon"),
            iconColor: b,
            onClick: e,
            ref: a,
            shadow: d,
          });
        },
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return c("gkx")("8429")
        ? i.jsx(m, babelHelpers["extends"]({}, a))
        : i.jsx(l, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XPolarisSavedCollectionsControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{username}/saved/{slug}/{?collection_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisClipsViewerUserFeedback.react",
  [
    "fbt",
    "CometRelay",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSHeartPanoOutlineIcon",
    "PolarisClipsCommentsButton.react",
    "PolarisClipsDesktopShareButton.react",
    "PolarisClipsLikeButton.react",
    "PolarisClipsMobileShareButton.react",
    "PolarisClipsViewerAlbumArt.react",
    "PolarisClipsViewerControlIcon.react",
    "PolarisClipsViewerControlIconContainer.react",
    "PolarisClipsViewerOptionsButton.react",
    "PolarisClipsViewerUseLoggedOutIntentClick.react",
    "PolarisClipsViewerUserFeedbackFragment_media.graphql",
    "PolarisConfig",
    "PolarisPostDetailsSectionProvider.react",
    "PolarisSaveButton.react",
    "PolarisSavedPostsTypes",
    "PolarisUA",
    "XPolarisSavedCollectionsControllerRouteBuilder",
    "nullthrows",
    "react",
    "useIGDSToaster",
    "usePolarisSaveMedia",
    "usePolarisViewer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = h._("Like"),
      m =
        i !== void 0
          ? i
          : (i = b("PolarisClipsViewerUserFeedbackFragment_media.graphql"));
    function a(a) {
      var b = a.containerXStyle,
        e = a.fragmentKey,
        f = a.iconColor;
      a = a.shadow;
      var g = d("CometRelay").useFragment(m, e),
        i = c("usePolarisViewer")(),
        n = c("PolarisClipsViewerUseLoggedOutIntentClick.react")(g.user);
      e = d(
        "PolarisPostDetailsSectionProvider.react"
      ).usePolarisPostDetailsSectionProvider();
      var o = c("usePolarisSaveMedia")(e),
        p = c("useIGDSToaster")(),
        q = p.add;
      p = k(
        function (a) {
          o(g.pk, a);
          if (!a) return;
          a = c("XPolarisSavedCollectionsControllerRouteBuilder").buildUri({
            username: c("nullthrows")(i == null ? void 0 : i.username),
            slug: d("PolarisSavedPostsTypes").ALL_POSTS_SAVED_COLLECTION_PATH,
            collection_id: d("PolarisSavedPostsTypes").SAVED_COLLECTION_TYPE
              .ALL_MEDIA_AUTO_COLLECTION,
          });
          q(
            {
              message: h._("Your item has been saved."),
              actionComponent: j.jsx(c("IGDSButton.react"), {
                display: "block",
                href: a.toString(),
                label: h._("View your saved posts"),
                variant: "primary_link",
              }),
              target: "bottom",
            },
            { duration: 3e3 }
          );
        },
        [q, g.pk, o, i == null ? void 0 : i.username]
      );
      return j.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        display: "flex",
        flex: "none",
        marginBottom: 1,
        xstyle: b,
        children: [
          d("PolarisConfig").isLoggedIn()
            ? j.jsx(c("PolarisClipsLikeButton.react"), {
                fragmentKey: g,
                iconColor: f,
                shadow: a,
              })
            : j.jsx(c("PolarisClipsViewerControlIcon.react"), {
                alt: l,
                Icon: c("IGDSHeartPanoOutlineIcon"),
                iconColor: f,
                numLabel: (b = g.like_count) != null ? b : 0,
                onClick: function () {
                  return n("post_feedback_like");
                },
                shadow: a,
              }),
          g.comments_disabled !== !0
            ? j.jsx(c("PolarisClipsCommentsButton.react"), {
                fragmentKey: g,
                iconColor: f,
                shadow: a,
              })
            : null,
          d("PolarisUA").isDesktop()
            ? j.jsx(c("PolarisClipsDesktopShareButton.react"), {
                fragmentKey: g,
                iconColor: f,
                shadow: a,
              })
            : j.jsx(c("PolarisClipsMobileShareButton.react"), {
                fragmentKey: g,
                iconColor: f,
                shadow: a,
              }),
          d("PolarisConfig").isLoggedIn() &&
            d("PolarisUA").isDesktop() &&
            j.jsx(c("PolarisClipsViewerControlIconContainer.react"), {
              numLabel: null,
              children: j.jsx(c("PolarisSaveButton.react"), {
                analyticsContext: e,
                isSaved: g.has_viewer_saved === !0,
                onChange: p,
                padding: 0,
                postId: g.pk,
              }),
            }),
          j.jsx(c("PolarisClipsViewerOptionsButton.react"), {
            iconColor: f,
            shadow: a,
            shortcode: g.code,
          }),
          j.jsx(c("PolarisClipsViewerAlbumArt.react"), { mediaFragmentKey: g }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopClip.react",
  [
    "CometErrorBoundary.react",
    "CometRelay",
    "PolarisClipsDesktopVideoPlayer.react",
    "PolarisClipsTabDesktopClipError.react",
    "PolarisClipsTabDesktopClipFragment_media.graphql",
    "PolarisClipsTabHelpers",
    "PolarisClipsViewerUserFeedback.react",
    "PolarisHoldoutChecks",
    "PolarisOrganicImpressionAction",
    "PolarisPostModalContext.next",
    "PolarisViewpointReact.react",
    "PolarisVpvdImpressionAction",
    "react",
    "stylex",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useLayoutEffect,
      k = e.useMemo,
      l = e.useState,
      m = "clips_tab_desktop_page",
      n = 0.5,
      o =
        h !== void 0
          ? h
          : (h = b("PolarisClipsTabDesktopClipFragment_media.graphql"));
    function a(a) {
      var b = a.clipIndex,
        e = a.onClipVisible;
      a = a.queryReference;
      var f = c("PolarisHoldoutChecks").H12023.rollout(),
        g = d("CometRelay").useFragment(o, a);
      a = k(
        function () {
          var a;
          return [
            function (a) {
              if (a.percentVisible >= n) {
                e(g.pk, (a = g.code) != null ? a : "", b);
              }
            },
            d("PolarisOrganicImpressionAction").makeClipImpressionAction(
              { id: g.pk, owner: { id: (a = g.actor_fbid) != null ? a : "" } },
              f ? "reelsTab" : m
            ),
          ];
        },
        [b, g.actor_fbid, g.code, g.pk, e, f]
      );
      f &&
        a.push(
          d("PolarisVpvdImpressionAction").makeClipVpvdImpressionAction(
            { id: g.pk },
            b,
            "reelsTab"
          )
        );
      var h = l(0),
        p = h[0],
        q = h[1],
        r = p * (9 / 16),
        s = c("useThrottled")(function () {
          q(d("PolarisClipsTabHelpers").getReelMediaContainerHeight());
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
      var t = d("PolarisClipsTabHelpers").getClipsContainerStyles();
      return i.jsx(
        d("PolarisPostModalContext.next").PolarisPostModalContextProvider,
        {
          queryReference: g,
          children: i.jsx(
            d("PolarisViewpointReact.react").Viewpoint,
            {
              action: a,
              id: g.pk,
              children: function (a) {
                return i.jsxs("div", {
                  className: c("stylex")(t.container),
                  ref: a,
                  children: [
                    i.jsx("div", {
                      className: c("stylex")(t.container),
                      style: {
                        height: p > 0 ? p + "px" : "100%",
                        width: r > 0 ? r + "px" : void 0,
                      },
                      children: i.jsx(c("CometErrorBoundary.react"), {
                        fallback: function () {
                          return i.jsx(
                            c("PolarisClipsTabDesktopClipError.react"),
                            {}
                          );
                        },
                        children: i.jsx(
                          c("PolarisClipsDesktopVideoPlayer.react"),
                          { queryReference: g }
                        ),
                      }),
                    }),
                    i.jsx(c("PolarisClipsViewerUserFeedback.react"), {
                      containerXStyle: t.ufi,
                      fragmentKey: g,
                      iconColor: "ig-primary-icon",
                      shadow: !1,
                    }),
                  ],
                });
              },
            },
            g.pk
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
  "PolarisClipsTabDesktopClipContainer.react",
  ["IGDSBox.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            className:
              "x1qjc9v5 x1bhewko x9f619 x78zum5 xl56j7k xh8yej3 xgv127d xg7h5cd x1xfsgkm xqmdsaz",
            children: a,
          }),
          h.jsx(c("IGDSBox.react"), { height: 16, width: "100%" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopClipPlaceholder.react",
  [
    "IGDSBox.react",
    "IGDSGlimmer.react",
    "PolarisClipsTabHelpers",
    "react",
    "stylex",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useState,
      k = {
        background: {
          backgroundColor: "x8x6lru",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          $$css: !0,
        },
        glimmerColor: { backgroundColor: "x5keihi", $$css: !0 },
        icon: {
          height: "x1gnnpzl",
          width: "x1849jeq",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          marginEnd: "x1emribx",
          $$css: !0,
        },
        longLine: { width: "xycev2y", height: "x1kpxq89", $$css: !0 },
        shortLine: { width: "x3hqpx7", height: "x1kpxq89", $$css: !0 },
        margin: { marginTop: "x14vqqas", $$css: !0 },
      };
    function a(a) {
      a = j(0);
      var b = a[0],
        e = a[1];
      a = b * (9 / 16);
      var f = c("useThrottled")(function () {
        e(d("PolarisClipsTabHelpers").getReelMediaContainerHeight());
      }, d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE);
      i(
        function () {
          f();
          window.addEventListener("resize", f);
          return function () {
            window.removeEventListener("resize", f);
          };
        },
        [f]
      );
      var g = d("PolarisClipsTabHelpers").getClipsContainerStyles();
      return h.jsxs(c("IGDSBox.react"), {
        direction: "column",
        display: "flex",
        children: [
          h.jsxs("div", {
            className: c("stylex")(g.container),
            children: [
              h.jsx("div", {
                className: c("stylex")([g.container, k.background]),
                style: {
                  height: b > 0 ? b + "px" : "100%",
                  width: a > 0 ? a + "px" : void 0,
                },
                children: h.jsxs(c("IGDSBox.react"), {
                  direction: "column",
                  display: "flex",
                  height: "100%",
                  justifyContent: "end",
                  padding: 4,
                  width: "100%",
                  children: [
                    h.jsxs(c("IGDSBox.react"), {
                      alignItems: "center",
                      direction: "row",
                      display: "flex",
                      children: [
                        h.jsx(c("IGDSGlimmer.react"), {
                          index: 0,
                          xstyle: [k.icon, k.glimmerColor],
                        }),
                        h.jsx(c("IGDSGlimmer.react"), {
                          index: 0,
                          xstyle: [k.longLine, k.glimmerColor],
                        }),
                      ],
                    }),
                    h.jsx(c("IGDSGlimmer.react"), {
                      index: 1,
                      xstyle: [k.longLine, k.margin, k.glimmerColor],
                    }),
                    h.jsx(c("IGDSGlimmer.react"), {
                      index: 2,
                      xstyle: [k.shortLine, k.margin, k.glimmerColor],
                    }),
                  ],
                }),
              }),
              h.jsx("div", {
                className: c("stylex")(g.ufi),
                style: { height: "inherit" },
              }),
            ],
          }),
          h.jsx("div", {
            style: {
              height: "calc(100vh - 32px - " + b + "px)",
              width: "100%",
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
  "XPolarisClipsTabControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/reels/{?shortcode}/",
      Object.freeze({ launch_app_store: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "usePolarisClipsSeenState",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;
    function i(a) {
      a = Array.from(a.current).map(function (a) {
        return { id: a };
      });
      return JSON.stringify(a);
    }
    function a(a, b, c) {
      var d = h(new Set());
      function e(e, f) {
        if (e) return;
        e = { container_module: a, seen_reels: i(d) };
        c != null &&
          (e = babelHelpers["extends"]({}, e, {
            chaining_media_id: c,
            should_refetch_chaining_media: !1,
          }));
        d.current = new Set();
        f(b, { UNSTABLE_extraVariables: { data: e } });
      }
      return { seenClipIDsPerPageRef: d, formatSeenStateDataAndLoadNext: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBrowserStorage",
  ["FBLogger", "isStringNullOrEmpty", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a, b, d) {
      var e = h(
          function () {
            if (!a || b == null) return d;
            var e = a.getItem(b);
            try {
              return c("isStringNullOrEmpty")(e) ? d : JSON.parse(e);
            } catch (a) {
              return d;
            }
          },
          [d, b, a]
        ),
        f = k(e),
        g = f[0],
        l = f[1],
        m = j(g),
        n = j(!1);
      i(
        function () {
          if (!a || b == null) return;
          function d(d) {
            if (!n.current) return;
            d = JSON.stringify(d);
            if (d == null) return;
            try {
              a.setItem(b, d), (n.current = !1);
            } catch (b) {
              d = b;
              d != null && d.code === 22 && a.clear();
              var e = c("FBLogger")("use_local_storage");
              d instanceof Error && (e = e.catching(d));
              e.warn("Cannot save to local storage.");
            }
          }
          d(g);
          return function () {
            d(m.current);
          };
        },
        [b, a, g]
      );
      var o = h(function (a) {
        typeof a === "function" ? (m.current = a(m.current)) : (m.current = a);
        n.current = !0;
        return l(a);
      }, []);
      f = h(
        function (a) {
          o(a), (n.current = !1);
        },
        [o]
      );
      var p = h(
        function () {
          var a = e();
          o(a);
          n.current = !1;
          return a;
        },
        [e, o]
      );
      return [g, o, { refreshValue: p, setValueWithoutPersistence: f }];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSessionStorage",
  ["WebStorage", "useBrowserStorage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("WebStorage").getSessionStorage();
    function a(a, b) {
      return c("useBrowserStorage")(h, a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisClipsLastViewedClip",
  ["useSessionStorage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("useSessionStorage")("last_viewed_clip", null);
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisClipsTabDesktopPositionRestore",
  [
    "PolarisClipsTabDesktopContainerElementProvider.react",
    "PolarisScrollPositionHistory",
    "react",
    "usePolarisClipsLastViewedClip",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useRef;
    function a(a) {
      var b = d(
          "PolarisClipsTabDesktopContainerElementProvider.react"
        ).usePolarisClipsTabDesktopContainerElementProvider(),
        e = b.element;
      b = b.setElement;
      var f = c("usePolarisClipsLastViewedClip")(),
        g = f[0];
      f = f[1];
      g = (g = g) != null ? g : {};
      var j = g.id,
        k = g.idx,
        l = g.y;
      a =
        (a =
          a.xdt_api__v1__clips__home__connection.edges[
            (g = k) != null ? g : -1
          ]) == null
          ? void 0
          : (k = a.node) == null
          ? void 0
          : (g = k.media) == null
          ? void 0
          : g.pk;
      var m = j != null && a != null && a === j,
        n = i(!1);
      h(
        function () {
          n.current === !1 &&
            m &&
            l != null &&
            e != null &&
            (d("PolarisScrollPositionHistory").setScrollPosition(e, 0, l),
            (n.current = !0));
        },
        [e, m, l]
      );
      return { containerEl: e, setContainerEl: b, setLastViewedClip: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopContainer.react",
  [
    "CometRelay",
    "PolarisClipsTabDesktopClip.react",
    "PolarisClipsTabDesktopClipContainer.react",
    "PolarisClipsTabDesktopFragment",
    "PolarisErrorBoundary.react",
    "XPolarisClipsTabControllerRouteBuilder",
    "nullthrows",
    "react",
    "replaceURL",
    "usePolarisClipsSeenState",
    "usePolarisClipsTabDesktopPositionRestore",
    "useThrottled",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = 10,
      l = "clips_tab_desktop_page";
    function m(a) {
      return (a = a == null ? void 0 : a.scrollTop) != null ? a : 0;
    }
    function a(a) {
      var b = d("CometRelay").usePaginationFragment(
          c("PolarisClipsTabDesktopFragment"),
          a.queryReference
        ),
        e = b.data,
        f = b.hasNext,
        g = b.isLoadingNext,
        n = b.loadNext;
      b = c("usePolarisClipsTabDesktopPositionRestore")(e);
      var o = b.containerEl,
        p = b.setContainerEl,
        q = b.setLastViewedClip,
        r = j(
          function () {
            return e.xdt_api__v1__clips__home__connection.edges.map(function (
              a
            ) {
              return (a = a.node.media) == null ? void 0 : a.code;
            });
          },
          [e.xdt_api__v1__clips__home__connection.edges]
        ),
        s = i(
          function (a) {
            var b = r.length;
            a = r.indexOf(a);
            return a >= b - 3;
          },
          [r]
        );
      b = c("usePolarisClipsSeenState")(l, k, a.chainingMediaID);
      var t = b.formatSeenStateDataAndLoadNext,
        u = b.seenClipIDsPerPageRef,
        v = i(
          function () {
            t(g, n);
          },
          [g, n, t]
        ),
        w = i(
          function (a) {
            a = s(a);
            f && a && !g && v();
          },
          [s, f, g, v]
        );
      a = i(
        function (a, b, d) {
          var e = c("XPolarisClipsTabControllerRouteBuilder")
            .buildUri({ shortcode: b })
            .getPath();
          c("replaceURL")(e);
          q({ id: a, idx: d, y: m(o) });
          u.current.add(a);
          w(b);
        },
        [o, w, u, q]
      );
      var x = c("useThrottled")(a);
      return h.jsx("div", {
        className:
          "x168l2et x1dr59a3 x1odjw0f xvbhtw8 x1p6e16i x1miatn0 x9f619 x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck",
        ref: p,
        children: e.xdt_api__v1__clips__home__connection.edges.map(function (
          a,
          b
        ) {
          var d = c("nullthrows")(a.node.media);
          return h.jsx(
            c("PolarisErrorBoundary.react"),
            {
              children: h.jsx(c("PolarisClipsTabDesktopClipContainer.react"), {
                children: h.jsx(c("PolarisClipsTabDesktopClip.react"), {
                  clipIndex: b,
                  onClipVisible: x,
                  queryReference: d,
                }),
              }),
            },
            (b = a.node.media) == null ? void 0 : b.id
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
  "usePolarisClipsTabDesktopUnmuteByDefault",
  ["PolarisVolumeControlsManager.react", "qex", "react", "useCometRouterState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a() {
      var a = c("useCometRouterState")(),
        b = d("PolarisVolumeControlsManager.react").useVolumeControls(),
        e = b.audioState;
      b = b.setAudioState;
      var f = i(
          a == null
            ? void 0
            : (a = a.main) == null
            ? void 0
            : (a = a.referrer) == null
            ? void 0
            : a.navigationType
        ),
        g = i(b),
        j = i(e);
      h(function () {
        if (f.current === "initial" || f.current === "reload") return;
        if (c("qex")._("372") !== !0) return;
        var a = g.current,
          b = j.current;
        a("on");
        return function () {
          a(b);
        };
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopPage.react",
  [
    "CometRelay",
    "PolarisClipsTabDesktopContainer.react",
    "PolarisClipsTabDesktopContainerElementProvider.react",
    "PolarisClipsTabDesktopQuery.graphql",
    "react",
    "usePolarisClipsTabDesktopUnmuteByDefault",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = d("CometRelay").usePreloadedQuery(
        c("PolarisClipsTabDesktopQuery.graphql"),
        a.queries.polarisClipsTapDesktopPageQuery
      );
      c("usePolarisClipsTabDesktopUnmuteByDefault")();
      return h.jsx(
        d("PolarisClipsTabDesktopContainerElementProvider.react")
          .PolarisClipsTabDesktopContainerElementProvider,
        {
          children: h.jsx(c("PolarisClipsTabDesktopContainer.react"), {
            chainingMediaID: a.props.routeParams.shortcode,
            queryReference: b,
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopPagePlaceholder.react",
  ["IGDSBox.react", "PolarisClipsTabDesktopClipPlaceholder.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "column",
        display: "flex",
        height: "100%",
        marginTop: 8,
        width: "100%",
        children: h.jsx(c("PolarisClipsTabDesktopClipPlaceholder.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopRoot.react",
  [
    "CometPlaceholder.react",
    "PolarisClipsTabDesktopPagePlaceholder.react",
    "PolarisPageLayoutHandler.react",
    "PolarisPageMetadata.react",
    "PolarisShell.next.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "PolarisClipsTabDesktopPage.react"
        ).__setRef("PolarisClipsTabDesktopRoot.react")
      );
    function a(a) {
      return h.jsx(c("PolarisPageLayoutHandler.react"), {
        backgroundColor: "primaryBackground",
        mainComponent: h.jsxs(c("PolarisShell.next.react"), {
          backgroundColor: "ig-primary-background",
          footerVariant: "none",
          pageIdentifier: "reelsTab",
          children: [
            h.jsx(c("PolarisPageMetadata.react"), { id: "reelsTab" }),
            h.jsx(c("CometPlaceholder.react"), {
              fallback: h.jsx(
                c("PolarisClipsTabDesktopPagePlaceholder.react"),
                {}
              ),
              children: h.jsx(i, babelHelpers["extends"]({}, a)),
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
