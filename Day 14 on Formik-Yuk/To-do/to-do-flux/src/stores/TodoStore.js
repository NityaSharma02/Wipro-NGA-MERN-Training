import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];

    Dispatcher.register(this.handleAction.bind(this));
  }

  handleAction(action) {
    switch (action.type) {
      case 'ADD_TODO':
        this.todos.push(action.payload);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  getTodos() {
    return this.todos;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

export default new TodoStore();
