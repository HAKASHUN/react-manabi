import React, { Component, PropTypes } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
        {name}
      </a>
    );
  }

  renderFilters() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter(SHOW_ALL, 'All')}
        {', '}
        {this.renderFilter(SHOW_COMPLETED, 'Completed')}
        {', '}
        {this.renderFilter(SHOW_ACTIVE, 'Active')}
        .
      </p>
    );
  }

  renderUndo() {
    return (
      <p>
        <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>Undo</button>
        <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>Redo</button>
      </p>
    );
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
        {this.renderUndo()}
      </div>
    );
  }
}
