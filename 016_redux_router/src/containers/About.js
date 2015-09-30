import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Welocome to About Page!</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(About);
