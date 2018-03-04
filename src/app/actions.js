import * as constants from './constants';

export function addNewTodo(todo) {
  return {
    type: constants.ADD_TODO,
    todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: constants.DELETE_TODO,
    todoId,
  };
}

export function toggleComplete(todoId) {
  return {
    type: constants.TOGGLE_COMPLETE,
    todoId,
  };
}
