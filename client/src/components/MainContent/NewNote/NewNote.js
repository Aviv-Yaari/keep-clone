import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote, fetchData } from '../../../store/notesSlice';
import NewNoteExpanded from './NewNoteExpanded';

const initialNoteState = {
  isExpanded: false,
  noteData: { color: '#5f6368', text: '', labels: [] },
};

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = initialNoteState;
    this.handleExpand = this.handleExpand.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    await this.props.dispatch(createNote(this.state.noteData));
    this.setState(initialNoteState);
    this.props.dispatch(fetchData());
  }

  handleChange(updatedData) {
    this.setState((oldData) => ({ noteData: { ...oldData.noteData, ...updatedData } }));
  }

  handleClose(ev) {
    ev.stopPropagation();
    this.setState(initialNoteState);
  }

  handleExpand() {
    this.setState({ isExpanded: true });
  }

  render() {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" padding="40px 20px">
        <Box
          border="1px solid blue"
          width="600px"
          borderColor="#5f6368"
          borderRadius="20px"
          padding="20px"
          textAlign="left"
          style={{ backgroundColor: this.state.noteData.color }}
          onClick={this.handleExpand}>
          <NewNoteExpanded
            labels={this.state.noteData.labels}
            text={this.state.noteData.text}
            visible={this.state.isExpanded}
            onClose={this.handleClose}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <p hidden={this.state.isExpanded}>Take a note..</p>
        </Box>
      </Box>
    );
  }
}

export default connect()(NewNote);
