import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote } from '../../store/notesSlice';
import NoteMiniLabels from './NoteMiniLabels';

class NoteMini extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(selectNote(this.props.note));
  }

  render() {
    const { height, width } = this.props;
    const { text, color, labels } = this.props.note;
    return (
      <Box
        className="note-mini"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={height}
        width={width}
        padding="20px"
        borderRadius="10px"
        style={{ backgroundColor: color, wordWrap: 'break-word' }}
        onClick={this.handleClick}>
        {text}
        <NoteMiniLabels labels={labels} />
      </Box>
    );
  }
}

export default connect()(NoteMini);
