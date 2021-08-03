import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewNoteActions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box>
        <Button type="submit" style={{ color: 'white' }}>
          Submit
        </Button>
        <Button onClick={this.props.onClose} style={{ color: 'white' }}>
          Close
        </Button>
      </Box>
    );
  }
}

export default connect()(NewNoteActions);
