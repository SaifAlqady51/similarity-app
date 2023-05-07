/*FB_PKG_DELIM*/

__d(
  "PolarisIGWALinkingDeleteMutation_instagramRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "8962959593745045";
  },
  null
);
__d(
  "PolarisIGWALinkingDeleteMutation.graphql",
  ["PolarisIGWALinkingDeleteMutation_instagramRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
        {
          alias: null,
          args: null,
          concreteType: "DeleteIgWaLinkResponsePayload",
          kind: "LinkedField",
          name: "delete_ig_wa_link",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "result",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "PolarisIGWALinkingDeleteMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "PolarisIGWALinkingDeleteMutation",
          selections: a,
        },
        params: {
          id: b("PolarisIGWALinkingDeleteMutation_instagramRelayOperation"),
          metadata: {},
          name: "PolarisIGWALinkingDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisUserHoverCardStatisticsSectionQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "userID" }],
        b = [
          { kind: "Literal", name: "_request_data", value: {} },
          { kind: "Literal", name: "user_id", value: 0 },
          {
            kind: "Variable",
            name: "user_id_str_override",
            variableName: "userID",
          },
        ],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "follower_count",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "following_count",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "media_count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PolarisUserHoverCardStatisticsSectionQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "XDTUserInfoResponse",
              kind: "LinkedField",
              name: "xdt_api__v1__users__info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTUserDict",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [c, d, e],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PolarisUserHoverCardStatisticsSectionQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "XDTUserInfoResponse",
              kind: "LinkedField",
              name: "xdt_api__v1__users__info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XDTUserDict",
                  kind: "LinkedField",
                  name: "user",
                  plural: !1,
                  selections: [
                    c,
                    d,
                    e,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6182570408444992",
          metadata: {},
          name: "PolarisUserHoverCardStatisticsSectionQuery",
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
  "MAWMiActOnActThreadReadyQueue",
  [
    "FBLogger",
    "I64",
    "WALoggerDeferred",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "promiseDone",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[MiActMapping] Executed ",
        " out of ",
        " actions on ACT thread\n    ready for threadKey: ",
        "",
      ]);
      h = function () {
        return a;
      };
      return a;
    }
    function i() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[MiActMapping] Executing queued action on ACT thread ready: ",
        " for threadKey: ",
        "",
      ]);
      i = function () {
        return a;
      };
      return a;
    }
    var j = new Map(),
      k = 3e4;
    function a(a, b, e, f) {
      var g = d("I64").to_string(a);
      a = (a = j.get(g)) != null ? a : [];
      var h = c("setTimeout")(function () {
        c("FBLogger")("messenger_e2ee_web").mustfix(
          "[MiActMapping] Took longer than %s ms to execute: %s in threadState: %s for threadKey: %s, onActThreadReady",
          k,
          e,
          f,
          g
        );
      }, k);
      a.push({ callback: b, description: e, threadState: f, timeoutId: h });
      j.set(g, a);
    }
    function e(a, b, c) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, e) {
        var f = d("I64").to_string(a),
          g = j.get(f);
        if (g == null || g.length === 0) return;
        var k = g.length,
          l = 0;
        while (g.length !== 0) {
          var m = g.shift(),
            n = m.callback,
            o = m.description,
            p = m.threadState;
          m = m.timeoutId;
          try {
            c("promiseDone")(d("WALoggerDeferred").LOG(i(), o, f)),
              yield n(a, b, e),
              c("clearTimeout")(m),
              l++;
          } catch (a) {
            c("clearTimeout")(m),
              c("FBLogger")("messenger_e2ee_web")
                .catching(a)
                .mustfix(
                  "[MiActMapping] Error executing callback on ACT thread ready: %s, original threadState: %s, threadKey: %s",
                  o,
                  p,
                  f
                );
          }
        }
        j["delete"](f);
        c("promiseDone")(d("WALoggerDeferred").LOG(h(), l, k, f));
      });
      return l.apply(this, arguments);
    }
    g.enqueueByThreadKey = a;
    g.processQueueOnActThreadReady = e;
  },
  98
);
__d(
  "IGDSectionHeaderLayout.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        endAdornment: {
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          paddingStart: "x1ye3gou",
          $$css: !0,
        },
        noBottomBorder: { borderBottom: "xaqea5y", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          borderBottom: "x13zqm9e",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          height: "xr931m4",
          minHeight: "x4lt0of",
          paddingStart: "x1swvt13",
          paddingEnd: "x1pi30zi",
          width: "xh8yej3",
          $$css: !0,
        },
        rootMobile: {
          height: "xn3w4p2",
          minHeight: "x1gg8mnh",
          paddingStart: "x1swvt13",
          paddingEnd: "x1pi30zi",
          $$css: !0,
        },
        startAdornment: { display: "x78zum5", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        d = a.isMobile;
      d = d === void 0 ? !1 : d;
      var e = a.noBottomBorder;
      e = e === void 0 ? !1 : e;
      a = a.xstyle;
      return h.jsx("div", {
        className: c("stylex")(
          i.root,
          d ? i.rootMobile : !1,
          e ? i.noBottomBorder : !1,
          a
        ),
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a = a.children;
      return h.jsx("div", { className: "x78zum5", children: a });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      a = a.children;
      return h.jsx("div", {
        className: "x78zum5 x13a6bvl x1ye3gou",
        children: a,
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.Container = a;
    g.StartAdornment = b;
    g.EndAdornment = e;
  },
  98
);
__d(
  "IGDSectionHeader.react",
  ["IGDSectionHeaderLayout.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.endAdornment,
        e = a.isMobile,
        f = a.noBottomBorder;
      f = f === void 0 ? !1 : f;
      var g = a.startAdornment;
      a = a.xstyle;
      g =
        g != null
          ? h.jsx(d("IGDSectionHeaderLayout.react").StartAdornment, {
              children: g,
            })
          : null;
      c =
        c != null
          ? h.jsx(d("IGDSectionHeaderLayout.react").EndAdornment, {
              children: c,
            })
          : null;
      return h.jsxs(d("IGDSectionHeaderLayout.react").Container, {
        isMobile: e,
        noBottomBorder: f,
        xstyle: a,
        children: [g, b, c],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDViewerForThread.bs",
  ["MWPActor.react", "ReQL", "ReQLSuspense", "react", "useReStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      var b = c("useReStore")(),
        e = d("MWPActor.react").useActor(),
        g = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(b.table("participants"))
              .getKeyRange(a.threadKey, e);
          },
          [b, a.threadKey, e],
          f.id + ":26"
        );
      if (g == null) return !1;
      g = g.isAdmin;
      if (g !== void 0) return g;
      else return !1;
    }
    b = a;
    g.useIsViewerAdmin = b;
  },
  98
);
__d(
  "IGDBlockUserInboxInfoButton.bs",
  [
    "fbt",
    "CometLazyDialogTrigger.react",
    "I64",
    "JSResourceForInteraction",
    "LSContactBlockedByViewerStatus",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MessageRequestsLog.bs",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Block"),
      k = h._("Unblock");
    function a(a) {
      var b = a.contact,
        e = a.onClose,
        f = a.renderButton,
        g = a.thread,
        h = !d("I64").equal(
          b.blockedByViewerStatus,
          d("LSIntEnum").ofNumber(c("LSContactBlockedByViewerStatus").UNBLOCKED)
        ),
        l = h ? k : j,
        m = d("LSMessagingThreadTypeUtil").isSecure(g.threadType),
        n = d("LSMessagingThreadTypeUtil").isMessageRequest(g);
      return i.jsx(c("CometLazyDialogTrigger.react"), {
        dialogProps: {
          contactID: b.id,
          threadKey: g.threadKey,
          isBlocked: h,
          userName: b.name,
          onBlock: function () {
            m &&
              n &&
              !h &&
              d("MessageRequestsLog.bs").logActionConfirmed(
                g,
                2,
                d("I64").to_string(b.id)
              );
          },
        },
        dialogResource: c("JSResourceForInteraction")(
          "IGDBlockUserDialog.react",
          { class: "fluid", name: "IGDBlockUserDialog" }
        ).__setRef("IGDBlockUserInboxInfoButton.bs"),
        onHide: e,
        children: function (a) {
          return f(function () {
            a(),
              m &&
                n &&
                !h &&
                d("MessageRequestsLog.bs").logActionTapped(
                  g,
                  2,
                  d("I64").to_string(b.id)
                );
          }, l);
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = a;
    e = j;
    h = k;
    f = b;
    g.labelForBlock = e;
    g.labelForUnblock = h;
    g.make = f;
  },
  98
);
__d(
  "IGDChatSettingsDeleteThreadDialog.bs",
  [
    "fbt",
    "IGDNavigation.bs",
    "IGDSActionDialog.react",
    "IGDSDialogItem.react",
    "LSMessagingThreadTypeUtil",
    "MWLSThread",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.onClose,
        e = a.onDelete,
        f = a.thread,
        g = c("useReStore")(),
        j = d("IGDNavigation.bs").useHook(),
        k = i.useCallback(
          function () {
            var a = d("MWLSThread").getThreadExn(g, f.threadKey),
              b = d("LSMessagingThreadTypeUtil").isHiddenRequest(a);
            a = d("LSMessagingThreadTypeUtil").isMessageRequest(a);
            if (b) return j.openHiddenRequests();
            else if (a) return j.openPendingInbox();
            else return j.goToNullState();
          },
          [g, j, f.threadKey]
        );
      a = function () {
        e();
        k();
        return b();
      };
      var l = h._("Delete chat?"),
        m = h._(
          "Are you sure you want to permanently delete this conversation?"
        );
      return i.jsxs(c("IGDSActionDialog.react"), {
        body: m,
        onModalClose: b,
        title: l,
        children: [
          i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
            color: "errorOrDestructive",
            onClick: a,
            children: h._("Delete"),
          }),
          i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
            color: "secondaryButton",
            onClick: b,
            children: h._("Cancel"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = a;
    e = b;
    g.make = e;
  },
  98
);
__d(
  "IGDChatSettingsDeleteThreadDialog.react",
  ["IGDChatSettingsDeleteThreadDialog.bs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("IGDChatSettingsDeleteThreadDialog.bs").make;
  },
  98
);
__d(
  "IGDChatSettingsLeaveThreadDialog.bs",
  [
    "fbt",
    "IGDNavigation.bs",
    "IGDSActionDialog.react",
    "IGDSDialogItem.react",
    "LSMessagingThreadTypeUtil",
    "MAWRemoveGroupParticipantsUtils.bs",
    "MWPActor.react",
    "MWPRemoveFromGroup.bs",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Leave chat"),
      k = h._(
        "You won't get messages from this group unless someone adds you back to the chat."
      ),
      l = h._("Leave");
    function m(a) {
      var b = a.onClick;
      a = a.thread;
      var c = d("MWPActor.react").useActor(),
        e = d("MWPRemoveFromGroup.bs").useHook(a);
      return i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
        color: "errorOrDestructive",
        onClick: function () {
          e(c);
          return b();
        },
        children: l,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    b = { make: m };
    function n(a) {
      var b = a.onClick;
      a = a.thread;
      var e = c("useReStore")(),
        f = d("MWPActor.react").useActor(),
        g = d(
          "MAWRemoveGroupParticipantsUtils.bs"
        ).createRemoveParticipantCallback(e, a);
      return i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
        color: "errorOrDestructive",
        onClick: function () {
          g(f);
          return b();
        },
        children: l,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    e = { make: n };
    function a(a) {
      var b = a.onClose;
      a = a.thread;
      var e = d("IGDNavigation.bs").useHook(),
        f = d("LSMessagingThreadTypeUtil").isSecure(a.threadType),
        g = function () {
          e.goToNullState();
          return b();
        };
      return i.jsxs(c("IGDSActionDialog.react"), {
        body: k,
        onModalClose: b,
        title: j,
        children: [
          f
            ? i.jsx(n, { onClick: g, thread: a })
            : i.jsx(m, { onClick: g, thread: a }),
          i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
            color: "secondaryButton",
            onClick: b,
            children: h._("Cancel"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    f = a;
    a = b;
    b = e;
    e = f;
    g.LeaveOpenGroupButton = a;
    g.LeaveSecureGroupButton = b;
    g.make = e;
  },
  98
);
__d(
  "IGDChatSettingsLeaveThreadDialog.react",
  ["IGDChatSettingsLeaveThreadDialog.bs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("IGDChatSettingsLeaveThreadDialog.bs"),
      (g["default"] = d("IGDChatSettingsLeaveThreadDialog.bs").make);
  },
  98
);
__d(
  "IGDSHoverCardContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "IGDSHoverCardConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 100;
    b = 400;
    c = 300;
    f.INTENTIONAL_HOVER_DELAY_MS = a;
    f.SHOW_DELAY_MS = b;
    f.HIDE_DELAY_MS = c;
  },
  66
);
__d(
  "useIGDSHoverCardHoverState",
  [
    "IGDSHoverCardConstants",
    "clearTimeout",
    "emptyFunction",
    "react",
    "setTimeout",
    "useMatchMedia",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a() {
      var a = k(!1),
        b = a[0],
        e = a[1];
      a = k(!1);
      var f = a[0],
        g = a[1],
        l = j(),
        m = j(),
        n = j(),
        o = h(function () {
          c("clearTimeout")(l.current),
            c("clearTimeout")(m.current),
            c("clearTimeout")(n.current);
        }, []);
      i(
        function () {
          return function () {
            o();
          };
        },
        [o]
      );
      a = h(
        function () {
          o(),
            (l.current = c("setTimeout")(function () {
              e(!0);
            }, d("IGDSHoverCardConstants").INTENTIONAL_HOVER_DELAY_MS)),
            (n.current = c("setTimeout")(function () {
              g(!0);
            }, d("IGDSHoverCardConstants").SHOW_DELAY_MS));
        },
        [o]
      );
      var p = h(
          function () {
            o(),
              (m.current = c("setTimeout")(function () {
                e(!1), g(!1);
              }, d("IGDSHoverCardConstants").HIDE_DELAY_MS));
          },
          [o]
        ),
        q = c("useMatchMedia")("(hover: hover)");
      return !q
        ? {
            handleMouseEnter: c("emptyFunction"),
            handleMouseLeave: c("emptyFunction"),
            isHoveringWithIntent: !1,
            isHoverCardVisible: !1,
          }
        : {
            handleMouseEnter: a,
            handleMouseLeave: p,
            isHoveringWithIntent: b,
            isHoverCardVisible: f,
          };
    }
    g.useIGDSHoverCardHoverState = a;
  },
  98
);
__d(
  "IGDSHoverCard.react",
  [
    "BaseContextualLayer.react",
    "ErrorBoundary.react",
    "IGDSHoverCardContext",
    "emptyFunction",
    "react",
    "stylex",
    "useIGDSHoverCardHoverState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useRef,
      k = {
        rootInline: { display: "xt0psk2", $$css: !0 },
        rootInlineBlock: { display: "x1rg5ohu", $$css: !0 },
        rootBlock: { display: "x1lliihq", $$css: !0 },
        contextualLayer: {
          animationDuration: "xfbpl4g",
          animationName: "x127lhb5",
          animationTimingFunction: "xa3vuyk",
          $$css: !0,
        },
      };
    function l(a) {
      switch (a) {
        case "inline":
          return k.rootInline;
        case "inline-block":
          return k.rootInlineBlock;
        case "block":
          return k.rootBlock;
        default:
          return k.rootInlineBlock;
      }
    }
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "start" : b;
      var e = a.children,
        f = a.content,
        g = a.display;
      a = a.position;
      a = a === void 0 ? "below" : a;
      var m = j(null),
        n = d("useIGDSHoverCardHoverState").useIGDSHoverCardHoverState(),
        o = n.handleMouseEnter,
        p = n.handleMouseLeave,
        q = n.isHoverCardVisible;
      n = n.isHoveringWithIntent;
      g = l(g);
      var r = i(
        function () {
          return { isHoverCardVisible: q };
        },
        [q]
      );
      return h.jsxs("div", {
        className: c("stylex")(g),
        onMouseEnter: o,
        onMouseLeave: p,
        ref: m,
        children: [
          e,
          n &&
            h.jsx(c("ErrorBoundary.react"), {
              fallback: c("emptyFunction").thatReturnsNull,
              children: h.jsx(c("BaseContextualLayer.react"), {
                align: b,
                contextRef: m,
                hidden: !q,
                position: a,
                xstyle: k.contextualLayer,
                children: h.jsx(c("IGDSHoverCardContext").Provider, {
                  value: r,
                  children: f,
                }),
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
  "IGDSHoverCardContent.react",
  ["BaseContextualLayerOrientationContext", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        root: {
          backgroundColor: "xvbhtw8",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          boxShadow: "x1rj4ezl",
          paddingTop: "xyamay9",
          paddingEnd: "x1pi30zi",
          paddingBottom: "x1l90r2v",
          paddingStart: "x1swvt13",
          position: "x1n2onr6",
          $$css: !0,
        },
        rootAbove: { top: "x1v4kod4", $$css: !0 },
        rootBelow: { top: "xfr5jun", $$css: !0 },
        rootStart: { start: "x1mb8mph", $$css: !0 },
        rootEnd: { start: "xr6gfmr", $$css: !0 },
      };
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      var d = i(c("BaseContextualLayerOrientationContext"));
      d = d.position;
      return h.jsx("div", {
        className: c("stylex")([
          j.root,
          d === "above" && j.rootAbove,
          d === "below" && j.rootBelow,
          d === "start" && j.rootStart,
          d === "end" && j.rootEnd,
          a,
        ]),
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LSInternetConnectionState",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ NOT_CONNECTED: 0, CONNECTED: 1 });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisDirectMobileWrapper.react",
  [
    "IGDDeviceTypeProvider.react",
    "IGDInboxMobileLayout.bs",
    "IGDPageSetup.react",
    "IGDShellMobile.react",
    "PolarisDirectInboxMobileRootProviders.react",
    "react",
    "useGetStableCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        e = a.metadataManager,
        f = a.placeholder;
      f = f === void 0 ? null : f;
      a = a.threadKey;
      return h.jsx(c("PolarisDirectInboxMobileRootProviders.react"), {
        threadKey: a,
        children: h.jsx(c("IGDShellMobile.react"), {
          children: h.jsx(c("IGDPageSetup.react"), {
            placeholder: f,
            children: h.jsx(
              d("IGDDeviceTypeProvider.react").IGDDeviceTypeProvider,
              {
                isMobile: !0,
                children: h.jsx(
                  d("useGetStableCometRouterDispatcher")
                    .CometRouterDispatcherGetterContextProvider,
                  {
                    children: h.jsxs(
                      d("IGDInboxMobileLayout.bs").Container.make,
                      { children: [e, b] }
                    ),
                  }
                ),
              }
            ),
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
  "PolarisDirectThreadMobileRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")(
        "PolarisDirectThreadMobileRoot.react"
      ).__setRef("PolarisDirectThreadMobileRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectThreadMobileRoot.react",
  [
    "CometPlaceholder.react",
    "IGDMobileThreadPlaceholder.bs",
    "PolarisDirectInboxMetaManager.react",
    "PolarisDirectMobileWrapper.react",
    "PolarisDirectStrings",
    "cr:237",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b("cr:237") && b("cr:237").init();
    var i = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")("IGDThreadContainer.react").__setRef(
        "PolarisDirectThreadMobileRoot.react"
      )
    );
    function a(a) {
      a = a.props.routeParams.thread_key;
      return h.jsx(c("PolarisDirectMobileWrapper.react"), {
        metadataManager: h.jsx(c("PolarisDirectInboxMetaManager.react"), {
          id: "DirectThreadPage",
          title: d("PolarisDirectStrings").INBOX_STRING,
        }),
        placeholder: h.jsx(d("IGDMobileThreadPlaceholder.bs").make, {}),
        threadKey: a,
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: h.jsx(d("IGDMobileThreadPlaceholder.bs").make, {}),
          children: h.jsx(i, {}),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGWALinkingDelete.react",
  ["CometRelay", "PolarisIGWALinkingDeleteMutation.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0 ? h : (h = b("PolarisIGWALinkingDeleteMutation.graphql"));
    function a() {
      var a = d("CometRelay").useMutation(j),
        b = a[0];
      a = a[1];
      var c = i(
        function (a) {
          var c = function (b) {
              b = (b = b.delete_ig_wa_link) == null ? void 0 : b.result;
              b === "SUCCESS" && a.onSuccess && a.onSuccess("SUCCESS");
            },
            d = {};
          return b({ onCompleted: c, variables: d });
        },
        [b]
      );
      return [c, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUserTaggedRemovePostModal.react",
  [
    "IGCoreDialog",
    "PolarisConfig",
    "PolarisGenericStrings",
    "PolarisReactRedux",
    "PolarisTaggedPostsActions",
    "PolarisUserTaggedPostsStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose,
        c = a.post,
        e = d("PolarisConfig").getViewerId(),
        f = d("PolarisReactRedux").useDispatch();
      if (e == null) return null;
      a = function () {
        f(d("PolarisTaggedPostsActions").deleteTagFromNative(c.id, e)), b();
      };
      return h.jsxs(d("IGCoreDialog").IGCoreDialog, {
        body: d("PolarisUserTaggedPostsStrings").REMOVE_ME_FROM_POST_MODAL_TEXT,
        onModalClose: b,
        title: d("PolarisUserTaggedPostsStrings").REMOVE_ME_FROM_POST,
        children: [
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: a,
            children: d("PolarisUserTaggedPostsStrings").REMOVE,
          }),
          h.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            onClick: b,
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
  "getImageSourceURLFromImageish",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (typeof a === "string") return a;
      return a != null &&
        typeof a === "object" &&
        !a.sprited &&
        a.uri &&
        typeof a.uri === "string"
        ? a.uri
        : "";
    }
    f["default"] = a;
  },
  66
);
__d(
  "PolarisWhatsAppLinkingDeleteDialog.react",
  [
    "ix",
    "CometRelayEnvironmentProvider",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSDialog.react",
    "IGDSDialogHeader.react",
    "IGDSText.react",
    "Image.react",
    "PolarisGenericStrings",
    "PolarisIGWALinkingDelete.react",
    "PolarisProfessionalAccountWhatsAppLinkingStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var b = a.onClose;
      a = a.onLinkDeleted;
      return i.jsx(c("CometRelayEnvironmentProvider"), {
        children: i.jsx(k, { onClose: b, onLinkDeleted: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.onClose,
        e = a.onLinkDeleted;
      a = c("PolarisIGWALinkingDelete.react")();
      var f = a[0];
      a = a[1];
      var g = j(
          function (a) {
            a === "SUCCESS" && (b(), e());
          },
          [b, e]
        ),
        k = j(
          function () {
            f({ onSuccess: g });
          },
          [f, g]
        );
      return i.jsxs(c("IGDSDialog.react"), {
        onClose: b,
        size: "large",
        children: [
          i.jsx(c("IGDSDialogHeader.react"), {
            onClose: b,
            children: d("PolarisProfessionalAccountWhatsAppLinkingStrings")
              .DELETE_DIALOG_HEADER,
          }),
          i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            color: "alwaysWhite",
            margin: 10,
            children: i.jsx(c("Image.react"), { src: h("261403") }),
          }),
          i.jsxs(c("IGDSBox.react"), {
            color: "alwaysWhite",
            margin: 10,
            children: [
              i.jsx(c("IGDSBox.react"), {
                children: i.jsx(c("IGDSText.react"), {
                  color: "primaryText",
                  size: "body",
                  children: d(
                    "PolarisProfessionalAccountWhatsAppLinkingStrings"
                  ).DELETE_DIALOG_BODY,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginEnd: 8,
                marginStart: 8,
                marginTop: 6,
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  isDisabled: a,
                  label: d("PolarisProfessionalAccountWhatsAppLinkingStrings")
                    .REMOVE_WHATSAPP_NUMBER,
                  onClick: k,
                  size: "large",
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginEnd: 8,
                marginStart: 8,
                marginTop: 2,
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  label: d("PolarisGenericStrings").CANCEL_TEXT,
                  onClick: b,
                  size: "large",
                  variant: "primary_link",
                }),
              }),
            ],
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUserHoverCardButtonSection.react",
  [
    "IGDSAppMessengerPanoOutlineIcon",
    "IGDSButton.react",
    "IGDSDirectPanoOutlineIcon",
    "IGDSGlimmer.react",
    "PolarisConfig",
    "PolarisDirectStrings",
    "PolarisFollowButtonContainer.react",
    "PolarisGroupProfileUtils",
    "PolarisNavigationStrings",
    "PolarisRelationshipTypes",
    "polarisRelationshipSelectors",
    "react",
    "usePolarisDirectFeatures",
    "usePolarisDirectMessageClick",
    "usePolarisHoverCardLogger",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        root: { paddingStart: "x1swvt13", paddingEnd: "x1pi30zi", $$css: !0 },
        glimmer: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          height: "x90ne7k",
          width: "xh8yej3",
          $$css: !0,
        },
        actionButtonsContainer: { display: "x78zum5", $$css: !0 },
        messageButton: {
          flexGrow: "x1iyjqo2",
          marginEnd: "xw3qccf",
          maxWidth: "x1ncir08",
          $$css: !0,
        },
        followButton: {
          flexGrow: "x1iyjqo2",
          marginStart: "xsgj6o6",
          maxWidth: "x1ncir08",
          $$css: !0,
        },
      };
    function k(a) {
      var b = a.triggerAnalyticsContext;
      a = a.userId;
      a = d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback(
        "user",
        a,
        b,
        "editProfileClicked"
      );
      return h.jsx(c("IGDSButton.react"), {
        display: "block",
        fullWidth: !0,
        href: "/accounts/edit",
        label: d("PolarisNavigationStrings").PROFILE_EDIT_TEXT,
        onClick: a,
        variant: "secondary",
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.triggerAnalyticsContext,
        e = a.userId;
      a = a.username;
      var f = c("usePolarisSelector")(function (a) {
          return a.relationships.get(e);
        }),
        g = f != null && d("polarisRelationshipSelectors").followedByViewer(f);
      f = i(
        function () {
          return { followed: g };
        },
        [g]
      );
      b = d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback(
        "user",
        e,
        b,
        "followButtonClicked",
        f
      );
      return h.jsx(c("PolarisFollowButtonContainer.react"), {
        analyticsContext: "UNKNOWN__POLARIS_USER_HOVER_CARD_BUTTON_SECTION",
        fullWidth: !0,
        onClick: b,
        useFollowIcon: !0,
        userId: e,
        username: (f = a) != null ? f : "",
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      a = a.userId;
      a = c("usePolarisDirectMessageClick")(a);
      var b = a[0];
      a = a[1];
      var e = c("usePolarisDirectFeatures")();
      e = e.hasMessagingRedesign;
      e = e
        ? c("IGDSAppMessengerPanoOutlineIcon")
        : c("IGDSDirectPanoOutlineIcon");
      return h.jsx(c("IGDSButton.react"), {
        display: "block",
        fullWidth: !0,
        icon: h.jsx(e, { alt: "", color: "web-always-white", size: 20 }),
        isLoading: a,
        label: d("PolarisDirectStrings").MESSAGE_STRING,
        onClick: b,
        variant: "primary",
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.glimmerStartIndex,
        e = a.triggerAnalyticsContext,
        f = a.user,
        g = a.userId;
      a = c("usePolarisSelector")(function (a) {
        return a.relationships.get(g);
      });
      var i = d("PolarisConfig").getViewerId();
      if (g === i) return h.jsx(k, { triggerAnalyticsContext: e, userId: g });
      if (
        (a == null
          ? void 0
          : (i = a.followedByViewer) == null
          ? void 0
          : i.state) == null ||
        f == null
      )
        return h.jsx(c("IGDSGlimmer.react"), { index: b, xstyle: j.glimmer });
      i = d("PolarisGroupProfileUtils").getIsUserGroupProfile(f);
      b =
        a.followedByViewer.state ===
        d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING;
      return i || !b
        ? h.jsx(l, {
            triggerAnalyticsContext: e,
            userId: g,
            username: f.username,
          })
        : h.jsxs("div", {
            className: "x78zum5",
            children: [
              h.jsx("div", {
                className: "x1iyjqo2 xw3qccf x1ncir08",
                children: h.jsx(m, { userId: g }),
              }),
              h.jsx("div", {
                className: "x1iyjqo2 xsgj6o6 x1ncir08",
                children: h.jsx(l, {
                  triggerAnalyticsContext: e,
                  userId: g,
                  username: f.username,
                }),
              }),
            ],
          });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.glimmerStartIndex,
        c = a.triggerAnalyticsContext,
        d = a.user;
      a = a.userId;
      return h.jsx("div", {
        className: "x1swvt13 x1pi30zi",
        children: h.jsx(n, {
          glimmerStartIndex: b,
          triggerAnalyticsContext: c,
          user: d,
          userId: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUserHoverCardNoticeSection.react",
  ["CometImage.react", "IGDSText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.description,
        d = a.icon;
      a = a.title;
      return h.jsxs("div", {
        className:
          "x13zqm9e x1wzhzgj xrvj5dj x1v5loxz x1o2pa38 xyamay9 x1pi30zi x1l90r2v x1swvt13 x2b8uid",
        children: [
          h.jsx(c("CometImage.react"), {
            alt: "",
            height: 48,
            src: d,
            width: 48,
          }),
          h.jsx(c("IGDSText.react"), { weight: "bold", children: a }),
          h.jsx(c("IGDSText.react"), { color: "secondaryText", children: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUserHoverCardPostsSection.react",
  [
    "ix",
    "CometImage.react",
    "IGDSGlimmer.react",
    "PolarisFastLink.react",
    "PolarisLinkBuilder",
    "PolarisRelationshipTypes",
    "PolarisUserCardStrings",
    "PolarisUserHoverCardNoticeSection.react",
    "polarisPostSelectors",
    "react",
    "usePolarisHoverCardLogger",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        root: {
          alignItems: "x6s0dn4",
          display: "xrvj5dj",
          gridColumnGap: "x8l38fb",
          gridTemplateColumns: "x1rp53t7",
          $$css: !0,
        },
        glimmer: {
          borderTopStartRadius: "x168nmei",
          borderTopEndRadius: "x13lgxp2",
          borderBottomEndRadius: "x5pf9jr",
          borderBottomStartRadius: "xo71vjh",
          height: "x1wkxgih",
          width: "xygnafs",
          $$css: !0,
        },
        mediaContainer: {
          backgroundColor: "xnz67gz",
          display: "x78zum5",
          height: "x1wkxgih",
          ":active_opacity": "x162lpob",
          $$css: !0,
        },
      };
    function k(a) {
      var b = a.postId,
        e = a.triggerAnalyticsContext;
      a = a.userId;
      a = d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback(
        "user",
        a,
        e,
        "postGridPostLinkClicked"
      );
      e = c("usePolarisSelector")(function (a) {
        return d("polarisPostSelectors").getPostOrNullById(a, b);
      });
      var f = e == null ? void 0 : e.src;
      if (f == null || (e == null ? void 0 : e.code) == null)
        return i.jsx("div", { className: "xnz67gz x78zum5 x1wkxgih x162lpob" });
      e = d("PolarisLinkBuilder").buildMediaLink(e.code);
      return i.jsx(c("PolarisFastLink.react"), {
        className: "xnz67gz x78zum5 x1wkxgih x162lpob",
        href: e,
        onClick: a,
        children: i.jsx(c("CometImage.react"), {
          height: 120,
          objectFit: "cover",
          src: f,
          width: 120,
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.glimmerStartIndex,
        e = a.postIds,
        f = a.triggerAnalyticsContext,
        g = a.user,
        l = a.userId;
      a = c("usePolarisSelector")(function (a) {
        return a.relationships.get(l);
      });
      if (
        g != null &&
        g.isPrivate === !0 &&
        a != null &&
        a.followedByViewer.state !==
          d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING
      )
        return i.jsx(c("PolarisUserHoverCardNoticeSection.react"), {
          description: d("PolarisUserCardStrings").PRIVATE_ACCOUNT_SUBTEXT,
          icon: h("295615"),
          title: d("PolarisUserCardStrings").PRIVATE_ACCOUNT_TITLE,
        });
      if (e == null || a == null || g == null)
        return i.jsxs("div", {
          className: "x6s0dn4 xrvj5dj x8l38fb x1rp53t7",
          children: [
            i.jsx(c("IGDSGlimmer.react"), { index: b, xstyle: j.glimmer }),
            i.jsx(c("IGDSGlimmer.react"), { index: b + 1, xstyle: j.glimmer }),
            i.jsx(c("IGDSGlimmer.react"), { index: b + 2, xstyle: j.glimmer }),
          ],
        });
      return e.length === 0
        ? g.username == null
          ? null
          : i.jsx(c("PolarisUserHoverCardNoticeSection.react"), {
              description: d("PolarisUserCardStrings").noPostsSubtext(
                g.username
              ),
              icon: h("295614"),
              title: d("PolarisUserCardStrings").NO_POSTS_TITLE,
            })
        : i.jsx("div", {
            className: "x6s0dn4 xrvj5dj x8l38fb x1rp53t7",
            children: e.map(function (a) {
              return i.jsx(
                k,
                { postId: a, triggerAnalyticsContext: f, userId: l },
                a
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
  "PolarisUserHoverCardStatisticsSection.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "IGDSGlimmer.react",
    "IGDSText.react",
    "PolarisBigNumber.react",
    "PolarisUserHoverCardStatisticsSectionQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = {
        root: {
          alignItems: "x6s0dn4",
          display: "xrvj5dj",
          gridColumnGap: "x8l38fb",
          gridTemplateColumns: "x1rp53t7",
          $$css: !0,
        },
        statistic: {
          paddingTop: "xexx8yu",
          paddingEnd: "x1sxyh0",
          paddingBottom: "x18d9i69",
          paddingStart: "xurb0ha",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        statisticCountGlimmer: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "x1v9usgg",
          marginStart: "x1gryazu",
          marginEnd: "xkrivgy",
          width: "x100vrsf",
          $$css: !0,
        },
        statisticLabelGlimmer: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "x1v9usgg",
          marginStart: "x1gryazu",
          marginEnd: "xkrivgy",
          marginTop: "x1gslohp",
          width: "x1fu8urw",
          $$css: !0,
        },
        statisticLabel: { marginTop: "x1gslohp", $$css: !0 },
      };
    function l(a) {
      a = a.glimmerStartIndex;
      return j.jsxs("div", {
        className: "xexx8yu x1sxyh0 x18d9i69 xurb0ha x2b8uid",
        children: [
          j.jsx(c("IGDSGlimmer.react"), {
            index: a,
            xstyle: k.statisticCountGlimmer,
          }),
          j.jsx(c("IGDSGlimmer.react"), {
            index: a + 1,
            xstyle: k.statisticLabelGlimmer,
          }),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.count;
      a = a.label;
      return j.jsxs("div", {
        className: "xexx8yu x1sxyh0 x18d9i69 xurb0ha x2b8uid",
        children: [
          j.jsx("div", {
            children: j.jsx(c("IGDSText.react"), {
              weight: "bold",
              children: j.jsx(c("PolarisBigNumber.react"), {
                shortenNumber: !0,
                value: b,
              }),
            }),
          }),
          j.jsx("div", {
            className: "x1gslohp",
            children: j.jsx(c("IGDSText.react"), { children: a }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var c, e;
      a = a.userId;
      a = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("PolarisUserHoverCardStatisticsSectionQuery.graphql")),
        { userID: a }
      );
      a = a.xdt_api__v1__users__info.user;
      c = (c = a == null ? void 0 : a.media_count) != null ? c : 0;
      e = (e = a == null ? void 0 : a.follower_count) != null ? e : 0;
      a = (a = a == null ? void 0 : a.following_count) != null ? a : 0;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(m, {
            count: c,
            label: h._({ "*": "posts", _1: "post" }, [
              h._plural((c = c) != null ? c : 0),
            ]),
          }),
          j.jsx(m, {
            count: e,
            label: h._({ "*": "followers", _1: "follower" }, [
              h._plural((c = e) != null ? c : 0),
            ]),
          }),
          j.jsx(m, {
            count: a,
            label: h._({ "*": "following" }, [
              h._plural((e = a) != null ? e : 0),
            ]),
          }),
        ],
      });
    }
    function a(a) {
      var b = a.glimmerStartIndex;
      a = a.userId;
      return j.jsx("div", {
        className: "x6s0dn4 xrvj5dj x8l38fb x1rp53t7",
        children: j.jsx(c("CometPlaceholder.react"), {
          fallback: j.jsxs(j.Fragment, {
            children: [
              j.jsx(l, { glimmerStartIndex: b }),
              j.jsx(l, { glimmerStartIndex: b + 1 }),
              j.jsx(l, { glimmerStartIndex: b + 2 }),
            ],
          }),
          children: j.jsx(n, { userId: a }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisUserHoverCardUserInfoSection.react",
  [
    "IGDSGlimmer.react",
    "IGDSText.react",
    "PolarisFastLink.react",
    "PolarisIGCoreVerifiedBadge",
    "PolarisSponsoredPostContext.react",
    "PolarisUserAvatarWithStories.react",
    "isStringNullOrWhitespaceOnly",
    "react",
    "usePolarisHoverCardLogger",
    "usePolarisTrackingDataProfileURLParams",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        root: {
          alignItems: "x6s0dn4",
          display: "xrvj5dj",
          gridColumnGap: "xjv0b96",
          gridTemplateColumns: "x1wdtju6",
          paddingStart: "x1swvt13",
          paddingEnd: "x1pi30zi",
          $$css: !0,
        },
        profilePictureGlimmer: {
          borderTopStartRadius: "xv4rd2r",
          borderTopEndRadius: "x19baegm",
          borderBottomEndRadius: "x1vswc8w",
          borderBottomStartRadius: "x1jq0agw",
          height: "xnnlda6",
          width: "x15yg21f",
          $$css: !0,
        },
        usernameGlimmer: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "xlup9mm",
          width: "xja02kk",
          $$css: !0,
        },
        fullNameGlimmer: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "xlup9mm",
          marginTop: "x1gslohp",
          width: "xzjbwwf",
          $$css: !0,
        },
        username: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "xmix8c7",
          $$css: !0,
        },
        verifiedBadge: { marginStart: "xsgj6o6", $$css: !0 },
        fullName: {
          height: "xmix8c7",
          marginTop: "x1gslohp",
          width: "x1rva8in",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.glimmerStartIndex,
        e = a.triggerAnalyticsContext,
        f = a.user;
      a = a.userId;
      var g = f == null ? void 0 : f.fullName,
        k = f == null ? void 0 : f.username,
        l = f == null ? void 0 : f.isVerified,
        m = f == null ? void 0 : f.profilePictureUrl;
      a = d("usePolarisHoverCardLogger").useHoverCardInteractionLoggerCallback(
        "user",
        a,
        e,
        "profileLinkClicked"
      );
      e = d(
        "usePolarisTrackingDataProfileURLParams"
      ).usePolarisTrackingDataProfileURLParams(
        i(d("PolarisSponsoredPostContext.react").PolarisSponsoredPostContext)
          .canUserSeePersistentCta
      );
      return h.jsxs("div", {
        className: "x6s0dn4 xrvj5dj xjv0b96 x1wdtju6 x1swvt13 x1pi30zi",
        children: [
          h.jsx("div", {
            children:
              m == null
                ? h.jsx(c("IGDSGlimmer.react"), {
                    index: b,
                    xstyle: j.profilePictureGlimmer,
                  })
                : h.jsx(c("PolarisUserAvatarWithStories.react"), {
                    isClickable: !0,
                    profilePictureUrl: m,
                    size: 56,
                    storyEntrypoint: "user_hover_card",
                    userId: f == null ? void 0 : f.id,
                    username: f == null ? void 0 : f.username,
                  }),
          }),
          h.jsx("div", {
            children: h.jsx("div", {
              children:
                k == null
                  ? h.jsxs(h.Fragment, {
                      children: [
                        h.jsx(c("IGDSGlimmer.react"), {
                          index: b + 1,
                          xstyle: j.usernameGlimmer,
                        }),
                        h.jsx(c("IGDSGlimmer.react"), {
                          index: b + 2,
                          xstyle: j.fullNameGlimmer,
                        }),
                      ],
                    })
                  : h.jsxs(h.Fragment, {
                      children: [
                        h.jsxs("div", {
                          className: "x6s0dn4 x78zum5 xmix8c7",
                          children: [
                            h.jsx(c("PolarisFastLink.react"), {
                              href: "/" + k,
                              onClick: a,
                              params: e,
                              children: h.jsx(
                                c("IGDSText.react").LabelEmphasized,
                                { children: k }
                              ),
                            }),
                            l === !0 &&
                              h.jsx("span", {
                                className: "xsgj6o6",
                                children: h.jsx(
                                  c("PolarisIGCoreVerifiedBadge"),
                                  {}
                                ),
                              }),
                          ],
                        }),
                        c("isStringNullOrWhitespaceOnly")(g)
                          ? null
                          : h.jsx("div", {
                              className: "xmix8c7 x1gslohp x1rva8in",
                              children: h.jsx(c("IGDSText.react"), {
                                color: "secondaryText",
                                maxLines: 1,
                                children: g,
                              }),
                            }),
                      ],
                    }),
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
  "PolarisUserHoverCardContent.react",
  [
    "IGDSHoverCardContext",
    "PolarisProfilePostsActions",
    "PolarisProfilePostsSelectors",
    "PolarisReactRedux",
    "PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId",
    "PolarisUserActionGetUserInfo",
    "PolarisUserHoverCardButtonSection.react",
    "PolarisUserHoverCardPostsSection.react",
    "PolarisUserHoverCardStatisticsSection.react",
    "PolarisUserHoverCardUserInfoSection.react",
    "nullthrows",
    "polarisUserSelectors",
    "qex",
    "react",
    "usePolarisHoverCardLogger",
    "usePolarisSelector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a(a) {
      var b,
        e = a.triggerAnalyticsContext,
        f = a.userId;
      a = k(null);
      var g = c("nullthrows")(i(c("IGDSHoverCardContext")));
      g = g.isHoverCardVisible;
      var l = c("usePolarisSelector")(function (a) {
          return d("polarisUserSelectors").maybeGetUserById(a, f);
        }),
        m = d("PolarisReactRedux").useDispatch(),
        n = c("usePolarisSelector")(function (a) {
          return d(
            "PolarisProfilePostsSelectors"
          ).getUserHoverCardProfilePostsForUserId(a, f);
        });
      n = n.postIds;
      b = (b = c("qex")._("740")) != null ? b : !1;
      var o = n == null,
        p =
          !b ||
          l == null ||
          l.isVerified == null ||
          l.profilePictureUrl == null ||
          l.username == null,
        q = c("usePolarisSelector")(function (a) {
          return a.relationships.get(f);
        }),
        r = !b || (q == null ? void 0 : q.followedByViewer.state) == null;
      j(
        function () {
          o && m(d("PolarisProfilePostsActions").requestProfilePostsV2(f));
        },
        [m, o, f]
      );
      j(
        function () {
          p && m(d("PolarisUserActionGetUserInfo").getUserInfo(f));
        },
        [m, p, f]
      );
      j(
        function () {
          r &&
            m(
              d(
                "PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId"
              ).getRelationshipInfoWithViewerByUserId(f)
            );
        },
        [m, r, f]
      );
      d("usePolarisHoverCardLogger").useHoverCardLoadedLogger(
        a,
        e,
        g,
        "user",
        f
      );
      return h.jsxs("div", {
        className: "x6s0dn4 xrvj5dj x19g8pj0 x1dh5ka xyamay9 x1l90r2v x1mu97ne",
        ref: a,
        children: [
          h.jsx("div", {
            children: h.jsx(c("PolarisUserHoverCardUserInfoSection.react"), {
              glimmerStartIndex: 0,
              triggerAnalyticsContext: e,
              user: l,
              userId: f,
            }),
          }),
          h.jsx("div", {
            children: h.jsx(c("PolarisUserHoverCardStatisticsSection.react"), {
              glimmerStartIndex: 3,
              user: l,
              userId: f,
            }),
          }),
          h.jsx("div", {
            children: h.jsx(c("PolarisUserHoverCardPostsSection.react"), {
              glimmerStartIndex: 6,
              postIds: n,
              triggerAnalyticsContext: e,
              user: l,
              userId: f,
            }),
          }),
          h.jsx("div", {
            children: h.jsx(c("PolarisUserHoverCardButtonSection.react"), {
              glimmerStartIndex: 9,
              triggerAnalyticsContext: e,
              user: l,
              userId: f,
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
  "PolarisUserHoverCardImpl.react",
  [
    "IGDSHoverCard.react",
    "IGDSHoverCardContent.react",
    "PolarisUserHoverCardContent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        content: {
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.display,
        e = a.triggerAnalyticsContext;
      a = a.userId;
      return h.jsx(c("IGDSHoverCard.react"), {
        content: h.jsx(c("IGDSHoverCardContent.react"), {
          xstyle: i.content,
          children: h.jsx(c("PolarisUserHoverCardContent.react"), {
            triggerAnalyticsContext: e,
            userId: a,
          }),
        }),
        display: d,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastAboutThisAccountModal.react",
  [
    "AboutThisAccountRefererTypes",
    "PolarisAboutThisAccountModal.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.post;
      if (a.owner)
        return h.jsx(c("PolarisAboutThisAccountModal.react"), {
          onClose: b,
          referer_type: c("AboutThisAccountRefererTypes").FEED,
          user: a.owner,
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastDeleteModal.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisGenericStrings",
    "PolarisLinkBuilder",
    "PolarisPostActionDeletePost",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUA",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("Delete post?");
    function a(a) {
      var b = a.location,
        e = a.onClose,
        f = a.post,
        g = d("PolarisReactRedux").useDispatch(),
        k = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        });
      a = function () {
        var a;
        if (b != null && d("PolarisUA").isDesktop()) {
          var h;
          b.pathname !== d("PolarisRoutes").FEED_PATH && (a = b.pathname);
          ((h = a) == null ? void 0 : h.startsWith("/p/")) &&
            (a = d("PolarisLinkBuilder").buildUserLink(
              c("nullthrows")(k == null ? void 0 : k.username)
            ));
        }
        g(d("PolarisPostActionDeletePost").deletePost(f.id, a));
        e();
      };
      return i.jsxs(d("IGCoreDialog").IGCoreDialog, {
        body: h._("Are you sure you want to delete this post?"),
        title: j,
        children: [
          i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
            color: "ig-error-or-destructive",
            onClick: a,
            children: d("PolarisGenericStrings").DELETE_TEXT,
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
  "PolarisPostFastEmbedModal.react",
  [
    "PolarisEmbedModal.react",
    "nullthrows",
    "react",
    "usePolarisAnalyticsContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        d = a.onClose;
      a = a.post;
      var e = c("usePolarisAnalyticsContext")(),
        f = a.code || "",
        g = a.productType;
      b = c("nullthrows")((b = a.owner) == null ? void 0 : b.id);
      return h.jsx(c("PolarisEmbedModal.react"), {
        analyticsContext: e,
        code: f,
        id: a.id,
        onClose: d,
        ownerId: b,
        productType: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXPostOptionReportAdModalBase.react",
  ["PolarisFRXReportModal.react", "PolarisReportConstants", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      switch (a) {
        case "feed":
        case "feedPage":
        case "adsSettingsPage":
        case "adsActivityFeed":
        case "adsActivity":
          return d("PolarisReportConstants").FRXLocation.FEED;
        default:
          return d("PolarisReportConstants").FRXLocation.POST;
      }
    }
    function a(a) {
      var b = a.adID,
        e = a.analyticsContext,
        f = a.containerModule,
        g = a.frxEntryPoint,
        j = a.frxObjectType,
        k = a.onClose,
        l = a.ownerID,
        m = a.ownerProfilePicURL;
      a = a.ownerUsername;
      e = i(e);
      return h.jsx(c("PolarisFRXReportModal.react"), {
        containerModule: f,
        frxEntryPoint: g,
        frxLocation: e,
        frxObjectType: j,
        onClose: function () {
          return k && k();
        },
        reportedObjectID: b,
        reportedOwner: { id: l, username: a, profilePicURL: m },
        useSimpleBlockModalWithoutRefresh:
          e === d("PolarisReportConstants").FRXLocation.POST,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastHideAdModal.react",
  [
    "PolarisFRXPostOptionReportAdModalBase.react",
    "PolarisReportConstants",
    "polarisAdsSelectors",
    "react",
    "usePolarisAnalyticsContext",
    "usePolarisPost",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.post;
      var e = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.id;
        }),
        f = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.username;
        }),
        g = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.profilePictureUrl;
        }),
        i = c("usePolarisAnalyticsContext")();
      a = d("polarisAdsSelectors").useFeedAdInfo(a.id, function (a) {
        return a == null ? void 0 : a.ad_id;
      });
      return a == null
        ? null
        : h.jsx(c("PolarisFRXPostOptionReportAdModalBase.react"), {
            adID: a,
            analyticsContext: i,
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint
              .HIDE_AD_BUTTON,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: b,
            ownerID: e,
            ownerProfilePicURL: g,
            ownerUsername: f,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastReportAdModal.react",
  [
    "PolarisContainerModuleUtils",
    "PolarisFRXPostOptionReportAdModalBase.react",
    "PolarisReportConstants",
    "polarisAdsSelectors",
    "react",
    "usePolarisAnalyticsContext",
    "usePolarisPost",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.post;
      var e = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.id;
        }),
        f = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.username;
        }),
        g = d("usePolarisPost").usePostAndOwner(a.id, function (a, b) {
          return b.profilePictureUrl;
        }),
        i = c("usePolarisAnalyticsContext")();
      a = d("polarisAdsSelectors").useFeedAdInfo(a.id, function (a) {
        return a == null ? void 0 : a.ad_id;
      });
      return a == null
        ? null
        : h.jsx(c("PolarisFRXPostOptionReportAdModalBase.react"), {
            adID: a,
            analyticsContext: i,
            containerModule: d(
              "PolarisContainerModuleUtils"
            ).getContainerModule(i),
            frxEntryPoint: d("PolarisReportConstants").FRXEntryPoint
              .REPORT_AD_BUTTON,
            frxObjectType: d("PolarisReportConstants").FRXObjectType.AD,
            onClose: b,
            ownerID: e,
            ownerProfilePicURL: g,
            ownerUsername: f,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastShareSheet.react",
  [
    "PolarisLogger",
    "PolarisPostActionLoadPostShareIds",
    "PolarisPostShareUtils",
    "PolarisPostTypeUtils",
    "PolarisReactRedux",
    "PolarisShareHelpers",
    "PolarisShareSheet.react",
    "gkx",
    "react",
    "usePolarisAnalyticsContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.onClose,
        e = a.post,
        f = d("PolarisReactRedux").useDispatch(),
        g = c("usePolarisAnalyticsContext")(),
        j = d("PolarisPostTypeUtils").getPostType(e);
      a = ((a = e.owner) == null ? void 0 : a.username) || "";
      var k = d("PolarisShareHelpers").getShareDescription(a, j);
      a = e.shareIds;
      var l = d("PolarisPostShareUtils").getShareURL(e);
      i(
        function () {
          c("gkx")("4908") ||
            d("PolarisLogger").logAction("shareClick", { source: g, type: j }),
            f(
              d("PolarisPostActionLoadPostShareIds").loadPostShareIds(
                e.id,
                e.code
              )
            );
        },
        [g, f, e.code, e.id, j]
      );
      var m = function () {
          b();
        },
        n = function () {
          c("gkx")("4908") ||
            d("PolarisLogger").logAction("nativeShareClick", {
              source: g,
              type: j,
            }),
            b(),
            d("PolarisShareHelpers").shareWithNative(
              k,
              l,
              "ig_web_button_native_share"
            );
        };
      if (e.owner == null) return null;
      var o = d("PolarisPostShareUtils").getIsShareable(e, e.owner);
      return h.jsx(c("PolarisShareSheet.react"), {
        analyticsContext: g,
        description: k,
        entityID: e.id,
        entityType: j,
        onClose: m,
        onNativeShare: n,
        shareEnabled: o,
        shareIds: a,
        url: l,
        utmSource: "ig_web_button_share_sheet",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastTaggedModal.react",
  ["fbt", "PolarisUserTagSheet.react", "nullthrows", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.post;
      var e = c("nullthrows")(a.usertags);
      return i.jsx(d("PolarisUserTagSheet.react").UserTagSheet, {
        mediaId: a.id,
        onClose: b,
        title: h._("Tagged"),
        usertags: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastUnfollowModal.react",
  [
    "PolarisUnfollowDialog_DEPRECATED.react",
    "polarisUnexpected",
    "react",
    "usePolarisAnalyticsContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b,
        d = a.onClose;
      a = a.post;
      var e = c("usePolarisAnalyticsContext")();
      a =
        ((b = a.group) == null ? void 0 : b.id) != null
          ? (b = a.group) == null
            ? void 0
            : b.id
          : (b = a.owner) == null
          ? void 0
          : b.id;
      if (a == null) {
        c("polarisUnexpected")("ownerId should not be null for unfollow modal");
        return null;
      }
      return h.jsx(c("PolarisUnfollowDialog_DEPRECATED.react"), {
        analyticsContext: e,
        analyticsExtra: {},
        onClose: d,
        userId: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisPostFastWAISTModal.react",
  ["PolarisWAISTModalContent.react", "polarisAdsSelectors", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.post;
      a = d("polarisAdsSelectors").useFeedAdInfo(a.id, function (a) {
        return a == null ? void 0 : a.ad_id;
      });
      return a == null
        ? null
        : h.jsx(c("PolarisWAISTModalContent.react"), { adId: a, onClose: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
