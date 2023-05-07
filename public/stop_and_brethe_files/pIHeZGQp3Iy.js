/*FB_PKG_DELIM*/

__d(
  "IGDSCircleAddPanoOutlineIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        c("IGDSSVGIconBase.react"),
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
            h.jsx("line", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              x1: "7.001",
              x2: "17.001",
              y1: "12.005",
              y2: "12.005",
            }),
            h.jsx("line", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              x1: "12.001",
              x2: "12.001",
              y1: "7.005",
              y2: "17.005",
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
  "IGDSEyeOffOutlineIcon",
  ["IGDSEyeOffPanoOutlineIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSEyeOffPanoOutlineIcon"),
        babelHelpers["extends"]({}, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "PolarisPostRemoveCommentsSelectors",
  ["reselect"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a.postRemoveComments;
    }
    b = d("reselect").createSelector(a, function (a) {
      a = a.isVisible;
      return a;
    });
    g.getPostRemoveCommentsIsVisible = b;
  },
  98
);
__d(
  "PolarisThreadedCommentSelectors",
  [
    "PolarisPaginationUtils",
    "immutable-4.0.0-rc.9",
    "nullthrows",
    "polarisCreateSelectorWithArg",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return !a.deleted && !a.didReportAsSpam;
    }
    b = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.posts.byId;
      },
      function (a) {
        return a.comments.byId;
      },
      function (a) {
        return a.threadedComments.parentByPostId;
      },
      function (a, b, e) {
        return function (f) {
          var g = e.get(f);
          f = a.get(f);
          if (!g || !f) return d("immutable-4.0.0-rc.9").List();
          var i = g.commentIds;
          g = d("PolarisPaginationUtils").getVisibleCount(g.pagination);
          f = f.hasRankedComments ? 0 : i.count() - g;
          return i
            .map(function (a) {
              return c("nullthrows")(b.get(a));
            })
            .slice(f, f + g)
            .filter(function (a) {
              return h(a);
            });
        };
      }
    );
    e = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.comments.byId;
      },
      function (a) {
        return a.threadedComments.childByParentId;
      },
      function (a, b) {
        return function (e) {
          e = c("nullthrows")(b.get(e));
          var f = e.commentIds;
          e = e.pagination;
          f = f.map(function (b) {
            return c("nullthrows")(a.get(b));
          });
          e = f.count() - d("PolarisPaginationUtils").getVisibleCount(e);
          var g = f.slice(e, f.count()).filter(function (a) {
            return h(a);
          });
          f = f.slice(0, e).filter(function (a) {
            return h(a);
          });
          e = f.map(function (a) {
            return a.id;
          });
          return {
            visibleChildComments: g,
            remainingCachedShowableChildCommentIds: e,
          };
        };
      }
    );
    f = c("polarisCreateSelectorWithArg")(
      function (a) {
        return a.comments.byId;
      },
      function (a) {
        return a.threadedComments.childByParentId;
      },
      function (a, b) {
        return function (a) {
          a = c("nullthrows")(b.get(a));
          return a.count || 0;
        };
      }
    );
    function a(a, b) {
      return !!((a = a.threadedComments.initialCommentsLoading) == null
        ? void 0
        : a.get(b));
    }
    g.selectVisibleParentCommentsForPostId = b;
    g.selectChildCommentsForParentIdSplitByVisibility = e;
    g.getTotalChildCommentCountForParentId = f;
    g.getThreadedCommentsLoading = a;
  },
  98
);
__d(
  "PolarisApproveCommentDialog.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisCommentActions",
    "PolarisGenericStrings",
    "PolarisIgWellbeingRestrictManageCommentFalcoEvent",
    "PolarisReactRedux",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Approve"),
      k = h._("Approve This Comment?");
    function l(a) {
      return h._(
        "Only you and {username} can see this comment. If you approve it, it'll be visible to everyone.",
        [h._param("username", a)]
      );
    }
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$1 = function () {
            var a = d.props,
              b = a.commentId,
              e = a.commentOwnerId,
              f = a.commentThreadId;
            a = a.postId;
            c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
              action: "click",
              actorIgUserid: e,
              commentId: b,
              commentThreadId: f,
              parentMediaId: a,
              step: "approval_page_approve_this_comment",
            });
            d.props.onApproveClick();
            d.props.onClose();
          }),
          (d.$2 = function () {
            var a = d.props,
              b = a.commentId,
              e = a.commentOwnerId,
              f = a.commentThreadId;
            a = a.postId;
            c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
              action: "click",
              actorIgUserid: e,
              commentId: b,
              commentThreadId: f,
              parentMediaId: a,
              step: "approval_page_cancel",
            });
            d.props.onClose();
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.props.commentOwnerUsername;
        return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
          body: l(a),
          onModalClose: this.props.onClose,
          title: k,
          children: [
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: "ig-primary-button",
              onClick: this.$1,
              children: j,
            }),
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              onClick: this.$2,
              children: d("PolarisGenericStrings").CANCEL_TEXT,
            }),
          ],
        });
      };
      return b;
    })(i.Component);
    function a(a, b) {
      return {
        onApproveClick: function () {
          a(d("PolarisCommentActions").approveRestrictedComment(b.commentId));
        },
      };
    }
    e = d("PolarisReactRedux").connect(null, a)(b);
    g.APPROVE_COMMENT_CTA = j;
    g.ApproveCommentDialog = e;
  },
  98
);
__d(
  "PolarisCommentCover.react",
  [
    "fbt",
    "BaseButton.react",
    "IGDSBox.react",
    "IGDSEyeOffOutlineIcon",
    "IGDSText.react",
    "PolarisReactRedux",
    "PolarisThreadedCommentActions",
    "PolarisWellbeingCommentCoverFalcoEvent",
    "react",
    "usePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useState,
      m = {
        viewHiddenCommentsButton: {
          userSelect: "x87ps6o",
          ":active_opacity": "x1d5wrs8",
          $$css: !0,
        },
      },
      n = function (a) {
        var b = j(
          function () {
            a();
          },
          [a]
        );
        return c("usePartialViewImpression")({ onImpressionStart: b });
      };
    function a(a) {
      var b = a.nuxSeenCounter,
        e = a.onClick,
        f = a.postId,
        g = d("PolarisReactRedux").useDispatch();
      a = l(!1);
      var j = a[0],
        o = a[1];
      a = l(!1);
      var p = a[0],
        q = a[1];
      a = n(function () {
        return q(!0);
      });
      k(
        function () {
          b <= 2 && o(!0);
        },
        [b]
      );
      k(
        function () {
          p &&
            (g(
              d(
                "PolarisThreadedCommentActions"
              ).incrementCommentCoverSeenCounter()
            ),
            d("PolarisWellbeingCommentCoverFalcoEvent").logCommentCover({
              action: "impression",
              mediaId: f,
              step: "comment_cover_cta_impression",
            }),
            j &&
              d("PolarisWellbeingCommentCoverFalcoEvent").logCommentCover({
                action: "impression",
                mediaId: f,
                step: "comment_cover_nux_impression",
              }));
        },
        [p, g, f, j]
      );
      var r = function () {
        d("PolarisWellbeingCommentCoverFalcoEvent").logCommentCover({
          action: "click",
          mediaId: f,
          step: j
            ? "comment_cover_cta_with_nux_click"
            : "comment_cover_cta_without_nux_click",
        }),
          e();
      };
      return i.jsxs(c("IGDSBox.react"), {
        containerRef: a,
        direction: "column",
        marginStart: 12,
        children: [
          i.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            marginBottom: 4,
            children: [
              i.jsx(c("IGDSEyeOffOutlineIcon"), {
                alt: h._("View hidden comments"),
                color: "ig-secondary-text",
                size: 15,
              }),
              i.jsx(c("IGDSBox.react"), {
                marginStart: 2,
                children: i.jsx(c("BaseButton.react"), {
                  onClick: r,
                  xstyle: m.viewHiddenCommentsButton,
                  children: i.jsx(c("IGDSText.react"), {
                    color: "secondaryText",
                    size: "footnote",
                    weight: "medium",
                    children: h._("View hidden comments"),
                  }),
                }),
              }),
            ],
          }),
          j &&
            i.jsx(c("IGDSText.react"), {
              color: "secondaryText",
              size: "footnote",
              weight: "light",
              children: h._(
                "These comments were hidden because they may be misleading, offensive or spam. People can still tap to view them."
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
  "PolarisCommentOptionsDialog.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisFRXReportModal.react",
    "PolarisGenericStrings",
    "PolarisReportConstants",
    "PolarisReportUnderLawDialogItem.react",
    "polarisIsUserLoggedIn",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    function a(a) {
      var b = a.canDeleteComment,
        e = a.canPinComment;
      e = e === void 0 ? !1 : e;
      var f = a.commentId,
        g = a.commentOwnerAvatar,
        k = a.commentOwnerFbidV2,
        l = a.commentOwnerId,
        m = a.commentOwnerUsername,
        n = a.mediaOwnerId,
        o = a.onClose,
        p = a.onDelete;
      a = a.onPin;
      var q = j(!1),
        r = q[0],
        s = q[1];
      q = function () {
        s(!0);
      };
      var t = function () {
          o(), s(!1);
        },
        u = function () {
          p(), o();
        };
      if (r)
        return i.jsx(c("PolarisFRXReportModal.react"), {
          frxLocation: d("PolarisReportConstants").FRXLocation.COMMENTS,
          frxObjectType: d("PolarisReportConstants").FRXObjectType.COMMENT,
          onClose: t,
          reportedObjectID: f,
          reportedOwner: { id: l, fbidV2: k, username: m, profilePicURL: g },
          useSimpleBlockModalWithoutRefresh: l === n,
        });
      r = d("polarisIsUserLoggedIn").isUserLoggedIn()
        ? i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: q,
            children: h._("Report"),
          })
        : i.jsx(
            d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem,
            { contentId: f }
          );
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: t,
        children: [
          r,
          e &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: "ig-secondary-button",
              onClick: a,
              children: h._("Pin comment"),
            }),
          b &&
            i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
              color: "ig-error-or-destructive",
              onClick: u,
              children: h._("Delete"),
            }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: t,
            children: d("PolarisGenericStrings").CANCEL_TEXT,
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
  "PolarisUnhideCommentDialog.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisCommentActions",
    "PolarisGenericStrings",
    "PolarisReactRedux",
    "PolarisWellbeingCommentCoverFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.commentId,
        c = a.onClose,
        e = a.postId,
        f = a.postOwnerId,
        g = d("PolarisReactRedux").useDispatch();
      a = function () {
        g(d("PolarisCommentActions").unhideCoveredComment(b, e, f)),
          d("PolarisWellbeingCommentCoverFalcoEvent").logCommentCover({
            action: "click",
            commentId: b,
            mediaId: e,
            step: "unhide_comment_confirm",
          }),
          c();
      };
      var j = function () {
        c();
      };
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: j,
        title: "Unhide comment?",
        children: [
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-secondary-button",
            onClick: a,
            children: h._("Unhide"),
          }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: j,
            children: d("PolarisGenericStrings").CANCEL_TEXT,
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
  "PolarisPostComment.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSMoreHorizontalPanoOutlineIcon",
    "IGDSText.react",
    "PolarisApproveCommentDialog.react",
    "PolarisCommentActions",
    "PolarisCommentLikeListsActions",
    "PolarisCommentOptionsDialog.react",
    "PolarisCommentTranslationPrompt.react",
    "PolarisConfig",
    "PolarisDoubleTappable",
    "PolarisEngagementLogger",
    "PolarisFastLink.react",
    "PolarisIGCoreConstants",
    "PolarisIGCoreSVGIconButton",
    "PolarisIGCoreVerifiedBadge",
    "PolarisIgWellbeingRestrictManageCommentFalcoEvent",
    "PolarisLikeButton.react",
    "PolarisLinkBuilder",
    "PolarisNavigationActions",
    "PolarisPendingCommentActions",
    "PolarisPostCaptionTranslationPrompt.react",
    "PolarisPostGifComment.react",
    "PolarisPostStrings",
    "PolarisPostVariants",
    "PolarisReactRedux",
    "PolarisTimestamp.react",
    "PolarisTruncatedText.react",
    "PolarisUA",
    "PolarisUnhideCommentDialog.react",
    "PolarisUserAvatarWithStories.react",
    "PolarisUserHoverCard.react",
    "PolarisUserText.react",
    "PolarisViewpointReact.react",
    "PolarisWellbeingCommentCoverFalcoEvent",
    "gkx",
    "joinClasses",
    "nullthrows",
    "polarisPostSelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = 750;
    function l(a) {
      var b = a.parentProps,
        e = b.commentOwnerId,
        f = b.commentOwnerUsername,
        g = b.isAuthorVerified,
        h = b.isCaption,
        i = b.isRestrictedPending,
        k = b.postOwnerIsUnpublished;
      b = b.showRichComment;
      a = i && !a.parentState.showRestrictedContent;
      var l = h ? "h2" : "h3";
      if (a)
        return j.jsx(c("IGDSBox.react"), {
          marginBottom: 1,
          position: "relative",
          children: j.jsx(c("IGDSText.react"), {
            color: "tertiaryText",
            size: "body",
            weight: "semibold",
            children: d("PolarisPostStrings").RESTRICTED_ACCOUNT_HEADER_TEXT,
          }),
        });
      else if (!h || !k)
        return j.jsxs(l, {
          className: "_a9zc" + (i === !0 ? " _a9zd" : ""),
          children: [
            j.jsx(c("IGDSBox.react"), {
              marginEnd: 1,
              position: "relative",
              children: j.jsx(c("PolarisUserHoverCard.react"), {
                display: "inline",
                triggerAnalyticsContext: "post_commenter",
                userId: e,
                children: j.jsx(c("IGDSButton.react"), {
                  display: "block",
                  href: d("PolarisLinkBuilder").buildUserLink(
                    c("nullthrows")(f)
                  ),
                  label: c("nullthrows")(f),
                  variant: "secondary_link",
                }),
              }),
            }),
            b &&
              g &&
              j.jsx(c("IGDSBox.react"), {
                marginEnd: 1,
                position: "relative",
                children: j.jsx(c("PolarisIGCoreVerifiedBadge"), {
                  size: "small",
                }),
              }),
          ],
        });
      return null;
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      a = a.parentProps;
      var b = a.captionCreatedAt,
        e = a.commentThreadId,
        f = a.disableTimestampNav,
        g = a.id,
        h = a.isCaption,
        i = a.isEdited,
        k = a.postedAt;
      a = a.postShortcode;
      h = j.jsx(c("PolarisTimestamp.react"), {
        className: "_a9ze _a9zf",
        value: h && i && b != null ? b : k,
      });
      if (a && g) {
        i =
          e && e !== g
            ? d("PolarisLinkBuilder").buildReplyPermalink(
                a,
                e,
                g,
                d("PolarisUA").isMobile()
              )
            : d("PolarisLinkBuilder").buildCommentPermalink(
                a,
                g,
                d("PolarisUA").isMobile()
              );
        b =
          f === !0
            ? function (a) {
                return a.preventDefault();
              }
            : void 0;
        h = j.jsx(c("PolarisFastLink.react"), {
          className: "_a9zg",
          href: i,
          onClick: b,
          children: h,
        });
      }
      return h;
    }
    h = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            showApproveCommentDialog: !1,
            showCommentOptionsDialog: !1,
            showRestrictedContent: !1,
            showUnhideDialog: !1,
          }),
          (e.$3 = function () {
            e.setState({ showCommentOptionsDialog: !0 });
          }),
          (e.$4 = function () {
            if (
              !d("PolarisUA").isMobile() ||
              !e.props.showRichComment ||
              e.props.isCaption
            )
              return;
            e.$1 = window.setTimeout(e.$3, k);
          }),
          (e.$2 = function () {
            window.clearTimeout(e.$1);
          }),
          (e.$5 = function () {
            e.setState({ showCommentOptionsDialog: !1 });
          }),
          (e.$6 = function () {
            e.setState({ showCommentOptionsDialog: !1 }),
              e.props.onDeleteComment();
          }),
          (e.$7 = function () {
            var a = e.props,
              b = a.id;
            a = a.onDeleteCommentClick;
            a && a(c("nullthrows")(b));
          }),
          (e.$8 = function (a) {
            var b = e.props,
              c = b.onLikeComment;
            b = b.onUnlikeComment;
            a ? c() : b();
          }),
          (e.$9 = function () {
            var a = e.props,
              b = a.isRestrictedPending,
              c = a.likedByViewer;
            a = a.onLikeComment;
            !c && !b && a();
          }),
          (e.$10 = function () {
            var a = e.props,
              b = a.code,
              f = a.fetchCommentLikes,
              g = a.id,
              h = a.loggedIn,
              i = a.onLikeCountClick,
              j = a.onLoggedOutIntentClick;
            a = a.onLoggedOutIntentClickLoginModal;
            if (h) i && (f(), i(c("nullthrows")(g)));
            else {
              h = "post_comment_like_count";
              d("PolarisUA").isDesktop()
                ? a(
                    d("PolarisLinkBuilder").buildMediaLink(c("nullthrows")(b)),
                    h
                  )
                : j(h);
            }
          }),
          (e.$11 = function (a) {
            var b = e.props,
              f = b.analyticsContext,
              g = b.commentOwnerId,
              h = b.commentThreadId,
              i = b.id,
              j = b.isCovered,
              k = b.isRestrictedPending,
              l = b.mediaType,
              m = b.postId,
              n = b.postOwnerId;
            b = b.viewerId;
            switch (a.state) {
              case "entered":
                if (i != null && b != null) {
                  d("PolarisEngagementLogger").logCommentImpression({
                    commentId: i,
                    commentAuthorId: g,
                    commentThreadId: h,
                    containerModule: f,
                    isCovered: j,
                    mediaId: m,
                    mediaAuthorId: n,
                    mediaType: l,
                  });
                  k &&
                    c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
                      action: "impression",
                      actorIgUserid: g,
                      commentId: i,
                      commentThreadId: h,
                      parentMediaId: m,
                      step: "pending_comment",
                    });
                  return;
                }
            }
          }),
          (e.$12 = function () {
            var a = e.props,
              b = a.code,
              f = a.loggedIn,
              g = a.onLoggedOutIntentClick,
              h = a.onLoggedOutIntentClickLoginModal;
            a = a.onReplyClick;
            if (f) a();
            else {
              f = "post_comment_reply";
              d("PolarisUA").isDesktop()
                ? h(
                    d("PolarisLinkBuilder").buildMediaLink(c("nullthrows")(b)),
                    f
                  )
                : g(f);
            }
          }),
          (e.$13 = function () {
            var a = e.props,
              b = a.commentOwnerId,
              d = a.commentThreadId,
              f = a.id;
            a = a.postId;
            c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
              action: "click",
              actorIgUserid: b,
              commentId: f,
              commentThreadId: d,
              parentMediaId: a,
              step: "pending_comment_see_hidden",
            });
            e.setState({ showRestrictedContent: !0 });
          }),
          (e.$14 = function () {
            var a = e.props,
              b = a.commentOwnerId,
              d = a.commentThreadId,
              f = a.id;
            a = a.postId;
            c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
              action: "click",
              actorIgUserid: b,
              commentId: f,
              commentThreadId: d,
              parentMediaId: a,
              step: "pending_comment_approve",
            });
            e.setState({ showApproveCommentDialog: !0 });
          }),
          (e.$15 = function () {
            e.setState({ showApproveCommentDialog: !1 });
          }),
          (e.$16 = function () {
            e.setState({ showUnhideDialog: !1 });
          }),
          (e.$17 = function () {
            var a = e.props,
              b = a.commentOwnerId,
              d = a.commentThreadId,
              f = a.id;
            a = a.postId;
            c("PolarisIgWellbeingRestrictManageCommentFalcoEvent").log({
              action: "click",
              actorIgUserid: b,
              commentId: f,
              commentThreadId: d,
              parentMediaId: a,
              step: e.state.showRestrictedContent
                ? "pending_comment_delete"
                : "pending_comment_delete_hidden",
            });
            e.$7();
          }),
          (e.$18 = function () {
            var a = e.props,
              b = a.id;
            a = a.postId;
            d("PolarisWellbeingCommentCoverFalcoEvent").logCommentCover({
              action: "click",
              commentId: b,
              mediaId: a,
              step: "unhide_comment_click",
            });
            e.setState({ showUnhideDialog: !0 });
          }),
          (e.$19 = function () {
            var a = e.props,
              b = a.code,
              f = a.id,
              g = a.likeCount;
            a = a.loggedIn;
            if (!g) return null;
            var h = g.toLocaleString(),
              k = i._("{like count} like", [i._param("like count", h)]);
            h = i._("{like count} likes", [i._param("like count", h)]);
            k = g === 1 ? k : h;
            return (
              g > 0 &&
              (d("PolarisUA").isDesktop() || !a
                ? j.jsx("button", {
                    className: "_a9ze",
                    onClick: e.$10,
                    children: j.jsx(c("IGDSText.react"), {
                      color: "secondaryText",
                      size: "footnote",
                      weight: "semibold",
                      zeroMargin: !0,
                      children: k,
                    }),
                  })
                : j.jsx(c("PolarisFastLink.react"), {
                    className: "_a9ze",
                    href:
                      "/p/" +
                      c("nullthrows")(b) +
                      "/c/" +
                      c("nullthrows")(f) +
                      "/liked_by/",
                    children: k,
                  }))
            );
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$2();
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.className,
          f = b.commentingDisabledForViewer,
          g = b.commentOwnerAvatar,
          h = b.commentOwnerId,
          i = b.commentOwnerUsername,
          k = b.commentThreadId,
          n = b.customPaddingStyle,
          o = b.giphyMediaInfo,
          p = b.hideUserAvatar,
          q = b.id,
          r = b.isCaption,
          s = b.isCovered,
          t = b.isEdited,
          u = b.isPermalinkedComment,
          v = b.isRestrictedPending,
          w = b.likedByViewer,
          x = b.postId,
          y = b.postOwnerId,
          z = b.postOwnerIsUnpublished,
          A = b.reducedAvatarMargin,
          B = b.showCommentOptionsInline,
          C = b.showRemoveIcon,
          D = b.showRichComment,
          E = b.translation,
          F = b.variant,
          G = b.viewerId,
          H = this.props.text.toString();
        (E == null ? void 0 : E.showTranslatedText) === !0 &&
          E.translatedText != null &&
          (H = E.translatedText);
        var I = !r && G && (G === h || y === G),
          J = I && C && !D,
          K = !r && !!G && !J && !v;
        b = d("PolarisConfig").isNetzDGEligible() && u;
        var L = b || (D && !d("PolarisUA").isMobile() && !r && G != null),
          M =
            F === d("PolarisPostVariants").VARIANTS.feed
              ? c("PolarisTruncatedText.react")
              : c("PolarisUserText.react"),
          N = !!r || (!K && !I),
          O = v && !this.state.showRestrictedContent,
          P = v && this.state.showRestrictedContent;
        E = o != null;
        var Q = E
            ? o == null
              ? void 0
              : (C = o.images) == null
              ? void 0
              : (u = C.fixed_height) == null
              ? void 0
              : u.url
            : void 0,
          R = j.jsx("div", {
            className: B === !0 ? "_a9ze" : "",
            children: j.jsx("div", {
              className: (B !== !0 ? "_a9zh" : "") + (B === !0 ? " _a9zi" : ""),
              children: j.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: this.$3,
                children: j.jsx(c("IGDSBox.react"), {
                  alignItems: "center",
                  height: 24,
                  justifyContent: "center",
                  position: "relative",
                  width: 24,
                  children: j.jsx(c("IGDSMoreHorizontalPanoOutlineIcon"), {
                    alt: d("PolarisPostStrings").COMMENT_OPTIONS_ALT_TEXT,
                    color: "ig-secondary-text",
                  }),
                }),
              }),
            }),
          });
        return j.jsx(d("PolarisViewpointReact.react").Viewpoint, {
          action: this.$11,
          id: H.replace(" ", "-"),
          children: function (b) {
            return j.jsxs(d("PolarisDoubleTappable").DoubleTappable, {
              onDoubleClick: a.$9,
              role: "button",
              children: [
                j.jsx("li", {
                  className: c("joinClasses")(
                    (D ? "_a9zj" : "") +
                      (n === "compact" ? " _a9zk" : "") +
                      " _a9zl",
                    e
                  ),
                  onMouseDown: a.$4,
                  onMouseUp: a.$2,
                  onTouchEnd: a.$2,
                  onTouchMove: a.$2,
                  onTouchStart: a.$4,
                  ref: b,
                  children: j.jsxs("div", {
                    className: "_a9zm",
                    children: [
                      j.jsxs("div", {
                        className: (N ? "_a9zn" : "") + " _a9zo",
                        children: [
                          D &&
                            !p &&
                            j.jsx(c("PolarisUserHoverCard.react"), {
                              display: "block",
                              triggerAnalyticsContext: "post_commenter_avatar",
                              userId: h,
                              children: j.jsx(
                                c("PolarisUserAvatarWithStories.react"),
                                {
                                  className:
                                    "_a9zp" +
                                    (A === !0 ? " _a9zq" : "") +
                                    (v === !0 ? " _a9zd" : ""),
                                  isLink: !z,
                                  profilePictureUrl: (b = g) != null ? b : "",
                                  size: c("PolarisIGCoreConstants").AVATAR_SIZES
                                    .small,
                                  storyEntrypoint: "post_comment",
                                  username: i,
                                }
                              ),
                            }),
                          j.jsxs("div", {
                            className: "_a9zr",
                            children: [
                              j.jsx(l, {
                                parentProps: a.props,
                                parentState: a.state,
                              }),
                              !O &&
                                (Q != null
                                  ? j.jsx(c("PolarisPostGifComment.react"), {
                                      gifSrc: Q,
                                    })
                                  : j.jsx("div", {
                                      className:
                                        "_a9zs" + (v === !0 ? " _a9zd" : ""),
                                      "data-testid": void 0,
                                      children: j.jsx(M, {
                                        display: "inline",
                                        headlineTag: r === !0 ? "h1" : void 0,
                                        size: "body",
                                        value: H,
                                      }),
                                    })),
                              D &&
                                j.jsx(c("IGDSBox.react"), {
                                  marginBottom: 1,
                                  marginTop: 2,
                                  position: "relative",
                                  children: j.jsxs(c("IGDSText.react").Body2, {
                                    color: "secondaryText",
                                    children: [
                                      r &&
                                        t &&
                                        j.jsxs(j.Fragment, {
                                          children: [
                                            d("PolarisPostStrings")
                                              .CAPTION_EDITED_TEXT,
                                            "\xa0\xb7\xa0",
                                          ],
                                        }),
                                      j.jsx(m, { parentProps: a.props }),
                                      r &&
                                        j.jsx(c("IGDSBox.react"), {
                                          display: "inlineBlock",
                                          position: "relative",
                                          children: j.jsx(
                                            c(
                                              "PolarisPostCaptionTranslationPrompt.react"
                                            ),
                                            { postId: x }
                                          ),
                                        }),
                                      !r &&
                                        !v &&
                                        j.jsxs(j.Fragment, {
                                          children: [
                                            a.$19(),
                                            f !== !0 &&
                                              j.jsx("button", {
                                                className: "_a9ze",
                                                onClick: a.$12,
                                                children: j.jsx(
                                                  c("IGDSText.react"),
                                                  {
                                                    color: "secondaryText",
                                                    size: "footnote",
                                                    weight: "semibold",
                                                    zeroMargin: !0,
                                                    children:
                                                      d("PolarisPostStrings")
                                                        .REPLY_TEXT,
                                                  }
                                                ),
                                              }),
                                            c("gkx")("3006") &&
                                              s &&
                                              y === G &&
                                              j.jsx("button", {
                                                className: "_a9ze",
                                                onClick: a.$18,
                                                children: j.jsx(
                                                  c("IGDSText.react"),
                                                  {
                                                    color: "secondaryText",
                                                    size: "footnote",
                                                    weight: "semibold",
                                                    zeroMargin: !0,
                                                    children:
                                                      d("PolarisPostStrings")
                                                        .UNHIDE_TEXT,
                                                  }
                                                ),
                                              }),
                                            q &&
                                              j.jsx(c("IGDSBox.react"), {
                                                display: "inlineBlock",
                                                marginEnd: 2,
                                                position: "relative",
                                                children: j.jsx(
                                                  c(
                                                    "PolarisCommentTranslationPrompt.react"
                                                  ),
                                                  { commentId: q }
                                                ),
                                              }),
                                            L && B === !0 && R,
                                          ],
                                        }),
                                      O &&
                                        j.jsx("button", {
                                          className: "_a9ze",
                                          onClick: a.$13,
                                          children: j.jsx(c("IGDSText.react"), {
                                            color: "secondaryText",
                                            size: "footnote",
                                            weight: "semibold",
                                            zeroMargin: !0,
                                            children:
                                              d("PolarisPostStrings")
                                                .RESTRICT_SEE_COMMENT_TEXT,
                                          }),
                                        }),
                                      P &&
                                        j.jsx("button", {
                                          className: "_a9ze",
                                          onClick: a.$14,
                                          children: j.jsx(c("IGDSText.react"), {
                                            color: "secondaryText",
                                            size: "footnote",
                                            weight: "semibold",
                                            zeroMargin: !0,
                                            children: d(
                                              "PolarisApproveCommentDialog.react"
                                            ).APPROVE_COMMENT_CTA,
                                          }),
                                        }),
                                      v &&
                                        j.jsx("button", {
                                          className: "_a9ze",
                                          onClick: a.$17,
                                          children: j.jsx(c("IGDSText.react"), {
                                            color: "secondaryText",
                                            size: "footnote",
                                            weight: "semibold",
                                            zeroMargin: !0,
                                            children:
                                              d("PolarisPostStrings")
                                                .RESTRICT_DELETE_COMMENT_TEXT,
                                          }),
                                        }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      J &&
                        j.jsx("button", {
                          className: "_a9zt",
                          onClick: a.$7,
                          title: d("PolarisPostStrings").DELETE_COMMENT_TEXT,
                          children: j.jsx(c("IGDSText.react"), {
                            color: "tertiaryText",
                            size: "footnote",
                            weight: "semibold",
                            zeroMargin: !0,
                            children:
                              d("PolarisPostStrings").DELETE_COMMENT_TEXT,
                          }),
                        }),
                      L && !B && R,
                      K &&
                        j.jsx(c("PolarisLikeButton.react"), {
                          className: "_a9zu",
                          isLiked: !!w,
                          large: !1,
                          onChange: a.$8,
                        }),
                    ],
                  }),
                }),
                a.state.showUnhideDialog &&
                  q &&
                  j.jsx(c("PolarisUnhideCommentDialog.react"), {
                    commentId: q,
                    onClose: a.$16,
                    postId: x,
                    postOwnerId: y,
                  }),
                a.state.showCommentOptionsDialog &&
                  q &&
                  j.jsx(c("PolarisCommentOptionsDialog.react"), {
                    canDeleteComment: !!I,
                    commentId: q,
                    commentOwnerAvatar: (b = g) != null ? b : "",
                    commentOwnerId: h,
                    commentOwnerUsername: i,
                    mediaOwnerId: y,
                    onClose: a.$5,
                    onDelete: a.$6,
                  }),
                a.state.showApproveCommentDialog &&
                  q &&
                  j.jsx(
                    d("PolarisApproveCommentDialog.react").ApproveCommentDialog,
                    {
                      commentId: q,
                      commentOwnerId: h,
                      commentOwnerUsername: i,
                      commentThreadId: k,
                      onClose: a.$15,
                      postId: x,
                    }
                  ),
              ],
            });
          },
        });
      };
      return b;
    })(j.PureComponent);
    h.defaultProps = { showRichComment: !1 };
    function a(a, b) {
      var e = b.commentOwnerId,
        f = b.postId,
        g = b.postOwnerId;
      e = d("polarisUserSelectors").getUserById(a, e);
      f = d("polarisPostSelectors").getPostOrNullById(a, f);
      b = b.id;
      b == null && (b = f == null ? void 0 : f.captionCommentId);
      return {
        commentOwnerAvatar: e.profilePictureUrl,
        commentOwnerId: c("nullthrows")(e.id),
        commentOwnerUsername: c("nullthrows")(e.username),
        postOwnerIsUnpublished: d("polarisUserSelectors").getUserById(a, g)
          .isUnpublished,
        postShortcode: (f && f.code) || null,
        viewerId: a.users.viewerId,
        translation: b ? a.comments.translationById.get(b) : null,
      };
    }
    function b(a, b) {
      var e = {
        commentAuthorId: b.commentOwnerId,
        commentId: b.id,
        containerModule: b.analyticsContext,
        mediaAuthorId: b.postOwnerId,
        mediaId: b.id,
        mediaType: b.mediaType,
      };
      return {
        fetchCommentLikes: function () {
          return a(
            d("PolarisCommentLikeListsActions").requestCommentLikes(
              c("nullthrows")(b.id)
            )
          );
        },
        onDeleteComment: function () {
          return a(
            d("PolarisCommentActions").deleteComment(b.postId, b.id || "")
          );
        },
        onLikeComment: function (b) {
          return a(
            d("PolarisCommentActions").likeComment(
              babelHelpers["extends"]({}, e, { userId: b || "" })
            )
          );
        },
        onLoggedOutIntentClick: function (b) {
          a(d("PolarisNavigationActions").openLoggedOutIntentDialog(b));
        },
        onLoggedOutIntentClickLoginModal: function (b, c, e) {
          var f =
            d("PolarisUA").isDesktop() || d("PolarisConfig").isNetzDGEligible()
              ? "feature_wall"
              : "content_wall";
          a(d("PolarisNavigationActions").openLoginModal(f, b, c, e, !0, b));
        },
        onReplyClick: function (e) {
          return a(
            d("PolarisPendingCommentActions").changePendingComment(
              b.postId,
              "@" + (e || "") + " ",
              c("nullthrows")(b.commentThreadId),
              b.commentOwnerId,
              e
            )
          );
        },
        onUnlikeComment: function (b) {
          return a(
            d("PolarisCommentActions").unlikeComment(
              babelHelpers["extends"]({}, e, { userId: b || "" })
            )
          );
        },
      };
    }
    function e(a, b, c) {
      return babelHelpers["extends"]({}, a, b, c, {
        onLikeComment: function () {
          return b.onLikeComment(a.viewerId);
        },
        onReplyClick: function () {
          return b.onReplyClick(a.commentOwnerUsername);
        },
        onUnlikeComment: function () {
          return b.onUnlikeComment(a.viewerId);
        },
      });
    }
    f = d("PolarisReactRedux").connect(a, b, e)(h);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisCommentThread.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisIGCoreButton",
    "PolarisInteractionsLogger",
    "PolarisPaginationUtils",
    "PolarisPostComment.react",
    "PolarisPostVariants",
    "PolarisReactRedux",
    "PolarisThreadedCommentActions",
    "PolarisThreadedCommentSelectors",
    "nullthrows",
    "polarisCommentReducer",
    "polarisIsUserLoggedIn",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a) {
      var b = a.childComment,
        e = a.disableTimestampNav;
      a = a.parentProps;
      var f = a.analyticsContext,
        g = a.code,
        h = a.commentingDisabledForViewer,
        i = a.hideUserAvatar,
        k = a.loggedIn,
        l = a.onDeleteCommentClick,
        m = a.onLikeCountClick,
        n = a.parentComment,
        o = a.postId,
        p = a.postOwnerId,
        q = a.reducedAvatarMargin,
        r = a.showCommentOptionsInline;
      a = a.showRemoveIcon;
      return j.jsx(
        c("PolarisPostComment.react"),
        {
          analyticsContext: f,
          className: "_a9ye",
          code: g,
          commentingDisabledForViewer: h,
          commentOwnerId: b.userId,
          commentThreadId: n.id,
          disableTimestampNav: e,
          giphyMediaInfo: b.giphyMediaInfo,
          hideUserAvatar: !!i,
          id: b.id,
          isAuthorVerified: b.isAuthorVerified,
          isRestrictedPending: b.isRestrictedPending,
          likeCount: b.likeCount,
          likedByViewer: b.likedByViewer,
          loggedIn: k,
          onDeleteCommentClick: l,
          onLikeCountClick: m,
          postedAt: b.postedAt,
          postId: o,
          postOwnerId: p,
          reducedAvatarMargin: q,
          showCommentOptionsInline: r,
          showRemoveIcon: a,
          showRichComment: !0,
          text: b.text,
          variant: d("PolarisPostVariants").VARIANTS.flexible,
        },
        b.id
      );
    }
    k.displayName = k.name + " [from " + f.id + "]";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.state = { hasPermalinkedReplyBeenHidden: !1 }),
          (c.$3 = function (a) {
            var b = c.props,
              e = b.analyticsContext,
              f = b.childCommentsCacheCanShowMoreWithoutFetch,
              g = b.childCommentsIsFetching,
              h = b.hideReplies,
              i = b.loadChildComments,
              j = b.loadChildCommentsV2,
              k = b.onHidePermalinkReply,
              l = b.parentComment,
              m = l.id;
            l = l.userId;
            var n = b.permalinkedReply,
              o = b.postId,
              p = b.postOwnerId;
            b = b.showReplies;
            if (g) return;
            else
              a
                ? (h(m),
                  d("PolarisInteractionsLogger").logInteractionAction({
                    eventName: "instagram_child_comments_collapse",
                    commentAuthorId: l,
                    commentId: m,
                    containerModule: e,
                    mediaAuthorId: p,
                    mediaId: o,
                  }),
                  n != null &&
                    (k != null && k(),
                    c.setState({ hasPermalinkedReplyBeenHidden: !0 })))
                : f
                ? b(m)
                : d("polarisIsUserLoggedIn").isUserLoggedIn()
                ? j(o, m)
                : i(m);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidUpdate = function (a, b) {
        (a.parentComment.id !== this.props.parentComment.id ||
          a.permalinkedReplyId !== this.props.permalinkedReplyId) &&
          this.setState({ hasPermalinkedReplyBeenHidden: !1 });
      };
      e.$1 = function () {
        var a = this.props,
          b = a.childCommentsCacheCanShowMoreWithoutFetch,
          c = a.childCommentsCanFetchMorePagination,
          d = a.childCommentsHasNextPage,
          e = a.permalinkedReply;
        a = a.remainingCachedShowableChildCommentIds;
        return (
          e != null &&
          d === !0 &&
          b === !0 &&
          c !== !0 &&
          a.count() === 1 &&
          a.get(0) === e.id
        );
      };
      e.$2 = function (a) {
        var b = this.props.childCommentsHasNextPage;
        return b !== !0 || (a && this.$1());
      };
      e.$4 = function (a, b) {
        var d = this,
          e = this.props,
          f = e.childCommentsIsFetching,
          g = e.replyPagerNodeRef;
        e = e.totalChildCommentCount;
        var h = this.$2(b),
          k = b ? 1 : 0;
        k = a + k;
        e = e - k;
        h && !f
          ? (k = i._("Hide replies"))
          : e <= 0
          ? (k = i._("View replies"))
          : (k = i._("View replies ({hidden replies})", [
              i._param("hidden replies", e),
            ]));
        return j.jsx("li", {
          className: "_a9yg",
          ref: g,
          children: j.jsxs(c("IGDSBox.react"), {
            direction: "row",
            marginBottom: a > 0 ? 4 : 0,
            marginTop: b ? 2 : 0,
            position: "relative",
            children: [
              j.jsxs(c("PolarisIGCoreButton"), {
                borderless: !0,
                onClick: function () {
                  return d.$3(h);
                },
                children: [
                  j.jsx("div", { className: "_a9yh" }),
                  j.jsx("span", { className: "_a9yi", children: k }),
                ],
              }),
              f &&
                j.jsx("div", {
                  className: "_a9yj",
                  children: j.jsx(c("IGDSSpinner.react"), { size: "small" }),
                }),
            ],
          }),
        });
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.analyticsContext,
          f = b.code,
          g = b.commentingDisabledForViewer,
          h = b.customIndentationPadding,
          i = b.hideUserAvatar,
          l = b.innerRef,
          m = b.isPermalinkedComment,
          n = b.loggedIn,
          o = b.onDeleteCommentClick,
          p = b.onLikeCountClick,
          q = b.parentComment,
          r = b.permalinkedReply,
          s = b.permalinkedReplyAnimating,
          t = b.permalinkedReplyId,
          u = b.permalinkedReplyNodeRef,
          v = b.postId,
          w = b.postOwnerId,
          x = b.reducedAvatarMargin,
          y = b.showCommentOptionsInline,
          z = b.showRemoveIcon,
          A = b.totalChildCommentCount;
        b = b.visibleChildComments;
        var B = this.state.hasPermalinkedReplyBeenHidden,
          C = null;
        r &&
          !(B && b.count() === 0) &&
          (C = j.jsx("div", {
            className: "_a9yk" + (s === !0 && !B ? " _a9yl" : ""),
            ref: u,
            children: j.jsx(k, {
              childComment: r,
              disableTimestampNav: !0,
              parentProps: this.props,
            }),
          }));
        s = b
          .map(function (b, d) {
            return C && c("nullthrows")(r).id === b.id
              ? null
              : j.jsx(k, { childComment: b, parentProps: a.props }, d);
          })
          .filter(function (a) {
            return a != null;
          });
        B = this.$4(s.count(), C != null);
        u =
          h != null
            ? {
                margin: "12px 0 0 " + h + "px",
                width: "calc(100% - " + h + "px)",
              }
            : void 0;
        return j.jsxs("ul", {
          className: "_a9ym",
          ref: l,
          children: [
            j.jsx(c("PolarisPostComment.react"), {
              analyticsContext: e,
              code: f,
              commentingDisabledForViewer: g,
              commentOwnerId: q.userId,
              commentThreadId: q.id,
              disableTimestampNav: m === !0 && t == null,
              giphyMediaInfo: q.giphyMediaInfo,
              hideUserAvatar: !!i,
              id: q.id,
              isAuthorVerified: q.isAuthorVerified,
              isCovered: q.isCovered,
              isPermalinkedComment: m,
              isRestrictedPending: q.isRestrictedPending,
              likeCount: q.likeCount,
              likedByViewer: q.likedByViewer,
              loggedIn: n,
              onDeleteCommentClick: o,
              onLikeCountClick: p,
              postedAt: q.postedAt,
              postId: v,
              postOwnerId: w,
              reducedAvatarMargin: x,
              showCommentOptionsInline: y,
              showRemoveIcon: z,
              showRichComment: !0,
              text: q.text,
              variant: d("PolarisPostVariants").VARIANTS.flexible,
            }),
            A !== 0 &&
              j.jsx("li", {
                children: j.jsxs("ul", {
                  className: "_a9yo",
                  style: u,
                  children: [C, B, s],
                }),
              }),
          ],
        });
      };
      return b;
    })(j.Component);
    function a(a, b) {
      var c = b.parentComment;
      b = b.permalinkedReplyId;
      var e = d(
          "PolarisThreadedCommentSelectors"
        ).selectChildCommentsForParentIdSplitByVisibility(a, c.id),
        f = e.remainingCachedShowableChildCommentIds;
      e = e.visibleChildComments;
      var g = d(
        "PolarisThreadedCommentSelectors"
      ).getTotalChildCommentCountForParentId(a, c.id);
      c = a.threadedComments.childByParentId.get(
        c.id,
        d("polarisCommentReducer").EMPTY_POST_COMMENTS_STATE
      );
      c = c.pagination;
      var h = null;
      b != null && b !== "" && (h = a.comments.byId.get(b));
      return {
        childCommentsCacheCanShowMoreWithoutFetch:
          d("PolarisPaginationUtils").getVisibleCount(c) <
          d("PolarisPaginationUtils").getLoadedCount(c),
        childCommentsCanFetchMorePagination: d(
          "PolarisPaginationUtils"
        ).canFetchMorePagination(c),
        childCommentsHasNextPage: d("PolarisPaginationUtils").hasNextPage(c),
        childCommentsIsFetching: d("PolarisPaginationUtils").isFetching(c),
        permalinkedReply: h,
        remainingCachedShowableChildCommentIds: f,
        totalChildCommentCount: g || 0,
        visibleChildComments: e,
      };
    }
    e = {
      hideReplies: d("PolarisThreadedCommentActions").hideChildComments,
      loadChildComments: d("PolarisThreadedCommentActions")
        .requestNextChildCommentPage,
      loadChildCommentsV2: d("PolarisThreadedCommentActions")
        .requestNextChildCommentPageV2,
      showReplies: d("PolarisThreadedCommentActions").showChildComments,
    };
    h = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = h;
  },
  98
);
__d(
  "PolarisDeleteCommentModal.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisCommentActions",
    "PolarisGenericStrings",
    "PolarisLogger",
    "PolarisReactRedux",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.analyticsContext,
        c = a.commentId,
        e = a.onClose,
        f = a.postId,
        g = d("PolarisReactRedux").useDispatch();
      a = function (a) {
        d("PolarisLogger").logAction("commentDelete", { source: b }),
          g(d("PolarisCommentActions").deleteComment(f, c)),
          e(a);
      };
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        onModalClose: e,
        children: [
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: a,
            children: h._("Delete Comment"),
          }),
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: e,
            children: d("PolarisGenericStrings").CANCEL_TEXT,
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
  "PolarisNoCommentsPlaceholder.react",
  ["fbt", "IGDSBox.react", "IGDSText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = h._("No comments yet."),
        b = h._("Start the conversation.");
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        children: [
          i.jsx(c("IGDSBox.react"), {
            marginBottom: 2,
            children: i.jsx(c("IGDSText.react").Headline2, {
              textAlign: "center",
              children: a,
            }),
          }),
          i.jsx(c("IGDSBox.react"), {
            marginTop: 2,
            children: i.jsx(c("IGDSText.react").Body, {
              textAlign: "center",
              children: b,
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
  "PolarisPreviewComments.react",
  [
    "cx",
    "fbt",
    "IGDSSpinner.react",
    "PolarisBatchDOM",
    "PolarisBigNumber.react",
    "PolarisCommentActionConstants",
    "PolarisCommentActions",
    "PolarisIGCoreButton",
    "PolarisInteractionsLogger",
    "PolarisLinkBuilder",
    "PolarisNavigationActions",
    "PolarisPostComment.react",
    "PolarisPostVariants",
    "PolarisReactRedux",
    "PolarisUA",
    "browserHistory",
    "joinClasses",
    "polarisCommentSelectors",
    "polarisPostSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$2 = function (a) {
            var b = c.props,
              e = b.analyticsContext,
              f = b.code,
              g = b.id,
              h = b.loadMore,
              i = b.loggedIn,
              j = b.mediaType,
              k = b.onLoggedOutIntentClick,
              l = b.ownerId;
            b = b.variant;
            var m = d("PolarisUA").isMobile();
            a.preventDefault();
            if (b === d("PolarisPostVariants").VARIANTS.feed || m) {
              a = d("PolarisLinkBuilder").buildMediaCommentsLink(f, m);
              i
                ? (d("browserHistory").browserHistory.push(a),
                  d("PolarisInteractionsLogger").logInteractionAction({
                    containerModule: e,
                    eventName: "instagram_organic_comment_view_all",
                    mediaAuthorId: l,
                    mediaId: g,
                    mediaType: j,
                  }))
                : k("post_comment_view_all");
            } else
              h(g, f),
                d("PolarisInteractionsLogger").logInteractionAction({
                  containerModule: e,
                  eventName: "instagram_organic_comment_view_more",
                  mediaAuthorId: l,
                  mediaId: g,
                  mediaType: j,
                });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidUpdate = function (a, b, c) {
        var e = this,
          f = a.commentSaveIsInFlight && !this.props.commentSaveIsInFlight,
          g = this.$1;
        if (!g) return;
        d("PolarisBatchDOM").measure(function () {
          var b = g.scrollTop;
          f
            ? (b = g.scrollHeight)
            : c != null
            ? (b = g.scrollHeight - c)
            : e.props.id !== a.id && (b = 0);
          d("PolarisBatchDOM").mutate(function () {
            g.scrollTop = b;
          });
        });
      };
      e.getSnapshotBeforeUpdate = function (a) {
        var b = a.comments,
          c = this.props.comments;
        if (a.id === this.props.id && c && b && c.count() > b.count()) {
          a = this.$1;
          if (a) return a.scrollHeight - a.scrollTop;
        }
        return null;
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.analyticsContext,
          f = b.captionAndTitle,
          g = b.captionIsEdited,
          h = b.className,
          i = b.commentsAreStacked,
          k = b.commentsDisabled,
          l = b.commentsHasNextPage,
          m = b.commentsTotalCount,
          n = b.handleDeleteCommentClick,
          o = b.id,
          p = b.loggedIn,
          q = b.mediaType,
          r = b.ownerId,
          s = b.postedAt,
          t = b.previewComments,
          u = b.showRemoveCommentIcons,
          v = b.variant;
        b = k !== !0 && (l === !0 || (t != null && t.length < m));
        if ((f == null || f === "") && m === 0 && !b) return null;
        l = t;
        return j.jsx("div", {
          className: c("joinClasses")(
            "_acri" +
              (!d("PolarisUA").isMobile() &&
              v === d("PolarisPostVariants").VARIANTS.flexible &&
              !i
                ? " _acrj"
                : ""),
            h
          ),
          ref: function (b) {
            return (a.$1 = b);
          },
          children: j.jsxs("ul", {
            className: "_acrk",
            children: [
              f != null &&
                f !== "" &&
                j.jsx(
                  c("PolarisPostComment.react"),
                  {
                    analyticsContext: e,
                    commentOwnerId: r,
                    isCaption: !0,
                    isEdited: !!g,
                    isRestrictedPending: !1,
                    loggedIn: p,
                    mediaType: q,
                    postedAt: s,
                    postId: o,
                    postOwnerId: r,
                    showRemoveIcon: !1,
                    text: f,
                    variant: v,
                  },
                  "captionAndTitle"
                ),
              b && this.renderLoadMoreCommentsLink(),
              k !== !0 &&
                l &&
                l.map(function (a) {
                  return j.jsx(
                    c("PolarisPostComment.react"),
                    {
                      analyticsContext: e,
                      commentOwnerId: a.userId,
                      id: a.id,
                      isAuthorVerified: a.isAuthorVerified,
                      isRestrictedPending: a.isRestrictedPending,
                      likedByViewer: a.likedByViewer,
                      loggedIn: p,
                      mediaType: q,
                      onDeleteCommentClick: n,
                      postedAt: a.postedAt,
                      postId: o,
                      postOwnerId: r,
                      showRemoveIcon: u,
                      text: a.text,
                      variant: v,
                    },
                    a.id
                  );
                }),
            ],
          }),
        });
      };
      e.renderLoadMoreCommentsLink = function () {
        var a = this.props,
          b = a.comments,
          e = a.commentsIsFetching,
          f = a.commentsTotalCount;
        a = a.variant;
        var g = i._("Load more comments");
        (b && b.count() + d("PolarisCommentActionConstants").PAGE_SIZE >= f) ||
        a === d("PolarisPostVariants").VARIANTS.feed ||
        d("PolarisUA").isMobile()
          ? (b = i._("View all {count} comments", [
              i._param(
                "count",
                j.jsx(c("PolarisBigNumber.react"), { value: f })
              ),
            ]))
          : (b = g);
        return j.jsxs("li", {
          className: "_acrl",
          children: [
            j.jsx(c("PolarisIGCoreButton"), {
              borderless: !0,
              dangerouslySetClassName: { __className: "_acrm" },
              disabled: e,
              onClick: this.$2,
              children: b,
            }),
            e &&
              j.jsx("div", {
                className: "_acrn",
                children: j.jsx(c("IGDSSpinner.react"), {
                  position: "static",
                  size: "small",
                }),
              }),
          ],
        });
      };
      return b;
    })(j.PureComponent);
    function a(a, b) {
      var c = d("polarisCommentSelectors").getPreviewCommentsForPostId(a, b.id);
      b = d("polarisPostSelectors").getNumCommentsForPostId(a, b.id);
      var e = a.navigation.pageIdentifier || "";
      return {
        analyticsContext: e,
        commentSaveIsInFlight: !1,
        commentsHasNextPage: !1,
        commentsIsFetching: !1,
        commentsTotalCount: b,
        previewComments: c,
        viewportWidth: a.displayProperties.viewportWidth,
      };
    }
    e = {
      onLoggedOutIntentClick: d("PolarisNavigationActions")
        .openLoggedOutIntentDialog,
      loadMore: d("PolarisCommentActions").requestNextCommentPage,
    };
    f = d("PolarisReactRedux").connect(a, e)(b);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisThreadedCommentsLoadMoreButton.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGDSCircleAddPanoOutlineIcon",
    "IGDSSpinner.react",
    "PolarisIGCoreSVGIconButton",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Load more comments");
    function a(a) {
      var b = function (b) {
        var c = a.handleLoadMoreCommentsClick,
          e = a.loggedIn,
          f = a.onLoggedOutIntentClickLoginModal,
          g = a.url;
        b.preventDefault();
        !e && d("PolarisUA").isDesktop() ? f(g, "post_comment_view_all") : c(g);
      };
      return i.jsxs(c("IGDSBox.react"), {
        justifyContent: "center",
        marginBottom: a.marginBottom,
        marginTop: a.marginTop,
        minHeight: 40,
        position: "relative",
        children: [
          !a.commentsIsFetching &&
            i.jsx(c("PolarisIGCoreSVGIconButton"), {
              onClick: function (a) {
                return b(a);
              },
              children: i.jsx(c("IGDSCircleAddPanoOutlineIcon"), { alt: j }),
            }),
          a.commentsIsFetching &&
            i.jsx(c("IGDSSpinner.react"), {
              position: "absolute",
              size: "medium",
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
  "PolarisThreadedComments.react",
  [
    "cx",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisBatchDOM",
    "PolarisCommentCover.react",
    "PolarisCommentThread.react",
    "PolarisConfig",
    "PolarisInteractionsLogger",
    "PolarisLinkBuilder",
    "PolarisNavigationActions",
    "PolarisNoCommentsPlaceholder.react",
    "PolarisPaginationUtils",
    "PolarisPendingCommentState",
    "PolarisPostComment.react",
    "PolarisPostVariants",
    "PolarisReactRedux",
    "PolarisThreadedCommentActions",
    "PolarisThreadedCommentSelectors",
    "PolarisThreadedCommentsLoadMoreButton.react",
    "PolarisUA",
    "nullthrows",
    "polarisCommentReducer",
    "polarisIsUserLoggedIn",
    "polarisRequestIdleCallback",
    "polarisUserSelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("qex")._("1193");
    function k(a, b) {
      var c = b.getBoundingClientRect().top;
      c = c - b.scrollTop;
      b = a.getBoundingClientRect().top;
      return b - c;
    }
    function l(a) {
      var b = a.innerRef,
        d = a.isPermalinkedComment,
        e = a.onHidePermalinkReply,
        f = a.parentComment,
        g = a.parentProps,
        h = a.parentState,
        j = a.permalinkedReplyId,
        k = a.permalinkedReplyNodeRef;
      a = a.replyPagerNodeRef;
      var l = g.analyticsContext,
        m = g.code,
        n = g.commentingDisabledForViewer,
        o = g.customIndentationPadding,
        p = g.handleDeleteCommentClick,
        q = g.hideUserAvatar,
        r = g.id,
        s = g.isDeletingComments,
        t = g.loggedIn,
        u = g.onLikeCountClick,
        v = g.ownerId,
        w = g.reducedAvatarMargin;
      g = g.showCommentOptionsInline;
      h = h.commentPermalinkAnimEnabled;
      return i.jsx(c("PolarisCommentThread.react"), {
        analyticsContext: l,
        code: m,
        commentingDisabledForViewer: n,
        customIndentationPadding: o,
        hideUserAvatar: q,
        innerRef: b,
        isPermalinkedComment: d,
        loggedIn: t,
        onDeleteCommentClick: p,
        onHidePermalinkReply: e,
        onLikeCountClick: u,
        parentComment: f,
        permalinkedReplyAnimating: h,
        permalinkedReplyId: j,
        permalinkedReplyNodeRef: k,
        postId: r,
        postOwnerId: v,
        reducedAvatarMargin: w,
        replyPagerNodeRef: a,
        showCommentOptionsInline: g,
        showRemoveIcon: s,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$2 = i.createRef()),
          (c.$3 = i.createRef()),
          (c.$4 = i.createRef()),
          (c.$5 = []),
          (c.state = {
            isAutoscrollingCommentPermalink: !1,
            commentPermalinkAnimEnabled: !1,
            replyPermalinkLastHideTime: null,
            showHiddenComments: !1,
          }),
          (c.$13 = function (a) {
            a = c.props;
            var b = a.analyticsContext,
              e = a.code,
              f = a.hasRankedComments,
              g = a.id,
              h = a.loadMore,
              i = a.mediaType;
            a = a.ownerId;
            h(g, f, e);
            d("PolarisInteractionsLogger").logInteractionAction({
              containerModule: b,
              eventName: "instagram_child_comments_load_more",
              mediaAuthorId: a,
              mediaId: g,
              mediaType: i,
            });
          }),
          (c.$14 = function () {
            c.setState({ showHiddenComments: !0 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$6 = function () {
        return this.$2.current || null;
      };
      e.$7 = function () {
        return this.$3.current || null;
      };
      e.$8 = function () {
        return this.$4.current || null;
      };
      e.$9 = function (a, b, c, e) {
        var f = this;
        this.setState({
          isAutoscrollingCommentPermalink: !0,
          commentPermalinkAnimEnabled: !1,
        });
        d("PolarisBatchDOM").measure(function () {
          var g,
            h = k(b, a);
          if (c) {
            var i = k(c, a),
              j = c.getBoundingClientRect().height,
              l = a.getBoundingClientRect().height;
            l = Math.max(l - j, 0);
            g = Math.max(h, i - l);
          } else g = h;
          d("PolarisBatchDOM").mutate(function () {
            a.scrollTop = g;
            var b = function () {
              f.setState({
                isAutoscrollingCommentPermalink: !1,
                commentPermalinkAnimEnabled: !0,
              });
            };
            e
              ? d("polarisRequestIdleCallback").requestIdleCallback(
                  function () {
                    b();
                  }
                )
              : b();
          });
        });
      };
      e.componentDidMount = function () {
        var a = this.$1;
        if (!a) return;
        var b = this.$6();
        if (b) this.$9(a, b, this.$7(), !0);
        else if (!this.props.hasRankedComments) {
          if (d("PolarisUA").isDesktop()) return;
          a.scrollTop = a.scrollHeight;
        }
      };
      e.componentDidUpdate = function (a, b, c) {
        var d = this.$1;
        if (!d) return;
        var e = this.$6();
        if (e)
          if (this.state.isAutoscrollingCommentPermalink) return;
          else if (
            this.props.permalinkedCommentId !== a.permalinkedCommentId ||
            this.props.permalinkedReplyId !== a.permalinkedReplyId ||
            this.props.permalinkedComment !== a.permalinkedComment
          ) {
            this.$9(d, e, this.$7(), !1);
            return;
          }
        this.$10(a, b, c, d, e);
      };
      e.$10 = function (a, b, c, e, f) {
        var g = this,
          h = a.commentSaveIsInFlight && !this.props.commentSaveIsInFlight;
        c = c || {};
        var i = c.newCommentCachedOffset,
          j =
            a.id === this.props.id &&
            a.permalinkedCommentId === this.props.permalinkedCommentId &&
            a.permalinkedReplyId === this.props.permalinkedReplyId &&
            b.replyPermalinkLastHideTime !==
              this.state.replyPermalinkLastHideTime,
          k = this.$8();
        h &&
          !a.commentWasReply &&
          this.$5[0] &&
          this.$5[0].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        d("PolarisBatchDOM").measure(function () {
          var b = null;
          h && !a.commentWasReply && !g.props.hasRankedComments
            ? (b = e.scrollHeight)
            : i != null
            ? (b = e.scrollHeight - i)
            : j && f && k && (b = g.$11(e, f, k));
          d("PolarisBatchDOM").mutate(function () {
            b != null && (e.scrollTop = b);
          });
        });
      };
      e.$11 = function (a, b, c) {
        c = k(c, a);
        b = k(b, a);
        var d = 6;
        c = Math.max(c - d, b);
        return a.scrollTop > c ? c : null;
      };
      e.getSnapshotBeforeUpdate = function (a, b) {
        b = a.comments;
        var c = this.props.comments,
          d = this.$1;
        return d &&
          a.id === this.props.id &&
          c.count() > b.count() &&
          !this.props.hasRankedComments
          ? { newCommentCachedOffset: d.scrollHeight - d.scrollTop }
          : null;
      };
      e.$12 = function () {
        this.setState({ replyPermalinkLastHideTime: new Date().valueOf() });
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.analyticsContext,
          f = b.captionAndTitle,
          g = b.captionCreatedAt,
          h = b.captionIsEdited,
          k = b.className,
          m = b.commentCoverSeenCounter,
          n = b.comments,
          o = b.commentsDisabled,
          p = b.commentsHasNextPage,
          q = b.disableScroll,
          r = b.hasCoveredComments,
          s = b.hasRankedComments,
          t = b.hideUserAvatar,
          u = b.id,
          v = b.initialCommentsLoading,
          w = b.isOwnerVerified,
          x = b.loggedIn,
          y = b.mediaType,
          z = b.ownerId,
          A = b.permalinkedComment,
          B = b.permalinkedReplyId,
          C = b.postedAt,
          D = b.reducedAvatarMargin,
          E = b.showCommentOptionsInline;
        b = b.showPagerBelowComments;
        p = o !== !0 && Boolean(p);
        v = v && n.size === 0;
        if ((f == null || f === "") && n.count() === 0 && !p && !v)
          return d("PolarisUA").isDesktop()
            ? i.jsx("div", {
                className: k,
                children: i.jsx(c("PolarisNoCommentsPlaceholder.react"), {}),
              })
            : i.jsx("div", { className: k });
        var F = null,
          G = null,
          H = null;
        !v &&
          o != null &&
          ((F = A
            ? i.jsx("div", {
                className:
                  "_a9z3" +
                  (this.state.commentPermalinkAnimEnabled && !B
                    ? " _a9yl"
                    : ""),
                ref: this.$2,
                children: i.jsx(l, {
                  isPermalinkedComment: !0,
                  onHidePermalinkReply: function () {
                    return a.$12();
                  },
                  parentComment: A,
                  parentProps: this.props,
                  parentState: this.state,
                  permalinkedReplyId: B,
                  permalinkedReplyNodeRef: this.$3,
                  replyPagerNodeRef: this.$4,
                }),
              })
            : null),
          (G = n
            .map(function (b, c) {
              if (A && b.id === A.id) return null;
              return j === !0 && b.isCovered === !0
                ? null
                : i.jsx(
                    l,
                    {
                      innerRef: function (b) {
                        return (a.$5[c] = b);
                      },
                      parentComment: b,
                      parentProps: a.props,
                      parentState: a.state,
                    },
                    c
                  );
            })
            .filter(function (a) {
              return !!a;
            })),
          (H = n
            .filter(function (a) {
              return a.isCovered === !0;
            })
            .map(function (b, c) {
              return i.jsx(
                l,
                {
                  innerRef: function (b) {
                    return (a.$5[c] = b);
                  },
                  parentComment: b,
                  parentProps: a.props,
                  parentState: a.state,
                },
                c
              );
            })));
        o = null;
        f != null &&
          f !== "" &&
          (o = i.jsx(
            c("PolarisPostComment.react"),
            {
              analyticsContext: e,
              captionCreatedAt: g,
              className: (d("PolarisUA").isMobile() ? "_a9z4" : "") + " _a9z5",
              commentOwnerId: z,
              hideUserAvatar: !!t,
              isAuthorVerified: !!w,
              isCaption: !0,
              isEdited: !!h,
              isRestrictedPending: !1,
              loggedIn: x,
              mediaType: y,
              postedAt: c("nullthrows")(C),
              postId: u,
              postOwnerId: z,
              reducedAvatarMargin: D,
              showCommentOptionsInline: E,
              showRemoveIcon: !1,
              showRichComment: !0,
              text: f,
              variant: d("PolarisPostVariants").VARIANTS.flexible,
            },
            "captionAndTitle"
          ));
        B = p && this.renderLoadMoreCommentsLink(F != null);
        n = s || b === !0;
        return i.jsx("div", {
          className: k,
          children: i.jsxs("ul", {
            className:
              "_a9z6" +
              (q ? " _a9z7" : "") +
              (F !== null ? " _a9z8" : "") +
              (o === null ? " _a9z9" : "") +
              (!B || n ? " _a9za" : ""),
            ref: function (b) {
              return (a.$1 = b);
            },
            children: [
              o,
              F,
              v
                ? i.jsx(c("IGDSBox.react"), {
                    direction: "row",
                    justifyContent: "center",
                    position: "relative",
                    children: i.jsx(c("IGDSSpinner.react"), {}),
                  })
                : null,
              !n && B,
              !d("PolarisConfig").isNetzDGEligible() && G,
              n && B,
              j === !0 &&
                !B &&
                r &&
                !this.state.showHiddenComments &&
                i.jsx(c("PolarisCommentCover.react"), {
                  nuxSeenCounter: m,
                  onClick: this.$14,
                  postId: u,
                  postOwnerId: z,
                }),
              j === !0 && this.state.showHiddenComments && H,
            ],
          }),
        });
      };
      e.renderLoadMoreCommentsLink = function (a) {
        var b = this.props,
          e = b.code,
          f = b.commentsIsFetching,
          g = b.hasRankedComments,
          h = b.loggedIn;
        b = b.onLoggedOutIntentClickLoginModal;
        e = d("PolarisLinkBuilder").buildMediaCommentsLink(
          c("nullthrows")(e),
          d("PolarisUA").isMobile()
        );
        var j;
        g ? ((g = 0), (j = 0)) : a ? ((g = 2), (j = 2)) : ((g = 0), (j = 4));
        return i.jsx("li", {
          children: i.jsx(c("PolarisThreadedCommentsLoadMoreButton.react"), {
            commentsIsFetching: f,
            handleLoadMoreCommentsClick: this.$13,
            loggedIn: h,
            marginBottom: j,
            marginTop: g,
            onLoggedOutIntentClickLoginModal: b,
            url: e,
          }),
        });
      };
      return b;
    })(i.PureComponent);
    function a(a, b) {
      var c = b.id,
        e = b.ownerId;
      b = b.permalinkedCommentId;
      var f = d("PolarisThreadedCommentSelectors").getThreadedCommentsLoading(
          a,
          c
        ),
        g = d(
          "PolarisThreadedCommentSelectors"
        ).selectVisibleParentCommentsForPostId(a, c),
        h = a.threadedComments.parentByPostId.get(
          c,
          d("polarisCommentReducer").EMPTY_POST_COMMENTS_STATE
        ),
        i = h.count;
      h = h.pagination;
      c = a.pendingComments.get(
        c,
        d("PolarisPendingCommentState").EMPTY_PENDING_COMMENT
      );
      var j = null;
      !f && b != null && b !== "" && (j = a.comments.byId.get(b));
      return {
        commentCoverSeenCounter: a.comments.commentCoverSeenCounter,
        commentWasReply: c.repliedToCommentId != null,
        commentSaveIsInFlight: c.committing,
        comments: g,
        commentsHasNextPage: d("PolarisPaginationUtils").hasNextPage(h),
        commentsIsFetching: d("PolarisPaginationUtils").isFetching(h),
        commentsTotalCount: i != null ? i : 0,
        hasCoveredComments: g.some(function (a) {
          return a.isCovered === !0;
        }),
        isOwnerVerified: d("polarisUserSelectors").getUserById(a, e).isVerified,
        initialCommentsLoading: f,
        permalinkedComment: j,
      };
    }
    function b(a) {
      return {
        loadMore: function (b, c, e) {
          d("polarisIsUserLoggedIn").isUserLoggedIn()
            ? a(
                d(
                  "PolarisThreadedCommentActions"
                ).requestNextParentCommentPageV2(b, c, e)
              )
            : a(
                d("PolarisThreadedCommentActions").requestNextParentCommentPage(
                  b,
                  c,
                  e
                )
              );
        },
        onLoggedOutIntentClickLoginModal: function (b, c) {
          a(
            d("PolarisNavigationActions").openLoginModal(
              "feature_wall",
              b,
              c,
              null,
              !0,
              b
            )
          );
        },
      };
    }
    h = d("PolarisReactRedux").connect(a, b)(e);
    g["default"] = h;
  },
  98
);
__d(
  "PolarisThreadedCommentsLoader.react",
  [
    "CometPlaceholder.react",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisErrorBoundary.react",
    "PolarisMonitorErrors",
    "PolarisReactRedux",
    "PolarisThreadedCommentActions",
    "react",
    "usePolarisGetQuerySetup",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      var b = a.children,
        e = a.initialCommentsQuery;
      a = a.postId;
      c("usePolarisGetQuerySetup")(
        e,
        d("PolarisThreadedCommentActions").setupPostComments(a)
      );
      return b;
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.children,
        e = a.initialCommentsQuery,
        f = a.postId,
        g = d("PolarisReactRedux").useDispatch();
      a = function (a) {
        g(d("PolarisThreadedCommentActions").initialCommentsError(f)),
          d("PolarisMonitorErrors").logError(a);
      };
      return h.jsx(c("PolarisErrorBoundary.react"), {
        errorRenderer: function () {
          return null;
        },
        onError: a,
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: h.jsx(c("IGDSBox.react"), {
            direction: "row",
            justifyContent: "center",
            position: "relative",
            children: h.jsx(c("IGDSSpinner.react"), {}),
          }),
          children: h.jsx(i, {
            initialCommentsQuery: e,
            postId: f,
            children: b,
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
  "PolarisPostComments.react",
  [
    "PolarisDeleteCommentModal.react",
    "PolarisPostRemoveCommentsSelectors",
    "PolarisPostVariants",
    "PolarisPreviewComments.react",
    "PolarisReactRedux",
    "PolarisThreadedComments.react",
    "PolarisThreadedCommentsLoader.react",
    "PolarisUA",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { commentToDeleteId: null, showDeleteCommentModal: !1 }),
          (c.$1 = function (a) {
            c.setState({ commentToDeleteId: a, showDeleteCommentModal: !0 });
          }),
          (c.$2 = function () {
            c.setState({ commentToDeleteId: null, showDeleteCommentModal: !1 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$3 = function () {
        return (
          this.props.variant !== d("PolarisPostVariants").VARIANTS.feed &&
          !d("PolarisUA").isMobile()
        );
      };
      e.render = function () {
        var a = this.props,
          b = a.analyticsContext,
          d = a.caption,
          e = a.captionCreatedAt,
          f = a.captionIsEdited,
          g = a.className,
          i = a.code,
          j = a.commentingDisabledForViewer,
          k = a.commentsAreStacked,
          l = a.commentsDisabled,
          m = a.customIndentationPadding,
          n = a.hasRankedComments,
          o = a.hideUserAvatar,
          p = a.id,
          q = a.initialCommentsQuery,
          r = a.mediaType,
          s = a.onLikeCountClick,
          t = a.ownerId,
          u = a.permalinkedCommentId,
          v = a.permalinkedReplyId,
          w = a.postedAt,
          x = a.reducedAvatarMargin,
          y = a.showCommentOptionsInline,
          z = a.showRemoveCommentIcons,
          A = a.variant;
        a = a.viewerId;
        a = a != null;
        this.$3()
          ? ((e = h.jsx(c("PolarisThreadedComments.react"), {
              analyticsContext: b,
              captionAndTitle: d,
              captionCreatedAt: e,
              captionIsEdited: f,
              className: g,
              code: i,
              commentingDisabledForViewer: j,
              commentsDisabled: l,
              customIndentationPadding: m,
              handleDeleteCommentClick: this.$1,
              hasRankedComments: n,
              hideUserAvatar: !!o,
              id: p,
              isDeletingComments: z,
              loggedIn: a,
              mediaType: r,
              onLikeCountClick: s,
              ownerId: t,
              permalinkedCommentId: u,
              permalinkedReplyId: v,
              postedAt: w,
              reducedAvatarMargin: x,
              showCommentOptionsInline: y,
            })),
            q != null &&
              (e = h.jsx(c("PolarisThreadedCommentsLoader.react"), {
                initialCommentsQuery: q,
                postId: p,
                children: e,
              })))
          : (e = h.jsx(c("PolarisPreviewComments.react"), {
              captionAndTitle: d,
              captionIsEdited: f,
              className: g,
              code: i,
              commentsAreStacked: k,
              commentsDisabled: l,
              handleDeleteCommentClick: this.$1,
              id: p,
              loggedIn: a,
              mediaType: r,
              ownerId: t,
              postedAt: w,
              showRemoveCommentIcons: z,
              variant: A,
            }));
        return h.jsxs(h.Fragment, {
          children: [
            e,
            this.state.showDeleteCommentModal &&
              h.jsx(c("PolarisDeleteCommentModal.react"), {
                analyticsContext: b,
                commentId: c("nullthrows")(this.state.commentToDeleteId),
                onClose: this.$2,
                postId: p,
              }),
          ],
        });
      };
      return b;
    })(h.PureComponent);
    b.defaultProps = { variant: d("PolarisPostVariants").VARIANTS.flexible };
    function a(a) {
      return {
        showRemoveCommentIcons: d(
          "PolarisPostRemoveCommentsSelectors"
        ).getPostRemoveCommentsIsVisible(a),
        viewerId:
          (a = d("polarisUserSelectors").getViewer(a)) == null ? void 0 : a.id,
      };
    }
    e = d("PolarisReactRedux").connect(a)(b);
    g["default"] = e;
  },
  98
);
