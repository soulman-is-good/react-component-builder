import React, { Component } from 'react';

/* Controls/ */
import NumericInput from './controls/NumericInput';
import TextInput from './controls/TextInput';
import Select from './controls/Select';
/* /Controls */

export default class ComponentBlock extends Component {
  constructor(props) {
    super(props);

    this.renderComponent = this.renderComponent.bind(this);
    this.renderBlocks = this.renderBlocks.bind(this);
  }

  renderBlocks(props) {
    const keys = Object.keys(props);

    return keys.map(key => (
      <ComponentBlock { ...props[key] } />
    ));
  }

  renderComponent(prop) {
    switch (prop.type) {
      case 'object':
        return this.renderBlocks(prop.properties);
      case 'integer':
        return (
          <NumericInput { ...prop } />
        );
      case 'string':
        if (prop.enum) {
          return (
            <Select { ...prop } />
          );
        }
        return (
          <TextInput { ...prop } />
        );
      default:
        return (
          <div>
            {prop.title}
            {prop.description}
          </div>
        );
    }
  }

  render() {
    return (
      <div className="component-block">
        <div className="component-block__label">
          {this.props.title}
        </div>
        <div className="component-block__control">
          {this.renderComponent(this.props)}
        </div>
      </div>
    );
  }
}
