import { Box, TextField, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import NoteLabels from '../../NoteFull/NoteLabels';
import NoteBottom from '../../NoteFull/NoteBottom';
import NewNoteActions from './NewNoteActions';

const styles = {
  input: {
    color: 'white',
  },
};

class NewNoteExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Box display={this.props.visible ? 'initial' : 'none'}>
        <form onSubmit={this.props.onSubmit}>
          {/* <NoteAddLabel noteLabels={this.props.labels} onAdd={this.props.onChange} /> */}
          <h4>Hello</h4>
          <TextField
            value={this.props.text}
            fullWidth
            multiline
            placeholder="take a note..."
            InputProps={{
              className: classes.input,
            }}
            onChange={(ev) => this.props.onChange({ text: ev.target.value })}
          />
          <NoteBottom onChange={this.props.onChange} />
          <NewNoteActions onClose={this.props.onClose} />
        </form>
      </Box>
    );
  }
}

export default withStyles(styles)(NewNoteExpanded);
