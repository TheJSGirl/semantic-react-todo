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
        todos: state.todos.filter(e => e.time !== action.todoTime),
      };
    /* eslint-disable no-case-declarations */
    case constants.TOGGLE_COMPLETE:
      const todo = state.todos.filter(e => e.time === action.todoTime);
      const newTodos = state.todos.filter(e => e.time !== action.todoTime);
      if (!todo.length) {
        return state;
      }
      todo[0].completed = !todo[0].completed;
      return {
        ...state,
        todos: [...newTodos, ...todo],
      };
    /* eslint-enable no-case-declarations */
    default:
      return state;
  }
};
