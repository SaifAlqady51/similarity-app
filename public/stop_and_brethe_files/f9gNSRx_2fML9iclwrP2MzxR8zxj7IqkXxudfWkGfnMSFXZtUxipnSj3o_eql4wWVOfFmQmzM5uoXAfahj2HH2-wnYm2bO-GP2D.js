/*FB_PKG_DELIM*/

__d(
  "PolarisBoostBudgetAndDurationEstimatedReachQuery.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
        b = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "data" }],
            concreteType: "XDTEstimateReachResponseGraphQL",
            kind: "LinkedField",
            name: "xdt_ads_promote_estimate_reach_graphql",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XDTBudgetWithOffsetToEstimateTypedDict",
                kind: "LinkedField",
                name: "total_budget_with_offset_to_reach_estimate",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XDTEstimate",
                    kind: "LinkedField",
                    name: "estimate",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "lower_bound",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "upper_bound",
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
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "PolarisBoostBudgetAndDurationEstimatedReachQuery",
          selections: b,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "PolarisBoostBudgetAndDurationEstimatedReachQuery",
          selections: b,
        },
        params: {
          id: "5937763436341812",
          metadata: {},
          name: "PolarisBoostBudgetAndDurationEstimatedReachQuery",
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
  "CometFormComboboxMenuItem.react",
  [
    "ix",
    "CometIcon.react",
    "CometMenuItemBase.react",
    "CometMenuItemIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var b = a.auxItemType,
        e = a.icon,
        f = a.iconType,
        g = a.isSelected;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "auxItemType",
        "icon",
        "iconType",
        "isSelected",
      ]);
      var k = j(
        function () {
          var a = null;
          g &&
            (a = i.jsx(c("CometIcon.react"), {
              color: "highlight",
              icon: d("fbicon")._(h("477820"), 20),
            }));
          if (b != null)
            switch (b) {
              case "radio":
                a = g
                  ? i.jsx(c("CometIcon.react"), {
                      color: "highlight",
                      icon: d("fbicon")._(h("621400"), 24),
                    })
                  : i.jsx(c("CometIcon.react"), {
                      color: "primary",
                      icon: d("fbicon")._(h("545519"), 24),
                    });
                break;
            }
          return a;
        },
        [b, g]
      );
      return i.jsx(
        c("CometMenuItemBase.react"),
        babelHelpers["extends"]({}, a, {
          "aria-selected": g,
          aux: k,
          iconNode:
            e != null
              ? i.jsx(c("CometMenuItemIcon.react"), {
                  icon: e,
                  use:
                    f === "profile-picture"
                      ? "contained"
                      : "contained_small_icon",
                })
              : null,
          role: "option",
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFormInputValidationStateIcon",
  [
    "ix",
    "CometIcon.react",
    "CometProgressRingIndeterminate.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = {
      CORRECT: a.jsx(c("CometIcon.react"), {
        color: "positive",
        icon: d("fbicon")._(h("498146"), 20),
        testid: void 0,
      }),
      ERROR: a.jsx(c("CometIcon.react"), {
        color: "negative",
        icon: d("fbicon")._(h("502062"), 20),
        testid: void 0,
      }),
      LOADING: a.jsx(c("CometProgressRingIndeterminate.react"), {
        color: "disabled",
        size: 20,
      }),
      WARN: a.jsx(c("CometIcon.react"), {
        color: "warning",
        icon: d("fbicon")._(h("502062"), 20),
        testid: void 0,
      }),
    };
    g["default"] = b;
  },
  98
);
__d(
  "CometFormInputWrapperHelperText.react",
  ["TetraTextPairing.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.validationState;
      a = a.value;
      return h.jsx(c("TetraTextPairing.react"), {
        level: 4,
        meta: a,
        metaColor: b === "ERROR" ? "negative" : "secondary",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFormInputWrapper.react",
  [
    "BaseFocusRing.react",
    "CometFormInputValidationStateIcon",
    "CometFormInputWrapperHelperText.react",
    "FocusWithinHandler.react",
    "isBlueprintStylesEnabled",
    "react",
    "stylex",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          width: "xh8yej3",
          $$css: !0,
        },
        disabled: {
          backgroundColor: "x1npjb2n",
          borderTopColor: "x1epquy7",
          borderEndColor: "xsnmfus",
          borderBottomColor: "x1562eck",
          borderStartColor: "xcymrrh",
          boxShadow: "x1gnnqk1",
          cursor: "x1h6gzvc",
          ":active_backgroundColor": "x1cn5h38",
          $$css: !0,
        },
        error: {
          borderTopColor: "xmrkho8",
          borderEndColor: "xa6p843",
          borderBottomColor: "xfz9iyh",
          borderStartColor: "xy4nld6",
          ":active_backgroundColor": "x1kxczlb",
          $$css: !0,
        },
        errorFocused: { boxShadow: "xrq537t", $$css: !0 },
        errorHovered: { backgroundColor: "xpc7vr0", $$css: !0 },
        headerMask: {
          backgroundColor: "xjhjgkd",
          end: "x92rtbv",
          height: "xlup9mm",
          position: "x10l6tqk",
          start: "x16q8cke",
          top: "xfr5jun",
          $$css: !0,
        },
        helperText: { marginTop: "x1xmf6yo", $$css: !0 },
        hiddenHelperText: {
          clip: "xzpqnlu",
          clipPath: "x1hyvwdk",
          height: "xjm9jq1",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          width: "x1i1rx1s",
          $$css: !0,
        },
        hovered: {
          borderTopColor: "x4dwnd4",
          borderEndColor: "xp58pn9",
          borderBottomColor: "x1hsu73c",
          borderStartColor: "xvnt4d0",
          $$css: !0,
        },
        input: {
          backgroundColor: "xjbqb8w",
          flexGrow: "x1iyjqo2",
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          position: "x1n2onr6",
          $$css: !0,
        },
        inputRow: { display: "x78zum5", width: "xh8yej3", $$css: !0 },
        label: {
          fontSize: "x1jchvi3",
          fontWeight: "x1fcty0u",
          lineHeight: "x132q4wb",
          maxWidth: "x193iq5w",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
        labelDisabled: { color: "x1dntmbh", $$css: !0 },
        labelError: { color: "x1a1m0xk", $$css: !0 },
        labelHighlighted: { color: "xlsksjw", $$css: !0 },
        labelInside: {
          color: "xi81zsa",
          cursor: "xmper1u",
          display: "x1lliihq",
          end: "x1923su1",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x16q8cke",
          textOverflow: "xlyipyv",
          top: "xoyzfg9",
          transitionDuration: "x1k90msu",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1qfuztq",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        labelOutside: {
          color: "xgqhv05",
          marginBottom: "x1e56ztr",
          position: "x1n2onr6",
          $$css: !0,
        },
        labelShrunk: { end: "x19c1rep", transform: "x1cab348", $$css: !0 },
        root: {
          backgroundColor: "xjhjgkd",
          borderTopColor: "x1epquy7",
          borderEndColor: "xsnmfus",
          borderBottomColor: "x1562eck",
          borderStartColor: "xcymrrh",
          borderTopStartRadius: "x1268tai",
          borderTopEndRadius: "x1mxuytg",
          borderBottomEndRadius: "x14hpm34",
          borderBottomStartRadius: "xqvykr2",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xq2ru2l",
          borderEndWidth: "x17qb25w",
          borderBottomWidth: "xjmv2fv",
          borderStartWidth: "x1b4qsv2",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          ":active_backgroundColor": "x1egnk41",
          $$css: !0,
        },
        secondary: { display: "x78zum5", $$css: !0 },
        shake: {
          animationDuration: "x1f7sx64",
          animationFillMode: "x1u6ievf",
          animationName: "xcqsoj",
          animationTimingFunction: "x1ojsi0c",
          $$css: !0,
        },
        validationIcon: {
          paddingEnd: "x1pi30zi",
          paddingTop: "x109j2v6",
          $$css: !0,
        },
        validationIconHideLabel: { paddingTop: "xz9dl7a", $$css: !0 },
        warn: {
          borderTopColor: "x1xqsql5",
          borderEndColor: "x1sn40xs",
          borderBottomColor: "x1gkuw16",
          borderStartColor: "xg1yei2",
          ":active_backgroundColor": "xhexg4x",
          $$css: !0,
        },
        warnFocused: { boxShadow: "x1hliol7", $$css: !0 },
        warnHovered: { backgroundColor: "x12tslg2", $$css: !0 },
      },
      n = {
        pointer: { cursor: "x1ypdohk", $$css: !0 },
        text: { cursor: "x1ed109x", $$css: !0 },
      },
      o = {
        root: {
          borderTopStartRadius: "xyi19xy",
          borderTopEndRadius: "x1ccrb07",
          borderBottomEndRadius: "xtf3nb5",
          borderBottomStartRadius: "x1pc53ja",
          $$css: !0,
        },
      };
    function p(a) {
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === "object") {
        if (a) for (var b in a) return !1;
        return !0;
      } else return a == null || a === "";
    }
    function a(a) {
      var b = a.addOnBottom,
        d = a.addOnStart,
        e = a.alwaysShrinkLabel,
        f = e === void 0 ? !1 : e,
        g = a["aria-activedescendant"],
        q = a["aria-controls"],
        r = a["aria-expanded"],
        s = a["aria-haspopup"],
        t = a.ariaLabel,
        u = a.auxContent,
        v = a.children,
        w = a.comboboxKeyDown,
        x = a.cursor;
      e = a.disabled;
      var y = e === void 0 ? !1 : e,
        z = a.helperText;
      e = a.helperTextIsHidden;
      e = e === void 0 ? !1 : e;
      var A = a.hideLabel,
        B = A === void 0 ? !1 : A,
        C = a.label;
      A = a.labelLocation_INTERNAL;
      A = A === void 0 ? "inside" : A;
      var D = a.labelRef,
        E = a.onFocusChange,
        F = a.onPress,
        G = a.role,
        H = a.shrinkLabelOnFocus,
        I = H === void 0 ? !0 : H,
        J = a.suppressFocusRing,
        K = a.validationState;
      H = a.value;
      a = a.withHeaderMask;
      var L = a === void 0 ? !1 : a,
        M = c("useCometUniqueID")(),
        N = c("useCometUniqueID")();
      a = l(!1);
      var O = a[0],
        P = a[1];
      a = l(!1);
      var Q = a[0],
        R = a[1],
        S = !p(H),
        T = A === "outside",
        U = function (a) {
          return T
            ? h.jsx("label", {
                className:
                  "x1jchvi3 x1fcty0u x132q4wb x193iq5w x1al4vs7 xgqhv05 x1e56ztr x1n2onr6",
                suppressHydrationWarning: !0,
                children: C,
              })
            : h.jsx("span", {
                className:
                  "x1jchvi3 x1fcty0u x132q4wb x193iq5w x1al4vs7 xmper1u x1lliihq x6ikm8r x10wlt62 x47corl x10l6tqk x16q8cke xlyipyv xoyzfg9 x1k90msu x11xpdln x1qfuztq xuxw1ft" +
                  ((y
                    ? " x1dntmbh"
                    : "" +
                      ((S || f || (a && I)
                        ? ""
                        : "" +
                          (K == null && a
                            ? ""
                            : "" + (K === "ERROR" ? "" : ""))) +
                        (K == null && a
                          ? " xlsksjw"
                          : "" + (K === "ERROR" ? " x1a1m0xk" : " xi81zsa")))) +
                    (S || f || (a && I) ? " x19c1rep x1cab348" : " x1923su1")),
                ref: D,
                children: C,
              });
        },
        V = i(
          function () {
            Q || R(!0);
          },
          [Q]
        ),
        W = i(
          function () {
            Q && R(!1);
          },
          [Q]
        ),
        X = k(null),
        Y = k(null);
      a = l(!1);
      var Z = a[0],
        $ = a[1];
      j(
        function () {
          if (w == null) return;
          var a = Y && Y.current;
          if (a != null) {
            a.addEventListener("keydown", w);
            return function () {
              a.removeEventListener("keydown", w);
            };
          }
        },
        [w]
      );
      return h.jsxs("div", {
        className: "x78zum5 xdt5ytf xh8yej3",
        ref: Y,
        children: [
          T && U(!1),
          h.jsx(c("FocusWithinHandler.react"), {
            onFocusChange: E,
            children: function (a) {
              return h.jsx(c("BaseFocusRing.react"), {
                suppressFocusRing: !Z || J,
                children: function (e) {
                  var f;
                  return h.jsxs("label", {
                    "aria-activedescendant": g,
                    "aria-controls": q,
                    "aria-expanded": r,
                    "aria-haspopup": s,
                    "aria-label": (f = t) != null ? f : C,
                    className: c("stylex")(
                      m.root,
                      c("isBlueprintStylesEnabled")() && o.root,
                      n[x],
                      Q && m.hovered,
                      a && c("BaseFocusRing.react").focusRingXStyle,
                      K === "WARN" && [
                        m.warn,
                        Q && m.warnHovered,
                        a && m.warnFocused,
                      ],
                      K === "ERROR" && [
                        m.error,
                        Q && m.errorHovered,
                        a && m.errorFocused,
                      ],
                      y && m.disabled,
                      O && m.shake,
                      e
                    ),
                    htmlFor: M,
                    onAnimationEnd: function () {
                      P(!1);
                    },
                    onClick: function (a) {
                      y ? P(!0) : F && F(a);
                    },
                    onMouseEnter: V,
                    onMouseLeave: W,
                    ref: X,
                    role: F != null ? (G != null ? G : "button") : void 0,
                    suppressHydrationWarning: !0,
                    tabIndex: F != null ? 0 : void 0,
                    children: [
                      h.jsxs("div", {
                        className: "x78zum5 xh8yej3",
                        children: [
                          d,
                          h.jsxs("div", {
                            className:
                              "xjbqb8w x1iyjqo2 x193iq5w xeuugli x1n2onr6",
                            children: [
                              L &&
                                !y &&
                                (S || a) &&
                                h.jsx("span", {
                                  className:
                                    "x92rtbv xlup9mm x10l6tqk x16q8cke xfr5jun" +
                                    (K === "ERROR" && Q
                                      ? " xpc7vr0"
                                      : "" +
                                        (K === "WARN" && Q
                                          ? " x12tslg2"
                                          : " xjhjgkd")),
                                }),
                              !B && !T && U(a),
                              h.jsx(c("FocusWithinHandler.react"), {
                                onFocusChange: $,
                                children: v({
                                  filled: S,
                                  focused: a,
                                  helperTextID:
                                    z != null && K != null ? N : void 0,
                                  id: M,
                                  rootRef: X,
                                }),
                              }),
                            ],
                          }),
                          (u != null || K != null) &&
                            h.jsxs("div", {
                              className: "x78zum5",
                              children: [
                                K != null &&
                                  h.jsx("div", {
                                    className:
                                      "x1pi30zi" +
                                      (B ? " xz9dl7a" : " x109j2v6"),
                                    children: c(
                                      "CometFormInputValidationStateIcon"
                                    )[K],
                                  }),
                                u,
                              ],
                            }),
                        ],
                      }),
                      b,
                    ],
                  });
                },
              });
            },
          }),
          z != null &&
            (e
              ? h.jsx("div", {
                  className:
                    "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
                  id: N,
                  children: z,
                })
              : h.jsx("div", {
                  className: "x1xmf6yo",
                  id: N,
                  children: h.jsx(c("CometFormInputWrapperHelperText.react"), {
                    validationState: K,
                    value: z,
                  }),
                })),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometFormSelectMenuTriggerKeyDownHandler",
  ["clearTimeout", "react", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef,
      j = 500;
    function a(a, b, d, e, f) {
      var g = i(null),
        k = i(""),
        l = i(""),
        m = i(-1);
      return h(
        function (h) {
          if (
            k.current === "" &&
            (h.code === "Backspace" || h.code === "Clear" || h.key === " ")
          )
            return;
          if (
            !(
              h.key.length === 1 ||
              h.code === "Backspace" ||
              h.code === "Clear"
            ) ||
            h.altKey ||
            h.ctrlKey ||
            h.metaKey
          )
            return;
          h.code === "Backspace" || h.code === "Clear"
            ? (k.current = k.current.substring(0, k.current.length - 1))
            : (k.current += h.key.toLocaleLowerCase());
          h.preventDefault();
          g.current != null && c("clearTimeout")(g.current);
          g.current = c("setTimeout")(function () {
            (k.current = ""), (g.current = null);
          }, j);
          h = d.findIndex(function (a) {
            return a.value === b;
          });
          h = h === -1 ? 0 : h;
          for (var i = 0; i < d.length; i++) {
            var n = (i + h) % d.length,
              o = d[n];
            if (o.label.toString().toLocaleLowerCase().startsWith(k.current)) {
              if (!e) {
                f();
                a(o.value);
                l.current = k.current.toLocaleLowerCase().substring(0, 1);
                m.current = n;
                return;
              }
              if (
                l.current === k.current.toLocaleLowerCase().substring(0, 1) &&
                m.current === n
              )
                continue;
              l.current = k.current.toLocaleLowerCase().substring(0, 1);
              m.current = n;
              a(o.value);
              return;
            }
          }
        },
        [b, d, e, f, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometFormSelectOnlyComboboxKeyConfigs",
  ["fbt", "CometKeys", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo;
    function a(a) {
      var b = a.activeValue,
        d = a.filteredOptions,
        e = a.isMenuVisible,
        f = a.onHide,
        g = a.onPress,
        k = a.onShow,
        l = a.setActiveValue,
        m = a.value,
        n = i(
          function () {
            if (d.length === 0) return;
            if (!e) {
              var a;
              l((a = m) != null ? a : d[0].value);
              k();
              return;
            }
            a = d.findIndex(function (a) {
              return a.value === b;
            });
            a > 0 && l(d[a - 1].value);
            k();
          },
          [d, e, k, l, m, b]
        ),
        o = i(
          function () {
            if (d.length === 0) return;
            if (!e) {
              var a;
              k();
              l((a = m) != null ? a : d[0].value);
              return;
            }
            a = d.findIndex(function (a) {
              return a.value === b;
            });
            a < d.length - 1 && l(d[a + 1].value);
            k();
          },
          [d, e, k, l, m, b]
        );
      return j(
        function () {
          return [
            {
              command: { key: c("CometKeys").ENTER },
              description: h._("Select option"),
              handler: g,
            },
            {
              command: { key: c("CometKeys").SPACE },
              description: h._("Select option"),
              handler: g,
            },
            {
              command: { alt: !0, key: c("CometKeys").UP },
              description: h._("Select option"),
              handler: g,
            },
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Close listbox"),
              handler: function () {
                e && f();
              },
              shouldStopPropagation: e ? void 0 : !1,
            },
            {
              command: { key: c("CometKeys").TAB },
              description: h._("Select option"),
              handler: g,
              shouldPreventDefault: !1,
            },
            {
              command: { key: c("CometKeys").DOWN },
              description: h._("Select Next item"),
              handler: o,
            },
            {
              command: { key: c("CometKeys").UP },
              description: h._("Select Previous item"),
              handler: n,
            },
            {
              command: { key: c("CometKeys").HOME },
              description: h._("Select First item"),
              handler: function () {
                e || k(), l(d[0].value);
              },
            },
            {
              command: { key: c("CometKeys").END },
              description: h._("Select last item"),
              handler: function () {
                e || k(), l(d[d.length - 1].value);
              },
            },
            {
              command: { key: c("CometKeys").PAGE_UP },
              description: h._("Page up"),
              handler: function () {
                var a = d.findIndex(function (a) {
                  return a.value === b;
                });
                e &&
                  (d.length <= 11 || a <= 11
                    ? l(d[0].value)
                    : l(d[d.length - 10].value));
              },
            },
            {
              command: { key: c("CometKeys").PAGE_DOWN },
              description: h._("Page down"),
              handler: function () {
                var a = d.findIndex(function (a) {
                  return a.value === b;
                });
                e &&
                  (d.length <= 11 || d.length - a <= 11
                    ? l(d[d.length - 1].value)
                    : l(d[d.length + 10].value));
              },
            },
          ];
        },
        [g, e, o, n, f, l, d, k, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFormSelectOnlyCombobox.react",
  [
    "ix",
    "BaseContextualLayer.react",
    "CometComponentWithKeyCommands.react",
    "CometFormComboboxMenuItem.react",
    "CometFormInputWrapper.react",
    "CometIcon.react",
    "CometMenu.react",
    "CometProfilePhoto.react",
    "FocusInertRegion.react",
    "FocusWithinHandler.react",
    "emptyFunction",
    "fbicon",
    "focusScopeQueries",
    "react",
    "useCometFormSelectMenuTriggerKeyDownHandler",
    "useCometFormSelectOnlyComboboxKeyConfigs",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.align,
        e = a.ariaLabel,
        f = a.auxItemType,
        g = a.defaultIcon,
        m = a.disabled,
        n = m === void 0 ? !1 : m;
      m = a.footer_deprecated;
      var o = a.header,
        p = a.helperText,
        q = a.helperTextIsHidden;
      q = q === void 0 ? !1 : q;
      var r = a.iconType,
        s = r === void 0 ? "icon" : r;
      r = a.label;
      var t = a.labelLocation_INTERNAL,
        u = a.labelRef,
        v = a.onNullValue,
        w = a.onValueChange,
        x = a.onVisibilityChange,
        y = x === void 0 ? c("emptyFunction") : x,
        z = a.options;
      a.position;
      x = a.size;
      var A = a.testid;
      A = a.truncate;
      var B = A === void 0 ? !0 : A;
      A = a.validationState;
      var C = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "align",
        "ariaLabel",
        "auxItemType",
        "defaultIcon",
        "disabled",
        "footer_deprecated",
        "header",
        "helperText",
        "helperTextIsHidden",
        "iconType",
        "label",
        "labelLocation_INTERNAL",
        "labelRef",
        "onNullValue",
        "onValueChange",
        "onVisibilityChange",
        "options",
        "position",
        "size",
        "testid",
        "truncate",
        "validationState",
        "value",
      ]);
      var D = c("useCometUniqueID")(),
        E = c("useCometUniqueID")(),
        F = l(!1),
        G = F[0],
        H = F[1];
      F = l(null);
      var I = F[0],
        J = F[1],
        K = G && z.length > 0,
        L = k(null);
      F = z.filter(function (a) {
        return !a.disabled;
      });
      G = z.findIndex(function (a) {
        return a.value === I;
      });
      g = g == null ? void 0 : { iconProps: g, type: s };
      var M = null,
        N = null,
        O = z.find(function (a) {
          return a.value === C;
        });
      if (C != null && O != null) {
        M = O.icon;
        N = O.label;
        if (s === "profile-picture" && M != null) {
          M.shape = (O = M.shape) != null ? O : M.style;
          M.source = (O = M.source) != null ? O : { uri: M.src };
        }
      }
      O = M == null ? void 0 : { iconProps: M, type: s };
      var P = (M = O) != null ? M : g,
        Q = j(
          function () {
            H(!0), y(!0);
          },
          [y]
        ),
        R = j(
          function () {
            J(null), H(!1), y(!1);
          },
          [y]
        );
      O = j(
        function (a) {
          a || R();
        },
        [R]
      );
      function S(a, b) {
        return a + "__" + (b != null ? b : "0");
      }
      M = j(
        function () {
          if (K) I != null ? w(I) : I == null && v && v(null), R();
          else {
            var a;
            J((a = C) != null ? a : null);
            Q();
          }
        },
        [I, K, w, R, Q, C]
      );
      g = c("useCometFormSelectOnlyComboboxKeyConfigs")({
        activeValue: I,
        filteredOptions: F,
        isMenuVisible: K,
        onHide: R,
        onPress: M,
        onShow: Q,
        setActiveValue: J,
        value: C,
      });
      M = c("useCometFormSelectMenuTriggerKeyDownHandler")(J, I, F, K, Q);
      return i.jsx(c("FocusWithinHandler.react"), {
        onFocusChange: O,
        children: i.jsxs(c("CometComponentWithKeyCommands.react"), {
          commandConfigs: n ? [] : g,
          children: [
            i.jsx(c("CometFormInputWrapper.react"), {
              addOnStart:
                P != null &&
                (P.type === "icon"
                  ? i.jsx("div", {
                      className: "x1swvt13 x109j2v6",
                      children: i.jsx(c("CometIcon.react"), {
                        color: "secondary",
                        icon: P.iconProps,
                      }),
                    })
                  : P.type === "profile-picture"
                  ? i.jsx("div", {
                      className: "x1swvt13 xz9dl7a",
                      children: i.jsx(
                        c("CometProfilePhoto.react"),
                        babelHelpers["extends"]({}, P.iconProps, { size: 32 })
                      ),
                    })
                  : null),
              "aria-activedescendant":
                K && I != null && G !== -1 ? S(D, G) : void 0,
              "aria-controls": K ? E : void 0,
              "aria-expanded": K,
              "aria-haspopup": "listbox",
              ariaLabel: e,
              auxContent: i.jsx("div", {
                className: "xamitd3 x1pi30zi",
                children: i.jsx(c("CometIcon.react"), {
                  color: "primary",
                  icon: d("fbicon")._(h("481882"), 16),
                }),
              }),
              comboboxKeyDown: M,
              cursor: "pointer",
              disabled: n,
              helperText: p,
              helperTextIsHidden: q,
              label: r,
              labelLocation_INTERNAL: t,
              labelRef: u,
              onPress: function (a) {
                if (a.target === L.current) return;
                Q();
              },
              role: "combobox",
              shrinkLabelOnFocus: !1,
              validationState: A,
              value: C,
              children: function (a) {
                a = a.id;
                return i.jsx("div", {
                  className: P != null ? "x4mskuk" : "xh8yej3",
                  id: a,
                  ref: function (a) {
                    L.current = a;
                  },
                  suppressHydrationWarning: !0,
                  children: i.jsx("div", {
                    className:
                      "xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1jchvi3 x1fcty0u x132q4wb xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x1pi30zi x1n2onr6 x16tdsg8 xh8yej3 x1ja2u2z" +
                      ((n ? " x1dntmbh x1h6gzvc x47corl" : " xzsf02u") +
                        ((t === "outside"
                          ? " xz9dl7a xsag5q8"
                          : " x9desvi x1a8lsjc") +
                          (P != null
                            ? " xr9oo41"
                            : " x1swvt13" +
                              (n ? "" : "" + (t === "outside" ? "" : ""))))),
                    "data-testid": void 0,
                    children: i.jsx("span", {
                      className:
                        "" + (B ? " x6ikm8r x10wlt62 xlyipyv xuxw1ft" : ""),
                      children: (a = N) != null ? a : "\xa0",
                    }),
                  }),
                });
              },
            }),
            K &&
              i.jsx(
                c("BaseContextualLayer.react"),
                babelHelpers["extends"](
                  { align: x === "full" ? "stretch" : b },
                  a,
                  {
                    contextRef: L,
                    children: i.jsx(c("FocusInertRegion.react"), {
                      focusQuery: d("focusScopeQueries").tabbableScopeQuery,
                      children: i.jsx(c("CometMenu.react"), {
                        footer: m != null ? { text: m } : void 0,
                        header: o,
                        id: E,
                        role: "listbox",
                        size: x,
                        truncate: B,
                        children: z.map(function (a, b) {
                          var d = a.value === C;
                          return i.jsx(
                            c("CometFormComboboxMenuItem.react"),
                            {
                              "aria-disabled": a.disabled,
                              "aria-setsize": z.length,
                              auxItemType: f,
                              bodyColor: a.bodyColor,
                              bodyText: a.bodyText,
                              disabled: a.disabled,
                              icon: a.icon,
                              iconType: s,
                              id: S(D, b),
                              isSelected: d,
                              onClick: function () {
                                w(a.value), R();
                              },
                              primaryText: a.label,
                              secondaryColor: a.secondaryColor,
                              secondaryText: a.secondaryText,
                              testid: void 0,
                              visuallyFocused: a.value === I,
                            },
                            a.value
                          );
                        }),
                      }),
                    }),
                  }
                )
              ),
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
  "PolarisBoostBudgetAndDurationScreenStrings",
  ["fbt", "PECurrency"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    f = h._("Budget & duration");
    var i = h._("Total spend"),
      j = h._("Estimated reach"),
      k = h._("Daily budget"),
      l = h._("Duration"),
      m = h._("Distribution"),
      n = h._(
        "Your ad will appear in Feed, Stories and Explore on Instagram, without any extra effort. We'll automatically adjust your post so it's correctly formatted for Stories."
      ),
      o = h._("Budget per day"),
      p = h._("Budget invalid"),
      q = h._("Number of days"),
      r = h._("Duration invalid");
    function a(a) {
      return h._(
        "Your budget affects how many people see your ad. As you spend more, you grow the pool of people you can reach. We suggest starting with at least {mininum ad campaign budget}.",
        [
          h._param(
            "mininum ad campaign budget",
            a.format({
              showCurrencyCode: !1,
              showDecimals: !1,
              showSymbol: !0,
              stripZeros: !0,
              thousandSeparator: !0,
            })
          ),
        ]
      );
    }
    function b(a) {
      return h._(
        {
          "*": "Try starting with at least {ad campaign duration in days} days so our delivery system can find the best people for your promotion.",
          _1: "Try starting with at least 1 day so our delivery system can find the best people for your promotion.",
        },
        [h._plural(a, "ad campaign duration in days")]
      );
    }
    function d(a, b) {
      return h._(
        { "*": { "*": "{adCampaignMinimumReach} - {adCampaignMaximumReach}" } },
        [
          h._param(
            "adCampaignMinimumReach",
            c("PECurrency").formatAmountWithoutOffset("", a, !1, !1, !0, !0),
            [0, a]
          ),
          h._param(
            "adCampaignMaximumReach",
            c("PECurrency").formatAmountWithoutOffset("", b, !1, !1, !0, !0),
            [0, b]
          ),
        ]
      );
    }
    function e(a, b) {
      return h._(
        {
          "*": "{ad campaign total spend} over {ad campaign duration in days} days",
          _1: "{ad campaign total spend} over 1 day",
        },
        [
          h._plural(b, "ad campaign duration in days"),
          h._param(
            "ad campaign total spend",
            a.format({
              showCurrencyCode: !1,
              showDecimals: !1,
              showSymbol: !0,
              stripZeros: !1,
              thousandSeparator: !0,
            })
          ),
        ]
      );
    }
    g.BUDGET_AND_DURATION_SCREEN_HEADER = f;
    g.TOTAL_SPEND_TITLE = i;
    g.REACH_ESTIMATION_LABEL = j;
    g.BUDGET_SECTION_TITLE = k;
    g.DURATION_IN_DAYS_SECTION_TITLE = l;
    g.DISTRIBUTION_SECTION_TITLE = m;
    g.DISTRIBUTION_ADDITIONAL_INFO = n;
    g.BUDGET_SECTION_LABEL = o;
    g.BUDGET_SECTION_LABEL_INVALID = p;
    g.DURATION_IN_DAYS_SECTION_LABEL = q;
    g.DURATION_IN_DAYS_SECTION_LABEL_INVALID = r;
    g.getBudgetAdditionalInfoText = a;
    g.getDurationInDaysAdditionalInfoText = b;
    g.getReachRangeText = d;
    g.getTotalSpendDurationInDaysText = e;
  },
  98
);
__d(
  "PolarisBoostBudgetAndDurationAdditionalInfoSheetOrModal.react",
  [
    "fbt",
    "PolarisBoostBudgetAndDurationScreenStrings",
    "PolarisBoostSheetOrModal.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.dailyBudgetSuggestion,
        e = a.durationSuggestion;
      a = a.onClose;
      return i.jsx(c("PolarisBoostSheetOrModal.react"), {
        headerTitle: h._("Budget & duration overview"),
        onClose: a,
        sections: [
          {
            title: d("PolarisBoostBudgetAndDurationScreenStrings")
              .BUDGET_SECTION_TITLE,
            content: d(
              "PolarisBoostBudgetAndDurationScreenStrings"
            ).getBudgetAdditionalInfoText(b),
          },
          {
            title: d("PolarisBoostBudgetAndDurationScreenStrings")
              .DURATION_IN_DAYS_SECTION_TITLE,
            content: d(
              "PolarisBoostBudgetAndDurationScreenStrings"
            ).getDurationInDaysAdditionalInfoText(e),
          },
          {
            title: d("PolarisBoostBudgetAndDurationScreenStrings")
              .DISTRIBUTION_SECTION_TITLE,
            content: d("PolarisBoostBudgetAndDurationScreenStrings")
              .DISTRIBUTION_ADDITIONAL_INFO,
          },
        ],
        stepForEnterAndExitLogging: "education_budget_duration",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBoostBudgetAndDurationEstimatedReach.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "IGDSBox.react",
    "IGDSSpinner.react",
    "IGDSText.react",
    "PolarisBoostBudgetAndDurationEstimatedReachQuery.graphql",
    "PolarisBoostBudgetAndDurationScreenStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useEffect,
      k = e.useMemo,
      l = 157,
      m =
        h !== void 0
          ? h
          : (h = b("PolarisBoostBudgetAndDurationEstimatedReachQuery.graphql"));
    function n(a) {
      var b = a.audienceID,
        e = a.onEstimatedReachUpdate,
        f = a.businessPersonAccessToken,
        g = a.currencyOffset,
        h = a.dailyBudget,
        l = a.durationInDays,
        n = l === void 0 ? (isNaN(n) ? 0 : n) : l;
      l = a.goal;
      var o = a.mediaID;
      a = a.flowID;
      f = d("CometRelay").useLazyLoadQuery(m, {
        data: {
          fb_auth_token: f,
          media_id: o,
          destination: l,
          audience_id: b,
          total_budgets_with_offset: [
            parseInt(
              h.multiply(n * g).format({
                showCurrencyCode: !1,
                showDecimals: !1,
                showSymbol: !1,
                stripZeros: !1,
                thousandSeparator: !1,
              }),
              10
            ),
          ],
          flow_id: a,
          duration_in_days: n,
        },
      });
      var p =
          f.xdt_ads_promote_estimate_reach_graphql
            .total_budget_with_offset_to_reach_estimate,
        q = k(
          function () {
            var a;
            return ((a = p[0]) == null ? void 0 : a.estimate) != null
              ? {
                  max: p[0].estimate.upper_bound,
                  min: p[0].estimate.lower_bound,
                }
              : null;
          },
          [p]
        );
      j(
        function () {
          q != null && e(q);
        },
        [q, e]
      );
      return i.jsxs(c("IGDSBox.react"), {
        alignItems: "center",
        justifyContent: "start",
        paddingY: 8,
        children: [
          i.jsx(c("IGDSText.react").TitleEmphasized, {
            textAlign: "center",
            children: d(
              "PolarisBoostBudgetAndDurationScreenStrings"
            ).getTotalSpendDurationInDaysText(h.multiply(n), n),
          }),
          i.jsx(c("IGDSBox.react"), {
            padding: 4,
            children: i.jsx(c("IGDSText.react").Body, {
              color: "secondaryText",
              textAlign: "center",
              children: d("PolarisBoostBudgetAndDurationScreenStrings")
                .TOTAL_SPEND_TITLE,
            }),
          }),
          q == null || (q.min === 0 && q.max === 0)
            ? null
            : i.jsxs(c("IGDSBox.react"), {
                alignItems: "center",
                children: [
                  i.jsx(c("IGDSText.react").LabelEmphasized, {
                    textAlign: "center",
                    children: d(
                      "PolarisBoostBudgetAndDurationScreenStrings"
                    ).getReachRangeText(q.min, q.max),
                  }),
                  i.jsx(c("IGDSBox.react"), {
                    padding: 4,
                    children: i.jsx(c("IGDSText.react").Body, {
                      color: "secondaryText",
                      textAlign: "center",
                      children: d("PolarisBoostBudgetAndDurationScreenStrings")
                        .REACH_ESTIMATION_LABEL,
                    }),
                  }),
                ],
              }),
        ],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("IGDSBox.react"), {
        alignItems: "center",
        height: l,
        justifyContent: "center",
        children: i.jsx(c("CometPlaceholder.react"), {
          fallback: i.jsx(c("IGDSSpinner.react"), {
            position: "static",
            size: "medium",
          }),
          children: i.jsx(n, babelHelpers["extends"]({}, a)),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBoostBudgetAndDurationView.react",
  [
    "fbt",
    "CometFormSelectOnlyCombobox.react",
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisBoostBudgetAndDurationAdditionalInfoSheetOrModal.react",
    "PolarisBoostBudgetAndDurationEstimatedReach.react",
    "PolarisBoostBudgetAndDurationScreenStrings",
    "PolarisBoostDefaultValues.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.audienceID,
        e = a.budgetDurationSuggestions,
        f = a.businessPersonAccessToken,
        g = a.currencyOffset,
        j = a.dailyBudget;
      j =
        j === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_DAILY_BUDGET
          : j;
      var k = a.dailyBudgetOptions;
      k =
        k === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_DAILY_BUDGET_OPTIONS
          : k;
      var l = a.durationInDays,
        m = a.durationInDaysOptions;
      m =
        m === void 0
          ? d("PolarisBoostDefaultValues.react")
              .DEFAULT_DURATION_IN_DAYS_OPTIONS
          : m;
      var n = a.flowID,
        o = a.goal,
        p = a.mediaID,
        q = a.onAdditionalInfoClose,
        r = a.onBudgetChange,
        s = a.onDurationInDaysChange,
        t = a.onEstimatedReachUpdate;
      a = a.showAdditionalInfo;
      var u = k.map(function (a) {
          a = a.format({
            showCurrencyCode: !1,
            showDecimals: !1,
            showSymbol: !0,
            stripZeros: !0,
            thousandSeparator: !0,
          });
          return {
            label: h._("{ad budget option}", [h._param("ad budget option", a)]),
            value: a,
          };
        }),
        v = m.map(function (a) {
          return {
            label: h._("{ad duration in days option}", [
              h._param("ad duration in days option", a),
            ]),
            value: a.toString(10),
          };
        });
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("PolarisBoostBudgetAndDurationEstimatedReach.react"), {
            audienceID: b,
            businessPersonAccessToken: f,
            currencyOffset: g,
            dailyBudget: j,
            durationInDays: l,
            flowID: n,
            goal: o,
            mediaID: p,
            onEstimatedReachUpdate: t,
          }),
          i.jsxs(c("IGDSBox.react"), {
            flex: "grow",
            paddingX: 4,
            paddingY: 2,
            children: [
              i.jsx(c("IGDSText.react").LabelEmphasized, {
                textAlign: "start",
                children: d("PolarisBoostBudgetAndDurationScreenStrings")
                  .BUDGET_SECTION_TITLE,
              }),
              i.jsx(c("IGDSBox.react"), {
                paddingY: 4,
                width: "100%",
                children: i.jsx(c("CometFormSelectOnlyCombobox.react"), {
                  label: d("PolarisBoostBudgetAndDurationScreenStrings")
                    .BUDGET_SECTION_LABEL,
                  onValueChange: r,
                  options: u,
                  value: j.format({
                    showCurrencyCode: !1,
                    showDecimals: !1,
                    showSymbol: !0,
                    stripZeros: !0,
                    thousandSeparator: !0,
                  }),
                }),
              }),
            ],
          }),
          i.jsxs(c("IGDSBox.react"), {
            flex: "grow",
            paddingX: 4,
            children: [
              i.jsx(c("IGDSText.react").LabelEmphasized, {
                textAlign: "start",
                children: d("PolarisBoostBudgetAndDurationScreenStrings")
                  .DURATION_IN_DAYS_SECTION_TITLE,
              }),
              i.jsx(c("IGDSBox.react"), {
                paddingY: 4,
                width: "100%",
                children: i.jsx(c("CometFormSelectOnlyCombobox.react"), {
                  label: d("PolarisBoostBudgetAndDurationScreenStrings")
                    .DURATION_IN_DAYS_SECTION_LABEL,
                  onValueChange: s,
                  options: v,
                  value: isNaN(l) ? "" : l.toString(10),
                }),
              }),
            ],
          }),
          a &&
            i.jsx(
              c(
                "PolarisBoostBudgetAndDurationAdditionalInfoSheetOrModal.react"
              ),
              {
                dailyBudgetSuggestion:
                  (b = e == null ? void 0 : e.dailyBudgetSuggestion) != null
                    ? b
                    : k[0],
                durationSuggestion:
                  (f = e == null ? void 0 : e.durationSuggestion) != null
                    ? f
                    : m[0],
                onClose: q,
              }
            ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBoostBudgetAndDurationScreen.react",
  [
    "fbt",
    "BillingCurrencyAmount",
    "PolarisBoostBudgetAndDurationScreenStrings",
    "PolarisBoostBudgetAndDurationView.react",
    "PolarisBoostDefaultValues.react",
    "PolarisBoostScreenWrapper.react",
    "PolarisBoostUtils",
    "gkx",
    "isStringNullOrWhitespaceOnly",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useState;
    function a(a) {
      a = a.props;
      var b = a.dsa,
        e = a.audience,
        f = a.businessPersonAccessToken;
      f = f === void 0 ? "" : f;
      var g = a.budgetDurationSuggestions,
        m = a.currency,
        n =
          m === void 0
            ? d("PolarisBoostDefaultValues.react").DEFAULT_CURRENCY
            : m;
      m = a.currencyOffset;
      m =
        m === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_CURRENCY_OFFSET
          : m;
      var o = a.dailyBudget;
      o =
        o === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_DAILY_BUDGET
          : o;
      var p = a.dailyBudgetOptions;
      p =
        p === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_DAILY_BUDGET_OPTIONS
          : p;
      var q = a.durationInDays;
      q =
        q === void 0
          ? d("PolarisBoostDefaultValues.react").DEFAULT_DURATION_IN_DAYS
          : q;
      var r = a.goal;
      r = r === void 0 ? d("PolarisBoostDefaultValues.react").DEFAULT_GOAL : r;
      var s = a.logger,
        t = a.navigateTo;
      a = a.routeParams;
      var u = a.flow_id,
        v = a.media_id,
        w = a.return_path;
      o = l((a = o) != null ? a : p[0]);
      var x = o[0],
        y = o[1];
      a = l({ max: 0, min: 0 });
      var z = a[0],
        A = a[1];
      o = l(q);
      var B = o[0],
        C = o[1];
      a = l(!1);
      q = a[0];
      var D = a[1];
      o = j(
        function () {
          s == null
            ? void 0
            : s.logTapComponent("education", "budget_duration"),
            D(!0),
            s == null
              ? void 0
              : s.logViewComponent(
                  "education_budget_duration_bottomsheet",
                  "budget_duration"
                );
        },
        [s]
      );
      a = j(function () {
        D(!1);
      }, []);
      var E = j(
          function () {
            s == null ? void 0 : s.logFinishStepSuccess("budget_duration"),
              t("audience_selection");
          },
          [s, t]
        ),
        F =
          c("gkx")("3852") &&
          (e == null ? void 0 : e.subjectToDSA) === !0 &&
          b.hasCompletedDSAFlow === !1;
      b = function () {
        s == null ? void 0 : s.logFinishStepSuccess("budget_duration");
        var a = F ? "beneficiary_and_payer" : "summary";
        t(a, { durationInDays: B, dailyBudget: x, estimatedReach: z });
      };
      var G = j(
        function (a) {
          (z.min !== a.min || z.max !== a.max) && A(a);
        },
        [z.max, z.min]
      );
      k(
        function () {
          s == null ? void 0 : s.logStartStepSuccess("budget_duration"),
            s == null
              ? void 0
              : s.logViewComponent("education", "budget_duration");
        },
        [s]
      );
      var H = j(
        function () {
          return d("PolarisBoostUtils").polarisBoostDefaultCloseAction(w);
        },
        [w]
      );
      return i.jsx(c("PolarisBoostScreenWrapper.react"), {
        currentStep: 3,
        hasExitWarningDialog: !0,
        headerTitle: d("PolarisBoostBudgetAndDurationScreenStrings")
          .BUDGET_AND_DURATION_SCREEN_HEADER,
        onBack: E,
        onClose: H,
        onInfoPress: o,
        onNext: b,
        primaryButtonEnable: !0,
        primaryButtonTitle: h._("Next"),
        children: i.jsx(c("PolarisBoostBudgetAndDurationView.react"), {
          audienceID: c("isStringNullOrWhitespaceOnly")(
            e == null ? void 0 : e.audienceID
          )
            ? null
            : e.audienceID,
          budgetDurationSuggestions: g,
          businessPersonAccessToken: f,
          currencyOffset: m,
          dailyBudget: x,
          dailyBudgetOptions: p,
          durationInDays: B,
          durationInDaysOptions: d("PolarisBoostDefaultValues.react")
            .DEFAULT_DURATION_IN_DAYS_OPTIONS,
          flowID: u,
          goal: r,
          mediaID: v,
          onAdditionalInfoClose: a,
          onBudgetChange: function (a) {
            y(d("BillingCurrencyAmount").getFromUserInput(a, n));
          },
          onDurationInDaysChange: function (a) {
            a = parseInt(a, 10);
            C(parseInt(a, 10));
          },
          onEstimatedReachUpdate: G,
          showAdditionalInfo: q,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "SecuredActionChallengePasswordDialogQuery.graphql",
  [
    "SecuredActionChallengePasswordDialogQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "height" },
        c = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        d = { defaultValue: null, kind: "LocalArgument", name: "width" },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "public_key",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key_id",
          storageKey: null,
        },
        g = [
          { kind: "Variable", name: "height", variableName: "height" },
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Variable", name: "width", variableName: "width" },
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [
            i,
            {
              alias: null,
              args: null,
              concreteType: "StoryCardSeenState",
              kind: "LinkedField",
              name: "story_card_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_seen_by_viewer",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionChallengePasswordDialogQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "PublicKeyAndIDForEncryption",
                        kind: "LinkedField",
                        name: "public_key_and_id_for_encryption",
                        plural: !1,
                        selections: [
                          {
                            kind: "RequiredField",
                            field: e,
                            action: "THROW",
                            path: "me.public_key_and_id_for_encryption.public_key",
                          },
                          {
                            kind: "RequiredField",
                            field: f,
                            action: "THROW",
                            path: "me.public_key_and_id_for_encryption.key_id",
                          },
                        ],
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "me.public_key_and_id_for_encryption",
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
                {
                  args: g,
                  kind: "FragmentSpread",
                  name: "SecuredActionChallengeDialogBase_actor",
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
          argumentDefinitions: [c, d, a],
          kind: "Operation",
          name: "SecuredActionChallengePasswordDialogQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "me",
              plural: !1,
              selections: [
                h,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "PublicKeyAndIDForEncryption",
                      kind: "LinkedField",
                      name: "public_key_and_id_for_encryption",
                      plural: !1,
                      selections: [e, f],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [{ kind: "Literal", name: "first", value: 1 }],
                      concreteType: "DirectInboxBroadcastBucketConnection",
                      kind: "LinkedField",
                      name: "story_bucket",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "DirectMessageThreadBucket",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "should_show_close_friend_badge",
                              storageKey: null,
                            },
                            i,
                            j,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: "story_bucket(first:1)",
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "availability",
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
                { kind: "TypeDiscriminator", abstractKey: "__isActor" },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                i,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: "profile_url",
                      args: null,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "url",
                      storageKey: null,
                    },
                  ],
                  type: "Entity",
                  abstractKey: "__isEntity",
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "pages_story_bucket_v2",
                      plural: !1,
                      selections: [h, i, j],
                      storageKey: null,
                    },
                  ],
                  type: "Page",
                  abstractKey: null,
                },
                {
                  alias: null,
                  args: g,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "width",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "height",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "scale",
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
          id: b(
            "SecuredActionChallengePasswordDialogQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "SecuredActionChallengePasswordDialogQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "SecuredActionChallengePasswordDialog.react",
  [
    "fbt",
    "CometCardedDialogLegacy.react",
    "CometFormTextInput.react",
    "CometPasswordReauthenticationMutation",
    "CometRelay",
    "SecuredActionChallengeDialogBase.react",
    "SecuredActionChallengePasswordDialogQuery.graphql",
    "promiseDone",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useState,
      l = c("requireDeferred")("FBBrowserPasswordEncryption").__setRef(
        "SecuredActionChallengePasswordDialog.react"
      ),
      m =
        i !== void 0
          ? i
          : (i = b("SecuredActionChallengePasswordDialogQuery.graphql"));
    function a(a) {
      var b = a.props,
        e = b.onClose,
        f = b.onExit,
        g = b.onSuccess;
      b = a.queries.query;
      a = k("");
      var i = a[0],
        n = a[1];
      a = k("");
      var o = a[0],
        p = a[1];
      a = k(null);
      var q = a[0],
        r = a[1];
      a = k(!1);
      var s = a[0],
        t = a[1],
        u = d("CometRelay").useRelayEnvironment();
      a = d("CometRelay").usePreloadedQuery(m, b);
      b = "Close Dialog";
      a = a == null ? void 0 : a.me;
      if (a == null || a.public_key_and_id_for_encryption == null)
        return j.jsx(c("CometCardedDialogLegacy.react"), {
          onClose: e,
          children: b,
        });
      var v = a.public_key_and_id_for_encryption.public_key,
        w = a.public_key_and_id_for_encryption.key_id;
      b = function () {
        t(!0);
        var a = Math.floor(Date.now() / 1e3).toString();
        l.onReady(function (b) {
          return c("promiseDone")(
            b.encryptPassword(w, v, i, a),
            function (a) {
              d(
                "CometPasswordReauthenticationMutation"
              ).cometPasswordReauthenticationAction(u, a, function (a) {
                (a == null
                  ? void 0
                  : (a = a.comet_password_reauthentication) == null
                  ? void 0
                  : a.reauth_is_successful) === !0
                  ? (e(), g())
                  : (p(h._("Your password was incorrect")), r("ERROR"), t(!1));
              });
            },
            function (a) {
              t(!1), p(h._("Please enter your password again."));
            }
          );
        });
      };
      var x = function (a) {
          n(a), r(null), t(!1), p("");
        },
        y = h._("Please re-enter your password"),
        z = h._(
          "For your security, you must re-enter your password to continue."
        );
      o = j.jsx(c("CometFormTextInput.react"), {
        helperText: o,
        label: h._("Password"),
        onValueChange: x,
        testid: void 0,
        type: "password",
        validationState: q,
        value: i,
      });
      return j.jsx(c("SecuredActionChallengeDialogBase.react"), {
        action: o,
        actor$key: a,
        buttonDisabled: s,
        message: z,
        onClose: e,
        onConfirm: b,
        onExit: f,
        title: y,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "CometFormInputPasswordStateIcon.react",
  ["ix", "CometIcon.react", "fbicon", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = a.isVisible;
      return a
        ? i.jsx(c("CometIcon.react"), {
            color: "primary",
            icon: d("fbicon")._(h("491228"), 20),
            testid: void 0,
          })
        : i.jsx(c("CometIcon.react"), {
            color: "primary",
            icon: d("fbicon")._(h("491223"), 20),
            testid: void 0,
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFormTextInput.react",
  [
    "BaseTextInput.react",
    "CometFormInputPasswordStateIcon.react",
    "CometFormInputWrapper.react",
    "CometIcon.react",
    "CometImage.react",
    "CometPressable.react",
    "ImageIconSource",
    "react",
    "useBaseInputValidators",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState,
      j = {
        disabled: {
          backgroundColor: "x443n21",
          color: "x1dntmbh",
          cursor: "x1h6gzvc",
          $$css: !0,
        },
        emoji: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingStart: "x1ye3gou",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        icon: {
          paddingStart: "x1swvt13",
          paddingTop: "x109j2v6",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        imageIcon: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          boxShadow: "xlg9a9y",
          $$css: !0,
        },
        input: {
          backgroundColor: "xjbqb8w",
          borderTop: "x76ihet",
          borderEnd: "xwmqs3e",
          borderBottom: "x112ta8",
          borderStart: "xxxdfa6",
          boxSizing: "x9f619",
          color: "xzsf02u",
          fontSize: "x1uxerd5",
          fontWeight: "x1fcty0u",
          lineHeight: "x132q4wb",
          paddingBottom: "x1a8lsjc",
          paddingEnd: "x1pi30zi",
          paddingStart: "x1swvt13",
          paddingTop: "x9desvi",
          width: "xh8yej3",
          "::-ms-clear_display": "x15h3p50",
          "::-ms-reveal_display": "x10emqs4",
          $$css: !0,
        },
        largeImageIcon: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.autoComplete,
        e = a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
        f = a.auxContent,
        g = a.disabled,
        k = g === void 0 ? !1 : g;
      g = a.emojiSkittle;
      var l = a.helperText,
        m = a.helperTextIsHidden;
      m = m === void 0 ? !1 : m;
      var n = a.icon,
        o = a.inputMode,
        p = a.label,
        q = a.labelRef,
        r = a.maxLength,
        s = a.onBlur,
        t = a.onClick,
        u = a.onFocus,
        v = a.onValueChange,
        w = a.placeholder,
        x = a.readOnly,
        y = a.suppressFocusRing,
        z = a.testid;
      z = a.type;
      z = z === void 0 ? "text" : z;
      var A = a.validationState,
        B = a.validator,
        C = a.value,
        D = a.xstyle,
        E = babelHelpers.objectWithoutPropertiesLoose(a, [
          "autoComplete",
          "autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD",
          "auxContent",
          "disabled",
          "emojiSkittle",
          "helperText",
          "helperTextIsHidden",
          "icon",
          "inputMode",
          "label",
          "labelRef",
          "maxLength",
          "onBlur",
          "onClick",
          "onFocus",
          "onValueChange",
          "placeholder",
          "readOnly",
          "suppressFocusRing",
          "testid",
          "type",
          "validationState",
          "validator",
          "value",
          "xstyle",
        ]);
      B = c("useBaseInputValidators")({
        validator: B,
        value: (a = C) != null ? a : "",
      });
      a = B.topResultReason;
      B = B.topResultType;
      var F = z === "password",
        G = i(!1),
        H = G[0],
        I = G[1];
      G = F && Boolean(C);
      G = G
        ? h.jsx("div", {
            className: "x78zum5",
            children: h.jsx("div", {
              className: "x1pi30zi x109j2v6",
              children: h.jsx(c("CometPressable.react"), {
                onPress: function () {
                  return I(!H);
                },
                overlayDisabled: !0,
                children: h.jsx(c("CometFormInputPasswordStateIcon.react"), {
                  isVisible: H,
                }),
              }),
            }),
          })
        : null;
      var J = F ? (H ? "text" : "password") : z,
        K = B !== "CORRECT" ? B : A;
      return h.jsx(c("CometFormInputWrapper.react"), {
        addOnStart:
          (n != null &&
            n instanceof c("ImageIconSource") &&
            n.height === 40 &&
            h.jsx("div", {
              className: "x1swvt13 xexx8yu x47corl x6s0dn4 x78zum5",
              children: h.jsx(c("CometImage.react"), {
                height: parseInt(n.height, 10),
                src: n.src,
                width: parseInt(n.width, 10),
                xstyle: j.imageIcon,
              }),
            })) ||
          (n != null &&
            h.jsx("div", {
              className: "x1swvt13 x109j2v6 x47corl",
              children: h.jsx(c("CometIcon.react"), {
                color: "secondary",
                icon: n,
              }),
            })) ||
          (g != null &&
            h.jsx("div", {
              className: "x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl",
              children: g,
            })),
        auxContent: (F = G) != null ? F : f,
        cursor: "text",
        disabled: k,
        helperText: a != null ? a : l,
        helperTextIsHidden: m,
        label: p,
        labelRef: q,
        suppressFocusRing: y,
        validationState: K,
        value: C,
        children: function (a) {
          var f = a.focused,
            g = a.helperTextID;
          a = a.id;
          return h.jsx(
            c("BaseTextInput.react"),
            babelHelpers["extends"](
              {
                "aria-describedby": g,
                "aria-invalid": K === "ERROR",
                autoComplete: d,
                autoFocus: e,
                disabled: k,
                id: a,
                inputMode: o,
                maxLength: r,
                onBlur: s,
                onClick: t,
                onFocus: u,
                onValueChange: v,
                placeholder: f ? w : null,
                readOnly: x,
                ref: b,
                suppressFocusRing: !0,
                testid: void 0,
                type: J,
                value: C,
                xstyle: [
                  j.input,
                  k && j.disabled,
                  x != null && x === !0 && j.disabled,
                  D,
                ],
              },
              E
            )
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "SecuredActionChallengeDialogBase_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "height" },
        { defaultValue: null, kind: "LocalArgument", name: "scale" },
        { defaultValue: null, kind: "LocalArgument", name: "width" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "SecuredActionChallengeDialogBase_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          args: [
            { kind: "Variable", name: "height", variableName: "height" },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Variable", name: "width", variableName: "width" },
          ],
          kind: "FragmentSpread",
          name: "CometProfilePhotoForActor_actor",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "SecuredActionChallengeDialogBase.react",
  [
    "fbt",
    "CometCardedDialogLegacy.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "CometProfilePhotoForActor.react",
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "SecuredActionChallengeDialogBase_actor.graphql",
    "TetraButtonGroup.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e = a.action,
        f = a.actor$key,
        g = a.buttonDisabled,
        k = a.linkProps,
        l = a.message,
        m = a.onClose,
        n = a.onConfirm,
        o = a.onExit;
      a = a.title;
      f = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b("SecuredActionChallengeDialogBase_actor.graphql")),
        f
      );
      var p = function () {
          o(), m();
        },
        q = [
          {
            command: { key: c("CometKeys").ENTER },
            description: h._("Confirm"),
            handler: n,
            triggerFromInputs: !0,
          },
        ];
      return j.jsx(c("CometCardedDialogLegacy.react"), {
        onClose: p,
        title: a,
        withCloseButton: !0,
        children: j.jsxs(c("CometComponentWithKeyCommands.react"), {
          commandConfigs: q,
          debugName: "Button",
          children: [
            j.jsxs(c("CometColumn.react"), {
              children: [
                j.jsxs(c("CometRow.react"), {
                  align: "start",
                  spacing: 12,
                  verticalAlign: "center",
                  children: [
                    j.jsx(c("CometRowItem.react"), {
                      children: j.jsx(c("CometProfilePhotoForActor.react"), {
                        actor: f,
                        shape: "circle",
                        size: 60,
                      }),
                    }),
                    j.jsx(c("CometRowItem.react"), {
                      children: j.jsx(c("TetraText.react"), {
                        type: "body2",
                        children: f.name,
                      }),
                    }),
                  ],
                }),
                j.jsx(c("CometRow.react"), {
                  children: j.jsx(c("CometRowItem.react"), {
                    children: j.jsx(c("TetraText.react"), {
                      type: "body3",
                      children: l,
                    }),
                  }),
                }),
                j.jsx(c("CometRow.react"), {
                  children: j.jsx(c("CometRowItem.react"), {
                    expanding: !0,
                    children: e,
                  }),
                }),
              ],
            }),
            j.jsx(c("CometColumn.react"), {
              children: j.jsx(c("CometColumnItem.react"), {
                paddingVertical: 12,
                children: j.jsx(c("TetraButtonGroup.react"), {
                  primary: {
                    disabled: g,
                    label: h._("Confirm"),
                    linkProps: k,
                    onPress: n,
                    testid: "secured-action-confirm",
                  },
                  secondary: {
                    disabled: g,
                    label: h._("Cancel"),
                    onPress: p,
                    testid: "secured-action-cancel",
                  },
                  size: "large",
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
); /*FB_PKG_DELIM*/
__d(
  "processBaseInputValidators",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      if (typeof b === "function") return [b(a)];
      var c = [];
      for (
        var b = b,
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= b.length) break;
          f = b[e++];
        } else {
          e = b.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        Array.isArray(f)
          ? c.push.apply(c, g(a, f))
          : typeof f === "function" && c.push(f(a));
      }
      return c.filter(function (a) {
        return a.type !== "CORRECT";
      });
    }
    f["default"] = g;
  },
  66
);
__d(
  "validateBaseInput",
  ["processBaseInputValidators"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = d != null && !a ? c("processBaseInputValidators")(b, d) : [];
      if (a.length === 0)
        return {
          allResults: a,
          topResultReason: null,
          topResultType: "CORRECT",
        };
      var e = a.some(function (a) {
        return a.type === "ERROR";
      });
      d =
        (b = a.find(function (a) {
          return a.type === (e ? "ERROR" : "WARN");
        })) != null
          ? b
          : null;
      return {
        allResults: a,
        topResultReason: d != null && d.reason != null ? d.reason : null,
        topResultType: d != null ? d.type : "CORRECT",
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBaseInputValidators",
  ["react", "useIsPristineValue", "validateBaseInput"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.isInitialValuePristine;
      b = b === void 0 ? !0 : b;
      var d = a.validator,
        e = a.value,
        f = c("useIsPristineValue")(e, b);
      return h(
        function () {
          return c("validateBaseInput")(f, e, d);
        },
        [f, d, e]
      );
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "CometPasswordReauthenticationMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5631341693547285";
  },
  null
);
__d(
  "CometPasswordReauthenticationMutation.graphql",
  ["CometPasswordReauthenticationMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "CometPasswordReauthenticationPayload",
            kind: "LinkedField",
            name: "comet_password_reauthentication",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reauth_is_successful",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometPasswordReauthenticationMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "CometPasswordReauthenticationMutation",
          selections: c,
        },
        params: {
          id: b("CometPasswordReauthenticationMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometPasswordReauthenticationMutation",
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
  "CometPasswordReauthenticationMutation",
  ["CometPasswordReauthenticationMutation.graphql", "CometRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("CometPasswordReauthenticationMutation.graphql"));
    function a(a, b, c) {
      b = { input: { password: { sensitive_string_value: b } } };
      d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: c,
        onError: function (a) {
          alert(a.source.exception.message);
        },
        variables: b,
      });
    }
    g.cometPasswordReauthenticationAction = a;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "CometEntryPointPopoverContainer.react",
  ["CometRelay", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useMemo;
    function a(a) {
      a.entryPointParams;
      var b = a.entryPointReference,
        c = a.load,
        e = a.otherProps,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          "entryPointParams",
          "entryPointReference",
          "load",
          "otherProps",
        ]);
      a = j(
        function () {
          return babelHelpers["extends"]({}, e, f);
        },
        [e, f]
      );
      i(
        function () {
          b == null && c();
        },
        [b, c]
      );
      return b == null
        ? null
        : h.jsx(d("CometRelay").EntryPointContainer, {
            entryPointReference: b,
            props: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopContainerElementProvider.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    c = d("react");
    var i = c.useContext,
      j = c.useState,
      k = h.createContext({ element: null, setElement: function () {} });
    function a(a) {
      a = a.children;
      var b = j(null),
        c = b[0];
      b = b[1];
      return h.jsx(k.Provider, {
        value: { element: c, setElement: b },
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return i(k);
    }
    g.PolarisClipsTabDesktopContainerElementProvider = a;
    g.usePolarisClipsTabDesktopContainerElementProvider = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "BaseTextInput.react",
  ["BaseFocusRing.react", "BaseInput.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { root: { ":disabled_color": "x1kdt53j", $$css: !0 } };
    function a(a, b) {
      var d = a.suppressFocusRing,
        e = a.xstyle,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          "suppressFocusRing",
          "xstyle",
        ]);
      return h.jsx(c("BaseFocusRing.react"), {
        suppressFocusRing: d,
        children: function (a) {
          return h.jsx(
            c("BaseInput.react"),
            babelHelpers["extends"]({}, f, { ref: b, xstyle: [i.root, a, e] })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
); /*FB_PKG_DELIM*/
__d(
  "useIsPristineValue",
  ["react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a(a, b) {
      b = h(b);
      var d = b[0];
      b = b[1];
      var e = c("useStable")(function () {
        return a;
      });
      d && a !== e && b(!1);
      return d;
    }
    g["default"] = a;
  },
  98
);
