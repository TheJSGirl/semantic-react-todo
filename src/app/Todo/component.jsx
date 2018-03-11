import React from 'react';
import { Grid, Icon, Segment, Radio, Button, Modal } from 'semantic-ui-react';

export default function Todo(props) {
  console.log(props);
  const todoDetails = props.todo;
  return (
    <Grid.Row>
      <Grid.Column width={8}>
        <Segment stacked>
          props.showModal &&{' '}
          <Grid>
            <Grid.Row centered>
              <Grid.Column>
                <Modal
                  style={{ marginTop: '50vh', margin: '0 auto' }}
                  size="tiny"
                  open={props.showModal}
                >
                  <Modal.Header>Delete Todo!</Modal.Header>
                  <Modal.Content>
                    <p>
                      Are you sure you want to delete todo:{' '}
                      <b style={{ 'font-size': '1em' }}>{todoDetails && todoDetails.text}</b> ?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button negative onClick={props.onDeleteCancel}>
                      No
                    </Button>
                    <Button
                      positive
                      icon="checkmark"
                      labelPosition="right"
                      content="Yes"
                      onClick={() => props.onConfirmDelete(todoDetails.time)}
                    />
                  </Modal.Actions>
                </Modal>
              </Grid.Column>
            </Grid.Row>
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
                  onClick={props.onDelete}
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
