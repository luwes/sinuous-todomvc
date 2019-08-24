import { observable } from 'sinuous';

export const ToDo = (title, completed = false, id = Date.now()) => ({
  id,
  title: jsonable(observable(title)),
  completed: jsonable(observable(completed))
});

export const ToDosModel = todos => ({
  todos: jsonable(observable(todos))
});

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
