import React, { Component } from 'react';
import NewNote from './NewNote/NewNote';
import NotesBox from './NotesBox';
import { connect } from 'react-redux';
import { Fragment } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pinned, unpinned } = this.props.notes;
    return (
      <main>
        <NewNote />
        <Fragment>
          {pinned && <NotesBox key="pinned" category="pinned" notes={pinned} />}
          {unpinned && <NotesBox key="unpinned" category="unpinned" notes={unpinned} />}
        </Fragment>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.data.notes,
  };
};

export default connect(mapStateToProps)(MainContent);
