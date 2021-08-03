import { Box } from '@material-ui/core';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import MainContent from './components/MainContent/MainContent';
import TopBar from './components/TopBar/TopBar';
import React, { Component } from 'react';
import { fetchData, fetchNotes } from './store/notesSlice';
import { connect } from 'react-redux';
import NoteFull from './components/NoteFull/NoteFull';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  handleSearch(ev) {
    const textSearch = ev.target.value;
    this.props.dispatch(fetchNotes(textSearch));
  }

  render() {
    console.log('app render');
    return (
      <div className="App">
        {this.props.selectedNote && <NoteFull note={this.props.selectedNote} />}
        <TopBar onSearch={this.handleSearch} />
        <Box display="flex">
          <LeftBar labels={this.props.labels} />
          <Box flexGrow={1} flexDirection="column">
            <MainContent />
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNote: state.data.selectedNote,
    labels: state.data.labels,
  };
};

export default connect(mapStateToProps)(App);
