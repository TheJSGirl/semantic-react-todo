import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

export default function TodoForm() {
  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Segment stacked>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Input
                  size="huge"
                  style={{
                    width: '100%',
                  }}
                  placeholder="study, code, dance, anything here!"
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <p>Date Picker Here</p>
              </Grid.Column>
              <Grid.Column width={1} />
              <Grid.Column width={3}>
                <Button primary size="huge" style={{ width: '100%' }}>
                  Add Todo
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
