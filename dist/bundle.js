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

  const model = ToDosModel([]);
  const ctrl = ToDosCtrl(model);
  const stored = localStorage.getItem('todos-sinuous');

  if (stored) {
    model.todos(JSON.parse(stored).todos.map(t => ToDo(t.title, t.completed, t.id)));
  }

  f(() => localStorage.setItem('todos-sinuous', JSON.stringify(model)));

  const updateView = () => ctrl.showMode(location.hash.slice(2) || 'all');

  window.addEventListener('hashchange', updateView);
  updateView();

  const TodoApp = ctrl => {
    return m([m("header", {
      "class": "header"
    }, m("h1", null, "todos"), m("input", {
      "class": "new-todo",
      placeholder: "What needs to be done?",
      autofocus: true,
      onkeyup: ctrl.addTodo
    })), m("section", {
      "class": "main",
      hidden: () => ctrl.todos().length === 0
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
    }, () => ctrl.filterList(ctrl.todos()).map(({
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
      "class": "footer",
      hidden: () => ctrl.todos().length === 0
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

  document.querySelector('.todoapp').append(TodoApp(ctrl));

}());
