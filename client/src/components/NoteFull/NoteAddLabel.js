import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import NoteLabelsToAdd from './NoteLabelsToAdd';

class NoteAddLabel extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Button onClick={this.toggleShow} style={{ color: 'white', marginLeft: '5px' }}>
          Add label
        </Button>
        {this.state.isOpen && (
          <NoteLabelsToAdd noteLabels={this.props.noteLabels} onAdd={this.props.onAdd} />
        )}
      </Box>
    );
  }
}

export default NoteAddLabel;
