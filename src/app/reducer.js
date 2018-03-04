import * as constants from './constants';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };
    case constants.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(e => e.id !== action.todoId),
      };
    case constants.TOGGLE_COMPLETE:
      const todo = state.todos.filter(e => e.id === action.todoId);
      if (!todo.length) {
        return state;
      }
      todo[0].completed = !todo[0].completed;
      return {
        ...state,
        todos: [...state.todos, ...todo],
      };

    default:
      return state;
  }
};
