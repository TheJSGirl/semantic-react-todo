import React from 'react';
import { Grid, Icon, Segment, Radio } from 'semantic-ui-react';

export default function Todo() {
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
                />
              </Grid.Column>
              <Grid.Column width={9}>
                <h2>Demo Task</h2>
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
                <Radio toggle />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
