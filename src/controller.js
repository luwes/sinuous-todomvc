import { observable } from 'sinuous';
import { model, ToDo } from './model.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export const { todos } = model;
export const editing = observable();
export const filter = observable('all');
export const completed = () => todos().filter(todo => todo.completed());
export const remaining = () => todos().filter(todo => !todo.completed());
export const displayed = () =>
  filter() === 'all' ? todos() :
  filter() === 'completed' ? completed() : remaining();
export const clearCompleted = () =>
  todos(todos().filter(todo => !todo.completed()));

export function toggleAll(e) {
  const completed = e.target.checked;
  todos()
    .filter(todo => todo.completed() !== completed)
    .forEach(todo => todo.completed(completed));
}

export function addTodo({ target, keyCode }) {
  let title = target.value.trim();
  if (keyCode === ENTER_KEY && title) {
    todos(todos().concat(ToDo(title)));
    target.value = '';
  }
}

export function remove(id) {
  return todos(todos().filter(todo => todo.id !== id));
}

export function doneEditing(e, id) {
  if (e.keyCode === ENTER_KEY) save(e, id);
  else if (e.keyCode === ESCAPE_KEY) editing(null);
}

export function save(e, id) {
  let title = e.target.value.trim();
  if (editing() === id && title) {
    editTodo({ id, title });
    editing(null);
  }
}

export function editTodo({ id, title, completed }) {
  const todo = todos().filter(todo => todo.id === id)[0];
  if (title) todo.title(title);
  if (completed != null) todo.completed(completed);
}

export function toggle(e, id) {
  editTodo({ id, completed: e.target.checked });
}
