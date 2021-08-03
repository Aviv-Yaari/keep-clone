import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import NoteColors from './NoteColors';

class NoteBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box display="flex" boxShadow={1} m={1} p={1}>
        <NoteColors onChange={this.props.onChange} />
      </Box>
    );
  }
}

export default NoteBottom;
