/*FB_PKG_DELIM*/

__d(
  "useIGDSToasts",
  ["IGDSPrivateToasterContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(d("IGDSPrivateToasterContext").IGDSPrivateToasterItemsContext);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSponsoredStoryCaptionModal.react",
  [
    "fbt",
    "IGDSBox.react",
    "PolarisIGCoreSheetOrModal",
    "PolarisStoriesProvider.react",
    "PolarisUserText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 100,
      k = h._("Caption");
    function a(a) {
      var b = a.caption;
      a = a.onClose;
      var e = d("PolarisStoriesProvider.react").useStoriesContext();
      e = e.viewerHeight;
      e = i.jsx("div", {
        style: { overflow: "auto", maxHeight: e - j },
        children: i.jsx(c("IGDSBox.react"), {
          marginBottom: 5,
          marginTop: 5,
          paddingX: 5,
          position: "relative",
          children: i.jsx(c("PolarisUserText.react"), {
            size: "body",
            value: b,
          }),
        }),
      });
      return i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
        children: e,
        onClose: a,
        title: k,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSponsoredStoryOptionsModal.react",
  [
    "IGCoreDialog",
    "PolarisAboutAdsDialogItem.react",
    "PolarisAdDebugToolModalContent.react",
    "PolarisContainerModuleUtils",
    "PolarisFRXReportModal.react",
    "PolarisGenericStrings",
    "PolarisHideAdDialogItem.react",
    "PolarisODS",
    "PolarisReportAdDialogItem.react",
    "PolarisReportConstants",
    "PolarisWAISTDialogItem.react",
    "PolarisWAISTModalContent.react",
    "cr:1468",
    "react",
    "usePolarisAnalyticsContext",
    "usePolarisSponsoredStoryLoggingParams",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var e = a.onClose,
        f = a.post;
      a = a.reel;
      var g = i("options"),
        j = g[0],
        k = g[1];
      g = function () {
        c("PolarisODS").incr("web.ads.story.report_option.click"), k("report");
      };
      var l = function () {
          c("PolarisODS").incr("web.ads.story.hide_option.click"), k("hide");
        },
        m = function () {
          k("waist");
        },
        n = function () {
          k("viewAdDebugTool");
        },
        o = c("usePolarisAnalyticsContext")(),
        p = f.owner,
        q = c("usePolarisSponsoredStoryLoggingParams")(a, f),
        r = q.adId,
        s = q.adInsertedPosition,
        t = q.mpk,
        u = q.reelId,
        v = q.sessionReelCounter,
        w = q.trackingToken,
        x = q.traySession;
      q = q.viewerSession;
      if (r == null || p == null) return null;
      switch (j) {
        case "options":
          return h.jsxs(d("IGCoreDialog").IGCoreDialog, {
            "data-testid": void 0,
            onModalClose: e,
            children: [
              h.jsx(c("PolarisHideAdDialogItem.react"), {
                adId: r,
                adInsertedPosition: s,
                adTrackingToken: w,
                mpk: t,
                onClick: l,
                reelCounter: v,
                reelId: u,
                traySession: x,
                viewerSession: q,
              }),
              h.jsx(c("PolarisReportAdDialogItem.react"), {
                adId: r,
                adInsertedPosition: s,
                adTrackingToken: w,
                mpk: t,
                onClick: g,
                post: f,
                reelCounter: v,
                reelId: a.id,
                traySession: x,
                viewerSession: q,
              }),
              h.jsx(c("PolarisWAISTDialogItem.react"), { onClick: m }),
              h.jsx(c("PolarisAboutAdsDialogItem.react"), {}),
              b("cr:1468") != null && h.jsx(b("cr:1468"), { onClick: n }),
              h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                onClick: e,
                children: d("PolarisGenericStrings").CANCEL_TEXT,
              }),
            ],
          });
        case "report":
          return h.jsx(c("PolarisFRXReportModal.react"), {
            containerModule: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(o),
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint
              .REPORT_AD_BUTTON,
            frxLocation: d("PolarisReportConstants").FRXLocation.STORY,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: e,
            reportedObjectID: r,
            reportedOwner: {
              id: p.id,
              username: p.username,
              profilePicURL: p.profilePictureUrl,
            },
          });
        case "hide":
          return h.jsx(c("PolarisFRXReportModal.react"), {
            containerModule: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(o),
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint
              .HIDE_AD_BUTTON,
            frxLocation: d("PolarisReportConstants").FRXLocation.STORY,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: e,
            reportedObjectID: r,
            reportedOwner: {
              id: p.id,
              username: p.username,
              profilePicURL: p.profilePictureUrl,
            },
          });
        case "waist":
          return h.jsx(c("PolarisWAISTModalContent.react"), {
            adId: r,
            onClose: e,
          });
        case "viewAdDebugTool":
          return h.jsx(c("PolarisAdDebugToolModalContent.react"), {
            forFeed: !1,
            onClose: e,
            post: f,
          });
        default:
          return null;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCloseFriendsInfoDialog.react",
  [
    "cx",
    "fbt",
    "IGCoreDialog",
    "IGDSBox.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisGenericStrings",
    "PolarisIGCoreAvatar",
    "PolarisIGCoreConstants",
    "PolarisIGCoreIcon",
    "PolarisReactRedux",
    "PolarisStoriesStrings",
    "nullthrows",
    "polarisPostSelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = j.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        justifyContent: "center",
        position: "relative",
        children: [
          j.jsx(c("IGDSBox.react"), {
            height: c("PolarisIGCoreConstants").AVATAR_SIZES.medium,
            position: "relative",
            children: j.jsx(c("PolarisIGCoreAvatar"), {
              alt: i._("{username}'s profile picture", [
                i._param("username", a.username),
              ]),
              size: "medium",
              src: a.profilePicUrl,
            }),
          }),
          j.jsx("div", {
            className: "_abeg",
            children: j.jsx(c("PolarisIGCoreIcon"), {
              alt: d("PolarisStoriesStrings").CLOSE_FRIENDS,
              icon: d("PolarisAssetManagerGlyphMapping").ICONS
                .GLYPH_CIRCLE_STAR,
            }),
          }),
        ],
      });
      return j.jsx(d("IGCoreDialog").IGCoreDialog, {
        body: a.isVideo
          ? d("PolarisStoriesStrings").CLOSE_FRIENDS_INFO_VIDEO(a.username)
          : d("PolarisStoriesStrings").CLOSE_FRIENDS_INFO_PHOTO(a.username),
        media: b,
        onModalClose: a.onClose,
        title: d("PolarisStoriesStrings").CLOSE_FRIENDS_ONLY,
        children: j.jsx(d("IGCoreDialog").IGCoreDialogItem, {
          onClick: a.onClose,
          children: d("PolarisGenericStrings").CLOSE_TEXT,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      var e = d("polarisUserSelectors").getUserById(a, b.userId);
      a = d("polarisPostSelectors").getPostById(a, b.postId);
      return {
        isVideo: a.isVideo || !1,
        username: c("nullthrows")(e.username),
        profilePicUrl: c("nullthrows")(e.profilePictureUrl),
      };
    }
    e = d("PolarisReactRedux").connect(b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisExclusiveStoryInfoDialog.react",
  [
    "cx",
    "fbt",
    "ix",
    "IGCoreDialog",
    "IGCoreImage",
    "IGDSBox.react",
    "PolarisGenericStrings",
    "PolarisStoriesStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react");
    function a(a) {
      var b = k.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        justifyContent: "center",
        position: "relative",
        children: k.jsx("div", {
          className: "_ac4c",
          children: k.jsx(c("IGCoreImage"), {
            alt: i._("Subscriber crown badge"),
            src: { light: j("170653") },
          }),
        }),
      });
      return k.jsx(d("IGCoreDialog").IGCoreDialog, {
        body: d("PolarisStoriesStrings").EXCLUSIVE_STORY_INFO(a.username),
        media: b,
        onModalClose: a.onClose,
        title: d("PolarisStoriesStrings").EXCLUSIVE_STORY_ONLY,
        children: k.jsx(d("IGCoreDialog").IGCoreDialogItem, {
          color: "ig-primary-button",
          onClick: a.onClose,
          children: d("PolarisGenericStrings").DONE_TEXT,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisHighlightsTrayModal.react",
  [
    "fbt",
    "IGDSBox.react",
    "PolarisIGCoreSheetOrModal",
    "PolarisProfilePostsActions",
    "PolarisProfileStoryHighlightsTray.react",
    "PolarisReactRedux",
    "PolarisStoriesProvider.react",
    "PolarisStoryActions",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect;
    function a(a) {
      var b = a.currentPost;
      a = d("PolarisStoriesProvider.react").useStoriesContext();
      var e = a.updateStoriesContext,
        f = d("PolarisReactRedux").useSelector(function (a) {
          return c("nullthrows")(d("polarisUserSelectors").getViewer(a));
        }),
        g = d("PolarisReactRedux").useDispatch(),
        l = j(
          function () {
            e({ isHighlightsTrayActive: !1 });
          },
          [e]
        ),
        m = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.highlightReelsByUserId.get(f.id);
        });
      k(
        function () {
          m == null &&
            g(
              d("PolarisProfilePostsActions").loadProfilePageExtras(f.id, {
                fetchHighlightReels: !0,
              })
            );
        },
        [g, f.id, m]
      );
      var n = b.highlightReelIds;
      a = function (a) {
        var c;
        g(
          d("PolarisStoryActions").editStoryInHighlightAction(
            ((c = n == null ? void 0 : n.indexOf(a.id)) != null ? c : -1) ===
              -1,
            b.id,
            a.id,
            f.id,
            a.title
          )
        );
        l();
      };
      return i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
        onClose: l,
        title: h._("Add to highlights"),
        children: i.jsx(c("IGDSBox.react"), {
          paddingY: 8,
          position: "relative",
          children: i.jsx(c("PolarisProfileStoryHighlightsTray.react"), {
            highlightReelIdsWithOverlay: n,
            isSmallScreen: !1,
            onClick: a,
            storyEntrypoint: !0,
            user: f,
            userId: f.id,
            viewer: f,
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
  "PolarisHasEditHighlightEnabled",
  ["PolarisConfig", "PolarisUA"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return d("PolarisUA").isDesktop() && d("PolarisConfig").isLoggedIn();
    }
    g.hasEditHighlightEnabled = a;
  },
  98
);
__d(
  "PolarisBoostPostDialogItem",
  [
    "IGCoreDialog",
    "IGDSBox.react",
    "JSResourceForInteraction",
    "PolarisBoostUtils",
    "PolarisIGCorePressable",
    "PolarisPromotedPostsLogger",
    "PolarisQueryParamsHelper",
    "PolarisReactRedux",
    "PolarisStoriesContext",
    "PolarisToastConstants",
    "emptyFunction",
    "polarisUserSelectors",
    "react",
    "useIGDSLazyDialog",
    "useIGDSToaster",
    "useIGDSToasts",
    "usePolarisViewer",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = d("PolarisToastConstants").TOAST_ANIM_DURATION_S * 2e3,
      l = c("JSResourceForInteraction")("IGDSPro2ProDialog.react").__setRef(
        "PolarisBoostPostDialogItem"
      );
    function a(a) {
      var b = a.analyticsContext,
        e = a.boostedStatus,
        f = a.boostStoryEligibilityType,
        g = a.boostUnavailableReason,
        m = a.id,
        n = a.postProductType,
        o = (a = c("usePolarisViewer")()) == null ? void 0 : a.id;
      a = c("useIGDSToaster")();
      var p = a.add,
        q = c("useIGDSToasts")(),
        r = d("PolarisQueryParamsHelper").getQueryParams(window.location.href);
      a = c("useIGDSLazyDialog")(l);
      var s = a[0];
      a = j(d("PolarisStoriesContext").StoriesContext);
      var t = a.updateStoriesContext,
        u = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        });
      a = function () {
        if (
          e === d("PolarisBoostUtils").BoostedStatusEnum.UNAVAILABLE &&
          g != null
        ) {
          var a = { message: g, target: "bottom" };
          q.length === 0 && p(a, { duration: k });
        }
      };
      var v = i(
        function () {
          if (o != null) {
            var a;
            t({ isPaused: !0, isModalActive: !1 });
            var e = c("uuid")();
            d("PolarisBoostUtils").handleBoostButtonClickWithLogging(
              o,
              m,
              null,
              f,
              (a = d(
                "PolarisPromotedPostsLogger"
              ).getPolarisBoostEntryPointType(b)) != null
                ? a
                : "",
              (a = n) != null ? a : "",
              r == null ? void 0 : r.ref,
              e,
              b,
              function (a) {
                return s({
                  boostUri: a,
                  entryPoint:
                    (a = d(
                      "PolarisPromotedPostsLogger"
                    ).getPolarisBoostEntryPointType(b)) != null
                      ? a
                      : void 0,
                  flowID: e,
                });
              },
              u == null ? void 0 : u.username
            );
          }
        },
        [
          b,
          f,
          m,
          s,
          n,
          r == null ? void 0 : r.ref,
          t,
          u == null ? void 0 : u.username,
          o,
        ]
      );
      return f === d("PolarisBoostUtils").BoostEligibilityEnum.INELIGIBLE ||
        e == null ||
        n == null ||
        o == null
        ? null
        : h.jsx(c("PolarisIGCorePressable"), {
            className: "xtuw4uo",
            onMouseEnter: a,
            onPress: c("emptyFunction"),
            children: h.jsx(c("IGDSBox.react"), {
              children: h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
                disabled:
                  e === d("PolarisBoostUtils").BoostedStatusEnum.UNAVAILABLE ||
                  d(
                    "PolarisBoostUtils"
                  ).getIsBoostButtonDisabledFromBoostedStatus(e),
                onClick: v,
                children: d(
                  "PolarisBoostUtils"
                ).getBoostButtonCTAFromBoostedStatus(e, n),
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
  "PolarisOptionsModal.react",
  [
    "fbt",
    "IGCoreDialog",
    "IGRouter",
    "PolarisBoostPostDialogItem",
    "PolarisBoostUtils",
    "PolarisConfig",
    "PolarisGenericStrings",
    "PolarisLinkBuilder",
    "PolarisNavigationUtils",
    "PolarisPostStrings",
    "PolarisReportUnderLawDialogItem.react",
    "PolarisRoutes",
    "PolarisStoriesContext",
    "react",
    "usePolarisViewer",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useContext;
    function a(a) {
      var b,
        e = function () {
          a.history.push(d("PolarisLinkBuilder").buildMediaLink(a.code));
        },
        f = k(d("PolarisStoriesContext").StoriesContext),
        g = f.updateStoriesContext;
      f = j(
        function () {
          g({
            isLoggedOutStoryShareSheetActive: !0,
            isPaused: !0,
            isModalActive: !1,
          });
        },
        [g]
      );
      var l = a.boostedStatus,
        m = a.productType;
      b = (b = c("usePolarisViewer")()) == null ? void 0 : b.id;
      l = d("PolarisBoostUtils").useGetEligibilityTypeForBoostAdEntries({
        useCaseIsEligibleForBoostAd: l != null && b != null,
        postProductType: m,
      });
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: a.onClose,
        children: [
          a.hasGoToOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: e,
              children: h._("Go to post"),
            }),
          a.hasDeleteOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: "ig-error-or-destructive",
              onClick: a.onDeleteClick,
              children: h._("Delete"),
            }),
          a.hasEditOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onEditClick,
              children: h._("Edit"),
            }),
          a.hasReportInappropriateOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: "ig-error-or-destructive",
              onClick: d("PolarisConfig").isLoggedIn()
                ? a.onReportInappropriateClick
                : function () {
                    return d("PolarisNavigationUtils").openExternalURL(
                      d("PolarisLinkBuilder").buildLoggedOutReportLink(
                        d("PolarisRoutes")
                          .COMMUNITY_VIOLATIONS_GUIDELINES_CONTACT_FORM_PATH,
                        a.code
                      )
                    );
                  },
              children: d("PolarisPostStrings").REPORT_INAPPROPRIATE_TEXT,
            }),
          d("PolarisConfig").isNetzDGEligible() &&
            i.jsx(
              d("PolarisReportUnderLawDialogItem.react")
                .ReportUnderLawDialogItem,
              { contentId: a.id }
            ),
          a.hasAboutThisAccountOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onAboutThisAccountClick,
              children: h._("About this account"),
            }),
          a.hasCopyHighlightLinkAndShareToOptions === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: f,
              children: h._("Share to..."),
            }),
          a.hasEmbedOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onEmbedCodeClick,
              children: h._("Embed"),
            }),
          a.hasPhotosOfYouOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onPhotosOfYouClick,
              children: h._("Post Options"),
            }),
          a.hasShareOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onShareClick,
              children: h._("Share"),
            }),
          a.hasCopyLinkOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onCopyLinkClick,
              children: h._("Copy link"),
            }),
          a.hasCopyHighlightLinkAndShareToOptions === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onCopyHighlightLinkClick,
              children: h._("Copy highlight link"),
            }),
          a.hasRemoveCommentsOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onRemoveCommentsClick,
              children:
                a.showRemoveCommentIcons !== !0
                  ? h._("Remove comments")
                  : h._("Finish removing comments"),
            }),
          a.hasUnfollowOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onUnfollowClick,
              children: h._("Unfollow"),
            }),
          a.hasViewInsightsOption === !0 &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: a.onViewInsightsClick,
              children: h._("View insights"),
            }),
          l !== d("PolarisBoostUtils").BoostEligibilityEnum.INELIGIBLE &&
            i.jsx(c("PolarisBoostPostDialogItem"), {
              analyticsContext: a.analyticsContext,
              boostedStatus: a.boostedStatus,
              boostStoryEligibilityType: l,
              boostUnavailableReason: a.boostUnavailableReason,
              id: a.id,
              postProductType: a.productType,
            }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: a.onClose,
            children: d("PolarisGenericStrings").CANCEL_TEXT,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("IGRouter").withIGRouter(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisStoryOptionsModal.react",
  [
    "fbt",
    "AboutThisAccountRefererTypes",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "PolarisAboutThisAccountModal.react",
    "PolarisAboutThisAccountUtils",
    "PolarisClipboard",
    "PolarisConfirmDialog.react",
    "PolarisCreateAndAddHighlightsModal.react",
    "PolarisFRXReportModal.react",
    "PolarisHasEditHighlightEnabled",
    "PolarisInsightsHoldoutUtils",
    "PolarisInsightsUtils",
    "PolarisLinkBuilder",
    "PolarisOptionsModal.react",
    "PolarisPostActionDeletePost",
    "PolarisPostFastOptionCopyLink.react",
    "PolarisReactRedux",
    "PolarisReportConstants",
    "PolarisStoriesContext",
    "PolarisToastActions",
    "QuickPerformanceLogger",
    "URI",
    "lazyLoadComponent",
    "nullthrows",
    "polarisIsUserLoggedIn",
    "polarisStorySelectors",
    "polarisUserSelectors",
    "qex",
    "qpl",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("IGWebBloksApp").__setRef(
          "PolarisStoryOptionsModal.react"
        )
      );
    function k(a) {
      return function () {
        return { modalType: a };
      };
    }
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.$1 = function () {
          var a = new (c("URI"))(
            "https://www.instagram.com" +
              d("PolarisLinkBuilder").buildHighlightStoryLink(e.props.reel.id)
          ).addQueryData("utm_source", "ig_web_options_menu");
          d("PolarisClipboard").copy(a.toString()) &&
            (e.props.onLinkCopied(), e.props.onClose());
        };
        e.$2 = function () {
          e.props.onDeletePost(e.props.currentPost.id), e.props.onClose();
        };
        e.$3 = function () {
          e.setState(k("delete"));
        };
        e.$4 = function () {
          e.setState(k("edit"));
        };
        e.$5 = function () {
          e.setState(k("report"));
        };
        e.$6 = function () {
          e.setState(k("view_insights")),
            d(
              "PolarisInsightsHoldoutUtils"
            ).getPassesWebMediaInsightsFeatureHoldoutForExperiment() &&
              c("qex")._("1012") === !0,
            c("QuickPerformanceLogger").markerStart(
              c("qpl")._(39124993, "1609")
            );
        };
        e.$7 = function () {
          e.setState(k("about_this_account"));
        };
        e.state = { modalType: "options" };
        return e;
      }
      var e = b.prototype;
      e.render = function () {
        var a,
          b = this.props,
          e = b.analyticsContext,
          f = b.currentPost,
          g = b.onClose,
          k = b.reel,
          l = b.user,
          m = b.viewer;
        b = b.viewingOwnStory;
        a = d("PolarisInsightsUtils").getViewInsightsInfo(
          m,
          (a = f.owner) == null ? void 0 : a.id,
          f,
          !!f.canSeeInsightsAsBrand,
          !!(m == null ? void 0 : m.canSeeOrganicInsights)
        );
        a = a.hasViewInsights;
        var n = !1;
        l && (n = d("PolarisAboutThisAccountUtils").getIsEligibleForATA(l));
        l =
          !d("polarisIsUserLoggedIn").isUserLoggedIn() &&
          c("qex")._("648") === !0;
        var o = k.type === "GraphHighlightReel";
        switch (this.state.modalType) {
          case "options":
            return i.jsx(c("PolarisOptionsModal.react"), {
              analyticsContext: e,
              boostedStatus: f.boostedStatus,
              boostUnavailableReason: f.boostUnavailableReason,
              code: f.code != null && f.code !== "" ? f.code : "",
              hasAboutThisAccountOption: n,
              hasCopyHighlightLinkAndShareToOptions: l,
              hasDeleteOption: b,
              hasEditOption:
                b &&
                o &&
                d("PolarisHasEditHighlightEnabled").hasEditHighlightEnabled(),
              hasEmbedOption: !1,
              hasGoToOption: !1,
              hasReportInappropriateOption: !b,
              hasShareOption: !1,
              hasViewInsightsOption: a,
              id: f.id,
              onAboutThisAccountClick: this.$7,
              onClose: g,
              onCopyHighlightLinkClick: this.$1,
              onDeleteClick: this.$3,
              onEditClick: this.$4,
              onReportInappropriateClick: this.$5,
              onViewInsightsClick: this.$6,
              postType: f.isVideo === !0 ? "video" : "photo",
              productType: f.productType,
            });
          case "report":
            e = c("nullthrows")(f.owner);
            n = f.id;
            return i.jsx(c("PolarisFRXReportModal.react"), {
              frxLocation: d("PolarisReportConstants").FRXLocation.STORY,
              frxObjectType: d("PolarisReportConstants").FRXObjectType.MEDIA,
              onClose: g,
              reportedObjectID: n,
              reportedOwner: {
                id: e.id,
                username: e.username,
                profilePicURL: e.profilePictureUrl,
              },
            });
          case "edit":
            if (m) {
              return i.jsx(c("PolarisCreateAndAddHighlightsModal.react"), {
                currentHighlightStoryIds: (l = k.itemIds) != null ? l : [],
                editing: !0,
                highlightId: (o = k.id) != null ? o : "",
                highlightName: (b = k.title) != null ? b : "",
                highlightThumbnailUrl:
                  (a = k.originalThumbnailUrl) != null ? a : null,
                onClose: g,
                user: m,
              });
            }
          case "delete":
            return f.isVideo === !0
              ? i.jsx(c("PolarisConfirmDialog.react"), {
                  body: h._(
                    "Are you sure you want to delete this video from your story?"
                  ),
                  confirmLabel: h._("Delete"),
                  onClose: g,
                  onConfirm: this.$2,
                  title: h._("Delete Story?"),
                })
              : i.jsx(c("PolarisConfirmDialog.react"), {
                  body: h._(
                    "Are you sure you want to delete this photo from your story?"
                  ),
                  confirmLabel: h._("Delete"),
                  onClose: g,
                  onConfirm: this.$2,
                  title: h._("Delete Story?"),
                });
          case "view_insights":
            return d(
              "PolarisInsightsHoldoutUtils"
            ).getPassesWebMediaInsightsFeatureHoldoutForExperiment() &&
              c("qex")._("1013") === !0
              ? f.boostedStatus == null
                ? null
                : i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(j, {
                      appId: d("PolarisInsightsUtils").showAdInsightsForMedia(
                        f.boostedStatus
                      )
                        ? "com.instagram.insights.media_refresh.stories.ad_bottom_sheet.action"
                        : "com.instagram.insights.media_refresh.stories.bottom_sheet.action",
                      bridgeOverrides_DEPRECATED: { onResumeStoryPlayback: g },
                      params: { media_id: f.id },
                    }),
                  })
              : i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(j, {
                    appId:
                      "com.instagram.insights.media.stories.bottom_sheet.action",
                    bridgeOverrides_DEPRECATED: { onResumeStoryPlayback: g },
                    params: { media_id: f.id },
                  }),
                });
          case "about_this_account":
            return i.jsx(c("PolarisAboutThisAccountModal.react"), {
              onClose: g,
              referer_type: c("AboutThisAccountRefererTypes").STORY,
              user: c("nullthrows")(f.owner),
            });
          default:
            return null;
        }
      };
      return b;
    })(i.Component);
    e.contextType = d("PolarisStoriesContext").StoriesContext;
    function a(a) {
      return babelHelpers["extends"](
        {},
        d("polarisStorySelectors").getContainerModule(a),
        { viewer: d("polarisUserSelectors").getViewer(a) }
      );
    }
    function b(a) {
      return {
        onDeletePost: function (b) {
          return a(d("PolarisPostActionDeletePost").deletePost(b));
        },
        onLinkCopied: function () {
          return a(
            d("PolarisToastActions").showToast({
              text: d("PolarisPostFastOptionCopyLink.react").LINK_COPIED_PROMPT,
            })
          );
        },
      };
    }
    f = d("PolarisReactRedux").connect(a, b)(e);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisStoryOptionsModalPicker.react",
  [
    "PolarisSponsoredStoryOptionsModal.react",
    "PolarisStoriesProvider.react",
    "PolarisStoryOptionsModal.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.analyticsContext,
        e = a.currentPost,
        f = a.currentReelItemIndex,
        g = a.onModalClose,
        i = a.reel,
        j = a.reelPositionInTray,
        k = a.traySession,
        l = a.user,
        m = a.viewerId,
        n = a.viewerSession;
      a = a.viewingOwnStory;
      var o = d("PolarisStoriesProvider.react").useStoriesContext();
      o = o.isModalActive;
      return o
        ? e.isSponsored
          ? h.jsx(c("PolarisSponsoredStoryOptionsModal.react"), {
              onClose: g,
              post: e,
              reel: i,
            })
          : h.jsx(c("PolarisStoryOptionsModal.react"), {
              analyticsContext: b,
              currentPost: e,
              currentReelItemIndex: f,
              onClose: g,
              reel: i,
              reelPositionInTray: j,
              traySession: k,
              user: l,
              viewerId: m,
              viewerSession: n,
              viewingOwnStory: a,
            })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStoryViewerSlider.react",
  ["IGDSBox.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useState,
      k = 12,
      l = 20,
      m = 24,
      n = 2,
      o = {
        container: {
          appearance: "xjyslct",
          backgroundColor: "x11mr3az",
          outline: "x1a2a7pz",
          width: "xh8yej3",
          height: "xqu0tyb",
          paddingTop: "x1nn3v0j",
          paddingEnd: "x4uap5",
          paddingBottom: "x1120s5i",
          paddingStart: "xkhd6sd",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          "::thumb_appearance": "xmxzvbm",
          "::-moz-range-thumb_background": "x1c4j5rl",
          "::-moz-range-thumb_borderTop": "x113qh7d",
          "::-moz-range-thumb_borderEnd": "x2dgui",
          "::-moz-range-thumb_borderBottom": "x1dgllwq",
          "::-moz-range-thumb_borderStart": "x1y0u3c3",
          $$css: !0,
        },
        sliderThumb: {
          borderTop: "xmva6s9",
          borderEnd: "xgm0wpl",
          borderBottom: "x1wlpvkj",
          borderStart: "x18bz70p",
          backgroundColor: "xz3rzyy",
          position: "x10l6tqk",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        sliderThumbLarge: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        sliderThumbSmall: { height: "x1kpxq89", width: "xsmyaan", $$css: !0 },
        emoji: { width: "xeq5yr9", position: "x1n2onr6", $$css: !0 },
      };
    function p(a, b) {
      a.style.backgroundImage =
        "linear-gradient(to right, rgb(163, 7, 186) 0%, rgb(237, 73, 86) " +
        b +
        "%, rgb(var(--ig-separator)) " +
        b +
        "%, rgb(var(--ig-separator)) 100%";
    }
    function a(a) {
      var b = a.emoji,
        d = a.showFloatingEmoji,
        e = a.smallerThumb;
      e = e === void 0 ? !1 : e;
      var f = a.value;
      a = a.width;
      a = a === void 0 ? 150 : a;
      var g = j(null),
        q = g[0];
      g = g[1];
      var r = f * 100;
      i(
        function () {
          q && p(q, r);
        },
        [q, r]
      );
      var s = e ? k : l;
      f = Math.max(0, f * (a - s) - n);
      return h.jsxs(c("IGDSBox.react"), {
        direction: "column",
        display: "flex",
        paddingY: 1,
        position: "relative",
        width: a,
        children: [
          d &&
            h.jsx("div", {
              className: "xeq5yr9 x1n2onr6",
              style: { fontSize: m, left: f, padding: "8px 0px" },
              children: b,
            }),
          h.jsxs(c("IGDSBox.react"), {
            display: "flex",
            height: s,
            justifyContent: "center",
            position: "relative",
            width: "100%",
            children: [
              h.jsx("input", {
                className:
                  "xjyslct x11mr3az x1a2a7pz xh8yej3 xqu0tyb x1nn3v0j x4uap5 x1120s5i xkhd6sd x1lq5wgf xgqcy7u x30kzoy x9jhf4c xmxzvbm x1c4j5rl x113qh7d x2dgui x1dgllwq x1y0u3c3",
                disabled: !0,
                max: 100,
                min: 0,
                ref: g,
                type: "range",
                value: r,
              }),
              h.jsx("div", {
                className: c("stylex")([
                  o.sliderThumb,
                  e ? o.sliderThumbSmall : o.sliderThumbLarge,
                ]),
                style: { left: f },
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
  "PolarisStorySliderVoter.react",
  ["PolarisStoryViewerSlider.react", "PolarisUserListItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 150;
    function a(a) {
      var b = a.avatarSize,
        d = a.entryPoint,
        e = a.index,
        f = a.isVisible,
        g = a.onScrollEnter,
        j = a.onUsernameClick;
      a = a.storySliderVoter;
      return h.jsx(c("PolarisUserListItem.react"), {
        avatarSize: b,
        borderlessFollowButton: !1,
        entryPoint: d,
        hideFollowButton: !0,
        hideName: !1,
        hideStoryRings: !0,
        hoverPositionType: "absolute",
        id: a.id,
        isVisible: f,
        onScrollEnter: g,
        onUsernameClick: j,
        position: e,
        subtitle: h.jsx(c("PolarisStoryViewerSlider.react"), {
          showFloatingEmoji: !1,
          smallerThumb: !0,
          value: (b = a.vote) != null ? b : 0,
          width: i,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStorySliderUserList.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSListItemPlaceholder",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisErrorBoundary.react",
    "PolarisIGCoreButton",
    "PolarisIGVirtualList.react",
    "PolarisStorySliderVoter.react",
    "PolarisUserListItem.react",
    "emptyFunction",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useState,
      l = 10,
      m = 65;
    function a(a) {
      var b = a.avatarSize,
        d = a.containerSize;
      d = d === void 0 ? "auto" : d;
      var e = a.currentPost,
        f = a.entryPoint,
        g = f === void 0 ? "unknown" : f;
      f = a.hideStoryRings;
      var n = f === void 0 ? !1 : f;
      f = a.initialRenderCount;
      var o = f === void 0 ? l : f;
      f = a.isLoading;
      var p = f === void 0 ? !1 : f,
        q = a.likers,
        r = a.moreSliderVotersButton,
        s = a.onLoadStorySliderVoters;
      f = a.onScroll;
      var t = a.storySliderVoterCount,
        u = a.storySliderVoters,
        v = a.topComponent,
        w = a.userIds,
        x = i.createRef();
      a = k(0);
      var y = a[0],
        z = a[1],
        A = c("usePrevious")(y);
      j(
        function () {
          x.current != null &&
            w.length === o &&
            A === 0 &&
            x.current.forceUpdate(),
            z(w.length);
        },
        [w, x, o, A]
      );
      a = function (a) {
        var d = a.index;
        a = a.isVisible;
        if (w.length === 0)
          return p ? i.jsx(c("IGDSListItemPlaceholder"), { size: b }, d) : null;
        return d < t
          ? i.jsxs(
              c("PolarisErrorBoundary.react"),
              {
                children: [
                  d === 0 && v != null && v,
                  d === 0 &&
                    i.jsx("div", {
                      className: "xz9dl7a xn6708d xsag5q8 x1ye3gou",
                      children: i.jsx(c("IGDSText.react").Section, {
                        children: h._("Answers"),
                      }),
                    }),
                  i.jsx(c("PolarisStorySliderVoter.react"), {
                    avatarSize: b,
                    entryPoint: g,
                    index: d,
                    isVisible: a,
                    onScrollEnter: c("emptyFunction"),
                    onUsernameClick: c("emptyFunction"),
                    storySliderVoter: u[d],
                  }),
                  d === u.length - 1 &&
                    r === !0 &&
                    i.jsx("div", {
                      className: "x11g6tue xqy66fx x14uny0o xr1496l xvpee5o",
                      children: i.jsx(c("PolarisIGCoreButton"), {
                        borderless: !0,
                        color: "web-always-white",
                        onClick: function () {
                          var a;
                          return s(
                            e.id,
                            (a =
                              (a = e.storySliders) == null
                                ? void 0
                                : (a = a[0]) == null
                                ? void 0
                                : a.id) != null
                              ? a
                              : ""
                          );
                        },
                        children: i.jsx(c("IGDSText.react").Section, {
                          children: h._("See all"),
                        }),
                      }),
                    }),
                  d === u.length - 1 &&
                    i.jsx("div", {
                      className: "xz9dl7a xn6708d xsag5q8 x1ye3gou",
                      children: i.jsx(c("IGDSText.react").Section, {
                        children: h._("Viewers"),
                      }),
                    }),
                ],
              },
              u[d].ts
            )
          : i.jsxs(
              c("PolarisErrorBoundary.react"),
              {
                children: [
                  d === 0 && v != null && v,
                  i.jsx(c("PolarisUserListItem.react"), {
                    avatarSize: b,
                    borderlessFollowButton: !1,
                    entryPoint: g,
                    hasLiked: q == null ? void 0 : q.has(w[d - t]),
                    hideFollowButton: !0,
                    hideName: !1,
                    hideStoryRings: n,
                    id: w[d - t],
                    isVisible: a,
                    onScrollEnter: c("emptyFunction"),
                    onUsernameClick: c("emptyFunction"),
                    position: d - t,
                  }),
                ],
              },
              w[d - t]
            );
      };
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("PolarisIGVirtualList.react"), {
            containerSize: d,
            estimatedItemSize: m,
            initialRenderCount: o,
            itemCount: w.length + t || o + t,
            onScroll: f,
            pageletName: "user_list",
            ref: x,
            renderer: a,
            style: p && w.length === 0 ? { overflowY: "hidden" } : {},
          }),
          p &&
            i.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              marginTop: 4,
              position: "relative",
              children: i.jsx(c("IGDSSpinner.react"), { size: "medium" }),
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
  "PolarisStoryViewerSliderSummary.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisStoryViewerSlider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 214;
    function a(a) {
      var b, d;
      a = a.storySlider;
      b = (b = a == null ? void 0 : a.emoji) != null ? b : "";
      d = (d = a == null ? void 0 : a.slider_vote_average) != null ? d : 0;
      a = (a = a == null ? void 0 : a.slider_vote_count) != null ? a : 0;
      return i.jsxs("div", {
        className:
          "x2b8uid x1cnzs8 x1pi30zi xx6bls6 x1swvt13 xyorhqc x78zum5 xdt5ytf xl56j7k x6s0dn4",
        children: [
          i.jsx(c("IGDSBox.react"), {
            paddingY: 4,
            position: "relative",
            children: i.jsx(c("PolarisStoryViewerSlider.react"), {
              emoji: b,
              showFloatingEmoji: !0,
              value: d,
              width: j,
            }),
          }),
          i.jsx(c("IGDSText.react").Body, {
            color: "secondaryText",
            children: h._(
              {
                "*": "{storySliderVoteCount} people answered. This is the average answer.",
                _1: "1 person answered. This is the average answer.",
              },
              [h._plural(a, "storySliderVoteCount", a)]
            ),
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
  "PolarisStoryViewerList.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisIGCoreSheetOrModal",
    "PolarisReactRedux",
    "PolarisStoriesProvider.react",
    "PolarisStoryActions",
    "PolarisStorySliderUserList.react",
    "PolarisStoryViewerSliderSummary.react",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = 48,
      m = 44;
    function a(a) {
      var b = a.avatarSize,
        e = b === void 0 ? "small" : b,
        f = a.canLoadMoreViewers,
        g = a.currentPost;
      b = a.hideStoryRings;
      var n = b === void 0 ? !0 : b;
      b = a.initialRenderCount;
      var o =
          b === void 0
            ? d("PolarisStoryActions").STORY_VIEWERS_FETCH_COUNT_DEFAULT
            : b,
        p = a.isLoading,
        q = a.onLoadStorySliderVoters,
        r = a.storyViewers;
      b = d("PolarisStoriesProvider.react").useStoriesContext();
      var s = b.updateStoriesContext,
        t = d("PolarisReactRedux").useDispatch(),
        u = function (a) {
          !p &&
            f &&
            a.numScreensFromEnd === 0 &&
            a.numScreensFromStart > 0 &&
            t(d("PolarisStoryActions").loadStoryViewers({ itemId: g.id }));
        },
        v = function () {
          var a;
          q(
            g.id,
            (a =
              (a = g.storySliderVoterInfos) == null
                ? void 0
                : (a = a[0]) == null
                ? void 0
                : a.slider_id) != null
              ? a
              : ""
          );
        };
      a = j(
        function () {
          s({ isStoryViewerListActive: !1 });
        },
        [s]
      );
      k(
        function () {
          !p &&
            f &&
            t(d("PolarisStoryActions").loadStoryViewers({ itemId: g.id }));
        },
        [g, p, f, t]
      );
      b = function (a) {
        var b, d;
        a = a - m;
        b =
          (b = (b = g.storySliders) == null ? void 0 : b[0].slider_sticker) !=
          null
            ? b
            : null;
        d =
          (d =
            (d = g.storySliderVoterInfos) == null
              ? void 0
              : (d = d[0]) == null
              ? void 0
              : d.voters) != null
            ? d
            : null;
        var f = d != null ? d.length : 0;
        return r.length === 0
          ? i.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              height: a,
              justifyContent: "center",
              position: "relative",
              children: i.jsx(c("IGDSText.react").Body, {
                color: "secondaryText",
                children: h._("No one has seen this yet."),
              }),
            })
          : i.jsx(c("PolarisStorySliderUserList.react"), {
              avatarSize: e,
              containerSize: p ? a - l : a,
              currentPost: g,
              entryPoint: "story_viewer_list",
              hideStoryRings: n,
              initialRenderCount: o,
              isLoading: p,
              likers: new Set(
                r
                  .filter(function (a) {
                    return a.hasLiked;
                  })
                  .map(function (a) {
                    return a.user.id;
                  })
              ),
              moreSliderVotersButton:
                (a =
                  (a = g.storySliderVoterInfos) == null
                    ? void 0
                    : (a = a[0]) == null
                    ? void 0
                    : a.more_available) != null
                  ? a
                  : !1,
              onLoadStorySliderVoters: v,
              onScroll: u,
              storySliderVoterCount: f,
              storySliderVoters:
                (a =
                  d == null
                    ? void 0
                    : d.map(function (a) {
                        var b;
                        return {
                          vote: (b = a.vote) != null ? b : 0,
                          id: (b = a.user) != null ? b : "",
                          ts: (b = a.ts) != null ? b : 0,
                        };
                      })) != null
                  ? a
                  : [],
              topComponent:
                b != null &&
                i.jsx(c("PolarisStoryViewerSliderSummary.react"), {
                  storySlider: b,
                }),
              userIds: r.map(function (a) {
                return a.user.id;
              }),
            });
      };
      return i.jsx(d("PolarisIGCoreSheetOrModal").IGCoreSheetOrModal, {
        onClose: a,
        stops: ["50%", "100%"],
        title: h._("Viewers"),
        children: d("PolarisUA").isMobile()
          ? b
          : b(d("PolarisIGCoreSheetOrModal").DEFAULT_CONTAINER_MAX_HEIGHT),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStoryModals.react",
  [
    "PolarisCloseFriendsInfoDialog.react",
    "PolarisExclusiveStoryInfoDialog.react",
    "PolarisGroupProfileUtils",
    "PolarisReactRedux",
    "PolarisSponsoredStoryCaptionModal.react",
    "PolarisStoriesProvider.react",
    "PolarisStoryActions",
    "PolarisStoryOptionsModalPicker.react",
    "PolarisStoryViewerList.react",
    "cr:5001",
    "nullthrows",
    "polarisStorySelectors",
    "react",
    "usePolarisAnalyticsContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      a = c("usePolarisAnalyticsContext")();
      var e = d("PolarisReactRedux").useDispatch(),
        f = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getCurrentReel
        ),
        g = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getCurrentReelOwner
        ),
        j = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.currentTrayOrder.indexOf(f == null ? void 0 : f.id);
        }),
        k = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.currentReelItemIndex;
        }),
        l = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getCurrentPostId
        ),
        m = d("PolarisReactRedux").useSelector(function (a) {
          return a.posts.byId.get((a = l) != null ? a : "");
        }),
        n = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getCurrentPostAuthor
        ),
        o = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.traySession;
        }),
        p = d("PolarisReactRedux").useSelector(function (a) {
          return a.users.viewerId;
        }),
        q = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.viewerSession;
        }),
        r =
          (f == null ? void 0 : f.userId) === p ||
          (d("PolarisGroupProfileUtils").getIsUserGroupProfile(g) &&
            (m == null ? void 0 : m.ownerId) === p),
        s = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.isLoadingStoryViewers;
        }),
        t = d("PolarisReactRedux").useSelector(function (a) {
          return (
            a.stories.isLoading ||
            (f == null ? void 0 : f.isLoading) ||
            (l != null &&
              d("polarisStorySelectors").getStoryViewersPageInfoById(a, l)
                .has_next_page)
          );
        }),
        u = i(
          function (a, b) {
            e(
              d("PolarisStoryActions").loadStorySliderVoters({
                itemId: a,
                sliderId: b,
              })
            );
          },
          [e]
        ),
        v = d("PolarisStoriesProvider.react").useStoriesContext(),
        w = v.isCaptionModalActive,
        x = v.isCloseFriendsDialogActive,
        y = v.isExclusiveStoryDialogActive,
        z = v.isHighlightsTrayActive,
        A = v.isStoryViewerListActive,
        B = v.updateStoriesContext;
      return m == null ||
        f == null ||
        n == null ||
        (g == null ? void 0 : g.id) == null
        ? null
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("PolarisStoryOptionsModalPicker.react"), {
                analyticsContext: a,
                currentPost: m,
                currentReelItemIndex: k,
                onModalClose: function () {
                  return B({ isModalActive: !1 });
                },
                reel: f,
                reelPositionInTray: j,
                traySession: o,
                user: n,
                viewerId: p,
                viewerSession: q,
                viewingOwnStory: r,
              }),
              b("cr:5001") != null &&
                z &&
                r &&
                h.jsx(b("cr:5001"), { currentPost: m }),
              A &&
                r &&
                h.jsx(c("PolarisStoryViewerList.react"), {
                  canLoadMoreViewers: t,
                  currentPost: m,
                  isLoading: s,
                  onLoadStorySliderVoters: u,
                  storyViewers: m.storyViewers || [],
                  traySessionId: o,
                  viewerSessionId: q,
                }),
              x &&
                h.jsx(c("PolarisCloseFriendsInfoDialog.react"), {
                  onClose: function () {
                    B({ isCloseFriendsDialogActive: !1 });
                  },
                  postId: m.id,
                  userId: g.id,
                }),
              y &&
                h.jsx(c("PolarisExclusiveStoryInfoDialog.react"), {
                  onClose: function () {
                    B({ isExclusiveStoryDialogActive: !1 });
                  },
                  username: c("nullthrows")(g.username),
                }),
              w &&
                m.isSponsored &&
                m.caption != null &&
                h.jsx(c("PolarisSponsoredStoryCaptionModal.react"), {
                  caption: m.caption,
                  onClose: function () {
                    B({ isCaptionModalActive: !1 });
                  },
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
  "PolarisHighlightsConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 15;
    b = 600;
    c = 445;
    f.REQUEST_NUM_STORIES = a;
    f.POST_PICKER_HEIGHT = b;
    f.POST_PICKER_MAX_WIDTH = c;
  },
  66
);
__d(
  "PolarisNewHighlightsStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("Stories");
    b = h._("Story");
    c = h._("New Highlight");
    d = h._("Edit Highlight");
    e = h._("Highlight Name");
    f = h._("Add to your story");
    var i = h._(
        "Keep your stories in your archive after they disappear, so you can look back on your memories. Only you can see what's in your archive."
      ),
      j = h._("Plus icon"),
      k = h._("New"),
      l = h._("Selected"),
      m = h._("Select Cover");
    h = h._("Cover photo for highlight");
    g.STORIES_TITLE_TEXT = a;
    g.STORY_ALT_TEXT = b;
    g.NEW_HIGHLIGHT_TEXT = c;
    g.EDIT_HIGHLIGHT_TEXT = d;
    g.HIGHLIGHT_NAME_TEXT = e;
    g.NO_ARCHIVES_TITLE_TEXT = f;
    g.NO_ARCHIVES_BODY_TEXT = i;
    g.NEW_HIGHLIGHT_BUTTON_ALT_TEXT = j;
    g.NEW_HIGHLIGHT_BUTTON_TEXT = k;
    g.SELECTED_TAB_TITLE_TEXT = l;
    g.NEW_HIGHLIGHT_COVER_TEXT = m;
    g.HIGHLIGHT_COVER_ALT_TEXT = h;
  },
  98
);
__d(
  "usePolarisStoryGridData",
  [
    "PolarisReactRedux",
    "nullthrows",
    "polarisStorySelectors",
    "polarisUserSelectors",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function () {
      var a = d("PolarisReactRedux").useSelector(function (a) {
          return c("nullthrows")(d("polarisUserSelectors").getViewer(a));
        }),
        b = d("PolarisReactRedux")
          .useSelector(function (a) {
            return d("polarisStorySelectors").getUserArchivedStories(a);
          })
          .sort(function (a, b) {
            return parseFloat(b.postedAt) - parseFloat(a.postedAt);
          }),
        e = d("PolarisReactRedux").useSelector(function (a) {
          return (a = a.stories.archiveReelsInfo) == null
            ? void 0
            : a.isLoading;
        }),
        f = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.loadedStoryArchives;
        }),
        g = b.length === 0 && f;
      return {
        user: a,
        archivedStories: b,
        isLoading: e,
        endOfArchives: f,
        noArchives: g,
      };
    };
    g.usePolarisStoryGridData = a;
  },
  98
);
__d(
  "PolarisAddHighlightsPreviewOverlay.react",
  ["fbt", "IGDSBox.react", "IGDSCheckPanoFilledIcon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.isActive;
      a = a.isSelected;
      b = b || a;
      return i.jsx("div", {
        className:
          "x1ey2m1c x78zum5 xdt5ytf xl56j7k x17qophe x10l6tqk xds687c x13vifvy" +
          (b ? " xb4gq0b" : ""),
        children: i.jsx("div", {
          className:
            "x10l6tqk xfg7zyn x7ofzsv x1xp8n7a xmix8c7 x1rmk8rf xhjfva7 x6y76el xmezrkt x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 xl56j7k x6s0dn4" +
            (a ? " x1tu34mt" : ""),
          children: i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            children:
              a &&
              i.jsx(c("IGDSCheckPanoFilledIcon"), {
                alt: h._("Check"),
                color: "web-always-white",
                size: 13,
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
  "PolarisAddHighlightsStoryDateOverlay.react",
  ["PolarisUA", "polarisFormatDate", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        dateBlock: {
          position: "x10l6tqk",
          paddingTop: "x1nn3v0j",
          paddingEnd: "xg83lxy",
          paddingBottom: "x1120s5i",
          paddingStart: "x1h0ha7o",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          top: "x13vifvy",
          backgroundColor: "xz3rzyy",
          color: "x175jnsf",
          pointerEvents: "x47corl",
          userSelect: "x87ps6o",
          textAlign: "x2b8uid",
          width: "x1npj6m0",
          $$css: !0,
        },
        dateText: { fontWeight: "x117nqv4", $$css: !0 },
        monthText: { marginTop: "x1198e8h", $$css: !0 },
        yearText: { marginTop: "x1198e8h", fontSize: "x1pg5gke", $$css: !0 },
        archivesMarginDesktop: {
          marginTop: "xqui205",
          marginStart: "x17adc0v",
          $$css: !0,
        },
        archivesMarginMobile: {
          marginTop: "x1xmf6yo",
          marginStart: "xnfveip",
          $$css: !0,
        },
        modalMargin: {
          marginStart: "x1i64zmx",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.hasYearInOverlay,
        e = a.inArchivePage;
      a = a.postedAt;
      return h.jsxs("div", {
        className: c("stylex")(
          i.dateBlock,
          e === !0
            ? d("PolarisUA").isMobile()
              ? i.archivesMarginMobile
              : i.archivesMarginDesktop
            : i.modalMargin
        ),
        children: [
          h.jsx("div", {
            className: "x117nqv4",
            children: c("polarisFormatDate")(a, "j"),
          }),
          h.jsx("div", {
            className: "x1198e8h",
            children: c("polarisFormatDate")(a, "M"),
          }),
          b &&
            h.jsx("div", {
              className: "x1198e8h x1pg5gke",
              children: c("polarisFormatDate")(a, "Y"),
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
  "PolarisAddHighlightsStoryPreview.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisAddHighlightsPreviewOverlay.react",
    "PolarisAddHighlightsStoryDateOverlay.react",
    "PolarisAspectRatio.react",
    "PolarisDateHelpers",
    "PolarisIGCorePressable",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState,
      j = 9 / 16,
      k = 3,
      l = 134;
    function m(a, b, c, e) {
      return (
        !a &&
        (b === 0 ||
          d("PolarisDateHelpers").dateTypeToString(
            d("PolarisDateHelpers").pyTimestampToDateType(c)
          ) !==
            d("PolarisDateHelpers").dateTypeToString(
              d("PolarisDateHelpers").pyTimestampToDateType(Number(e))
            ))
      );
    }
    function n(a, b, c, e) {
      return (
        !a &&
        (b === 0 ||
          d("PolarisDateHelpers")
            .dateTypeToString(
              d("PolarisDateHelpers").pyTimestampToDateType(Number(c))
            )
            .split("-")[0] !==
            d("PolarisDateHelpers")
              .dateTypeToString(
                d("PolarisDateHelpers").pyTimestampToDateType(Number(e))
              )
              .split("-")[0])
      );
    }
    function a(a) {
      var b = a.index,
        d = a.isEditing,
        e = a.isLoading,
        f = a.posts,
        g = a.selectedStoryIds;
      a = a.updateSelectedStoryIds;
      var i = b === f.length;
      if (i === !0 && e === !0)
        return h.jsx(
          c("IGDSBox.react"),
          {
            alignItems: "center",
            display: "flex",
            marginBottom: 4,
            marginTop: 8,
            minWidth: "100%",
            position: "relative",
            children: h.jsx(c("IGDSSpinner.react"), { size: "medium" }),
          },
          b
        );
      i = f[b];
      e = m(
        d,
        b,
        (e = (e = f[b]) == null ? void 0 : e.postedAt) != null ? e : 0,
        (e = (e = f[b - 1]) == null ? void 0 : e.postedAt) != null ? e : 0
      );
      b = e
        ? n(
            d,
            b,
            (d = (d = f[b]) == null ? void 0 : d.postedAt) != null ? d : 0,
            (f = (d = f[b - 1]) == null ? void 0 : d.postedAt) != null ? f : 0
          )
        : !1;
      return h.jsx(
        c("IGDSBox.react"),
        {
          height: "auto",
          maxWidth: "calc(100%/" + k + ")",
          minWidth: "calc(100%/" + k + ")",
          position: "relative",
          children: h.jsx("div", {
            className: "x1m6msm x1j85h84",
            children: h.jsx(o, {
              hasDateOverlay: e,
              hasYearInOverlay: b,
              post: i,
              selectedStoryIds: g,
              updateSelectedStoryIds: a,
            }),
          }),
        },
        i.id
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return h.jsx(
        c("IGDSBox.react"),
        { height: l, padding: 12, position: "relative", width: l },
        a
      );
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function o(d) {
      var a = d.hasDateOverlay,
        b = d.hasYearInOverlay,
        e = d.post,
        f = d.selectedStoryIds,
        g = d.updateSelectedStoryIds;
      d = e.thumbnailSrc;
      var k = i(!1),
        l = k[0],
        o = k[1];
      return h.jsxs(c("PolarisIGCorePressable"), {
        className: "x1ypdohk x1a2a7pz x5yr21d",
        onMouseEnter: function () {
          return o(!0);
        },
        onMouseLeave: function () {
          return o(!1);
        },
        onPress: function () {
          return g(e.id);
        },
        children: [
          d != null
            ? h.jsx(c("PolarisAspectRatio.react"), {
                aspectRatio: j,
                className: "x18d0r48 x1lvsgvq x47corl x87ps6o",
                style: { backgroundImage: "url(" + d + ")" },
              })
            : null,
          h.jsx(c("PolarisAddHighlightsPreviewOverlay.react"), {
            isActive: l,
            isSelected: f.includes(e.id),
          }),
          a &&
            h.jsx(c("PolarisAddHighlightsStoryDateOverlay.react"), {
              hasYearInOverlay: b,
              postedAt: Number(e.postedAt),
            }),
        ],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.hasDateOverlay = m;
    g.hasYearInOverlay = n;
    g.renderAddHighlightsStoryPreview = a;
    g.renderAddHighlightsPlaceholder = b;
  },
  98
);
__d(
  "PolarisAddHighlightsCover.react",
  [
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "PolarisAddHighlightsStoryPreview.react",
    "PolarisGenericStrings",
    "PolarisHighlightsConstants",
    "PolarisIGCoreModalHeader",
    "PolarisIGTheme.react",
    "PolarisIGVirtualGrid.react",
    "PolarisNewHighlightsStrings",
    "PolarisReactRedux",
    "nullthrows",
    "polarisStorySelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.editing;
      b = b === void 0 ? !1 : b;
      var e = a.highlightThumbnailUrl,
        f = a.onBack,
        g = a.onClose,
        j = a.onDone,
        k = a.requestInFlight,
        l = a.selectedStoryIds,
        m = c("nullthrows")(
          d("PolarisReactRedux").useSelector(function (a) {
            return d("polarisUserSelectors").getViewer(a);
          })
        ),
        n = d("PolarisReactRedux")
          .useSelector(function (a) {
            return d("polarisStorySelectors")
              .getStoriesbyUser(a, m)
              .filter(function (a) {
                return l.includes(a.id);
              });
          })
          .sort(function (a, b) {
            return parseFloat(b.postedAt) - parseFloat(a.postedAt);
          });
      a = i(b && e != null ? null : n[0]);
      var o = a[0],
        p = a[1],
        q = function (a) {
          (o == null || (o == null ? void 0 : o.id) !== a) &&
            p(
              n.filter(function (b) {
                return b.id === a;
              })[0]
            );
        };
      b = d("PolarisIGTheme.react").useTheme();
      a = b.getTheme() === d("PolarisIGTheme.react").IGTheme.Dark;
      return h.jsxs(c("IGCoreModal"), {
        "aria-label": d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_COVER_TEXT,
        fixedWidth: !1,
        onClose: g,
        children: [
          h.jsx(c("PolarisIGCoreModalHeader"), {
            onBack: f,
            onClose: g,
            children: h.jsx(c("IGDSBox.react"), {
              padding: 4,
              position: "relative",
              children: d("PolarisNewHighlightsStrings")
                .NEW_HIGHLIGHT_COVER_TEXT,
            }),
          }),
          h.jsxs(c("IGDSBox.react"), {
            flex: "shrink",
            maxHeight: d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,
            maxWidth: d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,
            minWidth: d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,
            overflow: "auto",
            position: "relative",
            children: [
              h.jsxs(c("IGDSBox.react"), {
                height:
                  (d("PolarisHighlightsConstants").POST_PICKER_HEIGHT / 10) *
                  6.6,
                position: "relative",
                children: [
                  h.jsx("div", {
                    className: "x6ikm8r x10wlt62 x5yr21d xh8yej3 x10l6tqk",
                    children: h.jsx("div", {
                      className: "x5yr21d xh8yej3 x1lvsgvq xtea3wc x18d0r48",
                      style: {
                        backgroundImage:
                          "\n                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                url(" +
                          ((f =
                            (b = o == null ? void 0 : o.thumbnailSrc) != null
                              ? b
                              : e) != null
                            ? f
                            : "") +
                          ")\n              ",
                      },
                    }),
                  }),
                  h.jsx("div", {
                    className: "x1swvt13 x1pi30zi x6ikm8r x10wlt62",
                    children: h.jsx(c("IGDSBox.react"), {
                      height:
                        (d("PolarisHighlightsConstants").POST_PICKER_HEIGHT /
                          10) *
                        6.6,
                      position: "relative",
                      children: h.jsxs("div", {
                        className: "x6ikm8r x10wlt62 x78zum5 xl56j7k x5yr21d",
                        children: [
                          h.jsx("img", {
                            alt: d("PolarisNewHighlightsStrings")
                              .HIGHLIGHT_COVER_ALT_TEXT,
                            className: "xl1xv1r xh8yej3 x5yr21d",
                            src:
                              (g = o == null ? void 0 : o.thumbnailSrc) != null
                                ? g
                                : e,
                          }),
                          h.jsx("div", {
                            className:
                              "x10l6tqk x132ws97 x76zr16 x1gryazu xkrivgy x17qophe xds687c x78zum5 xamitd3 x14yjl9h xudhj91 x18nykt9 xww2gxu" +
                              (a ? " xy29bcn" : " xp047v6"),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              h.jsx(c("PolarisIGVirtualGrid.react"), {
                containerSize:
                  (d("PolarisHighlightsConstants").POST_PICKER_HEIGHT / 10) *
                  3.4,
                itemCount: l.length,
                itemsPerRow: 3,
                onScroll: function () {},
                renderer: function (a) {
                  a = a.index;
                  return d(
                    "PolarisAddHighlightsStoryPreview.react"
                  ).renderAddHighlightsStoryPreview({
                    isEditing: !0,
                    index: a,
                    posts: n,
                    selectedStoryIds: o != null ? [o.id] : [],
                    updateSelectedStoryIds: q,
                    isLoading: !1,
                  });
                },
                rendererPlaceholder: d("PolarisAddHighlightsStoryPreview.react")
                  .renderAddHighlightsPlaceholder,
                rowClassName: "x39eecv",
              }),
            ],
          }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            loading: k,
            onClick: function () {
              return j(o == null ? void 0 : o.id);
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
  "PolarisAddHighlightsStoryPicker.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisAddHighlightsStoryPreview.react",
    "PolarisHighlightsConstants",
    "PolarisIGVirtualGrid.react",
    "PolarisReactRedux",
    "PolarisStoryActions",
    "polarisStorySelectors",
    "react",
    "usePolarisStoryGridData",
    "useWindowSize",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = 3,
      l = 0.1;
    function a(a) {
      var b = a.editing,
        e = b === void 0 ? !1 : b,
        f = a.existingSelectedStories,
        g = a.selectedStoryIds,
        m = a.updateSelectedStoryIds,
        n = d("PolarisReactRedux").useDispatch();
      b = d("usePolarisStoryGridData").usePolarisStoryGridData();
      var o = b.archivedStories,
        p = b.endOfArchives,
        q = b.isLoading,
        r = b.user,
        s = d("PolarisReactRedux")
          .useSelector(function (a) {
            return d("polarisStorySelectors")
              .getStoriesbyUser(a, r)
              .filter(function (a) {
                var b;
                return ((b = f) != null ? b : []).includes(a.id);
              });
          })
          .sort(function (a, b) {
            return parseFloat(b.postedAt) - parseFloat(a.postedAt);
          }),
        t = i(function () {
          return d("PolarisStoryActions").requestArchivedStories(
            d("PolarisHighlightsConstants").REQUEST_NUM_STORIES
          );
        }, []);
      a = function (a) {
        q !== !0 &&
          a.numScreensFromEnd < l &&
          a.numScreensFromStart > 0 &&
          !p &&
          n(t());
      };
      j(
        function () {
          n(t());
        },
        [n, t]
      );
      b = o.length > 0;
      var u = q === !0 ? 1 : 0,
        v = c("useWindowSize")();
      v = v.innerHeight;
      v = Math.min(v - 150, d("PolarisHighlightsConstants").POST_PICKER_HEIGHT);
      return h.jsx(h.Fragment, {
        children: b
          ? h.jsx(c("IGDSBox.react"), {
              position: "relative",
              children: h.jsx(c("PolarisIGVirtualGrid.react"), {
                containerSize: v,
                itemCount: e ? s.length + u : o.length + u,
                itemsPerRow: k,
                onScroll: e ? function () {} : a,
                renderer: function (a) {
                  a = a.index;
                  return d(
                    "PolarisAddHighlightsStoryPreview.react"
                  ).renderAddHighlightsStoryPreview({
                    isEditing: e,
                    index: a,
                    posts: e ? s : o,
                    selectedStoryIds: g,
                    updateSelectedStoryIds: m,
                    isLoading: q,
                  });
                },
                rowClassName: "x1a02dak x39eecv",
              }),
            })
          : h.jsx(c("IGDSBox.react"), {
              alignItems: "center",
              height: d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,
              marginTop: 4,
              position: "relative",
              children: h.jsx(c("IGDSSpinner.react"), { size: "medium" }),
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisEditHighlightsStoryPickerTabs.react",
  [
    "IGDSText.react",
    "PolarisAddHighlightsStoryPicker.react",
    "PolarisIGCoreTabV2",
    "PolarisIGCoreTabsV2",
    "PolarisNewHighlightsStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a.currentHighlightStoryIds;
      var b = a.selectedTabStoryIds,
        e = a.storiesTabStoryIds;
      a = a.updateSelectedStoryIds;
      return h.jsxs(c("PolarisIGCoreTabsV2"), {
        children: [
          h.jsx(c("PolarisIGCoreTabV2"), {
            node: h.jsx(c("PolarisAddHighlightsStoryPicker.react"), {
              editing: !0,
              existingSelectedStories: b,
              selectedStoryIds: e,
              updateSelectedStoryIds: a,
            }),
            children: h.jsx(c("IGDSText.react").Section, {
              color: "primaryText",
              children: d("PolarisNewHighlightsStrings")
                .SELECTED_TAB_TITLE_TEXT,
            }),
          }),
          h.jsx(c("PolarisIGCoreTabV2"), {
            node: h.jsx(c("PolarisAddHighlightsStoryPicker.react"), {
              editing: !1,
              selectedStoryIds: e,
              updateSelectedStoryIds: a,
            }),
            children: h.jsx(c("IGDSText.react").Section, {
              color: "primaryText",
              children: d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT,
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
  "PolarisAddHighlightsModal.react",
  [
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "PolarisAddHighlightsStoryPicker.react",
    "PolarisEditHighlightsStoryPickerTabs.react",
    "PolarisGenericStrings",
    "PolarisHighlightsConstants",
    "PolarisIGCoreModalHeader",
    "PolarisNewHighlightsStrings",
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
        f = a.editing;
      f = f === void 0 ? !1 : f;
      var g = a.onBack,
        j = a.onClose,
        k = a.onDone,
        l = a.onUpdateStoryIds,
        m = a.requestInFlight;
      a = a.currentHighlightStoryIds;
      a = a === void 0 ? [] : a;
      var n = i(a),
        o = n[0],
        p = n[1];
      n = function (a) {
        o.includes(a) ||
          p(function (b) {
            return [].concat(b, [a]);
          }),
          l(a);
      };
      b = (a.length === 0 && !b) || m;
      return h.jsxs(c("IGCoreModal"), {
        "aria-label": d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT,
        disablePopInAnimation: e,
        fixedWidth: !1,
        onClose: j,
        children: [
          h.jsx(c("PolarisIGCoreModalHeader"), {
            onBack: g,
            onClose: j,
            children: h.jsx(c("IGDSBox.react"), {
              padding: 4,
              position: "relative",
              children: d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT,
            }),
          }),
          h.jsxs(c("IGDSBox.react"), {
            flex: "shrink",
            maxHeight: f
              ? d("PolarisHighlightsConstants").POST_PICKER_HEIGHT + 41
              : d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,
            maxWidth: d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,
            minWidth: d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,
            overflow: "auto",
            position: "relative",
            children: [
              f &&
                h.jsx(c("PolarisEditHighlightsStoryPickerTabs.react"), {
                  currentHighlightStoryIds: a,
                  selectedTabStoryIds: o,
                  storiesTabStoryIds: a,
                  updateSelectedStoryIds: n,
                }),
              !f &&
                h.jsx(c("PolarisAddHighlightsStoryPicker.react"), {
                  editing: f,
                  selectedStoryIds: a,
                  updateSelectedStoryIds: n,
                }),
            ],
          }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            disabled: b,
            loading: m,
            onClick: function () {
              return k();
            },
            children: d("PolarisGenericStrings").NEXT,
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
  "PolarisNewHighlightsModal.react",
  [
    "IGCoreDialog",
    "IGCoreModal",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisIGCoreModalHeader",
    "PolarisIGCoreTextInput",
    "PolarisIGCoreThumbnail",
    "PolarisNewHighlightsStrings",
    "isStringNullOrWhitespaceOnly",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 100;
    function a(a) {
      var b = a.actionText,
        e = a.editing,
        f = a.errorMessage,
        g = a.highlightName,
        j = a.onActionClick,
        k = a.onClose,
        l = a.onUpdateHighlightsName,
        m = a.requestInFlight;
      a = a.thumbnailSrc;
      var n = c("isStringNullOrWhitespaceOnly")(g);
      return h.jsxs(c("IGCoreModal"), {
        "aria-label": e
          ? d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT
          : d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT,
        onClose: k,
        children: [
          h.jsx(c("PolarisIGCoreModalHeader"), {
            onClose: k,
            children: h.jsx(c("IGDSBox.react"), {
              padding: 4,
              position: "relative",
              children: e
                ? d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT
                : d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT,
            }),
          }),
          h.jsxs(c("IGDSBox.react"), {
            margin: 5,
            position: "relative",
            children: [
              a != null &&
                h.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  marginBottom: 4,
                  position: "relative",
                  width: "100%",
                  children: h.jsx(c("PolarisIGCoreThumbnail"), {
                    alt: d("PolarisNewHighlightsStrings").STORY_ALT_TEXT,
                    dimension: i,
                    shape: "rounded",
                    src: a,
                  }),
                }),
              h.jsx(c("PolarisIGCoreTextInput"), {
                autoComplete: "off",
                autoFocus: !0,
                name: "highlightName",
                onChange: function (a) {
                  l(a.target.value);
                },
                placeholder: d("PolarisNewHighlightsStrings")
                  .HIGHLIGHT_NAME_TEXT,
                value: g,
              }),
              f != null &&
                f.toString() !== "" &&
                h.jsx(c("IGDSBox.react"), {
                  marginBottom: 2,
                  marginTop: 1,
                  position: "relative",
                  children: h.jsx(c("IGDSText.react").Footnote, {
                    color: "errorOrDestructive",
                    children: f,
                  }),
                }),
            ],
          }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-primary-button",
            disabled: n,
            onClick: j,
            children:
              m === !0
                ? h.jsx(c("IGDSBox.react"), {
                    alignItems: "center",
                    position: "relative",
                    children: h.jsx(c("IGDSSpinner.react"), { size: "small" }),
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
  "PolarisCreateAndAddHighlightsModal.react",
  [
    "$InternalEnum",
    "PolarisAddHighlightsCover.react",
    "PolarisAddHighlightsModal.react",
    "PolarisGenericStrings",
    "PolarisNewHighlightsModal.react",
    "PolarisReactRedux",
    "PolarisStoryActions",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState,
      j = b("$InternalEnum").Mirrored(["Name", "Stories", "Cover"]);
    function a(a) {
      var b = a.currentHighlightStoryIds,
        e = a.editing;
      e = e === void 0 ? !1 : e;
      var f = a.highlightId,
        g = a.highlightName,
        k = a.highlightThumbnailUrl,
        l = a.onClose,
        m = a.user,
        n = d("PolarisReactRedux").useDispatch();
      g = i((a = g) != null ? a : "");
      var o = g[0],
        p = g[1];
      a = i(!1);
      g = a[0];
      var q = a[1];
      a = i((a = b) != null ? a : []);
      var r = a[0],
        s = a[1];
      a = function (a) {
        p(a);
      };
      var t = function (a) {
          r.includes(a)
            ? s(function (b) {
                return [].concat(b).filter(function (b) {
                  return b !== a;
                });
              })
            : s(function (b) {
                return [].concat(b, [a]);
              });
        },
        u = i(j.Name),
        v = u[0],
        w = u[1];
      u = function () {
        w(j.Stories);
      };
      var x = function () {
          w(j.Cover);
        },
        y = function (a) {
          q(!0);
          n(
            d("PolarisStoryActions").addNewHighlight(
              r,
              m.id,
              o,
              (a = a) != null ? a : r[0]
            )
          );
          l();
        },
        z = function (a) {
          var c;
          q(!0);
          n(
            d("PolarisStoryActions").editHighlightAction(
              r,
              (c = b) != null ? c : [],
              (c = f) != null ? c : "",
              m.id,
              o,
              a
            )
          );
          l();
        };
      if (v === j.Name)
        return h.jsx(c("PolarisNewHighlightsModal.react"), {
          actionText: d("PolarisGenericStrings").NEXT,
          editing: e,
          highlightName: o,
          onActionClick: u,
          onClose: l,
          onUpdateHighlightsName: a,
        });
      if (v === j.Stories)
        return h.jsx(c("PolarisAddHighlightsModal.react"), {
          allowEmptySelection: !1,
          currentHighlightStoryIds: r,
          disablePopInAnimation: !0,
          editing: e,
          onBack: function () {
            return w(j.Name);
          },
          onClose: l,
          onDone: x,
          onUpdateStoryIds: t,
          requestInFlight: g,
        });
      if (v === j.Cover)
        return h.jsx(c("PolarisAddHighlightsCover.react"), {
          editing: e,
          highlightThumbnailUrl: k,
          onBack: function () {
            return w(j.Stories);
          },
          onClose: l,
          onDone: e ? z : y,
          requestInFlight: g,
          selectedStoryIds: r,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisHasAddHighlightEnabled",
  ["PolarisConfig", "PolarisUA"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return d("PolarisUA").isDesktop() && d("PolarisConfig").isLoggedIn();
    }
    g.hasAddHighlightEnabled = a;
  },
  98
);
__d(
  "PolarisProfileStoryHighlightsTrayItem.react",
  [
    "fbt",
    "IGDSAddOutline24Icon",
    "IGDSCheckPanoFilledIcon",
    "IGDSText.react",
    "PolarisAvatarWithStoriesContainer.react",
    "PolarisIGCorePressable",
    "PolarisIGCoreText",
    "PolarisNewHighlightsStrings",
    "PolarisStoryRing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 0;
    function k() {
      return "ProfileStoryHighlightsTrayItem" + j++;
    }
    function l(a) {
      var b = a.highlightLabel;
      a = a.isSmallScreen;
      return a
        ? i.jsx(c("PolarisIGCoreText").Body2, {
            display: "truncated",
            zeroMargin: !0,
            children: b,
          })
        : i.jsx(c("IGDSText.react").Body2Emphasized, {
            maxLines: 1,
            zeroMargin: !0,
            children: b,
          });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b,
        e = a.addNewHighlight,
        f = a.avatarSize,
        g = a.hasOverlay,
        j = a.isSmallScreen,
        m = a.onClick,
        n = a.reel,
        o = k();
      a = function () {
        var a;
        m((a = n == null ? void 0 : n.id) != null ? a : "", o);
      };
      var p = { width: f, height: f };
      b =
        (b = n == null ? void 0 : n.title) != null
          ? b
          : d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_TEXT;
      b = i.jsx(l, { highlightLabel: b, isSmallScreen: j });
      return i.jsxs(c("PolarisIGCorePressable"), {
        className:
          "x6s0dn4 x78zum5 xdt5ytf x9f619 x1jo5dny x5zefxq x1u2d83q x1lvagci x11853ko xwzhuwn x19xppfw x1lvlso5 x1hqdklf x4js05n xm4az7",
        onPress: a,
        role: "menuitem",
        children: [
          n != null &&
            i.jsx(c("PolarisAvatarWithStoriesContainer.react"), {
              canTabFocus: !1,
              clickTargetElementId: o,
              entrypoint: "reel_profile_highlights",
              highlightReelId: n.highlightReelId,
              size: f,
              children: i.jsxs("div", {
                className:
                  "xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x1lliihq",
                style: p,
                children: [
                  g === !0 &&
                    i.jsx("div", {
                      className:
                        "x10l6tqk x5yr21d xh8yej3 x1t43zwg x78zum5 xl56j7k x6s0dn4",
                      children: i.jsx(c("IGDSCheckPanoFilledIcon"), {
                        alt: h._("Check"),
                        color: "ig-primary-background",
                      }),
                    }),
                  i.jsx("img", {
                    alt: h._("{username}'s profile picture", [
                      h._param("username", n.title),
                    ]),
                    className:
                      "x6umtig x1b1mbwd xaqea5y xav7gou xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3",
                    "data-testid": void 0,
                    src: n.thumbnailUrl,
                  }),
                ],
              }),
            }),
          e === !0 &&
            i.jsxs("div", {
              className: "xamitd3 x1lliihq x1n2onr6 x87ps6o x1ypdohk",
              children: [
                i.jsx(c("PolarisStoryRing.react"), {
                  isCenterOnAvatar: !0,
                  seen: !0,
                  showRing: !0,
                  size: f,
                }),
                i.jsx("div", {
                  className:
                    "xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x78zum5 xl56j7k x6s0dn4",
                  style: p,
                  children: i.jsx(c("IGDSAddOutline24Icon"), {
                    alt: d("PolarisNewHighlightsStrings")
                      .NEW_HIGHLIGHT_BUTTON_ALT_TEXT,
                    color: "ig-tertiary-icon",
                    size: j ? 30 : 44,
                  }),
                }),
              ],
            }),
          i.jsx("div", {
            className: "x1ypdohk x2b8uid xh8yej3 xpzf5u2 x1ldzjpm",
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
  "PolarisUserAvatarWithStoriesPlaceholder.react",
  ["cx", "PolarisStoryRing.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.className,
        d = a.hideAvatarBorder;
      a = a.size;
      return i.jsxs("div", {
        className: c("joinClasses")("_acop", b),
        children: [
          i.jsx(c("PolarisStoryRing.react"), {
            className: "_acoq",
            isLoading: !1,
            seen: !0,
            showRing: !1,
            size: a,
          }),
          i.jsx("div", {
            className: "_acor" + (d ? "" : " _acos"),
            style: { height: a, width: a },
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
  "PolarisProfileStoryHighlightsTrayItemPlaceholder.react",
  ["cx", "PolarisUserAvatarWithStoriesPlaceholder.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.avatarSize;
      return i.jsxs("div", {
        className: "_aa-u",
        children: [
          i.jsx(c("PolarisUserAvatarWithStoriesPlaceholder.react"), {
            className: "_aa-v",
            size: a,
          }),
          i.jsx("div", { className: "_aa-w" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisProfileStoryLoggedOutHighlightsTrayItem.react",
  [
    "fbt",
    "IGDSAddOutline24Icon",
    "IGDSCheckPanoFilledIcon",
    "IGDSText.react",
    "PolarisAvatarWithStoriesContainer.react",
    "PolarisIGCorePressable",
    "PolarisIGCoreText",
    "PolarisNewHighlightsStrings",
    "PolarisReactRedux",
    "PolarisStoryRing.react",
    "polarisStorySelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    d("react").useMemo;
    var j = 0;
    function k() {
      return "ProfileStoryHighlightsTrayItem" + j++;
    }
    function l(a) {
      var b = a.highlightLabel;
      a = a.isSmallScreen;
      return a
        ? i.jsx(c("PolarisIGCoreText").Body2, {
            display: "truncated",
            zeroMargin: !0,
            children: b,
          })
        : i.jsx(c("IGDSText.react").Body2Emphasized, {
            maxLines: 1,
            zeroMargin: !0,
            children: b,
          });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b,
        e = a.addNewHighlight,
        f = a.avatarSize,
        g = a.hasOverlay,
        j = a.isSmallScreen,
        m = a.onClick,
        n = a.reel,
        o = k();
      a = function () {
        var a;
        m((a = n == null ? void 0 : n.id) != null ? a : "", o);
      };
      var p = { width: f, height: f };
      b =
        (b = n == null ? void 0 : n.title) != null
          ? b
          : d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_TEXT;
      b = i.jsx(l, { highlightLabel: b, isSmallScreen: j });
      var q = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisStorySelectors").getFitGreenHighlightReels(a);
        }),
        r = c("qex")._("862") === 2,
        s = q.includes(n == null ? void 0 : n.id) && r;
      q = !q.includes(n == null ? void 0 : n.id) && r;
      return i.jsxs(c("PolarisIGCorePressable"), {
        className:
          "x6s0dn4 x78zum5 xdt5ytf x9f619 x1jo5dny x5zefxq x1u2d83q x1lvagci x11853ko xwzhuwn x19xppfw x1lvlso5 x1hqdklf x4js05n xm4az7",
        onPress: a,
        role: "menuitem",
        children: [
          n != null &&
            i.jsxs(c("PolarisAvatarWithStoriesContainer.react"), {
              canTabFocus: !1,
              clickTargetElementId: o,
              entrypoint: "reel_profile_highlights",
              highlightReelId: n.highlightReelId,
              size: f,
              children: [
                s &&
                  i.jsx(c("PolarisStoryRing.react"), {
                    isCenterOnAvatar: !0,
                    showRing: !0,
                    size: f,
                  }),
                i.jsxs("div", {
                  className:
                    "xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x1lliihq",
                  style: p,
                  children: [
                    g === !0 &&
                      i.jsx("div", {
                        className:
                          "x10l6tqk x5yr21d xh8yej3 x1t43zwg x78zum5 xl56j7k x6s0dn4",
                        children: i.jsx(c("IGDSCheckPanoFilledIcon"), {
                          alt: h._("Check"),
                          color: "ig-primary-background",
                        }),
                      }),
                    i.jsx("img", {
                      alt: h._("{username}'s profile picture", [
                        h._param("username", n.title),
                      ]),
                      className:
                        "x6umtig x1b1mbwd xaqea5y xav7gou xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3" +
                        (q ? " xqzmdpo" : ""),
                      src: n.thumbnailUrl,
                    }),
                  ],
                }),
              ],
            }),
          e === !0 &&
            i.jsxs("div", {
              className: "xamitd3 x1lliihq x1n2onr6 x87ps6o x1ypdohk",
              children: [
                i.jsx(c("PolarisStoryRing.react"), {
                  isCenterOnAvatar: !0,
                  seen: !0,
                  showRing: !0,
                  size: f,
                }),
                i.jsx("div", {
                  className:
                    "xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x78zum5 xl56j7k x6s0dn4",
                  style: p,
                  children: i.jsx(c("IGDSAddOutline24Icon"), {
                    alt: d("PolarisNewHighlightsStrings")
                      .NEW_HIGHLIGHT_BUTTON_ALT_TEXT,
                    color: "ig-tertiary-icon",
                    size: j ? 30 : 44,
                  }),
                }),
              ],
            }),
          i.jsx("div", {
            className:
              "x1ypdohk x2b8uid xh8yej3 xpzf5u2 x1ldzjpm" +
              (q ? " xqzmdpo" : ""),
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
  "PolarisProfileStoryHighlightsTray.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisConfig",
    "PolarisCreateAndAddHighlightsModal.react",
    "PolarisHasAddHighlightEnabled",
    "PolarisLinkBuilder",
    "PolarisLogger",
    "PolarisProfileQEHelpers",
    "PolarisProfileStoryHighlightsTrayItem.react",
    "PolarisProfileStoryHighlightsTrayItemPlaceholder.react",
    "PolarisProfileStoryLoggedOutHighlightsTrayItem.react",
    "PolarisReactRedux",
    "PolarisStoryActions",
    "PolarisVirtualHSnapScroll.react",
    "browserHistory",
    "immutable-4.0.0-rc.9",
    "nullthrows",
    "polarisStorySelectors",
    "polarisUserSelectors",
    "react",
    "shouldDisplayLoggedOutHighlights",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    h = d("react");
    var j = h.useMemo,
      k = h.useState,
      l = { cardWidth: 70, gapWidth: 5, gutterWidth: 0 },
      m = { cardWidth: 120, gapWidth: 10, gutterWidth: 24 },
      n = { cardWidth: 115, gapWidth: 10, gutterWidth: 0 },
      o = 56,
      p = 77;
    function a(a) {
      var b = a.highlightReelCount,
        e = a.highlightReelIdsWithOverlay,
        f = a.isSmallScreen,
        g = a.onClick,
        h = a.onLoadReel,
        q = a.reels,
        r = a.storyEntrypoint,
        s = a.user,
        t = a.userFollowerCount,
        u = a.userId,
        v = a.viewer;
      a = k(!1);
      var w = a[0],
        x = a[1];
      a =
        r !== !0 &&
        d("PolarisProfileQEHelpers").hasCondensedStoryTrayOnDesktop();
      var y = function (a) {
          d("browserHistory").browserHistory.push(
            d("PolarisLinkBuilder").buildHighlightStoryLink(a)
          );
        },
        z = function () {
          d("PolarisLogger").logAction("addHighlightIconClick"), x(!0);
        },
        A = a ? 8 : 7,
        B = f ? l : a ? n : m;
      a = j(
        function () {
          return Array.from({ length: Math.min(b, A) }, function (a, b) {
            return i.jsx(
              c("IGDSBox.react"),
              {
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: B.cardWidth + B.gapWidth / 2,
                children: i.jsx(
                  c("PolarisProfileStoryHighlightsTrayItemPlaceholder.react"),
                  { avatarSize: f ? o : p },
                  b
                ),
              },
              b
            );
          });
        },
        [A, b, f, B.cardWidth, B.gapWidth]
      );
      var C = j(
          function () {
            var a = function (a, b) {
              if (r === !0) {
                var e;
                e = [].concat(Array.from((e = q) != null ? e : []));
                e = e.find(function (b) {
                  return b.id === a;
                });
                e != null && g(e);
              } else
                v || c("shouldDisplayLoggedOutHighlights")(t)
                  ? h(
                      d("immutable-4.0.0-rc.9").Seq.Indexed(c("nullthrows")(q)),
                      a,
                      b,
                      function () {
                        return y(a);
                      }
                    )
                  : y(a);
            };
            return q != null
              ? q
                  .map(function (b) {
                    var g;
                    return i.jsx(
                      c("IGDSBox.react"),
                      {
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        width: B.cardWidth + B.gapWidth / 2,
                        children: d("PolarisConfig").isLoggedIn()
                          ? i.jsx(
                              c("PolarisProfileStoryHighlightsTrayItem.react"),
                              {
                                avatarSize: f ? o : p,
                                hasOverlay:
                                  (g = e == null ? void 0 : e.includes(b.id)) !=
                                  null
                                    ? g
                                    : !1,
                                isSmallScreen: f,
                                onClick: a,
                                reel: b,
                              }
                            )
                          : i.jsx(
                              c(
                                "PolarisProfileStoryLoggedOutHighlightsTrayItem.react"
                              ),
                              {
                                avatarSize: f ? o : p,
                                hasOverlay:
                                  (g = e == null ? void 0 : e.includes(b.id)) !=
                                  null
                                    ? g
                                    : !1,
                                isSmallScreen: f,
                                onClick: a,
                                reel: b,
                              }
                            ),
                      },
                      b.id
                    );
                  })
                  .toArray()
              : [];
          },
          [e, f, g, h, q, B.cardWidth, B.gapWidth, r, t, v]
        ),
        D = function () {
          return i.jsx(
            c("IGDSBox.react"),
            {
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: B.cardWidth + B.gapWidth / 2,
              children: i.jsx(
                c("PolarisProfileStoryHighlightsTrayItem.react"),
                {
                  addNewHighlight: !0,
                  avatarSize: f ? o : p,
                  isSmallScreen: f,
                  onClick: z,
                }
              ),
            },
            "newHighlight"
          );
        },
        E = q != null;
      u = u === (v == null ? void 0 : v.id);
      return i.jsxs("div", {
        className: r !== !0 ? "_ab05" : "x1phlbz0",
        "data-testid": void 0,
        role: "menu",
        children: [
          r === !0 &&
            i.jsx("div", {
              className: "x78zum5 x1a02dak",
              children: q == null ? a : C,
            }),
          r == null &&
            i.jsx(
              c("PolarisVirtualHSnapScroll.react"),
              {
                gutterWidth: B.gutterWidth,
                itemWidth: B.cardWidth + B.gutterWidth / 2,
                overscan: 7,
                pagerDisabled: f || !E,
                children:
                  q == null
                    ? u &&
                      d(
                        "PolarisHasAddHighlightEnabled"
                      ).hasAddHighlightEnabled()
                      ? a.concat(D())
                      : a
                    : u &&
                      d(
                        "PolarisHasAddHighlightEnabled"
                      ).hasAddHighlightEnabled()
                    ? C.concat(D())
                    : C,
              },
              E ? "highlights" : "placeholder"
            ),
          w &&
            i.jsx(c("PolarisCreateAndAddHighlightsModal.react"), {
              onClose: function () {
                return x(!1);
              },
              user: s,
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      var e = d("polarisStorySelectors").getHighlightReelsByUserId(a, b.userId),
        f = c("nullthrows")(a.users.users.get(b.userId)).highlightReelCount;
      a = d("polarisUserSelectors").getUserById(a, b.userId);
      return {
        highlightReelCount: f == null ? 0 : f,
        reels: e,
        userFollowerCount: (b = a.counts) == null ? void 0 : b.followedBy,
      };
    }
    function e(a) {
      return {
        onLoadReel: function (b, c, e, f) {
          a(
            d("PolarisStoryActions").openReelsMedia(
              b,
              "reel_profile_highlights",
              c,
              e,
              void 0,
              !0,
              f
            )
          );
        },
      };
    }
    h = d("PolarisReactRedux").connect(b, e)(a);
    g["default"] = h;
  },
  98
);
