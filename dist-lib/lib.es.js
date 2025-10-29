import te from "react";
import { useInRouterContext as ne, BrowserRouter as ae, Routes as oe, Route as $ } from "react-router-dom";
var b = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function se() {
  if (F) return _;
  F = 1;
  var l = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function i(f, o, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      u = {};
      for (var m in o)
        m !== "key" && (u[m] = o[m]);
    } else u = o;
    return o = u.ref, {
      $$typeof: l,
      type: f,
      key: d,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return _.Fragment = R, _.jsx = i, _.jsxs = i, _;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ue() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case q:
          return "Profiler";
        case V:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case G:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function R(e) {
      return "" + e;
    }
    function i(e) {
      try {
        R(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), R(e);
      }
    }
    function f(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = l(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, n, v, j) {
      var a = t.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
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
        value: v
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, t, n, v, j) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (ee(a)) {
            for (n = 0; n < a.length; n++)
              S(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(a);
      if (y.call(r, "key")) {
        a = l(e);
        var c = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < c.length ? "{key: someKey, " + c.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (c = 0 < c.length ? "{" + c.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          c,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (i(t), a = "" + t), d(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var O in r)
          O !== "key" && (t[O] = r[O]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        a,
        t,
        o(),
        v,
        j
      );
    }
    function S(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var p = te, w = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, ee = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var g, N = {}, C = p.react_stack_bottom_frame.bind(
      p,
      u
    )(), Y = x(f(u)), I = {};
    E.Fragment = T, E.jsx = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? x(f(e)) : Y
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? x(f(e)) : Y
      );
    };
  })()), E;
}
var L;
function le() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? b.exports = se() : b.exports = ue()), b.exports;
}
var s = le();
function M() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(oe, { children: [
      /* @__PURE__ */ s.jsx($, { path: "/", element: /* @__PURE__ */ s.jsx("div", { children: "JSON Builder Home" }) }),
      /* @__PURE__ */ s.jsx($, { path: "radha-kotecha", element: /* @__PURE__ */ s.jsx("div", { children: "Radha Kotecha" }) })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
function fe() {
  return ne() ? /* @__PURE__ */ s.jsx(M, {}) : /* @__PURE__ */ s.jsx(ae, { children: /* @__PURE__ */ s.jsx(M, {}) });
}
export {
  fe as App
};
