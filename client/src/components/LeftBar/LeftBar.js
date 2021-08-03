import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import LeftBarLabels from './LeftBarLabels';
class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="350px"
        marginRight="50px"
        marginLeft="50px">
        <LeftBarLabels labels={this.props.labels} />
      </Box>
    );
  }
}

export default LeftBar;
