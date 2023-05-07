/*FB_PKG_DELIM*/

__d(
  "PolarisAboutThisAccountUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.showAccountTransparencyDetails;
      a = a === void 0 ? !1 : a;
      return a;
    }
    f.getIsEligibleForATA = a;
  },
  66
);
__d(
  "PolarisReportUnderLawDialogItem.react",
  [
    "fbt",
    "IGCoreDialog",
    "PolarisConfig",
    "PolarisLinkBuilder",
    "PolarisRoutes",
    "polarisIsUserLoggedIn",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = h._("Report under NetzDG");
    c = h._("Report under CPA");
    var j = { DE: b, AT: c },
      k = {
        DE: d("PolarisRoutes").NETZDG_REPORT_CONTACT_FORM_PATH,
        AT: d("PolarisRoutes").CPA_REPORT_CONTACT_FORM_PATH,
      };
    function l(a) {
      return j[a];
    }
    function m(a, b) {
      a = k[a];
      return d("PolarisLinkBuilder").buildLegalReportLink(a, b);
    }
    function n() {
      var a = d("PolarisConfig").getCountryCode();
      return a !== "DE" && a !== "AT" ? null : a;
    }
    function a(a) {
      var b = a.contentId;
      a = a.reportingUrl;
      var c = n();
      if (d("polarisIsUserLoggedIn").isUserLoggedIn() || c == null) return null;
      var e = (a = a) != null ? a : m(c, b);
      a = l(c);
      b = function () {
        window.open(e, "_blank");
      };
      return i.jsx(d("IGCoreDialog").IGCoreDialogItem, {
        color: "ig-error-or-destructive",
        onClick: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ReportUnderLawDialogItem = a;
  },
  98
);
