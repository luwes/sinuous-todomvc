import { S } from 'sinuous/observable';
import { ToDo } from './model.js';

const LOCAL_STORAGE_KEY = 'todos-sinuous';

export function LocalStoragePersistence(model) {
  // load stored todos on init
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    model.todos(
      JSON.parse(stored).todos.map(t => ToDo(t.title, t.completed, t.id))
    );
  }
  // store JSONized todos whenever they change
  S(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(model));
  });
}
