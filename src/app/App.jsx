import React from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import TodoForm from './TodoForm/container';
import ActiveTodoList from './ActiveTodoList/container';
import CompletedTodo from './CompletedTodoList/container';

export default function App() {
  return (
    <Grid
      padded
      centered
      style={{
        paddingTop: '5em',
      }}
    >
      <h1
        style={{
          fontSize: '5em',
        }}
      >
        Awesome Todos!
      </h1>
      <br />
      <TodoForm />
      <ActiveTodoList />
      <CompletedTodo />
    </Grid>
  );
}
