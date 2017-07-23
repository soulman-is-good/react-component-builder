import React, { Component } from 'react';
import ComponentBlock from './ComponentBlock';

export default class ComponentBuilder extends Component {
  render() {
    return (
      <div>
        <ComponentBlock { ...this.props.schema } />
      </div>
    );
  }
}
