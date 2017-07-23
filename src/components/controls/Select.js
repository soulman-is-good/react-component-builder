import React, { Component } from 'react';

export default class Select extends Component {
  renderOptions() {
    return this.props.enum.map(item => (
      <option>
        {item}
      </option>
    ));
  }

  render() {
    return (
      <select { ...this.props }>
        {this.renderOptions()}
      </select>
    );
  }
}
