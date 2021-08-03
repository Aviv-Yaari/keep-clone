import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import NoteAddLabel from './NoteAddLabel';
class NoteLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box display="flex" mb={2}>
          <span style={{ marginRight: '10px', marginTop: '10px' }}>Labels: </span>
          {this.props.labels.map((label) => (
            <span
              key={label._id}
              style={{
                backgroundColor: label.color,
                padding: '0 10px',
                borderRadius: '4px',
                cursor: 'default',
              }}>
              {label.name}
            </span>
          ))}
        </Box>
        <NoteAddLabel noteLabels={this.props.labels} onAdd={this.props.onAdd} />
      </>
    );
  }
}

export default NoteLabels;
