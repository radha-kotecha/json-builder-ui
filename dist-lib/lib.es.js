import * as d from "react";
import nt from "react";
import "react-dom";
var re = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function at() {
  if (Oe) return z;
  Oe = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      o = {};
      for (var s in a)
        s !== "key" && (o[s] = a[s]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return z.Fragment = t, z.jsx = r, z.jsxs = r, z;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ot() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === se ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case v:
          return "Fragment";
        case h:
          return "Profiler";
        case x:
          return "StrictMode";
        case W:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case R:
            return "Portal";
          case N:
            return l.displayName || "Context";
          case b:
            return (l._context.displayName || "Context") + ".Consumer";
          case O:
            var g = l.render;
            return l = l.displayName, l || (l = g.displayName || g.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case $:
            return g = l.displayName || null, g !== null ? g : e(l.type) || "Memo";
          case M:
            g = l._payload, l = l._init;
            try {
              return e(l(g));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function r(l) {
      try {
        t(l);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var _ = g.error, C = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return _.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(l);
      }
    }
    function n(l) {
      if (l === v) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === M)
        return "<...>";
      try {
        var g = e(l);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = ue.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(l) {
      if (we.call(l, "key")) {
        var g = Object.getOwnPropertyDescriptor(l, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function s(l, g) {
      function _() {
        Ne || (Ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: _,
        configurable: !0
      });
    }
    function u() {
      var l = e(this.type);
      return _e[l] || (_e[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, g, _, C, te, de) {
      var S = _.ref;
      return l = {
        $$typeof: y,
        type: l,
        key: g,
        props: _,
        _owner: C
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function p(l, g, _, C, te, de) {
      var S = g.children;
      if (S !== void 0)
        if (C)
          if (tt(S)) {
            for (C = 0; C < S.length; C++)
              f(S[C]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(S);
      if (we.call(g, "key")) {
        S = e(l);
        var j = Object.keys(g).filter(function(rt) {
          return rt !== "key";
        });
        C = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[S + C] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          S,
          j,
          S
        ), Pe[S + C] = !0);
      }
      if (S = null, _ !== void 0 && (r(_), S = "" + _), i(g) && (r(g.key), S = "" + g.key), "key" in g) {
        _ = {};
        for (var fe in g)
          fe !== "key" && (_[fe] = g[fe]);
      } else _ = g;
      return S && s(
        _,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        S,
        _,
        a(),
        te,
        de
      );
    }
    function f(l) {
      m(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === M && (l._payload.status === "fulfilled" ? m(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === y;
    }
    var w = nt, y = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), N = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), ue = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = Object.prototype.hasOwnProperty, tt = Array.isArray, ce = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var Ne, _e = {}, Ce = w.react_stack_bottom_frame.bind(
      w,
      o
    )(), Se = ce(n(o)), Pe = {};
    J.Fragment = v, J.jsx = function(l, g, _) {
      var C = 1e4 > ue.recentlyCreatedOwnerStacks++;
      return p(
        l,
        g,
        _,
        !1,
        C ? Error("react-stack-top-frame") : Ce,
        C ? ce(n(l)) : Se
      );
    }, J.jsxs = function(l, g, _) {
      var C = 1e4 > ue.recentlyCreatedOwnerStacks++;
      return p(
        l,
        g,
        _,
        !0,
        C ? Error("react-stack-top-frame") : Ce,
        C ? ce(n(l)) : Se
      );
    };
  })()), J;
}
var De;
function it() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? re.exports = at() : re.exports = ot()), re.exports;
}
var D = it();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, q.apply(this, arguments);
}
var A;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(A || (A = {}));
const ke = "popstate";
function lt(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let {
      pathname: o,
      search: i,
      hash: s
    } = n.location;
    return me(
      "",
      {
        pathname: o,
        search: i,
        hash: s
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : G(a);
  }
  return ut(t, r, null, e);
}
function E(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function T(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function st() {
  return Math.random().toString(36).substr(2, 8);
}
function Le(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function me(e, t, r, n) {
  return r === void 0 && (r = null), q({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? U(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || st()
  });
}
function G(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function U(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function ut(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: a = document.defaultView,
    v5Compat: o = !1
  } = n, i = a.history, s = A.Pop, u = null, c = p();
  c == null && (c = 0, i.replaceState(q({}, i.state, {
    idx: c
  }), ""));
  function p() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function f() {
    s = A.Pop;
    let v = p(), x = v == null ? null : v - c;
    c = v, u && u({
      action: s,
      location: R.location,
      delta: x
    });
  }
  function m(v, x) {
    s = A.Push;
    let h = me(R.location, v, x);
    c = p() + 1;
    let b = Le(h, c), N = R.createHref(h);
    try {
      i.pushState(b, "", N);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError")
        throw O;
      a.location.assign(N);
    }
    o && u && u({
      action: s,
      location: R.location,
      delta: 1
    });
  }
  function w(v, x) {
    s = A.Replace;
    let h = me(R.location, v, x);
    c = p();
    let b = Le(h, c), N = R.createHref(h);
    i.replaceState(b, "", N), o && u && u({
      action: s,
      location: R.location,
      delta: 0
    });
  }
  function y(v) {
    let x = a.location.origin !== "null" ? a.location.origin : a.location.href, h = typeof v == "string" ? v : G(v);
    return h = h.replace(/ $/, "%20"), E(x, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, x);
  }
  let R = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(v) {
      if (u)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(ke, f), u = v, () => {
        a.removeEventListener(ke, f), u = null;
      };
    },
    createHref(v) {
      return t(a, v);
    },
    createURL: y,
    encodeLocation(v) {
      let x = y(v);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      };
    },
    push: m,
    replace: w,
    go(v) {
      return i.go(v);
    }
  };
  return R;
}
var Ae;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ae || (Ae = {}));
function ct(e, t, r) {
  return r === void 0 && (r = "/"), dt(e, t, r);
}
function dt(e, t, r, n) {
  let a = typeof t == "string" ? U(t) : t, o = V(a.pathname || "/", r);
  if (o == null)
    return null;
  let i = $e(e);
  ft(i);
  let s = null;
  for (let u = 0; s == null && u < i.length; ++u) {
    let c = wt(o);
    s = bt(i[u], c);
  }
  return s;
}
function $e(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (o, i, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    u.relativePath.startsWith("/") && (E(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
    let c = k([n, u.relativePath]), p = r.concat(u);
    o.children && o.children.length > 0 && (E(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')
    ), $e(o.children, t, p, c)), !(o.path == null && !o.index) && t.push({
      path: c,
      score: yt(c, o.index),
      routesMeta: p
    });
  };
  return e.forEach((o, i) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      a(o, i);
    else
      for (let u of Me(o.path))
        a(o, i, u);
  }), t;
}
function Me(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [o, ""] : [o];
  let i = Me(n.join("/")), s = [];
  return s.push(...i.map((u) => u === "" ? o : [o, u].join("/"))), a && s.push(...i), s.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function ft(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : Rt(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const pt = /^:[\w-]+$/, ht = 3, mt = 2, vt = 1, Et = 10, gt = -2, Ve = (e) => e === "*";
function yt(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Ve) && (n += gt), t && (n += mt), r.filter((a) => !Ve(a)).reduce((a, o) => a + (pt.test(o) ? ht : o === "" ? vt : Et), n);
}
function Rt(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function bt(e, t, r) {
  let {
    routesMeta: n
  } = e, a = {}, o = "/", i = [];
  for (let s = 0; s < n.length; ++s) {
    let u = n[s], c = s === n.length - 1, p = o === "/" ? t : t.slice(o.length) || "/", f = ve({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: c
    }, p), m = u.route;
    if (!f)
      return null;
    Object.assign(a, f.params), i.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: k([o, f.pathname]),
      pathnameBase: St(k([o, f.pathnameBase])),
      route: m
    }), f.pathnameBase !== "/" && (o = k([o, f.pathnameBase]));
  }
  return i;
}
function ve(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = xt(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let o = a[0], i = o.replace(/(.)\/+$/, "$1"), s = a.slice(1);
  return {
    params: n.reduce((c, p, f) => {
      let {
        paramName: m,
        isOptional: w
      } = p;
      if (m === "*") {
        let R = s[f] || "";
        i = o.slice(0, o.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[f];
      return w && !y ? c[m] = void 0 : c[m] = (y || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function xt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), T(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, s, u) => (n.push({
    paramName: s,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function wt(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return T(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function V(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Nt(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? U(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : _t(r, t) : t,
    search: Pt(n),
    hash: Ot(a)
  };
}
function _t(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function pe(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ct(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Ye(e, t) {
  let r = Ct(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function ze(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = U(e) : (a = q({}, e), E(!a.pathname || !a.pathname.includes("?"), pe("?", "pathname", "search", a)), E(!a.pathname || !a.pathname.includes("#"), pe("#", "pathname", "hash", a)), E(!a.search || !a.search.includes("#"), pe("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "", i = o ? "/" : a.pathname, s;
  if (i == null)
    s = r;
  else {
    let f = t.length - 1;
    if (!n && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), f -= 1;
      a.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = Nt(a, s), c = i && i !== "/" && i.endsWith("/"), p = (o || i === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (c || p) && (u.pathname += "/"), u;
}
const k = (e) => e.join("/").replace(/\/\/+/g, "/"), St = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Pt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ot = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Tt(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Je = ["post", "put", "patch", "delete"];
new Set(Je);
const Dt = ["get", ...Je];
new Set(Dt);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, K.apply(this, arguments);
}
const X = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (X.displayName = "DataRouter");
const ge = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (ge.displayName = "DataRouterState");
const kt = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (kt.displayName = "Await");
const P = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (P.displayName = "Navigation");
const Z = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (Z.displayName = "Location");
const L = /* @__PURE__ */ d.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (L.displayName = "Route");
const ye = /* @__PURE__ */ d.createContext(null);
process.env.NODE_ENV !== "production" && (ye.displayName = "RouteError");
function Lt(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  I() || (process.env.NODE_ENV !== "production" ? E(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : E(!1));
  let {
    basename: n,
    navigator: a
  } = d.useContext(P), {
    hash: o,
    pathname: i,
    search: s
  } = Q(e, {
    relative: r
  }), u = i;
  return n !== "/" && (u = i === "/" ? n : k([n, i])), a.createHref({
    pathname: u,
    search: s,
    hash: o
  });
}
function I() {
  return d.useContext(Z) != null;
}
function B() {
  return I() || (process.env.NODE_ENV !== "production" ? E(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : E(!1)), d.useContext(Z).location;
}
const qe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ge(e) {
  d.useContext(P).static || d.useLayoutEffect(e);
}
function At() {
  let {
    isDataRoute: e
  } = d.useContext(L);
  return e ? Gt() : Vt();
}
function Vt() {
  I() || (process.env.NODE_ENV !== "production" ? E(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : E(!1));
  let e = d.useContext(X), {
    basename: t,
    future: r,
    navigator: n
  } = d.useContext(P), {
    matches: a
  } = d.useContext(L), {
    pathname: o
  } = B(), i = JSON.stringify(Ye(a, r.v7_relativeSplatPath)), s = d.useRef(!1);
  return Ge(() => {
    s.current = !0;
  }), d.useCallback(function(c, p) {
    if (p === void 0 && (p = {}), process.env.NODE_ENV !== "production" && T(s.current, qe), !s.current) return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let f = ze(c, JSON.parse(i), o, p.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : k([t, f.pathname])), (p.replace ? n.replace : n.push)(f, p.state, p);
  }, [t, n, i, o, e]);
}
function Q(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = d.useContext(P), {
    matches: a
  } = d.useContext(L), {
    pathname: o
  } = B(), i = JSON.stringify(Ye(a, n.v7_relativeSplatPath));
  return d.useMemo(() => ze(e, JSON.parse(i), o, r === "path"), [e, i, o, r]);
}
function jt(e, t) {
  return Ft(e, t);
}
function Ft(e, t, r, n) {
  I() || (process.env.NODE_ENV !== "production" ? E(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : E(!1));
  let {
    navigator: a
  } = d.useContext(P), {
    matches: o
  } = d.useContext(L), i = o[o.length - 1], s = i ? i.params : {}, u = i ? i.pathname : "/", c = i ? i.pathnameBase : "/", p = i && i.route;
  if (process.env.NODE_ENV !== "production") {
    let h = p && p.path || "";
    He(u, !p || h.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + h + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + h + '"> to <Route ') + ('path="' + (h === "/" ? "*" : h + "/*") + '">.'));
  }
  let f = B(), m;
  if (t) {
    var w;
    let h = typeof t == "string" ? U(t) : t;
    c === "/" || (w = h.pathname) != null && w.startsWith(c) || (process.env.NODE_ENV !== "production" ? E(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + h.pathname + '" was given in the `location` prop.')) : E(!1)), m = h;
  } else
    m = f;
  let y = m.pathname || "/", R = y;
  if (c !== "/") {
    let h = c.replace(/^\//, "").split("/");
    R = "/" + y.replace(/^\//, "").split("/").slice(h.length).join("/");
  }
  let v = ct(e, {
    pathname: R
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && T(p || v != null, 'No routes matched location "' + m.pathname + m.search + m.hash + '" '), process.env.NODE_ENV !== "production" && T(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + m.pathname + m.search + m.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let x = $t(v && v.map((h) => Object.assign({}, h, {
    params: Object.assign({}, s, h.params),
    pathname: k([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(h.pathname).pathname : h.pathname
    ]),
    pathnameBase: h.pathnameBase === "/" ? c : k([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(h.pathnameBase).pathname : h.pathnameBase
    ])
  })), o, r, n);
  return t && x ? /* @__PURE__ */ d.createElement(Z.Provider, {
    value: {
      location: K({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, m),
      navigationType: A.Pop
    }
  }, x) : x;
}
function Ut() {
  let e = qt(), t = Tt(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", a = {
    padding: "0.5rem",
    backgroundColor: n
  }, o = {
    padding: "2px 4px",
    backgroundColor: n
  }, i = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), i = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ d.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ d.createElement("code", {
    style: o
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ d.createElement("code", {
    style: o
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ d.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ d.createElement("pre", {
    style: a
  }, r) : null, i);
}
const It = /* @__PURE__ */ d.createElement(Ut, null);
class Bt extends d.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ d.createElement(L.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ d.createElement(ye.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Wt(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, a = d.useContext(X);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ d.createElement(L.Provider, {
    value: t
  }, n);
}
function $t(e, t, r, n) {
  var a;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
    var o;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((o = n) != null && o.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let i = e, s = (a = r) == null ? void 0 : a.errors;
  if (s != null) {
    let p = i.findIndex((f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
    p >= 0 || (process.env.NODE_ENV !== "production" ? E(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(s).join(",")) : E(!1)), i = i.slice(0, Math.min(i.length, p + 1));
  }
  let u = !1, c = -1;
  if (r && n && n.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
      let f = i[p];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = p), f.route.id) {
        let {
          loaderData: m,
          errors: w
        } = r, y = f.route.loader && m[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
        if (f.route.lazy || y) {
          u = !0, c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
          break;
        }
      }
    }
  return i.reduceRight((p, f, m) => {
    let w, y = !1, R = null, v = null;
    r && (w = s && f.route.id ? s[f.route.id] : void 0, R = f.route.errorElement || It, u && (c < 0 && m === 0 ? (He("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), y = !0, v = null) : c === m && (y = !0, v = f.route.hydrateFallbackElement || null)));
    let x = t.concat(i.slice(0, m + 1)), h = () => {
      let b;
      return w ? b = R : y ? b = v : f.route.Component ? b = /* @__PURE__ */ d.createElement(f.route.Component, null) : f.route.element ? b = f.route.element : b = p, /* @__PURE__ */ d.createElement(Wt, {
        match: f,
        routeContext: {
          outlet: p,
          matches: x,
          isDataRoute: r != null
        },
        children: b
      });
    };
    return r && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? /* @__PURE__ */ d.createElement(Bt, {
      location: r.location,
      revalidation: r.revalidation,
      component: R,
      error: w,
      children: h(),
      routeContext: {
        outlet: null,
        matches: x,
        isDataRoute: !0
      }
    }) : h();
  }, null);
}
var Ke = /* @__PURE__ */ (function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
})(Ke || {}), H = /* @__PURE__ */ (function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
})(H || {});
function Re(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Mt(e) {
  let t = d.useContext(X);
  return t || (process.env.NODE_ENV !== "production" ? E(!1, Re(e)) : E(!1)), t;
}
function Yt(e) {
  let t = d.useContext(ge);
  return t || (process.env.NODE_ENV !== "production" ? E(!1, Re(e)) : E(!1)), t;
}
function zt(e) {
  let t = d.useContext(L);
  return t || (process.env.NODE_ENV !== "production" ? E(!1, Re(e)) : E(!1)), t;
}
function be(e) {
  let t = zt(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? E(!1, e + ' can only be used on routes that contain a unique "id"') : E(!1)), r.route.id;
}
function Jt() {
  return be(H.UseRouteId);
}
function qt() {
  var e;
  let t = d.useContext(ye), r = Yt(H.UseRouteError), n = be(H.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Gt() {
  let {
    router: e
  } = Mt(Ke.UseNavigateStable), t = be(H.UseNavigateStable), r = d.useRef(!1);
  return Ge(() => {
    r.current = !0;
  }), d.useCallback(function(a, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && T(r.current, qe), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, K({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
const je = {};
function He(e, t, r) {
  !t && !je[e] && (je[e] = !0, process.env.NODE_ENV !== "production" && T(!1, r));
}
const Fe = {};
function Kt(e, t) {
  process.env.NODE_ENV !== "production" && !Fe[t] && (Fe[t] = !0, console.warn(t));
}
const Ue = (e, t, r) => Kt(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + r + "."));
function Ht(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 && Ue("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && Ue("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function Xe(e) {
  process.env.NODE_ENV !== "production" ? E(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : E(!1);
}
function Xt(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = A.Pop,
    navigator: o,
    static: i = !1,
    future: s
  } = e;
  I() && (process.env.NODE_ENV !== "production" ? E(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : E(!1));
  let u = t.replace(/^\/*/, "/"), c = d.useMemo(() => ({
    basename: u,
    navigator: o,
    static: i,
    future: K({
      v7_relativeSplatPath: !1
    }, s)
  }), [u, s, o, i]);
  typeof n == "string" && (n = U(n));
  let {
    pathname: p = "/",
    search: f = "",
    hash: m = "",
    state: w = null,
    key: y = "default"
  } = n, R = d.useMemo(() => {
    let v = V(p, u);
    return v == null ? null : {
      location: {
        pathname: v,
        search: f,
        hash: m,
        state: w,
        key: y
      },
      navigationType: a
    };
  }, [u, p, f, m, w, y, a]);
  return process.env.NODE_ENV !== "production" && T(R != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + p + f + m + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), R == null ? null : /* @__PURE__ */ d.createElement(P.Provider, {
    value: c
  }, /* @__PURE__ */ d.createElement(Z.Provider, {
    children: r,
    value: R
  }));
}
function Zt(e) {
  let {
    children: t,
    location: r
  } = e;
  return jt(Ee(t), r);
}
new Promise(() => {
});
function Ee(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return d.Children.forEach(e, (n, a) => {
    if (!/* @__PURE__ */ d.isValidElement(n))
      return;
    let o = [...t, a];
    if (n.type === d.Fragment) {
      r.push.apply(r, Ee(n.props.children, o));
      return;
    }
    n.type !== Xe && (process.env.NODE_ENV !== "production" ? E(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : E(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? E(!1, "An index route cannot have child routes.") : E(!1));
    let i = {
      id: n.props.id || o.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (i.children = Ee(n.props.children, o)), r.push(i);
  }), r;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, F.apply(this, arguments);
}
function xe(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const ae = "get", oe = "application/x-www-form-urlencoded";
function le(e) {
  return e != null && typeof e.tagName == "string";
}
function Qt(e) {
  return le(e) && e.tagName.toLowerCase() === "button";
}
function er(e) {
  return le(e) && e.tagName.toLowerCase() === "form";
}
function tr(e) {
  return le(e) && e.tagName.toLowerCase() === "input";
}
function rr(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nr(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !rr(e);
}
let ne = null;
function ar() {
  if (ne === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ne = !1;
    } catch {
      ne = !0;
    }
  return ne;
}
const or = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function he(e) {
  return e != null && !or.has(e) ? (process.env.NODE_ENV !== "production" && T(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + oe + '"')), null) : e;
}
function ir(e, t) {
  let r, n, a, o, i;
  if (er(e)) {
    let s = e.getAttribute("action");
    n = s ? V(s, t) : null, r = e.getAttribute("method") || ae, a = he(e.getAttribute("enctype")) || oe, o = new FormData(e);
  } else if (Qt(e) || tr(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let u = e.getAttribute("formaction") || s.getAttribute("action");
    if (n = u ? V(u, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || ae, a = he(e.getAttribute("formenctype")) || he(s.getAttribute("enctype")) || oe, o = new FormData(s, e), !ar()) {
      let {
        name: c,
        type: p,
        value: f
      } = e;
      if (p === "image") {
        let m = c ? c + "." : "";
        o.append(m + "x", "0"), o.append(m + "y", "0");
      } else c && o.append(c, f);
    }
  } else {
    if (le(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = ae, n = null, a = oe, i = e;
  }
  return o && a === "text/plain" && (i = o, o = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: a,
    formData: o,
    body: i
  };
}
const lr = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], sr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], ur = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], cr = "6";
try {
  window.__reactRouterVersion = cr;
} catch {
}
const Ze = /* @__PURE__ */ d.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Ze.displayName = "ViewTransition");
const dr = /* @__PURE__ */ d.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (dr.displayName = "Fetchers");
const fr = "startTransition", Ie = d[fr];
function pr(e) {
  let {
    basename: t,
    children: r,
    future: n,
    window: a
  } = e, o = d.useRef();
  o.current == null && (o.current = lt({
    window: a,
    v5Compat: !0
  }));
  let i = o.current, [s, u] = d.useState({
    action: i.action,
    location: i.location
  }), {
    v7_startTransition: c
  } = n || {}, p = d.useCallback((f) => {
    c && Ie ? Ie(() => u(f)) : u(f);
  }, [u, c]);
  return d.useLayoutEffect(() => i.listen(p), [i, p]), d.useEffect(() => Ht(n), [n]), /* @__PURE__ */ d.createElement(Xt, {
    basename: t,
    children: r,
    location: s.location,
    navigationType: s.action,
    navigator: i,
    future: n
  });
}
process.env.NODE_ENV;
const hr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Qe = /* @__PURE__ */ d.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: a,
    reloadDocument: o,
    replace: i,
    state: s,
    target: u,
    to: c,
    preventScrollReset: p,
    viewTransition: f
  } = t, m = xe(t, lr), {
    basename: w
  } = d.useContext(P), y, R = !1;
  if (typeof c == "string" && mr.test(c) && (y = c, hr))
    try {
      let b = new URL(window.location.href), N = c.startsWith("//") ? new URL(b.protocol + c) : new URL(c), O = V(N.pathname, w);
      N.origin === b.origin && O != null ? c = O + N.search + N.hash : R = !0;
    } catch {
      process.env.NODE_ENV !== "production" && T(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let v = Lt(c, {
    relative: a
  }), x = yr(c, {
    replace: i,
    state: s,
    target: u,
    preventScrollReset: p,
    relative: a,
    viewTransition: f
  });
  function h(b) {
    n && n(b), b.defaultPrevented || x(b);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ d.createElement("a", F({}, m, {
      href: y || v,
      onClick: R || o ? n : h,
      ref: r,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (Qe.displayName = "Link");
const vr = /* @__PURE__ */ d.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: o = "",
    end: i = !1,
    style: s,
    to: u,
    viewTransition: c,
    children: p
  } = t, f = xe(t, sr), m = Q(u, {
    relative: f.relative
  }), w = B(), y = d.useContext(ge), {
    navigator: R,
    basename: v
  } = d.useContext(P), x = y != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  _r(m) && c === !0, h = R.encodeLocation ? R.encodeLocation(m).pathname : m.pathname, b = w.pathname, N = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
  a || (b = b.toLowerCase(), N = N ? N.toLowerCase() : null, h = h.toLowerCase()), N && v && (N = V(N, v) || N);
  const O = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
  let W = b === h || !i && b.startsWith(h) && b.charAt(O) === "/", ee = N != null && (N === h || !i && N.startsWith(h) && N.charAt(h.length) === "/"), $ = {
    isActive: W,
    isPending: ee,
    isTransitioning: x
  }, M = W ? n : void 0, Y;
  typeof o == "function" ? Y = o($) : Y = [o, W ? "active" : null, ee ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let se = typeof s == "function" ? s($) : s;
  return /* @__PURE__ */ d.createElement(Qe, F({}, f, {
    "aria-current": M,
    className: Y,
    ref: r,
    style: se,
    to: u,
    viewTransition: c
  }), typeof p == "function" ? p($) : p);
});
process.env.NODE_ENV !== "production" && (vr.displayName = "NavLink");
const Er = /* @__PURE__ */ d.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: a,
    replace: o,
    state: i,
    method: s = ae,
    action: u,
    onSubmit: c,
    relative: p,
    preventScrollReset: f,
    viewTransition: m
  } = e, w = xe(e, ur), y = wr(), R = Nr(u, {
    relative: p
  }), v = s.toLowerCase() === "get" ? "get" : "post", x = (h) => {
    if (c && c(h), h.defaultPrevented) return;
    h.preventDefault();
    let b = h.nativeEvent.submitter, N = (b == null ? void 0 : b.getAttribute("formmethod")) || s;
    y(b || h.currentTarget, {
      fetcherKey: r,
      method: N,
      navigate: n,
      replace: o,
      state: i,
      relative: p,
      preventScrollReset: f,
      viewTransition: m
    });
  };
  return /* @__PURE__ */ d.createElement("form", F({
    ref: t,
    method: v,
    action: R,
    onSubmit: a ? c : x
  }, w));
});
process.env.NODE_ENV !== "production" && (Er.displayName = "Form");
process.env.NODE_ENV;
var ie;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ie || (ie = {}));
var Be;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Be || (Be = {}));
function gr(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function et(e) {
  let t = d.useContext(X);
  return t || (process.env.NODE_ENV !== "production" ? E(!1, gr(e)) : E(!1)), t;
}
function yr(e, t) {
  let {
    target: r,
    replace: n,
    state: a,
    preventScrollReset: o,
    relative: i,
    viewTransition: s
  } = t === void 0 ? {} : t, u = At(), c = B(), p = Q(e, {
    relative: i
  });
  return d.useCallback((f) => {
    if (nr(f, r)) {
      f.preventDefault();
      let m = n !== void 0 ? n : G(c) === G(p);
      u(e, {
        replace: m,
        state: a,
        preventScrollReset: o,
        relative: i,
        viewTransition: s
      });
    }
  }, [c, u, p, n, a, r, e, o, i, s]);
}
function Rr() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let br = 0, xr = () => "__" + String(++br) + "__";
function wr() {
  let {
    router: e
  } = et(ie.UseSubmit), {
    basename: t
  } = d.useContext(P), r = Jt();
  return d.useCallback(function(n, a) {
    a === void 0 && (a = {}), Rr();
    let {
      action: o,
      method: i,
      encType: s,
      formData: u,
      body: c
    } = ir(n, t);
    if (a.navigate === !1) {
      let p = a.fetcherKey || xr();
      e.fetch(p, r, a.action || o, {
        preventScrollReset: a.preventScrollReset,
        formData: u,
        body: c,
        formMethod: a.method || i,
        formEncType: a.encType || s,
        flushSync: a.flushSync
      });
    } else
      e.navigate(a.action || o, {
        preventScrollReset: a.preventScrollReset,
        formData: u,
        body: c,
        formMethod: a.method || i,
        formEncType: a.encType || s,
        replace: a.replace,
        state: a.state,
        fromRouteId: r,
        flushSync: a.flushSync,
        viewTransition: a.viewTransition
      });
  }, [e, t, r]);
}
function Nr(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = d.useContext(P), a = d.useContext(L);
  a || (process.env.NODE_ENV !== "production" ? E(!1, "useFormAction must be used inside a RouteContext") : E(!1));
  let [o] = a.matches.slice(-1), i = F({}, Q(e || ".", {
    relative: r
  })), s = B();
  if (e == null) {
    i.search = s.search;
    let u = new URLSearchParams(i.search), c = u.getAll("index");
    if (c.some((f) => f === "")) {
      u.delete("index"), c.filter((m) => m).forEach((m) => u.append("index", m));
      let f = u.toString();
      i.search = f ? "?" + f : "";
    }
  }
  return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : k([n, i.pathname])), G(i);
}
function _r(e, t) {
  t === void 0 && (t = {});
  let r = d.useContext(Ze);
  r == null && (process.env.NODE_ENV !== "production" ? E(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : E(!1));
  let {
    basename: n
  } = et(ie.useViewTransitionState), a = Q(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let o = V(r.currentLocation.pathname, n) || r.currentLocation.pathname, i = V(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return ve(a.pathname, i) != null || ve(a.pathname, o) != null;
}
function We() {
  return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsx(Zt, { children: /* @__PURE__ */ D.jsx(Xe, { path: "radha-kotecha", element: () => /* @__PURE__ */ D.jsx("div", { children: "Radha Kotecha" }) }) }),
    /* @__PURE__ */ D.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
function Pr() {
  const e = I();
  return console.log("insideRouter ->", e), e ? /* @__PURE__ */ D.jsx(We, {}) : /* @__PURE__ */ D.jsx(pr, { children: /* @__PURE__ */ D.jsx(We, {}) });
}
export {
  Pr as App
};
