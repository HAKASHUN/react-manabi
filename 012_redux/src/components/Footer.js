import React, { Component, PropTypes } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

export default class Footer extends Component {

  renderFilter(filter, name) {
    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter(SHOW_ALL, 'All')}
        {', '}
        {this.renderFilter(SHOW_COMPLETED, 'Completed')}
        {', '}
        {this.renderFilter(SHOW_ACTIVE, 'Active')}
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
  ]).isRequired
};