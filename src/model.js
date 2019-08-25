import { observable } from 'sinuous';
import { S } from 'sinuous/observable';

export const ToDo = (title, completed = false, id = Date.now()) => ({
  id,
  title: jsonable(observable(title)),
  completed: jsonable(observable(completed))
});

export const ToDosModel = todos => ({
  todos: jsonable(observable(todos))
});

export const model = ToDosModel([]);

const stored = localStorage.getItem('todos-sinuous');
if (stored) {
  model.todos(JSON.parse(stored).todos.map(t => ToDo(t.title, t.completed, t.id)));
}
S(() => localStorage.setItem('todos-sinuous', JSON.stringify(model)));

// Make any signal jsonable by adding a toJSON method
// that extracts its value during JSONization.
function jsonable(s) {
  s.toJSON = toJSON;
  return s;
}

function toJSON() {
  var json = this();
  // if the value has it's own toJSON, call it now
  if (json && json.toJSON) json = json.toJSON();
  return json;
}
