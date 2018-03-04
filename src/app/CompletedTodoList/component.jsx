import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from '../Todo/component';

export default function CompletedTodoList({ todos }) {
  return (
    <Grid
      centered
      style={{
        paddingTop: '2em',
      }}
    >
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>Completed Todos</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <hr />
        </Grid.Column>
      </Grid.Row>
      {todos.map(el => <Todo key={el.time} todo={el} />)}
    </Grid>
  );
}
