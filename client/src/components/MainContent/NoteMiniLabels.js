import { Box } from '@material-ui/core';
import React, { Component } from 'react';

class NoteMiniLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box display="flex" mb={2}>
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
    );
  }
}

export default NoteMiniLabels;
