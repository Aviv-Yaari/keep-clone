import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.textRef = React.createRef();
  }

  render() {
    return (
      <textarea
        ref={this.textRef}
        value={this.props.text}
        onChange={() => this.props.onChange({ text: this.textRef.current.value })}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          outlineStyle: 'none',
          color: 'white',
          flexGrow: 1,
          fontFamily: 'inherit',
          fontSize: '1rem',
        }}></textarea>
    );
  }
}

export default connect()(NoteText);
