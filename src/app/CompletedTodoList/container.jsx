import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompletedTodo from './component';

class CompletedTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.filterCompleted = this.filterCompleted.bind(this);
  }

  filterCompleted() {
    const { todoList } = this.props;
    if (!todoList) {
      return;
    }
    return todoList.filter(e => e.completed === true);
  }

  render() {
    const todos = this.filterCompleted();

    return <CompletedTodo todos={todos} />;
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList && state.todoList.todos,
  };
}
export default connect(mapStateToProps)(CompletedTodoContainer);
