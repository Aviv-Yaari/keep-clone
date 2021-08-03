import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote, fetchData, selectNote, updateNote } from '../../store/notesSlice';
import NoteBottom from './NoteBottom';
import NoteLabels from './NoteLabels';
import NoteText from './NoteText';
import NoteTop from './NoteTop';

class NoteFull extends Component {
  constructor(props) {
    super(props);
    this.noteRef = React.createRef();
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOverlayClick() {
    this.props.dispatch(selectNote(null));
    this.props.dispatch(fetchData());
  }

  async handleChange(value, reFetch = false) {
    await this.props.dispatch(updateNote({ ...this.props.note, ...value }));
    if (reFetch) this.props.dispatch(fetchData());
  }

  async handleDelete() {
    await this.props.dispatch(deleteNote(this.props.note._id));
    this.handleOverlayClick();
  }

  render() {
    const { color, text, labels } = this.props.note;
    return (
      <div>
        <Box className="overlay" onClick={this.handleOverlayClick}>
          <Box
            className="note-full"
            display="flex"
            flexDirection="column"
            style={{ backgroundColor: color }}
            onClick={(ev) => ev.stopPropagation()}>
            <NoteTop onPin={this.handleChange} onDelete={this.handleDelete} />
            <NoteText text={text} onChange={this.handleChange} />
            <NoteLabels onAdd={this.handleChange} labels={labels} />
            <NoteBottom onChange={this.handleChange} />
          </Box>
        </Box>
      </div>
    );
  }
}

export default connect()(NoteFull);
