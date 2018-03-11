import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './component';
import { deleteTodo, toggleComplete } from '../actions';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onConfirmDelete = this.onConfirmDelete.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
  }

  onChangeRadio(todoTime) {
    this.props.toggleComplete(todoTime);
  }

  onDelete() {
    this.setState({ showModal: true });
  }

  onConfirmDelete(todoTime) {
    this.props.deleteTodo(todoTime);
  }

  onDeleteCancel() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Todo
        {...this.props}
        onToggle={this.onChangeRadio}
        onDelete={this.onDelete}
        showModal={this.state.showModal}
        onDeleteCancel={this.onDeleteCancel}
        onConfirmDelete={this.onConfirmDelete}
      />
    );
  }
}

export default connect(null, { deleteTodo, toggleComplete })(TodoContainer);
