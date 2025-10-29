import me, { useContext as $, createContext as L, Children as ve, isValidElement as Ee, Fragment as Re, createElement as _e } from "react";
var x = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ge() {
  if (q) return O;
  q = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(a, o, l) {
    var i = null;
    if (l !== void 0 && (i = "" + l), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      l = {};
      for (var u in o)
        u !== "key" && (l[u] = o[u]);
    } else l = o;
    return o = l.ref, {
      $$typeof: t,
      type: a,
      key: i,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return O.Fragment = r, O.jsx = n, O.jsxs = n, O;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function be() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === de ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case ae:
          return "Profiler";
        case ne:
          return "StrictMode";
        case le:
          return "Suspense";
        case ue:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case re:
            return "Portal";
          case se:
            return e.displayName || "Context";
          case oe:
            return (e._context.displayName || "Context") + ".Consumer";
          case ie:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ce:
            return s = e.displayName || null, s !== null ? s : t(e.type) || "Memo";
          case k:
            s = e._payload, e = e._init;
            try {
              return t(e(s));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function n(e) {
      try {
        r(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var c = s.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), r(e);
      }
    }
    function a(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var s = t(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (F.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, s) {
      function c() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function _() {
      var e = t(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, s, c, f, w, C) {
      var d = c.ref;
      return e = {
        $$typeof: p,
        type: e,
        key: s,
        props: c,
        _owner: f
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function m(e, s, c, f, w, C) {
      var d = s.children;
      if (d !== void 0)
        if (f)
          if (pe(d)) {
            for (f = 0; f < d.length; f++)
              R(d[f]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(d);
      if (F.call(s, "key")) {
        d = t(e);
        var b = Object.keys(s).filter(function(he) {
          return he !== "key";
        });
        f = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", z[d + f] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          d,
          b,
          d
        ), z[d + f] = !0);
      }
      if (d = null, c !== void 0 && (n(c), d = "" + c), i(s) && (n(s.key), d = "" + s.key), "key" in s) {
        c = {};
        for (var V in s)
          V !== "key" && (c[V] = s[V]);
      } else c = s;
      return d && u(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        d,
        c,
        o(),
        w,
        C
      );
    }
    function R(e) {
      g(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? g(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function g(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    var E = me, p = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), se = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), j = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, pe = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, U = {}, B = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), M = A(a(l)), z = {};
    P.Fragment = S, P.jsx = function(e, s, c) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return m(
        e,
        s,
        c,
        !1,
        f ? Error("react-stack-top-frame") : B,
        f ? A(a(e)) : M
      );
    }, P.jsxs = function(e, s, c) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return m(
        e,
        s,
        c,
        !0,
        f ? Error("react-stack-top-frame") : B,
        f ? A(a(e)) : M
      );
    };
  })()), P;
}
var G;
function Ne() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? x.exports = ge() : x.exports = be()), x.exports;
}
var N = Ne(), X;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(X || (X = {}));
process.env.NODE_ENV;
function Q(t) {
  var r = {};
  if (t) {
    var n = t.indexOf("#");
    n >= 0 && (r.hash = t.substr(n), t = t.substr(0, n));
    var a = t.indexOf("?");
    a >= 0 && (r.search = t.substr(a), t = t.substr(0, a)), t && (r.pathname = t);
  }
  return r;
}
/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function v(t, r) {
  throw new Error(r);
}
function T(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
const H = {};
function ye(t, r, n) {
  !r && !H[t] && (H[t] = !0, process.env.NODE_ENV !== "production" && T(!1, n));
}
const Oe = /* @__PURE__ */ L(null);
process.env.NODE_ENV !== "production" && (Oe.displayName = "Navigation");
const W = /* @__PURE__ */ L(null);
process.env.NODE_ENV !== "production" && (W.displayName = "Location");
const Y = /* @__PURE__ */ L({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (Y.displayName = "Route");
function K(t) {
  process.env.NODE_ENV !== "production" ? v(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : v();
}
function Pe(t) {
  let {
    children: r,
    location: n
  } = t;
  return we(D(r), n);
}
function ee() {
  return $(W) != null;
}
function Te() {
  return ee() || (process.env.NODE_ENV !== "production" ? v(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : v()), $(W).location;
}
function we(t, r) {
  ee() || (process.env.NODE_ENV !== "production" ? v(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : v());
  let {
    matches: n
  } = $(Y), a = n[n.length - 1], o = a ? a.params : {}, l = a ? a.pathname : "/", i = a ? a.pathnameBase : "/", u = a && a.route;
  if (process.env.NODE_ENV !== "production") {
    let p = u && u.path || "";
    ye(l, !u || p.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + l + '" (under <Route path="' + p + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + p + '"> to <Route ') + ('path="' + (p === "/" ? "*" : p + "/*") + '">.'));
  }
  let _ = Te(), h;
  if (r) {
    var m;
    let p = typeof r == "string" ? Q(r) : r;
    i === "/" || (m = p.pathname) != null && m.startsWith(i) || (process.env.NODE_ENV !== "production" ? v(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + i + '" ') + ('but pathname "' + p.pathname + '" was given in the `location` prop.')) : v()), h = p;
  } else
    h = _;
  let R = h.pathname || "/", g = i === "/" ? R : R.slice(i.length) || "/", E = xe(t, {
    pathname: g
  });
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && T(u || E != null, 'No routes matched location "' + h.pathname + h.search + h.hash + '" '), process.env.NODE_ENV !== "production" && T(E == null || E[E.length - 1].route.element !== void 0, 'Matched leaf route at location "' + h.pathname + h.search + h.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), Ye(E && E.map((p) => Object.assign({}, p, {
    params: Object.assign({}, o, p.params),
    pathname: y([i, p.pathname]),
    pathnameBase: p.pathnameBase === "/" ? i : y([i, p.pathnameBase])
  })), n);
}
function D(t) {
  let r = [];
  return ve.forEach(t, (n) => {
    if (!/* @__PURE__ */ Ee(n))
      return;
    if (n.type === Re) {
      r.push.apply(r, D(n.props.children));
      return;
    }
    n.type !== K && (process.env.NODE_ENV !== "production" ? v(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : v());
    let a = {
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      index: n.props.index,
      path: n.props.path
    };
    n.props.children && (a.children = D(n.props.children)), r.push(a);
  }), r;
}
function xe(t, r, n) {
  n === void 0 && (n = "/");
  let a = typeof r == "string" ? Q(r) : r, o = Be(a.pathname || "/", n);
  if (o == null)
    return null;
  let l = te(t);
  Se(l);
  let i = null;
  for (let u = 0; i == null && u < l.length; ++u)
    i = We(l[u], o);
  return i;
}
function te(t, r, n, a) {
  return r === void 0 && (r = []), n === void 0 && (n = []), a === void 0 && (a = ""), t.forEach((o, l) => {
    let i = {
      relativePath: o.path || "",
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o
    };
    i.relativePath.startsWith("/") && (i.relativePath.startsWith(a) || (process.env.NODE_ENV !== "production" ? v(!1, 'Absolute route path "' + i.relativePath + '" nested under path ' + ('"' + a + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : v()), i.relativePath = i.relativePath.slice(a.length));
    let u = y([a, i.relativePath]), _ = n.concat(i);
    o.children && o.children.length > 0 && (o.index === !0 && (process.env.NODE_ENV !== "production" ? v(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')) : v()), te(o.children, r, _, u)), !(o.path == null && !o.index) && r.push({
      path: u,
      score: $e(u, o.index),
      routesMeta: _
    });
  }), r;
}
function Se(t) {
  t.sort((r, n) => r.score !== n.score ? n.score - r.score : Le(r.routesMeta.map((a) => a.childrenIndex), n.routesMeta.map((a) => a.childrenIndex)));
}
const ke = /^:\w+$/, je = 3, Ae = 2, Ce = 1, Ve = 10, De = -2, Z = (t) => t === "*";
function $e(t, r) {
  let n = t.split("/"), a = n.length;
  return n.some(Z) && (a += De), r && (a += Ae), n.filter((o) => !Z(o)).reduce((o, l) => o + (ke.test(l) ? je : l === "" ? Ce : Ve), a);
}
function Le(t, r) {
  return t.length === r.length && t.slice(0, -1).every((a, o) => a === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function We(t, r) {
  let {
    routesMeta: n
  } = t, a = {}, o = "/", l = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i], _ = i === n.length - 1, h = o === "/" ? r : r.slice(o.length) || "/", m = Fe({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: _
    }, h);
    if (!m) return null;
    Object.assign(a, m.params);
    let R = u.route;
    l.push({
      params: a,
      pathname: y([o, m.pathname]),
      pathnameBase: Me(y([o, m.pathnameBase])),
      route: R
    }), m.pathnameBase !== "/" && (o = y([o, m.pathnameBase]));
  }
  return l;
}
function Ye(t, r) {
  return r === void 0 && (r = []), t == null ? null : t.reduceRight((n, a, o) => /* @__PURE__ */ _e(Y.Provider, {
    children: a.route.element !== void 0 ? a.route.element : n,
    value: {
      outlet: n,
      matches: r.concat(t.slice(0, o + 1))
    }
  }), null);
}
function Fe(t, r) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [n, a] = Ie(t.path, t.caseSensitive, t.end), o = r.match(n);
  if (!o) return null;
  let l = o[0], i = l.replace(/(.)\/+$/, "$1"), u = o.slice(1);
  return {
    params: a.reduce((h, m, R) => {
      if (m === "*") {
        let g = u[R] || "";
        i = l.slice(0, l.length - g.length).replace(/(.)\/+$/, "$1");
      }
      return h[m] = Ue(u[R] || "", m), h;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: t
  };
}
function Ie(t, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !0), process.env.NODE_ENV !== "production" && T(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let a = [], o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (i, u) => (a.push(u), "([^\\/]+)"));
  return t.endsWith("*") ? (a.push("*"), o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o += n ? "\\/*$" : (
    // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
  ), [new RegExp(o, r ? void 0 : "i"), a];
}
function Ue(t, r) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return process.env.NODE_ENV !== "production" && T(!1, 'The value for the URL param "' + r + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t;
  }
}
function Be(t, r) {
  if (r === "/") return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let n = t.charAt(r.length);
  return n && n !== "/" ? null : t.slice(r.length) || "/";
}
const y = (t) => t.join("/").replace(/\/\/+/g, "/"), Me = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function qe() {
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsx(Pe, { children: /* @__PURE__ */ N.jsx(K, { path: "radha-kotecha", element: () => /* @__PURE__ */ N.jsx("div", { children: "Radha Kotecha" }) }) }),
    /* @__PURE__ */ N.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  qe as App
};
