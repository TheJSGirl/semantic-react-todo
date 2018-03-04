import React from 'react';
import { Grid, Icon, Segment, Radio, Button } from 'semantic-ui-react';

export default function Todo(props) {
  const todoDetails = props.todo;
  return (
    <Grid.Row>
      <Grid.Column width={8}>
        <Segment stacked>
          <Grid>
            <Grid.Row>
              <Grid.Column
                width={1}
                style={{
                  paddingTop: '5px',
                }}
              >
                <Icon
                  name="close"
                  style={{
                    color: 'red',
                  }}
                  onClick={() => props.onDelete(todoDetails.time)}
                />
              </Grid.Column>
              <Grid.Column width={9}>
                <h2>{todoDetails && todoDetails.text}</h2>
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{
                  paddingTop: '5px',
                }}
              >
                <h4>Due for: 01-01-2018</h4>
              </Grid.Column>
              <Grid.Column
                width={2}
                style={{
                  paddingTop: '5px',
                }}
                textAlign="right"
              >
                <Radio
                  defaultChecked={todoDetails.completed}
                  toggle
                  onChange={() => props.onToggle(todoDetails.time)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
