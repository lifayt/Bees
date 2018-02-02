import React, { Component } from 'react';
import script from "./script.js";
import Bees from './Bees';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      script: script.split("<br><br>")
    }
  }

  render() {
    return (
      <div className="bees">
        <Bees 
          script={this.state.script}
        />
      </div>
    );
  }
}

export default App;
