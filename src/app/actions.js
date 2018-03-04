import * as constants from './constants';

export function addNewTodo(todo) {
  return {
    type: constants.ADD_TODO,
    todo,
  };
}

export function deleteTodo(todoTime) {
  return {
    type: constants.DELETE_TODO,
    todoTime,
  };
}

export function toggleComplete(todoTime) {
  return {
    type: constants.TOGGLE_COMPLETE,
    todoTime,
  };
}
