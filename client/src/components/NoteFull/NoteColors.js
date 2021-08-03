import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

class NoteColors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colorsJSX() {
    const colors = ['#4895ef', '#e63946', '#ffba08'];
    return colors.map((color) => (
      <FiberManualRecordRoundedIcon
        key={color.toString()}
        onClick={() => this.props.onChange({ color })}
        style={{ color, margin: '3px', cursor: 'pointer' }}
      />
    ));
  }

  render() {
    return (
      <Box display="flex" alignItems="center">
        <PaletteIcon style={{ color: 'black' }} />
        {this.colorsJSX()}
      </Box>
    );
  }
}

export default NoteColors;
