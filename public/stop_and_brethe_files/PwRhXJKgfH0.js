/*FB_PKG_DELIM*/

__d(
  "PolarisClipsHomeRootQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "5933546110097789",
        metadata: {},
        name: "PolarisClipsHomeRootQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisClipsTabDesktopQuery$Parameters",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "8964283396976508",
        metadata: {},
        name: "PolarisClipsTabDesktopQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PolarisActivityFeedRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")(
        "PolarisActivityFeedRoot.react"
      ).__setRef("PolarisActivityFeedRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabDesktopRoot.entrypoint",
  ["JSResourceForInteraction", "PolarisClipsTabDesktopQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = { container_module: "clips_viewer_clips_tab" };
        a.routeProps.media_id != null &&
          (b = babelHelpers["extends"]({}, b, {
            chaining_media_id: a.routeProps.media_id,
            should_refetch_chaining_media: !0,
          }));
        return {
          queries: {
            polarisClipsTapDesktopPageQuery: {
              options: {},
              parameters: c("PolarisClipsTabDesktopQuery$Parameters"),
              variables: { data: b },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "PolarisClipsTabDesktopRoot.react"
      ).__setRef("PolarisClipsTabDesktopRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisClipsTabRoot.entrypoint",
  ["JSResourceForInteraction", "PolarisClipsHomeRootQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var b = { container_module: "clips_viewer_clips_tab" };
        a.routeProps.media_id != null &&
          (b = babelHelpers["extends"]({}, b, {
            chaining_media_id: a.routeProps.media_id,
            should_refetch_chaining_media: !0,
          }));
        return {
          queries: {
            polarisClipsTabRootQuery: {
              options: {},
              parameters: c("PolarisClipsHomeRootQuery$Parameters"),
              variables: { data: b },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")("PolarisClipsTabRoot.react").__setRef(
        "PolarisClipsTabRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisExploreLocationsDirectoryLandingRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")(
        "PolarisExploreLocationsDirectoryLandingRoot.react"
      ).__setRef("PolarisExploreLocationsDirectoryLandingRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisExplorePeopleRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {};
      },
      root: c("JSResourceForInteraction")(
        "PolarisExplorePeopleRoot.react"
      ).__setRef("PolarisExplorePeopleRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisExploreRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")("PolarisExploreRoot.react").__setRef(
        "PolarisExploreRoot.entrypoint"
      ),
    };
    g["default"] = a;
  },
  98
);
__d(
  "PolarisIgLiteCarbonRoot.entrypoint",
  ["JSResourceForInteraction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return { queries: {} };
      },
      root: c("JSResourceForInteraction")(
        "PolarisIgLiteCarbonRoot.react"
      ).__setRef("PolarisIgLiteCarbonRoot.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
