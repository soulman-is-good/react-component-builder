import React, { Component } from 'react';

export default class NumericInput extends Component {
  render() {
    return (
      <input { ...this.props } type="number" />
    );
  }
}
