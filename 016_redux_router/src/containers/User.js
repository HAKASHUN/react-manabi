import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        <p>Welocome to User Profile!</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(User);
