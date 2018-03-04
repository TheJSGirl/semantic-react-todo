import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './component';
import { deleteTodo, toggleComplete } from '../actions';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  onChangeRadio(todoTime) {
    this.props.toggleComplete(todoTime);
  }

  render() {
    return <Todo {...this.props} onToggle={this.onChangeRadio} />;
  }
}

export default connect(null, { deleteTodo, toggleComplete })(TodoContainer);
