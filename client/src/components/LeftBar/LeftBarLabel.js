import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

class LeftBarLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { label } = this.props;
    return (
      <Box display="flex" alignItems="center">
        <Button onClick={this.props.onDelete} style={{ color: 'white' }}>
          <DeleteIcon fontSize="small" />
        </Button>
        <div
          style={{ margin: '0 10px', width: '10px', height: '10px', backgroundColor: label.color }}
        />
        <Button onClick={this.props.onClick} style={{ color: 'white' }}>
          {label.name}
        </Button>
      </Box>
    );
  }
}

export default LeftBarLabel;
