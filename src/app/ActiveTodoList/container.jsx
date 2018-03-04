import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActiveTodo from './component';

class ActiveTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.filterActive = this.filterActive.bind(this);
  }

  filterActive() {
    const { todoList } = this.props;
    if (!todoList.length) {
      return [];
    }
    return todoList.filter(e => e.completed === false);
  }

  render() {
    const todos = this.filterActive();
    return <ActiveTodo todos={todos} />;
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList && state.todoList.todos,
  };
}

export default connect(mapStateToProps)(ActiveTodoContainer);
