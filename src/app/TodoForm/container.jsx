import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './component';
import { addNewTodo } from '../actions';

class TodoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleAddTodo() {
    if (!this.state.text) {
      return;
    }

    this.props.addNewTodo({
      text: this.state.text,
      completed: false,
      time: new Date().getTime(),
    });
    this.setState({
      text: '',
    });
  }

  render() {
    let disableButton = true;
    if (this.state.text.length) {
      disableButton = false;
    }
    return (
      <TodoForm
        onInputChange={this.onInputChange}
        text={this.state.text}
        handleAddTodo={this.handleAddTodo}
        disableButton={disableButton}
      />
    );
  }
}

export default connect(null, { addNewTodo })(TodoFormContainer);
