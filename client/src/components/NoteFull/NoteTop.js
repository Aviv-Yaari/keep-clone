import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box display="flex" justifyContent="space-between">
        <h1>Title</h1>
        <Box display="flex">
          <Button
            style={{ color: 'white' }}
            onClick={() => this.props.onPin({ isPinned: !this.props.note.isPinned }, true)}>
            {!this.props.note.isPinned ? 'PIN' : 'UNPIN'}
          </Button>
          <Button style={{ color: 'white' }} onClick={this.props.onDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    note: state.data.selectedNote,
  };
};

export default connect(mapStateToProps)(NoteTop);
