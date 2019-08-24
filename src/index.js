import { ToDosModel} from './model.js';
import { TodoApp } from './view.js';
import { ToDosCtrl } from './controller.js';
import { LocalStoragePersistence } from './persistence';
import { ToDosRouter } from './router.js';

const model = ToDosModel([]);
const ctrl = ToDosCtrl(model);
LocalStoragePersistence(model);
ToDosRouter(ctrl);

document.querySelector('.todoapp').append(TodoApp(ctrl));
