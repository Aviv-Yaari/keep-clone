import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteMini from './NoteMini';
class NotesBox extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedNote: null };
    this.sizes = null;
    this.calcRandomSizes = this.calcRandomSizes.bind(this);
  }

  calcRandomSizes(notes) {
    return notes.map((note) => this.getRandomSize());
  }

  getRandomSize() {
    const height = Math.floor(Math.random() * 80) + 300;
    const width = Math.floor(Math.random() * 80) + 200;
    return { height, width };
  }

  componentDidMount() {
    const sizes = this.calcRandomSizes(this.props.notes);
    this.sizes = sizes;
  }

  render() {
    return (
      <Box>
        <h4>{this.props.category.toUpperCase()}</h4>
        <Box display="flex" flexWrap="wrap" paddingX="30px">
          {this.props.notes.map((note, index) => {
            return <NoteMini key={note._id} note={note} height="300px" width="200px" />;
          })}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNote: state.data.selectedNote,
  };
};

export default connect(mapStateToProps)(NotesBox);
