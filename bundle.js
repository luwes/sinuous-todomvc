(function () {
  'use strict';

  let n, t;

  function o() {
    return !!n;
  }

  function r(t) {
    const o = n,
          r = () => {};

    n = r, l(r);
    const u = t(() => {
      v(r), n = void 0;
    });
    return n = o, u;
  }

  function u(t) {
    const o = n;
    n = void 0;
    const r = t();
    return n = o, r;
  }

  function i(n) {
    t = [];
    const o = n();
    let r = t;
    return t = void 0, r.forEach(n => {
      if (n.t) {
        const t = n.t;
        n.t = void 0, n(t);
      }
    }), o;
  }

  function c(o) {
    function r(u) {
      if (void 0 === u) return n && r.o[r.o.length - 1] !== n && (r.o.push(n), n.u.push(r)), o;
      if (t) return void 0 === r.t && t.push(r), r.t = u, u;
      o = u;
      const i = n;
      return n = void 0, r.o.forEach(n => n.i = 0), r.o.slice().forEach(n => {
        n.i || n();
      }), n = i, o;
    }

    return r.$o = 1, r.o = [], r;
  }

  function f(t, o) {
    function r() {
      const u = n;
      return n && n.s.push(r), v(r), r.i = 1, n = r, o = t(o), n = u, o;
    }

    return t.v = r, l(r), r(), function () {
      return r.i ? r.u.forEach(n => n()) : o = r(), o;
    };
  }

  function e(t) {
    return n && n.l.push(t), t;
  }

  function s(n) {
    return f(n), () => v(n.v);
  }

  function d(n) {
    v(n.v);
  }

  function v(n) {
    n.s.forEach(v), n.u.forEach(t => {
      t.o.splice(t.o.indexOf(n), 1);
    }), n.l.forEach(n => n()), l(n);
  }

  function l(n) {
    n.u = [], n.s = [], n.l = [];
  }

  var e$1 = /*#__PURE__*/Object.freeze({
    S: f,
    cleanup: e,
    isListening: o,
    o: c,
    observable: c,
    root: r,
    sample: u,
    subscribe: s,
    transaction: i,
    unsubscribe: d
  });

  const o$1 = {},
        f$1 = [],
        i$1 = "__g";

  function s$1(e, n, t, o) {
    if (t) {
      if (n) {
        if (!o) {
          const n = (o = t.previousSibling || e.lastChild)[i$1];
          if (n) for (o = o.previousSibling; o && o[i$1] !== n;) o = o.previousSibling;
        }

        let n;

        for (; o && o !== t;) n = o.nextSibling, e.removeChild(o), o[i$1] = 0, o = n;
      }
    } else e.textContent = "";
  }

  let r$1 = 0;

  function l$1(e, n, t, c) {
    e = t && t.parentNode || e;
    const u = typeof n;
    return n === c || (!n && 0 !== n || !0 === n ? (s$1(e, c, t), c = null) : c && "string" != typeof c || !("string" === u || "number" === u && (n += "")) ? "function" === u ? o$1.subscribe(function () {
      c = l$1(e, n(), t, c);
    }) : (s$1(e, c, t), n instanceof Node || (n = o$1.h(f$1, n)), 11 === n.nodeType && n.firstChild !== n.lastChild && (n.firstChild[i$1] = n.lastChild[i$1] = ++r$1), e.insertBefore(n, t || null), c = n) : (null != c && e.firstChild ? t ? (t.previousSibling || e.lastChild).data = n : e.firstChild.data = n : t ? e.insertBefore(document.createTextNode(n), t) : e.textContent = n, c = n)), c;
  }

  function c$1(e, n) {
    for (let n in e) o$1[n] = e[n];

    function t() {
      const e = f$1.slice.call(arguments);
      let t;

      function o(f) {
        const i = typeof f;
        if (null == f) ;else if ("string" === i) t ? t.appendChild(document.createTextNode(f)) : t = n ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f);else if (Array.isArray(f)) t || (t = document.createDocumentFragment()), f.forEach(o);else if (f instanceof Node) t ? t.appendChild(f) : t = f;else if ("object" === i) for (let e in f) u$1(e, f[e], t, n);else if ("function" === i) {
          if (t) {
            const e = t.appendChild(document.createTextNode(""));
            f.$t ? f.$t(1, l$1, t, "") : l$1(t, f, e);
          } else t = f.apply(null, e.splice(0));
        } else t.appendChild(document.createTextNode("" + f));
      }

      for (; e.length;) o(e.shift());

      return t;
    }

    return o$1.h = t, t;
  }

  function u$1(e, n, t, f, i) {
    if ("o" !== e[0] || "n" !== e[1] || n.$o) {
      if ("function" == typeof n) n.$t ? n.$t(2, u$1, t, e) : o$1.subscribe(() => {
        u$1(e, n(), t, f, i);
      });else if (i) t.style.setProperty(e, n);else if (f || "data-" === e.slice(0, 5) || "aria-" === e.slice(0, 5)) t.setAttribute(e, n);else if ("style" === e) {
        if ("string" == typeof n) t.style.cssText = n;else for (e in n) u$1(e, n[e], t, f, !0);
      } else if ("attrs" === e) for (e in n) u$1(e, n[e], t, !0);else "class" === e && (e += "Name"), t[e] = n;
    } else !function (e, n, t) {
      n = n.slice(2);
      const f = o$1.cleanup(() => e.removeEventListener(n, a));
      t ? e.addEventListener(n, a) : f(), (e.t || (e.t = {}))[n] = t;
    }(t, e, n);
  }

  function a(e) {
    return this.t[e.type](e);
  }

  const m = c$1(e$1),
        p = c$1(e$1, !0),
        d$1 = c;

  const ToDo = (title, completed = false, id = Date.now()) => ({
    id,
    title: jsonable(d$1(title)),
    completed: jsonable(d$1(completed))
  });
  const ToDosModel = todos => ({
    todos: jsonable(d$1(todos))
  }); // Make any signal jsonable by adding a toJSON method
  // that extracts its value during JSONization.

  function jsonable(s) {
    s.toJSON = toJSON;
    return s;
  }

  function toJSON() {
    var json = this(); // if the value has it's own toJSON, call it now

    if (json && json.toJSON) json = json.toJSON();
    return json;
  }

  const t$1 = "__g",
        n$1 = "nextSibling";

  function e$2(r, n, e) {
    const o = r[t$1];
    if (o) for (r = r[n]; r && r[t$1] !== o;) r = r[n];
    return e ? r : r[n];
  }

  function o$2(r, t, n) {
    let e;

    for (; t !== n;) e = t.nextSibling, r.removeChild(t), t = e;
  }

  function f$2(r, t, n, e) {
    let o;

    for (; t !== n;) o = t.nextSibling, r.insertBefore(t, e), t = o;
  }

  function i$2(r, t) {
    let n = -1,
        e = r.length;
    if (e > 0 && r[e - 1] <= t) return e - 1;

    for (; e - n > 1;) {
      var o = (n + e) / 2 | 0;
      r[o] > t ? e = o : n = o;
    }

    return n;
  }

  let u$2 = 0;
  function map (l, c) {
    const {
      subscribe: s,
      root: a,
      sample: b,
      cleanup: p
    } = o$1,
          m = new Map();
    let v = document.createDocumentFragment();
    const g = v.appendChild(document.createTextNode("")),
          d = v.appendChild(document.createTextNode(""));

    function k() {
      m.forEach(r => r()), m.clear();
    }

    function w(r) {
      let t = m.get(r);
      t && t(), m.delete(r);
    }

    function S(r, n, e, o, f) {
      return a(i => {
        const l = function (r, n, e, o) {
          let f;
          const i = typeof n;
          return "string" === i || "number" === i ? n = document.createTextNode(n) : 11 === n.nodeType && (f = n.firstChild) && f !== n.lastChild && (f[t$1] = n.lastChild[t$1] = o), r.insertBefore(n, e || null), f || n;
        }(r, c(n, e, o), f, ++u$2);

        return m.set(l, i), l;
      });
    }

    return p(s(r => {
      r = r || [];
      const t = l() || [];
      return b(() => function r(t, u, l, c, s, a, b, p) {
        const m = l.length;
        if (t = s.parentNode, 0 === m) return c.previousSibling || s.nextSibling ? o$2(t, c.nextSibling, s) : (t.textContent = "", t.appendChild(c), t.appendChild(s)), b && b(), [];

        if (0 === u.length) {
          for (let r = 0; r < m; r++) a(t, l[r], r, l, s);

          return l.slice();
        }

        let v,
            g,
            d = 0,
            k = 0,
            w = !0,
            S = u.length - 1,
            y = m - 1,
            x = c.nextSibling,
            A = x,
            M = s.previousSibling,
            _ = s;

        r: for (; w;) {
          let r;

          for (w = !1, v = u[d], g = l[k]; v === g;) {
            if (d++, k++, A = x = e$2(x, n$1), S < d || y < k) break r;
            v = u[d], g = l[k];
          }

          for (v = u[S], g = l[y]; v === g;) {
            if (S--, y--, M = (_ = e$2(M, "previousSibling", !0)).previousSibling, S < d || y < k) break r;
            v = u[S], g = l[y];
          }

          for (v = u[S], g = l[k]; v === g;) {
            w = !0;
            let n = e$2(M, "previousSibling", !0);
            if (r = n.previousSibling, A !== n && (f$2(t, n, M.nextSibling, A), M = r), k++, --S < d || y < k) break r;
            v = u[S], g = l[k];
          }

          for (v = u[d], g = l[y]; v === g;) {
            if (w = !0, r = e$2(x, n$1), x !== _) {
              let n = r.previousSibling;
              f$2(t, x, r, _), _ = n, x = r;
            }

            if (y--, S < ++d || y < k) break r;
            v = u[d], g = l[y];
          }
        }

        if (y < k) {
          if (d <= S) {
            let r, n;

            for (; d <= S;) r = (n = e$2(M, "previousSibling", !0)).previousSibling, o$2(t, n, M.nextSibling), p && p(n), M = r, S--;
          }

          return l.slice();
        }

        if (S < d) {
          if (k <= y) for (; k <= y;) a(t, l[k], k, l, _), k++;
          return l.slice();
        }

        const j = new Array(y + 1 - k);

        for (let r = k; r <= y; r++) j[r] = -1;

        const h = new Map();

        for (let r = k; r <= y; r++) h.set(l[r], r);

        let q = 0,
            z = [];

        for (let r = d; r <= S; r++) h.has(u[r]) ? (j[h.get(u[r])] = r, q++) : z.push(r);

        if (0 === q) return r(t, r(t, u, [], c, s, a, b), l, c, s, a);

        const B = function (r, t) {
          let n = [],
              e = [],
              o = -1,
              f = new Array(r.length);

          for (var u = t, l = r.length; u < l; u++) {
            var c = r[u];

            if (!(c < 0)) {
              var s = i$2(n, c);
              -1 !== s && (f[u] = e[s]), s === o ? (n[++o] = c, e[o] = u) : c < n[s + 1] && (n[s + 1] = c, e[s + 1] = u);
            }
          }

          for (u = e[o]; o >= 0; u = f[u], o--) n[o] = u;

          return n;
        }(j, k),
              C = [];

        let D = x;

        for (let r = d; r <= S; r++) C[r] = D, D = e$2(D, n$1);

        for (let r = 0; r < z.length; r++) {
          let f = C[z[r]];
          o$2(t, f, e$2(f, n$1)), p && p(f);
        }

        let E,
            F = B.length - 1;

        for (let r = y; r >= k; r--) B[F] === r ? (_ = C[j[B[F]]], F--) : (-1 === j[r] ? E = a(t, l[r], r, l, _) : f$2(t, E = C[j[r]], e$2(E, n$1), _), _ = E);

        return l.slice();
      }(v, r, t, g, d, S, k, w));
    })), p(k), v;
  }

  // MIT © Luke Edwards
  function cx(obj) {
    var k,
        cls = '';

    for (k in obj) {
      if (obj[k]) {
        cls && (cls += ' ');
        cls += k;
      }
    }

    return cls;
  }

  const TodoApp = ctrl => {
    return m([m("header", {
      "class": "header"
    }, m("h1", null, "todos"), m("input", {
      "class": "new-todo",
      placeholder: "What needs to be done?",
      autofocus: true,
      onkeyup: ctrl.addTodo
    })), m("section", {
      "class": "main"
    }, m("input", {
      id: "toggle-all",
      "class": "toggle-all",
      type: "checkbox",
      checked: () => !ctrl.remainingCount(),
      oninput: ctrl.toggleAll
    }), m("label", {
      htmlFor: "toggle-all"
    }, "Mark all as complete"), m("ul", {
      "class": "todo-list"
    }, map(() => ctrl.filterList(ctrl.todos()), ({
      id,
      title,
      completed
    }) => m("li", {
      "class": () => cx({
        completed: completed(),
        editing: ctrl.editing() === id
      })
    }, m("div", {
      "class": "view"
    }, m("input", {
      "class": "toggle",
      type: "checkbox",
      checked: completed,
      oninput: e => ctrl.toggle(e, id)
    }), m("label", {
      ondblclick: () => ctrl.editing(id)
    }, title), m("button", {
      "class": "destroy",
      onclick: () => ctrl.remove(id)
    })), () => {
      if (ctrl.editing() === id) {
        const input = m("input", {
          "class": "edit",
          value: title,
          onfocusout: e => ctrl.save(e, id),
          onkeyup: e => ctrl.doneEditing(e, id)
        });
        setTimeout(() => input.focus());
        return input;
      }
    })))), m("footer", {
      "class": "footer"
    }, m("span", {
      "class": "todo-count"
    }, m("strong", null, ctrl.remainingCount), () => ctrl.remainingCount() === 1 ? ' item' : ' items', " left"), m("ul", {
      "class": "filters"
    }, m("li", null, m("a", {
      "class": () => cx({
        selected: ctrl.showMode() === 'all'
      }),
      href: "#/"
    }, "All")), m("li", null, m("a", {
      "class": () => cx({
        selected: ctrl.showMode() === 'active'
      }),
      href: "#/active"
    }, "Active")), m("li", null, m("a", {
      "class": () => cx({
        selected: ctrl.showMode() === 'completed'
      }),
      href: "#/completed"
    }, "Completed"))), () => ctrl.completedCount() > 0 ? m("button", {
      "class": "clear-completed",
      onclick: ctrl.clearCompleted
    }, "Clear completed") : null)]);
  };

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  function ToDosCtrl({
    todos
  }) {
    const editing = d$1();
    const showMode = d$1('all');
    const completedCount = f(() => {
      return todos().filter(todo => todo.completed()).length;
    });
    const remainingCount = f(() => {
      return todos().length - completedCount();
    });

    function addTodo({
      target,
      keyCode
    }) {
      let title = target.value.trim();

      if (keyCode === ENTER_KEY && title) {
        todos(todos().concat(ToDo(title)));
        target.value = '';
      }
    }

    function filterList(todos) {
      if (showMode() === 'active') return todos.filter(todo => !todo.completed());else if (showMode() === 'completed') return todos.filter(todo => todo.completed());else return todos;
    }

    function remove(id) {
      return todos(todos().filter(todo => todo.id !== id));
    }

    function clearCompleted() {
      return todos(todos().filter(todo => !todo.completed()));
    }

    function doneEditing(e, id) {
      if (e.keyCode === ENTER_KEY) save(e, id);else if (e.keyCode === ESCAPE_KEY) editing(null);
    }

    function save({
      target
    }, id) {
      let title = target.value.trim();

      if (editing() === id && title) {
        editTodo({
          id,
          title
        });
        editing(null);
      }
    }

    function editTodo({
      id,
      title,
      completed
    }) {
      const todo = todos().filter(todo => todo.id === id)[0];
      if (title) todo.title(title);
      if (completed != null) todo.completed(completed);
    }

    function toggle(e, id) {
      editTodo({
        id,
        completed: e.target.checked
      });
    }

    function toggleAll(e) {
      const completed = e.target.checked;
      todos().filter(todo => todo.completed() !== completed).forEach(todo => todo.completed(completed));
    }

    return {
      completedCount,
      editing,
      remainingCount,
      showMode,
      todos,
      addTodo,
      filterList,
      remove,
      clearCompleted,
      doneEditing,
      save,
      toggle,
      toggleAll
    };
  }

  const LOCAL_STORAGE_KEY = 'todos-sinuous';
  function LocalStoragePersistence(model) {
    // load stored todos on init
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (stored) {
      model.todos(JSON.parse(stored).todos.map(t => ToDo(t.title, t.completed, t.id)));
    } // store JSONized todos whenever they change


    f(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(model));
    });
  }

  function ToDosRouter(ctrl) {
    const locationHandler = () => ctrl.showMode(location.hash.slice(2) || 'all');

    window.addEventListener('hashchange', locationHandler);
    locationHandler();
  }

  const model = ToDosModel([]);
  const ctrl = ToDosCtrl(model);
  LocalStoragePersistence(model);
  ToDosRouter(ctrl);
  document.querySelector('.todoapp').append(TodoApp(ctrl));

}());
