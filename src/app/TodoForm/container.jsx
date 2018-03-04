import React, { Component } from 'react';
import TodoForm from './component';

class TodoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {}

  render() {
    return <TodoForm handleAddTodo={this.handleAddTodo} />;
  }
}

export default TodoFormContainer;
