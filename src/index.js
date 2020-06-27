import { h } from 'sinuous';
import { map } from 'sinuous/map';
import { addTodo, clearCompleted, completed, displayed, doneEditing, editing,
  filter, remaining, remove, save, todos, toggle, toggleAll } from './controller.js';
import { cx, focus } from './utils.js';

const TodoApp = () => html`
  <header class=header>
    <h1>todos</h1>
    <input
      class=new-todo
      placeholder="What needs to be done?"
      onkeyup=${addTodo}
      autofocus
    />
  </header>

  <section class=main hidden=${() => !todos().length}>
    <input
      id=toggle-all
      class=toggle-all
      type=checkbox
      oninput=${toggleAll}
      checked=${() => !remaining().length}
    />
    <label htmlFor=toggle-all>Mark all as complete</label>

    <ul class=todo-list>
      ${map(displayed, ({ id, title, completed }) => html`
        <li class=${() => cx({ completed: completed(), editing: editing() === id })}>
          <div class=view>
            <input
              class=toggle
              type=checkbox
              checked=${completed}
              oninput=${e => toggle(e, id)}
            />
            <label ondblclick=${() => editing(id)}>${title}</label>
            <button class=destroy onclick=${() => remove(id)}></button>
          </div>
          ${() => editing() === id && focus(html`
            <input
              class=edit
              value=${title}
              onfocusout=${e => save(e, id)}
              onkeyup=${e => doneEditing(e, id)}
            />`)
          }
        </li>
      `)}
    </ul>

    <footer class=footer>
      <span class=todo-count>
        <strong>${() => remaining().length}</strong>
        ${() => remaining().length === 1 ? ' item' : ' items'} left
      </span>
      <ul class=filters>
        <li><a class=${() => cx({ selected: filter() === 'all' })} href="#/">All</a></li>
        <li><a class=${() => cx({ selected: filter() === 'active' })} href="#/active">Active</a></li>
        <li><a class=${() => cx({ selected: filter() === 'completed' })} href="#/completed">Completed</a></li>
      </ul>
      ${() => completed().length > 0 && html`
        <button class=clear-completed onclick=${clearCompleted}>
          Clear completed
        </button>
      `}
    </footer>
  </section>
`;

const updateView = () => filter(location.hash.slice(2) || 'all');
window.addEventListener('hashchange', updateView);
updateView();

document.querySelector('.todoapp').append(TodoApp());
