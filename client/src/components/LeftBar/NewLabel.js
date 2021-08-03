import { Button, TextField, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
const styles = {
  input: {
    color: 'white',
  },
};
class NewLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={(ev) => this.props.onSubmit(ev)}>
        <TextField
          placeholder="Label Name"
          InputProps={{
            className: classes.input,
          }}
        />
        <Button type="submit" style={{ color: 'white' }}>
          go
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(NewLabel);
