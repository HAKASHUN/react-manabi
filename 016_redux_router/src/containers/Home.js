import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welocome to Home!</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}


export default connect(mapStateToProps)(Home);
