/*FB_PKG_DELIM*/

__d(
  "PolarisIGSetWhatsAppLinkMutation_instagramRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6714597755235600";
  },
  null
);
__d(
  "PolarisIGSetWhatsAppLinkMutation.graphql",
  ["PolarisIGSetWhatsAppLinkMutation_instagramRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "linking_surface",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "verification_code",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "whatsapp_number",
        },
        e = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "linking_surface",
                variableName: "linking_surface",
              },
              {
                kind: "Variable",
                name: "verification_code",
                variableName: "verification_code",
              },
              {
                kind: "Variable",
                name: "whatsapp_number",
                variableName: "whatsapp_number",
              },
            ],
            concreteType: "SetIgWaLinkWebResponsePayload",
            kind: "LinkedField",
            name: "set_ig_wa_link_web",
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
          argumentDefinitions: [a, c, d],
          kind: "Fragment",
          metadata: null,
          name: "PolarisIGSetWhatsAppLinkMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [d, c, a],
          kind: "Operation",
          name: "PolarisIGSetWhatsAppLinkMutation",
          selections: e,
        },
        params: {
          id: b("PolarisIGSetWhatsAppLinkMutation_instagramRelayOperation"),
          metadata: {},
          name: "PolarisIGSetWhatsAppLinkMutation",
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
  "IGDGroupBlockAlertDialog.bs",
  [
    "fbt",
    "CometLink.react",
    "IGDSActionDialog.react",
    "IGDSBox.react",
    "IGDSDialogItem.react",
    "IGDSText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.onClick,
        e = a.onClose;
      a = h._("Someone you've blocked is in this group");
      var f = h._(
          "You've blocked someone in this group. If you stay in this group, you'll be able to see their messages and they can see yours."
        ),
        g = h._("Stay in group");
      return i.jsxs(c("IGDSActionDialog.react"), {
        body: f,
        onModalClose: e,
        title: a,
        children: [
          i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 8,
            width: "100%",
            children: i.jsx(c("CometLink.react"), {
              href: "https://help.instagram.com/447613741984126",
              children: i.jsx(c("IGDSText.react"), {
                color: "primaryButton",
                children: h._("Learn more"),
              }),
            }),
          }),
          i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
            color: "primaryButton",
            onClick: function () {
              b();
              return e();
            },
            children: g,
          }),
          i.jsx(d("IGDSDialogItem.react").IGDSDialogItem, {
            onClick: e,
            children: h._("Cancel"),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = a;
    g.make = b;
  },
  98
);
__d(
  "IGDGroupBlockAlertDialogForJSResource.react",
  ["IGDGroupBlockAlertDialog.bs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("IGDGroupBlockAlertDialog.bs").make;
  },
  98
);
__d(
  "IGDProLogging.bs",
  ["IGDProLogging"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      d("IGDProLogging").QPLStart();
    }
    function b() {
      d("IGDProLogging").QPLEndSuccess();
    }
    function c() {
      d("IGDProLogging").ODSBumpLoadThreadsPrimary();
    }
    function e() {
      d("IGDProLogging").ODSBumpLoadThreadsGeneral();
    }
    function f() {
      d("IGDProLogging").ODSBumpMoveThreadPrimary();
    }
    function h() {
      d("IGDProLogging").ODSBumpMoveThreadGeneral();
    }
    function i() {
      d("IGDProLogging").ODSBumpAcceptRequestPrimary();
    }
    function j() {
      d("IGDProLogging").ODSBumpAcceptRequestGeneral();
    }
    g.qplStart = a;
    g.qplEndSuccess = b;
    g.odsBumpLoadThreadsPrimary = c;
    g.odsBumpLoadThreadsGeneral = e;
    g.odsBumpMoveThreadPrimary = f;
    g.odsBumpMoveThreadGeneral = h;
    g.odsBumpAcceptRequestPrimary = i;
    g.odsBumpAcceptRequestGeneral = j;
  },
  98
);
__d(
  "PolarisSimilarAccountsList.react",
  [
    "fbt",
    "PolarisConnectionsLogger",
    "PolarisReactRedux",
    "PolarisUserList.react",
    "cr:50",
    "polarisRelatedProfileSelectors",
    "polarisSuggestedUserSelectors",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    e = h._("Similar Accounts");
    function a(a) {
      var e = a.analyticsContext,
        f =
          e === void 0
            ? d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES
                .profile
            : e;
      e = a.containerSize;
      e = e === void 0 ? "auto" : e;
      var g = a.pageId,
        h = a.userId;
      a = a.viewModule;
      var k =
        a === void 0 ? d("PolarisConnectionsLogger").VIEW_MODULES.profile : a;
      a = j({});
      var l = a[0],
        m = a[1];
      a = d("PolarisReactRedux").useSelector(function (a) {
        return g === "relatedProfiles"
          ? d("polarisRelatedProfileSelectors").getRelatedProfileSuggestions(
              a,
              h
            )
          : d("polarisSuggestedUserSelectors").getProfileChainingSuggestions(
              a,
              h
            );
      });
      var n = function (a) {
          var b = a.followedByViewer,
            c = a.index;
          a = a.userId;
          if (b) return;
          b =
            g === "relatedProfiles"
              ? "related_profile_follow_button_tapped"
              : "similar_user_follow_button_tapped";
          q(b, a, c);
        },
        o = function (a) {
          var b = a.index;
          a = a.userId;
          if (!l[a]) {
            var c =
              g === "relatedProfiles"
                ? "related_profile_impression"
                : "similar_user_impression";
            q(c, a, b);
            m(((c = {}), (c[a] = !0), c));
          }
        },
        p = function (a) {
          var b = a.index;
          a = a.userId;
          var c =
            g === "relatedProfiles"
              ? "related_profile_username_tapped"
              : "similar_username_tapped";
          q(c, a, b);
        },
        q = function (a, b, c) {
          d("PolarisConnectionsLogger").logConnectionAction({
            eventName: a,
            position: c,
            targetId: b,
            containerModule: f,
            viewModule: k,
          });
        };
      return i.jsx(c("PolarisUserList.react"), {
        containerSize: e,
        onFollowClick: n,
        onScrollChange: o,
        onUsernameClick: p,
        topComponent: b("cr:50") !== null && i.jsx(b("cr:50"), {}),
        userIds: a || [],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SIMILAR_ACCOUNTS_HEADER = e;
    g.SimilarAccountsList = a;
  },
  98
);
__d(
  "PolarisIGSetWhatsAppLink.react",
  ["CometRelay", "PolarisIGSetWhatsAppLinkMutation.graphql", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useCallback,
      j =
        h !== void 0 ? h : (h = b("PolarisIGSetWhatsAppLinkMutation.graphql"));
    function a() {
      var a = d("CometRelay").useMutation(j),
        b = a[0];
      a = a[1];
      var c = i(
        function (a) {
          var c = function (b) {
            b = (b = b.set_ig_wa_link_web) == null ? void 0 : b.result;
            k(b)
              ? a.onSuccess && a.onSuccess("VERIFIED")
              : a.onError && a.onError("INVALID_VERIFICATION_CODE");
          };
          return b({ onCompleted: c, variables: a.variables });
        },
        [b]
      );
      return [c, a];
    }
    function k(a) {
      return a === "VERIFIED";
    }
    g.PolarisIGSetWhatsAppLink = a;
  },
  98
);
__d(
  "PolarisWhatsAppLinkingConfirmDialog.react",
  [
    "ix",
    "CometRelayEnvironmentProvider",
    "IGDSBox.react",
    "IGDSButton.react",
    "IGDSDialog.react",
    "IGDSDialogHeader.react",
    "IGDSText.react",
    "IGDSTextInput.react",
    "Image.react",
    "PolarisGenericStrings",
    "PolarisIGSetWhatsAppLink.react",
    "PolarisIGWALinkingCreationVerificationRequest.react",
    "PolarisProfessionalAccountWhatsAppLinkingStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = 5,
      o = { margin: { marginStart: "x1w4ip6v", $$css: !0 } };
    function a(a) {
      var b = a.countryCode,
        d = a.onClose,
        e = a.onLinkFinish,
        f = a.phoneNumber,
        g = a.shouldCloseEditDialog;
      a = a.whatsappNumber;
      return i.jsx(c("CometRelayEnvironmentProvider"), {
        children: i.jsx(p, {
          countryCode: b,
          onClose: d,
          onLinkFinish: e,
          phoneNumber: f,
          shouldCloseEditDialog: g,
          whatsappNumber: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      var b = a.countryCode,
        e = a.onClose,
        f = a.onLinkFinish,
        g = a.phoneNumber,
        p = a.shouldCloseEditDialog,
        q = a.whatsappNumber;
      a = m("");
      var r = a[0],
        s = a[1];
      a = m(null);
      var t = a[0],
        u = a[1];
      a = d("PolarisIGSetWhatsAppLink.react").PolarisIGSetWhatsAppLink();
      var v = a[0];
      a = a[1];
      var w = l(null),
        x = j(function (a) {
          a === "INVALID_VERIFICATION_CODE" &&
            u(
              d("PolarisProfessionalAccountWhatsAppLinkingStrings")
                .INVAILID_CODE_ERROR
            );
        }, []),
        y = j(
          function (a) {
            a === "VERIFIED" && (e(), f(b, g), p && p());
          },
          [f, e, g, b, p]
        ),
        z = j(
          function () {
            w.current = v({
              onError: x,
              onSuccess: y,
              variables: {
                verification_code: r,
                whatsapp_number: q,
                linking_surface: "PROFESSIONAL_IG_ACCOUNT",
              },
            });
          },
          [x, v, r, q, y]
        );
      k(function () {
        return function () {
          var a = w.current;
          a != null && a.dispose();
        };
      }, []);
      var A = r.length < n || a;
      k(
        function () {
          A && u("");
        },
        [A]
      );
      var B = j(function (a) {
        a === "GENERIC_ERROR" &&
          u(
            d("PolarisProfessionalAccountWhatsAppLinkingStrings").GENERIC_ERROR
          );
      }, []);
      a = c("PolarisIGWALinkingCreationVerificationRequest.react")();
      var C = a[0];
      a = a[1];
      var D = j(
        function () {
          C({ onError: B, variables: { whatsapp_number: q } });
        },
        [B, C, q]
      );
      return i.jsxs(c("IGDSDialog.react"), {
        onClose: e,
        size: "large",
        children: [
          i.jsx(c("IGDSDialogHeader.react"), {
            onClose: e,
            children: d("PolarisProfessionalAccountWhatsAppLinkingStrings")
              .CONFIRM_DIALOG_HEADER,
          }),
          i.jsx(c("IGDSBox.react"), {
            alignItems: "center",
            margin: 12,
            children: i.jsx(c("Image.react"), { src: h("261403") }),
          }),
          i.jsxs(c("IGDSBox.react"), {
            display: "flex",
            flex: "grow",
            margin: 12,
            children: [
              i.jsx(c("IGDSBox.react"), {
                children: i.jsx(c("IGDSText.react"), {
                  color: "primaryText",
                  size: "body",
                  children: d(
                    "PolarisProfessionalAccountWhatsAppLinkingStrings"
                  ).BodyTextForPhoneNumberVerification(q),
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                alignItems: "start",
                marginTop: 6,
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  label: d("PolarisProfessionalAccountWhatsAppLinkingStrings")
                    .CHANGE_NUMBER_LINK_TEXT,
                  onClick: e,
                  variant: "primary_link",
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginBottom: 0,
                marginTop: 5,
                children: i.jsx(c("IGDSTextInput.react"), {
                  backgroundColor: "transparent",
                  name: "code",
                  onChange: function (a) {
                    s(a.target.value);
                  },
                  placeholder: "Enter code",
                  value: r,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                display: "flex",
                flex: "grow",
                marginTop: 2,
                children: i.jsx(c("IGDSText.react"), {
                  color: "errorOrDestructive",
                  size: "body",
                  children: t,
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginTop: 4,
                children: i.jsxs(c("IGDSText.react"), {
                  color: "primaryText",
                  size: "body",
                  children: [
                    d("PolarisProfessionalAccountWhatsAppLinkingStrings")
                      .CODE_SENT_TEXT,
                    i.jsx(c("IGDSButton.react"), {
                      display: "block",
                      isDisabled: a,
                      label: d(
                        "PolarisProfessionalAccountWhatsAppLinkingStrings"
                      ).SEND_CODE_AGAIN,
                      onClick: D,
                      variant: "primary_link",
                      xstyle: o.margin,
                    }),
                  ],
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginTop: 10,
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  isDisabled: A,
                  label: d("PolarisProfessionalAccountWhatsAppLinkingStrings")
                    .CONFIRM_CODE,
                  onClick: z,
                  size: "large",
                }),
              }),
              i.jsx(c("IGDSBox.react"), {
                marginTop: 2,
                children: i.jsx(c("IGDSButton.react"), {
                  display: "block",
                  label: d("PolarisGenericStrings").CANCEL_TEXT,
                  onClick: e,
                  size: "large",
                  variant: "primary_link",
                }),
              }),
            ],
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDSignalBufferData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "PolarisBDSignalWrapper",
  ["PolarisBDSignalBufferData", "PolarisSignalCollectorMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.signalFlags = a), (this.signalType = b);
      }
      var b = a.prototype;
      b.getSignalCollector = function (a) {
        return this.canExecuteForReputationTier(a)
          ? c("PolarisSignalCollectorMap").get(this.signalType)
          : null;
      };
      b.canExecuteForReputationTier = function (a) {
        return this.signalType === 38001 ? !0 : this.signalFlags.includes(a);
      };
      b.getBufferConfig = function () {
        return c("PolarisBDSignalBufferData")[this.signalType];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSignalValueContext",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.cn = a;
      }
      var b = a.prototype;
      b.getSignalValueContextName = function () {
        return this.cn;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisBDSignalCollectorBase",
  [
    "PolarisBDSignalBufferData",
    "PolarisSignalValueContext",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.signalType = a;
      }
      var d = a.prototype;
      d.executeSignalCollection = function () {
        throw new Error(
          "Child class responsibility to implement executeSignalCollection"
        );
      };
      d.executeAsyncSignalCollection = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield this.executeSignalCollection();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      a.getSanitizedURI = function () {
        var a = window.location.href,
          b = a.indexOf("?");
        return b < 0 ? a : a.substring(0, b);
      };
      d.getContext = function () {
        return new (c("PolarisSignalValueContext"))(a.getSanitizedURI());
      };
      d.throwIfNotInitialized = function () {
        if (!(this.signalType in c("PolarisBDSignalBufferData")))
          throw new Error("Signal is not intialized");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDLoggingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    ({ ERROR: "error", WARNING: "warning", INFO: "info" });
    a = {
      KEY_NOT_FOUND: "key_not_found",
      APPEND_SIGNAL: "bd_append_signal",
      APPEND_SIGNAL_FAIL: "bd_append_signal_fail",
      HB_COLLECTED: "append_hb",
      HB_COLLECTION_FAILED: "hb_collection_failed",
      BD_EXCEPTION: "bd_exception",
      SIGNAL_NOT_IMPLEMENTED: "signal_not_implemented",
      SIGNAL_VALUE_NULL: "signal_value_null",
      EMPTY_SIGNAL_CONFIG: "empty_signal_config",
      INVALID_BUFFER_SIZE: "invalid_buffer_size",
      INVALID_DURATION: "invalid_duration",
      SIGNAL_FLAGS_MISSING: "signal_flags_missing",
      DYNAMIC_SIGNAL_COLLECTION_STARTED: "dynamic_signal_collection_started",
      BIOMETRIC_SIGNAL_COLLECTION_STARTED:
        "biometric_signal_collection_started",
      INVALID_GUID: "invalid_guid",
      INVALID_LENGTH: "invalid_length",
      GET_LOCAL_STORAGE_ERROR: "get_local_storage_error",
      WEB_STORAGE: "web_storage",
      PARSE_CONFIG_ERROR: "parse_config_error",
      HB_START_FAILURE: "hb_start_failure",
      HB_ALREADY_RUNNING: "hb_already_running",
      TRY_RESTARTING_HB: "try_restarting_hb",
      BANZAI_LOG_ERROR: "banzai_log_error",
    };
    f.OPERATIONS = a;
  },
  66
);
__d(
  "PolarisBDOperationLoggerComponent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      WEB_SIGNAL_COLLECTION: "JS",
      ANDROID_SIGNAL_COLLECTION: "Java",
      IOS_SIGNAL_COLLECTION: "ObjC",
      SIGNAL_COLLECTION_SERVER_PROCESSING: "SCSP",
      TRIGGER: "TG",
      SESSION_STORE: "SS",
      SCANNERS_FRAMEWORK: "SF",
      RESEARCHER_STUDIO_SERVER_SIDE: "RS",
      RESEARCHER_STUDIO_CLIENT_SIDE: "RSJS",
      SIGNAL_COLLECTION_CONFIG: "SCCFG",
      COLLECTION_TRIGGER_FB: "CTFB",
      CLASSIFICATION_TRIGGER_FB: "ClsTF",
      PASSIVE_SIGNALS_FB: "PSFB",
      FB_ACTIVE_SIGNAL: "FB_AS",
      IG_ACTIVE_SIGNAL: "IG_AS",
      BD_STORE: "ST",
      REPUTATION_HINTS_FB: "RHF",
      FALCO_EVENT: "FE",
      USERAGENT_PARSING: "UA",
      FEATURE_LIMIT: "FL",
      IG_JS: "IG_JS",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisBDOperationLoggerLevel",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({ INFO: "info", WARNING: "warning", ERROR: "error" });
    f["default"] = a;
  },
  66
);
__d(
  "PolarisBdOperationFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log("bd_operation", a(), {}, h);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisBDOperationLogHelper",
  [
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLoggerComponent",
    "PolarisBDOperationLoggerLevel",
    "PolarisBdOperationFalcoEvent",
    "PolarisRandom",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      logInfo: function (a, b, d, e) {
        h.log(a, c("PolarisBDOperationLoggerLevel").INFO, b, d, e);
      },
      logWarning: function (a, b, d, e) {
        h.log(a, c("PolarisBDOperationLoggerLevel").WARNING, b, d, e);
      },
      logError: function (a, b, d, e) {
        h.log(a, c("PolarisBDOperationLoggerLevel").ERROR, b, d, e);
      },
      log: function (a, b, e, f, g) {
        f === void 0 && (f = {});
        if (d("PolarisRandom").coinflip(h.getFlipSamplingByOperation(e))) {
          if (f === null) throw new Error("opeartion info null");
          f.source = a;
          c("PolarisBdOperationFalcoEvent").log(function () {
            return {
              operation: e,
              level: b,
              component: c("PolarisBDOperationLoggerComponent").IG_JS,
              operation_info: f,
              duration_us: g,
            };
          });
        }
      },
      getFlipSamplingByOperation: function (a) {
        switch (a) {
          case d("PolarisBDLoggingConstants").OPERATIONS.APPEND_SIGNAL:
          case d("PolarisBDLoggingConstants").OPERATIONS.HB_COLLECTED:
          case d("PolarisBDLoggingConstants").OPERATIONS
            .GET_LOCAL_STORAGE_ERROR:
          case d("PolarisBDLoggingConstants").OPERATIONS.WEB_STORAGE:
          case d("PolarisBDLoggingConstants").OPERATIONS.SIGNAL_NOT_IMPLEMENTED:
          case d("PolarisBDLoggingConstants").OPERATIONS
            .BIOMETRIC_SIGNAL_COLLECTION_STARTED:
            return 1e3;
          default:
            return 1;
        }
      },
    };
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSignalErrorValueTypeDef",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "ec",
      h = "en",
      i = "es",
      j = 500;
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), c != null && (this.$3 = c.substr(0, j));
      }
      var b = a.prototype;
      b.getErrorCode = function () {
        return this.$1;
      };
      b.getErrorName = function () {
        return this.$2;
      };
      b.getErrorDetails = function () {
        return this.$3;
      };
      b.isEqual = function (a) {
        return (
          this.$1 === a.getErrorCode() &&
          this.$3 === a.getErrorDetails() &&
          this.$2 === a.getErrorName()
        );
      };
      b.toJSON = function () {
        var a;
        a = ((a = {}), (a[g] = this.$1), a);
        switch (this.$1) {
          case 0:
            a[h] = this.$2;
            a[i] = this.$3;
            break;
        }
        return a;
      };
      return a;
    })();
    f.SignalErrorValueTypeDef = a;
  },
  66
);
__d(
  "PolarisSignalValueTypeDef",
  [
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisSignalErrorValueTypeDef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "SignalValueTypeDef",
      i = "t",
      j = "ctx",
      k = "v",
      l = "e",
      m = {
        NUMBER: "NUMBER",
        STRING: "STRING",
        BOOLEAN: "BOOLEAN",
        CUSTOM_OBJECT: "CUSTOM_OBJECT",
        INT_ARRAY: "INT_ARRAY",
        TOUCH: "TOUCH",
        MAP: "MAP",
        LIST: "LIST",
        SENSOR: "SENSOR",
        ERROR: "ERROR",
      };
    a = (function () {
      function a(a, b, c, d, e) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e != null ? e : 0);
      }
      var b = a.prototype;
      b.getTimeStampMS = function () {
        return this.$1;
      };
      b.getSignalContext = function () {
        return this.$2;
      };
      b.getSignalValue = function () {
        return this.$3;
      };
      b.getSignalValueType = function () {
        return this.$4;
      };
      b.isEqual = function (a, b) {
        if (a == null) {
          c("PolarisBDOperationLogHelper").logWarning(
            h,
            d("PolarisBDLoggingConstants").OPERATIONS.SIGNAL_VALUE_NULL
          );
          return !1;
        }
        if (this.getSignalValueType() !== a.getSignalValueType()) return !1;
        if (
          this.getSignalValueType() === m.ERROR &&
          a.getSignalValueType() === m.ERROR
        )
          return this.equalValue(a);
        var e = !1;
        b.has(128) && (e = this.equalValue(a));
        b.has(256) &&
          (e =
            e &&
            this.getSignalContext() != null &&
            a.getSignalContext() != null &&
            this.getSignalContext().getSignalValueContextName() ===
              a.getSignalContext().getSignalValueContextName());
        b.has(512) &&
          (e =
            e &&
            Math.abs(this.getTimeStampMS() - a.getTimeStampMS()) <= this.$5);
        return e;
      };
      b.equalValue = function (a) {
        if (this.isPrimitiveType())
          return this.getSignalValue() === a.getSignalValue();
        throw new Error("Must implement in the subclasses");
      };
      b.toJSON = function (a) {
        var b = {};
        a && ((b[i] = this.$1 / 1e3), this.$2 != null && (b[j] = this.$2));
        this.$3 == null
          ? (b[l] = new (d(
              "PolarisSignalErrorValueTypeDef"
            ).SignalErrorValueTypeDef)(2))
          : this.addValueOrErrorToJSON(b);
        return b;
      };
      b.addValueOrErrorToJSON = function (a) {
        if (this.isPrimitiveType()) a[k] = this.$3;
        else throw new Error("Must implement in the subclasses");
      };
      b.isPrimitiveType = function () {
        switch (typeof this.$3) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      };
      return a;
    })();
    g.BD_VALUE = k;
    g.BD_ERROR = l;
    g.VALUE_TYPES = m;
    g.SignalValueTypeDef = a;
  },
  98
);
__d(
  "PolarisErrorSignalValueType",
  ["PolarisSignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("PolarisSignalValueTypeDef").VALUE_TYPES.ERROR
          ) || this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d("PolarisSignalValueTypeDef").BD_ERROR] =
          this.getSignalValue().toJSON();
      };
      return b;
    })(d("PolarisSignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisNumberSignalValueType",
  ["PolarisSignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("PolarisSignalValueTypeDef").VALUE_TYPES.NUMBER
          ) || this
        );
      }
      return b;
    })(d("PolarisSignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDConnectionRTTSignalCollector",
  [
    "PolarisBDSignalCollectorBase",
    "PolarisErrorSignalValueType",
    "PolarisNumberSignalValueType",
    "PolarisSignalErrorValueTypeDef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          var a;
          this.throwIfNotInitialized();
          if (((a = navigator.connection) == null ? void 0 : a.rtt) != null) {
            a = navigator.connection.rtt;
            a = new (c("PolarisNumberSignalValueType"))(
              Date.now(),
              this.getContext(),
              a
            );
          } else
            a = new (c("PolarisErrorSignalValueType"))(
              Date.now(),
              this.getContext(),
              new (d("PolarisSignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                3,
                "navigator.connection.rtt not supported"
              )
            );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30004,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisCustomObjectSignalValueType",
  ["PolarisSignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("PolarisSignalValueTypeDef").VALUE_TYPES.CUSTOM_OBJECT
          ) || this
        );
      }
      var c = b.prototype;
      c.equalValue = function (a) {
        return this.getSignalValue().isEqual(a.getSignalValue());
      };
      c.addValueOrErrorToJSON = function (a) {
        a[d("PolarisSignalValueTypeDef").BD_VALUE] =
          this.getSignalValue().toJSON();
      };
      return b;
    })(d("PolarisSignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStringArrayObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.strings = []), (this.strings = a);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return this.strings;
      };
      b.isEqual = function (b) {
        if (!(b instanceof a)) return !1;
        if (b.strings === this.strings) return !0;
        if (b.strings.length !== this.strings.length) return !1;
        for (var c = 0; c < this.strings.length; c++)
          if (this.strings[c] !== b.strings[c]) return !1;
        return !0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisBDLanguagesSignalCollector",
  [
    "PolarisBDSignalCollectorBase",
    "PolarisCustomObjectSignalValueType",
    "PolarisStringArrayObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = [].concat(navigator.languages);
          a = new (c("PolarisCustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("PolarisStringArrayObject"))(a)
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30003,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDMimeTypeCountSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = navigator.mimeTypes ? navigator.mimeTypes.length : -1;
          a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30002,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDBiometricSignalCollectorBase",
  ["PolarisBDSignalCollectorBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = "biometric_signal_collected";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.listenForSignals = function () {
        throw new Error(
          "Child class responsibility to implement listenForSignals"
        );
      };
      c.executeSignalCollection = function () {
        throw new Error(
          "executeAsyncSignalCollection and executeSignalCollection should not be called on biometric signals"
        );
      };
      return b;
    })(c("PolarisBDSignalCollectorBase"));
    g.BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME = a;
    g.BDBiometricSignalCollectorBase = b;
  },
  98
);
__d(
  "PolarisBooleanSignalValueType",
  ["PolarisSignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("PolarisSignalValueTypeDef").VALUE_TYPES.BOOLEAN
          ) || this
        );
      }
      return b;
    })(d("PolarisSignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDTouchOrMouseSignalCollectorBase",
  ["PolarisBDBiometricSignalCollectorBase", "PolarisBooleanSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        var e;
        e = a.call(this, b) || this;
        e.eventsToSubscribe = [];
        e.pauseTimeout = 60 * 60 * 1e3;
        e.eventsToSubscribe = c;
        e.pauseTimeout = d;
        e.handler = function (a) {
          return e.collectSignals(a);
        };
        return e;
      }
      var e = b.prototype;
      e.listenForSignals = function () {
        this.collectSignals(), this.addListeners();
      };
      e.addListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          document.addEventListener(b, a.handler);
        });
      };
      e.pauseListeners = function () {
        var a = this;
        this.eventsToSubscribe.forEach(function (b) {
          document.removeEventListener(b, a.handler);
        });
        window.setTimeout(function () {
          return a.addListeners();
        }, this.pauseTimeout);
      };
      e.collectSignals = function (a) {
        a = a != null;
        a && this.pauseListeners();
        a = new (c("PolarisBooleanSignalValueType"))(
          Date.now(),
          this.getContext(),
          a
        );
        a = { signalId: this.signalType, data: { valueOrError: a } };
        window.dispatchEvent(
          new CustomEvent(
            d(
              "PolarisBDBiometricSignalCollectorBase"
            ).BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
            { detail: a }
          )
        );
      };
      return b;
    })(
      d("PolarisBDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase
    );
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDMousePresenceSignalCollector",
  ["PolarisBDTouchOrMouseSignalCollectorBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ["mousedown", "mousemove"], h) || this
          );
        }
        return a;
      })(c("PolarisBDTouchOrMouseSignalCollectorBase")),
      j = null,
      k = {
        signalType: 30106,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisStringSignalValueType",
  ["PolarisSignalValueTypeDef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        return (
          a.call(
            this,
            b,
            c,
            e,
            d("PolarisSignalValueTypeDef").VALUE_TYPES.STRING
          ) || this
        );
      }
      return b;
    })(d("PolarisSignalValueTypeDef").SignalValueTypeDef);
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorAppVersionSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisStringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = navigator.appVersion;
          a = new (c("PolarisStringSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30013,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorHardwareConcurrencySignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            (a = navigator.hardwareConcurrency) != null ? a : 0
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30018,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorMaxTouchPointSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.maxTouchPoints
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30093,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorNotificationPermissionSignalCollector",
  [
    "PolarisBDSignalCollectorBase",
    "PolarisErrorSignalValueType",
    "PolarisSignalErrorValueTypeDef",
    "PolarisStringSignalValueType",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (e) {
        babelHelpers.inheritsLoose(a, e);
        function a() {
          return e.call(this, j.signalType) || this;
        }
        var f = a.prototype;
        f.executeAsyncSignalCollection = (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              if (navigator.permissions) {
                var a = yield navigator.permissions.query({
                  name: "notifications",
                });
                a = new (c("PolarisStringSignalValueType"))(
                  Date.now(),
                  this.getContext(),
                  a.state
                );
              } else a = new (c("PolarisErrorSignalValueType"))(Date.now(), this.getContext(), new (d("PolarisSignalErrorValueTypeDef").SignalErrorValueTypeDef)(3, "navigator.permissions not supported"));
            } catch (b) {
              a = new (c("PolarisErrorSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (d(
                  "PolarisSignalErrorValueTypeDef"
                ).SignalErrorValueTypeDef)(
                  3,
                  "notifications cannot be queried from navigator.permissions"
                )
              );
            }
            return { valueOrError: a };
          });
          function e() {
            return a.apply(this, arguments);
          }
          return e;
        })();
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30008,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorPlatformSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisStringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = new (c("PolarisStringSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.platform
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30015,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorUserAgentSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisStringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("PolarisStringSignalValueType"))(
            Date.now(),
            this.getContext(),
            navigator.userAgent
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30094,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNavigatorVendorSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisStringSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = navigator.vendor;
          a = new (c("PolarisStringSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30012,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDNotificationPermissionSignalCollector",
  [
    "PolarisBDSignalCollectorBase",
    "PolarisErrorSignalValueType",
    "PolarisSignalErrorValueTypeDef",
    "PolarisStringSignalValueType",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var e = a.prototype;
        e.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a;
          window.Notification
            ? (a = new (c("PolarisStringSignalValueType"))(
                Date.now(),
                this.getContext(),
                Notification.permission
              ))
            : (a = new (c("PolarisErrorSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (d(
                  "PolarisSignalErrorValueTypeDef"
                ).SignalErrorValueTypeDef)(3, "Notification not supported")
              ));
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30007,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDPluginCountSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = navigator.plugins ? navigator.plugins.length : -1;
          a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDTimezoneOffsetSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a;
          a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            (a = new Date().getTimezoneOffset()) != null ? a : 999
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30040,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDTouchPresenceSignalCollector",
  ["PolarisBDTouchOrMouseSignalCollectorBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3,
      i = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return (
            b.call(this, k.signalType, ["touchstart", "touchcancel"], h) || this
          );
        }
        return a;
      })(c("PolarisBDTouchOrMouseSignalCollectorBase")),
      j = null,
      k = {
        signalType: 30107,
        get: function () {
          j == null && (j = new i());
          return j;
        },
      };
    a = k;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDWebdriverSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisBooleanSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = !!navigator.webdriver;
          a = new (c("PolarisBooleanSignalValueType"))(
            Date.now(),
            this.getContext(),
            a
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 3e4,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDWindowHistoryLengthSignalCollector",
  ["PolarisBDSignalCollectorBase", "PolarisNumberSignalValueType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("PolarisNumberSignalValueType"))(
            Date.now(),
            this.getContext(),
            window.history ? window.history.length : 0
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30095,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDimensionObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.width = null),
          (this.height = null),
          (this.width = a),
          (this.height = b);
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { w: this.width, h: this.height };
      };
      b.isEqual = function (b) {
        return b instanceof a
          ? this.width === b.width && this.height === b.height
          : !1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisBDWindowOuterDimensionSignalCollector",
  [
    "PolarisBDSignalCollectorBase",
    "PolarisCustomObjectSignalValueType",
    "PolarisDimensionObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          this.throwIfNotInitialized();
          var a = window.outerHeight,
            b = window.outerWidth;
          b = new (c("PolarisCustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("PolarisDimensionObject"))(b, a)
          );
          return { valueOrError: b };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 30005,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisSignalCollectorMap",
  [
    "PolarisBDConnectionRTTSignalCollector",
    "PolarisBDHeartbeatV2SignalCollector",
    "PolarisBDLanguagesSignalCollector",
    "PolarisBDMimeTypeCountSignalCollector",
    "PolarisBDMousePresenceSignalCollector",
    "PolarisBDNavigatorAppVersionSignalCollector",
    "PolarisBDNavigatorHardwareConcurrencySignalCollector",
    "PolarisBDNavigatorMaxTouchPointSignalCollector",
    "PolarisBDNavigatorNotificationPermissionSignalCollector",
    "PolarisBDNavigatorPlatformSignalCollector",
    "PolarisBDNavigatorUserAgentSignalCollector",
    "PolarisBDNavigatorVendorSignalCollector",
    "PolarisBDNotificationPermissionSignalCollector",
    "PolarisBDPluginCountSignalCollector",
    "PolarisBDTimezoneOffsetSignalCollector",
    "PolarisBDTouchPresenceSignalCollector",
    "PolarisBDWebdriverSignalCollector",
    "PolarisBDWindowHistoryLengthSignalCollector",
    "PolarisBDWindowOuterDimensionSignalCollector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      get: function (a) {
        switch (a) {
          case 3e4:
            return c("PolarisBDWebdriverSignalCollector").get();
          case 30001:
            return c("PolarisBDPluginCountSignalCollector").get();
          case 30002:
            return c("PolarisBDMimeTypeCountSignalCollector").get();
          case 30003:
            return c("PolarisBDLanguagesSignalCollector").get();
          case 30004:
            return c("PolarisBDConnectionRTTSignalCollector").get();
          case 30005:
            return c("PolarisBDWindowOuterDimensionSignalCollector").get();
          case 30007:
            return c("PolarisBDNotificationPermissionSignalCollector").get();
          case 30008:
            return c(
              "PolarisBDNavigatorNotificationPermissionSignalCollector"
            ).get();
          case 30012:
            return c("PolarisBDNavigatorVendorSignalCollector").get();
          case 30013:
            return c("PolarisBDNavigatorAppVersionSignalCollector").get();
          case 30015:
            return c("PolarisBDNavigatorPlatformSignalCollector").get();
          case 30018:
            return c(
              "PolarisBDNavigatorHardwareConcurrencySignalCollector"
            ).get();
          case 30040:
            return c("PolarisBDTimezoneOffsetSignalCollector").get();
          case 30093:
            return c("PolarisBDNavigatorMaxTouchPointSignalCollector").get();
          case 30094:
            return c("PolarisBDNavigatorUserAgentSignalCollector").get();
          case 30095:
            return c("PolarisBDWindowHistoryLengthSignalCollector").get();
          case 30106:
            return c("PolarisBDMousePresenceSignalCollector").get();
          case 30107:
            return c("PolarisBDTouchPresenceSignalCollector").get();
          case 38001:
            return c("PolarisBDHeartbeatV2SignalCollector").get();
          default:
            return void 0;
        }
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisHeartbeatObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.isAppForeground = !0;
      }
      var b = a.prototype;
      b.toJSON = function () {
        return { f: this.isAppForeground };
      };
      b.isEqual = function (a) {
        return !1;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisHeartbeatV2Object",
  ["PolarisHeartbeatObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.id = "";
        c.id = b;
        return c;
      }
      var c = b.prototype;
      c.toJSON = function () {
        return { f: this.isAppForeground, id: this.id };
      };
      return b;
    })(c("PolarisHeartbeatObject"));
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDHeartbeatV2SignalCollector",
  [
    "PolarisBDClientConfig",
    "PolarisBDSignalCollectorBase",
    "PolarisCustomObjectSignalValueType",
    "PolarisHeartbeatV2Object",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.call(this, j.signalType) || this;
        }
        var d = a.prototype;
        d.executeSignalCollection = function () {
          var a = new (c("PolarisCustomObjectSignalValueType"))(
            Date.now(),
            this.getContext(),
            new (c("PolarisHeartbeatV2Object"))(
              c("PolarisBDClientConfig").get().getHeartbeatVersion()
            )
          );
          return { valueOrError: a };
        };
        return a;
      })(c("PolarisBDSignalCollectorBase")),
      i = null,
      j = {
        signalType: 38001,
        get: function () {
          i == null && (i = new h());
          return i;
        },
      };
    a = j;
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDClientConfig",
  [
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDSignalWrapper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientConfig",
      i = (function () {
        function a() {
          (this.reputationTier = 0),
            (this.staticSignalBufferSize = 1),
            (this.dynamicSignalBufferSize = 1),
            (this.biometricSignalBufferSize = 1),
            (this.staticSignals = []),
            (this.dynamicSignals = []),
            (this.biometricSignals = []),
            (this.heartbeatSignal = new (c("PolarisBDSignalWrapper"))(
              [],
              38001
            )),
            (this.bufferSizeBySignalIdMap = {}),
            (this.periodicCollectionIntervalMs = Number.MAX_SAFE_INTEGER),
            (this.signalConfigGenerationTimeStampMs = 0),
            (this.suspiciousTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.allTiersFlushDurationMs = Number.MAX_SAFE_INTEGER),
            (this.heartbeatIntervalMs = -1),
            (this.parsingDone = !1),
            (this.sid = -1),
            (this.hbVersion = ""),
            (this.$1 = 0),
            (this.$2 = 0),
            (this.$3 = 30),
            (this.bufferSizeBySignalIdMap[38001] = 1);
        }
        var b = a.prototype;
        b.setClientReputationTier = function (a) {
          this.reputationTier = a;
          return this;
        };
        b.getClientReputationTier = function () {
          return this.reputationTier;
        };
        b.setStaticSignalBufferSize = function (a) {
          a > 0
            ? (this.staticSignalBufferSize = a)
            : c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: "s" }
              );
          return this;
        };
        b.getStaticSignalBufferSize = function () {
          return this.staticSignalBufferSize;
        };
        b.setDynamicSignalBufferSize = function (a) {
          a > 1
            ? (this.dynamicSignalBufferSize = a)
            : c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a ? a.toString() : "0", type: "dbs" }
              );
          return this;
        };
        b.getDynamicSignalBufferSize = function () {
          return this.dynamicSignalBufferSize;
        };
        b.setBiometricSignalBufferSize = function (a) {
          a > 1
            ? (this.biometricSignalBufferSize = a)
            : c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.INVALID_BUFFER_SIZE,
                { size: a.toString(), type: "b" }
              );
          return this;
        };
        b.setSID = function (a) {
          this.sid = a;
          return this;
        };
        b.getHeartbeatVersion = function () {
          return this.hbVersion;
        };
        b.getBiometricSignalBufferSize = function () {
          return this.biometricSignalBufferSize;
        };
        b.setConfigGenerationTimeStamp = function (a) {
          this.signalConfigGenerationTimeStampMs = a;
          return this;
        };
        b.getConfigGenerationTimeStamp = function () {
          return this.signalConfigGenerationTimeStampMs;
        };
        b.getHeartbeatIntervalMs = function () {
          return this.heartbeatIntervalMs;
        };
        b.setAllTiersFlushDurationMinutes = function (a) {
          a > 0
            ? (this.allTiersFlushDurationMs = a * 60 * 1e3)
            : c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.INVALID_DURATION,
                { size: a.toString(), type: "fda" }
              );
          return this;
        };
        b.getAllTiersFlushDurationMs = function () {
          return this.allTiersFlushDurationMs;
        };
        b.getFlushDurationByReputationTierMs = function () {
          return this.reputationTier === 262144
            ? this.allTiersFlushDurationMs
            : this.suspiciousTiersFlushDurationMs;
        };
        b.addMultipleSignalsToClientConfig = function (a) {
          var b = this;
          a.forEach(function (a) {
            return b.addSignalToClientConfig(a);
          });
          return this;
        };
        b.addSignalToClientConfig = function (a) {
          var b = a.getSignalFlags(),
            d = a.getSignalId();
          if (d === 38e3) return this;
          var e = new (c("PolarisBDSignalWrapper"))(b, d);
          if (d === 38001) {
            this.heartbeatSignal = e;
            return this;
          }
          !b.includes(2)
            ? this.staticSignals.push(e)
            : b.includes(4)
            ? this.biometricSignals.push(e)
            : this.dynamicSignals.push(e);
          a.getBufferSize() > 0 &&
            (this.bufferSizeBySignalIdMap[a.getSignalId()] = a.getBufferSize());
          return this;
        };
        b.setPeriodicCollectionIntervalSeconds = function (a) {
          a > 0
            ? (this.periodicCollectionIntervalMs = a * 1e3)
            : c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.INVALID_DURATION,
                { size: a ? a.toString() : "INF", type: "i" }
              );
          return this;
        };
        b.getPeriodicCollectionIntervalMs = function () {
          return this.periodicCollectionIntervalMs;
        };
        b.getDynamicSignals = function () {
          return this.dynamicSignals;
        };
        b.getStaticSignals = function () {
          return this.staticSignals;
        };
        b.getBiometricSignals = function () {
          return this.biometricSignals;
        };
        b.getHeartbeatSignal = function () {
          return this.heartbeatSignal;
        };
        b.getBufferSizeBySignalId = function (a) {
          return this.bufferSizeBySignalIdMap[a];
        };
        b.setParsingDone = function (a) {
          this.parsingDone = a;
        };
        b.isParsingDone = function () {
          return this.parsingDone;
        };
        b.setHeartbeatConfig = function (a) {
          if (a != null) {
            var b;
            this.hbVersion = a.hbv;
            this.heartbeatIntervalMs = a.hbi * 60 * 1e3;
            this.$1 = (b = a.hbcbc) != null ? b : this.$1;
            this.$2 = (b = a.hbvbc) != null ? b : this.$2;
            this.$3 = a.hbbi && a.hbbi > 0 ? a.hbbi : this.$3;
          }
          return this;
        };
        b.getHeartbeatCriticalBurstCount = function () {
          return this.$1;
        };
        b.getHeartbeatVitalBurstCount = function () {
          return this.$2;
        };
        b.getHeartbeatBurstIntervalMs = function () {
          return this.$3 * 1e3;
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisBdPdcSignalsFalcoEvent",
  ["PolarisFalcoLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { falco: !0, pigeon: !1 };
    a = {
      log: function (a) {
        d("PolarisFalcoLogger").FalcoLogger.log("bd_pdc_signals", a(), {}, h);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisBDClientSignalLogger",
  [
    "PolarisBDClientConfig",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBdPdcSignalsFalcoEvent",
    "javascript-blowfish",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientSignalLogger",
      i = c("PolarisBDClientConfig").get(),
      j = "",
      k = {
        setAsid: function (a) {
          j = a;
        },
        postSignalsHelper: function (a) {
          if (a.length <= 2) return !1;
          var b = i.getConfigGenerationTimeStamp(),
            d = i.getClientReputationTier(),
            e = k.encryptDataUsingAsid(a);
          a = function () {
            return { asid: j, ct: b, rt: d, sjd: e, sid: i.sid };
          };
          c("PolarisBdPdcSignalsFalcoEvent").log(a);
          return !0;
        },
        getInitialVector: function (a) {
          if (a.length !== 16) {
            c("PolarisBDOperationLogHelper").logError(
              h,
              d("PolarisBDLoggingConstants").OPERATIONS.INVALID_LENGTH
            );
            return "";
          }
          var b = "";
          for (var e = 0; e < 8; e++)
            b += String.fromCharCode(a.charCodeAt(e) ^ a.charCodeAt(8 + e));
          return b;
        },
        encryptDataUsingAsid: function (a) {
          if (j.length !== 36) {
            c("PolarisBDOperationLogHelper").logError(
              h,
              d("PolarisBDLoggingConstants").OPERATIONS.INVALID_GUID
            );
            return a;
          }
          var b = j.slice(19, 23) + j.slice(24, 36),
            e = k.getInitialVector(b);
          b = new (c("javascript-blowfish"))(b, "cbc");
          return b.base64Encode(b.encrypt(a, e));
        },
      };
    g.BDClientSignalLogger = k;
  },
  98
);
__d(
  "PolarisBDCollectionTypeEnum",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({ STATIC: 0, DYNAMIC: 1, BIOMETRIC: 2 });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "PolarisBDUtils",
  [
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisWebStorage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 60 * 1e3;
    function a() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (Math.random() * 16) | 0;
          a = a === "x" ? b : (b & 3) | 8;
          return a.toString(16);
        }
      );
    }
    function i(a, b, e) {
      var f = c("PolarisWebStorage").getLocalStorage();
      if (!f) {
        c("PolarisBDOperationLogHelper").logWarning(
          e,
          d("PolarisBDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR
        );
        return;
      }
      f = c("PolarisWebStorage").setItemGuarded(f, b, a);
      f != null &&
        c("PolarisBDOperationLogHelper").logWarning(
          e,
          d("PolarisBDLoggingConstants").OPERATIONS.WEB_STORAGE,
          { error: f.message }
        );
    }
    function b(a, b, c) {
      i(JSON.stringify(a), b, c);
    }
    function e(a, b, c) {
      i(a.toString(), b, c);
    }
    function j(a, b) {
      var e = c("PolarisWebStorage").getLocalStorage();
      if (!e) {
        c("PolarisBDOperationLogHelper").logWarning(
          b,
          d("PolarisBDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR
        );
        return null;
      }
      return e.getItem(a);
    }
    function f(a, b) {
      a = j(a, b);
      return a != null && a !== "" ? JSON.parse(a) : null;
    }
    function k(a, b) {
      a = j(a, b);
      if (a == null) return 0;
      b = Number.parseInt(a, 10);
      return Number.isFinite(b) ? b : 0;
    }
    g.MILLISECONDS_IN_HOUR = h;
    g.uuid = a;
    g.setEventInStorage = b;
    g.setTimestampInStorage = e;
    g.getEventFromStorage = f;
    g.getTimestampFromStorage = k;
  },
  98
);
__d(
  "PolarisBDHeartbeatSignalCollectionManager",
  [
    "PolarisBDClientConfig",
    "PolarisBDClientSignalLogger",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "hb_timestamp",
      i = "BDHeartbeatSignalCollectionManager",
      j = !1,
      k = !1,
      l = null,
      m = null,
      n = null,
      o = c("PolarisBDClientConfig").get();
    a = (function () {
      function a() {}
      a.resetHeartbeatCollectionTimestamp = function () {
        d("PolarisBDUtils").setTimestampInStorage(0, h, i);
      };
      a.resetHeartbeatStarted = function () {
        (j = !1), (k = !1);
      };
      a.isHeartbeatStarted = function () {
        return j;
      };
      a.isHeartbeatDelayed = function () {
        return k;
      };
      a.startHeartbeatDelayed = function () {
        if (j || k) return;
        var b = d("PolarisBDUtils").getTimestampFromStorage(h, i);
        b = Date.now() - b;
        try {
          b >= o.getHeartbeatIntervalMs()
            ? a.startHeartbeat()
            : ((m = window.setTimeout(function () {
                return a.startHeartbeat();
              }, o.getHeartbeatIntervalMs() - b)),
              (k = !0));
        } catch (a) {
          c("PolarisBDOperationLogHelper").logError(
            i,
            d("PolarisBDLoggingConstants").OPERATIONS.HB_START_FAILURE,
            {
              lastBeatSince: b.toString(),
              hbi: o.getHeartbeatIntervalMs().toString(),
              e: a,
            }
          );
        }
      };
      a.startHeartbeat = function () {
        !j &&
          o.getHeartbeatIntervalMs() > 0 &&
          (a.collectHeartbeatRecursive(
            o.getHeartbeatCriticalBurstCount(),
            o.getHeartbeatVitalBurstCount()
          ),
          l != null &&
            (window.clearInterval(l),
            c("PolarisBDOperationLogHelper").logWarning(
              i,
              d("PolarisBDLoggingConstants").OPERATIONS.HB_ALREADY_RUNNING
            )),
          (l = window.setInterval(function () {
            return a.collectHeartbeatRecursive(
              o.getHeartbeatCriticalBurstCount(),
              o.getHeartbeatVitalBurstCount()
            );
          }, o.getHeartbeatIntervalMs())),
          (j = !0));
      };
      a.stopHeartbeat = function () {
        n != null && window.clearTimeout(n),
          l != null && window.clearInterval(l),
          m != null && window.clearTimeout(m),
          a.resetHeartbeatStarted();
      };
      a.collectHeartbeatRecursive = function (b, c) {
        if (b <= 0 && c <= 0) return;
        b > 0 && a.collectHeartbeat();
        c > 0 && a.collectHeartbeat();
        (b > 1 || c > 1) &&
          (n = window.setTimeout(function () {
            return a.collectHeartbeatRecursive(b - 1, c - 1);
          }, o.getHeartbeatBurstIntervalMs()));
      };
      a.collectHeartbeat = function () {
        var b;
        b =
          o == null
            ? void 0
            : (b = o.getHeartbeatSignal()) == null
            ? void 0
            : (b = b.getSignalCollector(o.getClientReputationTier())) == null
            ? void 0
            : b.executeSignalCollection();
        if (b == null) {
          c("PolarisBDOperationLogHelper").logError(
            i,
            d("PolarisBDLoggingConstants").OPERATIONS.HB_COLLECTION_FAILED,
            { urgency: "ig_default" }
          );
          return;
        }
        c("PolarisBDOperationLogHelper").logInfo(
          i,
          d("PolarisBDLoggingConstants").OPERATIONS.HB_COLLECTED,
          { urgency: "ig_default" }
        );
        a.postHeartbeat(b) &&
          d("PolarisBDUtils").setTimestampInStorage(Date.now(), h, i);
      };
      a.postHeartbeat = function (a) {
        var b = {};
        b[38001] = [a == null ? void 0 : a.valueOrError];
        a = JSON.stringify(b);
        return d(
          "PolarisBDClientSignalLogger"
        ).BDClientSignalLogger.postSignalsHelper(a);
      };
      return a;
    })();
    g.HEARTBEAT_TIMESTAMP_STORAGE_KEY = h;
    g.BDHeartbeatSignalCollectionManager = a;
  },
  98
);
__d(
  "PolarisBDSignalBuffer",
  [
    "PolarisBDClientConfig",
    "PolarisBDCollectionTypeEnum",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDSignalBufferData",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDSignalBuffer";
    function a(a, b, d) {
      if (a in c("PolarisBDSignalBufferData")) return;
      var e = 1;
      b !== void 0 && (e = b);
      c("PolarisBDSignalBufferData")[a] = {
        values: [],
        max_buffer_size: e,
        signal_flags: (b = d) != null ? b : [],
      };
    }
    function i(a) {
      if (a in c("PolarisBDSignalBufferData"))
        c("PolarisBDSignalBufferData")[a].values = [];
      else
        throw new Error(
          "Tried to clear signal buffer that was not intialized:"
        );
    }
    function b(a, b) {
      if (a in c("PolarisBDSignalBufferData")) {
        var e = c("PolarisBDSignalBufferData")[a],
          f = e.max_buffer_size;
        e.values.length >= f &&
          (e.signal_flags.includes(4) || e.values.shift());
        e.values.push(b);
        c("PolarisBDOperationLogHelper").logInfo(
          h,
          d("PolarisBDLoggingConstants").OPERATIONS.APPEND_SIGNAL,
          { id: a.toString() }
        );
      } else {
        c("PolarisBDOperationLogHelper").logError(
          h,
          d("PolarisBDLoggingConstants").OPERATIONS.APPEND_SIGNAL_FAIL,
          { id: a.toString() }
        );
        throw new Error("Tried to append signal that was not intialized:");
      }
    }
    function e() {
      var a = c("PolarisBDClientConfig").get();
      a = a.getBiometricSignals();
      a.forEach(function (a) {
        a.signalType in c("PolarisBDSignalBufferData") && i(a.signalType);
      });
    }
    function f(a) {
      var b;
      a = c("PolarisBDSignalBufferData")[a];
      b = a == null ? void 0 : (b = a.values) == null ? void 0 : b.length;
      return b != null && b > 0 ? a.values[b - 1] : { valueOrError: void 0 };
    }
    function j(a) {
      return c("PolarisBDSignalBufferData")[a].values;
    }
    function k(a) {
      var b = {};
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e in c("PolarisBDSignalBufferData") &&
          (b[e] = j(e).map(function (a) {
            return a.valueOrError;
          }));
      }
      return b;
    }
    function l(a) {
      a = m(a);
      return JSON.stringify(k(a));
    }
    function m(a) {
      var b = c("PolarisBDClientConfig").get(),
        d = [];
      a.forEach(function (a) {
        switch (a) {
          case c("PolarisBDCollectionTypeEnum").STATIC:
            d = [].concat(d, b.getStaticSignals());
            break;
          case c("PolarisBDCollectionTypeEnum").DYNAMIC:
            d = [].concat(d, b.getDynamicSignals());
            break;
          case c("PolarisBDCollectionTypeEnum").BIOMETRIC:
            d = [].concat(d, b.getBiometricSignals());
            break;
        }
      });
      return d.map(function (a) {
        return a.signalType;
      });
    }
    g.initialize = a;
    g.clearBuffer = i;
    g.appendSignal = b;
    g.clearBiometricSignals = e;
    g.getLastSignalFormatBySignalId = f;
    g.retrieveSignal = j;
    g.retrieveSignals = k;
    g.getSignalsAsJSONString = l;
    g._getSignalIdsByCollectionType = m;
  },
  98
);
__d(
  "PolarisSignalCollectionManager",
  [
    "PolarisBDBiometricSignalCollectorBase",
    "PolarisBDClientConfig",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDSignalBuffer",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "SignalCollectionManager",
      i = (function () {
        function a() {}
        var e = a.prototype;
        e.collectSignals = (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
            a,
            c
          ) {
            var d = this,
              e = [];
            a.forEach(function (a) {
              a.signalFlags.includes(4) ? d.$1(a, c) : e.push(d.$2(a, c));
            });
            yield b("Promise").all(e);
          });
          function c(b, c) {
            return a.apply(this, arguments);
          }
          return c;
        })();
        e.isEqualToLastCollectedSignal = function (a, b) {
          var c = d("PolarisBDSignalBuffer").getLastSignalFormatBySignalId(
            b.signalType
          );
          return c.valueOrError == null
            ? !1
            : a.isEqual(c.valueOrError, new Set(b.signalFlags));
        };
        e.getCircularBufferSize = function (a) {
          var b = c("PolarisBDClientConfig").get(),
            d = b.getBufferSizeBySignalId(a.signalType);
          if (d != null && b.getBufferSizeBySignalId(a.signalType) > 0)
            return d;
          if (!a.signalFlags.includes(2)) return b.getStaticSignalBufferSize();
          else if (a.signalFlags.includes(4))
            return b.getBiometricSignalBufferSize();
          return b.getDynamicSignalBufferSize();
        };
        e.$2 = (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
            a,
            b
          ) {
            b = a.getSignalCollector(b);
            if (b != null) {
              a.getBufferConfig() == null &&
                d("PolarisBDSignalBuffer").initialize(
                  a.signalType,
                  this.getCircularBufferSize(a),
                  a.signalFlags
                );
              try {
                b = yield b.executeAsyncSignalCollection();
                b.valueOrError &&
                  !this.isEqualToLastCollectedSignal(b.valueOrError, a) &&
                  d("PolarisBDSignalBuffer").appendSignal(a.signalType, b);
              } catch (a) {
                c("PolarisBDOperationLogHelper").logError(
                  h,
                  d("PolarisBDLoggingConstants").OPERATIONS.BD_EXCEPTION,
                  { error: a }
                );
              }
            }
          });
          function e(b, c) {
            return a.apply(this, arguments);
          }
          return e;
        })();
        e.$1 = function (a, b) {
          b = a.getSignalCollector(b);
          b != null &&
            b instanceof
              d("PolarisBDBiometricSignalCollectorBase")
                .BDBiometricSignalCollectorBase &&
            (a.getBufferConfig() == null &&
              d("PolarisBDSignalBuffer").initialize(
                a.signalType,
                this.getCircularBufferSize(a),
                a.signalFlags
              ),
            b.listenForSignals());
        };
        return a;
      })(),
      j = null;
    a = {
      get: function () {
        j == null && (j = new i());
        return j;
      },
    };
    e = a;
    g["default"] = e;
  },
  98
);
__d(
  "PolarisBDPeriodicSignalsCollectionManager",
  [
    "PolarisBDClientConfig",
    "PolarisBDClientSignalLogger",
    "PolarisBDCollectionTypeEnum",
    "PolarisBDSignalBuffer",
    "PolarisBDUtils",
    "PolarisSignalCollectionManager",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDPeriodicSignalsCollectionManager",
      i = "signal_flush_timestamp",
      j = null,
      k = null,
      l = null,
      m = c("PolarisBDClientConfig").get();
    a = (function () {
      function a() {}
      a.resetPeriodicCollectionTimestamp = function () {
        d("PolarisBDUtils").setTimestampInStorage(0, i, h);
      };
      a.startSignalPosting = (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var b = d("PolarisBDUtils").getTimestampFromStorage(i, h);
          b = Date.now() - b;
          b >= m.getAllTiersFlushDurationMs()
            ? yield a.postSignalsIntermittently()
            : (j = window.setTimeout(function () {
                a.postSignalsIntermittently();
              }, m.getAllTiersFlushDurationMs() - b));
        });
        function e() {
          return c.apply(this, arguments);
        }
        return e;
      })();
      a.stopSignalPosting = function () {
        j != null && window.clearTimeout(j),
          k != null && window.clearInterval(k);
      };
      a.collectStaticSignals = (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield a.collectSignalsOneTime(m.getStaticSignals());
        });
        function d() {
          return c.apply(this, arguments);
        }
        return d;
      })();
      a.collectDynamicSignals = function () {
        a.stopDynamicSignalCollection(),
          (l = window.setInterval(
            b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield a.collectSignalsOneTime(m.getDynamicSignals());
            }),
            m.getPeriodicCollectionIntervalMs()
          ));
      };
      a.collectBiometricSignals = function () {
        a.collectSignalsOneTime(m.getBiometricSignals());
      };
      a.postSignals = (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          yield a.collectStaticSignals(),
            d(
              "PolarisBDClientSignalLogger"
            ).BDClientSignalLogger.postSignalsHelper(
              d("PolarisBDSignalBuffer").getSignalsAsJSONString(b)
            ) && d("PolarisBDUtils").setTimestampInStorage(Date.now(), i, h);
        });
        function e(a) {
          return c.apply(this, arguments);
        }
        return e;
      })();
      a.stopDynamicSignalCollection = function () {
        l != null && (window.clearInterval(l), (l = null));
      };
      a.postSignalsIntermittently = function () {
        a.postSignals([c("PolarisBDCollectionTypeEnum").STATIC]),
          (k = window.setInterval(function () {
            a.postSignals([
              c("PolarisBDCollectionTypeEnum").STATIC,
              c("PolarisBDCollectionTypeEnum").DYNAMIC,
              c("PolarisBDCollectionTypeEnum").BIOMETRIC,
            ]);
          }, m.getAllTiersFlushDurationMs()));
      };
      a.postBiometricSignals = function () {
        d("PolarisBDClientSignalLogger").BDClientSignalLogger.postSignalsHelper(
          d("PolarisBDSignalBuffer").getSignalsAsJSONString([
            c("PolarisBDCollectionTypeEnum").BIOMETRIC,
          ])
        ) && d("PolarisBDSignalBuffer").clearBiometricSignals();
      };
      a.collectSignalsOneTime = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b = m.getClientReputationTier();
          b !== 0 &&
            (yield c("PolarisSignalCollectionManager")
              .get()
              .collectSignals(a, b));
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      return a;
    })();
    g.BDPeriodicSignalsCollectionManager = a;
  },
  98
);
__d(
  "PolarisBDServerConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 24;
    function a(a, b, c) {
      return {
        bbs: 100,
        ctw: g,
        dbs: 100,
        fd: 30,
        hbc: { hbbi: 30, hbcbc: 2, hbi: 60, hbv: c, hbvbc: 0 },
        i: 60,
        rt: b,
        sbs: 1,
        sc: {
          c: new Map([
            [3e4, 838801],
            [30001, 838801],
            [30002, 838801],
            [30003, 838801],
            [30004, 838801],
            [30005, 838801],
            [30006, 573585],
            [30007, 838801],
            [30008, 838801],
            [30009, 573585],
            [30010, 573585],
            [30012, 573585],
            [30015, 540817],
            [30018, 540817],
            [30040, 540817],
            [30100, 541591],
            [30101, 541591],
            [30102, 541591],
            [30103, 541591],
            [30104, 541591],
            [38e3, 541427],
            [38001, 806643],
          ]),
          t: 1612206578,
        },
        sid: a,
      };
    }
    f.DEFAULT_BD_CHALLENGE_TIME_WINDOW_HOURS = g;
    f.getBdChallengeDefaultConfig = a;
  },
  66
);
__d(
  "PolarisBDServerSignalConfig",
  [
    "BotDetection_SignalFlags",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerSignalConfig";
    a = (function () {
      function a(a, b, c) {
        (this.parsedSignalFlags = []),
          (this.signalId = a),
          (this.signalFlags = b),
          (this.bufferSize = c);
      }
      var b = a.prototype;
      b.getSignalId = function () {
        return this.signalId;
      };
      b.getSignalFlags = function () {
        var a = this;
        if (this.parsedSignalFlags.length === 0) {
          var b = Object.keys(c("BotDetection_SignalFlags"));
          b.forEach(function (b) {
            (c("BotDetection_SignalFlags")[b] & a.signalFlags) ===
              c("BotDetection_SignalFlags")[b] &&
              a.parsedSignalFlags.push(c("BotDetection_SignalFlags")[b]);
          });
        }
        this.parsedSignalFlags.length === 0 &&
          c("PolarisBDOperationLogHelper").logError(
            h,
            d("PolarisBDLoggingConstants").OPERATIONS.SIGNAL_FLAGS_MISSING,
            { id: this.signalId.toString(), flags: this.signalFlags.toString() }
          );
        return this.parsedSignalFlags;
      };
      b.getBufferSize = function () {
        return this.bufferSize != null ? this.bufferSize : 0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisBDServerConfigParser",
  [
    "PolarisBDClientConfig",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDServerSignalConfig",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDServerConfig";
    a = {
      parseConfig: function (a) {
        var b = [];
        try {
          var e = a.sc,
            f = new Map(e.c);
          f.forEach(function (a, d) {
            return b.push(new (c("PolarisBDServerSignalConfig"))(d, a));
          });
          if (f.size === 0) {
            c("PolarisBDOperationLogHelper").logError(
              h,
              d("PolarisBDLoggingConstants").OPERATIONS.EMPTY_SIGNAL_CONFIG
            );
            return;
          }
          f = c("PolarisBDClientConfig").get();
          f.setClientReputationTier(a.rt)
            .addMultipleSignalsToClientConfig(b)
            .setPeriodicCollectionIntervalSeconds(a.i)
            .setConfigGenerationTimeStamp(e.t)
            .setAllTiersFlushDurationMinutes(a.fd)
            .setStaticSignalBufferSize(a.sbs)
            .setDynamicSignalBufferSize(a.dbs)
            .setBiometricSignalBufferSize(a.bbs)
            .setSID(a.sid)
            .setHeartbeatConfig(a.hbc)
            .setParsingDone(!0);
        } catch (a) {
          c("PolarisBDOperationLogHelper").logError(
            h,
            d("PolarisBDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
            { e: a }
          );
        }
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisBDClientSignalCollectionTrigger",
  [
    "PolarisBDClientConfig",
    "PolarisBDClientSignalLogger",
    "PolarisBDCollectionTypeEnum",
    "PolarisBDHeartbeatSignalCollectionManager",
    "PolarisBDLoggingConstants",
    "PolarisBDOperationLogHelper",
    "PolarisBDPeriodicSignalsCollectionManager",
    "PolarisBDServerConfig",
    "PolarisBDServerConfigParser",
    "PolarisBDUtils",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "BDClientSignalCollectionTrigger",
      i = "bdc_end_timestamp",
      j = "bdc_event",
      k = d("PolarisBDUtils").uuid(),
      l = c("PolarisBDClientConfig").get(),
      m = !1,
      n,
      o = null,
      p = 5,
      q;
    a = (function () {
      function a() {}
      a.startSignalCollection = (function () {
        var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* (e, f) {
          e != null && l.setSID(e.sid);
          if (!f) {
            n = e;
            d("PolarisBDClientSignalLogger").BDClientSignalLogger.setAsid(k);
            if (a.isBdChallengeCompletionPending()) {
              f = d("PolarisBDUtils").getEventFromStorage(j, h);
              if (f) {
                a.startChallengeBasedSignalCollection(f);
                return;
              }
            }
          }
          if (!m && e != null) {
            m = !0;
            c("PolarisBDServerConfigParser").parseConfig(e);
            if (!l.isParsingDone()) {
              c("PolarisBDOperationLogHelper").logError(
                h,
                d("PolarisBDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
                { config: JSON.stringify(e) }
              );
              m = !1;
              return;
            }
            d(
              "PolarisBDHeartbeatSignalCollectionManager"
            ).BDHeartbeatSignalCollectionManager.startHeartbeatDelayed();
            q = new (b("Promise"))(function (a, b) {
              try {
                l.getClientReputationTier() !== 0 &&
                  (l.getDynamicSignals().length > 0 &&
                    (d(
                      "PolarisBDPeriodicSignalsCollectionManager"
                    ).BDPeriodicSignalsCollectionManager.collectDynamicSignals(),
                    c("PolarisBDOperationLogHelper").logInfo(
                      h,
                      d("PolarisBDLoggingConstants").OPERATIONS
                        .DYNAMIC_SIGNAL_COLLECTION_STARTED,
                      { ts: Date.now().toString() }
                    )),
                  l.getBiometricSignals().length > 0 &&
                    (d(
                      "PolarisBDPeriodicSignalsCollectionManager"
                    ).BDPeriodicSignalsCollectionManager.collectBiometricSignals(),
                    c("PolarisBDOperationLogHelper").logInfo(
                      h,
                      d("PolarisBDLoggingConstants").OPERATIONS
                        .BIOMETRIC_SIGNAL_COLLECTION_STARTED,
                      { ts: Date.now().toString() }
                    ))),
                  a();
              } catch (a) {
                b(a);
              }
            });
            l.getClientReputationTier() !== 0 &&
              (yield q,
              yield d(
                "PolarisBDPeriodicSignalsCollectionManager"
              ).BDPeriodicSignalsCollectionManager.startSignalPosting());
          }
          m &&
            !d(
              "PolarisBDHeartbeatSignalCollectionManager"
            ).BDHeartbeatSignalCollectionManager.isHeartbeatStarted() &&
            !d(
              "PolarisBDHeartbeatSignalCollectionManager"
            ).BDHeartbeatSignalCollectionManager.isHeartbeatDelayed() &&
            p > 0 &&
            ((p -= 1),
            c("PolarisBDOperationLogHelper").logWarning(
              h,
              d("PolarisBDLoggingConstants").OPERATIONS.TRY_RESTARTING_HB
            ),
            d(
              "PolarisBDHeartbeatSignalCollectionManager"
            ).BDHeartbeatSignalCollectionManager.startHeartbeatDelayed());
        });
        function f(a, b) {
          return e.apply(this, arguments);
        }
        return f;
      })();
      a.isBdChallengeCompletionPending = function () {
        return d("PolarisBDUtils").getTimestampFromStorage(i, h) > Date.now();
      };
      a.handleBdChallenge = (function () {
        var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          a.persistBdChallengeEvent(b),
            yield q,
            yield d(
              "PolarisBDPeriodicSignalsCollectionManager"
            ).BDPeriodicSignalsCollectionManager.postSignals([
              c("PolarisBDCollectionTypeEnum").DYNAMIC,
              c("PolarisBDCollectionTypeEnum").BIOMETRIC,
              c("PolarisBDCollectionTypeEnum").STATIC,
            ]),
            a.stopSignalCollection(),
            a.stopBdChallengeBasedCollectionTimer(),
            d(
              "PolarisBDPeriodicSignalsCollectionManager"
            ).BDPeriodicSignalsCollectionManager.resetPeriodicCollectionTimestamp(),
            d(
              "PolarisBDHeartbeatSignalCollectionManager"
            ).BDHeartbeatSignalCollectionManager.resetHeartbeatCollectionTimestamp(),
            a.startChallengeBasedSignalCollection(b);
        });
        function f(a) {
          return e.apply(this, arguments);
        }
        return f;
      })();
      a.startChallengeBasedSignalCollection = (function () {
        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          var c = a.getSignalCollectionConfig(b);
          d("PolarisBDClientSignalLogger").BDClientSignalLogger.setAsid(
            b.challenge_id
          );
          a.startSignalCollection(c, !0);
          b = d("PolarisBDUtils").getTimestampFromStorage(i, h) - Date.now();
          o = window.setTimeout(function () {
            a.stopSignalCollection(), a.startSignalCollection(n, !1);
          }, b);
        });
        function e(a) {
          return c.apply(this, arguments);
        }
        return e;
      })();
      a.getSignalCollectionConfig = function (a) {
        if (a.config != null && a.config !== "") {
          a = JSON.parse(a.config);
          a.sid = l.sid;
          a.rt = l.getClientReputationTier();
          a.getHeartbeatVersion = l.getHeartbeatVersion();
          return a;
        }
        return d("PolarisBDServerConfig").getBdChallengeDefaultConfig(
          l.sid,
          l.getClientReputationTier(),
          l.getHeartbeatVersion()
        );
      };
      a.persistBdChallengeEvent = function (b) {
        var c,
          e = d("PolarisBDUtils").getEventFromStorage(j, h),
          f = d("PolarisBDUtils").getTimestampFromStorage(i, h);
        e = e != null && e.challenge_id === b.challenge_id;
        c =
          Date.now() +
          ((c =
            (c = a.getSignalCollectionConfig(b)) == null ? void 0 : c.ctw) !=
          null
            ? c
            : d("PolarisBDServerConfig")
                .DEFAULT_BD_CHALLENGE_TIME_WINDOW_HOURS) *
            d("PolarisBDUtils").MILLISECONDS_IN_HOUR;
        e || d("PolarisBDUtils").setEventInStorage(b, j, h);
        (!e || f === 0) && d("PolarisBDUtils").setTimestampInStorage(c, i, h);
      };
      a.stopSignalCollection = function () {
        d(
          "PolarisBDHeartbeatSignalCollectionManager"
        ).BDHeartbeatSignalCollectionManager.stopHeartbeat(),
          d(
            "PolarisBDPeriodicSignalsCollectionManager"
          ).BDPeriodicSignalsCollectionManager.stopDynamicSignalCollection(),
          d(
            "PolarisBDPeriodicSignalsCollectionManager"
          ).BDPeriodicSignalsCollectionManager.stopSignalPosting(),
          (m = !1);
      };
      a.stopBdChallengeBasedCollectionTimer = function () {
        o != null && window.clearTimeout(o);
      };
      a.resetStartedForTest = function () {
        m = !1;
      };
      return a;
    })();
    g.BDClientSignalCollectionTrigger = a;
  },
  98
);
__d(
  "SecurePostMessage",
  ["invariant"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
      sendMessageToSpecificOrigin: function (a, b, c, d) {
        c !== h || g(0, 21157), a.postMessage(b, c, d);
      },
      sendMessageForCurrentOrigin: function (a, b) {
        a.postMessage(b);
      },
      sendMessageAllowAnyOrigin_UNSAFE: function (a, b, c) {
        a.postMessage(b, h, c);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SecureMessageListener",
  ["SecurePostMessage", "URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.$3 = null;
        this.$4 = !1;
        this.$1 = a;
        this.$5 = function (a) {
          b.run(a);
        };
      }
      var b = a.prototype;
      b.setEventHandler = function (a) {
        this.$2 = a;
        return this;
      };
      b.setSupportedOrigins = function (a) {
        this.$3 = a;
        return this;
      };
      b.skipOriginCheck_UNSAFE = function () {
        this.$4 = !0;
        return this;
      };
      b.beginListening = function () {
        this.$1.addEventListener("message", this.$5);
        return this;
      };
      b.stopListening = function () {
        this.$1.removeEventListener("message", this.$5);
        return this;
      };
      b.run = function (a) {
        if (this.$3 == null || this.$3.length === 0) {
          if (!this.$4 && a.origin !== this.$1.location.origin) return;
        } else if (!this.isSupportedOrigin(this.$3, a.origin)) return;
        if (this.$2)
          if (this.$2.length == 1) this.$2(a);
          else {
            var b = function (b) {
              d("SecurePostMessage").sendMessageToSpecificOrigin(
                a.source,
                b,
                a.origin
              );
            };
            this.$2(a, b);
          }
      };
      b.isSupportedOrigin = function (a, b) {
        if (!new RegExp("^https://").test(b)) return !1;
        var d = new (c("URI"))(b);
        return a.some(function (a) {
          return d.isSubdomainOfDomain(a);
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
