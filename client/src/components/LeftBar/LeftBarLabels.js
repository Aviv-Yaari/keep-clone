import { Box, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLabel, deleteLabel, fetchData } from '../../store/notesSlice';
import LeftBarLabel from './LeftBarLabel';
import NewLabel from './NewLabel';

class LeftBarLabels extends Component {
  constructor(props) {
    super(props);
    this.state = { isAdding: false };
    this.handleLabelSelect = this.handleLabelSelect.bind(this);
    this.handleAddingLabel = this.handleAddingLabel.bind(this);
    this.handleNewLabel = this.handleNewLabel.bind(this);
    this.handleLabelDelete = this.handleLabelDelete.bind(this);
  }

  handleNewLabel(ev) {
    ev.preventDefault();
    const label = { name: ev.target[0].value, color: '#808080' };
    this.props.dispatch(createLabel(label));
    ev.target.reset();
  }

  handleAddingLabel() {
    this.setState({ isAdding: true });
  }

  handleLabelSelect(filter) {
    this.props.dispatch(fetchData(filter));
  }

  async handleLabelDelete(label) {
    await this.props.dispatch(deleteLabel(label._id));
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <Box display="flex" flexDirection="column">
        <h3>Labels</h3>
        <Button onClick={() => this.handleLabelSelect(null)} style={{ color: 'white' }}>
          All
        </Button>
        {this.props.labels.map((label) => (
          <LeftBarLabel
            key={label._id}
            label={label}
            onClick={() => this.handleLabelSelect({ label })}
            onDelete={() => this.handleLabelDelete(label)}
          />
        ))}
        {this.state.isAdding && <NewLabel onSubmit={this.handleNewLabel} />}
        <Button onClick={this.handleAddingLabel} style={{ color: 'white' }}>
          Add
        </Button>
      </Box>
    );
  }
}

export default connect()(LeftBarLabels);
