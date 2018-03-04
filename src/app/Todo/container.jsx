import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './component';
import { deleteTodo, toggleComplete } from '../actions';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChangeRadio(todoTime) {
    this.props.toggleComplete(todoTime);
  }

  onDelete(todoTime) {
    this.props.deleteTodo(todoTime);
  }

  render() {
    return <Todo {...this.props} onToggle={this.onChangeRadio} onDelete={this.onDelete} />;
  }
}

export default connect(null, { deleteTodo, toggleComplete })(TodoContainer);
