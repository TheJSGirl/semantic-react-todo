import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from '../Todo/component';

export default function TodoList() {
  return (
    <Grid
      centered
      style={{
        paddingTop: '2em',
      }}
    >
      {' '}
      {[1, 2, 3].map(el => <Todo key={el} />)}
    </Grid>
  );
}
