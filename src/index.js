import { S } from 'sinuous/observable';
import { ToDosModel, ToDo } from './model.js';
import { TodoApp } from './view.js';
import { ToDosCtrl } from './controller.js';

const model = ToDosModel([]);
const ctrl = ToDosCtrl(model);

const stored = localStorage.getItem('todos-sinuous');
if (stored) {
  model.todos(
    JSON.parse(stored).todos.map(t => ToDo(t.title, t.completed, t.id))
  );
}

S(() => {
  // store JSONized todos whenever they change
  localStorage.setItem('todos-sinuous', JSON.stringify(model));
});

const locationHandler = () => ctrl.showMode(location.hash.slice(2) || 'all');
window.addEventListener('hashchange', locationHandler);
locationHandler();

document.querySelector('.todoapp').append(TodoApp(ctrl));
