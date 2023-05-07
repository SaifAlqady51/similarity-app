/*FB_PKG_DELIM*/

__d(
  "PolarisAPIPostNotifyGuardianCall",
  ["PolarisInstapi"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      var e = "/api/v1/users/notify_guardian_call/";
      a = { guardian_igid: a, reported_igid: b, reported_category: c };
      return d("PolarisInstapi")
        .apiPost(e, { body: a })
        .then(function (a) {
          return a.data;
        });
    }
    g.postNotifyGuardianCall = a;
  },
  98
);
__d(
  "PolarisUnfollowDialog_DEPRECATED.react",
  ["IGCoreDialog", "PolarisUnfollowDialogContentContainer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.analyticsContext,
        e = a.analyticsExtra,
        f = a.onClose,
        g = a.onUnfollowUser,
        i = a.size;
      i = i === void 0 ? 90 : i;
      a = a.userId;
      return h.jsx(d("IGCoreDialog").IGCoreDialog, {
        "data-testid": void 0,
        onModalClose: f,
        children: h.jsx(c("PolarisUnfollowDialogContentContainer.react"), {
          analyticsContext: b,
          analyticsExtra: e,
          onClose: f,
          onUnfollowUser: g,
          size: i,
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
  "PolarisTextWithEntities.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      return a.offset === b.offset && (a.length === 0 || b.length === 0)
        ? a.length - b.length
        : a.offset - b.offset;
    }
    function j(a) {
      return [].concat(a.ranges).filter(Boolean).sort(i);
    }
    function a(a) {
      var b = 0,
        c = [],
        d = a.text,
        e = j(a),
        f = [],
        g = [];
      for (var i = 0; i < e.length; i++)
        f.push(e[i].offset), g.push(e[i].offset + e[i].length);
      i = [];
      var k = 0;
      while (k < e.length) {
        var l = e[k];
        if (g[k] < b) {
          k = i.length > 0 ? i.pop() : k + 1;
          continue;
        }
        if (l.offset > b) {
          var m = d.substring(b, l.offset);
          c.push(h.jsx(h.Fragment, { children: m }, m + k));
          b = l.offset;
        }
        m = 0;
        for (var n = k + 1; n < e.length; n++)
          if (f[n] < g[k] && f[n] >= b) {
            m = n;
            break;
          }
        if (m !== 0) {
          n = d.substring(b, f[m]);
          c.push(h.jsx(h.Fragment, { children: a.rangeRenderer(n, l) }, n + k));
          b = f[m];
          i.push(k);
          k = m;
          continue;
        }
        n = d.substring(b, g[k]);
        c.push(h.jsx(h.Fragment, { children: a.rangeRenderer(n, l) }, n + k));
        b = g[k];
        i.length > 0 ? (k = i.pop()) : k++;
      }
      if (d.length > b) {
        m = d.substr(b);
        c.push(h.jsx(h.Fragment, { children: m }, m));
      }
      return a.textRenderer(c);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalLinkUtils",
  ["URI", "polarisIsInternalURIString"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "help.instagram.com";
    function i(a) {
      return (
        c("polarisIsInternalURIString")(a) &&
        new (c("URI"))(a).getDomain() === h
      );
    }
    function a(a) {
      return i(a) || !c("polarisIsInternalURIString")(a);
    }
    g.shouldLinkUseBlankTarget = a;
  },
  98
);
__d(
  "polarisGetGuardianInfo",
  ["normalizr"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (d("normalizr").schema.Entity)(
      "userInfo",
      {},
      {
        idAttribute: function (a) {
          return String(a.pk);
        },
        processStrategy: function (a) {
          return { username: a.username };
        },
      }
    );
    function a(a) {
      return d("normalizr").normalize(a, h).entities.userInfo;
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXWebReportActions",
  [
    "JSResourceForInteraction",
    "PolarisAPIPostNotifyGuardianCall",
    "PolarisDirectLogger",
    "PolarisFRXWebReportConstants",
    "PolarisInstapi",
    "PolarisReportConstants",
    "polarisGetGuardianInfo",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1,
      i = c("JSResourceForInteraction")(
        "PolarisFRXWebSendSecureReportAction"
      ).__setRef("PolarisFRXWebReportActions");
    function a(a) {
      a = babelHelpers["extends"]({}, a, {
        frx_prompt_request_type: d("PolarisFRXWebReportConstants")
          .FRX_SCREEN_INPUT_REQUEST_TYPE_INTS.START,
      });
      return k(a, !0);
    }
    function b(a) {
      var b = a.frxPromptRequestType,
        c = a.metadata,
        d = j(a);
      c = babelHelpers["extends"]({}, c, d, { frx_prompt_request_type: b });
      return k(
        c,
        !1,
        (d = a.optionalParams) == null ? void 0 : d.thread_id,
        (b = a.optionalParams) == null ? void 0 : b.responsible_id
      );
    }
    function j(a) {
      var b = a.context;
      a = a.optionalParams;
      var c = a.attachments,
        d = a.evidenceText,
        e = a.reportSubtype,
        f = a.selectedPromptButtonActionType,
        g = a.selectedTagTypes,
        h = a.selectedVictimID;
      a = a.tipNumber;
      var i = {};
      b != null && (i.context = b);
      g != null && (i.selected_tag_types = JSON.stringify(g));
      f != null && (i.action_type = f);
      h != null && (i.victim_user_id = h);
      a != null && (i.tip_number = a);
      c != null && (i.attachments = c);
      d != null && (i.evidence_text = d);
      e != null && (i.report_subtype = e);
      return babelHelpers["extends"]({}, i);
    }
    function k(a, b, e, f) {
      return function (g, j) {
        var k = h++;
        g({
          type: "FRX_WEB_REPORT_SCREEN_API_REQUESTED",
          isInitScreen: b,
          frxScreenRequestID: k,
        });
        j = d("PolarisInstapi")
          .apiPost("/api/v1/web/reports/get_frx_prompt/", { body: a })
          .then(function (a) {
            return a.data;
          });
        j.then(function (b) {
          var h = b.response;
          b = b.type;
          if (h == null || b == null)
            g({
              type: "FRX_WEB_REPORT_SCREEN_API_REQUEST_FAILED",
              frxScreenRequestID: k,
            });
          else {
            var j = h.frx_context;
            [
              d("PolarisReportConstants").FRXLocation.ENCRYPTED_DIRECT_MESSAGE,
              d("PolarisReportConstants").FRXLocation.ENCRYPTED_DIRECT_THREAD,
            ].includes(a.location) &&
              a.frx_prompt_request_type ===
                d("PolarisFRXWebReportConstants")
                  .FRX_SCREEN_INPUT_REQUEST_TYPE_INTS.POLICY_EDUCATION &&
              f !== void 0 &&
              e !== void 0 &&
              j !== void 0 &&
              c("promiseDone")(
                i.load().then(function (b) {
                  g(b(j, f, e, a.victim_user_id));
                })
              );
            g({
              type: "FRX_WEB_REPORT_SCREEN_API_REQUEST_SUCCESS",
              frxScreenRequestID: k,
              screenPayload: { frxScreenRequestID: k, response: h, type: b },
            });
          }
        })["catch"](function (a) {
          g({
            type: "FRX_WEB_REPORT_SCREEN_API_REQUEST_FAILED",
            frxScreenRequestID: k,
          });
        });
      };
    }
    function e(a, b, c, e) {
      return function (f, g) {
        f({
          type: "FRX_WEB_NOTIFY_GUARDIAN_FOLLOWUP_MODAL_TO_CONFIMATION_MODAL",
        }),
          a &&
            d("PolarisAPIPostNotifyGuardianCall")
              .postNotifyGuardianCall(b, c, e)
              ["catch"](function (a) {
                var b = new (d("PolarisDirectLogger").DirectLogger)(
                  "DirectActions"
                );
                b.logError("Notify Guardian From Web", a);
              });
      };
    }
    function f(a) {
      return babelHelpers["extends"](
        { type: "FRX_WEB_REPORT_REPORTING_MODAL_CLOSED" },
        a
      );
    }
    function l() {
      return { type: "FRX_WEB_REPORT_GO_BACK_ONE_SCREEN" };
    }
    function m() {
      return { type: "FRX_WEB_REPORT_START_UNFOLLOW_FOLLOWUP" };
    }
    function n() {
      return { type: "FRX_WEB_REPORT_START_BLOCK_FOLLOWUP" };
    }
    function o() {
      return { type: "FRX_WEB_REPORT_START_NOTIFY_GUARDIAN_FOLLOWUP" };
    }
    function p() {
      return function (a, b) {
        a({ type: "FRX_WEB_REPORT_DISABLE_NOTIFY_GUARDIAN_OPTION" });
      };
    }
    function q(a) {
      return function (b, e) {
        d("PolarisInstapi")
          .apiGet("/api/v1/users/{user_id}/info/", { path: { user_id: a } })
          .then(function (d) {
            d = d.data.user;
            d &&
              b({
                type: "FRX_WEB_REPORT_STORE_GUARDIAN_INFORMATION",
                guardian: c("polarisGetGuardianInfo")(d)[a],
              });
          });
      };
    }
    function r(a) {
      return function (b, c) {
        b({
          type: "FRX_WEB_REPORT_STORE_REPORTED_TAG_TITLE",
          reportedTagTitle: a,
        });
      };
    }
    g.doRequestInitFRXScreenAction = a;
    g.doRequestNextFRXScreenAction = b;
    g.doOpenNotifyGuardianFollowupModalToPreviousScreenAction = e;
    g.doReportingModalClosedAction = f;
    g.doGoBackOneFRXScreenAction = l;
    g.doStartUnfollowFollowupAction = m;
    g.doStartBlockFollowupAction = n;
    g.doStartNotifyGuardianFollowupAction = o;
    g.doDisableNotifyGuardianOption = p;
    g.doStoreGuardianInformation = q;
    g.doStoreReportedTagTitle = r;
  },
  98
);
__d(
  "PolarisFRXWebReportStateSelectors",
  ["PolarisFRXWebReportConstants", "PolarisFRXWebReportUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a.webFRXReport.pendingFRXScreenRequestID !== null;
    }
    function h(a) {
      return a.webFRXReport.screenHistoryStack;
    }
    function b(a) {
      return d("PolarisFRXWebReportUtils").getCurrentScreenFromHistoryStack(
        h(a)
      );
    }
    function c(a) {
      return h(a).length;
    }
    function e(a) {
      a = h(a);
      return (
        a.findIndex(function (a) {
          return (
            a.type ===
            d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
              .CONFIRMATION
          );
        }) >= 0
      );
    }
    function f(a) {
      return a.webFRXReport.currRenderStep;
    }
    function i(a) {
      return a.webFRXReport.disableNotifyGuardianOption;
    }
    function j(a) {
      return a.webFRXReport.guardianUsername;
    }
    function k(a) {
      return a.webFRXReport.reportedTagTitle;
    }
    g.getIsFRXScreenRequestProcessing = a;
    g.getCurrScreenPayload = b;
    g.getScreenHistorySize = c;
    g.getIsConfirmationScreenInHistoryStack = e;
    g.getCurrRenderStep = f;
    g.getDisableNotifyGuardianOption = i;
    g.getGuardianUsername = j;
    g.getReportedTagTitle = k;
  },
  98
);
__d(
  "PolarisReportButton.react",
  ["PolarisIGCoreButton", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.color;
      d = d === void 0 ? "ig-primary-button" : d;
      var e = a.disabled;
      a = a.onClick;
      return h.jsx(c("PolarisIGCoreButton"), {
        color: d,
        disabled: e,
        fullWidth: !0,
        large: !0,
        onClick: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisReportUserImpersonationListItem.react",
  [
    "IGDSBox.react",
    "IGDSListItem.react",
    "IGDSText.react",
    "PolarisAssetManagerGlyphMapping",
    "PolarisGenericStrings",
    "PolarisIGCoreIcon",
    "PolarisReportButton.react",
    "PolarisReportStrings",
    "PolarisUserAvatar.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = function () {
            c.props.onReport();
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.props.result;
        return h.jsx(c("IGDSListItem.react"), {
          addOnEnd: h.jsx(c("PolarisReportButton.react"), {
            onClick: this.$1,
            children: d("PolarisReportStrings").nextText,
          }),
          addOnStart: h.jsx(c("PolarisUserAvatar.react"), {
            isLink: !1,
            profilePictureUrl: a.profilePictureUrl,
            size: 44,
            username: a.username,
          }),
          subtitle: a.fullName,
          title: h.jsxs(c("IGDSBox.react"), {
            alignItems: "center",
            direction: "row",
            display: "block",
            children: [
              h.jsx(c("IGDSText.react").BodyEmphasized, {
                breakWord: !0,
                children: a.username,
              }),
              a.isVerified
                ? h.jsx(c("IGDSBox.react"), {
                    display: "inlineBlock",
                    marginStart: 1,
                    children: h.jsx(c("PolarisIGCoreIcon"), {
                      alt: d("PolarisGenericStrings").VERIFIED_TEXT,
                      icon: d("PolarisAssetManagerGlyphMapping").ICONS
                        .VERIFIED_SMALL,
                    }),
                  })
                : null,
            ],
          }),
        });
      };
      return b;
    })(h.Component);
    g.ReportUserImpersonationListItem = a;
  },
  98
);
__d(
  "PolarisReportSearchBoxContainer.react",
  [
    "PolarisMobileSearchBox.react",
    "PolarisReactRedux",
    "PolarisSearchActions",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = a.search;
      return {
        discoverToken: "",
        loading: a.loading,
        rankToken: a.rankToken,
        results: a.results,
        suggested: a.suggested,
        searchedForQuery: a.searchedForQuery,
        selectedIndex: a.selectedIndex,
      };
    }
    function b(a) {
      return {
        onClearSearch: function () {
          a(d("PolarisSearchActions").clearSearch());
        },
        onNavigateToResult: function (b, c, e) {
          a(d("PolarisSearchActions").navigateToResult(b, c, e));
        },
        onSearch: function (b, c, e, f) {
          a(d("PolarisSearchActions").search(b, c, e));
        },
        onSelectResult: function (b, c) {
          a(d("PolarisSearchActions").selectResult(b, c));
        },
      };
    }
    e = d("PolarisReactRedux").connect(a, b)(c("PolarisMobileSearchBox.react"));
    g["default"] = e;
  },
  98
);
__d(
  "PolarisReportUserImpersonationSearchBox.react",
  [
    "cx",
    "IGDSBox.react",
    "PolarisReportSearchBoxContainer.react",
    "PolarisReportUserImpersonationListItem.react",
    "PolarisSearchConstants",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.fromWebview;
      b = b === void 0 ? !1 : b;
      var e = a.onSelectVictim,
        f = a.reportedUserID,
        g = a.searchBoxPlaceHolder,
        h = a.userSearchResults,
        j = a.verifiedOnly;
      return i.jsxs("div", {
        children: [
          i.jsx(c("PolarisReportSearchBoxContainer.react"), {
            analyticsContext: void 0,
            disableResultKeyboardNav: !0,
            hideCancelButton: !0,
            isActive: !0,
            placeholder: g,
            searchContext: d("PolarisSearchConstants").SEARCH_CONTEXT.USER,
            useHistory: !0,
          }),
          i.jsx(c("IGDSBox.react"), {
            color: "primaryBackground",
            marginTop: b ? 0 : 2,
            position: "relative",
            children: i.jsx("div", {
              className: b ? "_ac68" : "",
              children: h
                .filter(function (a) {
                  return j
                    ? a.isVerified && a.pk !== f.toString()
                    : a.pk !== f.toString();
                })
                .map(function (a, b) {
                  return i.jsx(
                    d("PolarisReportUserImpersonationListItem.react")
                      .ReportUserImpersonationListItem,
                    {
                      onReport: function () {
                        return e(a);
                      },
                      result: a,
                    },
                    b
                  );
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
  "PolarisFRXBlockUserFollowupModal.react",
  [
    "CometPlaceholder.react",
    "I64",
    "IGDSGlimmer.react",
    "JSResourceForInteraction",
    "PolarisBlockDialogContainer.react",
    "PolarisConfirmDialog.react",
    "PolarisFRXWebReportStrings",
    "PolarisGenericStrings",
    "PolarisLinkBuilder",
    "PolarisNavigationUtils",
    "PolarisReactRedux",
    "lazyLoadComponent",
    "polarisRelationshipSelectors",
    "qex",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = c("lazyLoadComponent")(
        c("JSResourceForInteraction")("IGDBlockUserDialog.react").__setRef(
          "PolarisFRXBlockUserFollowupModal.react"
        )
      );
    function k(a, b) {
      a = a.userToBlock.id;
      return d("polarisRelationshipSelectors").getRelationship(
        b.relationships,
        a
      );
    }
    function l(a) {
      a.onClose && a.onClose();
    }
    function a(a) {
      var b = d("PolarisReactRedux").useSelector(function (b) {
          return k(a, b);
        }),
        e = a.onClose,
        f = a.threadId,
        g = a.userToBlock,
        n = a.useSimpleBlockModalWithoutRefresh,
        o = g.fbidV2,
        p = g.id;
      g = g.username;
      var q = c("qex")._("605") || !1,
        r = i(
          function () {
            e();
          },
          [e]
        );
      if (q && g != null)
        return h.jsx(c("CometPlaceholder.react"), {
          fallback: h.jsx(c("IGDSGlimmer.react"), { index: 0 }),
          children: h.jsx(j, {
            contactID: d("I64").of_string(p),
            isAfterReport: !0,
            isBlocked: !1,
            onClose: r,
            threadKey: f !== void 0 ? d("I64").of_string(f) : void 0,
            userName: g,
          }),
        });
      if (!p) return null;
      return n === !0
        ? h.jsx(m, babelHelpers["extends"]({}, a))
        : h.jsx(c("PolarisBlockDialogContainer.react"), {
            fbidV2: o,
            onClose: function () {
              return l(a);
            },
            relationship: b,
            userId: p,
            username: g,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.userToBlock;
      b = b.username;
      var e =
          b != null && b !== ""
            ? d("PolarisLinkBuilder").buildUserLink(b)
            : null,
        f,
        g;
      e != null && e !== ""
        ? ((g = d("PolarisGenericStrings").CANCEL_TEXT),
          (f = {
            onConfirm: function () {
              d("PolarisNavigationUtils").openURLWithFullPageReload(e), l(a);
            },
            confirmLabel: d("PolarisFRXWebReportStrings")
              .VIEW_PROFILE_BUTTON_TEXT,
          }))
        : ((g = d("PolarisGenericStrings").CLOSE_TEXT), (f = {}));
      return h.jsx(
        c("PolarisConfirmDialog.react"),
        babelHelpers["extends"]({}, f, {
          body: d("PolarisFRXWebReportStrings")
            .BLOCK_USER_THROUGH_PROFILE_MODAL_CONTENT,
          cancelLabel: g,
          onClose: function () {
            return l(a);
          },
          title: d("PolarisFRXWebReportStrings").getBlockUserModalTitle(b),
        })
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXInAppEscalationReportDropdownSelector.react",
  ["cx", "fbt", "IGDSChevronIcon", "PolarisIGCoreText", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this) || this;
        b.state = { optionsVisible: !1, inputText: "" };
        return b;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this,
          b = function () {
            var b = a.props.tags || null;
            return j.jsx("div", {
              className: "_ac4n",
              id: "dropdownOptions",
              children: b.map(function (a, b) {
                return j.jsx(
                  "span",
                  {
                    className: "_ac4o",
                    onClick: function () {
                      return e(a);
                    },
                    role: "presentation",
                    children: j.jsxs("div", {
                      className: "_ac4p",
                      children: [
                        j.jsx(c("PolarisIGCoreText").Body, {
                          color: "ig-primary-text",
                          weight: "normal",
                          zeroMargin: !0,
                          children: a.title ? a.title.text : "",
                        }),
                        j.jsx("div", { className: "_ac4q" }),
                        j.jsx(c("PolarisIGCoreText").Body, {
                          color: "ig-secondary-text",
                          size: "footnote",
                          weight: "light",
                          zeroMargin: !0,
                          children: a.subtitle ? a.subtitle.text : "",
                        }),
                      ],
                    }),
                  },
                  a.tag_type
                );
              }),
            });
          },
          d = function () {
            a.setState(function (a) {
              return { optionsVisible: !a.optionsVisible };
            });
          },
          e = function (b) {
            a.setState(function (a) {
              return {
                optionsVisible: !a.optionsVisible,
                inputText: b.title ? b.title.text : "",
              };
            }),
              a.props.handleSetReportSubtype(b.tag_type);
          };
        return j.jsxs("span", {
          children: [
            j.jsxs("span", {
              className: "_ac4f",
              id: "optionList",
              onClick: d,
              role: "presentation",
              children: [
                j.jsxs("label", {
                  className: "_ac4g",
                  children: [
                    j.jsx("span", {
                      className:
                        (this.props.showError === !1 &&
                        this.state.inputText === ""
                          ? "_ac4h"
                          : "") +
                        (this.state.inputText !== "" ? " _ac4i" : "") +
                        (this.props.showError === !0 ? " _ac4l" : ""),
                      children:
                        this.props.showError === !0
                          ? this.props.errorMessage
                          : this.props.placeholder,
                    }),
                    j.jsx("span", {
                      className:
                        (this.props.showError === !1 ? "_ac4j" : "") +
                        (this.props.showError === !0 ? " _ac4k" : ""),
                      children: this.props.showError
                        ? this.props.placeholder
                        : this.state.inputText,
                    }),
                  ],
                }),
                j.jsx("div", {
                  className:
                    (this.state.optionsVisible ? "" : "_ac4r") +
                    (this.state.optionsVisible ? " _ac4s" : ""),
                  children: j.jsx(c("IGDSChevronIcon"), {
                    alt: i._("chevron"),
                    color: "ig-tertiary-text",
                    direction: this.state.optionsVisible ? "down" : "right",
                    size: 17,
                  }),
                }),
              ],
            }),
            this.state.optionsVisible ? b() : null,
          ],
        });
      };
      return b;
    })(j.Component);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXInAppEscalationReportTextAreaInput.react",
  ["cx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.$1 = function (a) {
          var b = a.currentTarget.value;
          c.setState(function (a) {
            if (b.length > 0 && !a.hasContent) return { hasContent: !0 };
            else if (b.length === 0) return { hasContent: !1 };
            return {};
          });
        };
        c.$2 = function (a) {
          c.setState({ isFocused: a });
        };
        c.state = { hasContent: !!b.value, isFocused: !1 };
        return c;
      }
      var c = b.prototype;
      c.render = function () {
        var a = this;
        return i.jsxs("div", {
          className: "_acg-",
          children: [
            i.jsx("span", {
              className:
                (this.props.showError === !0 ? "_ach1" : "") +
                (!this.state.isFocused &&
                !this.state.hasContent &&
                this.props.showError === !1
                  ? " _ach2"
                  : "") +
                ((this.state.isFocused || this.state.hasContent) &&
                this.props.showError === !1
                  ? " _ach3"
                  : ""),
              children:
                this.props.showError === !0
                  ? this.props.errorMessage
                  : this.props.placeholder,
            }),
            i.jsx("textarea", {
              className:
                (this.props.showError !== !0 ? "_acg_" : "") +
                (this.props.showError === !0 ? " _ach0" : ""),
              id: this.props.id,
              name: this.props.name,
              onBlur: function () {
                return a.$2(!1);
              },
              onChange: this.props.onChange,
              onClick: function () {
                return a.$2(!0);
              },
              onInput: this.$1,
              placeholder: this.props.showError
                ? this.props.placeholder
                : this.state.isFocused || this.state.hasContent
                ? null
                : this.props.placeholder,
              value: this.props.value,
            }),
          ],
        });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportBaseScreenModal.react",
  [
    "cx",
    "IGCoreModal",
    "IGDSBox.react",
    "PolarisFRXWebReportConstants",
    "PolarisFRXWebReportStrings",
    "PolarisIGCoreModalHeader",
    "PolarisUA",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 4,
      k = 4,
      l = 4,
      m = !1;
    function a(a, b, c) {
      a = a || {};
      var e = a.response;
      a = a.type;
      if (
        a ===
        d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .CONFIRMATION
      )
        return { headerEnabled: !1 };
      a = e || {};
      e = a.title;
      a =
        (e == null ? void 0 : e.text) ||
        d("PolarisFRXWebReportStrings").DEFAULT_MODAL_HEADER_TEXT;
      return {
        headerEnabled: !0,
        titleText: a,
        withBackButton: b,
        onBackButton: c,
      };
    }
    function n(a) {
      a.onClose && a.onClose();
    }
    function b(a) {
      var b,
        e = d("PolarisUA").isMobile() ? "large" : "default";
      return i.jsx(c("IGCoreModal"), {
        "aria-label": (b = a.headerParams.titleText) != null ? b : void 0,
        "data-testid": void 0,
        disablePopInAnimation: !0,
        onClose: function () {
          return n(a);
        },
        size: e,
        children: i.jsxs("div", {
          className: "_acgx" + (e === "large" ? " _acqj" : ""),
          children: [
            i.jsx(o, babelHelpers["extends"]({}, a)),
            i.jsx(p, babelHelpers["extends"]({}, a)),
          ],
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.headerParams,
        d = b.headerEnabled,
        e = b.titleText,
        f = b.onBackButton;
      b = b.withBackButton;
      b = b === void 0 ? m : b;
      if (!d) return null;
      d =
        b && f
          ? {
              onBack: function () {
                return f();
              },
            }
          : void 0;
      return i.jsx(
        c("PolarisIGCoreModalHeader"),
        babelHelpers["extends"](
          {
            onClose: function () {
              return n(a);
            },
          },
          d,
          { children: i.jsx(i.Fragment, { children: e }) }
        )
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      var b = a.children;
      a = a.disableDefaultBodyPaddingMargin;
      a = a === void 0 ? !1 : a;
      var d, e;
      a ? (d = e = a = 0) : ((d = j), (a = l), (e = k));
      return i.jsx("div", {
        className: "_acgy",
        children: i.jsx("div", {
          className: "_acgz",
          children: i.jsx(c("IGDSBox.react"), {
            marginBottom: e,
            marginTop: a,
            paddingX: d,
            position: "relative",
            children: b,
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g.DEFAULT_BODY_PADDING_X = j;
    g.DEFAULT_BODY_MARGIN_BOTTOM = k;
    g.DEFAULT_BODY_MARGIN_TOP = l;
    g.getDefaultScreenModalHeaderParamsFromScreenPayload = a;
    g.FRXReportBaseScreenModal = b;
  },
  98
);
__d(
  "PolarisFRXReportMainButton.react",
  ["PolarisFRXReportModalLinkUtils", "PolarisIGCoreButton", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a["data-testid"];
      b = a.disabled;
      var e = a.href,
        f = a.onClick,
        g = a.primaryButton,
        i = a.spinner;
      a = a.text;
      var j;
      e != null &&
        e !== "" &&
        b !== !0 &&
        (j = {
          href: e,
          target: d("PolarisFRXReportModalLinkUtils").shouldLinkUseBlankTarget(
            e
          )
            ? "_blank"
            : void 0,
        });
      return h.jsx(
        c("PolarisIGCoreButton"),
        babelHelpers["extends"]({}, j, {
          color: ((e = g) != null ? e : !0)
            ? "ig-primary-button"
            : "ig-secondary-button",
          "data-testid": void 0,
          disabled: !!b,
          loading: !!i,
          onClick: function () {
            return f && f();
          },
          children: a,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalPromptButton.react",
  [
    "PolarisFRXReportMainButton.react",
    "PolarisFRXWebReportStateSelectors",
    "PolarisReactRedux",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = d("PolarisReactRedux").useSelector(
          d("PolarisFRXWebReportStateSelectors").getIsFRXScreenRequestProcessing
        ),
        e = a.actionType,
        f = a.canSubmitOnClick,
        g = a.disabled;
      g = g === void 0 ? !1 : g;
      var i = a.href,
        j = a.label,
        k = a.onSubmit;
      a = a.primaryButton;
      a = a === void 0 ? !0 : a;
      return h.jsx(c("PolarisFRXReportMainButton.react"), {
        disabled: g || (f && b),
        href: i,
        onClick: function () {
          f && k && k(e);
        },
        primaryButton: a,
        spinner: f && b,
        text: j,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalRichTextRenderer.react",
  [
    "IGDSText.react",
    "PolarisFRXReportModalLinkUtils",
    "PolarisFastLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        NONE: 0,
        BOLD: 1,
        ITALIC: 2,
        UNDERLINE: 4,
        CODE: 8,
        STRIKETHROUGH: 16,
        SUBSCRIPT: 32,
        SUPERSCRIPT: 64,
        QUOTE: 128,
      },
      j = {
        "#262626": "ig-primary-text",
        "#8E8E8E": "ig-secondary-text",
        "#ed4956": "ig-error-or-destructive",
        "#00376B": "ig-link",
        "#58C322": "DEPRECATED_green",
        "#0095F6": "ig-primary-button",
        "#c7c7c7": "ig-tertiary-text",
        "#000000": "web-always-black",
        "#ffffff": "web-always-white",
      };
    function a(a) {
      var b = a.children,
        e = a.className,
        f = a.color,
        g = a["data-testid"];
      g = a.href;
      var k = a.onClick;
      a = a.style;
      var l = b,
        m = g !== "" && g != null,
        n;
      !m && f != null && (n = f in j ? j[f] : void 0);
      if (a != null && (f != null || m))
        switch (a) {
          case i.BOLD:
            l = h.jsx(c("IGDSText.react").BodyEmphasized, {
              color: n,
              children: b,
            });
            break;
          case i.SUBSCRIPT:
            l = h.jsx(c("IGDSText.react").Body2, { color: n, children: b });
            break;
          default:
            l = h.jsx(c("IGDSText.react").Body, { color: n, children: b });
            break;
        }
      return g !== "" && g != null
        ? h.jsx(c("PolarisFastLink.react"), {
            className: e,
            "data-testid": void 0,
            href: g,
            onClick: function () {
              return k && k();
            },
            target: d(
              "PolarisFRXReportModalLinkUtils"
            ).shouldLinkUseBlankTarget(g)
              ? "_blank"
              : void 0,
            children: l,
          })
        : h.jsx(h.Fragment, { children: l });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalRichText.react",
  [
    "PolarisFRXReportModalRichTextRenderer.react",
    "PolarisTextWithEntities.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      a = a.token;
      if (!a) return null;
      var b = a.color,
        c = a.style,
        d = a.uri;
      b == null && (b = a["3"]);
      c == null && (c = a["1"]);
      (d === "" || d == null) && (d = a["2"]);
      c != null && (c = parseInt(c, 10));
      return { color: b, style: c, uri: d };
    }
    function j(a) {
      if (!a) return [];
      var b = [];
      a.forEach(function (a) {
        var c = a.length,
          d = a.offset;
        a = i(a) || {};
        var e = a.color,
          f = a.style;
        a = a.uri;
        c != null &&
          d != null &&
          (a != null || e != null || f != null) &&
          b.push({ length: c, offset: d, override_uri: a, color: e, style: f });
      });
      return b;
    }
    function k(a, b) {
      var d = b.color,
        e = b.override_uri;
      b = b.style;
      return h.jsx(c("PolarisFRXReportModalRichTextRenderer.react"), {
        color: d,
        href: e,
        style: b,
        children: a,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      a = a.richText;
      if (a == null) return null;
      var b = a.markup;
      a = a.text;
      return a == null
        ? null
        : h.jsx(c("PolarisTextWithEntities.react"), {
            rangeRenderer: k,
            ranges: j(b),
            text: a,
            textRenderer: function (a) {
              return h.jsx(h.Fragment, { children: a });
            },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXInAppEscalationReportTypeScreenModal.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSDivider.react",
    "IGDSVideoChatPanoOutlineIcon",
    "IGDSXPanoFilledIcon",
    "PolarisFRXInAppEscalationReportDropdownSelector.react",
    "PolarisFRXInAppEscalationReportTextAreaInput.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportModalPromptButton.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXWebReportStrings",
    "PolarisFRXWebReportUtils",
    "PolarisIGCoreSVGIconButton",
    "PolarisIGCoreText",
    "PolarisImageFileForm.react",
    "Promise",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useState,
      m = 12;
    function a(a) {
      var e = a.headerParams,
        f = a.onClose,
        g = a.onSubmitScreen;
      a = a.screenPayload;
      var h = l(""),
        n = h[0],
        o = h[1];
      h = l([]);
      var p = h[0],
        q = h[1];
      h = l("");
      var r = h[0],
        s = h[1];
      h = l(!1);
      var t = h[0],
        u = h[1];
      h = l(!1);
      var v = h[0],
        w = h[1];
      h = l(!1);
      var x = h[0],
        y = h[1];
      (function () {
        return f && f();
      });
      h = d(
        "PolarisFRXWebReportUtils"
      ).getPromptButtonRenderPropsFromScreenPayload(a);
      (function (a) {
        a.preventDefault();
      });
      function z(a) {
        a != null && a.length > 0 && A(a);
      }
      var A = k(
          function (a) {
            b("Promise")
              .all(
                [].slice.call(a).map(function (a) {
                  return new (b("Promise"))(function (b, c) {
                    var d = new FileReader();
                    d.addEventListener("load", function () {
                      b({ name: a.name, type: a.type, data: d.result });
                    });
                    d.readAsDataURL(a);
                  });
                })
              )
              .then(function (a) {
                return p.concat(a);
              })
              .then(function (a) {
                q(a);
              });
          },
          [q, p]
        ),
        B = function () {
          return p.length === 0
            ? null
            : j.jsx("div", {
                children: j.jsx("ul", {
                  className: "_abmy",
                  children: p.map(function (a, b) {
                    return j.jsxs(
                      "div",
                      {
                        className: "_abmz",
                        children: [
                          j.jsx("div", { className: "_abm-" }),
                          j.jsx("div", {
                            className: "_abm_",
                            children: j.jsx("div", {
                              className: "_abn0",
                              children: j.jsx(c("PolarisIGCoreSVGIconButton"), {
                                onClick: function () {
                                  return D(b);
                                },
                                children: j.jsx(c("IGDSXPanoFilledIcon"), {
                                  alt: i._("Remove"),
                                  color: "web-always-white",
                                  size: m,
                                }),
                              }),
                            }),
                          }),
                          C(a),
                        ],
                      },
                      a.name + b
                    );
                  }),
                }),
              });
        },
        C = function (a) {
          return a.type.match(/image\//i)
            ? j.jsx("img", { alt: a.name, className: "_abn1", src: a.data })
            : j.jsxs("div", {
                children: [
                  j.jsx(c("IGDSVideoChatPanoOutlineIcon"), {}),
                  j.jsx("figcaption", { children: a.name }),
                ],
              });
        },
        D = function (a) {
          var b = p.slice(0);
          b.splice(a, 1);
          q(b);
        };
      (function () {
        return j.jsxs("div", {
          children: [
            j.jsxs(c("IGDSBox.react"), {
              direction: "row",
              marginBottom: 4,
              marginTop: 4,
              position: "relative",
              children: [
                j.jsxs(c("IGDSBox.react"), {
                  alignContent: "start",
                  position: "relative",
                  children: [
                    j.jsx(c("PolarisIGCoreText").Body, {
                      color: "ig-primary-text",
                      weight: "semibold",
                      zeroMargin: !0,
                      children: d("PolarisFRXWebReportStrings")
                        .IN_APP_ESCALATIONS_ATTACH_EVIDENCE_TEXT,
                    }),
                    j.jsx(c("PolarisIGCoreText").Body2, {
                      color: "ig-secondary-text",
                      zeroMargin: !0,
                      children: d("PolarisFRXWebReportStrings")
                        .DEFAULT_OPTIONAL_FIELD_TEXT,
                    }),
                  ],
                }),
                j.jsx(c("IGDSBox.react"), {
                  marginStart: "auto",
                  position: "relative",
                  children: j.jsx(
                    d("PolarisImageFileForm.react").ImageFileForm,
                    {
                      acceptMimeTypes: ["image/*", "video/*"],
                      multiple: !0,
                      onFileChange: z,
                      children: j.jsx(c("PolarisIGCoreText").Body, {
                        color: "ig-primary-button",
                        textAlign: "right",
                        weight: "semibold",
                        zeroMargin: !0,
                        children: d("PolarisFRXWebReportStrings")
                          .IN_APP_ESCALATIONS_ADD_PHOTOS_TEXT,
                      }),
                    }
                  ),
                }),
              ],
            }),
            j.jsx(c("IGDSBox.react"), { position: "relative", children: B() }),
            j.jsx(c("IGDSDivider.react"), {}),
          ],
        });
      });
      (function (a) {
        u(!t);
      });
      var E = function (a) {
          return g({
            attachments: p.map(function (a) {
              return a.data;
            }),
            evidenceText: n,
            reportSubtype: r,
          });
        },
        F = function () {
          var a = !0;
          (r.trim() === "" || r === null) && (y(!0), (a = !1));
          (n.trim() === "" || n === null) && (w(!0), (a = !1));
          return a;
        };
      h = h
        ? j.jsx(
            c("PolarisFRXReportModalPromptButton.react"),
            babelHelpers["extends"]({}, h, {
              onSubmit: function () {
                F() && E();
              },
            })
          )
        : null;
      var G = a.response.report_subtype_tags || [],
        H = a.response.subtype_selector_header
          ? a.response.subtype_selector_header.text
          : "";
      return j.jsxs(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: e,
          onClose: f,
          children: [
            j.jsx(c("PolarisIGCoreText").Body, {
              color: "ig-primary-text",
              zeroMargin: !0,
              children: j.jsx(c("PolarisFRXReportModalRichText.react"), {
                richText: a.response.header,
              }),
            }),
            j.jsx("br", {}),
            j.jsx(c("IGDSDivider.react"), {}),
            j.jsx(c("IGDSBox.react"), {
              direction: "column",
              marginBottom: 4,
              marginTop: 4,
              position: "relative",
              children: j.jsx(
                c("PolarisFRXInAppEscalationReportDropdownSelector.react"),
                {
                  "aria-label": "select subtype of report",
                  errorMessage: d("PolarisFRXWebReportStrings")
                    .IN_APP_ESCALATIONS_ERROR_SELECT_SUBTYPE_ERROR_TEXT,
                  handleSetReportSubtype: function (a) {
                    s(a != null ? a : ""), y(!1);
                  },
                  placeholder: H,
                  showError: x,
                  tags: G,
                }
              ),
            }),
            j.jsx(c("IGDSDivider.react"), {}),
            j.jsx(c("IGDSBox.react"), {
              flex: "grow",
              marginBottom: 4,
              marginTop: 4,
              position: "relative",
              children: j.jsx(
                c("PolarisFRXInAppEscalationReportTextAreaInput.react"),
                {
                  "aria-label": "evidence_text",
                  errorMessage: d("PolarisFRXWebReportStrings")
                    .IN_APP_ESCALATIONS_PLEASE_EXPLAIN_ERROR_TEXT,
                  id: "evidence_input",
                  name: "evidence_text",
                  onChange: function (a) {
                    o(a.target.value), a.target.value.trim() !== "" && w(!1);
                  },
                  placeholder: d("PolarisFRXWebReportStrings")
                    .IN_APP_ESCALATIONS_EXPLAIN_PROMPT_TEXT,
                  showError: v,
                  value: n,
                }
              ),
            }),
            j.jsx(c("IGDSDivider.react"), {}),
            j.jsx(c("IGDSBox.react"), {
              marginBottom: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_MARGIN_BOTTOM,
              marginTop: 4,
              paddingX: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_PADDING_X,
              position: "relative",
            }),
            h,
          ],
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXNotifyGuardianFollowupModal.react",
  [
    "PolarisConfirmDialog.react",
    "PolarisDirectLogger",
    "PolarisFRXWebReportStrings",
    "PolarisReactRedux",
    "gkx",
    "nullthrows",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      a.onClose && a.onClose();
    }
    function j(a, b, c) {
      var e = new (d("PolarisDirectLogger").DirectLogger)("DirectActions");
      a.onNotify
        ? (a.onNotify(b, c),
          e.logError(
            "notify_guardian_send_click_event",
            "Notify Guardian Send Click Event"
          ))
        : e.logError(
            "notify_guardian_dont_send_click_event",
            "Notify Guardian Cancel Click Event"
          );
    }
    function a(a) {
      var b = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        }),
        e = c("nullthrows")(b == null ? void 0 : b.guardianId);
      b = {
        onConfirm: function () {
          j(a, !0, e);
        },
        confirmLabel: d("PolarisFRXWebReportStrings").SEND_BUTTON_TEXT,
      };
      var f = d("PolarisFRXWebReportStrings").DONT_SEND_BUTTON_TEXT,
        g = c("gkx")("7623");
      return h.jsx(
        c("PolarisConfirmDialog.react"),
        babelHelpers["extends"]({}, b, {
          body: d("PolarisFRXWebReportStrings").getNotifyGuardianModalBodyText(
            a.guardianUsername,
            a.reportedTagTitle,
            a.reportedUsername,
            g
          ),
          cancelLabel: f,
          onClose: function () {
            return j(a, !1, e);
          },
          onModalClose: function () {
            return i(a);
          },
          title: g
            ? d("PolarisFRXWebReportStrings")
                .NOTIFY_GUARDIAN_MODAL_TITLE_NO_QUESTION
            : d("PolarisFRXWebReportStrings").NOTIFY_GUARDIAN_MODAL_TITLE,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalOptionList.react",
  ["cx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.asRadio;
      b = b === void 0 ? !1 : b;
      a = a.children;
      var c = "_ac7r";
      return b
        ? i.jsx("fieldset", { className: c, children: a })
        : i.jsx("div", { className: c, role: "list", children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalOptionListItem.react",
  [
    "cx",
    "fbt",
    "IGDSBox.react",
    "IGDSChevronIcon",
    "IGDSSpinner.react",
    "PolarisFRXReportModalRichTextRenderer.react",
    "PolarisIGCoreRadioButton",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { BUTTON: "button", RADIO: "radio", LINK: "link" },
      l = { DEFAULT: "default", RED: "red", GREY: "grey" };
    function m(a) {
      a.onSelect && a.onSelect();
    }
    function n(a) {
      a = a.href;
      return a != null && a !== "" ? k.LINK : k.BUTTON;
    }
    function a(a) {
      var b = a.children,
        d = a["data-testid"];
      d = a.href;
      var e = a.variant;
      e = e === void 0 ? n(a) : e;
      var f = a.textColor;
      f = f === void 0 ? l.DEFAULT : f;
      var g = a.disabled,
        h = e === k.RADIO,
        i = 4;
      b = b;
      h ||
        (g === !0
          ? (b = j.jsx(c("IGDSBox.react"), {
              alignContent: "center",
              alignItems: "center",
              direction: "row",
              paddingX: i,
              paddingY: i,
              position: "relative",
              children: j.jsx(c("IGDSBox.react"), {
                flex: "grow",
                position: "relative",
                children: b,
              }),
            }))
          : (b = j.jsxs(c("IGDSBox.react"), {
              alignContent: "center",
              alignItems: "center",
              direction: "row",
              paddingX: i,
              paddingY: i,
              position: "relative",
              children: [
                j.jsx(c("IGDSBox.react"), {
                  flex: "grow",
                  position: "relative",
                  children: b,
                }),
                j.jsx(o, babelHelpers["extends"]({}, a)),
              ],
            })));
      f =
        "_abn2" +
        (f === l.RED ? " _abn3" : "") +
        (f === l.GREY ? " _abn4" : "");
      if (h) {
        h = a.selected;
        var p = a.value;
        p = p === void 0 ? "" : p;
        return j.jsx("div", {
          className: f,
          "data-testid": void 0,
          children: j.jsx(c("PolarisIGCoreRadioButton"), {
            checked: h,
            onChange: function () {
              return m(a);
            },
            paddingX: i,
            paddingY: i,
            size: "large",
            textSize_DEPRECATED: "body",
            value: p,
            weight_DEPRECATED: "normal",
            zeroMargin: !0,
            children: j.jsx(j.Fragment, { children: b }),
          }),
        });
      } else if (e === k.LINK && d != null && d !== "")
        return j.jsx(c("PolarisFRXReportModalRichTextRenderer.react"), {
          className: f,
          "data-testid": void 0,
          href: d,
          onClick: function () {
            return m(a);
          },
          children: b,
        });
      return j.jsx("button", {
        className: f,
        "data-testid": void 0,
        disabled: g,
        onClick: function () {
          return m(a);
        },
        role: "listitem",
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      a = a.loading;
      a === !0
        ? (a = j.jsx(c("IGDSSpinner.react"), { size: "small" }))
        : (a = j.jsx(c("IGDSChevronIcon"), {
            alt: i._("chevron"),
            color: "ig-tertiary-text",
            direction: "right",
            size: 17,
          }));
      return j.jsx(c("IGDSBox.react"), {
        alignContent: "center",
        alignItems: "center",
        direction: "row",
        marginStart: 2,
        position: "relative",
        children: a,
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.OPTION_LIST_ITEM_VARIANTS = k;
    g.OPTION_LIST_ITEM_TEXT_COLORS = l;
    g.FRXReportModalOptionListItem = a;
  },
  98
);
__d(
  "PolarisFRXReportModalFollowUpActionSection.react",
  [
    "IGDSBox.react",
    "PolarisFRXReportModalOptionList.react",
    "PolarisFRXReportModalOptionListItem.react",
    "PolarisFRXWebReportActions",
    "PolarisFRXWebReportStateSelectors",
    "PolarisFRXWebReportStrings",
    "PolarisReactRedux",
    "PolarisReportConstants",
    "polarisRelationshipSelectors",
    "polarisUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      a = a.reportedOwner.id;
      return d("polarisRelationshipSelectors").getRelationship(
        b.relationships,
        a
      );
    }
    function j(a, b) {
      a = a.onSelectFollowupAction;
      a && a(b);
    }
    function a(a) {
      var b = a.followUpActions,
        e = d("PolarisReactRedux").useSelector(function (b) {
          return d("polarisRelationshipSelectors").followedByViewer(i(a, b));
        }),
        f = d("PolarisReactRedux").useSelector(function (b) {
          return d("polarisRelationshipSelectors").isBlockedByViewer(i(a, b));
        }),
        g = d("PolarisReactRedux").useSelector(function (a) {
          return d("polarisUserSelectors").getViewer(a);
        });
      b = b
        .map(function (b, c) {
          var i = b.action_type,
            n = b.beta_redirect_uri,
            o = b.name;
          if (i == null) return null;
          o = o == null ? void 0 : o.text;
          var p = function () {
            return j(a, b);
          };
          c = "followup-" + c;
          switch (i) {
            case d("PolarisReportConstants").FRXActionType.LEARN_MORE_ADS:
            case d("PolarisReportConstants").FRXActionType.LEARN_MORE_EDUCATION:
            case d("PolarisReportConstants").FRXActionType.OPEN_CROWDTANGLE:
            case d(
              "PolarisReportConstants"
            ).FRXActionType.SELF_INJURY_EDUCATION_ACTION:
            case d(
              "PolarisReportConstants"
            ).FRXActionType.EATING_DISORDER_EDUCATION_ACTION:
              return o == null || o === "" || n == null || n === ""
                ? null
                : h.jsx(
                    d("PolarisFRXReportModalOptionListItem.react")
                      .FRXReportModalOptionListItem,
                    { href: n, onSelect: p, children: o },
                    c
                  );
            case d("PolarisReportConstants").FRXActionType.UNFOLLOW:
              return !e ? null : h.jsx(k, { labelText: o, onSelect: p }, c);
            case d("PolarisReportConstants").FRXActionType.BLOCK_ACTOR:
              return f ? null : h.jsx(l, { labelText: o, onSelect: p }, c);
            case d("PolarisReportConstants").FRXActionType.NOTIFY_GUARDIAN:
              return (g == null ? void 0 : g.isSupervisedUser) !== !0
                ? null
                : h.jsx(m, { labelText: o, onSelect: p }, c);
            default:
              return null;
          }
        })
        .filter(function (a) {
          return a != null;
        });
      return b.length === 0
        ? null
        : h.jsxs(h.Fragment, {
            children: [
              h.jsx(c("IGDSBox.react"), {
                marginTop: 11,
                position: "relative",
              }),
              h.jsx(c("PolarisFRXReportModalOptionList.react"), {
                children: b,
              }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.labelText,
        c = a.onSelect;
      a =
        b != null && b !== ""
          ? b
          : d("PolarisFRXWebReportStrings").DEFAULT_UNFOLLOW_BUTTON_TEXT;
      var e = d("PolarisReactRedux").useDispatch();
      return h.jsx(
        d("PolarisFRXReportModalOptionListItem.react")
          .FRXReportModalOptionListItem,
        {
          onSelect: function () {
            c(),
              e(
                d("PolarisFRXWebReportActions").doStartUnfollowFollowupAction()
              );
          },
          children: a,
        }
      );
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.labelText,
        c = a.onSelect;
      a =
        b != null && b !== ""
          ? b
          : d("PolarisFRXWebReportStrings").DEFAULT_BLOCK_BUTTON_TEXT;
      var e = d("PolarisReactRedux").useDispatch();
      return h.jsx(
        d("PolarisFRXReportModalOptionListItem.react")
          .FRXReportModalOptionListItem,
        {
          onSelect: function () {
            c(),
              e(d("PolarisFRXWebReportActions").doStartBlockFollowupAction());
          },
          textColor: d("PolarisFRXReportModalOptionListItem.react")
            .OPTION_LIST_ITEM_TEXT_COLORS.RED,
          children: a,
        }
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.labelText,
        c = a.onSelect;
      a =
        b != null && b !== ""
          ? b
          : d("PolarisFRXWebReportStrings").DEFAULT_NOTIFY_GUARDIAN_BUTTON_TEXT;
      var e = d("PolarisReactRedux").useDispatch();
      b = d("PolarisReactRedux").useSelector(
        d("PolarisFRXWebReportStateSelectors").getDisableNotifyGuardianOption
      );
      var f =
        b === !0
          ? d("PolarisFRXReportModalOptionListItem.react")
              .OPTION_LIST_ITEM_TEXT_COLORS.GREY
          : d("PolarisFRXReportModalOptionListItem.react")
              .OPTION_LIST_ITEM_TEXT_COLORS.DEFAULT;
      return h.jsx(
        d("PolarisFRXReportModalOptionListItem.react")
          .FRXReportModalOptionListItem,
        {
          disabled: b,
          onSelect: function () {
            c(),
              e(
                d(
                  "PolarisFRXWebReportActions"
                ).doStartNotifyGuardianFollowupAction()
              );
          },
          textColor: f,
          children: a,
        }
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportConfirmationScreenModal.react",
  [
    "IGDSBox.react",
    "IGDSCircleCheckPanoOutlineIcon",
    "IGDSText.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportMainButton.react",
    "PolarisFRXReportModalFollowUpActionSection.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXWebReportStrings",
    "PolarisFRXWebReportUtils",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      b = b.action_type;
      if (b == null) return;
      a = a.screenPayload.response;
      d("PolarisFRXWebReportUtils").handleFRXGuidedAction({
        context: a == null ? void 0 : a.context,
        action_type: b,
      });
    }
    function a(a) {
      var b = a.headerParams,
        e = a.onClose,
        f = function () {
          return e && e();
        };
      return h.jsxs(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          disableDefaultBodyPaddingMargin: !0,
          headerParams: b,
          onClose: f,
          children: [
            h.jsx(j, babelHelpers["extends"]({}, a)),
            h.jsx(k, babelHelpers["extends"]({}, a)),
            h.jsx(c("IGDSBox.react"), {
              marginBottom: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_MARGIN_BOTTOM,
              marginTop: 4,
              paddingX: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_PADDING_X,
              position: "relative",
              children: h.jsx(c("PolarisFRXReportMainButton.react"), {
                "data-testid": void 0,
                onClick: f,
                text: d("PolarisGenericStrings").CLOSE_TEXT,
              }),
            }),
          ],
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.screenPayload;
      a = a || {};
      a = a.response;
      a = a || {};
      var b = a.follow_up_actions_title;
      a = a.subtitle;
      a = a
        ? h.jsx(c("IGDSBox.react"), {
            marginTop: 6,
            position: "relative",
            children: h.jsx(c("IGDSText.react").Section, {
              textAlign: "center",
              zeroMargin: !0,
              children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                richText: a,
              }),
            }),
          })
        : null;
      var e = null;
      b &&
        ((e = h.jsx(c("IGDSText.react").Body, {
          color: "secondaryText",
          textAlign: "center",
          zeroMargin: !0,
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: b,
          }),
        })),
        a &&
          (e = h.jsx(c("IGDSBox.react"), {
            marginTop: 2,
            position: "relative",
            children: e,
          })));
      return h.jsx(c("IGDSBox.react"), {
        marginTop: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_MARGIN_TOP,
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsxs(c("IGDSBox.react"), {
          alignContent: "center",
          alignItems: "center",
          marginTop: 6,
          position: "relative",
          children: [
            h.jsx(c("IGDSCircleCheckPanoOutlineIcon"), {
              alt: d("PolarisFRXWebReportStrings").CHECKMARK_ICON_ALT_TEXT,
              color: "ig-success",
              size: 48,
            }),
            a,
            e,
          ],
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.reportedOwner,
        d = a.screenPayload.response;
      d = d == null ? void 0 : d.follow_up_actions;
      return !d || d.length === 0
        ? null
        : h.jsx(c("PolarisFRXReportModalFollowUpActionSection.react"), {
            followUpActions: d,
            onSelectFollowupAction: function (b) {
              i(a, b);
            },
            reportedOwner: b,
          });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportConfirmationScreenModalForSupervision.react",
  [
    "IGDSBox.react",
    "IGDSCircleCheckPanoOutlineIcon",
    "IGDSText.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportMainButton.react",
    "PolarisFRXReportModalFollowUpActionSection.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXWebReportStrings",
    "PolarisFRXWebReportUtils",
    "PolarisGenericStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      b = b.action_type;
      if (b == null) return;
      a = a.screenPayload.response;
      d("PolarisFRXWebReportUtils").handleFRXGuidedAction({
        context: a == null ? void 0 : a.context,
        action_type: b,
      });
    }
    function a(a) {
      var b = a.headerParams,
        e = a.onClose,
        f = function () {
          return e && e();
        };
      return h.jsxs(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          disableDefaultBodyPaddingMargin: !0,
          headerParams: b,
          onClose: f,
          children: [
            h.jsx(j, babelHelpers["extends"]({}, a)),
            h.jsx(k, babelHelpers["extends"]({}, a)),
            h.jsx(c("IGDSBox.react"), {
              marginBottom: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_MARGIN_BOTTOM,
              marginTop: 4,
              paddingX: d("PolarisFRXReportBaseScreenModal.react")
                .DEFAULT_BODY_PADDING_X,
              position: "relative",
              children: h.jsx(c("PolarisFRXReportMainButton.react"), {
                onClick: f,
                text: d("PolarisGenericStrings").CLOSE_TEXT,
              }),
            }),
          ],
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      a = a.screenPayload;
      a = a || {};
      a = a.response;
      a = a || {};
      var b = a.follow_up_actions_title;
      a = a.subtitle;
      a = a
        ? h.jsx(c("IGDSBox.react"), {
            marginTop: 6,
            position: "relative",
            children: h.jsx(c("IGDSText.react").Section, {
              textAlign: "center",
              zeroMargin: !0,
              children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                richText: a,
              }),
            }),
          })
        : null;
      var e = null;
      b &&
        ((e = h.jsx(c("IGDSText.react").Body, {
          color: "secondaryText",
          textAlign: "center",
          zeroMargin: !0,
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: b,
          }),
        })),
        a &&
          (e = h.jsx(c("IGDSBox.react"), {
            marginTop: 2,
            position: "relative",
            children: e,
          })));
      return h.jsx(c("IGDSBox.react"), {
        marginTop: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_MARGIN_TOP,
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsxs(c("IGDSBox.react"), {
          alignContent: "center",
          alignItems: "center",
          marginTop: 6,
          position: "relative",
          children: [
            h.jsx(c("IGDSCircleCheckPanoOutlineIcon"), {
              alt: d("PolarisFRXWebReportStrings").CHECKMARK_ICON_ALT_TEXT,
              color: "ig-success",
              size: 48,
            }),
            a,
            e,
          ],
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.reportedOwner,
        d = a.screenPayload.response;
      d = d == null ? void 0 : d.follow_up_actions;
      return !d || d.length === 0
        ? null
        : h.jsx(c("PolarisFRXReportModalFollowUpActionSection.react"), {
            followUpActions: d,
            onSelectFollowupAction: function (b) {
              i(a, b);
            },
            reportedOwner: b,
          });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalScreenContentSectionList.react",
  ["IGDSBox.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 4;
    function a(a) {
      var b = a.sections;
      a = a.marginBetween;
      var d = a === void 0 ? i : a;
      a = b
        .filter(function (a) {
          return !!a;
        })
        .map(function (a, b) {
          var e =
            b > 0 && d !== 0
              ? h.jsx(c("IGDSBox.react"), {
                  marginTop: d,
                  position: "relative",
                })
              : null;
          return h.jsxs(h.Fragment, { children: [e, a] }, "section-" + b);
        });
      return h.jsx(h.Fragment, { children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalInterstitialScreen.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportModalPromptButton.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXReportModalScreenContentSectionList.react",
    "PolarisFRXWebReportUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 2,
      j = 100;
    function a(a) {
      var b = a.headerParams,
        e = a.onClose,
        f = a.screenPayload,
        g = f.response;
      g = g || {};
      var i = g.body,
        n = g.image_url,
        o = g.paragraphs,
        p = g.subtitle;
      g = g.tip_number;
      o = o ? o[0] : null;
      var q = j;
      g = i || g === 3 ? j : j * 2;
      q =
        n != null && n !== ""
          ? h.jsx(c("IGDSBox.react"), {
              alignContent: "center",
              alignItems: "center",
              position: "relative",
              children: h.jsx("img", { alt: "", height: q, src: n, width: g }),
            })
          : null;
      n = p ? h.jsx(k, { subtitle: p }) : null;
      g = i ? h.jsx(m, { body: i }) : o ? h.jsx(m, { body: o }) : null;
      p = d(
        "PolarisFRXWebReportUtils"
      ).getPromptButtonRenderPropsFromScreenPayload(f);
      i = p ? h.jsx(l, { parentProps: a, promptButtonProps: p }) : null;
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: b,
          onClose: e,
          children: h.jsx(
            c("PolarisFRXReportModalScreenContentSectionList.react"),
            { sections: [q, n, g, i] }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      a = a.subtitle;
      return h.jsx(c("IGDSBox.react"), {
        marginTop: i,
        position: "relative",
        children: h.jsx(c("IGDSText.react").Section, {
          textAlign: "center",
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: a,
          }),
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.parentProps;
      a = a.promptButtonProps;
      var d = b.onSubmitScreen;
      b = b.screenPayload;
      b = b.response;
      var e = b.tip_number;
      return h.jsx(
        c("PolarisFRXReportModalPromptButton.react"),
        babelHelpers["extends"]({}, a, {
          onSubmit: function (a) {
            return d({ tipNumber: e, selectedPromptButtonActionType: a });
          },
        })
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      a = a.body;
      a = a
        ? h.jsx(c("IGDSBox.react"), {
            position: "relative",
            children: h.jsx("div", {
              role: "listitem",
              children: h.jsx(c("IGDSBox.react"), {
                direction: "row",
                position: "relative",
                children: h.jsx(c("IGDSBox.react"), {
                  flex: "grow",
                  position: "relative",
                  children: h.jsx(c("IGDSText.react").Body, {
                    color: "secondaryText",
                    textAlign: "center",
                    zeroMargin: !0,
                    children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                      richText: a,
                    }),
                  }),
                }),
              }),
            }),
          })
        : null;
      return h.jsx(c("IGDSBox.react"), { position: "relative", children: a });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModalPolicyEducationSection.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXReportModalScreenContentSectionList.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 2,
      j = 1,
      k = "\u2022";
    function l(a, b) {
      a = a.first_paragraph;
      var d = [];
      [a].forEach(function (a) {
        if (
          !a ||
          (a == null ? void 0 : a.text) == null ||
          (a == null ? void 0 : a.text) === ""
        )
          return;
        d.push(
          h.jsx(c("IGDSText.react"), {
            color: "secondaryText",
            size: "body",
            weight: b ? "semibold" : "normal",
            zeroMargin: !0,
            children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
              richText: a,
            }),
          })
        );
      });
      return d;
    }
    function m(a) {
      a = a.policies;
      a = a === void 0 ? [] : a;
      if (!a || a.length === 0) return [];
      var b = [];
      a.forEach(function (a) {
        a = a.title;
        if (!a) return;
        b.push(
          h.jsx("div", {
            role: "listitem",
            children: h.jsxs(c("IGDSBox.react"), {
              direction: "row",
              position: "relative",
              children: [
                h.jsx(c("IGDSBox.react"), {
                  marginEnd: 2,
                  position: "relative",
                  children: h.jsx("div", {
                    "aria-hidden": "true",
                    children: h.jsx(c("IGDSText.react").Body2, {
                      color: "secondaryText",
                      zeroMargin: !0,
                      children: k,
                    }),
                  }),
                }),
                h.jsx(c("IGDSBox.react"), {
                  flex: "grow",
                  position: "relative",
                  children: h.jsx(c("IGDSText.react").Body2, {
                    color: "secondaryText",
                    zeroMargin: !0,
                    children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                      richText: a,
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      });
      return b;
    }
    function a(a) {
      a = a.policyEducation;
      var b = a.second_paragraph,
        d = a.title;
      d = d
        ? h.jsx(c("IGDSText.react").Section, {
            zeroMargin: !0,
            children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
              richText: d,
            }),
          })
        : null;
      b = b
        ? h.jsxs(c("IGDSBox.react"), {
            marginTop: d ? 1 : 0,
            position: "relative",
            children: [
              h.jsx(c("IGDSText.react"), {
                color: "secondaryText",
                size: "body",
                weight: "normal",
                zeroMargin: !0,
                children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                  richText: b,
                }),
              }),
              h.jsx(c("IGDSBox.react"), {
                height: d ? 2 : 10,
                position: "relative",
              }),
            ],
          })
        : null;
      var e = m(a);
      a = l(a, e.length > 0);
      a =
        a.length > 0
          ? h.jsx(c("IGDSBox.react"), {
              marginTop: d ? i : 0,
              position: "relative",
              children: h.jsx(
                c("PolarisFRXReportModalScreenContentSectionList.react"),
                { marginBetween: i, sections: a }
              ),
            })
          : null;
      e =
        e.length > 0
          ? h.jsx(c("IGDSBox.react"), {
              marginTop: d || a ? j : 0,
              position: "relative",
              children: h.jsx("div", {
                role: "list",
                children: h.jsx(
                  c("PolarisFRXReportModalScreenContentSectionList.react"),
                  { marginBetween: j, sections: e }
                ),
              }),
            })
          : null;
      return h.jsxs(c("IGDSBox.react"), {
        position: "relative",
        children: [d, b, a, e],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportPolicyEducationScreenModal.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportModalPolicyEducationSection.react",
    "PolarisFRXReportModalPromptButton.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXReportModalScreenContentSectionList.react",
    "PolarisFRXWebReportUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.headerParams,
        e = a.onClose,
        f = a.screenPayload,
        g = f.response;
      g = g || {};
      var k = g.policy_education;
      g = g.subtitle;
      g = g ? h.jsx(i, { subtitle: g }) : null;
      var l = k
        ? h.jsx(c("PolarisFRXReportModalPolicyEducationSection.react"), {
            policyEducation: k,
          })
        : null;
      f = d(
        "PolarisFRXWebReportUtils"
      ).getPromptButtonRenderPropsFromScreenPayload(f);
      a = f ? h.jsx(j, { parentProps: a, promptButtonProps: f }) : null;
      f = null;
      if (k) {
        k = k.education_button;
        if (k) {
          var m;
          m = {
            href: k.url,
            canSubmitOnClick: !1,
            label:
              (m = (m = k.title) == null ? void 0 : m.text) != null ? m : "",
            actionType: k.action_type,
            primaryButton: !1,
          };
          f = h.jsx(
            c("PolarisFRXReportModalPromptButton.react"),
            babelHelpers["extends"]({}, m)
          );
        }
      }
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: b,
          onClose: e,
          children: h.jsx(
            c("PolarisFRXReportModalScreenContentSectionList.react"),
            { sections: [g, l, a, f] }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function i(a) {
      a = a.subtitle;
      return h.jsx(c("IGDSBox.react"), {
        marginTop: 2,
        position: "relative",
        children: h.jsx(c("IGDSText.react").Section, {
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: a,
          }),
        }),
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.parentProps;
      a = a.promptButtonProps;
      var d = b.onSubmitScreen;
      return h.jsx(
        c("PolarisFRXReportModalPromptButton.react"),
        babelHelpers["extends"]({}, a, {
          onSubmit: function (a) {
            return d(a);
          },
        })
      );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportSelectVictimScreenModal.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXReportModalScreenContentSectionList.react",
    "PolarisReactRedux",
    "PolarisReportConstants",
    "PolarisReportUserImpersonationSearchBox.react",
    "PolarisSearchActions",
    "PolarisSearchConstants",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function j(a) {
      a = a.allSearchResults;
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        d.type === "USER_RESULT" && b.push(d);
      }
      return b;
    }
    function k(a) {
      var b = a.onClearSearch;
      i(
        function () {
          return function () {
            b();
          };
        },
        [b]
      );
    }
    function a(a) {
      k(a);
      var b = a.headerParams,
        e = a.onClose,
        f = a.onSelectVictim,
        g = a.reportedOwner,
        i = a.screenPayload;
      i = i.response;
      var l = i || {};
      l = l.subtitle;
      i = i.context;
      g = g.id;
      l = l
        ? h.jsx(c("IGDSBox.react"), {
            marginTop: 2,
            position: "relative",
            children: h.jsx(c("IGDSText.react").BodyEmphasized, {
              children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
                richText: l,
              }),
            }),
          })
        : null;
      var m = !1;
      if (i != null)
        try {
          i = JSON.parse(i);
          i = i.tags;
          m = i.includes(
            d("PolarisReportConstants").IGUserImpersonationSomeoneIKnowTag
              .tag_type
          );
        } catch (a) {
          m = !1;
        }
      i = !m;
      m = h.jsx(c("PolarisReportUserImpersonationSearchBox.react"), {
        onSelectVictim: function (a) {
          return f(a);
        },
        reportedUserID: g,
        searchBoxPlaceHolder: d("PolarisSearchConstants")
          .IMPERSONATION_SEARCH_TEXT,
        userSearchResults: j(a),
        verifiedOnly: i,
      });
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: b,
          onClose: function () {
            return e && e();
          },
          children: h.jsx(
            c("PolarisFRXReportModalScreenContentSectionList.react"),
            { sections: [l, m] }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a = a.search.results;
      return { allSearchResults: a };
    }
    e = { onClearSearch: d("PolarisSearchActions").clearSearch };
    f = d("PolarisReactRedux").connect(b, e)(a);
    g["default"] = f;
  },
  98
);
__d(
  "InstagramAdHideResponseFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("3449");
    b = d("FalcoLoggerInternal").create("instagram_ad_hide_response", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "PolarisFRXReportTagSelectionScreenModal.react",
  [
    "IGDSBox.react",
    "IGDSText.react",
    "InstagramAdHideResponseFalcoEvent",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportModalOptionList.react",
    "PolarisFRXReportModalOptionListItem.react",
    "PolarisFRXReportModalPolicyEducationSection.react",
    "PolarisFRXReportModalPromptButton.react",
    "PolarisFRXReportModalRichText.react",
    "PolarisFRXReportModalScreenContentSectionList.react",
    "PolarisFRXWebReportConstants",
    "PolarisFRXWebReportStateSelectors",
    "PolarisFRXWebReportUtils",
    "PolarisReactRedux",
    "PolarisReportConstants",
    "isEmpty",
    "polarisAdsSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useRef,
      k = e.useState,
      l = null,
      m = "";
    function n(a, b, c, e) {
      var f = a.isFRXScreenRequestProcessing,
        g = a.onSubmitScreen;
      a = a.screenPayload.response;
      var h = b.setStateSelectedTagTitle;
      b = b.setStateSelectedTagType;
      var i = c.tag_type;
      c = c.title;
      c = (c = c == null ? void 0 : c.text) != null ? c : "";
      if (f || i == null || i === "") return;
      b(i);
      h(c);
      d("PolarisFRXWebReportUtils").logFRXTagSelected({
        context: a == null ? void 0 : a.context,
        selected_tag_type: i,
      });
      g &&
        !e &&
        g({
          selectedTagTypes: [i],
          selectedPromptButtonActionType: null,
          selectedTagTitles: [c],
        });
    }
    function o(a, b, c) {
      a = a.onSubmitScreen;
      var d = b.selectedTagTitle;
      b = b.selectedTagType;
      a &&
        b != null &&
        b !== "" &&
        a({
          selectedTagTypes: [b],
          selectedPromptButtonActionType: c,
          selectedTagTitles: [d],
        });
    }
    function p() {
      var a = k(l),
        b = a[0];
      a = a[1];
      var c = k(m),
        d = c[0];
      c = c[1];
      return {
        selectedTagType: b,
        setStateSelectedTagType: a,
        selectedTagTitle: d,
        setStateSelectedTagTitle: c,
      };
    }
    function q(a, b) {
      var c = b.setStateSelectedTagTitle,
        d = b.setStateSelectedTagType,
        e = a.screenPayload.frxScreenRequestID,
        f = j(),
        g = f.current;
      i(
        function () {
          (f.current = e), e !== g && (d(l), c(m));
        },
        [e, g, d, c]
      );
    }
    function a(a) {
      var b = p();
      q(a, b);
      var c = a.headerParams,
        e = a.onClose;
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          disableDefaultBodyPaddingMargin: !0,
          headerParams: c,
          onClose: e,
          children: h.jsx(r, { parentProps: a, parentState: b }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r(a) {
      var b,
        e = a.parentProps;
      a = a.parentState;
      var f = e.screenPayload,
        g = f.response;
      g = g || {};
      var i = g.policy_education,
        j = g.report_tags,
        k = g.second_subtitle;
      g = g.subtitle;
      b =
        g && !c("isEmpty")((b = g.text) == null ? void 0 : b.trim())
          ? h.jsx(s, { subtitle: g })
          : null;
      g =
        k && !c("isEmpty")((g = k.text) == null ? void 0 : g.trim())
          ? h.jsx(t, { secondSubtitle: k })
          : null;
      k =
        j && j.length > 0
          ? h.jsx(u, { parentProps: e, parentState: a, reportTags: j })
          : null;
      j = i ? h.jsx(v, { policyEducation: i }) : null;
      i = d(
        "PolarisFRXWebReportUtils"
      ).getPromptButtonRenderPropsFromScreenPayload(f);
      f = i
        ? h.jsx(w, { parentProps: e, parentState: a, promptButtonProps: i })
        : null;
      e =
        b != null
          ? d("PolarisFRXReportBaseScreenModal.react").DEFAULT_BODY_MARGIN_TOP
          : 0;
      a =
        j || f
          ? d("PolarisFRXReportBaseScreenModal.react")
              .DEFAULT_BODY_MARGIN_BOTTOM
          : 0;
      return h.jsx(c("IGDSBox.react"), {
        marginBottom: a,
        marginTop: e,
        position: "relative",
        children: h.jsx(
          c("PolarisFRXReportModalScreenContentSectionList.react"),
          { sections: [b, g, k, j, f] }
        ),
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s(a) {
      a = a.subtitle;
      return h.jsx(c("IGDSBox.react"), {
        marginTop: 2,
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsx(c("IGDSText.react").Section, {
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: a,
          }),
        }),
      });
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function t(a) {
      a = a.secondSubtitle;
      return h.jsx(c("IGDSBox.react"), {
        marginTop: 0,
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsx(c("IGDSText.react"), {
          color: "secondaryText",
          size: "body",
          weight: "normal",
          zeroMargin: !0,
          children: h.jsx(c("PolarisFRXReportModalRichText.react"), {
            richText: a,
          }),
        }),
      });
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function u(a) {
      var b = a.parentProps,
        e = a.parentState;
      a = a.reportTags;
      var f = b.frxMetadata,
        g = b.isFRXScreenRequestProcessing,
        i = b.screenPayload.response;
      i = i || {};
      i = i.style;
      var j = e.selectedTagType,
        k =
          i ===
          d("PolarisFRXWebReportConstants").FRX_TAG_SELECTION_STYLE_INTS
            .RADIO_BUTTONS,
        l = d("polarisAdsSelectors").useFRXReportAdLoggingParams(
          f.object_id,
          f.location
        );
      i = a.map(function (a, i) {
        var m = a.tag_type,
          o = a.title,
          p = j === m,
          q = g && p && !k,
          r = k
            ? d("PolarisFRXReportModalOptionListItem.react")
                .OPTION_LIST_ITEM_VARIANTS.RADIO
            : d("PolarisFRXReportModalOptionListItem.react")
                .OPTION_LIST_ITEM_VARIANTS.BUTTON;
        i = "tag-" + i;
        return h.jsx(
          d("PolarisFRXReportModalOptionListItem.react")
            .FRXReportModalOptionListItem,
          {
            "data-testid": void 0,
            loading: q,
            onSelect: function () {
              f.object_type === d("PolarisReportConstants").FRXObjectType.AD &&
                c("InstagramAdHideResponseFalcoEvent").log(function () {
                  return babelHelpers["extends"](
                    { response: m, ad_id: f.object_id },
                    l
                  );
                }),
                n(b, e, a, k);
            },
            selected: p,
            value: i,
            variant: r,
            children: o == null ? void 0 : o.text,
          },
          i
        );
      });
      return h.jsx(c("PolarisFRXReportModalOptionList.react"), {
        asRadio: k,
        children: i,
      });
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function v(a) {
      a = a.policyEducation;
      return h.jsx(c("IGDSBox.react"), {
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsx(
          c("PolarisFRXReportModalPolicyEducationSection.react"),
          { policyEducation: a }
        ),
      });
    }
    v.displayName = v.name + " [from " + f.id + "]";
    function w(a) {
      var b = a.parentProps,
        e = a.parentState;
      a = a.promptButtonProps;
      var f = e.selectedTagType;
      return h.jsx(c("IGDSBox.react"), {
        paddingX: d("PolarisFRXReportBaseScreenModal.react")
          .DEFAULT_BODY_PADDING_X,
        position: "relative",
        children: h.jsx(
          c("PolarisFRXReportModalPromptButton.react"),
          babelHelpers["extends"]({}, a, {
            disabled: !f,
            onSubmit: function (a) {
              return o(b, e, a);
            },
          })
        ),
      });
    }
    w.displayName = w.name + " [from " + f.id + "]";
    function b(a) {
      return {
        isFRXScreenRequestProcessing: d(
          "PolarisFRXWebReportStateSelectors"
        ).getIsFRXScreenRequestProcessing(a),
      };
    }
    e = d("PolarisReactRedux").connect(b, null)(a);
    g["default"] = e;
  },
  98
);
__d(
  "PolarisFRXReportUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [
      "ig_ad_ip_violation",
      "ig_ad_ip_violation",
      "ig_intellectual_property_v1",
      "ig_ar_effect_ip_violation",
      "ig_intellectual_property_direct_message",
      "ig_hashtag_intellectual_property",
      "ig_ad_spam",
      "ig_spam_v3",
      "ig_spam_direct_message",
      "ig_spam",
      "ig_bullying_or_harassment_comment_v3",
      "ig_bullying_or_harassment_direct_message",
      "ig_hashtag_bullying_or_harassment",
      "ig_ar_effect_harassment_or_bullying",
      "ig_harassment_or_bullying",
      "ig_nudity_v2",
      "ig_nudity_direct_message",
      "ig_clips_audio_page_nudity",
      "ig_clips_effect_page_nudity",
      "ig_clips_prompt_page_nudity",
      "ig_hashtag_nudity",
      "ig_ar_effect_nudity_or_pornography",
      "ig_nudity",
      "ig_ad_sexually_inappropriate",
      "ig_iab_sexually_inappropriate",
      "product_sexualized_content_or_adult_products",
      "bi_commerce_sexualized_or_adult_content",
      "inappropriate_content",
      "ig_commerce_ugc_graphic_content",
      "bi_commerce_abusive_or_harmful",
      "ig_violence_parent",
      "ig_ad_violent_prohibited",
      "ig_ar_effect_violence",
      "ig_violence_direct_message",
      "ig_hashtag_violence",
      "ig_violence_v3",
      "ig_violence",
      "ig_dangerous_org_or_individual",
      "ig_hate_speech_v3",
      "ig_ar_effect_hate_speech",
      "ig_hate_speech_direct_message",
      "ig_hashtag_hate_speech",
      "ig_hate_speech",
      "ig_i_dont_like_it_v3",
      "ig_ar_effect_i_dont_like_it",
      "ig_i_dont_like_it_direct_message",
      "ig_ad_offensive",
      "ig_self_injury_v3",
      "ig_ar_effect_self_injury",
      "ig_hashtag_self_injury",
      "ig_self_injury",
      "ig_self_injury_direct_message",
      "ig_ad_scam_misleading",
      "ig_product_scam_fraud_v2",
      "ig_product_scam_fraud_reportable",
      "ig_product_scam_fraud_feedback_only",
      "ig_iab_scam_misleading",
      "bi_commerce_misleading_or_possible_scam",
      "ig_sale_of_illegal_or_regulated_goods_v3",
      "ig_sale_of_illegal_or_regulated_goods_direct_message",
      "ig_sale_of_illegal_or_regulated_goods_v2",
      "ig_ar_effect_drugs",
      "ig_ar_effect_firearms",
      "bi_commerce_alcohol_tobacco_and_weapons",
      "bi_commerce_animal_products_or_sales",
      "ig_false_news",
      "ig_ar_effect_false_information",
      "ig_report_report_as_unlawful",
      "ig_netzdg",
      "ig_cpa",
      "bi_commerce_discriminatory_listing",
      "discrimination",
      "ig_something_else",
      "something_else",
      "ig_ad_political",
      "ig_escalations_create_detailed_report",
      "ig_eating_disorder",
      "ig_nft_metadata_mismatch",
      "bi_commerce_buying_or_selling",
      "ig_interference_flagger",
      "ig_commerce_ugc_manipulation",
      "ig_commerce_ugc_irrelevance",
      "ig_commerce_review_irrelevant",
      "ig_commerce_fake_review",
      "ig_commerce_product_answer_irrelevant",
      "ig_commerce_product_question_irrelevant",
      "ig_user_impersonation",
      "ig_unwanted_joiner",
      "ig_iab_excessive_ads",
      "ig_iab_other",
      "page_place_inaccurate_info",
      "bi_commerce_service_or_job",
      "product_no_intent_to_sale",
      "bi_commerce_appears_to_be_counterfeit",
      "bi_commerce_health_or_wellness",
      "bi_commerce_other_prohibited",
      "bi_commerce_no_service_offered",
      "bi_commerce_health_or_medical",
      "information_misuse",
      "dont_recognize_activity",
    ];
    function a(a) {
      return g.includes(a);
    }
    f.shouldUseTagType = a;
  },
  66
);
__d(
  "PolarisFRXReportScreenModal.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisFRXInAppEscalationReportTypeScreenModal.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportConfirmationScreenModal.react",
    "PolarisFRXReportModalInterstitialScreen.react",
    "PolarisFRXReportPolicyEducationScreenModal.react",
    "PolarisFRXReportSelectVictimScreenModal.react",
    "PolarisFRXReportTagSelectionScreenModal.react",
    "PolarisFRXReportUtils",
    "PolarisFRXWebReportActions",
    "PolarisFRXWebReportConstants",
    "PolarisFRXWebReportStateSelectors",
    "PolarisFRXWebReportStrings",
    "PolarisFRXWebReportUtils",
    "PolarisReactRedux",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function j(a) {
      a.onClose && a.onClose();
    }
    function k(a) {
      var b = a.isFRXScreenRequestProcessing;
      a = a.onGoBackOneFRXScreen;
      a && !b && a();
    }
    function l(a, b) {
      var e = a.frxMetadata,
        f = a.isFRXScreenRequestProcessing,
        g = a.onRequestNextFRXScreen,
        h = a.onStoreReportedTagTitle,
        i = a.reportedTagTitle;
      a = a.screenPayload;
      if (f) return;
      f = a || {};
      a = f.response;
      f = f.type;
      a = a || {};
      a = a.context;
      var j = c("gkx")("7623");
      if (j) {
        j = b == null ? void 0 : b.selectedTagTypes;
        j = j != null && j.length > 0 ? j[0] : null;
        var k = b == null ? void 0 : b.selectedTagTitles;
        k = k != null && k.length > 0 ? k[0] : "";
        i === "" &&
          j != null &&
          d("PolarisFRXReportUtils").shouldUseTagType(j) &&
          k !== "" &&
          h(k);
      }
      i = d(
        "PolarisFRXWebReportUtils"
      ).getNextFRXScreenInputRequestTypeFromScreenPayloadType(f);
      if (!i) return;
      g({
        context: a,
        frxPromptRequestType: i,
        metadata: e,
        optionalParams: b,
      });
    }
    function a(a) {
      var b = a.frxMetadata,
        e = a.hasMountedScreenFlow,
        f = a.hasPreviousScreens,
        g = a.isFRXScreenRequestProcessing,
        o = a.reportedOwner,
        p = a.screenPayload,
        q = a.showFRXDropOffSurveyModal,
        r = a.threadId;
      f = d(
        "PolarisFRXReportBaseScreenModal.react"
      ).getDefaultScreenModalHeaderParamsFromScreenPayload(p, f, function () {
        return k(a);
      });
      var s = i(!1),
        t = s[0],
        u = s[1],
        v = function () {
          u(!0), j(a);
        };
      s = h.jsx(n, { headerParams: f, onClose: v });
      if (!p)
        return g || !e || t ? h.jsx(m, { headerParams: f, onClose: v }) : s;
      g = p.type;
      switch (g) {
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .TAG_SELECTION:
          return h.jsx(c("PolarisFRXReportTagSelectionScreenModal.react"), {
            frxMetadata: b,
            headerParams: f,
            onClose: function () {
              v(), q != null && q();
            },
            onSubmitScreen: function (b) {
              l(a, babelHelpers["extends"]({}, b));
            },
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .POLICY_EDUCATION:
          return h.jsx(c("PolarisFRXReportPolicyEducationScreenModal.react"), {
            headerParams: f,
            onClose: function () {
              v(), q != null && q();
            },
            onSubmitScreen: function (b) {
              l(a, {
                selectedPromptButtonActionType: b,
                thread_id: r,
                responsible_id: o.id,
              });
            },
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .PROCESS_EDUCATION:
          return h.jsx(c("PolarisFRXReportModalInterstitialScreen.react"), {
            headerParams: f,
            onClose: v,
            onSubmitScreen: function (b) {
              l(a, babelHelpers["extends"]({}, b));
            },
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .ESCALATION:
          return h.jsx(c("PolarisFRXReportModalInterstitialScreen.react"), {
            headerParams: f,
            onClose: v,
            onSubmitScreen: function (b) {
              l(a, { selectedPromptButtonActionType: b });
            },
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .CONFIRMATION:
          return h.jsx(c("PolarisFRXReportConfirmationScreenModal.react"), {
            headerParams: f,
            onClose: v,
            reportedOwner: o,
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .SELECT_VICTIM:
          return h.jsx(c("PolarisFRXReportSelectVictimScreenModal.react"), {
            headerParams: f,
            onClose: function () {
              v(), q != null && q();
            },
            onSelectVictim: function (b) {
              l(a, { selectedVictimID: b.pk });
            },
            reportedOwner: o,
            screenPayload: p,
          });
        case d("PolarisFRXWebReportConstants").FRX_SCREEN_PAYLOAD_TYPE_INTS
          .IN_APP_ESCALATION_REPORT_TYPE:
          return h.jsx(
            c("PolarisFRXInAppEscalationReportTypeScreenModal.react"),
            {
              headerParams: f,
              onClose: v,
              onSubmitScreen: function (b) {
                l(a, babelHelpers["extends"]({}, b));
              },
              screenPayload: p,
            }
          );
        default:
          return s;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.headerParams;
      a = a.onClose;
      var e = 122;
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: b,
          onClose: a,
          children: h.jsx(c("IGDSBox.react"), {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            minHeight: e,
            position: "relative",
            children: h.jsx(c("IGDSSpinner.react"), {}),
          }),
        }
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.headerParams;
      a = a.onClose;
      return h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: b,
          onClose: a,
          children: d("PolarisFRXWebReportStrings").DEFAULT_ERROR_MESSAGE_TEXT,
        }
      );
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function b(a) {
      return {
        isFRXScreenRequestProcessing: d(
          "PolarisFRXWebReportStateSelectors"
        ).getIsFRXScreenRequestProcessing(a),
        reportedTagTitle: d(
          "PolarisFRXWebReportStateSelectors"
        ).getReportedTagTitle(a),
      };
    }
    e = {
      onRequestNextFRXScreen: d("PolarisFRXWebReportActions")
        .doRequestNextFRXScreenAction,
      onStoreReportedTagTitle: d("PolarisFRXWebReportActions")
        .doStoreReportedTagTitle,
    };
    f = d("PolarisReactRedux").connect(b, e)(a);
    g["default"] = f;
  },
  98
);
__d(
  "PolarisFRXUnfollowUserFollowupModal.react",
  [
    "PolarisConnectionsLogger",
    "PolarisUnfollowDialog_DEPRECATED.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.onClose;
      a = a.userToUnfollow;
      a = a.id;
      return !a
        ? null
        : h.jsx(c("PolarisUnfollowDialog_DEPRECATED.react"), {
            analyticsContext: d("PolarisConnectionsLogger")
              .CONNECTIONS_CONTAINER_MODULES.frx_web_reporting,
            analyticsExtra: {},
            onClose: function () {
              return b && b();
            },
            userId: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisFRXReportModal.react",
  [
    "IGDSBox.react",
    "IGDSSpinner.react",
    "PolarisFRXBlockUserFollowupModal.react",
    "PolarisFRXNotifyGuardianFollowupModal.react",
    "PolarisFRXReportBaseScreenModal.react",
    "PolarisFRXReportConfirmationScreenModalForSupervision.react",
    "PolarisFRXReportScreenModal.react",
    "PolarisFRXUnfollowUserFollowupModal.react",
    "PolarisFRXWebReportActions",
    "PolarisFRXWebReportState",
    "PolarisFRXWebReportStateSelectors",
    "PolarisFRXWebReportStrings",
    "PolarisReactRedux",
    "PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId",
    "PolarisReportConstants",
    "PolarisStoryActions",
    "gkx",
    "nullthrows",
    "polarisUserSelectors",
    "qex",
    "react",
    "usePolarisAnalyticsContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useMemo,
      k = e.useState;
    function l(a, b) {
      var c = a.frxLocation,
        e = a.frxObjectType,
        f = a.isAfterConfirmationScreen,
        g = a.onClose,
        h = a.onDoReportingModalClosedAction;
      a = a.reportedObjectID;
      c === d("PolarisReportConstants").FRXLocation.STORY &&
        e === d("PolarisReportConstants").FRXObjectType.AD &&
        f &&
        b(d("PolarisStoryActions").navigateReel(!0, "automatic_forward"));
      h({
        isAfterConfirmationScreen: f,
        reportedObjectID: a,
        reportedObjectType: e,
      });
      g && g();
    }
    function m(a) {
      a = a.onGoBackOneFRXScreen;
      a();
    }
    function n(a, b, d) {
      if (b === !0) {
        var e = a.onDoDisableNotifyGuardianOption;
        e();
      }
      e = a.onDoOpenNotifyGuardianFollowupModalToPreviousScreen;
      var f = a.reportedOwner.id,
        g = c("gkx")("7623");
      e(b, d, g ? f : "-1", g ? a.reportedTagTitle : "");
    }
    function o(a, b, c, d) {
      var e = a.onRequestInitFRXScreen;
      i(
        function () {
          b || (e(d), c(!0));
        },
        [c, b, d, e]
      );
    }
    function a(a) {
      var b = k(!1),
        e = b[0];
      b = b[1];
      var f = a.containerModule,
        g = a.currScreenPayload,
        p = a.currRenderStep,
        q = a.screenHistorySize,
        r = a.reportedObjectID,
        s = a.frxEntryPoint,
        t =
          s === void 0
            ? d("PolarisReportConstants").FRXEntryPoint.CHEVRON_BUTTON
            : s,
        u = a.frxLocation,
        v = a.frxObjectType;
      s = a.reportedOwner;
      var w = a.showFRXDropOffSurveyModal,
        x = a.useSimpleBlockModalWithoutRefresh,
        y = a.threadId,
        z = c("usePolarisAnalyticsContext")(),
        A = s.id,
        B = d("PolarisReactRedux").useDispatch(),
        C = j(
          function () {
            var a;
            return {
              entry_point: t,
              location: u,
              object_type: v,
              object_id: r,
              container_module: (a = f) != null ? a : z,
            };
          },
          [f, z, t, u, v, r]
        ),
        D = c("qex")._("605") || !1;
      i(
        function () {
          D ||
            B(
              d(
                "PolarisRelationshipActionGetRelationshipInfoWithViewerByUserId"
              ).getRelationshipInfoWithViewerByUserId(A)
            );
        },
        [B, A, D]
      );
      o(a, e, b, C);
      b = function () {
        return l(a, B);
      };
      var E = q > 1;
      E = d(
        "PolarisFRXReportBaseScreenModal.react"
      ).getDefaultScreenModalHeaderParamsFromScreenPayload(g, E, function () {
        return m(a);
      });
      var F = h.jsx(
          d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
          {
            headerParams: E,
            onClose: b,
            children: d("PolarisFRXWebReportStrings")
              .DEFAULT_ERROR_MESSAGE_TEXT,
          }
        ),
        G = 122;
      G = h.jsx(
        d("PolarisFRXReportBaseScreenModal.react").FRXReportBaseScreenModal,
        {
          headerParams: E,
          onClose: b,
          children: h.jsx(c("IGDSBox.react"), {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            minHeight: G,
            position: "relative",
            children: h.jsx(c("IGDSSpinner.react"), {}),
          }),
        }
      );
      var H = d("PolarisReactRedux").useSelector(function (a) {
        return d("polarisUserSelectors").getViewer(a);
      });
      H !== null &&
        (H == null ? void 0 : H.guardianId) !== null &&
        (H == null ? void 0 : H.guardianId) !== "" &&
        B(
          d("PolarisFRXWebReportActions").doStoreGuardianInformation(
            c("nullthrows")(H == null ? void 0 : H.guardianId)
          )
        );
      H = d("PolarisReactRedux").useSelector(
        d("PolarisFRXWebReportStateSelectors").getGuardianUsername
      );
      switch (p) {
        case d("PolarisFRXWebReportState").FRX_WEB_REPORT_RENDER_STEP_STRS
          .UNFOLLOW:
          return h.jsx(c("PolarisFRXUnfollowUserFollowupModal.react"), {
            onClose: b,
            userToUnfollow: s,
          });
        case d("PolarisFRXWebReportState").FRX_WEB_REPORT_RENDER_STEP_STRS
          .BLOCK:
          return h.jsx(c("PolarisFRXBlockUserFollowupModal.react"), {
            onClose: b,
            threadId: y,
            userToBlock: s,
            useSimpleBlockModalWithoutRefresh: x,
          });
        case d("PolarisFRXWebReportState").FRX_WEB_REPORT_RENDER_STEP_STRS
          .NOTIFY_GUARDIAN:
          return h.jsx(c("PolarisFRXNotifyGuardianFollowupModal.react"), {
            guardianUsername: H,
            onClose: b,
            onNotify: function (b, c) {
              return n(a, b, c);
            },
            reportedTagTitle: a.reportedTagTitle,
            reportedUsername: s == null ? void 0 : s.username,
          });
        case d("PolarisFRXWebReportState").FRX_WEB_REPORT_RENDER_STEP_STRS
          .NOTIFY_GUARDIAN_FOLLOWUP:
          return !g
            ? !e
              ? G
              : F
            : h.jsx(
                c(
                  "PolarisFRXReportConfirmationScreenModalForSupervision.react"
                ),
                {
                  headerParams: E,
                  onClose: b,
                  reportedOwner: s,
                  screenPayload: g,
                }
              );
        case d("PolarisFRXWebReportState").FRX_WEB_REPORT_RENDER_STEP_STRS
          .DEFAULT:
        default:
          return h.jsx(c("PolarisFRXReportScreenModal.react"), {
            frxMetadata: C,
            hasMountedScreenFlow: e,
            hasPreviousScreens: q > 1,
            onClose: b,
            onGoBackOneFRXScreen: function () {
              return m(a);
            },
            reportedOwner: s,
            screenPayload: g,
            showFRXDropOffSurveyModal: w,
            threadId: y,
          });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return {
        currRenderStep: d(
          "PolarisFRXWebReportStateSelectors"
        ).getCurrRenderStep(a),
        currScreenPayload: d(
          "PolarisFRXWebReportStateSelectors"
        ).getCurrScreenPayload(a),
        isAfterConfirmationScreen: d(
          "PolarisFRXWebReportStateSelectors"
        ).getIsConfirmationScreenInHistoryStack(a),
        screenHistorySize: d(
          "PolarisFRXWebReportStateSelectors"
        ).getScreenHistorySize(a),
        reportedTagTitle: d(
          "PolarisFRXWebReportStateSelectors"
        ).getReportedTagTitle(a),
      };
    }
    e = {
      onGoBackOneFRXScreen: d("PolarisFRXWebReportActions")
        .doGoBackOneFRXScreenAction,
      onDoOpenNotifyGuardianFollowupModalToPreviousScreen: d(
        "PolarisFRXWebReportActions"
      ).doOpenNotifyGuardianFollowupModalToPreviousScreenAction,
      onDoReportingModalClosedAction: d("PolarisFRXWebReportActions")
        .doReportingModalClosedAction,
      onRequestInitFRXScreen: d("PolarisFRXWebReportActions")
        .doRequestInitFRXScreenAction,
      onDoDisableNotifyGuardianOption: d("PolarisFRXWebReportActions")
        .doDisableNotifyGuardianOption,
    };
    f = d("PolarisReactRedux").connect(b, e)(a);
    g["default"] = f;
  },
  98
);
