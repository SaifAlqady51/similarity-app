/*FB_PKG_DELIM*/

__d(
  "PolarisBaseGraphQLEventHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "1/graphqlsubscriptions/",
      h = Object.freeze({
        PRESENCE: "Presence",
        BD_CHALLENGE: "BdChallenge",
        WAVE: "Wave",
        PINNED_QUESTION: "PinnedQuestion",
        QUESTION_STATUS: "QuestionStatus",
        NONE: "",
      });
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.processEventMessage = function (a) {
        return;
      };
      b.getSubTopic = function () {
        return null;
      };
      b.getGraphQLSubsciptionPrefix = function () {
        return g;
      };
      b.getType = function () {
        return h.NONE;
      };
      return a;
    })();
    f.GRAPH_QL_EVENT_TYPES = h;
    f.BaseGraphQLEventHandler = a;
  },
  66
);
__d(
  "PolarisBdChallengeGraphQLEventHandler",
  [
    "JSResourceForInteraction",
    "PolarisBaseGraphQLEventHandler",
    "PolarisDirectLogger",
    "uuid",
    "xigRequireInterop",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "17935802131473058";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this) || this;
        e.$BdChallengeGraphQLEventHandler1 = new (d(
          "PolarisDirectLogger"
        ).DirectLogger)("BDChallengeGraphQLEventHandler", b);
        e.$BdChallengeGraphQLEventHandler1.debugTrace(
          "bd_challenge_gql_handler_init"
        );
        e.$BdChallengeGraphQLEventHandler2 =
          e.getGraphQLSubsciptionPrefix() +
          h +
          "/" +
          JSON.stringify({
            input_data: { client_subscription_id: c("uuid")() },
          });
        return e;
      }
      var e = b.prototype;
      e.processEventMessage = function (a) {
        var b = a.bd_challenge_event;
        if (b == null) {
          this.$BdChallengeGraphQLEventHandler1.debugTrace(
            "parsed_message_bad_data"
          );
          return;
        }
        c("JSResourceForInteraction")("PolarisBDClientSignalCollectionTrigger")
          .__setRef("PolarisBdChallengeGraphQLEventHandler")
          .load()
          .then(function (a) {
            return c("xigRequireInterop")(a);
          })
          .then(function (a) {
            a = a.BDClientSignalCollectionTrigger;
            a.handleBdChallenge(b);
          });
      };
      e.getSubTopic = function () {
        return this.$BdChallengeGraphQLEventHandler2;
      };
      e.getType = function () {
        return d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
          .BD_CHALLENGE;
      };
      return b;
    })(d("PolarisBaseGraphQLEventHandler").BaseGraphQLEventHandler);
    g.BdChallengeGraphQLEventHandler = a;
  },
  98
);
__d(
  "PolarisDirectBaseSubscription",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d) {
        var e = this;
        this.$5 = function (a) {
          e.$4.debugTrace("message_received");
          var b = e.parsePayload(a);
          if (b == null) return;
          if (a.length === 0) {
            e.$4.logError("empty_message");
            return;
          } else
            a[a.length - 1] === "\0"
              ? ((b = a.substring(0, a.length - 1)),
                e.$4.debugTrace("trimmed_null_char"))
              : (b = a);
          var c = {};
          try {
            c = JSON.parse(b);
          } catch (c) {
            typeof c.message === "string" &&
              c.message.includes("Unexpected token") &&
              (c.jsonFirstChars =
                typeof b === "string" ? b.substr(0, 3) : null);
            e.$4.logError("Cannot parse message " + a, c);
            return;
          }
          e.processMessage(c);
        };
        this.$1 = a;
        this.$2 = b;
        this.$3 = c;
        this.$4 = d;
        this.$4.debugTrace("ctor");
      }
      var b = a.prototype;
      b.parsePayload = function (a) {
        return a;
      };
      b.processMessage = function (a) {
        return;
      };
      b.$6 = function (a) {
        var b;
        return JSON.stringify(((b = {}), (b[a] = this.getSubTopics()), b));
      };
      b.subscribe = function () {
        if (this.getSubTopics().length < 1) {
          this.$4.debugTrace("no_subtopics_to_subscribe");
          return;
        }
        this.$4.debugTrace("subscribe_start");
        this.unsubscribe();
        this.$3.subscribe(this.$1, this.$5);
        this.$3.publish(this.$1, this.$6("sub"));
        this.$4.debugTrace("subscribe_end");
      };
      b.unsubscribe = function () {
        if (this.getSubTopics().length < 1) {
          this.$4.debugTrace("no_subtopics_to_unsubscribe");
          return;
        }
        this.$4.debugTrace("unsubscribe_start");
        this.$3.publish(this.$1, this.$6("unsub"));
        this.$3.unsubscribe(this.$1);
        this.$4.debugTrace("unsubscribe_end");
      };
      b.updateSubTopics = function (a) {
        this.$2 = a;
      };
      b.getSubTopics = function () {
        return this.$2;
      };
      return a;
    })();
    f.DirectBaseSubscription = a;
  },
  66
);
__d(
  "PolarisPinnedQuestionGraphQLEventHandler",
  ["PolarisBaseGraphQLEventHandler", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "PINNED_QUESTION",
      i = "18005526940184517";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$PinnedQuestionGraphQLEventHandler1 = b;
        e.$PinnedQuestionGraphQLEventHandler2 =
          e.getGraphQLSubsciptionPrefix() +
          i +
          "/" +
          JSON.stringify({
            input_data: {
              client_subscription_id: c("uuid")(),
              broadcast_id: String(d.id),
            },
          });
        return e;
      }
      var e = b.prototype;
      e.processEventMessage = function (a) {
        a = a.live_active_question_event;
        if (a == null) return;
        a = { question: a, type: h };
        this.$PinnedQuestionGraphQLEventHandler1.eventHandler(a);
      };
      e.getSubTopic = function () {
        return this.$PinnedQuestionGraphQLEventHandler2;
      };
      e.getType = function () {
        return d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
          .PINNED_QUESTION;
      };
      return b;
    })(d("PolarisBaseGraphQLEventHandler").BaseGraphQLEventHandler);
    g.PinnedQuestionGraphQLEventHandler = a;
  },
  98
);
__d(
  "PolarisPresenceGraphQLEventHandler",
  ["PolarisBaseGraphQLEventHandler", "PolarisDirectLogger", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "17846944882223835";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e) {
        var f;
        f = a.call(this) || this;
        f.$PresenceGraphQLEventHandler2 = new (d(
          "PolarisDirectLogger"
        ).DirectLogger)("PresenceGraphQLEventHandler", e);
        f.$PresenceGraphQLEventHandler1 = b;
        f.$PresenceGraphQLEventHandler2.debugTrace("presence_gql_handler_init");
        f.$PresenceGraphQLEventHandler3 =
          f.getGraphQLSubsciptionPrefix() +
          h +
          "/" +
          JSON.stringify({
            input_data: { client_subscription_id: c("uuid")() },
          });
        return f;
      }
      var e = b.prototype;
      e.processEventMessage = function (a) {
        a = a.presence_event;
        if (a == null) {
          this.$PresenceGraphQLEventHandler2.debugTrace(
            "parsed_message_bad_data"
          );
          return;
        }
        this.$PresenceGraphQLEventHandler1.onPresenceUpdated(a);
      };
      e.getSubTopic = function () {
        return this.$PresenceGraphQLEventHandler3;
      };
      e.getType = function () {
        return d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
          .PRESENCE;
      };
      return b;
    })(d("PolarisBaseGraphQLEventHandler").BaseGraphQLEventHandler);
    g.PresenceGraphQLEventHandler = a;
  },
  98
);
__d(
  "PolarisQuestionStatusGraphQLEventHandler",
  ["PolarisBaseGraphQLEventHandler", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "QUESTION_STATUS",
      i = "18027779584026952";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this) || this;
        e.$QuestionStatusGraphQLEventHandler1 = b;
        e.$QuestionStatusGraphQLEventHandler2 =
          e.getGraphQLSubsciptionPrefix() +
          i +
          "/" +
          JSON.stringify({
            input_data: {
              client_subscription_id: c("uuid")(),
              broadcast_id: String(d.id),
            },
          });
        return e;
      }
      var e = b.prototype;
      e.processEventMessage = function (a) {
        a = a.live_question_submission_status_event;
        if (a == null) return;
        a = { status: a, type: h };
        this.$QuestionStatusGraphQLEventHandler1.eventHandler(a);
      };
      e.getSubTopic = function () {
        return this.$QuestionStatusGraphQLEventHandler2;
      };
      e.getType = function () {
        return d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
          .QUESTION_STATUS;
      };
      return b;
    })(d("PolarisBaseGraphQLEventHandler").BaseGraphQLEventHandler);
    g.QuestionStatusGraphQLEventHandler = a;
  },
  98
);
__d(
  "PolarisWaveGraphQLEventHandler",
  ["PolarisBaseGraphQLEventHandler", "PolarisConfig", "uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "LIVE_WAVE",
      i = "17882305414154951";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e) {
        var f;
        f = a.call(this) || this;
        f.$WaveGraphQLEventHandler1 = b;
        f.$WaveGraphQLEventHandler2 =
          f.getGraphQLSubsciptionPrefix() +
          i +
          "/" +
          JSON.stringify({
            input_data: {
              client_subscription_id: c("uuid")(),
              receiver_id: d("PolarisConfig").getViewerId(),
              broadcast_id: String(e.id),
            },
            publish_data: {
              broadcast_id: String(e.id),
              receiver_id: d("PolarisConfig").getViewerId(),
              waver_id: String(e.broadcast_owner),
            },
          });
        return f;
      }
      var e = b.prototype;
      e.processEventMessage = function (a) {
        a = a.live_video_wave_event;
        if (a == null) return;
        a = { type: h, wave: a };
        this.$WaveGraphQLEventHandler1.eventHandler(a);
      };
      e.getSubTopic = function () {
        return this.$WaveGraphQLEventHandler2;
      };
      e.getType = function () {
        return d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE;
      };
      return b;
    })(d("PolarisBaseGraphQLEventHandler").BaseGraphQLEventHandler);
    g.WaveGraphQLEventHandler = a;
  },
  98
);
__d(
  "PolarisDirectGraphQLSubscription",
  [
    "PolarisBaseGraphQLEventHandler",
    "PolarisBdChallengeGraphQLEventHandler",
    "PolarisDirectBaseSubscription",
    "PolarisDirectLogger",
    "PolarisPinnedQuestionGraphQLEventHandler",
    "PolarisPresenceGraphQLEventHandler",
    "PolarisQuestionStatusGraphQLEventHandler",
    "PolarisWaveGraphQLEventHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "/ig_realtime_sub";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, e) {
        e = new (d("PolarisDirectLogger").DirectLogger)(
          "DirectGraphQLSubscription",
          e
        );
        c = a.call(this, h, [], c, e) || this;
        c.$DirectGraphQLSubscription2 = e;
        c.$DirectGraphQLSubscription1 = b;
        c.$DirectGraphQLSubscription3 = new Map();
        c.$DirectGraphQLSubscription4();
        c.getSubTopics();
        return c;
      }
      var c = b.prototype;
      c.$DirectGraphQLSubscription4 = function () {
        var a = Object.keys(
          d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
        );
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES[c] !==
            d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.PRESENCE &&
            d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES[c] !==
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE &&
            d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES[c] !==
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                .PINNED_QUESTION &&
            !this.$DirectGraphQLSubscription5(
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES[c]
            ) &&
            this.$DirectGraphQLSubscription2.debugTrace("invalid_handler_type");
        }
      };
      c.getSubTopics = function () {
        var a = [];
        for (
          var b = this.$DirectGraphQLSubscription3,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e[0];
          e = e[1];
          e = e.getSubTopic();
          e != null && e !== "" && a.push(e);
        }
        this.updateSubTopics(a);
        return a;
      };
      c.processMessage = function (b) {
        for (
          var c = this.$DirectGraphQLSubscription3,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          f[0];
          f = f[1];
          f.processEventMessage(b);
        }
        a.prototype.processMessage.call(this, b);
      };
      c.enableOrDisableEventHandlerByType = function (a, b) {
        b
          ? this.$DirectGraphQLSubscription5(a) ||
            this.$DirectGraphQLSubscription2.debugTrace("invalid_handler_type")
          : this.$DirectGraphQLSubscription3["delete"](a);
        return this;
      };
      c.$DirectGraphQLSubscription5 = function (a) {
        this.$DirectGraphQLSubscription3 ||
          (this.$DirectGraphQLSubscription3 = new Map());
        var b = this.$DirectGraphQLSubscription6(a);
        if (b != null) {
          this.$DirectGraphQLSubscription3.set(a, b);
          return !0;
        }
        return !1;
      };
      c.$DirectGraphQLSubscription6 = function (a) {
        switch (a) {
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .PRESENCE:
            return new (d(
              "PolarisPresenceGraphQLEventHandler"
            ).PresenceGraphQLEventHandler)(
              this.$DirectGraphQLSubscription1,
              this.$DirectGraphQLSubscription2.getDebugId()
            );
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .BD_CHALLENGE:
            return new (d(
              "PolarisBdChallengeGraphQLEventHandler"
            ).BdChallengeGraphQLEventHandler)(
              this.$DirectGraphQLSubscription2.getDebugId()
            );
          default:
            return null;
        }
      };
      c.enableLiveEventHandler = function (a, b, c) {
        switch (c) {
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE:
            this.$DirectGraphQLSubscription3.set(
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE,
              new (d("PolarisWaveGraphQLEventHandler").WaveGraphQLEventHandler)(
                b,
                a
              )
            );
            return this;
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .PINNED_QUESTION:
            this.$DirectGraphQLSubscription3.set(
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                .PINNED_QUESTION,
              new (d(
                "PolarisPinnedQuestionGraphQLEventHandler"
              ).PinnedQuestionGraphQLEventHandler)(b, a)
            );
            return this;
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .QUESTION_STATUS:
            this.$DirectGraphQLSubscription3.set(
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                .QUESTION_STATUS,
              new (d(
                "PolarisQuestionStatusGraphQLEventHandler"
              ).QuestionStatusGraphQLEventHandler)(b, a)
            );
            return this;
          default:
            return this;
        }
      };
      c.disableLiveEventHandler = function (a) {
        switch (a) {
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE:
            this.$DirectGraphQLSubscription3["delete"](
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE
            );
            return this;
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .PINNED_QUESTION:
            this.$DirectGraphQLSubscription3["delete"](
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                .PINNED_QUESTION
            );
            return this;
          case d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
            .QUESTION_STATUS:
            this.$DirectGraphQLSubscription3["delete"](
              d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                .QUESTION_STATUS
            );
            return this;
          default:
            return this;
        }
      };
      c.unsubscribeGraphQL = function () {
        this.unsubscribe(),
          this.enableOrDisableEventHandlerByType(
            d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.PRESENCE,
            !1
          ),
          this.enableOrDisableEventHandlerByType(
            d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES.WAVE,
            !1
          );
      };
      return b;
    })(d("PolarisDirectBaseSubscription").DirectBaseSubscription);
    g.DirectGraphQLSubscription = a;
  },
  98
);
__d(
  "PolarisDirectIrisSubscription",
  ["PolarisDirectLogger", "isObject", "polarisUnexpected"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1,
      i = 2,
      j = 1e3,
      k = 64e3;
    a = (function () {
      function a(a, b, e, f) {
        var g = this;
        this.$7 = function () {
          g.$6.logDirectClientEvent(
            "ig_direct_iris_subscription",
            d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES
              .ig_direct_realtime,
            babelHelpers["extends"]({}, g.$2, {
              action: "attempt",
              attempt_reason: "mqtt-connected",
            })
          );
          g.$1.onIrisConnectivityChanged("Subscribing");
          var a = JSON.stringify(g.$2);
          g.$3.publish("/ig_sub_iris", a)["catch"](function (a) {
            g.$6.logDirectClientEvent(
              "ig_direct_iris_subscription",
              d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES
                .ig_direct_realtime,
              babelHelpers["extends"]({}, g.$2, {
                action: "error",
                error: JSON.stringify(a),
              })
            ),
              g.$1.onIrisConnectivityChanged("Unsubscribed");
          });
        };
        this.$8 = function (a) {
          var b;
          if (typeof a === "string" || a instanceof String)
            try {
              b = JSON.parse(a);
            } catch (a) {
              var e = "Could not parse sub iris response $(response)";
              g.$6.logError(e, a);
              c("polarisUnexpected")(e);
              b = a;
            }
          else
            c("isObject")(a)
              ? (b = a)
              : (c("polarisUnexpected")(
                  "Unknown sub iris response $(response)"
                ),
                (b = { succeeded: !1 }));
          if (b.succeeded === !0)
            g.$6.logDirectClientEvent(
              "ig_direct_iris_subscription",
              d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES
                .ig_direct_realtime,
              babelHelpers["extends"]({}, g.$2, { action: "success" })
            ),
              g.$1.onIrisConnectivityChanged(
                "Subscribed",
                g.$2.subscription_type
              );
          else {
            g.$6.logDirectClientEvent(
              "ig_direct_iris_subscription",
              d("PolarisDirectLogger").DIRECT_CONTAINER_MODULES
                .ig_direct_realtime,
              babelHelpers["extends"]({}, g.$2, b, { action: "error" })
            );
            g.$1.onIrisConnectivityChanged("Unsubscribed");
            if (b.error_type === h) g.$1.onResnapshotRequested(g.$2);
            else if (b.error_type === i) {
              e = g.$4 + Math.floor(Math.random() * 1e3);
              window.setTimeout(g.$7, e);
              g.$4 = Math.min(g.$4 * 2, k);
            }
          }
        };
        this.$6 = new (d("PolarisDirectLogger").DirectLogger)(
          "DirectIrisSubscription",
          f
        );
        this.$6.debugTrace("ctor", b);
        this.$1 = a;
        this.$2 = b;
        this.$3 = e;
        this.$4 = j;
      }
      var b = a.prototype;
      b.subscribe = function () {
        this.$6.debugTrace("subscribe_start"),
          this.unsubscribe(),
          this.$3.subscribe("/ig_sub_iris_response", this.$8),
          this.$7(),
          this.$6.debugTrace("subscribe_end");
      };
      b.unsubscribe = function () {
        this.$6.debugTrace("unsubscribe_start"),
          this.$5 && (window.clearTimeout(this.$5), (this.$5 = null)),
          this.$3.unsubscribe("/ig_sub_iris_response"),
          this.$1.onIrisConnectivityChanged("Unsubscribed"),
          this.$6.debugTrace("unsubscribe_end");
      };
      return a;
    })();
    g.DirectIrisSubscription = a;
  },
  98
);
__d(
  "PolarisDirectSkywalkerSubscription",
  [
    "PolarisConfig",
    "PolarisDirectBaseSubscription",
    "PolarisDirectLogger",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "/pubsub";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f) {
        f = new (d("PolarisDirectLogger").DirectLogger)(
          "DirectSkywalkerSubscription",
          f
        );
        e =
          a.call(
            this,
            h,
            ["ig/u/v1/" + c("nullthrows")(d("PolarisConfig").getViewerId())],
            e,
            f
          ) || this;
        e.$DirectSkywalkerSubscription2 = f;
        e.$DirectSkywalkerSubscription1 = b;
        return e;
      }
      var e = b.prototype;
      e.parsePayload = function (b) {
        if (b.indexOf("/activity_indicator_id/") === -1) {
          this.$DirectSkywalkerSubscription2.debugTrace(
            "not_activity_indicator_message"
          );
          return null;
        }
        return a.prototype.parsePayload.call(this, b);
      };
      e.processMessage = function (b) {
        var c = b.data,
          d = b.event;
        if (d !== "patch") {
          this.$DirectSkywalkerSubscription2.debugTrace("skipped_message", {
            event: d,
          });
          return;
        }
        if (!Array.isArray(c)) {
          this.$DirectSkywalkerSubscription2.debugTrace(
            "parsed_message_bad_data",
            typeof c
          );
          return;
        }
        for (
          var d = c,
            c = Array.isArray(d),
            e = 0,
            d = c
              ? d
              : d[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= d.length) break;
            f = d[e++];
          } else {
            e = d.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          this.$DirectSkywalkerSubscription1.handleDelta(f, "");
        }
        a.prototype.processMessage.call(this, b);
      };
      return b;
    })(d("PolarisDirectBaseSubscription").DirectBaseSubscription);
    g.DirectSkywalkerSubscription = a;
  },
  98
);
__d(
  "PolarisLiveDeltaHandler",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a) {
      this.eventHandler = a;
    };
    f["default"] = a;
  },
  66
);
__d(
  "PolarisChannelClientID",
  ["uuid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("uuid")();
    a = {
      getID: function () {
        return h;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PolarisMqttEnv",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
      mqtt_ep_with_sid: 0,
      mqtt_waterfall_log_client_sampling: 1,
      messenger_uses_mqtt_rollout: 2,
      mqtt_ws_polling_enabled: 3,
      mqtt_ws_forced_polling_only: 4,
      mqtt_send_unload_event: 6,
      mqtt_ws_reconnect_reset: 7,
      mqtt_lp_use_fetch: 9,
      mqtt_fast_lp: 11,
    });
    b = (function () {
      var a = b.prototype;
      a.random = function () {
        return this.$1 != null ? this.$1() : Math.random();
      };
      a.isUserLoggedInNow = function () {
        return this.$2 != null ? this.$2() : !0;
      };
      a.clearTimeout = function (a) {
        if (this.$3 != null) {
          this.$3(a);
          return;
        }
        window.clearTimeout(a);
      };
      a.setTimeout = function (a, b) {
        for (
          var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
          e < c;
          e++
        )
          d[e - 2] = arguments[e];
        return this.$4 != null
          ? this.$4.apply(null, arguments)
          : window.setTimeout.apply(null, arguments);
      };
      a.getLoggerInstance = function () {
        return this.$5 != null ? this.$5() : g.getInstance();
      };
      a.genGk = function (a) {
        return this.$6 != null ? this.$6(a) : !1;
      };
      a.createSocket = function (a, b) {
        return this.$7 != null ? this.$7(a, b) : new WebSocket(a);
      };
      a.scheduleCallback = function (a) {
        return this.$8 != null ? this.$8(a) : a();
      };
      a.scheduleLoggingCallback = function (a) {
        return this.$9 != null ? this.$9(a) : a();
      };
      a.configRead = function (a, b) {
        return this.$10 != null ? this.$10(a, b) : b;
      };
      a.configWrite = function (a, b) {
        this.$11 != null && this.$11(a, b);
      };
      function b() {
        (this.$1 = null),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = null),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = null),
          (this.$9 = null),
          (this.$10 = null),
          (this.$11 = null);
      }
      a.initialize = function (a, b, c, d, e, f, g, h, i, j, k) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$7 = g),
          (this.$8 = h),
          (this.$9 = i),
          (this.$10 = j),
          (this.$11 = k);
      };
      return b;
    })();
    var g = (function () {
      function a() {}
      a.getInstance = function () {
        return new a();
      };
      var b = a.prototype;
      b.setAppId = function (a) {};
      b.eventLogConnect = function (a) {
        a.attemptNumber,
          a.connectionStatus,
          a.duration,
          a.errorCode,
          a.errorMessage,
          a.failTotal,
          a.hostname,
          a.publishes,
          a.sessionID,
          a.subscribedTopics,
          a.successTotal;
      };
      b.eventLogPull = function (a) {
        a.duration,
          a.errorMessage,
          a.hostname,
          a.pullEventName,
          a.sessionID,
          a.status;
      };
      b.eventLogDisconnect = function (a) {
        a.duration, a.errorCode, a.errorMessage, a.sessionID;
      };
      b.eventLogPublish = function (a) {
        a.connectionStatus, a.publishStatus, a.sessionID, a.topic;
      };
      b.eventLogMiscellaneousError = function (a) {
        a.errorMessage;
      };
      b.logError = function (a, b) {};
      b.logErrorWarn = function (a, b) {};
      b.logWarn = function (a, b) {};
      b.debugTrace = function (a, b) {};
      b.bumpCounter = function (a) {};
      return a;
    })();
    e.exports = { Env: new b(), MqttGkNames: a };
  },
  null
);
__d(
  "PolarisIrisSubscribeChecker",
  ["PolarisMqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("PolarisMqttEnv").Env,
      h = b("PolarisMqttEnv").MqttGkNames;
    a = (function () {
      function a(a) {
        this.$1 = g.getLoggerInstance();
        this.$2 = null;
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 = !0;
        this.$7 = 0;
        this.$8 = a;
        if (typeof window !== "undefined") {
          a = window.location.hostname;
          (a === "m.facebook.com" ||
            a === "mobile.facebook.com" ||
            a === "mtouch.facebook.com") &&
            (this.$6 = !1);
        }
        g.genGk(h.messenger_uses_mqtt_rollout) || (this.$6 = !1);
      }
      var b = a.prototype;
      b.start = function () {
        this.$6 = !0;
      };
      b.stop = function () {
        (this.$6 = !1), this.$9();
      };
      b.onConnectAttempt = function () {};
      b.onConnectFailure = function () {
        this.$9();
      };
      b.onConnected = function () {
        var a = this;
        this.$7++;
        this.$9();
        this.$3 = !1;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 &&
          (this.$2 = g.setTimeout(function () {
            a.$10();
          }, 8e3));
      };
      b.onConnectSuccess = function () {};
      b.onConnectionLost = function () {
        this.$9();
      };
      b.onSubscribe = function (a) {
        a === "/t_ms" && (this.$3 = !0);
      };
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        (a === "/messenger_sync_get_diffs" ||
          a === "/messenger_sync_create_queue") &&
          ((this.$4 = !0), this.$3 && ((this.$5 = !0), this.$9()));
      };
      b.onMessage = function (a) {};
      b.onWSFatal = function () {};
      b.$9 = function () {
        this.$2 && (g.clearTimeout(this.$2), (this.$2 = null));
      };
      b.$10 = function () {
        if (this.$4 === !1) {
          var a =
            this.$7 === 1
              ? "no_iris_session_initialConnect"
              : "no_iris_session";
          this.$1.bumpCounter(a);
          this.$1.eventLogMiscellaneousError({ errorMessage: a });
          this.$8()
            ? this.$1.bumpCounter(a + ".withProvider")
            : this.$1.bumpCounter(a + ".withoutProvider");
          this.$3 === !0
            ? this.$1.bumpCounter(a + ".withTopicSubscribe")
            : this.$1.bumpCounter(a + ".withoutTopicSubscribe");
        }
        this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
        this.$3 === !0 &&
          this.$4 === !0 &&
          this.$5 === !1 &&
          this.$1.bumpCounter("session_before_topic_subscribe");
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "PolarisMqttAnalyticsHook",
  ["PolarisMqttEnv", "PolarisODS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = c("PolarisMqttEnv").Env.getLoggerInstance()),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          c("PolarisODS").incr("web.mqtt.session_start"),
          c("PolarisMqttEnv").Env.isUserLoggedInNow() ||
            c("PolarisODS").incr("web.mqtt.session_start.logout");
      }
      var b = a.prototype;
      b.onConnectAttempt = function () {
        c("PolarisODS").incr("web.mqtt.ws_connect_attempt");
      };
      b.onConnectFailure = function () {
        this.$3++, c("PolarisODS").incr("web.mqtt.ws_connect_failure");
      };
      b.onConnected = function () {
        c("PolarisODS").incr("web.mqtt.ws_connect_connected");
      };
      b.onConnectSuccess = function () {
        this.$2 === 0 &&
          c("PolarisODS").incr("web.mqtt.ws_connect_first_success"),
          this.$2++,
          c("PolarisODS").incr("web.mqtt.ws_connect_success");
      };
      b.onConnectionLost = function () {
        c("PolarisODS").incr("web.mqtt.ws_disconnect");
      };
      b.onSubscribe = function (a) {};
      b.onUnsubscribe = function (a) {};
      b.onPublish = function (a) {
        c("PolarisODS").incr("web.mqtt.ws_publish");
      };
      b.onMessage = function (a) {
        c("PolarisODS").incr("web.mqtt.message_arrived");
      };
      b.onWSFatal = function () {
        c("PolarisODS").incr("web.mqtt.ws_fatal");
      };
      b.onPollRequestSent = function () {
        c("PolarisODS").incr("web.mqtt.polling_request_send");
      };
      b.onPollRequestSuccess = function () {
        c("PolarisODS").incr("web.mqtt.polling_request_succeed"),
          this.$4 === 0 &&
            c("PolarisODS").incr("web.mqtt.polling_first_success"),
          this.$4++;
      };
      b.onPollResponse = function (a) {
        c("PolarisODS").incr("web.mqtt.lp.message_arrived");
      };
      b.onPollFinish = function () {};
      b.onPollRequestFailed = function (a) {
        c("PolarisODS").incr("web.mqtt.polling_request_failed"), this.$5++;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisMqttConnectionHookCollection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = new Set();
      }
      var b = a.prototype;
      b.addHook = function (a) {
        this.$1.add(a);
      };
      b.removeHook = function (a) {
        this.$1["delete"](a);
      };
      b.onConnectAttempt = function () {
        this.$1.forEach(function (a) {
          a.onConnectAttempt();
        });
      };
      b.onConnectFailure = function () {
        this.$1.forEach(function (a) {
          a.onConnectFailure();
        });
      };
      b.onConnected = function () {
        this.$1.forEach(function (a) {
          a.onConnected();
        });
      };
      b.onConnectSuccess = function () {
        this.$1.forEach(function (a) {
          a.onConnectSuccess();
        });
      };
      b.onConnectionLost = function () {
        this.$1.forEach(function (a) {
          a.onConnectionLost();
        });
      };
      b.onSubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onSubscribe(a);
        });
      };
      b.onUnsubscribe = function (a) {
        this.$1.forEach(function (b) {
          b.onUnsubscribe(a);
        });
      };
      b.onPublish = function (a) {
        this.$1.forEach(function (b) {
          b.onPublish(a);
        });
      };
      b.onMessage = function (a) {
        this.$1.forEach(function (b) {
          b.onMessage(a);
        });
      };
      b.onWSFatal = function () {
        this.$1.forEach(function (a) {
          a.onWSFatal();
        });
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisMqttProtocolUtils",
  ["PolarisMqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("PolarisMqttEnv").Env;
    function a(a, b) {
      if (a == null) return b;
      var c = new Uint8Array(a.length + b.length);
      c.set(a);
      c.set(b, a.length);
      return c;
    }
    function c(a, b) {
      b = b;
      var c = 0,
        d = 1,
        e;
      do {
        if (b === a.length) return null;
        e = a[b++];
        c += (e & 127) * d;
        d *= 128;
      } while ((e & 128) !== 0);
      return { value: c, offset: b };
    }
    function d(a) {
      a = a;
      var b = new Array(1);
      for (var c = 0; c < 4; c++) {
        var d = a % 128;
        a >>= 7;
        if (a > 0) b[c] = d | 128;
        else {
          b[c] = d;
          break;
        }
      }
      return b;
    }
    function h(a, b, c) {
      c = c;
      b[c++] = a >> 8;
      b[c++] = a % 256;
      return c;
    }
    function f(a, b) {
      return 256 * a[b] + a[b + 1];
    }
    function i(a) {
      var b = 0;
      for (var c = 0, d = a.length; c < d; c++) {
        var e = a.charCodeAt(c);
        e < 128
          ? (b += 1)
          : e < 2048
          ? (b += 2)
          : e >= 55296 && e <= 56319
          ? ((b += 4), c++)
          : (b += 3);
      }
      return b;
    }
    function j(a, b, c, d) {
      d = h(b, c, d);
      k(a, c, d);
      return d + b;
    }
    function k(a, b, c) {
      c = c;
      for (var d = 0, e = a.length; d < e; d++) {
        var f = a.charCodeAt(d);
        f < 128
          ? (b[c++] = f)
          : f < 2048
          ? ((b[c++] = 192 | (f >> 6)), (b[c++] = 128 | (f & 63)))
          : f < 55296 || f >= 57344
          ? ((b[c++] = 224 | (f >> 12)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)))
          : ((f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
            (b[c++] = 240 | (f >> 18)),
            (b[c++] = 128 | ((f >> 12) & 63)),
            (b[c++] = 128 | ((f >> 6) & 63)),
            (b[c++] = 128 | (f & 63)));
      }
    }
    function l(a, b, c) {
      var d = [],
        e = b,
        f = 0;
      while (e < b + c) {
        var g = a[e++];
        if (g < 128) d[f++] = String.fromCharCode(g);
        else if (g > 191 && g < 224) {
          var h = a[e++];
          d[f++] = String.fromCharCode(((g & 31) << 6) | (h & 63));
        } else if (g > 239 && g < 365) {
          h = a[e++];
          var i = a[e++],
            j = a[e++];
          h =
            (((g & 7) << 18) | ((h & 63) << 12) | ((i & 63) << 6) | (j & 63)) -
            65536;
          d[f++] = String.fromCharCode(55296 + (h >> 10));
          d[f++] = String.fromCharCode(56320 + (h & 1023));
        } else {
          i = a[e++];
          j = a[e++];
          d[f++] = String.fromCharCode(
            ((g & 15) << 12) | ((i & 63) << 6) | (j & 63)
          );
        }
      }
      return d.join("");
    }
    b = (function () {
      function a(a, b, c) {
        (this.$1 = a * 1e3), (this.$4 = b), (this.$5 = c), (this.$3 = !1);
      }
      var b = a.prototype;
      b.$6 = function () {
        var a = this;
        this.$3
          ? ((this.$3 = !1),
            this.$4(),
            (this.$2 = g.setTimeout(function () {
              a.$6();
            }, this.$1)))
          : this.$5();
      };
      b.reset = function () {
        var a = this;
        this.$3 = !0;
        this.$2 && (g.clearTimeout(this.$2), (this.$2 = null));
        this.$1 > 0 &&
          (this.$2 = g.setTimeout(function () {
            a.$6();
          }, this.$1));
      };
      b.cancel = function () {
        this.$2 && (g.clearTimeout(this.$2), (this.$2 = null));
      };
      return a;
    })();
    e.exports = {
      UTF8Length: i,
      convertStringToUTF8: k,
      concatBuffers: a,
      decodeMultiByteInt: c,
      convertUTF8ToString: l,
      encodeMultiByteInt: d,
      writeUInt16BE: h,
      readUInt16BE: f,
      writeString: j,
      Pinger: b,
    };
  },
  null
);
__d(
  "PolarisMqttUtils",
  ["PolarisMqttEnv"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("PolarisMqttEnv").Env,
      h = b("PolarisMqttEnv").MqttGkNames;
    c = {
      endpointWithSessionId: function (a, b) {
        return !g.genGk(h.mqtt_ep_with_sid)
          ? a
          : this.endpointWithExtraParameter(a, "sid", b.toString());
      },
      endpointWithExtraParameters: function (a, b) {
        var c = this,
          d = a;
        b.forEach(function (a, b, e) {
          d = c.endpointWithExtraParameter(d, b, a);
        });
        return d;
      },
      endpointWithExtraParameter: function (a, b, c) {
        return a.indexOf("?") > 0
          ? a + "&" + b + "=" + c
          : a + "?" + b + "=" + c;
      },
      generateSessionId: function () {
        return Math.floor(g.random() * Number.MAX_SAFE_INTEGER);
      },
      promiseDone: function (a, b, c) {
        var d = arguments.length > 1 ? a.then(b, c) : a;
        d.then(null, function (a) {
          g.setTimeout(function () {
            if (a instanceof Error) throw a;
            else throw new Error("promiseDone");
          }, 0);
        });
      },
      sprintf: function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function () {
          return String(c[e++]);
        });
      },
      hasWSSupport: function () {
        return "WebSocket" in a && a.WebSocket !== null;
      },
    };
    e.exports = c;
  },
  null
);
__d(
  "PolarisMqttProtocolCodec",
  ["PolarisMqttProtocolUtils", "PolarisMqttUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b("PolarisMqttProtocolUtils")).UTF8Length,
      h = c.convertStringToUTF8,
      i = c.convertUTF8ToString,
      j = c.decodeMultiByteInt,
      k = c.encodeMultiByteInt,
      l = c.readUInt16BE,
      m = c.writeString,
      n = c.writeUInt16BE,
      o = b("PolarisMqttUtils").sprintf,
      p = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14,
      }),
      q = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function r(a, b) {
      b = b;
      var c = b,
        d = a[b],
        e = d >> 4;
      b += 1;
      var f = j(a, b);
      if (f == null) return { wireMessage: null, position: c };
      b = f.offset;
      f = b + f.value;
      if (f > a.length) return { wireMessage: null, position: c };
      var g;
      switch (e) {
        case p.CONNACK:
          c = a[b++];
          c = !!(c & 1);
          var h = a[b++];
          g = new u(c, h);
          break;
        case p.PUBLISH:
          c = d & 15;
          h = (c >> 1) & 3;
          d = l(a, b);
          b += 2;
          var k = i(a, b, d);
          b += d;
          d = null;
          h === 1 && ((d = l(a, b)), (b += 2));
          var m = w.createWithBytes(a.subarray(b, f)),
            n = (c & 1) === 1;
          c = (c & 8) === 8;
          g = new x(k, m, h, d, n, c);
          break;
        case p.PINGREQ:
          g = new s("PINGREQ");
          break;
        case p.PINGRESP:
          g = new s("PINGRESP");
          break;
        case p.PUBACK:
        case p.UNSUBACK:
          k = l(a, b);
          g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK", k);
          break;
        case p.SUBACK:
          m = l(a, b);
          b += 2;
          h = a.subarray(b, f);
          g = new t(m, h);
          break;
        default:
          throw new Error(o("Invalid MQTT message type %s.", e));
      }
      return { wireMessage: g, position: f };
    }
    function a(a) {
      var b = [],
        c = 0;
      while (c < a.length) {
        var d = r(a, c),
          e = d.wireMessage;
        c = d.position;
        if (e) b.push(e);
        else break;
      }
      d = null;
      c < a.length && (d = a.subarray(c));
      return { messages: b, remaining: d };
    }
    d = (function () {
      function a(a) {
        this.messageType = p[a];
      }
      var b = a.prototype;
      b.encode = function () {
        throw new TypeError("Cannot abstract class WireMessage");
      };
      return a;
    })();
    var s = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a) {
        return b.call(this, a) || this;
      }
      var c = a.prototype;
      c.encode = function () {
        var a = new ArrayBuffer(2),
          b = new Uint8Array(a);
        b[0] = (this.messageType & 15) << 4;
        return a;
      };
      return a;
    })(d);
    f = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, "DISCONNECT") || this;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = new ArrayBuffer(2),
          c = new Uint8Array(b);
        c[0] = a;
        c.set(k(0), 1);
        return b;
      };
      return b;
    })(d);
    var t = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "SUBACK") || this;
          d.messageIdentifier = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(d),
      u = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          var d;
          d = b.call(this, "CONNACK") || this;
          d.sessionPresent = a;
          d.returnCode = c;
          return d;
        }
        return a;
      })(d),
      v = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
          a = b.call(this, a) || this;
          a.messageIdentifier = c;
          return a;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4,
            b = 2,
            c = k(b),
            d = c.length + 1;
          b = new ArrayBuffer(b + d);
          var e = new Uint8Array(b);
          e[0] = a;
          e.set(c, 1);
          d = n(this.messageIdentifier, e, d);
          return b;
        };
        return a;
      })(d);
    c = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this, "CONNECT") || this;
        d.clientId = b;
        d.connectOptions = c;
        return d;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4,
          b = q.length + 3;
        b += g(this.clientId) + 2;
        b += g(this.connectOptions.userName) + 2;
        var c = k(b);
        b = new ArrayBuffer(1 + c.length + b);
        var d = new Uint8Array(b);
        d[0] = a;
        a = 1;
        d.set(c, 1);
        a += c.length;
        d.set(q, a);
        a += q.length;
        c = 2 | 128;
        d[a++] = c;
        a = n(this.connectOptions.keepAliveInterval, d, a);
        a = m(this.clientId, g(this.clientId), d, a);
        a = m(
          this.connectOptions.userName,
          g(this.connectOptions.userName),
          d,
          a
        );
        return b;
      };
      return b;
    })(d);
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e) {
        var f;
        f = a.call(this, b) || this;
        f.topic = c;
        if ((d < 0 && d > 1) || (d === 1 && e == null))
          throw new TypeError(
            o("Argument Invalid. qos: %s messageType: %s.", d, b)
          );
        f.qos = d;
        f.messageIdentifier = e;
        return f;
      }
      var c = b.prototype;
      c.encode = function () {
        var a = (this.messageType & 15) << 4;
        a |= 2;
        var b = g(this.topic),
          c = 2 + b + 2;
        this.messageType === p.SUBSCRIBE && (c += 1);
        var d = k(c);
        c = new ArrayBuffer(1 + d.length + c);
        var e = new Uint8Array(c);
        e[0] = a;
        a = 1;
        e.set(d, 1);
        a += d.length;
        this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
        a = m(this.topic, b, e, a);
        this.messageType === p.SUBSCRIBE &&
          this.qos != null &&
          (e[a++] = this.qos);
        return c;
      };
      return b;
    })(d);
    var w = (function () {
        function a(a, b) {
          (this.payloadString = a), (this.payloadBytes = b);
        }
        a.createWithString = function (b) {
          var c = new Uint8Array(new ArrayBuffer(g(b)));
          h(b, c, 0);
          return new a(b, c);
        };
        a.createWithBytes = function (b) {
          var c = 0,
            d = b.length;
          while (c < b.length && b[c] !== 123 && b[c] !== 91) c++, d--;
          var e = i(b, c, d);
          b = b.subarray(c, d);
          return new a(e, b);
        };
        var b = a.prototype;
        b.string = function () {
          return this.payloadString;
        };
        b.bytes = function () {
          return this.payloadBytes;
        };
        return a;
      })(),
      x = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f, g) {
          var h;
          h = b.call(this, "PUBLISH") || this;
          h.topic = a;
          h.payloadMessage = c;
          h.qos = d;
          h.messageIdentifier = e;
          h.retained = f != null ? f : !1;
          h.duplicate = g != null ? g : !1;
          if (h.qos === 1 && h.messageIdentifier == null)
            throw new TypeError(
              "Argument Invalid. messageIdentifier: null and qos: 1"
            );
          return h;
        }
        var c = a.prototype;
        c.encode = function () {
          var a = (this.messageType & 15) << 4;
          this.duplicate && (a |= 8);
          a = a |= this.qos << 1;
          this.retained && (a |= 1);
          var b = g(this.topic),
            c = b + 2;
          c += this.messageIdentifier == null ? 0 : 2;
          var d = this.payloadMessage.bytes();
          c += d.byteLength;
          var e = k(c);
          c = new ArrayBuffer(1 + e.length + c);
          var f = new Uint8Array(c);
          f[0] = a;
          f.set(e, 1);
          a = 1 + e.length;
          a = m(this.topic, b, f, a);
          this.messageIdentifier != null &&
            (a = n(this.messageIdentifier, f, a));
          f.set(d, a);
          return c;
        };
        return a;
      })(d);
    e.exports = {
      MESSAGE_TYPE: p,
      WireMessage: {
        Base: d,
        PubAckUnsubAck: v,
        Ping: s,
        ConnAck: u,
        Connect: c,
        Disconnect: f,
        Subscription: b,
        Publish: x,
      },
      createMessageWithString: w.createWithString,
      decodeMessage: r,
      decodeByteMessages: a,
    };
  },
  null
);
__d(
  "PolarisMqttTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b) {
      (this.errorCode = a), (this.errorMessage = b);
    };
    b = function (a, b) {
      (this.mqttError = a), (this.connAck = b);
    };
    c = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        d === void 0 && (d = null);
        c = a.call(this, c) || this;
        c.isRecoverable = b;
        c.originalError = d;
        return c;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    e.exports = { MqttError: a, MqttChannelError: c, ConnectFailure: b };
  },
  null
);
__d(
  "PolarisMqttProtocolClient",
  [
    "PolarisMqttEnv",
    "PolarisMqttProtocolCodec",
    "PolarisMqttProtocolUtils",
    "PolarisMqttTypes",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("PolarisMqttEnv").Env,
      h = (a = b("PolarisMqttProtocolCodec")).MESSAGE_TYPE,
      i = a.WireMessage,
      j = a.createMessageWithString,
      k = a.decodeByteMessages,
      l = b("PolarisMqttProtocolUtils").Pinger,
      m = b("PolarisMqttProtocolUtils").concatBuffers,
      n = b("PolarisMqttTypes").ConnectFailure;
    c = b("PolarisMqttTypes").MqttError;
    var o = 30,
      p = 6e4,
      q = {
        SOCKET_ERROR: new c(1, "Socket error"),
        SOCKET_MESSAGE: new c(2, "Unable to parse invalid socket message"),
        INVALID_DATA_TYPE: new c(3, "Received non-arraybuffer from socket."),
        CONNECT_TIMEOUT: new c(4, "Connect timed out"),
        CONNACK_FAILURE: new c(5, "Connection failure due to connack"),
        PING_TIMEOUT: new c(6, "Ping timeout"),
        APP_DISCONNECT: new c(7, "Disconnect initiated by app"),
        SERVER_DISCONNECT: new c(8, "Disconnect message sent my server"),
        SOCKET_CLOSE: new c(9, "Socket connection closed"),
      };
    d = (function () {
      function a(a) {
        var b = this;
        this.handleMessage = function (a) {
          switch (a.messageType) {
            case h.CONNACK:
              b.$7 != null && (g.clearTimeout(b.$7), (b.$7 = null));
              if (a instanceof i.ConnAck) {
                var c = a;
                if (c.returnCode !== 0) {
                  b.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                  b.setConnected(!1);
                  b.$11(q.CONNACK_FAILURE, c.returnCode);
                  return;
                }
                g.scheduleCallback(function () {
                  b.$2.onConnectSuccess();
                });
                b.$8 != null && b.$8.reset();
              }
              break;
            case h.PUBLISH:
              if (a instanceof i.Publish) {
                var d = a;
                g.scheduleCallback(function () {
                  b.$2.onMessageArrived(
                    d.topic,
                    d.payloadMessage.payloadString
                  );
                });
                c = d.messageIdentifier;
                b.$9.bumpCounter("protocol.publish.received");
                if (d.qos === 1 && c != null) {
                  c = new i.PubAckUnsubAck("PUBACK", c);
                  b.$12(c);
                }
              }
              break;
            case h.PUBACK:
              if (a instanceof i.PubAckUnsubAck) {
                c = a;
                var e = c.messageIdentifier;
                b.$9.bumpCounter("protocol.puback.received");
                g.scheduleCallback(function () {
                  b.$2.onMessageDelivered("", e);
                });
              }
              break;
            case h.PINGRESP:
              b.$8 != null && b.$8.reset();
              break;
            case h.DISCONNECT:
              b.$11(q.SERVER_DISCONNECT);
              break;
            case h.SUBACK:
              b.$9.bumpCounter("protocol.suback.received");
              break;
            case h.UNSUBACK:
              b.$9.bumpCounter("protocol.unsuback.received");
              break;
            default:
              b.$9.logError(
                new Error(
                  "MqttProtocolClient: Received unhandled message type: " +
                    a.messageType
                ),
                "Received unhandled message type"
              );
              b.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
              break;
          }
        };
        this.$3 = a;
        this.$2 = {
          userName: "",
          mqttVersion: 3,
          keepAliveInterval: 10,
          ignoreSubProtocol: !1,
          onConnectSuccess: function () {},
          onConnectFailure: function (a) {},
          onConnection: function () {},
          onConnectionError: function (a) {},
          onConnectionLost: function (a) {},
          onMessageArrived: function (a, b) {},
          onMessageDelivered: function (a, b) {},
        };
        this.$1 = "mqttwsclient";
        this.$4 = 0;
        this.$5 = !1;
        this.$9 = g.getLoggerInstance();
      }
      var b = a.prototype;
      b.connect = function (a) {
        var b = this;
        if (this.$5)
          throw new Error("Invalid state: connect - already connected");
        this.$2 = a;
        this.setConnected(!1);
        this.$7 != null && (g.clearTimeout(this.$7), (this.$7 = null));
        this.$7 = g.setTimeout(function () {
          b.$9.bumpCounter("protocol.error.connect.timeout"),
            b.$11(q.CONNECT_TIMEOUT);
        }, o * 1e3);
        this.$6 = g.createSocket(this.$3);
        this.$6.binaryType = "arraybuffer";
        this.$6.onopen = function () {
          b.setConnected(!0), b.$12(new i.Connect(b.$1, a)), a.onConnection();
        };
        this.$6.onmessage = function (a) {
          a = a.data;
          if (!(a instanceof ArrayBuffer)) {
            b.$9.bumpCounter("protocol.error.onmessage.type");
            b.$11(q.INVALID_DATA_TYPE);
            return;
          }
          try {
            a = new Uint8Array(a);
            b.$10 != null &&
              ((a = m(b.$10, a)),
              b.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
              delete b.$10,
              (b.$10 = null));
            a = k(a);
            var c = a.messages;
            b.$10 = a.remaining;
            for (a = 0; a < c.length; a++) b.handleMessage(c[a]);
          } catch (a) {
            (b.$10 = null),
              b.$9.logError(a, q.SOCKET_MESSAGE.errorMessage),
              b.$9.bumpCounter("protocol.error.onmessage.parse"),
              b.$11(q.SOCKET_MESSAGE);
          }
        };
        this.$6.onerror = function (a) {
          b.$9.bumpCounter("protocol.error.socket"), b.$11(q.SOCKET_ERROR);
        };
        this.$6.onclose = function (a) {
          b.$9.bumpCounter("protocol.socket.close"), b.$11(q.SOCKET_CLOSE);
        };
        this.$8 != null && this.$8.cancel();
        this.$8 = new l(
          a.keepAliveInterval,
          this.$12.bind(this, new i.Ping("PINGREQ")),
          this.$11.bind(this, q.PING_TIMEOUT)
        );
      };
      b.$13 = function () {
        this.setConnected(!1),
          this.$8 != null && this.$8.cancel(),
          this.$7 != null && (g.clearTimeout(this.$7), (this.$7 = null)),
          this.$6 != null &&
            ((this.$6.onopen = function (a) {}),
            (this.$6.onmessage = function (a) {}),
            (this.$6.onerror = function (a) {}),
            (this.$6.onclose = function (a) {}),
            this.$6.readyState === this.$6.OPEN && this.$6.close(),
            delete this.$6,
            (this.$6 = null)),
          (this.$2.onConnectSuccess = function () {}),
          (this.$2.onConnectFailure = function (a) {}),
          (this.$2.onConnection = function () {}),
          (this.$2.onConnectionError = function (a) {}),
          (this.$2.onConnectionLost = function (a) {}),
          (this.$2.onMessageArrived = function (a, b) {}),
          (this.$2.onMessageDelivered = function (a, b) {});
      };
      b.disconnect = function () {
        if (
          this.$6 == null ||
          this.$6.readyState !== this.$6.OPEN ||
          !this.$5
        ) {
          this.$13();
          return;
        }
        this.$12(new i.Disconnect());
        this.$9.bumpCounter("protocol.debug.disconnect");
        this.$11(q.APP_DISCONNECT);
      };
      b.isConnected = function () {
        return this.$5;
      };
      b.setConnected = function (a) {
        this.$5 = a;
      };
      b.subscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.subscribe.notconnected");
          throw new Error("Invalid state: subscribe - not connected");
        }
        this.$9.bumpCounter("protocol.subscribe." + a);
        a = new i.Subscription("SUBSCRIBE", a, 0, this.$14());
        this.$12(a);
      };
      b.unsubscribe = function (a) {
        if (!this.$5) {
          this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
          throw new Error("Invalid state: unsubscribe - not connected");
        }
        this.$9.bumpCounter("protocol.unsubscribe." + a);
        a = new i.Subscription("UNSUBSCRIBE", a, 0, this.$14());
        this.$12(a);
      };
      b.publish = function (a, b, c) {
        this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
        this.$9.bumpCounter("protocol.publish." + a);
        var d = this.$14();
        a = new i.Publish(a, j(b), c, d);
        this.$12(a);
        return d;
      };
      b.$14 = function () {
        ++this.$4 === p && (this.$4 = 1);
        return this.$4;
      };
      b.$11 = function (a, b) {
        var c = this.$5,
          d = this.$2,
          e = d.onConnectFailure,
          f = d.onConnectionLost;
        this.setConnected(!1);
        c
          ? g.scheduleCallback(function () {
              f(a);
            })
          : g.scheduleCallback(function () {
              e(new n(a, b != null ? b : -1));
            });
        this.$13();
      };
      b.$12 = function (a) {
        var b = this.$6;
        if (b == null) return;
        if (b.readyState !== b.OPEN) return;
        b.send(a.encode());
      };
      return a;
    })();
    e.exports = d;
  },
  null
);
__d(
  "PolarisMqttUserName",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b, c, d, e, f, g) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$6 = f),
          (this.$8 = g),
          (this.$7 =
            typeof document === "object" && document && document.hasFocus());
      }
      var b = a.prototype;
      b.gen = function (a, b, c) {
        a = {
          u: this.$1,
          s: a,
          cp: this.$3,
          ecp: this.$2,
          chat_on: this.$6,
          fg: this.$7,
          d: this.$4,
          ct: "cookie_auth",
          mqtt_sid: "",
          aid: this.$5,
          st: b,
          pm: c,
          dc: "",
          no_auto_fg: !0,
          asi: void 0,
          a: navigator.userAgent,
        };
        this.$8 && this.$8.appSpecificInfo && (a.asi = this.$8.appSpecificInfo);
        return JSON.stringify(a);
      };
      b.setForegroundState = function (a) {
        this.$7 = a;
      };
      b.setChatVisibility = function (a) {
        this.$6 = a;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "PolarisMqttConnection",
  [
    "PolarisMqttConnectionHookCollection",
    "PolarisMqttEnv",
    "PolarisMqttProtocolClient",
    "PolarisMqttTypes",
    "PolarisMqttUserName",
    "PolarisMqttUtils",
    "PolarisODS",
    "Promise",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
      i = "publish",
      j = "subscribe",
      k = "unsubscribe";
    function l(a) {}
    var m = 18e4,
      n = 5 * 1e3,
      o = 15,
      p = 21;
    a = (function () {
      function a(a, b) {
        var d = this;
        this.$41 = function (a) {
          var b = new Set(a);
          b.forEach(function (a) {
            d.$14.has(a) || d.unsubscribe(a);
          });
          a = new Set(d.$14);
          a.forEach(function (a) {
            b.has(a) || d.subscribe(a);
          });
        };
        this.$38 = function (a, b) {
          try {
            c("PolarisODS").incr("web.mqtt.js_error_in_init");
            var e = a ? a.message : "error";
            d.$10.debugTrace("onError", b + ": " + e);
            d.$2(a);
          } catch (a) {
            c("PolarisODS").incr("web.mqtt.js_error_in_error_logging"),
              d.$10.logError(a, "JS error while trying to log previous error");
          }
        };
        this.$8 = !1;
        this.$10 = c("PolarisMqttEnv").Env.getLoggerInstance();
        this.$11 = "Disconnected";
        this.$14 = new Set();
        this.$15 = new Map();
        this.$17 = 0;
        this.$18 = 0;
        this.$12 = 0;
        this.$13 = 0;
        this.$8 = !1;
        this.$5 = "";
        this.$6 = new (c("PolarisMqttUserName"))(0, 0, 1, "", 0, !0);
        this.$9 = 0;
        this.$7 = null;
        b = function () {};
        this.$1 = b;
        this.$2 = b;
        this.$3 = b;
        this.$19 = new (c("PolarisMqttConnectionHookCollection"))();
        this.$4 = function () {
          return [];
        };
        this.$16 = a;
      }
      var d = a.prototype;
      d.run = function (a) {
        var b = this,
          c = a.endpoint,
          d = a.extraConnectMessageProvider,
          e = a.mqttUserName,
          f = a.onJSError,
          g = a.onMessageReceived,
          h = a.onStateChange;
        a = a.subscribedTopics;
        if (this.$8) {
          this.$10.debugTrace("run", "Run called while in running state.");
          return;
        }
        this.$1 = h;
        this.$3 = g;
        this.$5 = c;
        this.$6 = e;
        this.$8 = !0;
        this.$12 = 0;
        this.$2 = f || l;
        a &&
          a.forEach(function (a) {
            return b.$14.add(a);
          });
        this.$4 = d;
        this.$20();
        this.$21();
      };
      d.shutdown = function () {
        this.$22(),
          this.$23("shutdown"),
          (this.$8 = !1),
          this.$10.debugTrace("shutdown", "Shutdown");
      };
      d.subscribe = function (a) {
        this.$14.add(a);
        this.ensureConnected(j) && this.$24(a);
        return !0;
      };
      d.publish = function (a, c, d) {
        var e = { resolve: function () {}, reject: function (a) {} },
          f = new (b("Promise"))(function (a, b) {
            (e.resolve = a), (e.reject = b);
          }),
          g = this.ensureConnected(i),
          h = "connection_unknown";
        if (!g)
          (h = "connection_not_connected"),
            e.reject(new Error("Client disconnected"));
        else {
          c = this.$25(a, c, d, e);
          h = c === !0 ? "connection_published" : "connection_failed";
        }
        this.$10.eventLogPublish({
          sessionID: this.$9,
          topic: a,
          connectionStatus: g,
          publishStatus: h,
        });
        return f;
      };
      d.unsubscribe = function (a) {
        this.$14["delete"](a);
        this.ensureConnected(k) && this.$26(a);
        return !0;
      };
      d.addHook = function (a) {
        this.$19.addHook(a);
      };
      d.removeHook = function (a) {
        this.$19.removeHook(a);
      };
      d.isRunning = function () {
        return this.$8;
      };
      d.getSessionId = function () {
        return this.$9;
      };
      d.ensureConnected = function (a) {
        if (!this.$8) {
          this.$10.debugTrace(
            "ensureConnected",
            "Mqtt connection: " + a + " called when not running"
          );
          return !1;
        }
        if (this.$7 == null) {
          this.$10.debugTrace(
            "ensureConnected",
            "Mqtt connection: " + a + " called when not connected, ignored"
          );
          return !1;
        }
        var b = this.$7.isConnected();
        if (!b) {
          this.$10.debugTrace(
            "ensureConnected",
            "Mqtt connection: " + a + " called with client not connected"
          );
          return !1;
        }
        return !0;
      };
      d.connectionState = function () {
        return this.$11;
      };
      d.testOnlyGetSubscribedTopics = function () {
        return this.$14;
      };
      d.$20 = function () {
        var a = this;
        c("PolarisMqttEnv").Env.genGk(
          c("PolarisMqttEnv").MqttGkNames.mqtt_send_unload_event
        ) &&
          typeof window !== "undefined" &&
          window.addEventListener("unload", function (b) {
            return a.$27(b);
          });
      };
      d.$27 = function (a) {
        this.publish("/browser_close", "{}", 0);
      };
      d.$22 = function () {
        this.$8 &&
          this.$7 != null &&
          (this.$28("Disconnected"),
          this.$7 != null && this.$7.disconnect(),
          (this.$7 = null));
      };
      d.$28 = function (a) {
        a !== this.$11 && ((this.$11 = a), this.$1(a));
      };
      d.$21 = function () {
        var a = this;
        if (!this.$8) return;
        this.$28("Connecting");
        var b = Date.now();
        this.$9 = c("PolarisMqttUtils").generateSessionId();
        var d = Array.from(this.$14),
          e = c("PolarisMqttUtils").endpointWithSessionId(this.$5, this.$9);
        try {
          this.$7 = new (c("PolarisMqttProtocolClient"))(e);
          var f = this.$29(),
            g = f.map(function (a) {
              return a.topic;
            });
          e = this.$6.gen(this.$9, d, f);
          this.$7 != null &&
            (this.$7.connect({
              userName: e,
              mqttVersion: 3,
              keepAliveInterval: h,
              ignoreSubProtocol: !0,
              onConnectFailure: function (c) {
                return a.$30(c, b, d, g);
              },
              onConnectSuccess: function () {
                return a.$31(b, d, g);
              },
              onConnection: function () {
                return a.$32(f, d);
              },
              onConnectionError: function (b) {
                return a.$33(b);
              },
              onConnectionLost: function (b) {
                return a.$34(b);
              },
              onMessageArrived: function (b, c) {
                return a.$35(b, c);
              },
              onMessageDelivered: function (b, c) {
                return a.$36(b, c);
              },
            }),
            c("PolarisODS").incr("web.mqtt.protocol.connectattempt"),
            this.$19.onConnectAttempt());
        } catch (a) {
          c("PolarisODS").incr("web.mqtt.js_error_in_init_exception"),
            this.$28("Disconnected"),
            this.$37(!1, b, d, [], 14, a.message),
            a && this.$10.logErrorWarn(a, "ws_js_error"),
            this.$19.onWSFatal(),
            this.$38(
              new (c("PolarisMqttTypes").MqttChannelError)(
                !1,
                "ws_js_error",
                a
              ),
              "client_init"
            );
        }
      };
      d.$29 = function () {
        var a = this.$4(),
          b = 65536;
        return a.map(function (a) {
          a.messageId = b--;
          return a;
        });
      };
      d.$24 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.subscribe(a);
            this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
            this.$19.onSubscribe(a);
            c("PolarisODS").incr("web.mqtt.protocol.subscribe");
            return !0;
          }
        } catch (a) {
          this.$10.logError(a, "Exception subscribing"),
            c("PolarisODS").incr("web.mqtt.subscribe_exception"),
            c("PolarisODS").incr("web.mqtt.protocol.subscribe.error");
        }
        return !1;
      };
      d.$26 = function (a) {
        try {
          if (this.$7 != null) {
            this.$7.unsubscribe(a);
            this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
            this.$19.onUnsubscribe(a);
            c("PolarisODS").incr("web.mqtt.protocol.unsubscribe");
            return !0;
          }
        } catch (a) {
          this.$10.logError(a, "Exception unsubscribing"),
            c("PolarisODS").incr("web.mqtt.unsubscribe_exception"),
            c("PolarisODS").incr("web.mqtt.protocol.unsubscribe.error");
        }
        return !1;
      };
      d.$25 = function (a, b, d, e) {
        if (this.$7 != null)
          try {
            b = this.$7.publish(a, b, d);
            c("PolarisODS").incr("web.mqtt.protocol.publish");
            var f = b != null ? b : "null";
            this.$10.debugTrace(
              "_doPublish",
              "publish " + a + " with messageId:" + f + " qos:" + d
            );
            this.$19.onPublish(a);
            b != null ? this.$15.set(b, e) : e.resolve();
            return !0;
          } catch (a) {
            this.$10.logError(a, "Exception publishing");
            c("PolarisODS").incr("web.mqtt.publish_exception");
            e.reject(a);
            c("PolarisODS").incr("web.mqtt.protocol.publish.error");
            return !1;
          }
        else return !1;
      };
      d.$39 = function (a) {
        var b = this;
        a === void 0 && (a = null);
        if (!this.$8) return;
        this.$22();
        this.$23("reconnect");
        this.$40();
        this.$9 = -1;
        this.$13 = 0;
        a =
          a != null
            ? a
            : Math.pow(2, Math.min(this.$12, 6)) *
              (1e3 + c("PolarisMqttEnv").Env.random() * 200);
        this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
        c("PolarisMqttEnv").Env.setTimeout(function () {
          b.$21();
        }, a);
        this.$12 += 1;
      };
      d.$40 = function () {
        if (
          !c("PolarisMqttEnv").Env.genGk(
            c("PolarisMqttEnv").MqttGkNames.mqtt_ws_reconnect_reset
          )
        )
          return;
        var a = Date.now() - this.$13,
          b = this.$13 !== 0 && a > n,
          d = this.$12 > o;
        (b || d) && (this.$12 = 0);
        this.$13 !== 0 &&
          a <= n &&
          c("PolarisODS").incr("web.mqtt.short_lived_session");
        d && c("PolarisODS").incr("web.mqtt.connection_attempt_limit");
      };
      d.$37 = function (a, b, c, d, e, f) {
        a === !0 ? this.$18++ : this.$17++,
          this.$10.eventLogConnect({
            sessionID: this.$9,
            connectionStatus: a,
            duration: Date.now() - b,
            hostname: this.$5,
            attemptNumber: this.$12,
            failTotal: this.$17,
            successTotal: this.$18,
            subscribedTopics: c,
            publishes: d,
            errorCode: e,
            errorMessage: f,
          });
      };
      d.$30 = function (a, b, d, e) {
        var f = a.mqttError,
          g = f.errorMessage;
        this.$10.debugTrace("connect", "Connect failed " + g);
        c("PolarisODS").incr("web.mqtt.protocol.onconnectfailure");
        this.$19.onConnectFailure();
        this.$37(!1, b, d, e, f.errorCode, g);
        if (a.connAck != null) {
          c("PolarisODS").incr("web.mqtt.protocol.connect_failure");
          if (a.connAck === p) {
            this.$39(m);
            return;
          }
        }
        this.$39();
      };
      d.$32 = function (a, b) {
        var d = this;
        c("PolarisODS").incr("web.mqtt.protocol.onconnection");
        this.$10.debugTrace("Connect", "Socket established");
        this.$19.onConnected();
        b.forEach(function (a) {
          d.$19.onSubscribe(a);
        });
        a.forEach(function (a) {
          d.$19.onPublish(a.topic);
        });
        this.$28("TransportConnected");
      };
      d.$31 = function (a, b, d) {
        c("PolarisODS").incr("web.mqtt.protocol.onconnectsuccess"),
          this.$10.debugTrace("connect", "Connect success"),
          this.$19.onConnectSuccess(),
          this.$37(!0, a, b, d),
          this.$28("Connected"),
          this.$41(b),
          c("PolarisMqttEnv").Env.genGk(
            c("PolarisMqttEnv").MqttGkNames.mqtt_ws_reconnect_reset
          ) || (this.$12 = 0),
          (this.$13 = Date.now());
      };
      d.$34 = function (a) {
        c("PolarisODS").incr("web.mqtt.protocol.onconnectionlost"),
          a.errorCode &&
            this.$10.eventLogDisconnect({
              sessionID: this.$9,
              errorCode: a.errorCode,
              errorMessage: a.errorMessage,
              duration: Date.now() - this.$13,
            }),
          this.$10.debugTrace("connect", "connection lost"),
          this.$19.onConnectionLost(),
          this.$39();
      };
      d.$33 = function (a) {};
      d.$35 = function (a, b) {
        c("PolarisODS").incr("web.mqtt.protocol.onmessagearrived");
        this.$10.debugTrace("onMessageArrived", "Message received on " + a);
        this.$19.onMessage(a);
        try {
          this.$3(a, b);
        } catch (a) {
          this.$10.logError(a, "Listener threw error"),
            c("PolarisODS").incr("web.mqtt.listener_error");
        }
      };
      d.$36 = function (a, b) {
        c("PolarisODS").incr("web.mqtt.protocol.onmessagedelivered");
        a = b != null ? b : "null";
        this.$10.debugTrace(
          "onMessageDelivered",
          "Delivered Message {ID: " + a + "}"
        );
        if (b == null) return;
        a = this.$15.get(b);
        if (a == null) return;
        this.$15["delete"](b);
        a.resolve();
      };
      d.$23 = function (a) {
        this.$15.forEach(function (b, c, d) {
          b.reject(new Error(a));
        }),
          this.$15.clear();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisMqttChannel",
  [
    "PolarisChannelClientID",
    "PolarisIrisSubscribeChecker",
    "PolarisMqttAnalyticsHook",
    "PolarisMqttConnection",
    "PolarisMqttEnv",
    "PolarisMqttUserName",
    "PolarisMqttUtils",
    "PolarisODS",
    "Promise",
    "uuid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 60 * 1e3;
    a = (function () {
      function a(a) {
        var b = this,
          d = a.appId,
          e = a.capabilities,
          f = a.chatVisibility;
        f = f === void 0 ? !0 : f;
        var g = a.clientCapabilities,
          h = a.debugId,
          i = a.endpoint,
          j = a.igSpecificOptions,
          k = a.initialSubscribedTopics,
          l = a.observer;
        a = a.userFbid;
        this.$8 = c("PolarisMqttEnv").Env.getLoggerInstance();
        this.$8.setAppId(d);
        this.$9 = new (c("PolarisMqttUserName"))(
          a,
          e,
          g,
          c("PolarisChannelClientID").getID(),
          d,
          f,
          j
        );
        this.$1 = i;
        this.$5 = "Disconnected";
        this.$2 = [l];
        this.$4 = new Set();
        this.$6 = new Map();
        this.$7 = new (c("PolarisMqttConnection"))(j, h);
        j && j.deviceId ? (this.$3 = j.deviceId) : (this.$3 = c("uuid")());
        this.$13 = new (c("PolarisMqttAnalyticsHook"))();
        this.$7.addHook(this.$13);
        this.$7.addHook(
          new (c("PolarisIrisSubscribeChecker"))(function () {
            return b.$4.size > 0;
          })
        );
        this.$10 = !1;
        this.$12 = new Map();
        this.$11 = [];
        this.$14(k);
      }
      var d = a.prototype;
      d.$14 = function (a) {
        var b = this;
        if (this.$7.isRunning()) {
          this.$15("run", "Connection started calling run again");
          return;
        }
        if (
          c("PolarisMqttEnv").Env.genGk(
            c("PolarisMqttEnv").MqttGkNames.mqtt_ws_polling_enabled
          )
        )
          if (
            c("PolarisMqttEnv").Env.genGk(
              c("PolarisMqttEnv").MqttGkNames.mqtt_ws_forced_polling_only
            )
          ) {
            this.$15(
              "MqttChannel",
              "Websocket disabled, will do long polling only"
            );
            return;
          } else if (!c("PolarisMqttUtils").hasWSSupport()) {
            this.$15(
              "MqttChannel",
              "Websocket Unavailable, will do long polling only"
            );
            c("PolarisODS").incr("web.mqtt.ws_unavailable_polling");
            return;
          }
        this.$7.run({
          onStateChange: function (a) {
            b.$16(a);
          },
          onJSError: function (a) {
            b.$17(a);
          },
          onMessageReceived: function (a, c) {
            b.$18(a, c);
          },
          endpoint: this.$1,
          mqttUserName: this.$9,
          subscribedTopics: a,
          extraConnectMessageProvider: function () {
            return b.$19();
          },
        });
      };
      d.shutdown = function () {
        this.$7 && this.$7.shutdown();
      };
      d.publish = function (a, b, c) {
        c === void 0 && (c = { qos: 1, skipBuffer: !1 });
        return c.qos === 0 ? this.$20(a, b) : this.$21(a, b, c);
      };
      d.$20 = function (a, b) {
        return this.$7.publish(a, b, 0);
      };
      d.$21 = function (a, d, e) {
        var f = { resolve: function () {}, reject: function (a) {} },
          g = new (b("Promise"))(function (a, b) {
            (f.resolve = a), (f.reject = b);
          }),
          h = c("PolarisMqttEnv").Env.random();
        a = {
          topic: a,
          payload: d,
          options: e,
          ack: f,
          publishToken: h,
          timeoutId: null,
        };
        e.skipBuffer
          ? this.$7.connectionState() === "Connecting"
            ? this.$11.push(a)
            : this.$22(a)
          : ((a.timeoutId = this.$23(h)), this.$12.set(h, a), this.$24(a));
        return g;
      };
      d.$22 = function (a) {
        c("PolarisMqttUtils").promiseDone(
          this.$7.publish(a.topic, a.payload, a.options.qos),
          function () {
            a.ack.resolve();
          },
          function (b) {
            a.ack.reject(b);
          }
        );
      };
      d.$24 = function (a) {
        var b = this;
        c("PolarisMqttUtils").promiseDone(
          this.$7.publish(a.topic, a.payload, a.options.qos),
          function () {
            return b.$25(a);
          },
          function (a) {}
        );
      };
      d.subscribe = function (a, b) {
        this.$7.subscribe(a);
        var c = this.$6.get(a);
        !c ? ((c = [b]), this.$6.set(a, c)) : c.push(b);
      };
      d.subscribeChannelEvents = function (a) {
        this.$2.push(a);
      };
      d.registerExtraConnectPayloadProvider = function (a) {
        var b = this;
        this.$4.add(a);
        if (this.$7.isRunning()) {
          a = a.getPublishMessages();
          a.forEach(function (a) {
            b.publish(a.topic, a.payload, { qos: a.qos, skipBuffer: !0 });
          });
        }
      };
      d.unregisterExtraConnectPayloadProvider = function (a) {
        this.$4["delete"](a);
      };
      d.unsubscribe = function (a) {
        this.$7.unsubscribe(a), this.$6["delete"](a);
      };
      d.getConnectionState = function () {
        return this.$5;
      };
      d.getEndpoint = function () {
        return this.$1;
      };
      d.addHook = function (a) {
        this.$7.addHook(a);
      };
      d.removeHook = function (a) {
        this.$7.removeHook(a);
      };
      d.testOnlyMessageReceived = function (a, b) {
        this.$18(a, b);
      };
      d.$26 = function (a) {
        var b = this.$12.get(a);
        b != null &&
          b.timeoutId != null &&
          c("PolarisMqttEnv").Env.clearTimeout(b.timeoutId);
        this.$12["delete"](a);
      };
      d.$23 = function (a) {
        var b = this;
        return c("PolarisMqttEnv").Env.setTimeout(
          function (a) {
            var d = b.$12.get(a);
            if (!d) return;
            var e = d.topic;
            c("PolarisODS").incr("web.mqtt.publish_timeout");
            b.$8.debugTrace(
              "publish_timeout",
              "Timeout publishing topic: " + e + " publishToken: " + a
            );
            b.$26(a);
            d.ack.reject(new Error("Publish Timed Out"));
          },
          h,
          a
        );
      };
      d.$25 = function (a) {
        var b = a.publishToken,
          d = this.$12.get(b);
        if (!d) return;
        this.$26(b);
        a.ack.resolve();
        this.$8.debugTrace(
          "publish_success",
          "Topic: " + a.topic + " publishToken: " + a.publishToken
        );
        c("PolarisODS").incr("web.mqtt.publish_success");
      };
      d.$18 = function (a, b) {
        var d = this.$6.get(a);
        if (!d)
          this.$8.debugTrace(
            "_onMessageReceived",
            a + " being dropped, no listeners"
          );
        else
          for (
            var a = d,
              d = Array.isArray(a),
              e = 0,
              a = d
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= a.length) break;
              f = a[e++];
            } else {
              e = a.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            try {
              f(b);
            } catch (a) {
              this.$8.logError(a, "Listener exception"),
                c("PolarisODS").incr("web.mqtt.listener_error");
            }
          }
      };
      d.$17 = function (a) {
        if (
          c("PolarisMqttEnv").Env.genGk(
            c("PolarisMqttEnv").MqttGkNames.mqtt_ws_polling_enabled
          )
        ) {
          a.isRecoverable
            ? c("PolarisODS").incr("web.mqtt.recoverable_error_skipped")
            : c("PolarisODS").incr("web.mqtt.unrecoverable_error_skipped");
          return;
        }
        a.isRecoverable
          ? c("PolarisODS").incr("web.mqtt.recoverable_error_not_skipped")
          : c("PolarisODS").incr("web.mqtt.unrecoverable_error_not_skipped");
        a.isRecoverable || (this.$10 = !0);
        this.$27(a);
      };
      d.$27 = function (a) {
        for (
          var b = this.$2,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          e.onJSError && e.onJSError(a);
        }
      };
      d.$16 = function (a) {
        var b = this;
        a === "Connecting"
          ? (this.$11.forEach(function (a) {
              a.ack.reject(new Error("Client Reconnecting"));
            }),
            (this.$11 = []))
          : a === "TransportConnected" &&
            (this.$11.forEach(function (a) {
              b.$22(a);
            }),
            (this.$11 = []),
            this.$12.forEach(function (a, c, d) {
              b.$24(a);
            }));
        this.$5 = this.$28(a);
        this.$15("_changeState", "Connection state = " + a);
        this.$29();
      };
      d.$28 = function (a) {
        switch (a) {
          case "Connecting":
          case "TransportConnected":
            return "Connecting";
          case "Connected":
            return "Connected";
          case "Disconnected":
            return "Disconnected";
        }
        throw new Error("Unknown state " + a);
      };
      d.$29 = function () {
        for (
          var a = this.$2,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.onMQTTStateChanged(this.$5);
        }
      };
      d.$19 = function () {
        var a = this,
          b = [];
        this.$4.forEach(function (d) {
          try {
            d = d.getPublishMessages();
            Array.prototype.push.apply(b, d);
          } catch (b) {
            a.$8.logError(b, "ConnectPayload provider exception"),
              c("PolarisODS").incr("web.mqtt.connectPayloadProvider_error");
          }
        });
        return b;
      };
      d.$15 = function (a, b) {
        this.$8.debugTrace(a, "Mqtt channel: " + b);
      };
      d.setForegroundState = function (a) {
        this.$9 && this.$9.setForegroundState(a);
      };
      d.setChatVisibility = function (a) {
        this.$9 && this.$9.setChatVisibility(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "PolarisMqttLogger",
  [
    "PolarisChannelClientID",
    "PolarisDirectLogger",
    "PolarisMqttEnv",
    "PolarisODS",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = "mqtt_client";
    var h = null,
      i = new (d("PolarisDirectLogger").DirectLogger)(
        a,
        c("PolarisChannelClientID").getID()
      ),
      j = {
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        CLIENT_ERROR: "mqtt_client_error",
      };
    b = (function () {
      a.getInstance = function () {
        h || (h = new a());
        return h;
      };
      function a() {
        (this.$1 = 0),
          (this.$2 = Date.now()),
          (this.$3 = c("PolarisChannelClientID").getID());
      }
      var b = a.prototype;
      b.setAppId = function (a) {
        this.$1 === 0 && (this.$1 = a);
      };
      b.eventLogConnect = function (a) {
        var b = a.attemptNumber,
          d = a.connectionStatus,
          e = a.duration,
          f = a.errorCode,
          g = a.errorMessage;
        a.failTotal;
        var h = a.hostname,
          i = a.publishes,
          k = a.sessionID,
          l = a.subscribedTopics;
        a.successTotal;
        d
          ? c("PolarisODS").incr("web.mqtt.mqtt_client_connect.success")
          : c("PolarisODS").incr("web.mqtt.mqtt_client_connect.failed");
        a = {
          device_id: this.$3,
          session_id: k,
          logged_in: c("PolarisMqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          connection_status: d,
          duration: e,
          hostname: h,
          attempt_number: b,
          subscribed_topics: l,
          publishes: i,
          error_code: f,
          error_message: g,
        };
        this.$4(j.CONNECT, a);
      };
      b.eventLogPull = function (a) {
        var b = a.duration,
          d = a.errorMessage,
          e = a.hostname,
          f = a.pullEventName,
          g = a.sessionID;
        a = a.status;
        g = {
          device_id: this.$3,
          session_id: g,
          logged_in: c("PolarisMqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          connection_status: a,
          duration: b,
          hostname: e,
          error_message: d,
        };
        this.$4(f, g);
      };
      b.eventLogDisconnect = function (a) {
        var b = a.duration,
          d = a.errorCode,
          e = a.errorMessage;
        a = a.sessionID;
        c("PolarisODS").incr("web.mqtt.mqtt_client_disconnect");
        a = {
          device_id: this.$3,
          session_id: a,
          href: window.location.hostname,
          duration: b,
          error_code: d,
          error_message: e,
        };
        this.$4(j.DISCONNECT, a);
      };
      b.eventLogPublish = function (a) {
        var b = a.connectionStatus,
          d = a.publishStatus,
          e = a.sessionID;
        a = a.topic;
        c("PolarisODS").incr("web.mqtt.mqtt_client_publish");
        e = {
          device_id: this.$3,
          href: window.location.hostname,
          session_id: e,
          topic: a,
          connection_status: b,
          publish_status: d,
        };
        this.$4(j.PUBLISH, e);
      };
      b.logError = function (a, b) {
        c("PolarisMqttEnv").Env.scheduleLoggingCallback(function () {
          i.logError(b, a);
        });
      };
      b.eventLogMiscellaneousError = function (a) {
        a = a.errorMessage;
        a = {
          device_id: this.$3,
          logged_in: c("PolarisMqttEnv").Env.isUserLoggedInNow(),
          href: window.location.hostname,
          error_message: a,
          time_passed: Date.now() - this.$2,
        };
        this.$4(j.CLIENT_ERROR, a);
      };
      b.logErrorWarn = function (a, b) {
        c("PolarisMqttEnv").Env.scheduleLoggingCallback(function () {
          i.logError(b, a);
        });
      };
      b.logWarn = function (a, b) {};
      b.debugTrace = function (a, b) {
        c("PolarisMqttEnv").Env.scheduleLoggingCallback(function () {
          i.debugTrace(a, b);
        });
      };
      b.bumpCounter = function (a) {};
      b.$4 = function (a, b) {
        var d = this;
        c("PolarisMqttEnv").Env.scheduleLoggingCallback(function () {
          (b.event_type = a),
            (b.app_id = d.$1),
            (b.online = d.$5()),
            i.logDirectEvent(a, b);
        });
      };
      b.$5 = function () {
        return window.navigator && window.navigator.onLine !== void 0
          ? window.navigator.onLine
          : !1;
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "polarisSetTimeoutAcrossTransitions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      for (
        var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2;
        e < c;
        e++
      )
        d[e - 2] = arguments[e];
      return setTimeout.apply(void 0, [a, b].concat(d));
    }
    f["default"] = a;
  },
  66
);
__d(
  "PolarisMqttEnvInitializer",
  [
    "PolarisConfig",
    "PolarisMqttEnv",
    "PolarisMqttLogger",
    "PolarisWebStorage",
    "polarisSetTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "mqtt:";
    a = {
      initialize: function () {
        d("PolarisMqttEnv").Env.initialize(
          null,
          d("PolarisConfig").isLoggedIn,
          null,
          c("polarisSetTimeoutAcrossTransitions"),
          function () {
            return c("PolarisMqttLogger").getInstance();
          },
          null,
          null,
          null,
          null,
          function (a, b) {
            var d = c("PolarisWebStorage").getLocalStorage();
            if (d) {
              d = d.getItem(h + a);
              if (d != null) return d;
            }
            return b;
          },
          function (a, b) {
            var d = c("PolarisWebStorage").getLocalStorage();
            d && (b == null ? d.removeItem(h + a) : d.setItem(h + a, b));
          }
        );
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "polarisArraySplitChunks",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = [];
      for (var d = 0; d < a.length; d += b) c.push(a.slice(d, d + b));
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisNextTick",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    process && typeof process.nextTick === "function"
      ? (a = function (a) {
          process.nextTick(a);
        })
      : typeof setImmediate === "function"
      ? (a = function (a) {
          setImmediate(a);
        })
      : typeof window.setTimeout === "function"
      ? (a = function (a) {
          window.setTimeout(a, 0);
        })
      : (a = function (a) {
          a();
        });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "polarisForEachAsync",
  ["Promise", "polarisNextTick"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, d) {
      return new (b("Promise"))(function (b, e) {
        var f = 0;
        if (a.length === 0) {
          b();
          return;
        }
        function g() {
          try {
            d(a[f]);
          } catch (a) {
            e(a);
            return;
          }
          f++;
          f >= a.length ? b() : c("polarisNextTick")(g);
        }
        g();
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisDirectMQTT",
  [
    "PolarisBaseGraphQLEventHandler",
    "PolarisCallGatingHelpers",
    "PolarisConfig",
    "PolarisDeviceOrMachineId",
    "PolarisDirectConstants",
    "PolarisDirectDeltaHandlers",
    "PolarisDirectGraphQLSubscription",
    "PolarisDirectIrisSubscription",
    "PolarisDirectLogger",
    "PolarisDirectSkywalkerSubscription",
    "PolarisLiveDeltaHandler",
    "PolarisMediaOverlayInfoTypes",
    "PolarisMqttChannel",
    "PolarisMqttEnvInitializer",
    "PolarisODS",
    "PolarisReactRedux",
    "nullthrows",
    "polarisArraySplitChunks",
    "polarisDeveloperSettings",
    "polarisForEachAsync",
    "polarisGenerateOfflineThreadingId",
    "randomInt",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 20;
    a = (function () {
      function a(a, b) {
        var e = this;
        this.$8 = 0;
        this.$14 = function (a) {
          var b;
          try {
            b = JSON.parse(a.substr(0, a.length - 1));
          } catch (a) {
            e.$4.logError("Could not parse mqttMessages", a);
            return;
          }
          a = b.payload.header;
          if (a.type === 4 && a.conferenceName.includes("ROOM")) {
            var d, f;
            d =
              ((d = b.payload.body) == null
                ? void 0
                : (d = d.ringRequest) == null
                ? void 0
                : d.ringType) %
                2 ===
              1;
            f =
              (f = b.payload.body) == null
                ? void 0
                : (f = f.ringRequest) == null
                ? void 0
                : (f = f.appMessages) == null
                ? void 0
                : f.find(function (a) {
                    return a.body.genericMessage.topic === "ring_data";
                  });
            var g = "",
              h = "",
              i = "",
              j = [];
            if (f) {
              f = JSON.parse(
                f == null
                  ? void 0
                  : (f = f.body) == null
                  ? void 0
                  : (f = f.genericMessage) == null
                  ? void 0
                  : f.data
              );
              var k = f.display_name,
                l = f.display_uri,
                m = f.group_name,
                n = f.ig_thread_id;
              f = f.participant_usernames;
              g = n;
              i = k;
              j.push(l);
              if (m) h = m;
              else {
                try {
                  f = JSON.parse(f);
                } catch (a) {}
                h = Array.isArray(f) ? [k].concat(f).join(", ") : k;
              }
            }
            e.$6(a.type, a.serverInfoData, g, d, h, j, i);
            c("PolarisODS").incr("web.rtc.ack_ring_message");
            e.$15(
              a.conferenceName,
              a.sequenceNumber,
              a.serverInfoData,
              a.transactionId,
              a.type,
              a.conferenceType
            );
          } else
            a.type === 5 && a.conferenceName.includes("ROOM")
              ? (e.$6(a.type, a.serverInfoData, "", !1, "", [], ""),
                c("PolarisODS").incr("web.rtc.ack_dismiss_message"),
                e.$15(
                  a.conferenceName,
                  a.sequenceNumber,
                  a.serverInfoData,
                  a.transactionId,
                  a.type,
                  a.conferenceType
                ))
              : c("PolarisODS").incr("web.rtc.rtc_message_ignored");
        };
        this.$15 = function (a, b, d, f, g, h) {
          if (e.$7 == null) {
            var i = c("randomInt")(0, 4294967294) + 1;
            e.$7 = String(i);
          }
          i = {
            endpoint: { appId: e.$12(), deviceId: e.$13(), userId: e.$11() },
            jsonPayload: {
              header: {
                clientSessionId: e.$7,
                clientStack: 5,
                conferenceType: h,
                conferenceName: a,
                messageTags: [],
                responseStatusCode: 200,
                retryCount: 0,
                sequenceNumber: b,
                serverInfoData: d,
                transactionId: f,
                type: g,
              },
              body: {
                ringResponse: { deviceCapabilities: [], deviceStatus: 0 },
              },
            },
          };
          c("nullthrows")(e.$5)
            .publish("/rtc_multi", JSON.stringify(i))
            ["catch"](function (a) {
              var b;
              g === 4
                ? c("PolarisODS").incr("web.rtc.ack_ring_message_failed")
                : g === 5
                ? c("PolarisODS").incr("web.rtc.ack_dismiss_message_failed")
                : c("PolarisODS").incr("web.rtc.ack_message_failed");
              b =
                (b = (b = e.$5) == null ? void 0 : b.getConnectionState()) !=
                null
                  ? b
                  : "Unknown";
              e.$4.logError("ack_rtc_message_failed", a, {
                message_type: g,
                conference_type: h,
                mqtt_state: b,
              });
              throw a;
            });
        };
        this.$16 = function (a) {
          var b = c("nullthrows")(e.$1),
            f;
          try {
            f = JSON.parse(a);
          } catch (a) {
            e.$4.logError("Could not parse mqttMessages", a);
            return;
          }
          if (!Array.isArray(f)) {
            e.$4.debugTrace("parsed_message_not_array", typeof f);
            return;
          }
          c("polarisForEachAsync")(
            c("polarisArraySplitChunks")(f, h),
            function (a) {
              d("PolarisReactRedux").batch(function () {
                for (
                  var c = a,
                    d = Array.isArray(c),
                    f = 0,
                    c = d
                      ? c
                      : c[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]();
                  ;

                ) {
                  var g;
                  if (d) {
                    if (f >= c.length) break;
                    g = c[f++];
                  } else {
                    f = c.next();
                    if (f.done) break;
                    g = f.value;
                  }
                  g = g;
                  var h = g.data,
                    i = g.event,
                    j = g.mutation_token;
                  g = g.seq_id;
                  e.$4.debugTrace("parsed_message", {
                    event: i,
                    mutation_token: j,
                  });
                  if (i !== "patch") {
                    e.$4.debugTrace("skipped_message", { event: i });
                    return;
                  }
                  if (!Array.isArray(h)) {
                    e.$4.debugTrace("parsed_message_bad_operations", typeof h);
                    return;
                  }
                  for (
                    var i = h,
                      h = Array.isArray(i),
                      k = 0,
                      i = h
                        ? i
                        : i[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var l;
                    if (h) {
                      if (k >= i.length) break;
                      l = i[k++];
                    } else {
                      k = i.next();
                      if (k.done) break;
                      l = k.value;
                    }
                    l = l;
                    b.handleDelta(l, j);
                  }
                  if (g) {
                    l = e.$2.subscription_type;
                    e.$4.debugTrace("seq_id", {
                      seq_id: g,
                      subscriptionType: l,
                    });
                    l === "message" && b.onSeqIdUpdated(g);
                  }
                }
              });
            }
          );
        };
        this.$17 = function (a) {
          try {
            a = JSON.parse(a);
            if (a.status === "ok") {
              var b;
              (a == null
                ? void 0
                : (b = a.payload) == null
                ? void 0
                : b.activity_status) == null
                ? e.$4.logDirectEvent("send_message_response_success")
                : e.$4.logDirectEvent("send_activity_response_success");
            } else {
              (a == null
                ? void 0
                : (b = a.payload) == null
                ? void 0
                : b.activity_status) == null
                ? e.$4.logError("send_message_response_failed")
                : e.$4.logDirectEvent("send_activity_response_failed");
            }
          } catch (a) {
            e.$4.logError("send_message_response_parse_failed", a);
          }
        };
        this.$18 = function (a) {
          e.$4.debugTrace("state_changed", a);
          var b = c("nullthrows")(e.$1);
          if (a === "Connected") {
            var f = c("nullthrows")(e.$5);
            f.subscribe("/ig_message_sync", e.$16);
            f.subscribe("/ig_send_message_response", e.$17);
            d("PolarisCallGatingHelpers").isIncomingCallEnabled() &&
              !d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() &&
              f.subscribe("/pubsub", e.$14);
            e.$3 ||
              (e.$3 = new (d(
                "PolarisDirectIrisSubscription"
              ).DirectIrisSubscription)(b, e.$2, f, e.$4.getDebugId()));
            e.$3.subscribe();
            e.$10 ||
              (e.$10 = new (d(
                "PolarisDirectGraphQLSubscription"
              ).DirectGraphQLSubscription)(b, f, e.$4.getDebugId()));
            e.$2.subscription_type === "message"
              ? (e.$9 ||
                  (e.$9 = new (d(
                    "PolarisDirectSkywalkerSubscription"
                  ).DirectSkywalkerSubscription)(b, f, e.$4.getDebugId())),
                e.$9.subscribe(),
                e.$10 &&
                  e.$10.enableOrDisableEventHandlerByType(
                    d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                      .PRESENCE,
                    !0
                  ))
              : (e.$4.debugTrace("skip_skywalker", e.$2),
                e.$10 &&
                  e.$10.enableOrDisableEventHandlerByType(
                    d("PolarisBaseGraphQLEventHandler").GRAPH_QL_EVENT_TYPES
                      .PRESENCE,
                    !1
                  ));
            e.$10 && e.$10.subscribe();
          } else if (a === "Disconnected") {
            e.$3 && (e.$3.unsubscribe(), (e.$3 = null));
            e.$9 && (e.$9.unsubscribe(), (e.$9 = null));
            e.$10 && (e.$10.unsubscribeGraphQL(), (e.$10 = null));
            f = e.$5;
            f &&
              (f.unsubscribe("/ig_message_sync"),
              f.unsubscribe("/ig_send_message_response"),
              d("PolarisCallGatingHelpers").isIncomingCallEnabled() &&
                !d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled() &&
                f.unsubscribe("/pubsub"));
          }
          b.onMqttConnectivityChanged(a);
        };
        this.$19 = function (a) {
          e.$4.logDirectEvent("send_attempt", {
            action: a.action,
            type: a.item_type || "",
          });
          return c("nullthrows")(e.$5)
            .publish(
              "/ig_send_message",
              JSON.stringify(
                babelHelpers["extends"](
                  {
                    client_context: c("polarisGenerateOfflineThreadingId")(),
                    device_id: e.$13(),
                  },
                  a
                )
              )
            )
            ["catch"](function (a) {
              e.$4.logError("send_message_failed", a);
              throw a;
            });
        };
        this.$4 = new (d("PolarisDirectLogger").DirectLogger)("DirectMQTT", b);
        this.$4.debugTrace("ctor", a);
        this.$1 = null;
        this.$2 = a;
        this.$3 = null;
        this.$5 = null;
        this.$9 = null;
        this.$10 = null;
      }
      var b = a.prototype;
      b.$11 = function () {
        return parseInt(c("nullthrows")(d("PolarisConfig").getViewerId()), 10);
      };
      b.$12 = function () {
        return parseInt(d("PolarisConfig").getIGAppID(), 10);
      };
      b.$13 = function () {
        return d("PolarisDeviceOrMachineId").getDeviceOrMachineId();
      };
      b.sendRtcHangupRequest = function (a) {
        var b = this;
        a = {
          endpoint: {
            appId: this.$12(),
            deviceId: this.$13(),
            userId: this.$11(),
          },
          jsonPayload: {
            header: {
              clientSessionId: this.$7,
              clientStack: 5,
              messageTags: [],
              retryCount: 0,
              sequenceNumber: this.$8++,
              serverInfoData: a,
              transactionId: String(c("randomInt")(0, 4294967294) + 1),
              type: 2,
            },
            body: { hangupRequest: { detailedReasonString: "", reason: 0 } },
          },
        };
        return c("nullthrows")(this.$5)
          .publish("/rtc_multi", JSON.stringify(a))
          ["catch"](function (a) {
            b.$4.logError("send_rtc_hangup_message_failed", a);
            throw a;
          });
      };
      b.sendTextMessage = function (a, b, c, e, f) {
        return this.$19({
          action: "send_item",
          item_type: d("PolarisDirectConstants").ThreadItemType.TEXT,
          mutation_token: c,
          replied_to_item_id: e,
          replied_to_client_context: f,
          text: b,
          thread_id: a,
        });
      };
      b.sendMediaShare = function (a, b, c) {
        return (c == null ? void 0 : c.overlay_layout) ===
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS.MEDIA_COVER ||
          (c == null ? void 0 : c.overlay_layout) ===
            d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
              .MEDIA_COVER_WITH_BOTTOM_BANNER
          ? this.$19({
              action: "send_item",
              item_type: d("PolarisDirectConstants").ThreadItemType.MEDIA_SHARE,
              media_id: b,
              thread_id: a,
              share_treatment_type: d("PolarisDirectConstants")
                .InformTreatmentTypeValues.WARNING_SCREENS,
              share_treatment_title: d("PolarisDirectConstants")
                .InformTreatmentTitleValues.FALLBACK,
            })
          : this.$19({
              action: "send_item",
              item_type: d("PolarisDirectConstants").ThreadItemType.MEDIA_SHARE,
              media_id: b,
              thread_id: a,
            });
      };
      b.sendLike = function (a, b) {
        return this.$19({
          action: "send_item",
          item_type: d("PolarisDirectConstants").ThreadItemType.LIKE,
          mutation_token: b,
          thread_id: a,
        });
      };
      b.indicateTypingActivity = function (a, b) {
        return this.$19({
          action: "indicate_activity",
          thread_id: b,
          activity_status: a,
        });
      };
      b.markVisualItemSeen = function (a, b) {
        return this.$19({
          action: "mark_visual_item_seen",
          target_item_type: "voice_media",
          thread_id: b,
          item_ids: JSON.stringify([a]),
        });
      };
      b.modifyLikeReaction = function (a, b, c, d, e) {
        return this.$19({
          action: "send_item",
          item_id: a,
          item_type: "reaction",
          node_type: "item",
          reaction_status: d,
          reaction_type: "like",
          target_item_type: b,
          thread_id: c,
          emoji: (a = e) != null ? a : "",
        });
      };
      b.disconnect = function () {
        this.$4.debugTrace("disconnect_start"),
          this.$3
            ? (this.$4.debugTrace("unsubscribe_iris"),
              c("nullthrows")(this.$3).unsubscribe(),
              (this.$3 = null))
            : this.$4.debugTrace("no_iris"),
          this.$9
            ? (this.$4.debugTrace("unsubscribe_skywalker"), (this.$9 = null))
            : this.$4.debugTrace("no_skywalker"),
          this.$10
            ? (this.$4.debugTrace("unsubscribe_graphql"), (this.$10 = null))
            : this.$4.debugTrace("no_graphql"),
          this.$5
            ? (this.$4.debugTrace("shutdown_channel"),
              c("nullthrows")(this.$5).shutdown(),
              (this.$5 = null))
            : this.$4.debugTrace("no_channel"),
          this.$1 && (this.$1 = null),
          this.$4.debugTrace("disconnect_end");
      };
      b.connect = function (a, b) {
        var e = this;
        this.$4.debugTrace("connect_start");
        this.disconnect();
        this.$1 = new (d("PolarisDirectDeltaHandlers").DirectDeltaHandlers)(
          a,
          this.$4.getDebugId()
        );
        this.$6 = b;
        a = {
          onMQTTStateChanged: this.$18,
          onJSError: function (a) {
            e.$4.logError("mqtt_js_error", a);
          },
        };
        b = { appSpecificInfo: {}, deviceId: this.$13() };
        var f = d("PolarisConfig").getLanguageCode();
        f != null && (b.appSpecificInfo["Accept-Language"] = f);
        c("PolarisMqttEnvInitializer").initialize();
        f = {
          endpoint: d("PolarisDirectConstants").PROD_MQTT_GATEWAY,
          userFbid: this.$11(),
          appId: this.$12(),
          initialSubscribedTopics: [],
          igSpecificOptions: b,
          observer: a,
          debugId: this.$4.getDebugId(),
          capabilities: 0,
          clientCapabilities: 1,
          chatVisibility: !0,
        };
        this.$5 = new (c("PolarisMqttChannel"))(f);
        this.$4.debugTrace("connect_end");
      };
      b.subscribeToLiveEvent = function (a, b, d) {
        var e = this.$10;
        if (e == null) return;
        b = new (c("PolarisLiveDeltaHandler"))(b);
        e.enableLiveEventHandler(a, b, d);
        e.subscribe();
      };
      b.unsubscribeToLiveEvent = function (a) {
        var b = this.$10;
        if (b == null) return;
        b.disableLiveEventHandler(a);
        b.subscribe();
      };
      b.getLogger = function () {
        return this.$4;
      };
      return a;
    })();
    g.DirectMQTT = a;
  },
  98
);
