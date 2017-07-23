import React, { Component } from 'react';
import ComponentBuilder from './components/ComponentBuilder';
import schema from './demo.json';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      schema
    };
    this.updateSchema = this.updateSchema.bind(this);
  }

  updateSchema() {
    try {
      const schema = JSON.parse(this.textRef.value);

      this.setState({
        schema
      });
    } finally {}
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.updateSchema}>Update form</button>
        </div>
        <div className="half">
          <textarea className="area" ref={(dom) => (this.textRef = dom)} defaultValue={JSON.stringify(this.state.schema)} />
        </div>
        <div className="half">
          <ComponentBuilder
            schema={this.state.schema}
          />
        </div>
      </div>
    );
  }
}

export default App;
