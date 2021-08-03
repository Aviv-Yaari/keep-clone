import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteLabelsToAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const noteLabels = this.props.noteLabels;
    return (
      <Box display="flex">
        {this.props.labels.map((label) => (
          <div key={label._id}>
            {noteLabels.every((noteLabel) => noteLabel._id !== label._id) && (
              <Button
                style={{ color: 'white', backgroundColor: label.color }}
                onClick={() => this.props.onAdd({ labels: [...noteLabels, label] })}>
                {label.name}
              </Button>
            )}
          </div>
        ))}
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    labels: state.data.labels,
  };
};
export default connect(mapStateToProps)(NoteLabelsToAdd);
