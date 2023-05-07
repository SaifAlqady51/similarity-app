/*FB_PKG_DELIM*/

__d(
  "IGDSCircleOutline24Icon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 24 24",
          children: h.jsx("circle", {
            cx: "12.008",
            cy: "12",
            fill: "none",
            r: "11.25",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
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
  "IGDSWebPauseFilledIcon",
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
            d: "M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z",
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
  "PostFastDirectShareSheetModal",
  ["IGCoreModal", "PolarisUA", "react", "usePolarisViewport"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = c("usePolarisViewport")(),
        e = b.width;
      b = a.size;
      function f() {
        return d("PolarisUA").isMobile()
          ? { height: "100%" }
          : e <= 736
          ? { height: "100vh" }
          : { maxHeight: "65vh" };
      }
      return h.jsx(
        c("IGCoreModal"),
        babelHelpers["extends"]({}, a, {
          size: d("PolarisUA").isMobile() ? "fullscreen" : b,
          style: f(),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectGreenDot.react",
  ["cx", "invariant", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.isGroup;
      a = a.size;
      !b ||
        (a !== "tiny" && a !== "atomic" && a !== "superatomic") ||
        i(0, 51392);
      b = a;
      a === "superatomic" && (b = "atomic");
      return j.jsx("div", {
        className:
          "_aah4" +
          (b === "default" ? " _aah5" : "") +
          (b === "medium" ? " _aah6" : "") +
          (b === "small" ? " _aah7" : "") +
          (b === "tiny" ? " _aah8" : "") +
          (b === "atomic" ? " _aah9" : ""),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectAvatar.react",
  [
    "cx",
    "invariant",
    "IGDSBox.react",
    "PolarisDirectGreenDot.react",
    "PolarisReactRedux",
    "PolarisUserAvatar.react",
    "polarisDirectSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        default: 56,
        medium: 40,
        small: 32,
        tiny: 24,
        atomic: 16,
        superatomic: 14,
      },
      l = { default: 40, medium: 32, small: 20 };
    function a(a) {
      var b = a.avatarUsersUnfiltered,
        d = a.isActive,
        e = a.isGroup,
        f = a.isLink,
        g = a.size;
      a = a.viewer;
      var h = k[g];
      d = !!d;
      e = e === !0 && b.length === 1 ? [].concat(b, [a]) : b;
      if (e.length === 0)
        return j.jsxs(c("IGDSBox.react"), {
          alignItems: "end",
          direction: "row",
          justifyContent: "end",
          position: "relative",
          children: [
            j.jsx(c("PolarisUserAvatar.react"), {
              isLink: !!f,
              profilePictureUrl: a == null ? void 0 : a.profile_pic_url,
              size: h,
              username: a == null ? void 0 : a.username,
            }),
            d &&
              j.jsx(c("PolarisDirectGreenDot.react"), { isGroup: !1, size: g }),
          ],
        });
      else if (e.length === 1) {
        return j.jsxs(c("IGDSBox.react"), {
          alignItems: "end",
          direction: "row",
          justifyContent: "end",
          position: "relative",
          children: [
            j.jsx(c("PolarisUserAvatar.react"), {
              isLink: !!f,
              profilePictureUrl:
                (b = e[0]) == null ? void 0 : b.profile_pic_url,
              size: h,
              username: (a = e[0]) == null ? void 0 : a.username,
            }),
            d &&
              j.jsx(c("PolarisDirectGreenDot.react"), { isGroup: !1, size: g }),
          ],
        });
      }
      (g !== "tiny" && g !== "atomic" && g !== "superatomic") || i(0, 51463);
      f = l[g];
      return j.jsxs(c("IGDSBox.react"), {
        height: h,
        position: "relative",
        width: h,
        children: [
          j.jsx(c("PolarisUserAvatar.react"), {
            isLink: !1,
            profilePictureUrl: (b = e[1]) == null ? void 0 : b.profile_pic_url,
            size: f,
            username: (a = e[1]) == null ? void 0 : a.username,
          }),
          j.jsx("div", {
            className:
              "_aa2p" +
              (g === "default" ? " _aa2q" : "") +
              (g === "small" || g === "medium" ? " _aa2r" : ""),
            children: j.jsxs(c("IGDSBox.react"), {
              alignItems: "end",
              direction: "row",
              justifyContent: "end",
              position: "relative",
              children: [
                j.jsx(c("PolarisUserAvatar.react"), {
                  isLink: !1,
                  profilePictureUrl:
                    (h = e[0]) == null ? void 0 : h.profile_pic_url,
                  size: f,
                  username: (b = e[0]) == null ? void 0 : b.username,
                }),
                d &&
                  j.jsx(c("PolarisDirectGreenDot.react"), {
                    isGroup: !0,
                    size: g,
                  }),
              ],
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = function () {
      var a = d("polarisDirectSelectors").makeGetDirectUsersByIds();
      return function (b, c) {
        return { avatarUsersUnfiltered: a(b, c) };
      };
    };
    e = d("PolarisReactRedux").connect(b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisDirectPageMetadata.react",
  ["PolarisPageMetadata.react", "react", "usePolarisDirectFeatures"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.id;
      a = a.title;
      var d = c("usePolarisDirectFeatures")();
      d = d.directTitle;
      return h.jsx(c("PolarisPageMetadata.react"), {
        base: d,
        id: b,
        title: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectActionAddUsers",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b) {
        b({ type: "DIRECT_USERS_LOADED", users: a });
      };
    }
    f.addUsers = a;
  },
  66
);
__d(
  "PolarisDirectActionInitInbox",
  [
    "PolarisCacheActions",
    "PolarisDirectAPI",
    "PolarisDirectActionConnectToMqtt",
    "PolarisDirectActionCreatePendingThreadsLoaded",
    "PolarisDirectActionLoadInbox",
    "PolarisDirectActionRefreshPendingInbox",
    "PolarisDirectActionReloadInbox",
    "PolarisDirectActionsLogger",
    "PolarisDirectStrings",
    "PolarisReduxCache",
    "PolarisToastActions",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      return d("PolarisReduxCache").isCacheSupported();
    }
    function a(a) {
      return (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b, c) {
          try {
            h() &&
              (d("PolarisDirectActionsLogger").directActionsLogger.debugTrace(
                "load_from_cache"
              ),
              yield b(d("PolarisCacheActions").initCache()));
            c = c();
            c = c.direct;
            var e = c.inboxLoaded;
            c = c.seqId;
            d("PolarisDirectActionsLogger").directActionsLogger.debugTrace(
              "initial_state",
              { seqId: c, inboxLoaded: e }
            );
            !e
              ? yield b(d("PolarisDirectActionLoadInbox").loadInbox(a))
              : (b({ type: "DIRECT_INBOX_READY" }),
                d("PolarisDirectAPI")
                  .getInbox("pending_only", { limit: 0 })
                  .then(function (a) {
                    a.pending_requests_total > 0
                      ? b(
                          d(
                            "PolarisDirectActionRefreshPendingInbox"
                          ).refreshPendingInbox()
                        )
                      : b(
                          d(
                            "PolarisDirectActionCreatePendingThreadsLoaded"
                          ).createPendingThreadsLoaded({}, {}, {}, null)
                        );
                  })
                  ["catch"](function (a) {
                    d(
                      "PolarisDirectActionsLogger"
                    ).directActionsLogger.logError(
                      "direct_init_inbox_failed",
                      a
                    ),
                      b(
                        d("PolarisToastActions").showToast({
                          text: d("PolarisDirectStrings").GENERIC_ERROR_MESSAGE,
                        })
                      );
                  }));
            b(d("PolarisDirectActionConnectToMqtt").connectToMqtt("message"));
          } catch (c) {
            d("PolarisDirectActionsLogger").directActionsLogger.logError(
              "direct_inbox_cache_failed",
              c
            ),
              b(d("PolarisDirectActionReloadInbox").reloadInbox(a));
          }
        });
        return function (a, b) {
          return c.apply(this, arguments);
        };
      })();
    }
    g.initInbox = a;
  },
  98
);
__d(
  "PolarisDirectSearchUserContainerCandidate.react",
  [
    "IGDSCircleCheckPanoFilledIcon",
    "IGDSCircleOutline24Icon",
    "IGDSListItem.react",
    "PolarisDirectStrings",
    "PolarisIGCoreSVGIconButton",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.candidateId,
        e = a["data-testid"];
      e = a.icon;
      var f = a.isSelected,
        g = a.onToggleCandidate,
        i = a.subtitle;
      a = a.title;
      return h.jsx(
        c("IGDSListItem.react"),
        {
          addOnEnd: h.jsx(c("PolarisIGCoreSVGIconButton"), {
            onClick: function () {
              g(b);
            },
            children: f
              ? h.jsx(c("IGDSCircleCheckPanoFilledIcon"), {
                  alt: d("PolarisDirectStrings").TOGGLE_SELECTION,
                  color: "ig-primary-button",
                  size: 24,
                })
              : h.jsx(c("IGDSCircleOutline24Icon"), {
                  alt: d("PolarisDirectStrings").TOGGLE_SELECTION,
                  color: "ig-secondary-button",
                }),
          }),
          addOnStart: e,
          onPress: function () {
            g(b);
          },
          overlayDisabled: !1,
          subtitle: i,
          testid: void 0,
          title: a,
        },
        a
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectSearchUserContainerGroupCandidate.react",
  [
    "PolarisDirectAvatar.react",
    "PolarisDirectSearchUserContainerCandidate.react",
    "PolarisDirectStringHelpers",
    "PolarisReactRedux",
    "polarisDirectSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.candidateId,
        e = a["data-testid"];
      e = a.isSelected;
      var f = a.onToggleCandidate,
        g = a.thread;
      a = a.usernames;
      var i = g.thread_title;
      g = g.users;
      if (g.length === 0) return null;
      g = h.jsx(c("PolarisDirectAvatar.react"), {
        isLink: !0,
        size: "medium",
        users: g,
      });
      return h.jsx(
        c("PolarisDirectSearchUserContainerCandidate.react"),
        {
          candidateId: b,
          "data-testid": void 0,
          icon: g,
          isSelected: e,
          onToggleCandidate: f,
          subtitle: d("PolarisDirectStringHelpers").getGroupSubtitle(a),
          title: i,
        },
        b
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      b = b.thread.users;
      return {
        usernames: d("polarisDirectSelectors").getDirectUsernameById(a, b),
      };
    }
    e = d("PolarisReactRedux").connect(b)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisDirectSearchUserContainerToken.react",
  [
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSXPanoFilledIcon",
    "PolarisDirectStrings",
    "PolarisIGCoreSVGIconButton",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClick,
        e = a.onRemoveClick,
        f = a.selectedToken,
        g = a.userId;
      a = a.username;
      f = f === g;
      var i = f ? "primaryButton" : "secondaryAction",
        j = f ? "web-always-white" : "ig-primary-button",
        k = f ? "white_link" : "primary_link";
      return h.jsxs(c("IGDSBox.react"), {
        color: i,
        direction: "row",
        height: 26,
        justifyContent: "center",
        margin: 1,
        paddingX: 3,
        position: "relative",
        shape: "extraRounded",
        children: [
          h.jsx(c("IGDSButton.react"), { label: a, onClick: b, variant: k }),
          (f || d("PolarisUA").isDesktop()) &&
            h.jsx(c("IGDSBox.react"), {
              justifyContent: "center",
              marginStart: 2,
              position: "relative",
              children: h.jsx(c("PolarisIGCoreSVGIconButton"), {
                onClick: function () {
                  return e(g);
                },
                padding: 0,
                children: h.jsx(c("IGDSXPanoFilledIcon"), {
                  alt: d("PolarisDirectStrings").DELETE_ITEM_TEXT,
                  color: j,
                  size: 12,
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
  "PolarisDirectSearchUserContainerTokenField.react",
  [
    "cx",
    "IGDSBox.react",
    "Keys",
    "PolarisDOMListener.react",
    "PolarisDirectSearchUserContainerToken.react",
    "PolarisDirectStrings",
    "PolarisIGCoreText",
    "PolarisIGCoreTextInput",
    "PolarisUA",
    "nullthrows",
    "polarisUnexpected",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useRef,
      l = b.useState;
    function m(a) {
      switch (a.type) {
        case "thread":
          return a.candidate.thread_title;
        case "user":
          return a.candidate.username;
        default:
          c("polarisUnexpected")("Expected candidate of type thread or user");
          return "";
      }
    }
    function a(a) {
      var b = a.onRemoveRecipient,
        e = a.onTextInputChange,
        f = a.query,
        g = a.recipients;
      a = l(!0);
      var h = a[0],
        n = a[1];
      a = l(null);
      var o = a[0],
        p = a[1],
        q = k(null),
        r = k(null);
      j(
        function () {
          r.current && r.current.focus(),
            h && q.current != null && q.current.scrollIntoView(),
            n(!0);
        },
        [g, h]
      );
      var s = function (a) {
          p(null), n(!1), b(a);
        },
        t = Array.from(g.keys());
      return i.jsxs("div", {
        className: "_aa2s",
        children: [
          i.jsx(c("IGDSBox.react"), {
            justifyContent: "start",
            paddingX: 3,
            paddingY: 1,
            position: "relative",
            children: i.jsx(c("PolarisIGCoreText").Section, {
              display: "preserve",
              zeroMargin: !0,
              children: d("PolarisDirectStrings").TO_LABEL_STRING,
            }),
          }),
          i.jsxs("div", {
            className:
              (d("PolarisUA").isDesktop() ? "" : "_aa2t") +
              (d("PolarisUA").isDesktop() ? " _aa2u" : ""),
            children: [
              i.jsx(c("PolarisDOMListener.react"), {
                event: "keydown",
                handler: function () {
                  o != null && s(o);
                },
                target: document.body,
              }),
              t.map(function (a) {
                return i.jsx(
                  c("PolarisDirectSearchUserContainerToken.react"),
                  {
                    onClick: function () {
                      o === a ? s(a) : p(a);
                    },
                    onRemoveClick: s,
                    selectedToken: o,
                    userId: a,
                    username: m(c("nullthrows")(g.get(a))),
                  },
                  a
                );
              }),
              i.jsx(c("PolarisIGCoreTextInput"), {
                autoComplete: "off",
                backgroundColor: "transparent",
                name: "queryBox",
                onChange: e,
                onFocus: function () {
                  return p(null);
                },
                onKeyDown: function (a) {
                  a.keyCode === c("Keys").BACKSPACE &&
                    f.length === 0 &&
                    (p(t[t.length - 1]), r.current && r.current.blur());
                },
                placeholder: d("PolarisDirectStrings")
                  .SEARCH_USER_BOX_PLACEHOLDER,
                ref: r,
                spellCheck: !1,
                value: f,
              }),
              i.jsx("div", { ref: q }),
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
  "PolarisTargetedPortal.react",
  ["immutable-4.0.0-rc.9", "react", "react-dom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = new (d("immutable-4.0.0-rc.9").Map)();
    c = { map: i, addRef: function () {}, removeRef: function () {} };
    e = h.createContext(c);
    var j = e.Consumer,
      k = e.Provider;
    c = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.state = { map: i }),
          (c.$1 = function (a, b) {
            c.setState(function (c) {
              return {
                map: c.map.update(
                  a,
                  new (d("immutable-4.0.0-rc.9").Set)(),
                  function (a) {
                    return a.add(b);
                  }
                ),
              };
            });
          }),
          (c.$2 = function (a, b) {
            c.setState(function (c) {
              return {
                map: c.map.update(
                  a,
                  new (d("immutable-4.0.0-rc.9").Set)(),
                  function (a) {
                    return a.remove(b);
                  }
                ),
              };
            });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.render = function () {
        var a = { map: this.state.map, addRef: this.$1, removeRef: this.$2 };
        return h.jsx(k, { value: a, children: this.props.children });
      };
      return b;
    })(h.Component);
    var l = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        var a, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((a = c = b.call.apply(b, [this].concat(e)) || this),
          (c.$1 = h.createRef()),
          a) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = a.prototype;
      c.componentDidMount = function () {
        this.props.__addRef(this.props.targetId, this.$1);
      };
      c.componentWillUnmount = function () {
        this.props.__removeRef(this.props.targetId, this.$1);
      };
      c.render = function () {
        var a = this.props;
        a.__addRef;
        a.__removeRef;
        var b = a.element;
        a.targetId;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "__addRef",
          "__removeRef",
          "element",
          "targetId",
        ]);
        return h.jsx(b, babelHelpers["extends"]({ ref: this.$1 }, a));
      };
      return a;
    })(h.Component);
    function a(a) {
      return h.jsx(j, {
        children: function (b) {
          return h.createElement(
            l,
            babelHelpers["extends"]({}, a, {
              __addRef: b.addRef,
              __removeRef: b.removeRef,
              key: a.targetId,
            })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.defaultProps = { element: "div" };
    function b(a) {
      var b = a.children,
        c = a.targetId;
      return h.jsx(j, {
        children: function (a) {
          a = a.map.get(c);
          return a
            ? a
                .map(function (a) {
                  return a.current && b !== void 0
                    ? d("react-dom").createPortal(b, a.current)
                    : null;
                })
                .toArray()
            : null;
        },
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.TargetedPortalProvider = c;
    g.PortalTarget = a;
    g.PortalTo = b;
  },
  98
);
__d(
  "PolarisDirectSearchUserContainer.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSDivider.react",
    "IGDSListItemPlaceholder",
    "IGDSText.react",
    "IGDSXPanoFilledIcon",
    "IGDSXPanoOutlineIcon",
    "PolarisDirectAPI",
    "PolarisDirectActionAddUsers",
    "PolarisDirectActionInitInbox",
    "PolarisDirectConstants",
    "PolarisDirectLogger",
    "PolarisDirectPageMetadata.react",
    "PolarisDirectSearchUserContainerCandidate.react",
    "PolarisDirectSearchUserContainerGroupCandidate.react",
    "PolarisDirectSearchUserContainerTokenField.react",
    "PolarisDirectStrings",
    "PolarisGenericDesktopHeader.react",
    "PolarisGenericMobileHeader.react",
    "PolarisGenericNavBackButton.react",
    "PolarisGenericStrings",
    "PolarisIGCoreButton",
    "PolarisIGCoreModalHeader",
    "PolarisIGCoreSVGIconButton",
    "PolarisIGCoreTextInput",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisTargetedPortal.react",
    "PolarisUA",
    "PolarisUserAvatar.react",
    "Promise",
    "debounce",
    "emptyFunction",
    "nullthrows",
    "polarisDirectSelectors",
    "polarisNormalizeDirectThreads",
    "polarisNormalizeDirectUsers",
    "polarisUnexpected",
    "range",
    "react",
    "usePolarisSelector",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useEffect,
      m = e.useState,
      n = 6;
    function a(a) {
      var e = a.backAction,
        f = e === void 0 ? c("emptyFunction") : e,
        g = a.filteredCandidates,
        h = a.forwardAction,
        o = a.forwardText;
      e = a.hideFallbackSuggestions;
      var p = a.includeGroup,
        q = a.isModal,
        r = a.isPopover,
        s = a.isShareSheet,
        t = a.maxRecipients,
        u =
          t === void 0
            ? d("PolarisDirectConstants").MAX_DIRECT_THREAD_RECIPIENTS
            : t;
      t = a.pageId;
      var v = a.title,
        w = a.tooltip,
        x = a.sponsoredStoryOwner;
      a = m(new Map());
      var y = a[0],
        z = a[1];
      a = m("");
      var A = a[0],
        B = a[1];
      a = m(!1);
      var C = a[0],
        D = a[1];
      a = m(!1);
      var E = a[0],
        F = a[1];
      a = m("");
      var G = a[0],
        H = a[1];
      a = m(new Map());
      var I = a[0],
        J = a[1],
        K = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisDirectSelectors").getFallbackCandidates(a, {
            filteredCandidates: g,
            includeGroup: p,
          });
        }),
        L = c("usePolarisSelector")(function (a) {
          return a.direct.inboxLoaded;
        }),
        M = d("PolarisReactRedux").useDispatch();
      l(
        function () {
          L || (F(!0), M(d("PolarisDirectActionInitInbox").initInbox()));
        },
        [M, L]
      );
      var N = c("usePrevious")(L);
      l(
        function () {
          L === !0 && N === !1 && F(!1);
        },
        [L, N]
      );
      var O = function (a, b) {
          (g == null || !g.includes(a.id)) &&
            b.set(a.id, { type: "user", candidate: a });
        },
        P = function (a, b, c) {
          M(d("PolarisDirectActionAddUsers").addUsers(b)),
            (g == null || !g.includes(a.id)) &&
              c.set(a.id, { type: "thread", candidate: a });
        };
      a = function (a) {
        var b = a.length > 0;
        b && z(new Map());
        d("PolarisDirectLogger").DirectLogger.logDirectClientEvent(
          "direct_compose_search",
          d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES
            .direct_recipient_list,
          { search_string: a }
        );
        var e =
          p === !0
            ? d("PolarisDirectAPI").getRankedRecipientsWithGroups
            : d("PolarisDirectAPI").getRankedRecipients;
        b &&
          e(a).then(
            function (a) {
              var b = new Map();
              a.ranked_recipients.forEach(function (a) {
                if (a.user) {
                  var e = a.user,
                    f = d("polarisNormalizeDirectUsers").normalizeDirectUsers([
                      e,
                    ]);
                  f = f.entities;
                  f = f.users[e.pk];
                  O(f, b);
                } else if (a.thread) {
                  e = a.thread;
                  f = e.thread_id;
                  a = c("polarisNormalizeDirectThreads")([e]);
                  e = a.entities;
                  a = e.threads;
                  e = e.users;
                  a = a[f];
                  P(a, e, b);
                } else
                  c("polarisUnexpected")(
                    "Expected recipient of type user or thread"
                  );
              });
              F(!1);
              z(b);
            },
            function (a) {
              F(!1);
            }
          );
      };
      var Q = k(c("debounce")(a, 250), []),
        R = function () {
          if (G.trim() !== "") return y;
          if (x != null && K.has(x == null ? void 0 : x.id)) {
            var a = new Map(K);
            a["delete"](x == null ? void 0 : x.id);
            return a;
          }
          return K;
        },
        S = function (a) {
          if (I.size >= u) return;
          var b = R();
          b = b.get(a);
          a === (x == null ? void 0 : x.id) &&
            x != null &&
            (b = { candidate: x, type: "user" });
          if (!b) return;
          var c = new Map(I);
          c.set(a, b);
          J(c);
        },
        T = function (a) {
          var b = new Map(I);
          b["delete"](a);
          J(b);
        },
        U = function () {
          D(!0),
            b("Promise")
              .resolve(h(I, A))
              .then(function () {
                return D(!1);
              })
              ["catch"](function () {
                return D(!1);
              });
        };
      a = function (a) {
        a = a.target.value;
        H(a);
        F(a.length > 0);
        Q(a);
      };
      var V = function (a) {
          I.has(a) ? T(a) : (S(a), H(""));
        },
        W = function () {
          if (x == null || G.trim() !== "") return null;
          var a = x.full_name,
            b = x.id,
            d = x.profile_pic_url,
            e = x.username;
          d = j.jsx(
            c("PolarisUserAvatar.react"),
            { isLink: !1, profilePictureUrl: d, size: 44, username: e },
            b
          );
          return j.jsx(
            c("PolarisDirectSearchUserContainerCandidate.react"),
            {
              candidateId: b,
              icon: d,
              isSelected: I.has(b),
              onToggleCandidate: V,
              subtitle: a,
              title: e,
            },
            b
          );
        },
        X = function () {
          if (E)
            return c("range")(0, n).map(function (a) {
              return j.jsx(c("IGDSListItemPlaceholder"), { size: "large" }, a);
            });
          var a = R();
          if (a.size === 0 && x == null)
            return j.jsx(c("IGDSBox.react"), {
              margin: 4,
              position: "relative",
              children: j.jsx(c("IGDSText.react").Body, {
                color: "secondaryText",
                children: i._("No account found."),
              }),
            });
          var b = W(),
            d = Array.from(a.keys()).map(function (b) {
              var d = I.has(b),
                e = c("nullthrows")(a.get(b));
              switch (e.type) {
                case "thread":
                  var f = e.candidate;
                  return j.jsx(
                    c("PolarisDirectSearchUserContainerGroupCandidate.react"),
                    {
                      candidateId: b,
                      "data-testid": void 0,
                      isSelected: d,
                      onToggleCandidate: V,
                      thread: f,
                    },
                    b
                  );
                case "user":
                  f = e.candidate;
                  e = f.full_name;
                  var g = f.profile_pic_url;
                  f = f.username;
                  g = j.jsx(c("PolarisUserAvatar.react"), {
                    isLink: !1,
                    profilePictureUrl: g,
                    size: 44,
                    username: f,
                  });
                  return j.jsx(
                    c("PolarisDirectSearchUserContainerCandidate.react"),
                    {
                      candidateId: b,
                      "data-testid": void 0,
                      icon: g,
                      isSelected: d,
                      onToggleCandidate: V,
                      subtitle: e,
                      title: f,
                    },
                    b
                  );
                default:
                  c("polarisUnexpected")(
                    "Expected candidate of type thread or user"
                  );
                  return null;
              }
            });
          if (b == null) return d;
          else {
            d.unshift(b);
            return d;
          }
        },
        Y = function (a) {
          if (r === !0) return null;
          if (s === !0) {
            var b =
                q === !0
                  ? j.jsx(c("PolarisIGCoreSVGIconButton"), {
                      onClick: f,
                      padding: 0,
                      children: j.jsx(c("IGDSXPanoOutlineIcon"), {
                        alt: d("PolarisGenericStrings").CLOSE_TEXT,
                      }),
                    })
                  : j.jsx(c("PolarisGenericNavBackButton.react"), {
                      href: d("PolarisRoutes").DIRECT_INBOX,
                      onClick: f,
                    }),
              e = { rightActions: b, title: a },
              g = j.jsx(
                c("PolarisGenericMobileHeader.react"),
                babelHelpers["extends"](
                  { className: q === !0 ? "_aagy" : "" },
                  e
                )
              );
            return d("PolarisUA").isDesktop()
              ? q === !0
                ? j.jsx(c("PolarisIGCoreModalHeader"), {
                    endAdornment: j.jsx(c("IGDSBox.react"), {
                      paddingX: 4,
                      position: "relative",
                      children: b,
                    }),
                    children: a,
                  })
                : j.jsx(
                    c("PolarisGenericDesktopHeader.react"),
                    babelHelpers["extends"]({}, e)
                  )
              : q !== !0
              ? j.jsx(d("PolarisTargetedPortal.react").PortalTo, {
                  targetId: "direct-mobile-header",
                  children: g,
                })
              : g;
          }
          b =
            q === !0
              ? j.jsx(c("PolarisIGCoreSVGIconButton"), {
                  onClick: f,
                  padding: 0,
                  children: j.jsx(c("IGDSXPanoFilledIcon"), {
                    alt: d("PolarisGenericStrings").CLOSE_TEXT,
                    color: "ig-primary-text",
                    size: 18,
                  }),
                })
              : j.jsx(c("PolarisGenericNavBackButton.react"), {
                  href: d("PolarisRoutes").DIRECT_INBOX,
                  onClick: f,
                });
          e = j.jsx(c("PolarisIGCoreButton"), {
            borderless: !0,
            disabled: I.size === 0,
            large: !0,
            loading: C,
            onClick: U,
            children: j.jsx("div", {
              className: "_aagz",
              children: o != null ? o : d("PolarisDirectStrings").NEXT_STRING,
            }),
          });
          g = { leftActions: b, rightActions: e, title: a };
          var h = j.jsx(
            c("PolarisGenericMobileHeader.react"),
            babelHelpers["extends"]({ className: q === !0 ? "_aagy" : "" }, g)
          );
          return d("PolarisUA").isDesktop()
            ? q === !0
              ? j.jsx(c("PolarisIGCoreModalHeader"), {
                  endAdornment: j.jsx(c("IGDSBox.react"), {
                    paddingX: 4,
                    position: "relative",
                    children: e,
                  }),
                  startAdornment: j.jsx(c("IGDSBox.react"), {
                    paddingX: 4,
                    position: "relative",
                    children: b,
                  }),
                  truncateText: !0,
                  children: a,
                })
              : j.jsx(
                  c("PolarisGenericDesktopHeader.react"),
                  babelHelpers["extends"]({}, g)
                )
            : j.jsx(j.Fragment, {
                children:
                  q !== !0
                    ? j.jsx(d("PolarisTargetedPortal.react").PortalTo, {
                        targetId: "direct-mobile-header",
                        children: h,
                      })
                    : h,
              });
        };
      v = v != null ? v : d("PolarisDirectStrings").NEW_MESSAGE_STRING;
      var Z = I.size !== 0;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("PolarisDirectPageMetadata.react"), { id: t, title: v }),
          Y(v),
          w,
          j.jsxs(c("IGDSBox.react"), {
            flex: "grow",
            overflow: "hidden",
            position: "relative",
            children: [
              j.jsx("div", {
                className: "_aag-" + (r === !0 ? " _am36" : ""),
                children: j.jsx(
                  c("PolarisDirectSearchUserContainerTokenField.react"),
                  {
                    onRemoveRecipient: T,
                    onTextInputChange: a,
                    query: G,
                    recipients: I,
                  }
                ),
              }),
              j.jsxs(c("IGDSBox.react"), {
                flex: "shrink",
                height: r !== !0 ? 480 : void 0,
                overflow: "scrollY",
                position: "relative",
                children: [
                  G === "" &&
                    e !== !0 &&
                    j.jsx(c("IGDSBox.react"), {
                      "data-testid": void 0,
                      margin: 4,
                      position: "relative",
                      children: j.jsx(c("IGDSText.react").BodyEmphasized, {
                        zeroMargin: !0,
                        children: d("PolarisDirectStrings").SUGGESTED_HEADER,
                      }),
                    }),
                  (G !== "" || e !== !0) && X(),
                ],
              }),
              s === !0 &&
                j.jsxs(j.Fragment, {
                  children: [
                    j.jsx(c("IGDSDivider.react"), {}),
                    j.jsx("div", {
                      className:
                        "_aag_" + (Z ? " _aah0" : "") + (Z ? "" : " _aah1"),
                      children: j.jsx(c("PolarisIGCoreTextInput"), {
                        autoComplete: r === !0 ? "off" : void 0,
                        backgroundColor: "transparent",
                        "data-testid": void 0,
                        height: 42,
                        name: "shareCommentText",
                        onChange: function (a) {
                          B(a.target.value);
                        },
                        placeholder: d("PolarisDirectStrings")
                          .COMMENT_INPUT_PLACEHOLDER,
                        style: "borderless",
                        value: A,
                      }),
                    }),
                    j.jsx("div", {
                      className: "_aah2" + (Z ? "" : " _aah3"),
                      children: j.jsx(c("PolarisIGCoreButton"), {
                        "data-testid": void 0,
                        disabled: !Z,
                        fullWidth: !0,
                        loading: C,
                        onClick: U,
                        children: j.jsx("div", {
                          className: "_aagz",
                          children:
                            I.size < 2
                              ? d("PolarisDirectStrings").SEND_BUTTON_STRING
                              : d("PolarisDirectStrings")
                                  .SEND_SEPARATELY_BUTTON_STRING,
                        }),
                      }),
                    }),
                  ],
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
  "PolarisDirectShareSheet.react",
  [
    "PolarisDirectLogger",
    "PolarisDirectSearchUserContainer.react",
    "PolarisDirectStrings",
    "PostFastDirectShareSheetModal",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = "DirectShareSheet";
    function a(a) {
      var b = a.onClose,
        e = a.onDone,
        f = a.referrer,
        g = a.sponsoredStoryOwner;
      a = a.tooltip;
      var j = function () {
        b && b();
      };
      return h.jsx(c("PostFastDirectShareSheetModal"), {
        "aria-label": d("PolarisDirectStrings").SHARE_TITLE,
        fixedHeight: !1,
        onClose: j,
        size: "large",
        children: h.jsx(c("PolarisDirectSearchUserContainer.react"), {
          backAction: j,
          forwardAction: function (a, b) {
            j();
            d("PolarisDirectLogger").DirectLogger.logDirectEvent(
              "DirectShareSheet",
              "share_sheet_send",
              { referrer: f }
            );
            return b != null && b !== "" ? e(a, b) : e(a);
          },
          forwardText: d("PolarisDirectStrings").SEND_BUTTON_STRING,
          includeGroup: !0,
          isModal: !0,
          isShareSheet: !0,
          pageId: i,
          sponsoredStoryOwner: g,
          title: d("PolarisDirectStrings").SHARE_TITLE,
          tooltip: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PAGE_ID = i;
    g.PolarisDirectShareSheet = a;
  },
  98
);
__d(
  "PolarisDirectActionSendText",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g) {
      return a != null
        ? a.sendTextMessage(c, d, e, f, g)
        : b("Promise").reject(new Error("MQTT is not instantiated"));
    }
    f.sendText = a;
  },
  66
);
__d(
  "PolarisMediaDimensionHelpers",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      return g(a, b, c, d, !0);
    }
    function g(a, b, c, d, e) {
      e === void 0 && (e = !1);
      var f = a / b,
        g = { height: c, width: c / f };
      f = { height: f * d, width: d };
      if (e !== !0 && a < c && b < d)
        return { height: Math.floor(a), width: Math.floor(b) };
      a >= b
        ? ((e = f), e.height > c && (e = g))
        : ((e = g), e.width > d && (e = f));
      return { height: Math.floor(e.height), width: Math.floor(e.width) };
    }
    f.getDimensionsToStretchFit = a;
    f.getDimensionsBelowMax = g;
  },
  66
);
__d(
  "polarisWithExponentialBackoff",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 64e3,
      h = 1e3;
    function i(a) {
      return a !== 429 && a !== 500;
    }
    function j(a, c) {
      c = c === void 0 ? {} : c;
      var d = c.currentRetryInMs,
        e = d === void 0 ? h : d;
      d = c.maxRetryInMs;
      var f = d === void 0 ? g : d;
      d = c.onStatusCode;
      var k = d === void 0 ? i : d;
      return a()
        .then(function (c) {
          return k(c.statusCode)
            ? c
            : new (b("Promise"))(function (b, c) {
                window.setTimeout(function () {
                  j(a, {
                    currentRetryInMs: e * 2,
                    maxRetryInMs: f,
                    onStatusCode: k,
                  })
                    .then(b)
                    ["catch"](c);
                }, e * 2);
              });
        })
        ["catch"](function (c) {
          if (k(c.statusCode) || e > f) throw new Error(c);
          return new (b("Promise"))(function (b, c) {
            window.setTimeout(function () {
              j(a, {
                currentRetryInMs: e * 2,
                maxRetryInMs: f,
                onStatusCode: k,
              })
                .then(b)
                ["catch"](c);
            }, e * 2);
          });
        });
    }
    f.MAX_RETRY_IN_MS = g;
    f.withExponentialBackoff = j;
  },
  66
); /*FB_PKG_DELIM*/
__d(
  "PolarisCreationV2Strings",
  ["fbt", "IGDSText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    d = h._("Next");
    var j = h._("Create new post"),
      k = h._("Crop"),
      l = h._("Edit"),
      m = h._("Create new post"),
      n = h._("New reel"),
      o = h._("Sharing"),
      p = h._("Post shared"),
      q = h._("Reel shared"),
      r = h._("Drag photos and videos here"),
      s = h._("Add photos and videos to create a new post."),
      t = h._("Icon to represent media such as images or videos"),
      u = h._(
        "Supported file types: image/jpeg, image/png, video/mp4 and video/quicktime."
      ),
      v = h._("Select from computer"),
      w = h._("Select from device"),
      x = h._("Select other files"),
      y = h._("Share"),
      z = h._("Write a caption..."),
      A = h._("Filters"),
      B = h._("Adjustments"),
      C = h._("Cover photo"),
      D = h._("Select from computer"),
      E = h._("Select from device"),
      F = h._("Trim"),
      G = h._("Sound on"),
      H = h._("Video has no audio"),
      I = h._(
        "Your reel will be shared with your followers in their feeds and can be seen on your profile. It may also appear in places like Reels, where anyone can see it."
      ),
      J = h._(
        "Your followers can see your reel in their feeds and on your profile."
      ),
      K = h._("Select crop"),
      L = h._("Select zoom"),
      M = h._("Open media gallery"),
      N = h._("Original"),
      O = h._("1:1"),
      P = h._("4:5"),
      Q = h._("9:16"),
      R = h._("16:9"),
      S = h._("Click and drag to reorder"),
      T = h._("Captions longer than 125 characters appear truncated in feed."),
      U = h._("Add location"),
      V = h._("Accessibility"),
      W = h._(
        "Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to write your own."
      ),
      aa = h._("Write alt text..."),
      ba = h._("Photo outline icon"),
      ca = h._("Crop square icon"),
      da = h._("Crop portrait icon"),
      ea = h._("Crop landscape icon"),
      fa = h._("Discard"),
      ga = h._("Discard photo?"),
      ha = h._("This will remove the photo from your post."),
      ia = h._("Discard video?"),
      ja = h._("This will remove the video from your post."),
      ka = h._("Discard post?"),
      la = h._("If you leave, your edits won't be saved."),
      ma = h._("Delete photo?"),
      na = h._(
        "If you delete this photo, you can restore it within 30 days by going to the menu in your profile > Your activity > Recently deleted in the Instagram app. After 30 days, it will be permanently deleted."
      ),
      oa = h._("Delete video?"),
      pa = h._(
        "If you delete this video, you can restore it within 30 days by going to the menu in your profile > Your activity > Recently deleted in the Instagram app. After 30 days, it will be permanently deleted."
      ),
      qa = h._("Tag people"),
      ra = h._("Add tag"),
      sa = h._("Tagged people"),
      ta = h._("Remove tag"),
      ua = h._("Click photo to tag people"),
      va = h._("Your post has been shared."),
      wa = h._("Your reel has been shared."),
      xa = h._("Unable to upload. This file type is not supported."),
      ya = h._(
        "Unable to upload. One or more file types you selected are not supported."
      ),
      za = h._(
        "You cannot upload more than 10 files. Delete one or more files to upload another one."
      );
    function a(a) {
      return a === 1
        ? h._(
            "The last file was not uploaded. You can only choose 10 or fewer files."
          )
        : h._(
            "{number of files} files were not uploaded. You can only choose 10 or fewer files.",
            [h._param("number of files", a)]
          );
    }
    var Aa = h._("Unable to load upcoming events."),
      Ba = h._("Advanced settings"),
      Ca = h._("Turn off commenting"),
      Da = h._(
        "You can change this later by going to the \u00b7\u00b7\u00b7 menu at the top of your post."
      ),
      Ea = h._("Hide like and view counts on this post"),
      Fa = h._(
        "Only you will see the total number of likes and views on this post. You can change this later by going to the \u00b7\u00b7\u00b7 menu at the top of the post. To hide like counts on other people's posts, go to your account settings."
      ),
      Ga = h._("Learn more"),
      Ha = h._("Turn off audio reuse"),
      Ia = h._(
        "Other people will not be able to use your original audio in their own reels. They may be able to remix your reel with the original audio included."
      ),
      Ja = h._("Preview post"),
      Ka = h._("Post Preview"),
      La = h._("Add event"),
      Ma = h._("Select event"),
      Na = h._("Something went wrong"),
      Oa = h._("Videos must be 3 seconds or more"),
      Pa = h._("Videos must be one minute or less"),
      Qa = h._("Videos must be one hour or less"),
      Ra = h._("One or more videos were too long to be uploaded."),
      Sa = h._("File must be 1GB or less"),
      Ta = h._("Files must be 1KB or more"),
      Ua = h._("This file is not supported"),
      Va = h._("This video file could not be read by your browser"),
      Wa = h._("Video is too long"),
      Xa = h._("File is too large"),
      Ya = h._("File too small"),
      Za = h._("Video file unreadable"),
      $a = h._("File couldn't be uploaded"),
      ab = h._("Video couldn't be uploaded");
    function b(a) {
      return h._("{filename} could not be uploaded.", [
        h._param(
          "filename",
          i.jsx(c("IGDSText.react").BodyEmphasized, {
            color: "secondaryText",
            children: a,
          })
        ),
      ]);
    }
    function e(a) {
      return h._(
        "{filename} is too short. To continue, choose a longer video.",
        [
          h._param(
            "filename",
            i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a,
            })
          ),
        ]
      );
    }
    function bb(a) {
      return h._(
        "{filename} is too long. To continue, choose a shorter video.",
        [
          h._param(
            "filename",
            i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a,
            })
          ),
        ]
      );
    }
    function f(a) {
      return bb(a);
    }
    function cb(a) {
      return h._(
        "If any videos are longer than one minute, you can only post one video at a time."
      );
    }
    function db(a) {
      return h._(
        "{filename} is too large. To continue, choose a file that's 1GB or less.",
        [
          h._param(
            "filename",
            i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a,
            })
          ),
        ]
      );
    }
    function eb(a) {
      return h._(
        "{filename} is too small. To continue, choose a file that's 1KB or more",
        [
          h._param(
            "filename",
            i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a,
            })
          ),
        ]
      );
    }
    function fb(a) {
      return h._(
        "{filename} could not be uploaded. To continue, choose another file.",
        [
          h._param(
            "filename",
            i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: a,
            })
          ),
        ]
      );
    }
    var gb = h._("Post couldn't be shared"),
      hb = h._("Your post could not be shared. Please try again."),
      ib = h._("Something went wrong"),
      jb = h._("Something went wrong. Please try again."),
      kb = h._("Try again"),
      lb = h._(
        "This video is too long. To continue, choose a video that is one minute or less."
      ),
      mb = h._(
        "This video is too short. To continue, choose a video that is 3 seconds or more."
      ),
      nb = h._(
        "You cannot add photos or videos because this video is longer than one minute."
      ),
      ob = h._(
        "This file is too large. To continue, choose a file that is 100MB or less."
      ),
      pb = h._(
        "This file is too small. To continue, choose a file that is 1KB or more."
      ),
      qb = h._("The video file you selected could not be uploaded."),
      X = h._("Brightness"),
      Y = h._("Contrast"),
      Z = h._("Fade"),
      $ = h._("Saturation"),
      rb = h._("Temperature"),
      sb = h._("Vignette");
    X = {
      brightness: X,
      contrast: Y,
      fade: Z,
      saturation: $,
      temperature: rb,
      vignette: sb,
    };
    Y = h._("Reset");
    Z = h._("Edit info");
    $ = h._("Done");
    g.NEXT_TEXT = d;
    g.NEW_POST_TEXT = j;
    g.CROP_TEXT = k;
    g.EDIT_TEXT = l;
    g.COMPOSE_TEXT = m;
    g.COMPOSE_TEXT_REELS = n;
    g.UPLOADING_TEXT = o;
    g.UPLOAD_SUCCESS_TEXT = p;
    g.UPLOAD_REEL_SUCCESS_TEXT = q;
    g.DRAG_AND_DROP_TITLE = r;
    g.ADD_MEDIA_TITLE = s;
    g.MEDIA_OUTLINE_ALT = t;
    g.SUPPORTED_FILES_TEXT = u;
    g.SELECT_TEXT = v;
    g.SELECT_FROM_DEVICE_TEXT = w;
    g.SELECT_OTHER_TEXT = x;
    g.SHARE_CTA_TEXT = y;
    g.CAPTION_PLACEHOLDER_TEXT = z;
    g.FILTER_TAB = A;
    g.EDIT_TAB = B;
    g.COVER_PHOTO_LABEL = C;
    g.SELECT_COVER_PHOTO_TEXT = D;
    g.SELECT_COVER_PHOTO_FROM_DEVICE_TEXT = E;
    g.TRIM_VIDEO_LABEL = F;
    g.SOUND_ON_LABEL = G;
    g.NO_AUDIO_LABEL = H;
    g.REELS_DISCLAIMER_PUBLIC = I;
    g.REELS_DISCLAIMER_PRIVATE = J;
    g.SELECT_CROP_ALT_TEXT = K;
    g.ZOOM_ALT_TEXT = L;
    g.GALLERY_ALT_TEXT = M;
    g.SELECT_CROP_ORIGINAL = N;
    g.SELECT_CROP_SQUARE = O;
    g.SELECT_CROP_PORTRAIT = P;
    g.SELECT_CROP_PORTRAIT_DOVETAIL = Q;
    g.SELECT_CROP_LANDSCAPE = R;
    g.REORDER_TOOLTIP = S;
    g.CAPTION_TRUNCATION_TOOLTIP = T;
    g.LOCATION_SEARCH_PLACEHOLDER = U;
    g.ALT_TEXT_TITLE = V;
    g.ALT_TEXT_SUBTITLE = W;
    g.ALT_TEXT_PLACEHOLDER = aa;
    g.PHOTO_OUTLINE_ALT = ba;
    g.CROP_SQUARE_ALT = ca;
    g.CROP_PORTRAIT_ALT = da;
    g.CROP_LANDSCAPE_ALT = ea;
    g.DISCARD_CTA_TEXT = fa;
    g.DISCARD_PHOTO_TITLE = ga;
    g.DISCARD_PHOTO_BODY = ha;
    g.DISCARD_VIDEO_TITLE = ia;
    g.DISCARD_VIDEO_BODY = ja;
    g.DISCARD_POST_TITLE = ka;
    g.DISCARD_POST_BODY = la;
    g.DELETE_PHOTO_TITLE = ma;
    g.DELETE_PHOTO_BODY = na;
    g.DELETE_VIDEO_TITLE = oa;
    g.DELETE_VIDEO_BODY = pa;
    g.TAG_A_PERSON = qa;
    g.TAG_ANOTHER_PERSON = ra;
    g.TAGGED_PEOPLE = sa;
    g.REMOVE_TAG_ALT = ta;
    g.CLICK_PHOTO_TAG = ua;
    g.POST_UPLOADED_TEXT = va;
    g.REEL_UPLOADED_TEXT = wa;
    g.SINGLE_FILE_UPLOAD_ERROR = xa;
    g.MULTIPLE_FILE_UPLOAD_ERROR = ya;
    g.MAX_MEDIA_ADDED_ERROR = za;
    g.maxMediaAddedError = a;
    g.ADD_EVENT_LIST_LOAD_ERROR = Aa;
    g.ADVANCED_SETTINGS = Ba;
    g.TURN_OFF_COMMENTING = Ca;
    g.TURN_OFF_COMMENTING_SUBTITLE = Da;
    g.HIDE_LIKE_VIEW_COUNTS = Ea;
    g.HIDE_LIKE_VIEW_COUNTS_SUBTITLE = Fa;
    g.HIDE_LIKE_VIEW_COUNTS_LEARN_MORE = Ga;
    g.TURN_OFF_AUDIO_REUSE = Ha;
    g.TURN_OFF_AUDIO_REUSE_SUBTITLE = Ia;
    g.PREVIEW_POST = Ja;
    g.PREVIEW_POST_TITLE = Ka;
    g.ADD_EVENT = La;
    g.SELECT_EVENT = Ma;
    g.ERROR_HEADER = Na;
    g.VIDEO_TOO_SHORT_HEADER = Oa;
    g.VIDEO_TOO_LONG_HEADER = Pa;
    g.VIDEO_TOO_LONG_DOVETAIL_HEADER = Qa;
    g.VIDEO_TOO_LONG_GALLERY_DOVETAIL_HEADER = Ra;
    g.FILE_TOO_LARGE_HEADER = Sa;
    g.FILE_TOO_SMALL_HEADER = Ta;
    g.FILE_NOT_SUPPORTED_HEADER = Ua;
    g.VIDEO_FILE_READ_FAILED_HEADER = Va;
    g.VIDEO_TOO_LONG_TITLE = Wa;
    g.FILE_TOO_LARGE_TITLE = Xa;
    g.FILE_TOO_SMALL_TITLE = Ya;
    g.VIDEO_FILE_READ_FAILED_TITLE = Za;
    g.FILE_COULDNT_BE_UPLOADED_TITLE = $a;
    g.VIDEO_COULDNT_BE_UPLOADED_TITLE = ab;
    g.fileCouldntBeUploaded = b;
    g.videoIsTooShortBody = e;
    g.videoIsTooLongDovetailBody = f;
    g.videoIsTooLongForGalleryBody = cb;
    g.fileIsTooLargeBody = db;
    g.fileIsTooSmallBody = eb;
    g.videoFileReadFailedBody = fb;
    g.UPLOAD_FAILED_TITLE = gb;
    g.UPLOAD_FAILED_HEADER = hb;
    g.SOMETHING_WENT_WRONG_TITLE = ib;
    g.SOMETHING_WENT_WRONG_HEADER = jb;
    g.TRY_AGAIN_CTA_TEXT = kb;
    g.VIDEO_TOO_LONG_MESSAGE = lb;
    g.VIDEO_TOO_SHORT_MESSAGE = mb;
    g.CANNOT_ADD_MEDIA_BECAUSE_VIDEO_TOO_LONG_FOR_GALLERY_MESSAGE = nb;
    g.FILE_TOO_LARGE_MESSAGE = ob;
    g.FILE_TOO_SMALL_MESSAGE = pb;
    g.VIDEO_FILE_READ_FAILED_MESSAGE = qb;
    g.ADJUSTMENT_FILTER_MAPPING = X;
    g.RESET_ADJUSTMENT = Y;
    g.EDIT_INFO = Z;
    g.DONE_EDIT_CTA_TEXT = $;
  },
  98
);
__d(
  "usePolarisCreationDispatch",
  ["nullthrows", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
      i = b.createContext(null);
    function a() {
      return c("nullthrows")(h(i));
    }
    g.CreationDispatchContext = i;
    g.useCreationDispatch = a;
  },
  98
);
__d(
  "usePolarisCreationModalSize",
  ["cssVar", "useMatchMedia"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      var a = "(max-width: 1024px)",
        b = "(max-width: 1536px)";
      a = c("useMatchMedia")(a);
      b = c("useMatchMedia")(b);
      if (a) return "small";
      return b ? "medium" : "large";
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisCreationState",
  ["nullthrows", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
      i = b.createContext(null);
    function a() {
      return c("nullthrows")(h(i));
    }
    g.CreationStateContext = i;
    g.useCreationState = a;
  },
  98
);
__d(
  "PolarisCreationV2ActionTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "CREATION_SET_CAPTION";
    b = "CREATION_SET_CROP_RATIO";
    c = "CREATION_SET_CURRENT_ID";
    d = "CREATION_SET_LOCATION";
    e = "CREATION_SET_IS_POSTED";
    var g = "CREATION_SET_VIEWED_PHOTO_TOOLTIP",
      h = "CREATION_SET_VIEWED_REORDER_TOOLTIP",
      i = "CREATION_SET_COMMENTS_DISABLED",
      j = "CREATION_SET_AUDIO_REUSE_DISABLED",
      k = "CREATION_SET_LIKE_VIEW_COUNTS_DISABLED",
      l = "CREATION_SET_GENERATE_SUBTITLES_ENABLED",
      m = "CREATION_SET_MEDIA",
      n = "CREATION_ADD_MEDIA",
      o = "CREATION_REMOVE_MEDIA",
      p = "CREATION_UPDATE_MEDIA_META",
      q = "CREATION_ADD_USERTAG_TO_MEDIA",
      r = "CREATION_REMOVE_USERTAG_FROM_MEDIA",
      s = "CREATION_UPDATE_MEDIA_COVER_PHOTO",
      t = "CREATION_UPDATE_VIDEO_TRIM",
      u = "CREATION_SET_MULTI_POST_ORDER",
      v = "CREATION_SET_ERROR_MESSAGE",
      w = "CREATION_SET_ERROR_PAGE",
      x = "CREATION_RESET_STATE",
      y = "CREATION_SESSION_STARTED",
      z = "CREATION_SET_ELIGIBLE_UPCOMING_EVENTS",
      A = "CREATION_SET_UPCOMING_EVENT",
      B = "CREATION_SET_MONETIZATION_ELIGIBILITY",
      C = "CREATION_SET_ADS_ENABLED";
    f.CREATION_SET_CAPTION = a;
    f.CREATION_SET_CROP_RATIO = b;
    f.CREATION_SET_CURRENT_ID = c;
    f.CREATION_SET_LOCATION = d;
    f.CREATION_SET_IS_POSTED = e;
    f.CREATION_SET_VIEWED_PHOTO_TOOLTIP = g;
    f.CREATION_SET_VIEWED_REORDER_TOOLTIP = h;
    f.CREATION_SET_COMMENTS_DISABLED = i;
    f.CREATION_SET_AUDIO_REUSE_DISABLED = j;
    f.CREATION_SET_LIKE_VIEW_COUNTS_DISABLED = k;
    f.CREATION_SET_GENERATE_SUBTITLES_ENABLED = l;
    f.CREATION_SET_MEDIA = m;
    f.CREATION_ADD_MEDIA = n;
    f.CREATION_REMOVE_MEDIA = o;
    f.CREATION_UPDATE_MEDIA_META = p;
    f.CREATION_ADD_USERTAG_TO_MEDIA = q;
    f.CREATION_REMOVE_USERTAG_FROM_MEDIA = r;
    f.CREATION_UPDATE_MEDIA_COVER_PHOTO = s;
    f.CREATION_UPDATE_VIDEO_TRIM = t;
    f.CREATION_SET_MULTI_POST_ORDER = u;
    f.CREATION_SET_ERROR_MESSAGE = v;
    f.CREATION_SET_ERROR_PAGE = w;
    f.CREATION_RESET_STATE = x;
    f.CREATION_SESSION_STARTED = y;
    f.CREATION_SET_ELIGIBLE_UPCOMING_EVENTS = z;
    f.CREATION_SET_UPCOMING_EVENT = A;
    f.CREATION_SET_MONETIZATION_ELIGIBILITY = B;
    f.CREATION_SET_ADS_ENABLED = C;
  },
  66
);
__d(
  "PolarisIGCoreEmojiTray",
  [
    "cx",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisEmojiConstants",
    "PolarisIGCoreButton",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      a = a.headerText;
      return i.jsx(c("IGDSBox.react"), {
        marginBottom: 2,
        marginEnd: 2,
        marginStart: 2,
        marginTop: 4,
        position: "relative",
        width: "100%",
        children: i.jsx(c("IGDSText.react").BodyEmphasized, {
          color: "secondaryText",
          children: a,
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.emoji,
        d = a.emojiIconStyles,
        e = a.onClick;
      return i.jsx(c("PolarisIGCoreButton"), {
        borderless: !0,
        onClick: function () {
          return e(b);
        },
        children: i.jsx("div", {
          className: "_a9_d",
          style: babelHelpers["extends"]({}, d),
          children: b,
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.emojiIconStyles,
        e = a.onClick;
      a = a.trayRef;
      return i.jsxs(c("IGDSBox.react"), {
        containerRef: a,
        direction: "row",
        position: "relative",
        wrap: !0,
        children: [
          i.jsx(c("IGDSBox.react"), {
            margin: 2,
            position: "relative",
            width: "100%",
            children: i.jsx(c("IGDSText.react").BodyEmphasized, {
              color: "secondaryText",
              children: d("PolarisEmojiConstants").EMOJI_TRAY_MOST_POPULAR,
            }),
          }),
          d("PolarisEmojiConstants").mostPopularEmojis.map(function (a) {
            return i.jsx(k, { emoji: a, emojiIconStyles: b, onClick: e }, a);
          }),
          Object.keys(d("PolarisEmojiConstants").Emojis).map(function (a) {
            var c = d("PolarisEmojiConstants").Emojis[a],
              f = c.emojis;
            c = c.label;
            return i.jsxs(
              i.Fragment,
              {
                children: [
                  i.jsx(j, { headerText: c }),
                  f.map(function (a) {
                    return i.jsx(
                      k,
                      { emoji: a, emojiIconStyles: b, onClick: e },
                      a
                    );
                  }),
                ],
              },
              a
            );
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
  "PolarisIGCoreEmojiButton",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSFace2PanoOutlineIcon",
    "PolarisIGCoreEmojiTray",
    "PolarisIGCorePopover",
    "PolarisIGCoreSVGIconButton",
    "Portal",
    "polarisWithForwardRef",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = 26,
      l = 309,
      m = 309,
      n = "bottom",
      o = { right: "53px", bottom: "360px" },
      p = { fontSize: "32px", height: "32px", margin: "6px", width: "32px" },
      q = 24,
      r = i._("Emoji");
    function a(a) {
      var b = a.buttonHover,
        d = a.isEmojiTrayOpen,
        e = a.onEmojiClick,
        f = a.onClose,
        g = a.setEmojiTrayOpen,
        h = a.emojiTrayRef,
        i = a.emojiButtonSize;
      i = i === void 0 ? q : i;
      var s = a.emojiColor;
      s = s === void 0 ? "ig-primary-text" : s;
      var t = a.emojiIconStyles;
      t = t === void 0 ? p : t;
      var u = a.emojiArrowLeftOffset;
      u = u === void 0 ? k : u;
      var v = a.emojiTrayHeight;
      v = v === void 0 ? l : v;
      var w = a.emojiTrayCaratPosition;
      w = w === void 0 ? n : w;
      var x = a.emojiTrayWidth;
      x = x === void 0 ? m : x;
      var y = a.emojiTrayPositionStyles;
      y = y === void 0 ? o : y;
      var z = a.forwardedRef,
        A = a.hasPortal;
      A = A === void 0 ? !1 : A;
      a = a.zeroPadding;
      var B = A ? c("Portal") : j.Fragment;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx(c("PolarisIGCoreSVGIconButton"), {
            hover: b,
            onClick: function () {
              return g(!d);
            },
            padding: a === !0 ? 0 : void 0,
            ref: z,
            children: j.jsx(c("IGDSFace2PanoOutlineIcon"), {
              alt: r,
              color: s,
              size: i,
            }),
          }),
          j.jsx(B, {
            children: j.jsx("div", {
              className: A ? "_a9_c" : "",
              style: y,
              children: j.jsx(c("PolarisIGCorePopover"), {
                arrowLeftOffset: u,
                arrowPosition: w,
                isVisible: d,
                onClose: f,
                children: j.jsx(c("IGDSBox.react"), {
                  height: v,
                  margin: 2,
                  position: "relative",
                  width: x,
                  children: j.jsx(c("PolarisIGCoreEmojiTray"), {
                    emojiIconStyles: t,
                    onClick: e,
                    trayRef: h,
                  }),
                }),
              }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = c("polarisWithForwardRef")(a);
    g.DEFAULT_ARROW_LEFT_OFFSET = k;
    g.DEFAULT_EMOJI_TRAY_HEIGHT = l;
    g.DEFAULT_EMOJI_TRAY_WIDTH = m;
    g.DEFAULT_EMOJI_ICON_STYLES = p;
    g.DEFAULT_EMOJI_BUTTON_ALT_TEXT = r;
    g.IGCoreEmojiButton = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "IGDSEyeFilledIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 48 48",
          children: h.jsxs("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              h.jsx("rect", { height: "48", width: "48" }),
              h.jsxs("g", {
                fill: "currentColor",
                children: [
                  h.jsx("path", {
                    d: "M3.267 24.652C8.32 14.772 15.156 9.94 23.905 9.94c8.761 0 15.768 4.847 21.136 14.745a1.47 1.47 0 1 0 2.583-1.401C41.774 12.496 33.83 7 23.905 7 13.97 7 6.175 12.51.651 23.314a1.47 1.47 0 0 0 2.616 1.338Z",
                    fillRule: "nonzero",
                  }),
                  h.jsx("path", {
                    d: "M24.245 16.796c.782 0 1.546.078 2.285.227l-.022.02a6.367 6.367 0 1 0 9.02 8.977c.149.739.227 1.503.227 2.286 0 6.357-5.153 11.51-11.51 11.51s-11.51-5.153-11.51-11.51 5.153-11.51 11.51-11.51Z",
                  }),
                ],
              }),
            ],
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
  "IGDSInfoPanoFilledIcon",
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
            d: "M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm-.182 5.955a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Zm1.614 11.318h-2.865a1 1 0 0 1 0-2H11V12.05h-.432a1 1 0 0 1 0-2H12a1 1 0 0 1 1 1v4.727h.433a1 1 0 1 1 0 2Z",
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
  "PolarisLiveViewerCount.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSEyeFilledIcon",
    "PolarisBigNumber.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      a = a.count;
      return j.jsx("div", {
        className: "_aaeh",
        children: j.jsxs(c("IGDSBox.react"), {
          alignItems: "center",
          direction: "row",
          position: "relative",
          children: [
            j.jsx(c("IGDSBox.react"), {
              marginEnd: 1,
              position: "relative",
              children: j.jsx(c("IGDSEyeFilledIcon"), {
                alt: i._("Viewer count icon"),
                color: "web-always-white",
                size: 14,
              }),
            }),
            j.jsx(c("PolarisBigNumber.react"), { shortenNumber: !0, value: a }),
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
  "PolarisDirectActionOpenVerifiedUserCallingNotEnabledModal",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return function (a) {
        a({ type: "DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_OPEN" });
      };
    }
    f.openVerifiedUserCallingNotEnabledModal = a;
  },
  66
);
__d(
  "PolarisDirectActionOpenVerifiedUserCallingNotFollowingModal",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b) {
        b({
          type: "DIRECT_VERIFIED_USER_CALLING_NOT_FOLLOWING_MODAL_OPEN",
          username: a,
        });
      };
    }
    f.openVerifiedUserCallingNotFollowingModal = a;
  },
  66
);
__d(
  "PolarisDesktopNavLoggedOutContainer.react",
  [
    "fbt",
    "IGDSBox.react",
    "IGRouter",
    "PolarisConfig",
    "PolarisFastLink.react",
    "PolarisIGCoreButton",
    "PolarisIGCoreText",
    "PolarisLinkBuilder",
    "PolarisLoggedOutCallToAction.react",
    "PolarisLoggedOutUtils",
    "PolarisLoginLogger",
    "PolarisNavigationActions",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUpsellActions",
    "cr:1920",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect;
    function l(a, c) {
      return {
        text: h._("Log In"),
        link: b("cr:1920")
          ? a
          : d("PolarisLinkBuilder").buildLoginLink(a, {
              source: "desktop_nav",
            }),
        onClick: c,
      };
    }
    function m(a) {
      var c = b("cr:1920") ? h._("Create new account") : h._("Sign Up");
      return {
        text: c,
        link: d("PolarisRoutes").EMAIL_SIGNUP_PATH,
        onClick: a,
      };
    }
    function n(a) {
      switch (a) {
        case "resetPassword":
          d("PolarisLoginLogger").logLoginEvent({
            event_name: "account_recovery_page_login_clicked",
          });
          break;
        default:
          d("PolarisLoginLogger").logLoginEvent({
            event_name: "desktop_nav_login_clicked",
          });
      }
    }
    function o(a, b, d) {
      d = l(d, a);
      a = m(b);
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        direction: "row",
        position: "relative",
        children: [
          i.jsx(c("IGDSBox.react"), {
            marginStart: 4,
            position: "relative",
            children: i.jsx(c("PolarisFastLink.react"), {
              href: d.link,
              onClick: d.onClick,
              children: i.jsx(c("PolarisIGCoreButton"), {
                children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                  color: "ig-secondary-button",
                  zeroMargin: !0,
                  children: d.text,
                }),
              }),
            }),
          }),
          i.jsx(c("IGDSBox.react"), {
            marginStart: 4,
            position: "relative",
            children: i.jsx(c("PolarisFastLink.react"), {
              href: a.link,
              onClick: a.onClick,
              children: i.jsx(c("PolarisIGCoreButton"), {
                borderless: !0,
                color: "ig-secondary-button",
                children: i.jsx(c("PolarisIGCoreText").BodyEmphasized, {
                  color: "ig-primary-button",
                  zeroMargin: !0,
                  children: a.text,
                }),
              }),
            }),
          }),
        ],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.analyticsContext;
      a = a.hideSignUpAndLogInText;
      var f = d("PolarisReactRedux").useDispatch();
      k(
        function () {
          d("PolarisConfig").isLoggedIn() ||
            f(d("PolarisUpsellActions").displayLoggedOutHalfSheet());
        },
        [f]
      );
      var g = d("IGRouter").useIGHistory(),
        h = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        }),
        l = d("PolarisReactRedux").useSelector(function (a) {
          return a == null
            ? void 0
            : (a = a.navigation) == null
            ? void 0
            : a.isLoginModalOpen;
        }),
        m = d("PolarisReactRedux").useSelector(function (a) {
          return !!(a == null
            ? void 0
            : (a = a.upsell) == null
            ? void 0
            : a.shouldShowLoggedOutHalfSheet);
        }),
        p = function () {
          n(e);
        },
        q = function () {
          switch (e) {
            case "resetPassword":
              d("PolarisLoginLogger").logLoginEvent({
                event_name: "account_recovery_page_signup_clicked",
              });
              break;
            default:
              d("PolarisLoginLogger").logLoginEvent({
                event_name: "desktop_nav_signup_clicked",
              });
          }
        },
        r = j(
          function () {
            n(e),
              f(
                d("PolarisNavigationActions").openLoginModal(
                  "feature_wall",
                  g.location.pathname,
                  "desktop_nav"
                )
              );
          },
          [e, f, g.location.pathname]
        );
      m =
        m === !0 &&
        d("PolarisLoggedOutUtils").hasNewLoggedOutCTA(h, e) &&
        l !== !0;
      return i.jsxs(i.Fragment, {
        children: [
          m &&
            i.jsx(c("PolarisLoggedOutCallToAction.react"), {
              analyticsContext: e,
            }),
          a !== !0 && o(b("cr:1920") ? r : p, q, g.location.pathname),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisLongPress.react",
  ["cx", "Keys", "PolarisDOMListener.react", "PolarisUA", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef,
      m = 750;
    function a(a) {
      var b = a.children,
        e = a.onLongPress,
        f = l(),
        g = function () {
          f.current = window.setTimeout(e, m);
        },
        h = j(function () {
          window.clearTimeout(f.current);
        }, []);
      a = function (a) {
        (a.keyCode === c("Keys").SPACE || a.keyCode === c("Keys").RETURN) &&
          g();
      };
      var n = function (a) {
          (a.keyCode === c("Keys").SPACE || a.keyCode === c("Keys").RETURN) &&
            h();
        },
        o = function (a) {
          a.preventDefault();
          a.stopPropagation();
          return !1;
        };
      k(
        function () {
          return function () {
            h();
          };
        },
        [h]
      );
      return i.jsxs("div", {
        className: "_ac6x" + (d("PolarisUA").isTouchDevice() ? " _ac6y" : ""),
        onContextMenu: o,
        onKeyDown: a,
        onKeyUp: n,
        onScroll: h,
        onTouchEnd: h,
        onTouchStart: g,
        role: "button",
        tabIndex: "0",
        children: [
          i.jsx(c("PolarisDOMListener.react"), {
            event: "onscroll",
            handler: h,
            target: window,
          }),
          i.jsx(c("PolarisDOMListener.react"), {
            event: "touchmove",
            handler: h,
            target: window,
          }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreCheckbox",
  [
    "cx",
    "IGDSCircleCheckPanoFilledIcon",
    "PolarisGenericStrings",
    "PolarisIGCoreSVGIconButton",
    "guid",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.checked,
        e = a.children,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.name,
        h = a.onChange,
        j = a.placement;
      j = j === void 0 ? "left" : j;
      var k = a.readOnly,
        l = a.style;
      l = l === void 0 ? "default" : l;
      var m = a.value;
      a = a.weight;
      a = a === void 0 ? "semibold" : a;
      var n = c("useStable")(function () {
          return c("guid")();
        }),
        o = function (a) {
          if (h) {
            a = a.target.checked;
            h(a);
          }
        };
      if (l === "round")
        return b === !0
          ? i.jsx(c("PolarisIGCoreSVGIconButton"), {
              onClick: o,
              children: i.jsx(c("IGDSCircleCheckPanoFilledIcon"), {
                alt: d("PolarisGenericStrings").CHECKMARK_FILLED_ICON_ALT,
                color: "ig-primary-button",
                size: 24,
              }),
            })
          : i.jsx("input", {
              checked: b,
              className: "_aaha",
              onChange: o,
              type: "checkbox",
            });
      l =
        "_aahb" +
        (a === "semibold" ? " _aahc" : "") +
        (j === "right" ? " _aahd" : "");
      return i.jsxs("label", {
        className: l,
        htmlFor: n,
        children: [
          i.jsx("input", {
            checked: b,
            className: "_aahe",
            disabled: f,
            id: n,
            name: g,
            onChange: o,
            readOnly: k,
            type: "checkbox",
            value: m,
          }),
          j === "right" && i.jsx("span", { className: "_aahf", children: e }),
          i.jsx("div", { className: "_aahg" }),
          j === "left" && e,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreUserPanoFilledIcon",
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
            d: "M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "useIGDSToaster",
  ["IGDSPrivateToasterContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(d("IGDSPrivateToasterContext").IGDSPrivateToasterContext);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useWWWIGStoriesLogging",
  [
    "PolarisLogPageView",
    "PolarisReactRedux",
    "polarisStorySelectors",
    "react",
    "useCometRouterState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a() {
      var a = d("PolarisReactRedux").useSelector(
          d("polarisStorySelectors").getCurrentPostId
        ),
        b = c("useCometRouterState")(),
        e = i(null);
      h(
        function () {
          b != null &&
            a != null &&
            (e == null ? void 0 : e.current) != null &&
            e.current !== a &&
            c("PolarisLogPageView")(b),
            (e.current = a);
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePolarisStoriesProviderDisableNewPlayback",
  ["PolarisConfig", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, c, e) {
      var f = a.hasFocus,
        g = a.isBugNubActive,
        i = a.isCaptionModalActive,
        j = a.isCloseFriendsDialogActive,
        k = a.isExclusiveStoryDialogActive,
        l = a.isHidden,
        m = a.isHighlightsTrayActive,
        n = a.isKeyboardActive,
        o = a.isModalActive,
        p = a.isPaused,
        q = a.isStoryShareSheetActive,
        r = a.isStoryViewerListActive,
        s = a.isTransitioning,
        t = a.isUnfollowModalActive;
      h(
        function () {
          var a =
            g ||
            k ||
            j ||
            n ||
            o ||
            p ||
            q ||
            r ||
            m ||
            s ||
            t ||
            i ||
            l ||
            (d("PolarisConfig").isIOS() && !f) ||
            b != null ||
            c;
          e({ isPlaybackDisabled: a });
        },
        [f, g, j, k, l, n, o, p, q, r, m, s, t, i, c, e, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStoriesProvider.react",
  [
    "PolarisReactRedux",
    "PolarisRelationshipTypes",
    "PolarisStoriesContext",
    "nullthrows",
    "polarisRelationshipSelectors",
    "polarisStorySelectors",
    "react",
    "usePolarisStoriesProviderDisableNewPlayback",
    "useWWWIGStoriesLogging",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useState;
    function a() {
      return j(d("PolarisStoriesContext").StoriesContext);
    }
    function b(a) {
      var b = a.children,
        e = a.initialState,
        f = c("nullthrows")(
          d("PolarisReactRedux").useSelector(
            d("polarisStorySelectors").getCurrentPostAuthor
          )
        );
      a = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisRelationshipSelectors").getRelationship(
          a.relationships,
          f.id
        );
      });
      var g =
          a.followedByViewer.state ===
          d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING,
        j = d("PolarisReactRedux").useSelector(function (a) {
          return a.displayProperties.viewportHeight;
        });
      a = l(
        function () {
          return babelHelpers["extends"](
            {},
            d("PolarisStoriesContext").defaultContext,
            e,
            { isInitiallyFollowedByViewer: g, viewerHeight: j }
          );
        },
        [g, e, j]
      );
      a = m(a);
      var n = a[0],
        o = a[1];
      a = d("PolarisReactRedux").useSelector(
        d("polarisStorySelectors").isFromPreviousFullscreenSession
      );
      var p = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.isAppAttributionOpen;
        }),
        q = d("PolarisReactRedux").useSelector(function (a) {
          return a.stories.tappedObjectId;
        }),
        r = i(function (a) {
          return o(function (b) {
            return babelHelpers["extends"]({}, b, a);
          });
        }, []),
        s = l(
          function () {
            return babelHelpers["extends"]({}, n, { updateStoriesContext: r });
          },
          [n, r]
        );
      c("useWWWIGStoriesLogging")();
      var t = a || p;
      c("usePolarisStoriesProviderDisableNewPlayback")(n, q, t, r);
      k(
        function () {
          r({ isResumeOverlayActive: t });
        },
        [t, r]
      );
      k(
        function () {
          r({
            hasFocus: document.hasFocus(),
            isHidden: document.hidden != null ? document.hidden : !1,
          });
        },
        [r]
      );
      return h.jsx(d("PolarisStoriesContext").StoriesContext.Provider, {
        value: s,
        children: b,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    e = h.memo(b);
    g.useStoriesContext = a;
    g.StoriesContextProvider = e;
  },
  98
);
__d(
  "PolarisHideNativeAppBanner",
  ["PolarisBatchDOM", "PolarisConfig", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a === void 0 && (a = c("emptyFunction")),
        d("PolarisConfig").isIOS() &&
          d("PolarisBatchDOM").mutate(function () {
            window.setTimeout(function () {
              window &&
                document.body &&
                (window.scrollTo(0, document.body.scrollHeight), a());
            }, 0);
          });
    }
    g.hideNativeAppBanner_HACK = a;
  },
  98
);
__d(
  "PolarisPostShareUtils",
  ["PolarisLinkBuilder", "nullthrows", "polarisGetPostFromGraphMediaInterface"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return (
        (b == null ? void 0 : b.isPrivate) !== !0 && a.viewerCanReshare === !0
      );
    }
    function b(a) {
      return a.igMediaSharingDisabled !== !0;
    }
    function h(a) {
      var b = c("nullthrows")(a.code);
      return d("polarisGetPostFromGraphMediaInterface").isClipsPost(a)
        ? d("PolarisLinkBuilder").buildClipsMediaLink(b)
        : d("PolarisLinkBuilder").buildMediaLink(b);
    }
    function e(a) {
      var b;
      b = ((b = a.shareIds) == null ? void 0 : b.copy) || "";
      a = window.location.origin + h(a);
      return b.length > 0
        ? a + "?utm_source=ig_web_copy_link&igshid=" + b
        : a + "?utm_source=ig_web_copy_link";
    }
    g.getIsShareable = a;
    g.getIsMediaQuarantinedForShare = b;
    g.getShareURL = h;
    g.getCopyUrl = e;
  },
  98
);
__d(
  "usePolarisShowToast",
  ["PolarisReactRedux", "PolarisToastActions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("PolarisReactRedux").useDispatch();
      return function (b) {
        a(d("PolarisToastActions").showToast(b));
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIGCoreSpinner",
  [
    "cx",
    "fbt",
    "IGDSThemeConfig",
    "PolarisIGCoreBox",
    "range",
    "react",
    "vc-tracker",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        small: { count: 8, length: 28, offset: 22, size: 18, thickness: 10 },
        medium: { count: 12, length: 25, offset: 25, size: 32, thickness: 6 },
        large: { count: 12, length: 25, offset: 25, size: 64, thickness: 6 },
      },
      l = { __className: "_abdu" },
      m = i._("Loading...");
    function a(a) {
      var b = a.animated,
        d = b === void 0 ? !0 : b;
      b = a.color;
      b = b === void 0 ? "dark" : b;
      var e = a["data-testid"];
      e = a.position;
      e = e === void 0 ? "static" : e;
      var f = a.progress;
      f = f === void 0 ? 1 : f;
      a = a.size;
      a = a === void 0 ? "medium" : a;
      a = k[a];
      var g = a.count,
        h = a.length,
        i = a.offset,
        n = a.size,
        o = a.thickness;
      a = Math.round(g * f);
      var p =
        b === "light"
          ? c("IGDSThemeConfig").light["grey-0"]
          : c("IGDSThemeConfig").light["grey-7"];
      return j.jsx(
        c("PolarisIGCoreBox"),
        babelHelpers["extends"](
          {},
          c("vc-tracker").VisualCompletionAttributes.LOADING_STATE,
          {
            dangerouslySetClassName: e === "absolute" ? l : void 0,
            "data-testid": void 0,
            height: n,
            justifyContent: "center",
            width: n,
            children: j.jsx("svg", {
              "aria-label": m,
              className:
                (d ? "" : "_abdv") +
                (g === 8 ? " _abdw" : "") +
                (g === 12 ? " _abdx" : ""),
              role: "img",
              viewBox: "0 0 100 100",
              children: c("range")(0, a).map(function (a) {
                return j.jsx(
                  "rect",
                  {
                    fill: "rgb(" + p + ")",
                    height: o,
                    opacity: d ? a / g : 1,
                    rx: o / 2,
                    ry: o / 2,
                    transform: "rotate(" + ((a - g / 4) * 360) / g + " 50 50)",
                    width: h,
                    x: 50 - o / 2 + i,
                    y: 50 - o / 2,
                  },
                  a
                );
              }),
            }),
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
  "ActorURI",
  ["ActorURIConfig", "URI"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return new (c("URI"))(a).addQueryData(
        c("ActorURIConfig").PARAMETER_ACTOR,
        b
      );
    }
    g.create = a;
    g.PARAMETER_ACTOR = c("ActorURIConfig").PARAMETER_ACTOR;
  },
  98
);
__d(
  "asset",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      throw new Error("asset(" + b.join(",") + "): Unexpected asset reference");
    }
    e.exports = a;
  },
  null
); /*FB_PKG_DELIM*/
__d(
  "PolarisCreationModal.next.react",
  [
    "fbt",
    "IGDSDialog.react",
    "Keys",
    "PolarisCreationCameraLogger",
    "PolarisCreationConstants",
    "PolarisCreationContextProvider.react",
    "PolarisCreationHelpers",
    "PolarisCreationModalError.react",
    "PolarisCreationModalHeader.react",
    "PolarisCreationModuleHelpers.react",
    "PolarisCreationStepProvider.react",
    "PolarisCreationTypes",
    "PolarisCreationWarningDialog.react",
    "PolarisDOMListener.react",
    "PolarisErrorBoundary.react",
    "PolarisIGAnimate",
    "PolarisNavigationActions",
    "PolarisPageTitle",
    "PolarisPostActionShowNewUploadedPost",
    "PolarisReactRedux",
    "PolarisRoutes",
    "PolarisUA",
    "browserHistory",
    "lodash-cloneDeep",
    "polarisCreationStateFactory",
    "polarisUserSelectors",
    "react",
    "react-spring-wwwig",
    "usePolarisCreationModalDimensions",
    "usePolarisCreationModalTimeSpent",
    "usePolarisCreationReducer",
    "useStable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = h._("Create new post");
    function n(a) {
      var b = a.editPostInfo,
        e = a.onClose;
      a = d("PolarisCreationStepProvider.react").useCreationStep();
      var f = a.step;
      a = c("useStable")(function () {
        return babelHelpers["extends"](
          {},
          d("polarisCreationStateFactory").creationStateFactory(
            c("lodash-cloneDeep")(b == null ? void 0 : b.beginningState)
          ),
          { entryPath: d("browserHistory").browserHistory.location.pathname }
        );
      });
      a = c("usePolarisCreationReducer")(a);
      var g = a[0];
      a = a[1];
      var h = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        }),
        m = k(!1),
        n = d("PolarisReactRedux").useDispatch(),
        o = l(!1),
        p = o[0],
        q = o[1],
        r = function () {
          var a,
            b,
            c = h == null ? void 0 : h.username;
          if (c == null) return;
          a =
            ((a = location) == null ? void 0 : a.pathname) ===
            d("PolarisRoutes").FEED_PATH;
          b =
            ((b = location) == null ? void 0 : b.pathname) != null &&
            ((b = location) == null ? void 0 : b.pathname.includes(c + "/"));
          (a || b) && window.scrollTo(0, 0);
        },
        s = function () {
          var a,
            b = g.postedMedia,
            c = b == null ? void 0 : b.pk;
          a = b == null ? void 0 : (a = b.user) == null ? void 0 : a.pk;
          if (b == null || c == null || a == null) return;
          n(
            d("PolarisPostActionShowNewUploadedPost").showNewUploadedPost(
              b,
              c,
              a
            )
          );
          r();
        },
        t = function () {
          f !== d("PolarisCreationTypes").STEP.editPostInfo &&
            d("PolarisCreationCameraLogger").logFeedCreationEndCameraSession({
              sessionId: g.sessionId,
            }),
            b != null
              ? b.onClose()
              : (g.isPosted === !0 && s(),
                n(d("PolarisNavigationActions").closeFeedCreationModal()));
        },
        u = function () {
          d("PolarisCreationConstants").NON_WARNING_STEPS.has(f)
            ? t()
            : ((m.current = !0), q(!0)),
            e && e();
        };
      o = function () {
        (m.current = !1), q(!1);
      };
      var v = function (a) {
          a.which === c("Keys").ESC && u();
        },
        w = c("usePolarisCreationModalDimensions")(),
        x = w.modalDimensions;
      w = w.modalDimensionsWithSetting;
      var y = {
          width: x.width + "px",
          maxWidth: x.maxWidth + "px",
          minWidth: x.minWidth + "px",
          minHeight: x.minHeight + "px",
          maxHeight: x.maxHeight + "px",
        },
        z = {
          width: w.width + "px",
          maxWidth: w.maxWidth + "px",
          minWidth: w.minWidth + "px",
        };
      x = d("react-spring-wwwig").useSpring(function () {
        return y;
      });
      w = x[0];
      var A = x[1];
      j(
        function () {
          switch (f) {
            case d("PolarisCreationTypes").STEP.select:
            case d("PolarisCreationTypes").STEP.crop:
            case d("PolarisCreationTypes").STEP.publish:
              A(y);
              break;
            case d("PolarisCreationTypes").STEP.edit:
            case d("PolarisCreationTypes").STEP.compose:
            case d("PolarisCreationTypes").STEP.preview:
            case d("PolarisCreationTypes").STEP.editPostInfo:
              A(z);
              break;
          }
        },
        [y, z, A, f]
      );
      j(function () {
        var a;
        if (
          d("PolarisUA").isTouchDevice() === !1 ||
          ((a = document) == null
            ? void 0
            : (a = a.body) == null
            ? void 0
            : a.style) == null
        )
          return function () {};
        a = document.body.style;
        var b = a.position,
          c = a.top,
          e = a.width,
          f = window.scrollY;
        document.body.style.top = "-" + window.scrollY + "px";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        return function () {
          var a;
          if (((a = document.body) == null ? void 0 : a.style) != null) {
            document.body.style.position = (a = b) != null ? a : "";
            document.body.style.top = (a = c) != null ? a : "";
            document.body.style.width = (a = e) != null ? a : "";
            window.scrollTo(0, f);
          }
        };
      }, []);
      return i.jsx(c("IGDSDialog.react"), {
        closeButtonPosition: "background",
        fixedWidth: !0,
        label: d("PolarisCreationModalHeader.react").getModalTitle(
          f,
          (x = g.errorPage) == null ? void 0 : x.title
        ),
        onClose: u,
        size: "creation",
        children: i.jsxs(c("PolarisCreationContextProvider.react"), {
          dispatch: a,
          state: g,
          children: [
            i.jsxs(c("PolarisErrorBoundary.react"), {
              errorRenderer: function (a) {
                return i.jsx(c("PolarisCreationModalError.react"), {
                  error: a,
                });
              },
              children: [
                i.jsx(d("PolarisIGAnimate").Animated.div, {
                  style: w,
                  children: d(
                    "PolarisCreationModuleHelpers.react"
                  ).getCreationModule(f, b),
                }),
                p &&
                  i.jsx(c("PolarisCreationWarningDialog.react"), {
                    onCancel: o,
                    onDiscardClick: t,
                  }),
              ],
            }),
            i.jsx(c("PolarisDOMListener.react"), {
              event: "keyup",
              handler: v,
              target: window,
            }),
          ],
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.editPostInfo;
      a = a.onClose;
      c("usePolarisCreationModalTimeSpent")();
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("PolarisPageTitle"), { title: m }),
          i.jsx(d("PolarisCreationStepProvider.react").CreationStepProvider, {
            initialStep:
              b != null
                ? d("PolarisCreationTypes").STEP.editPostInfo
                : d("PolarisCreationHelpers").getCreationFirstStep(),
            children: i.jsx(n, { editPostInfo: b, onClose: a }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
