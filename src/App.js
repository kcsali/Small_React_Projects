import React, { Component } from "react";
import "./styles.css";
//import {render} from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }
  addItem() {
    //random id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          Add new...
          <br />
          <input
            type="text"
            placeholder="type todo"
            value={this.state.newItem}
            onChange={e => {
              this.updateInput("newItem", e.target.value);
            }}
          />
          <button onclick={() => this.addItem()}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
