import { h } from 'sinuous';
import map from 'sinuous/map';
import { cx } from './utils.js';

export const TodoApp = (ctrl) => {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus onkeyup=${ctrl.addTodo} />
    </header>
    <section class="main" hidden=${() => ctrl.todos().length === 0}>
      <input id="toggle-all" class="toggle-all" type="checkbox" checked="${() => !ctrl.remainingCount()}" oninput="${ctrl.toggleAll}" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${map(() => ctrl.filterList(ctrl.todos()), ({ id, title, completed }) => html`
          <li class=${() => cx({ completed: completed(), editing: ctrl.editing() === id })}>
            <div class="view">
              <input class="toggle" type="checkbox" checked="${completed}" oninput="${e => ctrl.toggle(e, id)}" />
              <label ondblclick="${() => ctrl.editing(id)}">${title}</label>
              <button class="destroy" onclick="${() => ctrl.remove(id)}"></button>
            </div>
            ${() => {
              if (ctrl.editing() === id) {
                const input = html`<input class="edit" value="${title}" onfocusout="${e => ctrl.save(e, id)}" onkeyup=${e => ctrl.doneEditing(e, id)} />`;
                setTimeout(() => input.focus());
                return input;
              }
            }}
          </li>
        `)}
      </ul>
    </section>
    <footer class="footer" hidden=${() => ctrl.todos().length === 0}>
      <span class="todo-count"><strong>${ctrl.remainingCount}</strong>
        ${() => (ctrl.remainingCount() === 1 ? ' item' : ' items')} left
      </span>
      <ul class="filters">
        <li><a class="${() => cx({ selected: ctrl.showMode() === 'all' })}" href="#/">All</a></li>
        <li><a class="${() => cx({ selected: ctrl.showMode() === 'active' })}" href="#/active">Active</a></li>
        <li><a class="${() => cx({ selected: ctrl.showMode() === 'completed' })}" href="#/completed">Completed</a></li>
      </ul>
      ${() => ctrl.completedCount() > 0 ? html`<button class="clear-completed" onclick=${ctrl.clearCompleted}>Clear completed</button>` : null}
    </footer>
  `;
};
