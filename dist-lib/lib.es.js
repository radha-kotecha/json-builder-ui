import Le, { useContext as V, createContext as se, useMemo as oe, createElement as I, Children as $e, isValidElement as We, Fragment as Ye, useRef as we, useEffect as Be, useCallback as Oe, useState as Ie, useLayoutEffect as Fe, forwardRef as xe } from "react";
var X = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Me() {
  if (me) return M;
  me = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      i = {};
      for (var s in a)
        s !== "key" && (i[s] = a[s]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return M.Fragment = t, M.jsx = n, M.jsxs = n, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ue() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === w ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case T:
          return "Fragment";
        case C:
          return "Profiler";
        case S:
          return "StrictMode";
        case ne:
          return "Suspense";
        case f:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case P:
            return "Portal";
          case q:
            return o.displayName || "Context";
          case H:
            return (o._context.displayName || "Context") + ".Consumer";
          case A:
            var c = o.render;
            return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case v:
            return c = o.displayName || null, c !== null ? c : e(o.type) || "Memo";
          case _:
            c = o._payload, o = o._init;
            try {
              return e(o(c));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function n(o) {
      try {
        t(o);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var E = c.error, R = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return E.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(o);
      }
    }
    function r(o) {
      if (o === T) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === _)
        return "<...>";
      try {
        var c = e(o);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var o = x.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(o) {
      if (W.call(o, "key")) {
        var c = Object.getOwnPropertyDescriptor(o, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function s(o, c) {
      function E() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: E,
        configurable: !0
      });
    }
    function u() {
      var o = e(this.type);
      return fe[o] || (fe[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function h(o, c, E, R, K, re) {
      var b = E.ref;
      return o = {
        $$typeof: m,
        type: o,
        key: c,
        props: E,
        _owner: R
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function p(o, c, E, R, K, re) {
      var b = c.children;
      if (b !== void 0)
        if (R)
          if (Y(b)) {
            for (R = 0; R < b.length; R++)
              g(b[R]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(b);
      if (W.call(c, "key")) {
        b = e(o);
        var B = Object.keys(c).filter(function(Ve) {
          return Ve !== "key";
        });
        R = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", de[b + R] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          b,
          B,
          b
        ), de[b + R] = !0);
      }
      if (b = null, E !== void 0 && (n(E), b = "" + E), l(c) && (n(c.key), b = "" + c.key), "key" in c) {
        E = {};
        for (var ae in c)
          ae !== "key" && (E[ae] = c[ae]);
      } else E = c;
      return b && s(
        E,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), h(
        o,
        b,
        E,
        a(),
        K,
        re
      );
    }
    function g(o) {
      N(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === _ && (o._payload.status === "fulfilled" ? N(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function N(o) {
      return typeof o == "object" && o !== null && o.$$typeof === m;
    }
    var d = Le, m = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), q = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), x = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, Y = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var ue, fe = {}, he = d.react_stack_bottom_frame.bind(
      d,
      i
    )(), pe = G(r(i)), de = {};
    U.Fragment = T, U.jsx = function(o, c, E) {
      var R = 1e4 > x.recentlyCreatedOwnerStacks++;
      return p(
        o,
        c,
        E,
        !1,
        R ? Error("react-stack-top-frame") : he,
        R ? G(r(o)) : pe
      );
    }, U.jsxs = function(o, c, E) {
      var R = 1e4 > x.recentlyCreatedOwnerStacks++;
      return p(
        o,
        c,
        E,
        !0,
        R ? Error("react-stack-top-frame") : he,
        R ? G(r(o)) : pe
      );
    };
  })()), U;
}
var ge;
function Je() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? X.exports = Me() : X.exports = Ue()), X.exports;
}
var k = Je();
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Z.apply(null, arguments);
}
var D;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(D || (D = {}));
var Ee = process.env.NODE_ENV !== "production" ? function(e) {
  return Object.freeze(e);
} : function(e) {
  return e;
};
function ze(e, t) {
  {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
var ye = "beforeunload", He = "popstate";
function qe(e) {
  e === void 0 && (e = {});
  var t = e, n = t.window, r = n === void 0 ? document.defaultView : n, a = r.history;
  function i() {
    var f = r.location, v = f.pathname, _ = f.search, O = f.hash, w = a.state || {};
    return [w.idx, Ee({
      pathname: v,
      search: _,
      hash: O,
      state: w.usr || null,
      key: w.key || "default"
    })];
  }
  var l = null;
  function s() {
    if (l)
      d.call(l), l = null;
    else {
      var f = D.Pop, v = i(), _ = v[0], O = v[1];
      if (d.length)
        if (_ != null) {
          var w = p - _;
          w && (l = {
            action: f,
            location: O,
            retry: function() {
              A(w * -1);
            }
          }, A(w));
        } else
          process.env.NODE_ENV !== "production" && ze(
            !1,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          );
      else
        C(f);
    }
  }
  r.addEventListener(He, s);
  var u = D.Pop, h = i(), p = h[0], g = h[1], N = be(), d = be();
  p == null && (p = 0, a.replaceState(Z({}, a.state, {
    idx: p
  }), ""));
  function m(f) {
    return typeof f == "string" ? f : ie(f);
  }
  function P(f, v) {
    return v === void 0 && (v = null), Ee(Z({
      pathname: g.pathname,
      hash: "",
      search: ""
    }, typeof f == "string" ? $(f) : f, {
      state: v,
      key: Ge()
    }));
  }
  function T(f, v) {
    return [{
      usr: f.state,
      key: f.key,
      idx: v
    }, m(f)];
  }
  function S(f, v, _) {
    return !d.length || (d.call({
      action: f,
      location: v,
      retry: _
    }), !1);
  }
  function C(f) {
    u = f;
    var v = i();
    p = v[0], g = v[1], N.call({
      action: u,
      location: g
    });
  }
  function H(f, v) {
    var _ = D.Push, O = P(f, v);
    function w() {
      H(f, v);
    }
    if (S(_, O, w)) {
      var x = T(O, p + 1), W = x[0], Y = x[1];
      try {
        a.pushState(W, "", Y);
      } catch {
        r.location.assign(Y);
      }
      C(_);
    }
  }
  function q(f, v) {
    var _ = D.Replace, O = P(f, v);
    function w() {
      q(f, v);
    }
    if (S(_, O, w)) {
      var x = T(O, p), W = x[0], Y = x[1];
      a.replaceState(W, "", Y), C(_);
    }
  }
  function A(f) {
    a.go(f);
  }
  var ne = {
    get action() {
      return u;
    },
    get location() {
      return g;
    },
    createHref: m,
    push: H,
    replace: q,
    go: A,
    back: function() {
      A(-1);
    },
    forward: function() {
      A(1);
    },
    listen: function(v) {
      return N.push(v);
    },
    block: function(v) {
      var _ = d.push(v);
      return d.length === 1 && r.addEventListener(ye, Re), function() {
        _(), d.length || r.removeEventListener(ye, Re);
      };
    }
  };
  return ne;
}
function Re(e) {
  e.preventDefault(), e.returnValue = "";
}
function be() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function(n) {
      return e.push(n), function() {
        e = e.filter(function(r) {
          return r !== n;
        });
      };
    },
    call: function(n) {
      e.forEach(function(r) {
        return r && r(n);
      });
    }
  };
}
function Ge() {
  return Math.random().toString(36).substr(2, 8);
}
function ie(e) {
  var t = e.pathname, n = t === void 0 ? "/" : t, r = e.search, a = r === void 0 ? "" : r, i = e.hash, l = i === void 0 ? "" : i;
  return a && a !== "?" && (n += a.charAt(0) === "?" ? a : "?" + a), l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l), n;
}
function $(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    var r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
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
function y(e, t) {
  throw new Error(t);
}
function L(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
const _e = {};
function Ke(e, t, n) {
  !t && !_e[e] && (_e[e] = !0, process.env.NODE_ENV !== "production" && L(!1, n));
}
const ee = /* @__PURE__ */ se(null);
process.env.NODE_ENV !== "production" && (ee.displayName = "Navigation");
const te = /* @__PURE__ */ se(null);
process.env.NODE_ENV !== "production" && (te.displayName = "Location");
const J = /* @__PURE__ */ se({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (J.displayName = "Route");
function ke(e) {
  process.env.NODE_ENV !== "production" ? y(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : y();
}
function Xe(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: a = D.Pop,
    navigator: i,
    static: l = !1
  } = e;
  F() && (process.env.NODE_ENV !== "production" ? y(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : y());
  let s = Ce(t), u = oe(() => ({
    basename: s,
    navigator: i,
    static: l
  }), [s, i, l]);
  typeof r == "string" && (r = $(r));
  let {
    pathname: h = "/",
    search: p = "",
    hash: g = "",
    state: N = null,
    key: d = "default"
  } = r, m = oe(() => {
    let P = je(h, s);
    return P == null ? null : {
      pathname: P,
      search: p,
      hash: g,
      state: N,
      key: d
    };
  }, [s, h, p, g, N, d]);
  return process.env.NODE_ENV !== "production" && L(m != null, '<Router basename="' + s + '"> is not able to match the URL ' + ('"' + h + p + g + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), m == null ? null : /* @__PURE__ */ I(ee.Provider, {
    value: u
  }, /* @__PURE__ */ I(te.Provider, {
    children: n,
    value: {
      location: m,
      navigationType: a
    }
  }));
}
function Ze(e) {
  let {
    children: t,
    location: n
  } = e;
  return tt(le(t), n);
}
function Qe(e) {
  F() || (process.env.NODE_ENV !== "production" ? y(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : y());
  let {
    basename: t,
    navigator: n
  } = V(ee), {
    hash: r,
    pathname: a,
    search: i
  } = ce(e), l = a;
  if (t !== "/") {
    let s = yt(e), u = s != null && s.endsWith("/");
    l = a === "/" ? t + (u ? "/" : "") : j([t, a]);
  }
  return n.createHref({
    pathname: l,
    search: i,
    hash: r
  });
}
function F() {
  return V(te) != null;
}
function z() {
  return F() || (process.env.NODE_ENV !== "production" ? y(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : y()), V(te).location;
}
function et() {
  F() || (process.env.NODE_ENV !== "production" ? y(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : y());
  let {
    basename: e,
    navigator: t
  } = V(ee), {
    matches: n
  } = V(J), {
    pathname: r
  } = z(), a = JSON.stringify(n.map((s) => s.pathnameBase)), i = we(!1);
  return Be(() => {
    i.current = !0;
  }), Oe(function(s, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && L(i.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !i.current) return;
    if (typeof s == "number") {
      t.go(s);
      return;
    }
    let h = Se(s, JSON.parse(a), r);
    e !== "/" && (h.pathname = j([e, h.pathname])), (u.replace ? t.replace : t.push)(h, u.state);
  }, [e, t, a, r]);
}
function ce(e) {
  let {
    matches: t
  } = V(J), {
    pathname: n
  } = z(), r = JSON.stringify(t.map((a) => a.pathnameBase));
  return oe(() => Se(e, JSON.parse(r), n), [e, r, n]);
}
function tt(e, t) {
  F() || (process.env.NODE_ENV !== "production" ? y(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : y());
  let {
    matches: n
  } = V(J), r = n[n.length - 1], a = r ? r.params : {}, i = r ? r.pathname : "/", l = r ? r.pathnameBase : "/", s = r && r.route;
  if (process.env.NODE_ENV !== "production") {
    let m = s && s.path || "";
    Ke(i, !s || m.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + i + '" (under <Route path="' + m + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + m + '"> to <Route ') + ('path="' + (m === "/" ? "*" : m + "/*") + '">.'));
  }
  let u = z(), h;
  if (t) {
    var p;
    let m = typeof t == "string" ? $(t) : t;
    l === "/" || (p = m.pathname) != null && p.startsWith(l) || (process.env.NODE_ENV !== "production" ? y(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + m.pathname + '" was given in the `location` prop.')) : y()), h = m;
  } else
    h = u;
  let g = h.pathname || "/", N = l === "/" ? g : g.slice(l.length) || "/", d = nt(e, {
    pathname: N
  });
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && L(s || d != null, 'No routes matched location "' + h.pathname + h.search + h.hash + '" '), process.env.NODE_ENV !== "production" && L(d == null || d[d.length - 1].route.element !== void 0, 'Matched leaf route at location "' + h.pathname + h.search + h.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), pt(d && d.map((m) => Object.assign({}, m, {
    params: Object.assign({}, a, m.params),
    pathname: j([l, m.pathname]),
    pathnameBase: m.pathnameBase === "/" ? l : j([l, m.pathnameBase])
  })), n);
}
function le(e) {
  let t = [];
  return $e.forEach(e, (n) => {
    if (!/* @__PURE__ */ We(n))
      return;
    if (n.type === Ye) {
      t.push.apply(t, le(n.props.children));
      return;
    }
    n.type !== ke && (process.env.NODE_ENV !== "production" ? y(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : y());
    let r = {
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      index: n.props.index,
      path: n.props.path
    };
    n.props.children && (r.children = le(n.props.children)), t.push(r);
  }), t;
}
function nt(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? $(t) : t, a = je(r.pathname || "/", n);
  if (a == null)
    return null;
  let i = Te(e);
  rt(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s)
    l = ht(i[s], a);
  return l;
}
function Te(e, t, n, r) {
  return t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""), e.forEach((a, i) => {
    let l = {
      relativePath: a.path || "",
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: i,
      route: a
    };
    l.relativePath.startsWith("/") && (l.relativePath.startsWith(r) || (process.env.NODE_ENV !== "production" ? y(!1, 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : y()), l.relativePath = l.relativePath.slice(r.length));
    let s = j([r, l.relativePath]), u = n.concat(l);
    a.children && a.children.length > 0 && (a.index === !0 && (process.env.NODE_ENV !== "production" ? y(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')) : y()), Te(a.children, t, u, s)), !(a.path == null && !a.index) && t.push({
      path: s,
      score: ut(s, a.index),
      routesMeta: u
    });
  }), t;
}
function rt(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : ft(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const at = /^:\w+$/, ot = 3, it = 2, lt = 1, st = 10, ct = -2, Ne = (e) => e === "*";
function ut(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Ne) && (r += ct), t && (r += it), n.filter((a) => !Ne(a)).reduce((a, i) => a + (at.test(i) ? ot : i === "" ? lt : st), r);
}
function ft(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a]) ? (
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
function ht(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, a = "/", i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l], u = l === n.length - 1, h = a === "/" ? t : t.slice(a.length) || "/", p = dt({
      path: s.relativePath,
      caseSensitive: s.caseSensitive,
      end: u
    }, h);
    if (!p) return null;
    Object.assign(r, p.params);
    let g = s.route;
    i.push({
      params: r,
      pathname: j([a, p.pathname]),
      pathnameBase: Ce(j([a, p.pathnameBase])),
      route: g
    }), p.pathnameBase !== "/" && (a = j([a, p.pathnameBase]));
  }
  return i;
}
function pt(e, t) {
  return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, r, a) => /* @__PURE__ */ I(J.Provider, {
    children: r.route.element !== void 0 ? r.route.element : n,
    value: {
      outlet: n,
      matches: t.concat(e.slice(0, a + 1))
    }
  }), null);
}
function dt(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = mt(e.path, e.caseSensitive, e.end), a = t.match(n);
  if (!a) return null;
  let i = a[0], l = i.replace(/(.)\/+$/, "$1"), s = a.slice(1);
  return {
    params: r.reduce((h, p, g) => {
      if (p === "*") {
        let N = s[g] || "";
        l = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      return h[p] = vt(s[g] || "", p), h;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e
  };
}
function mt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), process.env.NODE_ENV !== "production" && L(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (l, s) => (r.push(s), "([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a += n ? "\\/*$" : (
    // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
  ), [new RegExp(a, t ? void 0 : "i"), r];
}
function vt(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return process.env.NODE_ENV !== "production" && L(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function gt(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: a = ""
  } = typeof e == "string" ? $(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Et(n, t) : t,
    search: Rt(r),
    hash: bt(a)
  };
}
function Et(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
  }), n.length > 1 ? n.join("/") : "/";
}
function Se(e, t, n) {
  let r = typeof e == "string" ? $(e) : e, a = e === "" || r.pathname === "" ? "/" : r.pathname, i;
  if (a == null)
    i = n;
  else {
    let s = t.length - 1;
    if (a.startsWith("..")) {
      let u = a.split("/");
      for (; u[0] === ".."; )
        u.shift(), s -= 1;
      r.pathname = u.join("/");
    }
    i = s >= 0 ? t[s] : "/";
  }
  let l = gt(r, i);
  return a && a !== "/" && a.endsWith("/") && !l.pathname.endsWith("/") && (l.pathname += "/"), l;
}
function yt(e) {
  return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? $(e).pathname : e.pathname;
}
function je(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const j = (e) => e.join("/").replace(/\/\/+/g, "/"), Ce = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Rt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, bt = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Q() {
  return Q = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Q.apply(this, arguments);
}
function Ae(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const _t = ["onClick", "reloadDocument", "replace", "state", "target", "to"], Nt = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function Pt(e) {
  let {
    basename: t,
    children: n,
    window: r
  } = e, a = we();
  a.current == null && (a.current = qe({
    window: r
  }));
  let i = a.current, [l, s] = Ie({
    action: i.action,
    location: i.location
  });
  return Fe(() => i.listen(s), [i]), /* @__PURE__ */ I(Xe, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: i
  });
}
process.env.NODE_ENV;
function wt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const De = /* @__PURE__ */ xe(function(t, n) {
  let {
    onClick: r,
    reloadDocument: a,
    replace: i = !1,
    state: l,
    target: s,
    to: u
  } = t, h = Ae(t, _t), p = Qe(u), g = xt(u, {
    replace: i,
    state: l,
    target: s
  });
  function N(d) {
    r && r(d), !d.defaultPrevented && !a && g(d);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ I("a", Q({}, h, {
      href: p,
      onClick: N,
      ref: n,
      target: s
    }))
  );
});
process.env.NODE_ENV !== "production" && (De.displayName = "Link");
const Ot = /* @__PURE__ */ xe(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: l = !1,
    style: s,
    to: u,
    children: h
  } = t, p = Ae(t, Nt), g = z(), N = ce(u), d = g.pathname, m = N.pathname;
  a || (d = d.toLowerCase(), m = m.toLowerCase());
  let P = d === m || !l && d.startsWith(m) && d.charAt(m.length) === "/", T = P ? r : void 0, S;
  typeof i == "function" ? S = i({
    isActive: P
  }) : S = [i, P ? "active" : null].filter(Boolean).join(" ");
  let C = typeof s == "function" ? s({
    isActive: P
  }) : s;
  return /* @__PURE__ */ I(De, Q({}, p, {
    "aria-current": T,
    className: S,
    ref: n,
    style: C,
    to: u
  }), typeof h == "function" ? h({
    isActive: P
  }) : h);
});
process.env.NODE_ENV !== "production" && (Ot.displayName = "NavLink");
function xt(e, t) {
  let {
    target: n,
    replace: r,
    state: a
  } = t === void 0 ? {} : t, i = et(), l = z(), s = ce(e);
  return Oe((u) => {
    if (u.button === 0 && // Ignore everything but left clicks
    (!n || n === "_self") && // Let browser handle "target=_blank" etc.
    !wt(u)) {
      u.preventDefault();
      let h = !!r || ie(l) === ie(s);
      i(e, {
        replace: h,
        state: a
      });
    }
  }, [l, i, s, r, a, n, e]);
}
function Pe() {
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(Ze, { children: /* @__PURE__ */ k.jsx(ke, { path: "radha-kotecha", element: () => /* @__PURE__ */ k.jsx("div", { children: "Radha Kotecha" }) }) }),
    /* @__PURE__ */ k.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
function Tt() {
  const e = F();
  return console.log("insideRouter ->", e), e ? /* @__PURE__ */ k.jsx(Pe, {}) : /* @__PURE__ */ k.jsx(Pt, { children: /* @__PURE__ */ k.jsx(Pe, {}) });
}
export {
  Tt as App
};
