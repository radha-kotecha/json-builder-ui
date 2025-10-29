import ee, { useState as re } from "react";
var b = { exports: {} }, E = {};
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
function te() {
  if (F) return E;
  F = 1;
  var c = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function u(d, o, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      l = {};
      for (var _ in o)
        _ !== "key" && (l[_] = o[_]);
    } else l = o;
    return o = l.ref, {
      $$typeof: c,
      type: d,
      key: m,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return E.Fragment = i, E.jsx = u, E.jsxs = u, E;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ne() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function u(e) {
      try {
        i(e);
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
        ), i(e);
      }
    }
    function d(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (w.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function _(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = c(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, n, p, j) {
      var a = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
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
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, n, p, j) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              g(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(a);
      if (w.call(r, "key")) {
        a = c(e);
        var f = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          f,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (u(t), a = "" + t), m(r) && (u(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && _(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        a,
        t,
        o(),
        p,
        j
      );
    }
    function g(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var R = ee, P = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), h = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, Q = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var y, N = {}, C = R.react_stack_bottom_frame.bind(
      R,
      l
    )(), Y = x(d(l)), $ = {};
    v.Fragment = T, v.jsx = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? x(d(e)) : Y
      );
    }, v.jsxs = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? x(d(e)) : Y
      );
    };
  })()), v;
}
var D;
function ae() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? b.exports = te() : b.exports = ne()), b.exports;
}
var s = ae();
const oe = "/vite.svg";
function le() {
  const [c, i] = re(0);
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ s.jsx("img", { src: oe, className: "logo", alt: "Vite logo" }) }) }),
    /* @__PURE__ */ s.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ s.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ s.jsxs("button", { onClick: () => i((u) => u + 1), children: [
        "count is ",
        c
      ] }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ s.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  le as App
};
