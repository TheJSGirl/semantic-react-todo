import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from '../Todo/container';

export default function ActiveTodoList({ todos }) {
  return (
    <Grid
      centered
      style={{
        paddingTop: '2em',
      }}
    >
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>Active Todos</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <hr />
        </Grid.Column>
      </Grid.Row>
      {todos.map(singleTodo => <Todo key={singleTodo.time} todo={singleTodo} />)}
    </Grid>
  );
}
