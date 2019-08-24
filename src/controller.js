import { observable } from 'sinuous';
import { S } from 'sinuous/observable';
import { ToDo } from './model.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export function ToDosCtrl({ todos }) {
  const editing = observable();
  const showMode = observable('all');
  const completedCount = S(() => {
    return todos().filter(todo => todo.completed()).length;
  });
  const remainingCount = S(() => {
    return todos().length - completedCount();
  });

  function addTodo({ target, keyCode }) {
    let title = target.value.trim();
    if (keyCode === ENTER_KEY && title) {
      todos(todos().concat(ToDo(title)));
      target.value = '';
    }
  }

  function filterList(todos) {
    if (showMode() === 'active') return todos.filter(todo => !todo.completed());
    else if (showMode() === 'completed') return todos.filter(todo => todo.completed());
    else return todos;
  }

  function remove(id) {
    return todos(todos().filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    return todos(todos().filter((todo) => !todo.completed()));
  }

  function doneEditing(e, id) {
    if (e.keyCode === ENTER_KEY) save(e, id);
    else if (e.keyCode === ESCAPE_KEY) editing(null);
  }

  function save({ target }, id) {
    let title = target.value.trim();
    if (editing() === id && title) {
      editTodo({ id, title });
      editing(null);
    }
  }

  function editTodo({ id, title, completed }) {
    const todo = todos().filter((todo) => todo.id === id)[0];
    if (title) todo.title(title);
    if (completed != null) todo.completed(completed);
  }

  function toggle(e, id) {
    editTodo({ id, completed: e.target.checked });
  }

  function toggleAll(e) {
    const completed = e.target.checked;
    todos()
      .filter((todo) => todo.completed() !== completed)
      .forEach((todo) => todo.completed(completed));
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
